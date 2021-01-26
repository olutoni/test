let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/bmw-4-series.jpg') {
        myImage.setAttribute('src', 'images/bmw-5-seriess.jpg');
    } else {
        myImage.setAttribute('src', 'images/bmw-4-series.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to fan page, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to fan page, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}