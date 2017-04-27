myApp.controller('TaskListController', ['$scope', '$http', function($scope, $http){
  console.log('inside TASKLISTCONTROLLER');

  $scope.task = {
    name: '',
    description: '',
    duration: ''
  };

  $http.get('/task').then(function(response){
      console.log("WHAT THE ?!?!?!?inside get/ for task", response);
      console.log("HI!");
      $scope.taskList = response.data;
      console.log('RESPONSE: ', response.data);
    });

}]);
