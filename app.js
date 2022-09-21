/* Imports */

/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const mushroomContainer = document.getElementById('roll-container');
const huntMushroomsButton = document.getElementById('hunt-monsters-button');
const addMonsterForm = document.getElementById('add-monster-form');
const sayGoodbyeButton = document.getElementById('say-goodbye-button');
const monstersSection = document.getElementById('monsters-section');
/* State */
let message = `The mage portal has landed you in the middle of Goblin Territory! Fight your way out!`;
let roll = [{type: '0hit', type: '1hit', type: '1hit' , type: '2hit' , type: '3hit'}]
let monsters = [
    { name: 'Larx', hitpoints: 3, type: goblin },
    { name: 'Barx', hitpoints: 3, type: goblin },
    { name: 'Yarx', hitpoints: 3, type: goblin },
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
const hitMessage = ['You swing and Miss!', 'Your blade found 1 hit', 'Your blade hit 2 times', 'You slash for 3 quick hits!'];

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

add addMonsterForm


/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
