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
		.otherwise({
			templateUrl: 'partials/dashboard.html'
		})
})

