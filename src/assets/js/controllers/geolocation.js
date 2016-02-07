(function(angular){
  'use strict';

  angular.module('MyApp', ['ngGeolocation', 'google-maps'])
  .controller('geolocCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {

    $geolocation.watchPosition({
      timeout: 60000,
      maximumAge: 250,
      enableHighAccuracy: true
    })

    $scope.$watch('myPosition.coords', function (newValue, oldValue) {
      $scope.map = {
        center: {
          latitude: newValue.latitude,
          longitude: newValue.longitude
        },
        zoom: 16
      };
    }, true);

  });


})(window.angular);
