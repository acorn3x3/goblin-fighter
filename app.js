/* Imports */
import { renderMonster, renderRoll } from './render-utils.js';
import { getRandomItem } from './utils.js';
/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const rollContainer = document.getElementById('roll-container');
const fightMonsterButton = document.getElementById('fight-monster-button');
const addMonsterForm = document.getElementById('add-monsters-form');
const sayGoodbyeButton = document.getElementById('say-goodbye-button');
const monstersSection = document.getElementById('monsters-section');
const heroSection = document.getElementById('hero-section');
// const playerHpEl = document.getElementById('player-HP');
const rollSound = new Audio('./assets/diceroll.wav');
const hitSound = new Audio('./assets/swing.mp3');
/* State */
let message = `The mage portal has landed you in the middle of Goblin Territory! Fight your way out!`;
let rolls = [];
let gameOver = false;

let player = [
    {
        equipment: 'sword',
        alive: true,
        hp: 10,
        killCount: 0,
        level: 1,
    },
];

let monsters = [
    { name: 'Larx', hitPoints: 3, type: 'goblin' },
    { name: 'Barx', hitPoints: 3, type: 'goblin' },
    { name: 'Yarx', hitPoints: 3, type: 'goblin' },
];

// static types and probabilites
// //const zeroHit = {
//     type: 'zerohit',
//     value: 0,
// };
const oneHit = {
    type: 'onehit',
    value: 1,
};
//const twoHit = {
// type: 'twohit',
// value: 2,
//};
//const threeHit = {
//type: 'threehit',
// value: 3,
//};

const totalHit = [0, 1, 1, 1, 1, 1, 2];
const hitTypeFound = [oneHit]; //oneHit, twoHit, threeHit];

/* Events */
const hitMessage = [
    'You swing and miss!',
    'Your blade found 1 hit',
    'Your blade hit 2 times',
    'You slash for 3 quick hits!',
];

fightMonsterButton.addEventListener('click', () => {
    const found = getRandomItem(totalHit);
    if (gameOver) {
        alert('GAME OVER');
        return;
    }

    for (let i = 0; i < found; i++) {
        //get a random attack value
        const rollType = getRandomItem(hitTypeFound);
        rollSound.play();

        const roll = {
            type: rollType.type,
            value: rollType.value,
        };

        rolls.push(roll);
    }

    message = hitMessage[found];

    displayMessage();
    displayRolls();
});

addMonsterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (gameOver) {
        alert('GAME OVER');
        return;
    }
    const formData = new FormData(addMonsterForm);

    const monster = {
        name: formData.get('name'),
        hitPoints: 5,
    };

    monsters.push(monster);
    message = `${monster.name} has joined the fray!`;
    addMonsterForm.reset();
    displayMessage();
    displayMonsters();
});
sayGoodbyeButton.addEventListener('click', () => {
    const stillAlive = [];

    for (const monster of monsters) {
        //      if (monster.hitPoints === 0) {
        //   isDead.push(monster);
        if (monster.hitPoints > 0) {
            stillAlive.push(monster);
        }
    }
    monsters = stillAlive;
    message = `The dead have been cleared from the battlefield`;
    //monster = isDead;
    displayMonsters();
    displayMessage();
});

/* Display Functions */

function displayHero() {
    //heroSection.innerHTML =
}

function displayMessage() {
    messageSection.textContent = message;
}

function displayRolls() {
    rollContainer.innerHTML = '';

    for (let roll of rolls) {
        const rollEl = renderRoll(roll);
        rollContainer.append(rollEl);
    }
}

function displayMonsters() {
    monstersSection.innerHTML = '';

    for (const monster of monsters) {
        const monsterEl = renderMonster(monster);

        monsterEl.addEventListener('click', () => {
            if (!rolls.length) {
                message = 'No Attacks available';
            } else if (monster.hitPoints === 0) {
                message = `${monster.name} is dead!`;
            } else {
                rolls.pop();
                monster.hitPoints--;
                message = [`${monster.name} has taken a hit!`];
                hitSound.play();
            }

            displayMessage();
            displayRolls();
            displayMonsters();
        });

        monstersSection.append(monsterEl);
    }
}

displayMessage();
displayRolls();
displayMonsters();
displayHero();
