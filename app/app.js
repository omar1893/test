'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================


        .state('view1', {
            url: '/view1',
            templateUrl: 'templates/view1/view1.html',
            controller: 'View1Ctrl'
        })

        .state('view2', {
            url: '/view2',
            templateUrl: 'templates/view2/view2.html',
            controller: 'View2Ctrl'
        })



});
