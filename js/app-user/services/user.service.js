let UserService = function(PARSE, $http, $cookies, $state) {
  
  this.signup    = signup;
  this.login     = login;
  this.storeAuth = storeAuth;
  this.checkAuth = checkAuth;

  function storeAuth (user) {
    $cookies.put('hillbrooke-auth', user.sessionToken);
    $cookies.put('hillbrooke-user', user.objectId);
    setHeaders(user.sessionToken);
    // THIS REALLY NEEDS TO BE BETTER!!!
    alert('you are now logged in');
    // SERIOUSLY
    $state.go('root.home');
  }

  function checkAuth () {
    let t = $cookies.get('hillbrooke-auth');
    if (t) {
      setHeaders(t);
    } 
    // else {
    // //  alert('please check your login information on contact admin');
    //   $state.go('root.home');
    // }
  }

  function setHeaders (token) {
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
  }

  function signup (userObj) {
    return $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG);
  }

  function login (userObj) {
    return $http.get(PARSE.URL + 'login', {
      headers: PARSE.CONFIG.headers,
      params: userObj
    });
  }
  

};

UserService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default UserService;