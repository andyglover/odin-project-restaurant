export default function header() {
    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is header.js!";
        element.appendChild(heading);

        //create the home tab
        const tabHome = document.createElement('p');
        tabHome.innerText = "home";
        tabHome.addEventListener("click", (e) => {
            render("wow") 
        });
        element.appendChild(tabHome);

        //create the menu tab

        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", (e) => {
            render("wow") 
        });
        element.appendChild(tabMenu);

        //create the contact tab
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", (e) => {
            render("wow") 
        });
        element.appendChild(tabContact);

        //create the test tab
        const tabTest = document.createElement('p');
        tabTest.innerText = "test";
        tabTest.addEventListener("click", (e) => {
            render("wow") 
        });
        element.appendChild(tabTest);

        return element;
    }

    function render(section) {
        // document.getElementById("main").appendChild(section)
        console.log(section);
    }

    document.getElementById("content").appendChild(component())
}
