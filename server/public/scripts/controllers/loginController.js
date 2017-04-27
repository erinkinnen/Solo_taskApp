console.log("1 loginController loaded");
myApp.controller('LoginController', ['$scope', '$http', '$location', 'AccountService',
function($scope, $http, $location, AccountService) {

    $scope.user = {
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    };

    $scope.message = '';
    //gives access to AccountService
    $scope.AccountService = AccountService.registerUser;
    //writing function like this allows for console.log of info from html and allows
    //for more control over how function is handled.
    $scope.register = function(user){
      console.log(user);
      AccountService.registerUser(user);
    };


    $scope.login = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            console.log('redirecting to user page');
            $location.path('/user');
          } else {
            console.log('failure: ', response);
            $scope.message = "Wrong!!";
          }
        });
      }
    };
}]);
