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
      templateUrl: 'templates/app-layout/layout.tpl.html',
      controller: 'HomeController as vm'
    })
    // Home State
    .state('root.home', {
      url: '/',
      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    // Content
    .state('root.content', {
      url: '/content',
      controller: 'ContentController as vm',
      templateUrl: 'templates/app-content/content.tpl.html'
    })
    // Board
    .state('root.board', {
      url: '/board',
      //controller: 'BoardController as vm',
      templateUrl: 'templates/app-content/board.tpl.html'
    })
    // Signup
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-user/signup.tpl.html'
    })
    // Login
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;