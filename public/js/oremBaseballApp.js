angular.module('oremBaseballApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home',{
                url:'/',
                templateUrl: "../views/oremBaseballHome.html"
            })
            .state('roster',{
                url:'/roster',
                templateUrl: "../views/roster.html",
                controller: 'rosterCtrl'
            })
            .state('stats',{
                url:'/stats/:id',
                templateUrl: "../views/stats.html",
                controller: 'rosterCtrl'
            })
            .state('photos',{
                url:'/photos',
                templateUrl: "../views/photos.html",
                controller: 'photosCtrl'
            })
            .state('history',{
                url:'/history',
                templateUrl: "../views/history.html",
                controller: 'historyCtrl'
            });            
            // .state('conference',{
            //     url:'/conference',
            //     templateUrl: "../views/conference.html",
            //     controller: 'conferenceCtrl'
            // })
            // .state('player',{
            //     url:'/player',
            //     templateUrl: "../views/player.html",
            //     controller: 'playerCtrl'
            // })
            // .state('rankings',{
            //     url:'/rankings',
            //     templateUrl: "../views/rankings.html",
            //     controller: 'rankingsCtrl'
            // })
            // .state('schedule',{
            //     url:'/schedule',
            //     templateUrl: "../views/schedule.html",
            //     controller: 'scheduleCtrl'
            // })


        $urlRouterProvider
            .otherwise('/');
    });
