myApp.factory('RegisterService', ['$http', '$location', function($http, $location){
  console.log('inside REGISTERSERVICE');
  // var user = {
  //   username: '',
  //   first_name: '',
  //   last_name: '',
  //   password: ''
  // };

  var registerUser = function(user) {
    var person = angular.copy(user);  
    console.log("inside registerUser function");
    if(user.username == '' || user.password == '') {
      console.log("Choose a username and password!");
      // message = "Choose a username and password!";
    } else {
      console.log('sending to USER to server...', user);
      $http.post('/register', user).then(function(response) {
        console.log('USER success', response);
        $location.path('/home');
      },
      function(response) {
        console.log('USER error', response);
        // message = "Please try again."
      });
    }
  }//end of funtion

  return {
    registerUser: registerUser
  }
}]);
