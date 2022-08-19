(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n    <div *ngFor=\"let c of col\" class=\"block\">\n      <div *ngFor=\"let r of row\" class=\"item\" (touchstart)=\"changeColor($event)\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: 100%; }\n\n.block {\n  width: 100%;\n  height: calc(100% /20);\n  display: -webkit-box;\n  display: flex; }\n\n.item {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e9fe06;\n  border-radius: 5px;\n  box-shadow: 1px 1px 50px #e9fe06;\n  -webkit-animation-name: coloring;\n          animation-name: coloring;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes coloring {\n  0% {\n    border: 1px solid #612d83;\n    box-shadow: 1px 1px 10px #612d83; }\n  25% {\n    border: 1px solid #440d79;\n    box-shadow: 1px 1px 10px #440d79; }\n  50% {\n    border: 1px solid #9745ce;\n    box-shadow: 1px 1px 10px #9745ce; }\n  75% {\n    border: 1px solid #560597;\n    box-shadow: 1px 1px 10px #560597; }\n  100% {\n    border: 1px solid #50007e;\n    box-shadow: 1px 1px 10px #50007e; }\n  75% {\n    border: 1px solid #612d83;\n    box-shadow: 1px 1px 10px #612d83; }\n  50% {\n    border: 1px solid #440d79;\n    box-shadow: 1px 1px 10px #440d79; }\n  25% {\n    border: 1px solid #9745ce;\n    box-shadow: 1px 1px 10px #9745ce; }\n  0% {\n    border: 1px solid #560597;\n    box-shadow: 1px 1px 10px #560597; } }\n\n@keyframes coloring {\n  0% {\n    border: 1px solid #612d83;\n    box-shadow: 1px 1px 10px #612d83; }\n  25% {\n    border: 1px solid #440d79;\n    box-shadow: 1px 1px 10px #440d79; }\n  50% {\n    border: 1px solid #9745ce;\n    box-shadow: 1px 1px 10px #9745ce; }\n  75% {\n    border: 1px solid #560597;\n    box-shadow: 1px 1px 10px #560597; }\n  100% {\n    border: 1px solid #50007e;\n    box-shadow: 1px 1px 10px #50007e; }\n  75% {\n    border: 1px solid #612d83;\n    box-shadow: 1px 1px 10px #612d83; }\n  50% {\n    border: 1px solid #440d79;\n    box-shadow: 1px 1px 10px #440d79; }\n  25% {\n    border: 1px solid #9745ce;\n    box-shadow: 1px 1px 10px #9745ce; }\n  0% {\n    border: 1px solid #560597;\n    box-shadow: 1px 1px 10px #560597; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BST0pFQ1RTL0FyY2hpdmUgY29weS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJDQUFtQztVQUFuQyxtQ0FBbUMsRUFBQTs7QUFtQnZDO0VBQ0c7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUEsRUFBQTs7QUFuQ3BDO0VBQ0c7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFFakM7SUFDQyx5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAua2xvcntcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuLy8gICAgIHdpZHRoOiAyODBweDtcbi8vICAgICBoZWlnaHQ6IDI4MHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbi8vIH1cbi8vIGJvZHl7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbi8vIH1cbi8vIC5iYWphbnVtMXtcbi8vICAgICBjb2xvcjp3aGl0ZTtcbi8vIH1cblxuLm1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmJsb2Nre1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC8yMCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cbi5pdGVte1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWZlMDY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNTBweCAjZTlmZTA2O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjb2xvcmluZztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4vLyAuaXRlbTpob3Zlcntcbi8vICAgICBiYWNrZ3JvdW5kOnJnYig0MywgMTMsIDEzKTtcbi8vICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNDBweCB3aGl0ZTtcbi8vICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcblxuLy8gfVxuXG4vLyBkb2N1bWVudC5vdmVybGF5ID0gR1BvbHlsaW5lLmZyb21FbmNvZGVkKHtcbi8vICAgICBjb2xvcjogXCIjMDAwMEZGXCIsXG4vLyAgICAgd2VpZ2h0OiAxMCxcbi8vICAgICBwb2ludHM6IGVuY29kZWRfcG9pbnRzLFxuLy8gICAgIHpvb21GYWN0b3I6IDMyLFxuLy8gICAgIGxldmVsczogZW5jb2RlZF9sZXZlbHMsXG4vLyAgICAgbnVtTGV2ZWxzOiA0XG4vLyB9KTtcblxuQGtleWZyYW1lcyBjb2xvcmluZyB7XG4gICAwJXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjEyZDgzO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjNjEyZDgzO1xuICAgfSBcbiAgIDI1JXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQwZDc5O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjNDQwZDc5O1xuICAgfSBcbiAgIDUwJXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc0NWNlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjOTc0NWNlO1xuICAgfSBcbiAgIDc1JXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTYwNTk3O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjNTYwNTk3O1xuICAgfSBcbiAgIDEwMCV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwMDA3ZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzUwMDA3ZTtcbiAgIH0gIFxuICAgNzUle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTJkODM7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM2MTJkODM7XG4gICB9IFxuICAgNTAle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDBkNzk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM0NDBkNzk7XG4gICB9IFxuICAgMjUle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NzQ1Y2U7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM5NzQ1Y2U7XG4gICB9IFxuICAgMCV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU2MDU5NztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzU2MDU5NztcbiAgIH0gXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    // colors: Array<string> = [];
    function HomePage() {
        this.row = [];
        this.col = [];
        this.i = 0;
        this.note = [];
        this.BigColorsArray = [];
        this.counter = 256;
        this.synth = new Tone.Synth().toMaster();
        this.row = Array.from({ length: 10 }, function (v, k) { return k + 1; });
        this.col = Array.from({ length: 20 }, function (v, k) { return k + 1; });
    }
    HomePage.prototype.changeColor = function (e) {
        var _this = this;
        // console.log(e)
        this.counter++;
        this.note = [
            "C2",
            "D#2",
            "F2",
            "F#2",
            "G2",
            "A#2",
            "C3",
            "D#3",
            "F3",
            "F#3",
            "G3",
            "A#3",
            "C4",
            "D#4",
            "F4",
            "F#4",
            "G4",
            "A#4",
            "C5",
            "D#5",
            "F5",
            "F#5",
            "G5",
            "A#5"
        ];
        console.log(this.note[this.i]);
        this.singleNote = this.note[this.i];
        this.i += 1;
        this.synth.triggerAttackRelease(this.singleNote, "4n");
        this.afterClickColor = ' linear-gradient(to right top, rgb(112, 25, 131), #c174f8)';
        this.red = Math.floor(Math.random() * 255 + 10);
        this.green = Math.floor(Math.random() * 255 + 10);
        this.blue = Math.floor(Math.random() * 255 + 10);
        this.arrayOfColors = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
        this.BigColorsArray.push(this.arrayOfColors);
        // console.log(this.arrayOfColors);
        if (this.note[this.i] == "A#5") {
            this.i = 0;
        }
        var colors = this.BigColorsArray;
        if (this.counter > 255) {
            this.counter = 0;
        }
        var randomColor = colors[this.counter];
        e.target.style.background = randomColor;
        setTimeout(function () { e.target.style.backgroundImage = _this.afterClickColor; }, 200);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map