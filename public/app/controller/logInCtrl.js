angular.module('loginController',['authServices'])
.controller('loginCtrl',function(Auth,$location,$timeout){
   var app=this;
   

this.doLogin=function(loginData){
    app.errorMsg=false;
    app.successMsg=false;
    Auth.login(app.loginData).then(function(data){
       console.log(data);
      if(data.data.success){
          app.successMsg = data.data.message+"...redirecting to main page";
          
          $timeout(function(){
             $location.path('/main');

          },2500)
      }
      else{
           app.errorMsg = data.data.message;
      }

    });
 };


});

