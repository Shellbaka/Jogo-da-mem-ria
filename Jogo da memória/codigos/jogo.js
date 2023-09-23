const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const leaderBoard = 0;

const character = [
    'bart',
    'bebê',
    'bob',
    'burns',
    'duffman',
    'homer',
    'krusty',
    'lisa',
    'marge',
    'millhouse',
    
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard ='';
let secondCard ='';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20) {
        clearInterval (this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos.`);

    }

}
    
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {
    
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard ='';
        secondCard ='';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-Card');
            secondCard.classList.remove('reveal-Card');

             firstCard ='';
             secondCard ='';

             
            
        },500)
           
            
        

    }
    
}




const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-Card')) {
        return;
    }
    if (firstCard === '') {
        target.parentNode.classList.add('reveal-Card');
        firstCard = target.parentNode;
    }

    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-Card');
        secondCard = target.parentNode;

        checkCards();
    }

   
}

const createCard = (character) => {

    const card = createElement ('div', 'card');
    const front = createElement ('div', 'front face');
    const back = createElement ('div', 'back face');

    front.style.backgroundImage =  `url('../imagens/${character}.jpg')`;
    
    card.addEventListener ('click', revealCard);
    card.setAttribute('data-character',character)

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    
    const duplicateCharacters= [...character, ...character];

    const shuffledArray = duplicateCharacters.sort (() => Math.random() - 0.5);

    shuffledArray.forEach ((character) => {
    
    const card = createCard(character);
    grid.appendChild(card);


    });
} 

const startTimer = () => {

this.loop = setInterval(() => {

    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime +1;


},1000);


}

window.onload = () => {
    
    const playerName = localStorage.getItem('player');
   
    spanPlayer.innerHTML = playerName
    
    
    startTimer();
    loadGame();

}


