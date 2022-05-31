"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Library_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_he__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/he */ "./resources/js/helpers/he.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Library",
  computed: {
    viewType: function viewType() {
      return this.$store.state.fm[this.$store.state.fm.activeManager].viewType = 'grid';
    },
    settings: function settings() {
      return {
        lang: 'he',
        baseUrl: 'http://shid-vue.loc/file-manager/',
        translation: {
          lang: _helpers_he__WEBPACK_IMPORTED_MODULE_0__["default"],
          content: {
            about: 'Über',
            back: 'Zurück'
          }
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=template&id=4f41307c":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=template&id=4f41307c ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_file_manager = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("file-manager");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_file_manager, {
    viewType: $options.viewType,
    settings: $options.settings
  }, null, 8
  /* PROPS */
  , ["viewType", "settings"]);
}

/***/ }),

/***/ "./resources/js/helpers/he.js":
/*!************************************!*\
  !*** ./resources/js/helpers/he.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Arabic translate - D34DlyM4N(https://github.com/D34DlyM4N)
 * @type Object
 */
var he = {
  btn: {
    about: 'حول',
    back: 'رجوع',
    cancel: 'الغاء',
    clear: 'مسح',
    copy: 'نسخ',
    cut: 'قص',
    "delete": '222',
    edit: 'تعديل',
    forward: 'الى الامام',
    folder: 'مجلد جديد',
    file: 'ملف جديد',
    fullScreen: 'ملء الشاشة',
    grid: 'شبكة',
    paste: 'لصق',
    refresh: 'تحديث',
    submit: 'ارسال',
    table: 'جدول',
    upload: 'رفع',
    uploadSelect: 'اختر الملفات',
    hidden: 'الملفات المخفية'
  },
  clipboard: {
    actionType: 'نوع',
    copy: 'نسخ',
    cut: 'قص',
    none: 'لا شيء محدد',
    title: 'ذاكرة النصوص'
  },
  contextMenu: {
    copy: 'نسخ',
    cut: 'قص',
    "delete": 'حذف',
    download: 'تحميل',
    info: 'اختير:',
    open: 'فتح',
    paste: 'لصق',
    properties: 'الخصائص',
    rename: 'اعادة تسمية',
    select: 'اختيار',
    view: 'عرض',
    zip: 'ضغط',
    unzip: 'أستخراج',
    edit: 'تعديل',
    audioPlay: 'تشغيل',
    videoPlay: 'تشغيل'
  },
  info: {
    directories: 'المجلدات:',
    files: 'الملفات:',
    selected: 'أختيرت:',
    selectedSize: 'حجم الملفات:',
    size: 'حجم الملفات:'
  },
  manager: {
    table: {
      date: 'تأريخ',
      folder: 'مجلد',
      name: 'أسم',
      size: 'حجم',
      type: 'نوع'
    }
  },
  modal: {
    about: {
      developer: 'مطور',
      name: 'Laravel File Manager',
      title: 'حول',
      version: 'الإصدار'
    },
    "delete": {
      noSelected: 'لا شيء محدد!',
      title: 'حذف'
    },
    newFile: {
      fieldName: 'أسم الملف',
      fieldFeedback: 'الملف موجود!',
      title: 'أنشاء ملف جديد'
    },
    newFolder: {
      fieldName: 'أسم المجلد',
      fieldFeedback: 'المجلد موجود!',
      title: 'انشاء مجلد جديد'
    },
    preview: {
      title: 'عرض'
    },
    properties: {
      disk: 'قرص',
      modified: 'تم التعديل',
      name: 'أسم',
      path: 'مسار',
      size: 'حجم',
      title: 'خصائص',
      type: 'نوع',
      url: 'رابط',
      access: 'التمكن من',
      access_0: 'تم الرفض',
      access_1: 'قراءة فقط',
      access_2: 'اقرا و اكتب'
    },
    rename: {
      directoryExist: 'المجلد موجود',
      fieldName: 'ادخال اسم جديد',
      fieldFeedback: 'اسم خاطئ',
      fileExist: 'الملف موجود',
      title: 'اعادة تسمية'
    },
    status: {
      noErrors: 'لايوجد خطأ!',
      title: 'الحالة'
    },
    upload: {
      ifExist: 'اذا الملف موجود:',
      noSelected: 'لا توجد ملفات مختارة!',
      overwrite: 'اعادة الكتابة!',
      selected: 'المختارة:',
      size: 'الحجم:',
      skip: 'تخطي',
      title: 'رفع الملفات'
    },
    editor: {
      title: 'محرر'
    },
    audioPlayer: {
      title: 'مشغل الاصوات'
    },
    videoPlayer: {
      title: 'مشغل الفيديو'
    },
    zip: {
      title: 'أنشاء أرشيف',
      fieldName: 'أسم الارشيف',
      fieldFeedback: 'الارشيف موجود!'
    },
    unzip: {
      title: 'فك الارشيف',
      fieldName: 'أسم المجلد',
      fieldRadioName: 'أستخراج الى:',
      fieldRadio1: 'الى المجلد الحالي',
      fieldRadio2: 'في مجلد جديد',
      fieldFeedback: 'المجلد موجود!',
      warning: 'تحذير! اذا تشابهت الاسماء, سيتم استبدال الملفات!'
    },
    cropper: {
      title: 'قص',
      apply: 'تطبيق',
      reset: 'اعادة تعين',
      save: 'حفظ'
    }
  },
  notifications: {
    cutToClipboard: 'قص إلى الحافظة!',
    copyToClipboard: 'نسخ إلى الحافظة!'
  },
  response: {
    noConfig: 'الاعدادت غير متوفرة!',
    notFound: 'غير متوفر!',
    diskNotFound: 'القرص غير موجود!',
    pathNotFound: 'مسار غير موجود!',
    diskSelected: 'تم اختيار القرص!',
    // files
    fileExist: 'الملف موجود بالفعل!',
    fileCreated: 'تم إنشاء الملف!',
    fileUpdated: 'تم تحديث الملف!',
    fileNotFound: 'الملف غير موجود!',
    // directories
    dirExist: 'المجلد موجود بالفعل!',
    dirCreated: 'تم أنشاء المجلد!',
    dirNotFound: 'المجلد غير موجود',
    // actions
    uploaded: 'تم تحديث كل الملفات!',
    notAllUploaded: 'بعض الملفات غير المحملة!',
    delNotFound: 'بعض الملفات غير موجودة! تحديث!',
    deleted: 'تم الحذف!',
    renamed: 'أعيدت تسميتها!',
    copied: 'تم النسخ بنجاح!',
    // zip
    zipError: 'خطأ في إنشاء الأرشيف!',
    // acl
    aclError: 'تم الرفض!'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (he);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n[title~=Copy], [title~=Cut], [title~=Paste], [title~=Back], [title~=Forward], [title~=Hidden] {\r\n        display: none;\n}\n.fm {\r\n        width: 100%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_style_index_0_id_4f41307c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Library.vue?vue&type=style&index=0&id=4f41307c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_style_index_0_id_4f41307c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_style_index_0_id_4f41307c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/Library.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Library.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Library_vue_vue_type_template_id_4f41307c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library.vue?vue&type=template&id=4f41307c */ "./resources/js/pages/Library.vue?vue&type=template&id=4f41307c");
/* harmony import */ var _Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library.vue?vue&type=script&lang=js */ "./resources/js/pages/Library.vue?vue&type=script&lang=js");
/* harmony import */ var _Library_vue_vue_type_style_index_0_id_4f41307c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library.vue?vue&type=style&index=0&id=4f41307c&lang=css */ "./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css");
/* harmony import */ var C_OpenServer_domains_shid_vue_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shid_vue_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Library_vue_vue_type_template_id_4f41307c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Library.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Library.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Library.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Library.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Library.vue?vue&type=template&id=4f41307c":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Library.vue?vue&type=template&id=4f41307c ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_template_id_4f41307c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_template_id_4f41307c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Library.vue?vue&type=template&id=4f41307c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=template&id=4f41307c");


/***/ }),

/***/ "./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Library_vue_vue_type_style_index_0_id_4f41307c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Library.vue?vue&type=style&index=0&id=4f41307c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Library.vue?vue&type=style&index=0&id=4f41307c&lang=css");


/***/ })

}]);