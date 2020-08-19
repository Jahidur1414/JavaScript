console.log('Ok !');
// Restart Game button
var restart = document.querySelector("#b");

//Grabs All The Squers
var squares = document.querySelectorAll('td');

//Clear all the squares
function clearboard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}


restart.addEventListener('click', clearboard);

/* Check every cell manually
var cellone = document.querySelector('#one');

cellone.addEventListener('click', function(){
  if(cellone.textContent==='')
  {
  cellone.textContent='X';
}
})*/

// Advvance Way
function changeMarker(){
  if(this.textContent==='')
  {
    this.textContent='X';
  }
  else if(this.textContent==='X')
  {
    this.textContent='O';
  }
  else{
    this.textContent='';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}
