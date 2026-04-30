"use strict";
(globalThis["webpackChunkenable_list_icons"] = globalThis["webpackChunkenable_list_icons"] || []).push([["src_components_IconPickerControl_tsx"],{

/***/ "./src/components/IconPickerControl.tsx"
/*!**********************************************!*\
  !*** ./src/components/IconPickerControl.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPickerControl: () => (/* binding */ IconPickerControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _10up_block_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @10up/block-components */ "./node_modules/@10up/block-components/dist/index.js");
/* harmony import */ var _10up_block_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_10up_block_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./src/icons.ts");






const ICON_SET_CUSTOM = 'custom';
const handleIconChoose = (iconValue, onChange, selectedLibrary) => {
  var _icon$name, _icon$label, _ref, _icon$src;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = iconValue;
  onChange({
    name: (_icon$name = icon?.name) !== null && _icon$name !== void 0 ? _icon$name : '',
    iconSet: selectedLibrary,
    label: (_icon$label = icon?.label) !== null && _icon$label !== void 0 ? _icon$label : '',
    src: (_ref = (_icon$src = icon?.src) !== null && _icon$src !== void 0 ? _icon$src : icon?.source) !== null && _ref !== void 0 ? _ref : ''
  });
};
const IconPickerControl = ({
  icon,
  onChange
}) => {
  var _ref2, _icon$src2;
  const [selectedLibrary, setSelectedLibrary] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)((_ref2 = icon?.iconSet) !== null && _ref2 !== void 0 ? _ref2 : _icons__WEBPACK_IMPORTED_MODULE_5__.ICON_SET_WORDPRESS);
  const [iconsReady, setIconsReady] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_icons__WEBPACK_IMPORTED_MODULE_5__.loadIcons)().then(() => setIconsReady(true));
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon library', 'enable-list-icons'),
    value: selectedLibrary,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('WordPress', 'enable-list-icons'),
      value: _icons__WEBPACK_IMPORTED_MODULE_5__.ICON_SET_WORDPRESS
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('MUI', 'enable-list-icons'),
      value: _icons__WEBPACK_IMPORTED_MODULE_5__.ICON_SET_MUI
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'enable-list-icons'),
      value: ICON_SET_CUSTOM
    }],
    onChange: setSelectedLibrary
  }), ICON_SET_CUSTOM === selectedLibrary ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom SVG', 'enable-list-icons'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Paste the full SVG markup to use as the list icon.', 'enable-list-icons'),
    value: icon?.iconSet === ICON_SET_CUSTOM ? (_icon$src2 = icon.src) !== null && _icon$src2 !== void 0 ? _icon$src2 : '' : '',
    onChange: value => onChange({
      name: ICON_SET_CUSTOM,
      iconSet: ICON_SET_CUSTOM,
      label: ICON_SET_CUSTOM,
      src: value
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, iconsReady ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_10up_block_components__WEBPACK_IMPORTED_MODULE_4__.IconPicker
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  , {
    value: icon?.iconSet === selectedLibrary ? icon : undefined,
    onChange: value => handleIconChoose(value, onChange, selectedLibrary)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    iconSet: selectedLibrary
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
};

/***/ },

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
//# sourceMappingURL=src_components_IconPickerControl_tsx.js.map