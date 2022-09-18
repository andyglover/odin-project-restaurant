import Restaurant from './restaurant.jpg';

export default function home() {    
    console.log('This stuff happens when the page is loaded!');

    function component() {
        const element = document.createElement('div');
        //Add the H1
        const heading = document.createElement('h1');
        heading.innerText = "This is a restaurant!";
        element.appendChild(heading);
        //Add the paragraph
        const paragraph = document.createElement('p');
        paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!"
        element.appendChild(paragraph);
        //add the restaurant image
        const myRestaurant = new Image();
        myRestaurant.src = Restaurant;
        element.appendChild(myRestaurant);

        return element;
    }

    document.getElementById("content").appendChild(component());
}