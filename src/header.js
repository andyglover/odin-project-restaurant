export default function header() {
    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is header.js!";
        element.appendChild(heading);

        //create the home tab
        const tabHome = document.createElement('p');
        tabHome.innerText = "home";
        tabHome.addEventListener("click", console.log("showContent"))
        element.appendChild(tabHome);

        return element;
    }

    document.getElementById("content").appendChild(component())
}
