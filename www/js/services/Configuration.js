angular.module('PushMoz.Services')

.factory('Configuration', function ($location) {

   apiEndpoint = 'http://pushmoz.herokuapp.com'

  return {
    apiEndpoint: apiEndpoint
  };
});
