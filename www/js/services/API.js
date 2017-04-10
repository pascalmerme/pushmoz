angular.module('PushMoz.Services')

.service('API', function ($resource) {
  return function (url, paramDefaults, actions, options) {
    return $resource(url, paramDefaults, actions, options);
  };
});
