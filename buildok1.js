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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(6);


// 引入css
// import maincss from './main.css'
// import './main.css'
__webpack_require__(8);

// console.log(123)

new __WEBPACK_IMPORTED_MODULE_0__vue_js___default.a({
    el:'#app',
    components:{
        app:__WEBPACK_IMPORTED_MODULE_1__app_js__["a" /* default */]
    },
    template:'<app/>'
})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
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
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

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
  keyCodes: Object.create(null),

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
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
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
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
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
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
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
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
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

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
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
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
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
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
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
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
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
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
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
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
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
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
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
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
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
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
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
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
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
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
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

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
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
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
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
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
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
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
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
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
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
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
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
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
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
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
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
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
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
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
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

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
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

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
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
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
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
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
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
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
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
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
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
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
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
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
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
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
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
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
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

function lifecycleMixin (Vue) {
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
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
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
      return
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

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
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
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
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

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
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

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
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
function resetSchedulerState () {
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
function flushSchedulerQueue () {
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
  queue.sort(function (a, b) { return a.id - b.id; });

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
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
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

function callUpdatedHooks (queue) {
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
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
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
function queueWatcher (watcher) {
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
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
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
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
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
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
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
Watcher.prototype.cleanupDeps = function cleanupDeps () {
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
Watcher.prototype.update = function update () {
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
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
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
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
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

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
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
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
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

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
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

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
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
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
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

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
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
  this.slots = function () { return resolveSlots(children, parent); };

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
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
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
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
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

  destroy: function destroy (vnode) {
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

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
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
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
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
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
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
    return createFunctionalComponent(Ctor, propsData, data, context, children)
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
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
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
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
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
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
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
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
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
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

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

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
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
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
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
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
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
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
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

function resolveConstructorOptions (Ctor) {
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
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
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
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
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

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
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
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
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
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
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
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
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
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
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

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
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

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
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
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
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
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
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

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
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
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
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
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
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
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
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
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

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

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
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

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
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
      return
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
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
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

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
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

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
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

  function createChildren (vnode, children, insertedVnodeQueue) {
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

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
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
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
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

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
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
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
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

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
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
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
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
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
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
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
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
            break
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
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
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
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
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
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

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
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
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
    var callInsert = function () {
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

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
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
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
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

function setAttr (el, key, value) {
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
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
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

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
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
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
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
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
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
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
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

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
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

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
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



function parseModel (val) {
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
      }
    } else {
      return {
        exp: val,
        key: null
      }
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
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
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
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

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

  addProp(el, 'value', ("(" + value + ")"));
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
function normalizeEvents (on) {
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

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
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
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
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
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
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


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
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
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
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
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

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
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
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
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
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

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
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
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
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

function getTransitionInfo (el, expectedType) {
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
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
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
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

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
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
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

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
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

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

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

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
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
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

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
  inserted: function inserted (el, binding, vnode, oldVnode) {
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

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
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
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
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

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
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
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
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
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
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
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
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

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
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

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
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
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
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
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
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
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
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
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

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
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
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
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
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
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
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
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
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
        return match
      }
    }
  }

  function handleStartTag (match) {
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
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
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

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
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



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
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

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
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
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

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
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
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

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
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
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
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

    end: function end () {
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

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
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
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
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

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
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
  return res
}

function processIf (el) {
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

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
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

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
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
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
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
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
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

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
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

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
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
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
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

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
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

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
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
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

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

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
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
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
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
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
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
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
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
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
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
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
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
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
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

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
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
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
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
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
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
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
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
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import img from './1.jpg'

var img = __webpack_require__(7)
/* harmony default export */ __webpack_exports__["a"] = ({
    //    template:'<div>我我我我我</div>'
    template: '<div><img :src="imgSrc"/></div> ',
    data(){
        return {
            imgSrc:img
        }
    }

});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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igQKMECn20F0/wCOOO/3/wD/AM1h1yuNEngTxBQi1Y488/44JpbL7777777zzzzzzzzzzzyCwxAIPnin3Bf33zzzzyA/3331HFmEcNhb4MNulbr/AP8A6w4/lgvvvvvvvvPPPPPPPPPPPHIHAFoAARxyA/8A3zzzwDQ33339Hcw089SMNa7e0Kr/AP8A6ww/lgvvvvvvvvPPPPPPPPPPPPOGLOLgQUKAE9ffPPPHEBTY/wC01n3/AP8Af5xz7n9xl/8A/wDDHDiyO+++++++888888888888888A8W19gIAJV988888s9F5u7Qh99888ADCKqyS//wD/AMMcMoJb7777777zzzzzzzzzzzzzzzzzzX8BQelX3zzz77KJigBKHj37zzxV4ILbKNf/AP8Aw1w6glvvvvvvvvPPPPPPPPPPPPPPPPPB0SFMA08fffPIsrlnipyg0fvvvthBg5z3/wD/AP8Ax1y6gvvvvvvvvvPPPPPPPPPPPPPPPPPGN8EAjiy8MMNIkhlsgkglD/fPPGolg1//AP8A/wD/ANdeqoL77777777zzzzzzzzzzzzzzzzzzyjeDILZcEAEBnHHW8Y9Tf8A9888ycWDX/8A4/8A/wDXXqqC++++++++8888888888888888888+qkTH+WhU2KGsBAATkXf/APffPGaHy4//AP8A/wD/AMNMepar7777777zzzzzzzzzzzzzzzzzzz7a37Xkcpp75I4JL4NJP/8A/wDQzf5go09//wD/AP8Aww36lqvvvvvvvvPPPPPPPPPPPPPPPPPLDhnPPLKf1zyx9kt2knqh8twwJtghiqwww1/682w6lqvvvvvvvvPPPPPPPPPPPPPPPPPOEtvhBqWFjjVTFnvzw0032x4wsghgg/lwxz70x4ynnvvvvvvvvvPPPPPPPPPPPPPPPPPOGkivKraFuuvrQE/+/wDsfd+d+9LK64fZcPMs9+Ofr7777777777zzzzzzzzzzzzzzzyzBn6P/wDM/uo+62mEDjH37ffHS7OCqaXfWDT7/n/D7q++++++++++888888888888888+4E1lPbvszSk2O+uXr/vbDjDSjDT3DjDDznXP++++PCCWC+++++++88888888888888888AHHzv72L+1X+/8Att46z13wxhu31wxxiox5jvvuo7gAljvvvvvvvvPPPPPPPPPPPPPPPPOoNg764EdnAvv91/wz781z4y00l110hg17tvvqlkgInogglvvvvvPPPPPPPPPPPPPPPPDPTab42LRQQ0/0z816/rw//wB9cMNPdub5J77765s6ZaKIIJL7777zzzzzzzzzzzzzzzzy6wuJEGZdFK8Pcf8AivXDX7TLPb6OW++ODKS+6XnCS+9bKCCayy2+888888888888888884JlR193L/QjDX/byXjHDDT3vHznD/27+nKmOP8A84x5i4ggggglvvPPPPPPPPPPPPPPPPPBFFf/AMkqtKINcd8OMqOsPMtcOseNMR5OHlH/ANxsv3+HjCCDDDW+888888888888888888kAd/8A+ST+kCBjIsgkp40x971wwxQRWdfWQ8b3/AAQ4hv/AMsABf7zzzzzzzzzzzzzzzzzzwhHXepHPxwyiCz6gpAvfsPOetO0lGd8O08G8SqAR497764wxv7zzzzzzzzzzzzzzzzz6oCgEa9QOCQSRT3oHKENc8tIp6LEZ00Wv81W9pEFbzz/AO+//wD6w/PPPPPPPPPPPPPPPPPPOgBcEqXoxUESRQWVB4baXCl/ggnZWXooAAAApFVPPP8A77//AP8A/wDzzzzzzzzzzzzzzzzzzzwYM5CUASICQkOfOqcGu1TrvMAKRQIMMEwEHAhJz/8A/wD/AP8A/wD/AP8A88888888888888888886JB+gB8KE4VHCT3jD5bR6abzzhEwCG1d9DBWyA/8A/wD/AP8A/wD/AP8A/wDzzzzzzzzzzzzzzzzzzyjQsxoN18u9UFfXg0j6R3VNP/8Aup4qkggVFDBmA9//AP8A/wD/AP8A+sPzzzzzzzzzzzzzzzzzzzxH+h7x47BeUMQYhf3EOs2MPPPPLqoDgkRr47ApAMcsoNrrOMPzzzzzzzzzzzzzzzzzzzxyngL7574KAgjhFGoYst/fcsMdcTYDy1RSrQs2MmY/48sv/MPzzzzzzzzzzzzzzzzzyw73FST784qK2DZhe2ta5K4cMON+tDQgSpyx7ZhUMt64oMc4oc/zzzzzzzzzzzzzzzzzzj7vLx/OO96rO9bU00004M+MeI7JaJzLLLrquZOPft7444475PPzzzzzzzzzzzzzzzzzyzD/AP8Avwp/vqqo5cccffan/wC498uY44YGo44Jd8MNfN6oMN6ccsPzzzzzzzzzzzzzzzzzzyzDv7MML7774KLzmn337/8A+/jzKzHLS3Tf/wDqxyskkmww/wBq+sPzzzzzzzzzzzzzzzzzzzz7t2MotcvMIaoYMsMOf496oMIINOMevP8AyaiCOifeDDDDDDDD88888888888888888888+8NX6LjzzS73zfvHPbyCSjHKCPHLHqTT2qaLPLKjDDDDDDDD88888888888888888888788DqqCGOfDDHDCSzyyyyyLDnDTCDC6S+y3rz2/DDDDDDDDD884w088c4884Q488848+vU9DDKGKCzXCiOGnCKHLLL7PrDHrGabzXP8A/wAvfeMMMPusMMPzyiQhCATyDwAwgQwBXbrC1lNtMMpJN87ZLIcoKsOuetOubZp5MMNf/wD/AKw2888U16www/PPOPMNJFFPNOFEMBHFYIbFSa6grp0xy1Impxwqgww8yklz3zwgw1//AP8AjLTjNDTDzfDD88oI4wEIQQwcYQAAsRph9Z9hjDqinzPDjW6eHjDDDXvDbrLTTCPPOPOPLX++qHva2KDD88s8sgg04I8gAIQMMMopf0VFrjjSHrPiiWuOrbvLHCWLSrnLDm/PfeOOqrnPjunOOOOP8888oAsMgo0AQgcUQQgxlVJAbjjWH/LqGyWHynSDSDiCCvDi+W3/AM88sswijgw0wgi9g/PNNABPICNEBAMGEMIHLpeFCin40z7w40xg1/qiung4rkuuyhwgkrdzQgggvgwks1tyg/PLNHACHJMAKBIJABOHGgxURGgwik7x6/6y3xglhtglq4nyhoytvveccpoqgsnvky2pjvPNLPPMMDDHLHGLDHLPvvvi+Bg94gkgkskmgjjhssg84ggskhwdeU12gssogsomooi4svPPPPPPPPPPPPPPPPOvPPPPKFw4r5888884w/3+ziwwgzjkgh//AP8ADnCCCqmCCCymKCCC88888888888888888+88888oXDLj3DDDDDTLPvjzDHbHOODDv/8A/wCveoIKrprrb6rKIrLzzjzzzzzzzzzzzzzz777rziVUMMtcMMPPudMPuMMMMcbLoNf/AP3/AKw4wgshls0ssggoguMMPEFNMMJEIOGONOGvvpmODJIU14ww7yzBDOx8q056wvmgx831/wCu9orZqYoYI474YY7SDQjiRzTiigShyiCy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"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "body{\n    background-color: green;\n}", ""]);

// exports


/***/ }),
/* 10 */
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
/* 11 */
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

var	fixUrls = __webpack_require__(12);

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
/* 12 */
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