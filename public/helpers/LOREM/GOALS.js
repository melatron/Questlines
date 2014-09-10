function Goal(title,description,exp,type){
	this.title = title || 'Untitled';
	this.type = type || 'default';
	this.exp = exp || 0;
	this.description = description || 'This goal has no description';
}

var GOALS = {
	goalArray : {
		'goals' : [
		new Goal('Finish university','Get your diploma and throw that hat in the air. You graduate, you.',7500,'education'),
		new Goal('Travel to Paris','Visit the land of long bread, metal towers and love.',2300,'travel'),
		new Goal('Get married',"You've found that special someone and put a ring on it. Awesome!",10000,'relationship'),
		new Goal('Write thesis',"You managed to keep yourself focused long enough to write.",1500,'education'),
		new Goal('Travel to Asia','You are no stranger to the ways of the east.',2500,'travel'),
		new Goal('Get a job','Finding work in this economy (or any) is hard.But not too hard for you',6000,'work'),
		new Goal('Learn Python','You are now a master of the worlds snakiest language.',2500,'technology'),
		new Goal('Get fit',"You're a lean, mean killing machine with a rugged grin.",4500,'fitness'),
		new Goal('Finish highschool','Feeling smart already?',9000,'education'),
		new Goal('Make an app','You joined the cool kids and made your own application',1400,'technology'),
		new Goal('Run a marathon','No matter the length a marathon is no easy feat',2000,'fitness'),
		new Goal('Learn Spanish','Hablamos, amigo. Hablamos todo el dia.',2000,'education'),
		new Goal('Go to the moon','TO THE MOOOOOOON',20000,'travel'),
		new Goal('Get your first car','Open road ahead of you. The fuel is the limit',4000,'technology'),
		new Goal('Become a nurse',"Be the doctor's right hand",6000,'health')]
	}
}