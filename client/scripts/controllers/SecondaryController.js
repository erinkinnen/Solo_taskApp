console.log("SecondaryController.js loaded");
myApp.controller('SecondaryController', ['$scope', '$http', '$location', '$routeParams', 'AccountService', function($scope, $http, $location, $routeParams, AccountService) {

$scope.searchObject = {
  date: new Date()
};

// console.log("############### ", $scope.secondary_user_id);
$scope.secondary_user_id = $routeParams.id;
// var firstName = $scope.secondary_user_id.first_name;
// console.log("@@@@@@@@@@@@@@@@@@", firstName);
// console.log("secondary_user_id", $scope.secondary_user_id);
$scope.assignedTaskObject = AccountService.assignedTaskObject;
AccountService.getAssignedList($scope.secondary_user_id); //, todaysDate

$scope.changeDate = function(selectedDate){
console.log("WHEN IS DATE CHANGE HAPPENING?",selectedDate);
AccountService.getAssignedList($scope.secondary_user_id, selectedDate).then(chartUpdate);
};

$scope.clickCheckbox = function(task, clickedDate){
  console.log("CLICKED!!!!! secondary clickCheckbox");
  // console.log("This is task before: ", task);
  task.completed = true;
  // console.log("This is task after: ", task);
  var updateTask = task;
  var grabbedDate = angular.copy(clickedDate);
  console.log(grabbedDate);
  // console.log(newTask);
  //must post newTask copy to DB
    $http.put('task/assignedTask/', updateTask).then(function(response) {
      // console.log('createTask put');
      console.log($scope.secondary_user_id);
      AccountService.getAssignedList($scope.secondary_user_id, grabbedDate).then(chartUpdate);

    });//end of put /task
  };//end of clickCheckbox

var test = {
  crazy: 'yes'
};
   AccountService.getTasks().then(chartUpdate);

   function chartUpdate(){
     $scope.assignedTaskObject = AccountService.assignedTaskObject;
     console.log("the object ", $scope.assignedTaskObject.assignedTask);
     console.log("Task list length",  $scope.assignedTaskObject.assignedTask.length);

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
                 "#428bca",
             ],
             hoverBackgroundColor: [
                 "#52BE2A",
                 "#36A2EB",
               ]
           }]
     }
     });

   }
}]);//end UserController
