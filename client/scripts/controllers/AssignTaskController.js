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

    $http.post('/task/:assignedTask', assignedTask).then(function(response) {
    }).then(function(user_id){
      AccountService.getAssignedList($scope.user_id, assignedTask.date).then(function(){

      });

    });

  };
// console.log("here's the array: ", assignedTaskArray);
  var assignedTaskList = this;

  // console.log('PP START AssignedTaskList: ',assignedTaskList);
  assignedTaskList.AssignedTaskObject = AccountService.AssignedTaskObject;

  AccountService.addAssignedTask;
$scope.selectedSecondaryUser=AccountService.selectedSecondaryUser;

}]);//end AssignTaskController
