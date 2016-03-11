# Week 7 - Realtime Video Processing & Quartz Composer

Intro Video: [Mythbusters Painting Demo](https://www.youtube.com/watch?v=-P28LKWTzrI)

## Mid-semester Eval and Withdraw



# Why?

- Exposure to dataflow programming style.
- New lens for looking at programming.
- Learn how to approach a new programming environment.
- Further explore computational aesthetic.

# Quartz Composer

> Quartz Composer is a development tool for processing and rendering graphical data. Its visual programming environment lets you develop graphic processing modules, called compositions, without writing a single line of code.

— Quartz Composer User Guide

Quartz composer is a node based, visual programming environment. This style of programming is sometimes called [dataflow programming](https://en.wikipedia.org/wiki/Dataflow_programming). Related programming environments include Max/MSP, Pure Data, and Nodebox 3. Dataflow interfaces are also found in non-realtime graphics and audio platforms like Nuke, Maya, and Reason.

## Download Quartz Composer

Quartz Composer is part of the "Graphics Tools for Xcode 7.2" bundle. You can download it here:

[https://developer.apple.com/downloads/](https://developer.apple.com/downloads/)

You will need to sign in with an Apple ID account, but you should not need to purchase a develoepr account. Despite the name, you should not need Xcode 7.2 either.

**Note: Quartz composer and many example files are older and not "signed" by apple. You may need to right click the application or example and choose "open" from the contextual menu to open them on your computer.**

## Overview

**SAVE YOUR WORK FREQUENTLY!**

[Jay Thrash: 4 Minute Guide to Quartz Composer](https://vimeo.com/88468610)

## Some Useful Patches

### Source > Video Input

### Render > Billboard

### Image > Filter > Color Controlls

### Generator > Random + Image Crop

### Animation > Wave Generator

### Custom > Composite

### Evironment > Iterator + Iterator Variables

## Programming Patches

### Program > JavaScript

- Must return an object. The object properties will be the outputs.
- Must declare inputs and outputs with types (this is non-standard Javascript).
- Your value types must match what you declare, and output types must match inputs of the patch you connect too.
- Javacript runs when an input changes. You'll need to connect up an input (like Patch Time) if you want your code to rerun.



### Program > Core Image Filter

- Allows you to program a custom image data filter using a Subset of GLSL.
- This is fairly tricky territory, that we didn't cover in class.
- Feel free to try this at home, but you don't have to.



## Reference
** READ THE TIPS SECTION OF THE LAUNCH WINDOW! **

[Quartz Composer User Guide](https://developer.apple.com/library/mac/documentation/GraphicsImaging/Conceptual/QuartzComposerUserGuide/qc_intro/qc_intro.html)

[Kineme's Guide](http://kineme.net/wiki/UsingQuartzComposer)

## Examples
You can find some Quarz Composer compositions and patches on-line. Unfortunately, I've found many to be broken or dead ends. 

You will find some examples linked to from within the Quartz Composer app itself. 

You can also find some hidden in the Application by selecting its icon in the Finder, right clicking to open the contextual menu, and selected "Show Package Contents"

<!-- Many more are available here (Enter "Quartz Composer" in the search field): https://developer.apple.com/library/prerelease/mac/navigation/ -->





# Homework
- Create a daily sketch exploring the topics presented in class. Post an image or video of your results each day to the class sketch blog.
- You may want to consider starting by reading through the Quartz Composer User Guide (linked above), and completing the included tutorial.
- If you would like to explore other data-flow applications this week, go ahead. Please include a link to the tool you use in your posts. Remember to explore, so don't do your work in PD this week if you already know PD pretty well.


# Sound Unit

- Visualization
- Audio Sythesis
- Music Generation
- Languages

## Links

- [Wikipedia: QC Overview](https://en.wikipedia.org/wiki/Quartz_Composer)
- [Facebook: Orgami](http://facebook.github.io/origami/tutorials/)
- [Pure Data Hello World Video Tutorials](https://www.youtube.com/watch?v=rtgGol-I4gA)
