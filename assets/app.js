var data = [];

Object.prototype.tag = function(tag){
	if(!this.tags) this.tags = [];
	this.tags.add(tag);
	return this;
}

"C#"
"Asp.net"
"Javascript"
"Mathematica/Wolfram"

var skills = ["Programing"]

var project = {name:"AutoChair",tagline:"A selfdriving wheelchair."};


var project = {name:"AutoChair",tagline:"A selfdriving wheelchair.", description:"",tags:["AutoChair","Robotics","System Architecture"]"};

var courses={grade:"A+", year:2015}.tag("Class");