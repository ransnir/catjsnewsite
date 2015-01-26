/*global define*/
'use strict';

/**
 * The main controller for the app
 */

define(['app'], function (app) {
    
    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/app.html',
                controller  : 'appController'
            })


            // route for the doc page
            .when('/doc', {
                templateUrl : 'templates/doc.html',
                controller  : 'appController'
            })

//
//            // route for the doc page
//            .when('/contact', {
//                templateUrl : 'templates/features.html',
//                controller  : 'appcontact'
//            })

            .when('/:id', {
            templateUrl: function(params){ 
                return '/pages/' + params.id;   
            },
                controller  : 'appController'
            });

           
    });
    
});
