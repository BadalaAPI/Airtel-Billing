// create the module and name it
  var airtelApp = angular.module('airtelApp', ['ngRoute']);

  // routes
  airtelApp.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'home.html',
        controller  : 'usersController'
      })
      .when('/Home', {
        templateUrl : 'home.html',
        controller  : 'usersController'
      })
      // route for the about page
      .when('/Users', {
        templateUrl : 'users.html',
        controller  : 'usersController'
      })

      // route for the service page
      .when('/Cu', {
        templateUrl : 'cu.html',
        controller  : 'usersController'
      })
            // route for the service page
      .when('/Details', {
        templateUrl : 'details.html',
        controller  : 'usersController'
      });
  
  
  });
  // create the controller and inject Angular's $scope
 airtelApp.controller('usersController', function($scope,$http) {
        $scope.getAllDetails=function(){
            $scope.getUserDetails();
            $scope.getCuDetails();
            console.log("Contents")
        }
        $scope.getCuDetails=function(){
            $scope.contents="";
            $http.get('/AllCu').success(function(response){
              $scope.contents=response;
              })
            console.log("getting the CU details");
        }
        $scope.getUserDetails=function(){
            $scope.Usercontents="";
            $http.get('/all').success(function(response) {
              $scope.Usercontents = response;
            });
        } 
        window.onload=function(){
            $scope.getAllDetails();
            console.log("getting Pie Data");
            $http.get('/getPieData').success(function(response){
              console.log("controller Response",response)

            });
        }
  });
