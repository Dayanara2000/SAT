var cantidad1 = 20
var cantidad2 = 0.12
var Betzy = angular.module('Betzy', []);
Betzy.controller('IVA', function($scope) {
  $scope.iva = cantidad1 * cantidad2;
}); 


