"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_photo-gallery_PhotoGallery_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routes/api-routes */ "./resources/js/routes/api-routes.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/Strtable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/StrMetaData'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/Strsetting'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/StrFileManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PhotoGallery",
  components: {
    StrFileManager: Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/StrFileManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StrSetting: Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/Strsetting'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StrMetaData: Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/StrMetaData'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StrTable: Object(function webpackMissingModule() { var e = new Error("Cannot find module './PhotoGallery/Strtable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      photoGallery: {},
      ButtonTab: false,
      LeftAside: false,
      FileManager: false
    };
  },
  methods: {
    CloseLeftAside: function CloseLeftAside() {
      this.LeftAside = false;
    },
    closeModal: function closeModal() {
      this.FileManager = false;
    },
    checkImages: function checkImages(newImage) {
      if (typeof newImage === 'string') {
        this.newImage.image = newImage;
      } else {
        this.newImage = newImage;
      }

      this.newImage.photo_gallery_id = +this.id;
    },
    saveGallery: function saveGallery() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_routes_api_routes__WEBPACK_IMPORTED_MODULE_1__["default"])('photoGalleryItems.store'), this.newImage).then(function (response) {
        _this.photoGallery.galleries.push(response.data.data);

        _this.FileManager = false;
      });
      this.newImage = {
        sorting: 1
      }; //console.log(this.newImage)
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_routes_api_routes__WEBPACK_IMPORTED_MODULE_1__["default"])('photoGallery.show', this.id)).then(function (response) {
      return _this2.photoGallery = response.data.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "cart-btns"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "cart-btns__item btn"
}, "Сохранять", -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  key: 1,
  "class": "cart-btns"
};
var _hoisted_5 = ["src"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "cart-btns__item btn"
}, "delete", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "container-content"
};
var _hoisted_8 = {
  "class": "container-content__top container-content__top_tabs"
};
var _hoisted_9 = {
  "class": "container-content__top-row"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "container-content__top-title"
};
var _hoisted_12 = {
  "class": "container-content__top-row"
};
var _hoisted_13 = {
  "class": "container-content__tabs"
};
var _hoisted_14 = {
  "class": "container-content__body container-content__body_info"
};
var _hoisted_15 = {
  key: 0,
  "class": "container-content__body-info article product-params gallery-img"
};
var _hoisted_16 = {
  key: 1,
  "class": "container-content__body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_str_setting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-setting");

  var _component_LeftAside = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LeftAside");

  var _component_str_file_manager = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-file-manager");

  var _component_str_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-modal");

  var _component_str_meta_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-meta-data");

  var _component_str_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.ButtonTabInfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cart-btns__item product-add-new btn circle",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.FileManager = true;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: (__webpack_require__(/*! @img/icons/add-icon.svg */ "./public/img/icons/add-icon.svg")["default"]),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_5)]), _hoisted_6])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LeftAside, {
    "is-active": _ctx.LeftAside,
    onCloseLeftAside: $options.CloseLeftAside
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_setting)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-active", "onCloseLeftAside"]), _ctx.FileManager ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_str_modal, {
    key: 2,
    "is-active": _ctx.FileManager,
    width: '100%',
    HeaderText: "Выберите изображению",
    onCloseModal: $options.closeModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_file_manager, {
        photoGallery: _ctx.photoGallery,
        "onUpdate:photoGallery": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.photoGallery = $event;
        })
      }, null, 8
      /* PROPS */
      , ["photoGallery"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-active", "onCloseModal"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "settings-btn productpage-params__btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.LeftAside = true;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: (__webpack_require__(/*! @img/icons/settings.svg */ "./public/img/icons/settings.svg")["default"]),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.photoGallery.title), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.ButtonTabInfo = true;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      active: _ctx.ButtonTabInfo === true
    }, "container-content__tabs-item"])
  }, " Детали галереи ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.ButtonTabInfo = false;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      active: _ctx.ButtonTabInfo === false
    }, "container-content__tabs-item"])
  }, "Фото ", 2
  /* CLASS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_ctx.ButtonTab ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_meta_data)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_table, {
    "photo-gallery": _ctx.photoGallery
  }, null, 8
  /* PROPS */
  , ["photo-gallery"])]))])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbutton.tab-btn {\r\n  padding: 15px 25px;\r\n  border: 1px solid #eee;\r\n  margin: 5px 15px;\r\n  background: #82ad00;\r\n  color: #fff;\r\n  border-radius: 25px;\n}\n.lang-new__content {\r\n  justify-content: flex-start;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/img/icons/add-icon.svg":
/*!***************************************!*\
  !*** ./public/img/icons/add-icon.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/add-icon.svg?fc8d695dd33b6e0490f56464d92ccc93");

/***/ }),

/***/ "./public/img/icons/settings.svg":
/*!***************************************!*\
  !*** ./public/img/icons/settings.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/settings.svg?e8d70f29d0ce5131bb88d75b18aabd6e");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_style_index_0_id_55ef5d61_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_style_index_0_id_55ef5d61_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_style_index_0_id_55ef5d61_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/photo-gallery/PhotoGallery.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/photo-gallery/PhotoGallery.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhotoGallery_vue_vue_type_template_id_55ef5d61__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGallery.vue?vue&type=template&id=55ef5d61 */ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61");
/* harmony import */ var _PhotoGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGallery.vue?vue&type=script&lang=js */ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js");
/* harmony import */ var _PhotoGallery_vue_vue_type_style_index_0_id_55ef5d61_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css */ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css");
/* harmony import */ var C_OpenServer_domains_shair_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PhotoGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PhotoGallery_vue_vue_type_template_id_55ef5d61__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/photo-gallery/PhotoGallery.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhotoGallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_template_id_55ef5d61__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_template_id_55ef5d61__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhotoGallery.vue?vue&type=template&id=55ef5d61 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=template&id=55ef5d61");


/***/ }),

/***/ "./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhotoGallery_vue_vue_type_style_index_0_id_55ef5d61_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/photo-gallery/PhotoGallery.vue?vue&type=style&index=0&id=55ef5d61&lang=css");


/***/ })

}]);