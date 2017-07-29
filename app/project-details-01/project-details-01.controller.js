(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('ProjectDetailsOneController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope) {

		$scope.pageTitle = 'Project Item # 01';

		$scope.projectItems = [
			{
				id: 1, 
				status: "Under Construction",
				duration: "2 Week",
				cost: "",
				description: "Master Bed interior design",
				imgUrl: "img/project-01/1.jpg",
				thumbs: [
					{
						id: 1,
						thumbUrl: "img/project-01/1.jpg",
					},
					{
						id: 2,
						thumbUrl: "img/project-01/2.jpg",
					},
					{
						id: 3,
						thumbUrl: "img/project-01/3.jpg",
					},
					{
						id: 4,
						thumbUrl: "img/project-01/4.jpg",
					},
					{
						id: 5,
						thumbUrl: "img/project-01/5.jpg",
					},
					{
						id: 6,
						thumbUrl: "img/project-01/6.jpg",
					},
				]
			}
		]

	}]);

})();