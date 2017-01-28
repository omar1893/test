'use strict';

angular.module('myApp.view1', ['ngRoute'])


.controller('View1Ctrl', ['$http','$scope', function($http, $scope) {
$scope.selected = "";
$scope.cart = [];
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

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
    
    for (var i = 0; i < $scope.productos.length; i++) {
          var int = data.products[i].price.replace(".","");
          $scope.productos[i].number = parseInt(int);
      }
    $scope.copy = $scope.productos;
    })

$scope.hasChanged = function() {
  console.log($scope.selected);
    $scope.products = [];
    if($scope.selected.length == 1){
  
      for (var i = 0; i < $scope.copy.length; i++) {
        
          for (var j = 0; j < $scope.copy[i].categories.length; j++){
            
            if($scope.copy[i].categories[j] == $scope.selected){
              $scope.products.push($scope.copy[i]);
              console.log($scope.products);
            }

          }

      }

      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }

    if($scope.selected == "available"){
      for (var i = 0; i < $scope.copy.length; i++){
        if($scope.copy[i].available){
          $scope.products.push($scope.copy[i]);
        }
      }
      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }

    if($scope.selected == "not"){
      for (var i = 0; i < $scope.copy.length; i++){
        if(!$scope.copy[i].available){
          $scope.products.push($scope.copy[i]);
        }
      }
      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }

    if($scope.selected == "best_seller"){
      for (var i = 0; i < $scope.copy.length; i++){
        if($scope.copy[i].best_seller){
          $scope.products.push($scope.copy[i]);
        }
    }
      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }

    if($scope.selected == "bigger"){
      for (var i = 0; i < $scope.copy.length; i++){
        if($scope.copy[i].number > 30000){
          $scope.products.push($scope.copy[i]);
        }
    }
      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }

    if($scope.selected == "lower"){
      for (var i = 0; i < $scope.copy.length; i++){
        if($scope.copy[i].number <= 10000){
          $scope.products.push($scope.copy[i]);
        }
    }
      $scope.productos =[];
      $scope.productos = $scope.products;
      $scope.products = [];
    }   

    if($scope.selected == "all"){
      $scope.productos =[];
      $scope.productos = $scope.copy;
      $scope.products = [];
    }   

}

$scope.openModalConfirmation = function(item){
  $scope.item = item;
  $('#modal2').modal('open');
}

$scope.closeModalConfirmation = function(){
  $scope.cart.push($scope.item)
  console.log($scope.cart);
  $('#modal2').modal('close');
}

$scope.openRemoveItem = function(item){
  $('#modal4').modal('open');
  $scope.remove = item;
}

$scope.closeRemoveItem = function(){
  $('#modal4').modal('close');

  for(var i = 0; i < $scope.cart.length; i++){
    if($scope.cart[i].id == $scope.remove.id){
      $scope.cart.splice(i,1);
    }
  }
}

}]);