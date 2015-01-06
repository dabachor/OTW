// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

(function() {

    'use strict';

    angular.module('app', [
        'ionic',
        'blocks.router',
        'login',
        'app.myProfile',
        'app.settings',
        'app.myRequests',
        'app.mainFeed',
        'app.customersRequests',
        'app.pendingDeals',
        'app.layout'
    ])
        .run(function($ionicPlatform){
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }

            })
        })
        .config(function() {
            openFB.init({appId: '1516190191974288'});
        });

})();
