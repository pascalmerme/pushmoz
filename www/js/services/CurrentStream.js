angular.module('PushMoz.Services')

.service('CurrentStream', function ($http, Configuration, Notifications) {
    var currentToken = "";
    var posts = {
      all: []
    };

    function isLogged() {
      currentToken = window.localStorage.getItem('token')
      if(currentToken) {
        Notifications.init(registerDevice)
        return true;
      } else {
        return false;
      }
    }

    function authenticate(token, callback) {
      $http.get(Configuration.apiEndpoint + '/authenticate.json?user_token=' + token).then(
        function(response) {
          currentToken = response.data.token
          window.localStorage.setItem('token', currentToken)
          Notifications.init(registerDevice)
          console.log('success')
          callback(true)
        },
        function(response) {
          console.log('error')
          callback(false)
        }
      )
    }

    function registerDevice(deviceId, devicePlatform) {
      $http.post(Configuration.apiEndpoint + '/register_device.json', {
        user_token: currentToken,
        push_id: deviceId,
        push_platform: devicePlatform
      }).then(
        function(response) {
          console.log('device register success')
        },
        function(response) {
          console.log('device register error')
        }
      )
    }

    function getPosts() {
      return posts
    }

    function loadPosts(callback) {
      $http.get(Configuration.apiEndpoint + '/posts.json?user_token=' + currentToken).then(
        function(response) {
          posts.all = response.data
          console.log('success')
          callback(true)
        },
        function(response) {
          console.log('error')
          callback(false)
        }
      )
    }
    function getPost(id) {
      return _.find(posts.all, { 'id': parseInt(id) });
    }

    function logout() {
      window.localStorage.removeItem('token')
    }

    return {
        isLogged: isLogged,
        authenticate: authenticate,
        logout: logout,
        loadPosts: loadPosts,
        getPosts: getPosts,
        getPost: getPost
    };
});
