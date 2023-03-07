'use strict';

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
];

//Page element
const cardBoard = document.getElementById('card-board');

/*
*  Functions
*/
//Create card
function createCard(cardTitle, cardText, cardImg) {
    const divCardSingle = document.createElement('div');
    addClass(divCardSingle, 'card-single', 'col-12', 'col-sm-4', 'mb-4', 'text-center');
    
    const divCard = document.createElement('div');
    addClass(divCard, 'card', 'border-0', 'rounded-0');
    divCardSingle.appendChild(divCard);
    
    const img = document.createElement('img');
    img.src = cardImg;
    addClass(img, 'card-img-top', 'rounded-0');
    divCard.appendChild(img);
    
    const divCardBody = document.createElement('div');
    addClass(divCardBody, 'card-boy', 'rounded-0');
    divCard.appendChild(divCardBody);
    
    const h5Tag = document.createElement('h5');
    addClass(h5Tag, 'card-title', 'mt-3')
    h5Tag.innerText = cardTitle;
    divCardBody.appendChild(h5Tag);
    
    const pTag = document.createElement('p');
    addClass(pTag, 'card-text', 'mb-3');
    pTag.innerText = cardText;
    divCardBody.appendChild(pTag);
    
    cardBoard.appendChild(divCardSingle);
    }

//Add multiple class to html element
function addClass (htmlElement, ...args) {
    for (let arg of args) htmlElement.classList.add(...args)
}


/*
*  Main
*/
//Cicle array and extract object value
for (let i = 0; i < members.length; i++) {
    const member = members[i];
    createCard(member.name, member.role, `img/${member.photo}`)
}


