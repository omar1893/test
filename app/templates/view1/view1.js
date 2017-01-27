'use strict';

angular.module('myApp.view1', ['ngRoute'])


.controller('View1Ctrl', ['$http','$scope', function($http, $scope) {

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

$http.get('json/data.json')
.success(function(data){
    $scope.categorias = data.categories;
    $scope.productos = data.products;
    console.log($scope.productos);
    })

}]);