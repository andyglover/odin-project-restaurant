"use strict";
(self["webpackChunkodin_project_restaurant"] = self["webpackChunkodin_project_restaurant"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");

console.log("Hello, Webpack!");
(0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
        console.log("Showing home tab")
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
        console.log("Showing menu tab")
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
        console.log("Showing contact tab")
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ3JDO0FBQ0Esd0RBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDdEUwQzs7QUFFM0I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhZ2Vsb2FkIGZyb20gJy4vcGFnZWxvYWQuanMnO1xuY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XG5wYWdlbG9hZCgpO1xuXG4vL21ha2UgdGhlIHRhYnNcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cbmNvbnN0IHJlbmRlclRhYnMgPSAoKSA9PiB7XG4gICAgdGFiSG9tZS5yZW5kZXIoKTtcbiAgICB0YWJNZW51LnJlbmRlcigpO1xuICAgIHRhYkNvbnRhY3QucmVuZGVyKCk7XG59XG5cbmNvbnN0IHRhYkhvbWUgPSAoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyVGFicygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dpbmcgaG9tZSB0YWJcIilcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFiSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YWJIb21lLmlubmVyVGV4dCA9IFwiaG9tZVwiO1xuICAgIHRhYkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250ZW50KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiSG9tZSk7XG4gICAgfTtcbiAgICByZW5kZXIoKTtcbiAgICByZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmNvbnN0IHRhYk1lbnUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICByZW5kZXJUYWJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd2luZyBtZW51IHRhYlwiKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYk1lbnUuaW5uZXJUZXh0ID0gXCJtZW51XCI7XG4gICAgICAgIHRhYk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250ZW50KVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYk1lbnUpO1xuICAgIH07XG4gICAgcmVuZGVyKCk7XG4gICAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5jb25zdCB0YWJDb250YWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBzaG93Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIHJlbmRlclRhYnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGNvbnRhY3QgdGFiXCIpXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiQ29udGFjdC5pbm5lclRleHQgPSBcImNvbnRhY3RcIjtcbiAgICAgICAgdGFiQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRlbnQpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFjdCk7XG4gICAgfTtcbiAgICByZW5kZXIoKTtcbiAgICByZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmNvbnNvbGUubG9nKFwidGVzdDJcIik7IiwiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2Vsb2FkKCkgeyAgICBcbiAgICBjb25zb2xlLmxvZygnVGhpcyBzdHVmZiBoYXBwZW5zIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkIScpO1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vYWRkIHRoZSByZXN0YXVyYW50IGltYWdlXG4gICAgICAgIGNvbnN0IG15UmVzdGF1cmFudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBteVJlc3RhdXJhbnQuc3JjID0gUmVzdGF1cmFudDtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChteVJlc3RhdXJhbnQpO1xuICAgICAgICAvL0FkZCB0aGUgSDFcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgcmVzdGF1cmFudCFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgLy9BZGQgdGhlIHBhcmFncmFwaFxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIlxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=