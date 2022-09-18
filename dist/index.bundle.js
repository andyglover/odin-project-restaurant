"use strict";
(self["webpackChunkodin_project_restaurant"] = self["webpackChunkodin_project_restaurant"] || []).push([["index"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {

    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is contact.js!";
        element.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.innerText = "This is a paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!" 
        element.appendChild(paragraph);

        return element;
    }

    return component();
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.js */ "./src/test.js");





function header() {
    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is header.js!";
        element.appendChild(heading);

        //create the home tab
        const tabHome = document.createElement('button');
        tabHome.innerText = "home";
        tabHome.addEventListener("click", (e) => {
            render((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
        });
        element.appendChild(tabHome);

        //create the menu tab
        const tabMenu = document.createElement('button');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", (e) => {
            render((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) 
        });
        element.appendChild(tabMenu);

        //create the contact tab
        const tabContact = document.createElement('button');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", (e) => {
            render((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()) 
        });
        element.appendChild(tabContact);

        //create the test tab
        const tabTest = document.createElement('button');
        tabTest.innerText = "test";
        tabTest.addEventListener("click", (e) => {
            render((0,_test_js__WEBPACK_IMPORTED_MODULE_3__["default"])()) 
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

    function component() {
        const element = document.createElement('div');
        //Add the H1
        const heading = document.createElement('h1');
        heading.innerText = "This is home.js!";
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

    return component();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");



console.log("Hello, Webpack!");
(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const content = document.getElementById("content");


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
        element.setAttribute('id','main');

        const heading = document.createElement('h1');
        heading.innerText = "This is main.js!";
        element.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.innerText = "This is a paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!" 
        element.appendChild(paragraph);

        return element;
    }
    
    document.getElementById("content").appendChild(component());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {

    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is menu.js!";
        element.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.innerText = "This is a paragraph! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum ex necessitatibus quis, voluptatem architecto pariatur ipsa saepe eos nobis reiciendis minus eligendi dolorem qui!" 
        element.appendChild(paragraph);

        return element;
    }

    return component();
}



/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ test)
/* harmony export */ });
function test() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNEI7QUFDQTtBQUNNO0FBQ047O0FBRWI7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBSTtBQUN2QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQUk7QUFDdkIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFPO0FBQzFCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBSTtBQUN2QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEQwQzs7QUFFM0I7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFVO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCaUM7QUFDSjs7QUFFN0I7QUFDQSxzREFBTTtBQUNOLG9EQUFJOztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7QUNQZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvdGVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgY29udGFjdC5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIlRoaXMgaXMgYSBwYXJhZ3JhcGghIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIiBcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQoKTtcbn1cblxuIiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuaW1wb3J0IHRlc3QgZnJvbSAnLi90ZXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgaGVhZGVyLmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBob21lIHRhYlxuICAgICAgICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhYkhvbWUuaW5uZXJUZXh0ID0gXCJob21lXCI7XG4gICAgICAgIHRhYkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICByZW5kZXIoaG9tZSgpKVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJIb21lKTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgbWVudSB0YWJcbiAgICAgICAgY29uc3QgdGFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YWJNZW51LmlubmVyVGV4dCA9IFwibWVudVwiO1xuICAgICAgICB0YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKG1lbnUoKSkgXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhYk1lbnUpO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjb250YWN0IHRhYlxuICAgICAgICBjb25zdCB0YWJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhYkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gICAgICAgIHRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICByZW5kZXIoY29udGFjdCgpKSBcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFjdCk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIHRlc3QgdGFiXG4gICAgICAgIGNvbnN0IHRhYlRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFiVGVzdC5pbm5lclRleHQgPSBcInRlc3RcIjtcbiAgICAgICAgdGFiVGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcih0ZXN0KCkpIFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJUZXN0KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoc2VjdGlvbikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikudGV4dENvbnRlbnQ9XCJcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuYXBwZW5kQ2hpbGQoc2VjdGlvbilcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG59XG4iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHsgICAgXG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy9BZGQgdGhlIEgxXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBob21lLmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAvL0FkZCB0aGUgcGFyYWdyYXBoXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBkb2xvcnVtIGV4IG5lY2Vzc2l0YXRpYnVzIHF1aXMsIHZvbHVwdGF0ZW0gYXJjaGl0ZWN0byBwYXJpYXR1ciBpcHNhIHNhZXBlIGVvcyBub2JpcyByZWljaWVuZGlzIG1pbnVzIGVsaWdlbmRpIGRvbG9yZW0gcXVpIVwiXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgLy9hZGQgdGhlIHJlc3RhdXJhbnQgaW1hZ2VcbiAgICAgICAgY29uc3QgbXlSZXN0YXVyYW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG15UmVzdGF1cmFudC5zcmMgPSBSZXN0YXVyYW50O1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG15UmVzdGF1cmFudCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudCgpO1xufSIsImltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluLmpzJztcblxuY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XG5oZWFkZXIoKTtcbm1haW4oKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIG1haW4uanMhXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgcGFyYWdyYXBoISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGRvbG9ydW0gZXggbmVjZXNzaXRhdGlidXMgcXVpcywgdm9sdXB0YXRlbSBhcmNoaXRlY3RvIHBhcmlhdHVyIGlwc2Egc2FlcGUgZW9zIG5vYmlzIHJlaWNpZW5kaXMgbWludXMgZWxpZ2VuZGkgZG9sb3JlbSBxdWkhXCIgXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBtZW51LmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHBhcmFncmFwaCEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBkb2xvcnVtIGV4IG5lY2Vzc2l0YXRpYnVzIHF1aXMsIHZvbHVwdGF0ZW0gYXJjaGl0ZWN0byBwYXJpYXR1ciBpcHNhIHNhZXBlIGVvcyBub2JpcyByZWljaWVuZGlzIG1pbnVzIGVsaWdlbmRpIGRvbG9yZW0gcXVpIVwiIFxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudCgpO1xufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0KCkge1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgdGVzdC5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIlRoaXMgaXMgYSBwYXJhZ3JhcGghIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIiBcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQoKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9