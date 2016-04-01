# Week 6 - Animations

[Beyond the Mind's Eye](https://www.youtube.com/watch?v=H9V-LShEoCc)

## Thoughts on Animation

## Real-time vs. Prerendered

- Real-time doesn't mean *fast*.
- Real-time does mean *created at the time it is used*.
- Real-time also means *clock time*.
- Real-time has multiple meanings. So, fine, sometimes it does mean fast.

In real-time rendering, each frame of animation is rendered just before it is displayed on screen. The key advantage of this is that the animation can be influenced by user input. To achieve this each frame must be rendered in the time between frames. In some modern graphics engines, multiple frames are in various phases of rendering at the same time. 




### `millis()`

In real-time rendering it is common that the time between frames might vary, or that some frames might be dropped. Because of this it is best to use a real-time clock functions to keep track of the animation time. The current frame number is unreliable for timing.

<a href="./millis.js" class="p5_example show-lab show-lab-link hidden">millis.js</a>

### `frameCount`

When pre-rendering each frame may take much longer than the animation frame rate to render, and the render times for each frame may vary drastically. However, since the resulting frames will be played back at a stable frame rate, it doesn't matter how long they take to render. In this case, using the frame number for timings is the best choice.

<a href="./framecount.js" class="p5_example show-lab show-lab-link hidden">millis.js</a>

## Parametric + Deterministic

### `randomSeed()`

<a href="./randomseed.js" class="p5_example show-lab show-lab-link hidden">millis.js</a>

## Exporting Frames

The `save()` function and its friends will save and download your current canvas frame as an image. **You will want to empty out your downloads folder first.**
 
> [SHARPEN YOUR AXE](http://p5js.org/reference/)

### `save()`

[save()](http://p5js.org/reference/#/p5/save)

### `saveCanvas()`

[saveCanvas()](http://p5js.org/reference/#/p5/saveCanvas)

### `saveFrames()`

[saveFrames()](http://p5js.org/reference/#/p5/saveFrames)

<a href="./save.js" class="p5_example show-lab show-lab-link hidden">save.js</a>

## Stitching Frames

How I usually do it: [Quicktime 7](https://support.apple.com/kb/DL923?locale=en_US)

How I also sometimes do it: [FFmpeg](https://www.ffmpeg.org/)

Other options (some out of date): [Convert an image sequence to a movie](http://www.andrewnoske.com/wiki/Convert_an_image_sequence_to_a_movie)

How We will do it (and I might start doing it this way): Photoshop

- Open Photoshop
- Choose `File` > `Open`
- Click on the first file in your sequence
- Check `Image Sequence
- From the Timeline dropdown menu choose `Render Video...`
- Adjust settings
- Click `Render`


<!-- <a href="./save_2.js" class="p5_example show-lab show-lab-link hidden">save_2.js</a> -->


## Periodic Functions

### Using Modulo `%`

<a href="./modulo.js" class="p5_example show-lab show-lab-link hidden">modulo.js</a>

<a href="./modulo_square.js" class="p5_example show-lab show-lab-link hidden">modulo_square.js</a>


### Using Sine `sin()`

- The `sin()` function returns the trigonometric sine of the given angle in radians.
- Given an angle in a right triangle, the sine function provides the ratio of the opposite side to the hypotenuse.
- This ratio ranges from -1 to 1 in a nice, graceful curve.

- Multiplying the input value will change the period.
- Adding to the input value will change the phase.
- Multiplying the output value will change the amplitude.
- Adding to the output value will change the vertical shift.

[Sine](https://en.wikipedia.org/wiki/Sine)

<a href="./sin.js" class="p5_example show-lab show-lab-link hidden">sin.js</a>

### LerpColor()

[`LerpColor()` is handy](http://p5js.org/reference/#/p5/lerpColor)



# Homework
Create a daily sketch exploring the topics presented in class. Post an image of your results each day to the class sketch blog.
