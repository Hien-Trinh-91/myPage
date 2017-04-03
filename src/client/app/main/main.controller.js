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
      var token = localStorageService.get('token');
      if (token !== null) {
        $state.go('dashboard');
      } else {
        $state.go('login');
      }
    }
  }
})();
