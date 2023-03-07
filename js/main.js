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
//const div = createDomElement('div');


/*
*  Functions
*/
// function createDomElement(elementTag, text) {
//     //const fragment = document.createDocumentFragment();
//     const element = document.createElement(elementTag);
//     element.innerText = text;
//     //fragment.append(element);
//     return element;
// }

function createCard(cardTitle, cardText, cardImg) {
    const divCardSingle = document.createElement('div');
    addClass(divCardSingle, 'card-single', 'col-4', 'mb-4', 'text-center');
    
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

function addClass (htmlElement, ...args) {
    for (let arg of args) htmlElement.classList.add(...args)
}





/*
//Stampa intero array
console.log(members);
//Stampa oggetto contenuto in posizione 0 dell'array
console.log(members[0]);
//Stampa valori di ogni chiave richiamata per l'oggetto in posizione 0 dell'array
console.log(members[0].name);
console.log(members[0].role);
console.log(members[0].photo);
*/


/////////Per esercizio senza bonus
// //Ciclo all'interno dell'array per estrapolare i singoli oggetti
// for (let i = 0; i < members.length; i++) {
//     const member = members[i];
//     //let memberValue = [];
//     //Per ogni ciclo crea un div dove appendere i vari elementi
//     const div = createDomElement('div', '');
//     //Stampa ogni singolo oggetto presente nell'array
//     //console.log(member);
//     //Ciclo all'interno di un oggetto per estrapolare i valori delle singole chiavi
//     for (const key in member) {
//         /*
//         //Stampa prima il nome della chiave e poi il valore
//         console.log(key);
//         console.log(member[key]);
//         */
//         //Stampa il valore di ogni chiave dell'oggetto 
//         console.log(member[key]);
//         //Inserisce in un array i singoli valori
//         //memberValue.push(member[key]);

//         //Controlla se il valore è un url o no e inserisce tutto in tag p da inserire nel div contenitore
//         if (key === 'photo') {
//             const img = createDomElement('img', '');
//             img.src = `img/${member[key]}`;
//             div.append(img);
//         } else {
//             const pTag = createDomElement('p', member[key]);
//             div.append(pTag);
//         }
//     }

//     main.append(div);

// }
////////////FINE


//Ciclo array per singola card
for (let i = 0; i < members.length; i++) {
    const member = members[i];
    createCard(member.name, member.role, `img/${member.photo}`)
}


