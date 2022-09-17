"use strict";
(self["webpackChunkodin_project_restaurant"] = self["webpackChunkodin_project_restaurant"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageload)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function pageload() {    
    console.log('This stuff happens when the page is loaded!');

    function component() {
        const element = document.createElement('div');
        //add the restaurant image
        const myRestaurant = new Image();
        myRestaurant.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
        element.appendChild(myRestaurant);
        //Add the H1
        const heading = document.createElement('h1');
        heading.innerText = "This is a restaurant!";
        element.appendChild(heading);
        //Add the paragraph
        const paragraph = document.createElement('p');
        paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!"
        element.appendChild(paragraph);

        return element;
    }

    document.getElementById("content").appendChild(component());
}

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2accdaa417cc82114f9d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDOztBQUUzQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudCBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZWxvYWQoKSB7ICAgIFxuICAgIGNvbnNvbGUubG9nKCdUaGlzIHN0dWZmIGhhcHBlbnMgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQhJyk7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy9hZGQgdGhlIHJlc3RhdXJhbnQgaW1hZ2VcbiAgICAgICAgY29uc3QgbXlSZXN0YXVyYW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG15UmVzdGF1cmFudC5zcmMgPSBSZXN0YXVyYW50O1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG15UmVzdGF1cmFudCk7XG4gICAgICAgIC8vQWRkIHRoZSBIMVxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgYSByZXN0YXVyYW50IVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAvL0FkZCB0aGUgcGFyYWdyYXBoXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBkb2xvcnVtIGV4IG5lY2Vzc2l0YXRpYnVzIHF1aXMsIHZvbHVwdGF0ZW0gYXJjaGl0ZWN0byBwYXJpYXR1ciBpcHNhIHNhZXBlIGVvcyBub2JpcyByZWljaWVuZGlzIG1pbnVzIGVsaWdlbmRpIGRvbG9yZW0gcXVpIVwiXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==