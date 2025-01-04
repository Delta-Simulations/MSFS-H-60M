"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // node_modules/solid-js/dist/solid.js
  var sharedConfig = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: false,
    getContextId() {
      return getContextId(this.context.count);
    },
    getNextContextId() {
      return getContextId(this.context.count++);
    }
  };
  function getContextId(count) {
    const num = String(count), len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
  }
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }
  function nextHydrateContext() {
    return __spreadProps(__spreadValues({}, sharedConfig.context), {
      id: sharedConfig.getNextContextId(),
      count: 0
    });
  }
  var equalFn = (a, b) => a === b;
  var $PROXY = Symbol("solid-proxy");
  var $TRACK = Symbol("solid-track");
  var $DEVCOMP = Symbol("solid-dev-component");
  var signalOptions = {
    equals: equalFn
  };
  var ERROR = null;
  var runEffects = runQueue;
  var STALE = 1;
  var PENDING = 2;
  var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var Owner = null;
  var Transition = null;
  var Scheduler = null;
  var ExternalSourceConfig = null;
  var Listener = null;
  var Updates = null;
  var Effects = null;
  var ExecCount = 0;
  function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
      owned: null,
      cleanups: null,
      context: current ? current.context : null,
      owner: current
    }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
      return runUpdates(updateFn, true);
    } finally {
      Listener = listener;
      Owner = owner;
    }
  }
  function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || void 0
    };
    const setter = (value2) => {
      if (typeof value2 === "function") {
        if (Transition && Transition.running && Transition.sources.has(s))
          value2 = value2(s.tValue);
        else
          value2 = value2(s.value);
      }
      return writeSignal(s, value2);
    };
    return [readSignal.bind(s), setter];
  }
  function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running)
      Updates.push(c);
    else
      updateComputation(c);
  }
  function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
    if (s)
      c.suspense = s;
    if (!options || !options.render)
      c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
  }
  function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || void 0;
    if (Scheduler && Transition && Transition.running) {
      c.tState = STALE;
      Updates.push(c);
    } else
      updateComputation(c);
    return readSignal.bind(c);
  }
  function untrack(fn) {
    if (!ExternalSourceConfig && Listener === null)
      return fn();
    const listener = Listener;
    Listener = null;
    try {
      if (ExternalSourceConfig)
        return ExternalSourceConfig.untrack(fn);
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function onCleanup(fn) {
    if (Owner === null)
      ;
    else if (Owner.cleanups === null)
      Owner.cleanups = [fn];
    else
      Owner.cleanups.push(fn);
    return fn;
  }
  function startTransition(fn) {
    if (Transition && Transition.running) {
      fn();
      return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(() => {
      Listener = l;
      Owner = o;
      let t;
      if (Scheduler || SuspenseContext) {
        t = Transition || (Transition = {
          sources: /* @__PURE__ */ new Set(),
          effects: [],
          promises: /* @__PURE__ */ new Set(),
          disposed: /* @__PURE__ */ new Set(),
          queue: /* @__PURE__ */ new Set(),
          running: true
        });
        t.done || (t.done = new Promise((res) => t.resolve = res));
        t.running = true;
      }
      runUpdates(fn, false);
      Listener = Owner = null;
      return t ? t.done : void 0;
    });
  }
  var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
  function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
      id,
      Provider: createProvider(id),
      defaultValue
    };
  }
  function useContext(context) {
    let value;
    return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
  }
  function children(fn) {
    const children2 = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children2()));
    memo.toArray = () => {
      const c = memo();
      return Array.isArray(c) ? c : c != null ? [c] : [];
    };
    return memo;
  }
  var SuspenseContext;
  function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) {
      if ((runningTransition ? this.tState : this.state) === STALE)
        updateComputation(this);
      else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    if (runningTransition && Transition.sources.has(this))
      return this.tValue;
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      if (Transition) {
        const TransitionRunning = Transition.running;
        if (TransitionRunning || !isComp && Transition.sources.has(node)) {
          Transition.sources.add(node);
          node.tValue = value;
        }
        if (!TransitionRunning)
          node.value = value;
      } else
        node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i = 0; i < node.observers.length; i += 1) {
            const o = node.observers[i];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o))
              continue;
            if (TransitionRunning ? !o.tState : !o.state) {
              if (o.pure)
                Updates.push(o);
              else
                Effects.push(o);
              if (o.observers)
                markDownstream(o);
            }
            if (!TransitionRunning)
              o.state = STALE;
            else
              o.tState = STALE;
          }
          if (Updates.length > 1e6) {
            Updates = [];
            if (false)
              ;
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn)
      return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(
      node,
      Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value,
      time
    );
    if (Transition && !Transition.running && Transition.sources.has(node)) {
      queueMicrotask(() => {
        runUpdates(() => {
          Transition && (Transition.running = true);
          Listener = Owner = node;
          runComputation(node, node.tValue, time);
          Listener = Owner = null;
        }, false);
      });
    }
  }
  function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure) {
        if (Transition && Transition.running) {
          node.tState = STALE;
          node.tOwned && node.tOwned.forEach(cleanNode);
          node.tOwned = void 0;
        } else {
          node.state = STALE;
          node.owned && node.owned.forEach(cleanNode);
          node.owned = null;
        }
      }
      node.updatedAt = time + 1;
      return handleError(err);
    } finally {
      Listener = listener;
      Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue, true);
      } else if (Transition && Transition.running && node.pure) {
        Transition.sources.add(node);
        node.tValue = nextValue;
      } else
        node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
      fn,
      state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: Owner ? Owner.context : null,
      pure
    };
    if (Transition && Transition.running) {
      c.state = 0;
      c.tState = state;
    }
    if (Owner === null)
      ;
    else if (Owner !== UNOWNED) {
      if (Transition && Transition.running && Owner.pure) {
        if (!Owner.tOwned)
          Owner.tOwned = [c];
        else
          Owner.tOwned.push(c);
      } else {
        if (!Owner.owned)
          Owner.owned = [c];
        else
          Owner.owned.push(c);
      }
    }
    if (ExternalSourceConfig && c.fn) {
      const [track, trigger] = createSignal(void 0, {
        equals: false
      });
      const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
      onCleanup(() => ordinary.dispose());
      const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
      const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
      c.fn = (x) => {
        track();
        return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
      };
    }
    return c;
  }
  function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0)
      return;
    if ((runningTransition ? node.tState : node.state) === PENDING)
      return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback))
      return node.suspense.effects.push(node);
    const ancestors = [node];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
      if (runningTransition && Transition.disposed.has(node))
        return;
      if (runningTransition ? node.tState : node.state)
        ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
      node = ancestors[i];
      if (runningTransition) {
        let top = node, prev = ancestors[i + 1];
        while ((top = top.owner) && top !== prev) {
          if (Transition.disposed.has(top))
            return;
        }
      }
      if ((runningTransition ? node.tState : node.state) === STALE) {
        updateComputation(node);
      } else if ((runningTransition ? node.tState : node.state) === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates)
      return fn();
    let wait = false;
    if (!init)
      Updates = [];
    if (Effects)
      wait = true;
    else
      Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!wait)
        Effects = null;
      Updates = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      if (Scheduler && Transition && Transition.running)
        scheduleQueue(Updates);
      else
        runQueue(Updates);
      Updates = null;
    }
    if (wait)
      return;
    let res;
    if (Transition) {
      if (!Transition.promises.size && !Transition.queue.size) {
        const sources = Transition.sources;
        const disposed = Transition.disposed;
        Effects.push.apply(Effects, Transition.effects);
        res = Transition.resolve;
        for (const e2 of Effects) {
          "tState" in e2 && (e2.state = e2.tState);
          delete e2.tState;
        }
        Transition = null;
        runUpdates(() => {
          for (const d of disposed)
            cleanNode(d);
          for (const v of sources) {
            v.value = v.tValue;
            if (v.owned) {
              for (let i = 0, len = v.owned.length; i < len; i++)
                cleanNode(v.owned[i]);
            }
            if (v.tOwned)
              v.owned = v.tOwned;
            delete v.tValue;
            delete v.tOwned;
            v.tState = 0;
          }
          setTransPending(false);
        }, false);
      } else if (Transition.running) {
        Transition.running = false;
        Transition.effects.push.apply(Transition.effects, Effects);
        Effects = null;
        setTransPending(true);
        return;
      }
    }
    const e = Effects;
    Effects = null;
    if (e.length)
      runUpdates(() => runEffects(e), false);
    if (res)
      res();
  }
  function runQueue(queue) {
    for (let i = 0; i < queue.length; i++)
      runTop(queue[i]);
  }
  function scheduleQueue(queue) {
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      const tasks = Transition.queue;
      if (!tasks.has(item)) {
        tasks.add(item);
        Scheduler(() => {
          tasks.delete(item);
          runUpdates(() => {
            Transition.running = true;
            runTop(item);
          }, false);
          Transition && (Transition.running = false);
        });
      }
    }
  }
  function runUserEffects(queue) {
    let i, userLength = 0;
    for (i = 0; i < queue.length; i++) {
      const e = queue[i];
      if (!e.user)
        runTop(e);
      else
        queue[userLength++] = e;
    }
    if (sharedConfig.context) {
      if (sharedConfig.count) {
        sharedConfig.effects || (sharedConfig.effects = []);
        sharedConfig.effects.push(...queue.slice(0, userLength));
        return;
      }
      setHydrateContext();
    }
    if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
      queue = [...sharedConfig.effects, ...queue];
      userLength += sharedConfig.effects.length;
      delete sharedConfig.effects;
    }
    for (i = 0; i < userLength; i++)
      runTop(queue[i]);
  }
  function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition)
      node.tState = 0;
    else
      node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
      const source = node.sources[i];
      if (source.sources) {
        const state = runningTransition ? source.tState : source.state;
        if (state === STALE) {
          if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
            runTop(source);
        } else if (state === PENDING)
          lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i = 0; i < node.observers.length; i += 1) {
      const o = node.observers[i];
      if (runningTransition ? !o.tState : !o.state) {
        if (runningTransition)
          o.tState = PENDING;
        else
          o.state = PENDING;
        if (o.pure)
          Updates.push(o);
        else
          Effects.push(o);
        o.observers && markDownstream(o);
      }
    }
  }
  function cleanNode(node) {
    let i;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
          const n = obs.pop(), s = source.observerSlots.pop();
          if (index < obs.length) {
            n.sourceSlots[s] = index;
            obs[index] = n;
            source.observerSlots[index] = s;
          }
        }
      }
    }
    if (node.tOwned) {
      for (i = node.tOwned.length - 1; i >= 0; i--)
        cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    if (Transition && Transition.running && node.pure) {
      reset(node, true);
    } else if (node.owned) {
      for (i = node.owned.length - 1; i >= 0; i--)
        cleanNode(node.owned[i]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i = node.cleanups.length - 1; i >= 0; i--)
        node.cleanups[i]();
      node.cleanups = null;
    }
    if (Transition && Transition.running)
      node.tState = 0;
    else
      node.state = 0;
  }
  function reset(node, top) {
    if (!top) {
      node.tState = 0;
      Transition.disposed.add(node);
    }
    if (node.owned) {
      for (let i = 0; i < node.owned.length; i++)
        reset(node.owned[i]);
    }
  }
  function castError(err) {
    if (err instanceof Error)
      return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
      cause: err
    });
  }
  function runErrors(err, fns, owner) {
    try {
      for (const f of fns)
        f(err);
    } catch (e) {
      handleError(e, owner && owner.owner || null);
    }
  }
  function handleError(err, owner = Owner) {
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns)
      throw error;
    if (Effects)
      Effects.push({
        fn() {
          runErrors(error, fns, owner);
        },
        state: STALE
      });
    else
      runErrors(error, fns, owner);
  }
  function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length)
      return resolveChildren(children2());
    if (Array.isArray(children2)) {
      const results = [];
      for (let i = 0; i < children2.length; i++) {
        const result = resolveChildren(children2[i]);
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
      }
      return results;
    }
    return children2;
  }
  function createProvider(id, options) {
    return function provider(props) {
      let res;
      createRenderEffect(
        () => res = untrack(() => {
          Owner.context = __spreadProps(__spreadValues({}, Owner.context), {
            [id]: props.value
          });
          return children(() => props.children);
        }),
        void 0
      );
      return res;
    };
  }
  var FALLBACK = Symbol("fallback");
  var hydrationEnabled = false;
  function createComponent(Comp, props) {
    if (hydrationEnabled) {
      if (sharedConfig.context) {
        const c = sharedConfig.context;
        setHydrateContext(nextHydrateContext());
        const r = untrack(() => Comp(props || {}));
        setHydrateContext(c);
        return r;
      }
    }
    return untrack(() => Comp(props || {}));
  }

  // node_modules/solid-js/web/dist/web.js
  var booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
  ];
  var Properties = /* @__PURE__ */ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
  ]);
  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
        while (bStart < bEnd)
          parentNode.insertBefore(b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart]))
            a[aStart].remove();
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = a[--aEnd].nextSibling;
        parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
        parentNode.insertBefore(b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = /* @__PURE__ */ new Map();
          let i = bStart;
          while (i < bEnd)
            map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart, sequence = 1, t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence)
                break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index)
                parentNode.insertBefore(b[bStart++], node);
            } else
              parentNode.replaceChild(b[bStart++], a[aStart++]);
          } else
            aStart++;
        } else
          a[aStart++].remove();
      }
    }
  }
  function render(code, element, init, options = {}) {
    let disposer;
    createRoot((dispose) => {
      disposer = dispose;
      element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
    }, options.owner);
    return () => {
      disposer();
      element.textContent = "";
    };
  }
  function template(html, isImportNode, isSVG) {
    let node;
    const create = () => {
      const t = document.createElement("template");
      t.innerHTML = html;
      return isSVG ? t.content.firstChild.firstChild : t.content.firstChild;
    };
    const fn = isImportNode ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
  }
  function insert(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial)
      initial = [];
    if (typeof accessor !== "function")
      return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
  }
  function isHydrating(node) {
    return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    const hydrating = isHydrating(parent);
    if (hydrating) {
      !current && (current = [...parent.childNodes]);
      let cleaned = [];
      for (let i = 0; i < current.length; i++) {
        const node = current[i];
        if (node.nodeType === 8 && node.data.slice(0, 2) === "!$")
          node.remove();
        else
          cleaned.push(node);
      }
      current = cleaned;
    }
    while (typeof current === "function")
      current = current();
    if (value === current)
      return current;
    const t = typeof value, multi = marker !== void 0;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
      if (hydrating)
        return current;
      if (t === "number") {
        value = value.toString();
        if (value === current)
          return current;
      }
      if (multi) {
        let node = current[0];
        if (node && node.nodeType === 3) {
          node.data !== value && (node.data = value);
        } else
          node = document.createTextNode(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          current = parent.firstChild.data = value;
        } else
          current = parent.textContent = value;
      }
    } else if (value == null || t === "boolean") {
      if (hydrating)
        return current;
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function")
          v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      const currentArray = current && Array.isArray(current);
      if (normalizeIncomingArray(array, value, current, unwrapArray)) {
        createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
        return () => current;
      }
      if (hydrating) {
        if (!array.length)
          return current;
        if (marker === void 0)
          return current = [...parent.childNodes];
        let node = array[0];
        if (node.parentNode !== parent)
          return current;
        const nodes = [node];
        while ((node = node.nextSibling) !== marker)
          nodes.push(node);
        return current = nodes;
      }
      if (array.length === 0) {
        current = cleanChildren(parent, current, marker);
        if (multi)
          return current;
      } else if (currentArray) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else
          reconcileArrays(parent, current, array);
      } else {
        current && cleanChildren(parent);
        appendNodes(parent, array);
      }
      current = array;
    } else if (value.nodeType) {
      if (hydrating && value.parentNode)
        return current = multi ? [value] : value;
      if (Array.isArray(current)) {
        if (multi)
          return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !parent.firstChild) {
        parent.appendChild(value);
      } else
        parent.replaceChild(value, parent.firstChild);
      current = value;
    } else
      ;
    return current;
  }
  function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i], prev = current && current[normalized.length], t;
      if (item == null || item === true || item === false)
        ;
      else if ((t = typeof item) === "object" && item.nodeType) {
        normalized.push(item);
      } else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function")
            item = item();
          dynamic = normalizeIncomingArray(
            normalized,
            Array.isArray(item) ? item : [item],
            Array.isArray(prev) ? prev : [prev]
          ) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else {
        const value = String(item);
        if (prev && prev.nodeType === 3 && prev.data === value)
          normalized.push(prev);
        else
          normalized.push(document.createTextNode(value));
      }
    }
    return dynamic;
  }
  function appendNodes(parent, array, marker = null) {
    for (let i = 0, len = array.length; i < len; i++)
      parent.insertBefore(array[i], marker);
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0)
      return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = el.parentNode === parent;
          if (!inserted && !i)
            isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
          else
            isParent && el.remove();
        } else
          inserted = true;
      }
    } else
      parent.insertBefore(node, marker);
    return [node];
  }
  var RequestContext = Symbol();

  // instruments/common/hooks/index.tsx
  var mountNode = document.getElementById("MSFS_REACT_MOUNT");
  var GetRenderTarget = () => mountNode;
  function MSFSRender(element) {
    render(() => element, GetRenderTarget());
  }
  var useDisplayIndex = () => {
    const [display_index, set_display_index] = createSignal(0);
    const update_display_index = () => {
      var _a;
      const url = (_a = document.getElementsByTagName("pfd_element")[0]) == null ? void 0 : _a.getAttribute("url");
      set_display_index(url ? Number.parseInt(url.substring(url.length - 1), 10) : 0);
    };
    const observer = new MutationObserver(update_display_index);
    const target = document.getElementsByTagName("pfd-element")[0];
    if (target) {
      observer.observe(target, {
        attributes: true
      });
      update_display_index();
    }
    onCleanup(() => {
      observer.disconnect();
    });
    return display_index;
  };

  // instruments/common/hooks/simvars.tsx
  var SimVarUnitsEnum = /* @__PURE__ */ function(SimVarUnitsEnum2) {
    SimVarUnitsEnum2["METER"] = "meter";
    SimVarUnitsEnum2["METER_SCALAR_256"] = "meter scaler 256";
    SimVarUnitsEnum2["MILLIMETER"] = "millimeter";
    SimVarUnitsEnum2["CENTIMETER"] = "centimeter";
    SimVarUnitsEnum2["KILOMETER"] = "kilometer";
    SimVarUnitsEnum2["NAUTICAL_MILE"] = "nautical mile";
    SimVarUnitsEnum2["DECINMILE"] = "decinmile";
    SimVarUnitsEnum2["INCH"] = "inch";
    SimVarUnitsEnum2["FOOT"] = "foot";
    SimVarUnitsEnum2["YARD"] = "yard";
    SimVarUnitsEnum2["DECIMILE"] = "decimile";
    SimVarUnitsEnum2["MILE"] = "mile";
    SimVarUnitsEnum2["SQUARE_INCH"] = "square inch";
    SimVarUnitsEnum2["SQUARE_FEET"] = "square feet";
    SimVarUnitsEnum2["SQUARE_YARD"] = "square yard";
    SimVarUnitsEnum2["SQUARE_MILE"] = "square mile";
    SimVarUnitsEnum2["SQUARE_MILLIMETER"] = "square millimeter";
    SimVarUnitsEnum2["SQUARE_CENTIMETER"] = "square centimeter";
    SimVarUnitsEnum2["SQUARE_METER"] = "square millimeter";
    SimVarUnitsEnum2["SQUARE_KILOMETER"] = "square millimeter";
    SimVarUnitsEnum2["CUBIC_INCH"] = "cubic inch";
    SimVarUnitsEnum2["CUBIC_FOOT"] = "cubic foot";
    SimVarUnitsEnum2["CUBIC_YARD"] = "cubic yard";
    SimVarUnitsEnum2["CUBIC_MILE"] = "cubic mile";
    SimVarUnitsEnum2["CUBIC_MILLIMETER"] = "cubic millimeter";
    SimVarUnitsEnum2["CUBIC_CENTIMETER"] = "cubic centimeter";
    SimVarUnitsEnum2["CUBIC_METER"] = "cubic meter";
    SimVarUnitsEnum2["CUBIC_KILOMETER"] = "cubic kilometer";
    SimVarUnitsEnum2["LITER"] = "liter";
    SimVarUnitsEnum2["GALLON"] = "gallon";
    SimVarUnitsEnum2["QUART"] = "quart";
    SimVarUnitsEnum2["FS7_OIL_QUANTITY"] = "fs7 oil quantity";
    SimVarUnitsEnum2["KELVIN"] = "kelvin";
    SimVarUnitsEnum2["RANKINE"] = "rankine";
    SimVarUnitsEnum2["FAHRENHEIT"] = "fahrenheit";
    SimVarUnitsEnum2["CELSIUS"] = "celsius";
    SimVarUnitsEnum2["CELSIUS_FS7_EGT"] = "celsius fs7 egt";
    SimVarUnitsEnum2["CELSIUS_FS7_OIL_TEMP"] = "celsius fs7 oil temp";
    SimVarUnitsEnum2["CELSIUS_SCALER_1_256"] = "celsius scaler 1/256";
    SimVarUnitsEnum2["CELSIUS_SCALER_256"] = "celsius scaler 256";
    SimVarUnitsEnum2["CELSIUS_SCALER_16K"] = "celsius scaler 16k";
    SimVarUnitsEnum2["RADIAN"] = "radian";
    SimVarUnitsEnum2["ROUND"] = "round";
    SimVarUnitsEnum2["DEGREE"] = "degree";
    SimVarUnitsEnum2["GRAD"] = "grad";
    SimVarUnitsEnum2["ANGL116"] = "angl116";
    SimVarUnitsEnum2["ANGL132"] = "angl132";
    SimVarUnitsEnum2["DEGREE_LATITUDE"] = "degree latitude";
    SimVarUnitsEnum2["DEGREE_LONGITUDE"] = "degree longitude";
    SimVarUnitsEnum2["METER_LATITUDE"] = "meter latitude";
    SimVarUnitsEnum2["RADIAN_PER_SECOND"] = "radian per second";
    SimVarUnitsEnum2["RPM"] = "rpm";
    SimVarUnitsEnum2["RPM_1_OVER_16K"] = "rpm 1 over 16k";
    SimVarUnitsEnum2["MINUTE_PER_ROUND"] = "minute per round";
    SimVarUnitsEnum2["NICE_MINUTE_PER_ROUND"] = "nice minute per round";
    SimVarUnitsEnum2["DEGREE_PER_SECOND"] = "degree per second";
    SimVarUnitsEnum2["DEGREE_PER_SECOND_ANG16"] = "degree per second ang16";
    SimVarUnitsEnum2["RADIAN_PER_SECOND_SQUARED"] = "radian per second squared";
    SimVarUnitsEnum2["DEGREE_PER_SECOND_SQUARED"] = "degree per second squared";
    SimVarUnitsEnum2["METER_PER_SECOND"] = "meter per second";
    SimVarUnitsEnum2["METER_PER_SECOND_SCALER_256"] = "meter per second scaler 256";
    SimVarUnitsEnum2["METER_PER_MINUTE"] = "meter per minute";
    SimVarUnitsEnum2["KILOMETER_PER_HOUR"] = "kilometer/hour";
    SimVarUnitsEnum2["FEET_PER_SECOND"] = "feet/second";
    SimVarUnitsEnum2["FEET_PER_MINUTE"] = "feet/minute";
    SimVarUnitsEnum2["MILE_PER_HOUR"] = "mile per hour";
    SimVarUnitsEnum2["KNOT"] = "knot";
    SimVarUnitsEnum2["KNOT_SCALER_128"] = "knot scaler 128";
    SimVarUnitsEnum2["MACH"] = "mach";
    SimVarUnitsEnum2["MACH_3D2_OVER_64K"] = "mach 3d2 over 64k";
    SimVarUnitsEnum2["METER_PER_SECOND_SQUARED"] = "meter per second squared";
    SimVarUnitsEnum2["FEET_PER_SECOND_SQUARED"] = "feet per second squared";
    SimVarUnitsEnum2["G_FORCE"] = "Gforce";
    SimVarUnitsEnum2["G_FORCE_624_SCALED"] = "G Force 624 scaled";
    SimVarUnitsEnum2["SECOND"] = "second";
    SimVarUnitsEnum2["MINUTE"] = "minute";
    SimVarUnitsEnum2["HOUR"] = "hour";
    SimVarUnitsEnum2["DAY"] = "day";
    SimVarUnitsEnum2["HOUR_OVER_10"] = "hour over 10";
    SimVarUnitsEnum2["YEAR"] = "year";
    SimVarUnitsEnum2["WATT"] = "Watt";
    SimVarUnitsEnum2["FT_LB_PER_SECOND"] = "ft lb per second";
    SimVarUnitsEnum2["METER_CUBED_PER_SECOND"] = "meter cubed per second";
    SimVarUnitsEnum2["LITER_PER_HOUR"] = "liter per hour";
    SimVarUnitsEnum2["GALLON_PER_HOUR"] = "gallion per hour";
    SimVarUnitsEnum2["KILOGRAM"] = "kilogram";
    SimVarUnitsEnum2["POUND"] = "pound";
    SimVarUnitsEnum2["POUND_SCALER_256"] = "pound scaler 256";
    SimVarUnitsEnum2["SLUG"] = "slug";
    SimVarUnitsEnum2["KILOGRAM_PER_SECOND"] = "kilogram per second";
    SimVarUnitsEnum2["POUND_PER_HOUR"] = "pound per hour";
    SimVarUnitsEnum2["AMPERE"] = "ampere";
    SimVarUnitsEnum2["FS7_CHARGING_AMPS"] = "fs7 charging amps";
    SimVarUnitsEnum2["VOLT"] = "volt";
    SimVarUnitsEnum2["HERTZ"] = "Hertz";
    SimVarUnitsEnum2["KILOHERTZ"] = "Kilohertz";
    SimVarUnitsEnum2["MEGAHERTZ"] = "Megahertz";
    SimVarUnitsEnum2["FREQUENCY_BCD16"] = "Frequency BCD16";
    SimVarUnitsEnum2["FREQUENCY_BCD32"] = "Frequency BCD32";
    SimVarUnitsEnum2["FREQUENCY_ADF_BCD32"] = "Frequency ADF BCD32";
    SimVarUnitsEnum2["KILOGRAM_PER_CUBIC_METER"] = "kilogram per cubic meter";
    SimVarUnitsEnum2["SLUG_PER_CUBIC_FEET"] = "Slug per cubic feet";
    SimVarUnitsEnum2["POUND_PER_GALLON"] = "pound per gallon";
    SimVarUnitsEnum2["PASCAL"] = "pascal";
    SimVarUnitsEnum2["KILOPASCAL"] = "kpa";
    SimVarUnitsEnum2["MMHG"] = "mmHg";
    SimVarUnitsEnum2["CMHG"] = "cmHg";
    SimVarUnitsEnum2["INHG"] = "inHg";
    SimVarUnitsEnum2["INHG_64_OVER_64K"] = "inHg 64 over 64k";
    SimVarUnitsEnum2["MILLIMITER_OF_WATER"] = "millimiter of water";
    SimVarUnitsEnum2["NEWTON_PER_SQUARE_METER"] = "Newton per square meter";
    SimVarUnitsEnum2["PSI"] = "psi";
    SimVarUnitsEnum2["BAR"] = "bar";
    SimVarUnitsEnum2["ATMOSPHERE"] = "atm";
    SimVarUnitsEnum2["MILLIBAR"] = "millibar";
    SimVarUnitsEnum2["NEWTON_METER"] = "nm";
    SimVarUnitsEnum2["FOOT_POUND"] = "ft-lbs";
    SimVarUnitsEnum2["POUND_FOOT"] = "lbf-feet";
    SimVarUnitsEnum2["KILOGRAM_METER"] = "kgf meter";
    SimVarUnitsEnum2["POUNDAL_FEET"] = "poundal feet";
    SimVarUnitsEnum2["PERCENT"] = "percent";
    SimVarUnitsEnum2["PERCENT_OVER_100"] = "percent over 100";
    SimVarUnitsEnum2["BEL"] = "bel";
    SimVarUnitsEnum2["DECIBEL"] = "decibel";
    SimVarUnitsEnum2["NUMBER"] = "number";
    SimVarUnitsEnum2["POSITION"] = "position";
    SimVarUnitsEnum2["ENUM"] = "Enum";
    SimVarUnitsEnum2["BOOL"] = "Bool";
    SimVarUnitsEnum2["STRING"] = "string";
    SimVarUnitsEnum2["KEYFRAME"] = "keyframe";
    return SimVarUnitsEnum2;
  }({});
  var createErrorCallback = () => {
    throw new Error("useSimVar was called outside of SimVarProvider");
  };
  var SimVarContext = createContext({
    retrieve: createErrorCallback,
    update: createErrorCallback,
    register: createErrorCallback,
    unregister: createErrorCallback
  });
  var SimVarProvider = (props) => {
    const [listeners, setListeners] = createSignal({});
    const [cache, setCache] = createSignal({});
    let updateInterval;
    const startUpdateLoop = () => {
      updateInterval = setInterval(() => {
        const deltaTime = 16;
        const currentListeners = listeners();
        const currentCache = cache();
        const stateUpdates = {};
        for (const [key, intervals] of Object.entries(currentListeners)) {
          if (!intervals.length)
            continue;
          const threshold = Math.min(...intervals);
          const lastUpdated = (currentCache[key] ? currentCache[key].lastUpdated || 0 : 0) + deltaTime;
          if (lastUpdated >= threshold) {
            const [name, unit] = key.split("/");
            let value;
            if (name.startsWith("_GLOBAL_")) {
              value = SimVar.GetGlobalVarValue(name.substr(8), unit);
            } else if (name.startsWith("_GAME_")) {
              value = SimVar.GetGameVarValue(name.substr(6), unit);
            } else {
              value = SimVar.GetSimVarValue(name, unit);
            }
            stateUpdates[key] = {
              value,
              lastUpdated: lastUpdated % threshold
            };
          } else {
            stateUpdates[key] = {
              lastUpdated
            };
          }
        }
        setCache((oldCache) => {
          const newCache = __spreadValues({}, oldCache);
          for (const [key, update] of Object.entries(stateUpdates)) {
            newCache[key] = __spreadValues(__spreadValues({}, newCache[key]), update);
          }
          return newCache;
        });
      }, 16);
    };
    startUpdateLoop();
    onCleanup(() => clearInterval(updateInterval));
    const getKey = (name, unit, varType) => {
      switch (varType) {
        default:
          return `${name}/${unit}`;
        case 1:
          return `_GLOBAL_${name}/${unit}`;
        case 2:
          return `_GAME_${name}/${unit}`;
      }
    };
    const contextValue = {
      retrieve(name, unit, force, varType = 0) {
        const key = getKey(name, unit, varType);
        const currentCache = cache();
        if (currentCache[key] && !force) {
          return currentCache[key].value;
        }
        let value;
        switch (varType) {
          default:
            value = SimVar.GetSimVarValue(name, unit);
            break;
          case 1:
            value = SimVar.GetGlobalVarValue(name, unit);
            break;
          case 2:
            value = SimVar.GetGameVarValue(name, unit);
            break;
        }
        setCache((oldCache) => __spreadProps(__spreadValues({}, oldCache), {
          [key]: {
            value,
            lastUpdated: 0
          }
        }));
        return value;
      },
      update(name, unit, value, proxy) {
        const key = getKey(name, unit, 0);
        setCache((oldCache) => {
          var _a;
          const oldValue = (_a = oldCache[key]) == null ? void 0 : _a.value;
          const newValue = typeof value === "function" ? value(oldValue) : value;
          SimVar.SetSimVarValue(proxy || name, unit, newValue);
          return __spreadProps(__spreadValues({}, oldCache), {
            [key]: {
              value: newValue,
              lastUpdated: 0
            }
          });
        });
      },
      register(name, unit, maxStaleness, varType) {
        const key = getKey(name, unit, varType);
        setListeners((oldListeners) => {
          const updatedListeners = __spreadValues({}, oldListeners);
          if (!updatedListeners[key]) {
            updatedListeners[key] = [];
          }
          updatedListeners[key].push(maxStaleness || 0);
          return updatedListeners;
        });
      },
      unregister(name, unit, maxStaleness, varType) {
        const key = getKey(name, unit, varType);
        setListeners((oldListeners) => {
          const updatedListeners = __spreadValues({}, oldListeners);
          const old = updatedListeners[key];
          if (!Array.isArray(old) || old.length === 0) {
            throw new Error("Attempted to unregisterHook with no known listener");
          }
          if (old.length === 1) {
            delete updatedListeners[key];
          } else {
            const index = old.indexOf(maxStaleness || 0);
            old.splice(index, 1);
          }
          return updatedListeners;
        });
      }
    };
    return createComponent(SimVarContext.Provider, {
      value: contextValue,
      get children() {
        return props.children;
      }
    });
  };
  var useSimVar = (name, unit, maxStaleness = 0) => {
    const contextValue = useContext(SimVarContext);
    const [value, setValue] = createSignal(contextValue.retrieve(name, unit, false, 0));
    createEffect(() => {
      contextValue.register(name, unit, maxStaleness, 0);
      const intervalId = setInterval(() => {
        const currentValue = contextValue.retrieve(name, unit, true, 0);
        setValue(currentValue);
      }, maxStaleness || 100);
      onCleanup(() => {
        clearInterval(intervalId);
        contextValue.unregister(name, unit, maxStaleness, 0);
      });
    });
    const setter = (newValue) => {
      contextValue.update(name, unit, newValue);
      setValue(contextValue.retrieve(name, unit, true, 0));
    };
    return [value, setter];
  };

  // instruments/src/MFD/Pages/PFD/index.tsx
  var _tmpl$ = /* @__PURE__ */ template(`<div>PFD`);
  function PFD() {
    return (() => {
      var _el$ = _tmpl$();
      _el$.style.setProperty("color", "white");
      return _el$;
    })();
  }
  var PFD_default = PFD;

  // instruments/src/MFD/Pages/ND/index.tsx
  var _tmpl$2 = /* @__PURE__ */ template(`<div>ND`);
  function ND() {
    return (() => {
      var _el$ = _tmpl$2();
      _el$.style.setProperty("color", "white");
      return _el$;
    })();
  }
  var ND_default = ND;

  // instruments/src/MFD/Pages/EICAS/index.tsx
  var _tmpl$3 = /* @__PURE__ */ template(`<div>EICAS`);
  function EICAS() {
    return (() => {
      var _el$ = _tmpl$3();
      _el$.style.setProperty("color", "white");
      return _el$;
    })();
  }
  var EICAS_default = EICAS;

  // instruments/src/MFD/Pages/TAC/index.tsx
  var _tmpl$4 = /* @__PURE__ */ template(`<div>TAC`);
  function TAC() {
    return (() => {
      var _el$ = _tmpl$4();
      _el$.style.setProperty("color", "white");
      return _el$;
    })();
  }
  var TAC_default = TAC;

  // instruments/src/MFD/Pages/JVMF/index.tsx
  var _tmpl$5 = /* @__PURE__ */ template(`<div>JVMF`);
  function JVMF() {
    return (() => {
      var _el$ = _tmpl$5();
      _el$.style.setProperty("color", "white");
      return _el$;
    })();
  }
  var JVMF_default = JVMF;

  // instruments/src/MFD/Util/Router/Router.tsx
  var _tmpl$6 = /* @__PURE__ */ template(`<div>Page not found`);
  var _tmpl$22 = /* @__PURE__ */ template(`<div><div>`);
  var Router = (props) => {
    const [page, set_page] = useSimVar(props.var, SimVarUnitsEnum.ENUM);
    const [rendered_page, set_rendered_page] = createSignal();
    createEffect(() => {
      switch (page()) {
        case 0:
          set_rendered_page(createComponent(PFD_default, {}));
          break;
        case 1:
          set_rendered_page(createComponent(ND_default, {}));
          break;
        case 2:
          set_rendered_page(createComponent(EICAS_default, {}));
          break;
        case 3:
          set_rendered_page(createComponent(TAC_default, {}));
          break;
        case 4:
          set_rendered_page(createComponent(JVMF_default, {}));
          break;
        default:
          set_rendered_page(_tmpl$6());
      }
    });
    return (() => {
      var _el$2 = _tmpl$22(), _el$3 = _el$2.firstChild;
      insert(_el$3, rendered_page);
      return _el$2;
    })();
  };
  var Router_default = Router;

  // instruments/src/MFD/index.tsx
  var _tmpl$7 = /* @__PURE__ */ template(`<div>`);
  function MFD() {
    const display_id = useDisplayIndex();
    const [router_simvar, set_router_simvar] = createSignal("");
    createEffect(() => {
      set_router_simvar(`L:H60_MFD_${display_id()}_MODE`);
    });
    return (() => {
      var _el$ = _tmpl$7();
      _el$.style.setProperty("color", "white");
      insert(_el$, createComponent(Router_default, {
        get ["var"]() {
          return router_simvar();
        }
      }));
      return _el$;
    })();
  }
  MSFSRender(createComponent(SimVarProvider, {
    get children() {
      return createComponent(MFD, {});
    }
  }));
})();
