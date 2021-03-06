/*


// Version 0.0.5
// AngularJS simple hash-tag scroll alternative
// this directive uses click event to scroll to the target element
//
// <div ng-app="app">
//   <div ng-controller="myCtrl">
//     <a scroll-to="section1">Section 1</a>
//   </div>
//   ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="">Back to Top</a>
//   </div>
//  ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="section1" offset="60">Section 1 with 60px offset</a>
//   </div>
// </div>

angular.module('ngScrollTo', []);

angular.module('ngScrollTo')
    .directive('scrollTo', ['ScrollTo', function(ScrollTo){
        debugger ;
        return {
            restrict : "AC",
            compile : function(){

                return function(scope, element, attr) {
                    element.bind("click", function(event){
                        ScrollTo.idOrName(attr.scrollTo, attr.offset);
                    });
                };
            }
        };
    }])
    .service('ScrollTo', ['$window', 'ngScrollToOptions', function($window, ngScrollToOptions) {

        this.idOrName = function (idOrName, offset, focus) {//find element with the given id or name and scroll to the first element it finds
            var document = $window.document;

            if(!idOrName) {//move to top if idOrName is not provided
                $window.scrollTo(0, 0);
            }

            if(focus === undefined) { //set default action to focus element
                focus = true;
            }

            //check if an element can be found with id attribute
            var el = document.getElementById(idOrName);
            if(!el) {//check if an element can be found with name attribute if there is no such id
                el = document.getElementsByName(idOrName);

                if(el && el.length)
                    el = el[0];
                else
                    el = null;
            }

            if(el) { //if an element is found, scroll to the element
                if (focus) {
                    el.focus();
                }

                ngScrollToOptions.handler(el, offset);
            }

            //otherwise, ignore
        }

    }])
    .provider("ngScrollToOptions", function() {
        this.options = {
            handler : function(el, offset) {
                if (offset) {
                    var top = $(el).offset().top - offset;
                    window.scrollTo(0, top);
                }
                else {
                    el.scrollIntoView();
                }
            }
        };
        this.$get = function() {
            return this.options;
        };
        this.extend = function(options) {
            this.options = angular.extend(this.options, options);
        };
    });



angular.module("myApp", ["ngScrollTo"])
    .config(function(ngScrollToOptionsProvider) {

        ngScrollToOptionsProvider.extend({
            handler: function(el) {

                $(el).scrollintoview();
            }
        });
    });





global define

'use strict';
*
 * Directive for smooth scrolling to a specific section by its Id
 *
 * type: The tag type
 * template-url: The template url to be included
 *


define(['app'], function (app) {

    var _scrollTo = function(attrs) {

        var location = (attrs ? attrs.scrollTo : undefined),
            target,
            to,
            elt,
            body;

        if (location) {
            target = $("#" + location);
            to = (target ? target.offset().top : 0);

            // scroll to the section
            if (to !== undefined) {
                elt = $("html, body");
                body = $("body");
                if (to === 0 && body.scrollTop() === 0) {
                    elt.animate({scrollTop:5 }, "fast");
                    elt.animate({scrollTop: 0 }, "slow");
                } else {
                    elt.animate({scrollTop:to }, "slow");
                }
            }
        }
    };

    app.directive('scrollTo', function ($location, $anchorScroll) {
        return function (scope, element, attrs) {
            // bind the element to on click event
            element.bind('click', function (event) {

                _scrollTo(attrs);

            });

        };
    });

    return {
        scrollTo: _scrollTo
    }
});
*/
