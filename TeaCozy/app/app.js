(function(){

  'use strict';

  angular.module('teaCozy', ['ngRoute'])
  // .config(['$routeProvider', function($routeProvider){
  //   $routeProvider.
  //     when('/home', {
  //       templateUrl: 'partials/home.html',
  //       controller: 'StoreController'
  //     }).
  //     when('/cart', {
  //       templateUrl: 'partials/cart.html',
  //       controller: 'StoreController'
  //     }).
  //     when('/products', {
  //       templateUrl: 'partials/products.html',
  //       controller: 'StoreController'
  //     }).
  //     otherwise({
  //       redirectTo: '/home'
  //     });
  // }])
  .controller('StoreController', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.products = [];
    $scope.cartItems = [];

    function initProducts() {
      $scope.products = [
        {
          name: 'Fall Berry Blitz Tea',
          price: 4.49,
          image: 'img-berryblitz.jpg',
          id: 0,
          inCart: false
        },
        {
          name: 'Spiced Rum Tea',
          price: 7.49,
          image: 'img-spiced-rum.jpg',
          id: 1,
          inCart: false
        },
        {
          name: 'Seasonal Donuts',
          price: 4.99,
          image: 'img-donut.jpg',
          id: 2,
          inCart: false
        },
        {
          name: 'Myrtle Ave Tea',
          price: 3.99,
          image: 'img-myrtle-ave.jpg',
          id: 3,
          inCart: false
        },
        {
          name: 'Bedford Bizarre Tea',
          price: 6.99,
          image: 'img-bedford-bizarre.jpg',
          id: 4,
          inCart: false
        },
      ]
    };

    initProducts();

    $scope.addCartItem = function(product) {
      if(!product.inCart) {
        $scope.cartItems.push({name: product.name, quantity: 1, id: product.id, price: product.price, image: product.image});
        product.inCart = !product.inCart;
        console.log($scope.cartItems);
      }
    };

    $scope.cartSum = function() {
      var sum = 0;
      $scope.cartItems.forEach(function(item) {
        sum += item.quantity * item.price;
      });

      return sum;
    };

  }])
  .directive('featuredProducts', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/featured-products.html',
      replace: true
    };
  })
  .controller('HomeController', function($scope, $routeParams) {
    $scope.name = 'HomeController';
    $scope.params = $routeParams;
  })
  .controller('CartController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.name = 'CartController';
    $scope.params = $routeParams;
  }])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/cart', {
      templateUrl: 'cart.html',
      controller: 'StoreController-'
    });
  }]);

})();
