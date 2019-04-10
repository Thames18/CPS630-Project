
window.onload = function(){
    
}
function callAPI(){
    document.getElementById('results').innerHTML = "";
    const app = document.getElementById('results');
    
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);
    var input = document.getElementById("searchText").value;
    var apiURL = "https://api.staging.justgiving.com/15f3f5e5/v1/charity/search?q=" + encodeURIComponent(input) + "&format=json";
    var request = new XMLHttpRequest();

    request.open('GET', apiURL, true);
    
    request.onload= function(){
        var data = JSON.parse(request.responseText);
        data = data.charitySearchResults;
        if(this.readyState== 4 && this.status==200){
            data.forEach(charity => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            if(charity.description.length != 0 && charity.logoUrl != 0){
                const h1 = document.createElement('h1');
                h1.textContent = charity.charityDisplayName;

                const p = document.createElement('p');
                p.textContent = charity.description;

                const img = document.createElement('img');
                img.src = charity.logoUrl;
                img.setAttribute('class', 'charitylogo');

                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(img);
            }
            });
        } else{
            console.log('could not connect')
        }
    }

    request.send();
}