# Week 4 - Turtle Graphics, Push and Pop, and Objects

### Intro Activity - Cards as Array, Queue, Stack, Set

Time | Thing
--- | ---
3:50 | Sketch Postings Review
4:10 | Logo and Turtle Graphics
4:40 | Push and Pop
5:30 | Break
5:40 | Advanced Topic: How the Turtle Object Works
6:20 | Closing Notes and Assignment

### Sketch Postings Review
[Class Sketch Blog](http://compform.tumblr.com)



# Logo and Turtle Graphics
Logo is a computer programming language, created in 1967 at the (now) MIT Media Lab to explore how programming can help children learn critical thinking and problem solving. One of the creators of Logo, Seymour Papert, wrote [Mindstorms](http://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746/ref=asap_bc?ie=UTF8) which discusses logo and its goals.

One of the ideas introduced in Logo was "turtle graphics". In logo one can issue commands like `turn left`, `move forward`. These commands are carried out by an on-screen "turtle". Tracing the path of the turtle often produces interesting drawings.

Turtle robots were also produced, which allowed children a more physical experience. 

[Logo](https://en.wikipedia.org/wiki/Logo_(programming_language))
[Turtle Graphics](https://en.wikipedia.org/wiki/Turtle_graphics)


# Our Simple Turtle

I've created a basic implementation of a turtle, grab [the code on Github](https://github.com/jbakse/p5_sketches/tree/master/sketch_turtle_basic).

## `myTurtle = new Turtle(x, y)`
turtle constructor, creates a turtle object
takes optional x, y starting coordinates (default is center of sketch)

## `myTurtle.moveForward(distance)`
moves the turtle along its current bearing, drawing a line if pen is down

## `myTurtle.moveBackward(distance)`
moves the turtle backward from its current bearing, drawing a line if pen is down

## `myTurtle.moveTo(x, y)`
instantly transports the turtle to the provided x, y location, drawing a line if pen is down

## `myTurtle.turnRight(angleDegrees)`
rotates the turtle's bearing clockwise by the provided angle in degrees

## `myTurtle.turnLeft(angleDegrees)`
rotates the turtle's bearing counter-clockwise by the provided angle in degrees

## `myTurtle.turnTo(angleDegrees)`
changes the turtle's bearing to the provided angle in degrees

## `myTurtle.penUp()`
tells the turtle to move without drawing

## `myTurtle.penDown()`
tells the turtle to draw a line when it moves

## `myTurtle.image(image, width, height)`
draws and image centered on the turtle's current location and aligned with the turtle's rotation



## Example 1

<a href="./turtle_basic.js" class="p5_example show-lab show-lab-link hidden">turtle_basic.js</a>


## Example 2
<a href="./turtle_image.js" class="p5_example show-lab show-lab-link hidden">turtle_image.js</a>


# Notes on the Turtle
You can use turtle graphics to create drawings with a wide variety of styles, but turtle graphics lends itself to curvy/spirography drawings naturally. This is largely due to two differences in the way the turtle works vs p5's `line()`.

- Positions and angles are relative instead of absolute.
- Lines are specified in terms of angle and distance instead of x and y.






# Push and Pop

## `myArray.push()` and `myArray.pop()`

```javascript
myArray = ["apple", "pear"];
console.log("myArray", myArray);
myArray.push("banana");
console.log("myArray", myArray);
item = myArray.pop();
console.log("myArray", myArray);
console.log("item", item);
```

## P5 `push()` and `pop()`

<a href="./p5_pushpop.js" class="p5_example show-lab show-lab-link hidden">p5_pushpop.js</a>

P5 Reference:  
[push()](http://p5js.org/reference/#/p5/push)
[pop()](http://p5js.org/reference/#/p5/pop)

# Turtle, Push, Pop

## `myTurtle.pushState()`
records the turtle's current state (position, bearing, etc.) to a stack so that changes can be undone easily

## `myTurtle.popState()`
restores the turtle's state to the top recorded state on the stack


## Turtle w/ Push + Pop
<a href="./turtle_pushpop.js" class="p5_example show-lab show-lab-link hidden">turtle_pushpop.js</a>

## Turtle Tree
<a href="./turtle_tree.js" class="p5_example show-lab show-lab-link hidden">turtle_tree.js</a>



# Break

# Advanced Topic: How the Turtle Object Works 
## Javascript Prototype-based OOP

> Note: This is going to be a brief introduction to OOP, touching on just the basic core concepts. OOP allows for very powerful tools such as inheritance and polymorphism. A good place to start learning more is the [MDN Introduction to Object-Oriented Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

Object Oriented Programming is a programming paradigm in which data and functions are bundled together. These bundles are called objects, and each object represents an idea in your larger program. Breaking up a program into objects is one way to organize a complex project.

In a OOP video game, you might have objects which represent enemies. Enemy objects would contain data such as their `position`, `speed`, and `strength`. They would also contain functions such as `draw()` or `jump()`.

Our turtle objects have data including `x`, `y`, and `bearing` and functions like `turnLeft()` and `moveForward()`.

In OOP it is common that many objects are similar. These similar objects often all behave the same way, but have distinct state or data. In the video game you  may have several enemies that all `draw()` and `jump()` the same way, but each specific enemy has it's own `position` and `speed`. These similar objects are often described as being specific _instances_ of a general _class_.

An object's functions know which instance they belong to and can access the instance's data using `this`.

<a href="./oop_1.js" class="p5_example show-lab show-lab-link hidden">oop_1.js</a>


> Another Note: Instance and Class are terms that come from class-based OOP. Most mainstream OOP languages are class-based, but Javascript is prototype-based. Because class-based OOP is more common, class-based terms pop up frequently even in javascript reference. [Some have argued](http://javascript.crockford.com/prototypal.html) that even Javascript itself confuses the issue with the `new` operator. And because many programmers learn class-based OOP first, they look for ways to do class-based OOP in Javascript. There are several libraries that make Javascript look more class-based, and [the next/newest version of javascript](http://es6-features.org/#ClassDefinition) adds class features. 

### Prototypes

Since it is common for many objects share behavior, Javascript provides a mechanism to allow this. You can designate an object as the _prototype_ of another object. If you try to access a property of an object, and that object doesn't have that property but it's prototype does, the prototype's property will be used. 

This allows you to specify a template object that contains the shared behavior of a group of similar objects. You can then create many instance objects that share the template object as their prototypes. These instance objects can have their own properties, but will share (inherit) the properties defined in the template object. Usually, objects define their own data/state properties and inherit behavior/method/function properties.

<a href="./oop_2.js" class="p5_example show-lab show-lab-link hidden">oop_1.js</a>

> Note: Since the properties on the template object are only used if the instance object doesn't define them, you can _override_ the behavior of the template for a specific instance object. This leads into the full power of _inheritance_ and _polymorphisim_

In Javascript, there are multiple ways to create objects and set up their prototypes. [Some people suggest using Object.create](http://stackoverflow.com/questions/2709612/using-object-create-instead-of-new), but probably the most _normal_ approach is using a _constructor_ function with the `new` operator.

Here is what happens when you call a constructor function with the `new` operator. Javascript creates a new, empty object. Javascript sets the prototype of the new object to be the prototype associated with the constructor function. Javascript executes the constructor function, using the new empty object as `this`.

<a href="./oop_3.js" class="p5_example show-lab show-lab-link hidden">oop_1.js</a>

## How turtle.js works

## [View Code](https://github.com/jbakse/p5_sketches/blob/master/sketch_turtle_basic/turtle.js)


# Continued Reading
In these first few weeks we've looked at some intermediate topics related to drawing still images in p5. We'll be moving on to other topics in the coming weeks, but if you want to continue with drawing you might want to check out
[The Nature of Code](http://www.amazon.com/Nature-Code-Daniel-Shiffman-ebook/dp/B00BPFT8D4/) by Daniel Shiffman. Daniel teaches over at  NYU ITP, contributes heavily to Processing and p5.js. The Nature of Code covers a lot of interesting topics with code in Processing. Also check out his [Youtube channel](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw).

# Random Tip: Chrome Task Manager
While you are working you might occassionaly create a script that gets stuck or takes a very long time to execute. This will freeze up the Chrome tab the script is running in. [Use the task manager to stop your script](https://support.google.com/chrome/answer/95672?hl=en).


# Assigment

Create a daily p5.js sketch exploring the topics presented in class. Post an image of your results each day to the class sketch blog.

For those of you who prefer a little more direction, some optional prompts:

`#turtle_plus_random` Without random, turtle graphics tend to have a machine-made quality, throwing a little random chance into your moves and turns can make things look more natural.

`#image_only` Keep the pen up, and do all your drawing using `.image`

`#recursive_turtle` Try out making a drawing using a recursive function. Try to make something that looks very different from the tree example.


# Links

- [Beautiful Programming](http://beautifulprogramming.com/)
