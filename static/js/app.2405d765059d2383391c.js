webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_router_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_muse_ui__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_muse_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_muse_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_reset_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_font_iconfont_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_font_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_font_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css__);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_muse_ui___default.a);
window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue__["default"];

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_1_src_router_index__["a" /* default */],
  diagol: {}
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Title; });
/* unused harmony export MenuConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterConfig; });
var Title = 'AI大脑';

var MenuConfig = [{
  text: '任务汇总',
  icon: 'ali-icon-renwu',
  link: '/product/list',
  sunData: [{
    text: '统计',
    link: '/index'
  }]
}];
var RouterConfig = [{
  path: '/',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(80)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '圆圈工具'
  },
  children: []
}, {
  path: '/result',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(160)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '结果测试'
  },
  children: []
}, {
  path: '/circle',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(80)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '圆圈工具'
  },
  children: []
}, {
  path: '/polygon',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(158)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '区块'
  },
  children: []
}, {
  path: '/point',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(157)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '标点'
  },
  children: []
}, {
  path: '/test',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(161)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '大脑入口'
  }
}, {
  path: '/polygon/test',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(159)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '多边形'
  }
}];


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_web_config__ = __webpack_require__(105);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_2_src_web_config__["a" /* RouterConfig */],
  linkActiveClass: 'active'
});
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title || __WEBPACK_IMPORTED_MODULE_2_src_web_config__["b" /* Title */];
  next();
});
window.Router = router;

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[104]);
//# sourceMappingURL=app.2405d765059d2383391c.js.map