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

const altText = 'Foto profilo'

//Page element
const cardBoard = document.getElementById('card-board');
const newName = document.getElementById('name');
const newRole = document.getElementById('role');
const newPhoto = document.getElementById('url-photo');
const newPhotoFile = document.getElementById('formFile');
const cardNumber = document.getElementById('card-number');
const addButton = document.getElementsByClassName('btn-primary')[1];
const removeButton = document.getElementsByClassName('btn-primary')[2];

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
    img.alt = `${altText} di ${cardTitle}`;
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

//Add new card from user input
function addCard(){
    const member = members[members.length - 1];
    if(newPhoto.value.startsWith('http')){
        createCard(member.name, member.role, newPhoto.value); 
    } else if (newPhoto.value === '' && newPhotoFile.value !== ''){
        createCard(member.name, member.role, `img/${newPhotoFile.files[0].name}`);
    } else {
        createCard(member.name, member.role, `img/${member.photo}`);
    }
}

//Remove card by selecting his number on page
function removeCard(){
const cardSelected = document.querySelector(`.card-single:nth-child(${cardNumber.value})`);
cardBoard.removeChild(cardSelected);
}

//Clear all field
function clearField(){
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.value = '';
  })
}

/*
*  Main
*/
//Cicle array and extract object value
for (let i = 0; i < members.length; i++) {
    const member = members[i];
    createCard(member.name, member.role, `img/${member.photo}`)
}

//Save data to a new card
addButton.addEventListener('click', function(){
    const newCardObj = {name: newName.value, role: newRole.value, photo: newPhoto.value}
    members.push(newCardObj);
    addCard();
    clearField();
})

//Remove selected card
removeButton.addEventListener('click', function(){
    removeCard();
    clearField();
});