'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html'
    }).state('marketplace', {
        url: '/marketplace',
        templateUrl: '../views/marketplace.html'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {

    // *****************************
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
    // *****************************

    $scope.getCardData = function () {
        mainService.getCardData().then(function (response) {
            console.log(response);
            $scope.cardInfo = response;
        });
    };
    $scope.getCardData();
});
'use strict';

angular.module('app').service('mainService', function ($http) {

    // *****************************
    this.test1 = "Service is working";
    // *****************************

    this.getCardData = function () {
        return $http({
            method: "GET",
            url: "./items.json"
        }).then(function (response) {
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
        });
    };
});
'use strict';

angular.module('app').directive('footerDir', function () {
    return {
        restrict: 'E',
        templateUrl: './views/directives/footerDir.html'
    };
});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/navDir.html'
    };
});
'use strict';

angular.module('app').directive('parallaxMountains', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/plxMountain.html'
    };
});
//# sourceMappingURL=bundle.js.map
