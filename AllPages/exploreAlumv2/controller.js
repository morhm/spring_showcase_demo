

/**
 * Create an angular module called 'cs142App' and assign it to a DOM property with the same name.
 * The [] argument specifies module is to be created and doesn't require any other module.
 */
var cs142App = angular.module('cs142App', ['ngRoute']);

// /**
//  * Create a controller named 'MainController'.  The array argument specifies the controller
//  * function and what dependencies it has.  We specify the '$scope' service so we can have access
//  * to the angular scope of view template.
//  */


cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users/:id', {
                templateUrl: 'youtube.html',
                controller: 'YTController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);


cs142App.controller('MainController', ['$scope', function($scope) {
   $scope.main = {};
   $scope.main.people = window.cs142models.obj;
   console.log(window.cs142models.obj);
   $scope.main.title = 'We are Overfelt Alumni';
}]);

cs142App.controller('YTController', ['$scope','$routeParams', '$sce',
    function ($scope, $routeParams, $sce) {
        var id = JSON.parse($routeParams.id);
        $scope.main.personObject = JSON.parse($routeParams.id);
        var youtube = "https://youtube.com/embed/" + id.youtube + "?autoplay=1";
        $scope.main.youtube = $sce.trustAsResourceUrl(youtube);

    }]);
