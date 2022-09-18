import home from './home.js';
import header from './header.js';
import main from './main.js';

console.log("Hello, Webpack!");
header();
main();

const content = document.getElementById("content");

const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}