angular.module('appRoutes',['ngRoute'])  //import ngroute
.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/',{         //when default , directto login 
  templateUrl:'app/views/login.html'
  }) 
  .when('/signup',{  //direct to sign up 
  templateUrl:'app/views/signup.html',controller:'signCtrl',controllerAs:'register'
  })
  .when('/main',{  //after login direct to main page
    templateUrl:'app/views/main.html'
    })
  .otherwise({ redirectTo:'/'});//other conditions direct to login page

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});