var resumeServices = angular.module('ResumeServices', ['ngResource']);

resumeServices.factory('ResumeServices', ['$resource',
    function ($resource) {
        return $resource('resume.json', {}, {
            query: {method: 'GET'}
        });
    }]);
