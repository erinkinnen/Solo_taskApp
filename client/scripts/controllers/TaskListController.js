myApp.controller('TaskListController', ['$scope', '$http', function($scope, $http){
  console.log('inside TASKLISTCONTROLLER');

  $http.get('/task').then(function(response){
      console.log("inside get/ for task", response);
      console.log(task);
      // task.name = response.data;
    });

}]);
