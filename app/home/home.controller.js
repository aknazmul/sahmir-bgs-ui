(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('homeController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope) {
		 

	  //====================================
    // Slick 1
    //====================================
    // $scope.number1 = [1, 2, 3, 4, 5, 6, 7, 8];

    $scope.number1 = [
		{
      name: "Quote For Commercial",
      subTitle: "We have an offer of Interior and Exterior Design for your Commercial Apartment.",
			imgUrl: "img/residential.jpg",   
			linkQuote: "project-details-1",
    },
    {
      name: "Quote For Residential",
      subTitle: "We have an offer of Interior and Exterior Design for your Residential Apartment.",
			imgUrl: "img/commercial.jpg",   
			linkQuote: "project-details-1",
    }, 
	];

    $scope.slickConfig1Loaded = true;
    $scope.updateNumber1 = function () {
      $scope.slickConfig1Loaded = false;
      $scope.number1[2] = '123';
      $scope.number1.push(Math.floor((Math.random() * 10) + 100));
      $timeout(function () {
        $scope.slickConfig1Loaded = true;
      }, 5);
    };
    $scope.slickCurrentIndex = 0;
    $scope.slickConfig = {
      dots: true,
      fade: true,
      autoplay: true,
      // initialSlide: 3,
      infinite: true,
      autoplaySpeed: 3000,
      speed: 500,
      method: {},
      event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
        //   console.log('before change', Math.floor((Math.random() * 10) + 100));
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          $scope.slickCurrentIndex = currentSlide;
        },
        breakpoint: function (event, slick, breakpoint) {
        //   console.log('breakpoint');
        },
        destroy: function (event, slick) {
        //   console.log('destroy');
        },
        edge: function (event, slick, direction) {
        //   console.log('edge');
        },
        reInit: function (event, slick) {
        //   console.log('re-init');
        },
        init: function (event, slick) {
        //   console.log('init');
        },
        setPosition: function (evnet, slick) {
        //   console.log('setPosition');
        },
        swipe: function (event, slick, direction) {
        //   console.log('swipe');
        }
      }
    };



	//====================================
    // Catalogue slider item
    //====================================
    $scope.projects = [
		{
			name: "Project # 01",
			imgUrl: "img/project-01/1.jpg",
			workStatus: "Under Construction",
			duration: "2 Week",
			cost: "",
			linkDetails: "project-details-01",
		},
		{
			name: "Project # 02",
			imgUrl: "img/project-02/6.jpg",
			workStatus: "Under Construction",
			duration: "5 Week",
			cost: "",
			linkDetails: "project-details-02",
    },  
    {
			name: "Project # 01",
			imgUrl: "img/project-01/1.jpg",
			workStatus: "Under Construction",
			duration: "2 Week",
			cost: "",
			linkDetails: "project-details-01",
		},
		{
			name: "Project # 02",
			imgUrl: "img/project-02/6.jpg",
			workStatus: "Under Construction",
			duration: "5 Week",
			cost: "",
			linkDetails: "project-details-02",
		},  
	];
    $scope.projectsLoaded = true;
    $scope.projectSetting = {
      method: {}, 
	    autoplay: true,  
      autoplaySpeed: 3000, 
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

 
    //====================================
    // Catalogue slider item
    //====================================
    $scope.catalogues = [
		{
			name: "Catalogue item # 01",
			imgUrl: "img/catalogue-01.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 02",
			imgUrl: "img/catalogue-02.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 03",
			imgUrl: "img/catalogue-03.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 04",
			imgUrl: "img/catalogue-02.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 05",
			imgUrl: "img/catalogue-01.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 06",
			imgUrl: "img/catalogue-02.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 07",
			imgUrl: "img/catalogue-03.jpg",
			link: ""
		},
		{
			name: "Catalogue item # 08",
			imgUrl: "img/catalogue-02.jpg",
			link: ""
		},
	];
    $scope.slickConfig3Loaded = true;
    $scope.slickConfig3 = {
      method: {}, 
	  autoplay: true,  
      autoplaySpeed: 3000, 
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
 


	}]);

})();