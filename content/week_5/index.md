# Week 5 - Vector Graphics

# Notes on Vector Graphics

Vector graphics represent images as a collection of styled shapes and paths. Vector graphics are well suited to highly graphic applications such as type, logos, and some illustration styles. They are very poorly suited for photographic images.

- Much Smaller File Sizes
- Can be rasterized at any resolution, while preserving image sharpness
- Shape data can be understood and used by pen ploters, laser cutters, CNC routers, and other machines
- Shape data can be restyled and colored easily
- Shape data can be scaled, warped, and distorted without loss of quality

Procedurely generating vector data instead of rasterized data allow you to further work with the data in a program like Adobe Illustrator. Post-processing your program output in Illustrator can make some types of designs much easier to create than working working purely with code or manually.

**Note: This week's homework includes a special requirement: create a large-scale print or laser-cut at least one of your sketches.**

# Using p5.svg.js

The [p5.svg.js](https://github.com/zenozeng/p5.js-svg) by Zeno Zeng library extends p5 by making it draw to an SVG element instead of a canvas element. When you call `save()` the SVG data will be downloaded as an `.svg` file which can be opened and edited in Adobe Illustrator. The Github README.md file conains links to a [short tutorial](https://github.com/zenozeng/p5.js-svg/blob/master/doc/getting-started.md) and [examples](http://zenozeng.github.io/p5.js-svg/examples/).

I have created a basic sketch as template.
[Sketch Basic SVG](https://github.com/jbakse/p5_sketches/tree/master/sketch_basic_svg)

Notes:
- I ran into an issue when using p5.svg.js with the latest p5.js. The sketch template includes a slightly older revision of the p5.js library.
- The default resolution in p5 is 1 unit = 1 pixel = 1/72 inch. You can effectively change this with the `scale()` command.
- In addition to their normal roll `push()` and `pop()` can be used to group shapes in your output svg.

# Adobe Extend Script

## Setting up ExtendScript
- Install Adobe Illustrator
- Install Adobe ExtendScript Toolkit
- Download the class [extendscript_sketch_template .zip](https://github.com/PSAM3060-D-S16/extendscript_sketch_template)
- Extract the Zip
- Rename the folder as you like and put it where it belongs (depending on how you organize files).
- I suggest creating a new repo for your extend script sketches, and adding the examples in the template repo as starting points.

## ExtendScript Hello World

- Open Adobe Illustrator
- Create a new, empty document
- Open Adobe ExtendScript Toolkit
- In ExtendScript Toolkit select Adobe Illustrator from the pulldown menu at the top left of the main window
- In ExtendScript Toolkit open illustrator_basic/basic.jsx
- Click the Play button to run the script

## ExtendScript Documentation
- [Adobe Scripting Center](http://www.adobe.com/devnet/scripting.html)
- [Illustrator Scripting PDFS](http://www.adobe.com/devnet/illustrator/scripting.html)
  - Adobe Illustrator CC 2015 Scripting Guide
  - Adobe Illustrator CC 2015 Reference: JavaScript (PDF, 1.0M)

- [ExtendScript API Docs as Webpage](http://yearbook.github.io/esdocs/#/Javascript/$) Thanks to wridgers.

- [A nice Tutorial](https://github.com/jtnimoy/scripting-for-illustrator-tutorial) Thanks to jtnimoy.

# Resources
[Atom JSX Language Package](https://atom.io/packages/language-javascript-jsx)
Adds syntax coloring for .jsx files. Also you can use set Edit > Select Grammar to tell atom your .jsx files are Javascript.


# Homework
Create a daily sketch exploring the topics presented in class. Post an image of your results each day to the class sketch blog.

**An extra requirement this week:**
Create a large-scale print or laser-cut of at least one of your sketches this week.
