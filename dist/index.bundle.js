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
        content.appendChild(tabHome);

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
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

//make the tabs
const content = document.getElementById("content");

const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
const renderTabs = () => {
    tabHome.render();
    tabMenu.render();
    tabContact.render();
}

const tabHome = (() => {
    
    const showContent = () => {
        clearContent();
        renderTabs();
        getContent();
    }
    const getContent = () => {
        const tabHomeContent = document.createElement('p');
        tabHomeContent.innerText = "home content!";
        content.appendChild(tabHomeContent);
        console.log("Showing home tab");
    }

    const render = () => {
    const tabHome = document.createElement('p');
    tabHome.innerText = "home";
    tabHome.addEventListener("click", showContent)
    content.appendChild(tabHome);
    };
    render();
    return { render };
})();

const tabMenu = (() => {

    const showContent = () => {
        clearContent();
        renderTabs();
        getContent();
    }
    const getContent = () => {
        const tabMenuContent = document.createElement('p');
        tabMenuContent.innerText = "menu content!";
        content.appendChild(tabMenuContent);
        console.log("Showing menu tab");
    }
    
    const render = () => {
        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", showContent)
        content.appendChild(tabMenu);
    };
    render();
    return { render };
})();

const tabContact = (() => {
    const showContent = () => {
        clearContent();
        renderTabs();
        getContent();
    }
    const getContent = () => {
        const tabContactContent = document.createElement('p');
        tabContactContent.innerText = "contact content!";
        content.appendChild(tabContactContent);
        console.log("Showing contact tab");
    }
    const render = () => {
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", showContent)
        content.appendChild(tabContact);
    };
    render();
    return { render };
})();

console.log("test2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIwQzs7QUFFM0I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQVU7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCNkI7QUFDSTtBQUNKOztBQUU3QjtBQUNBLHNEQUFNO0FBQ04sb0RBQUk7QUFDSixvREFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQzdGZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGZ1bmN0aW9uIGNvbXBvbmVudCgpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGhlYWRlci5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgaG9tZSB0YWJcbiAgICAgICAgY29uc3QgdGFiSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiSG9tZS5pbm5lclRleHQgPSBcImhvbWVcIjtcbiAgICAgICAgdGFiSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uc29sZS5sb2coXCJzaG93Q29udGVudFwiKSlcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJIb21lKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG59XG4iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHsgICAgXG4gICAgY29uc29sZS5sb2coJ1RoaXMgc3R1ZmYgaGFwcGVucyB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZCEnKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL0FkZCB0aGUgSDFcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgcmVzdGF1cmFudCFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgLy9BZGQgdGhlIHBhcmFncmFwaFxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIlxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIC8vYWRkIHRoZSByZXN0YXVyYW50IGltYWdlXG4gICAgICAgIGNvbnN0IG15UmVzdGF1cmFudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBteVJlc3RhdXJhbnQuc3JjID0gUmVzdGF1cmFudDtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChteVJlc3RhdXJhbnQpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluLmpzJztcblxuY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XG5oZWFkZXIoKTtcbm1haW4oKTtcbmhvbWUoKTtcblxuLy9tYWtlIHRoZSB0YWJzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5jb25zdCByZW5kZXJUYWJzID0gKCkgPT4ge1xuICAgIHRhYkhvbWUucmVuZGVyKCk7XG4gICAgdGFiTWVudS5yZW5kZXIoKTtcbiAgICB0YWJDb250YWN0LnJlbmRlcigpO1xufVxuXG5jb25zdCB0YWJIb21lID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBzaG93Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIHJlbmRlclRhYnMoKTtcbiAgICAgICAgZ2V0Q29udGVudCgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJIb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiSG9tZUNvbnRlbnQuaW5uZXJUZXh0ID0gXCJob21lIGNvbnRlbnQhXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiSG9tZUNvbnRlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dpbmcgaG9tZSB0YWJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhYkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFiSG9tZS5pbm5lclRleHQgPSBcImhvbWVcIjtcbiAgICB0YWJIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGVudClcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkhvbWUpO1xuICAgIH07XG4gICAgcmVuZGVyKCk7XG4gICAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5jb25zdCB0YWJNZW51ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyVGFicygpO1xuICAgICAgICBnZXRDb250ZW50KCk7XG4gICAgfVxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYk1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YWJNZW51Q29udGVudC5pbm5lclRleHQgPSBcIm1lbnUgY29udGVudCFcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJNZW51Q29udGVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd2luZyBtZW51IHRhYlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YWJNZW51LmlubmVyVGV4dCA9IFwibWVudVwiO1xuICAgICAgICB0YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGVudClcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJNZW51KTtcbiAgICB9O1xuICAgIHJlbmRlcigpO1xuICAgIHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuY29uc3QgdGFiQ29udGFjdCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICByZW5kZXJUYWJzKCk7XG4gICAgICAgIGdldENvbnRlbnQoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQ29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkNvbnRhY3RDb250ZW50LmlubmVyVGV4dCA9IFwiY29udGFjdCBjb250ZW50IVwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRhY3RDb250ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGNvbnRhY3QgdGFiXCIpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gICAgICAgIHRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250ZW50KVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRhY3QpO1xuICAgIH07XG4gICAgcmVuZGVyKCk7XG4gICAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5jb25zb2xlLmxvZyhcInRlc3QyXCIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBtYWluLmpzIVwiO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHBhcmFncmFwaCEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBkb2xvcnVtIGV4IG5lY2Vzc2l0YXRpYnVzIHF1aXMsIHZvbHVwdGF0ZW0gYXJjaGl0ZWN0byBwYXJpYXR1ciBpcHNhIHNhZXBlIGVvcyBub2JpcyByZWljaWVuZGlzIG1pbnVzIGVsaWdlbmRpIGRvbG9yZW0gcXVpIVwiIFxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=