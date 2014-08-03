function User(username,firstName,lastName,age,exp){
	this.username = username || 'anonymous';
	this.firstName = firstName || 'John';
	this.lastName = lastName || 'Doe';
	this.age = age || 18;
	this.exp = exp || 0;
}

var USERS = {
	userArray : {
		'users' : [
		new User('dreamerLad','Jason','Barnes',21,20000),
		new User('goal-getter-92','Jimmy','Jims',33,1200),
		new User('GoblinPWNer69','Wayland','Summers',15,4400),
		new User('tryHardy','Ed','Hardy',17,1020000),
		new User('YOLO_SWAGGINS','SMOKE','ERRYDAY',13,14160),
		new User('BentonBottoms','Phillip','Blake',34,4210),
		new User('owen.davids','Owen','Davids',25,20000),
		new User('StarWarts19','Eugene','Buns',21,0),
		new User('Nelly','Nelly','Buttons',67,200400),
		new User('sux2bu','Chad','Thadonski',19,6500),
		
		]
	}
}