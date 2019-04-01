angular.module("accessSession", [])
.controller("sessionCtrl", function($http) {
  this.blah = "blah";
  console.log($http);
  $http.get("/api/news").then(data => {
    console.log(data);
  });
});
