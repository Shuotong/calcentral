(function(angular) {
  'use strict';

  /**
   * requirement check controller
   */
  angular.module('calcentral.controllers').controller('ReqCheckController',  function(reqCheckFactory, $scope) {
    reqCheckFactory.getCourses().success(
      function(data) {
        angular.extend($scope, data);
      }
    );
  });
})(window.angular);
