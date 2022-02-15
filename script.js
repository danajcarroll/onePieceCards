"use strict";

// Card Elements
let charCircle = document.getElementsByClassName('characterCircles');
let charCard = document.getElementsByClassName('characterCards');
let mainColor = document.getElementsByClassName('mainColor');
let mainFontColor = document.getElementsByClassName('mainColorFont');
let subColor = document.getElementsByClassName('subColor');
let preButton = document.getElementById('preButton');
let postButton = document.getElementById('postButton');
let charPicture = document.getElementsByClassName('characterPic');
let activeClass = document.getElementsByClassName('active');

// Character Info
let bigName = document.getElementById('name');
let fullName = document.getElementById('fullName');
let occupation = document.getElementById('occupation');
let originPlace = document.getElementById('origin');
let ability = document.getElementById('ability');
let bounty = document.getElementById('bounty');

// Image Sources
let preSkipImage = document.getElementById('preSkipImage');
let postSkipImage = document.getElementById('postSkipImage');


// ******************** SETTING THINGS ********************
// Changing character circle colours!
for (let i = 0; i < charCircle.length; i++) {
    let circleID = charCircle[i].id;
    charCircle[i].style.backgroundColor = `var(--${circleID}Main)`;
};
// Setting up active image button
preButton.classList.add('active');
for (let i = 0; i < activeClass.length; i++) {
    activeClass[i].style.backgroundColor = `var(--luffySub)`;
}
let circleID = 'luffy';
console.log(circleID);


// Character Button Click
for (let i = 0; i < charCircle.length; i++) {
    charCircle[i].addEventListener('click', function() {
        circleID = charCircle[i].id;
        console.log(circleID);
        
        // Changing text for each character
        bigName.innerHTML = document.getElementById(`${circleID}Name`).innerHTML;
        fullName.innerHTML = document.getElementById(`${circleID}FullName`).innerHTML;
        occupation.innerHTML = document.getElementById(`${circleID}Occupation`).innerHTML;
        originPlace.innerHTML = document.getElementById(`${circleID}Origin`).innerHTML;
        ability.innerHTML = document.getElementById(`${circleID}Ability`).innerHTML;
        bounty.innerHTML = document.getElementById(`${circleID}Bounty`).innerHTML;

        // Changing color theme
        for (let i = 0; i < mainColor.length; i++) {
            mainColor[i].style.backgroundColor = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < mainFontColor.length; i++) {
            mainFontColor[i].style.color = `var(--${circleID}Main)`;
        }
        for (let i = 0; i < subColor.length; i++) {
            subColor[i].style.backgroundColor = `var(--${circleID}Sub)`;
        }
        // Image Source Change
        preSkipImage.src = `../images/${circleID}-pre.png`;
        postSkipImage.src = `../images/${circleID}-post.png`;
        preSkipImage.classList.remove('hiddenImage');
        postSkipImage.classList.add('hiddenImage');

        
        // Image Button Color Change
        preButton.classList.add('active');
        preButton.style.backgroundColor =  `var(--${circleID}Sub)`;
        postButton.classList.remove('active');
        postButton.style.backgroundColor =  `transparent`;  
        // This changes the background colour of the ELEMENT ITSELF. IT DOES NOT CHANGE THE CLASS' DESCRIPTION
        for (let i = 0; i < activeClass.length; i++) {
            activeClass[i].style.backgroundColor = `var(--${circleID}Sub)`;
        }
    })
}
preButton.addEventListener('click', function() {
    if (!preButton.classList.contains('active')){
        preButton.classList.add('active');
        preButton.style.backgroundColor =  `var(--${circleID}Sub)`;
        preSkipImage.classList.remove('hiddenImage');

        postButton.classList.remove('active');      
        postButton.style.backgroundColor =  `transparent`;
        postSkipImage.classList.add('hiddenImage');
    }
})
postButton.addEventListener('click', function() {
    if (!postButton.classList.contains('active')){
        postButton.classList.add('active');
        postButton.style.backgroundColor =  `var(--${circleID}Sub)`;
        postSkipImage.classList.remove('hiddenImage');

        preButton.classList.remove('active');
        preButton.style.backgroundColor =  `transparent`;
        preSkipImage.classList.add('hiddenImage');
    }
})

