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

        //create the test tab
        const tabTest = document.createElement('p');
        tabTest.innerText = "test";
        tabTest.addEventListener("click", console.log("showContent"))
        element.appendChild(tabTest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDMEM7O0FBRTNCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFVO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QjZCO0FBQ0k7QUFDSjs7QUFFN0I7QUFDQSxzREFBTTtBQUNOLG9EQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBoZWFkZXIuanMhXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIGhvbWUgdGFiXG4gICAgICAgIGNvbnN0IHRhYkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkhvbWUuaW5uZXJUZXh0ID0gXCJob21lXCI7XG4gICAgICAgIHRhYkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnNvbGUubG9nKFwic2hvd0NvbnRlbnRcIikpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiSG9tZSk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIG1lbnUgdGFiXG5cbiAgICAgICAgY29uc3QgdGFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiTWVudS5pbm5lclRleHQgPSBcIm1lbnVcIjtcbiAgICAgICAgdGFiTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uc29sZS5sb2coXCJzaG93Q29udGVudFwiKSlcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJNZW51KTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgY29udGFjdCB0YWJcbiAgICAgICAgY29uc3QgdGFiQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiQ29udGFjdC5pbm5lclRleHQgPSBcImNvbnRhY3RcIjtcbiAgICAgICAgdGFiQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uc29sZS5sb2coXCJzaG93Q29udGVudFwiKSlcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJDb250YWN0KTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgdGVzdCB0YWJcbiAgICAgICAgY29uc3QgdGFiVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiVGVzdC5pbm5lclRleHQgPSBcInRlc3RcIjtcbiAgICAgICAgdGFiVGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uc29sZS5sb2coXCJzaG93Q29udGVudFwiKSlcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJUZXN0KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG59XG4iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHsgICAgXG4gICAgY29uc29sZS5sb2coJ1RoaXMgc3R1ZmYgaGFwcGVucyB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZCEnKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL0FkZCB0aGUgSDFcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgcmVzdGF1cmFudCFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgLy9BZGQgdGhlIHBhcmFncmFwaFxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIlxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIC8vYWRkIHRoZSByZXN0YXVyYW50IGltYWdlXG4gICAgICAgIGNvbnN0IG15UmVzdGF1cmFudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBteVJlc3RhdXJhbnQuc3JjID0gUmVzdGF1cmFudDtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChteVJlc3RhdXJhbnQpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluLmpzJztcblxuY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XG5oZWFkZXIoKTtcbm1haW4oKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBtYWluLmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHBhcmFncmFwaCEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBkb2xvcnVtIGV4IG5lY2Vzc2l0YXRpYnVzIHF1aXMsIHZvbHVwdGF0ZW0gYXJjaGl0ZWN0byBwYXJpYXR1ciBpcHNhIHNhZXBlIGVvcyBub2JpcyByZWljaWVuZGlzIG1pbnVzIGVsaWdlbmRpIGRvbG9yZW0gcXVpIVwiIFxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=