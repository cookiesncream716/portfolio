portfolio.controller('project2Controller', function($document, $scope){
	$scope.myInterval = 3000;
	$scope.active = 0;
	$scope.slides = [{id:0, image: '/static/hb_login.png'}, {id: 1, image: '/static/hb_friend.png'}, {id: 2, image: '/static/hb_edit.png'}, {id: 3, image: '/static/hb_invite.png'}, {id: 4, image: '/static/hb_map.png'}]
})