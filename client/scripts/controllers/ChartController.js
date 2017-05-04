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


// myApp.controller('DynamicChartController', [ '$scope', 'AccountService', function($scope, AccountService){
//  AccountService.getTasks();
//   $scope.assignedTaskObject = AccountService.assignedTaskObject;
//   console.log("This26",  AccountService.assignedTaskObject.assignedTask.length);
//
// var isCompleteCounter = 0;
// var isNotCompleteCounter = 0;
// for(var counter=0; counter < $scope.assignedTaskObject.assignedTask.length ; counter++) {
//   if($scope.assignedTaskObject.assignedTask[counter].completed) {
//     isCompleteCounter ++;
//   } else {
//     isNotCompleteCounter++;
//   }
// }
//
//
// // var math = function(){
// //   if($scope.assignedTask.completed === true){
// //     console.log("completed");
// //   } else {
// //     console.log("not completed");
// //   }
// // };
// //math();
//   var DynamicChart = document.getElementById("pieChart");
//   var myDynamicChart = new Chart(DynamicChart, {
//     type: 'pie',
//     data: {
//     labels: ["Complete", "Incomplete"],
//     datasets: [
//         {
//             data: [isCompleteCounter, isNotCompleteCounter],
//             backgroundColor: [
//                 "#9CBE2A",
//                 "red",
//             ],
//             hoverBackgroundColor: [
//                 "#52BE2A",
//                 "#36A2EB",
//             ]
//         }]
//   }
//   });
// }]);//end of ChartController
