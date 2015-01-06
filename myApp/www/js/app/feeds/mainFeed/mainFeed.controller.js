(function() {

    angular
        .module('app.mainFeed')
        .controller('MainFeed', MainFeed);

    function MainFeed( $scope,$ionicPopover) {
        $scope.navTitle = '<span> <i class="icon ion-social-rss">&nbsp; Feed</i></span>';

        $scope.footerTabs = [
            {"value":"Post","id":"post", "icon":"ion-android-textsms", "onClickOpen":"openPopover($event)"},
            {"value":"Check-In","id":"checkIn", "icon":"ion-map", "onClickOpen":"openPopover($event)"}
        ];

        $ionicPopover.fromTemplateUrl('js/app/layout/post/post.html', {
			id: 'post',
            backdropClickToClose: true,
            scope: $scope
        }).then(function(popover) {
            $scope.postPopover = popover;
        });

        $ionicPopover.fromTemplateUrl('js/app/layout/checkIn/checkIn.html', {
			id: 'checkIn',
            backdropClickToClose: true,
            scope: $scope
        }).then(function(popover) {
            $scope.checkInPopover = popover;
        });


        $scope.openPopover = function($event) {
            var id = $event.currentTarget.id;

            if(id == 'post'){
                $scope.postPopover.show($event);
            }
            if(id == 'checkIn'){
                $scope.checkInPopover.show($event);
            }
        };
    }
})();
