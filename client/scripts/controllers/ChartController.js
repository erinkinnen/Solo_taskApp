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
//
// console.log(tasks);
//
var tasks = [
  {name: 'math', completed: true},{name: 'english', completed: true},{name: 'geography', completed: false}
];
var countItems = function(tasks){
  var completeYes = 0;

  for(i = 0; i < tasks.length; i++){
    if(tasks.completed === true){
      completeYes++;
    }
  }
  console.log("completedYes: ", completeYes);
  return completeYes;
};
countItems(tasks);
// console.log(tasks);
// console.log("## ", tasks.completed === true);
// var completed = [];
// var notCompleted = 0;
// // console.log("tasks.length: ", tasks.length);
// $scope.countCompleted = function(tasks){
//   // console.log("All Tasks: ",tasks);
//   if(tasks.completed === true);
//   count = count+1;
//   console.log("pl", count);
//   // completed.push(tasks);
// };
// countCompleted();
  // var completed = tasks.filter(countCompleted);

// console.log("Completed length: ", completed.length);

// console.log("completed: ", completed);
// console.log("not completed: ", notCompleted);
// countCompleted();
  // var math = function(taskList.task){
  //   if(task.completed === false){
  //     var notCompleted = notCompleted + 1;
  //   }  else if(task.completed === true){
  //     var completed = completed + 1;
  //   }
  // };
  // var DynamicChart = document.getElementById("pieChart");
  // var myDynamicChart = new Chart(DynamicChart, {
  //   type: 'pie',
  //   data: {
  //   labels: ["Complete", "Incomplete"],
  //   datasets: [
  //       {
  //           data: [70, 30],
  //           backgroundColor: [
  //               "#9CBE2A",
  //               "red",
  //           ],
  //           hoverBackgroundColor: [
  //               "#52BE2A",
  //               "#36A2EB",
  //           ]
  //       }]
  // }
  // });
}]);//end of ChartController
