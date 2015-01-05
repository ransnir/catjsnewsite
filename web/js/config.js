/*global require*/
'use strict';

/*
    RequireJS configuration
 */
require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularoute: '../bower_components/angular-route/angular-route',
		jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap : "../bower_components/bootstrap/ui-bootstrap-tpls-0.11.2.min",
        
	},
	shim: {

		angular: {
			exports: 'angular',
            deps:['jquery']
		},
        bootstrap : {
            deps:['jquery']
        },

        angularoute: {
            deps:['angular']
        }
	}
});

/*
    @[scrap
        @@require[
            /cat/lib/cat.js
        ]
    ]@
*/
/*
    Initial require call
 */
require(['angular', 'angularoute', 'bootstrap', 'app', 'config/router', 'controllers/app', 'directives/generatelt', 'directives/scrollto'], function (angular) {

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jqueryspa']);

    });
        
});
