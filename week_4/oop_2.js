myObjectTemplate = {};
myObjectTemplate.name = "Amy";
myObjectTemplate.lastName = "Smith";
myObjectTemplate.talk = function() {
	console.log("Hello, I am named " + this.name);
};

myObject = Object.create(myObjectTemplate);
myObject.name = "Bob";
myObject.age = 10;

console.log(myObject);
console.log(myObject.name);
console.log(myObject.lastName);
console.log(myObject.talk);
console.log(myObject.age);

myObject.talk();


