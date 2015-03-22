/*global define*/
'use strict';

/**
 * The main controller for the our app
 */



define(['app', 'common/manager', 'services/data', "directives/scrollto"], function (app, manager, appdata, scrolldirective) {

<<<<<<< HEAD



    app.filter('to_trusted', ['$sce', function($sce){
        debugger;
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);





        // App controller creation
     app.controller('appController', ['appData', '$scope', "$interval", function(appData, $scope, $interval) {
=======
    // App controller creation
    app.controller('appController', ['appData', '$scope', "$interval", "$http", "$location", "$stateParams",
        function(appData, $scope, $interval, $http, $location, $stateParams) {
>>>>>>> c4251bc5eda6b6c9db134481cd4b64d0b1f19530
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

<<<<<<< HEAD
            //$scope.trustedHtml = $sce.trustAsHtml($scope.featurectnt);




=======
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
>>>>>>> c4251bc5eda6b6c9db134481cd4b64d0b1f19530
            $scope.featurectnt = [


                {"name": "FOCOUS ON WHAT METTERS  >>> " ,
                    "Value": " Developers don't test ! <br>" +
                    "  well ,  there is some truth in that statement , <br>" +
                    "bad developers don't test ,great developers always find ways to automate their tests and achieve nirvana .<br>"+
                    "Still testing end user experience in mobile web is so hard that even great developers start slacking ….. , <br>" +
                    "catjs would like to simplify this issue , focusing on testing your User experience not  maintain "+
                    "your test harness  ( or install JVM on  your environment ) ",
                    "order": 0,
                    "img" : "../../css/images/iphone6White.png",
                    "bcg": "#f3f6fb"
                },
                {"name": "Any Device , Any Browser , Any Time !!! ",
                    "Value": "Whatever device you use  with any OS , such as  iOS , Android , " +
                        "windows phone (  and even blackberry ), running Safari , Chrome or Firefox or other <br> " +
                        "CATJS will execute your test without additional setting needed , no special drivers , no additional tests <br>" +
                        "<font-size=18px> One </font-size>  test to run across all configuration .",
                    "order": 1,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#ffffff"
                },
                {"name": "Superior Dev environment @@@",
                    "Value": "There is one big difference between us and all the rest of the frameworks out there<breakline>" +
                     "We plugin into your existing mobile web development  environment / life cycle  ( if you don’t have one, we will help setting it up ) <br> "+
                     "No special action needed  , no need to write test in java / c# or other , write it javascript  …<br>" +
                     "Your tests === Your Code=== Your Development echo system",
                    "order": 2,
                    "img" : "https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/home/home-continuousintegration-531efe9fe595d52b819fb660c6f54670.svg",
                    "bcg": "#f3f6fb"

                },
                {"name": "Some Goodies @@@",
                        "Value": "We want " +
                    "" +
                    "" +
                    "to make sure you spent  less time on configuration / setup / capability , " +
                        "so we build catjs in a way you can build your own plugins to assist in your day to day work " +
                        "you can already find some nice plugins such as taking a snapshot , retrieving device info and other "+
                        "Task Manager  , File system crawler with actions (Watch is supported) , Spawn an external process , etc )" +
                        " we keep adding content , and will love if you will contribute as well " ,
                    "order": 3,
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
