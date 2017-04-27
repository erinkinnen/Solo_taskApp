console.log("1 loginController loaded");
myApp.controller('LoginController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

    $scope.user = {
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    };

    // $scope.message = '';

    $scope.AccountService = AccountService.login;

    $scope.logIn = function(user){
      console.log('inside LOGIN on controller');
      console.log(user);
      AccountService.login(user);
    };
    //gives access to AccountService
    $scope.AccountService = AccountService.registerUser;
    //writing function like this allows for console.log of info from html and allows
    //for more control over how function is handled.
    $scope.register = function(user){
      console.log(user);
      AccountService.registerUser(user);
    };

}]);//end of controller
