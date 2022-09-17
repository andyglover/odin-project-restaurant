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

const tabHome = (() => {
    
    const showContent = () => {
        clearContent();
        console.log("Showing home tab")
    }

    const render = (() => {
    const tabHome = document.createElement('p');
    tabHome.innerText = "home";
    tabHome.addEventListener("click", showContent)
    content.appendChild(tabHome);
    })();
    
})();

const tabMenu = (() => {
    
    
    const showContent = () => {
        clearContent();
        console.log("Showing menu tab")
    }
    
    const render = (() => {
        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", showContent)
        content.appendChild(tabMenu);
    })();
})();

const tabContact = (() => {
    const showContent = () => {
        clearContent();
        console.log("Showing contact tab")
    }
    const render = (() => {
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", showContent)
        content.appendChild(tabContact);
    })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ3JDO0FBQ0Esd0RBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQzFEMEM7O0FBRTNCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdlbG9hZCBmcm9tICcuL3BhZ2Vsb2FkLmpzJztcbmNvbnNvbGUubG9nKFwiSGVsbG8sIFdlYnBhY2shXCIpO1xucGFnZWxvYWQoKTtcblxuLy9tYWtlIHRoZSB0YWJzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IHRhYkhvbWUgPSAoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGhvbWUgdGFiXCIpXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhYkhvbWUuaW5uZXJUZXh0ID0gXCJob21lXCI7XG4gICAgdGFiSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRlbnQpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJIb21lKTtcbiAgICB9KSgpO1xuICAgIFxufSkoKTtcblxuY29uc3QgdGFiTWVudSA9ICgoKSA9PiB7XG4gICAgXG4gICAgXG4gICAgY29uc3Qgc2hvd0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dpbmcgbWVudSB0YWJcIilcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiTWVudS5pbm5lclRleHQgPSBcIm1lbnVcIjtcbiAgICAgICAgdGFiTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRlbnQpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiTWVudSk7XG4gICAgfSkoKTtcbn0pKCk7XG5cbmNvbnN0IHRhYkNvbnRhY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGNvbnRhY3QgdGFiXCIpXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gICAgICAgIHRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb250ZW50KVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRhY3QpO1xuICAgIH0pKCk7XG59KSgpO1xuXG5jb25zb2xlLmxvZyhcInRlc3QyXCIpOyIsImltcG9ydCBSZXN0YXVyYW50IGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlbG9hZCgpIHsgICAgXG4gICAgY29uc29sZS5sb2coJ1RoaXMgc3R1ZmYgaGFwcGVucyB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZCEnKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL2FkZCB0aGUgcmVzdGF1cmFudCBpbWFnZVxuICAgICAgICBjb25zdCBteVJlc3RhdXJhbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbXlSZXN0YXVyYW50LnNyYyA9IFJlc3RhdXJhbnQ7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlSZXN0YXVyYW50KTtcbiAgICAgICAgLy9BZGQgdGhlIEgxXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHJlc3RhdXJhbnQhXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIC8vQWRkIHRoZSBwYXJhZ3JhcGhcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGRvbG9ydW0gZXggbmVjZXNzaXRhdGlidXMgcXVpcywgdm9sdXB0YXRlbSBhcmNoaXRlY3RvIHBhcmlhdHVyIGlwc2Egc2FlcGUgZW9zIG5vYmlzIHJlaWNpZW5kaXMgbWludXMgZWxpZ2VuZGkgZG9sb3JlbSBxdWkhXCJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9