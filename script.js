let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1
let openDoor2
let openDoor3
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
let startButton = document.getElementById('start')
let currentlyPlaying = true;
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
const beachDoorPath ="https://content.codecademy.com/projects/chore-door/images/beach.svg"
const spaceDoorPath ="https://content.codecademy.com/projects/chore-door/images/space.svg"
/**
 * Generates a random door to be the choreBot door.
 */
const randomChoreDoorGenerator=()=>{
    const choreDoor= Math.floor(Math.random()*numClosedDoors)
    if (choreDoor===0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor===1){
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath
        openDoor3 = beachDoorPath
    }else{
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 =spaceDoorPath;
    }
}
/**
 * Handles the click event for doorImage1 by changing its image source to the
 * predetermined openDoor1 path and invoking the playDoor function to update
 * game state.
 */
doorImage1.onclick=()=> {
    
    if (currentlyPlaying && !isClicked(doorImage1)){
        doorImage1.src=openDoor1;
        playDoor(doorImage1)
}}
/**
 * Handles the click event for doorImage2 by changing its image source to the
 * predetermined openDoor2 path and invoking the playDoor function to update
 * game state.
 */
doorImage2.onclick=()=> {
    if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src=openDoor2;
    playDoor(doorImage2)
}}
/**
 * Handles the click event for doorImage3 by changing its image source to the
 * predetermined openDoor3 path and invoking the playDoor function to update
 * game state.
 */
doorImage3.onclick=()=> {
    if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src=openDoor3;
    playDoor(doorImage3)
}}
/**
 * Resets the game by starting a new round when the start button is clicked.
 */
startButton.onclick=()=> {
    startRound()
}
/**
 * Resets the game by starting a new round. This function is invoked when the
 * start button is clicked. It resets the state of the game by changing the
 * image source for each door to the closed door image, setting the number of
 * closed doors to 3, setting the currentlyPlaying variable to true, and
 * displaying the "Good luck!" message on the start button. Finally, it
 * invokes the randomChoreDoorGenerator function to generate a new random door
 * to be the ChoreBot door.
 */
const startRound=()=>{
    doorImage1.src=closedDoorPath;
    doorImage2.src=closedDoorPath;
    doorImage3.src=closedDoorPath;
    numClosedDoors=3;
    currentlyPlaying=true;
    startButton.innerHTML='Good luck!';
    randomChoreDoorGenerator()
}
/**
 * Ends the game by displaying a win or loss message on the start button and
 * setting the currentlyPlaying variable to false.
 * The status of the game, either "win" or "loss".
 */
const gameover=(status)=>{
    if (status==='win'){
        startButton.innerHTML="You win! Play again?"
    }else{
        startButton.innerHTML="Game over! Play again?"
    }
    currentlyPlaying=false
}

/**
 * Decrements the number of closed doors and ends the game if all doors are open.
 */
const isClicked=(door)=>{
    if (door.src==closedDoorPath){
        return false
    }else{
        return true
    }
}

/**
 * Determines if the provided door contains the bot by comparing the door's
 * image source with the botDoorPath.
 */
const isBot=(door)=>{
    if (door.src===botDoorPath){
        return true
    }else{
        return false
    }
}
/**
 * Handles functionality for when the user clicks on a door. If the door is
 * closed, it decrements the number of closed doors. If the door is the ChoreBot
 * door, it ends the game. If the number of closed doors is 0, it ends the game
 * with a win.
 */
const playDoor=(door)=>{
    numClosedDoors--;
    if (numClosedDoors===0){
        gameover('win');
    } else if(isBot(door)){
        gameover()
    }
}
startRound()