var portfolio = angular.module('portfolio', [
	'ngRoute',
	'ui.bootstrap',
	'duScroll'
])

portfolio.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/project1', {
			templateUrl: 'partials/project1.html'
		})
		.when('/project2', {
			templateUrl: 'partials/project2.html'
		})
		.when('/project3', {
			templateUrl: 'partials/project3.html'
		})
		.when('/project4', {
			templateUrl: 'partials/project4.html'
		})
		.when('/project5', {
			templateUrl: 'partials/project5.html'
		})
		.when('/project6', {
			templateUrl: 'partials/project6.html'
		})
		.otherwise({
			templateUrl: 'partials/dashboard.html'
		})
})

