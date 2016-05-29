'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute','ngResource','ngAnimate']);

phonecatApp



.controller('PhoneListCtrl', ['$scope', '$http', '$location', 'Phone',
    function ($scope, $http, $location, Phone) {
        $scope.phones = Phone.query();

    }]);



