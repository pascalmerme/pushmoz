angular.module('PushMoz.Routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/Home.html',
    controller: 'HomeCtrl',
    cache: false
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/Login.html',
    controller: 'LoginCtrl'
  })

  .state('post', {
    url: '/post/:post_id',
    templateUrl: 'templates/Post.html',
    controller: 'PostCtrl',
    cache: false
  })
})
