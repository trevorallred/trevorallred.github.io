'use strict';

var services = angular.module('myApp.services', []);

services.factory('resumeService', ['$http', function ($http) {
    return {
        getResumeData: function () {
            return $http({ method: 'GET', url: 'resume.json' }).success(function (data) {
                return data;
            });
        }
    }
}]);
