myApp.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.user = {
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    };
    $scope.message = '';

    // $scope.account = {
    //   name: ''
    //   // address: '',
    //   // city: '',
    //   // state: '',
    //   // zip: ''
    // }


    $scope.login = function() {
      if($scope.user.username == '' || $scope.user.password == '') {
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
    }

    $scope.registerUser = function() {
      if($scope.user.username == '' || $scope.user.password == '') {
        $scope.message = "Choose a username and password!";
      } else {
        // var completeAccount = {user: $scope.user, account: $scope.account};
        console.log('sending to USER to server...', $scope.user);
        $http.post('/register', $scope.user).then(function(response) {
          console.log('USER success');
          $location.path('/home');
        },
        function(response) {
          console.log('USER error');
          $scope.message = "Please try again."
        });
      }
      // if($scope.account.name == '') {
      //   $scope.message = "Choose an accoount name";
      // } else {
      //   console.log('sending to ACCOUNT to server...', $scope.account);
      //   $http.post('/register', $scope.account).then(function(response) {
      //     console.log('ACCOUNT success');
      //     $location.path('/home');
      //   },
      //   function(response) {
      //     console.log('ACCOUNT error');
      //     $scope.message = "Please try again."
      //   });
      // }
    }//end of registerUser
}]);
