let gamesqe =[];
let usersqe =[];
let btns =["red","yellow","purple","green"];
let started= false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userbtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}
let h2= document.querySelector("h2");
function levelup(){
    usersqe =[];
    level++;
   h2.innerText = `Level ${level}`;
   let randidx = Math.floor(Math.random()*3);
   let randColor = btns[randidx];
   let randbtn = document.querySelector(`.${randColor}`);
   gamesqe.push(randColor);
   btnFlash(randbtn);
};
function checkAns(idx){
    if(gamesqe[idx]===usersqe[idx]){
       if(gamesqe.length==usersqe.length){
        setTimeout(levelup,800);
       }
    }else{
        h2.innerText = `Game over your score is ${level}`;
        reset();

    }
}

function btnpress(){
    let btn = this;
    userbtnFlash(btn);
    usercolor = btn.getAttribute("id");
    usersqe.push(usercolor);
  checkAns(usersqe.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
};
function reset(){
    started =false;
    gamesqe=[];
    usersqe =[];
    level =0;
}

