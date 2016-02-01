# Week 2 Class Notes

Welcome Music: 
https://en.wikipedia.org/wiki/Musikalisches_W%C3%BCrfelspiel
http://sunsite.univie.ac.at/Mozart/dice/

Intro Activity: Dice

Today's Materials: Dice, Paper

Time | Thing
--- | ---
3:50 | Dice
4:00 | Dailies Review
4:10 | Git and P5 (re)intro
4:20 | Random
5:20 | Setting up Github, Starting a P5 Project
5:30 | In class work-time: Randomized Drawings


# What Git Is
...

# Creating a Github Account
...

# Starting a New Project
### Create a Repo on Github
### Clone the Repo to Your Computer, With Github for Mac
### Add/Modify Files
### Commit the Files
### Push Your Commits


# What p5 Is
...

http://pucd2035-e-f15.github.io/class_notes/

# Creating a Simple Javascript/P5 Project
### Create index.html
### Add p5.js
### Add sketch.js
### Commit and Push Your Work



# Random Values

### Generating random numbers
Plain Javascript provides `Math.random()` to generate a random number. 
Processing provides the `random()` for generating random numbers.
Without any parameters, `random()` generates a random number between 0 and 1 (not including the 1). You can pass paramters to control the range of the number. The numbers produced by random should be pretty close to evenly distributed.

<a href="./random.js" class="p5_example show-code show-lab-link hidden">random</a>


### Even Distribution
If you want your numbers evenly distributed over a range, `random()` just works.

```javascript
random(0,10); // even distribution between 0 and 10
random(10,15); // even distribution between 10 and 15
```

In some libraries the `random` function doesn't take parameters, and just gives you a value between 0 and 1. If you want a different range, you can scale and offset the value yourself:

```javascript
random() * range + start
random() * 5 + 10 // even distribution between 10 and 15
```


### Random Integers
The `random()` function returns floating point values, but sometimes you just want whole numbers. The `floor()` function will round a number down, chopping off the decimal part.

```javascript
// roll a standard die
floor(random(0,6)) + 1

// this won't quite work. why?
floor(random(1,6))
```


### Biased Distribution
Sometimes even distribution isn't what you really want. Often you want numbers in the middle, low, or high numbers to come up more often. Simple averaging and the `min()` and `max()` functions can help with this.

```javascript
// generate two numbers, and average them to get a middle bias
(random(0,10) + random(0,10)) / 2

// pick the lower of two random numbers for low bias
min(random(), random())

// pick the higher of two random numbers for high bias
max(random(), random())
```


### Normal Distribution

If you generate several random numbers and average them, the result gets close to normal (bell curve) distribution. 

```javascript
// average more than two numbers to get something like normal, bell curve distribution
(random(0,10) + random(0,10) + random(0,10)) / 3
```

P5 also provides the [randomGausian()](http://p5js.org/reference/#/p5/randomGaussian) function for generating numbers with normal distribution. With randomGausian the possible values are not clamped to a range, extreme outliers are just really rare.


###  More Info
[Anydice](http://anydice.com/)
[Anydice Three Basic Distributions](http://anydice.com/articles/three-basic-distributions/)
[Redblob Post](http://www.redblobgames.com/articles/probability/damage-rolls.html)


# Random Visualizer
<a href="./dice.js" class="p5_example show-lab show-lab-link hidden">dice</a>


# Random Choices

If you want your code to make a decision at random, you can combine `random()` with and conditional (`if`) statement.

```javascript
// do something only half the time
if (random() < .5) {
	console.log("Optional Thing");
}

// do something only 10% of the time
if (random() < .1) {
	console.log("Rare Thing");
}

// another way to do something only 10% of the time
if (random(100) < 10) {
	console.log("Rare Thing");
}
```

With `else` you can pick between two optional things to do.

```javascript
// do one thing, or the other. even odds
if (random() < .5) {
	console.log("Option A");
} else {
	console.log("Option B");
}
```

With `else if` you can pick between multiple optional things to do.

```javascript
var r = random(100);

if (r < 20) {
	console.log("Rare Thing 1 (20%)");
} else if (r < 40){
	console.log("Rare Thing 2 (20%)"); // r must be > 20 and < 40
} else {
	console.log("Normal Thing (Remaining 60%)");
}
```

A common mistake when following this pattern is calling random multiple times. If you are making 1 choice between several options, you only want to call `random()` once. 

**1 choice, 1 random**.

```javascript
// this code doesn't work as expected
if (random(100) < 20) {
	console.log("Rare Thing 1 (20%)"); // Actually a 20% chance
} else if (random(100) < 40){
	console.log("Rare Thing 2 (20%)"); // Actually a 32% chance
} else {
	console.log("Normal Thing (Remaining 80%)"); // Actually a 48% chance
}
```


# Dice vs. Decks

If you roll a die a few times you might get the same value more than once, and it might take a long time before a particular value pops up. 

If you roll a normal die six times, it is unlikely that you'll get all six values without repeats (only happens 1.5% of the time).

Also, it wouldn't really be odd to not roll any 1's (happens about 33% of the time). In fact you can be pretty sure that at least one number won't pop up in six rolls (98.5% sure).

Decks of cards work differently. When you pull a card off of a shuffled deck, you get a random value, but then you can remove that value from the deck. That way you can avoid duplicates, and you can make sure you tour all the values eventually.


### Modeling a Deck with an Array

```javascript
var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var position = 0;
function setup() {
	values = shuffle(values);
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
	console.log(values[position]);
	position++;
}

```

# Deck Visualizer
<a href="./cards.js" class="p5_example show-lab show-lab-link hidden">dice</a>



# Psuedo-random vs. Random

If your computer is working right, it represents a deterministic system. When the computer is in a particular state and performs an instruction, the resulting state will always be the same. **By definition, the results are never random.**

So how can `random()` produce a random value? Well, it can't. It can produce only psuedorandom values. Pseudorandom values are appear random if you don't look very closely, but which are created by a deterministic process.

A common method to create pseudorandom values is a [Linear Congruential Generator](https://en.wikipedia.org/wiki/Linear_congruential_generator).

<a href="./random_lcg.js" class="p5_example show-code show-lab-link hidden">dice</a>

For our purposes, it is not really important to understand exactly how the generator works.

**It is important to understand that the sequence of `random()` numbers is perfectly predictable, if you know where it started.**

### Setting the Random Seed

P5 provides a the `randomSeed()` to set the **seed** used by `random()`. Once you have set the seed, the sequence of values produced by random will always be the same.

<a href="./seed.js" class="p5_example show-lab show-lab-link hidden">randomSeed</a>

Using the seed, you can use random values in your code, but have the same things happen between runs. This can be a useful feature of programs, and can help with debugging problems.

Be careful when relying on the seed to get random but repeatable results. There are at least two common ways for things to get messed up. 

First, if your program accepts user input, and that input can influence how many times `random()` is called, your program can get off sequence. 

Second, if you change your program and add or remove a call to `random()`, you will alter the sequence.




## Populating a map with trees
random(widht/height) vs grid + random(offset)


look up maps/ heat maps


### Perlin Noise


Brownian Motion
