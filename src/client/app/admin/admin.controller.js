(function () {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger', 'localStorageService', '$state'];
  /* @ngInject */
  function AdminController(logger, localStorageService, $state) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      if (!localStorageService.get('username')) {
        $state.go('login');
      }
      logger.info('Activated Admin View');
    }
  }
})();
