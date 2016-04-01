# Week 9 - Generating Music

## Opening Links
- [sketch_music](sketch_music)
- [a little synth thing](http://jeremywentworth.com/webkitSynth/#)
- [Fur Elise Minor/Major](https://www.youtube.com/watch?v=Y-rZD2AsHbI)
- [Neural Network Music](http://yoavz.com/music_rnn/)
- [Tennis Music](https://soundcloud.com/ibm/sets/remixes-made-with-tennis-data)

## Cultural Subjectivity
- Music Theory and Graphic Design
- Design as Science
- Design as Art


## P5 Sound Library

> **Be sure you have the latest version of the sound library.**

Our examples this week focus on simple music generation. We will be working at a higher level of abstraction, thinking about the notes to play, rather than the creating the sound of a note.

You can experiement with generating sounds and noise yourself if you like. Take a look at the p5 docs for information about the library functions p5 provides for working with sound.

- [P5 Sound Library Reference](http://p5js.org/reference/#/libraries/p5.sound)
- [P5 Sound Examples](http://p5js.org/examples/)

## Some Music Theory
I don't have a great deal of knowledge around music theory, so this information will not be deep (and there is so much more depth below). It is possible that some of it will be incorrect. 

Still, these are the assumptions I used in creating the examples we will study this week.

**First**
- A piece of music is an organized collection of notes and rests.
- A note is a tonal sound defined by it's pitch, length, loudness, and timber.
- A rest is a period of silence defined by it's length.

**Pitches**
- Tonal sounds can come in any pitch, but the pitches of musical notes are constrained to a repeating, exponential 12 note grid.
- Each note in the grid is `2^(1/12)` or `1.059` times higher than the last.
- After 12 notes the pitch will double, this is called and octave.
- These notes are named ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
- You could also call "C#" "D-Flat". They are the same thing. Except when they are totally not.
- The distance between two adjacent notes is called a half-step. Two half-steps is a whole-step.
- The fourth octave "A" note is often used as a tuning standard, and is often set at 440hz.
- Side Note: 12 steps is a compromise that allows each step to be equal, but results in intervals between pitches that are close to integer ratios.  

Note | C | C# | D | D# | E | F | F# | G | G# | A | A# | B
- | - | -  | - | -  | - | - | -  | - | -  | - | -  | - 
Equal Temperament hz | 261.63 | 277.18 | 293.66 | 311.13 | 329.63 | 349.23 | 369.99 | 392.00 | 415.30 | 440.00 | 466.16 | 493.88
Equal Temperament ratio | 1 | 1.059 | 1.122 | 1.189 | 1.259 | 1.334 | 1.414 | 1.498 | 1.587 | 1.681 | 1.781 | 1.887 | 
Just Interval Ratio | 1 | - | 1.125 | - | 1.2 | 1.333 | - | 1.5 | - | 1.666 | - | 1.875
Just Interval Ratio | 1/1 | - | 9/8 | - | 5/4 | 4/3 | - | 3/2 | - | 5/3 | - | 15/8


**Scales**
- You could use all of the notes when writing music and treat them all, but most music picks a subset of notes to stick too.
- These subsets of notes are called keys.
- Keys have a tonic, which is the note that the key is built from.
- Keys have a scale, which describes the intervals from the tonic to the other notes in the scale.
- For example the major scale intervals are [whole, whole, half, whole, whole, whole, half]
- So, C Major is C, then two half-steps up, two half-steps up, one half-step up, etc.
- The tonic is important: A-minor and C-major have the same notes but treat them differently.
- There are very many different scales. Major and minor are pretty common.
- The mood of music is tied to the scales. Major is happy. Minor is sad. It is kind of crazy.

Note    | C | C# | D | D# | E | F | F# | G | G# | A | A# | B
-       | - | -  | - | -  | - | - | -  | - | -  | - | -  | - 
C-Major | x |    | x |    | x | x |    | x |    | x |    | x
Step    | w |    | w |    | h | w |    | w |    | w |    | h


**Rhythm**
- A tonal sound can have any length, but music usually follows a rhythm.
- Musical notes usually start and stop on a temporal grid.
- In 4/4 time (a very common musical timing) this grid is divided into measures of 4 beats.
- These measures are divided up into notes and rests.
- These notes and rests can take up the whole measure, or half, or 1/4, or 1/8. 
- Most of the times the notes and rests don't continue from one measure to the next.
- These rules are broken from time to time for different effects.

## Arrays

```javascript
emptyArray = [];
simpleArray = [1, 2, 3];
nestedArray = [[60, 1], [62, 1]];
nestedArray.push([64, 1]);
nestedArray[1][0];
nestedArray[1][1];
nestedArray2 = [[70, 1], [72, 1]];
combinedArray = nestedArray.concat(nestedArray2);
```


## MonoSynth, QuickMusic, and Examples

For this weeks class, I have created two small javascript libraries and several example sketches. 


### MonoSynth

MonoSynth, uses the p5.js oscillator and envelope classes to create an synth object that can play back a sequence of notes.

```javascript
var synth = new MonoSynth();
synth.playNotes([[60, 1/4], [62, 1/4]]);
```

### QuickMusic
QuickMusic provides a few utilty functions for processing sequences of notes and working with keys/scales.

**Supported Musical Scales**
- `quickMusic.scales.major`
- `quickMusic.scales.minor`
- `quickMusic.scales.phrygianDominate`
- `quickMusic.scales.minorPentatonic`

**Library Functions**
- `quickMusic.getNoteInScale(position, tonic, scale)`  
  translate from scale positoin to midi note number

- `quickMusic.midiToName(number)`  
  find the name of a midi note number

- `quickMusic.nameToMIDI(name, octave)`  
  find the midinote number by name

- `quickMusic.imposePhrase(phrase, tonic, scale)`  
  translate notes from scale position to midi note number

- `quickMusic.shiftPhrase(phrase, amount)`  
  shift notes up or down in pitch

- `quickMusic.clonePhrase(phrase)`  
  create copy of a phrase


### Examples
I also created several fully commented example scripts, we will review them in class, but I suggest also reading them at your own pace.

## [Example Download](sketch_music.zip)
## [Example Documentation](docco_out)


# Links
- [Javascript Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Chord Progression Tool](https://autochords.com/)
- [Khan Academy Music Lessons](https://www.khanacademy.org/humanities/music/music-basics2)
- [Aria Maestosa: OS X Midi Editor](http://ariamaestosa.sourceforge.net/)
- [Teoria: A full music theory library](https://github.com/saebekassebil/teoria) (Better than QuickMusic!)
- [Ocean Audio: OS X Sound Edtor](http://www.ocenaudio.com/)
- [HTML5 Rocks on Audio Scheduling](http://www.html5rocks.com/en/tutorials/audio/scheduling/)
- [Midi Chart and Math](https://newt.phys.unsw.edu.au/jw/notes.html)
