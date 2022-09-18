export default function test() {

    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is test.js!";
        element.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.innerText = "This is a paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!" 
        element.appendChild(paragraph);

        return element;
    }

    return component();
}

