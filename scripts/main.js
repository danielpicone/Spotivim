// This is the main JavaScript file for Spotivim
const TabGroup = require('electron-tabs');

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "images/firefox-blue.jpg") {
    myImage.setAttribute ('src','images/firefox.png');
  } else {
    myImage.setAttribute ('src','images/firefox-blue.jpg');
  }
}

document.getElementById("test1").addEventListener("click", function( event ) {
event.target.textContent = "click count: " + event.detail;
}, false);

let tabGroup = new TabGroup();

tabGroup.addTab({
    title: 'Google',
    src: 'http://google.com',
});

tabGroup.addTab({
    title: "Electron",
    src: "http://electron.atom.io",
    visible: true,
    active: true
});
