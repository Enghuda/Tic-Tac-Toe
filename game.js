
console.log('it is work');

let turn = true; //true means X turn
const squares = [];

//reset.......................

function reset(A,B,C){
 document.getElementById('b'+A).style.color="white";
 document.getElementById('b'+B).style.color="white";
 document.getElementById('b'+C).style.color="white";

 setTimeout(function(){location.reload()},2000);
}

//win.........................................

function winner(){
 for (let i=1; i<=9; i++) {
  squares[i] = document.getElementById('b'+i).innerHTML;
 }


 // check horizontal
 if (squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=""){
  alert('player ' + squares[1] +' Wins the game');
  reset(1,2,3);
 }
 if (squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=""){
  alert('player ' + squares[4] +' Wins the game');
  reset(4,5,6);
 }
 if (squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=""){
  alert('player ' + squares[7] +' Wins the game');
  reset(7,8,9);
 }

 //check vertical
 if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=""){
  alert('player ' + squares[1] +' Wins the game');
  reset(1,4,7);
 }
 if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=""){
  alert('player ' + squares[2] +' Wins the game');
  reset(2,5,8);
 }
 if (squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=""){
  alert('player ' + squares[3] +' Wins the game');
  reset(3,6,9);
 }

 //check diagonal
 if (squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=""){
  alert('player ' + squares[1] +' Wins the game');
  reset(1,5,9);
 }
 if (squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=""){
  alert('player ' + squares[3] +' Wins the game');
  reset(3,5,7);
 }

}
//insert..........................

function insert(id){

 const input = document.getElementById(id);
 if(turn && input.innerHTML==""){
  input.innerHTML="X";
  turn = false;
 }else if(!turn && input.innerHTML==""){
  input.innerHTML="O";
  turn = true;
 }
 winner();
}
