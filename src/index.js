import pageload from './pageload.js';
console.log("Hello, Webpack!");
pageload();

//make the tabs
const content = document.getElementById("content");

const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
const renderTabs = () => {
    tabHome.render();
    tabMenu.render();
    tabContact.render();
}

const tabHome = (() => {
    
    const showContent = () => {
        clearContent();
        renderTabs();
        console.log("Showing home tab")
    }

    const render = () => {
    const tabHome = document.createElement('p');
    tabHome.innerText = "home";
    tabHome.addEventListener("click", showContent)
    content.appendChild(tabHome);
    };
    render();
    return { render };
})();

const tabMenu = (() => {

    const showContent = () => {
        clearContent();
        renderTabs();
        console.log("Showing menu tab")
    }
    
    const render = () => {
        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", showContent)
        content.appendChild(tabMenu);
    };
    render();
    return { render };
})();

const tabContact = (() => {
    const showContent = () => {
        clearContent();
        renderTabs();
        console.log("Showing contact tab")
    }
    const render = () => {
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", showContent)
        content.appendChild(tabContact);
    };
    render();
    return { render };
})();

console.log("test2");