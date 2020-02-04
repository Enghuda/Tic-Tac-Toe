console.log('Hello from JS!');


let turn = true; //true means X turn
const squares = [];
let counter = 0;//how many pressd
let gamecheck = false;





let box = document.querySelectorAll('.box');

function clickEvent() {

    if (turn && this.innerHTML == "") {

        this.innerHTML = "X";//chang value to be x
        turn = false;
        // whosturn.innerHTML = "O Turn Now";

    } else if (!turn && this.innerHTML == "") {
        this.innerHTML = "O";
        turn = true;
        // whosturn.innerHTML = "X Turn Now"; 
    }
    if (turn == false) {
        console.log("O Turn Now");
    } else if (turn == true) {
        console.log("X Turn Now");

    }
    winner();
    counter = counter + 1;
}




function winner() {



    // check horizontal
    if (box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[0].innerHTML) {
        console.log('player ' + box[0].innerHTML + ' Wins the game');
        gamecheck = true;


    }
    else if (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[3].innerHTML) {
        console.log('player ' + box[3].innerHTML + ' Wins the game');
        gamecheck = true;
    }
    else if (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[6].innerHTML != "") {
        console.log('player ' + box[6].innerHTML + ' Wins the game');
        gamecheck = true;
    }

    //check vertical
    else if (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[0].innerHTML != "") {
        console.log('player ' + box[0].innerHTML + ' Wins the game');
        gamecheck = true;
    }
    else if (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[1].innerHTML != "") {
        console.log('player ' + box[1].innerHTML + ' Wins the game');
        gamecheck = true;
    }
    else if (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[2].innerHTML != "") {
        console.log('player ' + box[3].innerHTML + ' Wins the game');
        gamecheck = true;
    }

    //check diagonal
    else if (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[0].innerHTML != "") {
        console.log('player ' + box[0].innerHTML + ' Wins the game');
        gamecheck = true;
    }
    else if (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[2].innerHTML != "") {
        console.log('player ' + box[2].innerHTML + ' Wins the game');
        gamecheck = true;
    }
    //if no one wins 
    else {
        if (counter == 8)
            console.log('tie');
    }
    //............................................


    if (gamecheck) {
        clearEvents();
    }
}


for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', clickEvent);

}

/* for (let i = 0; i <= 8; i++) {

    box[i] = document.querySelectorAll('box'); dele
} */





function playagame() {

    for (let i = 0; i <= 8; i++) {

        box[i].innerHTML = '';
        box[i].addEventListener('click', clickEvent);
    }
    counter = 0;
    gamecheck = false;
    console.log(gamecheck);
}



function clearEvents() {

    for (let i = 0; i < box.length; i++) {
        box[i].removeEventListener('click', clickEvent);
    }
}


const button = document.querySelector('.reset');
button.addEventListener('click', playagame);
/*
    const whosturn = document.getElementById('#whos-turn');
    whosturn.innerHTML = "X Turn Now"; */

    //const turnDisplay = document.createElement('p');



/* let stat=winner();

if (stat==X){
    turnDisplay.innerHTML = "X Turn Now";
}else{
    turnDisplay.innerHTML = "o Turn Now";

} */
