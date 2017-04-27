console.log('2 AccountService.js loaded');

myApp.factory('AccountService', ['$http', '$location', function($http, $location){
console.log("inside factory");


  login = function(user) {
    if(user.username === '' || user.password === '') {
      message = "Enter your username and password!";
    } else {
      console.log('sending to server...', $scope.user);
      $http.post('/', user).then(function(response) {
        if(response.data.username) {
          console.log('success: ', response.data);
          // location works with SPA (ng-route)
          console.log('redirecting to user page');
          $location.path('/user');
        } else {
          console.log('failure: ', response);
          message = "Wrong!!";
        }
      });
    }
  };//end of login function


  registerUser = function(user) {
    if(user.username === '' || user.password === '') {
      message = "Choose a username and password!";
    } else {
      console.log('sending to USER to server...', user);
      $http.post('/register', user).then(function(response) {
        console.log('USER success');
        $location.path('/home');
      },
      function(response) {
        console.log('USER error');
        message = "Please try again.";
      });
    }
};// end of function

return {
  login: login,
  registerUser: registerUser
};

}]);//end of factory
