(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('ReceptionTableController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Reception Table';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/reception-table/1.jpg",
				name: "Reception Table # 01",
				pCode: "RST0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/reception-table/2.jpg",
				name: "Reception Table # 02",
				pCode: "RST0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/reception-table/3.jpg",
				name: "Reception Table # 03",
				pCode: "RST0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/reception-table/4.jpg",
				name: "Reception Table # 04",
				pCode: "RST0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/reception-table/5.jpg",
				name: "Reception Table # 05",
				pCode: "RST0035",
			},
			{
				id: 6,
				imgUrlstyle: "img/reception-table/6.jpg",
				name: "Reception Table # 06",
				pCode: "RST0036",
			},
			{
				id: 7,
				imgUrlstyle: "img/reception-table/7.jpeg",
				name: "Reception Table # 07",
				pCode: "RST0037",
			},
			{
				id: 8,
				imgUrlstyle: "img/reception-table/8.jpg",
				name: "Reception Table # 08",
				pCode: "RST0038",
			},
			{
				id: 9,
				imgUrlstyle: "img/reception-table/9.jpg",
				name: "Reception Table # 09",
				pCode: "RST0039",
			},
			{
				id: 10,
				imgUrlstyle: "img/reception-table/10.jpg",
				name: "Reception Table # 10",
				pCode: "RST00310",
			},
			{ 
				imgUrlstyle: "img/reception-table/11.jpg",
				name: "Reception Table # 11",
				pCode: "RST00311",
			},
			{ 
				imgUrlstyle: "img/reception-table/12.jpg",
				name: "Reception Table # 12",
				pCode: "RST00312",
			},
			{ 
				imgUrlstyle: "img/reception-table/13.jpg",
				name: "Reception Table # 13",
				pCode: "RST00313",
			},
			{ 
				imgUrlstyle: "img/reception-table/14.jpg",
				name: "Reception Table # 14",
				pCode: "RST00314",
			},
			{ 
				imgUrlstyle: "img/reception-table/15.jpg",
				name: "Reception Table # 15",
				pCode: "RST00315",
			},
			{ 
				imgUrlstyle: "img/reception-table/16.jpg",
				name: "Reception Table # 16",
				pCode: "RST00316",
			},
			{ 
				imgUrlstyle: "img/reception-table/17.jpg",
				name: "Reception Table # 17",
				pCode: "RST00317",
			},
			{ 
				imgUrlstyle: "img/reception-table/18.jpg",
				name: "Reception Table # 18",
				pCode: "RST00318",
			},
			{ 
				imgUrlstyle: "img/reception-table/19.jpg",
				name: "Reception Table # 19",
				pCode: "RST00319",
			},
			{ 
				imgUrlstyle: "img/reception-table/20.jpg",
				name: "Reception Table # 20",
				pCode: "RST00320",
			},
			{ 
				imgUrlstyle: "img/reception-table/21.jpg",
				name: "Reception Table # 21",
				pCode: "RST00321",
			},
			{ 
				imgUrlstyle: "img/reception-table/22.jpg",
				name: "Reception Table # 22",
				pCode: "RST00322",
			},
			{ 
				imgUrlstyle: "img/reception-table/23.jpg",
				name: "Reception Table # 23",
				pCode: "RST00323",
			},
			{ 
				imgUrlstyle: "img/reception-table/24.jpg",
				name: "Reception Table # 24",
				pCode: "RST00324",
			},
		]

	}]);

})();