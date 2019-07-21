var myImage = document.querySelector('img');

myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if (mySrc === 'images/НиколаТесла.jpg') {
myImage.setAttribute ('src','images/НиколаТесла2.jpg');
}
else {
myImage.setAttribute('src','images/НиколаТесла.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function UserName() {
var myName = prompt('Please enter your name.');
localStorage.setItem('name',myName);
myHeading.innerHTML = 'Tesla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
UserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Tesla is cool, ' + storedName;
}

myButton.onclick = function() {
UserName();
}