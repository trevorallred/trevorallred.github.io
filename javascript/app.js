var resumeApp = angular.module('resumeApp', [
    'ngRoute',
    'ResumeController'
]);

resumeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'app/company.html',
                controller: 'ResumeController'
            }).
            otherwise({
                redirectTo: 'app/index.html'
            });
    }]);

resumeApp.controller('ResumeController', function ($scope) {

});
