var app = angular.module("anish", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/about', {
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }).
    when('/projects', {
      templateUrl: 'projects.html',
      controller: 'ProjectsCtrl'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    }).
    otherwise({redirectTo: '/main'});
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('projects.json').then(function(response){
    $scope.projects = response.data;
  });
}])

.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('projects.json').then(function(response){
    $scope.projects = response.data;
  });
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('location.json').then(function(response){
    $scope.contacts = response.data;
  });
}]);