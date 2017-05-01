console.log("AssignTaskController.js loaded");
myApp.controller('AssignTaskController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

// AccountService.login();
// AccountService.secondaryUserObject();
//gets all tasks from tasks table on DB
  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;

  $scope.assignedTask = {
    date: '',
    task: '',
    completed: false
  };

  var assignedTaskArray = [
    assignedTask = {}
  ];
  $scope.addAssignedTask = function(assignedTask){
    assignedTaskArray.push(assignedTask);
    console.log('%%ASSIGNED TASK : ', AccountService.selectedSecondaryUser, assignedTask.task);
    console.log('ASSIGNED TASK ARRAY: ', assignedTaskArray);
    $scope.assignedTask = {};
  };
console.log("here's the array: ", assignedTaskArray);
  var assignedTaskList = this;
  console.log('PP START AssignedTaskList: ',assignedTaskList);
  assignedTaskList.AssignedTaskObject = AccountService.AssignedTaskObject;

  AccountService.addAssignedTask;


}]);//end AssignTaskController
