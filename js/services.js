'use strict';

/* Services */
phonecatApp
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