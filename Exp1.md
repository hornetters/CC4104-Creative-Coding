# Experiment 1 - Moire effect
This is my first experiment that aims to outline the moire effect. The brief for this experiment is to "Experiment with the moire effect. Create 3 variations or experiments that change over time or change with the mouse". My take on the "change over time" statement was to have the user control the effect using a css slider at the top of their screen. As such, I created 4 different patterns that the user can toggle on and off with buttons to mix and match the patterns for different effects. These buttons are accompanied with their own sliders, moving the shapes associated with them from side to side.

[See the experiment here](/Moire_effect_2025/index.html)

### Commentary
To begin with, I created classes for each shape that would simply toggle on and off with the buttons. The function initialiseShapes is what is called when the shape is to be drawn on the canvas, and each class has a different iteration of this function. The "lines" class creates a simple iterative pattern of lines across the canvas using a for loop. The "circles" function does pretty much the same, creating circles using a for loop that increase in size with the i value. 

The third and fourth classes become much more interesting shapes. The "curves class" utilises curves in a nested for loop, creating more of a grid of curves. The if statement creates an offset every other line, making the curves look more like scales on a reptile. This creates an interesting moire effect when paired with the circles class. The fourth and final class, the "zigzags" class, creates randomly generated zigzags across the canvas, determined by an array that is filled with random numbers during setup. This means that the layout of these zigzags is randomly changed each time the canvas is reset in order to make things more interesting.

Each of these pattern classes is accompanied by buttons which toggle them on and off using their respective functions. The buttons are hooked to a function which sets the boolean variables to true or false, which then gets passed through an if statement that calls the initialiseShapes function of the class that is being toggled. The toggles each have their own slider, which translates the patterns side to side when they are utilised in order to move the patterns over each other.

### Reflections
I'm quite proud of how this experiment came out, with some cool-looking moire effects coming from some of the pairings. I was originally going to attempt an audio visualiser instead, though I struggled to come up with effects that would work in the 3D context I was going for. This task was a much more smooth process to complete and I found it interesting experimenting with different shapes.

One thing that I disliked about this experiment is that a lot of combinations don't seem to produce a moire effect, and the only one that produces an interesting moire effect in each of these pairings is the circles shape. However, it can be argued that this is the point of the experiment, and even though it didn't go entirely as planned it is an opportunity to learn from it.
