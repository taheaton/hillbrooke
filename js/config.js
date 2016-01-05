let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    // Home State
    .state('root.home', {
      url: '/',
      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    // My Cars
    .state('root.cars', {
      url: '/cars',
      controller: 'CarsController as vm',
      templateUrl: 'templates/cars.tpl.html'
    })
    // Add Car
    .state('root.addCar', {
      url: '/cars/add',
      controller: 'CarsAddController as vm',
      templateUrl: 'templates/cars-add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;