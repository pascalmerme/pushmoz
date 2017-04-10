angular.module('PushMoz.Services')

.service('Notifications', function ($http, Configuration, $state) {

  var push = {};

  function init(registerCallback) {
    push = PushNotification.init({
        android: {
            senderID: "198136851626"
        },
        ios: {}
    });

    push.on('registration', function(data) {
      registerCallback(data.registrationId, device.platform)
    });

    push.on('notification', function(data) {
      $state.go('post', {post_id: data.additionalData.post_id})
    })
  }

  function resetBadgeNumber() {
    push.setApplicationIconBadgeNumber(function() {}, function() {}, 0)
  }

  return {
      init: init,
      resetBadgeNumber: resetBadgeNumber
  }
})
