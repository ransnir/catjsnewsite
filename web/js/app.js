/*global define*/
'use strict';

/**
 * Angular Main Module
 */
define(['angular'], function (angular) {
    
	var app;

    app = angular.module('jqueryspa', ['ngRoute','ngScrollTo', 'ui.bootstrap'], function() {
        // module was loaded
       
    });
    return app;
});
