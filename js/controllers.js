'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute','ngResource','ngAnimate']);

phonecatApp
    .config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {
    $routeProvide
        .when('/', {
            templateUrl: 'template/home.html',
            controller: 'PhoneListCtrl'
        })
        .when('/phones/:phoneId', {
            templateUrl: 'template/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        })
        // .otherwise({
        //     redirectTo: '/'
        // });
}])

///Factory
    .factory('Phone', [
        '$resource', function ($resource) {
            return $resource('phones/:phoneId.:format', {
                phoneId: 'phones',
                format: 'json',
                apiKey: 'someKeyThis'
            });
        }
    ]
)
///Filter
.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    }
})


.controller('PhoneListCtrl', ['$scope', '$http', '$location', 'Phone',
    function ($scope, $http, $location, Phone) {
        $scope.phones = Phone.query();

    }])

//Phone Detail Controller
.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    var url = 'phones/' + $routeParams.phoneId + '.json';
    $http.get(url).success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function (imageUrl) {
        // $scope.mainImageUrl.addClass(animation).addClass(ng-enter).addClass(ng-enter-active);



        $scope.mainImageUrl = imageUrl;
    }
    
}]);


