console.log('2 AccountService.js loaded');

myApp.factory('AccountService', ['$http', '$location', function($http, $location){
console.log("inside factory");

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
  registerUser: registerUser
};

}]);//end of factory
