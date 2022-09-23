export function renderRoll(roll) {
    const img = document.createElement('img');
    img.src = 'assets/' + roll.type + '.png';
    img.alt = roll.type;
    return img;
}

// Emojis correspond to satisfaction via index
const emojis = [
    './assets/goblin-emoji1.png',
    './assets/goblin-emoji2.png',
    './assets/goblin-emoji3.png',
    './assets/goblin-emoji4.png',
];

export function renderMonster(monster) {
    const button = document.createElement('button');
    button.classList.add('monster');

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.textContent = monster.name;

    const emojiEl = document.createElement('span');
    emojiEl.classList.add('emoji');
    emojiEl.textContent = emojis[monster.hitPoints];

    button.append(nameEl, emojiEl);

    return button;
}
