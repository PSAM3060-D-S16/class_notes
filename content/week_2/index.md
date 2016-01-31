# Week 2 Class Notes



Welcome Music: Dice Music

Intro Activity: Dice

Today's Materials: Dice, Paper


# What Git Is

# Creating a Github Account

# Starting a New Project
### Create a Repo on Github
### Clone the Repo to Your Computer, With Github for Mac
### Add/Modify Files
### Commit the Files
### Push Your Commits


# What p5 Is

# Creating a Simple Javascript/P5 Project
### Create index.html
### Add p5.js
### Add sketch.js
### Commit and Push Your Work



# Random

### Generating random numbers
The random() function

### Even distribution
random()*range+start
random(10,10)

### Random Integers
floor, ciel, round
to simulate a die `floor(random(0,6)) + 1` 
why not `floor(random(1,6))`?


### Weighted distribution
(random() + random())/2*range+start
2 * random() != random() + random()


### Normal distributed
(random() + random() + random())/3*range+start

### Front weighted
min(random(), random())

### Back weight
max(random(), random())


http://anydice.com/articles/three-basic-distributions/
http://www.redblobgames.com/articles/probability/damage-rolls.html
http://p5js.org/reference/#/p5/randomGaussian


# Avoiding Repeats


## Modeling a Deck with an Array
random order, without repeats
`shuffle()`


# Psuedo-random vs. Random

How a Psuedo-Random Number Generator Works

[Linear Congruential Generator](https://en.wikipedia.org/wiki/Linear_congruential_generator)


### Setting the Random Seed
`randomSeed()`

### Repeatable Random

How to use random in a program, but get the same results each run.
Beware user input.





## Populating a map with trees
random(widht/height) vs grid + random(offset)


look up maps/ heat maps


### Perlin Noise


Brownian Motion
