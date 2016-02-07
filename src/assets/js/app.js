(function(angular){
  'use strict';

  angular.module('myApp',[
  'ngRoute',
  'helloModule','contactModule', 'checkinModule'
  ])

  .config(function($routeProvider) {
    $routeProvider
        .when('/',{
          templateUrl: 'assets/templates/checkinList.html',
        })
        .when('/checkin/:checkinId', {
          templateUrl: 'assets/templates/checkinDetails.html',
          controller: 'checkinDetailsController'
        });
  });

})(window.angular);
