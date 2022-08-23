"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_frontend_pages_article_page_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Article",
  props: {
    _slug: String,
    id: String
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    pageData: 'article/GET_ARTICLE',
    language: 'lang/GET_SITE_LANGUAGE'
  })), {}, {
    page: function page() {
      return this.pageData(this.id, this.language.id);
    }
  }),
  watch: {
    'page.translate.slug': function pageTranslateSlug(slug) {
      if (slug) {
        this.$router.replace({
          name: 'Article',
          params: {
            id: this.id,
            _slug: slug
          }
        });
      }
    },
    'page.translate.footer_text': function pageTranslateFooter_text(footer_text) {
      this.$emit('footerContent', {
        footer_text: footer_text
      });
    }
  },
  methods: {
    author_data: function author_data() {
      return this.page.published_at + ' ' + this.page.translate.author;
    }
  },
  mounted: function mounted() {
    var _this$page, _this$page$translate;

    var slug = (_this$page = this.page) === null || _this$page === void 0 ? void 0 : (_this$page$translate = _this$page.translate) === null || _this$page$translate === void 0 ? void 0 : _this$page$translate.slug;
    this.$router.replace({
      name: 'Article',
      params: {
        id: this.id,
        _slug: slug
      }
    });
    this.$emit('footerContent', {
      footer_text: this.page.translate.footer_text
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "article"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "article-body"
};
var _hoisted_4 = {
  "class": "article-body__sidebar"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "article-body__sidebar-title sidebar-title"
}, " מאמרים מומלצים ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "article-body__sidebar-body"
};
var _hoisted_7 = {
  "class": "article-body__sidebar-img"
};
var _hoisted_8 = ["src", "alt", "title"];
var _hoisted_9 = {
  "class": "article-body__sidebar-name"
};
var _hoisted_10 = {
  "class": "article-body__recomendation"
};
var _hoisted_11 = {
  "class": "article-body__recomendation-title sidebar-title"
};
var _hoisted_12 = {
  "class": "article-body__recomendation-item pricelist-content__item"
};
var _hoisted_13 = {
  "class": "pricelist-content__item-img"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "tip"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" קנה קבל "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "tip-content"
}, " לבק הנק לש רואית טסקט לבק הנק לש רואית טסקט לבק הנק לש רואית טסקט לבק הנק לש רואית טסקט ")], -1
/* HOISTED */
);

var _hoisted_15 = ["src", "alt", "title"];
var _hoisted_16 = {
  "class": "pricelist-content__item-text"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricelist-content__item-title"
}, "שם של המוצר", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "pricelist-content__item-desc"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "",
  "class": "pricelist-content__item-link"
}, " לפרטים נוספים ", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "pricelist-content__item-char"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricelist-content__item-price"
}, "מחיר: ₪2260", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "pricelist-content__item-length"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2.30");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "גובה:", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "pricelist-content__item-dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 ")], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "pricelist-content__item-size"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 40x40 ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "גודל:", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "pricelist-content__item-dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 40x40 ")], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricelist-content__item-buy"
}, "הוסף לעגלה", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "pricelist-content__item-value"
};
var _hoisted_32 = {
  "class": "pricelist-item-value-inc"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "number",
  value: "1"
}, null, -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "pricelist-item-value-dec"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "כמות", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "article-body__content"
};
var _hoisted_37 = {
  "class": "article-body__content-img"
};
var _hoisted_38 = ["src", "alt", "title"];
var _hoisted_39 = {
  "class": "article-body__content-title"
};
var _hoisted_40 = {
  "class": "article-body__content-subtitle"
};
var _hoisted_41 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$page$produc, _$options$page$produc2, _$options$page$produc3, _$options$page$produc4, _$options$page$produc5;

  var _component_base_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.page.recommended, function (rec) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "article-body__sidebar-item",
      key: rec.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: rec.image,
      alt: rec.translate.image_alt,
      title: rec.translate.image_title
    }, null, 8
    /* PROPS */
    , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rec.translate.short_description), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$options$page$produc = $options.page.product) === null || _$options$page$produc === void 0 ? void 0 : (_$options$page$produc2 = _$options$page$produc.translate) === null || _$options$page$produc2 === void 0 ? void 0 : _$options$page$produc2.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (_$options$page$produc3 = $options.page.product) !== null && _$options$page$produc3 !== void 0 && _$options$page$produc3.photos ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $options.page.product.photos[0].image,
    alt: $options.page.product.photos[0].alt,
    title: $options.page.product.photos[0].title
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$options$page$produc4 = $options.page.product) === null || _$options$page$produc4 === void 0 ? void 0 : (_$options$page$produc5 = _$options$page$produc4.translate) === null || _$options$page$produc5 === void 0 ? void 0 : _$options$page$produc5.short_description), 1
  /* TEXT */
  ), _hoisted_19]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  }), _hoisted_23, _hoisted_24, _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  }), _hoisted_27, _hoisted_28, _hoisted_29]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  })]), _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  })]), _hoisted_35])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.page.image,
    alt: $options.page.translate.image_alt,
    title: $options.page.translate.image_title
  }, null, 8
  /* PROPS */
  , _hoisted_38)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.page.translate.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.author_data()), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "article-body__content-desc",
    innerHTML: $options.page.translate.description
  }, null, 8
  /* PROPS */
  , _hoisted_41)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  <teleport to=\".footer__text\" >\r\n    {{ page.translate.footer_text }}\r\n  </teleport>")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/frontend/pages/article/page.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/pages/article/page.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_vue_vue_type_template_id_57cae482__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.vue?vue&type=template&id=57cae482 */ "./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482");
/* harmony import */ var _page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_page_vue_vue_type_template_id_57cae482__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/article/page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482":
/*!************************************************************************************!*\
  !*** ./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_57cae482__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_57cae482__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=template&id=57cae482 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/article/page.vue?vue&type=template&id=57cae482");


/***/ })

}]);