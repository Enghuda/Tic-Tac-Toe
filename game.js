console.log('Hello from JS!');


let turn = true; //true means X turn
const squares = [];//
let counter = 0;// Declare count to count how many pressd
let gamecheck = false;



const button = document.querySelector('.reset');// add addevent to it 
let box = document.querySelectorAll('.box');//select all boxs
button.addEventListener('click', playagen);//when it's clicked call function playagen




//restart the game and  remove input add event , clear boxs show messg to play agin
function playagen() {

    for (let i = 0; i < box.length; i++) {

        box[i].style.background = 'rgb(49, 33, 47)';
        box[i].innerHTML = '';
        box[i].addEventListener('click', startgame);
    }
    who.innerHTML = 'play';
    counter = 0;
    gamecheck = false;

}
//start play
function startgame() {
    //chek if the boxs is emty add
    if (turn && this.innerHTML == "") {

        //switch bewteen players if X switch to O
        this.innerHTML = "X";//chang value to be x
        turn = false;
        who.innerHTML = "O Turn";

    } else if (!turn && this.innerHTML == "") {
        this.innerHTML = "O";
        turn = true;
        who.innerHTML = "X Turn";

    }

    winner();
    counter = counter + 1;
}
// loop add event to each and then call function
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', startgame);

}
// Use if statement to check the winner 
function winner() {

    // check horizontal................................

    if (box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[0].innerHTML) {
        box[0].innerHTML
        gamecheck = true;//remove event listner if winner
        messgwinner(box[0], box[1], box[2]);//select boxs and chenge the color
        document.getElementById("forwin").play();//sound  when is win



    }
    else if (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[3].innerHTML) {
        box[3].innerHTML
        gamecheck = true;
        messgwinner(box[3], box[4], box[5]);
        document.getElementById("forwin").play();

    }
    else if (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[6].innerHTML != "") {
        box[6].innerHTML
        gamecheck = true;
        messgwinner(box[6], box[7], box[8]);
        document.getElementById("forwin").play();

    }

    //check vertical....................................

    else if (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[0].innerHTML != "") {
        box[0].innerHTML
        gamecheck = true;
        messgwinner(box[0], box[3], box[6]);
        document.getElementById("forwin").play();


    }
    else if (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[1].innerHTML != "") {
        box[1].innerHTML
        gamecheck = true;
        messgwinner(box[1], box[4], box[7]);
        document.getElementById("forwin").play();


    }
    else if (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[2].innerHTML != "") {
        box[3].innerHTML
        gamecheck = true;
        messgwinner(box[2], box[5], box[8]);
        document.getElementById("forwin").play();


    }

    //check diagonal.........................................

    else if (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[0].innerHTML != "") {
        box[0].innerHTML
        gamecheck = true;
        messgwinner(box[0], box[4], box[8]);
        document.getElementById("forwin").play();


    }
    else if (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[2].innerHTML != "") {
        box[2].innerHTML
        gamecheck = true;
        messgwinner(box[2], box[4], box[6]);
        document.getElementById("forwin").play();


    }
    //if no one wins 
    else {
        if (counter == 8)
            messgtie();
    }
    //for chenging  winner style
    function messgwinner(b1, b2, b3) {
        b1.style.background = 'grey';
        b2.style.background = 'grey';
        b3.style.background = 'grey';
        who.innerHTML = 'you Win the game';

    }

    function messgtie() {
        //count = 8 it means no winner
        if (counter == 8) {

            who.innerHTML = "It's a tie";
            //sound  when is tie
            document.getElementById("fortie").play();

        }
    }
    if (gamecheck) {
        endgame();
    }
}
//end
function endgame() {

    for (let i = 0; i < box.length; i++) {
        box[i].removeEventListener('click', startgame);

    }
}
