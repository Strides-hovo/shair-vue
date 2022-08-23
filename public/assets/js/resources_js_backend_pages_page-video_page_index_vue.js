"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_pages_page-video_page_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routes/api-routes */ "./resources/js/routes/api-routes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BaseFileUpload",
  emits: ['UploadNewFile'],
  props: {
    'type': {
      type: String,
      "default": 'image/*'
    }
  },
  methods: {
    UploadFile: function UploadFile(evt) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var SelectedFile, file, response, image;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                SelectedFile = evt.target.files[0];
                file = new FormData();
                file.append('file', SelectedFile, SelectedFile.name);
                _context.next = 5;
                return axios.post((0,_routes_api_routes__WEBPACK_IMPORTED_MODULE_1__["default"])('image.upload'), file);

              case 5:
                response = _context.sent;
                image = {
                  src: response.data,
                  name: response.data.split('/').slice(-1)[0].split('.')[0]
                };

                _this.$emit('UploadNewFile', image);

                _this.$refs.fileInput.value = '';

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploaded: function uploaded() {
      this.$refs.fileInput.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseFileUpload_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFileUpload.vue */ "./resources/js/backend/components/BaseFileUpload.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BaseModalFileUpload',
  components: {
    BaseFileUpload: _BaseFileUpload_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  emits: ['CloseModal', 'CreateNewFile'],
  props: {
    HeaderText: '',
    ButtonNewPhoto: false,
    'type': {
      type: String
    }
  },
  data: function data() {
    return {
      NewPhoto: {
        image: null
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    languageId: 'lang/getLanguageId'
  })),
  methods: {
    UploadNewFile: function UploadNewFile(image) {
      this.NewPhoto.image = image.src;
      this.NewPhoto.name = image.name;
      this.NewPhoto.language_id = this.languageId;
    },
    CreateImage: function CreateImage() {
      this.$emit('CreateNewFile', this.NewPhoto);
      this.CloseModal();
      this.NewPhoto = {
        image: null
      };
    },
    CloseModal: function CloseModal() {
      this.$emit('CloseModal');
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_StrTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/StrTable */ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue");
/* harmony import */ var _modules_StrMetaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/StrMetaData */ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue");
/* harmony import */ var _modules_StrSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/StrSetting */ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_BaseModalFileUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/BaseModalFileUpload.vue */ "./resources/js/backend/components/BaseModalFileUpload.vue");
/* harmony import */ var _backend_components_BaseTranslateSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backend/components/BaseTranslateSlide */ "./resources/js/backend/components/BaseTranslateSlide.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BackendVideoPage",
  components: {
    StrSetting: _modules_StrSetting__WEBPACK_IMPORTED_MODULE_2__["default"],
    StrMetaData: _modules_StrMetaData__WEBPACK_IMPORTED_MODULE_1__["default"],
    StrTable: _modules_StrTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    BaseModalFileUpload: _components_BaseModalFileUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BaseTranslateSlide: _backend_components_BaseTranslateSlide__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      ButtonTabInfo: false,
      ButtonLeftAside: false,
      ButtonNewGallery: false,
      selectedGalleryIds: [],
      NewGallery: {
        sorting: 1
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)({
    GetVideoPage: 'PageVideo/GetVideoPage',
    languageId: 'lang/getLanguageId'
  })), {}, {
    page: function page() {
      return this.GetVideoPage(+this.id, this.languageId);
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(['PageVideo/set', 'PageVideo/update', 'PageVideo/createGallery', 'PageVideo/updateGallery', 'PageVideo/destroyGalleries'])), {}, {
    CloseLeftAside: function CloseLeftAside() {
      this.ButtonLeftAside = false;
    },
    closeNewGallery: function closeNewGallery() {
      this.ButtonNewGallery = false;
    },
    CreateGallery: function CreateGallery(image) {
      this.NewGallery.photo_page_id = +this.id;
      this.NewGallery.image_alt = image.alt;
      this.NewGallery.image_title = image.title;
      this.NewGallery.image_name = image.name;
      this.NewGallery.image = image.image;
      this['PageVideo/createGallery'](this.NewGallery);
      this.ButtonNewGallery = false;
      this.NewGallery = {
        sorting: 1
      };
    },
    UpdatePage: function UpdatePage() {
      this.page.translate.language_id = this.languageId;
      this['PageVideo/update'](this.page);
    },
    UpdateGalleryItem: function UpdateGalleryItem(id) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var photoGalleryItem = this.page.galleries.find(function (g) {
        return g.id === id;
      });
      photoGalleryItem.replace = replace;
      this['PageVideo/updateGallery'](photoGalleryItem);
    },
    UpdateGallery: function UpdateGallery() {
      this['PageVideo/update'](this.page);
      this.ButtonLeftAside = false;
    },
    UpdateVideo: function UpdateVideo(photo_gallery) {
      this['PageVideo/updateGallery'](photo_gallery);
    },
    DeleteGalleryItem: function DeleteGalleryItem() {
      this['PageVideo/destroyGalleries'](this.selectedGalleryIds);
      this.selectedGalleryIds = [];
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  name: "str-meta-data",
  props: {
    page: {}
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    language: "lang/getLanguage"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "str-setting",
  props: {
    page: {
      type: Object
    }
  },
  emits: ['UpdateGallery'],
  methods: {
    UpdateGallery: function UpdateGallery() {
      this.$emit('UpdateGallery');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_UI_BaseLibraryImages_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/UI/BaseLibraryImages.vue */ "./resources/js/backend/components/UI/BaseLibraryImages.vue");
/* harmony import */ var _components_BaseFileUpload_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/BaseFileUpload.vue */ "./resources/js/backend/components/BaseFileUpload.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "str-table",
  components: {
    BaseLibraryImages: _components_UI_BaseLibraryImages_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BaseFileUpload: _components_BaseFileUpload_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    selected: {
      type: Array
    }
  },
  emits: ['UpdateGalleryItem', 'UpdateVideo', 'update:selected'],
  data: function data() {
    return {
      showIcon: (__webpack_require__(/*! @img/icons/show.svg */ "./resources/js/assets/img/icons/show.svg")["default"]),
      unshow: (__webpack_require__(/*! @img/icons/close.svg */ "./resources/js/assets/img/icons/close.svg")["default"]),
      ButtonEditGallery: false,
      Gallery: {},
      selectedGalleryIds: []
    };
  },
  computed: _objectSpread({
    selectAll: {
      get: function get() {
        return this.page.galleries ? this.selectedGalleryIds.length === this.page.galleries.length : false;
      },
      set: function set(value) {
        this.selectedGalleryIds = value ? this.page.galleries.map(function (i) {
          return i.id;
        }) : [];
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    videos: 'PageVideo/getVideos'
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['PageVideo/setVideos'])), {}, {
    UpdateGalleryItem: function UpdateGalleryItem(id) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$emit('UpdateGalleryItem', id, replace);
    },
    ChangeImage: function ChangeImage(id) {
      this.ButtonEditGallery = true;
      this.Gallery.id = id;
      this.Gallery.video_gallery_id = this.page.galleries.find(function (g) {
        return g.id === id;
      }).video_gallery_id;
    },
    UpdateVideo: function UpdateVideo(image) {
      this.Gallery.video = image.src;
      this.Gallery.video_name = image.name;
      this.Gallery.video_page_id = this.page.id;
      this.$emit('UpdateVideo', this.Gallery);
      this.Gallery = {};
      this.ButtonEditGallery = false;
    },
    CloseModal: function CloseModal() {
      this.ButtonEditGallery = false;
    },
    CheckGallery: function CheckGallery() {
      this.$emit('update:selected', this.selectedGalleryIds);
    }
  }),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.videos.length === 0) {
                _this['PageVideo/setVideos']();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    style: {
      "display": "none"
    },
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.UploadFile && $options.UploadFile.apply($options, arguments);
    }),
    ref: "fileInput",
    accept: $props.type
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "str-file-upload",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.uploaded && $options.uploaded.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7daf02d9"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "form-group"
};
var _hoisted_2 = {
  "class": "form-column file-name"
};
var _hoisted_3 = {
  "class": "form-column"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "upload-image"
  }, "upload", -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "input-btn"
};
var _hoisted_6 = ["disabled"];
var _hoisted_7 = {
  "class": "form-column"
};
var _hoisted_8 = {
  "class": "input"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Alt", -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "input"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Title", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-file-upload");

  var _component_str_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_str_modal, {
    "is-active": $props.ButtonNewPhoto,
    HeaderText: $props.HeaderText,
    onCloseModal: $options.CloseModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.NewPhoto.image), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_file_upload, {
        onUploadNewFile: $options.UploadNewFile,
        type: $props.type
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onUploadNewFile", "type"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "upload-image",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.CreateImage && $options.CreateImage.apply($options, arguments);
        }),
        disabled: !_ctx.NewPhoto.image
      }, "Save", 8
      /* PROPS */
      , _hoisted_6)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.NewPhoto.alt = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.NewPhoto.alt]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.NewPhoto.title = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.NewPhoto.title]])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-active", "HeaderText", "onCloseModal"]);
}

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "info-item small"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " description: ", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "info-item"
};
var _hoisted_4 = ["placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "אנא הזינו שם ב-Hebrew",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.page.translate.description = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.language.name) + ": טקסט תחתון ב- ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: 'אנא הזינו טקסט תחתון ב-' + _ctx.language.name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.page.translate.name = $event;
    })
  }, null, 8
  /* PROPS */
  , _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.name]])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "productpage-modal__top"
};
var _hoisted_2 = {
  "class": "productpage-modal__top-item"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Page Slug:", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "productpage-modal__content"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "productpage-modal__content-title"
}, " הגדרות META: ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "productpage-modal__content-item"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Page Title:", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "productpage-modal__content-item"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, ":Meta Description ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "productpage-modal__content-item"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Meta Keywords:", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "אנא הזינו שם לעמוד ב URL",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.page.translate.slug = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.slug]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "אנא הזינו Page Title",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.page.translate.meta_title = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.meta_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "אנא הזינו Meta Description",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $props.page.translate.meta_description = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.meta_description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "אנא הזינו Meta Keywords",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.page.translate.meta_keywords = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.page.translate.meta_keywords]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "productpage-modal__btn btn",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.UpdateGallery && $options.UpdateGallery.apply($options, arguments);
    })
  }, " שמור ")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_icons_edit_ico_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/icons/edit-ico.svg */ "./resources/js/assets/img/icons/edit-ico.svg");


var _hoisted_1 = {
  "class": "orders products productspage product-products product-images"
};
var _hoisted_2 = {
  "class": "check"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fake"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "סדור", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "פעולות", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "check"
};
var _hoisted_9 = ["value"];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fake"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "table-img"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = ["onClick"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("שינוי תמונה ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_icons_edit_ico_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_14, _hoisted_15];
var _hoisted_17 = {
  "class": "table-img__info"
};
var _hoisted_18 = {
  "class": "table-img__info-item"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Alt:", -1
/* HOISTED */
);

var _hoisted_20 = ["onUpdate:modelValue", "onChange"];
var _hoisted_21 = {
  "class": "table-img__info-item"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Title:", -1
/* HOISTED */
);

var _hoisted_23 = ["onUpdate:modelValue", "onChange"];
var _hoisted_24 = {
  "class": "table-img__info-item"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "File name:", -1
/* HOISTED */
);

var _hoisted_26 = ["onUpdate:modelValue", "onChange"];
var _hoisted_27 = ["onUpdate:modelValue", "onChange"];
var _hoisted_28 = ["value"];
var _hoisted_29 = ["onClick"];
var _hoisted_30 = ["src"];

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("להציג");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-file-upload");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.selectAll = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.CheckGallery && $options.CheckGallery.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $options.selectAll]]), _hoisted_3])]), _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.page.galleries, function (gallery) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "order-row",
      key: gallery.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return _ctx.selectedGalleryIds = $event;
      }),
      value: gallery.id,
      onChange: _cache[3] || (_cache[3] = function () {
        return $options.CheckGallery && $options.CheckGallery.apply($options, arguments);
      })
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.selectedGalleryIds]]), _hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("video", {
      src: gallery.video,
      width: "150",
      controls: ""
    }, null, 8
    /* PROPS */
    , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_file_upload, {
      onUploadNewFile: $options.UpdateVideo,
      type: "video/*"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "table-img__title",
          onClick: function onClick($event) {
            return $options.ChangeImage(gallery.id);
          }
        }, _hoisted_16, 8
        /* PROPS */
        , _hoisted_13)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onUploadNewFile"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "סוכה כשרה",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return gallery.video_alt = $event;
      },
      onChange: function onChange($event) {
        return $options.UpdateGalleryItem(gallery.id);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, gallery.video_alt]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "סוכה כשרה",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return gallery.video_title = $event;
      },
      onChange: function onChange($event) {
        return $options.UpdateGalleryItem(gallery.id);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, gallery.video_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      placeholder: "סוכה-כשרה6667",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return gallery.video_name = $event;
      },
      onChange: function onChange($event) {
        return $options.UpdateGalleryItem(gallery.id, true);
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, gallery.video_name]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return gallery.sorting = $event;
      },
      onChange: function onChange($event) {
        return $options.UpdateGalleryItem(gallery.id);
      }
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.page.galleries.length, function (count) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        value: count,
        key: count
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(count), 9
      /* TEXT, PROPS */
      , _hoisted_28);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, gallery.sorting]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        gallery.status = !gallery.status;
        $options.UpdateGalleryItem(gallery.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: gallery.status ? _ctx.showIcon : _ctx.unshow,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_30), _hoisted_31], 8
    /* PROPS */
    , _hoisted_29)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <base-library.videos :is-active=\"ButtonEditGallery\" @CloseModal=\"CloseModal\" HeaderText=\"\" :width=\"'600px'\"\r\n    @UpdateImage=\"UpdateImage\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_icons_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/icons/add-icon.svg */ "./resources/js/assets/img/icons/add-icon.svg");
/* harmony import */ var _img_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/icons/settings.svg */ "./resources/js/assets/img/icons/settings.svg");



var _hoisted_1 = {
  key: 0,
  "class": "cart-btns"
};
var _hoisted_2 = {
  key: 1,
  "class": "cart-btns"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_icons_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "container-content"
};
var _hoisted_6 = {
  "class": "container-content__top container-content__top_tabs"
};
var _hoisted_7 = {
  "class": "container-content__top-row"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  "class": "container-content__top-title"
};
var _hoisted_11 = {
  "class": "container-content__top-row"
};
var _hoisted_12 = {
  "class": "container-content__tabs"
};
var _hoisted_13 = {
  "class": "container-content__body container-content__body_info"
};
var _hoisted_14 = {
  key: 0,
  "class": "container-content__body-info article product-params gallery-img"
};
var _hoisted_15 = {
  key: 1,
  "class": "container-content__body"
};
function render(_ctx, _cache) {
  var _component_base_translate_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-translate-slide");

  var _component_str_setting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-setting");

  var _component_LeftAside = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LeftAside");

  var _component_base_modal_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-modal-file-upload");

  var _component_LanguageSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LanguageSelect");

  var _component_str_meta_data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-meta-data");

  var _component_str_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("str-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.ButtonTabInfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "cart-btns__item btn",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.UpdatePage && _ctx.UpdatePage.apply(_ctx, arguments);
    })
  }, "Сохранять")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cart-btns__item product-add-new btn circle",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.ButtonNewGallery = true;
    })
  }, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_translate_slide, {
    "is-active": _ctx.selectedGalleryIds.length > 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.selectedGalleryIds.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "cart-btns__item btn",
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.DeleteGalleryItem && _ctx.DeleteGalleryItem.apply(_ctx, arguments);
        })
      }, " מחיקה ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-active"])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LeftAside, {
    "is-active": _ctx.ButtonLeftAside,
    onCloseLeftAside: _ctx.CloseLeftAside
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_setting, {
        page: _ctx.page,
        "onUpdate:page": _cache[3] || (_cache[3] = function ($event) {
          return _ctx.page = $event;
        }),
        onUpdateGallery: _ctx.UpdateGallery
      }, null, 8
      /* PROPS */
      , ["page", "onUpdateGallery"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["is-active", "onCloseLeftAside"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_modal_file_upload, {
    ButtonNewPhoto: _ctx.ButtonNewGallery,
    type: "video/*",
    HeaderText: "Выберите Video",
    onCloseModal: _ctx.closeNewGallery,
    onCreateNewFile: _ctx.CreateGallery
  }, null, 8
  /* PROPS */
  , ["ButtonNewPhoto", "onCloseModal", "onCreateNewFile"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "settings-btn productpage-params__btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.ButtonLeftAside = true;
    })
  }, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LanguageSelect), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.page.translate.name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.ButtonTabInfo = true;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      active: _ctx.ButtonTabInfo === true
    }, "container-content__tabs-item"])
  }, " Детали галереи ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.ButtonTabInfo = false;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      active: _ctx.ButtonTabInfo === false
    }, "container-content__tabs-item"])
  }, " Фото ", 2
  /* CLASS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_ctx.ButtonTabInfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_meta_data, {
    page: _ctx.page,
    "onUpdate:page": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.page = $event;
    })
  }, null, 8
  /* PROPS */
  , ["page"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_str_table, {
    page: _ctx.page,
    "onUpdate:page": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.page = $event;
    }),
    selected: _ctx.selectedGalleryIds,
    "onUpdate:selected": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.selectedGalleryIds = $event;
    }),
    onUpdateGalleryItem: _ctx.UpdateGalleryItem,
    onUpdateVideo: _ctx.UpdateVideo
  }, null, 8
  /* PROPS */
  , ["page", "selected", "onUpdateGalleryItem", "onUpdateVideo"])]))])])], 64
  /* STABLE_FRAGMENT */
  );
}

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

/***/ "./resources/js/assets/img/icons/settings.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/icons/settings.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/settings.svg?371be66bfcaee6a97c38e830184be9d5");

/***/ }),

/***/ "./resources/js/assets/img/icons/show.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/img/icons/show.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/show.svg?99ff9ae66ba247aeb36b03729a82f7b3");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".lang-new__content[data-v-7daf02d9] {\n  justify-content: flex-start;\n}\n.form-group[data-v-7daf02d9] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n.form-group .form-column[data-v-7daf02d9] {\n  width: 50%;\n}\n.form-group .form-column .upload-image[data-v-7daf02d9] {\n  background: none;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #eee;\n  transition: background 0.5s;\n  border-radius: 15px;\n}\n.form-group .form-column .upload-image[data-v-7daf02d9]:disabled:hover {\n  background: red;\n}\n.form-group .form-column .upload-image[data-v-7daf02d9]:hover {\n  background: rgba(110, 141, 19, 0.7882352941);\n  color: #fff;\n}\n.form-group .form-column .input-btn[data-v-7daf02d9] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 5px 0;\n}\n.form-group .form-column .input[data-v-7daf02d9] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 5px 0;\n}\n.form-group .form-column .input input.form-control[data-v-7daf02d9] {\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.form-group .file-name[data-v-7daf02d9] {\n  width: 100%;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.tab-btn {\n  padding: 15px 25px;\n  border: 1px solid #eee;\n  margin: 5px 15px;\n  background: #82ad00;\n  color: #fff;\n  border-radius: 25px;\n}\n.lang-new__content {\n  justify-content: flex-start;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.str-file-upload {\r\n  background: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_style_index_0_id_7daf02d9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_style_index_0_id_7daf02d9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_style_index_0_id_7daf02d9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_style_scss_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./style.scss?vue&type=style&index=0&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_style_scss_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_style_scss_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_style_index_0_id_07df1c3e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_style_index_0_id_07df1c3e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_style_index_0_id_07df1c3e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/components/BaseFileUpload.vue":
/*!************************************************************!*\
  !*** ./resources/js/backend/components/BaseFileUpload.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseFileUpload_vue_vue_type_template_id_07df1c3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFileUpload.vue?vue&type=template&id=07df1c3e */ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e");
/* harmony import */ var _BaseFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseFileUpload.vue?vue&type=script&lang=js */ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js");
/* harmony import */ var _BaseFileUpload_vue_vue_type_style_index_0_id_07df1c3e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css */ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BaseFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseFileUpload_vue_vue_type_template_id_07df1c3e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/backend/components/BaseFileUpload.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/components/BaseModalFileUpload.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/components/BaseModalFileUpload.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseModalFileUpload_vue_vue_type_template_id_7daf02d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true */ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true");
/* harmony import */ var _BaseModalFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseModalFileUpload.vue?vue&type=script&lang=js */ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js");
/* harmony import */ var _BaseModalFileUpload_vue_vue_type_style_index_0_id_7daf02d9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true */ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BaseModalFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseModalFileUpload_vue_vue_type_template_id_7daf02d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7daf02d9"],['__file',"resources/js/backend/components/BaseModalFileUpload.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/backend/pages/page-video/page/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/index.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_html_vue_type_template_id_05454460__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html?vue&type=template&id=05454460 */ "./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js");
/* harmony import */ var _style_scss_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=0&lang=scss */ "./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_html_vue_type_template_id_05454460__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/backend/pages/page-video/page/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StrMetaData_vue_vue_type_template_id_4916b176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrMetaData.vue?vue&type=template&id=4916b176 */ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176");
/* harmony import */ var _StrMetaData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrMetaData.vue?vue&type=script&lang=js */ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StrMetaData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StrMetaData_vue_vue_type_template_id_4916b176__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/backend/pages/page-video/page/modules/StrMetaData.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrSetting.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StrSetting_vue_vue_type_template_id_5b712bf9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrSetting.vue?vue&type=template&id=5b712bf9 */ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9");
/* harmony import */ var _StrSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrSetting.vue?vue&type=script&lang=js */ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StrSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StrSetting_vue_vue_type_template_id_5b712bf9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/backend/pages/page-video/page/modules/StrSetting.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrTable.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StrTable_vue_vue_type_template_id_69620a92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrTable.vue?vue&type=template&id=69620a92 */ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92");
/* harmony import */ var _StrTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrTable.vue?vue&type=script&lang=js */ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_shair_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StrTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StrTable_vue_vue_type_template_id_69620a92__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/backend/pages/page-video/page/modules/StrTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseFileUpload.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModalFileUpload.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrMetaData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrMetaData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrMetaData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrSetting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrSetting.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_template_id_07df1c3e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_template_id_07df1c3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseFileUpload.vue?vue&type=template&id=07df1c3e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=template&id=07df1c3e");


/***/ }),

/***/ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_template_id_7daf02d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_template_id_7daf02d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=template&id=7daf02d9&scoped=true");


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

/***/ "./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrMetaData_vue_vue_type_template_id_4916b176__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrMetaData_vue_vue_type_template_id_4916b176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrMetaData.vue?vue&type=template&id=4916b176 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrMetaData.vue?vue&type=template&id=4916b176");


/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrSetting_vue_vue_type_template_id_5b712bf9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrSetting_vue_vue_type_template_id_5b712bf9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrSetting.vue?vue&type=template&id=5b712bf9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrSetting.vue?vue&type=template&id=5b712bf9");


/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrTable_vue_vue_type_template_id_69620a92__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StrTable_vue_vue_type_template_id_69620a92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StrTable.vue?vue&type=template&id=69620a92 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/pages/page-video/page/modules/StrTable.vue?vue&type=template&id=69620a92");


/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_index_html_vue_type_template_id_05454460__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_index_html_vue_type_template_id_05454460__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./index.html?vue&type=template&id=05454460 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./resources/js/backend/pages/page-video/page/index.html?vue&type=template&id=05454460");


/***/ }),

/***/ "./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_style_scss_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./style.scss?vue&type=style&index=0&lang=scss */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/backend/pages/page-video/page/style.scss?vue&type=style&index=0&lang=scss");


/***/ }),

/***/ "./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseModalFileUpload_vue_vue_type_style_index_0_id_7daf02d9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseModalFileUpload.vue?vue&type=style&index=0&id=7daf02d9&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseTranslateSlide_vue_vue_type_style_index_0_id_420da724_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseTranslateSlide.vue?vue&type=style&index=0&id=420da724&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseFileUpload_vue_vue_type_style_index_0_id_07df1c3e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/backend/components/BaseFileUpload.vue?vue&type=style&index=0&id=07df1c3e&lang=css");


/***/ })

}]);