(function(){

 	'use strict';

	var starter = angular.module('starter', ['ionic', 'ngCordova']);

	var starterController = starter.controller('ExampleController', ExampleController);

	ExampleController.$inject = ['$cordovaFileTransfer'];

	function ExampleController($cordovaFileTransfer){

		alert("Controllers are loaded");

		var exampleController = this;

		exampleController.upload = function(){

            alert("Calling Upload function");

			 var options = {
            fileKey: "avatar",
            fileName: "image.png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        $cordovaFileTransfer.upload("http://192.168.56.1:1337/file/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
		}
	}
})();