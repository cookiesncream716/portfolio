var portfolio = angular.module('portfolio', [
	'ngRoute',
	'ui.bootstrap'
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

