function Task(title,type,exp){
	this.title = title || 'Untitled';
	this.type = type || 'default';
	this.exp = exp || 0;
}

var TASKS = {
	taskArray : {
		'tasks' : [
		new Task('Go to work','work',100),
		new Task('Shower','hygene',15),
		new Task('Jog','fitness',100),
		new Task('Clean room','chore',30),
		new Task('Clear house','chore',100),
		new Task('Go to school','education',80)
		]
	}
}