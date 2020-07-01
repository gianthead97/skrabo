(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/playground/playground.component.ts");






const routes = [
    { path: '', component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] },
    { path: 'game', component: _playground_playground_component__WEBPACK_IMPORTED_MODULE_3__["PlaygroundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'skrabo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0NBV0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLypcbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDsgIHdpZHRoOiBhdXRvO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiMjI1MzQuanBnXCIpOyAvKmhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLyp3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcbn1cbiovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./whiteboard/whiteboard.component */ "./src/app/whiteboard/whiteboard.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/playground/playground.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // tslint:disable-next-line: deprecation
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
        _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__["WhiteboardComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
        _playground_playground_component__WEBPACK_IMPORTED_MODULE_9__["PlaygroundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // tslint:disable-next-line: deprecation
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                    _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__["WhiteboardComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                    _playground_playground_component__WEBPACK_IMPORTED_MODULE_9__["PlaygroundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // tslint:disable-next-line: deprecation
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = function (a0) { return { "color": a0 }; };
function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.data.colors[i_r3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
} }
class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.data = {
            messages: [],
            colors: []
        };
        this.chatService
            .getMessages()
            .subscribe(({ message, color }) => {
            this.data.messages.push(message);
            this.data.colors.push(color);
        });
    }
    sendMessage() {
        this.chatService.sendMessage(this.message);
        this.message = '';
    }
    ngOnInit() {
        // setup for sending text by Enter
        this.input = document.getElementById('text');
        this.input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('send').click();
            }
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 8, vars: 3, consts: [["id", "chat", 3, "scrollTop"], ["scrollMe", ""], ["id", "message", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "input"], ["id", "text", 3, "ngModel", "ngModelChange"], ["id", "send", 3, "click"], ["id", "message", 3, "ngStyle"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_5_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_6_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r0.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["#chat[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 300px;\n    height: 500px;\n    background-color: white;\n}\n\n#input[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n@font-face {\n    font-family: 'Comic Sans MS';\n    src: 'ComicSansMS.ttf';\n}\n\n#message[_ngcontent-%COMP%] {\n    word-wrap:break-word;\n    width: 250px;\n    display: block;\n    font-size: large;\n    font-style: bold;\n    font: 'Comic Sans MS';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJztcbiAgICBzcmM6ICdDb21pY1NhbnNNUy50dGYnO1xufVxuXG4jbWVzc2FnZSB7XG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBmb250OiAnQ29taWMgU2FucyBNUyc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FormComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ovo je tekst o nama... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ovo je tekst o nama... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ovo je tekst o nama... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Uputstva za igru idu ovde... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Uputstva za igru idu ovde... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Uputstva za igru idu ovde... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/game"]; };
class FormComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.prikaziInfo = false;
        this.prikaziPravila = false;
        this.pridruzivanjeSobi = true;
        this.pravljenjeNoveSobe = true;
    }
    ngOnInit() {
    }
    get getPravljenjeNoveSobe() {
        return this.pravljenjeNoveSobe;
    }
    get getPrikaziPravila() {
        return this.prikaziPravila;
    }
    get getPrikaziInfo() {
        return this.prikaziInfo;
    }
    get getPridruzivanjeSobi() {
        return this.pridruzivanjeSobi;
    }
    onPrikaziInfo() {
        this.prikaziInfo = !this.prikaziInfo;
    }
    onPrikaziPravila() {
        this.prikaziPravila = !this.prikaziPravila;
    }
    onPridruzivanjeSobi() {
        this.pridruzivanjeSobi = !this.pridruzivanjeSobi;
        this.pravljenjeNoveSobe = true;
    }
    onPravljenjeNoveSobe() {
        this.pravljenjeNoveSobe = !this.pravljenjeNoveSobe;
        this.pridruzivanjeSobi = true;
    }
    // Metod za komunikaciju sa chat servisom. Postavlja username naseg korisnika.
    // I u zavisnosti da li je popunio polje za pridruzivanje ili za kreiranje 
    // nove sobe chat servis vrsi neophodne operacije.
    onUnosImena(username, roomCode, roomName) {
        this.chatService.setUsername(username);
        if (roomCode !== '') {
            this.chatService.joinToRoom(roomCode);
        }
        else if (roomName !== '') {
            this.chatService.createNewRoomRequest(roomName);
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 56, vars: 6, consts: [["rel", "icon", "href", "assets/cope.jpg", "type", "image/gif", "sizes", "16x16"], [1, "content"], [2, "cursor", "default"], [1, "olovka", "olovka_naslov"], [1, "gumica"], [1, "sredina"], [1, "spic"], [1, "vrh"], [1, "alert-primary"], [1, "form-group"], ["for", "ime"], ["type", "text", "id", "ime", 1, "form-control"], ["ime", ""], [1, "okvir"], [1, "animacija"], [1, "olovka"], [1, "dugme"], [1, "dugme-osnovno", 3, "routerLink", "click"], ["id", "btnPridruziSeSobi", 1, "dugme-osnovno", 3, "click"], [3, "hidden"], ["for", "kodSobe"], ["type", "text", "name", "kodSobe", "id", "kodSobe"], ["kodSobe", ""], ["id", "btnNovaSoba", 1, "dugme-osnovno", 3, "click"], ["for", "imeSobe"], ["type", "text", "name", "imeSobe", "id", "imeSobe"], ["imeSobe", ""], [1, "parent"], ["src", "assets/cope.jpg", "alt", "skrabo", "width", "150", "height", "150", 1, "image1"], ["src", "assets/ananas.png", "alt", "skrabo", "width", "150", "height", "150", 1, "image2"], ["src", "assets/ker.png", "alt", "skrabo", "width", "150", "height", "150", 1, "image3"], [1, "sadrzaj"], [2, "cursor", "help", 3, "click"], ["class", "tekst", 4, "ngIf"], [1, "tekst"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0160krabo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unesi ime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.onUnosImena(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Igraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_28_listener() { return ctx.onPridruzivanjeSobi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pridruzi se postojecoj sobi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Unesi ime sobe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_37_listener() { return ctx.onPravljenjeNoveSobe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Kreiraj privatnu sobu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Unesi ime sobe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_h2_click_50_listener() { return ctx.onPrikaziInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "O nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FormComponent_p_52_Template, 7, 0, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_h2_click_53_listener() { return ctx.onPrikaziPravila(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pravila igre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, FormComponent_p_55_Template, 7, 0, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.getPridruzivanjeSobi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.getPravljenjeNoveSobe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getPrikaziInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getPrikaziPravila);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    background-image: url('pozadina.jpg');\n    background-size: cover;\n    width: 100vw; height: 100vh;\n    font-family: sans-serif;\n  }\n  \n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    display: block; width: 100%;\n    text-align: center; padding: 10px;\n    font-size: 60px; font-weight: 600;\n    color: lightseagreen;\n    position: relative; margin-top:10px;\n  }\n  \n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .olovka_naslov[_ngcontent-%COMP%] {top: initial; left: initial; display: inline-block; transform: rotate(30deg)}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .sredina[_ngcontent-%COMP%] {width: 14px; height: 40px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .sredina[_ngcontent-%COMP%]:after {left: 2px; height: 40px; width: 1px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .sredina[_ngcontent-%COMP%]:before {right: 2px; height: 40px; width: 1px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .gumica[_ngcontent-%COMP%] {width: 14px; height: 8px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .spic[_ngcontent-%COMP%] {border-top: 14px solid #ffbf80; border-right: 6px solid transparent; border-left: 6px solid transparent; position: relative; width: 0px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .spic[_ngcontent-%COMP%]:before {height: 15px; top:-16px; left:-4px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .spic[_ngcontent-%COMP%]:after {height: 15px; top:-16px; right:-4px}\n  \n  .olovka_naslov[_ngcontent-%COMP%]   .vrh[_ngcontent-%COMP%] {border-top: 6px solid #0a0a0a; border-right: 3px solid transparent; border-left: 3px solid transparent; top: -5px; right: -2px}\n  \n  .sadrzaj[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content; width: 20%;\n    text-align: center; font-size: 30px;\n    color: violet; margin: 40px 10px 10px 40px;\n    position: absolute; top: 150px; left: 70%;\n  }\n  \n  h2[_ngcontent-%COMP%] {font-size: 30px}\n  \n  \n  \n  .okvir[_ngcontent-%COMP%] {background: #fff; width: 400px; height: 200px; margin: 10px 50px; position: relative}\n  \n  .animacija[_ngcontent-%COMP%] {\n    background: black; width: 20px; height: 1px; position: absolute; left: 100px; top: 112px;\n    -webkit-animation-name: iscrtavanje;\n            animation-name: iscrtavanje; -webkit-animation-duration: 1.5s; animation-duration: 1.5s; -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite;\n  }\n  \n  \n  \n  .okvir[_ngcontent-%COMP%]   .olovka[_ngcontent-%COMP%] {\n    width: 100px; height: 120px; display: flex; flex-direction: column; flex-wrap: wrap;\n    justify-content: center; align-content: center; transform: rotate(30deg); position: absolute;\n    left: 100px; z-index: 100; -webkit-animation-name: pomeranje; animation-name: pomeranje; -webkit-animation-duration: 1.5s; animation-duration: 1.5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;\n  }\n  \n  .gumica[_ngcontent-%COMP%] {width: 30px; height: 15px; border: 2px solid #0a0a0a; background: #ff9999; border-radius: 5px 5px 0 0; border-bottom: none; box-shadow: 2px 1px 3px #5c6f70}\n  \n  .sredina[_ngcontent-%COMP%] {width: 30px; height: 70px; border: 2px solid #0a0a0a; position: relative; background: #ffa704; box-shadow: 2px 1px 3px #5c6f70}\n  \n  .sredina[_ngcontent-%COMP%]:after {content: \"\"; height: 70px; width: 2px; background: #0a0a0a; position: absolute; left: 5px}\n  \n  .sredina[_ngcontent-%COMP%]:before{content:\"\"; height: 70px;width: 2px;background: #0a0a0a;position: absolute;right:6px}\n  \n  .spic[_ngcontent-%COMP%] {border-top: 25px solid #ffbf80; border-right: 16px solid transparent; border-left: 16px solid transparent; position: relative}\n  \n  .spic[_ngcontent-%COMP%]:before {content: \"\"; height: 31px; border-right: 2px solid #0a0a0a; position: absolute; transform: rotate(-30deg); top: -27px; left: -8px}\n  \n  .spic[_ngcontent-%COMP%]:after {content: \"\"; height: 31px; border-right: 2px solid #0a0a0a; position: absolute; transform: rotate(30deg); top: -27px; right: -8px; box-shadow: 2px 1px 3px #5c6f70}\n  \n  .vrh[_ngcontent-%COMP%] {border-top: 10px solid #0a0a0a; border-left: 6px solid transparent; border-right: 6px solid transparent; position: absolute; z-index: 10; top: -6px; right: -5px}\n  \n  \n  \n  @-webkit-keyframes pomeranje{\n    0%{left: 110px;}\n    10%{left: 120px;}\n    20%{left: 130px;}\n    30%{left: 140px;}\n    40%{left: 150px;}\n    50%{left: 160px;}\n    60%{left: 170px;}\n    70%{left: 180px;}\n    80%{left: 190px;}\n    90%{left: 200px;}\n    100%{left: 210px;}\n  }\n  \n  @keyframes pomeranje{\n    0%{left: 110px;}\n    10%{left: 120px;}\n    20%{left: 130px;}\n    30%{left: 140px;}\n    40%{left: 150px;}\n    50%{left: 160px;}\n    60%{left: 170px;}\n    70%{left: 180px;}\n    80%{left: 190px;}\n    90%{left: 200px;}\n    100%{left: 210px;}\n  }\n  \n  @-webkit-keyframes iscrtavanje{\n     0%{width: 40px;}\n    10%{width: 50px;}\n    20%{width: 60px;}\n    30%{width: 70px;}\n    40%{width: 80px;}\n    50%{width: 90px;}\n    60%{width: 100px;}\n    70%{width: 110px;}\n    80%{width: 120px;}\n    90%{width: 130px;}\n    100%{width: 140px;}\n  }\n  \n  @keyframes iscrtavanje{\n     0%{width: 40px;}\n    10%{width: 50px;}\n    20%{width: 60px;}\n    30%{width: 70px;}\n    40%{width: 80px;}\n    50%{width: 90px;}\n    60%{width: 100px;}\n    70%{width: 110px;}\n    80%{width: 120px;}\n    90%{width: 130px;}\n    100%{width: 140px;}\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    padding: 0% 2%;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    margin: 10px 50px; position: relative;\n  }\n  \n  .dugme[_ngcontent-%COMP%] {\n    margin: 10px 50px; position: relative;\n  }\n  \n  .dugme-osnovno[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    border: none;\n    color: white;\n    padding: 10px 24px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 8px;\n    width: 100%;\n  }\n  \n  #btnPridruziSeSobi[_ngcontent-%COMP%] {\n    background-color: darkorange;\n  }\n  \n  #btnNovaSoba[_ngcontent-%COMP%] {\n    background-color: blueviolet;\n  }\n  \n  .alert-primary[_ngcontent-%COMP%] {\n    padding: 10px 0px 25px;\n    position: absolute;\n    top: 150px; left: 40px;\n  }\n  \n  .parent[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 150px; left: 600px;\n    margin-bottom: 10px;\n  }\n  \n  .image1[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20px;\n    border: 2px solid violet;\n    border-radius: 8px;\n  }\n  \n  .image2[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 150px; left: 120px;\n    border: 2px solid violet;\n    border-radius: 8px;\n  }\n  \n  .image3[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 250px; left: 0px;\n    border: 2px solid violet;\n    border-radius: 8px;\n  }\n  \n  .tekst[_ngcontent-%COMP%] {\n    font-size: 18px; color: blueviolet; cursor: default;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUNBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QixZQUFZLEVBQUUsYUFBYTtJQUMzQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGNBQWMsRUFBRSxXQUFXO0lBQzNCLGtCQUFrQixFQUFFLGFBQWE7SUFDakMsZUFBZSxFQUFFLGdCQUFnQjtJQUNqQyxvQkFBb0I7SUFDcEIsa0JBQWtCLEVBQUUsZUFBZTtFQUNyQzs7RUFFQSw0QkFBNEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0I7O0VBQ3hHLHlCQUF5QixXQUFXLEVBQUUsWUFBWTs7RUFDbEQsK0JBQStCLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVTs7RUFDbEUsZ0NBQWdDLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVTs7RUFDcEUsd0JBQXdCLFdBQVcsRUFBRSxXQUFXOztFQUNoRCxzQkFBc0IsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsa0JBQWtCLEVBQUUsVUFBVTs7RUFDN0osNkJBQTZCLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUzs7RUFDL0QsNEJBQTRCLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVTs7RUFDL0QscUJBQXFCLDZCQUE2QixFQUFFLG1DQUFtQyxFQUFFLGtDQUFrQyxFQUFFLFNBQVMsRUFBRSxXQUFXOztFQUVuSjtJQUNFLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CLEVBQUUsVUFBVTtJQUMvQixrQkFBa0IsRUFBRSxlQUFlO0lBQ25DLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFNBQVM7RUFDM0M7O0VBQ0EsSUFBSSxlQUFlOztFQUVuQixtQkFBbUI7O0VBQ25CLFFBQVEsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0I7O0VBQzVGO0lBQ0UsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsVUFBVTtJQUN4RixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUUsZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFLDJDQUFtQyxFQUFuQyxtQ0FBbUM7RUFDNUY7O0VBRUEsU0FBUzs7RUFDVDtJQUNFLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGVBQWU7SUFDbkYsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCO0lBQzVGLFdBQVcsRUFBRSxZQUFZLEVBQUUsaUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFLGdDQUF3QixFQUF4Qix3QkFBd0I7SUFDOUUsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFFLDJDQUFtQyxFQUFuQyxtQ0FBbUM7RUFDMUU7O0VBQ0EsU0FBUyxXQUFXLEVBQUUsWUFBWSxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLCtCQUErQjs7RUFDcEssVUFBVSxXQUFXLEVBQUUsWUFBWSxFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLCtCQUErQjs7RUFDeEksZ0JBQWdCLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLFNBQVM7O0VBQ3pHLGdCQUFnQixVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTOztFQUNwRyxPQUFPLDhCQUE4QixFQUFFLG9DQUFvQyxFQUFFLG1DQUFtQyxFQUFFLGtCQUFrQjs7RUFDcEksY0FBYyxXQUFXLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxVQUFVOztFQUMvSSxhQUFhLFdBQVcsRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSwrQkFBK0I7O0VBQy9LLE1BQU0sOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXOztFQUV0SyxZQUFZOztFQUNaO0lBQ0UsR0FBRyxXQUFXLENBQUM7SUFDZixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixLQUFLLFdBQVcsQ0FBQztFQUNuQjs7RUFaQTtJQUNFLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7RUFDbkI7O0VBQ0E7S0FDRyxHQUFHLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztJQUNqQixLQUFLLFlBQVksQ0FBQztFQUNwQjs7RUFaQTtLQUNHLEdBQUcsV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQUksWUFBWSxDQUFDO0lBQ2pCLEtBQUssWUFBWSxDQUFDO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQixFQUFFLGtCQUFrQjtFQUN2Qzs7RUFFQTtJQUNFLGlCQUFpQixFQUFFLGtCQUFrQjtFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLFVBQVU7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLFdBQVc7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0VBQ3JEIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvemFkaW5hLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiA2MHB4OyBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLXRvcDoxMHB4O1xuICB9XG4gIFxuICAuY29udGVudCBoMSAub2xvdmthX25hc2xvdiB7dG9wOiBpbml0aWFsOyBsZWZ0OiBpbml0aWFsOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKX1cbiAgLm9sb3ZrYV9uYXNsb3YgLnNyZWRpbmEge3dpZHRoOiAxNHB4OyBoZWlnaHQ6IDQwcHh9XG4gIC5vbG92a2FfbmFzbG92IC5zcmVkaW5hOmFmdGVyIHtsZWZ0OiAycHg7IGhlaWdodDogNDBweDsgd2lkdGg6IDFweH1cbiAgLm9sb3ZrYV9uYXNsb3YgLnNyZWRpbmE6YmVmb3JlIHtyaWdodDogMnB4OyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiAxcHh9XG4gIC5vbG92a2FfbmFzbG92IC5ndW1pY2Ege3dpZHRoOiAxNHB4OyBoZWlnaHQ6IDhweH1cbiAgLm9sb3ZrYV9uYXNsb3YgLnNwaWMge2JvcmRlci10b3A6IDE0cHggc29saWQgI2ZmYmY4MDsgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDBweH1cbiAgLm9sb3ZrYV9uYXNsb3YgLnNwaWM6YmVmb3JlIHtoZWlnaHQ6IDE1cHg7IHRvcDotMTZweDsgbGVmdDotNHB4fVxuICAub2xvdmthX25hc2xvdiAuc3BpYzphZnRlciB7aGVpZ2h0OiAxNXB4OyB0b3A6LTE2cHg7IHJpZ2h0Oi00cHh9XG4gIC5vbG92a2FfbmFzbG92IC52cmgge2JvcmRlci10b3A6IDZweCBzb2xpZCAjMGEwYTBhOyBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDsgdG9wOiAtNXB4OyByaWdodDogLTJweH1cbiAgXG4gIC5zYWRyemFqIHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50OyB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB2aW9sZXQ7IG1hcmdpbjogNDBweCAxMHB4IDEwcHggNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTUwcHg7IGxlZnQ6IDcwJTtcbiAgfVxuICBoMiB7Zm9udC1zaXplOiAzMHB4fVxuICBcbiAgLypPS1ZJUiBaQSBDUlRBTkpFKi9cbiAgLm9rdmlyIHtiYWNrZ3JvdW5kOiAjZmZmOyB3aWR0aDogNDAwcHg7IGhlaWdodDogMjAwcHg7IG1hcmdpbjogMTBweCA1MHB4OyBwb3NpdGlvbjogcmVsYXRpdmV9XG4gIC5hbmltYWNpamEge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyB3aWR0aDogMjBweDsgaGVpZ2h0OiAxcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwcHg7IHRvcDogMTEycHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGlzY3J0YXZhbmplOyBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7IGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG4gIFxuICAvKk9MT1ZLQSovXG4gIC5va3ZpciAub2xvdmthIHtcbiAgICB3aWR0aDogMTAwcHg7IGhlaWdodDogMTIwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24tY29udGVudDogY2VudGVyOyB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDBweDsgei1pbmRleDogMTAwOyBhbmltYXRpb24tbmFtZTogcG9tZXJhbmplOyBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIC5ndW1pY2Ege3dpZHRoOiAzMHB4OyBoZWlnaHQ6IDE1cHg7IGJvcmRlcjogMnB4IHNvbGlkICMwYTBhMGE7IGJhY2tncm91bmQ6ICNmZjk5OTk7IGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwOyBib3JkZXItYm90dG9tOiBub25lOyBib3gtc2hhZG93OiAycHggMXB4IDNweCAjNWM2ZjcwfVxuICAuc3JlZGluYSB7d2lkdGg6IDMwcHg7IGhlaWdodDogNzBweDsgYm9yZGVyOiAycHggc29saWQgIzBhMGEwYTsgcG9zaXRpb246IHJlbGF0aXZlOyBiYWNrZ3JvdW5kOiAjZmZhNzA0OyBib3gtc2hhZG93OiAycHggMXB4IDNweCAjNWM2ZjcwfVxuICAuc3JlZGluYTphZnRlciB7Y29udGVudDogXCJcIjsgaGVpZ2h0OiA3MHB4OyB3aWR0aDogMnB4OyBiYWNrZ3JvdW5kOiAjMGEwYTBhOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDVweH1cbiAgLnNyZWRpbmE6YmVmb3Jle2NvbnRlbnQ6XCJcIjsgaGVpZ2h0OiA3MHB4O3dpZHRoOiAycHg7YmFja2dyb3VuZDogIzBhMGEwYTtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6NnB4fVxuICAuc3BpYyB7Ym9yZGVyLXRvcDogMjVweCBzb2xpZCAjZmZiZjgwOyBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50OyBwb3NpdGlvbjogcmVsYXRpdmV9XG4gIC5zcGljOmJlZm9yZSB7Y29udGVudDogXCJcIjsgaGVpZ2h0OiAzMXB4OyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMGEwYTBhOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7IHRvcDogLTI3cHg7IGxlZnQ6IC04cHh9XG4gIC5zcGljOmFmdGVyIHtjb250ZW50OiBcIlwiOyBoZWlnaHQ6IDMxcHg7IGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwYTBhMGE7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB0b3A6IC0yN3B4OyByaWdodDogLThweDsgYm94LXNoYWRvdzogMnB4IDFweCAzcHggIzVjNmY3MH1cbiAgLnZyaCB7Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjMGEwYTBhOyBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAxMDsgdG9wOiAtNnB4OyByaWdodDogLTVweH1cbiAgXG4gIC8qQU5JTUFDSUpFKi9cbiAgQGtleWZyYW1lcyBwb21lcmFuamV7XG4gICAgMCV7bGVmdDogMTEwcHg7fVxuICAgIDEwJXtsZWZ0OiAxMjBweDt9XG4gICAgMjAle2xlZnQ6IDEzMHB4O31cbiAgICAzMCV7bGVmdDogMTQwcHg7fVxuICAgIDQwJXtsZWZ0OiAxNTBweDt9XG4gICAgNTAle2xlZnQ6IDE2MHB4O31cbiAgICA2MCV7bGVmdDogMTcwcHg7fVxuICAgIDcwJXtsZWZ0OiAxODBweDt9XG4gICAgODAle2xlZnQ6IDE5MHB4O31cbiAgICA5MCV7bGVmdDogMjAwcHg7fVxuICAgIDEwMCV7bGVmdDogMjEwcHg7fVxuICB9XG4gIEBrZXlmcmFtZXMgaXNjcnRhdmFuamV7XG4gICAgIDAle3dpZHRoOiA0MHB4O31cbiAgICAxMCV7d2lkdGg6IDUwcHg7fVxuICAgIDIwJXt3aWR0aDogNjBweDt9XG4gICAgMzAle3dpZHRoOiA3MHB4O31cbiAgICA0MCV7d2lkdGg6IDgwcHg7fVxuICAgIDUwJXt3aWR0aDogOTBweDt9XG4gICAgNjAle3dpZHRoOiAxMDBweDt9XG4gICAgNzAle3dpZHRoOiAxMTBweDt9XG4gICAgODAle3dpZHRoOiAxMjBweDt9XG4gICAgOTAle3dpZHRoOiAxMzBweDt9XG4gICAgMTAwJXt3aWR0aDogMTQwcHg7fVxuICB9XG4gIFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAwJSAyJTtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbjogMTBweCA1MHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5kdWdtZSB7XG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmR1Z21lLW9zbm92bm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgI2J0blByaWRydXppU2VTb2JpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuICB9XG5cbiAgI2J0bk5vdmFTb2JhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICB9XG4gIFxuICAuYWxlcnQtcHJpbWFyeSB7XG4gICAgcGFkZGluZzogMTBweCAwcHggMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDsgbGVmdDogNDBweDtcbiAgfVxuICBcbiAgLnBhcmVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUwcHg7IGxlZnQ6IDYwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5pbWFnZTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmlvbGV0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAuaW1hZ2UyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDsgbGVmdDogMTIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmlvbGV0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAuaW1hZ2UzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNTBweDsgbGVmdDogMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZpb2xldDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgXG4gIC50ZWtzdCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogYmx1ZXZpb2xldDsgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
const names = __webpack_require__(/*! ../../assets/names.json */ "./src/assets/names.json");
const colors = __webpack_require__(/*! ../../assets/colors.json */ "./src/assets/colors.json");
class UserData {
    // koristicemo javne prom da bismo
    // im lakse pristupali
    constructor(name, points, message, color) {
        this.name = name;
        this.points = points;
        this.message = message;
        this.color = color;
        const indexColor = Math.floor(Math.random() * colors.length);
        this.color = colors[indexColor];
        if (this.name === '') {
            const indexName = Math.floor(Math.random() * names.length);
            this.name = names[indexName];
        }
    }
}


/***/ }),

/***/ "./src/app/playground/playground.component.ts":
/*!****************************************************!*\
  !*** ./src/app/playground/playground.component.ts ***!
  \****************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../whiteboard/whiteboard.component */ "./src/app/whiteboard/whiteboard.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/chat/chat.component.ts");




class PlaygroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(); };
PlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["app-playground"]], decls: 6, vars: 0, consts: [["rel", "icon", "href", "assets/cope.jpg", "type", "image/gif", "sizes", "16x16"], ["id", "chat"]], template: function PlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-whiteboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_1__["WhiteboardComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]], styles: ["#chat[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: 80px;\n    margin-left: 60%;\n}\nbody[_ngcontent-%COMP%] {\n    background-image: url('pozadina.jpg');\n    background-size: cover;\n    width: 100vw; height: 100vh;\n    font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUNBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QixZQUFZLEVBQUUsYUFBYTtJQUMzQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGF0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xufVxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvemFkaW5hLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playground',
                templateUrl: './playground.component.html',
                styleUrls: ['./playground.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/canvas.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/canvas.service.ts ***!
  \********************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");




class CanvasService {
    constructor(socketService) {
        this.socketService = socketService;
        this.url = 'http://localhost:3000';
    }
    sendCanvasData(data) {
        this.socketService.socket.emit('client-drawing', data);
    }
    getCanvasEvent() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socketService.socket.on('drawing', (data) => {
                observer.next(data);
            });
        });
    }
}
CanvasService.ɵfac = function CanvasService_Factory(t) { return new (t || CanvasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
CanvasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanvasService, factory: CanvasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _utils_http_error_handler_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/http-error-handler.model */ "./src/app/utils/http-error-handler.model.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class ChatService extends _utils_http_error_handler_model__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] {
    constructor(socketService, http, router) {
        super(router);
        this.socketService = socketService;
        this.http = http;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserData"]('', 0, '', '');
    }
    setUsername(username) {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserData"](username, 0, '', '');
    }
    getColor() {
        return this.user.color;
    }
    joinToRoom(code) {
        this.socketService.socket.emit('joinGame', { code });
    }
    createNewRoomRequest(roomName) {
        this.http.post(this.socketService.url + '/createRoom', { "name": roomName })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(super.handleError()))
            .subscribe(code => {
            this.socketService.socket.emit('joinGame', code);
            window.alert(code);
        });
    }
    sendMessage(message) {
        this.user.message = message;
        this.socketService.socket.emit('new-message', {
            message: `${this.user.name}: ${this.user.message}`,
            color: this.user.color
        });
    }
    getMessages() {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socketService.socket.on('message', ({ message, color }) => {
                observer.next({ message, color });
            });
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);



class SocketService {
    constructor() {
        this.URL = 'http://localhost:' + (process.env.PORT || 3000);
        this.sock = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.URL);
    }
    get socket() {
        return this.sock;
    }
    get url() {
        return this.URL;
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utils/http-error-handler.model.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/http-error-handler.model.ts ***!
  \***************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class HttpErrorHandler {
    constructor(router) {
        this.router = router;
    }
    handleError() {
        return (error) => {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                this.router.navigate([
                    '/error',
                    { message: error.error.message, statusCode: error.status },
                ]);
            }
            // return an observable with a user-facing error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
        };
    }
}


/***/ }),

/***/ "./src/app/whiteboard/whiteboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/whiteboard/whiteboard.component.ts ***!
  \****************************************************/
/*! exports provided: WhiteboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteboardComponent", function() { return WhiteboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/canvas.service */ "./src/app/services/canvas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class WhiteboardComponent {
    constructor(canvasService) {
        this.canvasService = canvasService;
        this.active = false;
        this.canvasService
            .getCanvasEvent()
            .subscribe((data) => {
            const img = new Image();
            img.src = data;
            // console.log(data);
            this.ctx.drawImage(img, 0, 0);
        });
    }
    sendCanvasData() {
        this.canvasService.sendCanvasData(this.board.toDataURL());
    }
    ngOnInit() {
        this.penColor = 'black';
        this.penSize = 5;
        this.htmlCanvas = document.getElementById('board');
        this.rectCanvas = this.htmlCanvas.getBoundingClientRect();
        this.board = document.getElementById('board');
        this.ctx = this.board.getContext('2d');
        this.board.addEventListener('mousedown', (evt) => {
            // console.log(evt);
            this.sendCanvasData();
            this.startDrawing(evt);
        });
        this.board.addEventListener('mouseup', (evt) => {
            // console.log(evt);
            this.sendCanvasData();
            this.endDrawing();
        });
        this.board.addEventListener('mousemove', (evt) => {
            // console.log(evt);
            this.sendCanvasData();
            this.draw(evt);
        });
    }
    startDrawing(e) {
        this.active = true;
        this.draw(e);
        // console.log('start drawing: active:' + this.active);
    }
    endDrawing() {
        this.active = false;
        this.ctx.beginPath();
        // console.log('end drawing: active:' + this.active);
    }
    draw(e) {
        // console.log('drawing...' + this.rectCanvas.left + this.rectCanvas.top);
        if (!this.active) {
            return;
        }
        this.ctx.lineWidth = this.penSize;
        this.ctx.strokeStyle = this.penColor;
        this.ctx.lineCap = 'round';
        this.ctx.lineTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);
    }
    onClearCanvas() {
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        this.sendCanvasData();
    }
    onPenSmall() {
        this.penSize = 5;
    }
    onPenMidSmall() {
        this.penSize = 10;
    }
    onPenMidBig() {
        this.penSize = 20;
    }
    onPenBig() {
        this.penSize = 35;
    }
    setColor() {
        return { background: this.penColor };
    }
}
WhiteboardComponent.ɵfac = function WhiteboardComponent_Factory(t) { return new (t || WhiteboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"])); };
WhiteboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhiteboardComponent, selectors: [["app-whiteboard"]], decls: 34, vars: 1, consts: [[2, "cursor", "default"], ["id", "canvas"], ["id", "board", "width", "740px", "height", "450px"], ["id", "icons"], ["id", "iconBigCurrent", 1, "iconBig", 3, "ngStyle"], [1, "iconSmall"], ["id", "iconColor0", 1, "icon", 3, "click"], ["id", "iconColor1", 1, "icon", 3, "click"], ["id", "iconColor2", 1, "icon", 3, "click"], ["id", "iconColor3", 1, "icon", 3, "click"], ["id", "iconColor4", 1, "icon", 3, "click"], ["id", "iconColor5", 1, "icon", 3, "click"], ["id", "iconColor6", 1, "icon", 3, "click"], ["id", "iconColor7", 1, "icon", 3, "click"], ["id", "iconColor8", 1, "icon", 3, "click"], ["id", "iconColor9", 1, "icon", 3, "click"], ["id", "iconColor10", 1, "icon", 3, "click"], ["id", "iconColor11", 1, "icon", 3, "click"], ["id", "iconColor12", 1, "icon", 3, "click"], ["id", "iconColor13", 1, "icon", 3, "click"], ["id", "iconColor14", 1, "icon", 3, "click"], ["id", "iconColor15", 1, "icon", 3, "click"], ["id", "iconColor16", 1, "icon", 3, "click"], ["id", "iconColor17", 1, "icon", 3, "click"], ["id", "iconColor18", 1, "icon", 3, "click"], ["id", "iconColor19", 1, "icon", 3, "click"], ["id", "iconColor20", 1, "icon", 3, "click"], ["id", "iconColor21", 1, "icon", 3, "click"], ["id", "bigIcon0", 1, "iconBig", 3, "click"], ["id", "bigIcon1", 1, "iconBig", 3, "click"], ["id", "bigIcon2", 1, "iconBig", 3, "click"], ["id", "bigIcon3", 1, "iconBig", 3, "click"], ["id", "bigIcon4", 1, "iconBig", 3, "click"]], template: function WhiteboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0160krabo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_7_listener() { return ctx.penColor = "#000000"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_8_listener() { return ctx.penColor = "#808080"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_9_listener() { return ctx.penColor = "#99004c"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_10_listener() { return ctx.penColor = "#ff0000"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_11_listener() { return ctx.penColor = "#ff7b00"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_12_listener() { return ctx.penColor = "#ffee00"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_13_listener() { return ctx.penColor = "#00ff00"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_14_listener() { return ctx.penColor = "#00994c"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_15_listener() { return ctx.penColor = "#00cccc"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_16_listener() { return ctx.penColor = "#0066cc"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_17_listener() { return ctx.penColor = "#0000cc"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_18_listener() { return ctx.penColor = "#ffffff"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_19_listener() { return ctx.penColor = "#c0c0c0"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_20_listener() { return ctx.penColor = "#ff3366"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_21_listener() { return ctx.penColor = "#ff6666"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_22_listener() { return ctx.penColor = "#ffb266"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_23_listener() { return ctx.penColor = "#ffff66"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_24_listener() { return ctx.penColor = "#66ff66"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_25_listener() { return ctx.penColor = "#00cc66"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_26_listener() { return ctx.penColor = "#33ff99"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_27_listener() { return ctx.penColor = "#ff66ff"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_28_listener() { return ctx.penColor = "#990099"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_29_listener() { return ctx.onPenSmall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_30_listener() { return ctx.onPenMidSmall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_31_listener() { return ctx.onPenMidBig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_32_listener() { return ctx.onPenBig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteboardComponent_Template_div_click_33_listener() { return ctx.onClearCanvas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setColor());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["body[_ngcontent-%COMP%] {\n    background-image: url('pozadina.jpg');\n    background-size: cover;\n    width: 100vw; height: 100vh;\n    font-family: sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n    display: block; width: 80%;\n    text-align: left; padding: 10px 0px;\n    font-size: 50px; font-weight: 600;\n    color: lightseagreen;\n    position: absolute;\n    margin-left: 20%;\n    margin-top: 5px;\n    \n}\n\n#chat[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: 80px;\n    margin-left: 60%;\n}\n\n#board[_ngcontent-%COMP%] {\n    background-color: white;\n    border: 2px solid violet;\n}\n\n#canvas[_ngcontent-%COMP%] { \n    position: absolute;\n    margin-top: 80px;\n    margin-left: 20%; \n    \n}\n\n#icons[_ngcontent-%COMP%] {\n    width: 750px;\n    height: 50px;\n    display: flex;\n    justify-content: left;\n    position: absolute;\n    margin-top: 550px;\n    margin-left: 20%;\n    padding-left: 30px;\n    \n}\n\n.iconBig[_ngcontent-%COMP%] {\n    width: 58px;\n    height: 56px;\n    border: 1px solid #333;\n}\n\n.iconSmall[_ngcontent-%COMP%] {\n    width: 332px;\n    height: 58px;    \n}\n\n.icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    border: 1px solid #333;\n    float: left;\n}\n\n#iconBigCurrent[_ngcontent-%COMP%] {\n    border-width: 2px 1px 2px 2px;\n}\n\n#bigIcon0[_ngcontent-%COMP%] {\n    background-image: url('pensmall.png');\n    border-width: 2px 1px 2px 2px; \n}\n\n#bigIcon1[_ngcontent-%COMP%] {\n    background-image: url('penmidsmall.png');\n    border-width: 2px 1px 2px 1px;\n}\n\n#bigIcon2[_ngcontent-%COMP%] {\n    background-image: url('penmidbig.png');\n    border-width: 2px 1px 2px 1px;\n}\n\n#bigIcon3[_ngcontent-%COMP%] {\n    background-image: url('penbig.png');\n    border-width: 2px 1px 2px 1px;\n}\n\n#bigIcon4[_ngcontent-%COMP%] {\n    background-image: url('eraseicon.png');\n    border-width: 2px 2px 2px 1px;\n}\n\n#iconColor0[_ngcontent-%COMP%] {\n    background: black;\n    border-top-width: 2px;\n}\n\n#iconColor1[_ngcontent-%COMP%] {\n    background: rgb(128, 128, 128);\n    border-top-width: 2px;\n}\n\n#iconColor2[_ngcontent-%COMP%] {\n    background: rgb(153, 0, 76);\n    border-top-width: 2px;\n}\n\n#iconColor3[_ngcontent-%COMP%] {\n    background: rgb(255, 0, 0);\n    border-top-width: 2px;\n}\n\n#iconColor4[_ngcontent-%COMP%] {\n    background: rgb(255, 123, 0);\n    border-top-width: 2px;\n}\n\n#iconColor5[_ngcontent-%COMP%] {\n    background: rgb(255, 238, 0);\n    border-top-width: 2px;\n}\n\n#iconColor6[_ngcontent-%COMP%] {\n    background: rgb(0, 255, 0);\n    border-top-width: 2px;\n}\n\n#iconColor7[_ngcontent-%COMP%] {\n    background: rgb(0, 153, 76);\n    border-top-width: 2px;\n}\n\n#iconColor8[_ngcontent-%COMP%] {\n    background: rgb(0, 204, 204);\n    border-top-width: 2px;\n}\n\n#iconColor9[_ngcontent-%COMP%] {\n    background: rgb(0, 102, 204);\n    border-top-width: 2px;\n}\n\n#iconColor10[_ngcontent-%COMP%] {\n    background: rgb(0, 0, 204);\n    border-top-width: 2px;\n    border-right-width: 2px;\n}\n\n#iconColor11[_ngcontent-%COMP%] {\n    background: rgb(255, 255, 255);\n    border-bottom-width: 2px;\n}\n\n#iconColor12[_ngcontent-%COMP%] {\n    background: rgb(192, 192, 192);\n    border-bottom-width: 2px;\n}\n\n#iconColor13[_ngcontent-%COMP%] {\n    background: rgb(255, 51, 153);\n    border-bottom-width: 2px;\n}\n\n#iconColor14[_ngcontent-%COMP%] {\n    background: rgb(255, 102, 102);\n    border-bottom-width: 2px;\n}\n\n#iconColor15[_ngcontent-%COMP%] {\n    background: rgb(255, 178, 102);\n    border-bottom-width: 2px;\n}\n\n#iconColor16[_ngcontent-%COMP%] {\n    background: rgb(255, 255, 102);\n    border-bottom-width: 2px;\n}\n\n#iconColor17[_ngcontent-%COMP%] {\n    background: rgb(102, 255, 102);\n    border-bottom-width: 2px;\n}\n\n#iconColor18[_ngcontent-%COMP%] {\n    background: rgb(0, 204, 102);\n    border-bottom-width: 2px;\n}\n\n#iconColor19[_ngcontent-%COMP%] {\n    background: rgb(51, 255, 153);\n    border-bottom-width: 2px;\n}\n\n#iconColor20[_ngcontent-%COMP%] {\n    background: rgb(255, 102, 255);\n    border-bottom-width: 2px;\n}\n\n#iconColor21[_ngcontent-%COMP%] {\n    background: rgb(153, 0, 153);\n    border-bottom-width: 2px;\n    border-right-width: 2px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hpdGVib2FyZC93aGl0ZWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLFlBQVksRUFBRSxhQUFhO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxVQUFVO0lBQzFCLGdCQUFnQixFQUFFLGlCQUFpQjtJQUNuQyxlQUFlLEVBQUUsZ0JBQWdCO0lBQ2pDLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxxQ0FBa0Q7SUFDbEQsNkJBQTZCLEVBQUUsNEJBQTRCO0FBQy9EOztBQUNBO0lBQ0ksd0NBQXFEO0lBQ3JELDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLHNDQUFtRDtJQUNuRCw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxtQ0FBZ0Q7SUFDaEQsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksc0NBQW1EO0lBQ25ELDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3doaXRlYm9hcmQvd2hpdGVib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvemFkaW5hLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgLypwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbjogYXV0bzsqL1xufVxuXG5cbiNjaGF0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xufVxuXG5cbiNib2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmlvbGV0O1xufVxuXG4jY2FudmFzIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTsgXG4gICAgLypwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbjogYXV0bzsqL1xufVxuXG4jaWNvbnMge1xuICAgIHdpZHRoOiA3NTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDU1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIC8qcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW46IGF1dG87Ki9cbn1cblxuLmljb25CaWcge1xuICAgIHdpZHRoOiA1OHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuXG4uaWNvblNtYWxsIHtcbiAgICB3aWR0aDogMzMycHg7XG4gICAgaGVpZ2h0OiA1OHB4OyAgICBcbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jaWNvbkJpZ0N1cnJlbnQge1xuICAgIGJvcmRlci13aWR0aDogMnB4IDFweCAycHggMnB4O1xufVxuXG4jYmlnSWNvbjAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wZW5zbWFsbC5wbmdcIik7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMXB4IDJweCAycHg7IC8qdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0ICovXG59XG4jYmlnSWNvbjEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wZW5taWRzbWFsbC5wbmdcIik7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMXB4IDJweCAxcHg7XG59XG4jYmlnSWNvbjIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wZW5taWRiaWcucG5nXCIpO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDFweCAycHggMXB4O1xufVxuI2JpZ0ljb24zIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcGVuYmlnLnBuZ1wiKTtcbiAgICBib3JkZXItd2lkdGg6IDJweCAxcHggMnB4IDFweDtcbn1cbiNiaWdJY29uNCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2VyYXNlaWNvbi5wbmdcIik7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDJweCAxcHg7XG59XG5cbiNpY29uQ29sb3IwIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyOCwgMTI4LCAxMjgpO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3IyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUzLCAwLCA3Nik7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xufVxuI2ljb25Db2xvcjMge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDAsIDApO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3I0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMjMsIDApO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3I1IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzgsIDApO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3I2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjU1LCAwKTtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yNyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE1MywgNzYpO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3I4IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjA0LCAyMDQpO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3I5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTAyLCAyMDQpO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cbiNpY29uQ29sb3IxMCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDIwNCk7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xufVxuI2ljb25Db2xvcjExIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuI2ljb25Db2xvcjEyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuI2ljb25Db2xvcjEzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA1MSwgMTUzKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMTQge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMiwgMTAyKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMTUge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE3OCwgMTAyKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMTYge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMTAyKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMTcge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMDIsIDI1NSwgMTAyKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMTgge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMDQsIDEwMik7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuI2ljb25Db2xvcjE5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTEsIDI1NSwgMTUzKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMjAge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMiwgMjU1KTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4jaWNvbkNvbG9yMjEge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNTMsIDAsIDE1Myk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4OyBcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhiteboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whiteboard',
                templateUrl: './whiteboard.component.html',
                styleUrls: ['./whiteboard.component.css']
            }]
    }], function () { return [{ type: _services_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/colors.json":
/*!********************************!*\
  !*** ./src/assets/colors.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"sandybrown\",\"goldenrod\",\"peru\",\"chocolate\",\"saddlebrown\",\"sienna\",\"brown\",\"maroon\",\"hotpink\",\"deeppink\",\"palevioletred\",\"mediumvioletred\",\"orchid\",\"fuchsia\",\"magenta\",\"mediumorchid\",\"mediumpurple\",\"blueviolet\",\"darkviolet\",\"darkorchid\",\"darkmagenta\",\"purple\",\"indigo\",\"dodgerblue\",\"cornflowerblue\",\"steelblue\",\"royalblue\",\"blue\",\"mediumblue\",\"darkblue\",\"navy\",\"midnightblue\",\"mediumslateblue\",\"slateblue\",\"darkslateblue\",\"darkturquoise\",\"lightseagreen\",\"cadetblue\",\"darkcyan\",\"darkseagreen\",\"mediumseagreen\",\"seagreen\",\"olive\",\"darkolivegreen\",\"olivedrab\",\"forestgreen\",\"green\",\"darkgreen\",\"orange\",\"darkorange\",\"indianred\",\"crimson\",\"firebrick\",\"red\",\"darkred\"]");

/***/ }),

/***/ "./src/assets/names.json":
/*!*******************************!*\
  !*** ./src/assets/names.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244, 3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3256, 3257, 3258, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3815, 3816, 3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827, 3828, 3829, 3830, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3838, 3839, 3840, 3841, 3842, 3843, 3844, 3845, 3846, 3847, 3848, 3849, 3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860, 3861, 3862, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871, 3872, 3873, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881, 3882, 3883, 3884, 3885, 3886, 3887, 3888, 3889, 3890, 3891, 3892, 3893, 3894, 3895, 3896, 3897, 3898, 3899, 3900, 3901, 3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919, 3920, 3921, 3922, 3923, 3924, 3925, 3926, 3927, 3928, 3929, 3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937, 3938, 3939, 3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949, 3950, 3951, 3952, 3953, 3954, 3955, 3956, 3957, 3958, 3959, 3960, 3961, 3962, 3963, 3964, 3965, 3966, 3967, 3968, 3969, 3970, 3971, 3972, 3973, 3974, 3975, 3976, 3977, 3978, 3979, 3980, 3981, 3982, 3983, 3984, 3985, 3986, 3987, 3988, 3989, 3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998, 3999, 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036, 4037, 4038, 4039, 4040, 4041, 4042, 4043, 4044, 4045, 4046, 4047, 4048, 4049, 4050, 4051, 4052, 4053, 4054, 4055, 4056, 4057, 4058, 4059, 4060, 4061, 4062, 4063, 4064, 4065, 4066, 4067, 4068, 4069, 4070, 4071, 4072, 4073, 4074, 4075, 4076, 4077, 4078, 4079, 4080, 4081, 4082, 4083, 4084, 4085, 4086, 4087, 4088, 4089, 4090, 4091, 4092, 4093, 4094, 4095, 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4105, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4126, 4127, 4128, 4129, 4130, 4131, 4132, 4133, 4134, 4135, 4136, 4137, 4138, 4139, 4140, 4141, 4142, 4143, 4144, 4145, 4146, 4147, 4148, 4149, 4150, 4151, 4152, 4153, 4154, 4155, 4156, 4157, 4158, 4159, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 4170, 4171, 4172, 4173, 4174, 4175, 4176, 4177, 4178, 4179, 4180, 4181, 4182, 4183, 4184, 4185, 4186, 4187, 4188, 4189, 4190, 4191, 4192, 4193, 4194, 4195, 4196, 4197, 4198, 4199, 4200, 4201, 4202, 4203, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 4212, 4213, 4214, 4215, 4216, 4217, 4218, 4219, 4220, 4221, 4222, 4223, 4224, 4225, 4226, 4227, 4228, 4229, 4230, 4231, 4232, 4233, 4234, 4235, 4236, 4237, 4238, 4239, 4240, 4241, 4242, 4243, 4244, 4245, 4246, 4247, 4248, 4249, 4250, 4251, 4252, 4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260, 4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268, 4269, 4270, 4271, 4272, 4273, 4274, 4275, 4276, 4277, 4278, 4279, 4280, 4281, 4282, 4283, 4284, 4285, 4286, 4287, 4288, 4289, 4290, 4291, 4292, 4293, 4294, 4295, 4296, 4297, 4298, 4299, 4300, 4301, 4302, 4303, 4304, 4305, 4306, 4307, 4308, 4309, 4310, 4311, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333, 4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4343, 4344, 4345, 4346, 4347, 4348, 4349, 4350, 4351, 4352, 4353, 4354, 4355, 4356, 4357, 4358, 4359, 4360, 4361, 4362, 4363, 4364, 4365, 4366, 4367, 4368, 4369, 4370, 4371, 4372, 4373, 4374, 4375, 4376, 4377, 4378, 4379, 4380, 4381, 4382, 4383, 4384, 4385, 4386, 4387, 4388, 4389, 4390, 4391, 4392, 4393, 4394, 4395, 4396, 4397, 4398, 4399, 4400, 4401, 4402, 4403, 4404, 4405, 4406, 4407, 4408, 4409, 4410, 4411, 4412, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421, 4422, 4423, 4424, 4425, 4426, 4427, 4428, 4429, 4430, 4431, 4432, 4433, 4434, 4435, 4436, 4437, 4438, 4439, 4440, 4441, 4442, 4443, 4444, 4445, 4446, 4447, 4448, 4449, 4450, 4451, 4452, 4453, 4454, 4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465, 4466, 4467, 4468, 4469, 4470, 4471, 4472, 4473, 4474, 4475, 4476, 4477, 4478, 4479, 4480, 4481, 4482, 4483, 4484, 4485, 4486, 4487, 4488, 4489, 4490, 4491, 4492, 4493, 4494, 4495, 4496, 4497, 4498, 4499, 4500, 4501, 4502, 4503, 4504, 4505, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4518, 4519, 4520, 4521, 4522, 4523, 4524, 4525, 4526, 4527, 4528, 4529, 4530, 4531, 4532, 4533, 4534, 4535, 4536, 4537, 4538, 4539, 4540, 4541, 4542, 4543, 4544, 4545, 4546, 4547, 4548, 4549, 4550, 4551, 4552, 4553, 4554, 4555, 4556, 4557, 4558, 4559, 4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570, 4571, 4572, 4573, 4574, 4575, 4576, 4577, 4578, 4579, 4580, 4581, 4582, 4583, 4584, 4585, 4586, 4587, 4588, 4589, 4590, 4591, 4592, 4593, 4594, 4595, 4596, 4597, 4598, 4599, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4608, 4609, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619, 4620, 4621, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4655, 4656, 4657, 4658, 4659, 4660, 4661, 4662, 4663, 4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685, 4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 4695, 4696, 4697, 4698, 4699, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729, 4730, 4731, 4732, 4733, 4734, 4735, 4736, 4737, 4738, 4739, 4740, 4741, 4742, 4743, 4744, 4745, 4746, 4747, 4748, 4749, 4750, 4751, 4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828, 4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905, 4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 4914, 4915, 4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Aaren\",\"Aarika\",\"Abagael\",\"Abagail\",\"Abbe\",\"Abbey\",\"Abbi\",\"Abbie\",\"Abby\",\"Abbye\",\"Abigael\",\"Abigail\",\"Abigale\",\"Abra\",\"Ada\",\"Adah\",\"Adaline\",\"Adan\",\"Adara\",\"Adda\",\"Addi\",\"Addia\",\"Addie\",\"Addy\",\"Adel\",\"Adela\",\"Adelaida\",\"Adelaide\",\"Adele\",\"Adelheid\",\"Adelice\",\"Adelina\",\"Adelind\",\"Adeline\",\"Adella\",\"Adelle\",\"Adena\",\"Adey\",\"Adi\",\"Adiana\",\"Adina\",\"Adora\",\"Adore\",\"Adoree\",\"Adorne\",\"Adrea\",\"Adria\",\"Adriaens\",\"Adrian\",\"Adriana\",\"Adriane\",\"Adrianna\",\"Adrianne\",\"Adriena\",\"Adrienne\",\"Aeriel\",\"Aeriela\",\"Aeriell\",\"Afton\",\"Ag\",\"Agace\",\"Agata\",\"Agatha\",\"Agathe\",\"Aggi\",\"Aggie\",\"Aggy\",\"Agna\",\"Agnella\",\"Agnes\",\"Agnese\",\"Agnesse\",\"Agneta\",\"Agnola\",\"Agretha\",\"Aida\",\"Aidan\",\"Aigneis\",\"Aila\",\"Aile\",\"Ailee\",\"Aileen\",\"Ailene\",\"Ailey\",\"Aili\",\"Ailina\",\"Ailis\",\"Ailsun\",\"Ailyn\",\"Aime\",\"Aimee\",\"Aimil\",\"Aindrea\",\"Ainslee\",\"Ainsley\",\"Ainslie\",\"Ajay\",\"Alaine\",\"Alameda\",\"Alana\",\"Alanah\",\"Alane\",\"Alanna\",\"Alayne\",\"Alberta\",\"Albertina\",\"Albertine\",\"Albina\",\"Alecia\",\"Aleda\",\"Aleece\",\"Aleen\",\"Alejandra\",\"Alejandrina\",\"Alena\",\"Alene\",\"Alessandra\",\"Aleta\",\"Alethea\",\"Alex\",\"Alexa\",\"Alexandra\",\"Alexandrina\",\"Alexi\",\"Alexia\",\"Alexina\",\"Alexine\",\"Alexis\",\"Alfi\",\"Alfie\",\"Alfreda\",\"Alfy\",\"Ali\",\"Alia\",\"Alica\",\"Alice\",\"Alicea\",\"Alicia\",\"Alida\",\"Alidia\",\"Alie\",\"Alika\",\"Alikee\",\"Alina\",\"Aline\",\"Alis\",\"Alisa\",\"Alisha\",\"Alison\",\"Alissa\",\"Alisun\",\"Alix\",\"Aliza\",\"Alla\",\"Alleen\",\"Allegra\",\"Allene\",\"Alli\",\"Allianora\",\"Allie\",\"Allina\",\"Allis\",\"Allison\",\"Allissa\",\"Allix\",\"Allsun\",\"Allx\",\"Ally\",\"Allyce\",\"Allyn\",\"Allys\",\"Allyson\",\"Alma\",\"Almeda\",\"Almeria\",\"Almeta\",\"Almira\",\"Almire\",\"Aloise\",\"Aloisia\",\"Aloysia\",\"Alta\",\"Althea\",\"Alvera\",\"Alverta\",\"Alvina\",\"Alvinia\",\"Alvira\",\"Alyce\",\"Alyda\",\"Alys\",\"Alysa\",\"Alyse\",\"Alysia\",\"Alyson\",\"Alyss\",\"Alyssa\",\"Amabel\",\"Amabelle\",\"Amalea\",\"Amalee\",\"Amaleta\",\"Amalia\",\"Amalie\",\"Amalita\",\"Amalle\",\"Amanda\",\"Amandi\",\"Amandie\",\"Amandy\",\"Amara\",\"Amargo\",\"Amata\",\"Amber\",\"Amberly\",\"Ambur\",\"Ame\",\"Amelia\",\"Amelie\",\"Amelina\",\"Ameline\",\"Amelita\",\"Ami\",\"Amie\",\"Amii\",\"Amil\",\"Amitie\",\"Amity\",\"Ammamaria\",\"Amy\",\"Amye\",\"Ana\",\"Anabal\",\"Anabel\",\"Anabella\",\"Anabelle\",\"Analiese\",\"Analise\",\"Anallese\",\"Anallise\",\"Anastasia\",\"Anastasie\",\"Anastassia\",\"Anatola\",\"Andee\",\"Andeee\",\"Anderea\",\"Andi\",\"Andie\",\"Andra\",\"Andrea\",\"Andreana\",\"Andree\",\"Andrei\",\"Andria\",\"Andriana\",\"Andriette\",\"Andromache\",\"Andy\",\"Anestassia\",\"Anet\",\"Anett\",\"Anetta\",\"Anette\",\"Ange\",\"Angel\",\"Angela\",\"Angele\",\"Angelia\",\"Angelica\",\"Angelika\",\"Angelina\",\"Angeline\",\"Angelique\",\"Angelita\",\"Angelle\",\"Angie\",\"Angil\",\"Angy\",\"Ania\",\"Anica\",\"Anissa\",\"Anita\",\"Anitra\",\"Anjanette\",\"Anjela\",\"Ann\",\"Ann-Marie\",\"Anna\",\"Anna-Diana\",\"Anna-Diane\",\"Anna-Maria\",\"Annabal\",\"Annabel\",\"Annabela\",\"Annabell\",\"Annabella\",\"Annabelle\",\"Annadiana\",\"Annadiane\",\"Annalee\",\"Annaliese\",\"Annalise\",\"Annamaria\",\"Annamarie\",\"Anne\",\"Anne-Corinne\",\"Anne-Marie\",\"Annecorinne\",\"Anneliese\",\"Annelise\",\"Annemarie\",\"Annetta\",\"Annette\",\"Anni\",\"Annice\",\"Annie\",\"Annis\",\"Annissa\",\"Annmaria\",\"Annmarie\",\"Annnora\",\"Annora\",\"Anny\",\"Anselma\",\"Ansley\",\"Anstice\",\"Anthe\",\"Anthea\",\"Anthia\",\"Anthiathia\",\"Antoinette\",\"Antonella\",\"Antonetta\",\"Antonia\",\"Antonie\",\"Antonietta\",\"Antonina\",\"Anya\",\"Appolonia\",\"April\",\"Aprilette\",\"Ara\",\"Arabel\",\"Arabela\",\"Arabele\",\"Arabella\",\"Arabelle\",\"Arda\",\"Ardath\",\"Ardeen\",\"Ardelia\",\"Ardelis\",\"Ardella\",\"Ardelle\",\"Arden\",\"Ardene\",\"Ardenia\",\"Ardine\",\"Ardis\",\"Ardisj\",\"Ardith\",\"Ardra\",\"Ardyce\",\"Ardys\",\"Ardyth\",\"Aretha\",\"Ariadne\",\"Ariana\",\"Aridatha\",\"Ariel\",\"Ariela\",\"Ariella\",\"Arielle\",\"Arlana\",\"Arlee\",\"Arleen\",\"Arlen\",\"Arlena\",\"Arlene\",\"Arleta\",\"Arlette\",\"Arleyne\",\"Arlie\",\"Arliene\",\"Arlina\",\"Arlinda\",\"Arline\",\"Arluene\",\"Arly\",\"Arlyn\",\"Arlyne\",\"Aryn\",\"Ashely\",\"Ashia\",\"Ashien\",\"Ashil\",\"Ashla\",\"Ashlan\",\"Ashlee\",\"Ashleigh\",\"Ashlen\",\"Ashley\",\"Ashli\",\"Ashlie\",\"Ashly\",\"Asia\",\"Astra\",\"Astrid\",\"Astrix\",\"Atalanta\",\"Athena\",\"Athene\",\"Atlanta\",\"Atlante\",\"Auberta\",\"Aubine\",\"Aubree\",\"Aubrette\",\"Aubrey\",\"Aubrie\",\"Aubry\",\"Audi\",\"Audie\",\"Audra\",\"Audre\",\"Audrey\",\"Audrie\",\"Audry\",\"Audrye\",\"Audy\",\"Augusta\",\"Auguste\",\"Augustina\",\"Augustine\",\"Aundrea\",\"Aura\",\"Aurea\",\"Aurel\",\"Aurelea\",\"Aurelia\",\"Aurelie\",\"Auria\",\"Aurie\",\"Aurilia\",\"Aurlie\",\"Auroora\",\"Aurora\",\"Aurore\",\"Austin\",\"Austina\",\"Austine\",\"Ava\",\"Aveline\",\"Averil\",\"Averyl\",\"Avie\",\"Avis\",\"Aviva\",\"Avivah\",\"Avril\",\"Avrit\",\"Ayn\",\"Bab\",\"Babara\",\"Babb\",\"Babbette\",\"Babbie\",\"Babette\",\"Babita\",\"Babs\",\"Bambi\",\"Bambie\",\"Bamby\",\"Barb\",\"Barbabra\",\"Barbara\",\"Barbara-Anne\",\"Barbaraanne\",\"Barbe\",\"Barbee\",\"Barbette\",\"Barbey\",\"Barbi\",\"Barbie\",\"Barbra\",\"Barby\",\"Bari\",\"Barrie\",\"Barry\",\"Basia\",\"Bathsheba\",\"Batsheva\",\"Bea\",\"Beatrice\",\"Beatrisa\",\"Beatrix\",\"Beatriz\",\"Bebe\",\"Becca\",\"Becka\",\"Becki\",\"Beckie\",\"Becky\",\"Bee\",\"Beilul\",\"Beitris\",\"Bekki\",\"Bel\",\"Belia\",\"Belicia\",\"Belinda\",\"Belita\",\"Bell\",\"Bella\",\"Bellanca\",\"Belle\",\"Bellina\",\"Belva\",\"Belvia\",\"Bendite\",\"Benedetta\",\"Benedicta\",\"Benedikta\",\"Benetta\",\"Benita\",\"Benni\",\"Bennie\",\"Benny\",\"Benoite\",\"Berenice\",\"Beret\",\"Berget\",\"Berna\",\"Bernadene\",\"Bernadette\",\"Bernadina\",\"Bernadine\",\"Bernardina\",\"Bernardine\",\"Bernelle\",\"Bernete\",\"Bernetta\",\"Bernette\",\"Berni\",\"Bernice\",\"Bernie\",\"Bernita\",\"Berny\",\"Berri\",\"Berrie\",\"Berry\",\"Bert\",\"Berta\",\"Berte\",\"Bertha\",\"Berthe\",\"Berti\",\"Bertie\",\"Bertina\",\"Bertine\",\"Berty\",\"Beryl\",\"Beryle\",\"Bess\",\"Bessie\",\"Bessy\",\"Beth\",\"Bethanne\",\"Bethany\",\"Bethena\",\"Bethina\",\"Betsey\",\"Betsy\",\"Betta\",\"Bette\",\"Bette-Ann\",\"Betteann\",\"Betteanne\",\"Betti\",\"Bettina\",\"Bettine\",\"Betty\",\"Bettye\",\"Beulah\",\"Bev\",\"Beverie\",\"Beverlee\",\"Beverley\",\"Beverlie\",\"Beverly\",\"Bevvy\",\"Bianca\",\"Bianka\",\"Bibbie\",\"Bibby\",\"Bibbye\",\"Bibi\",\"Biddie\",\"Biddy\",\"Bidget\",\"Bili\",\"Bill\",\"Billi\",\"Billie\",\"Billy\",\"Billye\",\"Binni\",\"Binnie\",\"Binny\",\"Bird\",\"Birdie\",\"Birgit\",\"Birgitta\",\"Blair\",\"Blaire\",\"Blake\",\"Blakelee\",\"Blakeley\",\"Blanca\",\"Blanch\",\"Blancha\",\"Blanche\",\"Blinni\",\"Blinnie\",\"Blinny\",\"Bliss\",\"Blisse\",\"Blithe\",\"Blondell\",\"Blondelle\",\"Blondie\",\"Blondy\",\"Blythe\",\"Bobbe\",\"Bobbee\",\"Bobbette\",\"Bobbi\",\"Bobbie\",\"Bobby\",\"Bobbye\",\"Bobette\",\"Bobina\",\"Bobine\",\"Bobinette\",\"Bonita\",\"Bonnee\",\"Bonni\",\"Bonnibelle\",\"Bonnie\",\"Bonny\",\"Brana\",\"Brandais\",\"Brande\",\"Brandea\",\"Brandi\",\"Brandice\",\"Brandie\",\"Brandise\",\"Brandy\",\"Breanne\",\"Brear\",\"Bree\",\"Breena\",\"Bren\",\"Brena\",\"Brenda\",\"Brenn\",\"Brenna\",\"Brett\",\"Bria\",\"Briana\",\"Brianna\",\"Brianne\",\"Bride\",\"Bridget\",\"Bridgette\",\"Bridie\",\"Brier\",\"Brietta\",\"Brigid\",\"Brigida\",\"Brigit\",\"Brigitta\",\"Brigitte\",\"Brina\",\"Briney\",\"Brinn\",\"Brinna\",\"Briny\",\"Brit\",\"Brita\",\"Britney\",\"Britni\",\"Britt\",\"Britta\",\"Brittan\",\"Brittaney\",\"Brittani\",\"Brittany\",\"Britte\",\"Britteny\",\"Brittne\",\"Brittney\",\"Brittni\",\"Brook\",\"Brooke\",\"Brooks\",\"Brunhilda\",\"Brunhilde\",\"Bryana\",\"Bryn\",\"Bryna\",\"Brynn\",\"Brynna\",\"Brynne\",\"Buffy\",\"Bunni\",\"Bunnie\",\"Bunny\",\"Cacilia\",\"Cacilie\",\"Cahra\",\"Cairistiona\",\"Caitlin\",\"Caitrin\",\"Cal\",\"Calida\",\"Calla\",\"Calley\",\"Calli\",\"Callida\",\"Callie\",\"Cally\",\"Calypso\",\"Cam\",\"Camala\",\"Camel\",\"Camella\",\"Camellia\",\"Cami\",\"Camila\",\"Camile\",\"Camilla\",\"Camille\",\"Cammi\",\"Cammie\",\"Cammy\",\"Candace\",\"Candi\",\"Candice\",\"Candida\",\"Candide\",\"Candie\",\"Candis\",\"Candra\",\"Candy\",\"Caprice\",\"Cara\",\"Caralie\",\"Caren\",\"Carena\",\"Caresa\",\"Caressa\",\"Caresse\",\"Carey\",\"Cari\",\"Caria\",\"Carie\",\"Caril\",\"Carilyn\",\"Carin\",\"Carina\",\"Carine\",\"Cariotta\",\"Carissa\",\"Carita\",\"Caritta\",\"Carla\",\"Carlee\",\"Carleen\",\"Carlen\",\"Carlene\",\"Carley\",\"Carlie\",\"Carlin\",\"Carlina\",\"Carline\",\"Carlita\",\"Carlota\",\"Carlotta\",\"Carly\",\"Carlye\",\"Carlyn\",\"Carlynn\",\"Carlynne\",\"Carma\",\"Carmel\",\"Carmela\",\"Carmelia\",\"Carmelina\",\"Carmelita\",\"Carmella\",\"Carmelle\",\"Carmen\",\"Carmencita\",\"Carmina\",\"Carmine\",\"Carmita\",\"Carmon\",\"Caro\",\"Carol\",\"Carol-Jean\",\"Carola\",\"Carolan\",\"Carolann\",\"Carole\",\"Carolee\",\"Carolin\",\"Carolina\",\"Caroline\",\"Caroljean\",\"Carolyn\",\"Carolyne\",\"Carolynn\",\"Caron\",\"Carree\",\"Carri\",\"Carrie\",\"Carrissa\",\"Carroll\",\"Carry\",\"Cary\",\"Caryl\",\"Caryn\",\"Casandra\",\"Casey\",\"Casi\",\"Casie\",\"Cass\",\"Cassandra\",\"Cassandre\",\"Cassandry\",\"Cassaundra\",\"Cassey\",\"Cassi\",\"Cassie\",\"Cassondra\",\"Cassy\",\"Catarina\",\"Cate\",\"Caterina\",\"Catha\",\"Catharina\",\"Catharine\",\"Cathe\",\"Cathee\",\"Catherin\",\"Catherina\",\"Catherine\",\"Cathi\",\"Cathie\",\"Cathleen\",\"Cathlene\",\"Cathrin\",\"Cathrine\",\"Cathryn\",\"Cathy\",\"Cathyleen\",\"Cati\",\"Catie\",\"Catina\",\"Catlaina\",\"Catlee\",\"Catlin\",\"Catrina\",\"Catriona\",\"Caty\",\"Caye\",\"Cayla\",\"Cecelia\",\"Cecil\",\"Cecile\",\"Ceciley\",\"Cecilia\",\"Cecilla\",\"Cecily\",\"Ceil\",\"Cele\",\"Celene\",\"Celesta\",\"Celeste\",\"Celestia\",\"Celestina\",\"Celestine\",\"Celestyn\",\"Celestyna\",\"Celia\",\"Celie\",\"Celina\",\"Celinda\",\"Celine\",\"Celinka\",\"Celisse\",\"Celka\",\"Celle\",\"Cesya\",\"Chad\",\"Chanda\",\"Chandal\",\"Chandra\",\"Channa\",\"Chantal\",\"Chantalle\",\"Charil\",\"Charin\",\"Charis\",\"Charissa\",\"Charisse\",\"Charita\",\"Charity\",\"Charla\",\"Charlean\",\"Charleen\",\"Charlena\",\"Charlene\",\"Charline\",\"Charlot\",\"Charlotta\",\"Charlotte\",\"Charmain\",\"Charmaine\",\"Charmane\",\"Charmian\",\"Charmine\",\"Charmion\",\"Charo\",\"Charyl\",\"Chastity\",\"Chelsae\",\"Chelsea\",\"Chelsey\",\"Chelsie\",\"Chelsy\",\"Cher\",\"Chere\",\"Cherey\",\"Cheri\",\"Cherianne\",\"Cherice\",\"Cherida\",\"Cherie\",\"Cherilyn\",\"Cherilynn\",\"Cherin\",\"Cherise\",\"Cherish\",\"Cherlyn\",\"Cherri\",\"Cherrita\",\"Cherry\",\"Chery\",\"Cherye\",\"Cheryl\",\"Cheslie\",\"Chiarra\",\"Chickie\",\"Chicky\",\"Chiquia\",\"Chiquita\",\"Chlo\",\"Chloe\",\"Chloette\",\"Chloris\",\"Chris\",\"Chrissie\",\"Chrissy\",\"Christa\",\"Christabel\",\"Christabella\",\"Christal\",\"Christalle\",\"Christan\",\"Christean\",\"Christel\",\"Christen\",\"Christi\",\"Christian\",\"Christiana\",\"Christiane\",\"Christie\",\"Christin\",\"Christina\",\"Christine\",\"Christy\",\"Christye\",\"Christyna\",\"Chrysa\",\"Chrysler\",\"Chrystal\",\"Chryste\",\"Chrystel\",\"Cicely\",\"Cicily\",\"Ciel\",\"Cilka\",\"Cinda\",\"Cindee\",\"Cindelyn\",\"Cinderella\",\"Cindi\",\"Cindie\",\"Cindra\",\"Cindy\",\"Cinnamon\",\"Cissiee\",\"Cissy\",\"Clair\",\"Claire\",\"Clara\",\"Clarabelle\",\"Clare\",\"Claresta\",\"Clareta\",\"Claretta\",\"Clarette\",\"Clarey\",\"Clari\",\"Claribel\",\"Clarice\",\"Clarie\",\"Clarinda\",\"Clarine\",\"Clarissa\",\"Clarisse\",\"Clarita\",\"Clary\",\"Claude\",\"Claudelle\",\"Claudetta\",\"Claudette\",\"Claudia\",\"Claudie\",\"Claudina\",\"Claudine\",\"Clea\",\"Clem\",\"Clemence\",\"Clementia\",\"Clementina\",\"Clementine\",\"Clemmie\",\"Clemmy\",\"Cleo\",\"Cleopatra\",\"Clerissa\",\"Clio\",\"Clo\",\"Cloe\",\"Cloris\",\"Clotilda\",\"Clovis\",\"Codee\",\"Codi\",\"Codie\",\"Cody\",\"Coleen\",\"Colene\",\"Coletta\",\"Colette\",\"Colleen\",\"Collen\",\"Collete\",\"Collette\",\"Collie\",\"Colline\",\"Colly\",\"Con\",\"Concettina\",\"Conchita\",\"Concordia\",\"Conni\",\"Connie\",\"Conny\",\"Consolata\",\"Constance\",\"Constancia\",\"Constancy\",\"Constanta\",\"Constantia\",\"Constantina\",\"Constantine\",\"Consuela\",\"Consuelo\",\"Cookie\",\"Cora\",\"Corabel\",\"Corabella\",\"Corabelle\",\"Coral\",\"Coralie\",\"Coraline\",\"Coralyn\",\"Cordelia\",\"Cordelie\",\"Cordey\",\"Cordi\",\"Cordie\",\"Cordula\",\"Cordy\",\"Coreen\",\"Corella\",\"Corenda\",\"Corene\",\"Coretta\",\"Corette\",\"Corey\",\"Cori\",\"Corie\",\"Corilla\",\"Corina\",\"Corine\",\"Corinna\",\"Corinne\",\"Coriss\",\"Corissa\",\"Corliss\",\"Corly\",\"Cornela\",\"Cornelia\",\"Cornelle\",\"Cornie\",\"Corny\",\"Correna\",\"Correy\",\"Corri\",\"Corrianne\",\"Corrie\",\"Corrina\",\"Corrine\",\"Corrinne\",\"Corry\",\"Cortney\",\"Cory\",\"Cosetta\",\"Cosette\",\"Costanza\",\"Courtenay\",\"Courtnay\",\"Courtney\",\"Crin\",\"Cris\",\"Crissie\",\"Crissy\",\"Crista\",\"Cristabel\",\"Cristal\",\"Cristen\",\"Cristi\",\"Cristie\",\"Cristin\",\"Cristina\",\"Cristine\",\"Cristionna\",\"Cristy\",\"Crysta\",\"Crystal\",\"Crystie\",\"Cthrine\",\"Cyb\",\"Cybil\",\"Cybill\",\"Cymbre\",\"Cynde\",\"Cyndi\",\"Cyndia\",\"Cyndie\",\"Cyndy\",\"Cynthea\",\"Cynthia\",\"Cynthie\",\"Cynthy\",\"Dacey\",\"Dacia\",\"Dacie\",\"Dacy\",\"Dael\",\"Daffi\",\"Daffie\",\"Daffy\",\"Dagmar\",\"Dahlia\",\"Daile\",\"Daisey\",\"Daisi\",\"Daisie\",\"Daisy\",\"Dale\",\"Dalenna\",\"Dalia\",\"Dalila\",\"Dallas\",\"Daloris\",\"Damara\",\"Damaris\",\"Damita\",\"Dana\",\"Danell\",\"Danella\",\"Danette\",\"Dani\",\"Dania\",\"Danica\",\"Danice\",\"Daniela\",\"Daniele\",\"Daniella\",\"Danielle\",\"Danika\",\"Danila\",\"Danit\",\"Danita\",\"Danna\",\"Danni\",\"Dannie\",\"Danny\",\"Dannye\",\"Danya\",\"Danyelle\",\"Danyette\",\"Daphene\",\"Daphna\",\"Daphne\",\"Dara\",\"Darb\",\"Darbie\",\"Darby\",\"Darcee\",\"Darcey\",\"Darci\",\"Darcie\",\"Darcy\",\"Darda\",\"Dareen\",\"Darell\",\"Darelle\",\"Dari\",\"Daria\",\"Darice\",\"Darla\",\"Darleen\",\"Darlene\",\"Darline\",\"Darlleen\",\"Daron\",\"Darrelle\",\"Darryl\",\"Darsey\",\"Darsie\",\"Darya\",\"Daryl\",\"Daryn\",\"Dasha\",\"Dasi\",\"Dasie\",\"Dasya\",\"Datha\",\"Daune\",\"Daveen\",\"Daveta\",\"Davida\",\"Davina\",\"Davine\",\"Davita\",\"Dawn\",\"Dawna\",\"Dayle\",\"Dayna\",\"Ddene\",\"De\",\"Deana\",\"Deane\",\"Deanna\",\"Deanne\",\"Deb\",\"Debbi\",\"Debbie\",\"Debby\",\"Debee\",\"Debera\",\"Debi\",\"Debor\",\"Debora\",\"Deborah\",\"Debra\",\"Dede\",\"Dedie\",\"Dedra\",\"Dee\",\"Dee Dee\",\"Deeann\",\"Deeanne\",\"Deedee\",\"Deena\",\"Deerdre\",\"Deeyn\",\"Dehlia\",\"Deidre\",\"Deina\",\"Deirdre\",\"Del\",\"Dela\",\"Delcina\",\"Delcine\",\"Delia\",\"Delila\",\"Delilah\",\"Delinda\",\"Dell\",\"Della\",\"Delly\",\"Delora\",\"Delores\",\"Deloria\",\"Deloris\",\"Delphine\",\"Delphinia\",\"Demeter\",\"Demetra\",\"Demetria\",\"Demetris\",\"Dena\",\"Deni\",\"Denice\",\"Denise\",\"Denna\",\"Denni\",\"Dennie\",\"Denny\",\"Deny\",\"Denys\",\"Denyse\",\"Deonne\",\"Desdemona\",\"Desirae\",\"Desiree\",\"Desiri\",\"Deva\",\"Devan\",\"Devi\",\"Devin\",\"Devina\",\"Devinne\",\"Devon\",\"Devondra\",\"Devonna\",\"Devonne\",\"Devora\",\"Di\",\"Diahann\",\"Dian\",\"Diana\",\"Diandra\",\"Diane\",\"Diane-Marie\",\"Dianemarie\",\"Diann\",\"Dianna\",\"Dianne\",\"Diannne\",\"Didi\",\"Dido\",\"Diena\",\"Dierdre\",\"Dina\",\"Dinah\",\"Dinnie\",\"Dinny\",\"Dion\",\"Dione\",\"Dionis\",\"Dionne\",\"Dita\",\"Dix\",\"Dixie\",\"Dniren\",\"Dode\",\"Dodi\",\"Dodie\",\"Dody\",\"Doe\",\"Doll\",\"Dolley\",\"Dolli\",\"Dollie\",\"Dolly\",\"Dolores\",\"Dolorita\",\"Doloritas\",\"Domeniga\",\"Dominga\",\"Domini\",\"Dominica\",\"Dominique\",\"Dona\",\"Donella\",\"Donelle\",\"Donetta\",\"Donia\",\"Donica\",\"Donielle\",\"Donna\",\"Donnamarie\",\"Donni\",\"Donnie\",\"Donny\",\"Dora\",\"Doralia\",\"Doralin\",\"Doralyn\",\"Doralynn\",\"Doralynne\",\"Dore\",\"Doreen\",\"Dorelia\",\"Dorella\",\"Dorelle\",\"Dorena\",\"Dorene\",\"Doretta\",\"Dorette\",\"Dorey\",\"Dori\",\"Doria\",\"Dorian\",\"Dorice\",\"Dorie\",\"Dorine\",\"Doris\",\"Dorisa\",\"Dorise\",\"Dorita\",\"Doro\",\"Dorolice\",\"Dorolisa\",\"Dorotea\",\"Doroteya\",\"Dorothea\",\"Dorothee\",\"Dorothy\",\"Dorree\",\"Dorri\",\"Dorrie\",\"Dorris\",\"Dorry\",\"Dorthea\",\"Dorthy\",\"Dory\",\"Dosi\",\"Dot\",\"Doti\",\"Dotti\",\"Dottie\",\"Dotty\",\"Dre\",\"Dreddy\",\"Dredi\",\"Drona\",\"Dru\",\"Druci\",\"Drucie\",\"Drucill\",\"Drucy\",\"Drusi\",\"Drusie\",\"Drusilla\",\"Drusy\",\"Dulce\",\"Dulcea\",\"Dulci\",\"Dulcia\",\"Dulciana\",\"Dulcie\",\"Dulcine\",\"Dulcinea\",\"Dulcy\",\"Dulsea\",\"Dusty\",\"Dyan\",\"Dyana\",\"Dyane\",\"Dyann\",\"Dyanna\",\"Dyanne\",\"Dyna\",\"Dynah\",\"Eachelle\",\"Eada\",\"Eadie\",\"Eadith\",\"Ealasaid\",\"Eartha\",\"Easter\",\"Eba\",\"Ebba\",\"Ebonee\",\"Ebony\",\"Eda\",\"Eddi\",\"Eddie\",\"Eddy\",\"Ede\",\"Edee\",\"Edeline\",\"Eden\",\"Edi\",\"Edie\",\"Edin\",\"Edita\",\"Edith\",\"Editha\",\"Edithe\",\"Ediva\",\"Edna\",\"Edwina\",\"Edy\",\"Edyth\",\"Edythe\",\"Effie\",\"Eileen\",\"Eilis\",\"Eimile\",\"Eirena\",\"Ekaterina\",\"Elaina\",\"Elaine\",\"Elana\",\"Elane\",\"Elayne\",\"Elberta\",\"Elbertina\",\"Elbertine\",\"Eleanor\",\"Eleanora\",\"Eleanore\",\"Electra\",\"Eleen\",\"Elena\",\"Elene\",\"Eleni\",\"Elenore\",\"Eleonora\",\"Eleonore\",\"Elfie\",\"Elfreda\",\"Elfrida\",\"Elfrieda\",\"Elga\",\"Elianora\",\"Elianore\",\"Elicia\",\"Elie\",\"Elinor\",\"Elinore\",\"Elisa\",\"Elisabet\",\"Elisabeth\",\"Elisabetta\",\"Elise\",\"Elisha\",\"Elissa\",\"Elita\",\"Eliza\",\"Elizabet\",\"Elizabeth\",\"Elka\",\"Elke\",\"Ella\",\"Elladine\",\"Elle\",\"Ellen\",\"Ellene\",\"Ellette\",\"Elli\",\"Ellie\",\"Ellissa\",\"Elly\",\"Ellyn\",\"Ellynn\",\"Elmira\",\"Elna\",\"Elnora\",\"Elnore\",\"Eloisa\",\"Eloise\",\"Elonore\",\"Elora\",\"Elsa\",\"Elsbeth\",\"Else\",\"Elset\",\"Elsey\",\"Elsi\",\"Elsie\",\"Elsinore\",\"Elspeth\",\"Elsy\",\"Elva\",\"Elvera\",\"Elvina\",\"Elvira\",\"Elwira\",\"Elyn\",\"Elyse\",\"Elysee\",\"Elysha\",\"Elysia\",\"Elyssa\",\"Em\",\"Ema\",\"Emalee\",\"Emalia\",\"Emelda\",\"Emelia\",\"Emelina\",\"Emeline\",\"Emelita\",\"Emelyne\",\"Emera\",\"Emilee\",\"Emili\",\"Emilia\",\"Emilie\",\"Emiline\",\"Emily\",\"Emlyn\",\"Emlynn\",\"Emlynne\",\"Emma\",\"Emmalee\",\"Emmaline\",\"Emmalyn\",\"Emmalynn\",\"Emmalynne\",\"Emmeline\",\"Emmey\",\"Emmi\",\"Emmie\",\"Emmy\",\"Emmye\",\"Emogene\",\"Emyle\",\"Emylee\",\"Engracia\",\"Enid\",\"Enrica\",\"Enrichetta\",\"Enrika\",\"Enriqueta\",\"Eolanda\",\"Eolande\",\"Eran\",\"Erda\",\"Erena\",\"Erica\",\"Ericha\",\"Ericka\",\"Erika\",\"Erin\",\"Erina\",\"Erinn\",\"Erinna\",\"Erma\",\"Ermengarde\",\"Ermentrude\",\"Ermina\",\"Erminia\",\"Erminie\",\"Erna\",\"Ernaline\",\"Ernesta\",\"Ernestine\",\"Ertha\",\"Eryn\",\"Esma\",\"Esmaria\",\"Esme\",\"Esmeralda\",\"Essa\",\"Essie\",\"Essy\",\"Esta\",\"Estel\",\"Estele\",\"Estell\",\"Estella\",\"Estelle\",\"Ester\",\"Esther\",\"Estrella\",\"Estrellita\",\"Ethel\",\"Ethelda\",\"Ethelin\",\"Ethelind\",\"Etheline\",\"Ethelyn\",\"Ethyl\",\"Etta\",\"Etti\",\"Ettie\",\"Etty\",\"Eudora\",\"Eugenia\",\"Eugenie\",\"Eugine\",\"Eula\",\"Eulalie\",\"Eunice\",\"Euphemia\",\"Eustacia\",\"Eva\",\"Evaleen\",\"Evangelia\",\"Evangelin\",\"Evangelina\",\"Evangeline\",\"Evania\",\"Evanne\",\"Eve\",\"Eveleen\",\"Evelina\",\"Eveline\",\"Evelyn\",\"Evey\",\"Evie\",\"Evita\",\"Evonne\",\"Evvie\",\"Evvy\",\"Evy\",\"Eyde\",\"Eydie\",\"Ezmeralda\",\"Fae\",\"Faina\",\"Faith\",\"Fallon\",\"Fan\",\"Fanchette\",\"Fanchon\",\"Fancie\",\"Fancy\",\"Fanechka\",\"Fania\",\"Fanni\",\"Fannie\",\"Fanny\",\"Fanya\",\"Fara\",\"Farah\",\"Farand\",\"Farica\",\"Farra\",\"Farrah\",\"Farrand\",\"Faun\",\"Faunie\",\"Faustina\",\"Faustine\",\"Fawn\",\"Fawne\",\"Fawnia\",\"Fay\",\"Faydra\",\"Faye\",\"Fayette\",\"Fayina\",\"Fayre\",\"Fayth\",\"Faythe\",\"Federica\",\"Fedora\",\"Felecia\",\"Felicdad\",\"Felice\",\"Felicia\",\"Felicity\",\"Felicle\",\"Felipa\",\"Felisha\",\"Felita\",\"Feliza\",\"Fenelia\",\"Feodora\",\"Ferdinanda\",\"Ferdinande\",\"Fern\",\"Fernanda\",\"Fernande\",\"Fernandina\",\"Ferne\",\"Fey\",\"Fiann\",\"Fianna\",\"Fidela\",\"Fidelia\",\"Fidelity\",\"Fifi\",\"Fifine\",\"Filia\",\"Filide\",\"Filippa\",\"Fina\",\"Fiona\",\"Fionna\",\"Fionnula\",\"Fiorenze\",\"Fleur\",\"Fleurette\",\"Flo\",\"Flor\",\"Flora\",\"Florance\",\"Flore\",\"Florella\",\"Florence\",\"Florencia\",\"Florentia\",\"Florenza\",\"Florette\",\"Flori\",\"Floria\",\"Florida\",\"Florie\",\"Florina\",\"Florinda\",\"Floris\",\"Florri\",\"Florrie\",\"Florry\",\"Flory\",\"Flossi\",\"Flossie\",\"Flossy\",\"Flss\",\"Fran\",\"Francene\",\"Frances\",\"Francesca\",\"Francine\",\"Francisca\",\"Franciska\",\"Francoise\",\"Francyne\",\"Frank\",\"Frankie\",\"Franky\",\"Franni\",\"Frannie\",\"Franny\",\"Frayda\",\"Fred\",\"Freda\",\"Freddi\",\"Freddie\",\"Freddy\",\"Fredelia\",\"Frederica\",\"Fredericka\",\"Frederique\",\"Fredi\",\"Fredia\",\"Fredra\",\"Fredrika\",\"Freida\",\"Frieda\",\"Friederike\",\"Fulvia\",\"Gabbey\",\"Gabbi\",\"Gabbie\",\"Gabey\",\"Gabi\",\"Gabie\",\"Gabriel\",\"Gabriela\",\"Gabriell\",\"Gabriella\",\"Gabrielle\",\"Gabriellia\",\"Gabrila\",\"Gaby\",\"Gae\",\"Gael\",\"Gail\",\"Gale\",\"Gale\",\"Galina\",\"Garland\",\"Garnet\",\"Garnette\",\"Gates\",\"Gavra\",\"Gavrielle\",\"Gay\",\"Gaye\",\"Gayel\",\"Gayla\",\"Gayle\",\"Gayleen\",\"Gaylene\",\"Gaynor\",\"Gelya\",\"Gena\",\"Gene\",\"Geneva\",\"Genevieve\",\"Genevra\",\"Genia\",\"Genna\",\"Genni\",\"Gennie\",\"Gennifer\",\"Genny\",\"Genovera\",\"Genvieve\",\"George\",\"Georgeanna\",\"Georgeanne\",\"Georgena\",\"Georgeta\",\"Georgetta\",\"Georgette\",\"Georgia\",\"Georgiana\",\"Georgianna\",\"Georgianne\",\"Georgie\",\"Georgina\",\"Georgine\",\"Geralda\",\"Geraldine\",\"Gerda\",\"Gerhardine\",\"Geri\",\"Gerianna\",\"Gerianne\",\"Gerladina\",\"Germain\",\"Germaine\",\"Germana\",\"Gerri\",\"Gerrie\",\"Gerrilee\",\"Gerry\",\"Gert\",\"Gerta\",\"Gerti\",\"Gertie\",\"Gertrud\",\"Gertruda\",\"Gertrude\",\"Gertrudis\",\"Gerty\",\"Giacinta\",\"Giana\",\"Gianina\",\"Gianna\",\"Gigi\",\"Gilberta\",\"Gilberte\",\"Gilbertina\",\"Gilbertine\",\"Gilda\",\"Gilemette\",\"Gill\",\"Gillan\",\"Gilli\",\"Gillian\",\"Gillie\",\"Gilligan\",\"Gilly\",\"Gina\",\"Ginelle\",\"Ginevra\",\"Ginger\",\"Ginni\",\"Ginnie\",\"Ginnifer\",\"Ginny\",\"Giorgia\",\"Giovanna\",\"Gipsy\",\"Giralda\",\"Gisela\",\"Gisele\",\"Gisella\",\"Giselle\",\"Giuditta\",\"Giulia\",\"Giulietta\",\"Giustina\",\"Gizela\",\"Glad\",\"Gladi\",\"Gladys\",\"Gleda\",\"Glen\",\"Glenda\",\"Glenine\",\"Glenn\",\"Glenna\",\"Glennie\",\"Glennis\",\"Glori\",\"Gloria\",\"Gloriana\",\"Gloriane\",\"Glory\",\"Glyn\",\"Glynda\",\"Glynis\",\"Glynnis\",\"Gnni\",\"Godiva\",\"Golda\",\"Goldarina\",\"Goldi\",\"Goldia\",\"Goldie\",\"Goldina\",\"Goldy\",\"Grace\",\"Gracia\",\"Gracie\",\"Grata\",\"Gratia\",\"Gratiana\",\"Gray\",\"Grayce\",\"Grazia\",\"Greer\",\"Greta\",\"Gretal\",\"Gretchen\",\"Grete\",\"Gretel\",\"Grethel\",\"Gretna\",\"Gretta\",\"Grier\",\"Griselda\",\"Grissel\",\"Guendolen\",\"Guenevere\",\"Guenna\",\"Guglielma\",\"Gui\",\"Guillema\",\"Guillemette\",\"Guinevere\",\"Guinna\",\"Gunilla\",\"Gus\",\"Gusella\",\"Gussi\",\"Gussie\",\"Gussy\",\"Gusta\",\"Gusti\",\"Gustie\",\"Gusty\",\"Gwen\",\"Gwendolen\",\"Gwendolin\",\"Gwendolyn\",\"Gweneth\",\"Gwenette\",\"Gwenneth\",\"Gwenni\",\"Gwennie\",\"Gwenny\",\"Gwenora\",\"Gwenore\",\"Gwyn\",\"Gwyneth\",\"Gwynne\",\"Gypsy\",\"Hadria\",\"Hailee\",\"Haily\",\"Haleigh\",\"Halette\",\"Haley\",\"Hali\",\"Halie\",\"Halimeda\",\"Halley\",\"Halli\",\"Hallie\",\"Hally\",\"Hana\",\"Hanna\",\"Hannah\",\"Hanni\",\"Hannie\",\"Hannis\",\"Hanny\",\"Happy\",\"Harlene\",\"Harley\",\"Harli\",\"Harlie\",\"Harmonia\",\"Harmonie\",\"Harmony\",\"Harri\",\"Harrie\",\"Harriet\",\"Harriett\",\"Harrietta\",\"Harriette\",\"Harriot\",\"Harriott\",\"Hatti\",\"Hattie\",\"Hatty\",\"Hayley\",\"Hazel\",\"Heath\",\"Heather\",\"Heda\",\"Hedda\",\"Heddi\",\"Heddie\",\"Hedi\",\"Hedvig\",\"Hedvige\",\"Hedwig\",\"Hedwiga\",\"Hedy\",\"Heida\",\"Heidi\",\"Heidie\",\"Helaina\",\"Helaine\",\"Helen\",\"Helen-Elizabeth\",\"Helena\",\"Helene\",\"Helenka\",\"Helga\",\"Helge\",\"Helli\",\"Heloise\",\"Helsa\",\"Helyn\",\"Hendrika\",\"Henka\",\"Henrie\",\"Henrieta\",\"Henrietta\",\"Henriette\",\"Henryetta\",\"Hephzibah\",\"Hermia\",\"Hermina\",\"Hermine\",\"Herminia\",\"Hermione\",\"Herta\",\"Hertha\",\"Hester\",\"Hesther\",\"Hestia\",\"Hetti\",\"Hettie\",\"Hetty\",\"Hilary\",\"Hilda\",\"Hildagard\",\"Hildagarde\",\"Hilde\",\"Hildegaard\",\"Hildegarde\",\"Hildy\",\"Hillary\",\"Hilliary\",\"Hinda\",\"Holli\",\"Hollie\",\"Holly\",\"Holly-Anne\",\"Hollyanne\",\"Honey\",\"Honor\",\"Honoria\",\"Hope\",\"Horatia\",\"Hortense\",\"Hortensia\",\"Hulda\",\"Hyacinth\",\"Hyacintha\",\"Hyacinthe\",\"Hyacinthia\",\"Hyacinthie\",\"Hynda\",\"Ianthe\",\"Ibbie\",\"Ibby\",\"Ida\",\"Idalia\",\"Idalina\",\"Idaline\",\"Idell\",\"Idelle\",\"Idette\",\"Ileana\",\"Ileane\",\"Ilene\",\"Ilise\",\"Ilka\",\"Illa\",\"Ilsa\",\"Ilse\",\"Ilysa\",\"Ilyse\",\"Ilyssa\",\"Imelda\",\"Imogen\",\"Imogene\",\"Imojean\",\"Ina\",\"Indira\",\"Ines\",\"Inesita\",\"Inessa\",\"Inez\",\"Inga\",\"Ingaberg\",\"Ingaborg\",\"Inge\",\"Ingeberg\",\"Ingeborg\",\"Inger\",\"Ingrid\",\"Ingunna\",\"Inna\",\"Iolande\",\"Iolanthe\",\"Iona\",\"Iormina\",\"Ira\",\"Irena\",\"Irene\",\"Irina\",\"Iris\",\"Irita\",\"Irma\",\"Isa\",\"Isabel\",\"Isabelita\",\"Isabella\",\"Isabelle\",\"Isadora\",\"Isahella\",\"Iseabal\",\"Isidora\",\"Isis\",\"Isobel\",\"Issi\",\"Issie\",\"Issy\",\"Ivett\",\"Ivette\",\"Ivie\",\"Ivonne\",\"Ivory\",\"Ivy\",\"Izabel\",\"Jacenta\",\"Jacinda\",\"Jacinta\",\"Jacintha\",\"Jacinthe\",\"Jackelyn\",\"Jacki\",\"Jackie\",\"Jacklin\",\"Jacklyn\",\"Jackquelin\",\"Jackqueline\",\"Jacky\",\"Jaclin\",\"Jaclyn\",\"Jacquelin\",\"Jacqueline\",\"Jacquelyn\",\"Jacquelynn\",\"Jacquenetta\",\"Jacquenette\",\"Jacquetta\",\"Jacquette\",\"Jacqui\",\"Jacquie\",\"Jacynth\",\"Jada\",\"Jade\",\"Jaime\",\"Jaimie\",\"Jaine\",\"Jami\",\"Jamie\",\"Jamima\",\"Jammie\",\"Jan\",\"Jana\",\"Janaya\",\"Janaye\",\"Jandy\",\"Jane\",\"Janean\",\"Janeczka\",\"Janeen\",\"Janel\",\"Janela\",\"Janella\",\"Janelle\",\"Janene\",\"Janenna\",\"Janessa\",\"Janet\",\"Janeta\",\"Janetta\",\"Janette\",\"Janeva\",\"Janey\",\"Jania\",\"Janice\",\"Janie\",\"Janifer\",\"Janina\",\"Janine\",\"Janis\",\"Janith\",\"Janka\",\"Janna\",\"Jannel\",\"Jannelle\",\"Janot\",\"Jany\",\"Jaquelin\",\"Jaquelyn\",\"Jaquenetta\",\"Jaquenette\",\"Jaquith\",\"Jasmin\",\"Jasmina\",\"Jasmine\",\"Jayme\",\"Jaymee\",\"Jayne\",\"Jaynell\",\"Jazmin\",\"Jean\",\"Jeana\",\"Jeane\",\"Jeanelle\",\"Jeanette\",\"Jeanie\",\"Jeanine\",\"Jeanna\",\"Jeanne\",\"Jeannette\",\"Jeannie\",\"Jeannine\",\"Jehanna\",\"Jelene\",\"Jemie\",\"Jemima\",\"Jemimah\",\"Jemmie\",\"Jemmy\",\"Jen\",\"Jena\",\"Jenda\",\"Jenelle\",\"Jeni\",\"Jenica\",\"Jeniece\",\"Jenifer\",\"Jeniffer\",\"Jenilee\",\"Jenine\",\"Jenn\",\"Jenna\",\"Jennee\",\"Jennette\",\"Jenni\",\"Jennica\",\"Jennie\",\"Jennifer\",\"Jennilee\",\"Jennine\",\"Jenny\",\"Jeralee\",\"Jere\",\"Jeri\",\"Jermaine\",\"Jerrie\",\"Jerrilee\",\"Jerrilyn\",\"Jerrine\",\"Jerry\",\"Jerrylee\",\"Jess\",\"Jessa\",\"Jessalin\",\"Jessalyn\",\"Jessamine\",\"Jessamyn\",\"Jesse\",\"Jesselyn\",\"Jessi\",\"Jessica\",\"Jessie\",\"Jessika\",\"Jessy\",\"Jewel\",\"Jewell\",\"Jewelle\",\"Jill\",\"Jillana\",\"Jillane\",\"Jillayne\",\"Jilleen\",\"Jillene\",\"Jilli\",\"Jillian\",\"Jillie\",\"Jilly\",\"Jinny\",\"Jo\",\"Jo Ann\",\"Jo-Ann\",\"Jo-Anne\",\"Joan\",\"Joana\",\"Joane\",\"Joanie\",\"Joann\",\"Joanna\",\"Joanne\",\"Joannes\",\"Jobey\",\"Jobi\",\"Jobie\",\"Jobina\",\"Joby\",\"Jobye\",\"Jobyna\",\"Jocelin\",\"Joceline\",\"Jocelyn\",\"Jocelyne\",\"Jodee\",\"Jodi\",\"Jodie\",\"Jody\",\"Joeann\",\"Joela\",\"Joelie\",\"Joell\",\"Joella\",\"Joelle\",\"Joellen\",\"Joelly\",\"Joellyn\",\"Joelynn\",\"Joete\",\"Joey\",\"Johanna\",\"Johannah\",\"Johna\",\"Johnath\",\"Johnette\",\"Johnna\",\"Joice\",\"Jojo\",\"Jolee\",\"Joleen\",\"Jolene\",\"Joletta\",\"Joli\",\"Jolie\",\"Joline\",\"Joly\",\"Jolyn\",\"Jolynn\",\"Jonell\",\"Joni\",\"Jonie\",\"Jonis\",\"Jordain\",\"Jordan\",\"Jordana\",\"Jordanna\",\"Jorey\",\"Jori\",\"Jorie\",\"Jorrie\",\"Jorry\",\"Joscelin\",\"Josee\",\"Josefa\",\"Josefina\",\"Josepha\",\"Josephina\",\"Josephine\",\"Josey\",\"Josi\",\"Josie\",\"Josselyn\",\"Josy\",\"Jourdan\",\"Joy\",\"Joya\",\"Joyan\",\"Joyann\",\"Joyce\",\"Joycelin\",\"Joye\",\"Jsandye\",\"Juana\",\"Juanita\",\"Judi\",\"Judie\",\"Judith\",\"Juditha\",\"Judy\",\"Judye\",\"Juieta\",\"Julee\",\"Juli\",\"Julia\",\"Juliana\",\"Juliane\",\"Juliann\",\"Julianna\",\"Julianne\",\"Julie\",\"Julienne\",\"Juliet\",\"Julieta\",\"Julietta\",\"Juliette\",\"Julina\",\"Juline\",\"Julissa\",\"Julita\",\"June\",\"Junette\",\"Junia\",\"Junie\",\"Junina\",\"Justina\",\"Justine\",\"Justinn\",\"Jyoti\",\"Kacey\",\"Kacie\",\"Kacy\",\"Kaela\",\"Kai\",\"Kaia\",\"Kaila\",\"Kaile\",\"Kailey\",\"Kaitlin\",\"Kaitlyn\",\"Kaitlynn\",\"Kaja\",\"Kakalina\",\"Kala\",\"Kaleena\",\"Kali\",\"Kalie\",\"Kalila\",\"Kalina\",\"Kalinda\",\"Kalindi\",\"Kalli\",\"Kally\",\"Kameko\",\"Kamila\",\"Kamilah\",\"Kamillah\",\"Kandace\",\"Kandy\",\"Kania\",\"Kanya\",\"Kara\",\"Kara-Lynn\",\"Karalee\",\"Karalynn\",\"Kare\",\"Karee\",\"Karel\",\"Karen\",\"Karena\",\"Kari\",\"Karia\",\"Karie\",\"Karil\",\"Karilynn\",\"Karin\",\"Karina\",\"Karine\",\"Kariotta\",\"Karisa\",\"Karissa\",\"Karita\",\"Karla\",\"Karlee\",\"Karleen\",\"Karlen\",\"Karlene\",\"Karlie\",\"Karlotta\",\"Karlotte\",\"Karly\",\"Karlyn\",\"Karmen\",\"Karna\",\"Karol\",\"Karola\",\"Karole\",\"Karolina\",\"Karoline\",\"Karoly\",\"Karon\",\"Karrah\",\"Karrie\",\"Karry\",\"Kary\",\"Karyl\",\"Karylin\",\"Karyn\",\"Kasey\",\"Kass\",\"Kassandra\",\"Kassey\",\"Kassi\",\"Kassia\",\"Kassie\",\"Kat\",\"Kata\",\"Katalin\",\"Kate\",\"Katee\",\"Katerina\",\"Katerine\",\"Katey\",\"Kath\",\"Katha\",\"Katharina\",\"Katharine\",\"Katharyn\",\"Kathe\",\"Katherina\",\"Katherine\",\"Katheryn\",\"Kathi\",\"Kathie\",\"Kathleen\",\"Kathlin\",\"Kathrine\",\"Kathryn\",\"Kathryne\",\"Kathy\",\"Kathye\",\"Kati\",\"Katie\",\"Katina\",\"Katine\",\"Katinka\",\"Katleen\",\"Katlin\",\"Katrina\",\"Katrine\",\"Katrinka\",\"Katti\",\"Kattie\",\"Katuscha\",\"Katusha\",\"Katy\",\"Katya\",\"Kay\",\"Kaycee\",\"Kaye\",\"Kayla\",\"Kayle\",\"Kaylee\",\"Kayley\",\"Kaylil\",\"Kaylyn\",\"Keeley\",\"Keelia\",\"Keely\",\"Kelcey\",\"Kelci\",\"Kelcie\",\"Kelcy\",\"Kelila\",\"Kellen\",\"Kelley\",\"Kelli\",\"Kellia\",\"Kellie\",\"Kellina\",\"Kellsie\",\"Kelly\",\"Kellyann\",\"Kelsey\",\"Kelsi\",\"Kelsy\",\"Kendra\",\"Kendre\",\"Kenna\",\"Keri\",\"Keriann\",\"Kerianne\",\"Kerri\",\"Kerrie\",\"Kerrill\",\"Kerrin\",\"Kerry\",\"Kerstin\",\"Kesley\",\"Keslie\",\"Kessia\",\"Kessiah\",\"Ketti\",\"Kettie\",\"Ketty\",\"Kevina\",\"Kevyn\",\"Ki\",\"Kiah\",\"Kial\",\"Kiele\",\"Kiersten\",\"Kikelia\",\"Kiley\",\"Kim\",\"Kimberlee\",\"Kimberley\",\"Kimberli\",\"Kimberly\",\"Kimberlyn\",\"Kimbra\",\"Kimmi\",\"Kimmie\",\"Kimmy\",\"Kinna\",\"Kip\",\"Kipp\",\"Kippie\",\"Kippy\",\"Kira\",\"Kirbee\",\"Kirbie\",\"Kirby\",\"Kiri\",\"Kirsten\",\"Kirsteni\",\"Kirsti\",\"Kirstin\",\"Kirstyn\",\"Kissee\",\"Kissiah\",\"Kissie\",\"Kit\",\"Kitti\",\"Kittie\",\"Kitty\",\"Kizzee\",\"Kizzie\",\"Klara\",\"Klarika\",\"Klarrisa\",\"Konstance\",\"Konstanze\",\"Koo\",\"Kora\",\"Koral\",\"Koralle\",\"Kordula\",\"Kore\",\"Korella\",\"Koren\",\"Koressa\",\"Kori\",\"Korie\",\"Korney\",\"Korrie\",\"Korry\",\"Kris\",\"Krissie\",\"Krissy\",\"Krista\",\"Kristal\",\"Kristan\",\"Kriste\",\"Kristel\",\"Kristen\",\"Kristi\",\"Kristien\",\"Kristin\",\"Kristina\",\"Kristine\",\"Kristy\",\"Kristyn\",\"Krysta\",\"Krystal\",\"Krystalle\",\"Krystle\",\"Krystyna\",\"Kyla\",\"Kyle\",\"Kylen\",\"Kylie\",\"Kylila\",\"Kylynn\",\"Kym\",\"Kynthia\",\"Kyrstin\",\"La Verne\",\"Lacee\",\"Lacey\",\"Lacie\",\"Lacy\",\"Ladonna\",\"Laetitia\",\"Laina\",\"Lainey\",\"Lana\",\"Lanae\",\"Lane\",\"Lanette\",\"Laney\",\"Lani\",\"Lanie\",\"Lanita\",\"Lanna\",\"Lanni\",\"Lanny\",\"Lara\",\"Laraine\",\"Lari\",\"Larina\",\"Larine\",\"Larisa\",\"Larissa\",\"Lark\",\"Laryssa\",\"Latashia\",\"Latia\",\"Latisha\",\"Latrena\",\"Latrina\",\"Laura\",\"Lauraine\",\"Laural\",\"Lauralee\",\"Laure\",\"Lauree\",\"Laureen\",\"Laurel\",\"Laurella\",\"Lauren\",\"Laurena\",\"Laurene\",\"Lauretta\",\"Laurette\",\"Lauri\",\"Laurianne\",\"Laurice\",\"Laurie\",\"Lauryn\",\"Lavena\",\"Laverna\",\"Laverne\",\"Lavina\",\"Lavinia\",\"Lavinie\",\"Layla\",\"Layne\",\"Layney\",\"Lea\",\"Leah\",\"Leandra\",\"Leann\",\"Leanna\",\"Leanor\",\"Leanora\",\"Lebbie\",\"Leda\",\"Lee\",\"Leeann\",\"Leeanne\",\"Leela\",\"Leelah\",\"Leena\",\"Leesa\",\"Leese\",\"Legra\",\"Leia\",\"Leigh\",\"Leigha\",\"Leila\",\"Leilah\",\"Leisha\",\"Lela\",\"Lelah\",\"Leland\",\"Lelia\",\"Lena\",\"Lenee\",\"Lenette\",\"Lenka\",\"Lenna\",\"Lenora\",\"Lenore\",\"Leodora\",\"Leoine\",\"Leola\",\"Leoline\",\"Leona\",\"Leonanie\",\"Leone\",\"Leonelle\",\"Leonie\",\"Leonora\",\"Leonore\",\"Leontine\",\"Leontyne\",\"Leora\",\"Leshia\",\"Lesley\",\"Lesli\",\"Leslie\",\"Lesly\",\"Lesya\",\"Leta\",\"Lethia\",\"Leticia\",\"Letisha\",\"Letitia\",\"Letizia\",\"Letta\",\"Letti\",\"Lettie\",\"Letty\",\"Lexi\",\"Lexie\",\"Lexine\",\"Lexis\",\"Lexy\",\"Leyla\",\"Lezlie\",\"Lia\",\"Lian\",\"Liana\",\"Liane\",\"Lianna\",\"Lianne\",\"Lib\",\"Libbey\",\"Libbi\",\"Libbie\",\"Libby\",\"Licha\",\"Lida\",\"Lidia\",\"Liesa\",\"Lil\",\"Lila\",\"Lilah\",\"Lilas\",\"Lilia\",\"Lilian\",\"Liliane\",\"Lilias\",\"Lilith\",\"Lilla\",\"Lilli\",\"Lillian\",\"Lillis\",\"Lilllie\",\"Lilly\",\"Lily\",\"Lilyan\",\"Lin\",\"Lina\",\"Lind\",\"Linda\",\"Lindi\",\"Lindie\",\"Lindsay\",\"Lindsey\",\"Lindsy\",\"Lindy\",\"Linea\",\"Linell\",\"Linet\",\"Linette\",\"Linn\",\"Linnea\",\"Linnell\",\"Linnet\",\"Linnie\",\"Linzy\",\"Lira\",\"Lisa\",\"Lisabeth\",\"Lisbeth\",\"Lise\",\"Lisetta\",\"Lisette\",\"Lisha\",\"Lishe\",\"Lissa\",\"Lissi\",\"Lissie\",\"Lissy\",\"Lita\",\"Liuka\",\"Liv\",\"Liva\",\"Livia\",\"Livvie\",\"Livvy\",\"Livvyy\",\"Livy\",\"Liz\",\"Liza\",\"Lizabeth\",\"Lizbeth\",\"Lizette\",\"Lizzie\",\"Lizzy\",\"Loella\",\"Lois\",\"Loise\",\"Lola\",\"Loleta\",\"Lolita\",\"Lolly\",\"Lona\",\"Lonee\",\"Loni\",\"Lonna\",\"Lonni\",\"Lonnie\",\"Lora\",\"Lorain\",\"Loraine\",\"Loralee\",\"Loralie\",\"Loralyn\",\"Loree\",\"Loreen\",\"Lorelei\",\"Lorelle\",\"Loren\",\"Lorena\",\"Lorene\",\"Lorenza\",\"Loretta\",\"Lorette\",\"Lori\",\"Loria\",\"Lorianna\",\"Lorianne\",\"Lorie\",\"Lorilee\",\"Lorilyn\",\"Lorinda\",\"Lorine\",\"Lorita\",\"Lorna\",\"Lorne\",\"Lorraine\",\"Lorrayne\",\"Lorri\",\"Lorrie\",\"Lorrin\",\"Lorry\",\"Lory\",\"Lotta\",\"Lotte\",\"Lotti\",\"Lottie\",\"Lotty\",\"Lou\",\"Louella\",\"Louisa\",\"Louise\",\"Louisette\",\"Loutitia\",\"Lu\",\"Luce\",\"Luci\",\"Lucia\",\"Luciana\",\"Lucie\",\"Lucienne\",\"Lucila\",\"Lucilia\",\"Lucille\",\"Lucina\",\"Lucinda\",\"Lucine\",\"Lucita\",\"Lucky\",\"Lucretia\",\"Lucy\",\"Ludovika\",\"Luella\",\"Luelle\",\"Luisa\",\"Luise\",\"Lula\",\"Lulita\",\"Lulu\",\"Lura\",\"Lurette\",\"Lurleen\",\"Lurlene\",\"Lurline\",\"Lusa\",\"Luz\",\"Lyda\",\"Lydia\",\"Lydie\",\"Lyn\",\"Lynda\",\"Lynde\",\"Lyndel\",\"Lyndell\",\"Lyndsay\",\"Lyndsey\",\"Lyndsie\",\"Lyndy\",\"Lynea\",\"Lynelle\",\"Lynett\",\"Lynette\",\"Lynn\",\"Lynna\",\"Lynne\",\"Lynnea\",\"Lynnell\",\"Lynnelle\",\"Lynnet\",\"Lynnett\",\"Lynnette\",\"Lynsey\",\"Lyssa\",\"Mab\",\"Mabel\",\"Mabelle\",\"Mable\",\"Mada\",\"Madalena\",\"Madalyn\",\"Maddalena\",\"Maddi\",\"Maddie\",\"Maddy\",\"Madel\",\"Madelaine\",\"Madeleine\",\"Madelena\",\"Madelene\",\"Madelin\",\"Madelina\",\"Madeline\",\"Madella\",\"Madelle\",\"Madelon\",\"Madelyn\",\"Madge\",\"Madlen\",\"Madlin\",\"Madonna\",\"Mady\",\"Mae\",\"Maegan\",\"Mag\",\"Magda\",\"Magdaia\",\"Magdalen\",\"Magdalena\",\"Magdalene\",\"Maggee\",\"Maggi\",\"Maggie\",\"Maggy\",\"Mahala\",\"Mahalia\",\"Maia\",\"Maible\",\"Maiga\",\"Maighdiln\",\"Mair\",\"Maire\",\"Maisey\",\"Maisie\",\"Maitilde\",\"Mala\",\"Malanie\",\"Malena\",\"Malia\",\"Malina\",\"Malinda\",\"Malinde\",\"Malissa\",\"Malissia\",\"Mallissa\",\"Mallorie\",\"Mallory\",\"Malorie\",\"Malory\",\"Malva\",\"Malvina\",\"Malynda\",\"Mame\",\"Mamie\",\"Manda\",\"Mandi\",\"Mandie\",\"Mandy\",\"Manon\",\"Manya\",\"Mara\",\"Marabel\",\"Marcela\",\"Marcelia\",\"Marcella\",\"Marcelle\",\"Marcellina\",\"Marcelline\",\"Marchelle\",\"Marci\",\"Marcia\",\"Marcie\",\"Marcile\",\"Marcille\",\"Marcy\",\"Mareah\",\"Maren\",\"Marena\",\"Maressa\",\"Marga\",\"Margalit\",\"Margalo\",\"Margaret\",\"Margareta\",\"Margarete\",\"Margaretha\",\"Margarethe\",\"Margaretta\",\"Margarette\",\"Margarita\",\"Margaux\",\"Marge\",\"Margeaux\",\"Margery\",\"Marget\",\"Margette\",\"Margi\",\"Margie\",\"Margit\",\"Margo\",\"Margot\",\"Margret\",\"Marguerite\",\"Margy\",\"Mari\",\"Maria\",\"Mariam\",\"Marian\",\"Mariana\",\"Mariann\",\"Marianna\",\"Marianne\",\"Maribel\",\"Maribelle\",\"Maribeth\",\"Marice\",\"Maridel\",\"Marie\",\"Marie-Ann\",\"Marie-Jeanne\",\"Marieann\",\"Mariejeanne\",\"Mariel\",\"Mariele\",\"Marielle\",\"Mariellen\",\"Marietta\",\"Mariette\",\"Marigold\",\"Marijo\",\"Marika\",\"Marilee\",\"Marilin\",\"Marillin\",\"Marilyn\",\"Marin\",\"Marina\",\"Marinna\",\"Marion\",\"Mariquilla\",\"Maris\",\"Marisa\",\"Mariska\",\"Marissa\",\"Marita\",\"Maritsa\",\"Mariya\",\"Marj\",\"Marja\",\"Marje\",\"Marji\",\"Marjie\",\"Marjorie\",\"Marjory\",\"Marjy\",\"Marketa\",\"Marla\",\"Marlane\",\"Marleah\",\"Marlee\",\"Marleen\",\"Marlena\",\"Marlene\",\"Marley\",\"Marlie\",\"Marline\",\"Marlo\",\"Marlyn\",\"Marna\",\"Marne\",\"Marney\",\"Marni\",\"Marnia\",\"Marnie\",\"Marquita\",\"Marrilee\",\"Marris\",\"Marrissa\",\"Marsha\",\"Marsiella\",\"Marta\",\"Martelle\",\"Martguerita\",\"Martha\",\"Marthe\",\"Marthena\",\"Marti\",\"Martica\",\"Martie\",\"Martina\",\"Martita\",\"Marty\",\"Martynne\",\"Mary\",\"Marya\",\"Maryann\",\"Maryanna\",\"Maryanne\",\"Marybelle\",\"Marybeth\",\"Maryellen\",\"Maryjane\",\"Maryjo\",\"Maryl\",\"Marylee\",\"Marylin\",\"Marylinda\",\"Marylou\",\"Marylynne\",\"Maryrose\",\"Marys\",\"Marysa\",\"Masha\",\"Matelda\",\"Mathilda\",\"Mathilde\",\"Matilda\",\"Matilde\",\"Matti\",\"Mattie\",\"Matty\",\"Maud\",\"Maude\",\"Maudie\",\"Maura\",\"Maure\",\"Maureen\",\"Maureene\",\"Maurene\",\"Maurine\",\"Maurise\",\"Maurita\",\"Maurizia\",\"Mavis\",\"Mavra\",\"Max\",\"Maxi\",\"Maxie\",\"Maxine\",\"Maxy\",\"May\",\"Maybelle\",\"Maye\",\"Mead\",\"Meade\",\"Meagan\",\"Meaghan\",\"Meara\",\"Mechelle\",\"Meg\",\"Megan\",\"Megen\",\"Meggi\",\"Meggie\",\"Meggy\",\"Meghan\",\"Meghann\",\"Mehetabel\",\"Mei\",\"Mel\",\"Mela\",\"Melamie\",\"Melania\",\"Melanie\",\"Melantha\",\"Melany\",\"Melba\",\"Melesa\",\"Melessa\",\"Melicent\",\"Melina\",\"Melinda\",\"Melinde\",\"Melisa\",\"Melisande\",\"Melisandra\",\"Melisenda\",\"Melisent\",\"Melissa\",\"Melisse\",\"Melita\",\"Melitta\",\"Mella\",\"Melli\",\"Mellicent\",\"Mellie\",\"Mellisa\",\"Mellisent\",\"Melloney\",\"Melly\",\"Melodee\",\"Melodie\",\"Melody\",\"Melonie\",\"Melony\",\"Melosa\",\"Melva\",\"Mercedes\",\"Merci\",\"Mercie\",\"Mercy\",\"Meredith\",\"Meredithe\",\"Meridel\",\"Meridith\",\"Meriel\",\"Merilee\",\"Merilyn\",\"Meris\",\"Merissa\",\"Merl\",\"Merla\",\"Merle\",\"Merlina\",\"Merline\",\"Merna\",\"Merola\",\"Merralee\",\"Merridie\",\"Merrie\",\"Merrielle\",\"Merrile\",\"Merrilee\",\"Merrili\",\"Merrill\",\"Merrily\",\"Merry\",\"Mersey\",\"Meryl\",\"Meta\",\"Mia\",\"Micaela\",\"Michaela\",\"Michaelina\",\"Michaeline\",\"Michaella\",\"Michal\",\"Michel\",\"Michele\",\"Michelina\",\"Micheline\",\"Michell\",\"Michelle\",\"Micki\",\"Mickie\",\"Micky\",\"Midge\",\"Mignon\",\"Mignonne\",\"Miguela\",\"Miguelita\",\"Mikaela\",\"Mil\",\"Mildred\",\"Mildrid\",\"Milena\",\"Milicent\",\"Milissent\",\"Milka\",\"Milli\",\"Millicent\",\"Millie\",\"Millisent\",\"Milly\",\"Milzie\",\"Mimi\",\"Min\",\"Mina\",\"Minda\",\"Mindy\",\"Minerva\",\"Minetta\",\"Minette\",\"Minna\",\"Minnaminnie\",\"Minne\",\"Minni\",\"Minnie\",\"Minnnie\",\"Minny\",\"Minta\",\"Miof Mela\",\"Miquela\",\"Mira\",\"Mirabel\",\"Mirabella\",\"Mirabelle\",\"Miran\",\"Miranda\",\"Mireielle\",\"Mireille\",\"Mirella\",\"Mirelle\",\"Miriam\",\"Mirilla\",\"Mirna\",\"Misha\",\"Missie\",\"Missy\",\"Misti\",\"Misty\",\"Mitzi\",\"Modesta\",\"Modestia\",\"Modestine\",\"Modesty\",\"Moina\",\"Moira\",\"Moll\",\"Mollee\",\"Molli\",\"Mollie\",\"Molly\",\"Mommy\",\"Mona\",\"Monah\",\"Monica\",\"Monika\",\"Monique\",\"Mora\",\"Moreen\",\"Morena\",\"Morgan\",\"Morgana\",\"Morganica\",\"Morganne\",\"Morgen\",\"Moria\",\"Morissa\",\"Morna\",\"Moselle\",\"Moyna\",\"Moyra\",\"Mozelle\",\"Muffin\",\"Mufi\",\"Mufinella\",\"Muire\",\"Mureil\",\"Murial\",\"Muriel\",\"Murielle\",\"Myra\",\"Myrah\",\"Myranda\",\"Myriam\",\"Myrilla\",\"Myrle\",\"Myrlene\",\"Myrna\",\"Myrta\",\"Myrtia\",\"Myrtice\",\"Myrtie\",\"Myrtle\",\"Nada\",\"Nadean\",\"Nadeen\",\"Nadia\",\"Nadine\",\"Nadiya\",\"Nady\",\"Nadya\",\"Nalani\",\"Nan\",\"Nana\",\"Nananne\",\"Nance\",\"Nancee\",\"Nancey\",\"Nanci\",\"Nancie\",\"Nancy\",\"Nanete\",\"Nanette\",\"Nani\",\"Nanice\",\"Nanine\",\"Nannette\",\"Nanni\",\"Nannie\",\"Nanny\",\"Nanon\",\"Naoma\",\"Naomi\",\"Nara\",\"Nari\",\"Nariko\",\"Nat\",\"Nata\",\"Natala\",\"Natalee\",\"Natalie\",\"Natalina\",\"Nataline\",\"Natalya\",\"Natasha\",\"Natassia\",\"Nathalia\",\"Nathalie\",\"Natividad\",\"Natka\",\"Natty\",\"Neala\",\"Neda\",\"Nedda\",\"Nedi\",\"Neely\",\"Neila\",\"Neile\",\"Neilla\",\"Neille\",\"Nelia\",\"Nelie\",\"Nell\",\"Nelle\",\"Nelli\",\"Nellie\",\"Nelly\",\"Nerissa\",\"Nerita\",\"Nert\",\"Nerta\",\"Nerte\",\"Nerti\",\"Nertie\",\"Nerty\",\"Nessa\",\"Nessi\",\"Nessie\",\"Nessy\",\"Nesta\",\"Netta\",\"Netti\",\"Nettie\",\"Nettle\",\"Netty\",\"Nevsa\",\"Neysa\",\"Nichol\",\"Nichole\",\"Nicholle\",\"Nicki\",\"Nickie\",\"Nicky\",\"Nicol\",\"Nicola\",\"Nicole\",\"Nicolea\",\"Nicolette\",\"Nicoli\",\"Nicolina\",\"Nicoline\",\"Nicolle\",\"Nikaniki\",\"Nike\",\"Niki\",\"Nikki\",\"Nikkie\",\"Nikoletta\",\"Nikolia\",\"Nina\",\"Ninetta\",\"Ninette\",\"Ninnetta\",\"Ninnette\",\"Ninon\",\"Nissa\",\"Nisse\",\"Nissie\",\"Nissy\",\"Nita\",\"Nixie\",\"Noami\",\"Noel\",\"Noelani\",\"Noell\",\"Noella\",\"Noelle\",\"Noellyn\",\"Noelyn\",\"Noemi\",\"Nola\",\"Nolana\",\"Nolie\",\"Nollie\",\"Nomi\",\"Nona\",\"Nonah\",\"Noni\",\"Nonie\",\"Nonna\",\"Nonnah\",\"Nora\",\"Norah\",\"Norean\",\"Noreen\",\"Norene\",\"Norina\",\"Norine\",\"Norma\",\"Norri\",\"Norrie\",\"Norry\",\"Novelia\",\"Nydia\",\"Nyssa\",\"Octavia\",\"Odele\",\"Odelia\",\"Odelinda\",\"Odella\",\"Odelle\",\"Odessa\",\"Odetta\",\"Odette\",\"Odilia\",\"Odille\",\"Ofelia\",\"Ofella\",\"Ofilia\",\"Ola\",\"Olenka\",\"Olga\",\"Olia\",\"Olimpia\",\"Olive\",\"Olivette\",\"Olivia\",\"Olivie\",\"Oliy\",\"Ollie\",\"Olly\",\"Olva\",\"Olwen\",\"Olympe\",\"Olympia\",\"Olympie\",\"Ondrea\",\"Oneida\",\"Onida\",\"Oona\",\"Opal\",\"Opalina\",\"Opaline\",\"Ophelia\",\"Ophelie\",\"Ora\",\"Oralee\",\"Oralia\",\"Oralie\",\"Oralla\",\"Oralle\",\"Orel\",\"Orelee\",\"Orelia\",\"Orelie\",\"Orella\",\"Orelle\",\"Oriana\",\"Orly\",\"Orsa\",\"Orsola\",\"Ortensia\",\"Otha\",\"Othelia\",\"Othella\",\"Othilia\",\"Othilie\",\"Ottilie\",\"Page\",\"Paige\",\"Paloma\",\"Pam\",\"Pamela\",\"Pamelina\",\"Pamella\",\"Pammi\",\"Pammie\",\"Pammy\",\"Pandora\",\"Pansie\",\"Pansy\",\"Paola\",\"Paolina\",\"Papagena\",\"Pat\",\"Patience\",\"Patrica\",\"Patrice\",\"Patricia\",\"Patrizia\",\"Patsy\",\"Patti\",\"Pattie\",\"Patty\",\"Paula\",\"Paule\",\"Pauletta\",\"Paulette\",\"Pauli\",\"Paulie\",\"Paulina\",\"Pauline\",\"Paulita\",\"Pauly\",\"Pavia\",\"Pavla\",\"Pearl\",\"Pearla\",\"Pearle\",\"Pearline\",\"Peg\",\"Pegeen\",\"Peggi\",\"Peggie\",\"Peggy\",\"Pen\",\"Penelopa\",\"Penelope\",\"Penni\",\"Pennie\",\"Penny\",\"Pepi\",\"Pepita\",\"Peri\",\"Peria\",\"Perl\",\"Perla\",\"Perle\",\"Perri\",\"Perrine\",\"Perry\",\"Persis\",\"Pet\",\"Peta\",\"Petra\",\"Petrina\",\"Petronella\",\"Petronia\",\"Petronilla\",\"Petronille\",\"Petunia\",\"Phaedra\",\"Phaidra\",\"Phebe\",\"Phedra\",\"Phelia\",\"Phil\",\"Philipa\",\"Philippa\",\"Philippe\",\"Philippine\",\"Philis\",\"Phillida\",\"Phillie\",\"Phillis\",\"Philly\",\"Philomena\",\"Phoebe\",\"Phylis\",\"Phyllida\",\"Phyllis\",\"Phyllys\",\"Phylys\",\"Pia\",\"Pier\",\"Pierette\",\"Pierrette\",\"Pietra\",\"Piper\",\"Pippa\",\"Pippy\",\"Polly\",\"Pollyanna\",\"Pooh\",\"Poppy\",\"Portia\",\"Pris\",\"Prisca\",\"Priscella\",\"Priscilla\",\"Prissie\",\"Pru\",\"Prudence\",\"Prudi\",\"Prudy\",\"Prue\",\"Queenie\",\"Quentin\",\"Querida\",\"Quinn\",\"Quinta\",\"Quintana\",\"Quintilla\",\"Quintina\",\"Rachael\",\"Rachel\",\"Rachele\",\"Rachelle\",\"Rae\",\"Raeann\",\"Raf\",\"Rafa\",\"Rafaela\",\"Rafaelia\",\"Rafaelita\",\"Rahal\",\"Rahel\",\"Raina\",\"Raine\",\"Rakel\",\"Ralina\",\"Ramona\",\"Ramonda\",\"Rana\",\"Randa\",\"Randee\",\"Randene\",\"Randi\",\"Randie\",\"Randy\",\"Ranee\",\"Rani\",\"Rania\",\"Ranice\",\"Ranique\",\"Ranna\",\"Raphaela\",\"Raquel\",\"Raquela\",\"Rasia\",\"Rasla\",\"Raven\",\"Ray\",\"Raychel\",\"Raye\",\"Rayna\",\"Raynell\",\"Rayshell\",\"Rea\",\"Reba\",\"Rebbecca\",\"Rebe\",\"Rebeca\",\"Rebecca\",\"Rebecka\",\"Rebeka\",\"Rebekah\",\"Rebekkah\",\"Ree\",\"Reeba\",\"Reena\",\"Reeta\",\"Reeva\",\"Regan\",\"Reggi\",\"Reggie\",\"Regina\",\"Regine\",\"Reiko\",\"Reina\",\"Reine\",\"Remy\",\"Rena\",\"Renae\",\"Renata\",\"Renate\",\"Rene\",\"Renee\",\"Renell\",\"Renelle\",\"Renie\",\"Rennie\",\"Reta\",\"Retha\",\"Revkah\",\"Rey\",\"Reyna\",\"Rhea\",\"Rheba\",\"Rheta\",\"Rhetta\",\"Rhiamon\",\"Rhianna\",\"Rhianon\",\"Rhoda\",\"Rhodia\",\"Rhodie\",\"Rhody\",\"Rhona\",\"Rhonda\",\"Riane\",\"Riannon\",\"Rianon\",\"Rica\",\"Ricca\",\"Rici\",\"Ricki\",\"Rickie\",\"Ricky\",\"Riki\",\"Rikki\",\"Rina\",\"Risa\",\"Rita\",\"Riva\",\"Rivalee\",\"Rivi\",\"Rivkah\",\"Rivy\",\"Roana\",\"Roanna\",\"Roanne\",\"Robbi\",\"Robbie\",\"Robbin\",\"Robby\",\"Robbyn\",\"Robena\",\"Robenia\",\"Roberta\",\"Robin\",\"Robina\",\"Robinet\",\"Robinett\",\"Robinetta\",\"Robinette\",\"Robinia\",\"Roby\",\"Robyn\",\"Roch\",\"Rochell\",\"Rochella\",\"Rochelle\",\"Rochette\",\"Roda\",\"Rodi\",\"Rodie\",\"Rodina\",\"Rois\",\"Romola\",\"Romona\",\"Romonda\",\"Romy\",\"Rona\",\"Ronalda\",\"Ronda\",\"Ronica\",\"Ronna\",\"Ronni\",\"Ronnica\",\"Ronnie\",\"Ronny\",\"Roobbie\",\"Rora\",\"Rori\",\"Rorie\",\"Rory\",\"Ros\",\"Rosa\",\"Rosabel\",\"Rosabella\",\"Rosabelle\",\"Rosaleen\",\"Rosalia\",\"Rosalie\",\"Rosalind\",\"Rosalinda\",\"Rosalinde\",\"Rosaline\",\"Rosalyn\",\"Rosalynd\",\"Rosamond\",\"Rosamund\",\"Rosana\",\"Rosanna\",\"Rosanne\",\"Rose\",\"Roseann\",\"Roseanna\",\"Roseanne\",\"Roselia\",\"Roselin\",\"Roseline\",\"Rosella\",\"Roselle\",\"Rosemaria\",\"Rosemarie\",\"Rosemary\",\"Rosemonde\",\"Rosene\",\"Rosetta\",\"Rosette\",\"Roshelle\",\"Rosie\",\"Rosina\",\"Rosita\",\"Roslyn\",\"Rosmunda\",\"Rosy\",\"Row\",\"Rowe\",\"Rowena\",\"Roxana\",\"Roxane\",\"Roxanna\",\"Roxanne\",\"Roxi\",\"Roxie\",\"Roxine\",\"Roxy\",\"Roz\",\"Rozalie\",\"Rozalin\",\"Rozamond\",\"Rozanna\",\"Rozanne\",\"Roze\",\"Rozele\",\"Rozella\",\"Rozelle\",\"Rozina\",\"Rubetta\",\"Rubi\",\"Rubia\",\"Rubie\",\"Rubina\",\"Ruby\",\"Ruperta\",\"Ruth\",\"Ruthann\",\"Ruthanne\",\"Ruthe\",\"Ruthi\",\"Ruthie\",\"Ruthy\",\"Ryann\",\"Rycca\",\"Saba\",\"Sabina\",\"Sabine\",\"Sabra\",\"Sabrina\",\"Sacha\",\"Sada\",\"Sadella\",\"Sadie\",\"Sadye\",\"Saidee\",\"Sal\",\"Salaidh\",\"Sallee\",\"Salli\",\"Sallie\",\"Sally\",\"Sallyann\",\"Sallyanne\",\"Saloma\",\"Salome\",\"Salomi\",\"Sam\",\"Samantha\",\"Samara\",\"Samaria\",\"Sammy\",\"Sande\",\"Sandi\",\"Sandie\",\"Sandra\",\"Sandy\",\"Sandye\",\"Sapphira\",\"Sapphire\",\"Sara\",\"Sara-Ann\",\"Saraann\",\"Sarah\",\"Sarajane\",\"Saree\",\"Sarena\",\"Sarene\",\"Sarette\",\"Sari\",\"Sarina\",\"Sarine\",\"Sarita\",\"Sascha\",\"Sasha\",\"Sashenka\",\"Saudra\",\"Saundra\",\"Savina\",\"Sayre\",\"Scarlet\",\"Scarlett\",\"Sean\",\"Seana\",\"Seka\",\"Sela\",\"Selena\",\"Selene\",\"Selestina\",\"Selia\",\"Selie\",\"Selina\",\"Selinda\",\"Seline\",\"Sella\",\"Selle\",\"Selma\",\"Sena\",\"Sephira\",\"Serena\",\"Serene\",\"Shae\",\"Shaina\",\"Shaine\",\"Shalna\",\"Shalne\",\"Shana\",\"Shanda\",\"Shandee\",\"Shandeigh\",\"Shandie\",\"Shandra\",\"Shandy\",\"Shane\",\"Shani\",\"Shanie\",\"Shanna\",\"Shannah\",\"Shannen\",\"Shannon\",\"Shanon\",\"Shanta\",\"Shantee\",\"Shara\",\"Sharai\",\"Shari\",\"Sharia\",\"Sharity\",\"Sharl\",\"Sharla\",\"Sharleen\",\"Sharlene\",\"Sharline\",\"Sharon\",\"Sharona\",\"Sharron\",\"Sharyl\",\"Shaun\",\"Shauna\",\"Shawn\",\"Shawna\",\"Shawnee\",\"Shay\",\"Shayla\",\"Shaylah\",\"Shaylyn\",\"Shaylynn\",\"Shayna\",\"Shayne\",\"Shea\",\"Sheba\",\"Sheela\",\"Sheelagh\",\"Sheelah\",\"Sheena\",\"Sheeree\",\"Sheila\",\"Sheila-Kathryn\",\"Sheilah\",\"Shel\",\"Shela\",\"Shelagh\",\"Shelba\",\"Shelbi\",\"Shelby\",\"Shelia\",\"Shell\",\"Shelley\",\"Shelli\",\"Shellie\",\"Shelly\",\"Shena\",\"Sher\",\"Sheree\",\"Sheri\",\"Sherie\",\"Sherill\",\"Sherilyn\",\"Sherline\",\"Sherri\",\"Sherrie\",\"Sherry\",\"Sherye\",\"Sheryl\",\"Shina\",\"Shir\",\"Shirl\",\"Shirlee\",\"Shirleen\",\"Shirlene\",\"Shirley\",\"Shirline\",\"Shoshana\",\"Shoshanna\",\"Siana\",\"Sianna\",\"Sib\",\"Sibbie\",\"Sibby\",\"Sibeal\",\"Sibel\",\"Sibella\",\"Sibelle\",\"Sibilla\",\"Sibley\",\"Sibyl\",\"Sibylla\",\"Sibylle\",\"Sidoney\",\"Sidonia\",\"Sidonnie\",\"Sigrid\",\"Sile\",\"Sileas\",\"Silva\",\"Silvana\",\"Silvia\",\"Silvie\",\"Simona\",\"Simone\",\"Simonette\",\"Simonne\",\"Sindee\",\"Siobhan\",\"Sioux\",\"Siouxie\",\"Sisely\",\"Sisile\",\"Sissie\",\"Sissy\",\"Siusan\",\"Sofia\",\"Sofie\",\"Sondra\",\"Sonia\",\"Sonja\",\"Sonni\",\"Sonnie\",\"Sonnnie\",\"Sonny\",\"Sonya\",\"Sophey\",\"Sophi\",\"Sophia\",\"Sophie\",\"Sophronia\",\"Sorcha\",\"Sosanna\",\"Stace\",\"Stacee\",\"Stacey\",\"Staci\",\"Stacia\",\"Stacie\",\"Stacy\",\"Stafani\",\"Star\",\"Starla\",\"Starlene\",\"Starlin\",\"Starr\",\"Stefa\",\"Stefania\",\"Stefanie\",\"Steffane\",\"Steffi\",\"Steffie\",\"Stella\",\"Stepha\",\"Stephana\",\"Stephani\",\"Stephanie\",\"Stephannie\",\"Stephenie\",\"Stephi\",\"Stephie\",\"Stephine\",\"Stesha\",\"Stevana\",\"Stevena\",\"Stoddard\",\"Storm\",\"Stormi\",\"Stormie\",\"Stormy\",\"Sue\",\"Suellen\",\"Sukey\",\"Suki\",\"Sula\",\"Sunny\",\"Sunshine\",\"Susan\",\"Susana\",\"Susanetta\",\"Susann\",\"Susanna\",\"Susannah\",\"Susanne\",\"Susette\",\"Susi\",\"Susie\",\"Susy\",\"Suzann\",\"Suzanna\",\"Suzanne\",\"Suzette\",\"Suzi\",\"Suzie\",\"Suzy\",\"Sybil\",\"Sybila\",\"Sybilla\",\"Sybille\",\"Sybyl\",\"Sydel\",\"Sydelle\",\"Sydney\",\"Sylvia\",\"Tabatha\",\"Tabbatha\",\"Tabbi\",\"Tabbie\",\"Tabbitha\",\"Tabby\",\"Tabina\",\"Tabitha\",\"Taffy\",\"Talia\",\"Tallia\",\"Tallie\",\"Tallou\",\"Tallulah\",\"Tally\",\"Talya\",\"Talyah\",\"Tamar\",\"Tamara\",\"Tamarah\",\"Tamarra\",\"Tamera\",\"Tami\",\"Tamiko\",\"Tamma\",\"Tammara\",\"Tammi\",\"Tammie\",\"Tammy\",\"Tamqrah\",\"Tamra\",\"Tana\",\"Tandi\",\"Tandie\",\"Tandy\",\"Tanhya\",\"Tani\",\"Tania\",\"Tanitansy\",\"Tansy\",\"Tanya\",\"Tara\",\"Tarah\",\"Tarra\",\"Tarrah\",\"Taryn\",\"Tasha\",\"Tasia\",\"Tate\",\"Tatiana\",\"Tatiania\",\"Tatum\",\"Tawnya\",\"Tawsha\",\"Ted\",\"Tedda\",\"Teddi\",\"Teddie\",\"Teddy\",\"Tedi\",\"Tedra\",\"Teena\",\"TEirtza\",\"Teodora\",\"Tera\",\"Teresa\",\"Terese\",\"Teresina\",\"Teresita\",\"Teressa\",\"Teri\",\"Teriann\",\"Terra\",\"Terri\",\"Terrie\",\"Terrijo\",\"Terry\",\"Terrye\",\"Tersina\",\"Terza\",\"Tess\",\"Tessa\",\"Tessi\",\"Tessie\",\"Tessy\",\"Thalia\",\"Thea\",\"Theadora\",\"Theda\",\"Thekla\",\"Thelma\",\"Theo\",\"Theodora\",\"Theodosia\",\"Theresa\",\"Therese\",\"Theresina\",\"Theresita\",\"Theressa\",\"Therine\",\"Thia\",\"Thomasa\",\"Thomasin\",\"Thomasina\",\"Thomasine\",\"Tiena\",\"Tierney\",\"Tiertza\",\"Tiff\",\"Tiffani\",\"Tiffanie\",\"Tiffany\",\"Tiffi\",\"Tiffie\",\"Tiffy\",\"Tilda\",\"Tildi\",\"Tildie\",\"Tildy\",\"Tillie\",\"Tilly\",\"Tim\",\"Timi\",\"Timmi\",\"Timmie\",\"Timmy\",\"Timothea\",\"Tina\",\"Tine\",\"Tiphani\",\"Tiphanie\",\"Tiphany\",\"Tish\",\"Tisha\",\"Tobe\",\"Tobey\",\"Tobi\",\"Toby\",\"Tobye\",\"Toinette\",\"Toma\",\"Tomasina\",\"Tomasine\",\"Tomi\",\"Tommi\",\"Tommie\",\"Tommy\",\"Toni\",\"Tonia\",\"Tonie\",\"Tony\",\"Tonya\",\"Tonye\",\"Tootsie\",\"Torey\",\"Tori\",\"Torie\",\"Torrie\",\"Tory\",\"Tova\",\"Tove\",\"Tracee\",\"Tracey\",\"Traci\",\"Tracie\",\"Tracy\",\"Trenna\",\"Tresa\",\"Trescha\",\"Tressa\",\"Tricia\",\"Trina\",\"Trish\",\"Trisha\",\"Trista\",\"Trix\",\"Trixi\",\"Trixie\",\"Trixy\",\"Truda\",\"Trude\",\"Trudey\",\"Trudi\",\"Trudie\",\"Trudy\",\"Trula\",\"Tuesday\",\"Twila\",\"Twyla\",\"Tybi\",\"Tybie\",\"Tyne\",\"Ula\",\"Ulla\",\"Ulrica\",\"Ulrika\",\"Ulrikaumeko\",\"Ulrike\",\"Umeko\",\"Una\",\"Ursa\",\"Ursala\",\"Ursola\",\"Ursula\",\"Ursulina\",\"Ursuline\",\"Uta\",\"Val\",\"Valaree\",\"Valaria\",\"Vale\",\"Valeda\",\"Valencia\",\"Valene\",\"Valenka\",\"Valentia\",\"Valentina\",\"Valentine\",\"Valera\",\"Valeria\",\"Valerie\",\"Valery\",\"Valerye\",\"Valida\",\"Valina\",\"Valli\",\"Vallie\",\"Vally\",\"Valma\",\"Valry\",\"Van\",\"Vanda\",\"Vanessa\",\"Vania\",\"Vanna\",\"Vanni\",\"Vannie\",\"Vanny\",\"Vanya\",\"Veda\",\"Velma\",\"Velvet\",\"Venita\",\"Venus\",\"Vera\",\"Veradis\",\"Vere\",\"Verena\",\"Verene\",\"Veriee\",\"Verile\",\"Verina\",\"Verine\",\"Verla\",\"Verna\",\"Vernice\",\"Veronica\",\"Veronika\",\"Veronike\",\"Veronique\",\"Vevay\",\"Vi\",\"Vicki\",\"Vickie\",\"Vicky\",\"Victoria\",\"Vida\",\"Viki\",\"Vikki\",\"Vikky\",\"Vilhelmina\",\"Vilma\",\"Vin\",\"Vina\",\"Vinita\",\"Vinni\",\"Vinnie\",\"Vinny\",\"Viola\",\"Violante\",\"Viole\",\"Violet\",\"Violetta\",\"Violette\",\"Virgie\",\"Virgina\",\"Virginia\",\"Virginie\",\"Vita\",\"Vitia\",\"Vitoria\",\"Vittoria\",\"Viv\",\"Viva\",\"Vivi\",\"Vivia\",\"Vivian\",\"Viviana\",\"Vivianna\",\"Vivianne\",\"Vivie\",\"Vivien\",\"Viviene\",\"Vivienne\",\"Viviyan\",\"Vivyan\",\"Vivyanne\",\"Vonni\",\"Vonnie\",\"Vonny\",\"Vyky\",\"Wallie\",\"Wallis\",\"Walliw\",\"Wally\",\"Waly\",\"Wanda\",\"Wandie\",\"Wandis\",\"Waneta\",\"Wanids\",\"Wenda\",\"Wendeline\",\"Wendi\",\"Wendie\",\"Wendy\",\"Wendye\",\"Wenona\",\"Wenonah\",\"Whitney\",\"Wileen\",\"Wilhelmina\",\"Wilhelmine\",\"Wilie\",\"Willa\",\"Willabella\",\"Willamina\",\"Willetta\",\"Willette\",\"Willi\",\"Willie\",\"Willow\",\"Willy\",\"Willyt\",\"Wilma\",\"Wilmette\",\"Wilona\",\"Wilone\",\"Wilow\",\"Windy\",\"Wini\",\"Winifred\",\"Winna\",\"Winnah\",\"Winne\",\"Winni\",\"Winnie\",\"Winnifred\",\"Winny\",\"Winona\",\"Winonah\",\"Wren\",\"Wrennie\",\"Wylma\",\"Wynn\",\"Wynne\",\"Wynnie\",\"Wynny\",\"Xaviera\",\"Xena\",\"Xenia\",\"Xylia\",\"Xylina\",\"Yalonda\",\"Yasmeen\",\"Yasmin\",\"Yelena\",\"Yetta\",\"Yettie\",\"Yetty\",\"Yevette\",\"Ynes\",\"Ynez\",\"Yoko\",\"Yolanda\",\"Yolande\",\"Yolane\",\"Yolanthe\",\"Yoshi\",\"Yoshiko\",\"Yovonnda\",\"Ysabel\",\"Yvette\",\"Yvonne\",\"Zabrina\",\"Zahara\",\"Zandra\",\"Zaneta\",\"Zara\",\"Zarah\",\"Zaria\",\"Zarla\",\"Zea\",\"Zelda\",\"Zelma\",\"Zena\",\"Zenia\",\"Zia\",\"Zilvia\",\"Zita\",\"Zitella\",\"Zoe\",\"Zola\",\"Zonda\",\"Zondra\",\"Zonnya\",\"Zora\",\"Zorah\",\"Zorana\",\"Zorina\",\"Zorine\",\"Zsa Zsa\",\"Zsazsa\",\"Zulema\",\"Zuzana\"]");

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gianthead/Documents/faks/IVgodina/pveb/14-skrabo/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map