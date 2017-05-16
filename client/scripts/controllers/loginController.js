console.log("loginController loaded");
myApp.controller('LoginController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

    $scope.user = {
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    };

    $scope.secondary_user = {
      account_id: '',
      first_name: '',
      last_name: '',
      age: ''
    };

    $scope.newSecondaryUser = {};
$scope.test = {
  date: '',
  name: ''
};
$scope.AccountService = AccountService.makeTest;
// $scope.test = function(day){
//   // console.log("inside registerSecondaryUser function");
//   console.log("inside test", day );
//   AccountService.makeTest(day);
// };
    // $scope.message = '';
$scope.AccountService = AccountService.userObject;
$scope.getUserID = function(user){
  console.log("GETUSERID: ", user);
  AccountService.userObject(user);
};

    $scope.AccountService = AccountService.login;
//entered on homepage
    $scope.logIn = function(user){
      // console.log('inside LOGIN on controller');
      // console.log("LOGIN: ",user);
      AccountService.login(user);
    };
    //gives access to AccountService
    $scope.AccountService = AccountService.registerUser;
    //writing function like this allows for console.log of info from html and allows
    //for more control over how function is handled.
    $scope.register = function(user){
      // console.log(user);
      AccountService.registerUser(user);
    };

    $scope.AccountService = AccountService.registerSecondaryUser;
    $scope.registerSecondary = function(secondary_user){
      // console.log("inside registerSecondaryUser function");
      // console.log("Sec User inside LoginController", secondary_user );
      // AccountService.secondaryUserObject = secondary_user;
      AccountService.registerSecondaryUser(secondary_user);
    };


}]);//end of controller
