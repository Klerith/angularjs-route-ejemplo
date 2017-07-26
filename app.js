var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = 'parciales/menu.html';

}]);

// Configuración de las rutas

app.config(function($routeProvider){

$routeProvider
    .when('/',{
      templateUrl: 'parciales/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
