(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('ChairController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Chair';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/chair/D3.jpg",
				name: "Chair # 01",
				pCode: "D3",
			},
			{
				id: 2,
				imgUrlstyle: "img/chair/D4.jpg",
				name: "Chair # 02",
				pCode: "D4",
			},
			{
				id: 3,
				imgUrlstyle: "img/chair/NP-513.jpg",
				name: "Chair # 03",
				pCode: "NP-513",
			},
			{
				id: 4,
				imgUrlstyle: "img/chair/NP-514.jpg",
				name: "Chair # 04",
				pCode: "NP-514",
			},
			{
				id: 5,
				imgUrlstyle: "img/chair/NP-525.jpg",
				name: "Chair # 05",
				pCode: "NP-525",
			},
			{
				id: 6,
				imgUrlstyle: "img/chair/NP-525A.jpg",
				name: "Chair # 06",
				pCode: "NP-525A",
			},
			{
				id: 7,
				imgUrlstyle: "img/chair/NP-532 back.jpg",
				name: "Chair # 07",
				pCode: "NP-532 back",
			},
			{
				id: 8,
				imgUrlstyle: "img/chair/NP-532.jpg",
				name: "Chair # 08",
				pCode: "NP-532",
			},
			{
				id: 9,
				imgUrlstyle: "img/chair/NP-532V.jpg",
				name: "Chair # 09",
				pCode: "NP-532V",
			},
			{
				id: 10,
				imgUrlstyle: "img/chair/NP-533.jpg",
				name: "Chair # 10",
				pCode: "NP-533",
			},
			{
				id: 11,
				imgUrlstyle: "img/chair/NP-533A.jpg",
				name: "Chair # 11",
				pCode: "NP-533A",
			},
			{
				id: 12,
				imgUrlstyle: "img/chair/NP-535.jpg",
				name: "Chair # 12",
				pCode: "NP-535",
			},
			{
				id: 13,
				imgUrlstyle: "img/chair/NP-537.jpg",
				name: "Chair # 13",
				pCode: "NP-537",
			},
			{ 
				imgUrlstyle: "img/chair/NP-538.jpg",
				name: "Chair # 14",
				pCode: "NP-538",
			},
			{ 
				imgUrlstyle: "img/chair/NP-538V.jpg",
				name: "Chair # 15",
				pCode: "NP-538V",
			},
			{ 
				imgUrlstyle: "img/chair/NP-540.jpg",
				name: "Chair # 16",
				pCode: "NP-540",
			},
			{ 
				imgUrlstyle: "img/chair/NP-542.jpg",
				name: "Chair # 17",
				pCode: "NP-542",
			},
			{ 
				imgUrlstyle: "img/chair/NP-542V.jpg",
				name: "Chair # 18",
				pCode: "NP-542V",
			},
			{ 
				imgUrlstyle: "img/chair/NP-545.jpg",
				name: "Chair # 19",
				pCode: "NP-545",
			},
			{ 
				imgUrlstyle: "img/chair/NP-546.jpg",
				name: "Chair # 20",
				pCode: "NP-546",
			},
			{ 
				imgUrlstyle: "img/chair/NP-547.jpg",
				name: "Chair # 21",
				pCode: "NP-547",
			},
			{ 
				imgUrlstyle: "img/chair/NP-550.jpg",
				name: "Chair # 22",
				pCode: "NP-550",
			},
			{ 
				imgUrlstyle: "img/chair/NP563.jpg",
				name: "Chair # 23",
				pCode: "NP563",
			},
			{ 
				imgUrlstyle: "img/chair/NP-575.jpg",
				name: "Chair # 24",
				pCode: "NP-575",
			},
			{ 
				imgUrlstyle: "img/chair/NP-586.jpg",
				name: "Chair # 25",
				pCode: "NP-586",
			},
			{ 
				imgUrlstyle: "img/chair/NP-586V.jpg",
				name: "Chair #26",
				pCode: "NP-586V",
			},
			{ 
				imgUrlstyle: "img/chair/NP-662.jpg",
				name: "Chair # 27",
				pCode: "NP-662",
			},
			{ 
				imgUrlstyle: "img/chair/NP-662A.jpg",
				name: "Chair # 28",
				pCode: "NP-662A",
			},
			{ 
				imgUrlstyle: "img/chair/NP-662A1.jpg",
				name: "Chair # 29",
				pCode: "NP-662A1",
			},
			{ 
				imgUrlstyle: "img/chair/NP-665.jpg",
				name: "Chair # 30",
				pCode: "NP-665",
			},
			{ 
				imgUrlstyle: "img/chair/NP-666.jpg",
				name: "Chair # 31",
				pCode: "NP-666",
			},
			{ 
				imgUrlstyle: "img/chair/NP-668.jpg",
				name: "Chair # 32",
				pCode: "NP-668",
			},
			{ 
				imgUrlstyle: "img/chair/NP-700.jpg",
				name: "Chair # 33",
				pCode: "NP-700",
			},
			{ 
				imgUrlstyle: "img/chair/NP-700A.jpg",
				name: "Chair # 34",
				pCode: "NP-700A",
			},
			{ 
				imgUrlstyle: "img/chair/NP-706.jpg",
				name: "Chair # 35",
				pCode: "NP-706",
			},
			{ 
				imgUrlstyle: "img/chair/NP-707.jpg",
				name: "Chair # 36",
				pCode: "NP-707",
			},
			{ 
				imgUrlstyle: "img/chair/NP-707A.jpg",
				name: "Chair # 37",
				pCode: "NP-707A",
			},
			{ 
				imgUrlstyle: "img/chair/NP-710.jpg",
				name: "Chair # 38",
				pCode: "NP-710",
			},
			{ 
				imgUrlstyle: "img/chair/NP-712.jpg",
				name: "Chair # 39",
				pCode: "NP-712",
			},
			{ 
				imgUrlstyle: "img/chair/NP-720.jpg",
				name: "Chair # 40",
				pCode: "NP-720",
			},
			{ 
				imgUrlstyle: "img/chair/NP-721.jpg",
				name: "Chair # 41",
				pCode: "NP-721",
			},
			{ 
				imgUrlstyle: "img/chair/NP-800.jpg",
				name: "Chair # 42",
				pCode: "NP-800",
			},
			{ 
				imgUrlstyle: "img/chair/NP-850.jpg",
				name: "Chair # 43",
				pCode: "NP-850",
			},
			{ 
				imgUrlstyle: "img/chair/NP-860.jpg",
				name: "Chair # 44",
				pCode: "NP-860",
			},
			{ 
				imgUrlstyle: "img/chair/NP-861.jpg",
				name: "Chair # 45",
				pCode: "NP-861",
			},
			{ 
				imgUrlstyle: "img/chair/NP1314.jpg",
				name: "Chair # 46",
				pCode: "NP1314",
			}, 
		]

	}]);

})();