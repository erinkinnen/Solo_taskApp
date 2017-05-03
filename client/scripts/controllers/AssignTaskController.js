console.log("AssignTaskController.js loaded");
myApp.controller('AssignTaskController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

// AccountService.login();
// AccountService.secondaryUserObject();
//gets all tasks from tasks table on DB
  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;

  $scope.assignedTask = {
    secondary_user_id: AccountService.selectedSecondaryUser,
    date: '',
    task_name: '',
    completed: false
  };

  var assignedTaskArray = [
    assignedTask = {}
  ];


  $scope.addAssignedTask = function(assignedTask){
    $scope.user_id = assignedTask.secondary_user_id.id;
    // console.log("%%%%, ", user_id);
    console.log("User_id & Assigned Task: ", $scope.user_id, assignedTask);
    assignedTaskArray.push(assignedTask);
    // console.log("BEFORE POST", assignedTask);
    $http.post('/task/:assignedTask', assignedTask).then(function(response) {
      // console.log("######INSIDE POST", response);
      // if(response.data.name) {
      //   console.log('addAssignedTask success: ', response.data);
      //   // userObject.user = response.data;
      //   // location works with SPA (ng-route)
      //   // $location.path('/user');
      // } else {
      //   console.log('failure: ', response);
      //   message = "Wrong!!";
      // }
    }).then($scope.getAssignedList = function(user_id){
      // console.log("inside getAssignedList ");
      console.log($scope.user_id);
      AccountService.getAssignedList($scope.user_id);
    });

    // console.log('%%ASSIGNED TASK : ', AccountService.selectedSecondaryUser, assignedTask.task);
    // console.log('ASSIGNED TASK ARRAY: ', assignedTaskArray);
    $scope.assignedTask = {};
  };
// console.log("here's the array: ", assignedTaskArray);
  var assignedTaskList = this;
  // console.log('PP START AssignedTaskList: ',assignedTaskList);
  assignedTaskList.AssignedTaskObject = AccountService.AssignedTaskObject;

  AccountService.addAssignedTask;
$scope.selectedSecondaryUser=AccountService.selectedSecondaryUser;

}]);//end AssignTaskController
