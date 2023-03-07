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
const body = document.querySelector('body');
//const div = createDomElement('div');


/*
*  Functions
*/
function createDomElement(elementTag, text) {
    //const fragment = document.createDocumentFragment();
    const element = document.createElement(elementTag);
    element.innerText = text;
    //fragment.append(element);
    return element;
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

//Ciclo all'interno dell'array per estrapolare i singoli oggetti
for (let i = 0; i < members.length; i++) {
    const member = members[i];
    let memberValue = [];
    const div = createDomElement('div', '');
    //Stampa ogni singolo oggetto presente nell'array
    //console.log(member);
    //Ciclo all'interno di un oggetto per estrapolare i valori delle singole chiavi
    for (const key in member) {
        /*
        //Stampa prima il nome della chiave e poi il valore
        console.log(key);
        console.log(member[key]);
        */
        //Stampa il valore di ogni chiave dell'oggetto 
        console.log(member[key]);
        //Inserisce in un array i singoli valori
        //memberValue.push(member[key]);
        if (key === 'photo') {
            const img = createDomElement('img', '');
            img.src = `img/${member[key]}`;
            div.append(img);
        } else {
            const pTag = createDomElement('p', member[key]);
            div.append(pTag);
        }
    }
    //Per ogni ciclo crea un div con tutti i valori dell'array memberValue (ossia i singoli valori di ogni oggetto)
    body.append(div);

}


