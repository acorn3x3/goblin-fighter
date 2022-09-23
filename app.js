/* Imports */

/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const rollContainer = document.getElementById('roll-container');
const huntMonstersButton = document.getElementById('hunt-monsters-button');
const addMonsterForm = document.getElementById('add-monster-form');
const sayGoodbyeButton = document.getElementById('say-goodbye-button');
const monstersSection = document.getElementById('monsters-section');
/* State */
let message = `The mage portal has landed you in the middle of Goblin Territory! Fight your way out!`;
let roll = [{type: '0hit', type: '1hit', type: '1hit' , type: '2hit' , type: '3hit'}]
let monsters = [
    { name: 'Larx', hitPoints: 3, type: goblin },
    { name: 'Barx', hitPoints: 3, type: goblin },
    { name: 'Yarx', hitPoints: 3, type: goblin },
];

// static types and probabilites
const 0Hit = {
    type: '0hit',
    value: 0, 
};
const 1Hit = {
    type: '1hit',
    value: 1, 
};
const 2Hit = {
    type: '2hit',
    value: 2, 
};
const 3Hit = {
    type: '3hit',
    value: 3, 
};

const totalHit = [0, 1, 1, 2, 3];
const hitTypeFound = [0hit, 1hit, 1hit, 2hit, 3hit];



/* Events */
const hitMessage = ['You swing and miss!', 'Your blade found 1 hit', 'Your blade hit 2 times', 'You slash for 3 quick hits!'];

huntMonstersButton.addEventListener('click', () => {
    const found = getRandomItem(totalHit);

    for (let i = 0, i < found; i++) {
        //get a random attack value
        const rollType = getRandomItem(hitTypeFound);

        const roll = {
            type: rollType.type,
        };
        
        rolls.push(roll);
    }

    message = hitMessage[found];

    displayMessage();
    displayRolls();
});

addMonsterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(addMonsterForm);

    const monster = {
        name: formData.get('name'),
        hitPoints: 3,
    };

    monsters.push(monster);

    message = `${monster.name} has joined the fray!`;
    addMonsterForm.reset();

    displayMonsters()

sayGoodbyeButton.addEventListener('click', () => {
    const stillAlive = [];
    for (const monster of monsters) {
        if (monster.hitPoints > 0) {
            stillAlive.push(monster);
     }
     monsters = stillAlive;
     displayMonsters();
    });    



/* Display Functions */

function displayMessage() {
        messageSection.textContent = message;
}

function displayRolls() {
    rollContainer.inner

// (don't forget to call any display functions you want to run on page load!)
