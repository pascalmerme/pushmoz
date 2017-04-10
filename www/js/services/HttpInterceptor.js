angular.module('PushMoz.Services')
.factory('HttpInterceptor', function ($q, $injector) {
    //console.log($injector.get('$state'));

    return {
        request: function (config) {
            // var token = window.localStorage.getItem('chfochpro_token');
            // config.headers.Authorization = 'Bearer ' + token;
            config.headers.ContentType = 'application/json'
            config.headers.AccessControlAllowOrigin = '*'
            return config;
        },
        requestError: function (rejection) {
            return $q.reject(rejection);
        },
        response: function (response) {
            return response;
        },
        responseError: function (response) {
            return $q.reject(response);
        }
    };
});
