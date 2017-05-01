myApp.controller('StaticChartController', [function(){
  var staticChart = document.getElementById("pieChart");
  var myStaticChart = new Chart(staticChart, {
    type: 'pie',
    data: {
    labels: ["Complete", "Incomplete"],
    datasets: [
        {
            data: [60, 40],
            backgroundColor: [
                "#9CBE2A",
                "#2956B2",
            ],
            hoverBackgroundColor: [
                "#52BE2A",
                "#36A2EB",
            ]
        }]
  }
  });
}]);//end of ChartController


myApp.controller('DynamicChartController', [ '$scope', 'AccountService', function($scope, AccountService){
  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;
  console.log('TASKOBJECT: ', taskObject);
// var completed = 0;
// var notCompleted = 0;
//   var math = function(taskList.task){
//     if(task.completed === false){
//       var notCompleted = notCompleted + 1;
//     }  else if(task.completed === true){
//       var completed = completed + 1;
//     }
//   };
  console.log(completed);
  console.log(notCompleted);

  var DynamicChart = document.getElementById("pieChart");
  var myDynamicChart = new Chart(DynamicChart, {
    type: 'pie',
    data: {
    labels: ["Complete", "Incomplete"],
    datasets: [
        {
            data: [70, 30],
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
}]);//end of ChartController
