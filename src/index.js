import pageload from './pageload.js';
console.log("Hello, Webpack!");
pageload();

//make the tabs
const content = document.getElementById("content");

const tabHome = (() => {
    const tabHome = document.createElement('p');
    tabHome.innerText = "home";
    
    const showContent = function () {
        console.log("h")
    }
    tabHome.addEventListener("click", showContent)
    content.appendChild(tabHome);
})();

const tabMenu = (() => {
    const tabMenu = document.createElement('p');
    tabMenu.innerText = "menu";
    
    const showContent = () => {
        console.log("m")
    }
    tabMenu.addEventListener("click", showContent)
    content.appendChild(tabMenu);
})();

const tabContact = (() => {
    const tabContact = document.createElement('p');
    tabContact.innerText = "contact";
    
    const showContent = () => {
        console.log("c")
    }
    tabContact.addEventListener("click", showContent)
    content.appendChild(tabContact);
})();

console.log("test");