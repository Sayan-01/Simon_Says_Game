let gameSeq = [];
let userSeq = [];
let btnarr = ['div1', 'div2', 'div3', 'div4'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
 
document.addEventListener("keypress", ()=> {
    if(started==false) {
        
        started = true;

        levelUp();
    }
});

function Flash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function levelUp() {
    level++;
    userSeq = [];
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btnarr[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
        //Ei porjonto akta random btn choose kora holo
            //3 te line ar maddhome
        //random no. ar maddhome random array te thaka
            // element selection, r sei element k 
            // quaryselector a bosia element ar 
            //variable toiri
    Flash(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function Press() {
    let btn = this;
    Flash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    // console.log(userColor);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click",Press);
}   //ai code ar ortho sob .div a eventlistener
        //add kora holo

function checkAns(idx) {
    //akhone joto level toto holo user r 
        //game sequance array ar length,
        //abong amader cheack korte hobe 
        //last value same ho66e kina
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
        console.log('same seq');
    } else {
        h2.innerText = 'Game over! press key to start';
        reset();
    }
}

let reset = ()=> {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}