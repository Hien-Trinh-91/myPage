(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'dashboard',
      config: {
        url: '/dashboard',
        views: {
          '': {
            templateUrl: 'app/main/main.html'
          },
          'main@dashboard': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm',
          }
        }
      }
    }];
  }
})();
