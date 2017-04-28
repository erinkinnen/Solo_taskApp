myApp.controller('TaskListController', ['$scope', '$http', function($scope, $http){
  console.log('inside TASKLISTCONTROLLER');

  $scope.task = {
    name: '',
    description: '',
    duration: ''
  };

}]);
