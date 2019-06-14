this["eejs"] = this["eejs"] || {}; this["eejs"]["editor"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/editor/editor.css":
/*!**************************************!*\
  !*** ./assets/src/editor/editor.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-div":"ee-editor-div","components-panel":"components-panel","espresso-editor-legend-div":"espresso-editor-legend-div","espresso-editor-legend-ul":"espresso-editor-legend-ul","espresso-editor":"espresso-editor","ee-form-row":"ee-form-row","components-panel__body":"components-panel__body","ee-editor-event-dates-and-tickets":"ee-editor-event-dates-and-tickets","ee-metabox-heading":"ee-metabox-heading","dashicon":"dashicon","components-modal__frame":"components-modal__frame","components-modal__content":"components-modal__content","components-modal__header-heading":"components-modal__header-heading","components-panel__body-title":"components-panel__body-title","rdtOpen":"rdtOpen","rdtPicker":"rdtPicker","rdtNext":"rdtNext","rdtPrev":"rdtPrev","rdtSwitch":"rdtSwitch","dow":"dow","rdtNew":"rdtNew","rdtOld":"rdtOld","rdtActive":"rdtActive","rdtToday":"rdtToday","time_picker_container":"time_picker_container","modal_container":"modal_container","pl-3":"pl-3","px-3":"px-3","pr-3":"pr-3"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-tickets-metabox/dates-and-tickets-metabox.js":
/*!*****************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-tickets-metabox/dates-and-tickets-metabox.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../editor.css */ "./assets/src/editor/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dates_and_times_editor_date_editor_date_entities_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dates-and-times/editor-date/editor-date-entities-list */ "./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js");
/* harmony import */ var _tickets_editor_ticket_editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tickets/editor-ticket/editor-ticket-entities-list */ "./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js");
/* harmony import */ var _with_event_date_and_ticket_entity_filter_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./with-event-date-and-ticket-entity-filter-state */ "./assets/src/editor/events/dates-and-tickets-metabox/with-event-date-and-ticket-entity-filter-state.js");




/**
 * External dependencies
 */





/**
 * Internal imports
 */






var MetaBox = function MetaBox(_ref) {
  var eventId = _ref.eventId,
      eventEntityLoaded = _ref.eventEntityLoaded,
      dateEntitiesLoaded = _ref.dateEntitiesLoaded,
      filteredDateEntities = _ref.filteredDateEntities,
      allDateEntities = _ref.allDateEntities,
      filteredTicketEntities = _ref.filteredTicketEntities,
      allTicketEntities = _ref.allTicketEntities,
      ticketEntitiesLoaded = _ref.ticketEntitiesLoaded,
      isChained = _ref.isChained,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["eventId", "eventEntityLoaded", "dateEntitiesLoaded", "filteredDateEntities", "allDateEntities", "filteredTicketEntities", "allTicketEntities", "ticketEntitiesLoaded", "isChained"]);

  return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_6__["FormPlaceholder"], {
    loading: !eventEntityLoaded,
    notice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["_x"])('loading event dates and available tickets%s', 'loading event dates and available tickets...', 'event_espresso'), String.fromCharCode(8230))
  }), React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_6__["FormContainer"], {
    loading: !eventEntityLoaded,
    id: "ee-editor-event-dates-and-tickets-".concat(eventId),
    htmlClass: "ee-editor-event-dates-and-tickets"
  }, React.createElement("h1", {
    className: "ee-metabox-heading"
  }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_6__["EspressoIcon"], {
    icon: "calendar"
  }), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Event Dates', 'event_espresso')), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    id: "ee-editor-event-dates-".concat(eventId),
    className: "ee-editor-event-dates espresso-editor"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], {
    className: "ee-editor-event-dates ee-form-row"
  }, React.createElement("div", null, React.createElement(_dates_and_times_editor_date_editor_date_entities_list__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    loading: !dateEntitiesLoaded,
    entities: filteredDateEntities,
    allDateEntities: allDateEntities,
    allTicketEntities: allTicketEntities,
    prefiltered: true,
    for: "event-dates-metabox"
  }, otherProps)))))), React.createElement("br", null), React.createElement("h1", {
    className: "ee-metabox-heading"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
    icon: "tickets-alt"
  }), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Available Tickets', 'event_espresso')), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    id: "ee-editor-event-tickets-".concat(eventId),
    className: "ee-editor-event-tickets espresso-editor"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], {
    className: "ee-editor-event-tickets ee-form-row"
  }, React.createElement("div", null, React.createElement(_tickets_editor_ticket_editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    loading: !ticketEntitiesLoaded,
    entities: filteredTicketEntities,
    allDateEntities: allDateEntities,
    isChained: isChained,
    prefiltered: true,
    for: "event-tickets-metabox"
  }, otherProps)))))), React.createElement("br", null)));
};

var DatesAndTicketsMetabox = Object(_with_event_date_and_ticket_entity_filter_state__WEBPACK_IMPORTED_MODULE_10__["default"])(MetaBox);
DatesAndTicketsMetabox.propTypes = {
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DatesAndTicketsMetabox);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-tickets-metabox/index.js":
/*!*********************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-tickets-metabox/index.js ***!
  \*********************************************************************/
/*! exports provided: EventDatesAndTicketsMetabox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dates_and_tickets_metabox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates-and-tickets-metabox */ "./assets/src/editor/events/dates-and-tickets-metabox/dates-and-tickets-metabox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDatesAndTicketsMetabox", function() { return _dates_and_tickets_metabox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/dates-and-tickets-metabox/with-event-date-and-ticket-entity-filter-state.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-tickets-metabox/with-event-date-and-ticket-entity-filter-state.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../editor.css */ "./assets/src/editor/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dates_and_times_editor_date_filter_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dates-and-times/editor-date/filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js");
/* harmony import */ var _tickets_editor_ticket_filter_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tickets/editor-ticket/filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js");
/* harmony import */ var _events_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/data */ "./assets/src/editor/events/events/data/index.js");
/* harmony import */ var _dates_and_times_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dates-and-times/data */ "./assets/src/editor/events/dates-and-times/data/index.js");
/* harmony import */ var _with_ticket_entities_for_filtered_date_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./with-ticket-entities-for-filtered-date-entities */ "./assets/src/editor/events/dates-and-tickets-metabox/with-ticket-entities-for-filtered-date-entities.js");
/**
 * External dependencies
 */


/**
 * Internal imports
 */







var withEventDateAndTicketEntityFilterState = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_events_data__WEBPACK_IMPORTED_MODULE_5__["withEventEntity"], _events_data__WEBPACK_IMPORTED_MODULE_5__["withEventDateEntities"], _dates_and_times_data__WEBPACK_IMPORTED_MODULE_6__["withTicketEntitiesForAllDateEntities"], _dates_and_times_editor_date_filter_bar__WEBPACK_IMPORTED_MODULE_3__["withDatesListFilterState"], _tickets_editor_ticket_filter_bar__WEBPACK_IMPORTED_MODULE_4__["withTicketEntitiesListFilterState"], _dates_and_times_editor_date_filter_bar__WEBPACK_IMPORTED_MODULE_3__["withFilteredDateEntities"], _with_ticket_entities_for_filtered_date_entities__WEBPACK_IMPORTED_MODULE_7__["default"], _tickets_editor_ticket_filter_bar__WEBPACK_IMPORTED_MODULE_4__["withFilteredTicketEntities"]]), 'withDatesAndTicketsFilterState');
withEventDateAndTicketEntityFilterState.propTypes = {
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (withEventDateAndTicketEntityFilterState);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-tickets-metabox/with-ticket-entities-for-filtered-date-entities.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-tickets-metabox/with-ticket-entities-for-filtered-date-entities.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dates_and_times_data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dates-and-times/data/utils */ "./assets/src/editor/events/dates-and-times/data/utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var DEFAULT_EMPTY_ARRAY = [];
var withTicketEntitiesForFilteredDateEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, _ref) {
  var _ref$filteredDateEnti = _ref.filteredDateEntities,
      filteredDateEntities = _ref$filteredDateEnti === void 0 ? DEFAULT_EMPTY_ARRAY : _ref$filteredDateEnti,
      _ref$ticketEntities = _ref.ticketEntities,
      ticketEntities = _ref$ticketEntities === void 0 ? DEFAULT_EMPTY_ARRAY : _ref$ticketEntities;
  var dateIds = Object(_dates_and_times_data_utils__WEBPACK_IMPORTED_MODULE_2__["getDateEntityIds"])(filteredDateEntities);

  var _select = select('eventespresso/core'),
      getRelationIdsForEntityRelation = _select.getRelationIdsForEntityRelation;

  var filteredTicketEntities = ticketEntities.filter(function (ticketEntity) {
    var relatedDateEntities = getRelationIdsForEntityRelation(ticketEntity, 'datetime');
    return relatedDateEntities.length > 0 && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["intersection"])(relatedDateEntities, dateIds).length > 0;
  });
  return {
    filteredTicketEntities: filteredTicketEntities
  };
}), 'withTicketEntitiesForFilteredDateEntities');
/* harmony default export */ __webpack_exports__["default"] = (withTicketEntitiesForFilteredDateEntities);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/data/index.js":
/*!****************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/data/index.js ***!
  \****************************************************************/
/*! exports provided: withDateTicketEntities, withTicketEntitiesForAllDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_date_ticket_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-date-ticket-entities */ "./assets/src/editor/events/dates-and-times/data/with-date-ticket-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateTicketEntities", function() { return _with_date_ticket_entities__WEBPACK_IMPORTED_MODULE_0__["withDateTicketEntities"]; });

/* harmony import */ var _with_ticket_entities_for_all_date_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-ticket-entities-for-all-date-entities */ "./assets/src/editor/events/dates-and-times/data/with-ticket-entities-for-all-date-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesForAllDateEntities", function() { return _with_ticket_entities_for_all_date_entities__WEBPACK_IMPORTED_MODULE_1__["withTicketEntitiesForAllDateEntities"]; });




/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/data/utils.js":
/*!****************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/data/utils.js ***!
  \****************************************************************/
/*! exports provided: condenseArray, getDateEntityIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "condenseArray", function() { return condenseArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateEntityIds", function() { return getDateEntityIds; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


/**
 * @function
 * @param {mixed} element
 * @return {boolean} true if value is undefined
 */

var removeUndefined = function removeUndefined(element) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(element);
};
/**
 * @function
 * @param {Array} a
 * @return {Array} new array with undefined and duplicate elements removed
 */


var condenseArray = function condenseArray(a) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(a.filter(removeUndefined));
};
/**
 * @function
 * @param {Array} dateEntities
 * @return {Array} array of IDs for supplied date entities
 */

var getDateEntityIds = function getDateEntityIds(dateEntities) {
  var dateEntityIds = [];

  if (Array.isArray(dateEntities)) {
    dateEntities.forEach(function (dateEntity) {
      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
        dateEntityIds.push(dateEntity.id);
      }
    });
  }

  return condenseArray(dateEntityIds);
};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/data/with-date-ticket-entities.js":
/*!************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/data/with-date-ticket-entities.js ***!
  \************************************************************************************/
/*! exports provided: withDateTicketEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDateTicketEntities", function() { return withDateTicketEntities; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * A Hoc exposing ticket entities related to the provided DateTimeEntity.
 *
 * @return {function} A higher order component.
 */

var withDateTicketEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select, _ref) {
  var dateEntity = _ref.dateEntity;

  var _select = select('eventespresso/core'),
      getRelatedEntities = _select.getRelatedEntities;

  var _select2 = select('core/data'),
      hasFinishedResolution = _select2.hasFinishedResolution;

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
    var ticketEntities = getRelatedEntities(dateEntity, 'ticket');
    var ticketEntitiesLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntities', [dateEntity, 'ticket']);
    return {
      ticketEntities: ticketEntities,
      ticketEntitiesLoaded: ticketEntitiesLoaded
    };
  }

  return {};
}), 'withDateTicketEntities');

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/data/with-ticket-entities-for-all-date-entities.js":
/*!*****************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/data/with-ticket-entities-for-all-date-entities.js ***!
  \*****************************************************************************************************/
/*! exports provided: withTicketEntitiesForAllDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesForAllDateEntities", function() { return withTicketEntitiesForAllDateEntities; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./assets/src/editor/events/dates-and-times/data/utils.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * withTicketEntitiesRelatedToAllDateEntities
 * returns an object containing the following:
 * 	ticketEntities - an array of ticket entities for the supplied event date
 * 	ticketEntitiesLoaded - boolean true if loading is complete
 *
 * @return {function}
 */

var withTicketEntitiesForAllDateEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select, _ref) {
  var dateEntities = _ref.dateEntities,
      dateEntitiesLoaded = _ref.dateEntitiesLoaded;

  if (dateEntitiesLoaded) {
    var _select = select('eventespresso/core'),
        getRelatedEntitiesForIds = _select.getRelatedEntitiesForIds;

    var _select2 = select('core/data'),
        hasFinishedResolution = _select2.hasFinishedResolution;

    var dateIds = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDateEntityIds"])(dateEntities);
    var ticketEntities = getRelatedEntitiesForIds('datetime', dateIds, 'ticket');
    var ticketEntitiesLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntitiesForIds', ['datetime', dateIds, 'ticket']);

    if (ticketEntitiesLoaded) {
      return {
        ticketEntities: ticketEntities,
        ticketEntitiesLoaded: ticketEntitiesLoaded
      };
    }
  }

  return {};
}), 'withTicketEntitiesForAllDateEntities');

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/index.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/action-handlers/index.js ***!
  \***************************************************************************************/
/*! exports provided: withCopyDateEntity, withUpdateEventDateRelation, withTrashDateEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_copy_date_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-copy-date-entity */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-copy-date-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyDateEntity", function() { return _with_copy_date_entity__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-update-event-date-relation */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-update-event-date-relation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUpdateEventDateRelation", function() { return _with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _with_trash_date_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-trash-date-entity */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-trash-date-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashDateEntity", function() { return _with_trash_date_entity__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-copy-date-entity.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-copy-date-entity.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External imports
 */




var withCopyDateEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch, _ref) {
  var eventEntity = _ref.eventEntity,
      dateEntity = _ref.dateEntity,
      ticketEntities = _ref.ticketEntities;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
    return {
      copyDateEntity: function copyDateEntity() {
        return null;
      }
    };
  }

  var _dispatch = dispatch('eventespresso/core'),
      createEntity = _dispatch.createEntity,
      createRelations = _dispatch.createRelations;

  var copyDateEntity =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newDateEntity;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return createEntity('datetime', dateEntity.forClone);

            case 2:
              newDateEntity = _context.sent;

              if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(ticketEntities)) {
                createRelations('datetime', newDateEntity.id, 'ticket', ticketEntities);
              }

              createRelations('event', eventEntity.id, 'datetime', [newDateEntity]);
              return _context.abrupt("return", newDateEntity);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function copyDateEntity() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    copyDateEntity: copyDateEntity
  };
}), 'withCopyDateEntity');
/* harmony default export */ __webpack_exports__["default"] = (withCopyDateEntity);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-trash-date-entity.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-trash-date-entity.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External imports
 */





var withTrashDateEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withDispatch"])(function (dispatch, _ref) {
  var dateEntity = _ref.dateEntity;
  var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["dateTimeModel"].MODEL_NAME;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__["isModelEntityOfModel"])(dateEntity, DATETIME)) {
    return {
      trashDateEntity: function trashDateEntity() {
        return null;
      }
    };
  }

  var _dispatch = dispatch('eventespresso/core'),
      trashEntityById = _dispatch.trashEntityById;

  var trashDateEntity = function trashDateEntity() {
    // eslint-disable-next-line no-alert
    if (!window.confirm(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Are you sure you want to delete this date?', 'event_espresso'))) {
      return;
    }

    trashEntityById(DATETIME, dateEntity.id);
  };

  return {
    trashDateEntity: trashDateEntity
  };
}), 'withTrashDateEntity');
/* harmony default export */ __webpack_exports__["default"] = (withTrashDateEntity);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-update-event-date-relation.js":
/*!*****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-update-event-date-relation.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External imports
 */





var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].MODEL_NAME;
var EVENT = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["eventModel"].MODEL_NAME;
var withUpdateEventDateRelation = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  var updateEventDateRelation = function updateEventDateRelation(eventEntity, dateEntity) {
    if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(eventEntity, EVENT)) {
      throw new Error(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Unable to process the Event Date Entity form because an' + ' invalid Event Entity was supplied. ', 'event_espresso'));
    }

    if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(dateEntity, DATETIME)) {
      throw new Error(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Unable to process the Event Date Entity form because an' + ' invalid Date Entity was supplied. ', 'event_espresso'));
    }

    var _dispatch = dispatch('eventespresso/core'),
        createRelation = _dispatch.createRelation;

    createRelation(EVENT, eventEntity.id, DATETIME, dateEntity);
  };

  return {
    updateEventDateRelation: updateEventDateRelation
  };
}), 'withUpdateEventDateRelation');
/* harmony default export */ __webpack_exports__["default"] = (withUpdateEventDateRelation);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../data */ "./assets/src/editor/events/dates-and-times/data/index.js");
/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../edit-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js");
/* harmony import */ var _action_handlers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../action-handlers */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/index.js");
/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_20__);









/**
 * External imports
 */









/**
 * Internal dependencies
 */






var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_14__["dateTimeModel"].MODEL_NAME;
var DEFAULT_EMPTY_ARRAY = [];
/**
 * EditorDateEntityActionsMenu
 * menu of IconButtons for performing actions on the supplied Event Date
 *
 * @constructor
 * @param {BaseEntity} dateEntity Datetime entity instance
 * @return {Object} rendered menu
 */

var EditorDateEntityActionsMenu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditorDateEntityActionsMenu, _Component);

  function EditorDateEntityActionsMenu() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorDateEntityActionsMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorDateEntityActionsMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "mainDropDownMenu", function (dateEntity) {
      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["DropDownMenu"], {
        tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('event date main menu', 'event_espresso'),
        htmlClass: "editor-date-".concat(dateEntity.id),
        menuItems: [{
          title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('edit date', 'event_espresso'),
          icon: 'edit',
          onClick: _this.props.toggleEditor
        }, {
          title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('copy date', 'event_espresso'),
          icon: 'admin-page',
          onClick: _this.props.copyDateEntity
        }, {
          title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('trash date', 'event_espresso'),
          icon: 'trash',
          onClick: _this.props.trashDateEntity
        }]
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "editDateMenuItem", function (dateEntity) {
      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["IconMenuItem"], {
        index: 1,
        tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('edit date', 'event_espresso'),
        id: "edit-date-".concat(dateEntity.id),
        htmlClass: "edit-date",
        dashicon: "edit",
        onClick: _this.props.toggleEditor
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "viewTicketsMenuItem", function (dateEntity, ticketEntities, ticketEntitiesLoaded) {
      var tooltip = ticketEntitiesLoaded && Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(ticketEntities) ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('warning! no assigned tickets - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('assign tickets', 'event_espresso');
      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["IconMenuItem"], {
        index: 2,
        tooltip: tooltip,
        id: "view-tickets-date-".concat(dateEntity.id),
        htmlClass: "view-tickets-date",
        dashicon: "tickets-alt",
        onClick: _this.props.toggleTicketAssignments,
        itemCount: ticketEntitiesLoaded ? ticketEntities.length : null
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getSidebarMenuItems", function (dateEntity, ticketEntities, ticketEntitiesLoaded) {
      var sidebarMenuItems = [];
      sidebarMenuItems.push(_this.mainDropDownMenu(dateEntity));
      sidebarMenuItems.push(_this.editDateMenuItem(dateEntity));
      sidebarMenuItems.push(_this.viewTicketsMenuItem(dateEntity, ticketEntities, ticketEntitiesLoaded));
      return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__["applyFilters"])('FHEE__EditorDateEntityActionsMenu__SidebarMenuItems', sidebarMenuItems, dateEntity);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "sidebarMenu", function (dateEntity, ticketEntities, ticketEntitiesLoaded) {
      var sidebarMenuItems = _this.getSidebarMenuItems(dateEntity, ticketEntities, ticketEntitiesLoaded);

      return sidebarMenuItems.map(function (sidebarMenuItem, index) {
        return sidebarMenuItem && sidebarMenuItem.type && (sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["DropDownMenu"] || sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["EntityActionMenuItem"] || sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["IconMenuItem"]) ? React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          key: index
        }, sidebarMenuItem) : null;
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorDateEntityActionsMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          eventEntity = _this$props.eventEntity,
          dateEntity = _this$props.dateEntity,
          editorOpen = _this$props.editorOpen,
          toggleEditor = _this$props.toggleEditor,
          _this$props$ticketEnt = _this$props.ticketEntities,
          ticketEntities = _this$props$ticketEnt === void 0 ? DEFAULT_EMPTY_ARRAY : _this$props$ticketEnt,
          _this$props$ticketEnt2 = _this$props.ticketEntitiesLoaded,
          ticketEntitiesLoaded = _this$props$ticketEnt2 === void 0 ? false : _this$props$ticketEnt2;

      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_15__["isModelEntityOfModel"])(dateEntity, DATETIME)) {
        return null;
      }

      return dateEntity && dateEntity.id ? React.createElement("div", {
        id: "ee-editor-date-actions-menu-".concat(dateEntity.id),
        className: 'ee-editor-date-actions-menu'
      }, this.sidebarMenu(dateEntity, ticketEntities, ticketEntitiesLoaded), React.createElement(_edit_form__WEBPACK_IMPORTED_MODULE_17__["DateEntityFormModal"], {
        eventEntity: eventEntity,
        dateEntity: dateEntity,
        toggleEditor: toggleEditor,
        editorOpen: editorOpen
      })) : null;
    }
  }]);

  return EditorDateEntityActionsMenu;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])([_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__["withEditor"], _data__WEBPACK_IMPORTED_MODULE_16__["withDateTicketEntities"], Object(_ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_19__["withTicketAssignmentsManagerModal"])(function (_ref) {
  var dateEntity = _ref.dateEntity;
  return {
    title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_12__["_x"])('Ticket Assignments for: %1$s', 'Ticket Assignments for: Date & date name', 'event_espresso'), "".concat(dateEntity.name, " (").concat(dateEntity.start.toFormat('ddd MMM DD, YYYY'), ")")),
    closeButtonLabel: null
  };
}), _action_handlers__WEBPACK_IMPORTED_MODULE_18__["withCopyDateEntity"], _action_handlers__WEBPACK_IMPORTED_MODULE_18__["withTrashDateEntity"]])(EditorDateEntityActionsMenu));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js":
/*!************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js ***!
  \************************************************************************************/
/*! exports provided: EditorDateEntityActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css":
/*!*************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-date-actions-menu":"ee-editor-date-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-inputs.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-inputs.js ***!
  \***************************************************************************************************/
/*! exports provided: dateEntityFormInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return dateEntityFormInputs; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External imports
 */






var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["dateTimeModel"].MODEL_NAME;
/**
 * dateEntityFormInputs
 * returns an array of inputs corresponding to
 * the properties of the Event Date Entity
 *
 * @function
 * @param {Object} dateEntity  EE Date object
 * @param {Array} exclude  Array of field names to not display inputs for
 * @param {Object} values input values
 * @param {Object} FormInput Input object to use
 * @return {Object} rendered form
 */

var dateEntityFormInputs = function dateEntityFormInputs(dateEntity) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var FormInput = arguments.length > 3 ? arguments[3] : undefined;
  var inputs = [];

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["isModelEntityOfModel"])(dateEntity, DATETIME)) {
    return inputs;
  }

  var prefix = "ee-event-date-".concat(dateEntity.id);

  if (Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__["normalizeEntityId"])(dateEntity.id) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'DTT_ID') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "id",
      type: "text",
      name: "".concat(prefix, "-id"),
      initialValue: values["".concat(prefix, "-id")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date ID', 'event_espresso'),
      htmlId: "".concat(prefix, "-id"),
      inputWidth: 3,
      required: true,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'EVT_ID') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "event",
      type: "text",
      name: "".concat(prefix, "-event-id"),
      initialValue: values["".concat(prefix, "-event-id")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Event ID', 'event_espresso'),
      htmlId: "".concat(prefix, "-event-id"),
      inputWidth: 3,
      required: true,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'name') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "name",
      type: "text",
      name: "".concat(prefix, "-name"),
      initialValue: values["".concat(prefix, "-name")] || '',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date Label', 'event_espresso'),
      htmlId: "".concat(prefix, "-name"),
      minLength: 3,
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'description') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "description",
      type: "textarea",
      name: "".concat(prefix, "-description"),
      initialValue: values["".concat(prefix, "-description")] || '',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'event_espresso'),
      htmlId: "".concat(prefix, "-description")
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'start') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "start",
      type: "datetime-local",
      name: "".concat(prefix, "-start"),
      initialValue: values["".concat(prefix, "-start")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start Time', 'event_espresso'),
      htmlId: "".concat(prefix, "-start"),
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["validations"].required,
      inputWidth: 6,
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'end') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "end",
      type: "datetime-local",
      name: "".concat(prefix, "-end"),
      initialValue: values["".concat(prefix, "-end")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('End Time', 'event_espresso'),
      htmlId: "".concat(prefix, "-end"),
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["validations"].required,
      inputWidth: 6,
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'regLimit') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "regLimit",
      type: "number",
      name: "".concat(prefix, "-reg-limit"),
      initialValue: values["".concat(prefix, "-reg-limit")] || Infinity,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Capacity', 'event_espresso'),
      htmlId: "".concat(prefix, "-reg-limit"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The maximum number of registrants' + ' that can attend the event at this' + ' particular date. Leave blank for no limit.', 'event_espresso'),
      inputWidth: 3,
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'sold') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "sold",
      type: "number",
      name: "".concat(prefix, "-sold"),
      initialValue: values["".concat(prefix, "-sold")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sold Count', 'event_espresso'),
      htmlId: "".concat(prefix, "-sold"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity of tickets that have been' + ' sold for this Date', 'event_espresso'),
      inputWidth: 3,
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'reserved') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "reserved",
      type: "number",
      name: "".concat(prefix, "-reserved"),
      initialValue: values["".concat(prefix, "-reserved")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reserved Count', 'event_espresso'),
      htmlId: "".concat(prefix, "-reserved"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity of tickets reserved,' + ' but not yet fully purchased', 'event_espresso'),
      inputWidth: 3,
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'order') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "order",
      type: "number",
      name: "".concat(prefix, "-order"),
      initialValue: values["".concat(prefix, "-order")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display Order', 'event_espresso'),
      htmlId: "".concat(prefix, "-order"),
      inputWidth: 2
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'parent') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "parent",
      type: "text",
      name: "".concat(prefix, "-parent"),
      initialValue: values["".concat(prefix, "-parent")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Date', 'event_espresso'),
      htmlId: "".concat(prefix, "-parent"),
      inputWidth: 2
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'deleted') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "deleted",
      type: "toggle",
      name: "".concat(prefix, "-deleted"),
      initialValue: values["".concat(prefix, "-deleted")] || false,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Archived', 'event_espresso'),
      htmlId: "".concat(prefix, "-deleted"),
      helpTextIfChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('this event date is archived', 'event_espresso'),
      helpTextIfNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('this event date is NOT archived', 'event_espresso'),
      inputWidth: 2
    }));
  }

  return inputs;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _date_entity_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./date-entity-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js");
/* harmony import */ var _date_entity_form_schema__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./date-entity-form-schema */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-schema.js");
/* harmony import */ var _date_entity_form_submit_handler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./date-entity-form-submit-handler */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-submit-handler.js");
/* harmony import */ var _action_handlers_with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../action-handlers/with-update-event-date-relation */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-update-event-date-relation.js");










/**
 * External imports
 */







/**
 * Internal dependencies
 */





/**
 * @function
 * @param {Object} dateEntity model object defining the Event Date
 */

var DateEntityFormModal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(DateEntityFormModal, _Component);

  function DateEntityFormModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DateEntityFormModal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(DateEntityFormModal).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "loadHandler", function () {
      return Object(_date_entity_form_schema__WEBPACK_IMPORTED_MODULE_16__["dateEntityFormSchema"])(_this.state.dateEntity);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "submitHandler", function (data) {
      Object(_date_entity_form_submit_handler__WEBPACK_IMPORTED_MODULE_17__["dateEntityFormSubmitHandler"])(_this.state.dateEntity, data);

      _this.props.replaceDateInStore(_this.state.dateEntity, _this.props.eventEntity);

      _this.props.toggleEditor();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "resetHandler", function () {
      _this.setState({
        dateEntity: _this.state.originalDateEntity.clone(true)
      });

      _this.props.toggleEditor();
    });

    _this.state = {
      dateEntity: Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__["isModelEntityOfModel"])(props.dateEntity, 'datetime') ? props.dateEntity.clone(true) : {},
      originalDateEntity: props.dateEntity ? props.dateEntity : {}
    };
    return _this;
  }
  /**
   * @function
   * @return {Object} data
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DateEntityFormModal, [{
    key: "render",
    value: function render() {
      return React.createElement(_date_entity_form__WEBPACK_IMPORTED_MODULE_15__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        loadHandler: this.loadHandler,
        submitHandler: this.submitHandler,
        resetHandler: this.resetHandler,
        dateEntity: this.state.dateEntity
      }));
    }
  }]);

  return DateEntityFormModal;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(DateEntityFormModal, "propTypes", {
  eventEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  toggleEditor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  loadHandler: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  submitHandler: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  resetHandler: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["compose"])([Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__["withEditorModal"])({
  title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Event Date Editor', 'event_espresso'),
  customClass: 'ee-event-date-editor-modal',
  closeButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('close event date editor', 'event_espresso')
}), _action_handlers_with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withDispatch"])(function (dispatch, _ref) {
  var updateEventDateRelation = _ref.updateEventDateRelation;

  var _dispatch = dispatch('eventespresso/core'),
      receiveAndReplaceEntityRecords = _dispatch.receiveAndReplaceEntityRecords;

  var replaceDateInStore = function replaceDateInStore(replaceDate, eventEntity) {
    receiveAndReplaceEntityRecords('datetime', [replaceDate]);
    updateEventDateRelation(eventEntity, replaceDate);
  };

  return {
    replaceDateInStore: replaceDateInStore
  };
})])(DateEntityFormModal));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-schema.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-schema.js ***!
  \***************************************************************************************************/
/*! exports provided: dateEntityFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return dateEntityFormSchema; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External imports
 */

/**
 * returns an object mapping
 * Event Date Entity properties
 * to form prefixes
 *
 * @function
 * @param {Object} dateEntity  EE Date object
 * @return {Object} rendered form
 */

var dateEntityFormSchema = function dateEntityFormSchema(dateEntity) {
  var _ref;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
    return {};
  }

  var prefix = "ee-event-date-".concat(dateEntity.id);
  return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-id"), dateEntity.id), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-event-id"), dateEntity.EVT_ID), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-name"), dateEntity.name || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-description"), dateEntity.description || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-start"), dateEntity.start.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-end"), dateEntity.end.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-start-time"), dateEntity.start.toFormat('HH:mm')), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-end-time"), dateEntity.end.toFormat('HH:mm')), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reg-limit"), stripInfinity(dateEntity.regLimit)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-sold"), dateEntity.sold || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reserved"), dateEntity.reserved || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-order"), dateEntity.order || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-parent"), dateEntity.parent || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-deleted"), dateEntity.deleted || false), _ref;
};

var stripInfinity = function stripInfinity(number) {
  return number !== 'INF' && number !== Infinity && number > 0 ? number : null;
};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-submit-handler.js":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-submit-handler.js ***!
  \***********************************************************************************************************/
/*! exports provided: dateEntityFormSubmitHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return dateEntityFormSubmitHandler; });
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External imports
 */





var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].MODEL_NAME;
/**
 * updates Event Date Entity properties
 * given the supplied form data
 *
 * @function
 * @param {Object} dateEntity  EE Date object
 * @param {Object} formData
 */

var dateEntityFormSubmitHandler = function dateEntityFormSubmitHandler(dateEntity, formData) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(dateEntity, DATETIME)) {
    throw Error(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Unable to process the Event Date Entity form because an' + ' invalid Date Entity was supplied. ', 'event_espresso'));
  }

  var prefix = "ee-event-date-".concat(dateEntity.id);

  var getValue = function getValue(field) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return formData["".concat(prefix, "-").concat(field)] || defaultValue;
  };

  dateEntity.name = getValue('name');
  dateEntity.description = getValue('description');
  dateEntity.start = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"](getValue('start'));
  dateEntity.end = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"](getValue('end'));
  dateEntity.regLimit = parseInt(getValue('reg-limit', -1), 10);
  dateEntity.isPrimary = !!getValue('is-primary', false);
  dateEntity.order = parseInt(getValue('order', 0), 10);
  dateEntity.parent = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(getValue('parent', 0));
  dateEntity.deleted = !!getValue('deleted', false);
};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _date_entity_form_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date-entity-form-inputs */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-inputs.js");







/**
 * External imports
 */






/**
 * Internal dependencies
 */


/**
 * @function
 * @param {Object} dateEntity model object defining the Event Date
 */

var DateEntityForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DateEntityForm, _Component);

  function DateEntityForm() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DateEntityForm);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DateEntityForm).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DateEntityForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateEntity = _this$props.dateEntity,
          submitButton = _this$props.submitButton,
          cancelButton = _this$props.cancelButton,
          _this$props$currentVa = _this$props.currentValues,
          currentValues = _this$props$currentVa === void 0 ? {} : _this$props$currentVa,
          _this$props$initialVa = _this$props.initialValues,
          initialValues = _this$props$initialVa === void 0 ? {} : _this$props$initialVa,
          _this$props$newObject = _this$props.newObject,
          newObject = _this$props$newObject === void 0 ? false : _this$props$newObject; // edit forms for existing objects must have initial values

      if (!newObject && Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(initialValues) || Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(currentValues)) {
        return null;
      }

      var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["twoColumnAdminFormLayout"].FormInput,
          FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["twoColumnAdminFormLayout"].FormSection,
          FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["twoColumnAdminFormLayout"].FormWrapper,
          FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["twoColumnAdminFormLayout"].FormSaveCancelButtons,
          FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["twoColumnAdminFormLayout"].FormInfo; // entity properties we don't want to be editable

      var exclude = ['EVT_ID', 'sold', 'reserved', 'order', 'parent', 'deleted'];
      var formRows = Object(_date_entity_form_inputs__WEBPACK_IMPORTED_MODULE_11__["dateEntityFormInputs"])(dateEntity, exclude, currentValues, FormInput);

      if (Array.isArray(formRows)) {
        formRows.unshift(React.createElement(FormInfo, {
          key: "formInfo",
          formInfo: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('all fields marked with an asterisk are required', 'event_espresso'),
          dismissable: false
        }));
      }

      var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_9__["dateTimeModel"].MODEL_NAME;
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_10__["isModelEntityOfModel"])(dateEntity, DATETIME) ? React.createElement(FormWrapper, null, React.createElement(FormSection, {
        htmlId: "ee-event-date-editor-".concat(dateEntity.id, "-form-section"),
        children: formRows
      }), React.createElement(FormSaveCancelButtons, {
        htmlClass: "ee-event-date-editor-".concat(dateEntity.id),
        submitButton: submitButton,
        cancelButton: cancelButton
      })) : null;
    }
  }]);

  return DateEntityForm;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/**
 * Enhanced DateEntityForm with FormHandler
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["withFormHandler"])(DateEntityForm));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js ***!
  \*********************************************************************************/
/*! exports provided: DateEntityForm, DateEntityFormModal, dateEntityFormInputs, dateEntityFormSchema, dateEntityFormSubmitHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_entity_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-entity-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _date_entity_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _date_entity_form_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-entity-form-modal */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityFormModal", function() { return _date_entity_form_modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _date_entity_form_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-entity-form-inputs */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-inputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return _date_entity_form_inputs__WEBPACK_IMPORTED_MODULE_2__["dateEntityFormInputs"]; });

/* harmony import */ var _date_entity_form_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-entity-form-schema */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return _date_entity_form_schema__WEBPACK_IMPORTED_MODULE_3__["dateEntityFormSchema"]; });

/* harmony import */ var _date_entity_form_submit_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-entity-form-submit-handler */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-submit-handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return _date_entity_form_submit_handler__WEBPACK_IMPORTED_MODULE_4__["dateEntityFormSubmitHandler"]; });







/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js");
/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js");
/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js");
/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/index.js");
/* harmony import */ var _action_handlers_with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./action-handlers/with-update-event-date-relation */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/with-update-event-date-relation.js");











/**
 * External imports
 */






/**
 * Internal dependencies
 */







var FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["twoColumnAdminFormLayout"].FormWrapper,
    FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["twoColumnAdminFormLayout"].FormSaveCancelButtons;
/**
 * EditorDateEntitiesList
 * EntityList component for displaying event dates in the editor
 *
 * @class
 * @param {Array} entities 	array of JSON objects defining the Event Dates
 * @param {string} view
 * @param {Function} retrieveDates
 * @param {mixed} otherProps
 */

var EditorDateEntitiesList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(EditorDateEntitiesList, _Component);

  function EditorDateEntitiesList(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorDateEntitiesList);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorDateEntitiesList).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "addNewDateButton", function () {
      var addDateEntity = function addDateEntity(event) {
        if (event && event.preventDefault) {
          event.preventDefault();
          event.stopPropagation();
        }

        _this.props.addNewDateEntity(function (state) {
          return _this.setState(state);
        }, _this.props.toggleEditor);
      };

      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["EspressoButton"], {
        icon: "calendar",
        buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Add New Date', 'event_espresso'),
        onClick: addDateEntity
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "ticketAssignmentsButton", function () {
      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["EspressoButton"], {
        icon: "tickets-alt",
        buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Ticket Assignments', 'event_espresso'),
        onClick: _this.props.toggleTicketAssignments
      });
    });

    _this.state = {
      newDateEntity: null
    };
    return _this;
  }
  /**
   * @function
   * @return {Object} rendered button
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorDateEntitiesList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          view = _this$props.view,
          eventEntity = _this$props.eventEntity,
          entities = _this$props.entities,
          editorOpen = _this$props.editorOpen,
          toggleEditor = _this$props.toggleEditor,
          otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["view", "eventEntity", "entities", "editorOpen", "toggleEditor"]);

      return React.createElement(FormWrapper, null, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["EntityList"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
        entities: entities,
        EntityGridView: _grid_view__WEBPACK_IMPORTED_MODULE_15__["EditorDateEntitiesGridView"],
        EntityListView: _list_view__WEBPACK_IMPORTED_MODULE_16__["EditorDateEntitiesListView"],
        view: view,
        eventEntity: eventEntity,
        loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["_x"])('loading eventEntity dates%s', 'loading eventEntity dates...', 'event_espresso'), String.fromCharCode(8230))
      })), React.createElement(FormSaveCancelButtons, {
        submitButton: this.addNewDateButton(),
        cancelButton: this.ticketAssignmentsButton()
      }), React.createElement(_edit_form__WEBPACK_IMPORTED_MODULE_18__["DateEntityFormModal"], {
        eventEntity: eventEntity,
        dateEntity: this.state.newDateEntity,
        toggleEditor: toggleEditor,
        editorOpen: editorOpen
      }));
    }
  }]);

  return EditorDateEntitiesList;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])([_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_13__["withEditor"], Object(_filter_bar__WEBPACK_IMPORTED_MODULE_17__["withPaginatedDateEntitiesListAndFilterBar"])(), _action_handlers_with_update_event_date_relation__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["withDispatch"])(function (dispatch, _ref) {
  var eventEntity = _ref.eventEntity,
      updateEventDateRelation = _ref.updateEventDateRelation;

  var _dispatch = dispatch('eventespresso/core'),
      createEntity = _dispatch.createEntity;

  var addNewDateEntity = function addNewDateEntity(setState, toggleEditor) {
    createEntity('datetime', {}).then(function (newDateEntity) {
      setState({
        newDateEntity: newDateEntity
      });
      updateEventDateRelation(eventEntity, newDateEntity);
      toggleEditor();
    });
  };

  return {
    addNewDateEntity: addNewDateEntity
  };
}), Object(_ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_19__["withTicketAssignmentsManagerModal"])(function () {
  return {
    title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Ticket Assignments for All Event Dates', 'event_espresso'),
    closeButtonLabel: null
  };
})])(EditorDateEntitiesList));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js":
/*!************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js ***!
  \************************************************************************************************************/
/*! exports provided: filterDateEntities, sortDateEntitiesList, searchDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDateEntities", function() { return filterDateEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDateEntitiesList", function() { return sortDateEntitiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchDateEntities", function() { return searchDateEntities; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * filterDateEntities
 * reduces dateEntities array based on value of the "showDates" filter
 *
 * @param {Array} dateEntities    original dateEntities array
 * @param {string} showDates    value for the "showDates" filter
 * @return {Array}         filtered dateEntities array
 */

var filterDateEntities = function filterDateEntities(dateEntities) {
  var showDates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active-upcoming';
  dateEntities = sortDateEntitiesList(dateEntities);

  switch (showDates) {
    case 'all':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'active-upcoming':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isActive(dateEntity) || _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isUpcoming(dateEntity);
      });

    case 'active-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isActive(dateEntity);
      });

    case 'upcoming-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isUpcoming(dateEntity);
      });

    case 'next-active-upcoming-only':
      dateEntities = filterDateEntities(dateEntities);
      return [Object(lodash__WEBPACK_IMPORTED_MODULE_0__["first"])(dateEntities)];

    case 'sold-out-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && (validStatus(dateEntity) && _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isSoldOut(dateEntity) || capacityAtOrAbove(dateEntity, 100));
      });

    case 'above-90-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 90);
      });

    case 'above-75-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 75);
      });

    case 'above-50-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 50);
      });

    case 'below-50-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityBelow(dateEntity, 50);
      });

    case 'recently-expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isRecentlyExpired(dateEntity) && !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isExpired(dateEntity) && !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'trashed-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });
  }

  return dateEntities;
};
/**
 * sortDateEntitiesList
 * reduces dateEntities array based on value of the "datesSortedBy" filter
 *
 * @param {Array} dateEntities    original dateEntities array
 * @param {string} sort   value for the "datesSortedBy" filter
 * @return {Array}         filtered dateEntities array
 */

var sortDateEntitiesList = function sortDateEntitiesList(dateEntities) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'chronologically';
  dateEntities = dateEntities || [];

  switch (sort) {
    case 'chronologically':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, [function (dateEntity) {
        return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["DateTime"].isValid(dateEntity.start) ? dateEntity.start.toMillis() : 0;
      }]);
      break;

    case 'by-name':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['name']);
      break;

    case 'by-id':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['id']);
      break;

    case 'by-order':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['order']);
      break;
  }

  return dateEntities;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @param {number} capacity
 * @return {boolean} true if sold/regLimit >= capacity
 */

var capacityAtOrAbove = function capacityAtOrAbove(dateEntity, capacity) {
  return validSold(dateEntity) && validFiniteReglimit(dateEntity) && parseInt(dateEntity.sold, 10) / parseInt(dateEntity.regLimit, 10) >= capacity / 100;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @param {number} capacity
 * @return {boolean} true if sold/regLimit less than than capacity
 */


var capacityBelow = function capacityBelow(dateEntity, capacity) {
  return validInfiniteReglimit(dateEntity) || validSold(dateEntity) && validFiniteReglimit(dateEntity) && parseInt(dateEntity.sold, 10) / parseInt(dateEntity.regLimit, 10) < capacity / 100;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validStatus = function validStatus(dateEntity) {
  return typeof dateEntity.status === 'string';
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validReglimit = function validReglimit(dateEntity) {
  return typeof dateEntity.regLimit === 'string' || typeof dateEntity.regLimit === 'number';
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid and NOT infinite
 */


var validFiniteReglimit = function validFiniteReglimit(dateEntity) {
  return validReglimit(dateEntity) && dateEntity.regLimit !== 'INF' && dateEntity.regLimit !== Infinity;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid and unlimited
 */


var validInfiniteReglimit = function validInfiniteReglimit(dateEntity) {
  return validReglimit(dateEntity) && (dateEntity.regLimit === 'INF' || dateEntity.regLimit === Infinity);
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validSold = function validSold(dateEntity) {
  return typeof dateEntity.sold === 'string' || typeof dateEntity.sold === 'number';
};
/**
 * searchDateEntities
 * reduces dateEntities array based on value of the "searchDateName" filter
 *
 * @param {Array} dateEntities    		original dateEntities array
 * @param {string} searchText 	value for the "searchDateName" filter
 * @return {Array}         		filtered dateEntities array
 */


var searchDateEntities = function searchDateEntities(dateEntities) {
  var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  dateEntities = searchText !== '' ? dateEntities.filter(function (dateEntity) {
    return dateEntity.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
  }) : dateEntities;
  return dateEntities;
};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-list-filter-bar.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-list-filter-bar.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);









/**
 * External imports
 */




/**
 * DatesListFilterBar
 * filters for controlling the display of a list of Event Dates
 *
 * @param {Function} onShowFilterChange
 * @param {Function} onOrderFilterChange
 * @param {Function} onDisplayFilterChange
 * @return {Object} EditorDatesListView with added DateListFilters
 */

var DateListFilterBar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DateListFilterBar, _Component);

  function DateListFilterBar() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DateListFilterBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DateListFilterBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showDates", function (showDates, setShowDates) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('show', 'event_espresso'),
        className: "espresso-date-list-filter-bar-show-select",
        value: showDates,
        options: [{
          value: 'all',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all dates', 'event_espresso')
        }, {
          value: 'active-upcoming',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all active and upcoming', 'event_espresso')
        }, {
          value: 'active-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('active dates only', 'event_espresso')
        }, {
          value: 'upcoming-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('upcoming dates only', 'event_espresso')
        }, {
          value: 'next-active-upcoming-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('next active or upcoming only', 'event_espresso')
        }, {
          value: 'sold-out-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('sold out dates only', 'event_espresso')
        }, {
          value: 'above-90-capacity',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('dates above 90% capacity', 'event_espresso')
        }, {
          value: 'above-75-capacity',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('dates above 75% capacity', 'event_espresso')
        }, {
          value: 'above-50-capacity',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('dates above 50% capacity', 'event_espresso')
        }, {
          value: 'below-50-capacity',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('dates below 50% capacity', 'event_espresso')
        }, {
          value: 'recently-expired-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('recently expired dates', 'event_espresso')
        }, {
          value: 'expired-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all expired dates', 'event_espresso')
        }, {
          value: 'trashed-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('trashed dates only', 'event_espresso')
        }],
        onChange: setShowDates
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "datesSortedBy", function (datesSortedBy, setDatesSortedBy) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('sort', 'event_espresso'),
        className: "espresso-date-list-filter-bar-order-select",
        value: datesSortedBy,
        options: [{
          value: 'chronologically',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('chronologically', 'event_espresso')
        }, {
          value: 'by-name',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by date name', 'event_espresso')
        }, {
          value: 'by-id',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by date ID', 'event_espresso')
        }, {
          value: 'by-order',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by custom order', 'event_espresso')
        }],
        onChange: setDatesSortedBy
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "displayDates", function (displayDates, setDisplayDates) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('display', 'event_espresso'),
        className: "espresso-date-list-filter-bar-display-select",
        value: displayDates,
        options: [{
          value: 'start',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('start dates only', 'event_espresso')
        }, {
          value: 'end',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('end dates only', 'event_espresso')
        }, {
          value: 'both',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('start and end dates', 'event_espresso')
        }],
        onChange: setDisplayDates
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DateListFilterBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showDates = _this$props.showDates,
          datesSortedBy = _this$props.datesSortedBy,
          displayDates = _this$props.displayDates,
          setShowDates = _this$props.setShowDates,
          setDatesSortedBy = _this$props.setDatesSortedBy,
          setDisplayDates = _this$props.setDisplayDates;
      var showFilter = React.createElement("div", {
        className: "ee-show-dates-filter ee-filter-bar-filter"
      }, this.showDates(showDates, setShowDates));
      var sortFilter = React.createElement("div", {
        className: "ee-sort-dates-filter ee-filter-bar-filter"
      }, this.datesSortedBy(datesSortedBy, setDatesSortedBy));
      var displayFilter = React.createElement("div", {
        className: "ee-display-dates-dates-filter ee-filter-bar-filter"
      }, this.displayDates(displayDates, setDisplayDates));
      return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, showFilter, sortFilter, displayFilter);
    }
  }]);

  return DateListFilterBar;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DateListFilterBar, "propTypes", {
  showDates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  datesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  displayDates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  setShowDates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  setDatesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  setDisplayDates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (DateListFilterBar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js ***!
  \**********************************************************************************/
/*! exports provided: withDateEntitiesListFilterBar, withDatesListFilterState, withFilteredDateEntities, withPaginatedDateEntitiesListAndFilterBarAndState, withPaginatedDateEntitiesListAndFilterBar, getFilteredDateEntitiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBarAndState", function() { return withPaginatedDateEntitiesListAndFilterBarAndState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBar", function() { return withPaginatedDateEntitiesListAndFilterBar; });
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/higher-order-components */ "@eventespresso/higher-order-components");
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-date-entities-list-filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-date-entities-list-filter-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateEntitiesListFilterBar", function() { return _with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return _with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["getFilteredDateEntitiesList"]; });

/* harmony import */ var _with_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-dates-list-filter-state */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-dates-list-filter-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDatesListFilterState", function() { return _with_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _with_filtered_date_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-filtered-date-entities */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-filtered-date-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredDateEntities", function() { return _with_filtered_date_entities__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/**
 * External imports
 */


/**
 * Internal dependencies
 */





var withPaginatedDateEntitiesListAndFilterBar = function withPaginatedDateEntitiesListAndFilterBar() {
  var paginationConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__["withEntityPagination"])(paginationConfig)]), 'withPaginatedDateEntitiesListAndFilterBar');
};

var withPaginatedDateEntitiesListAndFilterBarAndState = function withPaginatedDateEntitiesListAndFilterBarAndState() {
  var paginationConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_with_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_3__["default"], _with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__["withEntityPagination"])(paginationConfig)]), 'withPaginatedDateEntitiesListAndFilterBarAndState');
};



/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-date-entities-list-filter-bar.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-date-entities-list-filter-bar.js ***!
  \***************************************************************************************************************/
/*! exports provided: getFilteredDateEntitiesList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return getFilteredDateEntitiesList; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/higher-order-components */ "@eventespresso/higher-order-components");
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _date_list_filter_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./date-list-filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-list-filter-bar.js");
/* harmony import */ var _date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./date-entities-list-filter-utils */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js");









/**
 * External imports
 */





/**
 * Internal dependencies
 */



/**
 * filters the dates list based on the current filter state
 *
 * @param {Array} dateEntities
 * @param {string} showDates
 * @param {string} datesSortedBy
 * @return {Array} filtered list of dateEntities
 */

var getFilteredDateEntitiesList = function getFilteredDateEntitiesList(dateEntities, showDates, datesSortedBy) {
  return showDates && datesSortedBy && !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(dateEntities) ? Object(_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_13__["sortDateEntitiesList"])(Object(_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_13__["filterDateEntities"])(dateEntities, showDates), datesSortedBy) : [];
};
/**
 * withDateEntitiesListFilterBar
 * Higher-Order-Component that wraps an "EntityList" component
 * with an EntityListFilterBar & DateListFilterBar component
 * that controls how entities are displayed
 *
 * @param {Object} EntityList
 * @return {Object} EntityList with added DateListFilterBar
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["createHigherOrderComponent"])(function (EntityList) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(_class, _Component);

      function _class() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _class);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_class).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_class, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              displayDates = _this$props.displayDates,
              showDates = _this$props.showDates,
              datesSortedBy = _this$props.datesSortedBy,
              setDisplayDates = _this$props.setDisplayDates,
              setShowDates = _this$props.setShowDates,
              setDatesSortedBy = _this$props.setDatesSortedBy,
              searchDateName = _this$props.searchDateName,
              datesPerPage = _this$props.datesPerPage,
              datesView = _this$props.datesView,
              setSearchDateName = _this$props.setSearchDateName,
              setDatesPerPage = _this$props.setDatesPerPage,
              setDatesListView = _this$props.setDatesListView,
              setDatesGridView = _this$props.setDatesGridView,
              _this$props$prefilter = _this$props.prefiltered,
              prefiltered = _this$props$prefilter === void 0 ? false : _this$props$prefilter,
              entities = _this$props.entities,
              otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["displayDates", "showDates", "datesSortedBy", "setDisplayDates", "setShowDates", "setDatesSortedBy", "searchDateName", "datesPerPage", "datesView", "setSearchDateName", "setDatesPerPage", "setDatesListView", "setDatesGridView", "prefiltered", "entities"]);

          var filteredEntities = Object(_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_13__["searchDateEntities"])(entities, searchDateName);
          filteredEntities = prefiltered ? filteredEntities : getFilteredDateEntitiesList(filteredEntities, showDates, datesSortedBy);
          return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_10__["EntityListFilterBar"], {
            name: "DateListFilterBar",
            searchText: searchDateName,
            setSearchText: setSearchDateName,
            perPage: datesPerPage,
            view: datesView,
            setPerPage: setDatesPerPage,
            setListView: setDatesListView,
            setGridView: setDatesGridView,
            entityFilters: React.createElement(_date_list_filter_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              displayDates: displayDates,
              showDates: showDates,
              datesSortedBy: datesSortedBy,
              setDisplayDates: setDisplayDates,
              setShowDates: setShowDates,
              setDatesSortedBy: setDatesSortedBy
            })
          }), React.createElement(EntityList, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            entities: filteredEntities,
            entitiesPerPage: datesPerPage,
            view: datesView,
            noResultsText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('no results found (try changing filters)', 'event_espresso'),
            showDate: displayDates
          }, otherProps)));
        }
      }]);

      return _class;
    }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"])
  );
}, 'withDateEntitiesListFilterBar'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-dates-list-filter-state.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-dates-list-filter-state.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * withDatesListFilterState
 * Higher-Order-Component that wraps a "DatesListFilterBar" component
 * (or parent component that ultimately wraps a "DatesListFilterBar" component)
 * in order to provide state management for it and its children
 *
 * @param {Object} WrappedComponent
 * @return {Object} WrappedComponent with added DatesListFilterState
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, ownProps) {
  var _ownProps$showDates = ownProps.showDates,
      showDates = _ownProps$showDates === void 0 ? 'active-upcoming' : _ownProps$showDates,
      _ownProps$datesSorted = ownProps.datesSortedBy,
      datesSortedBy = _ownProps$datesSorted === void 0 ? 'chronologically' : _ownProps$datesSorted,
      _ownProps$displayDate = ownProps.displayDates,
      displayDates = _ownProps$displayDate === void 0 ? 'start' : _ownProps$displayDate,
      _ownProps$searchDateN = ownProps.searchDateName,
      searchDateName = _ownProps$searchDateN === void 0 ? '' : _ownProps$searchDateN,
      _ownProps$datesPerPag = ownProps.datesPerPage,
      datesPerPage = _ownProps$datesPerPag === void 0 ? 6 : _ownProps$datesPerPag,
      _ownProps$datesView = ownProps.datesView,
      datesView = _ownProps$datesView === void 0 ? 'grid' : _ownProps$datesView;
  var store = select('eventespresso/filter-state');
  return {
    showDates: store.getFilter('event-editor-dates-list', 'showDates', showDates),
    datesSortedBy: store.getFilter('event-editor-dates-list', 'datesSortedBy', datesSortedBy),
    displayDates: store.getFilter('event-editor-dates-list', 'displayDates', displayDates),
    searchDateName: store.getFilter('entity-list', 'searchDateName', searchDateName),
    datesPerPage: parseInt(store.getFilter('event-editor-dates-list', 'datesPerPage', datesPerPage), 10),
    datesView: store.getFilter('event-editor-dates-list', 'datesView', datesView)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var store = dispatch('eventespresso/filter-state');
  return {
    setShowDates: function setShowDates(showDates) {
      return store.setFilter('event-editor-dates-list', 'showDates', showDates);
    },
    setDatesSortedBy: function setDatesSortedBy(datesSortedBy) {
      return store.setFilter('event-editor-dates-list', 'datesSortedBy', datesSortedBy);
    },
    setDisplayDates: function setDisplayDates(displayDates) {
      return store.setFilter('event-editor-dates-list', 'displayDates', displayDates);
    },
    setSearchDateName: function setSearchDateName(searchDateName) {
      return store.setFilter('entity-list', 'searchDateName', searchDateName);
    },
    setDatesPerPage: function setDatesPerPage(datesPerPage) {
      return store.setFilter('event-editor-dates-list', 'datesPerPage', parseInt(datesPerPage, 10));
    },
    setDatesListView: function setDatesListView() {
      return store.setFilter('event-editor-dates-list', 'datesView', 'list');
    },
    setDatesGridView: function setDatesGridView() {
      return store.setFilter('event-editor-dates-list', 'datesView', 'grid');
    }
  };
})]), 'withDatesListFilterState'));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-filtered-date-entities.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-filtered-date-entities.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-date-entities-list-filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/with-date-entities-list-filter-bar.js");




/**
 * External imports
 */

/**
 * Internal imports
 */


var DEFAULT_EMPTY_ARRAY = [];
var withFilteredDateEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (_ref) {
    var eventEntityLoaded = _ref.eventEntityLoaded,
        dateEntitiesLoaded = _ref.dateEntitiesLoaded,
        dateEntities = _ref.dateEntities,
        showDates = _ref.showDates,
        datesSortedBy = _ref.datesSortedBy,
        otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["eventEntityLoaded", "dateEntitiesLoaded", "dateEntities", "showDates", "datesSortedBy"]);

    var isLoaded = eventEntityLoaded && dateEntitiesLoaded;
    var filteredDateEntities = isLoaded ? Object(_with_date_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_4__["getFilteredDateEntitiesList"])(dateEntities, showDates, datesSortedBy) : DEFAULT_EMPTY_ARRAY;
    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      filteredDateEntities: filteredDateEntities,
      allDateEntities: dateEntities,
      eventEntityLoaded: eventEntityLoaded,
      dateEntitiesLoaded: dateEntitiesLoaded,
      showDates: showDates,
      datesSortedBy: datesSortedBy
    }, otherProps));
  };
}, 'withFilteredDateEntities');
/* harmony default export */ __webpack_exports__["default"] = (withFilteredDateEntities);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-dates-list-grid-view":"ee-dates-list-grid-view","ee-editor-date-main":"ee-editor-date-main","ee-editor-date-details-wrapper-div":"ee-editor-date-details-wrapper-div","ee-editor-date-name-heading":"ee-editor-date-name-heading","ee-inline-edit-text":"ee-inline-edit-text","ee-long-title":"ee-long-title","ee-editor-date-desc-div":"ee-editor-date-desc-div","ee-date-desc-excerpt":"ee-date-desc-excerpt","ee-editor-date-location-div":"ee-editor-date-location-div","ee-editor-date-edit-venue-link":"ee-editor-date-edit-venue-link","ee-editor-date-venue-name-span":"ee-editor-date-venue-name-span","dashicon":"dashicon","ee-menu-item-icon":"ee-menu-item-icon","dashicons-location":"dashicons-location","ee-editor-date-details-sold-rsrvd-cap-div":"ee-editor-date-details-sold-rsrvd-cap-div","ee-editor-date-actions-menu":"ee-editor-date-actions-menu","event-date-registrants-label":"event-date-registrants-label"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-date-entity-grid-item */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js");
/* harmony import */ var _editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-date-entities-grid-view.css */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css");
/* harmony import */ var _editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_6__);




/**
 * External imports
 */


/**
 * Internal dependencies
 */



/**
 * EditorDateEntitiesGridView
 * Displays dates as mobile/finger friendly blocks
 * with the most relevant info visible
 *
 * @function
 * @param {Array} entities    array of JSON objects defining the Event Dates
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component}          list of rendered Event Dates
 */

var EditorDateEntitiesGridView = function EditorDateEntitiesGridView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  htmlClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()(htmlClass, 'ee-dates-list-grid-view');
  return React.createElement("div", {
    className: htmlClass
  }, entities.map(function (dateEntity) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(dateEntity, 'datetime') ? React.createElement(_editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: dateEntity.id,
      dateEntity: dateEntity
    }, otherProps)) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntitiesGridView);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_17__);











/**
 * External imports
 */









var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_15__["dateTimeModel"].MODEL_NAME;
var ADMIN_ROUTES = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].ADMIN_ROUTES,
    ADMIN_ROUTE_ACTION_DEFAULT = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].ADMIN_ROUTE_ACTION_DEFAULT,
    getAdminUrl = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].getAdminUrl;
/**
 * EditorDateEntityDetails
 *
 * @function
 * @param {Object} dateEntity    JSON object defining the Event Date
 * @return {string}    date details
 */

var EditorDateEntityDetails =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(EditorDateEntityDetails, _Component);

  function EditorDateEntityDetails() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorDateEntityDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorDateEntityDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "dateName", function (dateEntity) {
      var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_17___default()('ee-editor-date-name-heading', {
        'ee-long-title': dateEntity.name && dateEntity.name.length > 40
      });
      return React.createElement("h1", {
        className: htmlClass
      }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["InlineEditInput"], {
        htmlId: "event-date-name-".concat(dateEntity.id),
        type: "text",
        value: dateEntity.name,
        onChange: function onChange(name) {
          return _this.updateName(name, dateEntity);
        },
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Date Name', 'event_espresso'),
        noticeStyle: {
          left: '50px'
        }
      }));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "description", function (dateEntity, showDesc) {
      var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_17___default()('ee-editor-date-desc-div', {
        'ee-date-desc-excerpt': showDesc === 'excerpt'
      });
      return React.createElement("div", {
        className: htmlClass
      }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["InlineEditInput"], {
        htmlId: "event-date-desc-".concat(dateEntity.id),
        type: "textarea",
        value: dateEntity.description,
        onChange: function onChange(desc) {
          return _this.updateDescription(desc, dateEntity);
        },
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Date Description', 'event_espresso')
      }));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "venueName", function (dateEntity, showVenue) {
      var link = 'http://local.wordpress.test/wp-admin/admin.php?page=espresso_venues&action=edit&post=871&edit_nonce=32f75831c2&return=edit';
      return showVenue ? React.createElement("h3", {
        className: "ee-editor-date-location-div"
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('venue editor opens in a new window', 'event_espresso')
      }, React.createElement("a", {
        href: link,
        className: "ee-editor-date-edit-venue-link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Dashicon"], {
        icon: "admin-home",
        size: 16
      }), React.createElement("span", {
        className: "ee-editor-date-venue-name-span"
      }, 'Green Water Resort'), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Dashicon"], {
        icon: "external",
        size: 12
      })))) : '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "dateSoldReservedCapacity", function (eventEntity, dateEntity) {
      var details = [{
        id: 'event-date-sold',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('sold', 'event_espresso'),
        value: dateEntity.sold || 0
      }, {
        id: 'event-date-reserved',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('reserved', 'event_espresso'),
        value: dateEntity.reserved || 0
      }, {
        id: 'event-date-capacity',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('capacity', 'event_espresso'),
        value: dateEntity.regLimit || Infinity,
        editable: {
          type: 'text',
          valueType: 'number',
          onChange: function onChange(capacity) {
            return _this.updateCapacity(capacity, dateEntity);
          }
        }
      }, {
        id: 'event-date-registrants',
        htmlClass: 'has-tooltip',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('registrants', 'event_espresso'),
        value: _this.getDatetimeRegistrationsLink(eventEntity, dateEntity)
      }];
      return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["EntityDetailsPanel"], {
        details: details,
        htmlClass: "ee-editor-date-details-sold-rsrvd-cap-div"
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getDatetimeRegistrationsLink", function (eventEntity, dateEntity) {
      var regListUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["addQueryArgs"])(getAdminUrl(ADMIN_ROUTES.REGISTRATIONS, ADMIN_ROUTE_ACTION_DEFAULT), {
        event_id: eventEntity.id,
        datetime_id: dateEntity.id,
        return: 'edit'
      });
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('view registrations for this datetime.', 'event_espresso')
      }, React.createElement("a", {
        href: regListUrl,
        className: 'ee-editor-date-details-reg-url-link',
        target: '_blank',
        rel: 'noopener norefferer'
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Dashicon"], {
        icon: "groups",
        size: 24
      })));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "updateName", function (name, dateEntity) {
      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__["isModelEntityOfModel"])(dateEntity, DATETIME) && dateEntity.name !== name) {
        dateEntity.name = name;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "updateDescription",
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(description, dateEntity) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__["isModelEntityOfModel"])(dateEntity, DATETIME) && dateEntity.description !== description) {
                  dateEntity.description = description;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "updateCapacity", function (capacity, dateEntity) {
      capacity = parseInt(capacity, 10);

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__["isModelEntityOfModel"])(dateEntity, DATETIME) && dateEntity.regLimit !== capacity) {
        dateEntity.regLimit = capacity;
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorDateEntityDetails, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          eventEntity = _this$props.eventEntity,
          dateEntity = _this$props.dateEntity;
      var _this$props2 = this.props,
          _this$props2$showDesc = _this$props2.showDesc,
          showDesc = _this$props2$showDesc === void 0 ? 'excerpt' : _this$props2$showDesc,
          _this$props2$showVenu = _this$props2.showVenue,
          showVenue = _this$props2$showVenu === void 0 ? true : _this$props2$showVenu;
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_16__["isModelEntityOfModel"])(dateEntity, DATETIME) ? React.createElement("div", {
        className: 'ee-editor-date-details-wrapper-div'
      }, this.dateName(dateEntity), this.description(dateEntity, showDesc), this.venueName(dateEntity, showVenue), this.dateSoldReservedCapacity(eventEntity, dateEntity)) : null;
    }
  }]);

  return EditorDateEntityDetails;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntityDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor-date-entity-details */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js");
/* harmony import */ var _actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions-menu/editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");









/**
 * External imports
 */







/**
 * Internal dependencies
 */



var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__["dateTimeModel"].getBackgroundColorClass,
    getDateTimeStatusTextLabel = _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__["dateTimeModel"].getDateTimeStatusTextLabel;
/**
 * EditorDateGridItem
 * Component for displaying an Event Date as a visual block in grid views
 *
 * @function
 * @param {Object} date    JSON object defining the Event Date
 */

var EditorDateEntityGridItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditorDateEntityGridItem, _Component);

  function EditorDateEntityGridItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorDateEntityGridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorDateEntityGridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "displayDate", function (dateEntity, showDate) {
      var sidebarColorClass = 'ee-editor-date-calendar-sidebar ';
      sidebarColorClass += getBackgroundColorClass(dateEntity);
      var dateStatus = React.createElement("div", {
        key: 1,
        className: 'ee-status-tag'
      }, getDateTimeStatusTextLabel(dateEntity));

      switch (showDate) {
        case 'end':
          var endTime = dateEntity.end.toFormat('h:mm a');
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["BiggieCalendarDate"], {
            date: dateEntity.end,
            htmlClass: sidebarColorClass,
            headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('ends', 'event_espresso'),
            footerText: [endTime, dateStatus]
          });

        case 'both':
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["CalendarDateRange"], {
            startDate: dateEntity.start,
            endDate: dateEntity.end,
            htmlClass: sidebarColorClass,
            headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Event Date', 'event_espresso'),
            footerText: dateStatus,
            showTime: true
          });

        case 'start':
        default:
          var startTime = dateEntity.start.toFormat('h:mm a');
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["BiggieCalendarDate"], {
            date: dateEntity.start,
            htmlClass: sidebarColorClass,
            headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('starts', 'event_espresso'),
            footerText: [startTime, dateStatus]
          });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorDateEntityGridItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          eventEntity = _this$props.eventEntity,
          dateEntity = _this$props.dateEntity,
          allTicketEntities = _this$props.allTicketEntities,
          _this$props$showDate = _this$props.showDate,
          showDate = _this$props$showDate === void 0 ? 'start' : _this$props$showDate,
          _this$props$showDesc = _this$props.showDesc,
          showDesc = _this$props$showDesc === void 0 ? 'excerpt' : _this$props$showDesc,
          _this$props$showVenue = _this$props.showVenue,
          showVenue = _this$props$showVenue === void 0 ? true : _this$props$showVenue;
      var dateStyleClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()('ee-editor-date-main', {
        'ee-editor-date-range': showDate === 'both',
        'ee-editor-date-single': showDate !== 'both'
      });
      return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement("div", {
        className: dateStyleClass
      }, this.displayDate(dateEntity, showDate), React.createElement(_editor_date_entity_details__WEBPACK_IMPORTED_MODULE_14__["default"], {
        eventEntity: eventEntity,
        dateEntity: dateEntity,
        showDesc: showDesc,
        showVenue: showVenue
      })), React.createElement(_actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_15__["default"], {
        eventEntity: eventEntity,
        dateEntity: dateEntity,
        allTicketEntities: allTicketEntities
      }));
    }
  }]);

  return EditorDateEntityGridItem;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["compose"])([Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["ifCondition"])(function (_ref) {
  var dateEntity = _ref.dateEntity;
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__["isModelEntityOfModel"])(dateEntity, 'datetime');
}), _eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["withEntityPaperFrame"]])(EditorDateEntityGridItem));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js ***!
  \*********************************************************************************/
/*! exports provided: EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entity-details */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-date-entity-grid-item */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _editor_date_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-date-entities-grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _editor_date_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/index.js":
/*!***********************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/index.js ***!
  \***********************************************************************/
/*! exports provided: EditorDateEntitiesList, withCopyDateEntity, withUpdateEventDateRelation, withTrashDateEntity, EditorDateEntityActionsMenu, DateEntityForm, DateEntityFormModal, dateEntityFormInputs, dateEntityFormSchema, dateEntityFormSubmitHandler, withDateEntitiesListFilterBar, withDatesListFilterState, withFilteredDateEntities, withPaginatedDateEntitiesListAndFilterBarAndState, withPaginatedDateEntitiesListAndFilterBar, getFilteredDateEntitiesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntityListItem, EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-handlers */ "./assets/src/editor/events/dates-and-times/editor-date/action-handlers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyDateEntity", function() { return _action_handlers__WEBPACK_IMPORTED_MODULE_0__["withCopyDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUpdateEventDateRelation", function() { return _action_handlers__WEBPACK_IMPORTED_MODULE_0__["withUpdateEventDateRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashDateEntity", function() { return _action_handlers__WEBPACK_IMPORTED_MODULE_0__["withTrashDateEntity"]; });

/* harmony import */ var _actions_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _actions_menu__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityActionsMenu"]; });

/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityFormModal", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["DateEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["dateEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["dateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["dateEntityFormSubmitHandler"]; });

/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateEntitiesListFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withDateEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDatesListFilterState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredDateEntities", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withFilteredDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBarAndState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withPaginatedDateEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withPaginatedDateEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["getFilteredDateEntitiesList"]; });

/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorDateEntitiesGridView"]; });

/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityListItem", function() { return _list_view__WEBPACK_IMPORTED_MODULE_5__["EditorDateEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _list_view__WEBPACK_IMPORTED_MODULE_5__["EditorDateEntitiesListView"]; });

/* harmony import */ var _editor_date_entities_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-date-entities-list */ "./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _editor_date_entities_list__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-dates-list-list-view":"ee-dates-list-list-view","ee-editor-date-list-items":"ee-editor-date-list-items","ee-editor-date-list-view-div":"ee-editor-date-list-view-div","ee-date-list-item":"ee-date-list-item","ee-infinity-sign":"ee-infinity-sign","dashicons":"dashicons","ee-date-list-item-label":"ee-date-list-item-label","ee-date-list-item-value":"ee-date-list-item-value","ee-editor-date-actions-menu":"ee-editor-date-actions-menu","ee-editor-date-details-reg-url-link":"ee-editor-date-details-reg-url-link","ee-dropdown-menu-div":"ee-dropdown-menu-div"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_date_entity_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-date-entity-list-item */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entity-list-item.js");
/* harmony import */ var _editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-date-entities-list-view.css */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css");
/* harmony import */ var _editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_7__);




/**
 * External imports
 */



/**
 * Internal dependencies
 */



/**
 * EditorDatesListView
 * Displays dates in a standard list table like view
 *
 * @function
 * @param {Array} entities 	array of JSON objects defining the Event Dates
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component} 			list of rendered Event Dates
 */

var EditorDateEntitiesListView = function EditorDateEntitiesListView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  htmlClass = classnames__WEBPACK_IMPORTED_MODULE_5___default()(htmlClass, 'ee-dates-list-list-view');
  return React.createElement("div", {
    className: htmlClass
  }, React.createElement("div", {
    key: 0,
    className: "ee-editor-date-list-items"
  }, React.createElement("div", {
    className: "ee-date-list-item"
  }), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ID', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Name', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Start Date', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('End Date', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sold', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reserved', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Capacity', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Registrants', 'event_espresso')), React.createElement("div", {
    className: "ee-date-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Actions', 'event_espresso'))), entities.map(function (dateEntity) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__["isModelEntityOfModel"])(dateEntity, 'datetime') ? React.createElement(_editor_date_entity_list_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: dateEntity.id,
      dateEntity: dateEntity
    }, otherProps)) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntitiesListView);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entity-list-item.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entity-list-item.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions-menu/editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");









/**
 * External imports
 */








var ADMIN_ROUTES = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].ADMIN_ROUTES,
    ADMIN_ROUTE_ACTION_DEFAULT = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].ADMIN_ROUTE_ACTION_DEFAULT,
    getAdminUrl = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_12__["routes"].getAdminUrl;
/**
 * Internal dependencies
 */


var DATETIME = _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__["dateTimeModel"].MODEL_NAME,
    getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__["dateTimeModel"].getBackgroundColorClass;
/**
 * EditorDateEntityListItem
 * Displays Event Date as a table row similar to existing eventEntity editor UI
 *
 * @function
 * @param {Object} date    JSON object defining the Event Date
 * @return {string}        The date rendered as a block
 */

var EditorDateEntityListItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditorDateEntityListItem, _Component);

  function EditorDateEntityListItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorDateEntityListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorDateEntityListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getStatusClass", function (dateEntity) {
      switch (dateEntity.status) {
        case 'DTA':
          return 'ee-datetime-active';

        case 'DTE':
          return 'ee-datetime-expired';

        case 'DTS':
          return 'ee-datetime-sold-out';

        case 'DTU':
          return 'ee-datetime-upcoming';
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getDateRegistrationsLink", function (eventEntity, dateEntity) {
      var regListUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_13__["addQueryArgs"])(getAdminUrl(ADMIN_ROUTES.REGISTRATIONS, ADMIN_ROUTE_ACTION_DEFAULT), {
        event_id: eventEntity.id,
        datetime_id: dateEntity.id,
        return: 'edit'
      });
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
        text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('view registrations for this date.', 'event_espresso')
      }, React.createElement("a", {
        href: regListUrl,
        className: 'ee-editor-date-details-reg-url-link',
        target: '_blank',
        rel: 'noopener norefferer'
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Dashicon"], {
        icon: "groups",
        size: 24
      })));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorDateEntityListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          eventEntity = _this$props.eventEntity,
          dateEntity = _this$props.dateEntity,
          allTicketEntities = _this$props.allTicketEntities;
      this.id = "event-date-ticket-list-modal-".concat(dateEntity.id);
      var statusClass = this.getStatusClass(dateEntity);
      var bgClass = getBackgroundColorClass(dateEntity);
      var regLimit = dateEntity.regLimit === 'INF' || dateEntity.regLimit === Infinity ? React.createElement("span", {
        className: 'ee-infinity-sign'
      }, "\u221E") : dateEntity.regLimit;
      var regLink = this.getDateRegistrationsLink(eventEntity, dateEntity);
      return React.createElement("div", {
        id: "ee-editor-date-list-view-div-".concat(dateEntity.id),
        className: "ee-editor-date-list-view-div ".concat(statusClass)
      }, React.createElement("div", {
        className: "ee-editor-date-list-items"
      }, React.createElement("div", {
        className: "".concat(bgClass, " ee-date-list-item")
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Name:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.name)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('ID:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.id)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Name:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.name)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Start Date:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.start.toFormat('ddd MMM YY h:mm a'))), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('End Date:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.end.toFormat('ddd MMM YY h:mm a'))), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Sold:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.sold)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Reserved:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, dateEntity.reserved)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Capacity:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, regLimit)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Registrants:', 'event_espresso')), React.createElement("span", {
        className: "ee-date-list-item-value"
      }, regLink)), React.createElement("div", {
        className: "ee-date-list-item"
      }, React.createElement("span", {
        className: "ee-date-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Actions:', 'event_espresso')), React.createElement(_actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_15__["default"], {
        event: eventEntity,
        dateEntity: dateEntity,
        allTicketEntities: allTicketEntities
      }))), React.createElement("div", {
        className: 'clear-float'
      }));
    }
  }]);

  return EditorDateEntityListItem;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__["ifCondition"])(function (_ref) {
  var dateEntity = _ref.dateEntity;
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_11__["isModelEntityOfModel"])(dateEntity, DATETIME);
})(EditorDateEntityListItem));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js ***!
  \*********************************************************************************/
/*! exports provided: EditorDateEntityListItem, EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entity_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entity-list-item */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entity-list-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityListItem", function() { return _editor_date_entity_list_item__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_date_entities_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-date-entities-list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _editor_date_entities_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/index.js":
/*!***********************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/index.js ***!
  \***********************************************************/
/*! exports provided: EditorDateEntitiesList, withDateTicketEntities, withTicketEntitiesForAllDateEntities, withCopyDateEntity, withUpdateEventDateRelation, withTrashDateEntity, EditorDateEntityActionsMenu, DateEntityForm, DateEntityFormModal, dateEntityFormInputs, dateEntityFormSchema, dateEntityFormSubmitHandler, withDateEntitiesListFilterBar, withDatesListFilterState, withFilteredDateEntities, withPaginatedDateEntitiesListAndFilterBarAndState, withPaginatedDateEntitiesListAndFilterBar, getFilteredDateEntitiesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntityListItem, EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date */ "./assets/src/editor/events/dates-and-times/editor-date/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyDateEntity", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withCopyDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUpdateEventDateRelation", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withUpdateEventDateRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashDateEntity", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withTrashDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityFormModal", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["DateEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormSubmitHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateEntitiesListFilterBar", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withDateEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDatesListFilterState", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredDateEntities", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withFilteredDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBarAndState", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withPaginatedDateEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBar", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["withPaginatedDateEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["getFilteredDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityListItem", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesListView"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./assets/src/editor/events/dates-and-times/data/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateTicketEntities", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["withDateTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesForAllDateEntities", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["withTicketEntitiesForAllDateEntities"]; });




/***/ }),

/***/ "./assets/src/editor/events/event-editor.js":
/*!**************************************************!*\
  !*** ./assets/src/editor/events/event-editor.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/index.js");


/**
 * External imports
 */


var container = document.getElementById('normal-sortables');
var editor = document.createElement('div');
editor.className = 'ee-editor-div';
container.prepend(editor);
var eventId = window.eeEditorEventId;

if (eventId) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(React.createElement(___WEBPACK_IMPORTED_MODULE_1__["EventDatesAndTicketsMetabox"], {
    eventId: eventId
  }), editor);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/events/data/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/editor/events/events/data/index.js ***!
  \*******************************************************/
/*! exports provided: withEventEntity, withEventDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_event_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-event-entity */ "./assets/src/editor/events/events/data/with-event-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEventEntity", function() { return _with_event_entity__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _with_event_date_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-event-date-entities */ "./assets/src/editor/events/events/data/with-event-date-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEventDateEntities", function() { return _with_event_date_entities__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/events/data/with-event-date-entities.js":
/*!**************************************************************************!*\
  !*** ./assets/src/editor/events/events/data/with-event-date-entities.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var EMPTY_OBJECT = {};
/**
 * withEventDateEntities
 * returns an object containing the following:
 *    dateEntities - an array of datetime entities for the supplied event
 *    dateEntitiesLoaded - boolean true if loading is complete
 *
 * !!! IMPORTANT !!!
 * ONLY USE THIS AFTER THE CALL TO hasFinishedResolution() in the
 * withEvent() DATA HOC has completed and resolved true
 *
 * @function
 */

var withEventDateEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select, _ref) {
  var eventEntity = _ref.eventEntity,
      eventEntityLoaded = _ref.eventEntityLoaded;

  if (eventEntityLoaded && Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(eventEntity, 'event')) {
    var _select = select('eventespresso/core'),
        getRelatedEntities = _select.getRelatedEntities;

    var _select2 = select('core/data'),
        hasFinishedResolution = _select2.hasFinishedResolution;

    var dateEntities = getRelatedEntities(eventEntity, 'datetime');
    var dateEntitiesLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntities', [eventEntity, 'datetime']);

    if (dateEntitiesLoaded) {
      return {
        dateEntities: dateEntities,
        dateEntitiesLoaded: dateEntitiesLoaded
      };
    }
  }

  return EMPTY_OBJECT;
}), 'withEventDateEntities');
/* harmony default export */ __webpack_exports__["default"] = (withEventDateEntities);

/***/ }),

/***/ "./assets/src/editor/events/events/data/with-event-entity.js":
/*!*******************************************************************!*\
  !*** ./assets/src/editor/events/events/data/with-event-entity.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var EMPTY_OBJECT = {};
/**
 * withEventEntity
 * returns an object containing the following:
 *    event - the event entity for the supplied eventId
 *    eventLoaded - boolean true if loading is complete
 *
 * @function
 */

var withEventEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select, _ref) {
  var eventId = _ref.eventId;

  if (eventId) {
    var _select = select('eventespresso/core'),
        getEventById = _select.getEventById;

    var _select2 = select('core/data'),
        hasFinishedResolution = _select2.hasFinishedResolution;

    var eventEntity = getEventById(eventId);
    var eventEntityLoaded = hasFinishedResolution('eventespresso/core', 'getEventById', [eventId]);

    if (eventEntityLoaded && Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(eventEntity, 'event')) {
      return {
        eventEntity: eventEntity,
        eventEntityLoaded: eventEntityLoaded
      };
    }
  }

  return EMPTY_OBJECT;
}), 'withEventEntity');
/* harmony default export */ __webpack_exports__["default"] = (withEventEntity);

/***/ }),

/***/ "./assets/src/editor/events/index.js":
/*!*******************************************!*\
  !*** ./assets/src/editor/events/index.js ***!
  \*******************************************/
/*! exports provided: EventDatesAndTicketsMetabox, TicketAssignmentsManagerModal, withTicketAssignmentsManagerModal, EditorDateEntitiesList, withDateTicketEntities, withTicketEntitiesForAllDateEntities, EditorTicketEntitiesList, EditorTicketEntitiesOnlyList, withPriceTypeEntities, withTicketDateEntities, withTicketPriceEntities, withCopyDateEntity, withUpdateEventDateRelation, withTrashDateEntity, EditorDateEntityActionsMenu, DateEntityForm, DateEntityFormModal, dateEntityFormInputs, dateEntityFormSchema, dateEntityFormSubmitHandler, withDateEntitiesListFilterBar, withDatesListFilterState, withFilteredDateEntities, withPaginatedDateEntitiesListAndFilterBarAndState, withPaginatedDateEntitiesListAndFilterBar, getFilteredDateEntitiesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntityListItem, EditorDateEntitiesListView, withCopyTicketEntity, withTrashTicketEntity, EditorTicketActionsMenu, TicketEntityForm, withTicketEntityFormModal, ticketEntityFormInputs, ticketEntityFormSchema, withTicketEntitiesListFilterBar, withTicketEntitiesListFilterState, withFilteredTicketEntities, withPaginatedTicketEntitiesListAndFilterBar, withPaginatedTicketEntitiesListAndFilterBarAndState, getFilteredTicketEntitiesList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntityListItem, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dates_and_tickets_metabox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates-and-tickets-metabox */ "./assets/src/editor/events/dates-and-tickets-metabox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDatesAndTicketsMetabox", function() { return _dates_and_tickets_metabox__WEBPACK_IMPORTED_MODULE_0__["EventDatesAndTicketsMetabox"]; });

/* harmony import */ var _dates_and_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates-and-times */ "./assets/src/editor/events/dates-and-times/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateTicketEntities", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withDateTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesForAllDateEntities", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withTicketEntitiesForAllDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyDateEntity", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withCopyDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUpdateEventDateRelation", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withUpdateEventDateRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashDateEntity", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withTrashDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityFormModal", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["DateEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["dateEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["dateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["dateEntityFormSubmitHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateEntitiesListFilterBar", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withDateEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDatesListFilterState", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredDateEntities", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withFilteredDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBarAndState", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withPaginatedDateEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBar", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["withPaginatedDateEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["getFilteredDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityListItem", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _dates_and_times__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesListView"]; });

/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketAssignmentsManagerModal", function() { return _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_2__["TicketAssignmentsManagerModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketAssignmentsManagerModal", function() { return _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_2__["withTicketAssignmentsManagerModal"]; });

/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets */ "./assets/src/editor/events/tickets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesOnlyList", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntitiesOnlyList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPriceTypeEntities", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withPriceTypeEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketDateEntities", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTicketDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceEntities", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTicketPriceEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyTicketEntity", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withCopyTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashTicketEntity", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTrashTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketEntityForm", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["TicketEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntityFormModal", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTicketEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["ticketEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["ticketEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterBar", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTicketEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterState", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withTicketEntitiesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredTicketEntities", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withFilteredTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBar", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withPaginatedTicketEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBarAndState", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["withPaginatedTicketEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["getFilteredTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityListItem", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _tickets__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntitiesListView"]; });

/* harmony import */ var _event_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-editor */ "./assets/src/editor/events/event-editor.js");






/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/index.js":
/*!**********************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/index.js ***!
  \**********************************************************************/
/*! exports provided: TicketAssignmentsManagerModal, withTicketAssignmentsManagerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/with-ticket-assignments-manager-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketAssignmentsManagerModal", function() { return _with_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketAssignmentsManagerModal", function() { return _with_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-handler.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-handler.js ***!
  \*******************************************************************************************/
/*! exports provided: isAssigned, processChanges, unAssignTicketEntity, assignTicketEntity, assignedCount, isRemoved, unRemoveTicketEntity, removeTicketEntity, removedCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssigned", function() { return isAssigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processChanges", function() { return processChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unAssignTicketEntity", function() { return unAssignTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTicketEntity", function() { return assignTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignedCount", function() { return assignedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemoved", function() { return isRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unRemoveTicketEntity", function() { return unRemoveTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTicketEntity", function() { return removeTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removedCount", function() { return removedCount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var noIndex = -1;
/**
 * @function
 * @param {Object} assigned
 * @param {Object} date
 * @param {Object} ticket
 * @param {boolean} returnIndex
 * @return {number|boolean} index for date id in assigned array or
 *                        boolean if returnIndex is false
 */

var isAssigned = function isAssigned(assigned, date, ticket) {
  var returnIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var index = noIndex;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[date.id])) {
    index = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(assigned[date.id], {
      id: ticket.id
    });
  }

  return returnIndex ? index : index > noIndex;
};
/**
 * @function
 * @param {Array} dateEntities
 * @param {Object} assigned
 * @param {Function} addTickets
 * @param {Object} removed
 * @param {Function} removeTicketEntities
 * @return {Promise} resolves to true if updates occurred
 */

var processChanges = function processChanges(dateEntities, assigned, addTickets, removed, removeTicketEntities) {
  var relationUpdates = [];

  var _loop = function _loop(dateID) {
    var dateEntity = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(dateEntities, function (date) {
      return Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(date.id) === Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(dateID);
    });

    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
      var ticketsToRemove = removed[dateID];

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ticketsToRemove)) {
        relationUpdates.push(removeTicketEntities(dateEntity, ticketsToRemove));
      }
    }
  };

  for (var dateID in removed) {
    _loop(dateID);
  }

  var _loop2 = function _loop2(dateID) {
    var dateEntity = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(dateEntities, function (date) {
      return Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(date.id) === Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(dateID);
    });

    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
      var ticketsToAssign = assigned[dateID];

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ticketsToAssign)) {
        relationUpdates.push(addTickets(dateEntity, ticketsToAssign));
      }
    }
  };

  for (var dateID in assigned) {
    _loop2(dateID);
  }

  return Promise.all(relationUpdates);
};
/**
 * @function
 * @param {Object} assigned
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @param {number} index
 * @return {Object} assigned
 */

var unAssignTicketEntity = function unAssignTicketEntity(assigned, dateEntity, ticketEntity) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noIndex;
  index = index === noIndex ? isAssigned(assigned, dateEntity, ticketEntity, true) : index;

  if (index > noIndex) {
    assigned[dateEntity.id].splice(index, 1);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(assigned[dateEntity.id])) {
      delete assigned[dateEntity.id];
    }
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(assigned, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
};
/**
 * @function
 * @param {Object} prevState
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @return {Object} updated state
 */

var assignTicketEntity = function assignTicketEntity(prevState, dateEntity, ticketEntity) {
  var index = isRemoved(prevState.removed, dateEntity, ticketEntity, true);

  if (index > noIndex) {
    prevState.removed = unRemoveTicketEntity(prevState.removed, dateEntity, ticketEntity, index);
  } else {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prevState.assigned[dateEntity.id])) {
      prevState.assigned[dateEntity.id] = [];
    }

    if (!isAssigned(prevState.assigned, dateEntity, ticketEntity)) {
      prevState.assigned[dateEntity.id].push(ticketEntity);
    }
  }

  return cleanState(prevState);
};
/**
 * @function
 * @param {Object} assigned
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @return {number}    		the number of dateEntity tickets in assigned
 *              			collection matching supplied ticket
 */

var assignedCount = function assignedCount(assigned) {
  var dateEntity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ticketEntity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (dateEntity && dateEntity.id && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[dateEntity.id])) {
    return assigned[dateEntity.id].length;
  }

  var index = 0;
  var count = 0;

  if (ticketEntity && ticketEntity.id) {
    for (var dateID in assigned) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[dateID])) {
        index = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(assigned[dateID], {
          id: ticketEntity.id
        });

        if (index > noIndex) {
          count++;
        }
      }
    }
  }

  return count;
};
/**
 * @function
 * @param {Object} removed
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @param {boolean} returnIndex
 * @return {number|boolean} index for date id in removed array or
 *                        boolean if returnIndex is false
 */

var isRemoved = function isRemoved(removed, dateEntity, ticketEntity) {
  var returnIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var index = noIndex;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateEntity.id])) {
    index = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(removed[dateEntity.id], {
      id: ticketEntity.id
    });
  }

  return returnIndex ? index : index > noIndex;
};
/**
 * @function
 * @param {Object} removed
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @param {number} index
 * @return {Object} removed
 */

var unRemoveTicketEntity = function unRemoveTicketEntity(removed, dateEntity, ticketEntity) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noIndex;
  index = index === noIndex ? isRemoved(removed, dateEntity, ticketEntity, true) : index;

  if (index > noIndex) {
    removed[dateEntity.id].splice(index, 1);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(removed[dateEntity.id])) {
      delete removed[dateEntity.id];
    }
  }

  return removed;
};
/**
 * @function
 * @param {Object} prevState
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @return {Object} updated state
 */

var removeTicketEntity = function removeTicketEntity(prevState, dateEntity, ticketEntity) {
  var index = isAssigned(prevState.assigned, dateEntity, ticketEntity, true);

  if (index > noIndex) {
    prevState.assigned = unAssignTicketEntity(prevState.assigned, dateEntity, ticketEntity, index);
  } else {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prevState.removed[dateEntity.id])) {
      prevState.removed[dateEntity.id] = [];
    }

    if (!isRemoved(prevState.removed, dateEntity, ticketEntity)) {
      prevState.removed[dateEntity.id].push(ticketEntity);
    }
  }

  return cleanState(prevState);
};
/**
 * @function
 * @param {Object} removed
 * @param {Object} dateEntity
 * @param {Object} ticketEntity
 * @return {number}    		the number of date tickets in removed
 *              			collection matching supplied ticket
 */

var removedCount = function removedCount(removed) {
  var dateEntity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ticketEntity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (dateEntity && dateEntity.id && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateEntity.id])) {
    return removed[dateEntity.id].length;
  }

  var index = 0;
  var count = 0;

  if (ticketEntity && ticketEntity.id) {
    for (var dateID in removed) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateID])) {
        index = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(removed[dateID], {
          id: ticketEntity.id
        });

        if (index > noIndex) {
          count++;
        }
      }
    }
  }

  return count;
};
/**
 * @function
 * @param {Object} prevState
 * @return {Object} updated state
 */

var cleanState = function cleanState(prevState) {
  var assigned = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(prevState.assigned, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
  var removed = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(prevState.removed, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
  return {
    assigned: assigned,
    removed: removed
  };
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @eventespresso/higher-order-components */ "@eventespresso/higher-order-components");
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ticket-assignments-handler */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-handler.js");
/* harmony import */ var _ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticket-assignments-manager.css */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css");
/* harmony import */ var _ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js");










/**
 * External imports
 */














/**
 * Internal imports
 */




var noIndex = -1;
var DEFAULT_EMPTY_ARRAY = [];
var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormInfo,
    FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormWrapper,
    FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormSaveCancelButtons;
var getDateBgColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_16__["dateTimeModel"].getBackgroundColorClass;
var getTicketBgColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_16__["ticketModel"].getBackgroundColorClass;

var TicketAssignmentsManagerModal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TicketAssignmentsManagerModal, _Component);

  function TicketAssignmentsManagerModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TicketAssignmentsManagerModal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TicketAssignmentsManagerModal).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleEditor", function () {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(_this.props.toggleEditor)) {
        if (update && Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(_this.onUpdate)) {
          _this.onUpdate();
        }

        _this.setState({
          assigned: {},
          removed: {},
          submitting: false,
          formError: ''
        });

        _this.props.toggleEditor();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "processChanges", function () {
      _this.setState({
        submitting: true
      });

      _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["processChanges"](_this.props.entities, _this.state.assigned, _this.props.addTicketEntities, _this.state.removed, _this.props.removeTicketEntities).then(function (updates) {
        var wasUpdated = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["filter"])(updates, function (updated) {
          return !!updated;
        });

        _this.toggleEditor(wasUpdated.length > 0);
      }).catch(function (error) {
        warning__WEBPACK_IMPORTED_MODULE_11___default()(false, error);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "assignTicketEntity", function (dateEntity, ticketEntity) {
      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(dateEntity, 'datetime') || !Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
        return;
      }

      _this.setState(function (prevState) {
        var newState = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["assignTicketEntity"](prevState, dateEntity, ticketEntity);
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
          formError: ''
        }, newState);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "removeTicketEntity", function (dateEntity, ticketEntity) {
      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(dateEntity, 'datetime') || !Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
        return;
      }

      _this.setState(function (prevState) {
        var newState = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["removeTicketEntity"](prevState, dateEntity, ticketEntity);
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
          formError: ''
        }, newState);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "countTicketAssignments", function (dateEntities, ticketEntities, ticketEntitiesByDateIds) {
      var dateTickets = [];
      var ticketDateCount = 0;
      var dateTicketCount = 0;
      var noAssignments = 0;
      dateEntities.forEach(function (eventDate) {
        dateTicketCount = 0;
        warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(eventDate, 'datetime'), 'Invalid EE Date model object!');
        dateTickets = ticketEntitiesByDateIds[eventDate.id] ? ticketEntitiesByDateIds[eventDate.id] : [];
        _this.assignmentCounts.dateEntities[eventDate.id] = dateTickets.length;
        ticketEntities.forEach(function (ticket) {
          warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticket, 'ticket'), 'Invalid EE' + ' Ticket model object!');

          if (typeof _this.assignmentCounts.ticketEntities[ticket.id] === 'undefined') {
            _this.assignmentCounts.ticketEntities[ticket.id] = 0;
          }

          var ticketAssignedToDate = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"])(dateTickets, {
            id: ticket.id
          }) > noIndex;

          if (ticketAssignedToDate) {
            dateTicketCount++;
            ticketDateCount++;
            _this.assignmentCounts.ticketEntities[ticket.id]++;
          }
        });

        if (dateTicketCount === 0 && _this.ticketCount > 1 && !_this.state.assigned[eventDate.id]) {
          noAssignments++;
        }
      });

      if (_this.ticketCount === 1 && ticketDateCount > 0) {
        noAssignments = 0;
      }

      return noAssignments;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "ticketHeaders", function (ticketEntities, dateCount) {
      var headerCells = [{
        type: 'row',
        class: '',
        value: ''
      }];

      if (dateCount > 1) {
        headerCells.push({
          type: 'cell',
          class: 'ee-tam-dates-header',
          value: ''
        });
      }

      ticketEntities.forEach(function (ticket) {
        warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticket, 'ticket'), 'Invalid EE Ticket model object!');
        var statusClass = getTicketBgColorClass(ticket);
        statusClass = "ee-tam-ticket-header-status ".concat(statusClass);
        var saleDate = ticket.startDate.toFormat('MMM DD YYYY');
        headerCells.push({
          type: 'cell',
          class: 'ee-tam-ticket-header',
          value: React.createElement("div", {
            className: "ee-tam-ticket-header-div"
          }, React.createElement("div", {
            className: statusClass
          }, React.createElement("span", {
            className: "ee-tam-ticket-header-date"
          }, saleDate)), React.createElement("div", {
            className: "ee-tam-ticket-id"
          }, "#".concat(ticket.id)), React.createElement("div", {
            className: "ee-tam-ticket-header-title"
          }, ticket.name), React.createElement("div", {
            className: "ee-tam-ticket-header-price"
          }, "".concat(ticket.price), React.createElement("span", {
            className: "ee-tam-ticket-header-date"
          }, saleDate)))
        });
      });
      return headerCells;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "dateRows", function (dateEntities, ticketEntities, ticketEntitiesByDateIds, dateCount) {
      var year = 0;
      var dateRows = [];
      dateEntities.forEach(function (eventDate) {
        warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(eventDate, 'datetime'), 'Invalid EE Date model object!');
        var dateYear = parseInt(eventDate.start.toFormat('YYYY'), 10);

        if (dateCount > 1 && dateYear > year) {
          year = dateYear;
          dateRows.push(_this.yearRow(year, ticketEntities));
        }

        var rowData = [{
          type: 'row',
          class: 'ee-tam-date-row',
          value: ''
        }];

        if (dateCount > 1) {
          rowData.push(_this.dateHeader(eventDate));
        }

        var dateTicketEntities = ticketEntitiesByDateIds[eventDate.id] ? ticketEntitiesByDateIds[eventDate.id] : [];
        ticketEntities.forEach(function (ticket) {
          warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticket, 'ticket'), 'Invalid EE Ticket model object!');
          rowData.push(_this.ticketCell(eventDate, ticket, dateTicketEntities));
        });
        dateRows.push(rowData);
      });
      return dateRows;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "yearRow", function (year, ticketEntities) {
      var rowData = [{
        type: 'row',
        value: '',
        class: 'ee-tam-year-row'
      }, {
        type: 'cell',
        value: year,
        class: 'ee-tam-date-label'
      }];
      ticketEntities.forEach(function () {
        rowData.push({
          type: 'cell',
          value: '',
          render: function render(rowNumber, colNumber) {
            return React.createElement("td", {
              key: "row-".concat(rowNumber, "-col-").concat(colNumber),
              className: 'ee-tam-date-row-ticket ee-rTable-body-td'
            });
          }
        });
      });
      return rowData;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "dateHeader", function (dateEntity) {
      return {
        type: 'cell',
        class: 'ee-tam-date-label',
        value: React.createElement("div", {
          className: "ee-tam-date-label-div"
        }, React.createElement("div", {
          className: "ee-tam-date-id"
        }, "#".concat(dateEntity.id)), React.createElement("div", {
          className: "ee-tam-date-label-text"
        }, dateEntity.name), React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["CalendarPageDate"], {
          startDate: dateEntity.start,
          statusClass: getDateBgColorClass(dateEntity),
          size: 'small'
        }))
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "ticketCell", function (dateEntity, ticketEntity, dateTicketEntities) {
      var assigned = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.assigned);

      var removed = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.removed);

      var _this$calculateTotalA = _this.calculateTotalAssignmentCounts(dateEntity, ticketEntity, assigned, removed),
          totalTicketAssignmentsForDate = _this$calculateTotalA.totalTicketAssignmentsForDate,
          totalDateAssignmentsForTicket = _this$calculateTotalA.totalDateAssignmentsForTicket;

      var _this$determineCurren = _this.determineCurrentAssignment(dateEntity, ticketEntity, dateTicketEntities, assigned, removed),
          hasTicket = _this$determineCurren.hasTicket,
          isAssigned = _this$determineCurren.isAssigned,
          isRemoved = _this$determineCurren.isRemoved;

      var _this$getActionModifi = _this.getActionModifiers(hasTicket, isAssigned, isRemoved, totalTicketAssignmentsForDate, totalDateAssignmentsForTicket),
          currentlyAssigned = _this$getActionModifi.currentlyAssigned,
          canRemoveAssignment = _this$getActionModifi.canRemoveAssignment;

      var action = _this.getAction(currentlyAssigned, canRemoveAssignment, totalDateAssignmentsForTicket);

      var assignmentsErrorClass = _this.getAssignmentsErrorClass(totalTicketAssignmentsForDate, totalDateAssignmentsForTicket);

      var _this$getIconAndBgCol = _this.getIconAndBgColor(hasTicket, isAssigned, isRemoved),
          icon = _this$getIconAndBgCol.icon,
          bgColor = _this$getIconAndBgCol.bgColor;

      return {
        type: 'cell',
        class: "ee-tam-date-row-ticket".concat(assignmentsErrorClass),
        value: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
          icon: icon,
          className: bgColor,
          size: 45,
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();
            action(dateEntity, ticketEntity);
          },
          onKeyDown: function onKeyDown(event) {
            if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_13__["ENTER"]) {
              event.preventDefault();
              event.stopPropagation();
              action(dateEntity, ticketEntity);
            }
          }
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "calculateTotalAssignmentCounts", function (dateEntity, ticketEntity, assigned, removed) {
      var ticketCountForDate = _this.assignmentCounts.dateEntities[dateEntity.id];
      var dateCountForTicket = _this.assignmentCounts.ticketEntities[ticketEntity.id];
      var assignedTickets = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["assignedCount"](assigned, null, ticketEntity);
      var removedTickets = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["removedCount"](removed, null, ticketEntity);
      var assignedDates = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["assignedCount"](assigned, dateEntity);
      var removedDates = _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["removedCount"](removed, dateEntity);
      var totalTicketAssignmentsForDate = ticketCountForDate + assignedDates - removedDates;
      var totalDateAssignmentsForTicket = dateCountForTicket + assignedTickets - removedTickets;
      return {
        totalTicketAssignmentsForDate: totalTicketAssignmentsForDate,
        totalDateAssignmentsForTicket: totalDateAssignmentsForTicket
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "determineCurrentAssignment", function (dateEntity, ticketEntity, dateTicketEntities, assigned, removed) {
      return {
        hasTicket: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"])(dateTicketEntities, {
          id: ticketEntity.id
        }) > noIndex,
        isAssigned: _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["isAssigned"](assigned, dateEntity, ticketEntity, true) > noIndex,
        isRemoved: _ticket_assignments_handler__WEBPACK_IMPORTED_MODULE_22__["isRemoved"](removed, dateEntity, ticketEntity, true) > noIndex
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getIconAndBgColor", function (hasTicket, isAssigned, isRemoved) {
      var icon = '';
      var bgColor = 'ee-tam-ticket-relation-button';

      if (hasTicket) {
        if (isRemoved) {
          icon = 'no';
          bgColor += ' ee-tam-remove-ticket-relation';
        } else {
          icon = 'tickets-alt';
          bgColor += ' ee-tam-has-ticket-relation';
        }
      } else if (isAssigned) {
        icon = 'tickets-alt';
        bgColor += ' ee-tam-add-ticket-relation';
      } else {
        icon = 'minus';
        bgColor += ' ee-tam-no-ticket-relation';
      }

      return {
        icon: icon,
        bgColor: bgColor
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getActionModifiers", function (hasTicket, isAssigned, isRemoved, totalTicketAssignmentsForDate, totalDateAssignmentsForTicket) {
      var currentlyAssigned = isAssigned || hasTicket && !isRemoved;
      var canRemoveAssignment = // managing a single date so ignore other dates
      _this.dateCount < 2 && totalTicketAssignmentsForDate > 1 || // managing a single ticket so ignore other tickets
      _this.ticketCount < 2 && totalDateAssignmentsForTicket > 1 || // managing ticket assignments for all tickets and all dates so
      // both need to have more than one assignment to remove this one
      _this.dateCount > 1 && totalTicketAssignmentsForDate > 1 && _this.ticketCount > 1 && totalDateAssignmentsForTicket > 1;
      return {
        currentlyAssigned: currentlyAssigned,
        canRemoveAssignment: canRemoveAssignment
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getAction", function (currentlyAssigned, canRemoveAssignment, totalDateAssignmentsForTicket) {
      var action = currentlyAssigned && canRemoveAssignment ? _this.removeTicketEntity : _this.assignTicketEntity;

      if (currentlyAssigned && !canRemoveAssignment && action === _this.assignTicketEntity) {
        var error = _this.dateCount > 1 && totalDateAssignmentsForTicket === 1 ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Tickets must always have at least one Event Date' + ' assigned to them. If the current assignment is not' + ' correct, assign the correct Event Date first, then' + ' remove others as required.', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Event Dates must always have at least one Ticket' + ' assigned to them. If the current assignment is not' + ' correct, assign the correct Ticket first, then' + ' remove others as required.', 'event_espresso');

        action = function action() {
          return _this.formError(error);
        };
      }

      return action;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getAssignmentsErrorClass", function (totalTicketAssignmentsForDate, totalDateAssignmentsForTicket) {
      return (// dealing with a single date so ignore other dates
        _this.dateCount < 2 && totalTicketAssignmentsForDate === 0 || // dealing with a single ticket so ignore other tickets
        _this.ticketCount < 2 && totalDateAssignmentsForTicket === 0 || // managing ticket assignments for all tickets and all dates so
        // if either are missing assignments then display an error
        _this.dateCount > 1 && _this.ticketCount > 1 && (totalTicketAssignmentsForDate === 0 || totalDateAssignmentsForTicket === 0) ? ' ee-tam-assignments-error' : ''
      );
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "formError", function () {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      _this.setState({
        formError: error
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getFormError", function (noAssignments) {
      var formError = _this.state.formError;

      if (noAssignments > 0) {
        formError = _this.dateCount === 1 ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Event Dates must always have at least one Ticket' + ' assigned to them but one or more of the Event Dates' + ' below does not have any. Please correct the' + ' assignments for the highlighted cells.', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Tickets must always have at least one Event Date' + ' assigned to them but one or more of the Tickets' + ' below does not have any. Please correct the' + ' assignments for the highlighted cells.', 'event_espresso');
      }

      return formError ? React.createElement(FormInfo, {
        formInfo: formError,
        dashicon: 'warning',
        dismissable: true,
        colSize: 10,
        offset: 1
      }) : null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "submitButton", function (processChanges) {
      var FormSubmitButton = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormSubmitButton;
      return React.createElement(FormSubmitButton, {
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          processChanges();

          _this.formError();
        },
        buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Update Ticket Assignments', 'event_espresso'),
        submitting: _this.state.submitting
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "cancelButton", function () {
      var FormCancelButton = _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["twoColumnAdminFormLayout"].FormCancelButton;
      return React.createElement(FormCancelButton, {
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();

          _this.formError();

          _this.toggleEditor();
        }
      });
    });

    _this.state = {
      assigned: {},
      removed: {},
      submitting: false,
      formError: ''
    };
    return _this;
  }
  /**
   * @function
   * @param {boolean} update
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TicketAssignmentsManagerModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          entities = _this$props.entities,
          ticketEntities = _this$props.ticketEntities,
          allDateEntities = _this$props.allDateEntities,
          allTicketEntities = _this$props.allTicketEntities,
          ticketEntitiesByDateIds = _this$props.ticketEntitiesByDateIds,
          onUpdate = _this$props.onUpdate,
          resetRelationsMap = _this$props.resetRelationsMap,
          pagination = _this$props.pagination;
      var dateEntities = entities;
      this.onUpdate = onUpdate;
      this.resetRelationsMap = resetRelationsMap;
      this.dateCount = dateEntities.length;
      this.ticketCount = ticketEntities.length;
      this.assignmentCounts = {
        dateEntities: {},
        ticketEntities: {}
      };
      var noAssignments = this.countTicketAssignments(allDateEntities || dateEntities, allTicketEntities || ticketEntities, ticketEntitiesByDateIds);
      var dateCount = dateEntities.length;
      var tableId = 'ee-ticket-assignments-manager-';

      if (dateCount === 1) {
        tableId += dateEntities[0].id;
      } else {
        tableId += dateCount + '-' + ticketEntities.length;
      }

      return React.createElement(FormWrapper, null, React.createElement(FormSection, null, this.getFormError(noAssignments), React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["ResponsiveTable"], {
        columns: this.ticketHeaders(ticketEntities, dateCount),
        rowData: this.dateRows(dateEntities, ticketEntities, ticketEntitiesByDateIds, dateCount),
        metaData: {
          tableId: tableId,
          tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Ticket Assignments', 'event_espresso'),
          hasRowHeaders: dateCount > 1
        },
        classes: {
          tableClass: 'ee-ticket-assignments-manager'
        }
      }), pagination), React.createElement(FormSaveCancelButtons, {
        submitButton: this.submitButton(this.processChanges),
        cancelButton: this.cancelButton()
      }));
    }
  }]);

  return TicketAssignmentsManagerModal;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(TicketAssignmentsManagerModal, "propTypes", {
  entities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object).isRequired,
  ticketEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object).isRequired,
  ticketEntitiesByDateIds: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  addTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  removeTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  toggleEditor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  allDateEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object),
  allTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object),
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_17__["compose"])([Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_18__["withEditorModal"])({
  title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('Event Date Ticket Assignments', 'event_espresso'),
  customClass: 'ee-event-date-tickets-manager-modal',
  closeButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('close event date tickets manager', 'event_espresso')
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_20__["withSelect"])(function (select, ownProps) {
  var editorOpen = ownProps.editorOpen,
      dateEntity = ownProps.dateEntity,
      allDateEntities = ownProps.allDateEntities,
      ticketEntity = ownProps.ticketEntity,
      allTicketEntities = ownProps.allTicketEntities,
      _ownProps$entities = ownProps.entities,
      entities = _ownProps$entities === void 0 ? [] : _ownProps$entities;
  var _ownProps$initialized = ownProps.initialized,
      initialized = _ownProps$initialized === void 0 ? false : _ownProps$initialized,
      loading = ownProps.loading;
  var dtmProps = {
    loading: loading,
    entities: entities,
    ticketEntities: DEFAULT_EMPTY_ARRAY,
    notice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('loading event date ticket assignments', 'event_espresso')
  };

  if (!editorOpen || initialized) {
    return {
      notice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_15__["__"])('loading event date ticket assignments', 'event_espresso')
    };
  }

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
    dtmProps = {
      entities: [dateEntity],
      ticketEntities: allTicketEntities
    };
    initialized = true;
  } else if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    dtmProps = {
      entities: Object(_dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_24__["sortDateEntitiesList"])(allDateEntities),
      ticketEntities: [ticketEntity]
    };
    initialized = true;
  } else if (Array.isArray(allDateEntities) && Array.isArray(allTicketEntities)) {
    dtmProps = {
      entities: Object(_dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_24__["sortDateEntitiesList"])(allDateEntities),
      ticketEntities: allTicketEntities
    };
    initialized = true;
  }

  var _select = select('eventespresso/core'),
      getRelatedEntities = _select.getRelatedEntities;

  var _select2 = select('core/data'),
      hasFinishedResolution = _select2.hasFinishedResolution;

  var ticketEntitiesByDateIds = {};
  dtmProps.entities.forEach(function (date) {
    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(date, 'datetime')) {
      var relatedTickets = getRelatedEntities(date, 'ticket');
      var ticketRelationsResolved = hasFinishedResolution('eventespresso/core', 'getRelatedEntities', [date, 'ticket']);

      if (ticketRelationsResolved) {
        loading = false;
        ticketEntitiesByDateIds[date.id] = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["uniq"])(relatedTickets);
      }
    }
  });
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, dtmProps, {
    loading: loading,
    ticketEntitiesByDateIds: ticketEntitiesByDateIds,
    initialized: initialized
  });
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_20__["withDispatch"])(function (dispatch) {
  var addTicketEntities = function addTicketEntities(dateEntity, ticketEntities) {
    warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(dateEntity, 'datetime'), 'date is not a BaseEntity of the datetime model.');

    var _dispatch = dispatch('eventespresso/core'),
        createRelations = _dispatch.createRelations;

    return createRelations('datetime', dateEntity.id, 'ticket', ticketEntities);
  };

  var removeTicketEntities = function removeTicketEntities(dateEntity, ticketEntities) {
    warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(dateEntity, 'datetime'), 'date is not a BaseEntity of the datetime model.');

    var _dispatch2 = dispatch('eventespresso/core'),
        removeRelationForEntity = _dispatch2.removeRelationForEntity;

    var relationsRemoved = [];

    if (Array.isArray(ticketEntities)) {
      ticketEntities.forEach(function (ticketEntity) {
        warning__WEBPACK_IMPORTED_MODULE_11___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_21__["isModelEntityOfModel"])(ticketEntity, 'ticket'), 'ticket is not a BaseEntity of the ticket model.');
        relationsRemoved.push(removeRelationForEntity('datetime', dateEntity.id, 'ticket', ticketEntity.id));
      });
    }

    return Promise.all(relationsRemoved);
  };

  return {
    addTicketEntities: addTicketEntities,
    removeTicketEntities: removeTicketEntities
  };
}), _eventespresso_components__WEBPACK_IMPORTED_MODULE_14__["withFormContainerAndPlaceholder"], Object(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_19__["withEntityPagination"])({
  returnAsProp: true,
  entitiesPerPage: 6,
  position: 'bottom'
})])(TicketAssignmentsManagerModal));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-ticket-assignments-manager":"ee-ticket-assignments-manager","ee-tam-dates-header":"ee-tam-dates-header","ee-tam-ticket-header-div":"ee-tam-ticket-header-div","ee-tam-ticket-header-price":"ee-tam-ticket-header-price","ee-tam-ticket-header-status":"ee-tam-ticket-header-status","ee-tam-ticket-header-title":"ee-tam-ticket-header-title","ee-tam-ticket-header-date":"ee-tam-ticket-header-date","ee-tam-date-id":"ee-tam-date-id","ee-tam-ticket-id":"ee-tam-ticket-id","ee-tam-year-row":"ee-tam-year-row","ee-tam-date-label":"ee-tam-date-label","ee-tam-date-row":"ee-tam-date-row","ee-tam-date-label-div":"ee-tam-date-label-div","ee-calendar-page-date-wrapper":"ee-calendar-page-date-wrapper","ee-tam-date-label-text":"ee-tam-date-label-text","ee-tam-date-row-ticket":"ee-tam-date-row-ticket","components-icon-button":"components-icon-button","ee-tam-ticket-relation-button":"ee-tam-ticket-relation-button","dashicon":"dashicon","ee-tam-assignments-error":"ee-tam-assignments-error","ee-tam-no-ticket-relation":"ee-tam-no-ticket-relation","ee-tam-has-ticket-relation":"ee-tam-has-ticket-relation","ee-tam-add-ticket-relation":"ee-tam-add-ticket-relation","ee-tam-remove-ticket-relation":"ee-tam-remove-ticket-relation","ee-rTable":"ee-rTable","ee-rTable-body":"ee-rTable-body","ee-rTable-body-row":"ee-rTable-body-row","ee-rTable-body-td":"ee-rTable-body-td","ee-rTable-mobile-only-column-header":"ee-rTable-mobile-only-column-header","ee-rTable-mobile-only-column-value":"ee-rTable-mobile-only-column-value"};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/with-ticket-assignments-manager-modal.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/with-ticket-assignments-manager-modal.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js");










/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * TicketAssignmentsManagerModal
 * controls toggling of the modal
 * wraps the component that contains the withTicketAssignmentsManagerModal
 *
 * @param {function} modalPropsCallback Overrides for the modal props set on the
 * manager.  This receives `ownProps` as an argument.
 *
 * @return {function} A composed component
 */

var WithTicketAssignmentsManagerModal = function WithTicketAssignmentsManagerModal() {
  var modalPropsCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["createHigherOrderComponent"])(function (OriginalComponent) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(_temp, _Component);

      function _temp(props) {
        var _this;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _temp);

        _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(_temp).call(this, props));

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleManager", function (event) {
          if (event && event.preventDefault) {
            event.preventDefault();
            event.stopPropagation();
          }

          _this.setState(function (prevState) {
            return {
              showManager: !prevState.showManager
            };
          });
        });

        _this.state = {
          showManager: false
        };
        return _this;
      }
      /**
       * opens and closes TicketAssignmentsManagerModal
       *
       * @function
       * @param {Object} event - click event
       */


      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_temp, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              dateEntity = _this$props.dateEntity,
              allDateEntities = _this$props.allDateEntities,
              ticketEntity = _this$props.ticketEntity,
              allTicketEntities = _this$props.allTicketEntities;
          return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, React.createElement(OriginalComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
            ticketAssignmentsIsOpen: this.state.showManager,
            toggleTicketAssignments: this.toggleManager
          })), React.createElement(_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
            modalProps: modalPropsCallback(this.props),
            dateEntity: dateEntity,
            allDateEntities: allDateEntities,
            allTicketEntities: allTicketEntities,
            ticketEntity: ticketEntity,
            editorOpen: this.state.showManager,
            toggleEditor: this.toggleManager
          }));
        }
      }]);

      return _temp;
    }(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]), _temp;
  }, 'withTicketAssignmentsManagerModal');
};

/* harmony default export */ __webpack_exports__["default"] = (WithTicketAssignmentsManagerModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/data/index.js":
/*!********************************************************!*\
  !*** ./assets/src/editor/events/tickets/data/index.js ***!
  \********************************************************/
/*! exports provided: withPriceTypeEntities, withTicketDateEntities, withTicketPriceEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_price_type_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-price-type-entities */ "./assets/src/editor/events/tickets/data/with-price-type-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPriceTypeEntities", function() { return _with_price_type_entities__WEBPACK_IMPORTED_MODULE_0__["withPriceTypeEntities"]; });

/* harmony import */ var _with_ticket_date_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-ticket-date-entities */ "./assets/src/editor/events/tickets/data/with-ticket-date-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketDateEntities", function() { return _with_ticket_date_entities__WEBPACK_IMPORTED_MODULE_1__["withTicketDateEntities"]; });

/* harmony import */ var _with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-ticket-price-entities */ "./assets/src/editor/events/tickets/data/with-ticket-price-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceEntities", function() { return _with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_2__["withTicketPriceEntities"]; });





/***/ }),

/***/ "./assets/src/editor/events/tickets/data/with-price-type-entities.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/data/with-price-type-entities.js ***!
  \***************************************************************************/
/*! exports provided: withPriceTypeEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPriceTypeEntities", function() { return withPriceTypeEntities; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * withPriceTypeEntities
 * returns an object containing the following:
 *    priceTypeEntities - an array of price_type entities
 *    priceTypeEntitiesLoaded - boolean true if loading is complete
 *
 * @function
 */

var withPriceTypeEntities = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select) {
  var _select = select('eventespresso/lists'),
      getEntities = _select.getEntities;

  var priceTypeEntities = getEntities('price_type');

  var _select2 = select('core/data'),
      hasFinishedResolution = _select2.hasFinishedResolution;

  var priceTypeEntitiesLoaded = hasFinishedResolution('eventespresso/lists', 'getEntities', ['price_type']);
  return {
    priceTypeEntities: priceTypeEntities,
    priceTypeEntitiesLoaded: priceTypeEntitiesLoaded
  };
});

/***/ }),

/***/ "./assets/src/editor/events/tickets/data/with-ticket-date-entities.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/data/with-ticket-date-entities.js ***!
  \****************************************************************************/
/*! exports provided: withTicketDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTicketDateEntities", function() { return withTicketDateEntities; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


var EMPTY_OBJECT = {};
/**
 * withTicketDateEntities
 * returns an object containing the following:
 *    dateEntities - an array of datetime entities for the supplied ticket
 *    dateEntitiesLoaded - boolean true if loading is complete
 *
 * @function
 */

var withTicketDateEntities = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(function (select, _ref) {
  var ticketEntity = _ref.ticketEntity;

  var _select = select('eventespresso/core'),
      getRelatedEntities = _select.getRelatedEntities;

  var _select2 = select('core/data'),
      hasFinishedResolution = _select2.hasFinishedResolution;

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    var dateEntities = getRelatedEntities(ticketEntity, 'datetime');
    var dateEntitiesLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntities', [ticketEntity, 'datetime']);

    if (dateEntitiesLoaded) {
      return {
        dateEntitiesLoaded: dateEntitiesLoaded,
        dateEntities: dateEntities
      };
    }
  }

  return EMPTY_OBJECT;
});

/***/ }),

/***/ "./assets/src/editor/events/tickets/data/with-ticket-price-entities.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/data/with-ticket-price-entities.js ***!
  \*****************************************************************************/
/*! exports provided: withTicketPriceEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceEntities", function() { return withTicketPriceEntities; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var EMPTY_OBJECT = {
  noBasePrice: true,
  priceEntitiesLoaded: false,
  priceEntities: []
};
/**
 * withTicketPriceEntities
 * returns an object containing the following:
 *    priceEntities - an array of price entities for the supplied ticket
 *    priceEntitiesLoaded - boolean true if loading is complete
 *    noBasePrice - boolean true if loading is complete but priceEntities is empty
 *
 * @function
 */

var withTicketPriceEntities = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, _ref) {
  var ticketEntity = _ref.ticketEntity;

  var _select = select('eventespresso/core'),
      getRelatedEntities = _select.getRelatedEntities;

  var _select2 = select('core/data'),
      hasFinishedResolution = _select2.hasFinishedResolution;

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    var priceEntities = getRelatedEntities(ticketEntity, 'price');
    var priceEntitiesLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntities', [ticketEntity, 'price']);

    if (priceEntitiesLoaded) {
      return {
        noBasePrice: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceEntities),
        priceEntitiesLoaded: priceEntitiesLoaded,
        priceEntities: priceEntities
      };
    }
  }

  return EMPTY_OBJECT;
});

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/action-handlers/index.js ***!
  \*********************************************************************************/
/*! exports provided: withCopyTicketEntity, withTrashTicketEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_copy_ticket_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-copy-ticket-entity */ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-copy-ticket-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyTicketEntity", function() { return _with_copy_ticket_entity__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _with_trash_ticket_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-trash-ticket-entity */ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-trash-ticket-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashTicketEntity", function() { return _with_trash_ticket_entity__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-copy-ticket-entity.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-copy-ticket-entity.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External imports
 */




var DEFAULT_DISPATCH = {
  copyTicketEntity: function copyTicketEntity() {
    return false;
  }
};
var withCopyTicketEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch, _ref, _ref2) {
  var ticketEntity = _ref.ticketEntity,
      dateEntities = _ref.dateEntities,
      dateEntitiesLoaded = _ref.dateEntitiesLoaded;
  var select = _ref2.select;
  var TICKET = _eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["ticketModel"].MODEL_NAME;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, TICKET)) {
    return DEFAULT_DISPATCH;
  }

  var _dispatch = dispatch('eventespresso/core'),
      createEntity = _dispatch.createEntity,
      createRelations = _dispatch.createRelations;

  var _select = select('eventespresso/core'),
      getRelatedEntities = _select.getRelatedEntities;

  var copyTicketEntity =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newTicket, relatedPrices, newPrices, i, newPrice;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return createEntity(TICKET, ticketEntity.forClone);

            case 2:
              newTicket = _context.sent;

              if (dateEntitiesLoaded) {
                createRelations(TICKET, newTicket.id, 'datetime', dateEntities);
              } // @todo, this is not quite done because it needs to add the relations
              // of the prices to the priceType.
              // get related prices clone, and add.


              relatedPrices = getRelatedEntities(ticketEntity, 'prices');

              if (!relatedPrices) {
                _context.next = 17;
                break;
              }

              newPrices = [];
              i = 0;

            case 8:
              if (!(i < relatedPrices.length)) {
                _context.next = 16;
                break;
              }

              _context.next = 11;
              return createEntity('price', relatedPrices[i].forClone);

            case 11:
              newPrice = _context.sent;
              newPrices.push(newPrice);

            case 13:
              i++;
              _context.next = 8;
              break;

            case 16:
              createRelations(TICKET, newTicket.id, 'price', newPrices);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function copyTicketEntity() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    copyTicketEntity: copyTicketEntity
  };
}), 'withCopyTicketEntity');
/* harmony default export */ __webpack_exports__["default"] = (withCopyTicketEntity);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-trash-ticket-entity.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/action-handlers/with-trash-ticket-entity.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External imports
 */





var _window = window,
    confirm = _window.confirm;
var DEFAULT_DISPATCH = {
  trashTicketEntity: function trashTicketEntity() {
    return false;
  }
};
var withTrashTicketEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withDispatch"])(function (dispatch, _ref) {
  var ticketEntity = _ref.ticketEntity;
  var TICKET = _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].MODEL_NAME;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, TICKET)) {
    return DEFAULT_DISPATCH;
  }

  var trashTicketEntity = function trashTicketEntity() {
    if (!confirm(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Are you sure you want to delete this ticket?', 'event_espresso'))) {
      return DEFAULT_DISPATCH;
    }

    var _dispatch = dispatch('eventespresso/core'),
        trashEntityById = _dispatch.trashEntityById;

    trashEntityById(TICKET, ticketEntity.id);
  };

  return {
    trashTicketEntity: trashTicketEntity
  };
}), 'withTrashTicketEntity');
/* harmony default export */ __webpack_exports__["default"] = (withTrashTicketEntity);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data */ "./assets/src/editor/events/tickets/data/index.js");
/* harmony import */ var _edit_form_with_ticket_entity_form_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-form/with-ticket-entity-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/with-ticket-entity-form-modal.js");
/* harmony import */ var _action_handlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action-handlers */ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/index.js");
/* harmony import */ var _price_calculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_12__);


/**
 * External imports
 */







/**
 * Internal dependencies
 */






 // @todo move the various render components outside of the functional component
// or wrap them with `useCallback` and the appropriate dependencies.
// right now they are regenerated every time EditorTicketActionsMenu is re-rendered.

var EditorTicketActionsMenu = function EditorTicketActionsMenu(_ref) {
  var ticketEntity = _ref.ticketEntity,
      toggleTicketEditor = _ref.toggleTicketEditor,
      _ref$dateEntities = _ref.dateEntities,
      dateEntities = _ref$dateEntities === void 0 ? [] : _ref$dateEntities,
      _ref$dateEntitiesLoad = _ref.dateEntitiesLoaded,
      dateEntitiesLoaded = _ref$dateEntitiesLoad === void 0 ? false : _ref$dateEntitiesLoad,
      _ref$noBasePrice = _ref.noBasePrice,
      noBasePrice = _ref$noBasePrice === void 0 ? false : _ref$noBasePrice,
      copyTicketEntity = _ref.copyTicketEntity,
      trashTicketEntity = _ref.trashTicketEntity,
      toggleTicketAssignments = _ref.toggleTicketAssignments,
      toggleCalculator = _ref.toggleCalculator,
      doRefresh = _ref.doRefresh;

  var mainDropDownMenu = function mainDropDownMenu() {
    return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["DropDownMenu"], {
      tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('ticket main menu', 'event_espresso'),
      tooltipPosition: "top right",
      htmlClass: "editor-ticket-".concat(ticketEntity.id),
      menuItems: [{
        title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('edit ticket', 'event_espresso'),
        icon: 'edit',
        onClick: toggleTicketEditor,
        ticketEntity: ticketEntity
      }, {
        title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('copy ticket', 'event_espresso'),
        icon: 'admin-page',
        onClick: function onClick() {
          return copyTicketEntity(ticketEntity, dateEntities, dateEntitiesLoaded);
        }
      }, {
        title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('trash ticket', 'event_espresso'),
        icon: 'trash',
        onClick: function onClick() {
          return trashTicketEntity(ticketEntity);
        }
      }]
    });
  };

  var assignDatesMenuItem = function assignDatesMenuItem() {
    var tooltip = dateEntitiesLoaded && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(dateEntities) ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('warning! no assigned ticket dates - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('assign ticket to event dates', 'event_espresso');
    return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["IconMenuItem"], {
      index: 2,
      tooltip: tooltip,
      id: "assign-ticket-dates-ticket-".concat(ticketEntity.id),
      htmlClass: 'assign-ticket-dates',
      dashicon: React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["EspressoIcon"], {
        icon: "calendar"
      }),
      tooltipPosition: "top right",
      onClick: toggleTicketAssignments,
      itemCount: dateEntitiesLoaded ? dateEntities.length : null
    });
  };

  var getSidebarMenuItems = function getSidebarMenuItems() {
    var sidebarMenuItems = [];
    sidebarMenuItems.push(mainDropDownMenu());
    sidebarMenuItems.push(React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["IconMenuItem"], {
      index: 1,
      tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('edit ticket details', 'event_espresso'),
      id: "edit-ticket-".concat(ticketEntity.id),
      htmlClass: "edit-ticket",
      dashicon: "edit",
      tooltipPosition: "top right",
      onClick: toggleTicketEditor
    }));
    sidebarMenuItems.push(React.createElement(_price_calculator__WEBPACK_IMPORTED_MODULE_10__["TicketPriceCalculatorMenuItem"], {
      ticketEntity: ticketEntity,
      noBasePrice: noBasePrice,
      doRefresh: doRefresh,
      toggleCalculator: toggleCalculator
    }));
    sidebarMenuItems.push(assignDatesMenuItem());
    /**
     * @todo, This could be fragile because of render execution
     * We should explore implementing a slot/fill pattern here.
     */

    return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])('FHEE__EditorDates__EditorDateSidebar__SidebarMenuItems', sidebarMenuItems, ticketEntity);
  };

  var sidebarMenu = function sidebarMenu(sidebarMenuItems) {
    return sidebarMenuItems.map(function (sidebarMenuItem, index) {
      return sidebarMenuItem && sidebarMenuItem.type && (sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["DropDownMenu"] || sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["EntityActionMenuItem"] || sidebarMenuItem.type === _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["IconMenuItem"] || Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(sidebarMenuItem)) ? React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: index
      }, sidebarMenuItem) : null;
    });
  };

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    return null;
  }

  var sidebarMenuItems = getSidebarMenuItems();
  return ticketEntity && ticketEntity.id ? React.createElement("div", {
    id: "ee-editor-ticket-actions-menu-".concat(ticketEntity.id),
    className: 'ee-editor-ticket-actions-menu'
  }, sidebarMenu(sidebarMenuItems)) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([_price_calculator__WEBPACK_IMPORTED_MODULE_10__["withTicketPriceCalculatorFormModal"], _edit_form_with_ticket_entity_form_modal__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_11__["withTicketAssignmentsManagerModal"])(function (_ref2) {
  var ticketEntity = _ref2.ticketEntity;
  return {
    title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["_x"])('Date Assignments for Ticket:  %1$s', 'Date Assignments for Ticket:  Ticket name', 'event_espresso'), ticketEntity.name),
    closeButtonLabel: null
  };
}), _data__WEBPACK_IMPORTED_MODULE_7__["withTicketDateEntities"], _action_handlers__WEBPACK_IMPORTED_MODULE_9__["withCopyTicketEntity"], _action_handlers__WEBPACK_IMPORTED_MODULE_9__["withTrashTicketEntity"]])(EditorTicketActionsMenu));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js":
/*!******************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js ***!
  \******************************************************************************/
/*! exports provided: EditorTicketActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css":
/*!*******************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js ***!
  \***************************************************************************/
/*! exports provided: TicketEntityForm, withTicketEntityFormModal, ticketEntityFormInputs, ticketEntityFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ticket_entity_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-entity-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketEntityForm", function() { return _ticket_entity_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _with_ticket_entity_form_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-ticket-entity-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/with-ticket-entity-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntityFormModal", function() { return _with_ticket_entity_form_modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ticket_entity_form_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-entity-form-inputs */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-inputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return _ticket_entity_form_inputs__WEBPACK_IMPORTED_MODULE_2__["ticketEntityFormInputs"]; });

/* harmony import */ var _ticket_entity_form_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-entity-form-schema */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return _ticket_entity_form_schema__WEBPACK_IMPORTED_MODULE_3__["ticketEntityFormSchema"]; });






/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-inputs.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-inputs.js ***!
  \***********************************************************************************************/
/*! exports provided: ticketEntityFormInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return ticketEntityFormInputs; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */




/**
 * ticketEntityFormInputs
 * returns an array of inputs corresponding to
 * the properties of the Ticket Entity
 *
 * @function
 * @param {Object} ticketEntity  EE Ticket object
 * @param {Object} calculator TicketPriceCalculatorFormModal
 * @param {Array} exclude  Array of field names to not display inputs for
 * @param {Array} currentValues  Array of input values
 * @param {Object} FormInput Input object to use
 * @param {function} recalculateBasePrice
 * @return {Object} rendered form
 */

var ticketEntityFormInputs = function ticketEntityFormInputs(ticketEntity, calculator) {
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var currentValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var FormInput = arguments.length > 4 ? arguments[4] : undefined;
  var recalculateBasePrice = arguments.length > 5 ? arguments[5] : undefined;

  if (!ticketEntity || ticketEntity && !ticketEntity.id) {
    return null;
  }

  var values = currentValues;
  var prefix = "ee-ticket-".concat(ticketEntity.id);
  var inputs = [];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'TKT_ID') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "id",
      type: "number",
      name: "".concat(prefix, "-id"),
      initialValue: values["".concat(prefix, "-id")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket ID', 'event_espresso'),
      htmlId: "".concat(prefix, "-id"),
      inputWidth: 3,
      required: true,
      min: 0,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'name') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "name",
      type: "text",
      name: "".concat(prefix, "-name"),
      initialValue: values["".concat(prefix, "-name")] || '',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket Label', 'event_espresso'),
      htmlId: "".concat(prefix, "-name"),
      minLength: 3,
      changeListener: function changeListener(value) {
        ticketEntity.name = value;
      },
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'description') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "description",
      type: "textarea",
      name: "".concat(prefix, "-description"),
      initialValue: values["".concat(prefix, "-description")] || '',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'event_espresso'),
      changeListener: function changeListener(value) {
        ticketEntity.description = value;
      },
      htmlId: "".concat(prefix, "-description")
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'price') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "price",
      type: "number",
      name: "".concat(prefix, "-price"),
      initialValue: values["".concat(prefix, "-price")] || null,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket Price', 'event_espresso'),
      htmlId: "".concat(prefix, "-price"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The amount of money charged for this ticket. Leave blank to make this ticket selection free.%sClick the button after the input to use the Ticket Price Calculator (warning: will close this edit form)', 'event_espresso'), ' \n'),
      inputWidth: 3,
      min: 0,
      step: "0.01",
      changeListener: function changeListener(value, prevValue) {
        if (value !== prevValue) {
          ticketEntity.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"](value || 0, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"]);
          recalculateBasePrice();
        }
      },
      afterInput: calculator
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'taxable') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "taxable",
      type: "toggle",
      name: "".concat(prefix, "-taxable"),
      initialValue: values["".concat(prefix, "-taxable")] || false,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket is Taxable', 'event_espresso'),
      htmlId: "".concat(prefix, "-taxable"),
      helpTextIfChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This ticket is taxable. All configured taxes will be' + ' applied to the price of this ticket upon purchase. ', 'event_espresso'),
      helpTextIfNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('click to make this ticket taxable', 'event_espresso'),
      changeListener: function changeListener(value) {
        ticketEntity.taxable = !!value;
      },
      inputWidth: 2
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'start') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "start",
      type: "datetime-local",
      name: "".concat(prefix, "-start"),
      initialValue: values["".concat(prefix, "-start")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket Sales Start', 'event_espresso'),
      htmlId: "".concat(prefix, "-start"),
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["validations"].required,
      inputWidth: 6,
      changeListener: function changeListener(value, prevValue) {
        if (value !== prevValue) {
          ticketEntity.startDate = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["ServerDateTime"](value);
        }
      },
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'end') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "end",
      type: "datetime-local",
      name: "".concat(prefix, "-end"),
      initialValue: values["".concat(prefix, "-end")],
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket Sales End', 'event_espresso'),
      htmlId: "".concat(prefix, "-end"),
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["validations"].required,
      inputWidth: 6,
      changeListener: function changeListener(value, prevValue) {
        if (value !== prevValue) {
          ticketEntity.endDate = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["ServerDateTime"](value);
        }
      },
      required: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'qty') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "qty",
      type: "number",
      name: "".concat(prefix, "-qty"),
      initialValue: values["".concat(prefix, "-qty")] || Infinity,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity', 'event_espresso'),
      htmlId: "".concat(prefix, "-qty"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The maximum number of tickets available for sale. ' + 'Leave blank for no limit.', 'event_espresso'),
      inputWidth: 3,
      changeListener: function changeListener(value) {
        ticketEntity.qty = parseInt(value || -1, 10);
      },
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'sold') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "sold",
      type: "number",
      name: "".concat(prefix, "-sold"),
      initialValue: values["".concat(prefix, "-sold")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sold Count', 'event_espresso'),
      htmlId: "".concat(prefix, "-sold"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity of tickets that have been' + ' sold for this Ticket', 'event_espresso'),
      inputWidth: 3,
      min: 0,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'reserved') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "reserved",
      type: "number",
      name: "".concat(prefix, "-reserved"),
      initialValue: values["".concat(prefix, "-reserved")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reserved Count', 'event_espresso'),
      htmlId: "".concat(prefix, "-reserved"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity of tickets reserved,' + ' but not yet fully purchased', 'event_espresso'),
      inputWidth: 3,
      min: 0,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'uses') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "uses",
      type: "number",
      name: "".concat(prefix, "-uses"),
      initialValue: values["".concat(prefix, "-uses")] || Infinity,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Number of Uses', 'event_espresso'),
      htmlId: "".concat(prefix, "-uses"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Controls the total number of times this ticket can be used, regardless of the number of dates it is assigned to.%sExample: A ticket might have access to 4 different dates, but setting this field to 2 would mean that the ticket could only be used twice. Leave blank for no limit.', 'event_espresso'), '\n'),
      inputWidth: 3,
      changeListener: function changeListener(value) {
        ticketEntity.uses = parseInt(value || -1, 10);
      },
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'required') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "required",
      type: "toggle",
      name: "".concat(prefix, "-required"),
      initialValue: values["".concat(prefix, "-required")] || false,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'event_espresso'),
      htmlId: "".concat(prefix, "-required"),
      helpTextIfChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This ticket is required and must be purchased. It will' + ' appear first in frontend ticket lists.', 'event_espresso'),
      helpTextIfNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('click to make this ticket a required selection.', 'event_espresso'),
      inputWidth: 3,
      changeListener: function changeListener(value) {
        ticketEntity.required = !!value;
      },
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'min') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "min",
      type: "number",
      name: "".concat(prefix, "-min"),
      initialValue: values["".concat(prefix, "-min")] || null,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Minimum Quantity', 'event_espresso'),
      htmlId: "".concat(prefix, "-min"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The minimum quantity that can be selected for this' + ' ticket. Use this to create ticket bundles or graduated' + ' pricing. Leave blank for no minimum.', 'event_espresso'),
      changeListener: function changeListener(value) {
        ticketEntity.min = parseInt(value || 0, 10);
      },
      inputWidth: 3,
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'max') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "max",
      type: "number",
      name: "".concat(prefix, "-max"),
      initialValue: values["".concat(prefix, "-max")] || Infinity,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Maximum Quantity', 'event_espresso'),
      htmlId: "".concat(prefix, "-max"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The maximum quantity that can be selected for this' + ' ticket. Use this to create ticket bundles or graduated' + ' pricing. Leave blank for no maximum.', 'event_espresso'),
      inputWidth: 3,
      changeListener: function changeListener(value) {
        ticketEntity.max = parseInt(value || -1, 10);
      },
      min: 0
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'order') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "order",
      type: "number",
      name: "".concat(prefix, "-order"),
      initialValue: values["".concat(prefix, "-order")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display Order', 'event_espresso'),
      htmlId: "".concat(prefix, "-order"),
      inputWidth: 2,
      changeListener: function changeListener(value) {
        ticketEntity.order = parseInt(value, 10);
      }
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'isDefault') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "isDefault",
      type: "toggle",
      name: "".concat(prefix, "-is-default"),
      initialValue: values["".concat(prefix, "-is-default")] || false,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Ticket', 'event_espresso'),
      htmlId: "".concat(prefix, "-is-default"),
      helpTextIfChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('this is a default ticket and will appear on all new' + ' events', 'event_espresso'),
      helpTextIfNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('click to make this a default ticket for any new events', 'event_espresso'),
      inputWidth: 2,
      changeListener: function changeListener(value) {
        ticketEntity.isDefault = !!value;
      }
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'wpUser') < 0) {
    // @todo this needs to read from the current event author in the loaded
    // editor, and eventually could be a dropdown for selecting the author.
    inputs.push(React.createElement(FormInput, {
      key: "wpUser",
      type: "number",
      name: "".concat(prefix, "-wp-user"),
      initialValue: values["".concat(prefix, "-wp-user")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Ticket', 'event_espresso'),
      htmlId: "".concat(prefix, "-wp-user"),
      helpText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The ID of the admin that created this ticket.', 'event_espresso'),
      inputWidth: 2,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'parent') < 0) {
    // @todo this is mostly a field that was added originally as a way of
    // tracking autosaves/revisions for tickets. Probably should never be
    // an editable field.
    inputs.push(React.createElement(FormInput, {
      key: "parent",
      type: "text",
      name: "".concat(prefix, "-parent"),
      initialValue: values["".concat(prefix, "-parent")] || 0,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Ticket', 'event_espresso'),
      htmlId: "".concat(prefix, "-parent"),
      inputWidth: 2,
      disabled: true
    }));
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(exclude, 'deleted') < 0) {
    inputs.push(React.createElement(FormInput, {
      key: "deleted",
      type: "toggle",
      name: "".concat(prefix, "-deleted"),
      initialValue: values["".concat(prefix, "-deleted")] || false,
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Archived', 'event_espresso'),
      htmlId: "".concat(prefix, "-deleted"),
      helpTextIfChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('this ticket is archived', 'event_espresso'),
      helpTextIfNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('this ticket is NOT archived', 'event_espresso'),
      inputWidth: 2,
      disabled: true
    }));
  }

  return inputs;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-schema.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-schema.js ***!
  \***********************************************************************************************/
/*! exports provided: ticketEntityFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return ticketEntityFormSchema; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External imports
 */

/**
 * returns an object mapping Ticket Entity properties to form prefixs
 *
 * @function
 * @param {Object} ticketEntity
 * @return {Object} rendered form
 */

var ticketEntityFormSchema = function ticketEntityFormSchema(ticketEntity) {
  var _ref;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    return {};
  }

  var prefix = "ee-ticket-".concat(ticketEntity.id);
  return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-id"), ticketEntity.id), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-name"), ticketEntity.name || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-description"), ticketEntity.description || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-qty"), stripInfinity(ticketEntity.qty)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-sold"), ticketEntity.sold || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reserved"), ticketEntity.reserved || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-uses"), stripInfinity(ticketEntity.uses)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-required"), ticketEntity.required || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-min"), ticketEntity.min || null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-max"), stripInfinity(ticketEntity.max)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-price"), ticketEntity.price && ticketEntity.price.amount ? ticketEntity.price.amount.toNumber() : null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-start"), ticketEntity.startDate.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-end"), ticketEntity.endDate.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-taxable"), ticketEntity.taxable || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-order"), ticketEntity.order || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-is-default"), ticketEntity.isDefault || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-wp-user"), ticketEntity.wpUser || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-parent"), ticketEntity.parent || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-deleted"), ticketEntity.deleted || false), _ref;
};

var stripInfinity = function stripInfinity(number) {
  return number !== 'INF' || number !== Infinity ? number : null;
};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./assets/src/editor/events/tickets/editor-ticket/index.js");
/* harmony import */ var _price_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data */ "./assets/src/editor/events/tickets/data/index.js");


/**
 * External imports
 */





/**
 * Internal dependencies
 */





var getFormRows = function getFormRows(ticketEntity, calculator, exclude, currentValues, FormInput, recalculateBasePrice) {
  return Object(___WEBPACK_IMPORTED_MODULE_5__["ticketEntityFormInputs"])(ticketEntity, calculator, exclude, currentValues, FormInput, recalculateBasePrice);
};

var TicketEntityForm = function TicketEntityForm(_ref) {
  var ticketEntity = _ref.ticketEntity,
      _ref$priceEntities = _ref.priceEntities,
      priceEntities = _ref$priceEntities === void 0 ? [] : _ref$priceEntities,
      _ref$priceTypeEntitie = _ref.priceTypeEntities,
      priceTypeEntities = _ref$priceTypeEntitie === void 0 ? [] : _ref$priceTypeEntitie,
      calculator = _ref.calculator,
      submitButton = _ref.submitButton,
      cancelButton = _ref.cancelButton,
      _ref$currentValues = _ref.currentValues,
      currentValues = _ref$currentValues === void 0 ? {} : _ref$currentValues,
      _ref$initialValues = _ref.initialValues,
      initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
      _ref$newObject = _ref.newObject,
      newObject = _ref$newObject === void 0 ? false : _ref$newObject;

  var _useTicketPriceCalcul = Object(_price_calculator__WEBPACK_IMPORTED_MODULE_6__["useTicketPriceCalculators"])(priceTypeEntities),
      calculateTicketBasePrice = _useTicketPriceCalcul.calculateTicketBasePrice; // hooks must be at the top of the function and never change order.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var recalculateBasePrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    calculateTicketBasePrice(ticketEntity.price.toNumber(), priceEntities);
  }, [ticketEntity, priceEntities, calculateTicketBasePrice]); // edit forms for existing objects must have initial values

  if (!newObject && Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(initialValues) || Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(currentValues)) {
    return null;
  }

  var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput,
      FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormSection,
      FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormWrapper,
      FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormSaveCancelButtons,
      FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInfo; // entity properties we don't want to be editable

  var exclude = ['TKT_ID', 'sold', 'reserved', 'order', 'parent', 'deleted', 'wpUser', 'status'];
  var formRows = getFormRows(ticketEntity, calculator, exclude, currentValues, FormInput, recalculateBasePrice);
  formRows.unshift(React.createElement(FormInfo, {
    key: "formInfo",
    formInfo: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('all fields marked with an asterisk are required', 'event_espresso'),
    dismissable: false
  }));
  return ticketEntity && ticketEntity.id ? React.createElement(FormWrapper, null, React.createElement(FormSection, {
    htmlId: "ee-ticket-editor-".concat(ticketEntity.id, "-form-section"),
    children: formRows
  }), React.createElement(FormSaveCancelButtons, {
    htmlClass: "ee-ticket-editor-".concat(ticketEntity.id),
    submitButton: submitButton,
    cancelButton: cancelButton
  })) : null;
};
/**
 * Enhanced TicketEntityForm with FormHandler
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([_data__WEBPACK_IMPORTED_MODULE_7__["withTicketPriceEntities"], _data__WEBPACK_IMPORTED_MODULE_7__["withPriceTypeEntities"], _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["withFormHandler"]])(TicketEntityForm));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/with-ticket-entity-form-modal.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/with-ticket-entity-form-modal.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_form_ticket_entity_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-form/ticket-entity-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form.js");
/* harmony import */ var _edit_form_ticket_entity_form_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-form/ticket-entity-form-schema */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/ticket-entity-form-schema.js");
/* harmony import */ var _price_calculator_ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../price-calculator/ticket-price-calculator-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js");





/**
 * External imports
 */




/**
 * Internal imports
 */




var TicketEntityFormModal = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["withEditorModal"])({
  title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ticket Editor', 'event_espresso'),
  customClass: 'ee-ticket-editor-modal',
  closeButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('close ticket editor', 'event_espresso')
})(function (_ref) {
  var ticketEntity = _ref.ticketEntity,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["ticketEntity"]);

  var loadHandler = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    return Object(_edit_form_ticket_entity_form_schema__WEBPACK_IMPORTED_MODULE_8__["ticketEntityFormSchema"])(ticketEntity);
  }, [ticketEntity]);
  return React.createElement(_edit_form_ticket_entity_form__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    loadHandler: loadHandler,
    submitHandler: null,
    resetHandler: null,
    ticketEntity: ticketEntity
  }, otherProps));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (_ref2) {
    var ticketEntity = _ref2.ticketEntity,
        noBasePrice = _ref2.noBasePrice,
        doRefresh = _ref2.doRefresh,
        toggleCalculator = _ref2.toggleCalculator,
        _ref2$onCloseTicketEd = _ref2.onCloseTicketEditor,
        onCloseTicketEditor = _ref2$onCloseTicketEd === void 0 ? function () {
      return null;
    } : _ref2$onCloseTicketEd,
        _ref2$onOpenTicketEdi = _ref2.onOpenTicketEditor,
        onOpenTicketEditor = _ref2$onOpenTicketEdi === void 0 ? function () {
      return null;
    } : _ref2$onOpenTicketEdi,
        otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["ticketEntity", "noBasePrice", "doRefresh", "toggleCalculator", "onCloseTicketEditor", "onOpenTicketEditor"]);

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
        showEditor = _useState2[0],
        setShowEditor = _useState2[1];

    var toggleTicketEditor = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
      setShowEditor(function (prevShowEditor) {
        return !prevShowEditor;
      });
    }, [ticketEntity]);
    var calculator = React.createElement(_price_calculator_ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_9__["TicketPriceCalculatorMenuItem"], {
      ticketEntity: ticketEntity,
      noBasePrice: noBasePrice,
      onOpenTicketCalculator: toggleTicketEditor,
      toggleCalculator: toggleCalculator,
      onCloseTicketCalculator: toggleTicketEditor,
      doRefresh: doRefresh
    });
    return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, otherProps, {
      ticketEntity: ticketEntity,
      toggleTicketEditor: toggleTicketEditor,
      toggleCalculator: toggleCalculator,
      doRefresh: doRefresh
    })), React.createElement(TicketEntityFormModal, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, otherProps, {
      ticketEntity: ticketEntity,
      editorOpen: showEditor,
      onOpen: onOpenTicketEditor,
      onClose: onCloseTicketEditor,
      toggleEditor: toggleTicketEditor,
      calculator: calculator,
      doRefresh: doRefresh
    })));
  };
}, 'withTicketEntityFormModal'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js ***!
  \***************************************************************************************/
/*! exports provided: default, EditorTicketEntitiesOnlyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesOnlyList", function() { return EditorTicketEntitiesOnlyList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/with-price-type-entities */ "./assets/src/editor/events/tickets/data/with-price-type-entities.js");
/* harmony import */ var _price_calculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js");
/* harmony import */ var _grid_view___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid-view/ */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js");
/* harmony import */ var _list_view___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-view/ */ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js");
/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/index.js");







/**
 * External dependencies
 */






/**
 * Internal dependencies
 */








var FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["twoColumnAdminFormLayout"].FormWrapper,
    FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["twoColumnAdminFormLayout"].FormSaveCancelButtons;

var EditorTicketEntitiesList = function EditorTicketEntitiesList(_ref) {
  var entities = _ref.entities,
      allDateEntities = _ref.allDateEntities,
      addNewTicketEntity = _ref.addNewTicketEntity,
      toggleTicketEditor = _ref.toggleTicketEditor,
      _ref$ticketEntity = _ref.ticketEntity,
      ticketEntity = _ref$ticketEntity === void 0 ? null : _ref$ticketEntity,
      _ref$view = _ref.view,
      view = _ref$view === void 0 ? 'grid' : _ref$view,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(_ref, ["entities", "allDateEntities", "addNewTicketEntity", "toggleTicketEditor", "ticketEntity", "view"]);

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (ticketEntity !== null) {
      toggleTicketEditor();
    }
  }, [ticketEntity]);
  /**
   * @function
   * @return {Object} rendered button
   */

  var addNewTicketEntityButton = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["EspressoButton"], {
      icon: "tickets-alt",
      buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Add New Ticket', 'event_espresso'),
      onClick: addNewTicketEntity
    });
  }, [addNewTicketEntity]);
  return React.createElement(FormWrapper, null, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_9__["EntityList"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, otherProps, {
    entities: entities,
    allDateEntities: allDateEntities,
    EntityGridView: _grid_view___WEBPACK_IMPORTED_MODULE_14__["EditorTicketEntitiesGridView"],
    EntityListView: _list_view___WEBPACK_IMPORTED_MODULE_15__["EditorTicketEntitiesListView"],
    view: view,
    loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["_x"])('loading available tickets%s', 'loading available tickets...', 'event_espresso'), String.fromCharCode(8230))
  })), React.createElement(FormSaveCancelButtons, {
    submitButton: addNewTicketEntityButton
  }));
};

var withNewTicketEntity = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (props) {
    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
        newTicket = _useState2[0],
        setNewTicketEntity = _useState2[1];

    var basePriceTypeEntity = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(props.priceTypeEntities, function (priceType) {
        return priceType.pbtId === 1;
      });
    }, [props.priceTypeEntities]);
    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
      setNewTicketEntity: setNewTicketEntity,
      ticketEntity: newTicket,
      basePriceTypeEntity: basePriceTypeEntity
    }, props));
  };
}, 'withNewTicket');
var createNewTicketEntity = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch, _ref2) {
  var setNewTicketEntity = _ref2.setNewTicketEntity,
      basePriceTypeEntity = _ref2.basePriceTypeEntity;

  var _dispatch = dispatch('eventespresso/core'),
      createEntity = _dispatch.createEntity,
      createRelations = _dispatch.createRelations;

  var addNewTicketEntity =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var newTicket, newBasePrice;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (event && event.preventDefault) {
                event.preventDefault();
                event.stopPropagation();
              }

              _context.next = 3;
              return createEntity('ticket', {});

            case 3:
              newTicket = _context.sent;
              _context.next = 6;
              return createEntity('price', {
                prtId: basePriceTypeEntity.id
              });

            case 6:
              newBasePrice = _context.sent;
              createRelations('ticket', newTicket.id, 'price', [newBasePrice]);
              setNewTicketEntity(newTicket);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addNewTicketEntity(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    addNewTicketEntity: addNewTicketEntity
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([_data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_11__["withPriceTypeEntities"], withNewTicketEntity, Object(_ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_17__["withTicketAssignmentsManagerModal"])(function () {
  return {
    title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Ticket Assignments for All Event Dates', 'event_espresso'),
    closeButtonLabel: null
  };
}), // add ticketAssignments ManagerModal onClose
Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (props) {
    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, props, {
      onCloseTicketEditor: props.toggleTicketAssignments
    }));
  };
}, 'withOnCloseTicketEditor'), _price_calculator__WEBPACK_IMPORTED_MODULE_12__["withTicketPriceCalculatorFormModal"], _edit_form__WEBPACK_IMPORTED_MODULE_13__["withTicketEntityFormModal"], createNewTicketEntity, Object(_filter_bar__WEBPACK_IMPORTED_MODULE_16__["withPaginatedTicketEntitiesListAndFilterBar"])()])(EditorTicketEntitiesList));
/**
 * a trimmed down ticket list: only includes ticket price calculator
 */

var EditorTicketEntitiesOnlyList = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([_data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_11__["withPriceTypeEntities"], withNewTicketEntity, _price_calculator__WEBPACK_IMPORTED_MODULE_12__["withTicketPriceCalculatorFormModal"], _edit_form__WEBPACK_IMPORTED_MODULE_13__["withTicketEntityFormModal"], createNewTicketEntity])(EditorTicketEntitiesList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js ***!
  \****************************************************************************/
/*! exports provided: withTicketEntitiesListFilterBar, withTicketEntitiesListFilterState, withFilteredTicketEntities, withPaginatedTicketEntitiesListAndFilterBar, withPaginatedTicketEntitiesListAndFilterBarAndState, getFilteredTicketEntitiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBar", function() { return withPaginatedTicketEntitiesListAndFilterBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBarAndState", function() { return withPaginatedTicketEntitiesListAndFilterBarAndState; });
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/higher-order-components */ "@eventespresso/higher-order-components");
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-ticket-entities-list-filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterBar", function() { return _with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return _with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["getFilteredTicketEntitiesList"]; });

/* harmony import */ var _with_ticket_entities_list_filter_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-ticket-entities-list-filter-state */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterState", function() { return _with_ticket_entities_list_filter_state__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _with_filtered_ticket_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-filtered-ticket-entities */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-filtered-ticket-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredTicketEntities", function() { return _with_filtered_ticket_entities__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/**
 * External imports
 */


/**
 * Internal dependencies
 */





var withPaginatedTicketEntitiesListAndFilterBar = function withPaginatedTicketEntitiesListAndFilterBar() {
  var paginationConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__["withEntityPagination"])(paginationConfig)]), 'withPaginatedTicketEntitiesListAndFilterBar');
};

var withPaginatedTicketEntitiesListAndFilterBarAndState = function withPaginatedTicketEntitiesListAndFilterBarAndState() {
  var paginationConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_with_ticket_entities_list_filter_state__WEBPACK_IMPORTED_MODULE_3__["default"], _with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_0__["withEntityPagination"])(paginationConfig)]), 'withPaginatedTicketEntitiesListAndFilterBarAndState');
};



/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css":
/*!*****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-entity-list-filter-bar":"ee-entity-list-filter-bar","ee-filter-bar-filter":"ee-filter-bar-filter","ee-show-tickets-filter":"ee-show-tickets-filter","ee-ticket-dates-chained-filter":"ee-ticket-dates-chained-filter"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-bar.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-bar.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);









/**
 * External imports
 */




/**
 * Internal dependencies
 */


/**
 * TicketEntitiesListFilterBar
 * filters for controlling the display of a list of Tickets
 *
 * @param {Function} onShowFilterChange
 * @param {Function} onOrderFilterChange
 * @param {Function} onDisplayFilterChange
 * @return {Object} EditorTicketsListView with added TicketListFilters
 */

var TicketEntitiesListFilterBar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TicketEntitiesListFilterBar, _Component);

  function TicketEntitiesListFilterBar() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TicketEntitiesListFilterBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TicketEntitiesListFilterBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showTickets", function (showTickets, setShowTickets, isChained) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('show', 'event_espresso'),
        className: "espresso-ticket-list-filter-bar-show-select",
        value: showTickets,
        options: [{
          value: 'all',
          label: isChained ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all tickets for above dates', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all tickets for all dates', 'event_espresso')
        }, {
          value: 'on-sale-and-pending',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('all on sale and sale pending', 'event_espresso')
        }, {
          value: 'on-sale-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('on sale tickets only', 'event_espresso')
        }, {
          value: 'pending-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('sale pending tickets only', 'event_espresso')
        }, {
          value: 'next-on-sale-or-pending-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('next on sale or sale pending only', 'event_espresso')
        }, {
          value: 'sold-out-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('sold out tickets only', 'event_espresso')
        }, {
          value: 'above-90-sold',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('tickets with 90% or more sold', 'event_espresso')
        }, {
          value: 'above-75-sold',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('tickets with 75% or more sold', 'event_espresso')
        }, {
          value: 'above-50-sold',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('tickets with 50% or more sold', 'event_espresso')
        }, {
          value: 'below-50-sold',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('tickets with less than 50% sold', 'event_espresso')
        }, {
          value: 'expired-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('expired tickets only', 'event_espresso')
        }, {
          value: 'archived-only',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('archived tickets only', 'event_espresso')
        }],
        onChange: setShowTickets
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "ticketsSortedBy", function (ticketsSortedBy, setTicketsSortedBy) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('sort', 'event_espresso'),
        className: "espresso-ticket-list-filter-bar-order-select",
        value: ticketsSortedBy,
        options: [{
          value: 'chronologically',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('chronologically', 'event_espresso')
        }, {
          value: 'by-name',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by ticket name', 'event_espresso')
        }, {
          value: 'by-id',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by ticket ID', 'event_espresso')
        }, {
          value: 'by-order',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('by custom order', 'event_espresso')
        }],
        onChange: setTicketsSortedBy
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "displayTickets", function (displayTickets, setDisplayTickets) {
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('display', 'event_espresso'),
        className: "espresso-ticket-list-filter-bar-display-select",
        value: displayTickets,
        options: [{
          value: 'start',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ticket sales start date only', 'event_espresso')
        }, {
          value: 'end',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ticket sales end date only', 'event_espresso')
        }, {
          value: 'both',
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ticket sales start and end dates', 'event_espresso')
        }],
        onChange: setDisplayTickets
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "ticketsChained", function (isChained, setIsChained) {
      isChained = !!isChained;
      return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        label: isChained ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('showing tickets for above dates only', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('showing tickets for all event dates', 'event_espresso'),
        icon: isChained ? 'admin-links' : 'editor-unlink',
        onClick: function onClick() {
          return setIsChained(!isChained);
        },
        value: isChained
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TicketEntitiesListFilterBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showTickets = _this$props.showTickets,
          setShowTickets = _this$props.setShowTickets,
          ticketsSortedBy = _this$props.ticketsSortedBy,
          setTicketsSortedBy = _this$props.setTicketsSortedBy,
          displayTicketDate = _this$props.displayTicketDate,
          setDisplayTicketDate = _this$props.setDisplayTicketDate,
          isChained = _this$props.isChained,
          setIsChained = _this$props.setIsChained;
      var showFilter = React.createElement("div", {
        className: "ee-show-tickets-filter ee-filter-bar-filter"
      }, this.showTickets(showTickets, setShowTickets, isChained));
      var sortFilter = React.createElement("div", {
        className: "ee-sort-tickets-filter ee-filter-bar-filter"
      }, this.ticketsSortedBy(ticketsSortedBy, setTicketsSortedBy));
      var displayFilter = React.createElement("div", {
        className: "ee-display-ticket-dates-filter ee-filter-bar-filter"
      }, this.displayTickets(displayTicketDate, setDisplayTicketDate));
      var isChainedFilter = React.createElement("div", {
        className: "ee-ticket-dates-chained-filter ee-filter-bar-filter"
      }, this.ticketsChained(isChained, setIsChained));
      return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, showFilter, isChainedFilter, sortFilter, displayFilter);
    }
  }]);

  return TicketEntitiesListFilterBar;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(TicketEntitiesListFilterBar, "propTypes", {
  showTickets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  ticketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  isChained: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  setShowTickets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  setTicketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  setDisplayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  setIsChained: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (TicketEntitiesListFilterBar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-utils.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-utils.js ***!
  \********************************************************************************************************/
/*! exports provided: filterTicketEntities, sortTicketEntitiesList, searchTicketEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTicketEntities", function() { return filterTicketEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTicketEntitiesList", function() { return sortTicketEntitiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTicketEntities", function() { return searchTicketEntities; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * filterTicketEntities
 * reduces tickets array based on value of the "show" filter
 *
 * @param {Array} ticketEntities    original tickets array
 * @param {string} show    value for the "show" filter
 * @return {Array}         filtered tickets array
 */

var filterTicketEntities = function filterTicketEntities(ticketEntities) {
  var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'on-sale-and-pending';

  switch (show) {
    case 'all':
      return ticketEntities;

    case 'on-sale-and-pending':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isOnSale(ticketEntity) || _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isPending(ticketEntity);
      });

    case 'on-sale-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isOnSale(ticketEntity);
      });

    case 'pending-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isPending(ticketEntity);
      });

    case 'next-on-sale-or-pending-only':
      ticketEntities = filterTicketEntities(ticketEntities);
      ticketEntities = sortTicketEntitiesList(ticketEntities);
      return [Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(ticketEntities)];

    case 'sold-out-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isSoldOut(ticketEntity) || percentSoldAtOrAbove(ticketEntity, 100);
      });

    case 'above-90-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 90);
      });

    case 'above-75-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 75);
      });

    case 'above-50-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 50);
      });

    case 'below-50-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldBelow(ticketEntity, 50);
      });

    case 'expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isExpired(ticketEntity);
      });

    case 'archived-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].isArchived(ticketEntity);
      });
  }

  return ticketEntities;
};
/**
 * filterTicketEntities
 * reduces tickets array based on value of the "order" filter
 *
 * @param {Array} ticketEntities    original tickets array
 * @param {string} order   value for the "order" filter
 * @return {Array}         filtered tickets array
 */

var sortTicketEntitiesList = function sortTicketEntitiesList(ticketEntities) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'chronologically';
  var now = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()();

  switch (order) {
    case 'chronologically':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(ticketEntities, [function (ticketEntity) {
        return ticketEntity && ticketEntity.startDate ? now.isBefore(ticketEntity.startDate) : true;
      }]);
      break;

    case 'by-name':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(ticketEntities, ['name']);
      break;

    case 'by-id':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(ticketEntities, ['id']);
      break;

    case 'by-order':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(ticketEntities, ['order']);
      break;
  }

  return ticketEntities;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @param {number} maxQuantity
 * @return {boolean} true if sold/qty >= maxQuantity
 */

var percentSoldAtOrAbove = function percentSoldAtOrAbove(ticketEntity, maxQuantity) {
  return validSold(ticketEntity) && validFiniteQuantity(ticketEntity) && parseInt(ticketEntity.sold, 10) / parseInt(ticketEntity.qty, 10) >= maxQuantity / 100;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @param {number} maxQuantity
 * @return {boolean} true if sold/qty less than than qty
 */


var percentSoldBelow = function percentSoldBelow(ticketEntity, maxQuantity) {
  return validInfiniteQuantity(ticketEntity) || validSold(ticketEntity) && validFiniteQuantity(ticketEntity) && parseInt(ticketEntity.sold, 10) / parseInt(ticketEntity.qty, 10) < maxQuantity / 100;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid
 */


var validQuantity = function validQuantity(ticketEntity) {
  return typeof ticketEntity.qty === 'string' || typeof ticketEntity.qty === 'number';
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid and NOT infinite
 */


var validFiniteQuantity = function validFiniteQuantity(ticketEntity) {
  return validQuantity(ticketEntity) && ticketEntity.qty !== 'INF' && ticketEntity.qty !== Infinity && parseInt(ticketEntity.qty, 10) > 0;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid and unlimited
 */


var validInfiniteQuantity = function validInfiniteQuantity(ticketEntity) {
  return validQuantity(ticketEntity) && (ticketEntity.qty === 'INF' || ticketEntity.qty === Infinity);
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid
 */


var validSold = function validSold(ticketEntity) {
  return typeof ticketEntity.sold === 'string' || typeof ticketEntity.sold === 'number';
};
/**
 * searchTicketEntities
 * reduces tickets array based on value of the "searchDateName" filter
 *
 * @param {Array} ticketEntities 		original tickets array
 * @param {string} searchText 	value for the "searchTicketName" filter
 * @return {Array} 				filtered tickets array
 */


var searchTicketEntities = function searchTicketEntities(ticketEntities) {
  var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return searchText !== '' ? ticketEntities.filter(function (ticketEntity) {
    return ticketEntity.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
  }) : ticketEntities;
};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-filtered-ticket-entities.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-filtered-ticket-entities.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-ticket-entities-list-filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-bar.js");




/**
 * External imports
 */

/**
 * Internal imports
 */


var withFilteredTicketEntities = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (_ref) {
    var filteredTicketEntities = _ref.filteredTicketEntities,
        ticketEntities = _ref.ticketEntities,
        ticketEntitiesLoaded = _ref.ticketEntitiesLoaded,
        isChained = _ref.isChained,
        showTickets = _ref.showTickets,
        ticketsSortedBy = _ref.ticketsSortedBy,
        otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["filteredTicketEntities", "ticketEntities", "ticketEntitiesLoaded", "isChained", "showTickets", "ticketsSortedBy"]);

    if (ticketEntitiesLoaded) {
      filteredTicketEntities = isChained ? filteredTicketEntities : ticketEntities;
      filteredTicketEntities = Object(_with_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_4__["getFilteredTicketEntitiesList"])(filteredTicketEntities, showTickets, ticketsSortedBy);
    }

    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      allTicketEntities: ticketEntities,
      filteredTicketEntities: filteredTicketEntities,
      ticketEntitiesLoaded: ticketEntitiesLoaded,
      isChained: isChained,
      showTickets: showTickets,
      ticketsSortedBy: ticketsSortedBy
    }, otherProps));
  };
}, 'withFilteredTicketEntities');
/* harmony default export */ __webpack_exports__["default"] = (withFilteredTicketEntities);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-bar.js":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-bar.js ***!
  \***********************************************************************************************************/
/*! exports provided: getFilteredTicketEntitiesList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return getFilteredTicketEntitiesList; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/higher-order-components */ "@eventespresso/higher-order-components");
/* harmony import */ var _eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ticket_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ticket-entities-list-filter-utils */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-utils.js");
/* harmony import */ var _ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ticket-entities-list-filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/ticket-entities-list-filter-bar.js");









/**
 * External imports
 */





/**
 * Internal dependencies
 */



/**
 * filters the tickets list based on the current filter state
 *
 * @param {Array} ticketEntities
 * @param {string} showTickets
 * @param {string} ticketsSortedBy
 * @return {Array} filtered list of tickets
 */

var getFilteredTicketEntitiesList = function getFilteredTicketEntitiesList(ticketEntities, showTickets, ticketsSortedBy) {
  return showTickets && ticketsSortedBy && !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(ticketEntities) ? Object(_ticket_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_12__["sortTicketEntitiesList"])(Object(_ticket_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_12__["filterTicketEntities"])(ticketEntities, showTickets), ticketsSortedBy) : [];
};
/**
 * withTicketEntitiesListFilterBar
 * Higher-Order-Component that wraps an "EntityList" component
 * with an EntityListFilterBar & TicketEntityListFilterBar component
 * that controls how entities are displayed
 *
 * @param {Object} EntityList
 * @return {Object} EntityList with added TicketsListFilterBar
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["createHigherOrderComponent"])(function (EntityList) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(_class, _Component);

      function _class() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _class);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_class).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_class, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              showTickets = _this$props.showTickets,
              setShowTickets = _this$props.setShowTickets,
              ticketsSortedBy = _this$props.ticketsSortedBy,
              setTicketsSortedBy = _this$props.setTicketsSortedBy,
              displayTicketDate = _this$props.displayTicketDate,
              setDisplayTicketDate = _this$props.setDisplayTicketDate,
              isChained = _this$props.isChained,
              setIsChained = _this$props.setIsChained,
              searchTicketName = _this$props.searchTicketName,
              setSearchTicketName = _this$props.setSearchTicketName,
              ticketsPerPage = _this$props.ticketsPerPage,
              setTicketsPerPage = _this$props.setTicketsPerPage,
              ticketsView = _this$props.ticketsView,
              setTicketsListView = _this$props.setTicketsListView,
              setTicketsGridView = _this$props.setTicketsGridView,
              _this$props$prefilter = _this$props.prefiltered,
              prefiltered = _this$props$prefilter === void 0 ? false : _this$props$prefilter,
              entities = _this$props.entities,
              otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["showTickets", "setShowTickets", "ticketsSortedBy", "setTicketsSortedBy", "displayTicketDate", "setDisplayTicketDate", "isChained", "setIsChained", "searchTicketName", "setSearchTicketName", "ticketsPerPage", "setTicketsPerPage", "ticketsView", "setTicketsListView", "setTicketsGridView", "prefiltered", "entities"]);

          var filteredEntities = Object(_ticket_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_12__["searchTicketEntities"])(entities, searchTicketName);
          filteredEntities = prefiltered ? filteredEntities : getFilteredTicketEntitiesList(filteredEntities, showTickets, ticketsSortedBy);
          return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(_eventespresso_higher_order_components__WEBPACK_IMPORTED_MODULE_11__["EntityListFilterBar"], {
            name: "TicketEntityListFilterBar",
            searchText: searchTicketName,
            setSearchText: setSearchTicketName,
            perPage: ticketsPerPage,
            view: ticketsView,
            setPerPage: setTicketsPerPage,
            setListView: setTicketsListView,
            setGridView: setTicketsGridView,
            entityFilters: React.createElement(_ticket_entities_list_filter_bar__WEBPACK_IMPORTED_MODULE_13__["default"], {
              showTickets: showTickets,
              setShowTickets: setShowTickets,
              ticketsSortedBy: ticketsSortedBy,
              setTicketsSortedBy: setTicketsSortedBy,
              displayTicketDate: displayTicketDate,
              setDisplayTicketDate: setDisplayTicketDate,
              isChained: isChained,
              setIsChained: setIsChained
            })
          }), React.createElement(EntityList, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            entities: filteredEntities,
            entitiesPerPage: ticketsPerPage,
            view: ticketsView,
            noResultsText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('no results found (try changing filters)', 'event_espresso'),
            displayTicketDate: displayTicketDate,
            isChained: isChained
          }, otherProps)));
        }
      }]);

      return _class;
    }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"])
  );
}, 'withTicketEntitiesListFilterBar'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-state.js":
/*!*************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/with-ticket-entities-list-filter-state.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * withTicketEntitiesListFilterState
 * Higher-Order-Component that wraps a "TicketsListFilterBar" component
 * in order to provide state management for it and its children
 *
 * @param {Object} WrappedComponent
 * @return {Object} WrappedComponent with added DatesListFilterState
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, ownProps) {
  var _ownProps$showTickets = ownProps.showTickets,
      showTickets = _ownProps$showTickets === void 0 ? 'on-sale-and-pending' : _ownProps$showTickets,
      _ownProps$ticketsSort = ownProps.ticketsSortedBy,
      ticketsSortedBy = _ownProps$ticketsSort === void 0 ? 'chronologically' : _ownProps$ticketsSort,
      _ownProps$displayTick = ownProps.displayTicketDate,
      displayTicketDate = _ownProps$displayTick === void 0 ? 'start' : _ownProps$displayTick,
      _ownProps$isChained = ownProps.isChained,
      isChained = _ownProps$isChained === void 0 ? true : _ownProps$isChained,
      _ownProps$searchTicke = ownProps.searchTicketName,
      searchTicketName = _ownProps$searchTicke === void 0 ? '' : _ownProps$searchTicke,
      _ownProps$ticketsPerP = ownProps.ticketsPerPage,
      ticketsPerPage = _ownProps$ticketsPerP === void 0 ? 6 : _ownProps$ticketsPerP,
      _ownProps$ticketsView = ownProps.ticketsView,
      ticketsView = _ownProps$ticketsView === void 0 ? 'grid' : _ownProps$ticketsView;
  var store = select('eventespresso/filter-state');
  return {
    showTickets: store.getFilter('event-editor-ticket-list', 'showTickets', showTickets),
    ticketsSortedBy: store.getFilter('event-editor-ticket-list', 'ticketsSortedBy', ticketsSortedBy),
    displayTicketDate: store.getFilter('event-editor-ticket-list', 'displayTicketDate', displayTicketDate),
    isChained: store.getFilter('event-editor-ticket-list', 'isChained', isChained),
    searchTicketName: store.getFilter('entity-list', 'searchTicketName', searchTicketName),
    ticketsPerPage: parseInt(store.getFilter('event-editor-ticket-list', 'ticketsPerPage', ticketsPerPage), 10),
    ticketsView: store.getFilter('event-editor-ticket-list', 'ticketsView', ticketsView)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var store = dispatch('eventespresso/filter-state');
  return {
    setShowTickets: function setShowTickets(showTickets) {
      return store.setFilter('event-editor-ticket-list', 'showTickets', showTickets);
    },
    setTicketsSortedBy: function setTicketsSortedBy(ticketsSortedBy) {
      return store.setFilter('event-editor-ticket-list', 'ticketsSortedBy', ticketsSortedBy);
    },
    setDisplayTicketDate: function setDisplayTicketDate(displayTicketDate) {
      return store.setFilter('event-editor-ticket-list', 'displayTicketDate', displayTicketDate);
    },
    setIsChained: function setIsChained(isChained) {
      return store.setFilter('event-editor-ticket-list', 'isChained', !!isChained);
    },
    setSearchTicketName: function setSearchTicketName(searchTicketName) {
      return store.setFilter('entity-list', 'searchTicketName', searchTicketName);
    },
    setTicketsPerPage: function setTicketsPerPage(ticketsPerPage) {
      return store.setFilter('event-editor-ticket-list', 'ticketsPerPage', parseInt(ticketsPerPage, 10));
    },
    setTicketsListView: function setTicketsListView() {
      return store.setFilter('event-editor-ticket-list', 'ticketsView', 'list');
    },
    setTicketsGridView: function setTicketsGridView() {
      return store.setFilter('event-editor-ticket-list', 'ticketsView', 'grid');
    }
  };
})]), 'withTicketEntitiesListFilterState'));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-tickets-list-grid-view":"ee-tickets-list-grid-view","ee-editor-ticket-main":"ee-editor-ticket-main","ee-editor-ticket-details-wrapper-div":"ee-editor-ticket-details-wrapper-div","ee-editor-ticket-name-heading":"ee-editor-ticket-name-heading","ee-inline-edit-text":"ee-inline-edit-text","ee-long-title":"ee-long-title","ee-editor-ticket-desc-div":"ee-editor-ticket-desc-div","ee-ticket-desc-excerpt":"ee-ticket-desc-excerpt","ee-ticket-price":"ee-ticket-price","ee-editor-ticket-details-sold-rsrvd-qty-div":"ee-editor-ticket-details-sold-rsrvd-qty-div","ticket-registrants-label":"ticket-registrants-label","ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-ticket-entity-grid-item */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js");
/* harmony import */ var _editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-ticket-entities-grid-view.css */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css");
/* harmony import */ var _editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_5__);




/**
 * External imports
 */

/**
 * Internal dependencies
 */



/**
 * EditorTicketEntitiesGridView
 * Displays tickets as mobile/finger friendly blocks
 * with the most relevant info visible
 *
 * @function
 * @param {Array} entities    array of JSON objects defining the Tickets
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component}          list of rendered Tickets
 */

var EditorTicketEntitiesGridView = function EditorTicketEntitiesGridView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  htmlClass = htmlClass ? "".concat(htmlClass, " ee-tickets-list-grid-view") : 'ee-tickets-list-list-view';
  return React.createElement("div", {
    className: htmlClass
  }, entities.map(function (ticketEntity) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? React.createElement(_editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: ticketEntity.id,
      ticketEntity: ticketEntity
    }, otherProps)) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorTicketEntitiesGridView);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/with-price-type-entities */ "./assets/src/editor/events/tickets/data/with-price-type-entities.js");
/* harmony import */ var _data_with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/with-ticket-price-entities */ "./assets/src/editor/events/tickets/data/with-ticket-price-entities.js");
/* harmony import */ var _price_calculator_use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../price-calculator/use-ticket-price-calculators */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculators.js");


/**
 * External imports
 */







/**
 * Internal dependencies
 */




var TICKET = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["ticketModel"].MODEL_NAME;
/**
 * EditorTicketDetails
 *
 * @function
 * @param {Object} eventTicket    JSON object defining the Event Ticket
 * @return {string}    ticket details
 */

var EditorTicketDetails = function EditorTicketDetails(_ref) {
  var ticketEntity = _ref.ticketEntity,
      _ref$showDesc = _ref.showDesc,
      showDesc = _ref$showDesc === void 0 ? 'excerpt' : _ref$showDesc,
      _ref$showPrice = _ref.showPrice,
      showPrice = _ref$showPrice === void 0 ? true : _ref$showPrice,
      priceTypeEntities = _ref.priceTypeEntities,
      priceEntities = _ref.priceEntities,
      refreshed = _ref.refreshed;
  // @todo I tried making prices a dependency on the updateTicketPrice hook but for
  // some reason prices never gets updated, so for now using a ref will catch
  // the change in the prices. For future refactor, might want to try and move
  // prices state up.
  var currentPrices = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(priceEntities);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    currentPrices.current = priceEntities;
  }, [priceEntities]);

  var _useTicketPriceCalcul = Object(_price_calculator_use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_9__["default"])(priceTypeEntities),
      calculateTicketBasePrice = _useTicketPriceCalcul.calculateTicketBasePrice;

  var ticketName = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var htmlClass = ticketEntity.name && ticketEntity.name.length > 40 ? 'ee-editor-ticket-name-heading ee-long-title' : 'ee-editor-ticket-name-heading';
    return React.createElement("h1", {
      className: htmlClass
    }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "editor-ticket-name-".concat(ticketEntity.id),
      type: "text",
      value: ticketEntity.name,
      onChange: function onChange(name) {
        ticketEntity.name = name;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Name', 'event_espresso')
    }));
  }, [ticketEntity, refreshed]);
  var ticketDescription = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var htmlClass = showDesc === 'excerpt' ? 'ee-editor-ticket-desc-div ee-ticket-desc-excerpt' : 'ee-editor-ticket-desc-div';
    return React.createElement("div", {
      className: htmlClass
    }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "editor-ticket-desc-".concat(ticketEntity.id),
      type: "textarea",
      value: ticketEntity.description,
      onChange: function onChange(description) {
        ticketEntity.description = description;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Description', 'event_espresso')
    }));
  }, [ticketEntity, showDesc, refreshed]);
  var updateTicketPrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (price) {
    ticketEntity.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["Money"](price, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["SiteCurrency"]);
    calculateTicketBasePrice(price, currentPrices.current, true);
  }, [ticketEntity, refreshed]);
  /**
   * ticketPrice
   *
   * @function
   * @param {Object} ticket JSON object defining the ticket
   * @param {boolean} showPrice
   * @return {string}    ticket price
   */

  var ticketPrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return showPrice ? React.createElement("h2", {
      className: "ee-ticket-price"
    }, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "editor-ticket-price-".concat(ticketEntity.id),
      type: "text",
      value: ticketEntity.price.amount.toNumber(),
      onChange: function onChange(price) {
        updateTicketPrice(price);
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Price', 'event_espresso'),
      valueFormatter: ticketEntity.price.formatter.formatMoney,
      formatterSettings: ticketEntity.price.formatter.settings
    })) : '';
  }, [ticketEntity, showPrice, updateTicketPrice]);
  /**
   * ticketSoldReservedCapacity
   *
   * @function
   * @param {Object} ticketEntity    JSON object defining the ticket
   * @return {string}    ticket details
   */

  var ticketSoldReservedCapacity = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var details = [{
      id: 'ticket-sold',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sold', 'event_espresso'),
      value: ticketEntity.sold
    }, {
      id: 'ticket-reserved',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('reserved', 'event_espresso'),
      value: ticketEntity.reserved
    }, {
      id: 'ticket-qty',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('quantity', 'event_espresso'),
      value: ticketEntity.qty || Infinity,
      editable: {
        type: 'text',
        valueType: 'number',
        onChange: function onChange(qty) {
          ticketEntity.qty = parseInt(qty, 10);
        }
      }
    }, {
      id: 'ticket-registrants',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('registrants', 'event_espresso'),
      value: ticketEntity.sold
    }];
    return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EntityDetailsPanel"], {
      details: details,
      htmlClass: "ee-editor-ticket-details-sold-rsrvd-qty-div"
    });
  }, [ticketEntity, refreshed]);
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["isModelEntityOfModel"])(ticketEntity, TICKET) ? React.createElement("div", {
    className: 'ee-editor-ticket-details-wrapper-div'
  }, ticketName, ticketPrice, ticketDescription, ticketSoldReservedCapacity) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([_data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_7__["withPriceTypeEntities"], _data_with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_8__["withTicketPriceEntities"]])(EditorTicketDetails));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editor-ticket-entity-details */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js");
/* harmony import */ var _actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions-menu/editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");











/**
 * External imports
 */
// import moment from 'moment-timezone';






/**
 * Internal dependencies
 */



var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_13__["ticketModel"].getBackgroundColorClass,
    getTicketStatusTextLabel = _eventespresso_model__WEBPACK_IMPORTED_MODULE_13__["ticketModel"].getTicketStatusTextLabel,
    status = _eventespresso_model__WEBPACK_IMPORTED_MODULE_13__["ticketModel"].status,
    TICKET_STATUS_ID = _eventespresso_model__WEBPACK_IMPORTED_MODULE_13__["ticketModel"].TICKET_STATUS_ID;
/**
 * EditorTicketEntityGridItem
 *
 * @function
 * @param {Object} ticket    JSON object defining the Event Ticket
 * @return {string}        The ticket rendered as a block
 */

var EditorTicketEntityGridItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(EditorTicketEntityGridItem, _Component);

  function EditorTicketEntityGridItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorTicketEntityGridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorTicketEntityGridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "displayTicket", function (ticketEntity, showDate) {
      var sidebarColorClass = 'ee-editor-ticket-calendar-sidebar ';
      sidebarColorClass += getBackgroundColorClass(ticketEntity);
      var ticketStatusID = status(ticketEntity);
      var label = '';

      if (showDate === 'start') {
        label = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sale Started', 'event_espresso');

        if (ticketStatusID === TICKET_STATUS_ID.EXPIRED) {
          label = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sale Ended', 'event_espresso');
        } else if (ticketStatusID === TICKET_STATUS_ID.PENDING) {
          label = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Goes On Sale', 'event_espresso');
        }
      } else if (showDate === 'end') {
        label = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sale Ends', 'event_espresso');

        if (ticketStatusID === TICKET_STATUS_ID.EXPIRED) {
          label = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sale Ended', 'event_espresso');
        }
      }

      var ticketStatus = React.createElement("span", {
        key: 1,
        className: 'ee-status-tag'
      }, getTicketStatusTextLabel(ticketEntity));

      switch (showDate) {
        case 'end':
          var end = ticketEntity.endDate.toFormat('h:mm a');
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["BiggieCalendarDate"], {
            date: ticketEntity.endDate,
            htmlClass: sidebarColorClass,
            headerText: label,
            footerText: [end, ticketStatus],
            position: "right"
          });

        case 'both':
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["CalendarDateRange"], {
            startDate: ticketEntity.startDate,
            endDate: ticketEntity.endDate,
            htmlClass: sidebarColorClass,
            headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sale Date', 'event_espresso'),
            footerText: ticketStatus,
            position: "right"
          });

        case 'start':
        default:
          var start = ticketEntity.startDate.toFormat('h:mm a');
          return React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["BiggieCalendarDate"], {
            date: ticketEntity.startDate,
            htmlClass: sidebarColorClass,
            headerText: label,
            footerText: [start, ticketStatus],
            position: "right"
          });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorTicketEntityGridItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ticketEntity = _this$props.ticketEntity,
          allDateEntities = _this$props.allDateEntities,
          dateTicketEntityMap = _this$props.dateTicketEntityMap,
          _this$props$displayTi = _this$props.displayTicketDate,
          displayTicketDate = _this$props$displayTi === void 0 ? 'start' : _this$props$displayTi,
          doRefresh = _this$props.doRefresh,
          refreshed = _this$props.refreshed;

      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_14__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
        return null;
      }

      var dateStyleClass = displayTicketDate === 'both' ? 'ee-editor-date-range' : 'ee-editor-date-single';
      return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, React.createElement("div", {
        className: "ee-editor-ticket-main ".concat(dateStyleClass)
      }, React.createElement(_editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_15__["default"], {
        ticketEntity: ticketEntity,
        refreshed: refreshed
      }), this.displayTicket(ticketEntity, displayTicketDate)), React.createElement(_actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_16__["default"], {
        ticketEntity: ticketEntity,
        allDateEntities: allDateEntities,
        dateTicketEntityMap: dateTicketEntityMap,
        doRefresh: doRefresh
      }));
    }
  }]);

  return EditorTicketEntityGridItem;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])([function (WrappedComponent) {
  return function (props) {
    var _useReducer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["useReducer"])(function (s) {
      return s + 1;
    }, 0),
        _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),
        refreshed = _useReducer2[0],
        doRefresh = _useReducer2[1];

    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      doRefresh: doRefresh,
      refreshed: refreshed
    }));
  };
}, _eventespresso_components__WEBPACK_IMPORTED_MODULE_12__["withEntityPaperFrame"]])(EditorTicketEntityGridItem));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js ***!
  \***************************************************************************/
/*! exports provided: EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-entity-details */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-ticket-entity-grid-item */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _editor_ticket_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-ticket-entities-grid-view */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _editor_ticket_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/index.js ***!
  \*****************************************************************/
/*! exports provided: EditorTicketEntitiesList, EditorTicketEntitiesOnlyList, withCopyTicketEntity, withTrashTicketEntity, EditorTicketActionsMenu, TicketEntityForm, withTicketEntityFormModal, ticketEntityFormInputs, ticketEntityFormSchema, withTicketEntitiesListFilterBar, withTicketEntitiesListFilterState, withFilteredTicketEntities, withPaginatedTicketEntitiesListAndFilterBar, withPaginatedTicketEntitiesListAndFilterBarAndState, getFilteredTicketEntitiesList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntityListItem, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-handlers */ "./assets/src/editor/events/tickets/editor-ticket/action-handlers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyTicketEntity", function() { return _action_handlers__WEBPACK_IMPORTED_MODULE_0__["withCopyTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashTicketEntity", function() { return _action_handlers__WEBPACK_IMPORTED_MODULE_0__["withTrashTicketEntity"]; });

/* harmony import */ var _actions_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _actions_menu__WEBPACK_IMPORTED_MODULE_1__["EditorTicketActionsMenu"]; });

/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketEntityForm", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["TicketEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntityFormModal", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["withTicketEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["ticketEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_2__["ticketEntityFormSchema"]; });

/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withTicketEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withTicketEntitiesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredTicketEntities", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withFilteredTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withPaginatedTicketEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBarAndState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["withPaginatedTicketEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_3__["getFilteredTicketEntitiesList"]; });

/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_4__["EditorTicketEntitiesGridView"]; });

/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityListItem", function() { return _list_view__WEBPACK_IMPORTED_MODULE_5__["EditorTicketEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _list_view__WEBPACK_IMPORTED_MODULE_5__["EditorTicketEntitiesListView"]; });

/* harmony import */ var _editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-ticket-entities-list */ "./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesOnlyList", function() { return _editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_6__["EditorTicketEntitiesOnlyList"]; });









/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-tickets-list-list-view":"ee-tickets-list-list-view","ee-editor-ticket-list-view-div":"ee-editor-ticket-list-view-div","ee-editor-ticket-list-items":"ee-editor-ticket-list-items","ee-ticket-list-item":"ee-ticket-list-item","ee-infinity-sign":"ee-infinity-sign","dashicons":"dashicons","ee-ticket-list-item-label":"ee-ticket-list-item-label","ee-ticket-list-item-value":"ee-ticket-list-item-value","ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu","ee-dropdown-menu-div":"ee-dropdown-menu-div"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_ticket_entity_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-ticket-entity-list-item */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entity-list-item.js");
/* harmony import */ var _editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-ticket-entities-list-view.css */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css");
/* harmony import */ var _editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_5__);




/**
 * External imports
 */

/**
 * Internal dependencies
 */



/**
 * EditorTicketsListView
 * Displays tickets in a standard list table like view
 *
 * @function
 * @param {Array} entities 	array of JSON objects defining the Event Dates
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component} 			list of rendered Event Dates
 */

var EditorTicketEntitiesListView = function EditorTicketEntitiesListView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  htmlClass = htmlClass ? "".concat(htmlClass, " ee-tickets-list-list-view") : 'ee-tickets-list-list-view';
  return React.createElement("div", {
    className: htmlClass
  }, React.createElement("div", {
    key: 0,
    className: "ee-editor-ticket-list-items"
  }, React.createElement("div", {
    className: "ee-ticket-list-item"
  }), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ID', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Name', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Start Date', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('End Date', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sold', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reserved', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Capacity', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Registrants', 'event_espresso')), React.createElement("div", {
    className: "ee-ticket-list-item"
  }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Actions', 'event_espresso'))), entities.map(function (ticketEntity) {
    return React.createElement(_editor_ticket_entity_list_item__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: ticketEntity.id,
      ticketEntity: ticketEntity
    }, otherProps));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorTicketEntitiesListView);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entity-list-item.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entity-list-item.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions-menu/editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");











/**
 * External imports
 */




/**
 * Internal dependencies
 */


var TICKET = _eventespresso_model__WEBPACK_IMPORTED_MODULE_11__["ticketModel"].MODEL_NAME,
    getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_11__["ticketModel"].getBackgroundColorClass;
/**
 * EditorDateGridBlock
 *
 * @function
 * @param {Object} ticket    JSON object defining the Ticket
 * @return {string}        The ticket rendered as a block
 */

var EditorTicketEntityListItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(EditorTicketEntityListItem, _Component);

  function EditorTicketEntityListItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorTicketEntityListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorTicketEntityListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getTicketStatusClass", function (ticketEntity) {
      switch (ticketEntity.status) {
        case 'TKS':
          return 'ee-ticket-status-sold-out';

        case 'TKE':
          return 'ee-ticket-status-expired';

        case 'TKP':
          return 'ee-ticket-status-pending';

        case 'TKO':
          return 'ee-ticket-status-on-sale';

        case 'TKA':
          return 'ee-ticket-status-archived';
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorTicketEntityListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ticketEntity = _this$props.ticketEntity,
          allDateEntities = _this$props.allDateEntities,
          dateTicketEntityMap = _this$props.dateTicketEntityMap,
          doRefresh = _this$props.doRefresh;

      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__["isModelEntityOfModel"])(ticketEntity, TICKET)) {
        return null;
      }

      var statusClass = this.getTicketStatusClass(ticketEntity);
      var bgClass = getBackgroundColorClass(ticketEntity);
      var qty = ticketEntity.qty === 'INF' || ticketEntity.qty === Infinity ? React.createElement("span", {
        className: 'ee-infinity-sign'
      }, "\u221E") : ticketEntity.qty;
      return React.createElement("div", {
        id: "ee-editor-ticket-list-view-div-".concat(ticketEntity.id),
        className: "ee-editor-ticket-list-view-div ".concat(statusClass)
      }, React.createElement("div", {
        className: "ee-editor-ticket-list-items"
      }, React.createElement("div", {
        className: "".concat(bgClass, " ee-ticket-list-item")
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Name:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.name)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ID:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.id)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Name:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.name)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Start Date:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.startDate.toFormat('ddd MMM YY h:mm a'))), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('End Date:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.endDate.toFormat('ddd MMM YY h:mm a'))), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Sold:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.sold)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Reserved:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.reserved)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Quantity:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, qty)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Registrants:', 'event_espresso')), React.createElement("span", {
        className: "ee-ticket-list-item-value"
      }, ticketEntity.regCount)), React.createElement("div", {
        className: "ee-ticket-list-item"
      }, React.createElement("span", {
        className: "ee-ticket-list-item-label"
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Actions:', 'event_espresso')), React.createElement(_actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ticketEntity: ticketEntity,
        allDateEntities: allDateEntities,
        dateTicketEntityMap: dateTicketEntityMap,
        doRefresh: doRefresh
      }))), React.createElement("div", {
        className: 'clear-float'
      }));
    }
  }]);

  return EditorTicketEntityListItem;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = ((function (WrappedComponent) {
  return function (props) {
    var _useReducer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["useReducer"])(function (s) {
      return s + 1;
    }, 0),
        _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),
        doRefresh = _useReducer2[1];

    var refresher = function refresher() {
      doRefresh({});
    };

    return React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      doRefresh: refresher
    }));
  };
})(EditorTicketEntityListItem));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/index.js ***!
  \***************************************************************************/
/*! exports provided: EditorTicketEntityListItem, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_entity_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-entity-list-item */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entity-list-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityListItem", function() { return _editor_ticket_entity_list_item__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_ticket_entities_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-ticket-entities-list-view */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _editor_ticket_entities_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js ***!
  \**************************************************************************************/
/*! exports provided: TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX", function() { return TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX; });
var TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX = 'ee-ticket-price-calculator';

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js ***!
  \**********************************************************************************/
/*! exports provided: TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX, useTicketPriceCalculators, parseMoneyValue, useTicketPriceCalculatorFormDecorator, TicketPriceCalculatorForm, shortenCuid, ticketPriceCalculatorFormDataMap, withTicketPriceCalculatorFormModal, TicketPriceCalculatorMenuItemWithModal, TicketPriceCalculatorMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"]; });

/* harmony import */ var _use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-ticket-price-calculators */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculators", function() { return _use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-decorator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculator-form-decorator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseMoneyValue", function() { return _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_2__["parseMoneyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormDecorator", function() { return _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ticket_price_calculator_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-price-calculator-form */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorForm", function() { return _ticket_price_calculator_form__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ticket_price_calculator_form_data_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-price-calculator-form-data-map */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-data-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortenCuid", function() { return _ticket_price_calculator_form_data_map__WEBPACK_IMPORTED_MODULE_4__["shortenCuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketPriceCalculatorFormDataMap", function() { return _ticket_price_calculator_form_data_map__WEBPACK_IMPORTED_MODULE_4__["ticketPriceCalculatorFormDataMap"]; });

/* harmony import */ var _with_ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-ticket-price-calculator-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/with-ticket-price-calculator-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceCalculatorFormModal", function() { return _with_ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-price-calculator-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorMenuItemWithModal", function() { return _ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorMenuItem", function() { return _ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_6__["TicketPriceCalculatorMenuItem"]; });









/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css":
/*!***********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-ticket-price-calculator":"ee-ticket-price-calculator","col-0":"col-0","col-1":"col-1","col-2":"col-2","col-3":"col-3","col-4":"col-4","col-5":"col-5","ee-rTable-body-td":"ee-rTable-body-td","ee-ticket-price-calculator-price-actions":"ee-ticket-price-calculator-price-actions","components-icon-button":"components-icon-button","ee-ticket-price-calculator-amount":"ee-ticket-price-calculator-amount","ee-sign-before":"ee-sign-before","ee-sign-after":"ee-sign-after","ee-ticket-price-calculator-total-label":"ee-ticket-price-calculator-total-label","col-form-label":"col-form-label","ee-rTable-footer":"ee-rTable-footer","ee-ticket-price-calculator-total-row":"ee-ticket-price-calculator-total-row","ee-ticket-price-calculator-total":"ee-ticket-price-calculator-total","ee-currency-sign":"ee-currency-sign","ee-money-field":"ee-money-field","ee-percent-field":"ee-percent-field","ee-curSign-2":"ee-curSign-2","ee-curSign-3":"ee-curSign-3","ee-curSign-4":"ee-curSign-4","ee-percent-sign":"ee-percent-sign","ee-add-price-modifier-btn":"ee-add-price-modifier-btn","ee-tpc-new-modifier-update":"ee-tpc-new-modifier-update","shake":"shake","ee-rTable":"ee-rTable","ee-rTable-body":"ee-rTable-body","ee-ticket-price-calculator-price-row":"ee-ticket-price-calculator-price-row","ee-rTable-mobile-only-column-header":"ee-rTable-mobile-only-column-header","ee-rTable-mobile-only-column-value":"ee-rTable-mobile-only-column-value","ee-number-column":"ee-number-column","ee-ticket-price-calculator-add-price-id":"ee-ticket-price-calculator-add-price-id","ee-ticket-price-calculator-add-price-actions":"ee-ticket-price-calculator-add-price-actions","ee-ticket-price-calculator-add-price-row":"ee-ticket-price-calculator-add-price-row","ee-rTable-body-row":"ee-rTable-body-row","ee-rTable-footer-row":"ee-rTable-footer-row","ee-ticket-price-calculator-total-actions":"ee-ticket-price-calculator-total-actions"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-data-map.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-data-map.js ***!
  \******************************************************************************************************************/
/*! exports provided: shortenCuid, ticketPriceCalculatorFormDataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenCuid", function() { return shortenCuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketPriceCalculatorFormDataMap", function() { return ticketPriceCalculatorFormDataMap; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/**
 * External imports
 */



/**
 * @function
 * @param {Object} formData
 * @param {Object} ticketEntity
 * @return {Object} form data
 */

var buildTicketDataMap = function buildTicketDataMap(formData, ticketEntity) {
  formData.ticketID = ticketEntity.id;
  formData.ticketIsTaxable = ticketEntity.taxable;
  formData.ticketTotal = ticketEntity.price && ticketEntity.price.amount ? ticketEntity.price.formatter.formatNumber(ticketEntity.price.amount.toNumber()) : null;
  return formData;
};
/**
 * @function
 * @param {Object} formData
 * @param {Object} ticketEntity
 * @param {Array} priceEntities
 * @return {Object} form data
 */


var buildPricesDataMap = function buildPricesDataMap(formData, ticketEntity, priceEntities) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceEntities) || priceEntities.length === 0) {
    return {};
  }

  var prefix = _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"];
  prefix += '-ticket-' + ticketEntity.id + '-price';
  var priceIDs = [];
  var priceTypes = [];
  priceEntities.forEach(function (priceEntity) {
    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(priceEntity, 'price')) {
      var priceId = shortenCuid(priceEntity.id);
      priceIDs.push(priceId);
      priceTypes.push(priceEntity.prtId);
      var pricePrefix = "".concat(prefix, "-").concat(priceId);
      formData["".concat(pricePrefix, "-id")] = priceId;
      formData["".concat(pricePrefix, "-type")] = parseInt(priceEntity.prtId, 10);
      formData["".concat(pricePrefix, "-name")] = priceEntity.name || '';
      formData["".concat(pricePrefix, "-desc")] = priceEntity.desc || '';
      formData["".concat(pricePrefix, "-amount")] = priceEntity.amount && priceEntity.amount.amount ? priceEntity.amount.formatter.formatNumber(priceEntity.amount.amount.toNumber()) : 0;
    }
  });
  formData.priceIDs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceIDs) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceIDs) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(priceIDs).join() : '';
  formData.priceTypes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceTypes) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceTypes) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(priceTypes).join() : '';
  return formData;
};
/**
 * @function
 * @param {string} cuid
 * @return {string} cuid snippet
 */


var shortenCuid = function shortenCuid(cuid) {
  if (cuid.hasOwnProperty('length') && cuid.length > 18) {
    // use a smaller more unique portion of the CUID
    return cuid.substring(12, 18);
  }

  return cuid;
};
/**
 * @function
 * @param {Object} ticketEntity
 * @param {Array} priceEntities
 * @param {boolean} reverseCalculate
 * @return {Object} form data
 */

var ticketPriceCalculatorFormDataMap = function ticketPriceCalculatorFormDataMap(ticketEntity, priceEntities, reverseCalculate) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
    return {};
  }

  var formData = {};
  formData = buildTicketDataMap(formData, ticketEntity);
  formData = buildPricesDataMap(formData, ticketEntity, priceEntities);
  formData.reverseCalculate = !!reverseCalculate;
  return formData;
};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/* harmony import */ var _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-decorator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculator-form-decorator.js");
/* harmony import */ var _ticket_price_calculator_form_data_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ticket-price-calculator-form-data-map */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-data-map.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_19__);









/**
 * External imports
 */









/**
 * Internal dependencies
 */





var TICKET = _eventespresso_model__WEBPACK_IMPORTED_MODULE_12__["ticketModel"].MODEL_NAME;
var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_12__["priceTypeModel"].BASE_PRICE_TYPES;
var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].FormInfo,
    FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].InputLabel,
    FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].FormWrapper,
    FormSaveCancelButtons = _eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["twoColumnAdminFormLayout"].FormSaveCancelButtons;
/**
 * TicketPriceCalculatorForm
 *
 * @constructor
 */

var TicketPriceCalculatorForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TicketPriceCalculatorForm, _Component);

  function TicketPriceCalculatorForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TicketPriceCalculatorForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TicketPriceCalculatorForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "buildPriceTypeOptions", function (priceTypeEntities) {
      var priceTypeOptions = [];

      for (var i = 0; i < priceTypeEntities.length; i++) {
        var priceTypeEntity = priceTypeEntities[i];

        if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__["isModelEntityOfModel"])(priceTypeEntity, 'price_type')) {
          priceTypeOptions.push({
            value: priceTypeEntity.id,
            label: priceTypeEntity.name
          });
        }
      }

      return priceTypeOptions;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getPriceType", function (priceTypeId) {
      priceTypeId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15__["normalizeEntityId"])(priceTypeId);
      var priceTypeEntity = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(_this.priceTypeEntities, ['id', priceTypeId]);

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__["isModelEntityOfModel"])(priceTypeEntity, 'price_type')) {
        return priceTypeEntity;
      }

      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(_this.priceTypeEntities);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "signB4", function () {
      return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"].signB4 ? ' ee-sign-before' : ' ee-sign-after';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "signChars", function () {
      return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"].sign.length > 1 ? ' ee-curSign-' + _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"].sign.length : '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "currencySign", function () {
      var signClass = 'ee-currency-sign';
      signClass += _this.signB4() + _this.signChars();
      return React.createElement("div", {
        className: signClass
      }, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"].sign);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "percentSign", function () {
      var signClass = 'ee-percent-sign';
      signClass += _this.signB4() + _this.signChars();
      return React.createElement("div", {
        className: signClass
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('%', 'event_espresso'));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "modifierSign", function (priceTypeEntity) {
      return priceTypeEntity && priceTypeEntity.isPercent ? _this.percentSign() : _this.currencySign();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "amountClass", function () {
      var priceTypeEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return priceTypeEntity && priceTypeEntity.isPercent ? "ee-percent-field".concat(_this.signB4()).concat(_this.signChars()) : "ee-money-field".concat(_this.signB4()).concat(_this.signChars());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "formHeader", function () {
      return [{
        type: 'row',
        class: 'ee-ticket-price-calculator-header-row',
        value: ''
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-id ee-number-column',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ID', 'event_espresso')
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-type',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Price Type', 'event_espresso')
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-name',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Label', 'event_espresso')
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-desc',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Description', 'event_espresso')
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-amount ' + 'ee-number-column ' + _this.signB4(),
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Amount', 'event_espresso')
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-actions',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Actions', 'event_espresso')
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getDefaultPriceTypeId", function () {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["first"])(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["filter"])(_this.priceTypeEntities, function (priceTypeEntity) {
        return priceTypeEntity.id !== 1;
      })).id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "priceModifierRow", function (ticketEntity, ticketPrefix, values, priceEntity, priceTypeOptions, lastRow) {
      var priceId = Object(_ticket_price_calculator_form_data_map__WEBPACK_IMPORTED_MODULE_18__["shortenCuid"])(priceEntity.id);
      var prefix = "".concat(ticketPrefix, "-price-").concat(priceId);
      var priceTypeId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15__["normalizeEntityId"])(values["".concat(prefix, "-type")]) || 0;

      var priceTypeEntity = _this.getPriceType(priceTypeId);

      return [{
        type: 'row',
        class: 'ee-ticket-price-calculator-price-row',
        value: ''
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-id ee-number-column',
        value: React.createElement(FormInput, {
          key: "id",
          type: "text",
          name: "".concat(prefix, "-id"),
          htmlId: "".concat(prefix, "-id"),
          value: values["".concat(prefix, "-id")],
          disabled: true
        })
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-type',
        value: React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(InputLabel, {
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Price Type', 'event_espresso'),
          htmlFor: "".concat(prefix, "-type"),
          htmlClass: "ee-hidden-label"
        }), React.createElement(FormInput, {
          key: "type",
          type: "select",
          name: "".concat(prefix, "-type"),
          value: priceTypeId,
          options: priceTypeOptions,
          htmlId: "".concat(prefix, "-type"),
          changeListener: function changeListener(value) {
            priceEntity.prtId = value ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_15__["normalizeEntityId"])(value) : _this.getDefaultPriceTypeId();
          },
          disabled: priceEntity.prtId === BASE_PRICE_TYPES.BASE_PRICE
        }))
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-name',
        value: React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(InputLabel, {
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Label', 'event_espresso'),
          htmlFor: "".concat(prefix, "-name"),
          htmlClass: "ee-hidden-label"
        }), React.createElement(FormInput, {
          key: "name",
          type: "text",
          name: "".concat(prefix, "-name"),
          htmlId: "".concat(prefix, "-name"),
          value: values["".concat(prefix, "-name")] || '',
          changeListener: function changeListener(value) {
            return priceEntity.name = value;
          }
        }))
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-desc',
        value: React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(InputLabel, {
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Description', 'event_espresso'),
          htmlFor: "".concat(prefix, "-desc"),
          htmlClass: "ee-hidden-label"
        }), React.createElement(FormInput, {
          key: "desc",
          type: "textarea",
          name: "".concat(prefix, "-desc"),
          htmlId: "".concat(prefix, "-desc"),
          value: values["".concat(prefix, "-desc")] || '',
          changeListener: function changeListener(value) {
            return priceEntity.desc = value;
          }
        }))
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-amount ee-number-column',
        value: React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, React.createElement(InputLabel, {
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Amount', 'event_espresso'),
          htmlFor: "".concat(prefix, "-amount"),
          htmlClass: "ee-hidden-label"
        }), _this.modifierSign(priceTypeEntity), React.createElement(FormInput, {
          key: "price",
          type: "text",
          name: "".concat(prefix, "-amount"),
          htmlId: "".concat(prefix, "-amount"),
          htmlClass: _this.amountClass(priceTypeEntity),
          value: priceEntity.amount.formatter.formatNumber(Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(values["".concat(prefix, "-amount")] || 0)),
          changeListener: function changeListener(value, previous) {
            if (parseFloat(value) !== parseFloat(previous)) {
              priceEntity.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["Money"](Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(value), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"]);
            }
          },
          disabled: priceEntity.prtId === BASE_PRICE_TYPES.BASE_PRICE && values.reverseCalculate === true,
          format: function format(value) {
            return priceEntity.amount.formatter.formatNumber(Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(value));
          },
          formatOnBlur: true
        }))
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-actions',
        value: _this.getModifierActionButtons(priceTypeEntity, priceEntity, ticketEntity, prefix, values, lastRow)
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getModifierActionButtons", function (priceTypeEntity, priceEntity, ticketEntity, prefix, values, lastRow) {
      var addModifier = lastRow ? React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        position: 'top left',
        text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('click to add price modifier', 'event_espresso')
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        "aria-label": Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('click to add price modifier', 'event_espresso'),
        icon: "plus-alt",
        onClick: function onClick() {
          return _this.addPriceModifier(ticketEntity, {
            type: values["".concat(prefix, "-type")],
            name: values["".concat(prefix, "-name")],
            desc: values["".concat(prefix, "-desc")],
            amount: values["".concat(prefix, "-amount")],
            order: ''
          });
        },
        className: 'ee-add-price-modifier-btn'
      })) : '';
      var deleteModifier = priceTypeEntity.pbtId !== BASE_PRICE_TYPES.BASE_PRICE ? React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        position: 'top left',
        text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('click to delete price modifier', 'event_espresso')
      }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        "aria-label": Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('click to delete price modifier', 'event_espresso'),
        icon: "trash",
        onClick: function onClick() {
          return _this.trashPriceModifier(priceEntity, ticketEntity);
        }
      })) : '';
      return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, deleteModifier, addModifier);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "ticketTotalRow", function (ticketEntity, ticketPrefix, values, setReverseCalculate) {
      var calcDirIcon = values.reverseCalculate ? 'up' : 'down';
      var calcDirText = values.reverseCalculate ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('reverse calculate base price from total', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('calculate total from base price', 'event_espresso');
      return [{
        type: 'row',
        class: 'ee-ticket-price-calculator-total-row',
        value: ''
      }, {
        type: 'cell',
        class: '',
        value: ''
      }, {
        type: 'cell',
        class: '',
        value: ''
      }, {
        type: 'cell',
        class: '',
        value: ''
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-total-label' + ' ee-number-column',
        value: React.createElement(InputLabel, {
          label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Total', 'event_espresso'),
          htmlFor: "".concat(ticketPrefix, "-total")
        })
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-total ee-number-column',
        value: React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, _this.currencySign(), React.createElement(FormInput, {
          key: "total",
          type: "text",
          name: "ticketTotal",
          htmlId: "ticketTotal",
          htmlClass: _this.amountClass(),
          value: ticketEntity.price.formatter.formatNumber(Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(values.ticketTotal)),
          changeListener: function changeListener(value, previous) {
            if (parseFloat(value) !== parseFloat(previous)) {
              ticketEntity.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["Money"](Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(value), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_14__["SiteCurrency"]);
            }
          },
          disabled: values.reverseCalculate === false,
          format: function format(value) {
            return ticketEntity.price.formatter.formatNumber(Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_17__["parseMoneyValue"])(value));
          },
          formatOnBlur: true
        }))
      }, {
        type: 'cell',
        class: 'ee-ticket-price-calculator-total-actions',
        value: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
          text: calcDirText,
          position: 'top left'
        }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
          "aria-label": calcDirText,
          icon: "arrow-".concat(calcDirIcon, "-alt2"),
          onClick: function onClick() {
            setReverseCalculate(!values.reverseCalculate);
          }
        }))
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "formatMoney", function (value) {
      return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])('$ %1$d', value);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TicketPriceCalculatorForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ticketEntity = _this$props.ticketEntity,
          priceEntities = _this$props.priceEntities,
          priceTypeEntities = _this$props.priceTypeEntities,
          addPriceModifier = _this$props.addPriceModifier,
          trashPriceModifier = _this$props.trashPriceModifier,
          setReverseCalculate = _this$props.setReverseCalculate,
          submitButton = _this$props.submitButton,
          cancelButton = _this$props.cancelButton,
          _this$props$initialVa = _this$props.initialValues,
          initialValues = _this$props$initialVa === void 0 ? {} : _this$props$initialVa,
          _this$props$currentVa = _this$props.currentValues,
          currentValues = _this$props$currentVa === void 0 ? {} : _this$props$currentVa;
      this.setTimeout = setTimeout;
      this.clearTimeout = clearTimeout;
      this.addPriceModifier = addPriceModifier;
      this.trashPriceModifier = trashPriceModifier;

      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__["isModelEntityOfModel"])(ticketEntity, TICKET) || Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(priceTypeEntities)) {
        return null;
      }

      this.priceTypeEntities = priceTypeEntities;
      var values = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(currentValues) ? initialValues : currentValues;
      var allPriceTypeOptions = this.buildPriceTypeOptions(this.priceTypeEntities);
      var ticketPrefix = _constants__WEBPACK_IMPORTED_MODULE_16__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"];
      ticketPrefix += '-ticket-' + ticketEntity.id;
      var warnings = null;
      var formRows = [];
      var priceCount = priceEntities.length;

      if (priceCount > 0) {
        var priceTypeOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["filter"])(allPriceTypeOptions, function (priceTypeEntity) {
          return priceTypeEntity.value !== BASE_PRICE_TYPES.BASE_PRICE;
        });
        var sortedPrices = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"])(priceEntities, ['order', 'name']);

        for (var i = 0; i < priceCount; i++) {
          var priceEntity = sortedPrices[i];

          if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_13__["isModelEntityOfModel"])(priceEntity, 'price')) {
            return;
          } // we don't want "Base Price" to be an option for
          // price modifiers because THERE CAN ONLY BE ONE!!!


          var options = priceEntity.prtId === BASE_PRICE_TYPES.BASE_PRICE ? allPriceTypeOptions : priceTypeOptions;
          formRows.push(this.priceModifierRow(ticketEntity, ticketPrefix, values, priceEntity, options, i + 1 === priceCount));
        }
      } else {
        warnings = React.createElement(FormInfo, {
          formInfo: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('No ticket prices have been set! A base price' + ' is required at the very minimum. Please' + ' provide a "Label" and "Amount" and then' + ' click the %%var%% button in the "Actions"' + ' column to add the base price.', 'event_espresso'),
          formInfoVars: [React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
            icon: "plus-alt",
            key: 0
          })],
          dashicon: 'warning',
          dismissable: false,
          colSize: 11,
          offset: 1
        });
      }

      return ticketEntity && ticketEntity.id ? React.createElement(FormWrapper, null, React.createElement(FormSection, {
        htmlId: "".concat(ticketPrefix, "-form-section"),
        htmlClass: "ee-ticket-price-calculator-form-section"
      }, warnings, React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["ResponsiveTable"], {
        columns: this.formHeader(),
        rowData: formRows,
        footerData: this.ticketTotalRow(ticketEntity, ticketPrefix, values, setReverseCalculate),
        metaData: {
          tableId: ticketPrefix,
          tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Ticket Price Modifiers', 'event_espresso')
        },
        classes: {
          tableClass: 'ee-ticket-price-calculator'
        }
      }), React.createElement(FormInput, {
        type: "hidden",
        key: "ticketID",
        name: "ticketID",
        htmlId: "ticketID",
        value: values.ticketID
      }), React.createElement(FormInput, {
        type: "hidden",
        key: "priceIDs",
        name: "priceIDs",
        htmlId: "priceIDs",
        value: values.priceIDs
      }), React.createElement(FormInput, {
        type: "hidden",
        key: "priceTypes",
        name: "priceTypes",
        htmlId: "priceTypes",
        value: values.priceTypes
      }), React.createElement(FormInput, {
        type: "hidden",
        key: "reverseCalculate",
        name: "reverseCalculate",
        htmlId: "reverseCalculate",
        value: values.reverseCalculate
      })), React.createElement(FormSaveCancelButtons, {
        htmlClass: 'ee-ticket-price-calculator-buttons',
        submitButton: submitButton,
        cancelButton: cancelButton
      }), React.createElement(FormSection, {
        htmlClass: "ee-ticket-price-calculator-form-info"
      }, React.createElement(FormInfo, {
        formInfo: values.reverseCalculate ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ticket base price is being calculated' + ' by reversing the price modifiers' + ' applied to the ticket total - change' + ' the calculation direction by clicking' + ' on the arrow button to the right of the' + ' ticket total field', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('ticket total is being calculated by ' + ' applying price modifiers to base price' + ' - change the calculation direction by' + ' clicking on the arrow button to the' + ' right of the ticket total field', 'event_espresso'),
        dashicon: 'info',
        dismissable: false,
        colSize: 11,
        offset: 1
      }))) : null;
    }
  }]);

  return TicketPriceCalculatorForm;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/**
 * Enhanced TicketPriceCalculatorForm with FormHandler
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_11__["withFormHandler"])(TicketPriceCalculatorForm));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js ***!
  \**************************************************************************************************************/
/*! exports provided: TicketPriceCalculatorMenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorMenuItem", function() { return TicketPriceCalculatorMenuItem; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _with_ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-ticket-price-calculator-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/with-ticket-price-calculator-form-modal.js");


/**
 * External imports
 */





/**
 * Internal imports
 */


var TicketPriceCalculatorMenuItem = function TicketPriceCalculatorMenuItem(_ref) {
  var ticketEntity = _ref.ticketEntity,
      _ref$toggleCalculator = _ref.toggleCalculator,
      toggleCalculator = _ref$toggleCalculator === void 0 ? function () {
    return null;
  } : _ref$toggleCalculator,
      _ref$onOpenTicketCalc = _ref.onOpenTicketCalculator,
      onOpenTicketCalculator = _ref$onOpenTicketCalc === void 0 ? function () {
    return null;
  } : _ref$onOpenTicketCalc,
      _ref$onCloseTicketCal = _ref.onCloseTicketCalculator,
      onCloseTicketCalculator = _ref$onCloseTicketCal === void 0 ? function () {
    return null;
  } : _ref$onCloseTicketCal,
      showCalculator = _ref.showCalculator,
      _ref$noBasePrice = _ref.noBasePrice,
      noBasePrice = _ref$noBasePrice === void 0 ? false : _ref$noBasePrice;
  var toggle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var toggleAction = showCalculator ? Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flow"])(toggleCalculator, onCloseTicketCalculator) : Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flow"])(onOpenTicketCalculator, toggleCalculator);
    toggleAction();
  }, [toggleCalculator, showCalculator, onOpenTicketCalculator, onCloseTicketCalculator]);
  var tooltip = noBasePrice ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('warning! no ticket price set - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('ticket price calculator', 'event_espresso');
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 2,
    tooltip: tooltip,
    id: "calculate-ticket-price-ticket-".concat(ticketEntity.id),
    htmlClass: 'calculate-tickets-price',
    dashicon: React.createElement(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EspressoIcon"], {
      icon: "calculator"
    }),
    tooltipPosition: "top right",
    onClick: toggle,
    itemCount: noBasePrice ? 0 : null
  }) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_with_ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_5__["default"])(TicketPriceCalculatorMenuItem));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculator-form-decorator.js":
/*!***********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculator-form-decorator.js ***!
  \***********************************************************************************************************************/
/*! exports provided: parseMoneyValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMoneyValue", function() { return parseMoneyValue; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var final_form_calculate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! final-form-calculate */ "./node_modules/final-form-calculate/dist/final-form-calculate.es.js");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/* harmony import */ var _use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-ticket-price-calculators */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculators.js");



/**
 * External imports
 */







/**
 * Internal imports
 */



var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["priceTypeModel"].BASE_PRICE_TYPES;
var DEFAULT_OBJECT = {};
/**
 * @function
 * @param {number|string} moneyValue
 * @return {number} money value
 */

var parseMoneyValue = function parseMoneyValue(moneyValue) {
  moneyValue = moneyValue && moneyValue.toString ? moneyValue.toString().replace(new RegExp(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"].thousandsSeparator, 'g'), '').replace(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"].sign, '') : 0;
  moneyValue = parseFloat(moneyValue);
  return !isNaN(moneyValue) ? moneyValue : 0;
};
/**
 * @function
 * @param {Object} formData
 * @return {number|string} ticketId
 */

var getTicketId = function getTicketId(formData) {
  return formData.ticketID || 0;
};
/**
 * @function
 * @param {Object} formData
 * @return {number} total
 */


var getTicketTotal = function getTicketTotal(formData) {
  var total = formData.ticketTotal || 0;
  return parseMoneyValue(total);
};
/**
 * @function
 * @param {Object} formData
 * @param {function} calculator  A calculator for calculating the total.
 * @return {Object} new field data
 */


var calculateTicketTotalFromModifiers = function calculateTicketTotalFromModifiers(formData, calculator) {
  var ticketId = getTicketId(formData);

  if (!ticketId || typeof calculator !== 'function') {
    return DEFAULT_OBJECT;
  }

  var priceModifiers = getPriceModifiersFromFormData(ticketId, formData);

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(priceModifiers) || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(priceModifiers)) {
    return DEFAULT_OBJECT;
  }

  var total = calculator(0, priceModifiers);
  return {
    ticketTotal: total.toFixed(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"].decimalPlaces)
  };
};
/**
 * @function
 * @param {number|string} ticketId
 * @param {Object} formData
 * @return {string} form field name
 */


var getBasePriceFormFieldID = function getBasePriceFormFieldID(ticketId, formData) {
  var basePrefix = _constants__WEBPACK_IMPORTED_MODULE_9__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"] + "-ticket-".concat(ticketId, "-price");

  if (!formData.priceIDs) {
    return '';
  }

  var priceIDs = formData.priceIDs.split(',');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = priceIDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var priceID = _step.value;
      var prefix = "".concat(basePrefix, "-").concat(priceID);
      var priceTypeId = typeof formData["".concat(prefix, "-type")] !== 'undefined' ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_8__["normalizeEntityId"])(formData["".concat(prefix, "-type")]) : null; // base prices have a type id of 1

      if (priceTypeId === BASE_PRICE_TYPES.BASE_PRICE) {
        var basePrice = typeof formData["".concat(prefix, "-amount")] !== 'undefined' ? formData["".concat(prefix, "-amount")] : null;

        if (basePrice !== null) {
          return "".concat(prefix, "-amount");
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return '';
};
/**
 * @function
 * @param {Object} formData
 * @param {function} calculator  A calculator for calculating the total.
 * @return {Object} new field data
 */


var calculateTicketBasePriceFromTotal = function calculateTicketBasePriceFromTotal(formData, calculator) {
  var ticketId = getTicketId(formData);

  if (!ticketId || typeof calculator !== 'function') {
    return DEFAULT_OBJECT;
  }

  var basePriceFormFieldID = getBasePriceFormFieldID(ticketId, formData);

  if (basePriceFormFieldID === '') {
    return DEFAULT_OBJECT;
  }

  var basePrice = getTicketTotal(formData);
  var priceModifiers = getPriceModifiersFromFormData(ticketId, formData);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(priceModifiers) && !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(priceModifiers)) {
    basePrice = calculator(basePrice, priceModifiers);
  }

  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, basePriceFormFieldID, basePrice.toFixed(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"].decimalPlaces));
};
/**
 * @function
 * @param {number|string} ticketId
 * @param {Object} formData
 * @return {Array} price modifiers
 */


var getPriceModifiersFromFormData = function getPriceModifiersFromFormData(ticketId, formData) {
  var basePrefix = _constants__WEBPACK_IMPORTED_MODULE_9__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"];
  basePrefix += '-ticket-' + ticketId + '-price';
  var priceModifiers = [];
  var priceIDs = formData.priceIDs ? formData.priceIDs.split(',') : [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = priceIDs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var priceID = _step2.value;
      var prefix = "".concat(basePrefix, "-").concat(priceID);
      var priceTypeId = typeof formData["".concat(prefix, "-type")] !== 'undefined' ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_8__["normalizeEntityId"])(formData["".concat(prefix, "-type")]) : 0;
      var priceAmount = typeof formData["".concat(prefix, "-amount")] !== 'undefined' ? parseMoneyValue(formData["".concat(prefix, "-amount")]) : 0;

      if (priceAmount) {
        // @todo the calculators (exposed by useTicketPriceCalculators) sort by order and id
        // but the original code here never exposed those values to the calculations.
        // so it looks like it was a bit unfinished which means what we want to do here
        // is return the actual price objects for the calculators to do.
        // we'll probably have to expose the price objects through the hooks because they
        // are available!
        priceModifiers.push({
          PRT_ID: priceTypeId,
          amount: priceAmount
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return priceModifiers;
};
/**
 * A hook returning a form decorator used for updating total calculations in a
 * ticket price calculator form.
 *
 * @param {BaseEntity[]} priceTypeEntities  An array of price type BaseEntity objects
 * @param {number}  delay  A delay to use for debouncing the calculated total.
 * @return {Object}  decorator, mutators, and callbacks for react-final-form
 */


var useTicketPriceCalculatorFormDecorator = function useTicketPriceCalculatorFormDecorator(priceTypeEntities) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

  var _useTicketPriceCalcul = Object(_use_ticket_price_calculators__WEBPACK_IMPORTED_MODULE_10__["default"])(priceTypeEntities),
      calculateTicketTotal = _useTicketPriceCalcul.calculateTicketTotal,
      calculateTicketBasePrice = _useTicketPriceCalcul.calculateTicketBasePrice;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      totalChangedTo = _useState2[0],
      setTotalChangingTo = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      mutatorCallbacks = _useState4[0],
      setMutatorCallbacks = _useState4[1];

  var debouncedTotalChangedTo = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(totalChangedTo, delay);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (debouncedTotalChangedTo) {
      if (mutatorCallbacks.totalMutator) {
        mutatorCallbacks.totalMutator(debouncedTotalChangedTo);
      }
    }
  }, [debouncedTotalChangedTo]);
  var totalMutator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_ref2, state, _ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        newTotal = _ref4[0];

    var changeValue = _ref3.changeValue;

    if (newTotal) {
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(newTotal, function (value, field) {
        changeValue(state, field, function () {
          return value;
        });
      });
    }
  }, []);
  var decorator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return Object(final_form_calculate__WEBPACK_IMPORTED_MODULE_6__["default"])({
      field: /^(.*?(\b-amount\b))$/,
      updates: function updates(value, name, formData, prevData) {
        if (parseFloat(formData[name]) === parseFloat(prevData[name])) {
          return DEFAULT_OBJECT;
        }

        calculateTicketPrices(formData);
        return DEFAULT_OBJECT;
      }
    }, {
      field: /^(.*?(\b-type\b))$/,
      updates: function updates(value, name, formData, prevData) {
        if (formData[name] === prevData[name]) {
          return DEFAULT_OBJECT;
        }

        calculateTicketPrices(formData);
        return DEFAULT_OBJECT;
      }
    }, {
      field: 'ticketTotal',
      updates: function updates(value, name, formData, prevData) {
        if (parseFloat(formData[name]) === parseFloat(prevData[name])) {
          return DEFAULT_OBJECT;
        }

        calculateTicketPrices(formData);
        return DEFAULT_OBJECT;
      }
    });
  }, []);
  var calculateTicketPrices = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (formData) {
    var formTotal = formData.reverseCalculate ? calculateTicketBasePriceFromTotal(formData, calculateTicketBasePrice) : calculateTicketTotalFromModifiers(formData, calculateTicketTotal);
    setTotalChangingTo(formTotal);
  }, [calculateTicketBasePrice, calculateTicketTotal]);
  return {
    decorator: decorator,
    mutators: {
      totalMutator: totalMutator
    },
    calculateTicketPrices: calculateTicketPrices,
    setMutatorCallbacks: setMutatorCallbacks
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormDecorator);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculators.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculators.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External imports
 */






var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["priceTypeModel"].BASE_PRICE_TYPES;

var normalCases = function normalCases(currentTotal, amount, isPercent) {
  var _ref;

  return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, BASE_PRICE_TYPES.BASE_PRICE, function () {
    return currentTotal + amount;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, BASE_PRICE_TYPES.DISCOUNT, function () {
    return isPercent ? currentTotal - amount / 100 * currentTotal : currentTotal - amount;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, BASE_PRICE_TYPES.SURCHARGE, function () {
    return isPercent ? currentTotal + amount / 100 * currentTotal : currentTotal + amount;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, BASE_PRICE_TYPES.TAX, function () {
    return currentTotal + amount / 100 * currentTotal;
  }), _ref;
};

var reverseCases = function reverseCases(currentTotal, amount, isPercent) {
  var _ref2;

  return _ref2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, BASE_PRICE_TYPES.DISCOUNT, function () {
    return isPercent ? currentTotal / ((100 - amount) / 100) : currentTotal + amount;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, BASE_PRICE_TYPES.SURCHARGE, function () {
    return isPercent ? currentTotal / ((100 + amount) / 100) : currentTotal - amount;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, BASE_PRICE_TYPES.TAX, function () {
    return currentTotal / ((100 + amount) / 100);
  }), _ref2;
};

var getBasePrice = memize__WEBPACK_IMPORTED_MODULE_6___default()(function (prices) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(prices, function (price) {
    return price.prtId === BASE_PRICE_TYPES.BASE_PRICE;
  });
});

var accrueAmount = function accrueAmount(cases) {
  return function (defaultCase) {
    return function (typeId) {
      return cases.hasOwnProperty(typeId) ? cases[typeId]() : defaultCase;
    };
  };
};

var getPriceTypeForPrice = function getPriceTypeForPrice(priceEntity, priceTypes) {
  var priceType = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(priceTypes, ['id', priceEntity.PRT_ID]);

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(priceType, 'price_type')) {
    return priceType;
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(priceTypes, function (pt) {
    return pt.id !== 1;
  }));
};

var useTicketPriceCalculators = function useTicketPriceCalculators(priceTypeEntities) {
  var calculateTicketTotal = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var priceEntities = arguments.length > 1 ? arguments[1] : undefined;
    priceEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(priceEntities, ['order', 'id']);
    return priceEntities.reduce(function (newTotal, priceEntity) {
      var priceTypeEntity = getPriceTypeForPrice(priceEntity, priceTypeEntities);
      return accrueAmount(normalCases(newTotal, priceEntity.amount, priceTypeEntity.isPercent))(newTotal)(priceTypeEntity.pbtId);
    }, total);
  }, [priceTypeEntities]);
  var calculateTicketBasePrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (total, priceEntities) {
    var updateBasePrice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(priceEntities)) {
      return;
    }

    priceEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reverse"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(priceEntities, ['order', 'id']));
    var basePriceTotal = priceEntities.reduce(function (newTotal, priceEntity) {
      var priceTypeEntity = getPriceTypeForPrice(priceEntity, priceTypeEntities);
      var amount = priceEntity.amount instanceof _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__["Money"] ? priceEntity.amount.toNumber() : priceEntity.amount;
      return accrueAmount(reverseCases(newTotal, amount, priceTypeEntity.isPercent))(newTotal)(priceTypeEntity.pbtId);
    }, total);

    if (updateBasePrice) {
      var basePrice = getBasePrice(priceEntities);
      basePrice.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__["Money"](basePriceTotal, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__["SiteCurrency"]);
    }

    return basePriceTotal;
  }, [priceTypeEntities]);
  var calculateTicketTotals = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (total, priceEntities, reverseCalculate) {
    return reverseCalculate ? calculateTicketBasePrice(total, priceEntities) : calculateTicketTotal(total, priceEntities);
  });
  return {
    calculateTicketBasePrice: calculateTicketBasePrice,
    calculateTicketTotal: calculateTicketTotal,
    calculateTicketTotals: calculateTicketTotals
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculators);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/with-ticket-price-calculator-form-modal.js":
/*!********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/with-ticket-price-calculator-form-modal.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/with-ticket-price-entities */ "./assets/src/editor/events/tickets/data/with-ticket-price-entities.js");
/* harmony import */ var _data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/with-price-type-entities */ "./assets/src/editor/events/tickets/data/with-price-type-entities.js");
/* harmony import */ var _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-decorator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/use-ticket-price-calculator-form-decorator.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");








/**
 * External imports
 */






/**
 * Internal dependencies
 */





/**
 * TicketPriceCalculatorFormModal
 *
 * @constructor
 */

var TicketPriceCalculatorFormModal = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_11__["withEditorModal"])({
  title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Ticket Price Calculator', 'event_espresso'),
  customClass: 'ee-ticket-price-calculator-modal',
  closeButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('close ticket price calculator', 'event_espresso')
})(function (_ref) {
  var ticketEntity = _ref.ticketEntity,
      priceEntities = _ref.priceEntities,
      priceEntitiesLoaded = _ref.priceEntitiesLoaded,
      priceTypeEntities = _ref.priceTypeEntities,
      priceTypeEntitiesLoaded = _ref.priceTypeEntitiesLoaded,
      extraProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref, ["ticketEntity", "priceEntities", "priceEntitiesLoaded", "priceTypeEntities", "priceTypeEntitiesLoaded"]);

  var _useTicketPriceCalcul = Object(_use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_14__["default"])(priceTypeEntities, priceTypeEntitiesLoaded),
      decorator = _useTicketPriceCalcul.decorator,
      calculateTicketPrices = _useTicketPriceCalcul.calculateTicketPrices,
      setMutatorCallbacks = _useTicketPriceCalcul.setMutatorCallbacks,
      mutators = _useTicketPriceCalcul.mutators;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState3, 2),
      reverseCalculate = _useState4[0],
      setReverseCalculate = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var newFormData = Object(___WEBPACK_IMPORTED_MODULE_15__["ticketPriceCalculatorFormDataMap"])(ticketEntity, priceEntities, reverseCalculate);
    var totals = calculateTicketPrices(newFormData);
    setFormData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, newFormData, totals));
  }, [ticketEntity, priceEntities, reverseCalculate, calculateTicketPrices]);
  var loading = !(priceEntitiesLoaded && priceTypeEntitiesLoaded);
  var formProps = loading ? {
    loading: loading
  } : {
    loading: loading,
    ticketEntity: ticketEntity,
    priceEntities: priceEntities,
    priceTypeEntities: priceTypeEntities,
    formData: formData
  };
  return React.createElement(___WEBPACK_IMPORTED_MODULE_15__["TicketPriceCalculatorForm"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, formProps, {
    decorators: decorator,
    mutators: mutators,
    setMutatorCallbacks: setMutatorCallbacks,
    setReverseCalculate: setReverseCalculate,
    loadHandler: null,
    submitHandler: null,
    resetHandler: null,
    loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["_x"])('loading ticket prices%s', 'loading ticket prices...', 'event_espresso'), String.fromCharCode('8230'))
  }, extraProps));
});
/*
 * Enhanced TicketPriceCalculatorForm with Modal
 * withSelectTicketPricesAndPriceTypes
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([_data_with_price_type_entities__WEBPACK_IMPORTED_MODULE_13__["withPriceTypeEntities"], _data_with_ticket_price_entities__WEBPACK_IMPORTED_MODULE_12__["withTicketPriceEntities"], Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["withState"])({
  formChanges: false
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch, ownProps) {
  var setState = ownProps.setState,
      priceEntities = ownProps.priceEntities;

  var _dispatch = dispatch('eventespresso/core'),
      createEntity = _dispatch.createEntity,
      createRelation = _dispatch.createRelation,
      removeRelationForEntity = _dispatch.removeRelationForEntity,
      trashEntityById = _dispatch.trashEntityById;

  var addPriceModifier =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ticketEntity) {
      var priceModifier;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return createEntity('price', {
                PRC_order: priceEntities.length + 1
              });

            case 4:
              priceModifier = _context.sent;

              if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["isModelEntityOfModel"])(priceModifier, 'price')) {
                createRelation('ticket', ticketEntity.id, 'price', priceModifier);
                setState({
                  formChanges: true
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addPriceModifier(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var trashPriceModifier =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(priceModifier, ticketEntity) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["isModelEntityOfModel"])(priceModifier, 'price')) {
                _context2.next = 3;
                break;
              }

              Error(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Unable to perform deletion because an invalid Price' + ' Entity was supplied by the Ticket Price Calculator.', 'event_espresso'));
              return _context2.abrupt("return");

            case 3:
              if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
                _context2.next = 6;
                break;
              }

              Error(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Unable to perform deletion because an invalid Ticket' + ' Entity was supplied by the Ticket Price Calculator.', 'event_espresso'));
              return _context2.abrupt("return");

            case 6:
              removeRelationForEntity('ticket', ticketEntity.id, 'price', priceModifier.id);
              trashEntityById('price', priceModifier.id);
              setState({
                formChanges: true
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function trashPriceModifier(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    addPriceModifier: addPriceModifier,
    trashPriceModifier: trashPriceModifier
  };
}), function (WrappedComponent) {
  return function (props) {
    var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState5, 2),
        showCalculator = _useState6[0],
        setShowCalculator = _useState6[1];

    var toggleCalculator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
      setShowCalculator(function (prevShowCalculator) {
        return !prevShowCalculator;
      });
    });
    return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, React.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
      toggleCalculator: toggleCalculator
    })), React.createElement(TicketPriceCalculatorFormModal, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
      editorOpen: showCalculator,
      toggleEditor: toggleCalculator
    })));
  };
}]), 'withTicketPriceCalculatorFormModal'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./assets/src/editor/events/tickets/index.js":
/*!***************************************************!*\
  !*** ./assets/src/editor/events/tickets/index.js ***!
  \***************************************************/
/*! exports provided: EditorTicketEntitiesList, EditorTicketEntitiesOnlyList, withPriceTypeEntities, withTicketDateEntities, withTicketPriceEntities, withCopyTicketEntity, withTrashTicketEntity, EditorTicketActionsMenu, TicketEntityForm, withTicketEntityFormModal, ticketEntityFormInputs, ticketEntityFormSchema, withTicketEntitiesListFilterBar, withTicketEntitiesListFilterState, withFilteredTicketEntities, withPaginatedTicketEntitiesListAndFilterBar, withPaginatedTicketEntitiesListAndFilterBarAndState, getFilteredTicketEntitiesList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntityListItem, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket */ "./assets/src/editor/events/tickets/editor-ticket/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesOnlyList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesOnlyList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyTicketEntity", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withCopyTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashTicketEntity", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withTrashTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketEntityForm", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["TicketEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntityFormModal", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withTicketEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["ticketEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["ticketEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterBar", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withTicketEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterState", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withTicketEntitiesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredTicketEntities", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withFilteredTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBar", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withPaginatedTicketEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBarAndState", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["withPaginatedTicketEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["getFilteredTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityListItem", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesListView"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./assets/src/editor/events/tickets/data/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPriceTypeEntities", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["withPriceTypeEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketDateEntities", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["withTicketDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceEntities", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["withTicketPriceEntities"]; });




/***/ }),

/***/ "./assets/src/editor/index.js":
/*!************************************!*\
  !*** ./assets/src/editor/index.js ***!
  \************************************/
/*! exports provided: EventDatesAndTicketsMetabox, TicketAssignmentsManagerModal, withTicketAssignmentsManagerModal, EditorDateEntitiesList, withDateTicketEntities, withTicketEntitiesForAllDateEntities, EditorTicketEntitiesList, EditorTicketEntitiesOnlyList, withPriceTypeEntities, withTicketDateEntities, withTicketPriceEntities, withCopyDateEntity, withUpdateEventDateRelation, withTrashDateEntity, EditorDateEntityActionsMenu, DateEntityForm, DateEntityFormModal, dateEntityFormInputs, dateEntityFormSchema, dateEntityFormSubmitHandler, withDateEntitiesListFilterBar, withDatesListFilterState, withFilteredDateEntities, withPaginatedDateEntitiesListAndFilterBarAndState, withPaginatedDateEntitiesListAndFilterBar, getFilteredDateEntitiesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntityListItem, EditorDateEntitiesListView, withCopyTicketEntity, withTrashTicketEntity, EditorTicketActionsMenu, TicketEntityForm, withTicketEntityFormModal, ticketEntityFormInputs, ticketEntityFormSchema, withTicketEntitiesListFilterBar, withTicketEntitiesListFilterState, withFilteredTicketEntities, withPaginatedTicketEntitiesListAndFilterBar, withPaginatedTicketEntitiesListAndFilterBarAndState, getFilteredTicketEntitiesList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntityListItem, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./assets/src/editor/events/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDatesAndTicketsMetabox", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EventDatesAndTicketsMetabox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketAssignmentsManagerModal", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["TicketAssignmentsManagerModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketAssignmentsManagerModal", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketAssignmentsManagerModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateTicketEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withDateTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesForAllDateEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketEntitiesForAllDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesOnlyList", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesOnlyList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPriceTypeEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withPriceTypeEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketDateEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketPriceEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketPriceEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyDateEntity", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withCopyDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUpdateEventDateRelation", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withUpdateEventDateRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashDateEntity", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTrashDateEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityFormModal", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["DateEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormInputs", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSchema", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateEntityFormSubmitHandler", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["dateEntityFormSubmitHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDateEntitiesListFilterBar", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withDateEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDatesListFilterState", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredDateEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withFilteredDateEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBarAndState", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withPaginatedDateEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedDateEntitiesListAndFilterBar", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withPaginatedDateEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredDateEntitiesList", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["getFilteredDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityListItem", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntitiesListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCopyTicketEntity", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withCopyTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTrashTicketEntity", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTrashTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketEntityForm", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["TicketEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntityFormModal", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketEntityFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormInputs", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["ticketEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketEntityFormSchema", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["ticketEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterBar", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketEntitiesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTicketEntitiesListFilterState", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withTicketEntitiesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFilteredTicketEntities", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withFilteredTicketEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBar", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withPaginatedTicketEntitiesListAndFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPaginatedTicketEntitiesListAndFilterBarAndState", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["withPaginatedTicketEntitiesListAndFilterBarAndState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTicketEntitiesList", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["getFilteredTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityListItem", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesListView"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/final-form-calculate/dist/final-form-calculate.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/final-form-calculate/dist/final-form-calculate.es.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var final_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! final-form */ "./node_modules/final-form/dist/final-form.es.js");


var isPromise = (function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
});

//      

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var createDecorator = function createDecorator() {
  for (var _len = arguments.length, calculations = new Array(_len), _key = 0; _key < _len; _key++) {
    calculations[_key] = arguments[_key];
  }

  return function (form) {
    var previousValues = {};
    var unsubscribe = form.subscribe(function (_ref) {
      var values = _ref.values;
      form.batch(function () {
        var runUpdates = function runUpdates(field, isEqual, updates) {
          var next = values && Object(final_form__WEBPACK_IMPORTED_MODULE_0__["getIn"])(values, field);
          var previous = previousValues && Object(final_form__WEBPACK_IMPORTED_MODULE_0__["getIn"])(previousValues, field);

          if (!isEqual(next, previous)) {
            if (typeof updates === 'function') {
              var results = updates(next, field, values, previousValues);

              if (isPromise(results)) {
                results.then(function (resolved) {
                  Object.keys(resolved).forEach(function (destField) {
                    form.change(destField, resolved[destField]);
                  });
                });
              } else {
                Object.keys(results).forEach(function (destField) {
                  form.change(destField, results[destField]);
                });
              }
            } else {
              Object.keys(updates).forEach(function (destField) {
                var update = updates[destField];
                var result = update(next, values, previousValues);

                if (isPromise(result)) {
                  result.then(function (resolved) {
                    form.change(destField, resolved);
                  });
                } else {
                  form.change(destField, result);
                }
              });
            }
          }
        };

        var fields = form.getRegisteredFields();
        calculations.forEach(function (_ref2) {
          var field = _ref2.field,
              isEqual = _ref2.isEqual,
              updates = _ref2.updates;

          if (typeof field === 'string') {
            runUpdates(field, isEqual || tripleEquals, updates);
          } else {
            // field is a either array or regex
            var matches = Array.isArray(field) ? function (name) {
              return ~field.indexOf(name) || field.findIndex(function (f) {
                return f instanceof RegExp && f.test(name);
              }) !== -1;
            } : function (name) {
              return field.test(name);
            };
            fields.forEach(function (fieldName) {
              if (matches(fieldName)) {
                runUpdates(fieldName, isEqual || tripleEquals, updates);
              }
            });
          }
        });
        previousValues = values;
      });
    }, {
      values: true
    });
    return unsubscribe;
  };
};

//

/* harmony default export */ __webpack_exports__["default"] = (createDecorator);


/***/ }),

/***/ "./node_modules/final-form/dist/final-form.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/final-form/dist/final-form.es.js ***!
  \*******************************************************/
/*! exports provided: ARRAY_ERROR, FORM_ERROR, configOptions, createForm, fieldSubscriptionItems, formSubscriptionItems, getIn, setIn, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_ERROR", function() { return ARRAY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_ERROR", function() { return FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configOptions", function() { return configOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldSubscriptionItems", function() { return fieldSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSubscriptionItems", function() { return formSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");



//      
var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }

  if (typeof key !== 'string') {
    throw new Error('toPath() expects a string');
  }

  return key.split(/[.[\]]+/).filter(Boolean);
};

//      

var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;

  for (var i = 0; i < path.length; i++) {
    var key = path[i];

    if (current === undefined || current === null || typeof current !== 'object' || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }

  var key = path[index]; // determine type of key

  if (isNaN(key)) {
    var _extends2;

    // object set
    if (current === undefined || current === null) {
      var _ref;

      // recurse
      var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


      return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
    }

    if (Array.isArray(current)) {
      throw new Error('Cannot set a non-numeric property on an array');
    } // current exists, so make a copy of all its values, and add/update the new one


    var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

    if (_result === undefined) {
      var numKeys = Object.keys(current).length;

      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }

      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }

      var _removed = current[key],
          _final = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(current, [key].map(_toPropertyKey));

      return _final;
    } // set result in key


    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
  } // array set


  var numericKey = Number(key);

  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


    if (_result3 === undefined) {
      return undefined;
    } // create an array


    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }

  if (!Array.isArray(current)) {
    throw new Error('Cannot set a numeric property on an object');
  } // recurse


  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

  var array = [].concat(current);

  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);

    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }

  return array;
};

var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }

  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }

  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  } // Recursive function needs to accept and return State, but public API should
  // only deal with Objects


  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = 'FINAL_FORM/form-error';
var ARRAY_ERROR = 'FINAL_FORM/array-error';

//      
/**
 * Converts internal field state to published field state
 */

var publishFieldState = function publishFieldState(formState, field) {
  var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
  var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      name = field.name,
      touched = field.touched,
      visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);

  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }

  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited
  };
};

//      
var fieldSubscriptionItems = ['active', 'data', 'dirty', 'dirtySinceLastSubmit', 'error', 'initial', 'invalid', 'length', 'modified', 'pristine', 'submitError', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'value', 'visited'];

//      
var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

//      
function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];

      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
}

//      
var shallowEqualKeys = ['data'];
/**
 * Filters items in a FieldState based on a FieldSubscription
 */

var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
};

//      
var formSubscriptionItems = ['active', 'dirty', 'dirtyFields', 'dirtySinceLastSubmit', 'error', 'errors', 'hasSubmitErrors', 'hasValidationErrors', 'initialValues', 'invalid', 'modified', 'pristine', 'submitting', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'touched', 'valid', 'validating', 'values', 'visited'];

//      
var shallowEqualKeys$1 = ['touched', 'visited'];
/**
 * Filters items in a FormState based on a FormSubscription
 */

var filterFormState = function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
};

//      

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }

    return lastResult;
  };
};

var isPromise = (function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
});

var configOptions = ['debug', 'initialValues', 'keepDirtyOnReinitialize', 'mutators', 'onSubmit', 'validate', 'validateOnBlur'];
var version = '4.13.0';

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === 'object') {
      return hasAnyError(value);
    }

    return typeof value !== 'undefined';
  });
};

var convertToExternalFormState = function convertToExternalFormState(_ref) {
  var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
};

function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  if (force === void 0) {
    force = false;
  }

  var notification = filter(state, lastState, subscription, force);

  if (notification) {
    subscriber(notification);
  }
}

function notify(_ref2, state, lastState, filter) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)]; // istanbul ignore next

    if (entry) {
      var subscription = entry.subscription,
          subscriber = entry.subscriber;
      notifySubscriber(subscriber, subscription, state, lastState, filter);
    }
  });
}

var createForm = function createForm(config) {
  if (!config) {
    throw new Error('No config specified');
  }

  var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

  if (!onSubmit) {
    throw new Error('No onSubmit function specified');
  }

  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      dirtySinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      valid: true,
      validating: 0,
      values: initialValues ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = false;
  var validationPaused = false;
  var validationBlocked = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};

  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };

  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };

  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;

      state.fields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields, (_extends2 = {}, _extends2[to] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[from], {
        name: to,
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  }; // bind state to mutators


  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          setIn: setIn,
          shallowEqual: shallowEqual
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };

  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};

  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];

    if (validate) {
      var errorsOrPromise = validate(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.formState.values)); // clone to avoid writing

      if (isPromise(errorsOrPromise)) {
        var asyncValidationPromiseKey = nextAsyncValidationKey++;
        var promise = errorsOrPromise.then(setErrors).then(clearAsyncValidationPromise(asyncValidationPromiseKey));
        promises.push(promise);
        asyncValidationPromises[asyncValidationPromiseKey] = promise;
      } else {
        setErrors(errorsOrPromise);
      }
    }

    return promises;
  };

  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();

      if (validator) {
        result.push(validator);
      }

      return result;
    }, []);
  };

  var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
    var promises = [];
    var validators = getValidators(field);

    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);

        if (errorOrPromise && isPromise(errorOrPromise)) {
          var asyncValidationPromiseKey = nextAsyncValidationKey++;
          var promise = errorOrPromise.then(setError) // errors must be resolved, not rejected
          .then(clearAsyncValidationPromise(asyncValidationPromiseKey));
          promises.push(promise);
          asyncValidationPromises[asyncValidationPromiseKey] = promise;
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }

    return promises;
  };

  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      /* istanbul ignore next */

      if (callback) {
        callback();
      }

      return;
    }

    var fields = state.fields,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var fieldKeys = Object.keys(safeFields);

    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      if (callback) {
        callback();
      }

      return; // no validation rules
    } // pare down field keys to actually validate


    var limitedFieldLevelValidation = false;

    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];

      if (changedField) {
        var validateFields = changedField.validateFields;

        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }

    var recordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors) {
      recordLevelErrors = errors || {};
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(safeFields[name], function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));

    var processErrors = function processErrors() {
      var merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors);

      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };

      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });

      if (!shallowEqual(formState.errors, merged)) {
        formState.errors = merged;
      }

      formState.error = recordLevelErrors[FORM_ERROR];
    }; // process sync errors


    processErrors();

    if (promises.length) {
      // sync errors have been set. notify listeners while we wait for others
      state.formState.validating++;

      if (callback) {
        callback();
      }

      var afterPromises = function afterPromises() {
        state.formState.validating--;
        processErrors();

        if (callback) {
          callback();
        }
      };

      Promise.all(promises).then(afterPromises, afterPromises);
    } else if (callback) {
      callback();
    }
  };

  var notifyFieldListeners = function notifyFieldListeners(force) {
    if (inBatch || validationPaused) {
      return;
    }

    var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    Object.keys(safeFields).forEach(function (name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;

      if (!shallowEqual(fieldState, lastFieldState)) {
        // **************************************************************
        // Curious about why a field is getting notified? Uncomment this.
        // **************************************************************
        // const diffKeys = Object.keys(fieldState).filter(
        //   key => fieldState[key] !== (lastFieldState && lastFieldState[key])
        // )
        // console.debug(
        //   'notifying',
        //   field.name,
        //   '\nField State\n',
        //   diffKeys.reduce(
        //     (result, key) => ({ ...result, [key]: fieldState[key] }),
        //     {}
        //   ),
        //   '\nLast Field State\n',
        //   diffKeys.reduce(
        //     (result, key) => ({
        //       ...result,
        //       [key]: lastFieldState && lastFieldState[key]
        //     }),
        //     {}
        //   )
        // )
        field.lastFieldState = fieldState;
        var fieldSubscriber = fieldSubscribers[name];

        if (fieldSubscriber) {
          notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState);
        }
      }
    });
  };

  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };

  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };

  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }

      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && !safeFieldKeys.every(function (key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

      return safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key));
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);

    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
      result.modified[key] = safeFields[key].modified;
      result.touched[key] = safeFields[key].touched;
      result.visited[key] = safeFields[key].visited;
      return result;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

    nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };

  var callDebug = function callDebug() {
    return debug && "development" !== 'production' && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };

  var notifying = false;
  var scheduleNotification = false;

  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();

      if (!inBatch && !validationPaused) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }

      notifying = false;

      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };

  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).find(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };

  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  }; // generate initial errors


  runValidation();
  var api = {
    batch: function batch(fn) {
      inBatch = true;
      fn();
      inBatch = false;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
          formState = state.formState;
      var previous = fields[name];

      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
          active: false,
          touched: true
        });

        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
          formState = state.formState;

      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];

        if (previous) {
          // only track modified for registered fields
          fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
            modified: true
          });
        }

        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },
    focus: function focus(name) {
      var field = state.fields[name];

      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
          formState = state.formState;

      var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

      var values = typeof data === 'function' ? data(formState.values) : data;

      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }

      Object.keys(safeFields).forEach(function (key) {
        var field = safeFields[key];
        field.modified = false;
        field.touched = false;
        field.visited = false;

        if (keepDirtyOnReinitialize) {
          var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

          if (pristine) {
            // only update pristine values
            formState.values = setIn(formState.values, key, getIn(values, key));
          }
        }
      });
      formState.initialValues = values;
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation() {
      validationPaused = true;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }

      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }

      var index = state.fieldSubscribers[name].index++; // save field subscriber callback

      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription
      };

      if (!state.fields[name]) {
        // create initial field state
        state.fields[name] = {
          active: false,
          afterSubmit: fieldConfig && fieldConfig.afterSubmit,
          beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
          blur: function blur() {
            return api.blur(name);
          },
          change: function change(value) {
            return api.change(name, value);
          },
          data: {},
          focus: function focus() {
            return api.focus(name);
          },
          isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
          lastFieldState: undefined,
          modified: false,
          name: name,
          touched: false,
          valid: true,
          validateFields: fieldConfig && fieldConfig.validateFields,
          validators: {},
          visited: false
        };
      }

      if (fieldConfig) {
        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }

        if (fieldConfig.initialValue !== undefined) {
          state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
          state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
        }

        if (fieldConfig.defaultValue !== undefined) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }

      var sentFirstNotification = false;

      var firstNotification = function firstNotification() {
        var fieldState = publishFieldState(state.formState, state.fields[name]);
        notifySubscriber(subscriber, subscription, fieldState, undefined, filterFieldState, true);
        state.fields[name].lastFieldState = fieldState;
        sentFirstNotification = true;
      };

      runValidation(undefined, function () {
        notifyFormListeners();

        if (!sentFirstNotification) {
          firstNotification();
        }

        notifyFieldListeners();
      });
      return function () {
        delete state.fields[name].validators[index];
        delete state.fieldSubscribers[name].entries[index];

        if (!Object.keys(state.fieldSubscribers[name].entries).length) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];
          state.formState.errors = setIn(state.formState.errors, name, undefined) || {};

          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }

        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;

      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }

      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case 'debug':
          debug = value;
          break;

        case 'destroyOnUnregister':
          destroyOnUnregister = value;
          break;

        case 'initialValues':
          api.initialize(value);
          break;

        case 'keepDirtyOnReinitialize':
          keepDirtyOnReinitialize = value;
          break;

        case 'mutators':
          mutators = value;

          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }

          break;

        case 'onSubmit':
          onSubmit = value;
          break;

        case 'validate':
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;

        case 'validateOnBlur':
          validateOnBlur = value;
          break;

        default:
          throw new Error('Unrecognised option ' + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;

      if (formState.submitting) {
        return;
      }

      if (hasSyncErrors()) {
        markAllFieldsTouched();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.reduce(function (result, key) {
          result.push(asyncValidationPromises[Number(key)]);
          return result;
        }, [])).then(api.submit, api.submit);
        return;
      }

      var fieldBlockingSubmit = beforeSubmit();

      if (fieldBlockingSubmit) {
        return;
      }

      var resolvePromise;
      var completeCalled = false;

      var complete = function complete(errors) {
        formState.submitting = false;

        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          delete formState.submitErrors;
          delete formState.submitError;
          formState.submitFailed = false;
          formState.submitSucceeded = true;
          afterSubmit();
        }

        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;

        if (resolvePromise) {
          resolvePromise(errors);
        }

        return errors;
      };

      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formState.values); // onSubmit is either sync, callback or async with a Promise

      var result = onSubmit(formState.values, api, complete);

      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error('No callback given.');
      }

      if (!subscription) {
        throw new Error('No subscription provided. What values do you want to listen to?');
      }

      var memoized = memoize(subscriber);
      var subscribers = state.subscribers,
          lastFormState = state.lastFormState;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription
      };
      var nextFormState = calculateNextFormState();

      if (nextFormState !== lastFormState) {
        state.lastFormState = nextFormState;
      }

      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
};

//




/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./assets/src/editor/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/src/editor/index.js */"./assets/src/editor/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@eventespresso/components":
/*!***********************************************!*\
  !*** external {"this":["eejs","components"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["components"]; }());

/***/ }),

/***/ "@eventespresso/editor-hocs":
/*!***********************************************!*\
  !*** external {"this":["eejs","editorHocs"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["editorHocs"]; }());

/***/ }),

/***/ "@eventespresso/eejs":
/*!**********************************!*\
  !*** external {"this":["eejs"]} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]; }());

/***/ }),

/***/ "@eventespresso/helpers":
/*!********************************************!*\
  !*** external {"this":["eejs","helpers"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["helpers"]; }());

/***/ }),

/***/ "@eventespresso/higher-order-components":
/*!*****************************************!*\
  !*** external {"this":["eejs","hocs"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["hocs"]; }());

/***/ }),

/***/ "@eventespresso/hooks":
/*!******************************************!*\
  !*** external {"this":["eejs","hooks"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["hooks"]; }());

/***/ }),

/***/ "@eventespresso/i18n":
/*!*****************************************!*\
  !*** external {"this":["eejs","i18n"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["i18n"]; }());

/***/ }),

/***/ "@eventespresso/model":
/*!******************************************!*\
  !*** external {"this":["eejs","model"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["model"]; }());

/***/ }),

/***/ "@eventespresso/validators":
/*!***********************************************!*\
  !*** external {"this":["eejs","validators"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["validators"]; }());

/***/ }),

/***/ "@eventespresso/value-objects":
/*!*************************************************!*\
  !*** external {"this":["eejs","valueObjects"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["valueObjects"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "classnames":
/*!********************************************************!*\
  !*** external {"this":["eejs","vendor","classnames"]} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["classnames"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "moment-timezone":
/*!****************************************************!*\
  !*** external {"this":["eejs","vendor","moment"]} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["moment"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });