/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.tsx"
/*!****************************!*\
  !*** ./src/attributes.tsx ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListIconAttributes: () => (/* binding */ addListIconAttributes)
/* harmony export */ });
const addListIconAttributes = (settings, name) => {
  if ('core/list' !== name) {
    return settings;
  }
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      icon: {
        type: 'object'
      },
      iconSize: {
        type: 'string',
        default: ''
      },
      iconGap: {
        type: 'string',
        default: ''
      },
      iconOutside: {
        type: 'boolean',
        default: true
      },
      iconVerticalOffset: {
        type: 'string',
        default: ''
      },
      iconColor: {
        type: 'string',
        default: ''
      }
    }
  };
};

/***/ },

/***/ "./src/blockList.tsx"
/*!***************************!*\
  !*** ./src/blockList.tsx ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockList: () => (/* binding */ BlockList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);


const BlockList = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    const {
      name,
      attributes
    } = props;
    if ('core/list' !== name || !attributes?.icon?.name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
        ...props
      });
    }
    const {
      icon,
      iconSize,
      iconGap,
      iconOutside,
      iconVerticalOffset,
      iconColor
    } = attributes;
    if (!icon?.src?.length) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
        ...props
      });
    }
    const className = [props?.className, `has-icon__${icon.name}`, iconOutside ? 'has-icon-placement__outside' : 'has-icon-placement__inside'].filter(Boolean).join(' ');
    const wrapperProps = {
      ...props?.wrapperProps,
      ...((icon.src || iconSize || iconGap || iconVerticalOffset || iconColor) && {
        style: {
          ...props?.wrapperProps?.style,
          ...(icon.src && {
            '--list-icon': `url("data:image/svg+xml,${encodeURIComponent(icon.src)}")`
          }),
          ...(iconSize && {
            '--wp-block-list--icon-size': iconSize
          }),
          ...(iconGap && {
            '--wp-block-list--icon-gap': iconGap
          }),
          ...(iconVerticalOffset && {
            '--wp-block-list--icon-vertical-offset': iconVerticalOffset
          }),
          ...(iconColor && {
            '--wp-block-list--icon-color': iconColor
          })
        }
      })
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
      ...props,
      className: className,
      wrapperProps: wrapperProps
    });
  };
}, 'BlockList');

/***/ },

/***/ "./src/components/IconGapControl.tsx"
/*!*******************************************!*\
  !*** ./src/components/IconGapControl.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconGapControl: () => (/* binding */ IconGapControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const ICON_GAP_UNITS = [{
  value: 'px',
  label: 'px'
}, {
  value: 'em',
  label: 'em'
}, {
  value: 'rem',
  label: 'rem'
}, {
  value: 'vw',
  label: 'vw'
}, {
  value: 'vh',
  label: 'vh'
}];
const ICON_GAP_RANGE_SETTINGS = {
  px: {
    min: 0,
    max: 64,
    step: 1,
    default: 8
  },
  em: {
    min: 0,
    max: 4,
    step: 0.05,
    default: 0.6
  },
  rem: {
    min: 0,
    max: 4,
    step: 0.05,
    default: 0.6
  },
  vw: {
    min: 0,
    max: 10,
    step: 0.1,
    default: 1
  },
  vh: {
    min: 0,
    max: 10,
    step: 0.1,
    default: 1
  }
};
const IconGapControl = ({
  value,
  onChange
}) => {
  var _ref;
  const [parsedValue, parsedUnit] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(value || '0.6em', ICON_GAP_UNITS);
  const iconGapUnit = (_ref = parsedUnit) !== null && _ref !== void 0 ? _ref : 'em';
  const iconGapRange = ICON_GAP_RANGE_SETTINGS[iconGapUnit];
  const sliderValue = typeof parsedValue === 'number' ? parsedValue : iconGapRange.default;
  const handleUnitControlChange = nextValue => {
    onChange(nextValue !== null && nextValue !== void 0 ? nextValue : '');
  };
  const handleSliderChange = nextValue => {
    const quantity = typeof nextValue === 'number' ? nextValue : iconGapRange.default;
    onChange(`${quantity}${iconGapUnit}`);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "enable-list-icons-control-wrapper unit-range-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon gap', 'enable-list-icons')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "unit-range-wrapper__controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon gap', 'enable-list-icons'),
    value: value,
    onChange: handleUnitControlChange,
    units: ICON_GAP_UNITS,
    __next40pxDefaultSize: true,
    hideLabelFromVision: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon gap', 'enable-list-icons'),
    value: sliderValue,
    onChange: handleSliderChange,
    min: iconGapRange.min,
    max: iconGapRange.max,
    step: iconGapRange.step,
    withInputField: false,
    hideLabelFromVision: true,
    __next40pxDefaultSize: true
  })));
};

/***/ },

/***/ "./src/components/IconPlacementControl.tsx"
/*!*************************************************!*\
  !*** ./src/components/IconPlacementControl.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPlacementControl: () => (/* binding */ IconPlacementControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const IconPlacementControl = ({
  isOutside,
  onChange
}) => {
  const handleChange = value => {
    if (undefined === value) {
      return;
    }
    onChange('outside' === String(value));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "enable-list-icons-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon placement', 'enable-list-icons'),
    value: isOutside ? 'outside' : 'inside',
    onChange: handleChange,
    isBlock: true,
    className: "enable-list-icons-toggle-group-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "inside",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inside', 'enable-list-icons'),
    className: !isOutside ? 'is-selected' : ''
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "outside",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outside', 'enable-list-icons'),
    className: isOutside ? 'is-selected' : ''
  })));
};

/***/ },

/***/ "./src/components/IconSizeControl.tsx"
/*!********************************************!*\
  !*** ./src/components/IconSizeControl.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconSizeControl: () => (/* binding */ IconSizeControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const ICON_SIZE_UNITS = [{
  value: 'px',
  label: 'px'
}, {
  value: 'em',
  label: 'em'
}, {
  value: 'rem',
  label: 'rem'
}, {
  value: 'vw',
  label: 'vw'
}, {
  value: 'vh',
  label: 'vh'
}];
const ICON_SIZE_RANGE_SETTINGS = {
  px: {
    min: 0,
    max: 200,
    step: 1,
    default: 24
  },
  em: {
    min: 0,
    max: 10,
    step: 0.1,
    default: 1
  },
  rem: {
    min: 0,
    max: 10,
    step: 0.1,
    default: 1
  },
  vw: {
    min: 0,
    max: 100,
    step: 0.1,
    default: 5
  },
  vh: {
    min: 0,
    max: 100,
    step: 0.1,
    default: 5
  }
};
const IconSizeControl = ({
  value,
  onChange
}) => {
  var _ref;
  const [parsedValue, parsedUnit] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(value || '1em', ICON_SIZE_UNITS);
  const iconSizeUnit = (_ref = parsedUnit) !== null && _ref !== void 0 ? _ref : 'em';
  const iconSizeRange = ICON_SIZE_RANGE_SETTINGS[iconSizeUnit];
  const sliderValue = typeof parsedValue === 'number' ? parsedValue : iconSizeRange.default;
  const handleUnitControlChange = nextValue => {
    onChange(nextValue !== null && nextValue !== void 0 ? nextValue : '');
  };
  const handleSliderChange = nextValue => {
    const quantity = typeof nextValue === 'number' ? nextValue : iconSizeRange.default;
    onChange(`${quantity}${iconSizeUnit}`);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "enable-list-icons-control-wrapper unit-range-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon size', 'enable-list-icons')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "unit-range-wrapper__controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon size', 'enable-list-icons'),
    value: value,
    onChange: handleUnitControlChange,
    units: ICON_SIZE_UNITS,
    __next40pxDefaultSize: true,
    hideLabelFromVision: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon size', 'enable-list-icons'),
    value: sliderValue,
    onChange: handleSliderChange,
    min: iconSizeRange.min,
    max: iconSizeRange.max,
    step: iconSizeRange.step,
    withInputField: false,
    hideLabelFromVision: true,
    __next40pxDefaultSize: true
  })));
};

/***/ },

/***/ "./src/components/IconVerticalOffsetControl.tsx"
/*!******************************************************!*\
  !*** ./src/components/IconVerticalOffsetControl.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconVerticalOffsetControl: () => (/* binding */ IconVerticalOffsetControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const ICON_OFFSET_UNITS = [{
  value: 'px',
  label: 'px'
}, {
  value: 'em',
  label: 'em'
}, {
  value: 'rem',
  label: 'rem'
}, {
  value: 'vw',
  label: 'vw'
}, {
  value: 'vh',
  label: 'vh'
}];
const ICON_OFFSET_RANGE_SETTINGS = {
  px: {
    min: -32,
    max: 32,
    step: 1,
    default: 0
  },
  em: {
    min: -2,
    max: 2,
    step: 0.05,
    default: 0
  },
  rem: {
    min: -2,
    max: 2,
    step: 0.05,
    default: 0
  },
  vw: {
    min: -5,
    max: 5,
    step: 0.1,
    default: 0
  },
  vh: {
    min: -5,
    max: 5,
    step: 0.1,
    default: 0
  }
};
const IconVerticalOffsetControl = ({
  value,
  onChange
}) => {
  var _ref;
  const [parsedValue, parsedUnit] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(value || '0px', ICON_OFFSET_UNITS);
  const iconOffsetUnit = (_ref = parsedUnit) !== null && _ref !== void 0 ? _ref : 'px';
  const iconOffsetRange = ICON_OFFSET_RANGE_SETTINGS[iconOffsetUnit];
  const sliderValue = typeof parsedValue === 'number' ? parsedValue : iconOffsetRange.default;
  const handleUnitControlChange = nextValue => {
    onChange(nextValue !== null && nextValue !== void 0 ? nextValue : '');
  };
  const handleSliderChange = nextValue => {
    const quantity = typeof nextValue === 'number' ? nextValue : iconOffsetRange.default;
    onChange(`${quantity}${iconOffsetUnit}`);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "enable-list-icons-control-wrapper unit-range-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical offset', 'enable-list-icons')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "unit-range-wrapper__controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical offset', 'enable-list-icons'),
    value: value,
    onChange: handleUnitControlChange,
    units: ICON_OFFSET_UNITS,
    __next40pxDefaultSize: true,
    hideLabelFromVision: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical offset', 'enable-list-icons'),
    value: sliderValue,
    onChange: handleSliderChange,
    min: iconOffsetRange.min,
    max: iconOffsetRange.max,
    step: iconOffsetRange.step,
    withInputField: false,
    hideLabelFromVision: true,
    __next40pxDefaultSize: true
  })));
};

/***/ },

/***/ "./src/edit.tsx"
/*!**********************!*\
  !*** ./src/edit.tsx ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_IconGapControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/IconGapControl */ "./src/components/IconGapControl.tsx");
/* harmony import */ var _components_IconPlacementControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/IconPlacementControl */ "./src/components/IconPlacementControl.tsx");
/* harmony import */ var _components_IconSizeControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/IconSizeControl */ "./src/components/IconSizeControl.tsx");
/* harmony import */ var _components_IconVerticalOffsetControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/IconVerticalOffsetControl */ "./src/components/IconVerticalOffsetControl.tsx");










const EMPTY_ICON = {
  name: null,
  iconSet: null,
  label: null,
  src: null
};
const IconPickerControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_10up_block-components_dist_index_js"), __webpack_require__.e("src_components_IconPickerControl_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/IconPickerControl */ "./src/components/IconPickerControl.tsx")).then(m => ({
  default: m.IconPickerControl
})));
const Edit = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    if ('core/list' !== name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_10up_block-components_dist_index_js"), __webpack_require__.e("src_icons_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./icons */ "./src/icons.ts")).then(({
        loadIcons
      }) => loadIcons());
    }, []);
    const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
    const {
      icon,
      iconSize,
      iconGap,
      iconOutside,
      iconVerticalOffset,
      iconColor
    } = attributes;
    const handleIconChange = nextIcon => {
      const isSelectedIcon = icon?.name === nextIcon?.name && icon?.iconSet === nextIcon?.iconSet && icon?.label === nextIcon?.label && icon?.src === nextIcon?.src;
      setAttributes({
        icon: isSelectedIcon ? EMPTY_ICON : nextIcon
      });
    };
    const handleIconSizeChange = value => {
      setAttributes({
        iconSize: value
      });
    };
    const handleIconGapChange = value => {
      setAttributes({
        iconGap: value
      });
    };
    const handleIconPlacementChange = isOutside => {
      setAttributes({
        iconOutside: isOutside
      });
    };
    const handleIconVerticalOffsetChange = value => {
      setAttributes({
        iconVerticalOffset: value
      });
    };
    const handleIconColorChange = value => {
      setAttributes({
        iconColor: value !== null && value !== void 0 ? value : ''
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon', 'enable-list-icons'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
      fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconPickerControl, {
      icon: icon,
      onChange: handleIconChange
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon Styles', 'enable-list-icons'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconPlacementControl__WEBPACK_IMPORTED_MODULE_7__.IconPlacementControl, {
      isOutside: iconOutside,
      onChange: handleIconPlacementChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconSizeControl__WEBPACK_IMPORTED_MODULE_8__.IconSizeControl, {
      value: iconSize,
      onChange: handleIconSizeChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconGapControl__WEBPACK_IMPORTED_MODULE_6__.IconGapControl, {
      value: iconGap,
      onChange: handleIconGapChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconVerticalOffsetControl__WEBPACK_IMPORTED_MODULE_9__.IconVerticalOffsetControl, {
      value: iconVerticalOffset,
      onChange: handleIconVerticalOffsetChange
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "color"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientSettingsDropdown, {
      settings: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon', 'enable-list-icons'),
        colorValue: iconColor,
        onColorChange: handleIconColorChange
      }],
      panelId: props.clientId,
      hasColorsOrGradients: false,
      disableCustomColors: false,
      __experimentalIsRenderedInSidebar: true,
      ...colorGradientSettings
    })));
  };
}, 'Edit');

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/core-data"
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["coreData"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/date"
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["date"];

/***/ },

/***/ "@wordpress/deprecated"
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["deprecated"];

/***/ },

/***/ "@wordpress/dom"
/*!*****************************!*\
  !*** external ["wp","dom"] ***!
  \*****************************/
(module) {

module.exports = window["wp"]["dom"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["domReady"];

/***/ },

/***/ "@wordpress/editor"
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["editor"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/html-entities"
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
(module) {

module.exports = window["wp"]["htmlEntities"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "@wordpress/rich-text"
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["richText"];

/***/ },

/***/ "@wordpress/url"
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
(module) {

module.exports = window["wp"]["url"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "enable-list-icons:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkenable_list_icons"] = globalThis["webpackChunkenable_list_icons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.tsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.tsx");
/* harmony import */ var _blockList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockList */ "./src/blockList.tsx");




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'enable-list-icons/add-attributes', _attributes__WEBPACK_IMPORTED_MODULE_1__.addListIconAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'enable-list-icons/add-inspector-controls', _edit__WEBPACK_IMPORTED_MODULE_2__.Edit);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockListBlock', 'enable-list-icons/add-classes', _blockList__WEBPACK_IMPORTED_MODULE_3__.BlockList);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map