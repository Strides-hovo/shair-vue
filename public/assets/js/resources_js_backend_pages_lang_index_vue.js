"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_pages_lang_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BaseTranslateSlide'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_mixins_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backend/mixins/language */ "./resources/js/backend/mixins/language.js");
/* harmony import */ var _components_BaseTranslateSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BaseTranslateSlide */ "./resources/js/backend/components/BaseTranslateSlide.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "language",
  mixins: [_backend_mixins_language__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    BaseTranslateSlide: _components_BaseTranslateSlide__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    all_checked: {
      get: function get() {
        return this.languageIds.length === this.languages.length;
      },
      set: function set(value) {
        this.languageIds = value ? this.languages.map(function (i) {
          return i.id;
        }) : [];
      }
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.new_lang_modal = false;
    },
    checkLanguage: function checkLanguage(id) {
      var language = this.languages.find(function (lang) {
        return lang.id === id;
      });
      this.language = Object.assign({}, language);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "slide-up"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)];
    }),
    _: 3
    /* FORWARDED */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_icons_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/icons/add-icon.svg */ "./resources/js/assets/img/icons/add-icon.svg");
/* harmony import */ var _img_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/icons/close.svg */ "./resources/js/assets/img/icons/close.svg");
/* harmony import */ var _img_icons_delete_ico_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/icons/delete-ico.svg */ "./resources/js/assets/img/icons/delete-ico.svg");
/* harmony import */ var _img_icons_edit_ico_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/icons/edit-ico.svg */ "./resources/js/assets/img/icons/edit-ico.svg");






var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-23bbb496"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "cart-btns"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_icons_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "container-content"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container-content__top"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container-content__top-title"
  }, " Языки ")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "container-content__body"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_8 = [_hoisted_7];

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "lang-modal__title"
  }, " עריכת שפה ", -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "lang-modal__content"
};
var _hoisted_11 = {
  "class": "lang-modal__content-item"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "קיצור: ", -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "lang-modal__content-item"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "שם שפה: ", -1
  /* HOISTED */
  );
});

var _hoisted_15 = {
  "class": "lang-modal__content-item"
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "שם שפה: ", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "ltr"
  }, "LTR", -1
  /* HOISTED */
  );
});

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "rtl"
  }, "RTL", -1
  /* HOISTED */
  );
});

var _hoisted_19 = [_hoisted_17, _hoisted_18];

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "lang-modal__btn btn"
  }, " שמור ", -1
  /* HOISTED */
  );
});

var _hoisted_21 = {
  "class": "lang-new__content-edit"
};
var _hoisted_22 = {
  "class": "lang-new__content-item"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "קיצור: ", -1
  /* HOISTED */
  );
});

var _hoisted_24 = {
  "class": "lang-new__content-item"
};

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "שם שפה: ", -1
  /* HOISTED */
  );
});

var _hoisted_26 = {
  "class": "lang-new__content-item"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "שם שפה: ", -1
  /* HOISTED */
  );
});

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "ltr"
  }, "LTR", -1
  /* HOISTED */
  );
});

var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "rtl"
  }, "RTL", -1
  /* HOISTED */
  );
});

var _hoisted_30 = [_hoisted_28, _hoisted_29];

var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "lang-new__content-btn btn"
  }, " הוספה ", -1
  /* HOISTED */
  );
});

var _hoisted_32 = {
  "class": "orders"
};
var _hoisted_33 = ["checked"];

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fake"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "язык", -1
  /* HOISTED */
  );
});

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Код", -1
  /* HOISTED */
  );
});

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Напровление", -1
  /* HOISTED */
  );
});

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Показано на сайте", -1
  /* HOISTED */
  );
});

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Действия", -1
  /* HOISTED */
  );
});

var _hoisted_40 = ["value"];

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fake"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_42 = ["checked", "onUpdate:modelValue", "onChange"];

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fake"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_44 = ["onClick"];

var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_icons_delete_ico_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_46 = [_hoisted_45];
var _hoisted_47 = ["onClick"];

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" редактирование ");

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_icons_edit_ico_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_50 = [_hoisted_48, _hoisted_49];
function render(_ctx, _cache) {
  var _component_base_translate_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-translate-slide");

  var _component_StrModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StrModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cart-btns__item lang-add-new btn circle",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.new_lang_modal = true;
    })
  }, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_translate_slide, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.languageIds.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "cart-btns__item btn",
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.deleteLanguage && _ctx.deleteLanguage.apply(_ctx, arguments);
        })
      }, "удалить")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["lang-modal", {
      active: _ctx.lang_modal
    }]),
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.updateLanguage && _ctx.updateLanguage.apply(_ctx, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "lang-modal__close",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.lang_modal = false;
    })
  }, _hoisted_8), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "En",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.language.code = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.language.code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "English",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.language.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.language.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "ltr",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.language.dir = $event;
    })
  }, _hoisted_19, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.language.dir]])])]), _hoisted_20], 34
  /* CLASS, HYDRATE_EVENTS */
  ), _ctx.new_lang_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StrModal, {
    key: 0,
    onCloseModal: _ctx.closeModal,
    "is-active": _ctx.new_lang_modal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return _ctx.createLanguage && _ctx.createLanguage.apply(_ctx, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "En",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return _ctx.newLanguage.code = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.newLanguage.code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "אנא הזינו שם שפה",
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return _ctx.newLanguage.name = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.newLanguage.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        name: "ltr",
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return _ctx.newLanguage.dir = $event;
        })
      }, _hoisted_30, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.newLanguage.dir]])])]), _hoisted_31], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModal", "is-active"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return _ctx.all_checked = $event;
    }),
    checked: _ctx.all_checked
  }, null, 8
  /* PROPS */
  , _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.all_checked]]), _hoisted_34])]), _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.languages, function (lang) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "order-row unwatched",
      key: lang.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      value: lang.id,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
        return _ctx.languageIds = $event;
      })
    }, null, 8
    /* PROPS */
    , _hoisted_40), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.languageIds]]), _hoisted_41])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lang.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lang.code), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lang.dir), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      checked: lang.status,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return lang.status = $event;
      },
      onChange: function onChange($event) {
        return _ctx.updateStatus(lang.id, lang.status);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, lang.status]]), _hoisted_43])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "lang-delete-btn",
      onClick: function onClick($event) {
        return _ctx.deleteLanguage(lang.id);
      }
    }, _hoisted_46, 8
    /* PROPS */
    , _hoisted_44), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "lang-edit-btn",
      onClick: function onClick($event) {
        _ctx.checkLanguage(lang.id), _ctx.lang_modal = !_ctx.lang_modal;
      }
    }, _hoisted_50, 8
    /* PROPS */
    , _hoisted_47)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/backend/mixins/language.js":
/*!*************************************************!*\
  !*** ./resources/js/backend/mixins/language.js ***!
  \*************************************************/
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
  data: function data() {
    return {
      lang_modal: false,
      new_lang_modal: false,
      newLanguage: {
        dir: 'ltr',
        code: '',
        name: '',
        status: true
      },
      languageIds: [],
      language: {}
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    languages: 'lang/getLanguages'
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['lang/create', 'lang/update', 'lang/updateStatus', 'lang/destroy'])), {}, {
    createLanguage: function createLanguage() {
      this['lang/create'](this.newLanguage)["catch"](function (error) {
        if (error.response.data.status === 'Error') {
          alert(error.response.data.message);
        }
      });
      this.new_lang_modal = !this.new_lang_modal;
      this.newLanguage.code = '';
      this.newLanguage.name = '';
      this.newLanguage.dir = 'ltr';
    },
    deleteLanguage: function deleteLanguage() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var ids = Number(id) || this.languageIds;
      this['lang/destroy'](ids);
      this.languageIds = [];
    },
    updateLanguage: function updateLanguage() {
      this['lang/update'](this.language)["catch"](function (error) {
        if (error.response.data.status === 'Error') {
          alert(error.response.data.message);
        }
      });
      this.language = {};
      this.lang_modal = false;
    },
    updateStatus: function updateStatus(id, status) {
      var language = {
        id: id,
        status: status
      };
      console.log(language);
      this['lang/updateStatus'](language);
    }
  })
});

/***/ }),

/***/ "./resources/js/assets/img/icons/add-icon.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/icons/add-icon.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/add-icon.svg?cd53e263fc940f56ab21601c10b59ed5");

/***/ }),

/***/ "./resources/js/assets/img/icons/delete-ico.svg":
/*!******************************************************!*\
  !*** ./resources/js/assets/img/icons/delete-ico.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/delete-ico.svg?b8e6452e3542e8c729573cece58a1d80");

/***/ }),

/***/ "./resources/js/assets/img/icons/edit-ico.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/icons/edit-ico.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/edit-ico.svg?11e0bbabcd22ed82c0cbaa2651e84424");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slide-up-enter-active[data-v-420da724],\n.slide-up-leave-active[data-v-420da724] {\n  transform: translateY(0);\n  transition: all 0.3s linear;\n}\n.slide-up-enter-from[data-v-420da724],\n.slide-up-leave-to[data-v-420da724] {\n  transform: translateY(100%);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nselect[data-v-23bbb496]{\r\n    padding: 5px 15px;\r\n    border: 1px solid rgba(23, 79, 197, 0.5);\n}\n.cart-btns__item[data-v-23bbb496] {\r\n    margin: 0 0 0 10px;\n}\n.btn[data-v-23bbb496] {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 44px;\r\n    padding: 0 25px;\r\n    background: #82ad00;\r\n    border: 1px solid #fff;\r\n    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, .35));\r\n    border-radius: 40px;\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    color: #fff;\n}\n.lang-modal[data-v-23bbb496] {\r\n    position: fixed;\r\n    z-index: 10;\r\n    height: 100vh;\r\n    left: 0;\r\n    background: #FBFBFB;\r\n    padding: 5px 20px;\r\n    width: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: all .5s ease;\r\n    transform: translate(-100%, 0);\r\n    pointer-events: none;\r\n    visibility: hidden;\r\n    border-right: 1px solid #BFBFBF;\n}\n.lang-modal.active[data-v-23bbb496] {\r\n    transform: translate(0);\r\n    pointer-events: all;\r\n    visibility: visible;\n}\n.lang-modal__close[data-v-23bbb496] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\n}\n.lang-modal__title[data-v-23bbb496] {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    color: #286B9E;\n}\n.lang-modal__content[data-v-23bbb496] {\r\n    margin: 13px 0 0;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-end;\n}\n.lang-modal__content-item[data-v-23bbb496] {\r\n    flex: 0 0 calc(50% - 20px);\r\n    margin: 0 0 0 40px;\n}\n.lang-modal__content-item[data-v-23bbb496]:first-child {\r\n    margin: 0;\n}\n.lang-modal__content-item[data-v-23bbb496]:last-child {\r\n    margin-top: 15px;\n}\n.lang-new__content-edit[data-v-23bbb496] {\r\n    margin: auto 0;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    padding: 0 20px;\n}\n.lang-new__content-item[data-v-23bbb496] {\r\n    flex: 0 0 calc(32% - 20px);\r\n    margin: 0 0 0 40px;\n}\n.lang-new__content-item[data-v-23bbb496]:first-child {\r\n    margin: 0;\n}\n.lang-new__content-btn[data-v-23bbb496] {\r\n    margin: 0 auto 20px 20px;\n}\n.lang-modal__btn[data-v-23bbb496] {\r\n    margin: auto 0 100px;\r\n    align-self: flex-end;\n}\n.lang-modal__content-item span[data-v-23bbb496] {\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n    color: #2B2B2B;\n}\n.lang-modal__content-item input[data-v-23bbb496] {\r\n    margin: 2px 0 0 0;\r\n    background-color: transparent;\r\n    padding: 0 0 7px;\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n    color: #2B2B2B;\r\n    border-bottom: 1px solid #B7B7B7;\r\n    width: 100%;\n}\n.lang-new__content-item span[data-v-23bbb496] {\r\n    display: block;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    color: #286B9E;\n}\n.lang-new__content-item input[data-v-23bbb496] {\r\n    margin: 2px 0 0;\r\n    color: #286B9E;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n    line-height: 25px;\r\n    padding: 0 0 8px;\r\n    background-color: transparent;\r\n    border-bottom: 1px solid #87A8C9;\n}\r\n\r\n/* .lang-new__content-item input::-webkit-input-placeholder {\r\n    color: #8CB3D1;\r\n}\r\n\r\n.lang-new__content-item input::-moz-placeholder {\r\n    color: #8CB3D1;\r\n}\r\n\r\n.lang-new__content-item input:-ms-input-placeholder {\r\n    color: #8CB3D1;\r\n}\r\n\r\n.lang-new__content-item input::-ms-input-placeholder {\r\n    color: #8CB3D1;\r\n} */\n.lang-new__content-item input[data-v-23bbb496]::-moz-placeholder {\r\n    color: #8CB3D1;\n}\n.lang-new__content-item input[data-v-23bbb496]:-ms-input-placeholder {\r\n    color: #8CB3D1;\n}\n.lang-new__content-item input[data-v-23bbb496]::placeholder {\r\n    color: #8CB3D1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_lang_css_vue_type_style_index_0_id_23bbb496_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_lang_css_vue_type_style_index_0_id_23bbb496_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_lang_css_vue_type_style_index_0_id_23bbb496_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/components/BaseTranslateSlide.vue":
/*!****************************************************************!*\
  !*** ./resources/js/backend/components/BaseTranslateSlide.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseTranslateSlide_vue_vue_type_template_id_420da724_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true */ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true");
/* harmony import */ var _BaseTranslateSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTranslateSlide.vue?vue&type=script&lang=js */ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js");
/* harmony import */ var _BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true */ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BaseTranslateSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseTranslateSlide_vue_vue_type_template_id_420da724_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-420da724"],['__file',"resources/js/backend/components/BaseTranslateSlide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/pages/lang/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/backend/pages/lang/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_html_vue_type_template_id_23bbb496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html?vue&type=template&id=23bbb496&scoped=true */ "./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js");
/* harmony import */ var _lang_css_vue_type_style_index_0_id_23bbb496_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css */ "./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_html_vue_type_template_id_23bbb496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-23bbb496"],['__file',"resources/js/backend/pages/lang/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseTranslateSlide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/lang/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_template_id_420da724_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_template_id_420da724_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=template&id=420da724&scoped=true");


/***/ }),

/***/ "./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_index_html_vue_type_template_id_23bbb496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_index_html_vue_type_template_id_23bbb496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./index.html?vue&type=template&id=23bbb496&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/lang/index.html?vue&type=template&id=23bbb496&scoped=true");


/***/ }),

/***/ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_lang_css_vue_type_style_index_0_id_23bbb496_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./resources/js/backend/pages/lang/lang.css?vue&type=style&index=0&id=23bbb496&scoped=true&lang=css");


/***/ })

}]);