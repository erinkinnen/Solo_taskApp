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


  // newdate = year + "/" + month + "/" + day;
  $scope.addAssignedTask = function(assignedTask){
    console.log("DATE BEFORE: ", assignedTask.date);
    $scope.user_id = assignedTask.secondary_user_id.id;
    var dateObj = assignedTask.date;
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    console.log("DID DATE CHANGE?", assignedTask.date);
    // console.log("%%%%, ", user_id);
    // console.log('Assigned Task Array- before', assignedTaskArray);
    console.log("User_id & Assigned Task: ", $scope.user_id, assignedTask);
    // assignedTaskArray.push(assignedTask);
    // console.log('Assigned Task Array- after', assignedTaskArray);
    console.log('Assigned Task RIGHT BEFORE post', assignedTask);
    $http.post('/task/:assignedTask', assignedTask).then(function(response) {
    console.log("INSIDE /task/:assignedTask post", response);
      // if(response.data.name) {
      //   console.log('addAssignedTask success: ', response.data);
      //   // userObject.user = response.data;
      //   // location works with SPA (ng-route)
      //   // $location.path('/user');
      // } else {
      //   console.log('failure: ', response);
      //   message = "Wrong!!";
      // }
    }).then(function(user_id){
      console.log("$scope.user_id in post.then function", $scope.user_id);
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
