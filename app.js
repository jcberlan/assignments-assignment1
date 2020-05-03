(function () {
'use strict';
angular.module('Choosemenu', [])

.controller('MessageController', MessageController);
  MessageController.$inject = ['$scope'];
  function MessageController($scope) {
  $scope.name = "";
  $scope.Message = "";
  //$scope.mensage = function () {
  //return "that is too much";

// programing help: console.log ($scope.Message);
//Called when click on button: Check if too much
$scope.Checkif2much = function () {

  //Boolean function to returns if the input is empty
  function isemptyornull(value)
    {
      return !(typeof value === "string" && value.length > 0);
    };

// Case checks:
  //    - cempty or null
  //    - 1 to 3 courses
  //    - More than 3
  const words = $scope.name.split(',');
  if (isemptyornull($scope.name))
    {
      $scope.Message = "Please enter data first";
    }
      else if ((words.length >= 1) && (words.length <= 3))
      {
        $scope.Message = "Enjoy!";
      }
  else
     {
       $scope.Message = "Too much!";
     }
    // check: console.log ($scope.Message);
  };
}
})();
