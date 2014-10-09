var deskApp = angular.module('deskApp', ['ngRoute', 'ngResource']);

deskApp.config(['$routeProvider', function($routeProvider) {

        $routeProvider.
                when('/filters', {
                    controller: 'filtersController',
                    templateUrl: 'assets/filters.html'
                }).
                when('/filter_cases/:filter_id', {
                    controller: 'filterCasesController',
                    templateUrl: 'assets/get_cases.html'
                }).
                when('/home', {
                    templateUrl: '/assets/home.html'
                }).
                when('/all_labels', {
                    controller: 'AllLabelsController',
                    templateUrl: '/assets/all_labels.html'
                }).
                when('/new_label', {
                    controller: 'AddLabelController',
                    templateUrl: '/assets/new_label.html'
                }).
                when('/assign_label', {
                    controller: 'AssignLabelController',
                    templateUrl: '/assets/assign_label.html'
                }).
                when('/update_label', {
                    controller: 'UpdateLabelController',
                    templateUrl: '/assets/assign_label.html'
                }).
                otherwise({redirectTo: '/home'});
    }]);
