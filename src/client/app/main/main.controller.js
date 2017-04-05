(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', ControllerController);

  ControllerController.inject = ['$state', 'localStorageService'];

  function ControllerController($state, localStorageService) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
      if (!localStorageService.get('username')) {
        $state.go('login');
      } else {
        $state.go('dashboard');
      }
    }
  }
})();
