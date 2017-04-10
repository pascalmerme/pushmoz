angular.module('PushMoz.Controllers')

.controller('LoginCtrl', function($scope, CurrentStream, $ionicPopup, $state) {

  $scope.data = {};
  $scope.data.token = "";

  $scope.authenticate = function() {
    CurrentStream.authenticate($scope.data.token, function(success) {
      if(success) {
        $state.go('home')
      } else {
        $ionicPopup.alert({
          title: "Authentification error",
          template: "Your token is wrong"
        })
      }
    });
  }
})
