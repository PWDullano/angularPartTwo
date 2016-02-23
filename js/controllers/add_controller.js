app.controller('AddController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.firstDigit = $routeParams.firstDigit
  $scope.secondDigit = $routeParams.secondDigit
  $scope.total = +$scope.firstDigit +  +$scope.secondDigit
}])
