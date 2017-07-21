'use strict';

app.controller('homeCotroller', ['$scope', '$document', 'screenSize', 
function ($scope, $document, screenSize) {
 
//Mobile screenSize
    $scope.isShow = false;
    $scope.isMobile = screenSize.is('xs, sm');
    $scope.isMobile = screenSize.onChange($scope, 'xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });

    // console.log($scope.isMobile);


    $scope.catalogueItems = [
        {
            id: 1,
            imgUrl: "img/catalogue-01.jpg",
            title: "Catalogue item # 01",
        },
        {
            id: 2,
            imgUrl: "img/catalogue-02.jpg",
            title: "Catalogue item # 02",
        },
        {
            id: 3,
            imgUrl: "img/catalogue-03.jpg",
            title: "Catalogue item # 03",
        },
        {
            id: 4,
            imgUrl: "img/catalogue-02.jpg",
            title: "Catalogue item # 02",
        }
    ]

}]);

 