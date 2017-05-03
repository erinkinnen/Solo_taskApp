console.log("SecondaryController.js loaded");
myApp.controller('SecondaryController', ['$scope', '$http', '$location', '$routeParams', 'AccountService', function($scope, $http, $location, $routeParams, AccountService) {

// AccountService.getAssignedList;
$scope.secondary_user_id = $routeParams.id;
console.log("GGGG", $scope.secondary_user_id);
// $scope.assignedTask = AccountService.assignedTask;
// console.log("assignedTask",assignedTask);
// console.log("THIS IS IT: ",assignedTask );
// AccountService.getAcctUsers();
//   $scope.secondaryUserObject = AccountService.secondaryUserObject;
//   console.log("$$", $scope.secondaryUserObject);
$scope.assignedTaskObject = AccountService.assignedTaskObject;
AccountService.getAssignedList($scope.secondary_user_id /*, default to current date*/);
console.log("AccountService.assignedTaskObject: ", AccountService.assignedTaskObjecst);


// scope dropdown change event
// AccountService.getAssignedList($scope.secondary_user_id /*, selected date*/);

$scope.clickCheckbox = function(task){
  console.log("secondary clickCheckbox");
  // console.log("This is task before: ", task);
  task.completed = true;
  // console.log("This is task after: ", task);
  var updateTask = task;
  // console.log(newTask);
  //must post newTask copy to DB
    $http.put('task/assignedTask/', updateTask).then(function(response) {
      // console.log('createTask put');
      console.log($scope.secondary_user_id);
      AccountService.getAssignedList($scope.secondary_user_id);
    });//end of put /task
  };//end of clickCheckbox

}]);//end UserController
