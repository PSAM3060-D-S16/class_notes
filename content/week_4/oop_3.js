function Person() {
	this.name = "default name";
}

Person.prototype.talk = function() {
	console.log("Hello, I am named " + this.name);
};

myObject = new Person();
myObject.name = "Tom";

console.log(myObject);
console.log(myObject.name);
console.log(myObject.talk);
myObject.talk();




