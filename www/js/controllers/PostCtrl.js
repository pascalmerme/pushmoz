angular.module('PushMoz.Controllers')

.controller('PostCtrl', function($scope, CurrentStream, $stateParams, $sce, Notifications) {
  CurrentStream.loadPosts(function() {
    $scope.post = CurrentStream.getPost($stateParams.post_id)
  })
  
  Notifications.resetBadgeNumber()

  $scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
  };
})
