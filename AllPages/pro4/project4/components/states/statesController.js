'use strict';
/**
 * Define StatesController for the states component of CS142 project #4
 * problem #2.  The model data for this view (the states) is available
 * at window.cs142models.statesModel().
 */

cs142App.controller('StatesController', ['$scope', function($scope) {
   //This is the code for CS142 Project #4, Problem #2
   $scope.allStates = window.cs142models.statesModel();

}]);
