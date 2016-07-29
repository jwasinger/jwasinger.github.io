(function() {
  'use strict';
  angular.module('app', ['ngMaterial', 'ngMessages', 'ngRoute'])
  .controller("AppCtrl", function($scope) {
    $scope.currentNavItem = 'page1';
    $scope.templates = [
      {url: "/templates/about.html.tmpl", name:"About"},

      {url: "/templates/resume.html.tmpl", name:"Resume"},
      {url: "/templates/projects.html.tmpl", name:"Projects/Portfolio"},
    ]
  });
})();
