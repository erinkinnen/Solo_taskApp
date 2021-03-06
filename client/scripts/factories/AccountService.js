console.log('AccountService.js loaded');

myApp.factory('AccountService', ['$http', '$location', function($http, $location){

var taskObject = {
  taskList : []
};

var userObject = {
  user: {}
};

var secondaryUserObject = {
  secondary_user: {}
};



var usersArrayObject = {
  usersArray: [],
};

var newSecondaryUser = {};

var secondary_user = {
  account_id: '',
  first_name: '',
  last_name: '',
  email: '',
  age: ''
};

var selectedSecondaryUser = {};

 var assignedTaskObject = {
   assignedTask: []
  };

// var dateObject = {
//   date: ''
// };

// console.log("userObject.user BEFORE: ", userObject.user);
// console.log("secondaryUserObject BEFORE: ", secondaryUserObject.secondary_user);
// console.log("Before assignedTaskObject.tasksArray: ",assignedTaskObject.tasksArray);
var addAssignedTask = function(task) {
  console.log("Is task getting assigned");
  assignedTaskObject.tasksArray.push(task);
console.log("After assignedTaskObject.tasksArray: ",assignedTaskObject.tasksArray);


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

// makeTest = function(day){
//   // console.log(makeTest);
// };
  registerUser = function(user) {
    if(user.username === '' || user.password === '') {
      message = "Choose a username and password!";
    } else {
      // console.log('sending to USER to server...', user);
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
  // console.log("inside registerSecondaryUser in factory");
  if(secondary_user.name === '') {
    message = "Enter a user";
  } else {
    // console.log('sending to SECONDARY USER to server...', secondary_user);
    secondary_user.account_id = userObject.user.id;
    var newSecondaryUser = angular.copy(secondary_user);
    $http.post('/secondaryUser', newSecondaryUser).then(function(response) {
      // console.log('SECONDARY USER success');
      $location.path('/user');
    },
    function(response) {
      console.log('SECONDARY USER error');
      message = "Please try again.";
    });
  }
};// end of function

getAcctUsers = function(){
  // console.log("INSIDE getAcctUsers secondary_user", secondary_user.account_id);
  // console.log("INSIDE getAcctUsers userObject", userObject.user.id);
  // if(secondary_user.account_id === userObject.user.id){
    $http.get('/secondaryUser/'+ userObject.user.id).then(function(response){
      secondaryUserObject.secondary_user = response.data;
      // console.log("$$", $scope.secondaryUserObject);
      // getAssignedList();
      // console.log("meow ", secondaryUserObject.secondary_user);
      // console.log("back from server: ", response.data);
    });
  // }
};



getTasks = function(){
return $http.get('/task').then(function(response){
    // console.log("Check this out: " , response);
    taskObject.taskList = response.data;
    // console.log("*(&^(*^&*&(^))): ", response.data);
    // console.log('taskList inside get/task', taskObject.taskList);
    // console.log('response.data inside get/task: ', response.data);
  });
  };
var createTask = function(task){
  if(task.name === '' || task.description === '') {
    message = "Enter a task name and description";
  } else {
    //created newTask and send copy in order to grab data bound object, send it
    //to database AND be able to clear data binding
    var newTask = angular.copy(task);
    console.log("This is newTask: ", newTask);
    // console.log(newTask);
    //must post newTask copy to DB
    $http.post('/task', newTask).then(function(response) {
      console.log('createTask post');
      $location.path('/user');
      // console.log("response to post is: ", response);
      getTasks();
    });
  }//end of post /task
    //clears data bound task
};//end of createTask

var getAssignedList = function(user_id, selectedDate){
  console.log("inside getAssignedList user_id: ", user_id);
  console.log("selectedDate BEFORE var: ", selectedDate);
  var dateToSearch = selectedDate || new Date();
  console.log("selectedDate AFTER var: ", dateToSearch);
  return $http.get('/task/assignedTask/' + user_id + '/' + dateToSearch).then(function(response){
    assignedTaskObject.assignedTask = response.data;
    console.log("assignedTaskObject.assignedTask", assignedTaskObject.assignedTask);
  });
};

// var preserveDate = function(selectedDate){
//   if(selectedDate !== new Date());
//   date = selectedDate;
// } else {
//   date = new Date();
// }
// console.log("HERE IS DATE ",date);
// changeDate = function()

return {
  login: login,
  registerUser: registerUser,
  registerSecondaryUser: registerSecondaryUser,
  getTasks: getTasks,
  createTask: createTask,
  taskObject: taskObject,
  userObject: userObject,
  secondaryUserObject: secondaryUserObject,
  selectedSecondaryUser: selectedSecondaryUser,
  getAcctUsers: getAcctUsers,
  getAssignedList: getAssignedList,
  assignedTaskObject: assignedTaskObject,
  // dateObject: dateObject
};

}]);//end of factory
