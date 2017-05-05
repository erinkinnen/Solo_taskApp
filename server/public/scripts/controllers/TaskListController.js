myApp.controller('TaskListController', ['$scope', '$http', '$location', function($scope, $http, $location){
  console.log('inside TASKLISTCONTROLLER');

  $scope.task = {
    name: '',
    description: '',
    // duration: ''
  };
  $scope.newTaskView = function(){
    // console.log("this is where we start ", $location.path());
    $location.path('/newTask');
    // console.log("where are we now? ", $location.path());
  };


}]);
