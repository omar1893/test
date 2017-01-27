'use strict';

angular.module('myApp.main', ['ngRoute'])


.controller('MainCtrl', ['$scope','$http', function($scope, $http) {

$http.get('json/data.json')
.success(function(data){
    $scope.categorias = data.categories;
    
    })

setTimeout(function(){
 $('.collapsible-header').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
}, 0);


}]);