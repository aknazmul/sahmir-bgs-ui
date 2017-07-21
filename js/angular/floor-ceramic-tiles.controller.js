'use strict';

app.controller('floorceramictilesCotroller', ['$scope', '$document', 'screenSize', 
function ($scope, $document, screenSize) {
 
//Mobile screenSize
    $scope.isShow = false;
    $scope.isMobile = screenSize.is('xs, sm');
    $scope.isMobile = screenSize.onChange($scope, 'xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });

    // console.log($scope.isMobile);


    $scope.products =  [
                    {
                        id: 1,
                        imgUrlstyle: "img/tiles-08.jpg",
                        name: "Product name 01",
                        pCode: "T467",
                    },
                    {
                        id: 2,
                        imgUrlstyle: "img/tiles-06.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 3,
                        imgUrlstyle: "img/tiles-03.jpg",
                        name: "Product name 03",
                        pCode: "T053",
                    },
                    {
                        id: 4,
                        imgUrlstyle: "img/tiles-04.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 5,
                        imgUrlstyle: "img/tiles-05.jpg",
                        name: "Product name 01",
                        pCode: "T467",
                    },
                    {
                        id: 3,
                        imgUrlstyle: "img/tiles-02.jpg",
                        name: "Product name 03",
                        pCode: "T053",
                    },
                    {
                        id: 4,
                        imgUrlstyle: "img/tiles-07.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 5,
                        imgUrlstyle: "img/tiles-01.jpg",
                        name: "Product name 01",
                        pCode: "T467",
                    },
                ]
        

}]);

 