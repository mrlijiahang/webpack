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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(8);
var has = __webpack_require__(10);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);
var core = __webpack_require__(0);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(84);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(14) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(14);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(49);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(75);
var setToStringTag = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(78);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var global = __webpack_require__(1);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(85);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(17)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(15);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(14);
var wksExt = __webpack_require__(21);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(76)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(15);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(42);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(44);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(45).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(17);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(147);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('style-loader!css-loader!./main.css');
// import './main.less'

// console.log(123)
//lijiahang
var num = 1;
// 引入css
// import maincss from './main.css'

console.log(num);
var a = function a() {};

new _vue2.default({
    el: '#app',
    components: {
        app: _app2.default
    },
    template: '<app/>'
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _toStringTag = __webpack_require__(67);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _isFrozen = __webpack_require__(69);

var _isFrozen2 = _interopRequireDefault(_isFrozen);

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _setImmediate2 = __webpack_require__(91);

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _getOwnPropertyDescriptor = __webpack_require__(94);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _isExtensible = __webpack_require__(97);

var _isExtensible2 = _interopRequireDefault(_isExtensible);

var _getOwnPropertyNames = __webpack_require__(100);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _defineProperties = __webpack_require__(103);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _set = __webpack_require__(106);

var _set2 = _interopRequireDefault(_set);

var _ownKeys = __webpack_require__(121);

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _symbol = __webpack_require__(63);

var _symbol2 = _interopRequireDefault(_symbol);

var _defineProperty = __webpack_require__(130);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = __webpack_require__(133);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(136);

var _create2 = _interopRequireDefault(_create);

var _stringify = __webpack_require__(139);

var _stringify2 = _interopRequireDefault(_stringify);

var _freeze = __webpack_require__(141);

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = __webpack_require__(144);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  var emptyObject = (0, _freeze2.default)({});

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' ||
    // $flow-disable-line
    (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'symbol' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value e.g. [object Object]
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' ? (0, _stringify2.default)(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = (0, _create2.default)(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if a attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = (0, _create2.default)(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind polyfill for environments that do not support it... e.g.
   * PhantomJS 1.x. Technically we don't need this anymore since native bind is
   * now more performant in most browsers, but removing it would be breaking for
   * code that was able to run in PhantomJS 1.x, so this must be kept for
   * backwards compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = (0, _keys2.default)(a);
          var keysB = (0, _keys2.default)(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: (0, _create2.default)(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: (0, _create2.default)(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    (0, _defineProperty2.default)(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof _symbol2.default !== 'undefined' && isNative(_symbol2.default) && typeof Reflect !== 'undefined' && isNative(_ownKeys2.default);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof _set2.default !== 'undefined' && isNative(_set2.default)) {
    // use native Set when available.
    _Set = _set2.default;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = (0, _create2.default)(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = (0, _create2.default)(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  (0, _defineProperties2.default)(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.isCloned = true;
    return cloned;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = (0, _create2.default)(arrayProto);

  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = (0, _getOwnPropertyNames2.default)(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && (0, _isExtensible2.default)(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = (0, _getOwnPropertyDescriptor2.default)(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    if (!getter && arguments.length === 2) {
      val = obj[key];
    }
    var setter = property && property.set;

    var childOb = !shallow && observe(val);
    (0, _defineProperty2.default)(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = (0, _keys2.default)(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = (0, _create2.default)(parentVal || null);
    if (childVal) {
      "development" !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return (0, _create2.default)(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = (0, _create2.default)(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject) {
      return;
    }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
    return -1;
  }

  /*  */

  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */
  /* globals MessageChannel */

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both microtasks and (macro) tasks.
  // In < 2.4 we used microtasks everywhere, but there are some scenarios where
  // microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using (macro) tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use microtask by default, but expose a way to force (macro) task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof _setImmediate3.default !== 'undefined' && isNative(_setImmediate3.default)) {
    macroTimerFunc = function macroTimerFunc() {
      (0, _setImmediate3.default)(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]')) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function macroTimerFunc() {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function macroTimerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine microtask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof _promise2.default !== 'undefined' && isNative(_promise2.default)) {
    var p = _promise2.default.resolve();
    microTimerFunc = function microTimerFunc() {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a (macro) task instead of a microtask.
   */
  function withMacroTask(fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      var res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    });
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof _promise2.default !== 'undefined') {
      return new _promise2.default(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || (0, _isFrozen2.default)(val) || val instanceof VNode) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = (0, _keys2.default)(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, def, cur, old, event;
    for (name in on) {
      def = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      /* istanbul ignore if */
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[_toStringTag2.default] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function forceRender() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = (0, _create2.default)(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = (0, _create2.default)(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$off(event[i], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break;
          }
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, "event handler for \"" + event + "\"");
          }
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
        // no need for the ref nodes after initial patch
        // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$1 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    (0, _defineProperty2.default)(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive(props, key, value, function () {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = (0, _keys2.default)(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = (0, _create2.default)(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if ("development" !== 'production' && getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    (0, _defineProperty2.default)(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (methods[key] == null) {
          warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      (0, _keys2.default)(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = (0, _create2.default)(null);
      var keys = hasSymbol ? (0, _ownKeys2.default)(inject).filter(function (key) {
        /* istanbul ignore next */
        return (0, _getOwnPropertyDescriptor2.default)(inject, key).enumerable;
      }) : (0, _keys2.default)(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = (0, _keys2.default)(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if ("development" !== 'production' && !isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes) {
        if ("development" !== 'production' && slotNodes._rendered) {
          warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        }
        slotNodes._rendered = true;
      }
      nodes = slotNodes || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        "development" !== 'production' && warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = (0, _create2.default)(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      return resolveSlots(children, parent);
    };

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
      }
      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // Register the component hook to weex native render engine.
  // The hook will be triggered by native, not javascript.


  // Updates the state of the component to weex native render engine.

  /*  */

  // https://github.com/Hanks10100/weex-native-directive/tree/master/component

  // listening on native callback

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = (0, _keys2.default)(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

    // Weex specific: invoke recycle-list optimized @render function for
    // extracting cell-slot template.
    // https://github.com/Hanks10100/weex-native-directive/tree/master/component
    /* istanbul ignore if */
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var options = {
      _isComponent: true,
      parent: parent,
      _parentVnode: vnode,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      hooks[key] = componentVNodeHooks[key];
    }
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + (0, _stringify2.default)(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }
      if (isDef(data)) {
        registerDeepBindings(data);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      // reset _rendered flag on slots for duplicate slot check
      {
        for (var key in vm.$slots) {
          // $flow-disable-line
          vm.$slots[key]._rendered = false;
        }
      }

      if (_parentVnode) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = (0, _create2.default)(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue(options) {
    if ("development" !== 'production' && !(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      if ("development" !== 'production' && name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = (0, _create2.default)(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ("development" !== 'production' && type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = (0, _create2.default)(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache, key, this$1.keys);
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive

    /*  */

  };function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = (0, _create2.default)(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = (0, _create2.default)(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.5.17';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = (0, _create2.default)(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = (0, _freeze2.default)({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove() {
        if (--remove.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove.listeners = listeners;
      return remove;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }

        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = (0, _create2.default)(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = (0, _create2.default)(null);
    if (!dirs) {
      // $flow-disable-line
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + (0, _keys2.default)(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs

    /*  */

  };function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass

    /*  */

  };var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
    el.plain = false;
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    el.plain = false;
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = {
      value: value.trim()
    };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return (0, _stringify2.default)(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler(handler, event, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  function add$1(event, handler, once$$1, capture, passive) {
    handler = withMacroTask(handler);
    if (once$$1) {
      handler = createOnceHandler(handler, event, capture);
    }
    target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners

    /*  */

  };function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false;
      }
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps

    /*  */

  };var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle

    /*  */

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
  };function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def) {
    if (!def) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def === 'undefined' ? 'undefined' : (0, _typeof3.default)(def)) === 'object') {
      var res = {};
      if (def.css !== false) {
        extend(res, autoCssTransition(def.name || 'v'));
      }
      extend(res, def);
      return res;
    } else if (typeof def === 'string') {
      return autoCssTransition(def);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + (0, _stringify2.default)(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show

    /*  */

    // Provides transition support for a single element/component.
    // supports transition mode (out-in / in-out)

  };var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag || isAsyncPlaceholder(c);
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }

    /*  */

    // Provides transition support for list items.
    // supports move transitions using the FLIP technique.

    // Because the vdom's children update algorithm is "unstable" - i.e.
    // it doesn't guarantee the relative positioning of removed elements,
    // we force transition-group to update its children into two passes:
    // in the first pass, we remove all nodes that need to be removed,
    // triggering their leaving transition; in the second pass, we insert/move
    // into the final desired state. This way in the second pass removed
    // nodes will remain where they should be.

  };var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = (0, _create2.default)(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup

    /*  */

    // install platform specific utils
  };Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else if ("development" !== 'production' && "development" !== 'test' && isChrome) {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }
      if ("development" !== 'production' && "development" !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push((0, _stringify2.default)(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push((0, _stringify2.default)(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = (0, _stringify2.default)(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData

    /*  */

  };function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = (0, _stringify2.default)(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1

    /*  */

  };var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }

    /*  */

  };var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(lastTag, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function closeElement(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        closeElement(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var res;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: (0, _stringify2.default)(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      return;
    }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '');
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ("development" !== 'production' && slotScope) {
          warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
        /* istanbul ignore if */
        if ("development" !== 'production' && el.attrsMap['v-for']) {
          warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", true);
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, (0, _stringify2.default)(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  /**
   * Expand input[v-model] with dyanmic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return;
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$2 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$2];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html

    /*  */

  };var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && (0, _keys2.default)(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    esc: 'Escape',
    tab: 'Tab',
    enter: 'Enter',
    space: ' ',
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    'delete': ['Backspace', 'Delete']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }
      /* istanbul ignore if */
      return "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : handler.value;
      /* istanbul ignore if */
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + (0, _stringify2.default)(key) + "," + (0, _stringify2.default)(keyCode) + "," + "$event.key," + "" + (0, _stringify2.default)(keyName) + ")";
  }

  /*  */

  function on(el, dir) {
    if ("development" !== 'production' && dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop

    /*  */

  };var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data = el.plain ? undefined : genData$2(el, state);

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, state.warn) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, state.warn) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + (0, _stringify2.default)(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + (0, _stringify2.default)(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots, state) {
    return "scopedSlots:_u([" + (0, _keys2.default)(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el, state) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    return "{key:" + key + ",fn:" + fn + "}";
  }

  function genForScopedSlot(key, el, state) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return (altGenElement || genElement)(el$1, state);
      }
      var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines((0, _stringify2.default)(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + (0, _stringify2.default)(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      /* istanbul ignore if */
      {
        res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
      }
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
      }
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
      } else {
        errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
      }
    }
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = (0, _create2.default)(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = (0, _create2.default)(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend((0, _create2.default)(baseOptions.directives || null), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(21).f('toStringTag');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(0).Object.isFrozen;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(12)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(81);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(24);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(18);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(77);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80);
var step = __webpack_require__(54);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(14);
var global = __webpack_require__(1);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(39);
var $export = __webpack_require__(2);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(15);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(19);
var speciesConstructor = __webpack_require__(55);
var task = __webpack_require__(41).set;
var microtask = __webpack_require__(86)();
var newPromiseCapabilityModule = __webpack_require__(42);
var perform = __webpack_require__(56);
var userAgent = __webpack_require__(87);
var promiseResolve = __webpack_require__(57);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(43)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(18)($Promise, PROMISE);
__webpack_require__(58)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(88)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(39);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(41).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(17)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(2);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(55);
var promiseResolve = __webpack_require__(57);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(2);
var newPromiseCapability = __webpack_require__(42);
var perform = __webpack_require__(56);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(0).setImmediate;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
var $task = __webpack_require__(41);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(11);
var $getOwnPropertyDescriptor = __webpack_require__(59).f;

__webpack_require__(12)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(0).Object.isExtensible;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(12)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(12)('getOwnPropertyNames', function () {
  return __webpack_require__(60).f;
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperties: __webpack_require__(50) });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(108);
__webpack_require__(114);
__webpack_require__(117);
__webpack_require__(119);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(109);
var validate = __webpack_require__(61);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(110)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(6).f;
var create = __webpack_require__(24);
var redefineAll = __webpack_require__(43);
var ctx = __webpack_require__(9);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(19);
var $iterDefine = __webpack_require__(33);
var step = __webpack_require__(54);
var setSpecies = __webpack_require__(58);
var DESCRIPTORS = __webpack_require__(5);
var fastKey = __webpack_require__(26).fastKey;
var validate = __webpack_require__(61);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var $export = __webpack_require__(2);
var meta = __webpack_require__(26);
var fails = __webpack_require__(13);
var hide = __webpack_require__(8);
var redefineAll = __webpack_require__(43);
var forOf = __webpack_require__(19);
var anInstance = __webpack_require__(40);
var isObject = __webpack_require__(4);
var setToStringTag = __webpack_require__(18);
var dP = __webpack_require__(6).f;
var each = __webpack_require__(111)(0);
var DESCRIPTORS = __webpack_require__(5);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(9);
var IObject = __webpack_require__(52);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(112);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(113);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(62);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(2);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(115)('Set') });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(39);
var from = __webpack_require__(116);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(19);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(118)('Set');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(120)('Set');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);
var aFunction = __webpack_require__(15);
var ctx = __webpack_require__(9);
var forOf = __webpack_require__(19);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(0).Reflect.ownKeys;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(2);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(124) });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(45);
var gOPS = __webpack_require__(46);
var anObject = __webpack_require__(7);
var Reflect = __webpack_require__(1).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(20);
__webpack_require__(128);
__webpack_require__(129);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(49);
var META = __webpack_require__(26).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(27);
var setToStringTag = __webpack_require__(18);
var uid = __webpack_require__(22);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(21);
var wksDefine = __webpack_require__(47);
var enumKeys = __webpack_require__(127);
var isArray = __webpack_require__(62);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(24);
var gOPNExt = __webpack_require__(60);
var $GOPD = __webpack_require__(59);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(45).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(44).f = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(14)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(46);
var pIE = __webpack_require__(44);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(37);
var $keys = __webpack_require__(25);

__webpack_require__(12)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(24) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
module.exports = __webpack_require__(0).Object.freeze;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(12)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(145);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(63);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(38);
module.exports = __webpack_require__(21).f('iterator');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import img from './1.jpg'

var img = __webpack_require__(148);
exports.default = {
    //    template:'<div>我我我我我</div>'
    template: '<div><img :src="imgSrc"/></div> ',
    data: function data() {
        return {
            imgSrc: img
        };
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBWUVCUVlGQkFZR0JRWUhCd1lJQ2hBS0Nna0pDaFFPRHd3UUZ4UVlHQmNVRmhZYUhTVWZHaHNqSEJZV0lDd2dJeVluS1NvcEdSOHRNQzBvTUNVb0tTai8yd0JEQVFjSEJ3b0lDaE1LQ2hNb0doWWFLQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0NqL3dnQVJDQVE0QkRnREFTSUFBaEVCQXhFQi84UUFIQUFCQUFJQ0F3RUFBQUFBQUFBQUFBQUFBQUVDQmdjREJBVUkvOFFBRndFQkFRRUJBQUFBQUFBQUFBQUFBQUFBQUFFQ0EvL2FBQXdEQVFBQ0VBTVFBQUFCMm9BQUFBQUFBQUFBQUFDRTFKNE9iSERHTlgzNnBQYjRlUXN0RVFtQUNKaVVrS21KSnRVU2dXcUNzeE5CQVFBQUpJRmdBQzFiTkFXcmFpSUFCQ05KQ2dSTUN2QnowUGYzVDg2WjZiZW1sbVpDSzJxV0ZCYUNURXdBQUFBQUFBQUFBQUFBQUFjZ2dBQUFBQUFBQUFBQUNsYlFjR2tNejFPY2ZOWG5JamtxV0VJa1FrUUNRSml3TExWWXRWcWtSTVFJaVJBQUFBV0FBcTFTMkJhdHFwVll0VnFrUmFOUUZBaXRxaTFPUTRuSnhtNjhzK2ZONnM5NmFYS3JBS0NnU1VTUWtRbUFBQUFBQUFBQUFrUW1BU1FrWEVBQUFBQUFBQUFBQUFVNkhlMDRZdjUxT1E1TFJZbE1rTFZna0UyT09MVkpSSXRXeXJWbHFWWUwxaVJXMVloTVNTSUFBQzJFaUVpSlNRbUN3TFZFQlFLeE1XQmFCVzBYT3Z5MHNURXlkZll1dnVWUG83a3huSlNVU29YTXdtb1RBRWtpaEJLQktCS0FCS0JNSklUQUpJa0NCS0JLQklMaUFBQUFBQUFBQUFBRVRCNVh6dnN6Vnh6Mm1STVNXbXRoRTFrQmJES3NUR2tGUzlaNHpsdndjdWRXckFrRmdzVnRCRWtoWmFBSUlCWUFBRlpna3pFcVFTYlZnUk1XeE1Fa0MxYlMwcHlVRXhLUng4dFROTnUvT201ZFhKN0lTNG9LQUNRS0NBc0FBQlFRRkNDWXNtQUFCUUFUa0VBQUFBQUFBQUFBQU9EbXdRMXA0bHVRdGRKQ1JNVEFFQ1NSbFdMVjBpSms0SWlxOWptNHVWWWlZeUlGM0RWZXc2MHAySFdoZTA2MEoyblZIYWpyUXZaZFluYW5xU3ZhZGVUbWNkNlRFa1RNUktTVVNWQlVCQUp0VzBzVXNLUkVISW02Y0dSNC93QWEvU2R2SjlYVXRNUlV3aTJ5b2tJQW1CZFd5QUltcEtndXBKWlVTZ1NnVE5ZTHhVV1FMVFFYVUhPSkFBQUFBQUFBQUFBSTBsdXI1NVBLNWVMc0VXU1JFaVltQUlURWwwVG0xcGV1cFZQRWNjVDZ4NWNaMzd6ZXBwM2Y2c21nKzl2cmxORjl6ZFV4cDYrM3JHcGVUYW5DYXp2c1hyR0IxempoTU80ODc5RFRWL1QzSlkwWjUzMEZ3MTg4OVg2UTRUNXpyOUErVkxwU2RtWTZZdGZ1K2VjdHVvanVPcE1uYmpqNUxhaXBCTitQa3pJQndWdHhyMjdVbEhVN1hCYnNuWlB6N3ZxdTNGNHFJdEZRbVNxd3FzS3pKQ1NRbUJGb0tyR3FyQ0pFUklpYlZFV3FpUlFCSkNTY29rQUFBQUFBQUFBQUZEeXZubmMra2puNStIbUFBQUFoYXRzcEMxR2tjSFAxenViMTAvdkpaVEsxdE5rck5wektyd1VwemNaZ1dCYlN4RmNONHZjOCszemVQczlOT1hzOUdVOVMva2NSbk8wZExiZ1gxK1hyOWhWcUNZbUU0ZWw1ZmpIcitIa3Z0VzZqOEhmSFdQbnl1NGNWTUl2Ni9pSFBicmNoejI0cjVrMW1UcjB2U1hzaXhTOVZwdXZTZWYxdG10cTZpSmlreEsyQ0FBQUtoWXFXVlcyVkZxZ0FBQUF0VUxWdElCeUNaQUFBQUFBQUFBQVV2UTFycWpadXN6c2N2SHlBZ2tBQ1l0QkRLVVF0cHJkZVBxZHJyVm5PM3RkN0h0aVlsSm1MSUJaSklweVVYcjlMMU9MTHphZXFhOFBIczlMb2Z6Ti80cXpwdGsza1Z4YkMxeDdNYnY4QVF3ek1pRXlzZVQ2L2xHdnNUMkY1aHIvSnVER3pkMlQvQURudDNVekpTNjhXTTVWQnB6RWZwSHpqNTI1ZG02OE9IbDZ0OHh4V3FkbTBXV0szZzRmVzh5Mm4wZlBpZTNxQUZsdFZoVllWV2dpMUprdFZCZW9CYUFBQUFBQUFMRlZoeURPQUFBQUFBQUFBQUZMOFpxYlhPdzllblo1T1BrSWlRQUF0UkY2d0pRbHRhbHBhZFRzOWF0dzUxaU9XVzJtdHN5YlZ0cklGd0tUNEI3c1lWNU9XeU9QVFhrMjc3dG9MdXJ1M2gxbjdjdnFZZHNYckxwVHNiRDg5UFN6ckdNcVNFMVdQQzlQeFU4anI5NjUwK2w3dnBHdkcyT3JxMjlQcmM2V1NPSnlWT3BvSGRPaWxvbGxBT3pianNXaEFyYU5UWSt5dEQ3MjA1RVFXVlcyQUFyYUNCQUFWWlVXVkZxZ21CTUJNSUpRSlFKdFNTeW81aG5BQUFBQUFBQUFBRGo1S0duOEIyRHIwN1YrUGtBSUFFUkV3Uk1TQVRlbDgzaDZ2WjZ0dTlNbng3SWJaNU9Qa0l0V3pBRnBxR0haalEwOTB0MGpRL2pmUmZrTmFGcHM3eWpDSjJENkJ5NTUwdlZYbzlUMlIxdTVETUJlRGc3dlZMYy9sM1QwcVVrdlMwTGVWdFNVbVlyZXE0TnAzWld0TTNsdEYxclhtbXFXbUlCRVRHcnpmUW56ZDlCYW5ySWxRcXlvc3FMVkNxVVFrSmlhTENxd3FzS3JDcXdyRjZrSkVKRVROU1JaekRHUUFBQUFBQUFBQUZiUWF4MVp1ZlRCMmI4ZHlaaVNBQkVSSWhNQkVrM3BlWHI5YnM5VmQvd0R1K0o3bHJrcGNpd3pXd2xwU1JUazR5T1BsR0plQnN1cGdQb1pWVnVPZVpTSXZPWngydEJXYlFBY2VxdHI5TmRNZTdzM1ZJeXJVTUgwUjJ0SjdqTzFOYkZsV3MyaVlYVUdEWmJpYlZyV0VYcklpYTVrb25RRjZtN2RLYmRzenhNYXMxdFFsS1NFaUV5dFFDQ1pySmRWVmxSWlVXVkZsUlpXU1VDVUNBQWN3emdBQUFBQUFBQUFCVzBHTzZEK2x2bm82ZCtEbUxUVzVWRWdSRVdKVk1sVXdzM3BhWGc2M2E2aS9RdnRlVDdGUlpKQ1NRa2syZ1R4M2dxc0twaGFyQ3Rnc015RXlWaThGVmhXdG9hNnVFWjNpSmcvc1pWNjFZUG12bzNpdkpXNGl6VVJNUnBMRXN2eEc2N1VUV2dxYXlpRXdTV09ydFRWZXpVMldOV2F5TENRQkVpaTBMVk1sWnRCQ1ZRQW1BSUFBQUFBQTV4TUFBQUFBQUFBQUFBVTBkdlRBalQzTlFjczlheHpLMkFnRWdna2habUpsNCtuM09rZlJYc2VSNjlzekVnSk1UQ1dSTkFDQ0FGaFd2VnhveXJrOEQyY3UxTVRRQUZZc3lwMXUxQzRiR1p5ZEhtNTRLWFRiSXBFd2Fsd0RiV3BiZTFVQW9FVnRRbm02dk9jR3lkYWJKTm5URTJpU1Naa0JFd0F0WmlTRnFnV3dDWW1BSUFBQUFBQTV4TUFBQUFBQUFBQUFBUFA5Q3A4OGVQc1hYQmJtak56RExSWXFzaXMyRkY0S3pJaXQ3WnZGMCs1MHEraWZYOEQzN1p0V3lJbUVtSmdzS0FSTUNKb01GN1dzajBkbll2c1lpMHdUYXFMVkNVUVdoMWN1elh4ZmIwaTFiWkV0SVRBQ2tqeHZuNzZWMEZiNVBOMXVacXdzQVJOQ2xmZjZDZWRzSFgyY0czN1ZtMmJWc1NKa0NBQXRaaVNhMnFCYkFKaVlBZ0FBQUFBRG5Fd0FBQUFBQUFBQUFBUVBJK2UvcGZVeGhHOWRYYmhOS2VGdC9DVEZLWmIyRENZeVRISWhuL2VOWU5yOWxkUXQxOXBkSGVqdW52blQ5bmpzWG1sa2xDeTBKaVJRQUNseDRuYzcxVFhQblo3cEUzTDJORldYZWM2TWszejN0S1pYR3haeGYyMDd0VmpCL2M3R3NwZHZ6MWV6VjFiSXJZVlhGRjFjZXRObStWTDg5MzlEeXJ2c0tWcm1jRms1SXB4bVZabGcyNVUrZHRqNHZuOFp4TVd0dE1Ta2hCQVRBQzFtQmF0b0lXcGFRaTBGQkFBQUFBQUhPSmdBQUFBQUFBQUFBQkVpSzJGSXZVck13V2laTU0wMXYzUVVmUUhyNGZtQWkxVml0NnRKZ1ZUSXRXMXlCWUpJQUFBRVNJeFhLeDg0K1Q5SzRhYWd0Nm5RSzlucVZNNDkvWFBweHNMMk5VYkpQVjBadjNCMnVmT2RiYkJPOU1TeW1KQW9CUzQxVnJYZk9oMnZmcHRES2wwTmJmVUh6MzVuMGwxNjFEdUtld2RlM0tFeEpOcTJTUWlKZ21KZ0JhekF0RXdUU1l0Z1JJb0lBQUFBQUE1eE1BQUFBQUFBQUFBQUFRQUFBQ21odDk2eVBBM1Q4Mjc5ajF4bEExcFcxVnNWc1dyWkFMQkpBQUFFSmlDeXZXTzN4OUtwR0w1YnlWbzd6dC9kQTEvc0wxT1E0b3RhWGo0TzV4cmpHUWNuTWNxcG1acllDZ0FPdDgrZlF1cmw0OXBhRzNzMTJJZ0V6VUpnSkVTc2dFaEVUQk1UQUMxQmFKZ2lKaTJCRWlnZ0FBQUFBRG5Fd0FBQUFBQUFBQUFBQkNSQ1lBQUk4ZjJLSHpobS9yNnBqNlhuRXN0VXJacFcxYUxOQXpBSlFadE1FbUFCYXBnbnorNXFhTzlyN29TV2Q0ZGYwS2VjWm5tR25JUG92dS9Pdm9tK3AxZnNrNTZYaHF0b2trWEs5YlFTSVNJQng0eGxIbkh6OTlCZlAyNmJySkZvVzB3c2hNb1NJU0lTQUVUQk1UQUtxQmFBaUppMFNRSUFBQUFBQUE1eE1BQUFBQUFBQUFBQUFBSW1BQUFRY2VsZDI5TStldHo2djgyUG9xUEE5OXExVTJ5TkNxTEsya0syWmxBbEFsQWxBeDdTTzM5SlJITHdEZEhhMGh6SDBQNHVHZThkanljaDdCcExwYloxaVYzdjgvYmtNNW1sMm9tSnRrTXphdGtrUUJGWmdqcjlqaFBuamFHc3RoWFd4b21Gc0xFeEtTQkFBU0JFd1RFd0sycW9FZ2lKaTFNU1FJQUFBQUFBQTV4TUFBQUFBQUFBQUFBQUFJbUFBQkVpc29QSDA1dnZ6elFPMjhDeGVQbzNzNnUyTHJYYlRXMjRLclZpMWJWbUpWTFpVdGxaU3dPUEJNK0duTXd6S0UxejB0cDNORCtSOUYrY2ZQY2J1OEdOWFZ5RHdsNHR0Ni8yeW1VU1hhMFNnV1RhdHBKRUFWaTFSMU96aUJxRFoycU44M1h1eE1MWVdKaVVrRUFBVEVpSmdtSmdWdFZRSkJFVEZxWWtnUUFBQUFBQUJ6aVlBQUFBQUFBQUFBQUFBUk1BQUFDdHFrQ092cmpaOVQ1MDdXMzlLYXUxTTArYmZlWGZVNGpreHpDMjFiVmtSYWtzekVoYW9tc2tZNWtPc0RZSG9hQ3ptdGlYNkhkbWJJcTFlSWhPdDR1UnpIWDdWWnFaU1FrQll0VzBnZ2xWQkFqU21jYVhyM2Q5WUhzQnVvU1pyTml3SmlTRWlFZ0JFaEV3QVJGaW9tb0ZzSWtSTVJJQUFBQUFBT2NUQUFBQUFBQUFBQUFBQUNKZ0FBQVJJaVpwRVlEd2E2TzE2WHE1RXZnNGxzeXpXbWZXekxFVXpmTXZudm5yNlNhYnpPc3hyNW5weXpJV3FFQ3JZdmszR2FBOHZZMnZhOWpZdW1aajZPN1B6OWwwYlJ2Z3ZybVNPdnoxZWF6RnBwZEpRc2tDMVVsb2dSRTlPTzNoM2thdzA3bVFkWGNMWGE3TVN0VmhFaVdWSmRBbEFsQVRBa0VBQ0F0VkFMYXpFaUppSkFBQUFBQUJ6aVlBQUFBQUFBQUFBQUFBUk1BQUFDWUU0SGx1aG82ZXl0VlpLWjliZzVtbGhabXNuV3d6UHNITVBwNk43T2o2dmxlOGUvbHVtdUEraWU1ODY5NDM3T21QY3JaVEIvU1RJY2Q3M1lhMWI0dTZ1bWFNYmE0REI4djlUM3pzZHVRa0V3THFjU2RpZWgwejJtSWVESnN2eU5TK0NiRHdXTXNYQnRpNWY3TmRUdndXMXEySmhCS0lKaVlTOHhLQUFBU1FBRVNxc1lxWlc4cjFRTGF6RWlKaUpBQUFBQUFCemlZQUFBQUFBQUFBQUFBQUFBZ0FDSjR6WFdMZERZVVUxTDlMWUVZcG5HcGRudGR4emVBdnN6Z09jWmMydmRnNjIxT3Z5VTVyZkwyN3FMYlpUbytoeVZpM2o1L05tcXZQM1R4bWw2Ym4xK1kxeThuSXZQNkdQZDQ5M3RlQldYS3V4aEhHWjZ3RVo5VEJlZ2JCNGNiOVE2L24rOTNUQytIWnZ2bWorMXZ6dUpwWE9jNkhTN2Rxa1JZUklMUkpFaE1XaEtoYlRFc2dDcFlrckpCVEhLeVR4OVYrR1pSaVdVNCtiZ3lQei9RYUFpUUFBQUFBQUFBNXhNQUFBQUFBQUFBQUFBQUFBUWtRbUIwTzc0aG9qZVdqL29LTzN3OHcwNTVHMjlHTlp0aU5NNVhCdHU2bjIxbFRWMjBkVVdkbms0T3pxK1J0M1QrM3E1S2NvNDV1cmppOVNOYjdKMWpaeDl2cmR0ZkZ6L1gyeEk5OVBrUytsR1A1T2NLNGpXV3p2Q01lM1A4QVBHeURZTmVTRGpsSnlURnlRZ0NMVkNCWkFURWxvbXFRbUZ0TVRNZ1ZXcFY0NjJMeGx2ZzZ1NlNlemp1d01wdHdqTmUxYzhIQU85NjY3RTUrTzZ5QUFBQUFBQUFBRG5Fd0FBQUFBQUFBQUFBQUFBQXJiemp0OE9nK2liOHhmVkVyMzkvL0FEejlDeWNpWU9QVSsyTlJMaFU1djNWd3piT3E5c0wxTlViWTFSSnpkdnFkdlY4UGJXbzlxNmVrcmFCTlZyZXBUVm0wOVRIWTczbitsWGc3RDEzc1NNZ3dqT05iUzlIWittL2JObjBwY3Y1UFZ4azhycTdsOWsxcHliTGcxNTZtUStJbnUrNXFMeVRmREdjbHE2cUZiVkppWUVwSWtTMVFSTUxOcVNsbkRoaVpqaVdzL1pPaDFObmV1WVRuZHBPU2sxT08wOUEweHQvUzIvbDcvTHg4aXlBQUFBQUFBQUFEbkV3QUFBQUFBQUFBQUFBQUFFT2ozdU92bXZiR3R0aG1TOUwwdXN1aWQvNkgyZ21lVHhURTZNM2pvcGN5cDZIUlhCdHNhcjJ0YndhdDJwck9UcDkveisvYjRleWRkWjNwa2xvbUpRcEV3VjFIdHpVWjJlNzArNGVIc2JYRzFEMTlVYmIxSkwzdkQybDd4cWZMc1J4NDlQY3VIN09LWGlTVUVSRWtZdGxsazBMdGJyYXdOOXVuMjdadFcwZ0ZiQlFDMWJFTEN2VjdXR21MOUMyMHpHc2tzRVN0VEVrekV4WEZjcjF5WWx2dlVHNUVtNlZvQzBURlFJa0FBQUFBQUhPSmdBQUFBQUFBQUFBQUFBQUJTL0dhWjd2cTRnYlg1YVhsMUoyc2wxb2ZRMGVkNmlWMGJ2UFI2N0I4ejFmT1hBZHRhZjIrdkhyWFpPdWs4bjB2TDlXM3lNdHhmM2RUTzB4RUpXb2xKVFVtMnRUTDJlNTFPNGVEdFRWZTF6MDlaYkp3cGZjMkpxSGJ5ZWJxTGR1SUw0ZXgvbnZ1Ry81MHB5bTUybWlibGpUVlRjODZic2JkMDMyUEdOaDVucm5ZNWE5TG9BQlFLdFdSWVN1czlsNmhPN24ySFppcFd4S0pwTUMwMTVTbW9kcjZRalkrZmVENzBUTU5La2t4TUVKUUFBQUFBQUJ6aVlBQUFBQUFBQUFBQUFBQUFjZkpReGJUbjBCb1NOemRqeHZhYTYrbnR5NHl2aDdZK2NOOE1lcnBQZHVqbDJIeFc3QzZqMjlwbmJLOXJCTTd4Rk1OOW53Y2d0ODMwdW5PcHRCYXNRTFFrcnFUYnVwVGs3M1E3eDRtMWRVN1VYMHZCOXpnWFYrL2RGWkNtd05YK0NPdlByV1h5T2YwZUE2SFc3bTBqVVh1Yk8xT21kTTg3eHJibTJITmVONjNKRUwxc2dBRkV3c1RYeHoyYjZ3NlVtMk5GNWxyaXRuNVRqK1FMV3dKS0FubDR1YU1mMHhzN0JEZTNaaTBJbU5LMmlTWUJFd0JBQ1lrQUFBQTV4TUFBQUFBQUFBQUFBQUFBUUFDbWtONWFsTzNtK3F0cnQ4VVRhTlA4TzFOVkpuZXMrcmtVbXorWHVVTkU3RndySTdyS2ZDOXpvSnFiSU1lOW0zbjYzYThyVTNDbU1rU3FBWDFYdFRYSjVYZDZIcG1QYk4xMW5DNVZ4ODNDdmlhejJKcmhQZDdIVzdBNCtYcWxPbkcyMVpaSkowTnZ2UVp0L0ljWnlZa1ZZU0FFY1J6UmpPSkd4TU8xN1E3M2laZmx5Njd5ZlBybXFzUTNmcDQzSDMrSG5KVFdwQUpGK1BFWXh6aXgvbVBvRnF2dnhzWmhYc0h0ejFlV3VXRWlDZ2dCTUNRQUFBYzRtQUFBQUFBQUFBQUFBQUFJQUExL3NER3pTdTlOQTdxYjlLSzJ5NU9Ma3BsMXVlMHBhb2FzNHNod0hWMjlTOTdOSmV6ME9lM3UrSDduZzZiazV1ajNabVFzSmd0aFdhWTBZUDYzaytzZVY3blI2eTdlOCtkY0x4ZVp5ZDlPZXlTZko5THJtVzdRNm5mSTQrV3A1K2c5bzY3TjFlendjNElxWFg4S01tNitxc1NOa1lGeFprYTg5N2JIZE1TeStnNUo0NU9malJXUGEwenpESTIxZWx5MEZXbW5pbnYrSmdXTXg2dmk1Zm5LNGo3M3Z5dXZ2RDIrTkY5VGZmUk5LZHZhMkxKNEh2WVB5eWJ3eURXZXphaFpWVmhXSmdJUktCS0pBT2NUQUFBQUFBQUFBQUFBQUFFSmdBanA5dUQ1NTJGNG5WWFpsMTg2clc5Y3lJdE1VWEhoYWIrZ2RQMW0vcVlYbU8yc09sbFdMTDZIZ1pCNHUyeC9leFRLNUFFVFVub2QyRFZQcTE2QjMvSjQrc3ZaNGIrb1U3UEdMelhqUE0yeHFyNkFPM2FzazhITmlKcnJMc0IzZ2QvazhQWHh0TEZOVThoNitQWjFrZGFqemZreHFOcCs3OCtlK2JoYTU5a3l5UE45QXROaUt6UmRlOUNub213TFc4TTk3enRmNG5XVlluaytidFlIbjNweExhYVRaS1pLOHJvSGY2R0FZaEdhNFo3R3hUWGUxZmQ1RTRPekVKWlZWbFJhcXhWWVZXRlptQUk1eE1BQUFBQUFBQUFBQUFBQUFSRXdRREJ0Vzd5K2ZWK2hMOUR1WTBwTVp5R1FWR0o1YjF0WFR1eXRYWmhiNld1TnRha1Qxdk83M1cxZmJ6eldPemFraXlhMjgrTy93QlRGTVlyMjhjZWtlZjIrM2VPSzgyS1dpMXNkRHZlV3ZzNzAxQnQ5SUtrYVB6VFdCNm5vZUZsSmgzdmJGOUF4dklPeXJoNW9tTElzZVhqdWJEV1BoYnI2cTZSOUxaM2hMMGZld2p4VGV2Tm9qM0U4ckpjTDdSN21PWmhsNllSblhvMmpodldMYlZtSlpxNW9oNCt2ektjRDQ5Z3BpbXdNbDdGY2Q3RnRLVVJhTElUQUlKdFNVc3FMS2kwUktnYzRtQUFBQUFBQUFBQUFBQUFBSWlZSUIxZm5mNlIwU1o1Nyt0ZG1ZM0VtWUdZRkxWdHE2engvYmVvYTIxckhKdW9ZOXg4SGV0OHpibW9QVzAyYmorQWRROTN4NTlPT2gyZTZPTG1pYVdyMFR1ZFRwNVVZcFRidnFtaUcxTmJtd3RsYSsyQlR3dmR4ODBUMmV4c3c4bkxNQ3hrM3JYUmVRRzArUEYvYk84aTlKSVJNUkF6Ykt6RnV2elVQRngvUGJHRTVoMllPYmhRbFlsWEhGNXQ0cjhXSnhrMkNZajZFZVZsbXdNaHM4MzFKQW5TRmhFcHBLVW91a291S3JRUWtzSkZZdlFDM25Fd0FBQUFBQUFBQUFBQUFBQkVUQkFJMTdzVEhqUys3ZENieHhydVJNWnBFNW9VSXNuQk03MVJxZUI3UGdjcHdPZnVMMHIrcHkxME96ektwVy9HWGNJNUk0ZW5TZXJ4bTVzbjBYbVdteXVUd3ZhTGFDMzU4OW0xY3R4dkpJNDlKYkgxZWJBem1MRGg1cHJITVoyWEVhWDhYNkE2SnB2S1BaeGd5ejBkUTlVM1piVjJWUms3bzkzS1pURVFtV0pDYlZsTFZrVlQxem44YkZzS3IxZkp5L05GMWJ2RFFtL2s1Wmk1RXpOVm1aMGlPUWxabVVyS1FFUklpTFZBQUlyZUZxbGRjd21BQUFBQUFBQUFBQUFBQUFJaVlJdFdZZEh2VVBtN1plSzl5WFovSHlWeHF0a1pxYTJXQytwMGRLN0wxWHFleDIrdEtkamk2ZlRYdWNiMHp3Nlp2NnBxNXVIdm1qYmIyNXJOQ3Q5UnBvZmozMk5DTjg4VmFNOWpQc2RPWEVLOVd0N2V0aFhqeStEc1hVbXhEWkx3dlZPYWEycTB4TVJFaTBRT1B5dlprd0hGZHpSSHpwMjlnNnNqTThreFR4VGNIZDBiNjBiZWpCUGRqM3A2bkxIWWp3TUlNejFiWFllbUxiSTl6bHEzVzdOY3RBN3ExZmxSbjlxeWxwcmFrd3F3c0FCSUZBSW1DWW1GbUpnQUJlUVRJQUFBQUFBQUFBQUFBQUFFUk1FQVJJMXJoRzM5R1piN255dlZ4dUlUaTFzV3p5OFRUVk9PZDN6dFR1OUxsMjRtdXRnNWx5SjBlMXkxSXZCWmdTeXRxRmRMSWtSRlNlSHdzRlBDOHh1Uk5QOEFZM1pDNnU4TGVmV1hRdnBiTng0N0d5dm52ZTlkKzFPUW1MVlFKYkNGYlFZNW96NkUwR2JjeWZYZXlEeHNTMlBZMEI1bjBmMFkrZjhBdTdaNnRhdHk3YVBZUEs5VzhaaEYxaXQ2R0ZZTHRuU1p2L2s2M1pKdFcxaVltcEZnQUpBb0JFd1RFd3N4TUV4SWhJdUpBQUFBQUFBQUFBQUFBQUVBaVJWWVZTT3Y4Ny9SK2hWelBMdFk3UTU2cEZveFFXZUxsYWFZOFBlbXBOVFlHZjQ5a0dvUUNXVmtTUktDMDlUcGFuc2NlRVlxYlJ4aldQT21RWS83dnJMZ1dTNTM2aTlEdktKZWEyQXk0K0RtcHBwZmRHbU51VzVKeThmSlZxektWV1FDcW9qajBidlRWaDUrNHRBNzlpNllnRVJhVGpua0JJaVFSSTZ2ejk5RmFZdDJIa2V2dGdSTnFXcVppZFNVRWxBbEJBQUVTRVN0UklBQXVKQUFBQUFBQUFBQUFBQUFJQUFBQTFMdHJDbDFudWpRRzhzM3RqR29FcURSclBadlRzd3ZhR2haM1BvQ05NWE55Tk5lZWJ5NldpT3ZHNGNSeGYyVThucDdVOXcxZm1tU3d0T3h4UWMxS0NsbGlzMzRrNXB4M0JEWi9sYWc0NDMvQU1YUjcxYWUyZHE3TlYyVnllRHk2ZTA4UW50dkZIdFBHdEhyVDQ0OWZEZmM0SmRDZlEzenh2U01tVW1MSWdCTEsySlFBZ0tqQU0veDljSDJob3JlSjJPVGk1ZEpGaVN3QkVpRWlFaUVnQUFBQzRrQUFBQUFBQUFBQUFBQUFnQUFBRHkvVTRqNTAyemdmdXRaN0V1ZXF4eTllWHhPcGdGemJQYTBYVGMzZGpXRCs5cWMvWDl2MWpEK2ZPL1FNQ3lEMk9TdlB0Mk9ISzFxMkV4TUUzT05menp2OGVBNGJXMU1FeG4zancvUnpySWpFY0UzTnA2dHBlMWl1V3BwdjMvSjlDM09waTRSS1RlbHlLMnFRSlhGeWswOW11UDlpWFkvUDV2TmwzK1R6WlBZN0dQREpPVEZobHJIdTJucnZQNWp0T0hrTGNQTkI4LzdSeERzVzdUNU9MazBpMFNrb1dTZ1RDU0VpRXdKQUFDQUFjZ2tBQUFBQUFBQUFBQUFBQWdBQUNKcVdvR3J2RXp6VDY3NmRiczg5Mzh6MHZCbDFEdHZUKzROTzU1UHF4dGlQbGJER3JlcHQ2dGFkNyt3dkVxTW0xeDVVbTcrYlNHd016TUl2R1ZMUENQZHh6Qi9KUGF4ejNjbnJCY2x6VG1ycTltTGFGU3hxVGJXcFpNMXpmQjg1VFUvTlhpdDJQUEZZbWFTbkpiaUhKRlpDSWl5dGx3ckhzMTF2bHVDL1U3MFJNVFVsb2lRUk1Fengyamw3UFN1ZWoydkRreHJGYzAxcHA5RmNubmR5dVpXYkpSTmdxV2lCS3NyTTFKWlV0bEpMS2tzQURrRWdBQUFBQUFBQUFBQUFBRUFBQVJOUWRZOHpRTytOSUxzL0t0ZmJBeHErRlpwcTVyRmQxNmYzQlhIRXhvRlNnWHJBNGVyM2JHcDhnNlBCSnVLSnJKMU5KYmExR1pWbFBiNURsbmlzV1JHaWF3MUtKR3A5c2E5VHRaZHAyck9RYzNsYkRYMHVhWUNZU1VTU0NDQ1ppVHJhZTNUcUtYWW52WWJtY2NOcGtyYTNtVjZYUzEvanNiQTh2SGNoTWk5blhQbEc1ZVRTM3F4dEJodnRIYjFMdHpYVWJBeURYR2RWNzNQai9hcjFwNi9OVTJxTFVsWkNTd2tpSnNVVGFLSlVXSUJ5Q1FBQUFBQUFBQUFBQUFBQ0FBUWtSV2VtY1htOFBIRTZ4MmZoTmRQYTJqZDNUZDlRYmEwek5kN1ptQWJBMDQwS0FLaXlvV3FOZmVWN1BnU2IwNDc4Y21NYXgyRGhXVzFhYy9CVTJpYVJLMUV4YW1KRmJXUFA1L1FnNkhZNUtsYTNxekFRQ1lCQUppeGJXdXljVWw4ellHcjg1UFM4akQvQUJESWZCOVRNVEU4cHlMbE9HOFJWK0c2dWw0ZVZYalhQbWJLeFNNUzVPbDZjZHJaL2srd2M4UU9UMWZEdVpISEh5VW1GU2lSTUVsRUV6VXNvRjBTZ0hJSmtBQUFBQUFBQUFBQUFBQ0FBQVY4cjErZ2VEV1VQSTllcHBYdDUxNXJXTTlQS0wxM3MwNlBiVUtFRUlFd05JbVl3UEhjendaTjl2QjZzWXo1ZkQ2a21mOEFCejhGWFFxVUZsQWxCSm10bXBWVlpBUUpWYUVKRUxDaTBEbDgvSFRLY1h4anB3dkdiSGc1bjZsemtqamtsUzFUYWtISlhIOFFNOHhYRWZjVHhlN3NEM0Z4REp1Ukp6VnBkVjZEa1J5SHM5bmg1aE1Lc3FMS2kxUWhJQW0xTG9CeUNaQUFBQUFBQUFBQUFBQUFnQUFEaTVhbmhkSEovS1BNWDQ0bUJRYUUyVmlhMm9TZ0tEU1lnNk9yTnlkU05QVjNEQ2FpMk43ZmFPR2VXaENSQ1JBQVJNUzBrb0JFaUVraVJFOEdCR2Q0TmozdkhnOWpaWHBtRzVMM2hxNzJmT0d4Ym8xSnJhTTJsOGV3d3ozQnZIeWN4akpNMjlZeC93Qm5tZ1JFSENFbTlMcWh5RWVwSHBFeUNZc1FzU3F3ckV3cVJDMVJhdGdFNUJJQUFBQUFBQUFBQUFBQUJBQUFFU0tWNWFIWDhqM2hpakl2UGw4MXljYlJXYkpyTVZXMFNzQUJvQUJhdGdtc1FBUWt4TUpBVUVXclpvS0FBQkVCeDYvMkpLYWQ3bXhmRlBMOW53dkpYWnZjMDE2SmsrS2VoNHB1cmh4dkhyTXcxOTV2dUhoNVZsSHJSMC9RcllyRnFoTUFKV3R1UTQ3ZHYxRjgvd0JMc1FXcElrc1FXUUFDc1RCS0pWYXBGcTJRRGtFZ0FBQUFBQUFBQUFBQUFFQUFBQVJJaEtJcmFweGRQdmw4VHE1TngyNHN5VGh0eCsvcmRFNGE4OVRpcnlWV3FMbGEyc3Ria0JWVnFrUmVKS3JFcE5oV0xRUk1XVUxZU0lrRVRBbUpRa2lFRjZDNC93Q0RuMWpVSFEzZjFUVG5yYkw1anh2ZjRaVHNSV1M3ajVDSTdIYVBNajJ1d2VGMy9Uc2Rmc0JhQVJhQ0pDUVdDQWdDSkVKRVNBQUhJSkFBQUFBQUFBQUFBQUFBSUFBQUFBaVlpSWtRa1JXMWRWRXJxSW1ZNHVQc0RvVTlLRHhhZTZNZjRNbnExalZzZ3FuaDE5dmlQR2VuVmZPcjZSUE50NkZEcE8xd0ZGeVVweVZXcVNrQ1lTUkZpVm0wcFdiM09DTzNZNkwwTEhtUFc1andweUN4ajhaSll4enVleHpuazhucVFuU3Yyb09DOXBXcTBsWkJLeVZCYUlzVmxLMXNJQUNBQUFBQUFjZ2tBQUFBQUFBQUFBQUFBQWdBQUFBQW1TRWxyRTFBdHJNVGRWbUpDVlJXMEVKUUFoQktKQ3dxdFVURWswbVRqWGs0NDVaT0Z6RHJ1WWNON2lpNFRVbG9nU2dTQ0VnQ0VpT1NsbFJLb1NJRUN4V1JKbXRpcTBFV2lTWXRXUUxRQVFBQUFBQURrRWlKRVJQRWN6eXBQVWVaQjZqeVI2enloNmtlV1BWbnlMbnFLV0pJSXF3NHpHZGN3YkhhM0d5R3RxbXkydElObU5aalpjNjB6bzlPQW1TSW1DVENGVm1BTGF3bTJ0b3RMRWVUcXV0MVJwWGFsZXZXK25UYjBhSXlHTnN6UzVGcTNJc1ZFQlcwZUxIclgwcHRGUGFUQ3hhc2xwZ2tvc2xTeFVIRkd2c0NQb0dkTWJZTzlNaUl4YlhodXhyWFlweXpFcUpXSlNDeVZXRUpKRWdTSVRBQld5Q3ppcWN6aWs1RkVYVWc1SEVPVnhMT1Z3Y3EyQUFCeUNRQ01leUhGelJ0SFZPMDYzS1hpZ3ZiaWs1SEZCMkk2OVROOXY2UzNvZG1Ja3BvM2VlaWpHSERrUjRVYlV1YW9iWGcxVTJwSnF1dWI0V1YzOW9QZlJrU0V0NXAwRHQrRHIzRVRiZlBwZVUraSs1b2ZiWjdsWmkydmlleG9lM2JQcC9PMjJESU5DNzcwR1R2blErK2JmZCtlOTUvUDBVeVBHdG1HemJkZFhQZnFSSGJWdFZxMmc2dWxkMGFnTVE5M0g3eDlDZW5vL2NwMndUYXRra0pXMVFlTndHdnNGeW5GVElkNWFrMkFaSEhoK3F1cThFOWJ5MTlqZStsYytUTDV3NHVaVGhlV25ZVEtBQUNVaElBUk1BRGo1S21tOGM5SEZ6MW5rekhwdk1IcDI4bFhydklKNjFmTGc5VFkrbzlvbTBRb0FISUpBSTZQZWd3YlRuMGpvTThMYUdzTTNObFI3Y25pVDdvOER4czQxdWF0NHJjNXRUWXZtZW9WdlM1VFJPOXRFbUpudUhndHBkbzFJMjVjMURiYlVHcW96ZkN5Tjk2RDM0dVFDV21rTmk2T0szcHNWTUU0dm9UQzExVjcvaWsramU1cmZaR3J3YUQzMW9NOGZiV3BOdEdSNkYzM29SWjN4b2ZlbGVUcDdOc0lMOC9CTWRxdlhnN1BMMGVVK2lPOTBlOVNZRWNQTWpVbUJmUjJsREdkaDYrc2ZTbHNReThtMWJFaGx4Y3ZFYUg4SDNzZktPNzNUeDNwZWMxa1dlYTI3UjROcStpZWRHU1dNWnI3bmxMWDZEMEJ2NDllWWxBUUJNRWtBZ21KZ0FSRmpYbmw3VnNhcHZ0T1kxWGkrK3RWMmEydnhkc3pqc2JHN1JyT2RtbDFabFdVeVdxRmdBY2drQUE0OVk3TzhZK2QrNVhpTi8rOXBmY2hjZzZtaHRpYWhHUzQ3dUF6cTlaRnF3VG9qZDJDbW9wMk1OZVRzQ1RYellRMTYyQ05mMTJKQnIzZldENTZlNDYzWVhWZXRNdXhHVnZYU1gwS3o2ZlU3SmZtenIrbDVxNW51ajU4K2dyT0w1KytoUG4yM3g5dGFsMjBtUjZDMzdvTnErMTlUOXV1SGdUR1pacmpPMksxcHJuYXVwWWJLMTk5QUhMMmF6U1ppQUthRTNEb1k0VVRYdTcxK2Jkanh0YWEyc2tTT0xsNGpSR05aSmpodFRZMnZNL01SMDF1TFRxMm51ZTZ1Tjdud3ZZRXZ1MjR1V3pDZFBiZjA4dlozL29INkRUdFRpZUptMloxVGROcE5YUWJUYXJoZHF0VkUyczFVWGFyVlJOcXRVZG8yWnhXdzh5MTg5MFBvZDg4SStoTlc0YnhWMWUxd1dUNkY3M3pySjlGVitkb1g2S2ZPMG4wWGJ3dmR0bWEybVFPUVNBQVVyeVZOUFlIOUU2RE90dkhSUHJIMFA0M2phL1BHOHJsdWV4dlhIY3RJbXRoaitRWThhVTRxZFk3YzlRZHQxWU80Nk5Udk9qem5ZY0k1N2RhVFB0cDZqMjR1aE1mOTN3cGU3OUVmTzMwV3p6ek1OZlBQayt6NHllcjlCL1BuMERVL1B1L3RBVytSdHZVdTJreVRRVy90QXJQcGVkdVMzVFRPTVhpKyt2blRhMVkvaFhkNlVaSnZQV2V6U2t4TlNJVnQ1NXJYWDNmNlJUbDdtMVRUSFl0d24wQjdla3R5cDJWWlNlSy9HYUd4L0ljZWE3blA1M0luWjZOK015UGQra044THFyQjg2d09OcVoxODdieHJ3Tk9iZDFJZDc2QTBOdncxdnJUWnV1enFPMk9yUFpIV2p0d2RXTzNCMW5hSFZkb2RUME9IdkgwRGh1WStFbWpLN0M1RjF5Mk5Kcm1NMndtRXdGZTluS2EzalpLM1c5dGpTWnI3M25lalMxVWxsU2N3a0FBUk1GTmU3RjRENW10bEdMSE54S2xkaGVKdkFubTQrUWkxYkVjUFBVeDZ1UzQyYSs1Y0NHMy9hOHpNejUxOHoxL0lNdzJob1B1bTlhNk1nM3JHaWRnbWZlakkwVGkyZVlKTDJmb2Y1dzM2bVExY0RXaFBIN0hVWDJQb1BTRzhhNnVnZDdhRFRvN0cxN0ZiUDFsU0MrL2RCYjl0OXJXRzBQTWo1NzVPYnFsZXh3Wm9iSTkzaTVLZ2lMSWdhcnl2UzFjS08rWlp0bnBlbEdtTU8zMW9zcHRyVVBiUG8rMkM1eWs4Zkp4bWg4ZnlISFZ6L0FETHljL05hYXkzSnBveVBmT2hkOUhpYVQrZ3NSTk01dGhXWW52NnR6L0FJOXpmR2o5NVZ3Y0hlSFNudURwdTRPazc4bm54Nk1ublBSSG5QUmc4MmZSZ1JJY2xMRXhHS21NNjI1K29sbzcvRWNtNzlDZStiN2VWNml5Q2w0Vklpd1RrRXlBVjZKNkZNWXdNMlRyL0IrcWMvVnRjNDN2ZUtjbWRhL2szOTdYejdtaHRDdmorbWM5WWthbzJCb1E2bDZXTnE3RytiZHNHc3ZIOWJ5aWV6azIxRFF6ZmxqNS8yUG0vYk84Z1l0b3o2WDBMR1BiSDF6eW4wZmhtdS9QYjZsYittWjFzN3hmYXJGTk0vUldsYXhhK1Y1NG1vdWp2RFI1Ty9kQTc3UGU2L0pycTNGTWM1dU9LN0wxcjJUNkxuQzh6TFRGUzJLUnFNdjVNelZ0dDQzdG1MVE0xeGE0MlZ4SHpjOTd3WTlMYkdtT2V2cENNT3krVFJPT1pMamN1MHRnL1BYY3JZZXBlLzB6M2Q5YUczd1QxK1N4aU9UY3cxVHIzTU1QTTIzSnJQWlNXQ2tpSXNxWmhZV3JBVllTeFM4RlV4QjFOZkdUYWFucGxWczBUSXB6Y3Z6dnhaNWdKa08wdEZkdVQ2UGF4enEzMUZMaTlCZFFuT0prRHl0RWZST3ZqVHJsNURnNWNuejAxenRiMisyVXd6TjROQ2VCOUo0T2FrcjcvaWtldjQyd1ROYis1cjR3UHcvUTZwejlqWitUbnpuYk44S09PWjVEMDh0MS9CbjhZQ004cmdzbXd0bzZ0MjBVOERJcXhvSHdQcEhFelRVN0s3UzREdDMwL1JMV1JkT2gzN0ZMeXN4blJHK2REcTJ2cXpaRmVQaUhlNjhjSHQranRjMEoxTjFhak9sc2pYR3h6WU91ZG5lWFdoZUQyL0lpbWF4dGs1T1NacGFMUlZNMTVHbGZvSHd6UVZNbHg4MkhzenovUWpTR001SmpoZmt6N09qUkY5NXdtcTk1ZVY2cTlUQU5pYVVNazZ1QVFkbnAyOUdOcVpsMWUxWmRFMmdBQllBQUl6WklPTFcrek1TclVQbjlpa1Y3SGYyVldON1RkZ21rbzROVzdXZytidUhidXZrOGZ1ZWY2Qm0yMC9HOXRiUWtoSTV4TUFWNlhmb2E4eWYzcE9Ia0NZa1JNaUVqcjQ5bEZUV0dhZTFZNGE4OG12T1BZd3JkSncrSDc4bUFlYnRHVFVsZHV5YWdqY0EwKzIrTVZ5bUppRXdGaEVXZ2l0eThhVjFGb0ZoWjRPbnQ5ME5EN2Q5NlYxNTFkbWpwOTJ0aGptUmpXV3creEp4cmp5c2J6bVRyY3ZKVVdpeEVoRWdJcnJZWG50WTQ0NW9NWDZPY0R3ZmNXS3JRSVFNQXoreG95TjV5YWd6cko2a3hlcUptYXFzS3JCVzBFUk1Fd2xZaTBRQTR1U3hyam0yQk5lWDIrZURpNVV4RWhGZVNDblg3WXdQa3pnRXdSTmhDUnpDWUFBZ0FDWWtBQUFoSWhJaEloSWhJaE1BQUVSYVlvc0tyQ0pLQUFvR3Fnc0tvaTYxdEVKSUFBQUFBRVNFcEtndFVFU0twTENaU3F4S3JGcW1Ba3NKQWtoSW1MVlMweEtBSW1CRXdsWmlWcmF0bW9pMVJhdHFwZW5JVmxCRVNnV0tyQ0VpRXdBVFcxYXZOYkFISU00QUFnQUNZa0FBQUFBQUFBUk1BQUFRbUJLQUZBQVVEVlFXRlV2V3hWWVZXcVdBQUFBQXJhcFpXd0FUQlZZVVdGWm1TSkVWc0t4YUxVd1ZFZ3RFa0xFck1oSUFBUkZxcFdZbFltTE5SV1lGcTJxbkp4OGhFVEJFa0NDVVNBSW1DVUNZQzAxVktCempPQ0pDdkVjN2pnNVhCeWxnQUFBQUFBQUFJa1FrUUNJbUloSWhJbWFpeUZTcFVzUXNKaGJBQU9IaHJ1Vm1Dd2dLQXF0UWx4Y3hFQkpZQUVFdVBybmNjWEtDcFpYcG5lVnNFUmFXRlFXUW1aSUpRTElFb2tBVnRDVnRGVlRFcXJNS3RXU3Q2eVdxRVNCQVRBbEFtc2dBQ1VDVUt2MXRlNjd6amZIaWFXZzJENFdOY2h2UFc5L0FQUjNIb0xaeDZ2dDZDOVUzL2J3cm50dFd5YlJhdkcwR3I0Tm90V2U4WnBQRmdwbnpXSFpOanVqM0N4d25Nd0R6VGFFYTl6NDZYaStWcXFOMHRJeWJ0YVRxYnM3ZWhzbE41MjFsNVZiQjFUc0xUQnN2YU9sTjFsWjZlb210MHpwQ0RkL2s2ajRLN044UjVqNk43R2crMmJ4alNGVGVUQjhzTzNiRnhsR09jV0ZIaFpYcS9NN2R6MngzbFBldDRBOTE0ZkpKN1N0akFOWWJLMUt1NmMxd25Oa2NIUHhHdThDMkhxZzNibGVnTjVwM0JkQVUxRm5la3pPZGs2TTN2TTkzaTVlQTA0eERtUG9idStiNlFtSkFFVHdKME5TOTdCRjJYbjJrTjZOZG1hWEpUQkVvSmRMQVRaYzZTN1J1S01LekU1QUVpRWdDWTh2WDV0U05VK3daKzRWWTdyVGJuQm5Hb2NmMjdxUTlQZG1sTnZudGFJMjlwNDZPK05DN2VQRzF4dkRFenQ1RjIrd2ZPclovTWFxbktzWUtVNzJ4alZld2ZaOW95L1EyK2REbUs4M0ZjM2xsK2tOM2srQjd1ckRYWEFIdS9RR2dQb0E4UEM5b2E5TldSeFpyS3huYituMDl2TmRiN3hOUFl2aytMM1c1OU03bDAwem1XNjlMYnBPbDg4L1EzejVOZFRzK3Z0eE5ITjN4Ym8rMjMraWF1alpIaEdKOG5zN1RNWDlyS1BCTkRzMDVxd2JrOUR6eU9UbXlpc1BuTWJXNFpYTm9NSTlmSU80YlI2dlowcmxrT3M3RE85ZzZBOXBOeno4K0RmMnJjVGsyaG1Qei94bjBQeWZPdnNIMEpIVXgrM0RzRDVLeHRIWlBoZTZ6UEIyT3NmTnZMeGNwOUFlcjVYcXdsV3JJRVlOMk5NRXVMYTYrdmxNZUNlWHphWjRUNll2cnJZcEhWN2ttaE1mMjk1UnJXdS9kVG1QN2MxRmxCdkdJbFpBQUJqZWlOK2FEcW1YWWZtc2JuU3JVV0U3VXh6T01OcGsyTWxlWGx5UXhhTXY4YzhibDYyUm5qVnpDQ201dGM3SkMxVFdXcXRzNm9QYStnUG43NkJPNGtVME52clFwaTNMVEtEeGZvZjV2M1VaTm9YYW1sUXlMR3ozZm9ENSsrZ0NtZ2ZvSFU1cjN1OTI4dm5jR1Jka3hEYm1FYkVNQnhETDhRdXR5YWQzRHA5bk5OejZXM1NuUytlOS93RHo3TmV2aytPNUNhOWpqem1zSWJieHd3WGs0ZG9HRjVkc3U0dXNjWFE3dW5heDNvVGxwbVdjY1Y3ZlAwN3QzNTlySzl4YUYzK2M4MXZFYUQzZm9DVHFPMzFEbnJsMlRtQ2VEdlRSeHo1TDQyL2pUVWJxTHBUM2RuREh0S2JmMHJYRnlWazNKam5yNmxOaE5kVEU4dEpUTmVYQmFwbm13dEJiek1uMS93Q2xwa3QwK1hQRGsyVHljaThXa3ZZd2s0ZmQ2bTVUMisxV3lyVTVFcEY0SzZLMkJwOHJtdUw3ak1uckpiSmdtSnFUTmIxNWZ6OTlGYUFQSjJGZ096RFp5QmVkWmVQbkd4TkVlcDVCNisxOUhTYnR4VEg4NU5RYlUxVjdKblhpNGQzRGZIcStmNlJDUnJMVkcyTlRIdGZRWHo3OUJuYWtLNkUzM29jeFBhK3A5MEdvOHQ4L3lET05mZXJ6bVc2dzNKcDA5NzZBK2Y4QTZBSFE3R2hUZW1wc1E0NWUzdUxTa24wVnkvTzJ6REZjUXlYSExyY0dvZHdhZlp6SGRPbHQweWVUOC9iMTBXMWtmdStQN05hOHpuQ0lObzQzaVE0Y3R4UWJPNU5YRDZPZFRDanhjS3RGVHZiUlc5N2NSdzczc09yMFBCN25YSjlqeCtZOUxhK2xkeW52NjYyblkwOWhPMk5UNWJpelRDTTRUd05GYjAwWGI2Vy85QWIvQUpPUzFiV2djT3FkdGNCOC9lZmttTm04Zkl5ZjB6Q3E1MXdIemZ5VTVJMlYzc205Vk1JeXJ1cmVIVSszcVJyYlk5cWpBSjFiSndjOWR3VjJmWnh2VmtiOTd1bGR5SExhRnMrQjcydjAxZHc5ak16S3N5NGVZTFZXWUttdHFrMmdVMFR2WFVwZ2U0ZFdib01oU05MNGh2WHpzNDAzWGNHbmp0YkN3MzZETVE3bnRhNE5hMDVxbk51akhPNlo5eTY1ejQ3QU5aNmwyenFZOXY2RCtlL29RN1lLNkszcm9reERkV2x0MEhYMUg5Q2FCT1BaZXQ5OG5oNmQyL3A4OS82QStmOEE2QU9EVnUzS0dtY2MraDlNbUc1TmplMzVjVnpIdlhyVk9PYmM4eGZZMDl0L1QwbWFibzB2dW1zTTAxc2JXNjU5eitsNTVyZlorc04xSFg4ZndmSE9wM0o2aHVUdWRuR0ROUEc5THNHaXZLK2h0S1ZqdTlORjcwdDl1bmJpc2UwVjlBL1B4Mjk1NlIzOGRYdGRrVWtNRDFOdGpVMG00czF3dk5aTWYwWHZYUlYxNlAwRjgrL1Fja2kyeUlCSm9yR3NseGVQb2IxZko5YW5CMk91Zk4vSng4MGZRSHArWjZaVzFaSVQ0OWVwcnJ6OEFqbHJHd1QzTTN4ZnJwN1drOWxZSVl4dHZVZnJuMEZicGQ0anplN3BsYzY5clFIcnB2ems4djFWaEUwaThGVm9Ja2ppOFhtMGZXMy9BRi9uelBEYXlCdytiNk9pczQyRnFhbFQyOWpZbmxScmp5ZXo3cGpqY1dxREliWWpZN3UrOU9id09STUdzTlU3MnhZd3I2RTEzc2M3TVJKR2h0ODY3TlE3bjhEUFQyTlY3WGsxbHNqbHFhLzFEdmZEVEdQb0RYV3hqeDhMeUhTeGx1TDlUdm5SaklmV2pDY3Y5M0tEMi9LOVBTTnVaYXU1ZUdYTXR6YXAySFpwandPZnZMdVhCTm82U01kOWJ5T3ljbkRsMkxIZDhmTDhhTTZ3M3pMbWRiV3diUGl1aTk1NkxySDkzNlAyM2IzNmFjaXRxYW81S3AyZHBhZ2hkeTluU3ZzRy9MY1BPWUJxZmErcGN6YzJiWVZteVkvb2ZmV2pycml6N0FSbk5jSWl6Tjh4MHJzeVhaYUpORll4aytNbjBKNnZtZWxGdXZ6OEtmTjNQd2RoZCtlcDVucEVXckkwcHV6WEpxMTNCMDNwODU0bE11N3BnMDU5em11cTV6aHhzclkrbU54bkg4Ly9BRU5naWFsNU1zeUZjbXlIcjlnbUFoSWhJQXd6Uy8wbnJPdGNaQjdXWW1VT1VXMVlaeGlQcmh0VDB3OFgxZzdXRkJyTHJCdC9MUVNFd0ZwQ29GQWtFV0NzaFdRa0hVeFVQUzljT3h5RUF0ZGJGdUxleVM3SjdoV0pkQU5nYS9Fcmw0Yyt0QXpqekF3cXdiWDdSWEhwb1BLMllXNC9Zc1ZGUUpQb0JuM01MaE9zek0ydGw0blg4MExBa0R0aTl1UzNUR1BodlAwaUo2d21oZTJXN283NUpFaXVzSERBYzl5clNDUTZPS2taWjNRcUVySXR3U0FBQUFCVUlGZi94QUF6RUFBQkF3TUNBd1VIQlFFQkFRQUFBQUFCQWdNRUFBVVJCaElUSVRFUUZDQXdRUlVXTWpNMFFGQWlJeVExUW1BbFEvL2FBQWdCQVFBQkJRTDcxV0UxZnJtQlR5eXRTZXY1YzBhdEV3eG5XSFE4My93eDdMekxUSFlrUEYxMmdPejAvTFk3TlAzTGhrRUVmOElhVlR6Z2JidlUxVWw4VUIyRDh5UlRheTJiRk03eEVIL0NHZ2ExSGNFb0dja0NoMC9PVytZWWo4SjhTR1BYL2dsZEhuUXl6YzNlTE1IWDh6NkhxT25Zb1ZwMldFVUNDUDhBZ2p5Ri91QkxweXFrK0gwOEovSUhyMnFwbDFUSzdSSzd5eDZmOERjSGcxRmRVWEhBT1hsbndEc0hZZnhCOEJvOU5MeXVHN25QL0Jhb21ZU21oMDg4VWVvL0lOT0ZweXp6TzhvUC9BT3VCdEYzZTd4SlRRODgxbnNINHMrRTFZSlJZbGc1UVBzODFuOFhxV1Z3MlNkeEErd1BSWFVVT25ibkZicXpXYXpXYXpXYXpXYTNHdHhyZlcrdDliNjMxeEs0bGI4L2FIczlheFNoVEt0ajF0ZDQwUWZaSDhZYTFRK1ZURStjZTA5RmRSV1NLM211ZEJLMVVtTThvb3RjdGRKc3N0VkowL0pORFRyMWU3anREVGE2OTIxVU5ObXZkdXZkeXZkeXZkeWpwdFZIVGE2VnA1OFV1eFNVMHExeWtsVUdRbWl3NksyckZETlpyY2EzVnVyTlpyTlo4czBPdllhOWROeS8xQTVQWmlzZmdNMW43bFp3aThMNGs1UFg3QTBhaXdYbmd4WWxMcHZUelNTMVo0aUtiaFIwVUdteFhMc3pXZXpjTUY1QXJ2TGRHYTFTcml5bXZhakZJdURDcVMraFZCUVBZVFJOWVNhVkhaVlNyZkhWVHRranJxUnA0VTlaSFVVNUFmUlNrTFRXYXpXYTNVTStUNkdoMXJOR3NWYjNDekppcTN0L25icTd3b2JxdDdpZXYyQzZobzRqOENPRzJjQVYxN2NWandPY2tYS1M2bFQ4K1FGZC9mcnZqMUdRNGE0cXFENnhRbXZwb1hLV0s5cVM2dGR5ZlU0eTV1QThHSzJpbE1JVlM3ZkhWVHRpaXVVOXBwRlBXQjlOUFc5OWlqa1Z1ck5icXo0bFVPdmFheVUxcDU4dnd2em5ycVp6YkNQVlBuK3ZxcnJabStKTGI1SnJIa0VaRXlLRjFMdGhVWExTNEtjdHJxYVZEZFNDa2p3ZXRwTzE2SytDMG5wNEZLQUUyY1d3M2VTQ3pkbVhLYmRTNk1jM0k2SGFsMk5sMnBHblhrMC9hWkxLU2tnMEZVRlZuczlGVU92YWFYMDBuSjJyL082dFYrMGVxZW5tanFCejZFODE2V2IzUER5alNrNUNrYytIbXU3ZzB1Q2xWVGJLaGFaRnRkYlU1SFdnWjdHSE5pcmJJQlRHV0ZwUGdtNTJ6QXBkT3RxU2VJdENvRjJWSEZ1dVRjeWdNZHJpQXNUYlEwL1V1eVBOMDZ3NDBjMERRcjBWUTZqdE5LNld0M2dUVW5LUHpaNmF0UFAxVDV3b1VhLzFwTkg3ZmxtdHRiYXhXS3hUc1pLeE5nQUprd1NDcGdwb281d0hpbGR0ZHdmQkw2T2luR3dvU1ladzRqYVlzaFRDclZjdytrY3gya1pwK0V5K21iWUUxSVpMQzgxbWpRNmpwMm5vMmNPMnQ3aXh2elpyVjN6dlZQbkRzTmY2MHNuRVh6ZDFiaFc0Vm1zODNQMUplaUJWWENHUURIVlREWlNxM0RtT25ZVGlwVGxPRXFyYlFRQ0hMYWg2bkxPVVZHWVd3NUNYbHZ3eVZiR2JpdmlTaDJqcVBGcG1SK24wL05IcHEwL3lQVlAyQnIvV213QmJ4NUt1U1hybXl5WEw2eUtkMUVNUDM1NWRHNnlzKzFKTk5YbDVOTmFpSURGOGFkTFN3NGh4SEZTN0MyMXdLZ3RiUU9uWTVUeU54NEt0M2QxVUk2eFRLVkpyR1E0d2tsQ1FsSTdjVWF2TG15SXM1VjJpaDRySzZVVFI4UDVwWHc2cytvRko4LzBOSDR0UERGdEhrbm1MamFRK1hMRTlSc2tvVXUxeVVoeHBUWjVkbldoa0hUaTFxWTJacFRJeDNZVTAzdDhDaG11RnpEUUZiQlcwVnRGZWhyMEhnUFRVcm0xbWgwckZiYUE4VUZleVl5ZHpYNXBYdzZzSDc0Nko4LzBOSHJZLzZzZVVlMDdUVW0xc3lLazZiTzVXblh4VE9uSENQZG9WQWhwak5lUDFlZVMyQk5aMm9sTnFvTEJyTmVsZWc4QnJWVG5NZEI1VFoydld0ZkVoajgwZW1ybXh0SFZOZXZtK2hvMVl4LzVZOHZGS0dCTk1sSTlwVGtMOXN2aE1TNktlS1ZFanlWRGxxQjk0dVJZRXg0ZXo1REtJOXlmanFpWGxEbE51QnlqMkR3R3RVbkw2UitueVRYKzlOcktvWS9OSHBxaHZkRUhSTmV2bStpdXl5ZjFZODNGYlJSYlNRbHBJb2N2TGRqdHVFN0dFWFM2cVd0VDZsSlFWcU5wbXVzeUdYT0lqd25wcU01bER5aldQMTZXVi9IL05HcjAzeElUcWRxMFY2K2I2S3Ixc3Y5WjlrUExmQTJ6YkUyOVR0aWRDN2ZaSEUwOVlsbCtHeXBsc2VGWFRVUDFmcjYrUWFIeGFUK1grYmZRRnRYUnZoeXgyK25saWxVT3RuL3JQdlhFQllraCtPdU5jMkhFdHlXbktCQ2o2K0U5TlJKeExIeGVWL3ZTWFQ4MlJXcFdTaVlPMzA4c1Vxdld6L3dCWDlrU0JYR1RuZVBLZGJEaUhySTJ0eG16bHB4cHZiV09maFBUVktQM2hYcDR4UW8vRnBIODdxYUh4V3NZTlpvSHpCU3V5MGYxbjJMejRiQzVaZFV5d2FRbkhuNDhXcFd0elFyMDhSb2RkMWRUcEg4N0xiNHJWeVo0VXNIczJGSUhsNE5LSEk5YlQvVytiNkNscUNVM0c4Y0lSRnZUWG9VTU5wSExzSDJsMmE0a05TZHFrbmw2ZUgxSU9jMTZhUlgrNzZmbXlLMVJGS1ZpbWhseWRCeGI4NXJIa1o3Vm1qVmpWdXRublp4VjRtS1MwaUUvTE5uZzkwVjRjK0dTNXdtNGs4UHI2aWg1TGlkeUx1MFdKUW9lSTliVXlIMXpvNVlkUjAwbUQza2ZuYmpIRWlLODJXblluT1EyMGh5UGVJdmRwZTZ0MWI2M1Z1cmRXNnQxWm9acjlWQnRTcVl0ejc2clV5WTBQemxES1V4Z3RUY2R0c1gzZTJxQmZUbEYxWlZYdEZpdmFMTmUwR2FUTGJWU1ZBanRVQW9YQ053RjIyUnhXNkhsYW5pWkE2RHg2Zi9zTlFRdzRqRzA2U1RRK0g4NWpsZXJVdGNpMFcxM3ZES2RvdmRyTTFYdTdLeU5PeThwMDVJcWRhVncyMG8zcmEwNnB3RFRBcE9ta1VuVGpJcEZqWVRRdERBcE52WVRUYlNVVmo3SzVSQklaa3hWUjN3OHZQZURYZUZWM2hWUlp1Mm03b01OWEFFTXZoWTdMaW5kR2dUeTFJYmNDMi9KUFNheUgyWjdCWWVIV3QxYjYzMFZVVFZpUDgxOXZpSXVOdmRSSzB6SExVYjA4djEvSTRGYlFPejBIWWExTW5OdmE1TzI5M2V6NmVBZmEzZTNKZlpsUkhXRll4U1Jtc0RzYlYrcHBZQ1kwdmgwNWVVTkdOY1VQQ1dvcWpQQXR5TFBLS21rS3lQSjIxcWxncG9FN21MYzg4ajJUS3IyUEpvV2lUbDZBKzFYRFhteVIzQklUazBwdEtxQ1FCNW5yK1VQUWR0MmE0c053RnQ2d1BoeGdlUEgyajhadDZwOW1RUklqTFpYeXJOYnViVHByaHV1VTNiSkw3dHF0d2p0OExDTGxiZ3BVQm9zcmo4eDVWOVo0c0xvdlR6Z2NpY3F3S3dLTGFEWGRXTWh0Q1I1L3IrWVVBVTZoWTRNM1RVcmh5UHZEMGRpTnVpWFltbmFsMnR5T3RxR3R4VVN6R28wRkRTUWdKQm9VODJGZ3NFT1J4Z2VWSVR2YXViUEJtNldkSWVIMnZyK1k5Tld4ZHdpdWNGNkRJRWlPUHVDY1VxUTBtak1ZRmQ4WW9TV3E0N1pwYUduYWJoc29XRUpTUFR3YmVZSGxxUFBVc1Q5KzJTT0ZNUjFQMm5yK1p1TEFmaVNHVEhmMDNjRXBVT24yMHFRR2szRzg4bnBycml1SzRhRGpsQ1M4S1p1RHFUSHZLMEtoM2hwMmtTbWwwRkEvWW5yZm10OElmb1ZFV0hHUHRQWDEvTUVjci9iT0lsSlZHZXN0elRKWisxY08xTjl1SnlWRlJRamNwTVJaSWl1Ym5JVHFSd2xnbHRWREtDbWE0M1RONGZRWU45M3JaY0RqZm56MGNTSkpIRGZzSzk5diswOWZVK0FmbFhFaGFMM2IxTlB4bjFSbkxQY2t5MmZ0THJJNExNMTdpdVUwUUhMWklpSllaY2l1U0Z4MlZCKzJNcXIyTTNpWlpRRzM0eTJIS2lIRDFxWHZqZWUvOHE1ZldhWlVlN2ZhZXZxZkFQeTBsaEx6ZDNoR0s5Q2tHTzViSm9rTTVyUDJXb0dWcmp1QXBWbWpRY0lTeTh0cFVTK2xLVVh4cGRKdXJPUGFjZkU5Nk0raDVJQ3h5VnB0emRGSG1IdGUrVmMvcXRMazhMN1QxOVQ0QitYbncwUzAzTzNLaHV4SmJrWnkxM1pxUWhKQit5Y1FIRVhLd29jRVN3cVU2alQ4Y0lkMDBGRmVtMW9EMXFrTmx5TTQzVzVWS1djOFJWWnIxMHVQMlI1aDdaS2dsaWN2ZEoweW45bjdUMTlUNEIrWW14VVNXN25hVnhsTnVGdGRydlcwTXlHM1UxNi9ZbWgyRUFoMkkwOVR0blpWVWpUMjRUTFM5SG9JT1kxdWRlVlpJSmlNRHpsVnFDVHc0aVJ2ZHRMSEJqL2FldnFmQVB6THJhWFVYT3hGUmtSSEk1alQzR2F0bDNhV0VMU3NlY2VqMHpncllrdHVwOE9helQ3U1hrSXRMS1MyMGhBOVBPV29KVHFHWnhuclRINDgxSXduN29mbXNjN3N5d3RoNE5oemR0cUJjM1k1ZzNocDROdUJZOHhYUzg3a3JUTFd5cTMzY0VNUG9jVDR1WDJPb0p3WllKTGl0TXhDMDMveWlqZ1hlOGhsVDhsK1V1SmE4bDIxb1dtVmJuR2ordEJqM0dRd1lXb1FxbzgxbCtoV2ZLdTBiZWlXM3RkSndxSGMzSTVoWHh0d055bTNLeU96UGFQT0p4VjN1eVlvbFNWU1hiSGJTKzYwMkVJLzVNbkZhZ3UzRFMydzVMZGlRUXdCeVNWR2xIZW1WQmJjRWkzT0lwYlMwVXkrNDBZbCtkYnFIZTJIYWFtc3VFWU5ZOGJxZDZMdkFPWEdsSlVSaWhrRmlhODBZdDhJUzNlQXFrWERjV25ONDg1NlF5eW02WHo5THkxT3FzOXRWS1hFakpqSi93Q1V2cy9oSUt1OFB3b3JhV0UwZXZaeXdNR25vckxvdWtOdU1UekdTS1E4NGd0M1NVMll1b1ZBUjd6R2NwdVd3NVc0VjE3Y1V0c0tUS3RyYXhKdFp5dUd0SVUycEpBcUdna3htMWNTTzNoUGxrNHFUUFlqaVpxRE5TWnJqcmphSEhWV215Z29qc0pZVDl6a2ZtNVVoTWR1Yktja3lWWlFiZGNpeUduUTZqcWZCaXRRTC9YRlR1YlcyS0NjcVZhblNseUs0aFFTcEpUSWNicHU1dkpMTi9lUlRXcGs0VHFKZ2hxOXhWaE54anFvU0dYQVcyMVU5RUJDcmFGMGJTQlRNSGgweXlLNkR3WjdDNEJSbE5DbkxsSFJUbCtqSnA3VW9GUzcwKy9TMzF1MUdpT1BtSnA1MVJpMnhpTUFlZjNCVUVpYmVHV0ZRNUNKRFg1clUwdmEzcCtQeG5yeGFBNnd0cFRMdG5rZnU5VDJCWGJlK2IwUVlhYzZSL25OOGtZQ2d1STJvdlc1dFJldFpGT1FIRTBXWEFlR3VzS1RRSkZCMTFKUlBmVFF1MGhOSnZjZ1VMOC9TYitxdmVBNDk0VFh2Q2E5NFRTdFFuQjFBN1NyOCtROWRwQzZWT2tLcmpPbWxGWnJhY3R4WGxtUFpYM0JDc1RiWWFaUTJNOW1QTEhtRWdWS3VETENadDdjZnBhaXBkbWFEY1A4eTRjSXZieGRsNlpZQ1lwT0sxQmJrdm9Tb3NxaFBKZVkyOHBzOUVjSnV6aW5XMUZTS3ZDdjVNZjRGOUkzMUtmaFR5bzFnWUdCWDZhS1d6UllaTlhsS0VQSmJDaHdjMHRKU1dvUzNFZXpYcTluUDEzRjRWM1IrdTZ2VjNWNmpFZUNlZFJZTGttdllyOUlzTDVLTlBMcG5UclZNMlNJMkV3STZRaGx0SFo2VWZOSGxFNEUyNk14a3pyMisrV21YNVMyck9Xa0phSGVJeWRyWDVtY3JaR2xIaVNyUzN3NGhHUVVBcDFGQjd1NWJKWENNKzRiV3lsY2lvby9sSkdHdlM3SCtVeDhDdmhqZlVwK0R4M3I2aGtmb1NLZitaYWdPNittSzJWd3hYREZjSk5Ga0tGMWk4QjJ4eXVGSkg2aGpuajdVZVFWYlJNdWlHRXpyNjgrVXBkbEx0OWhwbU0zSFRmWGRrS3pOY2Fja2Mvek40UDhGSXk5R0cxaWhWMmlpVXdwQlplYS9jZmQ3dEhneGYxVGY4ZjV1Zk9XMzhKK1cxeWVaT1d2RUt1NXpJYitCSFY3NXRxK2tKd200dmxoaXl5VnZVcFg2dXpkVnlZRHplZGlyVGVBcWdkeWUwZlpEeE9QSWJFdSt4bTZsM2FWSVV6Q2t5VEVzalRkSWlzdHBISWY1MU5KM3VhVmo3bS9YOHJtdDZhTWhvVXVkSFNidGRJNjQ4UWJubS9oN004OVFSMG9lU1R2Y0s5MXJUdWxINFZmRFA4QXFtL2hQeXh5ZGlITWZ4SHBjL3FHdmdUVDN6TFY5S3I0TDg0UlZ0a0ZoOURpWEJqbFdNcGxTMjJreW5RODYyVklXMWZYME5lOEQxTmFpTk42aVpKajNPTzZFclNvZllEd09PSlFKMThhanFtM0YrWTR4YlpEeW9OakRTMEpTZ2ZwcFJ5TVVyazNQZDR6K20wYmJiNi9sWnFpbU85Y0hpc3ZQTEFROG9xWmRGUmxZZVQwN1BYVWpvN3pZR0VLT29tbTBJdENzUzFuS1QwdUgxYlh3bjRQL3BCUDhmeEsrR2VjeUd2aEh3dS9NdFgweCtDK0t6S3FETkxLMjNRNjBLbnpPRFVTTVp6OFd6TUJDYmV3a2R4WnJ1TEZPV2lNc3U2ZFpOU0xPNnhUVndrUkYybTRDVzEybnpUV2NWY3J6d0V2WEdSSU1TMk9TVXg3U3d3Z040T0JROEZ6YzRkdlFONzFyUnc0bnIrVmxwM1I1UDZKVmtaUTVFRExRTTFJNERvdzlCYzRrWDByMXZ5c3p0T3AvWjFWOVBhUi9LL3ovbTZEK1l4MC93QXJHRld4VzVqeEwrQ2Q5UTM4QStGMzVsc1RpUDhBNXZQMXNhMmNlTTdHVzBZRTdnRlU1bmdITXVaYTRnanNlTEZYSzB0eVFVdlcyVmFyaWlVejVQcDZlQ1U4R0dadDFmbExac3p6cGkycGxxa3BBSGoxQTZFUmJXM3haMGRPMXZINVpYTk40YkxjN1Nxd3VKNnZKQmFtalk5cHQ3aXgxY3FGR3I1OWRwdE9ZdXJCL0hzLzFKSExISzdqK2F4OEE2U0IrcXpITGZpWDhFNzZodjRQOG41MXZIN0dPVjYrdTB4aGNhYkNiZFJjWVJaWGxTUnBtTWxWZW5rWHVGeDI3YzZZMDJLNXhHdkg2ZW5wNE5UdTdJTmlUbDgxbmw1R3AxZnEwdzF1bkQ4dWVtcDJ0c3JTYTl2WUJsTjlZQ0h0TXlOa2hSelE2cXE5RCticHY2UFZ2MDluK3FQdzFlZVU1bjRVMUtHS3Nhc3A4Uy9nbmZVTmZCL2svT2cvVDU1WDVPSldrMWZ0K3NtTTA4TDFERWFWcCtjaHRLSEVMSGd4NEhFaFNML0g3dEkwMUo0ckhtbXRYdVlHbG04bjE4ZzFxRjNkTDAzSDJ0ajh1cXRXSUhBMCs4RzVIcjZYcVB4R1lhK0RJZ1BwZWpwNm5yZmZyYkIrbUZxZE8rTmJlVXYvQU9kWHdmeTJhUlUzcFlEekhYd3IrQ2Y5UXo4SCtQOEE3d3ZrS3JVQ01wMHUvdGZQWEdhdlVKTXBwYVRHZGJ1RHpkTlh4NUk5dnZWN3dQVjd3dlY3d3ZWN2Vmb1g1NnZiN3RlOERsWE80OTlyU1h3K2FhMWF2TWpTb3d5ZXZqVDFrTDJNemw4YVpaMGJJbjVjMWZXQTlFamZzeUdWYjJ6MFdnTFRjNG5kWldtWjVTNm12VysvWFdYK3V2eWQwT0p5bHBPV3F2NmNLam5tM1UzcFkxWWM5ZkNyNFovMVRYeS84ZjhBM2cvSmM2WGh2ZkV0cmhqeTJYQTQxTHVMTWRNKzZLZlVVbFo0ZkxnMG1PTVBOcFNOaE5GcFFGc2hOeXluVGpaVDd0b3IzYmJwR25Ha3FoUXhFVDVlZXhYVFVMaGNuYVpHSXZrSjYzcFhEaXRBcmt4azdZLzVjMUliNGpVOUhCa1d0MExqRWNxMUpHUzh3MnRUVDlybENUR3hnM3c1dVZrL3JybW5mR1lWaVJFWHVZcS9wL1N5ZjFOZEpZeW0wbkVnZFBENlhFZnltdmd6aENqKzlBSUxEbE9wM3RUbU9BcHE3RnVLcml1clN5YVNnSkcwWndLVTRrSGFYMTJpMW9RemVJQ0ZzUmxtTEtpSGV6aXNWanl5UUJLbnNNSmxhaUZONmljeU5RSVVpVzV4NVZpVHNpK3ZqUjhXcVhOck5rYTR0eEhKUDVoWFRVcmV5YnAxZTVyL0FEVGpZV205UWpGZmdUMXd6N2VRV1piaGVsMnRyaFcrUW5jMnRPMlhibFpacStJM01BNFZIVmtTUGh0djFMZk5QaFQxdTZmNWJQUlh3dWo5Vm9WbU1lbFhaa09OWndwb0RianNQS25ITUJoa3lITFhhMHhXMC9wRGczSnU2UWliWTE3NEhsdnlFdEpsMzhOVkx1NzhrN3lzeDdXNDlUT25FcUUyeThCTFNjU0lDY04rdmpIWFZEdTUvU3plWm5vUHpPclc5cm1tMzlyNTZVRHp1TVZFdHFWYjNtbkMwc0cxMjFVaDFBMnRIbW02SjRVNnpPYmsxZGs3b3A2eHZnZStDSXJiSmI1dCtGUFc4SjJ2c1YvbDdyWTNOelNrOWwzazhKb0hLMi9oQjVVNnJGSVFwNTYwMndSNlBVZFZuQXZCM1RyQVA0WGtGeElFdThNTVZMMUFvMDlOa3lsc1FKRWd4dFBxWFVTMFI0OUJJUUFUbTZuRVNFT0pPWTVIMThJNkZRU21kZVcwSm11S2t1d0pMc05iZW9YZ0VhaUZOMzlsVk5YU000RXlHVkFPSk5aSDVUVmplK05hMWxFdk9VMW1zaWxCS2h3R2lVb1NpalFyVVRlMlpZM2Y1R0ttcDNSWFJoMlA4RDN3cDVPUkRtUDRSVjdUbW1LSFNRbkZXRmVIVmc1a3VKWVRPZkw3amFjcUhKTmVqcWhXbklZV3NKeFN1eWU2R296NnVMSnRLZHNMeExlYmJxNDN4dENwTjBmZXBLWFhURnRjaDh3clNoa29DRUo1VUFuSjdMNG9DTFprNzdpM3lYNjlvR2FLY0NWT2FaUlB1amp6alRUajZyWmE4VTdhMlZWSnNhelRsbmxKcHlFK2lpbHhOSmRkVFNac2xGTlhhV21tTlFPaXJmY0c1WS9JM3ByaVEyQ1VPd1hDNUZvVWZGcVJyTFVWZXlVeW9LUXZtMU9SdGtSdmhjK0U4bkxlcmRGOFByZDJ0N1RQVWRIUnVUYkY3SlQ4NXRwcWZPTDYwZ21ta1lvMEtjVUFJTVl5WDRVY01NOXVxcEFRemFZeGtTMms3VWRoNUJUeVVpVmQyR1JLMUM0dW5aYjhpbzBKMTh4TER6ajI5bGtZeDRmU3RSckFaMDZNM0QxN1NRa3lMb3l6VTY4dkxQN3p4aFdaVGlXSUNJNk9uYjFwVFlJVkRRNVRsblpVTGpBanNJWDFiYlVzYVppT05PZmtQU1FuZTNPWjRNcXdPY1JuRmVoNitHN05GeUdvRks3V3JkR1h6VmVFYkg0M1ZWT2ZNczYvNHZpa3AzTTQyUFl5bmtCblk1SmVVNHBwT1NrY3ZTanlDaVZQYWNpaExIYXM3RTNpUjNtVnBxTHNTanBtblpUTFFtM3BvR2ZjWG5WS0JWUXhtMjl6U2lGSWptaTV5eVQ1R28xZnIwd245OUk3QW9KRWk0TXNpNDNndWtoMTFjSzJPT1ZHaE50RHBXZTNGQ2ljRjJleXlMaGQxT1V0Ympxb2xyZmRWR3RyVExMYllTUHlKRmFrajhPUnA5L0VsTllvK0plRk4zZU53WHJJOWlnZjFYMXFvL1UwOG5DN0NmMi9FZWx6amxxUnh2MHJkTkFra0lwc0FEdGRPQkdUeEpjUnZoUjhkdW9KWEFqd1dqSmt4bXVCSGxYQm1NbVhxRmF5OUtkZlZIaHV2R0xaUmsycU1XNUZoNVAydDlrWmVqR05lNVRJYjFJcmMxZkdIS2Ftc3VVRkJWYmF4MjZnYzNTTktvbzRDWkZ3YlpxZmVubGpMc2hjTzB1T0tqd20yUU1BY3NVTzBETlNaVGJDWjE0S3FXdGJwaFd0NlZVQ3pOTVVrWUg1VFZETzZKYkhPSExhT1RSOFI2YWdZRGpNVjNoUE1MNGlMcWpkR2JPRjVxVFZrVis1NFFPY21RaGtYT2VIMWN6UWJ6VGJkYlJRNmRzazh0UE5jVzRlbllvN1UzcVdYNUZ0bENLdWJlMzNBVlBQS2kycDF3c1dWcEJSRlEybElySFlVYmcvYm1YYWZzRFpMbGlXbW5JTDdWY1J4c3MzTjVxbzErSURGNVlkTEQ3YmxMNlhGZkVtMnVTbUZFbTNseHhLUzgrWWxvVzdVYUEwdzJCZ2R2b094UkNFejd1RUNSTmNrR0ZiRnlLaVdWbHFrdHBRbjh0ZDJ3NUFUK2g2MnVCY1VueUpEWEdabW80YjFsZjNOeVViNDc2ZGtnZEpQdzJwekQ0NmV2cG5iVDg1bHVwZDNLbFBTWEhTbHNxS1doZ0o1QVY2OW1lUklwL25XbEc4eU94U2dsTjB2S1Uwb2wwc1FIblN4WWxaWnQ3VEtFb3dPZmdIaFUybFZHQ3dveXJLaHd5TEs4M1M0anpWTlB1c3FGNmVDSEZGYTI0enI0ZzJGU2l4QlpZcFBoeFhyZ2lwMXlSR1ROdWE1Vk5SbkpCdHRqQ1EyMmxDYXg0c2ZrWlNkekUxQlJLMDY3dmllUWs0Ti9qWWV0cmhhZFJoYmQ0WjRjcEp6VHljaU1yWSt5cEpDbHRKRXE1c3RpUmNWT1Z1VXVrTW1nMWlrakhZT3hSQXBiMkU5NFZSZFZYRVVhT1NOSkovYTlLdTZWbUtyTzVsd0lWQnUwY1UxT2p2SjNwVUJnMFJXUEx6VGpUYmxQMnRoZFAySUtxTFpnMldHa05BS3hSeDRmWGJpbm4yV2szQzlISDdzaGRzdERyaGl3MjJCK2FWMHY3UmJtMkY4dHYrUUtuUitPeEtqTGpQMmlWbHUvTmJtMmw0SExEZ3dzVGxKUTVKVzRPWktHc2xDRUFkbUt4Uk9LVzdXRnVLZzJkeDZvOWpiVFJzOFVwbVdGT0pUQllYcFJKRWIwcThQQkVhRTBIM3haV2xNeWJLNmt1UjVMUlJLa05HUGVGVXpkV3pUY2xEZ0hQeS9XaGl1VmMrdytERk9LRFluWGhLQTg4NCs1RHQ3MGhkdHRqVVpHQUI2Zm05VVJ3V1lMaFErT25rWk5hZ0tOMFYwdExsVEMrem1ncFdkaE5KWXpRamdVR1Vpc0R3azRDbG1vVEhlSFlOcmFhUTJnSW9kaDZYcFdadW5VNGcvd0NWTENXN3JLVy9Kc2R1RFRRQUF4UzJrS0VpMVIzZzdweEJNaXdTRzZVaVZIcU5kbjJpenFBS3B1NHRMQ1gwa0E1OHZQWWUzMWwzSkVWRTI1T1NWaENqVnV3WmJEU0cwZm5yMDF4YmVjb1hDYzQwU3ZUeDNsM2lTOXZNTnFyZ0drb0FBRmRLeUt5SzVVU0JYRlRYRUZLZEZLY3pScEN5Z3MzT1MzVU8rSGJGdUxEd0NnYVB3M1BuTnNJLzg3L045bGlOR3RiSmtUVXBDVTFud0VacDZLMjZsNnlNTHFUcDRwcGR1a3RBU0pNY3NYZDFOUjdzeXBMVXRoNnR3SnlLNWVRZVFCQnFTKzB3TGpkaW9rT3lITGJaU1ZUSVNFdzR4NGN4cFc1bXNkbUt4UUgyZVB3cHFXamZIbUkydjZiZDN4MWVSSlZzWmtMSzVNZEF4dDU0cFdCUmRDU3FRS0w1b3ZHdUlxc3FOYzZDVjFoZEJLcTJxckNxd2E1NFM0dEpadWtob3NYOTJuMThSMnhERnVmZERMTjNsTG1TYkJBRExQaHg0TUNpMmtpUmJtSGFrMkJDcWxXYVMwRmNXTXRxNFNFRm05bW85NFlYVGNocHlrL3FHMG1zR3NIczJtbGZvRSs3TnN0eTVic2x5MTI1eVV1SmJHbzlCSUFkRzVFMU95YmFYQTVEOEk4ejEvRm12VFViSEJsYVplSWRYNDA5YjdJRGJTRHVjU0NFOFVDbHZjOTZsRk1WMXltYk5JY3B2VHJ5cWIwMGtVblR6QXBObFlBRm5Zb1d0Z1Y3TmFyMmExWHN4cXZaalZHMU1tbFdoa3BkMDIwYWwyQjVvT280UzZzdHhiYWkzaTZjV21YZUdxSGYyMG9ZdVREeVV1Qlk4c2psZjRLQzBFY3haSEhHWHJjK3pUVWg1Z3g3MDgwcHZVU2NSYnF3L1FlUWE0cVFKVnhaWUV5OU9QSmFaY2xydDlpQURMQ1dFRWN3T1pHVGYyT0hMMDNKQlNPd2RvOHoxL0c2cWF5bXl2Y09WdUMwanhOL0ZxRjNkSmpwNXVQSENBdDFVRzJQUExpMlpwdW1tRzJ4akhuS2NTbHU4dkpkbE14MXVKN3U5VE1CNWExMlZ6WTliMzJpRkxRV3A4bHFyTmVISFhNOGg1SjZYaE82Ri9peE9aaUZLVmg2M01QVk4wK0RUOXRmWlV0cDFzcGVlU2UvU0NodU0vSU51c2lsS2l3V0dBQUUrSFVVY0tac0x4YnVLZnNmWDhiZVdlTkdZSlE1Ym5PSkhGZXZnM2JSZDE3NVNGaElhYlU4N2FiVzJ5MmxLVWp6bEtBRXU2TXNDZGZBNGxobFVsKzJSVzQ4Y3R0RTdFNXdtbkcwcnA2Mk1PR1RaQUJFQ201RVJaWEhIbFMyK0l6SlJ3M2ROT2JtMGpsaWhTa0pWVGtKaGRQMk9Nc3g3RXcwNjB3MjJNY3ZUdzNWRzZGRldHN2l5cmNqN0QxL0d2SjNOeWtGdVRZbmQ3UHA0WEVsYUxqRldsNERucCtFT0NBTWVXbzREa3hsc1NyNjIzVDJwSGpUMTFsUEZMTDBnd3JJVm1QQ1pqb3o0bmViYXpzbVd0VzZJS0hrR2owdlNOa3pUUzhTRTlQT2tJNGpNOUJZbDJON2p3L3NQWDhhZWw5WkxWdzAydkRucjRuR0dsMVBaRFVxeHEzVzdIa0U0b3ZJRlBYQmhrUGFoWkZUYjFJZkNreW5hYXRjbHltdFB1WVpzVFNhWWlzb0hJQStNL0RjQmlkWXptR1BMMVJId3F6dThLWTE4dnp2VFVyR3gvU0RtWXY1L1ZxY3JzVG15Y245UThYV3IxRzRVeXlYTFlHbGhhZXpIWnVTS2RtTU5oKyt4VUNWcUFyVS9QZmVwS0gzakVzN3l6RnRhRzZRaHRzQllGRmVhSnlBbkI3UW5sdEdYNURUTk4zUmxidU9TdWx4K3IwMmQwTWRQSzFJMXZpTUhhOUFYdmplY2ExU3p2amFSWHNkb2ZudFJ4ZzdIWVVXWG9TOThmdzQ3SjhZU0VUNDdzVjJMY240eEdvWkZlOGNtdmVPVFR0N2xybzNDUW84VjF4U1lyN2xNV1Z4ZFI3S3doS1liS0syQlBaeThXS0pBcVZja01WTHZMaTFMZmNXV25DaGR1ZExzUlhTNGZXYWZlS1dSSU5kNE5kNE5kNU5kNU5kNU5kNU5kNU5kNnJ2UW9TazFQVWw1aFEydldKd0xoWjgrOU43N2ZiWFZSNUxhZ3RJL1BYQnZpeHBxT0U5WTNPTEE3TVY4SW0zWk1kY2Urc3JVM1BqcW9QQlJsb0RxRjJSbFFOZzVtd0t6N3ZxcE9ueUtic3JTUzNBanRnSkNRbXZYeUhKQWJUSXZURGRTN3V0MVMxcmRWRnQ3enlvOW1BVElTRzM3SWMyNWZTNmNwdGlQSlBUczlCNDEvREpSc2s2ZmUvYjR4b1BtdU9hRWcwbVFLRDZUWEZUUVdLeVBHNmdPTjNGc3g1ZGlkNDBOUFQ4NnY0ZFF0OE9acHB6OXJzSFdRZHFMbzV2a3N3SFZzS2JlUVJJZmJMTjBrb3BqVVRxQXpxQUtVaThNS0tKckN3a2hkTEFDdVcza1I2Z2VIQXI5TlNaTGJLWmQ2VlVtWSsrVzJsclZIdGFsMUV0clRJR0VwM0VDYVA1T25sNWlLSEs4SnhOc0I1cDhBOFk2M2x2YlBzUzhPSjhHS3gyQlNnVXVxRkprVUpBb1BDdDRvSHQxYTJFU2RLdjRvZFB6MnJXc0hUem9SSUhQc1Qxbm5ETGgzeWJSaE1WeVBHV1hiVkhkcDZ5Q2wyWjRVcUJJU0ZNU0VWeFhVMUZ1YjdCWXZpZHpGeWl1QkxxRjF5emp0NTA0b0pUSnU3TFZTcjA2NHBiempxMllienBpV25tMUJqb1FFaFBaeXBWVC9xdE9mTHJVQTJ6Tk84MXA4QThZSFBVQ09kdGNDSkxmTWVUbXQxQndpZytxaEpOSmZCT3JFQmFMQzl3cDR4ajgyZTNVellYYjRqdkNmaXZCYkpOSjYzeFlSQ2I1dlFrbEVYd2xJSWNndE9CKzFKVlR0cldtaTI0MFdwYnpac2twYjR6eW84aEx1YUl5WlZ6ZWZwdHBieW1MUTRwVVcwcGFLVUpUNGpWdytyMDc4RmFrK3EwK3JEcVZlWmVVYm95RmJISVN0elN4ejhaN0I0YnNqaVJtRHc1VVYwS2pnZzBLUDV5OEpDb0RuSTJOZTZPZXFldXFGYldJSXpKSEpueGJzVm1pYzA0eWhhYmsyRzNOT3VqT1AwMVBWdzQ3Nnk4L0V0WEVSR2pJYUhTczh1M1BndVF4THNjdERTZmFzWk5YU1FKVWl5SVBGU1BNbE44U0s0blk1YVZibUhCejhCSUFja3RJRXU3aE5OM2QzY3hkbVYwaVV3c0JhQ0JnMGNaOUhodVlkRzJSYlhDdUl5cmtsV2Z6UnIwVTRCVTFmRVltcDJQYVhYdUJvZGRVT2xVbTFKM1MvOEFIa2pyZmNCeXhxMnlmOFZmVjdZa1Q5VW1QeVI2K1Rkb3F1S2M1QVZtTXl0VGtDSndFRHpEOEZ5R0pXbmxia0w2NHJCclljU3BUYkNKZHpVdWxPTFdXWXp6cFRhbGx0eTJPcHBiTDdaUy9JUlRGMWVRVVhaQ3l6T1pOSldoWXZMQmJlczBpazBGRVUyNmFTdlA1Z25rNDhCUzFaTzNsZW1lRzlwaHpiTGQrTUg5ZW9EbVhwOXZjLzhBNThyVUNmMTJnL3l6OHNkZFNLeEdnRCtTMk1JOWZKS2QxZHlaS2hFYkZKWlFGWXg1dU9WOFoydjZiWGgxUjU3d0tsWEpEQWszZDUwQXJrT1I3V3BkUnJVMmltMmcyT2RacmhwcHlFeTZIN0sycWwyVWdPVzViUVE0NDNUc2hUZ3RvSmtOWngyQndvcHB3TEg1VTA4ckNWbkpyMHY3WjIydHd0U1E0aFNYSFVKVGRGNzVPbkJYK1BLMUQxdFovbVp5Mk91cUhPVm9UdWwvNThvVm10eHJOSHpmUzlwSERzNmdpVS9QYVFpVmNYWFFVT3VLWXRiemxRN2EyMEVvQ2F6NGZWUUlEMDFsc1Q3cUNsV1hWUW9TM2xSSVNHVTFtajJOSzJLUXJjbjhvYWwvRFhxZWx4YTQwZFE0Ym5mWGdCTmVwYXk0cXdJS1cvVHl0UWpuYnVVdEkvWUNhMUt2ZElzYWY1T2VYcjVXZlBDVFRpMG9GMWtOT05OSGFyOWJxbUxZNDRxSkNiWnI5TkU4dkFSaXVRRDgxbGdTYjB0WWNjY2RWSHQ3N3hpMndJTGJhVURJeFdlMGRXQmhINVdTbktWRG5YcGpjSDdPaGFqWXpTck90TlI3VzRGeG11R2p5aDF2N2U1bU1kcnlaMGZ1dnRPS0t1ejZYNUZpUmwwZ1o5ZnVISktHZzllazVrWEJUcGJRNjhTZ3BWYUdrQnRBNWVKU3dtcFYwYWJFaTZ1T1Z1Y2VYRnRqeTFNV3R0czhNSlQyRHdwSE52NGZ5cmc1UHRFVmo3SWRaTFhGWmtNbERoUWNiRGh0c3FYYlkvQ1R6KzNCcVJPWmJUUHVhMWxTbkhpeEFlZE1hMGhBWmpOdG01L1ZXTmY3YWVuWWV3ckNhbDNGRGFaTTExOHBiVXN4YldwZE13R21nbEcwVWVuWVBCak5NdDhnTUQ4cWFVTndjWnhSNWZaSk9LVkhhV2U2UjY3bkhwTVdPazhnTTh2dFhWaHRFeTZMS3Q2MzNZdHBLM0k5dFphb2JVMG81T2VkM1FVU0xJdkVuSEt1V0ZZUW1UYzIycWtYSngxUTRqcTRkcUs2alJHR2EzaXQzUE5abzlQQ2tacHBvNUhJZm1NVXRvS0RySlQrTmNhNHlKVnNXRHdsdEtUUGVicG05T0pEZDJiVlRiN1RnVGcxcUJHRVc5V3lZbjRNVk5uTXNwbXozWkN3RktxMzJndWxOdWFacElBSGtDdXRNczVwTFFUWHArYXhXS2NaU3FseHlLS0NPejEvRXlJeVhBYlNoVlBXZHhKZGd2TkJDMW9VMU9mYlhMbm1VdzByWStMMmdOeXJzNjdSS25WeHJZdDB4TGUwMEFuYlE4Z0EwRUUwM0dKS1dRbXNVZjhBZ0NnR2xSZ2FYRklwVFNoV0NPMFZ0ckZZOFErOTVWbkZMd3NQMjl0ZE8yczRlaXZOMGMxK28xSHQ3anRRb1NXa0E0VHU3TVZqdHpXYVNsU3FSSHBMSUZBRDdERlkvSzhxSXpSYVNhTWRGTGpqQmJVRGc5bTd3NDdPVllySDN3RmJRUXFIRlZTWWtaTkFJSFptZ1JXUldhR2FTMlRRajBJNG9OSUZCSS80L2FLTFNUUmpwcnU0d3FKbXU2S0ZkM1dLS0ZDaG5zeFIvQVlyQnJhYVMyVlVJaE5KaVVJb29NSUZjTklyYVA4QW1pa0d0Z3JoSnJnSXBVZE5kMnJ1MWQyTmQyTmQyTkdPcWl5c1ZzVlcwMXROWU5ZckZjNjUxenJuV0RXRFdEVzAxdzExd2wxd1Yxd0ZWd0RYZHpYZHFFVVVJcWE3dWl1Q2dVRzAxc1RRU0tIL0FEUjh2SGkyaXRvcllLMkN0cWEycHJhbXRxYTJwcmFtdGlhMkpyWW1zSnJBckFybFhMczVmOW5qenNlWmlzZlpEOFhtc21zMW1zMW1zMW1zMWtWa1ZtZ2ZzczFudEtraXQ2YTNEUGsrbkVCT2ZOY1dsRkJ4QnJPZkRrVmtma0ZxQ0FaN0FQZm1LNzh4WGZtSzc2elhmV2E3NnpYZldxNzYxWGZXcTc4elNKektpQ0NQQk92RGNaMDZpUmozalRYdkdLOTR4WHZFSzk0cTk0eFh2R0s5NUUxN3lKcE9vMGxVSjd2RFgyRnljTE1jM3Q3Y0w0K0RiWGkreDZYbWU0bVVMbkpGVzY3dk9PcCtIeUxqS0RES2JxNGlSYjVJa3QrWnFsOVRWTjNDUWt4N3hKQzRiaGNhN0w1S01kbE4wa2d3NzJyZTJkeWZ0aXRJcmlKcmVtdDZhM0N0d3JjSzNpdDRyZUs0Z3JpSm91cEZBZytYZkZGTnZjZmNLK091dU91dU81WEdYWEhjcmp1VngzSzR5NjR5Nkw2cWJlV2xjRzhTT0pGV3BUWGJmeVBhUkl6bnhiYTIxZ1VuNHJKOUg0SEZodEwxMVpicGQvWVNXcjR3NFdIMHZKOER0eWFhYzlyeDZqUzBQaStuK0ZublZrK2pkT0VYSmU2WnVxeG8zeVI4UGprT0J0dTd6UzY2VFZzbnVSWElNb1NHdkwxVzVtU0ZHclcxeHBUS1FodWljRFUwakx1NDFhV1MvTGFUdGIrMVg4RjRtdk52ZTBwRmUwcEZlMHBOZTBwTmUwWlZlMHBOZTBwTmUwcE5lMDVOZTBwTmUwWk5kL2ZOYWFsTGVQbFh6bkRjYk9leEtDcXRocmhtdGhyYld3MXNJN2JOSDRzbGxPMUI3ZFFmMlN1dHE0Q2xnV2l2L0hyL0FNZXYvSXIvQU1pczJpcnV1SHN5S0hXeWZSZHNxVWlNaTdYcFR5dU1WRlhPdHhUVUM2dVIxVzJlbVV6MksrRzZMVjN4U2pXaytiTjgraUhaWS9vN2s2R1lyeXQ3dUswKzBsS09NM2pqTjF4a1VaRFlvZnFIYSswSFVYUzBPTnVFRUVjcXRGeU1WNk0raVExNHp5RGx4WWFXYnRHeGZaTGNseE9NMlNSSFlXTHhFdzFkWXpyajdvYmF1ei9IbFZacGJjUndYK1BYdCtOWHZCR3IyL0hKYVdIRy9zVDAxQjlaNGVuWnlybFhMdDBwMThxUTBIUk50ellaZlR0ZHhXbllyTDdYczJOWHMyUFhzeU5Yc3FMUnRVV3JsQWlzc0x4dXJTMGJEWGcxQi9aSytJSHdjcTVWeXI5SkdLSFd5ZlJkaWpnWHVlWkR0RE5KYWNVTnBvMWJaYW84bU04SG1xYytDNC9WcTY2UitSZlBvUjJXVDZQVkxtSTU1R2t1clJYZUhjY2R5dU83VGI3bkVnL1MrQjFBV203UUNGSzVVT3VucDRhcEpDaytKejRMd1ZkKzU5cG9WWTA1dUdwSkhEWUpLam1qMllyRk4vTXQzT0w5ajZYT3hybFArN1NxOTIxVjd0R3ZkcFZYUzI5eVdhYlR1V3pZRkxiR25UWHU2YTkzRFIwMHVyUmJlNWVXUlRxTjZMc3lXWmxhYWxjSjdyUTdTY0oxSEp3MVRMZkVmdHJJWmk5bm9hdi9BUFpING9EYkt5bURhNkZ2dE5lejdSWGNMVFhjTFRYY2JUVjFqUW0wSHFQaXNuMFhaZkpYQmFKeWFzRUpENldvVFNSZWJUaERpY0gwMHpMS2tVOTh1NC9WcTY2UitSZlBvUjJXaFd5QnFPVHhaSHI0Vy9td2ZwZkM2MEhLdlVkTEVuMVNzb1ZwK2J4MmZFdjRMM3lsNXBxTzQ5WHM2VlRzTjF0SHBiWHVGS3Uwb3lIcWp4MXZBV21XYTlrUzZlZ1BNQWdaU1AxVzM2VDdMR2ZCenJWWHpsZFluMUVZZnNZTllOWXJGWTgzVmNYa2FZYzJPV3VVSDJlMlU1d21ycklMMGlyRkhEMHhBMnA4R29QN0gvVmVtVFdUVzQxdU5ialJPZXdmRlkvb3V6VlR2NnFBeXJUN1d5SFVwTytQSlR0a1ZwbDROeWgwZDVvdVhLWldrUGtYejZBVW40blpZWnRiemhjWFZpZ3BsVWJLd28zVzJzTVJWNHcyTXFnMmxPeGhHeHZ3cU8xTjVkNGt6c3Rjc3g1TWQwT29QaFYwdnYxWjZhUHh3MWRkU3AvaSttZWZ4RnRzclZhSVFaWUhTdFVmU3A2TmpLNFBLUHp6bng4NjU5dk91ZmdVc0pyak40NHlLNHlhNHlhNDZNNm5kU3Q0MUZHWDR6eWVEeEUxeEJYRUZjUVZ4QlFJUG1YVmpqUnBEWmJlSElhZW03SGdmMDBlUTFCUEFiVWVhY2s2YWg4S1AyNUFvdk5pcmhiV1pUL3NOclBzTnF2WVRWZXdtcTloTTE3Q1pyMkd6WHNObXZZak5ldzJhOWhzaW9CYVlqdHZKY3IwMUk1dW0xR0daRUJPeU5SK0c2REZ3cXpuRndUOEN1bDArdVBYUi95TDUvWGpzZGtMZFIyYVZlQ1hhMUsrQXovbUNuZEpqSTJ0ZUgwdWtnTlJYVmIxOWc1R3czVDlYVWVCWFMrL1dHdEo0UzJWb3JVamlURTlJRFhIa1hDMUxqQ3hRaTY2NWNZN0MyM0E0ak5hcTVSQWVUSHpZbnlMdk9WRFVkUk9oUTFNc1Y3ekxyM21WWHZNcXZlVlZlOHFxOTVWVjd5cXIzbFZYdkt1dmVWZGU4cTZPcGwwenFKUzNFbktOU0tLV0ZTWHdlOVAxM3ArdTh2MTNoK2xMVXM0cFA2VDNsOFYzdVJYZW42NzAvWGVYNkVsL05wSlZDOHRYTk9vNFd4ZFIzQzA3YTV5WDJQUzV5UkdqeW4xUHVrZnFzOFV2dnRJNGJmWUt2U3lpR3VjL3VNMSt1L1AxMzErdS9QMTM1K3UvUDEzNSt1K3YxMzE2dSt2VjMxNnUrdlVtWTlXbnBUcnF6OEY5K3VxRjlWRytSWHBlQmk0MWFmN0ZQd0srRzZmWHFyU0h5YjUvWGpzZGlsRFhaQWU0RWtPYm10U3ZiNU5hZWFEazdvUENhMUhNUEV4WHFwdGFSVWRXeDIyU1JJaitCWFMrZlhtbUpUckFNK1JsY3B4eEhwWVA3R1FoS203ak9UR3BieTNEcCtidmFyVm4wZ3FLTXZSZmxhc1ZoUjhyTlpyUFpEK3FhK1ZxZzRqckl6NVdhelFQT3ovQU5mNkR5NThjU0k4NktxTTRtbzh4VENvbDdZWEh1ZHhWS2VOTk5seGRuZ2lNejJpcjBNd3kyYTRTNjRTNjRTcTRTcTRhcTI0N0FDU0dsVndWVndWVndUWENOYVpTVXVyK1hlL3JxaGZXUnZrZGw2L3M2dFA5Z241YS9odW4xcSt1a1BrM3ordkhVZElrSkw5dmRzYnZIbVJ6SGNIVzIzSWR4bHZGeCt0TFJzVWZGTmVETE0xM2pTYWdzbDJUT3RpVlEzMmkwdjFzODhzTFljRHJmYWVsOCt2TkpTVFhETkZCQXF3ZjJTaGxPb0lXT3hpUXFPOWE1UWt4OVhuK0ttb0EzU0dCKzNxaEpMaFpYbnU3bGQzY3J1N2xkM2NydTdsZDNjcnU3bGQzY3J1N2xkM2NydTdsZDNjcnU3Z3FLd3RMN1h5YnZBTTl2M1pWWHV3YTkyRFh1d2MzQ3g5MWJ4ZzQ3SWtmdkRvMDRWbzkyRFh1dXF2ZGhWZTdCQmhOY0dQNXVwSVNuRTRLU2VZU29wRkVjN0JiVkZTZVE4RGlBdFBzMXFub01kbGhjK09oYVo4TXBnb2lTVWV6by9EdVFDSmxXRmh0MXhOdmkxM0NMWGNJMWR3alk3akdOTXhHbVNmaHY2Y1RLaW5iSmdyM3hhUFM3NE54cTFmWG8rQi9raTVjNVo1bXdUbW9qRnl1N2J6QkF5bnJhUG9pSzFMRU5EcWxha3BOUjJpNHUwTWQzaStGUndOUTNBTFY2MXB5S3BUcXh1YXZrUlRaRlp3YkJjRUZ2UGFlbDcvQUxBOWJCQlErbjJVelY2aElqeHZTd2YySjVDNU1jZU5LWlV3NThSc0V3c1BhdFdGUms5TFNNeTJ2Z2RhUTRlNnMxM1ptdTdNMTNabXU3czEzVm11N00xM1ptdTZzMTNaaXU3TVYzVm11NnMwWXJCb1JtUlhwNitEVTB4SlZubDA3SXJwYWR0Y3NQeHMrREhuUEpDbTc3SFEwLzY5bGpqSWZrc3RwYmJIWHhYOWUyR3I0aG5Hbkc5c2RYeTd4L1lVaHhUWjcwOVhlbjY3Mi9TcFR4R2tYRnVLMjFpdFRORkwxRGtxeE9CeTNVNm9KYWxxSzVOYWJiQzVvK0diSVEwMUxPNlI2NXhXYUZEcmFQb2pVNWdQc1NtaXk4S1BUVGNmalNVamFQQjZYYWJ3RzNsbHh5b1RKZWtRWTZXV09odWtVU0dIVWNOMDFIZExKMDlPTWx2c1BTK2YyQjY2Vk9XaW10UmorSWVtbi83RTlNYzc5RVM2enRJY3RkdkxoMVFPR2xQU3hqTXB2a2s5ZkRpc1ZqemJ0UDdzSlRwZmQ5SXNjdnJrc2xsZFFKcTQ2b0QvQUJtZlBVckFrWEZsbXA5L1U1VDdxM1ZkckVoYkM0V29sSXFKY0czMGdnK0hOYXBtN25CMXJUazlKQy9sM2ord29ESndjWVZXRlVwQ3NhUFNRZXkreEErd2V0YVpuaHVrT0pVbStYRUpaWHpVT3VsWXVLSFM5UnVLeTRqaHVIcTIyWEZLaU9KVDYxWi9veU9icXdoRjVXaGJ3NktyVER6YUI0RDB1dHhUSFJNbXJrcnBJS2pwNjJobHM5VDF4a1gyMVY2MUJsS2l1VzI3cGZRa2dnMWZQcjYwa3NKYkw2QldvWGtxajQvVHAvOEFzZXgxb09KYXNyU1htMmtOalYzenhXbWtibngwOWZzN25ja3gycGNwY2h5Z0NwZW5vQWJSZDdXSFVxUVVLSndMWmRGeFZRTG0zSXJPUjVSNVV1V3lpcE41anRDZGZYRmwyUzY2cnNTMHRaOWxTZUV0dFNGYmF3S2pTRk1WRHZteW1MaXc2bER6YTZLaG5OWEdXaU0xS2VMMGoxeUtpdWxoeUhlMHJZdWFnNU1yVDhkRDd3dHNRSjluUmE5blJhTnRpbW84WnFNQmcwYWNTRm91MEpjWjRkVXFLVkp1TDZFdU9xY0o2VytLWDNMWXh3R0tjU0ZvdXNOZmZZdG1mY1ZCczdiTlh4cENMZU95enEvaE9PSlFMeGRNaHdsUnhpajBpdnFqcnROMlMrbkl4UlVFaTRYUkRTWnNsVDd0WUpObHRhM0ZOamFuSGE4Z09OM1dFcU5Jb1UyNlduTE5jZzgzbmxmZnJmVmlVNndQYU1pbkpUam9xd2YyUjZDczFtdDNMVWozRm1DdEt0L2FQU1dtUmRMN1RraGJ4d01iU28yaTFLZGNaYURUYXdEVjd0dTF3NXlhanZyWlZCdmVBeE9aZUFXa255SjZYRk16bFNFdTVKck5acENTc3c3WSs2NUJ0alRDZHZLNldkRDFTclk5R0djSG5SQnlseHhJZ1M1QWRnRi9aUHVUTWRGd25Ma3VnNU1lT3Q5VW1BOUhGQW50Z1RWdzErOGJ1UGVOMnZlTjJ2ZUo2dmVGMm90NWZmZGJ5VzZ1a0h2YVo5dGVqcjZWdW9HbzBOeDgybUFsaHNkcGpndWJSbXIvQVAxNHIwaTNKdU5DdUYzVS9TOGxRNWx1MnlIVVBzcllWbmsydFRhclRlRlVsd3JSZVo4aEtsdXFVS0hNMmEzRnhiS0EyMzI0b2pJbHhFUG91Y014bmMxMXJUa1E0NlZmUHJUU0VGVmNKZGNOZGJGVlltbHBuOWFlYzJJVmZsSVVyVVJwM1VTbEI5NHZPZjYwMjBXNHcreGNWdFRjN3k4MnVUTWRlVVRtZ2NVbEpYVmx0YWxPTnRoQTlQVjFDWEVYYTBLQzNBVXFGZGFqeUhHcXNzcVU4OG5PM3htdFJRdUloU1Nrc3NGd3NXVjF5b0ZrU3lHMkEzUkhPc1U4eWwxTTZ4SldabHVmWldRcEpWMDB4QkMxRk9LdlZ0Y2NwOXNoVExaZGNzZHI0SWxSVVBvdWxsZGFLMjFJSXJGZE96QTdlVmFaaS9xOU94OWhMNlpOZ2JjSjB5Y3M2YkFNU0MzR2I5UEZmLzY1TkFaTHR2TGtGMWtzcklPTFJiWEgzRzQ0YmJ1ZHNFaEVtSTVIV2xzN3JOYk9iWUFSUGhJa3RUb0RrZHdJSnEwMmx4eHhwa05BZFBEamxjSVNaTGR6dGk0empTTjd0c1lETVUvRmV6LzZIcnBxS2w1UHN4cXZaalZlekdxWmh0dEtQUmFRcEY1YTRVZ1p3UldLZ1JpL0lpdGNLUDhBWWtacTl3ZzYxSWJMVGdGUjRMejZyZmFBeWhBQVQyK3UwRTNpeWgycFVCNWdWRmFVK3UzUkJHWjlmR2FmYjRyWXNDZVBHdHpMSVNoS2ZJVTJsVlRMU3c4SGRQcEJ0c2JnTkd0bFh1MDhkVmxzNGJLZVFvOHhLdDdEOU9hZmFOSzA1UjAydlB1MnV2ZHRkZTdhNjkyMTE3dHJxMXdqRmI5UE92RFpkaG0xU0tGcGtadGpKYmozcTJsOXlEWlNsVVpwTFNPeTV3VXltNDFqRGJ5R3cyanNtUlV5RVJiS2hwNXRzSUhyNUR6S0hrcnNxVVNrQXBTZXNtMU5Qdkxzak8yMncweFI0cjViMXlIalpwR2ZZc2pMRmdkTld1Mm9oajAreVduY201V1hqT3dyR2hGTlIwTmpGQWVOeGxEaVpOaFpXcUJhaEZlOVBKeDVtS3hXT1dPekZZd096RllySGtZNStUanhIblFTQldCV0JSSFpqbDI0SDJKNTE2ZG9IbG43UDE3VDVlT2Y1TS84QWZCNi93REJIL2dENFBYL0FJSS84QWZCNi84QUJIODJmQ2ZCNi84QUJIL2dENFBYN2pORndDa25OYnhsVGlSUU9SOTV5cmw0aXNDZ1FvZU5TdHROdnBXcnlWSGFFdUpVS3o1Q2xwVFhlV3FRc0xIWm1zOGhLYUs4K1BQZzljK1NlemNLem43c3JTS01wa1U1Y295S2V2N0NLbGFpVW9pOFNDN0JuQjZOTnVid2t0M0Y0cmdPNVlsM3BERHNPYWlVUE16NVV1VzFIVDdaaVY3YWlWN2FpVjdhaVY3YWlWN2JoMDFkSXpwU29LR2NWZG4xTXhYTHZKSjAvY0huM3ZUb1BCY1hsTU1TcnMrczJpYTRtUXk0SEVkbWZGZW55ekdGMmVTcTEzVjErVDZEeDZsZFcyMTN0NnRPRnhjYnNjVUVwdXQ2TFNoUGNUSXM5eEV0SGhXb0pSS3U3Nkg0bCtVbFVSNHlHNmRKRGI5OGZEck42ZkwwUlpYSDhjNlFsaU1xOFBCY0srYzR6L0dSNC9UN0cvdXV0clZJY0pLeVRYT2dsUnExOGNDWDg4ZkZLVTZMZTRWQnlGUFZGWGJwcVpMZHhsOTBqKzgxZTh3cjNtcjNtcjNtcjNuRmU4MVdxNzkrZHFmZlJHZDk1RTAxcUpDbHRPYndPeDFleEVxL3BaY1ZxV29OOTR6dWNvMUtyOXJtb1lySGFldG9INzArNnJpdWUzWERWNGM0bHBOYVcrcS96S3lHbmIwK2x6MjQvWHQxK3Zic2luYncrNjJWWktWbE5OWFo5dEl2a2dWN2RrVjdja2s2Zmxxa2g1MUxMZnRkZ1Y3WmoxN1pqMXFDY2wrc1ZaVk5zdmk2eHE5cVJhOXFSYTlxUmE5cVJxUmNvNjFBNTdOVS9JOU5MNTdsMktBTlgyMmNRdUpMYXJYSUxEMFpmRWE4RjRrY0dNcHpLcmF5WDM0amZEWXAvazA4Y3V4dWNpRjlQNG5GYmExQk9LMTU1MjJNWHBFZG9OTStLUkpiWVRPMUR0Vjdma1pScUo0VmI3Nmg2a0xEaWZJdUVudXpTdFJxM2U4YXF0ZDVNbC9kVjRpZDVhOWp2cU1tMVBSMnZXMk5oMlZIZ1IwbzRiYUUzSS95d2YxMjFzS2lYMjE3YUlKVnB4bDV1dFJqL3dBM0ZZcmJXS3gyNlk1U1JXb2VWeEhVY2pZSlFlaWRsNGtCaUs2dmlySTVXUVptZjV1TUZNdHRkbFF3dzRuRGlVRmEwMnJoc3lFSkJnUVc1VlFMTUdYTlFqRXRIeFhNRDJPZW1sZnEvU1g4bDRmeU5wSkVWNDEzSit1NXYxM04rdTZTSzdxL1hjMzY3dTdrUTM4NlhqcmJPb1RzaGxSSkdhOWF4UXpqYldLeDJjNnRlZSt0L0M3TVliT29aYkw3UkdEYUxvSTBabTROTGE5cHhjKzA0bE9YS0tVUzBNdXpMWTFDYVVtNHd3UGFjU2t6NDZpQ0RXZG8xSk40amlhMDdFMmdka2o1TDN6SW4xRUg1SGhKNVh5NUpiUSs3eEZzbzRxN0xBRWRrSGxkYnNtTXVCZVdYUWx4SzA5a3RaYlp1Y3A1OTdITXBOZXFWYkRweWJ4V3ZUeDMwZnhGL0ZXbS9yYWtTRU5PSnVEUXE5em0zWW1PZHNXR3BMZDFhMk9YUm5iY0ZCY24vY0M1TklZZXVjZGJVZnV5SFlVdHR3M0JudlVaR25xOTNSVjF0d2duY0tZYjRyak5pQ20vZDRaaFdydXpsYWgvc1BXdE1TU2laNlZxeDg1VDBWMHNmMWc2VnFpWndrWTNHeVIyeXFkdzNXQ05xcmM5d0pNTmZHWjFDUDVyZngzVCtuNjFwVWZ6UFNYOGw3NmkwQUdTcDVpTWoybEdwVnlpZ09YcUdtamZvOU9YMWswL2VTYWkzRnd2d3BLSGtvQUNidkhNcGsyVllwcXhLV1piWGRuYWpNR1E0bXpPRlBzSjZoWVhjZXduQVBZYmxleEhLaVdkVGI3UXdtK2c5NzlUUTZ0dmxET1RqblhPczg5NXJuWE9yYU56ektTR3IxTkRETHFpNHNkTFNuK0VCMlNQa3Y4QUoySjgrQVAyT3oxN0w1TjRETHJxbkZoUDZySGIyd25ISzd5dTd4M25DNDZNZzZiRDFEcFI2WGkwcGVOdnNtMVhzcU9XN3hGVEdsRVlyVDZ5bVduNFBIZWh1aU9mSFdtQm1iV3BsbE1rUEtGS2NLcUZHdDVBNHE4RE5IcUhLNHByaW5Pbm5GZDZ4VzNzMVY4Tld6Nm1OOG5zOU5RLzJBNmtHb0RuQmxNdTcyMzNOamQya2NlVTJqY0NPVmorc0hSMGtOM2xhMXl3cmx4bE5vNzI1Uk5Ea3JUc3pMT292cTIvbVhUK21yU3YxdnBLK1E5OVJhZnF0VGtwSEVORlZaSGFHMUxxTEFrTE51aHpHbmdQMGJjamhpcHI2WXJFOTdqdm9CVXF5VzRJYkFBcWNzcGp1WGVTRnhickpYSVR1TllPTVVlU2JzOFhKZ3JGTGIyTnBTVnFOc2VTMFJneG1DOHROZ2ZVbjNlazE3dlNhOTNwTld5eHVOT1hTV0lVV1hLVys1bmtuNFJLTVcyZThpNjk1WEtYcUphMm5Edld5ZHF2Yjd6Sjk1WHE5NVhxdGt0VXBnbkF2RjVEUmxTVnlGcDVxc2xwM2xwa05wbFBKWVp1czljcDJyVENWTGtNc0paYTdTTTBCaWxFSlRmWlBIbUtyVGNZcWU2SXo0N2duZEhsRGJJclNhUDVKNjNhMk95M1BkK1JpUmFIWTdkTU1GOXhPbjVTaDd0eXFuUkhJVkdyYmJYSmpmdSs4Qjd2UGtXbTBQeG5oMG8xcXY0RDF0ZjFNZjVYcFI2YWgvc0cvaWtSOHh4eXF3UDc0dC9rY0tJZVpncy94Rkg5Vm0rc0hTdFFXOXgyU0xSTG9XdDRMVGFEajJDOFcvWTBqaTJtM0NMV29mcTIvbVhQK2tOYVUrdTlKdnlIUG5XVWZ6TldmRUt0bHI3eTJtd3Q0MUJiMFJVK3RnYWFjYWJhUWtFYyt4MTFMYUwxY1M4OVZndDVrdXRnTm80Z3E1dUFSRi9IYnNkNlN0SnJlS0JCcWM0RzQ4bFc1OE5uZ21vZHVNNkxFc1lhTndUdzRTL2l0UDFUWHl2QmY0M0hpclFVcXh5VDBtZjBpc1o1VnlySElVUU03YTJtck5udUY0ZmVSR2ZKVXRLTnhzMXFLMXNNaGxMaXdoTjd1UmVjVXJJaHhGeWwydUVtSzBQQ1RnWGU2b2JiY081Y1JoVDdscWdDTTNXS0hpbERMZHdUaVhXa0VIUHJnQThoVjV3WVMrdHBkUzFJOXR4ME5ScjJtUTdxckpjOWRLT0JLTHpkanZpNmdlYU5zbGQ2WTdkVi9EVnIrcGovQUN1dzlOUS8ySHBCWjd4YUZwMkxzVW90U05UTzhSNUEzRjF2dTlsWDFzMzFnNmRLVklaU3J2VE9OUVNkOG9PS3F6U0VDRTdKYVNHbHBjVHFINnhIekxuL0FFaDY2VSt0OUp4eEhjUDd0akg4dlZ2eHA2VzI3aUkxN3hKcTczSk00Rk5XeTU5elFOUnB3alVTRktqckRyVDd5R0VYaTZGNGlnT2RsUWxNQyt6M0daQnVyNUx0d2ZkYnBDeWhYdE4vSXVVbk5pZFU0eE1hN3d5L1lsNXVVUXhMZjZhV09ZYXVWWGcveEYvRmFmcW12bCtCeElVaVJiRkxtM0JqdXpxT2tlT0pGck9ubWlyM2VqMHJUOGNOTy9wY1FNdXg3SzI0MTdBWnIzZlpxS3dJN1RpRXVJdkZtVWwyMDJjb1UyQWxKSVNtKzNIQ0NTb3NNcWRYWllBak5TSkxMS1kwaEQ2UEJkNUhCaXZPRnh4S1NzMktFbHBudEZldnAycUc0WHhyaFRxMHNqYkdxUmZYRzFydnp5cWtYSjkyZ2Mxa2l0eHhaUHF0VE1oVVk5WWtzc0pkY0sxd281ZmV0N0lZajl1ck9sV3Y2bVA4dnNOYWkvc0sweitxSGQyQzNManVsdCtiSkx6MW1qOGFUcU5BYWhPZGJMOVlPa2o1TnplV0pQZW5hS3lzaWt2clJTNVRxcTB1OHB4dS9Lek1SOHk1L3dCTWV1bFByZlM2SzJ4RDh6VDQzU05XL0hSeU8zMXJsU2ZtV3ZIYzlWTFdFNTVVT3RuK2cxRTJwVXZ1N2xjSllGRG1lRXVnMHZkcDRFUnF4V3F2cC84QU9sZm9WOUx4OUl2NHJUOVUxOHZ3N0J1MUh5bW82V3o2R3ZSMzVEL3oydm5RUi9HOENnRFFISlJ3TDNjdUcyNjhwMHN0bHh5MDJwTExkOGxPUmt5Smp6eTdKY0ZOdnBXRmp0MU9sYTJ4R2VKczl2VXBUU0FoUGFPejA3VlZxS09wY3Z1cnViRTNzaW5ycUprSWVUMDJuQTVDTTF4blkrbi9BTk1PME5zS3ZUSWNpT3AydTRxS3dYMzRFUnVLbENzcDdkV2ZEVnIrcGovTDdEMDFEOWNldWxmcDlUUmdVRHJXbFkzUFZQeVYxWlByRTlKTGZFYWxXRlMzUGQ1MnBrUlVSeW9sbVhJYU9uWHFzdHZNUkYvQUV0djVsMVAvQUkvcnBYNjMwMUc1c2pWcFJIN3VyeHpUOE5udHpUN0x6RnRZcFNvVDZGQUljdHdDcERWc2o3UFpzUExUYUVDN3hCSWpOMjFhblpMSlljVDF0Qi84OVNBcXVDM1Z4anRJaU9ZM1c4Wmxzc05vUndXZHlRZ2RoclZYeWY4QU9sdm9WZEx4OUk1OFZxK3JSOEhpMUw5ZTNWcy9yeDJQZklmK2N4ODZKOGl2WHRkV0cwWFc4MCs0cHhUREplWGFMU2hsQ1FBSjhVU0dyakZNZDBFcFZweWZ4RWRzbVEwZ0c1eGQwV1F5c0o4R1BFNTBla3RJUHRDTVZSblFvVmNMYWlZV2JBd21ycmI0N1VJOGphRC9BRFVmQTQ4MjJMemR3dWw4MVZweUczblVMeTI2dFYzelRUZ2NUMmF0K0dyWDlUSCtYMkhwcUw2ODlkS2ZUWE5yanhWcDJ1TklMamxvWTRFVFZQeVYxWlByRTlLTkd0U0hNeXJQT1phZ1BYZU8yWTF6YmZWY2JOM3Q0YWRDVGZNdDJ5dEsvVzFxbC84QVVrOHRLTTRhMWVlWTZhZUlNQytLS0pGdmQydXpjRmNaUlEvRWREa2Yyd0VTMjVDSFIxcmd0cHErcXpLSFd5NDluZGx6eDNKejQ3WDlhbnBnWjVkaDZhcStUL25TL3dEWHE2WGY2Uno0clY5V2o0UEQ2YWsvc0UxYS93Q3ZIWS84aDc1ekh6WWZ5SzlleVZOUXpWM3ZSY0JKVW9BRTJudXNkSnZVWUZWK2pncnY3TzY5VFJOV2F0ajNCa3hYUTgxU2poRjFsbFRwSkpoVFhHWElDK05IN0I0N25JRWRpVktXNjd2Vm13ekNWam9yRFNmYWtZVmVMa3k1RmNPVGFQcmJuZU83cGszQjU0N3MwT2ZaWXB2QmthZ2xjV1JBVWU4d0IreDJhc0lJcTJmVXhqKzMySHBxRWczQWpucFRsR1VNaTQyVjFiOXNzcW0xcEcxT3FTT0Nxckw5WU9sd21DS2gzVVhKeS92VklrcWtPNUZjUWhKV1RXbStjeHhRU08vTWJMN0xTN0VyUy8xeWxCS2I3SUQwdHZtcXlOOEdCcTFZVklIUnE0T3N0cmNYSXB2bFR3L2F6enROeUNHSkM5OGpUcmpuRVNNaHo0THo5VW5yYlhFeDdXcStSZ2Zic2JOeHZERDBZNTNRM0F6SVJmbUVqMjYwVEh2RGJyaVNGQTFxcjVQcHBmOEFybGRMdjlJNGYxUm51Q3YzZ0tHL2VOVmU4YTY5NDExWjdsMzFOZW1wZjdCUFcyL1FEc2YrUTk4NlA4Mkg4anRQVFVDbHBraFZIRlpGY1EwVm5PNnQ5WkpHS0IycTAzTnlLZCtWTlFwTDRQSWN6WlAwd3ZKMUtrcWpkRFZsU1RLYitDYzN4R0p5VnN1bFpORG5XbjR5akl2RnA0NlZzcVN1QlozWHo3RGJSRm14MU1PcC9TWFZaT240cGZrdHAyb3IwdTFwVk9yM1hXS2k2ZFV5ODAzc1QySHBjTlBtVklPbUZpclRDN216aXNWeUhaZWJhWnlEcGx5b09uMXgzVWpDYjgwWFk3eU5xa29LaW1FNnVtN1BKVlRXblhsRnJUZTAyKzFJaUdRMkZOM0xMRWxUaFZTQVRXbVlxdVBjaW9RNUtWaHkwTUY2WHMydGFnUXRFM3FVeG5GR0RiSFV4anlYYm14TFpreDFNdWhSRkJYNnJCRkxiS1J5ZCtHOGZWanJKL29UMTNDdDRvbnRCeFZyUDh0bjVaNjZxK1g2YVcvcnF1LzBpbWxGZkJYWEJWWEJWWENWUmJVQnBOSnhYcHFUNjVIVzIvUTlqM3lIdm5Sdm13dmsxNjltbzRlOVBBWFhkbkZVTGU4cWhhWkJwdXhTVkFhY2ZJR21YYVRwaFdaOWpNTnJobFNyUERlRDZSaEhwY2JMM2hYc0NWdWlhZjRSWmJTaEhrdXRCMFR0UHJjZFJwdVFUYkxTSXh4aWxDcjVEY2NkVGFwUnFCWm5sT3dvcVl6Zm81YkduSFdrQkFOWHFEM3BEOXVrTjBpQSt1dFB4REhhOGs5UFR5cERZY1FiSWhTbWJTd2lrUjJrallCNEZWZTRKZmNGa2tLcUZZMXBjaXNKWWJQTVhLQWg1Tmt0cGpQZWw0dHhsT3hMRnNwcUUwaExxZjJXclF0YjhLRUl5TGhDNHBlc2tncVlzcXc1SGI0VE9hY3p3N25GZGNrOXdleTFHWEl0UTA4cXZkNWRlN3k2T25uSzkzbks5M1hLOTIxNGhXSlREcmY2UWExRXd0OUhzNlJqVGJaUkFwMXRMaVJiNDRQY1dxN2tpdTVJcnVLS01Cb2hpT2xrVjZhZ2pMWE1iaFBicmVDbUoyUC9BQ240VHBlaHdIdUxFQlN5ZXZhODBsMVBkR3E3dTJtZ2hJckE3TTFtczFMUnhXSWxzU2dOb0NUOXAvL0VBQjBSQUFJQ0F3RUJBUUFBQUFBQUFBQUFBQUVSQUNBd1FGQmdFSEQvMmdBSUFRTUJBVDhCNXg1cWlpMVRCRitaRE12ZEs2aTBSRHl6UWZCM2pZVVdCK0ZIWUdRYzRZUkhIVjlZZUVHcU9Zb290RlZIZUZ4M0JnSGhSNFFkRlJSUlJWV0ljd1VXQlJmRjFSNDE0VkZGRjdNWXgxbDlGQmNYY2ZSRkJjYTYzd0l2Z29MaXkrcm1pNGhncU9zTGk0MkZ2QTNGeHFxS0tMZUZ4RHFLdzRRMng5VVVWSEhId1ZGeEhISEhISEhIckEvVnhqWWFvZytuQzlrNzR6TFJkanZDQ2g3NHFjQzdBcW9zb2g2QWd6S0tINEljU3hxS0tLTFhFR0E0RDlPa3Q4UjNPTTlKeHh4eDBXSXhkQVZIZkZScEQ2WXVZSXRNZUNmYWNjY2YxeCt6VVVXeW9vdU1OSVlCNGs0bEZGRjhVV3NOZFJXUHhSUlkzSDhPd05rUXdjbDZSOXNQQ2pTY2ZSSGhCNmw3cThLZkNIYlh4ZUJIckJCei93RC94QUFlRVFBQ0FRVUJBUUVBQUFBQUFBQUFBQUFCRVFBUUlEQkFVR0J3Z1AvYUFBZ0JBZ0VCUHdIYVBoRDRRNWg0Unh4M0RycTBDS0s0ZHdkMXh4eHh4NGg0VWNaVUc0T1FOaFdEam1EY0hITUdxb29CRkZGRkJ4ekJZTDFnR0VjZ1pGb0RtTHdLMGhZT2FQQ0RTWFNHbWVpTkFWUFJHSlpSelhSeDBXRllCMGhwRHFDaWk4QW9QQWlvOElQQ0Q0RTQrSzl3bU9vb09Bb3FEYk5nb084WWFDd2FqcTQ2T0V4eDRYSHJHR2dvS0NPT2p6R09PT09PT09PT3dieGhvSUxCY01aaXhpRGVNTkJCYTdYSGxVVVVVQTRoaG9JTXJqamd3dkFJTjhpS296aXhaUkZ2a1dDaWlpaXdLZ3VPTWNBdzBBZ0ZwbzQ3VlFhQTRSb0xWRGFCRkZVWG1pNUpvTGphTTZpaWlpaXNlK29vTGphTkZXS0xscUw4RGo3a3Q0Y1ViNDhJUENEZFhIQThJRCtYbEZGNzVZRmVxcm9qQUxqUWR3WEdnN2c4SU9KLy84UUFPUkFBQWdFQ0F3Y0NCZ0lCQkFFRUF3QUFBQUVDRVNFREVERVNJQ0l5UVZGeE1HRVRNMEJRWUpFamdYSkNVbUtoNFFRVUpMRndrTUgvMmdBSUFRRUFCajhDK3RxellnemkrOXFyNFdKd2R2d2wxWTVmZlZoNGpzVldqL0I5cDlDU3J3L2ZxOVVMYmFxclUvQi9oeGR5L3dCL1QvMDloVFg0TEp0a3BWdCtBN0RmZ3IrQjFKWWNYYjhDckVYVnI4RG0zMkhKOVgrQjdFbnFXL0F2Z1FmNEpGeHMwSlZ2K0F0eTBKU3IrQzByWmlmZjhBMkU2Ti9neWE2RVgrQWJQYjZmL3dBbkNtV2l5Mkd6bExvdWFsNUdwekhNY3hxY3hxY3haMU5HZkxaZkRaZUxSMXk2L1VTdzVQeDkvYk1SL1NWaWpqc1ZrMC9ZK1dtY09FamtSWmIycHFhbXBxV2FOVnVhSXZGRjhOSHkwV1ZEZ1phcHlzdkYvU3hhZlVVdmI3OU4reEo5MzlIQmQySlU2ZW0xQjJLVk9ZNWk4alZsbXpobXo1c2o1MGlrNXVRcmIyaGVNUzhFYVVQNDVIQWppaVgrZ3F1aFY5UHYxUHBJK3hUMG1oMnVXUllzaTZMcmRxVVF0Nnh4RjNRckY1Y1NPRlg3bjhUcWJVNFVYcnZEZW4zNksra2srM3Exb2FHbVZZYW1oZFoxRmN0dTJ5Nm1wVFVwcExLMlZIZGRpc1VreHVLcVVuR25xUTl4UDc3QmZSc2svb3RCMkxGOGtoZWhWWkp4RkdlcFZidEp4WGtid2h4bHF2U2pMc1J2OTlqOUpKOS9YMU5VYTdqc2FHaEgwTGxrV1JvS3U5S1hZbS9UK0czOTlqNCtrcjZUS1RkeXhTS09HeHpsNWw2dit5azRsTkRhVnk2S28wRnZXZWR5NkswTExla3U2SDZhVlJmZTJSOGZTTDBxRGFkemhUWjh0bDRVS1RzYXJMUTdGSlBLbm82ZW5UMUl2M0l2MisrUjhmU1lmcWFtcFJqYlNxVnduWXNjVWhjWnNyOStqeE9oVGJSYWFMUDBrdlVUOXlEKytRbDFQYjZQQzhlcllyaDFZMDhLVlBCeFlFdjBVbGh5WDlaWDlMNGNOcWhYaThHMG03RDI2c3BOVVpXTktmUzBmVDc1WHQ5SmcrUFgwUnl4L1JhS1hxVmxCRmFVSlFqTnhSUnZRNFJSbEowRTkvOEF2MVpMMysrU1ExOUhnZjQvWFhOdkRkMlVSeGlsQjBGR2Ira245OGtuMkpMNlBBL3grdW9WaTVVOG44anBJcEdYOUZuOUl5ZjMxdnY5SGdmNC9SM05mVG82RzBwVUtyRnNhK2duNmtpZjMzNGk2ZlIvK24veCtpMUtRWldUK20ydlVrWW4zMXhaaVI3RHlxL1h3UDhBSDZDbzFodTVWdnFKdlg2ZWFHdTNvMnlaT1AzNldNbFpqSW9qaVF1K3d2V3dmSDBFbGhvYm94ZkVaUmVsdFVxTlVTcDZqUkpVOUdVWkRWTFpUZlQ3OU9MN1dKeGwwWmhyM0ZodGRCeFdsUFQwWm94S01IVHZRaGh5MVgwRDI0Mk9GVU5yRHFxQ1dLMmMxRG1PWTVpejNhTStOaDJYVVhxZkVqNk1UYml1ZzBUZjMrVThOQ2VKQjJab0tjSGNwbGVodHlmVWl1N0U5cFh1WHhDOGpYTFE1RWNDcDlHeVZWUkkxTlRVMUVKVkZmY240TmozRTE2Y29zY2FlaEVvVDJZdHhiSk9hbzYvZ0ZsdldYVWo3TWg0K3JiZ3VJbzB5Nk5NN2lvWFpSbFlzbTEraHk5eU8wL1VqTkt4UXFrY3B5bktYaXpsWkdkR1hMcEZGK0RTWFlraExyVDZ6aWlodkRpTlNpOXlod0pzNDR5U09MVWExcVZLZXBLaXVqM1F0RHBsb1hpaXZ3NGxJeFMvQ2FQcVNvS0RldjEzRkZIQ3FNYXBZMEUyS3lORjlCSmR5VVQ0ZGJQcCtJUnhrdkpIRVhSa1pMNm01ZWFQbUkrWkU1MGN5T0pKbkRGSmRqaCtpUjhXbGpEY2JYRitIeWkwTlRWajRNMzQrb3F4cUJ6TTVtV2t6bVpkc3V6aWRHV2FOVjlGSnZWQ2EvM0VaTDhRK0poNmxkSlJZbEo4UyttYkhDTExzb2NLcVUyU3V5WFJvZFVXa3pXd2xNVWw5Qk5ldzQrNWgvaUZIb1N4SXF4V1BYb0pTZkY5S3g1S290dlpxVVd5eWxGUTBvVy8reHVLdVVrclpKaWErZ2tUOGtWMC9FV3BJYjJiZHlzWFFWWHhMNlJ1STA5YzZWWldEWWxpS3BSeE5FVWRDVlVoN09tVlBvSmVDVDl4TDhTcEpEcXVEb3lzR3hSbStQNk9rbFljc0hVcGlWSFd0U3NKME9DVzB6a0x4YU9wcXptemYwRTIreEpyU3Y0cFNZNVJWWWxWWm9VY1ZsWXlYMDkwWGdqU2hXREswc2psWmFMb3lqK2drazdpOTJSOS93QVUyWktvNVlPdlkva1RGMlFsTjNLd2tuOUJjVkpYOUJ4bDFLMXIvUlNLWDBGWkR3bG91cGh4algzWWwyL0ZtNTdLWTFIUXNMaXQyT0ozTFAxYkRMTmlVMlZUK29jRStKOWgxMVk1eVd2NHJWdWg4UENkKzVUYmJSdDRqdDJPRlVHMG5RNm9yR2JZbGpIREplbzNRb1dZcjJFcEZtdnBhUmRXT1ROdkVWa1VqMC9GZmc0YnV4WHUrcHhVYktVeW8waXl1VmpkZGppVkJiTEtTdWZ5UFpaUlNSYjBHaXNVVWF5c0tqS1lncUZQb0t6a2tPR0IreHVWV1ZsVlFSU1A0cnM0YnYxSzRqL3Myb3UrOVJvdWhiSlZaVmpKaTQyVXhFY1UwbWNPSWpWYnRHaHVpSHNtaGRHbVNyNnVvOXVhcjJObkMvWTl0dWhTUFVyalc5alppcmZpcmxJbEo5ZWhkVU5tVjBLVWQ5SWVWTzV0UktPRE5DelphVEwzT09EcVhWRG1vZk5pV3hJbXF5ME5EUXJUME5TOGtYbWl6cWNFYWxGd291MnlrY05zVXNXaVhZVFVWdEl0YjZtcktWRkxEKzkvRFROcWFxaFN3WUxhU05tYW96WmxvV3owemVjUEl2QTZvcTBXUndtak9Sbkt5OWpVdEpuT3puT1l1eSs5WmxtZk1hUG5TT2VYN0xtak9HRC9BRWNVV2lNcHE1d3hYMVd0QnR6VmV3NFFzaml2VWo5NmJIMkU2WFpRZUpoTGlSVHF0U0xUTlNpMUlxbG1KdFpQT0hrL3JkdWpsUnlvb2tXTEZEYVdtZWh5bktjcFhaeTRLWlhMczQyelJ2OEFzdGhRL1J3eGl2NitycVBpcXhyRHN1NS9xWnQ0MWtRaEc3MmlDOXZ2VTM3RGZ1WWVWR09jZVdRb3NwQjNadE1pbjNGbExPUGtYajBsNUg1SW1ob2FHaG9hRktEZlFoR1dqS28xTmZyYWxkU21HcVJac3ZxYldPN2RrZnh4c2l1bnNRZllwOTZtTHlRWHRuS0wxR24wZEJLVHNVaktMbXhlU0l5Ukh3TVhrajZTSmVTT1ZZdTQvaU10dVB2M0ZTemoxRmh6MUUvckt6a2tVdzNXWTBwMFQ2SVhQNWJFOFY3VEtSdzRyM29VV1N3bG9qYmZSNi9lT1pmc3ZPUDdMNGtmMlN3NFNxeGVTT2ZrcXVvOWxWS3pUSWlHU0lqRjVJNzdIa2grU0pVakFWWHdsWU9xM09KcDlLRGNJMFJXS1lvdkRsYnFmTGtjY0NrazBLazBjTFQrbDRta2JNZUpqVVRscDdpbmlTVXFkS0MrR3FHbWJmWkVuN2tmZjd2TnJvaDhUMU5abWt5cmd5UGtXNXNsWktvdG1OQ09USmtSaUk3N0pDeVpIS25aWkpOOEluRXVPTVdjVGREaVJ5TDlISkg5SEpIOUhJbDRHNE5vZnczV2hzdXFvS3J2OUcxRFVkWlB3S1V5dE9JVnFMZXhHdGFDWFZzaXZ1ODE3RXE5R0tUU0xSSldXZzM3bUhQL0FITE5qR3lQa2preVJYTmI3OERGbkRKbTNIVTRsL1lsTjJOcFN1TnhxNnNWcnYwRzR4cElwR3dxdmlYMERuTG9PR0Z5K3hYRmJveFZqb2NQb2JQY2l1d3Z1N01UeU9MNlpTdDBKTDNGRnZRV1RKZVNvdkpITitOeW0rL0F4Wnh5bDRIVTVVT2tiRkJZajlKeVZOb3BXbDlCT3ZyMFdyWkdocGxwNkVWVWIvNC9lYTl5YXlaVkkyR0o1TWw1RUx5TE4rUFRmZ1lzNDVWN29heTQwVVhLZkRuUkZVMTZMVEZKSlhIRjlQWHdvamw3ZW00OW1mRXAwKzh4ZExsSDF6cXRTcmZraTR1dnZreVhrZ0prUlpiWHRtaDc3SHVSOENJeU5qTnlxbEpGSy8yV2t6WExRME5EUTBORFFWVVM5ZUVleUg2VTJWN2tWOTU5MEwyWkZydGxSazEvcDl6NEdKeXZRN2pzTmU1QWZzTHlMS0xIblRmWkxjajR5c1FsNzNGTWQ2dnNOeGRFVnFVelZDeXFWYW9VY3FNNW5VNW1jN0s3VEtZZnJ2MkcvU2Z1Ulhka0Y3ZmVXaHIzSStNMWlLekl0YXhaRnJtNm9aTHlRSitEK3haUmU0dDlrczZrYWRoRFdXd3RhRGxKNmxLYmxLM0VzTzRuaXFyN0RjSXBDbytwR1ZkVWErcmQwTHlpMzVQNG8vMmNTc2FVSEpkV1VmcFJqWFV3a0w3MVJDV2V6THFWcHdzY291M1lyMW9PVDZrQ1M5aVM3UE5ac1hvT200aFpWcG9VM3FMVmtYTmNSb05NYVZxRUsrbzNKbElKTTVxUjdGSTM4aXF4N1V5c1NLOXlLOUtNT3c1ZjdmdmNaOXpaM0tUMVdqR2txeDdsNHNUbmFLRkd0a05HSVV5L3JOa1g3aWZ0dnQ3aVdleXRYdktFZW9wU3U2Rjg1RVBSdTBhMVpUQ3FpK0pJZXpGK1dmeXkyUy9FVWdzblhVaXYrUkZlaFdiU1ExZzNITjNaWEQ2OURqZ21YZ2k5am1TT0djZjJXYS9mM1dNdjlwRHlSZnRuY3VqaWhIOUhDcVoxN2pnKzJUSDV5Wkh5UmZ0djEzRWl3MjNmc050NzN4WksyNU9URy9jdy9HL3h5U0hIQ2RScXRFYU9SeEtpSzRsMlVoR204dk8vZG9mRXFvNEc5azRkU3VNaTF2Nks0THI3TTVTOERTU0xUa2pobkk1NmlVMVk0ZGZ1V0l1eVBlcGgxOUZZbllpOUNKSkVzLzdJNzlWdVJLdDNvZGQ2bnVLS1c0c05POGlLNklVVjAzS3laYVNiN0RXR3FIRkpzdEQreFBFTFJSUmI2US9HN1Z1dzZPcktRZGlycTZpbkt5N01WRXE1NjVhSXZCR2lRMDVxcDRLUlE1WWlwOXlsSHVpUzl5amVub3pQQkc5OHE3aVcvSkRRc3FvVlhwdlVOdHErNVZqMnRFNkR4R3MrT1NSVERad3pkQ3NtVWVoWEVjZjdSVENjUzM3TmErM29VTVI1M1Jkb3BodWlMVlpXYW9LaVcvYXgvSXgvKzNiUzcxS051VFpHc1dvaTRWdGR5MzNQNHZRY2VqWG91TWxXbzdXWnNONWJXNDA5K2h0ZEhscmxmZWlsMVpHTzVSYXNpdGIzRXRLRlc2KzFSckNUU0t5azJjTlVKNGovQUtLS04rNS9ITmVLR2xVZFlpVGFsSHNjZUZiMk9Wb3N5eldXdWNrdWhqTXEzUTFxYk9HcUk2dGxjU2lORWFiOVpQOEFvYXdxcEYyMzdIKzFlQk9kR3lpWDNWdElnL2NYajBWTmRCTVRSWE5GTityWndyMG8rMjQyU2owVEhLbDBVZzZKbDIyTGFWRVZkemhTM0xxcGVCV0xvY0RMcG1yeS9rUlIyT0dTOEZ0S0dMTG8yU2ZWc3BFNnNyaVdMSmJScHYxbG9oL0J5VGVnbnFVZ2t2dStJbjJQRElTN0wwWlJKUTdHeTJORFc0czdtdDBVaCt5NzlOejdaMWVoS0dFN2ttK1psa0o0ck9GZFBUdWppaVZ3N0hEYzRvczFhRkhWRGZmb1VoRmxjV3h3UnF5bE42aFY2SEM2c3IwN0ZJcGluai9vcEJVaVUrOFNYZEVsN2p3K3E5SjRrVlppUmE5VUwzelhralY5Q3JtTlJkV1BaYkx1cFhlMUxHaHBuaVAzemxzT2xoMTFFNUoyT0tCYXh3dEd2cTZIRkJGbFE0SlVLenVVakZaYWI5ZHRWN0RqaGZzLzFTcVZ4RlNJcUpWKytOMDZsTy9wTlVMbDJMRXpxaXpMdktyTk42d3FKc3VxTDNPT2pLYkEzaEljWHFpYmE2NXlWVldtaFJyVVZFaXFYNk5KcEhQSkZKdit5ODQrQ3RVVzlhM29WbTZMM0dvT3RpdDIyS3NYcytEaVNiS0szMzM0cEZpOUtuV2c2Q2h1M05DeTM5bXRCT3FaYmN4UExLNU52b05SZHEwRk9hNG5sY3ZGRHJDak9IRWt2WXJDNkw3U29YWnN5U1h1V2tpelgwTnhxcWJLVmV6Mkc2T2lJS1hVNFY5L21oVTZNaGlkWHI2VFhZdGxjdnU2bXBxYTdsWXVnbHRWUWxpbzVsVXN4bUwvQUpNamswdVprVzFhdFJKYjlKeFJaRGVHN0ZreldVUmJWeGJkbWZ4elJ3NmVsZFpjVG94eHd2MmRXMktlSjA2RW94aXRDRzEvcFpCOTE5L212WWt2YzJHOVBSYkpNdVd6MUxQUFU2bWpOR2NyL1J5djlHak9WL28wZjZPcFZTYUxTYlJTYUp5LzNNaWJUUFlqS1d2cDNTT1JGY043SndjU0x0eGtjK2dsT0g5bEpQWlp3VFRMYjFaRFVLT1JXVGZnck9xaWFYTERSSmRwRWZiOEFiN215TDBISGNzVVNPUmxvbkhZNHBsMlUvOEE0ZjhBalBRMFJvalJEVE9DUldDcWh4bXFTV1NqaVBSR3hodXh0TmJWeFJrcUZZeVJ3dGVyUEVTdWhYMUZpWWJxVmNHYU1ySzV4UUx2WkxZaVpxV2xWalduc1VWUlBGRW9yTmpsVHFiSDRCV2doTmVnMFZLUnNjTldjY1drSnlpbVVVRjYxeHR1eExZS3BNYVNrY1NaV0p5dWhST1VUaHhwQ2hqeXFWWHA0dmdvSmRoVlNMcERlRVUyV2FOSERKbXp0c3FsSmxjZFc3SDhjRWkyN3QwSXJvL3dCMnVmMkxmYjlpV1NqRmFpYzFjNFV2WHU2RjNVY2NOV05IZGlVNDFaVlFSWkkxWnhLeFpVRzR5RlRWTWczMjlPY2U2SlI3RWw3N25Fa3k4RVZTb2JXdnN5a0lwZjE2RXlEN1NJdGRmdjdSaVI3U0d2OW90NXBFbTFXNWRDeEpMMXVLU0hzVVpTRWFGNWFtclluaTJYWVd6SCs5OWpYL0lqNmsrelk0L1FTajNIN01pKzM0Qk92VWNhNitoeFJxWWlYZlFoNlYyaXM4VkZNTlZLWVNvVnBObkswVm15c3FzNFlsdlFaTDFkdEVmY1QrZzJpY096L0FNS1duY1h1ZjE2RXNSY3JRc0dkaXFhZTdkb3JLYUxOc2Z3MDZGZEVhTmxaMk9OVktSaWFHaFNtOWRvdk5Hd24vWW1ubE1mbjFHMTJJK1NEOXZvTnBFMCt2NEJ0ZGlNbDBaRitoeGRqUitTMG0xMnkwUm9qbW9YeEdheVo4bCtSZkVXeWhiVHI3SEFralgwbXVxR29hSEZKc1RSQnZLZFJyMzlMVTFKdy80c2RPakkzK2dtTHlKcnI5L2xFbEY5ekRwMHJ1VkVxYUhHcUx1Y01pMGt5a3RDcWFOU3pOYm5FY1NMUnVjS0wram9jWEQ3bEU5cVE5aXlPSzR0bFVYYzQyVFM2TXc4cGo5U1h1U1h1U1hiZHVhbXByNkVvdnFpZExVZGhWZW4zK2hwcWpaN2JqSkwzSGlScWRTMDVJNXRyeVVsaHhaeFlkRHNXbGNzNmxEcDZQVWJyZnNjQ1J4U2Znc2NRclZmdVVpa2htSjVGSHRsTWt2VVZlNDJpY2UrL3F6WDBZeVMxSlliL0FJVEZIdnVUWS9KU1NxaThFaXpTUDQ1STRaSXNtWGpJNmw1Tm44cUxOSm5DMDkyeFZ1ZzBybElPaUx0dGxreXVLYUlwRmJrL0pUSnZ1WW5xd21pUHIzeWpOT3BIL2tMNyszMVJDWFprWmQxbklYdXhKOWQzUXZGTTVVamdzV05HV2tQYnpxemhmRU5TZEVVUmNySzVaYjgvSTg1K3JYc0prZkgwTVgya1JiTGZmc1JEUWwyRUkyZTVEeVJYcGNVVU9pb2JKWEp2MkdxOVJPWlpYOUtaSlRkRG1LeEpQMVpvYWZSa2Q2NVZ5UzlpbUV2N09LaHgyTFNMZjhBM2xxV0pvL3NTcm9hL2ZkU2NVTW11MmV6MFJEMWFlK2I4Q3IzRjZjcHBPaFpNMFpTakt2VitxMFNSVHR1Vkt1U0tRWnhOc29veUxwMUxKbitvczVIRTZsN0Y1b2FUVnlxME5qNys3bGU1VG95MlVodnQ2aVpFV1ZDQXZUNGxWRmRnNUVXaXZYcXVvMWxjNFhWbkJaSFZzdXFGV2pob2FvNkZYQ01qa1NPRmxwRGRUbll0dDFJdGZnRzBSYTdrWFZhRGFhcVRKdjFJa0JaUmlScjlkR1kyeDBwVWFqd290V1RPS3lLMDR1L29WNkd0eWtFaXRLRjA2Q3RmZXI5Mlc0MTFIcllzMlZiRzlXeHRyWDFJa0JYTlVKZGgvVzNac3hlZzJValZpYnNoZGZRdTBWYi9RNDRlaGZVMHA1RTUwTEZQd0NqRzY2bkMweXlSV2xDbFBVVDZrVzNTaEhieFZVcHRqY1hZcjdmVjNhS1FXVmlrbFFicFgwT0k0WFZqMmJGTHVwVnBwRlpLNVpVL0FLOVBwSkpqc2RjcVVLL1VWNkhTcVA0M1F1MnpsWi9JamdpaVE0NzNFVWpTcHpVTktpY2xZcFM1YXZwWCs4VUxGMTlIV1VLbnl6NVpWWVpTSytuY21VaFpGSzZpMjVyOUdsVGh6YmZVcG5yY3JpUFpLUXVkaTFibGNSbG9Ga08zcFZmNVM0a21pdExpcHFjWlNTT0ZsbVJrUjk4cXlzaXo0a1hkaTF4T1paS3BTbnAzKy82SEQ5dDBOYU00TG1qTE5vczIwS005VVJrK2hTbHlpZEYySzNiRTJyR2x6VDB0Qy80SHBsWm1ocDlwME5DalNMSzV3YW5FalFva2FOQzJvcHZ1VVNYbzZGOHRQd2k2TkN4b2FmYXFTMldqbGlXaWl4YjBkUHcvUTAzTE0xeTBOUHN1bVd1NXArT2FHbVZqVTFOVFUxejBORFEwM05EUTBORFEwTkRUZTFOY3REUTBORFQ4dDBORFEwTkRRME5EUTBORFEwLy9PZDJqVmVwUlAxdUpsbXQ3WDdqVjZITWM2T2RIT2puUnpvNTBjeU9aSE1qbVJSVFZTMjY0UzFSWkhJY2h5SExub2FJMEtVTnI2RnlYUWRHWFlwUzY1T09ISjJPWWpCaWI5RjN1YTJxSnAzOVdPeXpoa0pNVGxyVFBnZHpVakdhclZsZnA3czFScWpWR3FOVWFvMU5UVTFOVFVzL1R4WEhXZytJNW1jek9kbk96blp6czUyYzdPZG5NeXNaT3BHRmFvVGs5ZHlWVjZhSTd0V1hlZFk3dXpKbXAvSGNrUEtIZ2svWW0vZkpQM0Y2RGJHazdaSzloU1R2MjlTTWNvSmlXZXhsRDJmMDdIR01ySE9jN09kbnpHZk1aOHhuekdmTVo4eG56R2ZNWmZFWnhOdjA4UkxzTzJka2FNMFpvelJtaHBtblFTM01US21PYW8xUnFqVkdwcWYvQUJxWklqdVZtelp3M1NKZHQ1V0ZWMkU2MzNKMzZtb3pFOFp3OEUyM3FpVDk4b3piVnptUnpST2FKZVVTcTAzR21PZUdxb284a3Bjb3BROUhabkpKbHBvMm81YldJeW0yYkVKVlk1U0c4bThUY29oU1dqK2phK29veVRTdVNXWEYramtSeUk1RWZMT1FicDBKVTB5K0k5MmZvMnJraU80NHhkbGxZdEJsL3dCWlJ2d2RoT09VaWZuS1JpZU00ZUJRcnJuYVRPZG5Pem5aSGllcER4dTZFbkNOTTlpZWhWYjdKM05jN0xLQnNxVnkrOUh5UThmUjdjWkpIT2puWDZQbUw5SHpGK2hKeXJra3VwRjdlcTdIT3YwYzYvUnpyOUZwcjlGNVY5Um94Rjc1YkQ2N3RTbmZLTWZjZ2wyM1o1VXhXWG12MmZNUjgxSHpZbnpJbnpJbi93QWR4Yi92SkVjOWFaMWtocllSTEV3MVFvTHVQRGVVaWZuS1hreFBHY1creFJhSmI4UEpEeHZVYUpKWkpvcExWYjdIbC9IQnlQa3NyT0xXU21WNlpjRUd5MkN6NUpYRmhSRmlQa2g0K29qbER5UThmUkxGanE4b1M3QzhiamIvQUdPOVZrcXF5RXQyUTg5VFUxTlRVMXlSSFBaeVNFOHByMkpyM3lwM3laaStjc1R5WW5oNUloZm9WZVRjMFZwb2JTVnl3a1F4S1hLYnpaaVB2bkYxc0tTM21TODVUeTAzS0lUYXZtc28rU0grUDBYRTZITWptUnpJNWtjeUxQS0hraHhMUTVrYW8xUnFqVkZ2VWFwVWxHV1N3NU93czlpT1ZFZkZtdUo3bHptUThUNHRENXg4NCtlZk9aODVuemo1eDg0K2NmUFpYNDdGRlNyUTRjbXNvTDNJcFpNeFY3NVlma1hnWmllY3NUeVluaDVxTGRsbTRONjViR1VGN2l0MDM1OTZGZSs1SEJuKzk1a3ZPVXF2VTVrT2pUeVdIVFVUZ20rNThTYW9rYkZST09qeWpsSHlROEhEMU9TTFBsUVBsd1Bsd1BseFBseFBseFBseFBseFBseFBseFBseFBseExZY0JSZUhHN29KOXlEaTJ0VDVzajVzajVzajVzajVzampkY3FvdGl5UG5UUG5UL0FHZk9uK3o1MC8yTCtXZjdNTnlkVy9VYUZpUlhuSlRYUWltK0x0azVkeVRrN1pLMWt5TVZwdVNjWFJuT2M1enM1MmM3T2RuT3ptWnpzNTJjN09kbk95MHYreWplVXNzUHlSenhmT1dGNUY0R1l2bktaaWVIbkdmZk9FbDNJVFYwMEpMdGtxOU45RXNKTzJkWlJhV1NsMkl2cnVzbjV5NEpVT2RqVTNYS0E5dFZROFBBNFNzdFRZazdyS1BuS0hraDRGNjhmSkR3UjlaR0Y0OVdVS1hIR1M2NVJhZWhXV3FLTGt5VVZxeU5WeFBkbmFvK0JuS3psWnlzME5NN0k1V2NyT1ZuS3pSanFzcFpZWGtqNHp4dk9XSDVFTW41eW1Zbmg1dzJsMEhzcmg3bXl4R3pKM1VTVGVUeFd0OXlxU2xsRmU1WlhvT0w2WkpWc0tTM2NYemxaR2hkWlFLRzJsbEdVU016RDg1UVh1UjhDcEdweU01R2NqT1JuS3psWnlzNVdjck9Wbkt6bFp5czVXUmRIcVE4SVVVNlVQbUh6VDVwODAydmlibEtpNHFIelQ1cDgwK2FRdyszcmZFZ2krVkZtc1dTdHZOUHFVMlJ5Y2RCcHh0NEx3LzZFMUgvQUtHMUFtbG9zdjVjdEVkRFJIREZGWUtneHZMRGZ1UmVlTS9mTENwM3laUHprMUxWa29WMUxDTVB4a3BwWlVUS2lTNmlqMTMzaHd6K0kxWkRYc2JhVnNrellrNzd1TDV5ck5WTkJ1S1dVTW11bzFKWmJFbnc5akJwbEh5STQwbWNrZjBja2YwY3NmMGNzZjBjc2YwY3NmMGNzZjBjc2YwY2kvUnlMOUhJdjBjaU9WZm81VitqbGordC93Q0ZCK2R4TkNmVldhK2pha1Z3NlgzUDVORVVncmVnN2p5UXpFODVjTGFMWWtqNWtqNWtpa3NTUmpLVGJzczYweVRNUHZsSnZvakViNzVWZlRKN1RKdnU4dGR6RDhaTk1rbjN6cTF3cmZkR055NjVSaWxYdVJTN0ZCb2xGOUhsV0xOaWJ1dHpGODVQMnllVU0zSks0MFJsUm1GaDlsa2hmVFdaS2J5b3RTaktvVkhycUovUVhIdE1jY0czdVZtNjdsWU9nb3pWZmNxbWkyOThLRHpqaFMxR1ltV2hvYUhLYUdMYnBuV2x4NVBEeEg0SzFIRERkeHQ1U3hYazZWSEY1Y0tLeWpaWjRmakp0ajJjOW5xOTU3THVOdDJ5b3RUNG1JdUo3a3NiRFdlMUJpVTdTenhmT1U2czFHazhvWnRNbE9YY1NoRWgvamxYNmFXeTdtMUo1VVI4YVN1eHppcm15K21WOUMydnE4VTBXbFVhd1c2Rlp5ZWZBbXpiMkcvWTJaV1pmSk5NU21WMmtqaGtubTNYaUpUbGVySzViY1hkRk1UV2hPU2V1Vk1SVkYvREUrVEErUkUrUkVmd29xUGpOcGtyV2VWVTZNb3BzckoxeVZqWlN5b3hyRFZhbjhsaXJSUFppbGJQQzhGWk1lSGhzcldyelVvTTJjUjNLcks3R29PNDNYS3dzU2FzaExjY1hveVd5dUh2bW1oUmJ1TXhQT1g4VTNHdlkrWXlrM1hLTzVvYUR2WkxLVCtrck9TSEgvMC83RzV0dkpLSXBUVkJSajBHbVBGd2xZYWVWWU1TeEMwa1dmb3krSHJRYXhhbzF6cEZDdHdpZExsQ3NhSmxhTnJ1WFR5MUxTRkhEbFVyaXBGRytJYnJic1hLUVJXVVM2TlRXK1ZZb3VqUTBORWNxRW9xNG05Y3JKVkpOeDRTNXBrcUt3bkpYM05yWmlhWllualBEMnV4L0hvVmVTa2xabXpOWlZnS0dKVmxhRWtrMUh1VmsyM2xRVXNSV0VvcmRvU1VrTzFzOXZwbGllY3JLcHlzNVdjckl0eGRNbTEwR25IUTVDaWpSRXBQcmsyMXI5RlVjSXhhT0tUeXVVU1lwWXNhSW9sVFBaa2g0bUNyZGlrbFI1MWkyYWNQYzR2UjI0clFhTENFNWFsdHlrMFZ3ME9rSFE0bFRKNG1JajJIT0NyN0ZKS2xEWWliZUoxUlNTc09XRXFvcEpOWmROLzRqVnR5azBjRkVXa2orUm9wSDBNVHhsUXcycU93NHNzSnlYRDNJeFhRZXlyalUxUXBZV0pOVUtEaTBTVkxGS0NsT05JbEV2UW8wTjA0U01lN0lyMnl4Rjc1UGJSb2FHaFZMS2hKSmJrVkZFWTl2bzlxQ3VOU05CYk1iRmNUVVNXN1JtM2hhbDRXeVdIRkVVbDZUaStvNVBRU1VZMjlpeTlEaVZUbHYzS3haVFBhd2xRMjhUVXBsU1JlSy9Sd3Nzem1PWTVqbU9ZMU5tdjBFb3g2bG9zNVdSalBzVmd2MEo0aFJaM1g5aWZRVVYwem8wYlVsVXQ2VkpKTWppUTB6YzVLN0xJb3Qrc0VhTTBPSXExV1hmNlNodFJFNWxFdlJwSkRjYkZWOWJiNjdRMC9DNi8vQUtydW1WS21xTGZaYmVqU3ZwVk5mU3U2SE1pcWU1VTJWSy9iNmpYNnk3UmVhUG1JczZuOFNzSnQyN0cxVlZvWW15N1ZGdE42aWMzUTJZOFJXSDA2K0l6VTVqbU9ZNWptL3dDamdaYktjbzY5QjdMTm1icnZ1VVJwT2hYRWtKcCtpMm1XWkNIVDBZT0RwZG5NemFubldoOE9FS0czWCtoS1R2dk5za282Rk1WVnFLVktMSnRhMEpKZHlLZlVnNWF0ZWhPVGQwckRhMEVzUXF2cXVGdEllMU5uTXpVb2NyS1U0U1ZlNUh5UStHaTdGZXdxYW54YUY0bktjcHluS2NweW14U2d6WXBvYUNqUVRYWE9vNHBGb2lpMXFWSWxUWGRnVWlSOXlMN29lYmFKUlQwZERVMU5Sd2s3UEt4Uk0xeTFKN2IwTnBzMVJxalZHemh1MlVjU2JPZUo4eUo4eEh6RWZNUWxHYXJuSHk4bHVmRnc5UnFSSFpxUmwzVzdJYkZZaXNwUDJKUDNJR0g0MzZ2Ukd6RjJ5alJXRXFiOVpzcGdySzZFc1N6TnFPbm83Um9hR3cwYUhEcVBnWnR5aTZaS0wwRldFU1d5bG9UOGtmSkhiVlVQRXdsUmEyS0ZYb1BMWGVYaktXY0YvcXpreHllVWE5eEZHU2xPNDFVVVlkUlR4V1Zob0s2cVZic2lpL1JIeVlmK0pMT1JpZjVNcEZWTFlVdjBmS2wrajVVLzBmS2wrajVVdjBmS2wrajVVdjBVK0U2K0JmeHkvUmkvRWpSTWRMR3U3U3U5aCtSRko0aVRJTERrbnJsR0RadE9SOHhIekVOZkVSd3ROTTJzVnhxaWl4SXIyUG14S0xFaVdaZG53NE8yU2sxcVV5bjRKZjVFUEpIeHZ1R0c3OVRhRWxxVmt1THVYS1liRXB5dVZnMDgyNHFyR3B5a3ZiTFI1VmpxZkRscXZTZTV4TWQwUERXdVNsSml1UFRRazEzRVJqSmpnM3FWNFhjMk1PaUpZVEx2TFhLTVYxRTdIUVVvNVN6VUhvODFCUE9Qbk5RaTdzcWJVbXJHeXBJbEhvSjFzS2E2a2lQa3cvOEFFWlRLWGduL0FKTXVSMjB2MGREV0pwLzBjaS9Sd1FYNkhzcW5oQ2JhcDRMcUk2S2hzbzBIMEhEdGxTS1pvOHRTcmVYVWpKMXNJYTl6WE9VVzlkeXRkeTdJZjRvYWk3c2JreEdDL2JPZmdtdmNoNUk3M0ROYlhZYms5UkpDeEpxNVlsUjNKTnV0U3hYRWIyYWJtM2hLaks0dHlteWh4alhLd3ZRbDdEM0tKczVtWGJ6c3lsUytlck5YdjRma2p1U3p3NSs1QnJxaHk3SWs4bWlQa1E5blVrc1Rwa3RsME9kbGNvNE15UXZKaC80NVBLWGduL2t4R0V2WTFOZHl5T0dOQmJUNFJaeWtPZmNTUXNSNm1oTnhkS0lhVTJRaTV0cHNvMzB6WlB5ODB4Skh4R3VIS2hWVU9uNk9uNk5WK2pheFhIOUZ2QTNONjU0TFgrMDVUbEdxRGwzRS9jMklxeU9VNVJUa2lwc1lUNGl1STZpUThXZjlDRzVEWCtsYVpSdHdyVVVZclRlYmVpSFRSWmJmb3RkeWE5OG0vYktxTE1sTEVXbVd6RXFqb2JHSmxLVUdWbElzeE9XOUR5UjNKWlJ4RXVoVWltN29wVzdLa3NSb2tROGl5MjhHT3A4cGxNVGg4anJpUkZLRXRvcEtOaE42a2hHRjR5ZVV2QlAvQUNZakJ5MmhWSU9CY2RVTFpTTk02emRFT09HNnh5MjVjcUVsME5URXYwSDVNTC9JVjBhb3NTYkcvYzJzc0p4Nk1Ua1NWT2hJUkh4dXVtcUtQcG5oOTZiM3ZuR25ZZXlpK3BSRzNPTnZjb2h5ZWlKUWkrQlpVZ2hXNHQ2NUtFWGNiN2lVVUo5ZlN4UE9VNWJrL0R5VG5vV3ZUb0tLanI3a1c5TXAxc2h4d25TaFNTY3Y3TnRxbTlEeVI4YmtzcmFwR3kwS0wwcm9KSjZJaWtKVXZMS0hrV1RySlZPZEhCS3hkc2h0U3YyRldTS3hKQ01MeGs4cGszL3lZakJHS094L2RUbHAvWWxScW1UVW9iWDlueW4reEw0Yi9aR2E2amMyT0dHK0hQRDJWUXBGbk15a3BXeVRYUXFwTStZemFtNmpocFhxY0xYNklSbHJYVXIyUDd5WklSSHh1dE14RXREWXJYTENnN1cxSzdYL0FFZitDVDYrQ1VWMFpGRVpOM2ZzYS84QVJyLzBLQzZEak5WVE5yQVZhOURieGwvUlNLb1ZiSEREWmNTaVZrdUo5VGllblFySGRsMFkyVVFwU1hGNlZDUzc1Tjk4a3BSR2tiTXBXeTFLVklWN2tKTHRrMHVvMnlLU3NSaXR6K3NvZVNQamNsazQreEppbDdrbjdFVVJpc29DSmVCMGtjN0x2S2taTVZac2x0T3BJajVNTC9ISjVTSmVjc0hPNVpQUFJrZkpoMzZDbzdibUdXaTMvUnlQOUhLLzFsb2NqL1J5UDlGSkxPUGtZczJJVzgzUytlRDR6bDRKK1NIa2g0My9BR05tSTIyUml1b3BTVnhmQ0c1eUZDYjRSTmJpVUU3bEZDVnZZVG5HaFJlbldNV3o1Yi9RazFUTGFSUXJrb2RXVmtpdER3aHJLTVkzSThLcnZ3OGtmRzVMUGJTejIyTExERU9JMnNxU3lVNDZNc1BhN0RJK1REL3h5ZVRXVFpGaU5yRVZTa3NOT2hMNFVFcUVxQ1UxVk42Q2Z3b255WVY4Rk1OSkxzU3RkR3lPTWxsaEYwamxSaXRKS3c2R0ducFVqV0tPUkhDa3M0akZteUl0OTVZUGpPZmduNUllU0c5V1dnNFlUS3pZb3hSRjRrZUx1VTZEVFdWVWZEeEh4Ym5IUXBSSDhmVXY2ZkZSbEVrV3l1NkRjblVleWttTkdHcWRSZUJ1VFE4UEQwN2xjbGlWdUxZZDEwSVF4S0ZWdXc4a2ZHNUxQRVhaRWw3bXlrUlZDT1dIbnBrOG9SYlZSWDFObU5MbTF0VUUvaU94R1BaWlBMWXlsTXcxM3prcTJaN0RhSU5keFg2RXNOclIwcUxZYXVOTWNsRlZIN0NNTFBGOERzWVhranV3R1J6WkVYamZlV0Q0em40SmVTSGtodTZxcHNZYXNWWWpiazAzbDFLS0xGS01ObW1VWklUV1RZMG1WSTN0VWhPdXZwTnNiMm5Uc1ZUWW9UZVcxT3lLYlNISERhYnl3MmJNSHhEckorQzd6U20wb25BMDBJVzdEeVI4Yms2WnRkeVR3VlppZUwwS0ViNVFFemFad29zeHptOHFKaXFYVG9WbFJEVzJxOWpaaTA4bU5zZEhWSVM3a1RDVmNsSERsUXJPN3lUeWNjWFdsakVmVnN2VnBaTW5saHl4TEx1VXFubEtHRzd0RlNNNWFKaVJaR3pRcXNvREk1eThpYUthczVUUTBLTlp2TEI4Wno4RXZKRHlSM1dxOWZRdXkyV3hKNVNwMko3U3BsUkVFKzNwY0tMNUtpWWlTVEpMT001TGhSTEVnYkxUMmhPU3NOZjZocHJQYXBaRk03VFNQbUlqUGIwWXI3a3NSWXFXMEwrUk0yWHVwUmtrZk1RcHVjV0pEUm9XVExSWmFKZDBPT1ZTdzBTdXpVb2lXSTFvUytIcVA0aTZrRjdpakhzUGJaUkk0WXNuT1VlaFJqd1VyOXlVWkoyTE1xOVRhcHpaTW1JaDQzOVNQa1dVUDd5amt5Vm5xY2pPUm55MmNqT1JrbTFSYmlNSC9IT2ZnbDVJZVNQamQyMHJuSXprWmFET1U3SE1pODBYeEVmRTJ0cjJLUlFxcHBDcmxLV0d5bFZRVThXZGFkQktQcFVraHZDb2tYbkdoV1d1YitER3ZjNUdmeXF4c3BGRDRqU0tKV3k0VXFvNUg1RnduRWt2cG1uMUt5UldpTFJSYmRiZ3NxNHJLUlJSbGtqYXlyVzVYRXVjcEtFZXFKVjBxSlJTcjNORnRNYlZCZkUvUkdQdGt5VFNGWWpoTm1wcWFtcHpJNW9uTUtUWlRKZkRWYUhJeU9WSmFGVkZGa3YwYVIvUnBIOUdrZjBYaXYwVWdrczZ4UXJHRW4wV2MwdXhMWlhValdKRlMxM2FTUnlJdEZIS3YwYUxkbEY5U3RPcFpmUy8vOFFBS3hBQkFBSUJBd01FQVFRREFRRUFBQUFBQVFBUklSQXhRVkZoY1NDQmthRXdVTEh3OFVEQjBlRmcvOW9BQ0FFQkFBRS9JZjhBS3JWMmJSS2JPWTJWZVlGN0lBZmtOYmw2UDVEOHIrTWRCcW5nZ3dCSUp6Si84TXFpMVV3RUtZaUpiNlNsM2xVRzVYNHhEMVA0ejhqSDhqRzFYdEVUWmUwVGNnR1lhMkN5R2ovOEd0aXBka0tYbG1jb09JSG5SU3BiOGhEMVA1cmwvd0NKY0pXZ09CQ3gydmN6b3Y4QStEd2wxdlNPTTZKRk1yTEt2OFlmOHg5ZFM2MFlrdXRrMnd2cGsvd1ZTcFVxVksxcVZLL0pYK2NIR01SbnJKeHBWekRTbytpcFVUOU9ZSG9CVUxDek9kRGt3a0hjdi80TmlMWUpoanNZbTRjd0p2SG9Tb1NvNkNIckVHWEswdVhMMXI4RlN0YWxTcFVyOE5NUjlZUXdPb1dvUVdrWVkzQnpVR2hMUHdWK1RINll4M3F0MThSeGJVL2ZTQkswTlg4QmRDMUZCaTFOWC9EdVhwZm9mV1F5b1IwYjB2NlJpWEE1N05EMTNMbHk1ZjZvelBDdVloNGxNSWFuNEhWaWkwQ01QU3lwVXIxUDRYUW1KVXJTNWNmV3hoR01vbVlJY1FzZ0JtQTNJZjRsU3Z4NG1Kai9BRFd5b0VmWkYwUWRZR0JLMFB3UG9OTVM3ekJBaWVteVdURXhNVEhwZFRTcFV1WG9HbGFaOUQ2Q0dsUVFseDB4aGxiRTNuYUJlcTVjdVhMbHk1Y3VYQjlTMXFYTGx5L1ZaTEpaTEpaTFA4dHhFT2dPSWlYem9Ib0krZzFkUmxOenhGdE5xRWRLUlNKanFGeTg4NWZVTGRKYnBMZEpicEI5SjRRN2RJYjFNU3lYTEpaS2xTby9oT0lNVkRRTHZaUzluSWVsWDREL0FDRk1wL3lqTzJCVU5abTBOU0hwUFVWSW01NGh1bzRBU3pIKzR2UXZpTWRDRUYzMmxGUUp6a201Qkg3a2h5eXpjdUhVemxxSGNqM3A1NTJLTTJrR2pKdFRTdVgrMC8xNW43QzBkNENVYnJQSzNtSFFoMURBUUx6S2RkUzQra2xhSnFEaUdsc29jc3R3QUFpOE8wWlRMUzBwOWR5NWN1WExqbVZLbGFrcVZLbFN0UGJUMm50L21BTllBWXRwWU5UWUpXbDZucElhT1pYR25NZ1hZdVhJaDNKUjJ0emlHQlBaTTZzbEJSOXBsZy9CQ3VBUGFXZElhRm05U2kyQW1BVDh4eTQ0N3dHS2ZNM0FmTVM0Zk0vMnFtMzBlWnNTUHZCTzBEdEtjV2UwNTk5cHVSOXBkM2w3U3d5b0MzQnhMcXFuWVNZVW50TEc1V3VPWDVySHFHRVk2TGdkdEN1S25CWVR1VUpVek15MlhLbFNwVXFWS2xTcFVxVktsU3BVcVZBOU9aVE16TXpNNlVTai9KRy9wVUVWRnluNVlqQ01aaE1TM0NuazhKa1VHZ0tsd1VvU3BVcUt4aW9BRVZKMTVtNWw4eGJkZk0zOCtZLys5TnRYdktUN2Myd1BlVTcvQUN5dlNYbGlJVm1JbUppWWlITnNFM0Q1bUFSN1MwdlgwSmNJNVZhc3ZNbW5lU1lwUEtENndnRUlFSS9nREYzRmN2SmxWK3V2N0p1YmRQM204OWJuWCtRakNkRU1vZ0ZlSUtqaVFVZEpLaFNCMWhSc1FKVXFWS2xnVExyUUVuc0N2YWN1Uk1yanRNUFI1aDhScmF0RWd6VzB1eHZNb1BIb1ZXMUVWdHBpUXJ6S29zZVpYRWtldE1jYnhMREN0b3pRQ0pxUjBKV0VST3BCVGVVVGdoTjNIVUQwTVlSSFNjUjlKK3J1TXhTemhUOTRNSU5uNFRVaTZHUXd5TXlDVy80UVZtYnhoQTFDVm9IaUZrSUVGT0ZqdkJONUFQRVFMZmpVVkdZTXVtekxHRXpLWlRXZ2hmR1lPdEFHbFFpQ3RtWHhHUlVjZ3FaNXE5V1YxejZvRzV1YmJKZDdrb1NkUVMyN05rd0JqcEdpWUVjUk9ZcFpvS295bFNvSWIrRVp3NFJjTWpaRFdwWDZ4dmFJZndob3hseGRUbE9UdEJPWDZEMEd1MHlqeVpsdExHRjBOc0ppUHJGeXNMREdDYW5HRHpFQmt4RVRzdFJBWGhtOU1yUW05Tit5THRybDhSN1MrRXFNQ25pTkpZeHZIUXVHT2xzSEM4TWVXWFJEMk04YVNRUVF2U1RwTjFBUVhscU92NDNRanBtSDZmcS9nSDFDYzQ3dkZhU0Job2VnMVpjWHRFSEZlOGVrK1ovZlFMc2ZtTWlVSkx0RE1RQndGZ29jdDd4bkJFMGw2ZGRHMkpnSlVsQ0dKY09WbTZkd2xtWjRqWkc2aFRLakVsUVdIWmNYalZxQ1BFZlNYUjdRRG9HSVpFUDhmMm50cDdmb0c4eGsrTW9HN1F3OWR5M1M1Y0pjVzhka0VEZDBHaDZsWU53aURDUy92YkJMNk1zaGRrVGFrMjhoMmxKYUFCZ2VJQVdYZURIbzlJU0JIdENzQlhpY2dIeEhTbTBHRVNKTGs1aW1jSXJ4TDkzNmxJay84eERaREFsTndnQWE2bEdDcGw2b0dqcXJBaVJsSXRCam96RVlMR0tISkQ4TExsLzRGeTVjdVd3ZjhzWjY0WVIvR1EwVkRKU2gyMEVOYjBOQUoxRVlOYnBEM2JlU1o0UThrWlgwaWdMSFVZZzVKWWRHWndJV0ZhSVhRaDFpZUZSbmNnZkVMakJqSzB5VzFUUFVRNktVOEVlQ3BRUVJxYkE5RTBpeTl5b1p1RENCSFFvMEk2TTZUMGdoYkloK0Y5UitTbVV5bVV5bi9MM3BXMDgyaGhIMVBxSTU2UnJ3NkNIcE5iTVI3SWlaZ1cwUGtsT1JkQ0tVTGVWeTdWUXptcU9ZS3JVMVYyZ1ZEVXFGVkFtUWZKTVU3M25JdWhkRHMwdXVOU3F6MDFoQ1ZIUTFaMkFFeXBzQitJdnFQOEYveXE3dHBRSnVSOFFZYUM2SDhSb1J6MEIvRnpvSWVrSlJFTkVPWllPRE9SWndFc2doaHdCWUNlUVFTU3l5NXZpREdDVXdHVm9HcVpHSTgzUzhFQkNoVzZDR0RadG1FQnNYTUV1NUtoRjJNcGl0Rkxsd2d1QUpBNFp1VktoQmpvZWgvdExTWGJVeS93QWgrbDdrWER4c2lxbk9sMFA0alFqbEdGOG4rN0JBaDZUUjlDT2t0MytDYjBveWFYWWdOaEMyVks5RDZBU3I0allBQTRJU1lLWUlBZWlzeE0wUmlydllKSFNEZUlHcEhTaUtQRVkvTXFKQ0VZdzBOQkN6cDROR0hxZlVma3VYTGx5NWYrV3dOc1J1a3ZvSDhoSEtjQ0d2NE4yRUQxR2orYytsS0hobGhrRnhaeHpaQlVQclRwTDhDR2ltVm9UY20vNWc0SGVNT3JvYUdtbnlpc2U4TkdIcWZVYTMra01BTENvOWRoV1l3MFlQVldsZWh6bXhEL04xWlJLME5FME5hSlJLTktsU3REMVZLbFJoTGc5b3lTT2NLTXF0bHVmdnpTNFFhNVFLaG93bGJSSFhaZzNmaTNsVkY0WWZoWUJFMEFsRU5YVi9ScnNjU251Tms0d2xrSDhwemhpMHcvaTNZYWtJL2txYnFndEtTemJNRy9WVVNFUWI3dE1PWHRNb283WmpiNGR5OURVMEZDbUttZE1yZDYxcUs0SWFndHNQd3NJNkdocTZ2Nk13YVhJallIaVhHdW1QNUhQVCtSM1llZ2pDSHBkUWxScFlFN3pQSm5NWlNMWnk0ZXRpU2lVR2xFUTZRRVBReDhIWWpxdk1IOEFxakNMWTdhQnFlcGhIUWpEVjFmMFpoZ0x1WU5vV0paRlhpVmdZZ3JmU3ZSVXFWS2padEJJc0dxUW1DRFEwSTZIcGRDanBjUXdRSGVLRklwMzd3OHNpRXhEMG1FdlI5QktsU3BVclNwVUN0dkZ4a2lsTUNrc2ZVVER2RkxnUTRNQXd4clhTSDdvYUhxWVIwSXcxZFg5SEIzbCtwVGJTN2tKQXVWRnRJY0Ntc3kwcVZLSmlZMHNsSll3U2RCbFhuTVJEeFg3aG9hRWZXNkkzN1N4cmJVZklGeFFqbnJCTWJGUkpYZUdKZmJSZXBGb1dYVVphKytDV0hwVjZpNjJUYk90aDI5QTF2Uk9Jd3phWXFNdEEybWFnQ2JDTGVHaDZtRWRDTU5YVi9TRDdISjhxZ3BVMFFIWENmY3RORERtS3FTVU1POHIxaU9zdTdTL1dlY3QxbmxMeFBZWlgva24vQUNpWEFuZGJJOXBSL3VHaG9hbnJ1RG1vRVhkeEtBUTdUUEF1NEZBeFdKVjJsVTd1ZEZRLzlETnYzdzNMVnQ1aG9Tc0FuZUt5b1pwQkl1YWlWb3hLOUZTcFVjYnkrTE1GQzRqYTlLbFN0RkM0L0EzKzBjWlJ3aW04STFCMjUrOW9ROVRDT2hvZXAvU0c2R1A1YnkxQ2tBU1dSd09FcHdrcUlVVTV4bUd5Q2RHUmNaQUVMc1pGaUlEbHpNS2oydUQ1WnZkNXd0emk3Tmt3ZHBqeDlrS2J5NGFrUHhNcUFadlVMa3lDRXMwSWRYOHp1UG1BYzMzaTVsSUpGNWpSTVdTV08wcUdLdVVCMm9LUjFydUdkRDFpNlF4TFF4RlJRWEVIdWcxRWtyQXl6UVlyNndHWEpOcnVGRVhxbE13eFRRaDZtRVk2R0dqK21yWFlOdzJJZUNiUkEyRnhMblJKdExhaTZyanN6QXg4T0o5UXlHVm9yRllvMFJkRFVoK09vZzRuTmdYSGxjT01SV0dUeEEzUjBpVzlZU0xQekw0UHpDcHNlWUlRcTRPQWtVdzJ4U2JYTW1aMElGeG9mZ3BudktTck9jUkZIT0paT2xkSmR6K0ozZnhLYlA0bDVzT2hIQ2JmRXI5QTVzbnRNb3JWZHBRbWp0RFU5VENNWVl3MGRUOUxaVUN3VTNoSy9hUFMzdWpnS1JzK1lSMFJTV05XSm9tZ1BRZm1UdE1NNzJsVUI3UXdBTzBRYjQ4eEJ6TU1KaldibUUrS2xZc1BVaVlMaFJjTENrSEJENGdyaEhSS2grR3ZXRFpHMnZDWmk4Q29nUFkrRTdSOFNqaDhUZWI1SmRaZjRsS1YySlJtQkswTkQxTUl4ME1OSFUvVVZSV1lNQVFxMnlKdTR4TDJid3dnUi9DZjRBdW1HTkxIdExKNlpSTGdFYlNwQ0x4dE9lOHdneVYwbEdBOW9oMjBVQ3BqUkhLL3hpZ1pGUy9paTlGQUV1WCtBL0F3akhRdzBkVDlSWVhJUjlKdHNlQ05mYW1kREg4SitSYWc1SUNZQVB2TjIrZURiSjd4T1Q1WVZnVDNseUh4UTJDNHFBQ1o1VE1QRW9qRU5xbFg0MW9yRUlPOExZbSs5R29uTGtTWVFsU282QktsZmhZUmpvWWFPcCtvc3VOTllsZnk3VVlLTEplRHd4L0hjczlOeFpjdURFU1VHOGRTUjJsK1FMNngzbnlUL3VNMjNIM2x5VlhlR0ZrbEs4UktpYk5EZThTOXFsT2lTb2FuNE9nY1loR3NNdmdsQis1dHZKRWhDT2xNQ1ZLL0N3anFNTkdFcjlTWmNpckdPd1lRNlJzSWJZQ3Y4U3BVRm5nbUNEaVhobTV1aVpkaUJ5SmxGOFFxRlBhZFZqdkxEL2NTQmxiRFdMZXBzWXBvNkdwNjJNSmZtTG0ySTNCbW82RVlRL0krb0dqK3JIQlpFYm95VWZLekJVUXhyai9CdlJsaHZmRVJpRG1IRVFWUmN2Smk1Q1ltM3RLRThTY2Z0MFpmeWU2WEFBWTVpeFo0UkRwTE0yR0M2d1VZZzNIUTBJZXAxcFJYRSs4aXVJSTZFWVEvSStvR2orcXJuYURuYk1TeVFiZ2JFekNySWZBNEhNQktkWWY0QkZaTU1ISEJoc0taZm95bVFoZ1JPc3NReVV3ZzdzcHErU2J4dDVuQ2d4U1FNZDJ4RzJHSTJWczZXQkRVL0FTVXlkVTI3WlVNdmFPaEdFUHlQcUJvL3FxdENLRGZFR09YQUpUYnVaU0MyVElFUHczTGx5NWNOWDE1VEJ0T0JNR0RpUzZ4NE14QWhCeGJydExCcW9Cc2lMczNlWUZ5cnpDMjdONlJqMFUxUFdKdE5oZ1VMbkJITEp0R3RDTUlma2ZVRFIvVmpxcUkyajZyYndRSTZpRGk3Yk1HWlR2QkhaL0FxVktsU25RZEdYeGNyMEdLVDVKYkQvYVcxSHdob09XQ2ZOaUQzSEcwSEpPeEVlNjZpR3A2bUV0aUZXQ3hITHpNTWFrWmpqUWpDSDVIMUEwZjFjNkxjWURDY3l0TTNRMHppWEFhNzBxRHJxN1FNQmVqQnZqMTNMOU54dG9DQ2k0QXBRVTNZdzdRbGN3YWlvaWJLQTZUUEhLOGlFZ3E3VGNIU0JLbGVnMHVYQmppWENKRUFDQzVMN1F6UGtEZEdDR1FVREVYalFadnFmamRhMFlhUDZ1ZEtsUkdXOFkyaHlneDBSdkZZNDlLbWFLT3FBQXhuTExjVGZUMHVoNmdxNVZFd0RDaVk1bVZmM1pVQzMwaDFseFpjcVVkTkJYR2grRjBXNFJ4Q3JKWXRLWVc4UE9WeGU4UFFmbWRYMHNQMVpKV2hNQUhXTUFXeFNDb2h5dFFSQTRZaklnZzc1WWVDSFdWQURyS1p0UGVJZG5FYVlqb2VvZ2s4SWx3eEdLd3JhcGRDUkdoQjd5bTMwVzJiZ3dpNVpxUHdzV29NREphSXdNM1JsdWJlMEJWS21GaW8wT3BEL0FmU3cvVmpRc2xBbHdMdFJZZW9VK3NGRlFBQkYxVFFkSUZtRDJpREIyUzhCZ3dDd2lPVjBsTTJQWE13a0UxbHU4V1JDUWhhOUkxQlpPSXRYdmFORkZkb3NaQnA0bHFhRTVVVk5uYzlwUUFNOW9Gbk9oTGx3Znd0Y3hGVE84TUFHOFBaRnlzWU9KRDVtV05vRGJMMmRLbFN0TGx3L3cySDZzUmladWZoRjVRN29CRWd2RUk3NFpiQmJnVGFaYkpzQlVTQWZFY01MSUxCdXVrT2NrcWhwM2w0SUVLZklsYWQ1WEtTN0I4amU4RTJabE1xWVNyQnVIRGE2UTZHeU9MZnhNK2ZpSTdzOW9Vb1FqZ0R4S0o3YUdwNnJoN2dlV0tGUndoWEFDTDl5ZXNvR3ZDR3I3WnREQXdkTkNFWmN2MEg1blR2UVIyMFlmcSsyQVFIN3p3Z05hdUxsMExNU3VDMksySkFpU3BVSXU2RVAyaG9UbUc0bFZmZEJHVXFKdmhKdklUTUE4U3hBcnZvcFJIV0tsOFh5bG1xcGx6NWlaNHI3emJYOTVnaU10bjlrNHA4UXFVZmlHcEFZRFFiUTlBT0c0cDFQbWJuOXAvdVhQOWpKZGxyekxBTG9sb2oySnZCU3lPN2t2d2ZMaUxBOWlWVUFOQ0VJK28vSmN1TUZBT3NVTUlkSTYySE1OR0g2c3paRXU4RjZCMW1Lb1dKZGtMV1pTTUJ4R21jQzhRSzNpMXNYQTJURTdtbUs3VDNLV3RNck42ZnZGUklLSlB0SzBMOFNwQU5UcWw3VGtiMmpvMmUwZGo2WTRJWTJKSHZEU2Q3TXBzL3ZNWXBuYi9BSW5HbjJnT0h4RGdFNGFKMkNkZ214SWUwVnRmRVFGRTJMeHB1czNmdDVqY1MrRzVmUzFnb1RjWUlIY3FGZ1QxZ2dMWFFndHBtVWxha1lTb25vUDRHRXhOd0ZPc1RCQnNaeVVjVkR3OHRRWHFsTG0ySmY2eDJvSWJyZzFFK3FUY2c1akRLSW9YZzVoUllhTXZpcWZNU1dSWG1PRUdBU2JNUVVJcHhMNWxoOUpzRW9yeE5sMmZ2TUFka0xhK3NvOHdUSXpEd1Nuc3Z0TUkvSE56K0tCYVIySmNFNGc2QzVxS2ttR29lY1Z0SHBrU3pSSGhZbEg4NVA1eVdTQUpoaEFycVRBSVN2cSsweUxSTWpIN1RCdis4cWo1a0ZEQTZsbjBZQWpYRVM0QU5vSWVnTkdHajZENlRWSVNKQU9zV0dqdFV5SVBDV2k3ZXExR2pGSER6TjFBSytaaGlxRng2L3JQWlZSaHNqL3RLbFZZaFVNb3hZeWtWSmVJaUJxNFpZUkw1MWxaVzBDWHNRM1RIVEFQYWJ6Mm02NkNDMTZpSktoZlRYUFdGOVkxdktiZFo5SkZoaGowUUNtRVE0L1pFOG40ZzNENG5iZkU3RDRtSldTTVp1YW1QVjBRR3k5b3ZMQ0pnczNJUGFIaUFkSUd0UlBXYVBvUHFXR2oyQzJMZ2lJODJrZ3hGVnpHeFpnTkFxVVEzVldRQkxGVnZjb0hBUDFtNDVYMGxkL25NN0xpTG9QaFFXUTgwV2dHZXJtK0poNEhRdVpzallPeEhDUlc0Nm8wQjRQQWpJZWhwV2pvekMvRXZmTWVIaWZaMW51QVRpczR6S0VxWHl3bEdJWWx2V1c5WW9wdEtsK2kwdUZWS3FMejdBekJBMlkxMG1PRDdtVHBGRDBzZnd1cGhxTjh4c0lON2xwVmlqcEJsWUF0UUV5dmRETmk3aER1Z2IrWTh6UkZRQnptTzBjQzFMUXFVZ1AxWTBpZDJOZGsyTmV5VnIyUWhzMTZRWHIxellkQTAyaUxXWFNvM0VMWmdyRHdKZ0FPTGlMcm1GTUcweDhNejhjK3BvTXBGdjdlbEl6RHdSWDU0c1BFd3Qwek56MXRObjJpckJkU2tYY3VLOUNjd2dST2t0bEhFWGlUckx0UVpCekhES3dOZm0yR01zT2dtMlErNEVzM2FveUFYcXk1ZUVZNDlENmowT3BneEphdktNcWo0WUFUUzFoank2TDNSa1doSUFBMTM3eDdnZG9ORk13bVp0V3YxTGszdUh6S0pWS3Y5cHRCK3E3ejZwRDFFc2J5ekNlN0RqWjVXWXdLN1FtTFRTY1RvUm0rSUdYYU5hV3lLZzU4a2NEeDRKVnVCZ0JVTitHQ2k3VDZHZ1hKM2xuaWcraDAralBjV2dCOEo5eWZYWUxSMmxmQVRjeUlzUmFjYVI0bTdNY3FNbUZtMWxFUGhSWGY0TS9xc2NPZDBWTHNqemN0aURJcTdsNGJtYllFazhvTzM0RlRiME9ob3B1UWdVZEtrdHdXNEVwbXp2ZThyRzRlWW9LVWNRTEF3Vm9rcUN3NFk2V2JjR21yRVlQMVZLYmRRWWJkaWNVVFZESzBiamFVWWJmN3k5RzNKQmdyRWNKMlkzbDZZd2t1YnZHR0ZIaW1RNkNPVVQ1cVZMb1F4WHBJWXZ0NlJVdkV6b2RaN1NsRWJmc1JGRzZYR3c1WFJFN2lZMTdKMW1OSk0rcUFMTDRoaVhMbDZVY1E4bjdzVDJjM3hLMU5waHFSOURIWkhaRDBMOVJBQTBpc0lVM3d6TDRpOVVweEFOSzlLUWpmTUxTWGE0QU8yZ0l3OUIrbm1qMUVoaldGUkhNeTFhem1FaGtxWE9jbzNaUk50Mmp1cGhYdFB0Slc4MXFVeGJib3lvVGNPc3BQaU1LVGdsRnU4OElKVzNwTksrM0Q4RS8wbWRlOEgyNVQyRncxNGtRUU1SY1hLZEo4ZUNOd1dtVWd2RjVKV3pqaVZXMHIwRUpubUNYb014ZmNNSGhBRHRaTHJFR0hwWWRrZGtOVnFMZjE5RE1kMlhMaUlhS0ZUWUtnblI2U0VaZ1d3ak9tQlAyUVZqaUVZdy9VM1VZTVlGeGJiNGxyZHdiSFNHZDQ1bVRLR0JVYnhOcVplMlZYOVVOZWVLWmhlMW1iV2dwZGYrWXpDRzhUZVM0TDJJR2pEUTByN2VnZjJUOXlZK09OUWRaUzFobmJHeTNFU0dKeHRObjZMTGhaVkNzdFMwTjRZSTdabFNwV2lwVE13a2Q0cDhGZU9JMTR1TjRROURHTWVJZWc0T3lLd0d1TUk3dldRZzNla3E1c29uQkMwMm5kQ09oK3FhRjNRbkd4VERZMmN6YURwcmdCWUE3T0pReUJYZEticDlDR1hKU3BKN2NrVzAwcVBWU2RPa1ZDa0lzdlY5V2JMdkZoSGRQOTlNK0tZUTJ4QUZ1N055SXdZNENPSTBka2RrNFVlWmt5WjJtZWJQNFdLN2ZlWGRIdk9iOXBWLzdpMURzaTEwMUN1RkEwSWVsMU5lWFNxMCtMWE56UTlKRGZzWWJMdFg3UUtUdVAzbHlHVUhRakdINnBWcnVFZHEwb3Y1Z2JDUisyZzYyVXFJZVV0b1JLQVg1UVhXUlZtcGw3S0V4cS93RGNXWCtieXBjeG55TGgySVNzSmVIU1pRS08wdU82QnU5UXNPME9MdkhoRDlrU2o1MEJVSmJvdEJZNTJnckZxU2tpNGtUWXhSU05ZWllqWHZMN2tGc3NWa3NCTitiekRjWGhMc3gzSW9VRFV0bnpwL2V3NXZrZ0t4WGVOS2FkNFh6Q0hvWTYySE1yeXl5T3NNOHkxdXdscmJ4MEllZ243VCswRWQxLzRtNFJIOTRaNXNmMjFkRDlURXZQWkpRM0Z2dVZNOFQ2aVJTUmY2ZWhNRGZ5SWxZVnF5V1M3VkRvTmxHWGY0OHlobWVFUy9wR1ZPbmJFTVhFcEd5Y1N2ZDVuYVBwUy9CRUx1czJpVXlRZ2NManNyZ1hCSm5EVVlNVmJaRExYZ2pRQ0xyTndzUVJabU95TXczRWk1U1NzcGMwUTh5OGlMZUE0SmJ3YldWMWNzbGVxVTY2S3VWQWg2VWxNc1FEdTFIQ0k2V2dNRXBHVUZHOHk0cW9UdTVJWlVzZDBwbFN2UVE0ZUpWMlY2aUlGZzIrMEFBMkRFTk50RFUvVVN0Q0FwVUpNOGJSejdvUjhOZ3J4Q3B5TVJzR1dZS2pTNk01MmwrMHBMMHVkRUdNZjFHcUwybGQ1WXVoTnE0WlFNeWdxODhWVHRpUHBwYStrcTRseDRFTndnSHZObDhSM0E4UjVWWWxrNERHQzVRMmliVG1oWU41Vk5VZ3hGOVNBeWVFQWxZa0EzSi91TDBBMFB3dU13VUZuV1dGRWlpMjNCaVVTdDhybDZBdnBMUUJsMHlnUmFXYVlOeU83MWtkVzdNenR0dURlYlAzalZEVS9xK01zcEpTdHd4Z0QzMFRLOHk5Vlp1aEdrQjBieW1aSFpoeEtNOTVUZURVSGVDVW9OMjRxUHBjSm1RMmpjTzhOYUlsNTBSZ1J2Nmd2MlM5REVkNWxXb2J3NG1RNHhYUWdueENTeUNYTzZ3SUpSbEZ1REY2RVY5S0RuaGxuQk1NSmNPMURMMTFaVGR0V2g2bWpLeDhpRHZMc3IySlpCRWhkeEVSUjBKVVdlRXAwbGVzcWdEakVDa3dzdmZCTFVnVkhCSGQ1MGRkcFJVWEVPZDh3MEJEVDFpZ3FSMHhlNUU1MFhSanR0S0tRemVkV1hwV2dtT3NQaVdQYUQwL1VxVU4wUmp5aU9zUllRaWpaQkFiN1FlZmhKamlIWXFJYXJpS3JsQ2RqY014TnBJYklRcTJKUllxRE1EQ3lEY2hIUFVWWjdRcVJoT0RyRXNoTEJjVGJsaVFZUUN5TUdUaVBBVUVKc29yRGVHQXNGdGNMWkxOWXhLWWpOQUpGM3djWlhxcFF5dlRaTHpBOVdPSFJqQmlWQSt3eTBDSHJBaThEd0c1MWxFUnJnbHZjZ0xBdm1JNGpUS0hmRThBdE4xd0V2S0VTQkY1QjVpMkFEcXoyMXhpd05TcFNDcTNtSWlYZER3akFIMkV1TVd1aXpjekhTWUpvVEMrNU15QWp1c3lqVWRXVW9vM2dvb2NvRXFWS2xTdjB4REMxR1dMaEN0dUNWQlZUT1ZwZXBobVRYM00rNUZSRWRxbFV1OFF3WXVOd1lyWGVKQjRJd3ZwNmlHVGltRk5JMHh4RjRSY0ZVOXFtT3MxNHpNNmszY0Y2S1Z5a0xneGsrSVhvYW1ZdWxMU3phRTR0UllCWEFyNDFXU0pxQVJFazk3YlRHWXJGUytUT3pDVitlVXdqQ0RZT3BEZkFPMFE4NkVJc0RCTnZXWmZLd0oreWJxdENYQVZLYUdBTWRVbGpFM0F5NlF0YklKRVk3Q1plWU5iMk8wYThKdXc5cHlRZTB5QjBkQ08xVGdBckFxV1FxNEkra08xdzlUK2xPNkQ1QWlHNHkvZUp3VEZGUXNFV3FtVXlvSkpaVmtKYjNBcmJMZVpBY2tYQzNZcjBCbDVsbTh4NjY4eU1Fc2JMS0lHTmdVaUFwRWx5MkZFV3hNUWpaQnFCbTRtY0dqRVhuczR4RkNpWEhNTkdBQ0l0Q3NUR1JlMXhidThVY1JrdUhlWloyVklqNk15MGJ6bm1GREoyUlVBZXd6Qkc4VUVzQ0xlUnRES0IycHZ1UjFJc0dXaTIwc3JaREVvM2paTEJpampKTzBhWERHSmNBN0tLaTdrVVVvWnNsT0Y0N1N6aFhTb1c0Z25oam5hV0liTHVtVVhZTVBORGl5MU1PWVUyQTRRZ0NwZFM1Y3VYTC9TMkEzM2dudVc5UlQ3TUNCZDV3N1FTdlRna0NpSnRpWWpXMlcweEZsdEF4Y0ZSMHg3T3NPeTJNZWxpckJlRERHZkl2QkFGQzdJaUdUbGpPMmJjaUJ0TXdtRWltdG1DTVZRWEcwTk1yK0JsaDFKY0lhOWN2ZU9nWWJCT0tRTXk0S2U4SUlCNmtkWitzR21BS2hWSU00Z3l0UUFBNmtBQU9VcktPcmJLaktlcktXazhzelRvY3JKUTRSN1duaUhMMGhidmVaZmwyUW1LSWw3Z3V6Q1ZDdm5lUExSZ0w0eUdNejRtQ3BYYUNzTHVYVVdsY3pNcGpLd25DZEhveXkzV1QzU3FCZTZwUU1mYUNRQU5xTkNpUHFQMGwxRFpUTWUyd2doYzBveDU5ZmFoRjVRUjNHaTRDTGdoTFRKTFllSmxtYzFSenVlbEpkUnhpQmgwUU1FQmlMWmNiaERONGh4QUd5RlNvUjhpWkFkVW9BZE1haWhzQ3kremdSSWgySUtvU0VCTll1a3NISU9WSVZTbkZTeEM0RkJqdk5pVmZxS2x6Zk5sUzlSVjBtTUJTVTJWOHNFR3pCaTJtN1pUbE5wUUN6SEVZQ3ZTYUlucnhLZ1dMS3F3SFdITFFPU1p4cEd0RnZBVkdqS0kyaDRsOHdMT1lHYkRFdWlLTTIzdmZFd3ZmbTRLQW5RbEhMRDhKK2t1cHBYVnBnTzBTWkMyTGZyTlF2RndCQ2xTa3lERU9zalBZQjBqaDJsVGIwbWZndWNPOHJERjB4T1NBbEJSNU15cE5VYkkrdHpMb3dtVUVpamlNQTZZYmlkVkdiR2V3MlBuUzRkRGVaSzZWTElsN2dBY3ZxUVFpcmp6ZGdpQUljTGlQV0JMbFBSUkx3R09FVjhTL0UzU2FUSURUcERpRXJtTkJ3Vkh5WlZvZ3hRZTBMWVV3UUIxaTdGUmlNQ3RCT2JsM3lNS3RBSWtRT1dRd29LTEszdERodURCUXdReGhzVENBUTFyUlRLWlRLWm45SmRjSHdVNVhHQmZIQkVURVBYa0V4c3gvSHZIUTRXSUY0Q3RZSG1iQTJteGNUemNUR2lNRGhsVHdJU1Z3VWNwRXplcHZuTTdLRFV5Z0J6TStpV2pWU0s4WS9vamdYVVFGWVdCbi94S3JReExUaEcxeXRtZU1HVGN3ZkVGS3hlV0dhSlhXRGd5clp1VzN1R0pVTlhVUTRsblNIVUU3ekExWFIxZ1BaUW9vK2U4R0JWMm5RRlR0b1JKVVNCWUlDMXJRWEw4THFiemNyZUl0elNkRU1ONHIzanBXRmJTamVwMklBYkVxVm9RUFZVcVZLbFNvbjZJNjVVNnhUNE9FWWhxa001Ni9nRndNdWF4RitSV1NVUWRtTXNxRkdwUUM1bHJjWkpUSmtZRU1vVnZMZ3R5eUtYRm9HbUVnVnc3YmFVbmJBbXlLcGtPQ1p0RWVFcHcrQ1lvRDRnZ2w4VkZ6eU1aa1h5UEV2UWZibkpMQzBVemdLNnhjT3U2WThSNWdyWWRXSHJheFUyTzVsVUY3eG1hczdRemc0Z0xzZmgra1c2T0pYdiswdmdsOUVxOTRJRVoyaTNobEN4WjRRaHl3S2lyeENIb252Y0dtQktwcHhVb0JuT3ByaUJvRW9sRW9sRXIxUDZJNnZFcEF5TXZmelUrcCtDMDIwQ0NwZUxZNEkxcURtTk14ZUYxRFBiaWRzMzVjemU2SlloUlBHdDVIV0xDc1ZkNDJsdWQ1Z3NUdG9KdlRFdjVNb2VwaGlOcFlST3FsaExkbVRNcUZSRHNHVjVma2xBQ2RJMFcrdy81TEowZHIzbHIvcUlTRlE2a3F1R1BWQkZ1Kzh1Q1BEQnlPWjdldSsyZzFCUy9Sd1VRTWFVRWtDVG1NcG5VSVQ4TVlJRE1ROUpxYW40MzlFWXdJOUliWmRGazRvbHM4aHNpYytnNnN3WGV3VExtTEVIaE8zQnFIQ2xhRURCQU9HaDNnaTlHYm9JaGlrSDRRTzAyNUhjc3lYYVVnZzZ6Y0E1Z0tpWGViQVBobTg3UjMrMTl3Z0lacDdSV2ltbTR0aGNnQUNpcDNuZ1FleExsSFYrWnNPSXlSSHRMVERmUmwwWFJ6RVZxbnBEUjNsdDZZcmN2Sk1EY043WWNzaW5GeDZQU1FoS1dTeFlOd0o3OHdNTnVFVERhZkV0MXl1QWRWNG1ZM1pVK1pVRlFJUUdvRXFWS2xTcHRML0ZVcjlET2hvcWN0VkZ6eFN1UGxIQ0dxaHE2MWQrSmJ6VFV2WnVzUWtjVENEMTFPc21XUXFIQVluWnFLUThaZTBwL3dEQmlOdmpkUGNzWWY4QXk5SlBMODZZN0Q3TUpVam93a21EbUV2QVRNRW5sZnVNbDVMSTZZS1l6cTZ0RUFyTUdPcERRbWhVczRKVmxIaVlWSDJtOXBMbFl1bkVWQ0VybHFnZDJwMVN0T25VMFlCa1lubUZoRGFkcVZjUUdDYmZ2R2JBSFdYd2pCWEV0aEY0RXlTVzF5c1VPN01PQUFPa05Qb3hETWJIekRNYlJUQTBQOEE1L1NHTU5DV2ppcWxLbER1SXVxVzNkSUdpK2pPaDBpaHdzQ3pxd29rMkRCM0kyZ2JtM0pmYVV6VDVsSmdKbUdXYnhNREJ3ZGtKejlKd2o4VHBtUEVlbStKL1NUK3VtNGZCQndBU21pWHEvdkVsS2xob29MaXVzSTRZcG4xSDBoKzR5Vll3VkRBQzlXWllQZUVJU3pTdFM1blN4RFZNcmdEeEh0dFN6RmhGSmJZWHBHVkI1bEFLUjFLT3MyeFUyUXVNeklKcU9FUEpDUzAyQnlRSUt6bnRNa1RVT0pqcExMRGNTazhwaUhiclJWZktSUy84RWMvcERvUmdTcU9SRnZsRXVwWldpNCtpb2wyQ1oxeEQ3SkRCYWN4eGtkaUZudUFsaVQzNGdRVDJnTmdFSU12VzlibHk0c1hta0pOUzRwMDM0bDhvT2hBOENlME9VenhLZ3NSZ3ZzSmRnRW8yQklGK3NvaE1KY1VKWDRDbFZsa3NzNGNRWG0yQ0JoWFNYbEwybHU4OW9vVFYybVFlTVExVFk0WitJRVF2VVlBVWRxVWkwM3hNUUpjcVZERW9NWTNqQmFXaU83OHhoalUvSzUvU0gwamJ3RERHeFVHczRKdzFWRFNqWFZBVndNcUE0aWkwVU9MZk1GQXZhVVRCNlQwM3FpUXAxaXdKZG80NGNPaFJtbHJBNmtxZ2UwcHd4NGdXUG9sb0ErRVhOanhLa3dESFptQTJ5Z3UralFTdldseEJLdFF1TXh1c3pLTVlSUE9BTjVnUEtFLzAraUpUZWhMa3MxQU5SdWdsTUIrcFZVSWpDRVpVQTlacUNPd3pRTm9BZERVL0s1L1NIMGcyWFl5cHRMUUxiY0Q4YUJ6TGhIUnc2YWpKQkZTd2NRaFJ2YTVnREZhWG9NTlNHcDNLQkxrSjh5a05TV1loRUE0ZEVCYmpyR2l5UXFGWkZYRXVEb3phQ3IyWTIyZitwY3VuNHdSUjJsS3FrVFAyT0lydzlPWldoQ1ZLMXFkdEVNOXNzeXBhQWpEVS9LNS9US2d0ZUl5bE0waGdxODNNM1J3R2llakp0THpmVGlwc0RnbHhydE95VjZEU3VZUFRVMjNlOHhRTzB1bE1oQmg1cVpYWjd0U3RXNTFpQlRsQzlHWU1BRWhRQ1VSTGk4UUFoRFJqRGc3UkZuV1YvWjBGNjNMOURFbUV1ckZYZUVER0l1U0pLbFNvRUFsU2lWNmt0RXR3WVdXcHZiKzhVaENINjJ6RU5nVHVnSHVnMUcyQlJsNmxsRzVZeHRSYm5NdmhpOHVJQXZIUmlRTkNWSGFyM2lyQmRHNHVGdXhDQW5DNWZXYktsS0xVTUJUeE15R01HVUh6aWJBSU84d05nZ28zQUNYMGdMRmJLRW9vSXFZQnZoZ2JkTlpSR1FERlM4U28zUm5oWi9hRzdldXRLR1ZLa2JKbHRISVoyTUg1MU1DVWxmdkxqNHdKZWdoK3VZbXlac0ZVeGJmY1QwNTJxV2hadEtkVGdZNWlvU0Z3RGllWEtNRnNES0lNdTBxaDZSNWR2dktUZFRGaWtYWklZZ3BtMHFjSjJoc2JlSTEzbGRNeDBsOXRRWFlsK2szMUNYeTMzSmRpY014ZGt1OHVrc2RCcmU4UldjSDl3d1hIZld3SjI1MjRkT2RxVTVsZktJcktERE5KOVNvZndzTXFXZDVUcVFTWDZUMXBLaUdRUDNtZDZIT0tOZ1hwSWZyaWlGNGluSzNTc1U1UGdnVktpbkExT1Jtb3ViYklpR2JoS2V2UFZtTkYyWVdNVjFpcStlMEhaRHFOQmNFdDZROGdzTUkwbENJbG14UVR5akQxTmxWR1FBSFZMdm9Db2NaRXNDVTlNeTNGT1JIQ1Y4emw3VDdtQVBML0FLMGhIZEhMUVIwWFdpVm9OamdrT2twVXhBYnV1RzRNNmxnWE1GTUsyakJPRVR3ZzJ6cFhwSUN4Q0V3dEF1V00wMmFuNjNtZ2J4bGRqVEd0dVg1bHdoRURLcWNFWHBrV1VzOEVTRmxPa3pBaVc5c1FTR2N6RGtkcHNyM1F3MHFac0I1bTNGa3Z3ZWt2WVZFcFNqTVlhQk84eXQxNGVKVENnNVRMRFZncGpoSVBCZ1NyYjFsT3BCNlJnUUViVURwSHZDR2VmKzhkVFpTeU8rNTRWTVl3MXZxeUViMFpWQ2h5UzZIYkZXSWVZZWRFU2gxbFBBVEFGTjRZaHZFUk1INWdPaXlnaFRNekpkdGtkaXRvZnJxZnZLSU44UktvUjBJazJwYmpWRXN5N3hYZ1RyR0NvOUdXejVHQi93QnFaOU1yaVBCTnB4NGppMldZUW5tT0F6Y3JDanF5b1BHTWJVTnlXTTZFQmJGbENWTjdtSEtPakdsbzZNdmw4NFpZaFgyam8zcjZTZ0ZrdzZDUGR6TDZJQmhvKzZMTG9pYlJJN2NPbi9JTi9FZEwwcVMvVGRaZGxaaUROWm5HUXNwZDEyMEdEcmJMN1MyTUYxZ3ptWlFudDRUWkJ3MFFoaU9reFhZVXhwRGt1R2o2cmx5NWV0eTVmNll0SmNwRGxzamJiUmNER1lFMDlwc1JEdkxIZzVZZE13K21qb2xXTTdrU05oN1MrQmFYK1RVZldGZG9FWEs2eFlkc0xhQUltQ0xxRldUT0JPS2lvbHVDakVsQXlrcHd6UzZseGx6S2ZiVGU5SnZjTm1VWHRMNzhTNWN1WExneTVjdVhCaDQyNkFIdkxDeFZob2VrdUs5alFRRFVsbnpSSEVhU0kxeHNUZEV0TU9ZUHBkTGw2M3BjdURML0FFaGFqbVZIQVhpWUFVMlJWRzZTdURvUjFDdERGYlM3RUpRYkI2YzlaYkJiSytJMnpSY1RCRDRqSVJqZ21NSnhBZFRhQXQzYVY0NWkyaFhDWGhYbmViVVlCNVJUUzRZbDZtRVlqMHhjUFZ0allHM3ZHZXdiUWxMRzBxcDdlb2o2U2MzREVZSFd4Qno5aW9Hem9SSVkwSzVsdUgzTUVCeVp5UzkwTmhwNGxBQVhtWFlqM2xncXcrdEdhQmpkdXlYb2JFdmJ4dm0reFJnZ3ZLSHltSE11cFo2SFdwV2xTcFg2V0xqUmE1am9OUmFrclFiUldlRndiZUljQ0VTdzJuZ2wzNFZYNGFnT0VGQTZ3eDZvcXJlSmR4SWhPclFRaHRVd1JheTVjWDFYaUZLRlFmRVh1L1psZVZQVWdJSEpCMTZlb2o2YXZVenlkSGJuQXYyUXRpUEVReWxCM1k2dE5zTnkxVUV1eW5abGlRZTBIUkxiSU84cVRrZEpSVXZNQkZRNndNMFZadVVJRys4UVhPNkF5TFBERktibGh2Qk1DUVdHRnZsUS9VMkVXQUpaaUxtZUdXYk4wdnkzQXEzaGpEb1VUNmt0M1JuWVpEWitDOUJyTXBocjd5VDZKcFZmVVN6elQyeEdEOEpiTHdSY0l0N1RidmptRlI4UzJEN2ZsTEx0TUhkVUJkcHFidzJxT1M2Q1lvQk1RV1NpTmp2S1ZhSy9JN3lqQUhpS2RxSmJrWHRITFpPc1dLMTZPMDRPWThyUE1iQ2E2TTJVYTd3TXdPc0d0Q29RTFlrMm5NV1FnM0hXNWN1WExseTVjdlFoK2pCb0x6VG1wVzBXb2NCdkZlbzNSNFhvZDRralRGTXo3YTVWM3B3L0ZlZ284eEhBOUNiRUE2cXYyaDFtQ2JBTnREOExxRE9aM3AxUlhHdnhrellHdVdNbzlDT1hSQVN5bUlrZmdnS3lKVHRvR2tVUlFkb3ZhNDVsYVdtMEw1UzBIQ1VTbE40MllIcEVnWk9rcWhMUmtvaUhBUWhSekZ1Tm9SRDFabVpuMGtQMFkwSk9qY3hNRnRDbFRBWWhUSlNrS3dVWmhjbkhWamkyRzByUkVMZ2VoOVRFRXFWdGRTWjlCWVRZUkE3eHVIaTF1Z1ZEQjI5SzVmb3VHaTVjdjFWS2xTcHRDSzJxT2doLzFCeTdIUFdDQTFIQ0tONCtQVnpMRWxqdE1NQlVEQWhyVnhlaU9RSTd4QmJTQUJ6NnhwbGJwQkRnN29hS1R2S3NROXBzRVdFRGNZYmozYk9veTVjdVhMajZSbHkvMFZKZ3VrcG9SRGFiQWlVMm5FeEFLbXdFN3BQOTBvR1FIZm1BVlFtOFc5Ymkrc0lrd2xDbGhLVU1WekRhTmRtWDlodEFUalNFQVEveUQ3VkdqYU84VWtScHZMd0ZJY2xLZ1FKZ1VTdWtxT0piQmc5cG5WUkV4U1N2S3V4SzVLcWp2REhlb2dDNVUzbXpGUFVJc1pGVFlQekg2UURSbUZ3V3VYOWFPZC9RL3ZvL2hWUVppMDJoeGJmcE4rd2h4SDRoaHJNY0FWWlBDQi9pMkdXY29Jd2pDNlNyQUw0aHoyeUdLQWdCdWQ0SUFZNlFVUkdWdHE4eXhTRXhGVUZkaVptb0VXS2pHQXNkbUNDeVpiQ0xyTVVjY1kyaGdMNVRQTEd1WHFCY0ZnUjhoQUFOUWxTcFVxVnJVcVZEOUlvdzdCaU5aTUxnZ3hmV3gvQ043TEdVUlFyL0FPNGRGTjJEekdoUUNjRlN0S2xmNFd5Q0VRWFc5Wnd5eFpvR01LM0hhY1VCNGxJamNvaHBQRTJTdGtyMXRpR1J2QTNMR0FzcUxidkJVWTd5K3lqb3g5U2p6RGhFeFhnRGZhVWphOTJVMFVoRTJjeXZHbWtWeFdocGIwamJDR29ZZ0tEMEhyUDAxSlYzaXpCY3NjV0VmV3cvRVFDVVJQVS80SUk4a0pDd2NSR0twMmxzVkNaaHRsWlF1R0VmbUtnQnZ2TUJadW92UnFjbFhZUkJBQ1VJNGx1VU8xVGJhcGl5SE9aVktCMGxBQUNNbzlMb2dsT3dpWmlVVFVvMEdoK0EvVG5SU1pkbzlwdWl5WXRHWjVpeGN1TVB4RU5IMVA4QWdqVTNsQW9Mdkx2R0RwUVlrVWc3U2dJUWtpTzgzaVdDdXNZemV5Q2lXbDc0U3dGRWVNUHJMRWxVUEFwVVV1T3RTb3hHeGN3NVNXVGJON0xnUGFEUUpVUDFlcFVxYmNScVl0RXlJMU14Wk96bzdxSHpHQVphTVhsYWtXcGxLMFNWS2llaXBVcVYrU3BVcG5rbGRHQTJDRkNsOXBjSjI2U3l2WGRMRVZPd3djMWpHekFwUSswbzJoM2dhRE1vaEVVSFNIWUV5dzd0R0kwVHduYUxOc3hpWVhPRGd1RUtPSXY1YTFLbFN2MDVqclNoNGNUYUNJeVJzbVZvVXIzVWNjU20wVzVjb1pXZ28zbHJyS1BMRUhPcnJVcVZFWlRLZnhtbE1wOUFQRUhzTWZkZ0V6alk5aVpHMlRDa0R0RmRrVkFHN29HQjBTemFjckw4czVKTnREQVlBSlZTL1FFVDlkdldwWHA5cFVLN2ljWkZaaTlEUURzSVpNU3FDRlBTQzdRcHE2aEtsZm1OS2xSMXVwYkt2bUU5SW44Qk5tS21Td2xHN0FiemhJYktBTmlHbFEwcVZLbGFNcVYrdDFLOURxNkVZRnh4b1J6Q2JnRWVtaW04S2NQek9xSHZFY1NxZXgrSjJ2eE8xK0lMWnVjWktkNDdpUFVUdklyb3kzUmxkRFBKUEpLNms3dWQzTzVndXpnbTBIVGduRU9Rbm5nM01ISEtnTzZzRDVRMmtEMGtXMUlEcHBjeEtPa285SjZqL3dDQWRIVjBJdzlJMFppWW1KVThKUWNURXhBSWd6c0U3YVBSUTZLZHJPMW5henM5RWErUURoTzBuVENkU3BXbGpwSzZKanBLNk16QlNLeTJXd2hyZjVRLytBZlM2RVlSOVNTcFVDQm95dThydktscFRBT3NvNndEcktKUktKVXFWcnZQS1ZONVVyWDJsOXBlbGQ1NVR5bFEwcVZLMUpYcXVYRmYrU1BYOEt5NW4xTEZFT1NXNlR3bmpQR1ZsSlNkNmQ2SjRnUDVuUWluTEtITW82Qk1DQjdzL3Nwc0RQb05XVnBnczhRcEJjWUl3aHBVcVZLbEVvaFVwNkR6TTZyM2dkbXBHamRJOFkrWmROOXZ4MUtKV2xTcFdoRTBQOGhsbzZHOG9DWVAvd0J0Ry90cC9lUS85U2Yyay92NS9leis5aVcvenl6UjJNRUtzN1FiMFlzdkFzZGlMQWpVQTJqc0pad2owNUtkQ1U3aE8yMExzWUtwTDdTc3hwMnFIcUkrbGxhRWM3SW1XRkRCQ2xEbWNmeTQ0UkNZRjV6S1N2dEFudk5TenVpR3A2YWpmeFlxVzFiSUI3VE1DT2grR2hPTDBabWcxMVltZ2l3OWFWdE03RVNOQWhwVFhtWmhsUlVvdXN2L0FBeU9sMU50Q2YyVUcvN1QreW45OVA3NmYzMDdMNW5iZk03YlJkcDh5bXNabTJqK0ppcVVCWHlRNFZ2MW45aE9pWHZvZjk3UDdHZjJNL3NkUE1mNzhUdjg4cDBEdkRyU05ieTVZaTRSakFCWVppa2dCT3lvM015Mlc5WDRsWDFmYVU2UHhLZEg0ajN2aUVQSjBnTVdNZWw0K05CZ1JkeXRXRXZ3ZWhqQWxtSWh1TDh5eFFvOGJHbmNadlBySjJhaXhtS1JlaUNHdkFhbnA2T2MzVmpyQTk1U083QXlXTXc4UWhvZW9sR09DRTJJaHJGM0RCd1Zwa0pqak9ySHFzU29Eb1YvaU9uMUk1QUQxbmQvT25kS1g5dnBmOXZBditzL3VQUUdIdThmdkd4V2RmeE5Sb3ExL3dCNEZGN3dJaE1neVIvOHlXN2ZGS04vaWw1S2JLTytVcUpIT3NDUWFpZ0ttRkJvNmcyUkR2T1RJQnFLWHhFQzJERUErRFFSN2srdkRWZ1FxSEt4ZDFINWJJdVZRcnJDWEpQT0JBMmwza25XT2s5Q0tyZS9udkYxYStZMWFybmxuMjh5dnpwOUxLM21BaFdPOEd5Rmlvdk1LSDc4L3NwL2JTZzNYUmpBUzF0cXprSEkycTFZb0ZFMzBHWVZZekZEc1lRMFBRckhwRkE3MWhVclE0bHFTenBONDdTcEFhck1mZ0VJRFhhTmdCVWZEVU9ORGd6dVJPL0JyQVVHVkNiZTVaRDg3cGF3ZEpYaU56SFNVZEpSS0pSeEVOeEtHZUU4SlhSS0lsYlRjcXR2eEpLNDRkNFdkbzhRQVNxWXBqeElwMFJsUEdYdEI5NWRoT2dFb3ZHMWZFekcwMFJOeGxvTlh0alJoSFVsTjFpWTYvVW80WmpyUEw2aDFmdEI2NjlvbVF0NGhYRk1BZVNmWDF2bHFnNnhRdDNXT09ZVnNXaVdLcWRwVGRFU09IU0Y1VlEwdzJacUIrMHhUdEhmbmZ2RmhGODArYTRkL09uMWtNYWpBd1FtSUtjVXhTajhzL3RaL2N5dXJDT1p2M3AxdlJBTnNTbEl5N1FPN0RkUVdNN2t6aDBtZVlhZXhJYUdwT0Qwak5xUlJtOE04enBSZldFYXNJS20rQWlVeTJNUUFyT2gzc1FGb0E2UnBoUzQrRU5KalorOGF2c2grWWpvbkRlTTdxOGx6K25oenlIOFovdWZ5WC9ZZ0Fub1I4TVRteXBURnVUeTRDU2VQK2J6R2NQK09zeWFsMksvRXl5QlFia2Rwai9pV21EbkVwMW9YTXZjYk1Gd05DWlFxcjBSelIxWlFqdlNBMGJMMFlhbDNwaWdqSyt3aWR4OTJIL3NzL3ZHUC9wTVN6ODZ3RTA3aGdJdHZhZlluMTlib0draUlybFp2aE5vSUt6RmpUcEFJc09DWks1SE1IWTJiUmxWUmczTVBCUHR2M214cG4zTTVlZENUVlUxN1dDT2JRSGlJbTR5azQxSzBIQ2ZYK2tLek1la1JJQndHK0ppaWJFY0ZFYnhLdHNIT3BxVDZETTMxV0l4ZTFUNnlwWHNaRVZaNnczUFNXY1lDWmd5N3dLejAweEdSb2VZZGNlOHYxZ2ZvUWp3UDNuMWtQeXNJNnB5VmxlSlhhVWRJSFVTNWQwTkw2NkxpNllCL3dDendTM1FsdW54QzI1K05qRHArcEFuWnFNQzFiTU5iRkFSRGpVY0NBOWtiK3lnUkRaeVNzRm9LbDZ2TVhEekhRRkJtUG9uSklPYmFiWU5wYjNJUGowY3pJdHhvZ0hMRHJxVWx6djZwMnVlanR2OGtwUk9RZ285b2FYZis4ZW5lYjdwSDg5MDBjemE0V0dUS3JtWWwxTXBBUXdqN0l4cGxoMkcwNzhOUnlyYm1FUnhSR1ZYb05IWUZsQ05pSVM2ek1abDh4ZFJzSFFTNWN2UWZmZnZOanhEWTV1VVJnM2dEUWJNNWVZVjNTeWplQWc1clNzeFZLaDQwMzdrcUhaKzhOUHMvYUxZVmlYTnpFRVo4ejNaN3NwbVNYRnhtVktpb3BsUFdNbzBBOVlmOWhQN0dmMnNGLzZ4QkRoN3dXRTBHMHE1bFNjRkdPRW9yekRxSHZQN1NmMzAvdnAvZlRkVjZINEdKQ3BxQ0cxVGVJYkRlNWRJSmw2RFk3UXpHTXZFc1R1SXdySk1FWmRvdU1KekJldUhRanZBRXhuMlRMMlhOVkZVMno0aS9MNm5mZlgvQUNkWDZ2OEFrL2xIL0ozbjEveVY3djYvNURxL3Iva0Q1ZkpMK0Q0LzVHdFpwdmovQUpLKzRjcExpd3hhVDJsUHVDdjIwQm91NlFSbEZhR3c0U0VSeHBRQTd4OUJQcVQ3L3dEZVkyN3piZGJRL3dBTGljb05VenB4bXB2cFdpVmlPSldZREZhRVNsdTRNcFFwSzJoSFhxbkU4THh0Mmhvc2hLS0UyQlN3RWQ0ZWtQSDBYN3c3QjBnckFlcGhjdHc5WmlhTVlaL3RCZjNPSUFZRnlJUUZ1cmhCR3UwYU93czBPMGN0YVJmRC9lREdkUDdTOFpXNTRsS1JkN24vQUtWLzJmd24vcy9qUC9aL0hmOEFzL2t2L1ovSmYreitTLzhBWi9KZit6K2Evd0RaL0pmK3orUy85bjhsL3dDd082K2Yrd3RHakMvK3p0V0dKUlIyZTByQlg1bjkzUDdPWGY4QWVmMk1NS1B2RXVMalFUSkNxRkRhbUxmOVBSaEdPL0tIS0F6Y1lmZ2RBTWJKRmJVYndOb0puTTM0VkE4SFdkNXRZbFpiUTFBeTJjZHBiMlRNeDZTRUdvVHBYWFZSK0VqbFRvZXM0VCtZY090ekdySXpNT2VIOXBLNEw0ZmtnOTBJZU1TOHkrN3BNbjd1bVp5ZmowcktJRksxMDRrYm5FKzUvZWY3ejcwL2x1azVRcDVvZ0FHaE8wcThSdVhDNHdGQVdvT3k0ZUNNNHNVb0FOalFqcmJBTWN4dGlXR1BDVmdCYlBLZ0RSU2xGUXVPSm1IcEcxNktjZkVyRGU2T3l5ZDR1MEp5Nks5eTQwRFJtVndzOUpXTlZESTJ3WmdYbUlMOUdnZHN3SG9aVWJ6Y1ppV1RFR1dTenBMT2hMbGtzOUF1WlAyL3ZQb2YyZzMyc3Y4QXFJc0pVc2xrdnZBWEpMZzZLZFlvU3lVZ0lmdVQ2Q096OFJMaVJYQlJqekcxSENVeFVUUUNsejBLbnZMMXRMcVYyTjRVTnBXSTI0UXVQb1ZjWGhGMzVIaUNiVmVKL1ZUK3NuY2ZFUzUvRVZ5MHBTTTVYd1QrZ245QlA2U2YxMEtWTTlKYXgyalc4NTFuNjdUYUsvNE50WU4rQ09nN1Q3Zjk5TDcwL2h1azNwbUR2QUFGY0lrOWhpRDJGRDVqUkRjYmdlT0VaKzh0ZUlJenJBY2FhaEhWWFVRWXo3WXVOQ2VXVW1DaFYrMDVFRUtMZFlrYVhDT2p1YU1KKzFQdGYzMDd5TWVvK0pZa3J4TW1UYU8vTEJaY3dMN1NKVWFGQWJaZXpLVXlvcEU4U0pTSFpMOE0rQ0xvZkRQNkdmME0vb1ovUnorcG45UlA2eWYxTS9xSi9VeitwbjlaSGNmQkV0VlRpZndYU2J3Mys0YzQxL0JDMklQQlNqRjJFTzZQbVB0V1l1R3RqMXBCSGhtV0x1ZnlKRXFvNktvWnhNUUtUZUFxWnhvaGpJeEVBMnM2cTdtRUE2YlFyTmFqVU5BUVUzRkxBcGduc0lRcERSUWxvUy9DS256MlRkVWh5VkRMcEt4Q0RxTlhEMVFhUjIvaEVraWUwNWhUZVVocGd1enBNQ2J1bmJDUEY5UzQ2VDJZa1hPR2didWhEZ2RvMmljUkN1NkZoODNwRE9LQ2JRRm5oZ3dkNHVJZ051c05UVWI0bUZHS0tBd0xsdkEzeXFsNkZVTG0rbDZnejBMaWdJVlRUSEVLOFRjQ01SY0JuREVvQXR2alFWamg0aExBYlFMU2JNZFAycDl6Kzh5aEZodTlSeklBbHRaNGpzN3l2dVJFQVBMaHQ0RzB1aTlwdms4RU95dTI1Z3A0L0dQaENiWVRxUUhQMUovUUovUkovUkovVkovVEovWEovWEovU3AvVXAvVXAvU2svcDB3ajhhVWlYRFpoRFlHeEEzUUExWVl5U0FLQ0wxUTh3d2MzQysxQUZ0bVhMbHdCa2cva3d3WkJFNWx6RVpOY01HTE5MM1hhekJCQUdLZ1NBcjAwRVU0Q3lYY3E1aXdXeS9vM1VHNzBZS0dDV2p3alAvZFQrM2xQL1dXNER5d05JVVc5NTVRM0hVaEU0U28wTGNaU0RnWmppT3BSWk44cGVndlpuRVZLaFJxSmhFVks4eXFWK0lQWW8zd3M4c1RBUGVaeU9xdUIyYk1PT3F3aXVPS0c0Tis4c0FoaU9nTVVFdXhNSnJTdDQrV1ZlaWVzb0hrRnl4Qk9ncUVVTHFNVHBRKzUweTJJWmxCM3JtL3RDZnNURHkvMzBDS2VVRE9JQkxZbjJJTGphc3hCUFVMMmlFaW8xdEtZQ291Tm9GaGFMOXg1VHg1Z29NR1VCbFBhVXltQlBDQTZTa282VEhTWTZTanBLT2tvNlRIVDBHbDBCZFlwamcyck5vZkhZTFpWaW9MZ0tTVzVBcWdpVVZPc003VGFYb2ZqQzVWTUtjRXJsVGFGaUV2b0JONnFtQ2R0YUZyeG1WVW85R0ZuU1VHQVladVh2REdZNkFUeE5xbjJJUk1Gb0hRYzd2NGwvTDRpOG5HeHBZMVhqQVFVRHhHK0pnT0EzVER0S2hQRll4RTd3VzJGb0VTbHc3UTFTV0ZXcmlJbHlORnhJckx6SzR6TEpEY25LdG9UNitYUnQ0Z3hCcGRtbHc4eFJoRHhEWHVWQ0RDakFyUTh3UWRyQkNISUM0dGxVRU9FYlJBT2dXMUF0WGhJdFM2RE1SSURIbUdrY1RqNG4zUDd4bUNUTTQ3QVlLbWg5elhhUVNGQU4yTVFFUUhRbjhUdXpuTFdtekJROFI5WTliREhvdXJYRUJBYXg0bEYwTkJsbVVJRStwaW5DNGlHbU13Ync4SzV4TEJieWdOK2c5YU1sQUp0Yjk0NEFSMFpiQU5veVV1TGU4TGR0aVZaUjZFVEFROUVyeDVaVGJKSThScEJEdWNNZHd6TWw0aG13UUhTcFdOaGlOYlpFN1NzclZCTVE0NFRGUU9vWXM4d0tTWlNvdUNlOE1MM3hQNnFmMXN3VWNrYnZDNUM1aHN3QWJFcU8yTFlxQ3N1SjdleE1ZMnEzbCtDaExQTUFiSmZTR2RBbHh3VjNENWlQRUViRzhwaExGMWc0RXRtNDRuRkYxaUlCUkJLeThOUmdySFdDd1liaG9CVERSRGJtQ0JMSHBwZENDSE1SR1FrV1VRSUI0bFE1TEpYUEJST3AzbTgybTJtMUxiYzhVbEhMbUNvczlWTElSbVNmRU5OMWY3eGhFRDd1cVhZVjh5Mkh5bFh2UHV4VkNXSjJxWE1tRVVXYUVZWllRZHN6Q3lXMm0wdGNHeHBVcVZLbGZoWlVTcHR2dEZnRmQ1ZnN4eERJVjZ4Sk5RSUZyS0kwaEkwUnh4VE1SSXZtQ2cxVEFHMEpaNDlaZmZMdkNtWjVsU0IxdVg2Y1JlQ1BzdzljUnQybnl5NVIwbUhXWFFyTHhxbk54MGJmSkF1d0hpV3IvWWpEc3BGVkFmRVhvUWdMQ2lnVUh2R3dKNnNlQkxMeXhWWkJ3UzNJT3lnSWplTUwwdUNydEc5cVBFUnN5dThTOHZ1U3BXTXdDbVh4b1hoTWY4QTJwL2VUSXJOUFNNRnBHWUVJTVIxbmF3cWk3QWozbGVpVzhSb3Z2bUJwd2dDNk1MT3NyYUhtaVBNQ3NBZ1ZzUVpJeXVKU1lMQkhzbG1PcVZIZW5PK1lhQXU0UStteTJNRmlmRVJnUVV5TVpXVGlaUlZWellCb2hFa09adm1GcUdaaHhXRGtBTVFPWGVGeXB3MGdTVzB4Q3k1ZkdKWG94U0UyblpGeU9FaHZ6ZEc0dmhFZHZoZ08veHhmL25DR0F4Y0NtQVFiRVVQZlpNSUxlMENXVEQxcWJ3THhjNEhWbEpTdUpoL2czd0ZRNGhZVEpraUIrUkVyeE51SmwydnBFZ0JrdUhxQXhGNFN0MUVTQWNkSWFwNWNvK1lIV1dLYWl1ekRMZWlPOE5xa2V5TkJwZmI4QkhFTU1nWHRHQVpHQmdieXpCaGxFWGxLNEJNSnZRUEpjV0RUaXBRRkRCSTdTa2U2Z0ZJeFV1TWx3ZGxZVk9VeGZoRVYxQnpjV29ySmtLbXlNT2tVQjJTSWxrNFZUNWxuajVTdHpWOXB2dk81S091bHdxclZySUZqUk9rcGdTWFpJeDlxVUhLaUlqRWhleXE5QjZBNWVaUVdxOFM5MGdVUVk1RzUybEdjY2lPRmdVUk53VHBLczY4WWpBRkwzaUFJVUpLRU1FRVVYdE02QmNTaTNHTXVESlpBZ2lpc1FWU1ZEWGVVaGNKZUlHRjA0akFHYUlSeWxDemVKN2dSTW84QXhYaEhqTTdXQ0JDU2h1amhHNU9weExWWkxOMkI2eTNvV1hEcktSRDh0eTR1Z1lPMEhCcGQ0aFJHOGZ1ZTBJSEZ2WkJGVlM0UUZWMGw2cEFoU2lTeE9sMGlSUk8rSTNzV1MwVmFYREhEV1k0Zy9CTU5zcUxaVk1kQzdoTUFSNFBSWG92NjdkU0xzQmNJS3doZ0Vla0Y0bG5mSjNtNlJ6VW9SaTR1RUFGVkhwQUlBbmVXbGQ3UmYwRDJpeFJCNnlkeHJzVGdtc1FLQkxtV1ZVbzMwWTlKV3BEVWY3US90TU9DcXNDNFRWcFRPWmpIZXlwZWsxMWdJNkRwQ3Q0MFJBQVBRUmoyaDVoQ2xRRlJ6dkhBTHJwRzdRNUx6VUVHSWRORlFKVXFWSzFVV3pxUS9hRGJEQmlnbDBQRUtMeVJxd3NaY3N2dkw3eTNybzZXMmUwc3FBZ3U1S1d5UXdDQ2wwVitSSUhvSkhzeGJ2SGFaSUtkWUtFVjBJZWJLdlF5cDJqb2RQYUFuWjZRVGxlOE1BNlJ6K0JOQld0ZXVwOUlseHhBRkEwVnhFT0t4QTBDdFhwbFlBbFN2UXkrMFJsSFNxbThxVktsU294VVBRZG5HWmRZWmxuQ0JWUlVCdFNQRXBoQ2lXUnB3bUk4R0oybFNwVW83NkpESHFkTGd3dmljanJBaDRqVGlvQnA3UyswdlZSeWtBNkV3Y0VHWlEwQ1ZLbFNwV2pMMUk0bHhZUzlrWVZBSURwS0pVUFJVcVZLZ081clVxVitodXRNclEvQU5IV3REU3Z5SktsZjROU3BXaG9SbFNvZXQ5Qk9PakRRNnNORDFFWVIwUDBhdnlqUjBJZW1wVXFWS2xTcFVxVktsU3Z4MUtsU3BVcjFFWWVnOWJEVW5IUmhvZlVCS0pVcVZLMUk2SDZOWDVSbzZFUDh1dEQwMUtsU3BVTkNKcFVQVytnbkhSaG9mOEFCSmY2TGY1Um8vNHA2NmxTcFVyV3BYcUl3MXI4STFKeDBZYUhSMGZ6WEwvUTNYTXpvZmdHai9oc1A4WWpEOGJEVW5IUmhxWXcvd0FPOUVISk1SZnkwVk5ndVU5NzFRQWNoL3lXWTZreDFsbldYMVMrcVdkWloxbDZYVzdNTXN5aGNxVjZqM01VRVdTemo4SVdHaUtLR0lJNUc5VittMlpVdktJUXBpZFh1cXBXMXJDVUNTQmpvNlg2YWJRVGxsbkdZVG9sT3BMT0dINEJCN0tZZ05rSTUxSjNseTlLL3dBSGJWNVpkMDY3eTB2MjVabHp3eFlVVTZNd1Q3bUZvOHhDNXVDbnRONlFEZUllQU0yeWtBQnpVc0dZTTVsM21DZmhzMHBMSmZyV3N4a1l2YkVTeCsxbjhBeitBWi9FTS9tR0o3L2REQmJmYUdGYmtUa3BHYXFuN29FWVR2TWd6ekRZMUZMRnhCSE5rOXpUM0laZDEzamdBNDNndFNMekFpVW5XV2RTWTZrUWJzRWNpUy9RWklZNnNwWTFTMFp6Qk1oSmw2MkFiaXZCQnZKMWdOYlBPcWhXcU5HQmxkcXJ1RHlCSlpzUHBZU2dHSlRaMnpCelZCaHZRaHEyRWsyRnloTG82WFdjbDBmV3l0NGozUm9HemlXb0l1SVFCaVg2emxCR1ZLZnhVeW1Vd0lSMTRnemN4ZFdabzN2S0hrK1pZd0xteGZCTFliWEpFNHdPNm85anBscVdUTmVJKzVubmlVTGtjeDg0cGY1WUZ6VHBxOUVyMFN2Uk93aWRxUXhPMHZ4THV4d1JubnNqTGFsVVVHV0dzRngzeFdoTStKWkZvNndlQ0RtUlRFcHVSaEk3Z21ZOTc1aFRsK1pYbjVtT0IrWUx5dmJyTWhuQ084TkppbzU3a2t4aGttV0w5NXYvQU00aHM4RWFCVkVWVFRqMlowMU83andxWG9vTllPOHlEeVE4K2lkVVR2VEFPQ1ZIeTlOUlJoRTJqS2ovQUxRLzlxWHQvdFljRGNZYmdLemNEaGdkTTB2KzRuOTVFU0Z0TngxMjAvbk8wSENKWGRkZHdpSUd6TlFvc2ptSklWdWFsd2lOMGZSdmVsSVc0c28rd014N1ZFSXV4T2VZc2ZqTWZ4ZEQwTUc2VUZ6ZEdPYWwya3Y0UXdnMFFnd2o2S3N5Q2w2bzNrd00ycVpna2tPTGFoNC9BN0F1b0JIR00vS1JHOE1pTnNNNEE2U2ljYzVaZDRiU28xU1JkdFYwbFVBVzJJUlh6TmdIUkE4RU9mRXh6UmNFclVWR3RwVkUzNmt4STRKWjV3VHhTM0NRNnlJNmFZYUpTdVUybk03UWdUQmF4UlFFTWtidVFaaExpRmFVaVpJcnpDRmlGVFhoQXdWaWlNQ3laSlI1MFh4Q0N3RkltaXFxQnVBWG1Mc2swUkpkR2RSY0lMMFVRN0YySUpVY0o5aWIvd0RPSWJQQlBvd25GL1pDNks3VGMzNFUvdDAvdWsvdFVBLzZvODEzbFA3Qks3ZmZKM0JkVXZFMm1KbDF3NGlSdG52RXUvbG5RM2ZhYjd3SmFOUnFoMFI3bjVoMy9jOHZ1Tjk1NU11SWE3bUM4dDBSVUNkNGtCRzJmRThCS0tEZVlBcWhsekRwUHpGTXZ6eTNTSlc4WTNqZWRwV2pERUZCRHEybG1CdmVCdmxwU0lJbUloRU1URURxcUM2RXd6WUV5SWoyYWZZejdyVEZaOUFRNTlJRm5ZbHNFNHBGWmJ1OGNPcWFoTStOaTNuaWVZT3UwNXBsT0I3MndzRWVqRFNpTURCdUE3bkVFVTU3VGsvQkEyUmcya3JHM0laOVltYmpyUHNhQy9HZEpYZ0daQlM5SlNSWWFwbUZDVTJBcVpvR2lJUzZOSlEvVGJFS3ROeGxaQkNFcWFVWEF5cU5zOFFNbEhRSmFnenRETENjNHBndkpNd3NQU2NCRTVBcU9Jc2t0dEJ0aXo5cFNXOXBuN2tDS1loM1NsNE11T3dibXRKYko5ZEhnZHBWYlFlb3hVdFlkNVFvYU9ZTmpCMWhXRm01VnloMVJSampMTmhDemRrckNjc1FjR2d2NXpyS1dCTWJ4MEJaMFFYcDlpV1pUMkphQVY0d2dmOEFpbTJuMlRGUzIxRVdndnlKV3JkZENKQUMrQ01OM3ZOdytFREZvRjVobzVNTzhVM2dUMmlYNENXZFl1MVBtTmNhTzhlN0VzSkZWb1Z5aVU0SnhOazRYcktUSko1aXZ4T2c0bU5lY1RBTGZtWGdXNTd4UmkzNWk4Q0dLN3I4eStwK1lJMlg1aW1MOHNwVnMvMFRnKzNpWDVGWmo1SVlTaG1qT2lQY3crUXpDUlM1TWxrTkwyYU9MajBscFNHSnNWWHZFUUxWNG5XMDlwbmtvcW9acUdVUnNsbk1ZTG85b1BNUEc5YWxoTEhlVUFMdkVBUVN3ZDNpQnlEeGliaURSNzFMNU9ZZW9qVXVEQjh1aXZYU01UZ0V2aCtTVUZxY21jRWlRSWU4dXlaWmxXeHVSeEZhQ3hJOHNxYkVLWEszQzhQWktybG1kcTJOTjBRblAwaU1waTVUOXhMdENFbWZLby92QTJrTEU0cEdLbzJEaU0xU3BHNVBycDlTSVBCaUtUbFltQkFvdHQ2bjl0RmZLSjN0ekViZEJ0QmJkNTlGSyswbHA0dWNicHE3K002ejd4QVVwWWd1NitZanpmZWRVYmluQkxyWUpqcmxtVUhsSGF5MlpVRDB6S1pJU3U3bEtJM1hET2RCaEN4UWhEWGxDakNHRzZDTWRGQm93b1pHQzVJN25CTWZiRjl6TEtTamlYMXV3TXJIRVZZWXVYRm0wcVhuYVc0bzdZbmNsM1pJeEdLQWcyMXVxVkZtSnNuUW14NWhwM3UrNGxadzBsVW9wVVZJcFZ5OCtJd3ljWkFlRTdhS1ZMcUd5MkM0c3cyR0pHcUM0NVlBR3dMZ3dDZ2k5MFZIU3QxYUNJeUxnaEJRSVlsenBBM0Z3Y0ttQklMZ20zRlFYUVRvRVF3SFFoQjZTZGwwN1pLRXYwcXZGbVhZWHhMSUZGbTI4Q0RsZ0NtbUc2c1ZBbG4zRXc1VmhFNEFwY3pWOHFDb2xnRHZCcVh4Tnp4TnpSUHFFSU5EN3JHQWpZNjZTTXR6WEVPOGtENmltYUY5VGRlVmltT1pOcDc0ejY2ZlVJMXp0TFNGNkNKcUZTakRGb2hBKzhLcUhhQ0JCT1FyM1RaZDU5blIvd0RhZlYwS1ovek9aZDdjeDhQK29MM05vVzBEYmFBVGk5SldvV2NRb0VWeHJqY216bTdUZ0FoMDBWRURyS1hxNDZSdDN6QmdvOW5lVVRBS0lqdVBtV1VLWWR1YldqRjliSmhObUlmK3ROMERHZXFpZEwxUDNNck1LeFZMS0N3ZnFLS0tiUmpSUWlmY1luZjZRbXg2VjZDd1VFM3VtTWJYbUFaSUNPWlhWQTZwVEs3aDRsNWR3cmlIUWdBZzJRSGFteHFYeDJ0N2pFTjNCQ3FiVWxRS08wUUVBbENQQmlCUnpDQ21uTXdLdHZPV3BvRnlvcVhia1ZpSzI5VWRLNXpIVGQ0amdxR2d4MUpaQkt0TzJpREFRTzdBeWRPOHRTaXZKMmhMQkU1cndqYnNSN0xsTSsxUWN4UGFOT1cwMjRSMTNnRUtWWVpRbU9PTVkwVzd4SUVRYWhwZUk1ZEVPRHM5RjkxZzBwZWxHTjhHUmlzV3lmQ0JoZlAzaVpGbUU5a0w0bTU1bjEwK2dSVEphSVVWeHpBZ3V4MW1UZWppbUh3cSs4cjc3ekVUTjJ6TUkwT2pFVmRjekh5VFp6dWVaOWFNQ3JvU3orSXVVUDRtWGhnQUhkaTV2VytDNWZRc1FRaWUrQnNYZmNtS1U5S1FORCtieEVBRnRaLzh6R2dHNFlZQ1ZiVjBnM2IzaFU4eGtHeG1DM0FIRE1jSTh4MHhSMWozaUIwb1NPRXhmV09IN2tCMjB5dFFWeW1FVm1CZ01tSHRLcXlIRmRsTUJSaWxYSXo3alAyYzJuUWVrVVJzaHNVc21OdDRsblk2VkJoNWpxNWNWd1lqVjU2NXpXUUVLb0tRVFlGQk04VmNJR2hiQkFJaXcyQ3RvSURjWE1FeGJEYURpTlp3Z3dBRGlLTmh2TmdqYkRIRnQyQ2hlYWdMQWJZdlFpc1JZT3JpVm9NdVdPeW5HWW1PVzhzcHprZ21WRnhvcXVrdGRURG9OQVQyUzVreXVKeFpNWFZTTXFTTlNtTkRMbEYrOHlXTkFLUUpaQmpITTJRak5vM0FqNW9DSkhkc1NnMkx4TUpPRFVtN3FUNkNPc2ZiTnJKbjJ6RE1LTHhCUHNDNGI5c0lDaGk1dEhrT0RQdEUrZ1JBcTFVVzMxMlpzbXgzbHNaZThVcUFnMnpNK1lkNEF1QXhiUGFVUHVRY1hRVGM4ejYwWXVlMklCN2laa1F1cW1IWUlVK1lOeTZoMTJSaXpsek44cTQ2VHNpTUZKaHZOaURRNWhJdytrQWhaZzJteDVuMVpieXE0VWNuN3FXeTBHOEwyZ3dGbURiZk9sY2ZhbUZqekNuQlBaQlI0M2Y2aTNIN2MySnZ6N0xvL29ucTIwc1EybmFiWG5UZDlHUG5UN1NiN3NuQjhZRlJ0bGFicURCS0V1cndDS2o5c084U0UzQlF5b0lSZVNGbHNIRVVFV3h6ZHNFY0d4UFFtbnlvakt5VmJwakFuTndGaUFoMGlhbU1FTkZXM1dVV3RWZ2lIQnJxaVBDcmswS0FieFdnZ3NiaXlUTWgxR1NBakNTNFdJc2xSTnNFNkZqQ0NheWN3QW9wbTVtZ0E0clVtOTQxVDZEUTBQdnVodnhSS0tYbVBNekN4eExCZDVmN24ycDlBbEZOWEVuY3M4a3ZWTGk2dzVqSE1MVG1FTytaeFlvOFNPN3pQclRkU2xXcklaejJsOUhhSkUwUTZ3R0tMbGR1d1FCWkdLbkdDNFAzTExtTHlaRGdtOFZPK0VKQWhWQ0YrUllpN09qdEtZRllKc2VZMUJ2VW8xMWRTVzd2N1JpWTlQZUFBcnpCTUN1VXl4MnVKWXI3K0pqVE94RHRvKzJ4aDkrYlUzWjlsMC8xVDFQUGlmU25EekhlaE0rMG4yTSt1bjFDZFlRNnBHQUVVd1FZYWlxNHNUVXExQWpPK3hCUUFHMEhadEh3bEY0Z2hhUnVFRm5oblhhRkd5dXNCZ00xaUtsRnFjcmVKVXViNks5UHdSbFFCNWhRV3VKZktnN1E4M0FDRk9tbUFRakE3RU5SeE5tTWlDZzRwQ1JxN3lueFRGSlZMcXZXVkZvNDJYRVJNRG1IVjRiMUNCWWRWWGxxbjBHaG9ZRDVtTVpOanFtOVhlT2lVaWdTeGJVWWNDbVpZc1ovdFB0UkZQQktpSXd6VUlac1FJR3NONGFCYVhCMjZWQlRBdmlZY3F2RlFvYVNneEwvQUgwUjBoVUR4TEYySWlKaENvWkFQMmk0VUdaZUVyZVd3N29SY0I2UkRRVGxLN2Q3NG41VnBSeGQyU3lpd3gycEhTTWVnRnhwQzZONm1EbVk3UXBrRi83aktRQmZFSTNiRW03YWRxajBrUWJWSFErMHgySWFUdk5xSE9mWlowY3c4S1lsd2RYZDRuMUk2bzd3Vm9UUHNaOTFEbDdKOVluWFVrdzdRYzNFWHRrZE01Nnl3TUVRdDBjeWpYc1RCQlRQQ1ZCZ0RFcm1Bd2hqbVdjUzB1TXRlTXhERTdCRE1DVTZNcGhUTnd0TmhkeTNMSXQ5QzlYWEhZcGlEc0xiR1ZVcDh4NExmV2JWUm93Rzl4ditSbU5UOTdRTENHcW5PSXRRb1Y0aUpsY0dMenpRT1FXRXM2emhVR1dBSVp6aGpDQlY2UlErMDJ4cFdCRmxSbFZ3Rzl3ME5BVVlwZDFHZG5FRnQ0aDd3Q21aYXRlMFBKRkRrZ2dUQVF3SW1lM1dNTDNaaEVUaEl5S3dhbVFBZEl1OWg2VGV4UjZ4QzZWRXlvc2FLaXhYUzRtK1FsQ1Z1NE1HdE9hNG1NZVl3S0lGUUVxZVJXSVVEZFNncFZ3aWhRejJpQ2w4eW9FRE9aZk10QnVON2wvSXJNQlNuSTRqOVVLUXFsams3emxBVjRoV1RBTzBxK2FiSG1ZTUkzVDQwTENwQ000Qm1GS2psZ0ZYYW00S291V0oyaGF3dUV0alNnTHV4aDl4bVFoejdRdHpsRjNFUUlwUUdrZUNlaktvcSswT0k3cDlDR3g1aHJYdnNaOTFQcXB0K3hIblFnVkJMZUFnU0xkYzd4QXNXMUVXV0s1SmJlc3lpb0NVd0t5UGc0WlhZMTR1S2NNS2dNcS9hV0ZVNnd3VEdETGlEbGhDekVkTXkzMFBiRkRnaUtBcGx4N29EeExaVGlOblJKWWxxNXpURTBBekZhVzlJZ2ZJV1JrVUd0b21RZmFBK0N5UEhDOFIwWnpLcFY3d2lFSkNJY1JqMGJ5cVcvRU9SZUlwdzVvNU9CTHVHaFpleTdiVEh2RmoyOXN4NWdZOUNieEFBZFNLb0I5b1hNT3pPb0FWRE54bUxSWnFBajRVclQ0a3FiYW1ERXZZWERFQk9hTnhsYnBpRzZETXl5MFppVExEMTYxRUR4YktqNmd2UkFhV0dVR1Z3VWw5emUzWWdaQXdkYUU2VFlxTkw0eENNTGhicUkzcGJZaDVWK2t3S0VkR1RZUWd0eTRnSjlEVGZZaUJybENuTUM0WjJHQzlZdlptZThiSzBkMzRyaDZhWDNJZDArd3g0Z3N6a1pXbnRJbHkrMC9wNS9Teit2bDRSUEVNZzRMTkhkUDJYOTU5ejBOOTdQdXA5RkI4U0x0SFFjeHRwSi9TVGpmRk5vRjlwdHErSWFiQjNsb3pSdXlsRjlhVkFSZFVKUUtiZWtmZ1RjWUl5RVFVT3pIcXRYbUFVaGFNRUoyOVVOS3FJL2hlWGhJbDZuRmtHZHd4TGtDSURBaTU4UlZVSERoMGVHWVRBQWk4eGE2TXlCTHZhQ0RBN1RHTWp3S2lwdWlIUVRjMEw1aWU4VFVsUmdHbFEwT2lHSmJEUE05NG10UVUwQUswVkUwbEttU1lZdmFIUS9hWHFCMzZRTXVaV0pRUTRhaDRnQTJkNVJnS1NMTXBPa1l0TTdZaGJTNVNPei91RlNwUTVoWkRDNkVDSzlQQkJ3dWtRRVRnTVFjS2NVVHBpYllJb01SZUpVR2FtOVNZRW5sQ3dVRmJST1NzN1NkdjhUaG40bi91UmY4QTdRekVYMmdCYUdBSXQwVExNUFhkMW8yamNXbnhDSmp4QlIyRzRxRVhlVVF1bDhDZjFTSFA4U1U1UHNsU0IyTkdNL2h0TTR4dUNYV0hTb2wzSzhZY2RveExnYjNoaFVTbjBBMU1nUkQvQU1XR3lmdE5vaTZId1FhMnI0bDVlWGxTaEJ5UVlqVUhrQkNvdDZXeERlSGlYK0szUnp6QXJCcC8vOW9BREFNQkFBSUFBd0FBQUJEenp6enp6enp6enp6elNoQWpMVHhWU2kzbDl3RU1NTVAzMmtCWVVNTm56d0N5UkNoWU1NZjRvSUlJSUlJSUlKTElJb0x6enp6enp6enp6enp6eEJoRHBERHdDSG5EYjhVTU1NTUVFRVJZR0FTWHp4U3pTZ0RNODhQNzc0NDQ2NDQ0SUphNDQ3N3p6enp6enp6enp6end6U2lBSlRoUWtHd1J6VFVNTU1ERENCUlI4QUJmendBd1RrRUxmLzhBKysrKysrKysrKysrKysrKzg4ODg4ODg4ODg4ODhnd1VRbjhDVUVGYUREQTRqd0FBd0FBQWhrOXZndkRTUUJUTUJmMy9BTTg4enp6enozLy9BUDhBL1BmL0FQUFBQUFBQUFBQUFBMQklFRU11RDFBSUpTd3puZkR6U0E3UGdDZGdlQVA3eGlIQTVnWnlnanp5eXd3d3h6Ly9BT01NOHNQenp6enp6enp6enp6QmdBQUFKMHRFd0hna25QSmFZWkVPVmtwUDBBTWdEeGNueFVRSUlJSUlJTU1NTUlLTThkTU1NTVB6enp6enp6enp6end5aWhTejZ2MmxHeENFODBtK2lERVUySTRNdFFLRGtSUFA0RUQvQVA4QStnd3d3M3h3Z2x2dnZ2cnF3L1BQUFBQUFBQUFBQSUxKQk9KaThWd2FDRmZkSk13c3l6TGFRQUpMcFFHQkdMNlFBTUhMMHNzc3ExMC92dnZ2dnZ2dXN2UFBQUFBQUFBQUFBNQkZFSUNoUVZRWUFsZlhORDNkWnArcVVCOVMrS1RBVkhpQkFBWVJ6Z2dra3B2amptb2trc3NwanZQUFBQUFBQUFBQUElGQUFBcXFBU2VYQU84ZktMVUVRUWNBeklKVDNnZkNBK3NnQXdPVnZnZ2dqaW9zc3Nzc3BqamhzZlBQUFBQUFBQUFBQSUNLQUFyaUNLZmVBSTRmTUFNYklUejdRU2ZidzR6ZGZJQkF3WURWZ3Y4QS9yN3FJNDQ0NDRvSUtJTHp6enp6enp6enp6eVNpZ1FLTUVDbjIwRjAvd0NPT08vMy93RC9BTTFoMXl1TkVuZ1R4QlFpMVk0ODgvNDRKcGJMNzc3Nzc3N3p6enp6enp6enp6eUN3eEFJUG5pbjNCZjMzenp6enlBLzMzMzFIRm1FY05oYjRNTnVsYnIvQVA4QTZ3NC9sZ3Z2dnZ2dnZ2UFBQUFBQUFBQUFBISUhBRm9BQVJ4eUEvOEEzenp6d0RRMzMzMzlIY3cwODlTTU5hN2UwS3IvQVA4QTZ3dy9sZ3Z2dnZ2dnZ2UFBQUFBQUFBQUFBQT0dMT0xnUVVLQUU5ZmZQUFBIRUJUWS93QzAxbjMvQVA4QWY1eHo3bjl4bC84QS93RERIRGl5TysrKysrKys4ODg4ODg4ODg4ODg4ODhBOFcxOWdJQUpWOTg4ODg4czlGNXU3UWg5OTg4OEFEQ0txeVMvL3dEL0FNTWNNb0piNzc3Nzc3N3p6enp6enp6enp6enp6enp6elg4QlFlbFgzenp6NzdLSmlnQktIajM3enp4VjRJTGJLTmYvQVA4QXcxdzZnbHZ2dnZ2dnZ2UFBQUFBQUFBQUFBQUFBQUFBCMFNGTUEwOGZmZlBJc3JsbmlweWcwZnZ2dnRoQmc1ejMvd0QvQVA4QXgxeTZndnZ2dnZ2dnZ2UFBQUFBQUFBQUFBQUFBQUFBHTjhFQWppeThNTU5Ja2hsc2drZ2xEL2ZQUEdvbGcxLy9BUDhBL3dEL0FOZGVxb0w3Nzc3Nzc3N3p6enp6enp6enp6enp6enp6enlqZURJTFpjRUFFQm5ISFc4WTlUZjhBOTg4OHljV0RYLzhBNC84QS93RFhYcXFDKysrKysrKys4ODg4ODg4ODg4ODg4ODg4ODg4K3FrVEgrV2hVMktHc0JBQVRrWGYvQVBmZlBHYUh5NC8vQVA4QS93RC9BTU5NZXBhcjc3Nzc3Nzd6enp6enp6enp6enp6enp6enp6N2EzN1hrY3BwNzVJNEpMNE5KUC84QS93RFF6ZjVnbzA5Ly93RC9BUDhBd3czNmxxdnZ2dnZ2dnZQUFBQUFBQUFBQUFBQUFBQUExEaG5QUExLZjF6eXg5a3Qya25xaDh0d3dKdGdoaXF3d3cxLzY4Mnc2bHF2dnZ2dnZ2dlBQUFBQUFBQUFBQUFBQUFBQT0V0dmhCcVdGampWVEZudnp3MDAzMng0d3NnaGdnL2x3eHo3MHg0eW5udnZ2dnZ2dnZ2UFBQUFBQUFBQUFBQUFBQUFBPR2tpdktyYUZ1dXZyUUUvKy93RHNmZCtkKzlMSzY0ZlpjUE1zOStPZnI3Nzc3Nzc3Nzc3enp6enp6enp6enp6enp6eXpCbjZQL3dETS91bys2Mm1FRGpIMzdmZkhTN09DcWFYZldEVDcvbi9EN3ErKysrKysrKysrODg4ODg4ODg4ODg4ODg4KzRFMWxQYnZzelNrMk8rdVhyL3ZiRGpEU2pEVDNEakREem5YUCsrKytQQ0NXQysrKysrKys4ODg4ODg4ODg4ODg4ODg4OEFISHp2NzJMKzFYKy84QXR0NDZ6MTN3eGh1MzF3eHhpb3g1anZ2dW83Z0FsanZ2dnZ2dnZ2UFBQUFBQUFBQUFBQUFBQUE9vTmc3NjRFZG5BdnY5MS93ejc4MXo0eTAwbDExMGhnMTd0dnZxbGtnSW5vZ2dsdnZ2dnZQUFBQUFBQUFBQUFBQUFBQRFBUYWI0MkxSUVEwLzB6ODE2L3J3Ly93QjljTU5QZHViNUo3Nzc2NXM2WmFLSUlKTDc3Nzd6enp6enp6enp6enp6enp6eTZ3dUpFR1pkRks4UGNmOEFpdlhEWDdUTFBiNk9XKytPREtTKzZYbkNTKzliS0NDYXl5Mis4ODg4ODg4ODg4ODg4ODg4ODRKbFIxOTNML1FqRFgvYnlYakhERFQzdkh6bkQvMjcrbkttT1A4QTg0eDVpNGdnZ2dnbHZ2UFBQUFBQUFBQUFBQUFBQUFBCRkZmL0FNa3F0S0lOY2Q4T01xT3NQTXRjT3NlTk1SNU9IbEgvQU54c3YzK0hqQ0NERERXKzg4ODg4ODg4ODg4ODg4ODg4OGtBZC84QStTVCtrQ0JqSXNna3A0MHg5NzF3d3hRUldkZldROGIzL0FBUTRodi9BTXNBQmY3enp6enp6enp6enp6enp6enp6d2hIWGVwSFB4d3lpQ3o2Z3BBdmZzUE9ldE8wbEdkOE8wOEc4U3FBUjQ5Nzc2NHd4djd6enp6enp6enp6enp6enp6ejZvQ2dFYTlRT0NRU1JUM29IS0VOYzh0SXA2TEVaMDBXdjgxVzlwRUZienovQU8rLy93RDZ3L1BQUFBQUFBQUFBQUFBQUFBQUE9nQmNFcVhveFVFU1JRV1ZCNGJhWENsL2dnblpXWG9vQUFBQXBGVlBQUDhBNzcvL0FQOEEvd0R6enp6enp6enp6enp6enp6enp6d1lNNUNVQVNJQ1FrT2ZPcWNHdTFUcnZNQUtSUUlNTUV3RUhBaEp6LzhBL3dEL0FQOEEvd0QvQVA4QTg4ODg4ODg4ODg4ODg4ODg4ODg2SkIrZ0I4S0U0VkhDVDNqRDViUjZhYnp6aEV3Q0cxZDlEQld5QS84QS93RC9BUDhBL3dEL0FQOEEvd0R6enp6enp6enp6enp6enp6enp5alFzeG9OMTh1OVVGZlhnMGo2UjNWTlAvOEF1cDRxa2dnVkZEQm1BOS8vQVA4QS93RC9BUDhBK3NQenp6enp6enp6enp6enp6enp6enhIK2g3eDQ3QmVVTVFZaGYzRU9zMk1QUFBQTHFvRGdrUnI0N0FwQU1jc29OcnJPTVB6enp6enp6enp6enp6enp6enp6eHluZ0w3NTc0S0FnamhGR29Zc3QvZmNzTWRjVFlEeTFSU3JRczJNbVkvNDhzdi9NUHp6enp6enp6enp6enp6enp6eXc3M0ZTVDc4NHFLMkRaaGUydGE1SzRjTU9OK3REUWdTcHl4N1poVU10NjRvTWM0b2Mvenp6enp6enp6enp6enp6enp6ajd2THgvT085NnJPOWJVMDAwMDRNK01lSTdKYUp6TExMcnF1Wk9QZnQ3NDQ0NDc1UFB6enp6enp6enp6enp6enp6enl6RC9BUDhBdndwL3ZxcW81Y2NjZmZhbi93QzQ5OHVZNDRZR280NEpkOE1OZk42b01ONmNjc1B6enp6enp6enp6enp6enp6enp5ekR2N01NTDc3NzRLTHptbjMzNy84QSsvanpLekhMUzNUZi93RHF4eXNra213dy93QnErc1B6enp6enp6enp6enp6enp6enp6ejd0Mk1vdGN2TUlhb1lNc01PZjQ5Nm9NSUlOT01ldlA4QXlhaUNPaWZlREREREREREQ4ODg4ODg4ODg4ODg4ODg4ODg4OCs4Tlg2TGp6elM3M3pmdkhQYnlDU2pIS0NQSExIcVRUMnFhTFBMS2pERERERERERDg4ODg4ODg4ODg4ODg4ODg4ODg4Nzg4RHFxQ0dPZkRESERDU3p5eXl5eUxEbkRUQ0RDNlMreTNyejIvREREREREREREODg0dzA4OGM0ODg0UTQ4ODg0OCt2VTlEREtHS0N6WENpT0duQ0tITExMN1ByREhyR2FielhQOEEvd0F2ZmVNTU1QdXNNTVB6eWlRaENBVHlEd0F3Z1F3QlhickMxbE50TU1wSk44N1pMSWNvS3NPdWV0T3ViWnA1TU1OZi93RC9BS3cyODg4VTE2d3d3L1BQT1BNTkpGRlBOT0ZFTUJIRllJYkZTYTZncnAweHkxSW1weHdxZ3d3OHlrbHozendndzEvL0FQOEFqTFRqTkRURHpmREQ4OG9JNHdFSVFRd2NZUUFBc1JwaDlaOWhqRHFpbnpQRGpXNmVIakRERFh2RGJyTFRUQ1BQT1BPUExYKytxSHZhMktERDg4czhzZ2cwNEk4Z0FJUU1NTW9wZjBWRnJqalNIclBpaVd1T3JidkxIQ1dMU3JuTERtL1BmZU9PcXJuUGp1bk9PT09QODg4OG9Bc01nbzBBUWdjVVFRZ3hsVkpBYmpqV0gvTHFHeVdIeW5TRFNEaUNDdkRpK1czL0FNODhzc3dpamd3MHdnaTlnL1BOTkFCUElDTkVCQU1HRU1JSExwZUZDaW40MHo3dzQweGcxL3FpdW5nNHJrdXV5aHdna3JkelFnZ2d2Z3drczF0eWcvUExOSEFDSEpNQUtCSUpBQk9IR2d4VVJHZ3dpazd4Ni82eTN4Z2xodGdscTRueWhveXR2dmVjY3BvcWdzbnZreTJwanZQTkxQUE1NRERITEhHTERITFB2dnZpK0JnOTRna2drc2ttZ2pqaHNzZzg0Z2dza2h3ZGVVMTJnc3NvZ3NvbW9vaTRzdlBQUFBQUFBQUFBQUFBQUFBPdlBQUFBLRnc0cjU4ODg4ODR3LzMreml3d2d6amtnaC8vQVA4QURuQ0NDcW1DQ0N5bUtDQ0M4ODg4ODg4ODg4ODg4ODg4OCs4ODg4OG9YRExqM0REREREVExQdmp6REhiSE9PRER2LzhBL3dDdmVvSUtycHJyYjZyS0lyTHp6anp6enp6enp6enp6enp6Nzc3cnppVlVNTXRjTU1QUHVkTVB1TU1NTWNiTG9OZi9BUDMvQUt3NHdnc2hsczBzc2dnb2d1TU1QRUZOTU1KRUlPR09OT0d2dnBtT0RKSVUxNHd3N3l6QkRPeDhxMDU2d3ZtZ3g4MzEvd0N1OW9yWnFZb1lJNDc0WVk3U0RRamlSelRpaWdTaHlpQ3lqdDhld0h3QWNLY3Qrc3RmSGJpQ29MZWVPZHNLN3Y4QUQ3Ly9BSjgyMnk2encxd3Z2cWhLdnNDRVBHTk9BRVBQUExFSkNMR0dkKzFCSENuOHp5MTUvd0NNeXl3Wk50ZGZ2NjdRS0lyWnZkZGRjZDhJc3NjOTRLWXFUSUpEQ0FEeGloU0R6enhEQVJTaXd1OU5nQU54L3dEZkhYbVBzYTZHb3crQzBpcUNPdTJXMmlDeTJuYkhQaVRYckNDU0d1S3lvSTBJSWtFVTg4ODhvRUljOHNWN1JwRDUzZmJESGZuSG9nVThnZzlEVUNTR3FxQ1dUeUd6V2VQSExMZXZpQ0dLZW1hK1VrOHNBVW84VTQ4ODRVQTRnSUVqVFIrRnBMalQ3bjdyOGNKUUVvam5hNkZ1SWdxZURxR1gvWEdHbXVmZUtPT08rdUcrYzhjY2M4Yzg4ODhnY2NBZ0E4Y2MvY0RnZ0RlRGZEZmpjOThoQmdEZmpERENpaStmQ2plZi9mamovQ2YrQysrKytlQ0MvOFFBR1JFQUFnTUJBQUFBQUFBQUFBQUFBQUFBQVJGd2tLQUEvOW9BQ0FFREFRRS9FTlp3QUFBQUFBQUFBQUFWb0FBQUFBQUFBQUFBQVhLQmdBMUNBQUFBQUFBQURBeUFBQUFBQUFVdkIvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBTUQvMmdBSUFRSUJBVDhRRUlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCLy9FQUNZUUFBQUZBd1FCQlFFQUFBQUFBQUFBQUFFUklXQndBRkNBSURBeFFHRVFRVkdROFhILzJnQUlBUUVBQVQ4UWlGQUlRaUJBQUJnRkFxNEIvZk9Bb0FCUUNBQUFBQUVCQUFFUklBa1FBQUFBQVRLQUFCQWdBQ1FCUVFFd0FBNjRJNENBQUVnaWdJQUlBRmdFSUFRQUFBQkNGVUNBQUFDdUFSVUNBZ0FBSVlDQUFBQXdRZ0NRQUFBUndJZ0FBQ29BRUVBSUNBQUFCSTFBRVVBU0NBQUFBQUFDQWdBQVJJQUFBQUFBQUFBQUJBS0tBNEpXd2h3Z2NLQ0FJSWdBQWdncUNBRVJLQ2dEU0dpSWtWTllRSkFGSUNDQklBQUFBQVFRQVpBZ0FBQUFBQmdNUmdSZ0lBRUFRSUtBQUVFQUVCQkFBQUFnVUFBQUlBQlFVZ2dBRUFrUWlpQ0lBRUFDVVFBQ0FMQUFwZ09BQUFBQUFBY0FEZ1FJTUtBQUFBQUlCQVZFS0FrSVpTS0pBQUZTQWdCQUFJRkVVUUFKUXFDbUFBQUJvUVJBQ1lJSVFJRVlBQUFBQ0JBSUFnQVFFUUFBQUNJUlFBQUFCQUFoQUVCT2tBQUFFRUZBQUNBTEFoZ0FCd0lnSUFJQkNBQ0lFQUFJZ0NnQUFCQUFFZ0FBUUFFQ0tBa29nQkZBQUVBQUNTQkNBZ0FCQUNFWUJEQVFaQVlBNEhBNEFBQUFnQUFBQlFBQ0tBQUFTQUFRQUFxZ0xnSUFFQlZRSUFLQU9RY1FnQWVnZ1RBQUFFQUFBRVVDQUtCRUFJQ0lBRkFJUWdLQUVBQUhBSEFCRVlBRUFnRUFRQUFCNVZBSUlBQUFvQUFrZ0FDQ1FRS2dCQUFBQUFCQUNBd0lFS0FBaEFBQUV3QkFCQUJnUkFBQkJZU1FnQUFBaWdCQkFBUWdnQUFBQWdBZ2dBZ0FnRUFVQUFBRUFLQUJBQUJoR0FBQVY2UUpJVlRCQUFVQUFBQWlvUUlpQXFBQUtBUVFDQUFLa0lRQkJNQ0pTWTFrQ3dBRUZSQUFBZ0JJQlFBQ0JRUWdBQUFDQlVBQUFCVkFJQVVBSUFRQUFKQUNCQWdCZ0JDZ0FBQWtwRkVBQUFCQ29nSzZBS0NBRUFLQ0tBSUFCQUJJUUFBTUloS0FBQUsyVkFCQUNGQlJBS2dBbUFBU0dBV01pT0JIQklJV0FBQUFBQXFRRkJBVWdBQWlJQ0dJQUFFTW9pSUVCZ2tBZ0lBQUFnUm9qQVFBSUNFQVFuUUFCQUFCRzBBRkNBTUVBSUFBQUl4QVFBaUFDSUE0RUJBQUFBaUFBQUFBQWdpZ0FDQWdBQUE0UVFFQUFBQUNuRUFBQzZoREFFQUFBQUpjQUFnQUFBQUtTQkFBSWdBQUFHQkhBQUk4WEE0R0NFQXVBVndBQWdnQVZ3Z3JnSVFDWUVVUUFBQUFBQVJVcUtCRUJCQVVFQ0VOZ0ZGQkJBaENRZ2dDQUNJQUFnQ0FBQ0NBQklWVUFBQTBBQUJNQUFvQVFBS0lBQWdLQ29BakJHQ0NFVW9CRlNrRVFBQUlFZ0NnQ0dFRUFBQUFnQUJoQkFDQUFCd0ZVQUFBRW95SUFVZ3BBQUFBb2lLeUFBQUFRQUFZaUFBQUFBR3dJaUJRSUFBUVVBQUNBQ0NJWUNpRVlnQURBSWhFZ0VaU1VRSWdIQUlVUUFBQUFRZ0F3QmdBU0FBQUFFWUdFVVVGRUFBQVFBQUZKRVFBRkFWQ0lBVEFBaENnQklRQ2tFQW9RQUFBZ0FJd0NHQUFFQ0JFQ0NJQVVBb0NFSUVBUUlrUU9CT0FJQUFDQkFSQUV3QUFEK2dZQ0NBQWtRUUJFQ0FpQlFBQUFTQWdBQndFQVFBQUFjQUdJS0FJQUFJQUFBQ0pBU1JJUkFBVUJBQUNnQUFBQU1DQUJEQUFBQUlBQUJRQ0NBUUJCU0ZBSUtJQ2dJUWdsQVVsQkFVSW9BamdFSWdBRUtBa2txQW9KQW1BUUVFQkFBUUFnUkFBQUVBS2lBUUJBQUFGaGtNQUFoVUFFa0FVaEZrQUlBQkFBUUFFQkJVQVFVUUlLQWdLd0NvQkVBQ0FXS0FHQUFRcUZRaUlnaWlnQUZRRVRXQlFBVUVVRVVJQVFRVUlLQUFCN0lIQUdBRUVRQUFpb1VRZ1VBUTBSVUFBQUhRQ0JBRUFCQ0FCQUFnQUM5bWV3a1lDTUFRQUFJVlVDQ0FBaXBDQ2dVRUFCQ0lRRUFBQUFWUUFBQkJBQUFDSUFBQUFIQUFpQUFBSUFCQUFxaEFDQ0FBUUJBQkFLZ29BUVVWQUFBQUFSU0FvU0tBQUJRQUFRQ3BFRUJBQ0FBUUNDQUFBQ0FBQUVFUWdBQUlBQUFBQUFRRUFvZ0ZVQlJSVkFBQXNEUUJFQWdDQUlBQUFRSUlBRUFVU0FoQ0JBSUNLSUFBZ0lnUVFDQUlFQUFBSUFBQUNBaEZBQlFDcUVWZ0FBQWpRQWdBUUJBQUFNQ0FrQUFBRUFFQUNCQUVJQ0lSQUFDQVFBRUFJQ2dRQWdCUUJBZ0FBZ0JBRFFBQUFvQWlBQUFCeDFFbGt3RkFBRUNLQUFBU0FFQUpCQkFBbEpRQUNFQmlGQ0FJb0NBRklvRkJBZ0VBQUFBQkFoQ1FnRkNJQUNRQ0FpZ0ZCSkFBQ0FBQ2dDb0FrZ0JBb3FCYUFsSUFBQUlRQVNBd0RBQUFBVUFRQlJBZ3BSQ1JBUVVpaVZJQ2dBQkVvQUJBVkFvQWhBQkVBRUlJQU1JUVFBQUFzdWlnQ0NBQmtCQUl3QUVBd0ZFQVFBb0lGQWdtQUFBUUJHUUJRQWdKQVFvUUlJS0lCRWhLSUVBQUJBQXFnQUFDQXN4QUVBVUJDZ1VrSWdRb0FFSUFBQUFDQUFDSUFBQlFCVkFFWUFPQUJpR0FNSUVZSlJDQ0NJQ2tKZ2pBTlJnaE1BRm5ZQUVrTEF3QUFBQ0NFVWhBQkdTQUFBQUFBQUVBQ29nQkVpZ0VRSUNBaUFCTUFnQ01tQWdRWUFpQUFBUUxTQ3d3UVlKaGhHQWdBbGNZQWtBaEFpQUFBQUlJQ0RBZ0VFQUFBQUlJRkNnaW9BVUFCQUlJQUVBQUFJZ0JRQWZHYUdBRUlFQUVra0lHQUFCRUJFQVJCQ0lDMWl4RVFRQ0pCZzVJUmdCQ0NLQUFJUklBaklDb0FWQUVDQUNBZ2dVQUFnSVFERVVBRkNBcWdCUVFJSUFvQVJnQXNCUUFBa0FqSUNBQ0JCQkFNQkFBQVFFVUVSQk1JRVV3c1FFSWlZa0pJa0FRZ29DaEFnQUtpY0tKSEJDQUFBQVFCV0FBZ1FoQUFBQ2hBUlFDMUVBQUFCREFHQWpnUWdDQXFnQ0FnQUFSZ0FBQVNraGdwb0JCUUFHQlFVUkRnQ0JRUVFRZ28wQW9BQUFBRktvQVVJQkpEQUZFRUZCQWdnQXhPRUVSZ0JBRGdRZ1JRQVZnQWdBcENLY0FDYUNBQkNvQklEQVNoRUFNZ0FFZ0JJUUNrQUFBQ2lDZ0FEQUFVZ3JBSVFBQUFBU0FLQUlCRXdBZ0FBZ2dpQ0FMQXdJS01OTUpSRUFBeElZUUNBR0FBQ0FSQVVBQlFnQUFCUUJBQ0NBQXdRQUVBUWxBREFRNDRLbGtRZ0FBQVFRQXBBQ0NzYUFZRWxFQUJEUXBCUU1BUUFCVklLSUFJQUVBUUpDQUJDZ0FFQUFESUFRQndCQVRBQXhBQUFFWUFBZ2hDSW9RUUFFa0FRUW9TQU1BQUVnSkZoSUJnU0FBY0FxZ29KQldBQWdBQUVCU0FDS0VBRkFpaGhTREFJQUFBRUNNSWdNQkFCQUFnQUZDTUVJQUFnQWtNbUJUQ0FJUWdBZ2dnSUEwQVNBSUFBaUNpRUlBQ2dDQW9nUlVDZ29BQUNnQ2dBVlVnUVFCQ0NjQUFBQkFBUkVBQkFSQVVDQ0NJQUFKR0FBQUVBQVFJZ0VvUUtBQVNLSUFvUXBvaUF3SEFRSUNRQVFRQWdFSVFBQklCVUFvQ0FJQXJBVmtpQUNnQmdJUUZRQ0FFQ0FBQUFBQ2hBQUFHVHRNQVFBd0dnQ0hBQkNBQUZnQ29rQ0VLb1FuQUFKZ1FRQUVCMElCZ2hDSUNBVkFBS0FRQVFBRlFXQUFBSUFtQmdCUVFVUW9Db0ZCQUFpZ0NoQVFBUURFUUFoVUNCUUFDb0VVQUFRQWhBQ0NCRkFRQUJoR0FZQUNnZ0FpZ0JBQ1VFRUFBZ0VDUW1DRVFBb0FKQUFCVUFBZ0JrQUFCQUlPZUFoZ0VNQXdBSVFFVUFBUVFJQ0FDQUN0QUFRQUJFUUJBQWdBQUNPQ0lrQ0FSQUFDQUFRQ1FBRUVJSUFFRUNDQUFBR0FJZ0NBRUpTUmtHQVJnakFjQkFJSUVFUWlFUUJDSWlCRUNBQUFBaUFJZ0Frb0xBQU9BQlFCUVFDQkJRZ0FRaUFFQUFBQUJoQUFBVUFDQUFRQUFCVUJVQUFBQkNLUUFBb2dRQUlRSTRBQU9BNEF3QUNBREFJaENBb0lBRWtnR0FNQUFBQWdDZ0FBZ0FpSUFFQUFBRUJHQkNjQ0FJQ0FBSWtpcUJRQUlBUk1RQVFBQkFBQUlSZ2dBQUJBaUFpQUJRQkFBQUFBSUFBZ0traUpBVnBBU1FBQUFnQUFCZ0lBYWdBQUFJVVJBS0lLQUVCUkFDQ0VBZ0lBQUJBaGdBQUFDQUFHQkJBRkVKQUFBQUVGRlZBQUVBaEFBQUFRWUFTQUJDaUFBQUVNRVFTQVFDQ0FCQlZBQUVBSUFJQWlBa0JRQUVBRUFTQUFKcUFDaEdBaEJSQkFRQVJRQUFRQUJDQUlBQUlDSUFCQUFFUUFJQUFNQXFBQWdSQUFJQ0NBb0VBUUFRZ2dJUUJBQUFJQUFDZ0VJQUFBRkJYQ0JBZ0FvQUNTRUFBQVFRaENnQVFCSUVZS2dBQUJBVUFNUUF3QXdCUUFFQUVBQWdBQUFJSUlnRUFVSUlBQUVRUmhVQldCREVRQUZFRVNRQUU1Z0FvVUJDZ0VCQkJBQVJRQW9BQUlLQWdnZ0FBQUFBSUpFQWdBQWlBQklBQUFBREFjRVlBRUFBRUJBUkFpQWdnQ0tRSUNJQUNBSUFTQ0JBb0pBRlVFQUFNQUpJS2dJcUNRS0FDSUNvQUFBQUFFVUtKQkFVRUFJQUFBQXJRSXdDQVJBQ2dnQUFBQUVDZ0FFQUFHQWdBUkFFQUFBQVVGUUJCUkFBQ0FCQUFBUW9BQWdBQVFRb0FGUUtRQUtZQUFBaUFBSUFRVVFFSkJBUWlBQUFBRUFBQUFJQUJJQVZBQmtnRVNBQUFBQUJCQWhEQUtBQ2dwZ0NnSVFnVUFIZ2tCQ0FEUkVBQUFBWVNCaWhSUUN1b2dBQkNCQ0FnZ0NFQkFCQUFwUUFFS0FJQUFRQlVTVVNCY0FzQlVBQUFFQWtBd0FBQklBQ2dKQVFBQUJRSUVVaEtBS0VFZ1VJQ0FoSUFJa0VRVmdpQ0FBQUFWRUZFQ0FLQUZDQkFLQUFnRUNBQUZBQUFJZ2lBQTRGZEFBd0p3QUFsRWFnQUlnRUlBRUVBQmdCQUFBQkZDZ0VBcEFncERDZ3hBUGZSQVVFRlZBaEFqa1FnVlFDQ0JFZ0NUaUFLRUFJSWxBQ0lKRVZJQkFBQ1FBQUFBQVFBaWlDSkFSaUlBRkFCR0FjUU1BQWdBQUFFVkFJSW9SRVFDQWdFSVVJUUNJaEtBRkNnSUFRRUJGQUFBa0FBNlFBT2dpcENBS0FxSUZFQUFBQzRDQUNLQW9RQUFJQ0VwRklFQkFRS2dBRUFVUXFnZ0FBQndCUUdnaEFJQlFRQUlBSUFBVUJnYkVRQUlBQ0FBQUFWUUtRVUFCQUVRQmdvQW9RQUVWQUFBQ1FCQkdCUVFVUVFFUkNBRUNDNElBQWdFb1FRQVFnQmdFQVVRRlFBQUFBQWdBQzRBS2hRQUJRQWdBQVVxQ0FBZ2dRaUJBUUJRQVJRVUFBaEFBaGdBT0NjZ1FvZ1NVQUFzQUFRQUFBRVlBZ0VjQVVRQ0dCREFBQWdDd0VBQUlPOEFBUUFBUUlBb1JCUVFBSWdCRUFBSUJCTThMQmdCZ0lSQUFHUmduQUF1Z29LUUFGQUFBQUpDQUVRQkJTS0FVQUVRRUFDaEFnb0FJQ0FBQUFCUkdKQVdCZ0JDTUFDQUFBQWhCR0FBRkFFWUNBQUFEQmdBQUNDQUFKQkJCQUFRUWhJRkFJQUtBZ0lRSUFBQUFBQUFFSUlGUUFBSUJnWVFMV1RCMEJRSmdJd0JBRGdBU0VNQU1BQXFBUkVBS0lBZ29nRUtFQUJRQ0FBUUJCQUFBQUFRRklFVUNCQUlBT2lZQkJBaEFBZ2loWEFTQkdBQUFJQVFBSEFrTUFZSWdBQUFCUkFSQUloUkJWQVFBSUtBUVFBQUVFQUJBQUFGQUNGS2dVQUVTQUtBSmdCQVRqQkN3QWdBWUJGQ0JCUWdnQllTQndBTUFqQkFnaUFxQVFBd2hFQUNnQlJDaUVBQ29FQVFSQkFJRUFBZ0FRQklDZ0FBSUFnQWdCQUFTUUFBaUtFVENSU0FnQVRoQUFCS0NpQUFRQUVCTUJBQlFZbkFNSUlJU01BQWFBQ0NBUWlFQWxBRklBQWlGQUVDQlFnQUFBQ0FBQUNBQUNRSUVJQUZCQUFDSWdnQkZpQ0VBSmdCQUFBQUFRVkJRQVlBRUNBQUFCQUFoZ2poQWtZQ0FHQXFFQUNDZ0tCQUFRUUlBRUFLZ2lBQUtncUFnRkFBdWNBRElBQUlSR0JnQWdBQVFnQ0VDQUFBQUlRQUFnQWdRVEFFRGdSZ0FBQWdCUkFVQ3NFUWhRQVNnRUFBQUFHQ2tnaElJQmhBUmdCQUFRQUFDQUFnVUFFRUFCQ0tBcEFBSWdnQVVFQWdBQUFFQU1BQUF3Q0FFRCtPRDVJQWlBQVFpUWdJQUFQUWdnUUJTQ0lBQ1FNaWtBQUFDb2dVSW9BUUlLa0FnQUNpSUFGQUJBaFNRUVFDRUlBQVFBZ0FBQUFBRVFBUW9ZREVBUVFSQUVRaWhBS2hDVlFBQUFBTUVBZ0tBQUFVQVFBQ0VBRUFBaUFCQVFoQ0NDQ0VDQUNRQUFJQUFBQUlnQUJTR0JXUUJRQVJBa3N3UWdNUE1NQUVBQUFBQnhBQ0lCQUJBQkFBQUpBQUFFSVVBcW9JZ0NBS0FBQUNBQUJFQWdBSWdBeElBRUVRQTRCVUFDRUNKQUFBUWlBQUFBQUFnaEZBQUFVQkZFZ0FnQUFBQVFFQ0pBZ0FBUUFCQUFBRVNBQUFFQUFBQ2hBQUNnQ0lBZ0FHRUFKQlVBQWdSQWlpQUFRQW9BZ0FDQ0NnUUFBQ0FRQUVJQkFCRVFRQUNBaUFBQkVBQUFFQVVBZ0FLQUFCQUlBUUtBRUFJRUVBVUVKa2NCQWdHU2tBVkFBQ0NnQ2dCQlFnQUlJQWdRQUFCQUFDQUFnQ0JDRFVJZ0FBRkNvQXFDa0FBTUJBQUFBQUNBQUFBRklBQUFBRVFDQUJDQUFBQUVBZ2dFQUFvQUFBQUNpa0FJQVVBZ0JBQUVnQUhDTVlBQUFFQkpGQWdnUUFJRUFBRUNnQUJFUUVBQUFBZ0NnVUFFQUZBQ2lDaUFNQXFnUUlLZ0NJVDZMSUVJQUFnVVJCUUFBQkFVQUJRQUFBQkFBQVlBUVFvUUlDQUFBQWhBQUNpQUlBQUFBQUtFQ2hBQUFJS0JDQ2hBQUFBQUFBQUFBQUFBZ2dvaWdBQUFBSWhBbEFBQUFCQ2xDRUNDb0JJUUFBQUFRQUVDVUlJQUFBQUFDRUVLQUFZeGhDaUFBQUFBUm1aaUJCRUlBQUNnSUpxNkFBQW9CQWdBQUFFSVJHUkdTUkNBQUFBQUFFaTRBQUFBQUFBQUFBQUFBUUtQMndBQUFBQUlCeWdBQlJBZ0FBRUFBQUJBVVFBQVFBQUJBQjRHSDcyM0JnaENFSUNVSUFJUGdkY0JRQ2dnbGxDRUFpSlFBS0FKeUFEQllDSUFKZ0NLZ0NJT0NRQVNCQWxVUUFVZ0VRQndCY0FDZ0tDRHdBS0FwR0ZHSVFoaUVTS0JBSUFJQUVFNjRvTERHTS9jN0xBa1lRVjBCWEFBRWlBQUFBQUFBUkJ3VHZRQ0NnUUNvSW9CSUlKZ0J3WUhCQkVBRUFvSXJBcUFRUmhCREJFQ0V4RmdFQklLQXhsQW9CVENNaUFvSUVZQVFBRUFDSUVnQWxCMEFRQUVVQUEyZ1FFVEtCQWdJT1ZFRlJBaUlBQlFBVkFDQXJRVVFFQVlIQVlDTUJYUUJJUmhFSUFDS0s2UlFRVkFJS2dBQUtnb0lFWUVCYUJCQ3FDcUFIQkZBUVNnQUNnRUFnQjRLOEZwQUFBQVFCSUF5QkdBRnhJTVVBZ0VCd0JnQUNnQXdCV29BQkNDQUFnTkFBRkFDZ0lFQUFRa29WQUFZTVJJaUdBd0FVUUFFSVFaQUVDTWdBQU5CQUFDS0NJQUdWZ2dBUUNSQUtBQUVBQUFBTUFJQUtLQVlVSUlSVUNBNFY0S2dnUlNBSURrZE1LQXdBQUlBQ0VRRUFFSUE0QUhpUnRTS0lBQUFBQUFDb2dJQ0drQVFBQUtvQmdqZ0FBQUVVQUxNQ2lBR0FBQUFBQWlKZ1VBQklBQWlBQUVBd1FBS1FBQlVBQmdDQUJFZ0FCQWlCR0NBQUFBUkZRSUFFQUJFQUJIQWpBQVJRQUtDTUFtQUFRQUFBQXhCQ3hVZ0NNQkVBeEJDQURCQUtNRUJZRVVCVUNnZ0tnQUZGY0NJQWlBV2FjQUZJazBBaE9BR0lBQUFBQUtnU0lBb01BZ0FBQUFnbWd3QUtBQVJqQ2hCRkFBaUlBc2dFRVFoQUFBUUFNQ0FrQVFBRUFEQVNJQWdFQUFCU1FBQUFBQWdRUVFBQUFBUUFnQWFBSUFBY0FNQkRCSUlBaEJ5T0lFSkFBcUFpb0NFQUFNQXdBRVlFQUFtQUFBbGdnclFLSUNrQWhBb2dBaUJCVUJVQVNCTEVnSUFpUVVDQ0NEREREREREREZBVjBBWGlRQ1NBVUFRaEFGQkFDQUFBQUlJUWlnRndBSUlCa0FBS2hUQ0FRUUZjQUJBQWpnRXNBS1FGQ21Zek1Zb2dnSXE3K2tRQlN3SUlRQUMwaURrTVVxZ0FBNEFRd1J3QUFRSWdBQUlBTUFBaFFnRGdJUkNVSkFpaUlxQUNGQUJBQllFVUFBTXpCZ0VJQUFBQklNQWdRQUFBQUFCQkFRVXdBWEFna0FvQ0NzUkNxQVZpQ01BQ0JJWXhoQUVBVkdNWXlvQlFHR0lqRklJNEtna0ZJQUJFQlFJQUN3SVFBSUFnbUFCZ0lRQlFDS0FLcUN1Qk1OcmdDQUFBQ2dBSUJVQVF3SmxFVEJTQ2hHTVl4akNNWXhoQ1FtZ1lqb0ZKQUFqQUFCR0lpWGhYV0VJQ0FBZ0FBQUFJQUFBQklFQUFBUUFBUlRRV1FBaVFDSU1RQWNBUkFnQUFRUWtFSUFnUVRrUWdBQUpDVmdJakFZQUFBbUFLQWdNQXBBUXFBZ0JRQVFCQUVFQUFCUUVVQklDQUJVQUFTQ0VRQUlJZ0FRQVlWUUFBTEFnQkF3Z1JBQ0NDQ0NDQ0NHQ0NHaUFJQVFBQUFLZ0FBQ0lFSUFBQUFEZ0ZBQUFVRVZRQkFBTUJFQUFRTEVBUWdBaFNCQVJBQUFJQVFBaEFJd0NFQUlJRmdRd0FBQUFDQzBNd0FBakFDQUNFQUFBQkFGVUFtZ1RBQUJRQkhBRVNDc1FBQW9nZ0ZLZ0NpZ0JRQkRBQUFBSWtDQUFBQUJRQUFDQlZBSW9BRUFBcUFFVUFBb0FBVWdVRUZRQWtCQUFBQUNBUUJJQUZBQWhNVW9xZ0VFRUFJRUN1RUVBeUFDSWdRR0FDZ0VBRkpFZ0J3QWdLd0tRUVFVQW9BZ0FJcENBaUF3SWdBQUN3S2hFUVNnV0ZGTkFGZ0FPQUNJQVJRQ0FBQXNGVkFRUWlBQUVDS0NCVUdnQUFRQUNDQ0FBQWlJQUNoQUtvQllBQUNDRXFRZ2dRQmFrTUFBQVJRQlFDQmNBS0FRQUVKQ2hRQUlDZ0NSQ0NFRmFBaEVDb0JCQVVBb2dDQUFGSkFRVUFnaEJBQUFBRUZRQ0lBQUJBQ3VBVUFBQU1Va2dDZ0FpZ3BFQUFxRlVRRXdFQkFJZ0FBS0lBQUFBTUFBSmdBQUFnSVJBSUlBQWdBcWlxQUFBWUNBQUNvQVlJQVVBQXFJSHlIcVhBQkFBQVFBSlFnQUFCU0JBZ0FBQVFDZ2dxb0ZRQVJCQ3JJUUFWQUNBRUFBQ29BRUlRaEtpQUVBRVFFZGdBQkFCQW9pQUJWUUNBQUlBSXdDZ0FzQ0FGVUFvb0FDb0N3S3dVa2lpQUVBaXNxQUFBUXJBS2tnQWhBQW1LQVNFaFNtZ0FSQUtxRkVJb0NPQUFpQUNnRVZBQUVnZ2dBVlFGd0FBQUFxZ1VRQUtBQUFDZ0FDS2dBaW9JQUtBZ0NnQUFnQUtnQ0VVUVVCQUlnQUFFZ0tpSW9JSUNzQ0Nrb0lnQUFBQ2FDQUFBamxGUUFBS2tvSXFnQUZJQURBQ2dnQUZVQTRDb3dGQVFBRUZBQmhWQURFRUFxa0FBQWdCVUFxS0IwSVFBZ1FGSUlnQWdBUUNCRUFBQUpnSVlBQUFxQUVDQUVRRVVnQUFBQUVJQUJBQUtJQXlBT0VEeHdFUUFCQWdnZ2dxZ0VBQlFBQVFBUUVBQUFCQkFBQ0pKbWJPcUFBQUJYQUtWRUtZQUtBQlFGQUFLZ0FDQUJ3QUZBS0lBQ0FBQ3FnSmdBQUlBVUFJQ0FBVWhRQkNBVUFnQUVBWUVBRUFBUUZVQWdFRUFBellBcUtpb3JvQUFBQUlBQUFBQUlRUUNnQ0FBQUFBSGs2UUFBQUFDUzRBQUFFQUFBQUFBQUFFQUFBZ0FDWjd3QUFBQUlBQUVBQUJBSUFBSUFDQUVBbEpzQUlDY0FDdmRpb0dBaEVBQUFBQUNBSUNvQkFGQ0FBUVFGUUFBQkdvQUFBQUFBQUFBd0VFR0JRQVFRVnlBRUFrQUEwQ0FBRllBcFFBSFIrb0lsNmdTQ0FnQUFRaENFQktBSUFRQmNBUVFHQUFBQUFSQlFBQUNCVkFBQUFBQUJFQkRBQUFyQUFFRVFBQUlJUWdJb1FBVUJTQVZFSXFBWUFSd0s0RU1CVFFFUUFDQUNnQUFBQ0FRSVFRSUFFbURFUUNSQ0FGQUZJRkFBUVJabUlLQ0FBUUFDU29BUUJCWUdBaDFBaUNnSUl3QUFBQVFCZ0tnRVJPQUpoSWdBNEFGTVZGQkFJQlJSVWtBVWtGVUVTaGxJZ0FHQUFRZ0FSVlFRVUFFUWdBQlFLd0FPQUlnaUJBRVlKaE5CQkFBQUdBQVNBS0FBQ2dRQ0FBS0FGUUVVS2tWSUNJQkVBYUFCREFGa0FrQUdKZ1dBRVVBVmdBZ1FJQUFBQURBRVFnSUFEeURFRllBT0JBREFBQ29GTUFNQXFnRVVBZ1lBQ0lDS0FJSVFyQWRDQUFFQUJFRUNBZ0lBQUlBaEFrQVFDZ0FBQ0FBQUFHd0F3SW9JNkFBQXdJaUFBQUFKQVJJQldBVkVBQUtBUUFBQUJBUUNFQURPVUVFQUNvaEZDT0FFVkFncWdFQlFxZ0NvZ2dvQUFBQVFBSUFLT0VLQkFBSUFBRXdHMklBSUJTQUVDR2hWQUJRQUFRQ0lBQUFBQUFJNFJnQUE0QUVnUlFBQWdvNUFBb0FBU0FBVUk0QVFBZ1JnRWdoRU9vQUFWZ0FnZ0FBQUtnRUlBQWlBQ2tGUUFLaWdRQUlvQUZRaUFBSUFBQkJUQUNCTUFBQUFBNEFBQUFBQVVBQUFBQ01BUlFxZ1FDQWdaNG03VktFQUFvU0FWUUVBQkdJQUlRaEVBUUFBQ0ZBQ2tKQkFvaXFBQW9DdzV3REFrUW9JZ1NBQUNDRVVCQWdBUUFVQUFJQkFRQVZCR1lFWUNPQUVBQVFEbEZBckFBVVFFZ2lFSUpsSkFZVlFDQUFCSUFBQUtBS2dBSklBRWlCQkJFQmdBVXdCUkFtZ0ZBQUFCQUJnUUFRUUFJcEVBR0t3Q0VFQ29HQVJXQUNZekZaVkVJQ1hnSVFFNENFRkJSQWdBZ2tGUVFBQUFCQVVRRkJBa1FyZ0FRQUlnRVlFQklRQ0lGQUZCaEFEZ0NxRUFBQklBRGdBRUFDS2dBQ1lLWUtnaFBjRUJBQWNBQlZFZ0dBc3BBQVVDQkdBUUFCVUZVbEE1K1VCQ0JpSUl3UUFKZ0FCSUJDQUFWQUFSQUFVSUFvQUFGZ1RBRUZBRUVnTUFJRVFKRUFFRUJIQUdCQmdBRVFBUkNRQUFDUUFCQ0JDUUVRQ0FGVkFwQUJBRnhFQXFBcUpJQVYwQU9GVUFJQUJFaVlqQUFBYkFBQUlncEFBcWdqRTJRS3dFVUFJVUFSQUFFQWxkZEdLbjlocmdBREFnaUJBVVFnQ0FBazZKU0FBcUlBQ0FJQ2lGYWdBQVdBbUxvakVFREFZU0FDcUFRZ1FBQUNWQW9CUVFBT0JWUXBpQVFFZ0ZFQVVRcW9CRUFCa0ZFb2hHQVVRQmdBQUlCQkVERVlCUUN3QVJnUUtnQUJBUXFBQU9BT0M0QUFFRkFDcUJXQUJWQUNnQUFKd0lBcWdLRUFBQUtBQUlCVkFvQ21rQUNLQW1BQUFEMEtJZ0FCYjZBQUFFQURDR0VLSUFJQUVnS1lPSG5YWEdSNzRxRVlBR0FDQ0VBY0E1QU1BbEFJZ0FBNkUxSUFnTElBTVJBUWpNUmdBQkFRQUFBQVdBc0FxQkFBUlZTQUNFRUFnQklvaUFBRVFBU1lqWVFFaU1CREVDQUVCQWdBS0FSQkhBVlNJZ0FnQk1SQUFyQUVCQVZFQVFBU1FyUUFBSWdCUmlBQUFRRkFBQUZBRUFZRk1DdEFFQUJYRnlrVUFJZ0VqUUZDcUFGaXFFQXNBUVpFREFBQUpDQVlvQkJTZ0FWa0JHQ1lRQ2dBZ0FJb0FoRUZRS2dSQUlBQVFGUUFBSVFCR2dFaWlBVVdiRVpCd2dxSXB3aTRDRUFxZ3FnQmRJUUFGWUNnRUFBRlVBQVJBUUFJQUVBQVVnSUFGQkNBVkFBZ0RnaUJCQ29BQUFRV1ZJQWpBQ0FLdUtTUWhnQXdBcUFIUUJrMEFFQmdVMEZCQUZBRmhSZ0lZQXR4d1VRSTRDR2lBQWxBa0FZQUNBS1FDd0FFa0FBQ2hBQVFBQWlBQkFFUVRBQUFVQUpLSndBQUJ5NUNDWXl3UUNBQUVLZ0lBQkNRQ2dEUUNvQUFCd0NLQUpoRkFnQURBSXdDUUFDaVFRZ0ZRaUtRQkZGQUFUQUVRRHBBZUlBQUFDQklBSkNBQWhBQUFJQUZDQUFBUkJBQk1Lb0FJQUl3Z01JQUlvQUFBQUtnRUFBQUVBQWlDaUFWUUFCSUlFWUFBZ0VCRUFBQlJBSkFBU0FBQkVBQkNCSUJBUkZoY0JSQWdNQVFBaGdLQUFBRkNDWVFDUlFZQ2dJQXlyQVFBSUJMR01Ja0FRQkFBQUNBQUFJQUlnRUFBWUFTQkErSUFHQUJBQUFBQ2dBd0NBV0NnQUUxRVlBVlNFRklHQ0ZVRUNBQ0lBSUFJUUlDYUFBQlVnQWdBRkFBVlVDaEZGQWtBRUlnb0pBaEVJQUNGQUFNQUZFRUFoU0FGaEJaQURBQTRBWUFBSUVBR2dFUUFBSUFYQUFDSUFxQ0FQQVlnQUFBQkFqS0xnQURCV2dvWWhsQ0ZOQUdNU2pHQ0Fnd2ZUQWtJVWhBRkVoS0pHZ0NnQ0FBUkFBQUhBQm9RMEFWQUtJQkJBS0FJUUFJRmtBaWlRVlFBREFBUUVFRUZJQklBRUFBQUFBQ0FDaFFoQkJCQVVTZ0NxQ29DQUFoQVJBQWpCQ0FFQXdBU0FVQ0lDaW9BcUFEZ0FnaEFBS3dBUU1pSVFJUkJWQUFBVmtBQ0VCZ1VBVUVBQkJnVUFJVW9BcEZzRWxRQkdDTWdNZ1ZoQUZZQ0Fpa0FBUWpBRkFCQUFBQUFELy9aIg=="

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(150);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(152)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!./node_modules/css-loader/index.js!./main.css", function() {
		var newContent = require("!!./node_modules/css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "body{\n    background-color: red;\n}", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(153);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);