(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('ProjectDetailsTwoController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope) {

		$scope.pageTitle = 'Project Item # 02';

		$scope.projectItems = [
			{
				id: 1, 
				status: "Under Construction",
				duration: "5 Week",
				cost: "",
				description: "Master Bed, Drawing and Dining interior design",
				imgUrl: "img/project-02/1.jpg",
				thumbs: [
					{
						id: 1,
						thumbUrl: "img/project-02/1.jpg",
					},
					{
						id: 2,
						thumbUrl: "img/project-02/2.jpg",
					},
					{
						id: 3,
						thumbUrl: "img/project-02/3.jpg",
					},
					{
						id: 4,
						thumbUrl: "img/project-02/4.jpg",
					},
					{
						id: 5,
						thumbUrl: "img/project-02/5.jpg",
					},
					{
						id: 6,
						thumbUrl: "img/project-02/6.jpg",
					},
					{
						id: 7,
						thumbUrl: "img/project-02/7.jpg",
					},
					{
						id: 8,
						thumbUrl: "img/project-02/8.jpg",
					},
					{
						id: 9,
						thumbUrl: "img/project-02/9.jpg",
					}
				]
			}
		]

	}]);

})();