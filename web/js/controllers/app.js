/*global define*/
'use strict';

/**
 * The main controller for the our app
 */

define(['app', 'common/manager', 'services/data', "directives/scrollto"], function (app, manager, appdata, scrolldirective) {

    // App controller creation
    app.controller('appController', ['appData', '$scope', "$interval", "$http", "$location", "$stateParams",
        function(appData, $scope, $interval, $http, $location, $stateParams) {
        var map;


        // On meta-data retrieved setup the UI accordingly
        appData.then(function(data) {
            // Set the data into scope

            $scope.setHeight = function() {

                var topOffset = window.innerHeight;
                $("<style>")
                    .prop("type", "text/css")
                    .html("#main {\n" +
                        "height : " + topOffset + "px;\n" +
                        "}"
                ).appendTo("head");

            }();

            $scope.user;

            $scope.pages = data.all();

            $scope.loginGoogle = function() {
                debugger;
                window.location = location.origin + '/auth/google';
//                $location.path(location.origin + '/auth/google');
//                $location.replace();
//
                $http.get('/user').success(function(data) {
                    debugger;
                });
            }
            $scope.featurectnt = [


                {"name": "Continuous Integration & Delivery as a Service" ,
                    "Value": "A simple push to your repository runs your automated tests and configured deployments on our powerful machines. From a simple deployment to Heroku to complex Deployment Pipelines for your large infrastructure, all can be set up with ease.",
                    "order": 0,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#f3f6fb"
                },
                {"name": "Continuous Integration & Delivery as a Service",
                    "Value": "A simple push to your repository runs your automated tests and configured deployments on our powerful machines. From a simple deployment to Heroku to complex Deployment Pipelines for your large infrastructure, all can be set up with ease.",
                    "order": 1,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#ffffff"
                },
                {"name": "Continuous Integration &  Delivery as a Service",
                    "Value": "A simple push to your repository runs your automated tests and configured deployments on our powerful machines. From a simple deployment to Heroku to complex Deployment Pipelines for your large infrastructure, all can be set up with ease.",
                    "order": 2,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#f3f6fb"

                },
                {"name": "Continuous Integration &  Delivery as a Service",
                    "Value": "A simple push to your repository runs your automated tests and configured deployments on our powerful machines. From a simple deployment to Heroku to complex Deployment Pipelines for your large infrastructure, all can be set up with ease.",
                    "order": 2,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#f3f6fb"

                }
            ];


            // Run the common script
            var _interval;
            if (data) {
                _interval = $interval(function(){
                    if (manager.init($scope, scrolldirective, data)) {
                        $interval.cancel(_interval);

                    }
                }, 200) ;
            }

            window.addEventListener('resize', function(event){
                var main = $("#main");
                var topOffset = window.innerHeight;
                main.css({"height" : topOffset});

            });


        });


    }]);





});
