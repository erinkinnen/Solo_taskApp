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
  // AccountService.getTasks();
  // $scope.taskObject = AccountService.taskObject;

// var tasks = [
//   {name: 'math', completed: true},{name: 'english', completed: true},{name: 'geography', completed: false}
// ];
// var completed = 0;
// var notCompleted = 0;
//
// var taskLength = tasks.length;
// function counts(tasks){
//   for(var i = 0; i <= taskLength; i++){
//     if(tasks.completed === true){
//       completed = completed + 1;
//   } if(tasks.completed === false){
//       notCompleted = notCompleted + 1;
//   }
//   }
// }
// console.log(completed);
// console.log(notCompleted);
// counts();
  // var math = function(taskList.task){
  //   if(task.completed === false){
  //     var notCompleted = notCompleted + 1;
  //   }  else if(task.completed === true){
  //     var completed = completed + 1;
  //   }
  // };
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
