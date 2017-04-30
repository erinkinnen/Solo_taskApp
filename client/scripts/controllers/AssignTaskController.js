console.log("AssignTaskController.js loaded");
myApp.controller('AssignTaskController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

  $scope.assignTaskView = function(){
    // console.log("inside assignTaskView function");
    $location.path('/assignTask');
  };

  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;
  // console.log("inside AssignTaskController: ", AccountService.taskObject);

  var assignedTaskList = this;
  // console.log('START AssignedTaskList: ',assignedTaskList);
  assignedTaskList.AssignedTaskObject = AccountService.AssignedTaskObject;

  var addAssignedTask = AccountService.addAssignedTask;

  var createTaskArray = function(task){
    console.log(task);
    var assignedTaskArray = [{}];

  };

}]);//end AssignTaskController
