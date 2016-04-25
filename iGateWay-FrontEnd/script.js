		var config_ip = "http://127.0.0.1:5000/";

		var testApp = angular.module('testApp', ['ngRoute','ui.bootstrap']);

		testApp.config(['$routeProvider',function($routeProvider) {
			$routeProvider
					.when('/home', {
						templateUrl : 'pages/home.html' 		//where to redirect, routing calls
					})
					.when('/display',{
						templateUrl: 'pages/list.html',
						controller: 'displayController'
					  })
					.when('/search',{
					 templateUrl:'pages/search.html',
					 controller:'searchController'
				     });
		}]);