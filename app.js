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
// let roll = type: '1 hit', type: '1 hit', type: '1 hit' , type: '2 hit' ,type: '3 hit',
let monsters = [
    { name: 'Larx', hitpoints: 0 },
    { name: 'Barx', hitpoints: 0 },
    { name: 'Yarx', hitpoints: 0 },
];

// static types and probabilites

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
