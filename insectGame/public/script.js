//select elements
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');

const start_btn = document.getElementById('start-btn');

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');


const replay_btn = document.getElementById('replay-btn');
const stopGame_btn = document.getElementById('stop-btn');

const game_container = document.getElementById('game-container');
//les variables pour la seconde,score et un objet pour contenir les insects crees
let seconds = 0;
let score = 0;
let selected_insect = {};
let interval;

//au clique du buuton startBtn on ajoutera une classse up a screen 
start_btn.addEventListener('click', () => screens[0].classList.add('up'));
//on parcour tous les buttons
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();


    })
}) 
//funntion start game
function startGame() {
  interval=  setInterval(increaseTime, 1000);
}

//function increaseTime
function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML= `Time: ${m}:${s}`;
    seconds++;
    if(seconds > 20){
    replay();

    }

   
}
//function create insect
function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}"
    style=" transform: rotate(${Math.random() * 360 }deg )"/>`
    insect.addEventListener('click', catchInsect);
    game_container.appendChild(insect);
}

//function randome location 
function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y }
}

//function catch insect
function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addInsects();
}
//function addInsects
function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

// function increseScore
function increaseScore() {
    score++;
    if (score >=5) {
        message.classList.add('visible');
    }
    

    scoreEl.innerHTML = `Score: ${score}`;

}

replay_btn.addEventListener('click', () => {

    message.classList.remove('visible');
    replay();
})
// function replay
function replay() {
    score = 0;
    seconds = 0;
 
}

stopGame_btn.addEventListener('click',() => screens[0,1].classList.remove('up'))







