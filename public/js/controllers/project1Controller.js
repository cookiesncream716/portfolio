portfolio.controller('project1Controller', function($document, $scope){
	$scope.myInterval = 3000;
	$scope.active = 0;
	$scope.slides = [{id:0, image: '/static/shoe_index.png'}, {id: 1, image: '/static/shoe_dashboard1.png'}, {id: 2, image: '/static/shoe_dashboard2.png'}, {id: 3, image: '/static/shoe_all.png'}]
})