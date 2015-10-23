(function(angular){
  'use strict';

  angular.module('contactModule',[])
    .controller('contactController', function(){
      this.contacts = [
        {
          name: 'John Doe',
          phone: '06 00 00 00 00'
        },
        {
          name: 'Jean Martin',
          phone: '06 10 10 10 10'
        }
      ];
    });

})(window.angular);
