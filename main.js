(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+Fd":
/*!********************************************************************!*\
  !*** ./src/app/name-exists-dialog/name-exists-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: NameExistsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameExistsDialogComponent", function() { return NameExistsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NameExistsDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
NameExistsDialogComponent.ɵfac = function NameExistsDialogComponent_Factory(t) { return new (t || NameExistsDialogComponent)(); };
NameExistsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameExistsDialogComponent, selectors: [["app-name-exists-dialog"]], decls: 2, vars: 0, template: function NameExistsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "name-exists-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW1lLWV4aXN0cy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\moham\Documents\codingProjects\sliding-puzzle\src\main.ts */"zUnb");


/***/ }),

/***/ "9jgp":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/game"]; };
const _c1 = function () { return ["/instructions"]; };
const _c2 = function () { return ["/scores"]; };
class MainMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 10, vars: 6, consts: [[1, "main-menu"], [1, "container"], [3, "routerLink"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Main menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Insctructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".main-menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 70%;\r\n    border: 1px solid gray;\r\n    border-radius: 0.5em;\r\n    background-color: #518f8fd2;\r\n    margin-top: 9em;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 2em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n    border-radius: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    outline: 0;\r\n    border: 0;\r\n    background-color: #0478fda8;\r\n    width: 75%;\r\n    transition: all 0.2s;\r\n    color: white;\r\n    font-weight: bolder;\r\n    font-size: 2em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] + button[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtJQUMzQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJtYWluLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4ZjhmZDI7XHJcbiAgICBtYXJnaW4tdG9wOiA5ZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDc4ZmRhODtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuYnV0dG9uK2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CPi4":
/*!********************************************************!*\
  !*** ./src/app/instructions/instructions.component.ts ***!
  \********************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
class InstructionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructionsComponent.ɵfac = function InstructionsComponent_Factory(t) { return new (t || InstructionsComponent)(); };
InstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionsComponent, selectors: [["app-instructions"]], decls: 5, vars: 2, consts: [[1, "container"], [3, "routerLink"], [1, "instructions"]], template: function InstructionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back to main menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You have to sort all the tiles in order from 1 to 8 in shortest time possible. You can move tiles that are above, below, on the right or on the left of the empty tile by cliking on them. When you click on a tile, it switches places with the empty tile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@media(min-width: 600px)\r\n{\r\n    .instructions[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 2em;\r\n        line-height: 1.2em;\r\n    }\r\n}\r\n.instructions[_ngcontent-%COMP%]{\r\n    background-color: beige;\r\n    border-radius: 0.5em;\r\n    padding: 2em;\r\n    font-size: 1.2em;\r\n\r\n}\r\n.container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 90vw;\r\n    margin: 2em auto;\r\n    flex-direction: column;\r\n\r\n}\r\nbutton[_ngcontent-%COMP%]\r\n{\r\n    padding: 0.5em;\r\n    border-radius: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    outline: 0;\r\n    border: 0;\r\n    background-color: #0478fda8;\r\n    transition: all 0.2s;\r\n    color: white;\r\n    font-weight: bolder;\r\n    font-size: 2em;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7QUFDSjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjtBQUVBOztJQUVJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJpbnN0cnVjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6IDYwMHB4KVxyXG57XHJcbiAgICAuaW5zdHJ1Y3Rpb25zXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgfVxyXG59XHJcbi5pbnN0cnVjdGlvbnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuXHJcbn1cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG5idXR0b25cclxue1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDc4ZmRhODtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59Il19 */"] });


/***/ }),

/***/ "H9aC":
/*!****************************************!*\
  !*** ./src/app/tile/tile.component.ts ***!
  \****************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class TileComponent {
    constructor() { }
    ngOnInit() {
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { value: "value" }, decls: 2, vars: 2, consts: [[1, "tile", 3, "ngClass"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value === 9 ? "empty" : "tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".tile[_ngcontent-%COMP%] {\r\n    width: 7em;\r\n    height: 7em;\r\n    background-color: rgb(52, 145, 252);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    margin: 0.1em;\r\n    border: 1px solid white;\r\n    font-size: 1.5em;\r\n}\r\n\r\n@media (max-width: 650px) {\r\n\r\n    .tile[_ngcontent-%COMP%]\r\n    {\r\n        width: 6em;\r\n        height: 6em;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 450px) {\r\n\r\n    .tile[_ngcontent-%COMP%]\r\n    {\r\n        width: 5em;\r\n        height: 5em;\r\n        \r\n    }\r\n    \r\n    \r\n}\r\n\r\n@media (max-width: 360px) {\r\n\r\n    .tile[_ngcontent-%COMP%]\r\n    {\r\n        width: 4em;\r\n        height: 4em;\r\n        \r\n    }\r\n    \r\n    \r\n}\r\n\r\n.empty[_ngcontent-%COMP%] {\r\n    background-color: #55FFFF;\r\n    color: #55FFFF;\r\n    transition: all 0.1s;\r\n}\r\n\r\n@media(hover: hover) {\r\n    .tile[_ngcontent-%COMP%] {\r\n        transition: all 0.1s;\r\n    }\r\n    .tile[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.1);\r\n    }\r\n}\r\n\r\n@media(hover:none) {\r\n    .tile[_ngcontent-%COMP%] {\r\n        transition: all 0.05s;\r\n    }\r\n    .tile[_ngcontent-%COMP%]:active {\r\n        transform: scale(1.05);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSTs7UUFFSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztBQUVKOztBQUdBOztJQUVJOztRQUVJLFVBQVU7UUFDVixXQUFXOztJQUVmOzs7QUFHSjs7QUFFQTs7SUFFSTs7UUFFSSxVQUFVO1FBQ1YsV0FBVzs7SUFFZjs7O0FBR0o7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSiIsImZpbGUiOiJ0aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZSB7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgaGVpZ2h0OiA3ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDE0NSwgMjUyKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAuMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuXHJcbiAgICAudGlsZVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA2ZW07XHJcbiAgICAgICAgaGVpZ2h0OiA2ZW07XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuICAgIC50aWxlXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDVlbTtcclxuICAgICAgICBoZWlnaHQ6IDVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG5cclxuICAgIC50aWxlXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDRlbTtcclxuICAgICAgICBoZWlnaHQ6IDRlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmVtcHR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NUZGRkY7XHJcbiAgICBjb2xvcjogIzU1RkZGRjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcblxyXG5cclxuQG1lZGlhKGhvdmVyOiBob3Zlcikge1xyXG4gICAgLnRpbGUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gICAgfVxyXG4gICAgLnRpbGU6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKGhvdmVyOm5vbmUpIHtcclxuICAgIC50aWxlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XHJcbiAgICB9XHJcbiAgICAudGlsZTphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "IuWv":
/*!*********************************************!*\
  !*** ./src/app/services.ts/scoreService.ts ***!
  \*********************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScoreService {
    setNumbers(seconds, minutes, hours, moves) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
        this.moves = moves;
    }
}
ScoreService.ɵfac = function ScoreService_Factory(t) { return new (t || ScoreService)(); };
ScoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScoreService, factory: ScoreService.ɵfac });


/***/ }),

/***/ "Ludi":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../winner-dialog/winner-dialog.component */ "SZoa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ts_clickService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.ts/clickService */ "ga+M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tile/tile.component */ "H9aC");





class GridComponent {
    constructor(clickService, dialog) {
        this.clickService = clickService;
        this.dialog = dialog;
        this.numbers = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];
        //shuffle array
        for (var i = this.numbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.numbers[i];
            this.numbers[i] = this.numbers[j];
            this.numbers[j] = temp;
        }
    }
    ngOnInit() {
    }
    change(event) {
        var index = Number(event.currentTarget.id);
        var emptyIndex = this.numbers.indexOf(9);
        this.clickService.lastClicked = event.target.innerText;
        if (emptyIndex == (index + 1) || emptyIndex == (index - 1) || emptyIndex == (index + 3) || emptyIndex == (index - 3)) {
            var temp = this.numbers[index];
            this.numbers[index] = this.numbers[emptyIndex];
            this.numbers[emptyIndex] = temp;
        }
        /*if(this.numbers === [1,2,3,4,5,6,7,8,9])
        {
          alert("winner");
        }*/
        if (this.isSorted()) {
            this.openDialog();
        }
    }
    openDialog() {
        this.clickService.win = true;
        const dialogRef = this.dialog.open(_winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_0__["WinnerDialogComponent"], {
            width: '250px',
        });
    }
    isSorted() {
        for (var i = 1; i < this.numbers.length; i++) {
            if (this.numbers[i] - 1 != this.numbers[i - 1])
                return false;
        }
        return true;
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ts_clickService__WEBPACK_IMPORTED_MODULE_2__["ClickService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 10, vars: 9, consts: [[1, "grid"], ["id", "0", 3, "value", "click"], ["id", "1", 3, "value", "click"], ["id", "2", 3, "value", "click"], ["id", "3", 3, "value", "click"], ["id", "4", 3, "value", "click"], ["id", "5", 3, "value", "click"], ["id", "6", 3, "value", "click"], ["id", "7", 3, "value", "click"], ["id", "8", 3, "value", "click"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_1_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_2_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_3_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_4_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_5_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_6_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_7_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_8_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-tile", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_app_tile_click_9_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.numbers[8]);
    } }, directives: [_tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"]], styles: [".grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    width: 21em;\r\n    height: 21em;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .grid[_ngcontent-%COMP%] {\r\n        width: 9em;\r\n        height: 9em;\r\n        margin: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6ImdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuICAgIHdpZHRoOiAyMWVtO1xyXG4gICAgaGVpZ2h0OiAyMWVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmdyaWQge1xyXG4gICAgICAgIHdpZHRoOiA5ZW07XHJcbiAgICAgICAgaGVpZ2h0OiA5ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "NkM1":
/*!*******************************!*\
  !*** ./src/app/utils/urls.ts ***!
  \*******************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
const baseUrl = 'http://mohamadbdeir-001-site1.btempurl.com/api/';


/***/ }),

/***/ "SZoa":
/*!**********************************************************!*\
  !*** ./src/app/winner-dialog/winner-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: WinnerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerDialogComponent", function() { return WinnerDialogComponent; });
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/urls */ "NkM1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ts_scoreService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.ts/scoreService */ "IuWv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








class WinnerDialogComponent {
    constructor(scoreService, dialogRef, httpClient, router) {
        this.scoreService = scoreService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.router = router;
        this.name = "";
    }
    ngOnInit() {
    }
    cancel() {
        this.dialogRef.close();
    }
    submit() {
        if (this.name === "" || this.name == undefined) {
            alert("The name can't be empty");
            return;
        }
        this.time = this.scoreService.hours + ":" + this.scoreService.minutes + ":" + this.scoreService.seconds;
        this.moves = this.scoreService.moves;
        let score = { "name": this.name, "time": this.time, "moves": this.moves };
        //this.httpClient.post(' https://sliding-puzzle-api.herokuapp.com/api/scores/addScore', score).subscribe();
        this.httpClient.post(_utils_urls__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + 'scores/addScore', score).subscribe();
        //this.httpClient.post(' http://localhost:5000/api/scores/addScore', score).subscribe();
        this.dialogRef.close();
        this.router.navigate(['/scores']);
    }
}
WinnerDialogComponent.ɵfac = function WinnerDialogComponent_Factory(t) { return new (t || WinnerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ts_scoreService__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
WinnerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WinnerDialogComponent, selectors: [["app-winner-dialog"]], decls: 15, vars: 15, consts: [["mat-dialog-content", "", 1, "winner"], [1, "time"], [1, "moves"], ["type", "text", "placeholder", "enter your name", 1, "name-input", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "submit", 3, "ngClass", "click"], ["mat-button", "", 1, "cancel", 3, "click"]], template: function WinnerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You won");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WinnerDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinnerDialogComponent_Template_button_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinnerDialogComponent_Template_button_click_13_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, ctx.scoreService.hours, "2.0"), ":", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 9, ctx.scoreService.minutes, "2.0"), ":", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 12, ctx.scoreService.seconds, "2.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Moves: ", ctx.scoreService.moves, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.name === "" ? "disabled" : "enabled");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".winner[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.name-input[_ngcontent-%COMP%]\r\n{\r\n    height: 2em;\r\n    margin-top: 1em;\r\n    border: 1px solid #e2e2e2;\r\n    outline: 0;\r\n\r\n}\r\nbutton[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 1em;\r\n    padding: 1em 1em;\r\n    border-radius: 0.2em;\r\n    outline: none;\r\n    border: 0;\r\n    color: white;\r\n    \r\n}\r\n.cancel[_ngcontent-%COMP%]\r\n{\r\n    background-color: #9C0808;\r\n}\r\n.submit[_ngcontent-%COMP%]\r\n{\r\n    background-color: #06B61D;\r\n}\r\n.disabled[_ngcontent-%COMP%]\r\n{\r\n    background-color: #95e29f;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbm5lci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFVBQVU7O0FBRWQ7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7O0FBRWhCO0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUkseUJBQXlCOzs7QUFHN0IiLCJmaWxlIjoid2lubmVyLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbm5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYW1lLWlucHV0XHJcbntcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIG91dGxpbmU6IDA7XHJcblxyXG59XHJcblxyXG5idXR0b25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uY2FuY2VsXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QzA4MDg7XHJcbn1cclxuXHJcbi5zdWJtaXRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2QjYxRDtcclxufVxyXG5cclxuLmRpc2FibGVkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWUyOWY7XHJcblxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'sliding-puzzle';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile/tile.component */ "H9aC");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "Ludi");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/container.component */ "s7Ec");
/* harmony import */ var _services_ts_clickService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.ts/clickService */ "ga+M");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./winner-dialog/winner-dialog.component */ "SZoa");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_ts_scoreService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services.ts/scoreService */ "IuWv");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scores/scores.component */ "cERv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _name_exists_dialog_name_exists_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./name-exists-dialog/name-exists-dialog.component */ "/+Fd");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./instructions/instructions.component */ "CPi4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_services_ts_clickService__WEBPACK_IMPORTED_MODULE_6__["ClickService"], _services_ts_scoreService__WEBPACK_IMPORTED_MODULE_10__["ScoreService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__["TileComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"],
        _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_8__["WinnerDialogComponent"],
        _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__["MainMenuComponent"],
        _scores_scores_component__WEBPACK_IMPORTED_MODULE_12__["ScoresComponent"],
        _name_exists_dialog_name_exists_dialog_component__WEBPACK_IMPORTED_MODULE_15__["NameExistsDialogComponent"],
        _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_16__["InstructionsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();


/***/ }),

/***/ "cERv":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/urls */ "NkM1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ScoresComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
const _c0 = function (a0, a1, a2) { return { "first": a0, "second": a1, "third": a2 }; };
function ScoresComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx_r1.scores.indexOf(score_r2) == 0, ctx_r1.scores.indexOf(score_r2) == 1, ctx_r1.scores.indexOf(score_r2) == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.scores.indexOf(score_r2) + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](score_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](score_r2.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](score_r2.moves);
} }
const _c1 = function () { return ["/"]; };
class ScoresComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.sortBy = "moves";
        this.loading = true;
    }
    ngOnInit() {
        this.loadScores();
    }
    loadScores() {
        this.loading = true;
        //let path = " https://sliding-puzzle-api.herokuapp.com/api/scores/";
        //let path = "http://localhost:5000/api/scores"
        let path = _utils_urls__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + "Scores/getScoresByTime";
        if (this.sortBy === "time") {
            //path +="getScoresByMoves";
            path = _utils_urls__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + "scores/getScoresByMoves";
        }
        else {
            //path+= "getScoresByTime"
            path = _utils_urls__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + "scores/getScoresByTime";
        }
        //console.log(path)
        this.httpClient.get(path).subscribe(data => {
            this.scores = data;
            this.loading = false;
        });
    }
}
ScoresComponent.ɵfac = function ScoresComponent_Factory(t) { return new (t || ScoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ScoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScoresComponent, selectors: [["app-scores"]], decls: 19, vars: 6, consts: [[1, "container"], [1, "scores"], [3, "routerLink"], [1, "sortBy"], [1, "moves"], ["for", "moves"], ["type", "radio", "id", "moves", "checked", "", "name", "sortBy", "value", "moves", 3, "ngModel", "ngModelChange", "click"], [1, "time"], ["for", "time"], ["type", "radio", "id", "time", "name", "sortBy", "value", "time", 3, "ngModel", "ngModelChange", "click"], ["class", "loading", "src", "assets/images/loader_ring.gif", 4, "ngIf"], [1, "data"], [4, "ngFor", "ngForOf"], ["src", "assets/images/loader_ring.gif", 1, "loading"], [3, "ngClass"]], template: function ScoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Back to main menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sort scores by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "number of moves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScoresComponent_Template_input_ngModelChange_10_listener($event) { return ctx.sortBy = $event; })("click", function ScoresComponent_Template_input_click_10_listener() { return ctx.loadScores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScoresComponent_Template_input_ngModelChange_14_listener($event) { return ctx.sortBy = $event; })("click", function ScoresComponent_Template_input_click_14_listener() { return ctx.loadScores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ScoresComponent_img_15_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ScoresComponent_tr_18_Template, 9, 9, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scores);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100vw;\r\n    justify-content: center;\r\n}\r\n\r\n.scores[_ngcontent-%COMP%] {\r\n    max-width: 60%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 2em;\r\n    background-color: beige;\r\n    border: 1px solid brown;\r\n    border-radius: 0.3em;\r\n    padding: 1em;\r\n}\r\n\r\n.sortBy[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.moves[_ngcontent-%COMP%], .time[_ngcontent-%COMP%] {\r\n    margin: 0 1em\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    padding: 0.5em 2em;\r\n    border-bottom: 0.5px solid rgb(226, 135, 135);\r\n}\r\n\r\n@media (max-width:600px) {\r\n    \r\n    td[_ngcontent-%COMP%] {\r\n        padding: 0.5em 1em;\r\n        \r\n    }\r\n\r\n    .scores[_ngcontent-%COMP%]\r\n    {\r\n     margin: 2em 0;\r\n     max-width: 80vw;\r\n     \r\n    }\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n    background: rgb(255, 215, 0);\r\n    background: linear-gradient(213deg, rgba(255, 215, 0, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 215, 0, 1) 62%);\r\n}\r\n\r\n.second[_ngcontent-%COMP%] {\r\n    background: rgb(192, 192, 192);\r\n    background: linear-gradient(213deg, rgba(192, 192, 192, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(192, 192, 192, 1) 62%);\r\n}\r\n\r\n.third[_ngcontent-%COMP%] {\r\n    background: rgb(205, 127, 50);\r\n    background: linear-gradient(213deg, rgba(205, 127, 50, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(205, 127, 50, 1) 62%);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    border-radius: 0.3em;\r\n    background-color: #2585DA;\r\n    color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    padding: 1em;\r\n    transition: all 0.2s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.loading[_ngcontent-%COMP%] {\r\n    width: 10em;\r\n    height: 10em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjs7SUFFdEI7O0lBRUE7O0tBRUMsYUFBYTtLQUNiLGVBQWU7O0lBRWhCO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUhBQWlIO0FBQ3JIOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFIQUFxSDtBQUN6SDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtSEFBbUg7QUFDdkg7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzY29yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2NvcmVzIHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJyb3duO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5zb3J0Qnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vdmVzLCAudGltZSB7XHJcbiAgICBtYXJnaW46IDAgMWVtXHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDIyNiwgMTM1LCAxMzUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5zY29yZXNcclxuICAgIHtcclxuICAgICBtYXJnaW46IDJlbSAwO1xyXG4gICAgIG1heC13aWR0aDogODB2dztcclxuICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmZpcnN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIxNSwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEzZGVnLCByZ2JhKDI1NSwgMjE1LCAwLCAxKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSwgcmdiYSgyNTUsIDIxNSwgMCwgMSkgNjIlKTtcclxufVxyXG5cclxuLnNlY29uZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEzZGVnLCByZ2JhKDE5MiwgMTkyLCAxOTIsIDEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDE5MiwgMTkyLCAxOTIsIDEpIDYyJSk7XHJcbn1cclxuXHJcbi50aGlyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA1LCAxMjcsIDUwKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTNkZWcsIHJnYmEoMjA1LCAxMjcsIDUwLCAxKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSwgcmdiYSgyMDUsIDEyNywgNTAsIDEpIDYyJSk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTg1REE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "ga+M":
/*!*********************************************!*\
  !*** ./src/app/services.ts/clickService.ts ***!
  \*********************************************/
/*! exports provided: ClickService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickService", function() { return ClickService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClickService {
    constructor() {
        this.win = false;
    }
}
ClickService.ɵfac = function ClickService_Factory(t) { return new (t || ClickService)(); };
ClickService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClickService, factory: ClickService.ɵfac });


/***/ }),

/***/ "s7Ec":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ts_clickService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.ts/clickService */ "ga+M");
/* harmony import */ var _services_ts_scoreService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.ts/scoreService */ "IuWv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grid/grid.component */ "Ludi");





function ContainerComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainerComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainerComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.resume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainerComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.hours, "2.0"), ":");
} }
class ContainerComponent {
    constructor(clickService, scoreService) {
        this.clickService = clickService;
        this.scoreService = scoreService;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.started = false;
        this.paused = false;
        this.numberOfClicks = 0;
    }
    start() {
        this.started = true;
        this.interval = setInterval(() => {
            this.timer();
        }, 1000);
    }
    timer() {
        if (this.seconds < 59) {
            this.seconds++;
        }
        else {
            this.seconds = 0;
            if (this.minutes < 59) {
                this.minutes++;
            }
            else {
                this.minutes = 0;
                this.hours++;
            }
        }
    }
    ngOnInit() {
    }
    click() {
        if (this.clickService.win) {
            this.scoreService.setNumbers(this.seconds, this.minutes, this.hours, this.numberOfClicks);
            clearInterval(this.interval);
        }
        if (this.clickService.lastClicked != 9) {
            if (!this.started) {
                this.started = true;
                this.start();
            }
            if (this.paused)
                this.resume();
            this.numberOfClicks++;
        }
    }
    pause() {
        this.paused = true;
        clearInterval(this.interval);
    }
    resume() {
        if (this.clickService.lastClicked != 9) {
            this.paused = false;
            this.interval = setInterval(() => {
                this.timer();
            }, 1000);
        }
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ts_clickService__WEBPACK_IMPORTED_MODULE_1__["ClickService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ts_scoreService__WEBPACK_IMPORTED_MODULE_2__["ScoreService"])); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 13, vars: 13, consts: [[1, "container"], ["class", "start", 3, "click", 4, "ngIf"], ["class", "pause", 3, "click", 4, "ngIf"], ["class", "resume", 3, "click", 4, "ngIf"], [1, "info"], [1, "time"], ["class", "hours", 4, "ngIf"], [1, "clicks"], [3, "click"], [1, "start", 3, "click"], [1, "pause", 3, "click"], [1, "resume", 3, "click"], [1, "hours"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContainerComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContainerComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContainerComponent_span_6_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-grid", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerComponent_Template_app_grid_click_12_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.started);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.started && !ctx.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.started && ctx.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hours > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx.minutes, "2.0"), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, ctx.seconds, "2.0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Moves: ", ctx.numberOfClicks, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n   \r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: beige;\r\n    margin: 1em 0;\r\n    padding: 0 4em;\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n}\r\n\r\n.clicks[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n}\r\n\r\n.start[_ngcontent-%COMP%], .resume[_ngcontent-%COMP%] {\r\n    background-color: #06b61d;\r\n    color: white;\r\n    padding: 0.5em 4em;\r\n    border-radius: 0.2em;\r\n    border: 0;\r\n    font-size: large;\r\n}\r\n\r\n.pause[_ngcontent-%COMP%] {\r\n    background-color: #9c0808;\r\n    color: white;\r\n    padding: 0.5em 4em;\r\n    border-radius: 0.2em;\r\n    border: 0;\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgXHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHBhZGRpbmc6IDAgNGVtO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLmNsaWNrcyB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLnN0YXJ0LCAucmVzdW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmI2MWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSA0ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5wYXVzZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMwODA4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41ZW0gNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ "s7Ec");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions/instructions.component */ "CPi4");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "9jgp");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scores/scores.component */ "cERv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"] },
    { path: 'game', component: _container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"] },
    { path: 'scores', component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_4__["ScoresComponent"] },
    { path: 'instructions', component: _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_2__["InstructionsComponent"] },
    { path: '**', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map