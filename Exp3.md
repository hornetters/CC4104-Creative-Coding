# Experiment 3 - One-key competitive game
This experiment produced a quick autorunner game that allows players to press one key to jump, bouncing off of each other and scrambling for the "kill cube" which allows one player to defeat the other once they obtain it. The experiment utilises a lot of collision and includes gravity as well.

[See the experiment here](/Two_Cubes_2025/index.html)

### Commentary
To begin with, I tested out the physics with one cube. The first thing I created was gravity: this was added to the Yspeed variable, which controls the speed on the Y axis, making the cube fall faster the longer it was in the air. The opposite effect is produced when the jump key is pressed, with the gravity being taken off of the speed, working against it. The speed is then added onto or taken away from the Y position.

For collision, I began to use various if-statements to set up the collision with the walls, floor and ceiling to ensure that the cube could not escape its enclosure. For example, if the Y position was less than 0, (in the ceiling), the cube would be brought back below the ceiling and its speed would be reset to 0. On the X axis, the cube moved at a constant speed determined by the Xdisplacement variable. This variable would be added onto the xposition and is either positive or negative depending on the direction it is moving. 

When bringing another cube into the picture, I initially struggled with making them both collide, trying to use if-statements to see if their positions were the same. However, I realised that the dist() function had everything I needed. It calculated the distance between the two cubes, and then I was able to invert their Xdisplacement to change their direction if this distance was less than 30 (the size of the cube). This same process was used to detect collision with the Kill Cube.

The Kill Cube is what determines whether the players win, lose or draw. This cube spawns initially at frame 300, and uses the same collision detection stated above to determine if one player has obtained it or not. Once the player has obtained it, the player who collected it turns black and is now able to defeat the other player by colliding with them. However, the other player still has a chance of making it a draw by dodging the blacked out player until the killCubeCooldown runs out - this is a variable that allows another killCube to be placed on the canvas after 2500 frames, essentially enabling the other player to obtain one and cause a draw. 

### Reflections
This is probably my favourite out of the three projects, and I am especially proud of how the collision and gravity is handled considering how many if-statements were used in the code to make it work based on each scenario that the cube was in, from it being at the top of the canvas to colliding with the other player. 

One thing that I could improve on is how the players collide vertically. Currently the players get stuck inside each other if they jump onto one another, and they must jump again to break this bug. Furthermore, only one player can press on their key at a time due to how the code runs, so they have to fight over which player can jump at which time. It could be argued that this is simply a feature of the game, but I would like to find out how to make the game register both keys at once in the future to prevent this. 

Another thing that I wanted to do initially was create a class for the cubes rather than copy and pasting the functions and having separate variables. There were many issues I had with this, such as the cubes leaving a trail of dead cubes behind them when they moved, so I scrapped this idea.
