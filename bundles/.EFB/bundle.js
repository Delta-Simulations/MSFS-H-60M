(function () {
	'use strict';

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

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
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

	var react_production_min = createCommonjsModule(function (module, exports) {

	  var n = 60103,
	      p = 60106;
	  exports.Fragment = 60107;
	  exports.StrictMode = 60108;
	  exports.Profiler = 60114;
	  var q = 60109,
	      r = 60110,
	      t = 60112;
	  exports.Suspense = 60113;
	  var u = 60115,
	      v = 60116;

	  if ("function" === typeof Symbol && Symbol.for) {
	    var w = Symbol.for;
	    n = w("react.element");
	    p = w("react.portal");
	    exports.Fragment = w("react.fragment");
	    exports.StrictMode = w("react.strict_mode");
	    exports.Profiler = w("react.profiler");
	    q = w("react.provider");
	    r = w("react.context");
	    t = w("react.forward_ref");
	    exports.Suspense = w("react.suspense");
	    u = w("react.memo");
	    v = w("react.lazy");
	  }

	  var x = "function" === typeof Symbol && Symbol.iterator;

	  function y(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = x && a[x] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }

	  function z(a) {
	    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	  }

	  var A = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	      B = {};

	  function C(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B;
	    this.updater = c || A;
	  }

	  C.prototype.isReactComponent = {};

	  C.prototype.setState = function (a, b) {
	    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
	    this.updater.enqueueSetState(this, a, b, "setState");
	  };

	  C.prototype.forceUpdate = function (a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	  };

	  function D() {}

	  D.prototype = C.prototype;

	  function E(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B;
	    this.updater = c || A;
	  }

	  var F = E.prototype = new D();
	  F.constructor = E;
	  objectAssign(F, C.prototype);
	  F.isPureReactComponent = !0;
	  var G = {
	    current: null
	  },
	      H = Object.prototype.hasOwnProperty,
	      I = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };

	  function J(a, b, c) {
	    var e,
	        d = {},
	        k = null,
	        h = null;
	    if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
	    var g = arguments.length - 2;
	    if (1 === g) d.children = c;else if (1 < g) {
	      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

	      d.children = f;
	    }
	    if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
	    return {
	      $$typeof: n,
	      type: a,
	      key: k,
	      ref: h,
	      props: d,
	      _owner: G.current
	    };
	  }

	  function K(a, b) {
	    return {
	      $$typeof: n,
	      type: a.type,
	      key: b,
	      ref: a.ref,
	      props: a.props,
	      _owner: a._owner
	    };
	  }

	  function L(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === n;
	  }

	  function escape(a) {
	    var b = {
	      "=": "=0",
	      ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function (a) {
	      return b[a];
	    });
	  }

	  var M = /\/+/g;

	  function N(a, b) {
	    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	  }

	  function O(a, b, c, e, d) {
	    var k = typeof a;
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = !1;
	    if (null === a) h = !0;else switch (k) {
	      case "string":
	      case "number":
	        h = !0;
	        break;

	      case "object":
	        switch (a.$$typeof) {
	          case n:
	          case p:
	            h = !0;
	        }

	    }
	    if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
	      return a;
	    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
	    h = 0;
	    e = "" === e ? "." : e + ":";
	    if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
	      k = a[g];
	      var f = e + N(k, g);
	      h += O(k, b, c, f, d);
	    } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	    return h;
	  }

	  function P(a, b, c) {
	    if (null == a) return a;
	    var e = [],
	        d = 0;
	    O(a, e, "", "", function (a) {
	      return b.call(c, a, d++);
	    });
	    return e;
	  }

	  function Q(a) {
	    if (-1 === a._status) {
	      var b = a._result;
	      b = b();
	      a._status = 0;
	      a._result = b;
	      b.then(function (b) {
	        0 === a._status && (b = b.default, a._status = 1, a._result = b);
	      }, function (b) {
	        0 === a._status && (a._status = 2, a._result = b);
	      });
	    }

	    if (1 === a._status) return a._result;
	    throw a._result;
	  }

	  var R = {
	    current: null
	  };

	  function S() {
	    var a = R.current;
	    if (null === a) throw Error(z(321));
	    return a;
	  }

	  var T = {
	    ReactCurrentDispatcher: R,
	    ReactCurrentBatchConfig: {
	      transition: 0
	    },
	    ReactCurrentOwner: G,
	    IsSomeRendererActing: {
	      current: !1
	    },
	    assign: objectAssign
	  };
	  exports.Children = {
	    map: P,
	    forEach: function (a, b, c) {
	      P(a, function () {
	        b.apply(this, arguments);
	      }, c);
	    },
	    count: function (a) {
	      var b = 0;
	      P(a, function () {
	        b++;
	      });
	      return b;
	    },
	    toArray: function (a) {
	      return P(a, function (a) {
	        return a;
	      }) || [];
	    },
	    only: function (a) {
	      if (!L(a)) throw Error(z(143));
	      return a;
	    }
	  };
	  exports.Component = C;
	  exports.PureComponent = E;
	  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

	  exports.cloneElement = function (a, b, c) {
	    if (null === a || void 0 === a) throw Error(z(267, a));
	    var e = objectAssign({}, a.props),
	        d = a.key,
	        k = a.ref,
	        h = a._owner;

	    if (null != b) {
	      void 0 !== b.ref && (k = b.ref, h = G.current);
	      void 0 !== b.key && (d = "" + b.key);
	      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

	      for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }

	    var f = arguments.length - 2;
	    if (1 === f) e.children = c;else if (1 < f) {
	      g = Array(f);

	      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

	      e.children = g;
	    }
	    return {
	      $$typeof: n,
	      type: a.type,
	      key: d,
	      ref: k,
	      props: e,
	      _owner: h
	    };
	  };

	  exports.createContext = function (a, b) {
	    void 0 === b && (b = null);
	    a = {
	      $$typeof: r,
	      _calculateChangedBits: b,
	      _currentValue: a,
	      _currentValue2: a,
	      _threadCount: 0,
	      Provider: null,
	      Consumer: null
	    };
	    a.Provider = {
	      $$typeof: q,
	      _context: a
	    };
	    return a.Consumer = a;
	  };

	  exports.createElement = J;

	  exports.createFactory = function (a) {
	    var b = J.bind(null, a);
	    b.type = a;
	    return b;
	  };

	  exports.createRef = function () {
	    return {
	      current: null
	    };
	  };

	  exports.forwardRef = function (a) {
	    return {
	      $$typeof: t,
	      render: a
	    };
	  };

	  exports.isValidElement = L;

	  exports.lazy = function (a) {
	    return {
	      $$typeof: v,
	      _payload: {
	        _status: -1,
	        _result: a
	      },
	      _init: Q
	    };
	  };

	  exports.memo = function (a, b) {
	    return {
	      $$typeof: u,
	      type: a,
	      compare: void 0 === b ? null : b
	    };
	  };

	  exports.useCallback = function (a, b) {
	    return S().useCallback(a, b);
	  };

	  exports.useContext = function (a, b) {
	    return S().useContext(a, b);
	  };

	  exports.useDebugValue = function () {};

	  exports.useEffect = function (a, b) {
	    return S().useEffect(a, b);
	  };

	  exports.useImperativeHandle = function (a, b, c) {
	    return S().useImperativeHandle(a, b, c);
	  };

	  exports.useLayoutEffect = function (a, b) {
	    return S().useLayoutEffect(a, b);
	  };

	  exports.useMemo = function (a, b) {
	    return S().useMemo(a, b);
	  };

	  exports.useReducer = function (a, b, c) {
	    return S().useReducer(a, b, c);
	  };

	  exports.useRef = function (a) {
	    return S().useRef(a);
	  };

	  exports.useState = function (a) {
	    return S().useState(a);
	  };

	  exports.version = "17.0.2";
	});

	createCommonjsModule(function (module, exports) {
	});

	var react = createCommonjsModule(function (module) {

	  {
	    module.exports = react_production_min;
	  }
	});

	var React = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		'default': react
	}, [react]));

	var scheduler_production_min = createCommonjsModule(function (module, exports) {

	  var f, g, h, k;

	  if ("object" === typeof performance && "function" === typeof performance.now) {
	    var l = performance;

	    exports.unstable_now = function () {
	      return l.now();
	    };
	  } else {
	    var p = Date,
	        q = p.now();

	    exports.unstable_now = function () {
	      return p.now() - q;
	    };
	  }

	  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
	    var t = null,
	        u = null,
	        w = function () {
	      if (null !== t) try {
	        var a = exports.unstable_now();
	        t(!0, a);
	        t = null;
	      } catch (b) {
	        throw setTimeout(w, 0), b;
	      }
	    };

	    f = function (a) {
	      null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
	    };

	    g = function (a, b) {
	      u = setTimeout(a, b);
	    };

	    h = function () {
	      clearTimeout(u);
	    };

	    exports.unstable_shouldYield = function () {
	      return !1;
	    };

	    k = exports.unstable_forceFrameRate = function () {};
	  } else {
	    var x = window.setTimeout,
	        y = window.clearTimeout;

	    if ("undefined" !== typeof console) {
	      var z = window.cancelAnimationFrame;
	      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	      "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	    }

	    var A = !1,
	        B = null,
	        C = -1,
	        D = 5,
	        E = 0;

	    exports.unstable_shouldYield = function () {
	      return exports.unstable_now() >= E;
	    };

	    k = function () {};

	    exports.unstable_forceFrameRate = function (a) {
	      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
	    };

	    var F = new MessageChannel(),
	        G = F.port2;

	    F.port1.onmessage = function () {
	      if (null !== B) {
	        var a = exports.unstable_now();
	        E = a + D;

	        try {
	          B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
	        } catch (b) {
	          throw G.postMessage(null), b;
	        }
	      } else A = !1;
	    };

	    f = function (a) {
	      B = a;
	      A || (A = !0, G.postMessage(null));
	    };

	    g = function (a, b) {
	      C = x(function () {
	        a(exports.unstable_now());
	      }, b);
	    };

	    h = function () {
	      y(C);
	      C = -1;
	    };
	  }

	  function H(a, b) {
	    var c = a.length;
	    a.push(b);

	    a: for (;;) {
	      var d = c - 1 >>> 1,
	          e = a[d];
	      if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	    }
	  }

	  function J(a) {
	    a = a[0];
	    return void 0 === a ? null : a;
	  }

	  function K(a) {
	    var b = a[0];

	    if (void 0 !== b) {
	      var c = a.pop();

	      if (c !== b) {
	        a[0] = c;

	        a: for (var d = 0, e = a.length; d < e;) {
	          var m = 2 * (d + 1) - 1,
	              n = a[m],
	              v = m + 1,
	              r = a[v];
	          if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
	        }
	      }

	      return b;
	    }

	    return null;
	  }

	  function I(a, b) {
	    var c = a.sortIndex - b.sortIndex;
	    return 0 !== c ? c : a.id - b.id;
	  }

	  var L = [],
	      M = [],
	      N = 1,
	      O = null,
	      P = 3,
	      Q = !1,
	      R = !1,
	      S = !1;

	  function T(a) {
	    for (var b = J(M); null !== b;) {
	      if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
	      b = J(M);
	    }
	  }

	  function U(a) {
	    S = !1;
	    T(a);
	    if (!R) if (null !== J(L)) R = !0, f(V);else {
	      var b = J(M);
	      null !== b && g(U, b.startTime - a);
	    }
	  }

	  function V(a, b) {
	    R = !1;
	    S && (S = !1, h());
	    Q = !0;
	    var c = P;

	    try {
	      T(b);

	      for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
	        var d = O.callback;

	        if ("function" === typeof d) {
	          O.callback = null;
	          P = O.priorityLevel;
	          var e = d(O.expirationTime <= b);
	          b = exports.unstable_now();
	          "function" === typeof e ? O.callback = e : O === J(L) && K(L);
	          T(b);
	        } else K(L);

	        O = J(L);
	      }

	      if (null !== O) var m = !0;else {
	        var n = J(M);
	        null !== n && g(U, n.startTime - b);
	        m = !1;
	      }
	      return m;
	    } finally {
	      O = null, P = c, Q = !1;
	    }
	  }

	  var W = k;
	  exports.unstable_IdlePriority = 5;
	  exports.unstable_ImmediatePriority = 1;
	  exports.unstable_LowPriority = 4;
	  exports.unstable_NormalPriority = 3;
	  exports.unstable_Profiling = null;
	  exports.unstable_UserBlockingPriority = 2;

	  exports.unstable_cancelCallback = function (a) {
	    a.callback = null;
	  };

	  exports.unstable_continueExecution = function () {
	    R || Q || (R = !0, f(V));
	  };

	  exports.unstable_getCurrentPriorityLevel = function () {
	    return P;
	  };

	  exports.unstable_getFirstCallbackNode = function () {
	    return J(L);
	  };

	  exports.unstable_next = function (a) {
	    switch (P) {
	      case 1:
	      case 2:
	      case 3:
	        var b = 3;
	        break;

	      default:
	        b = P;
	    }

	    var c = P;
	    P = b;

	    try {
	      return a();
	    } finally {
	      P = c;
	    }
	  };

	  exports.unstable_pauseExecution = function () {};

	  exports.unstable_requestPaint = W;

	  exports.unstable_runWithPriority = function (a, b) {
	    switch (a) {
	      case 1:
	      case 2:
	      case 3:
	      case 4:
	      case 5:
	        break;

	      default:
	        a = 3;
	    }

	    var c = P;
	    P = a;

	    try {
	      return b();
	    } finally {
	      P = c;
	    }
	  };

	  exports.unstable_scheduleCallback = function (a, b, c) {
	    var d = exports.unstable_now();
	    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

	    switch (a) {
	      case 1:
	        var e = -1;
	        break;

	      case 2:
	        e = 250;
	        break;

	      case 5:
	        e = 1073741823;
	        break;

	      case 4:
	        e = 1E4;
	        break;

	      default:
	        e = 5E3;
	    }

	    e = c + e;
	    a = {
	      id: N++,
	      callback: b,
	      priorityLevel: a,
	      startTime: c,
	      expirationTime: e,
	      sortIndex: -1
	    };
	    c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
	    return a;
	  };

	  exports.unstable_wrapCallback = function (a) {
	    var b = P;
	    return function () {
	      var c = P;
	      P = b;

	      try {
	        return a.apply(this, arguments);
	      } finally {
	        P = c;
	      }
	    };
	  };
	});

	createCommonjsModule(function (module, exports) {
	});

	var scheduler = createCommonjsModule(function (module) {

	  {
	    module.exports = scheduler_production_min;
	  }
	});

	function y$3(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	if (!react) throw Error(y$3(227));
	var ba = new Set(),
	    ca = {};

	function da(a, b) {
	  ea(a, b);
	  ea(a + "Capture", b);
	}

	function ea(a, b) {
	  ca[a] = b;

	  for (a = 0; a < b.length; a++) ba.add(b[a]);
	}

	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	    ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    ia = Object.prototype.hasOwnProperty,
	    ja = {},
	    ka = {};

	function la(a) {
	  if (ia.call(ka, a)) return !0;
	  if (ia.call(ja, a)) return !1;
	  if (ha.test(a)) return ka[a] = !0;
	  ja[a] = !0;
	  return !1;
	}

	function ma(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;

	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;

	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;

	    default:
	      return !1;
	  }
	}

	function na(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;

	    case 4:
	      return !1 === b;

	    case 5:
	      return isNaN(b);

	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}

	function B$2(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}

	var D$2 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  D$2[a] = new B$2(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  D$2[b] = new B$2(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  D$2[a] = new B$2(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  D$2[a] = new B$2(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  D$2[a] = new B$2(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  D$2[a] = new B$2(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  D$2[a] = new B$2(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  D$2[a] = new B$2(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  D$2[a] = new B$2(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;

	function pa(a) {
	  return a[1].toUpperCase();
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$2[b] = new B$2(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$2[b] = new B$2(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$2[b] = new B$2(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  D$2[a] = new B$2(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D$2.xlinkHref = new B$2("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  D$2[a] = new B$2(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});

	function qa(a, b, c, d) {
	  var e = D$2.hasOwnProperty(b) ? D$2[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}

	var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	    sa = 60103,
	    ta = 60106,
	    ua = 60107,
	    wa = 60108,
	    xa = 60114,
	    ya = 60109,
	    za = 60110,
	    Aa = 60112,
	    Ba = 60113,
	    Ca = 60120,
	    Da = 60115,
	    Ea = 60116,
	    Fa = 60121,
	    Ga = 60128,
	    Ha = 60129,
	    Ia = 60130,
	    Ja = 60131;

	if ("function" === typeof Symbol && Symbol.for) {
	  var E$2 = Symbol.for;
	  sa = E$2("react.element");
	  ta = E$2("react.portal");
	  ua = E$2("react.fragment");
	  wa = E$2("react.strict_mode");
	  xa = E$2("react.profiler");
	  ya = E$2("react.provider");
	  za = E$2("react.context");
	  Aa = E$2("react.forward_ref");
	  Ba = E$2("react.suspense");
	  Ca = E$2("react.suspense_list");
	  Da = E$2("react.memo");
	  Ea = E$2("react.lazy");
	  Fa = E$2("react.block");
	  E$2("react.scope");
	  Ga = E$2("react.opaque.id");
	  Ha = E$2("react.debug_trace_mode");
	  Ia = E$2("react.offscreen");
	  Ja = E$2("react.legacy_hidden");
	}

	var Ka = "function" === typeof Symbol && Symbol.iterator;

	function La(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ka && a[Ka] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	var Ma;

	function Na(a) {
	  if (void 0 === Ma) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    Ma = b && b[1] || "";
	  }
	  return "\n" + Ma + a;
	}

	var Oa = !1;

	function Pa(a, b) {
	  if (!a || Oa) return "";
	  Oa = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;

	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (k) {
	          var d = k;
	        }

	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (k) {
	          d = k;
	        }

	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (k) {
	        d = k;
	      }

	      a();
	    }
	  } catch (k) {
	    if (k && d && "string" === typeof k.stack) {
	      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;

	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
	        }

	        break;
	      }
	    }
	  } finally {
	    Oa = !1, Error.prepareStackTrace = c;
	  }

	  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}

	function Qa(a) {
	  switch (a.tag) {
	    case 5:
	      return Na(a.type);

	    case 16:
	      return Na("Lazy");

	    case 13:
	      return Na("Suspense");

	    case 19:
	      return Na("SuspenseList");

	    case 0:
	    case 2:
	    case 15:
	      return a = Pa(a.type, !1), a;

	    case 11:
	      return a = Pa(a.type.render, !1), a;

	    case 22:
	      return a = Pa(a.type._render, !1), a;

	    case 1:
	      return a = Pa(a.type, !0), a;

	    default:
	      return "";
	  }
	}

	function Ra(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;

	  switch (a) {
	    case ua:
	      return "Fragment";

	    case ta:
	      return "Portal";

	    case xa:
	      return "Profiler";

	    case wa:
	      return "StrictMode";

	    case Ba:
	      return "Suspense";

	    case Ca:
	      return "SuspenseList";
	  }

	  if ("object" === typeof a) switch (a.$$typeof) {
	    case za:
	      return (a.displayName || "Context") + ".Consumer";

	    case ya:
	      return (a._context.displayName || "Context") + ".Provider";

	    case Aa:
	      var b = a.render;
	      b = b.displayName || b.name || "";
	      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

	    case Da:
	      return Ra(a.type);

	    case Fa:
	      return Ra(a._render);

	    case Ea:
	      b = a._payload;
	      a = a._init;

	      try {
	        return Ra(a(b));
	      } catch (c) {}

	  }
	  return null;
	}

	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
	      return a;

	    default:
	      return "";
	  }
	}

	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}

	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	      d = "" + a[b];

	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	        f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}

	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}

	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}

	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;

	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}

	function Ya(a, b) {
	  var c = b.checked;
	  return objectAssign({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}

	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	      d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}

	function $a(a, b) {
	  b = b.checked;
	  null != b && qa(a, "checked", b, !1);
	}

	function ab(a, b) {
	  $a(a, b);
	  var c = Sa(b.value),
	      d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}

	function cb(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }

	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}

	function bb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}

	function db(a) {
	  var b = "";
	  react.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });
	  return b;
	}

	function eb(a, b) {
	  a = objectAssign({
	    children: void 0
	  }, b);
	  if (b = db(b.children)) a.children = b;
	  return a;
	}

	function fb(a, b, c, d) {
	  a = a.options;

	  if (b) {
	    b = {};

	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;

	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }

	      null !== b || a[e].disabled || (b = a[e]);
	    }

	    null !== b && (b.selected = !0);
	  }
	}

	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(y$3(91));
	  return objectAssign({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}

	function hb(a, b) {
	  var c = b.value;

	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;

	    if (null != c) {
	      if (null != b) throw Error(y$3(92));

	      if (Array.isArray(c)) {
	        if (!(1 >= c.length)) throw Error(y$3(93));
	        c = c[0];
	      }

	      b = c;
	    }

	    null == b && (b = "");
	    c = b;
	  }

	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}

	function ib(a, b) {
	  var c = Sa(b.value),
	      d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}

	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}

	var kb = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};

	function lb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";

	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";

	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}

	function mb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}

	var nb,
	    ob = function (a) {
	  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	    MSApp.execUnsafeLocalFunction(function () {
	      return a(b, c, d, e);
	    });
	  } : a;
	}(function (a, b) {
	  if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
	    nb = nb || document.createElement("div");
	    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

	    for (b = nb.firstChild; a.firstChild;) a.removeChild(a.firstChild);

	    for (; b.firstChild;) a.appendChild(b.firstChild);
	  }
	});

	function pb(a, b) {
	  if (b) {
	    var c = a.firstChild;

	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }

	  a.textContent = b;
	}

	var qb = {
	  animationIterationCount: !0,
	  borderImageOutset: !0,
	  borderImageSlice: !0,
	  borderImageWidth: !0,
	  boxFlex: !0,
	  boxFlexGroup: !0,
	  boxOrdinalGroup: !0,
	  columnCount: !0,
	  columns: !0,
	  flex: !0,
	  flexGrow: !0,
	  flexPositive: !0,
	  flexShrink: !0,
	  flexNegative: !0,
	  flexOrder: !0,
	  gridArea: !0,
	  gridRow: !0,
	  gridRowEnd: !0,
	  gridRowSpan: !0,
	  gridRowStart: !0,
	  gridColumn: !0,
	  gridColumnEnd: !0,
	  gridColumnSpan: !0,
	  gridColumnStart: !0,
	  fontWeight: !0,
	  lineClamp: !0,
	  lineHeight: !0,
	  opacity: !0,
	  order: !0,
	  orphans: !0,
	  tabSize: !0,
	  widows: !0,
	  zIndex: !0,
	  zoom: !0,
	  fillOpacity: !0,
	  floodOpacity: !0,
	  stopOpacity: !0,
	  strokeDasharray: !0,
	  strokeDashoffset: !0,
	  strokeMiterlimit: !0,
	  strokeOpacity: !0,
	  strokeWidth: !0
	},
	    rb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(qb).forEach(function (a) {
	  rb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    qb[b] = qb[a];
	  });
	});

	function sb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}

	function tb(a, b) {
	  a = a.style;

	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	        e = sb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}

	var ub = objectAssign({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});

	function vb(a, b) {
	  if (b) {
	    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y$3(137, a));

	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(y$3(60));
	      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y$3(61));
	    }

	    if (null != b.style && "object" !== typeof b.style) throw Error(y$3(62));
	  }
	}

	function wb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;

	    default:
	      return !0;
	  }
	}

	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}

	var yb = null,
	    zb = null,
	    Ab = null;

	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(y$3(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}

	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}

	function Fb() {
	  if (zb) {
	    var a = zb,
	        b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}

	function Gb(a, b) {
	  return a(b);
	}

	function Hb(a, b, c, d, e) {
	  return a(b, c, d, e);
	}

	function Ib() {}

	var Jb = Gb,
	    Kb = !1,
	    Lb = !1;

	function Mb() {
	  if (null !== zb || null !== Ab) Ib(), Fb();
	}

	function Nb(a, b, c) {
	  if (Lb) return a(b, c);
	  Lb = !0;

	  try {
	    return Jb(a, b, c);
	  } finally {
	    Lb = !1, Mb();
	  }
	}

	function Ob(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];

	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;

	    default:
	      a = !1;
	  }

	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(y$3(231, b, typeof c));
	  return c;
	}

	var Pb = !1;
	if (fa) try {
	  var Qb = {};
	  Object.defineProperty(Qb, "passive", {
	    get: function () {
	      Pb = !0;
	    }
	  });
	  window.addEventListener("test", Qb, Qb);
	  window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	  Pb = !1;
	}

	function Rb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);

	  try {
	    b.apply(c, l);
	  } catch (n) {
	    this.onError(n);
	  }
	}

	var Sb = !1,
	    Tb = null,
	    Ub = !1,
	    Vb = null,
	    Wb = {
	  onError: function (a) {
	    Sb = !0;
	    Tb = a;
	  }
	};

	function Xb(a, b, c, d, e, f, g, h, k) {
	  Sb = !1;
	  Tb = null;
	  Rb.apply(Wb, arguments);
	}

	function Yb(a, b, c, d, e, f, g, h, k) {
	  Xb.apply(this, arguments);

	  if (Sb) {
	    if (Sb) {
	      var l = Tb;
	      Sb = !1;
	      Tb = null;
	    } else throw Error(y$3(198));

	    Ub || (Ub = !0, Vb = l);
	  }
	}

	function Zb(a) {
	  var b = a,
	      c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;

	    do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}

	function $b(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }

	  return null;
	}

	function ac(a) {
	  if (Zb(a) !== a) throw Error(y$3(188));
	}

	function bc(a) {
	  var b = a.alternate;

	  if (!b) {
	    b = Zb(a);
	    if (null === b) throw Error(y$3(188));
	    return b !== a ? null : a;
	  }

	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;

	    if (null === f) {
	      d = e.return;

	      if (null !== d) {
	        c = d;
	        continue;
	      }

	      break;
	    }

	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return ac(e), a;
	        if (f === d) return ac(e), b;
	        f = f.sibling;
	      }

	      throw Error(y$3(188));
	    }

	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }

	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }

	        h = h.sibling;
	      }

	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }

	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }

	          h = h.sibling;
	        }

	        if (!g) throw Error(y$3(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(y$3(190));
	  }

	  if (3 !== c.tag) throw Error(y$3(188));
	  return c.stateNode.current === c ? a : b;
	}

	function cc(a) {
	  a = bc(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	function dc(a, b) {
	  for (var c = a.alternate; null !== b;) {
	    if (b === a || b === c) return !0;
	    b = b.return;
	  }

	  return !1;
	}

	var ec,
	    fc,
	    gc,
	    hc,
	    ic = !1,
	    jc = [],
	    kc = null,
	    lc = null,
	    mc = null,
	    nc = new Map(),
	    oc = new Map(),
	    pc = [],
	    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function rc(a, b, c, d, e) {
	  return {
	    blockedOn: a,
	    domEventName: b,
	    eventSystemFlags: c | 16,
	    nativeEvent: e,
	    targetContainers: [d]
	  };
	}

	function sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      kc = null;
	      break;

	    case "dragenter":
	    case "dragleave":
	      lc = null;
	      break;

	    case "mouseover":
	    case "mouseout":
	      mc = null;
	      break;

	    case "pointerover":
	    case "pointerout":
	      nc.delete(b.pointerId);
	      break;

	    case "gotpointercapture":
	    case "lostpointercapture":
	      oc.delete(b.pointerId);
	  }
	}

	function tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}

	function uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return kc = tc(kc, a, b, c, d, e), !0;

	    case "dragenter":
	      return lc = tc(lc, a, b, c, d, e), !0;

	    case "mouseover":
	      return mc = tc(mc, a, b, c, d, e), !0;

	    case "pointerover":
	      var f = e.pointerId;
	      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	      return !0;

	    case "gotpointercapture":
	      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	  }

	  return !1;
	}

	function vc(a) {
	  var b = wc(a.target);

	  if (null !== b) {
	    var c = Zb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = $b(c), null !== b) {
	        a.blockedOn = b;
	        hc(a.lanePriority, function () {
	          scheduler.unstable_runWithPriority(a.priority, function () {
	            gc(c);
	          });
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.hydrate) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }

	  a.blockedOn = null;
	}

	function xc(a) {
	  if (null !== a.blockedOn) return !1;

	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }

	  return !0;
	}

	function zc(a, b, c) {
	  xc(a) && c.delete(b);
	}

	function Ac() {
	  for (ic = !1; 0 < jc.length;) {
	    var a = jc[0];

	    if (null !== a.blockedOn) {
	      a = Cb(a.blockedOn);
	      null !== a && ec(a);
	      break;
	    }

	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);

	      if (null !== c) {
	        a.blockedOn = c;
	        break;
	      }

	      b.shift();
	    }

	    null === a.blockedOn && jc.shift();
	  }

	  null !== kc && xc(kc) && (kc = null);
	  null !== lc && xc(lc) && (lc = null);
	  null !== mc && xc(mc) && (mc = null);
	  nc.forEach(zc);
	  oc.forEach(zc);
	}

	function Bc(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
	}

	function Cc(a) {
	  function b(b) {
	    return Bc(b, a);
	  }

	  if (0 < jc.length) {
	    Bc(jc[0], a);

	    for (var c = 1; c < jc.length; c++) {
	      var d = jc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }

	  null !== kc && Bc(kc, a);
	  null !== lc && Bc(lc, a);
	  null !== mc && Bc(mc, a);
	  nc.forEach(b);
	  oc.forEach(b);

	  for (c = 0; c < pc.length; c++) d = pc[c], d.blockedOn === a && (d.blockedOn = null);

	  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) vc(c), null === c.blockedOn && pc.shift();
	}

	function Dc(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}

	var Ec = {
	  animationend: Dc("Animation", "AnimationEnd"),
	  animationiteration: Dc("Animation", "AnimationIteration"),
	  animationstart: Dc("Animation", "AnimationStart"),
	  transitionend: Dc("Transition", "TransitionEnd")
	},
	    Fc = {},
	    Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);

	function Hc(a) {
	  if (Fc[a]) return Fc[a];
	  if (!Ec[a]) return a;
	  var b = Ec[a],
	      c;

	  for (c in b) if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];

	  return a;
	}

	var Ic = Hc("animationend"),
	    Jc = Hc("animationiteration"),
	    Kc = Hc("animationstart"),
	    Lc = Hc("transitionend"),
	    Mc = new Map(),
	    Nc = new Map(),
	    Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];

	function Pc(a, b) {
	  for (var c = 0; c < a.length; c += 2) {
	    var d = a[c],
	        e = a[c + 1];
	    e = "on" + (e[0].toUpperCase() + e.slice(1));
	    Nc.set(d, b);
	    Mc.set(d, e);
	    da(e, [d]);
	  }
	}

	var Qc = scheduler.unstable_now;
	Qc();
	var F$2 = 8;

	function Rc(a) {
	  if (0 !== (1 & a)) return F$2 = 15, 1;
	  if (0 !== (2 & a)) return F$2 = 14, 2;
	  if (0 !== (4 & a)) return F$2 = 13, 4;
	  var b = 24 & a;
	  if (0 !== b) return F$2 = 12, b;
	  if (0 !== (a & 32)) return F$2 = 11, 32;
	  b = 192 & a;
	  if (0 !== b) return F$2 = 10, b;
	  if (0 !== (a & 256)) return F$2 = 9, 256;
	  b = 3584 & a;
	  if (0 !== b) return F$2 = 8, b;
	  if (0 !== (a & 4096)) return F$2 = 7, 4096;
	  b = 4186112 & a;
	  if (0 !== b) return F$2 = 6, b;
	  b = 62914560 & a;
	  if (0 !== b) return F$2 = 5, b;
	  if (a & 67108864) return F$2 = 4, 67108864;
	  if (0 !== (a & 134217728)) return F$2 = 3, 134217728;
	  b = 805306368 & a;
	  if (0 !== b) return F$2 = 2, b;
	  if (0 !== (1073741824 & a)) return F$2 = 1, 1073741824;
	  F$2 = 8;
	  return a;
	}

	function Sc(a) {
	  switch (a) {
	    case 99:
	      return 15;

	    case 98:
	      return 10;

	    case 97:
	    case 96:
	      return 8;

	    case 95:
	      return 2;

	    default:
	      return 0;
	  }
	}

	function Tc(a) {
	  switch (a) {
	    case 15:
	    case 14:
	      return 99;

	    case 13:
	    case 12:
	    case 11:
	    case 10:
	      return 98;

	    case 9:
	    case 8:
	    case 7:
	    case 6:
	    case 4:
	    case 5:
	      return 97;

	    case 3:
	    case 2:
	    case 1:
	      return 95;

	    case 0:
	      return 90;

	    default:
	      throw Error(y$3(358, a));
	  }
	}

	function Uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return F$2 = 0;
	  var d = 0,
	      e = 0,
	      f = a.expiredLanes,
	      g = a.suspendedLanes,
	      h = a.pingedLanes;
	  if (0 !== f) d = f, e = F$2 = 15;else if (f = c & 134217727, 0 !== f) {
	    var k = f & ~g;
	    0 !== k ? (d = Rc(k), e = F$2) : (h &= f, 0 !== h && (d = Rc(h), e = F$2));
	  } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F$2) : 0 !== h && (d = Rc(h), e = F$2);
	  if (0 === d) return 0;
	  d = 31 - Vc(d);
	  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

	  if (0 !== b && b !== d && 0 === (b & g)) {
	    Rc(b);
	    if (e <= F$2) return b;
	    F$2 = e;
	  }

	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}

	function Wc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}

	function Xc(a, b) {
	  switch (a) {
	    case 15:
	      return 1;

	    case 14:
	      return 2;

	    case 12:
	      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;

	    case 10:
	      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;

	    case 8:
	      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;

	    case 2:
	      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	  }

	  throw Error(y$3(358, a));
	}

	function Yc(a) {
	  return a & -a;
	}

	function Zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);

	  return b;
	}

	function $c(a, b, c) {
	  a.pendingLanes |= b;
	  var d = b - 1;
	  a.suspendedLanes &= d;
	  a.pingedLanes &= d;
	  a = a.eventTimes;
	  b = 31 - Vc(b);
	  a[b] = c;
	}

	var Vc = Math.clz32 ? Math.clz32 : ad,
	    bd = Math.log,
	    cd = Math.LN2;

	function ad(a) {
	  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}

	var dd = scheduler.unstable_UserBlockingPriority,
	    ed = scheduler.unstable_runWithPriority,
	    fd = !0;

	function gd(a, b, c, d) {
	  Kb || Ib();
	  var e = hd,
	      f = Kb;
	  Kb = !0;

	  try {
	    Hb(e, a, b, c, d);
	  } finally {
	    (Kb = f) || Mb();
	  }
	}

	function id(a, b, c, d) {
	  ed(dd, hd.bind(null, a, b, c, d));
	}

	function hd(a, b, c, d) {
	  if (fd) {
	    var e;
	    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
	      var f = yc(a, b, c, d);
	      if (null === f) e && sc(a, d);else {
	        if (e) {
	          if (-1 < qc.indexOf(a)) {
	            a = rc(f, a, b, c, d);
	            jc.push(a);
	            return;
	          }

	          if (uc(f, a, b, c, d)) return;
	          sc(a, d);
	        }

	        jd(a, b, d, null, c);
	      }
	    }
	  }
	}

	function yc(a, b, c, d) {
	  var e = xb(d);
	  e = wc(e);

	  if (null !== e) {
	    var f = Zb(e);
	    if (null === f) e = null;else {
	      var g = f.tag;

	      if (13 === g) {
	        e = $b(f);
	        if (null !== e) return e;
	        e = null;
	      } else if (3 === g) {
	        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	        e = null;
	      } else f !== e && (e = null);
	    }
	  }

	  jd(a, b, d, e, c);
	  return null;
	}

	var kd = null,
	    ld = null,
	    md = null;

	function nd() {
	  if (md) return md;
	  var a,
	      b = ld,
	      c = b.length,
	      d,
	      e = "value" in kd ? kd.value : kd.textContent,
	      f = e.length;

	  for (a = 0; a < c && b[a] === e[a]; a++);

	  var g = c - a;

	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);

	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}

	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}

	function pd() {
	  return !0;
	}

	function qd() {
	  return !1;
	}

	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;

	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);

	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }

	  objectAssign(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}

	var sd = {
	  eventPhase: 0,
	  bubbles: 0,
	  cancelable: 0,
	  timeStamp: function (a) {
	    return a.timeStamp || Date.now();
	  },
	  defaultPrevented: 0,
	  isTrusted: 0
	},
	    td = rd(sd),
	    ud = objectAssign({}, sd, {
	  view: 0,
	  detail: 0
	}),
	    vd = rd(ud),
	    wd,
	    xd,
	    yd,
	    Ad = objectAssign({}, ud, {
	  screenX: 0,
	  screenY: 0,
	  clientX: 0,
	  clientY: 0,
	  pageX: 0,
	  pageY: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  getModifierState: zd,
	  button: 0,
	  buttons: 0,
	  relatedTarget: function (a) {
	    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	  },
	  movementX: function (a) {
	    if ("movementX" in a) return a.movementX;
	    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	    return wd;
	  },
	  movementY: function (a) {
	    return "movementY" in a ? a.movementY : xd;
	  }
	}),
	    Bd = rd(Ad),
	    Cd = objectAssign({}, Ad, {
	  dataTransfer: 0
	}),
	    Dd = rd(Cd),
	    Ed = objectAssign({}, ud, {
	  relatedTarget: 0
	}),
	    Fd = rd(Ed),
	    Gd = objectAssign({}, sd, {
	  animationName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Hd = rd(Gd),
	    Id = objectAssign({}, sd, {
	  clipboardData: function (a) {
	    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	  }
	}),
	    Jd = rd(Id),
	    Kd = objectAssign({}, sd, {
	  data: 0
	}),
	    Ld = rd(Kd),
	    Md = {
	  Esc: "Escape",
	  Spacebar: " ",
	  Left: "ArrowLeft",
	  Up: "ArrowUp",
	  Right: "ArrowRight",
	  Down: "ArrowDown",
	  Del: "Delete",
	  Win: "OS",
	  Menu: "ContextMenu",
	  Apps: "ContextMenu",
	  Scroll: "ScrollLock",
	  MozPrintableKey: "Unidentified"
	},
	    Nd = {
	  8: "Backspace",
	  9: "Tab",
	  12: "Clear",
	  13: "Enter",
	  16: "Shift",
	  17: "Control",
	  18: "Alt",
	  19: "Pause",
	  20: "CapsLock",
	  27: "Escape",
	  32: " ",
	  33: "PageUp",
	  34: "PageDown",
	  35: "End",
	  36: "Home",
	  37: "ArrowLeft",
	  38: "ArrowUp",
	  39: "ArrowRight",
	  40: "ArrowDown",
	  45: "Insert",
	  46: "Delete",
	  112: "F1",
	  113: "F2",
	  114: "F3",
	  115: "F4",
	  116: "F5",
	  117: "F6",
	  118: "F7",
	  119: "F8",
	  120: "F9",
	  121: "F10",
	  122: "F11",
	  123: "F12",
	  144: "NumLock",
	  145: "ScrollLock",
	  224: "Meta"
	},
	    Od = {
	  Alt: "altKey",
	  Control: "ctrlKey",
	  Meta: "metaKey",
	  Shift: "shiftKey"
	};

	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}

	function zd() {
	  return Pd;
	}

	var Qd = objectAssign({}, ud, {
	  key: function (a) {
	    if (a.key) {
	      var b = Md[a.key] || a.key;
	      if ("Unidentified" !== b) return b;
	    }

	    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	  },
	  code: 0,
	  location: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  repeat: 0,
	  locale: 0,
	  getModifierState: zd,
	  charCode: function (a) {
	    return "keypress" === a.type ? od(a) : 0;
	  },
	  keyCode: function (a) {
	    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  },
	  which: function (a) {
	    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  }
	}),
	    Rd = rd(Qd),
	    Sd = objectAssign({}, Ad, {
	  pointerId: 0,
	  width: 0,
	  height: 0,
	  pressure: 0,
	  tangentialPressure: 0,
	  tiltX: 0,
	  tiltY: 0,
	  twist: 0,
	  pointerType: 0,
	  isPrimary: 0
	}),
	    Td = rd(Sd),
	    Ud = objectAssign({}, ud, {
	  touches: 0,
	  targetTouches: 0,
	  changedTouches: 0,
	  altKey: 0,
	  metaKey: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  getModifierState: zd
	}),
	    Vd = rd(Ud),
	    Wd = objectAssign({}, sd, {
	  propertyName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Xd = rd(Wd),
	    Yd = objectAssign({}, Ad, {
	  deltaX: function (a) {
	    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	  },
	  deltaY: function (a) {
	    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	  },
	  deltaZ: 0,
	  deltaMode: 0
	}),
	    Zd = rd(Yd),
	    $d = [9, 13, 27, 32],
	    ae$1 = fa && "CompositionEvent" in window,
	    be = null;
	fa && "documentMode" in document && (be = document.documentMode);
	var ce$1 = fa && "TextEvent" in window && !be,
	    de = fa && (!ae$1 || be && 8 < be && 11 >= be),
	    ee$1 = String.fromCharCode(32),
	    fe$1 = !1;

	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);

	    case "keydown":
	      return 229 !== b.keyCode;

	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;

	    default:
	      return !1;
	  }
	}

	function he$1(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}

	var ie$1 = !1;

	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he$1(b);

	    case "keypress":
	      if (32 !== b.which) return null;
	      fe$1 = !0;
	      return ee$1;

	    case "textInput":
	      return a = b.data, a === ee$1 && fe$1 ? null : a;

	    default:
	      return null;
	  }
	}

	function ke(a, b) {
	  if (ie$1) return "compositionend" === a || !ae$1 && ge(a, b) ? (a = nd(), md = ld = kd = null, ie$1 = !1, a) : null;

	  switch (a) {
	    case "paste":
	      return null;

	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }

	      return null;

	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;

	    default:
	      return null;
	  }
	}

	var le$1 = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};

	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le$1[a.type] : "textarea" === b ? !0 : !1;
	}

	function ne$1(a, b, c, d) {
	  Eb(d);
	  b = oe$1(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}

	var pe = null,
	    qe = null;

	function re$1(a) {
	  se$1(a, 0);
	}

	function te$1(a) {
	  var b = ue$1(a);
	  if (Wa(b)) return a;
	}

	function ve$1(a, b) {
	  if ("change" === a) return b;
	}

	var we = !1;

	if (fa) {
	  var xe;

	  if (fa) {
	    var ye = ("oninput" in document);

	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }

	    xe = ye;
	  } else xe = !1;

	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}

	function Ae() {
	  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}

	function Be(a) {
	  if ("value" === a.propertyName && te$1(qe)) {
	    var b = [];
	    ne$1(b, qe, a, xb(a));
	    a = re$1;
	    if (Kb) a(b);else {
	      Kb = !0;

	      try {
	        Gb(a, b);
	      } finally {
	        Kb = !1, Mb();
	      }
	    }
	  }
	}

	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}

	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe);
	}

	function Ee(a, b) {
	  if ("click" === a) return te$1(b);
	}

	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te$1(b);
	}

	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}

	var He = "function" === typeof Object.is ? Object.is : Ge,
	    Ie = Object.prototype.hasOwnProperty;

	function Je(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	      d = Object.keys(b);
	  if (c.length !== d.length) return !1;

	  for (d = 0; d < c.length; d++) if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;

	  return !0;
	}

	function Ke(a) {
	  for (; a && a.firstChild;) a = a.firstChild;

	  return a;
	}

	function Le(a, b) {
	  var c = Ke(a);
	  a = 0;

	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }

	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }

	        c = c.parentNode;
	      }

	      c = void 0;
	    }

	    c = Ke(c);
	  }
	}

	function Me(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}

	function Ne() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }

	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }

	  return b;
	}

	function Oe(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}

	var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
	    Qe = null,
	    Re = null,
	    Se = null,
	    Te = !1;

	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Je(Se, d) || (Se = d, d = oe$1(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}

	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);

	for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++) Nc.set(Ve[We], 0);

	ea("onMouseEnter", ["mouseout", "mouseover"]);
	ea("onMouseLeave", ["mouseout", "mouseover"]);
	ea("onPointerEnter", ["pointerout", "pointerover"]);
	ea("onPointerLeave", ["pointerout", "pointerover"]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));

	function Ze(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Yb(d, b, void 0, a);
	  a.currentTarget = null;
	}

	function se$1(a, b) {
	  b = 0 !== (b & 4);

	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	        e = d.event;
	    d = d.listeners;

	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	            k = h.instance,
	            l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      }
	    }
	  }

	  if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}

	function G$2(a, b) {
	  var c = $e(b),
	      d = a + "__bubble";
	  c.has(d) || (af(b, a, 2, !1), c.add(d));
	}

	var bf = "_reactListening" + Math.random().toString(36).slice(2);

	function cf(a) {
	  a[bf] || (a[bf] = !0, ba.forEach(function (b) {
	    Ye.has(b) || df(b, !1, a, null);
	    df(b, !0, a, null);
	  }));
	}

	function df(a, b, c, d) {
	  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
	      f = c;
	  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);

	  if (null !== d && !b && Ye.has(a)) {
	    if ("scroll" !== a) return;
	    e |= 2;
	    f = d;
	  }

	  var g = $e(f),
	      h = a + "__" + (b ? "capture" : "bubble");
	  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}

	function af(a, b, c, d) {
	  var e = Nc.get(b);

	  switch (void 0 === e ? 2 : e) {
	    case 0:
	      e = gd;
	      break;

	    case 1:
	      e = id;
	      break;

	    default:
	      e = hd;
	  }

	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}

	function jd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;

	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }

	      for (; null !== h;) {
	        g = wc(h);
	        if (null === g) return;
	        k = g.tag;

	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }

	        h = h.parentNode;
	      }
	    }

	    d = d.return;
	  }
	  Nb(function () {
	    var d = f,
	        e = xb(c),
	        g = [];

	    a: {
	      var h = Mc.get(a);

	      if (void 0 !== h) {
	        var k = td,
	            x = a;

	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;

	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;

	          case "focusin":
	            x = "focus";
	            k = Fd;
	            break;

	          case "focusout":
	            x = "blur";
	            k = Fd;
	            break;

	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;

	          case "click":
	            if (2 === c.button) break a;

	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;

	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;

	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;

	          case Ic:
	          case Jc:
	          case Kc:
	            k = Hd;
	            break;

	          case Lc:
	            k = Xd;
	            break;

	          case "scroll":
	            k = vd;
	            break;

	          case "wheel":
	            k = Zd;
	            break;

	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;

	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }

	        var w = 0 !== (b & 4),
	            z = !w && "scroll" === a,
	            u = w ? null !== h ? h + "Capture" : null : h;
	        w = [];

	        for (var t = d, q; null !== t;) {
	          q = t;
	          var v = q.stateNode;
	          5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	          if (z) break;
	          t = t.return;
	        }

	        0 < w.length && (h = new k(h, x, null, c, e), g.push({
	          event: h,
	          listeners: w
	        }));
	      }
	    }

	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;

	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;

	          if (k) {
	            if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	          } else k = null, x = d;

	          if (k !== x) {
	            w = Bd;
	            v = "onMouseLeave";
	            u = "onMouseEnter";
	            t = "mouse";
	            if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	            z = null == k ? h : ue$1(k);
	            q = null == x ? h : ue$1(x);
	            h = new w(v, t + "leave", k, c, e);
	            h.target = z;
	            h.relatedTarget = q;
	            v = null;
	            wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	            z = v;
	            if (k && x) b: {
	              w = k;
	              u = x;
	              t = 0;

	              for (q = w; q; q = gf(q)) t++;

	              q = 0;

	              for (v = u; v; v = gf(v)) q++;

	              for (; 0 < t - q;) w = gf(w), t--;

	              for (; 0 < q - t;) u = gf(u), q--;

	              for (; t--;) {
	                if (w === u || null !== u && w === u.alternate) break b;
	                w = gf(w);
	                u = gf(u);
	              }

	              w = null;
	            } else w = null;
	            null !== k && hf(g, h, k, w, !1);
	            null !== x && null !== z && hf(g, z, x, w, !0);
	          }
	        }
	      }

	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var J = ve$1;else if (me(h)) {
	          if (we) J = Fe;else {
	            J = De;
	            var K = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);

	        if (J && (J = J(a, d))) {
	          ne$1(g, J, c, e);
	          break a;
	        }

	        K && K(a, h, d);
	        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	      }

	      K = d ? ue$1(d) : window;

	      switch (a) {
	        case "focusin":
	          if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
	          break;

	        case "focusout":
	          Se = Re = Qe = null;
	          break;

	        case "mousedown":
	          Te = !0;
	          break;

	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;

	        case "selectionchange":
	          if (Pe) break;

	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }

	      var Q;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var L = "onCompositionStart";
	            break b;

	          case "compositionend":
	            L = "onCompositionEnd";
	            break b;

	          case "compositionupdate":
	            L = "onCompositionUpdate";
	            break b;
	        }

	        L = void 0;
	      } else ie$1 ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	      L && (de && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie$1 && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), K = oe$1(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	        event: L,
	        listeners: K
	      }), Q ? L.data = Q : (Q = he$1(c), null !== Q && (L.data = Q))));
	      if (Q = ce$1 ? je(a, c) : ke(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = Q);
	    }

	    se$1(g, b);
	  });
	}

	function ef(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}

	function oe$1(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	        f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	    a = a.return;
	  }

	  return d;
	}

	function gf(a) {
	  if (null === a) return null;

	  do a = a.return; while (a && 5 !== a.tag);

	  return a ? a : null;
	}

	function hf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	        k = h.alternate,
	        l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	    c = c.return;
	  }

	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}

	function jf() {}

	var kf = null,
	    lf = null;

	function mf(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }

	  return !1;
	}

	function nf(a, b) {
	  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}

	var of = "function" === typeof setTimeout ? setTimeout : void 0,
	    pf = "function" === typeof clearTimeout ? clearTimeout : void 0;

	function qf(a) {
	  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}

	function rf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	  }

	  return a;
	}

	function sf(a) {
	  a = a.previousSibling;

	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;

	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }

	    a = a.previousSibling;
	  }

	  return null;
	}

	var tf = 0;

	function uf(a) {
	  return {
	    $$typeof: Ga,
	    toString: a,
	    valueOf: a
	  };
	}

	var vf = Math.random().toString(36).slice(2),
	    wf = "__reactFiber$" + vf,
	    xf = "__reactProps$" + vf,
	    ff = "__reactContainer$" + vf,
	    yf = "__reactEvents$" + vf;

	function wc(a) {
	  var b = a[wf];
	  if (b) return b;

	  for (var c = a.parentNode; c;) {
	    if (b = c[ff] || c[wf]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
	        if (c = a[wf]) return c;
	        a = sf(a);
	      }
	      return b;
	    }

	    a = c;
	    c = a.parentNode;
	  }

	  return null;
	}

	function Cb(a) {
	  a = a[wf] || a[ff];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}

	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(y$3(33));
	}

	function Db(a) {
	  return a[xf] || null;
	}

	function $e(a) {
	  var b = a[yf];
	  void 0 === b && (b = a[yf] = new Set());
	  return b;
	}

	var zf = [],
	    Af = -1;

	function Bf(a) {
	  return {
	    current: a
	  };
	}

	function H$2(a) {
	  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}

	function I$2(a, b) {
	  Af++;
	  zf[Af] = a.current;
	  a.current = b;
	}

	var Cf = {},
	    M$1 = Bf(Cf),
	    N$1 = Bf(!1),
	    Df = Cf;

	function Ef(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Cf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	      f;

	  for (f in c) e[f] = b[f];

	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}

	function Ff(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}

	function Gf() {
	  H$2(N$1);
	  H$2(M$1);
	}

	function Hf(a, b, c) {
	  if (M$1.current !== Cf) throw Error(y$3(168));
	  I$2(M$1, b);
	  I$2(N$1, c);
	}

	function If(a, b, c) {
	  var d = a.stateNode;
	  a = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();

	  for (var e in d) if (!(e in a)) throw Error(y$3(108, Ra(b) || "Unknown", e));

	  return objectAssign({}, c, d);
	}

	function Jf(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	  Df = M$1.current;
	  I$2(M$1, a);
	  I$2(N$1, N$1.current);
	  return !0;
	}

	function Kf(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(y$3(169));
	  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H$2(N$1), H$2(M$1), I$2(M$1, a)) : H$2(N$1);
	  I$2(N$1, c);
	}

	var Lf = null,
	    Mf = null,
	    Nf = scheduler.unstable_runWithPriority,
	    Of = scheduler.unstable_scheduleCallback,
	    Pf = scheduler.unstable_cancelCallback,
	    Qf = scheduler.unstable_shouldYield,
	    Rf = scheduler.unstable_requestPaint,
	    Sf = scheduler.unstable_now,
	    Tf = scheduler.unstable_getCurrentPriorityLevel,
	    Uf = scheduler.unstable_ImmediatePriority,
	    Vf = scheduler.unstable_UserBlockingPriority,
	    Wf = scheduler.unstable_NormalPriority,
	    Xf = scheduler.unstable_LowPriority,
	    Yf = scheduler.unstable_IdlePriority,
	    Zf = {},
	    $f = void 0 !== Rf ? Rf : function () {},
	    ag = null,
	    bg = null,
	    cg = !1,
	    dg = Sf(),
	    O$1 = 1E4 > dg ? Sf : function () {
	  return Sf() - dg;
	};

	function eg() {
	  switch (Tf()) {
	    case Uf:
	      return 99;

	    case Vf:
	      return 98;

	    case Wf:
	      return 97;

	    case Xf:
	      return 96;

	    case Yf:
	      return 95;

	    default:
	      throw Error(y$3(332));
	  }
	}

	function fg(a) {
	  switch (a) {
	    case 99:
	      return Uf;

	    case 98:
	      return Vf;

	    case 97:
	      return Wf;

	    case 96:
	      return Xf;

	    case 95:
	      return Yf;

	    default:
	      throw Error(y$3(332));
	  }
	}

	function gg(a, b) {
	  a = fg(a);
	  return Nf(a, b);
	}

	function hg(a, b, c) {
	  a = fg(a);
	  return Of(a, b, c);
	}

	function ig() {
	  if (null !== bg) {
	    var a = bg;
	    bg = null;
	    Pf(a);
	  }

	  jg();
	}

	function jg() {
	  if (!cg && null !== ag) {
	    cg = !0;
	    var a = 0;

	    try {
	      var b = ag;
	      gg(99, function () {
	        for (; a < b.length; a++) {
	          var c = b[a];

	          do c = c(!0); while (null !== c);
	        }
	      });
	      ag = null;
	    } catch (c) {
	      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	    } finally {
	      cg = !1;
	    }
	  }
	}

	var kg = ra.ReactCurrentBatchConfig;

	function lg(a, b) {
	  if (a && a.defaultProps) {
	    b = objectAssign({}, b);
	    a = a.defaultProps;

	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);

	    return b;
	  }

	  return b;
	}

	var mg = Bf(null),
	    ng = null,
	    og = null,
	    pg = null;

	function qg() {
	  pg = og = ng = null;
	}

	function rg(a) {
	  var b = mg.current;
	  H$2(mg);
	  a.type._context._currentValue = b;
	}

	function sg(a, b) {
	  for (; null !== a;) {
	    var c = a.alternate;
	    if ((a.childLanes & b) === b) {
	      if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
	    } else a.childLanes |= b, null !== c && (c.childLanes |= b);
	    a = a.return;
	  }
	}

	function tg(a, b) {
	  ng = a;
	  pg = og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}

	function vg(a, b) {
	  if (pg !== a && !1 !== b && 0 !== b) {
	    if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	    b = {
	      context: a,
	      observedBits: b,
	      next: null
	    };

	    if (null === og) {
	      if (null === ng) throw Error(y$3(308));
	      og = b;
	      ng.dependencies = {
	        lanes: 0,
	        firstContext: b,
	        responders: null
	      };
	    } else og = og.next = b;
	  }

	  return a._currentValue;
	}

	var wg = !1;

	function xg(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null
	    },
	    effects: null
	  };
	}

	function yg(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}

	function zg(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}

	function Ag(a, b) {
	  a = a.updateQueue;

	  if (null !== a) {
	    a = a.shared;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	}

	function Bg(a, b) {
	  var c = a.updateQueue,
	      d = a.alternate;

	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	        f = null;
	    c = c.firstBaseUpdate;

	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);

	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;

	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }

	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}

	function Cg(a, b, c, d) {
	  var e = a.updateQueue;
	  wg = !1;
	  var f = e.firstBaseUpdate,
	      g = e.lastBaseUpdate,
	      h = e.shared.pending;

	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	        l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var n = a.alternate;

	    if (null !== n) {
	      n = n.updateQueue;
	      var A = n.lastBaseUpdate;
	      A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	    }
	  }

	  if (null !== f) {
	    A = e.baseState;
	    g = 0;
	    n = l = k = null;

	    do {
	      h = f.lane;
	      var p = f.eventTime;

	      if ((d & h) === h) {
	        null !== n && (n = n.next = {
	          eventTime: p,
	          lane: 0,
	          tag: f.tag,
	          payload: f.payload,
	          callback: f.callback,
	          next: null
	        });

	        a: {
	          var C = a,
	              x = f;
	          h = b;
	          p = c;

	          switch (x.tag) {
	            case 1:
	              C = x.payload;

	              if ("function" === typeof C) {
	                A = C.call(p, A, h);
	                break a;
	              }

	              A = C;
	              break a;

	            case 3:
	              C.flags = C.flags & -4097 | 64;

	            case 0:
	              C = x.payload;
	              h = "function" === typeof C ? C.call(p, A, h) : C;
	              if (null === h || void 0 === h) break a;
	              A = objectAssign({}, A, h);
	              break a;

	            case 2:
	              wg = !0;
	          }
	        }

	        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
	      } else p = {
	        eventTime: p,
	        lane: h,
	        tag: f.tag,
	        payload: f.payload,
	        callback: f.callback,
	        next: null
	      }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;

	      f = f.next;
	      if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	    } while (1);

	    null === n && (k = A);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = n;
	    Dg |= g;
	    a.lanes = g;
	    a.memoizedState = A;
	  }
	}

	function Eg(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	        e = d.callback;

	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(y$3(191, e));
	      e.call(d);
	    }
	  }
	}

	var Fg = new react.Component().refs;

	function Gg(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : objectAssign({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}

	var Kg = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Zb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = Hg(),
	        d = Ig(a),
	        e = zg(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    Ag(a, e);
	    Jg(a, d, c);
	  }
	};

	function Lg(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
	}

	function Mg(a, b, c) {
	  var d = !1,
	      e = Cf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = Kg;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}

	function Ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}

	function Og(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = Fg;
	  xg(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M$1.current, e.context = Ef(a, f));
	  Cg(a, c, e, d);
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4);
	}

	var Pg = Array.isArray;

	function Qg(a, b, c) {
	  a = c.ref;

	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;

	      if (c) {
	        if (1 !== c.tag) throw Error(y$3(309));
	        var d = c.stateNode;
	      }

	      if (!d) throw Error(y$3(147, a));
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

	      b = function (a) {
	        var b = d.refs;
	        b === Fg && (b = d.refs = {});
	        null === a ? delete b[e] : b[e] = a;
	      };

	      b._stringRef = e;
	      return b;
	    }

	    if ("string" !== typeof a) throw Error(y$3(284));
	    if (!c._owner) throw Error(y$3(290, a));
	  }

	  return a;
	}

	function Rg(a, b) {
	  if ("textarea" !== a.type) throw Error(y$3(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}

	function Sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.flags = 8;
	    }
	  }

	  function c(c, d) {
	    if (!a) return null;

	    for (; null !== d;) b(c, d), d = d.sibling;

	    return null;
	  }

	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

	    return a;
	  }

	  function e(a, b) {
	    a = Tg(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }

	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	    b.flags = 2;
	    return c;
	  }

	  function g(b) {
	    a && null === b.alternate && (b.flags = 2);
	    return b;
	  }

	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function k(a, b, c, d) {
	    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	    d = Vg(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = Qg(a, b, c);
	    d.return = a;
	    return d;
	  }

	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }

	  function n(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function A(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;

	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case sa:
	          return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;

	        case ta:
	          return b = Wg(b, a.mode, c), b.return = a, b;
	      }

	      if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	      Rg(a, b);
	    }

	    return null;
	  }

	  function p(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case sa:
	          return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

	        case ta:
	          return c.key === e ? l(a, b, c, d) : null;
	      }

	      if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	      Rg(a, c);
	    }

	    return null;
	  }

	  function C(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case sa:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

	        case ta:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	      }

	      if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	      Rg(b, d);
	    }

	    return null;
	  }

	  function x(e, g, h, k) {
	    for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var n = p(e, u, h[z], k);

	      if (null === n) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, z);
	      null === t ? l = n : t.sibling = n;
	      t = n;
	      u = q;
	    }

	    if (z === h.length) return c(e, u), l;

	    if (null === u) {
	      for (; z < h.length; z++) u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);

	      return l;
	    }

	    for (u = d(e, u); z < h.length; z++) q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  function w(e, g, h, k) {
	    var l = La(h);
	    if ("function" !== typeof l) throw Error(y$3(150));
	    h = l.call(h);
	    if (null == h) throw Error(y$3(151));

	    for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var w = p(e, u, n.value, k);

	      if (null === w) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === w.alternate && b(e, u);
	      g = f(w, g, z);
	      null === t ? l = w : t.sibling = w;
	      t = w;
	      u = q;
	    }

	    if (n.done) return c(e, u), l;

	    if (null === u) {
	      for (; !n.done; z++, n = h.next()) n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	      return l;
	    }

	    for (u = d(e, u); !n.done; z++, n = h.next()) n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  return function (a, d, f, h) {
	    var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	    k && (f = f.props.children);
	    var l = "object" === typeof f && null !== f;
	    if (l) switch (f.$$typeof) {
	      case sa:
	        a: {
	          l = f.key;

	          for (k = d; null !== k;) {
	            if (k.key === l) {
	              switch (k.tag) {
	                case 7:
	                  if (f.type === ua) {
	                    c(a, k.sibling);
	                    d = e(k, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	                  break;

	                default:
	                  if (k.elementType === f.type) {
	                    c(a, k.sibling);
	                    d = e(k, f.props);
	                    d.ref = Qg(a, k, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	              }

	              c(a, k);
	              break;
	            } else b(a, k);

	            k = k.sibling;
	          }

	          f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	        }

	        return g(a);

	      case ta:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
	              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                c(a, d.sibling);
	                d = e(d, f.children || []);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, d);
	                break;
	              }
	            } else b(a, d);
	            d = d.sibling;
	          }

	          d = Wg(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }

	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	    if (Pg(f)) return x(a, d, f, h);
	    if (La(f)) return w(a, d, f, h);
	    l && Rg(a, f);
	    if ("undefined" === typeof f && !k) switch (a.tag) {
	      case 1:
	      case 22:
	      case 0:
	      case 11:
	      case 15:
	        throw Error(y$3(152, Ra(a.type) || "Component"));
	    }
	    return c(a, d);
	  };
	}

	var Yg = Sg(!0),
	    Zg = Sg(!1),
	    $g = {},
	    ah = Bf($g),
	    bh = Bf($g),
	    ch = Bf($g);

	function dh(a) {
	  if (a === $g) throw Error(y$3(174));
	  return a;
	}

	function eh(a, b) {
	  I$2(ch, b);
	  I$2(bh, a);
	  I$2(ah, $g);
	  a = b.nodeType;

	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	      break;

	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	  }

	  H$2(ah);
	  I$2(ah, b);
	}

	function fh() {
	  H$2(ah);
	  H$2(bh);
	  H$2(ch);
	}

	function gh(a) {
	  dh(ch.current);
	  var b = dh(ah.current);
	  var c = mb(b, a.type);
	  b !== c && (I$2(bh, a), I$2(ah, c));
	}

	function hh(a) {
	  bh.current === a && (H$2(ah), H$2(bh));
	}

	var P$1 = Bf(0);

	function ih(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 64)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }

	    if (b === a) break;

	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }

	    b.sibling.return = b.return;
	    b = b.sibling;
	  }

	  return null;
	}

	var jh = null,
	    kh = null,
	    lh = !1;

	function mh(a, b) {
	  var c = nh(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.flags = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}

	function oh(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;

	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

	    case 13:
	      return !1;

	    default:
	      return !1;
	  }
	}

	function ph(a) {
	  if (lh) {
	    var b = kh;

	    if (b) {
	      var c = b;

	      if (!oh(a, b)) {
	        b = rf(c.nextSibling);

	        if (!b || !oh(a, b)) {
	          a.flags = a.flags & -1025 | 2;
	          lh = !1;
	          jh = a;
	          return;
	        }

	        mh(jh, c);
	      }

	      jh = a;
	      kh = rf(b.firstChild);
	    } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	  }
	}

	function qh(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;

	  jh = a;
	}

	function rh(a) {
	  if (a !== jh) return !1;
	  if (!lh) return qh(a), lh = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) mh(a, b), b = rf(b.nextSibling);
	  qh(a);

	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(y$3(317));

	    a: {
	      a = a.nextSibling;

	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;

	          if ("/$" === c) {
	            if (0 === b) {
	              kh = rf(a.nextSibling);
	              break a;
	            }

	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }

	        a = a.nextSibling;
	      }

	      kh = null;
	    }
	  } else kh = jh ? rf(a.stateNode.nextSibling) : null;

	  return !0;
	}

	function sh() {
	  kh = jh = null;
	  lh = !1;
	}

	var th = [];

	function uh() {
	  for (var a = 0; a < th.length; a++) th[a]._workInProgressVersionPrimary = null;

	  th.length = 0;
	}

	var vh = ra.ReactCurrentDispatcher,
	    wh = ra.ReactCurrentBatchConfig,
	    xh = 0,
	    R$1 = null,
	    S$1 = null,
	    T$1 = null,
	    yh = !1,
	    zh = !1;

	function Ah() {
	  throw Error(y$3(321));
	}

	function Bh(a, b) {
	  if (null === b) return !1;

	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;

	  return !0;
	}

	function Ch(a, b, c, d, e, f) {
	  xh = f;
	  R$1 = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	  a = c(d, e);

	  if (zh) {
	    f = 0;

	    do {
	      zh = !1;
	      if (!(25 > f)) throw Error(y$3(301));
	      f += 1;
	      T$1 = S$1 = null;
	      b.updateQueue = null;
	      vh.current = Fh;
	      a = c(d, e);
	    } while (zh);
	  }

	  vh.current = Gh;
	  b = null !== S$1 && null !== S$1.next;
	  xh = 0;
	  T$1 = S$1 = R$1 = null;
	  yh = !1;
	  if (b) throw Error(y$3(300));
	  return a;
	}

	function Hh() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  return T$1;
	}

	function Ih() {
	  if (null === S$1) {
	    var a = R$1.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = S$1.next;

	  var b = null === T$1 ? R$1.memoizedState : T$1.next;
	  if (null !== b) T$1 = b, S$1 = a;else {
	    if (null === a) throw Error(y$3(310));
	    S$1 = a;
	    a = {
	      memoizedState: S$1.memoizedState,
	      baseState: S$1.baseState,
	      baseQueue: S$1.baseQueue,
	      queue: S$1.queue,
	      next: null
	    };
	    null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  }
	  return T$1;
	}

	function Jh(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}

	function Kh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$3(311));
	  c.lastRenderedReducer = a;
	  var d = S$1,
	      e = d.baseQueue,
	      f = c.pending;

	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }

	    d.baseQueue = e = f;
	    c.pending = null;
	  }

	  if (null !== e) {
	    e = e.next;
	    d = d.baseState;
	    var h = g = f = null,
	        k = e;

	    do {
	      var l = k.lane;
	      if ((xh & l) === l) null !== h && (h = h.next = {
	        lane: 0,
	        action: k.action,
	        eagerReducer: k.eagerReducer,
	        eagerState: k.eagerState,
	        next: null
	      }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
	        var n = {
	          lane: l,
	          action: k.action,
	          eagerReducer: k.eagerReducer,
	          eagerState: k.eagerState,
	          next: null
	        };
	        null === h ? (g = h = n, f = d) : h = h.next = n;
	        R$1.lanes |= l;
	        Dg |= l;
	      }
	      k = k.next;
	    } while (null !== k && k !== e);

	    null === h ? f = d : h.next = g;
	    He(d, b.memoizedState) || (ug = !0);
	    b.memoizedState = d;
	    b.baseState = f;
	    b.baseQueue = h;
	    c.lastRenderedState = d;
	  }

	  return [b.memoizedState, c.dispatch];
	}

	function Lh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$3(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	      e = c.pending,
	      f = b.memoizedState;

	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;

	    do f = a(f, g.action), g = g.next; while (g !== e);

	    He(f, b.memoizedState) || (ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }

	  return [f, d];
	}

	function Mh(a, b, c) {
	  var d = b._getVersion;
	  d = d(b._source);
	  var e = b._workInProgressVersionPrimary;
	  if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	  if (a) return c(b._source);
	  th.push(b);
	  throw Error(y$3(350));
	}

	function Nh(a, b, c, d) {
	  var e = U$1;
	  if (null === e) throw Error(y$3(349));
	  var f = b._getVersion,
	      g = f(b._source),
	      h = vh.current,
	      k = h.useState(function () {
	    return Mh(e, b, c);
	  }),
	      l = k[1],
	      n = k[0];
	  k = T$1;
	  var A = a.memoizedState,
	      p = A.refs,
	      C = p.getSnapshot,
	      x = A.source;
	  A = A.subscribe;
	  var w = R$1;
	  a.memoizedState = {
	    refs: p,
	    source: b,
	    subscribe: d
	  };
	  h.useEffect(function () {
	    p.getSnapshot = c;
	    p.setSnapshot = l;
	    var a = f(b._source);

	    if (!He(g, a)) {
	      a = c(b._source);
	      He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	      a = e.mutableReadLanes;
	      e.entangledLanes |= a;

	      for (var d = e.entanglements, h = a; 0 < h;) {
	        var k = 31 - Vc(h),
	            v = 1 << k;
	        d[k] |= a;
	        h &= ~v;
	      }
	    }
	  }, [c, b, d]);
	  h.useEffect(function () {
	    return d(b._source, function () {
	      var a = p.getSnapshot,
	          c = p.setSnapshot;

	      try {
	        c(a(b._source));
	        var d = Ig(w);
	        e.mutableReadLanes |= d & e.pendingLanes;
	      } catch (q) {
	        c(function () {
	          throw q;
	        });
	      }
	    });
	  }, [b, d]);
	  He(C, c) && He(x, b) && He(A, d) || (a = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: n
	  }, a.dispatch = l = Oh.bind(null, R$1, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	  return n;
	}

	function Ph(a, b, c) {
	  var d = Ih();
	  return Nh(d, a, b, c);
	}

	function Qh(a) {
	  var b = Hh();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = b.queue = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: a
	  };
	  a = a.dispatch = Oh.bind(null, R$1, a);
	  return [b.memoizedState, a];
	}

	function Rh(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = R$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null
	  }, R$1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}

	function Sh(a) {
	  var b = Hh();
	  a = {
	    current: a
	  };
	  return b.memoizedState = a;
	}

	function Th() {
	  return Ih().memoizedState;
	}

	function Uh(a, b, c, d) {
	  var e = Hh();
	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}

	function Vh(a, b, c, d) {
	  var e = Ih();
	  d = void 0 === d ? null : d;
	  var f = void 0;

	  if (null !== S$1) {
	    var g = S$1.memoizedState;
	    f = g.destroy;

	    if (null !== d && Bh(d, g.deps)) {
	      Rh(b, c, f, d);
	      return;
	    }
	  }

	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, f, d);
	}

	function Wh(a, b) {
	  return Uh(516, 4, a, b);
	}

	function Xh(a, b) {
	  return Vh(516, 4, a, b);
	}

	function Yh(a, b) {
	  return Vh(4, 2, a, b);
	}

	function Zh(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}

	function $h(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return Vh(4, 2, Zh.bind(null, b, a), c);
	}

	function ai() {}

	function bi(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}

	function ci(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}

	function di(a, b) {
	  var c = eg();
	  gg(98 > c ? 98 : c, function () {
	    a(!0);
	  });
	  gg(97 < c ? 97 : c, function () {
	    var c = wh.transition;
	    wh.transition = 1;

	    try {
	      a(!1), b();
	    } finally {
	      wh.transition = c;
	    }
	  });
	}

	function Oh(a, b, c) {
	  var d = Hg(),
	      e = Ig(a),
	      f = {
	    lane: e,
	    action: c,
	    eagerReducer: null,
	    eagerState: null,
	    next: null
	  },
	      g = b.pending;
	  null === g ? f.next = f : (f.next = g.next, g.next = f);
	  b.pending = f;
	  g = a.alternate;
	  if (a === R$1 || null !== g && g === R$1) zh = yh = !0;else {
	    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	      var h = b.lastRenderedState,
	          k = g(h, c);
	      f.eagerReducer = g;
	      f.eagerState = k;
	      if (He(k, h)) return;
	    } catch (l) {} finally {}
	    Jg(a, e, d);
	  }
	}

	var Gh = {
	  readContext: vg,
	  useCallback: Ah,
	  useContext: Ah,
	  useEffect: Ah,
	  useImperativeHandle: Ah,
	  useLayoutEffect: Ah,
	  useMemo: Ah,
	  useReducer: Ah,
	  useRef: Ah,
	  useState: Ah,
	  useDebugValue: Ah,
	  useDeferredValue: Ah,
	  useTransition: Ah,
	  useMutableSource: Ah,
	  useOpaqueIdentifier: Ah,
	  unstable_isNewReconciler: !1
	},
	    Dh = {
	  readContext: vg,
	  useCallback: function (a, b) {
	    Hh().memoizedState = [a, void 0 === b ? null : b];
	    return a;
	  },
	  useContext: vg,
	  useEffect: Wh,
	  useImperativeHandle: function (a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([a]) : null;
	    return Uh(4, 2, Zh.bind(null, b, a), c);
	  },
	  useLayoutEffect: function (a, b) {
	    return Uh(4, 2, a, b);
	  },
	  useMemo: function (a, b) {
	    var c = Hh();
	    b = void 0 === b ? null : b;
	    a = a();
	    c.memoizedState = [a, b];
	    return a;
	  },
	  useReducer: function (a, b, c) {
	    var d = Hh();
	    b = void 0 !== c ? c(b) : b;
	    d.memoizedState = d.baseState = b;
	    a = d.queue = {
	      pending: null,
	      dispatch: null,
	      lastRenderedReducer: a,
	      lastRenderedState: b
	    };
	    a = a.dispatch = Oh.bind(null, R$1, a);
	    return [d.memoizedState, a];
	  },
	  useRef: Sh,
	  useState: Qh,
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Qh(a),
	        c = b[0],
	        d = b[1];
	    Wh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Qh(!1),
	        b = a[0];
	    a = di.bind(null, a[1]);
	    Sh(a);
	    return [a, b];
	  },
	  useMutableSource: function (a, b, c) {
	    var d = Hh();
	    d.memoizedState = {
	      refs: {
	        getSnapshot: b,
	        setSnapshot: null
	      },
	      source: a,
	      subscribe: c
	    };
	    return Nh(d, a, b, c);
	  },
	  useOpaqueIdentifier: function () {
	    if (lh) {
	      var a = !1,
	          b = uf(function () {
	        a || (a = !0, c("r:" + (tf++).toString(36)));
	        throw Error(y$3(355));
	      }),
	          c = Qh(b)[1];
	      0 === (R$1.mode & 2) && (R$1.flags |= 516, Rh(5, function () {
	        c("r:" + (tf++).toString(36));
	      }, void 0, null));
	      return b;
	    }

	    b = "r:" + (tf++).toString(36);
	    Qh(b);
	    return b;
	  },
	  unstable_isNewReconciler: !1
	},
	    Eh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Kh,
	  useRef: Th,
	  useState: function () {
	    return Kh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Kh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Kh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Kh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    Fh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Lh,
	  useRef: Th,
	  useState: function () {
	    return Lh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Lh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Lh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Lh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    ei = ra.ReactCurrentOwner,
	    ug = !1;

	function fi(a, b, c, d) {
	  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}

	function gi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  tg(b, e);
	  d = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, d, e);
	  return b.child;
	}

	function ii(a, b, c, d, e, f) {
	  if (null === a) {
	    var g = c.type;
	    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	    a = Vg(c.type, null, d, b, b.mode, f);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }

	  g = a.child;
	  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	  b.flags |= 1;
	  a = Tg(g, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}

	function ki(a, b, c, d, e, f) {
	  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
	  return li(a, b, c, d, f);
	}

	function mi(a, b, c) {
	  var d = b.pendingProps,
	      e = d.children,
	      f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
	    if (0 === (b.mode & 4)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	      baseLanes: a
	    }, ni(b, a), null;
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	  fi(a, b, e, c);
	  return b.child;
	}

	function oi(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}

	function li(a, b, c, d, e) {
	  var f = Ff(c) ? Df : M$1.current;
	  f = Ef(b, f);
	  tg(b, e);
	  c = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, c, e);
	  return b.child;
	}

	function pi(a, b, c, d, e) {
	  if (Ff(c)) {
	    var f = !0;
	    Jf(b);
	  } else f = !1;

	  tg(b, e);
	  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	        h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	        l = c.contextType;
	    "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M$1.current, l = Ef(b, l));
	    var n = c.getDerivedStateFromProps,
	        A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	    wg = !1;
	    var p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || p !== k || N$1.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	  } else {
	    g = b.stateNode;
	    yg(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : lg(b.type, h);
	    g.props = l;
	    A = b.pendingProps;
	    p = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M$1.current, k = Ef(b, k));
	    var C = c.getDerivedStateFromProps;
	    (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	    wg = !1;
	    p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    var x = b.memoizedState;
	    h !== A || p !== x || N$1.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	  }
	  return qi(a, b, c, d, f, e);
	}

	function qi(a, b, c, d, e, f) {
	  oi(a, b);
	  var g = 0 !== (b.flags & 64);
	  if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	  d = b.stateNode;
	  ei.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && Kf(b, c, !0);
	  return b.child;
	}

	function ri(a) {
	  var b = a.stateNode;
	  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	  eh(a, b.containerInfo);
	}

	var si = {
	  dehydrated: null,
	  retryLane: 0
	};

	function ti(a, b, c) {
	  var d = b.pendingProps,
	      e = P$1.current,
	      f = !1,
	      g;
	  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	  I$2(P$1, e & 1);

	  if (null === a) {
	    void 0 !== d.fallback && ph(b);
	    a = d.children;
	    e = d.fallback;
	    if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, a;
	    if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, b.lanes = 33554432, a;
	    c = vi({
	      mode: "visible",
	      children: a
	    }, b.mode, c, null);
	    c.return = b;
	    return b.child = c;
	  }

	  if (null !== a.memoizedState) {
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	      baseLanes: c
	    } : {
	      baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	  }

	  if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	    baseLanes: c
	  } : {
	    baseLanes: e.baseLanes | c
	  }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	  c = xi(a, b, d.children, c);
	  b.memoizedState = null;
	  return c;
	}

	function ui(a, b, c, d) {
	  var e = a.mode,
	      f = a.child;
	  b = {
	    mode: "hidden",
	    children: b
	  };
	  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	  c = Xg(c, e, d, null);
	  f.return = a;
	  c.return = a;
	  f.sibling = c;
	  a.child = f;
	  return c;
	}

	function xi(a, b, c, d) {
	  var e = a.child;
	  a = e.sibling;
	  c = Tg(e, {
	    mode: "visible",
	    children: c
	  });
	  0 === (b.mode & 2) && (c.lanes = d);
	  c.return = b;
	  c.sibling = null;
	  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	  return b.child = c;
	}

	function wi(a, b, c, d, e) {
	  var f = b.mode,
	      g = a.child;
	  a = g.sibling;
	  var h = {
	    mode: "hidden",
	    children: c
	  };
	  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	  d.return = b;
	  c.return = b;
	  c.sibling = d;
	  b.child = c;
	  return d;
	}

	function yi(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  sg(a.return, b);
	}

	function zi(a, b, c, d, e, f) {
	  var g = a.memoizedState;
	  null === g ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e,
	    lastEffect: f
	  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}

	function Ai(a, b, c) {
	  var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	  fi(a, b, d.children, c);
	  d = P$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
	    if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;

	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }

	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  I$2(P$1, d);
	  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;

	      for (e = null; null !== c;) a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;

	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      zi(b, !1, e, c, f, b.lastEffect);
	      break;

	    case "backwards":
	      c = null;
	      e = b.child;

	      for (b.child = null; null !== e;) {
	        a = e.alternate;

	        if (null !== a && null === ih(a)) {
	          b.child = e;
	          break;
	        }

	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }

	      zi(b, !0, c, null, f, b.lastEffect);
	      break;

	    case "together":
	      zi(b, !1, null, null, void 0, b.lastEffect);
	      break;

	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}

	function hi(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  Dg |= b.lanes;

	  if (0 !== (c & b.childLanes)) {
	    if (null !== a && b.child !== a.child) throw Error(y$3(153));

	    if (null !== b.child) {
	      a = b.child;
	      c = Tg(a, a.pendingProps);
	      b.child = c;

	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;

	      c.sibling = null;
	    }

	    return b.child;
	  }

	  return null;
	}

	var Bi, Ci, Di, Ei;

	Bi = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};

	Ci = function () {};

	Di = function (a, b, c, d) {
	  var e = a.memoizedProps;

	  if (e !== d) {
	    a = b.stateNode;
	    dh(ah.current);
	    var f = null;

	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;

	      case "option":
	        e = eb(a, e);
	        d = eb(a, d);
	        f = [];
	        break;

	      case "select":
	        e = objectAssign({}, e, {
	          value: void 0
	        });
	        d = objectAssign({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;

	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;

	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	    }

	    vb(c, d);
	    var g;
	    c = null;

	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];

	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));

	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");

	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G$2("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	    }

	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};

	Ei = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};

	function Fi(a, b) {
	  if (!lh) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;

	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;

	      null === c ? a.tail = null : c.sibling = null;
	      break;

	    case "collapsed":
	      c = a.tail;

	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}

	function Gi(a, b, c) {
	  var d = b.pendingProps;

	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return null;

	    case 1:
	      return Ff(b.type) && Gf(), null;

	    case 3:
	      fh();
	      H$2(N$1);
	      H$2(M$1);
	      uh();
	      d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	      Ci(b);
	      return null;

	    case 5:
	      hh(b);
	      var e = dh(ch.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(y$3(166));
	          return null;
	        }

	        a = dh(ah.current);

	        if (rh(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[wf] = b;
	          d[xf] = f;

	          switch (c) {
	            case "dialog":
	              G$2("cancel", d);
	              G$2("close", d);
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$2("load", d);
	              break;

	            case "video":
	            case "audio":
	              for (a = 0; a < Xe.length; a++) G$2(Xe[a], d);

	              break;

	            case "source":
	              G$2("error", d);
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$2("error", d);
	              G$2("load", d);
	              break;

	            case "details":
	              G$2("toggle", d);
	              break;

	            case "input":
	              Za(d, f);
	              G$2("invalid", d);
	              break;

	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              G$2("invalid", d);
	              break;

	            case "textarea":
	              hb(d, f), G$2("invalid", d);
	          }

	          vb(c, f);
	          a = null;

	          for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G$2("scroll", d));

	          switch (c) {
	            case "input":
	              Va(d);
	              cb(d, f, !0);
	              break;

	            case "textarea":
	              Va(d);
	              jb(d);
	              break;

	            case "select":
	            case "option":
	              break;

	            default:
	              "function" === typeof f.onClick && (d.onclick = jf);
	          }

	          d = a;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          a === kb.html && (a = lb(c));
	          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[wf] = b;
	          a[xf] = d;
	          Bi(a, b, !1, !1);
	          b.stateNode = a;
	          g = wb(c, d);

	          switch (c) {
	            case "dialog":
	              G$2("cancel", a);
	              G$2("close", a);
	              e = d;
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$2("load", a);
	              e = d;
	              break;

	            case "video":
	            case "audio":
	              for (e = 0; e < Xe.length; e++) G$2(Xe[e], a);

	              e = d;
	              break;

	            case "source":
	              G$2("error", a);
	              e = d;
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$2("error", a);
	              G$2("load", a);
	              e = d;
	              break;

	            case "details":
	              G$2("toggle", a);
	              e = d;
	              break;

	            case "input":
	              Za(a, d);
	              e = Ya(a, d);
	              G$2("invalid", a);
	              break;

	            case "option":
	              e = eb(a, d);
	              break;

	            case "select":
	              a._wrapperState = {
	                wasMultiple: !!d.multiple
	              };
	              e = objectAssign({}, d, {
	                value: void 0
	              });
	              G$2("invalid", a);
	              break;

	            case "textarea":
	              hb(a, d);
	              e = gb(a, d);
	              G$2("invalid", a);
	              break;

	            default:
	              e = d;
	          }

	          vb(c, e);
	          var h = e;

	          for (f in h) if (h.hasOwnProperty(f)) {
	            var k = h[f];
	            "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G$2("scroll", a) : null != k && qa(a, f, k, g));
	          }

	          switch (c) {
	            case "input":
	              Va(a);
	              cb(a, d, !1);
	              break;

	            case "textarea":
	              Va(a);
	              jb(a);
	              break;

	            case "option":
	              null != d.value && a.setAttribute("value", "" + Sa(d.value));
	              break;

	            case "select":
	              a.multiple = !!d.multiple;
	              f = d.value;
	              null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	              break;

	            default:
	              "function" === typeof e.onClick && (a.onclick = jf);
	          }

	          mf(c, d) && (b.flags |= 4);
	        }

	        null !== b.ref && (b.flags |= 128);
	      }
	      return null;

	    case 6:
	      if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(y$3(166));
	        c = dh(ch.current);
	        dh(ah.current);
	        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	      }
	      return null;

	    case 13:
	      H$2(P$1);
	      d = b.memoizedState;
	      if (0 !== (b.flags & 64)) return b.lanes = c, b;
	      d = null !== d;
	      c = !1;
	      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	      if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P$1.current & 1)) 0 === V$1 && (V$1 = 3);else {
	        if (0 === V$1 || 3 === V$1) V$1 = 4;
	        null === U$1 || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U$1, W$1);
	      }
	      if (d || c) b.flags |= 4;
	      return null;

	    case 4:
	      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;

	    case 10:
	      return rg(b), null;

	    case 17:
	      return Ff(b.type) && Gf(), null;

	    case 19:
	      H$2(P$1);
	      d = b.memoizedState;
	      if (null === d) return null;
	      f = 0 !== (b.flags & 64);
	      g = d.rendering;
	      if (null === g) {
	        if (f) Fi(d, !1);else {
	          if (0 !== V$1 || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
	            g = ih(a);

	            if (null !== g) {
	              b.flags |= 64;
	              Fi(d, !1);
	              f = g.updateQueue;
	              null !== f && (b.updateQueue = f, b.flags |= 4);
	              null === d.lastEffect && (b.firstEffect = null);
	              b.lastEffect = d.lastEffect;
	              d = c;

	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;

	              I$2(P$1, P$1.current & 1 | 2);
	              return b.child;
	            }

	            a = a.sibling;
	          }
	          null !== d.tail && O$1() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        }
	      } else {
	        if (!f) if (a = ih(g), null !== a) {
	          if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	        } else 2 * O$1() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	      }
	      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O$1(), c.sibling = null, b = P$1.current, I$2(P$1, f ? b & 1 | 2 : b & 1), c) : null;

	    case 23:
	    case 24:
	      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	  }

	  throw Error(y$3(156, b.tag));
	}

	function Li(a) {
	  switch (a.tag) {
	    case 1:
	      Ff(a.type) && Gf();
	      var b = a.flags;
	      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 3:
	      fh();
	      H$2(N$1);
	      H$2(M$1);
	      uh();
	      b = a.flags;
	      if (0 !== (b & 64)) throw Error(y$3(285));
	      a.flags = b & -4097 | 64;
	      return a;

	    case 5:
	      return hh(a), null;

	    case 13:
	      return H$2(P$1), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 19:
	      return H$2(P$1), null;

	    case 4:
	      return fh(), null;

	    case 10:
	      return rg(a), null;

	    case 23:
	    case 24:
	      return Ki(), null;

	    default:
	      return null;
	  }
	}

	function Mi(a, b) {
	  try {
	    var c = "",
	        d = b;

	    do c += Qa(d), d = d.return; while (d);

	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }

	  return {
	    value: a,
	    source: b,
	    stack: e
	  };
	}

	function Ni(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}

	var Oi = "function" === typeof WeakMap ? WeakMap : Map;

	function Pi(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;

	  c.callback = function () {
	    Qi || (Qi = !0, Ri = d);
	    Ni(a, b);
	  };

	  return c;
	}

	function Si(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;

	  if ("function" === typeof d) {
	    var e = b.value;

	    c.payload = function () {
	      Ni(a, b);
	      return d(e);
	    };
	  }

	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}

	var Ui = "function" === typeof WeakSet ? WeakSet : Set;

	function Vi(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Wi(a, c);
	  } else b.current = null;
	}

	function Xi(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      return;

	    case 1:
	      if (b.flags & 256 && null !== a) {
	        var c = a.memoizedProps,
	            d = a.memoizedState;
	        a = b.stateNode;
	        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	        a.__reactInternalSnapshotBeforeUpdate = b;
	      }

	      return;

	    case 3:
	      b.flags & 256 && qf(b.stateNode.containerInfo);
	      return;

	    case 5:
	    case 6:
	    case 4:
	    case 17:
	      return;
	  }

	  throw Error(y$3(163));
	}

	function Yi(a, b, c) {
	  switch (c.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          if (3 === (a.tag & 3)) {
	            var d = a.create;
	            a.destroy = d();
	          }

	          a = a.next;
	        } while (a !== b);
	      }

	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          var e = a;
	          d = e.next;
	          e = e.tag;
	          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	          a = d;
	        } while (a !== b);
	      }

	      return;

	    case 1:
	      a = c.stateNode;
	      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	      b = c.updateQueue;
	      null !== b && Eg(c, b, a);
	      return;

	    case 3:
	      b = c.updateQueue;

	      if (null !== b) {
	        a = null;
	        if (null !== c.child) switch (c.child.tag) {
	          case 5:
	            a = c.child.stateNode;
	            break;

	          case 1:
	            a = c.child.stateNode;
	        }
	        Eg(c, b, a);
	      }

	      return;

	    case 5:
	      a = c.stateNode;
	      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	      return;

	    case 6:
	      return;

	    case 4:
	      return;

	    case 12:
	      return;

	    case 13:
	      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	      return;

	    case 19:
	    case 17:
	    case 20:
	    case 21:
	    case 23:
	    case 24:
	      return;
	  }

	  throw Error(y$3(163));
	}

	function aj(a, b) {
	  for (var c = a;;) {
	    if (5 === c.tag) {
	      var d = c.stateNode;
	      if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
	        d = c.stateNode;
	        var e = c.memoizedProps.style;
	        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	        d.style.display = sb("display", e);
	      }
	    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === a) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === a) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function bj(a, b) {
	  if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	    Mf.onCommitFiberUnmount(Lf, b);
	  } catch (f) {}

	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      a = b.updateQueue;

	      if (null !== a && (a = a.lastEffect, null !== a)) {
	        var c = a = a.next;

	        do {
	          var d = c,
	              e = d.destroy;
	          d = d.tag;
	          if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
	            d = b;

	            try {
	              e();
	            } catch (f) {
	              Wi(d, f);
	            }
	          }
	          c = c.next;
	        } while (c !== a);
	      }

	      break;

	    case 1:
	      Vi(b);
	      a = b.stateNode;
	      if ("function" === typeof a.componentWillUnmount) try {
	        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	      } catch (f) {
	        Wi(b, f);
	      }
	      break;

	    case 5:
	      Vi(b);
	      break;

	    case 4:
	      cj(a, b);
	  }
	}

	function dj(a) {
	  a.alternate = null;
	  a.child = null;
	  a.dependencies = null;
	  a.firstEffect = null;
	  a.lastEffect = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.return = null;
	  a.updateQueue = null;
	}

	function ej(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}

	function fj(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (ej(b)) break a;
	      b = b.return;
	    }

	    throw Error(y$3(160));
	  }

	  var c = b;
	  b = c.stateNode;

	  switch (c.tag) {
	    case 5:
	      var d = !1;
	      break;

	    case 3:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    case 4:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    default:
	      throw Error(y$3(161));
	  }

	  c.flags & 16 && (pb(b, ""), c.flags &= -17);

	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || ej(c.return)) {
	        c = null;
	        break a;
	      }

	      c = c.return;
	    }

	    c.sibling.return = c.return;

	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	      if (c.flags & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }

	    if (!(c.flags & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }

	  d ? gj(a, c, b) : hj(a, c, b);
	}

	function gj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) gj(a, b, c), a = a.sibling;
	}

	function hj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) hj(a, b, c), a = a.sibling;
	}

	function cj(a, b) {
	  for (var c = b, d = !1, e, f;;) {
	    if (!d) {
	      d = c.return;

	      a: for (;;) {
	        if (null === d) throw Error(y$3(160));
	        e = d.stateNode;

	        switch (d.tag) {
	          case 5:
	            f = !1;
	            break a;

	          case 3:
	            e = e.containerInfo;
	            f = !0;
	            break a;

	          case 4:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	        }

	        d = d.return;
	      }

	      d = !0;
	    }

	    if (5 === c.tag || 6 === c.tag) {
	      a: for (var g = a, h = c, k = h;;) if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;else {
	        if (k === h) break a;

	        for (; null === k.sibling;) {
	          if (null === k.return || k.return === h) break a;
	          k = k.return;
	        }

	        k.sibling.return = k.return;
	        k = k.sibling;
	      }

	      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	    } else if (4 === c.tag) {
	      if (null !== c.child) {
	        e = c.stateNode.containerInfo;
	        f = !0;
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	    } else if (bj(a, c), null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	      4 === c.tag && (d = !1);
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function ij(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      var c = b.updateQueue;
	      c = null !== c ? c.lastEffect : null;

	      if (null !== c) {
	        var d = c = c.next;

	        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next; while (d !== c);
	      }

	      return;

	    case 1:
	      return;

	    case 5:
	      c = b.stateNode;

	      if (null != c) {
	        d = b.memoizedProps;
	        var e = null !== a ? a.memoizedProps : d;
	        a = b.type;
	        var f = b.updateQueue;
	        b.updateQueue = null;

	        if (null !== f) {
	          c[xf] = d;
	          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	          wb(a, e);
	          b = wb(a, d);

	          for (e = 0; e < f.length; e += 2) {
	            var g = f[e],
	                h = f[e + 1];
	            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	          }

	          switch (a) {
	            case "input":
	              ab(c, d);
	              break;

	            case "textarea":
	              ib(c, d);
	              break;

	            case "select":
	              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	          }
	        }
	      }

	      return;

	    case 6:
	      if (null === b.stateNode) throw Error(y$3(162));
	      b.stateNode.nodeValue = b.memoizedProps;
	      return;

	    case 3:
	      c = b.stateNode;
	      c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	      return;

	    case 12:
	      return;

	    case 13:
	      null !== b.memoizedState && (jj = O$1(), aj(b.child, !0));
	      kj(b);
	      return;

	    case 19:
	      kj(b);
	      return;

	    case 17:
	      return;

	    case 23:
	    case 24:
	      aj(b, null !== b.memoizedState);
	      return;
	  }

	  throw Error(y$3(163));
	}

	function kj(a) {
	  var b = a.updateQueue;

	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Ui());
	    b.forEach(function (b) {
	      var d = lj.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}

	function mj(a, b) {
	  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}

	var nj = Math.ceil,
	    oj = ra.ReactCurrentDispatcher,
	    pj = ra.ReactCurrentOwner,
	    X = 0,
	    U$1 = null,
	    Y$1 = null,
	    W$1 = 0,
	    qj = 0,
	    rj = Bf(0),
	    V$1 = 0,
	    sj = null,
	    tj = 0,
	    Dg = 0,
	    Hi = 0,
	    uj = 0,
	    vj = null,
	    jj = 0,
	    Ji = Infinity;

	function wj() {
	  Ji = O$1() + 500;
	}

	var Z = null,
	    Qi = !1,
	    Ri = null,
	    Ti = null,
	    xj = !1,
	    yj = null,
	    zj = 90,
	    Aj = [],
	    Bj = [],
	    Cj = null,
	    Dj = 0,
	    Ej = null,
	    Fj = -1,
	    Gj = 0,
	    Hj = 0,
	    Ij = null,
	    Jj = !1;

	function Hg() {
	  return 0 !== (X & 48) ? O$1() : -1 !== Fj ? Fj : Fj = O$1();
	}

	function Ig(a) {
	  a = a.mode;
	  if (0 === (a & 2)) return 1;
	  if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	  0 === Gj && (Gj = tj);

	  if (0 !== kg.transition) {
	    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	    a = Gj;
	    var b = 4186112 & ~Hj;
	    b &= -b;
	    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	    return b;
	  }

	  a = eg();
	  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	  return a;
	}

	function Jg(a, b, c) {
	  if (50 < Dj) throw Dj = 0, Ej = null, Error(y$3(185));
	  a = Kj(a, b);
	  if (null === a) return null;
	  $c(a, b, c);
	  a === U$1 && (Hi |= b, 4 === V$1 && Ii(a, W$1));
	  var d = eg();
	  1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
	  vj = a;
	}

	function Kj(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;

	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;

	  return 3 === c.tag ? c.stateNode : null;
	}

	function Mj(a, b) {
	  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
	    var h = 31 - Vc(g),
	        k = 1 << h,
	        l = f[h];

	    if (-1 === l) {
	      if (0 === (k & d) || 0 !== (k & e)) {
	        l = b;
	        Rc(k);
	        var n = F$2;
	        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	      }
	    } else l <= b && (a.expiredLanes |= k);

	    g &= ~k;
	  }

	  d = Uc(a, a === U$1 ? W$1 : 0);
	  b = F$2;
	  if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
	    if (null !== c) {
	      if (a.callbackPriority === b) return;
	      c !== Zf && Pf(c);
	    }

	    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}

	function Nj(a) {
	  Fj = -1;
	  Hj = Gj = 0;
	  if (0 !== (X & 48)) throw Error(y$3(327));
	  var b = a.callbackNode;
	  if (Oj() && a.callbackNode !== b) return null;
	  var c = Uc(a, a === U$1 ? W$1 : 0);
	  if (0 === c) return null;
	  var d = c;
	  var e = X;
	  X |= 16;
	  var f = Pj();
	  if (U$1 !== a || W$1 !== d) wj(), Qj(a, d);

	  do try {
	    Rj();
	    break;
	  } catch (h) {
	    Sj(a, h);
	  } while (1);

	  qg();
	  oj.current = f;
	  X = e;
	  null !== Y$1 ? d = 0 : (U$1 = null, W$1 = 0, d = V$1);
	  if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
	    2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	    if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O$1()), b;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = c;

	    switch (d) {
	      case 0:
	      case 1:
	        throw Error(y$3(345));

	      case 2:
	        Uj(a);
	        break;

	      case 3:
	        Ii(a, c);

	        if ((c & 62914560) === c && (d = jj + 500 - O$1(), 10 < d)) {
	          if (0 !== Uc(a, 0)) break;
	          e = a.suspendedLanes;

	          if ((e & c) !== c) {
	            Hg();
	            a.pingedLanes |= a.suspendedLanes & e;
	            break;
	          }

	          a.timeoutHandle = of(Uj.bind(null, a), d);
	          break;
	        }

	        Uj(a);
	        break;

	      case 4:
	        Ii(a, c);
	        if ((c & 4186112) === c) break;
	        d = a.eventTimes;

	        for (e = -1; 0 < c;) {
	          var g = 31 - Vc(c);
	          f = 1 << g;
	          g = d[g];
	          g > e && (e = g);
	          c &= ~f;
	        }

	        c = e;
	        c = O$1() - c;
	        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;

	        if (10 < c) {
	          a.timeoutHandle = of(Uj.bind(null, a), c);
	          break;
	        }

	        Uj(a);
	        break;

	      case 5:
	        Uj(a);
	        break;

	      default:
	        throw Error(y$3(329));
	    }
	  }
	  Mj(a, O$1());
	  return a.callbackNode === b ? Nj.bind(null, a) : null;
	}

	function Ii(a, b) {
	  b &= ~uj;
	  b &= ~Hi;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;

	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - Vc(b),
	        d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}

	function Lj(a) {
	  if (0 !== (X & 48)) throw Error(y$3(327));
	  Oj();

	  if (a === U$1 && 0 !== (a.expiredLanes & W$1)) {
	    var b = W$1;
	    var c = Tj(a, b);
	    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	  } else b = Uc(a, 0), c = Tj(a, b);

	  0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	  if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O$1()), c;
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Uj(a);
	  Mj(a, O$1());
	  return null;
	}

	function Vj() {
	  if (null !== Cj) {
	    var a = Cj;
	    Cj = null;
	    a.forEach(function (a) {
	      a.expiredLanes |= 24 & a.pendingLanes;
	      Mj(a, O$1());
	    });
	  }

	  ig();
	}

	function Wj(a, b) {
	  var c = X;
	  X |= 1;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}

	function Xj(a, b) {
	  var c = X;
	  X &= -2;
	  X |= 8;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}

	function ni(a, b) {
	  I$2(rj, qj);
	  qj |= b;
	  tj |= b;
	}

	function Ki() {
	  qj = rj.current;
	  H$2(rj);
	}

	function Qj(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, pf(c));
	  if (null !== Y$1) for (c = Y$1.return; null !== c;) {
	    var d = c;

	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && Gf();
	        break;

	      case 3:
	        fh();
	        H$2(N$1);
	        H$2(M$1);
	        uh();
	        break;

	      case 5:
	        hh(d);
	        break;

	      case 4:
	        fh();
	        break;

	      case 13:
	        H$2(P$1);
	        break;

	      case 19:
	        H$2(P$1);
	        break;

	      case 10:
	        rg(d);
	        break;

	      case 23:
	      case 24:
	        Ki();
	    }

	    c = c.return;
	  }
	  U$1 = a;
	  Y$1 = Tg(a.current, null);
	  W$1 = qj = tj = b;
	  V$1 = 0;
	  sj = null;
	  uj = Hi = Dg = 0;
	}

	function Sj(a, b) {
	  do {
	    var c = Y$1;

	    try {
	      qg();
	      vh.current = Gh;

	      if (yh) {
	        for (var d = R$1.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }

	        yh = !1;
	      }

	      xh = 0;
	      T$1 = S$1 = R$1 = null;
	      zh = !1;
	      pj.current = null;

	      if (null === c || null === c.return) {
	        V$1 = 1;
	        sj = b;
	        Y$1 = null;
	        break;
	      }

	      a: {
	        var f = a,
	            g = c.return,
	            h = c,
	            k = b;
	        b = W$1;
	        h.flags |= 2048;
	        h.firstEffect = h.lastEffect = null;

	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k;

	          if (0 === (h.mode & 2)) {
	            var n = h.alternate;
	            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	          }

	          var A = 0 !== (P$1.current & 1),
	              p = g;

	          do {
	            var C;

	            if (C = 13 === p.tag) {
	              var x = p.memoizedState;
	              if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
	                var w = p.memoizedProps;
	                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	              }
	            }

	            if (C) {
	              var z = p.updateQueue;

	              if (null === z) {
	                var u = new Set();
	                u.add(l);
	                p.updateQueue = u;
	              } else z.add(l);

	              if (0 === (p.mode & 2)) {
	                p.flags |= 64;
	                h.flags |= 16384;
	                h.flags &= -2981;
	                if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
	                  var t = zg(-1, 1);
	                  t.tag = 2;
	                  Ag(h, t);
	                }
	                h.lanes |= 1;
	                break a;
	              }

	              k = void 0;
	              h = b;
	              var q = f.pingCache;
	              null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));

	              if (!k.has(h)) {
	                k.add(h);
	                var v = Yj.bind(null, f, l, h);
	                l.then(v, v);
	              }

	              p.flags |= 4096;
	              p.lanes = b;
	              break a;
	            }

	            p = p.return;
	          } while (null !== p);

	          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	        }

	        5 !== V$1 && (V$1 = 2);
	        k = Mi(k, h);
	        p = g;

	        do {
	          switch (p.tag) {
	            case 3:
	              f = k;
	              p.flags |= 4096;
	              b &= -b;
	              p.lanes |= b;
	              var J = Pi(p, f, b);
	              Bg(p, J);
	              break a;

	            case 1:
	              f = k;
	              var K = p.type,
	                  Q = p.stateNode;

	              if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                p.flags |= 4096;
	                b &= -b;
	                p.lanes |= b;
	                var L = Si(p, f, b);
	                Bg(p, L);
	                break a;
	              }

	          }

	          p = p.return;
	        } while (null !== p);
	      }

	      Zj(c);
	    } catch (va) {
	      b = va;
	      Y$1 === c && null !== c && (Y$1 = c = c.return);
	      continue;
	    }

	    break;
	  } while (1);
	}

	function Pj() {
	  var a = oj.current;
	  oj.current = Gh;
	  return null === a ? Gh : a;
	}

	function Tj(a, b) {
	  var c = X;
	  X |= 16;
	  var d = Pj();
	  U$1 === a && W$1 === b || Qj(a, b);

	  do try {
	    ak();
	    break;
	  } catch (e) {
	    Sj(a, e);
	  } while (1);

	  qg();
	  X = c;
	  oj.current = d;
	  if (null !== Y$1) throw Error(y$3(261));
	  U$1 = null;
	  W$1 = 0;
	  return V$1;
	}

	function ak() {
	  for (; null !== Y$1;) bk(Y$1);
	}

	function Rj() {
	  for (; null !== Y$1 && !Qf();) bk(Y$1);
	}

	function bk(a) {
	  var b = ck(a.alternate, a, qj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Zj(a) : Y$1 = b;
	  pj.current = null;
	}

	function Zj(a) {
	  var b = a;

	  do {
	    var c = b.alternate;
	    a = b.return;

	    if (0 === (b.flags & 2048)) {
	      c = Gi(c, b, qj);

	      if (null !== c) {
	        Y$1 = c;
	        return;
	      }

	      c = b;

	      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	        for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;

	        c.childLanes = d;
	      }

	      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	    } else {
	      c = Li(b);

	      if (null !== c) {
	        c.flags &= 2047;
	        Y$1 = c;
	        return;
	      }

	      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	    }

	    b = b.sibling;

	    if (null !== b) {
	      Y$1 = b;
	      return;
	    }

	    Y$1 = b = a;
	  } while (null !== b);

	  0 === V$1 && (V$1 = 5);
	}

	function Uj(a) {
	  var b = eg();
	  gg(99, dk.bind(null, a, b));
	  return null;
	}

	function dk(a, b) {
	  do Oj(); while (null !== yj);

	  if (0 !== (X & 48)) throw Error(y$3(327));
	  var c = a.finishedWork;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(y$3(177));
	  a.callbackNode = null;
	  var d = c.lanes | c.childLanes,
	      e = d,
	      f = a.pendingLanes & ~e;
	  a.pendingLanes = e;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= e;
	  a.mutableReadLanes &= e;
	  a.entangledLanes &= e;
	  e = a.entanglements;

	  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
	    var k = 31 - Vc(f),
	        l = 1 << k;
	    e[k] = 0;
	    g[k] = -1;
	    h[k] = -1;
	    f &= ~l;
	  }

	  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	  a === U$1 && (Y$1 = U$1 = null, W$1 = 0);
	  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

	  if (null !== d) {
	    e = X;
	    X |= 32;
	    pj.current = null;
	    kf = fd;
	    g = Ne();

	    if (Oe(g)) {
	      if ("selectionStart" in g) h = {
	        start: g.selectionStart,
	        end: g.selectionEnd
	      };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	        h = l.anchorNode;
	        f = l.anchorOffset;
	        k = l.focusNode;
	        l = l.focusOffset;

	        try {
	          h.nodeType, k.nodeType;
	        } catch (va) {
	          h = null;
	          break a;
	        }

	        var n = 0,
	            A = -1,
	            p = -1,
	            C = 0,
	            x = 0,
	            w = g,
	            z = null;

	        b: for (;;) {
	          for (var u;;) {
	            w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	            w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	            3 === w.nodeType && (n += w.nodeValue.length);
	            if (null === (u = w.firstChild)) break;
	            z = w;
	            w = u;
	          }

	          for (;;) {
	            if (w === g) break b;
	            z === h && ++C === f && (A = n);
	            z === k && ++x === l && (p = n);
	            if (null !== (u = w.nextSibling)) break;
	            w = z;
	            z = w.parentNode;
	          }

	          w = u;
	        }

	        h = -1 === A || -1 === p ? null : {
	          start: A,
	          end: p
	        };
	      } else h = null;
	      h = h || {
	        start: 0,
	        end: 0
	      };
	    } else h = null;

	    lf = {
	      focusedElem: g,
	      selectionRange: h
	    };
	    fd = !1;
	    Ij = null;
	    Jj = !1;
	    Z = d;

	    do try {
	      ek();
	    } catch (va) {
	      if (null === Z) throw Error(y$3(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    Ij = null;
	    Z = d;

	    do try {
	      for (g = a; null !== Z;) {
	        var t = Z.flags;
	        t & 16 && pb(Z.stateNode, "");

	        if (t & 128) {
	          var q = Z.alternate;

	          if (null !== q) {
	            var v = q.ref;
	            null !== v && ("function" === typeof v ? v(null) : v.current = null);
	          }
	        }

	        switch (t & 1038) {
	          case 2:
	            fj(Z);
	            Z.flags &= -3;
	            break;

	          case 6:
	            fj(Z);
	            Z.flags &= -3;
	            ij(Z.alternate, Z);
	            break;

	          case 1024:
	            Z.flags &= -1025;
	            break;

	          case 1028:
	            Z.flags &= -1025;
	            ij(Z.alternate, Z);
	            break;

	          case 4:
	            ij(Z.alternate, Z);
	            break;

	          case 8:
	            h = Z;
	            cj(g, h);
	            var J = h.alternate;
	            dj(h);
	            null !== J && dj(J);
	        }

	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y$3(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    v = lf;
	    q = Ne();
	    t = v.focusedElem;
	    g = v.selectionRange;

	    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
	      null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	      q = [];

	      for (v = t; v = v.parentNode;) 1 === v.nodeType && q.push({
	        element: v,
	        left: v.scrollLeft,
	        top: v.scrollTop
	      });

	      "function" === typeof t.focus && t.focus();

	      for (t = 0; t < q.length; t++) v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	    }

	    fd = !!kf;
	    lf = kf = null;
	    a.current = c;
	    Z = d;

	    do try {
	      for (t = a; null !== Z;) {
	        var K = Z.flags;
	        K & 36 && Yi(t, Z.alternate, Z);

	        if (K & 128) {
	          q = void 0;
	          var Q = Z.ref;

	          if (null !== Q) {
	            var L = Z.stateNode;

	            switch (Z.tag) {
	              case 5:
	                q = L;
	                break;

	              default:
	                q = L;
	            }

	            "function" === typeof Q ? Q(q) : Q.current = q;
	          }
	        }

	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y$3(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    Z = null;
	    $f();
	    X = e;
	  } else a.current = c;

	  if (xj) xj = !1, yj = a, zj = b;else for (Z = d; null !== Z;) b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
	  d = a.pendingLanes;
	  0 === d && (Ti = null);
	  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	  c = c.stateNode;
	  if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	    Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	  } catch (va) {}
	  Mj(a, O$1());
	  if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	  if (0 !== (X & 8)) return null;
	  ig();
	  return null;
	}

	function ek() {
	  for (; null !== Z;) {
	    var a = Z.alternate;
	    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
	    var b = Z.flags;
	    0 !== (b & 256) && Xi(a, Z);
	    0 === (b & 512) || xj || (xj = !0, hg(97, function () {
	      Oj();
	      return null;
	    }));
	    Z = Z.nextEffect;
	  }
	}

	function Oj() {
	  if (90 !== zj) {
	    var a = 97 < zj ? 97 : zj;
	    zj = 90;
	    return gg(a, fk);
	  }

	  return !1;
	}

	function $i(a, b) {
	  Aj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function Zi(a, b) {
	  Bj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function fk() {
	  if (null === yj) return !1;
	  var a = yj;
	  yj = null;
	  if (0 !== (X & 48)) throw Error(y$3(331));
	  var b = X;
	  X |= 32;
	  var c = Bj;
	  Bj = [];

	  for (var d = 0; d < c.length; d += 2) {
	    var e = c[d],
	        f = c[d + 1],
	        g = e.destroy;
	    e.destroy = void 0;
	    if ("function" === typeof g) try {
	      g();
	    } catch (k) {
	      if (null === f) throw Error(y$3(330));
	      Wi(f, k);
	    }
	  }

	  c = Aj;
	  Aj = [];

	  for (d = 0; d < c.length; d += 2) {
	    e = c[d];
	    f = c[d + 1];

	    try {
	      var h = e.create;
	      e.destroy = h();
	    } catch (k) {
	      if (null === f) throw Error(y$3(330));
	      Wi(f, k);
	    }
	  }

	  for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;

	  X = b;
	  ig();
	  return !0;
	}

	function gk(a, b, c) {
	  b = Mi(c, b);
	  b = Pi(a, b, 1);
	  Ag(a, b);
	  b = Hg();
	  a = Kj(a, 1);
	  null !== a && ($c(a, 1, b), Mj(a, b));
	}

	function Wi(a, b) {
	  if (3 === a.tag) gk(a, a, b);else for (var c = a.return; null !== c;) {
	    if (3 === c.tag) {
	      gk(c, a, b);
	      break;
	    } else if (1 === c.tag) {
	      var d = c.stateNode;

	      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	        a = Mi(b, a);
	        var e = Si(c, a, 1);
	        Ag(c, e);
	        e = Hg();
	        c = Kj(c, 1);
	        if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	          d.componentDidCatch(b, a);
	        } catch (f) {}
	        break;
	      }
	    }

	    c = c.return;
	  }
	}

	function Yj(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = Hg();
	  a.pingedLanes |= a.suspendedLanes & c;
	  U$1 === a && (W$1 & c) === c && (4 === V$1 || 3 === V$1 && (W$1 & 62914560) === W$1 && 500 > O$1() - jj ? Qj(a, 0) : uj |= c);
	  Mj(a, b);
	}

	function lj(a, b) {
	  var c = a.stateNode;
	  null !== c && c.delete(b);
	  b = 0;
	  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	  c = Hg();
	  a = Kj(a, b);
	  null !== a && ($c(a, b, c), Mj(a, c));
	}

	var ck;

	ck = function (a, b, c) {
	  var d = b.lanes;
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || N$1.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
	      ug = !1;

	      switch (b.tag) {
	        case 3:
	          ri(b);
	          sh();
	          break;

	        case 5:
	          gh(b);
	          break;

	        case 1:
	          Ff(b.type) && Jf(b);
	          break;

	        case 4:
	          eh(b, b.stateNode.containerInfo);
	          break;

	        case 10:
	          d = b.memoizedProps.value;
	          var e = b.type._context;
	          I$2(mg, e._currentValue);
	          e._currentValue = d;
	          break;

	        case 13:
	          if (null !== b.memoizedState) {
	            if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	            I$2(P$1, P$1.current & 1);
	            b = hi(a, b, c);
	            return null !== b ? b.sibling : null;
	          }

	          I$2(P$1, P$1.current & 1);
	          break;

	        case 19:
	          d = 0 !== (c & b.childLanes);

	          if (0 !== (a.flags & 64)) {
	            if (d) return Ai(a, b, c);
	            b.flags |= 64;
	          }

	          e = b.memoizedState;
	          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	          I$2(P$1, P$1.current);
	          if (d) break;else return null;

	        case 23:
	        case 24:
	          return b.lanes = 0, mi(a, b, c);
	      }

	      return hi(a, b, c);
	    }
	  } else ug = !1;
	  b.lanes = 0;

	  switch (b.tag) {
	    case 2:
	      d = b.type;
	      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	      a = b.pendingProps;
	      e = Ef(b, M$1.current);
	      tg(b, c);
	      e = Ch(null, b, d, a, e, c);
	      b.flags |= 1;

	      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	        b.tag = 1;
	        b.memoizedState = null;
	        b.updateQueue = null;

	        if (Ff(d)) {
	          var f = !0;
	          Jf(b);
	        } else f = !1;

	        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	        xg(b);
	        var g = d.getDerivedStateFromProps;
	        "function" === typeof g && Gg(b, d, g, a);
	        e.updater = Kg;
	        b.stateNode = e;
	        e._reactInternals = b;
	        Og(b, d, a, c);
	        b = qi(null, b, d, !0, f, c);
	      } else b.tag = 0, fi(null, b, e, c), b = b.child;

	      return b;

	    case 16:
	      e = b.elementType;

	      a: {
	        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	        a = b.pendingProps;
	        f = e._init;
	        e = f(e._payload);
	        b.type = e;
	        f = b.tag = hk(e);
	        a = lg(e, a);

	        switch (f) {
	          case 0:
	            b = li(null, b, e, a, c);
	            break a;

	          case 1:
	            b = pi(null, b, e, a, c);
	            break a;

	          case 11:
	            b = gi(null, b, e, a, c);
	            break a;

	          case 14:
	            b = ii(null, b, e, lg(e.type, a), d, c);
	            break a;
	        }

	        throw Error(y$3(306, e, ""));
	      }

	      return b;

	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);

	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);

	    case 3:
	      ri(b);
	      d = b.updateQueue;
	      if (null === a || null === d) throw Error(y$3(282));
	      d = b.pendingProps;
	      e = b.memoizedState;
	      e = null !== e ? e.element : null;
	      yg(a, b);
	      Cg(b, d, null, c);
	      d = b.memoizedState.element;
	      if (d === e) sh(), b = hi(a, b, c);else {
	        e = b.stateNode;
	        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;

	        if (f) {
	          a = e.mutableSourceEagerHydrationData;
	          if (null != a) for (e = 0; e < a.length; e += 2) f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	          c = Zg(b, null, d, c);

	          for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
	        } else fi(a, b, d, c), sh();

	        b = b.child;
	      }
	      return b;

	    case 5:
	      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;

	    case 6:
	      return null === a && ph(b), null;

	    case 13:
	      return ti(a, b, c);

	    case 4:
	      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;

	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);

	    case 7:
	      return fi(a, b, b.pendingProps, c), b.child;

	    case 8:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 12:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        g = b.memoizedProps;
	        f = e.value;
	        var h = b.type._context;
	        I$2(mg, h._currentValue);
	        h._currentValue = f;
	        if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	          if (g.children === e.children && !N$1.current) {
	            b = hi(a, b, c);
	            break a;
	          }
	        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
	          var k = h.dependencies;

	          if (null !== k) {
	            g = h.child;

	            for (var l = k.firstContext; null !== l;) {
	              if (l.context === d && 0 !== (l.observedBits & f)) {
	                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                h.lanes |= c;
	                l = h.alternate;
	                null !== l && (l.lanes |= c);
	                sg(h.return, c);
	                k.lanes |= c;
	                break;
	              }

	              l = l.next;
	            }
	          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

	          if (null !== g) g.return = h;else for (g = h; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }

	            h = g.sibling;

	            if (null !== h) {
	              h.return = g.return;
	              g = h;
	              break;
	            }

	            g = g.return;
	          }
	          h = g;
	        }
	        fi(a, b, e.children, c);
	        b = b.child;
	      }

	      return b;

	    case 9:
	      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;

	    case 14:
	      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);

	    case 15:
	      return ki(a, b, b.type, b.pendingProps, d, c);

	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);

	    case 19:
	      return Ai(a, b, c);

	    case 23:
	      return mi(a, b, c);

	    case 24:
	      return mi(a, b, c);
	  }

	  throw Error(y$3(156, b.tag));
	};

	function ik(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.flags = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}

	function nh(a, b, c, d) {
	  return new ik(a, b, c, d);
	}

	function ji(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}

	function hk(a) {
	  if ("function" === typeof a) return ji(a) ? 1 : 0;

	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Aa) return 11;
	    if (a === Da) return 14;
	  }

	  return 2;
	}

	function Tg(a, b) {
	  var c = a.alternate;
	  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}

	function Vg(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ua:
	      return Xg(c.children, e, f, b);

	    case Ha:
	      g = 8;
	      e |= 16;
	      break;

	    case wa:
	      g = 8;
	      e |= 1;
	      break;

	    case xa:
	      return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;

	    case Ba:
	      return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;

	    case Ca:
	      return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;

	    case Ia:
	      return vi(c, e, f, b);

	    case Ja:
	      return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;

	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case ya:
	          g = 10;
	          break a;

	        case za:
	          g = 9;
	          break a;

	        case Aa:
	          g = 11;
	          break a;

	        case Da:
	          g = 14;
	          break a;

	        case Ea:
	          g = 16;
	          d = null;
	          break a;

	        case Fa:
	          g = 22;
	          break a;
	      }
	      throw Error(y$3(130, null == a ? a : typeof a, ""));
	  }
	  b = nh(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}

	function Xg(a, b, c, d) {
	  a = nh(7, a, d, b);
	  a.lanes = c;
	  return a;
	}

	function vi(a, b, c, d) {
	  a = nh(23, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  return a;
	}

	function Ug(a, b, c) {
	  a = nh(6, a, null, b);
	  a.lanes = c;
	  return a;
	}

	function Wg(a, b, c) {
	  b = nh(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}

	function jk(a, b, c) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.pendingContext = this.context = null;
	  this.hydrate = c;
	  this.callbackNode = null;
	  this.callbackPriority = 0;
	  this.eventTimes = Zc(0);
	  this.expirationTimes = Zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = Zc(0);
	  this.mutableSourceEagerHydrationData = null;
	}

	function kk(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: ta,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}

	function lk(a, b, c, d) {
	  var e = b.current,
	      f = Hg(),
	      g = Ig(e);

	  a: if (c) {
	    c = c._reactInternals;

	    b: {
	      if (Zb(c) !== c || 1 !== c.tag) throw Error(y$3(170));
	      var h = c;

	      do {
	        switch (h.tag) {
	          case 3:
	            h = h.stateNode.context;
	            break b;

	          case 1:
	            if (Ff(h.type)) {
	              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	              break b;
	            }

	        }

	        h = h.return;
	      } while (null !== h);

	      throw Error(y$3(171));
	    }

	    if (1 === c.tag) {
	      var k = c.type;

	      if (Ff(k)) {
	        c = If(c, k, h);
	        break a;
	      }
	    }

	    c = h;
	  } else c = Cf;

	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = zg(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  Ag(e, b);
	  Jg(e, g, f);
	  return g;
	}

	function mk(a) {
	  a = a.current;
	  if (!a.child) return null;

	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;

	    default:
	      return a.child.stateNode;
	  }
	}

	function nk(a, b) {
	  a = a.memoizedState;

	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}

	function ok(a, b) {
	  nk(a, b);
	  (a = a.alternate) && nk(a, b);
	}

	function pk() {
	  return null;
	}

	function qk(a, b, c) {
	  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	  c = new jk(a, b, null != c && !0 === c.hydrate);
	  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	  c.current = b;
	  b.stateNode = c;
	  xg(b);
	  a[ff] = c.current;
	  cf(8 === a.nodeType ? a.parentNode : a);
	  if (d) for (a = 0; a < d.length; a++) {
	    b = d[a];
	    var e = b._getVersion;
	    e = e(b._source);
	    null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
	  }
	  this._internalRoot = c;
	}

	qk.prototype.render = function (a) {
	  lk(a, this._internalRoot, null, null);
	};

	qk.prototype.unmount = function () {
	  var a = this._internalRoot,
	      b = a.containerInfo;
	  lk(null, a, null, function () {
	    b[ff] = null;
	  });
	};

	function rk(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}

	function sk(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new qk(a, 0, b ? {
	    hydrate: !0
	  } : void 0);
	}

	function tk(a, b, c, d, e) {
	  var f = c._reactRootContainer;

	  if (f) {
	    var g = f._internalRoot;

	    if ("function" === typeof e) {
	      var h = e;

	      e = function () {
	        var a = mk(g);
	        h.call(a);
	      };
	    }

	    lk(b, g, a, e);
	  } else {
	    f = c._reactRootContainer = sk(c, d);
	    g = f._internalRoot;

	    if ("function" === typeof e) {
	      var k = e;

	      e = function () {
	        var a = mk(g);
	        k.call(a);
	      };
	    }

	    Xj(function () {
	      lk(b, g, a, e);
	    });
	  }

	  return mk(g);
	}

	ec = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 4, b);
	    ok(a, 4);
	  }
	};

	fc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 67108864, b);
	    ok(a, 67108864);
	  }
	};

	gc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg(),
	        c = Ig(a);
	    Jg(a, c, b);
	    ok(a, c);
	  }
	};

	hc = function (a, b) {
	  return b();
	};

	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      ab(a, c);
	      b = c.name;

	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;

	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

	        for (b = 0; b < c.length; b++) {
	          var d = c[b];

	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(y$3(90));
	            Wa(d);
	            ab(d, e);
	          }
	        }
	      }

	      break;

	    case "textarea":
	      ib(a, c);
	      break;

	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};

	Gb = Wj;

	Hb = function (a, b, c, d, e) {
	  var f = X;
	  X |= 4;

	  try {
	    return gg(98, a.bind(null, b, c, d, e));
	  } finally {
	    X = f, 0 === X && (wj(), ig());
	  }
	};

	Ib = function () {
	  0 === (X & 49) && (Vj(), Oj());
	};

	Jb = function (a, b) {
	  var c = X;
	  X |= 2;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	};

	function uk(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!rk(b)) throw Error(y$3(200));
	  return kk(a, b, null, c);
	}

	var vk = {
	  Events: [Cb, ue$1, Db, Eb, Fb, Oj, {
	    current: !1
	  }]
	},
	    wk = {
	  findFiberByHostInstance: wc,
	  bundleType: 0,
	  version: "17.0.2",
	  rendererPackageName: "react-dom"
	};
	var xk = {
	  bundleType: wk.bundleType,
	  version: wk.version,
	  rendererPackageName: wk.rendererPackageName,
	  rendererConfig: wk.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ra.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = cc(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null
	};

	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!yk.isDisabled && yk.supportsFiber) try {
	    Lf = yk.inject(xk), Mf = yk;
	  } catch (a) {}
	}

	var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	var createPortal = uk;

	var findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;

	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(y$3(188));
	    throw Error(y$3(268, Object.keys(a)));
	  }

	  a = cc(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};

	var flushSync = function (a, b) {
	  var c = X;
	  if (0 !== (c & 48)) return a(b);
	  X |= 1;

	  try {
	    if (a) return gg(99, a.bind(null, b));
	  } finally {
	    X = c, ig();
	  }
	};

	var hydrate = function (a, b, c) {
	  if (!rk(b)) throw Error(y$3(200));
	  return tk(null, a, b, !0, c);
	};

	var render$1 = function (a, b, c) {
	  if (!rk(b)) throw Error(y$3(200));
	  return tk(null, a, b, !1, c);
	};

	var unmountComponentAtNode = function (a) {
	  if (!rk(a)) throw Error(y$3(40));
	  return a._reactRootContainer ? (Xj(function () {
	    tk(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[ff] = null;
	    });
	  }), !0) : !1;
	};

	var unstable_batchedUpdates = Wj;

	var unstable_createPortal = function (a, b) {
	  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};

	var unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!rk(c)) throw Error(y$3(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(y$3(38));
	  return tk(a, b, c, !1, d);
	};

	var version = "17.0.2";
	var reactDom_production_min = {
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  createPortal: createPortal,
	  findDOMNode: findDOMNode,
	  flushSync: flushSync,
	  hydrate: hydrate,
	  render: render$1,
	  unmountComponentAtNode: unmountComponentAtNode,
	  unstable_batchedUpdates: unstable_batchedUpdates,
	  unstable_createPortal: unstable_createPortal,
	  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	  version: version
	};

	/** @license React v0.20.2
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$2 = 0;
	var __interactionsRef = null;
	var __subscriberRef = null;

	var unstable_clear = function (a) {
	  return a();
	};

	var unstable_getCurrent = function () {
	  return null;
	};

	var unstable_getThreadID = function () {
	  return ++b$2;
	};

	var unstable_subscribe = function () {};

	var unstable_trace = function (a, d, c) {
	  return c();
	};

	var unstable_unsubscribe = function () {};

	var unstable_wrap = function (a) {
	  return a;
	};

	var schedulerTracing_production_min = {
	  __interactionsRef: __interactionsRef,
	  __subscriberRef: __subscriberRef,
	  unstable_clear: unstable_clear,
	  unstable_getCurrent: unstable_getCurrent,
	  unstable_getThreadID: unstable_getThreadID,
	  unstable_subscribe: unstable_subscribe,
	  unstable_trace: unstable_trace,
	  unstable_unsubscribe: unstable_unsubscribe,
	  unstable_wrap: unstable_wrap
	};

	createCommonjsModule(function (module, exports) {
	});

	createCommonjsModule(function (module) {

	  {
	    module.exports = schedulerTracing_production_min;
	  }
	});

	createCommonjsModule(function (module, exports) {
	});

	var reactDom = createCommonjsModule(function (module) {

	  function checkDCE() {
	    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	      return;
	    }

	    try {
	      // Verify that the code above has been dead code eliminated (DCE'd).
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	    } catch (err) {
	      // DevTools shouldn't crash React, no matter what.
	      // We should still report in case we break this code.
	      console.error(err);
	    }
	  }

	  {
	    // DCE check should happen before ReactDOM bundle executes so that
	    // DevTools can report bad minification during injection.
	    checkDCE();
	    module.exports = reactDom_production_min;
	  }
	});

	// We currently assume that these two elements will be found.
	// Might be worth implementing checking in the future.
	let reactMount = document.getElementById('MSFS_REACT_MOUNT');
	/**
	 * Returns the render target which React mounts onto
	 */

	const getRenderTarget = () => reactMount;
	/**
	 * Returns the root element which receives `update` events
	 */

	const getRootElement = () => {
	  var _reactMount;

	  if ((_reactMount = reactMount) !== null && _reactMount !== void 0 && _reactMount.parentElement) {
	    return reactMount.parentElement;
	  }

	  throw new Error('Could not find rootElement');
	};

	var defineProperty = createCommonjsModule(function (module) {
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

	  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty);

	const useUpdate = handler => {
	  // Logic based on https://usehooks.com/useEventListener/
	  const savedHandler = react.useRef(handler);
	  react.useEffect(() => {
	    savedHandler.current = handler;
	  }, [handler]);
	  react.useEffect(() => {
	    const wrappedHandler = event => {
	      savedHandler.current(event.detail);
	    };

	    getRootElement().addEventListener('update', wrappedHandler);
	    return () => {
	      getRootElement().removeEventListener('update', wrappedHandler);
	    };
	  });
	};

	var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {

	  var g = 60103;
	  exports.Fragment = 60107;

	  if ("function" === typeof Symbol && Symbol.for) {
	    var h = Symbol.for;
	    g = h("react.element");
	    exports.Fragment = h("react.fragment");
	  }

	  var m = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	      n = Object.prototype.hasOwnProperty,
	      p = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };

	  function q(c, a, k) {
	    var b,
	        d = {},
	        e = null,
	        l = null;
	    void 0 !== k && (e = "" + k);
	    void 0 !== a.key && (e = "" + a.key);
	    void 0 !== a.ref && (l = a.ref);

	    for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);

	    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
	    return {
	      $$typeof: g,
	      type: c,
	      key: e,
	      ref: l,
	      props: d,
	      _owner: m.current
	    };
	  }

	  exports.jsx = q;
	  exports.jsxs = q;
	});

	createCommonjsModule(function (module, exports) {
	});

	var jsxRuntime = createCommonjsModule(function (module) {

	  {
	    module.exports = reactJsxRuntime_production_min;
	  }
	});

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	const normalizeUnitName = unit => {
	  switch (unit) {
	    case 'bool':
	    case 'Bool':
	    case 'boolean':
	    case 'Boolean':
	      return 'bool';

	    case 'number':
	    case 'Number':
	      return 'number';

	    case 'Degrees':
	    case 'degree':
	      return 'degree';

	    case 'Percent':
	    case 'percent':
	      return 'percent';

	    case 'Feet':
	    case 'feet':
	    case 'feets':
	    case 'Feets':
	      return 'feet';

	    case 'Knots':
	    case 'knots':
	      return 'knots';

	    case 'Meters':
	      return 'Meter';

	    default:
	      return unit;
	  }
	};

	const errorCallback = () => {
	  throw Error('useSimVar was called in a React tree with no SimVarProvider');
	};

	const context = /*#__PURE__*/react.createContext({
	  retrieve: errorCallback,
	  update: errorCallback,
	  register: errorCallback,
	  unregister: errorCallback
	});
	const {
	  Provider: InternalProvider
	} = context;

	// this can also be replaced once /typings are available

	/**
	 * This component provides the basic functionality for the useSimVar hooks.
	 * By keeping the last known SimVar values inside this provider, we're
	 * effectively caching each SimVar, so that there is no additional overhead when
	 * using multiple useSimVar hooks for the same SimVar.
	 * For improved performance, this component will only trigger renders when the
	 * "update" custom event is emitted through an instrument.
	 */
	const SimVarProvider = ({
	  children
	}) => {
	  const listeners = react.useRef({});
	  const [cache, setCache] = react.useState({});
	  useUpdate(deltaTime => {
	    const stateUpdates = {};

	    for (const [key, intervals] of Object.entries(listeners.current)) {
	      // First, let's check if there are any listeners at all
	      if (!intervals.length) {
	        continue;
	      } // The refresh time is given by the *smallest* maximum update
	      // interval.


	      const threshold = Math.min(...intervals);
	      const lastUpdatedAgo = (cache[key] ? cache[key].lastUpdatedAgo || 0 : 0) + deltaTime;

	      if (lastUpdatedAgo >= threshold) {
	        // At this point, as we haven't updated this SimVar recently, we
	        // need to fetch the latest value from the simulator and store
	        // it.
	        const [name, rawUnit] = key.split('/');
	        const unit = normalizeUnitName(rawUnit);
	        stateUpdates[key] = {
	          value: name.startsWith('_GLOBAL_') ? SimVar.GetGlobalVarValue(name.substr(8), unit) : SimVar.GetSimVarValue(name, unit),
	          lastUpdatedAgo: lastUpdatedAgo % threshold
	        };
	      } else {
	        // Otherwise, just increment lastUpdatedAgo.
	        stateUpdates[key] = {
	          lastUpdatedAgo
	        };
	      }
	    }

	    setCache(oldCache => {
	      const newCache = {};

	      for (const [key, update] of Object.entries(stateUpdates)) {
	        newCache[key] = _objectSpread(_objectSpread({}, oldCache[key]), update);
	      }

	      return _objectSpread(_objectSpread({}, oldCache), newCache);
	    });
	  });

	  const getKey = (name, unit, global) => "".concat(global ? '_GLOBAL_' : '').concat(name, "/").concat(normalizeUnitName(unit));
	  /**
	   * This function will be called by the SimVar hooks through the context and
	   * retrieves the appropriate SimVar value from the cache if it exists, and
	   * retrieve it from the simulator otherwise.
	   * @param name The SimVar to update.
	   * @param unit The unit of the SimVar to update.
	   * @param force Whether to always bypass the cache and always retrieve it
	   * from the simulator.
	   */


	  const retrieve = (name, unit, force, global) => {
	    const key = getKey(name, unit, global || false);

	    if (cache[key] && !force) {
	      return cache[key].value;
	    }

	    const value = global ? SimVar.GetGlobalVarValue(name, unit) : SimVar.GetSimVarValue(name, unit);
	    setCache(oldCache => _objectSpread(_objectSpread({}, oldCache), {}, {
	      [key]: {
	        value,
	        lastUpdatedAgo: 0
	      }
	    }));
	    return value;
	  };
	  /**
	   * This function will be called by the SimVar hooks through the context and
	   * updates the appropriate SimVar for the specific unit with the supplied
	   * value.
	   * @param name The SimVar to update.
	   * @param unit The unit of the SimVar to update.
	   * @param value {*|(function(*): *)} Either the new value for the
	   * SimVar, or an update function that takes the old value and returns an
	   * updated value.
	   * @param proxy If the SimVar used to set the SimVar is different from the
	   * SimVar used to retrieve it, set this parameter to the SimVar for the set
	   * operation.
	   */


	  const update = (name, unit, value, proxy) => {
	    const key = getKey(name, unit, false);
	    setCache(oldCache => {
	      const newValue = typeof value === 'function' ? value(oldCache[key].value) : value;
	      SimVar.SetSimVarValue(proxy || name, unit, newValue);
	      return _objectSpread(_objectSpread({}, oldCache), {}, {
	        [key]: {
	          value: newValue,
	          lastUpdatedAgo: 0
	        }
	      });
	    });
	  };
	  /**
	   * This function will be called by the useSimVar hook through the context
	   * and ensures the SimVar with the supplied name and unit will be updated
	   * every maxStaleness.
	   */


	  const register = (name, unit, maxStaleness, global) => {
	    const key = getKey(name, unit, global);

	    if (!listeners.current[key]) {
	      listeners.current[key] = [];
	    }

	    listeners.current[key].push(maxStaleness || 0);
	  };
	  /**
	   * This function will be called by the useSimVar hook through the context
	   * and notifies us that there is one listener less for this specific SimVar
	   * and unit combination.
	   */


	  const unregister = (name, unit, maxStaleness, global) => {
	    const key = getKey(name, unit, global);
	    const old = listeners.current[key];

	    if (!Array.isArray(old) || old.length === 0) {
	      throw new Error('Attempted to unregisterHook with no known listener');
	    }

	    if (old.length === 1) {
	      // if we're unregistering the last entry, delete the array...
	      delete listeners.current[key];
	    } else {
	      // ...otherwise, filter out the first occurence of this value
	      const index = listeners.current[key].indexOf(maxStaleness || 0); // splice removes in-place, so an assignment would be wrong here as the return value is the removed element

	      listeners.current[key].splice(index, 1);
	    }
	  };

	  return /*#__PURE__*/jsxRuntime.jsx(InternalProvider, {
	    value: {
	      retrieve,
	      update,
	      register,
	      unregister
	    },
	    children: children
	  });
	};
	/**
	 * The useSimVar hook provides an easy way to read and write SimVars from React.
	 *
	 * It's signature is similar to useState and it regularly refreshes the SimVar
	 * to ensure your React component stays in sync with the SimVar being modified
	 * from outside your component (like from other components, XML or SimConnect).
	 *
	 * You may optionally specify the maximum refresh interval. If the same SimVar
	 * is used in multiple places, this hook will automatically deduplicate those
	 * for maximum performance, rather than fetching the SimVar multiple times.
	 * Setting the SimVar will instantly cause it to be updated in all other places
	 * within the same React tree.
	 *
	 * @param name The name of the SimVar.
	 * @param unit The unit of the SimVar.
	 * @param maxStaleness The maximum time in milliseconds that may elapse before
	 * the next render will cause a SimVar refresh from the simulator. This
	 * parameter is only an upper bound! If another hook requests the same SimVar
	 * with a lower maxStaleness, this hook will also benefit from that and refresh
	 * the value more often.
	 *
	 * @example
	 * // the return value is the value itself and a setter, similar to useState
	 * const [v1, setV1] = useSimVar('L:AIRLINER_V1_SPEED', 'Knots');
	 *
	 * @example
	 * // only refresh the SimVar every 500ms (unless this SimVar is lower elsewhere)
	 * const [lightsTest] = useSimVar('L:XMLVAR_LTS_Test', 'Bool', 500);
	 *
	 * @returns {[*, (function(*): void)]}
	 *
	 * @see {@link useSplitSimVar} if your SimVar is set through a K event
	 * @see {@link useInteractionSimVar} if you emit an H event whenever your SimVar changes
	 * @see {@link useGlobalVar} if you have a Global Var instead
	 */


	const useSimVar = (name, unit, maxStaleness = 0) => {
	  const value = useSimVarValue(name, unit, maxStaleness);
	  const setter = useSimVarSetter(name, unit);
	  return [value, setter];
	};
	/**
	 * This is an internal hook that exposes the internal value for a SimVar only.
	 * You will usually want to useSimVar instead. Don't use this unless you know
	 * what you're doing and writing your own hook.
	 */

	const useSimVarValue = (name, unit, maxStaleness) => {
	  const contextValue = react.useContext(context);
	  react.useEffect(() => {
	    // This part of useEffect will be called whenever either:
	    // - the component has just mounted, or
	    // - one the parameters below (name, unit, maxStaleness) has changed.
	    // In these cases, we want to register our current parameters with the
	    // SimVarProvider that we access through the context.
	    contextValue.register(name, unit, maxStaleness, false);
	    return () => {
	      // This part of useEffect will be called whenever either:
	      // - one of the parameters below (name, unit, maxStaleness) is about
	      //   to change, or
	      // - the component is about to unmount
	      // In these cases, we want to unregister our current parameters from
	      // the SimVar provider, that we again access through the context.
	      contextValue.unregister(name, unit, maxStaleness, false);
	    };
	  }, [name, unit, maxStaleness]);
	  return contextValue.retrieve(name, unit);
	};
	/**
	 * This is an internal hook that exposes the internal setter for a SimVar only.
	 * You will usually want to useSimVar instead. Don't use this unless you know
	 * what you're doing and writing your own hook.
	 */

	const useSimVarSetter = (name, unit, proxy) => {
	  const contextValue = react.useContext(context);
	  return value => contextValue.update(name, unit, value, proxy);
	};

	const render = Slot => {
	  reactDom.render( /*#__PURE__*/jsxRuntime.jsx(SimVarProvider, {
	    children: Slot
	  }), getRenderTarget());
	};

	const Home = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    className: "homeContainer"
	  });
	};

	function _extends$2() {
	  _extends$2 = Object.assign || function (target) {
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

	  return _extends$2.apply(this, arguments);
	}

	/**
	 * Actions represent the type of change to a location value.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
	 */

	var Action;

	(function (Action) {
	  /**
	   * A POP indicates a change to an arbitrary index in the history stack, such
	   * as a back or forward navigation. It does not describe the direction of the
	   * navigation, only that the current index changed.
	   *
	   * Note: This is the default action for newly created history objects.
	   */
	  Action["Pop"] = "POP";
	  /**
	   * A PUSH indicates a new entry being added to the history stack, such as when
	   * a link is clicked and a new page loads. When this happens, all subsequent
	   * entries in the stack are lost.
	   */

	  Action["Push"] = "PUSH";
	  /**
	   * A REPLACE indicates the entry at the current index in the history stack
	   * being replaced by a new one.
	   */

	  Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));

	var readOnly = function (obj) {
	  return obj;
	};

	var BeforeUnloadEventType = 'beforeunload';
	var PopStateEventType = 'popstate';
	/**
	 * Browser history stores the location in regular URLs. This is the standard for
	 * most web apps, but it requires some configuration on the server to ensure you
	 * serve the same app at multiple URLs.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
	 */

	function createBrowserHistory(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$window = _options.window,
	      window = _options$window === void 0 ? document.defaultView : _options$window;
	  var globalHistory = window.history;

	  function getIndexAndLocation() {
	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var state = globalHistory.state || {};
	    return [state.idx, readOnly({
	      pathname: pathname,
	      search: search,
	      hash: hash,
	      state: state.usr || null,
	      key: state.key || 'default'
	    })];
	  }

	  var blockedPopTx = null;

	  function handlePop() {
	    if (blockedPopTx) {
	      blockers.call(blockedPopTx);
	      blockedPopTx = null;
	    } else {
	      var nextAction = Action.Pop;

	      var _getIndexAndLocation = getIndexAndLocation(),
	          nextIndex = _getIndexAndLocation[0],
	          nextLocation = _getIndexAndLocation[1];

	      if (blockers.length) {
	        if (nextIndex != null) {
	          var delta = index - nextIndex;

	          if (delta) {
	            // Revert the POP
	            blockedPopTx = {
	              action: nextAction,
	              location: nextLocation,
	              retry: function retry() {
	                go(delta * -1);
	              }
	            };
	            go(delta);
	          }
	        }
	      } else {
	        applyTx(nextAction);
	      }
	    }
	  }

	  window.addEventListener(PopStateEventType, handlePop);
	  var action = Action.Pop;

	  var _getIndexAndLocation2 = getIndexAndLocation(),
	      index = _getIndexAndLocation2[0],
	      location = _getIndexAndLocation2[1];

	  var listeners = createEvents();
	  var blockers = createEvents();

	  if (index == null) {
	    index = 0;
	    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
	      idx: index
	    }), '');
	  }

	  function createHref(to) {
	    return typeof to === 'string' ? to : createPath(to);
	  } // state defaults to `null` because `window.history.state` does


	  function getNextLocation(to, state) {
	    if (state === void 0) {
	      state = null;
	    }

	    return readOnly(_extends$2({
	      pathname: location.pathname,
	      hash: '',
	      search: ''
	    }, typeof to === 'string' ? parsePath(to) : to, {
	      state: state,
	      key: createKey()
	    }));
	  }

	  function getHistoryStateAndUrl(nextLocation, index) {
	    return [{
	      usr: nextLocation.state,
	      key: nextLocation.key,
	      idx: index
	    }, createHref(nextLocation)];
	  }

	  function allowTx(action, location, retry) {
	    return !blockers.length || (blockers.call({
	      action: action,
	      location: location,
	      retry: retry
	    }), false);
	  }

	  function applyTx(nextAction) {
	    action = nextAction;

	    var _getIndexAndLocation3 = getIndexAndLocation();

	    index = _getIndexAndLocation3[0];
	    location = _getIndexAndLocation3[1];
	    listeners.call({
	      action: action,
	      location: location
	    });
	  }

	  function push(to, state) {
	    var nextAction = Action.Push;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      push(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
	          historyState = _getHistoryStateAndUr[0],
	          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
	      // try...catch because iOS limits us to 100 pushState calls :/


	      try {
	        globalHistory.pushState(historyState, '', url);
	      } catch (error) {
	        // They are going to lose state here, but there is no real
	        // way to warn them about it since the page will refresh...
	        window.location.assign(url);
	      }

	      applyTx(nextAction);
	    }
	  }

	  function replace(to, state) {
	    var nextAction = Action.Replace;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      replace(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
	          historyState = _getHistoryStateAndUr2[0],
	          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


	      globalHistory.replaceState(historyState, '', url);
	      applyTx(nextAction);
	    }
	  }

	  function go(delta) {
	    globalHistory.go(delta);
	  }

	  var history = {
	    get action() {
	      return action;
	    },

	    get location() {
	      return location;
	    },

	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    back: function back() {
	      go(-1);
	    },
	    forward: function forward() {
	      go(1);
	    },
	    listen: function listen(listener) {
	      return listeners.push(listener);
	    },
	    block: function block(blocker) {
	      var unblock = blockers.push(blocker);

	      if (blockers.length === 1) {
	        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
	      }

	      return function () {
	        unblock(); // Remove the beforeunload listener so the document may
	        // still be salvageable in the pagehide event.
	        // See https://html.spec.whatwg.org/#unloading-documents

	        if (!blockers.length) {
	          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
	        }
	      };
	    }
	  };
	  return history;
	}

	function promptBeforeUnload(event) {
	  // Cancel the event.
	  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

	  event.returnValue = '';
	}

	function createEvents() {
	  var handlers = [];
	  return {
	    get length() {
	      return handlers.length;
	    },

	    push: function push(fn) {
	      handlers.push(fn);
	      return function () {
	        handlers = handlers.filter(function (handler) {
	          return handler !== fn;
	        });
	      };
	    },
	    call: function call(arg) {
	      handlers.forEach(function (fn) {
	        return fn && fn(arg);
	      });
	    }
	  };
	}

	function createKey() {
	  return Math.random().toString(36).substr(2, 8);
	}
	/**
	 * Creates a string URL path from the given pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
	 */


	function createPath(_ref) {
	  var _ref$pathname = _ref.pathname,
	      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
	      _ref$search = _ref.search,
	      search = _ref$search === void 0 ? '' : _ref$search,
	      _ref$hash = _ref.hash,
	      hash = _ref$hash === void 0 ? '' : _ref$hash;
	  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
	  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
	  return pathname;
	}
	/**
	 * Parses a string URL path into its separate pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
	 */


	function parsePath(path) {
	  var parsedPath = {};

	  if (path) {
	    var hashIndex = path.indexOf('#');

	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substr(hashIndex);
	      path = path.substr(0, hashIndex);
	    }

	    var searchIndex = path.indexOf('?');

	    if (searchIndex >= 0) {
	      parsedPath.search = path.substr(searchIndex);
	      path = path.substr(0, searchIndex);
	    }

	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }

	  return parsedPath;
	}

	/**
	 * React Router v6.0.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function invariant(cond, message) {
	  if (!cond) throw new Error(message);
	}
	// CONTEXT
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * A Navigator is a "location changer"; it's how you get to different locations.
	 *
	 * Every history instance conforms to the Navigator interface, but the
	 * distinction is useful primarily when it comes to the low-level <Router> API
	 * where both the location and a navigator must be provided separately in order
	 * to avoid "tearing" that may occur in a suspense-enabled app if the action
	 * and/or location were to be read directly from the history instance.
	 */


	const NavigationContext = /*#__PURE__*/react.createContext(null);

	const LocationContext = /*#__PURE__*/react.createContext(null);

	const RouteContext = /*#__PURE__*/react.createContext({
	  outlet: null,
	  matches: []
	});
	/**
	 * Renders the child route's element, if there is one.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#outlet
	 */


	function Outlet(_props) {
	  return useOutlet();
	}
	/**
	 * Declares an element that should be rendered at a certain URL path.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#route
	 */


	function Route(_props) {
	  invariant(false);
	}
	/**
	 * Provides location context for the rest of the app.
	 *
	 * Note: You usually won't render a <Router> directly. Instead, you'll render a
	 * router that is more specific to your environment such as a <BrowserRouter>
	 * in web browsers or a <StaticRouter> for server rendering.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#router
	 */


	function Router(_ref3) {
	  let {
	    basename: basenameProp = "/",
	    children = null,
	    location: locationProp,
	    navigationType = Action.Pop,
	    navigator,
	    static: staticProp = false
	  } = _ref3;
	  !!useInRouterContext() ? invariant(false) : void 0;
	  let basename = normalizePathname(basenameProp);
	  let navigationContext = react.useMemo(() => ({
	    basename,
	    navigator,
	    static: staticProp
	  }), [basename, navigator, staticProp]);

	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }

	  let {
	    pathname = "/",
	    search = "",
	    hash = "",
	    state = null,
	    key = "default"
	  } = locationProp;
	  let location = react.useMemo(() => {
	    let trailingPathname = stripBasename(pathname, basename);

	    if (trailingPathname == null) {
	      return null;
	    }

	    return {
	      pathname: trailingPathname,
	      search,
	      hash,
	      state,
	      key
	    };
	  }, [basename, pathname, search, hash, state, key]);

	  if (location == null) {
	    return null;
	  }

	  return /*#__PURE__*/react.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /*#__PURE__*/react.createElement(LocationContext.Provider, {
	    children: children,
	    value: {
	      location,
	      navigationType
	    }
	  }));
	}
	/**
	 * A container for a nested tree of <Route> elements that renders the branch
	 * that best matches the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#routes
	 */


	function Routes(_ref4) {
	  let {
	    children,
	    location
	  } = _ref4;
	  return useRoutes(createRoutesFromChildren(children), location);
	} ///////////////////////////////////////////////////////////////////////////////
	// HOOKS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Returns the full href for the given "to" value. This is useful for building
	 * custom links that are also accessible and preserve right-click behavior.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usehref
	 */


	function useHref(to) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.useContext(NavigationContext);
	  let {
	    hash,
	    pathname,
	    search
	  } = useResolvedPath(to);
	  let joinedPathname = pathname;

	  if (basename !== "/") {
	    let toPathname = getToPathname(to);
	    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
	    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
	  }

	  return navigator.createHref({
	    pathname: joinedPathname,
	    search,
	    hash
	  });
	}
	/**
	 * Returns true if this component is a descendant of a <Router>.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
	 */


	function useInRouterContext() {
	  return react.useContext(LocationContext) != null;
	}
	/**
	 * Returns the current location object, which represents the current URL in web
	 * browsers.
	 *
	 * Note: If you're using this it may mean you're doing some of your own
	 * "routing" in your app, and we'd like to know what your use case is. We may
	 * be able to provide something higher-level to better suit your needs.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#uselocation
	 */


	function useLocation() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  return react.useContext(LocationContext).location;
	}
	/**
	 * The interface for the navigate() function returned from useNavigate().
	 */

	/**
	 * Returns an imperative method for changing the location. Used by <Link>s, but
	 * may also be used by other elements to change the location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
	 */


	function useNavigate() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.useContext(NavigationContext);
	  let {
	    matches
	  } = react.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  let activeRef = react.useRef(false);
	  react.useEffect(() => {
	    activeRef.current = true;
	  });
	  let navigate = react.useCallback(function (to, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    if (!activeRef.current) return;

	    if (typeof to === "number") {
	      navigator.go(to);
	      return;
	    }

	    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

	    if (basename !== "/") {
	      path.pathname = joinPaths([basename, path.pathname]);
	    }

	    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
	  }, [basename, navigator, routePathnamesJson, locationPathname]);
	  return navigate;
	}
	/**
	 * Returns the element for the child route at this level of the route
	 * hierarchy. Used internally by <Outlet> to render child routes.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
	 */


	function useOutlet() {
	  return react.useContext(RouteContext).outlet;
	}
	/**
	 * Resolves the pathname of the given `to` value against the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
	 */


	function useResolvedPath(to) {
	  let {
	    matches
	  } = react.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  return react.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
	}
	/**
	 * Returns the element of the route that matched the current location, prepared
	 * with the correct context to render the remainder of the route tree. Route
	 * elements in the tree must render an <Outlet> to render their child route's
	 * element.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useroutes
	 */


	function useRoutes(routes, locationArg) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    matches: parentMatches
	  } = react.useContext(RouteContext);
	  let routeMatch = parentMatches[parentMatches.length - 1];
	  let parentParams = routeMatch ? routeMatch.params : {};
	  routeMatch ? routeMatch.pathname : "/";
	  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  routeMatch && routeMatch.route;

	  let locationFromContext = useLocation();
	  let location;

	  if (locationArg) {
	    var _parsedLocationArg$pa;

	    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }

	  let pathname = location.pathname || "/";
	  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
	  let matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });

	  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
	    params: Object.assign({}, parentParams, match.params),
	    pathname: joinPaths([parentPathnameBase, match.pathname]),
	    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
	  })), parentMatches);
	} ///////////////////////////////////////////////////////////////////////////////
	// UTILS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Creates a route config from a React "children" object, which is usually
	 * either a `<Route>` element or an array of them. Used internally by
	 * `<Routes>` to create a route config from its children.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
	 */


	function createRoutesFromChildren(children) {
	  let routes = [];
	  react.Children.forEach(children, element => {
	    if (! /*#__PURE__*/react.isValidElement(element)) {
	      // Ignore non-elements. This allows people to more easily inline
	      // conditionals in their route config.
	      return;
	    }

	    if (element.type === react.Fragment) {
	      // Transparently support React.Fragment and its children.
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
	      return;
	    }

	    !(element.type === Route) ? invariant(false) : void 0;
	    let route = {
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      index: element.props.index,
	      path: element.props.path
	    };

	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children);
	    }

	    routes.push(route);
	  });
	  return routes;
	}
	/**
	 * A RouteMatch contains info about how a route matched a URL.
	 */

	/**
	 * Matches the given routes to a location and returns the match data.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
	 */


	function matchRoutes(routes, locationArg, basename) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  let pathname = stripBasename(location.pathname || "/", basename);

	  if (pathname == null) {
	    return null;
	  }

	  let branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  let matches = null;

	  for (let i = 0; matches == null && i < branches.length; ++i) {
	    matches = matchRouteBranch(branches[i], routes, pathname);
	  }

	  return matches;
	}

	function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	  if (branches === void 0) {
	    branches = [];
	  }

	  if (parentsMeta === void 0) {
	    parentsMeta = [];
	  }

	  if (parentPath === void 0) {
	    parentPath = "";
	  }

	  routes.forEach((route, index) => {
	    let meta = {
	      relativePath: route.path || "",
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index
	    };

	    if (meta.relativePath.startsWith("/")) {
	      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }

	    let path = joinPaths([parentPath, meta.relativePath]);
	    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
	    // route tree depth-first and child routes appear before their parents in
	    // the "flattened" version.

	    if (route.children && route.children.length > 0) {
	      !(route.index !== true) ? invariant(false) : void 0;
	      flattenRoutes(route.children, branches, routesMeta, path);
	    } // Routes without a path shouldn't ever match by themselves unless they are
	    // index routes, so don't add them to the list of possible branches.


	    if (route.path == null && !route.index) {
	      return;
	    }

	    branches.push({
	      path,
	      score: computeScore(path, route.index),
	      routesMeta
	    });
	  });
	  return branches;
	}

	function rankRouteBranches(branches) {
	  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
	  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
	}

	const paramRe = /^:\w+$/;
	const dynamicSegmentValue = 3;
	const indexRouteValue = 2;
	const emptySegmentValue = 1;
	const staticSegmentValue = 10;
	const splatPenalty = -2;

	const isSplat = s => s === "*";

	function computeScore(path, index) {
	  let segments = path.split("/");
	  let initialScore = segments.length;

	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }

	  if (index) {
	    initialScore += indexRouteValue;
	  }

	  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
	}

	function compareIndexes(a, b) {
	  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
	  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}

	function matchRouteBranch(branch, // TODO: attach original route object inside routesMeta so we don't need this arg
	routesArg, pathname) {
	  let routes = routesArg;
	  let {
	    routesMeta
	  } = branch;
	  let matchedParams = {};
	  let matchedPathname = "/";
	  let matches = [];

	  for (let i = 0; i < routesMeta.length; ++i) {
	    let meta = routesMeta[i];
	    let end = i === routesMeta.length - 1;
	    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    let match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end
	    }, remainingPathname);
	    if (!match) return null;
	    Object.assign(matchedParams, match.params);
	    let route = routes[meta.childrenIndex];
	    matches.push({
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
	      route
	    });

	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }

	    routes = route.children;
	  }

	  return matches;
	}

	function _renderMatches(matches, parentMatches) {
	  if (parentMatches === void 0) {
	    parentMatches = [];
	  }

	  if (matches == null) return null;
	  return matches.reduceRight((outlet, match, index) => {
	    return /*#__PURE__*/react.createElement(RouteContext.Provider, {
	      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/react.createElement(Outlet, null),
	      value: {
	        outlet,
	        matches: parentMatches.concat(matches.slice(0, index + 1))
	      }
	    });
	  }, null);
	}
	/**
	 * A PathPattern is used to match on some portion of a URL pathname.
	 */

	/**
	 * Performs pattern matching on a URL pathname and returns information about
	 * the match.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchpath
	 */


	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }

	  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	  let match = pathname.match(matcher);
	  if (!match) return null;
	  let matchedPathname = match[0];
	  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  let captureGroups = match.slice(1);
	  let params = paramNames.reduce((memo, paramName, index) => {
	    // We need to compute the pathnameBase here using the raw splat value
	    // instead of using params["*"] later because it will be decoded then
	    if (paramName === "*") {
	      let splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }

	    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
	    return memo;
	  }, {});
	  return {
	    params,
	    pathname: matchedPathname,
	    pathnameBase,
	    pattern
	  };
	}

	function compilePath(path, caseSensitive, end) {
	  if (caseSensitive === void 0) {
	    caseSensitive = false;
	  }

	  if (end === void 0) {
	    end = true;
	  }
	  let paramNames = [];
	  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
	  .replace(/^\/*/, "/") // Make sure it has a leading /
	  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
	  .replace(/:(\w+)/g, (_, paramName) => {
	    paramNames.push(paramName);
	    return "([^\\/]+)";
	  });

	  if (path.endsWith("*")) {
	    paramNames.push("*");
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
	    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
	  } else {
	    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
	    : // Otherwise, at least match a word boundary. This restricts parent
	    // routes to matching only their own words and nothing more, e.g. parent
	    // route "/home" should not match "/home2".
	    "(?:\\b|$)";
	  }

	  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
	  return [matcher, paramNames];
	}

	function safelyDecodeURIComponent(value, paramName) {
	  try {
	    return decodeURIComponent(value);
	  } catch (error) {
	    return value;
	  }
	}
	/**
	 * Returns a resolved path object relative to the given pathname.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
	 */


	function resolvePath(to, fromPathname) {
	  if (fromPathname === void 0) {
	    fromPathname = "/";
	  }

	  let {
	    pathname: toPathname,
	    search = "",
	    hash = ""
	  } = typeof to === "string" ? parsePath(to) : to;
	  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}

	function resolvePathname(relativePath, fromPathname) {
	  let segments = fromPathname.replace(/\/+$/, "").split("/");
	  let relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(segment => {
	    if (segment === "..") {
	      // Keep the root "" segment so the pathname starts at /
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}

	function resolveTo(toArg, routePathnames, locationPathname) {
	  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
	  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
	  // route context. This is explained in `Note on `<Link to>` values` in our
	  // migration guide from v5 as a means of disambiguation between `to` values
	  // that begin with `/` and those that do not. However, this is problematic for
	  // `to` values that do not provide a pathname. `to` can simply be a search or
	  // hash string, in which case we should assume that the navigation is relative
	  // to the current location's pathname and *not* the route pathname.

	  let from;

	  if (toPathname == null) {
	    from = locationPathname;
	  } else {
	    let routePathnameIndex = routePathnames.length - 1;

	    if (toPathname.startsWith("..")) {
	      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
	      // URL segment".  This is a key difference from how <a href> works and a
	      // major reason we call this a "to" value instead of a "href".

	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }

	      to.pathname = toSegments.join("/");
	    } // If there are more ".." segments than parent routes, resolve relative to
	    // the root / URL.


	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }

	  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

	  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
	    path.pathname += "/";
	  }

	  return path;
	}

	function getToPathname(to) {
	  // Empty strings should be treated the same as / paths
	  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
	}

	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;

	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  }

	  let nextChar = pathname.charAt(basename.length);

	  if (nextChar && nextChar !== "/") {
	    // pathname does not start with basename/
	    return null;
	  }

	  return pathname.slice(basename.length) || "/";
	}

	const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

	const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

	const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

	const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////

	/**
	 * React Router DOM v6.0.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
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

	  return _extends$1.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
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

	const _excluded$H = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
	      _excluded2$3 = ["aria-current", "caseSensitive", "className", "end", "style", "to"];
	// COMPONENTS
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * A <Router> for use in web browsers. Provides the cleanest URLs.
	 */


	function BrowserRouter(_ref) {
	  let {
	    basename,
	    children,
	    window
	  } = _ref;
	  let historyRef = react.useRef();

	  if (historyRef.current == null) {
	    historyRef.current = createBrowserHistory({
	      window
	    });
	  }

	  let history = historyRef.current;
	  let [state, setState] = react.useState({
	    action: history.action,
	    location: history.location
	  });
	  react.useLayoutEffect(() => history.listen(setState), [history]);
	  return /*#__PURE__*/react.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */


	const Link = /*#__PURE__*/react.forwardRef(function LinkWithRef(_ref3, ref) {
	  let {
	    onClick,
	    reloadDocument,
	    replace = false,
	    state,
	    target,
	    to
	  } = _ref3,
	      rest = _objectWithoutPropertiesLoose$1(_ref3, _excluded$H);

	  let href = useHref(to);
	  let internalOnClick = useLinkClickHandler(to, {
	    replace,
	    state,
	    target
	  });

	  function handleClick(event) {
	    if (onClick) onClick(event);

	    if (!event.defaultPrevented && !reloadDocument) {
	      internalOnClick(event);
	    }
	  }

	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/anchor-has-content
	    react.createElement("a", _extends$1({}, rest, {
	      href: href,
	      onClick: handleClick,
	      ref: ref,
	      target: target
	    }))
	  );
	});
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */


	const NavLink = /*#__PURE__*/react.forwardRef(function NavLinkWithRef(_ref4, ref) {
	  let {
	    "aria-current": ariaCurrentProp = "page",
	    caseSensitive = false,
	    className: classNameProp = "",
	    end = false,
	    style: styleProp,
	    to
	  } = _ref4,
	      rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded2$3);

	  let location = useLocation();
	  let path = useResolvedPath(to);
	  let locationPathname = location.pathname;
	  let toPathname = path.pathname;

	  if (!caseSensitive) {
	    locationPathname = locationPathname.toLowerCase();
	    toPathname = toPathname.toLowerCase();
	  }

	  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
	  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
	  let className;

	  if (typeof classNameProp === "function") {
	    className = classNameProp({
	      isActive
	    });
	  } else {
	    // If the className prop is not a function, we use a default `active`
	    // class for <NavLink />s that are active. In v5 `active` was the default
	    // value for `activeClassName`, but we are removing that API and can still
	    // use the old default behavior for a cleaner upgrade path and keep the
	    // simple styling rules working as they currently do.
	    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
	  }

	  let style = typeof styleProp === "function" ? styleProp({
	    isActive
	  }) : styleProp;
	  return /*#__PURE__*/react.createElement(Link, _extends$1({}, rest, {
	    "aria-current": ariaCurrent,
	    className: className,
	    ref: ref,
	    style: style,
	    to: to
	  }));
	});
	// HOOKS
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Handles the click behavior for router `<Link>` components. This is useful if
	 * you need to create custom `<Link>` components with the same click behavior we
	 * use in our exported `<Link>`.
	 */


	function useLinkClickHandler(to, _temp) {
	  let {
	    target,
	    replace: replaceProp,
	    state
	  } = _temp === void 0 ? {} : _temp;
	  let navigate = useNavigate();
	  let location = useLocation();
	  let path = useResolvedPath(to);
	  return react.useCallback(event => {
	    if (event.button === 0 && ( // Ignore everything but left clicks
	    !target || target === "_self") && // Let browser handle "target=_blank" etc.
	    !isModifiedEvent(event) // Ignore clicks with modifier keys
	    ) {
	      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
	      // a push, so do the same here.

	      let replace = !!replaceProp || createPath(location) === createPath(path);
	      navigate(to, {
	        replace,
	        state
	      });
	    }
	  }, [location, navigate, path, replaceProp, state, target, to]);
	}

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

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$1 = "function" === typeof Symbol && Symbol.for,
	    c$2 = b$1 ? Symbol.for("react.element") : 60103,
	    d$2 = b$1 ? Symbol.for("react.portal") : 60106,
	    e$2 = b$1 ? Symbol.for("react.fragment") : 60107,
	    f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108,
	    g$2 = b$1 ? Symbol.for("react.profiler") : 60114,
	    h$1 = b$1 ? Symbol.for("react.provider") : 60109,
	    k$2 = b$1 ? Symbol.for("react.context") : 60110,
	    l$1 = b$1 ? Symbol.for("react.async_mode") : 60111,
	    m$2 = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
	    n$2 = b$1 ? Symbol.for("react.forward_ref") : 60112,
	    p$2 = b$1 ? Symbol.for("react.suspense") : 60113,
	    q$2 = b$1 ? Symbol.for("react.suspense_list") : 60120,
	    r$2 = b$1 ? Symbol.for("react.memo") : 60115,
	    t$1 = b$1 ? Symbol.for("react.lazy") : 60116,
	    v$1 = b$1 ? Symbol.for("react.block") : 60121,
	    w$1 = b$1 ? Symbol.for("react.fundamental") : 60117,
	    x$2 = b$1 ? Symbol.for("react.responder") : 60118,
	    y$2 = b$1 ? Symbol.for("react.scope") : 60119;

	function z$2(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;

	    switch (u) {
	      case c$2:
	        switch (a = a.type, a) {
	          case l$1:
	          case m$2:
	          case e$2:
	          case g$2:
	          case f$1:
	          case p$2:
	            return a;

	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$2:
	              case n$2:
	              case t$1:
	              case r$2:
	              case h$1:
	                return a;

	              default:
	                return u;
	            }

	        }

	      case d$2:
	        return u;
	    }
	  }
	}

	function A$2(a) {
	  return z$2(a) === m$2;
	}

	var AsyncMode = l$1;
	var ConcurrentMode = m$2;
	var ContextConsumer$1 = k$2;
	var ContextProvider$1 = h$1;
	var Element$1 = c$2;
	var ForwardRef$1 = n$2;
	var Fragment$1 = e$2;
	var Lazy$1 = t$1;
	var Memo$1 = r$2;
	var Portal$3 = d$2;
	var Profiler$1 = g$2;
	var StrictMode$1 = f$1;
	var Suspense$1 = p$2;

	var isAsyncMode$1 = function (a) {
	  return A$2(a) || z$2(a) === l$1;
	};

	var isConcurrentMode$1 = A$2;

	var isContextConsumer$1 = function (a) {
	  return z$2(a) === k$2;
	};

	var isContextProvider$1 = function (a) {
	  return z$2(a) === h$1;
	};

	var isElement$1 = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c$2;
	};

	var isForwardRef$1 = function (a) {
	  return z$2(a) === n$2;
	};

	var isFragment$1 = function (a) {
	  return z$2(a) === e$2;
	};

	var isLazy$1 = function (a) {
	  return z$2(a) === t$1;
	};

	var isMemo$1 = function (a) {
	  return z$2(a) === r$2;
	};

	var isPortal$1 = function (a) {
	  return z$2(a) === d$2;
	};

	var isProfiler$1 = function (a) {
	  return z$2(a) === g$2;
	};

	var isStrictMode$1 = function (a) {
	  return z$2(a) === f$1;
	};

	var isSuspense$1 = function (a) {
	  return z$2(a) === p$2;
	};

	var isValidElementType$1 = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$2 || a === m$2 || a === g$2 || a === f$1 || a === p$2 || a === q$2 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$2 || a.$$typeof === h$1 || a.$$typeof === k$2 || a.$$typeof === n$2 || a.$$typeof === w$1 || a.$$typeof === x$2 || a.$$typeof === y$2 || a.$$typeof === v$1);
	};

	var typeOf$1 = z$2;
	var reactIs_production_min$1 = {
	  AsyncMode: AsyncMode,
	  ConcurrentMode: ConcurrentMode,
	  ContextConsumer: ContextConsumer$1,
	  ContextProvider: ContextProvider$1,
	  Element: Element$1,
	  ForwardRef: ForwardRef$1,
	  Fragment: Fragment$1,
	  Lazy: Lazy$1,
	  Memo: Memo$1,
	  Portal: Portal$3,
	  Profiler: Profiler$1,
	  StrictMode: StrictMode$1,
	  Suspense: Suspense$1,
	  isAsyncMode: isAsyncMode$1,
	  isConcurrentMode: isConcurrentMode$1,
	  isContextConsumer: isContextConsumer$1,
	  isContextProvider: isContextProvider$1,
	  isElement: isElement$1,
	  isForwardRef: isForwardRef$1,
	  isFragment: isFragment$1,
	  isLazy: isLazy$1,
	  isMemo: isMemo$1,
	  isPortal: isPortal$1,
	  isProfiler: isProfiler$1,
	  isStrictMode: isStrictMode$1,
	  isSuspense: isSuspense$1,
	  isValidElementType: isValidElementType$1,
	  typeOf: typeOf$1
	};

	createCommonjsModule(function (module, exports) {
	});

	var reactIs = createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min$1;
	  }
	});

	function toVal(mix) {
	  var k,
	      y,
	      str = '';

	  if (typeof mix === 'string' || typeof mix === 'number') {
	    str += mix;
	  } else if (typeof mix === 'object') {
	    if (Array.isArray(mix)) {
	      for (k = 0; k < mix.length; k++) {
	        if (mix[k]) {
	          if (y = toVal(mix[k])) {
	            str && (str += ' ');
	            str += y;
	          }
	        }
	      }
	    } else {
	      for (k in mix) {
	        if (mix[k]) {
	          str && (str += ' ');
	          str += k;
	        }
	      }
	    }
	  }

	  return str;
	}

	function clsx () {
	  var i = 0,
	      tmp,
	      x,
	      str = '';

	  while (i < arguments.length) {
	    if (tmp = arguments[i++]) {
	      if (x = toVal(tmp)) {
	        str && (str += ' ');
	        str += x;
	      }
	    }
	  }

	  return str;
	}

	function isPlainObject(item) {
	  return item !== null && typeof item === 'object' && item.constructor === Object;
	}
	function deepmerge(target, source, options = {
	  clone: true
	}) {
	  const output = options.clone ? _extends$2({}, target) : target;

	  if (isPlainObject(target) && isPlainObject(source)) {
	    Object.keys(source).forEach(key => {
	      // Avoid prototype pollution
	      if (key === '__proto__') {
	        return;
	      }

	      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
	        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
	        output[key] = deepmerge(target[key], source[key], options);
	      } else {
	        output[key] = source[key];
	      }
	    });
	  }

	  return output;
	}

	/**
	 * WARNING: Don't import this directly.
	 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
	 * @param {number} code
	 */
	function formatMuiErrorMessage(code) {
	  // Apply babel-plugin-transform-template-literals in loose mode
	  // loose mode is safe iff we're concatenating primitives
	  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

	  /* eslint-disable prefer-template */
	  let url = 'https://mui.com/production-error/?code=' + code;

	  for (let i = 1; i < arguments.length; i += 1) {
	    // rest params over-transpile for this case
	    // eslint-disable-next-line prefer-rest-params
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }

	  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
	  /* eslint-enable prefer-template */
	}

	/** @license React v17.0.2
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b = 60103,
	    c$1 = 60106,
	    d$1 = 60107,
	    e$1 = 60108,
	    f = 60114,
	    g$1 = 60109,
	    h = 60110,
	    k$1 = 60112,
	    l = 60113,
	    m$1 = 60120,
	    n$1 = 60115,
	    p$1 = 60116,
	    q$1 = 60121,
	    r$1 = 60122,
	    u = 60117,
	    v = 60129,
	    w = 60131;

	if ("function" === typeof Symbol && Symbol.for) {
	  var x$1 = Symbol.for;
	  b = x$1("react.element");
	  c$1 = x$1("react.portal");
	  d$1 = x$1("react.fragment");
	  e$1 = x$1("react.strict_mode");
	  f = x$1("react.profiler");
	  g$1 = x$1("react.provider");
	  h = x$1("react.context");
	  k$1 = x$1("react.forward_ref");
	  l = x$1("react.suspense");
	  m$1 = x$1("react.suspense_list");
	  n$1 = x$1("react.memo");
	  p$1 = x$1("react.lazy");
	  q$1 = x$1("react.block");
	  r$1 = x$1("react.server.block");
	  u = x$1("react.fundamental");
	  v = x$1("react.debug_trace_mode");
	  w = x$1("react.legacy_hidden");
	}

	function y$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var t = a.$$typeof;

	    switch (t) {
	      case b:
	        switch (a = a.type, a) {
	          case d$1:
	          case f:
	          case e$1:
	          case l:
	          case m$1:
	            return a;

	          default:
	            switch (a = a && a.$$typeof, a) {
	              case h:
	              case k$1:
	              case p$1:
	              case n$1:
	              case g$1:
	                return a;

	              default:
	                return t;
	            }

	        }

	      case c$1:
	        return t;
	    }
	  }
	}

	var z$1 = g$1,
	    A$1 = b,
	    B$1 = k$1,
	    C$1 = d$1,
	    D$1 = p$1,
	    E$1 = n$1,
	    F$1 = c$1,
	    G$1 = f,
	    H$1 = e$1,
	    I$1 = l;
	var ContextConsumer = h;
	var ContextProvider = z$1;
	var Element = A$1;
	var ForwardRef = B$1;
	var Fragment = C$1;
	var Lazy = D$1;
	var Memo = E$1;
	var Portal$2 = F$1;
	var Profiler = G$1;
	var StrictMode = H$1;
	var Suspense = I$1;

	var isAsyncMode = function () {
	  return !1;
	};

	var isConcurrentMode = function () {
	  return !1;
	};

	var isContextConsumer = function (a) {
	  return y$1(a) === h;
	};

	var isContextProvider = function (a) {
	  return y$1(a) === g$1;
	};

	var isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === b;
	};

	var isForwardRef = function (a) {
	  return y$1(a) === k$1;
	};

	var isFragment = function (a) {
	  return y$1(a) === d$1;
	};

	var isLazy = function (a) {
	  return y$1(a) === p$1;
	};

	var isMemo = function (a) {
	  return y$1(a) === n$1;
	};

	var isPortal = function (a) {
	  return y$1(a) === c$1;
	};

	var isProfiler = function (a) {
	  return y$1(a) === f;
	};

	var isStrictMode = function (a) {
	  return y$1(a) === e$1;
	};

	var isSuspense = function (a) {
	  return y$1(a) === l;
	};

	var isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === d$1 || a === f || a === v || a === e$1 || a === l || a === m$1 || a === w || "object" === typeof a && null !== a && (a.$$typeof === p$1 || a.$$typeof === n$1 || a.$$typeof === g$1 || a.$$typeof === h || a.$$typeof === k$1 || a.$$typeof === u || a.$$typeof === q$1 || a[0] === r$1) ? !0 : !1;
	};

	var typeOf = y$1;
	var reactIs_production_min = {
	  ContextConsumer: ContextConsumer,
	  ContextProvider: ContextProvider,
	  Element: Element,
	  ForwardRef: ForwardRef,
	  Fragment: Fragment,
	  Lazy: Lazy,
	  Memo: Memo,
	  Portal: Portal$2,
	  Profiler: Profiler,
	  StrictMode: StrictMode,
	  Suspense: Suspense,
	  isAsyncMode: isAsyncMode,
	  isConcurrentMode: isConcurrentMode,
	  isContextConsumer: isContextConsumer,
	  isContextProvider: isContextProvider,
	  isElement: isElement,
	  isForwardRef: isForwardRef,
	  isFragment: isFragment,
	  isLazy: isLazy,
	  isMemo: isMemo,
	  isPortal: isPortal,
	  isProfiler: isProfiler,
	  isStrictMode: isStrictMode,
	  isSuspense: isSuspense,
	  isValidElementType: isValidElementType,
	  typeOf: typeOf
	};

	createCommonjsModule(function (module, exports) {
	});

	createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min;
	  }
	});

	//
	// A strict capitalization should uppercase the first letter of each word in the sentence.
	// We only handle the first word.

	function capitalize(string) {
	  if (typeof string !== 'string') {
	    throw new Error(formatMuiErrorMessage(7));
	  }

	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	/**
	 * Safe chained function.
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 */
	function createChainedFunction(...funcs) {
	  return funcs.reduce((acc, func) => {
	    if (func == null) {
	      return acc;
	    }

	    return function chainedFunction(...args) {
	      acc.apply(this, args);
	      func.apply(this, args);
	    };
	  }, () => {});
	}

	// Corresponds to 10 frames at 60 Hz.
	// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
	function debounce(func, wait = 166) {
	  let timeout;

	  function debounced(...args) {
	    const later = () => {
	      func.apply(this, args);
	    };

	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	  }

	  debounced.clear = () => {
	    clearTimeout(timeout);
	  };

	  return debounced;
	}

	function isMuiElement(element, muiNames) {
	  return /*#__PURE__*/ /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
	}

	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	function ownerWindow(node) {
	  const doc = ownerDocument(node);
	  return doc.defaultView || window;
	}

	/**
	 * TODO v5: consider making it private
	 *
	 * passes {value} to {ref}
	 *
	 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
	 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
	 * https://github.com/mui/material-ui/issues/13539
	 *
	 * Useful if you want to expose the ref of an inner component to the public API
	 * while still using it inside the component.
	 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
	 */
	function setRef(ref, value) {
	  if (typeof ref === 'function') {
	    ref(value);
	  } else if (ref) {
	    ref.current = value;
	  }
	}

	const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
	var useEnhancedEffect$1 = useEnhancedEffect;

	/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
	function useControlled({
	  controlled,
	  default: defaultProp,
	  name,
	  state = 'value'
	}) {
	  // isControlled is ignored in the hook dependency lists as it should never change.
	  const {
	    current: isControlled
	  } = react.useRef(controlled !== undefined);
	  const [valueState, setValue] = react.useState(defaultProp);
	  const value = isControlled ? controlled : valueState;

	  const setValueIfUncontrolled = react.useCallback(newValue => {
	    if (!isControlled) {
	      setValue(newValue);
	    }
	  }, []);
	  return [value, setValueIfUncontrolled];
	}

	/**
	 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
	 */

	function useEventCallback(fn) {
	  const ref = react.useRef(fn);
	  useEnhancedEffect$1(() => {
	    ref.current = fn;
	  });
	  return react.useCallback((...args) => // @ts-expect-error hide `this`
	  // tslint:disable-next-line:ban-comma-operator
	  (0, ref.current)(...args), []);
	}

	function useForkRef(refA, refB) {
	  /**
	   * This will create a new function if the ref props change and are defined.
	   * This means react will call the old forkRef with `null` and the new forkRef
	   * with the ref. Cleanup naturally emerges from this behavior.
	   */
	  return react.useMemo(() => {
	    if (refA == null && refB == null) {
	      return null;
	    }

	    return refValue => {
	      setRef(refA, refValue);
	      setRef(refB, refValue);
	    };
	  }, [refA, refB]);
	}

	// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
	let hadKeyboardEvent = true;
	let hadFocusVisibleRecently = false;
	let hadFocusVisibleRecentlyTimeout;
	const inputTypesWhitelist = {
	  text: true,
	  search: true,
	  url: true,
	  tel: true,
	  email: true,
	  password: true,
	  number: true,
	  date: true,
	  month: true,
	  week: true,
	  time: true,
	  datetime: true,
	  'datetime-local': true
	};
	/**
	 * Computes whether the given element should automatically trigger the
	 * `focus-visible` class being added, i.e. whether it should always match
	 * `:focus-visible` when focused.
	 * @param {Element} node
	 * @returns {boolean}
	 */

	function focusTriggersKeyboardModality(node) {
	  const {
	    type,
	    tagName
	  } = node;

	  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
	    return true;
	  }

	  if (tagName === 'TEXTAREA' && !node.readOnly) {
	    return true;
	  }

	  if (node.isContentEditable) {
	    return true;
	  }

	  return false;
	}
	/**
	 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
	 * If the most recent user interaction was via the keyboard;
	 * and the key press did not include a meta, alt/option, or control key;
	 * then the modality is keyboard. Otherwise, the modality is not keyboard.
	 * @param {KeyboardEvent} event
	 */


	function handleKeyDown(event) {
	  if (event.metaKey || event.altKey || event.ctrlKey) {
	    return;
	  }

	  hadKeyboardEvent = true;
	}
	/**
	 * If at any point a user clicks with a pointing device, ensure that we change
	 * the modality away from keyboard.
	 * This avoids the situation where a user presses a key on an already focused
	 * element, and then clicks on a different element, focusing it with a
	 * pointing device, while we still think we're in keyboard modality.
	 */


	function handlePointerDown() {
	  hadKeyboardEvent = false;
	}

	function handleVisibilityChange() {
	  if (this.visibilityState === 'hidden') {
	    // If the tab becomes active again, the browser will handle calling focus
	    // on the element (Safari actually calls it twice).
	    // If this tab change caused a blur on an element with focus-visible,
	    // re-apply the class when the user switches back to the tab.
	    if (hadFocusVisibleRecently) {
	      hadKeyboardEvent = true;
	    }
	  }
	}

	function prepare(doc) {
	  doc.addEventListener('keydown', handleKeyDown, true);
	  doc.addEventListener('mousedown', handlePointerDown, true);
	  doc.addEventListener('pointerdown', handlePointerDown, true);
	  doc.addEventListener('touchstart', handlePointerDown, true);
	  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
	}

	function isFocusVisible(event) {
	  const {
	    target
	  } = event;

	  try {
	    return target.matches(':focus-visible');
	  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
	    // We use our own heuristic for those browsers.
	    // Rethrow might be better if it's not the expected error but do we really
	    // want to crash if focus-visible malfunctioned?
	  } // No need for validFocusTarget check. The user does that by attaching it to
	  // focusable events only.


	  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
	}

	function useIsFocusVisible() {
	  const ref = react.useCallback(node => {
	    if (node != null) {
	      prepare(node.ownerDocument);
	    }
	  }, []);
	  const isFocusVisibleRef = react.useRef(false);
	  /**
	   * Should be called if a blur event is fired
	   */

	  function handleBlurVisible() {
	    // checking against potential state variable does not suffice if we focus and blur synchronously.
	    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
	    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
	    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
	    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
	    if (isFocusVisibleRef.current) {
	      // To detect a tab/window switch, we look for a blur event followed
	      // rapidly by a visibility change.
	      // If we don't see a visibility change within 100ms, it's probably a
	      // regular focus change.
	      hadFocusVisibleRecently = true;
	      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
	      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
	        hadFocusVisibleRecently = false;
	      }, 100);
	      isFocusVisibleRef.current = false;
	      return true;
	    }

	    return false;
	  }
	  /**
	   * Should be called if a blur event is fired
	   */


	  function handleFocusVisible(event) {
	    if (isFocusVisible(event)) {
	      isFocusVisibleRef.current = true;
	      return true;
	    }

	    return false;
	  }

	  return {
	    isFocusVisibleRef,
	    onFocus: handleFocusVisible,
	    onBlur: handleBlurVisible,
	    ref
	  };
	}

	// A change of the browser zoom change the scrollbar size.
	// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
	function getScrollbarSize(doc) {
	  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
	  const documentWidth = doc.documentElement.clientWidth;
	  return Math.abs(window.innerWidth - documentWidth);
	}

	/**
	 * Add keys, values of `defaultProps` that does not exist in `props`
	 * @param {object} defaultProps
	 * @param {object} props
	 * @returns {object} resolved props
	 */

	function resolveProps(defaultProps, props) {
	  const output = _extends$2({}, props);

	  Object.keys(defaultProps).forEach(propName => {
	    if (output[propName] === undefined) {
	      output[propName] = defaultProps[propName];
	    }
	  });
	  return output;
	}

	/**
	 * Determines if a given element is a DOM element name (i.e. not a React component).
	 */
	function isHostComponent(element) {
	  return typeof element === 'string';
	}

	function composeClasses(slots, getUtilityClass, classes) {
	  const output = {};
	  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
	  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
	  slot => {
	    output[slot] = slots[slot].reduce((acc, key) => {
	      if (key) {
	        if (classes && classes[key]) {
	          acc.push(classes[key]);
	        }

	        acc.push(getUtilityClass(key));
	      }

	      return acc;
	    }, []).join(' ');
	  });
	  return output;
	}

	const defaultGenerator = componentName => componentName;

	const createClassNameGenerator = () => {
	  let generate = defaultGenerator;
	  return {
	    configure(generator) {
	      generate = generator;
	    },

	    generate(componentName) {
	      return generate(componentName);
	    },

	    reset() {
	      generate = defaultGenerator;
	    }

	  };
	};

	const ClassNameGenerator = createClassNameGenerator();
	var ClassNameGenerator$1 = ClassNameGenerator;

	const globalStateClassesMapping = {
	  active: 'Mui-active',
	  checked: 'Mui-checked',
	  completed: 'Mui-completed',
	  disabled: 'Mui-disabled',
	  error: 'Mui-error',
	  expanded: 'Mui-expanded',
	  focused: 'Mui-focused',
	  focusVisible: 'Mui-focusVisible',
	  required: 'Mui-required',
	  selected: 'Mui-selected'
	};
	function generateUtilityClass(componentName, slot) {
	  const globalStateClass = globalStateClassesMapping[slot];
	  return globalStateClass || "".concat(ClassNameGenerator$1.generate(componentName), "-").concat(slot);
	}

	function generateUtilityClasses(componentName, slots) {
	  const result = {};
	  slots.forEach(slot => {
	    result[slot] = generateUtilityClass(componentName, slot);
	  });
	  return result;
	}

	function getContainer$1(container) {
	  return typeof container === 'function' ? container() : container;
	}
	/**
	 * Portals provide a first-class way to render children into a DOM node
	 * that exists outside the DOM hierarchy of the parent component.
	 */


	const Portal = /*#__PURE__*/react.forwardRef(function Portal(props, ref) {
	  const {
	    children,
	    container,
	    disablePortal = false
	  } = props;
	  const [mountNode, setMountNode] = react.useState(null);
	  const handleRef = useForkRef( /*#__PURE__*/ /*#__PURE__*/react.isValidElement(children) ? children.ref : null, ref);
	  useEnhancedEffect$1(() => {
	    if (!disablePortal) {
	      setMountNode(getContainer$1(container) || document.body);
	    }
	  }, [container, disablePortal]);
	  useEnhancedEffect$1(() => {
	    if (mountNode && !disablePortal) {
	      setRef(ref, mountNode);
	      return () => {
	        setRef(ref, null);
	      };
	    }

	    return undefined;
	  }, [ref, mountNode, disablePortal]);

	  if (disablePortal) {
	    if ( /*#__PURE__*/react.isValidElement(children)) {
	      return /*#__PURE__*/react.cloneElement(children, {
	        ref: handleRef
	      });
	    }

	    return children;
	  }

	  return mountNode ? /*#__PURE__*/reactDom.createPortal(children, mountNode) : mountNode;
	});

	var Portal$1 = Portal;

	function isOverflowing(container) {
	  const doc = ownerDocument(container);

	  if (doc.body === container) {
	    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
	  }

	  return container.scrollHeight > container.clientHeight;
	}

	function ariaHidden(element, show) {
	  if (show) {
	    element.setAttribute('aria-hidden', 'true');
	  } else {
	    element.removeAttribute('aria-hidden');
	  }
	}

	function getPaddingRight(element) {
	  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
	}

	function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
	  const blacklist = [mountElement, currentElement, ...elementsToExclude];
	  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
	  [].forEach.call(container.children, element => {
	    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
	      ariaHidden(element, show);
	    }
	  });
	}

	function findIndexOf(items, callback) {
	  let idx = -1;
	  items.some((item, index) => {
	    if (callback(item)) {
	      idx = index;
	      return true;
	    }

	    return false;
	  });
	  return idx;
	}

	function handleContainer(containerInfo, props) {
	  const restoreStyle = [];
	  const container = containerInfo.container;

	  if (!props.disableScrollLock) {
	    if (isOverflowing(container)) {
	      // Compute the size before applying overflow hidden to avoid any scroll jumps.
	      const scrollbarSize = getScrollbarSize(ownerDocument(container));
	      restoreStyle.push({
	        value: container.style.paddingRight,
	        property: 'padding-right',
	        el: container
	      }); // Use computed style, here to get the real padding to add our scrollbar width.

	      container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

	      const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
	      [].forEach.call(fixedElements, element => {
	        restoreStyle.push({
	          value: element.style.paddingRight,
	          property: 'padding-right',
	          el: element
	        });
	        element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
	      });
	    } // Improve Gatsby support
	    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


	    const parent = container.parentElement;
	    const containerWindow = ownerWindow(container);
	    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
	    // screensize shrink.

	    restoreStyle.push({
	      value: scrollContainer.style.overflow,
	      property: 'overflow',
	      el: scrollContainer
	    }, {
	      value: scrollContainer.style.overflowX,
	      property: 'overflow-x',
	      el: scrollContainer
	    }, {
	      value: scrollContainer.style.overflowY,
	      property: 'overflow-y',
	      el: scrollContainer
	    });
	    scrollContainer.style.overflow = 'hidden';
	  }

	  const restore = () => {
	    restoreStyle.forEach(({
	      value,
	      el,
	      property
	    }) => {
	      if (value) {
	        el.style.setProperty(property, value);
	      } else {
	        el.style.removeProperty(property);
	      }
	    });
	  };

	  return restore;
	}

	function getHiddenSiblings(container) {
	  const hiddenSiblings = [];
	  [].forEach.call(container.children, element => {
	    if (element.getAttribute('aria-hidden') === 'true') {
	      hiddenSiblings.push(element);
	    }
	  });
	  return hiddenSiblings;
	}
	/**
	 * @ignore - do not document.
	 *
	 * Proper state management for containers and the modals in those containers.
	 * Simplified, but inspired by react-overlay's ModalManager class.
	 * Used by the Modal to ensure proper styling of containers.
	 */


	class ModalManager {
	  constructor() {
	    this.containers = void 0;
	    this.modals = void 0;
	    this.modals = [];
	    this.containers = [];
	  }

	  add(modal, container) {
	    let modalIndex = this.modals.indexOf(modal);

	    if (modalIndex !== -1) {
	      return modalIndex;
	    }

	    modalIndex = this.modals.length;
	    this.modals.push(modal); // If the modal we are adding is already in the DOM.

	    if (modal.modalRef) {
	      ariaHidden(modal.modalRef, false);
	    }

	    const hiddenSiblings = getHiddenSiblings(container);
	    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
	    const containerIndex = findIndexOf(this.containers, item => item.container === container);

	    if (containerIndex !== -1) {
	      this.containers[containerIndex].modals.push(modal);
	      return modalIndex;
	    }

	    this.containers.push({
	      modals: [modal],
	      container,
	      restore: null,
	      hiddenSiblings
	    });
	    return modalIndex;
	  }

	  mount(modal, props) {
	    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
	    const containerInfo = this.containers[containerIndex];

	    if (!containerInfo.restore) {
	      containerInfo.restore = handleContainer(containerInfo, props);
	    }
	  }

	  remove(modal) {
	    const modalIndex = this.modals.indexOf(modal);

	    if (modalIndex === -1) {
	      return modalIndex;
	    }

	    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
	    const containerInfo = this.containers[containerIndex];
	    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
	    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

	    if (containerInfo.modals.length === 0) {
	      // The modal might be closed before it had the chance to be mounted in the DOM.
	      if (containerInfo.restore) {
	        containerInfo.restore();
	      }

	      if (modal.modalRef) {
	        // In case the modal wasn't in the DOM yet.
	        ariaHidden(modal.modalRef, true);
	      }

	      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
	      this.containers.splice(containerIndex, 1);
	    } else {
	      // Otherwise make sure the next top modal is visible to a screen reader.
	      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
	      // aria-hidden because the dom element doesn't exist either
	      // when modal was unmounted before modalRef gets null

	      if (nextTop.modalRef) {
	        ariaHidden(nextTop.modalRef, false);
	      }
	    }

	    return modalIndex;
	  }

	  isTopModal(modal) {
	    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
	  }

	}

	/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
	const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

	function getTabIndex(node) {
	  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

	  if (!Number.isNaN(tabindexAttr)) {
	    return tabindexAttr;
	  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
	  // so if they don't have a tabindex attribute specifically set, assume it's 0.
	  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
	  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
	  //  yet they are still part of the regular tab order; in FF, they get a default
	  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
	  //  order, consider their tab index to be 0.


	  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
	    return 0;
	  }

	  return node.tabIndex;
	}

	function isNonTabbableRadio(node) {
	  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
	    return false;
	  }

	  if (!node.name) {
	    return false;
	  }

	  const getRadio = selector => node.ownerDocument.querySelector("input[type=\"radio\"]".concat(selector));

	  let roving = getRadio("[name=\"".concat(node.name, "\"]:checked"));

	  if (!roving) {
	    roving = getRadio("[name=\"".concat(node.name, "\"]"));
	  }

	  return roving !== node;
	}

	function isNodeMatchingSelectorFocusable(node) {
	  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
	    return false;
	  }

	  return true;
	}

	function defaultGetTabbable(root) {
	  const regularTabNodes = [];
	  const orderedTabNodes = [];
	  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
	    const nodeTabIndex = getTabIndex(node);

	    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
	      return;
	    }

	    if (nodeTabIndex === 0) {
	      regularTabNodes.push(node);
	    } else {
	      orderedTabNodes.push({
	        documentOrder: i,
	        tabIndex: nodeTabIndex,
	        node
	      });
	    }
	  });
	  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
	}

	function defaultIsEnabled() {
	  return true;
	}
	/**
	 * Utility component that locks focus inside the component.
	 */


	function TrapFocus(props) {
	  const {
	    children,
	    disableAutoFocus = false,
	    disableEnforceFocus = false,
	    disableRestoreFocus = false,
	    getTabbable = defaultGetTabbable,
	    isEnabled = defaultIsEnabled,
	    open
	  } = props;
	  const ignoreNextEnforceFocus = react.useRef();
	  const sentinelStart = react.useRef(null);
	  const sentinelEnd = react.useRef(null);
	  const nodeToRestore = react.useRef(null);
	  const reactFocusEventTarget = react.useRef(null); // This variable is useful when disableAutoFocus is true.
	  // It waits for the active element to move into the component to activate.

	  const activated = react.useRef(false);
	  const rootRef = react.useRef(null);
	  const handleRef = useForkRef(children.ref, rootRef);
	  const lastKeydown = react.useRef(null);
	  react.useEffect(() => {
	    // We might render an empty child.
	    if (!open || !rootRef.current) {
	      return;
	    }

	    activated.current = !disableAutoFocus;
	  }, [disableAutoFocus, open]);
	  react.useEffect(() => {
	    // We might render an empty child.
	    if (!open || !rootRef.current) {
	      return;
	    }

	    const doc = ownerDocument(rootRef.current);

	    if (!rootRef.current.contains(doc.activeElement)) {
	      if (!rootRef.current.hasAttribute('tabIndex')) {

	        rootRef.current.setAttribute('tabIndex', -1);
	      }

	      if (activated.current) {
	        rootRef.current.focus();
	      }
	    }

	    return () => {
	      // restoreLastFocus()
	      if (!disableRestoreFocus) {
	        // In IE11 it is possible for document.activeElement to be null resulting
	        // in nodeToRestore.current being null.
	        // Not all elements in IE11 have a focus method.
	        // Once IE11 support is dropped the focus() call can be unconditional.
	        if (nodeToRestore.current && nodeToRestore.current.focus) {
	          ignoreNextEnforceFocus.current = true;
	          nodeToRestore.current.focus();
	        }

	        nodeToRestore.current = null;
	      }
	    }; // Missing `disableRestoreFocus` which is fine.
	    // We don't support changing that prop on an open TrapFocus
	    // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [open]);
	  react.useEffect(() => {
	    // We might render an empty child.
	    if (!open || !rootRef.current) {
	      return;
	    }

	    const doc = ownerDocument(rootRef.current);

	    const contain = nativeEvent => {
	      const {
	        current: rootElement
	      } = rootRef; // Cleanup functions are executed lazily in React 17.
	      // Contain can be called between the component being unmounted and its cleanup function being run.

	      if (rootElement === null) {
	        return;
	      }

	      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
	        ignoreNextEnforceFocus.current = false;
	        return;
	      }

	      if (!rootElement.contains(doc.activeElement)) {
	        // if the focus event is not coming from inside the children's react tree, reset the refs
	        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
	          reactFocusEventTarget.current = null;
	        } else if (reactFocusEventTarget.current !== null) {
	          return;
	        }

	        if (!activated.current) {
	          return;
	        }

	        let tabbable = [];

	        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
	          tabbable = getTabbable(rootRef.current);
	        }

	        if (tabbable.length > 0) {
	          var _lastKeydown$current, _lastKeydown$current2;

	          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
	          const focusNext = tabbable[0];
	          const focusPrevious = tabbable[tabbable.length - 1];

	          if (isShiftTab) {
	            focusPrevious.focus();
	          } else {
	            focusNext.focus();
	          }
	        } else {
	          rootElement.focus();
	        }
	      }
	    };

	    const loopFocus = nativeEvent => {
	      lastKeydown.current = nativeEvent;

	      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
	        return;
	      } // Make sure the next tab starts from the right place.
	      // doc.activeElement referes to the origin.


	      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
	        // We need to ignore the next contain as
	        // it will try to move the focus back to the rootRef element.
	        ignoreNextEnforceFocus.current = true;
	        sentinelEnd.current.focus();
	      }
	    };

	    doc.addEventListener('focusin', contain);
	    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
	    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
	    // Instead, we can look if the active element was restored on the BODY element.
	    //
	    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
	    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

	    const interval = setInterval(() => {
	      if (doc.activeElement.tagName === 'BODY') {
	        contain();
	      }
	    }, 50);
	    return () => {
	      clearInterval(interval);
	      doc.removeEventListener('focusin', contain);
	      doc.removeEventListener('keydown', loopFocus, true);
	    };
	  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

	  const onFocus = event => {
	    if (nodeToRestore.current === null) {
	      nodeToRestore.current = event.relatedTarget;
	    }

	    activated.current = true;
	    reactFocusEventTarget.current = event.target;
	    const childrenPropsHandler = children.props.onFocus;

	    if (childrenPropsHandler) {
	      childrenPropsHandler(event);
	    }
	  };

	  const handleFocusSentinel = event => {
	    if (nodeToRestore.current === null) {
	      nodeToRestore.current = event.relatedTarget;
	    }

	    activated.current = true;
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      tabIndex: 0,
	      onFocus: handleFocusSentinel,
	      ref: sentinelStart,
	      "data-test": "sentinelStart"
	    }), /*#__PURE__*/react.cloneElement(children, {
	      ref: handleRef,
	      onFocus
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      tabIndex: 0,
	      onFocus: handleFocusSentinel,
	      ref: sentinelEnd,
	      "data-test": "sentinelEnd"
	    })]
	  });
	}

	function getModalUtilityClass(slot) {
	  return generateUtilityClass('MuiModal', slot);
	}
	generateUtilityClasses('MuiModal', ['root', 'hidden']);

	const _excluded$G = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];

	const useUtilityClasses$o = ownerState => {
	  const {
	    open,
	    exited,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', !open && exited && 'hidden']
	  };
	  return composeClasses(slots, getModalUtilityClass, classes);
	};

	function getContainer(container) {
	  return typeof container === 'function' ? container() : container;
	}

	function getHasTransition(props) {
	  return props.children ? props.children.props.hasOwnProperty('in') : false;
	} // A modal manager used to track and manage the state of open Modals.
	// Modals don't open on the server so this won't conflict with concurrent requests.


	const defaultManager = new ModalManager();
	/**
	 * Modal is a lower-level construct that is leveraged by the following components:
	 *
	 * - [Dialog](/material-ui/api/dialog/)
	 * - [Drawer](/material-ui/api/drawer/)
	 * - [Menu](/material-ui/api/menu/)
	 * - [Popover](/material-ui/api/popover/)
	 *
	 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
	 * rather than directly using Modal.
	 *
	 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
	 */

	const ModalUnstyled = /*#__PURE__*/react.forwardRef(function ModalUnstyled(props, ref) {
	  const {
	    BackdropComponent,
	    BackdropProps,
	    children,
	    classes: classesProp,
	    className,
	    closeAfterTransition = false,
	    component = 'div',
	    components = {},
	    componentsProps = {},
	    container,
	    disableAutoFocus = false,
	    disableEnforceFocus = false,
	    disableEscapeKeyDown = false,
	    disablePortal = false,
	    disableRestoreFocus = false,
	    disableScrollLock = false,
	    hideBackdrop = false,
	    keepMounted = false,
	    // private
	    // eslint-disable-next-line react/prop-types
	    manager = defaultManager,
	    onBackdropClick,
	    onClose,
	    onKeyDown,
	    open,

	    /* eslint-disable react/prop-types */
	    theme,
	    onTransitionEnter,
	    onTransitionExited
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$G);

	  const [exited, setExited] = react.useState(true);
	  const modal = react.useRef({});
	  const mountNodeRef = react.useRef(null);
	  const modalRef = react.useRef(null);
	  const handleRef = useForkRef(modalRef, ref);
	  const hasTransition = getHasTransition(props);

	  const getDoc = () => ownerDocument(mountNodeRef.current);

	  const getModal = () => {
	    modal.current.modalRef = modalRef.current;
	    modal.current.mountNode = mountNodeRef.current;
	    return modal.current;
	  };

	  const handleMounted = () => {
	    manager.mount(getModal(), {
	      disableScrollLock
	    }); // Fix a bug on Chrome where the scroll isn't initially 0.

	    modalRef.current.scrollTop = 0;
	  };

	  const handleOpen = useEventCallback(() => {
	    const resolvedContainer = getContainer(container) || getDoc().body;
	    manager.add(getModal(), resolvedContainer); // The element was already mounted.

	    if (modalRef.current) {
	      handleMounted();
	    }
	  });
	  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
	  const handlePortalRef = useEventCallback(node => {
	    mountNodeRef.current = node;

	    if (!node) {
	      return;
	    }

	    if (open && isTopModal()) {
	      handleMounted();
	    } else {
	      ariaHidden(modalRef.current, true);
	    }
	  });
	  const handleClose = react.useCallback(() => {
	    manager.remove(getModal());
	  }, [manager]);
	  react.useEffect(() => {
	    return () => {
	      handleClose();
	    };
	  }, [handleClose]);
	  react.useEffect(() => {
	    if (open) {
	      handleOpen();
	    } else if (!hasTransition || !closeAfterTransition) {
	      handleClose();
	    }
	  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

	  const ownerState = _extends$2({}, props, {
	    classes: classesProp,
	    closeAfterTransition,
	    disableAutoFocus,
	    disableEnforceFocus,
	    disableEscapeKeyDown,
	    disablePortal,
	    disableRestoreFocus,
	    disableScrollLock,
	    exited,
	    hideBackdrop,
	    keepMounted
	  });

	  const classes = useUtilityClasses$o(ownerState);

	  if (!keepMounted && !open && (!hasTransition || exited)) {
	    return null;
	  }

	  const handleEnter = () => {
	    setExited(false);

	    if (onTransitionEnter) {
	      onTransitionEnter();
	    }
	  };

	  const handleExited = () => {
	    setExited(true);

	    if (onTransitionExited) {
	      onTransitionExited();
	    }

	    if (closeAfterTransition) {
	      handleClose();
	    }
	  };

	  const handleBackdropClick = event => {
	    if (event.target !== event.currentTarget) {
	      return;
	    }

	    if (onBackdropClick) {
	      onBackdropClick(event);
	    }

	    if (onClose) {
	      onClose(event, 'backdropClick');
	    }
	  };

	  const handleKeyDown = event => {
	    if (onKeyDown) {
	      onKeyDown(event);
	    } // The handler doesn't take event.defaultPrevented into account:
	    //
	    // event.preventDefault() is meant to stop default behaviors like
	    // clicking a checkbox to check it, hitting a button to submit a form,
	    // and hitting left arrow to move the cursor in a text input etc.
	    // Only special HTML elements have these default behaviors.


	    if (event.key !== 'Escape' || !isTopModal()) {
	      return;
	    }

	    if (!disableEscapeKeyDown) {
	      // Swallow the event, in case someone is listening for the escape key on the body.
	      event.stopPropagation();

	      if (onClose) {
	        onClose(event, 'escapeKeyDown');
	      }
	    }
	  };

	  const childProps = {};

	  if (children.props.tabIndex === undefined) {
	    childProps.tabIndex = '-1';
	  } // It's a Transition like component


	  if (hasTransition) {
	    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
	    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
	  }

	  const Root = components.Root || component;
	  const rootProps = componentsProps.root || {};
	  return /*#__PURE__*/jsxRuntime.jsx(Portal$1, {
	    ref: handlePortalRef,
	    container: container,
	    disablePortal: disablePortal,
	    children: /*#__PURE__*/jsxRuntime.jsxs(Root, _extends$2({
	      role: "presentation"
	    }, rootProps, !isHostComponent(Root) && {
	      as: component,
	      ownerState: _extends$2({}, ownerState, rootProps.ownerState),
	      theme
	    }, other, {
	      ref: handleRef,
	      onKeyDown: handleKeyDown,
	      className: clsx(classes.root, rootProps.className, className),
	      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntime.jsx(BackdropComponent, _extends$2({
	        "aria-hidden": true,
	        open: open,
	        onClick: handleBackdropClick
	      }, BackdropProps)) : null, /*#__PURE__*/jsxRuntime.jsx(TrapFocus, {
	        disableEnforceFocus: disableEnforceFocus,
	        disableAutoFocus: disableAutoFocus,
	        disableRestoreFocus: disableRestoreFocus,
	        isEnabled: isTopModal,
	        open: open,
	        children: /*#__PURE__*/react.cloneElement(children, childProps)
	      })]
	    }))
	  });
	});
	var ModalUnstyled$1 = ModalUnstyled;

	const _excluded$F = ["onChange", "maxRows", "minRows", "style", "value"];

	function getStyleValue(computedStyle, property) {
	  return parseInt(computedStyle[property], 10) || 0;
	}

	const styles$2 = {
	  shadow: {
	    // Visibility needed to hide the extra text area on iPads
	    visibility: 'hidden',
	    // Remove from the content flow
	    position: 'absolute',
	    // Ignore the scrollbar width
	    overflow: 'hidden',
	    height: 0,
	    top: 0,
	    left: 0,
	    // Create a new layer, increase the isolation of the computed values
	    transform: 'translateZ(0)'
	  }
	};
	const TextareaAutosize = /*#__PURE__*/react.forwardRef(function TextareaAutosize(props, ref) {
	  const {
	    onChange,
	    maxRows,
	    minRows = 1,
	    style,
	    value
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$F);

	  const {
	    current: isControlled
	  } = react.useRef(value != null);
	  const inputRef = react.useRef(null);
	  const handleRef = useForkRef(ref, inputRef);
	  const shadowRef = react.useRef(null);
	  const renders = react.useRef(0);
	  const [state, setState] = react.useState({});
	  const syncHeight = react.useCallback(() => {
	    const input = inputRef.current;
	    const containerWindow = ownerWindow(input);
	    const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

	    if (computedStyle.width === '0px') {
	      return;
	    }

	    const inputShallow = shadowRef.current;
	    inputShallow.style.width = computedStyle.width;
	    inputShallow.value = input.value || props.placeholder || 'x';

	    if (inputShallow.value.slice(-1) === '\n') {
	      // Certain fonts which overflow the line height will cause the textarea
	      // to report a different scrollHeight depending on whether the last line
	      // is empty. Make it non-empty to avoid this issue.
	      inputShallow.value += ' ';
	    }

	    const boxSizing = computedStyle['box-sizing'];
	    const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
	    const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

	    const innerHeight = inputShallow.scrollHeight; // Measure height of a textarea with a single row

	    inputShallow.value = 'x';
	    const singleRowHeight = inputShallow.scrollHeight; // The height of the outer content

	    let outerHeight = innerHeight;

	    if (minRows) {
	      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
	    }

	    if (maxRows) {
	      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
	    }

	    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

	    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
	    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
	    setState(prevState => {
	      // Need a large enough difference to update the height.
	      // This prevents infinite rendering loop.
	      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
	        renders.current += 1;
	        return {
	          overflow,
	          outerHeightStyle
	        };
	      }

	      return prevState;
	    });
	  }, [maxRows, minRows, props.placeholder]);
	  react.useEffect(() => {
	    const handleResize = debounce(() => {
	      renders.current = 0;
	      syncHeight();
	    });
	    const containerWindow = ownerWindow(inputRef.current);
	    containerWindow.addEventListener('resize', handleResize);
	    let resizeObserver;

	    if (typeof ResizeObserver !== 'undefined') {
	      resizeObserver = new ResizeObserver(handleResize);
	      resizeObserver.observe(inputRef.current);
	    }

	    return () => {
	      handleResize.clear();
	      containerWindow.removeEventListener('resize', handleResize);

	      if (resizeObserver) {
	        resizeObserver.disconnect();
	      }
	    };
	  }, [syncHeight]);
	  useEnhancedEffect$1(() => {
	    syncHeight();
	  });
	  react.useEffect(() => {
	    renders.current = 0;
	  }, [value]);

	  const handleChange = event => {
	    renders.current = 0;

	    if (!isControlled) {
	      syncHeight();
	    }

	    if (onChange) {
	      onChange(event);
	    }
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [/*#__PURE__*/jsxRuntime.jsx("textarea", _extends$2({
	      value: value,
	      onChange: handleChange,
	      ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
	      ,
	      rows: minRows,
	      style: _extends$2({
	        height: state.outerHeightStyle,
	        // Need a large enough difference to allow scrolling.
	        // This prevents infinite rendering loop.
	        overflow: state.overflow ? 'hidden' : null
	      }, style)
	    }, other)), /*#__PURE__*/jsxRuntime.jsx("textarea", {
	      "aria-hidden": true,
	      className: props.className,
	      readOnly: true,
	      ref: shadowRef,
	      tabIndex: -1,
	      style: _extends$2({}, styles$2.shadow, style, {
	        padding: 0
	      })
	    })]
	  });
	});
	var TextareaAutosize$1 = TextareaAutosize;

	createCommonjsModule(function (module) {
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
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _extends.apply(this, arguments);
	  }

	  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	function memoize$1(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}

	var StyleSheet = /*#__PURE__*/function () {
	  function StyleSheet(options) {
	    var _this = this;

	    this._insertTag = function (tag) {
	      var before;

	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }

	      _this.container.insertBefore(tag, before);

	      _this.tags.push(tag);
	    };

	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode && tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	var e = "-ms-";
	var r = "-moz-";
	var a = "-webkit-";
	var c = "comm";
	var n = "rule";
	var t = "decl";
	var i = "@import";
	var p = "@keyframes";
	var k = Math.abs;
	var d = String.fromCharCode;
	var g = Object.assign;

	function m(e, r) {
	  return (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3);
	}

	function x(e) {
	  return e.trim();
	}

	function y(e, r) {
	  return (e = r.exec(e)) ? e[0] : e;
	}

	function j(e, r, a) {
	  return e.replace(r, a);
	}

	function C(e, r) {
	  return e.indexOf(r);
	}

	function z(e, r) {
	  return e.charCodeAt(r) | 0;
	}

	function A(e, r, a) {
	  return e.slice(r, a);
	}

	function O(e) {
	  return e.length;
	}

	function M(e) {
	  return e.length;
	}

	function S(e, r) {
	  return r.push(e), e;
	}

	function q(e, r) {
	  return e.map(r).join("");
	}

	var B = 1;
	var D = 1;
	var E = 0;
	var F = 0;
	var G = 0;
	var H = "";

	function I(e, r, a, c, n, t, s) {
	  return {
	    value: e,
	    root: r,
	    parent: a,
	    type: c,
	    props: n,
	    children: t,
	    line: B,
	    column: D,
	    length: s,
	    return: ""
	  };
	}

	function J(e, r) {
	  return g(I("", null, null, "", null, null, 0), e, {
	    length: -e.length
	  }, r);
	}

	function K() {
	  return G;
	}

	function L() {
	  G = F > 0 ? z(H, --F) : 0;
	  if (D--, G === 10) D = 1, B--;
	  return G;
	}

	function N() {
	  G = F < E ? z(H, F++) : 0;
	  if (D++, G === 10) D = 1, B++;
	  return G;
	}

	function P() {
	  return z(H, F);
	}

	function Q() {
	  return F;
	}

	function R(e, r) {
	  return A(H, e, r);
	}

	function T(e) {
	  switch (e) {
	    case 0:
	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      return 5;

	    case 33:
	    case 43:
	    case 44:
	    case 47:
	    case 62:
	    case 64:
	    case 126:
	    case 59:
	    case 123:
	    case 125:
	      return 4;

	    case 58:
	      return 3;

	    case 34:
	    case 39:
	    case 40:
	    case 91:
	      return 2;

	    case 41:
	    case 93:
	      return 1;
	  }

	  return 0;
	}

	function U(e) {
	  return B = D = 1, E = O(H = e), F = 0, [];
	}

	function V(e) {
	  return H = "", e;
	}

	function W(e) {
	  return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
	}

	function Y(e) {
	  while (G = P()) if (G < 33) N();else break;

	  return T(e) > 2 || T(G) > 3 ? "" : " ";
	}

	function _$1(e, r) {
	  while (--r && N()) if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;

	  return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
	}

	function ee(e) {
	  while (N()) switch (G) {
	    case e:
	      return F;

	    case 34:
	    case 39:
	      if (e !== 34 && e !== 39) ee(G);
	      break;

	    case 40:
	      if (e === 41) ee(e);
	      break;

	    case 92:
	      N();
	      break;
	  }

	  return F;
	}

	function re(e, r) {
	  while (N()) if (e + G === 47 + 10) break;else if (e + G === 42 + 42 && P() === 47) break;

	  return "/*" + R(r, F - 1) + "*" + d(e === 47 ? e : N());
	}

	function ae(e) {
	  while (!T(P())) N();

	  return R(e, F);
	}

	function ce(e) {
	  return V(ne("", null, null, null, [""], e = U(e), 0, [0], e));
	}

	function ne(e, r, a, c, n, t, s, u, i) {
	  var f = 0;
	  var o = 0;
	  var l = s;
	  var v = 0;
	  var h = 0;
	  var p = 0;
	  var b = 1;
	  var w = 1;
	  var $ = 1;
	  var k = 0;
	  var g = "";
	  var m = n;
	  var x = t;
	  var y = c;
	  var z = g;

	  while (w) switch (p = k, k = N()) {
	    case 40:
	      if (p != 108 && z.charCodeAt(l - 1) == 58) {
	        if (C(z += j(W(k), "&", "&\f"), "&\f") != -1) $ = -1;
	        break;
	      }

	    case 34:
	    case 39:
	    case 91:
	      z += W(k);
	      break;

	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      z += Y(p);
	      break;

	    case 92:
	      z += _$1(Q() - 1, 7);
	      continue;

	    case 47:
	      switch (P()) {
	        case 42:
	        case 47:
	          S(se(re(N(), Q()), r, a), i);
	          break;

	        default:
	          z += "/";
	      }

	      break;

	    case 123 * b:
	      u[f++] = O(z) * $;

	    case 125 * b:
	    case 59:
	    case 0:
	      switch (k) {
	        case 0:
	        case 125:
	          w = 0;

	        case 59 + o:
	          if (h > 0 && O(z) - l) S(h > 32 ? ue(z + ";", c, a, l - 1) : ue(j(z, " ", "") + ";", c, a, l - 2), i);
	          break;

	        case 59:
	          z += ";";

	        default:
	          S(y = te(z, r, a, f, o, n, u, g, m = [], x = [], l), t);
	          if (k === 123) if (o === 0) ne(z, r, y, y, m, t, l, u, x);else switch (v) {
	            case 100:
	            case 109:
	            case 115:
	              ne(e, y, y, c && S(te(e, y, y, 0, 0, n, u, g, n, m = [], l), x), n, x, l, u, c ? m : x);
	              break;

	            default:
	              ne(z, y, y, y, [""], x, 0, u, x);
	          }
	      }

	      f = o = h = 0, b = $ = 1, g = z = "", l = s;
	      break;

	    case 58:
	      l = 1 + O(z), h = p;

	    default:
	      if (b < 1) if (k == 123) --b;else if (k == 125 && b++ == 0 && L() == 125) continue;

	      switch (z += d(k), k * b) {
	        case 38:
	          $ = o > 0 ? 1 : (z += "\f", -1);
	          break;

	        case 44:
	          u[f++] = (O(z) - 1) * $, $ = 1;
	          break;

	        case 64:
	          if (P() === 45) z += W(N());
	          v = P(), o = l = O(g = z += ae(Q())), k++;
	          break;

	        case 45:
	          if (p === 45 && O(z) == 2) b = 0;
	      }

	  }

	  return t;
	}

	function te(e, r, a, c, t, s, u, i, f, o, l) {
	  var v = t - 1;
	  var h = t === 0 ? s : [""];
	  var p = M(h);

	  for (var b = 0, w = 0, $ = 0; b < c; ++b) for (var d = 0, g = A(e, v + 1, v = k(w = u[b])), m = e; d < p; ++d) if (m = x(w > 0 ? h[d] + " " + g : j(g, /&\f/g, h[d]))) f[$++] = m;

	  return I(e, r, a, t === 0 ? n : i, f, o, l);
	}

	function se(e, r, a) {
	  return I(e, r, a, c, d(K()), A(e, 2, -2), 0);
	}

	function ue(e, r, a, c) {
	  return I(e, r, a, t, A(e, 0, c), A(e, c + 1, -1), c);
	}

	function ie(c, n) {
	  switch (m(c, n)) {
	    case 5103:
	      return a + "print-" + c + c;

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921:
	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005:
	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855:
	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return a + c + c;

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return a + c + r + c + e + c + c;

	    case 6828:
	    case 4268:
	      return a + c + e + c + c;

	    case 6165:
	      return a + c + e + "flex-" + c + c;

	    case 5187:
	      return a + c + j(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c;

	    case 5443:
	      return a + c + e + "flex-item-" + j(c, /flex-|-self/, "") + c;

	    case 4675:
	      return a + c + e + "flex-line-pack" + j(c, /align-content|flex-|-self/, "") + c;

	    case 5548:
	      return a + c + e + j(c, "shrink", "negative") + c;

	    case 5292:
	      return a + c + e + j(c, "basis", "preferred-size") + c;

	    case 6060:
	      return a + "box-" + j(c, "-grow", "") + a + c + e + j(c, "grow", "positive") + c;

	    case 4554:
	      return a + j(c, /([^-])(transform)/g, "$1" + a + "$2") + c;

	    case 6187:
	      return j(j(j(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c;

	    case 5495:
	    case 3959:
	      return j(c, /(image-set\([^]*)/, a + "$1" + "$`$1");

	    case 4968:
	      return j(j(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c + c;

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return j(c, /(.+)-inline(.+)/, a + "$1$2") + c;

	    case 8116:
	    case 7059:
	    case 5753:
	    case 5535:
	    case 5445:
	    case 5701:
	    case 4933:
	    case 4677:
	    case 5533:
	    case 5789:
	    case 5021:
	    case 4765:
	      if (O(c) - 1 - n > 6) switch (z(c, n + 1)) {
	        case 109:
	          if (z(c, n + 4) !== 45) break;

	        case 102:
	          return j(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c, n + 3) == 108 ? "$3" : "$2-$3")) + c;

	        case 115:
	          return ~C(c, "stretch") ? ie(j(c, "stretch", "fill-available"), n) + c : c;
	      }
	      break;

	    case 4949:
	      if (z(c, n + 1) !== 115) break;

	    case 6444:
	      switch (z(c, O(c) - 3 - (~C(c, "!important") && 10))) {
	        case 107:
	          return j(c, ":", ":" + a) + c;

	        case 101:
	          return j(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c;
	      }

	      break;

	    case 5936:
	      switch (z(c, n + 11)) {
	        case 114:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb") + c;

	        case 108:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;

	        case 45:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
	      }

	      return a + c + e + c + c;
	  }

	  return c;
	}

	function fe(e, r) {
	  var a = "";
	  var c = M(e);

	  for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || "";

	  return a;
	}

	function oe(e, r, a, s) {
	  switch (e.type) {
	    case i:
	    case t:
	      return e.return = e.return || e.value;

	    case c:
	      return "";

	    case p:
	      return e.return = e.value + "{" + fe(e.children, s) + "}";

	    case n:
	      e.value = e.props.join(",");
	  }

	  return O(a = fe(e.children, s)) ? e.return = e.value + "{" + a + "}" : "";
	}

	function le(e) {
	  var r = M(e);
	  return function (a, c, n, t) {
	    var s = "";

	    for (var u = 0; u < r; u++) s += e[u](a, c, n, t) || "";

	    return s;
	  };
	}

	function ve(e) {
	  return function (r) {
	    if (!r.root) if (r = r.return) e(r);
	  };
	}

	function he(c, s, u, i) {
	  if (c.length > -1) if (!c.return) switch (c.type) {
	    case t:
	      c.return = ie(c.value, c.length);
	      break;

	    case p:
	      return fe([J(c, {
	        value: j(c.value, "@", "@" + a)
	      })], i);

	    case n:
	      if (c.length) return q(c.props, function (n) {
	        switch (y(n, /(::plac\w+|:read-\w+)/)) {
	          case ":read-only":
	          case ":read-write":
	            return fe([J(c, {
	              props: [j(n, /:(read-\w+)/, ":" + r + "$1")]
	            })], i);

	          case "::placeholder":
	            return fe([J(c, {
	              props: [j(n, /:(plac\w+)/, ":" + a + "input-$1")]
	            }), J(c, {
	              props: [j(n, /:(plac\w+)/, ":" + r + "$1")]
	            }), J(c, {
	              props: [j(n, /:(plac\w+)/, e + "input-$1")]
	            })], i);
	        }

	        return "";
	      });
	  }
	}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;

	  while (true) {
	    previous = character;
	    character = P(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }

	    if (T(character)) {
	      break;
	    }

	    N();
	  }

	  return R(begin, F);
	};

	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;

	  do {
	    switch (T(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && P() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }

	        parsed[index] += identifierWithPointTracking(F - 1, points, index);
	        break;

	      case 2:
	        parsed[index] += W(character);
	        break;

	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = P() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += d(character);
	    }
	  } while (character = N());

	  return parsed;
	};

	var getRules = function getRules(value, points) {
	  return V(toRules(U(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


	var fixedElements = /* #__PURE__ */new WeakMap();

	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }

	  var value = element.value,
	      parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;

	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case


	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */
	  && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


	  if (isImplicitRule) {
	    return;
	  }

	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;

	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};

	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	var isBrowser$4 = typeof document !== 'undefined';
	var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
	  return memoize$1(function () {
	    var cache = {};
	    return function (name) {
	      return cache[name];
	    };
	  });
	});
	var defaultStylisPlugins = [he];

	var createCache = function createCache(options) {
	  var key = options.key;

	  if (isBrowser$4 && key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');

	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }

	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }

	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

	  var inserted = {}; // $FlowFixMe

	  var container;
	  var nodesToHydrate = [];

	  if (isBrowser$4) {
	    container = options.container || document.head;
	    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }

	      nodesToHydrate.push(node);
	    });
	  }

	  var _insert;

	  var omnipresentPlugins = [compat, removeLabel];

	  if (isBrowser$4) {
	    var currentSheet;
	    var finalizingPlugins = [oe, ve(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

	    var stylis = function stylis(styles) {
	      return fe(ce(styles), serializer);
	    };

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;

	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  } else {
	    var _finalizingPlugins = [oe];

	    var _serializer = le(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

	    var _stylis = function _stylis(styles) {
	      return fe(ce(styles), _serializer);
	    }; // $FlowFixMe


	    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;

	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      }

	      return serverStylisCache[name];
	    };

	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);

	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }

	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	var isBrowser$3 = typeof document !== 'undefined';

	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}

	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }
	};

	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  registerStyles(cache, serialized, isStringTag);
	  var className = cache.key + "-" + serialized.name;

	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

	      if (!isBrowser$3 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }

	      current = current.next;
	    } while (current !== undefined);

	    if (!isBrowser$3 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }

	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;

	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);

	    if (stringMode) {

	      styles += strings[i];
	    }
	  }


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var isBrowser$2 = typeof document !== 'undefined';
	var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);

	EmotionCacheContext.Provider;

	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/react.forwardRef(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react.useContext(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};

	if (!isBrowser$2) {
	  withEmotionCache = function withEmotionCache(func) {
	    return function (props) {
	      var cache = react.useContext(EmotionCacheContext);

	      if (cache === null) {
	        // yes, we're potentially creating this on every render
	        // it doesn't actually matter though since it's only on the server
	        // so there will only every be a single render
	        // that could change in the future because of suspense and etc. but for now,
	        // this works and i don't want to optimise for a future thing that we aren't sure about
	        cache = createCache({
	          key: 'css'
	        });
	        return /*#__PURE__*/react.createElement(EmotionCacheContext.Provider, {
	          value: cache
	        }, func(props, cache));
	      } else {
	        return func(props, cache);
	      }
	    };
	  };
	}

	var ThemeContext$2 = /* #__PURE__ */react.createContext({});
	React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};

	var useInsertionEffect$1 = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : react.useLayoutEffect;
	// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
	// initial client-side render from SSR, use place of hydrating tag

	var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

	  var styles = props.styles;
	  var serialized = serializeStyles([styles], undefined, react.useContext(ThemeContext$2));

	  if (!isBrowser$2) {
	    var _ref;

	    var serializedNames = serialized.name;
	    var serializedStyles = serialized.styles;
	    var next = serialized.next;

	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      serializedStyles += next.styles;
	      next = next.next;
	    }

	    var shouldCache = cache.compat === true;
	    var rules = cache.insert("", {
	      name: serializedNames,
	      styles: serializedStyles
	    }, cache.sheet, shouldCache);

	    if (shouldCache) {
	      return null;
	    }

	    return /*#__PURE__*/react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref.nonce = cache.sheet.nonce, _ref));
	  } // yes, i know these hooks are used conditionally
	  // but it is based on a constant that will never change at runtime
	  // it's effectively like having two implementations and switching them out
	  // so it's not actually breaking anything


	  var sheetRef = react.useRef();
	  useInsertionEffect$1(function () {
	    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

	    var sheet = new cache.sheet.constructor({
	      key: key,
	      nonce: cache.sheet.nonce,
	      container: cache.sheet.container,
	      speedy: cache.sheet.isSpeedy
	    });
	    var rehydrating = false; // $FlowFixMe

	    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

	    if (cache.sheet.tags.length) {
	      sheet.before = cache.sheet.tags[0];
	    }

	    if (node !== null) {
	      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

	      node.setAttribute('data-emotion', key);
	      sheet.hydrate([node]);
	    }

	    sheetRef.current = [sheet, rehydrating];
	    return function () {
	      sheet.flush();
	    };
	  }, [cache]);
	  useInsertionEffect$1(function () {
	    var sheetRefCurrent = sheetRef.current;
	    var sheet = sheetRefCurrent[0],
	        rehydrating = sheetRefCurrent[1];

	    if (rehydrating) {
	      sheetRefCurrent[1] = false;
	      return;
	    }

	    if (serialized.next !== undefined) {
	      // insert keyframes
	      insertStyles(cache, serialized.next, true);
	    }

	    if (sheet.tags.length) {
	      // if this doesn't exist then it will be null so the style element will be appended
	      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
	      sheet.before = element;
	      sheet.flush();
	    }

	    cache.insert("", serialized, sheet, false);
	  }, [cache, serialized.name]);
	  return null;
	});

	function css() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return serializeStyles(args);
	}

	var keyframes = function keyframes() {
	  var insertable = css.apply(void 0, arguments);
	  var name = "animation-" + insertable.name; // $FlowFixMe

	  return {
	    name: name,
	    styles: "@keyframes " + name + "{" + insertable.styles + "}",
	    anim: 1,
	    toString: function toString() {
	      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
	    }
	  };
	};

	var testOmitPropsOnStringTag = isPropValid;

	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
	  return key !== 'theme';
	};

	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};

	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
	  var shouldForwardProp;

	  if (options) {
	    var optionsShouldForwardProp = options.shouldForwardProp;
	    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
	      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
	    } : optionsShouldForwardProp;
	  }

	  if (typeof shouldForwardProp !== 'function' && isReal) {
	    shouldForwardProp = tag.__emotion_forwardProp;
	  }

	  return shouldForwardProp;
	};

	var isBrowser = typeof document !== 'undefined';
	var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};

	function useInsertionEffectMaybe(create) {
	  if (!isBrowser) {
	    return create();
	  }

	  useInsertionEffect(create);
	}
	var isBrowser$1 = typeof document !== 'undefined';

	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	      serialized = _ref.serialized,
	      isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  var rules = useInsertionEffectMaybe(function () {
	    return insertStyles(cache, serialized, isStringTag);
	  });

	  if (!isBrowser$1 && rules !== undefined) {
	    var _ref2;

	    var serializedNames = serialized.name;
	    var next = serialized.next;

	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      next = next.next;
	    }

	    return /*#__PURE__*/react.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref2.nonce = cache.sheet.nonce, _ref2));
	  }

	  return null;
	};

	var createStyled$1 = function createStyled(tag, options) {

	  var isReal = tag.__emotion_real === tag;
	  var baseTag = isReal && tag.__emotion_base || tag;
	  var identifierName;
	  var targetClassName;

	  if (options !== undefined) {
	    identifierName = options.label;
	    targetClassName = options.target;
	  }

	  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
	  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	  var shouldUseAs = !defaultShouldForwardProp('as');
	  return function () {
	    var args = arguments;
	    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	    if (identifierName !== undefined) {
	      styles.push("label:" + identifierName + ";");
	    }

	    if (args[0] == null || args[0].raw === undefined) {
	      styles.push.apply(styles, args);
	    } else {

	      styles.push(args[0][0]);
	      var len = args.length;
	      var i = 1;

	      for (; i < len; i++) {

	        styles.push(args[i], args[0][i]);
	      }
	    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


	    var Styled = withEmotionCache(function (props, cache, ref) {
	      var FinalTag = shouldUseAs && props.as || baseTag;
	      var className = '';
	      var classInterpolations = [];
	      var mergedProps = props;

	      if (props.theme == null) {
	        mergedProps = {};

	        for (var key in props) {
	          mergedProps[key] = props[key];
	        }

	        mergedProps.theme = react.useContext(ThemeContext$2);
	      }

	      if (typeof props.className === 'string') {
	        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
	      } else if (props.className != null) {
	        className = props.className + " ";
	      }

	      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
	      className += cache.key + "-" + serialized.name;

	      if (targetClassName !== undefined) {
	        className += " " + targetClassName;
	      }

	      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
	      var newProps = {};

	      for (var _key in props) {
	        if (shouldUseAs && _key === 'as') continue;

	        if ( // $FlowFixMe
	        finalShouldForwardProp(_key)) {
	          newProps[_key] = props[_key];
	        }
	      }

	      newProps.className = className;
	      newProps.ref = ref;
	      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Insertion, {
	        cache: cache,
	        serialized: serialized,
	        isStringTag: typeof FinalTag === 'string'
	      }), /*#__PURE__*/react.createElement(FinalTag, newProps));
	    });
	    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
	    Styled.defaultProps = tag.defaultProps;
	    Styled.__emotion_real = Styled;
	    Styled.__emotion_base = baseTag;
	    Styled.__emotion_styles = styles;
	    Styled.__emotion_forwardProp = shouldForwardProp;
	    Object.defineProperty(Styled, 'toString', {
	      value: function value() {
	        if (targetClassName === undefined && "production" !== 'production') {
	          return 'NO_COMPONENT_SELECTOR';
	        } // $FlowFixMe: coerce undefined to string


	        return "." + targetClassName;
	      }
	    });

	    Styled.withComponent = function (nextTag, nextOptions) {
	      return createStyled(nextTag, _extends$2({}, options, nextOptions, {
	        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
	      })).apply(void 0, styles);
	    };

	    return Styled;
	  };
	};

	var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	var newStyled = createStyled$1.bind();
	tags.forEach(function (tagName) {
	  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
	  newStyled[tagName] = newStyled(tagName);
	});
	var emStyled = newStyled;

	function isEmpty$3(obj) {
	  return obj === undefined || obj === null || Object.keys(obj).length === 0;
	}

	function GlobalStyles$1(props) {
	  const {
	    styles,
	    defaultTheme = {}
	  } = props;
	  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$3(themeInput) ? defaultTheme : themeInput) : styles;
	  return /*#__PURE__*/jsxRuntime.jsx(Global, {
	    styles: globalStyles
	  });
	}

	/** @license MUI v5.6.1
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function styled$2(tag, options) {
	  const stylesFactory = emStyled(tag, options);

	  return stylesFactory;
	}

	function merge(acc, item) {
	  if (!item) {
	    return acc;
	  }

	  return deepmerge(acc, item, {
	    clone: false // No need to clone deep, it's way faster.

	  });
	}

	// For instance with the first breakpoint xs: [xs, sm[.

	const values$1 = {
	  xs: 0,
	  // phone
	  sm: 600,
	  // tablet
	  md: 900,
	  // small laptop
	  lg: 1200,
	  // desktop
	  xl: 1536 // large screen

	};
	const defaultBreakpoints = {
	  // Sorted ASC by size. That's important.
	  // It can't be configured as it's used statically for propTypes.
	  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	  up: key => "@media (min-width:".concat(values$1[key], "px)")
	};
	function handleBreakpoints(props, propValue, styleFromPropValue) {
	  const theme = props.theme || {};

	  if (Array.isArray(propValue)) {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return propValue.reduce((acc, item, index) => {
	      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
	      return acc;
	    }, {});
	  }

	  if (typeof propValue === 'object') {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return Object.keys(propValue).reduce((acc, breakpoint) => {
	      // key is breakpoint
	      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
	        const mediaKey = themeBreakpoints.up(breakpoint);
	        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
	      } else {
	        const cssKey = breakpoint;
	        acc[cssKey] = propValue[cssKey];
	      }

	      return acc;
	    }, {});
	  }

	  const output = styleFromPropValue(propValue);
	  return output;
	}

	function createEmptyBreakpointObject(breakpointsInput = {}) {
	  var _breakpointsInput$key;

	  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
	    const breakpointStyleKey = breakpointsInput.up(key);
	    acc[breakpointStyleKey] = {};
	    return acc;
	  }, {});
	  return breakpointsInOrder || {};
	}
	function removeUnusedBreakpoints(breakpointKeys, style) {
	  return breakpointKeys.reduce((acc, key) => {
	    const breakpointOutput = acc[key];
	    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;

	    if (isBreakpointUnused) {
	      delete acc[key];
	    }

	    return acc;
	  }, style);
	}
	// [1,2,3] => {xs: true, sm: true, md: true}
	// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}

	function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
	  // fixed value
	  if (typeof breakpointValues !== 'object') {
	    return {};
	  }

	  const base = {};
	  const breakpointsKeys = Object.keys(themeBreakpoints);

	  if (Array.isArray(breakpointValues)) {
	    breakpointsKeys.forEach((breakpoint, i) => {
	      if (i < breakpointValues.length) {
	        base[breakpoint] = true;
	      }
	    });
	  } else {
	    breakpointsKeys.forEach(breakpoint => {
	      if (breakpointValues[breakpoint] != null) {
	        base[breakpoint] = true;
	      }
	    });
	  }

	  return base;
	}
	function resolveBreakpointValues({
	  values: breakpointValues,
	  breakpoints: themeBreakpoints,
	  base: customBase
	}) {
	  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
	  const keys = Object.keys(base);

	  if (keys.length === 0) {
	    return breakpointValues;
	  }

	  let previous;
	  return keys.reduce((acc, breakpoint, i) => {
	    if (Array.isArray(breakpointValues)) {
	      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
	      previous = i;
	    } else {
	      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous] || breakpointValues;
	      previous = breakpoint;
	    }

	    return acc;
	  }, {});
	}

	function getPath(obj, path) {
	  if (!path || typeof path !== 'string') {
	    return null;
	  } // Check if CSS variables are used


	  if (obj && obj.vars) {
	    const val = "vars.".concat(path).split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);

	    if (val != null) {
	      return val;
	    }
	  }

	  return path.split('.').reduce((acc, item) => {
	    if (acc && acc[item] != null) {
	      return acc[item];
	    }

	    return null;
	  }, obj);
	}

	function getValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
	  let value;

	  if (typeof themeMapping === 'function') {
	    value = themeMapping(propValueFinal);
	  } else if (Array.isArray(themeMapping)) {
	    value = themeMapping[propValueFinal] || userValue;
	  } else {
	    value = getPath(themeMapping, propValueFinal) || userValue;
	  }

	  if (transform) {
	    value = transform(value);
	  }

	  return value;
	}

	function style$2(options) {
	  const {
	    prop,
	    cssProperty = options.prop,
	    themeKey,
	    transform
	  } = options;

	  const fn = props => {
	    if (props[prop] == null) {
	      return null;
	    }

	    const propValue = props[prop];
	    const theme = props.theme;
	    const themeMapping = getPath(theme, themeKey) || {};

	    const styleFromPropValue = propValueFinal => {
	      let value = getValue$1(themeMapping, transform, propValueFinal);

	      if (propValueFinal === value && typeof propValueFinal === 'string') {
	        // Haven't found value
	        value = getValue$1(themeMapping, transform, "".concat(prop).concat(propValueFinal === 'default' ? '' : capitalize(propValueFinal)), propValueFinal);
	      }

	      if (cssProperty === false) {
	        return value;
	      }

	      return {
	        [cssProperty]: value
	      };
	    };

	    return handleBreakpoints(props, propValue, styleFromPropValue);
	  };

	  fn.propTypes = {};
	  fn.filterProps = [prop];
	  return fn;
	}

	function compose(...styles) {
	  const handlers = styles.reduce((acc, style) => {
	    style.filterProps.forEach(prop => {
	      acc[prop] = style;
	    });
	    return acc;
	  }, {});

	  const fn = props => {
	    return Object.keys(props).reduce((acc, prop) => {
	      if (handlers[prop]) {
	        return merge(acc, handlers[prop](props));
	      }

	      return acc;
	    }, {});
	  };

	  fn.propTypes = {};
	  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
	  return fn;
	}

	function memoize(fn) {
	  const cache = {};
	  return arg => {
	    if (cache[arg] === undefined) {
	      cache[arg] = fn(arg);
	    }

	    return cache[arg];
	  };
	}

	const properties = {
	  m: 'margin',
	  p: 'padding'
	};
	const directions = {
	  t: 'Top',
	  r: 'Right',
	  b: 'Bottom',
	  l: 'Left',
	  x: ['Left', 'Right'],
	  y: ['Top', 'Bottom']
	};
	const aliases = {
	  marginX: 'mx',
	  marginY: 'my',
	  paddingX: 'px',
	  paddingY: 'py'
	}; // memoize() impact:
	// From 300,000 ops/sec
	// To 350,000 ops/sec

	const getCssProperties = memoize(prop => {
	  // It's not a shorthand notation.
	  if (prop.length > 2) {
	    if (aliases[prop]) {
	      prop = aliases[prop];
	    } else {
	      return [prop];
	    }
	  }

	  const [a, b] = prop.split('');
	  const property = properties[a];
	  const direction = directions[b] || '';
	  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
	});
	const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
	const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
	const spacingKeys = [...marginKeys, ...paddingKeys];
	function createUnaryUnit(theme, themeKey, defaultValue, propName) {
	  var _getPath;

	  const themeSpacing = (_getPath = getPath(theme, themeKey)) != null ? _getPath : defaultValue;

	  if (typeof themeSpacing === 'number') {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing * abs;
	    };
	  }

	  if (Array.isArray(themeSpacing)) {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing[abs];
	    };
	  }

	  if (typeof themeSpacing === 'function') {
	    return themeSpacing;
	  }

	  return () => undefined;
	}
	function createUnarySpacing(theme) {
	  return createUnaryUnit(theme, 'spacing', 8);
	}
	function getValue(transformer, propValue) {
	  if (typeof propValue === 'string' || propValue == null) {
	    return propValue;
	  }

	  const abs = Math.abs(propValue);
	  const transformed = transformer(abs);

	  if (propValue >= 0) {
	    return transformed;
	  }

	  if (typeof transformed === 'number') {
	    return -transformed;
	  }

	  return "-".concat(transformed);
	}
	function getStyleFromPropValue(cssProperties, transformer) {
	  return propValue => cssProperties.reduce((acc, cssProperty) => {
	    acc[cssProperty] = getValue(transformer, propValue);
	    return acc;
	  }, {});
	}

	function resolveCssProperty(props, keys, prop, transformer) {
	  // Using a hash computation over an array iteration could be faster, but with only 28 items,
	  // it's doesn't worth the bundle size.
	  if (keys.indexOf(prop) === -1) {
	    return null;
	  }

	  const cssProperties = getCssProperties(prop);
	  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
	  const propValue = props[prop];
	  return handleBreakpoints(props, propValue, styleFromPropValue);
	}

	function style$1(props, keys) {
	  const transformer = createUnarySpacing(props.theme);
	  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
	}

	function spacing(props) {
	  return style$1(props, spacingKeys);
	}

	spacing.propTypes = {};
	spacing.filterProps = spacingKeys;

	function getBorder(value) {
	  if (typeof value !== 'number') {
	    return value;
	  }

	  return "".concat(value, "px solid");
	}

	const border = style$2({
	  prop: 'border',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderTop = style$2({
	  prop: 'borderTop',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderRight = style$2({
	  prop: 'borderRight',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderBottom = style$2({
	  prop: 'borderBottom',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderLeft = style$2({
	  prop: 'borderLeft',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderColor = style$2({
	  prop: 'borderColor',
	  themeKey: 'palette'
	});
	const borderTopColor = style$2({
	  prop: 'borderTopColor',
	  themeKey: 'palette'
	});
	const borderRightColor = style$2({
	  prop: 'borderRightColor',
	  themeKey: 'palette'
	});
	const borderBottomColor = style$2({
	  prop: 'borderBottomColor',
	  themeKey: 'palette'
	});
	const borderLeftColor = style$2({
	  prop: 'borderLeftColor',
	  themeKey: 'palette'
	});
	const borderRadius = props => {
	  if (props.borderRadius !== undefined && props.borderRadius !== null) {
	    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

	    const styleFromPropValue = propValue => ({
	      borderRadius: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
	  }

	  return null;
	};
	borderRadius.propTypes = {};
	borderRadius.filterProps = ['borderRadius'];
	const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
	var borders$1 = borders;

	const displayPrint = style$2({
	  prop: 'displayPrint',
	  cssProperty: false,
	  transform: value => ({
	    '@media print': {
	      display: value
	    }
	  })
	});
	const displayRaw = style$2({
	  prop: 'display'
	});
	const overflow = style$2({
	  prop: 'overflow'
	});
	const textOverflow = style$2({
	  prop: 'textOverflow'
	});
	const visibility = style$2({
	  prop: 'visibility'
	});
	const whiteSpace = style$2({
	  prop: 'whiteSpace'
	});
	var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

	const flexBasis = style$2({
	  prop: 'flexBasis'
	});
	const flexDirection = style$2({
	  prop: 'flexDirection'
	});
	const flexWrap = style$2({
	  prop: 'flexWrap'
	});
	const justifyContent = style$2({
	  prop: 'justifyContent'
	});
	const alignItems = style$2({
	  prop: 'alignItems'
	});
	const alignContent = style$2({
	  prop: 'alignContent'
	});
	const order = style$2({
	  prop: 'order'
	});
	const flex = style$2({
	  prop: 'flex'
	});
	const flexGrow = style$2({
	  prop: 'flexGrow'
	});
	const flexShrink = style$2({
	  prop: 'flexShrink'
	});
	const alignSelf = style$2({
	  prop: 'alignSelf'
	});
	const justifyItems = style$2({
	  prop: 'justifyItems'
	});
	const justifySelf = style$2({
	  prop: 'justifySelf'
	});
	const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
	var flexbox$1 = flexbox;

	const gap = props => {
	  if (props.gap !== undefined && props.gap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      gap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.gap, styleFromPropValue);
	  }

	  return null;
	};
	gap.propTypes = {};
	gap.filterProps = ['gap'];
	const columnGap = props => {
	  if (props.columnGap !== undefined && props.columnGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      columnGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
	  }

	  return null;
	};
	columnGap.propTypes = {};
	columnGap.filterProps = ['columnGap'];
	const rowGap = props => {
	  if (props.rowGap !== undefined && props.rowGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      rowGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
	  }

	  return null;
	};
	rowGap.propTypes = {};
	rowGap.filterProps = ['rowGap'];
	const gridColumn = style$2({
	  prop: 'gridColumn'
	});
	const gridRow = style$2({
	  prop: 'gridRow'
	});
	const gridAutoFlow = style$2({
	  prop: 'gridAutoFlow'
	});
	const gridAutoColumns = style$2({
	  prop: 'gridAutoColumns'
	});
	const gridAutoRows = style$2({
	  prop: 'gridAutoRows'
	});
	const gridTemplateColumns = style$2({
	  prop: 'gridTemplateColumns'
	});
	const gridTemplateRows = style$2({
	  prop: 'gridTemplateRows'
	});
	const gridTemplateAreas = style$2({
	  prop: 'gridTemplateAreas'
	});
	const gridArea = style$2({
	  prop: 'gridArea'
	});
	const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
	var grid$1 = grid;

	const color = style$2({
	  prop: 'color',
	  themeKey: 'palette'
	});
	const bgcolor = style$2({
	  prop: 'bgcolor',
	  cssProperty: 'backgroundColor',
	  themeKey: 'palette'
	});
	const backgroundColor = style$2({
	  prop: 'backgroundColor',
	  themeKey: 'palette'
	});
	const palette = compose(color, bgcolor, backgroundColor);
	var palette$1 = palette;

	const position = style$2({
	  prop: 'position'
	});
	const zIndex$2 = style$2({
	  prop: 'zIndex',
	  themeKey: 'zIndex'
	});
	const top = style$2({
	  prop: 'top'
	});
	const right = style$2({
	  prop: 'right'
	});
	const bottom = style$2({
	  prop: 'bottom'
	});
	const left = style$2({
	  prop: 'left'
	});
	var positions = compose(position, zIndex$2, top, right, bottom, left);

	const boxShadow = style$2({
	  prop: 'boxShadow',
	  themeKey: 'shadows'
	});
	var shadows$2 = boxShadow;

	function transform(value) {
	  return value <= 1 && value !== 0 ? "".concat(value * 100, "%") : value;
	}

	const width = style$2({
	  prop: 'width',
	  transform
	});
	const maxWidth = props => {
	  if (props.maxWidth !== undefined && props.maxWidth !== null) {
	    const styleFromPropValue = propValue => {
	      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

	      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
	      return {
	        maxWidth: breakpoint || transform(propValue)
	      };
	    };

	    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
	  }

	  return null;
	};
	maxWidth.filterProps = ['maxWidth'];
	const minWidth = style$2({
	  prop: 'minWidth',
	  transform
	});
	const height = style$2({
	  prop: 'height',
	  transform
	});
	const maxHeight = style$2({
	  prop: 'maxHeight',
	  transform
	});
	const minHeight = style$2({
	  prop: 'minHeight',
	  transform
	});
	style$2({
	  prop: 'size',
	  cssProperty: 'width',
	  transform
	});
	style$2({
	  prop: 'size',
	  cssProperty: 'height',
	  transform
	});
	const boxSizing = style$2({
	  prop: 'boxSizing'
	});
	const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
	var sizing$1 = sizing;

	const fontFamily = style$2({
	  prop: 'fontFamily',
	  themeKey: 'typography'
	});
	const fontSize = style$2({
	  prop: 'fontSize',
	  themeKey: 'typography'
	});
	const fontStyle = style$2({
	  prop: 'fontStyle',
	  themeKey: 'typography'
	});
	const fontWeight = style$2({
	  prop: 'fontWeight',
	  themeKey: 'typography'
	});
	const letterSpacing = style$2({
	  prop: 'letterSpacing'
	});
	const textTransform = style$2({
	  prop: 'textTransform'
	});
	const lineHeight = style$2({
	  prop: 'lineHeight'
	});
	const textAlign = style$2({
	  prop: 'textAlign'
	});
	const typographyVariant = style$2({
	  prop: 'typography',
	  cssProperty: false,
	  themeKey: 'typography'
	});
	const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
	var typography$1 = typography;

	const filterPropsMapping = {
	  borders: borders$1.filterProps,
	  display: display.filterProps,
	  flexbox: flexbox$1.filterProps,
	  grid: grid$1.filterProps,
	  positions: positions.filterProps,
	  palette: palette$1.filterProps,
	  shadows: shadows$2.filterProps,
	  sizing: sizing$1.filterProps,
	  spacing: spacing.filterProps,
	  typography: typography$1.filterProps
	};
	const styleFunctionMapping = {
	  borders: borders$1,
	  display,
	  flexbox: flexbox$1,
	  grid: grid$1,
	  positions,
	  palette: palette$1,
	  shadows: shadows$2,
	  sizing: sizing$1,
	  spacing,
	  typography: typography$1
	};
	const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
	  filterPropsMapping[styleFnName].forEach(propName => {
	    acc[propName] = styleFunctionMapping[styleFnName];
	  });
	  return acc;
	}, {});

	function objectsHaveSameKeys(...objects) {
	  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
	  const union = new Set(allKeys);
	  return objects.every(object => union.size === Object.keys(object).length);
	}

	function callIfFn(maybeFn, arg) {
	  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
	} // eslint-disable-next-line @typescript-eslint/naming-convention


	function unstable_createStyleFunctionSx(styleFunctionMapping$1 = styleFunctionMapping) {
	  const propToStyleFunction = Object.keys(styleFunctionMapping$1).reduce((acc, styleFnName) => {
	    styleFunctionMapping$1[styleFnName].filterProps.forEach(propName => {
	      acc[propName] = styleFunctionMapping$1[styleFnName];
	    });
	    return acc;
	  }, {});

	  function getThemeValue(prop, value, theme) {
	    const inputProps = {
	      [prop]: value,
	      theme
	    };
	    const styleFunction = propToStyleFunction[prop];
	    return styleFunction ? styleFunction(inputProps) : {
	      [prop]: value
	    };
	  }

	  function styleFunctionSx(props) {
	    const {
	      sx,
	      theme = {}
	    } = props || {};

	    if (!sx) {
	      return null; // emotion & styled-components will neglect null
	    }
	    /*
	     * Receive `sxInput` as object or callback
	     * and then recursively check keys & values to create media query object styles.
	     * (the result will be used in `styled`)
	     */


	    function traverse(sxInput) {
	      let sxObject = sxInput;

	      if (typeof sxInput === 'function') {
	        sxObject = sxInput(theme);
	      } else if (typeof sxInput !== 'object') {
	        // value
	        return sxInput;
	      }

	      if (!sxObject) {
	        return null;
	      }

	      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
	      const breakpointsKeys = Object.keys(emptyBreakpoints);
	      let css = emptyBreakpoints;
	      Object.keys(sxObject).forEach(styleKey => {
	        const value = callIfFn(sxObject[styleKey], theme);

	        if (value !== null && value !== undefined) {
	          if (typeof value === 'object') {
	            if (propToStyleFunction[styleKey]) {
	              css = merge(css, getThemeValue(styleKey, value, theme));
	            } else {
	              const breakpointsValues = handleBreakpoints({
	                theme
	              }, value, x => ({
	                [styleKey]: x
	              }));

	              if (objectsHaveSameKeys(breakpointsValues, value)) {
	                css[styleKey] = styleFunctionSx({
	                  sx: value,
	                  theme
	                });
	              } else {
	                css = merge(css, breakpointsValues);
	              }
	            }
	          } else {
	            css = merge(css, getThemeValue(styleKey, value, theme));
	          }
	        }
	      });
	      return removeUnusedBreakpoints(breakpointsKeys, css);
	    }

	    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
	  }

	  return styleFunctionSx;
	}
	const styleFunctionSx = unstable_createStyleFunctionSx();
	styleFunctionSx.filterProps = ['sx'];
	var defaultStyleFunctionSx = styleFunctionSx;

	const _excluded$E = ["sx"];

	const splitProps = props => {
	  const result = {
	    systemProps: {},
	    otherProps: {}
	  };
	  Object.keys(props).forEach(prop => {
	    if (propToStyleFunction[prop]) {
	      result.systemProps[prop] = props[prop];
	    } else {
	      result.otherProps[prop] = props[prop];
	    }
	  });
	  return result;
	};

	function extendSxProp(props) {
	  const {
	    sx: inSx
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$E);

	  const {
	    systemProps,
	    otherProps
	  } = splitProps(other);
	  let finalSx;

	  if (Array.isArray(inSx)) {
	    finalSx = [systemProps, ...inSx];
	  } else if (typeof inSx === 'function') {
	    finalSx = (...args) => {
	      const result = inSx(...args);

	      if (!isPlainObject(result)) {
	        return systemProps;
	      }

	      return _extends$2({}, systemProps, result);
	    };
	  } else {
	    finalSx = _extends$2({}, systemProps, inSx);
	  }

	  return _extends$2({}, otherProps, {
	    sx: finalSx
	  });
	}

	const _excluded$D = ["values", "unit", "step"]; // Sorted ASC by size. That's important.

	const sortBreakpointsValues = values => {
	  const breakpointsAsArray = Object.keys(values).map(key => ({
	    key,
	    val: values[key]
	  })) || []; // Sort in ascending order

	  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
	  return breakpointsAsArray.reduce((acc, obj) => {
	    return _extends$2({}, acc, {
	      [obj.key]: obj.val
	    });
	  }, {});
	}; // Keep in mind that @media is inclusive by the CSS specification.


	function createBreakpoints(breakpoints) {
	  const {
	    // The breakpoint **start** at this value.
	    // For instance with the first breakpoint xs: [xs, sm).
	    values = {
	      xs: 0,
	      // phone
	      sm: 600,
	      // tablet
	      md: 900,
	      // small laptop
	      lg: 1200,
	      // desktop
	      xl: 1536 // large screen

	    },
	    unit = 'px',
	    step = 5
	  } = breakpoints,
	        other = _objectWithoutPropertiesLoose(breakpoints, _excluded$D);

	  const sortedValues = sortBreakpointsValues(values);
	  const keys = Object.keys(sortedValues);

	  function up(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (min-width:".concat(value).concat(unit, ")");
	  }

	  function down(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
	  }

	  function between(start, end) {
	    const endIndex = keys.indexOf(end);
	    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100).concat(unit, ")");
	  }

	  function only(key) {
	    if (keys.indexOf(key) + 1 < keys.length) {
	      return between(key, keys[keys.indexOf(key) + 1]);
	    }

	    return up(key);
	  }

	  function not(key) {
	    // handle first and last key separately, for better readability
	    const keyIndex = keys.indexOf(key);

	    if (keyIndex === 0) {
	      return up(keys[1]);
	    }

	    if (keyIndex === keys.length - 1) {
	      return down(keys[keyIndex]);
	    }

	    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
	  }

	  return _extends$2({
	    keys,
	    values: sortedValues,
	    up,
	    down,
	    between,
	    only,
	    not,
	    unit
	  }, other);
	}

	const shape = {
	  borderRadius: 4
	};
	var shape$1 = shape;

	/* tslint:enable:unified-signatures */

	function createSpacing(spacingInput = 8) {
	  // Already transformed.
	  if (spacingInput.mui) {
	    return spacingInput;
	  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
	  // Smaller components, such as icons, can align to a 4dp grid.
	  // https://material.io/design/layout/understanding-layout.html#usage


	  const transform = createUnarySpacing({
	    spacing: spacingInput
	  });

	  const spacing = (...argsInput) => {

	    const args = argsInput.length === 0 ? [1] : argsInput;
	    return args.map(argument => {
	      const output = transform(argument);
	      return typeof output === 'number' ? "".concat(output, "px") : output;
	    }).join(' ');
	  };

	  spacing.mui = true;
	  return spacing;
	}

	const _excluded$C = ["breakpoints", "palette", "spacing", "shape"];

	function createTheme$1(options = {}, ...args) {
	  const {
	    breakpoints: breakpointsInput = {},
	    palette: paletteInput = {},
	    spacing: spacingInput,
	    shape: shapeInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose(options, _excluded$C);

	  const breakpoints = createBreakpoints(breakpointsInput);
	  const spacing = createSpacing(spacingInput);
	  let muiTheme = deepmerge({
	    breakpoints,
	    direction: 'ltr',
	    components: {},
	    // Inject component definitions.
	    palette: _extends$2({
	      mode: 'light'
	    }, paletteInput),
	    spacing,
	    shape: _extends$2({}, shape$1, shapeInput)
	  }, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
	  return muiTheme;
	}

	const ThemeContext = /*#__PURE__*/react.createContext(null);

	var ThemeContext$1 = ThemeContext;

	function useTheme$3() {
	  const theme = react.useContext(ThemeContext$1);

	  return theme;
	}

	function isObjectEmpty(obj) {
	  return Object.keys(obj).length === 0;
	}

	function useTheme$2(defaultTheme = null) {
	  const contextTheme = useTheme$3();
	  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
	}

	const systemDefaultTheme$1 = createTheme$1();

	function useTheme$1(defaultTheme = systemDefaultTheme$1) {
	  return useTheme$2(defaultTheme);
	}

	const _excluded$B = ["className", "component"];
	function createBox(options = {}) {
	  const {
	    defaultTheme,
	    defaultClassName = 'MuiBox-root',
	    generateClassName,
	    styleFunctionSx = defaultStyleFunctionSx
	  } = options;
	  const BoxRoot = styled$2('div')(styleFunctionSx);
	  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
	    const theme = useTheme$1(defaultTheme);

	    const _extendSxProp = extendSxProp(inProps),
	          {
	      className,
	      component = 'div'
	    } = _extendSxProp,
	          other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$B);

	    return /*#__PURE__*/jsxRuntime.jsx(BoxRoot, _extends$2({
	      as: component,
	      ref: ref,
	      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
	      theme: theme
	    }, other));
	  });
	  return Box;
	}

	const _excluded$A = ["variant"];

	function isEmpty$2(string) {
	  return string.length === 0;
	}
	/**
	 * Generates string classKey based on the properties provided. It starts with the
	 * variant if defined, and then it appends all other properties in alphabetical order.
	 * @param {object} props - the properties for which the classKey should be created.
	 */


	function propsToClassKey(props) {
	  const {
	    variant
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$A);

	  let classKey = variant || '';
	  Object.keys(other).sort().forEach(key => {
	    if (key === 'color') {
	      classKey += isEmpty$2(classKey) ? props[key] : capitalize(props[key]);
	    } else {
	      classKey += "".concat(isEmpty$2(classKey) ? key : capitalize(key)).concat(capitalize(props[key].toString()));
	    }
	  });
	  return classKey;
	}

	const _excluded$z = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
	      _excluded2$2 = ["theme"],
	      _excluded3 = ["theme"];

	function isEmpty$1(obj) {
	  return Object.keys(obj).length === 0;
	}

	const getStyleOverrides = (name, theme) => {
	  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
	    return theme.components[name].styleOverrides;
	  }

	  return null;
	};

	const getVariantStyles = (name, theme) => {
	  let variants = [];

	  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
	    variants = theme.components[name].variants;
	  }

	  const variantsStyles = {};
	  variants.forEach(definition => {
	    const key = propsToClassKey(definition.props);
	    variantsStyles[key] = definition.style;
	  });
	  return variantsStyles;
	};

	const variantsResolver = (props, styles, theme, name) => {
	  var _theme$components, _theme$components$nam;

	  const {
	    ownerState = {}
	  } = props;
	  const variantsStyles = [];
	  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

	  if (themeVariants) {
	    themeVariants.forEach(themeVariant => {
	      let isMatch = true;
	      Object.keys(themeVariant.props).forEach(key => {
	        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
	          isMatch = false;
	        }
	      });

	      if (isMatch) {
	        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
	      }
	    });
	  }

	  return variantsStyles;
	}; // Update /system/styled/#api in case if this changes


	function shouldForwardProp(prop) {
	  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
	}
	const systemDefaultTheme = createTheme$1();

	function createStyled(input = {}) {
	  const {
	    defaultTheme = systemDefaultTheme,
	    rootShouldForwardProp = shouldForwardProp,
	    slotShouldForwardProp = shouldForwardProp,
	    styleFunctionSx = defaultStyleFunctionSx
	  } = input;
	  return (tag, inputOptions = {}) => {
	    const {
	      name: componentName,
	      slot: componentSlot,
	      skipVariantsResolver: inputSkipVariantsResolver,
	      skipSx: inputSkipSx,
	      overridesResolver
	    } = inputOptions,
	          options = _objectWithoutPropertiesLoose(inputOptions, _excluded$z); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


	    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
	    const skipSx = inputSkipSx || false;
	    let label;

	    let shouldForwardPropOption = shouldForwardProp;

	    if (componentSlot === 'Root') {
	      shouldForwardPropOption = rootShouldForwardProp;
	    } else if (componentSlot) {
	      // any other slot specified
	      shouldForwardPropOption = slotShouldForwardProp;
	    }

	    const defaultStyledResolver = styled$2(tag, _extends$2({
	      shouldForwardProp: shouldForwardPropOption,
	      label
	    }, options));

	    const muiStyledResolver = (styleArg, ...expressions) => {
	      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
	        // On the server emotion doesn't use React.forwardRef for creating components, so the created
	        // component stays as a function. This condition makes sure that we do not interpolate functions
	        // which are basically components used as a selectors.
	        // eslint-disable-next-line no-underscore-dangle
	        return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? _ref => {
	          let {
	            theme: themeInput
	          } = _ref,
	              other = _objectWithoutPropertiesLoose(_ref, _excluded2$2);

	          return stylesArg(_extends$2({
	            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
	          }, other));
	        } : stylesArg;
	      }) : [];
	      let transformedStyleArg = styleArg;

	      if (componentName && overridesResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
	          const styleOverrides = getStyleOverrides(componentName, theme);

	          if (styleOverrides) {
	            const resolvedStyleOverrides = {};
	            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
	              resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(props) : slotStyle;
	            });
	            return overridesResolver(props, resolvedStyleOverrides);
	          }

	          return null;
	        });
	      }

	      if (componentName && !skipVariantsResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
	          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
	        });
	      }

	      if (!skipSx) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
	          return styleFunctionSx(_extends$2({}, props, {
	            theme
	          }));
	        });
	      }

	      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

	      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
	        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

	        transformedStyleArg = [...styleArg, ...placeholders];
	        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
	      } else if (typeof styleArg === 'function' && // On the server emotion doesn't use React.forwardRef for creating components, so the created
	      // component stays as a function. This condition makes sure that we do not interpolate functions
	      // which are basically components used as a selectors.
	      // eslint-disable-next-line no-underscore-dangle
	      styleArg.__emotion_real !== styleArg) {
	        // If the type is function, we need to define the default theme.
	        transformedStyleArg = _ref2 => {
	          let {
	            theme: themeInput
	          } = _ref2,
	              other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

	          return styleArg(_extends$2({
	            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
	          }, other));
	        };
	      }

	      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

	      return Component;
	    };

	    if (defaultStyledResolver.withConfig) {
	      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
	    }

	    return muiStyledResolver;
	  };
	}

	function getThemeProps(params) {
	  const {
	    theme,
	    name,
	    props
	  } = params;

	  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
	    return props;
	  }

	  return resolveProps(theme.components[name].defaultProps, props);
	}

	function useThemeProps$1({
	  props,
	  name,
	  defaultTheme
	}) {
	  const theme = useTheme$1(defaultTheme);
	  const mergedProps = getThemeProps({
	    theme,
	    name,
	    props
	  });
	  return mergedProps;
	}

	/**
	 * Returns a number whose value is limited to the given range.
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */

	function clamp(value, min = 0, max = 1) {

	  return Math.min(Math.max(min, value), max);
	}
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 * @returns {string} A CSS rgb color string
	 */


	function hexToRgb(color) {
	  color = color.slice(1);
	  const re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
	  let colors = color.match(re);

	  if (colors && colors[0].length === 1) {
	    colors = colors.map(n => n + n);
	  }

	  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map((n, index) => {
	    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	  }).join(', '), ")") : '';
	}
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {object} - A MUI color object: {type: string, values: number[]}
	 */


	function decomposeColor(color) {
	  // Idempotent
	  if (color.type) {
	    return color;
	  }

	  if (color.charAt(0) === '#') {
	    return decomposeColor(hexToRgb(color));
	  }

	  const marker = color.indexOf('(');
	  const type = color.substring(0, marker);

	  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
	    throw new Error(formatMuiErrorMessage(9, color));
	  }

	  let values = color.substring(marker + 1, color.length - 1);
	  let colorSpace;

	  if (type === 'color') {
	    values = values.split(' ');
	    colorSpace = values.shift();

	    if (values.length === 4 && values[3].charAt(0) === '/') {
	      values[3] = values[3].slice(1);
	    }

	    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
	      throw new Error(formatMuiErrorMessage(10, colorSpace));
	    }
	  } else {
	    values = values.split(',');
	  }

	  values = values.map(value => parseFloat(value));
	  return {
	    type,
	    values,
	    colorSpace
	  };
	}
	/**
	 * Converts a color object with type and values to a string.
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */

	function recomposeColor(color) {
	  const {
	    type,
	    colorSpace
	  } = color;
	  let {
	    values
	  } = color;

	  if (type.indexOf('rgb') !== -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
	  } else if (type.indexOf('hsl') !== -1) {
	    values[1] = "".concat(values[1], "%");
	    values[2] = "".concat(values[2], "%");
	  }

	  if (type.indexOf('color') !== -1) {
	    values = "".concat(colorSpace, " ").concat(values.join(' '));
	  } else {
	    values = "".concat(values.join(', '));
	  }

	  return "".concat(type, "(").concat(values, ")");
	}
	/**
	 * Converts a color from hsl format to rgb format.
	 * @param {string} color - HSL color values
	 * @returns {string} rgb color values
	 */

	function hslToRgb(color) {
	  color = decomposeColor(color);
	  const {
	    values
	  } = color;
	  const h = values[0];
	  const s = values[1] / 100;
	  const l = values[2] / 100;
	  const a = s * Math.min(l, 1 - l);

	  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

	  let type = 'rgb';
	  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

	  if (color.type === 'hsla') {
	    type += 'a';
	    rgb.push(values[3]);
	  }

	  return recomposeColor({
	    type,
	    values: rgb
	  });
	}
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */

	function getLuminance(color) {
	  color = decomposeColor(color);
	  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
	  rgb = rgb.map(val => {
	    if (color.type !== 'color') {
	      val /= 255; // normalized
	    }

	    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
	  }); // Truncate at 3 digits

	  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	}
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21.
	 */

	function getContrastRatio(foreground, background) {
	  const lumA = getLuminance(foreground);
	  const lumB = getLuminance(background);
	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	}
	/**
	 * Sets the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} value - value to set the alpha channel to in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function alpha(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }

	  if (color.type === 'color') {
	    color.values[3] = "/".concat(value);
	  } else {
	    color.values[3] = value;
	  }

	  return recomposeColor(color);
	}
	/**
	 * Darkens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }

	  return recomposeColor(color);
	}
	/**
	 * Lightens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  } else if (color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (1 - color.values[i]) * coefficient;
	    }
	  }

	  return recomposeColor(color);
	}

	function createMixins(breakpoints, spacing, mixins) {
	  return _extends$2({
	    toolbar: {
	      minHeight: 56,
	      ["".concat(breakpoints.up('xs'), " and (orientation: landscape)")]: {
	        minHeight: 48
	      },
	      [breakpoints.up('sm')]: {
	        minHeight: 64
	      }
	    }
	  }, mixins);
	}

	const common = {
	  black: '#000',
	  white: '#fff'
	};
	var common$1 = common;

	const grey = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#f5f5f5',
	  A200: '#eeeeee',
	  A400: '#bdbdbd',
	  A700: '#616161'
	};
	var grey$1 = grey;

	const purple = {
	  50: '#f3e5f5',
	  100: '#e1bee7',
	  200: '#ce93d8',
	  300: '#ba68c8',
	  400: '#ab47bc',
	  500: '#9c27b0',
	  600: '#8e24aa',
	  700: '#7b1fa2',
	  800: '#6a1b9a',
	  900: '#4a148c',
	  A100: '#ea80fc',
	  A200: '#e040fb',
	  A400: '#d500f9',
	  A700: '#aa00ff'
	};
	var purple$1 = purple;

	const red = {
	  50: '#ffebee',
	  100: '#ffcdd2',
	  200: '#ef9a9a',
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  600: '#e53935',
	  700: '#d32f2f',
	  800: '#c62828',
	  900: '#b71c1c',
	  A100: '#ff8a80',
	  A200: '#ff5252',
	  A400: '#ff1744',
	  A700: '#d50000'
	};
	var red$1 = red;

	const orange = {
	  50: '#fff3e0',
	  100: '#ffe0b2',
	  200: '#ffcc80',
	  300: '#ffb74d',
	  400: '#ffa726',
	  500: '#ff9800',
	  600: '#fb8c00',
	  700: '#f57c00',
	  800: '#ef6c00',
	  900: '#e65100',
	  A100: '#ffd180',
	  A200: '#ffab40',
	  A400: '#ff9100',
	  A700: '#ff6d00'
	};
	var orange$1 = orange;

	const blue = {
	  50: '#e3f2fd',
	  100: '#bbdefb',
	  200: '#90caf9',
	  300: '#64b5f6',
	  400: '#42a5f5',
	  500: '#2196f3',
	  600: '#1e88e5',
	  700: '#1976d2',
	  800: '#1565c0',
	  900: '#0d47a1',
	  A100: '#82b1ff',
	  A200: '#448aff',
	  A400: '#2979ff',
	  A700: '#2962ff'
	};
	var blue$1 = blue;

	const lightBlue = {
	  50: '#e1f5fe',
	  100: '#b3e5fc',
	  200: '#81d4fa',
	  300: '#4fc3f7',
	  400: '#29b6f6',
	  500: '#03a9f4',
	  600: '#039be5',
	  700: '#0288d1',
	  800: '#0277bd',
	  900: '#01579b',
	  A100: '#80d8ff',
	  A200: '#40c4ff',
	  A400: '#00b0ff',
	  A700: '#0091ea'
	};
	var lightBlue$1 = lightBlue;

	const green = {
	  50: '#e8f5e9',
	  100: '#c8e6c9',
	  200: '#a5d6a7',
	  300: '#81c784',
	  400: '#66bb6a',
	  500: '#4caf50',
	  600: '#43a047',
	  700: '#388e3c',
	  800: '#2e7d32',
	  900: '#1b5e20',
	  A100: '#b9f6ca',
	  A200: '#69f0ae',
	  A400: '#00e676',
	  A700: '#00c853'
	};
	var green$1 = green;

	const _excluded$y = ["mode", "contrastThreshold", "tonalOffset"];
	const light = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.6)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: common$1.white,
	    default: common$1.white
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.04)',
	    hoverOpacity: 0.04,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.08)',
	    selectedOpacity: 0.08,
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(0, 0, 0, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.12
	  }
	};
	const dark = {
	  text: {
	    primary: common$1.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: '#121212',
	    default: '#121212'
	  },
	  action: {
	    active: common$1.white,
	    hover: 'rgba(255, 255, 255, 0.08)',
	    hoverOpacity: 0.08,
	    selected: 'rgba(255, 255, 255, 0.16)',
	    selectedOpacity: 0.16,
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(255, 255, 255, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.24
	  }
	};

	function addLightOrDark(intent, direction, shade, tonalOffset) {
	  const tonalOffsetLight = tonalOffset.light || tonalOffset;
	  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

	  if (!intent[direction]) {
	    if (intent.hasOwnProperty(shade)) {
	      intent[direction] = intent[shade];
	    } else if (direction === 'light') {
	      intent.light = lighten(intent.main, tonalOffsetLight);
	    } else if (direction === 'dark') {
	      intent.dark = darken(intent.main, tonalOffsetDark);
	    }
	  }
	}

	function getDefaultPrimary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: blue$1[200],
	      light: blue$1[50],
	      dark: blue$1[400]
	    };
	  }

	  return {
	    main: blue$1[700],
	    light: blue$1[400],
	    dark: blue$1[800]
	  };
	}

	function getDefaultSecondary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: purple$1[200],
	      light: purple$1[50],
	      dark: purple$1[400]
	    };
	  }

	  return {
	    main: purple$1[500],
	    light: purple$1[300],
	    dark: purple$1[700]
	  };
	}

	function getDefaultError(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: red$1[500],
	      light: red$1[300],
	      dark: red$1[700]
	    };
	  }

	  return {
	    main: red$1[700],
	    light: red$1[400],
	    dark: red$1[800]
	  };
	}

	function getDefaultInfo(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: lightBlue$1[400],
	      light: lightBlue$1[300],
	      dark: lightBlue$1[700]
	    };
	  }

	  return {
	    main: lightBlue$1[700],
	    light: lightBlue$1[500],
	    dark: lightBlue$1[900]
	  };
	}

	function getDefaultSuccess(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: green$1[400],
	      light: green$1[300],
	      dark: green$1[700]
	    };
	  }

	  return {
	    main: green$1[800],
	    light: green$1[500],
	    dark: green$1[900]
	  };
	}

	function getDefaultWarning(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: orange$1[400],
	      light: orange$1[300],
	      dark: orange$1[700]
	    };
	  }

	  return {
	    main: '#ed6c02',
	    // closest to orange[800] that pass 3:1.
	    light: orange$1[500],
	    dark: orange$1[900]
	  };
	}

	function createPalette(palette) {
	  const {
	    mode = 'light',
	    contrastThreshold = 3,
	    tonalOffset = 0.2
	  } = palette,
	        other = _objectWithoutPropertiesLoose(palette, _excluded$y);

	  const primary = palette.primary || getDefaultPrimary(mode);
	  const secondary = palette.secondary || getDefaultSecondary(mode);
	  const error = palette.error || getDefaultError(mode);
	  const info = palette.info || getDefaultInfo(mode);
	  const success = palette.success || getDefaultSuccess(mode);
	  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
	  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

	  function getContrastText(background) {
	    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

	    return contrastText;
	  }

	  const augmentColor = ({
	    color,
	    name,
	    mainShade = 500,
	    lightShade = 300,
	    darkShade = 700
	  }) => {
	    color = _extends$2({}, color);

	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }

	    if (!color.hasOwnProperty('main')) {
	      throw new Error(formatMuiErrorMessage(11, name ? " (".concat(name, ")") : '', mainShade));
	    }

	    if (typeof color.main !== 'string') {
	      throw new Error(formatMuiErrorMessage(12, name ? " (".concat(name, ")") : '', JSON.stringify(color.main)));
	    }

	    addLightOrDark(color, 'light', lightShade, tonalOffset);
	    addLightOrDark(color, 'dark', darkShade, tonalOffset);

	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }

	    return color;
	  };

	  const modes = {
	    dark,
	    light
	  };

	  const paletteOutput = deepmerge(_extends$2({
	    // A collection of common colors.
	    common: common$1,
	    // The palette mode, can be light or dark.
	    mode,
	    // The colors used to represent primary interface elements for a user.
	    primary: augmentColor({
	      color: primary,
	      name: 'primary'
	    }),
	    // The colors used to represent secondary interface elements for a user.
	    secondary: augmentColor({
	      color: secondary,
	      name: 'secondary',
	      mainShade: 'A400',
	      lightShade: 'A200',
	      darkShade: 'A700'
	    }),
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: augmentColor({
	      color: error,
	      name: 'error'
	    }),
	    // The colors used to represent potentially dangerous actions or important messages.
	    warning: augmentColor({
	      color: warning,
	      name: 'warning'
	    }),
	    // The colors used to present information to the user that is neutral and not necessarily important.
	    info: augmentColor({
	      color: info,
	      name: 'info'
	    }),
	    // The colors used to indicate the successful completion of an action that user triggered.
	    success: augmentColor({
	      color: success,
	      name: 'success'
	    }),
	    // The grey colors.
	    grey: grey$1,
	    // Used by `getContrastText()` to maximize the contrast between
	    // the background and the text.
	    contrastThreshold,
	    // Takes a background color and returns the text color that maximizes the contrast.
	    getContrastText,
	    // Generate a rich color object.
	    augmentColor,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset
	  }, modes[mode]), other);
	  return paletteOutput;
	}

	const _excluded$x = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

	function round(value) {
	  return Math.round(value * 1e5) / 1e5;
	}

	const caseAllCaps = {
	  textTransform: 'uppercase'
	};
	const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
	/**
	 * @see @link{https://material.io/design/typography/the-type-system.html}
	 * @see @link{https://material.io/design/typography/understanding-typography.html}
	 */

	function createTypography(palette, typography) {
	  const _ref = typeof typography === 'function' ? typography(palette) : typography,
	        {
	    fontFamily = defaultFontFamily,
	    // The default font size of the Material Specification.
	    fontSize = 14,
	    // px
	    fontWeightLight = 300,
	    fontWeightRegular = 400,
	    fontWeightMedium = 500,
	    fontWeightBold = 700,
	    // Tell MUI what's the font-size on the html element.
	    // 16px is the default font-size used by browsers.
	    htmlFontSize = 16,
	    // Apply the CSS properties to all the variants.
	    allVariants,
	    pxToRem: pxToRem2
	  } = _ref,
	        other = _objectWithoutPropertiesLoose(_ref, _excluded$x);

	  const coef = fontSize / 14;

	  const pxToRem = pxToRem2 || (size => "".concat(size / htmlFontSize * coef, "rem"));

	  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$2({
	    fontFamily,
	    fontWeight,
	    fontSize: pxToRem(size),
	    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
	    lineHeight
	  }, fontFamily === defaultFontFamily ? {
	    letterSpacing: "".concat(round(letterSpacing / size), "em")
	  } : {}, casing, allVariants);

	  const variants = {
	    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
	    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
	    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
	    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
	    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
	    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
	    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
	    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
	    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
	    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
	    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
	    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
	    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
	  };
	  return deepmerge(_extends$2({
	    htmlFontSize,
	    pxToRem,
	    fontFamily,
	    fontSize,
	    fontWeightLight,
	    fontWeightRegular,
	    fontWeightMedium,
	    fontWeightBold
	  }, variants), other, {
	    clone: false // No need to clone deep

	  });
	}

	const shadowKeyUmbraOpacity = 0.2;
	const shadowKeyPenumbraOpacity = 0.14;
	const shadowAmbientShadowOpacity = 0.12;

	function createShadow(...px) {
	  return ["".concat(px[0], "px ").concat(px[1], "px ").concat(px[2], "px ").concat(px[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(px[4], "px ").concat(px[5], "px ").concat(px[6], "px ").concat(px[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(px[8], "px ").concat(px[9], "px ").concat(px[10], "px ").concat(px[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
	} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


	const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
	var shadows$1 = shadows;

	const _excluded$w = ["duration", "easing", "delay"]; // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
	// to learn the context in which each easing should be used.

	const easing = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing

	const duration = {
	  shortest: 150,
	  shorter: 200,
	  short: 250,
	  // most basic recommended timing
	  standard: 300,
	  // this is to be used in complex animations
	  complex: 375,
	  // recommended when something is entering screen
	  enteringScreen: 225,
	  // recommended when something is leaving screen
	  leavingScreen: 195
	};

	function formatMs(milliseconds) {
	  return "".concat(Math.round(milliseconds), "ms");
	}

	function getAutoHeightDuration(height) {
	  if (!height) {
	    return 0;
	  }

	  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

	  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
	}

	function createTransitions(inputTransitions) {
	  const mergedEasing = _extends$2({}, easing, inputTransitions.easing);

	  const mergedDuration = _extends$2({}, duration, inputTransitions.duration);

	  const create = (props = ['all'], options = {}) => {
	    const {
	      duration: durationOption = mergedDuration.standard,
	      easing: easingOption = mergedEasing.easeInOut,
	      delay = 0
	    } = options;
	          _objectWithoutPropertiesLoose(options, _excluded$w);

	    return (Array.isArray(props) ? props : [props]).map(animatedProp => "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay))).join(',');
	  };

	  return _extends$2({
	    getAutoHeightDuration,
	    create
	  }, inputTransitions, {
	    easing: mergedEasing,
	    duration: mergedDuration
	  });
	}

	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	const zIndex = {
	  mobileStepper: 1000,
	  fab: 1050,
	  speedDial: 1050,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};
	var zIndex$1 = zIndex;

	const _excluded$v = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

	function createTheme(options = {}, ...args) {
	  const {
	    mixins: mixinsInput = {},
	    palette: paletteInput = {},
	    transitions: transitionsInput = {},
	    typography: typographyInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose(options, _excluded$v);

	  const palette = createPalette(paletteInput);
	  const systemTheme = createTheme$1(options);
	  let muiTheme = deepmerge(systemTheme, {
	    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
	    palette,
	    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
	    shadows: shadows$1.slice(),
	    typography: createTypography(palette, typographyInput),
	    transitions: createTransitions(transitionsInput),
	    zIndex: _extends$2({}, zIndex$1)
	  });
	  muiTheme = deepmerge(muiTheme, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

	  return muiTheme;
	}

	const defaultTheme$1 = createTheme();
	var defaultTheme$2 = defaultTheme$1;

	const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
	const slotShouldForwardProp = shouldForwardProp;
	const styled = createStyled({
	  defaultTheme: defaultTheme$2,
	  rootShouldForwardProp
	});
	var styled$1 = styled;

	function useThemeProps({
	  props,
	  name
	}) {
	  return useThemeProps$1({
	    props,
	    name,
	    defaultTheme: defaultTheme$2
	  });
	}

	var taggedTemplateLiteral = createCommonjsModule(function (module) {
	  function _taggedTemplateLiteral(strings, raw) {
	    if (!raw) {
	      raw = strings.slice(0);
	    }

	    return Object.freeze(Object.defineProperties(strings, {
	      raw: {
	        value: Object.freeze(raw)
	      }
	    }));
	  }

	  module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	var _taggedTemplateLiteral = /*@__PURE__*/getDefaultExportFromCjs(taggedTemplateLiteral);

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  _setPrototypeOf(subClass, superClass);
	}

	var config = {
	  disabled: false
	};

	var TransitionGroupContext = /*#__PURE__*/react.createContext(null);

	var UNMOUNTED = 'unmounted';
	var EXITED = 'exited';
	var ENTERING = 'entering';
	var ENTERED = 'entered';
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * ---
	 *
	 * **Note**: `Transition` is a platform-agnostic base component. If you're using
	 * transitions in CSS, you'll probably want to use
	 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	 * instead. It inherits all the features of `Transition`, but contains
	 * additional features necessary to play nice with CSS transitions (hence the
	 * name of the component).
	 *
	 * ---
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the
	 * components. It's up to you to give meaning and effect to those states. For
	 * example we can add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import { Transition } from 'react-transition-group';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 1 },
	 *   entered:  { opacity: 1 },
	 *   exiting:  { opacity: 0 },
	 *   exited:  { opacity: 0 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {state => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component
	 * begins the "Enter" stage. During this stage, the component will shift from
	 * its current transition state, to `'entering'` for the duration of the
	 * transition and then to the `'entered'` stage once it's complete. Let's take
	 * the following example (we'll use the
	 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <Transition in={inProp} timeout={500}>
	 *         {state => (
	 *           // ...
	 *         )}
	 *       </Transition>
	 *       <button onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state
	 * and stay there for 500ms (the value of `timeout`) before it finally switches
	 * to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from
	 * `'exiting'` to `'exited'`.
	 */

	var Transition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(Transition, _React$Component);

	  function Transition(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;

	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;

	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }

	    return null;
	  } // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }
	  ;

	  var _proto = Transition.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;

	    if (prevProps !== this.props) {
	      var status = this.state.status;

	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }

	    this.updateStatus(false, nextStatus);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;

	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major

	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }

	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };

	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === void 0) {
	      mounting = false;
	    }

	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();

	      if (nextStatus === ENTERING) {
	        this.performEnter(mounting);
	      } else {
	        this.performExit();
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };

	  _proto.performEnter = function performEnter(mounting) {
	    var _this2 = this;

	    var enter = this.props.enter;
	    var appearing = this.context ? this.context.isMounting : mounting;

	    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
	        maybeNode = _ref2[0],
	        maybeAppearing = _ref2[1];

	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set

	    if (!mounting && !enter || config.disabled) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(maybeNode);
	      });
	      return;
	    }

	    this.props.onEnter(maybeNode, maybeAppearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(maybeNode, maybeAppearing);

	      _this2.onTransitionEnd(enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(maybeNode, maybeAppearing);
	        });
	      });
	    });
	  };

	  _proto.performExit = function performExit() {
	    var _this3 = this;

	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts();
	    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

	    if (!exit || config.disabled) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(maybeNode);
	      });
	      return;
	    }

	    this.props.onExit(maybeNode);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(maybeNode);

	      _this3.onTransitionEnd(timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(maybeNode);
	        });
	      });
	    });
	  };

	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };

	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
	    this.setNextCallback(handler);
	    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }

	    if (this.props.addEndListener) {
	      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
	          maybeNode = _ref3[0],
	          maybeNextCallback = _ref3[1];

	      this.props.addEndListener(maybeNode, maybeNextCallback);
	    }

	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };

	  _proto.render = function render() {
	    var status = this.state.status;

	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _this$props = this.props,
	        children = _this$props.children;
	        _this$props.in;
	        _this$props.mountOnEnter;
	        _this$props.unmountOnExit;
	        _this$props.appear;
	        _this$props.enter;
	        _this$props.exit;
	        _this$props.timeout;
	        _this$props.addEndListener;
	        _this$props.onEnter;
	        _this$props.onEntering;
	        _this$props.onEntered;
	        _this$props.onExit;
	        _this$props.onExiting;
	        _this$props.onExited;
	        _this$props.nodeRef;
	        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

	    return (
	      /*#__PURE__*/
	      // allows for nested Transitions
	      react.createElement(TransitionGroupContext.Provider, {
	        value: null
	      }, typeof children === 'function' ? children(status, childProps) : /*#__PURE__*/react.cloneElement(react.Children.only(children), childProps))
	    );
	  };

	  return Transition;
	}(react.Component);

	Transition.contextType = TransitionGroupContext;
	Transition.propTypes = {}; // Name the function so it is clearer in the documentation

	function noop() {}

	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	Transition.UNMOUNTED = UNMOUNTED;
	Transition.EXITED = EXITED;
	Transition.ENTERING = ENTERING;
	Transition.ENTERED = ENTERED;
	Transition.EXITING = EXITING;
	var Transition$1 = Transition;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */

	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && /*#__PURE__*/react.isValidElement(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) react.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */

	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list


	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];

	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i;
	  var childMapping = {};

	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }

	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`


	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}

	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return /*#__PURE__*/react.cloneElement(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}
	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (! /*#__PURE__*/react.isValidElement(child)) return;
	    var hasPrev = (key in prevChildMapping);
	    var hasNext = (key in nextChildMapping);
	    var prevChild = prevChildMapping[key];
	    var isLeaving = /*#__PURE__*/react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && /*#__PURE__*/react.isValidElement(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	/**
	 * The `<TransitionGroup>` component manages a set of transition components
	 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	 * components, `<TransitionGroup>` is a state machine for managing the mounting
	 * and unmounting of components over time.
	 *
	 * Consider the example below. As items are removed or added to the TodoList the
	 * `in` prop is toggled automatically by the `<TransitionGroup>`.
	 *
	 * Note that `<TransitionGroup>`  does not define any animation behavior!
	 * Exactly _how_ a list item animates is up to the individual transition
	 * component. This means you can mix and match animations across different list
	 * items.
	 */

	var TransitionGroup = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;

	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


	    _this.state = {
	      contextValue: {
	        isMounting: true
	      },
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }

	  var _proto = TransitionGroup.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.setState({
	      contextValue: {
	        isMounting: false
	      }
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  } // node is `undefined` when user provided `nodeRef` prop
	  ;

	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = getChildMapping(this.props.children);
	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends$2({}, state.children);

	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	    var contextValue = this.state.contextValue;
	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
	        value: contextValue
	      }, children);
	    }

	    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
	      value: contextValue
	    }, /*#__PURE__*/react.createElement(Component, props, children));
	  };

	  return TransitionGroup;
	}(react.Component);

	TransitionGroup.propTypes = {};
	TransitionGroup.defaultProps = defaultProps;
	var TransitionGroup$1 = TransitionGroup;

	function Ripple(props) {
	  const {
	    className,
	    classes,
	    pulsate = false,
	    rippleX,
	    rippleY,
	    rippleSize,
	    in: inProp,
	    onExited,
	    timeout
	  } = props;
	  const [leaving, setLeaving] = react.useState(false);
	  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
	  const rippleStyles = {
	    width: rippleSize,
	    height: rippleSize,
	    top: -(rippleSize / 2) + rippleY,
	    left: -(rippleSize / 2) + rippleX
	  };
	  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

	  if (!inProp && !leaving) {
	    setLeaving(true);
	  }

	  react.useEffect(() => {
	    if (!inProp && onExited != null) {
	      // react-transition-group#onExited
	      const timeoutId = setTimeout(onExited, timeout);
	      return () => {
	        clearTimeout(timeoutId);
	      };
	    }

	    return undefined;
	  }, [onExited, inProp, timeout]);
	  return /*#__PURE__*/jsxRuntime.jsx("span", {
	    className: rippleClassName,
	    style: rippleStyles,
	    children: /*#__PURE__*/jsxRuntime.jsx("span", {
	      className: childClassName
	    })
	  });
	}

	const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
	var touchRippleClasses$1 = touchRippleClasses;

	var _templateObject, _templateObject2, _templateObject3, _templateObject4;
	const _excluded$u = ["center", "classes", "className"];

	let _ = t => t,
	    _t,
	    _t2,
	    _t3,
	    _t4;
	const DURATION = 550;
	const DELAY_RIPPLE = 80;
	const enterKeyframe = keyframes(_t || (_t = _(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))));
	const exitKeyframe = keyframes(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))));
	const pulsateKeyframe = keyframes(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))));
	const TouchRippleRoot = styled$1('span', {
	  name: 'MuiTouchRipple',
	  slot: 'Root'
	})({
	  overflow: 'hidden',
	  pointerEvents: 'none',
	  position: 'absolute',
	  zIndex: 0,
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0,
	  borderRadius: 'inherit'
	}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
	// in string templates. Do not convert these styles in JS object as it will break.

	const TouchRippleRipple = styled$1(Ripple, {
	  name: 'MuiTouchRipple',
	  slot: 'Ripple'
	})(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"])))), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
	  theme
	}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
	  theme
	}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
	  theme
	}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
	  theme
	}) => theme.transitions.easing.easeInOut);
	/**
	 * @ignore - internal component.
	 *
	 * TODO v5: Make private
	 */

	const TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTouchRipple'
	  });

	  const {
	    center: centerProp = false,
	    classes = {},
	    className
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$u);

	  const [ripples, setRipples] = react.useState([]);
	  const nextKey = react.useRef(0);
	  const rippleCallback = react.useRef(null);
	  react.useEffect(() => {
	    if (rippleCallback.current) {
	      rippleCallback.current();
	      rippleCallback.current = null;
	    }
	  }, [ripples]); // Used to filter out mouse emulated events on mobile.

	  const ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
	  // We don't want to display the ripple for touch scroll events.

	  const startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

	  const startTimerCommit = react.useRef(null);
	  const container = react.useRef(null);
	  react.useEffect(() => {
	    return () => {
	      clearTimeout(startTimer.current);
	    };
	  }, []);
	  const startCommit = react.useCallback(params => {
	    const {
	      pulsate,
	      rippleX,
	      rippleY,
	      rippleSize,
	      cb
	    } = params;
	    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
	      classes: {
	        ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
	        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
	        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
	        child: clsx(classes.child, touchRippleClasses$1.child),
	        childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
	        childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
	      },
	      timeout: DURATION,
	      pulsate: pulsate,
	      rippleX: rippleX,
	      rippleY: rippleY,
	      rippleSize: rippleSize
	    }, nextKey.current)]);
	    nextKey.current += 1;
	    rippleCallback.current = cb;
	  }, [classes]);
	  const start = react.useCallback((event = {}, options = {}, cb) => {
	    const {
	      pulsate = false,
	      center = centerProp || options.pulsate,
	      fakeElement = false // For test purposes

	    } = options;

	    if (event.type === 'mousedown' && ignoringMouseDown.current) {
	      ignoringMouseDown.current = false;
	      return;
	    }

	    if (event.type === 'touchstart') {
	      ignoringMouseDown.current = true;
	    }

	    const element = fakeElement ? null : container.current;
	    const rect = element ? element.getBoundingClientRect() : {
	      width: 0,
	      height: 0,
	      left: 0,
	      top: 0
	    }; // Get the size of the ripple

	    let rippleX;
	    let rippleY;
	    let rippleSize;

	    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
	      rippleX = Math.round(rect.width / 2);
	      rippleY = Math.round(rect.height / 2);
	    } else {
	      const {
	        clientX,
	        clientY
	      } = event.touches ? event.touches[0] : event;
	      rippleX = Math.round(clientX - rect.left);
	      rippleY = Math.round(clientY - rect.top);
	    }

	    if (center) {
	      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

	      if (rippleSize % 2 === 0) {
	        rippleSize += 1;
	      }
	    } else {
	      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
	      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
	      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
	    } // Touche devices


	    if (event.touches) {
	      // check that this isn't another touchstart due to multitouch
	      // otherwise we will only clear a single timer when unmounting while two
	      // are running
	      if (startTimerCommit.current === null) {
	        // Prepare the ripple effect.
	        startTimerCommit.current = () => {
	          startCommit({
	            pulsate,
	            rippleX,
	            rippleY,
	            rippleSize,
	            cb
	          });
	        }; // Delay the execution of the ripple effect.


	        startTimer.current = setTimeout(() => {
	          if (startTimerCommit.current) {
	            startTimerCommit.current();
	            startTimerCommit.current = null;
	          }
	        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
	      }
	    } else {
	      startCommit({
	        pulsate,
	        rippleX,
	        rippleY,
	        rippleSize,
	        cb
	      });
	    }
	  }, [centerProp, startCommit]);
	  const pulsate = react.useCallback(() => {
	    start({}, {
	      pulsate: true
	    });
	  }, [start]);
	  const stop = react.useCallback((event, cb) => {
	    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
	    // We still want to show ripple effect.

	    if (event.type === 'touchend' && startTimerCommit.current) {
	      startTimerCommit.current();
	      startTimerCommit.current = null;
	      startTimer.current = setTimeout(() => {
	        stop(event, cb);
	      });
	      return;
	    }

	    startTimerCommit.current = null;
	    setRipples(oldRipples => {
	      if (oldRipples.length > 0) {
	        return oldRipples.slice(1);
	      }

	      return oldRipples;
	    });
	    rippleCallback.current = cb;
	  }, []);
	  react.useImperativeHandle(ref, () => ({
	    pulsate,
	    start,
	    stop
	  }), [pulsate, start, stop]);
	  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends$2({
	    className: clsx(classes.root, touchRippleClasses$1.root, className),
	    ref: container
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup$1, {
	      component: null,
	      exit: true,
	      children: ripples
	    })
	  }));
	});
	var TouchRipple$1 = TouchRipple;

	function getButtonBaseUtilityClass(slot) {
	  return generateUtilityClass('MuiButtonBase', slot);
	}
	const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
	var buttonBaseClasses$1 = buttonBaseClasses;

	const _excluded$t = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];

	const useUtilityClasses$n = ownerState => {
	  const {
	    disabled,
	    focusVisible,
	    focusVisibleClassName,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
	  };
	  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

	  if (focusVisible && focusVisibleClassName) {
	    composedClasses.root += " ".concat(focusVisibleClassName);
	  }

	  return composedClasses;
	};

	const ButtonBaseRoot = styled$1('button', {
	  name: 'MuiButtonBase',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({
	  display: 'inline-flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  position: 'relative',
	  boxSizing: 'border-box',
	  WebkitTapHighlightColor: 'transparent',
	  backgroundColor: 'transparent',
	  // Reset default value
	  // We disable the focus ring for mouse, touch and keyboard users.
	  outline: 0,
	  border: 0,
	  margin: 0,
	  // Remove the margin in Safari
	  borderRadius: 0,
	  padding: 0,
	  // Remove the padding in Firefox
	  cursor: 'pointer',
	  userSelect: 'none',
	  verticalAlign: 'middle',
	  MozAppearance: 'none',
	  // Reset
	  WebkitAppearance: 'none',
	  // Reset
	  textDecoration: 'none',
	  // So we take precedent over the style of a native <a /> element.
	  color: 'inherit',
	  '&::-moz-focus-inner': {
	    borderStyle: 'none' // Remove Firefox dotted outline.

	  },
	  ["&.".concat(buttonBaseClasses$1.disabled)]: {
	    pointerEvents: 'none',
	    // Disable link interactions
	    cursor: 'default'
	  },
	  '@media print': {
	    colorAdjust: 'exact'
	  }
	});
	/**
	 * `ButtonBase` contains as few styles as possible.
	 * It aims to be a simple building block for creating a button.
	 * It contains a load of style reset and some focus/ripple logic.
	 */

	const ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiButtonBase'
	  });

	  const {
	    action,
	    centerRipple = false,
	    children,
	    className,
	    component = 'button',
	    disabled = false,
	    disableRipple = false,
	    disableTouchRipple = false,
	    focusRipple = false,
	    LinkComponent = 'a',
	    onBlur,
	    onClick,
	    onContextMenu,
	    onDragLeave,
	    onFocus,
	    onFocusVisible,
	    onKeyDown,
	    onKeyUp,
	    onMouseDown,
	    onMouseLeave,
	    onMouseUp,
	    onTouchEnd,
	    onTouchMove,
	    onTouchStart,
	    tabIndex = 0,
	    TouchRippleProps,
	    touchRippleRef,
	    type
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$t);

	  const buttonRef = react.useRef(null);
	  const rippleRef = react.useRef(null);
	  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
	  const {
	    isFocusVisibleRef,
	    onFocus: handleFocusVisible,
	    onBlur: handleBlurVisible,
	    ref: focusVisibleRef
	  } = useIsFocusVisible();
	  const [focusVisible, setFocusVisible] = react.useState(false);

	  if (disabled && focusVisible) {
	    setFocusVisible(false);
	  }

	  react.useImperativeHandle(action, () => ({
	    focusVisible: () => {
	      setFocusVisible(true);
	      buttonRef.current.focus();
	    }
	  }), []);
	  const [mountedState, setMountedState] = react.useState(false);
	  react.useEffect(() => {
	    setMountedState(true);
	  }, []);
	  const enableTouchRipple = mountedState && !disableRipple && !disabled;
	  react.useEffect(() => {
	    if (focusVisible && focusRipple && !disableRipple && mountedState) {
	      rippleRef.current.pulsate();
	    }
	  }, [disableRipple, focusRipple, focusVisible, mountedState]);

	  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
	    return useEventCallback(event => {
	      if (eventCallback) {
	        eventCallback(event);
	      }

	      const ignore = skipRippleAction;

	      if (!ignore && rippleRef.current) {
	        rippleRef.current[rippleAction](event);
	      }

	      return true;
	    });
	  }

	  const handleMouseDown = useRippleHandler('start', onMouseDown);
	  const handleContextMenu = useRippleHandler('stop', onContextMenu);
	  const handleDragLeave = useRippleHandler('stop', onDragLeave);
	  const handleMouseUp = useRippleHandler('stop', onMouseUp);
	  const handleMouseLeave = useRippleHandler('stop', event => {
	    if (focusVisible) {
	      event.preventDefault();
	    }

	    if (onMouseLeave) {
	      onMouseLeave(event);
	    }
	  });
	  const handleTouchStart = useRippleHandler('start', onTouchStart);
	  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
	  const handleTouchMove = useRippleHandler('stop', onTouchMove);
	  const handleBlur = useRippleHandler('stop', event => {
	    handleBlurVisible(event);

	    if (isFocusVisibleRef.current === false) {
	      setFocusVisible(false);
	    }

	    if (onBlur) {
	      onBlur(event);
	    }
	  }, false);
	  const handleFocus = useEventCallback(event => {
	    // Fix for https://github.com/facebook/react/issues/7769
	    if (!buttonRef.current) {
	      buttonRef.current = event.currentTarget;
	    }

	    handleFocusVisible(event);

	    if (isFocusVisibleRef.current === true) {
	      setFocusVisible(true);

	      if (onFocusVisible) {
	        onFocusVisible(event);
	      }
	    }

	    if (onFocus) {
	      onFocus(event);
	    }
	  });

	  const isNonNativeButton = () => {
	    const button = buttonRef.current;
	    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
	  };
	  /**
	   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
	   */


	  const keydownRef = react.useRef(false);
	  const handleKeyDown = useEventCallback(event => {
	    // Check if key is already down to avoid repeats being counted as multiple activations
	    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
	      keydownRef.current = true;
	      rippleRef.current.stop(event, () => {
	        rippleRef.current.start(event);
	      });
	    }

	    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
	      event.preventDefault();
	    }

	    if (onKeyDown) {
	      onKeyDown(event);
	    } // Keyboard accessibility for non interactive elements


	    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
	      event.preventDefault();

	      if (onClick) {
	        onClick(event);
	      }
	    }
	  });
	  const handleKeyUp = useEventCallback(event => {
	    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
	    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
	    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
	      keydownRef.current = false;
	      rippleRef.current.stop(event, () => {
	        rippleRef.current.pulsate(event);
	      });
	    }

	    if (onKeyUp) {
	      onKeyUp(event);
	    } // Keyboard accessibility for non interactive elements


	    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
	      onClick(event);
	    }
	  });
	  let ComponentProp = component;

	  if (ComponentProp === 'button' && (other.href || other.to)) {
	    ComponentProp = LinkComponent;
	  }

	  const buttonProps = {};

	  if (ComponentProp === 'button') {
	    buttonProps.type = type === undefined ? 'button' : type;
	    buttonProps.disabled = disabled;
	  } else {
	    if (!other.href && !other.to) {
	      buttonProps.role = 'button';
	    }

	    if (disabled) {
	      buttonProps['aria-disabled'] = disabled;
	    }
	  }

	  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
	  const handleRef = useForkRef(ref, handleOwnRef);

	  const ownerState = _extends$2({}, props, {
	    centerRipple,
	    component,
	    disabled,
	    disableRipple,
	    disableTouchRipple,
	    focusRipple,
	    tabIndex,
	    focusVisible
	  });

	  const classes = useUtilityClasses$n(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends$2({
	    as: ComponentProp,
	    className: clsx(classes.root, className),
	    ownerState: ownerState,
	    onBlur: handleBlur,
	    onClick: onClick,
	    onContextMenu: handleContextMenu,
	    onFocus: handleFocus,
	    onKeyDown: handleKeyDown,
	    onKeyUp: handleKeyUp,
	    onMouseDown: handleMouseDown,
	    onMouseLeave: handleMouseLeave,
	    onMouseUp: handleMouseUp,
	    onDragLeave: handleDragLeave,
	    onTouchEnd: handleTouchEnd,
	    onTouchMove: handleTouchMove,
	    onTouchStart: handleTouchStart,
	    ref: handleRef,
	    tabIndex: disabled ? -1 : tabIndex,
	    type: type
	  }, buttonProps, other, {
	    children: [children, enableTouchRipple ?
	    /*#__PURE__*/

	    /* TouchRipple is only needed client-side, x2 boost on the server. */
	    jsxRuntime.jsx(TouchRipple$1, _extends$2({
	      ref: handleRippleRef,
	      center: centerRipple
	    }, TouchRippleProps)) : null]
	  }));
	});
	var ButtonBase$1 = ButtonBase;

	function getButtonUtilityClass(slot) {
	  return generateUtilityClass('MuiButton', slot);
	}
	const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
	var buttonClasses$1 = buttonClasses;

	/**
	 * @ignore - internal component.
	 */

	const ButtonGroupContext = /*#__PURE__*/react.createContext({});

	var ButtonGroupContext$1 = ButtonGroupContext;

	const _excluded$s = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];

	const useUtilityClasses$m = ownerState => {
	  const {
	    color,
	    disableElevation,
	    fullWidth,
	    size,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, "".concat(variant).concat(capitalize(color)), "size".concat(capitalize(size)), "".concat(variant, "Size").concat(capitalize(size)), color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
	    label: ['label'],
	    startIcon: ['startIcon', "iconSize".concat(capitalize(size))],
	    endIcon: ['endIcon', "iconSize".concat(capitalize(size))]
	  };
	  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const commonIconStyles = ownerState => _extends$2({}, ownerState.size === 'small' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 18
	  }
	}, ownerState.size === 'medium' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 20
	  }
	}, ownerState.size === 'large' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 22
	  }
	});

	const ButtonRoot = styled$1(ButtonBase$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiButton',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles[ownerState.variant], styles["".concat(ownerState.variant).concat(capitalize(ownerState.color))], styles["size".concat(capitalize(ownerState.size))], styles["".concat(ownerState.variant, "Size").concat(capitalize(ownerState.size))], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  var _theme$palette$getCon, _theme$palette;

	  return _extends$2({}, theme.typography.button, {
	    minWidth: 64,
	    padding: '6px 16px',
	    borderRadius: (theme.vars || theme).shape.borderRadius,
	    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
	      duration: theme.transitions.duration.short
	    }),
	    '&:hover': _extends$2({
	      textDecoration: 'none',
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
	      border: "1px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'contained' && {
	      backgroundColor: (theme.vars || theme).palette.grey.A100,
	      boxShadow: (theme.vars || theme).shadows[4],
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        boxShadow: (theme.vars || theme).shadows[2],
	        backgroundColor: (theme.vars || theme).palette.grey[300]
	      }
	    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
	      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
	      }
	    }),
	    '&:active': _extends$2({}, ownerState.variant === 'contained' && {
	      boxShadow: (theme.vars || theme).shadows[8]
	    }),
	    ["&.".concat(buttonClasses$1.focusVisible)]: _extends$2({}, ownerState.variant === 'contained' && {
	      boxShadow: (theme.vars || theme).shadows[6]
	    }),
	    ["&.".concat(buttonClasses$1.disabled)]: _extends$2({
	      color: (theme.vars || theme).palette.action.disabled
	    }, ownerState.variant === 'outlined' && {
	      border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
	    }, ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
	      border: "1px solid ".concat((theme.vars || theme).palette.action.disabled)
	    }, ownerState.variant === 'contained' && {
	      color: (theme.vars || theme).palette.action.disabled,
	      boxShadow: (theme.vars || theme).shadows[0],
	      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
	    })
	  }, ownerState.variant === 'text' && {
	    padding: '6px 8px'
	  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].main
	  }, ownerState.variant === 'outlined' && {
	    padding: '5px 15px',
	    border: '1px solid currentColor'
	  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].main,
	    border: theme.vars ? "1px solid rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.5)") : "1px solid ".concat(alpha(theme.palette[ownerState.color].main, 0.5))
	  }, ownerState.variant === 'contained' && {
	    color: theme.vars ? // this is safe because grey does not change between default light/dark mode
	    theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
	    backgroundColor: (theme.vars || theme).palette.grey[300],
	    boxShadow: (theme.vars || theme).shadows[2]
	  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].contrastText,
	    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
	  }, ownerState.color === 'inherit' && {
	    color: 'inherit',
	    borderColor: 'currentColor'
	  }, ownerState.size === 'small' && ownerState.variant === 'text' && {
	    padding: '4px 5px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'text' && {
	    padding: '8px 11px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
	    padding: '3px 9px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
	    padding: '7px 21px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
	    padding: '4px 10px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
	    padding: '8px 22px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.fullWidth && {
	    width: '100%'
	  });
	}, ({
	  ownerState
	}) => ownerState.disableElevation && {
	  boxShadow: 'none',
	  '&:hover': {
	    boxShadow: 'none'
	  },
	  ["&.".concat(buttonClasses$1.focusVisible)]: {
	    boxShadow: 'none'
	  },
	  '&:active': {
	    boxShadow: 'none'
	  },
	  ["&.".concat(buttonClasses$1.disabled)]: {
	    boxShadow: 'none'
	  }
	});
	const ButtonStartIcon = styled$1('span', {
	  name: 'MuiButton',
	  slot: 'StartIcon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.startIcon, styles["iconSize".concat(capitalize(ownerState.size))]];
	  }
	})(({
	  ownerState
	}) => _extends$2({
	  display: 'inherit',
	  marginRight: 8,
	  marginLeft: -4
	}, ownerState.size === 'small' && {
	  marginLeft: -2
	}, commonIconStyles(ownerState)));
	const ButtonEndIcon = styled$1('span', {
	  name: 'MuiButton',
	  slot: 'EndIcon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.endIcon, styles["iconSize".concat(capitalize(ownerState.size))]];
	  }
	})(({
	  ownerState
	}) => _extends$2({
	  display: 'inherit',
	  marginRight: -4,
	  marginLeft: 8
	}, ownerState.size === 'small' && {
	  marginRight: -2
	}, commonIconStyles(ownerState)));
	const Button = /*#__PURE__*/react.forwardRef(function Button(inProps, ref) {
	  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
	  const contextProps = react.useContext(ButtonGroupContext$1);
	  const resolvedProps = resolveProps(contextProps, inProps);
	  const props = useThemeProps({
	    props: resolvedProps,
	    name: 'MuiButton'
	  });

	  const {
	    children,
	    color = 'primary',
	    component = 'button',
	    className,
	    disabled = false,
	    disableElevation = false,
	    disableFocusRipple = false,
	    endIcon: endIconProp,
	    focusVisibleClassName,
	    fullWidth = false,
	    size = 'medium',
	    startIcon: startIconProp,
	    type,
	    variant = 'text'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$s);

	  const ownerState = _extends$2({}, props, {
	    color,
	    component,
	    disabled,
	    disableElevation,
	    disableFocusRipple,
	    fullWidth,
	    size,
	    type,
	    variant
	  });

	  const classes = useUtilityClasses$m(ownerState);

	  const startIcon = startIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonStartIcon, {
	    className: classes.startIcon,
	    ownerState: ownerState,
	    children: startIconProp
	  });

	  const endIcon = endIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonEndIcon, {
	    className: classes.endIcon,
	    ownerState: ownerState,
	    children: endIconProp
	  });

	  return /*#__PURE__*/jsxRuntime.jsxs(ButtonRoot, _extends$2({
	    ownerState: ownerState,
	    className: clsx(className, contextProps.className),
	    component: component,
	    disabled: disabled,
	    focusRipple: !disableFocusRipple,
	    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
	    ref: ref,
	    type: type
	  }, other, {
	    classes: classes,
	    children: [startIcon, children, endIcon]
	  }));
	});
	var Button$1 = Button;

	const ButtonBar = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("g", {
	    children: /*#__PURE__*/jsxRuntime.jsxs("div", {
	      className: "ButtonBarContainer",
	      children: [/*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Home"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Aircraft",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Aircraft"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Checklist",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Checklist"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Map",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Map"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Scratchpad",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Scratchpad"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Browser",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Browser"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Settings",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Settings"
	        })
	      })]
	    })
	  });
	};

	function useTheme() {
	  const theme = useTheme$1(defaultTheme$2);

	  return theme;
	}

	const defaultTheme = createTheme();
	const Box = createBox({
	  defaultTheme,
	  defaultClassName: 'MuiBox-root',
	  generateClassName: ClassNameGenerator$1.generate
	});
	var Box$1 = Box;

	function getButtonGroupUtilityClass(slot) {
	  return generateUtilityClass('MuiButtonGroup', slot);
	}
	const buttonGroupClasses = generateUtilityClasses('MuiButtonGroup', ['root', 'contained', 'outlined', 'text', 'disableElevation', 'disabled', 'fullWidth', 'vertical', 'grouped', 'groupedHorizontal', 'groupedVertical', 'groupedText', 'groupedTextHorizontal', 'groupedTextVertical', 'groupedTextPrimary', 'groupedTextSecondary', 'groupedOutlined', 'groupedOutlinedHorizontal', 'groupedOutlinedVertical', 'groupedOutlinedPrimary', 'groupedOutlinedSecondary', 'groupedContained', 'groupedContainedHorizontal', 'groupedContainedVertical', 'groupedContainedPrimary', 'groupedContainedSecondary']);
	var buttonGroupClasses$1 = buttonGroupClasses;

	const _excluded$r = ["children", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"];

	const overridesResolver$1 = (props, styles) => {
	  const {
	    ownerState
	  } = props;
	  return [{
	    ["& .".concat(buttonGroupClasses$1.grouped)]: styles.grouped
	  }, {
	    ["& .".concat(buttonGroupClasses$1.grouped)]: styles["grouped".concat(capitalize(ownerState.orientation))]
	  }, {
	    ["& .".concat(buttonGroupClasses$1.grouped)]: styles["grouped".concat(capitalize(ownerState.variant))]
	  }, {
	    ["& .".concat(buttonGroupClasses$1.grouped)]: styles["grouped".concat(capitalize(ownerState.variant)).concat(capitalize(ownerState.orientation))]
	  }, {
	    ["& .".concat(buttonGroupClasses$1.grouped)]: styles["grouped".concat(capitalize(ownerState.variant)).concat(capitalize(ownerState.color))]
	  }, styles.root, styles[ownerState.variant], ownerState.disableElevation === true && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.orientation === 'vertical' && styles.vertical];
	};

	const useUtilityClasses$l = ownerState => {
	  const {
	    classes,
	    color,
	    disabled,
	    disableElevation,
	    fullWidth,
	    orientation,
	    variant
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, orientation === 'vertical' && 'vertical', fullWidth && 'fullWidth', disableElevation && 'disableElevation'],
	    grouped: ['grouped', "grouped".concat(capitalize(orientation)), "grouped".concat(capitalize(variant)), "grouped".concat(capitalize(variant)).concat(capitalize(orientation)), "grouped".concat(capitalize(variant)).concat(capitalize(color)), disabled && 'disabled']
	  };
	  return composeClasses(slots, getButtonGroupUtilityClass, classes);
	};

	const ButtonGroupRoot = styled$1('div', {
	  name: 'MuiButtonGroup',
	  slot: 'Root',
	  overridesResolver: overridesResolver$1
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  display: 'inline-flex',
	  borderRadius: theme.shape.borderRadius
	}, ownerState.variant === 'contained' && {
	  boxShadow: theme.shadows[2]
	}, ownerState.disableElevation && {
	  boxShadow: 'none'
	}, ownerState.fullWidth && {
	  width: '100%'
	}, ownerState.orientation === 'vertical' && {
	  flexDirection: 'column'
	}, {
	  ["& .".concat(buttonGroupClasses$1.grouped)]: _extends$2({
	    minWidth: 40,
	    '&:not(:first-of-type)': _extends$2({}, ownerState.orientation === 'horizontal' && {
	      borderTopLeftRadius: 0,
	      borderBottomLeftRadius: 0
	    }, ownerState.orientation === 'vertical' && {
	      borderTopRightRadius: 0,
	      borderTopLeftRadius: 0
	    }, ownerState.variant === 'outlined' && ownerState.orientation === 'horizontal' && {
	      marginLeft: -1
	    }, ownerState.variant === 'outlined' && ownerState.orientation === 'vertical' && {
	      marginTop: -1
	    }),
	    '&:not(:last-of-type)': _extends$2({}, ownerState.orientation === 'horizontal' && {
	      borderTopRightRadius: 0,
	      borderBottomRightRadius: 0
	    }, ownerState.orientation === 'vertical' && {
	      borderBottomRightRadius: 0,
	      borderBottomLeftRadius: 0
	    }, ownerState.variant === 'text' && ownerState.orientation === 'horizontal' && {
	      borderRight: "1px solid ".concat(theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
	    }, ownerState.variant === 'text' && ownerState.orientation === 'vertical' && {
	      borderBottom: "1px solid ".concat(theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
	    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
	      borderColor: alpha(theme.palette[ownerState.color].main, 0.5)
	    }, ownerState.variant === 'outlined' && ownerState.orientation === 'horizontal' && {
	      borderRightColor: 'transparent'
	    }, ownerState.variant === 'outlined' && ownerState.orientation === 'vertical' && {
	      borderBottomColor: 'transparent'
	    }, ownerState.variant === 'contained' && ownerState.orientation === 'horizontal' && {
	      borderRight: "1px solid ".concat(theme.palette.grey[400]),
	      ["&.".concat(buttonGroupClasses$1.disabled)]: {
	        borderRight: "1px solid ".concat(theme.palette.action.disabled)
	      }
	    }, ownerState.variant === 'contained' && ownerState.orientation === 'vertical' && {
	      borderBottom: "1px solid ".concat(theme.palette.grey[400]),
	      ["&.".concat(buttonGroupClasses$1.disabled)]: {
	        borderBottom: "1px solid ".concat(theme.palette.action.disabled)
	      }
	    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
	      borderColor: theme.palette[ownerState.color].dark
	    }, {
	      '&:hover': _extends$2({}, ownerState.variant === 'outlined' && ownerState.orientation === 'horizontal' && {
	        borderRightColor: 'currentColor'
	      }, ownerState.variant === 'outlined' && ownerState.orientation === 'vertical' && {
	        borderBottomColor: 'currentColor'
	      })
	    }),
	    '&:hover': _extends$2({}, ownerState.variant === 'contained' && {
	      boxShadow: 'none'
	    })
	  }, ownerState.variant === 'contained' && {
	    boxShadow: 'none'
	  })
	}));
	const ButtonGroup = /*#__PURE__*/react.forwardRef(function ButtonGroup(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiButtonGroup'
	  });

	  const {
	    children,
	    className,
	    color = 'primary',
	    component = 'div',
	    disabled = false,
	    disableElevation = false,
	    disableFocusRipple = false,
	    disableRipple = false,
	    fullWidth = false,
	    orientation = 'horizontal',
	    size = 'medium',
	    variant = 'outlined'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$r);

	  const ownerState = _extends$2({}, props, {
	    color,
	    component,
	    disabled,
	    disableElevation,
	    disableFocusRipple,
	    disableRipple,
	    fullWidth,
	    orientation,
	    size,
	    variant
	  });

	  const classes = useUtilityClasses$l(ownerState);
	  const context = react.useMemo(() => ({
	    className: classes.grouped,
	    color,
	    disabled,
	    disableElevation,
	    disableFocusRipple,
	    disableRipple,
	    fullWidth,
	    size,
	    variant
	  }), [color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth, size, variant, classes.grouped]);
	  return /*#__PURE__*/jsxRuntime.jsx(ButtonGroupRoot, _extends$2({
	    as: component,
	    role: "group",
	    className: clsx(classes.root, className),
	    ref: ref,
	    ownerState: ownerState
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(ButtonGroupContext$1.Provider, {
	      value: context,
	      children: children
	    })
	  }));
	});
	var ButtonGroup$1 = ButtonGroup;

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

	var runtime = {
	  exports: {}
	};
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
	  var runtime = function (exports) {
	    var Op = Object.prototype;
	    var hasOwn = Op.hasOwnProperty;
	    var undefined$1; // More compressible than void 0.

	    var $Symbol = typeof Symbol === "function" ? Symbol : {};
	    var iteratorSymbol = $Symbol.iterator || "@@iterator";
	    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	    function define(obj, key, value) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	      return obj[key];
	    }

	    try {
	      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	      define({}, "");
	    } catch (err) {
	      define = function (obj, key, value) {
	        return obj[key] = value;
	      };
	    }

	    function wrap(innerFn, outerFn, self, tryLocsList) {
	      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	      var generator = Object.create(protoGenerator.prototype);
	      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
	      // .throw, and .return methods.

	      generator._invoke = makeInvokeMethod(innerFn, self, context);
	      return generator;
	    }

	    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
	    // record like context.tryEntries[i].completion. This interface could
	    // have been (and was previously) designed to take a closure to be
	    // invoked without arguments, but in all the cases we care about we
	    // already have an existing method we want to call, so there's no need
	    // to create a new function object. We can even get away with assuming
	    // the method takes exactly one argument, since that happens to be true
	    // in every case, so we don't have to touch the arguments object. The
	    // only additional allocation required is the completion record, which
	    // has a stable shape and so hopefully should be cheap to allocate.

	    function tryCatch(fn, obj, arg) {
	      try {
	        return {
	          type: "normal",
	          arg: fn.call(obj, arg)
	        };
	      } catch (err) {
	        return {
	          type: "throw",
	          arg: err
	        };
	      }
	    }

	    var GenStateSuspendedStart = "suspendedStart";
	    var GenStateSuspendedYield = "suspendedYield";
	    var GenStateExecuting = "executing";
	    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
	    // breaking out of the dispatch switch statement.

	    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
	    // .constructor.prototype properties for functions that return Generator
	    // objects. For full spec compliance, you may wish to configure your
	    // minifier not to mangle the names of these two functions.

	    function Generator() {}

	    function GeneratorFunction() {}

	    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
	    // don't natively support it.


	    var IteratorPrototype = {};
	    define(IteratorPrototype, iteratorSymbol, function () {
	      return this;
	    });
	    var getProto = Object.getPrototypeOf;
	    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

	    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	      // This environment has a native %IteratorPrototype%; use it instead
	      // of the polyfill.
	      IteratorPrototype = NativeIteratorPrototype;
	    }

	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	    GeneratorFunction.prototype = GeneratorFunctionPrototype;
	    define(Gp, "constructor", GeneratorFunctionPrototype);
	    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
	    // Iterator interface in terms of a single ._invoke method.

	    function defineIteratorMethods(prototype) {
	      ["next", "throw", "return"].forEach(function (method) {
	        define(prototype, method, function (arg) {
	          return this._invoke(method, arg);
	        });
	      });
	    }

	    exports.isGeneratorFunction = function (genFun) {
	      var ctor = typeof genFun === "function" && genFun.constructor;
	      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
	      // do is to check its .name property.
	      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	    };

	    exports.mark = function (genFun) {
	      if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	      } else {
	        genFun.__proto__ = GeneratorFunctionPrototype;
	        define(genFun, toStringTagSymbol, "GeneratorFunction");
	      }

	      genFun.prototype = Object.create(Gp);
	      return genFun;
	    }; // Within the body of any async function, `await x` is transformed to
	    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	    // `hasOwn.call(value, "__await")` to determine if the yielded value is
	    // meant to be awaited.


	    exports.awrap = function (arg) {
	      return {
	        __await: arg
	      };
	    };

	    function AsyncIterator(generator, PromiseImpl) {
	      function invoke(method, arg, resolve, reject) {
	        var record = tryCatch(generator[method], generator, arg);

	        if (record.type === "throw") {
	          reject(record.arg);
	        } else {
	          var result = record.arg;
	          var value = result.value;

	          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
	            return PromiseImpl.resolve(value.__await).then(function (value) {
	              invoke("next", value, resolve, reject);
	            }, function (err) {
	              invoke("throw", err, resolve, reject);
	            });
	          }

	          return PromiseImpl.resolve(value).then(function (unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration.
	            result.value = unwrapped;
	            resolve(result);
	          }, function (error) {
	            // If a rejected Promise was yielded, throw the rejection back
	            // into the async generator function so it can be handled there.
	            return invoke("throw", error, resolve, reject);
	          });
	        }
	      }

	      var previousPromise;

	      function enqueue(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }

	        return previousPromise = // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
	        // invocations of the iterator.
	        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      } // Define the unified helper method that is used to implement .next,
	      // .throw, and .return (see defineIteratorMethods).


	      this._invoke = enqueue;
	    }

	    defineIteratorMethods(AsyncIterator.prototype);
	    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	      return this;
	    });
	    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
	    // AsyncIterator objects; they just return a Promise for the value of
	    // the final result produced by the iterator.

	    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	      if (PromiseImpl === void 0) PromiseImpl = Promise;
	      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function (result) {
	        return result.done ? result.value : iter.next();
	      });
	    };

	    function makeInvokeMethod(innerFn, self, context) {
	      var state = GenStateSuspendedStart;
	      return function invoke(method, arg) {
	        if (state === GenStateExecuting) {
	          throw new Error("Generator is already running");
	        }

	        if (state === GenStateCompleted) {
	          if (method === "throw") {
	            throw arg;
	          } // Be forgiving, per 25.3.3.3.3 of the spec:
	          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


	          return doneResult();
	        }

	        context.method = method;
	        context.arg = arg;

	        while (true) {
	          var delegate = context.delegate;

	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);

	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }

	          if (context.method === "next") {
	            // Setting context._sent for legacy support of Babel's
	            // function.sent implementation.
	            context.sent = context._sent = context.arg;
	          } else if (context.method === "throw") {
	            if (state === GenStateSuspendedStart) {
	              state = GenStateCompleted;
	              throw context.arg;
	            }

	            context.dispatchException(context.arg);
	          } else if (context.method === "return") {
	            context.abrupt("return", context.arg);
	          }

	          state = GenStateExecuting;
	          var record = tryCatch(innerFn, self, context);

	          if (record.type === "normal") {
	            // If an exception is thrown from innerFn, we leave state ===
	            // GenStateExecuting and loop back for another invocation.
	            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	            if (record.arg === ContinueSentinel) {
	              continue;
	            }

	            return {
	              value: record.arg,
	              done: context.done
	            };
	          } else if (record.type === "throw") {
	            state = GenStateCompleted; // Dispatch the exception by looping back around to the
	            // context.dispatchException(context.arg) call above.

	            context.method = "throw";
	            context.arg = record.arg;
	          }
	        }
	      };
	    } // Call delegate.iterator[context.method](context.arg) and handle the
	    // result, either by returning a { value, done } result from the
	    // delegate iterator, or by modifying context.method and context.arg,
	    // setting context.delegate to null, and returning the ContinueSentinel.


	    function maybeInvokeDelegate(delegate, context) {
	      var method = delegate.iterator[context.method];

	      if (method === undefined$1) {
	        // A .throw or .return when the delegate iterator has no .throw
	        // method always terminates the yield* loop.
	        context.delegate = null;

	        if (context.method === "throw") {
	          // Note: ["return"] must be used for ES3 parsing compatibility.
	          if (delegate.iterator["return"]) {
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            context.method = "return";
	            context.arg = undefined$1;
	            maybeInvokeDelegate(delegate, context);

	            if (context.method === "throw") {
	              // If maybeInvokeDelegate(context) changed context.method from
	              // "return" to "throw", let that override the TypeError below.
	              return ContinueSentinel;
	            }
	          }

	          context.method = "throw";
	          context.arg = new TypeError("The iterator does not provide a 'throw' method");
	        }

	        return ContinueSentinel;
	      }

	      var record = tryCatch(method, delegate.iterator, context.arg);

	      if (record.type === "throw") {
	        context.method = "throw";
	        context.arg = record.arg;
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      var info = record.arg;

	      if (!info) {
	        context.method = "throw";
	        context.arg = new TypeError("iterator result is not an object");
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      if (info.done) {
	        // Assign the result of the finished delegate to the temporary
	        // variable specified by delegate.resultName (see delegateYield).
	        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

	        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
	        // exception, let the outer generator proceed normally. If
	        // context.method was "next", forget context.arg since it has been
	        // "consumed" by the delegate iterator. If context.method was
	        // "return", allow the original .return call to continue in the
	        // outer generator.

	        if (context.method !== "return") {
	          context.method = "next";
	          context.arg = undefined$1;
	        }
	      } else {
	        // Re-yield the result returned by the delegate method.
	        return info;
	      } // The delegate iterator is finished, so forget it and continue with
	      // the outer generator.


	      context.delegate = null;
	      return ContinueSentinel;
	    } // Define Generator.prototype.{next,throw,return} in terms of the
	    // unified ._invoke helper method.


	    defineIteratorMethods(Gp);
	    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
	    // @@iterator function is called on it. Some browsers' implementations of the
	    // iterator prototype chain incorrectly implement this, causing the Generator
	    // object to not be returned from this call. This ensures that doesn't happen.
	    // See https://github.com/facebook/regenerator/issues/274 for more details.

	    define(Gp, iteratorSymbol, function () {
	      return this;
	    });
	    define(Gp, "toString", function () {
	      return "[object Generator]";
	    });

	    function pushTryEntry(locs) {
	      var entry = {
	        tryLoc: locs[0]
	      };

	      if (1 in locs) {
	        entry.catchLoc = locs[1];
	      }

	      if (2 in locs) {
	        entry.finallyLoc = locs[2];
	        entry.afterLoc = locs[3];
	      }

	      this.tryEntries.push(entry);
	    }

	    function resetTryEntry(entry) {
	      var record = entry.completion || {};
	      record.type = "normal";
	      delete record.arg;
	      entry.completion = record;
	    }

	    function Context(tryLocsList) {
	      // The root entry object (effectively a try statement without a catch
	      // or a finally block) gives us a place to store values thrown from
	      // locations where there is no enclosing try statement.
	      this.tryEntries = [{
	        tryLoc: "root"
	      }];
	      tryLocsList.forEach(pushTryEntry, this);
	      this.reset(true);
	    }

	    exports.keys = function (object) {
	      var keys = [];

	      for (var key in object) {
	        keys.push(key);
	      }

	      keys.reverse(); // Rather than returning an object with a next method, we keep
	      // things simple and return the next function itself.

	      return function next() {
	        while (keys.length) {
	          var key = keys.pop();

	          if (key in object) {
	            next.value = key;
	            next.done = false;
	            return next;
	          }
	        } // To avoid creating an additional object, we just hang the .value
	        // and .done properties off the next function object itself. This
	        // also ensures that the minifier will not anonymize the function.


	        next.done = true;
	        return next;
	      };
	    };

	    function values(iterable) {
	      if (iterable) {
	        var iteratorMethod = iterable[iteratorSymbol];

	        if (iteratorMethod) {
	          return iteratorMethod.call(iterable);
	        }

	        if (typeof iterable.next === "function") {
	          return iterable;
	        }

	        if (!isNaN(iterable.length)) {
	          var i = -1,
	              next = function next() {
	            while (++i < iterable.length) {
	              if (hasOwn.call(iterable, i)) {
	                next.value = iterable[i];
	                next.done = false;
	                return next;
	              }
	            }

	            next.value = undefined$1;
	            next.done = true;
	            return next;
	          };

	          return next.next = next;
	        }
	      } // Return an iterator with no values.


	      return {
	        next: doneResult
	      };
	    }

	    exports.values = values;

	    function doneResult() {
	      return {
	        value: undefined$1,
	        done: true
	      };
	    }

	    Context.prototype = {
	      constructor: Context,
	      reset: function (skipTempReset) {
	        this.prev = 0;
	        this.next = 0; // Resetting context._sent for legacy support of Babel's
	        // function.sent implementation.

	        this.sent = this._sent = undefined$1;
	        this.done = false;
	        this.delegate = null;
	        this.method = "next";
	        this.arg = undefined$1;
	        this.tryEntries.forEach(resetTryEntry);

	        if (!skipTempReset) {
	          for (var name in this) {
	            // Not sure about the optimal order of these conditions:
	            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	              this[name] = undefined$1;
	            }
	          }
	        }
	      },
	      stop: function () {
	        this.done = true;
	        var rootEntry = this.tryEntries[0];
	        var rootRecord = rootEntry.completion;

	        if (rootRecord.type === "throw") {
	          throw rootRecord.arg;
	        }

	        return this.rval;
	      },
	      dispatchException: function (exception) {
	        if (this.done) {
	          throw exception;
	        }

	        var context = this;

	        function handle(loc, caught) {
	          record.type = "throw";
	          record.arg = exception;
	          context.next = loc;

	          if (caught) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            context.method = "next";
	            context.arg = undefined$1;
	          }

	          return !!caught;
	        }

	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          var record = entry.completion;

	          if (entry.tryLoc === "root") {
	            // Exception thrown outside of any try block that could handle
	            // it, so set the completion value of the entire function to
	            // throw the exception.
	            return handle("end");
	          }

	          if (entry.tryLoc <= this.prev) {
	            var hasCatch = hasOwn.call(entry, "catchLoc");
	            var hasFinally = hasOwn.call(entry, "finallyLoc");

	            if (hasCatch && hasFinally) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              } else if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else if (hasCatch) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              }
	            } else if (hasFinally) {
	              if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else {
	              throw new Error("try statement without catch or finally");
	            }
	          }
	        }
	      },
	      abrupt: function (type, arg) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	            var finallyEntry = entry;
	            break;
	          }
	        }

	        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	          // Ignore the finally entry if control is not jumping to a
	          // location outside the try/catch block.
	          finallyEntry = null;
	        }

	        var record = finallyEntry ? finallyEntry.completion : {};
	        record.type = type;
	        record.arg = arg;

	        if (finallyEntry) {
	          this.method = "next";
	          this.next = finallyEntry.finallyLoc;
	          return ContinueSentinel;
	        }

	        return this.complete(record);
	      },
	      complete: function (record, afterLoc) {
	        if (record.type === "throw") {
	          throw record.arg;
	        }

	        if (record.type === "break" || record.type === "continue") {
	          this.next = record.arg;
	        } else if (record.type === "return") {
	          this.rval = this.arg = record.arg;
	          this.method = "return";
	          this.next = "end";
	        } else if (record.type === "normal" && afterLoc) {
	          this.next = afterLoc;
	        }

	        return ContinueSentinel;
	      },
	      finish: function (finallyLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.finallyLoc === finallyLoc) {
	            this.complete(entry.completion, entry.afterLoc);
	            resetTryEntry(entry);
	            return ContinueSentinel;
	          }
	        }
	      },
	      "catch": function (tryLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc === tryLoc) {
	            var record = entry.completion;

	            if (record.type === "throw") {
	              var thrown = record.arg;
	              resetTryEntry(entry);
	            }

	            return thrown;
	          }
	        } // The context.catch method must only be called with a location
	        // argument that corresponds to a known catch block.


	        throw new Error("illegal catch attempt");
	      },
	      delegateYield: function (iterable, resultName, nextLoc) {
	        this.delegate = {
	          iterator: values(iterable),
	          resultName: resultName,
	          nextLoc: nextLoc
	        };

	        if (this.method === "next") {
	          // Deliberately forget the last sent value so that we don't
	          // accidentally pass it on to the delegate.
	          this.arg = undefined$1;
	        }

	        return ContinueSentinel;
	      }
	    }; // Regardless of whether this script is executing as a CommonJS module
	    // or not, return the runtime object so that we can declare the variable
	    // regeneratorRuntime in the outer scope, which allows this module to be
	    // injected easily by `bin/regenerator --include-runtime script.js`.

	    return exports;
	  }( // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports);

	  try {
	    regeneratorRuntime = runtime;
	  } catch (accidentalStrictMode) {
	    // This module should not be running in strict mode, so the above
	    // assignment should always work unless something is misconfigured. Just
	    // in case runtime.js accidentally runs in strict mode, in modern engines
	    // we can explicitly access globalThis. In older engines we can escape
	    // strict mode using a global Function call. This could conceivably fail
	    // if a Content Security Policy forbids using Function, but in that case
	    // the proper solution is to fix the accidental strict mode problem. If
	    // you've misconfigured your bundler to force strict mode and applied a
	    // CSP to forbid Function, and you're not willing to fix either of those
	    // problems, please detail your unique predicament in a GitHub issue.
	    if (typeof globalThis === "object") {
	      globalThis.regeneratorRuntime = runtime;
	    } else {
	      Function("r", "regeneratorRuntime = r")(runtime);
	    }
	  }
	})(runtime);

	var _regeneratorRuntime = runtime.exports;
	/**
	 * Generate SVG Path tag from the given points
	 */

	var SvgPath = function SvgPath(_ref) {
	  var paths = _ref.paths,
	      id = _ref.id,
	      strokeWidth = _ref.strokeWidth,
	      strokeColor = _ref.strokeColor,
	      _ref$command = _ref.command,
	      command = _ref$command === void 0 ? bezierCommand : _ref$command;

	  if (paths.length === 1) {
	    var _paths$ = paths[0],
	        x = _paths$.x,
	        y = _paths$.y;
	    var radius = strokeWidth / 2;
	    return /*#__PURE__*/react.createElement("circle", {
	      key: id,
	      id: id,
	      cx: x,
	      cy: y,
	      r: radius,
	      stroke: strokeColor,
	      fill: strokeColor
	    });
	  }

	  var d = paths.reduce(function (acc, point, i, a) {
	    return i === 0 ? "M " + point.x + "," + point.y : acc + " " + command(point, i, a);
	  }, '');
	  return /*#__PURE__*/react.createElement("path", {
	    key: id,
	    id: id,
	    d: d,
	    fill: "none",
	    strokeLinecap: "round",
	    stroke: strokeColor,
	    strokeWidth: strokeWidth
	  });
	};

	var line = function line(pointA, pointB) {
	  var lengthX = pointB.x - pointA.x;
	  var lengthY = pointB.y - pointA.y;
	  return {
	    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
	    angle: Math.atan2(lengthY, lengthX)
	  };
	};

	var controlPoint = function controlPoint(controlPoints) {
	  var current = controlPoints.current,
	      next = controlPoints.next,
	      previous = controlPoints.previous,
	      reverse = controlPoints.reverse;
	  var p = previous || current;
	  var n = next || current;
	  var smoothing = 0.2;
	  var o = line(p, n);
	  var angle = o.angle + (reverse ? Math.PI : 0);
	  var length = o.length * smoothing;
	  var x = current.x + Math.cos(angle) * length;
	  var y = current.y + Math.sin(angle) * length;
	  return [x, y];
	};

	var bezierCommand = function bezierCommand(point, i, a) {
	  var cpsX = null;
	  var cpsY = null;

	  switch (i) {
	    case 0:
	      var _controlPoint = controlPoint({
	        current: point
	      });

	      cpsX = _controlPoint[0];
	      cpsY = _controlPoint[1];
	      break;

	    case 1:
	      var _controlPoint2 = controlPoint({
	        current: a[i - 1],
	        next: point
	      });

	      cpsX = _controlPoint2[0];
	      cpsY = _controlPoint2[1];
	      break;

	    default:
	      var _controlPoint3 = controlPoint({
	        current: a[i - 1],
	        previous: a[i - 2],
	        next: point
	      });

	      cpsX = _controlPoint3[0];
	      cpsY = _controlPoint3[1];
	      break;
	  }

	  var _controlPoint4 = controlPoint({
	    current: point,
	    previous: a[i - 1],
	    next: a[i + 1],
	    reverse: true
	  }),
	      cpeX = _controlPoint4[0],
	      cpeY = _controlPoint4[1];

	  return "C " + cpsX + "," + cpsY + " " + cpeX + "," + cpeY + " " + point.x + ", " + point.y;
	};

	var Paths = function Paths(_ref2) {
	  var id = _ref2.id,
	      paths = _ref2.paths;
	  return /*#__PURE__*/react.createElement(react.Fragment, null, paths.map(function (path, index) {
	    return /*#__PURE__*/react.createElement(SvgPath, {
	      key: id + "__" + index,
	      paths: path.paths,
	      id: id + "__" + index,
	      strokeWidth: path.strokeWidth,
	      strokeColor: path.strokeColor,
	      command: bezierCommand
	    });
	  }));
	};

	var loadImage = function loadImage(url) {
	  return new Promise(function (resolve, reject) {
	    var img = new Image();
	    img.addEventListener('load', function () {
	      if (img.width > 0) {
	        resolve(img);
	      }

	      reject('Image not found');
	    });
	    img.addEventListener('error', function (err) {
	      return reject(err);
	    });
	    img.src = url;
	    img.setAttribute('crossorigin', 'anonymous');
	  });
	};

	function getCanvasWithViewBox(canvas) {
	  var _canvas$firstChild;

	  var svgCanvas = (_canvas$firstChild = canvas.firstChild) == null ? void 0 : _canvas$firstChild.cloneNode(true);
	  var width = canvas.offsetWidth;
	  var height = canvas.offsetHeight;
	  svgCanvas.setAttribute('viewBox', "0 0 " + width + " " + height);
	  svgCanvas.setAttribute('width', width.toString());
	  svgCanvas.setAttribute('height', height.toString());
	  return {
	    svgCanvas: svgCanvas,
	    width: width,
	    height: height
	  };
	}

	var Canvas = /*#__PURE__*/react.forwardRef(function (props, ref) {
	  var paths = props.paths,
	      isDrawing = props.isDrawing,
	      onPointerDown = props.onPointerDown,
	      onPointerMove = props.onPointerMove,
	      onPointerUp = props.onPointerUp,
	      _props$id = props.id,
	      id = _props$id === void 0 ? 'react-sketch-canvas' : _props$id,
	      _props$width = props.width,
	      width = _props$width === void 0 ? '100%' : _props$width,
	      _props$height = props.height,
	      height = _props$height === void 0 ? '100%' : _props$height,
	      _props$className = props.className,
	      className = _props$className === void 0 ? 'react-sketch-canvas' : _props$className,
	      _props$canvasColor = props.canvasColor,
	      canvasColor = _props$canvasColor === void 0 ? 'red' : _props$canvasColor,
	      _props$backgroundImag = props.backgroundImage,
	      backgroundImage = _props$backgroundImag === void 0 ? '' : _props$backgroundImag,
	      _props$exportWithBack = props.exportWithBackgroundImage,
	      exportWithBackgroundImage = _props$exportWithBack === void 0 ? false : _props$exportWithBack,
	      _props$preserveBackgr = props.preserveBackgroundImageAspectRatio,
	      preserveBackgroundImageAspectRatio = _props$preserveBackgr === void 0 ? 'none' : _props$preserveBackgr,
	      _props$allowOnlyPoint = props.allowOnlyPointerType,
	      allowOnlyPointerType = _props$allowOnlyPoint === void 0 ? 'all' : _props$allowOnlyPoint,
	      _props$style = props.style,
	      style = _props$style === void 0 ? {
	    border: '0.0625rem solid #9c9c9c',
	    borderRadius: '0.25rem'
	  } : _props$style;
	  var canvasRef = react.useRef(null); // Converts mouse coordinates to relative coordinate based on the absolute position of svg

	  var getCoordinates = function getCoordinates(pointerEvent) {
	    var _canvasRef$current, _window$scrollX, _window$scrollY;

	    var boundingArea = (_canvasRef$current = canvasRef.current) == null ? void 0 : _canvasRef$current.getBoundingClientRect();
	    var scrollLeft = (_window$scrollX = window.scrollX) != null ? _window$scrollX : 0;
	    var scrollTop = (_window$scrollY = window.scrollY) != null ? _window$scrollY : 0;

	    if (!boundingArea) {
	      return {
	        x: 0,
	        y: 0
	      };
	    }

	    var point = {
	      x: pointerEvent.pageX - boundingArea.left - scrollLeft,
	      y: pointerEvent.pageY - boundingArea.top - scrollTop
	    };
	    return point;
	  };
	  /* Mouse Handlers - Mouse down, move and up */


	  var handlePointerDown = function handlePointerDown(event) {
	    // Allow only chosen pointer type
	    if (allowOnlyPointerType !== 'all' && event.pointerType !== allowOnlyPointerType) {
	      return;
	    }

	    if (event.pointerType === 'mouse' && event.button !== 0) return;
	    var point = getCoordinates(event);
	    onPointerDown(point);
	  };

	  var handlePointerMove = function handlePointerMove(event) {
	    if (!isDrawing) return; // Allow only chosen pointer type

	    if (allowOnlyPointerType !== 'all' && event.pointerType !== allowOnlyPointerType) {
	      return;
	    }

	    var point = getCoordinates(event);
	    onPointerMove(point);
	  };

	  var handlePointerUp = function handlePointerUp(event) {
	    if (event.pointerType === 'mouse' && event.button !== 0) return; // Allow only chosen pointer type

	    if (allowOnlyPointerType !== 'all' && event.pointerType !== allowOnlyPointerType) {
	      return;
	    }

	    onPointerUp();
	  };
	  /* Mouse Handlers ends */


	  react.useImperativeHandle(ref, function () {
	    return {
	      exportImage: function exportImage(imageType) {
	        return new Promise( /*#__PURE__*/function () {
	          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
	            var canvas, _getCanvasWithViewBox, svgCanvas, _width, _height, canvasSketch, loadImagePromises, img;

	            return _regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.prev = 0;
	                    canvas = canvasRef.current;

	                    if (canvas) {
	                      _context.next = 4;
	                      break;
	                    }

	                    throw Error('Canvas not rendered yet');

	                  case 4:
	                    _getCanvasWithViewBox = getCanvasWithViewBox(canvas), svgCanvas = _getCanvasWithViewBox.svgCanvas, _width = _getCanvasWithViewBox.width, _height = _getCanvasWithViewBox.height;
	                    canvasSketch = "data:image/svg+xml;base64," + btoa(svgCanvas.outerHTML);
	                    _context.next = 8;
	                    return loadImage(canvasSketch);

	                  case 8:
	                    _context.t0 = _context.sent;
	                    loadImagePromises = [_context.t0];

	                    if (!exportWithBackgroundImage) {
	                      _context.next = 21;
	                      break;
	                    }

	                    _context.prev = 11;
	                    _context.next = 14;
	                    return loadImage(backgroundImage);

	                  case 14:
	                    img = _context.sent;
	                    loadImagePromises.push(img);
	                    _context.next = 21;
	                    break;

	                  case 18:
	                    _context.prev = 18;
	                    _context.t1 = _context["catch"](11);
	                    console.warn('exportWithBackgroundImage props is set without a valid background image URL. This option is ignored');

	                  case 21:
	                    Promise.all(loadImagePromises).then(function (images) {
	                      var renderCanvas = document.createElement('canvas');
	                      renderCanvas.setAttribute('width', _width.toString());
	                      renderCanvas.setAttribute('height', _height.toString());
	                      var context = renderCanvas.getContext('2d');

	                      if (!context) {
	                        throw Error('Canvas not rendered yet');
	                      }

	                      images.reverse().forEach(function (image) {
	                        context.drawImage(image, 0, 0);
	                      });
	                      resolve(renderCanvas.toDataURL("image/" + imageType));
	                    })["catch"](function (e) {
	                      throw e;
	                    });
	                    _context.next = 27;
	                    break;

	                  case 24:
	                    _context.prev = 24;
	                    _context.t2 = _context["catch"](0);
	                    reject(_context.t2);

	                  case 27:
	                  case "end":
	                    return _context.stop();
	                }
	              }
	            }, _callee, null, [[0, 24], [11, 18]]);
	          }));

	          return function (_x, _x2) {
	            return _ref.apply(this, arguments);
	          };
	        }());
	      },
	      exportSvg: function exportSvg() {
	        return new Promise(function (resolve, reject) {
	          try {
	            var _canvasRef$current2;

	            var canvas = (_canvasRef$current2 = canvasRef.current) != null ? _canvasRef$current2 : null;

	            if (canvas !== null) {
	              var _svgCanvas$querySelec, _svgCanvas$querySelec2;

	              var _getCanvasWithViewBox2 = getCanvasWithViewBox(canvas),
	                  svgCanvas = _getCanvasWithViewBox2.svgCanvas;

	              if (exportWithBackgroundImage) {
	                resolve(svgCanvas.outerHTML);
	                return;
	              }

	              (_svgCanvas$querySelec = svgCanvas.querySelector("#" + id + "__background")) == null ? void 0 : _svgCanvas$querySelec.remove();
	              (_svgCanvas$querySelec2 = svgCanvas.querySelector("#" + id + "__canvas-background")) == null ? void 0 : _svgCanvas$querySelec2.setAttribute('fill', canvasColor);
	              resolve(svgCanvas.outerHTML);
	            }

	            reject(new Error('Canvas not loaded'));
	          } catch (e) {
	            reject(e);
	          }
	        });
	      }
	    };
	  });
	  /* Add event listener to Mouse up and Touch up to
	  release drawing even when point goes out of canvas */

	  react.useEffect(function () {
	    document.addEventListener('pointerup', handlePointerUp);
	    return function () {
	      document.removeEventListener('pointerup', handlePointerUp);
	    };
	  }, [handlePointerUp]);
	  var eraserPaths = paths.filter(function (path) {
	    return !path.drawMode;
	  });
	  var currentGroup = 0;
	  var pathGroups = paths.reduce(function (arrayGroup, path) {
	    if (!path.drawMode) {
	      currentGroup += 1;
	      return arrayGroup;
	    }

	    if (arrayGroup[currentGroup] === undefined) {
	      arrayGroup[currentGroup] = [];
	    }

	    arrayGroup[currentGroup].push(path);
	    return arrayGroup;
	  }, [[]]);
	  return /*#__PURE__*/react.createElement("div", {
	    role: "presentation",
	    "aria-label": "react-sketch-canvas",
	    ref: canvasRef,
	    className: className,
	    style: _extends({
	      touchAction: 'none',
	      width: width,
	      height: height
	    }, style),
	    "touch-action": "none",
	    onPointerDown: handlePointerDown,
	    onPointerMove: handlePointerMove,
	    onPointerUp: handlePointerUp
	  }, /*#__PURE__*/react.createElement("svg", {
	    version: "1.1",
	    baseProfile: "full",
	    xmlns: "http://www.w3.org/2000/svg",
	    xmlnsXlink: "http://www.w3.org/1999/xlink",
	    style: {
	      width: '100%',
	      height: '100%'
	    },
	    id: id
	  }, /*#__PURE__*/react.createElement("g", {
	    id: id + "__eraser-stroke-group",
	    display: "none"
	  }, /*#__PURE__*/react.createElement("rect", {
	    id: id + "__mask-background",
	    x: "0",
	    y: "0",
	    width: "100%",
	    height: "100%",
	    fill: "white"
	  }), eraserPaths.map(function (eraserPath, i) {
	    return /*#__PURE__*/react.createElement(SvgPath, {
	      key: id + "__eraser-" + i,
	      id: id + "__eraser-" + i,
	      paths: eraserPath.paths,
	      strokeColor: "#000000",
	      strokeWidth: eraserPath.strokeWidth
	    });
	  })), /*#__PURE__*/react.createElement("defs", null, backgroundImage && /*#__PURE__*/react.createElement("pattern", {
	    id: id + "__background",
	    x: "0",
	    y: "0",
	    width: "100%",
	    height: "100%",
	    patternUnits: "userSpaceOnUse"
	  }, /*#__PURE__*/react.createElement("image", {
	    x: "0",
	    y: "0",
	    width: "100%",
	    height: "100%",
	    xlinkHref: backgroundImage,
	    preserveAspectRatio: preserveBackgroundImageAspectRatio
	  })), eraserPaths.map(function (_, i) {
	    return /*#__PURE__*/react.createElement("mask", {
	      id: id + "__eraser-mask-" + i,
	      key: id + "__eraser-mask-" + i,
	      maskUnits: "userSpaceOnUse"
	    }, /*#__PURE__*/react.createElement("use", {
	      href: "#" + id + "__mask-background"
	    }), Array.from({
	      length: eraserPaths.length - i
	    }, function (_, j) {
	      return j + i;
	    }).map(function (k) {
	      return /*#__PURE__*/react.createElement("use", {
	        key: k.toString(),
	        href: "#" + id + "__eraser-" + k.toString()
	      });
	    }));
	  })), /*#__PURE__*/react.createElement("g", {
	    id: id + "__canvas-background-group"
	  }, /*#__PURE__*/react.createElement("rect", {
	    id: id + "__canvas-background",
	    x: "0",
	    y: "0",
	    width: "100%",
	    height: "100%",
	    fill: backgroundImage ? "url(#" + id + "__background)" : canvasColor
	  })), pathGroups.map(function (pathGroup, i) {
	    return /*#__PURE__*/react.createElement("g", {
	      id: id + "__stroke-group-" + i,
	      key: id + "__stroke-group-" + i,
	      mask: "url(#" + id + "__eraser-mask-" + i + ")"
	    }, /*#__PURE__*/react.createElement(Paths, {
	      id: id,
	      paths: pathGroup
	    }));
	  })));
	});
	var ReactSketchCanvas = /*#__PURE__*/react.forwardRef(function (props, ref) {
	  var _props$id = props.id,
	      id = _props$id === void 0 ? 'react-sketch-canvas' : _props$id,
	      _props$width = props.width,
	      width = _props$width === void 0 ? '100%' : _props$width,
	      _props$height = props.height,
	      height = _props$height === void 0 ? '100%' : _props$height,
	      _props$className = props.className,
	      className = _props$className === void 0 ? '' : _props$className,
	      _props$canvasColor = props.canvasColor,
	      canvasColor = _props$canvasColor === void 0 ? 'white' : _props$canvasColor,
	      _props$strokeColor = props.strokeColor,
	      strokeColor = _props$strokeColor === void 0 ? 'red' : _props$strokeColor,
	      _props$backgroundImag = props.backgroundImage,
	      backgroundImage = _props$backgroundImag === void 0 ? '' : _props$backgroundImag,
	      _props$exportWithBack = props.exportWithBackgroundImage,
	      exportWithBackgroundImage = _props$exportWithBack === void 0 ? false : _props$exportWithBack,
	      _props$preserveBackgr = props.preserveBackgroundImageAspectRatio,
	      preserveBackgroundImageAspectRatio = _props$preserveBackgr === void 0 ? 'none' : _props$preserveBackgr,
	      _props$strokeWidth = props.strokeWidth,
	      strokeWidth = _props$strokeWidth === void 0 ? 4 : _props$strokeWidth,
	      _props$eraserWidth = props.eraserWidth,
	      eraserWidth = _props$eraserWidth === void 0 ? 8 : _props$eraserWidth,
	      _props$allowOnlyPoint = props.allowOnlyPointerType,
	      allowOnlyPointerType = _props$allowOnlyPoint === void 0 ? 'all' : _props$allowOnlyPoint,
	      _props$style = props.style,
	      style = _props$style === void 0 ? {
	    border: '0.0625rem solid #9c9c9c',
	    borderRadius: '0.25rem'
	  } : _props$style,
	      _props$onChange = props.onChange,
	      onChange = _props$onChange === void 0 ? function (_paths) {} : _props$onChange,
	      _props$onStroke = props.onStroke,
	      onStroke = _props$onStroke === void 0 ? function (_path, _isEraser) {} : _props$onStroke,
	      _props$withTimestamp = props.withTimestamp,
	      withTimestamp = _props$withTimestamp === void 0 ? false : _props$withTimestamp;
	  var svgCanvas = /*#__PURE__*/react.createRef();

	  var _React$useState = react.useState(true),
	      drawMode = _React$useState[0],
	      setDrawMode = _React$useState[1];

	  var _React$useState2 = react.useState(false),
	      isDrawing = _React$useState2[0],
	      setIsDrawing = _React$useState2[1];

	  var _React$useState3 = react.useState([]),
	      resetStack = _React$useState3[0],
	      setResetStack = _React$useState3[1];

	  var _React$useState4 = react.useState([]),
	      undoStack = _React$useState4[0],
	      setUndoStack = _React$useState4[1];

	  var _React$useState5 = react.useState([]),
	      currentPaths = _React$useState5[0],
	      setCurrentPaths = _React$useState5[1];

	  var liftStrokeUp = react.useCallback(function () {
	    var _currentPaths$slice$, _currentPaths$slice;

	    var lastStroke = (_currentPaths$slice$ = (_currentPaths$slice = currentPaths.slice(-1)) == null ? void 0 : _currentPaths$slice[0]) != null ? _currentPaths$slice$ : null;

	    if (lastStroke === null) {
	      console.warn('No stroke found!');
	      return;
	    }

	    onStroke(lastStroke, !lastStroke.drawMode);
	  }, [isDrawing]);
	  react.useEffect(function () {
	    liftStrokeUp();
	  }, [isDrawing]);
	  react.useEffect(function () {
	    onChange(currentPaths);
	  }, [currentPaths]);
	  react.useImperativeHandle(ref, function () {
	    return {
	      eraseMode: function eraseMode(erase) {
	        setDrawMode(!erase);
	      },
	      clearCanvas: function clearCanvas() {
	        setResetStack([].concat(currentPaths));
	        setCurrentPaths([]);
	      },
	      undo: function undo() {
	        // If there was a last reset then
	        if (resetStack.length !== 0) {
	          setCurrentPaths([].concat(resetStack));
	          setResetStack([]);
	          return;
	        }

	        setUndoStack(function (undoStack) {
	          return [].concat(undoStack, currentPaths.slice(-1));
	        });
	        setCurrentPaths(function (currentPaths) {
	          return currentPaths.slice(0, -1);
	        });
	      },
	      redo: function redo() {
	        // Nothing to Redo
	        if (undoStack.length === 0) return;
	        setCurrentPaths(function (currentPaths) {
	          return [].concat(currentPaths, undoStack.slice(-1));
	        });
	        setUndoStack(function (undoStack) {
	          return undoStack.slice(0, -1);
	        });
	      },
	      exportImage: function exportImage(imageType) {
	        var _svgCanvas$current;

	        var exportImage = (_svgCanvas$current = svgCanvas.current) == null ? void 0 : _svgCanvas$current.exportImage;

	        if (!exportImage) {
	          throw Error('Export function called before canvas loaded');
	        } else {
	          return exportImage(imageType);
	        }
	      },
	      exportSvg: function exportSvg() {
	        return new Promise(function (resolve, reject) {
	          var _svgCanvas$current2;

	          var exportSvg = (_svgCanvas$current2 = svgCanvas.current) == null ? void 0 : _svgCanvas$current2.exportSvg;

	          if (!exportSvg) {
	            reject(Error('Export function called before canvas loaded'));
	          } else {
	            exportSvg().then(function (data) {
	              resolve(data);
	            })["catch"](function (e) {
	              reject(e);
	            });
	          }
	        });
	      },
	      exportPaths: function exportPaths() {
	        return new Promise(function (resolve, reject) {
	          try {
	            resolve(currentPaths);
	          } catch (e) {
	            reject(e);
	          }
	        });
	      },
	      loadPaths: function loadPaths(paths) {
	        setCurrentPaths(function (currentPaths) {
	          return [].concat(currentPaths, paths);
	        });
	      },
	      getSketchingTime: function getSketchingTime() {
	        return new Promise(function (resolve, reject) {
	          if (!withTimestamp) {
	            reject(new Error("Set 'withTimestamp' prop to get sketching time"));
	          }

	          try {
	            var sketchingTime = currentPaths.reduce(function (totalSketchingTime, path) {
	              var _path$startTimestamp, _path$endTimestamp;

	              var startTimestamp = (_path$startTimestamp = path.startTimestamp) != null ? _path$startTimestamp : 0;
	              var endTimestamp = (_path$endTimestamp = path.endTimestamp) != null ? _path$endTimestamp : 0;
	              return totalSketchingTime + (endTimestamp - startTimestamp);
	            }, 0);
	            resolve(sketchingTime);
	          } catch (e) {
	            reject(e);
	          }
	        });
	      },
	      resetCanvas: function resetCanvas() {
	        setResetStack([]);
	        setUndoStack([]);
	        setCurrentPaths([]);
	      }
	    };
	  });

	  var handlePointerDown = function handlePointerDown(point) {
	    setIsDrawing(true);
	    setUndoStack([]);
	    var stroke = {
	      drawMode: drawMode,
	      strokeColor: drawMode ? strokeColor : '#000000',
	      strokeWidth: drawMode ? strokeWidth : eraserWidth,
	      paths: [point]
	    };

	    if (withTimestamp) {
	      stroke = _extends({}, stroke, {
	        startTimestamp: Date.now(),
	        endTimestamp: 0
	      });
	    }

	    setCurrentPaths(function (currentPaths) {
	      return [].concat(currentPaths, [stroke]);
	    });
	  };

	  var handlePointerMove = function handlePointerMove(point) {
	    if (!isDrawing) return;
	    var currentStroke = currentPaths.slice(-1)[0];

	    var updatedStroke = _extends({}, currentStroke, {
	      paths: [].concat(currentStroke.paths, [point])
	    });

	    setCurrentPaths(function (currentPaths) {
	      return [].concat(currentPaths.slice(0, -1), [updatedStroke]);
	    });
	  };

	  var handlePointerUp = function handlePointerUp() {
	    var _currentPaths$slice$2, _currentPaths$slice2;

	    if (!isDrawing) {
	      return;
	    }

	    setIsDrawing(false);

	    if (!withTimestamp) {
	      return;
	    }

	    var currentStroke = (_currentPaths$slice$2 = (_currentPaths$slice2 = currentPaths.slice(-1)) == null ? void 0 : _currentPaths$slice2[0]) != null ? _currentPaths$slice$2 : null;

	    if (currentStroke === null) {
	      return;
	    }

	    var updatedStroke = _extends({}, currentStroke, {
	      endTimestamp: Date.now()
	    });

	    setCurrentPaths(function (currentPaths) {
	      return [].concat(currentPaths.slice(0, -1), [updatedStroke]);
	    });
	  };

	  return /*#__PURE__*/react.createElement(Canvas, {
	    ref: svgCanvas,
	    id: id,
	    width: width,
	    height: height,
	    className: className,
	    canvasColor: canvasColor,
	    backgroundImage: backgroundImage,
	    exportWithBackgroundImage: exportWithBackgroundImage,
	    preserveBackgroundImageAspectRatio: preserveBackgroundImageAspectRatio,
	    allowOnlyPointerType: allowOnlyPointerType,
	    style: style,
	    paths: currentPaths,
	    isDrawing: isDrawing,
	    onPointerDown: handlePointerDown,
	    onPointerMove: handlePointerMove,
	    onPointerUp: handlePointerUp
	  });
	});

	const ScratchPad = () => {
	  const [color, setColor] = react.useState('Black');
	  const canvasRef = /*#__PURE__*/react.createRef();

	  const styles = {
	    border: '0.0625rem solid #1976d2',
	    borderRadius: '1px'
	  };

	  const undoHandler = () => {
	    var _canvasRef$current;

	    const undo = (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.undo;

	    if (undo) {
	      undo();
	    }
	  };

	  const clearHandler = () => {
	    var _canvasRef$current2;

	    const clearCanvas = (_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.clearCanvas;

	    if (clearCanvas) {
	      clearCanvas();
	    }
	  };

	  return /*#__PURE__*/jsxRuntime.jsx("g", {
	    children: /*#__PURE__*/jsxRuntime.jsxs("div", {
	      className: "canvasContainer",
	      children: [/*#__PURE__*/jsxRuntime.jsxs(Box$1, {
	        sx: {
	          display: 'flex',
	          justifyContent: 'left',
	          maxWidth: '400'
	        },
	        children: [/*#__PURE__*/jsxRuntime.jsxs(ButtonGroup$1, {
	          variant: "contained",
	          "aria-label": "Scratchpad controls",
	          children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onClick: undoHandler,
	            children: "undo"
	          }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onClick: clearHandler,
	            children: "clear"
	          })]
	        }), /*#__PURE__*/jsxRuntime.jsx("div", {
	          className: "Pen Black",
	          onClick: () => setColor('Black')
	        }), /*#__PURE__*/jsxRuntime.jsx("div", {
	          className: "Pen Red",
	          onClick: () => setColor('red')
	        }), /*#__PURE__*/jsxRuntime.jsx("div", {
	          className: "Pen Green",
	          onClick: () => setColor('green')
	        }), /*#__PURE__*/jsxRuntime.jsx("div", {
	          className: "Pen Blue ",
	          onClick: () => setColor('blue')
	        })]
	      }), /*#__PURE__*/jsxRuntime.jsx(ReactSketchCanvas, {
	        ref: canvasRef,
	        style: styles,
	        width: "1000",
	        height: "670",
	        strokeWidth: 4,
	        strokeColor: color
	      })]
	    })
	  });
	};

	function formControlState({
	  props,
	  states,
	  muiFormControl
	}) {
	  return states.reduce((acc, state) => {
	    acc[state] = props[state];

	    if (muiFormControl) {
	      if (typeof props[state] === 'undefined') {
	        acc[state] = muiFormControl[state];
	      }
	    }

	    return acc;
	  }, {});
	}

	/**
	 * @ignore - internal component.
	 */

	const FormControlContext = /*#__PURE__*/react.createContext();

	var FormControlContext$1 = FormControlContext;

	function useFormControl() {
	  return react.useContext(FormControlContext$1);
	}

	function getFormLabelUtilityClasses(slot) {
	  return generateUtilityClass('MuiFormLabel', slot);
	}
	const formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
	var formLabelClasses$1 = formLabelClasses;

	const _excluded$q = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];

	const useUtilityClasses$k = ownerState => {
	  const {
	    classes,
	    color,
	    focused,
	    disabled,
	    error,
	    filled,
	    required
	  } = ownerState;
	  const slots = {
	    root: ['root', "color".concat(capitalize(color)), disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
	    asterisk: ['asterisk', error && 'error']
	  };
	  return composeClasses(slots, getFormLabelUtilityClasses, classes);
	};

	const FormLabelRoot = styled$1('label', {
	  name: 'MuiFormLabel',
	  slot: 'Root',
	  overridesResolver: ({
	    ownerState
	  }, styles) => {
	    return _extends$2({}, styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled);
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  color: theme.palette.text.secondary
	}, theme.typography.body1, {
	  lineHeight: '1.4375em',
	  padding: 0,
	  position: 'relative',
	  ["&.".concat(formLabelClasses$1.focused)]: {
	    color: theme.palette[ownerState.color].main
	  },
	  ["&.".concat(formLabelClasses$1.disabled)]: {
	    color: theme.palette.text.disabled
	  },
	  ["&.".concat(formLabelClasses$1.error)]: {
	    color: theme.palette.error.main
	  }
	}));
	const AsteriskComponent = styled$1('span', {
	  name: 'MuiFormLabel',
	  slot: 'Asterisk',
	  overridesResolver: (props, styles) => styles.asterisk
	})(({
	  theme
	}) => ({
	  ["&.".concat(formLabelClasses$1.error)]: {
	    color: theme.palette.error.main
	  }
	}));
	const FormLabel = /*#__PURE__*/react.forwardRef(function FormLabel(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiFormLabel'
	  });

	  const {
	    children,
	    className,
	    component = 'label'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$q);

	  const muiFormControl = useFormControl();
	  const fcs = formControlState({
	    props,
	    muiFormControl,
	    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
	  });

	  const ownerState = _extends$2({}, props, {
	    color: fcs.color || 'primary',
	    component,
	    disabled: fcs.disabled,
	    error: fcs.error,
	    filled: fcs.filled,
	    focused: fcs.focused,
	    required: fcs.required
	  });

	  const classes = useUtilityClasses$k(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(FormLabelRoot, _extends$2({
	    as: component,
	    ownerState: ownerState,
	    className: clsx(classes.root, className),
	    ref: ref
	  }, other, {
	    children: [children, fcs.required && /*#__PURE__*/jsxRuntime.jsxs(AsteriskComponent, {
	      ownerState: ownerState,
	      "aria-hidden": true,
	      className: classes.asterisk,
	      children: ["\u2009", '*']
	    })]
	  }));
	});
	var FormLabel$1 = FormLabel;

	function getInputLabelUtilityClasses(slot) {
	  return generateUtilityClass('MuiInputLabel', slot);
	}
	generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);

	const _excluded$p = ["disableAnimation", "margin", "shrink", "variant"];

	const useUtilityClasses$j = ownerState => {
	  const {
	    classes,
	    formControl,
	    size,
	    shrink,
	    disableAnimation,
	    variant,
	    required
	  } = ownerState;
	  const slots = {
	    root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size === 'small' && 'sizeSmall', variant],
	    asterisk: [required && 'asterisk']
	  };
	  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const InputLabelRoot = styled$1(FormLabel$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiInputLabel',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [{
	      ["& .".concat(formLabelClasses$1.asterisk)]: styles.asterisk
	    }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, styles[ownerState.variant]];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  display: 'block',
	  transformOrigin: 'top left',
	  whiteSpace: 'nowrap',
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  maxWidth: '100%'
	}, ownerState.formControl && {
	  position: 'absolute',
	  left: 0,
	  top: 0,
	  // slight alteration to spec spacing to match visual spec result
	  transform: 'translate(0, 20px) scale(1)'
	}, ownerState.size === 'small' && {
	  // Compensation for the `Input.inputSizeSmall` style.
	  transform: 'translate(0, 17px) scale(1)'
	}, ownerState.shrink && {
	  transform: 'translate(0, -1.5px) scale(0.75)',
	  transformOrigin: 'top left',
	  maxWidth: '133%'
	}, !ownerState.disableAnimation && {
	  transition: theme.transitions.create(['color', 'transform', 'max-width'], {
	    duration: theme.transitions.duration.shorter,
	    easing: theme.transitions.easing.easeOut
	  })
	}, ownerState.variant === 'filled' && _extends$2({
	  // Chrome's autofill feature gives the input field a yellow background.
	  // Since the input field is behind the label in the HTML tree,
	  // the input field is drawn last and hides the label with an opaque background color.
	  // zIndex: 1 will raise the label above opaque background-colors of input.
	  zIndex: 1,
	  pointerEvents: 'none',
	  transform: 'translate(12px, 16px) scale(1)',
	  maxWidth: 'calc(100% - 24px)'
	}, ownerState.size === 'small' && {
	  transform: 'translate(12px, 13px) scale(1)'
	}, ownerState.shrink && _extends$2({
	  userSelect: 'none',
	  pointerEvents: 'auto',
	  transform: 'translate(12px, 7px) scale(0.75)',
	  maxWidth: 'calc(133% - 24px)'
	}, ownerState.size === 'small' && {
	  transform: 'translate(12px, 4px) scale(0.75)'
	})), ownerState.variant === 'outlined' && _extends$2({
	  // see comment above on filled.zIndex
	  zIndex: 1,
	  pointerEvents: 'none',
	  transform: 'translate(14px, 16px) scale(1)',
	  maxWidth: 'calc(100% - 24px)'
	}, ownerState.size === 'small' && {
	  transform: 'translate(14px, 9px) scale(1)'
	}, ownerState.shrink && {
	  userSelect: 'none',
	  pointerEvents: 'auto',
	  maxWidth: 'calc(133% - 24px)',
	  transform: 'translate(14px, -9px) scale(0.75)'
	})));
	const InputLabel = /*#__PURE__*/react.forwardRef(function InputLabel(inProps, ref) {
	  const props = useThemeProps({
	    name: 'MuiInputLabel',
	    props: inProps
	  });

	  const {
	    disableAnimation = false,
	    shrink: shrinkProp
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$p);

	  const muiFormControl = useFormControl();
	  let shrink = shrinkProp;

	  if (typeof shrink === 'undefined' && muiFormControl) {
	    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
	  }

	  const fcs = formControlState({
	    props,
	    muiFormControl,
	    states: ['size', 'variant', 'required']
	  });

	  const ownerState = _extends$2({}, props, {
	    disableAnimation,
	    formControl: muiFormControl,
	    shrink,
	    size: fcs.size,
	    variant: fcs.variant,
	    required: fcs.required
	  });

	  const classes = useUtilityClasses$j(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(InputLabelRoot, _extends$2({
	    "data-shrink": shrink,
	    ownerState: ownerState,
	    ref: ref
	  }, other, {
	    classes: classes
	  }));
	});
	var InputLabel$1 = InputLabel;

	/**
	 * @ignore - internal component.
	 */

	const ListContext = /*#__PURE__*/react.createContext({});

	var ListContext$1 = ListContext;

	function getDividerUtilityClass(slot) {
	  return generateUtilityClass('MuiDivider', slot);
	}
	const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
	var dividerClasses$1 = dividerClasses;

	const _excluded$o = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];

	const useUtilityClasses$i = ownerState => {
	  const {
	    absolute,
	    children,
	    classes,
	    flexItem,
	    light,
	    orientation,
	    textAlign,
	    variant
	  } = ownerState;
	  const slots = {
	    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
	    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
	  };
	  return composeClasses(slots, getDividerUtilityClass, classes);
	};

	const DividerRoot = styled$1('div', {
	  name: 'MuiDivider',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  margin: 0,
	  // Reset browser default style.
	  flexShrink: 0,
	  borderWidth: 0,
	  borderStyle: 'solid',
	  borderColor: theme.palette.divider,
	  borderBottomWidth: 'thin'
	}, ownerState.absolute && {
	  position: 'absolute',
	  bottom: 0,
	  left: 0,
	  width: '100%'
	}, ownerState.light && {
	  borderColor: alpha(theme.palette.divider, 0.08)
	}, ownerState.variant === 'inset' && {
	  marginLeft: 72
	}, ownerState.variant === 'middle' && ownerState.orientation === 'horizontal' && {
	  marginLeft: theme.spacing(2),
	  marginRight: theme.spacing(2)
	}, ownerState.variant === 'middle' && ownerState.orientation === 'vertical' && {
	  marginTop: theme.spacing(1),
	  marginBottom: theme.spacing(1)
	}, ownerState.orientation === 'vertical' && {
	  height: '100%',
	  borderBottomWidth: 0,
	  borderRightWidth: 'thin'
	}, ownerState.flexItem && {
	  alignSelf: 'stretch',
	  height: 'auto'
	}), ({
	  theme,
	  ownerState
	}) => _extends$2({}, ownerState.children && {
	  display: 'flex',
	  whiteSpace: 'nowrap',
	  textAlign: 'center',
	  border: 0,
	  '&::before, &::after': {
	    position: 'relative',
	    width: '100%',
	    borderTop: "thin solid ".concat(theme.palette.divider),
	    top: '50%',
	    content: '""',
	    transform: 'translateY(50%)'
	  }
	}), ({
	  theme,
	  ownerState
	}) => _extends$2({}, ownerState.children && ownerState.orientation === 'vertical' && {
	  flexDirection: 'column',
	  '&::before, &::after': {
	    height: '100%',
	    top: '0%',
	    left: '50%',
	    borderTop: 0,
	    borderLeft: "thin solid ".concat(theme.palette.divider),
	    transform: 'translateX(0%)'
	  }
	}), ({
	  ownerState
	}) => _extends$2({}, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && {
	  '&::before': {
	    width: '90%'
	  },
	  '&::after': {
	    width: '10%'
	  }
	}, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && {
	  '&::before': {
	    width: '10%'
	  },
	  '&::after': {
	    width: '90%'
	  }
	}));
	const DividerWrapper = styled$1('span', {
	  name: 'MuiDivider',
	  slot: 'Wrapper',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  display: 'inline-block',
	  paddingLeft: "calc(".concat(theme.spacing(1), " * 1.2)"),
	  paddingRight: "calc(".concat(theme.spacing(1), " * 1.2)")
	}, ownerState.orientation === 'vertical' && {
	  paddingTop: "calc(".concat(theme.spacing(1), " * 1.2)"),
	  paddingBottom: "calc(".concat(theme.spacing(1), " * 1.2)")
	}));
	const Divider = /*#__PURE__*/react.forwardRef(function Divider(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiDivider'
	  });

	  const {
	    absolute = false,
	    children,
	    className,
	    component = children ? 'div' : 'hr',
	    flexItem = false,
	    light = false,
	    orientation = 'horizontal',
	    role = component !== 'hr' ? 'separator' : undefined,
	    textAlign = 'center',
	    variant = 'fullWidth'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$o);

	  const ownerState = _extends$2({}, props, {
	    absolute,
	    component,
	    flexItem,
	    light,
	    orientation,
	    role,
	    textAlign,
	    variant
	  });

	  const classes = useUtilityClasses$i(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(DividerRoot, _extends$2({
	    as: component,
	    className: clsx(classes.root, className),
	    role: role,
	    ref: ref,
	    ownerState: ownerState
	  }, other, {
	    children: children ? /*#__PURE__*/jsxRuntime.jsx(DividerWrapper, {
	      className: classes.wrapper,
	      ownerState: ownerState,
	      children: children
	    }) : null
	  }));
	});
	var Divider$1 = Divider;

	const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
	var listItemIconClasses$1 = listItemIconClasses;

	const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
	var listItemTextClasses$1 = listItemTextClasses;

	function getMenuItemUtilityClass(slot) {
	  return generateUtilityClass('MuiMenuItem', slot);
	}
	const menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
	var menuItemClasses$1 = menuItemClasses;

	const _excluded$n = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"];
	const overridesResolver = (props, styles) => {
	  const {
	    ownerState
	  } = props;
	  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
	};

	const useUtilityClasses$h = ownerState => {
	  const {
	    disabled,
	    dense,
	    divider,
	    disableGutters,
	    selected,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
	  };
	  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const MenuItemRoot = styled$1(ButtonBase$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiMenuItem',
	  slot: 'Root',
	  overridesResolver
	})(({
	  theme,
	  ownerState
	}) => _extends$2({}, theme.typography.body1, {
	  display: 'flex',
	  justifyContent: 'flex-start',
	  alignItems: 'center',
	  position: 'relative',
	  textDecoration: 'none',
	  minHeight: 48,
	  paddingTop: 6,
	  paddingBottom: 6,
	  boxSizing: 'border-box',
	  whiteSpace: 'nowrap'
	}, !ownerState.disableGutters && {
	  paddingLeft: 16,
	  paddingRight: 16
	}, ownerState.divider && {
	  borderBottom: "1px solid ".concat(theme.palette.divider),
	  backgroundClip: 'padding-box'
	}, {
	  '&:hover': {
	    textDecoration: 'none',
	    backgroundColor: theme.palette.action.hover,
	    // Reset on touch devices, it doesn't add specificity
	    '@media (hover: none)': {
	      backgroundColor: 'transparent'
	    }
	  },
	  ["&.".concat(menuItemClasses$1.selected)]: {
	    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
	    ["&.".concat(menuItemClasses$1.focusVisible)]: {
	      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
	    }
	  },
	  ["&.".concat(menuItemClasses$1.selected, ":hover")]: {
	    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
	    // Reset on touch devices, it doesn't add specificity
	    '@media (hover: none)': {
	      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
	    }
	  },
	  ["&.".concat(menuItemClasses$1.focusVisible)]: {
	    backgroundColor: theme.palette.action.focus
	  },
	  ["&.".concat(menuItemClasses$1.disabled)]: {
	    opacity: theme.palette.action.disabledOpacity
	  },
	  ["& + .".concat(dividerClasses$1.root)]: {
	    marginTop: theme.spacing(1),
	    marginBottom: theme.spacing(1)
	  },
	  ["& + .".concat(dividerClasses$1.inset)]: {
	    marginLeft: 52
	  },
	  ["& .".concat(listItemTextClasses$1.root)]: {
	    marginTop: 0,
	    marginBottom: 0
	  },
	  ["& .".concat(listItemTextClasses$1.inset)]: {
	    paddingLeft: 36
	  },
	  ["& .".concat(listItemIconClasses$1.root)]: {
	    minWidth: 36
	  }
	}, !ownerState.dense && {
	  [theme.breakpoints.up('sm')]: {
	    minHeight: 'auto'
	  }
	}, ownerState.dense && _extends$2({
	  minHeight: 32,
	  // https://material.io/components/menus#specs > Dense
	  paddingTop: 4,
	  paddingBottom: 4
	}, theme.typography.body2, {
	  ["& .".concat(listItemIconClasses$1.root, " svg")]: {
	    fontSize: '1.25rem'
	  }
	})));
	const MenuItem = /*#__PURE__*/react.forwardRef(function MenuItem(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiMenuItem'
	  });

	  const {
	    autoFocus = false,
	    component = 'li',
	    dense = false,
	    divider = false,
	    disableGutters = false,
	    focusVisibleClassName,
	    role = 'menuitem',
	    tabIndex: tabIndexProp
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$n);

	  const context = react.useContext(ListContext$1);
	  const childContext = {
	    dense: dense || context.dense || false,
	    disableGutters
	  };
	  const menuItemRef = react.useRef(null);
	  useEnhancedEffect$1(() => {
	    if (autoFocus) {
	      if (menuItemRef.current) {
	        menuItemRef.current.focus();
	      }
	    }
	  }, [autoFocus]);

	  const ownerState = _extends$2({}, props, {
	    dense: childContext.dense,
	    divider,
	    disableGutters
	  });

	  const classes = useUtilityClasses$h(props);
	  const handleRef = useForkRef(menuItemRef, ref);
	  let tabIndex;

	  if (!props.disabled) {
	    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
	  }

	  return /*#__PURE__*/jsxRuntime.jsx(ListContext$1.Provider, {
	    value: childContext,
	    children: /*#__PURE__*/jsxRuntime.jsx(MenuItemRoot, _extends$2({
	      ref: handleRef,
	      role: role,
	      tabIndex: tabIndex,
	      component: component,
	      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName)
	    }, other, {
	      ownerState: ownerState,
	      classes: classes
	    }))
	  });
	});
	var MenuItem$1 = MenuItem;

	// Supports determination of isControlled().
	// Controlled input accepts its current value as a prop.
	//
	// @see https://facebook.github.io/react/docs/forms.html#controlled-components
	// @param value
	// @returns {boolean} true if string (including '') or number (including zero)
	function hasValue(value) {
	  return value != null && !(Array.isArray(value) && value.length === 0);
	} // Determine if field is empty or filled.
	// Response determines if label is presented above field or as placeholder.
	//
	// @param obj
	// @param SSR
	// @returns {boolean} False when not present or empty string.
	//                    True when any number or string with length.

	function isFilled(obj, SSR = false) {
	  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
	} // Determine if an Input is adorned on start.
	// It's corresponding to the left with LTR.
	//
	// @param obj
	// @returns {boolean} False when no adornments.
	//                    True when adorned at the start.

	function isAdornedStart(obj) {
	  return obj.startAdornment;
	}

	function getFormControlUtilityClasses(slot) {
	  return generateUtilityClass('MuiFormControl', slot);
	}
	generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);

	const _excluded$m = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];

	const useUtilityClasses$g = ownerState => {
	  const {
	    classes,
	    margin,
	    fullWidth
	  } = ownerState;
	  const slots = {
	    root: ['root', margin !== 'none' && "margin".concat(capitalize(margin)), fullWidth && 'fullWidth']
	  };
	  return composeClasses(slots, getFormControlUtilityClasses, classes);
	};

	const FormControlRoot = styled$1('div', {
	  name: 'MuiFormControl',
	  slot: 'Root',
	  overridesResolver: ({
	    ownerState
	  }, styles) => {
	    return _extends$2({}, styles.root, styles["margin".concat(capitalize(ownerState.margin))], ownerState.fullWidth && styles.fullWidth);
	  }
	})(({
	  ownerState
	}) => _extends$2({
	  display: 'inline-flex',
	  flexDirection: 'column',
	  position: 'relative',
	  // Reset fieldset default style.
	  minWidth: 0,
	  padding: 0,
	  margin: 0,
	  border: 0,
	  verticalAlign: 'top'
	}, ownerState.margin === 'normal' && {
	  marginTop: 16,
	  marginBottom: 8
	}, ownerState.margin === 'dense' && {
	  marginTop: 8,
	  marginBottom: 4
	}, ownerState.fullWidth && {
	  width: '100%'
	}));
	/**
	 * Provides context such as filled/focused/error/required for form inputs.
	 * Relying on the context provides high flexibility and ensures that the state always stays
	 * consistent across the children of the `FormControl`.
	 * This context is used by the following components:
	 *
	 *  - FormLabel
	 *  - FormHelperText
	 *  - Input
	 *  - InputLabel
	 *
	 * You can find one composition example below and more going to [the demos](/material-ui/react-text-field/#components).
	 *
	 * ```jsx
	 * <FormControl>
	 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
	 *   <Input id="my-input" aria-describedby="my-helper-text" />
	 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
	 * </FormControl>
	 * ```
	 *
	 * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
	 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
	 */

	const FormControl = /*#__PURE__*/react.forwardRef(function FormControl(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiFormControl'
	  });

	  const {
	    children,
	    className,
	    color = 'primary',
	    component = 'div',
	    disabled = false,
	    error = false,
	    focused: visuallyFocused,
	    fullWidth = false,
	    hiddenLabel = false,
	    margin = 'none',
	    required = false,
	    size = 'medium',
	    variant = 'outlined'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$m);

	  const ownerState = _extends$2({}, props, {
	    color,
	    component,
	    disabled,
	    error,
	    fullWidth,
	    hiddenLabel,
	    margin,
	    required,
	    size,
	    variant
	  });

	  const classes = useUtilityClasses$g(ownerState);
	  const [adornedStart, setAdornedStart] = react.useState(() => {
	    // We need to iterate through the children and find the Input in order
	    // to fully support server-side rendering.
	    let initialAdornedStart = false;

	    if (children) {
	      react.Children.forEach(children, child => {
	        if (!isMuiElement(child, ['Input', 'Select'])) {
	          return;
	        }

	        const input = isMuiElement(child, ['Select']) ? child.props.input : child;

	        if (input && isAdornedStart(input.props)) {
	          initialAdornedStart = true;
	        }
	      });
	    }

	    return initialAdornedStart;
	  });
	  const [filled, setFilled] = react.useState(() => {
	    // We need to iterate through the children and find the Input in order
	    // to fully support server-side rendering.
	    let initialFilled = false;

	    if (children) {
	      react.Children.forEach(children, child => {
	        if (!isMuiElement(child, ['Input', 'Select'])) {
	          return;
	        }

	        if (isFilled(child.props, true)) {
	          initialFilled = true;
	        }
	      });
	    }

	    return initialFilled;
	  });
	  const [focusedState, setFocused] = react.useState(false);

	  if (disabled && focusedState) {
	    setFocused(false);
	  }

	  const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
	  let registerEffect;

	  const onFilled = react.useCallback(() => {
	    setFilled(true);
	  }, []);
	  const onEmpty = react.useCallback(() => {
	    setFilled(false);
	  }, []);
	  const childContext = {
	    adornedStart,
	    setAdornedStart,
	    color,
	    disabled,
	    error,
	    filled,
	    focused,
	    fullWidth,
	    hiddenLabel,
	    size,
	    onBlur: () => {
	      setFocused(false);
	    },
	    onEmpty,
	    onFilled,
	    onFocus: () => {
	      setFocused(true);
	    },
	    registerEffect,
	    required,
	    variant
	  };
	  return /*#__PURE__*/jsxRuntime.jsx(FormControlContext$1.Provider, {
	    value: childContext,
	    children: /*#__PURE__*/jsxRuntime.jsx(FormControlRoot, _extends$2({
	      as: component,
	      ownerState: ownerState,
	      className: clsx(classes.root, className),
	      ref: ref
	    }, other, {
	      children: children
	    }))
	  });
	});
	var FormControl$1 = FormControl;

	function getListUtilityClass(slot) {
	  return generateUtilityClass('MuiList', slot);
	}
	generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);

	const _excluded$l = ["children", "className", "component", "dense", "disablePadding", "subheader"];

	const useUtilityClasses$f = ownerState => {
	  const {
	    classes,
	    disablePadding,
	    dense,
	    subheader
	  } = ownerState;
	  const slots = {
	    root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
	  };
	  return composeClasses(slots, getListUtilityClass, classes);
	};

	const ListRoot = styled$1('ul', {
	  name: 'MuiList',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
	  }
	})(({
	  ownerState
	}) => _extends$2({
	  listStyle: 'none',
	  margin: 0,
	  padding: 0,
	  position: 'relative'
	}, !ownerState.disablePadding && {
	  paddingTop: 8,
	  paddingBottom: 8
	}, ownerState.subheader && {
	  paddingTop: 0
	}));
	const List = /*#__PURE__*/react.forwardRef(function List(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiList'
	  });

	  const {
	    children,
	    className,
	    component = 'ul',
	    dense = false,
	    disablePadding = false,
	    subheader
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$l);

	  const context = react.useMemo(() => ({
	    dense
	  }), [dense]);

	  const ownerState = _extends$2({}, props, {
	    component,
	    dense,
	    disablePadding
	  });

	  const classes = useUtilityClasses$f(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(ListContext$1.Provider, {
	    value: context,
	    children: /*#__PURE__*/jsxRuntime.jsxs(ListRoot, _extends$2({
	      as: component,
	      className: clsx(classes.root, className),
	      ref: ref,
	      ownerState: ownerState
	    }, other, {
	      children: [subheader, children]
	    }))
	  });
	});
	var List$1 = List;

	const _excluded$k = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

	function nextItem(list, item, disableListWrap) {
	  if (list === item) {
	    return list.firstChild;
	  }

	  if (item && item.nextElementSibling) {
	    return item.nextElementSibling;
	  }

	  return disableListWrap ? null : list.firstChild;
	}

	function previousItem(list, item, disableListWrap) {
	  if (list === item) {
	    return disableListWrap ? list.firstChild : list.lastChild;
	  }

	  if (item && item.previousElementSibling) {
	    return item.previousElementSibling;
	  }

	  return disableListWrap ? null : list.lastChild;
	}

	function textCriteriaMatches(nextFocus, textCriteria) {
	  if (textCriteria === undefined) {
	    return true;
	  }

	  let text = nextFocus.innerText;

	  if (text === undefined) {
	    // jsdom doesn't support innerText
	    text = nextFocus.textContent;
	  }

	  text = text.trim().toLowerCase();

	  if (text.length === 0) {
	    return false;
	  }

	  if (textCriteria.repeating) {
	    return text[0] === textCriteria.keys[0];
	  }

	  return text.indexOf(textCriteria.keys.join('')) === 0;
	}

	function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
	  let wrappedOnce = false;
	  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

	  while (nextFocus) {
	    // Prevent infinite loop.
	    if (nextFocus === list.firstChild) {
	      if (wrappedOnce) {
	        return false;
	      }

	      wrappedOnce = true;
	    } // Same logic as useAutocomplete.js


	    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

	    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
	      // Move to the next element.
	      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
	    } else {
	      nextFocus.focus();
	      return true;
	    }
	  }

	  return false;
	}
	/**
	 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
	 * It's exposed to help customization of the [`Menu`](/material-ui/api/menu/) component if you
	 * use it separately you need to move focus into the component manually. Once
	 * the focus is placed inside the component it is fully keyboard accessible.
	 */


	const MenuList = /*#__PURE__*/react.forwardRef(function MenuList(props, ref) {
	  const {
	    // private
	    // eslint-disable-next-line react/prop-types
	    actions,
	    autoFocus = false,
	    autoFocusItem = false,
	    children,
	    className,
	    disabledItemsFocusable = false,
	    disableListWrap = false,
	    onKeyDown,
	    variant = 'selectedMenu'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$k);

	  const listRef = react.useRef(null);
	  const textCriteriaRef = react.useRef({
	    keys: [],
	    repeating: true,
	    previousKeyMatched: true,
	    lastTime: null
	  });
	  useEnhancedEffect$1(() => {
	    if (autoFocus) {
	      listRef.current.focus();
	    }
	  }, [autoFocus]);
	  react.useImperativeHandle(actions, () => ({
	    adjustStyleForScrollbar: (containerElement, theme) => {
	      // Let's ignore that piece of logic if users are already overriding the width
	      // of the menu.
	      const noExplicitWidth = !listRef.current.style.width;

	      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
	        const scrollbarSize = "".concat(getScrollbarSize(ownerDocument(containerElement)), "px");
	        listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
	        listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
	      }

	      return listRef.current;
	    }
	  }), []);

	  const handleKeyDown = event => {
	    const list = listRef.current;
	    const key = event.key;
	    /**
	     * @type {Element} - will always be defined since we are in a keydown handler
	     * attached to an element. A keydown event is either dispatched to the activeElement
	     * or document.body or document.documentElement. Only the first case will
	     * trigger this specific handler.
	     */

	    const currentFocus = ownerDocument(list).activeElement;

	    if (key === 'ArrowDown') {
	      // Prevent scroll of the page
	      event.preventDefault();
	      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
	    } else if (key === 'ArrowUp') {
	      event.preventDefault();
	      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
	    } else if (key === 'Home') {
	      event.preventDefault();
	      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
	    } else if (key === 'End') {
	      event.preventDefault();
	      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
	    } else if (key.length === 1) {
	      const criteria = textCriteriaRef.current;
	      const lowerKey = key.toLowerCase();
	      const currTime = performance.now();

	      if (criteria.keys.length > 0) {
	        // Reset
	        if (currTime - criteria.lastTime > 500) {
	          criteria.keys = [];
	          criteria.repeating = true;
	          criteria.previousKeyMatched = true;
	        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
	          criteria.repeating = false;
	        }
	      }

	      criteria.lastTime = currTime;
	      criteria.keys.push(lowerKey);
	      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

	      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
	        event.preventDefault();
	      } else {
	        criteria.previousKeyMatched = false;
	      }
	    }

	    if (onKeyDown) {
	      onKeyDown(event);
	    }
	  };

	  const handleRef = useForkRef(listRef, ref);
	  /**
	   * the index of the item should receive focus
	   * in a `variant="selectedMenu"` it's the first `selected` item
	   * otherwise it's the very first item.
	   */

	  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
	  // to check if there is a `selected` item. We're looking for the last `selected`
	  // item and use the first valid item as a fallback

	  react.Children.forEach(children, (child, index) => {
	    if (! /*#__PURE__*/react.isValidElement(child)) {
	      return;
	    }

	    if (!child.props.disabled) {
	      if (variant === 'selectedMenu' && child.props.selected) {
	        activeItemIndex = index;
	      } else if (activeItemIndex === -1) {
	        activeItemIndex = index;
	      }
	    }
	  });
	  const items = react.Children.map(children, (child, index) => {
	    if (index === activeItemIndex) {
	      const newChildProps = {};

	      if (autoFocusItem) {
	        newChildProps.autoFocus = true;
	      }

	      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
	        newChildProps.tabIndex = 0;
	      }

	      return /*#__PURE__*/react.cloneElement(child, newChildProps);
	    }

	    return child;
	  });
	  return /*#__PURE__*/jsxRuntime.jsx(List$1, _extends$2({
	    role: "menu",
	    ref: handleRef,
	    className: className,
	    onKeyDown: handleKeyDown,
	    tabIndex: autoFocus ? 0 : -1
	  }, other, {
	    children: items
	  }));
	});
	var MenuList$1 = MenuList;

	function getPaperUtilityClass(slot) {
	  return generateUtilityClass('MuiPaper', slot);
	}
	generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

	const _excluded$j = ["className", "component", "elevation", "square", "variant"];

	const getOverlayAlpha = elevation => {
	  let alphaValue;

	  if (elevation < 1) {
	    alphaValue = 5.11916 * elevation ** 2;
	  } else {
	    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
	  }

	  return (alphaValue / 100).toFixed(2);
	};

	const useUtilityClasses$e = ownerState => {
	  const {
	    square,
	    elevation,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, !square && 'rounded', variant === 'elevation' && "elevation".concat(elevation)]
	  };
	  return composeClasses(slots, getPaperUtilityClass, classes);
	};

	const PaperRoot = styled$1('div', {
	  name: 'MuiPaper',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  backgroundColor: theme.palette.background.paper,
	  color: theme.palette.text.primary,
	  transition: theme.transitions.create('box-shadow')
	}, !ownerState.square && {
	  borderRadius: theme.shape.borderRadius
	}, ownerState.variant === 'outlined' && {
	  border: "1px solid ".concat(theme.palette.divider)
	}, ownerState.variant === 'elevation' && _extends$2({
	  boxShadow: theme.shadows[ownerState.elevation]
	}, theme.palette.mode === 'dark' && {
	  backgroundImage: "linear-gradient(".concat(alpha('#fff', getOverlayAlpha(ownerState.elevation)), ", ").concat(alpha('#fff', getOverlayAlpha(ownerState.elevation)), ")")
	})));
	const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiPaper'
	  });

	  const {
	    className,
	    component = 'div',
	    elevation = 1,
	    square = false,
	    variant = 'elevation'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$j);

	  const ownerState = _extends$2({}, props, {
	    component,
	    elevation,
	    square,
	    variant
	  });

	  const classes = useUtilityClasses$e(ownerState);

	  return /*#__PURE__*/jsxRuntime.jsx(PaperRoot, _extends$2({
	    as: component,
	    ownerState: ownerState,
	    className: clsx(classes.root, className),
	    ref: ref
	  }, other));
	});
	var Paper$1 = Paper;

	const reflow = node => node.scrollTop;
	function getTransitionProps(props, options) {
	  var _style$transitionDura, _style$transitionTimi;

	  const {
	    timeout,
	    easing,
	    style = {}
	  } = props;
	  return {
	    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
	    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
	    delay: style.transitionDelay
	  };
	}

	const _excluded$i = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

	function getScale(value) {
	  return "scale(".concat(value, ", ").concat(value ** 2, ")");
	}

	const styles$1 = {
	  entering: {
	    opacity: 1,
	    transform: getScale(1)
	  },
	  entered: {
	    opacity: 1,
	    transform: 'none'
	  }
	};
	/**
	 * Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
	 * Remove this workaround once the WebKit bug fix is released.
	 */

	const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent);
	/**
	 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
	 * [Popover](/material-ui/react-popover/) components.
	 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
	 */

	const Grow = /*#__PURE__*/react.forwardRef(function Grow(props, ref) {
	  const {
	    addEndListener,
	    appear = true,
	    children,
	    easing,
	    in: inProp,
	    onEnter,
	    onEntered,
	    onEntering,
	    onExit,
	    onExited,
	    onExiting,
	    style,
	    timeout = 'auto',
	    // eslint-disable-next-line react/prop-types
	    TransitionComponent = Transition$1
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$i);

	  const timer = react.useRef();
	  const autoTimeout = react.useRef();
	  const theme = useTheme();
	  const nodeRef = react.useRef(null);
	  const foreignRef = useForkRef(children.ref, ref);
	  const handleRef = useForkRef(nodeRef, foreignRef);

	  const normalizedTransitionCallback = callback => maybeIsAppearing => {
	    if (callback) {
	      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

	      if (maybeIsAppearing === undefined) {
	        callback(node);
	      } else {
	        callback(node, maybeIsAppearing);
	      }
	    }
	  };

	  const handleEntering = normalizedTransitionCallback(onEntering);
	  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
	    reflow(node); // So the animation always start from the start.

	    const {
	      duration: transitionDuration,
	      delay,
	      easing: transitionTimingFunction
	    } = getTransitionProps({
	      style,
	      timeout,
	      easing
	    }, {
	      mode: 'enter'
	    });
	    let duration;

	    if (timeout === 'auto') {
	      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
	      autoTimeout.current = duration;
	    } else {
	      duration = transitionDuration;
	    }

	    node.style.transition = [theme.transitions.create('opacity', {
	      duration,
	      delay
	    }), theme.transitions.create('transform', {
	      duration: isWebKit154 ? duration : duration * 0.666,
	      delay,
	      easing: transitionTimingFunction
	    })].join(',');

	    if (onEnter) {
	      onEnter(node, isAppearing);
	    }
	  });
	  const handleEntered = normalizedTransitionCallback(onEntered);
	  const handleExiting = normalizedTransitionCallback(onExiting);
	  const handleExit = normalizedTransitionCallback(node => {
	    const {
	      duration: transitionDuration,
	      delay,
	      easing: transitionTimingFunction
	    } = getTransitionProps({
	      style,
	      timeout,
	      easing
	    }, {
	      mode: 'exit'
	    });
	    let duration;

	    if (timeout === 'auto') {
	      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
	      autoTimeout.current = duration;
	    } else {
	      duration = transitionDuration;
	    }

	    node.style.transition = [theme.transitions.create('opacity', {
	      duration,
	      delay
	    }), theme.transitions.create('transform', {
	      duration: isWebKit154 ? duration : duration * 0.666,
	      delay: isWebKit154 ? delay : delay || duration * 0.333,
	      easing: transitionTimingFunction
	    })].join(',');
	    node.style.opacity = 0;
	    node.style.transform = getScale(0.75);

	    if (onExit) {
	      onExit(node);
	    }
	  });
	  const handleExited = normalizedTransitionCallback(onExited);

	  const handleAddEndListener = next => {
	    if (timeout === 'auto') {
	      timer.current = setTimeout(next, autoTimeout.current || 0);
	    }

	    if (addEndListener) {
	      // Old call signature before `react-transition-group` implemented `nodeRef`
	      addEndListener(nodeRef.current, next);
	    }
	  };

	  react.useEffect(() => {
	    return () => {
	      clearTimeout(timer.current);
	    };
	  }, []);
	  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends$2({
	    appear: appear,
	    in: inProp,
	    nodeRef: nodeRef,
	    onEnter: handleEnter,
	    onEntered: handleEntered,
	    onEntering: handleEntering,
	    onExit: handleExit,
	    onExited: handleExited,
	    onExiting: handleExiting,
	    addEndListener: handleAddEndListener,
	    timeout: timeout === 'auto' ? null : timeout
	  }, other, {
	    children: (state, childProps) => {
	      return /*#__PURE__*/react.cloneElement(children, _extends$2({
	        style: _extends$2({
	          opacity: 0,
	          transform: getScale(0.75),
	          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
	        }, styles$1[state], style, children.props.style),
	        ref: handleRef
	      }, childProps));
	    }
	  }));
	});
	Grow.muiSupportAuto = true;
	var Grow$1 = Grow;

	const _excluded$h = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
	const styles = {
	  entering: {
	    opacity: 1
	  },
	  entered: {
	    opacity: 1
	  }
	};
	/**
	 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
	 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
	 */

	const Fade = /*#__PURE__*/react.forwardRef(function Fade(props, ref) {
	  const theme = useTheme();
	  const defaultTimeout = {
	    enter: theme.transitions.duration.enteringScreen,
	    exit: theme.transitions.duration.leavingScreen
	  };

	  const {
	    addEndListener,
	    appear = true,
	    children,
	    easing,
	    in: inProp,
	    onEnter,
	    onEntered,
	    onEntering,
	    onExit,
	    onExited,
	    onExiting,
	    style,
	    timeout = defaultTimeout,
	    // eslint-disable-next-line react/prop-types
	    TransitionComponent = Transition$1
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$h);
	  const nodeRef = react.useRef(null);
	  const foreignRef = useForkRef(children.ref, ref);
	  const handleRef = useForkRef(nodeRef, foreignRef);

	  const normalizedTransitionCallback = callback => maybeIsAppearing => {
	    if (callback) {
	      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

	      if (maybeIsAppearing === undefined) {
	        callback(node);
	      } else {
	        callback(node, maybeIsAppearing);
	      }
	    }
	  };

	  const handleEntering = normalizedTransitionCallback(onEntering);
	  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
	    reflow(node); // So the animation always start from the start.

	    const transitionProps = getTransitionProps({
	      style,
	      timeout,
	      easing
	    }, {
	      mode: 'enter'
	    });
	    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
	    node.style.transition = theme.transitions.create('opacity', transitionProps);

	    if (onEnter) {
	      onEnter(node, isAppearing);
	    }
	  });
	  const handleEntered = normalizedTransitionCallback(onEntered);
	  const handleExiting = normalizedTransitionCallback(onExiting);
	  const handleExit = normalizedTransitionCallback(node => {
	    const transitionProps = getTransitionProps({
	      style,
	      timeout,
	      easing
	    }, {
	      mode: 'exit'
	    });
	    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
	    node.style.transition = theme.transitions.create('opacity', transitionProps);

	    if (onExit) {
	      onExit(node);
	    }
	  });
	  const handleExited = normalizedTransitionCallback(onExited);

	  const handleAddEndListener = next => {
	    if (addEndListener) {
	      // Old call signature before `react-transition-group` implemented `nodeRef`
	      addEndListener(nodeRef.current, next);
	    }
	  };

	  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends$2({
	    appear: appear,
	    in: inProp,
	    nodeRef: nodeRef ,
	    onEnter: handleEnter,
	    onEntered: handleEntered,
	    onEntering: handleEntering,
	    onExit: handleExit,
	    onExited: handleExited,
	    onExiting: handleExiting,
	    addEndListener: handleAddEndListener,
	    timeout: timeout
	  }, other, {
	    children: (state, childProps) => {
	      return /*#__PURE__*/react.cloneElement(children, _extends$2({
	        style: _extends$2({
	          opacity: 0,
	          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
	        }, styles[state], style, children.props.style),
	        ref: handleRef
	      }, childProps));
	    }
	  }));
	});
	var Fade$1 = Fade;

	function getBackdropUtilityClass(slot) {
	  return generateUtilityClass('MuiBackdrop', slot);
	}
	generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

	const _excluded$g = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];

	const useUtilityClasses$d = ownerState => {
	  const {
	    classes,
	    invisible
	  } = ownerState;
	  const slots = {
	    root: ['root', invisible && 'invisible']
	  };
	  return composeClasses(slots, getBackdropUtilityClass, classes);
	};

	const BackdropRoot = styled$1('div', {
	  name: 'MuiBackdrop',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.invisible && styles.invisible];
	  }
	})(({
	  ownerState
	}) => _extends$2({
	  position: 'fixed',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  right: 0,
	  bottom: 0,
	  top: 0,
	  left: 0,
	  backgroundColor: 'rgba(0, 0, 0, 0.5)',
	  WebkitTapHighlightColor: 'transparent'
	}, ownerState.invisible && {
	  backgroundColor: 'transparent'
	}));
	const Backdrop = /*#__PURE__*/react.forwardRef(function Backdrop(inProps, ref) {
	  var _components$Root, _componentsProps$root;

	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiBackdrop'
	  });

	  const {
	    children,
	    component = 'div',
	    components = {},
	    componentsProps = {},
	    className,
	    invisible = false,
	    open,
	    transitionDuration,
	    // eslint-disable-next-line react/prop-types
	    TransitionComponent = Fade$1
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$g);

	  const ownerState = _extends$2({}, props, {
	    component,
	    invisible
	  });

	  const classes = useUtilityClasses$d(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends$2({
	    in: open,
	    timeout: transitionDuration
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(BackdropRoot, {
	      "aria-hidden": true,
	      as: (_components$Root = components.Root) != null ? _components$Root : component,
	      className: clsx(classes.root, className),
	      ownerState: _extends$2({}, ownerState, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState),
	      classes: classes,
	      ref: ref,
	      children: children
	    })
	  }));
	});
	var Backdrop$1 = Backdrop;

	const _excluded$f = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];

	const extendUtilityClasses = ownerState => {
	  return ownerState.classes;
	};

	const ModalRoot = styled$1('div', {
	  name: 'MuiModal',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  position: 'fixed',
	  zIndex: theme.zIndex.modal,
	  right: 0,
	  bottom: 0,
	  top: 0,
	  left: 0
	}, !ownerState.open && ownerState.exited && {
	  visibility: 'hidden'
	}));
	const ModalBackdrop = styled$1(Backdrop$1, {
	  name: 'MuiModal',
	  slot: 'Backdrop',
	  overridesResolver: (props, styles) => {
	    return styles.backdrop;
	  }
	})({
	  zIndex: -1
	});
	/**
	 * Modal is a lower-level construct that is leveraged by the following components:
	 *
	 * - [Dialog](/material-ui/api/dialog/)
	 * - [Drawer](/material-ui/api/drawer/)
	 * - [Menu](/material-ui/api/menu/)
	 * - [Popover](/material-ui/api/popover/)
	 *
	 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
	 * rather than directly using Modal.
	 *
	 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
	 */

	const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
	  var _componentsProps$root;

	  const props = useThemeProps({
	    name: 'MuiModal',
	    props: inProps
	  });

	  const {
	    BackdropComponent = ModalBackdrop,
	    closeAfterTransition = false,
	    children,
	    components = {},
	    componentsProps = {},
	    disableAutoFocus = false,
	    disableEnforceFocus = false,
	    disableEscapeKeyDown = false,
	    disablePortal = false,
	    disableRestoreFocus = false,
	    disableScrollLock = false,
	    hideBackdrop = false,
	    keepMounted = false
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$f);

	  const [exited, setExited] = react.useState(true);
	  const commonProps = {
	    closeAfterTransition,
	    disableAutoFocus,
	    disableEnforceFocus,
	    disableEscapeKeyDown,
	    disablePortal,
	    disableRestoreFocus,
	    disableScrollLock,
	    hideBackdrop,
	    keepMounted
	  };

	  const ownerState = _extends$2({}, props, commonProps, {
	    exited
	  });

	  const classes = extendUtilityClasses(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(ModalUnstyled$1, _extends$2({
	    components: _extends$2({
	      Root: ModalRoot
	    }, components),
	    componentsProps: {
	      root: _extends$2({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
	        ownerState: _extends$2({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
	      })
	    },
	    BackdropComponent: BackdropComponent,
	    onTransitionEnter: () => setExited(false),
	    onTransitionExited: () => setExited(true),
	    ref: ref
	  }, other, {
	    classes: classes
	  }, commonProps, {
	    children: children
	  }));
	});
	var Modal$1 = Modal;

	function getPopoverUtilityClass(slot) {
	  return generateUtilityClass('MuiPopover', slot);
	}
	generateUtilityClasses('MuiPopover', ['root', 'paper']);

	const _excluded$e = ["onEntering"],
	      _excluded2$1 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
	function getOffsetTop(rect, vertical) {
	  let offset = 0;

	  if (typeof vertical === 'number') {
	    offset = vertical;
	  } else if (vertical === 'center') {
	    offset = rect.height / 2;
	  } else if (vertical === 'bottom') {
	    offset = rect.height;
	  }

	  return offset;
	}
	function getOffsetLeft(rect, horizontal) {
	  let offset = 0;

	  if (typeof horizontal === 'number') {
	    offset = horizontal;
	  } else if (horizontal === 'center') {
	    offset = rect.width / 2;
	  } else if (horizontal === 'right') {
	    offset = rect.width;
	  }

	  return offset;
	}

	function getTransformOriginValue(transformOrigin) {
	  return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? "".concat(n, "px") : n).join(' ');
	}

	function resolveAnchorEl(anchorEl) {
	  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
	}

	const useUtilityClasses$c = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root'],
	    paper: ['paper']
	  };
	  return composeClasses(slots, getPopoverUtilityClass, classes);
	};

	const PopoverRoot = styled$1(Modal$1, {
	  name: 'MuiPopover',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({});
	const PopoverPaper = styled$1(Paper$1, {
	  name: 'MuiPopover',
	  slot: 'Paper',
	  overridesResolver: (props, styles) => styles.paper
	})({
	  position: 'absolute',
	  overflowY: 'auto',
	  overflowX: 'hidden',
	  // So we see the popover when it's empty.
	  // It's most likely on issue on userland.
	  minWidth: 16,
	  minHeight: 16,
	  maxWidth: 'calc(100% - 32px)',
	  maxHeight: 'calc(100% - 32px)',
	  // We disable the focus ring for mouse, touch and keyboard users.
	  outline: 0
	});
	const Popover = /*#__PURE__*/react.forwardRef(function Popover(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiPopover'
	  });

	  const {
	    action,
	    anchorEl,
	    anchorOrigin = {
	      vertical: 'top',
	      horizontal: 'left'
	    },
	    anchorPosition,
	    anchorReference = 'anchorEl',
	    children,
	    className,
	    container: containerProp,
	    elevation = 8,
	    marginThreshold = 16,
	    open,
	    PaperProps = {},
	    transformOrigin = {
	      vertical: 'top',
	      horizontal: 'left'
	    },
	    TransitionComponent = Grow$1,
	    transitionDuration: transitionDurationProp = 'auto',
	    TransitionProps: {
	      onEntering
	    } = {}
	  } = props,
	        TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$e),
	        other = _objectWithoutPropertiesLoose(props, _excluded2$1);

	  const paperRef = react.useRef();
	  const handlePaperRef = useForkRef(paperRef, PaperProps.ref);

	  const ownerState = _extends$2({}, props, {
	    anchorOrigin,
	    anchorReference,
	    elevation,
	    marginThreshold,
	    PaperProps,
	    transformOrigin,
	    TransitionComponent,
	    transitionDuration: transitionDurationProp,
	    TransitionProps
	  });

	  const classes = useUtilityClasses$c(ownerState); // Returns the top/left offset of the position
	  // to attach to on the anchor element (or body if none is provided)

	  const getAnchorOffset = react.useCallback(() => {
	    if (anchorReference === 'anchorPosition') {

	      return anchorPosition;
	    }

	    const resolvedAnchorEl = resolveAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

	    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
	    const anchorRect = anchorElement.getBoundingClientRect();

	    return {
	      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
	      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
	    };
	  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the base transform origin using the element

	  const getTransformOrigin = react.useCallback(elemRect => {
	    return {
	      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
	      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
	    };
	  }, [transformOrigin.horizontal, transformOrigin.vertical]);
	  const getPositioningStyle = react.useCallback(element => {
	    const elemRect = {
	      width: element.offsetWidth,
	      height: element.offsetHeight
	    }; // Get the transform origin point on the element itself

	    const elemTransformOrigin = getTransformOrigin(elemRect);

	    if (anchorReference === 'none') {
	      return {
	        top: null,
	        left: null,
	        transformOrigin: getTransformOriginValue(elemTransformOrigin)
	      };
	    } // Get the offset of the anchoring element


	    const anchorOffset = getAnchorOffset(); // Calculate element positioning

	    let top = anchorOffset.top - elemTransformOrigin.vertical;
	    let left = anchorOffset.left - elemTransformOrigin.horizontal;
	    const bottom = top + elemRect.height;
	    const right = left + elemRect.width; // Use the parent window of the anchorEl if provided

	    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl)); // Window thresholds taking required margin into account

	    const heightThreshold = containerWindow.innerHeight - marginThreshold;
	    const widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

	    if (top < marginThreshold) {
	      const diff = top - marginThreshold;
	      top -= diff;
	      elemTransformOrigin.vertical += diff;
	    } else if (bottom > heightThreshold) {
	      const diff = bottom - heightThreshold;
	      top -= diff;
	      elemTransformOrigin.vertical += diff;
	    }


	    if (left < marginThreshold) {
	      const diff = left - marginThreshold;
	      left -= diff;
	      elemTransformOrigin.horizontal += diff;
	    } else if (right > widthThreshold) {
	      const diff = right - widthThreshold;
	      left -= diff;
	      elemTransformOrigin.horizontal += diff;
	    }

	    return {
	      top: "".concat(Math.round(top), "px"),
	      left: "".concat(Math.round(left), "px"),
	      transformOrigin: getTransformOriginValue(elemTransformOrigin)
	    };
	  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
	  const setPositioningStyles = react.useCallback(() => {
	    const element = paperRef.current;

	    if (!element) {
	      return;
	    }

	    const positioning = getPositioningStyle(element);

	    if (positioning.top !== null) {
	      element.style.top = positioning.top;
	    }

	    if (positioning.left !== null) {
	      element.style.left = positioning.left;
	    }

	    element.style.transformOrigin = positioning.transformOrigin;
	  }, [getPositioningStyle]);

	  const handleEntering = (element, isAppearing) => {
	    if (onEntering) {
	      onEntering(element, isAppearing);
	    }

	    setPositioningStyles();
	  };

	  react.useEffect(() => {
	    if (open) {
	      setPositioningStyles();
	    }
	  });
	  react.useImperativeHandle(action, () => open ? {
	    updatePosition: () => {
	      setPositioningStyles();
	    }
	  } : null, [open, setPositioningStyles]);
	  react.useEffect(() => {
	    if (!open) {
	      return undefined;
	    }

	    const handleResize = debounce(() => {
	      setPositioningStyles();
	    });
	    const containerWindow = ownerWindow(anchorEl);
	    containerWindow.addEventListener('resize', handleResize);
	    return () => {
	      handleResize.clear();
	      containerWindow.removeEventListener('resize', handleResize);
	    };
	  }, [anchorEl, open, setPositioningStyles]);
	  let transitionDuration = transitionDurationProp;

	  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
	    transitionDuration = undefined;
	  } // If the container prop is provided, use that
	  // If the anchorEl prop is provided, use its parent body element as the container
	  // If neither are provided let the Modal take care of choosing the container


	  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
	  return /*#__PURE__*/jsxRuntime.jsx(PopoverRoot, _extends$2({
	    BackdropProps: {
	      invisible: true
	    },
	    className: clsx(classes.root, className),
	    container: container,
	    open: open,
	    ref: ref,
	    ownerState: ownerState
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends$2({
	      appear: true,
	      in: open,
	      onEntering: handleEntering,
	      timeout: transitionDuration
	    }, TransitionProps, {
	      children: /*#__PURE__*/jsxRuntime.jsx(PopoverPaper, _extends$2({
	        elevation: elevation
	      }, PaperProps, {
	        ref: handlePaperRef,
	        className: clsx(classes.paper, PaperProps.className),
	        children: children
	      }))
	    }))
	  }));
	});
	var Popover$1 = Popover;

	function getMenuUtilityClass(slot) {
	  return generateUtilityClass('MuiMenu', slot);
	}
	generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);

	const _excluded$d = ["onEntering"],
	      _excluded2 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
	const RTL_ORIGIN = {
	  vertical: 'top',
	  horizontal: 'right'
	};
	const LTR_ORIGIN = {
	  vertical: 'top',
	  horizontal: 'left'
	};

	const useUtilityClasses$b = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root'],
	    paper: ['paper'],
	    list: ['list']
	  };
	  return composeClasses(slots, getMenuUtilityClass, classes);
	};

	const MenuRoot = styled$1(Popover$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiMenu',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({});
	const MenuPaper = styled$1(Paper$1, {
	  name: 'MuiMenu',
	  slot: 'Paper',
	  overridesResolver: (props, styles) => styles.paper
	})({
	  // specZ: The maximum height of a simple menu should be one or more rows less than the view
	  // height. This ensures a tapable area outside of the simple menu with which to dismiss
	  // the menu.
	  maxHeight: 'calc(100% - 96px)',
	  // Add iOS momentum scrolling for iOS < 13.0
	  WebkitOverflowScrolling: 'touch'
	});
	const MenuMenuList = styled$1(MenuList$1, {
	  name: 'MuiMenu',
	  slot: 'List',
	  overridesResolver: (props, styles) => styles.list
	})({
	  // We disable the focus ring for mouse, touch and keyboard users.
	  outline: 0
	});
	const Menu = /*#__PURE__*/react.forwardRef(function Menu(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiMenu'
	  });

	  const {
	    autoFocus = true,
	    children,
	    disableAutoFocusItem = false,
	    MenuListProps = {},
	    onClose,
	    open,
	    PaperProps = {},
	    PopoverClasses,
	    transitionDuration = 'auto',
	    TransitionProps: {
	      onEntering
	    } = {},
	    variant = 'selectedMenu'
	  } = props,
	        TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$d),
	        other = _objectWithoutPropertiesLoose(props, _excluded2);

	  const theme = useTheme();
	  const isRtl = theme.direction === 'rtl';

	  const ownerState = _extends$2({}, props, {
	    autoFocus,
	    disableAutoFocusItem,
	    MenuListProps,
	    onEntering,
	    PaperProps,
	    transitionDuration,
	    TransitionProps,
	    variant
	  });

	  const classes = useUtilityClasses$b(ownerState);
	  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
	  const menuListActionsRef = react.useRef(null);

	  const handleEntering = (element, isAppearing) => {
	    if (menuListActionsRef.current) {
	      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
	    }

	    if (onEntering) {
	      onEntering(element, isAppearing);
	    }
	  };

	  const handleListKeyDown = event => {
	    if (event.key === 'Tab') {
	      event.preventDefault();

	      if (onClose) {
	        onClose(event, 'tabKeyDown');
	      }
	    }
	  };
	  /**
	   * the index of the item should receive focus
	   * in a `variant="selectedMenu"` it's the first `selected` item
	   * otherwise it's the very first item.
	   */


	  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
	  // to check if there is a `selected` item. We're looking for the last `selected`
	  // item and use the first valid item as a fallback

	  react.Children.map(children, (child, index) => {
	    if (! /*#__PURE__*/react.isValidElement(child)) {
	      return;
	    }

	    if (!child.props.disabled) {
	      if (variant === 'selectedMenu' && child.props.selected) {
	        activeItemIndex = index;
	      } else if (activeItemIndex === -1) {
	        activeItemIndex = index;
	      }
	    }
	  });
	  return /*#__PURE__*/jsxRuntime.jsx(MenuRoot, _extends$2({
	    classes: PopoverClasses,
	    onClose: onClose,
	    anchorOrigin: {
	      vertical: 'bottom',
	      horizontal: isRtl ? 'right' : 'left'
	    },
	    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
	    PaperProps: _extends$2({
	      component: MenuPaper
	    }, PaperProps, {
	      classes: _extends$2({}, PaperProps.classes, {
	        root: classes.paper
	      })
	    }),
	    className: classes.root,
	    open: open,
	    ref: ref,
	    transitionDuration: transitionDuration,
	    TransitionProps: _extends$2({
	      onEntering: handleEntering
	    }, TransitionProps),
	    ownerState: ownerState
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(MenuMenuList, _extends$2({
	      onKeyDown: handleListKeyDown,
	      actions: menuListActionsRef,
	      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
	      autoFocusItem: autoFocusItem,
	      variant: variant
	    }, MenuListProps, {
	      className: clsx(classes.list, MenuListProps.className),
	      children: children
	    }))
	  }));
	});
	var Menu$1 = Menu;

	function getNativeSelectUtilityClasses(slot) {
	  return generateUtilityClass('MuiNativeSelect', slot);
	}
	const nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);
	var nativeSelectClasses$1 = nativeSelectClasses;

	const _excluded$c = ["className", "disabled", "IconComponent", "inputRef", "variant"];

	const useUtilityClasses$a = ownerState => {
	  const {
	    classes,
	    variant,
	    disabled,
	    multiple,
	    open
	  } = ownerState;
	  const slots = {
	    select: ['select', variant, disabled && 'disabled', multiple && 'multiple'],
	    icon: ['icon', "icon".concat(capitalize(variant)), open && 'iconOpen', disabled && 'disabled']
	  };
	  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
	};

	const nativeSelectSelectStyles = ({
	  ownerState,
	  theme
	}) => _extends$2({
	  MozAppearance: 'none',
	  // Reset
	  WebkitAppearance: 'none',
	  // Reset
	  // When interacting quickly, the text can end up selected.
	  // Native select can't be selected either.
	  userSelect: 'none',
	  borderRadius: 0,
	  // Reset
	  cursor: 'pointer',
	  '&:focus': {
	    // Show that it's not an text input
	    backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
	    borderRadius: 0 // Reset Chrome style

	  },
	  // Remove IE11 arrow
	  '&::-ms-expand': {
	    display: 'none'
	  },
	  ["&.".concat(nativeSelectClasses$1.disabled)]: {
	    cursor: 'default'
	  },
	  '&[multiple]': {
	    height: 'auto'
	  },
	  '&:not([multiple]) option, &:not([multiple]) optgroup': {
	    backgroundColor: theme.palette.background.paper
	  },
	  // Bump specificity to allow extending custom inputs
	  '&&&': {
	    paddingRight: 24,
	    minWidth: 16 // So it doesn't collapse.

	  }
	}, ownerState.variant === 'filled' && {
	  '&&&': {
	    paddingRight: 32
	  }
	}, ownerState.variant === 'outlined' && {
	  borderRadius: theme.shape.borderRadius,
	  '&:focus': {
	    borderRadius: theme.shape.borderRadius // Reset the reset for Chrome style

	  },
	  '&&&': {
	    paddingRight: 32
	  }
	});
	const NativeSelectSelect = styled$1('select', {
	  name: 'MuiNativeSelect',
	  slot: 'Select',
	  shouldForwardProp: rootShouldForwardProp,
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.select, styles[ownerState.variant], {
	      ["&.".concat(nativeSelectClasses$1.multiple)]: styles.multiple
	    }];
	  }
	})(nativeSelectSelectStyles);
	const nativeSelectIconStyles = ({
	  ownerState,
	  theme
	}) => _extends$2({
	  // We use a position absolute over a flexbox in order to forward the pointer events
	  // to the input and to support wrapping tags..
	  position: 'absolute',
	  right: 0,
	  top: 'calc(50% - .5em)',
	  // Center vertically, height is 1em
	  pointerEvents: 'none',
	  // Don't block pointer events on the select under the icon.
	  color: theme.palette.action.active,
	  ["&.".concat(nativeSelectClasses$1.disabled)]: {
	    color: theme.palette.action.disabled
	  }
	}, ownerState.open && {
	  transform: 'rotate(180deg)'
	}, ownerState.variant === 'filled' && {
	  right: 7
	}, ownerState.variant === 'outlined' && {
	  right: 7
	});
	const NativeSelectIcon = styled$1('svg', {
	  name: 'MuiNativeSelect',
	  slot: 'Icon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.icon, ownerState.variant && styles["icon".concat(capitalize(ownerState.variant))], ownerState.open && styles.iconOpen];
	  }
	})(nativeSelectIconStyles);
	/**
	 * @ignore - internal component.
	 */

	const NativeSelectInput = /*#__PURE__*/react.forwardRef(function NativeSelectInput(props, ref) {
	  const {
	    className,
	    disabled,
	    IconComponent,
	    inputRef,
	    variant = 'standard'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$c);

	  const ownerState = _extends$2({}, props, {
	    disabled,
	    variant
	  });

	  const classes = useUtilityClasses$a(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [/*#__PURE__*/jsxRuntime.jsx(NativeSelectSelect, _extends$2({
	      ownerState: ownerState,
	      className: clsx(classes.select, className),
	      disabled: disabled,
	      ref: inputRef || ref
	    }, other)), props.multiple ? null : /*#__PURE__*/jsxRuntime.jsx(NativeSelectIcon, {
	      as: IconComponent,
	      ownerState: ownerState,
	      className: classes.icon
	    })]
	  });
	});
	var NativeSelectInput$1 = NativeSelectInput;

	function getSelectUtilityClasses(slot) {
	  return generateUtilityClass('MuiSelect', slot);
	}
	const selectClasses = generateUtilityClasses('MuiSelect', ['select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);
	var selectClasses$1 = selectClasses;

	var _span$1;

	const _excluded$b = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
	const SelectSelect = styled$1('div', {
	  name: 'MuiSelect',
	  slot: 'Select',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [// Win specificity over the input base
	    {
	      ["&.".concat(selectClasses$1.select)]: styles.select
	    }, {
	      ["&.".concat(selectClasses$1.select)]: styles[ownerState.variant]
	    }, {
	      ["&.".concat(selectClasses$1.multiple)]: styles.multiple
	    }];
	  }
	})(nativeSelectSelectStyles, {
	  // Win specificity over the input base
	  ["&.".concat(selectClasses$1.select)]: {
	    height: 'auto',
	    // Resets for multiple select with chips
	    minHeight: '1.4375em',
	    // Required for select\text-field height consistency
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap',
	    overflow: 'hidden'
	  }
	});
	const SelectIcon = styled$1('svg', {
	  name: 'MuiSelect',
	  slot: 'Icon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.icon, ownerState.variant && styles["icon".concat(capitalize(ownerState.variant))], ownerState.open && styles.iconOpen];
	  }
	})(nativeSelectIconStyles);
	const SelectNativeInput = styled$1('input', {
	  shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'classes',
	  name: 'MuiSelect',
	  slot: 'NativeInput',
	  overridesResolver: (props, styles) => styles.nativeInput
	})({
	  bottom: 0,
	  left: 0,
	  position: 'absolute',
	  opacity: 0,
	  pointerEvents: 'none',
	  width: '100%',
	  boxSizing: 'border-box'
	});

	function areEqualValues(a, b) {
	  if (typeof b === 'object' && b !== null) {
	    return a === b;
	  } // The value could be a number, the DOM will stringify it anyway.


	  return String(a) === String(b);
	}

	function isEmpty(display) {
	  return display == null || typeof display === 'string' && !display.trim();
	}

	const useUtilityClasses$9 = ownerState => {
	  const {
	    classes,
	    variant,
	    disabled,
	    multiple,
	    open
	  } = ownerState;
	  const slots = {
	    select: ['select', variant, disabled && 'disabled', multiple && 'multiple'],
	    icon: ['icon', "icon".concat(capitalize(variant)), open && 'iconOpen', disabled && 'disabled'],
	    nativeInput: ['nativeInput']
	  };
	  return composeClasses(slots, getSelectUtilityClasses, classes);
	};
	/**
	 * @ignore - internal component.
	 */


	const SelectInput = /*#__PURE__*/react.forwardRef(function SelectInput(props, ref) {
	  const {
	    'aria-describedby': ariaDescribedby,
	    'aria-label': ariaLabel,
	    autoFocus,
	    autoWidth,
	    children,
	    className,
	    defaultOpen,
	    defaultValue,
	    disabled,
	    displayEmpty,
	    IconComponent,
	    inputRef: inputRefProp,
	    labelId,
	    MenuProps = {},
	    multiple,
	    name,
	    onBlur,
	    onChange,
	    onClose,
	    onFocus,
	    onOpen,
	    open: openProp,
	    readOnly,
	    renderValue,
	    SelectDisplayProps = {},
	    tabIndex: tabIndexProp,
	    value: valueProp,
	    variant = 'standard'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$b);

	  const [value, setValueState] = useControlled({
	    controlled: valueProp,
	    default: defaultValue,
	    name: 'Select'
	  });
	  const [openState, setOpenState] = useControlled({
	    controlled: openProp,
	    default: defaultOpen,
	    name: 'Select'
	  });
	  const inputRef = react.useRef(null);
	  const displayRef = react.useRef(null);
	  const [displayNode, setDisplayNode] = react.useState(null);
	  const {
	    current: isOpenControlled
	  } = react.useRef(openProp != null);
	  const [menuMinWidthState, setMenuMinWidthState] = react.useState();
	  const handleRef = useForkRef(ref, inputRefProp);
	  const handleDisplayRef = react.useCallback(node => {
	    displayRef.current = node;

	    if (node) {
	      setDisplayNode(node);
	    }
	  }, []);
	  react.useImperativeHandle(handleRef, () => ({
	    focus: () => {
	      displayRef.current.focus();
	    },
	    node: inputRef.current,
	    value
	  }), [value]); // Resize menu on `defaultOpen` automatic toggle.

	  react.useEffect(() => {
	    if (defaultOpen && openState && displayNode && !isOpenControlled) {
	      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
	      displayRef.current.focus();
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [displayNode, autoWidth]); // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
	  // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.

	  react.useEffect(() => {
	    if (autoFocus) {
	      displayRef.current.focus();
	    }
	  }, [autoFocus]);
	  react.useEffect(() => {
	    if (!labelId) {
	      return undefined;
	    }

	    const label = ownerDocument(displayRef.current).getElementById(labelId);

	    if (label) {
	      const handler = () => {
	        if (getSelection().isCollapsed) {
	          displayRef.current.focus();
	        }
	      };

	      label.addEventListener('click', handler);
	      return () => {
	        label.removeEventListener('click', handler);
	      };
	    }

	    return undefined;
	  }, [labelId]);

	  const update = (open, event) => {
	    if (open) {
	      if (onOpen) {
	        onOpen(event);
	      }
	    } else if (onClose) {
	      onClose(event);
	    }

	    if (!isOpenControlled) {
	      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
	      setOpenState(open);
	    }
	  };

	  const handleMouseDown = event => {
	    // Ignore everything but left-click
	    if (event.button !== 0) {
	      return;
	    } // Hijack the default focus behavior.


	    event.preventDefault();
	    displayRef.current.focus();
	    update(true, event);
	  };

	  const handleClose = event => {
	    update(false, event);
	  };

	  const childrenArray = react.Children.toArray(children); // Support autofill.

	  const handleChange = event => {
	    const index = childrenArray.map(child => child.props.value).indexOf(event.target.value);

	    if (index === -1) {
	      return;
	    }

	    const child = childrenArray[index];
	    setValueState(child.props.value);

	    if (onChange) {
	      onChange(event, child);
	    }
	  };

	  const handleItemClick = child => event => {
	    let newValue; // We use the tabindex attribute to signal the available options.

	    if (!event.currentTarget.hasAttribute('tabindex')) {
	      return;
	    }

	    if (multiple) {
	      newValue = Array.isArray(value) ? value.slice() : [];
	      const itemIndex = value.indexOf(child.props.value);

	      if (itemIndex === -1) {
	        newValue.push(child.props.value);
	      } else {
	        newValue.splice(itemIndex, 1);
	      }
	    } else {
	      newValue = child.props.value;
	    }

	    if (child.props.onClick) {
	      child.props.onClick(event);
	    }

	    if (value !== newValue) {
	      setValueState(newValue);

	      if (onChange) {
	        // Redefine target to allow name and value to be read.
	        // This allows seamless integration with the most popular form libraries.
	        // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
	        // Clone the event to not override `target` of the original event.
	        const nativeEvent = event.nativeEvent || event;
	        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
	        Object.defineProperty(clonedEvent, 'target', {
	          writable: true,
	          value: {
	            value: newValue,
	            name
	          }
	        });
	        onChange(clonedEvent, child);
	      }
	    }

	    if (!multiple) {
	      update(false, event);
	    }
	  };

	  const handleKeyDown = event => {
	    if (!readOnly) {
	      const validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
	      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
	      'Enter'];

	      if (validKeys.indexOf(event.key) !== -1) {
	        event.preventDefault();
	        update(true, event);
	      }
	    }
	  };

	  const open = displayNode !== null && openState;

	  const handleBlur = event => {
	    // if open event.stopImmediatePropagation
	    if (!open && onBlur) {
	      // Preact support, target is read only property on a native event.
	      Object.defineProperty(event, 'target', {
	        writable: true,
	        value: {
	          value,
	          name
	        }
	      });
	      onBlur(event);
	    }
	  };

	  delete other['aria-invalid'];
	  let display;
	  let displaySingle;
	  const displayMultiple = [];
	  let computeDisplay = false;

	  if (isFilled({
	    value
	  }) || displayEmpty) {
	    if (renderValue) {
	      display = renderValue(value);
	    } else {
	      computeDisplay = true;
	    }
	  }

	  const items = childrenArray.map((child, index, arr) => {
	    if (! /*#__PURE__*/react.isValidElement(child)) {
	      return null;
	    }

	    let selected;

	    if (multiple) {
	      if (!Array.isArray(value)) {
	        throw new Error(formatMuiErrorMessage(2));
	      }

	      selected = value.some(v => areEqualValues(v, child.props.value));

	      if (selected && computeDisplay) {
	        displayMultiple.push(child.props.children);
	      }
	    } else {
	      selected = areEqualValues(value, child.props.value);

	      if (selected && computeDisplay) {
	        displaySingle = child.props.children;
	      }
	    }

	    if (child.props.value === undefined) {
	      return /*#__PURE__*/react.cloneElement(child, {
	        'aria-readonly': true,
	        role: 'option'
	      });
	    }

	    const isFirstSelectableElement = () => {
	      if (value) {
	        return selected;
	      }

	      const firstSelectableElement = arr.find(item => item.props.value !== undefined && item.props.disabled !== true);

	      if (child === firstSelectableElement) {
	        return true;
	      }

	      return selected;
	    };

	    return /*#__PURE__*/react.cloneElement(child, {
	      'aria-selected': selected ? 'true' : 'false',
	      onClick: handleItemClick(child),
	      onKeyUp: event => {
	        if (event.key === ' ') {
	          // otherwise our MenuItems dispatches a click event
	          // it's not behavior of the native <option> and causes
	          // the select to close immediately since we open on space keydown
	          event.preventDefault();
	        }

	        if (child.props.onKeyUp) {
	          child.props.onKeyUp(event);
	        }
	      },
	      role: 'option',
	      selected: arr[0].props.value === undefined || arr[0].props.disabled === true ? isFirstSelectableElement() : selected,
	      value: undefined,
	      // The value is most likely not a valid HTML attribute.
	      'data-value': child.props.value // Instead, we provide it as a data attribute.

	    });
	  });

	  if (computeDisplay) {
	    if (multiple) {
	      if (displayMultiple.length === 0) {
	        display = null;
	      } else {
	        display = displayMultiple.reduce((output, child, index) => {
	          output.push(child);

	          if (index < displayMultiple.length - 1) {
	            output.push(', ');
	          }

	          return output;
	        }, []);
	      }
	    } else {
	      display = displaySingle;
	    }
	  } // Avoid performing a layout computation in the render method.


	  let menuMinWidth = menuMinWidthState;

	  if (!autoWidth && isOpenControlled && displayNode) {
	    menuMinWidth = displayNode.clientWidth;
	  }

	  let tabIndex;

	  if (typeof tabIndexProp !== 'undefined') {
	    tabIndex = tabIndexProp;
	  } else {
	    tabIndex = disabled ? null : 0;
	  }

	  const buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);

	  const ownerState = _extends$2({}, props, {
	    variant,
	    value,
	    open
	  });

	  const classes = useUtilityClasses$9(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [/*#__PURE__*/jsxRuntime.jsx(SelectSelect, _extends$2({
	      ref: handleDisplayRef,
	      tabIndex: tabIndex,
	      role: "button",
	      "aria-disabled": disabled ? 'true' : undefined,
	      "aria-expanded": open ? 'true' : 'false',
	      "aria-haspopup": "listbox",
	      "aria-label": ariaLabel,
	      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
	      "aria-describedby": ariaDescribedby,
	      onKeyDown: handleKeyDown,
	      onMouseDown: disabled || readOnly ? null : handleMouseDown,
	      onBlur: handleBlur,
	      onFocus: onFocus
	    }, SelectDisplayProps, {
	      ownerState: ownerState,
	      className: clsx(classes.select, className, SelectDisplayProps.className) // The id is required for proper a11y
	      ,
	      id: buttonId,
	      children: isEmpty(display) ? // notranslate needed while Google Translate will not fix zero-width space issue
	      _span$1 || (_span$1 = /*#__PURE__*/jsxRuntime.jsx("span", {
	        className: "notranslate",
	        children: "\u200B"
	      })) : display
	    })), /*#__PURE__*/jsxRuntime.jsx(SelectNativeInput, _extends$2({
	      value: Array.isArray(value) ? value.join(',') : value,
	      name: name,
	      ref: inputRef,
	      "aria-hidden": true,
	      onChange: handleChange,
	      tabIndex: -1,
	      disabled: disabled,
	      className: classes.nativeInput,
	      autoFocus: autoFocus,
	      ownerState: ownerState
	    }, other)), /*#__PURE__*/jsxRuntime.jsx(SelectIcon, {
	      as: IconComponent,
	      className: classes.icon,
	      ownerState: ownerState
	    }), /*#__PURE__*/jsxRuntime.jsx(Menu$1, _extends$2({
	      id: "menu-".concat(name || ''),
	      anchorEl: displayNode,
	      open: open,
	      onClose: handleClose,
	      anchorOrigin: {
	        vertical: 'bottom',
	        horizontal: 'center'
	      },
	      transformOrigin: {
	        vertical: 'top',
	        horizontal: 'center'
	      }
	    }, MenuProps, {
	      MenuListProps: _extends$2({
	        'aria-labelledby': labelId,
	        role: 'listbox',
	        disableListWrap: true
	      }, MenuProps.MenuListProps),
	      PaperProps: _extends$2({}, MenuProps.PaperProps, {
	        style: _extends$2({
	          minWidth: menuMinWidth
	        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
	      }),
	      children: items
	    }))]
	  });
	});
	var SelectInput$1 = SelectInput;

	function getSvgIconUtilityClass(slot) {
	  return generateUtilityClass('MuiSvgIcon', slot);
	}
	generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

	const _excluded$a = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];

	const useUtilityClasses$8 = ownerState => {
	  const {
	    color,
	    fontSize,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', color !== 'inherit' && "color".concat(capitalize(color)), "fontSize".concat(capitalize(fontSize))]
	  };
	  return composeClasses(slots, getSvgIconUtilityClass, classes);
	};

	const SvgIconRoot = styled$1('svg', {
	  name: 'MuiSvgIcon',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.color !== 'inherit' && styles["color".concat(capitalize(ownerState.color))], styles["fontSize".concat(capitalize(ownerState.fontSize))]];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _theme$palette$ownerS, _theme$palette, _theme$palette$ownerS2, _theme$palette2, _theme$palette2$actio, _theme$palette3, _theme$palette3$actio;

	  return {
	    userSelect: 'none',
	    width: '1em',
	    height: '1em',
	    display: 'inline-block',
	    fill: 'currentColor',
	    flexShrink: 0,
	    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
	      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
	    }),
	    fontSize: {
	      inherit: 'inherit',
	      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
	      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
	      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875'
	    }[ownerState.fontSize],
	    // TODO v5 deprecate, v6 remove for sx
	    color: (_theme$palette$ownerS = (_theme$palette = theme.palette) == null ? void 0 : (_theme$palette$ownerS2 = _theme$palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
	      action: (_theme$palette2 = theme.palette) == null ? void 0 : (_theme$palette2$actio = _theme$palette2.action) == null ? void 0 : _theme$palette2$actio.active,
	      disabled: (_theme$palette3 = theme.palette) == null ? void 0 : (_theme$palette3$actio = _theme$palette3.action) == null ? void 0 : _theme$palette3$actio.disabled,
	      inherit: undefined
	    }[ownerState.color]
	  };
	});
	const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiSvgIcon'
	  });

	  const {
	    children,
	    className,
	    color = 'inherit',
	    component = 'svg',
	    fontSize = 'medium',
	    htmlColor,
	    inheritViewBox = false,
	    titleAccess,
	    viewBox = '0 0 24 24'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$a);

	  const ownerState = _extends$2({}, props, {
	    color,
	    component,
	    fontSize,
	    instanceFontSize: inProps.fontSize,
	    inheritViewBox,
	    viewBox
	  });

	  const more = {};

	  if (!inheritViewBox) {
	    more.viewBox = viewBox;
	  }

	  const classes = useUtilityClasses$8(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(SvgIconRoot, _extends$2({
	    as: component,
	    className: clsx(classes.root, className),
	    ownerState: ownerState,
	    focusable: "false",
	    color: htmlColor,
	    "aria-hidden": titleAccess ? undefined : true,
	    role: titleAccess ? 'img' : undefined,
	    ref: ref
	  }, more, other, {
	    children: [children, titleAccess ? /*#__PURE__*/jsxRuntime.jsx("title", {
	      children: titleAccess
	    }) : null]
	  }));
	});
	SvgIcon.muiName = 'SvgIcon';
	var SvgIcon$1 = SvgIcon;

	function createSvgIcon(path, displayName) {
	  const Component = (props, ref) => /*#__PURE__*/jsxRuntime.jsx(SvgIcon$1, _extends$2({
	    "data-testid": "".concat(displayName, "Icon"),
	    ref: ref
	  }, props, {
	    children: path
	  }));

	  Component.muiName = SvgIcon$1.muiName;
	  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
	}

	var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
	  d: "M7 10l5 5 5-5z"
	}), 'ArrowDropDown');

	function GlobalStyles(props) {
	  return /*#__PURE__*/jsxRuntime.jsx(GlobalStyles$1, _extends$2({}, props, {
	    defaultTheme: defaultTheme$2
	  }));
	}

	function getInputBaseUtilityClass(slot) {
	  return generateUtilityClass('MuiInputBase', slot);
	}
	const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
	var inputBaseClasses$1 = inputBaseClasses;

	const _excluded$9 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "startAdornment", "type", "value"];
	const rootOverridesResolver = (props, styles) => {
	  const {
	    ownerState
	  } = props;
	  return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles["color".concat(capitalize(ownerState.color))], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
	};
	const inputOverridesResolver = (props, styles) => {
	  const {
	    ownerState
	  } = props;
	  return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
	};

	const useUtilityClasses$7 = ownerState => {
	  const {
	    classes,
	    color,
	    disabled,
	    error,
	    endAdornment,
	    focused,
	    formControl,
	    fullWidth,
	    hiddenLabel,
	    multiline,
	    size,
	    startAdornment,
	    type
	  } = ownerState;
	  const slots = {
	    root: ['root', "color".concat(capitalize(color)), disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel'],
	    input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd']
	  };
	  return composeClasses(slots, getInputBaseUtilityClass, classes);
	};

	const InputBaseRoot = styled$1('div', {
	  name: 'MuiInputBase',
	  slot: 'Root',
	  overridesResolver: rootOverridesResolver
	})(({
	  theme,
	  ownerState
	}) => _extends$2({}, theme.typography.body1, {
	  color: theme.palette.text.primary,
	  lineHeight: '1.4375em',
	  // 23px
	  boxSizing: 'border-box',
	  // Prevent padding issue with fullWidth.
	  position: 'relative',
	  cursor: 'text',
	  display: 'inline-flex',
	  alignItems: 'center',
	  ["&.".concat(inputBaseClasses$1.disabled)]: {
	    color: theme.palette.text.disabled,
	    cursor: 'default'
	  }
	}, ownerState.multiline && _extends$2({
	  padding: '4px 0 5px'
	}, ownerState.size === 'small' && {
	  paddingTop: 1
	}), ownerState.fullWidth && {
	  width: '100%'
	}));
	const InputBaseComponent = styled$1('input', {
	  name: 'MuiInputBase',
	  slot: 'Input',
	  overridesResolver: inputOverridesResolver
	})(({
	  theme,
	  ownerState
	}) => {
	  const light = theme.palette.mode === 'light';
	  const placeholder = {
	    color: 'currentColor',
	    opacity: light ? 0.42 : 0.5,
	    transition: theme.transitions.create('opacity', {
	      duration: theme.transitions.duration.shorter
	    })
	  };
	  const placeholderHidden = {
	    opacity: '0 !important'
	  };
	  const placeholderVisible = {
	    opacity: light ? 0.42 : 0.5
	  };
	  return _extends$2({
	    font: 'inherit',
	    letterSpacing: 'inherit',
	    color: 'currentColor',
	    padding: '4px 0 5px',
	    border: 0,
	    boxSizing: 'content-box',
	    background: 'none',
	    height: '1.4375em',
	    // Reset 23pxthe native input line-height
	    margin: 0,
	    // Reset for Safari
	    WebkitTapHighlightColor: 'transparent',
	    display: 'block',
	    // Make the flex item shrink with Firefox
	    minWidth: 0,
	    width: '100%',
	    // Fix IE11 width issue
	    animationName: 'mui-auto-fill-cancel',
	    animationDuration: '10ms',
	    '&::-webkit-input-placeholder': placeholder,
	    '&::-moz-placeholder': placeholder,
	    // Firefox 19+
	    '&:-ms-input-placeholder': placeholder,
	    // IE11
	    '&::-ms-input-placeholder': placeholder,
	    // Edge
	    '&:focus': {
	      outline: 0
	    },
	    // Reset Firefox invalid required input style
	    '&:invalid': {
	      boxShadow: 'none'
	    },
	    '&::-webkit-search-decoration': {
	      // Remove the padding when type=search.
	      WebkitAppearance: 'none'
	    },
	    // Show and hide the placeholder logic
	    ["label[data-shrink=false] + .".concat(inputBaseClasses$1.formControl, " &")]: {
	      '&::-webkit-input-placeholder': placeholderHidden,
	      '&::-moz-placeholder': placeholderHidden,
	      // Firefox 19+
	      '&:-ms-input-placeholder': placeholderHidden,
	      // IE11
	      '&::-ms-input-placeholder': placeholderHidden,
	      // Edge
	      '&:focus::-webkit-input-placeholder': placeholderVisible,
	      '&:focus::-moz-placeholder': placeholderVisible,
	      // Firefox 19+
	      '&:focus:-ms-input-placeholder': placeholderVisible,
	      // IE11
	      '&:focus::-ms-input-placeholder': placeholderVisible // Edge

	    },
	    ["&.".concat(inputBaseClasses$1.disabled)]: {
	      opacity: 1,
	      // Reset iOS opacity
	      WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug

	    },
	    '&:-webkit-autofill': {
	      animationDuration: '5000s',
	      animationName: 'mui-auto-fill'
	    }
	  }, ownerState.size === 'small' && {
	    paddingTop: 1
	  }, ownerState.multiline && {
	    height: 'auto',
	    resize: 'none',
	    padding: 0,
	    paddingTop: 0
	  }, ownerState.type === 'search' && {
	    // Improve type search style.
	    MozAppearance: 'textfield'
	  });
	});

	const inputGlobalStyles = /*#__PURE__*/jsxRuntime.jsx(GlobalStyles, {
	  styles: {
	    '@keyframes mui-auto-fill': {
	      from: {
	        display: 'block'
	      }
	    },
	    '@keyframes mui-auto-fill-cancel': {
	      from: {
	        display: 'block'
	      }
	    }
	  }
	});
	/**
	 * `InputBase` contains as few styles as possible.
	 * It aims to be a simple building block for creating an input.
	 * It contains a load of style reset and some state logic.
	 */


	const InputBase = /*#__PURE__*/react.forwardRef(function InputBase(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiInputBase'
	  });

	  const {
	    'aria-describedby': ariaDescribedby,
	    autoComplete,
	    autoFocus,
	    className,
	    components = {},
	    componentsProps = {},
	    defaultValue,
	    disabled,
	    disableInjectingGlobalStyles,
	    endAdornment,
	    fullWidth = false,
	    id,
	    inputComponent = 'input',
	    inputProps: inputPropsProp = {},
	    inputRef: inputRefProp,
	    maxRows,
	    minRows,
	    multiline = false,
	    name,
	    onBlur,
	    onChange,
	    onClick,
	    onFocus,
	    onKeyDown,
	    onKeyUp,
	    placeholder,
	    readOnly,
	    renderSuffix,
	    rows,
	    startAdornment,
	    type = 'text',
	    value: valueProp
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$9);

	  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
	  const {
	    current: isControlled
	  } = react.useRef(value != null);
	  const inputRef = react.useRef();
	  const handleInputRefWarning = react.useCallback(instance => {
	  }, []);
	  const handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
	  const handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
	  const handleInputRef = useForkRef(inputRef, handleInputRefProp);
	  const [focused, setFocused] = react.useState(false);
	  const muiFormControl = useFormControl();

	  const fcs = formControlState({
	    props,
	    muiFormControl,
	    states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
	  });
	  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
	  // We need to book keep the focused state manually.

	  react.useEffect(() => {
	    if (!muiFormControl && disabled && focused) {
	      setFocused(false);

	      if (onBlur) {
	        onBlur();
	      }
	    }
	  }, [muiFormControl, disabled, focused, onBlur]);
	  const onFilled = muiFormControl && muiFormControl.onFilled;
	  const onEmpty = muiFormControl && muiFormControl.onEmpty;
	  const checkDirty = react.useCallback(obj => {
	    if (isFilled(obj)) {
	      if (onFilled) {
	        onFilled();
	      }
	    } else if (onEmpty) {
	      onEmpty();
	    }
	  }, [onFilled, onEmpty]);
	  useEnhancedEffect$1(() => {
	    if (isControlled) {
	      checkDirty({
	        value
	      });
	    }
	  }, [value, checkDirty, isControlled]);

	  const handleFocus = event => {
	    // Fix a bug with IE11 where the focus/blur events are triggered
	    // while the component is disabled.
	    if (fcs.disabled) {
	      event.stopPropagation();
	      return;
	    }

	    if (onFocus) {
	      onFocus(event);
	    }

	    if (inputPropsProp.onFocus) {
	      inputPropsProp.onFocus(event);
	    }

	    if (muiFormControl && muiFormControl.onFocus) {
	      muiFormControl.onFocus(event);
	    } else {
	      setFocused(true);
	    }
	  };

	  const handleBlur = event => {
	    if (onBlur) {
	      onBlur(event);
	    }

	    if (inputPropsProp.onBlur) {
	      inputPropsProp.onBlur(event);
	    }

	    if (muiFormControl && muiFormControl.onBlur) {
	      muiFormControl.onBlur(event);
	    } else {
	      setFocused(false);
	    }
	  };

	  const handleChange = (event, ...args) => {
	    if (!isControlled) {
	      const element = event.target || inputRef.current;

	      if (element == null) {
	        throw new Error(formatMuiErrorMessage(1));
	      }

	      checkDirty({
	        value: element.value
	      });
	    }

	    if (inputPropsProp.onChange) {
	      inputPropsProp.onChange(event, ...args);
	    } // Perform in the willUpdate


	    if (onChange) {
	      onChange(event, ...args);
	    }
	  }; // Check the input state on mount, in case it was filled by the user
	  // or auto filled by the browser before the hydration (for SSR).


	  react.useEffect(() => {
	    checkDirty(inputRef.current); // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

	  const handleClick = event => {
	    if (inputRef.current && event.currentTarget === event.target) {
	      inputRef.current.focus();
	    }

	    if (onClick) {
	      onClick(event);
	    }
	  };

	  let InputComponent = inputComponent;
	  let inputProps = inputPropsProp;

	  if (multiline && InputComponent === 'input') {
	    if (rows) {

	      inputProps = _extends$2({
	        type: undefined,
	        minRows: rows,
	        maxRows: rows
	      }, inputProps);
	    } else {
	      inputProps = _extends$2({
	        type: undefined,
	        maxRows,
	        minRows
	      }, inputProps);
	    }

	    InputComponent = TextareaAutosize$1;
	  }

	  const handleAutoFill = event => {
	    // Provide a fake value as Chrome might not let you access it for security reasons.
	    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
	      value: 'x'
	    });
	  };

	  react.useEffect(() => {
	    if (muiFormControl) {
	      muiFormControl.setAdornedStart(Boolean(startAdornment));
	    }
	  }, [muiFormControl, startAdornment]);

	  const ownerState = _extends$2({}, props, {
	    color: fcs.color || 'primary',
	    disabled: fcs.disabled,
	    endAdornment,
	    error: fcs.error,
	    focused: fcs.focused,
	    formControl: muiFormControl,
	    fullWidth,
	    hiddenLabel: fcs.hiddenLabel,
	    multiline,
	    size: fcs.size,
	    startAdornment,
	    type
	  });

	  const classes = useUtilityClasses$7(ownerState);
	  const Root = components.Root || InputBaseRoot;
	  const rootProps = componentsProps.root || {};
	  const Input = components.Input || InputBaseComponent;
	  inputProps = _extends$2({}, inputProps, componentsProps.input);
	  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /*#__PURE__*/jsxRuntime.jsxs(Root, _extends$2({}, rootProps, !isHostComponent(Root) && {
	      ownerState: _extends$2({}, ownerState, rootProps.ownerState)
	    }, {
	      ref: ref,
	      onClick: handleClick
	    }, other, {
	      className: clsx(classes.root, rootProps.className, className),
	      children: [startAdornment, /*#__PURE__*/jsxRuntime.jsx(FormControlContext$1.Provider, {
	        value: null,
	        children: /*#__PURE__*/jsxRuntime.jsx(Input, _extends$2({
	          ownerState: ownerState,
	          "aria-invalid": fcs.error,
	          "aria-describedby": ariaDescribedby,
	          autoComplete: autoComplete,
	          autoFocus: autoFocus,
	          defaultValue: defaultValue,
	          disabled: fcs.disabled,
	          id: id,
	          onAnimationStart: handleAutoFill,
	          name: name,
	          placeholder: placeholder,
	          readOnly: readOnly,
	          required: fcs.required,
	          rows: rows,
	          value: value,
	          onKeyDown: onKeyDown,
	          onKeyUp: onKeyUp,
	          type: type
	        }, inputProps, !isHostComponent(Input) && {
	          as: InputComponent,
	          ownerState: _extends$2({}, ownerState, inputProps.ownerState)
	        }, {
	          ref: handleInputRef,
	          className: clsx(classes.input, inputProps.className),
	          onBlur: handleBlur,
	          onChange: handleChange,
	          onFocus: handleFocus
	        }))
	      }), endAdornment, renderSuffix ? renderSuffix(_extends$2({}, fcs, {
	        startAdornment
	      })) : null]
	    }))]
	  });
	});
	var InputBase$1 = InputBase;

	function getInputUtilityClass(slot) {
	  return generateUtilityClass('MuiInput', slot);
	}

	const inputClasses = _extends$2({}, inputBaseClasses$1, generateUtilityClasses('MuiInput', ['root', 'underline', 'input']));

	var inputClasses$1 = inputClasses;

	const _excluded$8 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "type"];

	const useUtilityClasses$6 = ownerState => {
	  const {
	    classes,
	    disableUnderline
	  } = ownerState;
	  const slots = {
	    root: ['root', !disableUnderline && 'underline'],
	    input: ['input']
	  };
	  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const InputRoot = styled$1(InputBaseRoot, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiInput',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  const light = theme.palette.mode === 'light';
	  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
	  return _extends$2({
	    position: 'relative'
	  }, ownerState.formControl && {
	    'label + &': {
	      marginTop: 16
	    }
	  }, !ownerState.disableUnderline && {
	    '&:after': {
	      borderBottom: "2px solid ".concat(theme.palette[ownerState.color].main),
	      left: 0,
	      bottom: 0,
	      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
	      content: '""',
	      position: 'absolute',
	      right: 0,
	      transform: 'scaleX(0)',
	      transition: theme.transitions.create('transform', {
	        duration: theme.transitions.duration.shorter,
	        easing: theme.transitions.easing.easeOut
	      }),
	      pointerEvents: 'none' // Transparent to the hover style.

	    },
	    ["&.".concat(inputClasses$1.focused, ":after")]: {
	      // translateX(0) is a workaround for Safari transform scale bug
	      // See https://github.com/mui/material-ui/issues/31766
	      transform: 'scaleX(1) translateX(0)'
	    },
	    ["&.".concat(inputClasses$1.error, ":after")]: {
	      borderBottomColor: theme.palette.error.main,
	      transform: 'scaleX(1)' // error is always underlined in red

	    },
	    '&:before': {
	      borderBottom: "1px solid ".concat(bottomLineColor),
	      left: 0,
	      bottom: 0,
	      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
	      content: '"\\00a0"',
	      position: 'absolute',
	      right: 0,
	      transition: theme.transitions.create('border-bottom-color', {
	        duration: theme.transitions.duration.shorter
	      }),
	      pointerEvents: 'none' // Transparent to the hover style.

	    },
	    ["&:hover:not(.".concat(inputClasses$1.disabled, "):before")]: {
	      borderBottom: "2px solid ".concat(theme.palette.text.primary),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        borderBottom: "1px solid ".concat(bottomLineColor)
	      }
	    },
	    ["&.".concat(inputClasses$1.disabled, ":before")]: {
	      borderBottomStyle: 'dotted'
	    }
	  });
	});
	const InputInput = styled$1(InputBaseComponent, {
	  name: 'MuiInput',
	  slot: 'Input',
	  overridesResolver: inputOverridesResolver
	})({});
	const Input = /*#__PURE__*/react.forwardRef(function Input(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiInput'
	  });

	  const {
	    disableUnderline,
	    components = {},
	    componentsProps: componentsPropsProp,
	    fullWidth = false,
	    inputComponent = 'input',
	    multiline = false,
	    type = 'text'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$8);

	  const classes = useUtilityClasses$6(props);
	  const ownerState = {
	    disableUnderline
	  };
	  const inputComponentsProps = {
	    root: {
	      ownerState
	    }
	  };
	  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, inputComponentsProps) : inputComponentsProps;
	  return /*#__PURE__*/jsxRuntime.jsx(InputBase$1, _extends$2({
	    components: _extends$2({
	      Root: InputRoot,
	      Input: InputInput
	    }, components),
	    componentsProps: componentsProps,
	    fullWidth: fullWidth,
	    inputComponent: inputComponent,
	    multiline: multiline,
	    ref: ref,
	    type: type
	  }, other, {
	    classes: classes
	  }));
	});
	Input.muiName = 'Input';
	var Input$1 = Input;

	function getFilledInputUtilityClass(slot) {
	  return generateUtilityClass('MuiFilledInput', slot);
	}

	const filledInputClasses = _extends$2({}, inputBaseClasses$1, generateUtilityClasses('MuiFilledInput', ['root', 'underline', 'input']));

	var filledInputClasses$1 = filledInputClasses;

	const _excluded$7 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "type"];

	const useUtilityClasses$5 = ownerState => {
	  const {
	    classes,
	    disableUnderline
	  } = ownerState;
	  const slots = {
	    root: ['root', !disableUnderline && 'underline'],
	    input: ['input']
	  };
	  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const FilledInputRoot = styled$1(InputBaseRoot, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiFilledInput',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  const light = theme.palette.mode === 'light';
	  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
	  const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
	  return _extends$2({
	    position: 'relative',
	    backgroundColor,
	    borderTopLeftRadius: theme.shape.borderRadius,
	    borderTopRightRadius: theme.shape.borderRadius,
	    transition: theme.transitions.create('background-color', {
	      duration: theme.transitions.duration.shorter,
	      easing: theme.transitions.easing.easeOut
	    }),
	    '&:hover': {
	      backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor
	      }
	    },
	    ["&.".concat(filledInputClasses$1.focused)]: {
	      backgroundColor
	    },
	    ["&.".concat(filledInputClasses$1.disabled)]: {
	      backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
	    }
	  }, !ownerState.disableUnderline && {
	    '&:after': {
	      borderBottom: "2px solid ".concat(theme.palette[ownerState.color].main),
	      left: 0,
	      bottom: 0,
	      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
	      content: '""',
	      position: 'absolute',
	      right: 0,
	      transform: 'scaleX(0)',
	      transition: theme.transitions.create('transform', {
	        duration: theme.transitions.duration.shorter,
	        easing: theme.transitions.easing.easeOut
	      }),
	      pointerEvents: 'none' // Transparent to the hover style.

	    },
	    ["&.".concat(filledInputClasses$1.focused, ":after")]: {
	      // translateX(0) is a workaround for Safari transform scale bug
	      // See https://github.com/mui/material-ui/issues/31766
	      transform: 'scaleX(1) translateX(0)'
	    },
	    ["&.".concat(filledInputClasses$1.error, ":after")]: {
	      borderBottomColor: theme.palette.error.main,
	      transform: 'scaleX(1)' // error is always underlined in red

	    },
	    '&:before': {
	      borderBottom: "1px solid ".concat(bottomLineColor),
	      left: 0,
	      bottom: 0,
	      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
	      content: '"\\00a0"',
	      position: 'absolute',
	      right: 0,
	      transition: theme.transitions.create('border-bottom-color', {
	        duration: theme.transitions.duration.shorter
	      }),
	      pointerEvents: 'none' // Transparent to the hover style.

	    },
	    ["&:hover:not(.".concat(filledInputClasses$1.disabled, "):before")]: {
	      borderBottom: "1px solid ".concat(theme.palette.text.primary)
	    },
	    ["&.".concat(filledInputClasses$1.disabled, ":before")]: {
	      borderBottomStyle: 'dotted'
	    }
	  }, ownerState.startAdornment && {
	    paddingLeft: 12
	  }, ownerState.endAdornment && {
	    paddingRight: 12
	  }, ownerState.multiline && _extends$2({
	    padding: '25px 12px 8px'
	  }, ownerState.size === 'small' && {
	    paddingTop: 21,
	    paddingBottom: 4
	  }, ownerState.hiddenLabel && {
	    paddingTop: 16,
	    paddingBottom: 17
	  }));
	});
	const FilledInputInput = styled$1(InputBaseComponent, {
	  name: 'MuiFilledInput',
	  slot: 'Input',
	  overridesResolver: inputOverridesResolver
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  paddingTop: 25,
	  paddingRight: 12,
	  paddingBottom: 8,
	  paddingLeft: 12,
	  '&:-webkit-autofill': {
	    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
	    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
	    caretColor: theme.palette.mode === 'light' ? null : '#fff',
	    borderTopLeftRadius: 'inherit',
	    borderTopRightRadius: 'inherit'
	  }
	}, ownerState.size === 'small' && {
	  paddingTop: 21,
	  paddingBottom: 4
	}, ownerState.hiddenLabel && {
	  paddingTop: 16,
	  paddingBottom: 17
	}, ownerState.multiline && {
	  paddingTop: 0,
	  paddingBottom: 0,
	  paddingLeft: 0,
	  paddingRight: 0
	}, ownerState.startAdornment && {
	  paddingLeft: 0
	}, ownerState.endAdornment && {
	  paddingRight: 0
	}, ownerState.hiddenLabel && ownerState.size === 'small' && {
	  paddingTop: 8,
	  paddingBottom: 9
	}));
	const FilledInput = /*#__PURE__*/react.forwardRef(function FilledInput(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiFilledInput'
	  });

	  const {
	    components = {},
	    componentsProps: componentsPropsProp,
	    fullWidth = false,
	    // declare here to prevent spreading to DOM
	    inputComponent = 'input',
	    multiline = false,
	    type = 'text'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$7);

	  const ownerState = _extends$2({}, props, {
	    fullWidth,
	    inputComponent,
	    multiline,
	    type
	  });

	  const classes = useUtilityClasses$5(props);
	  const filledInputComponentsProps = {
	    root: {
	      ownerState
	    },
	    input: {
	      ownerState
	    }
	  };
	  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
	  return /*#__PURE__*/jsxRuntime.jsx(InputBase$1, _extends$2({
	    components: _extends$2({
	      Root: FilledInputRoot,
	      Input: FilledInputInput
	    }, components),
	    componentsProps: componentsProps,
	    fullWidth: fullWidth,
	    inputComponent: inputComponent,
	    multiline: multiline,
	    ref: ref,
	    type: type
	  }, other, {
	    classes: classes
	  }));
	});
	FilledInput.muiName = 'Input';
	var FilledInput$1 = FilledInput;

	var _span;

	const _excluded$6 = ["children", "classes", "className", "label", "notched"];
	const NotchedOutlineRoot$1 = styled$1('fieldset')({
	  textAlign: 'left',
	  position: 'absolute',
	  bottom: 0,
	  right: 0,
	  top: -5,
	  left: 0,
	  margin: 0,
	  padding: '0 8px',
	  pointerEvents: 'none',
	  borderRadius: 'inherit',
	  borderStyle: 'solid',
	  borderWidth: 1,
	  overflow: 'hidden',
	  minWidth: '0%'
	});
	const NotchedOutlineLegend = styled$1('legend')(({
	  ownerState,
	  theme
	}) => _extends$2({
	  float: 'unset',
	  // Fix conflict with bootstrap
	  overflow: 'hidden'
	}, !ownerState.withLabel && {
	  padding: 0,
	  lineHeight: '11px',
	  // sync with `height` in `legend` styles
	  transition: theme.transitions.create('width', {
	    duration: 150,
	    easing: theme.transitions.easing.easeOut
	  })
	}, ownerState.withLabel && _extends$2({
	  display: 'block',
	  // Fix conflict with normalize.css and sanitize.css
	  width: 'auto',
	  // Fix conflict with bootstrap
	  padding: 0,
	  height: 11,
	  // sync with `lineHeight` in `legend` styles
	  fontSize: '0.75em',
	  visibility: 'hidden',
	  maxWidth: 0.01,
	  transition: theme.transitions.create('max-width', {
	    duration: 50,
	    easing: theme.transitions.easing.easeOut
	  }),
	  whiteSpace: 'nowrap',
	  '& > span': {
	    paddingLeft: 5,
	    paddingRight: 5,
	    display: 'inline-block',
	    opacity: 0,
	    visibility: 'visible'
	  }
	}, ownerState.notched && {
	  maxWidth: '100%',
	  transition: theme.transitions.create('max-width', {
	    duration: 100,
	    easing: theme.transitions.easing.easeOut,
	    delay: 50
	  })
	})));
	/**
	 * @ignore - internal component.
	 */

	function NotchedOutline(props) {
	  const {
	    className,
	    label,
	    notched
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$6);

	  const withLabel = label != null && label !== '';

	  const ownerState = _extends$2({}, props, {
	    notched,
	    withLabel
	  });

	  return /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineRoot$1, _extends$2({
	    "aria-hidden": true,
	    className: className,
	    ownerState: ownerState
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineLegend, {
	      ownerState: ownerState,
	      children: withLabel ? /*#__PURE__*/jsxRuntime.jsx("span", {
	        children: label
	      }) : // notranslate needed while Google Translate will not fix zero-width space issue
	      _span || (_span = /*#__PURE__*/jsxRuntime.jsx("span", {
	        className: "notranslate",
	        children: "\u200B"
	      }))
	    })
	  }));
	}

	function getOutlinedInputUtilityClass(slot) {
	  return generateUtilityClass('MuiOutlinedInput', slot);
	}

	const outlinedInputClasses = _extends$2({}, inputBaseClasses$1, generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));

	var outlinedInputClasses$1 = outlinedInputClasses;

	const _excluded$5 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "type"];

	const useUtilityClasses$4 = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root'],
	    notchedOutline: ['notchedOutline'],
	    input: ['input']
	  };
	  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const OutlinedInputRoot = styled$1(InputBaseRoot, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiOutlinedInput',
	  slot: 'Root',
	  overridesResolver: rootOverridesResolver
	})(({
	  theme,
	  ownerState
	}) => {
	  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
	  return _extends$2({
	    position: 'relative',
	    borderRadius: theme.shape.borderRadius,
	    ["&:hover .".concat(outlinedInputClasses$1.notchedOutline)]: {
	      borderColor: theme.palette.text.primary
	    },
	    // Reset on touch devices, it doesn't add specificity
	    '@media (hover: none)': {
	      ["&:hover .".concat(outlinedInputClasses$1.notchedOutline)]: {
	        borderColor
	      }
	    },
	    ["&.".concat(outlinedInputClasses$1.focused, " .").concat(outlinedInputClasses$1.notchedOutline)]: {
	      borderColor: theme.palette[ownerState.color].main,
	      borderWidth: 2
	    },
	    ["&.".concat(outlinedInputClasses$1.error, " .").concat(outlinedInputClasses$1.notchedOutline)]: {
	      borderColor: theme.palette.error.main
	    },
	    ["&.".concat(outlinedInputClasses$1.disabled, " .").concat(outlinedInputClasses$1.notchedOutline)]: {
	      borderColor: theme.palette.action.disabled
	    }
	  }, ownerState.startAdornment && {
	    paddingLeft: 14
	  }, ownerState.endAdornment && {
	    paddingRight: 14
	  }, ownerState.multiline && _extends$2({
	    padding: '16.5px 14px'
	  }, ownerState.size === 'small' && {
	    padding: '8.5px 14px'
	  }));
	});
	const NotchedOutlineRoot = styled$1(NotchedOutline, {
	  name: 'MuiOutlinedInput',
	  slot: 'NotchedOutline',
	  overridesResolver: (props, styles) => styles.notchedOutline
	})(({
	  theme
	}) => ({
	  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
	}));
	const OutlinedInputInput = styled$1(InputBaseComponent, {
	  name: 'MuiOutlinedInput',
	  slot: 'Input',
	  overridesResolver: inputOverridesResolver
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  padding: '16.5px 14px',
	  '&:-webkit-autofill': {
	    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
	    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
	    caretColor: theme.palette.mode === 'light' ? null : '#fff',
	    borderRadius: 'inherit'
	  }
	}, ownerState.size === 'small' && {
	  padding: '8.5px 14px'
	}, ownerState.multiline && {
	  padding: 0
	}, ownerState.startAdornment && {
	  paddingLeft: 0
	}, ownerState.endAdornment && {
	  paddingRight: 0
	}));
	const OutlinedInput = /*#__PURE__*/react.forwardRef(function OutlinedInput(inProps, ref) {
	  var _React$Fragment;

	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiOutlinedInput'
	  });

	  const {
	    components = {},
	    fullWidth = false,
	    inputComponent = 'input',
	    label,
	    multiline = false,
	    notched,
	    type = 'text'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$5);

	  const classes = useUtilityClasses$4(props);
	  const muiFormControl = useFormControl();
	  const fcs = formControlState({
	    props,
	    muiFormControl,
	    states: ['required']
	  });
	  return /*#__PURE__*/jsxRuntime.jsx(InputBase$1, _extends$2({
	    components: _extends$2({
	      Root: OutlinedInputRoot,
	      Input: OutlinedInputInput
	    }, components),
	    renderSuffix: state => /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineRoot, {
	      className: classes.notchedOutline,
	      label: label != null && label !== '' && fcs.required ? _React$Fragment || (_React$Fragment = /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	        children: [label, "\xA0", '*']
	      })) : label,
	      notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
	    }),
	    fullWidth: fullWidth,
	    inputComponent: inputComponent,
	    multiline: multiline,
	    ref: ref,
	    type: type
	  }, other, {
	    classes: _extends$2({}, classes, {
	      notchedOutline: null
	    })
	  }));
	});
	OutlinedInput.muiName = 'Input';
	var OutlinedInput$1 = OutlinedInput;

	var _StyledInput, _StyledFilledInput;

	const _excluded$4 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];

	const useUtilityClasses$3 = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  return classes;
	};

	const styledRootConfig = {
	  name: 'MuiSelect',
	  overridesResolver: (props, styles) => styles.root,
	  shouldForwardProp: prop => rootShouldForwardProp(prop) && prop !== 'variant',
	  slot: 'Root'
	};
	const StyledInput = styled$1(Input$1, styledRootConfig)('');
	const StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)('');
	const StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)('');
	const Select = /*#__PURE__*/react.forwardRef(function Select(inProps, ref) {
	  const props = useThemeProps({
	    name: 'MuiSelect',
	    props: inProps
	  });

	  const {
	    autoWidth = false,
	    children,
	    classes: classesProp = {},
	    className,
	    defaultOpen = false,
	    displayEmpty = false,
	    IconComponent = ArrowDropDownIcon,
	    id,
	    input,
	    inputProps,
	    label,
	    labelId,
	    MenuProps,
	    multiple = false,
	    native = false,
	    onClose,
	    onOpen,
	    open,
	    renderValue,
	    SelectDisplayProps,
	    variant: variantProp = 'outlined'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$4);

	  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
	  const muiFormControl = useFormControl();
	  const fcs = formControlState({
	    props,
	    muiFormControl,
	    states: ['variant']
	  });
	  const variant = fcs.variant || variantProp;
	  const InputComponent = input || {
	    standard: _StyledInput || (_StyledInput = /*#__PURE__*/jsxRuntime.jsx(StyledInput, {})),
	    outlined: /*#__PURE__*/jsxRuntime.jsx(StyledOutlinedInput, {
	      label: label
	    }),
	    filled: _StyledFilledInput || (_StyledFilledInput = /*#__PURE__*/jsxRuntime.jsx(StyledFilledInput, {}))
	  }[variant];

	  const ownerState = _extends$2({}, props, {
	    variant,
	    classes: classesProp
	  });

	  const classes = useUtilityClasses$3(ownerState);
	  const inputComponentRef = useForkRef(ref, InputComponent.ref);
	  return /*#__PURE__*/react.cloneElement(InputComponent, _extends$2({
	    // Most of the logic is implemented in `SelectInput`.
	    // The `Select` component is a simple API wrapper to expose something better to play with.
	    inputComponent,
	    inputProps: _extends$2({
	      children,
	      IconComponent,
	      variant,
	      type: undefined,
	      // We render a select. We can ignore the type provided by the `Input`.
	      multiple
	    }, native ? {
	      id
	    } : {
	      autoWidth,
	      defaultOpen,
	      displayEmpty,
	      labelId,
	      MenuProps,
	      onClose,
	      onOpen,
	      open,
	      renderValue,
	      SelectDisplayProps: _extends$2({
	        id
	      }, SelectDisplayProps)
	    }, inputProps, {
	      classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
	    }, input ? input.props.inputProps : {})
	  }, multiple && native && variant === 'outlined' ? {
	    notched: true
	  } : {}, {
	    ref: inputComponentRef,
	    className: clsx(InputComponent.props.className, className),
	    variant
	  }, other));
	});
	Select.muiName = 'Select';
	var Select$1 = Select;

	const Map$1 = () => {
	  const [mapProvider, setMapProvider] = react.useState('OpenTopoMap');

	  const handleChange = event => {
	    setMapProvider(event.target.value);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [mapProvider === 'Windy' ? /*#__PURE__*/jsxRuntime.jsx("iframe", {
	      width: "1040",
	      height: "750",
	      src: "https://embed.windy.com/embed2.html?lat=36.031&lon=-89.868&detailLat=35.309&detailLon=-106.529&width=1040&height=750&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=default&radarRange=-1"
	    }) : '', mapProvider === 'VFRMap.com' ? /*#__PURE__*/jsxRuntime.jsx("iframe", {
	      width: "1040",
	      height: "750",
	      src: "http://vfrmap.com/?type=vfrc&lat=42.5&lon=-120.5&zoom=10&api_key=1234"
	    }) : '', mapProvider === 'OpenTopoMap' ? /*#__PURE__*/jsxRuntime.jsx("iframe", {
	      width: "1040",
	      height: "750",
	      src: "https://opentopomap.org/#map=6/38.505/-84.639"
	    }) : '', /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        backgroundColor: 'white',
	        left: '0',
	        top: '300',
	        minWidth: 80,
	        height: 55,
	        borderRadius: 1,
	        paddingTop: 1,
	        color: 'white'
	      },
	      children: /*#__PURE__*/jsxRuntime.jsxs(FormControl$1, {
	        fullWidth: true,
	        children: [/*#__PURE__*/jsxRuntime.jsx(InputLabel$1, {
	          id: "demo-simple-select-label",
	          children: "Map Provider"
	        }), /*#__PURE__*/jsxRuntime.jsxs(Select$1, {
	          value: mapProvider,
	          label: "Map Provider",
	          onChange: handleChange,
	          children: [/*#__PURE__*/jsxRuntime.jsx(MenuItem$1, {
	            value: 'Windy',
	            children: "Windy"
	          }), /*#__PURE__*/jsxRuntime.jsx(MenuItem$1, {
	            value: 'OpenTopoMap',
	            children: "OpenTopoMap"
	          }), /*#__PURE__*/jsxRuntime.jsx(MenuItem$1, {
	            value: 'VFRMap.com',
	            children: "VFRMap.com"
	          })]
	        })]
	      })
	    })]
	  });
	};

	const _excluded$3 = ["component", "direction", "spacing", "divider", "children"];

	function joinChildren(children, separator) {
	  const childrenArray = react.Children.toArray(children).filter(Boolean);
	  return childrenArray.reduce((output, child, index) => {
	    output.push(child);

	    if (index < childrenArray.length - 1) {
	      output.push( /*#__PURE__*/react.cloneElement(separator, {
	        key: "separator-".concat(index)
	      }));
	    }

	    return output;
	  }, []);
	}

	const getSideFromDirection = direction => {
	  return {
	    row: 'Left',
	    'row-reverse': 'Right',
	    column: 'Top',
	    'column-reverse': 'Bottom'
	  }[direction];
	};

	const style = ({
	  ownerState,
	  theme
	}) => {
	  let styles = _extends$2({
	    display: 'flex'
	  }, handleBreakpoints({
	    theme
	  }, resolveBreakpointValues({
	    values: ownerState.direction,
	    breakpoints: theme.breakpoints.values
	  }), propValue => ({
	    flexDirection: propValue
	  })));

	  if (ownerState.spacing) {
	    const transformer = createUnarySpacing(theme);
	    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
	      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
	        acc[breakpoint] = true;
	      }

	      return acc;
	    }, {});
	    const directionValues = resolveBreakpointValues({
	      values: ownerState.direction,
	      base
	    });
	    const spacingValues = resolveBreakpointValues({
	      values: ownerState.spacing,
	      base
	    });

	    const styleFromPropValue = (propValue, breakpoint) => {
	      return {
	        '& > :not(style) + :not(style)': {
	          margin: 0,
	          ["margin".concat(getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction))]: getValue(transformer, propValue)
	        }
	      };
	    };

	    styles = deepmerge(styles, handleBreakpoints({
	      theme
	    }, spacingValues, styleFromPropValue));
	  }

	  return styles;
	};
	const StackRoot = styled$1('div', {
	  name: 'MuiStack',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    return [styles.root];
	  }
	})(style);
	const Stack = /*#__PURE__*/react.forwardRef(function Stack(inProps, ref) {
	  const themeProps = useThemeProps({
	    props: inProps,
	    name: 'MuiStack'
	  });
	  const props = extendSxProp(themeProps);

	  const {
	    component = 'div',
	    direction = 'column',
	    spacing = 0,
	    divider,
	    children
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$3);

	  const ownerState = {
	    direction,
	    spacing
	  };
	  return /*#__PURE__*/jsxRuntime.jsx(StackRoot, _extends$2({
	    as: component,
	    ownerState: ownerState,
	    ref: ref
	  }, other, {
	    children: divider ? joinChildren(children, divider) : children
	  }));
	});
	var Stack$1 = Stack;

	function getContainerUtilityClass(slot) {
	  return generateUtilityClass('MuiContainer', slot);
	}
	generateUtilityClasses('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);

	const _excluded$2 = ["className", "component", "disableGutters", "fixed", "maxWidth"];

	const useUtilityClasses$2 = ownerState => {
	  const {
	    classes,
	    fixed,
	    disableGutters,
	    maxWidth
	  } = ownerState;
	  const slots = {
	    root: ['root', maxWidth && "maxWidth".concat(capitalize(String(maxWidth))), fixed && 'fixed', disableGutters && 'disableGutters']
	  };
	  return composeClasses(slots, getContainerUtilityClass, classes);
	};

	const ContainerRoot = styled$1('div', {
	  name: 'MuiContainer',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles["maxWidth".concat(capitalize(String(ownerState.maxWidth)))], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  width: '100%',
	  marginLeft: 'auto',
	  boxSizing: 'border-box',
	  marginRight: 'auto',
	  display: 'block'
	}, !ownerState.disableGutters && {
	  paddingLeft: theme.spacing(2),
	  paddingRight: theme.spacing(2),
	  [theme.breakpoints.up('sm')]: {
	    paddingLeft: theme.spacing(3),
	    paddingRight: theme.spacing(3)
	  }
	}), ({
	  theme,
	  ownerState
	}) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
	  const value = theme.breakpoints.values[breakpoint];

	  if (value !== 0) {
	    acc[theme.breakpoints.up(breakpoint)] = {
	      maxWidth: "".concat(value).concat(theme.breakpoints.unit)
	    };
	  }

	  return acc;
	}, {}), ({
	  theme,
	  ownerState
	}) => _extends$2({}, ownerState.maxWidth === 'xs' && {
	  [theme.breakpoints.up('xs')]: {
	    maxWidth: Math.max(theme.breakpoints.values.xs, 444)
	  }
	}, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
	  [theme.breakpoints.up(ownerState.maxWidth)]: {
	    maxWidth: "".concat(theme.breakpoints.values[ownerState.maxWidth]).concat(theme.breakpoints.unit)
	  }
	}));
	const Container = /*#__PURE__*/react.forwardRef(function Container(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiContainer'
	  });

	  const {
	    className,
	    component = 'div',
	    disableGutters = false,
	    fixed = false,
	    maxWidth = 'lg'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$2);

	  const ownerState = _extends$2({}, props, {
	    component,
	    disableGutters,
	    fixed,
	    maxWidth
	  });

	  const classes = useUtilityClasses$2(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(ContainerRoot, _extends$2({
	    as: component,
	    ownerState: ownerState,
	    className: clsx(classes.root, className),
	    ref: ref
	  }, other));
	});
	var Container$1 = Container;

	const Airctaft = () => {
	  const [fireGun, setFireGun] = useSimVar('L:EFFECT_GUN', 'Bool');
	  const [fireRocket, setFireRocket] = useSimVar('L:ROCKET_anim', 'Bool');
	  const [fireFlare, setFireFlare] = useSimVar('L:EFFECT_FLARE', 'Bool');
	  const [lift, setLift] = useSimVar('L:Winch_EXT', 'bool');
	  const [skis, setSkis] = useSimVar('L:Skis', 'bool');
	  const [modelType, setModelType] = useSimVar('L:MODEL_TYPE', 'enum');
	  const [probe, setProbe] = useSimVar('L:ADDITIONSVIS', 'enum');
	  const [rearDoorL, setRearDoorL] = useSimVar('L:DOORS_OPEN_REAR_L', 'bool');
	  const [rearDoorR, setRearDoorR] = useSimVar('L:DOORS_OPEN_REAR_R', 'bool');
	  const [doorR, setDoorR] = useSimVar('L:FR_ANIM', 'bool');
	  const [doorL, setDoorL] = useSimVar('L:FL_ANIM', 'bool');
	  useSimVar('L:PART1', 'bool');
	  const [gunnerDoor, setGunnerDoor] = useSimVar('L:PART2', 'bool');
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    className: "aircraftContainer",
	    children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	      style: {
	        marginLeft: 15,
	        color: '#1B93FF'
	      },
	      children: "Aircraft Customization"
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 200,
	        height: 400,
	        backgroundColor: '16161E',
	        borderRadius: 4,
	        left: 5,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        textAlign: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsxs(Container$1, {
	        maxWidth: "sm",
	        children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	          children: "Weapons"
	        }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          spacing: 4,
	          children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onMouseDown: () => setFireRocket(true),
	            onMouseUp: () => setFireRocket(false),
	            onMouseLeave: () => setFireRocket(false),
	            color: "error",
	            variant: "outlined",
	            children: "Fire Missile"
	          }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onMouseDown: () => setFireGun(true),
	            onMouseUp: () => setFireGun(false),
	            onMouseLeave: () => setFireGun(false),
	            color: "error",
	            variant: "outlined",
	            children: "Fire Gun"
	          }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onMouseDown: () => setFireFlare(true),
	            onMouseUp: () => setFireFlare(false),
	            onMouseLeave: () => setFireFlare(false),
	            color: "error",
	            variant: "outlined",
	            children: "Flares"
	          }), /*#__PURE__*/jsxRuntime.jsx("h1", {
	            children: "Util"
	          }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onClick: () => setLift(!lift),
	            color: "success",
	            variant: "outlined",
	            children: "Hoist Move"
	          })]
	        })]
	      })
	    }), /*#__PURE__*/jsxRuntime.jsxs(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 500,
	        height: 150,
	        backgroundColor: '16161E',
	        borderRadius: 4,
	        left: 400,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	        style: {
	          marginTop: 0
	        },
	        children: "Addons"
	      }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        direction: "row",
	        spacing: 4,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          size: "large",
	          onClick: () => setSkis(!skis),
	          color: skis ? 'success' : 'primary',
	          variant: skis ? 'contained' : 'outlined',
	          children: "Skis"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          size: "large",
	          onClick: () => setModelType(!modelType),
	          color: modelType ? 'success' : 'primary',
	          variant: modelType ? 'contained' : 'outlined',
	          children: "Hoist"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          size: "large",
	          onClick: () => setProbe(!probe),
	          color: probe ? 'success' : 'primary',
	          variant: probe ? 'contained' : 'outlined',
	          children: "Probe"
	        })]
	      })]
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 77,
	        height: 35,
	        backgroundColor: '16161E',
	        borderRadius: 1.5,
	        left: 350,
	        top: 340,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        size: "small",
	        variant: "outlined",
	        children: "Pilot R"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 75,
	        height: 35,
	        backgroundColor: '16161E',
	        borderRadius: 1.5,
	        left: 350,
	        top: 437,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        size: "small",
	        variant: "outlined",
	        children: "Pilot L"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 110,
	        height: 35,
	        backgroundColor: '16161E',
	        borderRadius: 1.5,
	        left: 310,
	        top: 389,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        size: "small",
	        variant: "outlined",
	        children: "Hide Doors"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 75,
	        height: 29,
	        backgroundColor: '16161E',
	        borderRadius: 1.5,
	        left: 370,
	        top: 485,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        onClick: () => setDoorR(!doorR),
	        size: "small",
	        variant: doorR ? 'contained' : 'outlined',
	        color: doorR ? 'error' : 'success',
	        children: "Door R"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 73,
	        height: 29,
	        backgroundColor: '16161E',
	        borderRadius: 1.5,
	        left: 370,
	        top: 290,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        onClick: () => setDoorL(!doorL),
	        size: "small",
	        variant: doorL ? 'contained' : 'outlined',
	        color: doorL ? 'error' : 'success',
	        children: "Door L"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 90,
	        height: 52,
	        backgroundColor: '16161E',
	        borderRadius: 1,
	        left: 460,
	        top: 380,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        onClick: () => setGunnerDoor(!gunnerDoor),
	        size: "small",
	        variant: gunnerDoor ? 'contained' : 'outlined',
	        color: gunnerDoor ? 'error' : 'success',
	        children: "Gunner Door"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 79,
	        height: 52,
	        backgroundColor: '16161E',
	        borderRadius: 1,
	        left: 600,
	        top: 290,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        onClick: () => setRearDoorR(!rearDoorR),
	        color: rearDoorR ? 'error' : 'success',
	        size: "small",
	        variant: rearDoorR ? 'contained' : 'outlined',
	        children: "Rear Door R"
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 79,
	        height: 52,
	        backgroundColor: '16161E',
	        borderRadius: 1,
	        left: 600,
	        top: 470,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        flexDirection: 'column',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	        onClick: () => setRearDoorL(!rearDoorL),
	        color: rearDoorL ? 'error' : 'success',
	        size: "small",
	        variant: rearDoorL ? 'contained' : 'outlined',
	        children: "Rear Door L"
	      })
	    })]
	  });
	};

	function getSwitchBaseUtilityClass(slot) {
	  return generateUtilityClass('PrivateSwitchBase', slot);
	}
	generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

	const _excluded$1 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];

	const useUtilityClasses$1 = ownerState => {
	  const {
	    classes,
	    checked,
	    disabled,
	    edge
	  } = ownerState;
	  const slots = {
	    root: ['root', checked && 'checked', disabled && 'disabled', edge && "edge".concat(capitalize(edge))],
	    input: ['input']
	  };
	  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
	};

	const SwitchBaseRoot = styled$1(ButtonBase$1)(({
	  ownerState
	}) => _extends$2({
	  padding: 9,
	  borderRadius: '50%'
	}, ownerState.edge === 'start' && {
	  marginLeft: ownerState.size === 'small' ? -3 : -12
	}, ownerState.edge === 'end' && {
	  marginRight: ownerState.size === 'small' ? -3 : -12
	}));
	const SwitchBaseInput = styled$1('input')({
	  cursor: 'inherit',
	  position: 'absolute',
	  opacity: 0,
	  width: '100%',
	  height: '100%',
	  top: 0,
	  left: 0,
	  margin: 0,
	  padding: 0,
	  zIndex: 1
	});
	/**
	 * @ignore - internal component.
	 */

	const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
	  const {
	    autoFocus,
	    checked: checkedProp,
	    checkedIcon,
	    className,
	    defaultChecked,
	    disabled: disabledProp,
	    disableFocusRipple = false,
	    edge = false,
	    icon,
	    id,
	    inputProps,
	    inputRef,
	    name,
	    onBlur,
	    onChange,
	    onFocus,
	    readOnly,
	    required,
	    tabIndex,
	    type,
	    value
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$1);

	  const [checked, setCheckedState] = useControlled({
	    controlled: checkedProp,
	    default: Boolean(defaultChecked),
	    name: 'SwitchBase',
	    state: 'checked'
	  });
	  const muiFormControl = useFormControl();

	  const handleFocus = event => {
	    if (onFocus) {
	      onFocus(event);
	    }

	    if (muiFormControl && muiFormControl.onFocus) {
	      muiFormControl.onFocus(event);
	    }
	  };

	  const handleBlur = event => {
	    if (onBlur) {
	      onBlur(event);
	    }

	    if (muiFormControl && muiFormControl.onBlur) {
	      muiFormControl.onBlur(event);
	    }
	  };

	  const handleInputChange = event => {
	    // Workaround for https://github.com/facebook/react/issues/9023
	    if (event.nativeEvent.defaultPrevented) {
	      return;
	    }

	    const newChecked = event.target.checked;
	    setCheckedState(newChecked);

	    if (onChange) {
	      // TODO v6: remove the second argument.
	      onChange(event, newChecked);
	    }
	  };

	  let disabled = disabledProp;

	  if (muiFormControl) {
	    if (typeof disabled === 'undefined') {
	      disabled = muiFormControl.disabled;
	    }
	  }

	  const hasLabelFor = type === 'checkbox' || type === 'radio';

	  const ownerState = _extends$2({}, props, {
	    checked,
	    disabled,
	    disableFocusRipple,
	    edge
	  });

	  const classes = useUtilityClasses$1(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(SwitchBaseRoot, _extends$2({
	    component: "span",
	    className: clsx(classes.root, className),
	    centerRipple: true,
	    focusRipple: !disableFocusRipple,
	    disabled: disabled,
	    tabIndex: null,
	    role: undefined,
	    onFocus: handleFocus,
	    onBlur: handleBlur,
	    ownerState: ownerState,
	    ref: ref
	  }, other, {
	    children: [/*#__PURE__*/jsxRuntime.jsx(SwitchBaseInput, _extends$2({
	      autoFocus: autoFocus,
	      checked: checkedProp,
	      defaultChecked: defaultChecked,
	      className: classes.input,
	      disabled: disabled,
	      id: hasLabelFor && id,
	      name: name,
	      onChange: handleInputChange,
	      readOnly: readOnly,
	      ref: inputRef,
	      required: required,
	      ownerState: ownerState,
	      tabIndex: tabIndex,
	      type: type
	    }, type === 'checkbox' && value === undefined ? {} : {
	      value
	    }, inputProps)), checked ? checkedIcon : icon]
	  }));
	}); // NB: If changed, please update Checkbox, Switch and Radio
	var SwitchBase$1 = SwitchBase;

	var CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
	  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
	}), 'CheckBoxOutlineBlank');

	var CheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
	  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
	}), 'CheckBox');

	var IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
	  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
	}), 'IndeterminateCheckBox');

	function getCheckboxUtilityClass(slot) {
	  return generateUtilityClass('MuiCheckbox', slot);
	}
	const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
	var checkboxClasses$1 = checkboxClasses;

	const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];

	const useUtilityClasses = ownerState => {
	  const {
	    classes,
	    indeterminate,
	    color
	  } = ownerState;
	  const slots = {
	    root: ['root', indeterminate && 'indeterminate', "color".concat(capitalize(color))]
	  };
	  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
	  return _extends$2({}, classes, composedClasses);
	};

	const CheckboxRoot = styled$1(SwitchBase$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiCheckbox',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles["color".concat(capitalize(ownerState.color))]];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$2({
	  color: theme.palette.text.secondary
	}, !ownerState.disableRipple && {
	  '&:hover': {
	    backgroundColor: alpha(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
	    // Reset on touch devices, it doesn't add specificity
	    '@media (hover: none)': {
	      backgroundColor: 'transparent'
	    }
	  }
	}, ownerState.color !== 'default' && {
	  ["&.".concat(checkboxClasses$1.checked, ", &.").concat(checkboxClasses$1.indeterminate)]: {
	    color: theme.palette[ownerState.color].main
	  },
	  ["&.".concat(checkboxClasses$1.disabled)]: {
	    color: theme.palette.action.disabled
	  }
	}));

	const defaultCheckedIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxIcon, {});

	const defaultIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxOutlineBlankIcon, {});

	const defaultIndeterminateIcon = /*#__PURE__*/jsxRuntime.jsx(IndeterminateCheckBoxIcon, {});

	const Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(inProps, ref) {
	  var _icon$props$fontSize, _indeterminateIcon$pr;

	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiCheckbox'
	  });

	  const {
	    checkedIcon = defaultCheckedIcon,
	    color = 'primary',
	    icon: iconProp = defaultIcon,
	    indeterminate = false,
	    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
	    inputProps,
	    size = 'medium'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded);

	  const icon = indeterminate ? indeterminateIconProp : iconProp;
	  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;

	  const ownerState = _extends$2({}, props, {
	    color,
	    indeterminate,
	    size
	  });

	  const classes = useUtilityClasses(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(CheckboxRoot, _extends$2({
	    type: "checkbox",
	    inputProps: _extends$2({
	      'data-indeterminate': indeterminate
	    }, inputProps),
	    icon: /*#__PURE__*/react.cloneElement(icon, {
	      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
	    }),
	    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
	      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
	    }),
	    ownerState: ownerState,
	    ref: ref
	  }, other, {
	    classes: classes
	  }));
	});
	var Checkbox$1 = Checkbox;

	const Checklist = () => {
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    className: "checklistContiner",
	    children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	      style: {
	        marginTop: 25,
	        marginLeft: 25,
	        color: '#1B93FF'
	      },
	      children: "Checklist"
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        marginLeft: 1,
	        position: 'absolute',
	        top: 20,
	        right: 20,
	        backgroundColor: '202330',
	        width: 450,
	        height: 70,
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        borderRadius: 3,
	        boxShadow: '0px 0px 7px rgba(0,0,0,.65)'
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          marginTop: 7,
	          width: 400,
	          height: 100
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          direction: "row",
	          spacing: 1,
	          children: [/*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "large",
	              variant: "outlined",
	              children: "Traditional"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Emergency",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "large",
	              variant: "outlined",
	              color: "error",
	              children: "Emergency"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Emergency",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "large",
	              variant: "outlined",
	              children: "Special"
	            })
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Outlet, {})]
	  });
	};

	const Traditional = () => {
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    className: "traditionalContainer",
	    children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	      style: {
	        marginTop: 0,
	        marginLeft: 15,
	        color: '#1B93FF'
	      },
	      children: "Traditional"
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        marginLeft: 1,
	        position: 'absolute',
	        top: 44,
	        left: 1,
	        backgroundColor: '202330',
	        width: 180,
	        height: 580,
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        borderRadius: 3,
	        boxShadow: '0px 0px 7px rgba(0,0,0,.65)'
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          marginTop: 7,
	          width: 120,
	          height: 570
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          direction: "column",
	          spacing: 1,
	          children: [/*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textAlign: 'center',
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/BeforeStart",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Before Start"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/CockpitCheck",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Cockpit Equipment Checks"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/EngineStart",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Engine Start"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              width: '100%',
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/EngineRunup",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Engine Runup"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              width: '100%',
	              textAlign: 'center',
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/BeforeTaxi",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Before Taxi"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/BeforeTakeoff",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Before Takeoff"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/BeforeLanding",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Before Landing"
	            })
	          }), /*#__PURE__*/jsxRuntime.jsx(Link, {
	            style: {
	              textDecoration: 'none'
	            },
	            to: "/Checklist/Traditional/Shutdown",
	            children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	              size: "medium",
	              color: "primary",
	              variant: "outlined",
	              children: "Shutdown"
	            })
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        marginLeft: 1,
	        position: 'absolute',
	        top: 70,
	        left: 220,
	        backgroundColor: '202330',
	        width: 720,
	        height: 520,
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        borderRadius: 3,
	        boxShadow: '0px 0px 7px rgba(0,0,0,.65)'
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Outlet, {})
	    })]
	  });
	};

	const Emergency = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    className: "emergencyContainer",
	    children: /*#__PURE__*/jsxRuntime.jsx("h1", {
	      children: "emergency"
	    })
	  });
	};

	const BeforeStart = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM1', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM2', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM3', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM4', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM5', 'bool');
	  const [cklItm6, setChlItm6] = useSimVar('L:CHECKLISTITEM6', 'bool');
	  const [cklItm7, setChlItm7] = useSimVar('L:CHECKLISTITEM7', 'bool');
	  const [cklItm8, setChlItm8] = useSimVar('L:CHECKLISTITEM8', 'bool');
	  const [cklItm9, setChlItm9] = useSimVar('L:CHECKLISTITEM9', 'bool');
	  const [cklItm10, setChlItm10] = useSimVar('L:CHECKLISTITEM10', 'bool');
	  const [cklItm11, setChlItm11] = useSimVar('L:CHECKLISTITEM11', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const handleChange6 = event => {
	    setChlItm6(event.target.checked);
	  };

	  const handleChange7 = event => {
	    setChlItm7(event.target.checked);
	  };

	  const handleChange8 = event => {
	    setChlItm8(event.target.checked);
	  };

	  const handleChange9 = event => {
	    setChlItm9(event.target.checked);
	  };

	  const handleChange10 = event => {
	    setChlItm10(event.target.checked);
	  };

	  const handleChange11 = event => {
	    setChlItm11(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	    setChlItm6(true);
	    setChlItm7(true);
	    setChlItm8(true);
	    setChlItm9(true);
	    setChlItm10(true);
	    setChlItm11(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	    setChlItm6(false);
	    setChlItm7(false);
	    setChlItm8(false);
	    setChlItm9(false);
	    setChlItm10(false);
	    setChlItm11(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "Parking Brake - Set"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "ANTI COLLISION, POSITION LIGHTS - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "STBY INST - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "BATT - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "EXT POW - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange6,
	              checked: cklItm6,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm6 ? '2e7d32 ' : ''
	              },
	              children: "NO.1 AND NO.2 GEN - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange7,
	              checked: cklItm7,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm7 ? '2e7d32 ' : ''
	              },
	              children: "APU CONT - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange8,
	              checked: cklItm8,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm8 ? '2e7d32 ' : ''
	              },
	              children: "FUEL BOOST PUMP - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange9,
	              checked: cklItm9,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm9 ? '2e7d32 ' : ''
	              },
	              children: "AIR SCE STRT - APU"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange10,
	              checked: cklItm10,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm10 ? '2e7d32 ' : ''
	              },
	              children: "FUEL BOOST PUMP - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange11,
	              checked: cklItm11,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm11 ? '2e7d32 ' : ''
	              },
	              children: "AIRLANDFS - OFF"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    })]
	  });
	};
	const CockpitCheck = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM12', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM13', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM14', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM15', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM16', 'bool');
	  const [cklItm6, setChlItm6] = useSimVar('L:CHECKLISTITEM17', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const handleChange6 = event => {
	    setChlItm6(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	    setChlItm6(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	    setChlItm6(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "PANEL LIGHTING - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "FUEL PUMP - APU BOOST"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "APU CONT - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "GENERATORS APU - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "STBY INST - ARM"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange6,
	              checked: cklItm6,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm6 ? '2e7d32 ' : ''
	              },
	              children: "FIRE TEST - HOLD for 5 seconds"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    })]
	  });
	};
	const EngineStart = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM18', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM19', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM20', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM21', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM22', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "BEACON LIGHTS - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "ENG FUEL SYS - DIR"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "ENGINE IGNITION - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "STARTER - ON"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "Eng PCL lever - IDLE"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    })]
	  });
	};
	const EngineRunup = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM23', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM24', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM25', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM26', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM27', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "PCL lever - FLY"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "FUEL BOOST PUMP - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "APU CONT - OFF"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "AIR SCE STRT - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "AIRLANDFS - STARTED"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "warning",
	      children: "Make sure that AirlandFS is not running until after BOTH engines have stabilized and the PCL levers are in FLY"
	    })]
	  });
	};
	const BeforeTaxi = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM28', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM29', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM30', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM31', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM32', 'bool');
	  const [cklItm6, setChlItm6] = useSimVar('L:CHECKLISTITEM33', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const handleChange6 = event => {
	    setChlItm6(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	    setChlItm6(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	    setChlItm6(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "TAXI CLEARANCE - Issued"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "Doors - Secure"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "WIPERS, DEFOG BLOWER - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "PARKING BRAKE - Release"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "NAVIGATION, TAXI, STROBE LIGHTS - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange6,
	              checked: cklItm6,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm6 ? '2e7d32 ' : ''
	              },
	              children: "DE-ICE SYS - As required"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    })]
	  });
	};
	const BeforeTakeoff = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM34', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM35', 'bool');
	  const [cklItm3, setChlItm3] = useSimVar('L:CHECKLISTITEM36', 'bool');
	  const [cklItm4, setChlItm4] = useSimVar('L:CHECKLISTITEM37', 'bool');
	  const [cklItm5, setChlItm5] = useSimVar('L:CHECKLISTITEM38', 'bool');
	  const [cklItm6, setChlItm6] = useSimVar('L:CHECKLISTITEM39', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const handleChange3 = event => {
	    setChlItm3(event.target.checked);
	  };

	  const handleChange4 = event => {
	    setChlItm4(event.target.checked);
	  };

	  const handleChange5 = event => {
	    setChlItm5(event.target.checked);
	  };

	  const handleChange6 = event => {
	    setChlItm6(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	    setChlItm3(true);
	    setChlItm4(true);
	    setChlItm5(true);
	    setChlItm6(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	    setChlItm3(false);
	    setChlItm4(false);
	    setChlItm5(false);
	    setChlItm6(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "TAKEOFF CLEARANCE - Issued"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "Doors - Secure"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange3,
	              checked: cklItm3,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm3 ? '2e7d32 ' : ''
	              },
	              children: "SEARCH LIGHT - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange4,
	              checked: cklItm4,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm4 ? '2e7d32 ' : ''
	              },
	              children: "Systems - Check"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange5,
	              checked: cklItm5,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm5 ? '2e7d32 ' : ''
	              },
	              children: "Avionics - As required"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange6,
	              checked: cklItm6,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm6 ? '2e7d32 ' : ''
	              },
	              children: "Crew, passengers, mission equipment - Secure"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    })]
	  });
	};
	const BeforeLanding = () => {
	  const [cklItm1, setChlItm1] = useSimVar('L:CHECKLISTITEM40', 'bool');
	  const [cklItm2, setChlItm2] = useSimVar('L:CHECKLISTITEM41', 'bool');

	  const handleChange1 = event => {
	    setChlItm1(event.target.checked);
	  };

	  const handleChange2 = event => {
	    setChlItm2(event.target.checked);
	  };

	  const markAll = () => {
	    setChlItm1(true);
	    setChlItm2(true);
	  };

	  const unmarkAll = () => {
	    setChlItm1(false);
	    setChlItm2(false);
	  };

	  return /*#__PURE__*/jsxRuntime.jsxs("g", {
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "checklistContents",
	      children: /*#__PURE__*/jsxRuntime.jsx(Stack$1, {
	        direction: "row",
	        style: {
	          fontSize: 17,
	          fontWeight: 'bold',
	          color: '1B93FF'
	        },
	        children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	          justifyContent: "center",
	          divider: /*#__PURE__*/jsxRuntime.jsx(Divider$1, {
	            orientation: "horizontal",
	            flexItem: true
	          }),
	          spacing: 0.1,
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange1,
	              checked: cklItm1,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm1 ? '2e7d32 ' : ''
	              },
	              children: "TAKEOFF CLEARANCE - Issued"
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	            direction: "row",
	            children: [/*#__PURE__*/jsxRuntime.jsx(Checkbox$1, {
	              onChange: handleChange2,
	              checked: cklItm2,
	              color: "success"
	            }), /*#__PURE__*/jsxRuntime.jsx("div", {
	              style: {
	                color: cklItm2 ? '2e7d32 ' : ''
	              },
	              children: "Doors - Secure"
	            })]
	          })]
	        })
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "traditionalControls",
	      children: /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: markAll,
	          size: "large",
	          color: "success",
	          variant: "outlined",
	          children: "Mark all"
	        }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: unmarkAll,
	          size: "large",
	          color: "error",
	          variant: "outlined",
	          children: "Unmark all"
	        })]
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "advisory",
	      children: "It is recommended to shut down AirlandFS BEFORE shutting down the engines"
	    })]
	  });
	};
	const Shutdown = () => {
	  useSimVar('L:CHECKLISTITEM42', 'bool');
	  useSimVar('L:CHECKLISTITEM43', 'bool');
	  useSimVar('L:CHECKLISTITEM44', 'bool');
	  useSimVar('L:CHECKLISTITEM45', 'bool');
	  useSimVar('L:CHECKLISTITEM46', 'bool');
	  useSimVar('L:CHECKLISTITEM47', 'bool');

	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    children: /*#__PURE__*/jsxRuntime.jsx("h1", {
	      children: "Shutdown"
	    })
	  });
	};

	const Browser = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("iframe", {
	    width: "1040",
	    height: "750",
	    src: "https://www.bing.com/",
	    frameborder: "0"
	  });
	};

	const EFB = () => {
	  return /*#__PURE__*/jsxRuntime.jsx(BrowserRouter, {
	    children: /*#__PURE__*/jsxRuntime.jsxs("div", {
	      className: "EFBContainer",
	      children: [/*#__PURE__*/jsxRuntime.jsxs(Routes, {
	        children: [/*#__PURE__*/jsxRuntime.jsx(Route, {
	          path: "/",
	          element: /*#__PURE__*/jsxRuntime.jsx(Home, {})
	        }), /*#__PURE__*/jsxRuntime.jsxs(Route, {
	          path: "/checklist",
	          element: /*#__PURE__*/jsxRuntime.jsx(Checklist, {}),
	          children: [/*#__PURE__*/jsxRuntime.jsxs(Route, {
	            path: "traditional",
	            element: /*#__PURE__*/jsxRuntime.jsx(Traditional, {}),
	            children: [/*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "BeforeStart",
	              element: /*#__PURE__*/jsxRuntime.jsx(BeforeStart, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "CockpitCheck",
	              element: /*#__PURE__*/jsxRuntime.jsx(CockpitCheck, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "EngineStart",
	              element: /*#__PURE__*/jsxRuntime.jsx(EngineStart, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "EngineRunup",
	              element: /*#__PURE__*/jsxRuntime.jsx(EngineRunup, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "BeforeTaxi",
	              element: /*#__PURE__*/jsxRuntime.jsx(BeforeTaxi, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "BeforeTakeoff",
	              element: /*#__PURE__*/jsxRuntime.jsx(BeforeTakeoff, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "BeforeLanding",
	              element: /*#__PURE__*/jsxRuntime.jsx(BeforeLanding, {})
	            }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	              path: "Shutdown",
	              element: /*#__PURE__*/jsxRuntime.jsx(Shutdown, {})
	            })]
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "emergency",
	            element: /*#__PURE__*/jsxRuntime.jsx(Emergency, {})
	          })]
	        }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	          path: "/Scratchpad",
	          element: /*#__PURE__*/jsxRuntime.jsx(ScratchPad, {})
	        }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	          path: "/Aircraft",
	          element: /*#__PURE__*/jsxRuntime.jsx(Airctaft, {})
	        }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	          path: "/Browser",
	          element: /*#__PURE__*/jsxRuntime.jsx(Browser, {})
	        }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	          path: "/Map",
	          element: /*#__PURE__*/jsxRuntime.jsx(Map$1, {})
	        })]
	      }), /*#__PURE__*/jsxRuntime.jsx(ButtonBar, {})]
	    })
	  });
	};

	render( /*#__PURE__*/jsxRuntime.jsx(EFB, {}));

})();
