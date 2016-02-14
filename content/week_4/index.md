# Week 4 - Turtle Graphics, Push and Pop, and Objects

### Intro Activity - Cards as Array, Queue, Stack, Set

### Sketch Postings Review
[Class Sketch Blog](http://compform.tumblr.com)



# Logo and Turtle Graphics
Logo is a computer programming language, created in 1967 at the (now) MIT Media Lab to explore how programming can help children learn critical thinking and problem solving. One of the creaters of Logo, Seymour Papert, wrote [Mindstorms](http://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746/ref=asap_bc?ie=UTF8) which discusses logo and its goals.

One of the ideas introduced in Logo was "turtle graphics". In logo one can issue commands like `turn left`, `move forward`. These comands are carried out by an on-screen "turtle". Tracing the path of the turtle often produces interesting drawings.

Turtle robots were also produced, which allowed children a more physical experience. 

Wikipedia: 
[Logo](https://en.wikipedia.org/wiki/Logo_(programming_language))
[Turtle Graphics](https://en.wikipedia.org/wiki/Turtle_graphics)


# Our Simple Turtle

## `myTurtle = createTurtle(x, y)`
## `myTurtle.forward(distance)`
## `myTurtle.backward(distance)`
## `myTurtle.left(angle)`
## `myTurtle.right(angle)`
## `myTurtle.jumpTo(x, y)`
## `myTurtle.penUp()`
## `myTurtle.penDown()`


## Example 1
## Example 2

# Push and Pop

## `myArray.push()` and `myArray.pop()`

```javascript
myArray = ["apple", "pear"];
console.log("myArray", myArray);
myArray.push("bannana");
console.log("myArray", myArray);
item = myArray.pop();
console.log("myArray", myArray);
console.log("item", item);
```

## P5 `push()` and `pop()`
```javascript
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
    
    // draw a ball
    // commenting in the next line draws a ball
    // but also changes how the rectangle is drawn
    // drawBall(100, 100);
    
    // draw a rectangle
    fill(128, 128, 128);
    stroke(0, 0, 0);
    rect(80, 140, 40, 40);
}

function drawBall(x, y){
    //push();
    fill(255, 0, 0);
    stroke(0, 0, 255);
    strokeWeight(5);
    ellipse(x, y, 40, 40);
    //pop();
}
```

## `myTurtle.push()` and `myTurtle.pop()`


## Example


# How the Turtle Works (Javascript Prototype OOP)

## A Data Object

## Object Methods

## Prototypical Inheritence
