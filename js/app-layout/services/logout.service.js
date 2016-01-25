let LogoutService = function(PARSE, $http, $cookies, $state) {
  
  this.logout = logout;
  function logout () {
    $cookies.remove('hillbrooke-auth');
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = null;
    $state.go('root.home');
  };
  

};

LogoutService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default LogoutService;