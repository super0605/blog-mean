webpackJsonp([1,5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(198),
        styles: [__webpack_require__(179)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_blogs_blogs_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authguard_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgot_password_forgot_password_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_blog_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_users_users_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_write_blog_write_blog_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tiny_editor_tiny_editor_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blog_blog_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edit_blog_edit_blog_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_search_search_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_blog_list_blog_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_comment_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_15__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'blogs', component: __WEBPACK_IMPORTED_MODULE_11__components_blogs_blogs_component__["a" /* BlogsComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_17__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'writeBlog', component: __WEBPACK_IMPORTED_MODULE_18__components_write_blog_write_blog_component__["a" /* WriteBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authguard_service__["a" /* AuthguardService */]] },
    { path: 'tiny', component: __WEBPACK_IMPORTED_MODULE_19__components_tiny_editor_tiny_editor_component__["a" /* TinyEditorComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_20__components_blog_blog_component__["a" /* BlogComponent */] },
    { path: 'editBlog', component: __WEBPACK_IMPORTED_MODULE_21__components_edit_blog_edit_blog_component__["a" /* EditBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authguard_service__["a" /* AuthguardService */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_22__components_search_search_component__["a" /* SearchComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_blogs_blogs_component__["a" /* BlogsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_write_blog_write_blog_component__["a" /* WriteBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_tiny_editor_tiny_editor_component__["a" /* TinyEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_blog_list_blog_list_component__["a" /* BlogListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_authguard_service__["a" /* AuthguardService */], __WEBPACK_IMPORTED_MODULE_16__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_24__services_comment_service__["a" /* CommentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListComponent = (function () {
    function BlogListComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    BlogListComponent.prototype.ngOnInit = function () {
    };
    BlogListComponent.prototype.prevPage = function () {
        if (this.currentTag === null) {
            this.router.navigate(['/blogs'], { queryParams: { pn: this.currentPage - 1 } });
        }
        else {
            this.router.navigate(['/blogs'], { queryParams: { tag: this.currentTag, pn: this.currentPage - 1 } });
        }
        window.scrollTo(0, 0);
    };
    BlogListComponent.prototype.nextPage = function () {
        if (this.currentTag === null) {
            this.router.navigate(['/blogs'], { queryParams: { pn: this.currentPage + 1 } });
        }
        else {
            this.router.navigate(['/blogs'], { queryParams: { tag: this.currentTag, pn: this.currentPage + 1 } });
        }
        window.scrollTo(0, 0);
    };
    BlogListComponent.prototype.prevBtn = function () {
        return {
            'btn': true,
            'btn-sm': true,
            'btn-primary': true,
            'disabled': !(this.currentPage > 0),
        };
    };
    BlogListComponent.prototype.nextBtn = function () {
        return {
            'btn': true,
            'btn-sm': true,
            'btn-primary': true,
            'disabled': !(this.currentPage < Math.floor(this.blogCount / 10)),
        };
    };
    return BlogListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BlogListComponent.prototype, "blogList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BlogListComponent.prototype, "currentTag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BlogListComponent.prototype, "currentPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BlogListComponent.prototype, "blogCount", void 0);
BlogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-list',
        template: __webpack_require__(199),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], BlogListComponent);

var _a, _b;
//# sourceMappingURL=blog-list.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comment_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = (function () {
    function BlogComponent(router, blogService, activatedRoute, commentService, authService, flashMessagesService) {
        this.router = router;
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.commentService = commentService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.currentBlog = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.blogId = params['id'];
            var blog = {
                id: _this.blogId,
            };
            var comment = {
                for: "blog",
                id: _this.blogId,
            };
            _this.blogService.getBlogById(blog).subscribe(function (data) {
                _this.currentBlog = data;
                _this.username = JSON.parse(localStorage.getItem('user')).username;
                if (_this.username === _this.currentBlog.username) {
                    _this.editable = true;
                }
                else {
                    _this.editable = false;
                }
            }, function (err) {
                _this.blogService.handleError(err);
            });
            _this.commentService.searchComments(comment).subscribe(function (data) {
                _this.commentList = data;
            }, function (err) {
                _this.blogService.handleError(err);
            });
        });
    };
    BlogComponent.prototype.addComment = function () {
        var _this = this;
        var newComment = {
            for: "blog",
            id: this.blogId,
            username: this.username,
            body: this.commentBody,
            date: Date.now(),
        };
        this.commentBody = "";
        this.commentList.unshift(newComment);
        this.commentService.addComment(newComment).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
            }
            _this.router.navigate(['/blog'], { queryParams: { id: _this.blogId } });
        }, function (err) {
            _this.blogService.handleError(err);
        });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(200),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comment_service__["a" /* CommentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], BlogComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogsComponent = (function () {
    function BlogsComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataAvailable = false;
        this.prevBtnActive = false;
        this.nextBtnActive = false;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.currentPage = Number(params['pn']);
            _this.currentTag = params['tag'];
            if (!_this.currentTag) {
                _this.currentTag = null;
            }
            var blogInfo = {
                tag: _this.currentTag,
                pn: _this.currentPage
            };
            _this.blogService.getBlogCount(blogInfo).subscribe(function (data) {
                _this.blogCount = Number(data.count);
            }, function (err) {
                _this.blogService.handleError(err);
            });
            _this.blogService.getBlogs(blogInfo).subscribe(function (data) {
                _this.blogList = data;
                _this.dataAvailable = true;
            }, function (err) {
                _this.blogService.handleError(err);
            });
        });
    };
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blogs',
        template: __webpack_require__(201),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], BlogsComponent);

var _a, _b, _c;
//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tinymce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_themes_modern__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_themes_modern___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tinymce_themes_modern__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_table__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_tinymce_plugins_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_tinymce_plugins_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_image__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_tinymce_plugins_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_paste__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_paste___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_tinymce_plugins_paste__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditBlogComponent = (function () {
    function EditBlogComponent(blogService, flashMessagesService, router, activatedRoute) {
        this.blogService = blogService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tags = [];
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deleteBtnText = "Delete Blog";
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.blogId = params['id'];
            var blog = {
                id: _this.blogId,
            };
            _this.blogService.getBlogById(blog).subscribe(function (data) {
                _this.heading = data.heading;
                _this.initialContent = data.body;
                _this.body = data.body;
                _this.tags = data.tags;
            }, function (err) {
                _this.blogService.handleError(err);
            });
        });
    };
    EditBlogComponent.prototype.tinyResponce = function (tinyBody) {
        this.body = tinyBody;
    };
    EditBlogComponent.prototype.addTag = function () {
        this.tags.push(this.tag);
        this.tag = '';
    };
    EditBlogComponent.prototype.removeTag = function (tag) {
        for (var ii = 0; ii < this.tags.length; ii++) {
            if (this.tags[ii] === tag) {
                this.tags.splice(ii, 1);
                break;
            }
        }
    };
    EditBlogComponent.prototype.submitBlog = function () {
        var _this = this;
        var blog = {
            id: this.blogId,
            heading: this.heading,
            body: this.body,
            tags: this.tags,
        };
        this.blogService.editBlog(blog).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['/blogs'], { queryParams: { pn: 0 } });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.router.navigate(['/editBlog'], { queryParams: { id: _this.blogId } });
            }
        }, function (err) {
            _this.blogService.handleError(err);
        });
    };
    EditBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        if (this.deleteBtnText === "Delete Blog") {
            this.deleteBtnText = "Click again to confirm";
            return false;
        }
        else {
            var blog = {
                id: this.blogId,
            };
            this.blogService.deleteBlog(blog).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                    _this.router.navigate(['/blogs'], { queryParams: { pn: 0 } });
                }
                else {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                    _this.router.navigate(['/editBlog'], { queryParams: { id: _this.blogId } });
                }
            }, function (err) {
                _this.blogService.handleError(err);
            });
        }
    };
    return EditBlogComponent;
}());
EditBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__(202),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], EditBlogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.usernameEntered = false;
    };
    ForgotPasswordComponent.prototype.submitUsernameForm = function () {
        var _this = this;
        var user = {
            username: this.username,
        };
        for (var key in user) {
            if (!user[key]) {
                this.flashMessagesService.show("Please fill all fields marked in red", { cssClass: 'alert-danger', timeout: 1500 });
                return false;
            }
        }
        this.authService.authUsername(user).subscribe(function (data) {
            if (data.success) {
                _this.securityQuestion = data.securityQuestion;
                _this.usernameEntered = true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
            }
        }, function (err) {
            _this.authService.handleError(err);
        });
    };
    ForgotPasswordComponent.prototype.submitAnswerForm = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            answer: this.answer,
        };
        for (var key in user) {
            if (!user[key]) {
                this.flashMessagesService.show("Please fill all fields marked in red", { cssClass: 'alert-danger', timeout: 1500 });
                return false;
            }
        }
        this.authService.changePassword(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.router.navigate(['/forgotPassword']);
            }
        }, function (err) {
            _this.authService.handleError(err);
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(203),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ForgotPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user) {
            this.router.navigate(['/blogs'], { queryParams: { pn: 0 } });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(204),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, activatedRoute, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.destinationUrl = params['url'];
        });
    };
    LoginComponent.prototype.submitLoginForm = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        for (var key in user) {
            if (!user[key]) {
                this.flashMessagesService.show("Please fill all fields marked in red", { cssClass: 'alert-danger', timeout: 1500 });
                return false;
            }
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserInfo(data.token, data.user);
                localStorage.setItem('login', 'true');
                if (_this.destinationUrl) {
                    _this.router.navigate([_this.destinationUrl], { queryParams: { login: true } });
                }
                else {
                    _this.router.navigate(['/blogs'], { queryParams: { pn: 0, login: true } });
                }
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.router.navigate(['/login']);
                return false;
            }
        }, function (err) {
            _this.authService.handleError(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(205),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.activatedRoute = activatedRoute;
        this.user = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.login = params['login'];
            if (_this.login) {
                _this.user = _this.authService.getUser();
            }
        });
        this.user = this.authService.getUser();
    };
    NavbarComponent.prototype.userLogout = function () {
        this.authService.userLogout();
        this.flashMessagesService.show("Successfully Logged Out", { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.search = function () {
        if (this.searchString === '') {
            return false;
        }
        else {
            this.router.navigate(['/search'], { queryParams: { search: this.searchString, pn: 0 } });
            this.searchString = '';
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(206),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submitRegisterForm = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            password: this.password,
            email: this.email,
            securityQuestion: this.securityQuestion,
            securityAns: this.securityAns
        };
        // Validate required fields
        for (var key in user) {
            if (!user[key]) {
                this.flashMessagesService.show("Please fill all fields marked in red", { cssClass: 'alert-danger', timeout: 1500 });
                return false;
            }
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.email)) {
            this.flashMessagesService.show('Enter a valid email-id', { cssClass: 'alert-danger', timeout: 1500 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.router.navigate(['/register']);
            }
        }, function (err) {
            _this.authService.handleError(err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(207),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataAvailable = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.currentPage = Number(params['pn']);
            _this.searchString = params['search'];
            var blogInfo = {
                searchString: _this.searchString,
                pn: _this.currentPage,
            };
            _this.blogService.getBlogCount(blogInfo).subscribe(function (data) {
                _this.blogCount = Number(data.count);
            }, function (err) {
                _this.blogService.handleError(err);
            });
            _this.blogService.searchBlogs(blogInfo).subscribe(function (data) {
                _this.blogList = data;
                _this.dataAvailable = true;
            }, function (err) {
                _this.blogService.handleError(err);
            });
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(208),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyEditorComponent = (function () {
    function TinyEditorComponent() {
        this.onEditorContentChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinyEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#body',
            plugins: ['link', 'table', 'paste', 'image'],
            skin_url: 'assets/skins/lightgray',
            paste_data_images: true,
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup change', function () {
                    var content = editor.getContent();
                    _this.onEditorContentChange.emit(content);
                });
            }
        });
    };
    TinyEditorComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return TinyEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TinyEditorComponent.prototype, "onEditorContentChange", void 0);
TinyEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tiny-editor',
        template: "\n  <div class=\"form-group\">\n    <label for=\"body\">Main Body</label>\n    <textarea style=\"height: 40vh\" id=\"body\" name=\"body\" class=\"form-control\"></textarea>\n  </div>"
    })
], TinyEditorComponent);

//# sourceMappingURL=tiny-editor.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = (function () {
    function UsersComponent(authService, blogService, activatedRoute) {
        this.authService = authService;
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.dataAvailable = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.username = params['username'];
            var user = {
                username: _this.username,
            };
            _this.authService.authProfile(user).subscribe(function (data) {
                _this.email = data.email;
                _this.name = data.name;
                _this.blogService.getBlogByUsername(user).subscribe(function (data) {
                    _this.blogList = data;
                    _this.dataAvailable = true;
                }, function (err) {
                    _this.blogService.handleError(err);
                });
            }, function (err) {
                _this.authService.handleError(err);
            });
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(209),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WriteBlogComponent = (function () {
    function WriteBlogComponent(blogService, flashMessagesService, router) {
        this.blogService = blogService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.tags = [];
    }
    WriteBlogComponent.prototype.ngOnInit = function () {
    };
    WriteBlogComponent.prototype.tinyResponce = function (tinyBody) {
        this.body = tinyBody;
    };
    WriteBlogComponent.prototype.addTag = function () {
        this.tags.push(this.tag);
        this.tag = '';
    };
    WriteBlogComponent.prototype.removeTag = function (tag) {
        for (var ii = 0; ii < this.tags.length; ii++) {
            if (this.tags[ii] === tag) {
                this.tags.splice(ii, 1);
                break;
            }
        }
    };
    WriteBlogComponent.prototype.submitBlog = function () {
        var _this = this;
        var blog = {
            heading: this.heading,
            body: this.body,
            tags: this.tags,
            username: JSON.parse(localStorage.getItem('user')).username,
        };
        this.blogService.addBlog(blog).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['/blogs'], { queryParams: { pn: 0 } });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.router.navigate(['/writeBlog']);
            }
        }, function (err) {
            _this.blogService.handleError(err);
        });
    };
    return WriteBlogComponent;
}());
WriteBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-write-blog',
        template: __webpack_require__(210),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], WriteBlogComponent);

var _a, _b, _c;
//# sourceMappingURL=write-blog.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = (function () {
    function AuthguardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthguardService.prototype.checkLogin = function (url) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { url: url } });
            return false;
        }
    };
    return AuthguardService;
}());
AuthguardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthguardService);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, flashMessagesService) {
        this.http = http;
        this.flashMessagesService = flashMessagesService;
        this.serverAddress = 'localhost:4200';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserInfo = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.userLogout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
    };
    AuthService.prototype.authProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/users/profile', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        return user;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.authUsername = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/users/forgotPassword/username', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/users/forgotPassword/answer', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.handleError = function (error) {
        this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogService = (function () {
    function BlogService(http, flashMessagesService) {
        this.http = http;
        this.flashMessagesService = flashMessagesService;
        this.serverAddress = 'localhost:4200';
    }
    BlogService.prototype.getBlogCount = function (blogInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/blogs/countBlogs', blogInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.getBlogs = function (blogInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/blogs', blogInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.searchBlogs = function (blogObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/blogs/searchBlogs', blogObj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.getBlogById = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/blogs/getBlogById', blog, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.getBlogByUsername = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.serverAddress + '/blogs/getBlogByUsername', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.addBlog = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/blogs/addBlog', blog, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.editBlog = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/blogs/editBlog', blog, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/blogs/deleteBlog', blog, { headers: headers }).
            map(function (res) { return res.json(); });
    };
    BlogService.prototype.handleError = function (error) {
        this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "flash-messages {\n  text-align: center;\n  position: fixed;\n  width: 20%;\n  top: 10vh;\n  left: 75%;\n  z-index: 20;\n}\n.entire-content {\n  margin: 0px 0px 30px 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".blog-div {\n  margin: 10px;\n  border-bottom: 1px solid rgba(24, 24, 24, 0.43);\n}\n\n.blog p {\n  margin: 30px 10px 30px 10px;\n  width: 80%;\n  font-size: 120%;\n}\n\n.btn-controls {\n  margin: 20px 0px;\n}\n\n\nbutton {\n  margin: 0px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-header {\n  text-align: center;\n}\n\n.col-sm-4 {\n  text-align: center;\n}\n\n.editbtn {\n  text-align: right;\n}\n.comments-div h3 {\n  text-align: left;\n}\n.comments-div .comment-div {\n  padding: 3px 10px;\n  margin: 5px 0px;\n  background-color: rgba(255, 153, 0, 0.33);\n  border-radius: 5px;\n  width: 75vw;\n}\n.write-comment {\n  width: 50vw;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".blog-div {\n  margin: 10px;\n  border-bottom: 1px solid rgba(24, 24, 24, 0.43);\n}\n\n.blog p {\n  margin: 30px 10px 30px 10px;\n  width: 80%;\n  font-size: 120%;\n}\n\n.btn-controls {\n  margin: 20px 0px;\n}\n\nbutton {\n  margin: 0px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "form {\n  position: relative;\n  left: 10vw;\n  width: 60vw;\n  margin-bottom: 20px;\n}\n\n.form-control {\n  margin: 5px 0px;\n  width: 60vw;\n}\n\n.added-tags {\n  width: 60vw;\n}\n\n.added-tags button {\n  margin: 5px;\n}\n\ntextarea {\n  margin-top: 10px;\n  width: 50vw;\n  height: 50vh;\n}\n\nlabel {\n  font-size: 105%;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.currentBody {\n  border-left: solid 2px #d34615;\n  padding: 10px 15px;\n  margin: 10px;\n}\n\n.delete-btn {\n  position: relative;\n  top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center;\n}\n\n.forgot-password-form {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    left: 25vw;\n}\n.forgot-password-form .form-group {\n  width: 50vw;\n}\nh4 {\n  text-align: center;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".jumbotron {\n  text-align: center;\n}\na {\n  margin: 10px 20px 10px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center;\n}\n\n.login-form {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    left: 25vw;\n    width: 50vw;\n}\n.login-form .form-group {\n  width: 50vw;\n}\na {\n  margin-left: 20px;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.navbar {\n  margin: 0px 0px 50px 0px;\n  border-radius: 0px;\n}\n.navbar-brand {\n  position: relative;\n  top: -10px;\n}\n\n.search-btn {\n  background-color: transparent;\n  background-image: none;\n}\n\n.search-input{\n  border: none;\n  border-bottom: 2px solid white;\n  background-color: transparent;\n  border-radius: 0px;\n  box-shadow: none;\n  color: white;\n}\n\n.search-btn {\n  background-color: transparent;\n  background-image: none;\n  box-shadow: none;\n}\n\n.search-btn:hover, .search-btn:active, .search-btn:visited {\n    background-color: rgba(#98300d, 0.82) !important;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: white;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".register-form {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    left: 25vw;\n}\n.register-form .form-group {\n  width: 50vw;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".blog-div {\n  margin: 10px;\n  border-bottom: 1px solid rgba(24, 24, 24, 0.43);\n}\n\n.blog p {\n  margin: 30px 10px 30px 10px;\n  width: 80%;\n  font-size: 120%;\n}\n\n.btn-controls {\n  margin: 20px 0px;\n}\n\nbutton {\n  margin: 0px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".blog-div {\n  margin: 10px;\n  border-bottom: 1px solid rgba(24, 24, 24, 0.43);\n}\na {\n  color: rgba(#18bb9c, 0.63);\n  text-decoration: none;\n}\na:hover {\n  color: #0f7d68;\n}\n.blog p {\n  margin: 30px 10px 30px 10px;\n  width: 80%;\n  font-size: 120%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "form {\n  position: relative;\n  left: 10vw;\n  width: 60vw;\n  margin-bottom: 20px;\n}\n\n.form-control {\n  margin: 5px 0px;\n  width: 60vw;\n}\n\n.added-tags {\n  width: 60vw;\n}\n\n.added-tags button {\n  margin: 5px;\n}\n\ntextarea {\n  margin-top: 10px;\n  width: 50vw;\n  height: 50vh;\n}\n\nlabel {\n  font-size: 105%;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n#body {\n  height: 50vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"entire-content\">\n  <app-navbar></app-navbar>\n  <div class=\"container-fluid\">\n    <flash-messages class=\"flash-messages\"></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div  *ngFor='let blog of blogList' class=\"blog-div row\">\n  <h4><a [routerLink] = \"['/blog']\" [queryParams] = \"{ id: blog._id }\">{{blog.heading}}</a></h4>\n  <p class='col-sm-4'>By <a [routerLink] = \"['/users']\" [queryParams] = \"{ username: blog.username }\">{{blog.username}}</a></p>\n  <div class=\"col-sm-4\">\n      <p>\n        Tags:- <span *ngFor='let tag of blog.tags'><a [routerLink] = \"['/blogs']\" [queryParams] = \"{ tag: tag, pn: 0 }\">{{tag}}  </a></span>\n      </p>\n  </div>\n  <p class=\"col-sm-4\">\n    Written On - {{ blog.modifiedDate | date }}\n  </p>\n</div>\n<div class=\"btn-controls\">\n  <button  [ngClass]=\"prevBtn()\" (click)=\"prevPage()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Prev</button>\n  <span>Page {{currentPage}}</span>\n  <button  [ngClass]=\"nextBtn()\" (click)=\"nextPage()\">Next <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n</div>\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 backbtn\">\n      <a class=\"btn btn-primary btn-sm\" [routerLink] = \"['/blogs']\" [queryParams] = \"{ pn: 0 }\" ><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> All Blogs</a>\n    </div>\n    <div *ngIf=\"editable\" class=\"col-xs-6 editbtn\">\n      <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/editBlog']\" [queryParams] = \"{ id: currentBlog._id }\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"blog container\">\n  <div class=\"page-header\">\n    <h2>{{currentBlog.heading}}</h2>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h5>\n          Written By - <a [routerLink] = \"['/users']\" [queryParams] = \"{ username: currentBlog.username }\">{{currentBlog.username}}</a>\n        </h5>\n      </div>\n      <div class=\"col-sm-4\">\n        <h5>\n          Written On - {{currentBlog.modifiedDate | date }}\n        </h5>\n      </div>\n      <div class=\"col-sm-4\">\n        <h5>\n        Tags:-  <span *ngFor = \"let tag of currentBlog.tags\"><a [routerLink] = \"['/blogs']\" [queryParams] = \"{ tag: tag, pn: 0 }\">{{tag}}  </a></span>\n      </h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"blog-body\" [innerHTML]=\"currentBlog.body\">\n\n  </div>\n</div>\n\n<div class=\"container comments-div\">\n  <div class=\"page-header\">\n    <h3>Comments</h3>\n  </div>\n  <div *ngIf=\"authService.loggedIn()\" class=\"write-comment\">\n    <form class=\"comment-form\" (submit)=\"addComment()\">\n      <div class=\"form-group\">\n        <label for=\"commentBody\">{{username}}</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"commentBody\" name=\"commentBody\" placeholder=\"Write a comment\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\">Comment</button>\n    </form>\n  </div>\n  <br />\n  <div *ngFor=\"let comment of commentList\" class=\"comment-div\">\n    <h5>By <a [routerLink] = \"['/users']\" [queryParams] = \"{ username: comment.username }\">{{comment.username}}</a></h5>\n    <p>\n      {{comment.body}}\n    </p>\n    <h6>{{comment.date | date}}</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div class=\"blogs container\">\n  <div class=\"page-header\">\n      <h2>Recent Blogs</h2>\n  </div>\n  <div *ngIf=\"dataAvailable\">\n    <app-blog-list [blogList] = \"blogList\" [blogCount]=\"blogCount\" [currentPage]=\"currentPage\" [currentTag]=\"currentTag\"></app-blog-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <h2>Edit Blog</h2>\n      </div>\n      <div clas=\"col-xs-6\" style=\"text-align: right;\">\n        <button (click)=\"deleteBlog()\" class=\"btn btn-sm btn-danger delete-btn\">{{deleteBtnText}}</button>\n      </div>\n    </div>\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading\">Heading</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"heading\" name=\"heading\" id=\"heading\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"tags\">Tags</label>\n      <input type=text class=\"form-control\" [(ngModel)] = \"tag\" name = \"tag\"/>\n      <button class=\"btn btn-primary btn-sm\" (click) = 'addTag()'>Add Tag</button>\n    </div>\n    <div class=\"added-tags\" *ngIf=\"tags.length > 0\">\n      <h5>Added Tags (click to remove Tag)</h5>\n      <button class=\"tag-button btn btn-sm btn-info\" *ngFor=\"let tag of tags\" (click)=\"removeTag(tag)\">{{tag}}</button>\n    </div>\n    <div>\n      <h3>Current Body</h3>\n      <h4>To help you edit. Copy into editor as and when required</h4>\n      <div class=\"currentBody\" [innerHTML]=\"initialContent\">\n      </div>\n    </div>\n    <app-tiny-editor (onEditorContentChange) = \"tinyResponce($event)\"></app-tiny-editor>\n    <button (click)=\"submitBlog()\" class=\"btn btn-sm btn-primary submit-btn\" type=\"submit\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<h2>Forgot Password</h2>\n<form *ngIf=\"!usernameEntered\" class=\"forgot-password-form\" (submit) = \"submitUsernameForm()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"username\" id=\"username\" name=\"username\" placeholder=\"Eg. DE><TER\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n<div *ngIf=\"usernameEntered\">\n  <h4>Security Question: {{securityQuestion}}</h4>\n  <form class=\"forgot-password-form\" (submit) = \"submitAnswerForm()\">\n    <div class=\"form-group\">\n      <label for=\"answer\">Answer</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"answer\" id=\"answer\" name=\"answer\" placeholder=\"Your Answer\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">New Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)] = \"password\" id=\"password\" name=\"password\" placeholder=\"New Password\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Change Password</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Hi There!</h1>\n  <h2>This is a MEAN Blog App</h2>\n  <p>This is only a test application i created to practice MEAN Stack</p>\n  <a [routerLink] = \"['/login']\" class=\"btn btn-success\">Login</a>\n  <a [routerLink] = \"['/register']\" class=\"btn btn-primary\">Register</a>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-md-3\">\n      <h1>NodeJS</h1>\n      <p>\n        Used NodeJs for backend.\n      </p>\n    </div>\n    <div class=\"col-xs-6 col-md-3\">\n      <h1>ExpressJS</h1>\n      <p>\n        Used ExpressJS as the backend server framework along with mongoose to build a robust CRUD API.\n      </p>\n    </div>\n    <div class=\"col-xs-6 col-md-3\">\n      <h1>AngularJS</h1>\n      <p>\n        Used Angular 2 as the frontend framework along with bootstrap.\n      </p>\n    </div>\n    <div class=\"col-xs-6 col-md-3\">\n      <h1>MongoDB</h1>\n      <p>\n        Using MongoDB as the database system for user data.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form class=\"login-form\" (submit) = \"submitLoginForm()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"username\" id=\"username\" name=\"username\" placeholder=\"Eg. DE><TER\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)] = \"password\" name=\"password\" placeholder=\"Password\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n  <a id=\"forgot-password-link\" [routerLink] = \"['/forgotPassword']\" >Forgot Password</a>\n</form>\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink] = \"['/']\">\n        <img alt=\"BitHub\" src=\"/assets/images/navLogo.png\" />\n      </a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive] = \"['active']\"><a [routerLink] = \"['/blogs']\" [queryParams]=\"{ pn: 0 }\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> BLOGS</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{ exact: true }\"><a [routerLink] = \"['/login']\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{ exact: true }\"><a [routerLink] = \"['/register']\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> REGISTER</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Hi {{user.name}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu nav-user-menu dropdown-menu-right\">\n            <li><a [routerLink] = \"['/users']\" [queryParams] = \"{ username: user.username }\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> My Profile</a></li>\n            <li><a [routerLink]=\"['./writeBlog']\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Write Blog</a></li>\n            <li><a style=\"cursor: pointer\"(click)=\"userLogout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"searchString\" name=\"searchString\" class=\"form-control search-input\" placeholder=\"Search blogs by heading or tag\">\n        </div>\n        <button (click)=\"search()\" class=\"btn btn-primary search-btn\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </form>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" (submit) = \"submitRegisterForm()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)] = \"name\" id=\"name\" name=\"name\" placeholder=\"Your Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"email\" id=\"user-email\" name=\"email\" placeholder=\"Email\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)] = \"username\" id=\"username\" name=\"username\" placeholder=\"Eg. DE><TER\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)] = \"password\" name=\"password\" placeholder=\"Password\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"securityQuestion\">Security Question</label>\n    <input type=\"text\" class=\"form-control\" id=\"securityQuestion\" [(ngModel)] = \"securityQuestion\" name=\"securityQuestion\" placeholder=\"Write your question\" required>\n    <p>\n      This question would be used to recover your password in case you forget it.\n    </p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"securityAns\">Password</label>\n    <input type=\"security-ans\" class=\"form-control\" id=\"securityAns\" [(ngModel)] = \"securityAns\" name=\"securityAns\" placeholder=\"Ans\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n</form>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"blogs container\">\n  <div class=\"page-header\">\n      <h2>Search results for - {{searchString}}</h2>\n  </div>\n  <div *ngIf=\"dataAvailable\">\n    <app-blog-list [blogList] = \"blogList\" [blogCount]=\"blogCount\" [currentPage]=\"currentPage\"></app-blog-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h2>{{name}}</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h4>Username:- {{username}}</h4>\n    </div>\n    <div class=\"col-sm-6\">\n      <h4>Email:- {{email}}</h4>\n    </div>\n  </div>\n  <div class=\"page-header\">\n      <h3>Blogs</h3>\n  </div>\n  <div *ngIf=\"dataAvailable\">\n    <app-blog-list [blogList] = \"blogList\" [currentPage]=\"0\"></app-blog-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h2>New Blog</h2>\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading\">Heading</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)] = \"heading\" name=\"heading\" id=\"heading\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"tags\">Tags</label>\n      <input type=text class=\"form-control\" [(ngModel)] = \"tag\" name = \"tag\"/>\n      <button class=\"btn btn-primary btn-sm\" (click) = 'addTag()'>Add Tag</button>\n    </div>\n    <div class=\"added-tags\" *ngIf=\"tags.length > 0\">\n      <h5>Added Tags (click to remove Tag)</h5>\n      <button class=\"tag-button btn btn-sm btn-info\" *ngFor=\"let tag of tags\" (click)=\"removeTag(tag)\">{{tag}}</button>\n    </div>\n    <app-tiny-editor (onEditorContentChange) = \"tinyResponce($event)\"></app-tiny-editor>\n    <button (click)=\"submitBlog()\" class=\"btn btn-sm btn-primary submit-btn\" type=\"submit\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.serverAddress = "localhost:4200";
    }
    CommentService.prototype.addComment = function (newComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append("Content-Type", "application/json");
        this.token = localStorage.getItem('id_token');
        headers.append('Authorization', this.token);
        return this.http.post('http://' + this.serverAddress + '/comments/addComment', newComment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.searchComments = function (commentData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append("Content-Type", "application/json");
        return this.http.post('http://' + this.serverAddress + '/comments/searchComments', commentData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.requiredFields = function (user) {
        if (!user.name || !user.password || !user.email || !user.securityAns || !user.securityQuestion || !user.username) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.bundle.js.map