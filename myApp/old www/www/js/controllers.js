angular.module('starter.controllers', ['ionic', 'ui.router'])

    .controller('AppCtrl', function($scope, $state, $ionicModal, $timeout) {
        $scope.menuItems = [
            {"title":"Profile", "stateName":"app.profile", "shortHref":"profile", "icon":"ion-person"},
            {"title":"Feed", "stateName":"app.feed", "shortHref":"feed", "icon":"ion-social-rss"},
            {"title":"Customers Requests", "stateName":"app.customersRequests", "shortHref":"customersRequests", "icon":"ion-archive"},
            {"title":"My Requests", "stateName":"app.myRequests", "shortHref":"myRequests", "icon":"ion-paper-airplane"},
            {"title":"Pending Deals", "stateName":"app.pendingDeals", "shortHref":"pendingDeals", "icon":"ion-unlocked"},
            {"title":"Settings", "stateName":"app.settings", "shortHref":"settings", "icon":"ion-gear-b"}
        ];
    })

    .controller('ProfileCtrl', function($scope, $state, $rootScope) {
        $rootScope.currentState = $state.current.name;

        $scope.navTitle = '<span> <i class="icon ion-person">&nbsp; My Profile</i></span>';

        openFB.api({
            path: '/me',
            params: {fields: 'id,name'},
            success: function(user) {
                $scope.$apply(function() {
                    $scope.user = user;
                });
            },
            error: function(error) {
                alert(' Oops! something went wrong :-( ');
            }
        });
    })

    .controller('LoginCtrl', function($scope, $state) {
        $scope.doLogin = function(loginData) {
            console.log(loginData.username);
            $state.go('app.profile');
        };

        $scope.fbLogin = function() {
            openFB.login(
                function(response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $scope.closeLogin();
                        $state.go('app.profile');
                    } else {
                        alert('Facebook login failed');
                    }
                },
                {scope: 'email,publish_actions'}
            );
        }
    })

    .controller('FeedCtrl', function($scope, $state, $rootScope, $ionicModal, $ionicPopover) {
        document.body.classList.add('platform-ios');;
        $rootScope.currentState = $state.current.name;
        $scope.navTitle = '<span> <i class="icon ion-social-rss">&nbsp; Feed</i></span>';

        $scope.footerTabs = [
            {"value":"Post", "icon":"ion-android-textsms", "onClickOpen":"openPopover('post')"},
            {"value":"Check-In", "icon":"ion-map", "onClickOpen":"openPopover('checkIn')"}
        ];

//        $ionicModal.fromTemplateUrl('templates/post.html', {
//            id: 'post',
//            backdropClickToClose: true,
//            scope: $scope,
//            animation: 'slide-in-up'
//        }).then(function(modal) {
//            $scope.postModal = modal;
//        });
//
//        $ionicModal.fromTemplateUrl('templates/checkIn.html', {
//            id: 'checkIn',
//            backdropClickToClose: true,
//            scope: $scope,
//            animation: 'slide-in-up'
//        }).then(function(modal) {
//            $scope.checkInModal = modal;
//        });

        $ionicPopover.fromTemplateUrl('templates/post.html', {
            backdropClickToClose: true,
            scope: $scope
        }).then(function(popover) {
            $scope.postPopover = popover;
        });

        $ionicPopover.fromTemplateUrl('templates/checkIn.html', {
            backdropClickToClose: true,
            scope: $scope
        }).then(function(popover) {
            $scope.checkInPopover = popover;
        });

//        $scope.$on('$destroy', function() {
//            $scope.postModal.remove();
//            $scope.checkInModal.remove();
//        });

        $scope.openPopover = function(id) {  // Why not working properly???? :(
            if(id == 'post'){
                $scope.postPopover.show();
            }
            if(id == 'checkIn'){
                $scope.checkInPopover.show();
            }
        };

//        $scope.closeModal = function(id) {
//            if(id == 'post') $scope.postModal.hide();
//            if(id == 'checkIn') $scope.checkInModal.hide();
//        };

    })

    .controller('CustomersRequestsCtrl', function($scope, $state, $rootScope) {
        $rootScope.currentState = $state.current.name;
        $scope.navTitle = '<span> <i class="icon ion-archive">&nbsp; Customers Requests</i></span>';
    })

    .controller('MyRequestsCtrl', function($scope, $state, $rootScope) {
        $rootScope.currentState = $state.current.name;
        $scope.navTitle = '<span> <i class="icon ion-paper-airplane">&nbsp; My Requests</i></span>';
    })

    .controller('SettingsCtrl', function($scope, $state, $rootScope) {
        $rootScope.currentState = $state.current.name;
        $scope.navTitle = '<span> <i class="icon ion-gear-b">&nbsp; Settings</i></span>';
    })

    .controller('PendingDealsCtrl', function($scope, $state, $rootScope) {
        $rootScope.currentState = $state.current.name;
        $scope.navTitle = '<span> <i class="icon ion-unlocked">&nbsp; Pending Deals</i></span>';
    })

    .controller('PostCtrl', function($scope, $ionicModal){
    })