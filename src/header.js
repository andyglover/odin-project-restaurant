import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import test from './test.js'

export default function header() {
    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is header.js!";
        element.appendChild(heading);

        //create the home tab
        const tabHome = document.createElement('button');
        tabHome.innerText = "home";
        tabHome.addEventListener("click", (e) => {
            render(home())
        });
        element.appendChild(tabHome);

        //create the menu tab
        const tabMenu = document.createElement('button');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", (e) => {
            render(menu()) 
        });
        element.appendChild(tabMenu);

        //create the contact tab
        const tabContact = document.createElement('button');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", (e) => {
            render(contact()) 
        });
        element.appendChild(tabContact);

        //create the test tab
        const tabTest = document.createElement('button');
        tabTest.innerText = "test";
        tabTest.addEventListener("click", (e) => {
            render(test()) 
        });
        element.appendChild(tabTest);

        return element;
    }

    function render(section) {
        document.getElementById("main").textContent=""
        document.getElementById("main").appendChild(section)
    }

    document.getElementById("content").appendChild(component())
}
