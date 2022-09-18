"use strict";
(self["webpackChunkodin_project_restaurant"] = self["webpackChunkodin_project_restaurant"] || []).push([["index"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
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

        //create the menu tab

        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", console.log("showContent"))
        element.appendChild(tabMenu);

        //create the contact tab
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", console.log("showContent"))
        element.appendChild(tabContact);

        return element;
    }

    document.getElementById("content").appendChild(component())
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function home() {    
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
        myRestaurant.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
        element.appendChild(myRestaurant);

        return element;
    }

    document.getElementById("content").appendChild(component());
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/main.js");




console.log("Hello, Webpack!");
(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_main_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const content = document.getElementById("content");

const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
function main() {

    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is main.js!";
        element.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.innerText = "This is a paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!" 

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjBDOztBQUUzQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBVTtBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEI2QjtBQUNJO0FBQ0o7O0FBRTdCO0FBQ0Esc0RBQU07QUFDTixvREFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgaGVhZGVyLmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBob21lIHRhYlxuICAgICAgICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YWJIb21lLmlubmVyVGV4dCA9IFwiaG9tZVwiO1xuICAgICAgICB0YWJIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25zb2xlLmxvZyhcInNob3dDb250ZW50XCIpKVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhYkhvbWUpO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBtZW51IHRhYlxuXG4gICAgICAgIGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYk1lbnUuaW5uZXJUZXh0ID0gXCJtZW51XCI7XG4gICAgICAgIHRhYk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnNvbGUubG9nKFwic2hvd0NvbnRlbnRcIikpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiTWVudSk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIGNvbnRhY3QgdGFiXG4gICAgICAgIGNvbnN0IHRhYkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gICAgICAgIHRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnNvbGUubG9nKFwic2hvd0NvbnRlbnRcIikpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFjdCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxufVxuIiwiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7ICAgIFxuICAgIGNvbnNvbGUubG9nKCdUaGlzIHN0dWZmIGhhcHBlbnMgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQhJyk7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy9BZGQgdGhlIEgxXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHJlc3RhdXJhbnQhXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIC8vQWRkIHRoZSBwYXJhZ3JhcGhcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGRvbG9ydW0gZXggbmVjZXNzaXRhdGlidXMgcXVpcywgdm9sdXB0YXRlbSBhcmNoaXRlY3RvIHBhcmlhdHVyIGlwc2Egc2FlcGUgZW9zIG5vYmlzIHJlaWNpZW5kaXMgbWludXMgZWxpZ2VuZGkgZG9sb3JlbSBxdWkhXCJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgICAgICAvL2FkZCB0aGUgcmVzdGF1cmFudCBpbWFnZVxuICAgICAgICBjb25zdCBteVJlc3RhdXJhbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbXlSZXN0YXVyYW50LnNyYyA9IFJlc3RhdXJhbnQ7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlSZXN0YXVyYW50KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xufSIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbi5qcyc7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8sIFdlYnBhY2shXCIpO1xuaGVhZGVyKCk7XG5tYWluKCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgbWFpbi5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIlRoaXMgaXMgYSBwYXJhZ3JhcGghIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIiBcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9