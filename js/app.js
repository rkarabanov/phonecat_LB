'use strict';

/* App Module */
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
    }]);