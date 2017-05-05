console.log("UserController.js loaded");
myApp.controller('UserController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

  $scope.task = {
    name: '',
    description: '',
    duration: '',
    completed: false
  };

//VIEW CHANGERS
  $scope.newUserView = function(){
    $location.path('/newUser');
  };

  $scope.assignTaskView = function(index){
    AccountService.selectedSecondaryUser = $scope.secondaryUserObject.secondary_user[index];
    console.log('Selected Secondary User: ', AccountService.selectedSecondaryUser);
    $location.path('/assignTask');
  };


  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          $scope.userName = response.data.username;
          // console.log("inside get ", response.data.id);
          $scope.acct_Id = response.data.id;
          // console.log($scope.acct_Id);
          $scope.first_name = response.data.first_name;
          // console.log('User Data: ', $scope.first_name);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });//end of get /user

  $scope.clickCheckbox = function(task){
    // console.log("This is task before: ", task);
    task.completed = true;
    // console.log("This is task after: ", task);
    var updateTask = task;
    // console.log(newTask);
    //must post newTask copy to DB
      $http.put('/task', updateTask).then(function(response) {
        // console.log('createTask put');
        getTasks();
      });//end of put /task
    };//end of clickCheckbox

  AccountService.secondaryUserObject;
  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;
  // console.log("inside UserController: ", AccountService.taskObject);
  // console.log('checking user');

  AccountService.getAcctUsers();
    $scope.secondaryUserObject = AccountService.secondaryUserObject;

  $scope.newTask = function(task){
    console.log(" This is the task",task);
    AccountService.createTask(task);
    $scope.task = {};
};

  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      // console.log('logged out');
      $location.path("/home");
    });
  };//end logout

}]);//end UserController
