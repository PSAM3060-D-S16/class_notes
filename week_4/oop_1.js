myObject = {};
myObject.name = "Hal";

myObject.talk = function() {
	console.log("Hello, I am named " + this.name);
};

console.log(myObject);
console.log(myObject.name);
console.log(myObject.talk);

myObject.talk();
