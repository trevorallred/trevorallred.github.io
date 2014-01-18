var resumeApp = angular.module('resumeApp', [
    'ngRoute'
]);

resumeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/overview.html',
                controller: 'OverviewController'
            }).
            when('/where/', {
                templateUrl: 'app/company.html',
                controller: 'ResumeController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

resumeApp.controller('OverviewController', function ($scope, $http) {
    $http.get('resume.json').success(function(data) {
        $scope.resume_data = data;
    });
});

resumeApp.controller('ResumeController', function ($scope, $http) {
    $http.get('resume.json').success(function(data) {
        $scope.resume_data = data;
    });
});
