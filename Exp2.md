# Experiment 2 - Mouse-driven painting tool
This experiment follows a mouse driven painting tool with five tools and a slider: the Pen, Eraser and Chaos button are all controlled by the slider which sizes these brushed up and down. There is also a save button which downloads an image of the canvas to your computer, and the clear button which resets the canvas.

[See the experiment here](/Art_Page_2025/index.html)

### Commentary
This experiment was what initially taught me how buttons worked and enabled me to go back and utilise them in my first experiment as well. I did not need to use a starting point for this experiment as it was easy enough to begin on my own, and I only utilised what was in the referencing section of the p5.js website to guide myself along, especially with the buttons. I also took the time to style the buttons using the .style function, which is a CSS declaration. The value in the slider is also easily translatable into a numerical value which controlled the sizes of the brushes.

The buttons are linked up to their own functions which change variables associated with that button as well as turns off other buttons. For example, the pen button links to the penPressed function, which sets the penOn value to true and the values of the other buttons to false. It also changes its own style to have a grey background, indicating that it's pressed, and changes the styles of the other buttons to white.

The eraser and pen buttons are quite simple: take the X and Y location of the mouse, and draw a line based on the current location and location on the previous frame. The eraser changes the stroke colour to the same colour as the background, which is essentially more of a way to just "paint over" the black lines rather than erase them completely.

The "Chaos!" button was more fun to make. It creates a random number up to 4, with each value being a different shape. These shapes get placed in a random location on the canvas and are sized based on the slider, rapidly placing around when the mouse is held.

The final two buttons are simple but useful for the context of this experiment. The save button simply uses the "saveCanvas()" function, a very useful function that exports an image of the canvas, to save the image as 'myDrawing.png'. The clear button calls the setup() function again, essentially clearing the canvas and switching every button off.

### Reflections
This experiment really spoke to me as I have always enjoyed drawing and using art programs. I found the Chaos tool especially fun to implement, with the random shapes popping up on the screen being interesting to watch.

One thing that I would have liked to do with this experiment is to have a sand simulation that places falling sand particles that can collect at the bottom of the canvas to make it seem as though the painting wasn't the only use of the canvas. However, due to the complexity of this idea and the little time I had to go through with it, I had to unfortunately put it to the side.
