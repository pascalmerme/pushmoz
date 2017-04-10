angular.module('PushMoz')

.config(function($ionicConfigProvider, $httpProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text(' ');
  $ionicConfigProvider.views.swipeBackEnabled(false);

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
});
