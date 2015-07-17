(function(angular) {
  'use strict';

  /**
   * Requirement Check Factory
   */
  angular.module('calcentral.factories').factory('reqCheckFactory', function($http) {
    var url = 'dummy/json/req_check.json';
    var getCourses = function(options) {
      return $http.get(url);
    };

    return {
      getCourses: getCourses
    };
  });
}(window.angular));
