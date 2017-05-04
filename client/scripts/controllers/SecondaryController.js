console.log("SecondaryController.js loaded");
myApp.controller('SecondaryController', ['$scope', '$http', '$location', '$routeParams', 'AccountService', function($scope, $http, $location, $routeParams, AccountService) {

$scope.searchObject = new Date();

$scope.secondary_user_id = $routeParams.id;
console.log("secondary_user_id", $scope.secondary_user_id);
// $scope.assignedTask = AccountService.assignedTask;
// console.log("assignedTask",assignedTask);
// console.log("THIS IS IT: ",assignedTask );
// AccountService.getAcctUsers();
//   $scope.secondaryUserObject = AccountService.secondaryUserObject;
//   console.log("$$", $scope.secondaryUserObject);
$scope.assignedTaskObject = AccountService.assignedTaskObject;
AccountService.getAssignedList($scope.secondary_user_id); //, todaysDate

// $scope.changeDate = function(user_id, ){
// selected date = newDate;
// .then(AccountService.getAssignedList($scope.secondary_user_id, newDate);
// }
// scope dropdown change event


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


   AccountService.getTasks();
    $scope.assignedTaskObject = AccountService.assignedTaskObject;
    console.log("Task list length",  AccountService.assignedTaskObject.assignedTask.length);

    var isCompleteCounter = 0;
    var isNotCompleteCounter = 0;
    for(var counter=0; counter < $scope.assignedTaskObject.assignedTask.length ; counter++) {
      if($scope.assignedTaskObject.assignedTask[counter].completed === true) {
        isCompleteCounter ++;
      } else {
        isNotCompleteCounter++;
      }
    }

console.log("isCompleteCounter", isCompleteCounter);
console.log("isNotCompleteCounter", isNotCompleteCounter);

    var DynamicChart = document.getElementById("pieChart");
    var myDynamicChart = new Chart(DynamicChart, {
      type: 'pie',
      data: {
      labels: ["Complete", "Incomplete"],
      datasets: [
          {
              data: [isCompleteCounter, isNotCompleteCounter],
              backgroundColor: [
                  "#9CBE2A",
                  "red",
              ],
              hoverBackgroundColor: [
                  "#52BE2A",
                  "#36A2EB",
              ]
          }]
    }
    });

}]);//end UserController
