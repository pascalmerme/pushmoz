angular.module('PushMoz.Controllers')

.controller('HomeCtrl', function($scope, CurrentStream, $state, $sce, Notifications) {

  $scope.posts = CurrentStream.getPosts()

  CurrentStream.loadPosts(function() {})

  $scope.doRefresh = function() {
    CurrentStream.loadPosts(function() {
      $scope.$broadcast('scroll.refreshComplete');
    })
  }

  $scope.showPost = function(id) {
    $state.go('post', {post_id: id})
  }

  $scope.logout = function() {
    CurrentStream.logout()
    $state.go('login')
  }

  $scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
  };
})
