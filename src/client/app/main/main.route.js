// (function () {
//   'use strict';

//   angular
//     .module('app.main')
//     .run(appRun);

//   appRun.$inject = ['routerHelper'];
//   /* @ngInject */
//   function appRun(routerHelper) {
//     routerHelper.configureStates(getStates());
//   }

//   function getStates() {
//     return [{
//       state: 'home',
//       config: {
//         url: '/home',
//         views: {
//           '': {
//             templateUrl: 'app/main/main.html'
//           },
//           'main@home': {
//             templateUrl: 'app/dashboard/dashboard.html',
//             controller: 'DashboardController',
//             controllerAs: 'vm',
//           }
//         }
//       }
//     }];
//   }
// })();
