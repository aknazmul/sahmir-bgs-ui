
(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('layoutCotroller', ['$scope', '$document', 'screenSize',
     function ($scope, $document, screenSize) {

        //Mobile screenSize
        $scope.isShow = false;
        $scope.isMobile = screenSize.is('xs, sm');
        $scope.isMobile = screenSize.onChange($scope, 'xs, sm', function (isMatch) {
            $scope.isMobile = isMatch;
        });

        // console.log($scope.isMobile);


        $scope.items = [
            {
                id: 1,
                name: "nazmul",
                age: "27",
            },
            {
                id: 2,
                name: "Adiyan",
                age: "one year",
            }
        ]

	}]);

})();