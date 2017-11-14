var zabatny = angular.module('zabatny', ['ngMaterial','ui.router', 'ngAnimate','ui.bootstrap']  );
zabatny.config(['$stateProvider', '$urlRouterProvider','$locationProvider' ,function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html'
        })
        .state('merchant', {
            url: '/merchant',
            templateUrl: 'app/views/merchant.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html'
        })
        .state('faq', {
            url: '/faq',
            templateUrl: 'app/views/faq.html'
        })
        .state('terms', {
            url: '/terms',
            templateUrl: 'app/views/terms.html'
        })
}]).controller('zabatnyC', ['$scope','$timeout',
    function($scope,$timeout) {
        $scope.pageContent = false;
        $scope.pageLoader = true;
        $('.zabatnyNavbar .navbar-nav li a').click(function () {
            $('.navbar-collapse').removeClass('in');

        })
        $timeout(function () {
            $scope.pageLoader = false;
            $scope.pageContent = true;
            $('.pageContent').show();
        }, 8000)
    }
]);/*.run(['$rootScope', '$state', '$timeout','$stateParams', function ($rootScope, $state, $timeout,$stateParams) {

    $rootScope.pageLoader = true;
    $timeout(function () {
        $rootScope.pageLoader = false;
        $rootScope.pageContent = true;
    }, 2000)


}]);*/