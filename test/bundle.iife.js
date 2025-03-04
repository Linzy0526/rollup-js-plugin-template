
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var xcAliPayWebview = (function () {
  'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive$1(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey$1(t) {
    var i = toPrimitive$1(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey$1(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var esnext_map_deleteAll = {};

  var globalThis_1;
  var hasRequiredGlobalThis;

  function requireGlobalThis () {
  	if (hasRequiredGlobalThis) return globalThis_1;
  	hasRequiredGlobalThis = 1;
  	var check = function (it) {
  	  return it && it.Math === Math && it;
  	};

  	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  	globalThis_1 =
  	  // eslint-disable-next-line es/no-global-this -- safe
  	  check(typeof globalThis == 'object' && globalThis) ||
  	  check(typeof window == 'object' && window) ||
  	  // eslint-disable-next-line no-restricted-globals -- safe
  	  check(typeof self == 'object' && self) ||
  	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  	  check(typeof globalThis_1 == 'object' && globalThis_1) ||
  	  // eslint-disable-next-line no-new-func -- fallback
  	  (function () { return this; })() || Function('return this')();
  	return globalThis_1;
  }

  var objectGetOwnPropertyDescriptor = {};

  var fails;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails;
  	hasRequiredFails = 1;
  	fails = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails;
  }

  var descriptors;
  var hasRequiredDescriptors;

  function requireDescriptors () {
  	if (hasRequiredDescriptors) return descriptors;
  	hasRequiredDescriptors = 1;
  	var fails = requireFails();

  	// Detect IE8's incomplete defineProperty implementation
  	descriptors = !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  	});
  	return descriptors;
  }

  var functionBindNative;
  var hasRequiredFunctionBindNative;

  function requireFunctionBindNative () {
  	if (hasRequiredFunctionBindNative) return functionBindNative;
  	hasRequiredFunctionBindNative = 1;
  	var fails = requireFails();

  	functionBindNative = !fails(function () {
  	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  	  var test = (function () { /* empty */ }).bind();
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return typeof test != 'function' || test.hasOwnProperty('prototype');
  	});
  	return functionBindNative;
  }

  var functionCall;
  var hasRequiredFunctionCall;

  function requireFunctionCall () {
  	if (hasRequiredFunctionCall) return functionCall;
  	hasRequiredFunctionCall = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var call = Function.prototype.call;
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
  	functionCall = NATIVE_BIND ? call.bind(call) : function () {
  	  return call.apply(call, arguments);
  	};
  	return functionCall;
  }

  var objectPropertyIsEnumerable = {};

  var hasRequiredObjectPropertyIsEnumerable;

  function requireObjectPropertyIsEnumerable () {
  	if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  	hasRequiredObjectPropertyIsEnumerable = 1;
  	var $propertyIsEnumerable = {}.propertyIsEnumerable;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Nashorn ~ JDK8 bug
  	var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  	// `Object.prototype.propertyIsEnumerable` method implementation
  	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  	  var descriptor = getOwnPropertyDescriptor(this, V);
  	  return !!descriptor && descriptor.enumerable;
  	} : $propertyIsEnumerable;
  	return objectPropertyIsEnumerable;
  }

  var createPropertyDescriptor;
  var hasRequiredCreatePropertyDescriptor;

  function requireCreatePropertyDescriptor () {
  	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  	hasRequiredCreatePropertyDescriptor = 1;
  	createPropertyDescriptor = function (bitmap, value) {
  	  return {
  	    enumerable: !(bitmap & 1),
  	    configurable: !(bitmap & 2),
  	    writable: !(bitmap & 4),
  	    value: value
  	  };
  	};
  	return createPropertyDescriptor;
  }

  var functionUncurryThis;
  var hasRequiredFunctionUncurryThis;

  function requireFunctionUncurryThis () {
  	if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  	hasRequiredFunctionUncurryThis = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var call = FunctionPrototype.call;
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
  	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

  	functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  	  return function () {
  	    return call.apply(fn, arguments);
  	  };
  	};
  	return functionUncurryThis;
  }

  var classofRaw;
  var hasRequiredClassofRaw;

  function requireClassofRaw () {
  	if (hasRequiredClassofRaw) return classofRaw;
  	hasRequiredClassofRaw = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var toString = uncurryThis({}.toString);
  	var stringSlice = uncurryThis(''.slice);

  	classofRaw = function (it) {
  	  return stringSlice(toString(it), 8, -1);
  	};
  	return classofRaw;
  }

  var indexedObject;
  var hasRequiredIndexedObject;

  function requireIndexedObject () {
  	if (hasRequiredIndexedObject) return indexedObject;
  	hasRequiredIndexedObject = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var classof = requireClassofRaw();

  	var $Object = Object;
  	var split = uncurryThis(''.split);

  	// fallback for non-array-like ES3 and non-enumerable old V8 strings
  	indexedObject = fails(function () {
  	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return !$Object('z').propertyIsEnumerable(0);
  	}) ? function (it) {
  	  return classof(it) === 'String' ? split(it, '') : $Object(it);
  	} : $Object;
  	return indexedObject;
  }

  var isNullOrUndefined;
  var hasRequiredIsNullOrUndefined;

  function requireIsNullOrUndefined () {
  	if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  	hasRequiredIsNullOrUndefined = 1;
  	// we can't use just `it == null` since of `document.all` special case
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  	isNullOrUndefined = function (it) {
  	  return it === null || it === undefined;
  	};
  	return isNullOrUndefined;
  }

  var requireObjectCoercible;
  var hasRequiredRequireObjectCoercible;

  function requireRequireObjectCoercible () {
  	if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  	hasRequiredRequireObjectCoercible = 1;
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	var $TypeError = TypeError;

  	// `RequireObjectCoercible` abstract operation
  	// https://tc39.es/ecma262/#sec-requireobjectcoercible
  	requireObjectCoercible = function (it) {
  	  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  	  return it;
  	};
  	return requireObjectCoercible;
  }

  var toIndexedObject;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject;
  	hasRequiredToIndexedObject = 1;
  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = requireIndexedObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	toIndexedObject = function (it) {
  	  return IndexedObject(requireObjectCoercible(it));
  	};
  	return toIndexedObject;
  }

  var isCallable;
  var hasRequiredIsCallable;

  function requireIsCallable () {
  	if (hasRequiredIsCallable) return isCallable;
  	hasRequiredIsCallable = 1;
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  	var documentAll = typeof document == 'object' && document.all;

  	// `IsCallable` abstract operation
  	// https://tc39.es/ecma262/#sec-iscallable
  	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  	isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  	  return typeof argument == 'function' || argument === documentAll;
  	} : function (argument) {
  	  return typeof argument == 'function';
  	};
  	return isCallable;
  }

  var isObject;
  var hasRequiredIsObject;

  function requireIsObject () {
  	if (hasRequiredIsObject) return isObject;
  	hasRequiredIsObject = 1;
  	var isCallable = requireIsCallable();

  	isObject = function (it) {
  	  return typeof it == 'object' ? it !== null : isCallable(it);
  	};
  	return isObject;
  }

  var getBuiltIn;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn;
  	hasRequiredGetBuiltIn = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var aFunction = function (argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};

  	getBuiltIn = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn;
  }

  var objectIsPrototypeOf;
  var hasRequiredObjectIsPrototypeOf;

  function requireObjectIsPrototypeOf () {
  	if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  	hasRequiredObjectIsPrototypeOf = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  	return objectIsPrototypeOf;
  }

  var environmentUserAgent;
  var hasRequiredEnvironmentUserAgent;

  function requireEnvironmentUserAgent () {
  	if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  	hasRequiredEnvironmentUserAgent = 1;
  	var globalThis = requireGlobalThis();

  	var navigator = globalThis.navigator;
  	var userAgent = navigator && navigator.userAgent;

  	environmentUserAgent = userAgent ? String(userAgent) : '';
  	return environmentUserAgent;
  }

  var environmentV8Version;
  var hasRequiredEnvironmentV8Version;

  function requireEnvironmentV8Version () {
  	if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  	hasRequiredEnvironmentV8Version = 1;
  	var globalThis = requireGlobalThis();
  	var userAgent = requireEnvironmentUserAgent();

  	var process = globalThis.process;
  	var Deno = globalThis.Deno;
  	var versions = process && process.versions || Deno && Deno.version;
  	var v8 = versions && versions.v8;
  	var match, version;

  	if (v8) {
  	  match = v8.split('.');
  	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  	  // but their correct versions are not interesting for us
  	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  	}

  	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  	// so check `userAgent` even if `.v8` exists, but 0
  	if (!version && userAgent) {
  	  match = userAgent.match(/Edge\/(\d+)/);
  	  if (!match || match[1] >= 74) {
  	    match = userAgent.match(/Chrome\/(\d+)/);
  	    if (match) version = +match[1];
  	  }
  	}

  	environmentV8Version = version;
  	return environmentV8Version;
  }

  var symbolConstructorDetection;
  var hasRequiredSymbolConstructorDetection;

  function requireSymbolConstructorDetection () {
  	if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  	hasRequiredSymbolConstructorDetection = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var V8_VERSION = requireEnvironmentV8Version();
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	var $String = globalThis.String;

  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  	symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  	  var symbol = Symbol('symbol detection');
  	  // Chrome 38 Symbol has incorrect toString conversion
  	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  	  // of course, fail.
  	  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  	});
  	return symbolConstructorDetection;
  }

  var useSymbolAsUid;
  var hasRequiredUseSymbolAsUid;

  function requireUseSymbolAsUid () {
  	if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  	hasRequiredUseSymbolAsUid = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();

  	useSymbolAsUid = NATIVE_SYMBOL &&
  	  !Symbol.sham &&
  	  typeof Symbol.iterator == 'symbol';
  	return useSymbolAsUid;
  }

  var isSymbol;
  var hasRequiredIsSymbol;

  function requireIsSymbol () {
  	if (hasRequiredIsSymbol) return isSymbol;
  	hasRequiredIsSymbol = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var $Object = Object;

  	isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  	  return typeof it == 'symbol';
  	} : function (it) {
  	  var $Symbol = getBuiltIn('Symbol');
  	  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  	};
  	return isSymbol;
  }

  var tryToString;
  var hasRequiredTryToString;

  function requireTryToString () {
  	if (hasRequiredTryToString) return tryToString;
  	hasRequiredTryToString = 1;
  	var $String = String;

  	tryToString = function (argument) {
  	  try {
  	    return $String(argument);
  	  } catch (error) {
  	    return 'Object';
  	  }
  	};
  	return tryToString;
  }

  var aCallable;
  var hasRequiredACallable;

  function requireACallable () {
  	if (hasRequiredACallable) return aCallable;
  	hasRequiredACallable = 1;
  	var isCallable = requireIsCallable();
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	// `Assert: IsCallable(argument) is true`
  	aCallable = function (argument) {
  	  if (isCallable(argument)) return argument;
  	  throw new $TypeError(tryToString(argument) + ' is not a function');
  	};
  	return aCallable;
  }

  var getMethod;
  var hasRequiredGetMethod;

  function requireGetMethod () {
  	if (hasRequiredGetMethod) return getMethod;
  	hasRequiredGetMethod = 1;
  	var aCallable = requireACallable();
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	// `GetMethod` abstract operation
  	// https://tc39.es/ecma262/#sec-getmethod
  	getMethod = function (V, P) {
  	  var func = V[P];
  	  return isNullOrUndefined(func) ? undefined : aCallable(func);
  	};
  	return getMethod;
  }

  var ordinaryToPrimitive;
  var hasRequiredOrdinaryToPrimitive;

  function requireOrdinaryToPrimitive () {
  	if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  	hasRequiredOrdinaryToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();

  	var $TypeError = TypeError;

  	// `OrdinaryToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
  	ordinaryToPrimitive = function (input, pref) {
  	  var fn, val;
  	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  throw new $TypeError("Can't convert object to primitive value");
  	};
  	return ordinaryToPrimitive;
  }

  var sharedStore = {exports: {}};

  var isPure;
  var hasRequiredIsPure;

  function requireIsPure () {
  	if (hasRequiredIsPure) return isPure;
  	hasRequiredIsPure = 1;
  	isPure = false;
  	return isPure;
  }

  var defineGlobalProperty;
  var hasRequiredDefineGlobalProperty;

  function requireDefineGlobalProperty () {
  	if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  	hasRequiredDefineGlobalProperty = 1;
  	var globalThis = requireGlobalThis();

  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;

  	defineGlobalProperty = function (key, value) {
  	  try {
  	    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  	  } catch (error) {
  	    globalThis[key] = value;
  	  } return value;
  	};
  	return defineGlobalProperty;
  }

  var hasRequiredSharedStore;

  function requireSharedStore () {
  	if (hasRequiredSharedStore) return sharedStore.exports;
  	hasRequiredSharedStore = 1;
  	var IS_PURE = requireIsPure();
  	var globalThis = requireGlobalThis();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	var SHARED = '__core-js_shared__';
  	var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

  	(store.versions || (store.versions = [])).push({
  	  version: '3.41.0',
  	  mode: IS_PURE ? 'pure' : 'global',
  	  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  	  license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
  	  source: 'https://github.com/zloirock/core-js'
  	});
  	return sharedStore.exports;
  }

  var shared;
  var hasRequiredShared;

  function requireShared () {
  	if (hasRequiredShared) return shared;
  	hasRequiredShared = 1;
  	var store = requireSharedStore();

  	shared = function (key, value) {
  	  return store[key] || (store[key] = value || {});
  	};
  	return shared;
  }

  var toObject;
  var hasRequiredToObject;

  function requireToObject () {
  	if (hasRequiredToObject) return toObject;
  	hasRequiredToObject = 1;
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	var $Object = Object;

  	// `ToObject` abstract operation
  	// https://tc39.es/ecma262/#sec-toobject
  	toObject = function (argument) {
  	  return $Object(requireObjectCoercible(argument));
  	};
  	return toObject;
  }

  var hasOwnProperty_1;
  var hasRequiredHasOwnProperty;

  function requireHasOwnProperty () {
  	if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  	hasRequiredHasOwnProperty = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toObject = requireToObject();

  	var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  	// `HasOwnProperty` abstract operation
  	// https://tc39.es/ecma262/#sec-hasownproperty
  	// eslint-disable-next-line es/no-object-hasown -- safe
  	hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  	  return hasOwnProperty(toObject(it), key);
  	};
  	return hasOwnProperty_1;
  }

  var uid;
  var hasRequiredUid;

  function requireUid () {
  	if (hasRequiredUid) return uid;
  	hasRequiredUid = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var id = 0;
  	var postfix = Math.random();
  	var toString = uncurryThis(1.0.toString);

  	uid = function (key) {
  	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  	};
  	return uid;
  }

  var wellKnownSymbol;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  	hasRequiredWellKnownSymbol = 1;
  	var globalThis = requireGlobalThis();
  	var shared = requireShared();
  	var hasOwn = requireHasOwnProperty();
  	var uid = requireUid();
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var Symbol = globalThis.Symbol;
  	var WellKnownSymbolsStore = shared('wks');
  	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

  	wellKnownSymbol = function (name) {
  	  if (!hasOwn(WellKnownSymbolsStore, name)) {
  	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
  	      ? Symbol[name]
  	      : createWellKnownSymbol('Symbol.' + name);
  	  } return WellKnownSymbolsStore[name];
  	};
  	return wellKnownSymbol;
  }

  var toPrimitive;
  var hasRequiredToPrimitive;

  function requireToPrimitive () {
  	if (hasRequiredToPrimitive) return toPrimitive;
  	hasRequiredToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isObject = requireIsObject();
  	var isSymbol = requireIsSymbol();
  	var getMethod = requireGetMethod();
  	var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var $TypeError = TypeError;
  	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  	// `ToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-toprimitive
  	toPrimitive = function (input, pref) {
  	  if (!isObject(input) || isSymbol(input)) return input;
  	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  	  var result;
  	  if (exoticToPrim) {
  	    if (pref === undefined) pref = 'default';
  	    result = call(exoticToPrim, input, pref);
  	    if (!isObject(result) || isSymbol(result)) return result;
  	    throw new $TypeError("Can't convert object to primitive value");
  	  }
  	  if (pref === undefined) pref = 'number';
  	  return ordinaryToPrimitive(input, pref);
  	};
  	return toPrimitive;
  }

  var toPropertyKey;
  var hasRequiredToPropertyKey;

  function requireToPropertyKey () {
  	if (hasRequiredToPropertyKey) return toPropertyKey;
  	hasRequiredToPropertyKey = 1;
  	var toPrimitive = requireToPrimitive();
  	var isSymbol = requireIsSymbol();

  	// `ToPropertyKey` abstract operation
  	// https://tc39.es/ecma262/#sec-topropertykey
  	toPropertyKey = function (argument) {
  	  var key = toPrimitive(argument, 'string');
  	  return isSymbol(key) ? key : key + '';
  	};
  	return toPropertyKey;
  }

  var documentCreateElement;
  var hasRequiredDocumentCreateElement;

  function requireDocumentCreateElement () {
  	if (hasRequiredDocumentCreateElement) return documentCreateElement;
  	hasRequiredDocumentCreateElement = 1;
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();

  	var document = globalThis.document;
  	// typeof document.createElement is 'object' in old IE
  	var EXISTS = isObject(document) && isObject(document.createElement);

  	documentCreateElement = function (it) {
  	  return EXISTS ? document.createElement(it) : {};
  	};
  	return documentCreateElement;
  }

  var ie8DomDefine;
  var hasRequiredIe8DomDefine;

  function requireIe8DomDefine () {
  	if (hasRequiredIe8DomDefine) return ie8DomDefine;
  	hasRequiredIe8DomDefine = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();
  	var createElement = requireDocumentCreateElement();

  	// Thanks to IE8 for its funny defineProperty
  	ie8DomDefine = !DESCRIPTORS && !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(createElement('div'), 'a', {
  	    get: function () { return 7; }
  	  }).a !== 7;
  	});
  	return ie8DomDefine;
  }

  var hasRequiredObjectGetOwnPropertyDescriptor;

  function requireObjectGetOwnPropertyDescriptor () {
  	if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  	hasRequiredObjectGetOwnPropertyDescriptor = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var call = requireFunctionCall();
  	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var toIndexedObject = requireToIndexedObject();
  	var toPropertyKey = requireToPropertyKey();
  	var hasOwn = requireHasOwnProperty();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();

  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// `Object.getOwnPropertyDescriptor` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  	objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  	  O = toIndexedObject(O);
  	  P = toPropertyKey(P);
  	  if (IE8_DOM_DEFINE) try {
  	    return $getOwnPropertyDescriptor(O, P);
  	  } catch (error) { /* empty */ }
  	  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  	};
  	return objectGetOwnPropertyDescriptor;
  }

  var objectDefineProperty = {};

  var v8PrototypeDefineBug;
  var hasRequiredV8PrototypeDefineBug;

  function requireV8PrototypeDefineBug () {
  	if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  	hasRequiredV8PrototypeDefineBug = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();

  	// V8 ~ Chrome 36-
  	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
  	v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
  	    value: 42,
  	    writable: false
  	  }).prototype !== 42;
  	});
  	return v8PrototypeDefineBug;
  }

  var anObject;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject;
  	hasRequiredAnObject = 1;
  	var isObject = requireIsObject();

  	var $String = String;
  	var $TypeError = TypeError;

  	// `Assert: Type(argument) is Object`
  	anObject = function (argument) {
  	  if (isObject(argument)) return argument;
  	  throw new $TypeError($String(argument) + ' is not an object');
  	};
  	return anObject;
  }

  var hasRequiredObjectDefineProperty;

  function requireObjectDefineProperty () {
  	if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  	hasRequiredObjectDefineProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var anObject = requireAnObject();
  	var toPropertyKey = requireToPropertyKey();

  	var $TypeError = TypeError;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var $defineProperty = Object.defineProperty;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var ENUMERABLE = 'enumerable';
  	var CONFIGURABLE = 'configurable';
  	var WRITABLE = 'writable';

  	// `Object.defineProperty` method
  	// https://tc39.es/ecma262/#sec-object.defineproperty
  	objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
  	    var current = $getOwnPropertyDescriptor(O, P);
  	    if (current && current[WRITABLE]) {
  	      O[P] = Attributes.value;
  	      Attributes = {
  	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
  	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
  	        writable: false
  	      };
  	    }
  	  } return $defineProperty(O, P, Attributes);
  	} : $defineProperty : function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (IE8_DOM_DEFINE) try {
  	    return $defineProperty(O, P, Attributes);
  	  } catch (error) { /* empty */ }
  	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  	  if ('value' in Attributes) O[P] = Attributes.value;
  	  return O;
  	};
  	return objectDefineProperty;
  }

  var createNonEnumerableProperty;
  var hasRequiredCreateNonEnumerableProperty;

  function requireCreateNonEnumerableProperty () {
  	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  	hasRequiredCreateNonEnumerableProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = requireObjectDefineProperty();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
  	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  	} : function (object, key, value) {
  	  object[key] = value;
  	  return object;
  	};
  	return createNonEnumerableProperty;
  }

  var makeBuiltIn = {exports: {}};

  var functionName;
  var hasRequiredFunctionName;

  function requireFunctionName () {
  	if (hasRequiredFunctionName) return functionName;
  	hasRequiredFunctionName = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var hasOwn = requireHasOwnProperty();

  	var FunctionPrototype = Function.prototype;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

  	var EXISTS = hasOwn(FunctionPrototype, 'name');
  	// additional protection from minified / mangled / dropped function names
  	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  	var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

  	functionName = {
  	  EXISTS: EXISTS,
  	  PROPER: PROPER,
  	  CONFIGURABLE: CONFIGURABLE
  	};
  	return functionName;
  }

  var inspectSource;
  var hasRequiredInspectSource;

  function requireInspectSource () {
  	if (hasRequiredInspectSource) return inspectSource;
  	hasRequiredInspectSource = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var isCallable = requireIsCallable();
  	var store = requireSharedStore();

  	var functionToString = uncurryThis(Function.toString);

  	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  	if (!isCallable(store.inspectSource)) {
  	  store.inspectSource = function (it) {
  	    return functionToString(it);
  	  };
  	}

  	inspectSource = store.inspectSource;
  	return inspectSource;
  }

  var weakMapBasicDetection;
  var hasRequiredWeakMapBasicDetection;

  function requireWeakMapBasicDetection () {
  	if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  	hasRequiredWeakMapBasicDetection = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var WeakMap = globalThis.WeakMap;

  	weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  	return weakMapBasicDetection;
  }

  var sharedKey;
  var hasRequiredSharedKey;

  function requireSharedKey () {
  	if (hasRequiredSharedKey) return sharedKey;
  	hasRequiredSharedKey = 1;
  	var shared = requireShared();
  	var uid = requireUid();

  	var keys = shared('keys');

  	sharedKey = function (key) {
  	  return keys[key] || (keys[key] = uid(key));
  	};
  	return sharedKey;
  }

  var hiddenKeys;
  var hasRequiredHiddenKeys;

  function requireHiddenKeys () {
  	if (hasRequiredHiddenKeys) return hiddenKeys;
  	hasRequiredHiddenKeys = 1;
  	hiddenKeys = {};
  	return hiddenKeys;
  }

  var internalState;
  var hasRequiredInternalState;

  function requireInternalState () {
  	if (hasRequiredInternalState) return internalState;
  	hasRequiredInternalState = 1;
  	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var hasOwn = requireHasOwnProperty();
  	var shared = requireSharedStore();
  	var sharedKey = requireSharedKey();
  	var hiddenKeys = requireHiddenKeys();

  	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  	var TypeError = globalThis.TypeError;
  	var WeakMap = globalThis.WeakMap;
  	var set, get, has;

  	var enforce = function (it) {
  	  return has(it) ? get(it) : set(it, {});
  	};

  	var getterFor = function (TYPE) {
  	  return function (it) {
  	    var state;
  	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
  	      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
  	    } return state;
  	  };
  	};

  	if (NATIVE_WEAK_MAP || shared.state) {
  	  var store = shared.state || (shared.state = new WeakMap());
  	  /* eslint-disable no-self-assign -- prototype methods protection */
  	  store.get = store.get;
  	  store.has = store.has;
  	  store.set = store.set;
  	  /* eslint-enable no-self-assign -- prototype methods protection */
  	  set = function (it, metadata) {
  	    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    store.set(it, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return store.get(it) || {};
  	  };
  	  has = function (it) {
  	    return store.has(it);
  	  };
  	} else {
  	  var STATE = sharedKey('state');
  	  hiddenKeys[STATE] = true;
  	  set = function (it, metadata) {
  	    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    createNonEnumerableProperty(it, STATE, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return hasOwn(it, STATE) ? it[STATE] : {};
  	  };
  	  has = function (it) {
  	    return hasOwn(it, STATE);
  	  };
  	}

  	internalState = {
  	  set: set,
  	  get: get,
  	  has: has,
  	  enforce: enforce,
  	  getterFor: getterFor
  	};
  	return internalState;
  }

  var hasRequiredMakeBuiltIn;

  function requireMakeBuiltIn () {
  	if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  	hasRequiredMakeBuiltIn = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var DESCRIPTORS = requireDescriptors();
  	var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  	var inspectSource = requireInspectSource();
  	var InternalStateModule = requireInternalState();

  	var enforceInternalState = InternalStateModule.enforce;
  	var getInternalState = InternalStateModule.get;
  	var $String = String;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;
  	var stringSlice = uncurryThis(''.slice);
  	var replace = uncurryThis(''.replace);
  	var join = uncurryThis([].join);

  	var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  	  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  	});

  	var TEMPLATE = String(String).split('String');

  	var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
  	  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
  	    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  	  }
  	  if (options && options.getter) name = 'get ' + name;
  	  if (options && options.setter) name = 'set ' + name;
  	  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
  	    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
  	    else value.name = name;
  	  }
  	  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
  	    defineProperty(value, 'length', { value: options.arity });
  	  }
  	  try {
  	    if (options && hasOwn(options, 'constructor') && options.constructor) {
  	      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
  	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
  	    } else if (value.prototype) value.prototype = undefined;
  	  } catch (error) { /* empty */ }
  	  var state = enforceInternalState(value);
  	  if (!hasOwn(state, 'source')) {
  	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  	  } return value;
  	};

  	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  	// eslint-disable-next-line no-extend-native -- required
  	Function.prototype.toString = makeBuiltIn$1(function toString() {
  	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
  	}, 'toString');
  	return makeBuiltIn.exports;
  }

  var defineBuiltIn;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  	hasRequiredDefineBuiltIn = 1;
  	var isCallable = requireIsCallable();
  	var definePropertyModule = requireObjectDefineProperty();
  	var makeBuiltIn = requireMakeBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	defineBuiltIn = function (O, key, value, options) {
  	  if (!options) options = {};
  	  var simple = options.enumerable;
  	  var name = options.name !== undefined ? options.name : key;
  	  if (isCallable(value)) makeBuiltIn(value, name, options);
  	  if (options.global) {
  	    if (simple) O[key] = value;
  	    else defineGlobalProperty(key, value);
  	  } else {
  	    try {
  	      if (!options.unsafe) delete O[key];
  	      else if (O[key]) simple = true;
  	    } catch (error) { /* empty */ }
  	    if (simple) O[key] = value;
  	    else definePropertyModule.f(O, key, {
  	      value: value,
  	      enumerable: false,
  	      configurable: !options.nonConfigurable,
  	      writable: !options.nonWritable
  	    });
  	  } return O;
  	};
  	return defineBuiltIn;
  }

  var objectGetOwnPropertyNames = {};

  var mathTrunc;
  var hasRequiredMathTrunc;

  function requireMathTrunc () {
  	if (hasRequiredMathTrunc) return mathTrunc;
  	hasRequiredMathTrunc = 1;
  	var ceil = Math.ceil;
  	var floor = Math.floor;

  	// `Math.trunc` method
  	// https://tc39.es/ecma262/#sec-math.trunc
  	// eslint-disable-next-line es/no-math-trunc -- safe
  	mathTrunc = Math.trunc || function trunc(x) {
  	  var n = +x;
  	  return (n > 0 ? floor : ceil)(n);
  	};
  	return mathTrunc;
  }

  var toIntegerOrInfinity;
  var hasRequiredToIntegerOrInfinity;

  function requireToIntegerOrInfinity () {
  	if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  	hasRequiredToIntegerOrInfinity = 1;
  	var trunc = requireMathTrunc();

  	// `ToIntegerOrInfinity` abstract operation
  	// https://tc39.es/ecma262/#sec-tointegerorinfinity
  	toIntegerOrInfinity = function (argument) {
  	  var number = +argument;
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return number !== number || number === 0 ? 0 : trunc(number);
  	};
  	return toIntegerOrInfinity;
  }

  var toAbsoluteIndex;
  var hasRequiredToAbsoluteIndex;

  function requireToAbsoluteIndex () {
  	if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  	hasRequiredToAbsoluteIndex = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var max = Math.max;
  	var min = Math.min;

  	// Helper for a popular repeating case of the spec:
  	// Let integer be ? ToInteger(index).
  	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  	toAbsoluteIndex = function (index, length) {
  	  var integer = toIntegerOrInfinity(index);
  	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
  	};
  	return toAbsoluteIndex;
  }

  var toLength;
  var hasRequiredToLength;

  function requireToLength () {
  	if (hasRequiredToLength) return toLength;
  	hasRequiredToLength = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var min = Math.min;

  	// `ToLength` abstract operation
  	// https://tc39.es/ecma262/#sec-tolength
  	toLength = function (argument) {
  	  var len = toIntegerOrInfinity(argument);
  	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  	};
  	return toLength;
  }

  var lengthOfArrayLike;
  var hasRequiredLengthOfArrayLike;

  function requireLengthOfArrayLike () {
  	if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  	hasRequiredLengthOfArrayLike = 1;
  	var toLength = requireToLength();

  	// `LengthOfArrayLike` abstract operation
  	// https://tc39.es/ecma262/#sec-lengthofarraylike
  	lengthOfArrayLike = function (obj) {
  	  return toLength(obj.length);
  	};
  	return lengthOfArrayLike;
  }

  var arrayIncludes;
  var hasRequiredArrayIncludes;

  function requireArrayIncludes () {
  	if (hasRequiredArrayIncludes) return arrayIncludes;
  	hasRequiredArrayIncludes = 1;
  	var toIndexedObject = requireToIndexedObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();

  	// `Array.prototype.{ indexOf, includes }` methods implementation
  	var createMethod = function (IS_INCLUDES) {
  	  return function ($this, el, fromIndex) {
  	    var O = toIndexedObject($this);
  	    var length = lengthOfArrayLike(O);
  	    if (length === 0) return !IS_INCLUDES && -1;
  	    var index = toAbsoluteIndex(fromIndex, length);
  	    var value;
  	    // Array#includes uses SameValueZero equality algorithm
  	    // eslint-disable-next-line no-self-compare -- NaN check
  	    if (IS_INCLUDES && el !== el) while (length > index) {
  	      value = O[index++];
  	      // eslint-disable-next-line no-self-compare -- NaN check
  	      if (value !== value) return true;
  	    // Array#indexOf ignores holes, Array#includes - not
  	    } else for (;length > index; index++) {
  	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
  	    } return !IS_INCLUDES && -1;
  	  };
  	};

  	arrayIncludes = {
  	  // `Array.prototype.includes` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.includes
  	  includes: createMethod(true),
  	  // `Array.prototype.indexOf` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  	  indexOf: createMethod(false)
  	};
  	return arrayIncludes;
  }

  var objectKeysInternal;
  var hasRequiredObjectKeysInternal;

  function requireObjectKeysInternal () {
  	if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  	hasRequiredObjectKeysInternal = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var hasOwn = requireHasOwnProperty();
  	var toIndexedObject = requireToIndexedObject();
  	var indexOf = requireArrayIncludes().indexOf;
  	var hiddenKeys = requireHiddenKeys();

  	var push = uncurryThis([].push);

  	objectKeysInternal = function (object, names) {
  	  var O = toIndexedObject(object);
  	  var i = 0;
  	  var result = [];
  	  var key;
  	  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  	  // Don't enum bug & hidden keys
  	  while (names.length > i) if (hasOwn(O, key = names[i++])) {
  	    ~indexOf(result, key) || push(result, key);
  	  }
  	  return result;
  	};
  	return objectKeysInternal;
  }

  var enumBugKeys;
  var hasRequiredEnumBugKeys;

  function requireEnumBugKeys () {
  	if (hasRequiredEnumBugKeys) return enumBugKeys;
  	hasRequiredEnumBugKeys = 1;
  	// IE8- don't enum bug keys
  	enumBugKeys = [
  	  'constructor',
  	  'hasOwnProperty',
  	  'isPrototypeOf',
  	  'propertyIsEnumerable',
  	  'toLocaleString',
  	  'toString',
  	  'valueOf'
  	];
  	return enumBugKeys;
  }

  var hasRequiredObjectGetOwnPropertyNames;

  function requireObjectGetOwnPropertyNames () {
  	if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  	hasRequiredObjectGetOwnPropertyNames = 1;
  	var internalObjectKeys = requireObjectKeysInternal();
  	var enumBugKeys = requireEnumBugKeys();

  	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  	// `Object.getOwnPropertyNames` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertynames
  	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
  	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  	  return internalObjectKeys(O, hiddenKeys);
  	};
  	return objectGetOwnPropertyNames;
  }

  var objectGetOwnPropertySymbols = {};

  var hasRequiredObjectGetOwnPropertySymbols;

  function requireObjectGetOwnPropertySymbols () {
  	if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  	hasRequiredObjectGetOwnPropertySymbols = 1;
  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  	return objectGetOwnPropertySymbols;
  }

  var ownKeys;
  var hasRequiredOwnKeys;

  function requireOwnKeys () {
  	if (hasRequiredOwnKeys) return ownKeys;
  	hasRequiredOwnKeys = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  	var anObject = requireAnObject();

  	var concat = uncurryThis([].concat);

  	// all object keys, includes non-enumerable and symbols
  	ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  	  var keys = getOwnPropertyNamesModule.f(anObject(it));
  	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  	};
  	return ownKeys;
  }

  var copyConstructorProperties;
  var hasRequiredCopyConstructorProperties;

  function requireCopyConstructorProperties () {
  	if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  	hasRequiredCopyConstructorProperties = 1;
  	var hasOwn = requireHasOwnProperty();
  	var ownKeys = requireOwnKeys();
  	var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  	var definePropertyModule = requireObjectDefineProperty();

  	copyConstructorProperties = function (target, source, exceptions) {
  	  var keys = ownKeys(source);
  	  var defineProperty = definePropertyModule.f;
  	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  	  for (var i = 0; i < keys.length; i++) {
  	    var key = keys[i];
  	    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
  	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  	    }
  	  }
  	};
  	return copyConstructorProperties;
  }

  var isForced_1;
  var hasRequiredIsForced;

  function requireIsForced () {
  	if (hasRequiredIsForced) return isForced_1;
  	hasRequiredIsForced = 1;
  	var fails = requireFails();
  	var isCallable = requireIsCallable();

  	var replacement = /#|\.prototype\./;

  	var isForced = function (feature, detection) {
  	  var value = data[normalize(feature)];
  	  return value === POLYFILL ? true
  	    : value === NATIVE ? false
  	    : isCallable(detection) ? fails(detection)
  	    : !!detection;
  	};

  	var normalize = isForced.normalize = function (string) {
  	  return String(string).replace(replacement, '.').toLowerCase();
  	};

  	var data = isForced.data = {};
  	var NATIVE = isForced.NATIVE = 'N';
  	var POLYFILL = isForced.POLYFILL = 'P';

  	isForced_1 = isForced;
  	return isForced_1;
  }

  var _export;
  var hasRequired_export;

  function require_export () {
  	if (hasRequired_export) return _export;
  	hasRequired_export = 1;
  	var globalThis = requireGlobalThis();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();
  	var copyConstructorProperties = requireCopyConstructorProperties();
  	var isForced = requireIsForced();

  	/*
  	  options.target         - name of the target object
  	  options.global         - target is the global object
  	  options.stat           - export as static methods of target
  	  options.proto          - export as prototype methods of target
  	  options.real           - real prototype method for the `pure` version
  	  options.forced         - export even if the native feature is available
  	  options.bind           - bind methods to the target, required for the `pure` version
  	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  	  options.sham           - add a flag to not completely full polyfills
  	  options.enumerable     - export as enumerable property
  	  options.dontCallGetSet - prevent calling a getter on target
  	  options.name           - the .name of the function if it does not match the key
  	*/
  	_export = function (options, source) {
  	  var TARGET = options.target;
  	  var GLOBAL = options.global;
  	  var STATIC = options.stat;
  	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  	  if (GLOBAL) {
  	    target = globalThis;
  	  } else if (STATIC) {
  	    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  	  } else {
  	    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  	  }
  	  if (target) for (key in source) {
  	    sourceProperty = source[key];
  	    if (options.dontCallGetSet) {
  	      descriptor = getOwnPropertyDescriptor(target, key);
  	      targetProperty = descriptor && descriptor.value;
  	    } else targetProperty = target[key];
  	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
  	    // contained in target
  	    if (!FORCED && targetProperty !== undefined) {
  	      if (typeof sourceProperty == typeof targetProperty) continue;
  	      copyConstructorProperties(sourceProperty, targetProperty);
  	    }
  	    // add a flag to not completely full polyfills
  	    if (options.sham || (targetProperty && targetProperty.sham)) {
  	      createNonEnumerableProperty(sourceProperty, 'sham', true);
  	    }
  	    defineBuiltIn(target, key, sourceProperty, options);
  	  }
  	};
  	return _export;
  }

  var mapHelpers;
  var hasRequiredMapHelpers;

  function requireMapHelpers () {
  	if (hasRequiredMapHelpers) return mapHelpers;
  	hasRequiredMapHelpers = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	// eslint-disable-next-line es/no-map -- safe
  	var MapPrototype = Map.prototype;

  	mapHelpers = {
  	  // eslint-disable-next-line es/no-map -- safe
  	  Map: Map,
  	  set: uncurryThis(MapPrototype.set),
  	  get: uncurryThis(MapPrototype.get),
  	  has: uncurryThis(MapPrototype.has),
  	  remove: uncurryThis(MapPrototype['delete']),
  	  proto: MapPrototype
  	};
  	return mapHelpers;
  }

  var aMap;
  var hasRequiredAMap;

  function requireAMap () {
  	if (hasRequiredAMap) return aMap;
  	hasRequiredAMap = 1;
  	var has = requireMapHelpers().has;

  	// Perform ? RequireInternalSlot(M, [[MapData]])
  	aMap = function (it) {
  	  has(it);
  	  return it;
  	};
  	return aMap;
  }

  var hasRequiredEsnext_map_deleteAll;

  function requireEsnext_map_deleteAll () {
  	if (hasRequiredEsnext_map_deleteAll) return esnext_map_deleteAll;
  	hasRequiredEsnext_map_deleteAll = 1;
  	var $ = require_export();
  	var aMap = requireAMap();
  	var remove = requireMapHelpers().remove;

  	// `Map.prototype.deleteAll` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  deleteAll: function deleteAll(/* ...elements */) {
  	    var collection = aMap(this);
  	    var allDeleted = true;
  	    var wasDeleted;
  	    for (var k = 0, len = arguments.length; k < len; k++) {
  	      wasDeleted = remove(collection, arguments[k]);
  	      allDeleted = allDeleted && wasDeleted;
  	    } return !!allDeleted;
  	  }
  	});
  	return esnext_map_deleteAll;
  }

  requireEsnext_map_deleteAll();

  var esnext_map_every = {};

  var functionUncurryThisClause;
  var hasRequiredFunctionUncurryThisClause;

  function requireFunctionUncurryThisClause () {
  	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  	hasRequiredFunctionUncurryThisClause = 1;
  	var classofRaw = requireClassofRaw();
  	var uncurryThis = requireFunctionUncurryThis();

  	functionUncurryThisClause = function (fn) {
  	  // Nashorn bug:
  	  //   https://github.com/zloirock/core-js/issues/1128
  	  //   https://github.com/zloirock/core-js/issues/1130
  	  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
  	};
  	return functionUncurryThisClause;
  }

  var functionBindContext;
  var hasRequiredFunctionBindContext;

  function requireFunctionBindContext () {
  	if (hasRequiredFunctionBindContext) return functionBindContext;
  	hasRequiredFunctionBindContext = 1;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var aCallable = requireACallable();
  	var NATIVE_BIND = requireFunctionBindNative();

  	var bind = uncurryThis(uncurryThis.bind);

  	// optional / simple context binding
  	functionBindContext = function (fn, that) {
  	  aCallable(fn);
  	  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
  	    return fn.apply(that, arguments);
  	  };
  	};
  	return functionBindContext;
  }

  var iterateSimple;
  var hasRequiredIterateSimple;

  function requireIterateSimple () {
  	if (hasRequiredIterateSimple) return iterateSimple;
  	hasRequiredIterateSimple = 1;
  	var call = requireFunctionCall();

  	iterateSimple = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  	  var next = record.next;
  	  var step, result;
  	  while (!(step = call(next, iterator)).done) {
  	    result = fn(step.value);
  	    if (result !== undefined) return result;
  	  }
  	};
  	return iterateSimple;
  }

  var mapIterate;
  var hasRequiredMapIterate;

  function requireMapIterate () {
  	if (hasRequiredMapIterate) return mapIterate;
  	hasRequiredMapIterate = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var iterateSimple = requireIterateSimple();
  	var MapHelpers = requireMapHelpers();

  	var Map = MapHelpers.Map;
  	var MapPrototype = MapHelpers.proto;
  	var forEach = uncurryThis(MapPrototype.forEach);
  	var entries = uncurryThis(MapPrototype.entries);
  	var next = entries(new Map()).next;

  	mapIterate = function (map, fn, interruptible) {
  	  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
  	    return fn(entry[1], entry[0]);
  	  }) : forEach(map, fn);
  	};
  	return mapIterate;
  }

  var hasRequiredEsnext_map_every;

  function requireEsnext_map_every () {
  	if (hasRequiredEsnext_map_every) return esnext_map_every;
  	hasRequiredEsnext_map_every = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.every` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  every: function every(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return iterate(map, function (value, key) {
  	      if (!boundFunction(value, key, map)) return false;
  	    }, true) !== false;
  	  }
  	});
  	return esnext_map_every;
  }

  requireEsnext_map_every();

  var esnext_map_filter = {};

  var hasRequiredEsnext_map_filter;

  function requireEsnext_map_filter () {
  	if (hasRequiredEsnext_map_filter) return esnext_map_filter;
  	hasRequiredEsnext_map_filter = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var MapHelpers = requireMapHelpers();
  	var iterate = requireMapIterate();

  	var Map = MapHelpers.Map;
  	var set = MapHelpers.set;

  	// `Map.prototype.filter` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  filter: function filter(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var newMap = new Map();
  	    iterate(map, function (value, key) {
  	      if (boundFunction(value, key, map)) set(newMap, key, value);
  	    });
  	    return newMap;
  	  }
  	});
  	return esnext_map_filter;
  }

  requireEsnext_map_filter();

  var esnext_map_find = {};

  var hasRequiredEsnext_map_find;

  function requireEsnext_map_find () {
  	if (hasRequiredEsnext_map_find) return esnext_map_find;
  	hasRequiredEsnext_map_find = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.find` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  find: function find(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var result = iterate(map, function (value, key) {
  	      if (boundFunction(value, key, map)) return { value: value };
  	    }, true);
  	    return result && result.value;
  	  }
  	});
  	return esnext_map_find;
  }

  requireEsnext_map_find();

  var esnext_map_findKey = {};

  var hasRequiredEsnext_map_findKey;

  function requireEsnext_map_findKey () {
  	if (hasRequiredEsnext_map_findKey) return esnext_map_findKey;
  	hasRequiredEsnext_map_findKey = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.findKey` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  findKey: function findKey(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var result = iterate(map, function (value, key) {
  	      if (boundFunction(value, key, map)) return { key: key };
  	    }, true);
  	    return result && result.key;
  	  }
  	});
  	return esnext_map_findKey;
  }

  requireEsnext_map_findKey();

  var esnext_map_includes = {};

  var sameValueZero;
  var hasRequiredSameValueZero;

  function requireSameValueZero () {
  	if (hasRequiredSameValueZero) return sameValueZero;
  	hasRequiredSameValueZero = 1;
  	// `SameValueZero` abstract operation
  	// https://tc39.es/ecma262/#sec-samevaluezero
  	sameValueZero = function (x, y) {
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return x === y || x !== x && y !== y;
  	};
  	return sameValueZero;
  }

  var hasRequiredEsnext_map_includes;

  function requireEsnext_map_includes () {
  	if (hasRequiredEsnext_map_includes) return esnext_map_includes;
  	hasRequiredEsnext_map_includes = 1;
  	var $ = require_export();
  	var sameValueZero = requireSameValueZero();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.includes` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  includes: function includes(searchElement) {
  	    return iterate(aMap(this), function (value) {
  	      if (sameValueZero(value, searchElement)) return true;
  	    }, true) === true;
  	  }
  	});
  	return esnext_map_includes;
  }

  requireEsnext_map_includes();

  var esnext_map_keyOf = {};

  var hasRequiredEsnext_map_keyOf;

  function requireEsnext_map_keyOf () {
  	if (hasRequiredEsnext_map_keyOf) return esnext_map_keyOf;
  	hasRequiredEsnext_map_keyOf = 1;
  	var $ = require_export();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.keyOf` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  keyOf: function keyOf(searchElement) {
  	    var result = iterate(aMap(this), function (value, key) {
  	      if (value === searchElement) return { key: key };
  	    }, true);
  	    return result && result.key;
  	  }
  	});
  	return esnext_map_keyOf;
  }

  requireEsnext_map_keyOf();

  var esnext_map_mapKeys = {};

  var hasRequiredEsnext_map_mapKeys;

  function requireEsnext_map_mapKeys () {
  	if (hasRequiredEsnext_map_mapKeys) return esnext_map_mapKeys;
  	hasRequiredEsnext_map_mapKeys = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var MapHelpers = requireMapHelpers();
  	var iterate = requireMapIterate();

  	var Map = MapHelpers.Map;
  	var set = MapHelpers.set;

  	// `Map.prototype.mapKeys` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var newMap = new Map();
  	    iterate(map, function (value, key) {
  	      set(newMap, boundFunction(value, key, map), value);
  	    });
  	    return newMap;
  	  }
  	});
  	return esnext_map_mapKeys;
  }

  requireEsnext_map_mapKeys();

  var esnext_map_mapValues = {};

  var hasRequiredEsnext_map_mapValues;

  function requireEsnext_map_mapValues () {
  	if (hasRequiredEsnext_map_mapValues) return esnext_map_mapValues;
  	hasRequiredEsnext_map_mapValues = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var MapHelpers = requireMapHelpers();
  	var iterate = requireMapIterate();

  	var Map = MapHelpers.Map;
  	var set = MapHelpers.set;

  	// `Map.prototype.mapValues` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  mapValues: function mapValues(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var newMap = new Map();
  	    iterate(map, function (value, key) {
  	      set(newMap, key, boundFunction(value, key, map));
  	    });
  	    return newMap;
  	  }
  	});
  	return esnext_map_mapValues;
  }

  requireEsnext_map_mapValues();

  var esnext_map_merge = {};

  var iterators;
  var hasRequiredIterators;

  function requireIterators () {
  	if (hasRequiredIterators) return iterators;
  	hasRequiredIterators = 1;
  	iterators = {};
  	return iterators;
  }

  var isArrayIteratorMethod;
  var hasRequiredIsArrayIteratorMethod;

  function requireIsArrayIteratorMethod () {
  	if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
  	hasRequiredIsArrayIteratorMethod = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayPrototype = Array.prototype;

  	// check on default Array iterator
  	isArrayIteratorMethod = function (it) {
  	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  	};
  	return isArrayIteratorMethod;
  }

  var toStringTagSupport;
  var hasRequiredToStringTagSupport;

  function requireToStringTagSupport () {
  	if (hasRequiredToStringTagSupport) return toStringTagSupport;
  	hasRequiredToStringTagSupport = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var test = {};

  	test[TO_STRING_TAG] = 'z';

  	toStringTagSupport = String(test) === '[object z]';
  	return toStringTagSupport;
  }

  var classof;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof;
  	hasRequiredClassof = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = requireIsCallable();
  	var classofRaw = requireClassofRaw();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var $Object = Object;

  	// ES3 wrong here
  	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

  	// fallback for IE11 Script Access Denied error
  	var tryGet = function (it, key) {
  	  try {
  	    return it[key];
  	  } catch (error) { /* empty */ }
  	};

  	// getting tag from ES6+ `Object.prototype.toString`
  	classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  	  var O, tag, result;
  	  return it === undefined ? 'Undefined' : it === null ? 'Null'
  	    // @@toStringTag case
  	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  	    // builtinTag case
  	    : CORRECT_ARGUMENTS ? classofRaw(O)
  	    // ES3 arguments fallback
  	    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  	};
  	return classof;
  }

  var getIteratorMethod;
  var hasRequiredGetIteratorMethod;

  function requireGetIteratorMethod () {
  	if (hasRequiredGetIteratorMethod) return getIteratorMethod;
  	hasRequiredGetIteratorMethod = 1;
  	var classof = requireClassof();
  	var getMethod = requireGetMethod();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var Iterators = requireIterators();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');

  	getIteratorMethod = function (it) {
  	  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
  	    || getMethod(it, '@@iterator')
  	    || Iterators[classof(it)];
  	};
  	return getIteratorMethod;
  }

  var getIterator;
  var hasRequiredGetIterator;

  function requireGetIterator () {
  	if (hasRequiredGetIterator) return getIterator;
  	hasRequiredGetIterator = 1;
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var getIteratorMethod = requireGetIteratorMethod();

  	var $TypeError = TypeError;

  	getIterator = function (argument, usingIterator) {
  	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  	  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  	  throw new $TypeError(tryToString(argument) + ' is not iterable');
  	};
  	return getIterator;
  }

  var iteratorClose;
  var hasRequiredIteratorClose;

  function requireIteratorClose () {
  	if (hasRequiredIteratorClose) return iteratorClose;
  	hasRequiredIteratorClose = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var getMethod = requireGetMethod();

  	iteratorClose = function (iterator, kind, value) {
  	  var innerResult, innerError;
  	  anObject(iterator);
  	  try {
  	    innerResult = getMethod(iterator, 'return');
  	    if (!innerResult) {
  	      if (kind === 'throw') throw value;
  	      return value;
  	    }
  	    innerResult = call(innerResult, iterator);
  	  } catch (error) {
  	    innerError = true;
  	    innerResult = error;
  	  }
  	  if (kind === 'throw') throw value;
  	  if (innerError) throw innerResult;
  	  anObject(innerResult);
  	  return value;
  	};
  	return iteratorClose;
  }

  var iterate;
  var hasRequiredIterate;

  function requireIterate () {
  	if (hasRequiredIterate) return iterate;
  	hasRequiredIterate = 1;
  	var bind = requireFunctionBindContext();
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var isArrayIteratorMethod = requireIsArrayIteratorMethod();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var getIterator = requireGetIterator();
  	var getIteratorMethod = requireGetIteratorMethod();
  	var iteratorClose = requireIteratorClose();

  	var $TypeError = TypeError;

  	var Result = function (stopped, result) {
  	  this.stopped = stopped;
  	  this.result = result;
  	};

  	var ResultPrototype = Result.prototype;

  	iterate = function (iterable, unboundFunction, options) {
  	  var that = options && options.that;
  	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  	  var IS_RECORD = !!(options && options.IS_RECORD);
  	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  	  var INTERRUPTED = !!(options && options.INTERRUPTED);
  	  var fn = bind(unboundFunction, that);
  	  var iterator, iterFn, index, length, result, next, step;

  	  var stop = function (condition) {
  	    if (iterator) iteratorClose(iterator, 'normal', condition);
  	    return new Result(true, condition);
  	  };

  	  var callFn = function (value) {
  	    if (AS_ENTRIES) {
  	      anObject(value);
  	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
  	    } return INTERRUPTED ? fn(value, stop) : fn(value);
  	  };

  	  if (IS_RECORD) {
  	    iterator = iterable.iterator;
  	  } else if (IS_ITERATOR) {
  	    iterator = iterable;
  	  } else {
  	    iterFn = getIteratorMethod(iterable);
  	    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
  	    // optimisation for array iterators
  	    if (isArrayIteratorMethod(iterFn)) {
  	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
  	        result = callFn(iterable[index]);
  	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
  	      } return new Result(false);
  	    }
  	    iterator = getIterator(iterable, iterFn);
  	  }

  	  next = IS_RECORD ? iterable.next : iterator.next;
  	  while (!(step = call(next, iterator)).done) {
  	    try {
  	      result = callFn(step.value);
  	    } catch (error) {
  	      iteratorClose(iterator, 'throw', error);
  	    }
  	    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  	  } return new Result(false);
  	};
  	return iterate;
  }

  var hasRequiredEsnext_map_merge;

  function requireEsnext_map_merge () {
  	if (hasRequiredEsnext_map_merge) return esnext_map_merge;
  	hasRequiredEsnext_map_merge = 1;
  	var $ = require_export();
  	var aMap = requireAMap();
  	var iterate = requireIterate();
  	var set = requireMapHelpers().set;

  	// `Map.prototype.merge` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  merge: function merge(iterable /* ...iterables */) {
  	    var map = aMap(this);
  	    var argumentsLength = arguments.length;
  	    var i = 0;
  	    while (i < argumentsLength) {
  	      iterate(arguments[i++], function (key, value) {
  	        set(map, key, value);
  	      }, { AS_ENTRIES: true });
  	    }
  	    return map;
  	  }
  	});
  	return esnext_map_merge;
  }

  requireEsnext_map_merge();

  var esnext_map_reduce = {};

  var hasRequiredEsnext_map_reduce;

  function requireEsnext_map_reduce () {
  	if (hasRequiredEsnext_map_reduce) return esnext_map_reduce;
  	hasRequiredEsnext_map_reduce = 1;
  	var $ = require_export();
  	var aCallable = requireACallable();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	var $TypeError = TypeError;

  	// `Map.prototype.reduce` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  reduce: function reduce(callbackfn /* , initialValue */) {
  	    var map = aMap(this);
  	    var noInitial = arguments.length < 2;
  	    var accumulator = noInitial ? undefined : arguments[1];
  	    aCallable(callbackfn);
  	    iterate(map, function (value, key) {
  	      if (noInitial) {
  	        noInitial = false;
  	        accumulator = value;
  	      } else {
  	        accumulator = callbackfn(accumulator, value, key, map);
  	      }
  	    });
  	    if (noInitial) throw new $TypeError('Reduce of empty map with no initial value');
  	    return accumulator;
  	  }
  	});
  	return esnext_map_reduce;
  }

  requireEsnext_map_reduce();

  var esnext_map_some = {};

  var hasRequiredEsnext_map_some;

  function requireEsnext_map_some () {
  	if (hasRequiredEsnext_map_some) return esnext_map_some;
  	hasRequiredEsnext_map_some = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aMap = requireAMap();
  	var iterate = requireMapIterate();

  	// `Map.prototype.some` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  some: function some(callbackfn /* , thisArg */) {
  	    var map = aMap(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return iterate(map, function (value, key) {
  	      if (boundFunction(value, key, map)) return true;
  	    }, true) === true;
  	  }
  	});
  	return esnext_map_some;
  }

  requireEsnext_map_some();

  var esnext_map_update = {};

  var hasRequiredEsnext_map_update;

  function requireEsnext_map_update () {
  	if (hasRequiredEsnext_map_update) return esnext_map_update;
  	hasRequiredEsnext_map_update = 1;
  	var $ = require_export();
  	var aCallable = requireACallable();
  	var aMap = requireAMap();
  	var MapHelpers = requireMapHelpers();

  	var $TypeError = TypeError;
  	var get = MapHelpers.get;
  	var has = MapHelpers.has;
  	var set = MapHelpers.set;

  	// `Map.prototype.update` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Map', proto: true, real: true, forced: true }, {
  	  update: function update(key, callback /* , thunk */) {
  	    var map = aMap(this);
  	    var length = arguments.length;
  	    aCallable(callback);
  	    var isPresentInMap = has(map, key);
  	    if (!isPresentInMap && length < 3) {
  	      throw new $TypeError('Updating absent value');
  	    }
  	    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
  	    set(map, key, callback(value, key, map));
  	    return map;
  	  }
  	});
  	return esnext_map_update;
  }

  requireEsnext_map_update();

  var esnext_set_addAll = {};

  var setHelpers;
  var hasRequiredSetHelpers;

  function requireSetHelpers () {
  	if (hasRequiredSetHelpers) return setHelpers;
  	hasRequiredSetHelpers = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	// eslint-disable-next-line es/no-set -- safe
  	var SetPrototype = Set.prototype;

  	setHelpers = {
  	  // eslint-disable-next-line es/no-set -- safe
  	  Set: Set,
  	  add: uncurryThis(SetPrototype.add),
  	  has: uncurryThis(SetPrototype.has),
  	  remove: uncurryThis(SetPrototype['delete']),
  	  proto: SetPrototype
  	};
  	return setHelpers;
  }

  var aSet;
  var hasRequiredASet;

  function requireASet () {
  	if (hasRequiredASet) return aSet;
  	hasRequiredASet = 1;
  	var has = requireSetHelpers().has;

  	// Perform ? RequireInternalSlot(M, [[SetData]])
  	aSet = function (it) {
  	  has(it);
  	  return it;
  	};
  	return aSet;
  }

  var hasRequiredEsnext_set_addAll;

  function requireEsnext_set_addAll () {
  	if (hasRequiredEsnext_set_addAll) return esnext_set_addAll;
  	hasRequiredEsnext_set_addAll = 1;
  	var $ = require_export();
  	var aSet = requireASet();
  	var add = requireSetHelpers().add;

  	// `Set.prototype.addAll` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  addAll: function addAll(/* ...elements */) {
  	    var set = aSet(this);
  	    for (var k = 0, len = arguments.length; k < len; k++) {
  	      add(set, arguments[k]);
  	    } return set;
  	  }
  	});
  	return esnext_set_addAll;
  }

  requireEsnext_set_addAll();

  var esnext_set_deleteAll = {};

  var hasRequiredEsnext_set_deleteAll;

  function requireEsnext_set_deleteAll () {
  	if (hasRequiredEsnext_set_deleteAll) return esnext_set_deleteAll;
  	hasRequiredEsnext_set_deleteAll = 1;
  	var $ = require_export();
  	var aSet = requireASet();
  	var remove = requireSetHelpers().remove;

  	// `Set.prototype.deleteAll` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  deleteAll: function deleteAll(/* ...elements */) {
  	    var collection = aSet(this);
  	    var allDeleted = true;
  	    var wasDeleted;
  	    for (var k = 0, len = arguments.length; k < len; k++) {
  	      wasDeleted = remove(collection, arguments[k]);
  	      allDeleted = allDeleted && wasDeleted;
  	    } return !!allDeleted;
  	  }
  	});
  	return esnext_set_deleteAll;
  }

  requireEsnext_set_deleteAll();

  var esnext_set_difference = {};

  var isIterable;
  var hasRequiredIsIterable;

  function requireIsIterable () {
  	if (hasRequiredIsIterable) return isIterable;
  	hasRequiredIsIterable = 1;
  	var classof = requireClassof();
  	var hasOwn = requireHasOwnProperty();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var $Object = Object;

  	isIterable = function (it) {
  	  if (isNullOrUndefined(it)) return false;
  	  var O = $Object(it);
  	  return O[ITERATOR] !== undefined
  	    || '@@iterator' in O
  	    || hasOwn(Iterators, classof(O));
  	};
  	return isIterable;
  }

  var toSetLike;
  var hasRequiredToSetLike;

  function requireToSetLike () {
  	if (hasRequiredToSetLike) return toSetLike;
  	hasRequiredToSetLike = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var isIterable = requireIsIterable();
  	var isObject = requireIsObject();

  	var Set = getBuiltIn('Set');

  	var isSetLike = function (it) {
  	  return isObject(it)
  	    && typeof it.size == 'number'
  	    && isCallable(it.has)
  	    && isCallable(it.keys);
  	};

  	// fallback old -> new set methods proposal arguments
  	toSetLike = function (it) {
  	  if (isSetLike(it)) return it;
  	  return isIterable(it) ? new Set(it) : it;
  	};
  	return toSetLike;
  }

  var setIterate;
  var hasRequiredSetIterate;

  function requireSetIterate () {
  	if (hasRequiredSetIterate) return setIterate;
  	hasRequiredSetIterate = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var iterateSimple = requireIterateSimple();
  	var SetHelpers = requireSetHelpers();

  	var Set = SetHelpers.Set;
  	var SetPrototype = SetHelpers.proto;
  	var forEach = uncurryThis(SetPrototype.forEach);
  	var keys = uncurryThis(SetPrototype.keys);
  	var next = keys(new Set()).next;

  	setIterate = function (set, fn, interruptible) {
  	  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
  	};
  	return setIterate;
  }

  var setClone;
  var hasRequiredSetClone;

  function requireSetClone () {
  	if (hasRequiredSetClone) return setClone;
  	hasRequiredSetClone = 1;
  	var SetHelpers = requireSetHelpers();
  	var iterate = requireSetIterate();

  	var Set = SetHelpers.Set;
  	var add = SetHelpers.add;

  	setClone = function (set) {
  	  var result = new Set();
  	  iterate(set, function (it) {
  	    add(result, it);
  	  });
  	  return result;
  	};
  	return setClone;
  }

  var functionUncurryThisAccessor;
  var hasRequiredFunctionUncurryThisAccessor;

  function requireFunctionUncurryThisAccessor () {
  	if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  	hasRequiredFunctionUncurryThisAccessor = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var aCallable = requireACallable();

  	functionUncurryThisAccessor = function (object, key, method) {
  	  try {
  	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  	  } catch (error) { /* empty */ }
  	};
  	return functionUncurryThisAccessor;
  }

  var setSize;
  var hasRequiredSetSize;

  function requireSetSize () {
  	if (hasRequiredSetSize) return setSize;
  	hasRequiredSetSize = 1;
  	var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  	var SetHelpers = requireSetHelpers();

  	setSize = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  	  return set.size;
  	};
  	return setSize;
  }

  var getIteratorDirect;
  var hasRequiredGetIteratorDirect;

  function requireGetIteratorDirect () {
  	if (hasRequiredGetIteratorDirect) return getIteratorDirect;
  	hasRequiredGetIteratorDirect = 1;
  	// `GetIteratorDirect(obj)` abstract operation
  	// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
  	getIteratorDirect = function (obj) {
  	  return {
  	    iterator: obj,
  	    next: obj.next,
  	    done: false
  	  };
  	};
  	return getIteratorDirect;
  }

  var getSetRecord;
  var hasRequiredGetSetRecord;

  function requireGetSetRecord () {
  	if (hasRequiredGetSetRecord) return getSetRecord;
  	hasRequiredGetSetRecord = 1;
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var call = requireFunctionCall();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var getIteratorDirect = requireGetIteratorDirect();

  	var INVALID_SIZE = 'Invalid size';
  	var $RangeError = RangeError;
  	var $TypeError = TypeError;
  	var max = Math.max;

  	var SetRecord = function (set, intSize) {
  	  this.set = set;
  	  this.size = max(intSize, 0);
  	  this.has = aCallable(set.has);
  	  this.keys = aCallable(set.keys);
  	};

  	SetRecord.prototype = {
  	  getIterator: function () {
  	    return getIteratorDirect(anObject(call(this.keys, this.set)));
  	  },
  	  includes: function (it) {
  	    return call(this.has, this.set, it);
  	  }
  	};

  	// `GetSetRecord` abstract operation
  	// https://tc39.es/proposal-set-methods/#sec-getsetrecord
  	getSetRecord = function (obj) {
  	  anObject(obj);
  	  var numSize = +obj.size;
  	  // NOTE: If size is undefined, then numSize will be NaN
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  	  var intSize = toIntegerOrInfinity(numSize);
  	  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  	  return new SetRecord(obj, intSize);
  	};
  	return getSetRecord;
  }

  var setDifference;
  var hasRequiredSetDifference;

  function requireSetDifference () {
  	if (hasRequiredSetDifference) return setDifference;
  	hasRequiredSetDifference = 1;
  	var aSet = requireASet();
  	var SetHelpers = requireSetHelpers();
  	var clone = requireSetClone();
  	var size = requireSetSize();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSet = requireSetIterate();
  	var iterateSimple = requireIterateSimple();

  	var has = SetHelpers.has;
  	var remove = SetHelpers.remove;

  	// `Set.prototype.difference` method
  	// https://github.com/tc39/proposal-set-methods
  	setDifference = function difference(other) {
  	  var O = aSet(this);
  	  var otherRec = getSetRecord(other);
  	  var result = clone(O);
  	  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
  	    if (otherRec.includes(e)) remove(result, e);
  	  });
  	  else iterateSimple(otherRec.getIterator(), function (e) {
  	    if (has(O, e)) remove(result, e);
  	  });
  	  return result;
  	};
  	return setDifference;
  }

  var hasRequiredEsnext_set_difference;

  function requireEsnext_set_difference () {
  	if (hasRequiredEsnext_set_difference) return esnext_set_difference;
  	hasRequiredEsnext_set_difference = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $difference = requireSetDifference();

  	// `Set.prototype.difference` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  difference: function difference(other) {
  	    return call($difference, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_difference;
  }

  requireEsnext_set_difference();

  var esnext_set_every = {};

  var hasRequiredEsnext_set_every;

  function requireEsnext_set_every () {
  	if (hasRequiredEsnext_set_every) return esnext_set_every;
  	hasRequiredEsnext_set_every = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aSet = requireASet();
  	var iterate = requireSetIterate();

  	// `Set.prototype.every` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  every: function every(callbackfn /* , thisArg */) {
  	    var set = aSet(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return iterate(set, function (value) {
  	      if (!boundFunction(value, value, set)) return false;
  	    }, true) !== false;
  	  }
  	});
  	return esnext_set_every;
  }

  requireEsnext_set_every();

  var esnext_set_filter = {};

  var hasRequiredEsnext_set_filter;

  function requireEsnext_set_filter () {
  	if (hasRequiredEsnext_set_filter) return esnext_set_filter;
  	hasRequiredEsnext_set_filter = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aSet = requireASet();
  	var SetHelpers = requireSetHelpers();
  	var iterate = requireSetIterate();

  	var Set = SetHelpers.Set;
  	var add = SetHelpers.add;

  	// `Set.prototype.filter` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  filter: function filter(callbackfn /* , thisArg */) {
  	    var set = aSet(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var newSet = new Set();
  	    iterate(set, function (value) {
  	      if (boundFunction(value, value, set)) add(newSet, value);
  	    });
  	    return newSet;
  	  }
  	});
  	return esnext_set_filter;
  }

  requireEsnext_set_filter();

  var esnext_set_find = {};

  var hasRequiredEsnext_set_find;

  function requireEsnext_set_find () {
  	if (hasRequiredEsnext_set_find) return esnext_set_find;
  	hasRequiredEsnext_set_find = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aSet = requireASet();
  	var iterate = requireSetIterate();

  	// `Set.prototype.find` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  find: function find(callbackfn /* , thisArg */) {
  	    var set = aSet(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var result = iterate(set, function (value) {
  	      if (boundFunction(value, value, set)) return { value: value };
  	    }, true);
  	    return result && result.value;
  	  }
  	});
  	return esnext_set_find;
  }

  requireEsnext_set_find();

  var esnext_set_intersection = {};

  var setIntersection;
  var hasRequiredSetIntersection;

  function requireSetIntersection () {
  	if (hasRequiredSetIntersection) return setIntersection;
  	hasRequiredSetIntersection = 1;
  	var aSet = requireASet();
  	var SetHelpers = requireSetHelpers();
  	var size = requireSetSize();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSet = requireSetIterate();
  	var iterateSimple = requireIterateSimple();

  	var Set = SetHelpers.Set;
  	var add = SetHelpers.add;
  	var has = SetHelpers.has;

  	// `Set.prototype.intersection` method
  	// https://github.com/tc39/proposal-set-methods
  	setIntersection = function intersection(other) {
  	  var O = aSet(this);
  	  var otherRec = getSetRecord(other);
  	  var result = new Set();

  	  if (size(O) > otherRec.size) {
  	    iterateSimple(otherRec.getIterator(), function (e) {
  	      if (has(O, e)) add(result, e);
  	    });
  	  } else {
  	    iterateSet(O, function (e) {
  	      if (otherRec.includes(e)) add(result, e);
  	    });
  	  }

  	  return result;
  	};
  	return setIntersection;
  }

  var hasRequiredEsnext_set_intersection;

  function requireEsnext_set_intersection () {
  	if (hasRequiredEsnext_set_intersection) return esnext_set_intersection;
  	hasRequiredEsnext_set_intersection = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $intersection = requireSetIntersection();

  	// `Set.prototype.intersection` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  intersection: function intersection(other) {
  	    return call($intersection, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_intersection;
  }

  requireEsnext_set_intersection();

  var esnext_set_isDisjointFrom = {};

  var setIsDisjointFrom;
  var hasRequiredSetIsDisjointFrom;

  function requireSetIsDisjointFrom () {
  	if (hasRequiredSetIsDisjointFrom) return setIsDisjointFrom;
  	hasRequiredSetIsDisjointFrom = 1;
  	var aSet = requireASet();
  	var has = requireSetHelpers().has;
  	var size = requireSetSize();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSet = requireSetIterate();
  	var iterateSimple = requireIterateSimple();
  	var iteratorClose = requireIteratorClose();

  	// `Set.prototype.isDisjointFrom` method
  	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
  	setIsDisjointFrom = function isDisjointFrom(other) {
  	  var O = aSet(this);
  	  var otherRec = getSetRecord(other);
  	  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
  	    if (otherRec.includes(e)) return false;
  	  }, true) !== false;
  	  var iterator = otherRec.getIterator();
  	  return iterateSimple(iterator, function (e) {
  	    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  	  }) !== false;
  	};
  	return setIsDisjointFrom;
  }

  var hasRequiredEsnext_set_isDisjointFrom;

  function requireEsnext_set_isDisjointFrom () {
  	if (hasRequiredEsnext_set_isDisjointFrom) return esnext_set_isDisjointFrom;
  	hasRequiredEsnext_set_isDisjointFrom = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $isDisjointFrom = requireSetIsDisjointFrom();

  	// `Set.prototype.isDisjointFrom` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  isDisjointFrom: function isDisjointFrom(other) {
  	    return call($isDisjointFrom, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_isDisjointFrom;
  }

  requireEsnext_set_isDisjointFrom();

  var esnext_set_isSubsetOf = {};

  var setIsSubsetOf;
  var hasRequiredSetIsSubsetOf;

  function requireSetIsSubsetOf () {
  	if (hasRequiredSetIsSubsetOf) return setIsSubsetOf;
  	hasRequiredSetIsSubsetOf = 1;
  	var aSet = requireASet();
  	var size = requireSetSize();
  	var iterate = requireSetIterate();
  	var getSetRecord = requireGetSetRecord();

  	// `Set.prototype.isSubsetOf` method
  	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
  	setIsSubsetOf = function isSubsetOf(other) {
  	  var O = aSet(this);
  	  var otherRec = getSetRecord(other);
  	  if (size(O) > otherRec.size) return false;
  	  return iterate(O, function (e) {
  	    if (!otherRec.includes(e)) return false;
  	  }, true) !== false;
  	};
  	return setIsSubsetOf;
  }

  var hasRequiredEsnext_set_isSubsetOf;

  function requireEsnext_set_isSubsetOf () {
  	if (hasRequiredEsnext_set_isSubsetOf) return esnext_set_isSubsetOf;
  	hasRequiredEsnext_set_isSubsetOf = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $isSubsetOf = requireSetIsSubsetOf();

  	// `Set.prototype.isSubsetOf` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  isSubsetOf: function isSubsetOf(other) {
  	    return call($isSubsetOf, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_isSubsetOf;
  }

  requireEsnext_set_isSubsetOf();

  var esnext_set_isSupersetOf = {};

  var setIsSupersetOf;
  var hasRequiredSetIsSupersetOf;

  function requireSetIsSupersetOf () {
  	if (hasRequiredSetIsSupersetOf) return setIsSupersetOf;
  	hasRequiredSetIsSupersetOf = 1;
  	var aSet = requireASet();
  	var has = requireSetHelpers().has;
  	var size = requireSetSize();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSimple = requireIterateSimple();
  	var iteratorClose = requireIteratorClose();

  	// `Set.prototype.isSupersetOf` method
  	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
  	setIsSupersetOf = function isSupersetOf(other) {
  	  var O = aSet(this);
  	  var otherRec = getSetRecord(other);
  	  if (size(O) < otherRec.size) return false;
  	  var iterator = otherRec.getIterator();
  	  return iterateSimple(iterator, function (e) {
  	    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  	  }) !== false;
  	};
  	return setIsSupersetOf;
  }

  var hasRequiredEsnext_set_isSupersetOf;

  function requireEsnext_set_isSupersetOf () {
  	if (hasRequiredEsnext_set_isSupersetOf) return esnext_set_isSupersetOf;
  	hasRequiredEsnext_set_isSupersetOf = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $isSupersetOf = requireSetIsSupersetOf();

  	// `Set.prototype.isSupersetOf` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  isSupersetOf: function isSupersetOf(other) {
  	    return call($isSupersetOf, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_isSupersetOf;
  }

  requireEsnext_set_isSupersetOf();

  var esnext_set_join = {};

  var toString;
  var hasRequiredToString;

  function requireToString () {
  	if (hasRequiredToString) return toString;
  	hasRequiredToString = 1;
  	var classof = requireClassof();

  	var $String = String;

  	toString = function (argument) {
  	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  	  return $String(argument);
  	};
  	return toString;
  }

  var hasRequiredEsnext_set_join;

  function requireEsnext_set_join () {
  	if (hasRequiredEsnext_set_join) return esnext_set_join;
  	hasRequiredEsnext_set_join = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var aSet = requireASet();
  	var iterate = requireSetIterate();
  	var toString = requireToString();

  	var arrayJoin = uncurryThis([].join);
  	var push = uncurryThis([].push);

  	// `Set.prototype.join` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  join: function join(separator) {
  	    var set = aSet(this);
  	    var sep = separator === undefined ? ',' : toString(separator);
  	    var array = [];
  	    iterate(set, function (value) {
  	      push(array, value);
  	    });
  	    return arrayJoin(array, sep);
  	  }
  	});
  	return esnext_set_join;
  }

  requireEsnext_set_join();

  var esnext_set_map = {};

  var hasRequiredEsnext_set_map;

  function requireEsnext_set_map () {
  	if (hasRequiredEsnext_set_map) return esnext_set_map;
  	hasRequiredEsnext_set_map = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aSet = requireASet();
  	var SetHelpers = requireSetHelpers();
  	var iterate = requireSetIterate();

  	var Set = SetHelpers.Set;
  	var add = SetHelpers.add;

  	// `Set.prototype.map` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  map: function map(callbackfn /* , thisArg */) {
  	    var set = aSet(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    var newSet = new Set();
  	    iterate(set, function (value) {
  	      add(newSet, boundFunction(value, value, set));
  	    });
  	    return newSet;
  	  }
  	});
  	return esnext_set_map;
  }

  requireEsnext_set_map();

  var esnext_set_reduce = {};

  var hasRequiredEsnext_set_reduce;

  function requireEsnext_set_reduce () {
  	if (hasRequiredEsnext_set_reduce) return esnext_set_reduce;
  	hasRequiredEsnext_set_reduce = 1;
  	var $ = require_export();
  	var aCallable = requireACallable();
  	var aSet = requireASet();
  	var iterate = requireSetIterate();

  	var $TypeError = TypeError;

  	// `Set.prototype.reduce` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  reduce: function reduce(callbackfn /* , initialValue */) {
  	    var set = aSet(this);
  	    var noInitial = arguments.length < 2;
  	    var accumulator = noInitial ? undefined : arguments[1];
  	    aCallable(callbackfn);
  	    iterate(set, function (value) {
  	      if (noInitial) {
  	        noInitial = false;
  	        accumulator = value;
  	      } else {
  	        accumulator = callbackfn(accumulator, value, value, set);
  	      }
  	    });
  	    if (noInitial) throw new $TypeError('Reduce of empty set with no initial value');
  	    return accumulator;
  	  }
  	});
  	return esnext_set_reduce;
  }

  requireEsnext_set_reduce();

  var esnext_set_some = {};

  var hasRequiredEsnext_set_some;

  function requireEsnext_set_some () {
  	if (hasRequiredEsnext_set_some) return esnext_set_some;
  	hasRequiredEsnext_set_some = 1;
  	var $ = require_export();
  	var bind = requireFunctionBindContext();
  	var aSet = requireASet();
  	var iterate = requireSetIterate();

  	// `Set.prototype.some` method
  	// https://github.com/tc39/proposal-collection-methods
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  some: function some(callbackfn /* , thisArg */) {
  	    var set = aSet(this);
  	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	    return iterate(set, function (value) {
  	      if (boundFunction(value, value, set)) return true;
  	    }, true) === true;
  	  }
  	});
  	return esnext_set_some;
  }

  requireEsnext_set_some();

  var esnext_set_symmetricDifference = {};

  var setSymmetricDifference;
  var hasRequiredSetSymmetricDifference;

  function requireSetSymmetricDifference () {
  	if (hasRequiredSetSymmetricDifference) return setSymmetricDifference;
  	hasRequiredSetSymmetricDifference = 1;
  	var aSet = requireASet();
  	var SetHelpers = requireSetHelpers();
  	var clone = requireSetClone();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSimple = requireIterateSimple();

  	var add = SetHelpers.add;
  	var has = SetHelpers.has;
  	var remove = SetHelpers.remove;

  	// `Set.prototype.symmetricDifference` method
  	// https://github.com/tc39/proposal-set-methods
  	setSymmetricDifference = function symmetricDifference(other) {
  	  var O = aSet(this);
  	  var keysIter = getSetRecord(other).getIterator();
  	  var result = clone(O);
  	  iterateSimple(keysIter, function (e) {
  	    if (has(O, e)) remove(result, e);
  	    else add(result, e);
  	  });
  	  return result;
  	};
  	return setSymmetricDifference;
  }

  var hasRequiredEsnext_set_symmetricDifference;

  function requireEsnext_set_symmetricDifference () {
  	if (hasRequiredEsnext_set_symmetricDifference) return esnext_set_symmetricDifference;
  	hasRequiredEsnext_set_symmetricDifference = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $symmetricDifference = requireSetSymmetricDifference();

  	// `Set.prototype.symmetricDifference` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  symmetricDifference: function symmetricDifference(other) {
  	    return call($symmetricDifference, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_symmetricDifference;
  }

  requireEsnext_set_symmetricDifference();

  var esnext_set_union = {};

  var setUnion;
  var hasRequiredSetUnion;

  function requireSetUnion () {
  	if (hasRequiredSetUnion) return setUnion;
  	hasRequiredSetUnion = 1;
  	var aSet = requireASet();
  	var add = requireSetHelpers().add;
  	var clone = requireSetClone();
  	var getSetRecord = requireGetSetRecord();
  	var iterateSimple = requireIterateSimple();

  	// `Set.prototype.union` method
  	// https://github.com/tc39/proposal-set-methods
  	setUnion = function union(other) {
  	  var O = aSet(this);
  	  var keysIter = getSetRecord(other).getIterator();
  	  var result = clone(O);
  	  iterateSimple(keysIter, function (it) {
  	    add(result, it);
  	  });
  	  return result;
  	};
  	return setUnion;
  }

  var hasRequiredEsnext_set_union;

  function requireEsnext_set_union () {
  	if (hasRequiredEsnext_set_union) return esnext_set_union;
  	hasRequiredEsnext_set_union = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var toSetLike = requireToSetLike();
  	var $union = requireSetUnion();

  	// `Set.prototype.union` method
  	// https://github.com/tc39/proposal-set-methods
  	// TODO: Obsolete version, remove from `core-js@4`
  	$({ target: 'Set', proto: true, real: true, forced: true }, {
  	  union: function union(other) {
  	    return call($union, this, toSetLike(other));
  	  }
  	});
  	return esnext_set_union;
  }

  requireEsnext_set_union();

  var _a$b;
  const a = {
    b: 0
  };
  const optional_chaining = (_a$b = a === null || a === void 0 ? void 0 : a.b) !== null && _a$b !== void 0 ? _a$b : 0;
  const template_literal = `Hello ${'World'}`;
  const object_shorthand = {
    a,
    b: 0
  };
  const object_destructuring = {
    a,
    b: 0
  };
  const array_destructuring = [1, 2, 3];
  const array_destructuring_with_rest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array_spread = [...array_destructuring, 4, 5, 6];
  const object_spread = {
    ...object_destructuring,
    c: 3
  };
  const set_spread = new Set([1, 2, 3, 4, 5]);
  const map_spread = new Map([['a', 1], ['b', 2], ['c', 3]]);
  const promise = new Promise((resolve, reject) => {
    resolve('Success');
  });
  let MyClass = /*#__PURE__*/function () {
    function MyClass() {
      _classCallCheck(this, MyClass);
      this.a = 1;
    }
    return _createClass(MyClass, [{
      key: "myMethod",
      value: function myMethod() {
        console.log('Hello World');
      }
    }]);
  }();
  const arrowFunction = () => {
    console.log('Hello World');
    console.log(optional_chaining);
    console.log(template_literal);
    console.log(object_shorthand);
    console.log(object_destructuring);
    console.log(array_destructuring);
    console.log(array_destructuring_with_rest);
    console.log(array_spread);
    console.log(object_spread);
    console.log(set_spread);
    console.log(map_spread);
    console.log(promise);
    const myClass = new MyClass();
    myClass.myMethod();
  };
  arrowFunction();
  var index = {
    arrowFunction
  };

  return index;

})();
