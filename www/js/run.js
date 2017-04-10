angular.module('PushMoz')

.run(function ($ionicPlatform, CurrentStream, $state) {
  $ionicPlatform.ready(function () {
    if(CurrentStream.isLogged()) {
      console.log("true")
      $state.go('home')
    } else {
      console.log("false")
      $state.go('login')
    }
  });
})
