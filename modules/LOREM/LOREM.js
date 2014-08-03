'use strict'

var LOREM = (function(userObj,goalObj){

	//Based on the requestId in the params object, this function executes another and then returns the resulting data.
	function requestById(params){
		var functionToExecute;

		switch(params.requestId){
			case 100:
			functionToExecute = returnUserData;
			break;
			case 101:
			functionToExecute = addNewUser;
			break;
			case 102:
			functionToExecute = editUser;
			break;
			case 200:
			functionToExecute = returnGoalData;
			break;
			case 300:
			functionToExecute = returnTaskData;
			break;
			default:
			throw new Error('No such request id exists.')
		}

		return functionToExecute(params);
	}

	//REQUEST 100 : Returns an array of however many users are requested.
	function returnUserData(params){
		if(params.hasOwnProperty('amount') && HELPERS.isNumber(params.amount)){
			var userCollection = {users:[]},
			users = userObj.userArray.users,
			amount = params.amount <= users.length ? params.amount : users.length;
			for(var i=0;i<amount;i++){
				userCollection.users.push(users[i]);
			}
			return userCollection;
		}else{
			throw new Error('Missing parameters. Expected amount number');
		}
	}

	//REQUEST 101 : Creates a new user object and stores it in the array.
	function addNewUser(params){
		if(params.hasOwnProperty('user')){
			var newUser = new User(
				params.user.username||'',
				params.user.firstName||'',
				params.user.lastName||'',
				params.user.age||0,
				params.user.exp||0
				);
			userObj.userArray.users.push(newUser);
			return {user:newUser,message:'User added succesfully.'}
		}else{
			throw new Error('Missing parameters. Expected user object')
		}
	}

	//REQUEST 102 : Edit user's properties based on passed in parameters
	function editUser(params){
		if(params.hasOwnProperty('userId') && HELPERS.isNumber(params.userId)
			&& params.hasOwnProperty('changes') && typeof params.changes === 'object'){
			var userToChange = userObj.userArray.users[params.userId];
			userToChange.firstName = params.changes.firstName || userToChange.firstName;
			userToChange.lastName = params.changes.lastName || userToChange.lastName;
			userToChange.age = params.changes.age || userToChange.age;
			return {user:userToChange, message:'User succesfully edited.'};
		}else{
			throw new Error('Missing parameters. Expected userId and changes object.');
		}
	}

	//REQUEST 200 : Returns an array of goals depending on how many were requested
	function returnGoalData(params){
		if(params.hasOwnProperty('amount') && HELPERS.isNumber(params.amount)){
			var goalCollection = {goals:[]},
			goals = goalObj.goalArray.goals,
			amount = params.amount <= goals.length ? params.amount : goals.length;
			for(var i=0;i<amount;i++){
				goalCollection.goals.push(goals[i]);
			}
			return goalCollection;
		}else{
			throw new Error('Missing parameters. Expected amount number');
		}
	}

	//REQUEST 300 : Returns an array of tasks depending on how many were requested
	function returnTaskData(){
		if(params.hasOwnProperty('amount') && HELPERS.isNumber(params.amount)){
			var taskCollection = {tasks:[]},
			tasks = taskObj.taskArray.tasks,
			amount = params.amount <= tasks.length ? params.amount : tasks.length;
			for(var i=0;i<amount;i++){
				taskCollection.tasks.push(tasks[i]);
			}
			return taskCollection;
		}else{
			throw new Error('Missing parameters. Expected amount number');
		}
	}

	return {
		sendRequest : function(params,callback){
			//Does params object exist
			if(params && typeof params === 'object'){
				//Does the requestId number exists
				if(HELPERS.isNumber(params.requestId)){
					//Does the callback function exist
					if(callback && typeof callback === 'function'){
						//Callback function is executed with the response as it's only parameter
					 	callback(requestById(params));
					}else{
						throw new Error('No callback function.');
					}
				}else{
					throw new Error('Only numbers can be used to send a request.');
				}
			}else{
					throw new Error('No parameters object entered.');
			}
		}
	}
})(USERS,GOALS);