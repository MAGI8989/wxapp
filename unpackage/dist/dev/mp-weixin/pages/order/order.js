(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order"],{

/***/ 150:
/*!*******************************************************************!*\
  !*** D:/WorkSpace/wxapp/main.js?{"page":"pages%2Forder%2Forder"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _order = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order.vue */ 151));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 151:
/*!************************************************!*\
  !*** D:/WorkSpace/wxapp/pages/order/order.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=127632e4&scoped=true& */ 152);
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ 154);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&id=127632e4&scoped=true&lang=css& */ 156);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "127632e4",
  null,
  false,
  _order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/*!*******************************************************************************************!*\
  !*** D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=template&id=127632e4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=template&id=127632e4&scoped=true& */ 153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_127632e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 153:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=template&id=127632e4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    tuiIcon: function() {
      return Promise.all(/*! import() | node-modules/thorui-uni/lib/thorui/tui-icon/tui-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/thorui-uni/lib/thorui/tui-icon/tui-icon")]).then(__webpack_require__.bind(null, /*! thorui-uni/lib/thorui/tui-icon/tui-icon.vue */ 207))
    },
    tuiListView: function() {
      return __webpack_require__.e(/*! import() | node-modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view */ "node-modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view").then(__webpack_require__.bind(null, /*! thorui-uni/lib/thorui/tui-list-view/tui-list-view.vue */ 215))
    },
    tuiListCell: function() {
      return __webpack_require__.e(/*! import() | node-modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell */ "node-modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell").then(__webpack_require__.bind(null, /*! thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.vue */ 222))
    },
    tuiTag: function() {
      return __webpack_require__.e(/*! import() | node-modules/thorui-uni/lib/thorui/tui-tag/tui-tag */ "node-modules/thorui-uni/lib/thorui/tui-tag/tui-tag").then(__webpack_require__.bind(null, /*! thorui-uni/lib/thorui/tui-tag/tui-tag.vue */ 229))
    },
    uNumberBox: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-number-box/u-number-box */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-number-box/u-number-box")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-number-box/u-number-box.vue */ 236))
    },
    tuiFab: function() {
      return __webpack_require__.e(/*! import() | node-modules/thorui-uni/lib/thorui/tui-fab/tui-fab */ "node-modules/thorui-uni/lib/thorui/tui-fab/tui-fab").then(__webpack_require__.bind(null, /*! thorui-uni/lib/thorui/tui-fab/tui-fab.vue */ 244))
    },
    uPopup: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-popup/u-popup.vue */ 199))
    },
    uLine: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-line/u-line */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-line/u-line")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-line/u-line.vue */ 251))
    },
    "u-Textarea": function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--textarea/u--textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--textarea/u--textarea")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--textarea/u--textarea.vue */ 259))
    },
    uSwiper: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-swiper/u-swiper */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-swiper/u-swiper")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-swiper/u-swiper.vue */ 182))
    },
    uRate: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-rate/u-rate */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-rate/u-rate")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-rate/u-rate.vue */ 265))
    },
    uButton: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 273))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.PayAmount == 0 ? _vm.SumPrice.toFixed(2) : null
  var g1 = !(_vm.PayAmount == 0) ? _vm.SumPrice.toFixed(2) : null
  var g2 = !(_vm.PayAmount == 0) ? _vm.PayAmount.toFixed(2) : null

  var l0 = _vm.__map(_vm.Dishes, function(DishItem, __i3__) {
    var $orig = _vm.__get_orig(DishItem)

    var g3 =
      DishItem.Dishitem.DishCount > 0 && DishItem.Dishitem.PromotionPrice > 0
        ? (
            DishItem.Dishitem.PromotionPrice * DishItem.Dishitem.DishCount
          ).toFixed(2)
        : null
    var g4 =
      DishItem.Dishitem.DishCount > 0 && !(DishItem.Dishitem.PromotionPrice > 0)
        ? (DishItem.Dishitem.NormalPrice * DishItem.Dishitem.DishCount).toFixed(
            2
          )
        : null
    return {
      $orig: $orig,
      g3: g3,
      g4: g4
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 154:
/*!*************************************************************************!*\
  !*** D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=script&lang=js& */ 155);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































































































var _requests = __webpack_require__(/*! ../../API/requests.js */ 138);

var _api = __webpack_require__(/*! @/API/api.js */ 140);
var _msgAlert = __webpack_require__(/*! @/API/msgAlert.js */ 139);
var _store = _interopRequireDefault(__webpack_require__(/*! @/store/store.js */ 137));
var _vuex = __webpack_require__(/*! vuex */ 136);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =
{
  data: function data() {
    return {
      MenuData: {},
      ShoppingCart: [],
      DishDetail: {},
      Dishes: [],
      SumPrice: 0,
      PayAmount: 0,
      Notice: "通知栏",
      OrderState: 0,
      TableCode: 1,
      OrderCode: 0,
      OrderDesc: "",
      rate: 0,
      comment: "",
      // CSS控制
      ShoppingCartShow: false,
      StyleItemIsActive: false,
      DishCountTest: true,
      WriteBoxShow: false,
      DishCount: 0,
      scrollTop: 0,
      // toView为锚点id传值
      toView: "",
      BackToTheTopControl: true,
      DishDetailShow: false,
      SecondOrder: false };

  },
  components: {},

  onLoad: function onLoad() {
    // 获取数据
    this.MenuInit();
    // this.getNoticeData()
  },
  methods: {
    // 样式控制
    // 购物车弹窗控制
    ShoppingCartOpen: function ShoppingCartOpen() {
      var sum = parseFloat(0);var _iterator = _createForOfIteratorHelper(
      this.Dishes),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var tempDish = _step.value;
          if (tempDish.Dishitem.DishCount > 0) {
            var count = parseInt(tempDish.Dishitem.DishCount);
            var proprice = parseFloat(tempDish.Dishitem.PromotionPrice);
            var norprice = parseFloat(tempDish.Dishitem.NormalPrice);
            if (tempDish.Dishitem.PromotionPrice > 0) {
              sum += parseFloat((count * proprice).toFixed(2));
            } else {
              sum += parseFloat((count * norprice).toFixed(2));
            }
          }
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      this.SumPrice = sum;
      this.ShoppingCartShow = true;
      this.BackToTheTopControl = false;
    },
    ShoppingCartClose: function ShoppingCartClose() {
      this.ShoppingCartShow = false;
    },
    ShoppingCartClick: function ShoppingCartClick() {
      this.ShoppingCartOpen();
    },
    styleclick: function styleclick(e) {
      // e为锚点id
      this.toView = e;
    },
    BackToTheTop: function BackToTheTop() {
      //设置屏幕滚动到顶部
      this.toView = "Style0";
      this.$nextTick(function () {
        this.toView = "";
      });
    },
    MenuInit: function MenuInit() {var _this = this;
      // let tableid=store.getters.getTalbeCode
      var tableid = 1;
      (0, _requests.getMethod)(_api.menuGet, { "dinTableId": tableid }).
      then(function (res) {
        console.log(res);
        var lastOrder = res[1].data.order;
        var temp = [];
        if (lastOrder === null) {
          console.log("lastorder=null");var _iterator2 = _createForOfIteratorHelper(
          res[1].data.data),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var tempCategory = _step2.value;
              var tempDishes = [];var _iterator3 = _createForOfIteratorHelper(
              tempCategory.foodList),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var tempDish = _step3.value;
                  var tempTag = [];
                  tempTag = tempDish.foodTag.split(",");
                  var sum = 0;
                  var menuTag = [];
                  // 限定主页tag字数
                  var _iterator4 = _createForOfIteratorHelper(tempTag),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var tag = _step4.value;
                      sum += tag.length;
                      if (sum > 8) {
                        break;
                      } else {
                        menuTag.push(tag);
                      }
                    }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
                  var tempPictures = [];var _iterator5 = _createForOfIteratorHelper(
                  tempDish.foodImgList),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var pic = _step5.value;
                      tempPictures.push(_api.getPicture + pic.foodImgUrl.replace(/\\/g, '/'));
                    }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
                  tempDishes.push({
                    "Dishitem": {
                      "DishCount": 0,
                      "DishName": tempDish.foodName,
                      "DishState": tempDish.foodState,
                      "NormalPrice": tempDish.foodNormalPrice,
                      "PromotionPrice": tempDish.foodPromotionPrice,
                      "DishCode": tempDish.foodId,
                      "DishDesc": tempDish.foodDesc,
                      "Tags": menuTag,
                      "MonthAmount": 0,
                      "Picture": {
                        "MenuPicture": _api.getPicture + tempDish.foodImg.replace(/\\/g, '/'),
                        "DetailPicture": tempPictures } } });



                  _this.Dishes.push({
                    "Dishitem": {
                      "DishCount": 0,
                      "DishName": tempDish.foodName,
                      "DishState": tempDish.foodState,
                      "NormalPrice": tempDish.foodNormalPrice,
                      "PromotionPrice": tempDish.foodPromotionPrice,
                      "DishCode": tempDish.foodId,
                      "DishDesc": tempDish.foodDesc,
                      "Tags": tempTag,
                      "MonthAmount": 0,
                      "Picture": {
                        "MenuPicture": _api.getPicture + tempDish.foodImg.replace(/\\/g, '/'),
                        "DetailPicture": tempPictures } } });



                }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
              temp.push({
                "CategoryItem": {
                  "CategoryName": tempCategory.foodCategoryName,
                  "CategoryCode": tempCategory.foodCategoryId,
                  "Dish": tempDishes } });


            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
          _this.MenuData = temp;
          _store.default.getters.setMenuData(temp);
          _store.default.getters.setDishes(_this.Dishes);
        } else {
          console.log("eeee");
          _this.SecondOrder = true;
          _store.default.getters.setOrderCode(lastOrder[0].orderId);
          var _temp = [];var _iterator6 = _createForOfIteratorHelper(
          res[1].data.data),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _tempCategory = _step6.value;
              var _tempDishes = [];var _iterator8 = _createForOfIteratorHelper(
              _tempCategory.foodList),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var _tempDish = _step8.value;
                  var _tempTag = [];
                  _tempTag = _tempDish.foodTag.split(",");
                  var _sum = 0;
                  var _menuTag = [];
                  // 限定主页tag字数
                  var _iterator9 = _createForOfIteratorHelper(_tempTag),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var _tag = _step9.value;
                      _sum += _tag.length;
                      if (_sum > 8) {
                        break;
                      } else {
                        _menuTag.push(_tag);
                      }
                    }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
                  var _tempPictures = [];var _iterator10 = _createForOfIteratorHelper(
                  _tempDish.foodImgList),_step10;try {for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {var _pic = _step10.value;
                      _tempPictures.push(_api.getPicture + _pic.foodImgUrl.replace(/\\/g, '/'));
                    }} catch (err) {_iterator10.e(err);} finally {_iterator10.f();}
                  _tempDishes.push({
                    "Dishitem": {
                      "DishCount": 0,
                      "DishName": _tempDish.foodName,
                      "DishState": _tempDish.foodState,
                      "NormalPrice": _tempDish.foodNormalPrice,
                      "PromotionPrice": _tempDish.foodPromotionPrice,
                      "DishCode": _tempDish.foodId,
                      "DishDesc": _tempDish.foodDesc,
                      "Tags": _menuTag,
                      "MonthAmount": 0,
                      "Picture": {
                        "MenuPicture": _api.getPicture + _tempDish.foodImg.replace(/\\/g, '/'),
                        "DetailPicture": _tempPictures } } });



                  _this.Dishes.push({
                    "Dishitem": {
                      "DishCount": 0,
                      "DishName": _tempDish.foodName,
                      "DishState": _tempDish.foodState,
                      "NormalPrice": _tempDish.foodNormalPrice,
                      "PromotionPrice": _tempDish.foodPromotionPrice,
                      "DishCode": _tempDish.foodId,
                      "DishDesc": _tempDish.foodDesc,
                      "Tags": _tempTag,
                      "MonthAmount": 0,
                      "Picture": {
                        "MenuPicture": _api.getPicture + _tempDish.foodImg.replace(/\\/g, '/'),
                        "DetailPicture": _tempPictures } } });



                }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}
              _temp.push({
                "CategoryItem": {
                  "CategoryName": _tempCategory.foodCategoryName,
                  "CategoryCode": _tempCategory.foodCategoryId,
                  "Dish": _tempDishes } });


            }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
          _this.MenuData = _temp;
          // 重现数据
          var _iterator7 = _createForOfIteratorHelper(lastOrder),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var ordereddish = _step7.value;var _iterator11 = _createForOfIteratorHelper(
              _this.MenuData),_step11;try {for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {var _tempCategory2 = _step11.value;var _iterator13 = _createForOfIteratorHelper(
                  _tempCategory2.CategoryItem.Dish),_step13;try {for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {var _tempDish2 = _step13.value;
                      if (_tempDish2.Dishitem.DishCode == ordereddish.foodId) {
                        _tempDish2.Dishitem.DishCount = ordereddish.orderFoodNum;
                        break;
                      }
                    }} catch (err) {_iterator13.e(err);} finally {_iterator13.f();}
                }} catch (err) {_iterator11.e(err);} finally {_iterator11.f();}var _iterator12 = _createForOfIteratorHelper(
              _this.Dishes),_step12;try {for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {var dishitem = _step12.value;
                  if (dishitem.Dishitem.DishCode == ordereddish.foodId) {
                    dishitem.Dishitem.DishCount = ordereddish.orderFoodNum;
                    break;
                  }
                }} catch (err) {_iterator12.e(err);} finally {_iterator12.f();}
            }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}
          _store.default.getters.setMenuData(_temp);
        }
      });

    },
    // 菜品详情控制
    DishItemClick: function DishItemClick(DishCode) {
      DishCode = parseInt(DishCode);
      var DetailDishData = {};var _iterator14 = _createForOfIteratorHelper(
      this.Dishes),_step14;try {for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {var Dish = _step14.value;
          if (Dish.Dishitem.DishCode == DishCode) {
            var TempPicture = [];
            TempPicture.push(Dish.Dishitem.Picture.MenuPicture);var _iterator15 = _createForOfIteratorHelper(
            Dish.Dishitem.Picture.DetailPicture),_step15;try {for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {var temp = _step15.value;
                TempPicture.push(temp);
              }} catch (err) {_iterator15.e(err);} finally {_iterator15.f();}
            DetailDishData = {
              DishName: Dish.Dishitem.DishName,
              NormalPrice: Dish.Dishitem.NormalPrice,
              PromotionPrice: Dish.Dishitem.PromotionPrice,
              DishCount: Dish.Dishitem.DishCount,
              Tags: Dish.Dishitem.Tags,
              Picture: TempPicture,
              DishDesc: Dish.Dishitem.DishDesc,
              DishCode: Dish.Dishitem.DishCode };

            this.DishDetail = DetailDishData;
            break;
          }
        }} catch (err) {_iterator14.e(err);} finally {_iterator14.f();}
      this.DishDetailOpen();
    },
    DishDetailClose: function DishDetailClose() {
      this.DishDetailShow = false;
      this.BackToTheTopControl = true;
    },
    DishDetailOpen: function DishDetailOpen() {
      this.DishDetailShow = true;
      this.BackToTheTopControl = false;
    },
    // 详情页面添加按钮
    DetailPurchaseClick: function DetailPurchaseClick() {
      var DishCode = this.DishDetail.DishCode;var _iterator16 = _createForOfIteratorHelper(
      this.MenuData),_step16;try {for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {var Category = _step16.value;var _iterator18 = _createForOfIteratorHelper(
          Category.CategoryItem.Dish),_step18;try {for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {var tempDish = _step18.value;
              if (tempDish.Dishitem.DishCode == parseInt(DishCode)) {
                tempDish.Dishitem.AddButtonShow = false;
                tempDish.Dishitem.DishCount = 1;
                break;
              }
            }} catch (err) {_iterator18.e(err);} finally {_iterator18.f();}
        }
        // 更新Dishes
      } catch (err) {_iterator16.e(err);} finally {_iterator16.f();}var _iterator17 = _createForOfIteratorHelper(this.Dishes),_step17;try {for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {var _tempDish3 = _step17.value;
          if (_tempDish3.Dishitem.DishCode == DishCode) {
            _tempDish3.Dishitem.DishCount = 1;
            break;
          }
        }} catch (err) {_iterator17.e(err);} finally {_iterator17.f();}
      this.DishDetailClose();
    },
    DetailPurchasedClick: function DetailPurchasedClick() {
      this.DishDetailClose();
      _msgAlert.AlertMsg.MsgShow("菜品已在购物车");
    },
    // 主菜单添加按钮
    MenuAddToShoppingCartClick: function MenuAddToShoppingCartClick(DishCode) {var _iterator19 = _createForOfIteratorHelper(
      this.MenuData),_step19;try {for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {var Category = _step19.value;var _iterator21 = _createForOfIteratorHelper(
          Category.CategoryItem.Dish),_step21;try {for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {var tempDish = _step21.value;
              if (tempDish.Dishitem.DishCode == parseInt(DishCode)) {
                tempDish.Dishitem.AddButtonShow = false;
                tempDish.Dishitem.DishCount = 1;
                break;
              }
            }} catch (err) {_iterator21.e(err);} finally {_iterator21.f();}
        }
        // 更新Dishes
      } catch (err) {_iterator19.e(err);} finally {_iterator19.f();}var _iterator20 = _createForOfIteratorHelper(this.Dishes),_step20;try {for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {var _tempDish4 = _step20.value;
          if (_tempDish4.Dishitem.DishCode == DishCode) {
            _tempDish4.Dishitem.DishCount = 1;
            break;
          }
        }} catch (err) {_iterator20.e(err);} finally {_iterator20.f();}
    },
    // 修改点单数量
    setDishCount: function setDishCount(e) {
      var DishCount = e.value;
      var DishCode = parseInt(e.name.slice(9));
      // 判断是否需要修改样式
      if (DishCount == 0) {var _iterator22 = _createForOfIteratorHelper(
        this.MenuData),_step22;try {for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {var Category = _step22.value;var _iterator23 = _createForOfIteratorHelper(
            Category.CategoryItem.Dish),_step23;try {for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {var tempDish = _step23.value;
                if (tempDish.Dishitem.DishCode == parseInt(DishCode)) {
                  tempDish.Dishitem.AddButtonShow = true;
                  break;
                }
              }} catch (err) {_iterator23.e(err);} finally {_iterator23.f();}
          }} catch (err) {_iterator22.e(err);} finally {_iterator22.f();}
      }
      // 更新MenuData
      var _iterator24 = _createForOfIteratorHelper(this.MenuData),_step24;try {for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {var temp = _step24.value;var _iterator26 = _createForOfIteratorHelper(
          temp.CategoryItem.Dish),_step26;try {for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {var _tempDish5 = _step26.value;
              if (_tempDish5.Dishitem.DishCode == DishCode) {
                _tempDish5.Dishitem.DishCount = DishCount;
                break;
              }
            }} catch (err) {_iterator26.e(err);} finally {_iterator26.f();}
        }
        // 更新Dishes
      } catch (err) {_iterator24.e(err);} finally {_iterator24.f();}var _iterator25 = _createForOfIteratorHelper(this.Dishes),_step25;try {for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {var _tempDish6 = _step25.value;
          if (_tempDish6.Dishitem.DishCode == DishCode) {
            _tempDish6.Dishitem.DishCount = DishCount;
            break;
          }
        }} catch (err) {_iterator25.e(err);} finally {_iterator25.f();}

    },
    Order: function Order() {var _this2 = this;
      var foodList = [];
      var url = _api.insertOrder;
      this.ShoppingCartClose();var _iterator27 = _createForOfIteratorHelper(
      this.Dishes),_step27;try {for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {var dish = _step27.value;
          if (dish.Dishitem.DishCount != 0) {
            foodList.push({
              "foodId": dish.Dishitem.DishCode,
              "orderFoodNum": dish.Dishitem.DishCount });

          }
        }} catch (err) {_iterator27.e(err);} finally {_iterator27.f();}
      var customerid = _store.default.getters.getCustomerCode;

      var orderData = {
        "orderDesc": this.OrderDesc,
        "customerId": customerid,
        "dinTableId": this.TableCode,
        "orderFoodList": foodList };

      (0, _requests.postMethod)(url, orderData).
      then(function (res) {
        console.log(res);
        _this2.OrderCode = res[1].data.orderId;
        _store.default.getters.setOrderCode(_this2.OrderCode);
        _this2.SecondOrder = true;
      }).
      catch(function (err) {
        console.log(err);
      });
      // store.getters.setOrderCode(this.OrderCode)
      // console.log(store.getters.getOrderCode)
      _msgAlert.AlertMsg.MsgShow("已下单");
      // wx.navigateTo({url:"../index/index"})
    },
    UpdateOrder: function UpdateOrder() {
      var foodList = [];
      var orderId = _store.default.getters.getOrderCode;
      var customerid = _store.default.getters.getCustomerCode;
      this.ShoppingCartClose();var _iterator28 = _createForOfIteratorHelper(
      this.Dishes),_step28;try {for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {var dish = _step28.value;
          if (dish.Dishitem.DishCount != 0) {
            foodList.push({
              "orderId": orderId,
              "foodId": dish.Dishitem.DishCode,
              "orderFoodNum": dish.Dishitem.DishCount });

          }
        }} catch (err) {_iterator28.e(err);} finally {_iterator28.f();}
      var orderData = {
        "orderDesc": this.OrderDesc,
        "orderId": orderId,
        "customerId": customerid,
        "dinTableId": this.TableCode,
        "orderFoodList": foodList };

      console.log(orderData);
      (0, _requests.postMethod)(_api.updateOrder, orderData).
      then(function (res) {
        console.log(res);
        _msgAlert.AlertMsg.MsgShow("订单已更新");
      }).
      catch(function (err) {
        console.log(err);
      });
    },
    JumpToMy: function JumpToMy() {
      wx.navigateTo({
        url: '../my/my' });

    },
    JumpToComments: function JumpToComments() {
      wx.navigateTo({
        url: '../comments/comments' });

    },
    getNoticeData: function getNoticeData() {var _this3 = this;
      var url = getNotice;
      (0, _requests.getMethod)(url).
      then(function (res) {
        _this3.Notice = res[1].data.data;
      }).
      catch(function (err) {
        var errs = "网络错误";
        console.log(err);
        _msgAlert.AlertMsg.MsgShow(errs);
      });
    },
    Bill: function Bill() {var _this4 = this;
      // orderid
      // orderState=4
      var orderId = _store.default.getters.getOrderCode;
      var customerId = _store.default.getters.getCustomerCode;
      var that = this;
      if (orderId == 0) {
        _msgAlert.AlertMsg.MsgShow("您尚未下单");
      } else {
        var Data = {
          "orderId": orderId,
          "customerId": customerId,
          "orderState": 4,
          "orderPayMethod": parseInt(Math.random() * 3) };

        (0, _requests.postMethod)(_api.updateOrder, Data).
        then(function (res) {
          console.log(res);
          if (res[1].data.code == 200) {
            if (res[1].data.data === null) {
              _msgAlert.AlertMsg.MsgShow("账单金额以实际支付为准");
            } else {
              _this4.PayAmount = res[1].data.data;
            }
            // 判断返回值
            _this4.WriteBoxShow = true;
            _msgAlert.AlertMsg.MsgShow("订单已完成");
            _this4.SecondOrder = false;
          } else {
            console.log(res);
          }
        }).
        catch(function (err) {
          console.log(err);
        });
      }
    },
    WriteBoxClose: function WriteBoxClose() {
      this.WriteBoxShow = false;
    },
    WriteBoxOpen: function WriteBoxOpen() {
      this.WriteBoxShow = true;
    },
    InsertComment: function InsertComment() {
      var orderId = _store.default.getters.getOrderCode;
      var customerId = _store.default.getters.getCustomerCode;
      var data = {
        "orderId": orderId,
        "customerId": customerId,
        "orderEvaluation": this.rate.toFixed(1) + "/" + this.comment };

      (0, _requests.postMethod)(_api.updateOrder, data).
      then(function (res) {
        console.log(res);
        wx.navigateTo({
          url: "../index/index" });

      });
    } },

  computed: {},

  onLaunch: function onLaunch() {
  },
  mounted: function mounted() {
  },
  watch: {} };exports.default = _default;

/***/ }),

/***/ 156:
/*!*********************************************************************************************************!*\
  !*** D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=style&index=0&id=127632e4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX.3.4.17.20220614-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=style&index=0&id=127632e4&scoped=true&lang=css& */ 157);
/* harmony import */ var _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_17_20220614_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_id_127632e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/wxapp/pages/order/order.vue?vue&type=style&index=0&id=127632e4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[150,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order.js.map