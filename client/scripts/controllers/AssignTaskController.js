console.log("AssignTaskController.js loaded");
myApp.controller('AssignTaskController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {

  $scope.assignedTasks = [{
    name: '',
    selected: false
    }];

    // Selected fruits
    $scope.completedTasks = [];

    // Helper method to get selected fruits
    $scope.completedTasks = function completedTasks() {
      return filterFilter($scope.assignedTasks, { selected: true });
    };

    // Watch fruits for changes
    $scope.$watch('assignedTasks|filter:{selected:true}', function (nv) {
      $scope.completedTasks = nv.map(function (task) {
        return task.name;
      });
    }, true);
  }]);

}]);//end AssignTaskController
