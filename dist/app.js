// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jeTtx":[function(require,module,exports) {
var _core = require("@xatom/core");
var _routes = require("./routes"); // This will automatically execute the routes defined in your routes/index.ts
// The onReady method makes sure that everything is initialized after the Webflow page has fully loaded
(0, _core.onReady)(()=>{
    console.log("App initialized and routes loaded");
});

},{"@xatom/core":"j9zXV","./routes":"fnEL6"}],"j9zXV":[function(require,module,exports) {
var $iEn1Z$uuid = require("bf5b22be891a3aaf");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"bf5b22be891a3aaf":"2VHRI"}],"2VHRI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"cD61R","./v3.js":"1PlQf","./v4.js":"ge1mm","./v5.js":"29O6E","./nil.js":"3Mx10","./version.js":"gDO7A","./validate.js":"1HEyE","./stringify.js":"5ZEOj","./parse.js":"64mvy","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"cD61R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"aIm9m","./stringify.js":"5ZEOj","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"aIm9m":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"lV7RN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5ZEOj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"1HEyE","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1HEyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"daoPT","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"daoPT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1PlQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)("v3", 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"6ecli","./md5.js":"afsir","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"6ecli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") value = stringToBytes(value);
        if (typeof namespace === "string") namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"5ZEOj","./parse.js":"64mvy","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"64mvy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"1HEyE","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"afsir":[function(require,module,exports) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = "0123456789abcdef";
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"ge1mm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"hNdoB","./rng.js":"aIm9m","./stringify.js":"5ZEOj","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hNdoB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"29O6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)("v5", 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"6ecli","./sha1.js":"1HP6w","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1HP6w":[function(require,module,exports) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"3Mx10":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "00000000-0000-0000-0000-000000000000";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"gDO7A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"1HEyE","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fnEL6":[function(require,module,exports) {
var _core = require("@xatom/core");
var _main = require("../modules/generators/social_media_generator/main");
var _main1 = require("../modules/generators/editor_generator/main");
var _main2 = require("../modules/generators/property_description_generator/main");
var _main3 = require("../modules/generators/newsletter_generator/main");
var _main4 = require("../modules/generators/negotiator_generator/main");
var _signup = require("../modules/auth/signup/signup");
var _selectPlan = require("../modules/auth/signup/selectPlan");
var _login = require("../modules/auth/login/login");
var _main5 = require("../modules/dashboard/main");
var _purchaseTokens = require("../modules/dashboard/purchaseTokens");
var _accountSettings = require("../modules/dashboard/accountSettings");
var _passwordReset = require("../modules/auth/reset_password/passwordReset");
var _forgotPassword = require("../modules/auth/reset_password/forgotPassword");
var _magicLink = require("../modules/auth/reset_password/magicLink");
var _history = require("../modules/dashboard/history");
var _outOfTokensDialog = require("../modules/dashboard/outOfTokensDialog");
new (0, _core.WFRoute)("/dashboard/generators/social-media").execute(()=>{
    console.log("init social media generator");
    (0, _main.initSocialMediaGenerator)();
});
new (0, _core.WFRoute)("/dashboard/generators/property-descriptions").execute(()=>{
    console.log("init property description generator");
    (0, _main2.initializePropertyDescriptionGenerator)();
});
new (0, _core.WFRoute)("/dashboard/generators/editor").execute(()=>{
    console.log("init free writing form");
    (0, _main1.initFreeWritingForm)();
});
new (0, _core.WFRoute)("/dashboard/generators/newsletter").execute(()=>{
    console.log("init newsletter generator");
    (0, _main3.initializeNewsletterGenerator)();
});
new (0, _core.WFRoute)("/dashboard/generators/negotiator").execute(()=>{
    console.log("init negotiator generator");
    (0, _main4.initializeNegotiatorGenerator)();
});
// New signup route
new (0, _core.WFRoute)("/sign-up").execute(()=>{
    console.log("init signup form");
    (0, _signup.initSignupForm)();
    (0, _selectPlan.initSelectPlan)();
});
// New login route
new (0, _core.WFRoute)("/login").execute(()=>{
    console.log("init login form");
    (0, _login.initLoginForm)();
});
// New dashboard route
new (0, _core.WFRoute)("/dashboard").execute(()=>{
    console.log("init dashboard");
    (0, _main5.initDashboard)();
});
// New dashboard route
new (0, _core.WFRoute)("/dashboard/(.*)").execute(()=>{
    console.log("init dashboard");
    (0, _main5.initDashboard)();
});
new (0, _core.WFRoute)("/dashboard/generators/(.*)").execute(()=>{
    console.log("init token check");
    (0, _outOfTokensDialog.initTokenCheck)();
});
// New purchase tokens route
new (0, _core.WFRoute)("/dashboard/purchase-tokens").execute(()=>{
    console.log("init purchase tokens");
    (0, _purchaseTokens.initPurchaseTokens)();
});
// New account settings route
new (0, _core.WFRoute)("/dashboard/account").execute(()=>{
    console.log("init account settings");
    (0, _accountSettings.initAccountSettings)();
});
// New history route
new (0, _core.WFRoute)("/dashboard/history").execute(()=>{
    console.log("init history page");
    (0, _history.initHistoryPage)();
});
// New password reset route
new (0, _core.WFRoute)("/reset-password").execute(()=>{
    console.log("init password reset form");
    (0, _passwordReset.initPasswordResetForm)();
});
// New password reset route
new (0, _core.WFRoute)("/forgot-password").execute(()=>{
    console.log("init forgot password form");
    (0, _forgotPassword.initForgotPasswordForm)();
});
// New Magic Link login route
new (0, _core.WFRoute)("/magic-link").execute(()=>{
    console.log("init magic link login");
    (0, _magicLink.initMagicLinkLogin)();
});

},{"@xatom/core":"j9zXV","../modules/generators/social_media_generator/main":"68AEi","../modules/generators/editor_generator/main":"9MwTU","../modules/generators/property_description_generator/main":"j3VjP","../modules/generators/newsletter_generator/main":"isk5z","../modules/generators/negotiator_generator/main":"d3eQl","../modules/auth/signup/signup":"kzyKZ","../modules/auth/signup/selectPlan":"46ozz","../modules/dashboard/main":"6pfYE","../modules/auth/login/login":"9dEMs","../modules/dashboard/purchaseTokens":"jDtnH","../modules/dashboard/accountSettings":"48Xdq","../modules/auth/reset_password/passwordReset":"8zu0B","../modules/auth/reset_password/forgotPassword":"6DacA","../modules/auth/reset_password/magicLink":"fpJ4W","../modules/dashboard/history":"jD2Jr","../modules/dashboard/outOfTokensDialog":"dCwKL"}],"68AEi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSocialMediaGenerator", ()=>initSocialMediaGenerator);
var _core = require("@xatom/core");
var _sliderUtils = require("./utils/sliderUtils");
var _stepOne = require("./steps/stepOne");
var _facebookStep = require("./steps/stepTwo/facebookStep"); // Import Facebook step
var _youtubeStep = require("./steps/stepTwo/youtubeStep"); // Import YouTube step
var _tiktokStep = require("./steps/stepTwo/tiktokStep"); // Import TikTok step
var _instagramStep = require("./steps/stepTwo/instagramStep"); // Import Instagram step
var _pinterestStep = require("./steps/stepTwo/pinterestStep"); // Import Pinterest step
var _linkedinStep = require("./steps/stepTwo/linkedinStep"); // Import LinkedIn step
var _twitterStep = require("./steps/stepTwo/twitterStep"); // Import Twitter step
var _stepThree = require("./steps/stepThree"); // Import Describe Content step
var _stepFour = require("./steps/stepFour"); // Import Select Tone step
var _stepFive = require("./steps/stepFive"); // Import Writing Style step
var _stepSix = require("./steps/stepSix"); // Import Additional Instructions step
var _formUtilities = require("./utils/formUtilities");
function initSocialMediaGenerator() {
    (0, _core.onReady)(()=>{
        const slider = (0, _sliderUtils.initializeSlider)(".multi-step_slider");
        // Prevent form submission on Enter key press
        (0, _formUtilities.preventFormSubmitOnEnter)("#socialMediaGenerator");
        // Initialize Step 1
        (0, _stepOne.initStepOne)();
        // Initialize all steps for the different platforms
        (0, _facebookStep.initFacebookStep)(slider);
        (0, _youtubeStep.initYoutubeStep)(slider);
        (0, _tiktokStep.initTikTokStep)(slider);
        (0, _instagramStep.initInstagramStep)(slider);
        (0, _pinterestStep.initPinterestStep)(slider);
        (0, _linkedinStep.initLinkedInStep)(slider);
        (0, _twitterStep.initTwitterStep)(slider);
        // Initialize the Describe Content step
        (0, _stepThree.initStepThree)(slider);
        // Initialize the Select Tone step
        (0, _stepFour.initSelectToneStep)(slider);
        // Initialize the Writing Style step
        (0, _stepFive.initWritingStyleStep)(slider);
        // Initialize the Additional Instructions step
        (0, _stepSix.initAdditionalInstructionsStep)(slider);
    });
}

},{"@xatom/core":"j9zXV","./utils/sliderUtils":"h4Mtj","./steps/stepOne":"lvyUW","./steps/stepTwo/facebookStep":"aQHNJ","./steps/stepTwo/youtubeStep":"jseHC","./steps/stepTwo/tiktokStep":"hU0I2","./steps/stepTwo/instagramStep":"fX1oD","./steps/stepTwo/pinterestStep":"geCy4","./steps/stepTwo/linkedinStep":"1WzN0","./steps/stepTwo/twitterStep":"eIRRO","./steps/stepThree":"312Tb","./steps/stepFour":"kCaib","./steps/stepFive":"fCsu8","./steps/stepSix":"gf6Ep","./utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"h4Mtj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Initialize the slider
parcelHelpers.export(exports, "initializeSlider", ()=>initializeSlider);
// Function to go to the next slide, skipping inactive slides
parcelHelpers.export(exports, "goNextSlide", ()=>goNextSlide);
// Function to go to the previous slide, skipping inactive slides
parcelHelpers.export(exports, "goPreviousSlide", ()=>goPreviousSlide);
// Function to mark a slide as inactive
parcelHelpers.export(exports, "markSlideInactive", ()=>markSlideInactive);
// Function to mark a slide as active
parcelHelpers.export(exports, "markSlideActive", ()=>markSlideActive);
// Function to handle platform selection and mark slides as active or inactive
parcelHelpers.export(exports, "handlePlatformSelection", ()=>handlePlatformSelection);
var _slider = require("@xatom/slider");
// Shared slider instance
let sliderInstance = null;
function initializeSlider(selector) {
    if (!sliderInstance) sliderInstance = new (0, _slider.WFSlider)(selector); // Initialize slider
    return sliderInstance;
}
function goNextSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let nextIndex = currentIndex + 1;
    // Loop through slides to find the next active one
    while(nextIndex < allSlides.length && isSlideInactive(allSlides[nextIndex]))nextIndex++;
    if (nextIndex < allSlides.length) sliderInstance.goToIndex(nextIndex);
}
function goPreviousSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let prevIndex = currentIndex - 1;
    // Loop through slides to find the previous active one
    while(prevIndex >= 0 && isSlideInactive(allSlides[prevIndex]))prevIndex--;
    if (prevIndex >= 0) sliderInstance.goToIndex(prevIndex);
}
// Helper function to check if a slide is inactive
function isSlideInactive(slide) {
    return slide.getElement().hasAttribute("data-inactive");
}
function markSlideInactive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) slideElement.setAttribute("data-inactive", "true");
}
function markSlideActive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) slideElement.removeAttribute("data-inactive");
}
function handlePlatformSelection(selectedPlatforms) {
    const allPlatformInputs = document.querySelectorAll('input[name="select_platforms"]');
    allPlatformInputs.forEach((input)=>{
        const correspondingSlideId = input.getAttribute("data-corresponding-slide");
        if (correspondingSlideId) {
            if (selectedPlatforms.includes(input)) markSlideActive(correspondingSlideId);
            else markSlideInactive(correspondingSlideId);
        }
    });
}

},{"@xatom/slider":"2zMuG","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2zMuG":[function(require,module,exports) {
var e = require("1a87f3bc23b90fa3"), s = require("37b5fd8189a9f4c7");
var t, i, r, l, d = {};
t = d, i = "WFSlider", r = ()=>o, Object.defineProperty(t, i, {
    get: r,
    set: l,
    enumerable: !0,
    configurable: !0
});
const n = window.jQuery;
class o extends e.WFComponent {
    _sliderConfig = {};
    _slides = [];
    _defaultSwipeDisabled = !1;
    _index = 0;
    _listeners = new Map;
    constructor(e){
        super(e), this.init();
    }
    init() {
        this._defaultSwipeDisabled = "true" === this.getAttribute("data-disable-swipe"), this._sliderConfig = n(this.getElement()).data()[".wSlider"], this._slides = Array.from(this._sliderConfig.slides).map((s)=>new e.WFComponent(s)), this._mask = new e.WFComponent(this._sliderConfig.mask[0]), this._nav = new e.WFComponent(this._sliderConfig.nav[0]), this._left = new e.WFComponent(this._sliderConfig.left[0]), this._right = new e.WFComponent(this._sliderConfig.right[0]), function(e, s) {
            if (!document.styleSheets) return;
            if (0 == document.getElementsByTagName("head").length) return;
            let t, i;
            if (document.styleSheets.length > 0) {
                for(var r = 0, l = document.styleSheets.length; r < l; r++)if (!document.styleSheets[r].disabled) {
                    var d = document.styleSheets[r].media;
                    if (i = typeof d, "string" === i ? "" !== d && -1 === d.indexOf("screen") || (t = document.styleSheets[r]) : "object" == i && ("" !== d.mediaText && -1 === d.mediaText.indexOf("screen") || (t = document.styleSheets[r])), void 0 !== t) break;
                }
            }
            if (void 0 === t) {
                var n = document.createElement("style");
                for(n.type = "text/css", document.getElementsByTagName("head")[0].appendChild(n), r = 0; r < document.styleSheets.length; r++)document.styleSheets[r].disabled || (t = document.styleSheets[r]);
                i = typeof t.media;
            }
            if ("string" === i) {
                for(r = 0, l = t.rules.length; r < l; r++)if (t.rules[r].selectorText && t.rules[r].selectorText.toLowerCase() == e.toLowerCase()) return void (t.rules[r].style.cssText = s);
                t.addRule(e, s);
            } else if ("object" === i) {
                var o = t.cssRules ? t.cssRules.length : 0;
                for(r = 0; r < o; r++)if (t.cssRules[r].selectorText && t.cssRules[r].selectorText.toLowerCase() == e.toLowerCase()) return void (t.cssRules[r].style.cssText = s);
                t.insertRule(e + "{" + s + "}", o);
            }
        }(".xa-slider-disable", "display:none !important;");
        const s = this;
        Object.defineProperty(s._sliderConfig, "index", {
            set: function(e) {
                s._index = e, s._triggerOnChange();
            },
            get: function() {
                return s._index;
            }
        }), this.refereshSlides();
    }
    reloadWFSlider() {
        window.Webflow.require("slider").destroy(), window.Webflow.require("slider").redraw(), window.Webflow.require("slider").ready();
    }
    refereshSlides() {
        this._mask.getChildAsComponents(".w-slide").forEach((e)=>e.remove()), this._slides.reverse().forEach((e)=>{
            this._mask.getElement().prepend(e.getElement());
        }), this._slides.reverse(), this.reloadWFSlider();
    }
    getActiveSlide() {
        return this._slides[this._index];
    }
    getAllSlides() {
        return [
            ...this._slides
        ];
    }
    getSlideByIndex(e) {
        return this._slides[e];
    }
    getActiveSlideIndex() {
        return this._index;
    }
    getPreviousSlideIndex() {
        return this._sliderConfig.previous;
    }
    goNext() {
        this._sliderConfig.right.click();
    }
    goPrevious() {
        this._sliderConfig.left.click();
    }
    goToIndex(e) {
        e >= 0 && e < this._slides.length && (console.log(e), n(this._sliderConfig.nav.children()[e]).click());
    }
    addSlide(s, t = {}) {
        const i = t.index, r = t.cssClass, l = (0, e.createComponent)("div");
        l.addCssClass("w-slide"), r && l.addCssClass(r), l.appendChild(s);
        const d = "number" != typeof i ? -1 : i, n = this._slides;
        d >= 0 && d <= n.length ? n.splice(i, 0, l) : n.push(l), this._slides = [
            ...n
        ], this.refereshSlides();
    }
    removeSlide(e) {
        const s = [
            ...this._slides
        ];
        e >= 0 && e < s.length && s.splice(e, 1), this._slides = [
            ...s
        ], console.log(this._slides), this.refereshSlides();
    }
    getSlideNav() {
        return this._nav;
    }
    setSlideNavigationState(e) {
        e ? (this._left.removeCssClass("xa-slider-disable"), this._right.removeCssClass("xa-slider-disable"), this._nav.removeCssClass("xa-slider-disable"), this.setAttribute("data-disable-swipe", this._defaultSwipeDisabled ? "true" : "false")) : (this._left.addCssClass("xa-slider-disable"), this._right.addCssClass("xa-slider-disable"), this._nav.addCssClass("xa-slider-disable"), this.setAttribute("data-disable-swipe", "true")), this.reloadWFSlider();
    }
    onSlideChange(e) {
        const t = (0, s.v4)();
        return this._listeners.set(t, e), ()=>{
            this._listeners.delete(t);
        };
    }
    _triggerOnChange() {
        Array.from(this._listeners.values()).forEach((e)=>{
            e(this._index, this._sliderConfig.previous);
        });
    }
    getConfig() {
        return this._sliderConfig;
    }
}
var a, h;
a = module.exports, h = d, Object.keys(h).forEach(function(e) {
    "default" === e || "__esModule" === e || a.hasOwnProperty(e) || Object.defineProperty(a, e, {
        enumerable: !0,
        get: function() {
            return h[e];
        }
    });
});

},{"1a87f3bc23b90fa3":"j9zXV","37b5fd8189a9f4c7":"2VHRI"}],"lvyUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepOne", ()=>initStepOne);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
const initStepOne = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitPlatform");
    const errorElement = new (0, _core.WFComponent)("#submitPlatformError");
    submitButton.on("click", ()=>{
        // Collect selected platforms
        const selectedPlatforms = Array.from(document.querySelectorAll('input[name="select_platforms"]:checked'));
        if (selectedPlatforms.length === 0) {
            // If no platforms are selected, show error
            errorElement.setText("Please select at least one platform.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear error message if platforms are selected
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Handle platform selection and mark slides as active or inactive
            (0, _sliderUtils.handlePlatformSelection)(selectedPlatforms);
            // Get current form data from localStorage
            const formData = JSON.parse(localStorage.getItem("formData") || "{}");
            // Retain only content types for selected platforms and remove others
            const platformKeys = {
                Facebook: "facebook_content_type",
                YouTube: "youtube_content_type",
                TikTok: "tiktok_content_type",
                Instagram: "instagram_content_type",
                Pinterest: "pinterest_content_type",
                LinkedIn: "linkedin_content_type",
                Twitter: "twitter_content_type"
            };
            // Convert selected platform values to keys in platformKeys
            const selectedPlatformKeys = selectedPlatforms.map((input)=>platformKeys[input.value]);
            // Filter out unselected platform content types from formData
            for(const key in platformKeys)if (!selectedPlatformKeys.includes(platformKeys[key])) delete formData[platformKeys[key]];
            // Update formData with selected platforms
            const platformData = selectedPlatforms.map((input)=>input.value).join(", ");
            formData.select_platforms = platformData;
            // Store the updated formData back to localStorage
            localStorage.setItem("formData", JSON.stringify(formData));
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"h4Mtj","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"aQHNJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFacebookStep", ()=>initFacebookStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initFacebookStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitFacebook");
    const errorElement = new (0, _core.WFComponent)("#submitFacebookError");
    submitButton.on("click", ()=>{
        // Get selected Facebook content type (radio buttons)
        const selectedContent = document.querySelector('input[name="facebook_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a Facebook content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                facebook_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the Facebook step
    const backButton = new (0, _core.WFComponent)("#backFacebook");
    // Ensure the back button calls goPreviousSlide
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // This should correctly go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"bYmin":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preventFormSubmitOnEnter", ()=>preventFormSubmitOnEnter);
parcelHelpers.export(exports, "updateFormData", ()=>updateFormData);
parcelHelpers.export(exports, "submitFormUtility", ()=>submitFormUtility);
var _core = require("@xatom/core");
const preventFormSubmitOnEnter = (formSelector)=>{
    const form = document.querySelector(formSelector);
    if (form) form.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") event.preventDefault(); // Prevent form submission
    });
};
const updateFormData = (newData)=>{
    // Retrieve the current form data from localStorage
    let formData = JSON.parse(localStorage.getItem("formData") || "{}");
    // Merge new data into the existing form data
    formData = {
        ...formData,
        ...newData
    };
    // Convert comma-separated strings to arrays for specific fields
    [
        "select_platforms",
        "select_tone",
        "select_style"
    ].forEach((key)=>{
        if (formData[key] && typeof formData[key] === "string") formData[key] = formData[key].split(",").map((item)=>item.trim());
    });
    // Save the updated form data back to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
};
const submitFormUtility = (formSelector, useInvisibleForm = false, onSuccess, onError)=>{
    // Retrieve the accumulated form data from localStorage
    const formData = JSON.parse(localStorage.getItem("formData") || "{}");
    const stringFormData = {};
    // Convert all form data to strings to ensure compatibility
    for(const key in formData){
        const value = formData[key];
        if (typeof value === "string") stringFormData[key] = value;
        else if (value instanceof File) stringFormData[key] = value.name; // Example of handling File as string, you might need different logic
        else if (Array.isArray(value)) stringFormData[key] = value.map((file)=>file.name).join(", "); // Handling File array
    }
    if (useInvisibleForm) {
        // Using WFInvisibleForm for submission
        const invisibleForm = new (0, _core.WFInvisibleForm)(formSelector);
        // Set form data
        invisibleForm.setFormData(stringFormData);
        // Handle success and error callbacks
        if (onSuccess) invisibleForm.onSuccess(onSuccess);
        if (onError) invisibleForm.onError(onError);
        // Submit the form
        invisibleForm.submitForm();
    } else {
        // Using WFFormComponent for submission
        const formComponent = new (0, _core.WFFormComponent)(formSelector);
        // Set form data
        formComponent.setFromData(stringFormData);
        // Submit the form
        formComponent.submitWebflowForm();
        // Manually trigger the success and error states if needed
        if (onSuccess) formComponent.onFormSubmit(onSuccess);
        if (onError) formComponent.getErrorComponent().on("click", onError);
    }
};

},{"@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"jseHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initYoutubeStep", ()=>initYoutubeStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initYoutubeStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitYoutube");
    const errorElement = new (0, _core.WFComponent)("#submitYoutubeError");
    submitButton.on("click", ()=>{
        // Get selected YouTube content type (radio buttons)
        const selectedContent = document.querySelector('input[name="youtube_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a YouTube content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                youtube_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the YouTube step
    const backButton = new (0, _core.WFComponent)("#backYoutube");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hU0I2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTikTokStep", ()=>initTikTokStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initTikTokStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitTiktok");
    const errorElement = new (0, _core.WFComponent)("#submitTiktokError");
    submitButton.on("click", ()=>{
        // Get selected TikTok content type (radio buttons)
        const selectedContent = document.querySelector('input[name="tiktok_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a TikTok content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                tiktok_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the TikTok step
    const backButton = new (0, _core.WFComponent)("#backTiktok");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fX1oD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstagramStep", ()=>initInstagramStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initInstagramStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitInstagram");
    const errorElement = new (0, _core.WFComponent)("#submitInstagramError");
    submitButton.on("click", ()=>{
        // Get selected Instagram content type (radio buttons)
        const selectedContent = document.querySelector('input[name="instagram_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select an Instagram content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                instagram_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the Instagram step
    const backButton = new (0, _core.WFComponent)("#backInstagram");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"geCy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPinterestStep", ()=>initPinterestStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initPinterestStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitPinterest");
    const errorElement = new (0, _core.WFComponent)("#submitPinterestError");
    submitButton.on("click", ()=>{
        // Get selected Pinterest content type (radio buttons)
        const selectedContent = document.querySelector('input[name="pinterest_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a Pinterest content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                pinterest_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the Pinterest step
    const backButton = new (0, _core.WFComponent)("#backPinterest");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1WzN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLinkedInStep", ()=>initLinkedInStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initLinkedInStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitLinkedin");
    const errorElement = new (0, _core.WFComponent)("#submitLinkedinError");
    submitButton.on("click", ()=>{
        // Get selected LinkedIn content type (radio buttons)
        const selectedContent = document.querySelector('input[name="linkedin_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a LinkedIn content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                linkedin_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the LinkedIn step
    const backButton = new (0, _core.WFComponent)("#backLinkedin");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"eIRRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTwitterStep", ()=>initTwitterStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../../utils/sliderUtils");
var _formUtilities = require("../../utils/formUtilities"); // Import the updateFormData function
const initTwitterStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitTwitter");
    const errorElement = new (0, _core.WFComponent)("#submitTwitterError");
    submitButton.on("click", ()=>{
        // Get selected Twitter content type (radio buttons)
        const selectedContent = document.querySelector('input[name="twitter_content_type"]:checked');
        if (!selectedContent) {
            // If no content type is selected, show error
            errorElement.setText("Please select a Twitter content type.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if content type is selected
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected content type in localStorage
            (0, _formUtilities.updateFormData)({
                twitter_content_type: selectedContent.value
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button for the Twitter step
    const backButton = new (0, _core.WFComponent)("#backTwitter");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../../utils/sliderUtils":"h4Mtj","../../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"312Tb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepThree", ()=>initStepThree);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtilities = require("../utils/formUtilities"); // Import the updateFormData function
const initStepThree = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitDescription");
    const errorElement = new (0, _core.WFComponent)("#submitDescriptionError");
    const descriptionInput = new (0, _core.WFComponent)("#descriptionInput");
    submitButton.on("click", ()=>{
        // Get the entered description from the textarea
        const description = descriptionInput.getElement().value;
        if (!description.trim()) {
            // If description is empty, show error
            errorElement.setText("Please enter a description.");
            // Display the Error message
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error message if a description is entered
            errorElement.setText("");
            // Hide the Error message
            errorElement.setStyle({
                display: "none"
            });
            // Store the description in localStorage
            (0, _formUtilities.updateFormData)({
                content_description: description
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button
    const backButton = new (0, _core.WFComponent)("#backDescription");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"h4Mtj","../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"kCaib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSelectToneStep", ()=>initSelectToneStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtilities = require("../utils/formUtilities"); // Import the updateFormData function
const initSelectToneStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitTone");
    const errorElement = new (0, _core.WFComponent)("#submitToneError");
    // Get all checkboxes for tone selection
    const toneCheckboxes = document.querySelectorAll('input[name="select_tone"]');
    const maxSelections = 3;
    submitButton.on("click", ()=>{
        // Filter checked checkboxes
        const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.value);
        if (selectedTones.length === 0) {
            // If no tone is selected, show an error
            errorElement.setText("Please select at least one tone.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (selectedTones.length > maxSelections) {
            // If more than 3 tones are selected, show an error
            errorElement.setText(`Please select up to ${maxSelections} tones.`);
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error if the criteria are met
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected tones in localStorage
            const toneData = selectedTones.join(", ");
            (0, _formUtilities.updateFormData)({
                select_tone: toneData
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Limit the user to selecting a maximum of 3 tones
    toneCheckboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change", ()=>{
            const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked);
            // Disable unselected checkboxes if 3 tones are already selected
            toneCheckboxes.forEach((box)=>{
                if (selectedTones.length >= maxSelections && !box.checked) box.disabled = true;
                else box.disabled = false;
            });
        });
    });
    // Handle the back button
    const backButton = new (0, _core.WFComponent)("#backTone");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"h4Mtj","../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fCsu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWritingStyleStep", ()=>initWritingStyleStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtilities = require("../utils/formUtilities"); // Import the updateFormData function
const initWritingStyleStep = (slider)=>{
    const submitButton = new (0, _core.WFComponent)("#submitStyle");
    const errorElement = new (0, _core.WFComponent)("#submitStyleError");
    // Get all checkboxes for writing style selection
    const styleCheckboxes = document.querySelectorAll('input[name="select_style"]');
    const otherCheckbox = document.querySelector("#styleOther");
    const otherTextInput = document.querySelector("#otherText");
    const otherTextError = new (0, _core.WFComponent)("#otherTextError");
    const maxSelections = 3;
    // Initially hide the "Other" text input field
    otherTextInput.style.display = "none";
    // Event listener to handle "Other" checkbox visibility
    otherCheckbox.addEventListener("change", ()=>{
        if (otherCheckbox.checked) otherTextInput.style.display = "block"; // Show the text input
        else {
            otherTextInput.style.display = "none"; // Hide the text input
            otherTextInput.value = ""; // Clear the text field if it's hidden
        }
    });
    submitButton.on("click", ()=>{
        // Filter checked checkboxes
        const selectedStyles = Array.from(styleCheckboxes).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.value);
        // Check if the "Other" option is selected and validate input
        const isOtherSelected = otherCheckbox.checked;
        const otherText = otherTextInput.value.trim();
        if (selectedStyles.length === 0) {
            // If no style is selected, show an error
            errorElement.setText("Please select at least one writing style.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (selectedStyles.length > maxSelections) {
            // If more than 3 styles are selected, show an error
            errorElement.setText(`Please select up to ${maxSelections} styles.`);
            errorElement.setStyle({
                display: "block"
            });
        } else if (isOtherSelected && !otherText) {
            // If "Other" is selected but no text is entered, show an error
            otherTextError.setText("Please specify the other writing style.");
            otherTextError.setStyle({
                display: "block"
            });
        } else {
            // Clear the error if the criteria are met
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            otherTextError.setText("");
            otherTextError.setStyle({
                display: "none"
            });
            // Combine selected styles and "Other" input (if any)
            const styleData = selectedStyles.join(", ");
            const finalStyleData = isOtherSelected ? `${styleData}, ${otherText}` : styleData;
            // Store the selected styles in localStorage
            (0, _formUtilities.updateFormData)({
                select_style: finalStyleData
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Limit the user to selecting a maximum of 3 styles
    styleCheckboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change", ()=>{
            const selectedStyles = Array.from(styleCheckboxes).filter((checkbox)=>checkbox.checked);
            styleCheckboxes.forEach((box)=>{
                const parentLabel = box.parentElement; // Get the parent label element
                if (selectedStyles.length >= maxSelections && !box.checked) {
                    box.disabled = true; // Disable the checkbox if 3 are selected
                    parentLabel?.classList.add("is-disabled"); // Add the "is-disabled" class to the parent
                } else {
                    box.disabled = false; // Enable the checkbox if less than 3 are selected
                    parentLabel?.classList.remove("is-disabled"); // Remove the "is-disabled" class from the parent
                }
            });
        });
    });
    // Handle the back button
    const backButton = new (0, _core.WFComponent)("#backStyle");
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"h4Mtj","../utils/formUtilities":"bYmin","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"gf6Ep":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAdditionalInstructionsStep", ()=>initAdditionalInstructionsStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtilities = require("../utils/formUtilities"); // Import form utilities
var _apiConfig = require("../../../api/apiConfig"); // Import the configured API client
const initAdditionalInstructionsStep = (slider)=>{
    const form = new (0, _core.WFFormComponent)("#socialMediaGenerator"); // Initialize WFFormComponent
    const submitButton = new (0, _core.WFComponent)("#submitInstructions");
    const errorElement = new (0, _core.WFComponent)("#submitInstructionsError");
    const instructionsInput = new (0, _core.WFComponent)("#additionalInstructionsInput");
    const backButton = new (0, _core.WFComponent)("#backInstructions");
    // Elements for showing loading, error, and response content
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    const responseContent = new (0, _core.WFComponent)(".response_content");
    const beginRequestAnimationTrigger = new (0, _core.WFComponent)(".begin_request_animation_trigger");
    const submitFinalButton = new (0, _core.WFComponent)("#submitFinal");
    const backFinalButton = new (0, _core.WFComponent)("#backFinal");
    const submitRetryButton = new (0, _core.WFComponent)("#submitRetry");
    // Function to reset form and UI states
    const resetFormUI = ()=>{
        form.setStyle({
            display: "block"
        });
        requestLoadingWrapper.setStyle({
            display: "none"
        });
        loadingWrapper.setStyle({
            display: "none"
        });
        requestErrorWrapper.setStyle({
            display: "none"
        });
        responseWrapper.setStyle({
            display: "none"
        });
        makeRequestBox.setStyle({
            display: "flex"
        });
    };
    // Intercept form submission
    submitButton.on("click", (event)=>{
        event.preventDefault(); // Prevent the default form submission
        // Get the entered additional instructions
        const instructions = instructionsInput.getElement().value.trim();
        if (!instructions) {
            // If no instructions are entered, show an error
            errorElement.setText("Please enter additional instructions.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error if instructions are entered
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the additional instructions in localStorage
            (0, _formUtilities.updateFormData)({
                additional_instructions: instructions
            });
            // Combine current form data with any additional data needed
            const updatedFormData = {
                ...JSON.parse(localStorage.getItem("formData") || "{}"),
                additional_instructions: instructions
            };
            // Show loading UI
            form.setStyle({
                display: "none"
            });
            requestLoadingWrapper.setStyle({
                display: "block"
            });
            // Final submission process
            submitFinalButton.on("click", ()=>{
                makeRequestBox.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                beginRequestAnimationTrigger.getElement().click();
                // Post the form data to the API endpoint
                const postFormData = (0, _apiConfig.apiClient).post("/generators/social_media", {
                    data: {
                        formData: updatedFormData
                    }
                });
                postFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Loading...");
                    else console.log("Loading complete.");
                });
                // Handle success response
                postFormData.onData((response)=>{
                    if (response.content) {
                        // Initialize an array to hold the individual content sections
                        let sections = [];
                        // Check and append each content section with a corresponding <h1> tag
                        if (response.content.facebook_content) sections.push(`<h1>Facebook</h1>${response.content.facebook_content}`);
                        if (response.content.youtube_content) sections.push(`<h1>YouTube</h1>${response.content.youtube_content}`);
                        if (response.content.tiktok_content) sections.push(`<h1>TikTok</h1>${response.content.tiktok_content}`);
                        if (response.content.instagram_content) sections.push(`<h1>Instagram</h1>${response.content.instagram_content}`);
                        if (response.content.pinterest_content) sections.push(`<h1>Pinterest</h1>${response.content.pinterest_content}`);
                        if (response.content.linkedin_content) sections.push(`<h1>LinkedIn</h1>${response.content.linkedin_content}`);
                        if (response.content.twitter_content) sections.push(`<h1>Twitter</h1>${response.content.twitter_content}`);
                        // Join all sections with <hr> tag between them
                        const htmlContent = sections.join("<hr>");
                        // Show the response content
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                        responseContent.setHTML(htmlContent);
                    } else {
                        // Handle missing or malformed content
                        console.error("Unexpected response structure: 'content' not found");
                        errorElement.setText("There was an error processing the response. Please try again.");
                        errorElement.setStyle({
                            display: "block"
                        });
                    }
                });
                // Handle error response
                postFormData.onError((error)=>{
                    console.error("Form submission failed:", error);
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                // Execute the API request
                postFormData.fetch();
            });
            // Retry mechanism on error
            submitRetryButton.on("click", ()=>{
                requestErrorWrapper.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                // Retry the form submission
                const retryPostFormData = (0, _apiConfig.apiClient).post("/generators/social_media", {
                    data: {
                        formData: updatedFormData
                    }
                });
                retryPostFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Retrying...");
                });
                retryPostFormData.onData((response)=>{
                    if (response.content) {
                        let sections = [];
                        // Check and append each content section with a corresponding <h1> tag
                        if (response.content.facebook_content) sections.push(`<h1>Facebook</h1>${response.content.facebook_content}`);
                        if (response.content.youtube_content) sections.push(`<h1>YouTube</h1>${response.content.youtube_content}`);
                        if (response.content.tiktok_content) sections.push(`<h1>TikTok</h1>${response.content.tiktok_content}`);
                        if (response.content.instagram_content) sections.push(`<h1>Instagram</h1>${response.content.instagram_content}`);
                        if (response.content.pinterest_content) sections.push(`<h1>Pinterest</h1>${response.content.pinterest_content}`);
                        if (response.content.linkedin_content) sections.push(`<h1>LinkedIn</h1>${response.content.linkedin_content}`);
                        if (response.content.twitter_content) sections.push(`<h1>Twitter</h1>${response.content.twitter_content}`);
                        // Join all sections with <hr> tag between them
                        const htmlContent = sections.join("<hr>");
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                        responseContent.setHTML(htmlContent);
                    } else {
                        console.error("Unexpected response structure: 'content' not found");
                        errorElement.setText("There was an error processing the response. Please try again.");
                        errorElement.setStyle({
                            display: "block"
                        });
                    }
                });
                retryPostFormData.onError((error)=>{
                    console.error("Retry failed:", error);
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                retryPostFormData.fetch();
            });
            // Go back to the form
            backFinalButton.on("click", ()=>{
                resetFormUI();
            });
        }
    });
    // Handle the back button
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)(); // Move to the previous slide when back button is clicked
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"h4Mtj","../utils/formUtilities":"bYmin","../../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7VxA0":[function(require,module,exports) {
// src/api/apiConfig.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apiClient", ()=>apiClient);
var _axios = require("@xatom/axios");
// Keys for storing the auth token in localStorage
const TOKEN_KEY = "auth_token";
// Helper function to get token from localStorage
const getTokenFromLocalStorage = ()=>{
    return localStorage.getItem(TOKEN_KEY);
};
// Configure AxiosClient with the base API URL
const axiosConfigurator = new (0, _axios.AxiosClientConfigurator)("https://x8ki-letl-twmt.n7.xano.io/api:lV3_La8Q");
// Add a request interceptor to include the auth token in each request
axiosConfigurator.beforeRequest((config, nextFn)=>{
    const token = getTokenFromLocalStorage();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // Proceed with the request
    nextFn(config);
});
const apiClient = new (0, _axios.AxiosClient)(axiosConfigurator);

},{"@xatom/axios":"gnsnt","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"gnsnt":[function(require,module,exports) {
var $iEn1Z$axios = require("7df01c4521e94834");
var $iEn1Z$uuid = require("c28bb510e1cdf9b2");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $b80ef5563dba82ee$exports = {};
$parcel$export($b80ef5563dba82ee$exports, "AxiosClientConfigurator", ()=>$b80ef5563dba82ee$export$e86c67606777b7aa);
$parcel$export($b80ef5563dba82ee$exports, "AxiosClient", ()=>$b80ef5563dba82ee$export$ad5a3977633fb854);
class $b80ef5563dba82ee$export$e86c67606777b7aa {
    constructor(baseUrl){
        this._beforeRequestOps = new Map([]);
        this._retryRequestOnFailedOps = new Map([]);
        this._baseUrl = baseUrl;
    }
    beforeRequest(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this._beforeRequestOps.set(_id, fn);
        return this;
    }
    retryRequestOnFailed(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this._retryRequestOnFailedOps.set(_id, fn);
        return this;
    }
    getConfig() {
        return {
            baseUrl: this._baseUrl,
            beforeRequestOps: Array.from(this._beforeRequestOps.values()),
            retryRequestOps: Array.from(this._retryRequestOnFailedOps.values())
        };
    }
}
const $b80ef5563dba82ee$var$makeAxiosInstance = (config)=>{
    const _config = config.getConfig();
    const _axios = $parcel$interopDefault($iEn1Z$axios).create({
        baseURL: _config.baseUrl
    });
    _config.beforeRequestOps.forEach((fn)=>{
        _axios.interceptors.request.use((config)=>{
            return new Promise((resolve, reject)=>{
                try {
                    fn(config, (newConfig)=>{
                        resolve(newConfig);
                    });
                } catch (err) {
                    reject(err);
                }
            });
        });
    });
    _axios.interceptors.response.use(undefined, (err)=>{
        let __config = null;
        return new Promise((resolve, reject)=>{
            const { config: config } = err;
            __config = config;
            if (config.retry === 1) reject(err);
            else {
                let _retry = false;
                const finalResponse = ()=>{
                    if (_retry) {
                        __config.retry = 1;
                        setTimeout(()=>{
                            _axios(__config).then(resolve).catch(reject);
                        }, 1000);
                    } else reject(err);
                };
                const processRetry = (_index)=>{
                    if (_index >= _config.retryRequestOps.length) {
                        finalResponse();
                        return;
                    }
                    _config.retryRequestOps[_index](err, __config, (newConfig)=>{
                        __config = newConfig;
                        _retry = true;
                        processRetry(_index + 1);
                    }, ()=>{
                        processRetry(_index + 1);
                    });
                };
                processRetry(0);
            }
        });
    });
    return _axios;
};
const $b80ef5563dba82ee$var$makeRequest = (config, path, method, initialVariables)=>{
    let _internalData;
    let _isLoading = false;
    let _dataListeners = new Map([]);
    let _errorListeners = new Map([]);
    let _loadingListeners = new Map([]);
    const data = ()=>{
        return _internalData;
    };
    const _internalOnData = (data)=>{
        _internalData = data;
        Array.from(_dataListeners.values()).forEach((fn)=>{
            fn(data);
        });
    };
    const _internalOnFailed = (err)=>{
        Array.from(_errorListeners.values()).forEach((fn)=>{
            fn(err);
        });
    };
    const _internalOnLoadingChange = (status)=>{
        _isLoading = status;
        Array.from(_loadingListeners.values()).forEach((fn)=>{
            fn(status);
        });
    };
    const makePathWithData = (path, data)=>{
        return `${path}?${new URLSearchParams(data).toString()}`;
    };
    const fetch = (data, headers)=>{
        return new Promise((resolve, reject)=>{
            _internalOnLoadingChange(true);
            const _data = data || initialVariables || {};
            const finalUrl = method === "GET" || method === "DELETE" ? makePathWithData(path, _data) : path;
            const finalData = method === "GET" || method === "DELETE" ? {} : _data;
            $b80ef5563dba82ee$var$makeAxiosInstance(config).request({
                method: method,
                url: finalUrl,
                data: finalData,
                headers: {
                    ...headers
                }
            }).then((res)=>{
                _internalOnData(res.data);
                resolve(res.data);
            }).catch((err)=>{
                _internalOnFailed(err);
                reject(err);
            }).finally(()=>{
                _internalOnLoadingChange(false);
            });
        });
    };
    const isLoading = ()=>{
        return _isLoading;
    };
    const onLoadingChange = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _loadingListeners.set(_id, fn);
        return ()=>{
            _loadingListeners.delete(_id);
        };
    };
    const onLoadingChangeOnce = (fn)=>{
        const remove = onLoadingChange((status)=>{
            fn(status);
            remove();
        });
    };
    const onData = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _dataListeners.set(_id, fn);
        return ()=>{
            _dataListeners.delete(_id);
        };
    };
    const onDataOnce = (fn)=>{
        const remove = onData((data)=>{
            fn(data);
            remove();
        });
    };
    const onError = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _errorListeners.set(_id, fn);
        return ()=>{
            _errorListeners.delete(_id);
        };
    };
    const onErrorOnce = (fn)=>{
        const remove = onError((err)=>{
            fn(err);
            remove();
        });
    };
    return {
        data: data,
        fetch: fetch,
        isLoading: isLoading,
        onLoadingChange: onLoadingChange,
        onLoadingChangeOnce: onLoadingChangeOnce,
        onData: onData,
        onDataOnce: onDataOnce,
        onError: onError,
        onErrorOnce: onErrorOnce
    };
};
class $b80ef5563dba82ee$export$ad5a3977633fb854 {
    constructor(config){
        this._config = config;
    }
    get(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "GET", config.data);
    }
    post(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "POST", config.data);
    }
    patch(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "PATCH", config.data);
    }
    put(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "PUT", config.data);
    }
    delete(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "DELETE", config.data);
    }
}
$parcel$exportWildcard(module.exports, $iEn1Z$axios);
$parcel$exportWildcard(module.exports, $b80ef5563dba82ee$exports);

},{"7df01c4521e94834":"d7ykx","c28bb510e1cdf9b2":"2VHRI"}],"d7ykx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "getAdapter", ()=>getAdapter);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"fv8OM","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fv8OM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("./adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = (0, _adaptersJsDefault.default).getAdapter;
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"jPFp0","./helpers/bind.js":"2IC2c","./core/Axios.js":"3Zejp","./core/mergeConfig.js":"epfxY","./defaults/index.js":"1yF8t","./helpers/formDataToJSON.js":"hApDW","./cancel/CanceledError.js":"jO1nd","./cancel/CancelToken.js":"h4bm6","./cancel/isCancel.js":"F6Nff","./env/data.js":"3fK8M","./helpers/toFormData.js":"lSL7N","./core/AxiosError.js":"HQaFW","./helpers/spread.js":"gnn7b","./helpers/isAxiosError.js":"2k7V0","./core/AxiosHeaders.js":"exkD3","./adapters/adapters.js":"lzxm5","./helpers/HttpStatusCode.js":"7Mdl9","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"jPFp0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
var process = require("518fded98d9c7267");
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) return setImmediate;
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) callbacks.length && callbacks.shift()();
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === "function", isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
// *********************
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
};

},{"518fded98d9c7267":"3Y5f2","./helpers/bind.js":"2IC2c","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"3Y5f2":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
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
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"2IC2c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"3Zejp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy;
                Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
                try {
                    if (!err.stack) err.stack = stack;
                    else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) err.stack += "\n" + stack;
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        headers && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"jPFp0","../helpers/buildURL.js":"d08gy","./InterceptorManager.js":"856Yz","./dispatchRequest.js":"hzl8f","./mergeConfig.js":"epfxY","./buildFullPath.js":"4Rqxe","../helpers/validator.js":"lCNUo","./AxiosHeaders.js":"exkD3","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"d08gy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"jPFp0","../helpers/AxiosURLSearchParams.js":"fGyft","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fGyft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"lSL7N","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"lSL7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("6eceb6f4c787d896").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"6eceb6f4c787d896":"ez4Zc","../utils.js":"jPFp0","../core/AxiosError.js":"HQaFW","../platform/node/classes/FormData.js":"hmlaW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"ez4Zc":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("ce5249998143b152");
const ieee754 = require("9f9d08cd85b04282");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"ce5249998143b152":"bDaTZ","9f9d08cd85b04282":"5mbe9"}],"bDaTZ":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"5mbe9":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"HQaFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hmlaW":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"856Yz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hzl8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"22iNo","../cancel/isCancel.js":"F6Nff","../defaults/index.js":"1yF8t","../cancel/CanceledError.js":"jO1nd","../core/AxiosHeaders.js":"exkD3","../adapters/adapters.js":"lzxm5","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"22iNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"jPFp0","../defaults/index.js":"1yF8t","../core/AxiosHeaders.js":"exkD3","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1yF8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http",
        "fetch"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if ((0, _utilsJsDefault.default).isResponse(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], (method)=>{
    defaults.headers[method] = {};
});
exports.default = defaults;

},{"../utils.js":"jPFp0","../core/AxiosError.js":"HQaFW","./transitional.js":"e167s","../helpers/toFormData.js":"lSL7N","../helpers/toURLEncodedForm.js":"2Fq21","../platform/index.js":"r83wY","../helpers/formDataToJSON.js":"hApDW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"e167s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2Fq21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"jPFp0","./toFormData.js":"lSL7N","../platform/index.js":"r83wY","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"r83wY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("./common/utils.js");
exports.default = {
    ..._utilsJs,
    ...(0, _indexJsDefault.default)
};

},{"./node/index.js":"2RTtH","./common/utils.js":"8HBUZ","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2RTtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"iGhXk","./classes/FormData.js":"7WcJa","./classes/Blob.js":"7PFty","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"iGhXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"fGyft","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7WcJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7PFty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"8HBUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasBrowserEnv", ()=>hasBrowserEnv);
parcelHelpers.export(exports, "hasStandardBrowserWebWorkerEnv", ()=>hasStandardBrowserWebWorkerEnv);
parcelHelpers.export(exports, "hasStandardBrowserEnv", ()=>hasStandardBrowserEnv);
parcelHelpers.export(exports, "navigator", ()=>_navigator);
parcelHelpers.export(exports, "origin", ()=>origin);
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    "ReactNative",
    "NativeScript",
    "NS"
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hApDW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === "__proto__") return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"exkD3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isHeaders(header)) for (const [key, value] of header.entries())setHeader(value, key, rewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
// reserved names hotfix
(0, _utilsJsDefault.default).reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"jPFp0","../helpers/parseHeaders.js":"7NiBk","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7NiBk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"F6Nff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"jO1nd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"HQaFW","../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"lzxm5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _fetchJs = require("./fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default),
    fetch: (0, _fetchJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>(0, _utilsJsDefault.default).isFunction(adapter) || adapter === null || adapter === false;
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) throw new (0, _axiosErrorJsDefault.default)(`Unknown adapter '${id}'`);
            }
            if (adapter) break;
            rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new (0, _axiosErrorJsDefault.default)(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
        }
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"jPFp0","./http.js":"hmlaW","./xhr.js":"5uq7a","./fetch.js":"cE0EW","../core/AxiosError.js":"HQaFW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"5uq7a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, _resolveConfigJsDefault.default)(config);
        let requestData = _config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = _config.transitional || (0, _transitionalJsDefault.default);
            if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = _config.responseType;
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, _progressEventReducerJs.progressEventReducer)(onDownloadProgress, true);
            request.addEventListener("progress", downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, _progressEventReducerJs.progressEventReducer)(onUploadProgress);
            request.upload.addEventListener("progress", uploadThrottled);
            request.upload.addEventListener("loadend", flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(_config.url);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"jPFp0","./../core/settle.js":"kba47","../defaults/transitional.js":"e167s","../core/AxiosError.js":"HQaFW","../cancel/CanceledError.js":"jO1nd","../helpers/parseProtocol.js":"5HTjU","../platform/index.js":"r83wY","../core/AxiosHeaders.js":"exkD3","../helpers/progressEventReducer.js":"gBQkP","../helpers/resolveConfig.js":"eKVAG","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"kba47":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"HQaFW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"5HTjU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"gBQkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progressEventReducer", ()=>progressEventReducer);
parcelHelpers.export(exports, "progressEventDecorator", ()=>progressEventDecorator);
parcelHelpers.export(exports, "asyncDecorator", ()=>asyncDecorator);
var _speedometerJs = require("./speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
var _throttleJs = require("./throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (0, _throttleJsDefault.default)((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>(0, _utilsJsDefault.default).asap(()=>fn(...args));

},{"./speedometer.js":"2PhIR","./throttle.js":"fL6xp","../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2PhIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fL6xp":[function(require,module,exports) {
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn.apply(null, args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) invoke(args, now);
        else {
            lastArgs = args;
            if (!timer) timer = setTimeout(()=>{
                timer = null;
                invoke(lastArgs);
            }, threshold - passed);
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"eKVAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _isURLSameOriginJs = require("./isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _cookiesJs = require("./cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _mergeConfigJs = require("../core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _buildURLJs = require("./buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
exports.default = (config)=>{
    const newConfig = (0, _mergeConfigJsDefault.default)({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = (0, _axiosHeadersJsDefault.default).from(headers);
    newConfig.url = (0, _buildURLJsDefault.default)((0, _buildFullPathJsDefault.default)(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
    let contentType;
    if ((0, _utilsJsDefault.default).isFormData(data)) {
        if ((0, _indexJsDefault.default).hasStandardBrowserEnv || (0, _indexJsDefault.default).hasStandardBrowserWebWorkerEnv) headers.setContentType(undefined); // Let the browser set it
        else if ((contentType = headers.getContentType()) !== false) {
            // fix semicolon duplication issue for ReactNative FormData implementation
            const [type, ...tokens] = contentType ? contentType.split(";").map((token)=>token.trim()).filter(Boolean) : [];
            headers.setContentType([
                type || "multipart/form-data",
                ...tokens
            ].join("; "));
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if ((0, _indexJsDefault.default).hasStandardBrowserEnv) {
        withXSRFToken && (0, _utilsJsDefault.default).isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, _isURLSameOriginJsDefault.default)(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && (0, _cookiesJsDefault.default).read(xsrfCookieName);
            if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
        }
    }
    return newConfig;
};

},{"../platform/index.js":"r83wY","../utils.js":"jPFp0","./isURLSameOrigin.js":"9GLEV","./cookies.js":"01Z81","../core/buildFullPath.js":"4Rqxe","../core/mergeConfig.js":"epfxY","../core/AxiosHeaders.js":"exkD3","./buildURL.js":"d08gy","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"9GLEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = (0, _indexJsDefault.default).navigator && /(msie|trident)/i.test((0, _indexJsDefault.default).navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"jPFp0","../platform/index.js":"r83wY","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"01Z81":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + "=" + encodeURIComponent(value)
        ];
        (0, _utilsJsDefault.default).isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        (0, _utilsJsDefault.default).isString(path) && cookie.push("path=" + path);
        (0, _utilsJsDefault.default).isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
    },
    read (name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, "", Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};

},{"./../utils.js":"jPFp0","../platform/index.js":"r83wY","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"4Rqxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"2xjHr","../helpers/combineURLs.js":"43ecl","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2xjHr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"43ecl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"epfxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"jPFp0","./AxiosHeaders.js":"exkD3","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"cE0EW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _composeSignalsJs = require("../helpers/composeSignals.js");
var _composeSignalsJsDefault = parcelHelpers.interopDefault(_composeSignalsJs);
var _trackStreamJs = require("../helpers/trackStream.js");
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
var _settleJs = require("../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const supportsRequestStream = isReadableStreamSupported && test(()=>{
    let duplexAccessed = false;
    const hasContentType = new Request((0, _indexJsDefault.default).origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex () {
            duplexAccessed = true;
            return "half";
        }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 65536;
const supportsResponseStream = isReadableStreamSupported && test(()=>(0, _utilsJsDefault.default).isReadableStream(new Response("").body));
const resolvers = {
    stream: supportsResponseStream && ((res)=>res.body)
};
isFetchSupported && ((res)=>{
    [
        "text",
        "arrayBuffer",
        "blob",
        "formData",
        "stream"
    ].forEach((type)=>{
        !resolvers[type] && (resolvers[type] = (0, _utilsJsDefault.default).isFunction(res[type]) ? (res)=>res[type]() : (_, config)=>{
            throw new (0, _axiosErrorJsDefault.default)(`Response type '${type}' is not supported`, (0, _axiosErrorJsDefault.default).ERR_NOT_SUPPORT, config);
        });
    });
})(new Response);
const getBodyLength = async (body)=>{
    if (body == null) return 0;
    if ((0, _utilsJsDefault.default).isBlob(body)) return body.size;
    if ((0, _utilsJsDefault.default).isSpecCompliantForm(body)) return (await new Request(body).arrayBuffer()).byteLength;
    if ((0, _utilsJsDefault.default).isArrayBufferView(body) || (0, _utilsJsDefault.default).isArrayBuffer(body)) return body.byteLength;
    if ((0, _utilsJsDefault.default).isURLSearchParams(body)) body = body + "";
    if ((0, _utilsJsDefault.default).isString(body)) return (await encodeText(body)).byteLength;
};
const resolveBodyLength = async (headers, body)=>{
    const length = (0, _utilsJsDefault.default).toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
};
exports.default = isFetchSupported && (async (config)=>{
    let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions } = (0, _resolveConfigJsDefault.default)(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? (0, _composeSignalsJsDefault.default)([
        signal,
        cancelToken
    ], timeout) : [];
    let finished, request;
    const onFinish = ()=>{
        !finished && setTimeout(()=>{
            composedSignal && composedSignal.unsubscribe();
        });
        finished = true;
    };
    let requestContentLength;
    try {
        if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
                method: "POST",
                body: data,
                duplex: "half"
            });
            let contentTypeHeader;
            if ((0, _utilsJsDefault.default).isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
            if (_request.body) {
                const [onProgress, flush] = (0, _progressEventReducerJs.progressEventDecorator)(requestContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onUploadProgress)));
                data = (0, _trackStreamJs.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
            }
        }
        if (!(0, _utilsJsDefault.default).isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
        // Cloudflare Workers throws when credentials are defined
        // see https://github.com/cloudflare/workerd/issues/902
        const isCredentialsSupported = "credentials" in Request.prototype;
        request = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : undefined
        });
        let response = await fetch(request);
        const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
        if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
            const options = {};
            [
                "status",
                "statusText",
                "headers"
            ].forEach((prop)=>{
                options[prop] = response[prop];
            });
            const responseContentLength = (0, _utilsJsDefault.default).toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && (0, _progressEventReducerJs.progressEventDecorator)(responseContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onDownloadProgress), true)) || [];
            response = new Response((0, _trackStreamJs.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                flush && flush();
                isStreamResponse && onFinish();
            }, encodeText), options);
        }
        responseType = responseType || "text";
        let responseData = await resolvers[(0, _utilsJsDefault.default).findKey(resolvers, responseType) || "text"](response, config);
        !isStreamResponse && onFinish();
        stopTimeout && stopTimeout();
        return await new Promise((resolve, reject)=>{
            (0, _settleJsDefault.default)(resolve, reject, {
                data: responseData,
                headers: (0, _axiosHeadersJsDefault.default).from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config,
                request
            });
        });
    } catch (err) {
        onFinish();
        if (err && err.name === "TypeError" && /fetch/i.test(err.message)) throw Object.assign(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request), {
            cause: err.cause || err
        });
        throw (0, _axiosErrorJsDefault.default).from(err, err && err.code, config, request);
    }
});

},{"../platform/index.js":"r83wY","../utils.js":"jPFp0","../core/AxiosError.js":"HQaFW","../helpers/composeSignals.js":"7wjwj","../helpers/trackStream.js":"l0mIL","../core/AxiosHeaders.js":"exkD3","../helpers/progressEventReducer.js":"gBQkP","../helpers/resolveConfig.js":"eKVAG","../core/settle.js":"kba47","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7wjwj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const composeSignals = (signals, timeout)=>{
    let controller = new AbortController();
    let aborted;
    const onabort = function(cancel) {
        if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = cancel instanceof Error ? cancel : this.reason;
            controller.abort(err instanceof (0, _axiosErrorJsDefault.default) ? err : new (0, _canceledErrorJsDefault.default)(err instanceof Error ? err.message : err));
        }
    };
    let timer = timeout && setTimeout(()=>{
        onabort(new (0, _axiosErrorJsDefault.default)(`timeout ${timeout} of ms exceeded`, (0, _axiosErrorJsDefault.default).ETIMEDOUT));
    }, timeout);
    const unsubscribe = ()=>{
        if (signals) {
            timer && clearTimeout(timer);
            timer = null;
            signals.forEach((signal)=>{
                signal && (signal.removeEventListener ? signal.removeEventListener("abort", onabort) : signal.unsubscribe(onabort));
            });
            signals = null;
        }
    };
    signals.forEach((signal)=>signal && signal.addEventListener && signal.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = unsubscribe;
    return [
        signal,
        ()=>{
            timer && clearTimeout(timer);
            timer = null;
        }
    ];
};
exports.default = composeSignals;

},{"../cancel/CanceledError.js":"jO1nd","../core/AxiosError.js":"HQaFW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"l0mIL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "streamChunk", ()=>streamChunk);
parcelHelpers.export(exports, "readBytes", ()=>readBytes);
parcelHelpers.export(exports, "trackStream", ()=>trackStream);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize, encode) {
    for await (const chunk of iterable)yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode(String(chunk)), chunkSize);
};
const trackStream = (stream, chunkSize, onProgress, onFinish, encode)=>{
    const iterator = readBytes(stream, chunkSize, encode);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"lCNUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"3fK8M","../core/AxiosError.js":"HQaFW","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"3fK8M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.7.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"h4bm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"jO1nd","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"gnn7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2k7V0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"jPFp0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7Mdl9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"9MwTU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFreeWritingForm", ()=>initFreeWritingForm);
var _core = require("@xatom/core");
var _apiConfig = require("../../api/apiConfig");
const initFreeWritingForm = ()=>{
    const form = new (0, _core.WFFormComponent)("#freeWritingForm"); // Initialize WFFormComponent
    const submitButton = new (0, _core.WFComponent)("#submitFreeWriting");
    const errorElement = new (0, _core.WFComponent)("#submitFreeWritingError");
    // New components for the additional interactions
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper"); // New component to show the response
    const responseContent = new (0, _core.WFComponent)(".response_content"); // Target for response HTML
    const backFinalButton = new (0, _core.WFComponent)("#backFinal");
    const submitFinalButton = new (0, _core.WFComponent)("#submitFinal");
    const submitRetryButton = new (0, _core.WFComponent)("#submitRetry");
    const beginRequestAnimationTrigger = new (0, _core.WFComponent)(".begin_request_animation_trigger");
    // Function to reset the form and UI to initial state
    const resetFormUI = ()=>{
        form.setStyle({
            display: "block"
        });
        requestLoadingWrapper.setStyle({
            display: "none"
        });
        loadingWrapper.setStyle({
            display: "none"
        });
        requestErrorWrapper.setStyle({
            display: "none"
        });
        responseWrapper.setStyle({
            display: "none"
        });
        makeRequestBox.setStyle({
            display: "flex"
        });
    };
    // Intercept form submission
    form.onFormSubmit((data, event)=>{
        event.preventDefault(); // Prevent the default form submission
        // Get the content from Quill editor
        const quillEditor = document.querySelector(".ql-editor");
        const formData = quillEditor.innerHTML.trim();
        if (!formData || formData === "<p><br></p>") {
            // If no content is entered, show an error
            errorElement.setText("Please enter your free writing.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear the error if content is entered
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Hide the form and show the initial request loading wrapper
            form.setStyle({
                display: "none"
            });
            requestLoadingWrapper.setStyle({
                display: "block"
            });
            // Add event listener for #submitFinal button
            submitFinalButton.on("click", ()=>{
                // Hide the request box and show the loading wrapper
                makeRequestBox.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                // Trigger the animation
                beginRequestAnimationTrigger.getElement().click();
                // Simulate the request
                const postFormData = (0, _apiConfig.apiClient).post("/generators/editor", {
                    data: {
                        formData
                    }
                });
                // Handle loading, success, and error states
                postFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Loading...");
                    else console.log("Loading complete.");
                });
                postFormData.onData((response)=>{
                    console.log("Form submitted successfully:", response);
                    // Check if 'choices' and 'message' exist in the response
                    const messageContent = response?.response?.result?.choices?.[0]?.message?.content;
                    if (messageContent) {
                        // Extract the HTML content between the ```html ... ```
                        const htmlContent = messageContent.replace(/```html|```/g, "").trim();
                        // Insert the HTML content into the .response_content element
                        responseContent.setHTML(htmlContent);
                        // Hide the loading wrapper and show the response wrapper
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                    } else console.error("Invalid response format. No content found.");
                });
                postFormData.onError((error)=>{
                    console.error("Form submission failed:", error);
                    // Hide the loading wrapper and show the error wrapper
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                postFormData.fetch();
            });
            // Add event listener for #submitRetry button (retry request)
            submitRetryButton.on("click", ()=>{
                // Hide the error box and show the loading wrapper again
                requestErrorWrapper.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                // Retry the request (same logic as before)
                const retryPostFormData = (0, _apiConfig.apiClient).post("/generators/editor", {
                    data: {
                        formData
                    }
                });
                retryPostFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Retrying...");
                });
                retryPostFormData.onData((response)=>{
                    console.log("Retry successful:", response);
                    const messageContent = response?.response?.result?.choices?.[0]?.message?.content;
                    if (messageContent) {
                        const htmlContent = messageContent.replace(/```html|```/g, "").trim();
                        responseContent.setHTML(htmlContent);
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                    } else console.error("Invalid response format. No content found.");
                });
                retryPostFormData.onError((error)=>{
                    console.error("Retry failed:", error);
                    // Show the error box again if the retry fails
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                retryPostFormData.fetch();
            });
            // Add event listener for #backFinal button (go back to form)
            backFinalButton.on("click", ()=>{
                resetFormUI(); // Reset UI to the form display
            });
        }
    });
};

},{"@xatom/core":"j9zXV","../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"j3VjP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializePropertyDescriptionGenerator", ()=>initializePropertyDescriptionGenerator);
var _sliderUtils = require("./utils/sliderUtils");
var _stepOne = require("./steps/stepOne");
var _stepTwo = require("./steps/stepTwo");
var _stepThree = require("./steps/stepThree");
var _core = require("@xatom/core");
var _formUtils = require("./utils/formUtils");
function initializePropertyDescriptionGenerator() {
    (0, _core.onReady)(()=>{
        const slider = (0, _sliderUtils.initializeSlider)(".multi-step_slider");
        // Prevent form submission on Enter key press
        (0, _formUtils.preventFormSubmitOnEnter)("#propertyDescriptionGenerator");
        // Initialize the first step
        (0, _stepOne.initStepOne)();
        // Initialize the second step
        (0, _stepTwo.initStepTwo)();
        // Initialize the third step
        (0, _stepThree.initStepThree)();
    });
}

},{"./utils/sliderUtils":"l6xx5","./steps/stepOne":"7xdwN","./steps/stepTwo":"f41a8","./steps/stepThree":"7xjKl","@xatom/core":"j9zXV","./utils/formUtils":"88BvI","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"l6xx5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Initialize the slider
parcelHelpers.export(exports, "initializeSlider", ()=>initializeSlider);
// Function to go to the next slide
parcelHelpers.export(exports, "goNextSlide", ()=>goNextSlide);
// Function to go to the previous slide
parcelHelpers.export(exports, "goPreviousSlide", ()=>goPreviousSlide);
// Function to mark a slide as inactive
parcelHelpers.export(exports, "markSlideInactive", ()=>markSlideInactive);
// Function to mark a slide as active
parcelHelpers.export(exports, "markSlideActive", ()=>markSlideActive);
var _slider = require("@xatom/slider");
// Shared slider instance
let sliderInstance = null;
function initializeSlider(selector) {
    if (!sliderInstance) sliderInstance = new (0, _slider.WFSlider)(selector); // Initialize slider
    return sliderInstance;
}
function goNextSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let nextIndex = currentIndex + 1;
    if (nextIndex < allSlides.length) sliderInstance.goToIndex(nextIndex);
}
function goPreviousSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let prevIndex = currentIndex - 1;
    if (prevIndex >= 0) sliderInstance.goToIndex(prevIndex);
}
// Helper function to check if a slide is inactive
function isSlideInactive(slide) {
    return slide.getElement().hasAttribute("data-inactive");
}
function markSlideInactive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) slideElement.setAttribute("data-inactive", "true");
}
function markSlideActive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) slideElement.removeAttribute("data-inactive");
}

},{"@xatom/slider":"2zMuG","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7xdwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepOne", ()=>initStepOne);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepOne = ()=>{
    const form = new (0, _core.WFFormComponent)("#propertyDescriptionGenerator");
    const nextButton = new (0, _core.WFComponent)("#submitStepOne");
    const errorElement = new (0, _core.WFComponent)("#submitStepOneError");
    const addressInput = new (0, _core.WFComponent)("#propertyAddressInput");
    const inputElement = addressInput.getElement();
    /*
  // Autocomplete functionality - commented out
  const dropdown = document.createElement('div');
  dropdown.id = 'autocomplete-dropdown';
  dropdown.style.position = 'absolute';
  dropdown.style.backgroundColor = 'white';
  dropdown.style.border = '1px solid #ccc';
  dropdown.style.width = '100%';
  dropdown.style.zIndex = '1000';
  inputElement.parentNode?.appendChild(dropdown);

  inputElement.addEventListener('input', function () {
    const query = inputElement.value;

    if (query.length >= 3) {
      apiClient.get('/autocomplete', { params: { text: query } })
        .fetch()
        .then((data: GeoapifyResponse) => {
          const suggestions = data.features;
          dropdown.innerHTML = ''; 

          suggestions.forEach(suggestion => {
            const option = document.createElement('div');
            option.className = 'dropdown-option';
            option.style.padding = '8px';
            option.style.cursor = 'pointer';
            option.innerHTML = suggestion.properties.formatted;
            option.addEventListener('click', () => {
              inputElement.value = suggestion.properties.formatted;
              dropdown.innerHTML = ''; 
            });
            dropdown.appendChild(option);
          });
        })
        .catch((error: any) => {
          console.error('Error fetching autocomplete suggestions:', error);
        });
    } else {
      dropdown.innerHTML = ''; 
    }
  });
  */ // Handle the next step button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default button action
        const address = inputElement.value.trim();
        if (!address) {
            errorElement.setText("Please enter the property address.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            (0, _formUtils.updateFormData)({
                property_address: address
            });
            (0, _sliderUtils.goNextSlide)();
        }
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"88BvI","../utils/sliderUtils":"l6xx5","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"88BvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preventFormSubmitOnEnter", ()=>preventFormSubmitOnEnter);
parcelHelpers.export(exports, "updateFormData", ()=>updateFormData);
parcelHelpers.export(exports, "submitFormUtility", ()=>submitFormUtility);
var _core = require("@xatom/core");
const preventFormSubmitOnEnter = (formSelector)=>{
    const form = document.querySelector(formSelector);
    if (form) form.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") event.preventDefault(); // Prevent form submission
    });
};
const updateFormData = (newData)=>{
    // Retrieve the current form data from localStorage
    let formData = JSON.parse(localStorage.getItem("propertyFormData") || "{}");
    // Merge new data into the existing form data
    formData = {
        ...formData,
        ...newData
    };
    // Save the updated form data back to localStorage
    localStorage.setItem("propertyFormData", JSON.stringify(formData));
};
const submitFormUtility = (formSelector, useInvisibleForm = false, onSuccess, onError)=>{
    // Retrieve the accumulated form data from localStorage
    const formData = JSON.parse(localStorage.getItem("propertyFormData") || "{}");
    const stringFormData = {};
    // Convert all form data to strings to ensure compatibility
    for(const key in formData){
        const value = formData[key];
        if (typeof value === "string") stringFormData[key] = value;
        else if (value instanceof File) stringFormData[key] = value.name; // Example of handling File as string, you might need different logic
        else if (Array.isArray(value)) stringFormData[key] = value.map((file)=>file.name).join(", "); // Handling File array
    }
    if (useInvisibleForm) {
        // Using WFInvisibleForm for submission
        const invisibleForm = new (0, _core.WFInvisibleForm)(formSelector);
        // Set form data
        invisibleForm.setFormData(stringFormData);
        // Handle success and error callbacks
        if (onSuccess) invisibleForm.onSuccess(onSuccess);
        if (onError) invisibleForm.onError(onError);
        // Submit the form
        invisibleForm.submitForm();
    } else {
        // Using WFFormComponent for submission
        const formComponent = new (0, _core.WFFormComponent)(formSelector);
        // Set form data
        formComponent.setFromData(stringFormData);
        // Submit the form
        formComponent.submitWebflowForm();
        // Manually trigger the success and error states if needed
        if (onSuccess) formComponent.onFormSubmit(onSuccess);
        if (onError) formComponent.getErrorComponent().on("click", onError);
    }
};

},{"@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"f41a8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepTwo", ()=>initStepTwo);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepTwo = ()=>{
    const form = new (0, _core.WFFormComponent)("#propertyDescriptionGenerator");
    const nextButton = new (0, _core.WFComponent)("#submitStepTwo");
    const backButton = new (0, _core.WFComponent)("#backStepTwo");
    const errorElement = new (0, _core.WFComponent)("#submitStepTwoError");
    const neighborhoodInput = new (0, _core.WFComponent)("#neighborhoodInput");
    const neighborhoodFeaturesInput = new (0, _core.WFComponent)("#neighborhoodFeaturesInput");
    const areaDescriptionInput = new (0, _core.WFComponent)("#areaDescriptionInput");
    const hotSpotInput = new (0, _core.WFComponent)("#hotSpotInput");
    // Handle the next step button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default button action
        // Get the input values
        const neighborhood = neighborhoodInput.getElement().value.trim();
        const neighborhoodFeatures = neighborhoodFeaturesInput.getElement().value.trim();
        const areaDescription = areaDescriptionInput.getElement().value.trim();
        const hotSpots = hotSpotInput.getElement().value.trim();
        // Validate inputs (basic validation)
        if (!neighborhood || !neighborhoodFeatures || !areaDescription || !hotSpots) {
            // Show an error if any field is not filled
            errorElement.setText("Please fill out all fields.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Hide the error if all fields are filled
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the form data in localStorage
            (0, _formUtils.updateFormData)({
                neighborhood_subdivision: neighborhood,
                neighborhood_features: neighborhoodFeatures,
                area_description: areaDescription,
                hot_spot: hotSpots
            });
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle the back button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default button action
        // Move to the previous slide
        (0, _sliderUtils.goPreviousSlide)();
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"88BvI","../utils/sliderUtils":"l6xx5","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7xjKl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepThree", ()=>initStepThree);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
var _apiConfig = require("../../../api/apiConfig"); // Import the apiClient
const initStepThree = ()=>{
    const form = new (0, _core.WFFormComponent)("#propertyDescriptionGenerator");
    const submitButton = new (0, _core.WFComponent)("#submitStepThree");
    const backButton = new (0, _core.WFComponent)("#backStepThree");
    const errorElement = new (0, _core.WFComponent)("#submitStepThreeError");
    const squareFootageInput = new (0, _core.WFComponent)("#squareFootageInput");
    const lotSizeInput = new (0, _core.WFComponent)("#lotSizeInput");
    const bedroomsInput = new (0, _core.WFComponent)("#bedroomsInput");
    const bathroomsInput = new (0, _core.WFComponent)("#bathroomsInput");
    const otherFeaturesInput = new (0, _core.WFComponent)("#otherFeaturesInput");
    const interiorDescriptionInput = new (0, _core.WFComponent)("#interiorDescriptionInput");
    const renovationsInput = new (0, _core.WFComponent)("#renovationsInput");
    const favoriteThingInput = new (0, _core.WFComponent)("#favoriteThingInput");
    const coolFeatureInput = new (0, _core.WFComponent)("#coolFeatureInput");
    const vibeInput = new (0, _core.WFComponent)("#vibeInput");
    const outdoorSpaceInput = new (0, _core.WFComponent)("#outdoorSpaceInput");
    const idealForInput = new (0, _core.WFComponent)("#idealForInput");
    // Elements for showing loading, error, and response content
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    const responseContent = new (0, _core.WFComponent)(".response_content");
    const beginRequestAnimationTrigger = new (0, _core.WFComponent)(".begin_request_animation_trigger");
    const submitFinalButton = new (0, _core.WFComponent)("#submitFinal");
    const backFinalButton = new (0, _core.WFComponent)("#backFinal");
    const submitRetryButton = new (0, _core.WFComponent)("#submitRetry");
    // Function to reset form and UI states
    const resetFormUI = ()=>{
        form.setStyle({
            display: "block"
        });
        requestLoadingWrapper.setStyle({
            display: "none"
        });
        loadingWrapper.setStyle({
            display: "none"
        });
        requestErrorWrapper.setStyle({
            display: "none"
        });
        responseWrapper.setStyle({
            display: "none"
        });
        makeRequestBox.setStyle({
            display: "flex"
        });
    };
    submitButton.on("click", (event)=>{
        event.preventDefault();
        // Extracting form input values
        const squareFootage = squareFootageInput.getElement().value.trim();
        const lotSize = lotSizeInput.getElement().value.trim();
        const bedrooms = bedroomsInput.getElement().value.trim();
        const bathrooms = bathroomsInput.getElement().value.trim();
        const otherFeatures = otherFeaturesInput.getElement().value.trim();
        const interiorDescription = interiorDescriptionInput.getElement().value.trim();
        const renovations = renovationsInput.getElement().value.trim();
        const favoriteThing = favoriteThingInput.getElement().value.trim();
        const coolFeature = coolFeatureInput.getElement().value.trim();
        const vibe = vibeInput.getElement().value.trim();
        const outdoorSpace = outdoorSpaceInput.getElement().value.trim();
        const idealFor = idealForInput.getElement().value.trim();
        // Form validation
        if (!squareFootage || !lotSize || !bedrooms || !bathrooms || !otherFeatures || !interiorDescription || !renovations || !favoriteThing || !coolFeature || !vibe || !outdoorSpace || !idealFor) {
            errorElement.setText("Please fill out all fields.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            const existingFormData = JSON.parse(localStorage.getItem("propertyFormData") || "{}");
            const updatedFormData = {
                ...existingFormData,
                square_footage: squareFootage,
                lot_size: lotSize,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                other_features: otherFeatures,
                interior_description: interiorDescription,
                renovations: renovations,
                favorite_thing: favoriteThing,
                cool_feature: coolFeature,
                vibe: vibe,
                outdoor_space: outdoorSpace,
                ideal_for: idealFor
            };
            (0, _formUtils.updateFormData)(updatedFormData);
            // Show loading UI
            form.setStyle({
                display: "none"
            });
            requestLoadingWrapper.setStyle({
                display: "block"
            });
            submitFinalButton.on("click", ()=>{
                makeRequestBox.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                beginRequestAnimationTrigger.getElement().click();
                // Make API request
                const postFormData = (0, _apiConfig.apiClient).post("/generators/property_descriptions", {
                    data: {
                        formData: updatedFormData
                    }
                });
                postFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Loading...");
                    else console.log("Loading complete.");
                });
                postFormData.onData((response)=>{
                    if (response && response.content) {
                        // Success: Show response content
                        const htmlContent = response.content.replace(/```html|```/g, "") // Remove ```html and ```
                        .trim(); // Trim leading/trailing spaces
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                        // Insert the cleaned HTML content into responseContent
                        responseContent.setHTML(htmlContent);
                    } else {
                        // Handle the case where content is not found
                        console.error("Unexpected response structure: 'content' not found");
                        errorElement.setText("There was an error processing the response. Please try again.");
                        errorElement.setStyle({
                            display: "block"
                        });
                    }
                });
                postFormData.onError((error)=>{
                    console.error("Form submission failed:", error);
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                postFormData.fetch();
            });
            // Retry request on error
            submitRetryButton.on("click", ()=>{
                requestErrorWrapper.setStyle({
                    display: "none"
                });
                loadingWrapper.setStyle({
                    display: "flex"
                });
                // Retry the request
                const retryPostFormData = (0, _apiConfig.apiClient).post("/generators/property_descriptions", {
                    data: {
                        formData: updatedFormData
                    }
                });
                retryPostFormData.onLoadingChange((isLoading)=>{
                    if (isLoading) console.log("Retrying...");
                });
                retryPostFormData.onData((response)=>{
                    if (response && response.content) {
                        const htmlContent = response.content.replace(/```html|```/g, "") // Clean up unwanted markdown
                        .trim(); // Trim leading/trailing spaces
                        loadingWrapper.setStyle({
                            display: "none"
                        });
                        requestLoadingWrapper.setStyle({
                            display: "none"
                        });
                        responseWrapper.setStyle({
                            display: "block"
                        });
                        responseContent.setHTML(htmlContent);
                    } else {
                        console.error("Unexpected response structure: 'content' not found");
                        errorElement.setText("There was an error processing the response. Please try again.");
                        errorElement.setStyle({
                            display: "block"
                        });
                    }
                });
                retryPostFormData.onError((error)=>{
                    console.error("Retry failed:", error);
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                });
                retryPostFormData.fetch();
            });
            // Go back to the form
            backFinalButton.on("click", ()=>{
                resetFormUI();
            });
        }
    });
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)();
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"88BvI","../utils/sliderUtils":"l6xx5","../../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"isk5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeNewsletterGenerator", ()=>initializeNewsletterGenerator);
var _sliderUtils = require("./utils/sliderUtils");
var _stepOne = require("./steps/stepOne");
var _stepTwo = require("./steps/stepTwo");
var _personalNote = require("./steps/personalNote");
var _businessNews = require("./steps/businessNews");
var _lifeUpdate = require("./steps/lifeUpdate");
var _newListings = require("./steps/newListings");
var _somethingFun = require("./steps/somethingFun");
var _testimonials = require("./steps/testimonials");
var _formUtils = require("./utils/formUtils");
var _core = require("@xatom/core");
function initializeNewsletterGenerator() {
    (0, _core.onReady)(()=>{
        // Prevent form submission on Enter key press
        (0, _formUtils.preventFormSubmitOnEnter)("#newsletterGeneratorForm");
        // Initialize the slider for the multi-step form
        const slider = (0, _sliderUtils.initializeSlider)(".multi-step_slider");
        // Initialize the steps
        (0, _stepOne.initStepOne)();
        (0, _stepTwo.initStepTwo)();
        (0, _personalNote.initPersonalNoteStep)();
        (0, _businessNews.initBusinessNewsStep)();
        (0, _lifeUpdate.initLifeUpdateStep)();
        (0, _newListings.initNewListingsStep)();
        (0, _somethingFun.initSomethingFunStep)();
        (0, _testimonials.initTestimonialStep)();
    });
}

},{"./utils/sliderUtils":"abPgU","./steps/stepOne":"2HHOi","./steps/stepTwo":"b5NVt","./steps/personalNote":"1sVlx","./steps/businessNews":"2N1G0","./steps/lifeUpdate":"bwxW9","./steps/newListings":"evvzv","./steps/somethingFun":"9FHnX","./steps/testimonials":"fZ99v","./utils/formUtils":"l2Aqw","@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"abPgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Initialize the slider
parcelHelpers.export(exports, "initializeSlider", ()=>initializeSlider);
// Function to go to the next slide, skipping inactive slides
parcelHelpers.export(exports, "goNextSlide", ()=>goNextSlide);
// Function to go to the previous slide, skipping inactive slides
parcelHelpers.export(exports, "goPreviousSlide", ()=>goPreviousSlide);
// Function to check if the current slide is the last active slide
parcelHelpers.export(exports, "isLastActiveSlide", ()=>isLastActiveSlide);
// Function to mark a slide as inactive
parcelHelpers.export(exports, "markSlideInactive", ()=>markSlideInactive);
// Function to mark a slide as active
parcelHelpers.export(exports, "markSlideActive", ()=>markSlideActive);
// Function to handle sections to include and mark slides as active or inactive
parcelHelpers.export(exports, "handleSectionsToInclude", ()=>handleSectionsToInclude);
var _slider = require("@xatom/slider");
var _formUtils = require("./formUtils");
// Shared slider instance
let sliderInstance = null;
function initializeSlider(selector) {
    if (!sliderInstance) sliderInstance = new (0, _slider.WFSlider)(selector); // Initialize slider
    return sliderInstance;
}
function goNextSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let nextIndex = currentIndex + 1;
    // Loop through slides to find the next active one
    while(nextIndex < allSlides.length && isSlideInactive(allSlides[nextIndex]))nextIndex++;
    if (nextIndex < allSlides.length) sliderInstance.goToIndex(nextIndex); // Navigate to the next active slide
    // Recalculate button text after navigating
    (0, _formUtils.updateNextButtonText)();
}
function goPreviousSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let prevIndex = currentIndex - 1;
    // Loop through slides to find the previous active one
    while(prevIndex >= 0 && isSlideInactive(allSlides[prevIndex]))prevIndex--;
    if (prevIndex >= 0) sliderInstance.goToIndex(prevIndex);
    // Recalculate button text after navigating
    (0, _formUtils.updateNextButtonText)();
}
// Helper function to check if a slide is inactive
function isSlideInactive(slide) {
    return slide.getElement().hasAttribute("data-inactive");
}
function isLastActiveSlide() {
    if (!sliderInstance) return false;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    // Check if the current slide is marked as the final step
    return allSlides[currentIndex].getElement().hasAttribute("data-final-step");
}
function markSlideInactive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) {
        slideElement.setAttribute("data-inactive", "true");
        console.log(`Slide ${slideId} marked as inactive.`);
    } else console.warn(`Slide with ID ${slideId} not found to mark as inactive.`);
}
function markSlideActive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) {
        slideElement.removeAttribute("data-inactive");
        console.log(`Slide ${slideId} marked as active.`);
    } else console.warn(`Slide with ID ${slideId} not found to mark as active.`);
}
function handleSectionsToInclude(selectedPlatforms) {
    const allPlatformInputs = document.querySelectorAll('input[type="radio"]');
    let lastActiveSlideId = null;
    allPlatformInputs.forEach((input)=>{
        const correspondingSlideId = input.getAttribute("data-corresponding-slide");
        if (correspondingSlideId) {
            if (input.checked && input.value === "false") markSlideInactive(correspondingSlideId);
            else if (input.checked && input.value === "true") {
                markSlideActive(correspondingSlideId);
                lastActiveSlideId = correspondingSlideId; // Track the last active slide
            }
        }
    });
    // Remove the final-step attribute from all slides first
    document.querySelectorAll(".multi-step_slide").forEach((slide)=>{
        slide.removeAttribute("data-final-step");
    });
    // Mark the last active slide as the final step
    if (lastActiveSlideId) {
        const lastActiveSlide = document.querySelector(`#${lastActiveSlideId}`);
        if (lastActiveSlide) {
            lastActiveSlide.setAttribute("data-final-step", "true");
            console.log(`Slide ${lastActiveSlideId} marked as final step.`);
        }
    }
    // After recalculating active slides, update the button text
    (0, _formUtils.updateNextButtonText)();
}

},{"@xatom/slider":"2zMuG","./formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"l2Aqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateFormData", ()=>updateFormData);
parcelHelpers.export(exports, "handleFormSubmit", ()=>handleFormSubmit);
parcelHelpers.export(exports, "checkAndHandleSubmit", ()=>checkAndHandleSubmit);
parcelHelpers.export(exports, "preventFormSubmitOnEnter", ()=>preventFormSubmitOnEnter);
parcelHelpers.export(exports, "updateNextButtonText", ()=>updateNextButtonText);
parcelHelpers.export(exports, "resetFinalFormUI", ()=>resetFinalFormUI);
var _apiConfig = require("../../../api/apiConfig");
var _sliderUtils = require("./sliderUtils");
var _core = require("@xatom/core");
const updateFormData = (newData)=>{
    let formData = JSON.parse(localStorage.getItem("formData") || "{}");
    formData = {
        ...formData,
        ...newData
    };
    localStorage.setItem("formData", JSON.stringify(formData));
};
const handleFormSubmit = (formSelector, endpoint)=>{
    const form = new (0, _core.WFFormComponent)(formSelector);
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    const responseContent = new (0, _core.WFComponent)(".response_content");
    const submitFinalButton = new (0, _core.WFComponent)("#submitFinal");
    const submitRetryButton = new (0, _core.WFComponent)("#submitRetry");
    const backFinalButton = new (0, _core.WFComponent)("#backFinal");
    const beginRequestAnimationTrigger = new (0, _core.WFComponent)(".begin_request_animation_trigger");
    console.log("Form submission process started...");
    // Hide form and show the request loading wrapper to prepare user for final submission
    form.setStyle({
        display: "none"
    });
    requestLoadingWrapper.setStyle({
        display: "block"
    });
    makeRequestBox.setStyle({
        display: "flex"
    });
    // Wait for the user to click the "Submit Final" button to proceed with submission
    submitFinalButton.on("click", ()=>{
        console.log("Final submission confirmed by user.");
        // Hide the request box and show the loading wrapper during API request
        makeRequestBox.setStyle({
            display: "none"
        });
        beginRequestAnimationTrigger.getElement().click();
        loadingWrapper.setStyle({
            display: "flex"
        });
        // Collect form data
        const formData = JSON.parse(localStorage.getItem("formData") || "{}");
        // Make the API request
        const postFormData = (0, _apiConfig.apiClient).post(endpoint, {
            data: {
                formData
            }
        });
        postFormData.onLoadingChange((isLoading)=>{
            if (isLoading) console.log("Loading...");
            else {
                console.log("Loading complete.");
                loadingWrapper.setStyle({
                    display: "none"
                });
            }
        });
        // Handle success response
        postFormData.onData((response)=>{
            console.log("Form submitted successfully:", response);
            const messageContent = response?.content; // Accessing response.content
            if (messageContent) {
                const htmlContent = messageContent.replace(/```html|```/g, "").trim();
                responseContent.setHTML(htmlContent);
                // Hide loading and show the response wrapper
                requestLoadingWrapper.setStyle({
                    display: "none"
                });
                responseWrapper.setStyle({
                    display: "block"
                });
            } else console.error("Unexpected response format. No content found.");
        });
        // Handle error response
        postFormData.onError((error)=>{
            console.error("Form submission failed:", error);
            // Hide loading and show the error wrapper
            loadingWrapper.setStyle({
                display: "none"
            });
            requestErrorWrapper.setStyle({
                display: "flex"
            });
        });
        postFormData.fetch();
    });
    // Retry mechanism: Allow the user to retry the submission if it fails
    submitRetryButton.on("click", ()=>{
        console.log("Retrying form submission...");
        requestErrorWrapper.setStyle({
            display: "none"
        });
        loadingWrapper.setStyle({
            display: "flex"
        });
        // Retry the form submission (same logic as in submitFinalButton)
        handleFormSubmit(formSelector, endpoint);
    });
    // Back button handling: Reset the UI to allow editing the form before final submission
    backFinalButton.on("click", ()=>{
        resetFormUI(); // Reset UI back to initial state
        console.log("UI reset, allowing form re-edit before submission.");
    });
};
// Function to reset the form and UI state
const resetFormUI = ()=>{
    const form = new (0, _core.WFFormComponent)("#newsletterGeneratorForm");
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    // Reset all relevant UI components to initial state
    form.setStyle({
        display: "block"
    });
    requestLoadingWrapper.setStyle({
        display: "none"
    });
    makeRequestBox.setStyle({
        display: "flex"
    });
    loadingWrapper.setStyle({
        display: "none"
    });
    requestErrorWrapper.setStyle({
        display: "none"
    });
    responseWrapper.setStyle({
        display: "none"
    });
    console.log("Form and UI state reset.");
};
const checkAndHandleSubmit = (formSelector, endpoint)=>{
    if ((0, _sliderUtils.isLastActiveSlide)()) {
        console.log("Last slide reached. Submitting form...");
        // Automatically submit the form if it's the last slide
        handleFormSubmit(formSelector, endpoint);
    } else // Otherwise, move to the next slide
    (0, _sliderUtils.goNextSlide)();
};
const preventFormSubmitOnEnter = (formSelector)=>{
    const form = document.querySelector(formSelector);
    if (form) form.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") event.preventDefault(); // Prevent form submission
    });
};
const updateNextButtonText = ()=>{
    const buttons = document.querySelectorAll(".btn_main_wrap .btn_main_text");
    buttons.forEach((buttonText)=>{
        if ((0, _sliderUtils.isLastActiveSlide)()) buttonText.textContent = "Finish & Submit";
        else buttonText.textContent = "Next Step";
    });
};
const resetFinalFormUI = ()=>{
    resetFormUI(); // Use the resetFormUI function to return the form to the initial state
    console.log("Form reset to initial state.");
};

},{"../../../api/apiConfig":"7VxA0","./sliderUtils":"abPgU","@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2HHOi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepOne", ()=>initStepOne);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepOne = ()=>{
    const form = new (0, _core.WFFormComponent)("#newsletterGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepOne");
    const errorElement = new (0, _core.WFComponent)("#submitStepOneError");
    const nameInput = new (0, _core.WFComponent)("#nameInput");
    const dateInput = new (0, _core.WFComponent)("#dateInput");
    // Get the input elements
    const nameInputElement = nameInput.getElement();
    const dateInputElement = dateInput.getElement();
    // Handle the next step button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default button action
        const name = nameInputElement.value.trim();
        const date = dateInputElement.value.trim();
        if (!name) {
            errorElement.setText("Please enter your name.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (!date) {
            errorElement.setText("Please enter the month and year for the newsletter.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Update form data with name and date
            (0, _formUtils.updateFormData)({
                name,
                date
            });
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"l2Aqw","../utils/sliderUtils":"abPgU","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"b5NVt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepTwo", ()=>initStepTwo);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initStepTwo = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitSectionsToInclude");
    const errorElement = new (0, _core.WFComponent)("#sectionsToIncludeError");
    submitButton.on("click", ()=>{
        const sectionKeys = {
            personalNote: "personalNoteBool",
            businessNews: "businessNewsBool",
            lifeUpdate: "lifeUpdateBool",
            newListing: "newListingBool",
            somethingFun: "randomBool",
            testimonial: "testimonialBool"
        };
        let allSectionsAnswered = true;
        let hasAtLeastOneYes = false;
        // Check if each section has a selected answer (Yes or No)
        const selectedSections = Object.keys(sectionKeys).map((key)=>{
            const selectedInput = document.querySelector(`input[name="${sectionKeys[key]}"]:checked`);
            if (!selectedInput) allSectionsAnswered = false;
            else if (selectedInput.value === "true") hasAtLeastOneYes = true;
            return selectedInput;
        }).filter(Boolean);
        if (!allSectionsAnswered) {
            errorElement.setText("Please provide a Yes or No answer for each section.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (!hasAtLeastOneYes) {
            errorElement.setText("Please select Yes for at least one section.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Handle sections selection and determine the last active slide
            (0, _sliderUtils.handleSectionsToInclude)(selectedSections);
            // Update formData
            const formData = JSON.parse(localStorage.getItem("formData") || "{}");
            for(const key in sectionKeys){
                const selectedInput = document.querySelector(`input[name="${sectionKeys[key]}"]:checked`);
                formData[key] = selectedInput ? selectedInput.value : "false";
            }
            localStorage.setItem("formData", JSON.stringify(formData));
            // Update the next button text after sections are modified
            (0, _formUtils.updateNextButtonText)();
            // Move to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    const backButton = new (0, _core.WFComponent)("#backSectionsToInclude");
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)();
        // Update the next button text when going back to step 2
        (0, _formUtils.updateNextButtonText)();
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"1sVlx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPersonalNoteStep", ()=>initPersonalNoteStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initPersonalNoteStep = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitPersonalNote");
    const backButton = new (0, _core.WFComponent)("#backPersonalNote");
    const errorElement = new (0, _core.WFComponent)("#submitPersonalNoteError");
    const toneCheckboxes = document.querySelectorAll('input[name="tone_select_personal"]');
    const maxSelections = 2;
    // Add the event listener for the submit button only once
    if (!submitButton.getElement().dataset.listenerAdded) {
        submitButton.on("click", ()=>{
            const personalNoteInput = document.querySelector("#personalNoteInput");
            const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.value);
            let isValid = true;
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            if (!personalNoteInput.value.trim()) {
                isValid = false;
                errorElement.setText("Please enter your personal note.");
                errorElement.setStyle({
                    display: "block"
                });
            }
            if (selectedTones.length === 0) {
                isValid = false;
                errorElement.setText("Please select at least one tone.");
                errorElement.setStyle({
                    display: "block"
                });
            } else if (selectedTones.length > maxSelections) {
                isValid = false;
                errorElement.setText(`Please select up to ${maxSelections} tones.`);
                errorElement.setStyle({
                    display: "block"
                });
            }
            if (isValid) {
                const personalNoteData = {
                    personalNote: personalNoteInput.value.trim(),
                    tones: selectedTones
                };
                (0, _formUtils.updateFormData)({
                    personalNote: personalNoteData
                }); // Store as object
                // Check if this is the last step and submit the form if it is
                (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
            }
        });
        // Mark that the event listener was added
        submitButton.getElement().dataset.listenerAdded = "true";
    }
    toneCheckboxes.forEach((checkbox)=>{
        // Add the event listener for each checkbox only once
        if (!checkbox.dataset.listenerAdded) {
            checkbox.addEventListener("change", ()=>{
                const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked);
                toneCheckboxes.forEach((box)=>{
                    if (selectedTones.length >= maxSelections && !box.checked) box.disabled = true;
                    else box.disabled = false;
                });
            });
            // Mark that the event listener was added
            checkbox.dataset.listenerAdded = "true";
        }
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"2N1G0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBusinessNewsStep", ()=>initBusinessNewsStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initBusinessNewsStep = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitBusinessNews");
    const backButton = new (0, _core.WFComponent)("#backBusinessNews");
    const errorElement = new (0, _core.WFComponent)("#submitBusinessNewsError");
    const toneCheckboxes = document.querySelectorAll('input[name="tone_select_business"]');
    const maxSelections = 2;
    submitButton.on("click", ()=>{
        const articleLinkInput = document.querySelector("#articleLinkBusinessInput");
        const articleThoughtsInput = document.querySelector("#articleThoughtsBusinessInput");
        const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.value);
        let isValid = true;
        errorElement.setText("");
        errorElement.setStyle({
            display: "none"
        });
        if (!articleLinkInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the article link.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!articleThoughtsInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter your thoughts on the article.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (selectedTones.length === 0) {
            isValid = false;
            errorElement.setText("Please select at least one tone.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (selectedTones.length > maxSelections) {
            isValid = false;
            errorElement.setText(`Please select up to ${maxSelections} tones.`);
            errorElement.setStyle({
                display: "block"
            });
        }
        if (isValid) {
            const businessNewsData = {
                articleLink: articleLinkInput.value.trim(),
                articleThoughts: articleThoughtsInput.value.trim(),
                tones: selectedTones
            };
            (0, _formUtils.updateFormData)({
                businessNews: businessNewsData
            }); // Store as object
            // Check if this is the last step and submit the form if it is
            (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
        }
    });
    toneCheckboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change", ()=>{
            const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked);
            toneCheckboxes.forEach((box)=>{
                if (selectedTones.length >= maxSelections && !box.checked) box.disabled = true;
                else box.disabled = false;
            });
        });
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"bwxW9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLifeUpdateStep", ()=>initLifeUpdateStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initLifeUpdateStep = ()=>{
    console.log("initLifeUpdateStep");
    const submitButton = new (0, _core.WFComponent)("#submitLifeUpdate");
    const backButton = new (0, _core.WFComponent)("#backLifeUpdate");
    const errorElement = new (0, _core.WFComponent)("#submitLifeUpdateError");
    const toneCheckboxes = document.querySelectorAll('input[name="tone_select_life_update"]');
    const maxSelections = 2;
    submitButton.on("click", ()=>{
        const lifeUpdateInput = document.querySelector("#lifeUpdateInput");
        const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.value);
        let isValid = true;
        errorElement.setText("");
        errorElement.setStyle({
            display: "none"
        });
        if (!lifeUpdateInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter your life update.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (selectedTones.length === 0) {
            isValid = false;
            errorElement.setText("Please select at least one tone.");
            errorElement.setStyle({
                display: "block"
            });
        } else if (selectedTones.length > maxSelections) {
            isValid = false;
            errorElement.setText(`Please select up to ${maxSelections} tones.`);
            errorElement.setStyle({
                display: "block"
            });
        }
        if (isValid) {
            const lifeUpdateData = {
                lifeUpdate: lifeUpdateInput.value.trim(),
                tones: selectedTones
            };
            (0, _formUtils.updateFormData)({
                lifeUpdate: lifeUpdateData
            }); // Store as object
            // Check if this is the last step and submit the form if it is
            (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
        }
    });
    toneCheckboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change", ()=>{
            const selectedTones = Array.from(toneCheckboxes).filter((checkbox)=>checkbox.checked);
            toneCheckboxes.forEach((box)=>{
                if (selectedTones.length >= maxSelections && !box.checked) box.disabled = true;
                else box.disabled = false;
            });
        });
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"evvzv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initNewListingsStep", ()=>initNewListingsStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initNewListingsStep = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitNewListings");
    const backButton = new (0, _core.WFComponent)("#backNewListings");
    const errorElement = new (0, _core.WFComponent)("#submitNewListingsError");
    submitButton.on("click", ()=>{
        const propertyAddressInput = document.querySelector("#propertyAddressInput");
        const squareFootageInput = document.querySelector("#squareFootageInput");
        const bedroomsInput = document.querySelector("#bedroomsInput");
        const bathroomsInput = document.querySelector("#bathroomsInput");
        const vibeInput = document.querySelector("#vibeInput");
        const hotSpotsInput = document.querySelector("#hotSpotsInput");
        const coolFeatureInput = document.querySelector("#coolFeatureInput");
        const additionalInfoInput = document.querySelector("#additionalInfoInput");
        let isValid = true;
        errorElement.setText("");
        errorElement.setStyle({
            display: "none"
        });
        if (!propertyAddressInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the property address.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!squareFootageInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the square footage.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!bedroomsInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the number of bedrooms.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!bathroomsInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the number of bathrooms.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!vibeInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter three words to describe the vibe.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!hotSpotsInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter two local attractions or hot spots.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!coolFeatureInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter one cool feature about the house.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (isValid) {
            const newListingData = {
                propertyAddress: propertyAddressInput.value.trim(),
                squareFootage: squareFootageInput.value.trim(),
                bedrooms: bedroomsInput.value.trim(),
                bathrooms: bathroomsInput.value.trim(),
                vibe: vibeInput.value.trim(),
                hotSpots: hotSpotsInput.value.trim(),
                coolFeature: coolFeatureInput.value.trim(),
                additionalInfo: additionalInfoInput.value.trim()
            };
            (0, _formUtils.updateFormData)({
                newListing: newListingData
            });
            // Check if this is the last step and submit the form if it is
            (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
        }
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"9FHnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSomethingFunStep", ()=>initSomethingFunStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initSomethingFunStep = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitSomethingFun");
    const backButton = new (0, _core.WFComponent)("#backSomethingFun");
    const errorElement = new (0, _core.WFComponent)("#submitSomethingFunError");
    submitButton.on("click", ()=>{
        const articleLinkFunInput = document.querySelector("#articleLinkFunInput");
        const articleThoughtsFunInput = document.querySelector("#articleThoughtsFunInput");
        let isValid = true;
        errorElement.setText("");
        errorElement.setStyle({
            display: "none"
        });
        if (!articleLinkFunInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the link to share.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!articleThoughtsFunInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter your thoughts to share.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (isValid) {
            const somethingFunData = {
                articleLink: articleLinkFunInput.value.trim(),
                articleThoughts: articleThoughtsFunInput.value.trim()
            };
            // Update form data in local storage
            (0, _formUtils.updateFormData)({
                somethingFun: somethingFunData
            });
            // Check if this is the last step and submit the form if it is
            (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
        }
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fZ99v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTestimonialStep", ()=>initTestimonialStep);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils");
const initTestimonialStep = ()=>{
    const submitButton = new (0, _core.WFComponent)("#submitTestimonial");
    const backButton = new (0, _core.WFComponent)("#backTestimonial");
    const errorElement = new (0, _core.WFComponent)("#submitTestimonialError");
    submitButton.on("click", ()=>{
        const testimonialClientInput = document.querySelector("#testimonialClientInput");
        const representationInput = document.querySelector('input[name="representation"]:checked');
        const testimonialInput = document.querySelector("#testimonialInput");
        let isValid = true;
        errorElement.setText("");
        errorElement.setStyle({
            display: "none"
        });
        if (!testimonialClientInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the client's name.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!representationInput) {
            isValid = false;
            errorElement.setText("Please select the representation type.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (!testimonialInput.value.trim()) {
            isValid = false;
            errorElement.setText("Please enter the testimonial.");
            errorElement.setStyle({
                display: "block"
            });
        }
        if (isValid) {
            const testimonialData = {
                client: testimonialClientInput.value.trim(),
                representation: representationInput.value,
                testimonial: testimonialInput.value.trim()
            };
            // Update form data in local storage
            (0, _formUtils.updateFormData)({
                testimonial: testimonialData
            });
            // Check if this is the last step and submit the form if it is
            (0, _formUtils.checkAndHandleSubmit)("#newsletterGeneratorForm", "/generators/newsletter");
        }
    });
    backButton.on("click", ()=>{
        (0, _sliderUtils.goPreviousSlide)();
    });
    // Update the button text based on whether this is the last step
    (0, _formUtils.updateNextButtonText)();
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"abPgU","../utils/formUtils":"l2Aqw","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"d3eQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeNegotiatorGenerator", ()=>initializeNegotiatorGenerator);
var _sliderUtils = require("./utils/sliderUtils");
var _formUtils = require("./utils/formUtils");
var _core = require("@xatom/core");
var _stepOne = require("./steps/stepOne");
var _stepTwo = require("./steps/stepTwo");
var _stepThree = require("./steps/stepThree");
var _stepFour = require("./steps/stepFour");
var _stepFive = require("./steps/stepFive");
var _stepSix = require("./steps/stepSix");
var _stepSeven = require("./steps/stepSeven");
var _stepEight = require("./steps/stepEight");
var _stepNine = require("./steps/stepNine");
var _stepTen = require("./steps/stepTen");
var _stepEleven = require("./steps/stepEleven");
var _stepTwelve = require("./steps/stepTwelve");
function initializeNegotiatorGenerator() {
    (0, _core.onReady)(()=>{
        // Prevent form submission on Enter key press
        (0, _formUtils.preventFormSubmitOnEnter)("#formNegotiatorGenerator");
        // Initialize the slider for the multi-step form
        const slider = (0, _sliderUtils.initializeSlider)(".multi-step_slider");
        // Initialize the steps
        (0, _stepOne.initStepOne)();
        (0, _stepTwo.initStepTwo)();
        (0, _stepThree.initStepThree)();
        (0, _stepFour.initStepFour)();
        (0, _stepFive.initStepFive)();
        (0, _stepSix.initStepSix)();
        (0, _stepSeven.initStepSeven)();
        (0, _stepEight.initStepEight)();
        (0, _stepNine.initStepNine)();
        (0, _stepTen.initStepTen)();
        (0, _stepEleven.initStepEleven)();
        (0, _stepTwelve.initStepTwelve)();
    });
}

},{"./utils/sliderUtils":"8jEmz","./utils/formUtils":"lfimo","@xatom/core":"j9zXV","./steps/stepOne":"B9w2U","./steps/stepTwo":"6qHlW","./steps/stepThree":"ewjfG","./steps/stepFour":"030LT","./steps/stepFive":"6o0C2","./steps/stepSix":"kLiEE","./steps/stepSeven":"e1tb5","./steps/stepEight":"eugxt","./steps/stepNine":"3oHNZ","./steps/stepTen":"bh5JA","./steps/stepEleven":"hBAgr","./steps/stepTwelve":"7ki1M","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"8jEmz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Initialize the slider
parcelHelpers.export(exports, "initializeSlider", ()=>initializeSlider);
// Function to go to the next slide, skipping inactive slides
parcelHelpers.export(exports, "goNextSlide", ()=>goNextSlide);
// Function to go to the previous slide, skipping inactive slides
parcelHelpers.export(exports, "goPreviousSlide", ()=>goPreviousSlide);
// Function to check if the current slide is the last active slide
parcelHelpers.export(exports, "isLastActiveSlide", ()=>isLastActiveSlide);
// Function to mark a slide as inactive
parcelHelpers.export(exports, "markSlideInactive", ()=>markSlideInactive);
// Function to mark a slide as active
parcelHelpers.export(exports, "markSlideActive", ()=>markSlideActive);
// Function to handle sections to include and mark slides as active or inactive
parcelHelpers.export(exports, "handleSectionsToInclude", ()=>handleSectionsToInclude);
var _slider = require("@xatom/slider");
var _formUtils = require("./formUtils");
// Shared slider instance
let sliderInstance = null;
function initializeSlider(selector) {
    if (!sliderInstance) sliderInstance = new (0, _slider.WFSlider)(selector); // Initialize slider
    return sliderInstance;
}
function goNextSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let nextIndex = currentIndex + 1;
    // Loop through slides to find the next active one
    while(nextIndex < allSlides.length && isSlideInactive(allSlides[nextIndex]))nextIndex++;
    if (nextIndex < allSlides.length) sliderInstance.goToIndex(nextIndex); // Navigate to the next active slide
    // Recalculate button text after navigating
    (0, _formUtils.updateNextButtonText)();
}
function goPreviousSlide() {
    if (!sliderInstance) return;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    let prevIndex = currentIndex - 1;
    // Loop through slides to find the previous active one
    while(prevIndex >= 0 && isSlideInactive(allSlides[prevIndex]))prevIndex--;
    if (prevIndex >= 0) sliderInstance.goToIndex(prevIndex);
    // Recalculate button text after navigating
    (0, _formUtils.updateNextButtonText)();
}
// Helper function to check if a slide is inactive
function isSlideInactive(slide) {
    return slide.getElement().hasAttribute("data-inactive");
}
function isLastActiveSlide() {
    if (!sliderInstance) return false;
    const currentIndex = sliderInstance.getActiveSlideIndex();
    const allSlides = sliderInstance.getAllSlides();
    // Check if the current slide is marked as the final step
    return allSlides[currentIndex].getElement().hasAttribute("data-final-step");
}
function markSlideInactive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) {
        slideElement.setAttribute("data-inactive", "true");
        console.log(`Slide ${slideId} marked as inactive.`);
    } else console.warn(`Slide with ID ${slideId} not found to mark as inactive.`);
}
function markSlideActive(slideId) {
    const slideElement = document.querySelector(`#${slideId}`);
    if (slideElement) {
        slideElement.removeAttribute("data-inactive");
        console.log(`Slide ${slideId} marked as active.`);
    } else console.warn(`Slide with ID ${slideId} not found to mark as active.`);
}
function handleSectionsToInclude(selectedPlatforms) {
    const allPlatformInputs = document.querySelectorAll('input[type="radio"]');
    let lastActiveSlideId = null;
    allPlatformInputs.forEach((input)=>{
        const correspondingSlideId = input.getAttribute("data-corresponding-slide");
        if (correspondingSlideId) {
            if (input.checked && input.value === "false") markSlideInactive(correspondingSlideId);
            else if (input.checked && input.value === "true") {
                markSlideActive(correspondingSlideId);
                lastActiveSlideId = correspondingSlideId; // Track the last active slide
            }
        }
    });
    // Remove the final-step attribute from all slides first
    document.querySelectorAll(".multi-step_slide").forEach((slide)=>{
        slide.removeAttribute("data-final-step");
    });
    // Mark the last active slide as the final step
    if (lastActiveSlideId) {
        const lastActiveSlide = document.querySelector(`#${lastActiveSlideId}`);
        if (lastActiveSlide) {
            lastActiveSlide.setAttribute("data-final-step", "true");
            console.log(`Slide ${lastActiveSlideId} marked as final step.`);
        }
    }
    // After recalculating active slides, update the button text
    (0, _formUtils.updateNextButtonText)();
}

},{"@xatom/slider":"2zMuG","./formUtils":"lfimo","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"lfimo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateFormData", ()=>updateFormData);
parcelHelpers.export(exports, "handleFormSubmit", ()=>handleFormSubmit);
parcelHelpers.export(exports, "checkAndHandleSubmit", ()=>checkAndHandleSubmit);
parcelHelpers.export(exports, "preventFormSubmitOnEnter", ()=>preventFormSubmitOnEnter);
parcelHelpers.export(exports, "updateNextButtonText", ()=>updateNextButtonText);
parcelHelpers.export(exports, "resetFinalFormUI", ()=>resetFinalFormUI);
var _apiConfig = require("../../../api/apiConfig");
var _sliderUtils = require("./sliderUtils");
var _core = require("@xatom/core");
const updateFormData = (newData)=>{
    let formData = JSON.parse(localStorage.getItem("formData") || "{}");
    formData = {
        ...formData,
        ...newData
    };
    localStorage.setItem("formData", JSON.stringify(formData));
};
const handleFormSubmit = (formSelector, endpoint)=>{
    const form = new (0, _core.WFFormComponent)(formSelector);
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    const responseContent = new (0, _core.WFComponent)(".response_content");
    const submitFinalButton = new (0, _core.WFComponent)("#submitFinal");
    const submitRetryButton = new (0, _core.WFComponent)("#submitRetry");
    const backFinalButton = new (0, _core.WFComponent)("#backFinal");
    const beginRequestAnimationTrigger = new (0, _core.WFComponent)(".begin_request_animation_trigger");
    console.log("Form submission process started...");
    // Hide form and show the request loading wrapper to prepare user for final submission
    form.setStyle({
        display: "none"
    });
    requestLoadingWrapper.setStyle({
        display: "block"
    });
    makeRequestBox.setStyle({
        display: "flex"
    });
    // Ensure the event listener is only added once to prevent duplicates
    if (!submitFinalButton.getElement().dataset.listenerAdded) {
        submitFinalButton.on("click", ()=>{
            console.log("Final submission confirmed by user.");
            // Hide the request box and show the loading wrapper during API request
            makeRequestBox.setStyle({
                display: "none"
            });
            beginRequestAnimationTrigger.getElement().click();
            loadingWrapper.setStyle({
                display: "flex"
            });
            // Collect form data
            const formData = JSON.parse(localStorage.getItem("formData") || "{}");
            // Make the API request
            const postFormData = (0, _apiConfig.apiClient).post(endpoint, {
                data: {
                    formData
                }
            });
            postFormData.onLoadingChange((isLoading)=>{
                if (isLoading) console.log("Loading...");
                else {
                    console.log("Loading complete.");
                    loadingWrapper.setStyle({
                        display: "none"
                    });
                }
            });
            // Handle success response
            postFormData.onData((response)=>{
                console.log("Form submitted successfully:", response);
                const messageContent = response?.content;
                if (messageContent) {
                    const htmlContent = messageContent.replace(/```html|```/g, "").trim();
                    responseContent.setHTML(htmlContent);
                    // Hide loading and show the response wrapper
                    requestLoadingWrapper.setStyle({
                        display: "none"
                    });
                    responseWrapper.setStyle({
                        display: "block"
                    });
                } else {
                    console.error("Unexpected response format. No content found.");
                    requestErrorWrapper.setStyle({
                        display: "flex"
                    });
                }
            });
            // Handle error response
            postFormData.onError((error)=>{
                console.error("Form submission failed:", error);
                loadingWrapper.setStyle({
                    display: "none"
                });
                requestErrorWrapper.setStyle({
                    display: "flex"
                });
            });
            postFormData.fetch();
        });
        submitFinalButton.getElement().dataset.listenerAdded = "true";
    }
    // Retry mechanism: Allow the user to retry the submission if it fails
    submitRetryButton.on("click", ()=>{
        console.log("Retrying form submission...");
        requestErrorWrapper.setStyle({
            display: "none"
        });
        loadingWrapper.setStyle({
            display: "flex"
        });
        makeRequestBox.setStyle({
            display: "none"
        }); // Ensure the makeRequestBox stays hidden
        // Retry the API request directly without resetting the form
        const formData = JSON.parse(localStorage.getItem("formData") || "{}");
        // Make the API request
        const retryPostFormData = (0, _apiConfig.apiClient).post(endpoint, {
            data: {
                formData
            }
        });
        retryPostFormData.onLoadingChange((isLoading)=>{
            if (isLoading) console.log("Loading...");
            else {
                console.log("Loading complete.");
                loadingWrapper.setStyle({
                    display: "none"
                });
            }
        });
        retryPostFormData.onData((response)=>{
            console.log("Form retried and submitted successfully:", response);
            const messageContent = response?.content;
            if (messageContent) {
                const htmlContent = messageContent.replace(/```html|```/g, "").trim();
                responseContent.setHTML(htmlContent);
                // Hide loading and show the response wrapper
                requestLoadingWrapper.setStyle({
                    display: "none"
                });
                responseWrapper.setStyle({
                    display: "block"
                });
            } else {
                console.error("Unexpected response format. No content found.");
                requestErrorWrapper.setStyle({
                    display: "flex"
                });
            }
        });
        retryPostFormData.onError((error)=>{
            console.error("Retry failed:", error);
            loadingWrapper.setStyle({
                display: "none"
            });
            requestErrorWrapper.setStyle({
                display: "flex"
            });
        });
        retryPostFormData.fetch();
    });
    // Back button handling: Reset the UI to allow editing the form before final submission
    backFinalButton.on("click", ()=>{
        resetFormUI(); // Reset UI back to initial state
        console.log("UI reset, allowing form re-edit before submission.");
    });
};
// Function to reset the form and UI state
const resetFormUI = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const requestLoadingWrapper = new (0, _core.WFComponent)(".request_loading_wrapper");
    const makeRequestBox = new (0, _core.WFComponent)(".make_request_box");
    const loadingWrapper = new (0, _core.WFComponent)(".loading_wrapper");
    const requestErrorWrapper = new (0, _core.WFComponent)(".request_error_wrapper");
    const responseWrapper = new (0, _core.WFComponent)(".response_wrapper");
    // Reset all relevant UI components to initial state
    form.setStyle({
        display: "block"
    });
    requestLoadingWrapper.setStyle({
        display: "none"
    });
    makeRequestBox.setStyle({
        display: "flex"
    });
    loadingWrapper.setStyle({
        display: "none"
    });
    requestErrorWrapper.setStyle({
        display: "none"
    });
    responseWrapper.setStyle({
        display: "none"
    });
    console.log("Form and UI state reset.");
};
const checkAndHandleSubmit = (formSelector, endpoint)=>{
    if ((0, _sliderUtils.isLastActiveSlide)()) {
        console.log("Last slide reached. Submitting form...");
        // Automatically submit the form if it's the last slide
        handleFormSubmit(formSelector, endpoint);
    } else // Otherwise, move to the next slide
    (0, _sliderUtils.goNextSlide)();
};
const preventFormSubmitOnEnter = (formSelector)=>{
    const form = document.querySelector(formSelector);
    if (form) form.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") event.preventDefault(); // Prevent form submission
    });
};
const updateNextButtonText = ()=>{
    const buttons = document.querySelectorAll(".btn_main_wrap .btn_main_text");
    buttons.forEach((buttonText)=>{
        if ((0, _sliderUtils.isLastActiveSlide)()) buttonText.textContent = "Finish & Submit";
        else buttonText.textContent = "Next Step";
    });
};
const resetFinalFormUI = ()=>{
    resetFormUI(); // Use the resetFormUI function to return the form to the initial state
    console.log("Form reset to initial state.");
};

},{"../../../api/apiConfig":"7VxA0","./sliderUtils":"8jEmz","@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"B9w2U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepOne", ()=>initStepOne);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepOne = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Using WFFormComponent for form
    const nextButton = new (0, _core.WFComponent)("#submitStepOne"); // For Next button
    const errorElement = new (0, _core.WFComponent)("#submitStepOneError"); // For error messages
    // Get the radio button elements
    const newOfferRadio = new (0, _core.WFComponent)("#selectTypeNewOffer");
    const postInspectionRadio = new (0, _core.WFComponent)("#selectTypePostInspection");
    // Handle the next step button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        // Get selected radio button
        const newOfferChecked = newOfferRadio.getElement().checked;
        const postInspectionChecked = postInspectionRadio.getElement().checked;
        if (!newOfferChecked && !postInspectionChecked) {
            // Show error message if nothing is selected
            errorElement.setText("Please select a negotiation type to proceed.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Determine which option is selected and group the data for Step 1
            const stepOneData = {
                stepOne: {
                    negotiationType: newOfferChecked ? "New Offer" : "Post-Inspection Negotiation"
                }
            };
            if (newOfferChecked) // Mark all slides active (for New Offer path)
            for(let i = 2; i <= 9; i++)(0, _sliderUtils.markSlideActive)(`slideStep${i}`);
            else if (postInspectionChecked) // Mark slides 2 through 9 inactive (for Post-Inspection path)
            for(let i = 2; i <= 9; i++)(0, _sliderUtils.markSlideInactive)(`slideStep${i}`);
            // Update form data with the grouped data for Step 1
            (0, _formUtils.updateFormData)(stepOneData);
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"6qHlW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepTwo", ()=>initStepTwo);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepTwo = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Initialize form component
    const nextButton = new (0, _core.WFComponent)("#submitStepTwo"); // Next step button
    const backButton = new (0, _core.WFComponent)("#backStepTwo"); // Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepTwoError"); // Error message element
    // Get radio button elements for Buyer and Seller
    const buyerRadio = new (0, _core.WFComponent)("#representationBuyer");
    const sellerRadio = new (0, _core.WFComponent)("#representationSeller");
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        const isBuyerSelected = buyerRadio.getElement().checked;
        const isSellerSelected = sellerRadio.getElement().checked;
        if (!isBuyerSelected && !isSellerSelected) {
            // Show error if no option is selected
            errorElement.setText("Please select who you represent in this transaction.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear error message
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            let representation = "";
            // Determine representation type and handle conditional slide activation
            if (isBuyerSelected) {
                representation = "Buyer";
                // If Buyer is selected, activate Step 3, and 4 but deactivate Steps 5, 6, and 7
                (0, _sliderUtils.markSlideActive)("slideStep3");
                (0, _sliderUtils.markSlideActive)("slideStep4");
                (0, _sliderUtils.markSlideInactive)("slideStep5");
                (0, _sliderUtils.markSlideInactive)("slideStep6");
                (0, _sliderUtils.markSlideInactive)("slideStep7");
            } else if (isSellerSelected) {
                representation = "Seller";
                // If Seller is selected, activate Steps 3, 4, 5, 6, and 7
                (0, _sliderUtils.markSlideInactive)("slideStep3");
                (0, _sliderUtils.markSlideInactive)("slideStep4");
                (0, _sliderUtils.markSlideActive)("slideStep5");
                (0, _sliderUtils.markSlideActive)("slideStep6");
                (0, _sliderUtils.markSlideActive)("slideStep7");
            }
            // Group the data for Step 2
            const stepTwoData = {
                stepTwo: {
                    representation: representation
                }
            };
            // Update form data with the grouped data for Step 2
            (0, _formUtils.updateFormData)(stepTwoData);
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"ewjfG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepThree", ()=>initStepThree);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepThree = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Using WFFormComponent for form
    const nextButton = new (0, _core.WFComponent)("#submitStepThree"); // For Next button
    const backButton = new (0, _core.WFComponent)("#backStepThree"); // For Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepThreeError"); // For error messages
    // Get input elements
    const addressInput = new (0, _core.WFComponent)("#addressOfPropertyBuyerInput");
    const closingDateInput = new (0, _core.WFComponent)("#closingDateBuyerInput");
    const initialOfferInput = new (0, _core.WFComponent)("#initialOfferBuyerInput");
    const listPriceInput = new (0, _core.WFComponent)("#listPriceBuyerInput");
    const comparablePriceInput = new (0, _core.WFComponent)("#buyerComparablePriceInput");
    const listPriceOpinionInputs = document.getElementsByName("list_price_opinion_buyer");
    // Get the input elements as HTMLInputElements
    const addressInputElement = addressInput.getElement();
    const closingDateInputElement = closingDateInput.getElement();
    const initialOfferInputElement = initialOfferInput.getElement();
    const listPriceInputElement = listPriceInput.getElement();
    const comparablePriceInputElement = comparablePriceInput.getElement();
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        // Get input values
        const address = addressInputElement.value.trim();
        const closingDate = closingDateInputElement.value.trim();
        const initialOffer = initialOfferInputElement.value.trim();
        const listPrice = listPriceInputElement.value.trim();
        const comparablePrice = comparablePriceInputElement.value.trim();
        let listPriceOpinion = "";
        // Check which radio button for list price opinion is selected
        for(let i = 0; i < listPriceOpinionInputs.length; i++){
            const input = listPriceOpinionInputs[i];
            if (input.checked) {
                listPriceOpinion = input.value;
                break;
            }
        }
        // Validate input fields
        if (!address) showError("Please provide the address of the property.");
        else if (!closingDate) showError("Please specify the closing date.");
        else if (!initialOffer) showError("Please enter your initial offer price.");
        else if (!listPrice) showError("Please enter the list price of the property.");
        else if (!comparablePrice) showError("Please provide the price range of comparable homes.");
        else if (!listPriceOpinion) showError("Please select an option for what you think of the list price.");
        else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Group the data for Step 3
            const stepThreeData = {
                stepThree: {
                    address,
                    closingDate,
                    initialOffer,
                    listPrice,
                    comparablePrice,
                    listPriceOpinion
                }
            };
            // Update form data with the grouped data for Step 3
            (0, _formUtils.updateFormData)(stepThreeData);
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
    // Function to show error messages
    const showError = (message)=>{
        errorElement.setText(message);
        errorElement.setStyle({
            display: "block"
        });
    };
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"030LT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepFour", ()=>initStepFour);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepFour = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Initialize form component
    const nextButton = new (0, _core.WFComponent)("#submitStepFour"); // Next step button
    const backButton = new (0, _core.WFComponent)("#backStepFour"); // Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepFourError"); // Error message element
    // Get radio button elements for primary goal
    const primaryGoalPrice = new (0, _core.WFComponent)("#primaryGoalBuyerPriceInput");
    const primaryGoalClosing = new (0, _core.WFComponent)("#primaryGoalBuyerClosingInput");
    const primaryGoalTime = new (0, _core.WFComponent)("#primaryGoalBuyerTimeInput");
    const primaryGoalOther = new (0, _core.WFComponent)("#primaryGoalBuyerOtherInput");
    const primaryGoalOtherText = new (0, _core.WFComponent)("#primaryGoalBuyerOtherTextInput");
    // Get radio button elements for secondary goal
    const secondaryGoalPrice = new (0, _core.WFComponent)("#secondaryGoalBuyerPriceInput");
    const secondaryGoalClosing = new (0, _core.WFComponent)("#secondaryGoalBuyerClosingInput");
    const secondaryGoalTime = new (0, _core.WFComponent)("#secondaryGoalBuyerTimeInput");
    const secondaryGoalOther = new (0, _core.WFComponent)("#secondaryGoalBuyerOtherInput");
    const secondaryGoalOtherText = new (0, _core.WFComponent)("#secondaryGoalBuyerOtherTextInput");
    // Handle visibility of "Other" input fields
    const handleOtherInputVisibility = (radio, input)=>{
        const isChecked = radio.getElement().checked;
        input.setStyle({
            display: isChecked ? "block" : "none"
        });
    };
    // Add event listeners for primary and secondary "Other" inputs
    primaryGoalOther.on("change", ()=>{
        handleOtherInputVisibility(primaryGoalOther, primaryGoalOtherText);
    });
    secondaryGoalOther.on("change", ()=>{
        handleOtherInputVisibility(secondaryGoalOther, secondaryGoalOtherText);
    });
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        const isPrimaryGoalSelected = primaryGoalPrice.getElement().checked || primaryGoalClosing.getElement().checked || primaryGoalTime.getElement().checked || primaryGoalOther.getElement().checked;
        const isSecondaryGoalSelected = secondaryGoalPrice.getElement().checked || secondaryGoalClosing.getElement().checked || secondaryGoalTime.getElement().checked || secondaryGoalOther.getElement().checked;
        if (!isPrimaryGoalSelected || !isSecondaryGoalSelected) {
            // Show error message if any of the goals are not selected
            errorElement.setText("Please select both the primary and secondary goals of the buyer.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected primary and secondary goals
            let primaryGoal = "";
            let secondaryGoal = "";
            if (primaryGoalPrice.getElement().checked) primaryGoal = "Price";
            else if (primaryGoalClosing.getElement().checked) primaryGoal = "Closing Cost Assistance";
            else if (primaryGoalTime.getElement().checked) primaryGoal = "Time Frame";
            else if (primaryGoalOther.getElement().checked) primaryGoal = primaryGoalOtherText.getElement().value.trim();
            if (secondaryGoalPrice.getElement().checked) secondaryGoal = "Price";
            else if (secondaryGoalClosing.getElement().checked) secondaryGoal = "Closing Cost Assistance";
            else if (secondaryGoalTime.getElement().checked) secondaryGoal = "Time Frame";
            else if (secondaryGoalOther.getElement().checked) secondaryGoal = secondaryGoalOtherText.getElement().value.trim();
            // Group the data for Step 4
            const stepFourData = {
                stepFour: {
                    primaryGoal,
                    secondaryGoal
                }
            };
            // Update form data with the grouped data for Step 4
            (0, _formUtils.updateFormData)(stepFourData);
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"6o0C2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepFive", ()=>initStepFive);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepFive = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Initialize form component
    const nextButton = new (0, _core.WFComponent)("#submitStepFive"); // Next step button
    const backButton = new (0, _core.WFComponent)("#backStepFive"); // Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepFiveError"); // Error message element
    // Get input elements for seller property information
    const addressInput = new (0, _core.WFComponent)("#addressOfPropertySellerInput");
    const closingDateInput = new (0, _core.WFComponent)("#closingDateSellerInput");
    const initialOfferInput = new (0, _core.WFComponent)("#initialOfferSellerInput");
    const listPriceInput = new (0, _core.WFComponent)("#listPriceSellerInput");
    // Get radio button elements for list price opinion
    const priceOpinionUnderpriced = new (0, _core.WFComponent)("#sellerPriceOpinionUnderpriced");
    const priceOpinionJustRight = new (0, _core.WFComponent)("#sellerPriceOpinionJustRight");
    const priceOpinionOverpriced = new (0, _core.WFComponent)("#sellerPriceOpinionOverpriced");
    // Get radio button elements for home comparison
    const comparisonPoor = new (0, _core.WFComponent)("#sellerComparisonPoor");
    const comparisonSame = new (0, _core.WFComponent)("#sellerComparisonSame");
    const comparisonBetter = new (0, _core.WFComponent)("#sellerComparisonBetter");
    // Get radio button elements for price change
    const priceChangeTrue = new (0, _core.WFComponent)("#priceChangeTrue");
    const priceChangeFalse = new (0, _core.WFComponent)("#priceChangeFalse");
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        // Get input values for seller property information
        const address = addressInput.getElement().value.trim();
        const closingDate = closingDateInput.getElement().value.trim();
        const initialOffer = initialOfferInput.getElement().value.trim();
        const listPrice = listPriceInput.getElement().value.trim();
        // Check for selected options
        const priceOpinion = priceOpinionUnderpriced.getElement().checked ? "Underpriced" : priceOpinionJustRight.getElement().checked ? "Just Right" : priceOpinionOverpriced.getElement().checked ? "Overpriced" : "";
        const homeComparison = comparisonPoor.getElement().checked ? "Poor" : comparisonSame.getElement().checked ? "Same" : comparisonBetter.getElement().checked ? "Better" : "";
        const priceChange = priceChangeTrue.getElement().checked ? "Yes" : priceChangeFalse.getElement().checked ? "No" : "";
        // Validation: Ensure all fields have a value
        if (!address || !closingDate || !initialOffer || !listPrice || !priceOpinion || !homeComparison || !priceChange) {
            errorElement.setText("Please fill in all the fields.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Group the data for Step 5
            const stepFiveData = {
                stepFive: {
                    address,
                    closingDate,
                    initialOffer,
                    listPrice,
                    priceOpinion,
                    homeComparison,
                    priceChange
                }
            };
            // Update form data with the grouped data for Step 5
            (0, _formUtils.updateFormData)(stepFiveData);
            // Conditional logic for price change
            if (priceChange === "Yes") {
                // If price change is "Yes", proceed to Step 6
                (0, _sliderUtils.markSlideActive)("slideStep6"); // Ensure Step 6 is active
                (0, _sliderUtils.goNextSlide)(); // Proceed to Step 6
            } else if (priceChange === "No") {
                // If price change is "No", mark Step 6 as inactive and go to Step 7
                (0, _sliderUtils.markSlideInactive)("slideStep6"); // Mark Step 6 as inactive
                (0, _sliderUtils.goNextSlide)(); // Proceed to Step 7 (skipping Step 6)
            }
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"kLiEE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepSix", ()=>initStepSix);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepSix = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Initialize form component
    const nextButton = new (0, _core.WFComponent)("#submitStepSix"); // Next step button
    const backButton = new (0, _core.WFComponent)("#backStepSix"); // Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepSixError"); // Error message element
    // Get the text area input for price change details
    const priceChangeDetailsInput = new (0, _core.WFComponent)("#priceChangeDetailsInput");
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        // Get input value for price change details
        const priceChangeDetails = priceChangeDetailsInput.getElement().value.trim();
        // Validation: Ensure the text area is filled in
        if (!priceChangeDetails) {
            errorElement.setText("Please provide the details of the price changes.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Group the data for Step 6
            const stepSixData = {
                stepSix: {
                    priceChangeDetails
                }
            };
            // Update form data with the grouped data for Step 6
            (0, _formUtils.updateFormData)(stepSixData);
            // Proceed to the next slide (Step 7)
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"e1tb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepSeven", ()=>initStepSeven);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepSeven = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm"); // Initialize form component
    const nextButton = new (0, _core.WFComponent)("#submitStepSeven"); // Next step button
    const backButton = new (0, _core.WFComponent)("#backStepSeven"); // Back button
    const errorElement = new (0, _core.WFComponent)("#submitStepSevenError"); // Error message element
    // Get radio button elements for primary goal of seller
    const primaryGoalPrice = new (0, _core.WFComponent)("#primaryGoalSellerPriceInput");
    const primaryGoalClosing = new (0, _core.WFComponent)("#primaryGoalSellerClosingInput");
    const primaryGoalTime = new (0, _core.WFComponent)("#primaryGoalSellerTimeInput");
    const primaryGoalOther = new (0, _core.WFComponent)("#primaryGoalSellerOtherInput");
    const primaryGoalOtherText = new (0, _core.WFComponent)("#primaryGoalSellerOtherTextInput");
    // Get radio button elements for secondary goal of seller
    const secondaryGoalPrice = new (0, _core.WFComponent)("#secondaryGoalSellerPriceInput");
    const secondaryGoalClosing = new (0, _core.WFComponent)("#secondaryGoalSellerClosingInput");
    const secondaryGoalTime = new (0, _core.WFComponent)("#secondaryGoalSellerTimeInput");
    const secondaryGoalOther = new (0, _core.WFComponent)("#secondaryGoalSellerOtherInput");
    const secondaryGoalOtherText = new (0, _core.WFComponent)("#secondaryGoalSellerOtherTextInput");
    // Handle visibility of "Other" input fields for primary and secondary goals
    const handleOtherInputVisibility = (radio, input)=>{
        const isChecked = radio.getElement().checked;
        input.setStyle({
            display: isChecked ? "block" : "none"
        });
    };
    primaryGoalOther.on("change", ()=>{
        handleOtherInputVisibility(primaryGoalOther, primaryGoalOtherText);
    });
    secondaryGoalOther.on("change", ()=>{
        handleOtherInputVisibility(secondaryGoalOther, secondaryGoalOtherText);
    });
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default form submission
        const isPrimaryGoalSelected = primaryGoalPrice.getElement().checked || primaryGoalClosing.getElement().checked || primaryGoalTime.getElement().checked || primaryGoalOther.getElement().checked;
        const isSecondaryGoalSelected = secondaryGoalPrice.getElement().checked || secondaryGoalClosing.getElement().checked || secondaryGoalTime.getElement().checked || secondaryGoalOther.getElement().checked;
        if (!isPrimaryGoalSelected || !isSecondaryGoalSelected) {
            // Show error message if any of the goals are not selected
            errorElement.setText("Please select both the primary and secondary goals of the seller.");
            errorElement.setStyle({
                display: "block"
            });
        } else {
            // Clear any previous error messages
            errorElement.setText("");
            errorElement.setStyle({
                display: "none"
            });
            // Store the selected primary and secondary goals
            let primaryGoal = "";
            let secondaryGoal = "";
            if (primaryGoalPrice.getElement().checked) primaryGoal = "Price";
            else if (primaryGoalClosing.getElement().checked) primaryGoal = "Closing Cost Assistance";
            else if (primaryGoalTime.getElement().checked) primaryGoal = "Time Frame";
            else if (primaryGoalOther.getElement().checked) primaryGoal = primaryGoalOtherText.getElement().value.trim();
            if (secondaryGoalPrice.getElement().checked) secondaryGoal = "Price";
            else if (secondaryGoalClosing.getElement().checked) secondaryGoal = "Closing Cost Assistance";
            else if (secondaryGoalTime.getElement().checked) secondaryGoal = "Time Frame";
            else if (secondaryGoalOther.getElement().checked) secondaryGoal = secondaryGoalOtherText.getElement().value.trim();
            // Update form data with the selected goals
            (0, _formUtils.updateFormData)({
                stepSeven: {
                    primaryGoal,
                    secondaryGoal
                }
            });
            // Proceed to the next slide
            (0, _sliderUtils.goNextSlide)();
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault(); // Prevent default action
        (0, _sliderUtils.goPreviousSlide)(); // Go to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"eugxt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepEight", ()=>initStepEight);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepEight = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepEight");
    const backButton = new (0, _core.WFComponent)("#backStepEight");
    const errorElement = new (0, _core.WFComponent)("#submitStepEightError");
    // Get field elements
    const financingOptions = [
        new (0, _core.WFComponent)("#financingCash"),
        new (0, _core.WFComponent)("#financingConventional"),
        new (0, _core.WFComponent)("#financingFHA"),
        new (0, _core.WFComponent)("#financingVA"),
        new (0, _core.WFComponent)("#financingOther")
    ];
    const financingOtherText = new (0, _core.WFComponent)("#financingOtherText");
    const earnestDepositInput = new (0, _core.WFComponent)("#earnestDepositInput");
    const inspectionPeriodInput = new (0, _core.WFComponent)("#inspectionPeriodInput");
    const appraisalContingencyOptions = [
        new (0, _core.WFComponent)("#appraisalContingencyYes"),
        new (0, _core.WFComponent)("#appraisalContingencyNo")
    ];
    const financingContingencyOptions = [
        new (0, _core.WFComponent)("#financingContingencyYes"),
        new (0, _core.WFComponent)("#financingContingencyNo")
    ];
    const homeWarrantyOptions = [
        new (0, _core.WFComponent)("#homeWarrentyYes"),
        new (0, _core.WFComponent)("#homeWarrentyNo")
    ];
    const possessionDateOptions = [
        new (0, _core.WFComponent)("#possessionDateSameYes"),
        new (0, _core.WFComponent)("#possessionDateSameNo")
    ];
    const fixturesPersonalPropertyInput = new (0, _core.WFComponent)("#fixturesPersonalPropertyInput");
    const contingenciesSellingOptions = [
        new (0, _core.WFComponent)("#contingenciesSellingYes"),
        new (0, _core.WFComponent)("#contingenciesSellingNo")
    ];
    const concessionsInput = new (0, _core.WFComponent)("#concessionsInput");
    const specialTermsInput = new (0, _core.WFComponent)("#specialTermsInput");
    // Show/hide "Other" financing text input based on selection
    const handleOtherFinancingVisibility = ()=>{
        const isChecked = financingOptions[4].getElement().checked;
        financingOtherText.setStyle({
            display: isChecked ? "block" : "none"
        });
    };
    financingOptions[4].on("change", handleOtherFinancingVisibility);
    // Handle financing contingency selection change
    const handleFinancingContingencyChange = ()=>{
        const financingContingencyNoSelected = financingContingencyOptions[1].getElement().checked;
        if (financingContingencyNoSelected) {
            // If "No" is selected, mark all subsequent slides (9 to 12) as inactive
            for(let i = 9; i <= 12; i++)(0, _sliderUtils.markSlideInactive)(`slideStep${i}`);
            nextButton.setText("Finish & Submit"); // Update the button text to "Finish & Submit"
        } else {
            // If "Yes" is selected, activate slide 9 and don't re-mark slides inactive again
            (0, _sliderUtils.markSlideActive)("slideStep9");
            nextButton.setText("Next Step"); // Reset button text to "Next Step"
        }
    };
    // Add event listener to financing contingency options
    financingContingencyOptions.forEach((option)=>{
        option.on("change", handleFinancingContingencyChange);
    });
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault();
        const financingSelected = financingOptions.some((option)=>option.getElement().checked);
        const earnestDepositValue = earnestDepositInput.getElement().value.trim();
        const inspectionPeriodValue = inspectionPeriodInput.getElement().value.trim();
        const appraisalContingencySelected = appraisalContingencyOptions.some((option)=>option.getElement().checked);
        const financingContingencySelected = financingContingencyOptions.some((option)=>option.getElement().checked);
        const homeWarrantySelected = homeWarrantyOptions.some((option)=>option.getElement().checked);
        const possessionDateSelected = possessionDateOptions.some((option)=>option.getElement().checked);
        const fixturesPersonalPropertyValue = fixturesPersonalPropertyInput.getElement().value.trim();
        const contingenciesSellingSelected = contingenciesSellingOptions.some((option)=>option.getElement().checked);
        const concessionsValue = concessionsInput.getElement().value.trim();
        const specialTermsValue = specialTermsInput.getElement().value.trim();
        // Validate required fields
        if (!financingSelected || !earnestDepositValue || !inspectionPeriodValue || !appraisalContingencySelected || !financingContingencySelected || !homeWarrantySelected || !possessionDateSelected || !fixturesPersonalPropertyValue || !contingenciesSellingSelected || !concessionsValue || !specialTermsValue) {
            errorElement.setText("Please complete all required fields.");
            errorElement.setStyle({
                display: "block"
            });
            return;
        }
        // Prepare form data
        const financingType = financingOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("financing", "");
        const financingContingencyValue = financingContingencyOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("financingContingency", "");
        const appraisalContingencyValue = appraisalContingencyOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("appraisalContingency", "");
        const homeWarrantyValue = homeWarrantyOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("homeWarrenty", "");
        const possessionDateValue = possessionDateOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("possessionDateSame", "");
        const contingenciesSellingValue = contingenciesSellingOptions.find((option)=>option.getElement().checked)?.getElement().id.replace("contingenciesSelling", "");
        // Save the form data
        (0, _formUtils.updateFormData)({
            stepEight: {
                financing: financingType === "Other" ? financingOtherText.getElement().value : financingType,
                earnestDeposit: earnestDepositValue,
                inspectionPeriod: inspectionPeriodValue,
                appraisalContingency: appraisalContingencyValue,
                financingContingency: financingContingencyValue,
                homeWarranty: homeWarrantyValue,
                possessionDateSame: possessionDateValue,
                fixturesPersonalProperty: fixturesPersonalPropertyValue,
                contingenciesSelling: contingenciesSellingValue,
                concessions: concessionsValue,
                specialTerms: specialTermsValue
            }
        });
        // Check if Financing Contingency is "No" and finalize form submission
        if (financingContingencyValue === "No") {
            // Mark all subsequent steps as inactive
            for(let i = 9; i <= 12; i++)(0, _sliderUtils.markSlideInactive)(`slideStep${i}`);
            // Set the current slide as the final step
            const currentSlide = document.querySelector("#slideStep8");
            if (currentSlide) {
                currentSlide.setAttribute("data-final-step", "true");
                console.log("Current slide marked as final step.");
            }
            nextButton.setText("Finish & Submit"); // Change button text to "Finish & Submit"
            (0, _formUtils.checkAndHandleSubmit)("#negotiatorGeneratorForm", "/generators/negotiator");
        } else {
            const nextSlide = document.querySelector("#slideStep9");
            nextSlide.setAttribute("data-final-step", "true"); // Mark the next slide as the final step
            (0, _sliderUtils.goNextSlide)(); // Proceed to the next slide if "Yes" is selected
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)(); // Navigate to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"3oHNZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepNine", ()=>initStepNine);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepNine = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepNine");
    const backButton = new (0, _core.WFComponent)("#backStepNine");
    const errorElement = new (0, _core.WFComponent)("#submitStepNineError");
    const financingContingencyDaysInput = new (0, _core.WFComponent)("#financingContingencyDaysInput");
    // Since step 9 is always the last step, set the button text to "Finish & Submit"
    nextButton.setText("Finish & Submit");
    // Handle "Finish & Submit" button click
    nextButton.on("click", (event)=>{
        event.preventDefault();
        const financingContingencyDaysValue = financingContingencyDaysInput.getElement().value.trim();
        // Validate required field
        if (!financingContingencyDaysValue) {
            errorElement.setText("Please enter the number of financing contingency days.");
            errorElement.setStyle({
                display: "block"
            });
            return;
        }
        // Prepare form data
        (0, _formUtils.updateFormData)({
            stepNine: {
                financingContingencyDays: financingContingencyDaysValue
            }
        });
        // Submit the form (since this is the last step)
        (0, _formUtils.checkAndHandleSubmit)("#negotiatorGeneratorForm", "/generators/negotiator");
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)(); // Navigate to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"bh5JA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepTen", ()=>initStepTen);
var _core = require("@xatom/core");
var _sliderUtils = require("../utils/sliderUtils");
var _formUtils = require("../utils/formUtils"); // Import the function to update formData
const initStepTen = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepTen");
    const backButton = new (0, _core.WFComponent)("#backStepTen");
    const errorElement = new (0, _core.WFComponent)("#submitStepTenError");
    // Get the radio button elements for representation
    const representationOptions = [
        new (0, _core.WFComponent)("#postInspectionRepBuyer"),
        new (0, _core.WFComponent)("#postInspectionRepSeller")
    ];
    // Handle "Next Step" button click
    nextButton.on("click", (event)=>{
        event.preventDefault();
        const selectedOption = representationOptions.find((option)=>option.getElement().checked);
        if (!selectedOption) {
            // If no option is selected, show an error message
            errorElement.setText("Please select who you represent in this transaction.");
            errorElement.setStyle({
                display: "block"
            });
            return;
        }
        // Clear the error message
        errorElement.setStyle({
            display: "none"
        });
        // Get the value of the selected option
        const selectedValue = selectedOption.getElement().value;
        // Update form data with the selection from Step 10
        (0, _formUtils.updateFormData)({
            stepTen: {
                representation: selectedValue
            }
        });
        if (selectedValue === "Buyer") {
            // Buyer selected: Step 11 active, Step 12 inactive, Step 11 is final
            (0, _sliderUtils.markSlideActive)("slideStep11");
            (0, _sliderUtils.markSlideInactive)("slideStep12");
            // Mark Step 11 as the final step
            document.querySelector("#slideStep11")?.setAttribute("data-final-step", "true");
            document.querySelector("#slideStep12")?.removeAttribute("data-final-step");
            (0, _sliderUtils.goNextSlide)(); // Navigate to Step 11
        } else if (selectedValue === "Seller") {
            // Seller selected: Step 12 active, Step 11 inactive, Step 12 is final
            (0, _sliderUtils.markSlideActive)("slideStep12");
            (0, _sliderUtils.markSlideInactive)("slideStep11");
            // Mark Step 12 as the final step
            document.querySelector("#slideStep12")?.setAttribute("data-final-step", "true");
            document.querySelector("#slideStep11")?.removeAttribute("data-final-step");
            (0, _sliderUtils.goNextSlide)(); // Navigate to Step 12
        }
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)(); // Navigate to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/sliderUtils":"8jEmz","../utils/formUtils":"lfimo","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"hBAgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepEleven", ()=>initStepEleven);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepEleven = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepEleven");
    const backButton = new (0, _core.WFComponent)("#backStepEleven");
    const errorElement = new (0, _core.WFComponent)("#submitStepElevenError");
    // Get field elements
    const listInspectionSellerWantInput = new (0, _core.WFComponent)("#listInspectionSellerWantInput");
    const listInspectionSellerRequiredInput = new (0, _core.WFComponent)("#listInspectionSellerRequiredInput");
    const otherInfoBuyerInput = new (0, _core.WFComponent)("#otherInfoBuyerInput");
    // Handle "Finish & Submit" button click
    nextButton.on("click", (event)=>{
        event.preventDefault();
        const listInspectionSellerWantValue = listInspectionSellerWantInput.getElement().value.trim();
        const listInspectionSellerRequiredValue = listInspectionSellerRequiredInput.getElement().value.trim();
        const otherInfoBuyerValue = otherInfoBuyerInput.getElement().value.trim();
        // Validate required fields
        if (!listInspectionSellerWantValue || !listInspectionSellerRequiredValue) {
            errorElement.setText("Please complete all required fields.");
            errorElement.setStyle({
                display: "block"
            });
            return;
        }
        // Prepare form data
        (0, _formUtils.updateFormData)({
            stepEleven: {
                listInspectionSellerWant: listInspectionSellerWantValue,
                listInspectionSellerRequired: listInspectionSellerRequiredValue,
                otherInfoBuyer: otherInfoBuyerValue
            }
        });
        // Submit the form
        (0, _formUtils.checkAndHandleSubmit)("#negotiatorGeneratorForm", "/generators/negotiator");
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)(); // Navigate to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"7ki1M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStepTwelve", ()=>initStepTwelve);
var _core = require("@xatom/core");
var _formUtils = require("../utils/formUtils");
var _sliderUtils = require("../utils/sliderUtils");
const initStepTwelve = ()=>{
    const form = new (0, _core.WFFormComponent)("#negotiatorGeneratorForm");
    const nextButton = new (0, _core.WFComponent)("#submitStepTwelve");
    const backButton = new (0, _core.WFComponent)("#backStepTwelve");
    const errorElement = new (0, _core.WFComponent)("#submitStepTwelveError");
    // Get field elements
    const listBuyerRequestsInput = document.getElementById("listBuyerRequestsInput");
    const listSellerRequestsInput = document.getElementById("listSellerRequestsInput");
    const otherInfoSellerInput = document.getElementById("otherInfoSellerInput");
    const sellerRequestStatusOptions = document.getElementsByName("seller_request_status");
    // Handle "Finish & Submit" button click
    nextButton.on("click", (event)=>{
        event.preventDefault();
        const listBuyerRequestsValue = listBuyerRequestsInput.value.trim();
        const listSellerRequestsValue = listSellerRequestsInput.value.trim();
        const otherInfoSellerValue = otherInfoSellerInput.value.trim();
        const sellerRequestStatusValue = Array.from(sellerRequestStatusOptions).find((option)=>option.checked)?.value;
        // Validate required fields
        if (!listBuyerRequestsValue || !listSellerRequestsValue || !sellerRequestStatusValue) {
            errorElement.setText("Please complete all required fields.");
            errorElement.setStyle({
                display: "block"
            });
            return;
        }
        // Prepare form data
        (0, _formUtils.updateFormData)({
            stepTwelve: {
                listBuyerRequests: listBuyerRequestsValue,
                listSellerRequests: listSellerRequestsValue,
                sellerRequestStatus: sellerRequestStatusValue,
                otherInfoSeller: otherInfoSellerValue
            }
        });
        // Submit the form
        (0, _formUtils.checkAndHandleSubmit)("#negotiatorGeneratorForm", "/generators/negotiator");
    });
    // Handle "Go Back" button click
    backButton.on("click", (event)=>{
        event.preventDefault();
        (0, _sliderUtils.goPreviousSlide)(); // Navigate to the previous slide
    });
};

},{"@xatom/core":"j9zXV","../utils/formUtils":"lfimo","../utils/sliderUtils":"8jEmz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"kzyKZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSignupForm", ()=>initSignupForm);
var _core = require("@xatom/core");
var _authConfig = require("../authConfig");
var _selectPlan = require("./selectPlan"); // Import submitPlan from selectPlan
const initSignupForm = ()=>{
    // DOM components
    const form = new (0, _core.WFFormComponent)("#createAccountForm");
    const nameInput = new (0, _core.WFComponent)("#nameInput");
    const emailInput = new (0, _core.WFComponent)("#emailInput");
    const brokerageInput = new (0, _core.WFComponent)("#brokerageInput");
    const licensedInInput = new (0, _core.WFComponent)("#licensedInInput");
    const experienceInput = new (0, _core.WFComponent)("#experienceInput");
    const passwordInput = new (0, _core.WFComponent)("#passwordInput");
    const termsInput = new (0, _core.WFComponent)("#termsInput");
    const createAccountError = new (0, _core.WFComponent)("#createAccountError");
    // Password requirements elements
    const lengthCheck = new (0, _core.WFComponent)("#lengthCheck");
    const lowercaseCheck = new (0, _core.WFComponent)("#lowercaseCheck");
    const uppercaseCheck = new (0, _core.WFComponent)("#uppercaseCheck");
    const digitCheck = new (0, _core.WFComponent)("#digitCheck");
    const charCheck = new (0, _core.WFComponent)("#charCheck");
    // Helper function to show errors in the createAccountError element
    const showError = (messages)=>{
        createAccountError.setText(messages);
        createAccountError.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        createAccountError.setText("");
        createAccountError.setStyle({
            display: "none"
        });
    };
    // Validate password requirements
    const validatePassword = (password)=>{
        const lengthPassed = password.length >= 8;
        const lowercasePassed = /[a-z]/.test(password);
        const uppercasePassed = /[A-Z]/.test(password);
        const digitPassed = /[0-9]/.test(password);
        const charPassed = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        lengthPassed ? lengthCheck.addCssClass("has-passed") : lengthCheck.removeCssClass("has-passed");
        lowercasePassed ? lowercaseCheck.addCssClass("has-passed") : lowercaseCheck.removeCssClass("has-passed");
        uppercasePassed ? uppercaseCheck.addCssClass("has-passed") : uppercaseCheck.removeCssClass("has-passed");
        digitPassed ? digitCheck.addCssClass("has-passed") : digitCheck.removeCssClass("has-passed");
        charPassed ? charCheck.addCssClass("has-passed") : charCheck.removeCssClass("has-passed");
        return lengthPassed && lowercasePassed && uppercasePassed && digitPassed && charPassed;
    };
    // Helper function to check URL parameters
    const getUrlParam = (param)=>{
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };
    // Add the button text and trigger elements
    const createAccountButtonText = new (0, _core.WFComponent)("#createAccountText");
    const createAccountTrigger = new (0, _core.WFComponent)(".create_account_trigger");
    // Add event listener to validate password input on keyup
    passwordInput.on("input", ()=>{
        validatePassword(passwordInput.getElement().value);
    });
    // Check if the URL contains the parameter `select_plan=true`
    const selectPlan = getUrlParam("select_plan");
    if (selectPlan === "true") // Programmatically trigger the click event on the .create_account_trigger element
    setTimeout(()=>{
        createAccountTrigger.getElement().click();
    }, 0); // Ensure the DOM is fully ready before triggering the event
    // Intercept form submission
    form.onFormSubmit(async (data, event)=>{
        event.preventDefault();
        hideError(); // Hide existing errors
        const errorMessages = [];
        // Gather form data
        const name = nameInput.getElement().value.trim();
        const email = emailInput.getElement().value.trim();
        const brokerage = brokerageInput.getElement().value.trim();
        const licensed_in = licensedInInput.getElement().value.trim();
        const years_experience = parseFloat(experienceInput.getElement().value.trim());
        const password = passwordInput.getElement().value.trim();
        const terms_of_service = termsInput.getElement().checked;
        // Validate inputs
        if (!name) errorMessages.push("Name is required.");
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) errorMessages.push("Please enter a valid email.");
        if (!brokerage) errorMessages.push("Brokerage is required.");
        if (!licensed_in) errorMessages.push("Licensed location is required.");
        if (isNaN(years_experience) || years_experience < 0) errorMessages.push("Please enter a valid number of years of experience.");
        if (!password || !validatePassword(password)) errorMessages.push("Password does not meet the required criteria.");
        if (!terms_of_service) errorMessages.push("You must agree to the terms of service.");
        // If there are any validation errors, show them in the createAccountError element
        if (errorMessages.length > 0) {
            showError(errorMessages.join("\n"));
            return;
        }
        // Change button text to "Creating Account..." and disable interactions
        createAccountButtonText.setText("Creating Account...");
        createAccountButtonText.setStyle({
            pointerEvents: "none"
        });
        // Proceed with signup if there are no errors
        try {
            const signupResult = await (0, _authConfig.signup)(name, email, password, brokerage, licensed_in, years_experience, terms_of_service);
            if (signupResult.success) {
                // Store user info in localStorage after successful signup
                const userInfo = {
                    email
                };
                localStorage.setItem("user_info", JSON.stringify(userInfo));
                // Check if a selected plan exists in localStorage
                const selectedPlanString = localStorage.getItem("selectedPlan");
                if (selectedPlanString) {
                    const { plan, subscriptionType } = JSON.parse(selectedPlanString);
                    // Call submitPlan function with the selected plan and subscriptionType
                    await (0, _selectPlan.submitPlan)(plan, subscriptionType);
                } else {
                    // No selected plan, proceed normally
                    // Scroll to the top of the page
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    // Programmatically trigger the click event if no plan is found
                    createAccountTrigger.getElement().click();
                }
            } else {
                // Revert button text back to "Create Account" and show error message
                createAccountButtonText.setText("Create Account");
                createAccountButtonText.setStyle({
                    pointerEvents: "auto"
                });
                showError(signupResult.message || "Signup failed. Please check your details and try again.");
            }
        } catch (error) {
            console.error("Signup error:", error);
            // Revert button text back to "Create Account" on error
            createAccountButtonText.setText("Create Account");
            createAccountButtonText.setStyle({
                pointerEvents: "auto"
            });
            showError("An unexpected error occurred. Please try again later.");
        }
    });
};

},{"@xatom/core":"j9zXV","../authConfig":"66ric","./selectPlan":"46ozz","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"66ric":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setUserInfoInLocalStorage", ()=>setUserInfoInLocalStorage);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "signup", ()=>signup);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "isLoggedIn", ()=>isLoggedIn);
parcelHelpers.export(exports, "getUserInfo", ()=>getUserInfo);
parcelHelpers.export(exports, "getUserRole", ()=>getUserRole);
parcelHelpers.export(exports, "getUserPlan", ()=>getUserPlan);
parcelHelpers.export(exports, "fetchCurrentUser", ()=>fetchCurrentUser);
parcelHelpers.export(exports, "restoreSession", ()=>restoreSession);
var _core = require("@xatom/core");
var _apiConfig = require("../api/apiConfig");
// Xano Endpoints
const LOGIN_ENDPOINT = "/auth/login";
const SIGNUP_ENDPOINT = "/auth/signup";
const LOGOUT_ENDPOINT = "/auth/logout";
const ME_ENDPOINT = "/auth/me";
// Initialize WFAuth instance with UserInfo and role
const userAuth = new (0, _core.WFAuth)();
// Keys for storing in localStorage
const TOKEN_KEY = "auth_token";
const USER_INFO_KEY = "user_info";
// Store token in localStorage
const setTokenInLocalStorage = (token)=>{
    localStorage.setItem(TOKEN_KEY, token);
};
// Get token from localStorage
const getTokenFromLocalStorage = ()=>{
    return localStorage.getItem(TOKEN_KEY);
};
// Remove token from localStorage
const removeTokenFromLocalStorage = ()=>{
    localStorage.removeItem(TOKEN_KEY);
};
const setUserInfoInLocalStorage = (userInfo)=>{
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};
// Get user info from localStorage
const getUserInfoFromLocalStorage = ()=>{
    const userInfoString = localStorage.getItem(USER_INFO_KEY);
    return userInfoString ? JSON.parse(userInfoString) : null;
};
// Remove user info from localStorage
const removeUserInfoFromLocalStorage = ()=>{
    localStorage.removeItem(USER_INFO_KEY);
};
// Check if the user is logged in
const isLoggedIn = ()=>!!getTokenFromLocalStorage();
// Restore session from localStorage (to be called on page load)
const restoreSession = ()=>{
    const token = getTokenFromLocalStorage();
    const userInfo = getUserInfoFromLocalStorage();
    if (token && userInfo) {
        // Restore WFAuth session from localStorage
        userAuth.setUser(userInfo);
        userAuth.setConfig({
            token
        });
        userAuth.setRole(userInfo.role);
        return true;
    }
    return false;
};
// Helper to validate and assign subscription type
const getValidSubscriptionType = (type)=>{
    if (type === "monthly" || type === "annual") return type;
    return undefined; // Invalid types become undefined
};
// Login function with additional fields handling
const login = async (email, password)=>{
    try {
        const response = await (0, _apiConfig.apiClient).post(LOGIN_ENDPOINT, {
            data: {
                email,
                password
            }
        }).fetch();
        const { auth_token, user_details } = response;
        if (!auth_token || !user_details) {
            console.error("Invalid response: Missing token or user details");
            return false;
        }
        // Store the token and user details in localStorage
        setTokenInLocalStorage(auth_token);
        setUserInfoInLocalStorage({
            name: user_details.name,
            email: user_details.email,
            plan: user_details.plan,
            tokens_remaining: user_details.tokens_remaining,
            role: "user",
            subscription_type: getValidSubscriptionType(user_details.subscription_type),
            brokerage: user_details.brokerage,
            licensed_in: user_details.licensed_in,
            years_experience: user_details.years_experience
        });
        // Set WFAuth session with the user details
        userAuth.setUser({
            name: user_details.name,
            email: user_details.email,
            plan: user_details.plan,
            tokens_remaining: user_details.tokens_remaining,
            role: "user",
            subscription_type: getValidSubscriptionType(user_details.subscription_type),
            brokerage: user_details.brokerage,
            licensed_in: user_details.licensed_in,
            years_experience: user_details.years_experience
        });
        userAuth.setConfig({
            token: auth_token
        });
        userAuth.setRole("user");
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
};
// Signup function with additional fields handling
const signup = async (name, email, password, brokerage, licensed_in, years_experience, terms_of_service)=>{
    if (!terms_of_service) return {
        success: false,
        message: "You must accept the terms of service"
    };
    if (years_experience < 0) return {
        success: false,
        message: "Years of experience cannot be negative"
    };
    try {
        // Make the API call for signup and expect the correct structure
        const signupRequest = (0, _apiConfig.apiClient).post(SIGNUP_ENDPOINT, {
            data: {
                name,
                email,
                password,
                brokerage,
                licensed_in,
                years_experience,
                terms_of_service
            }
        });
        const response = await signupRequest.fetch();
        // Destructure the correct properties from the response
        const { auth_token, user_details } = response;
        // Ensure we have the token and user details, otherwise handle error
        if (!auth_token || !user_details) {
            console.error("Invalid response: Missing token or user details");
            return {
                success: false,
                message: "Signup failed. Please try again."
            };
        }
        // Store the token and user details in localStorage
        setTokenInLocalStorage(auth_token);
        setUserInfoInLocalStorage({
            name: user_details.name,
            email: user_details.email,
            plan: user_details.plan,
            tokens_remaining: user_details.tokens_remaining,
            role: "user",
            subscription_type: getValidSubscriptionType(user_details.subscription_type),
            brokerage: user_details.brokerage,
            licensed_in: user_details.licensed_in,
            years_experience: user_details.years_experience
        });
        // Set WFAuth session with the user info
        userAuth.setUser({
            name: user_details.name,
            email: user_details.email,
            plan: user_details.plan,
            tokens_remaining: user_details.tokens_remaining,
            role: "user",
            subscription_type: getValidSubscriptionType(user_details.subscription_type),
            brokerage: user_details.brokerage,
            licensed_in: user_details.licensed_in,
            years_experience: user_details.years_experience
        });
        userAuth.setConfig({
            token: auth_token
        });
        userAuth.setRole("user");
        return {
            success: true
        };
    } catch (error) {
        console.error("Signup failed:", error);
        // Check if error response contains a message
        if (error.response && error.response.data && error.response.data.message) return {
            success: false,
            message: error.response.data.message
        };
        return {
            success: false,
            message: "Signup failed. Please try again."
        };
    }
};
// Logout function with server-side session invalidation
const logout = async ()=>{
    try {
        await (0, _apiConfig.apiClient).post(LOGOUT_ENDPOINT);
        // Clear the token and user info from localStorage
        removeTokenFromLocalStorage();
        removeUserInfoFromLocalStorage();
        // Clear WFAuth session
        userAuth.logout();
        return true;
    } catch (error) {
        console.error("Logout failed:", error);
        return false;
    }
};
// Get User Information from WFAuth instance or LocalStorage
const getUserInfo = ()=>{
    return userAuth.isLoggedIn() ? userAuth.getUser() : getUserInfoFromLocalStorage();
};
// Get User Role (i.e., admin/user) from WFAuth instance
const getUserRole = ()=>userAuth.getRole();
// Get User Plan (subscription tier)
const getUserPlan = ()=>{
    const user = userAuth.getUser();
    return user ? user.plan : null;
};
// Retrieve authenticated user data from the /auth/me endpoint
const fetchCurrentUser = async ()=>{
    try {
        const token = getTokenFromLocalStorage();
        if (!token) {
            console.error("No token found, logging out");
            throw new Error("User not logged in.");
        }
        const meRequest = (0, _apiConfig.apiClient).get(ME_ENDPOINT);
        meRequest.onData((data)=>{
            const { user_details } = data;
            // Update WFAuth and localStorage with the user information
            userAuth.setUser({
                name: user_details.name,
                email: user_details.email,
                plan: user_details.plan,
                tokens_remaining: user_details.tokens_remaining,
                role: user_details.role,
                subscription_type: getValidSubscriptionType(user_details.subscription_type),
                brokerage: user_details.brokerage,
                licensed_in: user_details.licensed_in,
                years_experience: user_details.years_experience
            });
            setUserInfoInLocalStorage({
                name: user_details.name,
                email: user_details.email,
                plan: user_details.plan,
                tokens_remaining: user_details.tokens_remaining,
                role: user_details.role,
                subscription_type: getValidSubscriptionType(user_details.subscription_type),
                brokerage: user_details.brokerage,
                licensed_in: user_details.licensed_in,
                years_experience: user_details.years_experience
            });
            userAuth.setRole(user_details.role);
        });
        meRequest.onError((error)=>{
            console.error("Failed to fetch current user:", error);
            return false;
        });
        await meRequest.fetch();
        return true;
    } catch (error) {
        console.error("Error in fetchCurrentUser:", error);
        return false;
    }
};

},{"@xatom/core":"j9zXV","../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"46ozz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "submitPlan", ()=>submitPlan);
parcelHelpers.export(exports, "initSelectPlan", ()=>initSelectPlan);
var _core = require("@xatom/core");
var _apiConfig = require("../../api/apiConfig");
// Helper function to get user email from localStorage
const getUserEmail = ()=>{
    const userInfoString = localStorage.getItem("user_info");
    if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo.email;
    }
    return null;
};
const submitPlan = async (plan, subscriptionType)=>{
    const email = getUserEmail();
    if (!email) {
        console.error("User email not found.");
        return;
    }
    const payload = {
        email,
        plan,
        subscription_type: subscriptionType
    };
    // DOM components for loading and error handling
    const pricingContainer = new (0, _core.WFComponent)("#pricingContainer");
    const checkoutLoading = new (0, _core.WFComponent)("#checkoutLoading");
    const checkoutErrorWrap = new (0, _core.WFComponent)("#checkoutErrorWrap");
    try {
        // Hide the pricing container and show loading indicator
        pricingContainer.setStyle({
            display: "none"
        });
        checkoutLoading.setStyle({
            display: "flex"
        });
        // Free plan case: Redirect directly to the dashboard
        if (plan === "free") {
            localStorage.removeItem("selectedPlan");
            window.location.href = "/dashboard";
            return;
        }
        // Make the API call to select the plan
        const response = await (0, _apiConfig.apiClient).post("/select_plan", {
            data: payload
        }).fetch();
        console.log("Plan selected successfully:", response);
        // Clear selectedPlan from localStorage before navigating to checkout
        localStorage.removeItem("selectedPlan");
        // Navigate to the checkout URL
        if (response) window.location.href = String(response); // Redirect to the Stripe Checkout URL
        else throw new Error("No checkout URL returned in the response.");
    } catch (error) {
        console.error("Failed to select plan:", error);
        // Hide the loading indicator and show the error message
        checkoutLoading.setStyle({
            display: "none"
        });
        checkoutErrorWrap.setStyle({
            display: "flex"
        });
    }
};
const initSelectPlan = ()=>{
    const freePlanMonthlyButton = new (0, _core.WFComponent)("#freePlanMonthly");
    const freePlanAnnualButton = new (0, _core.WFComponent)("#freePlanAnnual");
    const basicPlanMonthlyButton = new (0, _core.WFComponent)("#basicPlanMonthly");
    const growthPlanMonthlyButton = new (0, _core.WFComponent)("#growthPlanMonthly");
    const proPlanMonthlyButton = new (0, _core.WFComponent)("#proPlanMonthly");
    const basicPlanAnnualButton = new (0, _core.WFComponent)("#basicPlanAnnual");
    const growthPlanAnnualButton = new (0, _core.WFComponent)("#growthPlanAnnual");
    const proPlanAnnualButton = new (0, _core.WFComponent)("#proPlanAnnual");
    // Event listeners for free plan selection
    freePlanMonthlyButton.on("click", ()=>submitPlan("free", "monthly"));
    freePlanAnnualButton.on("click", ()=>submitPlan("free", "annual"));
    // Event listeners for each paid plan selection
    basicPlanMonthlyButton.on("click", ()=>submitPlan("basic", "monthly"));
    growthPlanMonthlyButton.on("click", ()=>submitPlan("growth", "monthly"));
    proPlanMonthlyButton.on("click", ()=>submitPlan("pro", "monthly"));
    basicPlanAnnualButton.on("click", ()=>submitPlan("basic", "annual"));
    growthPlanAnnualButton.on("click", ()=>submitPlan("growth", "annual"));
    proPlanAnnualButton.on("click", ()=>submitPlan("pro", "annual"));
};

},{"../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN","@xatom/core":"j9zXV"}],"6pfYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initDashboard", ()=>initDashboard);
var _authConfig = require("../auth/authConfig");
var _core = require("@xatom/core");
// Function to display user information on the dashboard
const displayUserInfo = (name, plan, tokens)=>{
    const userNameElement = document.querySelector(".user_name_text");
    if (userNameElement) {
        const userNameComponent = new (0, _core.WFComponent)("#userName");
        const firstName = name.split(" ")[0];
        userNameComponent.setText(firstName);
    }
    const userPlanElement = document.querySelector("#userPlan");
    if (userPlanElement) {
        const userPlanComponent = new (0, _core.WFComponent)("#userPlan");
        userPlanComponent.setText(plan);
    }
    const userTokensElement = document.querySelector("#tokensRemaining");
    if (userTokensElement) {
        const userTokensComponent = new (0, _core.WFComponent)("#tokensRemaining");
        userTokensComponent.setText(tokens.toString());
    }
    let tokensTotal = 0;
    switch(plan){
        case "free":
            tokensTotal = 5;
            break;
        case "basic":
            tokensTotal = 30;
            break;
        case "growth":
            tokensTotal = 90;
            break;
        case "pro":
            tokensTotal = 150;
            break;
        default:
            tokensTotal = 0;
    }
    const tokensTotalElement = document.querySelector("#tokensTotal");
    if (tokensTotalElement) {
        const tokensTotalComponent = new (0, _core.WFComponent)("#tokensTotal");
        tokensTotalComponent.setText(tokensTotal.toString());
    }
};
// Function to display alerts based on token count and user plan
const checkTokenAndPlanAlerts = (tokens, plan)=>{
    const dashboardAlert = new (0, _core.WFComponent)("#dashboardAlert");
    const dashboardError = new (0, _core.WFComponent)("#dashboardError");
    const purchaseTokensAlert = new (0, _core.WFComponent)("#purchaseTokensAlert");
    const upgradePlanAlert = new (0, _core.WFComponent)("#upgradePlanAlert");
    const purchaseTokensError = new (0, _core.WFComponent)("#purchaseTokensError");
    const upgradePlanError = new (0, _core.WFComponent)("#upgradePlanError");
    // Hide both alerts initially
    dashboardAlert.setStyle({
        display: "none"
    });
    dashboardError.setStyle({
        display: "none"
    });
    // Show the warning alert if tokens are 3 or lower
    if (tokens > 0 && tokens <= 3) {
        dashboardAlert.setStyle({
            display: "flex"
        });
        // Hide the "Purchase Tokens" button if the plan is "free"
        if (plan === "free") purchaseTokensAlert.setStyle({
            display: "none"
        });
        // Hide the "Upgrade Plan" button if the plan is "pro"
        if (plan === "pro") upgradePlanAlert.setStyle({
            display: "none"
        });
    }
    // Show the error alert if tokens are 0
    if (tokens === 0) {
        dashboardError.setStyle({
            display: "flex"
        });
        // Hide the "Purchase Tokens" button if the plan is "free"
        if (plan === "free") purchaseTokensError.setStyle({
            display: "none"
        });
        // Hide the "Upgrade Plan" button if the plan is "pro"
        if (plan === "pro") upgradePlanError.setStyle({
            display: "none"
        });
    }
};
// Function to handle user logout
const handleLogout = async ()=>{
    const logoutButtonElement = document.querySelector("#logoutButton");
    if (logoutButtonElement) {
        const logoutButton = new (0, _core.WFComponent)("#logoutButton");
        logoutButton.on("click", async ()=>{
            await (0, _authConfig.logout)();
            window.location.href = "/login"; // Redirect to login page after successful logout
        });
    }
};
// Function to log out if the session is invalid or user fetch fails
const forceLogout = async ()=>{
    await (0, _authConfig.logout)(); // Clean up session
    window.location.href = "/login"; // Redirect to login
};
const initDashboard = async ()=>{
    // Check if the user is logged in by verifying the existence of auth_token
    if (!(0, _authConfig.isLoggedIn)()) {
        await forceLogout(); // If not logged in, log out and redirect
        return;
    }
    // Attempt to fetch current user info using the auth/me endpoint
    const success = await (0, _authConfig.fetchCurrentUser)();
    if (success) {
        const userInfo = (0, _authConfig.getUserInfo)();
        if (userInfo) {
            displayUserInfo(userInfo.name, userInfo.plan, userInfo.tokens_remaining);
            checkTokenAndPlanAlerts(userInfo.tokens_remaining, userInfo.plan);
        } else {
            console.error("Failed to retrieve user information.");
            await forceLogout(); // Log out and redirect if user info is missing
        }
    } else await forceLogout(); // Log out and redirect if auth/me request fails
    handleLogout(); // Attach logout button functionality
};

},{"../auth/authConfig":"66ric","@xatom/core":"j9zXV","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"9dEMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLoginForm", ()=>initLoginForm);
var _core = require("@xatom/core");
var _authConfig = require("../authConfig");
const initLoginForm = ()=>{
    // DOM components
    const form = new (0, _core.WFFormComponent)("#loginForm");
    const emailInput = new (0, _core.WFComponent)("#emailInput");
    const passwordInput = new (0, _core.WFComponent)("#passwordInput");
    const loginButtonText = new (0, _core.WFComponent)("#loginText");
    const loginErrorComponent = new (0, _core.WFComponent)("#loginError");
    const loadingAnimation = new (0, _core.WFComponent)("#stepOneRequestingAnimation");
    // Helper function to show errors
    const showError = (message)=>{
        loginErrorComponent.setText(message);
        loginErrorComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        loginErrorComponent.setText("");
        loginErrorComponent.setStyle({
            display: "none"
        });
    };
    // Intercept form submission
    form.onFormSubmit(async (data, event)=>{
        event.preventDefault();
        hideError(); // Hide any existing errors
        const email = emailInput.getElement().value.trim();
        const password = passwordInput.getElement().value.trim();
        // Validate inputs
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            showError("Please enter a valid email address.");
            return;
        }
        if (!password) {
            showError("Password is required.");
            return;
        }
        // Change button text and show loading animation
        loginButtonText.setText("Logging in...");
        loadingAnimation.setStyle({
            display: "flex"
        });
        loginButtonText.setStyle({
            pointerEvents: "none"
        });
        try {
            const loginSuccess = await (0, _authConfig.login)(email, password);
            if (loginSuccess) // Redirect to dashboard after successful login
            window.location.href = "/dashboard";
            else {
                // Revert button text and show error message if login fails
                loginButtonText.setText("Login");
                loginButtonText.setStyle({
                    pointerEvents: "auto"
                });
                loadingAnimation.setStyle({
                    display: "none"
                });
                showError("Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            // Revert button text and show error message on error
            loginButtonText.setText("Login");
            loginButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
            showError("An unexpected error occurred. Please try again later.");
        }
    });
};

},{"@xatom/core":"j9zXV","../authConfig":"66ric","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"jDtnH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPurchaseTokens", ()=>initPurchaseTokens);
var _core = require("@xatom/core");
var _apiConfig = require("../api/apiConfig");
var _authConfig = require("../auth/authConfig"); // Assuming you already have this function
// Helper function to get user email from localStorage
const getUserEmail = ()=>{
    const userInfoString = localStorage.getItem("user_info");
    if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo.email;
    }
    return null;
};
// Function to handle token purchase and change button text
const purchaseTokens = async (tokenAmount, button)=>{
    const email = getUserEmail();
    if (!email) {
        console.error("User email not found.");
        return;
    }
    const payload = {
        email,
        token_package: tokenAmount
    };
    // Find the child element with the class `btn_main_text` and update its text
    const buttonTextElement = button.getElement().querySelector(".btn_main_text");
    if (!buttonTextElement) {
        console.error("Button text element not found.");
        return;
    }
    const originalText = buttonTextElement.textContent; // Store the original button text
    buttonTextElement.textContent = "Building Cart..."; // Set new text
    button.setStyle({
        pointerEvents: "none"
    }); // Disable the button to prevent multiple clicks
    try {
        // Make the API call to purchase tokens
        const response = await (0, _apiConfig.apiClient).post("/purchase_tokens", {
            data: payload
        }).fetch();
        console.log("Token purchase initiated successfully:", response);
        // Navigate to the checkout URL
        if (response) window.location.href = String(response); // Redirect to the Stripe Checkout URL
        else throw new Error("No checkout URL returned in the response.");
    } catch (error) {
        console.error("Failed to purchase tokens:", error);
        // Revert button text and enable it in case of an error
        buttonTextElement.textContent = originalText;
        button.setStyle({
            pointerEvents: "auto"
        });
    }
};
// Function to check user plan and show/hide token purchase elements
const checkUserPlan = ()=>{
    const userInfo = (0, _authConfig.getUserInfo)(); // Assuming this function returns the user info from localStorage
    const tokenPurchaseWrap = new (0, _core.WFComponent)("#tokenPurchaseWrap");
    const accessDenied = new (0, _core.WFComponent)("#accessDenied");
    if (userInfo && userInfo.plan === "free") {
        tokenPurchaseWrap.setStyle({
            display: "none"
        });
        accessDenied.setStyle({
            display: "flex"
        });
    } else {
        tokenPurchaseWrap.setStyle({
            display: "flex"
        });
        accessDenied.setStyle({
            display: "none"
        });
    }
};
const initPurchaseTokens = ()=>{
    checkUserPlan(); // Check the user's plan when initializing
    const fiveTokensButton = new (0, _core.WFComponent)("#fiveTokens");
    const tenTokensButton = new (0, _core.WFComponent)("#tenTokens");
    const fifteenTokensButton = new (0, _core.WFComponent)("#fifteenTokens");
    const twentyTokensButton = new (0, _core.WFComponent)("#twentyTokens");
    // Event listeners for each token button
    fiveTokensButton.on("click", ()=>purchaseTokens(5, fiveTokensButton));
    tenTokensButton.on("click", ()=>purchaseTokens(10, tenTokensButton));
    fifteenTokensButton.on("click", ()=>purchaseTokens(15, fifteenTokensButton));
    twentyTokensButton.on("click", ()=>purchaseTokens(20, twentyTokensButton));
};

},{"@xatom/core":"j9zXV","../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN","../auth/authConfig":"66ric"}],"48Xdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAccountSettings", ()=>initAccountSettings);
var _core = require("@xatom/core");
var _authConfig = require("../auth/authConfig"); // Add setUserInfoInLocalStorage
var _apiConfig = require("../api/apiConfig"); // Assuming this is the path to your API config
const initAccountSettings = async ()=>{
    // Initialize the WFFormComponent for the form
    const accountForm = new (0, _core.WFFormComponent)("#updateAccountForm");
    // DOM components for form inputs, buttons, and error/success messages
    const nameInput = new (0, _core.WFComponent)("#nameInput");
    const emailInput = new (0, _core.WFComponent)("#emailInput");
    const brokerageInput = new (0, _core.WFComponent)("#brokerageInput");
    const licensedInInput = new (0, _core.WFComponent)("#licensedInInput");
    const experienceInput = new (0, _core.WFComponent)("#experienceInput");
    const updateButtonText = new (0, _core.WFComponent)("#createAccountText");
    const updateErrorComponent = new (0, _core.WFComponent)("#updateAccountError");
    const updateSuccessComponent = new (0, _core.WFComponent)("#updateAccountSuccess");
    const loadingAnimation = new (0, _core.WFComponent)("#stepOneRequestingAnimation");
    const currentPlanText = new (0, _core.WFComponent)("#currentPlanText"); // Component for displaying current plan
    // Delete account button
    const deleteAccountButton = new (0, _core.WFComponent)("#deleteAccountButton");
    // Helper function to show errors
    const showError = (message)=>{
        updateErrorComponent.setText(message);
        updateErrorComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        updateErrorComponent.setText("");
        updateErrorComponent.setStyle({
            display: "none"
        });
    };
    // Helper function to show success
    const showSuccess = (message)=>{
        updateSuccessComponent.setText(message);
        updateSuccessComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide success
    const hideSuccess = ()=>{
        updateSuccessComponent.setText("");
        updateSuccessComponent.setStyle({
            display: "none"
        });
    };
    // Populate form fields with user info
    const userInfo = (0, _authConfig.getUserInfo)();
    if (userInfo) {
        nameInput.getElement().value = userInfo.name;
        emailInput.getElement().value = userInfo.email;
        brokerageInput.getElement().value = userInfo.brokerage;
        licensedInInput.getElement().value = userInfo.licensed_in;
        experienceInput.getElement().value = userInfo.years_experience.toString();
        // Set the current plan in the currentPlanText element
        currentPlanText.setText(userInfo.plan); // Display the plan value
    }
    // Intercept form submission
    accountForm.onFormSubmit(async (formData, event)=>{
        event.preventDefault();
        hideError(); // Hide any existing errors
        hideSuccess(); // Hide any existing success messages
        // Validate inputs: Ensure all fields are filled in
        const name = nameInput.getElement().value.trim();
        const email = emailInput.getElement().value.trim();
        const brokerage = brokerageInput.getElement().value.trim();
        const licensedIn = licensedInInput.getElement().value.trim();
        const experience = experienceInput.getElement().value.trim();
        if (!name) {
            showError("Name is required.");
            return;
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            showError("Please enter a valid email address.");
            return;
        }
        if (!brokerage) {
            showError("Brokerage is required.");
            return;
        }
        if (!licensedIn) {
            showError("Licensed In field is required.");
            return;
        }
        if (!experience || isNaN(Number(experience)) || Number(experience) < 0) {
            showError("Please enter a valid number of years of experience.");
            return;
        }
        // Change button text and show loading animation
        updateButtonText.setText("Updating...");
        loadingAnimation.setStyle({
            display: "flex"
        });
        updateButtonText.setStyle({
            pointerEvents: "none"
        });
        try {
            // Send the form data to the API
            const response = await (0, _apiConfig.apiClient).patch("/users/update_account", {
                data: {
                    name,
                    email,
                    brokerage,
                    licensed_in: licensedIn,
                    years_experience: parseFloat(experience)
                }
            }).fetch();
            // Handle successful response
            if (response) {
                // Update local storage with the new user details
                const updatedUserInfo = {
                    ...userInfo,
                    name,
                    email,
                    brokerage,
                    licensed_in: licensedIn,
                    years_experience: parseFloat(experience)
                };
                (0, _authConfig.setUserInfoInLocalStorage)(updatedUserInfo); // Update local storage
                showSuccess("Account details updated successfully.");
            } else throw new Error("An unexpected error occurred.");
            // Reset button text and hide loading animation
            updateButtonText.setText("Update Account");
            updateButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
        } catch (error) {
            console.error("Account update error:", error);
            // Revert button text and show error message on error
            updateButtonText.setText("Update Account");
            updateButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
            showError(error.response?.data?.message || "Failed to update the account.");
        }
    });
    // Handle account deletion
    deleteAccountButton.getElement().addEventListener("click", async ()=>{
        try {
            // Confirm account deletion
            const confirmation = confirm("Are you sure you want to delete your account?");
            if (!confirmation) return; // Exit if user cancels
            // Show loading animation or disable button during request
            deleteAccountButton.setStyle({
                pointerEvents: "none",
                opacity: "0.6"
            });
            // Send delete request to the API
            const deleteResponse = await (0, _apiConfig.apiClient).delete("/users/delete").fetch();
            if (deleteResponse) {
                // Log the user out and redirect them
                await (0, _authConfig.logout)();
                window.location.href = "/login"; // Redirect to login or homepage
            } else throw new Error("Failed to delete account.");
        } catch (error) {
            console.error("Account deletion error:", error);
            showError("An error occurred while trying to delete your account.");
        } finally{
            // Re-enable the delete button
            deleteAccountButton.setStyle({
                pointerEvents: "auto",
                opacity: "1"
            });
        }
    });
};

},{"@xatom/core":"j9zXV","../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN","../auth/authConfig":"66ric"}],"8zu0B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPasswordResetForm", ()=>initPasswordResetForm);
var _core = require("@xatom/core");
var _apiConfig = require("../../api/apiConfig");
const initPasswordResetForm = ()=>{
    // Initialize the WFFormComponent for the form
    const form = new (0, _core.WFFormComponent)("#passwordResetForm");
    // DOM components for form inputs, buttons, and error/success messages
    const passwordInput = new (0, _core.WFComponent)("#passwordInput");
    const confirmPasswordInput = new (0, _core.WFComponent)("#confirmPasswordInput");
    const resetButtonText = new (0, _core.WFComponent)("#createAccountText");
    const resetErrorComponent = new (0, _core.WFComponent)("#passwordResetError");
    const loadingAnimation = new (0, _core.WFComponent)("#stepOneRequestingAnimation");
    // Password requirements elements
    const lengthCheck = new (0, _core.WFComponent)("#lengthCheck");
    const lowercaseCheck = new (0, _core.WFComponent)("#lowercaseCheck");
    const uppercaseCheck = new (0, _core.WFComponent)("#uppercaseCheck");
    const digitCheck = new (0, _core.WFComponent)("#digitCheck");
    const charCheck = new (0, _core.WFComponent)("#charCheck");
    const passwordsMatchCheck = new (0, _core.WFComponent)("#passwordsMatchCheck");
    // Helper function to show errors
    const showError = (message)=>{
        resetErrorComponent.setText(message);
        resetErrorComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        resetErrorComponent.setText("");
        resetErrorComponent.setStyle({
            display: "none"
        });
    };
    // Validate password requirements
    const validatePassword = (password)=>{
        const lengthPassed = password.length >= 8;
        const lowercasePassed = /[a-z]/.test(password);
        const uppercasePassed = /[A-Z]/.test(password);
        const digitPassed = /[0-9]/.test(password);
        const charPassed = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        lengthPassed ? lengthCheck.addCssClass("has-passed") : lengthCheck.removeCssClass("has-passed");
        lowercasePassed ? lowercaseCheck.addCssClass("has-passed") : lowercaseCheck.removeCssClass("has-passed");
        uppercasePassed ? uppercaseCheck.addCssClass("has-passed") : uppercaseCheck.removeCssClass("has-passed");
        digitPassed ? digitCheck.addCssClass("has-passed") : digitCheck.removeCssClass("has-passed");
        charPassed ? charCheck.addCssClass("has-passed") : charCheck.removeCssClass("has-passed");
        return lengthPassed && lowercasePassed && uppercasePassed && digitPassed && charPassed;
    };
    // Check if passwords match
    const validatePasswordsMatch = ()=>{
        const password = passwordInput.getElement().value.trim();
        const confirmPassword = confirmPasswordInput.getElement().value.trim();
        if (password === confirmPassword) {
            passwordsMatchCheck.addCssClass("has-passed");
            return true;
        } else {
            passwordsMatchCheck.removeCssClass("has-passed");
            return false;
        }
    };
    // Add event listeners for password input validations
    passwordInput.on("input", ()=>{
        validatePassword(passwordInput.getElement().value);
        validatePasswordsMatch();
    });
    confirmPasswordInput.on("input", validatePasswordsMatch);
    // Intercept form submission
    form.onFormSubmit(async (formData, event)=>{
        event.preventDefault();
        hideError(); // Hide any existing errors
        const password = passwordInput.getElement().value.trim();
        const confirmPassword = confirmPasswordInput.getElement().value.trim();
        // Validate inputs
        if (!password || !validatePassword(password)) {
            showError("Password does not meet the required criteria.");
            return;
        }
        if (!validatePasswordsMatch()) {
            showError("Passwords do not match.");
            return;
        }
        // Change button text and show loading animation
        resetButtonText.setText("Resetting Password...");
        loadingAnimation.setStyle({
            display: "flex"
        });
        resetButtonText.setStyle({
            pointerEvents: "none"
        });
        try {
            // Send the form data to the reset password API
            const response = await (0, _apiConfig.apiClient).post("/auth/reset_password", {
                data: {
                    password,
                    confirm_password: confirmPassword
                }
            }).fetch();
            // Handle successful response
            if (response) form.showSuccessState(); // Show success state of the form
            else throw new Error("An unexpected error occurred.");
            // Reset button text and hide loading animation
            resetButtonText.setText("Reset Password");
            resetButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
        } catch (error) {
            console.error("Password reset error:", error);
            // Revert button text and show error message on error
            resetButtonText.setText("Reset Password");
            resetButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
            showError(error.response?.data?.message || "Failed to reset password.");
        }
    });
};

},{"@xatom/core":"j9zXV","../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"6DacA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initForgotPasswordForm", ()=>initForgotPasswordForm);
var _core = require("@xatom/core");
var _apiConfig = require("../../api/apiConfig");
const initForgotPasswordForm = ()=>{
    // Initialize the WFFormComponent for the form
    const form = new (0, _core.WFFormComponent)("#requestLinkForm");
    // DOM components for form inputs, buttons, and error/success messages
    const emailInput = new (0, _core.WFComponent)("#emailInput");
    const requestButtonText = new (0, _core.WFComponent)("#loginText");
    const requestErrorComponent = new (0, _core.WFComponent)("#requestLinkError");
    const loadingAnimation = new (0, _core.WFComponent)("#stepOneRequestingAnimation");
    const successTrigger = new (0, _core.WFComponent)("#onSuccessTrigger");
    // Helper function to show errors
    const showError = (message)=>{
        requestErrorComponent.setText(message);
        requestErrorComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        requestErrorComponent.setText("");
        requestErrorComponent.setStyle({
            display: "none"
        });
    };
    // Intercept form submission
    form.onFormSubmit(async (formData, event)=>{
        event.preventDefault();
        hideError(); // Hide any existing errors
        const email = emailInput.getElement().value.trim();
        // Validate email input
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            showError("Please enter a valid email address.");
            return;
        }
        // Change button text and show loading animation
        requestButtonText.setText("Requesting Link...");
        loadingAnimation.setStyle({
            display: "flex"
        });
        requestButtonText.setStyle({
            pointerEvents: "none"
        });
        try {
            // Send the form data to the forgot password API
            const response = await (0, _apiConfig.apiClient).get("/auth/magic-link", {
                data: {
                    email
                }
            }).fetch();
            // Handle successful response
            if (response) {
                successTrigger.getElement().click(); // Trigger the success action
                form.showSuccessState(); // Show success state of the form
            } else throw new Error("An unexpected error occurred.");
            // Reset button text and hide loading animation
            requestButtonText.setText("Request Reset Link");
            requestButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
        } catch (error) {
            console.error("Forgot password error:", error);
            // Revert button text and show error message on error
            requestButtonText.setText("Request Reset Link");
            requestButtonText.setStyle({
                pointerEvents: "auto"
            });
            loadingAnimation.setStyle({
                display: "none"
            });
            showError(error.response?.data?.message || "Failed to request reset link.");
        }
    });
};

},{"@xatom/core":"j9zXV","../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"fpJ4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMagicLinkLogin", ()=>initMagicLinkLogin);
var _core = require("@xatom/core");
var _apiConfig = require("../../api/apiConfig"); // Update with the correct path to your API config
const initMagicLinkLogin = async ()=>{
    // DOM component for displaying error messages
    const magicLinkErrorComponent = new (0, _core.WFComponent)("#magicLinkError");
    // Helper function to show errors
    const showError = (message)=>{
        magicLinkErrorComponent.setText(message);
        magicLinkErrorComponent.setStyle({
            display: "block"
        });
    };
    // Helper function to hide errors
    const hideError = ()=>{
        magicLinkErrorComponent.setText("");
        magicLinkErrorComponent.setStyle({
            display: "none"
        });
    };
    // Get the magic_token from the URL parameters
    const getUrlParam = (param)=>{
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };
    const magicToken = getUrlParam("magic_token");
    // If no magic_token is provided, show an error
    if (!magicToken) {
        showError("Invalid or missing magic token.");
        return;
    }
    hideError(); // Ensure any previous errors are hidden
    try {
        // Make the POST request to the magic login endpoint
        const response = await (0, _apiConfig.apiClient).post("/auth/magic-login", {
            data: {
                magic_token: magicToken
            }
        }).fetch();
        // Handle successful response
        if (response) {
            // Store the auth token in localStorage
            localStorage.setItem("auth_token", response);
            // Redirect the user to the reset-password page
            window.location.href = "/reset-password";
        } else throw new Error("Invalid response from server.");
    } catch (error) {
        console.error("Magic link login error:", error);
        showError(error.response?.data?.message || "Failed to authenticate with the magic link.");
    }
};

},{"@xatom/core":"j9zXV","../../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"jD2Jr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHistoryPage", ()=>initHistoryPage);
var _core = require("@xatom/core");
var _apiConfig = require("../api/apiConfig"); // Ensure the correct path to your API config
const initHistoryPage = async ()=>{
    // Initialize WFDynamicList with selectors
    const historyList = new (0, _core.WFDynamicList)(".history_list", {
        rowSelector: ".history_link",
        loaderSelector: ".history_loading",
        emptySelector: ".history_list_empy"
    });
    // Customize the rendering of each list item
    historyList.rowRenderer(({ rowData, rowElement })=>{
        // Select the elements using class selectors
        const titleElement = rowElement.getChildAsComponent(".listitemtitle");
        const generatorElement = rowElement.getChildAsComponent(".listitemgenerator");
        const dateElement = rowElement.getChildAsComponent(".listitemdate");
        // Format the generator: Remove underscores, capitalize first letter
        const formattedGenerator = rowData.generator.replace(/_/g, " ") // Replace underscores with spaces
        .replace(/\b\w/g, (char)=>char.toUpperCase()); // Capitalize the first letter of each word
        // Format the date: Include time
        const formattedDate = new Date(rowData.created_at).toLocaleString();
        // Update the elements with data from rowData
        titleElement.setText(rowData.title);
        generatorElement.setText(formattedGenerator);
        dateElement.setText(formattedDate);
        // Add a click event to open the dialog with the item's content
        rowElement.on("click", ()=>{
            const dialogTitle = new (0, _core.WFComponent)("#dialog-title");
            const historyContent = new (0, _core.WFComponent)("#historyContent");
            const dialog = new (0, _core.WFComponent)("#actionRequiredDialog");
            dialogTitle.setText(rowData.title);
            historyContent.getElement().innerHTML = rowData.content; // Set the content HTML
            // Cast the dialog element to HTMLDialogElement to use showModal()
            const dialogElement = dialog.getElement();
            if (dialogElement.showModal) {
                dialogElement.showModal(); // Show the dialog
                // Close the dialog when clicking outside of it
                dialogElement.addEventListener("click", (event)=>{
                    if (event.target === dialogElement) dialogElement.close();
                });
                // Close the dialog when the Escape key is pressed
                dialogElement.addEventListener("keydown", (event)=>{
                    if (event.key === "Escape") dialogElement.close();
                });
            } else console.error("Dialog element does not support showModal()");
        });
        return rowElement;
    });
    try {
        // Fetch history data from the API
        historyList.changeLoadingStatus(true);
        const response = await (0, _apiConfig.apiClient).get("/history").fetch();
        // Sort the response data by the created_at field (newest first)
        const sortedResponse = response.sort((a, b)=>b.created_at - a.created_at);
        // Set sorted data to the dynamic list
        historyList.setData(sortedResponse);
        // Once the list is rendered, add the month dividers
        historyList.forceRender();
        addMonthDividers(sortedResponse);
        // Initialize search functionality
        initSearchFunctionality(sortedResponse, historyList);
    } catch (error) {
        console.error("Error fetching history:", error);
    }
};
// Function to add month dividers after the list is rendered
const addMonthDividers = (historyItems)=>{
    const historyListContainer = document.querySelector(".history_list");
    let lastRenderedMonth = null;
    // Remove any old month dividers to avoid duplicates
    document.querySelectorAll(".month-divider").forEach((divider)=>{
        divider.remove();
    });
    // Clear the list container before re-rendering the items with dividers
    if (historyListContainer) historyListContainer.innerHTML = "";
    historyItems.forEach((item)=>{
        const itemDate = new Date(item.created_at);
        const currentMonth = itemDate.toLocaleString("default", {
            month: "long",
            year: "numeric"
        });
        // If this is the first item of a new month, insert a month divider before it
        if (currentMonth !== lastRenderedMonth) {
            lastRenderedMonth = currentMonth;
            // Create the month divider element
            const monthDivider = document.createElement("div");
            monthDivider.innerHTML = `<h3>${currentMonth}</h3><hr>`;
            monthDivider.classList.add("month-divider");
            // Append the month divider to the history list container
            historyListContainer?.appendChild(monthDivider);
        }
        // Render the current history item
        const listItem = createHistoryItem(item); // Use the function that renders individual list items
        historyListContainer?.appendChild(listItem);
    });
};
// Function to create individual list items (simplified for this example)
const createHistoryItem = (item)=>{
    // Format the generator: Remove underscores, capitalize first letter
    const formattedGenerator = item.generator.replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char)=>char.toUpperCase()); // Capitalize the first letter of each word
    // Create the button element for each history item
    const button = document.createElement("button");
    button.classList.add("history_link");
    // Populate the button with the necessary content (title, date, generator)
    button.innerHTML = `
    <div class="history_link_content u-hflex-left-center">
      <div>
        <div class="u-text-small is-blue listitemgenerator u-weight-bold">${formattedGenerator // Use formatted generator here
    }</div>
        <div class="history_title u-weight-bold listitemtitle clamp-two-lines">${item.title}</div>
      </div>
      <div class="listitemdate">${new Date(item.created_at).toLocaleString()}</div>
    </div>`;
    // Add the click event for opening the dialog
    button.addEventListener("click", ()=>openDialog(item.title, item.content));
    return button;
};
// Function to open the dialog with the given title and content
const openDialog = (title, content)=>{
    const dialogTitle = new (0, _core.WFComponent)("#dialog-title");
    const historyContent = new (0, _core.WFComponent)("#historyContent");
    const dialog = new (0, _core.WFComponent)("#actionRequiredDialog");
    dialogTitle.setText(title);
    historyContent.getElement().innerHTML = content; // Set the content HTML
    // Cast the dialog element to HTMLDialogElement to use showModal()
    const dialogElement = dialog.getElement();
    if (dialogElement.showModal) {
        dialogElement.showModal(); // Show the dialog
        // Close the dialog when clicking outside of it
        dialogElement.addEventListener("click", (event)=>{
            if (event.target === dialogElement) dialogElement.close();
        });
        // Close the dialog when the Escape key is pressed
        dialogElement.addEventListener("keydown", (event)=>{
            if (event.key === "Escape") dialogElement.close();
        });
    } else console.error("Dialog element does not support showModal()");
};
// Function to initialize search functionality
const initSearchFunctionality = (historyItems, historyList)=>{
    const searchInput = document.getElementById("SearchInput");
    // Add an event listener for the input field
    searchInput.addEventListener("input", (event)=>{
        const query = event.target.value.toLowerCase();
        // Filter the history items based on the search query
        const filteredItems = historyItems.filter((item)=>{
            const formattedDate = new Date(item.created_at).toLocaleString().toLowerCase();
            const formattedGenerator = item.generator.replace(/_/g, " ").toLowerCase();
            // Generate the current month-year string
            const itemMonthYear = new Date(item.created_at).toLocaleString("default", {
                month: "long",
                year: "numeric"
            }).toLowerCase();
            return item.title.toLowerCase().includes(query) || formattedGenerator.includes(query) || formattedDate.includes(query) || itemMonthYear.includes(query) // Include month-year in search
            ;
        });
        // Update the dynamic list with the filtered items
        historyList.setData(filteredItems);
        // Re-add the month dividers after filtering
        historyList.forceRender();
        addMonthDividers(filteredItems);
    });
};

},{"@xatom/core":"j9zXV","../api/apiConfig":"7VxA0","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}],"dCwKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTokenCheck", ()=>initTokenCheck);
var _core = require("@xatom/core");
var _authConfig = require("../auth/authConfig"); // Import the function to get user information
const initTokenCheck = ()=>{
    // Get user info (including tokens_remaining) from localStorage or session
    const userInfo = (0, _authConfig.getUserInfo)();
    if (!userInfo) {
        console.error("User information is missing. Cannot check tokens.");
        return;
    }
    const tokensRemaining = userInfo.tokens_remaining;
    // If tokens_remaining is 0, show the dialog and prevent it from being closed
    if (tokensRemaining === 0) {
        const dialog = new (0, _core.WFComponent)("#actionRequiredDialog");
        const dialogElement = dialog.getElement();
        // Remove the element with class .generator_wrap from the DOM
        const generatorWrapElement = document.querySelector(".generator_wrap");
        if (generatorWrapElement) generatorWrapElement.remove(); // Completely remove the element from the DOM
        if (dialogElement.showModal) {
            dialogElement.showModal();
            // Prevent closing via Escape key
            dialogElement.addEventListener("keydown", (event)=>{
                if (event.key === "Escape") event.preventDefault(); // Prevent the default action of closing the dialog
            });
            // Prevent closing by clicking outside the dialog
            dialogElement.addEventListener("click", (event)=>{
                if (event.target === dialogElement) event.preventDefault(); // Prevent closing when clicking outside
            });
            // Prevent closing via cancel event
            dialogElement.addEventListener("cancel", (event)=>{
                event.preventDefault(); // Prevent closing via 'cancel' (ESC key default)
            });
        } else console.error("Dialog element does not support showModal()");
    }
};

},{"@xatom/core":"j9zXV","../auth/authConfig":"66ric","@parcel/transformer-js/src/esmodule-helpers.js":"lV7RN"}]},["jeTtx"], "jeTtx", "parcelRequireb2fb")

//# sourceMappingURL=app.js.map
