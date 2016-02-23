var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/goodbye', {
        templateUrl: 'partials/goodbye.html',
        controller: 'GoodbyeController'
      })
      .when('/hello', {
        templateUrl: 'partials/hello.html',
        controller: 'HelloController'
      })
      .when('/add/:firstDigit/:secondDigit', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/div/:firstDigit/:secondDigit', {
        templateUrl: 'partials/div.html',
        controller: 'DivController'
      })
      .otherwise('/')
});
