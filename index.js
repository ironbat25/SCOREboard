let home = document.getElementById("home");
let guest = document.getElementById("guest");
let homescore =0;
let guestscore = 0;
function save1() {
     homescore = homescore + 1;
    
     home.textContent = homescore;
     
}
function save2() {
    homescore = homescore + 2;
      home.textContent = homescore;
}

function save3() {
    homescore = homescore + 3;
      home.textContent = homescore;
}

function guest1() {
     guestscore = guestscore + 1;
    
     guest.textContent = guestscore;
     
}
function guest2() {
     guestscore = guestscore + 2;
    
     guest.textContent = guestscore;
}

function guest3() {
     guestscore = guestscore + 3;
    
     guest.textContent = guestscore;
}
