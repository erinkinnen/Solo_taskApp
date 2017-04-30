console.log('AccountService.js loaded');

myApp.factory('AccountService', ['$http', '$location', function($http, $location){

var taskObject = {
  taskList : []
};

var userObject = {
  user: {}
};

var assignedTaskObject = {
    tasksArray: [],
  };

var addAssignedTask = function(task) {
  assignedTaskObject.tasksArray.push(task);

  console.log(pizzaObject);
};

  login = function(user) {
    // console.log('inside LOGIN function');
    if(user.username === '' || user.password === '') {
      message = "Enter your username and password!";
    } else {
      // console.log('sending to server...', user);
      $http.post('/', user).then(function(response) {
        if(response.data.username) {
          console.log('success, redirecting to user page: ', response.data);
          userObject.user = response.data;
          // location works with SPA (ng-route)
          $location.path('/user');
        } else {
          console.log('failure: ', response);
          message = "Wrong!!";
        }
      });
    }
  };//end of login function

  registerUser = function(user) {
    if(user.username === '' || user.password === '') {
      message = "Choose a username and password!";
    } else {
      console.log('sending to USER to server...', user);
      $http.post('/register', user).then(function(response) {
        console.log('USER success');
        $location.path('/home');
      },
      function(response) {
        console.log('USER error');
        message = "Please try again.";
      });
    }
};// end of function

registerSecondaryUser = function(secondary_user) {
  console.log("inside registerSecondaryUser in factory");
  if(secondary_user.name === '') {
    message = "Enter a user";
  } else {
    console.log('sending to SECONDARY USER to server...', secondary_user);
    secondary_user.account_id = userObject.user.id;
    $http.post('/secondaryUser', secondary_user).then(function(response) {
      console.log('SECONDARY USER success');
      // $location.path('/user');
    },
    function(response) {
      console.log('SECONDARY USER error');
      message = "Please try again.";
    });
  }
};// end of function



getTasks = function(){
$http.get('/task').then(function(response){
    // console.log("Check this out: " , response);
    taskObject.taskList = response.data;
    // console.log('taskList inside get/task', taskObject.taskList);
    // console.log('response.data inside get/task: ', response.data);
        });
  };
createTask = function(task){
  if(task.name === '' || task.description === '') {
    message = "Enter a task name and description";
  } else {
    //created newTask and send copy in order to grab data bound object, send it
    //to database AND be able to clear data binding
    var newTask = angular.copy(task);
    // console.log(newTask);
    //must post newTask copy to DB
    $http.post('/task', newTask).then(function(response) {
      console.log('createTask post');
      // console.log("response to post is: ", response);
      getTasks();
    });
  }//end of post /task
    //clears data bound task
};//end of createTask
console.log("userObject = ", userObject);
return {
  login: login,
  registerUser: registerUser,
  registerSecondaryUser: registerSecondaryUser,
  getTasks: getTasks,
  createTask: createTask,
  taskObject: taskObject,
  userObject: userObject
};

}]);//end of factory
