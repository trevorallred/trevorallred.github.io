'use strict';

var controllers = angular.module('myApp.controllers', []);

controllers.controller('overviewController', ['$scope', 'resume_data', function ($scope, resume_data) {
    $scope.resume_data = resume_data.data;
}]);

controllers.controller('whereController', ['$scope', '$routeParams', 'resume_data', function ($scope, $routeParams, resume_data) {
    var wheres = resume_data.data.where;
    var whats = resume_data.data.what;
    for(var key in wheres) {
        if (wheres.hasOwnProperty(key)) {
            var slug = wheres[key].slug;
            if (slug == $routeParams.slug) {
                $scope.company = wheres[key];
            }
        }
    }
    console.info(whats);
    $scope.resume_whats = new Array();
    for(var key in whats) {
        if (whats.hasOwnProperty(key)) {
            var where = whats[key].where;
            console.info("checking" + where);
            if (where == $routeParams.slug) {
                console.info("adding" + key);
                $scope.resume_whats.push(whats[key]);
            }
        }
    }

}]);
