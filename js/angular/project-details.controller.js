'use strict';

app.controller('floorceramictilesCotroller', ['$scope', '$document', 'screenSize', 
function ($scope, $document, screenSize) {
  
$scope.projectItems = [
    {
        id: 1,
        name:"Floor decoration",
        status: "Fully Completed",
        duration: "3 Week",
        cost: "2500.00",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "img/tiles-01.jpg",
        thumbs: [
            {
                id: 1,
                thumbUrl: "img/tiles-01.jpg",
            },
            {
                id: 2,
                thumbUrl: "img/tiles-02.jpg",
            },
            {
                id: 3,
                thumbUrl: "img/tiles-03.jpg",
            },
            {
                id: 4,
                thumbUrl: "img/tiles-04.jpg",
            }
        ]
    }
]

}]);

 