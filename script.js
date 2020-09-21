let boxs = document.getElementsByClassName('box');
let boxsArray = Array.from(boxs);

let boxClicked = function(e) {
  for(let i = 0 ; i < boxsArray.length; i++ ) {
    let el = boxsArray[i];
    el.classList.remove('active');
  }
   e.target.classList.add('active');
 
}

for (let i = 0 ; i < boxsArray.length; i++) {
  let el = boxsArray[i];
  el.onclick = boxClicked;
}