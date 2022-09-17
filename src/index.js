import pageload from './pageload.js';
console.log("Hello, Webpack!");
pageload();

//make the tabs
const content = document.getElementById("content");

const tabHome = (() => {
    const tabHome = document.createElement('p');
    tabHome.innerText = "home";
    content.appendChild(tabHome);
})();

const tabMenu = (() => {
    const tabMenu = document.createElement('p');
    tabMenu.innerText = "menu";
    content.appendChild(tabMenu);
})();

const tabContact = (() => {
    const tabContact = document.createElement('p');
    tabContact.innerText = "contact";
    content.appendChild(tabContact);
})();