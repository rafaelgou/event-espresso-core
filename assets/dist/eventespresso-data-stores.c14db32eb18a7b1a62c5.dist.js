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

/***/ "./assets/src/data/eventespresso/base-controls.js":
/*!********************************************************!*\
  !*** ./assets/src/data/eventespresso/base-controls.js ***!
  \********************************************************/
/*! exports provided: fetch, select, resolveSelect, dispatch, resolveDispatch, resolveGetEntityByIdForIds, resolveGetRelatedEntities, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSelect", function() { return resolveSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveDispatch", function() { return resolveDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveGetEntityByIdForIds", function() { return resolveGetEntityByIdForIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveGetRelatedEntities", function() { return resolveGetRelatedEntities; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/constants */ "./assets/src/data/eventespresso/core/constants.js");




/**
 * External imports
 */



/**
 * Internal imports
 */


/**
 * Returns the action object for a fetch control.
 * @param {Object} request
 * @return {{type: string, request: Object}} An action object
 */

function fetch(request) {
  return {
    type: 'FETCH_FROM_API',
    request: request
  };
}
/**
 * Returns the action object for a select control.
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {{type: string, reducerKey: string, selectorName: string, args: *[]}}
 * Returns an action object.
 */

function select(reducerKey, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    reducerKey: reducerKey,
    selectorName: selectorName,
    args: args
  };
}
/**
 * Returns the action object for resolving a selector that has a resolver.
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {Array} args
 * @return {Object} An action object.
 */

function resolveSelect(reducerKey, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'RESOLVE_SELECT',
    reducerKey: reducerKey,
    selectorName: selectorName,
    args: args
  };
}
/**
 * Returns the action object for a dispatch control.
 * @param {string} reducerKey
 * @param {string} dispatchName
 * @param {*[]} args
 * @return {{type: string, reducerKey: string, dispatchName: string, args: *[]}}
 * An action object
 */

function dispatch(reducerKey, dispatchName) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return {
    type: 'DISPATCH',
    reducerKey: reducerKey,
    dispatchName: dispatchName,
    args: args
  };
}
/**
 * Returns the action object for a resolve dispatch control
 *
 * @param {string} reducerKey
 * @param {string} dispatchName
 * @param {Array} args
 * @return {Object} The action object.
 */

function resolveDispatch(reducerKey, dispatchName) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  return {
    type: 'RESOLVE_DISPATCH',
    reducerKey: reducerKey,
    dispatchName: dispatchName,
    args: args
  };
}
/**
 * Returns the action object for resolving the getEntityById selector
 * for all the given ids on the given model
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @return {Object} An action object
 */

function resolveGetEntityByIdForIds(modelName, entityIds) {
  return {
    type: 'RESOLVE_GET_ENTITY_BY_ID_FOR_IDS',
    modelName: modelName,
    entityIds: entityIds
  };
}
/**
 * Returns the action object for resolving the getRelatedEntities selector
 * on the eventespresso/core store for the given arguments.
 *
 * @param {BaseEntity} entity
 * @param {Map} relationEntities
 * @param {Array<number>} relationIds
 * @return {Object} An action object
 */

function resolveGetRelatedEntities(entity, relationEntities, relationIds) {
  return {
    type: 'RESOLVE_GET_RELATED_ENTITIES',
    entity: entity,
    relationEntities: relationEntities,
    relationIds: relationIds
  };
}
var controls = {
  FETCH_FROM_API: function FETCH_FROM_API(_ref) {
    var request = _ref.request;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()(request);
  },
  SELECT: function SELECT(_ref2) {
    var _selectData;

    var reducerKey = _ref2.reducerKey,
        selectorName = _ref2.selectorName,
        args = _ref2.args;
    return (_selectData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])(reducerKey))[selectorName].apply(_selectData, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(args));
  },
  DISPATCH: function DISPATCH(_ref3) {
    var _dispatchData;

    var reducerKey = _ref3.reducerKey,
        dispatchName = _ref3.dispatchName,
        args = _ref3.args;
    return (_dispatchData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(reducerKey))[dispatchName].apply(_dispatchData, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(args));
  },
  RESOLVE_DISPATCH: function () {
    var _RESOLVE_DISPATCH = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
      var _dispatchData2;

      var reducerKey, dispatchName, args;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reducerKey = _ref4.reducerKey, dispatchName = _ref4.dispatchName, args = _ref4.args;
              _context.next = 3;
              return (_dispatchData2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(reducerKey))[dispatchName].apply(_dispatchData2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(args));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function RESOLVE_DISPATCH(_x) {
      return _RESOLVE_DISPATCH.apply(this, arguments);
    };
  }(),
  RESOLVE_SELECT: function RESOLVE_SELECT(_ref5) {
    var reducerKey = _ref5.reducerKey,
        selectorName = _ref5.selectorName,
        args = _ref5.args;
    return new Promise(function (resolve) {
      var hasFinished = function hasFinished() {
        return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/data').hasFinishedResolution(reducerKey, selectorName, args);
      };

      var getResult = function getResult() {
        return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])(reducerKey)[selectorName].apply(null, args);
      }; // trigger the selector (to trigger the resolver)


      var result = getResult();

      if (hasFinished()) {
        return resolve(result);
      }

      var unsubscribe = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["subscribe"])(function () {
        if (hasFinished()) {
          unsubscribe();
          resolve(getResult());
        }
      });
    });
  },
  RESOLVE_GET_ENTITY_BY_ID_FOR_IDS: function RESOLVE_GET_ENTITY_BY_ID_FOR_IDS(_ref6) {
    var modelName = _ref6.modelName,
        entityIds = _ref6.entityIds;

    while (entityIds.length > 0) {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'finishResolution', _core_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getEntityById', [modelName, entityIds.pop()]);
    }
  },
  RESOLVE_GET_RELATED_ENTITIES: function RESOLVE_GET_RELATED_ENTITIES(_ref7) {
    var entity = _ref7.entity,
        relationEntities = _ref7.relationEntities,
        relationIds = _ref7.relationIds;

    while (relationIds.length > 0) {
      var relationEntity = relationEntities.get(relationIds.pop());

      if (relationEntity) {
        Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'finishResolution', _core_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getRelatedEntities', [relationEntity, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["pluralModelName"])(entity.modelName)]);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (controls);

/***/ }),

/***/ "./assets/src/data/eventespresso/base-model.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/eventespresso/base-model.js ***!
  \*****************************************************/
/*! exports provided: getMethodName, keepExistingEntitiesInObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethodName", function() { return getMethodName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keepExistingEntitiesInObject", function() { return keepExistingEntitiesInObject; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/**
 * A helper for getting a method name.
 * @param {string} modelName
 * @param {string} suffix
 * @param {string} prefix
 * @param {boolean} usePlural
 * @return {string} Returns a name for a method.
 */

var getMethodName = function getMethodName(modelName) {
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var usePlural = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  modelName = usePlural ? pluralize__WEBPACK_IMPORTED_MODULE_1___default()(modelName) : modelName;
  return prefix + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(modelName + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(suffix)));
};
/**
 * Given a collection of existing entities and a collection of incoming
 * entities, this returns a merged object with preference given to common
 * entities from the existingEntities collection.
 *
 * Incoming collections can be Maps or plain objects.
 *
 * Note if incomingEntities is a Map, the ORDER of the map will be preserved
 * even if the values of entities in the map are replaced by values from
 * existing entities.
 *
 * @param {Map|Object} existingEntities
 * @param {Map|Object} incomingEntities
 * @return {Map} A new collection of entities. Note if existing entities came in
 * as a plain object, this returns a Map.
 */

var keepExistingEntitiesInObject = function keepExistingEntitiesInObject(existingEntities, incomingEntities) {
  var getExistingOrDefaultEntity = function getExistingOrDefaultEntity(defaultEntity, entityId) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isMap"])(existingEntities) && existingEntities.has(entityId)) {
      return existingEntities.get(entityId);
    }

    return existingEntities[entityId] || defaultEntity;
  };

  var reduceCallback = function reduceCallback(mapped, entity, entityId) {
    entityId = normalizeEntityId(entityId);
    mapped.set(entityId, getExistingOrDefaultEntity(entity, entityId));
    return mapped;
  };

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isMap"])(incomingEntities) ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["mapReducer"])(incomingEntities, reduceCallback, new Map()) : Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(incomingEntities, reduceCallback, new Map());
};
/**
 * This normalizes numeric values to integer numbers and leaves non numeric
 * values alone.
 *
 * @param {*} entityId
 * @return {*} Normalized value
 */

var normalizeEntityId = function normalizeEntityId(entityId) {
  var originalId = entityId;
  entityId = parseInt(entityId, 10);
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNaN"])(entityId) ? originalId : entityId;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/base-selectors.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/base-selectors.js ***!
  \*********************************************************/
/*! exports provided: isResolving, hasFinishedResolving */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResolving", function() { return isResolving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFinishedResolving", function() { return hasFinishedResolving; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Invokes the selector for whether a given selectorName in a given registered
 * reducer store is in the midst of resolving.
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {boolean}  Whether resolution is in progress.
 */

var isResolving = function isResolving(reducerKey, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/data').isResolving(reducerKey, selectorName, args);
};
/**
 * Invokes the selector for whether a given selectorName in a given registered
 * reducer store has finished resolving.
 *
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {boolean} Whether resolution has completed.
 */

var hasFinishedResolving = function hasFinishedResolving(reducerKey, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/data').hasFinishedResolution(reducerKey, selectorName, args);
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-creators.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-creators.js ***!
  \***********************************************************************/
/*! exports provided: receiveEntityRecords, receiveAndReplaceEntityRecords, receiveEntity, receiveDeleteEntityId, receiveTrashEntityId, receiveRelatedEntities, receiveDirtyRelationAddition, receiveDirtyRelationDeletion, receiveUpdatedEntityIdForRelations, removeEntityById, removeDeleteEntityId, removeTrashEntityId, removeAllRelatedEntitiesForModelEntity, removeRelatedEntities, removeDirtyRelationAddition, removeDirtyRelationDeletion, removeDirtyRelationForType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntityRecords", function() { return _receive_entities__WEBPACK_IMPORTED_MODULE_0__["receiveEntityRecords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveAndReplaceEntityRecords", function() { return _receive_entities__WEBPACK_IMPORTED_MODULE_0__["receiveAndReplaceEntityRecords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntity", function() { return _receive_entities__WEBPACK_IMPORTED_MODULE_0__["receiveEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDeleteEntityId", function() { return _receive_entities__WEBPACK_IMPORTED_MODULE_0__["receiveDeleteEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveTrashEntityId", function() { return _receive_entities__WEBPACK_IMPORTED_MODULE_0__["receiveTrashEntityId"]; });

/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveRelatedEntities", function() { return _receive_relations__WEBPACK_IMPORTED_MODULE_1__["receiveRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationAddition", function() { return _receive_relations__WEBPACK_IMPORTED_MODULE_1__["receiveDirtyRelationAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationDeletion", function() { return _receive_relations__WEBPACK_IMPORTED_MODULE_1__["receiveDirtyRelationDeletion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveUpdatedEntityIdForRelations", function() { return _receive_relations__WEBPACK_IMPORTED_MODULE_1__["receiveUpdatedEntityIdForRelations"]; });

/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntityById", function() { return _remove_entities__WEBPACK_IMPORTED_MODULE_2__["removeEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDeleteEntityId", function() { return _remove_entities__WEBPACK_IMPORTED_MODULE_2__["removeDeleteEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTrashEntityId", function() { return _remove_entities__WEBPACK_IMPORTED_MODULE_2__["removeTrashEntityId"]; });

/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAllRelatedEntitiesForModelEntity", function() { return _remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeAllRelatedEntitiesForModelEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRelatedEntities", function() { return _remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationAddition", function() { return _remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeDirtyRelationAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationDeletion", function() { return _remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeDirtyRelationDeletion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForType", function() { return _remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeDirtyRelationForType"]; });






/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-generators.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-generators.js ***!
  \*************************************************************************/
/*! exports provided: createEntity, receiveEntityAndResolve, receiveEntitiesAndResolve, createRelation, createRelations, resolveRelationRecordForRelation, deleteEntityById, trashEntityById, removeDirtyRelationForAddition, removeRelationForEntity, persistEntityRecord, persistForEntityId, persistForEntityIds, persistDeletesForModel, persistTrashesForModel, persistAllDeletes, persistAddRelationsForModel, persistDeleteRelationsForModel, persistRelationsForModel, persistRelationsForEntityId, persistRelationsForEntityIdAndRelation, persistRelationsForEntityIdAndRelationId, persistNewEntityAndRemoveDirtyRelations, getRelationState, resetAllState, resetStateForModel, resetAllModelSpecific, resetModelSpecificForSelector, resetModelSpecificForSelectorAndArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-entities-generators */ "./assets/src/data/eventespresso/core/actions/create-entities-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntity", function() { return _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__["createEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntityAndResolve", function() { return _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__["receiveEntityAndResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntitiesAndResolve", function() { return _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__["receiveEntitiesAndResolve"]; });

/* harmony import */ var _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-relations-generators.js */ "./assets/src/data/eventespresso/core/actions/create-relations-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRelation", function() { return _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__["createRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRelations", function() { return _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__["createRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveRelationRecordForRelation", function() { return _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__["resolveRelationRecordForRelation"]; });

/* harmony import */ var _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-entity-generators */ "./assets/src/data/eventespresso/core/actions/delete-entity-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntityById", function() { return _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__["deleteEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trashEntityById", function() { return _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__["trashEntityById"]; });

/* harmony import */ var _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-relations-generators */ "./assets/src/data/eventespresso/core/actions/delete-relations-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForAddition", function() { return _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__["removeDirtyRelationForAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRelationForEntity", function() { return _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__["removeRelationForEntity"]; });

/* harmony import */ var _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persist-entity-generators */ "./assets/src/data/eventespresso/core/actions/persist-entity-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistEntityRecord", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistEntityRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistForEntityId", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistForEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistForEntityIds", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistForEntityIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistDeletesForModel", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistDeletesForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistTrashesForModel", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistTrashesForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistAllDeletes", function() { return _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__["persistAllDeletes"]; });

/* harmony import */ var _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persist-relations-generators */ "./assets/src/data/eventespresso/core/actions/persist-relations-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistAddRelationsForModel", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistAddRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistDeleteRelationsForModel", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistDeleteRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForModel", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityId", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistRelationsForEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelation", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistRelationsForEntityIdAndRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelationId", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistRelationsForEntityIdAndRelationId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistNewEntityAndRemoveDirtyRelations", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["persistNewEntityAndRemoveDirtyRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationState", function() { return _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__["getRelationState"]; });

/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset */ "./assets/src/data/eventespresso/core/actions/reset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllState", function() { return _reset__WEBPACK_IMPORTED_MODULE_6__["resetAllState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStateForModel", function() { return _reset__WEBPACK_IMPORTED_MODULE_6__["resetStateForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllModelSpecific", function() { return _reset__WEBPACK_IMPORTED_MODULE_6__["resetAllModelSpecific"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelector", function() { return _reset__WEBPACK_IMPORTED_MODULE_6__["resetModelSpecificForSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelectorAndArgs", function() { return _reset__WEBPACK_IMPORTED_MODULE_6__["resetModelSpecificForSelectorAndArgs"]; });









/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-types.js":
/*!********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-types.js ***!
  \********************************************************************/
/*! exports provided: ACTION_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
var entities = {
  RECEIVE_ENTITY_RECORDS: 'RECEIVE_ENTITY_RECORDS',
  RECEIVE_AND_REPLACE_ENTITY_RECORDS: 'RECEIVE_AND_REPLACE_ENTITY_RECORDS',
  RECEIVE_ENTITY: 'RECEIVE_ENTITY',
  REMOVE_ENTITY_BY_ID: 'REMOVE_ENTITY_BY_ID',
  REMOVE_DELETE_ENTITY_ID: 'REMOVE_DELETE_ENTITY_ID',
  REMOVE_TRASH_ENTITY_ID: 'REMOVE_TRASH_ENTITY_ID',
  RECEIVE_TRASH_ENTITY_ID: 'RECEIVE_TRASH_ENTITY_ID',
  RECEIVE_DELETE_ENTITY_ID: 'RECEIVE_DELETE_ENTITY_ID'
};
var relations = {
  REMOVE_DIRTY_RELATION_ADDITION: 'REMOVE_DIRTY_RELATION_ADDITION',
  REMOVE_DIRTY_RELATION_DELETION: 'REMOVE_DIRTY_RELATION_DELETION',
  RECEIVE_RELATED_ENTITY_IDS: 'RECEIVE_RELATED_ENTITY_IDS',
  REMOVE_RELATED_ENTITY_IDS: 'REMOVE_RELATED_ENTITY_IDS',
  REMOVE_RELATED_ENTITIES_FOR_ENTITY: 'REMOVE_RELATED_ENTITIES_FOR_ENTITY',
  RECEIVE_DIRTY_RELATION_ADDITION: 'RECEIVE_DIRTY_RELATION_ADDITION',
  RECEIVE_DIRTY_RELATION_DELETION: 'RECEIVE_DIRTY_RELATION_DELETION',
  RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS: 'RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS'
};
var resets = {
  RESET_ALL_STATE: 'RESET_ALL_STATE',
  RESET_STATE_FOR_MODEL: 'RESET_STATE_FOR_MODEL',
  RESET_ALL_MODEL_SPECIFIC: 'RESET_ALL_MODEL_SPECIFIC_STATE',
  RESET_MODEL_SPECIFIC_FOR_SELECTOR: 'RESET_MODEL_SPECIFIC_FOR_SELECTOR',
  RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS: 'RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS'
};
var modelSpecific = {
  RECEIVE_SELECTOR_VALUE: 'RECEIVE_SELECTOR_VALUE'
};
var ACTION_TYPES = {
  entities: entities,
  relations: relations,
  modelSpecific: modelSpecific,
  resets: resets
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/create-entities-generators.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/create-entities-generators.js ***!
  \**********************************************************************************/
/*! exports provided: createEntity, receiveEntityAndResolve, receiveEntitiesAndResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntity", function() { return createEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntityAndResolve", function() { return receiveEntityAndResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntitiesAndResolve", function() { return receiveEntitiesAndResolve; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createEntity),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(receiveEntityAndResolve),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(receiveEntitiesAndResolve);

/**
 * External imports
 */



/**
 * Internal imports
 */




/**
 * Returns an action generator for creating a model entity instance and
 * including it in an action object for adding to state.
 *
 * @param {string} modelName  The name of the model the incoming object is for.
 * @param {Object} entity  A plain object containing the entity properties and
 * values
 * @return {null|Object}  If the entity is successfully created the model entity
 * instance is returned, otherwise null.
 */

function createEntity(modelName, entity) {
  var factory, entityInstance;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createEntity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          _context.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], 'getFactoryForModel', modelName);

        case 3:
          factory = _context.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityFactoryOfModel"])(factory, modelName)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", null);

        case 6:
          entityInstance = factory.createNew(entity);
          _context.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'receiveEntityAndResolve', entityInstance);

        case 9:
          return _context.abrupt("return", entityInstance);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Generator for yielding actions for both receiving a
 * BaseEntity instance and resolving the related selector for retrieving that
 * entity instance.
 *
 * @param {BaseEntity} entity
 */

function receiveEntityAndResolve(entity) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function receiveEntityAndResolve$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          assertIsModelEntity(entity);
          _context2.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'receiveEntity', entity);

        case 3:
          _context2.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getEntityById', [entity.modelName.toLowerCase(), entity.id]);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Same as receivesEntityAndResolve except this handles multiple entities.
 * @param {string} modelName
 * @param {Array<BaseEntity>}entities
 */

function receiveEntitiesAndResolve(modelName, entities) {
  var entityIds;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function receiveEntitiesAndResolve$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          entityIds = entities.map(function (entity) {
            assertIsModelEntity(entity);
            return entity.id;
          });

        case 2:
          if (!(entityIds.length > 0)) {
            _context3.next = 7;
            break;
          }

          _context3.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getEntityById', [modelName, entityIds.pop()]);

        case 5:
          _context3.next = 2;
          break;

        case 7:
          _context3.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'receiveEntityRecords', modelName, entities);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Asserts whether the given value is a model entity and throws
 * InvalidModelEntity if it is not.
 *
 * @param {BaseEntity} entity
 * @throws InvalidModelEntity
 */

function assertIsModelEntity(entity) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntity"])(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidModelEntity"]('receiveEntityIdAndResolve expects an instance of BaseEntity', entity);
  }
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/create-relations-generators.js":
/*!***********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/create-relations-generators.js ***!
  \***********************************************************************************/
/*! exports provided: createRelation, createRelations, resolveRelationRecordForRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRelation", function() { return createRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRelations", function() { return createRelations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRelationRecordForRelation", function() { return resolveRelationRecordForRelation; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");



var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(createRelation),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(createRelations),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(resolveRelationRecordForRelation);

/**
 * External imports
 */





/**
 * Internal imports
 */



/**
 * Action generator yielding actions that add the relation to the state for a
 * single relation entity.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {BaseEntity} relationEntity
 */

function createRelation(modelName, entityId, relationName, relationEntity) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function createRelation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(relationEntity, relationName)) {
            _context.next = 5;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'The provided relation entity (%s) is not a base entity instance' + ' for the %s relation model', relationEntity, relationName);
          return _context.abrupt("return");

        case 5:
          _context.next = 7;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveEntityAndResolve', relationEntity);

        case 7:
          _context.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveRelatedEntities', modelName, entityId, relationName, [relationEntity.id]);

        case 9:
          _context.next = 11;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveDirtyRelationAddition', relationName, relationEntity.id, modelName, entityId);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action generator yielding actions that add the relation to the state for
 * multiple relation entities.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array<BaseEntity>} relationEntities
 */


function createRelations(modelName, entityId, relationName, relationEntities) {
  var relationIds, modelEntity, relationsToResolve, relationEntity;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function createRelations$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);
          _context2.prev = 2;
          assertArrayHasEntitiesForModel(relationEntities, relationName);
          _context2.next = 10;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](2);
          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'Incoming relation Entities do not contain BaseEntity instances ' + 'for the given relation model (%s)', relationName);
          return _context2.abrupt("return");

        case 10:
          relationIds = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_6__["getIdsFromBaseEntityArray"])(relationEntities);
          _context2.next = 13;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveEntitiesAndResolve', relationName, relationEntities);

        case 13:
          _context2.next = 15;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveRelatedEntities', modelName, entityId, relationName, relationIds);

        case 15:
          _context2.next = 17;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getEntityById', modelName, entityId);

        case 17:
          modelEntity = _context2.sent;
          _context2.next = 20;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelatedEntities', [modelEntity, relationName]);

        case 20:
          relationsToResolve = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(relationEntities);

        case 21:
          if (!(relationsToResolve.length > 0)) {
            _context2.next = 29;
            break;
          }

          relationEntity = relationsToResolve.pop();
          _context2.next = 25;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveDirtyRelationAddition', relationName, relationEntity.id, modelName, entityId);

        case 25:
          _context2.next = 27;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelatedEntities', [relationEntity, modelName]);

        case 27:
          _context2.next = 21;
          break;

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 6]]);
}
/**
 * This action is used to ensure a relation Entity related to the given
 * model entity id is both added to the state and various selectors for these
 * are resolved so no additional resolution happens for these.
 *
 * The purpose for this action is to allow for doing more efficient batch
 * queries of entities from an api request and then triggering the resolution of
 * any more granular selectors that have resolvers.  This basically allows one
 * to hydrate the `eventespresso/core` state with more efficient queries.
 *
 * @param {BaseEntity} relationEntity
 * @param {string} modelName
 * @param {number|string} modelId
 */


function resolveRelationRecordForRelation(relationEntity, modelName, modelId) {
  var relationName, hasEntity, modelEntity;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function resolveRelationRecordForRelation$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationEntity.modelName);
          _context3.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["select"])('core/data', 'hasFinishedResolution', _constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getEntityById', [relationName, relationEntity.id]);

        case 4:
          hasEntity = _context3.sent;

          if (!hasEntity) {
            _context3.next = 11;
            break;
          }

          _context3.next = 8;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["select"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getEntityById', relationName, relationEntity.id);

        case 8:
          _context3.t0 = _context3.sent;
          _context3.next = 12;
          break;

        case 11:
          _context3.t0 = relationEntity;

        case 12:
          relationEntity = _context3.t0;

          if (hasEntity) {
            _context3.next = 16;
            break;
          }

          _context3.next = 16;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveEntityAndResolve', relationEntity);

        case 16:
          _context3.next = 18;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'receiveRelatedEntities', modelName, modelId, relationName, [relationEntity.id]);

        case 18:
          _context3.next = 20;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getEntityById', modelName, modelId);

        case 20:
          modelEntity = _context3.sent;
          _context3.next = 23;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelatedEntities', [modelEntity, relationName]);

        case 23:
          _context3.next = 25;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_7__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelatedEntities', [relationEntity, modelName]);

        case 25:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Asserts that the provided map has BaseEntity instances for the expected
 * model name.
 *
 * @param {Array<BaseEntity>} entities
 * @param {string} relationModelName Expected to be the singular form for the
 * modelName.
 * @throws InvalidModelEntity
 */


var assertArrayHasEntitiesForModel = function assertArrayHasEntitiesForModel(entities, relationModelName) {
  relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationModelName);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entity = _step.value;

      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(entity, relationModelName)) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["InvalidModelEntity"]('', entity);
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
};



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/delete-entity-generators.js":
/*!********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/delete-entity-generators.js ***!
  \********************************************************************************/
/*! exports provided: deleteEntityById, trashEntityById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEntityById", function() { return deleteEntityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trashEntityById", function() { return trashEntityById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteEntityById),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(trashEntityById);

/**
 * Internal Imports
 */



/**
 * External imports
 */


/**
 * Action generator yielding actions for queuing an entity delete record
 * in the state.
 *
 * @param {string} modelName
 * @param {number} entityId
 */

function deleteEntityById(modelName, entityId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteEntityById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["singularModelName"])(modelName);
          _context.next = 3;
          return Object(_remove_entities__WEBPACK_IMPORTED_MODULE_1__["removeEntityById"])(modelName, entityId);

        case 3:
          _context.next = 5;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeAllRelatedEntitiesForModelEntity"])(modelName, entityId);

        case 5:
          _context.next = 7;
          return Object(_receive_entities__WEBPACK_IMPORTED_MODULE_2__["receiveDeleteEntityId"])(modelName, entityId);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action generator yielding actions for queueing an entity trash record in the
 * state.
 *
 * @param {string} modelName
 * @param {number} entityId
 */

function trashEntityById(modelName, entityId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function trashEntityById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["singularModelName"])(modelName);
          _context2.next = 3;
          return Object(_remove_entities__WEBPACK_IMPORTED_MODULE_1__["removeEntityById"])(modelName, entityId);

        case 3:
          _context2.next = 5;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_3__["removeAllRelatedEntitiesForModelEntity"])(modelName, entityId);

        case 5:
          _context2.next = 7;
          return Object(_receive_entities__WEBPACK_IMPORTED_MODULE_2__["receiveTrashEntityId"])(modelName, entityId);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/delete-relations-generators.js":
/*!***********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/delete-relations-generators.js ***!
  \***********************************************************************************/
/*! exports provided: removeDirtyRelationForAddition, removeRelationForEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForAddition", function() { return removeDirtyRelationForAddition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRelationForEntity", function() { return removeRelationForEntity; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeDirtyRelationForAddition),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeRelationForEntity);

/**
 * Internal Imports
 */


/**
 * External imports
 */


/**
 * Action generator yielding actions for handling removing the queued relations
 * for addition in the state
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationEntityId
 */

function removeDirtyRelationForAddition(modelName, entityId, relationName, relationEntityId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeDirtyRelationForAddition$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          _context.next = 3;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_2__["removeDirtyRelationAddition"])(relationName, relationEntityId, modelName, entityId);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action generator yielding actions for actions for queuing the removal of a
 * relation.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationEntityId
 */


function removeRelationForEntity(modelName, entityId, relationName, relationEntityId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeRelationForEntity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);
          _context2.next = 4;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_2__["removeRelatedEntities"])(modelName, entityId, relationName, [relationEntityId]);

        case 4:
          _context2.next = 6;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_2__["removeDirtyRelationAddition"])(modelName, entityId, relationName, relationEntityId);

        case 6:
          _context2.next = 8;
          return Object(_receive_relations__WEBPACK_IMPORTED_MODULE_1__["receiveDirtyRelationDeletion"])(relationName, relationEntityId, modelName, entityId);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/index.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/index.js ***!
  \*************************************************************/
/*! exports provided: receiveEntityRecords, receiveAndReplaceEntityRecords, receiveEntity, receiveDeleteEntityId, receiveTrashEntityId, receiveRelatedEntities, receiveDirtyRelationAddition, receiveDirtyRelationDeletion, receiveUpdatedEntityIdForRelations, removeEntityById, removeDeleteEntityId, removeTrashEntityId, removeAllRelatedEntitiesForModelEntity, removeRelatedEntities, removeDirtyRelationAddition, removeDirtyRelationDeletion, removeDirtyRelationForType, createEntity, receiveEntityAndResolve, receiveEntitiesAndResolve, createRelation, createRelations, resolveRelationRecordForRelation, deleteEntityById, trashEntityById, removeDirtyRelationForAddition, removeRelationForEntity, persistEntityRecord, persistForEntityId, persistForEntityIds, persistDeletesForModel, persistTrashesForModel, persistAllDeletes, persistAddRelationsForModel, persistDeleteRelationsForModel, persistRelationsForModel, persistRelationsForEntityId, persistRelationsForEntityIdAndRelation, persistRelationsForEntityIdAndRelationId, persistNewEntityAndRemoveDirtyRelations, getRelationState, resetAllState, resetStateForModel, resetAllModelSpecific, resetModelSpecificForSelector, resetModelSpecificForSelectorAndArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-creators */ "./assets/src/data/eventespresso/core/actions/action-creators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntityRecords", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveEntityRecords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveAndReplaceEntityRecords", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveAndReplaceEntityRecords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntity", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDeleteEntityId", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveDeleteEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveTrashEntityId", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveTrashEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveRelatedEntities", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationAddition", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveDirtyRelationAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationDeletion", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveDirtyRelationDeletion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveUpdatedEntityIdForRelations", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["receiveUpdatedEntityIdForRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntityById", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDeleteEntityId", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeDeleteEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTrashEntityId", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeTrashEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAllRelatedEntitiesForModelEntity", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeAllRelatedEntitiesForModelEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRelatedEntities", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationAddition", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeDirtyRelationAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationDeletion", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeDirtyRelationDeletion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForType", function() { return _action_creators__WEBPACK_IMPORTED_MODULE_0__["removeDirtyRelationForType"]; });

/* harmony import */ var _action_generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-generators */ "./assets/src/data/eventespresso/core/actions/action-generators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntity", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["createEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntityAndResolve", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["receiveEntityAndResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveEntitiesAndResolve", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["receiveEntitiesAndResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRelation", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["createRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRelations", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["createRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveRelationRecordForRelation", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resolveRelationRecordForRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntityById", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["deleteEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trashEntityById", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["trashEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForAddition", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["removeDirtyRelationForAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRelationForEntity", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["removeRelationForEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistEntityRecord", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistEntityRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistForEntityId", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistForEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistForEntityIds", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistForEntityIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistDeletesForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistDeletesForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistTrashesForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistTrashesForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistAllDeletes", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistAllDeletes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistAddRelationsForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistAddRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistDeleteRelationsForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistDeleteRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistRelationsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityId", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistRelationsForEntityId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelation", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistRelationsForEntityIdAndRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelationId", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistRelationsForEntityIdAndRelationId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistNewEntityAndRemoveDirtyRelations", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["persistNewEntityAndRemoveDirtyRelations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationState", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["getRelationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllState", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resetAllState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStateForModel", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resetStateForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllModelSpecific", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resetAllModelSpecific"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelector", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resetModelSpecificForSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelectorAndArgs", function() { return _action_generators__WEBPACK_IMPORTED_MODULE_1__["resetModelSpecificForSelectorAndArgs"]; });




/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/persist-entity-generators.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/persist-entity-generators.js ***!
  \*********************************************************************************/
/*! exports provided: persistEntityRecord, persistForEntityId, persistForEntityIds, persistDeletesForModel, persistTrashesForModel, persistAllDeletes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistEntityRecord", function() { return persistEntityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistForEntityId", function() { return persistForEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistForEntityIds", function() { return persistForEntityIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistDeletesForModel", function() { return persistDeletesForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTrashesForModel", function() { return persistTrashesForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistAllDeletes", function() { return persistAllDeletes; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistEntityRecord),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistForEntityId),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistForEntityIds),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistDeletesForModel),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistTrashesForModel),
    _marked6 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(persistAllDeletes);

/**
 * External imports.
 */




/**
 * Internal imports.
 */







var DEFAULT_EMPTY_OBJECT = {};
var DEFAULT_EMPTY_ARRAY = [];
/**
 * Action generator for persisting an entity record (insert/update)
 * to the server.
 *
 * @param {string} modelName
 * @param {BaseEntity} entity
 * @return {null|BaseEntity} If successfully persisted the persisted entity is
 * returned.  Otherwise null.
 */

function persistEntityRecord(modelName, entity) {
  var factory, path, updatedEntity, updatedEntityRecord, newId;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistEntityRecord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName); // check if is an instance of BaseEntity

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(entity, modelName)) {
            _context.next = 4;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'The provided entity is not a BaseEntity child for the ' + 'provided model.');
          return _context.abrupt("return", null);

        case 4:
          if (!entity.isClean) {
            _context.next = 7;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'The entity provided has no changes to persist.');
          return _context.abrupt("return", null);

        case 7:
          _context.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_10__["REDUCER_KEY"], 'getFactoryForModel', modelName);

        case 9:
          factory = _context.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityFactoryOfModel"])(factory, modelName)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", null);

        case 12:
          path = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["applyQueryString"])(modelName);
          _context.next = 15;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: entity.isNew ? path : path + '/' + entity.id,
            method: entity.isNew ? 'POST' : 'PUT',
            data: entity.forPersist
          });

        case 15:
          updatedEntity = _context.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(updatedEntity)) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", null);

        case 18:
          updatedEntityRecord = factory.fromExisting(updatedEntity);
          newId = updatedEntityRecord.id;

          if (!entity.isNew) {
            _context.next = 27;
            break;
          }

          _context.next = 23;
          return Object(_remove_entities__WEBPACK_IMPORTED_MODULE_6__["removeEntityById"])(modelName, entity.id);

        case 23:
          _context.next = 25;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getEntityById', [modelName, newId]);

        case 25:
          _context.next = 27;
          return Object(_receive_relations__WEBPACK_IMPORTED_MODULE_8__["receiveUpdatedEntityIdForRelations"])(modelName, entity.id, newId);

        case 27:
          _context.next = 29;
          return Object(_receive_entities__WEBPACK_IMPORTED_MODULE_7__["receiveAndReplaceEntityRecords"])(modelName, [updatedEntityRecord]);

        case 29:
          return _context.abrupt("return", updatedEntityRecord);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action generator for persisting entities with the given id to the server.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {BaseEntity|null} If the entity is successfully persisted it is
 * returned (may have a new id!), otherwise null is returned.
 */


function persistForEntityId(modelName, entityId) {
  var entity, persistedEntity;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistForEntityId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          _context2.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getEntityById', modelName, entityId);

        case 3:
          entity = _context2.sent;

          if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(entity, modelName)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'persistEntityRecord', modelName, entity);

        case 7:
          persistedEntity = _context2.sent;
          return _context2.abrupt("return", Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(persistedEntity, modelName) ? persistedEntity : null);

        case 9:
          return _context2.abrupt("return", null);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action generator for persisting entities with the given ids to the server.
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @return {Object} Entities persisted indexed by ID.
 */


function persistForEntityIds(modelName) {
  var entityIds,
      entities,
      retrievedEntities,
      retrievedIds,
      persistedEntities,
      _persistedEntity,
      _args3 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistForEntityIds$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          entityIds = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : [];
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          _context3.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getEntitiesByIds', modelName, entityIds);

        case 4:
          entities = _context3.sent;
          retrievedEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(entities) ? Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["keyEntitiesByPrimaryKeyValue"])('event', entities) : new Map();
          retrievedIds = Array.from(retrievedEntities.keys());

          if (!(retrievedIds.length < 1)) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 9:
          persistedEntities = {};

        case 10:
          if (!(retrievedIds.length > 0)) {
            _context3.next = 17;
            break;
          }

          _context3.next = 13;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'persistEntityRecord', modelName, retrievedEntities.get(retrievedIds.pop()));

        case 13:
          _persistedEntity = _context3.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(_persistedEntity, modelName)) {
            persistedEntities[_persistedEntity.id] = _persistedEntity;
          }

          _context3.next = 10;
          break;

        case 17:
          return _context3.abrupt("return", persistedEntities);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Action generator for persisting any queued deletes for the given model.
 *
 * @param {string} modelName
 * @return {Array} An array of entity ids for entities successfully deleted.
 */


function persistDeletesForModel(modelName) {
  var entityIds, deletedIds, entityId, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistDeletesForModel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          _context4.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getEntityIdsQueuedForDelete', modelName);

        case 3:
          entityIds = _context4.sent;

          if (!(entityIds.length < 0)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 6:
          deletedIds = [];

        case 7:
          if (!(entityIds.length > 0)) {
            _context4.next = 18;
            break;
          }

          entityId = entityIds.pop();
          _context4.next = 11;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["applyQueryString"])(modelName) + '/' + entityId,
            data: {
              force: true
            },
            method: 'DELETE'
          });

        case 11:
          response = _context4.sent;

          if (!response.deleted) {
            _context4.next = 16;
            break;
          }

          deletedIds.push(entityId);
          _context4.next = 16;
          return Object(_remove_entities__WEBPACK_IMPORTED_MODULE_6__["removeDeleteEntityId"])(modelName, entityId);

        case 16:
          _context4.next = 7;
          break;

        case 18:
          return _context4.abrupt("return", deletedIds);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Action generator for persisting any queued trashes for the given model.
 *
 * @param {string} modelName
 * @return {Array} An array of entity ids for entities successfully trashed.
 */


function persistTrashesForModel(modelName) {
  var entityIds, trashedIds, _entityId, success;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistTrashesForModel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          _context5.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getEntityIdsQueuedForTrash', modelName);

        case 3:
          entityIds = _context5.sent;

          if (!(entityIds.length < 1)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 6:
          trashedIds = [];

        case 7:
          if (!(entityIds.length > 0)) {
            _context5.next = 18;
            break;
          }

          _entityId = entityIds.pop();
          _context5.next = 11;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["applyQueryString"])(modelName) + '/' + _entityId,
            method: 'DELETE'
          });

        case 11:
          success = _context5.sent;

          if (!success) {
            _context5.next = 16;
            break;
          }

          trashedIds.push(_entityId);
          _context5.next = 16;
          return Object(_remove_entities__WEBPACK_IMPORTED_MODULE_6__["removeTrashEntityId"])(modelName, _entityId);

        case 16:
          _context5.next = 7;
          break;

        case 18:
          return _context5.abrupt("return", trashedIds);

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Action generator for persisting queued delete and trash actions for all
 * models in the state.
 *
 * @return {Object} An object indexed by delete/trash containing an array of
 * entity ids that were persisted.
 */


function persistAllDeletes() {
  var modelsForDelete, deletedIds, modelForDelete, idsDeleted, modelsForTrash, trashedIds, modelForTrash, idsTrashed;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function persistAllDeletes$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getModelsQueuedForDelete');

        case 2:
          modelsForDelete = _context6.sent;

          if (!(modelsForDelete.length < 1)) {
            _context6.next = 5;
            break;
          }

          return _context6.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 5:
          deletedIds = {};

        case 6:
          if (!(modelsForDelete.length > 0)) {
            _context6.next = 14;
            break;
          }

          modelForDelete = modelsForDelete.pop();
          _context6.next = 10;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'persistDeletesForModel', modelForDelete);

        case 10:
          idsDeleted = _context6.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(idsDeleted)) {
            deletedIds[modelForDelete] = idsDeleted;
          }

          _context6.next = 6;
          break;

        case 14:
          _context6.next = 16;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getModelsQueuedForTrash');

        case 16:
          modelsForTrash = _context6.sent;

          if (!(modelsForTrash.length < 1)) {
            _context6.next = 19;
            break;
          }

          return _context6.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 19:
          trashedIds = {};

        case 20:
          if (!(modelsForTrash.length > 0)) {
            _context6.next = 28;
            break;
          }

          modelForTrash = modelsForTrash.pop();
          _context6.next = 24;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'persistTrashesForModel', modelForTrash);

        case 24:
          idsTrashed = _context6.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(idsTrashed)) {
            trashedIds[modelForTrash] = idsTrashed;
          }

          _context6.next = 20;
          break;

        case 28:
          return _context6.abrupt("return", {
            deleted: deletedIds,
            trashed: trashedIds
          });

        case 29:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/persist-relations-generators.js":
/*!************************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/persist-relations-generators.js ***!
  \************************************************************************************/
/*! exports provided: persistAddRelationsForModel, persistDeleteRelationsForModel, persistRelationsForModel, persistRelationsForEntityId, persistRelationsForEntityIdAndRelation, persistRelationsForEntityIdAndRelationId, persistNewEntityAndRemoveDirtyRelations, getRelationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistAddRelationsForModel", function() { return persistAddRelationsForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistDeleteRelationsForModel", function() { return persistDeleteRelationsForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForModel", function() { return persistRelationsForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityId", function() { return persistRelationsForEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelation", function() { return persistRelationsForEntityIdAndRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistRelationsForEntityIdAndRelationId", function() { return persistRelationsForEntityIdAndRelationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistNewEntityAndRemoveDirtyRelations", function() { return persistNewEntityAndRemoveDirtyRelations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationState", function() { return getRelationState; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");



var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistAddRelationsForModel),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistDeleteRelationsForModel),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistRelationsForModel),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistRelationsForEntityId),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistRelationsForEntityIdAndRelation),
    _marked6 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistRelationsForEntityIdAndRelationId),
    _marked7 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(persistNewEntityAndRemoveDirtyRelations),
    _marked8 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(getRelationState);

/**
 * External imports.
 */




/**
 * Internal imports.
 */





var DEFAULT_EMPTY_OBJECT = {};
var DEFAULT_EMPTY_ARRAY = [];
/**
 * Action generator for persisting any queued add relations to the server
 * specific to the given model name.
 *
 * @param {string} modelName
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */

function persistAddRelationsForModel(modelName) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistAddRelationsForModel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          _context.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistRelationsForModel', modelName);

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action generator for persisting any queued delete relations to the server
 * specific to the given model name.
 *
 * @param {string} modelName
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */


function persistDeleteRelationsForModel(modelName) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistDeleteRelationsForModel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          _context2.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistRelationsForModel', modelName, false);

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given model name.
 *
 * @param {string} modelName
 * @param {boolean} addRelation  Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */


function persistRelationsForModel(modelName) {
  var addRelation,
      relationState,
      entityIds,
      relationsPersisted,
      entityId,
      persistedRelations,
      _args3 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistRelationsForModel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          addRelation = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          _context3.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelationState', modelName, addRelation);

        case 4:
          relationState = _context3.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationState)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 7:
          entityIds = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(relationState);
          relationsPersisted = entityIds.length > 0 ? {} : DEFAULT_EMPTY_OBJECT;

        case 9:
          if (!(entityIds.length > 0)) {
            _context3.next = 17;
            break;
          }

          entityId = entityIds.pop();
          _context3.next = 13;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistRelationsForEntityId', modelName, entityId, addRelation, relationState);

        case 13:
          persistedRelations = _context3.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(persistedRelations)) {
            relationsPersisted[entityId] = persistedRelations;
          }

          _context3.next = 9;
          break;

        case 17:
          return _context3.abrupt("return", relationsPersisted);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {Object} An object indexed by relation names with the values an array
 * of relation ids for each relation that were persisted.
 */


function persistRelationsForEntityId(modelName, entityId) {
  var addRelation,
      relationState,
      relationNames,
      persistedRelations,
      relationName,
      persistedRelationIds,
      _args4 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistRelationsForEntityId$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          addRelation = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : true;
          relationState = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : DEFAULT_EMPTY_OBJECT;
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          _context4.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelationState', modelName, addRelation, relationState);

        case 5:
          relationState = _context4.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationState)) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 8:
          relationNames = relationState[entityId] ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(relationState[entityId]) : DEFAULT_EMPTY_ARRAY;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationNames)) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", DEFAULT_EMPTY_OBJECT);

        case 11:
          persistedRelations = {};

        case 12:
          if (!(relationNames.length > 0)) {
            _context4.next = 20;
            break;
          }

          relationName = relationNames.pop();
          _context4.next = 16;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistRelationsForEntityIdAndRelation', modelName, entityId, relationName, addRelation, relationState);

        case 16:
          persistedRelationIds = _context4.sent;

          if (persistedRelationIds.length > 0) {
            persistedRelations[relationName] = persistedRelationIds;
          }

          _context4.next = 12;
          break;

        case 20:
          return _context4.abrupt("return", persistedRelations);

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name and for the given
 * relation to that model.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {Array} An array of relation ids persisted for that relation.
 */


function persistRelationsForEntityIdAndRelation(modelName, entityId, relationName) {
  var addRelation,
      relationState,
      relationEntityIds,
      persistedRelationIds,
      persistedRelationId,
      _args5 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistRelationsForEntityIdAndRelation$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          addRelation = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : true;
          relationState = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : DEFAULT_EMPTY_OBJECT;
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(relationName);
          _context5.next = 6;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelationState', modelName, addRelation, relationState);

        case 6:
          relationState = _context5.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationState)) {
            _context5.next = 9;
            break;
          }

          return _context5.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 9:
          relationEntityIds = relationState[entityId] && relationState[entityId][relationName] ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(relationState[entityId][relationName]) : DEFAULT_EMPTY_ARRAY;

          if (!(relationEntityIds.length < 1)) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 12:
          persistedRelationIds = [];

        case 13:
          if (!(relationEntityIds.length > 0)) {
            _context5.next = 20;
            break;
          }

          _context5.next = 16;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistRelationsForEntityIdAndRelationId', modelName, entityId, relationName, relationEntityIds.pop(), addRelation, relationState);

        case 16:
          persistedRelationId = _context5.sent;

          if (persistedRelationId) {
            persistedRelationIds.push(persistedRelationId);
          }

          _context5.next = 13;
          break;

        case 20:
          return _context5.abrupt("return", persistedRelationIds);

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name, for the given
 * relation to that model and the given relation id for that relation.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationId
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {number} If 0 is returned then the entity was not persisted,
 * otherwise the value returned will be the id persisted.
 */


function persistRelationsForEntityIdAndRelationId(modelName, entityId, relationName, relationId) {
  var addRelation,
      relationState,
      entityIdChanged,
      endpoint,
      success,
      _args6 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistRelationsForEntityIdAndRelationId$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          addRelation = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : true;
          relationState = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : DEFAULT_EMPTY_OBJECT;
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(relationName);
          _context6.next = 6;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getRelationState', modelName, addRelation, relationState);

        case 6:
          relationState = _context6.sent;
          entityIdChanged = false;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationState)) {
            _context6.next = 10;
            break;
          }

          return _context6.abrupt("return", 0);

        case 10:
          if (!cuid__WEBPACK_IMPORTED_MODULE_3___default.a.isCuid(entityId)) {
            _context6.next = 17;
            break;
          }

          _context6.next = 13;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistNewEntityAndRemoveDirtyRelations', relationName, relationId, modelName, entityId, addRelation, [modelName, entityId]);

        case 13:
          entityId = _context6.sent;

          if (!(entityId === 0)) {
            _context6.next = 16;
            break;
          }

          return _context6.abrupt("return", entityId);

        case 16:
          entityIdChanged = true;

        case 17:
          if (!cuid__WEBPACK_IMPORTED_MODULE_3___default.a.isCuid(relationId)) {
            _context6.next = 23;
            break;
          }

          _context6.next = 20;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistNewEntityAndRemoveDirtyRelations', relationName, relationId, modelName, entityId, addRelation, [relationName, relationId], !entityIdChanged);

        case 20:
          relationId = _context6.sent;

          if (!(relationId === 0)) {
            _context6.next = 23;
            break;
          }

          return _context6.abrupt("return", relationId);

        case 23:
          _context6.next = 25;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_9__["REDUCER_KEY"], 'getRelationEndpointForEntityId', modelName, entityId, relationName);

        case 25:
          endpoint = _context6.sent;

          if (!endpoint) {
            _context6.next = 32;
            break;
          }

          _context6.next = 29;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["fetch"])({
            path: endpoint + '/' + relationId,
            method: addRelation ? 'PUT' : 'DELETE'
          });

        case 29:
          _context6.t0 = _context6.sent;
          _context6.next = 33;
          break;

        case 32:
          _context6.t0 = false;

        case 33:
          success = _context6.t0;

          if (!success) {
            _context6.next = 38;
            break;
          }

          _context6.next = 37;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_7__["removeDirtyRelationForType"])(relationName, relationId, modelName, entityId, addRelation);

        case 37:
          return _context6.abrupt("return", relationId);

        case 38:
          return _context6.abrupt("return", 0);

        case 39:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * Action generator for handling persisting a new entity existing in the
 * relation.
 *
 * @param {string} relationName
 * @param {number} relationId
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation
 * @param {Array} persistingArguments
 * @param {boolean} doRelationRemoval
 * @return {number} Either the new id or 0 if the entity was not successfully
 * persisted.
 */


function persistNewEntityAndRemoveDirtyRelations(relationName, relationId, modelName, entityId, addRelation, persistingArguments) {
  var doRelationRemoval,
      persistedEntity,
      _args7 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function persistNewEntityAndRemoveDirtyRelations$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          doRelationRemoval = _args7.length > 6 && _args7[6] !== undefined ? _args7[6] : true;
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(relationName);
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          _context7.next = 5;
          return _base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveDispatch"].apply(void 0, [_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'persistForEntityId'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(persistingArguments)));

        case 5:
          persistedEntity = _context7.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_4__["isModelEntityOfModel"])(persistedEntity, persistingArguments[0])) {
            _context7.next = 8;
            break;
          }

          return _context7.abrupt("return", 0);

        case 8:
          if (!doRelationRemoval) {
            _context7.next = 11;
            break;
          }

          _context7.next = 11;
          return Object(_remove_relations__WEBPACK_IMPORTED_MODULE_7__["removeDirtyRelationForType"])(relationName, relationId, modelName, entityId, addRelation);

        case 11:
          return _context7.abrupt("return", persistedEntity.id);

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Generator for returning relation state for the given model.
 *
 * @param {string} modelName
 * @param {boolean} addRelation  Whether to return the relation state for relations
 * queued for adding (true) or deletion (false).
 * @param {Object} relationState  Optionally, callers can provide a relation
 * relation state and if provided will be used instead of selecting from the
 * store.
 *
 * @return {Object}  The relation state for the given model.
 */


function getRelationState(modelName) {
  var addRelation,
      relationState,
      selector,
      _args8 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getRelationState$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          addRelation = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : true;
          relationState = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : DEFAULT_EMPTY_OBJECT;
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_5__["singularModelName"])(modelName);
          selector = addRelation ? 'getRelationAdditionsQueuedForModel' : 'getRelationDeletionsQueuedForModel';

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(relationState)) {
            _context8.next = 10;
            break;
          }

          _context8.next = 7;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["select"])(_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], selector, modelName);

        case 7:
          _context8.t0 = _context8.sent;
          _context8.next = 11;
          break;

        case 10:
          _context8.t0 = relationState;

        case 11:
          relationState = _context8.t0;
          return _context8.abrupt("return", relationState);

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/receive-entities.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/receive-entities.js ***!
  \************************************************************************/
/*! exports provided: receiveEntityRecords, receiveAndReplaceEntityRecords, receiveEntity, receiveDeleteEntityId, receiveTrashEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntityRecords", function() { return receiveEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveAndReplaceEntityRecords", function() { return receiveAndReplaceEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntity", function() { return receiveEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDeleteEntityId", function() { return receiveDeleteEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveTrashEntityId", function() { return receiveTrashEntityId; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal imports
 */

var types = _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].entities;
/**
 * External imports
 */


/**
 * Action for receiving entity records.
 * Entity records received will NOT replace any existing entities in the state
 * (matching ids).
 *
 * @param {string} modelName expected to be an model name.
 * @param {Array<BaseEntity>} entities Array of model entity
 * instances indexed by the primary key.
 * @return {
 * {
 * 	type: string,
 * 	modelName: string,
 * 	entities: Array<BaseEntity>
 * 	}
 * }  An action object.
 */

function receiveEntityRecords(modelName) {
  var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  return {
    type: types.RECEIVE_ENTITY_RECORDS,
    modelName: modelName,
    entities: entities
  };
}
/**
 * Same as receiveEntityRecords except incoming entities will replace any
 * matching records (by ID)  in the state.
 * @param {string} modelName
 * @param {Array} entities
 * @return {
 * {
 * 	type: string,
 * 	modelName: string,
 * 	entities: Array<BaseEntity>
 * 	}
 * }  An action object.
 */


function receiveAndReplaceEntityRecords(modelName) {
  var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  return {
    type: types.RECEIVE_AND_REPLACE_ENTITY_RECORDS,
    modelName: modelName,
    entities: entities
  };
}
/**
 * Action creator for adding an entity to the state (as opposed to an entity
 * record)
 *
 * @param {BaseEntity} entity
 * @return {{type: string, entity: BaseEntity}} An action
 * object.
 */


function receiveEntity(entity) {
  return {
    type: types.RECEIVE_ENTITY,
    entity: entity
  };
}
/**
 * Action creator for queuing an entity id for trash.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */


function receiveTrashEntityId(modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  return {
    type: types.RECEIVE_TRASH_ENTITY_ID,
    modelName: modelName,
    entityId: entityId
  };
}
/**
 * Action creator for queueing an entity id for hard delete.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */


function receiveDeleteEntityId(modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  return {
    type: types.RECEIVE_DELETE_ENTITY_ID,
    modelName: modelName,
    entityId: entityId
  };
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/receive-relations.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/receive-relations.js ***!
  \*************************************************************************/
/*! exports provided: receiveRelatedEntities, receiveDirtyRelationAddition, receiveDirtyRelationDeletion, receiveUpdatedEntityIdForRelations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRelatedEntities", function() { return receiveRelatedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationAddition", function() { return receiveDirtyRelationAddition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDirtyRelationDeletion", function() { return receiveDirtyRelationDeletion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUpdatedEntityIdForRelations", function() { return receiveUpdatedEntityIdForRelations; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal imports
 */


var types = _action_types__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].relations;
/**
 * External imports
 */


/**
 * Action creator for adding relation indexes for entities and their relations.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array} relatedEntityIds
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: string,
 * 		entityId: number,
 * 		relatedEntityIds: Array
 * 	}
 * } An action object.
 */

function receiveRelatedEntities(modelName, entityId, relationName, relatedEntityIds) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  return {
    type: types.RECEIVE_RELATED_ENTITY_IDS,
    modelName: modelName,
    entityId: entityId,
    relationName: relationName,
    relatedEntityIds: relatedEntityIds
  };
}
/**
 * Action creator for queuing the a relation creation for the given data.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		type: string,
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		queueType: string
 * 	}
 * }
 * An action object.
 */


function receiveDirtyRelationAddition(relationName, relationEntityId, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  return {
    type: types.RECEIVE_DIRTY_RELATION_ADDITION,
    relationName: relationName,
    relationEntityId: relationEntityId,
    modelName: modelName,
    entityId: entityId,
    queueType: _constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_QUEUE_RELATION_ADD"]
  };
}
/**
 * Action creator for queueing the relation deletion for the given data.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		type: string,
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		queueType: string
 * 	}
 * } An action object.
 */


function receiveDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  return {
    type: types.RECEIVE_DIRTY_RELATION_DELETION,
    relationName: relationName,
    relationEntityId: relationEntityId,
    modelName: modelName,
    entityId: entityId,
    queueType: _constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_QUEUE_RELATION_DELETE"]
  };
}
/**
 * Action creator for triggering the replacement of any instance of the old
 * entity id in the state for the given model with the new entity id.
 *
 * Typically this is triggered after persisting a new entity to the server and
 * receiving its new entity id on response.
 *
 * @param {string} modelName
 * @param {number} oldEntityId
 * @param {number} newEntityId
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: *,
 * 		oldEntityId: *,
 * 		newEntityId: *
 * 	}
 * } An action object
 */


function receiveUpdatedEntityIdForRelations(modelName, oldEntityId, newEntityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return {
    type: types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS,
    modelName: modelName,
    oldEntityId: oldEntityId,
    newEntityId: newEntityId
  };
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/remove-entities.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/remove-entities.js ***!
  \***********************************************************************/
/*! exports provided: removeEntityById, removeDeleteEntityId, removeTrashEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityById", function() { return removeEntityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDeleteEntityId", function() { return removeDeleteEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrashEntityId", function() { return removeTrashEntityId; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * Internal imports
 */

var types = _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].entities;
/**
 * Action creator for removing the entity from the state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */

function removeEntityById(modelName, entityId) {
  return {
    type: types.REMOVE_ENTITY_BY_ID,
    modelName: modelName,
    entityId: entityId
  };
}
/**
 * Action creator for queueing the deletion of entity on the server
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: {number}}} An action
 * object
 */

function removeDeleteEntityId(modelName, entityId) {
  return {
    type: types.REMOVE_DELETE_ENTITY_ID,
    modelName: modelName,
    entityId: entityId
  };
}
/**
 * Action creator for queuing the trashing of entity on the server
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */

function removeTrashEntityId(modelName, entityId) {
  return {
    type: types.REMOVE_TRASH_ENTITY_ID,
    modelName: modelName,
    entityId: entityId
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/remove-relations.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/remove-relations.js ***!
  \************************************************************************/
/*! exports provided: removeAllRelatedEntitiesForModelEntity, removeRelatedEntities, removeDirtyRelationAddition, removeDirtyRelationDeletion, removeDirtyRelationForType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllRelatedEntitiesForModelEntity", function() { return removeAllRelatedEntitiesForModelEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRelatedEntities", function() { return removeRelatedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationAddition", function() { return removeDirtyRelationAddition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationDeletion", function() { return removeDirtyRelationDeletion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirtyRelationForType", function() { return removeDirtyRelationForType; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */

/**
 * Internal imports
 */



var types = _action_types__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].relations;
/**
 * Action creator for removing all indexed relations for a specific entity from
 * the state.
 *
 * Note: The following things are accomplished by this action (via the reducer):
 * - The relation index for the relation on this entity is removed from state.
 * - If the relation entities themselves have no other relation index, they
 *   are also removed from state.
 * - Any dirty relations for this entity are removed from state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}}
 * An action object
 */

function removeAllRelatedEntitiesForModelEntity(modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName);
  return {
    type: types.REMOVE_RELATED_ENTITIES_FOR_ENTITY,
    modelName: modelName,
    entityId: entityId
  };
}
/**
 * Action creator for removing relations from the given model from the relations
 * state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array} relatedEntityIds
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: string,
 * 		entityId: number,
 * 		relationName: string,
 * 		relationEntityIds: Array
 * 	}
 * } An action object.
 */


function removeRelatedEntities(modelName, entityId, relationName, relatedEntityIds) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(relationName);
  return {
    type: types.REMOVE_RELATED_ENTITY_IDS,
    modelName: modelName,
    entityId: entityId,
    relationName: relationName,
    relatedEntityIds: relatedEntityIds
  };
}
/**
 * Action creator for removing the dirty relation from the state for the given
 * relation action type (delete or add).
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object
 */


function removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId) {
  var addRelation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(relationName);
  var type = addRelation ? types.REMOVE_DIRTY_RELATION_ADDITION : types.REMOVE_DIRTY_RELATION_DELETION;
  return {
    relationName: relationName,
    relationEntityId: relationEntityId,
    modelName: modelName,
    entityId: entityId,
    type: type,
    queueType: addRelation ? _constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_QUEUE_RELATION_ADD"] : _constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_QUEUE_RELATION_DELETE"]
  };
}
/**
 * Action creator for removing the dirty relation from the add relation state
 * record.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object.
 */


function removeDirtyRelationAddition(relationName, relationEntityId, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(relationName);
  return removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId);
}
/**
 * An action creator for removing the dirty relation from the delete relation
 * state record.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object
 */


function removeDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(relationName);
  return removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId, false);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/reset.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/reset.js ***!
  \*************************************************************/
/*! exports provided: resetAllState, resetStateForModel, resetAllModelSpecific, resetModelSpecificForSelector, resetModelSpecificForSelectorAndArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllState", function() { return resetAllState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStateForModel", function() { return resetStateForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllModelSpecific", function() { return resetAllModelSpecific; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelector", function() { return resetModelSpecificForSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModelSpecificForSelectorAndArgs", function() { return resetModelSpecificForSelectorAndArgs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _model_model_selectors_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/model-selectors-index */ "./assets/src/data/eventespresso/core/model/model-selectors-index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetAllState),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetStateForModel),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetAllModelSpecific),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetModelSpecificForSelector),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetModelSpecificForSelectorAndArgs);

/**
 * External imports
 */




/**
 * Internal imports
 */





var types = _action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].resets;
/**
 * Resets the entire state to its default for the store.
 */

function resetAllState() {
  var resolvers, selector, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetAllState$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return {
            type: types.RESET_ALL_STATE
          };

        case 2:
          _context.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"]);

        case 4:
          resolvers = _context.sent;

          if (!invalidateActionsAvailable()) {
            _context.next = 9;
            break;
          }

          _context.next = 8;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'invalidateResolutionForStore', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"]);

        case 8:
          return _context.abrupt("return");

        case 9:
          _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(resolvers);

        case 10:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 40;
            break;
          }

          selector = _context.t1.value;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 15;
          _iterator = resolvers[selector]._map[Symbol.iterator]();

        case 17:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 24;
            break;
          }

          entry = _step.value;
          _context.next = 21;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], selector, entry[0]);

        case 21:
          _iteratorNormalCompletion = true;
          _context.next = 17;
          break;

        case 24:
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t2 = _context["catch"](15);
          _didIteratorError = true;
          _iteratorError = _context.t2;

        case 30:
          _context.prev = 30;
          _context.prev = 31;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 33:
          _context.prev = 33;

          if (!_didIteratorError) {
            _context.next = 36;
            break;
          }

          throw _iteratorError;

        case 36:
          return _context.finish(33);

        case 37:
          return _context.finish(30);

        case 38:
          _context.next = 10;
          break;

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[15, 26, 30, 38], [31,, 33, 37]]);
}
/**
 * Resets all state related to the given modelName
 *
 * Note: This does not reset any state in the modelSpecific tree as there is no
 * way to know what applies to the current model.
 *
 * @param {string} modelName
 */

function resetStateForModel(modelName) {
  var resolvers, _selector, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _entry;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetStateForModel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
          _context2.next = 3;
          return {
            type: types.RESET_STATE_FOR_MODEL,
            modelName: modelName
          };

        case 3:
          _context2.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"]);

        case 5:
          resolvers = _context2.sent;
          _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(resolvers);

        case 7:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 38;
            break;
          }

          _selector = _context2.t1.value;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 12;
          _iterator2 = resolvers[_selector]._map[Symbol.iterator]();

        case 14:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 22;
            break;
          }

          _entry = _step2.value;

          if (!((modelNameInSelector(_selector, modelName) || modelNameInArgs(_entry[0], modelName)) && !selectorIsModelSpecific(_selector))) {
            _context2.next = 19;
            break;
          }

          _context2.next = 19;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], _selector, _entry[0]);

        case 19:
          _iteratorNormalCompletion2 = true;
          _context2.next = 14;
          break;

        case 22:
          _context2.next = 28;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t2 = _context2["catch"](12);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t2;

        case 28:
          _context2.prev = 28;
          _context2.prev = 29;

          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }

        case 31:
          _context2.prev = 31;

          if (!_didIteratorError2) {
            _context2.next = 34;
            break;
          }

          throw _iteratorError2;

        case 34:
          return _context2.finish(31);

        case 35:
          return _context2.finish(28);

        case 36:
          _context2.next = 7;
          break;

        case 38:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[12, 24, 28, 36], [29,, 31, 35]]);
}
/**
 * Helper for determining whether the given modelName is found in the given
 * selectorName.
 *
 * @param {string} selectorName
 * @param {string} modelName
 *
 * @return {boolean} True means it is present, false means it isn't
 */

var modelNameInSelector = function modelNameInSelector(selectorName, modelName) {
  var singularName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  selectorName = selectorName.toLowerCase();
  return selectorName.indexOf(singularName) > -1;
};
/**
 * Helper for determining whether the given modelName is found in the given
 * set of args.
 *
 * This also considers if any of the args are an instance of BaseEntity and
 * if that BaseEntity instance is for the given model.
 *
 * @param {Array} args
 * @param {string} modelName
 *
 * @return {boolean}  True means it is present, false means it isn't.
 */


var modelNameInArgs = function modelNameInArgs(args, modelName) {
  var singularName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  var hasModelName = args.indexOf(singularName) > -1;

  if (hasModelName) {
    return true;
  } // it's possible one of the args is an instance of BaseEntity.  If so,
  // then let's compare against the modelName on the entity instance.


  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["some"])(args, function (arg) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(arg, singularName);
  });
};
/**
 * For the given selector name and (optional) selectorsToInvalidate, this
 * returns whether the selectorName is a match for the selectors to invalidate.
 *
 * @param {string} selectorName
 * @param {Array|null?} selectorsToInvalidate If null, then the match array will
 * be obtained from the registered modelSpecificSelectors imported for the
 * module
 *
 * @return {boolean} True means there is a match, false means there is not.
 */


var selectorIsModelSpecific = function selectorIsModelSpecific(selectorName) {
  var selectorsToInvalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  selectorsToInvalidate = selectorsToInvalidate === null ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(_model_model_selectors_index__WEBPACK_IMPORTED_MODULE_8__) : selectorsToInvalidate;
  return selectorsToInvalidate.indexOf(selectorName) > -1;
};
/**
 * Resets all model specific state (optionally restricted to the given selector
 * name if present).
 *
 * @param {string} selectorName  If present then state will only be reset for
 * the specific selector.  Otherwise all model specific state is reset.
 */


function resetAllModelSpecific(selectorName) {
  var resolvers, selectorsToInvalidate, _selector2, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _entry2;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetAllModelSpecific$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return {
            type: selectorName === undefined ? types.RESET_ALL_MODEL_SPECIFIC : types.RESET_MODEL_SPECIFIC_FOR_SELECTOR,
            selector: selectorName
          };

        case 2:
          _context3.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["select"])('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"]);

        case 4:
          resolvers = _context3.sent;
          selectorsToInvalidate = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(_model_model_selectors_index__WEBPACK_IMPORTED_MODULE_8__); // dispatch invalidation of the cached resolvers for model specific selector

          _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(resolvers);

        case 7:
          if ((_context3.t1 = _context3.t0()).done) {
            _context3.next = 39;
            break;
          }

          _selector2 = _context3.t1.value;

          if (!(selectorName === undefined || selectorName === _selector2)) {
            _context3.next = 37;
            break;
          }

          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context3.prev = 13;
          _iterator3 = resolvers[_selector2]._map[Symbol.iterator]();

        case 15:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context3.next = 23;
            break;
          }

          _entry2 = _step3.value;

          if (!selectorIsModelSpecific(_selector2, selectorsToInvalidate)) {
            _context3.next = 20;
            break;
          }

          _context3.next = 20;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], _selector2, _entry2[0]);

        case 20:
          _iteratorNormalCompletion3 = true;
          _context3.next = 15;
          break;

        case 23:
          _context3.next = 29;
          break;

        case 25:
          _context3.prev = 25;
          _context3.t2 = _context3["catch"](13);
          _didIteratorError3 = true;
          _iteratorError3 = _context3.t2;

        case 29:
          _context3.prev = 29;
          _context3.prev = 30;

          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }

        case 32:
          _context3.prev = 32;

          if (!_didIteratorError3) {
            _context3.next = 35;
            break;
          }

          throw _iteratorError3;

        case 35:
          return _context3.finish(32);

        case 36:
          return _context3.finish(29);

        case 37:
          _context3.next = 7;
          break;

        case 39:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[13, 25, 29, 37], [30,, 32, 36]]);
}
/**
 * Reset model specific state for the given selector name.
 *
 * @param {string} selectorName
 */

function resetModelSpecificForSelector(selectorName) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetModelSpecificForSelector$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(resetAllModelSpecific(selectorName), "t0", 1);

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Resets all state for a given model specific selector and its args
 *
 * @param {string} selectorName
 * @param {Array} args
 */

function resetModelSpecificForSelectorAndArgs(selectorName) {
  var _len,
      args,
      _key,
      _args5 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetModelSpecificForSelectorAndArgs$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          for (_len = _args5.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = _args5[_key];
          }

          _context5.next = 3;
          return {
            type: types.RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS,
            selector: selectorName,
            args: args
          };

        case 3:
          _context5.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], selectorName, args);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Helper for determining if actions are available in the `core/data` package.
 *
 * @return {boolean}  True means additional invalidation actions available.
 */

var invalidateActionsAvailable = function invalidateActionsAvailable() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/data').invalidateResolutionForStore !== undefined;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/constants.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/core/constants.js ***!
  \*********************************************************/
/*! exports provided: REDUCER_KEY, TYPE_QUEUE_RELATION_DELETE, TYPE_QUEUE_RELATION_ADD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_KEY", function() { return REDUCER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_QUEUE_RELATION_DELETE", function() { return TYPE_QUEUE_RELATION_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_QUEUE_RELATION_ADD", function() { return TYPE_QUEUE_RELATION_ADD; });
var REDUCER_KEY = 'eventespresso/core';
var TYPE_QUEUE_RELATION_DELETE = 'delete';
var TYPE_QUEUE_RELATION_ADD = 'add';

/***/ }),

/***/ "./assets/src/data/eventespresso/core/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/eventespresso/core/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/core/reducers/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/core/resolvers/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/core/model/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Registers store for 'eventespresso/core'.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _actions__WEBPACK_IMPORTED_MODULE_4__, _model__WEBPACK_IMPORTED_MODULE_6__["actions"]),
  selectors: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _selectors__WEBPACK_IMPORTED_MODULE_3__, _model__WEBPACK_IMPORTED_MODULE_6__["selectors"]),
  resolvers: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _resolvers__WEBPACK_IMPORTED_MODULE_5__, _model__WEBPACK_IMPORTED_MODULE_6__["resolvers"]),
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/actions.js":
/*!*********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/actions.js ***!
  \*********************************************************************/
/*! exports provided: receiveLatestCheckin, toggleCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveLatestCheckin", function() { return receiveLatestCheckin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCheckin", function() { return toggleCheckin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(receiveLatestCheckin),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toggleCheckin);

/**
 * External imports
 */





/**
 * Internal imports
 */




/**
 * Action for receiving the latest check-in record for the given datetime id and
 * registration id.
 *
 * @param {BaseEntity} checkinEntity
 * @param {number} registrationId
 * @param {number} dateTimeId
 */

function receiveLatestCheckin(checkinEntity, registrationId, dateTimeId) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function receiveLatestCheckin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(checkinEntity, 'checkin')) {
            _context.next = 2;
            break;
          }

          throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidModelEntity"]('Expected a checkin record.', checkinEntity);

        case 2:
          _context.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'receiveEntity', checkinEntity);

        case 4:
          _context.next = 6;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getEntityById', ['checkin', checkinEntity.id]);

        case 6:
          _context.next = 8;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'receiveSelectorValue', 'getLatestCheckin', checkinEntity.id, registrationId, dateTimeId);

        case 8:
          _context.next = 10;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getLatestCheckin', [registrationId, dateTimeId]);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Toggles the checkin state for the given registration id and datetime id.
 *
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @param {boolean} force  If true, then whether the registration CAN be checked
 * in or not is ignored.
 * @return {BaseEntity|null} Null if there is an error or the new Checkin entity
 */

function toggleCheckin(registrationId, dateTimeId) {
  var force,
      checkInResponse,
      path,
      factory,
      newCheckin,
      _args2 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toggleCheckin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          force = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
          path = "".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["getEndpoint"])('registration'), "/") + "".concat(registrationId, "/toggle_checkin_for_datetime/").concat(dateTimeId);
          _context2.prev = 2;
          _context2.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["fetch"])({
            path: path,
            method: 'POST',
            data: {
              force: force
            }
          });

        case 5:
          checkInResponse = _context2.sent;
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 12;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/notices', 'createErrorNotice', Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Toggling the checkin failed. Usually this is due to the checkin not having access', 'event_espresso'));

        case 12:
          return _context2.abrupt("return", null);

        case 13:
          _context2.next = 15;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_8__["REDUCER_KEY"], 'getFactoryForModel', 'checkin');

        case 15:
          factory = _context2.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityFactoryOfModel"])(factory, 'checkin')) {
            _context2.next = 19;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_5___default()(false, 'The factory for the checkin model could not be retrieved.');
          return _context2.abrupt("return", null);

        case 19:
          newCheckin = factory.fromExisting(checkInResponse);
          _context2.next = 22;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_6__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'receiveLatestCheckin', newCheckin, registrationId, dateTimeId);

        case 22:
          return _context2.abrupt("return", newCheckin);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 8]]);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/resolvers.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/resolvers.js ***!
  \***********************************************************************/
/*! exports provided: getLatestCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestCheckin", function() { return getLatestCheckin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getLatestCheckin);

/**
 * External imports
 */




/**
 * Internal imports
 */




/**
 * Resolver for the getLatestCheckin action.
 *
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @return {BaseEntity|null} Null if there is an error or no checkin record.
 */

function getLatestCheckin(registrationId, dateTimeId) {
  var checkInResponse, path, factory, newCheckin;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getLatestCheckin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          warning__WEBPACK_IMPORTED_MODULE_4___default()(!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(registrationId) && !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(dateTimeId), 'Both a registration id and datetime id are needed for getting the ' + 'latest checkin.');
          path = "".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getEndpoint"])('checkin'), "/") + "?where[REG_ID]=".concat(registrationId, "&where[DTT_ID]=").concat(dateTimeId) + '&order_by[CHK_timestamp]=DESC&limit=1';
          _context.prev = 2;
          _context.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: path,
            method: 'GET'
          });

        case 5:
          checkInResponse = _context.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(checkInResponse)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", null);

        case 8:
          checkInResponse = checkInResponse.pop();
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", null);

        case 14:
          _context.next = 16;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getFactoryForModel', 'checkin');

        case 16:
          factory = _context.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityFactoryOfModel"])(factory, 'checkin')) {
            _context.next = 20;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'The factory for the checkin model could not be retrieved.');
          return _context.abrupt("return", null);

        case 20:
          newCheckin = factory.fromExisting(checkInResponse);
          _context.next = 23;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'receiveLatestCheckin', newCheckin, registrationId, dateTimeId);

        case 23:
          return _context.abrupt("return", newCheckin);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 11]]);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/selectors.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/selectors.js ***!
  \***********************************************************************/
/*! exports provided: getLatestCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestCheckin", function() { return getLatestCheckin; });
/* harmony import */ var _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model-specific-selectors */ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");


/**
 * Gets the latest checkin entity in the state for the given value.
 * @param {Object} state
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @return {null|BaseEntity} The checkin entity if it exists or null.
 */

function getLatestCheckin(state, registrationId, dateTimeId) {
  var checkinId = Object(_model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__["getSelectorValue"])(state, 'getLatestCheckin', registrationId, dateTimeId);

  if (!checkinId) {
    return null;
  }

  return Object(_selectors__WEBPACK_IMPORTED_MODULE_1__["getEntityById"])(state, 'checkin', checkinId);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-actions.js":
/*!********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-actions.js ***!
  \********************************************************************/
/*! exports provided: createActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return createActions; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of actions for entities
 * @param {Object} action The action object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new action object containing functions for each model.
 */

var createActions = function createActions(action) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (actions, modelName) {
    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'create')] = function (entity) {
      return action.createEntity(modelName, entity);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byId', 'delete')] = function (entityId) {
      return action.deleteEntityById(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byId', 'trash')] = function (entityId) {
      return action.trashEntityById(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'record', 'persist')] = function (entity) {
      return action.persistEntityRecord(modelName, entity);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'persistFor')] = function (entityId) {
      return action.persistForEntityId(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'ids', 'persistFor')] = function (entityIds) {
      return action.persistForEntityIds(modelName, entityIds);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'persistDeletesFor')] = function () {
      return action.persistDeletesForModel(modelName);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'persistTrashesFor')] = function () {
      return action.persistTrashesForModel(modelName);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byId', 'remove')] = function (entityId) {
      return action.removeEntityById(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'removeDelete')] = function (entityId) {
      return action.removeDeleteEntityId(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'removeTrash')] = function (entityId) {
      return action.removeTrashEntityId(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'andResolve', 'receive', true)] = function (entities) {
      return action.receiveEntitiesAndResolve(modelName, entities);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'records', 'receiveAndReplace')] = function (entities) {
      return action.receiveAndReplaceEntityRecords(modelName, entities);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'receiveTrash')] = function (entityId) {
      return action.receiveTrashEntityId(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'receiveDelete')] = function (entityId) {
      return action.receiveDeleteEntityId(modelName, entityId);
    };

    return actions;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-resolvers.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-resolvers.js ***!
  \**********************************************************************/
/*! exports provided: createResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResolvers", function() { return createResolvers; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of resolvers for entities
 * @param {Object} resolver The resolver object that dynamically created
 * functions will be mapped to.
 * @return {Object} The new resolver object containing functions for each model.
 */

var createResolvers = function createResolvers(resolver) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (resolvers, modelName) {
    resolvers[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byId', 'get')] = function (entityId) {
      return resolver.getEntityById(modelName, entityId);
    };

    return resolvers;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-selectors.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-selectors.js ***!
  \**********************************************************************/
/*! exports provided: createSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of selectors for entities
 * @param {Object} selector selector object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new selector objects for each model.
 */

var createSelectors = function createSelectors(selector) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (selectors, modelName) {
    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'records', 'get')] = function (state) {
      return selector.getEntityRecordsForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'get', true)] = function (state) {
      return selector.getEntitiesForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byId', 'get')] = function (state, entityId) {
      return selector.getEntityById(state, modelName, entityId);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'byIds', 'get', true)] = function (state, entityIds) {
      return selector.getEntitiesByIds(state, modelName, entityIds);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'idsQueuedForTrash', 'get')] = function (state) {
      return selector.getEntityIdsQueuedForTrash(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'idsQueuedForDelete', 'get')] = function (state) {
      return selector.getEntityIdsQueuedForDelete(state, modelName);
    };

    return selectors;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/index.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/index.js ***!
  \***********************************************************/
/*! exports provided: selectors, actions, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-actions */ "./assets/src/data/eventespresso/core/model/entity-actions.js");
/* harmony import */ var _entity_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-resolvers */ "./assets/src/data/eventespresso/core/model/entity-resolvers.js");
/* harmony import */ var _entity_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-selectors */ "./assets/src/data/eventespresso/core/model/entity-selectors.js");
/* harmony import */ var _relation_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation-actions */ "./assets/src/data/eventespresso/core/model/relation-actions.js");
/* harmony import */ var _relation_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relation-selectors */ "./assets/src/data/eventespresso/core/model/relation-selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resolvers */ "./assets/src/data/eventespresso/core/resolvers/index.js");
/* harmony import */ var _model_actions_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model-actions-index */ "./assets/src/data/eventespresso/core/model/model-actions-index.js");
/* harmony import */ var _model_selectors_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model-selectors-index */ "./assets/src/data/eventespresso/core/model/model-selectors-index.js");
/* harmony import */ var _model_resolvers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model-resolvers-index */ "./assets/src/data/eventespresso/core/model/model-resolvers-index.js");












var selectors = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _entity_selectors__WEBPACK_IMPORTED_MODULE_3__["createSelectors"](_selectors__WEBPACK_IMPORTED_MODULE_6__), _relation_selectors__WEBPACK_IMPORTED_MODULE_5__["createSelectors"](_selectors__WEBPACK_IMPORTED_MODULE_6__), _model_selectors_index__WEBPACK_IMPORTED_MODULE_10__);
var actions = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _entity_actions__WEBPACK_IMPORTED_MODULE_1__["createActions"](_actions__WEBPACK_IMPORTED_MODULE_7__), _relation_actions__WEBPACK_IMPORTED_MODULE_4__["createActions"](_actions__WEBPACK_IMPORTED_MODULE_7__), _model_actions_index__WEBPACK_IMPORTED_MODULE_9__);
var resolvers = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _entity_resolvers__WEBPACK_IMPORTED_MODULE_2__["createResolvers"](_resolvers__WEBPACK_IMPORTED_MODULE_8__), _model_resolvers_index__WEBPACK_IMPORTED_MODULE_11__);

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-actions-index.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-actions-index.js ***!
  \*************************************************************************/
/*! exports provided: receiveSelectorValue, receiveLatestCheckin, toggleCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_specific_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-specific-actions */ "./assets/src/data/eventespresso/core/model/model-specific-actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveSelectorValue", function() { return _model_specific_actions__WEBPACK_IMPORTED_MODULE_0__["receiveSelectorValue"]; });

/* harmony import */ var _checkin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin/actions */ "./assets/src/data/eventespresso/core/model/checkin/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receiveLatestCheckin", function() { return _checkin_actions__WEBPACK_IMPORTED_MODULE_1__["receiveLatestCheckin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCheckin", function() { return _checkin_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCheckin"]; });




/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-resolvers-index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-resolvers-index.js ***!
  \***************************************************************************/
/*! exports provided: getLatestCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkin_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin/resolvers */ "./assets/src/data/eventespresso/core/model/checkin/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLatestCheckin", function() { return _checkin_resolvers__WEBPACK_IMPORTED_MODULE_0__["getLatestCheckin"]; });



/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-selectors-index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-selectors-index.js ***!
  \***************************************************************************/
/*! exports provided: getSelectorValue, getLatestCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-specific-selectors */ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectorValue", function() { return _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__["getSelectorValue"]; });

/* harmony import */ var _checkin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin/selectors */ "./assets/src/data/eventespresso/core/model/checkin/selectors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLatestCheckin", function() { return _checkin_selectors__WEBPACK_IMPORTED_MODULE_1__["getLatestCheckin"]; });




/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-specific-actions.js":
/*!****************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-specific-actions.js ***!
  \****************************************************************************/
/*! exports provided: receiveSelectorValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSelectorValue", function() { return receiveSelectorValue; });
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * Internal imports
 */

var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].modelSpecific;
/**
 * Action for adding the results of a specific selector and its value to the
 * state.
 * @param {string} selector
 * @param {*} value
 * @param {Array} args
 * @return {Object} An action object
 */

function receiveSelectorValue(selector, value) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: types.RECEIVE_SELECTOR_VALUE,
    selector: selector,
    args: args,
    value: value
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js":
/*!******************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-specific-selectors.js ***!
  \******************************************************************************/
/*! exports provided: getSelectorValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectorValue", function() { return getSelectorValue; });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/**
 * External imports
 */

/**
 * Returns the value for the given selector and args in the current state.
 *
 * @type {*} Returns whatever the value was assigned to the state for the given
 * selector and its args.
 */

var getSelectorValue = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, selector) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return state.modelSpecific.getIn([selector, JSON.stringify(args)]) || null;
}, function (state, selector) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return [state.modelSpecific.getIn([selector, JSON.stringify(args)])];
});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/relation-actions.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/relation-actions.js ***!
  \**********************************************************************/
/*! exports provided: createActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return createActions; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of actions for relations
 * @param {Object} action The action object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new action object containing functions for each model
 * relation.
 */

var createActions = function createActions(action) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (actions, modelName) {
    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relation', 'create')] = function (entityId, relationName, relationEntity) {
      return action.createRelation(modelName, entityId, relationName, relationEntity);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relations', 'create')] = function (entityId, relationName, relationEntities) {
      return action.createRelations(modelName, entityId, relationName, relationEntities);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relationForAddition', 'removeDirty')] = function (entityId, relationName, relationEntityId) {
      return action.removeDirtyRelationForAddition(modelName, entityId, relationName, relationEntityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'removeRelationFor')] = function (entityId, relationName, relationEntityId) {
      return action.removeRelationForEntity(modelName, entityId, relationName, relationEntityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'persistAddRelationsFor')] = function () {
      return action.persistAddRelationsForModel(modelName);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'persistDeleteRelationsFor')] = function () {
      return action.persistDeleteRelationsForModel(modelName);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, '', 'persistRelationsFor')] = function () {
      var addRelation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return action.persistRelationsForModel(modelName, addRelation);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relationsForId', 'persist')] = function (entityId) {
      var addRelation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return action.persistRelationsForEntityId(modelName, entityId, addRelation);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relationsForIdAndRelation', 'persist')] = function (entityId, relationName) {
      var addRelation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return action.persistRelationsForEntityIdAndRelation(modelName, entityId, relationName, addRelation);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relationsForIdAndRelationId', 'persist')] = function (entityId, relationName, relationId) {
      var addRelation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return action.persistRelationsForEntityIdAndRelationId(modelName, entityId, relationName, relationId, addRelation);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'receiveRelatedEntitiesFor')] = function (entityId, relationName, relationEntityIds) {
      return action.receiveRelatedEntities(modelName, entityId, relationName, relationEntityIds);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'receiveDirtyRelationAdditionFor')] = function (relationName, relationId, entityId) {
      return action.receiveDirtyRelationAddition(relationName, relationId, modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'receiveDirtyRelationDeletionFor')] = function (relationName, relationId, entityId) {
      return action.receiveDirtyRelationDeletion(relationName, relationId, modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'relations', 'receiveUpdatedEntityIdFor')] = function (oldId, newId) {
      return action.receiveUpdatedEntityIdForRelations(modelName, oldId, newId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'removeAllRelatedEntitiesFor')] = function (entityId) {
      return action.removeAllRelatedEntitiesForModelEntity(modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'idAndRelation', 'removeRelatedEntitiesFor')] = function (entityId, relationName, relationIds) {
      return action.removeRelatedEntities(modelName, entityId, relationName, relationIds);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'idAndRelation', 'removeDirtyRelationAdditionFor')] = function (relationName, relationEntityId, entityId) {
      return action.removeDirtyRelationAddition(relationName, relationEntityId, modelName, entityId);
    };

    actions[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'idAndRelation', 'removeDirtyRelationDeletionFor')] = function (relationName, relationEntityId, entityId) {
      return action.removeDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId);
    };

    return actions;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/relation-selectors.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/relation-selectors.js ***!
  \************************************************************************/
/*! exports provided: createSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of selectors for relations
 * @param {Object} selector selector object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new selector objects for each model relation.
 */

var createSelectors = function createSelectors(selector) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (selectors, modelName) {
    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'additionRelations', 'getQueued')] = function (state) {
      return selector.getRelationAdditionsQueuedForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'deleteRelations', 'getQueued')] = function (state) {
      return selector.getRelationDeletionsQueuedForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'id', 'countRelationModelsIndexedFor')] = function (state, entityId) {
      return selector.countRelationModelsIndexedForEntity(state, modelName, entityId);
    };

    return selectors;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty-entities.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty-entities.js ***!
  \***********************************************************************/
/*! exports provided: deleteEntity, trashEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEntity", function() { return deleteEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trashEntity", function() { return trashEntity; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */



/**
 * Internal imports.
 */


var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].entities,
    resetTypes = _actions_action_types__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].resets;
/**
 * Handle adding incoming data to state.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number} entityId
 * @param {Immutable.Set} existingEntities
 * @return {Immutable.Map} New state.
 */

var addToState = function addToState(state, modelName, entityId, existingEntities) {
  existingEntities = existingEntities.add(entityId);
  return state.set(modelName, existingEntities);
};
/**
 * Handle removing incoming data from state
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {Immutable.Map} new state or existing state if no change.
 */


var removeFromState = function removeFromState(state, modelName, entityId) {
  var entityIds = state.get(modelName, Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])());

  if (!entityIds.includes(entityId)) {
    return state;
  }

  entityIds = entityIds.delete(entityId);
  return entityIds.isEmpty() ? state.delete(modelName) : state.set(modelName, entityIds);
};
/**
 * Processes the incoming action
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either the existing state if no change or new state.
 */


var processAction = function processAction(state, action) {
  var type = action.type,
      modelName = action.modelName;
  var entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(action.entityId);
  var existingEntities = state.get(modelName, Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])());

  switch (type) {
    case types.RECEIVE_DELETE_ENTITY_ID:
    case types.RECEIVE_TRASH_ENTITY_ID:
      state = addToState(state, modelName, entityId, existingEntities);
      break;

    case types.REMOVE_DELETE_ENTITY_ID:
    case types.REMOVE_TRASH_ENTITY_ID:
      state = removeFromState(state, modelName, entityId);
      break;
  }

  return state;
};
/**
 * Reducer for queuing an entity for deletion in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */


function deleteEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CORE_STATE"].dirty.delete);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_DELETE_ENTITY_ID:
    case types.REMOVE_DELETE_ENTITY_ID:
      return processAction(state, action);

    case resetTypes.RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CORE_STATE"].dirty.delete);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return state.delete(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(action.modelName));
  }

  return state;
}
/**
 * Reducer for queueing the entity for trashing in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */

function trashEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CORE_STATE"].dirty.trash);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_TRASH_ENTITY_ID:
    case types.REMOVE_TRASH_ENTITY_ID:
      return processAction(state, action);

    case resetTypes.RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CORE_STATE"].dirty.trash);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return state.delete(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(action.modelName));
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty-relations.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty-relations.js ***!
  \************************************************************************/
/*! exports provided: replaceOldRelationIdWithNewRelationId, removeRelatedEntitiesForEntity, dirtyRelations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceOldRelationIdWithNewRelationId", function() { return replaceOldRelationIdWithNewRelationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRelatedEntitiesForEntity", function() { return removeRelatedEntitiesForEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirtyRelations", function() { return dirtyRelations; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");



/**
 * External imports
 */




/**
 * Internal imports.
 */


var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].relations,
    resetTypes = _actions_action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].resets;
/**
 * Used to determine whether the relation exists in the provided map.
 *
 * @param {Immutable.Map} relationMap
 * @param {string} queueType
 * @param {number} entityId
 * @return {boolean} True means the relation exists for the given entity Id
 * false means it does not exist.
 */

var relationExistsInMap = function relationExistsInMap(relationMap, queueType, entityId) {
  return relationMap.get(queueType, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])()).includes(entityId);
};
/**
 * Used to indicate whether the relation exists already in the state for the
 * given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {boolean} True means the relation exists in the state.
 */


var hasRelation = function hasRelation(state, action, relationMap) {
  var relationEntityId = action.relationEntityId,
      entityId = action.entityId,
      queueType = action.queueType;
  var relationName = action.relationName,
      modelName = action.modelName;

  if (relationExistsInMap(relationMap, queueType, entityId)) {
    return true;
  } // still here? Okay, let's do a reverse lookup then, where the relation may
  // be stored with the relation as the originating entity.


  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  var entityIds = state.getIn([queueType, relationName, relationEntityId, modelName]);
  return entityIds ? entityIds.includes(entityId) : false;
};
/**
 * Retrieve the relation map from the index for the given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} A new map is returned if there isn't an existing map present.
 */


var getRelationMap = function getRelationMap(state, action) {
  var relationName = action.relationName,
      relationId = action.relationEntityId,
      modelName = action.modelName; // get the map for the queueType

  return state.getIn(['index', relationName, relationId, modelName]) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])();
};
/**
 * Given a set of ids, this returns whether the given id exists in it.
 *
 * @param {number} entityId
 * @param {Immutable.Set} idSet
 * @return {boolean} True means it exists in the array.
 */


var idExistsInSet = function idExistsInSet(entityId, idSet) {
  return idSet instanceof immutable__WEBPACK_IMPORTED_MODULE_3__["Set"] && idSet.includes(entityId);
};
/**
 * Reducer for adding to the relations index state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {Immutable.Map}  Either existing state if no change or new state if change.
 */


function indexRelations(state, action, relationMap) {
  var type = action.type,
      relationName = action.relationName,
      relationEntityId = action.relationEntityId,
      modelName = action.modelName,
      entityId = action.entityId,
      queueType = action.queueType;
  var entityIds = relationMap.get(queueType) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
  var path = [relationName, relationEntityId, modelName, queueType];

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      if (idExistsInSet(entityId, entityIds)) {
        return state;
      }

      state = state.setIn(path, entityIds.add(entityId));
      break;

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      if (!idExistsInSet(entityId, entityIds)) {
        return state;
      }

      entityIds = entityIds.delete(entityId);

      if (entityIds.isEmpty()) {
        state = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["removeEmptyFromState"])(state, path, 0);
      } else {
        state = state.setIn(path, entityIds);
      }

      break;
  }

  return state;
}
/**
 * Retrieves relation ids from state for given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Set} A List of ids if present or empty List if not.
 */


function getRelationIdsFromState(state, action) {
  var relationName = action.relationName,
      modelName = action.modelName,
      entityId = action.entityId;
  var path = [modelName, entityId, relationName];
  return state.hasIn(path) ? state.getIn(path) : Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
}
/**
 * Used to determine whether the state requires an update or not for the given
 * data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {boolean} True indicates update is needed.
 */


function requiresUpdate(state, action, relationMap) {
  switch (action.type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      return !hasRelation(state, action, relationMap);

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      return hasRelation(state, action, relationMap);
  }

  return false;
}
/**
 * Reducer for updating dirty relation state for given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {Immutable.Map} If no change original state is returned otherwise new state.
 */


function updateRelationState(state, action, relationMap) {
  var type = action.type,
      relationName = action.relationName,
      relationEntityId = action.relationEntityId,
      modelName = action.modelName,
      entityId = action.entityId,
      queueType = action.queueType;
  var ids = relationMap.get(queueType) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
  var path = [modelName, entityId, relationName];
  var relationIds;

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      if (idExistsInSet(entityId, ids)) {
        break;
      }

      relationIds = getRelationIdsFromState(state, action);

      if (relationIds.includes(relationEntityId)) {
        break;
      }

      state = state.setIn(path, relationIds.add(relationEntityId));
      break;

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      if (!idExistsInSet(entityId, ids)) {
        break;
      }

      relationIds = getRelationIdsFromState(state, action);

      if (!relationIds.includes(relationEntityId)) {
        break;
      }

      relationIds = relationIds.delete(relationEntityId);

      if (relationIds.isEmpty()) {
        state = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["removeEmptyFromState"])(state, path, 0);
      } else {
        state = state.setIn(path, relationIds);
      }

      break;
  }

  return state;
}
/**
 * Utility method assisting with replacing an old relation id for a new relation
 * id.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either original or new state.
 */


function replaceOldRelationIdWithNewRelationId(state, action) {
  var oldEntityId = action.oldEntityId,
      newEntityId = action.newEntityId;
  var modelName = action.modelName;
  oldEntityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(oldEntityId);
  newEntityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(newEntityId); // replacements in index

  var newState = replaceIds('index', state, modelName, oldEntityId, newEntityId);

  if (newState === state) {
    newState = replaceIds('delete', newState, modelName, oldEntityId, newEntityId);
  }

  if (newState === state) {
    newState = replaceIds('add', newState, modelName, oldEntityId, newEntityId);
  }

  return newState;
}
/**
 * Handles going through the provided state object and updating any occurrences
 * of the provided oldId for the provided model name with the new id.  This
 * mutates the incoming state so do not provide the original state from the
 * store.
 *
 * @param {string} stateProperty (what property for the state should be
 *   reviewed)
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number} oldId
 * @param {number} newId
 * @return {Immutable.Map} Returns either new state or existing state.
 */


var replaceIds = function replaceIds(stateProperty, state, modelName, oldId, newId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  var mainPath = [stateProperty, modelName, oldId]; // first do top-level checks if it doesn't exist, bail.

  if (!state.hasIn(mainPath)) {
    return state;
  }

  var mainRecord = state.getIn(mainPath);
  state = state.deleteIn(mainPath).setIn([stateProperty, modelName, newId], mainRecord); // mainRecord provides the index to the other records needing updated.

  mainRecord.forEach(function (mapOrIds, relationModelName) {
    var updateIds = function updateIds(queueType, relationId) {
      var relationPath = [queueType, relationModelName, relationId, modelName];
      var ids = state.getIn(relationPath) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
      ids = ids.delete(oldId).add(newId);
      return state.setIn(relationPath, ids);
    };

    if (mapOrIds instanceof immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]) {
      if (mapOrIds.has('add')) {
        mapOrIds.get('add').forEach(function (relationId) {
          state = updateIds('add', relationId);
        });
      }

      if (mapOrIds.has('delete')) {
        mapOrIds.get('delete').forEach(function (relationId) {
          state = updateIds('delete', relationId);
        });
      }
    } else if (mapOrIds instanceof immutable__WEBPACK_IMPORTED_MODULE_3__["Set"]) {
      var relationPath = ['index', relationModelName];
      mapOrIds.forEach(function (relationId) {
        var indexRecord = state.getIn([].concat(relationPath, [relationId, modelName]));
        var ids = indexRecord.get(stateProperty) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
        ids = ids.delete(oldId).add(newId);
        indexRecord = indexRecord.set(stateProperty, ids);
        state = state.setIn([].concat(relationPath, [relationId, modelName]), indexRecord);
      });
    }
  });
  return state;
};
/**
 * This ensures that for incoming relation state, relations are recorded in one
 * direction.  For example adding a relation for `event` to `datetime` and then
 * sometime later `datetime` to `event` for the same entities should result in
 * just a single record, not two.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Object} The action object to work with after normalization.
 */


var normalizeActionForState = function normalizeActionForState(state, action) {
  // normalizeIds
  action.entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(action.entityId);
  action.relationEntityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(action.relationEntityId); // we only use index to help with normalization

  var index = state.get('index');
  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);
  var relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.relationName);
  var relationEntityId = action.relationEntityId,
      entityId = action.entityId;

  if (modelName && relationName && index.has(modelName)) {
    // okay this model has already been used as a relation on another model
    // so let's normalize and make it the relation instead.
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, action, {
      modelName: relationName,
      entityId: relationEntityId,
      relationName: modelName,
      relationEntityId: entityId
    });
  } // we can return as is but lets normalize the incoming names


  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, action, {
    modelName: modelName,
    relationName: relationName
  });
};
/**
 * Reducer for dirty relation state actions.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Returns original state if no changes, otherwise new state.
 */


function dirtyRelations(state, action) {
  action = normalizeActionForState(state, action);
  var _action = action,
      type = _action.type;
  var relationMap = getRelationMap(state, action); // does this even need an update?

  if (!requiresUpdate(state, action, relationMap)) {
    return state;
  }

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_ADDITION:
      state = state.set('index', indexRelations(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(state.get('index')), action, relationMap));
      return state.set('add', updateRelationState(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(state.get('add')), action, relationMap));

    case types.RECEIVE_DIRTY_RELATION_DELETION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      // if the relation or entity id is a cuid, then we skip this because
      // the relation has never been persisted anyways.
      if (cuid__WEBPACK_IMPORTED_MODULE_5___default.a.isCuid(action.relationEntityId) || cuid__WEBPACK_IMPORTED_MODULE_5___default.a.isCuid(action.entityId)) {
        return state;
      }

      state = state.set('index', indexRelations(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(state.get('index')), action, relationMap));
      return state.set('delete', updateRelationState(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(state.get('delete')), action, relationMap));
  }

  return state;
}
/**
 * Utility function for removing entity id in the state for a given modelName
 * which may exist as a relation in the state.
 *
 * @param {Immutable.Map} state Immutable collection
 * @param {Object} modelData An object containing data for use in the function.
 * @return {Immutable.Map} Immutable collection  either the original state or a new state.
 */


var clearRelatedEntitiesForEntity = function clearRelatedEntitiesForEntity(state, modelData) {
  var modelRemoved = modelData.modelRemoved,
      entityIdRemoved = modelData.entityIdRemoved,
      indexType = modelData.indexType,
      relationTypes = modelData.relationTypes;
  var recordPath = [indexType, modelRemoved, entityIdRemoved];

  var clearEntityIdsInPath = function clearEntityIdsInPath(subState, path) {
    if (subState.hasIn(path)) {
      var entityIds = subState.getIn(path) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
      entityIds = entityIds.delete(entityIdRemoved);

      if (!entityIds.isEmpty()) {
        subState.setIn(path, entityIds);
      } else {
        Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["removeEmptyFromState"])(subState, path, 1, false);
      }
    }
  };

  if (state.hasIn(recordPath)) {
    state = state.withMutations(function (subState) {
      var mainRecord = subState.getIn(recordPath);
      Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["removeEmptyFromState"])(subState, recordPath, 1, false);
      mainRecord.forEach(function (relationRecord, relationModelName) {
        if (relationRecord instanceof immutable__WEBPACK_IMPORTED_MODULE_3__["Set"]) {
          relationRecord.forEach(function (relationId) {
            clearEntityIdsInPath(subState, ['index', relationModelName, relationId, modelRemoved, indexType]);
          });
        } else if (relationTypes !== null && relationRecord instanceof immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]) {
          relationTypes.forEach(function (relationType) {
            if (relationRecord.has(relationType)) {
              var relationIds = relationRecord.get(relationType) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])();
              relationIds.forEach(function (relationId) {
                clearEntityIdsInPath(subState, [relationType, relationModelName, relationId, modelRemoved]);
              });
            }
          });
        }
      });
    });
  }

  return state;
};
/**
 * Handles removing all relationships in the dirty relations state for the given
 * action object (containing modelName and entityId)
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either the original state or new state if it was updated.
 */


function removeRelatedEntitiesForEntity(state, action) {
  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);
  var entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(action.entityId);
  [[modelName, entityId, 'index', ['add', 'delete']], [modelName, entityId, 'add'], [modelName, entityId, 'delete']].forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 4),
        modelRemoved = _ref2[0],
        entityIdRemoved = _ref2[1],
        indexType = _ref2[2],
        _ref2$ = _ref2[3],
        relationTypes = _ref2$ === void 0 ? null : _ref2$;

    state = clearRelatedEntitiesForEntity(state, {
      modelRemoved: modelRemoved,
      entityIdRemoved: entityIdRemoved,
      indexType: indexType,
      relationTypes: relationTypes
    });
  });
  return state;
}
/**
 * Handles clearing the given model from the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 *
 * @return {Immutable.Map} New state.
 */


var clearStateForModel = function clearStateForModel(state, action) {
  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName); // index record path

  state = clearModelFromSubstate(state, 'index', modelName); // delete record path

  state = clearModelFromSubstate(state, 'delete', modelName); // add record path

  state = clearModelFromSubstate(state, 'add', modelName);
  return state;
};
/**
 * For the given arguments clears the model from the substate on the given state
 * for the given substate key.
 *
 * @param {Immutable.Map} state
 * @param {string} subStateKey
 * @param {string} modelName
 * @return {Immutable.Map} The new state.
 */


var clearModelFromSubstate = function clearModelFromSubstate(state, subStateKey, modelName) {
  state = state.deleteIn([subStateKey, modelName]);
  var subState = state.get(subStateKey);
  subState = subState.withMutations(function (mutatedState) {
    state.get(subStateKey).forEach(function (entityMaps, relationName) {
      entityMaps.forEach(function (modelMap, relationEntityId) {
        var deletePath = [relationName, relationEntityId, modelName];
        mutatedState.deleteIn(deletePath);
        Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["removeEmptyFromState"])(mutatedState, deletePath, 1, false);
      });
    });
  });
  state = state.set(subStateKey, subState);
  return state;
};
/**
 * exports useful for testing.
 */



/**
 * Default reducer for handling dirty relation state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Returns original state if no changes, otherwise new state.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CORE_STATE"].dirty.relations);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS:
      return replaceOldRelationIdWithNewRelationId(state, action);

    case types.REMOVE_RELATED_ENTITIES_FOR_ENTITY:
      return removeRelatedEntitiesForEntity(state, action);

    case resetTypes.RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CORE_STATE"].dirty.relations);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return clearStateForModel(state, action);

    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      return dirtyRelations(state, action);
  }

  return state;
});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dirty_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirty-entities */ "./assets/src/data/eventespresso/core/reducers/dirty-entities.js");
/* harmony import */ var _dirty_relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dirty-relations */ "./assets/src/data/eventespresso/core/reducers/dirty-relations.js");
/**
 * External imports
 */

/**
 * Internal imports
 */



/**
 * The root state ('delete', 'trash', relations') is a plain object, but the
 * slices are immutable Maps).
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  delete: _dirty_entities__WEBPACK_IMPORTED_MODULE_1__["deleteEntity"],
  trash: _dirty_entities__WEBPACK_IMPORTED_MODULE_1__["trashEntity"],
  relations: _dirty_relations__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/entities.js":
/*!*****************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/entities.js ***!
  \*****************************************************************/
/*! exports provided: receiveEntity, receiveEntityRecords, removeEntityById, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntity", function() { return receiveEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntityRecords", function() { return receiveEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityById", function() { return removeEntityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return entities; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */





/**
 * Internal imports
 */


var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_5__["ACTION_TYPES"].entities,
    resetTypes = _actions_action_types__WEBPACK_IMPORTED_MODULE_5__["ACTION_TYPES"].resets;
/**
 * This replaces any entities in the incoming object with matching entities (by
 * id) in the state (if they exist).
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {Immutable.Map} entityRecords
 * @return {Immutable.Map} New entityRecords object.
 */

var replaceExistingEntitiesFromState = function replaceExistingEntitiesFromState(state, modelName, entityRecords) {
  var existingEntities = state.get(modelName, null);

  if (existingEntities === null) {
    return entityRecords;
  }

  return entityRecords.merge(existingEntities);
};
/**
 * Reducer for receiving an entity into the state.
 *
 * This does not replace any entity that already exists in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New state if there is a change otherwise existing state.
 */


function receiveEntity(state, action) {
  /**
   * @type {string} modelName
   * @type {BaseEntity|null} entity
   */
  var entity = action.entity;

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntity"])(entity) || state.hasIn([entity.modelName, entity.id])) {
    return state;
  }

  return state.setIn([entity.modelName, entity.id], entity);
}
/**
 * A reducer returning the new state for action.
 *
 * Handles receiving entity records from a rest response and converting them to
 * model entities using the provided factory.
 *
 * It is expected that the incoming entity records are an array of BaseEntity
 * children instances.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} The new state (or the original if no
 * change detected or action isn't handled by this method)
 */


function receiveEntityRecords(state, action) {
  var type = action.type,
      modelName = action.modelName; // convert from array of entities to a Map indexed by entity id.

  var incomingEntities = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])().withMutations(function (subState) {
    action.entities.forEach(function (entity) {
      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(entity, modelName)) {
        subState.set(entity.id, entity);
      }
    });
  });

  if (!state.has(modelName) || incomingEntities.isEmpty()) {
    return state;
  }

  var updateState = false,
      entityRecords;

  switch (type) {
    case types.RECEIVE_ENTITY_RECORDS:
      // if all incoming keys exist in state already then we don't do
      // anything
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["difference"])(Array.from(incomingEntities.keys()), Array.from(state.get(modelName, Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()).keys())))) {
        break;
      } // replace any incoming entityRecords with existing entityRecords already
      // in the store so this registry acts as the "authority"
      // for entityRecords.


      entityRecords = replaceExistingEntitiesFromState(state, modelName, incomingEntities);
      updateState = true;
      break;

    case types.RECEIVE_AND_REPLACE_ENTITY_RECORDS:
      updateState = true;
      entityRecords = state.get(modelName, Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()).merge(incomingEntities);
      break;
  }

  if (updateState) {
    return state.set(modelName, entityRecords);
  }

  return state;
}
/**
 * A reducer handling the removal of an entity from state matching the given
 * id.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New or existing state.
 */


function removeEntityById(state, action) {
  var modelName = action.modelName,
      _action$entityId = action.entityId,
      entityId = _action$entityId === void 0 ? 0 : _action$entityId;
  var id = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__["normalizeEntityId"])(entityId);
  return state.deleteIn([modelName, id]);
}
/**
 * Exports useful for tests.
 */



/**
 * Default reducer for handling entities in state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New or existing state
 */

function entities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CORE_STATE"].entities);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type) {
    switch (action.type) {
      case types.RECEIVE_ENTITY_RECORDS:
      case types.RECEIVE_AND_REPLACE_ENTITY_RECORDS:
        return receiveEntityRecords(state, action);

      case types.RECEIVE_ENTITY:
        return receiveEntity(state, action);

      case types.REMOVE_ENTITY_BY_ID:
        return removeEntityById(state, action);

      case resetTypes.RESET_ALL_STATE:
        return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CORE_STATE"].entities);

      case resetTypes.RESET_STATE_FOR_MODEL:
        return state.has(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName)) ? state.set(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName), Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()) : state;
    }
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/index.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/reducers/entities.js");
/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/reducers/relations.js");
/* harmony import */ var _dirty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dirty */ "./assets/src/data/eventespresso/core/reducers/dirty.js");
/* harmony import */ var _model_specific_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model-specific-reducers */ "./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js");
/**
 * External imports
 */

/**
 * Internal imports
 */





/**
 * Reducers for entities, relations and dirty state.
 *
 * Be aware that the root state is a plain object but the slices (entities,
 * relations, dirty) are immutable Maps.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["default"],
  relations: _relations__WEBPACK_IMPORTED_MODULE_2__["default"],
  dirty: _dirty__WEBPACK_IMPORTED_MODULE_3__["default"],
  modelSpecific: _model_specific_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js":
/*!********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleReceiveSelector; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */


var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].modelSpecific,
    resetTypes = _actions_action_types__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].resets;
/**
 * Handle receiving a model specific selector record into the state.
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} New or existing state.
 */

function handleReceiveSelector() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      selector = action.selector,
      args = action.args,
      value = action.value;

  switch (type) {
    case types.RECEIVE_SELECTOR_VALUE:
      return state.setIn([selector, JSON.stringify(args)], value);

    case resetTypes.RESET_ALL_MODEL_SPECIFIC:
    case resetTypes.RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])();

    case resetTypes.RESET_MODEL_SPECIFIC_FOR_SELECTOR:
      return state.delete(selector);

    case resetTypes.RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS:
      return state.deleteIn([selector, JSON.stringify(args)]);
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/relations.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/relations.js ***!
  \******************************************************************/
/*! exports provided: normalizedReceiveAndRemoveRelations, updateEntityIdForRelations, removeRelatedEntitiesForEntity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizedReceiveAndRemoveRelations", function() { return normalizedReceiveAndRemoveRelations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityIdForRelations", function() { return updateEntityIdForRelations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRelatedEntitiesForEntity", function() { return removeRelatedEntitiesForEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relations; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");


/**
 * External imports.
 */



/**
 * Internal Imports
 */


var types = _actions_action_types__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPES"].relations,
    resetTypes = _actions_action_types__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPES"].resets;
/**
 * Handles normalizing the incoming action so that we're always only receiving
 * relation data in the state oriented from one direction.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */

var normalizedReceiveAndRemoveRelations = function normalizedReceiveAndRemoveRelations(state, action) {
  // first normalize the action
  action = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
    modelName: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(action.modelName),
    relationName: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(action.relationName),
    entityId: Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(action.entityId)
  });
  var _action = action,
      modelName = _action.modelName,
      relationName = _action.relationName,
      relatedEntityIds = _action.relatedEntityIds,
      entityId = _action.entityId; // add to state from the context of the model

  state = receiveAndRemoveRelations(state, action); // add to state from the context of the relation

  var newAction = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
    modelName: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationName),
    relationName: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName),
    relatedEntityIds: [entityId]
  });

  while (relatedEntityIds.length > 0) {
    newAction.entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(relatedEntityIds.pop());
    state = receiveAndRemoveRelations(state, newAction);
  }

  return state;
};
/**
 * Reducer for the relations state in the store.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either a new state or the existing state.
 */


function receiveAndRemoveRelations(state, action) {
  var modelName = action.modelName,
      relationName = action.relationName,
      entityId = action.entityId,
      type = action.type;
  var relationEntityIds = Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])(action.relatedEntityIds);
  var path = [modelName, entityId, relationName];
  var existingIds = state.getIn(path, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])());

  switch (type) {
    case types.RECEIVE_RELATED_ENTITY_IDS:
      return state.setIn(path, existingIds.concat(relationEntityIds));

    case types.REMOVE_RELATED_ENTITY_IDS:
      var idsAfterRemoval = existingIds.filter(function (id) {
        return !relationEntityIds.keyOf(Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(id));
      }); // Immutable.Set().filter() returns new instance, so let's compare
      // size

      if (idsAfterRemoval.count() === existingIds.count()) {
        return state;
      }

      return !idsAfterRemoval.isEmpty() ? state.setIn(path, idsAfterRemoval) : Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["removeEmptyFromState"])(state, path);
  }

  return state;
}
/**
 * Reducer for handling entity ids in the relation that have a cuid that has
 * been updated with a new entity id from the server.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either new or original state
 */


function updateEntityIdForRelations(state, action) {
  var oldEntityId = action.oldEntityId,
      newEntityId = action.newEntityId,
      modelName = action.modelName;
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  oldEntityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(oldEntityId);
  newEntityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(newEntityId); // from context of modelName

  var modelRecordToReplace = state.getIn([modelName, oldEntityId], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])());

  if (!modelRecordToReplace.isEmpty()) {
    state = replaceRelationRecords(state, {
      modelName: modelName,
      oldEntityId: oldEntityId,
      newEntityId: newEntityId,
      mainRecordToReplace: modelRecordToReplace
    });
  }

  return state;
}
/**
 * Utility method for handling replacing the old entity id from incoming model
 * with the provided new id data (or just removing it if removeOnly is true)
 * This handles both the index and entityMap objects in the relations state.
 *
 * @param {Immutable.Map} state
 * @param {Object} modelData
 * @param {boolean} removeOnly If true, then the value for oldEntityId will be
 * removed from state and newEntity will not be added to state.
 * @return {Immutable.Map} Returns either new or existing state.
 */


var replaceRelationRecords = function replaceRelationRecords(state, modelData) {
  var removeOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var modelName = modelData.modelName,
      oldEntityId = modelData.oldEntityId,
      _modelData$newEntityI = modelData.newEntityId,
      newEntityId = _modelData$newEntityI === void 0 ? 0 : _modelData$newEntityI,
      mainRecordToReplace = modelData.mainRecordToReplace; // first from context of model

  var mainPath = [modelName, oldEntityId];
  state = state.withMutations(function (subState) {
    subState.deleteIn(mainPath);
    mainPath.pop();

    if (removeOnly) {
      if (subState.getIn(mainPath).isEmpty()) {
        subState.deleteIn(mainPath);
      }
    } else {
      subState.setIn([].concat(mainPath, [newEntityId]), mainRecordToReplace);
    }
  }); // now we loop through the relations on the main record and use that to
  // change the values in the relation states.

  mainRecordToReplace.forEach(function (relationIds, relationName) {
    relationIds = relationIds.toArray();
    state = state.withMutations(function (subState) {
      while (relationIds.length > 0) {
        var relationPath = [Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationName), relationIds.pop(), Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName)];
        var relationRecord = subState.getIn(relationPath, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])());
        relationRecord = relationRecord.delete(oldEntityId);

        if (removeOnly && relationRecord.isEmpty()) {
          Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["removeEmptyFromState"])(subState, relationPath, 1, false);
        } else {
          relationRecord = removeOnly ? relationRecord : relationRecord.add(newEntityId);
          subState.setIn(relationPath, relationRecord);
        }
      }
    });
  });
  return state;
};
/**
 * Removes any relation requests for related entities in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} either existing (if no changes) or new state.
 */


var removeRelatedEntitiesForEntity = function removeRelatedEntitiesForEntity(state, action) {
  var modelName = action.modelName,
      entityId = action.entityId;
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(entityId);
  var modelRecordToReplace = state.getIn([modelName, entityId], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])());

  if (!modelRecordToReplace.isEmpty()) {
    state = replaceRelationRecords(state, {
      modelName: modelName,
      oldEntityId: entityId,
      mainRecordToReplace: modelRecordToReplace
    }, true);
  }

  return state;
};
/**
 * Handles resetting the state for the given modelName in the action.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 *
 * @return {Immutable.Map} The new (or existing if no changes) state.
 */


var resetStateForModel = function resetStateForModel(state, action) {
  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(action.modelName); // get the relations for the model

  var modelRelations = state.get(modelName, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])());

  if (!modelRelations.isEmpty()) {
    // delete the modelName form the state
    state = state.delete(modelName); // loop through the relations and delete

    state = state.withMutations(function (subState) {
      modelRelations.forEach(function (relationState) {
        relationState.forEach(function (relationIds, relationName) {
          relationIds = relationIds.toArray();

          while (relationIds.length > 0) {
            var relationPath = [Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationName), relationIds.pop()];
            var relationRecord = subState.getIn(relationPath, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])());
            relationRecord = relationRecord.delete(modelName);

            if (relationRecord.isEmpty()) {
              Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["removeEmptyFromState"])(subState, relationPath, 0, false);
            } else {
              subState.setIn(relationPath, relationRecord);
            }
          }
        });
      });
    });
  }

  return state;
};
/**
 * export for tests
 */



/**
 * Reducer for relation related state changes.
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Original state if no change, new state if change.
 */

function relations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CORE_STATE"].relations);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_RELATED_ENTITY_IDS:
    case types.REMOVE_RELATED_ENTITY_IDS:
      return normalizedReceiveAndRemoveRelations(state, action);

    case types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS:
      return updateEntityIdForRelations(state, action);

    case types.REMOVE_RELATED_ENTITIES_FOR_ENTITY:
      return removeRelatedEntitiesForEntity(state, action);

    case resetTypes.RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CORE_STATE"].relations);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return resetStateForModel(state, action);
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/entities.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/entities.js ***!
  \******************************************************************/
/*! exports provided: getEntityById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return getEntityById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./assets/src/data/eventespresso/core/resolvers/utils.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEntityById);

/**
 * External imports
 */


/**
 * Internal Imports
 */





/**
 * A resolver for getting an entity for the given model name and entity id.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {Array} calculatedFields
 * @return {null|BaseEntity} If successfully retrieved, the entity,
 * otherwise null.
 */

function getEntityById(modelName, entityId) {
  var calculatedFields,
      path,
      entity,
      factory,
      fullEntity,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEntityById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          calculatedFields = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
          path = "".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getEndpoint"])(modelName), "/").concat(entityId);
          path = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["appendCalculatedFieldsToPath"])(path, calculatedFields);
          _context.next = 6;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_3__["fetch"])({
            path: path
          });

        case 6:
          entity = _context.sent;
          _context.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_3__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], 'getFactoryForModel', modelName);

        case 9:
          factory = _context.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityFactoryOfModel"])(factory, modelName)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", null);

        case 12:
          fullEntity = factory.fromExisting(entity);
          _context.next = 15;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["receiveEntityRecords"])(modelName, [fullEntity]);

        case 15:
          return _context.abrupt("return", fullEntity);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/index.js ***!
  \***************************************************************/
/*! exports provided: getEntityById, getRelatedEntities, getRelatedEntitiesForIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/resolvers/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntityById"]; });

/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/resolvers/relations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntities", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntitiesForIds", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelatedEntitiesForIds"]; });




/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/relations.js":
/*!*******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/relations.js ***!
  \*******************************************************************/
/*! exports provided: getRelatedEntities, getRelatedEntitiesForIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntities", function() { return getRelatedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntitiesForIds", function() { return getRelatedEntitiesForIds; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./assets/src/data/eventespresso/core/resolvers/utils.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelatedEntities),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelatedEntitiesForIds);

/**
 * External imports
 */







/**
 * Internal Imports
 */







var DEFAULT_EMPTY_ARRAY = [];
/**
 * A resolver for getting relation entities for the given model name and entity
 * for that model.
 *
 * @param {BaseEntity} entity
 * @param {string} relationModelName
 * @param {Array} calculatedFields
 * @return {[]|Array<BaseEntity>} If there are relations, returns an array of
 * BaseEntity instances for the relations, otherwise an empty array.
 */

function getRelatedEntities(entity, relationModelName) {
  var calculatedFields,
      pluralRelationName,
      modelName,
      relationResourceProperty,
      relationEndpoint,
      path,
      relationEntities,
      factory,
      fullEntities,
      entityIds,
      existingEntities,
      entityArray,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelatedEntities$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          calculatedFields = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntity"])(entity)) {
            _context.next = 3;
            break;
          }

          throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__["InvalidModelEntity"]('', entity);

        case 3:
          if (!entity.isNew) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 5:
          relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationModelName);
          pluralRelationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["pluralModelName"])(relationModelName);
          modelName = entity.modelName.toLowerCase();
          relationResourceProperty = pluralRelationName + 'Resource';
          relationEndpoint = entity[relationResourceProperty] ? Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["stripBaseRouteFromUrl"])(entity[relationResourceProperty].resourceLink) : '';

          if (!(relationEndpoint === '')) {
            _context.next = 13;
            break;
          }

          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])('There is no relation resource for the given model (%s) and requested relation (%s)', modelName, pluralRelationName));
          return _context.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 13:
          _context.next = 15;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["dispatch"])(_schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'receiveRelationEndpointForModelEntity', modelName, entity.id, relationModelName, relationEndpoint);

        case 15:
          _context.next = 17;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["dispatch"])('core/data', 'finishResolution', _schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'receiveRelationEndpointForModelEntity', [modelName, entity.id, relationModelName, relationEndpoint]);

        case 17:
          // add calculatedFields to endpoint?
          path = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["appendCalculatedFieldsToPath"])(relationEndpoint, calculatedFields);
          _context.next = 20;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["fetch"])({
            path: path
          });

        case 20:
          relationEntities = _context.sent;
          relationEntities = !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(relationEntities) ? relationEntities : DEFAULT_EMPTY_ARRAY;
          relationEntities = !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(relationEntities) ? [relationEntities] : relationEntities;

          if (relationEntities.length) {
            _context.next = 25;
            break;
          }

          return _context.abrupt("return", relationEntities);

        case 25:
          _context.next = 27;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'getFactoryForModel', relationModelName);

        case 27:
          factory = _context.sent;

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityFactoryOfModel"])(factory, relationModelName)) {
            _context.next = 30;
            break;
          }

          return _context.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 30:
          fullEntities = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["keyEntitiesByPrimaryKeyValue"])(relationModelName, relationEntities);
          fullEntities = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["createAndKeyEntitiesByPrimaryKeyValue"])(factory, fullEntities);
          entityIds = Array.from(fullEntities.keys()); // are there already entities for the ids in the store? If so...we use
          // those.

          _context.next = 35;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["select"])(_constants__WEBPACK_IMPORTED_MODULE_11__["REDUCER_KEY"], 'getEntitiesByIds', relationModelName, entityIds);

        case 35:
          existingEntities = _context.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(existingEntities)) {
            fullEntities = Object(_base_model__WEBPACK_IMPORTED_MODULE_10__["keepExistingEntitiesInObject"])(existingEntities.reduce(function (entitiesObject, entityObj) {
              entitiesObject[entityObj.id] = entity;
              return entitiesObject;
            }, {}), fullEntities);
          } // if fullEntities is not a map, then we need to make it a map


          entityArray = fullEntities instanceof Map ? Array.from(fullEntities.values()) : fullEntities;
          _context.next = 40;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_9__["receiveEntityRecords"])(relationModelName, entityArray);

        case 40:
          _context.next = 42;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_9__["receiveRelatedEntities"])(modelName, entity.id, relationModelName, entityIds);

        case 42:
          _context.next = 44;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveGetRelatedEntities"])(entity, fullEntities, entityIds);

        case 44:
          _context.next = 46;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveGetEntityByIdForIds"])(relationModelName, entityIds);

        case 46:
          return _context.abrupt("return", entityArray);

        case 47:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Resolver for the getRelatedEntitiesForIds selector
 *
 * @param {string} modelName
 * @param {Array<number>} entityIds
 * @param {string} relationName
 * @param {Array} calculatedFields  This will retrieve any named calculated
 * fields for the related entities.
 *
 * @return {Array|undefined} If there is no schema for the relation, an
 * empty array is returned.
 */

function getRelatedEntitiesForIds(modelName, entityIds, relationName) {
  var calculatedFields,
      hasJoinTable,
      relationSchema,
      relationType,
      factory,
      response,
      relationPrimaryKey,
      modelPrimaryKey,
      pluralRelationName,
      hasSetMap,
      record,
      relationRecords,
      modelId,
      relationId,
      relationRecord,
      relationEntity,
      _record,
      _modelId,
      _relationId,
      _relationEntity,
      _args2 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelatedEntitiesForIds$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          calculatedFields = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : [];
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationName);
          _context2.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'hasJoinTableRelation', modelName, relationName);

        case 5:
          hasJoinTable = _context2.sent;
          _context2.next = 8;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'getRelationSchema', modelName, relationName);

        case 8:
          relationSchema = _context2.sent;

          if (!(relationSchema === null)) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 11:
          relationType = relationSchema.relation_type;
          _context2.next = 14;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_12__["REDUCER_KEY"], 'getFactoryForModel', relationName);

        case 14:
          factory = _context2.sent;
          _context2.next = 17;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["fetch"])({
            path: getRelationRequestUrl(modelName, entityIds, relationName, relationSchema, relationType, hasJoinTable, calculatedFields)
          });

        case 17:
          response = _context2.sent;

          if (response.length) {
            _context2.next = 20;
            break;
          }

          return _context2.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 20:
          relationPrimaryKey = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getPrimaryKey"])(relationName);
          modelPrimaryKey = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getPrimaryKey"])(modelName);
          pluralRelationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["pluralModelName"])(relationName);
          hasSetMap = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])();

          if (!hasJoinTable) {
            _context2.next = 46;
            break;
          }

        case 25:
          if (!(response.length > 0)) {
            _context2.next = 44;
            break;
          }

          record = response.pop();
          relationRecords = record[pluralRelationName] || null;
          relationRecords = relationRecords === null && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(record[relationName]) ? record[relationName] : relationRecords;
          relationRecords = relationRecords !== null && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(relationRecords) ? [relationRecords] : relationRecords;

          if (!(relationRecords !== null)) {
            _context2.next = 42;
            break;
          }

        case 31:
          if (!(relationRecords.length > 0)) {
            _context2.next = 42;
            break;
          }

          modelId = record[modelPrimaryKey];
          relationId = record[relationPrimaryKey];
          relationRecord = relationRecords.pop();

          if (!(relationRecord !== null && !hasSetMap.hasIn([modelId, relationId]))) {
            _context2.next = 40;
            break;
          }

          relationEntity = factory.fromExisting(relationRecord);
          _context2.next = 39;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_11__["REDUCER_KEY"], 'resolveRelationRecordForRelation', relationEntity, modelName, modelId);

        case 39:
          hasSetMap = hasSetMap.setIn([modelId, relationId], true);

        case 40:
          _context2.next = 31;
          break;

        case 42:
          _context2.next = 25;
          break;

        case 44:
          _context2.next = 57;
          break;

        case 46:
          if (!(response.length > 0)) {
            _context2.next = 57;
            break;
          }

          _record = response.pop();
          _modelId = isBelongsToRelation(relationType) ? _record[modelPrimaryKey] : _record[modelName].id;
          _relationId = _record[relationPrimaryKey];

          if (hasSetMap.hasIn([_modelId, _relationId])) {
            _context2.next = 55;
            break;
          }

          _relationEntity = factory.fromExisting(_record[relationName]);
          _context2.next = 54;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_8__["dispatch"])(_constants__WEBPACK_IMPORTED_MODULE_11__["REDUCER_KEY"], 'resolveRelationRecordForRelation', _relationEntity, modelName, _modelId);

        case 54:
          hasSetMap = hasSetMap.setIn([_modelId, _relationId], true);

        case 55:
          _context2.next = 46;
          break;

        case 57:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Constructs and returns the url for a relation entity request using the given
 * arguments
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @param {string} relationName
 * @param {Object} relationSchema
 * @param {string} relationType
 * @param {boolean} hasJoinTable
 * @param {Array} calculatedFields
 * @return {string} A path to use for a relation request.
 */

var getRelationRequestUrl = function getRelationRequestUrl(modelName, entityIds, relationName, relationSchema, relationType, hasJoinTable, calculatedFields) {
  var path;
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationName);

  switch (true) {
    case hasJoinTable:
      path = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getEndpoint"])(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["singularModelName"])(relationSchema.joining_model_name).toLowerCase());
      path += '/?where' + Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getPrimaryKeyQueryString"])(modelName, entityIds);
      path += "&include=".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["modelNameForQueryString"])(relationName), ".*");
      path = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["appendCalculatedFieldsToPath"])(path, calculatedFields, relationName);
      break;

    case isBelongsToRelation(relationType):
      path = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getEndpoint"])(modelName);
      path += "/?where".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getPrimaryKeyQueryString"])(modelName, entityIds));
      path += "&include=".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["modelNameForQueryString"])(relationName), ".*");
      path = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["appendCalculatedFieldsToPath"])(path, calculatedFields, relationName);
      break;

    default:
      // we do the reverse endpoint so that we are getting the belongs to
      // relation responses back and including the relation entities we
      // want in the response (belongs to).  So for instance if the
      // incoming arguments are:
      // `getRelatedEntitiesForEntityIds(
      // 		'attendee',
      // 		[ 10, 20],
      // 		'registration'
      // )
      // then the query would be:
      // /registrations/?where[ATT_ID][IN]=10,20&include=Attendee.*
      // basically the goal here is to get one to one relations returned
      // in the query for easier parsing/dispatching.
      // @todo, currently this will NOT account for paging.
      path = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getEndpoint"])(relationName);
      path += "/?where".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["getPrimaryKeyQueryString"])(modelName, entityIds));
      path += "&include=".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["modelNameForQueryString"])(modelName), ".*");
      path = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["appendCalculatedFieldsToPath"])(path, calculatedFields);
      break;
  }

  return path;
};
/**
 * Returns whether the given relationType is equal to `EE_Belongs_To_Relation`
 *
 * @param {string} relationType
 * @return {boolean}  True means the given relationType is `EE_Belongs_To_Relation`
 */


var isBelongsToRelation = function isBelongsToRelation(relationType) {
  return relationType === 'EE_Belongs_To_Relation';
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/utils.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/utils.js ***!
  \***************************************************************/
/*! exports provided: appendCalculatedFieldsToPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendCalculatedFieldsToPath", function() { return appendCalculatedFieldsToPath; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Appends provided calculated fields to the provided path if not empty.
 *
 * Also, if modelName is passed in undefined, then any fields are appended
 * without modification.  Otherwise they will be suffixed with the modelName as
 * a part of the query to indicate what model the calculated fields apply to.
 *
 * @param {string} path
 * @param {Array<string>} calculatedFields
 * @param {string} modelName
 * @return {string} The path with calculated fields appended if present.
 */

var appendCalculatedFieldsToPath = function appendCalculatedFieldsToPath(path, calculatedFields, modelName) {
  calculatedFields = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["castArray"])(calculatedFields);

  if (calculatedFields.length > 0) {
    // setup fields string
    var nameForQueryString = modelName !== undefined ? Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["modelNameForQueryString"])(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["singularModelName"])(modelName)) : '';
    var queryStrings = nameForQueryString ? calculatedFields.map(function (field) {
      return "".concat(nameForQueryString, ".").concat(field);
    }) : calculatedFields;
    path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])(path, {
      calculate: queryStrings.join()
    });
  }

  return path;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/entities.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/entities.js ***!
  \******************************************************************/
/*! exports provided: getEntityRecordsForModel, getEntitiesForModel, getEntityById, getEntitiesByIds, getEntityIdsQueuedForTrash, getEntityIdsQueuedForDelete, getModelsQueuedForDelete, getModelsQueuedForTrash, getAllEntitiesInState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecordsForModel", function() { return getEntityRecordsForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesForModel", function() { return getEntitiesForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return getEntityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByIds", function() { return getEntitiesByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityIdsQueuedForTrash", function() { return getEntityIdsQueuedForTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityIdsQueuedForDelete", function() { return getEntityIdsQueuedForDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelsQueuedForDelete", function() { return getModelsQueuedForDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelsQueuedForTrash", function() { return getModelsQueuedForTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEntitiesInState", function() { return getAllEntitiesInState; });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * Returns all entity records for the given modelName in the current state.
 * An entity record is the Map of entities (entityId => entity).
 * @param {Object} state
 * @param {string} modelName
 * @return {Object<number|string, BaseEntity>}|null} A collection of entity
 * records for the given model indexed by primary key value or null if none
 * have been set in the state.
 */

var getEntityRecordsForModel = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, modelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return state.entities.has(modelName) ? state.entities.get(modelName).toJS() : null;
}, function (state, modelName) {
  return [state.entities.get(modelName)];
});
/**
 * Returns all entities for the given model.
 * This differs from entityRecords, in that the entities are NOT indexed by
 * primary key value and an Array of entities is returned instead of an object.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<BaseEntity>|null} An array of entities for the given model or
 * null if none have been set in the state.
 */

var getEntitiesForModel = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, modelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return state.entities.has(modelName) ? state.entities.get(modelName).valueSeq().toArray() : [];
}, function (state, modelName) {
  return [state.entities.get(modelName)];
});
/**
 * Returns the model entity for the given model and id.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {BaseEntity|null} Returns the model entity or null.
 */

function getEntityById(state, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return state.entities.getIn([modelName, Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeEntityId"])(entityId)]) || null;
}
/**
 * Retrieves an array of model entities for the provided array of ids and model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {Array<string|number>} entityIds
 * @return {Array<BaseEntity>|null} Returns an array of model entities for the
 * provided ids or null if never been set.
 */


var getEntitiesByIds = function getEntitiesByIds(state, modelName, entityIds) {
  return retrieveEntitiesByIds(state, modelName, entityIds.join());
};

getEntitiesByIds.clear = function () {
  return retrieveEntitiesByIds.clear();
};

getEntitiesByIds.getDependants = function (state, modelName) {
  return retrieveEntitiesByIds.getDependants(state, modelName);
};
/**
 * Retrieves an array of model entities for the provided array of ids and model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} entityIds  A comma delimited string of ids.  This is so
 * we are passing a primitive arg to rememo for better cache validation.
 * @return {Array<BaseEntity>|null} Returns an array of model entities for the
 * provided ids or null if never been set.
 */


var retrieveEntitiesByIds = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, modelName, entityIds) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  entityIds = entityIds.split(',');
  var entities = [];

  if (state.entities.has(modelName)) {
    entityIds.forEach(function (entityId) {
      var entity = getEntityById(state, modelName, entityId);

      if (entity !== null) {
        entities.push(entity);
      }
    });
  }

  return entities;
}, function (state, modelName) {
  return [state.entities.get(modelName)];
});
/**
 * Retrieves an array of entity ids queued for trash for the given model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<number>} An array of entity ids.
 */

var getEntityIdsQueuedForTrash = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, modelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return state.dirty.trash.has(modelName) ? state.dirty.trash.get(modelName).toArray() : [];
}, function (state, modelName) {
  return [state.dirty.trash.get(modelName)];
});
/**
 * Retrieves an array of entity ids queued for delete for the given model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<number|string>} An array of entity ids.
 */

var getEntityIdsQueuedForDelete = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, modelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  return state.dirty.delete.has(modelName) ? state.dirty.delete.get(modelName).toArray() : [];
}, function (state, modelName) {
  return [state.dirty.delete.get(modelName)];
});
/**
 * Retrieves all the models currently having ids queued for trash
 *
 * @param {Object} state
 * @return {Array<string>} An array of model names.
 */

var getModelsQueuedForTrash = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  return state.dirty.trash.keySeq().toArray();
}, function (state) {
  return [state.dirty.trash];
});
/**
 * Retrieves all the models currently having ids queued for delete.
 *
 * @param {Object} state
 * @return {Array<string>} An array of model names.
 */

var getModelsQueuedForDelete = Object(rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  return state.dirty.delete.keySeq().toArray();
}, function (state) {
  return [state.dirty.delete];
});
/**
 * Returns the state.entities value.
 *
 * @param {Object} state
 *
 * @return {Map} The entities state immutable map.
 */

var getAllEntitiesInState = function getAllEntitiesInState(state) {
  return state.entities;
};



/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/index.js ***!
  \***************************************************************/
/*! exports provided: getEntityRecordsForModel, getEntitiesForModel, getEntityById, getEntitiesByIds, getEntityIdsQueuedForTrash, getEntityIdsQueuedForDelete, getModelsQueuedForDelete, getModelsQueuedForTrash, getAllEntitiesInState, getRelatedEntitiesForIds, getRelatedEntities, getRelationIdsForEntityRelation, getRelationAdditionsQueuedForModel, getRelationDeletionsQueuedForModel, countRelationModelsIndexedForEntity, getAllRelationsInState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/selectors/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityRecordsForModel", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntityRecordsForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntitiesForModel", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntitiesForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntityById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByIds", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntitiesByIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityIdsQueuedForTrash", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntityIdsQueuedForTrash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityIdsQueuedForDelete", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getEntityIdsQueuedForDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelsQueuedForDelete", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getModelsQueuedForDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelsQueuedForTrash", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getModelsQueuedForTrash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllEntitiesInState", function() { return _entities__WEBPACK_IMPORTED_MODULE_0__["getAllEntitiesInState"]; });

/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/selectors/relations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntitiesForIds", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelatedEntitiesForIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntities", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelatedEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationIdsForEntityRelation", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelationIdsForEntityRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationAdditionsQueuedForModel", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelationAdditionsQueuedForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationDeletionsQueuedForModel", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getRelationDeletionsQueuedForModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countRelationModelsIndexedForEntity", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["countRelationModelsIndexedForEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllRelationsInState", function() { return _relations__WEBPACK_IMPORTED_MODULE_1__["getAllRelationsInState"]; });




/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/relations.js":
/*!*******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/relations.js ***!
  \*******************************************************************/
/*! exports provided: getRelatedEntitiesForIds, getRelatedEntities, getRelationIdsForEntityRelation, getRelationAdditionsQueuedForModel, getRelationDeletionsQueuedForModel, countRelationModelsIndexedForEntity, getAllRelationsInState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntitiesForIds", function() { return getRelatedEntitiesForIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedEntities", function() { return getRelatedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationIdsForEntityRelation", function() { return getRelationIdsForEntityRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationAdditionsQueuedForModel", function() { return getRelationAdditionsQueuedForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationDeletionsQueuedForModel", function() { return getRelationDeletionsQueuedForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countRelationModelsIndexedForEntity", function() { return countRelationModelsIndexedForEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRelationsInState", function() { return getAllRelationsInState; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/selectors/entities.js");


/**
 * External imports
 */






/**
 * Internal imports
 */


var DEFAULT_EMPTY_SET = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Set"])();
/**
 * Retrieves the relation ids for the given entity and relation name from the
 * state and considers how the relation might be saved in the state (either as
 * relation mapped to model (index) or model mapped to relation (entityMap)
 *
 * @param {Object} state
 * @param {BaseEntity} entity
 * @param {string} relationName
 * @return {Array} An empty array if there are no ids for the given relation.
 */

var getRelationIdsForEntityRelation = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, entity, relationName) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntity"])(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidModelEntity"]('', entity);
  }

  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(entity.modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);

  if (state.relations.hasIn([modelName, entity.id, relationName])) {
    return (state.relations.getIn([modelName, entity.id, relationName]) || Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Set"])()).toArray();
  }

  return [];
}, function (state, entity, relationName) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntity"])(entity)) {
    return [DEFAULT_EMPTY_SET];
  }

  var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(entity.modelName),
      id = entity.id;
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);
  return [state.relations.getIn([modelName, id, relationName])];
});
/**
 * Returns all the relation entities for the relation on model entity.
 *
 * @param {Object} state
 * @param {BaseEntity} entity
 * @param {string} relationModelName
 * @return {Array<BaseEntity>} An array of entities for the relation.
 */

var getRelatedEntities = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, entity, relationModelName) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntity"])(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidModelEntity"]('', entity);
  }

  relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationModelName);
  return Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getEntitiesByIds"])(state, relationModelName, getRelationIdsForEntityRelation(state, entity, relationModelName));
}, function (state, entity, relationName) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_entities__WEBPACK_IMPORTED_MODULE_7__["getEntitiesByIds"].getDependants(state, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName))), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getRelationIdsForEntityRelation.getDependants(state, entity, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName))));
});
/**
 * Efficient selector for getting all the related entities for the given model,
 * it's entity ids, and the relation name.
 *
 * Instead of using the `getRelations` selector which gets the relations for a
 * single entity.  This allows you to get all the relations for a given set of
 * entity ids (i.e. Get all datetimes related to the event ids: 10, 20, and 30).
 *
 * This selector is wired up to a resolver that does an efficient request to
 * retrieve all those entities and then dispatch the appropriate actions so
 * the relation state is correctly recorded for each relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {Array<number>} entityIds
 * @param {string} relationName
 * @return {Array<BaseEntity>} An array of BaseEntity instances for the
 * relations.
 */

var getRelatedEntitiesForIds = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, modelName, entityIds, relationName) {
  var relationEntities = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Set"])();
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName);
  entityIds.forEach(function (entityId) {
    var entity = Object(_entities__WEBPACK_IMPORTED_MODULE_7__["getEntityById"])(state, modelName, entityId);
    var relatedEntities = getRelatedEntities(state, entity, relationName);
    relationEntities = relationEntities.merge(relatedEntities);
  });
  return relationEntities.toJS();
}, function (state, modelName, entityIds, relationName) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_entities__WEBPACK_IMPORTED_MODULE_7__["getEntitiesByIds"].getDependants(state, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName))), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_entities__WEBPACK_IMPORTED_MODULE_7__["getEntitiesByIds"].getDependants(state, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(relationName))));
});
/**
 * Looks up the relations queued for a given model first from the actual relation
 * type in the state, and then a reverse lookup in the index if not there.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} type 'add' or 'delete'
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation. Example:
 * {
 *   10: {
 *     datetimes: [ 22, 23 ],
 *     message_template_groups: [ 2, 4 ],
 *   },
 *   20: {
 *     datetimes: [ 24, 25 ],
 *   },
 * }
 */

var lookupRelationsQueuedForModel = function lookupRelationsQueuedForModel(state, modelName) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'add';
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
  var relationsQueued = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])();

  if (state.dirty.relations.hasIn([type, modelName])) {
    relationsQueued = relationsQueued.mergeDeep(state.dirty.relations.getIn([type, modelName]));
  }

  if (state.dirty.relations.hasIn(['index', modelName])) {
    var relations = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])();
    state.dirty.relations.getIn(['index', modelName]).forEach(function (relationMap, entityId) {
      relationMap.forEach(function (relationRecord, model) {
        if (relationRecord.has(type)) {
          relations = relations.setIn([entityId, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(model)], relationRecord.get(type));
        }
      });
    });
    relationsQueued = relationsQueued.mergeDeep(relations);
  }

  return relationsQueued.toJS();
};
/**
 * Retrieves all the queued relation additions for the given model
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation. Example:
 * {
 *   10: {
 *     datetimes: [ 22, 23 ],
 *     message_template_groups: [ 2, 4 ],
 *   },
 *   20: {
 *     datetimes: [ 24, 25 ],
 *   },
 * }
 *
 */


var getRelationAdditionsQueuedForModel = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, modelName) {
  return lookupRelationsQueuedForModel(state, modelName);
}, function (state, modelName) {
  return [state.dirty.relations.getIn(['add', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName)]), state.dirty.relations.getIn(['index', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName)])];
});
/**
 * Retrieves all the queued relation deletions for the given model
 * Similar to `getRelationAdditionsQueuedForModel` except this is relations
 * queued for deletion.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation.
 */

var getRelationDeletionsQueuedForModel = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, modelName) {
  return lookupRelationsQueuedForModel(state, modelName, 'delete');
}, function (state, modelName) {
  return [state.dirty.relations.getIn(['delete', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName)]), state.dirty.relations.getIn(['index', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName)])];
});
/**
 * Returns a count of all the relation models (not count of entities) that exist
 * in the state being related to the given model and entityId.
 *
 * Note: This only queries the state, not any relations that might exist in the
 * db.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {number} The count of relations.
 */

var countRelationModelsIndexedForEntity = Object(rememo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
  entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeEntityId"])(entityId); // we can just get this from the context of the model

  return (state.relations.getIn([modelName, entityId]) || Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])()).count();
}, function (state, modelName, entityId) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["singularModelName"])(modelName);
  entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeEntityId"])(entityId);
  return [state.relations.getIn([modelName, entityId])];
});
/**
 * Return the contents of the state.relations map.
 *
 * @param {Object} state
 *
 * @return {Map} The state.relations map.
 */

var getAllRelationsInState = function getAllRelationsInState(state) {
  return state.relations;
};



/***/ }),

/***/ "./assets/src/data/eventespresso/filter-state/index.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/filter-state/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */


var DEFAULT_STATE = {};
var SET_FILTER = 'SET_FILTER';
/**
 * Returns the portion of the state object for the provided context
 *
 * @param {Object} state
 * @param {string} context    filter bar name
 * @return {Object} partial state object
 */

var getState = function getState(state, context) {
  return typeof state[context] === 'undefined' ? Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])() : state[context];
};
/**
 * Resolves actions and returns a new state object
 *
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type      SET_FILTER constant
 * @param {string} action.context 	filter bar name
 * @param {string} action.filter	filter value identifier
 * @param {string} action.value		filter value
 * @return {Object} new state
 */


var filterStateReducer = function filterStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      context = action.context,
      filter = action.filter,
      value = action.value;

  if (type === SET_FILTER) {
    var prevState = getState(state, context);
    var newState = prevState.set(filter, value);

    if (prevState !== newState) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, context, newState));
    }
  }

  return state;
};
/**
 * Returns an action for setting the value of a filter
 *
 * @param {string} context 	filter bar name
 * @param {string} filter 	filter value identifier
 * @param {string} value 	filter value
 * @return {Object} action object
 */


var setFilter = function setFilter(context, filter, value) {
  return {
    type: SET_FILTER,
    context: context,
    filter: filter,
    value: value
  };
};
/**
 * Returns the value for a filter or the default value if not set
 *
 * @param {Object} state
 * @param {string} context 		filter bar name
 * @param {string} filter    	filter value identifier
 * @param {string} defaultValue filter value if not set
 * @return {string} filter value
 */


var getFilter = function getFilter(state, context, filter, defaultValue) {
  return getState(state, context).get(filter, defaultValue);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["registerStore"])('eventespresso/filter-state', {
  reducer: filterStateReducer,
  actions: {
    setFilter: setFilter
  },
  selectors: {
    getFilter: getFilter
  }
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/action-types.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/action-types.js ***!
  \*************************************************************/
/*! exports provided: ACTION_TYPES, RESET_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_TYPES", function() { return RESET_TYPES; });
var ACTION_TYPES = {
  RECEIVE_LIST: 'RECEIVE_LIST',
  RECEIVE_ENTITY_LIST: 'RECEIVE_ENTITY_LIST'
};
var RESET_TYPES = {
  RESET_ALL_STATE: 'RESET_ALL_STATE',
  RESET_STATE_FOR_IDENTIFIER: 'RESET_STATE_FOR_IDENTIFIER',
  RESET_SPECIFIC_STATE_FOR_IDENTIFIER: 'RESET_SPECIFIC_STATE_FOR_IDENTIFIER'
};

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/actions.js":
/*!********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/actions.js ***!
  \********************************************************/
/*! exports provided: receiveResponse, receiveEntityResponse, resetAllState, resetForSelectorAndIdentifier, resetGenericItemsWithIdentifier, resetEntitiesForModelName, resetSpecificStateForSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveResponse", function() { return receiveResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveEntityResponse", function() { return receiveEntityResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllState", function() { return resetAllState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForSelectorAndIdentifier", function() { return resetForSelectorAndIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGenericItemsWithIdentifier", function() { return resetGenericItemsWithIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetEntitiesForModelName", function() { return resetEntitiesForModelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSpecificStateForSelector", function() { return resetSpecificStateForSelector; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/lists/action-types.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetAllState),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetForSelectorAndIdentifier),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetGenericItemsWithIdentifier),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetEntitiesForModelName),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetSpecificStateForSelector);

/**
 * External imports
 */


/**
 * Internal imports
 */




/**
 * Returns an action object used in updating the store with the provided items
 * retrieved from a request using the given querystring.
 *
 * This is a generic response action.
 *
 * @param {string} identifier
 * @param {string} queryString  Results are stored indexed by the query
 * string generating them.
 * @param {Array<*>} items     items attached with the list.
 * @return {
 * 	{
 * 		type: string,
 * 		identifier: string,
 * 		queryString: string,
 * 		items: Array<*>
 *	}
 * } Object for action.
 */

function receiveResponse(identifier, queryString) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].RECEIVE_LIST,
    identifier: identifier,
    queryString: queryString,
    items: items
  };
}
/**
 * Returns an action object used in updating the store with the provided entity
 * items retrieved from a request using the given query string.
 *
 * @param {string} modelName
 * @param {string} queryString
 * @param {Array<BaseEntity>}entities
 * @return {{type: string, identifier: string, queryString: string, items:
 *   Array<BaseEntity>}} An action object.
 */

function receiveEntityResponse(modelName, queryString) {
  var entities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].RECEIVE_ENTITY_LIST,
    identifier: modelName,
    queryString: queryString,
    items: entities
  };
}
/**
 * Action triggering resetting all state in the store.
 */

function resetAllState() {
  var resolvers, selector, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetAllState$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return {
            type: _action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_TYPES"].RESET_ALL_STATE
          };

        case 2:
          if (!invalidateActionsAvailable()) {
            _context.next = 6;
            break;
          }

          _context.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'invalidateResolutionForStore', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"]);

        case 5:
          return _context.abrupt("return");

        case 6:
          _context.next = 8;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["select"])('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"]);

        case 8:
          resolvers = _context.sent;
          _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(resolvers);

        case 10:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 40;
            break;
          }

          selector = _context.t1.value;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 15;
          _iterator = resolvers[selector]._map[Symbol.iterator]();

        case 17:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 24;
            break;
          }

          entry = _step.value;
          _context.next = 21;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], selector, entry[0]);

        case 21:
          _iteratorNormalCompletion = true;
          _context.next = 17;
          break;

        case 24:
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t2 = _context["catch"](15);
          _didIteratorError = true;
          _iteratorError = _context.t2;

        case 30:
          _context.prev = 30;
          _context.prev = 31;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 33:
          _context.prev = 33;

          if (!_didIteratorError) {
            _context.next = 36;
            break;
          }

          throw _iteratorError;

        case 36:
          return _context.finish(33);

        case 37:
          return _context.finish(30);

        case 38:
          _context.next = 10;
          break;

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[15, 26, 30, 38], [31,, 33, 37]]);
}
/**
 * Action triggering resetting state in the store for the given selector name and
 * identifier
 *
 * @param {string} selectorName
 * @param {string} identifier
 */

function resetForSelectorAndIdentifier(selectorName, identifier) {
  var resolvers, _selector, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _entry;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetForSelectorAndIdentifier$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return {
            type: _action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_TYPES"].RESET_STATE_FOR_IDENTIFIER,
            identifier: identifier
          };

        case 2:
          _context2.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["select"])('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"]);

        case 4:
          resolvers = _context2.sent;
          _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(resolvers);

        case 6:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 38;
            break;
          }

          _selector = _context2.t1.value;

          if (!(selectorName === _selector || identifierInSelector(_selector, identifier))) {
            _context2.next = 36;
            break;
          }

          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 12;
          _iterator2 = resolvers[_selector]._map[Symbol.iterator]();

        case 14:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 22;
            break;
          }

          _entry = _step2.value;

          if (!(_entry[0][0] === identifier)) {
            _context2.next = 19;
            break;
          }

          _context2.next = 19;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], _selector, _entry[0]);

        case 19:
          _iteratorNormalCompletion2 = true;
          _context2.next = 14;
          break;

        case 22:
          _context2.next = 28;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t2 = _context2["catch"](12);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t2;

        case 28:
          _context2.prev = 28;
          _context2.prev = 29;

          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }

        case 31:
          _context2.prev = 31;

          if (!_didIteratorError2) {
            _context2.next = 34;
            break;
          }

          throw _iteratorError2;

        case 34:
          return _context2.finish(31);

        case 35:
          return _context2.finish(28);

        case 36:
          _context2.next = 6;
          break;

        case 38:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[12, 24, 28, 36], [29,, 31, 35]]);
}
/**
 * Action triggering the state reset for the "generic" selector ('getItems') and
 * it's identifier
 *
 * @param {string} identifier
 */

function resetGenericItemsWithIdentifier(identifier) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetGenericItemsWithIdentifier$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.delegateYield(resetForSelectorAndIdentifier('getItems', identifier), "t0", 1);

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Action triggering the state reset for the entity selectors for the given
 * modelName
 *
 * @param {string} modelName
 */

function resetEntitiesForModelName(modelName) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetEntitiesForModelName$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(resetForSelectorAndIdentifier('getEntities', modelName), "t0", 1);

        case 1:
          return _context4.delegateYield(resetForSelectorAndIdentifier('getEntitiesByIds', modelName), "t1", 2);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Action triggering the state reset for the specific selector name, identifier
 * and query string.
 *
 * @param {string} selectorName
 * @param {string} identifier
 * @param {string} queryString
 */

function resetSpecificStateForSelector(selectorName, identifier, queryString) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetSpecificStateForSelector$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return {
            type: _action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_TYPES"].RESET_SPECIFIC_STATE_FOR_IDENTIFIER,
            identifier: identifier,
            queryString: queryString
          };

        case 2:
          _context5.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], selectorName, [identifier, queryString]);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Helper for determining if actions are available in the `core/data` package.
 *
 * @return {boolean}  True means additional invalidation actions available.
 */

var invalidateActionsAvailable = function invalidateActionsAvailable() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/data').invalidateResolutionForStore !== undefined;
};
/**
 * Helper for determining whether the given identifier is found in the given
 * selectorName.
 *
 * @param {string} selectorName
 * @param {string} identifier
 * @return {boolean} True means it is present, false means it isn't
 */


var identifierInSelector = function identifierInSelector(selectorName, identifier) {
  if (selectorName === 'getItems') {
    return false;
  }

  var singularName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(identifier);
  var pluralName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["pluralModelName"])(identifier);
  selectorName = selectorName.toLowerCase();
  return selectorName.indexOf(singularName) > -1 || selectorName.indexOf(pluralName) > -1;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/constants.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/constants.js ***!
  \**********************************************************/
/*! exports provided: REDUCER_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_KEY", function() { return REDUCER_KEY; });
/**
 * The key for the reducer on the store.
 * @type {string}
 */
var REDUCER_KEY = 'eventespresso/lists';

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/index.js":
/*!******************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/lists/reducers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/lists/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/lists/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/lists/resolvers.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/lists/model.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Creates specific model entity selectors (getEvents, getDatetimes etc)
 * @type {Object<Function>}
 */

var entitySelectors = Object(_model__WEBPACK_IMPORTED_MODULE_6__["createEntitySelectors"])(_selectors__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Creates specific model entity resolvers (getEvents, getDatetimes etc)
 * @type {Object<Function>}
 */

var entityResolvers = Object(_model__WEBPACK_IMPORTED_MODULE_6__["createEntityResolvers"])(_resolvers__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers the store for the 'eventespresso/lists` reducer.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__,
  selectors: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _selectors__WEBPACK_IMPORTED_MODULE_3__, entitySelectors),
  resolvers: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _resolvers__WEBPACK_IMPORTED_MODULE_5__, entityResolvers),
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/model.js":
/*!******************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/model.js ***!
  \******************************************************/
/*! exports provided: createEntitySelectors, createEntityResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntitySelectors", function() { return createEntitySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityResolvers", function() { return createEntityResolvers; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "./assets/src/data/model/index.js");
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/**
 * Internal dependencies
 */




/**
 * This method creates selectors for each registered model name wrapping the
 * generic source selectors.
 *
 * @param {Object<function>} source
 * @return {Object<function>} All the generated selectors for each model.
 */

var createEntitySelectors = function createEntitySelectors(source) {
  return _model__WEBPACK_IMPORTED_MODULE_1__["MODEL_NAMES"].reduce(function (selectors, modelName) {
    var methodNameForGet = Object(_base_model__WEBPACK_IMPORTED_MODULE_0__["getMethodName"])(modelName, '', 'get', true);

    selectors[methodNameForGet] = function (state, queryString) {
      return source.getEntities(state, modelName, queryString);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_0__["getMethodName"])(modelName, 'byIds', 'get', true)] = function (state) {
      var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return source.getEntitiesByIds(state, modelName, ids);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_0__["getMethodName"])(modelName, '', 'isRequesting', true)] = function (state, queryString) {
      return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_2__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_3__["REDUCER_KEY"], methodNameForGet, queryString);
    };

    return selectors;
  }, {});
};
/**
 * This method creates resolvers for each registered model name wrapping the
 * generic source resolvers.
 *
 * @param {Object<function>} source
 * @return {Object<function>} All the generated resolvers for each model.
 */

var createEntityResolvers = function createEntityResolvers(source) {
  return _model__WEBPACK_IMPORTED_MODULE_1__["MODEL_NAMES"].reduce(function (resolvers, modelName) {
    resolvers[Object(_base_model__WEBPACK_IMPORTED_MODULE_0__["getMethodName"])(modelName, '', 'get', true)] = function (queryString) {
      return source.getEntities(modelName, queryString);
    };

    resolvers[Object(_base_model__WEBPACK_IMPORTED_MODULE_0__["getMethodName"])(modelName, 'byIds', 'get', true)] = function (ids) {
      return source.getEntitiesByIds(modelName, ids);
    };

    return resolvers;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/reducers.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/reducers.js ***!
  \*********************************************************/
/*! exports provided: receiveListItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveListItems", function() { return receiveListItems; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/lists/action-types.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal dependencies
 */

/**
 * External dependencies
 */



/**
 * Reducer managing item list state.
 *
 * @param {Immutable.Map} state  Current state.
 * @param {Object} action	Dispatched action.
 * @return {Immutable.Map}	Updated state.
 */

function receiveListItems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LISTS_STATE"]);
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      identifier = action.identifier,
      queryString = action.queryString;
  var path = [identifier, queryString];
  var items = action.items;
  var doUpdate = true,
      existingValues;

  switch (type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_LIST:
      existingValues = state.getIn(path) || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      items = existingValues.merge(items);
      break;

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_ENTITY_LIST:
      existingValues = state.getIn(path) || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedMap"])();
      items = existingValues.merge(items.map(function (entity) {
        return [entity.id, entity];
      }));
      break;

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_TYPES"].RESET_ALL_STATE:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LISTS_STATE"]);

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_TYPES"].RESET_STATE_FOR_IDENTIFIER:
      return state.delete(identifier);

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_TYPES"].RESET_SPECIFIC_STATE_FOR_IDENTIFIER:
      return state.deleteIn([identifier, queryString]);

    default:
      doUpdate = false;
  }

  return doUpdate ? state.setIn([identifier, queryString], items) : state;
}
/* harmony default export */ __webpack_exports__["default"] = (receiveListItems);

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/resolvers.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/resolvers.js ***!
  \**********************************************************/
/*! exports provided: getItems, buildAndDispatchEntitiesFromResponse, getEntities, getEntitiesByIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAndDispatchEntitiesFromResponse", function() { return buildAndDispatchEntitiesFromResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByIds", function() { return getEntitiesByIds; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/lists/actions.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getItems),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(buildAndDispatchEntitiesFromResponse),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEntities),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEntitiesByIds);

/**
 * External imports
 */


/**
 * Internal dependencies
 */





var DEFAULT_EMPTY_ARRAY = [];
/**
 * Resolver for generic items returned from an endpoint.
 *
 * @param {string} identifier  The identifier for the items.
 * @param {string} queryString  Additional query string parameters passed on to
 *   the REST request.
 */

function getItems(identifier, queryString) {
  var items;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            path: queryString
          });

        case 2:
          items = _context.sent;
          _context.next = 5;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["receiveResponse"])(identifier, queryString, items);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Utility for handling an entity response and constructing BaseEntity
 * children from them.
 *
 * Note, this uses the entities stored in the eventespresso/core store as the
 * authority so if an entity already exists there, it replaces what was
 * retrieved from the server.
 *
 * @param {string} modelName
 * @param {Array} response
 * @return {IterableIterator<*>|Array<BaseEntity>}  An empty array if the
 * factory cannot be retrieved for the model.  Otherwise the constructed
 * entities.
 */

function buildAndDispatchEntitiesFromResponse(modelName, response) {
  var factory, fullEntities, entityIds, existingEntities;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function buildAndDispatchEntitiesFromResponse$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["resolveSelect"])(_schema_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getFactoryForModel', modelName);

        case 2:
          factory = _context2.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(factory)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 5:
          fullEntities = response.map(function (entity) {
            return factory.fromExisting(entity);
          });
          entityIds = fullEntities.map(function (entity) {
            return entity.id;
          }); // are there already entities for the ids in the store?  If so, we use those

          _context2.next = 9;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], 'getEntitiesByIds', modelName, entityIds);

        case 9:
          existingEntities = _context2.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(existingEntities)) {
            fullEntities = fullEntities.map(function (entity) {
              return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(existingEntities, function (existingEntity) {
                return existingEntity.id === entity.id;
              }) || entity;
            });
          }

          _context2.next = 13;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["dispatch"])(_core_constants__WEBPACK_IMPORTED_MODULE_5__["REDUCER_KEY"], 'receiveEntityRecords', modelName, fullEntities);

        case 13:
          _context2.next = 15;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["resolveGetEntityByIdForIds"])(modelName, entityIds);

        case 15:
          return _context2.abrupt("return", fullEntities);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Resolver for model entities returned from an endpoint.
 * @param {string} modelName
 * @param {string} queryString
 * @return {IterableIterator<*>|Array<BaseEntity>} An empty array if no
 * entities retrieved.
 */

function getEntities(modelName, queryString) {
  var response, fullEntities;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEntities$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            path: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["applyQueryString"])(modelName, queryString)
          });

        case 2:
          response = _context3.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(response)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 5:
          _context3.next = 7;
          return buildAndDispatchEntitiesFromResponse(modelName, response);

        case 7:
          fullEntities = _context3.sent;
          _context3.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["receiveEntityResponse"])(modelName, queryString, fullEntities);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Resolver for getting model entities for a given set of ids
 * @param {string} modelName
 * @param {Array<number>}ids
 * @return {IterableIterator<*>|Array} An empty array if no entities retrieved.
 */

function getEntitiesByIds(modelName) {
  var ids,
      queryString,
      response,
      fullEntities,
      _args4 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEntitiesByIds$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          ids = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
          queryString = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["getPrimaryKeyQueryString"])(modelName, ids);
          _context4.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            path: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["applyQueryString"])(modelName, queryString)
          });

        case 4:
          response = _context4.sent;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(response)) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", DEFAULT_EMPTY_ARRAY);

        case 7:
          _context4.next = 9;
          return buildAndDispatchEntitiesFromResponse(modelName, response);

        case 9:
          fullEntities = _context4.sent;
          _context4.next = 12;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["receiveEntityResponse"])(modelName, queryString, fullEntities);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/selectors.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/selectors.js ***!
  \**********************************************************/
/*! exports provided: getItems, getEntities, getEntitiesByIds, isRequestingItems, isRequestingEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByIds", function() { return getEntitiesByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingItems", function() { return isRequestingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingEntities", function() { return isRequestingEntities; });
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/**
 * Internal dependencies
 */


/**
 * External dependencies
 */





var DEFAULT_EMPTY_ARRAY = [];
/**
 * Generic helper for retrieving items from state for given identifier and
 * queryString.
 *
 * @param {Immutable.Map} state
 * @param {string} identifier
 * @param {string} queryString
 * @param {*} defaultEmpty  Caller can supply what the default is when state is
 * doesn't have entries for the given identifier and queryString
 * @return {Array|Object} Returns the array of items if the given identifier/
 * querystring does not exist in the state or the given items as an array or
 * object (depending on how they are stored in the state).
 */

var retrieveItems = function retrieveItems(state, identifier, queryString) {
  var defaultEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Object(immutable__WEBPACK_IMPORTED_MODULE_5__["Set"])();
  return state.getIn([identifier, queryString]) || defaultEmpty;
};
/**
 * Returns all the items for the given identifier and queryString
 *
 * @param {Immutable.Map} state Data state.
 * @param {string} identifier The identifier the items are being retrieved for.
 * @param {string} queryString The query string for retrieving the items.
 * @return {Array} Returns an array of items for the given model and query.
 */


var getItems = Object(rememo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state, identifier, queryString) {
  return retrieveItems(state, identifier, queryString).toArray();
}, function (state, identifier, queryString) {
  return [state.getIn([identifier, queryString])];
});
/**
 * Returns all the model entities for the given modelName and query string.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {string} queryString
 * @return {Array<BaseEntity>} Returns array of entities.
 */

var getEntities = Object(rememo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state, modelName, queryString) {
  return retrieveItems(state, modelName, queryString, Object(immutable__WEBPACK_IMPORTED_MODULE_5__["OrderedMap"])()).valueSeq().toArray();
}, function (state, modelName, queryString) {
  return [state.getIn([modelName, queryString])];
});
/**
 * Returns all the model entities for the given modelName and query string.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {Array} ids
 * @return {Array<BaseEntity>} An array of entities.
 */

var getEntitiesByIds = function getEntitiesByIds(state, modelName) {
  var ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  try {
    var queryString = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["getPrimaryKeyQueryString"])(modelName, ids);
    return getEntities(state, modelName, queryString);
  } catch (e) {
    return DEFAULT_EMPTY_ARRAY;
  }
};

getEntitiesByIds.clear = function () {
  return getEntities.clear();
};
/**
 * Helper indicating whether the given identifier, selectorName, and queryString
 * is being resolved or not.
 *
 * @param {Immutable.Map} state
 * @param {string} identifier
 * @param {string} selectorName
 * @param {string} queryString
 * @return {boolean} Returns true if the selector is currently requesting items.
 */


function isRequesting(state, identifier, selectorName, queryString) {
  Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["assertImmutableObjectHasPath"])([identifier], state, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The given identifier (%s) does not exist in the state.', 'event_espresso'), identifier));
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], selectorName, identifier, queryString);
}
/**
 * Returns whether the items for the given identifier and query string are being
 * requested.
 *
 * @param {Immutable.Map} state Data state.
 * @param {string} identifier  The identifier for the items being requested
 * @param {string} queryString The query string for the request
 * @return {boolean} Whether items are being requested or not.
 */


function isRequestingItems(state, identifier, queryString) {
  return isRequesting(state, identifier, 'getItems', queryString);
}
/**
 * Returns whether the get entities request is in the process of being resolved
 * or not.
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {string} queryString
 * @return {boolean} True means entities (for the given model) are being
 * requested.
 */

function isRequestingEntities(state, modelName, queryString) {
  return isRequesting(state, modelName, 'getEntities', queryString);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/action-types.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/action-types.js ***!
  \**************************************************************/
/*! exports provided: ACTION_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
var ACTION_TYPES = {
  RECEIVE_SCHEMA_RECORD: 'RECEIVE_SCHEMA_RECORD',
  RECEIVE_FACTORY_FOR_MODEL: 'RECEIVE_FACTORY_FOR_MODEL',
  RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY: 'RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY',
  RECEIVE_RELATION_SCHEMA: 'RECEIVE_RELATION_SCHEMA'
};

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/actions.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/actions.js ***!
  \*********************************************************/
/*! exports provided: receiveSchemaForModel, receiveFactoryForModel, receiveRelationEndpointForModelEntity, receiveRelationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSchemaForModel", function() { return receiveSchemaForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveFactoryForModel", function() { return receiveFactoryForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRelationEndpointForModelEntity", function() { return receiveRelationEndpointForModelEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRelationSchema", function() { return receiveRelationSchema; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/schema/action-types.js");
/**
 * Internal imports
 */

/**
 * Returns an action object used to update the store with the provided schema
 * for the provided modelName.
 *
 * @param {string} modelName
 * @param {Object} schema
 * @return {{type: string, modelName: *, schema}}  The action object.
 */

function receiveSchemaForModel(modelName) {
  var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_SCHEMA_RECORD,
    modelName: modelName,
    schema: schema
  };
}
/**
 * Returns an action object used to update the store with the provided model
 * entity factory for the provided modelName.
 *
 * @param {string} modelName
 * @param {Object} factory
 * @return {{type: string, modelName: string, factory: Object}} An action
 * object.
 */

function receiveFactoryForModel(modelName) {
  var factory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_FACTORY_FOR_MODEL,
    modelName: modelName,
    factory: factory
  };
}
/**
 * Returns an action object used to update the store with the provided relation
 * endpoint for the model and id, and its relations.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {string} endpoint
 * @return {
 * 	{
 * 		modelName: *,
 * 		endpoint: *,
 * 		relationName: *,
 * 		entityId: *,
 * 		type: string
 * 	}
 * } An action object.
 */

function receiveRelationEndpointForModelEntity(modelName, entityId, relationName, endpoint) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY,
    modelName: modelName,
    entityId: entityId,
    relationName: relationName,
    endpoint: endpoint
  };
}
function receiveRelationSchema(modelName, relationName, relationSchema) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].RECEIVE_RELATION_SCHEMA,
    modelName: modelName,
    relationName: relationName,
    relationSchema: relationSchema
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/constants.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/constants.js ***!
  \***********************************************************/
/*! exports provided: REDUCER_KEY, JOIN_RELATION_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_KEY", function() { return REDUCER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_RELATION_TYPES", function() { return JOIN_RELATION_TYPES; });
/**
 * Identifier key for this store reducer.
 * @type {string}
 */
var REDUCER_KEY = 'eventespresso/schema';
var JOIN_RELATION_TYPES = ['EE_HABTM_Relation', 'EE_HABTM_Any_Relation'];

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/index.js ***!
  \*******************************************************/
/*! exports provided: default, SCHEMA_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_KEY", function() { return SCHEMA_KEY; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/schema/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/schema/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/schema/resolvers.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/schema/reducers.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/schema/model.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Creates specific model entity selectors (getFactoryForEvent etc)
 * @type {Object<Function>}
 */

var entitySelectors = Object(_model__WEBPACK_IMPORTED_MODULE_8__["createEntitySelectors"])(_selectors__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Creates specific model entity resolvers (getFactoryForEvent etc)
 * @type {Object<Function>}
 */

var entityResolvers = Object(_model__WEBPACK_IMPORTED_MODULE_8__["createEntityResolvers"])(_resolvers__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registration of store for eventespresso/schema.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_2__["REDUCER_KEY"], {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__,
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_7__["default"],
  selectors: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _selectors__WEBPACK_IMPORTED_MODULE_3__, entitySelectors),
  resolvers: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _resolvers__WEBPACK_IMPORTED_MODULE_5__, entityResolvers)
}));
var SCHEMA_KEY = _constants__WEBPACK_IMPORTED_MODULE_2__["REDUCER_KEY"];

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/model.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/model.js ***!
  \*******************************************************/
/*! exports provided: createEntitySelectors, createEntityResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntitySelectors", function() { return createEntitySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityResolvers", function() { return createEntityResolvers; });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Creates selectors for each registered model name wrapping the generic source
 * selectors.
 *
 * @param {Object<function>} source
 * @return {Object<function>} All the generated selectors for each model.
 */

var createEntitySelectors = function createEntitySelectors(source) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (selectors, modelName) {
    var schemaMethodName = Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'schema', 'get');
    var factoryMethodName = Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'factory', 'get');

    selectors[schemaMethodName] = function (state) {
      return source.getSchemaForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'schema', 'isRequesting')] = function () {
      return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_2__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_3__["REDUCER_KEY"], schemaMethodName);
    };

    selectors[factoryMethodName] = function (state) {
      return source.getFactoryForModel(state, modelName);
    };

    selectors[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'factory', 'isRequesting')] = function () {
      return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_2__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_3__["REDUCER_KEY"], factoryMethodName);
    };

    return selectors;
  }, {});
};
/**
 * Creates resolvers for each registered model name wrapping the generic source
 * resolvers.
 *
 * @param {Object<function>} source
 * @return {Object<function>} All the generated resolvers for each model.
 */

var createEntityResolvers = function createEntityResolvers(source) {
  return _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAMES"].reduce(function (resolvers, modelName) {
    resolvers[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'schema', 'get')] = function () {
      return source.getSchemaForModel(modelName);
    };

    resolvers[Object(_base_model__WEBPACK_IMPORTED_MODULE_1__["getMethodName"])(modelName, 'factory', 'get')] = function () {
      return source.getFactoryForModel(modelName);
    };

    return resolvers;
  }, {});
};

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/reducers.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/reducers.js ***!
  \**********************************************************/
/*! exports provided: receiveSchema, receiveFactory, receiveRelationEndpointForEntity, receiveRelationSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSchema", function() { return receiveSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveFactory", function() { return receiveFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRelationEndpointForEntity", function() { return receiveRelationEndpointForEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRelationSchema", function() { return receiveRelationSchema; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/schema/action-types.js");
/**
 * External dependencies
 */






/**
 * Internal imports
 */


/**
 * Reducer for a model schema.
 * @param {Map} state
 * @param {Object} action
 * @return {Map} The new (or original) state.
 */

var receiveSchema = function receiveSchema() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCHEMA_STATE"].schema);
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      schema = action.schema;

  try {
    var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);

    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isSchemaResponseOfModel"])(schema, modelName) && type === _action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].RECEIVE_SCHEMA_RECORD) {
      return state.set(modelName, schema);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for a model factory
 * @param {Map} state
 * @param {Object} action
 * @return {Map} the new (or original) state.
 */

var receiveFactory = function receiveFactory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCHEMA_STATE"].factory);
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      factory = action.factory;

  try {
    var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);

    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityFactoryOfModel"])(factory, modelName) && type === _action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].RECEIVE_FACTORY_FOR_MODEL) {
      return state.set(modelName, factory);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for relation endpoints.
 *
 * @param {Map}state
 * @param {Object} action
 * @return {Map} New or original state.
 */

var receiveRelationEndpointForEntity = function receiveRelationEndpointForEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCHEMA_STATE"].relationEndpoints);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  try {
    var type = action.type,
        entityId = action.entityId,
        endpoint = action.endpoint;
    var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);
    var relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.relationName);

    if (type === _action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY) {
      return state.setIn([modelName, Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeEntityId"])(entityId), relationName], endpoint);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for relation schema
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} New or original state
 */

var receiveRelationSchema = function receiveRelationSchema() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].RECEIVE_RELATION_SCHEMA) {
    var modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.modelName);
    var relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(action.relationName);

    if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_5___default()(state.getIn([modelName, relationName], {}), action.relationSchema)) {
      return state;
    }

    return state.setIn([modelName, relationName], action.relationSchema);
  }

  return state;
};
/**
 * Be aware that the root state is a plain object but each slice ('schema',
 * 'factory', 'relationEndpoints') is an immutable Map.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  schema: receiveSchema,
  factory: receiveFactory,
  relationEndpoints: receiveRelationEndpointForEntity,
  relationSchema: receiveRelationSchema
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/resolvers.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/resolvers.js ***!
  \***********************************************************/
/*! exports provided: getSchemaForModel, getFactoryForModel, getRelationEndpointForEntityId, getRelationPrimaryKeyString, getRelationResponseType, hasJoinTableRelation, getRelationType, getRelationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaForModel", function() { return getSchemaForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFactoryForModel", function() { return getFactoryForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationEndpointForEntityId", function() { return getRelationEndpointForEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationPrimaryKeyString", function() { return getRelationPrimaryKeyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationResponseType", function() { return getRelationResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasJoinTableRelation", function() { return hasJoinTableRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationType", function() { return getRelationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationSchema", function() { return getRelationSchema; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/schema/actions.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getSchemaForModel),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getFactoryForModel),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelationEndpointForEntityId),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelationPrimaryKeyString),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelationResponseType),
    _marked6 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(hasJoinTableRelation),
    _marked7 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelationType),
    _marked8 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getRelationSchema);

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





/**
 * A resolver for getting the schema for a given model name.
 * @param {string} modelName
 * @return {Object} Retrieved schema.
 */

function getSchemaForModel(modelName) {
  var path, schema;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSchemaForModel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["getEndpoint"])(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName));
          _context.next = 3;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: path,
            method: 'OPTIONS'
          });

        case 3:
          schema = _context.sent;
          _context.next = 6;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["receiveSchemaForModel"])(modelName, schema);

        case 6:
          return _context.abrupt("return", schema);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * A resolver for getting the model entity factory for a given model name.
 * @param {string} modelName
 * @param {Object} schema
 * @return {Object|null} retrieved factory
 */

function getFactoryForModel(modelName) {
  var schema,
      factory,
      _args2 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getFactoryForModel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          schema = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};

          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isSchemaResponseOfModel"])(schema, modelName)) {
            _context2.next = 5;
            break;
          }

          _context2.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getSchemaForModel', modelName);

        case 4:
          schema = _context2.sent;

        case 5:
          if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isSchemaResponseOfModel"])(schema, modelName)) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", null);

        case 7:
          factory = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["createEntityFactory"])(modelName, schema.schema, Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["MODEL_PREFIXES"])(modelName));
          _context2.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["receiveFactoryForModel"])(modelName, factory);

        case 10:
          return _context2.abrupt("return", factory);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * A resolver for getting the relation endpoint for a given model, it's id, and
 * the requested relation.
 *
 * The EE REST api names relations according to whether they there are singular
 * or plural relations on a given model (eg. Registrations have one event
 * relation, but Events can have multiple datetimes).  This means the only way
 * to derive an accurate endpoint for a given relation request on an entity is
 * to retrieve the entity from the resource and derive the endpoint from the
 * links in the response.
 *
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationModelName
 * @return {IterableIterator<*>|string} A generator or the derived endpoint.
 */

function getRelationEndpointForEntityId(modelName, entityId, relationModelName) {
  var entity, pluralRelationName, endpoint, response, links, baseRelationPath;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelationEndpointForEntityId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_core_constants__WEBPACK_IMPORTED_MODULE_6__["REDUCER_KEY"], 'getEntityById', modelName, entityId);

        case 2:
          entity = _context3.sent;
          relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationModelName);
          pluralRelationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["pluralModelName"])(relationModelName);
          endpoint = '';

          if (!(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntity"])(entity) && entity[pluralRelationName + 'Resource'])) {
            _context3.next = 10;
            break;
          }

          endpoint = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["stripBaseRouteFromUrl"])(entity[pluralRelationName + 'Resource'].resourceLink);
          _context3.next = 19;
          break;

        case 10:
          _context3.next = 12;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["fetch"])({
            path: Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["getEndpoint"])(modelName) + '/' + entityId
          });

        case 12:
          response = _context3.sent;

          if (response._links) {
            _context3.next = 15;
            break;
          }

          return _context3.abrupt("return", '');

        case 15:
          links = response._links || {};
          baseRelationPath = 'https://api.eventespresso.com/';
          endpoint = links[baseRelationPath + relationModelName] || '';
          endpoint = endpoint === '' && links[baseRelationPath + pluralRelationName] || endpoint;

        case 19:
          if (!endpoint) {
            _context3.next = 22;
            break;
          }

          _context3.next = 22;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["receiveRelationEndpointForModelEntity"])(modelName, entityId, relationModelName, endpoint);

        case 22:
          return _context3.abrupt("return", endpoint);

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * A resolver for getting the primary key string to use in a query for the given
 * model and relation. This considers the join type for the relation.
 *
 * @see the `getRelationPrimaryKeyString` selector for example.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {string} The primary key string to use or an empty string if relation
 * type could not be determined.
 */

function getRelationPrimaryKeyString(modelName, relationName) {
  var relationType, relationPrimaryKey;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelationPrimaryKeyString$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // normalize
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
          _context4.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getRelationType', modelName, relationName);

        case 4:
          relationType = _context4.sent;

          if (!(relationType === '')) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", '');

        case 7:
          relationPrimaryKey = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["getPrimaryKey"])(relationName);
          return _context4.abrupt("return", relationType === 'EE_Belongs_To_Relation' ? relationPrimaryKey : "".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["modelNameForQueryString"])(relationName), ".").concat(relationPrimaryKey));

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * A resolver for returning what the expected response type is for the given
 * relation.
 *
 * @param {string} modelName  The model the relation is for.
 * @param {string} relationName The model name the relation is to.
 * @return {string} The type of the relation.
 */

function getRelationResponseType(modelName, relationName) {
  var relationSchema;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelationResponseType$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
          _context5.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getRelationSchema', modelName, relationName);

        case 4:
          relationSchema = _context5.sent;
          return _context5.abrupt("return", relationSchema !== null ? relationSchema.type : '');

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * A resolver for returning whether the given modelName and relationName have
 * a join table for representing their relation.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {boolean}  True means there is a join table, false means there isn't.
 */

function hasJoinTableRelation(modelName, relationName) {
  var relationType;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function hasJoinTableRelation$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
          _context6.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getRelationType', modelName, relationName);

        case 4:
          relationType = _context6.sent;
          return _context6.abrupt("return", _constants__WEBPACK_IMPORTED_MODULE_7__["JOIN_RELATION_TYPES"].indexOf(relationType) > -1);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * A resolver for getting the relation type describing the relation between
 * modelName and relationName
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {string}  The relation type to describe the relation
 */

function getRelationType(modelName, relationName) {
  var relationSchema;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelationType$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
          _context7.next = 4;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getRelationSchema', modelName, relationName);

        case 4:
          relationSchema = _context7.sent;
          return _context7.abrupt("return", relationSchema !== null ? relationSchema.relation_type : '');

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * A resolver for retrieving the relation schema from the server for the given
 * modelName and relationName.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @throws Error
 */

function getRelationSchema(modelName, relationName) {
  var pluralRelationName, schema, typeSchema;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRelationSchema$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
          relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
          pluralRelationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["pluralModelName"])(relationName);
          _context8.next = 5;
          return Object(_base_controls__WEBPACK_IMPORTED_MODULE_5__["resolveSelect"])(_constants__WEBPACK_IMPORTED_MODULE_7__["REDUCER_KEY"], 'getSchemaForModel', modelName);

        case 5:
          schema = _context8.sent;

          if (!(schema === null)) {
            _context8.next = 8;
            break;
          }

          throw new Error('The ' + modelName + ' does not have a schema');

        case 8:
          // is there a schema for plural relation name?
          typeSchema = schema.schema.properties[pluralRelationName] || null;
          typeSchema = typeSchema === null && !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(schema.schema.properties[relationName]) ? schema.schema.properties[relationName] : typeSchema;

          if (!(typeSchema === null)) {
            _context8.next = 12;
            break;
          }

          throw new Error('There is no relation for ' + relationName + ' on the ' + 'model ' + modelName);

        case 12:
          _context8.next = 14;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["receiveRelationSchema"])(modelName, relationName, typeSchema);

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/selectors.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/selectors.js ***!
  \***********************************************************/
/*! exports provided: getSchemaForModel, isRequestingSchemaForModel, hasResolvedSchemaForModel, getFactoryForModel, isRequestingFactoryForModel, hasResolvedFactoryForModel, getRelationEndpointForEntityId, isRequestingRelationEndpointForEntityId, getRelationPrimaryKeyString, getRelationResponseType, hasJoinTableRelation, getRelationType, getRelationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaForModel", function() { return getSchemaForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingSchemaForModel", function() { return isRequestingSchemaForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasResolvedSchemaForModel", function() { return hasResolvedSchemaForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFactoryForModel", function() { return getFactoryForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingFactoryForModel", function() { return isRequestingFactoryForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasResolvedFactoryForModel", function() { return hasResolvedFactoryForModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationEndpointForEntityId", function() { return getRelationEndpointForEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequestingRelationEndpointForEntityId", function() { return isRequestingRelationEndpointForEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationPrimaryKeyString", function() { return getRelationPrimaryKeyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationResponseType", function() { return getRelationResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasJoinTableRelation", function() { return hasJoinTableRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationType", function() { return getRelationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationSchema", function() { return getRelationSchema; });
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/**
 * Internal dependencies
 */


/**
 * External imports
 */





/**
 * Selector for returning the schema object for a given model name from the
 * state.
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} The schema object or null if it doesn't exist.
 */

function getSchemaForModel(state, modelName) {
  return state.schema.get(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName), null);
}
/**
 * Selector for returning whether the schema is being requested or not for the
 * given model name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean}  True means its being requested.
 */

function isRequestingSchemaForModel(state, modelName) {
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], 'getSchemaForModel', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName));
}
/**
 * Selector for returning whether the schema has been resolved or not for the
 * given model name.
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean} True means that the schema has finished resolving for this
 * model name.
 */

function hasResolvedSchemaForModel(state, modelName) {
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["hasFinishedResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], 'getSchemaForModel', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName));
}
/**
 * Selector for returning the model entity factory object for a given
 * model name from the state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns the model entity factory or null if it doesn't
 * exist.
 */

function getFactoryForModel(state, modelName) {
  var factory = state.factory.get(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName), null);
  return !(factory instanceof immutable__WEBPACK_IMPORTED_MODULE_4__["Map"]) ? factory : null;
}
/**
 * Selector for returning whether the model entity factory is being requested
 * or not for the given model name from the state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean}  True means it is being requested.
 */

function isRequestingFactoryForModel(state, modelName) {
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], 'getFactoryForModel', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName));
}
/**
 * Selector for returning whether the factory has been resolved or not for the
 * given model name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean} True means that the factory has finished resolving for this
 * model name.
 */

function hasResolvedFactoryForModel(state, modelName) {
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["hasFinishedResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], 'getFactoryForModel', Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName));
}
/**
 * Return the relation endpoint for the given model, entity id and relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @param {string} relationModelName
 * @return {string} Returns the relation endpoint if available or an empty
 * string.
 */

function getRelationEndpointForEntityId(state, modelName, entityId, relationModelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationModelName);
  entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__["normalizeEntityId"])(entityId);
  return state.relationEndpoints.getIn([modelName, entityId, relationModelName]) || '';
}
/**
 * Selector for returning whether the relation endpoint is being requested
 * or not for the given model name, entity id, and relation from the state.
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @param {string} relationModelName
 * @return {boolean}  True means it is being requested.
 */

function isRequestingRelationEndpointForEntityId(state, modelName, entityId, relationModelName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  entityId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__["normalizeEntityId"])(entityId);
  relationModelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationModelName);
  return Object(_base_selectors__WEBPACK_IMPORTED_MODULE_0__["isResolving"])(_constants__WEBPACK_IMPORTED_MODULE_1__["REDUCER_KEY"], 'getRelationEndpointForEntityId', modelName, entityId, relationModelName);
}
/**
 * Selector for returning the primary key string to use in a query for the given
 * model and relation.  This considers the join type for the relation.
 *
 * For example:  If you were doing a query to get the registrations related to an
 * attendee, you would need the string to use for the `REG_ID` primary key in
 * the query.  Since the join type for registrations to attendees is
 * EE_Has_Many_Relation, then the query string would need to be
 * `Registration.REG_ID`.  If however you were getting the attendee related
 * to a registration, then the join type for attendees on registrations is
 * EE_Belongs_To_Relation, in which case the attendee primary key would be
 * `ATT_ID` (the registration table has the foreign key on it).
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 *
 * @return {string} The primary key string to use or an empty string if relation
 * type could not be determined.
 */

var getRelationPrimaryKeyString = Object(rememo__WEBPACK_IMPORTED_MODULE_5__["default"])(function (state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  var relationType = getRelationType(state, modelName, relationName);

  if (relationType === '') {
    return '';
  }

  var relationPrimaryKey = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["getPrimaryKey"])(relationName);
  return relationType === 'EE_Belongs_To_Relation' ? relationPrimaryKey : "".concat(Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["modelNameForQueryString"])(relationName), ".").concat(relationPrimaryKey);
}, function (state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  return [state.relationSchema.getIn([modelName, relationName], '')];
});
/**
 * Selector returning the relation response type for the given relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {string} The type for the relation returned for the given model and
 * relation.
 */

var getRelationResponseType = function getRelationResponseType(state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  var relationSchema = getRelationSchema(state, modelName, relationName);
  return relationSchema !== null ? relationSchema.type : '';
};
/**
 * Selector returning whether the relation between the given model name and
 * relation name has a join table.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {boolean} True means there is a join table, false means there isn't.
 */

var hasJoinTableRelation = function hasJoinTableRelation(state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  var relationType = getRelationType(state, modelName, relationName);
  return _constants__WEBPACK_IMPORTED_MODULE_1__["JOIN_RELATION_TYPES"].indexOf(relationType) > -1;
};
/**
 * Selector returning the relation type describing the relation between the
 * given model name and relation name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {string}  The relation type (eg. "EE_HABTM_Relation")
 */

var getRelationType = function getRelationType(state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  var relationSchema = getRelationSchema(state, modelName, relationName);
  return relationSchema !== null ? relationSchema.relation_type : '';
};
/**
 * Selector returning the relation schema describing the relation between the
 * given model name and relation name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {Object|null} An object or null if there is no relation schema.
 */

var getRelationSchema = function getRelationSchema(state, modelName, relationName) {
  modelName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(modelName);
  relationName = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["singularModelName"])(relationName);
  return state.relationSchema.getIn([modelName, relationName], null);
};

/***/ }),

/***/ "./assets/src/data/index.js":
/*!**********************************!*\
  !*** ./assets/src/data/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventespresso/schema */ "./assets/src/data/eventespresso/schema/index.js");
/* harmony import */ var _eventespresso_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventespresso/core */ "./assets/src/data/eventespresso/core/index.js");
/* harmony import */ var _eventespresso_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventespresso/lists */ "./assets/src/data/eventespresso/lists/index.js");
/* harmony import */ var _eventespresso_filter_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventespresso/filter-state */ "./assets/src/data/eventespresso/filter-state/index.js");
/**
 * Register stores
 */





/***/ }),

/***/ "./assets/src/data/model/assertions.js":
/*!*********************************************!*\
  !*** ./assets/src/data/model/assertions.js ***!
  \*********************************************/
/*! exports provided: assertEntityHasKey, assertImmutableObjectHasPath, assertIsArray, assertIsNotEmpty, assertIsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEntityHasKey", function() { return assertEntityHasKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertImmutableObjectHasPath", function() { return assertImmutableObjectHasPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsArray", function() { return assertIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsNotEmpty", function() { return assertIsNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsMap", function() { return assertIsMap; });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * Asserts whether the given key exists in the provided entity object.
 * This is used when calling code wants an exception to be thrown.
 *
 * @param { string } key
 * @param { Object } entity
 * @param { string } message
 * @throws { Exception }  Throws an exception if the provided entity does not
 *                          have the given key.
 */

var assertEntityHasKey = function assertEntityHasKey(key, entity) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (message === '') {
    message = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided entity (%s) does not have the given property (%s)', 'event_espresso'), entity, key);
  }

  if (!entity.hasOwnProperty(key)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["Exception"](message);
  }
};
/**
 * Asserts whether the given path in the provided immutable object exists.
 * This is used when calling code wants an exception to be thrown if the given
 * search path array does not exist in the immutable object.
 *
 * If the immutable object is setup like this:
 *
 * immutable = Immutable.Map().set( 'event', Immutable.Map().set( 10, Event ) );
 *
 * Then a valid searchable path could be `[ 'event', 10 ]`.  An invalid path
 * would be `[ 'datetime', 10 ]`
 *
 * @param {Array} path  Searchable path for the immutable ojbect to verify.
 * @param {Immutable.Map|Immutable.Set} immutable  An immutable object (Map, Set, List etc)
 * @param {string} message A custom message to use.
 * @throws Exception
 */

var assertImmutableObjectHasPath = function assertImmutableObjectHasPath(path, immutable) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (message === '') {
    message = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided immutable object (%s) does not have the given path (%s)', 'event_espresso'), immutable, path);
  }

  if (!immutable.hasIn(path)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["Exception"](message);
  }
};
/**
 * Asserts whether the given value is an array.
 *
 * @param {*} items
 * @param { string }  message
 * @throws { Exception } Throws an exception if the provided value is not an
 *                          array.
 */

var assertIsArray = function assertIsArray(items) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided value is not an array.', 'event_espresso');
  }

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["Exception"](message);
  }
};
/**
 * Validates whether the given value is empty or not.
 *
 * Call this validator when you want to make sure the value is NOT empty.
 *
 * @param {*} items
 * @param { string } message
 * @throws { Exception } Throws an exception if the provided value is empty.
 */

var assertIsNotEmpty = function assertIsNotEmpty(items) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided items must not be empty', 'event_espresso');
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(items)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["Exception"](message);
  }
};
/**
 * Asserts whether the given value is a Map object.
 *
 * @param {*} item
 * @param {string} message
 * @throws { Exception }
 */

var assertIsMap = function assertIsMap(item) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided item must be a Map object', 'event_espresso');
  }

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isMap"])(item)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["Exception"](message);
  }
};

/***/ }),

/***/ "./assets/src/data/model/attendee/constants.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/attendee/constants.js ***!
  \*****************************************************/
/*! exports provided: MODEL_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
var MODEL_NAME = 'attendee';

/***/ }),

/***/ "./assets/src/data/model/attendee/index.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/attendee/index.js ***!
  \*************************************************/
/*! exports provided: orderByMap, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString, MODEL_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/attendee/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByMap", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["orderByMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["getQueryString"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/attendee/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["MODEL_NAME"]; });




/***/ }),

/***/ "./assets/src/data/model/attendee/query.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/attendee/query.js ***!
  \*************************************************/
/*! exports provided: orderByMap, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByMap", function() { return orderByMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _registration_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/constants */ "./assets/src/data/model/registration/constants.js");


/**
 * External imports
 */




var orderByMap = {
  id: 'ATT_ID',
  lastNameOnly: 'ATT_lname',
  firstNameOnly: 'ATT_fname',
  firstThenLastName: ['ATT_fname', 'ATT_lname'],
  lastThenFirstName: ['ATT_lname', 'ATT_fname']
};
/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  forEventId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forDatetimeId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forTicketId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_registration_constants__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_STATUS_IDS"]),
  forRegistrationId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  showGravatar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(Object.keys(orderByMap)),
    order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_3__["ALLOWED_ORDER_VALUES"])
  })
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'lastThenFirstName',
    order: _base__WEBPACK_IMPORTED_MODULE_3__["QUERY_ORDER_ASC"]
  }
};
/**
 * Used to map an orderBy string to the actual value used
 * in a REST query from the context of a attendee.
 *
 * @param {string} 		orderBy
 * @return { string } 	Returns an actual orderBy string
 * 						for the REST query for the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an attendees endpoint request
 *
 * @param {number} forEventId    	ID of Event to retrieve attendees for
 * @param {number} forDatetimeId 	ID of Datetime to retrieve attendees for
 * @param {number} forTicketId 		ID of Ticket to retrieve attendees for
 * @param {number} forRegistrationId
 * @param {string} forStatusId 		ID of Status to retrieve attendees for
 * @param {string} showGravatar 	Boolean toggle for whether to display user Gravatar
 * @return {string}                	The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$forEventId = _ref.forEventId,
      forEventId = _ref$forEventId === void 0 ? 0 : _ref$forEventId,
      _ref$forDatetimeId = _ref.forDatetimeId,
      forDatetimeId = _ref$forDatetimeId === void 0 ? 0 : _ref$forDatetimeId,
      _ref$forTicketId = _ref.forTicketId,
      forTicketId = _ref$forTicketId === void 0 ? 0 : _ref$forTicketId,
      _ref$forRegistrationI = _ref.forRegistrationId,
      forRegistrationId = _ref$forRegistrationI === void 0 ? 0 : _ref$forRegistrationI,
      _ref$forStatusId = _ref.forStatusId,
      forStatusId = _ref$forStatusId === void 0 ? 'RAP' : _ref$forStatusId,
      _ref$showGravatar = _ref.showGravatar,
      showGravatar = _ref$showGravatar === void 0 ? false : _ref$showGravatar;
  var where = []; // ensure that entity IDs are integers

  forRegistrationId = parseInt(forRegistrationId, 10);
  forTicketId = parseInt(forTicketId, 10);
  forDatetimeId = parseInt(forDatetimeId, 10);
  forEventId = parseInt(forEventId, 10); // order of priority for provided arguments.

  if (forRegistrationId !== 0 && !isNaN(forRegistrationId)) {
    where.push("where[Registration.REG_ID]=".concat(forRegistrationId));
  } else if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push("where[Registration.Ticket.TKT_ID]=".concat(forTicketId));
  } else if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push("where[Registration.Ticket.Datetime.DTT_ID]=".concat(forDatetimeId));
  } else if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push("where[Registration.EVT_ID]=".concat(forEventId));
  }

  if (_registration_constants__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_STATUS_IDS"].includes(forStatusId)) {
    where.push("where[Registration.Status.STS_ID]=".concat(forStatusId));
  }

  if (showGravatar === true) {
    where.push('calculate=user_avatar');
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_3__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/base-date-formatter.js":
/*!******************************************************!*\
  !*** ./assets/src/data/model/base-date-formatter.js ***!
  \******************************************************/
/*! exports provided: formatDatesOnEntities, formatDatesOnEntity, formatEntitiesDatesToMysql, formatEntityDatesToMysql, formatEntitiesDatesToSite, formatEntityDatesToSite, convertEntitiesDatesToMoment, convertEntityDatesToMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDatesOnEntities", function() { return formatDatesOnEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDatesOnEntity", function() { return formatDatesOnEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEntitiesDatesToMysql", function() { return formatEntitiesDatesToMysql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEntityDatesToMysql", function() { return formatEntityDatesToMysql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEntitiesDatesToSite", function() { return formatEntitiesDatesToSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEntityDatesToSite", function() { return formatEntityDatesToSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEntitiesDatesToMoment", function() { return convertEntitiesDatesToMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEntityDatesToMoment", function() { return convertEntityDatesToMoment; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */


/**
 * Formats the date fields on provided entities.  Does not mutate original
 * entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { string } format  The format to transform the date field values to.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

var formatDatesOnEntities = function formatDatesOnEntities() {
  var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_ISO8601"];
  var local = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(entities) || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(entityDateFields)) {
    return entities;
  }

  var formattedEntities = [];
  entities.forEach(function (entity) {
    formattedEntities.push(formatDatesOnEntity(entity, entityDateFields, format, local));
  });
  return formattedEntities;
};
/**
 * Formats the date fields on the provided entity.  Does not mutate original
 * entity.
 *
 * @param { Object } entity  An entity
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { string } format  The format to transform the date field values to.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

var formatDatesOnEntity = function formatDatesOnEntity() {
  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_ISO8601"];
  var local = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var newEntity = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, entity);

  entityDateFields.forEach(function (dateField) {
    if (newEntity[dateField]) {
      newEntity[dateField] = _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["formatDateString"](newEntity[dateField], format, local);
    }
  });
  return newEntity;
};
/**
 * Formats the date fields to mysql format on provided entities.  Does not
 * mutate original entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

var formatEntitiesDatesToMysql = function formatEntitiesDatesToMysql() {
  var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntities(entities, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_MYSQL"], local);
};
/**
 * Formats the date fields to mysql format on provided entity.  Does not
 * mutate original entity.
 *
 * @param { Object } entity  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

var formatEntityDatesToMysql = function formatEntityDatesToMysql() {
  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntity(entity, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_MYSQL"], local);
};
/**
 * Formats the date fields to the site format on provided entities.  Does not
 * mutate original entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

var formatEntitiesDatesToSite = function formatEntitiesDatesToSite() {
  var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntities(entities, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_SITE"], local);
};
/**
 * Formats the date fields to the site format on provided entity.  Does not
 * mutate original entity.
 *
 * @param { Object } entity  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

var formatEntityDatesToSite = function formatEntityDatesToSite() {
  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntity(entity, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["DATE_TIME_FORMAT_SITE"], local);
};
/**
 * Converts date field values to moment objects for the provided entities.
 * Does not mutate original entities.
 *
 * @param { Array } entities An array of entity objects
 * @param { Array } entityDateFields An array of field names that are date
 *   fields.
 * @return { Array } Returns a new array of new entities with the date field
 *   values converted to moment objects.
 */

var convertEntitiesDatesToMoment = function convertEntitiesDatesToMoment() {
  var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(entities) || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(entityDateFields)) {
    return entities;
  }

  var formattedEntities = [];
  entities.forEach(function (entity) {
    formattedEntities.push(convertEntityDatesToMoment(entity, entityDateFields));
  });
  return formattedEntities;
};
/**
 * Converts date field values to moment objects for the provided entity.
 * Does not mutate original entity.
 *
 * @param { Object } entity An entity.
 * @param { Array } entityDateFields An array of field names that are date
 *   fields.
 * @return { Object } Returns a new entity with the date field values converted
 *   to moment objects.
 */

var convertEntityDatesToMoment = function convertEntityDatesToMoment() {
  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newEntity = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, entity);

  entityDateFields.forEach(function (dateField) {
    if (newEntity[dateField]) {
      newEntity[dateField] = _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["stringToMoment"](newEntity[dateField]);
    }
  });
  return newEntity;
};

/***/ }),

/***/ "./assets/src/data/model/base.js":
/*!***************************************!*\
  !*** ./assets/src/data/model/base.js ***!
  \***************************************/
/*! exports provided: QUERY_ORDER_ASC, QUERY_ORDER_DESC, ALLOWED_ORDER_VALUES, GREATER_THAN, LESS_THAN, GREATER_THAN_AND_EQUAL, LESS_THAN_AND_EQUAL, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ORDER_ASC", function() { return QUERY_ORDER_ASC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ORDER_DESC", function() { return QUERY_ORDER_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_ORDER_VALUES", function() { return ALLOWED_ORDER_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER_THAN", function() { return GREATER_THAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS_THAN", function() { return LESS_THAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER_THAN_AND_EQUAL", function() { return GREATER_THAN_AND_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS_THAN_AND_EQUAL", function() { return LESS_THAN_AND_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var QUERY_ORDER_ASC = 'ASC';
var QUERY_ORDER_DESC = 'DESC';
var ALLOWED_ORDER_VALUES = ['asc', 'desc', 'ASC', 'DESC'];
var GREATER_THAN = encodeURIComponent('>');
var LESS_THAN = encodeURIComponent('<');
var GREATER_THAN_AND_EQUAL = encodeURIComponent('>=');
var LESS_THAN_AND_EQUAL = encodeURIComponent('<=');
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @param { function } whereConditions  A function for prepping the where
 * 										conditions from the queryData.
 * @param { function } mapOrderBy		A function for mapping incoming order_by
 * 										strings to the value needed for the
 * 										query_string.
 * @return { string }  					Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var whereConditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return null;
  };
  var mapOrderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (orderBy) {
    return orderBy;
  };
  var where = whereConditions(queryData);
  var limit = queryData.limit,
      order = queryData.order,
      orderBy = queryData.orderBy,
      defaultWhereConditions = queryData.defaultWhereConditions;
  var queryParams = [];

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(limit)) {
    queryParams.push("limit=".concat(limit));
  }

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(defaultWhereConditions)) {
    queryParams.push("default_where_conditions=".concat(defaultWhereConditions));
  }

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(mapOrderBy(orderBy))) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(mapOrderBy(orderBy))) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mapOrderBy(orderBy)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          queryParams.push("order_by[".concat(field, "]=").concat(order));
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
    } else {
      queryParams.push("order=".concat(order));
      queryParams.push("order_by=".concat(mapOrderBy(orderBy)));
    }
  }

  var queryString = queryParams.join('&');

  if (where) {
    queryString += '&' + where;
  }

  return queryString;
};

/***/ }),

/***/ "./assets/src/data/model/checkin/constants.js":
/*!****************************************************!*\
  !*** ./assets/src/data/model/checkin/constants.js ***!
  \****************************************************/
/*! exports provided: MODEL_NAME, CHECKIN_STATUS_ID, CHECKIN_STATUS_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKIN_STATUS_ID", function() { return CHECKIN_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKIN_STATUS_IDS", function() { return CHECKIN_STATUS_IDS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var MODEL_NAME = 'checkin';
var CHECKIN_STATUS_ID = {
  STATUS_CHECKED_OUT: false,
  STATUS_CHECKED_IN: true,
  STATUS_CHECKED_NEVER: 2
};
var CHECKIN_STATUS_IDS = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["values"])(CHECKIN_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/checkin/index.js":
/*!************************************************!*\
  !*** ./assets/src/data/model/checkin/index.js ***!
  \************************************************/
/*! exports provided: MODEL_NAME, CHECKIN_STATUS_ID, CHECKIN_STATUS_IDS, queryDataTypes, optionsEntityMap, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/checkin/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECKIN_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["CHECKIN_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECKIN_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["CHECKIN_STATUS_IDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/checkin/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsEntityMap", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["optionsEntityMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });




/***/ }),

/***/ "./assets/src/data/model/checkin/query.js":
/*!************************************************!*\
  !*** ./assets/src/data/model/checkin/query.js ***!
  \************************************************/
/*! exports provided: queryDataTypes, optionsEntityMap, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsEntityMap", function() { return optionsEntityMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../status */ "./assets/src/data/model/status/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/checkin/constants.js");


/**
 * External imports
 */



/**
 * Internal imports
 */



/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  forDatetimeId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forEventId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forRegistrationId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forTicketId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_constants__WEBPACK_IMPORTED_MODULE_5__["CHECKIN_STATUS_IDS"]),
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['CHK_ID', 'REG_ID', 'CHK_timestamp', 'DTT_ID']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_4__["ALLOWED_ORDER_VALUES"])
  })
};
var optionsEntityMap = {
  default: function _default() {
    return [{
      label: Object(_status__WEBPACK_IMPORTED_MODULE_3__["prettyStatus"])(_constants__WEBPACK_IMPORTED_MODULE_5__["CHECKIN_STATUS_ID"].STATUS_CHECKED_OUT),
      value: _constants__WEBPACK_IMPORTED_MODULE_5__["CHECKIN_STATUS_ID"].STATUS_CHECKED_OUT
    }, {
      label: Object(_status__WEBPACK_IMPORTED_MODULE_3__["prettyStatus"])(_constants__WEBPACK_IMPORTED_MODULE_5__["CHECKIN_STATUS_ID"].STATUS_CHECKED_IN),
      value: _constants__WEBPACK_IMPORTED_MODULE_5__["CHECKIN_STATUS_ID"].STATUS_CHECKED_IN
    }];
  }
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'CHK_timestamp',
    order: _base__WEBPACK_IMPORTED_MODULE_4__["QUERY_ORDER_DESC"]
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a registration.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    timestamp: 'CHK_timestamp',
    id: 'CHK_ID'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an registrations endpoint request
 *
 * @param {number} forDatetimeId    	ID of Event to retrieve registrations for
 * @param {number} forEventId    ID of Attendee to retrieve registrations for
 * @param {number} forRegistrationId ID of Transaction to retrieve registrations for
 * @param {number} forTicketId 		ID of Ticket to retrieve registrations for
 * @param {string} forStatusId 		ID of Status to retrieve registrations for
 * @return {string}                	The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$forDatetimeId = _ref.forDatetimeId,
      forDatetimeId = _ref$forDatetimeId === void 0 ? 0 : _ref$forDatetimeId,
      _ref$forEventId = _ref.forEventId,
      forEventId = _ref$forEventId === void 0 ? 0 : _ref$forEventId,
      _ref$forRegistrationI = _ref.forRegistrationId,
      forRegistrationId = _ref$forRegistrationI === void 0 ? 0 : _ref$forRegistrationI,
      _ref$forTicketId = _ref.forTicketId,
      forTicketId = _ref$forTicketId === void 0 ? 0 : _ref$forTicketId,
      _ref$forStatusId = _ref.forStatusId,
      forStatusId = _ref$forStatusId === void 0 ? '' : _ref$forStatusId;
  var where = [];
  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[Registration.EVT_ID]=' + forEventId);
  }

  forDatetimeId = parseInt(forDatetimeId, 10);

  if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push('where[DTT_ID]=' + forDatetimeId);
  }

  forRegistrationId = parseInt(forRegistrationId, 10);

  if (forRegistrationId !== 0 && !isNaN(forRegistrationId)) {
    where.push('where[REG_ID]=' + forRegistrationId);
  }

  forTicketId = parseInt(forTicketId, 10);

  if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push('where[Registration.TKT_ID]=' + forTicketId);
  }

  if (forStatusId !== '' && forStatusId !== null) {
    where.push('where[CHK_in]=' + forStatusId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_4__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/datetime/constants.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/datetime/constants.js ***!
  \*****************************************************/
/*! exports provided: MODEL_NAME, DATETIME_STATUS_ID, DATETIME_STATUS_IDS, MINUTE_IN_SECONDS, HOUR_IN_SECONDS, DAY_IN_SECONDS, WEEK_IN_SECONDS, MONTH_IN_SECONDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATETIME_STATUS_ID", function() { return DATETIME_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATETIME_STATUS_IDS", function() { return DATETIME_STATUS_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE_IN_SECONDS", function() { return MINUTE_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR_IN_SECONDS", function() { return HOUR_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_IN_SECONDS", function() { return DAY_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_IN_SECONDS", function() { return WEEK_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_IN_SECONDS", function() { return MONTH_IN_SECONDS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var MODEL_NAME = 'datetime';
var DATETIME_STATUS_ID = {
  ACTIVE: 'DTA',
  CANCELLED: 'DTC',
  EXPIRED: 'DTE',
  INACTIVE: 'DTI',
  POSTPONED: 'DTP',
  SOLD_OUT: 'DTS',
  TRASHED: 'DTT',
  UPCOMING: 'DTU'
};
var DATETIME_STATUS_IDS = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["values"])(DATETIME_STATUS_ID);
var MINUTE_IN_SECONDS = 60;
var HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
var DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;
var WEEK_IN_SECONDS = HOUR_IN_SECONDS * 7;
var MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;

/***/ }),

/***/ "./assets/src/data/model/datetime/formatter.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/datetime/formatter.js ***!
  \*****************************************************/
/*! exports provided: DATE_FIELDS, prettyDateFromDateTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FIELDS", function() { return DATE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyDateFromDateTime", function() { return prettyDateFromDateTime; });
/* harmony import */ var _base_date_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-date-formatter */ "./assets/src/data/model/base-date-formatter.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal imports
 */

/**
 * External imports
 */




/**
 * Array of fields that have date information
 * @type { string[] }
 */

var DATE_FIELDS = ['DTT_EVT_start', 'DTT_EVT_end'];
/**
 * Will hold the dynamically generated list of formatters for dates.  Formatters
 * are functions defined in `../base-date-formatter` but wrapped by dynamically
 * generated functions (callable via same name) that automatically receive the
 * correct dateFieldsMap argument.
 *
 * Eg.  `../base-date-formatter has
 * formatDatesOnEntities( entities, entityDateFields, format, local );
 * When importing `formatDatesOnEntities` from this file, you can call it simply
 * by doing this:
 *
 * formatDatesOnEntities( dateTimeObjects, format, local );
 *
 * Notice that it's called without the entityDateFields argument because that's
 * provided by this generator.
 *
 * @type {{}}
 */

var formatters = {};
Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forOwn"])(_base_date_formatter__WEBPACK_IMPORTED_MODULE_0__, function (implementation, functionName) {
  formatters[functionName] = function () {
    for (var _len = arguments.length, incomingArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      incomingArgs[_key] = arguments[_key];
    }

    var firstArg = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["pullAt"])(incomingArgs, 0);
    return implementation.apply(void 0, [firstArg[0], DATE_FIELDS].concat(incomingArgs));
  };
});
/**
 * This will spit out a prettified label for the provided DateTime entity.
 *
 * If there is a DTT_name, the format will be:
 * `DTT_name (DTT_EVT_start - DTT_EVT_end)`
 *
 * If no DTT_name then:
 * `DTT_EVT_start - DTT_EVT_end`
 *
 * This will account for if both start and end are in the same day and simply
 * use time for the end part.
 *
 * @param { BaseEntity } DateTimeEntity
 * @return { string }  A formatted string representing the provided
 *    DateTimeEntity.
 */

var prettyDateFromDateTime = function prettyDateFromDateTime(DateTimeEntity) {
  var content = '';

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(DateTimeEntity, 'datetime')) {
    if (DateTimeEntity.DTT_EVT_start.hasSame(DateTimeEntity.DTT_EVT_end, 'day')) {
      content += Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["allDateTimesAsString"])(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR_SPACE_DASH_SPACE"], DateTimeEntity.DTT_EVT_start.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["DATE_TIME_FORMAT_SITE"]), DateTimeEntity.DTT_EVT_end.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["TIME_FORMAT_SITE"]));
    } else {
      content += Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["allDateTimesAsString"])(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR_SPACE_DASH_SPACE"], DateTimeEntity.DTT_EVT_start.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["DATE_TIME_FORMAT_SITE"]), DateTimeEntity.DTT_EVT_end.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["DATE_TIME_FORMAT_SITE"]));
    }

    content = DateTimeEntity.DTT_name ? "".concat(DateTimeEntity.DTT_name, " (").concat(content, ")") : content;
  }

  return content;
};
/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "./assets/src/data/model/datetime/index.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/datetime/index.js ***!
  \*************************************************/
/*! exports provided: MODEL_NAME, DATETIME_STATUS_ID, DATETIME_STATUS_IDS, MINUTE_IN_SECONDS, HOUR_IN_SECONDS, DAY_IN_SECONDS, WEEK_IN_SECONDS, MONTH_IN_SECONDS, nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString, DATE_FIELDS, prettyDateFromDateTime, isActive, isExpired, isRecentlyExpired, isSoldOut, isUpcoming, isTrashed, status, getBackgroundColorClass, getDateTimeStatusTextLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/datetime/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATETIME_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["DATETIME_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATETIME_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["DATETIME_STATUS_IDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MINUTE_IN_SECONDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MINUTE_IN_SECONDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOUR_IN_SECONDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["HOUR_IN_SECONDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY_IN_SECONDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["DAY_IN_SECONDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEEK_IN_SECONDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["WEEK_IN_SECONDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MONTH_IN_SECONDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MONTH_IN_SECONDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/datetime/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["nowDateAndTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });

/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter */ "./assets/src/data/model/datetime/formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATE_FIELDS", function() { return _formatter__WEBPACK_IMPORTED_MODULE_2__["DATE_FIELDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prettyDateFromDateTime", function() { return _formatter__WEBPACK_IMPORTED_MODULE_2__["prettyDateFromDateTime"]; });

/* harmony import */ var _status_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-helper */ "./assets/src/data/model/datetime/status-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isActive", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isExpired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRecentlyExpired", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isRecentlyExpired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSoldOut", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isSoldOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUpcoming", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isUpcoming"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTrashed", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["isTrashed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "status", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorClass", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["getBackgroundColorClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateTimeStatusTextLabel", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_3__["getDateTimeStatusTextLabel"]; });






/***/ }),

/***/ "./assets/src/data/model/datetime/query.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/datetime/query.js ***!
  \*************************************************/
/*! exports provided: nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return nowDateAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");


/**
 * External imports
 */



/**
 * Internal dependencies
 */


var nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['DTT_name', 'DTT_ID', 'start_date', 'end_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_4__["ALLOWED_ORDER_VALUES"]),
    showExpired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.month
  })
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_4__["QUERY_ORDER_DESC"],
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    start_date: 'DTT_EVT_start',
    end_date: 'DTT_EVT_end'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {number} forEventId  ID for Event to retrieve datetimes from
 * @param {boolean} showExpired  Whether or not to include expired events.
 * @param {string} month         Return events for the given month.  Can be any
 *                                 in any month format recognized by moment.
 * @return {string}             The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$forEventId = _ref.forEventId,
      forEventId = _ref$forEventId === void 0 ? 0 : _ref$forEventId,
      _ref$showExpired = _ref.showExpired,
      showExpired = _ref$showExpired === void 0 ? false : _ref$showExpired,
      _ref$month = _ref.month,
      month = _ref$month === void 0 ? 'none' : _ref$month;
  var where = [];

  if (!showExpired) {
    where.push('where[DTT_EVT_end**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN"] + '&where[DTT_EVT_end**expired][]=' + nowDateAndTime.local().format());
  }

  if (month && month !== 'none') {
    where.push('where[DTT_EVT_start][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN_AND_EQUAL"] + '&where[DTT_EVT_start][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).startOf('month').local().format());
    where.push('where[DTT_EVT_end][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["LESS_THAN_AND_EQUAL"] + '&where[DTT_EVT_end][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).endOf('month').local().format());
  }

  if (parseInt(forEventId, 10) !== 0) {
    where.push('where[Event.EVT_ID]=' + forEventId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_4__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/datetime/status-helper.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/model/datetime/status-helper.js ***!
  \*********************************************************/
/*! exports provided: isActive, isExpired, isRecentlyExpired, isSoldOut, isUpcoming, isTrashed, status, getBackgroundColorClass, getDateTimeStatusTextLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActive", function() { return isActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return isExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecentlyExpired", function() { return isRecentlyExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSoldOut", function() { return isSoldOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpcoming", function() { return isUpcoming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrashed", function() { return isTrashed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorClass", function() { return getBackgroundColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeStatusTextLabel", function() { return getDateTimeStatusTextLabel; });
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/datetime/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @throws {TypeError}
 */

var assertDateTimeEntity = function assertDateTimeEntity(DateTimeEntity) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(DateTimeEntity, _constants__WEBPACK_IMPORTED_MODULE_2__["MODEL_NAME"])) {
    throw new TypeError('The provided entity is not a datetime instance');
  }
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if event date is occurring NOW
 */


var isActive = function isActive(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  return DateTimeEntity.start.diffNow().asSeconds() < 0 && DateTimeEntity.end.diffNow().asSeconds() > 0;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if end date is in the past
 */

var isExpired = function isExpired(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  return DateTimeEntity.end.diffNow().asSeconds() < 0;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if end date is in the past
 */

var isRecentlyExpired = function isRecentlyExpired(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  return DateTimeEntity.end.diffNow().asSeconds() < 0 && DateTimeEntity.end.diffNow().asSeconds() > _constants__WEBPACK_IMPORTED_MODULE_2__["MONTH_IN_SECONDS"] * -1;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if tickets sold meets or exceeds registration limit
 */

var isSoldOut = function isSoldOut(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  var cap = DateTimeEntity.regLimit;
  return cap !== null && cap !== 'INF' && cap !== Infinity && cap !== -1 && DateTimeEntity.sold >= cap;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if start date is in the future
 */

var isUpcoming = function isUpcoming(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  return DateTimeEntity.start.diffNow().asSeconds() > 0;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {boolean} true if date is archived
 */

var isTrashed = function isTrashed(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);
  return DateTimeEntity.deleted;
}; // PLZ NOTE:
// leaving the following code in because it can be used if/when we decide
// to fully support these datetime statuses which are currently defined
// on the EE_Datetime model object class but not yet used
// /**
//  * @function
//  * @param {Object} DateTimeEntity model object
//  * @return {boolean} true if date is cancelled
//  */
// export const isCancelled = ( DateTimeEntity ) => {
// 	assertDateTimeEntity( DateTimeEntity );
// 	return DateTimeEntity.cancelled;
// };
//
// /**
//  * @function
//  * @param {Object} DateTimeEntity model object
//  * @return {boolean} true if date has been postponed
//  */
// export const isPostponed = ( DateTimeEntity ) => {
// 	assertDateTimeEntity( DateTimeEntity );
// 	return DateTimeEntity.postponed;
// };

/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {string} status ID
 */

var status = function status(DateTimeEntity) {
  assertDateTimeEntity(DateTimeEntity);

  if (isTrashed(DateTimeEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].TRASHED;
  }

  if (isExpired(DateTimeEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].EXPIRED;
  }

  if (isSoldOut(DateTimeEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].SOLD_OUT;
  }

  if (isUpcoming(DateTimeEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].UPCOMING;
  }

  if (isActive(DateTimeEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].ACTIVE;
  } // PLZ SEE NOTE ABOVE
  // if ( isCancelled( DateTimeEntity ) ) {
  // 	return DATETIME_STATUS_ID.CANCELLED;
  // }
  // if ( isPostponed( DateTimeEntity ) ) {
  // 	return DATETIME_STATUS_ID.POSTPONED;
  // }


  return _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].INACTIVE;
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {string}    CSS class for the background color
 */

var getBackgroundColorClass = function getBackgroundColorClass(DateTimeEntity) {
  return "ee-status-background-color-".concat(status(DateTimeEntity));
};
/**
 * @function
 * @param {Object} DateTimeEntity model object
 * @return {string} date status
 */

var getDateTimeStatusTextLabel = function getDateTimeStatusTextLabel(DateTimeEntity) {
  var dateStatus = '';

  switch (status(DateTimeEntity)) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].SOLD_OUT:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('sold out', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].EXPIRED:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('expired', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].UPCOMING:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('upcoming', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].ACTIVE:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('active', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].TRASHED:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('archived', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].CANCELLED:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('cancelled', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].POSTPONED:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('postponed', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["DATETIME_STATUS_ID"].INACTIVE:
    default:
      dateStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('inactive', 'event_espresso');
      break;
  }

  return dateStatus;
};

/***/ }),

/***/ "./assets/src/data/model/default-model-state.js":
/*!******************************************************!*\
  !*** ./assets/src/data/model/default-model-state.js ***!
  \******************************************************/
/*! exports provided: DEFAULT_LISTS_STATE, DEFAULT_CORE_STATE, DEFAULT_SCHEMA_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LISTS_STATE", function() { return DEFAULT_LISTS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CORE_STATE", function() { return DEFAULT_CORE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCHEMA_STATE", function() { return DEFAULT_SCHEMA_STATE; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _endpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints.js */ "./assets/src/data/model/endpoints.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Receives an object map of modelName to endpoint and maps that to a default
 * map of modelName to empty object.
 *
 * @param { Object } modelNameEndpoints
 * @return { Object } An object of { { modelName } : {} }
 */

var mapToObjectValues = function mapToObjectValues(modelNameEndpoints) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(modelNameEndpoints, function () {
    return {};
  });
};

var getDefaultModelEntitiesObject = memize__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return mapToObjectValues(_endpoints_js__WEBPACK_IMPORTED_MODULE_3__["endpoints"]);
});
/**
 * Provides the default state to be used by stores containing lists.
 *
 * @type { Object }
 */

var DEFAULT_LISTS_STATE = mapToObjectValues(_endpoints_js__WEBPACK_IMPORTED_MODULE_3__["endpoints"]);
/**
 * Provides the default state to be used by the core store.
 *
 * @type {{entities: {}, entityIds: {}, dirty: {}}}
 */

var DEFAULT_CORE_STATE = {
  entities: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, getDefaultModelEntitiesObject()),
  relations: {},
  dirty: {
    relations: {
      index: {},
      delete: {},
      add: {}
    },
    trash: {},
    delete: {}
  }
};
/**
 * Provides the default state to be used by the schema store.
 * @type {Object}
 */

var DEFAULT_SCHEMA_STATE = {
  schema: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, getDefaultModelEntitiesObject()),
  factory: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, getDefaultModelEntitiesObject()),
  relationEndpoints: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, getDefaultModelEntitiesObject()),
  relationSchema: {}
};

/***/ }),

/***/ "./assets/src/data/model/endpoints.js":
/*!********************************************!*\
  !*** ./assets/src/data/model/endpoints.js ***!
  \********************************************/
/*! exports provided: baseRestRoute, endpoints, getEndpoint, applyQueryString, stripBaseRouteFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseRestRoute", function() { return baseRestRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndpoint", function() { return getEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyQueryString", function() { return applyQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBaseRouteFromUrl", function() { return stripBaseRouteFromUrl; });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/**
 * External imports
 */

/**
 * Internal imports
 */


/**
 * All available endpoints exposed via the eejs.data global from the server.
 *
 * @type {{}}
 */

var _data$paths = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["data"].paths,
    _data$paths$collectio = _data$paths.collection_endpoints,
    endpoints = _data$paths$collectio === void 0 ? {} : _data$paths$collectio,
    baseRestRoute = _data$paths.base_rest_route;
/**
 * Retrieves the endpoint for the provided model.
 *
 * @param {string} modelName  What model to retrieve the endpoint for.
 * @return {string}  The endpoint for the provided model.
 * @throws {Exception}
 */


var getEndpoint = function getEndpoint(modelName) {
  Object(_assertions__WEBPACK_IMPORTED_MODULE_1__["assertEntityHasKey"])(modelName, endpoints);
  return endpoints[modelName];
};
/**
 * Applies the provided queryString to the endpoint for the provided model name.
 * @param {string} modelName  What model the final string is for.
 * @param {string} queryString  The query being appended to the endpoint.
 * @return {string} The final assembled query string.
 */

var applyQueryString = function applyQueryString(modelName) {
  var queryString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return queryString !== '' ? getEndpoint(modelName) + '?' + queryString : getEndpoint(modelName);
};
/**
 * Strips the base_rest_route (i.e. https://myurl.com/wp-json/) from the provided
 * url string.
 *
 * @param {string} url
 * @return {string} the url with the base rest route removed.
 */

var stripBaseRouteFromUrl = function stripBaseRouteFromUrl(url) {
  return url.replace(baseRestRoute, '');
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/assertions.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/assertions.js ***!
  \************************************************************/
/*! exports provided: maybeAssertValueObject, assertValidSchema, assertValidSchemaFieldProperties, assertValidValueForPreparedField, assertValidFieldAndValueAgainstSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeAssertValueObject", function() { return maybeAssertValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return assertValidSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchemaFieldProperties", function() { return assertValidSchemaFieldProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidValueForPreparedField", function() { return assertValidValueForPreparedField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidFieldAndValueAgainstSchema", function() { return assertValidFieldAndValueAgainstSchema; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ "./assets/src/data/model/entity-factory/validators.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/**
 * External imports
 */





/**
 * Internal imports
 */




/**
 * Asserts whether the provided field value is a known value object.
 *
 * Note: this only asserts known value objects, if the value is not detected as
 * a known value object it is passed back as is.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @throws InvalidDateTime
 * @throws TypeError
 */

var maybeAssertValueObject = function maybeAssertValueObject(fieldName, fieldValue, schema) {
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_5__["isDateTimeField"])(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["ServerDateTime"].assertIsDateTime(fieldValue);
  }

  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_5__["isMoneyField"])(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"].assertMoney(fieldValue);
  }
};
/**
 * Asserts whether the provided object is a valid model schema object.
 *
 * Currently, an object is considered a valid model schema if it has a
 * 'properties' property.
 *
 * @param {*} schema
 * @throws InvalidSchema
 */

var assertValidSchema = function assertValidSchema(schema) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isSchema"])(schema)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidSchema"]('This is an invalid schema for a model.');
  }
};
/**
 * Asserts that the given field exists in the provided schema and the shape for
 * the schema entry on that field is expected.
 *
 * @param {string} modelName  The model the schema belongs to, this is used for
 * error messages.
 * @param {string} fieldName  The field being checked against the schema
 * @param {Object} schema     The schema for the model used for validation
 * @throws InvalidSchema
 * @throws TypeError
 */

var assertValidSchemaFieldProperties = function assertValidSchemaFieldProperties(modelName, fieldName, schema) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName])) {
    throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%s" fieldName does not have a defined schema for the model "%s"', fieldName, modelName));
  }

  if (schema[fieldName].type === 'object') {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].properties)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidSchema"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The schema for the field %s on the model %s is of type "object" but does not have a properties property.', fieldName, modelName));
    }

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].properties.raw)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidSchema"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The schema for the field %s on the model %s is of type "object" but does not have a raw property in it\'s "properties" property.', fieldName, modelName));
    }

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].properties.raw.type)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidSchema"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The schema for the field %s on the model %s is of type "object" and has a properties.raw property, however there is no "type" defined for the raw property.', fieldName, modelName));
    }
  }
};
/**
 * Asserts that the value provided for the prepared field is valid according to
 * the schema.
 *
 * Prepared fields are:
 *
 * - fields having values that are set as a value object and expect a value
 *   object on updates/inserts.
 * - fields that are the equivalent `raw` value when the field in the schema is
 *   defined to have raw and rendered/pretty values.
 *
 * Note:  This validates against prepared fields which means that:
 *
 * - if the prepared field has a value object as its value, then that value
 *   object is validated before any other validation.
 * - if the prepared field represents an object in the schema, then its value is
 *   validated against the `raw` type in the schema.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} instance
 * @throws TypeError
 * @throws InvalidDateTime
 */

var assertValidValueForPreparedField = function assertValidValueForPreparedField(fieldName, fieldValue, instance) {
  var schema = instance.schema;
  var isValid = Object(_validators__WEBPACK_IMPORTED_MODULE_6__["isShallowValidValueForField"])(fieldName, fieldValue, schema);

  if (!isValid && schema[fieldName].type === 'object' && schema[fieldName].properties) {
    isValid = schema[fieldName].properties.raw.enum ? Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateEnumType"])(schema[fieldName].properties.raw.type, schema[fieldName].properties.raw.enum, fieldValue) : Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateType"])(schema[fieldName].properties.raw.type, Object(_extractors__WEBPACK_IMPORTED_MODULE_7__["maybeConvertFromValueObjectWithAssertions"])(fieldName, fieldValue, schema));

    if (!isValid) {
      throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%1$s" field  is not valid for the defined schema.  It\'s `raw` property Value (%2$s) is not the correct expected type (%3$s).', fieldName, fieldValue, schema[fieldName].properties.raw.type));
    }
  }

  if (!isValid) {
    throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%1$s" field\'s Value (%2$s) is not valid for the defined schema type (%3$s).', fieldName, fieldValue, schema[fieldName].type));
  }
};
/**
 * Asserts whether the value for the given field is valid according to the
 * schema.
 *
 * This is used on entity construction and does not validate prepared field
 * values (see assert assertValidValueForPreparedField).
 *
 * This method also asserts that the schema has valid schema field properties.
 *
 * @param {string} modelName
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} instance
 * @throws TypeError
 * @throws InvalidSchema
 */

var assertValidFieldAndValueAgainstSchema = function assertValidFieldAndValueAgainstSchema(modelName, fieldName, fieldValue, instance) {
  var schema = instance.schema;
  var validationType = Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateTypeForField"])(fieldName, instance);
  assertValidSchemaFieldProperties(modelName, fieldName, schema);
  var isValid = Object(_validators__WEBPACK_IMPORTED_MODULE_6__["isShallowValidValueForField"])(fieldName, fieldValue, schema, false); // account for fieldName fieldValues that have property schema. For Model
  // Entities, only the VALIDATE_TYPE property is cared about.

  if (schema[fieldName].type === 'object' && schema[fieldName].properties) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fieldValue[validationType])) {
      throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%1$s" value is not valid for the defined schema. It must be an object and it must have a `%2$s` key.', fieldName, validationType));
    }

    isValid = schema[fieldName].properties[validationType].enum ? Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateEnumType"])(schema[fieldName].properties[validationType].type, schema[fieldName].properties.raw.enum, fieldValue[validationType]) : Object(_validators__WEBPACK_IMPORTED_MODULE_6__["validateType"])(schema[fieldName].properties[validationType].type, fieldValue[validationType]);

    if (!isValid) {
      throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%1$s" value is not valid for the defined schema.  It\'s `%2$s` property value (%3$s) is not the correct expected type (%4$s).', fieldName, validationType, fieldValue, schema[fieldName].properties[validationType].type));
    }
  }

  if (!isValid) {
    throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%1$s" field\'s value (%2$s) is not valid for the defined schema type (%3$s).', fieldName, fieldValue, schema[fieldName].type));
  }
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/base-entity.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/base-entity.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/entity-factory/assertions.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create */ "./assets/src/data/model/entity-factory/create.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");







/**
 * External imports
 */


/**
 * Internal imports
 */




/**
 * BaseEntity is the basic class for all entities.  createEntityFactory returns
 * an instance of this and all the getters/setters for fields etc are
 * dynamically created via the constructor.
 */

var _PRIVATE_PROPERTIES$S = _constants__WEBPACK_IMPORTED_MODULE_10__["PRIVATE_PROPERTIES"].SAVE_STATE;
var _PRIVATE_PROPERTIES$V = _constants__WEBPACK_IMPORTED_MODULE_10__["PRIVATE_PROPERTIES"].VALIDATE_TYPES;

var BaseEntity =
/*#__PURE__*/
function () {
  /**
   * Constructor for Base Entity
   * @param {string} modelName
   * @param {Object} entityFieldsAndValues
   * @param {Object} schema
   * @param {Array}fieldPrefixes
   * @param {boolean} isNew
   */
  function BaseEntity(modelName, entityFieldsAndValues, schema) {
    var fieldPrefixes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var isNew = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseEntity);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(this, _PRIVATE_PROPERTIES$S, _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].CLEAN);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(this, _PRIVATE_PROPERTIES$V, {});

    Object(_assertions__WEBPACK_IMPORTED_MODULE_8__["assertValidSchema"])(schema);
    fieldPrefixes = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isArray"])(fieldPrefixes) ? fieldPrefixes : [];
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createGetter"])(this, 'fieldPrefixes', fieldPrefixes);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createGetter"])(this, 'schema', schema.properties);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["setSaveState"])(this, isNew ? _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].NEW : _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].CLEAN);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createGetter"])(this, 'modelName', modelName);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createGetter"])(this, 'originalFieldsAndValues', entityFieldsAndValues);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createGetter"])(this, 'fieldsToPersistOnInsert', new Set(Object.keys(entityFieldsAndValues)));
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createEntityGettersAndSetters"])(this);
    Object(_create__WEBPACK_IMPORTED_MODULE_9__["createPersistingGettersAndSetters"])(this);
    Object.seal(this);
  }
  /**
   * Returns the current save state on the entity.
   *
   * Save state describes whether the entity is:
   *
   * - SAVE_STATE.NEW: The entity has never been persisted to storage.
   * - SAVE_STATE.CLEAN: The entity exists in storage and has not been mutated.
   * - SAVE_STATE.DIRTY: The entity is mutated and changes have not been
   * persisted to storage.
   *
   * @return {Symbol}  Returns the current save state for the entity.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseEntity, [{
    key: "saveState",
    get: function get() {
      return this[_constants__WEBPACK_IMPORTED_MODULE_10__["PRIVATE_PROPERTIES"].SAVE_STATE];
    }
    /**
     * Whether the current save state is SAVE_STATE.NEW
     * @return {boolean}  True means SAVE_STATE.NEW is the save state.
     */

  }, {
    key: "isNew",
    get: function get() {
      return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].NEW;
    }
    /**
     * Whether the current save state is SAVE_STATE.DIRTY
     * @return {boolean}  True means SAVE_STATE.DIRTY is the save state.
     */

  }, {
    key: "isDirty",
    get: function get() {
      return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].DIRTY;
    }
    /**
     * Whether the current save state is SAVE_STATE.CLEAN
     * @return {boolean}  True means SAVE_STATE.CLEAN is the save state.
     */

  }, {
    key: "isClean",
    get: function get() {
      return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_10__["SAVE_STATE"].CLEAN;
    }
    /**
     * Whether the entity has any password protected fields.
     * @return {boolean} True means it does, false means it doesn't.
     */

  }, {
    key: "isPasswordProtected",
    get: function get() {
      return this.protectedFields.length > 0;
    }
    /**
     * Whether the given fieldName is a password protected field.
     * @return {function(string): boolean}  Returns a function that can be used
     * to check if the given field name is a protected field in this entity.
     */

  }, {
    key: "isFieldPasswordProtected",
    get: function get() {
      var _this = this;

      return function (fieldName) {
        return _this.protectedFields.indexOf(fieldName) > -1;
      };
    }
    /**
     * Used to clone the current entity object.  This results in an instance of
     * BaseEntity that is equivalent as this current instance (except it will
     * have a new generated id).
     *
     * @return {BaseEntity} A new instance of BaseEntity
     */

  }, {
    key: "clone",
    get: function get() {
      var _this2 = this;

      return function () {
        var keepId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var createFactory = memize__WEBPACK_IMPORTED_MODULE_7___default()(function () {
          return createEntityFactory(_this2.modelName, {
            $schema: {},
            properties: _this2.schema
          }, _this2.fieldPrefixes);
        });
        var factory = createFactory();
        var newEntity = factory.createNew(_this2.forClone);

        if (keepId) {
          newEntity.id = _this2.id;
          Object(_create__WEBPACK_IMPORTED_MODULE_9__["setSaveState"])(newEntity, _this2.saveState, true);
        }

        return newEntity;
      };
    }
  }]);

  return BaseEntity;
}();
/**
 * A function that gives a class the provided name
 * (and optionally extends the provided object).
 * @param {string} name
 * @param {Object} extendedClass
 * @return {Function} A function
 */


_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BaseEntity, "name", 'BaseEntity');

var nameClass = function nameClass(name, extendedClass) {
  return (
    /*#__PURE__*/
    function (_extendedClass) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(_class, _extendedClass);

      function _class() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, _class);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(_class).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(_class, null, [{
        key: "name",
        get: function get() {
          return name;
        }
      }]);

      return _class;
    }(extendedClass)
  );
};
/**
 * A factory for entity factories.
 *
 * Calling this returns an object of factory functions that instantiate an
 * instance of a named Entity.  The modelName is used as the name for the new
 * entity.
 *
 * Two methods are available on the object returned: `createNew` and
 * `fromExisting`.
 *
 * @param {string} modelName  The model for the entity
 * @param {Object} schema     The schema for the model. This is the schema
 * provided by the OPTIONS endpoint for the model.
 * @param {Array} fieldPrefixes An array of field prefixes for base fields on
 * on the model (eg. Event model has `[ EVT ]` prefixes on fields, Datetime model
 * has [ `DTT`, `DTT_EVT` ]
 * @return {Object} A factory for instantiating an entity instance.
 */


var createEntityFactory = function createEntityFactory(modelName, schema) {
  var fieldPrefixes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var Entity = nameClass(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["camelCase"])(modelName)), BaseEntity);
  return {
    /**
     * Exposes modelName so client code can derive what model this factory
     * is for from any given factory.
     * @type string
     */
    modelName: modelName,

    /**
     * This is the class definition for the Entity.  Typically this is
     * retrieved for the ability to do instanceof checks.
     */
    classDef: Entity,

    /**
     * This returns an instance of Entity for the given arguments with the
     * indication this is a new non-persisted entity.  This means:
     *
     * - All field values are populated and any not provided will be
     *   populated with default values defined by the schema.
     * - Generates temporary unique ids for the primary key fields on the
     *   entity (using cuid).
     * - Sets the `isNew` flag to true for the entity so client code is able
     *   to discover which entities have never been persisted.
     * - This factory method expects fields and values to be "prepared".
     *   What that means is that for any fields that the schema described as
     *   having a `raw` property (i.e. { EVT_desc: { raw: 'something' } })
     *   the value should be of the correct type for that raw property and.
     *   This also means is that for any fields the schema describes as a
     *   date-time (format) or money (format) field, the value is expected
     *   to be the corresponding value object.
     *
     * @param {Object} fieldsAndValues
     * @return {Entity} an instance of Entity
     */
    createNew: function createNew(fieldsAndValues) {
      return new Entity(modelName, fieldsAndValues, schema, fieldPrefixes, true);
    },

    /**
     * This returns an instance of Entity for the given arguments with the
     * indication this represents the entity as is in the db.  This means:
     *
     * - All field values are NOT populated if missing values.  This is
     *   especially important for contexts like unauthorized views where
     *   only partial entities are returned in REST responses.
     * - isNew flag is set to false (and never changes for this entity)
     * - The incoming values are expected to be in the exact shape as
     *   described by the schema for the entity model.
     *
     * @param {Object} fieldsAndValues
     * @return {Entity} an instance of Entity
     */
    fromExisting: function fromExisting(fieldsAndValues) {
      return new Entity(modelName, fieldsAndValues, schema, fieldPrefixes);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createEntityFactory);

/***/ }),

/***/ "./assets/src/data/model/entity-factory/booleans.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/booleans.js ***!
  \**********************************************************/
/*! exports provided: hasRawProperty, hasPrettyProperty, hasRenderedProperty, hasFormatProperty, hasEnumProperty, isValueObjectField, isDateTimeField, isUTCDateTimeField, isPrimaryKeyField, isReadOnly, isEntityField, isMoneyField, isEnumField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRawProperty", function() { return hasRawProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPrettyProperty", function() { return hasPrettyProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRenderedProperty", function() { return hasRenderedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFormatProperty", function() { return hasFormatProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEnumProperty", function() { return hasEnumProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObjectField", function() { return isValueObjectField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateTimeField", function() { return isDateTimeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUTCDateTimeField", function() { return isUTCDateTimeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimaryKeyField", function() { return isPrimaryKeyField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadOnly", function() { return isReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityField", function() { return isEntityField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoneyField", function() { return isMoneyField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumField", function() { return isEnumField; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * Indicates whether the provided value has a "raw" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `raw` property.
 */

var hasRawProperty = function hasRawProperty(value) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value.raw);
};
/**
 * Indicates whether the provided value has a "pretty" property.
 *
 * @param {*} value
 * @return {*} True if the value is a plain object and has a `pretty` property.
 */

var hasPrettyProperty = function hasPrettyProperty(value) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value.pretty);
};
/**
 * Indicates whether the provided value has a "rendered" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `rendered` property.
 */

var hasRenderedProperty = function hasRenderedProperty(value) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value.rendered);
};
/**
 * Indicates whether the provided value has a "format" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `format` property.
 */

var hasFormatProperty = function hasFormatProperty(value) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value.format);
};
/**
 * Indicates whether the provided value has a "enum" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has an enum
 * property.
 */

var hasEnumProperty = function hasEnumProperty(value) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value.enum);
};
/**
 * Indicates whether the provided value is a "value object" field.
 *
 * @param {string} field
 * @param {Object} schema
 * @return {boolean} True if the value is a value object field.
 */

var isValueObjectField = function isValueObjectField(field, schema) {
  return isDateTimeField(field, schema) || isMoneyField(field, schema);
};
/**
 * Indicates whether the provided field is a date-time field according to the
 * provided schema.
 *
 * @param {string} field
 * @param {Object} schema
 * @return {boolean} True means it is a date-time field.
 */

var isDateTimeField = function isDateTimeField(field, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[field]) && hasFormatProperty(schema[field]) && schema[field].format === 'date-time';
};
/**
 * Indicates whether the provided field is a UTC date-time field.
 *
 * If schema is provided, this also considers whether this is a date-time field.
 *
 * @param {string} dateTimeFieldName
 * @param {Object} schema [optional]
 * @return {boolean} True means this is a UTC field.  If schema is provided it
 * means this is also a date-time field.
 */

var isUTCDateTimeField = function isUTCDateTimeField(dateTimeFieldName) {
  var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return schema !== null ? isDateTimeField(dateTimeFieldName, schema) && dateTimeFieldName.indexOf('_gmt') > 0 : dateTimeFieldName.indexOf('_gmt') > 0;
};
/**
 * Returns whether the provided field represents a primary key field using the
 * provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True means it is a primary key field.
 */

var isPrimaryKeyField = function isPrimaryKeyField(fieldName, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName]) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].primary_key);
};
/**
 * Returns whether the provided field represents a readonly field using the
 * provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True means it is a readonly field.
 */

var isReadOnly = function isReadOnly(fieldName, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName]) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].readonly) && schema[fieldName].readonly;
};
/**
 * Indicates whether the provided field is a "entity" field using the provided
 * schema.
 *
 * An "entity" field is any field that satisfies the following conditions:
 *
 * - field exists in the schema
 * - it is not readonly or is a primary key field.
 * - it is not a utc field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean} True if this is an entity field
 */

var isEntityField = function isEntityField(fieldName, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName]) && (!isReadOnly(fieldName, schema) || isPrimaryKeyField(fieldName, schema)) && !isUTCDateTimeField(fieldName) && fieldName !== '_protected';
};
/**
 * Indicates whether the field represents a value of money from the provided
 * schema.
 *
 * A field is a money field if the following conditions are satisfied:
 *
 * - It exists in the schema
 * - It has a pretty property
 * - The pretty property value has a format property.
 * - The format property is equal to 'money'
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean} True if it is a money field.
 */

var isMoneyField = function isMoneyField(fieldName, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName]) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].properties) && hasPrettyProperty(schema[fieldName].properties) && hasFormatProperty(schema[fieldName].properties.pretty) && schema[fieldName].properties.pretty.format === 'money';
};
/**
 * Indicates whether the field is an enum type field as defined in the provided
 * schema.
 *
 * Note: this only evaluates the top-level for the field schema.  If the field
 * in the schema is of type 'object' and one of the object properties is of type
 * 'enum' this will not consider it an "enum" field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True if the field is an enum type field.
 */

var isEnumField = function isEnumField(fieldName, schema) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName]) && hasEnumProperty(schema[fieldName]) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(schema[fieldName].enum.length) && schema[fieldName].enum.length > 0;
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/constants.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/constants.js ***!
  \***********************************************************/
/*! exports provided: SAVE_STATE, VALIDATE_TYPE, PRIVATE_PROPERTIES, MODEL_PREFIXES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_STATE", function() { return SAVE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATE_TYPE", function() { return VALIDATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVATE_PROPERTIES", function() { return PRIVATE_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_PREFIXES", function() { return MODEL_PREFIXES; });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * Constants describing the current "save state" for an entity.
 *
 * @type {{CLEAN: Symbol, NEW: Symbol, DIRTY: Symbol}}
 */

var SAVE_STATE = {
  CLEAN: Symbol('Entity is persisted.'),
  NEW: Symbol('Entity is new.'),
  DIRTY: Symbol('Existing entity has changes and needs persisted.')
};
/**
 * Validation types are for schema's that have value variations.
 * @type {{RAW: string, RENDERED: string, PRETTY: string}}
 */

var VALIDATE_TYPE = {
  RAW: 'raw',
  RENDERED: 'rendered',
  PRETTY: 'pretty'
};
/**
 * Private properties used internally by the Base Entity Class
 * @type {{saveState: boolean}}
 */

var PRIVATE_PROPERTIES = {
  SAVE_STATE: Symbol('baseEntityPrivatePropertiesSaveState'),
  VALIDATE_TYPES: Symbol('baseEntityPrivatePropertiesValidateTypes')
};
/**
 * Hardcoded list of model prefixes for fields on models.

 * A model prefix is something that "namespaces" a field on a model.  For
 * example, if the field is "EVT_ID", then the prefix is "EVT"; if the field is
 * "DTT_EVT_start", then the prefixes are "DTT", and "DTT_EVT".
 *
 * @param  {string} modelName
 * @return {Object} A filtered object indexed by model name and the values are
 * an array of model prefixes for that model.
 */

var MODEL_PREFIXES = function MODEL_PREFIXES(modelName) {
  var prefixMap = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('FHEE__ENTITY_FACTORY__CONSTANTS__MODEL_PREFIXES', {
    answer: ['ANS'],
    attendee: ['ATT'],
    change_log: ['LOG'],
    checkin: ['CHK'],
    country: ['CNT'],
    currency: ['CUR'],
    currency_payment_method: ['CPM'],
    datetime: ['DTT', 'DTT_EVT'],
    datetime_ticket: ['DTK'],
    event: ['EVT'],
    event_message_template: ['EMT'],
    event_question_group: ['EQG'],
    event_venue: ['EVV'],
    extra_join: ['EXJ'],
    extra_meta: ['EXM'],
    line_item: ['LIN'],
    message: ['MSG'],
    message_template: ['MTP'],
    message_template_group: ['GRP', 'MTP'],
    payment: ['PAY'],
    payment_method: ['PMD'],
    post_meta: ['meta'],
    price: ['PRC'],
    price_type: ['PRT'],
    question: ['QST'],
    question_group: ['QSG'],
    question_group_question: ['QGQ'],
    question_option: ['QSO'],
    recurrence: ['RCR'],
    registration: ['REG'],
    registration_payment: ['RPY'],
    state: ['STA'],
    status: ['STS'],
    term: ['term'],
    term_relationship: [],
    term_taxonomy: ['term_taxonomy'],
    ticket: ['TKT'],
    ticket_price: ['TKP'],
    ticket_template: ['TTM'],
    transaction: ['TXN'],
    venue: ['VNU'],
    wp_user: ['user']
  });
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(prefixMap[modelName]) ? prefixMap[modelName] : [];
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/create.js":
/*!********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/create.js ***!
  \********************************************************/
/*! exports provided: createGetter, createCallbackGetter, createGetterAndSetter, createAliasGetterAndSetter, createAliasGetter, createFluentSetter, createEntityGettersAndSetters, createPersistingGettersAndSetters, createRawEntityGettersSetters, createAliasGetterForField, createAliasGetterAndSetterForField, createRenderedGetters, createPrimaryKeyFieldGetters, setCalculatedFieldAndValues, setResources, setRelationsResource, setSaveState, setFieldToPersist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetter", function() { return createGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackGetter", function() { return createCallbackGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetterAndSetter", function() { return createGetterAndSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAliasGetterAndSetter", function() { return createAliasGetterAndSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAliasGetter", function() { return createAliasGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFluentSetter", function() { return createFluentSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityGettersAndSetters", function() { return createEntityGettersAndSetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPersistingGettersAndSetters", function() { return createPersistingGettersAndSetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRawEntityGettersSetters", function() { return createRawEntityGettersSetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAliasGetterForField", function() { return createAliasGetterForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAliasGetterAndSetterForField", function() { return createAliasGetterAndSetterForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderedGetters", function() { return createRenderedGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrimaryKeyFieldGetters", function() { return createPrimaryKeyFieldGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalculatedFieldAndValues", function() { return setCalculatedFieldAndValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResources", function() { return setResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRelationsResource", function() { return setRelationsResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaveState", function() { return setSaveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFieldToPersist", function() { return setFieldToPersist; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/entity-factory/assertions.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");



/**
 * External imports
 */



/**
 * Internal imports
 */





/**(
 * A generic getter creator for a provided instance.
 *
 * @param {Object} instance
 * @param {string} fieldName  The name of the accessor.
 * @param {*} fieldValue
 * @param {Object} opts used to pass through additional options for the
 * Object.defineProperty call.
 */

var createGetter = function createGetter(instance, fieldName, fieldValue) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object.defineProperty(instance, fieldName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    get: function get() {
      return fieldValue;
    }
  }, opts));
};
/**
 * This creates a getter that calls the provided callback when invoked.
 *
 * The callback receives the `instance` argument passed through
 *
 * @param {Object} instance
 * @param {string} propertyName
 * @param {function(Object)} callBack
 * @param {Object} opts
 */

var createCallbackGetter = function createCallbackGetter(instance, propertyName, callBack) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object.defineProperty(instance, propertyName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    get: function get() {
      return callBack(instance);
    }
  }, opts));
};
/**
 * A generic getter and setter creator for a provided instance
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*}  initialFieldValue
 * @param {Object} opts Optional, pass through options used by
 * Object.defineProperty
 */

var createGetterAndSetter = function createGetterAndSetter(instance, fieldName, initialFieldValue) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var propertyValue = initialFieldValue;
  Object.defineProperty(instance, fieldName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    get: function get() {
      return propertyValue;
    },
    set: function set(receivedValue) {
      var isPrimaryField = Object(_booleans__WEBPACK_IMPORTED_MODULE_7__["isPrimaryKeyField"])(fieldName, instance.schema);

      if (!instance.isNew && isPrimaryField) {
        return;
      }

      Object(_assertions__WEBPACK_IMPORTED_MODULE_5__["assertValidValueForPreparedField"])(fieldName, receivedValue, instance);

      if (!isPrimaryField) {
        setSaveState(instance, _constants__WEBPACK_IMPORTED_MODULE_8__["SAVE_STATE"].DIRTY);
        setFieldToPersist(instance, fieldName);
      }

      propertyValue = receivedValue;
    }
  }, opts));
};
/**
 * A getter and setter creator for an field alias.
 *
 * @param {Object} instance
 * @param {string} originalFieldName
 * @param {string} aliasFieldName
 * @param {Object} opts
 */

var createAliasGetterAndSetter = function createAliasGetterAndSetter(instance, originalFieldName, aliasFieldName) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (originalFieldName !== aliasFieldName) {
    Object.defineProperty(instance, aliasFieldName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
      get: function get() {
        return instance[originalFieldName];
      },
      set: function set(receivedValue) {
        return instance[originalFieldName] = receivedValue;
      }
    }, opts));
  }
};
/**
 * A getter creator for a field alias.
 *
 * @param {Object} instance
 * @param {string} originalFieldName
 * @param {string} aliasFieldName
 * @param {Object} opts
 */

var createAliasGetter = function createAliasGetter(instance, originalFieldName, aliasFieldName) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (originalFieldName !== aliasFieldName) {
    Object.defineProperty(instance, aliasFieldName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
      get: function get() {
        return instance[originalFieldName];
      }
    }, opts));
  }
};
/**
 * Creates a fluent setter on the provided instance for the given field name.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {Object} opts  Options for Object.defineProperty
 */

var createFluentSetter = function createFluentSetter(instance, fieldName) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.defineProperty(instance, 'set' + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["upperFirst"])(fieldName), _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    get: function get() {
      return function (receivedValue) {
        instance[fieldName] = receivedValue;
        return instance;
      };
    }
  }, opts));
};
/**
 * Creates initial getters and setters for entities on the provided entity
 * instance using the given data.
 * @param {Object} instance
 * keys on instance.
 */

var createEntityGettersAndSetters = function createEntityGettersAndSetters(instance) {
  var primaryKeys = [];
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(instance.originalFieldsAndValues, function (fieldValue, fieldName) {
    var isPrimaryKey = Object(_booleans__WEBPACK_IMPORTED_MODULE_7__["isPrimaryKeyField"])(fieldName, instance.schema);
    setValidateTypeForField(instance, fieldName, fieldValue);

    if (Object(_booleans__WEBPACK_IMPORTED_MODULE_7__["isEntityField"])(fieldName, instance.schema)) {
      if (instance.isNew) {
        Object(_assertions__WEBPACK_IMPORTED_MODULE_5__["assertValidValueForPreparedField"])(fieldName, fieldValue, instance);
      } else {
        Object(_assertions__WEBPACK_IMPORTED_MODULE_5__["assertValidFieldAndValueAgainstSchema"])(instance.modelName, fieldName, fieldValue, instance);
      }

      setInitialEntityFieldsAndValues(instance, fieldName, fieldValue, isPrimaryKey);
    }

    if (fieldName === '_calculated_fields') {
      setCalculatedFieldAndValues(instance, fieldValue);
    }

    if (fieldName === '_protected') {
      populateProtectedFieldsProperty(instance, fieldValue);
    }

    if (fieldName === 'link') {
      createGetter(instance, 'link', fieldValue);
    }

    if (fieldName === '_links') {
      setResources(instance, fieldValue);
    }

    if (!instance.isNew && isPrimaryKey) {
      primaryKeys.push(fieldName);
    }
  });

  if (!instance.isNew && primaryKeys.length) {
    createPrimaryKeyFieldGetters(instance, primaryKeys);
  }

  populatePrimaryKeys(instance);
  populateMissingFields(instance);
};
/**
 * Populates the `protectedFields` property on the instance.
 *
 * @param {Object} instance
 * @param {Array} protectedFields
 */

var populateProtectedFieldsProperty = function populateProtectedFieldsProperty(instance, protectedFields) {
  // get any calculated protected fields.
  var calculatedFields = instance.originalFieldsAndValues._calculated_fields || {};

  if (calculatedFields._protected && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(calculatedFields._protected)) {
    protectedFields = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(protectedFields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(calculatedFields._protected));
  }

  createGetter(instance, 'protectedFields', protectedFields);
};
/**
 * This populates primary key fields.
 * Note that it also overrides any primary key values/properties that are
 * already set in the entity so is only processed when the instance is new.
 *
 * @param {Object} instance
 */


var populatePrimaryKeys = function populatePrimaryKeys(instance) {
  if (!instance.isNew) {
    return;
  }

  var primaryKeys = Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getPrimaryKeyFieldsFromSchema"])(instance);
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(primaryKeys, function (schemaProperties, schemaField) {
    // always delete and override what is existing.
    if (instance[schemaField]) {
      delete instance[schemaField];
    }

    createGetterAndSetter(instance, schemaField, cuid__WEBPACK_IMPORTED_MODULE_3___default()(), {
      configurable: true,
      enumerable: true
    });
    createAliasGetterAndSetterForField(instance, schemaField);
  });
  createPrimaryKeyFieldGetters(instance, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(primaryKeys));
};
/**
 * Sets the validate type for a field property.
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 */


var setValidateTypeForField = function setValidateTypeForField(instance, fieldName, fieldValue) {
  instance[_constants__WEBPACK_IMPORTED_MODULE_8__["PRIVATE_PROPERTIES"].VALIDATE_TYPES][fieldName] = Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["deriveValidateTypeForField"])(fieldName, fieldValue, instance.schema);
};
/**
 *  Populates missing fields and values using defaults provided by schema.  If
 *  schema doesn't provide a default then this will populate the field with a
 *  default value that matches the type.
 *
 * @param {Object} instance
 */


var populateMissingFields = function populateMissingFields(instance) {
  if (typeof instance.protectedFields === 'undefined') {
    populateProtectedFieldsProperty(instance, []);
  }

  if (!instance.isNew) {
    return;
  }

  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getEntityFieldsFromSchema"])(instance), function (schemaProperties, fieldName) {
    if (typeof instance[fieldName] === 'undefined' && !Object(_booleans__WEBPACK_IMPORTED_MODULE_7__["isPrimaryKeyField"])(fieldName, instance.schema)) {
      setInitialEntityFieldsAndValues(instance, fieldName, undefined);
    }
  });
};
/**
 * Returns a plain object of entity fields and values from this entity instance
 * for use in cloning the entity.
 *
 * @param {BaseEntity} instance
 *
 * @return {Object} Plain object of all field:value pairs.
 */


var forClone = function forClone(instance) {
  return Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getBaseFieldsAndValuesForCloning"])(instance);
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in an update request.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


var forUpdate = function forUpdate(instance) {
  return Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getBaseFieldsAndValuesForPersisting"])(instance);
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in an insert request.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


var forInsert = function forInsert(instance) {
  var entityValues = Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getBaseFieldsAndValuesForPersisting"])(instance, true);
  instance.primaryKeys.forEach(function (primaryKey) {
    entityValues[primaryKey] = instance[primaryKey];
  });
  return entityValues;
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in either an insert or update request.  The type
 * is automatically derived from the determining whether the entity is "new" or
 * not.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


var forPersist = function forPersist(instance) {
  if (instance.isNew) {
    return forInsert(instance);
  }

  return forUpdate(instance);
};
/**
 * Creates getters for retrieving the fields and values of the entity instance
 * for insert or update requests.
 *
 * @param {Object} instance
 */


var createPersistingGettersAndSetters = function createPersistingGettersAndSetters(instance) {
  createCallbackGetter(instance, 'forUpdate', forUpdate);
  createCallbackGetter(instance, 'forInsert', forInsert);
  createCallbackGetter(instance, 'forPersist', forPersist);
  createCallbackGetter(instance, 'forClone', forClone);
};
/**
 * Creates initial entity field accessors.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {boolean} isPrimaryKey
 */

var setInitialEntityFieldsAndValues = function setInitialEntityFieldsAndValues(instance, fieldName, fieldValue) {
  var isPrimaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(fieldValue)) {
    fieldValue = Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getDefaultValueForField"])(fieldName, instance.schema);
    setValidateTypeForField(instance, fieldName, fieldValue);
  }

  createRawEntityGettersSetters(instance, fieldName, Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["derivePreparedValueForField"])(fieldName, fieldValue, instance), isPrimaryKey);

  if (!isPrimaryKey) {
    createRenderedGetters(instance, fieldName, Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["deriveRenderedValue"])(fieldValue));
  }
};
/**
 * Creates raw entity getters and setters.  These are the properties of an
 * entity that have the values used for not only getting but also setting.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {boolean} isPrimaryKey set to true if field is the model's primary key
 */


var createRawEntityGettersSetters = function createRawEntityGettersSetters(instance, fieldName, fieldValue) {
  var isPrimaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var opts = {
    enumerable: true
  }; // primary key is immutable

  if (isPrimaryKey) {
    createGetter(instance, fieldName, fieldValue, opts);
    createAliasGetterForField(instance, fieldName);
  } else {
    createGetterAndSetter(instance, fieldName, fieldValue, opts);
    createFluentSetter(instance, fieldName);
    createAliasGetterAndSetterForField(instance, fieldName);
  }
};
/**
 * Creates "alias" getter for the given field name on the entity instance.
 * @param {Object} instance
 * @param {string} fieldName
 */

var createAliasGetterForField = function createAliasGetterForField(instance, fieldName) {
  createAliasesForMethod(instance, fieldName, createAliasGetter);
};
/**
 * Creates "alias" getters and setters for the given field on the entity
 * instance.
 *
 * Example: Datetime entities have a `DTT_EVT_start` field.  On the entity
 * instance, you will be able to access the value of that field via:
 * - datetime.DTT_EVT_start
 * - datetime.dttEvtStart
 * - datetime.evtStart
 * - datetime.start
 *
 * @param {Object} instance
 * @param {string} fieldName
 */

var createAliasGetterAndSetterForField = function createAliasGetterAndSetterForField(instance, fieldName) {
  createAliasesForMethod(instance, fieldName, createAliasGetterAndSetter);
};
/**
 * Creates Aliases using the provided method.
 * @param {Object} instance
 * @param {string} fieldName
 * @param {function} method
 */

var createAliasesForMethod = function createAliasesForMethod(instance, fieldName, method) {
  // camelCase getter (or setter) for full field name (eg. EVT_desc => evtDesc)
  method(instance, fieldName, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(fieldName)); // strip field prefixes and camelCase (if there are field prefixes for the
  // entity. (eg. EVT_desc => desc);

  if (instance.fieldPrefixes) {
    var newFieldName = ''; // Yes, its intended that if there are multiple prefixes, this could
    // end up creating multiple aliased getters (or setters)
    // (eg Datetime: DTT_EVT_start would end up with `evtStart` and `start`
    // as getter accessors).

    instance.fieldPrefixes.forEach(function (fieldPrefix) {
      newFieldName = fieldName.replace(fieldPrefix + '_', '');

      if (newFieldName !== fieldName) {
        method(instance, fieldName, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(newFieldName));
      }
    });
  }
};
/**
 * Returns a callback that is used in the `getRendered` field getter.
 * @param {Object} instance
 * @return {function(string): *}  A callback.
 */


var getRenderedCallback = function getRenderedCallback(instance) {
  return function (requestedFieldName) {
    return instance[requestedFieldName + 'Rendered'];
  };
};
/**
 * Returns a fieldName stripped of all possible prefixes.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @return {string} The prefix free fieldName.
 */


var removePrefixesFromField = function removePrefixesFromField(instance, fieldName) {
  var prefixesToRemove = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(instance.fieldPrefixes, function (prefix) {
    return prefix.length * -1;
  });
  var newFieldName = fieldName;
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(prefixesToRemove, function (prefix) {
    newFieldName = fieldName.replace(prefix, '');

    if (newFieldName !== fieldName) {
      return false;
    }
  });
  return newFieldName;
};
/**
 * This creates the getters for the rendered property of model fields.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*}  fieldValue
 */


var createRenderedGetters = function createRenderedGetters(instance, fieldName, fieldValue) {
  createGetter(instance, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(removePrefixesFromField(instance, fieldName)) + 'Rendered', fieldValue);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(instance.getRendered)) {
    createCallbackGetter(instance, 'getRendered', getRenderedCallback);
  }
};
/**
 * Callback for the `hasMultiplePrimaryKeys` getter.
 *
 * @param {Object} instance
 * @return {function(): boolean} The callback for hasMultiplePrimaryKeys getter
 */

var hasMultiplePrimaryKeysCallback = function hasMultiplePrimaryKeysCallback(instance) {
  return instance.primaryKeys.length > 1;
};
/**
 * Creates getters for primary key related data.
 *
 * @param {Object} instance
 * @param {Array} primaryKeys
 */


var createPrimaryKeyFieldGetters = function createPrimaryKeyFieldGetters(instance, primaryKeys) {
  var opts = {
    configurable: true
  };

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(primaryKeys)) {
    createGetter(instance, 'primaryKey', primaryKeys[0], opts);
    createGetterAndSetter(instance, 'primaryKeys', primaryKeys, opts);
    createCallbackGetter(instance, 'hasMultiplePrimaryKeys', hasMultiplePrimaryKeysCallback, opts);
  }
};
/**
 * @param {Object} instance
 * @return {function(string): boolean} Returns a callback for the
 * hasCalculatedField getter
 */

var hasCalculatedFieldCallback = function hasCalculatedFieldCallback(instance) {
  return function (fieldNameToCheck) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(instance[fieldNameToCheck]);
  };
};
/**
 * Creates the getters for all the calculated fields and value on the entity.
 * @param {Object} instance
 * @param {Object.<string,*>}fieldsAndValues
 */


var setCalculatedFieldAndValues = function setCalculatedFieldAndValues(instance, fieldsAndValues) {
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(fieldsAndValues, function (calculatedFieldValue, calculatedFieldName) {
    if (calculatedFieldName !== '_protected') {
      createGetter(instance, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(calculatedFieldName), calculatedFieldValue);
    }
  });
  createCallbackGetter(instance, 'hasCalculatedField', hasCalculatedFieldCallback);
};
/**
 * Create getters for the various resource links on the entity.
 *
 * @param {Object} instance
 * @param {Object.<string,*>}fieldsAndValues
 */

var setResources = function setResources(instance, fieldsAndValues) {
  var relations = [];
  var relationName;
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(fieldsAndValues, function (resourceValue, resourceName) {
    if (resourceName === 'self') {
      createGetter(instance, 'resourceLink', resourceValue[0].href);
    } else if (resourceName === 'collection') {
      createGetter(instance, 'collectionResourceLink', resourceValue[0].href);
    } else {
      relationName = Object(_extractors__WEBPACK_IMPORTED_MODULE_6__["getRelationNameFromLink"])(resourceName);
      relations.push(relationName);
      setRelationsResource(instance, relationName + 'Resource', resourceValue);
    }
  }); //set relations getter

  createGetter(instance, 'getRelations', relations);
};
/**
 * @param {Object} instance
 * @return {function(string): Object} Returns the callback for getting a
 * relation resource
 */

var getRelationResourceCallback = function getRelationResourceCallback(instance) {
  return function (relationName) {
    return instance[relationName.replace('Resource', '')];
  };
};
/**
 * Creates getters for the relations resource object.
 *
 * @param {Object} instance
 * @param {string} relationName
 * @param {Object.<string, string>} resourceInfo
 */


var setRelationsResource = function setRelationsResource(instance, relationName, resourceInfo) {
  createGetter(instance, relationName, {
    resourceLink: resourceInfo[0].href,
    single: resourceInfo[0].single
  });

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(instance.getRelationResource)) {
    createCallbackGetter(instance, 'getRelationResource', getRelationResourceCallback);
  }
};
/**
 * Sets the internal save state to the given value when current state is
 * SAVE_STATE.clean otherwise current save state is retained.
 *
 * @param {Object} instance
 * @param {string} saveState Expected to be one of SAVE_STATE constant values.
 * @param {boolean} override Set to true when overriding the default logic for
 * setting state.  When true, the saveState is set to whatever the incoming
 * saveState value is.
 */

var setSaveState = function setSaveState(instance, saveState) {
  var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var currentState = instance[_constants__WEBPACK_IMPORTED_MODULE_8__["PRIVATE_PROPERTIES"].SAVE_STATE];

  switch (saveState) {
    case _constants__WEBPACK_IMPORTED_MODULE_8__["SAVE_STATE"].DIRTY:
    case _constants__WEBPACK_IMPORTED_MODULE_8__["SAVE_STATE"].NEW:
    case _constants__WEBPACK_IMPORTED_MODULE_8__["SAVE_STATE"].CLEAN:
      if (override) {
        instance[_constants__WEBPACK_IMPORTED_MODULE_8__["PRIVATE_PROPERTIES"].SAVE_STATE] = saveState;
        break;
      }

      instance[_constants__WEBPACK_IMPORTED_MODULE_8__["PRIVATE_PROPERTIES"].SAVE_STATE] = currentState === _constants__WEBPACK_IMPORTED_MODULE_8__["SAVE_STATE"].CLEAN ? saveState : currentState;
      break;

    default:
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__["InvalidArgument"]('Save state for entity can only be set to either ' + 'SAVE_STATE.DIRTY, SAVE_STATE.NEW or SAVE_STATE.CLEAN');
  }
};
/**
 * Add the field name to the fieldToPersistOnInsert property on the instance
 * if it exists.
 *
 * @param {Object} instance
 * @param {string} fieldName
 */

var setFieldToPersist = function setFieldToPersist(instance, fieldName) {
  if (instance.fieldsToPersistOnInsert) {
    instance.fieldsToPersistOnInsert.add(fieldName);
  }
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/extractors.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/extractors.js ***!
  \************************************************************/
/*! exports provided: maybeConvertToValueObject, maybeConvertFromValueObjectWithAssertions, maybeConvertFromValueObject, derivePreparedValueForField, deriveRenderedValue, getRelationNameFromLink, getBaseFieldsAndValuesForCloning, getBaseFieldsAndValuesForPersisting, getPrimaryKeyValues, getEntityFieldsFromSchema, getPrimaryKeyFieldsFromSchema, deriveDefaultValueForType, deriveTypeForField, deriveValidateTypeForField, getDefaultValueForField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeConvertToValueObject", function() { return maybeConvertToValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeConvertFromValueObjectWithAssertions", function() { return maybeConvertFromValueObjectWithAssertions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeConvertFromValueObject", function() { return maybeConvertFromValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derivePreparedValueForField", function() { return derivePreparedValueForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveRenderedValue", function() { return deriveRenderedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationNameFromLink", function() { return getRelationNameFromLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseFieldsAndValuesForCloning", function() { return getBaseFieldsAndValuesForCloning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseFieldsAndValuesForPersisting", function() { return getBaseFieldsAndValuesForPersisting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKeyValues", function() { return getPrimaryKeyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityFieldsFromSchema", function() { return getEntityFieldsFromSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKeyFieldsFromSchema", function() { return getPrimaryKeyFieldsFromSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveDefaultValueForType", function() { return deriveDefaultValueForType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveTypeForField", function() { return deriveTypeForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveValidateTypeForField", function() { return deriveValidateTypeForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValueForField", function() { return getDefaultValueForField; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-names */ "./assets/src/data/model/model-names.js");
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators */ "./assets/src/data/model/entity-factory/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */






/**
 * This receives a field name, it's value and the schema and converts it to the
 * related value object IF the schema indicates it is of a type that there is a
 * known value object for.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @return {DateTime|Money|*}  If this is not a value object, the original field
 * value is returned.
 */

var maybeConvertToValueObject = function maybeConvertToValueObject(fieldName, fieldValue, schema) {
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isDateTimeField"])(fieldName, schema) && !_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"].validateIsDateTime(fieldValue)) {
    return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"].fromISO(fieldValue);
  }

  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isMoneyField"])(fieldName, schema) && !Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["instanceOf"])(fieldValue, 'Money')) {
    return new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["Money"](fieldValue, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["SiteCurrency"]);
  } // if more VOs get added, then instead of adding more if else blocks
  // to this function and the ones below, all VO logic should be extracted
  // into some kind of  ValueObjectExtractor object that would hold all of
  // the necessary callbacks for managing the detection of VO fields and
  // conversion of data to and from the various VOs
  // plz see:
  // https://github.com/eventespresso/event-espresso-core/pull/637/files#r228690789


  return fieldValue;
};
/**
 * This converts the incoming value for a field to its equivalent "raw" value
 * from a value object if it is a value object.  Otherwise it just returns the
 * original incoming value.  This also asserts that if the provided field is
 * expected to be a value object that the incoming value IS a valid value object
 * and it is the expected instance of a value object.
 *
 * @param {string} fieldName
 * @param {*|Money|DateTime} fieldValue
 * @param {Object} schema
 * @return {string|number|*}  If the value is not a value object, returns the
 * original value
 */

var maybeConvertFromValueObjectWithAssertions = function maybeConvertFromValueObjectWithAssertions(fieldName, fieldValue, schema) {
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isDateTimeField"])(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"].assertIsDateTime(fieldValue);
    fieldValue = fieldValue.toISO();
  } else if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isMoneyField"])(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["Money"].assertMoney(fieldValue);
    fieldValue = fieldValue.toNumber();
  }

  return fieldValue;
};
/**
 * This converts the incoming value for a field to its equivalent "raw" value
 * if the incoming value  is a value object.  Otherwise it just returns the
 * original incoming value.
 *
 * @param {*|DateTime|Money}fieldValue
 * @return {*} The raw value for the value object or the original value.
 */

var maybeConvertFromValueObject = function maybeConvertFromValueObject(fieldValue) {
  if (_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["ServerDateTime"].validateIsDateTime(fieldValue)) {
    fieldValue = fieldValue.toISO();
  } else if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["instanceOf"])(fieldValue, 'Money')) {
    fieldValue = fieldValue.toNumber();
  }

  return fieldValue;
};
/**
 * This derives the "prepared" value for the given field and value.
 *
 * "Prepared" means:
 *
 * - converting to a value object if this is a field that there are defined
 *   value objects for.
 * - retrieving the "raw" value from field values that have `raw` and `rendered`
 *   or `pretty` properties.
 *
 * @param {string} fieldName
 * @param {*}  fieldValue
 * @param {Object} instance
 * @return {DateTime|Money|*}  Returns the original incoming value if it does
 * not have a raw equivalent or is not a value object.
 */

var derivePreparedValueForField = function derivePreparedValueForField(fieldName, fieldValue, instance) {
  var validationType = Object(_validators__WEBPACK_IMPORTED_MODULE_5__["validateTypeForField"])(fieldName, instance);
  fieldValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(fieldValue) ? fieldValue[validationType] : fieldValue;
  return maybeConvertToValueObject(fieldName, fieldValue, instance.schema);
};
/**
 * This returns the "rendered" or "pretty" equivalent from a value if it exists
 * as a property on it.
 *
 * @param {*} value
 * @return {*}  The original value is returned if its not a plain object or if
 * it has no `rendered` or `pretty` property.  However, if it is a plain object
 * and has no pretty/rendered properties but DOES have a raw property, then that
 * is returned.
 */

var deriveRenderedValue = function deriveRenderedValue(value) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) {
    return value;
  }

  value = Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasPrettyProperty"])(value) ? value.pretty : value;
  value = Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasRenderedProperty"])(value) ? value.rendered : value;
  return Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasRawProperty"])(value) ? value.raw : value;
};
/**
 * Returns the name of a resource from the given `resourceLink`.
 *
 * eg. "https://api.eventespresso.com/registration" will return 'registration';

 * @param {string} resourceLink
 * @return {string} Returns the name of the resource from a provided resource
 * link.
 */

var getRelationNameFromLink = function getRelationNameFromLink(resourceLink) {
  return Object(_model_names__WEBPACK_IMPORTED_MODULE_3__["pluralModelName"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(resourceLink.split('/'))));
};
/**
 * Returns a plain object containing the entity field names and values from the
 * provided entity instance.  The values are not prepared and match exactly what
 * is currently set on this entity.
 *
 * @param {BaseEntity} entityInstance
 *
 * @return {Object} A plain object
 */

var getBaseFieldsAndValuesForCloning = function getBaseFieldsAndValuesForCloning(entityInstance) {
  return Object.keys(entityInstance).reduce(function (fieldsAndValues, fieldName) {
    if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isEntityField"])(fieldName, entityInstance.schema) && !Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isPrimaryKeyField"])(fieldName, entityInstance.schema)) {
      fieldsAndValues[fieldName] = entityInstance[fieldName];
      return fieldsAndValues;
    }

    return fieldsAndValues;
  }, {});
};
/**
 * Returns a plain object containing the entity field name and values from the
 * provided entity instance
 * @param {Object} entityInstance
 * @param {boolean} forInsert  Whether to return the fields and values for
 * insert or for update.
 * @return {Object} A plain object
 */

var getBaseFieldsAndValuesForPersisting = function getBaseFieldsAndValuesForPersisting(entityInstance) {
  var forInsert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var iterator = forInsert ? Array.from(entityInstance.fieldsToPersistOnInsert.values()) : Object.keys(entityInstance);
  return iterator.reduce(function (fieldsAndValues, fieldName) {
    if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isEntityField"])(fieldName, entityInstance.schema) && !Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isPrimaryKeyField"])(fieldName, entityInstance.schema)) {
      fieldsAndValues[fieldName] = maybeConvertFromValueObject(entityInstance[fieldName]);
      return fieldsAndValues;
    }

    return fieldsAndValues;
  }, {});
};
/**
 * Returns the primary key(s) and values for the given entityInstance
 *
 * @param {Object} entityInstance
 * @return {Object} an array of values for the primary keys.
 */

var getPrimaryKeyValues = function getPrimaryKeyValues(entityInstance) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pick"])(entityInstance, entityInstance.primaryKeys);
};
/**
 * This returns a plain object of entity fields from the schema for the entity
 * instance (schema for fields are extracted as well).
 *
 * @param {Object} entityInstance
 * @return {Object} A plain object with fields and schema properties that are
 * entity properties.
 */

var getEntityFieldsFromSchema = function getEntityFieldsFromSchema(entityInstance) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(entityInstance.schema, function (fieldValue, fieldName) {
    return Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isEntityField"])(fieldName, entityInstance.schema);
  });
};
/**
 * This returns a plain object of extracted primaryKey fields from the schema
 * for the entity instance.
 *
 * @param {Object} entityInstance
 * @return {Object} A plain object with fields and schema properties that
 * 					represent primary key fields.
 */

var getPrimaryKeyFieldsFromSchema = function getPrimaryKeyFieldsFromSchema(entityInstance) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(entityInstance.schema, function (fieldValue, fieldName) {
    return Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isPrimaryKeyField"])(fieldName, entityInstance.schema);
  });
};
/**
 * Derives the default value to use for a given type.
 *
 * @param {string} type
 * @return {*}  A value to use for the given type.
 */

var deriveDefaultValueForType = function deriveDefaultValueForType(type) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(type)) {
    return type.indexOf('null') > -1 ? null : deriveDefaultValueForType(type[0]);
  }

  switch (type) {
    case 'string':
      return '';

    case 'number':
    case 'integer':
      return 0;

    case 'null':
    case 'object':
      return null;

    case 'boolean':
    case 'bool':
      return false;

    case 'date-time':
      return new Date().toISOString();
  }

  return null;
};
/**
 * Derives what `type` a field is from the schema.
 * It accounts for cases where the "type" of a field might be `date-time` or
 * where the type is an object and thus the `type` for the purposes of model
 * entities is defined by the `raw` property for the field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {*}  What type the filed is.
 */

var deriveTypeForField = function deriveTypeForField(fieldName, schema) {
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["isDateTimeField"])(fieldName, schema)) {
    return 'date-time';
  }

  if (schema[fieldName] && schema[fieldName].type) {
    if (schema[fieldName].type === 'object') {
      if (schema[fieldName].properties && Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasRawProperty"])(schema[fieldName].properties)) {
        return schema[fieldName].properties.raw.type ? schema[fieldName].properties.raw.type : null;
      }

      return null;
    }

    return schema[fieldName].type;
  }

  return null;
};
/**
 * This derives the validate type from the incoming field and value according
 * to the schema and incoming value.
 *
 * This accounts for the fact that entities may be constructed from the
 * following contexts:
 *
 * 1. Authed REST response (which could have both raw, rendered or pretty
 *    values in the field value).
 * 2. Non-authed REST response (which will not have a raw value, but could have
 *    a pretty or rendered value).  This is potentially problematic if the
 *    rendered or pretty value is of a different data type than the raw value.
 * 3. New entities built client side, which will be assumed to be prepared
 *    against the "raw" validate type.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @return {Symbol}  The validate type for the field.
 */

var deriveValidateTypeForField = function deriveValidateTypeForField(fieldName, fieldValue, schema) {
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasRawProperty"])(fieldValue)) {
    return _constants__WEBPACK_IMPORTED_MODULE_6__["VALIDATE_TYPE"].RAW;
  }

  if (schema[fieldName] && schema[fieldName].type) {
    if (schema[fieldName].type === 'object' && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(fieldValue)) {
      return Object(_booleans__WEBPACK_IMPORTED_MODULE_4__["hasRenderedProperty"])(fieldValue) ? _constants__WEBPACK_IMPORTED_MODULE_6__["VALIDATE_TYPE"].RENDERED : _constants__WEBPACK_IMPORTED_MODULE_6__["VALIDATE_TYPE"].PRETTY;
    }
  }

  return _constants__WEBPACK_IMPORTED_MODULE_6__["VALIDATE_TYPE"].RAW;
};
/**
 * This gets the default value for a field from the provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {*} The default value for the field from the schema or if not
 * present in the schema, a derived default value from the schema type.
 */

var getDefaultValueForField = function getDefaultValueForField(fieldName, schema) {
  if (schema[fieldName]) {
    return schema[fieldName].default ? schema[fieldName].default : deriveDefaultValueForType(schema[fieldName].type);
  }

  return null;
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/model/entity-factory/index.js ***!
  \*******************************************************/
/*! exports provided: createEntityFactory, MODEL_PREFIXES, SAVE_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-entity */ "./assets/src/data/model/entity-factory/base-entity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityFactory", function() { return _base_entity__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_PREFIXES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["MODEL_PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_STATE", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["SAVE_STATE"]; });




/***/ }),

/***/ "./assets/src/data/model/entity-factory/validators.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/validators.js ***!
  \************************************************************/
/*! exports provided: validateType, validateEnumType, isShallowValidValueForField, validateTypeForField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateType", function() { return validateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEnumType", function() { return validateEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShallowValidValueForField", function() { return isShallowValidValueForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTypeForField", function() { return validateTypeForField; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/**
 * External imports
 */


/**
 * Internal Imports
 */




/**
 * Validates the incoming value for given type.  Types allowed are:
 *
 * - integer: checks if value is an integer.
 * - number: checks if value is classified as a Number primitive or object (this
 *   means `Infinity`, `-Infinity`, and `NaN` are considered valid for this type
 * - string
 * - object - this validates as a "plainObject", that is an object created by
 *   the Object constructor or one with a [[Prototype]] of null.
 * - boolean
 * - bool: (same as boolean check)
 * - null: value must explicitly be `null`
 *
 * Note: if the passed in type does not exist, then the value is considered
 * invalid.
 *
 * @param {string|Array} type  The type or types to check
 * @param {*} value  The value being validated
 * @return {boolean}  True means the value is valid for the given type.
 */

var validateType = function validateType(type, value) {
  var valid = false; // account for type definitions that are an array of allowed types.

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(type)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = type[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var singleType = _step.value;
        valid = validateType(singleType, value);

        if (valid) {
          break;
        }
      } // return right away because we've determined the validity of the type.

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

    return valid;
  }

  switch (type) {
    case 'integer':
      valid = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(value);
      break;

    case 'number':
      valid = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value);
      break;

    case 'string':
      valid = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isString"])(value);
      break;

    case 'object':
      valid = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value);
      break;

    case 'boolean':
    case 'bool':
      valid = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(value);
      break;

    case 'null':
      valid = value === null;
      break;
  }

  return valid;
};
/**
 * This validates enum type of values.
 *
 * This means that the value must be one of the provided array of enumValues as
 * well as being of the expected type.
 *
 * @param {string} type
 * @param {Array} enumValues
 * @param {*} value
 * @return {boolean}  True means this value is valid.
 */

var validateEnumType = function validateEnumType(type, enumValues, value) {
  return validateType(type, value) && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(enumValues) && enumValues.indexOf(value) > -1;
};
/**
 * This method does a shallow validation for the given value and field.
 *
 * "Shallow" here means that if the field schema is of type 'object', then the
 * validation only verifies that the value is an object.  The object contents
 * are not validated.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @param {boolean} expectValueObjects  If true, then this flags the validator
 * to assume the value might be a value object and attempt to retrieve the raw
 * value from that value object for validation against the expected type in the
 * schema for that field.
 * @return {boolean}  True means the value is valid.
 * @throws TypeError
 * @throws InvalidDateTime
 */

var isShallowValidValueForField = function isShallowValidValueForField(fieldName, fieldValue, schema) {
  var expectValueObjects = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  // if field is a primary Key field then we override the validation so it can
  // be either string or number
  if (Object(_booleans__WEBPACK_IMPORTED_MODULE_2__["isPrimaryKeyField"])(fieldName, schema)) {
    return validateType('string', fieldValue) || validateType('number', fieldValue);
  }

  var isEnum = Object(_booleans__WEBPACK_IMPORTED_MODULE_2__["isEnumField"])(fieldName, schema);
  var isValueObject = Object(_booleans__WEBPACK_IMPORTED_MODULE_2__["isValueObjectField"])(fieldName, schema);
  fieldValue = expectValueObjects && isValueObject ? Object(_extractors__WEBPACK_IMPORTED_MODULE_3__["maybeConvertFromValueObjectWithAssertions"])(fieldName, fieldValue, schema) : fieldValue;
  fieldValue = expectValueObjects && schema[fieldName].type === 'object' && isValueObject ? {
    raw: fieldValue
  } : fieldValue;
  var isValid = isEnum ? validateEnumType(schema[fieldName].type, schema[fieldName].enum, fieldValue) : validateType(schema[fieldName].type, fieldValue); // if isEnum and not valid, then lets bail with error

  if (isEnum && !isValid) {
    throw new TypeError(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The given "%s" fieldName is not valid for the defined schema.  It must be a "%s" and it must be one of "%s". The fieldValue given was "%s"', fieldName, schema[fieldName].enum.join(), fieldValue));
  }

  return isValid;
};
/**
 * Returns what is set as the validateType for the given field and instance.
 *
 * @param {string} fieldName
 * @param {Object} instance
 * @return {string} The validation type for the given field and instance.
 */

var validateTypeForField = function validateTypeForField(fieldName, instance) {
  return instance[_constants__WEBPACK_IMPORTED_MODULE_4__["PRIVATE_PROPERTIES"].VALIDATE_TYPES][fieldName] ? instance[_constants__WEBPACK_IMPORTED_MODULE_4__["PRIVATE_PROPERTIES"].VALIDATE_TYPES][fieldName] : _constants__WEBPACK_IMPORTED_MODULE_4__["VALIDATE_TYPE"].RAW;
};

/***/ }),

/***/ "./assets/src/data/model/event/constants.js":
/*!**************************************************!*\
  !*** ./assets/src/data/model/event/constants.js ***!
  \**************************************************/
/*! exports provided: MODEL_NAME, EVENT_STATUS_ID, EVENT_STATUS_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_ID", function() { return EVENT_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_IDS", function() { return EVENT_STATUS_IDS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var MODEL_NAME = 'event';
var EVENT_STATUS_ID = {
  SOLD_OUT: 'sold_out',
  POSTPONED: 'postponed',
  CANCELLED: 'cancelled'
};
var EVENT_STATUS_IDS = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["values"])(EVENT_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/event/index.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/event/index.js ***!
  \**********************************************/
/*! exports provided: MODEL_NAME, EVENT_STATUS_ID, EVENT_STATUS_IDS, nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/event/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_STATUS_IDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/event/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["nowDateAndTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });




/***/ }),

/***/ "./assets/src/data/model/event/query.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/event/query.js ***!
  \**********************************************/
/*! exports provided: nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return nowDateAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");


/**
 * External dependencies
 */



/**
 * Internal imports
 */


var nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['EVT_name', 'EVT_ID', 'start_date', 'end_date', 'ticket_start', 'ticket_end']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_4__["ALLOWED_ORDER_VALUES"]),
    showExpired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    categorySlug: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.month
  })
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_4__["QUERY_ORDER_DESC"],
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    start_date: 'Datetime.DTT_EVT_start',
    end_date: 'Datetime.DTT_EVT_end',
    ticket_start: 'Datetime.Ticket.TKT_start_date',
    ticket_end: 'Datetime.Ticket.TKT_end_date'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {boolean} showExpired  Whether or not to include expired events.
 * @param {string} categorySlug  Return events for the given categorySlug
 * @param {string} month         Return events for the given month.
 * 								 Can be any month format recognized by moment.
 * @return {string}              The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$showExpired = _ref.showExpired,
      showExpired = _ref$showExpired === void 0 ? false : _ref$showExpired,
      categorySlug = _ref.categorySlug,
      _ref$month = _ref.month,
      month = _ref$month === void 0 ? 'none' : _ref$month;
  var where = [];

  if (!showExpired) {
    where.push('where[Datetime.DTT_EVT_end**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN"] + '&where[Datetime.DTT_EVT_end**expired][]=' + nowDateAndTime.local().format());
  }

  if (categorySlug) {
    where.push('where[Term_Relationship.Term_Taxonomy.Term.slug]=' + categorySlug);
  }

  if (month && month !== 'none') {
    where.push('where[Datetime.DTT_EVT_start][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN_AND_EQUAL"] + '&where[Datetime.DTT_EVT_start][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).startOf('month').local().format());
    where.push('where[Datetime.DTT_EVT_end][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["LESS_THAN_AND_EQUAL"] + '&where[Datetime.DTT_EVT_end][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).endOf('month').local().format());
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_4__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/index.js":
/*!****************************************!*\
  !*** ./assets/src/data/model/index.js ***!
  \****************************************/
/*! exports provided: assertEntityHasKey, assertImmutableObjectHasPath, assertIsArray, assertIsNotEmpty, assertIsMap, QUERY_ORDER_ASC, QUERY_ORDER_DESC, ALLOWED_ORDER_VALUES, GREATER_THAN, LESS_THAN, GREATER_THAN_AND_EQUAL, LESS_THAN_AND_EQUAL, getQueryString, DEFAULT_LISTS_STATE, DEFAULT_CORE_STATE, DEFAULT_SCHEMA_STATE, baseRestRoute, endpoints, getEndpoint, applyQueryString, stripBaseRouteFromUrl, createEntityFactory, MODEL_PREFIXES, SAVE_STATE, primaryKeys, valuesForCombinedPrimaryKeys, valueForPrimaryKey, getPrimaryKey, getPrimaryKeyQueryString, getEntityPrimaryKeyValues, keyEntitiesByPrimaryKeyValue, createAndKeyEntitiesByPrimaryKeyValue, MODEL_NAMES, pluralModelName, singularModelName, modelNameForQueryString, attendeeModel, checkInModel, dateTimeModel, eventModel, priceTypeModel, registrationModel, statusModel, ticketModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEntityHasKey", function() { return _assertions__WEBPACK_IMPORTED_MODULE_0__["assertEntityHasKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertImmutableObjectHasPath", function() { return _assertions__WEBPACK_IMPORTED_MODULE_0__["assertImmutableObjectHasPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIsArray", function() { return _assertions__WEBPACK_IMPORTED_MODULE_0__["assertIsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIsNotEmpty", function() { return _assertions__WEBPACK_IMPORTED_MODULE_0__["assertIsNotEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIsMap", function() { return _assertions__WEBPACK_IMPORTED_MODULE_0__["assertIsMap"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./assets/src/data/model/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_ORDER_ASC", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["QUERY_ORDER_ASC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_ORDER_DESC", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["QUERY_ORDER_DESC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_ORDER_VALUES", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["ALLOWED_ORDER_VALUES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GREATER_THAN", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["GREATER_THAN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LESS_THAN", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["LESS_THAN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GREATER_THAN_AND_EQUAL", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["GREATER_THAN_AND_EQUAL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LESS_THAN_AND_EQUAL", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["LESS_THAN_AND_EQUAL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });

/* harmony import */ var _default_model_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-model-state */ "./assets/src/data/model/default-model-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LISTS_STATE", function() { return _default_model_state__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LISTS_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CORE_STATE", function() { return _default_model_state__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CORE_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCHEMA_STATE", function() { return _default_model_state__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCHEMA_STATE"]; });

/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./assets/src/data/model/endpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseRestRoute", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_3__["baseRestRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_3__["endpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndpoint", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_3__["getEndpoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyQueryString", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_3__["applyQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripBaseRouteFromUrl", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_3__["stripBaseRouteFromUrl"]; });

/* harmony import */ var _entity_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-factory */ "./assets/src/data/model/entity-factory/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityFactory", function() { return _entity_factory__WEBPACK_IMPORTED_MODULE_4__["createEntityFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_PREFIXES", function() { return _entity_factory__WEBPACK_IMPORTED_MODULE_4__["MODEL_PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_STATE", function() { return _entity_factory__WEBPACK_IMPORTED_MODULE_4__["SAVE_STATE"]; });

/* harmony import */ var _primary_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primary-keys */ "./assets/src/data/model/primary-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "primaryKeys", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["primaryKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valuesForCombinedPrimaryKeys", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["valuesForCombinedPrimaryKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueForPrimaryKey", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["valueForPrimaryKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKey", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["getPrimaryKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKeyQueryString", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["getPrimaryKeyQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityPrimaryKeyValues", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["getEntityPrimaryKeyValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyEntitiesByPrimaryKeyValue", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["keyEntitiesByPrimaryKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAndKeyEntitiesByPrimaryKeyValue", function() { return _primary_keys__WEBPACK_IMPORTED_MODULE_5__["createAndKeyEntitiesByPrimaryKeyValue"]; });

/* harmony import */ var _model_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model-names */ "./assets/src/data/model/model-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAMES", function() { return _model_names__WEBPACK_IMPORTED_MODULE_6__["MODEL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralModelName", function() { return _model_names__WEBPACK_IMPORTED_MODULE_6__["pluralModelName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singularModelName", function() { return _model_names__WEBPACK_IMPORTED_MODULE_6__["singularModelName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modelNameForQueryString", function() { return _model_names__WEBPACK_IMPORTED_MODULE_6__["modelNameForQueryString"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "./assets/src/data/model/models.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attendeeModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["attendeeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkInModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["checkInModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateTimeModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["dateTimeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["eventModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priceTypeModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["priceTypeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registrationModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["registrationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["statusModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketModel", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["ticketModel"]; });










/***/ }),

/***/ "./assets/src/data/model/model-names.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/model-names.js ***!
  \**********************************************/
/*! exports provided: MODEL_NAMES, pluralModelName, singularModelName, modelNameForQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAMES", function() { return MODEL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralModelName", function() { return pluralModelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singularModelName", function() { return singularModelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelNameForQueryString", function() { return modelNameForQueryString; });
/* harmony import */ var _primary_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-keys.js */ "./assets/src/data/model/primary-keys.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal imports
 */

/**
 * External imports
 */




/**
 * Returns an array of model names currently exposed for REST API request.
 */

var MODEL_NAMES = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keys"])(_primary_keys_js__WEBPACK_IMPORTED_MODULE_0__["primaryKeys"]);
/**
 * Used to normalize the plural form of a given model name.
 * @param {string} modelName
 * @return {string}  Ensures the given modelName is its plural form.
 */

var pluralModelName = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  return pluralize__WEBPACK_IMPORTED_MODULE_2___default()(modelName);
});
/**
 * Used to normalize the singular form of a given model name.
 * @param {string} modelName
 * @return {string} Ensures the given modelName is in its singular form.
 */

var singularModelName = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  return pluralize__WEBPACK_IMPORTED_MODULE_2___default.a.singular(modelName);
});
/**
 * Provides the capitalized snakecase format for the given model name typically
 * used in query strings.
 *
 * Example:
 *
 * modelNameForQueryString( 'message_template_group' );
 * // Message_Template_Group
 *
 * @param {string} modelName
 * @return {string} the formatted string.
 */

var modelNameForQueryString = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  modelName = singularModelName(modelName);
  modelName = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["startCase"])(modelName);
  return modelName.replace(/\s/g, '_');
});

/***/ }),

/***/ "./assets/src/data/model/models.js":
/*!*****************************************!*\
  !*** ./assets/src/data/model/models.js ***!
  \*****************************************/
/*! exports provided: attendeeModel, checkInModel, dateTimeModel, eventModel, priceTypeModel, registrationModel, statusModel, ticketModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendee */ "./assets/src/data/model/attendee/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "attendeeModel", function() { return _attendee__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _checkin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin */ "./assets/src/data/model/checkin/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "checkInModel", function() { return _checkin__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime */ "./assets/src/data/model/datetime/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dateTimeModel", function() { return _datetime__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./assets/src/data/model/event/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "eventModel", function() { return _event__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _price_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./price-type */ "./assets/src/data/model/price-type/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "priceTypeModel", function() { return _price_type__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration */ "./assets/src/data/model/registration/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "registrationModel", function() { return _registration__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status */ "./assets/src/data/model/status/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "statusModel", function() { return _status__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket */ "./assets/src/data/model/ticket/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ticketModel", function() { return _ticket__WEBPACK_IMPORTED_MODULE_7__; });










/***/ }),

/***/ "./assets/src/data/model/price-type/constants.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/model/price-type/constants.js ***!
  \*******************************************************/
/*! exports provided: MODEL_NAME, BASE_PRICE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PRICE_TYPES", function() { return BASE_PRICE_TYPES; });
var MODEL_NAME = 'price_type';
var BASE_PRICE_TYPES = {
  BASE_PRICE: 1,
  DISCOUNT: 2,
  SURCHARGE: 3,
  TAX: 4
};

/***/ }),

/***/ "./assets/src/data/model/price-type/index.js":
/*!***************************************************!*\
  !*** ./assets/src/data/model/price-type/index.js ***!
  \***************************************************/
/*! exports provided: MODEL_NAME, BASE_PRICE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/price-type/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PRICE_TYPES", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["BASE_PRICE_TYPES"]; });



/***/ }),

/***/ "./assets/src/data/model/primary-keys.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/primary-keys.js ***!
  \***********************************************/
/*! exports provided: primaryKeys, valuesForCombinedPrimaryKeys, valueForPrimaryKey, getPrimaryKey, getPrimaryKeyQueryString, getEntityPrimaryKeyValues, keyEntitiesByPrimaryKeyValue, createAndKeyEntitiesByPrimaryKeyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryKeys", function() { return primaryKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuesForCombinedPrimaryKeys", function() { return valuesForCombinedPrimaryKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueForPrimaryKey", function() { return valueForPrimaryKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKey", function() { return getPrimaryKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKeyQueryString", function() { return getPrimaryKeyQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityPrimaryKeyValues", function() { return getEntityPrimaryKeyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyEntitiesByPrimaryKeyValue", function() { return keyEntitiesByPrimaryKeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAndKeyEntitiesByPrimaryKeyValue", function() { return createAndKeyEntitiesByPrimaryKeyValue; });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/**
 * External imports
 */




/**
 * Internal imports
 */


/**
 * Exposes a map of modelname to primary key exposed by the eejs.data global
 * via the server.
 *
 * @type {{}}
 */

var _data$paths$primary_k = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["data"].paths.primary_keys,
    primaryKeys = _data$paths$primary_k === void 0 ? {} : _data$paths$primary_k;
/**
 * Returns the values for the given keys from the provided entity.
 * This function would be used for models that have combined primary keys
 * (delivered as an array).
 *
 * @type { memoized }
 * @return { string } The string representation for the values.
 * @throws { Exception }
 */


var valuesForCombinedPrimaryKeys = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (keys, entity) {
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertIsArray"])(keys);
  var primaryKey = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"])(keys, function (result, key) {
    Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertEntityHasKey"])(key, entity);
    return entity[result] + ':' + entity[key];
  });
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["trimEnd"])(primaryKey, ':');
});
/**
 * Returns the value for the given key from the provided entity.
 * This function would be used for models that have only one primary key.
 *
 * @type {memoized}
 * @return { function } The value for the key in the provided entity.
 * @throws { Exception }
 */

var valueForPrimaryKey = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (key, entity) {
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertEntityHasKey"])(key, entity);
  return entity[key];
});
/**
 * Returns the primary key (or combined primary keys) from the available data.
 *
 * @type {memoized}
 * @return { function(string) }
 * @throws { Exception }
 */

var getPrimaryKey = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertEntityHasKey"])(modelName, primaryKeys);
  return primaryKeys[modelName];
});
/**
 * Returns a query string for getting the entities belonging to a model for the
 * given primary key values
 *
 * @type {memoized}
 */

var getPrimaryKeyQueryString = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  var keyValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var primaryKey = getPrimaryKey(modelName);
  return "[".concat(primaryKey, "][IN]=") + keyValues.join();
});
/**
 * Returns the values for the primary keys from the provided entity.
 *
 * @type {memoized}
 * @return { function }  If the model has only one primary key then the value will
 * be a simple string.  If the model has combined primary keys, then the value
 * will be as string in the format `%s.%s` for the primary key values.
 * @throws { Exception }
 */

var getEntityPrimaryKeyValues = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName, entity) {
  var keys = getPrimaryKey(modelName);
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(keys) ? valuesForCombinedPrimaryKeys(keys, entity) : valueForPrimaryKey(keys, entity);
});
/**
 * This receives an array of entities and returns a collection of those same
 * entities indexed by the primary key value for each entity.
 *
 * @param {string} modelName
 * @param {Array} entities
 * @return {Map}  A collection indexed by the primary key values for each entity.
 * @throws {Exception}
 */

var keyEntitiesByPrimaryKeyValue = function keyEntitiesByPrimaryKeyValue(modelName) {
  var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertIsNotEmpty"])(entities, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided array of entities must not be empty', 'event_espresso'));
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertIsArray"])(entities);
  var mappedEntities = new Map();
  entities.forEach(function (entity) {
    mappedEntities.set(getEntityPrimaryKeyValues(modelName, entity), entity);
  });
  return mappedEntities;
};
/**
 * Creates an array of entity instances using the given factory and array
 * of entity values.
 *
 * @param {Object} factory
 * @param {Map} entities
 * @return {Map}  An array of entity instances indexed by
 * their primary key value
 */

var createAndKeyEntitiesByPrimaryKeyValue = function createAndKeyEntitiesByPrimaryKeyValue(factory, entities) {
  Object(_assertions__WEBPACK_IMPORTED_MODULE_4__["assertIsMap"])(entities, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The provided object of entities must be a Map object', 'event_espresso'));
  entities.forEach(function (entity, entityId) {
    entities.set(entityId, factory.fromExisting(entity));
  });
  return entities;
};

/***/ }),

/***/ "./assets/src/data/model/registration/constants.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/model/registration/constants.js ***!
  \*********************************************************/
/*! exports provided: MODEL_NAME, REGISTRATION_STATUS_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_STATUS_IDS", function() { return REGISTRATION_STATUS_IDS; });
/* harmony import */ var _status_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/constants */ "./assets/src/data/model/status/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal Imports
 */

/**
 * External imports
 */


var MODEL_NAME = 'registration';
var REGISTRATION_STATUS_IDS = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(_status_constants__WEBPACK_IMPORTED_MODULE_0__["REGISTRATION_STATUS_ID"]);

/***/ }),

/***/ "./assets/src/data/model/registration/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/registration/index.js ***!
  \*****************************************************/
/*! exports provided: MODEL_NAME, REGISTRATION_STATUS_IDS, queryDataTypes, optionsEntityMap, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/registration/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["REGISTRATION_STATUS_IDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/registration/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsEntityMap", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["optionsEntityMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });




/***/ }),

/***/ "./assets/src/data/model/registration/query.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/registration/query.js ***!
  \*****************************************************/
/*! exports provided: queryDataTypes, optionsEntityMap, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsEntityMap", function() { return optionsEntityMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _status_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../status/constants */ "./assets/src/data/model/status/constants.js");


/**
 * External imports
 */


/**
 * Internal imports
 */



/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  forEventId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forAttendeeId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forTransactionId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forTicketId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(_status_constants__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_STATUS_ID"])),
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['REG_ID', 'REG_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_3__["ALLOWED_ORDER_VALUES"])
  })
};
var optionsEntityMap = {
  default: {
    value: 'REG_ID',
    label: 'REG_code'
  }
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'reg_date',
    order: _base__WEBPACK_IMPORTED_MODULE_3__["QUERY_ORDER_DESC"]
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a registration.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    reg_id: 'REG_ID',
    reg_date: 'REG_date'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an registrations endpoint request
 *
 * @param {number} forEventId    	ID of Event to retrieve registrations for
 * @param {number} forAttendeeId    ID of Attendee to retrieve registrations for
 * @param {number} forTransactionId ID of Transaction to retrieve registrations for
 * @param {number} forTicketId 		ID of Ticket to retrieve registrations for
 * @param {string} forStatusId 		ID of Status to retrieve registrations for
 * @return {string}                	The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$forEventId = _ref.forEventId,
      forEventId = _ref$forEventId === void 0 ? 0 : _ref$forEventId,
      _ref$forAttendeeId = _ref.forAttendeeId,
      forAttendeeId = _ref$forAttendeeId === void 0 ? 0 : _ref$forAttendeeId,
      _ref$forTransactionId = _ref.forTransactionId,
      forTransactionId = _ref$forTransactionId === void 0 ? 0 : _ref$forTransactionId,
      _ref$forTicketId = _ref.forTicketId,
      forTicketId = _ref$forTicketId === void 0 ? 0 : _ref$forTicketId,
      _ref$forStatusId = _ref.forStatusId,
      forStatusId = _ref$forStatusId === void 0 ? '' : _ref$forStatusId;
  var where = [];
  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[EVT_ID]=' + forEventId);
  }

  forAttendeeId = parseInt(forAttendeeId, 10);

  if (forAttendeeId !== 0 && !isNaN(forAttendeeId)) {
    where.push('where[ATT_ID]=' + forAttendeeId);
  }

  forTransactionId = parseInt(forTransactionId, 10);

  if (forTransactionId !== 0 && !isNaN(forTransactionId)) {
    where.push('where[TXN_ID]=' + forTransactionId);
  }

  forTicketId = parseInt(forTicketId, 10);

  if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push('where[TKT_ID]=' + forTicketId);
  }

  if (forStatusId !== '' && forStatusId !== null) {
    where.push('where[STS_ID]=' + forStatusId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_3__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/status/constants.js":
/*!***************************************************!*\
  !*** ./assets/src/data/model/status/constants.js ***!
  \***************************************************/
/*! exports provided: MODEL_NAME, STATUS_TYPE_EMAIL, STATUS_TYPE_EVENT, STATUS_TYPE_MESSAGE, STATUS_TYPE_PAYMENT, STATUS_TYPE_REGISTRATION, STATUS_TYPE_TRANSACTION, EMAIL_STATUS_ID, EVENT_STATUS_ID, MESSAGE_STATUS_ID, PAYMENT_STATUS_ID, REGISTRATION_STATUS_ID, TRANSACTION_STATUS_ID, CPT_STATUS_ID, UNKNOWN_STATUS_ID, ALL_STATUS_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_EMAIL", function() { return STATUS_TYPE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_EVENT", function() { return STATUS_TYPE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_MESSAGE", function() { return STATUS_TYPE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_PAYMENT", function() { return STATUS_TYPE_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_REGISTRATION", function() { return STATUS_TYPE_REGISTRATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_TRANSACTION", function() { return STATUS_TYPE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_STATUS_ID", function() { return EMAIL_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_ID", function() { return EVENT_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_STATUS_ID", function() { return MESSAGE_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_ID", function() { return PAYMENT_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_STATUS_ID", function() { return REGISTRATION_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_ID", function() { return TRANSACTION_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPT_STATUS_ID", function() { return CPT_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_STATUS_ID", function() { return UNKNOWN_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_STATUS_IDS", function() { return ALL_STATUS_IDS; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External imports
 */

var MODEL_NAME = 'status'; // types

var STATUS_TYPE_EMAIL = 'email';
var STATUS_TYPE_EVENT = 'event';
var STATUS_TYPE_MESSAGE = 'message';
var STATUS_TYPE_PAYMENT = 'payment';
var STATUS_TYPE_REGISTRATION = 'registration';
var STATUS_TYPE_TRANSACTION = 'transaction'; // email

var EMAIL_STATUS_ID = {
  DRAFT: 'EDR',
  SENT: 'ESN',
  EXPIRED: 'EXP'
}; // event

var EVENT_STATUS_ID = {
  ACTIVE: 'ACT',
  REGISTRATION_CLOSED: 'CLS',
  DELETED: 'DEL',
  DENIED: 'DEN',
  DRAFT: 'DRF',
  NOT_ACTIVE: 'NAC',
  NOT_OPEN: 'NOP',
  ONGOING: 'ONG',
  REGISTRATION_OPEN: 'OPN',
  PENDING: 'PND',
  SECONDARY: 'SEC'
}; // message

var MESSAGE_STATUS_ID = {
  DEBUG: 'MDO',
  EXECUTING: 'MEX',
  FAIL: 'MFL',
  INCOMPLETE: 'MIC',
  IDLE: 'MID',
  RESEND: 'MRS',
  RETRY: 'MRT',
  SENT: 'MSN'
}; // payment

var PAYMENT_STATUS_ID = {
  APPROVED: 'PAP',
  CANCELLED: 'PCN',
  DECLINED: 'PDC',
  FAILED: 'PFL',
  PENDING: 'PPN'
}; // registration

var REGISTRATION_STATUS_ID = {
  APPROVED: 'RAP',
  CANCELLED: 'RCN',
  DECLINED: 'RDC',
  INCOMPLETE: 'RIC',
  NOT_APPROVED: 'RNA',
  PENDING_PAYMENT: 'RPP',
  WAIT_LIST: 'RWL'
}; // transaction

var TRANSACTION_STATUS_ID = {
  ABANDONED: 'TAB',
  COMPLETE: 'TCM',
  FAILED: 'TFL',
  INCOMPLETE: 'TIN',
  OVERPAID: 'TOP'
}; // the following are not in the status database but are kept here for
// convenience
// custom post types

var CPT_STATUS_ID = {
  PUBLISH: 'publish',
  FUTURE: 'future',
  DRAFT: 'draft',
  PENDING: 'pending',
  PRIVATE: 'private',
  TRASHED: 'trash'
};
var UNKNOWN_STATUS_ID = 'unknown';
var ALL_STATUS_IDS = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(EMAIL_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(EVENT_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(MESSAGE_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(PAYMENT_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(REGISTRATION_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(TRANSACTION_STATUS_ID)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(CPT_STATUS_ID)), [UNKNOWN_STATUS_ID]);

/***/ }),

/***/ "./assets/src/data/model/status/helpers.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/status/helpers.js ***!
  \*************************************************/
/*! exports provided: prettyStatus, prettyStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyStatus", function() { return prettyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyStatuses", function() { return prettyStatuses; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/status/constants.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event */ "./assets/src/data/model/event/index.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ticket */ "./assets/src/data/model/ticket/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datetime */ "./assets/src/data/model/datetime/index.js");
/* harmony import */ var _checkin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkin */ "./assets/src/data/model/checkin/index.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);



var _STATUS_TRANSLATION_M, _STATUS_TRANSLATION_M2, _STATUS_TRANSLATION_M3, _STATUS_TRANSLATION_M4, _STATUS_TRANSLATION_M5, _STATUS_TRANSLATION_M6, _STATUS_TRANSLATION_M7, _STATUS_TRANSLATION_M8, _STATUS_TRANSLATION_M9;

/**
 * Internal imports
 */





/**
 * External imports
 */




/**
 * Translation map for Registration statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_REGISTRATION = (_STATUS_TRANSLATION_M = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].PENDING_PAYMENT, new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('pending payment', 'event_espresso'), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('pending payments', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].APPROVED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('approved', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].NOT_APPROVED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('not approved', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].CANCELLED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('cancelled', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].INCOMPLETE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('incomplete', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].DECLINED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('declined', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M, _constants__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_STATUS_ID"].WAIT_LIST, new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('wait list', 'event_espresso'), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('wait lists', 'event_espresso'))), _STATUS_TRANSLATION_M);
/**
 * Translation map for Transaction statuses
 * @type {{}}
 *
 */

var STATUS_TRANSLATION_MAP_TRANSACTION = (_STATUS_TRANSLATION_M2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M2, _constants__WEBPACK_IMPORTED_MODULE_2__["TRANSACTION_STATUS_ID"].OVERPAID, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('overpaid', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M2, _constants__WEBPACK_IMPORTED_MODULE_2__["TRANSACTION_STATUS_ID"].COMPLETE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('complete', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M2, _constants__WEBPACK_IMPORTED_MODULE_2__["TRANSACTION_STATUS_ID"].INCOMPLETE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('incomplete', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M2, _constants__WEBPACK_IMPORTED_MODULE_2__["TRANSACTION_STATUS_ID"].FAILED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('failed', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M2, _constants__WEBPACK_IMPORTED_MODULE_2__["TRANSACTION_STATUS_ID"].ABANDONED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('abandoned', 'event_espresso'))), _STATUS_TRANSLATION_M2);
/**
 * Translation map for payment statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_PAYMENT = (_STATUS_TRANSLATION_M3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M3, _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS_ID"].APPROVED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('accepted', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M3, _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS_ID"].PENDING, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('pending', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M3, _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS_ID"].CANCELLED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('cancelled', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M3, _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS_ID"].DECLINED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('declined', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M3, _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS_ID"].FAILED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('failed', 'event_espresso'))), _STATUS_TRANSLATION_M3);
/**
 * Translation map for Message statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_MESSAGE = (_STATUS_TRANSLATION_M4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].SENT, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('sent', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].IDLE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('queued for sending', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].FAIL, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('failed', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].DEBUG, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('debug only', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].EXECUTING, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('messenger is executing', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].RESEND, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('queued for resending', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].INCOMPLETE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('queued for generating', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M4, _constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_STATUS_ID"].RETRY, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('failed sending, can be retried', 'event_espresso'))), _STATUS_TRANSLATION_M4);
/**
 * Translation map for CPT statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_CPT = (_STATUS_TRANSLATION_M5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].PUBLISH, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('published', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].FUTURE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('scheduled', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].DRAFT, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('draft', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].PENDING, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('pending', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].PRIVATE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('private', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M5, _constants__WEBPACK_IMPORTED_MODULE_2__["CPT_STATUS_ID"].TRASHED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('trashed', 'event_espresso'))), _STATUS_TRANSLATION_M5); // the following status maps are for model statuses that are not saved in the
// status table but for convenience have their labels retrievable via here.

/**
 * Translation map for Event Statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_EVENT = (_STATUS_TRANSLATION_M6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M6, _event__WEBPACK_IMPORTED_MODULE_3__["EVENT_STATUS_ID"].SOLD_OUT, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('sold out', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M6, _event__WEBPACK_IMPORTED_MODULE_3__["EVENT_STATUS_ID"].POSTPONED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('postponed', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M6, _event__WEBPACK_IMPORTED_MODULE_3__["EVENT_STATUS_ID"].CANCELLED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('cancelled', 'event_espresso'))), _STATUS_TRANSLATION_M6);
/**
 * Translation map for Ticket statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_TICKET = (_STATUS_TRANSLATION_M7 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M7, _ticket__WEBPACK_IMPORTED_MODULE_4__["TICKET_STATUS_ID"].ARCHIVED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('archived', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M7, _ticket__WEBPACK_IMPORTED_MODULE_4__["TICKET_STATUS_ID"].EXPIRED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('expired', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M7, _ticket__WEBPACK_IMPORTED_MODULE_4__["TICKET_STATUS_ID"].SOLD_OUT, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('sold out', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M7, _ticket__WEBPACK_IMPORTED_MODULE_4__["TICKET_STATUS_ID"].PENDING, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('upcoming', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M7, _ticket__WEBPACK_IMPORTED_MODULE_4__["TICKET_STATUS_ID"].ONSALE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('on sale', 'event_espresso'))), _STATUS_TRANSLATION_M7);
/**
 * Translation map for datetime statuses
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_DATETIME = (_STATUS_TRANSLATION_M8 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].CANCELLED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('cancelled', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].SOLD_OUT, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('sold out', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].EXPIRED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('expired', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].INACTIVE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('inactive', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].UPCOMING, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('upcoming', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].ACTIVE, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('active', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M8, _datetime__WEBPACK_IMPORTED_MODULE_5__["DATETIME_STATUS_ID"].POSTPONED, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('postponed', 'event_espresso'))), _STATUS_TRANSLATION_M8);
/**
 * Translation map for checkin statuses
 *
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_CHECKIN = (_STATUS_TRANSLATION_M9 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M9, _checkin__WEBPACK_IMPORTED_MODULE_6__["CHECKIN_STATUS_ID"].STATUS_CHECKED_IN, new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('check-in', 'event_espresso'), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('check-ins', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M9, _checkin__WEBPACK_IMPORTED_MODULE_6__["CHECKIN_STATUS_ID"].STATUS_CHECKED_OUT, new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"](Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('check-out', 'event_espresso'), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('check-outs', 'event_espresso'))), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_STATUS_TRANSLATION_M9, _checkin__WEBPACK_IMPORTED_MODULE_6__["CHECKIN_STATUS_ID"].STATUS_CHECKED_NEVER, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('never checked in', 'event_espresso'))), _STATUS_TRANSLATION_M9);
/**
 * Combined translation map for all statuses.
 * @type {{}}
 */

var STATUS_TRANSLATION_MAP_ALL = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, STATUS_TRANSLATION_MAP_REGISTRATION, STATUS_TRANSLATION_MAP_TRANSACTION, STATUS_TRANSLATION_MAP_PAYMENT, STATUS_TRANSLATION_MAP_MESSAGE, STATUS_TRANSLATION_MAP_CPT, STATUS_TRANSLATION_MAP_EVENT, STATUS_TRANSLATION_MAP_TICKET, STATUS_TRANSLATION_MAP_DATETIME, STATUS_TRANSLATION_MAP_CHECKIN, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, _constants__WEBPACK_IMPORTED_MODULE_2__["UNKNOWN_STATUS_ID"], _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].fromSameSingleAndPlural(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('unknown', 'event_espresso'))));
/**
 * Returns the pretty status label string for the given arguments.
 *
 * @param {string} statusCode
 * @param {boolean} singular  Whether to return the singular or plural label
 * value
 * @param {(sentence|lower|upper)} schema
 * @return {string} Returns the mapped pretty label for the given status code or
 * a formatted 'unkown' string if there is no mapped value for the given code.
 */


var prettyStatus = function prettyStatus(statusCode) {
  var singular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].FORMAT_SENTENCE_CASE;
  return STATUS_TRANSLATION_MAP_ALL[statusCode] ? STATUS_TRANSLATION_MAP_ALL[statusCode].asFormatted(singular, schema) : STATUS_TRANSLATION_MAP_ALL[_constants__WEBPACK_IMPORTED_MODULE_2__["UNKNOWN_STATUS_ID"]].asFormatted(singular, schema);
};
/**
 * Expects an array of status codes and returns an object indexed by codes with
 * values being the formatted pretty labels for each code according to the
 * provided arguments
 *
 * @param {Array} statusCodes
 * @param {boolean} singular
 * @param {(sentence|lower|upper)} schema
 * @return {Object} An object mapping status code to pretty label.
 */

var prettyStatuses = function prettyStatuses(statusCodes) {
  var singular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Label"].FORMAT_SENTENCE_CASE;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isArray"])(statusCodes)) {
    throw new TypeError('Expect incoming statusCodes argument' + ' to be an array');
  }

  var mappedStatuses = {};
  statusCodes.forEach(function (statusCode) {
    mappedStatuses[statusCode] = prettyStatus(statusCode, singular, schema);
  });
  return mappedStatuses;
};

/***/ }),

/***/ "./assets/src/data/model/status/index.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/status/index.js ***!
  \***********************************************/
/*! exports provided: MODEL_NAME, STATUS_TYPE_EMAIL, STATUS_TYPE_EVENT, STATUS_TYPE_MESSAGE, STATUS_TYPE_PAYMENT, STATUS_TYPE_REGISTRATION, STATUS_TYPE_TRANSACTION, EMAIL_STATUS_ID, EVENT_STATUS_ID, MESSAGE_STATUS_ID, PAYMENT_STATUS_ID, REGISTRATION_STATUS_ID, TRANSACTION_STATUS_ID, CPT_STATUS_ID, UNKNOWN_STATUS_ID, ALL_STATUS_IDS, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString, prettyStatus, prettyStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/status/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_EMAIL", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_EMAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_EVENT", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_MESSAGE", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_MESSAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_PAYMENT", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_PAYMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_REGISTRATION", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_REGISTRATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TYPE_TRANSACTION", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["STATUS_TYPE_TRANSACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["EMAIL_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["PAYMENT_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["REGISTRATION_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["TRANSACTION_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPT_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["CPT_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["ALL_STATUS_IDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/status/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./assets/src/data/model/status/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prettyStatus", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["prettyStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prettyStatuses", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["prettyStatuses"]; });





/***/ }),

/***/ "./assets/src/data/model/status/query.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/status/query.js ***!
  \***********************************************/
/*! exports provided: queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");


/**
 * External imports
 */


/**
 * Internal dependencies
 */


/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_3__["ALLOWED_ORDER_VALUES"])
  })
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 25,
    orderBy: 'statusCode',
    order: _base__WEBPACK_IMPORTED_MODULE_3__["QUERY_ORDER_ASC"]
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    statusCode: 'STS_code'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {number} statusType 	ID for type of Status to retrieve
 * @return {string}             The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var statusType = _ref.statusType;
  var where = [];

  if (statusType) {
    where.push('where[STS_type]=' + statusType);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_3__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/ticket/constants.js":
/*!***************************************************!*\
  !*** ./assets/src/data/model/ticket/constants.js ***!
  \***************************************************/
/*! exports provided: MODEL_NAME, TICKET_STATUS_ID, TICKET_STATUS_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return MODEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKET_STATUS_ID", function() { return TICKET_STATUS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKET_STATUS_IDS", function() { return TICKET_STATUS_IDS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var MODEL_NAME = 'ticket';
var TICKET_STATUS_ID = {
  SOLD_OUT: 'TKS',
  EXPIRED: 'TKE',
  ARCHIVED: 'TKA',
  PENDING: 'TKP',
  ONSALE: 'TKO'
};
var TICKET_STATUS_IDS = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["values"])(TICKET_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/ticket/index.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/ticket/index.js ***!
  \***********************************************/
/*! exports provided: MODEL_NAME, TICKET_STATUS_ID, TICKET_STATUS_IDS, nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString, isOnSale, isExpired, isSoldOut, isPending, isArchived, status, getTicketStatusTextLabel, getBackgroundColorClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/ticket/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TICKET_STATUS_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["TICKET_STATUS_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TICKET_STATUS_IDS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["TICKET_STATUS_IDS"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/ticket/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["nowDateAndTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["queryDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["defaultQueryData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mapOrderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["whereConditions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["getQueryString"]; });

/* harmony import */ var _status_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-helper */ "./assets/src/data/model/ticket/status-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOnSale", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["isOnSale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["isExpired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSoldOut", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["isSoldOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["isPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArchived", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["isArchived"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "status", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTicketStatusTextLabel", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["getTicketStatusTextLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorClass", function() { return _status_helper__WEBPACK_IMPORTED_MODULE_2__["getBackgroundColorClass"]; });





/***/ }),

/***/ "./assets/src/data/model/ticket/query.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/ticket/query.js ***!
  \***********************************************/
/*! exports provided: nowDateAndTime, queryDataTypes, defaultQueryData, mapOrderBy, whereConditions, getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowDateAndTime", function() { return nowDateAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDataTypes", function() { return queryDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQueryData", function() { return defaultQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOrderBy", function() { return mapOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereConditions", function() { return whereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");


/**
 * External imports
 */




var nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
/**
 * Described attributes for this model
 * @type {{attributes: *}}
 */

var queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['TKT_name', 'TKT_ID', 'start_date', 'end_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(_base__WEBPACK_IMPORTED_MODULE_4__["ALLOWED_ORDER_VALUES"]),
    showExpired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.month
  })
};
/**
 * Default attributes for this model
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

var defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_4__["QUERY_ORDER_DESC"],
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a ticket.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

var mapOrderBy = function mapOrderBy(orderBy) {
  var orderByMap = {
    start_date: 'TKT_start_date',
    end_date: 'TKT_end_date'
  };
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an tickets endpoint request using provided
 * information.
 *
 * @param {boolean} showExpired 	Whether or not to include expired tickets.
 * @param {string} month            Return tickets for the given month. Can be
 *                                	in any month format recognized by moment
 * @param {number} forEventId    	ID of Event to retrieve tickets for
 * @param {number} forDatetimeId    ID of Datetime to retrieve tickets for
 * @return {string}                	The assembled where conditions.
 */

var whereConditions = function whereConditions(_ref) {
  var _ref$forEventId = _ref.forEventId,
      forEventId = _ref$forEventId === void 0 ? 0 : _ref$forEventId,
      _ref$forDatetimeId = _ref.forDatetimeId,
      forDatetimeId = _ref$forDatetimeId === void 0 ? 0 : _ref$forDatetimeId,
      _ref$showExpired = _ref.showExpired,
      showExpired = _ref$showExpired === void 0 ? false : _ref$showExpired,
      _ref$month = _ref.month,
      month = _ref$month === void 0 ? 'none' : _ref$month;
  var where = [];

  if (!showExpired) {
    where.push('where[TKT_end_date**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN"] + '&where[TKT_end_date**expired][]=' + nowDateAndTime.local().format());
  }

  if (month && month !== 'none') {
    where.push('where[TKT_start_date][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["GREATER_THAN_AND_EQUAL"] + '&where[TKT_start_date][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).startOf('month').local().format());
    where.push('where[TKT_end_date][]=' + _base__WEBPACK_IMPORTED_MODULE_4__["LESS_THAN_AND_EQUAL"] + '&where[TKT_end_date][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()().month(month).endOf('month').local().format());
  }

  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[Datetime.Event.EVT_ID]=' + forEventId);
  }

  forDatetimeId = parseInt(forDatetimeId, 10);

  if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push('where[Datetime.DTT_ID]=' + forDatetimeId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

var getQueryString = function getQueryString() {
  var queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQueryData.queryData, queryData);
  return Object(_base__WEBPACK_IMPORTED_MODULE_4__["getQueryString"])(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/ticket/status-helper.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/model/ticket/status-helper.js ***!
  \*******************************************************/
/*! exports provided: isOnSale, isExpired, isSoldOut, isPending, isArchived, status, getTicketStatusTextLabel, getBackgroundColorClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnSale", function() { return isOnSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return isExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSoldOut", function() { return isSoldOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArchived", function() { return isArchived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicketStatusTextLabel", function() { return getTicketStatusTextLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorClass", function() { return getBackgroundColorClass; });
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/ticket/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * @function
 * @param {Object} TicketEntity model object
 * @throws {TypeError}
 */

var assertTicketEntity = function assertTicketEntity(TicketEntity) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(TicketEntity, _constants__WEBPACK_IMPORTED_MODULE_2__["MODEL_NAME"])) {
    throw new TypeError('The provided entity is not a ticket instance');
  }
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {boolean} true if ticket is currently available for purchase
 */


var isOnSale = function isOnSale(TicketEntity) {
  assertTicketEntity(TicketEntity);
  return !isArchived(TicketEntity) && TicketEntity.startDate.diffNow() < 0 && TicketEntity.endDate.diffNow() > 0;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {boolean} true if ticket can no longer be purchased
 */

var isExpired = function isExpired(TicketEntity) {
  assertTicketEntity(TicketEntity);
  return TicketEntity.endDate.diffNow() < 0;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {boolean} true if tickets sold meets or exceeds available quantity
 */

var isSoldOut = function isSoldOut(TicketEntity) {
  assertTicketEntity(TicketEntity);
  var qty = TicketEntity.qty;
  return qty !== null && qty !== 'INF' && qty !== Infinity && TicketEntity.sold >= qty;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {boolean} 	true if ticket is not yet available for purchase,
 * 						but will be at some date in the future
 */

var isPending = function isPending(TicketEntity) {
  assertTicketEntity(TicketEntity);
  return !isArchived(TicketEntity) && TicketEntity.startDate.diffNow() > 0;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {boolean} true if ticket is archived
 */

var isArchived = function isArchived(TicketEntity) {
  assertTicketEntity(TicketEntity);
  return TicketEntity.deleted;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {string} status ID
 */

var status = function status(TicketEntity) {
  assertTicketEntity(TicketEntity);

  if (isArchived(TicketEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].ARCHIVED;
  }

  if (isSoldOut(TicketEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].SOLD_OUT;
  }

  if (isExpired(TicketEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].EXPIRED;
  }

  if (isPending(TicketEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].PENDING;
  }

  if (isOnSale(TicketEntity)) {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].ONSALE;
  }

  return '';
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {string} ticket status
 */

var getTicketStatusTextLabel = function getTicketStatusTextLabel(TicketEntity) {
  var ticketStatus = '';

  switch (status(TicketEntity)) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].SOLD_OUT:
      ticketStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('sold out', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].EXPIRED:
      ticketStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('expired', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].PENDING:
      ticketStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('pending', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].ONSALE:
      ticketStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('on sale', 'event_espresso');
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_STATUS_ID"].ARCHIVED:
      ticketStatus = Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('archived', 'event_espresso');
      break;
  }

  return ticketStatus;
};
/**
 * @function
 * @param {Object} TicketEntity model object
 * @return {string}    CSS class for the background color
 */

var getBackgroundColorClass = function getBackgroundColorClass(TicketEntity) {
  return "ee-status-background-color-".concat(status(TicketEntity));
};

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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
      ? size === Infinity
        ? size
        : Math.max(0, size + index) | 0
      : size === undefined || size === index
        ? index
        : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = /*@__PURE__*/(function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = /*@__PURE__*/(function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = /*@__PURE__*/(function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = /*@__PURE__*/(function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value)
        ? value.toSeq()
        : seqFromValue(value);
  }

  if ( Collection$$1 ) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create( Collection$$1 && Collection$$1.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = /*@__PURE__*/(function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
        ? isKeyed(value)
          ? value.toSeq()
          : value.fromEntrySeq()
        : isRecord(value)
          ? value.toSeq()
          : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = /*@__PURE__*/(function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
        ? isKeyed(value)
          ? value.entrySeq()
          : value.toIndexedSeq()
        : isRecord(value)
          ? value.toSeq().entrySeq()
          : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = /*@__PURE__*/(function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value)
      ? value
      : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = /*@__PURE__*/(function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = /*@__PURE__*/(function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = /*@__PURE__*/(function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(o);
    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(o)
        : hashString(o);
    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }
      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }
      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }
      return hashJSObj(o);
    case 'undefined':
      return 0x42108423;
    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }
      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;
  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function() {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq$$1 ) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = /*@__PURE__*/(function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq$$1 ) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = /*@__PURE__*/(function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq$$1 ) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create( SetSeq$$1 && SetSeq$$1.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq$$1 ) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function(type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function(type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1) !== false) &&
        fn(v, iterations++, this$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection)
      ? IndexedSeq(entries)
      : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function(fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(null, steps.map(function (s) { return s.value; }))
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection)
      ? IndexedCollection
      : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection)
        ? IndexedSeq
        : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

function isPlainObj(value) {
  return (
    value &&
    (typeof value.constructor !== 'function' ||
      value.constructor.name === 'Object')
  );
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}

/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
      ? notSetValue
      : typeof collection.get === 'function'
        ? collection.get(key)
        : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}

function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$1(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update(
            collection,
            key,
            NOT_SET,
            function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
        ? collection.merge.apply(collection, sources)
        : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger
        ? merger(oldValue, newValue, key)
        : newValue;
  }
  return deepMerger;
}

function mergeDeep$1() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = /*@__PURE__*/(function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value)
        ? value
        : emptyMap().withMutations(function (map) {
            var iter = KeyedCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( KeyedCollection$$1 ) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create( KeyedCollection$$1 && KeyedCollection$$1.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
  fn,
  reverse
) {
  var entries = this.entries;
  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
  fn,
  reverse
) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
};

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
  return fn(this.entry);
};

var MapIterator = /*@__PURE__*/(function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator$$1 ) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map;
    }
    newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = /*@__PURE__*/(function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection$$1(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection$$1 ) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
        ? this.shift()
        : index === this.size - 1
          ? this.pop()
          : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0
        ? oldCapacity + end
        : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset
        ? new VNode([], owner)
        : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = /*@__PURE__*/(function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
        ? value
        : emptyOrderedMap().withMutations(function (map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( Map$$1 ) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = /*@__PURE__*/(function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value)
        ? value
        : emptyStack().pushAll(value);
  }

  if ( IndexedCollection$$1 ) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection$$1(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped
          ? !is(v, a.get(k, NOT_SET))
          : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

var Set = /*@__PURE__*/(function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value)
        ? value
        : emptySet().withMutations(function (set) {
            var iter = SetCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( SetCollection$$1 ) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create( SetCollection$$1 && SetCollection$$1.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);
      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) { return set.remove(value); });
      adds.forEach(function (value) { return set.add(value); });
    });
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0
      ? set.__empty()
      : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq$$1 ) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn$1(searchKeyPath, notSetValue) {
  return getIn(this, searchKeyPath, notSetValue);
}

function hasIn(collection, keyPath) {
  return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$1(searchKeyPath) {
  return hasIn(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this)
        ? this.toKeyedSeq()
        : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq()
        .map(this.__toStringMapper)
        .join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection
      .toSeq()
      .map(entryMapper)
      .toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq()
      .reverse()
      .findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn$1,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn$1,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq()
      .map(keyMapper)
      .toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq()
      .reverse()
      .first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq()
      .reverse()
      .keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      (this.size === Infinity || (this.size !== undefined && index > this.size))
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
        ? function (v) {
            h = (31 * h + hash(v)) | 0;
          }
        : function (v) {
            h = (h + hash(v)) | 0;
          }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = /*@__PURE__*/(function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
        ? value
        : emptyOrderedSet().withMutations(function (set) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( Set$$1 ) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = (RecordType.prototype = Object.create(
    RecordPrototype
  ));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other ||
    (other &&
      this._keys === other._keys &&
      recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq$$1 ) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(
      function () { return i === size
          ? iteratorDone()
          : iteratorValue(type, reverse ? size - ++i : i++, this$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value)
    ? IndexedSeq
    : isPlainObj(value)
      ? KeyedSeq
      : null;
  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "4.0.0-rc.11";

var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn,
  has: has,
  hasIn: hasIn,
  merge: merge$1,
  mergeDeep: mergeDeep,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn,
  update: update,
  updateIn: updateIn,
};

// Note: Iterable is deprecated
var Iterable = Collection;

/* harmony default export */ __webpack_exports__["default"] = (Immutable);



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

/***/ "./node_modules/pluralize/pluralize.js":
/*!*********************************************!*\
  !*** ./node_modules/pluralize/pluralize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else {}
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


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

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["default"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


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
/*!****************************************!*\
  !*** multi ./assets/src/data/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/src/data/index.js */"./assets/src/data/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

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

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "cuid":
/*!**************************************************!*\
  !*** external {"this":["eejs","vendor","cuid"]} ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["cuid"]; }());

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

/***/ })

/******/ });