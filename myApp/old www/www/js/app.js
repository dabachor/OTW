// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ui.router'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        openFB.init({appId: '1516190191974288'});

        $stateProvider
            .state('loginPage', {
                url: "/loginPage",
                templateUrl: "templates/loginPage.html",
                controller: 'LoginCtrl'
            })

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html" ,
                controller :'AppCtrl'
            })

            .state('app.menu', {
                url: "/app",
                view: {
                    templateUrl: "templates/menu.html",
                    controller: 'AppCtrl'
                }
            })

            .state('app.feed', {
                cache: true,
                url: "/feed",
                views: {
                    'menuContent': {
                        templateUrl: "templates/feed.html",
                        controller: "FeedCtrl"
                    }
                }
            })

            .state('app.customersRequests', {
                cache: true,
                url: "/customersRequests",
                views: {
                    'menuContent': {
                        templateUrl: "templates/customersRequests.html",
                        controller: "CustomersRequestsCtrl"
                    }
                }
            })

            .state('app.myRequests', {
                cache: true,
                url: "/myRequests",
                views: {
                    'menuContent': {
                        templateUrl: "templates/myRequests.html",
                        controller: "MyRequestsCtrl"
                    }
                }
            })

            .state('app.settings', {
                cache: true,
                url: "/settings",
                views: {
                    'menuContent': {
                        templateUrl: "templates/settings.html",
                        controller: "SettingsCtrl"
                    }
                }
            })

            .state('app.pendingDeals', {
                cache: true,
                url: "/pendingDeals",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pendingDeals.html",
                        controller: 'PendingDealsCtrl'
                    }
                }
            })

            .state('app.profile', {
                cache: true,
                url: "/profile",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })

            .state('app.feed.post', {
                cache: true,
                url: "/post",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/post.html",
                        controller: "PostCtrl"
                    }
                }
            })

            .state('app.feed.checkIn', {
                cache: true,
                url: "/checkIn",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/checkIn.html"
//                        controller: "checkInCtrl"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/loginPage');
    });


