console.log('Hello from JS!');


let turn = true; //true means X turn
const squares = [];//
let counter = 0;//how many pressd
let gamecheck = false;



const button = document.querySelector('.reset');//button in class reset
let box = document.querySelectorAll('.box');//select all boxs
button.addEventListener('click', playagame);





function playagame() {

    for (let i = 0; i < box.length; i++) {

        box[i].style.background = 'rgb(49, 33, 47)';
        box[i].innerHTML = '';
        box[i].addEventListener('click', clickEvent);
    }
    who.innerHTML = 'Play';
    counter = 0;
    gamecheck = false;
    //console.log(gamecheck);
}

function clickEvent() {

    if (turn && this.innerHTML == "") {

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

function winner() {

    // check horizontal................................

    if (box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[0].innerHTML) {
        box[0].innerHTML
        gamecheck = true;
        selectwinner(box[0], box[1], box[2]);

    }
    else if (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[3].innerHTML) {
        box[3].innerHTML
        gamecheck = true;
        selectwinner(box[3], box[4], box[5]);

    }
    else if (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[6].innerHTML != "") {
        box[6].innerHTML
        gamecheck = true;
        selectwinner(box[6], box[7], box[8]);

    }

    //check vertical....................................

    else if (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[0].innerHTML != "") {
        box[0].innerHTML
        gamecheck = true;
        selectwinner(box[0], box[3], box[6]);

    }
    else if (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[1].innerHTML != "") {
        box[1].innerHTML
        gamecheck = true;
        selectwinner(box[1], box[4], box[7]);

    }
    else if (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[2].innerHTML != "") {
        box[3].innerHTML
        gamecheck = true;
        selectwinner(box[2], box[5], box[8]);

    }

    //check diagonal.........................................

    else if (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[0].innerHTML != "") {
        box[0].innerHTML
        gamecheck = true;
        selectwinner(box[0], box[4], box[8]);

    }
    else if (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[2].innerHTML != "") {
        box[2].innerHTML
        gamecheck = true;
        selectwinner(box[2], box[4], box[6]);

    }
    //if no one wins 
    else {
        if (counter == 8)
            selecttie();
    }

    function selectwinner(b1, b2, b3) {
        b1.style.background = 'grey';
        b2.style.background = 'grey';
        b3.style.background = 'grey';
        who.innerHTML = 'you Win the game';

    }

    function selecttie() {

        if (counter == 8) {

            who.innerHTML = 'tie';
        }
    }
    if (gamecheck) {
        clearEvents();
    }
}
//clear events
function clearEvents() {

    for (let i = 0; i < box.length; i++) {
        box[i].removeEventListener('click', clickEvent);

    }
}