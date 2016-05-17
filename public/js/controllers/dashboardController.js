portfolio.controller('dashboardController', function($scope, $http){
	$scope.alerts = []
	$scope.mailMe = function(){
		var data = {name: $scope.contactMe.name, email: $scope.contactMe.email, phone: $scope.contactMe.phone, message: $scope.contactMe.message}
		console.log(data)
		$http.post('/contact_form', data).
			success(function(data, status, headers, config){
				$scope.alerts = [{type: 'success', msg: 'Thanks for your message ' + data.name}];
				// $scope.message = 'Thanks for you message ' + data.name;
				console.log($scope.alerts)
				$scope.contactMe = [];
			}).
			error(function(data, status, headers, config){
				$scope.alerts = [{type: 'danger', msg: 'There was an error sending your message'}];
				console.log($scope.alerts);
				$scope.contactMe = [];
			})
	};
	$scope.closeAlert = function(index){
		$scope.alerts.splice(index, 1);
	}
})