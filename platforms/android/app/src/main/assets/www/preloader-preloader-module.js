(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preloader-preloader-module"],{

/***/ "./src/app/preloader/preloader.module.ts":
/*!***********************************************!*\
  !*** ./src/app/preloader/preloader.module.ts ***!
  \***********************************************/
/*! exports provided: PreloaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderPageModule", function() { return PreloaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preloader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preloader.page */ "./src/app/preloader/preloader.page.ts");







var routes = [
    {
        path: '',
        component: _preloader_page__WEBPACK_IMPORTED_MODULE_6__["PreloaderPage"]
    }
];
var PreloaderPageModule = /** @class */ (function () {
    function PreloaderPageModule() {
    }
    PreloaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preloader_page__WEBPACK_IMPORTED_MODULE_6__["PreloaderPage"]]
        })
    ], PreloaderPageModule);
    return PreloaderPageModule;
}());



/***/ }),

/***/ "./src/app/preloader/preloader.page.html":
/*!***********************************************!*\
  !*** ./src/app/preloader/preloader.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-header\">\n  <p>Home</p>\n  <p class=\"rate\"> &#9734; &#9734; &#9734; &#9734; &#9734;</p>\n</div>\n\n<button class=\"menu-button\"><a href=\"/home\">Play</a></button>\n<button class=\"menu-button button-second\"><a href=\"/developers\">Developers</a></button>\n<button class=\"menu-button button-third\" style=\"margin-bottom: 190px;\"><a href=\"/about\">About us</a></button>\n"

/***/ }),

/***/ "./src/app/preloader/preloader.page.scss":
/*!***********************************************!*\
  !*** ./src/app/preloader/preloader.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  padding: 65px;\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-top: 30px;\n  border: 0px;\n  letter-spacing: 2px;\n  font-weight: 600;\n  border-radius: 20px;\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#9668d7), to(#2a2f7d));\n  background-image: linear-gradient(to top right, #9668d7, #2a2f7d);\n  color: white;\n  font-size: 25px;\n  text-transform: uppercase;\n  outline: none;\n  font-family: 'Concert One', cursive; }\n\n.menu-button a {\n  text-decoration: none;\n  color: white;\n  padding: 38px; }\n\n.preloader-header {\n  background: #322850;\n  text-align: left;\n  padding: 15px;\n  padding-left: 30px;\n  font-size: 19px;\n  text-transform: capitalize;\n  color: #bfabe4;\n  margin-bottom: 10px;\n  letter-spacing: 2px;\n  font-weight: 700; }\n\n.rate {\n  text-align: right;\n  margin-bottom: 0px;\n  margin-top: -40px;\n  padding-bottom: 20px;\n  text-transform: none; }\n\n.button-third {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#1dbdb2), to(#7bea83)); }\n\n.button-second {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#f34484), to(#cd7eea)); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BST0pFQ1RTL0FyY2hpdmUgY29weS9zcmMvYXBwL3ByZWxvYWRlci9wcmVsb2FkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQiw4RkFBaUU7RUFBakUsaUVBQWlFO0VBQ2pFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksOEZBQThGLEVBQUE7O0FBRWxHO0VBQ0ksOEZBQThGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmVsb2FkZXIvcHJlbG9hZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJ1dHRvbntcbiAgICBwYWRkaW5nOiA2NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBmcm9tKCM5NjY4ZDcpLCB0bygjMmEyZjdkKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzk2NjhkNywgIzJhMmY3ZCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgXG59XG4ubWVudS1idXR0b24gYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDM4cHg7XG59XG4ucHJlbG9hZGVyLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjMzIyODUwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjYmZhYmU0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnJhdGV7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLmJ1dHRvbi10aGlyZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgZnJvbSgjMWRiZGIyKSwgdG8oIzdiZWE4MykpO1xufVxuLmJ1dHRvbi1zZWNvbmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGZyb20oI2YzNDQ4NCksIHRvKCNjZDdlZWEpKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/preloader/preloader.page.ts":
/*!*********************************************!*\
  !*** ./src/app/preloader/preloader.page.ts ***!
  \*********************************************/
/*! exports provided: PreloaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderPage", function() { return PreloaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreloaderPage = /** @class */ (function () {
    function PreloaderPage() {
    }
    PreloaderPage.prototype.ngOnInit = function () {
    };
    PreloaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preloader',
            template: __webpack_require__(/*! ./preloader.page.html */ "./src/app/preloader/preloader.page.html"),
            styles: [__webpack_require__(/*! ./preloader.page.scss */ "./src/app/preloader/preloader.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreloaderPage);
    return PreloaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=preloader-preloader-module.js.map