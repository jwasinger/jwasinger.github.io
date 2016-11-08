(function() {
  'use strict';
  angular.module('app', ['ngMaterial', 'ngMessages', 'ngRoute'])
  .controller("AppCtrl", function($scope) {
    $scope.currentNavItem = 'page1';
    $scope.templates = [
      {url: "/templates/jared-wasinger.html", name:"Home"},
      //{url: "/templates/jared-wasinger-resume.html", name:"Resume"},
      {url: "/templates/jared-wasinger-projects.html", name:"Projects/Portfolio"},
    ]
  });
})();
