"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_frontend_pages_product_page_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TheProductAdvantage',
  props: {
    product: {}
  },
  computed: {
    advantages: function advantages() {
      var _this$product$transla;

      return (_this$product$transla = this.product.translate.advantage) === null || _this$product$transla === void 0 ? void 0 : _this$product$transla.split('\n');
    }
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TheProductCost',
  data: function data() {
    return {
      activeSize: '2.1',
      width: null,
      activeWidth: false,
      activeHeight: false,
      count: 1,
      widthIndex: 0
    };
  },
  props: {
    product: {}
  },
  computed: {
    size: function size() {
      return this.product.sizes[this.activeSize] || [];
    },
    widths: function widths() {
      return this.size.map(function (size) {
        return size.width;
      });
    },
    currentSize: function currentSize() {
      return this.widths[this.widthIndex];
    },
    cost: function cost() {
      var _this = this;

      var cost = this.size.find(function (s) {
        return s.width === _this.currentSize && s.status === true;
      });

      if (cost && cost.price) {
        return cost.price * this.count;
      }

      return 0;
    }
  },
  methods: {
    checkSize: function checkSize(height) {
      this.activeSize = height;
      this.activeHeight = false;
    },
    checkWidth: function checkWidth(index) {
      this.widthIndex = index;
      this.width = this.widths[index];
      this.activeWidth = false;
    }
  },
  mounted: function mounted() {
    var _this$widths$;

    this.width = (_this$widths$ = this.widths[0]) !== null && _this$widths$ !== void 0 ? _this$widths$ : null;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TheProductDescription',
  props: {
    product: {}
  },
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TheProductGallery',
  props: {
    product: {}
  },
  data: function data() {
    return {
      VideoTab: false,
      PhotoTab: true,
      photo: {},
      index: 0,
      ButtonModal: false
    };
  },
  computed: {
    photos: function photos() {
      return this.product.photos;
    }
  },
  methods: {
    toggleTab: function toggleTab() {
      this.VideoTab = !this.VideoTab;
      this.PhotoTab = !this.PhotoTab;
    },
    slide: function slide(index) {
      this.index = index;
      this.photo = this.photos[this.index];
    },
    gallery: function gallery() {
      var photos = this.photos;

      if (photos && photos.length > 0) {
        this.photo = photos.find(function (photo) {
          return photo.by_default;
        }) || photos[0];
      }
    },
    next: function next() {
      this.index = (this.index + 1) % this.photos.length;
      this.photo = this.photos[this.index];
    },
    prev: function prev() {
      this.index = this.index === 0 ? this.photos.length - 1 : (this.index - 1) % this.photos.length;
      this.photo = this.photos[this.index];
    }
  },
  mounted: function mounted() {
    this.gallery();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TheProductStep',
  props: {
    product: {}
  },
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _modules_TheProductGallery_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TheProductGallery.vue */ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue");
/* harmony import */ var _modules_TheProductCost_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TheProductCost.vue */ "./resources/js/frontend/pages/product/modules/TheProductCost.vue");
/* harmony import */ var _modules_TheProductAdvantage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TheProductAdvantage.vue */ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue");
/* harmony import */ var _modules_TheProductDescription_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/TheProductDescription.vue */ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue");
/* harmony import */ var _modules_TheProductStep_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/TheProductStep.vue */ "./resources/js/frontend/pages/product/modules/TheProductStep.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FrontProduct',
  components: {
    TheProductGallery: _modules_TheProductGallery_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheProductCost: _modules_TheProductCost_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheProductDescription: _modules_TheProductDescription_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TheProductAdvantage: _modules_TheProductAdvantage_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheProductStep: _modules_TheProductStep_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  watch: {
    'product.translate.slug': function productTranslateSlug(slug) {
      if (slug) this.$router.replace({
        name: 'Product',
        params: {
          id: this.id,
          slug: slug
        }
      });
    }
  },
  props: {
    id: {
      required: true
    },
    slug: {
      required: true
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)({
    language: 'lang/GET_SITE_LANGUAGE',
    productData: 'category/GET_PRODUCT'
  })), {}, {
    product: function product() {
      return this.productData(this.id, this.language.id);
    }
  }),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(['category/SET_PRODUCTS_BY_CATEGORY'])),
  mounted: function mounted() {
    if (!this.product) {
      this['category/SET_PRODUCTS_BY_CATEGORY']();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pricelist-modal__desc-check"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.advantages, function (advantage, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(advantage), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_product_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/product/01.png */ "./resources/js/assets/img/product/01.png");
/* harmony import */ var _img_product_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/product/02.png */ "./resources/js/assets/img/product/02.png");
/* harmony import */ var _img_product_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/product/03.png */ "./resources/js/assets/img/product/03.png");
/* harmony import */ var _img_product_04_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/product/04.png */ "./resources/js/assets/img/product/04.png");





var _hoisted_1 = {
  "class": "pricelist-modal__cost"
};
var _hoisted_2 = {
  "class": "pricelist-modal__cost-price"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" גודל: ");

var _hoisted_4 = ["onClick"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" גובה: ");

var _hoisted_6 = {
  "class": "pricelist-modal__cost-count"
};
var _hoisted_7 = ["value"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " כמות", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pricelist-modal__cost-btn\"> הוסף לעגלה </div><div class=\"pricelist-modal__cost-item mobile\"> מחיר: ₪2,470 </div><ul class=\"pricelist-modal__desc-steps mobile\"><li><span class=\"name\"> בחרו <br> מסגרת </span><span class=\"num\">1</span><img src=\"" + _img_product_01_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> בד לסוכה </span><span class=\"num\">2</span><img src=\"" + _img_product_02_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> סכך </span><span class=\"num\">3</span><img src=\"" + _img_product_03_png__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> אביזרים </span><span class=\"num\">4</span><img src=\"" + _img_product_04_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" alt=\"\"></li></ul>", 3);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.cost) + " ₪ ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricelist-modal__cost-size",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.activeWidth = !_ctx.activeWidth;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.currentSize ? "".concat($options.currentSize, " x ").concat(_ctx.activeSize) : null), 1
  /* TEXT */
  ), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["pricelist-content__item-dropdown", {
      active: _ctx.activeWidth
    }])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.widths, function (width, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: i,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.checkWidth(i);
      }, ["stop"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(width), 9
    /* TEXT, PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricelist-modal__cost-length",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.activeHeight = !_ctx.activeHeight;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.activeSize), 1
  /* TEXT */
  ), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["pricelist-content__item-dropdown", {
      active: _ctx.activeHeight
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "height",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.checkSize('2.1');
    }, ["stop"]))
  }, "2.1"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "height",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.checkSize('2.3');
    }, ["stop"]))
  }, "2.3")], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.count++;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    value: _ctx.count
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.count > 0 ? _ctx.count-- : 0;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "arrow-green",
    width: "18",
    height: "10"
  })]), _hoisted_8]), _hoisted_9]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pricelist-modal__desc-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.translate.description), 1
  /* TEXT */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_certificates_lens_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/certificates/lens.png */ "./resources/js/assets/img/certificates/lens.png");


var _hoisted_1 = {
  "class": "pricelist-modal__img"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricelist-modal__img-title mobile"
}, " מסגרת סוכה ", -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  "class": "pricelist-modal__img-item"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_certificates_lens_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 0,
  "class": "swiper-wrapper"
};
var _hoisted_8 = {
  "class": "swiper-slide"
};
var _hoisted_9 = ["src", "alt", "title"];
var _hoisted_10 = {
  "class": "pricelist-modal__img-list page"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = ["src", "alt", "title"];
var _hoisted_13 = {
  "class": "product-body__img-btn"
};
var _hoisted_14 = ["href"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-photo__modal-bg"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "product-photo__modal-content"
};
var _hoisted_17 = {
  "class": "product-photo__modal-img"
};
var _hoisted_18 = ["src", "alt", "title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$photo$translate, _ctx$photo$translate2, _ctx$photo$translate3, _ctx$photo$translate4;

  var _component_base_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricelist-modal__img-top",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleTab && $options.toggleTab.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.VideoTab
    })
  }, "וידאו", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.PhotoTab
    })
  }, "תמונות", 2
  /* CLASS */
  )]), _ctx.PhotoTab ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pricelist-modal-zoom",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.ButtonModal = true;
    })
  }, _hoisted_6), _ctx.photo.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.photo.image,
    alt: (_ctx$photo$translate = _ctx.photo.translate) === null || _ctx$photo$translate === void 0 ? void 0 : _ctx$photo$translate.alt,
    title: (_ctx$photo$translate2 = _ctx.photo.translate) === null || _ctx$photo$translate2 === void 0 ? void 0 : _ctx$photo$translate2.title
  }, null, 8
  /* PROPS */
  , _hoisted_9)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricelist-modal-button-prev",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.prev && $options.prev.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "slider-arrow-prev",
    width: "41",
    height: "59"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricelist-modal-button-next",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.next && $options.next.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "slider-arrow-next",
    width: "41",
    height: "59"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.photos, function (photo, index) {
    var _photo$translate, _photo$translate2;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: photo.id,
      onClick: function onClick($event) {
        return $options.slide(index);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: photo.image,
      alt: (_photo$translate = photo.translate) === null || _photo$translate === void 0 ? void 0 : _photo$translate.alt,
      title: (_photo$translate2 = photo.translate) === null || _photo$translate2 === void 0 ? void 0 : _photo$translate2.title
    }, null, 8
    /* PROPS */
    , _hoisted_12)], 8
    /* PROPS */
    , _hoisted_11);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$props.product.Instruction_file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    download: "",
    href: $props.product.Instruction_file
  }, " דף הרכבה להורדה ", 8
  /* PROPS */
  , _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["product-photo__modal", {
      active: _ctx.ButtonModal
    }])
  }, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "product-photo__modal-close",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.ButtonModal = false;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_icon, {
    icon: "modal-close",
    width: "48",
    height: "47"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.photo.image,
    alt: (_ctx$photo$translate3 = _ctx.photo.translate) === null || _ctx$photo$translate3 === void 0 ? void 0 : _ctx$photo$translate3.alt,
    title: (_ctx$photo$translate4 = _ctx.photo.translate) === null || _ctx$photo$translate4 === void 0 ? void 0 : _ctx$photo$translate4.title
  }, null, 8
  /* PROPS */
  , _hoisted_18)])])], 2
  /* CLASS */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_product_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/product/01.png */ "./resources/js/assets/img/product/01.png");
/* harmony import */ var _img_product_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/product/02.png */ "./resources/js/assets/img/product/02.png");
/* harmony import */ var _img_product_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/product/03.png */ "./resources/js/assets/img/product/03.png");
/* harmony import */ var _img_product_04_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/product/04.png */ "./resources/js/assets/img/product/04.png");





var _hoisted_1 = {
  "class": "pricelist-modal__desc-steps"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li><span class=\"name\"> בחרו <br> מסגרת </span><span class=\"num\">1</span><img src=\"" + _img_product_01_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> בד לסוכה </span><span class=\"num\">2</span><img src=\"" + _img_product_02_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> סכך </span><span class=\"num\">3</span><img src=\"" + _img_product_03_png__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" alt=\"\"></li><li><span class=\"name\"> בחרו <br> אביזרים </span><span class=\"num\">4</span><img src=\"" + _img_product_04_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" alt=\"\"></li>", 4);

var _hoisted_6 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_1, _hoisted_6);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "product-body"
};
var _hoisted_4 = {
  "class": "pricelist-modal__desc"
};
var _hoisted_5 = {
  "class": "pricelist-modal__desc-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_the_product_cost = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-product-cost");

  var _component_the_product_description = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-product-description");

  var _component_the_product_advantage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-product-advantage");

  var _component_the_product_step = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-product-step");

  var _component_the_product_gallery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-product-gallery");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_product_cost, {
    product: $options.product
  }, null, 8
  /* PROPS */
  , ["product"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.product.translate.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_product_description, {
    product: $options.product
  }, null, 8
  /* PROPS */
  , ["product"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_product_advantage, {
    product: $options.product
  }, null, 8
  /* PROPS */
  , ["product"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_product_step, {
    product: {}
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_product_gallery, {
    product: $options.product
  }, null, 8
  /* PROPS */
  , ["product"])])])]);
}

/***/ }),

/***/ "./resources/js/assets/img/certificates/lens.png":
/*!*******************************************************!*\
  !*** ./resources/js/assets/img/certificates/lens.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/lens.png?041f0af2590eab384c877335462fafd8");

/***/ }),

/***/ "./resources/js/assets/img/product/01.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/product/01.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/01.png?8787000504f14772b74c092bf22ee96f");

/***/ }),

/***/ "./resources/js/assets/img/product/02.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/product/02.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/02.png?469ec4c3bd316c26c6ac48e7168479e2");

/***/ }),

/***/ "./resources/js/assets/img/product/03.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/product/03.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/03.png?33d5f4cd2460a702d760012f9bc87d7a");

/***/ }),

/***/ "./resources/js/assets/img/product/04.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/product/04.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/04.png?ea7173fa8715807fcc3d65f3038375a9");

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheProductAdvantage_vue_vue_type_template_id_ecb24a8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheProductAdvantage.vue?vue&type=template&id=ecb24a8a */ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a");
/* harmony import */ var _TheProductAdvantage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheProductAdvantage.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheProductAdvantage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheProductAdvantage_vue_vue_type_template_id_ecb24a8a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/modules/TheProductAdvantage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductCost.vue":
/*!************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductCost.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheProductCost_vue_vue_type_template_id_ed358926__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheProductCost.vue?vue&type=template&id=ed358926 */ "./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926");
/* harmony import */ var _TheProductCost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheProductCost.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheProductCost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheProductCost_vue_vue_type_template_id_ed358926__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/modules/TheProductCost.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductDescription.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheProductDescription_vue_vue_type_template_id_09156fe8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheProductDescription.vue?vue&type=template&id=09156fe8 */ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8");
/* harmony import */ var _TheProductDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheProductDescription.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheProductDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheProductDescription_vue_vue_type_template_id_09156fe8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/modules/TheProductDescription.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductGallery.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheProductGallery_vue_vue_type_template_id_462dc73c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheProductGallery.vue?vue&type=template&id=462dc73c */ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c");
/* harmony import */ var _TheProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheProductGallery.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheProductGallery_vue_vue_type_template_id_462dc73c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/modules/TheProductGallery.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductStep.vue":
/*!************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductStep.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheProductStep_vue_vue_type_template_id_104a0a28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheProductStep.vue?vue&type=template&id=104a0a28 */ "./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28");
/* harmony import */ var _TheProductStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheProductStep.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheProductStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheProductStep_vue_vue_type_template_id_104a0a28__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/modules/TheProductStep.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/page.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/pages/product/page.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_vue_vue_type_template_id_1c33cca9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.vue?vue&type=template&id=1c33cca9 */ "./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9");
/* harmony import */ var _page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.vue?vue&type=script&lang=js */ "./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_page_vue_vue_type_template_id_1c33cca9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/frontend/pages/product/page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductAdvantage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductAdvantage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductAdvantage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductCost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductCost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductCost.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductDescription_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductDescription.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductGallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductGallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductStep.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductAdvantage_vue_vue_type_template_id_ecb24a8a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductAdvantage_vue_vue_type_template_id_ecb24a8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductAdvantage.vue?vue&type=template&id=ecb24a8a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductAdvantage.vue?vue&type=template&id=ecb24a8a");


/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926":
/*!******************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductCost_vue_vue_type_template_id_ed358926__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductCost_vue_vue_type_template_id_ed358926__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductCost.vue?vue&type=template&id=ed358926 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductCost.vue?vue&type=template&id=ed358926");


/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductDescription_vue_vue_type_template_id_09156fe8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductDescription_vue_vue_type_template_id_09156fe8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductDescription.vue?vue&type=template&id=09156fe8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductDescription.vue?vue&type=template&id=09156fe8");


/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductGallery_vue_vue_type_template_id_462dc73c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductGallery_vue_vue_type_template_id_462dc73c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductGallery.vue?vue&type=template&id=462dc73c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductGallery.vue?vue&type=template&id=462dc73c");


/***/ }),

/***/ "./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28":
/*!******************************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductStep_vue_vue_type_template_id_104a0a28__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheProductStep_vue_vue_type_template_id_104a0a28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheProductStep.vue?vue&type=template&id=104a0a28 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/modules/TheProductStep.vue?vue&type=template&id=104a0a28");


/***/ }),

/***/ "./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9":
/*!************************************************************************************!*\
  !*** ./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_1c33cca9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_1c33cca9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=template&id=1c33cca9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/frontend/pages/product/page.vue?vue&type=template&id=1c33cca9");


/***/ })

}]);