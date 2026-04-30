"use strict";
(globalThis["webpackChunkenable_list_icons"] = globalThis["webpackChunkenable_list_icons"] || []).push([["src_icons_ts"],{

/***/ "./src/icons.ts"
/*!**********************!*\
  !*** ./src/icons.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICON_SET_MUI: () => (/* binding */ ICON_SET_MUI),
/* harmony export */   ICON_SET_WORDPRESS: () => (/* binding */ ICON_SET_WORDPRESS),
/* harmony export */   loadIcons: () => (/* binding */ loadIcons)
/* harmony export */ });
/* harmony import */ var _10up_block_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @10up/block-components */ "./node_modules/@10up/block-components/dist/index.js");
/* harmony import */ var _10up_block_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_10up_block_components__WEBPACK_IMPORTED_MODULE_0__);

const ICON_SET_WORDPRESS = 'wordpress';
const ICON_SET_MUI = 'mui';
let registered = false;
async function loadIcons() {
  if (registered) return;
  registered = true;
  const [{
    wordpressIcons
  }, {
    muiIcons
  }] = await Promise.all([__webpack_require__.e(/*! import() */ "src_icons_wordpress_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons/wordpress */ "./src/icons/wordpress.ts")), __webpack_require__.e(/*! import() */ "src_icons_mui_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons/mui */ "./src/icons/mui.ts"))]);
  (0,_10up_block_components__WEBPACK_IMPORTED_MODULE_0__.registerIcons)({
    name: ICON_SET_WORDPRESS,
    label: 'WordPress Icons',
    icons: wordpressIcons
  });
  (0,_10up_block_components__WEBPACK_IMPORTED_MODULE_0__.registerIcons)({
    name: ICON_SET_MUI,
    label: 'MUI Icons',
    icons: muiIcons
  });
}

/***/ }

}]);
//# sourceMappingURL=src_icons_ts.js.map