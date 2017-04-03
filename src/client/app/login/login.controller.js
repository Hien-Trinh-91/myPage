(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['logger', '$state', 'localStorageService'];
  /* @ngInject */
  function LoginController(logger, $state, localStorageService) {
    var vm = this;
    vm.title = 'Admin';
    vm.submit = submit;
    activate();

    function activate() {
      logger.info('Activated Login View');
    }

    function submit(user) {
      if ((user.name === "admin") && (user.password === "123456")) {
        localStorageService.set('username', user.name);
        $state.go('dashboard');
      } else {
        logger.error('Invalid Username or Password');
      }
    }
  }
})();
