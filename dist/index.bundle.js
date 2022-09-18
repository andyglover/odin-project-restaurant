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
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ "./src/test.js");


function header() {
    function component(){
        const element = document.createElement('div');

        const heading = document.createElement('h1');
        heading.innerText = "This is header.js!";
        element.appendChild(heading);

        //create the home tab
        const tabHome = document.createElement('p');
        tabHome.innerText = "home";
        tabHome.addEventListener("click", (e) => {
            render("home") 
        });
        element.appendChild(tabHome);

        //create the menu tab
        const tabMenu = document.createElement('p');
        tabMenu.innerText = "menu";
        tabMenu.addEventListener("click", (e) => {
            render("menu") 
        });
        element.appendChild(tabMenu);

        //create the contact tab
        const tabContact = document.createElement('p');
        tabContact.innerText = "contact";
        tabContact.addEventListener("click", (e) => {
            render("contact") 
        });
        element.appendChild(tabContact);

        //create the test tab
        const tabTest = document.createElement('p');
        tabTest.innerText = "test";
        tabTest.addEventListener("click", (e) => {
            render((0,_test_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) 
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

        return element;
    }
    document.getElementById("content").appendChild(component());
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCOztBQUViO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQUk7QUFDdkIsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRGlDO0FBQ0o7O0FBRTdCO0FBQ0Esc0RBQU07QUFDTixvREFBSTs7QUFFSjs7Ozs7Ozs7Ozs7Ozs7O0FDUGU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy90ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGZ1bmN0aW9uIGNvbXBvbmVudCgpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGhlYWRlci5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgaG9tZSB0YWJcbiAgICAgICAgY29uc3QgdGFiSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiSG9tZS5pbm5lclRleHQgPSBcImhvbWVcIjtcbiAgICAgICAgdGFiSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcihcImhvbWVcIikgXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhYkhvbWUpO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBtZW51IHRhYlxuICAgICAgICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YWJNZW51LmlubmVyVGV4dCA9IFwibWVudVwiO1xuICAgICAgICB0YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKFwibWVudVwiKSBcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiTWVudSk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIGNvbnRhY3QgdGFiXG4gICAgICAgIGNvbnN0IHRhYkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhYkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gICAgICAgIHRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICByZW5kZXIoXCJjb250YWN0XCIpIFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJDb250YWN0KTtcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgdGVzdCB0YWJcbiAgICAgICAgY29uc3QgdGFiVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFiVGVzdC5pbm5lclRleHQgPSBcInRlc3RcIjtcbiAgICAgICAgdGFiVGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcih0ZXN0KCkpIFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJUZXN0KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoc2VjdGlvbikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikudGV4dENvbnRlbnQ9XCJcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuYXBwZW5kQ2hpbGQoc2VjdGlvbilcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG59XG4iLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbi5qcyc7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8sIFdlYnBhY2shXCIpO1xuaGVhZGVyKCk7XG5tYWluKCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIG1haW4uanMhXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgcGFyYWdyYXBoISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGRvbG9ydW0gZXggbmVjZXNzaXRhdGlidXMgcXVpcywgdm9sdXB0YXRlbSBhcmNoaXRlY3RvIHBhcmlhdHVyIGlwc2Egc2FlcGUgZW9zIG5vYmlzIHJlaWNpZW5kaXMgbWludXMgZWxpZ2VuZGkgZG9sb3JlbSBxdWkhXCIgXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0KCkge1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRoaXMgaXMgdGVzdC5qcyFcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSBcIlRoaXMgaXMgYSBwYXJhZ3JhcGghIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgZG9sb3J1bSBleCBuZWNlc3NpdGF0aWJ1cyBxdWlzLCB2b2x1cHRhdGVtIGFyY2hpdGVjdG8gcGFyaWF0dXIgaXBzYSBzYWVwZSBlb3Mgbm9iaXMgcmVpY2llbmRpcyBtaW51cyBlbGlnZW5kaSBkb2xvcmVtIHF1aSFcIiBcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQoKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9