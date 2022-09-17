import Restaurant from './restaurant.jpg';

export default function pageload() {    
    console.log('This stuff happens when the page is loaded!');

    function component() {
    const element = document.createElement('div');
    //add the restaurant image
    const myRestaurant = new Image();
    myRestaurant.src = Restaurant;

    element.appendChild(myRestaurant);

    return element;
    }
    document.body.appendChild(component());
}