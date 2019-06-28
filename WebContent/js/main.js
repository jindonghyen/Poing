! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
      var t = "length" in e && e.length,
          n = Z.type(e);
      return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }

  function r(e, t, n) {
      if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      });
      if (t.nodeType) return Z.grep(e, function(e) {
          return e === t !== n
      });
      if ("string" == typeof t) {
          if (ae.test(t)) return Z.filter(t, e, n);
          t = Z.filter(t, e)
      }
      return Z.grep(e, function(e) {
          return U.call(t, e) >= 0 !== n
      })
  }

  function i(e, t) {
      for (;
          (e = e[t]) && 1 !== e.nodeType;);
      return e
  }

  function o(e) {
      var t = he[e] = {};
      return Z.each(e.match(de) || [], function(e, n) {
          t[n] = !0
      }), t
  }

  function s() {
      J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
  }

  function a() {
      Object.defineProperty(this.cache = {}, 0, {
          get: function() {
              return {}
          }
      }), this.expando = Z.expando + a.uid++
  }

  function u(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
              } catch (i) {}
              ye.set(e, t, n)
          } else n = void 0;
      return n
  }

  function l() {
      return !0
  }

  function c() {
      return !1
  }

  function f() {
      try {
          return J.activeElement
      } catch (e) {}
  }

  function p(e, t) {
      return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function d(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function h(e) {
      var t = Pe.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function g(e, t) {
      for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
  }

  function m(e, t) {
      var n, r, i, o, s, a, u, l;
      if (1 === t.nodeType) {
          if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
              delete s.handle, s.events = {};
              for (i in l)
                  for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
          }
          ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
      }
  }

  function v(e, t) {
      var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
  }

  function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }

  function x(t, n) {
      var r, i = Z(n.createElement(t)).appendTo(n.body),
          o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
      return i.detach(), o
  }

  function b(e) {
      var t = J,
          n = $e[e];
      return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
  }

  function w(e, t, n) {
      var r, i, o, s, a = e.style;
      return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]),
      			n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
      			Be.test(s) && Ie.test(t) && 
      				(r = a.width, i = a.minWidth, 
    				  o = a.maxWidth, 
    				  a.minWidth = a.maxWidth = a.width = s,
    				  s = n.width, a.width = r, 
    				  a.minWidth = i, 
    				  a.maxWidth = o)), 
    				  void 0 !== s ? s + "" : s
  }

  function T(e, t) {
      return {
          get: function() {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments)
          }
      }
  }

  function C(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
          if (t = Ge[i] + n, t in e) return t;
      return r
  }

  function N(e, t, n) {
      var r = Xe.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function k(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
      return s
  }

  function E(e, t, n) {
      var r = !0,
          i = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = _e(e),
          s = "border-box" === Z.css(e, "boxSizing", !1, o);
      if (0 >= i || null == i) {
          if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i)) return i;
          r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function S(e, t) {
      for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
      for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
      return e
  }

  function D(e, t, n, r, i) {
      return new D.prototype.init(e, t, n, r, i)
  }

  function j() {
      return setTimeout(function() {
          Qe = void 0
      }), Qe = Z.now()
  }

  function A(e, t) {
      var n, r = 0,
          i = {
              height: e
          };
      for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
  }

  function L(e, t, n) {
      for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)
          if (r = i[o].call(n, t, e)) return r
  }

  function q(e, t, n) {
      var r, i, o, s, a, u, l, c, f = this,
          p = {},
          d = e.style,
          h = e.nodeType && Ce(e),
          g = ve.get(e, "fxshow");
      n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
          a.unqueued || u()
      }), a.unqueued++, f.always(function() {
          f.always(function() {
              a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
          })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
          d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
      }));
      for (r in t)
          if (i = t[r], Ke.exec(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  h = !0
              }
              p[r] = g && g[r] || Z.style(e, r)
          } else l = void 0;
      if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
      else {
          g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
              Z(e).hide()
          }), f.done(function() {
              var t;
              ve.remove(e, "fxshow");
              for (t in p) Z.style(e, t, p[t])
          });
          for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
      }
  }

  function H(e, t) {
      var n, r, i, o, s;
      for (n in e)
          if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
              o = s.expand(o), delete e[r];
              for (n in o) n in e || (e[n] = o[n], t[n] = i)
          } else t[r] = i
  }

  function O(e, t, n) {
      var r, i, o = 0,
          s = tt.length,
          a = Z.Deferred().always(function() {
              delete u.elem
          }),
          u = function() {
              if (i) return !1;
              for (var t = Qe || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
              return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
          },
          l = a.promise({
              elem: e,
              props: Z.extend({}, t),
              opts: Z.extend(!0, {
                  specialEasing: {}
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: Qe || j(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r
              },
              stop: function(t) {
                  var n = 0,
                      r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; r > n; n++) l.tweens[n].run(1);
                  return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
              }
          }),
          c = l.props;
      for (H(c, l.opts.specialEasing); s > o; o++)
          if (r = tt[o].call(l, e, c, l.opts)) return r;
      return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function F(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
              o = t.toLowerCase().match(de) || [];
          if (Z.isFunction(n))
              for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }

  function P(e, t, n, r) {
      function i(a) {
          var u;
          return o[a] = !0, Z.each(e[a] || [], function(e, a) {
              var l = a(t, n, r);
              return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
          }), u
      }
      var o = {},
          s = e === xt;
      return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function R(e, t) {
      var n, r, i = Z.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Z.extend(!0, e, r), e
  }

  function M(e, t, n) {
      for (var r, i, o, s, a = e.contents, u = e.dataTypes;
          "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in a)
              if (a[i] && a[i].test(r)) {
                  u.unshift(i);
                  break
              } if (u[0] in n) o = u[0];
      else {
          for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
              }
              s || (s = i)
          }
          o = o || s
      }
      return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function W(e, t, n, r) {
      var i, o, s, a, u, l = {},
          c = e.dataTypes.slice();
      if (c[1])
          for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
      for (o = c.shift(); o;)
          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
          if (s = l[u + " " + o] || l["* " + o], !s)
              for (i in l)
                  if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                      s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                      break
                  } if (s !== !0)
              if (s && e["throws"]) t = s(t);
              else try {
                  t = s(t)
              } catch (f) {
                  return {
                      state: "parsererror",
                      error: s ? f : "No conversion from " + u + " to " + o
                  }
              }
      }
      return {
          state: "success",
          data: t
      }
  }

  function $(e, t, n, r) {
      var i;
      if (Z.isArray(t)) Z.each(t, function(t, i) {
          n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== Z.type(t)) r(e, t);
      else
          for (i in t) $(e + "[" + i + "]", t[i], n, r)
  }

  function I(e) {
      return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var B = [],
      _ = B.slice,
      z = B.concat,
      X = B.push,
      U = B.indexOf,
      V = {},
      Y = V.toString,
      G = V.hasOwnProperty,
      Q = {},
      J = e.document,
      K = "2.1.4",
      Z = function(e, t) {
          return new Z.fn.init(e, t)
      },
      ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      te = /^-ms-/,
      ne = /-([\da-z])/gi,
      re = function(e, t) {
          return t.toUpperCase()
      };
  Z.fn = Z.prototype = {
      jquery: K,
      constructor: Z,
      selector: "",
      length: 0,
      toArray: function() {
          return _.call(this)
      },
      get: function(e) {
          return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
      },
      pushStack: function(e) {
          var t = Z.merge(this.constructor(), e);
          return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
          return Z.each(this, e, t)
      },
      map: function(e) {
          return this.pushStack(Z.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(_.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: X,
      sort: B.sort,
      splice: B.splice
  }, Z.extend = Z.fn.extend = function() {
      var e, t, n, r, i, o, s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
          if (null != (e = arguments[a]))
              for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
      return s
  }, Z.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === Z.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
          return null != e && e === e.window
      },
      isNumeric: function(e) {
          return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
      },
      isPlainObject: function(e) {
          return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          var t, n = eval;
          e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
          return e.replace(te, "ms-").replace(ne, re)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, r) {
          var i, o = 0,
              s = e.length,
              a = n(e);
          if (r) {
              if (a)
                  for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
              else
                  for (o in e)
                      if (i = t.apply(e[o], r), i === !1) break
          } else if (a)
              for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
          else
              for (o in e)
                  if (i = t.call(e[o], o, e[o]), i === !1) break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(ee, "")
      },
      makeArray: function(e, t) {
          var r = t || [];
          return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : U.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
          return i
      },
      map: function(e, t, r) {
          var i, o = 0,
              s = e.length,
              a = n(e),
              u = [];
          if (a)
              for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
          else
              for (o in e) i = t(e[o], o, r), null != i && u.push(i);
          return z.apply([], u)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, r, i;
          return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
              return e.apply(t || this, r.concat(_.call(arguments)))
          }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
      },
      now: Date.now,
      support: Q
  }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      V["[object " + t + "]"] = t.toLowerCase()
  });
  var ie = function(e) {
      function t(e, t, n, r) {
          var i, o, s, a, u, l, f, d, h, g;
          if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
          if (!r && O) {
              if (11 !== a && (i = ye.exec(e)))
                  if (s = i[1]) {
                      if (9 === a) {
                          if (o = t.getElementById(s), !o || !o.parentNode) return n;
                          if (o.id === s) return n.push(o), n
                      } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
                  } else {
                      if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                      if ((s = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                  } if (w.qsa && (!F || !F.test(e))) {
                  if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                      for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                      h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                  }
                  if (g) try {
                      return K.apply(n, h.querySelectorAll(g)), n
                  } catch (m) {} finally {
                      f || t.removeAttribute("id")
                  }
              }
          }
          return S(e.replace(ue, "$1"), t, n, r)
      }

      function n() {
          function e(n, r) {
              return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
          }
          var t = [];
          return e
      }

      function r(e) {
          return e[W] = !0, e
      }

      function i(e) {
          var t = q.createElement("div");
          try {
              return !!e(t)
          } catch (n) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function o(e, t) {
          for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
      }

      function s(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
          if (r) return r;
          if (n)
              for (; n = n.nextSibling;)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function a(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e
          }
      }

      function u(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }

      function l(e) {
          return r(function(t) {
              return t = +t, r(function(n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }

      function c(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }

      function f() {}

      function p(e) {
          for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
          return r
      }

      function d(e, t, n) {
          var r = t.dir,
              i = n && "parentNode" === r,
              o = B++;
          return t.first ? function(t, n, o) {
              for (; t = t[r];)
                  if (1 === t.nodeType || i) return e(t, n, o)
          } : function(t, n, s) {
              var a, u, l = [I, o];
              if (s) {
                  for (; t = t[r];)
                      if ((1 === t.nodeType || i) && e(t, n, s)) return !0
              } else
                  for (; t = t[r];)
                      if (1 === t.nodeType || i) {
                          if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o) return l[2] = a[2];
                          if (u[r] = l, l[2] = e(t, n, s)) return !0
                      }
          }
      }

      function h(e) {
          return e.length > 1 ? function(t, n, r) {
              for (var i = e.length; i--;)
                  if (!e[i](t, n, r)) return !1;
              return !0
          } : e[0]
      }

      function g(e, n, r) {
          for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
          return r
      }

      function m(e, t, n, r, i) {
          for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
          return s
      }

      function v(e, t, n, i, o, s) {
          return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
              var l, c, f, p = [],
                  d = [],
                  h = s.length,
                  v = r || g(t || "*", a.nodeType ? [a] : a, []),
                  y = !e || !r && t ? v : m(v, p, e, a, u),
                  x = n ? o || (r ? e : h || i) ? [] : s : y;
              if (n && n(y, x, a, u), i)
                  for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
              if (r) {
                  if (o || e) {
                      if (o) {
                          for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                          o(null, x = [], l, u)
                      }
                      for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                  }
              } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
          })
      }

      function y(e) {
          for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                  return e === t
              }, s, !0), l = d(function(e) {
                  return ee(t, e) > -1
              }, s, !0), c = [function(e, n, r) {
                  var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                  return t = null, i
              }]; i > a; a++)
              if (n = T.relative[e[a].type]) c = [d(h(c), n)];
              else {
                  if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                      for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                      return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                          value: " " === e[a - 2].type ? "*" : ""
                      })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                  }
                  c.push(n)
              } return h(c)
      }

      function x(e, n) {
          var i = n.length > 0,
              o = e.length > 0,
              s = function(r, s, a, u, l) {
                  var c, f, p, d = 0,
                      h = "0",
                      g = r && [],
                      v = [],
                      y = D,
                      x = r || o && T.find.TAG("*", l),
                      b = I += null == y ? 1 : Math.random() || .1,
                      w = x.length;
                  for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                      if (o && c) {
                          for (f = 0; p = e[f++];)
                              if (p(c, s, a)) {
                                  u.push(c);
                                  break
                              } l && (I = b)
                      }
                      i && ((c = !p && c) && d--, r && g.push(c))
                  }
                  if (d += h, i && h !== d) {
                      for (f = 0; p = n[f++];) p(g, v, s, a);
                      if (r) {
                          if (d > 0)
                              for (; h--;) g[h] || v[h] || (v[h] = Q.call(u));
                          v = m(v)
                      }
                      K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                  }
                  return l && (I = b, D = y), g
              };
          return i ? r(s) : s
      }
      var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date,
          $ = e.document,
          I = 0,
          B = 0,
          _ = n(),
          z = n(),
          X = n(),
          U = function(e, t) {
              return e === t && (A = !0), 0
          },
          V = 1 << 31,
          Y = {}.hasOwnProperty,
          G = [],
          Q = G.pop,
          J = G.push,
          K = G.push,
          Z = G.slice,
          ee = function(e, t) {
              for (var n = 0, r = e.length; r > n; n++)
                  if (e[n] === t) return n;
              return -1
          },
          te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ne = "[\\x20\\t\\r\\n\\f]",
          re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ie = re.replace("w", "w#"),
          oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
          se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
          ae = new RegExp(ne + "+", "g"),
          ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
          le = new RegExp("^" + ne + "*," + ne + "*"),
          ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
          fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
          pe = new RegExp(se),
          de = new RegExp("^" + ie + "$"),
          he = {
              ID: new RegExp("^#(" + re + ")"),
              CLASS: new RegExp("^\\.(" + re + ")"),
              TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + oe),
              PSEUDO: new RegExp("^" + se),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + te + ")$", "i"),
              needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
          },
          ge = /^(?:input|select|textarea|button)$/i,
          me = /^h\d$/i,
          ve = /^[^{]+\{\s*\[native \w/,
          ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          xe = /[+~]/,
          be = /'|\\/g,
          we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
          Te = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          Ce = function() {
              L()
          };
      try {
          K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
      } catch (Ne) {
          K = {
              apply: G.length ? function(e, t) {
                  J.apply(e, Z.call(t))
              } : function(e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++];);
                  e.length = n - 1
              }
          }
      }
      w = t.support = {}, N = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }, L = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : $;
          return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !N(r), w.attributes = i(function(e) {
              return e.className = "i", !e.getAttribute("className")
          }), w.getElementsByTagName = i(function(e) {
              return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
          }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
              return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
          }), w.getById ? (T.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && O) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : []
              }
          }, T.filter.ID = function(e) {
              var t = e.replace(we, Te);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }) : (delete T.find.ID, T.filter.ID = function(e) {
              var t = e.replace(we, Te);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
              var n, r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
              return O ? t.getElementsByClassName(e) : void 0
          }, P = [], F = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
              H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
          }), i(function(e) {
              var t = r.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
          })), (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
              w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", se)
          }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), M = t || ve.test(H.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
              if (t)
                  for (; t = t.parentNode;)
                      if (t === e) return !0;
              return !1
          }, U = t ? function(e, t) {
              if (e === t) return A = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
              if (e === t) return A = !0, 0;
              var n, i = 0,
                  o = e.parentNode,
                  a = t.parentNode,
                  u = [e],
                  l = [t];
              if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
              if (o === a) return s(e, t);
              for (n = e; n = n.parentNode;) u.unshift(n);
              for (n = t; n = n.parentNode;) l.unshift(n);
              for (; u[i] === l[i];) i++;
              return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
          }, r) : q
      }, t.matches = function(e, n) {
          return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
              var r = R.call(e, n);
              if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (i) {}
          return t(n, q, null, [e]).length > 0
      }, t.contains = function(e, t) {
          return (e.ownerDocument || e) !== q && L(e), M(e, t)
      }, t.attr = function(e, t) {
          (e.ownerDocument || e) !== q && L(e);
          var n = T.attrHandle[t.toLowerCase()],
              r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
          return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
          var t, n = [],
              r = 0,
              i = 0;
          if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
              for (; t = e[i++];) t === e[i] && (r = n.push(i));
              for (; r--;) e.splice(n[r], 1)
          }
          return j = null, e
      }, C = t.getText = function(e) {
          var t, n = "",
              r = 0,
              i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
              } else if (3 === i || 4 === i) return e.nodeValue
          } else
              for (; t = e[r++];) n += C(t);
          return n
      }, T = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: he,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(we, Te).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  } : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = _[e + " "];
                  return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, n, r) {
                  return function(i) {
                      var o = t.attr(i, e);
                      return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  } : function(t, n, u) {
                      var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !u && !a;
                      if (m) {
                          if (o) {
                              for (; g;) {
                                  for (f = t; f = f[g];)
                                      if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                  h = g = "only" === e && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [s ? m.firstChild : m.lastChild], s && y) {
                              for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                  if (1 === f.nodeType && ++p && f === t) {
                                      c[e] = [I, d, p];
                                      break
                                  }
                          } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I) p = l[1];
                          else
                              for (;
                                  (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
                          return p -= i, p === r || p % r === 0 && p / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                      for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                  }) : function(e) {
                      return o(e, 0, i)
                  }) : o
              }
          },
          pseudos: {
              not: r(function(e) {
                  var t = [],
                      n = [],
                      i = E(e.replace(ue, "$1"));
                  return i[W] ? r(function(e, t, n, r) {
                      for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                  }) : function(e, r, o) {
                      return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                  }
              }),
              has: r(function(e) {
                  return function(n) {
                      return t(e, n).length > 0
                  }
              }),
              contains: r(function(e) {
                  return e = e.replace(we, Te),
                      function(t) {
                          return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                      }
              }),
              lang: r(function(e) {
                  return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                      function(t) {
                          var n;
                          do
                              if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1
                      }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === H
              },
              focus: function(e) {
                  return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: function(e) {
                  return e.disabled === !1
              },
              disabled: function(e) {
                  return e.disabled === !0
              },
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                  return !0
              },
              parent: function(e) {
                  return !T.pseudos.empty(e)
              },
              header: function(e) {
                  return me.test(e.nodeName)
              },
              input: function(e) {
                  return ge.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: l(function() {
                  return [0]
              }),
              last: l(function(e, t) {
                  return [t - 1]
              }),
              eq: l(function(e, t, n) {
                  return [0 > n ? n + t : n]
              }),
              even: l(function(e, t) {
                  for (var n = 0; t > n; n += 2) e.push(n);
                  return e
              }),
              odd: l(function(e, t) {
                  for (var n = 1; t > n; n += 2) e.push(n);
                  return e
              }),
              lt: l(function(e, t, n) {
                  for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                  return e
              }),
              gt: l(function(e, t, n) {
                  for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                  return e
              })
          }
      }, T.pseudos.nth = T.pseudos.eq;
      for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) T.pseudos[b] = a(b);
      for (b in {
              submit: !0,
              reset: !0
          }) T.pseudos[b] = u(b);
      return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
          var r, i, o, s, a, u, l, c = z[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (a = e, u = [], l = T.preFilter; a;) {
              (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                  value: r,
                  type: i[0].replace(ue, " ")
              }), a = a.slice(r.length));
              for (s in T.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                  value: r,
                  type: s,
                  matches: i
              }), a = a.slice(r.length));
              if (!r) break
          }
          return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
      }, E = t.compile = function(e, t) {
          var n, r = [],
              i = [],
              o = X[e + " "];
          if (!o) {
              for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
              o = X(e, x(i, r)), o.selector = e
          }
          return o
      }, S = t.select = function(e, t, n, r) {
          var i, o, s, a, u, l = "function" == typeof e && e,
              f = !r && k(e = l.selector || e);
          if (n = n || [], 1 === f.length) {
              if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                  if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                  l && (t = t.parentNode), e = e.slice(o.shift().value.length)
              }
              for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                  if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                      if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r), n;
                      break
                  }
          }
          return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
      }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(q.createElement("div"))
      }), i(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, n) {
          return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), w.attributes && i(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), i(function(e) {
          return null == e.getAttribute("disabled")
      }) || o(te, function(e, t, n) {
          var r;
          return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), t
  }(e);
  Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
  var oe = Z.expr.match.needsContext,
      se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ae = /^.[^:#\[\.,]*$/;
  Z.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, Z.fn.extend({
      find: function(e) {
          var t, n = this.length,
              r = [],
              i = this;
          if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
              for (t = 0; n > t; t++)
                  if (Z.contains(i[t], this)) return !0
          }));
          for (t = 0; n > t; t++) Z.find(e, i[t], r);
          return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
      },
      filter: function(e) {
          return this.pushStack(r(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(r(this, e || [], !0))
      },
      is: function(e) {
          return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
      }
  });
  var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ce = Z.fn.init = function(e, t) {
          var n, r;
          if (!e) return this;
          if ("string" == typeof e) {
              if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
              if (n[1]) {
                  if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
                      for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                  return this
              }
              return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
          }
          return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
      };
  ce.prototype = Z.fn, ue = Z(J);
  var fe = /^(?:parents|prev(?:Until|All))/,
      pe = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  Z.extend({
      dir: function(e, t, n) {
          for (var r = [], i = void 0 !== n;
              (e = e[t]) && 9 !== e.nodeType;)
              if (1 === e.nodeType) {
                  if (i && Z(e).is(n)) break;
                  r.push(e)
              } return r
      },
      sibling: function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      }
  }), Z.fn.extend({
      has: function(e) {
          var t = Z(e, this),
              n = t.length;
          return this.filter(function() {
              for (var e = 0; n > e; e++)
                  if (Z.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                      o.push(n);
                      break
                  } return this.pushStack(o.length > 1 ? Z.unique(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), Z.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return Z.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return Z.dir(e, "parentNode", n)
      },
      next: function(e) {
          return i(e, "nextSibling")
      },
      prev: function(e) {
          return i(e, "previousSibling")
      },
      nextAll: function(e) {
          return Z.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return Z.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return Z.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return Z.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
          return Z.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return Z.sibling(e.firstChild)
      },
      contents: function(e) {
          return e.contentDocument || Z.merge([], e.childNodes)
      }
  }, function(e, t) {
      Z.fn[e] = function(n, r) {
          var i = Z.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
      }
  });
  var de = /\S+/g,
      he = {};
  Z.Callbacks = function(e) {
      e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
      var t, n, r, i, s, a, u = [],
          l = !e.once && [],
          c = function(o) {
              for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
                  if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                      t = !1;
                      break
                  } r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
          },
          f = {
              add: function() {
                  if (u) {
                      var n = u.length;
                      ! function o(t) {
                          Z.each(t, function(t, n) {
                              var r = Z.type(n);
                              "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                          })
                      }(arguments), r ? s = u.length : t && (i = n, c(t))
                  }
                  return this
              },
              remove: function() {
                  return u && Z.each(arguments, function(e, t) {
                      for (var n;
                          (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                  }), this
              },
              has: function(e) {
                  return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
              },
              empty: function() {
                  return u = [], s = 0, this
              },
              disable: function() {
                  return u = l = t = void 0, this
              },
              disabled: function() {
                  return !u
              },
              lock: function() {
                  return l = void 0, t || f.disable(), this
              },
              locked: function() {
                  return !l
              },
              fireWith: function(e, t) {
                  return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
              },
              fire: function() {
                  return f.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!n
              }
          };
      return f
  }, Z.extend({
      Deferred: function(e) {
          var t = [
                  ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", Z.Callbacks("memory")]
              ],
              n = "pending",
              r = {
                  state: function() {
                      return n
                  },
                  always: function() {
                      return i.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var e = arguments;
                      return Z.Deferred(function(n) {
                          Z.each(t, function(t, o) {
                              var s = Z.isFunction(e[t]) && e[t];
                              i[o[1]](function() {
                                  var e = s && s.apply(this, arguments);
                                  e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                              })
                          }), e = null
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? Z.extend(e, r) : r
                  }
              },
              i = {};
          return r.pipe = r.then, Z.each(t, function(e, o) {
              var s = o[2],
                  a = o[3];
              r[o[1]] = s.add, a && s.add(function() {
                  n = a
              }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                  return i[o[0] + "With"](this === i ? r : this, arguments), this
              }, i[o[0] + "With"] = s.fireWith
          }), r.promise(i), e && e.call(i, i), i
      },
      when: function(e) {
          var t, n, r, i = 0,
              o = _.call(arguments),
              s = o.length,
              a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
              u = 1 === a ? e : Z.Deferred(),
              l = function(e, n, r) {
                  return function(i) {
                      n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                  }
              };
          if (s > 1)
              for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
          return a || u.resolveWith(r, o), u.promise()
      }
  });
  var ge;
  Z.fn.ready = function(e) {
      return Z.ready.promise().done(e), this
  }, Z.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? Z.readyWait++ : Z.ready(!0)
      },
      ready: function(e) {
          (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
      }
  }), Z.ready.promise = function(t) {
      return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
  }, Z.ready.promise();
  var me = Z.access = function(e, t, n, r, i, o, s) {
      var a = 0,
          u = e.length,
          l = null == n;
      if ("object" === Z.type(n)) {
          i = !0;
          for (a in n) Z.access(e, t, a, n[a], !0, o, s)
      } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
              return l.call(Z(e), n)
          })), t))
          for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  Z.acceptData = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
      key: function(e) {
          if (!a.accepts(e)) return 0;
          var t = {},
              n = e[this.expando];
          if (!n) {
              n = a.uid++;
              try {
                  t[this.expando] = {
                      value: n
                  }, Object.defineProperties(e, t)
              } catch (r) {
                  t[this.expando] = n, Z.extend(e, t)
              }
          }
          return this.cache[n] || (this.cache[n] = {}), n
      },
      set: function(e, t, n) {
          var r, i = this.key(e),
              o = this.cache[i];
          if ("string" == typeof t) o[t] = n;
          else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
          else
              for (r in t) o[r] = t[r];
          return o
      },
      get: function(e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t]
      },
      access: function(e, t, n) {
          var r;
          return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r, i, o = this.key(e),
              s = this.cache[o];
          if (void 0 === t) this.cache[o] = {};
          else {
              Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
              for (; n--;) delete s[r[n]]
          }
      },
      hasData: function(e) {
          return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
      },
      discard: function(e) {
          e[this.expando] && delete this.cache[e[this.expando]]
      }
  };
  var ve = new a,
      ye = new a,
      xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      be = /([A-Z])/g;
  Z.extend({
      hasData: function(e) {
          return ye.hasData(e) || ve.hasData(e)
      },
      data: function(e, t, n) {
          return ye.access(e, t, n)
      },
      removeData: function(e, t) {
          ye.remove(e, t)
      },
      _data: function(e, t, n) {
          return ve.access(e, t, n)
      },
      _removeData: function(e, t) {
          ve.remove(e, t)
      }
  }), Z.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0],
              s = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                  for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                  ve.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              ye.set(this, e)
          }) : me(this, function(t) {
              var n, r = Z.camelCase(e);
              if (o && void 0 === t) {
                  if (n = ye.get(o, e), void 0 !== n) return n;
                  if (n = ye.get(o, r), void 0 !== n) return n;
                  if (n = u(o, r, void 0), void 0 !== n) return n
              } else this.each(function() {
                  var n = ye.get(this, r);
                  ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
              })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              ye.remove(this, e)
          })
      }
  }), Z.extend({
      queue: function(e, t, n) {
          var r;
          return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = Z.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = Z._queueHooks(e, t),
              s = function() {
                  Z.dequeue(e, t)
              };
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return ve.get(e, n) || ve.access(e, n, {
              empty: Z.Callbacks("once memory").add(function() {
                  ve.remove(e, [t + "queue", n])
              })
          })
      }
  }), Z.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = Z.queue(this, e, t);
              Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              Z.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1,
              i = Z.Deferred(),
              o = this,
              s = this.length,
              a = function() {
                  --r || i.resolveWith(o, [o])
              };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
          return a(), i.promise(t)
      }
  });
  var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Te = ["Top", "Right", "Bottom", "Left"],
      Ce = function(e, t) {
          return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
      },
      Ne = /^(?:checkbox|radio)$/i;
  ! function() {
      var e = J.createDocumentFragment(),
          t = e.appendChild(J.createElement("div")),
          n = J.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var ke = "undefined";
  Q.focusinBubbles = "onfocusin" in e;
  var Ee = /^key/,
      Se = /^(?:mouse|pointer|contextmenu)|click/,
      De = /^(?:focusinfocus|focusoutblur)$/,
      je = /^([^.]*)(?:\.(.+)|)$/;
  Z.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
          if (m) 
              for (n.handler && (o = n, n = o.handler, i = o.selector),
            		  n.guid || (n.guid = Z.guid++), 
            		  (u = m.events) || (u = m.events = {}), 
            		  (s = m.handle) || (s = m.handle = function(t) {
            			  return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            		  }), 
            		  t = (t || "").match(de) || [""], 
            		  l = t.length; l--;)
            	  
            	  a = je.exec(t[l]) || [], d = g = a[1]; 
            	  h = (a[2] || "").split(".").sort(), 
            	  d && (f = Z.event.special[d] || {}, 	  
            	  d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, 
            	  c = Z.extend({
	                  type: d,
	                  origType: g,
	                  data: r,
	                  handler: n,
	                  guid: n.guid,
	                  selector: i,
	                  needsContext: i && Z.expr.match.needsContext.test(i),
	                  namespace: h.join(".")
            	  	  }, o),
            	  (p = u[d]) || (p = u[d] = [], 
            			  p.delegateCount = 0, 
            			  f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), 
            			  f.add && (f.add.call(e, c), 
            			  c.handler.guid || (c.handler.guid = n.guid)), 
            			  i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
            			  Z.event.global[d] = !0)
      },
      remove: function(e, t, n, r, i) {
          var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
          if (m && (u = m.events)) {
              for (t = (t || "").match(de) || [""], l = t.length; l--;)
                  if (a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                      for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                      s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                  } else
                      for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
              Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
          }
      },
      trigger: function(t, n, r, i) {
          var o, s, a, u, l, c, f, p = [r || J],
              d = G.call(t, "type") ? t.type : t,
              h = G.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
              if (!i && !f.noBubble && !Z.isWindow(r)) {
                  for (u = f.delegateType || d, De.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                  a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
              }
              for (o = 0;
                  (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
              return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
          }
      },
      dispatch: function(e) {
          e = Z.event.fix(e);
          var t, n, r, i, o, s = [],
              a = _.call(arguments),
              u = (ve.get(this, "events") || {})[e.type] || [],
              l = Z.event.special[e.type] || {};
          if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
              for (s = Z.event.handlers.call(this, e, u), t = 0;
                  (i = s[t++]) && !e.isPropagationStopped();)
                  for (e.currentTarget = i.elem, n = 0;
                      (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, e), e.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, s = [],
              a = t.delegateCount,
              u = e.target;
          if (a && u.nodeType && (!e.button || "click" !== e.type))
              for (; u !== this; u = u.parentNode || this)
                  if (u.disabled !== !0 || "click" !== e.type) {
                      for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                      r.length && s.push({
                          elem: u,
                          handlers: r
                      })
                  } return a < t.length && s.push({
              elem: this,
              handlers: t.slice(a)
          }), s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var n, r, i, o = t.button;
              return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
          }
      },
      fix: function(e) {
          if (e[Z.expando]) return e;
          var t, n, r, i = e.type,
              o = e,
              s = this.fixHooks[i];
          for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
          return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  return this !== f() && this.focus ? (this.focus(), !1) : void 0
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  return this === f() && this.blur ? (this.blur(), !1) : void 0
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
              },
              _default: function(e) {
                  return Z.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, n, r) {
          var i = Z.extend(new Z.Event, n, {
              type: e,
              isSimulated: !0,
              originalEvent: {}
          });
          r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
      }
  }, Z.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
  }, Z.Event = function(e, t) {
      return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
  }, Z.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, Z.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      Z.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
              return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
          }
      }
  }), Q.focusinBubbles || Z.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          Z.event.simulate(t, e.target, Z.event.fix(e), !0)
      };
      Z.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this,
                  i = ve.access(r, t);
              i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this,
                  i = ve.access(r, t) - 1;
              i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
          }
      }
  }), Z.fn.extend({
      on: function(e, t, n, r, i) {
          var o, s;
          if ("object" == typeof e) {
              "string" != typeof t && (n = n || t, t = void 0);
              for (s in e) this.on(s, t, n, e[s], i);
              return this
          }
          if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
          else if (!r) return this;
          return 1 === i && (o = r, r = function(e) {
              return Z().off(e), o.apply(this, arguments)
          }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
              Z.event.add(this, e, r, n, t)
          })
      },
      one: function(e, t, n, r) {
          return this.on(e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this
          }
          return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
              Z.event.remove(this, e, n, t)
          })
      },
      trigger: function(e, t) {
          return this.each(function() {
              Z.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          return n ? Z.event.trigger(e, t, n, !0) : void 0
      }
  });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Le = /<([\w:]+)/,
      qe = /<|&#?\w+;/,
      He = /<(?:script|style|link)/i,
      Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Fe = /^$|\/(?:java|ecma)script/i,
      Pe = /^true\/(.*)/,
      Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Me = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };
  Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
      clone: function(e, t, n) {
          var r, i, o, s, a = e.cloneNode(!0),
              u = Z.contains(e.ownerDocument, e);
          if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
              for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
          if (t)
              if (n)
                  for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
              else m(e, a);
          return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
      },
      buildFragment: function(e, t, n, r) {
          for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
              if (i = e[p], i || 0 === i)
                  if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                  else if (qe.test(i)) {
              for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Me[s] || Me._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
              Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
          } else f.push(t.createTextNode(i));
          for (c.textContent = "", p = 0; i = f[p++];)
              if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                  for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
          return c
      },
      cleanData: function(e) {
          for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
              if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                  if (t.events)
                      for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                  ve.cache[i] && delete ve.cache[i]
              }
              delete ye.cache[n[ye.expando]]
          }
      }
  }), Z.fn.extend({
      text: function(e) {
          return me(this, function(e) {
              return void 0 === e ? Z.text(this) : this.empty().each(function() {
                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = p(this, e);
                  t.appendChild(e)
              }
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = p(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
          return this
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return Z.clone(this, e, t)
          })
      },
      html: function(e) {
          return me(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = e.replace(Ae, "<$1></$2>");
                  try {
                      for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (i) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = arguments[0];
          return this.domManip(arguments, function(t) {
              e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
          }), e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(e, t) {
          e = z.apply([], e);
          var n, r, i, o, s, a, u = 0,
              l = this.length,
              c = this,
              f = l - 1,
              p = e[0],
              g = Z.isFunction(p);
          if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
              var r = c.eq(n);
              g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
          });
          if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
              for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
              if (o)
                  for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")))
          }
          return this
      }
  }), Z.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      Z.fn[e] = function(e) {
          for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var We, $e = {},
      Ie = /^margin/,
      Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
      _e = function(t) {
          return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
      };
  ! function() {
      function t() {
          s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
          var t = e.getComputedStyle(s, null);
          n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
      }
      var n, r, i = J.documentElement,
          o = J.createElement("div"),
          s = J.createElement("div");
      s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
          pixelPosition: function() {
              return t(), n
          },
          boxSizingReliable: function() {
              return null == r && t(), r
          },
          reliableMarginRight: function() {
              var t, n = s.appendChild(J.createElement("div"));
              return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
          }
      }))
  }(), Z.swap = function(e, t, n, r) {
      var i, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = s[o];
      return i
  };
  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = new RegExp("^(" + we + ")(.*)$", "i"),
      Ue = new RegExp("^([+-])=(" + we + ")", "i"),
      Ve = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ye = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Ge = ["Webkit", "O", "Moz", "ms"];
  Z.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = w(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": "cssFloat"
      },
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, s, a = Z.camelCase(t),
                  u = e.style;
              return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
          }
      },
      css: function(e, t, n, r) {
          var i, o, s, a = Z.camelCase(t);
          return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
      }
  }), Z.each(["height", "width"], function(e, t) {
      Z.cssHooks[t] = {
          get: function(e, n, r) {
              return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                  return E(e, t, r)
              }) : E(e, t, r) : void 0
          },
          set: function(e, n, r) {
              var i = r && _e(e);
              return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
          }
      }
  }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
      return t ? Z.swap(e, {
          display: "inline-block"
      }, w, [e, "marginRight"]) : void 0
  }), Z.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      Z.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      }, Ie.test(e) || (Z.cssHooks[e + t].set = N)
  }), Z.fn.extend({
      css: function(e, t) {
          return me(this, function(e, t, n) {
              var r, i, o = {},
                  s = 0;
              if (Z.isArray(t)) {
                  for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                  return o
              }
              return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
          }, e, t, arguments.length > 1)
      },
      show: function() {
          return S(this, !0)
      },
      hide: function() {
          return S(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              Ce(this) ? Z(this).show() : Z(this).hide()
          })
      }
  }), Z.Tween = D, D.prototype = {
      constructor: D,
      init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = D.propHooks[this.prop];
          return e && e.get ? e.get(this) : D.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = D.propHooks[this.prop];
          return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
      }
  }, D.prototype.init.prototype = D.prototype, D.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
          },
          set: function(e) {
              Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, Z.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  }, Z.fx = D.prototype.init, Z.fx.step = {};
  var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
      Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
      et = /queueHooks$/,
      tt = [q],
      nt = {
          "*": [function(e, t) {
              var n = this.createTween(e, t),
                  r = n.cur(),
                  i = Ze.exec(t),
                  o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                  s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                  a = 1,
                  u = 20;
              if (s && s[3] !== o) {
                  o = o || s[3], i = i || [], s = +r || 1;
                  do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
              }
              return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
          }]
      };
  Z.Animation = Z.extend(O, {
          tweener: function(e, t) {
              Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
              for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
          },
          prefilter: function(e, t) {
              t ? tt.unshift(e) : tt.push(e)
          }
      }), Z.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? Z.extend({}, e) : {
              complete: n || !n && t || Z.isFunction(e) && e,
              duration: e,
              easing: n && t || t && !Z.isFunction(t) && t
          };
          return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
              Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
          }, r
      }, Z.fn.extend({
          fadeTo: function(e, t, n, r) {
              return this.filter(Ce).css("opacity", 0).show().end().animate({
                  opacity: t
              }, e, n, r)
          },
          animate: function(e, t, n, r) {
              var i = Z.isEmptyObject(e),
                  o = Z.speed(t, n, r),
                  s = function() {
                      var t = O(this, Z.extend({}, e), o);
                      (i || ve.get(this, "finish")) && t.stop(!0)
                  };
              return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
          },
          stop: function(e, t, n) {
              var r = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n)
              };
              return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                  var t = !0,
                      i = null != e && e + "queueHooks",
                      o = Z.timers,
                      s = ve.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else
                      for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                  for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                  (t || !n) && Z.dequeue(this, e)
              })
          },
          finish: function(e) {
              return e !== !1 && (e = e || "fx"), this.each(function() {
                  var t, n = ve.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = Z.timers,
                      s = r ? r.length : 0;
                  for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0),
                      t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish
              })
          }
      }), Z.each(["toggle", "show", "hide"], function(e, t) {
          var n = Z.fn[t];
          Z.fn[t] = function(e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
          }
      }), Z.each({
          slideDown: A("show"),
          slideUp: A("hide"),
          slideToggle: A("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(e, t) {
          Z.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r)
          }
      }), Z.timers = [], Z.fx.tick = function() {
          var e, t = 0,
              n = Z.timers;
          for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
          n.length || Z.fx.stop(), Qe = void 0
      }, Z.fx.timer = function(e) {
          Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
      }, Z.fx.interval = 13, Z.fx.start = function() {
          Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
      }, Z.fx.stop = function() {
          clearInterval(Je), Je = null
      }, Z.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, Z.fn.delay = function(e, t) {
          return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
              var r = setTimeout(t, e);
              n.stop = function() {
                  clearTimeout(r)
              }
          })
      },
      function() {
          var e = J.createElement("input"),
              t = J.createElement("select"),
              n = t.appendChild(J.createElement("option"));
          e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
      }();
  var rt, it, ot = Z.expr.attrHandle;
  Z.fn.extend({
      attr: function(e, t) {
          return me(this, Z.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              Z.removeAttr(this, e)
          })
      }
  }), Z.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
      },
      removeAttr: function(e, t) {
          var n, r, i = 0,
              o = t && t.match(de);
          if (o && 1 === e.nodeType)
              for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      }
  }), it = {
      set: function(e, t, n) {
          return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ot[t] || Z.find.attr;
      ot[t] = function(e, t, r) {
          var i, o;
          return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
      }
  });
  var st = /^(?:input|select|textarea|button)$/i;
  Z.fn.extend({
      prop: function(e, t) {
          return me(this, Z.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[Z.propFix[e] || e]
          })
      }
  }), Z.extend({
      propFix: {
          "for": "htmlFor",
          "class": "className"
      },
      prop: function(e, t, n) {
          var r, i, o, s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
              }
          }
      }
  }), Q.optSelected || (Z.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      }
  }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      Z.propFix[this.toLowerCase()] = this
  });
  var at = /[\t\r\n\f]/g;
  Z.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, s, a = "string" == typeof e && e,
              u = 0,
              l = this.length;
          if (Z.isFunction(e)) return this.each(function(t) {
              Z(this).addClass(e.call(this, t, this.className))
          });
          if (a)
              for (t = (e || "").match(de) || []; l > u; u++)
                  if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                      for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      s = Z.trim(r), n.className !== s && (n.className = s)
                  } return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
              u = 0,
              l = this.length;
          if (Z.isFunction(e)) return this.each(function(t) {
              Z(this).removeClass(e.call(this, t, this.className))
          });
          if (a)
              for (t = (e || "").match(de) || []; l > u; u++)
                  if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                      for (o = 0; i = t[o++];)
                          for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                      s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                  } return this
      },
      toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
              Z(this).toggleClass(e.call(this, n, this.className, t), t)
          } : function() {
              if ("string" === n)
                  for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
          })
      },
      hasClass: function(e) {
          for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
              if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
          return !1
      }
  });
  var ut = /\r/g;
  Z.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0];
          return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
              var i;
              1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                  return null == e ? "" : e + ""
              })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
          })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
      }
  }), Z.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = Z.find.attr(e, "value");
                  return null != t ? t : Z.trim(Z.text(e))
              }
          },
          select: {
              get: function(e) {
                  for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                      if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                          if (t = Z(n).val(), o) return t;
                          s.push(t)
                      } return s
              },
              set: function(e, t) {
                  for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), Z.each(["radio", "checkbox"], function() {
      Z.valHooks[this] = {
          set: function(e, t) {
              return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
          }
      }, Q.checkOn || (Z.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      Z.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }), Z.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  });
  var lt = Z.now(),
      ct = /\?/;
  Z.parseJSON = function(e) {
      return JSON.parse(e + "")
  }, Z.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
          n = new DOMParser, t = n.parseFromString(e, "text/xml")
      } catch (r) {
          t = void 0
      }
      return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
  };
  var ft = /#.*$/,
      pt = /([?&])_=[^&]*/,
      dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      gt = /^(?:GET|HEAD)$/,
      mt = /^\/\//,
      vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      yt = {},
      xt = {},
      bt = "*/".concat("*"),
      wt = e.location.href,
      Tt = vt.exec(wt.toLowerCase()) || [];
  Z.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: wt,
          type: "GET",
          isLocal: ht.test(Tt[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": bt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": Z.parseJSON,
              "text xml": Z.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
      },
      ajaxPrefilter: F(yt),
      ajaxTransport: F(xt),
      ajax: function(e, t) {
          function n(e, t, n, s) {
              var u, c, v, y, b, T = t;
              2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
              p = f.context || f,
              d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
              h = Z.Deferred(),
              g = Z.Callbacks("once memory"),
              m = f.statusCode || {},
              v = {},
              y = {},
              x = 0,
              b = "canceled",
              w = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (2 === x) {
                          if (!s)
                              for (s = {}; t = dt.exec(o);) s[t[1].toLowerCase()] = t[2];
                          t = s[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return 2 === x ? o : null
                  },
                  setRequestHeader: function(e, t) {
                      var n = e.toLowerCase();
                      return x || (e = y[n] = y[n] || e, v[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return x || (f.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (2 > x)
                              for (t in e) m[t] = [m[t], e[t]];
                          else w.always(e[w.status]);
                      return this
                  },
                  abort: function(e) {
                      var t = e || b;
                      return r && r.abort(t), n(0, t), this
                  }
              };
          if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(yt, f, t, w), 2 === x) return w;
          l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
          for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
          if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
          b = "abort";
          for (c in {
                  success: 1,
                  error: 1,
                  complete: 1
              }) w[c](f[c]);
          if (r = P(xt, f, t, w)) {
              w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                  w.abort("timeout")
              }, f.timeout));
              try {
                  x = 1, r.send(v, n)
              } catch (T) {
                  if (!(2 > x)) throw T;
                  n(-1, T)
              }
          } else n(-1, "No Transport");
          return w
      },
      getJSON: function(e, t, n) {
          return Z.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return Z.get(e, void 0, t, "script")
      }
  }), Z.each(["get", "post"], function(e, t) {
      Z[t] = function(e, n, r, i) {
          return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          })
      }
  }), Z._evalUrl = function(e) {
      return Z.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
      })
  }, Z.fn.extend({
      wrapAll: function(e) {
          var t;
          return Z.isFunction(e) ? this.each(function(t) {
              Z(this).wrapAll(e.call(this, t))
          }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
          }).append(this)), this)
      },
      wrapInner: function(e) {
          return this.each(Z.isFunction(e) ? function(t) {
              Z(this).wrapInner(e.call(this, t))
          } : function() {
              var t = Z(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = Z.isFunction(e);
          return this.each(function(n) {
              Z(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
          }).end()
      }
  }), Z.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, Z.expr.filters.visible = function(e) {
      return !Z.expr.filters.hidden(e)
  };
  var Ct = /%20/g,
      Nt = /\[\]$/,
      kt = /\r?\n/g,
      Et = /^(?:submit|button|image|reset|file)$/i,
      St = /^(?:input|select|textarea|keygen)/i;
  Z.param = function(e, t) {
      var n, r = [],
          i = function(e, t) {
              t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
          };
      if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
          i(this.name, this.value)
      });
      else
          for (n in e) $(n, e[n], t, i);
      return r.join("&").replace(Ct, "+")
  }, Z.fn.extend({
      serialize: function() {
          return Z.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = Z.prop(this, "elements");
              return e ? Z.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
          }).map(function(e, t) {
              var n = Z(this).val();
              return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(kt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(kt, "\r\n")
              }
          }).get()
      }
  }), Z.ajaxSettings.xhr = function() {
      try {
          return new XMLHttpRequest
      } catch (e) {}
  };
  var Dt = 0,
      jt = {},
      At = {
          0: 200,
          1223: 204
      },
      Lt = Z.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
      for (var e in jt) jt[e]()
  }), Q.cors = !!Lt && "withCredentials" in Lt, Q.ajax = Lt = !!Lt, Z.ajaxTransport(function(e) {
      var t;
      return Q.cors || Lt && !e.crossDomain ? {
          send: function(n, r) {
              var i, o = e.xhr(),
                  s = ++Dt;
              if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                  for (i in e.xhrFields) o[i] = e.xhrFields[i];
              e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
              for (i in n) o.setRequestHeader(i, n[i]);
              t = function(e) {
                  return function() {
                      t && (delete jt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                          text: o.responseText
                      } : void 0, o.getAllResponseHeaders()))
                  }
              }, o.onload = t(), o.onerror = t("error"), t = jt[s] = t("abort");
              try {
                  o.send(e.hasContent && e.data || null)
              } catch (a) {
                  if (t) throw a
              }
          },
          abort: function() {
              t && t()
          }
      } : void 0
  }), Z.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return Z.globalEval(e), e
          }
      }
  }), Z.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), Z.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(r, i) {
                  t = Z("<script>").prop({
                      async: !0,
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                  }), J.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var qt = [],
      Ht = /(=)\?(?=&|$)|\?\?/;
  Z.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = qt.pop() || Z.expando + "_" + lt++;
          return this[e] = !0, e
      }
  }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
      return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
          return s || Z.error(i + " was not called"), s[0]
      }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
          s = arguments
      }, r.always(function() {
          e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
      }), "script") : void 0
  }), Z.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || J;
      var r = se.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
  };
  var Ot = Z.fn.load;
  Z.fn.load = function(e, t, n) {
      if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
      var r, i, o, s = this,
          a = e.indexOf(" ");
      return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
          url: e,
          type: i,
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
      }).complete(n && function(e, t) {
          s.each(n, o || [e.responseText, t, e])
      }), this
  }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      Z.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), Z.expr.filters.animated = function(e) {
      return Z.grep(Z.timers, function(t) {
          return e === t.elem
      }).length
  };
  var Ft = e.document.documentElement;
  Z.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, s, a, u, l, c = Z.css(e, "position"),
              f = Z(e),
              p = {};
          "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
      }
  }, Z.fn.extend({
      offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
              Z.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0],
              i = {
                  top: 0,
                  left: 0
              },
              o = r && r.ownerDocument;
          return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = I(o), {
              top: i.top + n.pageYOffset - t.clientTop,
              left: i.left + n.pageXOffset - t.clientLeft
          }) : i) : void 0
      },
      position: function() {
          if (this[0]) {
              var e, t, n = this[0],
                  r = {
                      top: 0,
                      left: 0
                  };
              return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                  top: t.top - r.top - Z.css(n, "marginTop", !0),
                  left: t.left - r.left - Z.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
              return e || Ft
          })
      }
  }), Z.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, n) {
      var r = "pageYOffset" === n;
      Z.fn[t] = function(i) {
          return me(this, function(t, i, o) {
              var s = I(t);
              return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
          }, t, i, arguments.length, null)
      }
  }), Z.each(["top", "left"], function(e, t) {
      Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
          return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
      })
  }), Z.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      Z.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          Z.fn[r] = function(r, i) {
              var o = arguments.length && (n || "boolean" != typeof r),
                  s = n || (r === !0 || i === !0 ? "margin" : "border");
              return me(this, function(t, n, r) {
                  var i;
                  return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
              }, t, o ? r : void 0, o, null)
          }
      })
  }), Z.fn.size = function() {
      return this.length
  }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return Z
  });
  var Pt = e.jQuery,
      Rt = e.$;
  return Z.noConflict = function(t) {
      return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Pt), Z
  }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});

$.popup = function (p, o, e, t) {
    $("#popup>.guide").load( p, o, function () {
        $("body").addClass("popup_state"),
        $("#popup").css("display", "table").css("opacity", 1), 
        $("#popup>.shadow, #popup *[data-close]").one("click", function () {
            $.popup.interval && (clearTimeout($.popup.interval), 
            $("#popup .accept").click(), $.popup.interval = null), 
            $("#popup").stop().hide(), $("body").removeClass("popup_state");
        });
        e && $("#popup .accept").one("click", e), t && $("#popup .deny").one("click", t), $("#popup").trigger("loaded");
    });
}, $.popup.interval = null, $.extend({
    parseQuery: function (p) {
        return (p || document.location.search).replace(/(^\?)/, "").split("&").map(function (p) {
            return p = p.split("="), this[p[0]] = p[1], this;
        }.bind({}))[0];
    }
});

! function(t, e) {
  function i(e, i) {
      var n, o, a, r = e.nodeName.toLowerCase();
      return "area" === r ? (n = e.parentNode, o = n.name, !(!e.href || !o || "map" !== n.nodeName.toLowerCase()) && (a = t("img[usemap=#" + o + "]")[0], !!a && s(a))) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && s(e)
  }

  function s(e) {
      return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
          return "hidden" === t.css(this, "visibility")
      }).length
  }
  var n = 0,
      o = /^ui-id-\d+$/;
  t.ui = t.ui || {}, t.extend(t.ui, {
      version: "1.10.4",
      keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38
      }
  }), t.fn.extend({
      focus: function(e) {
          return function(i, s) {
              return "number" == typeof i ? this.each(function() {
                  var e = this;
                  setTimeout(function() {
                      t(e).focus(), s && s.call(e)
                  }, i)
              }) : e.apply(this, arguments)
          }
      }(t.fn.focus),
      scrollParent: function() {
          var e;
          return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
              return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
          }).eq(0) : this.parents().filter(function() {
              return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
          }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
      },
      zIndex: function(i) {
          if (i !== e) return this.css("zIndex", i);
          if (this.length)
              for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                  if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                  o = o.parent()
              }
          return 0
      },
      uniqueId: function() {
          return this.each(function() {
              this.id || (this.id = "ui-id-" + ++n)
          })
      },
      removeUniqueId: function() {
          return this.each(function() {
              o.test(this.id) && t(this).removeAttr("id")
          })
      }
  }), t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
          return function(i) {
              return !!t.data(i, e)
          }
      }) : function(e, i, s) {
          return !!t.data(e, s[3])
      },
      focusable: function(e) {
          return i(e, !isNaN(t.attr(e, "tabindex")))
      },
      tabbable: function(e) {
          var s = t.attr(e, "tabindex"),
              n = isNaN(s);
          return (n || s >= 0) && i(e, !n)
      }
  }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
      function n(e, i, s, n) {
          return t.each(o, function() {
              i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
          }), i
      }
      var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
          a = s.toLowerCase(),
          r = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight
          };
      t.fn["inner" + s] = function(i) {
          return i === e ? r["inner" + s].call(this) : this.each(function() {
              t(this).css(a, n(this, i) + "px")
          })
      }, t.fn["outer" + s] = function(e, i) {
          return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function() {
              t(this).css(a, n(this, e, !0, i) + "px")
          })
      }
  }), t.fn.addBack || (t.fn.addBack = function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
  }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
      return function(i) {
          return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
      }
  }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
      disableSelection: function() {
          return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
              t.preventDefault()
          })
      },
      enableSelection: function() {
          return this.unbind(".ui-disableSelection")
      }
  }), t.extend(t.ui, {
      plugin: {
          add: function(e, i, s) {
              var n, o = t.ui[e].prototype;
              for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
          },
          call: function(t, e, i) {
              var s, n = t.plugins[e];
              if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                  for (s = 0; n.length > s; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
          }
      },
      hasScroll: function(e, i) {
          if ("hidden" === t(e).css("overflow")) return !1;
          var s = i && "left" === i ? "scrollLeft" : "scrollTop",
              n = !1;
          return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
      }
  })
}(jQuery),
function(t, e) {
  var i = 0,
      s = Array.prototype.slice,
      n = t.cleanData;
  t.cleanData = function(e) {
      for (var i, s = 0; null != (i = e[s]); s++) try {
          t(i).triggerHandler("remove")
      } catch (o) {}
      n(e)
  }, t.widget = function(i, s, n) {
      var o, a, r, h, l = {},
          c = i.split(".")[0];
      i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
          return !!t.data(e, o)
      }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
          return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
      }, t.extend(r, a, {
          version: n.version,
          _proto: t.extend({}, n),
          _childConstructors: []
      }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
          return t.isFunction(n) ? (l[i] = function() {
              var t = function() {
                      return s.prototype[i].apply(this, arguments)
                  },
                  e = function(t) {
                      return s.prototype[i].apply(this, t)
                  };
              return function() {
                  var i, s = this._super,
                      o = this._superApply;
                  return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
              }
          }(), e) : (l[i] = n, e)
      }), r.prototype = t.widget.extend(h, {
          widgetEventPrefix: a ? h.widgetEventPrefix || i : i
      }, l, {
          constructor: r,
          namespace: c,
          widgetName: i,
          widgetFullName: o
      }), a ? (t.each(a._childConstructors, function(e, i) {
          var s = i.prototype;
          t.widget(s.namespace + "." + s.widgetName, r, i._proto)
      }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
  }, t.widget.extend = function(i) {
      for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
          for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
      return i
  }, t.widget.bridge = function(i, n) {
      var o = n.prototype.widgetFullName || i;
      t.fn[i] = function(a) {
          var r = "string" == typeof a,
              h = s.call(arguments, 1),
              l = this;
          return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
              var s, n = t.data(this, o);
              return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
          }) : this.each(function() {
              var e = t.data(this, o);
              e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
          }), l
      }
  }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
          disabled: !1,
          create: null
      },
      _createWidget: function(e, s) {
          s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
              remove: function(t) {
                  t.target === s && this.destroy()
              }
          }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: t.noop,
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
          this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
      },
      _destroy: t.noop,
      widget: function() {
          return this.element
      },
      option: function(i, s) {
          var n, o, a, r = i;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof i)
              if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                  for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                  if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                  o[i] = s
              } else {
                  if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                  r[i] = s
              } return this._setOptions(r), this
      },
      _setOptions: function(t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this
      },
      _setOption: function(t, e) {
          return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
      },
      enable: function() {
          return this._setOption("disabled", !1)
      },
      disable: function() {
          return this._setOption("disabled", !0)
      },
      _on: function(i, s, n) {
          var o, a = this;
          "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
              function h() {
                  return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
              }
              "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
              var l = n.match(/^(\w+)\s*(.*)$/),
                  c = l[1] + a.eventNamespace,
                  u = l[2];
              u ? o.delegate(u, c, h) : s.bind(c, h)
          })
      },
      _off: function(t, e) {
          e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
      },
      _delay: function(t, e) {
          function i() {
              return ("string" == typeof t ? s[t] : t).apply(s, arguments)
          }
          var s = this;
          return setTimeout(i, e || 0)
      },
      _hoverable: function(e) {
          this.hoverable = this.hoverable.add(e), this._on(e, {
              mouseenter: function(e) {
                  t(e.currentTarget).addClass("ui-state-hover")
              },
              mouseleave: function(e) {
                  t(e.currentTarget).removeClass("ui-state-hover")
              }
          })
      },
      _focusable: function(e) {
          this.focusable = this.focusable.add(e), this._on(e, {
              focusin: function(e) {
                  t(e.currentTarget).addClass("ui-state-focus")
              },
              focusout: function(e) {
                  t(e.currentTarget).removeClass("ui-state-focus")
              }
          })
      },
      _trigger: function(e, i, s) {
          var n, o, a = this.options[e];
          if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
              for (n in o) n in i || (i[n] = o[n]);
          return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
      }
  }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
  }, function(e, i) {
      t.Widget.prototype["_" + e] = function(s, n, o) {
          "string" == typeof n && (n = {
              effect: n
          });
          var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
          n = n || {}, "number" == typeof n && (n = {
              duration: n
          }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
              t(this)[e](), o && o.call(s[0]), i()
          })
      }
  })
}(jQuery),
function(t) {
  var e = !1;
  t(document).mouseup(function() {
      e = !1
  }), t.widget("ui.mouse", {
      version: "1.10.4",
      options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0
      },
      _mouseInit: function() {
          var e = this;
          this.element.bind("mousedown." + this.widgetName, function(t) {
              return e._mouseDown(t)
          }).bind("click." + this.widgetName, function(i) {
              return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
          }), this.started = !1
      },
      _mouseDestroy: function() {
          this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function(i) {
          if (!e) {
              this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
              var s = this,
                  n = 1 === i.which,
                  o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
              return !(n && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                  s.mouseDelayMet = !0
              }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                  return s._mouseMove(t)
              }, this._mouseUpDelegate = function(t) {
                  return s._mouseUp(t)
              }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0))
          }
      },
      _mouseMove: function(e) {
          return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
      },
      _mouseUp: function(e) {
          return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
      },
      _mouseDistanceMet: function(t) {
          return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function() {
          return this.mouseDelayMet
      },
      _mouseStart: function() {},
      _mouseDrag: function() {},
      _mouseStop: function() {},
      _mouseCapture: function() {
          return !0
      }
  })
}(jQuery),
function(t, e) {
  function i(t, e, i) {
      return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
  }

  function s(e, i) {
      return parseInt(t.css(e, i), 10) || 0
  }

  function n(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
          width: e.width(),
          height: e.height(),
          offset: {
              top: 0,
              left: 0
          }
      } : t.isWindow(i) ? {
          width: e.width(),
          height: e.height(),
          offset: {
              top: e.scrollTop(),
              left: e.scrollLeft()
          }
      } : i.preventDefault ? {
          width: 0,
          height: 0,
          offset: {
              top: i.pageY,
              left: i.pageX
          }
      } : {
          width: e.outerWidth(),
          height: e.outerHeight(),
          offset: e.offset()
      }
  }
  t.ui = t.ui || {};
  var o, a = Math.max,
      r = Math.abs,
      h = Math.round,
      l = /left|center|right/,
      c = /top|center|bottom/,
      u = /[\+\-]\d+(\.[\d]+)?%?/,
      d = /^\w+/,
      p = /%$/,
      f = t.fn.position;
  t.position = {
          scrollbarWidth: function() {
              if (o !== e) return o;
              var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                  a = n.children()[0];
              return t("body").append(n), i = a.offsetWidth, n.css("overflow", "scroll"), s = a.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), o = i - s
          },
          getScrollInfo: function(e) {
              var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                  s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                  n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                  o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
              return {
                  width: o ? t.position.scrollbarWidth() : 0,
                  height: n ? t.position.scrollbarWidth() : 0
              }
          },
          getWithinInfo: function(e) {
              var i = t(e || window),
                  s = t.isWindow(i[0]),
                  n = !!i[0] && 9 === i[0].nodeType;
              return {
                  element: i,
                  isWindow: s,
                  isDocument: n,
                  offset: i.offset() || {
                      left: 0,
                      top: 0
                  },
                  scrollLeft: i.scrollLeft(),
                  scrollTop: i.scrollTop(),
                  width: s ? i.width() : i.outerWidth(),
                  height: s ? i.height() : i.outerHeight()
              }
          }
      }, t.fn.position = function(e) {
          if (!e || !e.of) return f.apply(this, arguments);
          e = t.extend({}, e);
          var o, p, g, m, v, _, b = t(e.of),
              y = t.position.getWithinInfo(e.within),
              w = t.position.getScrollInfo(y),
              k = (e.collision || "flip").split(" "),
              x = {};
          return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
              var t, i, s = (e[this] || "").split(" ");
              1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
          }), 1 === k.length && (k[1] = k[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(x.at, p, g), v.left += o[0], v.top += o[1], this.each(function() {
              var n, l, c = t(this),
                  u = c.outerWidth(),
                  d = c.outerHeight(),
                  f = s(this, "marginLeft"),
                  _ = s(this, "marginTop"),
                  D = u + f + s(this, "marginRight") + w.width,
                  C = d + _ + s(this, "marginBottom") + w.height,
                  I = t.extend({}, v),
                  P = i(x.my, c.outerWidth(), c.outerHeight());
              "right" === e.my[0] ? I.left -= u : "center" === e.my[0] && (I.left -= u / 2), "bottom" === e.my[1] ? I.top -= d : "center" === e.my[1] && (I.top -= d / 2), I.left += P[0], I.top += P[1], t.support.offsetFractions || (I.left = h(I.left), I.top = h(I.top)), n = {
                  marginLeft: f,
                  marginTop: _
              }, t.each(["left", "top"], function(i, s) {
                  t.ui.position[k[i]] && t.ui.position[k[i]][s](I, {
                      targetWidth: p,
                      targetHeight: g,
                      elemWidth: u,
                      elemHeight: d,
                      collisionPosition: n,
                      collisionWidth: D,
                      collisionHeight: C,
                      offset: [o[0] + P[0], o[1] + P[1]],
                      my: e.my,
                      at: e.at,
                      within: y,
                      elem: c
                  })
              }), e.using && (l = function(t) {
                  var i = m.left - I.left,
                      s = i + p - u,
                      n = m.top - I.top,
                      o = n + g - d,
                      h = {
                          target: {
                              element: b,
                              left: m.left,
                              top: m.top,
                              width: p,
                              height: g
                          },
                          element: {
                              element: c,
                              left: I.left,
                              top: I.top,
                              width: u,
                              height: d
                          },
                          horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                          vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                      };
                  u > p && p > r(i + s) && (h.horizontal = "center"), d > g && g > r(n + o) && (h.vertical = "middle"), h.important = a(r(i), r(s)) > a(r(n), r(o)) ? "horizontal" : "vertical", e.using.call(this, t, h)
              }), c.offset(t.extend(I, {
                  using: l
              }))
          })
      }, t.ui.position = {
          fit: {
              left: function(t, e) {
                  var i, s = e.within,
                      n = s.isWindow ? s.scrollLeft : s.offset.left,
                      o = s.width,
                      r = t.left - e.collisionPosition.marginLeft,
                      h = n - r,
                      l = r + e.collisionWidth - o - n;
                  e.collisionWidth > o ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
              },
              top: function(t, e) {
                  var i, s = e.within,
                      n = s.isWindow ? s.scrollTop : s.offset.top,
                      o = e.within.height,
                      r = t.top - e.collisionPosition.marginTop,
                      h = n - r,
                      l = r + e.collisionHeight - o - n;
                  e.collisionHeight > o ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
              }
          },
          flip: {
              left: function(t, e) {
                  var i, s, n = e.within,
                      o = n.offset.left + n.scrollLeft,
                      a = n.width,
                      h = n.isWindow ? n.scrollLeft : n.offset.left,
                      l = t.left - e.collisionPosition.marginLeft,
                      c = l - h,
                      u = l + e.collisionWidth - a - h,
                      d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                      p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                      f = -2 * e.offset[0];
                  0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
              },
              top: function(t, e) {
                  var i, s, n = e.within,
                      o = n.offset.top + n.scrollTop,
                      a = n.height,
                      h = n.isWindow ? n.scrollTop : n.offset.top,
                      l = t.top - e.collisionPosition.marginTop,
                      c = l - h,
                      u = l + e.collisionHeight - a - h,
                      d = "top" === e.my[1],
                      p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                      f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                      g = -2 * e.offset[1];
                  0 > c ? (s = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
              }
          },
          flipfit: {
              left: function() {
                  t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
              },
              top: function() {
                  t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
              }
          }
      },
      function() {
          var e, i, s, n, o, a = document.getElementsByTagName("body")[0],
              r = document.createElement("div");
          e = document.createElement(a ? "div" : "body"), s = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none"
          }, a && t.extend(s, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px"
          });
          for (o in s) e.style[o] = s[o];
          e.appendChild(r), i = a || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
      }()
}(jQuery),
function(t) {
  var e = 0,
      i = {},
      s = {};
  i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
      version: "1.10.4",
      options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: "click",
          header: "> li > :first-child,> :not(li):even",
          heightStyle: "auto",
          icons: {
              activeHeader: "ui-icon-triangle-1-s",
              header: "ui-icon-triangle-1-e"
          },
          activate: null,
          beforeActivate: null
      },
      _create: function() {
          var e = this.options;
          this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
      },
      _getCreateEventData: function() {
          return {
              header: this.active,
              panel: this.active.length ? this.active.next() : t(),
              content: this.active.length ? this.active.next() : t()
          }
      },
      _createIcons: function() {
          var e = this.options.icons;
          e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
      },
      _destroyIcons: function() {
          this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
      },
      _destroy: function() {
          var t;
          this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id")
          }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id")
          }), "content" !== this.options.heightStyle && t.css("height", "")
      },
      _setOption: function(t, e) {
          return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
      },
      _keydown: function(e) {
          if (!e.altKey && !e.ctrlKey) {
              var i = t.ui.keyCode,
                  s = this.headers.length,
                  n = this.headers.index(e.target),
                  o = !1;
              switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                      o = this.headers[(n + 1) % s];
                      break;
                  case i.LEFT:
                  case i.UP:
                      o = this.headers[(n - 1 + s) % s];
                      break;
                  case i.SPACE:
                  case i.ENTER:
                      this._eventHandler(e);
                      break;
                  case i.HOME:
                      o = this.headers[0];
                      break;
                  case i.END:
                      o = this.headers[s - 1]
              }
              o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
          }
      },
      _panelKeyDown: function(e) {
          e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
      },
      refresh: function() {
          var e = this.options;
          this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
      },
      _processPanels: function() {
          this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
      },
      _refresh: function() {
          var i, s = this.options,
              n = s.heightStyle,
              o = this.element.parent(),
              a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
          this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
              var i = t(this),
                  s = i.attr("id"),
                  n = i.next(),
                  o = n.attr("id");
              s || (s = a + "-header-" + e, i.attr("id", s)), o || (o = a + "-panel-" + e, n.attr("id", o)), i.attr("aria-controls", o), n.attr("aria-labelledby", s)
          }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1
          }).next().attr({
              "aria-hidden": "true"
          }).hide(), this.active.length ? this.active.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0
          }).next().attr({
              "aria-hidden": "false"
          }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = o.height(), this.element.siblings(":visible").each(function() {
              var e = t(this),
                  s = e.css("position");
              "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
          }), this.headers.each(function() {
              i -= t(this).outerHeight(!0)
          }), this.headers.next().each(function() {
              t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
          }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
              i = Math.max(i, t(this).css("height", "").height())
          }).height(i))
      },
      _activate: function(e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop
          }))
      },
      _findActive: function(e) {
          return "number" == typeof e ? this.headers.eq(e) : t()
      },
      _setupEvents: function(e) {
          var i = {
              keydown: "_keydown"
          };
          e && t.each(e.split(" "), function(t, e) {
              i[e] = "_eventHandler"
          }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
              keydown: "_panelKeyDown"
          }), this._hoverable(this.headers), this._focusable(this.headers)
      },
      _eventHandler: function(e) {
          var i = this.options,
              s = this.active,
              n = t(e.currentTarget),
              o = n[0] === s[0],
              a = o && i.collapsible,
              r = a ? t() : n.next(),
              h = s.next(),
              l = {
                  oldHeader: s,
                  oldPanel: h,
                  newHeader: a ? t() : n,
                  newPanel: r
              };
          e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = !a && this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
      },
      _toggle: function(e) {
          var i = e.newPanel,
              s = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
              "aria-hidden": "true"
          }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({
              tabIndex: -1,
              "aria-expanded": "false"
          }) : i.length && this.headers.filter(function() {
              return 0 === t(this).attr("tabIndex")
          }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
              "aria-selected": "true",
              tabIndex: 0,
              "aria-expanded": "true"
          })
      },
      _animate: function(t, e, n) {
          var o, a, r, h = this,
              l = 0,
              c = t.length && (!e.length || t.index() < e.index()),
              u = this.options.animate || {},
              d = c && u.down || u,
              p = function() {
                  h._toggleComplete(n)
              };
          return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
              duration: r,
              easing: a,
              step: function(t, e) {
                  e.now = Math.round(t)
              }
          }), void t.hide().animate(s, {
              duration: r,
              easing: a,
              complete: p,
              step: function(t, i) {
                  i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l), l = 0)
              }
          })) : e.animate(i, r, a, p) : t.animate(s, r, a, p)
      },
      _toggleComplete: function(t) {
          var e = t.oldPanel;
          e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
      }
  })
}(jQuery),
function(t) {
  t.widget("ui.autocomplete", {
      version: "1.10.4",
      defaultElement: "<input>",
      options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: {
              my: "left top",
              at: "left bottom",
              collision: "none"
          },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null
      },
      requestIndex: 0,
      pending: 0,
      _create: function() {
          var e, i, s, n = this.element[0].nodeName.toLowerCase(),
              o = "textarea" === n,
              a = "input" === n;
          this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
              keydown: function(n) {
                  if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                  e = !1, s = !1, i = !1;
                  var o = t.ui.keyCode;
                  switch (n.keyCode) {
                      case o.PAGE_UP:
                          e = !0, this._move("previousPage", n);
                          break;
                      case o.PAGE_DOWN:
                          e = !0, this._move("nextPage", n);
                          break;
                      case o.UP:
                          e = !0, this._keyEvent("previous", n);
                          break;
                      case o.DOWN:
                          e = !0, this._keyEvent("next", n);
                          break;
                      case o.ENTER:
                      case o.NUMPAD_ENTER:
                          this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                          break;
                      case o.TAB:
                          this.menu.active && this.menu.select(n);
                          break;
                      case o.ESCAPE:
                          this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                          break;
                      default:
                          i = !0, this._searchTimeout(n)
                  }
              },
              keypress: function(s) {
                  if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                  if (!i) {
                      var n = t.ui.keyCode;
                      switch (s.keyCode) {
                          case n.PAGE_UP:
                              this._move("previousPage", s);
                              break;
                          case n.PAGE_DOWN:
                              this._move("nextPage", s);
                              break;
                          case n.UP:
                              this._keyEvent("previous", s);
                              break;
                          case n.DOWN:
                              this._keyEvent("next", s)
                      }
                  }
              },
              input: function(t) {
                  return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
              },
              focus: function() {
                  this.selectedItem = null, this.previous = this._value()
              },
              blur: function(t) {
                  return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
              }
          }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
              role: null
          }).hide().data("ui-menu"), this._on(this.menu.element, {
              mousedown: function(e) {
                  e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                      delete this.cancelBlur
                  });
                  var i = this.menu.element[0];
                  t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                      var e = this;
                      this.document.one("mousedown", function(s) {
                          s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                      })
                  })
              },
              menufocus: function(e, i) {
                  if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                      t(e.target).trigger(e.originalEvent)
                  });
                  var s = i.item.data("ui-autocomplete-item");
                  !1 !== this._trigger("focus", e, {
                      item: s
                  }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
              },
              menuselect: function(t, e) {
                  var i = e.item.data("ui-autocomplete-item"),
                      s = this.previous;
                  this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                      this.previous = s, this.selectedItem = i
                  })), !1 !== this._trigger("select", t, {
                      item: i
                  }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
              }
          }), this.liveRegion = t("<span>", {
              role: "status",
              "aria-live": "polite"
          }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
              beforeunload: function() {
                  this.element.removeAttr("autocomplete")
              }
          })
      },
      _destroy: function() {
          clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
      },
      _setOption: function(t, e) {
          this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
      },
      _appendTo: function() {
          var e = this.options.appendTo;
          return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
      },
      _initSource: function() {
          var e, i, s = this;
          t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
              s(t.ui.autocomplete.filter(e, i.term))
          }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
              s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: "json",
                  success: function(t) {
                      n(t)
                  },
                  error: function() {
                      n([])
                  }
              })
          }) : this.source = this.options.source
      },
      _searchTimeout: function(t) {
          clearTimeout(this.searching), this.searching = this._delay(function() {
              this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
          }, this.options.delay)
      },
      search: function(t, e) {
          return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
      },
      _search: function(t) {
          this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
              term: t
          }, this._response())
      },
      _response: function() {
          var e = ++this.requestIndex;
          return t.proxy(function(t) {
              e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
          }, this)
      },
      __response: function(t) {
          t && (t = this._normalize(t)), this._trigger("response", null, {
              content: t
          }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
      },
      close: function(t) {
          this.cancelSearch = !0, this._close(t)
      },
      _close: function(t) {
          this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
      },
      _change: function(t) {
          this.previous !== this._value() && this._trigger("change", t, {
              item: this.selectedItem
          })
      },
      _normalize: function(e) {
          return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
              return "string" == typeof e ? {
                  label: e,
                  value: e
              } : t.extend({
                  label: e.label || e.value,
                  value: e.value || e.label
              }, e)
          })
      },
      _suggest: function(e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
              of: this.element
          }, this.options.position)), this.options.autoFocus && this.menu.next()
      },
      _resizeMenu: function() {
          var t = this.menu.element;
          t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
      },
      _renderMenu: function(e, i) {
          var s = this;
          t.each(i, function(t, i) {
              s._renderItemData(e, i)
          })
      },
      _renderItemData: function(t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e)
      },
      _renderItem: function(e, i) {
          return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
      },
      _move: function(t, e) {
          return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
      },
      widget: function() {
          return this.menu.element
      },
      _value: function() {
          return this.valueMethod.apply(this.element, arguments)
      },
      _keyEvent: function(t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
      }
  }), t.extend(t.ui.autocomplete, {
      escapeRegex: function(t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      },
      filter: function(e, i) {
          var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function(t) {
              return s.test(t.label || t.value || t)
          })
      }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
      options: {
          messages: {
              noResults: "No search results.",
              results: function(t) {
                  return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
              }
          }
      },
      __response: function(t) {
          var e;
          this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
      }
  })
}(jQuery),
function(t) {
  var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
      s = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      n = function() {
          var e = t(this);
          setTimeout(function() {
              e.find(":ui-button").button("refresh")
          }, 1)
      },
      o = function(e) {
          var i = e.name,
              s = e.form,
              n = t([]);
          return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
              return !this.form
          })), n
      };
  t.widget("ui.button", {
      version: "1.10.4",
      defaultElement: "<button>",
      options: {
          disabled: null,
          text: !0,
          label: null,
          icons: {
              primary: null,
              secondary: null
          }
      },
      _create: function() {
          this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, n), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
          var s = this,
              a = this.options,
              r = "checkbox" === this.type || "radio" === this.type,
              h = r ? "" : "ui-state-active";
          null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
              a.disabled || this === e && t(this).addClass("ui-state-active")
          }).bind("mouseleave" + this.eventNamespace, function() {
              a.disabled || t(this).removeClass(h)
          }).bind("click" + this.eventNamespace, function(t) {
              a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
          }), this._on({
              focus: function() {
                  this.buttonElement.addClass("ui-state-focus")
              },
              blur: function() {
                  this.buttonElement.removeClass("ui-state-focus")
              }
          }), r && this.element.bind("change" + this.eventNamespace, function() {
              s.refresh()
          }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
              return !a.disabled && void 0
          }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
              if (a.disabled) return !1;
              t(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true");
              var e = s.element[0];
              o(e).not(e).map(function() {
                  return t(this).button("widget")[0]
              }).removeClass("ui-state-active").attr("aria-pressed", "false")
          }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
              return !a.disabled && (t(this).addClass("ui-state-active"), e = this, void s.document.one("mouseup", function() {
                  e = null
              }))
          }).bind("mouseup" + this.eventNamespace, function() {
              return !a.disabled && void t(this).removeClass("ui-state-active")
          }).bind("keydown" + this.eventNamespace, function(e) {
              return !a.disabled && void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
          }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
              t(this).removeClass("ui-state-active")
          }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
              e.keyCode === t.ui.keyCode.SPACE && t(this).click()
          })), this._setOption("disabled", a.disabled), this._resetButton()
      },
      _determineButtonType: function() {
          var t, e, i;
          this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
      },
      widget: function() {
          return this.buttonElement
      },
      _destroy: function() {
          this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
      },
      _setOption: function(t, e) {
          return this._super(t, e), "disabled" === t ? (this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("ui-state-focus"))) : void this._resetButton()
      },
      refresh: function() {
          var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
          e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? o(this.element[0]).each(function() {
              t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
          }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
      },
      _resetButton: function() {
          if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
          var e = this.buttonElement.removeClass(s),
              i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
              n = this.options.icons,
              o = n.primary && n.secondary,
              a = [];
          n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (o ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
      }
  }), t.widget("ui.buttonset", {
      version: "1.10.4",
      options: {
          items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
      },
      _create: function() {
          this.element.addClass("ui-buttonset")
      },
      _init: function() {
          this.refresh()
      },
      _setOption: function(t, e) {
          "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
      },
      refresh: function() {
          var e = "rtl" === this.element.css("direction");
          this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
              return t(this).button("widget")[0]
          }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
      },
      _destroy: function() {
          this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
              return t(this).button("widget")[0]
          }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
      }
  })
}(jQuery),
function(t, e) {
  function i() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: ""
      }, this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1
      }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function s(e) {
      var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e.delegate(i, "mouseout", function() {
          t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
      }).delegate(i, "mouseover", function() {
          t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
      })
  }

  function n(e, i) {
      t.extend(e, i);
      for (var s in i) null == i[s] && (e[s] = i[s]);
      return e
  }
  t.extend(t.ui, {
      datepicker: {
          version: "1.10.4"
      }
  });
  var o, a = "datepicker";
  t.extend(i.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function() {
          return this.dpDiv
      },
      setDefaults: function(t) {
          return n(this._defaults, t || {}), this
      },
      _attachDatepicker: function(e, i) {
          var s, n, o;
          s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
      },
      _newInst: function(e, i) {
          var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
          return {
              id: n,
              input: e,
              selectedDay: 0,
              selectedMonth: 0,
              selectedYear: 0,
              drawMonth: 0,
              drawYear: 0,
              inline: i,
              dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
          }
      },
      _connectDatepicker: function(e, i) {
          var s = t(e);
          i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, a, i), i.settings.disabled && this._disableDatepicker(e))
      },
      _attachments: function(e, i) {
          var s, n, o, a = this._get(i, "appendText"),
              r = this._get(i, "isRTL");
          i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
              src: o,
              alt: n,
              title: n
          }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
              src: o,
              alt: n,
              title: n
          }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
              return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
          }))
      },
      _autoSize: function(t) {
          if (this._get(t, "autoSize") && !t.inline) {
              var e, i, s, n, o = new Date(2009, 11, 20),
                  a = this._get(t, "dateFormat");
              a.match(/[DM]/) && (e = function(t) {
                  for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                  return s
              }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
          }
      },
      _inlineDatepicker: function(e, i) {
          var s = t(e);
          s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, a, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function(e, i, s, o, r) {
          var h, l, c, u, d, p = this._dialogInst;
          return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], a, p)), n(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], a, p), this
      },
      _destroyDatepicker: function(e) {
          var i, s = t(e),
              n = t.data(e, a);
          s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, a), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
      },
      _enableDatepicker: function(e) {
          var i, s, n = t(e),
              o = t.data(e, a);
          n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
              this.disabled = !1
          }).end().filter("img").css({
              opacity: "1.0",
              cursor: ""
          })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
              return t === e ? null : t
          }))
      },
      _disableDatepicker: function(e) {
          var i, s, n = t(e),
              o = t.data(e, a);
          n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
              this.disabled = !0
          }).end().filter("img").css({
              opacity: "0.5",
              cursor: "default"
          })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
              return t === e ? null : t
          }), this._disabledInputs[this._disabledInputs.length] = e)
      },
      _isDisabledDatepicker: function(t) {
          if (!t) return !1;
          for (var e = 0; this._disabledInputs.length > e; e++)
              if (this._disabledInputs[e] === t) return !0;
          return !1
      },
      _getInst: function(e) {
          try {
              return t.data(e, a)
          } catch (i) {
              throw "Missing instance data for this datepicker"
          }
      },
      _optionDatepicker: function(i, s, o) {
          var a, r, h, l, c = this._getInst(i);
          return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (a = s || {}, "string" == typeof s && (a = {}, a[s] = o), c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, a), null !== h && a.dateFormat !== e && a.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && a.dateFormat !== e && a.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in a && (a.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c)), e)
      },
      _changeDatepicker: function(t, e, i) {
          this._optionDatepicker(t, e, i)
      },
      _refreshDatepicker: function(t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e)
      },
      _setDateDatepicker: function(t, e) {
          var i = this._getInst(t);
          i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
      },
      _getDateDatepicker: function(t, e) {
          var i = this._getInst(t);
          return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
      },
      _doKeyDown: function(e) {
          var i, s, n, o = t.datepicker._getInst(e.target),
              a = !0,
              r = o.dpDiv.is(".ui-datepicker-rtl");
          if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
              case 9:
                  t.datepicker._hideDatepicker(), a = !1;
                  break;
              case 13:
                  return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
              case 27:
                  t.datepicker._hideDatepicker();
                  break;
              case 33:
                  t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                  break;
              case 34:
                  t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                  break;
              case 35:
                  (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                  break;
              case 36:
                  (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                  break;
              case 37:
                  (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                  break;
              case 38:
                  (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                  break;
              case 39:
                  (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                  break;
              case 40:
                  (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                  break;
              default:
                  a = !1
          } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
          a && (e.preventDefault(), e.stopPropagation())
      },
      _doKeyPress: function(i) {
          var s, n, o = t.datepicker._getInst(i.target);
          return t.datepicker._get(o, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
      },
      _doKeyUp: function(e) {
          var i, s = t.datepicker._getInst(e.target);
          if (s.input.val() !== s.lastVal) try {
              i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
          } catch (n) {}
          return !0
      },
      _showDatepicker: function(e) {
          if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
              var i, s, o, a, r, h, l;
              i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), o = s ? s.apply(e, [e, i]) : {}, o !== !1 && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                  return a |= "fixed" === t(this).css("position"), !a
              }), r = {
                  left: t.datepicker._pos[0],
                  top: t.datepicker._pos[1]
              }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                  position: "absolute",
                  display: "block",
                  top: "-1000px"
              }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                  position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                  display: "none",
                  left: r.left + "px",
                  top: r.top + "px"
              }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
          }
      },
      _updateDatepicker: function(e) {
          this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
          var i, s = this._getNumberOfMonths(e),
              n = s[1],
              a = 17;
          e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
              i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
          }, 0))
      },
      _shouldFocusInput: function(t) {
          return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
      },
      _checkOffset: function(e, i, s) {
          var n = e.dpDiv.outerWidth(),
              o = e.dpDiv.outerHeight(),
              a = e.input ? e.input.outerWidth() : 0,
              r = e.input ? e.input.outerHeight() : 0,
              h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
              l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
          return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
      },
      _findPos: function(e) {
          for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
          return i = t(e).offset(), [i.left, i.top]
      },
      _hideDatepicker: function(e) {
          var i, s, n, o, r = this._curInst;
          !r || e && r !== t.data(e, a) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function() {
              t.datepicker._tidyDialog(r)
          }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
              position: "absolute",
              left: "0",
              top: "-100px"
          }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
      },
      _tidyDialog: function(t) {
          t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function(e) {
          if (t.datepicker._curInst) {
              var i = t(e.target),
                  s = t.datepicker._getInst(i[0]);
              (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
          }
      },
      _adjustDate: function(e, i, s) {
          var n = t(e),
              o = this._getInst(n[0]);
          this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
      },
      _gotoToday: function(e) {
          var i, s = t(e),
              n = this._getInst(s[0]);
          this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
      },
      _selectMonthYear: function(e, i, s) {
          var n = t(e),
              o = this._getInst(n[0]);
          o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
      },
      _selectDay: function(e, i, s, n) {
          var o, a = t(e);
          t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
      },
      _clearDate: function(e) {
          var i = t(e);
          this._selectDate(i, "")
      },
      _selectDate: function(e, i) {
          var s, n = t(e),
              o = this._getInst(n[0]);
          i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function(e) {
          var i, s, n, o = this._get(e, "altField");
          o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function() {
              t(this).val(n)
          }))
      },
      noWeekends: function(t) {
          var e = t.getDay();
          return [e > 0 && 6 > e, ""]
      },
      iso8601Week: function(t) {
          var e, i = new Date(t.getTime());
          return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      },
      parseDate: function(i, s, n) {
          if (null == i || null == s) throw "Invalid arguments";
          if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
          var o, a, r, h, l = 0,
              c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
              u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
              d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
              p = (n ? n.dayNames : null) || this._defaults.dayNames,
              f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
              g = (n ? n.monthNames : null) || this._defaults.monthNames,
              m = -1,
              v = -1,
              _ = -1,
              b = -1,
              y = !1,
              w = function(t) {
                  var e = i.length > o + 1 && i.charAt(o + 1) === t;
                  return e && o++, e
              },
              k = function(t) {
                  var e = w(t),
                      i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                      n = RegExp("^\\d{1," + i + "}"),
                      o = s.substring(l).match(n);
                  if (!o) throw "Missing number at position " + l;
                  return l += o[0].length, parseInt(o[0], 10)
              },
              x = function(i, n, o) {
                  var a = -1,
                      r = t.map(w(i) ? o : n, function(t, e) {
                          return [
                              [e, t]
                          ]
                      }).sort(function(t, e) {
                          return -(t[1].length - e[1].length)
                      });
                  if (t.each(r, function(t, i) {
                          var n = i[1];
                          return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = i[0], l += n.length, !1) : e
                      }), -1 !== a) return a + 1;
                  throw "Unknown name at position " + l
              },
              D = function() {
                  if (s.charAt(l) !== i.charAt(o)) throw "Unexpected literal at position " + l;
                  l++
              };
          for (o = 0; i.length > o; o++)
              if (y) "'" !== i.charAt(o) || w("'") ? D() : y = !1;
              else switch (i.charAt(o)) {
                  case "d":
                      _ = k("d");
                      break;
                  case "D":
                      x("D", d, p);
                      break;
                  case "o":
                      b = k("o");
                      break;
                  case "m":
                      v = k("m");
                      break;
                  case "M":
                      v = x("M", f, g);
                      break;
                  case "y":
                      m = k("y");
                      break;
                  case "@":
                      h = new Date(k("@")), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                      break;
                  case "!":
                      h = new Date((k("!") - this._ticksTo1970) / 1e4), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                      break;
                  case "'":
                      w("'") ? D() : y = !0;
                      break;
                  default:
                      D()
              }
          if (s.length > l && (r = s.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
          if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), b > -1)
              for (v = 1, _ = b; a = this._getDaysInMonth(m, v - 1), !(a >= _);) v++, _ -= a;
          if (h = this._daylightSavingAdjust(new Date(m, v - 1, _)), h.getFullYear() !== m || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
          return h
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function(t, e, i) {
          if (!e) return "";
          var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
              o = (i ? i.dayNames : null) || this._defaults.dayNames,
              a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
              r = (i ? i.monthNames : null) || this._defaults.monthNames,
              h = function(e) {
                  var i = t.length > s + 1 && t.charAt(s + 1) === e;
                  return i && s++, i
              },
              l = function(t, e, i) {
                  var s = "" + e;
                  if (h(t))
                      for (; i > s.length;) s = "0" + s;
                  return s
              },
              c = function(t, e, i, s) {
                  return h(t) ? s[e] : i[e]
              },
              u = "",
              d = !1;
          if (e)
              for (s = 0; t.length > s; s++)
                  if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                  else switch (t.charAt(s)) {
                      case "d":
                          u += l("d", e.getDate(), 2);
                          break;
                      case "D":
                          u += c("D", e.getDay(), n, o);
                          break;
                      case "o":
                          u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                          break;
                      case "m":
                          u += l("m", e.getMonth() + 1, 2);
                          break;
                      case "M":
                          u += c("M", e.getMonth(), a, r);
                          break;
                      case "y":
                          u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                          break;
                      case "@":
                          u += e.getTime();
                          break;
                      case "!":
                          u += 1e4 * e.getTime() + this._ticksTo1970;
                          break;
                      case "'":
                          h("'") ? u += "'" : d = !0;
                          break;
                      default:
                          u += t.charAt(s)
                  }
          return u
      },
      _possibleChars: function(t) {
          var e, i = "",
              s = !1,
              n = function(i) {
                  var s = t.length > e + 1 && t.charAt(e + 1) === i;
                  return s && e++, s
              };
          for (e = 0; t.length > e; e++)
              if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
              else switch (t.charAt(e)) {
                  case "d":
                  case "m":
                  case "y":
                  case "@":
                      i += "0123456789";
                      break;
                  case "D":
                  case "M":
                      return null;
                  case "'":
                      n("'") ? i += "'" : s = !0;
                      break;
                  default:
                      i += t.charAt(e)
              }
          return i
      },
      _get: function(t, i) {
          return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
      },
      _setDateFromField: function(t, e) {
          if (t.input.val() !== t.lastVal) {
              var i = this._get(t, "dateFormat"),
                  s = t.lastVal = t.input ? t.input.val() : null,
                  n = this._getDefaultDate(t),
                  o = n,
                  a = this._getFormatConfig(t);
              try {
                  o = this.parseDate(i, s, a) || n
              } catch (r) {
                  s = e ? "" : s
              }
              t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
          }
      },
      _getDefaultDate: function(t) {
          return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
      },
      _determineDate: function(e, i, s) {
          var n = function(t) {
                  var e = new Date;
                  return e.setDate(e.getDate() + t), e
              },
              o = function(i) {
                  try {
                      return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                  } catch (s) {}
                  for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                      switch (l[2] || "d") {
                          case "d":
                          case "D":
                              r += parseInt(l[1], 10);
                              break;
                          case "w":
                          case "W":
                              r += 7 * parseInt(l[1], 10);
                              break;
                          case "m":
                          case "M":
                              a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                              break;
                          case "y":
                          case "Y":
                              o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                      }
                      l = h.exec(i)
                  }
                  return new Date(o, a, r)
              },
              a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
          return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
      },
      _daylightSavingAdjust: function(t) {
          return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
      },
      _setDate: function(t, e, i) {
          var s = !e,
              n = t.selectedMonth,
              o = t.selectedYear,
              a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
          t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
      },
      _getDate: function(t) {
          var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
          return e
      },
      _attachHandlers: function(e) {
          var i = this._get(e, "stepMonths"),
              s = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function() {
              var e = {
                  prev: function() {
                      t.datepicker._adjustDate(s, -i, "M")
                  },
                  next: function() {
                      t.datepicker._adjustDate(s, +i, "M")
                  },
                  hide: function() {
                      t.datepicker._hideDatepicker()
                  },
                  today: function() {
                      t.datepicker._gotoToday(s)
                  },
                  selectDay: function() {
                      return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                  },
                  selectMonth: function() {
                      return t.datepicker._selectMonthYear(s, this, "M"), !1
                  },
                  selectYear: function() {
                      return t.datepicker._selectMonthYear(s, this, "Y"), !1
                  }
              };
              t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
          })
      },
      _generateHTML: function(t) {
          var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, v, _, b, y, w, k, x, D, C, I, P, T, M, S, z, A, H, W, E, N, O, F, R, L = new Date,
              j = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
              Y = this._get(t, "isRTL"),
              B = this._get(t, "showButtonPanel"),
              K = this._get(t, "hideIfNoPrevNext"),
              q = this._get(t, "navigationAsDateFormat"),
              U = this._getNumberOfMonths(t),
              V = this._get(t, "showCurrentAtPos"),
              Q = this._get(t, "stepMonths"),
              X = 1 !== U[0] || 1 !== U[1],
              $ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
              G = this._getMinMaxDate(t, "min"),
              J = this._getMinMaxDate(t, "max"),
              Z = t.drawMonth - V,
              tt = t.drawYear;
          if (0 > Z && (Z += 12, tt--), J)
              for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
          for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - Q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : K ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + Q, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : K ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? $ : j, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
              for (x = "", this.maxRows = 4, D = 0; U[1] > D; D++) {
                  if (C = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", P = "", X) {
                      if (P += "<div class='ui-datepicker-group", U[1] > 1) switch (D) {
                          case 0:
                              P += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                              break;
                          case U[1] - 1:
                              P += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                              break;
                          default:
                              P += " ui-datepicker-group-middle", I = ""
                      }
                      P += "'>"
                  }
                  for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, G, J, k > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, T += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                  for (P += T + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, A = Math.ceil((z + S) / 7), H = X && this.maxRows > A ? this.maxRows : A, this.maxRows = H, W = this._daylightSavingAdjust(new Date(tt, Z, 1 - z)), E = 0; H > E; E++) {
                      for (P += "<tr>", N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(W) + "</td>" : "", w = 0; 7 > w; w++) O = m ? m.apply(t.input ? t.input[0] : null, [W]) : [!0, ""], F = W.getMonth() !== Z, R = F && !_ || !O[0] || G && G > W || J && W > J, N += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (W.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === W.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (W.getTime() === $.getTime() ? " " + this._currentClass : "") + (W.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "'") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + W.getMonth() + "' data-year='" + W.getFullYear() + "'") + ">" + (F && !v ? " " : R ? "<span class='ui-state-default'>" + W.getDate() + "</span>" : "<a class='ui-state-default" + (W.getTime() === j.getTime() ? " ui-state-highlight" : "") + (W.getTime() === $.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + W.getDate() + "</a>") + "</td>", W.setDate(W.getDate() + 1), W = this._daylightSavingAdjust(W);
                      P += N + "</tr>"
                  }
                  Z++, Z > 11 && (Z = 0, tt++), P += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && D === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += P
              }
              y += x
          }
          return y += l, t._keyEvent = !1, y
      },
      _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
          var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
              v = this._get(t, "changeYear"),
              _ = this._get(t, "showMonthAfterYear"),
              b = "<div class='ui-datepicker-title'>",
              y = "";
          if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
          else {
              for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
              y += "</select>"
          }
          if (_ || (b += y + (!o && m && v ? "" : " ")), !t.yearshtml)
              if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
              else {
                  for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                          return isNaN(e) ? d : e
                      }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                  t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
              } return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : " ") + y), b += "</div>"
      },
      _adjustInstDate: function(t, e, i) {
          var s = t.drawYear + ("Y" === i ? e : 0),
              n = t.drawMonth + ("M" === i ? e : 0),
              o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
              a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
          t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
      },
      _restrictMinMax: function(t, e) {
          var i = this._getMinMaxDate(t, "min"),
              s = this._getMinMaxDate(t, "max"),
              n = i && i > e ? i : e;
          return s && n > s ? s : n
      },
      _notifyChange: function(t) {
          var e = this._get(t, "onChangeMonthYear");
          e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
      },
      _getNumberOfMonths: function(t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
      },
      _getMinMaxDate: function(t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null)
      },
      _getDaysInMonth: function(t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
      },
      _getFirstDayOfMonth: function(t, e) {
          return new Date(t, e, 1).getDay()
      },
      _canAdjustMonth: function(t, e, i, s) {
          var n = this._getNumberOfMonths(t),
              o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
          return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
      },
      _isInRange: function(t, e) {
          var i, s, n = this._getMinMaxDate(t, "min"),
              o = this._getMinMaxDate(t, "max"),
              a = null,
              r = null,
              h = this._get(t, "yearRange");
          return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
      },
      _getFormatConfig: function(t) {
          var e = this._get(t, "shortYearCutoff");
          return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
              shortYearCutoff: e,
              dayNamesShort: this._get(t, "dayNamesShort"),
              dayNames: this._get(t, "dayNames"),
              monthNamesShort: this._get(t, "monthNamesShort"),
              monthNames: this._get(t, "monthNames")
          }
      },
      _formatDate: function(t, e, i, s) {
          e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
          var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
          return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
      }
  }), t.fn.datepicker = function(e) {
      if (!this.length) return this;
      t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
          "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
      }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.4"
}(jQuery),
function(t) {
  var e = {
          buttons: !0,
          height: !0,
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
          width: !0
      },
      i = {
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0
      };
  t.widget("ui.dialog", {
      version: "1.10.4",
      options: {
          appendTo: "body",
          autoOpen: !0,
          buttons: [],
          closeOnEscape: !0,
          closeText: "close",
          dialogClass: "",
          draggable: !0,
          hide: null,
          height: "auto",
          maxHeight: null,
          maxWidth: null,
          minHeight: 150,
          minWidth: 150,
          modal: !1,
          position: {
              my: "center",
              at: "center",
              of: window,
              collision: "fit",
              using: function(e) {
                  var i = t(this).css(e).offset().top;
                  0 > i && t(this).css("top", e.top - i)
              }
          },
          resizable: !0,
          show: null,
          title: null,
          width: 300,
          beforeClose: null,
          close: null,
          drag: null,
          dragStart: null,
          dragStop: null,
          focus: null,
          open: null,
          resize: null,
          resizeStart: null,
          resizeStop: null
      },
      _create: function() {
          this.originalCss = {
              display: this.element[0].style.display,
              width: this.element[0].style.width,
              minHeight: this.element[0].style.minHeight,
              maxHeight: this.element[0].style.maxHeight,
              height: this.element[0].style.height
          }, this.originalPosition = {
              parent: this.element.parent(),
              index: this.element.parent().children().index(this.element)
          }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
      },
      _init: function() {
          this.options.autoOpen && this.open()
      },
      _appendTo: function() {
          var e = this.options.appendTo;
          return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
      },
      _destroy: function() {
          var t, e = this.originalPosition;
          this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
      },
      widget: function() {
          return this.uiDialog
      },
      disable: t.noop,
      enable: t.noop,
      close: function(e) {
          var i, s = this;
          if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
              if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                  i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
              } catch (n) {}
              this._hide(this.uiDialog, this.options.hide, function() {
                  s._trigger("close", e)
              })
          }
      },
      isOpen: function() {
          return this._isOpen
      },
      moveToTop: function() {
          this._moveToTop()
      },
      _moveToTop: function(t, e) {
          var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
          return i && !e && this._trigger("focus", t), i
      },
      open: function() {
          var e = this;
          return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
              e._focusTabbable(), e._trigger("focus")
          }), void this._trigger("open"))
      },
      _focusTabbable: function() {
          var t = this.element.find("[autofocus]");
          t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
      },
      _keepFocus: function(e) {
          function i() {
              var e = this.document[0].activeElement,
                  i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
              i || this._focusTabbable()
          }
          e.preventDefault(), i.call(this), this._delay(i)
      },
      _createWrapper: function() {
          this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
              tabIndex: -1,
              role: "dialog"
          }).appendTo(this._appendTo()), this._on(this.uiDialog, {
              keydown: function(e) {
                  if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                  if (e.keyCode === t.ui.keyCode.TAB) {
                      var i = this.uiDialog.find(":tabbable"),
                          s = i.filter(":first"),
                          n = i.filter(":last");
                      e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
                  }
              },
              mousedown: function(t) {
                  this._moveToTop(t) && this._focusTabbable()
              }
          }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id")
          })
      },
      _createTitlebar: function() {
          var e;
          this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
              mousedown: function(e) {
                  t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
              }
          }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
              label: this.options.closeText,
              icons: {
                  primary: "ui-icon-closethick"
              },
              text: !1
          }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
              click: function(t) {
                  t.preventDefault(), this.close(t)
              }
          }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
              "aria-labelledby": e.attr("id")
          })
      },
      _title: function(t) {
          this.options.title || t.html(" "), t.text(this.options.title)
      },
      _createButtonPane: function() {
          this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
      },
      _createButtons: function() {
          var e = this,
              i = this.options.buttons;
          return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
              var n, o;
              s = t.isFunction(s) ? {
                  click: s,
                  text: i
              } : s, s = t.extend({
                  type: "button"
              }, s), n = s.click, s.click = function() {
                  n.apply(e.element[0], arguments)
              }, o = {
                  icons: s.icons,
                  text: s.showText
              }, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
          }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
      },
      _makeDraggable: function() {
          function e(t) {
              return {
                  position: t.position,
                  offset: t.offset
              }
          }
          var i = this,
              s = this.options;
          this.uiDialog.draggable({
              cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
              handle: ".ui-dialog-titlebar",
              containment: "document",
              start: function(s, n) {
                  t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
              },
              drag: function(t, s) {
                  i._trigger("drag", t, e(s))
              },
              stop: function(n, o) {
                  s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
              }
          })
      },
      _makeResizable: function() {
          function e(t) {
              return {
                  originalPosition: t.originalPosition,
                  originalSize: t.originalSize,
                  position: t.position,
                  size: t.size
              }
          }
          var i = this,
              s = this.options,
              n = s.resizable,
              o = this.uiDialog.css("position"),
              a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
          this.uiDialog.resizable({
              cancel: ".ui-dialog-content",
              containment: "document",
              alsoResize: this.element,
              maxWidth: s.maxWidth,
              maxHeight: s.maxHeight,
              minWidth: s.minWidth,
              minHeight: this._minHeight(),
              handles: a,
              start: function(s, n) {
                  t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
              },
              resize: function(t, s) {
                  i._trigger("resize", t, e(s))
              },
              stop: function(n, o) {
                  s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
              }
          }).css("position", o)
      },
      _minHeight: function() {
          var t = this.options;
          return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
      },
      _position: function() {
          var t = this.uiDialog.is(":visible");
          t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
      },
      _setOptions: function(s) {
          var n = this,
              o = !1,
              a = {};
          t.each(s, function(t, s) {
              n._setOption(t, s), t in e && (o = !0), t in i && (a[t] = s)
          }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
      },
      _setOption: function(t, e) {
          var i, s, n = this.uiDialog;
          "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
              label: "" + e
          }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
      },
      _size: function() {
          var t, e, i, s = this.options;
          this.element.show().css({
              width: "auto",
              minHeight: 0,
              maxHeight: "none",
              height: 0
          }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
              height: "auto",
              width: s.width
          }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
              minHeight: e,
              maxHeight: i,
              height: "auto"
          }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
      },
      _blockFrames: function() {
          this.iframeBlocks = this.document.find("iframe").map(function() {
              var e = t(this);
              return t("<div>").css({
                  position: "absolute",
                  width: e.outerWidth(),
                  height: e.outerHeight()
              }).appendTo(e.parent()).offset(e.offset())[0]
          })
      },
      _unblockFrames: function() {
          this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _allowInteraction: function(e) {
          return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
      },
      _createOverlay: function() {
          if (this.options.modal) {
              var e = this,
                  i = this.widgetFullName;
              t.ui.dialog.overlayInstances || this._delay(function() {
                  t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                      e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                  })
              }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                  mousedown: "_keepFocus"
              }), t.ui.dialog.overlayInstances++
          }
      },
      _destroyOverlay: function() {
          this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
      }
  }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
      _position: function() {
          var e, i = this.options.position,
              s = [],
              n = [0, 0];
          i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
              +s[t] === s[t] && (n[t] = s[t], s[t] = e)
          }), i = {
              my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
              at: s.join(" ")
          }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
      }
  })
}(jQuery),
function(t) {
  t.widget("ui.draggable", t.ui.mouse, {
      version: "1.10.4",
      widgetEventPrefix: "drag",
      options: {
          addClasses: !0,
          appendTo: "parent",
          axis: !1,
          connectToSortable: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          iframeFix: !1,
          opacity: !1,
          refreshPositions: !1,
          revert: !1,
          revertDuration: 500,
          scope: "default",
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: !1,
          snapMode: "both",
          snapTolerance: 20,
          stack: !1,
          zIndex: !1,
          drag: null,
          start: null,
          stop: null
      },
      _create: function() {
          "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
      },
      _destroy: function() {
          this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
      },
      _mouseCapture: function(e) {
          var i = this.options;
          return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
              t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                  width: this.offsetWidth + "px",
                  height: this.offsetHeight + "px",
                  position: "absolute",
                  opacity: "0.001",
                  zIndex: 1e3
              }).css(t(this).offset()).appendTo("body")
          }), !0))
      },
      _mouseStart: function(e) {
          var i = this.options;
          return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left
          }, this.offset.scroll = !1, t.extend(this.offset, {
              click: {
                  left: e.pageX - this.offset.left,
                  top: e.pageY - this.offset.top
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset()
          }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
      },
      _mouseDrag: function(e, i) {
          if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
              var s = this._uiHash();
              if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
              this.position = s.position
          }
          return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
      },
      _mouseStop: function(e) {
          var i = this,
              s = !1;
          return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), !("original" === this.options.helper && !t.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
              i._trigger("stop", e) !== !1 && i._clear()
          }) : this._trigger("stop", e) !== !1 && this._clear(), !1)
      },
      _mouseUp: function(e) {
          return t("div.ui-draggable-iframeFix").each(function() {
              this.parentNode.removeChild(this)
          }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
      },
      cancel: function() {
          return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
      },
      _getHandle: function(e) {
          return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
      },
      _createHelper: function(e) {
          var i = this.options,
              s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
          return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
      },
      _adjustOffsetFromHelper: function(e) {
          "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
              left: +e[0],
              top: +e[1] || 0
          }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
      },
      _getParentOffset: function() {
          var e = this.offsetParent.offset();
          return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
              top: 0,
              left: 0
          }), {
              top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
          }
      },
      _getRelativeOffset: function() {
          if ("relative" === this.cssPosition) {
              var t = this.element.position();
              return {
                  top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                  left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
              }
          }
          return {
              top: 0,
              left: 0
          }
      },
      _cacheMargins: function() {
          this.margins = {
              left: parseInt(this.element.css("marginLeft"), 10) || 0,
              top: parseInt(this.element.css("marginTop"), 10) || 0,
              right: parseInt(this.element.css("marginRight"), 10) || 0,
              bottom: parseInt(this.element.css("marginBottom"), 10) || 0
          }
      },
      _cacheHelperProportions: function() {
          this.helperProportions = {
              width: this.helper.outerWidth(),
              height: this.helper.outerHeight()
          }
      },
      _setContainment: function() {
          var e, i, s, n = this.options;
          return n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], void(s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
              this.relative_container = i))) : void(this.containment = null)
      },
      _convertPositionTo: function(e, i) {
          i || (i = this.position);
          var s = "absolute" === e ? 1 : -1,
              n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
          return this.offset.scroll || (this.offset.scroll = {
              top: n.scrollTop(),
              left: n.scrollLeft()
          }), {
              top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
              left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
          }
      },
      _generatePosition: function(e) {
          var i, s, n, o, a = this.options,
              r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
              h = e.pageX,
              l = e.pageY;
          return this.offset.scroll || (this.offset.scroll = {
              top: r.scrollTop(),
              left: r.scrollLeft()
          }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)), {
              top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
              left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
          }
      },
      _clear: function() {
          this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
      },
      _trigger: function(e, i, s) {
          return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
      },
      plugins: {},
      _uiHash: function() {
          return {
              helper: this.helper,
              position: this.position,
              originalPosition: this.originalPosition,
              offset: this.positionAbs
          }
      }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
      start: function(e, i) {
          var s = t(this).data("ui-draggable"),
              n = s.options,
              o = t.extend({}, i, {
                  item: s.element
              });
          s.sortables = [], t(n.connectToSortable).each(function() {
              var i = t.data(this, "ui-sortable");
              i && !i.options.disabled && (s.sortables.push({
                  instance: i,
                  shouldRevert: i.options.revert
              }), i.refreshPositions(), i._trigger("activate", e, o))
          })
      },
      stop: function(e, i) {
          var s = t(this).data("ui-draggable"),
              n = t.extend({}, i, {
                  item: s.element
              });
          t.each(s.sortables, function() {
              this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                  top: "auto",
                  left: "auto"
              })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
          })
      },
      drag: function(e, i) {
          var s = t(this).data("ui-draggable"),
              n = this;
          t.each(s.sortables, function() {
              var o = !1,
                  a = this;
              this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function() {
                  return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
              })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                  return i.helper[0]
              }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
          })
      }
  }), t.ui.plugin.add("draggable", "cursor", {
      start: function() {
          var e = t("body"),
              i = t(this).data("ui-draggable").options;
          e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
      },
      stop: function() {
          var e = t(this).data("ui-draggable").options;
          e._cursor && t("body").css("cursor", e._cursor)
      }
  }), t.ui.plugin.add("draggable", "opacity", {
      start: function(e, i) {
          var s = t(i.helper),
              n = t(this).data("ui-draggable").options;
          s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
      },
      stop: function(e, i) {
          var s = t(this).data("ui-draggable").options;
          s._opacity && t(i.helper).css("opacity", s._opacity)
      }
  }), t.ui.plugin.add("draggable", "scroll", {
      start: function() {
          var e = t(this).data("ui-draggable");
          e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
      },
      drag: function(e) {
          var i = t(this).data("ui-draggable"),
              s = i.options,
              n = !1;
          i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
      }
  }), t.ui.plugin.add("draggable", "snap", {
      start: function() {
          var e = t(this).data("ui-draggable"),
              i = e.options;
          e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
              var i = t(this),
                  s = i.offset();
              this !== e.element[0] && e.snapElements.push({
                  item: this,
                  width: i.outerWidth(),
                  height: i.outerHeight(),
                  top: s.top,
                  left: s.left
              })
          })
      },
      drag: function(e, i) {
          var s, n, o, a, r, h, l, c, u, d, p = t(this).data("ui-draggable"),
              f = p.options,
              g = f.snapTolerance,
              m = i.offset.left,
              v = m + p.helperProportions.width,
              _ = i.offset.top,
              b = _ + p.helperProportions.height;
          for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, h = r + p.snapElements[u].width, l = p.snapElements[u].top, c = l + p.snapElements[u].height, r - g > v || m > h + g || l - g > b || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
              snapItem: p.snapElements[u].item
          })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(l - b), n = g >= Math.abs(c - _), o = g >= Math.abs(r - v), a = g >= Math.abs(h - m), s && (i.position.top = p._convertPositionTo("relative", {
              top: l - p.helperProportions.height,
              left: 0
          }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
              top: c,
              left: 0
          }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: r - p.helperProportions.width
          }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: h
          }).left - p.margins.left)), d = s || n || o || a, "outer" !== f.snapMode && (s = g >= Math.abs(l - _), n = g >= Math.abs(c - b), o = g >= Math.abs(r - m), a = g >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
              top: l,
              left: 0
          }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
              top: c - p.helperProportions.height,
              left: 0
          }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: r
          }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: h - p.helperProportions.width
          }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
              snapItem: p.snapElements[u].item
          })), p.snapElements[u].snapping = s || n || o || a || d)
      }
  }), t.ui.plugin.add("draggable", "stack", {
      start: function() {
          var e, i = this.data("ui-draggable").options,
              s = t.makeArray(t(i.stack)).sort(function(e, i) {
                  return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
              });
          s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
              t(this).css("zIndex", e + i)
          }), this.css("zIndex", e + s.length))
      }
  }), t.ui.plugin.add("draggable", "zIndex", {
      start: function(e, i) {
          var s = t(i.helper),
              n = t(this).data("ui-draggable").options;
          s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
      },
      stop: function(e, i) {
          var s = t(this).data("ui-draggable").options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex)
      }
  })
}(jQuery),
function(t) {
  function e(t, e, i) {
      return t > e && e + i > t
  }
  t.widget("ui.droppable", {
      version: "1.10.4",
      widgetEventPrefix: "drop",
      options: {
          accept: "*",
          activeClass: !1,
          addClasses: !0,
          greedy: !1,
          hoverClass: !1,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null
      },
      _create: function() {
          var e, i = this.options,
              s = i.accept;
          this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
              return t.is(s)
          }, this.proportions = function() {
              return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                  width: this.element[0].offsetWidth,
                  height: this.element[0].offsetHeight
              }
          }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
      },
      _destroy: function() {
          for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++) i[e] === this && i.splice(e, 1);
          this.element.removeClass("ui-droppable ui-droppable-disabled")
      },
      _setOption: function(e, i) {
          "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
              return t.is(i)
          }), t.Widget.prototype._setOption.apply(this, arguments)
      },
      _activate: function(e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
      },
      _deactivate: function(e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
      },
      _over: function(e) {
          var i = t.ui.ddmanager.current;
          i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
      },
      _out: function(e) {
          var i = t.ui.ddmanager.current;
          i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
      },
      _drop: function(e, i) {
          var s = i || t.ui.ddmanager.current,
              n = !1;
          return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
              var e = t.data(this, "ui-droppable");
              return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                  offset: e.element.offset()
              }), e.options.tolerance) ? (n = !0, !1) : void 0
          }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element)))
      },
      ui: function(t) {
          return {
              draggable: t.currentItem || t.element,
              helper: t.helper,
              position: t.position,
              offset: t.positionAbs
          }
      }
  }), t.ui.intersect = function(t, i, s) {
      if (!i.offset) return !1;
      var n, o, a = (t.positionAbs || t.position.absolute).left,
          r = (t.positionAbs || t.position.absolute).top,
          h = a + t.helperProportions.width,
          l = r + t.helperProportions.height,
          c = i.offset.left,
          u = i.offset.top,
          d = c + i.proportions().width,
          p = u + i.proportions().height;
      switch (s) {
          case "fit":
              return a >= c && d >= h && r >= u && p >= l;
          case "intersect":
              return a + t.helperProportions.width / 2 > c && d > h - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > l - t.helperProportions.height / 2;
          case "pointer":
              return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(o, u, i.proportions().height) && e(n, c, i.proportions().width);
          case "touch":
              return (r >= u && p >= r || l >= u && p >= l || u > r && l > p) && (a >= c && d >= a || h >= c && d >= h || c > a && h > d);
          default:
              return !1
      }
  }, t.ui.ddmanager = {
      current: null,
      droppables: {
          "default": []
      },
      prepareOffsets: function(e, i) {
          var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
              a = i ? i.type : null,
              r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
          t: for (s = 0; o.length > s; s++)
              if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                  for (n = 0; r.length > n; n++)
                      if (r[n] === o[s].element[0]) {
                          o[s].proportions().height = 0;
                          continue t
                      } o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                      width: o[s].element[0].offsetWidth,
                      height: o[s].element[0].offsetHeight
                  }))
              }
      },
      drop: function(e, i) {
          var s = !1;
          return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
              this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
          }), s
      },
      dragStart: function(e, i) {
          e.element.parentsUntil("body").bind("scroll.droppable", function() {
              e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
          })
      },
      drag: function(e, i) {
          e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
              if (!this.options.disabled && !this.greedyChild && this.visible) {
                  var s, n, o, a = t.ui.intersect(e, this, this.options.tolerance),
                      r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                  r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                      return t.data(this, "ui-droppable").options.scope === n
                  }), o.length && (s = t.data(o[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
              }
          })
      },
      dragStop: function(e, i) {
          e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      }
  }
}(jQuery),
function(t, e) {
  var i = "ui-effects-";
  t.effects = {
          effect: {}
      },
      function(t, e) {
          function i(t, e, i) {
              var s = u[e.type] || {};
              return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
          }

          function s(i) {
              var s = l(),
                  n = s._rgba = [];
              return i = i.toLowerCase(), f(h, function(t, o) {
                  var a, r = o.re.exec(i),
                      h = r && o.parse(r),
                      l = o.space || "rgba";
                  return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
              }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
          }

          function n(t, e, i) {
              return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
          }
          var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
              r = /^([\-+])=\s*(\d+\.?\d*)/,
              h = [{
                  re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  parse: function(t) {
                      return [t[1], t[2], t[3], t[4]]
                  }
              }, {
                  re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  parse: function(t) {
                      return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                  }
              }, {
                  re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                  parse: function(t) {
                      return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                  }
              }, {
                  re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                  parse: function(t) {
                      return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                  }
              }, {
                  re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  space: "hsla",
                  parse: function(t) {
                      return [t[1], t[2] / 100, t[3] / 100, t[4]]
                  }
              }],
              l = t.Color = function(e, i, s, n) {
                  return new t.Color.fn.parse(e, i, s, n)
              },
              c = {
                  rgba: {
                      props: {
                          red: {
                              idx: 0,
                              type: "byte"
                          },
                          green: {
                              idx: 1,
                              type: "byte"
                          },
                          blue: {
                              idx: 2,
                              type: "byte"
                          }
                      }
                  },
                  hsla: {
                      props: {
                          hue: {
                              idx: 0,
                              type: "degrees"
                          },
                          saturation: {
                              idx: 1,
                              type: "percent"
                          },
                          lightness: {
                              idx: 2,
                              type: "percent"
                          }
                      }
                  }
              },
              u = {
                  "byte": {
                      floor: !0,
                      max: 255
                  },
                  percent: {
                      max: 1
                  },
                  degrees: {
                      mod: 360,
                      floor: !0
                  }
              },
              d = l.support = {},
              p = t("<p>")[0],
              f = t.each;
          p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
              e.cache = "_" + t, e.props.alpha = {
                  idx: 3,
                  type: "percent",
                  def: 1
              }
          }), l.fn = t.extend(l.prototype, {
              parse: function(n, a, r, h) {
                  if (n === e) return this._rgba = [null, null, null, null], this;
                  (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                  var u = this,
                      d = t.type(n),
                      p = this._rgba = [];
                  return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                      p[e.idx] = i(n[e.idx], e)
                  }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                      n[e.cache] && (u[e.cache] = n[e.cache].slice())
                  }) : f(c, function(e, s) {
                      var o = s.cache;
                      f(s.props, function(t, e) {
                          if (!u[o] && s.to) {
                              if ("alpha" === t || null == n[t]) return;
                              u[o] = s.to(u._rgba)
                          }
                          u[o][e.idx] = i(n[t], e, !0)
                      }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                  }), this) : e
              },
              is: function(t) {
                  var i = l(t),
                      s = !0,
                      n = this;
                  return f(c, function(t, o) {
                      var a, r = i[o.cache];
                      return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
                          return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                      })), s
                  }), s
              },
              _space: function() {
                  var t = [],
                      e = this;
                  return f(c, function(i, s) {
                      e[s.cache] && t.push(i)
                  }), t.pop()
              },
              transition: function(t, e) {
                  var s = l(t),
                      n = s._space(),
                      o = c[n],
                      a = 0 === this.alpha() ? l("transparent") : this,
                      r = a[o.cache] || o.to(a._rgba),
                      h = r.slice();
                  return s = s[o.cache], f(o.props, function(t, n) {
                      var o = n.idx,
                          a = r[o],
                          l = s[o],
                          c = u[n.type] || {};
                      null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
                  }), this[n](h)
              },
              blend: function(e) {
                  if (1 === this._rgba[3]) return this;
                  var i = this._rgba.slice(),
                      s = i.pop(),
                      n = l(e)._rgba;
                  return l(t.map(i, function(t, e) {
                      return (1 - s) * n[e] + s * t
                  }))
              },
              toRgbaString: function() {
                  var e = "rgba(",
                      i = t.map(this._rgba, function(t, e) {
                          return null == t ? e > 2 ? 1 : 0 : t
                      });
                  return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
              },
              toHslaString: function() {
                  var e = "hsla(",
                      i = t.map(this.hsla(), function(t, e) {
                          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                      });
                  return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
              },
              toHexString: function(e) {
                  var i = this._rgba.slice(),
                      s = i.pop();
                  return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                      return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                  }).join("")
              },
              toString: function() {
                  return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
              }
          }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
              if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
              var e, i, s = t[0] / 255,
                  n = t[1] / 255,
                  o = t[2] / 255,
                  a = t[3],
                  r = Math.max(s, n, o),
                  h = Math.min(s, n, o),
                  l = r - h,
                  c = r + h,
                  u = .5 * c;
              return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
          }, c.hsla.from = function(t) {
              if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
              var e = t[0] / 360,
                  i = t[1],
                  s = t[2],
                  o = t[3],
                  a = .5 >= s ? s * (1 + i) : s + i - s * i,
                  r = 2 * s - a;
              return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
          }, f(c, function(s, n) {
              var o = n.props,
                  a = n.cache,
                  h = n.to,
                  c = n.from;
              l.fn[s] = function(s) {
                  if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                  var n, r = t.type(s),
                      u = "array" === r || "object" === r ? s : arguments,
                      d = this[a].slice();
                  return f(o, function(t, e) {
                      var s = u["object" === r ? t : e.idx];
                      null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                  }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
              }, f(o, function(e, i) {
                  l.fn[e] || (l.fn[e] = function(n) {
                      var o, a = t.type(n),
                          h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                          l = this[h](),
                          c = l[i.idx];
                      return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                  })
              })
          }), l.hook = function(e) {
              var i = e.split(" ");
              f(i, function(e, i) {
                  t.cssHooks[i] = {
                      set: function(e, n) {
                          var o, a, r = "";
                          if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                              if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                  for (a = "backgroundColor" === i ? e.parentNode : e;
                                      ("" === r || "transparent" === r) && a && a.style;) try {
                                      r = t.css(a, "backgroundColor"), a = a.parentNode
                                  } catch (h) {}
                                  n = n.blend(r && "transparent" !== r ? r : "_default")
                              }
                              n = n.toRgbaString()
                          }
                          try {
                              e.style[i] = n
                          } catch (h) {}
                      }
                  }, t.fx.step[i] = function(e) {
                      e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                  }
              })
          }, l.hook(a), t.cssHooks.borderColor = {
              expand: function(t) {
                  var e = {};
                  return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                      e["border" + s + "Color"] = t
                  }), e
              }
          }, o = t.Color.names = {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff"
          }
      }(jQuery),
      function() {
          function i(e) {
              var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                  o = {};
              if (n && n.length && n[0] && n[n[0]])
                  for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
              else
                  for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
              return o
          }

          function s(e, i) {
              var s, n, a = {};
              for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
              return a
          }
          var n = ["add", "remove", "toggle"],
              o = {
                  border: 1,
                  borderBottom: 1,
                  borderColor: 1,
                  borderLeft: 1,
                  borderRight: 1,
                  borderTop: 1,
                  borderWidth: 1,
                  margin: 1,
                  padding: 1
              };
          t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
              t.fx.step[i] = function(t) {
                  ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
              }
          }), t.fn.addBack || (t.fn.addBack = function(t) {
              return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
          }), t.effects.animateClass = function(e, o, a, r) {
              var h = t.speed(o, a, r);
              return this.queue(function() {
                  var o, a = t(this),
                      r = a.attr("class") || "",
                      l = h.children ? a.find("*").addBack() : a;
                  l = l.map(function() {
                      var e = t(this);
                      return {
                          el: e,
                          start: i(this)
                      }
                  }), o = function() {
                      t.each(n, function(t, i) {
                          e[i] && a[i + "Class"](e[i])
                      })
                  }, o(), l = l.map(function() {
                      return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                  }), a.attr("class", r), l = l.map(function() {
                      var e = this,
                          i = t.Deferred(),
                          s = t.extend({}, h, {
                              queue: !1,
                              complete: function() {
                                  i.resolve(e)
                              }
                          });
                      return this.el.animate(this.diff, s), i.promise()
                  }), t.when.apply(t, l.get()).done(function() {
                      o(), t.each(arguments, function() {
                          var e = this.el;
                          t.each(this.diff, function(t) {
                              e.css(t, "")
                          })
                      }), h.complete.call(a[0])
                  })
              })
          }, t.fn.extend({
              addClass: function(e) {
                  return function(i, s, n, o) {
                      return s ? t.effects.animateClass.call(this, {
                          add: i
                      }, s, n, o) : e.apply(this, arguments)
                  }
              }(t.fn.addClass),
              removeClass: function(e) {
                  return function(i, s, n, o) {
                      return arguments.length > 1 ? t.effects.animateClass.call(this, {
                          remove: i
                      }, s, n, o) : e.apply(this, arguments)
                  }
              }(t.fn.removeClass),
              toggleClass: function(i) {
                  return function(s, n, o, a, r) {
                      return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
                          add: s
                      } : {
                          remove: s
                      }, o, a, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                          toggle: s
                      }, n, o, a)
                  }
              }(t.fn.toggleClass),
              switchClass: function(e, i, s, n, o) {
                  return t.effects.animateClass.call(this, {
                      add: i,
                      remove: e
                  }, s, n, o)
              }
          })
      }(),
      function() {
          function s(e, i, s, n) {
              return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                  effect: e
              }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
          }

          function n(e) {
              return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
          }
          t.extend(t.effects, {
              version: "1.10.4",
              save: function(t, e) {
                  for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
              },
              restore: function(t, s) {
                  var n, o;
                  for (o = 0; s.length > o; o++) null !== s[o] && (n = t.data(i + s[o]), n === e && (n = ""), t.css(s[o], n))
              },
              setMode: function(t, e) {
                  return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
              },
              getBaseline: function(t, e) {
                  var i, s;
                  switch (t[0]) {
                      case "top":
                          i = 0;
                          break;
                      case "middle":
                          i = .5;
                          break;
                      case "bottom":
                          i = 1;
                          break;
                      default:
                          i = t[0] / e.height
                  }
                  switch (t[1]) {
                      case "left":
                          s = 0;
                          break;
                      case "center":
                          s = .5;
                          break;
                      case "right":
                          s = 1;
                          break;
                      default:
                          s = t[1] / e.width
                  }
                  return {
                      x: s,
                      y: i
                  }
              },
              createWrapper: function(e) {
                  if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                  var i = {
                          width: e.outerWidth(!0),
                          height: e.outerHeight(!0),
                          "float": e.css("float")
                      },
                      s = t("<div></div>").addClass("ui-effects-wrapper").css({
                          fontSize: "100%",
                          background: "transparent",
                          border: "none",
                          margin: 0,
                          padding: 0
                      }),
                      n = {
                          width: e.width(),
                          height: e.height()
                      },
                      o = document.activeElement;
                  try {
                      o.id
                  } catch (a) {
                      o = document.body
                  }
                  return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                      position: "relative"
                  }), e.css({
                      position: "relative"
                  })) : (t.extend(i, {
                      position: e.css("position"),
                      zIndex: e.css("z-index")
                  }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                      i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                  }), e.css({
                      position: "relative",
                      top: 0,
                      left: 0,
                      right: "auto",
                      bottom: "auto"
                  })), e.css(n), s.css(i).show()
              },
              removeWrapper: function(e) {
                  var i = document.activeElement;
                  return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
              },
              setTransition: function(e, i, s, n) {
                  return n = n || {}, t.each(i, function(t, i) {
                      var o = e.cssUnit(i);
                      o[0] > 0 && (n[i] = o[0] * s + o[1])
                  }), n
              }
          }), t.fn.extend({
              effect: function() {
                  function e(e) {
                      function s() {
                          t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e()
                      }
                      var n = t(this),
                          o = i.complete,
                          r = i.mode;
                      (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : a.call(n[0], i, s)
                  }
                  var i = s.apply(this, arguments),
                      n = i.mode,
                      o = i.queue,
                      a = t.effects.effect[i.effect];
                  return t.fx.off || !a ? n ? this[n](i.duration, i.complete) : this.each(function() {
                      i.complete && i.complete.call(this)
                  }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
              },
              show: function(t) {
                  return function(e) {
                      if (n(e)) return t.apply(this, arguments);
                      var i = s.apply(this, arguments);
                      return i.mode = "show", this.effect.call(this, i)
                  }
              }(t.fn.show),
              hide: function(t) {
                  return function(e) {
                      if (n(e)) return t.apply(this, arguments);
                      var i = s.apply(this, arguments);
                      return i.mode = "hide", this.effect.call(this, i)
                  }
              }(t.fn.hide),
              toggle: function(t) {
                  return function(e) {
                      if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                      var i = s.apply(this, arguments);
                      return i.mode = "toggle", this.effect.call(this, i)
                  }
              }(t.fn.toggle),
              cssUnit: function(e) {
                  var i = this.css(e),
                      s = [];
                  return t.each(["em", "px", "%", "pt"], function(t, e) {
                      i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                  }), s
              }
          })
      }(),
      function() {
          var e = {};
          t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
              e[i] = function(e) {
                  return Math.pow(e, t + 2)
              }
          }), t.extend(e, {
              Sine: function(t) {
                  return 1 - Math.cos(t * Math.PI / 2)
              },
              Circ: function(t) {
                  return 1 - Math.sqrt(1 - t * t)
              },
              Elastic: function(t) {
                  return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
              },
              Back: function(t) {
                  return t * t * (3 * t - 2)
              },
              Bounce: function(t) {
                  for (var e, i = 4;
                      ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                  return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              }
          }), t.each(e, function(e, i) {
              t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                  return 1 - i(1 - t)
              }, t.easing["easeInOut" + e] = function(t) {
                  return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
              }
          })
      }()
}(jQuery),
function(t) {
  var e = /up|down|vertical/,
      i = /up|left|vertical|horizontal/;
  t.effects.effect.blind = function(s, n) {
      var o, a, r, h = t(this),
          l = ["position", "top", "bottom", "left", "right", "height", "width"],
          c = t.effects.setMode(h, s.mode || "hide"),
          u = s.direction || "up",
          d = e.test(u),
          p = d ? "height" : "width",
          f = d ? "top" : "left",
          g = i.test(u),
          m = {},
          v = "show" === c;
      h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), o = t.effects.createWrapper(h).css({
          overflow: "hidden"
      }), a = o[p](), r = parseFloat(o.css(f)) || 0, m[p] = v ? a : 0, g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
          position: "absolute"
      }), m[f] = v ? r : a + r), v && (o.css(p, 0), g || o.css(f, r + a)), o.animate(m, {
          duration: s.duration,
          easing: s.easing,
          queue: !1,
          complete: function() {
              "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.bounce = function(e, i) {
      var s, n, o, a = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          h = t.effects.setMode(a, e.mode || "effect"),
          l = "hide" === h,
          c = "show" === h,
          u = e.direction || "up",
          d = e.distance,
          p = e.times || 5,
          f = 2 * p + (c || l ? 1 : 0),
          g = e.duration / f,
          m = e.easing,
          v = "up" === u || "down" === u ? "top" : "left",
          _ = "up" === u || "left" === u,
          b = a.queue(),
          y = b.length;
      for ((c || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
              opacity: 1
          }, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), l && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m).animate(o, g, m), d = l ? 2 * d : d / 2;
      l && (n = {
          opacity: 0
      }, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m)), a.queue(function() {
          l && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
      }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue()
  }
}(jQuery),
function(t) {
  t.effects.effect.clip = function(e, i) {
      var s, n, o, a = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          h = t.effects.setMode(a, e.mode || "hide"),
          l = "show" === h,
          c = e.direction || "vertical",
          u = "vertical" === c,
          d = u ? "height" : "width",
          p = u ? "top" : "left",
          f = {};
      t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({
          overflow: "hidden"
      }), n = "IMG" === a[0].tagName ? s : a, o = n[d](), l && (n.css(d, 0), n.css(p, o / 2)), f[d] = l ? o : 0, f[p] = l ? 0 : o / 2, n.animate(f, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function() {
              l || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.drop = function(e, i) {
      var s, n = t(this),
          o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
          a = t.effects.setMode(n, e.mode || "hide"),
          r = "show" === a,
          h = e.direction || "left",
          l = "up" === h || "down" === h ? "top" : "left",
          c = "up" === h || "left" === h ? "pos" : "neg",
          u = {
              opacity: r ? 1 : 0
          };
      t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function() {
              "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.explode = function(e, i) {
      function s() {
          b.push(this), b.length === u * d && n()
      }

      function n() {
          p.css({
              visibility: "visible"
          }), t(b).remove(), g || p.hide(), i()
      }
      var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
          d = u,
          p = t(this),
          f = t.effects.setMode(p, e.mode || "hide"),
          g = "show" === f,
          m = p.show().css("visibility", "hidden").offset(),
          v = Math.ceil(p.outerWidth() / d),
          _ = Math.ceil(p.outerHeight() / u),
          b = [];
      for (o = 0; u > o; o++)
          for (h = m.top + o * _, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
              position: "absolute",
              visibility: "visible",
              left: -a * v,
              top: -o * _
          }).parent().addClass("ui-effects-explode").css({
              position: "absolute",
              overflow: "hidden",
              width: v,
              height: _,
              left: r + (g ? l * v : 0),
              top: h + (g ? c * _ : 0),
              opacity: g ? 0 : 1
          }).animate({
              left: r + (g ? 0 : l * v),
              top: h + (g ? 0 : c * _),
              opacity: g ? 1 : 0
          }, e.duration || 500, e.easing, s)
  }
}(jQuery),
function(t) {
  t.effects.effect.fade = function(e, i) {
      var s = t(this),
          n = t.effects.setMode(s, e.mode || "toggle");
      s.animate({
          opacity: n
      }, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.fold = function(e, i) {
      var s, n, o = t(this),
          a = ["position", "top", "bottom", "left", "right", "height", "width"],
          r = t.effects.setMode(o, e.mode || "hide"),
          h = "show" === r,
          l = "hide" === r,
          c = e.size || 15,
          u = /([0-9]+)%/.exec(c),
          d = !!e.horizFirst,
          p = h !== d,
          f = p ? ["width", "height"] : ["height", "width"],
          g = e.duration / 2,
          m = {},
          v = {};
      t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({
          overflow: "hidden"
      }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
          height: 0,
          width: c
      } : {
          height: c,
          width: 0
      }), m[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
          l && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.highlight = function(e, i) {
      var s = t(this),
          n = ["backgroundImage", "backgroundColor", "opacity"],
          o = t.effects.setMode(s, e.mode || "show"),
          a = {
              backgroundColor: s.css("backgroundColor")
          };
      "hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({
          backgroundImage: "none",
          backgroundColor: e.color || "#ffff99"
      }).animate(a, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function() {
              "hide" === o && s.hide(), t.effects.restore(s, n), i()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.pulsate = function(e, i) {
      var s, n = t(this),
          o = t.effects.setMode(n, e.mode || "show"),
          a = "show" === o,
          r = "hide" === o,
          h = a || "hide" === o,
          l = 2 * (e.times || 5) + (h ? 1 : 0),
          c = e.duration / l,
          u = 0,
          d = n.queue(),
          p = d.length;
      for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++) n.animate({
          opacity: u
      }, c, e.easing), u = 1 - u;
      n.animate({
          opacity: u
      }, c, e.easing), n.queue(function() {
          r && n.hide(), i()
      }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
  }
}(jQuery),
function(t) {
  t.effects.effect.puff = function(e, i) {
      var s = t(this),
          n = t.effects.setMode(s, e.mode || "hide"),
          o = "hide" === n,
          a = parseInt(e.percent, 10) || 150,
          r = a / 100,
          h = {
              height: s.height(),
              width: s.width(),
              outerHeight: s.outerHeight(),
              outerWidth: s.outerWidth()
          };
      t.extend(e, {
          effect: "scale",
          queue: !1,
          fade: !0,
          mode: n,
          complete: i,
          percent: o ? a : 100,
          from: o ? h : {
              height: h.height * r,
              width: h.width * r,
              outerHeight: h.outerHeight * r,
              outerWidth: h.outerWidth * r
          }
      }), s.effect(e)
  }, t.effects.effect.scale = function(e, i) {
      var s = t(this),
          n = t.extend(!0, {}, e),
          o = t.effects.setMode(s, e.mode || "effect"),
          a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
          r = e.direction || "both",
          h = e.origin,
          l = {
              height: s.height(),
              width: s.width(),
              outerHeight: s.outerHeight(),
              outerWidth: s.outerWidth()
          },
          c = {
              y: "horizontal" !== r ? a / 100 : 1,
              x: "vertical" !== r ? a / 100 : 1
          };
      n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
          height: 0,
          width: 0,
          outerHeight: 0,
          outerWidth: 0
      } : l), n.to = {
          height: l.height * c.y,
          width: l.width * c.x,
          outerHeight: l.outerHeight * c.y,
          outerWidth: l.outerWidth * c.x
      }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
  }, t.effects.effect.size = function(e, i) {
      var s, n, o, a = t(this),
          r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
          h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
          l = ["width", "height", "overflow"],
          c = ["fontSize"],
          u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
          d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
          p = t.effects.setMode(a, e.mode || "effect"),
          f = e.restore || "effect" !== p,
          g = e.scale || "both",
          m = e.origin || ["middle", "center"],
          v = a.css("position"),
          _ = f ? r : h,
          b = {
              height: 0,
              width: 0,
              outerHeight: 0,
              outerWidth: 0
          };
      "show" === p && a.show(), s = {
          height: a.height(),
          width: a.width(),
          outerHeight: a.outerHeight(),
          outerWidth: a.outerWidth()
      }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)), o = {
          from: {
              y: a.from.height / s.height,
              x: a.from.width / s.width
          },
          to: {
              y: a.to.height / s.height,
              x: a.to.width / s.width
          }
      }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(l), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), m && (n = t.effects.getBaseline(m, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), a.find("*[width]").each(function() {
          var i = t(this),
              s = {
                  height: i.height(),
                  width: i.width(),
                  outerHeight: i.outerHeight(),
                  outerWidth: i.outerWidth()
              };
          f && t.effects.save(i, l), i.from = {
              height: s.height * o.from.y,
              width: s.width * o.from.x,
              outerHeight: s.outerHeight * o.from.y,
              outerWidth: s.outerWidth * o.from.x
          }, i.to = {
              height: s.height * o.to.y,
              width: s.width * o.to.x,
              outerHeight: s.height * o.to.y,
              outerWidth: s.width * o.to.x
          }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
              f && t.effects.restore(i, l)
          })
      })), a.animate(a.to, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function() {
              0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({
                  position: "relative",
                  top: a.to.top,
                  left: a.to.left
              }) : t.each(["top", "left"], function(t, e) {
                  a.css(e, function(e, i) {
                      var s = parseInt(i, 10),
                          n = t ? a.to.left : a.to.top;
                      return "auto" === i ? n + "px" : s + n + "px"
                  })
              })), t.effects.removeWrapper(a), i()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.shake = function(e, i) {
      var s, n = t(this),
          o = ["position", "top", "bottom", "left", "right", "height", "width"],
          a = t.effects.setMode(n, e.mode || "effect"),
          r = e.direction || "left",
          h = e.distance || 20,
          l = e.times || 3,
          c = 2 * l + 1,
          u = Math.round(e.duration / c),
          d = "up" === r || "down" === r ? "top" : "left",
          p = "up" === r || "left" === r,
          f = {},
          g = {},
          m = {},
          v = n.queue(),
          _ = v.length;
      for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
      n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
          "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
      }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
  }
}(jQuery),
function(t) {
  t.effects.effect.slide = function(e, i) {
      var s, n = t(this),
          o = ["position", "top", "bottom", "left", "right", "width", "height"],
          a = t.effects.setMode(n, e.mode || "show"),
          r = "show" === a,
          h = e.direction || "left",
          l = "up" === h || "down" === h ? "top" : "left",
          c = "up" === h || "left" === h,
          u = {};
      t.effects.save(n, o), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
          overflow: "hidden"
      }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function() {
              "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
          }
      })
  }
}(jQuery),
function(t) {
  t.effects.effect.transfer = function(e, i) {
      var s = t(this),
          n = t(e.to),
          o = "fixed" === n.css("position"),
          a = t("body"),
          r = o ? a.scrollTop() : 0,
          h = o ? a.scrollLeft() : 0,
          l = n.offset(),
          c = {
              top: l.top - r,
              left: l.left - h,
              height: n.innerHeight(),
              width: n.innerWidth()
          },
          u = s.offset(),
          d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
              top: u.top - r,
              left: u.left - h,
              height: s.innerHeight(),
              width: s.innerWidth(),
              position: o ? "fixed" : "absolute"
          }).animate(c, e.duration, e.easing, function() {
              d.remove(), i()
          })
  }
}(jQuery),
function(t) {
  t.widget("ui.menu", {
      version: "1.10.4",
      defaultElement: "<ul>",
      delay: 300,
      options: {
          icons: {
              submenu: "ui-icon-carat-1-e"
          },
          menus: "ul",
          position: {
              my: "left top",
              at: "right top"
          },
          role: "menu",
          blur: null,
          focus: null,
          select: null
      },
      _create: function() {
          this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
              role: this.options.role,
              tabIndex: 0
          }).bind("click" + this.eventNamespace, t.proxy(function(t) {
              this.options.disabled && t.preventDefault()
          }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
              "mousedown .ui-menu-item > a": function(t) {
                  t.preventDefault()
              },
              "click .ui-state-disabled > a": function(t) {
                  t.preventDefault()
              },
              "click .ui-menu-item:has(a)": function(e) {
                  var i = t(e.target).closest(".ui-menu-item");
                  !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
              },
              "mouseenter .ui-menu-item": function(e) {
                  var i = t(e.currentTarget);
                  i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function(t, e) {
                  var i = this.active || this.element.children(".ui-menu-item").eq(0);
                  e || this.focus(t, i)
              },
              blur: function(e) {
                  this._delay(function() {
                      t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                  })
              },
              keydown: "_keydown"
          }), this.refresh(), this._on(this.document, {
              click: function(e) {
                  t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
              }
          })
      },
      _destroy: function() {
          this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
              var e = t(this);
              e.data("ui-menu-submenu-carat") && e.remove()
          }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
      },
      _keydown: function(e) {
          function i(t) {
              return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
          }
          var s, n, o, a, r, h = !0;
          switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                  this.previousPage(e);
                  break;
              case t.ui.keyCode.PAGE_DOWN:
                  this.nextPage(e);
                  break;
              case t.ui.keyCode.HOME:
                  this._move("first", "first", e);
                  break;
              case t.ui.keyCode.END:
                  this._move("last", "last", e);
                  break;
              case t.ui.keyCode.UP:
                  this.previous(e);
                  break;
              case t.ui.keyCode.DOWN:
                  this.next(e);
                  break;
              case t.ui.keyCode.LEFT:
                  this.collapse(e);
                  break;
              case t.ui.keyCode.RIGHT:
                  this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                  break;
              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                  this._activate(e);
                  break;
              case t.ui.keyCode.ESCAPE:
                  this.collapse(e);
                  break;
              default:
                  h = !1, n = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === n ? a = !0 : o = n + o, r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                      return r.test(t(this).children("a").text())
                  }), s = a && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (o = String.fromCharCode(e.keyCode), r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                      return r.test(t(this).children("a").text())
                  })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                      delete this.previousFilter
                  }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
          }
          h && e.preventDefault()
      },
      _activate: function(t) {
          this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
      },
      refresh: function() {
          var e, i = this.options.icons.submenu,
              s = this.element.find(this.options.menus);
          this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false"
          }).each(function() {
              var e = t(this),
                  s = e.prev("a"),
                  n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
              s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
          }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
              tabIndex: -1,
              role: this._itemRole()
          }), e.children(":not(.ui-menu-item)").each(function() {
              var e = t(this);
              /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
          }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
      },
      _itemRole: function() {
          return {
              menu: "menuitem",
              listbox: "option"
          } [this.options.role]
      },
      _setOption: function(t, e) {
          "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
      },
      focus: function(t, e) {
          var i, s;
          this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
              this._close()
          }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
              item: e
          })
      },
      _scrollIntoView: function(e) {
          var i, s, n, o, a, r;
          this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
      },
      blur: function(t, e) {
          e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
              item: this.active
          }))
      },
      _startOpening: function(t) {
          clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
              this._close(), this._open(t)
          }, this.delay))
      },
      _open: function(e) {
          var i = t.extend({
              of: this.active
          }, this.options.position);
          clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
      },
      collapseAll: function(e, i) {
          clearTimeout(this.timer), this.timer = this._delay(function() {
              var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
              s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
          }, this.delay)
      },
      _close: function(t) {
          t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
      },
      collapse: function(t) {
          var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e))
      },
      expand: function(t) {
          var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
          e && e.length && (this._open(e.parent()), this._delay(function() {
              this.focus(t, e)
          }))
      },
      next: function(t) {
          this._move("next", "first", t)
      },
      previous: function(t) {
          this._move("prev", "last", t)
      },
      isFirstItem: function() {
          return this.active && !this.active.prevAll(".ui-menu-item").length
      },
      isLastItem: function() {
          return this.active && !this.active.nextAll(".ui-menu-item").length
      },
      _move: function(t, e, i) {
          var s;
          this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
      },
      nextPage: function(e) {
          var i, s, n;
          return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
              return i = t(this), 0 > i.offset().top - s - n
          }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
      },
      previousPage: function(e) {
          var i, s, n;
          return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
              return i = t(this), i.offset().top - s + n > 0
          }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
      },
      _hasScroll: function() {
          return this.element.outerHeight() < this.element.prop("scrollHeight")
      },
      select: function(e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = {
              item: this.active
          };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
      }
  })
}(jQuery),
function(t, e) {
  t.widget("ui.progressbar", {
      version: "1.10.4",
      options: {
          max: 100,
          value: 0,
          change: null,
          complete: null
      },
      min: 0,
      _create: function() {
          this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
              role: "progressbar",
              "aria-valuemin": this.min
          }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
      },
      _destroy: function() {
          this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
      },
      value: function(t) {
          return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
      },
      _constrainedValue: function(t) {
          return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
      },
      _setOptions: function(t) {
          var e = t.value;
          delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
      },
      _setOption: function(t, e) {
          "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
      },
      _percentage: function() {
          return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
      },
      _refreshValue: function() {
          var e = this.options.value,
              i = this._percentage();
          this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
              "aria-valuemax": this.options.max,
              "aria-valuenow": e
          }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
      }
  })
}(jQuery),
function(t) {
  function e(t) {
      return parseInt(t, 10) || 0
  }

  function i(t) {
      return !isNaN(parseInt(t, 10))
  }
  t.widget("ui.resizable", t.ui.mouse, {
      version: "1.10.4",
      widgetEventPrefix: "resize",
      options: {
          alsoResize: !1,
          animate: !1,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: !1,
          autoHide: !1,
          containment: !1,
          ghost: !1,
          grid: !1,
          handles: "e,s,se",
          helper: !1,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null
      },
      _create: function() {
          var e, i, s, n, o, a = this,
              r = this.options;
          if (this.element.addClass("ui-resizable"), t.extend(this, {
                  _aspectRatio: !!r.aspectRatio,
                  aspectRatio: r.aspectRatio,
                  originalElement: this.element,
                  _proportionallyResizeElements: [],
                  _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
              }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left")
              })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                  marginLeft: this.originalElement.css("marginLeft"),
                  marginTop: this.originalElement.css("marginTop"),
                  marginRight: this.originalElement.css("marginRight"),
                  marginBottom: this.originalElement.css("marginBottom")
              }), this.originalElement.css({
                  marginLeft: 0,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0
              }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block"
              })), this.originalElement.css({
                  margin: this.originalElement.css("margin")
              }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw"
              } : "e,s,se"), this.handles.constructor === String)
              for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({
                  zIndex: r.zIndex
              }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
          this._renderAxis = function(e) {
              var i, s, n, o;
              e = e || this.element;
              for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length
          }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
              a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
          }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
              r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
          }).mouseleave(function() {
              r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
          })), this._mouseInit()
      },
      _destroy: function() {
          this._mouseDestroy();
          var e, i = function(e) {
              t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
          };
          return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
              position: e.css("position"),
              width: e.outerWidth(),
              height: e.outerHeight(),
              top: e.css("top"),
              left: e.css("left")
          }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
      },
      _mouseCapture: function(e) {
          var i, s, n = !1;
          for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
          return !this.options.disabled && n
      },
      _mouseStart: function(i) {
          var s, n, o, a = this.options,
              r = this.element.position(),
              h = this.element;
          return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
              position: "absolute",
              top: h.css("top"),
              left: h.css("left")
          }) : h.is(".ui-draggable") && h.css({
              position: "absolute",
              top: r.top,
              left: r.left
          }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), a.containment && (s += t(a.containment).scrollLeft() || 0, n += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
              left: s,
              top: n
          }, this.size = this._helper ? {
              width: this.helper.width(),
              height: this.helper.height()
          } : {
              width: h.width(),
              height: h.height()
          }, this.originalSize = this._helper ? {
              width: h.outerWidth(),
              height: h.outerHeight()
          } : {
              width: h.width(),
              height: h.height()
          }, this.originalPosition = {
              left: s,
              top: n
          }, this.sizeDiff = {
              width: h.outerWidth() - h.width(),
              height: h.outerHeight() - h.height()
          }, this.originalMousePosition = {
              left: i.pageX,
              top: i.pageY
          }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
      },
      _mouseDrag: function(e) {
          var i, s = this.helper,
              n = {},
              o = this.originalMousePosition,
              a = this.axis,
              r = this.position.top,
              h = this.position.left,
              l = this.size.width,
              c = this.size.height,
              u = e.pageX - o.left || 0,
              d = e.pageY - o.top || 0,
              p = this._change[a];
          return !!p && (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1)
      },
      _mouseStop: function(e) {
          this.resizing = !1;
          var i, s, n, o, a, r, h, l = this.options,
              c = this;
          return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
              width: c.helper.width() - o,
              height: c.helper.height() - n
          }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
              top: h,
              left: r
          })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
      },
      _updateVirtualBoundaries: function(t) {
          var e, s, n, o, a, r = this.options;
          a = {
              minWidth: i(r.minWidth) ? r.minWidth : 0,
              maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
              minHeight: i(r.minHeight) ? r.minHeight : 0,
              maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
          }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, s = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), a.maxWidth > s && (a.maxWidth = s), a.maxHeight > o && (a.maxHeight = o)), this._vBoundaries = a
      },
      _updateCache: function(t) {
          this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
      },
      _updateRatio: function(t) {
          var e = this.position,
              s = this.size,
              n = this.axis;
          return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
      },
      _respectSize: function(t) {
          var e = this._vBoundaries,
              s = this.axis,
              n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
              o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
              a = i(t.width) && e.minWidth && e.minWidth > t.width,
              r = i(t.height) && e.minHeight && e.minHeight > t.height,
              h = this.originalPosition.left + this.originalSize.width,
              l = this.position.top + this.size.height,
              c = /sw|nw|w/.test(s),
              u = /nw|ne|n/.test(s);
          return a && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), o && (t.height = e.maxHeight), a && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), o && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
      },
      _proportionallyResize: function() {
          if (this._proportionallyResizeElements.length) {
              var t, e, i, s, n, o = this.helper || this.element;
              for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                  if (n = this._proportionallyResizeElements[t], !this.borderDif)
                      for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                  n.css({
                      height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                      width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                  })
              }
          }
      },
      _renderProxy: function() {
          var e = this.element,
              i = this.options;
          this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
              width: this.element.outerWidth() - 1,
              height: this.element.outerHeight() - 1,
              position: "absolute",
              left: this.elementOffset.left + "px",
              top: this.elementOffset.top + "px",
              zIndex: ++i.zIndex
          }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
      },
      _change: {
          e: function(t, e) {
              return {
                  width: this.originalSize.width + e
              }
          },
          w: function(t, e) {
              var i = this.originalSize,
                  s = this.originalPosition;
              return {
                  left: s.left + e,
                  width: i.width - e
              }
          },
          n: function(t, e, i) {
              var s = this.originalSize,
                  n = this.originalPosition;
              return {
                  top: n.top + i,
                  height: s.height - i
              }
          },
          s: function(t, e, i) {
              return {
                  height: this.originalSize.height + i
              }
          },
          se: function(e, i, s) {
              return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
          },
          sw: function(e, i, s) {
              return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
          },
          ne: function(e, i, s) {
              return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
          },
          nw: function(e, i, s) {
              return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
          }
      },
      _propagate: function(e, i) {
          t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
      },
      plugins: {},
      ui: function() {
          return {
              originalElement: this.originalElement,
              element: this.element,
              helper: this.helper,
              position: this.position,
              size: this.size,
              originalSize: this.originalSize,
              originalPosition: this.originalPosition
          }
      }
  }), t.ui.plugin.add("resizable", "animate", {
      stop: function(e) {
          var i = t(this).data("ui-resizable"),
              s = i.options,
              n = i._proportionallyResizeElements,
              o = n.length && /textarea/i.test(n[0].nodeName),
              a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
              r = o ? 0 : i.sizeDiff.width,
              h = {
                  width: i.size.width - r,
                  height: i.size.height - a
              },
              l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
              c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(h, c && l ? {
              top: c,
              left: l
          } : {}), {
              duration: s.animateDuration,
              easing: s.animateEasing,
              step: function() {
                  var s = {
                      width: parseInt(i.element.css("width"), 10),
                      height: parseInt(i.element.css("height"), 10),
                      top: parseInt(i.element.css("top"), 10),
                      left: parseInt(i.element.css("left"), 10)
                  };
                  n && n.length && t(n[0]).css({
                      width: s.width,
                      height: s.height
                  }), i._updateCache(s), i._propagate("resize", e)
              }
          })
      }
  }), t.ui.plugin.add("resizable", "containment", {
      start: function() {
          var i, s, n, o, a, r, h, l = t(this).data("ui-resizable"),
              c = l.options,
              u = l.element,
              d = c.containment,
              p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
          p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
              left: 0,
              top: 0
          }, l.containerPosition = {
              left: 0,
              top: 0
          }, l.parentData = {
              element: t(document),
              left: 0,
              top: 0,
              width: t(document).width(),
              height: t(document).height() || document.body.parentNode.scrollHeight
          }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
              s[t] = e(i.css("padding" + n))
          }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
              height: i.innerHeight() - s[3],
              width: i.innerWidth() - s[1]
          }, n = l.containerOffset, o = l.containerSize.height, a = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a, h = t.ui.hasScroll(p) ? p.scrollHeight : o, l.parentData = {
              element: p,
              left: n.left,
              top: n.top,
              width: r,
              height: h
          }))
      },
      resize: function(e) {
          var i, s, n, o, a = t(this).data("ui-resizable"),
              r = a.options,
              h = a.containerOffset,
              l = a.position,
              c = a._aspectRatio || e.shiftKey,
              u = {
                  top: 0,
                  left: 0
              },
              d = a.containerElement;
          d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? h.top : 0), a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top, i = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width), s = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - h.top) + a.sizeDiff.height), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o && (i -= Math.abs(a.parentData.left)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio))
      },
      stop: function() {
          var e = t(this).data("ui-resizable"),
              i = e.options,
              s = e.containerOffset,
              n = e.containerPosition,
              o = e.containerElement,
              a = t(e.helper),
              r = a.offset(),
              h = a.outerWidth() - e.sizeDiff.width,
              l = a.outerHeight() - e.sizeDiff.height;
          e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
              left: r.left - n.left - s.left,
              width: h,
              height: l
          }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
              left: r.left - n.left - s.left,
              width: h,
              height: l
          })
      }
  }), t.ui.plugin.add("resizable", "alsoResize", {
      start: function() {
          var e = t(this).data("ui-resizable"),
              i = e.options,
              s = function(e) {
                  t(e).each(function() {
                      var e = t(this);
                      e.data("ui-resizable-alsoresize", {
                          width: parseInt(e.width(), 10),
                          height: parseInt(e.height(), 10),
                          left: parseInt(e.css("left"), 10),
                          top: parseInt(e.css("top"), 10)
                      })
                  })
              };
          "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
              s(t)
          })
      },
      resize: function(e, i) {
          var s = t(this).data("ui-resizable"),
              n = s.options,
              o = s.originalSize,
              a = s.originalPosition,
              r = {
                  height: s.size.height - o.height || 0,
                  width: s.size.width - o.width || 0,
                  top: s.position.top - a.top || 0,
                  left: s.position.left - a.left || 0
              },
              h = function(e, s) {
                  t(e).each(function() {
                      var e = t(this),
                          n = t(this).data("ui-resizable-alsoresize"),
                          o = {},
                          a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                      t.each(a, function(t, e) {
                          var i = (n[e] || 0) + (r[e] || 0);
                          i && i >= 0 && (o[e] = i || null)
                      }), e.css(o)
                  })
              };
          "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
              h(t, e)
          })
      },
      stop: function() {
          t(this).removeData("resizable-alsoresize")
      }
  }), t.ui.plugin.add("resizable", "ghost", {
      start: function() {
          var e = t(this).data("ui-resizable"),
              i = e.options,
              s = e.size;
          e.ghost = e.originalElement.clone(), e.ghost.css({
              opacity: .25,
              display: "block",
              position: "relative",
              height: s.height,
              width: s.width,
              margin: 0,
              left: 0,
              top: 0
          }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
      },
      resize: function() {
          var e = t(this).data("ui-resizable");
          e.ghost && e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width
          })
      },
      stop: function() {
          var e = t(this).data("ui-resizable");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
      }
  }), t.ui.plugin.add("resizable", "grid", {
      resize: function() {
          var e = t(this).data("ui-resizable"),
              i = e.options,
              s = e.size,
              n = e.originalSize,
              o = e.originalPosition,
              a = e.axis,
              r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
              h = r[0] || 1,
              l = r[1] || 1,
              c = Math.round((s.width - n.width) / h) * h,
              u = Math.round((s.height - n.height) / l) * l,
              d = n.width + c,
              p = n.height + u,
              f = i.maxWidth && d > i.maxWidth,
              g = i.maxHeight && p > i.maxHeight,
              m = i.minWidth && i.minWidth > d,
              v = i.minHeight && i.minHeight > p;
          i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = o.top - u) : (e.size.height = l, e.position.top = o.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = o.left - c) : (e.size.width = h, e.position.left = o.left + n.width - h))
      }
  })
}(jQuery),
function(t) {
  t.widget("ui.selectable", t.ui.mouse, {
      version: "1.10.4",
      options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null
      },
      _create: function() {
          var e, i = this;
          this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
              e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                  var e = t(this),
                      i = e.offset();
                  t.data(this, "selectable-item", {
                      element: this,
                      $element: e,
                      left: i.left,
                      top: i.top,
                      right: i.left + e.outerWidth(),
                      bottom: i.top + e.outerHeight(),
                      startselected: !1,
                      selected: e.hasClass("ui-selected"),
                      selecting: e.hasClass("ui-selecting"),
                      unselecting: e.hasClass("ui-unselecting")
                  })
              })
          }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
      },
      _destroy: function() {
          this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
      },
      _mouseStart: function(e) {
          var i = this,
              s = this.options;
          this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
              left: e.pageX,
              top: e.pageY,
              width: 0,
              height: 0
          }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
              var s = t.data(this, "selectable-item");
              s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                  unselecting: s.element
              }))
          }), t(e.target).parents().addBack().each(function() {
              var s, n = t.data(this, "selectable-item");
              return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                  selecting: n.element
              }) : i._trigger("unselecting", e, {
                  unselecting: n.element
              }), !1) : void 0
          }))
      },
      _mouseDrag: function(e) {
          if (this.dragged = !0, !this.options.disabled) {
              var i, s = this,
                  n = this.options,
                  o = this.opos[0],
                  a = this.opos[1],
                  r = e.pageX,
                  h = e.pageY;
              return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
                  left: o,
                  top: a,
                  width: r - o,
                  height: h - a
              }), this.selectees.each(function() {
                  var i = t.data(this, "selectable-item"),
                      l = !1;
                  i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || o > i.right || i.top > h || a > i.bottom) : "fit" === n.tolerance && (l = i.left > o && r > i.right && i.top > a && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                      selecting: i.element
                  }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                      unselecting: i.element
                  }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                      unselecting: i.element
                  })))))
              }), !1
          }
      },
      _mouseStop: function(e) {
          var i = this;
          return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
              var s = t.data(this, "selectable-item");
              s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                  unselected: s.element
              })
          }), t(".ui-selecting", this.element[0]).each(function() {
              var s = t.data(this, "selectable-item");
              s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                  selected: s.element
              })
          }), this._trigger("stop", e), this.helper.remove(), !1
      }
  })
}(jQuery),
function(t) {
  var e = 5;
  t.widget("ui.slider", t.ui.mouse, {
      version: "1.10.4",
      widgetEventPrefix: "slide",
      options: {
          animate: !1,
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null
      },
      _create: function() {
          this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
      },
      _refresh: function() {
          this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
      },
      _createHandles: function() {
          var e, i, s = this.options,
              n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
              o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
              a = [];
          for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
          this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
              t(this).data("ui-slider-handle-index", e)
          })
      },
      _createRange: function() {
          var e = this.options,
              i = "";
          e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
              left: "",
              bottom: ""
          }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function() {
          var t = this.handles.add(this.range).filter("a");
          this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
      },
      _destroy: function() {
          this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
      },
      _mouseCapture: function(e) {
          var i, s, n, o, a, r, h, l, c = this,
              u = this.options;
          return !u.disabled && (this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight()
          }, this.elementOffset = this.element.offset(), i = {
              x: e.pageX,
              y: e.pageY
          }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
              var i = Math.abs(s - c.values(e));
              (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
          }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
              left: 0,
              top: 0
          } : {
              left: e.pageX - h.left - o.width() / 2,
              top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
          }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
      },
      _mouseStart: function() {
          return !0
      },
      _mouseDrag: function(t) {
          var e = {
                  x: t.pageX,
                  y: t.pageY
              },
              i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1
      },
      _mouseStop: function(t) {
          return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
      },
      _detectOrientation: function() {
          this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function(t) {
          var e, i, s, n, o;
          return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
      },
      _start: function(t, e) {
          var i = {
              handle: this.handles[e],
              value: this.value()
          };
          return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
      },
      _slide: function(t, e, i) {
          var s, n, o;
          this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
              handle: this.handles[e],
              value: i,
              values: n
          }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
              handle: this.handles[e],
              value: i
          }), o !== !1 && this.value(i))
      },
      _stop: function(t, e) {
          var i = {
              handle: this.handles[e],
              value: this.value()
          };
          this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
      },
      _change: function(t, e) {
          if (!this._keySliding && !this._mouseSliding) {
              var i = {
                  handle: this.handles[e],
                  value: this.value()
              };
              this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
          }
      },
      value: function(t) {
          return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
      },
      values: function(e, i) {
          var s, n, o;
          if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
          for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
          this._refreshValue()
      },
      _setOption: function(e, i) {
          var s, n = 0;
          switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
              case "orientation":
                  this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                  break;
              case "value":
                  this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                  break;
              case "values":
                  for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                  this._animateOff = !1;
                  break;
              case "min":
              case "max":
                  this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                  break;
              case "range":
                  this._animateOff = !0, this._refresh(), this._animateOff = !1
          }
      },
      _value: function() {
          var t = this.options.value;
          return t = this._trimAlignValue(t)
      },
      _values: function(t) {
          var e, i, s;
          if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
          if (this.options.values && this.options.values.length) {
              for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
              return i
          }
          return []
      },
      _trimAlignValue: function(t) {
          if (this._valueMin() >= t) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
              i = (t - this._valueMin()) % e,
              s = t - i;
          return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
      },
      _valueMin: function() {
          return this.options.min
      },
      _valueMax: function() {
          return this.options.max
      },
      _refreshValue: function() {
          var e, i, s, n, o, a = this.options.range,
              r = this.options,
              h = this,
              l = !this._animateOff && r.animate,
              c = {};
          this.options.values && this.options.values.length ? this.handles.each(function(s) {
              i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                  left: i + "%"
              }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                  width: i - e + "%"
              }, {
                  queue: !1,
                  duration: r.animate
              })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                  bottom: i + "%"
              }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                  height: i - e + "%"
              }, {
                  queue: !1,
                  duration: r.animate
              }))), e = i
          }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
              width: i + "%"
          }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
              width: 100 - i + "%"
          }, {
              queue: !1,
              duration: r.animate
          }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
              height: i + "%"
          }, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
              height: 100 - i + "%"
          }, {
              queue: !1,
              duration: r.animate
          }))
      },
      _handleEvents: {
          keydown: function(i) {
              var s, n, o, a, r = t(i.target).data("ui-slider-handle-index");
              switch (i.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                      if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
              }
              switch (a = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                  case t.ui.keyCode.HOME:
                      o = this._valueMin();
                      break;
                  case t.ui.keyCode.END:
                      o = this._valueMax();
                      break;
                  case t.ui.keyCode.PAGE_UP:
                      o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                      break;
                  case t.ui.keyCode.PAGE_DOWN:
                      o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                      break;
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                      if (n === this._valueMax()) return;
                      o = this._trimAlignValue(n + a);
                      break;
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                      if (n === this._valueMin()) return;
                      o = this._trimAlignValue(n - a)
              }
              this._slide(i, r, o)
          },
          click: function(t) {
              t.preventDefault()
          },
          keyup: function(e) {
              var i = t(e.target).data("ui-slider-handle-index");
              this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
          }
      }
  })
}(jQuery),
function(t) {
  function e(t, e, i) {
      return t > e && e + i > t
  }

  function i(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
  }
  t.widget("ui.sortable", t.ui.mouse, {
      version: "1.10.4",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null
      },
      _create: function() {
          var t = this.options;
          this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || i(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
      },
      _destroy: function() {
          this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
          for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
          return this
      },
      _setOption: function(e, i) {
          "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
      },
      _mouseCapture: function(e, i) {
          var s = null,
              n = !1,
              o = this;
          return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
              return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
          }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
              this === e.target && (n = !0)
          }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
      },
      _mouseStart: function(e, i, s) {
          var n, o, a = this.options;
          if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                  top: this.offset.top - this.margins.top,
                  left: this.offset.left - this.margins.left
              }, t.extend(this.offset, {
                  click: {
                      left: e.pageX - this.offset.left,
                      top: e.pageY - this.offset.top
                  },
                  parent: this._getParentOffset(),
                  relative: this._getRelativeOffset()
              }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                  prev: this.currentItem.prev()[0],
                  parent: this.currentItem.parent()[0]
              }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
              for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
          return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
      },
      _mouseDrag: function(e) {
          var i, s, n, o, a = this.options,
              r = !1;
          for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
              if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                  if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                  this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                  break
              } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
      },
      _mouseStop: function(e, i) {
          if (e) {
              if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                  var s = this,
                      n = this.placeholder.offset(),
                      o = this.options.axis,
                      a = {};
                  o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                      s._clear(e)
                  })
              } else this._clear(e, i);
              return !1
          }
      },
      cancel: function() {
          if (this.dragging) {
              this._mouseUp({
                  target: null
              }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
              for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
          }
          return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null
          }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
      },
      serialize: function(e) {
          var i = this._getItemsAsjQuery(e && e.connected),
              s = [];
          return e = e || {}, t(i).each(function() {
              var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
              i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
          }), !s.length && e.key && s.push(e.key + "="), s.join("&")
      },
      toArray: function(e) {
          var i = this._getItemsAsjQuery(e && e.connected),
              s = [];
          return e = e || {}, i.each(function() {
              s.push(t(e.item || this).attr(e.attribute || "id") || "")
          }), s
      },
      _intersectsWith: function(t) {
          var e = this.positionAbs.left,
              i = e + this.helperProportions.width,
              s = this.positionAbs.top,
              n = s + this.helperProportions.height,
              o = t.left,
              a = o + t.width,
              r = t.top,
              h = r + t.height,
              l = this.offset.click.top,
              c = this.offset.click.left,
              u = "x" === this.options.axis || s + l > r && h > s + l,
              d = "y" === this.options.axis || e + c > o && a > e + c,
              p = u && d;
          return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
      },
      _intersectsWithPointer: function(t) {
          var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
              s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
              n = i && s,
              o = this._getDragVerticalDirection(),
              a = this._getDragHorizontalDirection();
          return !!n && (this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
      },
      _intersectsWithSides: function(t) {
          var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
              s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
              n = this._getDragVerticalDirection(),
              o = this._getDragHorizontalDirection();
          return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
      },
      _getDragVerticalDirection: function() {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== t && (t > 0 ? "down" : "up")
      },
      _getDragHorizontalDirection: function() {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== t && (t > 0 ? "right" : "left")
      },
      refresh: function(t) {
          return this._refreshItems(t), this.refreshPositions(), this
      },
      _connectWith: function() {
          var t = this.options;
          return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
      },
      _getItemsAsjQuery: function(e) {
          function i() {
              r.push(this)
          }
          var s, n, o, a, r = [],
              h = [],
              l = this._connectWith();
          if (l && e)
              for (s = l.length - 1; s >= 0; s--)
                  for (o = t(l[s]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
          for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem
              }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
          return t(r)
      },
      _removeCurrentsFromItems: function() {
          var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = t.grep(this.items, function(t) {
              for (var i = 0; e.length > i; i++)
                  if (e[i] === t.item[0]) return !1;
              return !0
          })
      },
      _refreshItems: function(e) {
          this.items = [], this.containers = [this];
          var i, s, n, o, a, r, h, l, c = this.items,
              u = [
                  [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                      item: this.currentItem
                  }) : t(this.options.items, this.element), this]
              ],
              d = this._connectWith();
          if (d && this.ready)
              for (i = d.length - 1; i >= 0; i--)
                  for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                      item: this.currentItem
                  }) : t(o.options.items, o.element), o]), this.containers.push(o));
          for (i = u.length - 1; i >= 0; i--)
              for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                  item: h,
                  instance: a,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0
              })
      },
      refreshPositions: function(e) {
          this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
          var i, s, n, o;
          for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()),
              o = n.offset(), s.left = o.left, s.top = o.top);
          if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
          else
              for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
          return this
      },
      _createPlaceholder: function(e) {
          e = e || this;
          var i, s = e.options;
          s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
              element: function() {
                  var s = e.currentItem[0].nodeName.toLowerCase(),
                      n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                  return "tr" === s ? e.currentItem.children().each(function() {
                      t("<td> </td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                  }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
              },
              update: function(t, n) {
                  (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
              }
          }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
      },
      _contactContainers: function(s) {
          var n, o, a, r, h, l, c, u, d, p, f = null,
              g = null;
          for (n = this.containers.length - 1; n >= 0; n--)
              if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                  if (this._intersectsWith(this.containers[n].containerCache)) {
                      if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                      f = this.containers[n], g = n
                  } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
          if (f)
              if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
              else {
                  for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                  if (!r && !this.options.dropOnEmpty) return;
                  if (this.currentContainer === this.containers[g]) return;
                  r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
              }
      },
      _createHelper: function(e) {
          var i = this.options,
              s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
          return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left")
          }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
      },
      _adjustOffsetFromHelper: function(e) {
          "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
              left: +e[0],
              top: +e[1] || 0
          }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
      },
      _getParentOffset: function() {
          this.offsetParent = this.helper.offsetParent();
          var e = this.offsetParent.offset();
          return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
              top: 0,
              left: 0
          }), {
              top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
          }
      },
      _getRelativeOffset: function() {
          if ("relative" === this.cssPosition) {
              var t = this.currentItem.position();
              return {
                  top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                  left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
              }
          }
          return {
              top: 0,
              left: 0
          }
      },
      _cacheMargins: function() {
          this.margins = {
              left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
              top: parseInt(this.currentItem.css("marginTop"), 10) || 0
          }
      },
      _cacheHelperProportions: function() {
          this.helperProportions = {
              width: this.helper.outerWidth(),
              height: this.helper.outerHeight()
          }
      },
      _setContainment: function() {
          var e, i, s, n = this.options;
          "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
      },
      _convertPositionTo: function(e, i) {
          i || (i = this.position);
          var s = "absolute" === e ? 1 : -1,
              n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
              o = /(html|body)/i.test(n[0].tagName);
          return {
              top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
              left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
          }
      },
      _generatePosition: function(e) {
          var i, s, n = this.options,
              o = e.pageX,
              a = e.pageY,
              r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
              h = /(html|body)/i.test(r[0].tagName);
          return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
              top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
              left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
          }
      },
      _rearrange: function(t, e, i, s) {
          i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
          var n = this.counter;
          this._delay(function() {
              n === this.counter && this.refreshPositions(!s)
          })
      },
      _clear: function(t, e) {
          function i(t, e, i) {
              return function(s) {
                  i._trigger(t, s, e._uiHash(e))
              }
          }
          this.reverting = !1;
          var s, n = [];
          if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
              for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
              this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
          } else this.currentItem.show();
          for (this.fromOutside && !e && n.push(function(t) {
                  this._trigger("receive", t, this._uiHash(this.fromOutside))
              }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                  this._trigger("update", t, this._uiHash())
              }), this !== this.currentContainer && (e || (n.push(function(t) {
                  this._trigger("remove", t, this._uiHash())
              }), n.push(function(t) {
                  return function(e) {
                      t._trigger("receive", e, this._uiHash(this))
                  }
              }.call(this, this.currentContainer)), n.push(function(t) {
                  return function(e) {
                      t._trigger("update", e, this._uiHash(this))
                  }
              }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
          if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
              if (!e) {
                  for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, t);
                  this._trigger("stop", t, this._uiHash())
              }
              return this.fromOutside = !1, !1
          }
          if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
              for (s = 0; n.length > s; s++) n[s].call(this, t);
              this._trigger("stop", t, this._uiHash())
          }
          return this.fromOutside = !1, !0
      },
      _trigger: function() {
          t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
      },
      _uiHash: function(e) {
          var i = e || this;
          return {
              helper: i.helper,
              placeholder: i.placeholder || t([]),
              position: i.position,
              originalPosition: i.originalPosition,
              offset: i.positionAbs,
              item: i.currentItem,
              sender: e ? e.element : null
          }
      }
  })
}(jQuery),
function(t) {
  function e(t) {
      return function() {
          var e = this.element.val();
          t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
      }
  }
  t.widget("ui.spinner", {
      version: "1.10.4",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
          culture: null,
          icons: {
              down: "ui-icon-triangle-1-s",
              up: "ui-icon-triangle-1-n"
          },
          incremental: !0,
          max: null,
          min: null,
          numberFormat: null,
          page: 10,
          step: 1,
          change: null,
          spin: null,
          start: null,
          stop: null
      },
      _create: function() {
          this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
              beforeunload: function() {
                  this.element.removeAttr("autocomplete")
              }
          })
      },
      _getCreateOptions: function() {
          var e = {},
              i = this.element;
          return t.each(["min", "max", "step"], function(t, s) {
              var n = i.attr(s);
              void 0 !== n && n.length && (e[s] = n)
          }), e
      },
      _events: {
          keydown: function(t) {
              this._start(t) && this._keydown(t) && t.preventDefault()
          },
          keyup: "_stop",
          focus: function() {
              this.previous = this.element.val()
          },
          blur: function(t) {
              return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
          },
          mousewheel: function(t, e) {
              if (e) {
                  if (!this.spinning && !this._start(t)) return !1;
                  this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                      this.spinning && this._stop(t)
                  }, 100), t.preventDefault()
              }
          },
          "mousedown .ui-spinner-button": function(e) {
              function i() {
                  var t = this.element[0] === this.document[0].activeElement;
                  t || (this.element.focus(), this.previous = s, this._delay(function() {
                      this.previous = s
                  }))
              }
              var s;
              s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                  delete this.cancelBlur, i.call(this)
              }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
          },
          "mouseup .ui-spinner-button": "_stop",
          "mouseenter .ui-spinner-button": function(e) {
              return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
          },
          "mouseleave .ui-spinner-button": "_stop"
      },
      _draw: function() {
          var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
          this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
      },
      _keydown: function(e) {
          var i = this.options,
              s = t.ui.keyCode;
          switch (e.keyCode) {
              case s.UP:
                  return this._repeat(null, 1, e), !0;
              case s.DOWN:
                  return this._repeat(null, -1, e), !0;
              case s.PAGE_UP:
                  return this._repeat(null, i.page, e), !0;
              case s.PAGE_DOWN:
                  return this._repeat(null, -i.page, e), !0
          }
          return !1
      },
      _uiSpinnerHtml: function() {
          return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
      },
      _buttonHtml: function() {
          return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>▲</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>▼</span></a>"
      },
      _start: function(t) {
          return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
      },
      _repeat: function(t, e, i) {
          t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
              this._repeat(40, e, i)
          }, t), this._spin(e * this.options.step, i)
      },
      _spin: function(t, e) {
          var i = this.value() || 0;
          this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
              value: i
          }) === !1 || (this._value(i), this.counter++)
      },
      _increment: function(e) {
          var i = this.options.incremental;
          return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
      },
      _precision: function() {
          var t = this._precisionOf(this.options.step);
          return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
      },
      _precisionOf: function(t) {
          var e = "" + t,
              i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1
      },
      _adjustValue: function(t) {
          var e, i, s = this.options;
          return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
      },
      _stop: function(t) {
          this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
      },
      _setOption: function(t, e) {
          if ("culture" === t || "numberFormat" === t) {
              var i = this._parse(this.element.val());
              return this.options[t] = e, void this.element.val(this._format(i))
          }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
      },
      _setOptions: e(function(t) {
          this._super(t), this._value(this.element.val())
      }),
      _parse: function(t) {
          return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
      },
      _format: function(t) {
          return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
      },
      _refresh: function() {
          this.element.attr({
              "aria-valuemin": this.options.min,
              "aria-valuemax": this.options.max,
              "aria-valuenow": this._parse(this.element.val())
          })
      },
      _value: function(t, e) {
          var i;
          "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
      },
      _destroy: function() {
          this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
      },
      stepUp: e(function(t) {
          this._stepUp(t)
      }),
      _stepUp: function(t) {
          this._start() && (this._spin((t || 1) * this.options.step), this._stop())
      },
      stepDown: e(function(t) {
          this._stepDown(t)
      }),
      _stepDown: function(t) {
          this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
      },
      pageUp: e(function(t) {
          this._stepUp((t || 1) * this.options.page)
      }),
      pageDown: e(function(t) {
          this._stepDown((t || 1) * this.options.page)
      }),
      value: function(t) {
          return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
      },
      widget: function() {
          return this.uiSpinner
      }
  })
}(jQuery),
function(t, e) {
  function i() {
      return ++n
  }

  function s(t) {
      return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
  }
  var n = 0,
      o = /#.*$/;
  t.widget("ui.tabs", {
      version: "1.10.4",
      delay: 300,
      options: {
          active: null,
          collapsible: !1,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null
      },
      _create: function() {
          var e = this,
              i = this.options;
          this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
              t(this).is(".ui-state-disabled") && e.preventDefault()
          }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
              t(this).closest("li").is(".ui-state-disabled") && this.blur()
          }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
              return e.tabs.index(t)
          }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
      },
      _initialActive: function() {
          var i = this.options.active,
              s = this.options.collapsible,
              n = location.hash.substring(1);
          return null === i && (n && this.tabs.each(function(s, o) {
              return t(o).attr("aria-controls") === n ? (i = s, !1) : e
          }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = !!this.tabs.length && 0)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = !s && 0)), !s && i === !1 && this.anchors.length && (i = 0), i
      },
      _getCreateEventData: function() {
          return {
              tab: this.active,
              panel: this.active.length ? this._getPanelForTab(this.active) : t()
          }
      },
      _tabKeydown: function(i) {
          var s = t(this.document[0].activeElement).closest("li"),
              n = this.tabs.index(s),
              o = !0;
          if (!this._handlePageNav(i)) {
              switch (i.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                      n++;
                      break;
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                      o = !1, n--;
                      break;
                  case t.ui.keyCode.END:
                      n = this.anchors.length - 1;
                      break;
                  case t.ui.keyCode.HOME:
                      n = 0;
                      break;
                  case t.ui.keyCode.SPACE:
                      return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                  case t.ui.keyCode.ENTER:
                      return i.preventDefault(), clearTimeout(this.activating), this._activate(n !== this.options.active && n), e;
                  default:
                      return
              }
              i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                  this.option("active", n)
              }, this.delay))
          }
      },
      _panelKeydown: function(e) {
          this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
      },
      _handlePageNav: function(i) {
          return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
      },
      _findNextTab: function(e, i) {
          function s() {
              return e > n && (e = 0), 0 > e && (e = n), e
          }
          for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
          return e
      },
      _focusNextTab: function(t, e) {
          return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
      },
      _setOption: function(t, i) {
          return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
      },
      _tabId: function(t) {
          return t.attr("aria-controls") || "ui-tabs-" + i()
      },
      _sanitizeSelector: function(t) {
          return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
      },
      refresh: function() {
          var e = this.options,
              i = this.tablist.children(":has(a[href])");
          e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
              return i.index(t)
          }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
      },
      _refresh: function() {
          this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
              "aria-selected": "false",
              tabIndex: -1
          }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
              "aria-expanded": "false",
              "aria-hidden": "true"
          }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
              "aria-selected": "true",
              tabIndex: 0
          }), this._getPanelForTab(this.active).show().attr({
              "aria-expanded": "true",
              "aria-hidden": "false"
          })) : this.tabs.eq(0).attr("tabIndex", 0)
      },
      _processTabs: function() {
          var e = this;
          this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
              role: "tab",
              tabIndex: -1
          }), this.anchors = this.tabs.map(function() {
              return t("a", this)[0]
          }).addClass("ui-tabs-anchor").attr({
              role: "presentation",
              tabIndex: -1
          }), this.panels = t(), this.anchors.each(function(i, n) {
              var o, a, r, h = t(n).uniqueId().attr("id"),
                  l = t(n).closest("li"),
                  c = l.attr("aria-controls");
              s(n) ? (o = n.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(l), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                  "aria-controls": o.substring(1),
                  "aria-labelledby": h
              }), a.attr("aria-labelledby", h)
          }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
      },
      _getList: function() {
          return this.tablist || this.element.find("ol,ul").eq(0)
      },
      _createPanel: function(e) {
          return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
      },
      _setupDisabled: function(e) {
          t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
          for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
          this.options.disabled = e
      },
      _setupEvents: function(e) {
          var i = {
              click: function(t) {
                  t.preventDefault()
              }
          };
          e && t.each(e.split(" "), function(t, e) {
              i[e] = "_eventHandler"
          }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
              keydown: "_tabKeydown"
          }), this._on(this.panels, {
              keydown: "_panelKeydown"
          }), this._focusable(this.tabs), this._hoverable(this.tabs)
      },
      _setupHeightStyle: function(e) {
          var i, s = this.element.parent();
          "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
              var e = t(this),
                  s = e.css("position");
              "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
          }), this.element.children().not(this.panels).each(function() {
              i -= t(this).outerHeight(!0)
          }), this.panels.each(function() {
              t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
          }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
              i = Math.max(i, t(this).height("").height())
          }).height(i))
      },
      _eventHandler: function(e) {
          var i = this.options,
              s = this.active,
              n = t(e.currentTarget),
              o = n.closest("li"),
              a = o[0] === s[0],
              r = a && i.collapsible,
              h = r ? t() : this._getPanelForTab(o),
              l = s.length ? this._getPanelForTab(s) : t(),
              c = {
                  oldTab: s,
                  oldPanel: l,
                  newTab: r ? t() : o,
                  newPanel: h
              };
          e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
      },
      _toggle: function(e, i) {
          function s() {
              o.running = !1, o._trigger("activate", e, i)
          }

          function n() {
              i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
          }
          var o = this,
              a = i.newPanel,
              r = i.oldPanel;
          this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
              i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
          }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
              "aria-expanded": "false",
              "aria-hidden": "true"
          }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
              return 0 === t(this).attr("tabIndex")
          }).attr("tabIndex", -1), a.attr({
              "aria-expanded": "true",
              "aria-hidden": "false"
          }), i.newTab.attr({
              "aria-selected": "true",
              tabIndex: 0
          })
      },
      _activate: function(e) {
          var i, s = this._findActive(e);
          s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop
          }))
      },
      _findActive: function(e) {
          return e === !1 ? t() : this.tabs.eq(e)
      },
      _getIndex: function(t) {
          return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
      },
      _destroy: function() {
          this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
              t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
          }), this.tabs.each(function() {
              var e = t(this),
                  i = e.data("ui-tabs-aria-controls");
              i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
          }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
      },
      enable: function(i) {
          var s = this.options.disabled;
          s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
              return t !== i ? t : null
          }) : t.map(this.tabs, function(t, e) {
              return e !== i ? e : null
          })), this._setupDisabled(s))
      },
      disable: function(i) {
          var s = this.options.disabled;
          if (s !== !0) {
              if (i === e) s = !0;
              else {
                  if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                  s = t.isArray(s) ? t.merge([i], s).sort() : [i]
              }
              this._setupDisabled(s)
          }
      },
      load: function(e, i) {
          e = this._getIndex(e);
          var n = this,
              o = this.tabs.eq(e),
              a = o.find(".ui-tabs-anchor"),
              r = this._getPanelForTab(o),
              h = {
                  tab: o,
                  panel: r
              };
          s(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
              setTimeout(function() {
                  r.html(t), n._trigger("load", i, h)
              }, 1)
          }).complete(function(t, e) {
              setTimeout(function() {
                  "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
              }, 1)
          })))
      },
      _ajaxSettings: function(e, i, s) {
          var n = this;
          return {
              url: e.attr("href"),
              beforeSend: function(e, o) {
                  return n._trigger("beforeLoad", i, t.extend({
                      jqXHR: e,
                      ajaxSettings: o
                  }, s))
              }
          }
      },
      _getPanelForTab: function(e) {
          var i = t(e).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + i))
      }
  })
}(jQuery),
function(t) {
  function e(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
  }

  function i(e) {
      var i = e.data("ui-tooltip-id"),
          s = (e.attr("aria-describedby") || "").split(/\s+/),
          n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
  }
  var s = 0;
  t.widget("ui.tooltip", {
      version: "1.10.4",
      options: {
          content: function() {
              var e = t(this).attr("title") || "";
              return t("<a>").text(e).html()
          },
          hide: !0,
          items: "[title]:not([disabled])",
          position: {
              my: "left top+15",
              at: "left bottom",
              collision: "flipfit flip"
          },
          show: !0,
          tooltipClass: null,
          track: !1,
          close: null,
          open: null
      },
      _create: function() {
          this._on({
              mouseover: "open",
              focusin: "open"
          }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
      },
      _setOption: function(e, i) {
          var s = this;
          return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
              s._updateContent(e)
          })))
      },
      _disable: function() {
          var e = this;
          t.each(this.tooltips, function(i, s) {
              var n = t.Event("blur");
              n.target = n.currentTarget = s[0], e.close(n, !0)
          }), this.element.find(this.options.items).addBack().each(function() {
              var e = t(this);
              e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
          })
      },
      _enable: function() {
          this.element.find(this.options.items).addBack().each(function() {
              var e = t(this);
              e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
          })
      },
      open: function(e) {
          var i = this,
              s = t(e ? e.target : this.element).closest(this.options.items);
          s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
              var e, s = t(this);
              s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this,
                  i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                  element: this,
                  title: s.attr("title")
              }, s.attr("title", ""))
          }), this._updateContent(s, e))
      },
      _updateContent: function(t, e) {
          var i, s = this.options.content,
              n = this,
              o = e ? e.type : null;
          return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
              t.data("ui-tooltip-open") && n._delay(function() {
                  e && (e.type = o), this._open(e, t, i)
              })
          }), void(i && this._open(e, t, i)))
      },
      _open: function(i, s, n) {
          function o(t) {
              l.of = t, a.is(":hidden") || a.position(l)
          }
          var a, r, h, l = t.extend({}, this.options.position);
          if (n) {
              if (a = this._find(s), a.length) return void a.find(".ui-tooltip-content").html(n);
              s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                  mousemove: o
              }), o(i)) : a.position(t.extend({
                  of: s
              }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                  a.is(":visible") && (o(l.of), clearInterval(h))
              }, t.fx.interval)), this._trigger("open", i, {
                  tooltip: a
              }), r = {
                  keyup: function(e) {
                      if (e.keyCode === t.ui.keyCode.ESCAPE) {
                          var i = t.Event(e);
                          i.currentTarget = s[0], this.close(i, !0)
                      }
                  },
                  remove: function() {
                      this._removeTooltip(a)
                  }
              }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
          }
      },
      close: function(e) {
          var s = this,
              n = t(e ? e.currentTarget : this.element),
              o = this._find(n);
          this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function() {
              s._removeTooltip(t(this))
          }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
              t(i.element).attr("title", i.title), delete s.parents[e]
          }), this.closing = !0, this._trigger("close", e, {
              tooltip: o
          }), this.closing = !1)
      },
      _tooltip: function(e) {
          var i = "ui-tooltip-" + s++,
              n = t("<div>").attr({
                  id: i,
                  role: "tooltip"
              }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
          return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
      },
      _find: function(e) {
          var i = e.data("ui-tooltip-id");
          return i ? t("#" + i) : t()
      },
      _removeTooltip: function(t) {
          t.remove(), delete this.tooltips[t.attr("id")]
      },
      _destroy: function() {
          var e = this;
          t.each(this.tooltips, function(i, s) {
              var n = t.Event("blur");
              n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
          })
      }
  })
}(jQuery);
! function(t, e, r, n) {
  "use strict";

  function a(r, n, a, o) {
      function i() {
          p = e.devicePixelRatio > 1, l(a), n("delay") >= 0 && setTimeout(function() {
              u(!0)
          }, n("delay")), (n("delay") < 0 || n("combined")) && (o.e = m(n("throttle"), function(t) {
              "resize" === t.type && (b = v = -1), u(t.all)
          }), o.a = function(t) {
              l(t), a.push.apply(a, t)
          }, o.g = function() {
              return a
          }, u(), t(n("appendScroll")).on("scroll." + r.name + " resize." + r.name, o.e))
      }

      function l(e) {
          if (e = t(e).filter(function() {
                  return !t(this).data(n("handledName")) && (t(this).attr(n("attribute")) || t(this).attr(n("loaderAttribute")))
              }).data("plugin_" + r.name, r), n("defaultImage") || n("placeholder"))
              for (var a = 0; a < e.length; a++) {
                  var o = t(e[a]),
                      i = e[a].tagName.toLowerCase(),
                      l = "background-image";
                  "img" == i && n("defaultImage") && !o.attr("src") ? o.attr("src", n("defaultImage")) : "img" == i || !n("placeholder") || o.css(l) && "none" != o.css(l) || o.css(l, "url(" + n("placeholder") + ")")
              }
      }

      function u(e) {
          if (!a.length) return void(n("autoDestroy") && r.destroy());
          for (var o = !1, i = n("imageBase") ? n("imageBase") : "", l = 0; l < a.length; l++)(function(r) {
              if (d(r) || e) {
                  var a, l = t(r),
                      u = r.tagName.toLowerCase(),
                      f = l.attr(n("attribute"));
                  l.data(n("handledName")) || n("visibleOnly") && !l.is(":visible") || !(f && ("img" == u && i + f != l.attr("src") || "img" != u && i + f != l.css("background-image")) || (a = l.attr(n("loaderAttribute")))) || (o = !0, l.data(n("handledName"), !0), c(l, u, i, a))
              }
          })(a[l]);
          o && (a = t(a).filter(function() {
              return !t(this).data(n("handledName"))
          }))
      }

      function c(e, r, a, o) {
          ++h;
          var i = function() {
              g("onError", e), A()
          };
          if (g("beforeLoad", e), o) e.off("error").one("error", i), e.one("load", function() {
              n("removeAttribute") && e.removeAttr(n("loaderAttribute")), g("afterLoad", e), A()
          }), g(o, e, function(t) {
              t ? e.load() : e.error()
          }) || e.error();
          else {
              var l = t(new Image);
              l.one("error", i), l.one("load", function() {
                  e.hide(), "img" == r ? e.attr("src", l.attr("src")) : e.css("background-image", "url(" + l.attr("src") + ")"), e[n("effect")](n("effectTime")), n("removeAttribute") && e.removeAttr(n("attribute") + " " + n("retinaAttribute")), g("afterLoad", e), l.remove(), A()
              }), l.attr("src", a + e.attr(n(p && e.attr(n("retinaAttribute")) ? "retinaAttribute" : "attribute"))), l.complete && l.load()
          }
      }

      function d(t) {
          var e = t.getBoundingClientRect(),
              r = n("scrollDirection"),
              a = n("threshold"),
              o = s() + a > e.top && -a < e.bottom,
              i = f() + a > e.left && -a < e.right;
          return "vertical" == r ? o : "horizontal" == r ? i : o && i
      }

      function f() {
          return b >= 0 ? b : b = t(e).width()
      }

      function s() {
          return v >= 0 ? v : v = t(e).height()
      }

      function m(t, e) {
          var a, o = 0;
          return function(i, l) {
              function u() {
                  o = +new Date, e.call(r, i)
              }
              var c = +new Date - o;
              a && clearTimeout(a), c > t || !n("enableThrottle") || l ? u() : a = setTimeout(u, t - c)
          }
      }

      function A() {
          --h, a.size() || h || g("onFinishedAll")
      }

      function g(t, e, a) {
          return !!(t = n(t)) && (t.apply(r, [].slice.call(arguments, 1)), !0)
      }
      var h = 0,
          b = -1,
          v = -1,
          p = !1;
      ! function() {
          "event" == n("bind") ? i() : t(e).load(i)
      }()
  }

  function o(e, r) {
      var o = this,
          i = t.extend({}, o.configuration, r),
          l = {};
      return o.config = function(t, e) {
          return e === n ? i[t] : (i[t] = e, o)
      }, o.addItems = function(e) {
          return l.a && l.a("string" === t.type(e) ? t(e) : e), o
      }, o.getItems = function() {
          return l.g ? l.g() : {}
      }, o.update = function(t) {
          return l.e && l.e({}, !t), o
      }, o.loadAll = function() {
          return l.e && l.e({
              all: !0
          }, !0), o
      }, o.destroy = function() {
          return t(o.config("appendScroll")).off("." + o.name, l.e), l = {}, n
      }, a(o, o.config, e, l), o.config("chainable") ? e : o
  }
  t.fn.Lazy = t.fn.lazy = function(t) {
      return new o(this, t)
  }, t.extend(o.prototype, {
      name: "lazy",
      configuration: {
          chainable: !0,
          autoDestroy: !0,
          bind: "load",
          threshold: 500,
          visibleOnly: !1,
          appendScroll: e,
          scrollDirection: "both",
          imageBase: null,
          defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
          placeholder: null,
          delay: -1,
          combined: !1,
          attribute: "data-src",
          retinaAttribute: "data-retina",
          loaderAttribute: "data-loader",
          removeAttribute: !0,
          handledName: "handled",
          effect: "show",
          effectTime: 0,
          enableThrottle: !0,
          throttle: 250,
          beforeLoad: null,
          afterLoad: null,
          onError: null,
          onFinishedAll: null
      }
  })
}(jQuery, window, document);
! function(e) {
  "use strict";
  e(["jquery"], function(e) {
      function t(t) {
          return !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
      }

      function n(t) {
          return e.isFunction(t) || e.isPlainObject(t) ? t : {
              top: t,
              left: t
          }
      }
      var o = e.scrollTo = function(t, n, o) {
          return e(window).scrollTo(t, n, o)
      };
      return o.defaults = {
          axis: "xy",
          duration: 0,
          limit: !0
      }, e.fn.scrollTo = function(r, i, s) {
          "object" == typeof i && (s = i, i = 0), "function" == typeof s && (s = {
              onAfter: s
          }), "max" === r && (r = 9e9), s = e.extend({}, o.defaults, s), i = i || s.duration;
          var a = s.queue && s.axis.length > 1;
          return a && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this.each(function() {
              function f(t) {
                  var n = e.extend({}, s, {
                      queue: !0,
                      duration: i,
                      complete: t && function() {
                          t.call(l, m, s)
                      }
                  });
                  d.animate(p, n)
              }
              if (null !== r) {
                  var u, c = t(this),
                      l = c ? this.contentWindow || window : this,
                      d = e(l),
                      m = r,
                      p = {};
                  switch (typeof m) {
                      case "number":
                      case "string":
                          if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                              m = n(m);
                              break
                          }
                          if (m = c ? e(m) : e(m, l), !m.length) return;
                      case "object":
                          (m.is || m.style) && (u = (m = e(m)).offset())
                  }
                  var h = e.isFunction(s.offset) && s.offset(l, m) || s.offset;
                  e.each(s.axis.split(""), function(e, t) {
                      var n = "x" === t ? "Left" : "Top",
                          r = n.toLowerCase(),
                          i = "scroll" + n,
                          x = d[i](),
                          v = o.max(l, t);
                      if (u) p[i] = u[r] + (c ? 0 : x - d.offset()[r]), s.margin && (p[i] -= parseInt(m.css("margin" + n), 10) || 0, p[i] -= parseInt(m.css("border" + n + "Width"), 10) || 0), p[i] += h[r] || 0, s.over[r] && (p[i] += m["x" === t ? "width" : "height"]() * s.over[r]);
                      else {
                          var w = m[r];
                          p[i] = w.slice && "%" === w.slice(-1) ? parseFloat(w) / 100 * v : w
                      }
                      s.limit && /^\d+$/.test(p[i]) && (p[i] = p[i] <= 0 ? 0 : Math.min(p[i], v)), !e && s.axis.length > 1 && (x === p[i] ? p = {} : a && (f(s.onAfterFirst), p = {}))
                  }), f(s.onAfter)
              }
          })
      }, o.max = function(n, o) {
          var r = "x" === o ? "Width" : "Height",
              i = "scroll" + r;
          if (!t(n)) return n[i] - e(n)[r.toLowerCase()]();
          var s = "client" + r,
              a = n.ownerDocument || n.document,
              f = a.documentElement,
              u = a.body;
          return Math.max(f[i], u[i]) - Math.min(f[s], u[s])
      }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
          get: function(t) {
              return e(t.elem)[t.prop]()
          },
          set: function(t) {
              var n = this.get(t);
              if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();
              var o = Math.round(t.now);
              n !== o && (e(t.elem)[t.prop](o), t._last = this.get(t))
          }
      }, o
  })
}("function" == typeof define && define.amd ? define : function(e, t) {
  "use strict";
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
});
window.fbAsyncInit = function() {
      FB.init({
          appId: "622230644492648",
          cookie: !0,
          xfbml: !0,
          version: "v2.9"
      })
  },
  function(e, n, t) {
      var o, c = e.getElementsByTagName(n)[0];
      e.getElementById(t) || (o = e.createElement(n), o.id = t, o.src = "//connect.facebook.net/ko_KR/sdk.js", c.parentNode.insertBefore(o, c))
  }(document, "script", "facebook-jssdk");
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
  "use strict";

  function e() {
      return bn.apply(null, arguments)
  }

  function t(e) {
      bn = e
  }

  function a() {
      return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1
      }
  }

  function n(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  }

  function s(e) {
      return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
  }

  function _(e, t) {
      var a, n = [];
      for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
      return n
  }

  function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }

  function d(e, t) {
      for (var a in t) r(t, a) && (e[a] = t[a]);
      return r(t, "toString") && (e.toString = t.toString), r(t, "valueOf") && (e.valueOf = t.valueOf), e
  }

  function i(e, t, a, n) {
      return ge(e, t, a, n, !0).utc()
  }

  function o(e) {
      return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && void 0 === e._pf.bigHour)), e._isValid
  }

  function u(e) {
      var t = i(NaN);
      return null != e ? d(t._pf, e) : t._pf.userInvalidated = !0, t
  }

  function m(e, t) {
      var a, n, s;
      if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Wn.length > 0)
          for (a in Wn) n = Wn[a], s = t[n], "undefined" != typeof s && (e[n] = s);
      return e
  }

  function l(t) {
      m(this, t), this._d = new Date((+t._d)), xn === !1 && (xn = !0, e.updateOffset(this), xn = !1)
  }

  function M(e) {
      return e instanceof l || null != e && r(e, "_isAMomentObject")
  }

  function L(e) {
      var t = +e,
          a = 0;
      return 0 !== t && isFinite(t) && (a = t >= 0 ? Math.floor(t) : Math.ceil(t)), a
  }

  function c(e, t, a) {
      var n, s = Math.min(e.length, t.length),
          _ = Math.abs(e.length - t.length),
          r = 0;
      for (n = 0; s > n; n++)(a && e[n] !== t[n] || !a && L(e[n]) !== L(t[n])) && r++;
      return r + _
  }

  function h() {}

  function Y(e) {
      return e ? e.toLowerCase().replace("_", "-") : e
  }

  function y(e) {
      for (var t, a, n, s, _ = 0; _ < e.length;) {
          for (s = Y(e[_]).split("-"), t = s.length, a = Y(e[_ + 1]), a = a ? a.split("-") : null; t > 0;) {
              if (n = f(s.slice(0, t).join("-"))) return n;
              if (a && a.length >= t && c(s, a, !0) >= t - 1) break;
              t--
          }
          _++
      }
      return null
  }

  function f(e) {
      var t = null;
      if (!Hn[e] && "undefined" != typeof module && module && module.exports) try {
          t = jn._abbr, require("./locale/" + e), p(t)
      } catch (a) {}
      return Hn[e]
  }

  function p(e, t) {
      var a;
      return e && (a = "undefined" == typeof t ? D(e) : T(e, t), a && (jn = a)), jn._abbr
  }

  function T(e, t) {
      return null !== t ? (t.abbr = e, Hn[e] || (Hn[e] = new h), Hn[e].set(t), p(e), Hn[e]) : (delete Hn[e], null)
  }

  function D(e) {
      var t;
      if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return jn;
      if (!n(e)) {
          if (t = f(e)) return t;
          e = [e]
      }
      return y(e)
  }

  function k(e, t) {
      var a = e.toLowerCase();
      Pn[a] = Pn[a + "s"] = Pn[t] = e
  }

  function g(e) {
      return "string" == typeof e ? Pn[e] || Pn[e.toLowerCase()] : void 0
  }

  function w(e) {
      var t, a, n = {};
      for (a in e) r(e, a) && (t = g(a), t && (n[t] = e[a]));
      return n
  }

  function v(t, a) {
      return function(n) {
          return null != n ? (b(this, t, n), e.updateOffset(this, a), this) : S(this, t)
      }
  }

  function S(e, t) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
  }

  function b(e, t, a) {
      return e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
  }

  function j(e, t) {
      var a;
      if ("object" == typeof e)
          for (a in e) this.set(a, e[a]);
      else if (e = g(e), "function" == typeof this[e]) return this[e](t);
      return this
  }

  function W(e, t, a) {
      for (var n = "" + Math.abs(e), s = e >= 0; n.length < t;) n = "0" + n;
      return (s ? a ? "+" : "" : "-") + n
  }

  function x(e, t, a, n) {
      var s = n;
      "string" == typeof n && (s = function() {
          return this[n]()
      }), e && (An[e] = s), t && (An[t[0]] = function() {
          return W(s.apply(this, arguments), t[1], t[2])
      }), a && (An[a] = function() {
          return this.localeData().ordinal(s.apply(this, arguments), e)
      })
  }

  function H(e) {
      return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
  }

  function P(e) {
      var t, a, n = e.match(Fn);
      for (t = 0, a = n.length; a > t; t++) n[t] = An[n[t]] ? An[n[t]] : H(n[t]);
      return function(s) {
          var _ = "";
          for (t = 0; a > t; t++) _ += n[t] instanceof Function ? n[t].call(s, e) : n[t];
          return _
      }
  }

  function F(e, t) {
      return e.isValid() ? (t = z(t, e.localeData()), En[t] || (En[t] = P(t)), En[t](e)) : e.localeData().invalidDate()
  }

  function z(e, t) {
      function a(e) {
          return t.longDateFormat(e) || e
      }
      var n = 5;
      for (zn.lastIndex = 0; n >= 0 && zn.test(e);) e = e.replace(zn, a), zn.lastIndex = 0, n -= 1;
      return e
  }

  function E(e, t, a) {
      Xn[e] = "function" == typeof t ? t : function(e) {
          return e && a ? a : t
      }
  }

  function A(e, t) {
      return r(Xn, e) ? Xn[e](t._strict, t._locale) : new RegExp(O(e))
  }

  function O(e) {
      return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, s) {
          return t || a || n || s
      }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function J(e, t) {
      var a, n = t;
      for ("string" == typeof e && (e = [e]), "number" == typeof t && (n = function(e, a) {
              a[t] = L(e)
          }), a = 0; a < e.length; a++) Qn[e[a]] = n
  }

  function C(e, t) {
      J(e, function(e, a, n, s) {
          n._w = n._w || {}, t(e, n._w, n, s)
      })
  }

  function G(e, t, a) {
      null != t && r(Qn, e) && Qn[e](t, a._a, a, e)
  }

  function U(e, t) {
      return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
  }

  function N(e) {
      return this._months[e.month()]
  }

  function I(e) {
      return this._monthsShort[e.month()]
  }

  function V(e, t, a) {
      var n, s, _;
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; 12 > n; n++) {
          if (s = i([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (_ = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(_.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
          if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
          if (!a && this._monthsParse[n].test(e)) return n
      }
  }

  function q(e, t) {
      var a;
      return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (a = Math.min(e.date(), U(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e)
  }

  function $(t) {
      return null != t ? (q(this, t), e.updateOffset(this, !0), this) : S(this, "Month")
  }

  function Z() {
      return U(this.year(), this.month())
  }

  function R(e) {
      var t, a = e._a;
      return a && -2 === e._pf.overflow && (t = a[ts] < 0 || a[ts] > 11 ? ts : a[as] < 1 || a[as] > U(a[es], a[ts]) ? as : a[ns] < 0 || a[ns] > 24 || 24 === a[ns] && (0 !== a[ss] || 0 !== a[_s] || 0 !== a[rs]) ? ns : a[ss] < 0 || a[ss] > 59 ? ss : a[_s] < 0 || a[_s] > 59 ? _s : a[rs] < 0 || a[rs] > 999 ? rs : -1, e._pf._overflowDayOfYear && (es > t || t > as) && (t = as), e._pf.overflow = t), e
  }

  function K(t) {
      //e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
  }

  function B(e, t) {
      var a = !0;
      return d(function() {
          return a && (K(e), a = !1), t.apply(this, arguments)
      }, t)
  }

  function X(e, t) {
      os[e] || (K(t), os[e] = !0)
  }

  function Q(e) {
      var t, a, n = e._i,
          s = us.exec(n);
      if (s) {
          for (e._pf.iso = !0, t = 0, a = ms.length; a > t; t++)
              if (ms[t][1].exec(n)) {
                  e._f = ms[t][0] + (s[6] || " ");
                  break
              } for (t = 0, a = ls.length; a > t; t++)
              if (ls[t][1].exec(n)) {
                  e._f += ls[t][0];
                  break
              } n.match(Rn) && (e._f += "Z"), ye(e)
      } else e._isValid = !1
  }

  function ee(t) {
      var a = Ms.exec(t._i);
      return null !== a ? void(t._d = new Date((+a[1]))) : (Q(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
  }

  function te(e, t, a, n, s, _, r) {
      var d = new Date(e, t, a, n, s, _, r);
      return 1970 > e && d.setFullYear(e), d
  }

  function ae(e) {
      var t = new Date(Date.UTC.apply(null, arguments));
      return 1970 > e && t.setUTCFullYear(e), t
  }

  function ne(e) {
      return se(e) ? 366 : 365
  }

  function se(e) {
      return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
  }

  function _e() {
      return se(this.year())
  }

  function re(e, t, a) {
      var n, s = a - t,
          _ = a - e.day();
      return _ > s && (_ -= 7), s - 7 > _ && (_ += 7), n = we(e).add(_, "d"), {
          week: Math.ceil(n.dayOfYear() / 7),
          year: n.year()
      }
  }

  function de(e) {
      return re(e, this._week.dow, this._week.doy).week
  }

  function ie() {
      return this._week.dow
  }

  function oe() {
      return this._week.doy
  }

  function ue(e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d")
  }

  function me(e) {
      var t = re(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d")
  }

  function le(e, t, a, n, s) {
      var _, r, d = ae(e, 0, 1).getUTCDay();
      return d = 0 === d ? 7 : d, a = null != a ? a : s, _ = s - d + (d > n ? 7 : 0) - (s > d ? 7 : 0), r = 7 * (t - 1) + (a - s) + _ + 1, {
          year: r > 0 ? e : e - 1,
          dayOfYear: r > 0 ? r : ne(e - 1) + r
      }
  }

  function Me(e) {
      var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == e ? t : this.add(e - t, "d")
  }

  function Le(e, t, a) {
      return null != e ? e : null != t ? t : a
  }

  function ce(e) {
      var t = new Date;
      return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
  }

  function he(e) {
      var t, a, n, s, _ = [];
      if (!e._d) {
          for (n = ce(e), e._w && null == e._a[as] && null == e._a[ts] && Ye(e), e._dayOfYear && (s = Le(e._a[es], n[es]), e._dayOfYear > ne(s) && (e._pf._overflowDayOfYear = !0), a = ae(s, 0, e._dayOfYear), e._a[ts] = a.getUTCMonth(), e._a[as] = a.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = _[t] = n[t];
          for (; 7 > t; t++) e._a[t] = _[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          24 === e._a[ns] && 0 === e._a[ss] && 0 === e._a[_s] && 0 === e._a[rs] && (e._nextDay = !0, e._a[ns] = 0), e._d = (e._useUTC ? ae : te).apply(null, _), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ns] = 24)
      }
  }

  function Ye(e) {
      var t, a, n, s, _, r, d;
      t = e._w, null != t.GG || null != t.W || null != t.E ? (_ = 1, r = 4, a = Le(t.GG, e._a[es], re(we(), 1, 4).year), n = Le(t.W, 1), s = Le(t.E, 1)) : (_ = e._locale._week.dow, r = e._locale._week.doy, a = Le(t.gg, e._a[es], re(we(), _, r).year), n = Le(t.w, 1), null != t.d ? (s = t.d, _ > s && ++n) : s = null != t.e ? t.e + _ : _), d = le(a, n, s, r, _), e._a[es] = d.year, e._dayOfYear = d.dayOfYear
  }

  function ye(t) {
      if (t._f === e.ISO_8601) return void Q(t);
      t._a = [], t._pf.empty = !0;
      var a, n, s, _, r, d = "" + t._i,
          i = d.length,
          o = 0;
      for (s = z(t._f, t._locale).match(Fn) || [], a = 0; a < s.length; a++) _ = s[a], n = (d.match(A(_, t)) || [])[0], n && (r = d.substr(0, d.indexOf(n)), r.length > 0 && t._pf.unusedInput.push(r), d = d.slice(d.indexOf(n) + n.length), o += n.length), An[_] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(_), G(_, n, t)) : t._strict && !n && t._pf.unusedTokens.push(_);
      t._pf.charsLeftOver = i - o, d.length > 0 && t._pf.unusedInput.push(d), t._pf.bigHour === !0 && t._a[ns] <= 12 && (t._pf.bigHour = void 0), t._a[ns] = fe(t._locale, t._a[ns], t._meridiem), he(t), R(t)
  }

  function fe(e, t, a) {
      var n;
      return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? (n = e.isPM(a), n && 12 > t && (t += 12), n || 12 !== t || (t = 0), t) : t
  }

  function pe(e) {
      var t, n, s, _, r;
      if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(NaN));
      for (_ = 0; _ < e._f.length; _++) r = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = a(), t._f = e._f[_], ye(t), o(t) && (r += t._pf.charsLeftOver, r += 10 * t._pf.unusedTokens.length, t._pf.score = r, (null == s || s > r) && (s = r, n = t));
      d(e, n || t)
  }

  function Te(e) {
      if (!e._d) {
          var t = w(e._i);
          e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], he(e)
      }
  }

  function De(e) {
      var t, a = e._i,
          s = e._f;
      return e._locale = e._locale || D(e._l), null === a || void 0 === s && "" === a ? u({
          nullInput: !0
      }) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)), M(a) ? new l(R(a)) : (n(s) ? pe(e) : s ? ye(e) : ke(e), t = new l(R(e)), t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t))
  }

  function ke(t) {
      var a = t._i;
      void 0 === a ? t._d = new Date : s(a) ? t._d = new Date((+a)) : "string" == typeof a ? ee(t) : n(a) ? (t._a = _(a.slice(0), function(e) {
          return parseInt(e, 10)
      }), he(t)) : "object" == typeof a ? Te(t) : "number" == typeof a ? t._d = new Date(a) : e.createFromInputFallback(t)
  }

  function ge(e, t, n, s, _) {
      var r = {};
      return "boolean" == typeof n && (s = n, n = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = _, r._l = n, r._i = e, r._f = t, r._strict = s, r._pf = a(), De(r)
  }

  function we(e, t, a, n) {
      return ge(e, t, a, n, !1)
  }

  function ve(e, t) {
      var a, s;
      if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return we();
      for (a = t[0], s = 1; s < t.length; ++s) t[s][e](a) && (a = t[s]);
      return a
  }

  function Se() {
      var e = [].slice.call(arguments, 0);
      return ve("isBefore", e)
  }

  function be() {
      var e = [].slice.call(arguments, 0);
      return ve("isAfter", e)
  }

  function je(e) {
      var t = w(e),
          a = t.year || 0,
          n = t.quarter || 0,
          s = t.month || 0,
          _ = t.week || 0,
          r = t.day || 0,
          d = t.hour || 0,
          i = t.minute || 0,
          o = t.second || 0,
          u = t.millisecond || 0;
      this._milliseconds = +u + 1e3 * o + 6e4 * i + 36e5 * d, this._days = +r + 7 * _, this._months = +s + 3 * n + 12 * a, this._data = {}, this._locale = D(), this._bubble()
  }

  function We(e) {
      return e instanceof je
  }

  function xe(e, t) {
      x(e, 0, 0, function() {
          var e = this.utcOffset(),
              a = "+";
          return 0 > e && (e = -e, a = "-"), a + W(~~(e / 60), 2) + t + W(~~e % 60, 2)
      })
  }

  function He(e) {
      var t = (e || "").match(Rn) || [],
          a = t[t.length - 1] || [],
          n = (a + "").match(ys) || ["-", 0, 0],
          s = +(60 * n[1]) + L(n[2]);
      return "+" === n[0] ? s : -s
  }

  function Pe(t, a) {
      var n, _;
      return a._isUTC ? (n = a.clone(), _ = (M(t) || s(t) ? +t : +we(t)) - +n, n._d.setTime(+n._d + _), e.updateOffset(n, !1), n) : we(t).local()
  }

  function Fe(e) {
      return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
  }

  function ze(t, a) {
      var n, s = this._offset || 0;
      return null != t ? ("string" == typeof t && (t = He(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && a && (n = Fe(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), s !== t && (!a || this._changeInProgress ? Be(this, qe(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Fe(this)
  }

  function Ee(e, t) {
      return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
  }

  function Ae(e) {
      return this.utcOffset(0, e)
  }

  function Oe(e) {
      return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Fe(this), "m")), this
  }

  function Je() {
      return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(He(this._i)), this
  }

  function Ce(e) {
      return e = e ? we(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
  }

  function Ge() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }

  function Ue() {
      if (this._a) {
          var e = this._isUTC ? i(this._a) : we(this._a);
          return this.isValid() && c(this._a, e.toArray()) > 0
      }
      return !1
  }

  function Ne() {
      return !this._isUTC
  }

  function Ie() {
      return this._isUTC
  }

  function Ve() {
      return this._isUTC && 0 === this._offset
  }

  function qe(e, t) {
      var a, n, s, _ = e,
          d = null;
      return We(e) ? _ = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
      } : "number" == typeof e ? (_ = {}, t ? _[t] = e : _.milliseconds = e) : (d = fs.exec(e)) ? (a = "-" === d[1] ? -1 : 1, _ = {
          y: 0,
          d: L(d[as]) * a,
          h: L(d[ns]) * a,
          m: L(d[ss]) * a,
          s: L(d[_s]) * a,
          ms: L(d[rs]) * a
      }) : (d = ps.exec(e)) ? (a = "-" === d[1] ? -1 : 1, _ = {
          y: $e(d[2], a),
          M: $e(d[3], a),
          d: $e(d[4], a),
          h: $e(d[5], a),
          m: $e(d[6], a),
          s: $e(d[7], a),
          w: $e(d[8], a)
      }) : null == _ ? _ = {} : "object" == typeof _ && ("from" in _ || "to" in _) && (s = Re(we(_.from), we(_.to)), _ = {}, _.ms = s.milliseconds, _.M = s.months), n = new je(_), We(e) && r(e, "_locale") && (n._locale = e._locale), n
  }

  function $e(e, t) {
      var a = e && parseFloat(e.replace(",", "."));
      return (isNaN(a) ? 0 : a) * t
  }

  function Ze(e, t) {
      var a = {
          milliseconds: 0,
          months: 0
      };
      return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
  }

  function Re(e, t) {
      var a;
      return t = Pe(t, e), e.isBefore(t) ? a = Ze(e, t) : (a = Ze(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a
  }

  function Ke(e, t) {
      return function(a, n) {
          var s, _;
          return null === n || isNaN(+n) || (X(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), _ = a, a = n, n = _), a = "string" == typeof a ? +a : a, s = qe(a, n), Be(this, s, e), this
      }
  }

  function Be(t, a, n, s) {
      var _ = a._milliseconds,
          r = a._days,
          d = a._months;
      s = null == s || s, _ && t._d.setTime(+t._d + _ * n), r && b(t, "Date", S(t, "Date") + r * n), d && q(t, S(t, "Month") + d * n), s && e.updateOffset(t, r || d)
  }

  function Xe(e) {
      var t = e || we(),
          a = Pe(t, this).startOf("day"),
          n = this.diff(a, "days", !0),
          s = -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse";
      return this.format(this.localeData().calendar(s, this, we(t)))
  }

  function Qe() {
      return new l(this)
  }

  function et(e, t) {
      var a;
      return t = g("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = M(e) ? e : we(e), +this > +e) : (a = M(e) ? +e : +we(e), a < +this.clone().startOf(t))
  }

  function tt(e, t) {
      var a;
      return t = g("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = M(e) ? e : we(e), +e > +this) : (a = M(e) ? +e : +we(e), +this.clone().endOf(t) < a)
  }

  function at(e, t, a) {
      return this.isAfter(e, a) && this.isBefore(t, a)
  }

  function nt(e, t) {
      var a;
      return t = g(t || "millisecond"), "millisecond" === t ? (e = M(e) ? e : we(e), +this === +e) : (a = +we(e), +this.clone().startOf(t) <= a && a <= +this.clone().endOf(t))
  }

  function st(e) {
      return 0 > e ? Math.ceil(e) : Math.floor(e)
  }

  function _t(e, t, a) {
      var n, s, _ = Pe(e, this),
          r = 6e4 * (_.utcOffset() - this.utcOffset());
      return t = g(t), "year" === t || "month" === t || "quarter" === t ? (s = rt(this, _), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (n = this - _, s = "second" === t ? n / 1e3 : "minute" === t ? n / 6e4 : "hour" === t ? n / 36e5 : "day" === t ? (n - r) / 864e5 : "week" === t ? (n - r) / 6048e5 : n), a ? s : st(s)
  }

  function rt(e, t) {
      var a, n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          _ = e.clone().add(s, "months");
      return 0 > t - _ ? (a = e.clone().add(s - 1, "months"), n = (t - _) / (_ - a)) : (a = e.clone().add(s + 1, "months"), n = (t - _) / (a - _)), -(s + n)
  }

  function dt() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }

  function it() {
      var e = this.clone().utc();
      return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : F(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }

  function ot(t) {
      var a = F(this, t || e.defaultFormat);
      return this.localeData().postformat(a)
  }

  function ut(e, t) {
      return qe({
          to: this,
          from: e
      }).locale(this.locale()).humanize(!t)
  }

  function mt(e) {
      return this.from(we(), e)
  }

  function lt(e) {
      var t;
      return void 0 === e ? this._locale._abbr : (t = D(e), null != t && (this._locale = t), this)
  }

  function Mt() {
      return this._locale
  }

  function Lt(e) {
      switch (e = g(e)) {
          case "year":
              this.month(0);
          case "quarter":
          case "month":
              this.date(1);
          case "week":
          case "isoWeek":
          case "day":
              this.hours(0);
          case "hour":
              this.minutes(0);
          case "minute":
              this.seconds(0);
          case "second":
              this.milliseconds(0)
      }
      return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
  }

  function ct(e) {
      return e = g(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
  }

  function ht() {
      return +this._d - 6e4 * (this._offset || 0)
  }

  function Yt() {
      return Math.floor(+this / 1e3)
  }

  function yt() {
      return this._offset ? new Date((+this)) : this._d
  }

  function ft() {
      var e = this;
      return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }

  function pt() {
      return o(this)
  }

  function Tt() {
      return d({}, this._pf)
  }

  function Dt() {
      return this._pf.overflow
  }

  function kt(e, t) {
      x(0, [e, e.length], 0, t)
  }

  function gt(e, t, a) {
      return re(we([e, 11, 31 + t - a]), t, a).week
  }

  function wt(e) {
      var t = re(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return null == e ? t : this.add(e - t, "y")
  }

  function vt(e) {
      var t = re(this, 1, 4).year;
      return null == e ? t : this.add(e - t, "y")
  }

  function St() {
      return gt(this.year(), 1, 4)
  }

  function bt() {
      var e = this.localeData()._week;
      return gt(this.year(), e.dow, e.doy)
  }

  function jt(e) {
      return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
  }

  function Wt(e, t) {
      if ("string" == typeof e)
          if (isNaN(e)) {
              if (e = t.weekdaysParse(e), "number" != typeof e) return null
          } else e = parseInt(e, 10);
      return e
  }

  function xt(e) {
      return this._weekdays[e.day()]
  }

  function Ht(e) {
      return this._weekdaysShort[e.day()]
  }

  function Pt(e) {
      return this._weekdaysMin[e.day()]
  }

  function Ft(e) {
      var t, a, n;
      for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
          if (this._weekdaysParse[t] || (a = we([2e3, 1]).day(t), n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[t] = new RegExp(n.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
  }

  function zt(e) {
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e ? (e = Wt(e, this.localeData()), this.add(e - t, "d")) : t
  }

  function Et(e) {
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d")
  }

  function At(e) {
      return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
  }

  function Ot(e, t) {
      x(e, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), t)
      })
  }

  function Jt(e, t) {
      return t._meridiemParse
  }

  function Ct(e) {
      return "p" === (e + "").toLowerCase().charAt(0)
  }

  function Gt(e, t, a) {
      return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
  }

  function Ut(e) {
      x(0, [e, 3], 0, "millisecond")
  }

  function Nt() {
      return this._isUTC ? "UTC" : ""
  }

  function It() {
      return this._isUTC ? "Coordinated Universal Time" : ""
  }

  function Vt(e) {
      return we(1e3 * e)
  }

  function qt() {
      return we.apply(null, arguments).parseZone()
  }

  function $t(e, t, a) {
      var n = this._calendar[e];
      return "function" == typeof n ? n.call(t, a) : n
  }

  function Zt(e) {
      var t = this._longDateFormat[e];
      return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
          return e.slice(1)
      }), this._longDateFormat[e] = t), t
  }

  function Rt() {
      return this._invalidDate
  }

  function Kt(e) {
      return this._ordinal.replace("%d", e)
  }

  function Bt(e) {
      return e
  }

  function Xt(e, t, a, n) {
      var s = this._relativeTime[a];
      return "function" == typeof s ? s(e, t, a, n) : s.replace(/%d/i, e)
  }

  function Qt(e, t) {
      var a = this._relativeTime[e > 0 ? "future" : "past"];
      return "function" == typeof a ? a(t) : a.replace(/%s/i, t)
  }

  function ea(e) {
      var t, a;
      for (a in e) t = e[a], "function" == typeof t ? this[a] = t : this["_" + a] = t;
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
  }

  function ta(e, t, a, n) {
      var s = D(),
          _ = i().set(n, t);
      return s[a](_, e)
  }

  function aa(e, t, a, n, s) {
      if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return ta(e, t, a, s);
      var _, r = [];
      for (_ = 0; n > _; _++) r[_] = ta(e, _, a, s);
      return r
  }

  function na(e, t) {
      return aa(e, t, "months", 12, "month")
  }

  function sa(e, t) {
      return aa(e, t, "monthsShort", 12, "month")
  }

  function _a(e, t) {
      return aa(e, t, "weekdays", 7, "day")
  }

  function ra(e, t) {
      return aa(e, t, "weekdaysShort", 7, "day")
  }

  function da(e, t) {
      return aa(e, t, "weekdaysMin", 7, "day")
  }

  function ia() {
      var e = this._data;
      return this._milliseconds = Us(this._milliseconds), this._days = Us(this._days), this._months = Us(this._months), e.milliseconds = Us(e.milliseconds), e.seconds = Us(e.seconds), e.minutes = Us(e.minutes), e.hours = Us(e.hours), e.months = Us(e.months), e.years = Us(e.years), this
  }

  function oa(e, t, a, n) {
      var s = qe(t, a);
      return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble()
  }

  function ua(e, t) {
      return oa(this, e, t, 1)
  }

  function ma(e, t) {
      return oa(this, e, t, -1)
  }

  function la() {
      var e, t, a, n = this._milliseconds,
          s = this._days,
          _ = this._months,
          r = this._data,
          d = 0;
      return r.milliseconds = n % 1e3, e = st(n / 1e3), r.seconds = e % 60, t = st(e / 60), r.minutes = t % 60, a = st(t / 60), r.hours = a % 24, s += st(a / 24), d = st(Ma(s)), s -= st(La(d)), _ += st(s / 30), s %= 30, d += st(_ / 12), _ %= 12, r.days = s, r.months = _, r.years = d, this
  }

  function Ma(e) {
      return 400 * e / 146097
  }

  function La(e) {
      return 146097 * e / 400
  }

  function ca(e) {
      var t, a, n = this._milliseconds;
      if (e = g(e), "month" === e || "year" === e) return t = this._days + n / 864e5, a = this._months + 12 * Ma(t), "month" === e ? a : a / 12;
      switch (t = this._days + Math.round(La(this._months / 12)), e) {
          case "week":
              return t / 7 + n / 6048e5;
          case "day":
              return t + n / 864e5;
          case "hour":
              return 24 * t + n / 36e5;
          case "minute":
              return 24 * t * 60 + n / 6e4;
          case "second":
              return 24 * t * 60 * 60 + n / 1e3;
          case "millisecond":
              return Math.floor(24 * t * 60 * 60 * 1e3) + n;
          default:
              throw new Error("Unknown unit " + e)
      }
  }

  function ha() {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * L(this._months / 12)
  }

  function Ya(e) {
      return function() {
          return this.as(e)
      }
  }

  function ya(e) {
      return e = g(e), this[e + "s"]()
  }

  function fa(e) {
      return function() {
          return this._data[e]
      }
  }

  function pa() {
      return st(this.days() / 7)
  }

  function Ta(e, t, a, n, s) {
      return s.relativeTime(t || 1, !!a, e, n)
  }

  function Da(e, t, a) {
      var n = qe(e).abs(),
          s = s_(n.as("s")),
          _ = s_(n.as("m")),
          r = s_(n.as("h")),
          d = s_(n.as("d")),
          i = s_(n.as("M")),
          o = s_(n.as("y")),
          u = s < __.s && ["s", s] || 1 === _ && ["m"] || _ < __.m && ["mm", _] || 1 === r && ["h"] || r < __.h && ["hh", r] || 1 === d && ["d"] || d < __.d && ["dd", d] || 1 === i && ["M"] || i < __.M && ["MM", i] || 1 === o && ["y"] || ["yy", o];
      return u[2] = t, u[3] = +e > 0, u[4] = a, Ta.apply(null, u)
  }

  function ka(e, t) {
      return void 0 !== __[e] && (void 0 === t ? __[e] : (__[e] = t, !0))
  }

  function ga(e) {
      var t = this.localeData(),
          a = Da(this, !e, t);
      return e && (a = t.pastFuture(+this, a)), t.postformat(a)
  }

  function wa() {
      var e = r_(this.years()),
          t = r_(this.months()),
          a = r_(this.days()),
          n = r_(this.hours()),
          s = r_(this.minutes()),
          _ = r_(this.seconds() + this.milliseconds() / 1e3),
          r = this.asSeconds();
      return r ? (0 > r ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (a ? a + "D" : "") + (n || s || _ ? "T" : "") + (n ? n + "H" : "") + (s ? s + "M" : "") + (_ ? _ + "S" : "") : "P0D"
  }

  function va(e, t) {
      var a = e.split("_");
      return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? a[1] : a[2]
  }

  function Sa(e, t, a) {
      var n = {
          mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
      };
      return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + va(n[a], +e)
  }

  function ba(e, t) {
      var a = {
              nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
              accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
          },
          n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function ja(e, t) {
      var a = {
              nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
              accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
          },
          n = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
      return a[n][e.day()]
  }

  function Wa(e, t, a) {
      var n = {
          mm: "munutenn",
          MM: "miz",
          dd: "devezh"
      };
      return e + " " + Pa(n[a], e)
  }

  function xa(e) {
      switch (Ha(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
              return e + " bloaz";
          default:
              return e + " vloaz"
      }
  }

  function Ha(e) {
      return e > 9 ? Ha(e % 10) : e
  }

  function Pa(e, t) {
      return 2 === t ? Fa(e) : e
  }

  function Fa(e) {
      var t = {
          m: "v",
          b: "v",
          d: "z"
      };
      return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
  }

  function za(e, t, a) {
      var n = e + " ";
      switch (a) {
          case "m":
              return t ? "jedna minuta" : "jedne minute";
          case "mm":
              return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case "h":
              return t ? "jedan sat" : "jednog sata";
          case "hh":
              return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case "dd":
              return n += 1 === e ? "dan" : "dana";
          case "MM":
              return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case "yy":
              return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
  }

  function Ea(e) {
      return e > 1 && 5 > e && 1 !== ~~(e / 10)
  }

  function Aa(e, t, a, n) {
      var s = e + " ";
      switch (a) {
          case "s":
              return t || n ? "pár sekund" : "pár sekundami";
          case "m":
              return t ? "minuta" : n ? "minutu" : "minutou";
          case "mm":
              return t || n ? s + (Ea(e) ? "minuty" : "minut") : s + "minutami";
          case "h":
              return t ? "hodina" : n ? "hodinu" : "hodinou";
          case "hh":
              return t || n ? s + (Ea(e) ? "hodiny" : "hodin") : s + "hodinami";
          case "d":
              return t || n ? "den" : "dnem";
          case "dd":
              return t || n ? s + (Ea(e) ? "dny" : "dní") : s + "dny";
          case "M":
              return t || n ? "měsíc" : "měsícem";
          case "MM":
              return t || n ? s + (Ea(e) ? "měsíce" : "měsíců") : s + "měsíci";
          case "y":
              return t || n ? "rok" : "rokem";
          case "yy":
              return t || n ? s + (Ea(e) ? "roky" : "let") : s + "lety"
      }
  }

  function Oa(e, t, a) {
      var n = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? n[a][0] : n[a][1]
  }

  function Ja(e, t, a) {
      var n = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? n[a][0] : n[a][1]
  }

  function Ca(e, t, a, n) {
      var s = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"]
      };
      return t ? s[a][2] ? s[a][2] : s[a][1] : n ? s[a][0] : s[a][1]
  }

  function Ga(e, t, a, n) {
      var s = "";
      switch (a) {
          case "s":
              return n ? "muutaman sekunnin" : "muutama sekunti";
          case "m":
              return n ? "minuutin" : "minuutti";
          case "mm":
              s = n ? "minuutin" : "minuuttia";
              break;
          case "h":
              return n ? "tunnin" : "tunti";
          case "hh":
              s = n ? "tunnin" : "tuntia";
              break;
          case "d":
              return n ? "päivän" : "päivä";
          case "dd":
              s = n ? "päivän" : "päivää";
              break;
          case "M":
              return n ? "kuukauden" : "kuukausi";
          case "MM":
              s = n ? "kuukauden" : "kuukautta";
              break;
          case "y":
              return n ? "vuoden" : "vuosi";
          case "yy":
              s = n ? "vuoden" : "vuotta"
      }
      return s = Ua(e, n) + " " + s
  }

  function Ua(e, t) {
      return 10 > e ? t ? j_[e] : b_[e] : e
  }

  function Na(e, t, a) {
      var n = e + " ";
      switch (a) {
          case "m":
              return t ? "jedna minuta" : "jedne minute";
          case "mm":
              return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
          case "h":
              return t ? "jedan sat" : "jednog sata";
          case "hh":
              return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
          case "dd":
              return n += 1 === e ? "dan" : "dana";
          case "MM":
              return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
          case "yy":
              return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
  }

  function Ia(e, t, a, n) {
      var s = e;
      switch (a) {
          case "s":
              return n || t ? "néhány másodperc" : "néhány másodperce";
          case "m":
              return "egy" + (n || t ? " perc" : " perce");
          case "mm":
              return s + (n || t ? " perc" : " perce");
          case "h":
              return "egy" + (n || t ? " óra" : " órája");
          case "hh":
              return s + (n || t ? " óra" : " órája");
          case "d":
              return "egy" + (n || t ? " nap" : " napja");
          case "dd":
              return s + (n || t ? " nap" : " napja");
          case "M":
              return "egy" + (n || t ? " hónap" : " hónapja");
          case "MM":
              return s + (n || t ? " hónap" : " hónapja");
          case "y":
              return "egy" + (n || t ? " év" : " éve");
          case "yy":
              return s + (n || t ? " év" : " éve")
      }
      return ""
  }

  function Va(e) {
      return (e ? "" : "[múlt] ") + "[" + F_[this.day()] + "] LT[-kor]"
  }

  function qa(e, t) {
      var a = {
              nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
              accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
          },
          n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function $a(e) {
      var t = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
      return t[e.month()]
  }

  function Za(e) {
      var t = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
      return t[e.day()]
  }

  function Ra(e) {
      return e % 100 === 11 || e % 10 !== 1
  }

  function Ka(e, t, a, n) {
      var s = e + " ";
      switch (a) {
          case "s":
              return t || n ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case "m":
              return t ? "mínúta" : "mínútu";
          case "mm":
              return Ra(e) ? s + (t || n ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";
          case "hh":
              return Ra(e) ? s + (t || n ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
          case "d":
              return t ? "dagur" : n ? "dag" : "degi";
          case "dd":
              return Ra(e) ? t ? s + "dagar" : s + (n ? "daga" : "dögum") : t ? s + "dagur" : s + (n ? "dag" : "degi");
          case "M":
              return t ? "mánuður" : n ? "mánuð" : "mánuði";
          case "MM":
              return Ra(e) ? t ? s + "mánuðir" : s + (n ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (n ? "mánuð" : "mánuði");
          case "y":
              return t || n ? "ár" : "ári";
          case "yy":
              return Ra(e) ? s + (t || n ? "ár" : "árum") : s + (t || n ? "ár" : "ári")
      }
  }

  function Ba(e, t) {
      var a = {
              nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
              accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
          },
          n = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function Xa(e, t) {
      var a = {
              nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
              accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
          },
          n = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
      return a[n][e.day()]
  }

  function Qa(e, t, a) {
      var n = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"]
      };
      return t ? n[a][0] : n[a][1]
  }

  function en(e) {
      var t = e.substr(0, e.indexOf(" "));
      return an(t) ? "a " + e : "an " + e
  }

  function tn(e) {
      var t = e.substr(0, e.indexOf(" "));
      return an(t) ? "viru " + e : "virun " + e
  }

  function an(e) {
      if (e = parseInt(e, 10), isNaN(e)) return !1;
      if (0 > e) return !0;
      if (10 > e) return e >= 4 && 7 >= e;
      if (100 > e) {
          var t = e % 10,
              a = e / 10;
          return an(0 === t ? a : t)
      }
      if (1e4 > e) {
          for (; e >= 10;) e /= 10;
          return an(e)
      }
      return e /= 1e3, an(e)
  }

  function nn(e, t, a, n) {
      return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
  }

  function sn(e, t, a, n) {
      return t ? rn(a)[0] : n ? rn(a)[1] : rn(a)[2]
  }

  function _n(e) {
      return e % 10 === 0 || e > 10 && 20 > e
  }

  function rn(e) {
      return z_[e].split("_")
  }

  function dn(e, t, a, n) {
      var s = e + " ";
      return 1 === e ? s + sn(e, t, a[0], n) : t ? s + (_n(e) ? rn(a)[1] : rn(a)[0]) : n ? s + rn(a)[1] : s + (_n(e) ? rn(a)[1] : rn(a)[2])
  }

  function on(e, t) {
      var a = -1 === t.indexOf("dddd HH:mm"),
          n = E_[e.day()];
      return a ? n : n.substring(0, n.length - 2) + "į"
  }

  function un(e, t, a) {
      var n = e.split("_");
      return a ? t % 10 === 1 && 11 !== t ? n[2] : n[3] : t % 10 === 1 && 11 !== t ? n[0] : n[1]
  }

  function mn(e, t, a) {
      return e + " " + un(A_[a], e, t)
  }

  function ln(e) {
      return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
  }

  function Mn(e, t, a) {
      var n = e + " ";
      switch (a) {
          case "m":
              return t ? "minuta" : "minutę";
          case "mm":
              return n + (ln(e) ? "minuty" : "minut");
          case "h":
              return t ? "godzina" : "godzinę";
          case "hh":
              return n + (ln(e) ? "godziny" : "godzin");
          case "MM":
              return n + (ln(e) ? "miesiące" : "miesięcy");
          case "yy":
              return n + (ln(e) ? "lata" : "lat")
      }
  }

  function Ln(e, t, a) {
      var n = {
              mm: "minute",
              hh: "ore",
              dd: "zile",
              MM: "luni",
              yy: "ani"
          },
          s = " ";
      return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (s = " de "), e + s + n[a]
  }

  function cn(e, t) {
      var a = e.split("_");
      return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? a[1] : a[2]
  }

  function hn(e, t, a) {
      var n = {
          mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет"
      };
      return "m" === a ? t ? "минута" : "минуту" : e + " " + cn(n[a], +e)
  }

  function Yn(e, t) {
      var a = {
              nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
              accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
          },
          n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function yn(e, t) {
      var a = {
              nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
              accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
          },
          n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function fn(e, t) {
      var a = {
              nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
              accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
          },
          n = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
      return a[n][e.day()]
  }

  function pn(e) {
      return e > 1 && 5 > e
  }

  function Tn(e, t, a, n) {
      var s = e + " ";
      switch (a) {
          case "s":
              return t || n ? "pár sekúnd" : "pár sekundami";
          case "m":
              return t ? "minúta" : n ? "minútu" : "minútou";
          case "mm":
              return t || n ? s + (pn(e) ? "minúty" : "minút") : s + "minútami";
          case "h":
              return t ? "hodina" : n ? "hodinu" : "hodinou";
          case "hh":
              return t || n ? s + (pn(e) ? "hodiny" : "hodín") : s + "hodinami";
          case "d":
              return t || n ? "deň" : "dňom";
          case "dd":
              return t || n ? s + (pn(e) ? "dni" : "dní") : s + "dňami";
          case "M":
              return t || n ? "mesiac" : "mesiacom";
          case "MM":
              return t || n ? s + (pn(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
          case "y":
              return t || n ? "rok" : "rokom";
          case "yy":
              return t || n ? s + (pn(e) ? "roky" : "rokov") : s + "rokmi"
      }
  }

  function Dn(e, t, a) {
      var n = e + " ";
      switch (a) {
          case "m":
              return t ? "ena minuta" : "eno minuto";
          case "mm":
              return n += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
          case "h":
              return t ? "ena ura" : "eno uro";
          case "hh":
              return n += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
          case "dd":
              return n += 1 === e ? "dan" : "dni";
          case "MM":
              return n += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
          case "yy":
              return n += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
      }
  }

  function kn(e, t) {
      var a = e.split("_");
      return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? a[1] : a[2]
  }

  function gn(e, t, a) {
      var n = {
          mm: "хвилина_хвилини_хвилин",
          hh: "година_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
      };
      return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + kn(n[a], +e)
  }

  function wn(e, t) {
      var a = {
              nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
              accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
          },
          n = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
      return a[n][e.month()]
  }

  function vn(e, t) {
      var a = {
              nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
              accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
              genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
          },
          n = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
      return a[n][e.day()]
  }

  function Sn(e) {
      return function() {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
      }
  }
  var bn, jn, Wn = e.momentProperties = [],
      xn = !1,
      Hn = {},
      Pn = {},
      Fn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
      zn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      En = {},
      An = {},
      On = /\d/,
      Jn = /\d\d/,
      Cn = /\d{3}/,
      Gn = /\d{4}/,
      Un = /[+-]?\d{6}/,
      Nn = /\d\d?/,
      In = /\d{1,3}/,
      Vn = /\d{1,4}/,
      qn = /[+-]?\d{1,6}/,
      $n = /\d+/,
      Zn = /[+-]?\d+/,
      Rn = /Z|[+-]\d\d:?\d\d/gi,
      Kn = /[+-]?\d+(\.\d{1,3})?/,
      Bn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      Xn = {},
      Qn = {},
      es = 0,
      ts = 1,
      as = 2,
      ns = 3,
      ss = 4,
      _s = 5,
      rs = 6;
  x("M", ["MM", 2], "Mo", function() {
      return this.month() + 1
  }), x("MMM", 0, 0, function(e) {
      return this.localeData().monthsShort(this, e)
  }), x("MMMM", 0, 0, function(e) {
      return this.localeData().months(this, e)
  }), k("month", "M"), E("M", Nn), E("MM", Nn, Jn), E("MMM", Bn), E("MMMM", Bn), J(["M", "MM"], function(e, t) {
      t[ts] = L(e) - 1
  }), J(["MMM", "MMMM"], function(e, t, a, n) {
      var s = a._locale.monthsParse(e, n, a._strict);
      null != s ? t[ts] = s : a._pf.invalidMonth = e
  });
  var ds = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      is = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      os = {};
  e.suppressDeprecationWarnings = !1;
  var us = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ms = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
          ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
          ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d{2}/],
          ["YYYY-DDD", /\d{4}-\d{3}/]
      ],
      ls = [
          ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
          ["HH:mm", /(T| )\d\d:\d\d/],
          ["HH", /(T| )\d\d/]
      ],
      Ms = /^\/?Date\((\-?\d+)/i;
  e.createFromInputFallback = B("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
  }), x(0, ["YY", 2], 0, function() {
      return this.year() % 100
  }), x(0, ["YYYY", 4], 0, "year"), x(0, ["YYYYY", 5], 0, "year"), x(0, ["YYYYYY", 6, !0], 0, "year"), k("year", "y"), E("Y", Zn), E("YY", Nn, Jn), E("YYYY", Vn, Gn), E("YYYYY", qn, Un), E("YYYYYY", qn, Un), J(["YYYY", "YYYYY", "YYYYYY"], es), J("YY", function(t, a) {
      a[es] = e.parseTwoDigitYear(t)
  }), e.parseTwoDigitYear = function(e) {
      return L(e) + (L(e) > 68 ? 1900 : 2e3)
  };
  var Ls = v("FullYear", !1);
  x("w", ["ww", 2], "wo", "week"), x("W", ["WW", 2], "Wo", "isoWeek"), k("week", "w"), k("isoWeek", "W"), E("w", Nn), E("ww", Nn, Jn), E("W", Nn), E("WW", Nn, Jn), C(["w", "ww", "W", "WW"], function(e, t, a, n) {
      t[n.substr(0, 1)] = L(e)
  });
  var cs = {
      dow: 0,
      doy: 6
  };
  x("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), k("dayOfYear", "DDD"), E("DDD", In), E("DDDD", Cn), J(["DDD", "DDDD"], function(e, t, a) {
      a._dayOfYear = L(e)
  }), e.ISO_8601 = function() {};
  var hs = B("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
          var e = we.apply(null, arguments);
          return this > e ? this : e
      }),
      Ys = B("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
          var e = we.apply(null, arguments);
          return e > this ? this : e
      });
  xe("Z", ":"), xe("ZZ", ""), E("Z", Rn), E("ZZ", Rn), J(["Z", "ZZ"], function(e, t, a) {
      a._useUTC = !0, a._tzm = He(e)
  });
  var ys = /([\+\-]|\d\d)/gi;
  e.updateOffset = function() {};
  var fs = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      ps = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  qe.fn = je.prototype;
  var Ts = Ke(1, "add"),
      Ds = Ke(-1, "subtract");
  e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var ks = B("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
      return void 0 === e ? this.localeData() : this.locale(e)
  });
  x(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100
  }), x(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100
  }), kt("gggg", "weekYear"), kt("ggggg", "weekYear"), kt("GGGG", "isoWeekYear"), kt("GGGGG", "isoWeekYear"), k("weekYear", "gg"), k("isoWeekYear", "GG"), E("G", Zn), E("g", Zn), E("GG", Nn, Jn), E("gg", Nn, Jn), E("GGGG", Vn, Gn), E("gggg", Vn, Gn), E("GGGGG", qn, Un), E("ggggg", qn, Un), C(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
      t[n.substr(0, 2)] = L(e)
  }), C(["gg", "GG"], function(t, a, n, s) {
      a[s] = e.parseTwoDigitYear(t)
  }), x("Q", 0, 0, "quarter"), k("quarter", "Q"), E("Q", On), J("Q", function(e, t) {
      t[ts] = 3 * (L(e) - 1)
  }), x("D", ["DD", 2], "Do", "date"), k("date", "D"), E("D", Nn), E("DD", Nn, Jn), E("Do", function(e, t) {
      return e ? t._ordinalParse : t._ordinalParseLenient
  }), J(["D", "DD"], as), J("Do", function(e, t) {
      t[as] = L(e.match(Nn)[0], 10)
  });
  var gs = v("Date", !0);
  x("d", 0, "do", "day"), x("dd", 0, 0, function(e) {
      return this.localeData().weekdaysMin(this, e)
  }), x("ddd", 0, 0, function(e) {
      return this.localeData().weekdaysShort(this, e)
  }), x("dddd", 0, 0, function(e) {
      return this.localeData().weekdays(this, e)
  }), x("e", 0, 0, "weekday"), x("E", 0, 0, "isoWeekday"), k("day", "d"), k("weekday", "e"), k("isoWeekday", "E"), E("d", Nn), E("e", Nn), E("E", Nn), E("dd", Bn), E("ddd", Bn), E("dddd", Bn), C(["dd", "ddd", "dddd"], function(e, t, a) {
      var n = a._locale.weekdaysParse(e);
      null != n ? t.d = n : a._pf.invalidWeekday = e
  }), C(["d", "e", "E"], function(e, t, a, n) {
      t[n] = L(e)
  });
  var ws = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      vs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  x("H", ["HH", 2], 0, "hour"), x("h", ["hh", 2], 0, function() {
      return this.hours() % 12 || 12
  }), Ot("a", !0), Ot("A", !1), k("hour", "h"), E("a", Jt), E("A", Jt), E("H", Nn), E("h", Nn), E("HH", Nn, Jn), E("hh", Nn, Jn), J(["H", "HH"], ns), J(["a", "A"], function(e, t, a) {
      a._isPm = a._locale.isPM(e), a._meridiem = e
  }), J(["h", "hh"], function(e, t, a) {
      t[ns] = L(e), a._pf.bigHour = !0
  });
  var bs = /[ap]\.?m?\.?/i,
      js = v("Hours", !0);
  x("m", ["mm", 2], 0, "minute"), k("minute", "m"), E("m", Nn), E("mm", Nn, Jn), J(["m", "mm"], ss);
  var Ws = v("Minutes", !1);
  x("s", ["ss", 2], 0, "second"), k("second", "s"), E("s", Nn), E("ss", Nn, Jn), J(["s", "ss"], _s);
  var xs = v("Seconds", !1);
  x("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
  }), x(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
  }), Ut("SSS"), Ut("SSSS"), k("millisecond", "ms"), E("S", In, On), E("SS", In, Jn), E("SSS", In, Cn), E("SSSS", $n), J(["S", "SS", "SSS", "SSSS"], function(e, t) {
      t[rs] = L(1e3 * ("0." + e))
  });
  var Hs = v("Milliseconds", !1);
  x("z", 0, 0, "zoneAbbr"), x("zz", 0, 0, "zoneName");
  var Ps = l.prototype;
  Ps.add = Ts, Ps.calendar = Xe, Ps.clone = Qe, Ps.diff = _t, Ps.endOf = ct, Ps.format = ot, Ps.from = ut, Ps.fromNow = mt, Ps.get = j, Ps.invalidAt = Dt, Ps.isAfter = et, Ps.isBefore = tt, Ps.isBetween = at, Ps.isSame = nt, Ps.isValid = pt, Ps.lang = ks, Ps.locale = lt, Ps.localeData = Mt, Ps.max = Ys, Ps.min = hs, Ps.parsingFlags = Tt, Ps.set = j, Ps.startOf = Lt, Ps.subtract = Ds, Ps.toArray = ft, Ps.toDate = yt, Ps.toISOString = it, Ps.toJSON = it, Ps.toString = dt, Ps.unix = Yt, Ps.valueOf = ht, Ps.year = Ls, Ps.isLeapYear = _e, Ps.weekYear = wt, Ps.isoWeekYear = vt, Ps.quarter = Ps.quarters = jt, Ps.month = $, Ps.daysInMonth = Z, Ps.week = Ps.weeks = ue, Ps.isoWeek = Ps.isoWeeks = me, Ps.weeksInYear = bt, Ps.isoWeeksInYear = St, Ps.date = gs, Ps.day = Ps.days = zt, Ps.weekday = Et, Ps.isoWeekday = At, Ps.dayOfYear = Me, Ps.hour = Ps.hours = js, Ps.minute = Ps.minutes = Ws, Ps.second = Ps.seconds = xs, Ps.millisecond = Ps.milliseconds = Hs, Ps.utcOffset = ze, Ps.utc = Ae, Ps.local = Oe, Ps.parseZone = Je, Ps.hasAlignedHourOffset = Ce, Ps.isDST = Ge, Ps.isDSTShifted = Ue, Ps.isLocal = Ne, Ps.isUtcOffset = Ie, Ps.isUtc = Ve, Ps.isUTC = Ve, Ps.zoneAbbr = Nt, Ps.zoneName = It, Ps.dates = B("dates accessor is deprecated. Use date instead.", gs), Ps.months = B("months accessor is deprecated. Use month instead", $), Ps.years = B("years accessor is deprecated. Use year instead", Ls), Ps.zone = B("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ee);
  var Fs = Ps,
      zs = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
      },
      Es = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY LT",
          LLLL: "dddd, MMMM D, YYYY LT"
      },
      As = "Invalid date",
      Os = "%d",
      Js = /\d{1,2}/,
      Cs = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
      },
      Gs = h.prototype;
  Gs._calendar = zs, Gs.calendar = $t, Gs._longDateFormat = Es, Gs.longDateFormat = Zt, Gs._invalidDate = As, Gs.invalidDate = Rt, Gs._ordinal = Os, Gs.ordinal = Kt, Gs._ordinalParse = Js, Gs.preparse = Bt, Gs.postformat = Bt, Gs._relativeTime = Cs, Gs.relativeTime = Xt, Gs.pastFuture = Qt, Gs.set = ea, Gs.months = N, Gs._months = ds, Gs.monthsShort = I, Gs._monthsShort = is, Gs.monthsParse = V, Gs.week = de, Gs._week = cs, Gs.firstDayOfYear = oe, Gs.firstDayOfWeek = ie, Gs.weekdays = xt, Gs._weekdays = ws, Gs.weekdaysMin = Pt, Gs._weekdaysMin = Ss, Gs.weekdaysShort = Ht, Gs._weekdaysShort = vs, Gs.weekdaysParse = Ft, Gs.isPM = Ct, Gs._meridiemParse = bs, Gs.meridiem = Gt, p("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
          var t = e % 10,
              a = 1 === L(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
          return e + a
      }
  }), e.lang = B("moment.lang is deprecated. Use moment.locale instead.", p), e.langData = B("moment.langData is deprecated. Use moment.localeData instead.", D);
  var Us = Math.abs,
      Ns = Ya("ms"),
      Is = Ya("s"),
      Vs = Ya("m"),
      qs = Ya("h"),
      $s = Ya("d"),
      Zs = Ya("w"),
      Rs = Ya("M"),
      Ks = Ya("y"),
      Bs = fa("milliseconds"),
      Xs = fa("seconds"),
      Qs = fa("minutes"),
      e_ = fa("hours"),
      t_ = fa("days"),
      a_ = fa("months"),
      n_ = fa("years"),
      s_ = Math.round,
      __ = {
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
      },
      r_ = Math.abs,
      d_ = je.prototype;
  d_.abs = ia, d_.add = ua, d_.subtract = ma, d_.as = ca, d_.asMilliseconds = Ns, d_.asSeconds = Is, d_.asMinutes = Vs, d_.asHours = qs, d_.asDays = $s, d_.asWeeks = Zs, d_.asMonths = Rs, d_.asYears = Ks, d_.valueOf = ha, d_._bubble = la, d_.get = ya, d_.milliseconds = Bs, d_.seconds = Xs, d_.minutes = Qs, d_.hours = e_, d_.days = t_, d_.weeks = pa, d_.months = a_, d_.years = n_, d_.humanize = ga, d_.toISOString = wa, d_.toString = wa, d_.toJSON = wa, d_.locale = lt, d_.localeData = Mt, d_.toIsoString = B("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", wa), d_.lang = ks, x("X", 0, 0, "unix"), x("x", 0, 0, "valueOf"), E("x", Zn), E("X", Kn), J("X", function(e, t, a) {
      a._d = new Date(1e3 * parseFloat(e, 10))
  }), J("x", function(e, t, a) {
      a._d = new Date(L(e))
  }), e.version = "2.10.2", t(we), e.fn = Fs, e.min = Se, e.max = be, e.utc = i, e.unix = Vt, e.months = na, e.isDate = s, e.locale = p, e.invalid = u, e.duration = qe, e.isMoment = M, e.weekdays = _a, e.parseZone = qt, e.localeData = D, e.isDuration = We, e.monthsShort = sa, e.weekdaysMin = da, e.defineLocale = T, e.weekdaysShort = ra, e.normalizeUnits = g, e.relativeTimeThreshold = ka;
  var i_ = e,
      o_ = (i_.defineLocale("af", {
          months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function(e) {
              return /^nm$/i.test(e)
          },
          meridiem: function(e, t, a) {
              return 12 > e ? a ? "vm" : "VM" : a ? "nm" : "NM"
          },
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Vandag om] LT",
              nextDay: "[Môre om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[Gister om] LT",
              lastWeek: "[Laas] dddd [om] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "oor %s",
              past: "%s gelede",
              s: "'n paar sekondes",
              m: "'n minuut",
              mm: "%d minute",
              h: "'n uur",
              hh: "%d ure",
              d: "'n dag",
              dd: "%d dae",
              M: "'n maand",
              MM: "%d maande",
              y: "'n jaar",
              yy: "%d jaar"
          },
          ordinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("ar-ma", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
          },
          week: {
              dow: 6,
              doy: 12
          }
      }), {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠"
      }),
      u_ = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0"
      },
      m_ = (i_.defineLocale("ar-sa", {
          months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
              return "م" === e
          },
          meridiem: function(e) {
              return 12 > e ? "ص" : "م"
          },
          calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
          },
          preparse: function(e) {
              return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                  return u_[e]
              }).replace(/،/g, ",")
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return o_[e]
              }).replace(/,/g, "،")
          },
          week: {
              dow: 6,
              doy: 12
          }
      }), i_.defineLocale("ar-tn", {
          months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠"
      }),
      l_ = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0"
      },
      M_ = function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      L_ = {
          s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
          m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
          h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
          d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
          M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
          y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
      },
      c_ = function(e) {
          return function(t, a) {
              var n = M_(t),
                  s = L_[e][M_(t)];
              return 2 === n && (s = s[a ? 0 : 1]), s.replace(/%d/i, t)
          }
      },
      h_ = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
      Y_ = (i_.defineLocale("ar", {
          months: h_,
          monthsShort: h_,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
              return "م" === e
          },
          meridiem: function(e) {
              return 12 > e ? "ص" : "م"
          },
          calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: c_("s"),
              m: c_("m"),
              mm: c_("m"),
              h: c_("h"),
              hh: c_("h"),
              d: c_("d"),
              dd: c_("d"),
              M: c_("M"),
              MM: c_("M"),
              y: c_("y"),
              yy: c_("y")
          },
          preparse: function(e) {
              return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                  return l_[e]
              }).replace(/،/g, ",")
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return m_[e]
              }).replace(/,/g, "،")
          },
          week: {
              dow: 6,
              doy: 12
          }
      }), {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-üncü",
          4: "-üncü",
          100: "-üncü",
          6: "-ncı",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-ıncı",
          90: "-ıncı"
      }),
      y_ = (i_.defineLocale("az", {
          months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
          weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
          weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
          weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[sabah saat] LT",
              nextWeek: "[gələn həftə] dddd [saat] LT",
              lastDay: "[dünən] LT",
              lastWeek: "[keçən həftə] dddd [saat] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "birneçə saniyyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il"
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function(e) {
              return /^(gündüz|axşam)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
          },
          ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function(e) {
              if (0 === e) return e + "-ıncı";
              var t = e % 10,
                  a = e % 100 - t,
                  n = e >= 100 ? 100 : null;
              return e + (Y_[t] || Y_[a] || Y_[n])
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("be", {
          months: ba,
          monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
          weekdays: ja,
          weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., LT",
              LLLL: "dddd, D MMMM YYYY г., LT"
          },
          calendar: {
              sameDay: "[Сёння ў] LT",
              nextDay: "[Заўтра ў] LT",
              lastDay: "[Учора ў] LT",
              nextWeek: function() {
                  return "[У] dddd [ў] LT"
              },
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                          return "[У мінулую] dddd [ў] LT";
                      case 1:
                      case 2:
                      case 4:
                          return "[У мінулы] dddd [ў] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "праз %s",
              past: "%s таму",
              s: "некалькі секунд",
              m: Sa,
              mm: Sa,
              h: Sa,
              hh: Sa,
              d: "дзень",
              dd: Sa,
              M: "месяц",
              MM: Sa,
              y: "год",
              yy: Sa
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function(e) {
              return /^(дня|вечара)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
          },
          ordinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                      return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                  case "D":
                      return e + "-га";
                  default:
                      return e
              }
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("bg", {
          months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
          monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
          weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Днес в] LT",
              nextDay: "[Утре в] LT",
              nextWeek: "dddd [в] LT",
              lastDay: "[Вчера в] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                          return "[В изминалата] dddd [в] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[В изминалия] dddd [в] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "след %s",
              past: "преди %s",
              s: "няколко секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дни",
              M: "месец",
              MM: "%d месеца",
              y: "година",
              yy: "%d години"
          },
          ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = e % 100;
              return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && 20 > a ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), {
          1: "১",
          2: "২",
          3: "৩",
          4: "৪",
          5: "৫",
          6: "৬",
          7: "৭",
          8: "৮",
          9: "৯",
          0: "০"
      }),
      f_ = {
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
          "০": "0"
      },
      p_ = (i_.defineLocale("bn", {
          months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
          monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
          weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
          weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
          longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কএক সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর"
          },
          preparse: function(e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                  return f_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return y_[e]
              })
          },
          meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
          isPM: function(e) {
              return /^(দুপুর|বিকেল|রাত)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "রাত" : 10 > e ? "শকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকেল" : "রাত"
          },
          week: {
              dow: 0,
              doy: 6
          }
      }), {
          1: "༡",
          2: "༢",
          3: "༣",
          4: "༤",
          5: "༥",
          6: "༦",
          7: "༧",
          8: "༨",
          9: "༩",
          0: "༠"
      }),
      T_ = {
          "༡": "1",
          "༢": "2",
          "༣": "3",
          "༤": "4",
          "༥": "5",
          "༦": "6",
          "༧": "7",
          "༨": "8",
          "༩": "9",
          "༠": "0"
      },
      D_ = (i_.defineLocale("bo", {
          months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
          monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
          weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
          weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          longDateFormat: {
              LT: "A h:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[དི་རིང] LT",
              nextDay: "[སང་ཉིན] LT",
              nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
              lastDay: "[ཁ་སང] LT",
              lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ"
          },
          preparse: function(e) {
              return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                  return T_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return p_[e]
              })
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          isPM: function(e) {
              return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
          },
          week: {
              dow: 0,
              doy: 6
          }
      }), i_.defineLocale("br", {
          months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
          monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
          weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          longDateFormat: {
              LT: "h[e]mm A",
              LTS: "h[e]mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [a viz] MMMM YYYY",
              LLL: "D [a viz] MMMM YYYY LT",
              LLLL: "dddd, D [a viz] MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Hiziv da] LT",
              nextDay: "[Warc'hoazh da] LT",
              nextWeek: "dddd [da] LT",
              lastDay: "[Dec'h da] LT",
              lastWeek: "dddd [paset da] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "a-benn %s",
              past: "%s 'zo",
              s: "un nebeud segondennoù",
              m: "ur vunutenn",
              mm: Wa,
              h: "un eur",
              hh: "%d eur",
              d: "un devezh",
              dd: Wa,
              M: "ur miz",
              MM: Wa,
              y: "ur bloaz",
              yy: xa
          },
          ordinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function(e) {
              var t = 1 === e ? "añ" : "vet";
              return e + t
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("bs", {
          months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[u] [nedjelju] [u] LT";
                      case 3:
                          return "[u] [srijedu] [u] LT";
                      case 6:
                          return "[u] [subotu] [u] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[u] dddd [u] LT"
                  }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                          return "[prošlu] dddd [u] LT";
                      case 6:
                          return "[prošle] [subote] [u] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[prošli] dddd [u] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              m: za,
              mm: za,
              h: za,
              hh: za,
              d: "dan",
              dd: za,
              M: "mjesec",
              MM: za,
              y: "godinu",
              yy: za
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("ca", {
          months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
          monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
          weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: function() {
                  return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              },
              nextDay: function() {
                  return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              },
              nextWeek: function() {
                  return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              },
              lastDay: function() {
                  return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              },
              lastWeek: function() {
                  return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "en %s",
              past: "fa %s",
              s: "uns segons",
              m: "un minut",
              mm: "%d minuts",
              h: "una hora",
              hh: "%d hores",
              d: "un dia",
              dd: "%d dies",
              M: "un mes",
              MM: "%d mesos",
              y: "un any",
              yy: "%d anys"
          },
          ordinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function(e, t) {
              var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
              return ("w" === t || "W" === t) && (a = "a"), e + a
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
      k_ = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
      g_ = (i_.defineLocale("cs", {
          months: D_,
          monthsShort: k_,
          monthsParse: function(e, t) {
              var a, n = [];
              for (a = 0; 12 > a; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
              return n
          }(D_, k_),
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[dnes v] LT",
              nextDay: "[zítra v] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[v neděli v] LT";
                      case 1:
                      case 2:
                          return "[v] dddd [v] LT";
                      case 3:
                          return "[ve středu v] LT";
                      case 4:
                          return "[ve čtvrtek v] LT";
                      case 5:
                          return "[v pátek v] LT";
                      case 6:
                          return "[v sobotu v] LT"
                  }
              },
              lastDay: "[včera v] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[minulou neděli v] LT";
                      case 1:
                      case 2:
                          return "[minulé] dddd [v] LT";
                      case 3:
                          return "[minulou středu v] LT";
                      case 4:
                      case 5:
                          return "[minulý] dddd [v] LT";
                      case 6:
                          return "[minulou sobotu v] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "před %s",
              s: Aa,
              m: Aa,
              mm: Aa,
              h: Aa,
              hh: Aa,
              d: Aa,
              dd: Aa,
              M: Aa,
              MM: Aa,
              y: Aa,
              yy: Aa
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("cv", {
          months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
          monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
          weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
          weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD-MM-YYYY",
              LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
              LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
              LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
          },
          calendar: {
              sameDay: "[Паян] LT [сехетре]",
              nextDay: "[Ыран] LT [сехетре]",
              lastDay: "[Ĕнер] LT [сехетре]",
              nextWeek: "[Çитес] dddd LT [сехетре]",
              lastWeek: "[Иртнĕ] dddd LT [сехетре]",
              sameElse: "L"
          },
          relativeTime: {
              future: function(e) {
                  var t = /сехет$/i.exec(e) ? "рен" : /çул$/i.exec(e) ? "тан" : "ран";
                  return e + t
              },
              past: "%s каялла",
              s: "пĕр-ик çеккунт",
              m: "пĕр минут",
              mm: "%d минут",
              h: "пĕр сехет",
              hh: "%d сехет",
              d: "пĕр кун",
              dd: "%d кун",
              M: "пĕр уйăх",
              MM: "%d уйăх",
              y: "пĕр çул",
              yy: "%d çул"
          },
          ordinalParse: /\d{1,2}-мĕш/,
          ordinal: "%d-мĕш",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("cy", {
          months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
          monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Heddiw am] LT",
              nextDay: "[Yfory am] LT",
              nextWeek: "dddd [am] LT",
              lastDay: "[Ddoe am] LT",
              lastWeek: "dddd [diwethaf am] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "mewn %s",
              past: "%s yn ôl",
              s: "ychydig eiliadau",
              m: "munud",
              mm: "%d munud",
              h: "awr",
              hh: "%d awr",
              d: "diwrnod",
              dd: "%d diwrnod",
              M: "mis",
              MM: "%d mis",
              y: "blwyddyn",
              yy: "%d flynedd"
          },
          ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function(e) {
              var t = e,
                  a = "",
                  n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
              return t > 20 ? a = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (a = n[t]), e + a
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("da", {
          months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd [d.] D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[I dag kl.] LT",
              nextDay: "[I morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[I går kl.] LT",
              lastWeek: "[sidste] dddd [kl] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "få sekunder",
              m: "et minut",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dage",
              M: "en måned",
              MM: "%d måneder",
              y: "et år",
              yy: "%d år"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("de-at", {
          months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[Morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[Gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              m: Oa,
              mm: "%d Minuten",
              h: Oa,
              hh: "%d Stunden",
              d: Oa,
              dd: Oa,
              M: Oa,
              MM: Oa,
              y: Oa,
              yy: Oa
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("de", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[Morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[Gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              m: Ja,
              mm: "%d Minuten",
              h: Ja,
              hh: "%d Stunden",
              d: Ja,
              dd: Ja,
              M: Ja,
              MM: Ja,
              y: Ja,
              yy: Ja
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("el", {
          monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
          monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
          months: function(e, t) {
              return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
          },
          monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
          weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function(e, t, a) {
              return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
          },
          isPM: function(e) {
              return "μ" === (e + "").toLowerCase()[0]
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendarEl: {
              sameDay: "[Σήμερα {}] LT",
              nextDay: "[Αύριο {}] LT",
              nextWeek: "dddd [{}] LT",
              lastDay: "[Χθες {}] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 6:
                          return "[το προηγούμενο] dddd [{}] LT";
                      default:
                          return "[την προηγούμενη] dddd [{}] LT"
                  }
              },
              sameElse: "L"
          },
          calendar: function(e, t) {
              var a = this._calendarEl[e],
                  n = t && t.hours();
              return "function" == typeof a && (a = a.apply(t)), a.replace("{}", n % 12 === 1 ? "στη" : "στις")
          },
          relativeTime: {
              future: "σε %s",
              past: "%s πριν",
              s: "λίγα δευτερόλεπτα",
              m: "ένα λεπτό",
              mm: "%d λεπτά",
              h: "μία ώρα",
              hh: "%d ώρες",
              d: "μία μέρα",
              dd: "%d μέρες",
              M: "ένας μήνας",
              MM: "%d μήνες",
              y: "ένας χρόνος",
              yy: "%d χρόνια"
          },
          ordinalParse: /\d{1,2}η/,
          ordinal: "%dη",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("en-au", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
          },
          ordinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
              return e + a
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("en-ca", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "YYYY-MM-DD",
              LL: "D MMMM, YYYY",
              LLL: "D MMMM, YYYY LT",
              LLLL: "dddd, D MMMM, YYYY LT"
          },
          calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
          },
          ordinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
              return e + a
          }
      }), i_.defineLocale("en-gb", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
          },
          ordinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
              return e + a
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("eo", {
          months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
          weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
          weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "YYYY-MM-DD",
              LL: "D[-an de] MMMM, YYYY",
              LLL: "D[-an de] MMMM, YYYY LT",
              LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function(e) {
              return "p" === e.charAt(0).toLowerCase()
          },
          meridiem: function(e, t, a) {
              return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
          },
          calendar: {
              sameDay: "[Hodiaŭ je] LT",
              nextDay: "[Morgaŭ je] LT",
              nextWeek: "dddd [je] LT",
              lastDay: "[Hieraŭ je] LT",
              lastWeek: "[pasinta] dddd [je] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "je %s",
              past: "antaŭ %s",
              s: "sekundoj",
              m: "minuto",
              mm: "%d minutoj",
              h: "horo",
              hh: "%d horoj",
              d: "tago",
              dd: "%d tagoj",
              M: "monato",
              MM: "%d monatoj",
              y: "jaro",
              yy: "%d jaroj"
          },
          ordinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: {
              dow: 1,
              doy: 7
          }
      }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
      w_ = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      v_ = (i_.defineLocale("es", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
          monthsShort: function(e, t) {
              return /-MMM-/.test(t) ? w_[e.month()] : g_[e.month()]
          },
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY LT",
              LLLL: "dddd, D [de] MMMM [de] YYYY LT"
          },
          calendar: {
              sameDay: function() {
                  return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextDay: function() {
                  return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextWeek: function() {
                  return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastDay: function() {
                  return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastWeek: function() {
                  return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años"
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("et", {
          months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
          monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
          weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Täna,] LT",
              nextDay: "[Homme,] LT",
              nextWeek: "[Järgmine] dddd LT",
              lastDay: "[Eile,] LT",
              lastWeek: "[Eelmine] dddd LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s pärast",
              past: "%s tagasi",
              s: Ca,
              m: Ca,
              mm: Ca,
              h: Ca,
              hh: Ca,
              d: Ca,
              dd: "%d päeva",
              M: Ca,
              MM: Ca,
              y: Ca,
              yy: Ca
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("eu", {
          months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
          monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
          weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] LT",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] LT",
              llll: "ddd, YYYY[ko] MMM D[a] LT"
          },
          calendar: {
              sameDay: "[gaur] LT[etan]",
              nextDay: "[bihar] LT[etan]",
              nextWeek: "dddd LT[etan]",
              lastDay: "[atzo] LT[etan]",
              lastWeek: "[aurreko] dddd LT[etan]",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), {
          1: "۱",
          2: "۲",
          3: "۳",
          4: "۴",
          5: "۵",
          6: "۶",
          7: "۷",
          8: "۸",
          9: "۹",
          0: "۰"
      }),
      S_ = {
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
          "۰": "0"
      },
      b_ = (i_.defineLocale("fa", {
          months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
          monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function(e) {
              return /بعد از ظهر/.test(e)
          },
          meridiem: function(e) {
              return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
          },
          calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چندین ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال"
          },
          preparse: function(e) {
              return e.replace(/[۰-۹]/g, function(e) {
                  return S_[e]
              }).replace(/،/g, ",")
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return v_[e]
              }).replace(/,/g, "،")
          },
          ordinalParse: /\d{1,2}م/,
          ordinal: "%dم",
          week: {
              dow: 6,
              doy: 12
          }
      }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
      j_ = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", b_[7], b_[8], b_[9]],
      W_ = (i_.defineLocale("fi", {
          months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
          monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
          weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[ta] YYYY",
              LLL: "Do MMMM[ta] YYYY, [klo] LT",
              LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
              l: "D.M.YYYY",
              ll: "Do MMM YYYY",
              lll: "Do MMM YYYY, [klo] LT",
              llll: "ddd, Do MMM YYYY, [klo] LT"
          },
          calendar: {
              sameDay: "[tänään] [klo] LT",
              nextDay: "[huomenna] [klo] LT",
              nextWeek: "dddd [klo] LT",
              lastDay: "[eilen] [klo] LT",
              lastWeek: "[viime] dddd[na] [klo] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s päästä",
              past: "%s sitten",
              s: Ga,
              m: Ga,
              mm: Ga,
              h: Ga,
              hh: Ga,
              d: Ga,
              dd: Ga,
              M: Ga,
              MM: Ga,
              y: Ga,
              yy: Ga
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("fo", {
          months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D. MMMM, YYYY LT"
          },
          calendar: {
              sameDay: "[Í dag kl.] LT",
              nextDay: "[Í morgin kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[Í gjár kl.] LT",
              lastWeek: "[síðstu] dddd [kl] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              m: "ein minutt",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaði",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("fr-ca", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Aujourd'hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
          },
          ordinalParse: /\d{1,2}(er|)/,
          ordinal: function(e) {
              return e + (1 === e ? "er" : "")
          }
      }), i_.defineLocale("fr", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Aujourd'hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
          },
          ordinalParse: /\d{1,2}(er|)/,
          ordinal: function(e) {
              return e + (1 === e ? "er" : "")
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
      x_ = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
      H_ = (i_.defineLocale("fy", {
          months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
          monthsShort: function(e, t) {
              return /-MMM-/.test(t) ? x_[e.month()] : W_[e.month()]
          },
          weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren"
          },
          ordinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("gl", {
          months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
          monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
          weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
          weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
          weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: function() {
                  return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
              },
              nextDay: function() {
                  return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
              },
              nextWeek: function() {
                  return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
              },
              lastDay: function() {
                  return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
              },
              lastWeek: function() {
                  return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: function(e) {
                  return "uns segundos" === e ? "nuns segundos" : "en " + e
              },
              past: "hai %s",
              s: "uns segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "unha hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un ano",
              yy: "%d anos"
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("he", {
          months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
          monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D [ב]MMMM YYYY",
              LLL: "D [ב]MMMM YYYY LT",
              LLLL: "dddd, D [ב]MMMM YYYY LT",
              l: "D/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY LT",
              llll: "ddd, D MMM YYYY LT"
          },
          calendar: {
              sameDay: "[היום ב־]LT",
              nextDay: "[מחר ב־]LT",
              nextWeek: "dddd [בשעה] LT",
              lastDay: "[אתמול ב־]LT",
              lastWeek: "[ביום] dddd [האחרון בשעה] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "בעוד %s",
              past: "לפני %s",
              s: "מספר שניות",
              m: "דקה",
              mm: "%d דקות",
              h: "שעה",
              hh: function(e) {
                  return 2 === e ? "שעתיים" : e + " שעות"
              },
              d: "יום",
              dd: function(e) {
                  return 2 === e ? "יומיים" : e + " ימים"
              },
              M: "חודש",
              MM: function(e) {
                  return 2 === e ? "חודשיים" : e + " חודשים"
              },
              y: "שנה",
              yy: function(e) {
                  return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
              }
          }
      }), {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
      }),
      P_ = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
      },
      F_ = (i_.defineLocale("hi", {
          months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
          monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
          weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष"
          },
          preparse: function(e) {
              return e.replace(/[१२३४५६७८९०]/g, function(e) {
                  return P_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return H_[e]
              })
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
          },
          meridiem: function(e) {
              return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
          },
          week: {
              dow: 0,
              doy: 6
          }
      }), i_.defineLocale("hr", {
          months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
          monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[u] [nedjelju] [u] LT";
                      case 3:
                          return "[u] [srijedu] [u] LT";
                      case 6:
                          return "[u] [subotu] [u] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[u] dddd [u] LT"
                  }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                          return "[prošlu] dddd [u] LT";
                      case 6:
                          return "[prošle] [subote] [u] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[prošli] dddd [u] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              m: Na,
              mm: Na,
              h: Na,
              hh: Na,
              d: "dan",
              dd: Na,
              M: "mjesec",
              MM: Na,
              y: "godinu",
              yy: Na
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),
      z_ = (i_.defineLocale("hu", {
          months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
          monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D., LT",
              LLLL: "YYYY. MMMM D., dddd LT"
          },
          meridiemParse: /de|du/i,
          isPM: function(e) {
              return "u" === e.charAt(1).toLowerCase()
          },
          meridiem: function(e, t, a) {
              return 12 > e ? a === !0 ? "de" : "DE" : a === !0 ? "du" : "DU"
          },
          calendar: {
              sameDay: "[ma] LT[-kor]",
              nextDay: "[holnap] LT[-kor]",
              nextWeek: function() {
                  return Va.call(this, !0)
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function() {
                  return Va.call(this, !1)
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "%s múlva",
              past: "%s",
              s: Ia,
              m: Ia,
              mm: Ia,
              h: Ia,
              hh: Ia,
              d: Ia,
              dd: Ia,
              M: Ia,
              MM: Ia,
              y: Ia,
              yy: Ia
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("hy-am", {
          months: qa,
          monthsShort: $a,
          weekdays: Za,
          weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., LT",
              LLLL: "dddd, D MMMM YYYY թ., LT"
          },
          calendar: {
              sameDay: "[այսօր] LT",
              nextDay: "[վաղը] LT",
              lastDay: "[երեկ] LT",
              nextWeek: function() {
                  return "dddd [օրը ժամը] LT"
              },
              lastWeek: function() {
                  return "[անցած] dddd [օրը ժամը] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի"
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function(e) {
              return /^(ցերեկվա|երեկոյան)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
          },
          ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "DDD":
                  case "w":
                  case "W":
                  case "DDDo":
                      return 1 === e ? e + "-ին" : e + "-րդ";
                  default:
                      return e
              }
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("id", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
              LT: "HH.mm",
              LTS: "LT.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] LT",
              LLLL: "dddd, D MMMM YYYY [pukul] LT"
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
          },
          meridiem: function(e) {
              return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
          },
          calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Besok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kemarin pukul] LT",
              lastWeek: "dddd [lalu pukul] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("is", {
          months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
          weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] LT",
              LLLL: "dddd, D. MMMM YYYY [kl.] LT"
          },
          calendar: {
              sameDay: "[í dag kl.] LT",
              nextDay: "[á morgun kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[í gær kl.] LT",
              lastWeek: "[síðasta] dddd [kl.] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "eftir %s",
              past: "fyrir %s síðan",
              s: Ka,
              m: Ka,
              mm: Ka,
              h: "klukkustund",
              hh: Ka,
              d: Ka,
              dd: Ka,
              M: Ka,
              MM: Ka,
              y: Ka,
              yy: Ka
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("it", {
          months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
          weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
          weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
          weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Oggi alle] LT",
              nextDay: "[Domani alle] LT",
              nextWeek: "dddd [alle] LT",
              lastDay: "[Ieri alle] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[la scorsa] dddd [alle] LT";
                      default:
                          return "[lo scorso] dddd [alle] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: function(e) {
                  return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
              },
              past: "%s fa",
              s: "alcuni secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni"
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("ja", {
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
              LT: "Ah時m分",
              LTS: "LTs秒",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日LT",
              LLLL: "YYYY年M月D日LT dddd"
          },
          meridiemParse: /午前|午後/i,
          isPM: function(e) {
              return "午後" === e
          },
          meridiem: function(e) {
              return 12 > e ? "午前" : "午後"
          },
          calendar: {
              sameDay: "[今日] LT",
              nextDay: "[明日] LT",
              nextWeek: "[来週]dddd LT",
              lastDay: "[昨日] LT",
              lastWeek: "[前週]dddd LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年"
          }
      }), i_.defineLocale("ka", {
          months: Ba,
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
          weekdays: Xa,
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[დღეს] LT[-ზე]",
              nextDay: "[ხვალ] LT[-ზე]",
              lastDay: "[გუშინ] LT[-ზე]",
              nextWeek: "[შემდეგ] dddd LT[-ზე]",
              lastWeek: "[წინა] dddd LT-ზე",
              sameElse: "L"
          },
          relativeTime: {
              future: function(e) {
                  return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
              },
              past: function(e) {
                  return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
              },
              s: "რამდენიმე წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათი",
              d: "დღე",
              dd: "%d დღე",
              M: "თვე",
              MM: "%d თვე",
              y: "წელი",
              yy: "%d წელი"
          },
          ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function(e) {
              return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("km", {
          months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
          monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
          weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ"
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
              LT: "A h시 m분",
              LTS: "A h시 m분 s초",
              L: "YYYY.MM.DD",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 LT",
              LLLL: "YYYY년 MMMM D일 dddd LT"
          },
          calendar: {
              sameDay: "오늘 LT",
              nextDay: "내일 LT",
              nextWeek: "dddd LT",
              lastDay: "어제 LT",
              lastWeek: "지난주 dddd LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇초",
              ss: "%d초",
              m: "일분",
              mm: "%d분",
              h: "한시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한달",
              MM: "%d달",
              y: "일년",
              yy: "%d년"
          },
          ordinalParse: /\d{1,2}일/,
          ordinal: "%d일",
          meridiemParse: /오전|오후/,
          isPM: function(e) {
              return "오후" === e
          },
          meridiem: function(e) {
              return 12 > e ? "오전" : "오후"
          }
      }), i_.defineLocale("lb", {
          months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
          weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
          weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
          longDateFormat: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Haut um] LT",
              sameElse: "L",
              nextDay: "[Muer um] LT",
              nextWeek: "dddd [um] LT",
              lastDay: "[Gëschter um] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 2:
                      case 4:
                          return "[Leschten] dddd [um] LT";
                      default:
                          return "[Leschte] dddd [um] LT"
                  }
              }
          },
          relativeTime: {
              future: en,
              past: tn,
              s: "e puer Sekonnen",
              m: Qa,
              mm: "%d Minutten",
              h: Qa,
              hh: "%d Stonnen",
              d: Qa,
              dd: "%d Deeg",
              M: Qa,
              MM: "%d Méint",
              y: Qa,
              yy: "%d Joer"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus"
      }),
      E_ = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
      A_ = (i_.defineLocale("lt", {
          months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
          weekdays: on,
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY [m.] MMMM D [d.]",
              LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
              LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
              l: "YYYY-MM-DD",
              ll: "YYYY [m.] MMMM D [d.]",
              lll: "YYYY [m.] MMMM D [d.], LT [val.]",
              llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
          },
          calendar: {
              sameDay: "[Šiandien] LT",
              nextDay: "[Rytoj] LT",
              nextWeek: "dddd LT",
              lastDay: "[Vakar] LT",
              lastWeek: "[Praėjusį] dddd LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "po %s",
              past: "prieš %s",
              s: nn,
              m: sn,
              mm: dn,
              h: sn,
              hh: dn,
              d: sn,
              dd: dn,
              M: sn,
              MM: dn,
              y: sn,
              yy: dn
          },
          ordinalParse: /\d{1,2}-oji/,
          ordinal: function(e) {
              return e + "-oji"
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          mm: "minūti_minūtes_minūte_minūtes",
          hh: "stundu_stundas_stunda_stundas",
          dd: "dienu_dienas_diena_dienas",
          MM: "mēnesi_mēnešus_mēnesis_mēneši",
          yy: "gadu_gadus_gads_gadi"
      }),
      O_ = (i_.defineLocale("lv", {
          months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
          weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, LT",
              LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
          },
          calendar: {
              sameDay: "[Šodien pulksten] LT",
              nextDay: "[Rīt pulksten] LT",
              nextWeek: "dddd [pulksten] LT",
              lastDay: "[Vakar pulksten] LT",
              lastWeek: "[Pagājušā] dddd [pulksten] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s vēlāk",
              past: "%s agrāk",
              s: "dažas sekundes",
              m: "minūti",
              mm: mn,
              h: "stundu",
              hh: mn,
              d: "dienu",
              dd: mn,
              M: "mēnesi",
              MM: mn,
              y: "gadu",
              yy: mn
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("mk", {
          months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
          monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
          weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
          weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
          weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Денес во] LT",
              nextDay: "[Утре во] LT",
              nextWeek: "dddd [во] LT",
              lastDay: "[Вчера во] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                          return "[Во изминатата] dddd [во] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[Во изминатиот] dddd [во] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "после %s",
              past: "пред %s",
              s: "неколку секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              M: "месец",
              MM: "%d месеци",
              y: "година",
              yy: "%d години"
          },
          ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = e % 100;
              return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && 20 > a ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("ml", {
          months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
          monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
          weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[ഇന്ന്] LT",
              nextDay: "[നാളെ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ഇന്നലെ] LT",
              lastWeek: "[കഴിഞ്ഞ] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം"
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          isPM: function(e) {
              return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
          }
      }), {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
      }),
      J_ = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
      },
      C_ = (i_.defineLocale("mr", {
          months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
          monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
          weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[आज] LT",
              nextDay: "[उद्या] LT",
              nextWeek: "dddd, LT",
              lastDay: "[काल] LT",
              lastWeek: "[मागील] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s नंतर",
              past: "%s पूर्वी",
              s: "सेकंद",
              m: "एक मिनिट",
              mm: "%d मिनिटे",
              h: "एक तास",
              hh: "%d तास",
              d: "एक दिवस",
              dd: "%d दिवस",
              M: "एक महिना",
              MM: "%d महिने",
              y: "एक वर्ष",
              yy: "%d वर्षे"
          },
          preparse: function(e) {
              return e.replace(/[१२३४५६७८९०]/g, function(e) {
                  return J_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return O_[e]
              })
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
          },
          meridiem: function(e) {
              return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
          },
          week: {
              dow: 0,
              doy: 6
          }
      }), i_.defineLocale("ms-my", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
              LT: "HH.mm",
              LTS: "LT.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] LT",
              LLLL: "dddd, D MMMM YYYY [pukul] LT"
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
          },
          meridiem: function(e) {
              return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
          },
          calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), {
          1: "၁",
          2: "၂",
          3: "၃",
          4: "၄",
          5: "၅",
          6: "၆",
          7: "၇",
          8: "၈",
          9: "၉",
          0: "၀"
      }),
      G_ = {
          "၁": "1",
          "၂": "2",
          "၃": "3",
          "၄": "4",
          "၅": "5",
          "၆": "6",
          "၇": "7",
          "၈": "8",
          "၉": "9",
          "၀": "0"
      },
      U_ = (i_.defineLocale("my", {
          months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
          monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
          weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
          weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L"
          },
          relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်"
          },
          preparse: function(e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                  return G_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return C_[e]
              })
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("nb", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
              LT: "H.mm",
              LTS: "LT.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] LT",
              LLLL: "dddd D. MMMM YYYY [kl.] LT"
          },
          calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[forrige] dddd [kl.] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "om %s",
              past: "for %s siden",
              s: "noen sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dager",
              M: "en måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
      }),
      N_ = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
      },
      I_ = (i_.defineLocale("ne", {
          months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
          monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
          weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
          longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          preparse: function(e) {
              return e.replace(/[१२३४५६७८९०]/g, function(e) {
                  return N_[e]
              })
          },
          postformat: function(e) {
              return e.replace(/\d/g, function(e) {
                  return U_[e]
              })
          },
          meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "राती" === t ? 3 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "बेलुका" === t || "साँझ" === t ? e + 12 : void 0
          },
          meridiem: function(e) {
              return 3 > e ? "राती" : 10 > e ? "बिहान" : 15 > e ? "दिउँसो" : 18 > e ? "बेलुका" : 20 > e ? "साँझ" : "राती"
          },
          calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोली] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%sमा",
              past: "%s अगाडी",
              s: "केही समय",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
      V_ = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      q_ = (i_.defineLocale("nl", {
          months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
          monthsShort: function(e, t) {
              return /-MMM-/.test(t) ? V_[e.month()] : I_[e.month()]
          },
          weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar"
          },
          ordinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("nn", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
          weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[I dag klokka] LT",
              nextDay: "[I morgon klokka] LT",
              nextWeek: "dddd [klokka] LT",
              lastDay: "[I går klokka] LT",
              lastWeek: "[Føregåande] dddd [klokka] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "om %s",
              past: "for %s sidan",
              s: "nokre sekund",
              m: "eit minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              M: "ein månad",
              MM: "%d månader",
              y: "eit år",
              yy: "%d år"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
      $_ = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
      Z_ = (i_.defineLocale("pl", {
          months: function(e, t) {
              return /D MMMM/.test(t) ? $_[e.month()] : q_[e.month()]
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
          weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
          weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
          weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Dziś o] LT",
              nextDay: "[Jutro o] LT",
              nextWeek: "[W] dddd [o] LT",
              lastDay: "[Wczoraj o] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[W zeszłą niedzielę o] LT";
                      case 3:
                          return "[W zeszłą środę o] LT";
                      case 6:
                          return "[W zeszłą sobotę o] LT";
                      default:
                          return "[W zeszły] dddd [o] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "%s temu",
              s: "kilka sekund",
              m: Mn,
              mm: Mn,
              h: Mn,
              hh: Mn,
              d: "1 dzień",
              dd: "%d dni",
              M: "miesiąc",
              MM: Mn,
              y: "rok",
              yy: Mn
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("pt-br", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
          weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
          weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] LT",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
          },
          calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function() {
                  return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "em %s",
              past: "%s atrás",
              s: "segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos"
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº"
      }), i_.defineLocale("pt", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
          weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
          weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY LT",
              LLLL: "dddd, D [de] MMMM [de] YYYY LT"
          },
          calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function() {
                  return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos"
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("ro", {
          months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
          monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
          weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
              sameDay: "[azi la] LT",
              nextDay: "[mâine la] LT",
              nextWeek: "dddd [la] LT",
              lastDay: "[ieri la] LT",
              lastWeek: "[fosta] dddd [la] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "peste %s",
              past: "%s în urmă",
              s: "câteva secunde",
              m: "un minut",
              mm: Ln,
              h: "o oră",
              hh: Ln,
              d: "o zi",
              dd: Ln,
              M: "o lună",
              MM: Ln,
              y: "un an",
              yy: Ln
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("ru", {
          months: Yn,
          monthsShort: yn,
          weekdays: fn,
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., LT",
              LLLL: "dddd, D MMMM YYYY г., LT"
          },
          calendar: {
              sameDay: "[Сегодня в] LT",
              nextDay: "[Завтра в] LT",
              lastDay: "[Вчера в] LT",
              nextWeek: function() {
                  return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
              },
              lastWeek: function(e) {
                  if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                  switch (this.day()) {
                      case 0:
                          return "[В прошлое] dddd [в] LT";
                      case 1:
                      case 2:
                      case 4:
                          return "[В прошлый] dddd [в] LT";
                      case 3:
                      case 5:
                      case 6:
                          return "[В прошлую] dddd [в] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              m: hn,
              mm: hn,
              h: "час",
              hh: hn,
              d: "день",
              dd: hn,
              M: "месяц",
              MM: hn,
              y: "год",
              yy: hn
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function(e) {
              return /^(дня|вечера)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
          },
          ordinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                      return e + "-й";
                  case "D":
                      return e + "-го";
                  case "w":
                  case "W":
                      return e + "-я";
                  default:
                      return e
              }
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
      R_ = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
      K_ = (i_.defineLocale("sk", {
          months: Z_,
          monthsShort: R_,
          monthsParse: function(e, t) {
              var a, n = [];
              for (a = 0; 12 > a; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
              return n
          }(Z_, R_),
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[dnes o] LT",
              nextDay: "[zajtra o] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[v nedeľu o] LT";
                      case 1:
                      case 2:
                          return "[v] dddd [o] LT";
                      case 3:
                          return "[v stredu o] LT";
                      case 4:
                          return "[vo štvrtok o] LT";
                      case 5:
                          return "[v piatok o] LT";
                      case 6:
                          return "[v sobotu o] LT"
                  }
              },
              lastDay: "[včera o] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[minulú nedeľu o] LT";
                      case 1:
                      case 2:
                          return "[minulý] dddd [o] LT";
                      case 3:
                          return "[minulú stredu o] LT";
                      case 4:
                      case 5:
                          return "[minulý] dddd [o] LT";
                      case 6:
                          return "[minulú sobotu o] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "pred %s",
              s: Tn,
              m: Tn,
              mm: Tn,
              h: Tn,
              hh: Tn,
              d: Tn,
              dd: Tn,
              M: Tn,
              MM: Tn,
              y: Tn,
              yy: Tn
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("sl", {
          months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[danes ob] LT",
              nextDay: "[jutri ob] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[v] [nedeljo] [ob] LT";
                      case 3:
                          return "[v] [sredo] [ob] LT";
                      case 6:
                          return "[v] [soboto] [ob] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[v] dddd [ob] LT"
                  }
              },
              lastDay: "[včeraj ob] LT",
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                          return "[prejšnja] dddd [ob] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[prejšnji] dddd [ob] LT"
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "čez %s",
              past: "%s nazaj",
              s: "nekaj sekund",
              m: Dn,
              mm: Dn,
              h: Dn,
              hh: Dn,
              d: "en dan",
              dd: Dn,
              M: "en mesec",
              MM: Dn,
              y: "eno leto",
              yy: Dn
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("sq", {
          months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
          weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          meridiemParse: /PD|MD/,
          isPM: function(e) {
              return "M" === e.charAt(0)
          },
          meridiem: function(e) {
              return 12 > e ? "PD" : "MD"
          },
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Sot në] LT",
              nextDay: "[Nesër në] LT",
              nextWeek: "dddd [në] LT",
              lastDay: "[Dje në] LT",
              lastWeek: "dddd [e kaluar në] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite"
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          words: {
              m: ["један минут", "једне минуте"],
              mm: ["минут", "минуте", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              dd: ["дан", "дана", "дана"],
              MM: ["месец", "месеца", "месеци"],
              yy: ["година", "године", "година"]
          },
          correctGrammaticalCase: function(e, t) {
              return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
          },
          translate: function(e, t, a) {
              var n = K_.words[a];
              return 1 === a.length ? t ? n[0] : n[1] : e + " " + K_.correctGrammaticalCase(e, n)
          }
      }),
      B_ = (i_.defineLocale("sr-cyrl", {
          months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
          monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
          weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
          weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
          weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[у] [недељу] [у] LT";
                      case 3:
                          return "[у] [среду] [у] LT";
                      case 6:
                          return "[у] [суботу] [у] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[у] dddd [у] LT"
                  }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function() {
                  var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                  return e[this.day()]
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              m: K_.translate,
              mm: K_.translate,
              h: K_.translate,
              hh: K_.translate,
              d: "дан",
              dd: K_.translate,
              M: "месец",
              MM: K_.translate,
              y: "годину",
              yy: K_.translate
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), {
          words: {
              m: ["jedan minut", "jedne minute"],
              mm: ["minut", "minute", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mesec", "meseca", "meseci"],
              yy: ["godina", "godine", "godina"]
          },
          correctGrammaticalCase: function(e, t) {
              return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
          },
          translate: function(e, t, a) {
              var n = B_.words[a];
              return 1 === a.length ? t ? n[0] : n[1] : e + " " + B_.correctGrammaticalCase(e, n)
          }
      }),
      X_ = (i_.defineLocale("sr", {
          months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
          monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
          weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
          weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
          weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
          longDateFormat: {
              LT: "H:mm",
              LTS: "LT:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY LT",
              LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function() {
                  switch (this.day()) {
                      case 0:
                          return "[u] [nedelju] [u] LT";
                      case 3:
                          return "[u] [sredu] [u] LT";
                      case 6:
                          return "[u] [subotu] [u] LT";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "[u] dddd [u] LT"
                  }
              },
              lastDay: "[juče u] LT",
              lastWeek: function() {
                  var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                  return e[this.day()]
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              m: B_.translate,
              mm: B_.translate,
              h: B_.translate,
              hh: B_.translate,
              d: "dan",
              dd: B_.translate,
              M: "mesec",
              MM: B_.translate,
              y: "godinu",
              yy: B_.translate
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("sv", {
          months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[Idag] LT",
              nextDay: "[Imorgon] LT",
              lastDay: "[Igår] LT",
              nextWeek: "dddd LT",
              lastWeek: "[Förra] dddd[en] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år"
          },
          ordinalParse: /\d{1,2}(e|a)/,
          ordinal: function(e) {
              var t = e % 10,
                  a = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
              return e + a
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("ta", {
          months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
          monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
          weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
          weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
          weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, LT",
              LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்"
          },
          ordinalParse: /\d{1,2}வது/,
          ordinal: function(e) {
              return e + "வது"
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function(e) {
              return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
          },
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
          },
          week: {
              dow: 0,
              doy: 6
          }
      }), i_.defineLocale("th", {
          months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
          monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          longDateFormat: {
              LT: "H นาฬิกา m นาที",
              LTS: "LT s วินาที",
              L: "YYYY/MM/DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา LT",
              LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function(e) {
              return "หลังเที่ยง" === e
          },
          meridiem: function(e) {
              return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
          },
          calendar: {
              sameDay: "[วันนี้ เวลา] LT",
              nextDay: "[พรุ่งนี้ เวลา] LT",
              nextWeek: "dddd[หน้า เวลา] LT",
              lastDay: "[เมื่อวานนี้ เวลา] LT",
              lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี"
          }
      }), i_.defineLocale("tl-ph", {
          months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
          weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY LT",
              LLLL: "dddd, MMMM DD, YYYY LT"
          },
          calendar: {
              sameDay: "[Ngayon sa] LT",
              nextDay: "[Bukas sa] LT",
              nextWeek: "dddd [sa] LT",
              lastDay: "[Kahapon sa] LT",
              lastWeek: "dddd [huling linggo] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon"
          },
          ordinalParse: /\d{1,2}/,
          ordinal: function(e) {
              return e
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı"
      }),
      Q_ = (i_.defineLocale("tr", {
          months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
          weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
          weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[haftaya] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen hafta] dddd [saat] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl"
          },
          ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
          ordinal: function(e) {
              if (0 === e) return e + "'ıncı";
              var t = e % 10,
                  a = e % 100 - t,
                  n = e >= 100 ? 100 : null;
              return e + (X_[t] || X_[a] || X_[n])
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("tzm-latn", {
          months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[asdkh g] LT",
              nextDay: "[aska g] LT",
              nextWeek: "dddd [g] LT",
              lastDay: "[assant g] LT",
              lastWeek: "dddd [g] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn"
          },
          week: {
              dow: 6,
              doy: 12
          }
      }), i_.defineLocale("tzm", {
          months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
              sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
              nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
              nextWeek: "dddd [ⴴ] LT",
              lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
              lastWeek: "dddd [ⴴ] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ"
          },
          week: {
              dow: 6,
              doy: 12
          }
      }), i_.defineLocale("uk", {
          months: wn,
          monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: vn,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY р.",
              LLL: "D MMMM YYYY р., LT",
              LLLL: "dddd, D MMMM YYYY р., LT"
          },
          calendar: {
              sameDay: Sn("[Сьогодні "),
              nextDay: Sn("[Завтра "),
              lastDay: Sn("[Вчора "),
              nextWeek: Sn("[У] dddd ["),
              lastWeek: function() {
                  switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                          return Sn("[Минулої] dddd [").call(this);
                      case 1:
                      case 2:
                      case 4:
                          return Sn("[Минулого] dddd [").call(this)
                  }
              },
              sameElse: "L"
          },
          relativeTime: {
              future: "за %s",
              past: "%s тому",
              s: "декілька секунд",
              m: gn,
              mm: gn,
              h: "годину",
              hh: gn,
              d: "день",
              dd: gn,
              M: "місяць",
              MM: gn,
              y: "рік",
              yy: gn
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function(e) {
              return /^(дня|вечора)$/.test(e)
          },
          meridiem: function(e) {
              return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
          },
          ordinalParse: /\d{1,2}-(й|го)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                      return e + "-й";
                  case "D":
                      return e + "-го";
                  default:
                      return e
              }
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("uz", {
          months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
          weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY LT",
              LLLL: "D MMMM YYYY, dddd LT"
          },
          calendar: {
              sameDay: "[Бугун соат] LT [да]",
              nextDay: "[Эртага] LT [да]",
              nextWeek: "dddd [куни соат] LT [да]",
              lastDay: "[Кеча соат] LT [да]",
              lastWeek: "[Утган] dddd [куни соат] LT [да]",
              sameElse: "L"
          },
          relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил"
          },
          week: {
              dow: 1,
              doy: 7
          }
      }), i_.defineLocale("vi", {
          months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
          monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
          weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          longDateFormat: {
              LT: "HH:mm",
              LTS: "LT:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY LT",
              LLLL: "dddd, D MMMM [năm] YYYY LT",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY LT",
              llll: "ddd, D MMM YYYY LT"
          },
          calendar: {
              sameDay: "[Hôm nay lúc] LT",
              nextDay: "[Ngày mai lúc] LT",
              nextWeek: "dddd [tuần tới lúc] LT",
              lastDay: "[Hôm qua lúc] LT",
              lastWeek: "dddd [tuần rồi lúc] LT",
              sameElse: "L"
          },
          relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm"
          },
          ordinalParse: /\d{1,2}/,
          ordinal: function(e) {
              return e
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("zh-cn", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
              LT: "Ah点mm",
              LTS: "Ah点m分s秒",
              L: "YYYY-MM-DD",
              LL: "YYYY年MMMD日",
              LLL: "YYYY年MMMD日LT",
              LLLL: "YYYY年MMMD日ddddLT",
              l: "YYYY-MM-DD",
              ll: "YYYY年MMMD日",
              lll: "YYYY年MMMD日LT",
              llll: "YYYY年MMMD日ddddLT"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
          },
          meridiem: function(e, t) {
              var a = 100 * e + t;
              return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
          },
          calendar: {
              sameDay: function() {
                  return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
              },
              nextDay: function() {
                  return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
              },
              lastDay: function() {
                  return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
              },
              nextWeek: function() {
                  var e, t;
                  return e = i_().startOf("week"), t = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
              },
              lastWeek: function() {
                  var e, t;
                  return e = i_().startOf("week"), t = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
              },
              sameElse: "LL"
          },
          ordinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                      return e + "日";
                  case "M":
                      return e + "月";
                  case "w":
                  case "W":
                      return e + "周";
                  default:
                      return e
              }
          },
          relativeTime: {
              future: "%s内",
              past: "%s前",
              s: "几秒",
              m: "1分钟",
              mm: "%d分钟",
              h: "1小时",
              hh: "%d小时",
              d: "1天",
              dd: "%d天",
              M: "1个月",
              MM: "%d个月",
              y: "1年",
              yy: "%d年"
          },
          week: {
              dow: 1,
              doy: 4
          }
      }), i_.defineLocale("zh-tw", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
              LT: "Ah點mm",
              LTS: "Ah點m分s秒",
              L: "YYYY年MMMD日",
              LL: "YYYY年MMMD日",
              LLL: "YYYY年MMMD日LT",
              LLLL: "YYYY年MMMD日ddddLT",
              l: "YYYY年MMMD日",
              ll: "YYYY年MMMD日",
              lll: "YYYY年MMMD日LT",
              llll: "YYYY年MMMD日ddddLT"
          },
          meridiemParse: /早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
              return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
          },
          meridiem: function(e, t) {
              var a = 100 * e + t;
              return 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
          },
          calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: "[下]ddddLT",
              lastDay: "[昨天]LT",
              lastWeek: "[上]ddddLT",
              sameElse: "L"
          },
          ordinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
              switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                      return e + "日";
                  case "M":
                      return e + "月";
                  case "w":
                  case "W":
                      return e + "週";
                  default:
                      return e
              }
          },
          relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              m: "一分鐘",
              mm: "%d分鐘",
              h: "一小時",
              hh: "%d小時",
              d: "一天",
              dd: "%d天",
              M: "一個月",
              MM: "%d個月",
              y: "一年",
              yy: "%d年"
          }
      }), i_);
  return Q_
}), moment.lang("ko");
! function(t) {
  "use strict";

  function e(t, e, r) {
      return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
  }

  function r(t, e) {
      var r, n;
      for (r = 0, n = t.length; n > r; r++)
          if (t[r] === e) return !0;
      return !1
  }

  function n(t, e) {
      var r;
      t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
  }

  function a(t, e) {
      try {
          return t.type = e, !0
      } catch (r) {
          return !1
      }
  }
  t.Placeholders = {
      Utils: {
          addEventListener: e,
          inArray: r,
          moveCaret: n,
          changeType: a
      }
  }
}(this),
function(t) {
  "use strict";

  function e() {}

  function r() {
      try {
          return document.activeElement
      } catch (t) {}
  }

  function n(t, e) {
      var r, n, a = !!e && t.value !== e,
          u = t.value === t.getAttribute(V);
      return !(!a && !u || "true" !== t.getAttribute(D)) && (t.removeAttribute(D), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(F), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(F)), r = t.getAttribute(P), r && (t.type = r), !0)
  }

  function a(t) {
      var e, r, n = t.getAttribute(V);
      return !("" !== t.value || !n) && (t.setAttribute(D, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(F), r || (t.setAttribute(F, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(P), e ? t.type = "text" : "password" === t.type && M.changeType(t, "text") && t.setAttribute(P, "password"), !0)
  }

  function u(t, e) {
      var r, n, a, u, i, l, o;
      if (t && t.getAttribute(V)) e(t);
      else
          for (a = t ? t.getElementsByTagName("input") : b, u = t ? t.getElementsByTagName("textarea") : f, r = a ? a.length : 0, n = u ? u.length : 0, o = 0, l = r + n; l > o; o++) i = r > o ? a[o] : u[o - r], e(i)
  }

  function i(t) {
      u(t, n)
  }

  function l(t) {
      u(t, a)
  }

  function o(t) {
      return function() {
          m && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) ? M.moveCaret(t, 0) : n(t)
      }
  }

  function c(t) {
      return function() {
          a(t)
      }
  }

  function s(t) {
      return function(e) {
          return A = t.value, "true" === t.getAttribute(D) && A === t.getAttribute(V) && M.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
      }
  }

  function d(t) {
      return function() {
          n(t, A), "" === t.value && (t.blur(), M.moveCaret(t, 0))
      }
  }

  function g(t) {
      return function() {
          t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) && M.moveCaret(t, 0)
      }
  }

  function v(t) {
      return function() {
          i(t)
      }
  }

  function p(t) {
      t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (M.addEventListener(T, "submit", v(T)), T.setAttribute(U, "true"))), M.addEventListener(t, "focus", o(t)), M.addEventListener(t, "blur", c(t)), m && (M.addEventListener(t, "keydown", s(t)), M.addEventListener(t, "keyup", d(t)), M.addEventListener(t, "click", g(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (m || t !== r()) && a(t)
  }
  var b, f, m, h, A, y, E, x, L, T, N, S, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
      C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      k = "#ccc",
      I = "placeholdersjs",
      R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
      V = "data-placeholder-value",
      D = "data-placeholder-active",
      P = "data-placeholder-type",
      U = "data-placeholder-submit",
      j = "data-placeholder-bound",
      q = "data-placeholder-focus",
      z = "data-placeholder-live",
      F = "data-placeholder-maxlength",
      G = document.createElement("input"),
      H = document.getElementsByTagName("head")[0],
      J = document.documentElement,
      K = t.Placeholders,
      M = K.Utils;
  if (K.nativeSupport = void 0 !== G.placeholder, !K.nativeSupport) {
      for (b = document.getElementsByTagName("input"), f = document.getElementsByTagName("textarea"), m = "false" === J.getAttribute(q), h = "false" !== J.getAttribute(z), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet ? y.styleSheet.cssText = E.nodeValue : y.appendChild(E), H.insertBefore(y, H.firstChild), w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x && (x = x.nodeValue, x && M.inArray(B, N.type) && p(N));
      L = setInterval(function() {
          for (w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x ? (x = x.nodeValue, x && M.inArray(B, N.type) && (N.getAttribute(j) || p(N), (x !== N.getAttribute(V) || "password" === N.type && !N.getAttribute(P)) && ("password" === N.type && !N.getAttribute(P) && M.changeType(N, "text") && N.setAttribute(P, "password"), N.value === N.getAttribute(V) && (N.value = x), N.setAttribute(V, x)))) : N.getAttribute(D) && (n(N), N.removeAttribute(V));
          h || clearInterval(L)
      }, 100)
  }
  M.addEventListener(t, "beforeunload", function() {
      K.disable()
  }), K.disable = K.nativeSupport ? e : i, K.enable = K.nativeSupport ? e : l
}(this);
! function(n) {
  "use strict";

  function t(n, t) {
      var r = (65535 & n) + (65535 & t),
          e = (n >> 16) + (t >> 16) + (r >> 16);
      return e << 16 | 65535 & r
  }

  function r(n, t) {
      return n << t | n >>> 32 - t
  }

  function e(n, e, u, o, c, f) {
      return t(r(t(t(e, n), t(o, f)), c), u)
  }

  function u(n, t, r, u, o, c, f) {
      return e(t & r | ~t & u, n, t, o, c, f)
  }

  function o(n, t, r, u, o, c, f) {
      return e(t & u | r & ~u, n, t, o, c, f)
  }

  function c(n, t, r, u, o, c, f) {
      return e(t ^ r ^ u, n, t, o, c, f)
  }

  function f(n, t, r, u, o, c, f) {
      return e(r ^ (t | ~u), n, t, o, c, f)
  }

  function i(n, r) {
      n[r >> 5] |= 128 << r % 32, n[(r + 64 >>> 9 << 4) + 14] = r;
      var e, i, a, h, d, g = 1732584193,
          l = -271733879,
          v = -1732584194,
          C = 271733878;
      for (e = 0; e < n.length; e += 16) i = g, a = l, h = v, d = C, g = u(g, l, v, C, n[e], 7, -680876936), C = u(C, g, l, v, n[e + 1], 12, -389564586), v = u(v, C, g, l, n[e + 2], 17, 606105819), l = u(l, v, C, g, n[e + 3], 22, -1044525330), g = u(g, l, v, C, n[e + 4], 7, -176418897), C = u(C, g, l, v, n[e + 5], 12, 1200080426), v = u(v, C, g, l, n[e + 6], 17, -1473231341), l = u(l, v, C, g, n[e + 7], 22, -45705983), g = u(g, l, v, C, n[e + 8], 7, 1770035416), C = u(C, g, l, v, n[e + 9], 12, -1958414417), v = u(v, C, g, l, n[e + 10], 17, -42063), l = u(l, v, C, g, n[e + 11], 22, -1990404162), g = u(g, l, v, C, n[e + 12], 7, 1804603682), C = u(C, g, l, v, n[e + 13], 12, -40341101), v = u(v, C, g, l, n[e + 14], 17, -1502002290), l = u(l, v, C, g, n[e + 15], 22, 1236535329), g = o(g, l, v, C, n[e + 1], 5, -165796510), C = o(C, g, l, v, n[e + 6], 9, -1069501632), v = o(v, C, g, l, n[e + 11], 14, 643717713), l = o(l, v, C, g, n[e], 20, -373897302), g = o(g, l, v, C, n[e + 5], 5, -701558691), C = o(C, g, l, v, n[e + 10], 9, 38016083), v = o(v, C, g, l, n[e + 15], 14, -660478335), l = o(l, v, C, g, n[e + 4], 20, -405537848), g = o(g, l, v, C, n[e + 9], 5, 568446438), C = o(C, g, l, v, n[e + 14], 9, -1019803690), v = o(v, C, g, l, n[e + 3], 14, -187363961), l = o(l, v, C, g, n[e + 8], 20, 1163531501), g = o(g, l, v, C, n[e + 13], 5, -1444681467), C = o(C, g, l, v, n[e + 2], 9, -51403784), v = o(v, C, g, l, n[e + 7], 14, 1735328473), l = o(l, v, C, g, n[e + 12], 20, -1926607734), g = c(g, l, v, C, n[e + 5], 4, -378558), C = c(C, g, l, v, n[e + 8], 11, -2022574463), v = c(v, C, g, l, n[e + 11], 16, 1839030562), l = c(l, v, C, g, n[e + 14], 23, -35309556), g = c(g, l, v, C, n[e + 1], 4, -1530992060), C = c(C, g, l, v, n[e + 4], 11, 1272893353), v = c(v, C, g, l, n[e + 7], 16, -155497632), l = c(l, v, C, g, n[e + 10], 23, -1094730640), g = c(g, l, v, C, n[e + 13], 4, 681279174), C = c(C, g, l, v, n[e], 11, -358537222), v = c(v, C, g, l, n[e + 3], 16, -722521979), l = c(l, v, C, g, n[e + 6], 23, 76029189), g = c(g, l, v, C, n[e + 9], 4, -640364487), C = c(C, g, l, v, n[e + 12], 11, -421815835), v = c(v, C, g, l, n[e + 15], 16, 530742520), l = c(l, v, C, g, n[e + 2], 23, -995338651), g = f(g, l, v, C, n[e], 6, -198630844), C = f(C, g, l, v, n[e + 7], 10, 1126891415), v = f(v, C, g, l, n[e + 14], 15, -1416354905), l = f(l, v, C, g, n[e + 5], 21, -57434055), g = f(g, l, v, C, n[e + 12], 6, 1700485571), C = f(C, g, l, v, n[e + 3], 10, -1894986606), v = f(v, C, g, l, n[e + 10], 15, -1051523), l = f(l, v, C, g, n[e + 1], 21, -2054922799), g = f(g, l, v, C, n[e + 8], 6, 1873313359), C = f(C, g, l, v, n[e + 15], 10, -30611744), v = f(v, C, g, l, n[e + 6], 15, -1560198380), l = f(l, v, C, g, n[e + 13], 21, 1309151649), g = f(g, l, v, C, n[e + 4], 6, -145523070), C = f(C, g, l, v, n[e + 11], 10, -1120210379), v = f(v, C, g, l, n[e + 2], 15, 718787259), l = f(l, v, C, g, n[e + 9], 21, -343485551), g = t(g, i), l = t(l, a), v = t(v, h), C = t(C, d);
      return [g, l, v, C]
  }

  function a(n) {
      var t, r = "";
      for (t = 0; t < 32 * n.length; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
      return r
  }

  function h(n) {
      var t, r = [];
      for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
      for (t = 0; t < 8 * n.length; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
      return r
  }

  function d(n) {
      return a(i(h(n), 8 * n.length))
  }

  function g(n, t) {
      var r, e, u = h(n),
          o = [],
          c = [];
      for (o[15] = c[15] = void 0, u.length > 16 && (u = i(u, 8 * n.length)), r = 0; 16 > r; r += 1) o[r] = 909522486 ^ u[r], c[r] = 1549556828 ^ u[r];
      return e = i(o.concat(h(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
  }

  function l(n) {
      var t, r, e = "0123456789abcdef",
          u = "";
      for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), u += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
      return u
  }

  function v(n) {
      return unescape(encodeURIComponent(n))
  }

  function C(n) {
      return d(v(n))
  }

  function m(n) {
      return l(C(n))
  }

  function s(n, t) {
      return g(v(n), v(t))
  }

  function A(n, t) {
      return l(s(n, t))
  }

  function p(n, t, r) {
      return t ? r ? s(t, n) : A(t, n) : r ? C(n) : m(n)
  }
  "function" == typeof define && define.amd ? define(function() {
      return p
  }) : n.md5 = p
}(this);
UserVoice = window.UserVoice || [],
  function() {
      var e = document.createElement("script");
      e.type = "text/javascript", e.async = !0, e.src = "//widget.uservoice.com/8BFKbRLjbXZfmm1A4l3dbw.js";
      var r = document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(e, r)
  }(), UserVoice.push(["identify", {}]), UserVoice.push(["set", {
      accent_color: "#e23a39"
  }]), UserVoice.push(["addTrigger", {
      mode: "post_idea",
      trigger_color: "white",
      trigger_background_color: "#e23a39",
      trigger_position: "bottom-right"
  }]), UserVoice.push(["autoprompt", {}]);
! function() {
  var rsplit = function(t, e) {
          for (var n, r, i, s = e.exec(t), o = new Array; null != s;) n = s.index, r = e.lastIndex, 0 != n && (i = t.substring(0, n), o.push(t.substring(0, n)), t = t.slice(n)), o.push(s[0]), t = t.slice(s[0].length), s = e.exec(t);
          return "" == !t && o.push(t), o
      },
      chop = function(t) {
          return t.substr(0, t.length - 1)
      },
      extend = function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      };
  EJS = function(t) {
      if (t = "string" == typeof t ? {
              view: t
          } : t, this.set_options(t), t.precompiled) return this.template = {}, this.template.process = t.precompiled, void EJS.update(this.name, this);
      if (t.element) {
          if ("string" == typeof t.element) {
              var e = t.element;
              if (t.element = document.getElementById(t.element), null == t.element) throw e + "does not exist!"
          }
          t.element.value ? this.text = t.element.value : this.text = t.element.innerHTML, this.name = t.element.id, this.type = "["
      } else if (t.url) {
          t.url = EJS.endExt(t.url, this.extMatch), this.name = this.name ? this.name : t.url;
          var n = t.url,
              r = EJS.get(this.name, this.cache);
          if (r) return r;
          if (r == EJS.INVALID_PATH) return null;
          try {
              this.text = EJS.request(n + (this.cache ? "" : "?" + Math.random()))
          } catch (i) {}
          if (null == this.text) throw {
              type: "EJS",
              message: "There is no template at " + n
          }
      }
      var r = new EJS.Compiler(this.text, this.type);
      r.compile(t, this.name), EJS.update(this.name, this), this.template = r
  }, EJS.prototype = {
      render: function(t, e) {
          t = t || {}, this._extra_helpers = e;
          var n = new EJS.Helpers(t, e || {});
          return this.template.process.call(t, t, n)
      },
      update: function(element, options) {
          return "string" == typeof element && (element = document.getElementById(element)), null == options ? (_template = this, function(t) {
              EJS.prototype.update.call(_template, element, t)
          }) : void("string" == typeof options ? (params = {}, params.url = options, _template = this, params.onComplete = function(request) {
              var object = eval(request.responseText);
              EJS.prototype.update.call(_template, element, object)
          }, EJS.ajax_request(params)) : element.innerHTML = this.render(options))
      },
      out: function() {
          return this.template.out
      },
      set_options: function(t) {
          this.type = t.type || EJS.type, this.cache = null != t.cache ? t.cache : EJS.cache, this.text = t.text || null, this.name = t.name || null, this.ext = t.ext || EJS.ext, this.extMatch = new RegExp(this.ext.replace(/\./, "."))
      }
  }, EJS.endExt = function(t, e) {
      return t ? (e.lastIndex = 0, t + (e.test(t) ? "" : this.ext)) : null
  }, EJS.Scanner = function(t, e, n) {
      extend(this, {
          left_delimiter: e + "%",
          right_delimiter: "%" + n,
          double_left: e + "%%",
          double_right: "%%" + n,
          left_equal: e + "%=",
          left_comment: e + "%#"
      }), this.SplitRegexp = "[" == e ? /(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/ : new RegExp("(" + this.double_left + ")|(%%" + this.double_right + ")|(" + this.left_equal + ")|(" + this.left_comment + ")|(" + this.left_delimiter + ")|(" + this.right_delimiter + "\n)|(" + this.right_delimiter + ")|(\n)"), this.source = t, this.stag = null, this.lines = 0
  }, EJS.Scanner.to_text = function(t) {
      return null == t || void 0 === t ? "" : t instanceof Date ? t.toDateString() : t.toString ? t.toString() : ""
  }, EJS.Scanner.prototype = {
      scan: function(t) {
          if (scanline = this.scanline, regex = this.SplitRegexp, "" == !this.source)
              for (var e = rsplit(this.source, /\n/), n = 0; n < e.length; n++) {
                  var r = e[n];
                  this.scanline(r, regex, t)
              }
      },
      scanline: function(t, e, n) {
          this.lines++;
          for (var r = rsplit(t, e), i = 0; i < r.length; i++) {
              var s = r[i];
              if (null != s) try {
                  n(s, this)
              } catch (o) {
                  throw {
                      type: "EJS.Scanner",
                      line: this.lines
                  }
              }
          }
      }
  }, EJS.Buffer = function(t, e) {
      this.line = new Array, this.script = "", this.pre_cmd = t, this.post_cmd = e;
      for (var n = 0; n < this.pre_cmd.length; n++) this.push(t[n])
  }, EJS.Buffer.prototype = {
      push: function(t) {
          this.line.push(t)
      },
      cr: function() {
          this.script = this.script + this.line.join("; "), this.line = new Array, this.script = this.script + "\n"
      },
      close: function() {
          if (this.line.length > 0) {
              for (var t = 0; t < this.post_cmd.length; t++) this.push(pre_cmd[t]);
              this.script = this.script + this.line.join("; "), line = null
          }
      }
  }, EJS.Compiler = function(t, e) {
      this.pre_cmd = ["var ___ViewO = [];"], this.post_cmd = new Array, this.source = " ", null != t && ("string" == typeof t ? (t = t.replace(/\r\n/g, "\n"), t = t.replace(/\r/g, "\n"), this.source = t) : t.innerHTML && (this.source = t.innerHTML), "string" != typeof this.source && (this.source = "")), e = e || "<";
      var n = ">";
      switch (e) {
          case "[":
              n = "]";
              break;
          case "<":
              break;
          default:
              throw e + " is not a supported deliminator"
      }
      this.scanner = new EJS.Scanner(this.source, e, n), this.out = ""
  }, EJS.Compiler.prototype = {
      compile: function(options, name) {
          options = options || {}, this.out = "";
          var put_cmd = "___ViewO.push(",
              insert_cmd = put_cmd,
              buff = new EJS.Buffer(this.pre_cmd, this.post_cmd),
              content = "",
              clean = function(t) {
                  return t = t.replace(/\\/g, "\\\\"), t = t.replace(/\n/g, "\\n"), t = t.replace(/"/g, '\\"')
              };
          this.scanner.scan(function(t, e) {
              if (null == e.stag) switch (t) {
                  case "\n":
                      content += "\n", buff.push(put_cmd + '"' + clean(content) + '");'), buff.cr(), content = "";
                      break;
                  case e.left_delimiter:
                  case e.left_equal:
                  case e.left_comment:
                      e.stag = t, content.length > 0 && buff.push(put_cmd + '"' + clean(content) + '")'), content = "";
                      break;
                  case e.double_left:
                      content += e.left_delimiter;
                      break;
                  default:
                      content += t
              } else switch (t) {
                  case e.right_delimiter:
                      switch (e.stag) {
                          case e.left_delimiter:
                              "\n" == content[content.length - 1] ? (content = chop(content), buff.push(content), buff.cr()) : buff.push(content);
                              break;
                          case e.left_equal:
                              buff.push(insert_cmd + "(EJS.Scanner.to_text(" + content + ")))")
                      }
                      e.stag = null, content = "";
                      break;
                  case e.double_right:
                      content += e.right_delimiter;
                      break;
                  default:
                      content += t
              }
          }), content.length > 0 && buff.push(put_cmd + '"' + clean(content) + '")'), buff.close(), this.out = buff.script + ";";
          var to_be_evaled = "/*" + name + "*/this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {" + this.out + " return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};";
          try {
              eval(to_be_evaled)
          } catch (e) {
              if ("undefined" == typeof JSLINT) throw e;
              JSLINT(this.out);
              for (var i = 0; i < JSLINT.errors.length; i++) {
                  var error = JSLINT.errors[i];
                  if ("Unnecessary semicolon." != error.reason) {
                      error.line++;
                      var e = new Error;
                      throw e.lineNumber = error.line, e.message = error.reason, options.view && (e.fileName = options.view), e
                  }
              }
          }
      }
  }, EJS.config = function(t) {
      EJS.cache = null != t.cache ? t.cache : EJS.cache, EJS.type = null != t.type ? t.type : EJS.type, EJS.ext = null != t.ext ? t.ext : EJS.ext;
      var e = EJS.templates_directory || {};
      EJS.templates_directory = e, EJS.get = function(t, n) {
          return 0 == n ? null : e[t] ? e[t] : null
      }, EJS.update = function(t, n) {
          null != t && (e[t] = n)
      }, EJS.INVALID_PATH = -1
  }, EJS.config({
      cache: !0,
      type: "<",
      ext: ".ejs"
  }), EJS.Helpers = function(t, e) {
      this._data = t, this._extras = e, extend(this, e)
  }, EJS.Helpers.prototype = {
      view: function(t, e, n) {
          return n || (n = this._extras), e || (e = this._data), new EJS(t).render(e, n)
      },
      to_text: function(t, e) {
          return null == t || void 0 === t ? e || "" : t instanceof Date ? t.toDateString() : t.toString ? t.toString().replace(/\n/g, "<br />").replace(/''/g, "'") : ""
      }
  }, EJS.newRequest = function() {
      for (var t = [function() {
              return new ActiveXObject("Msxml2.XMLHTTP")
          }, function() {
              return new XMLHttpRequest
          }, function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
          }], e = 0; e < t.length; e++) try {
          var n = t[e]();
          if (null != n) return n
      } catch (r) {
          continue
      }
  }, EJS.request = function(t) {
      var e = new EJS.newRequest;
      e.open("GET", t, !1);
      try {
          e.send(null)
      } catch (n) {
          return null
      }
      return 404 == e.status || 2 == e.status || 0 == e.status && "" == e.responseText ? null : e.responseText
  }, EJS.ajax_request = function(t) {
      t.method = t.method ? t.method : "GET";
      var e = new EJS.newRequest;
      e.onreadystatechange = function() {
          4 == e.readyState && (200 == e.status ? t.onComplete(e) : t.onComplete(e))
      }, e.open(t.method, t.url), e.send(null)
  }
}(), EJS.Helpers.prototype.date_tag = function(t, e, n) {
  e instanceof Date || (e = new Date);
  for (var r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], i = [], s = [], o = [], l = e.getFullYear(), a = e.getMonth(), u = e.getDate(), c = l - 15; c < l + 15; c++) i.push({
      value: c,
      text: c
  });
  for (var p = 0; p < 12; p++) s.push({
      value: p,
      text: r[p]
  });
  for (var h = 0; h < 31; h++) o.push({
      value: h + 1,
      text: h + 1
  });
  var f = this.select_tag(t + "[year]", l, i, {
          id: t + "[year]"
      }),
      _ = this.select_tag(t + "[month]", a, s, {
          id: t + "[month]"
      }),
      m = this.select_tag(t + "[day]", u, o, {
          id: t + "[day]"
      });
  return f + _ + m
}, EJS.Helpers.prototype.form_tag = function(t, e) {
  return e = e || {}, e.action = t, 1 == e.multipart && (e.method = "post", e.enctype = "multipart/form-data"), this.start_tag_for("form", e)
}, EJS.Helpers.prototype.form_tag_end = function() {
  return this.tag_end("form")
}, EJS.Helpers.prototype.hidden_field_tag = function(t, e, n) {
  return this.input_field_tag(t, e, "hidden", n)
}, EJS.Helpers.prototype.input_field_tag = function(t, e, n, r) {
  return r = r || {}, r.id = r.id || t, r.value = e || "", r.type = n || "text", r.name = t, this.single_tag_for("input", r)
}, EJS.Helpers.prototype.is_current_page = function(t) {
  return window.location.href == t || window.location.pathname == t
}, EJS.Helpers.prototype.link_to = function(t, e, n) {
  if (!t) var t = "null";
  if (!n) var n = {};
  return n.confirm && (n.onclick = ' var ret_confirm = confirm("' + n.confirm + '"); if(!ret_confirm){ return false;} ', n.confirm = null), n.href = e, this.start_tag_for("a", n) + t + this.tag_end("a")
}, EJS.Helpers.prototype.submit_link_to = function(t, e, n) {
  if (!t) var t = "null";
  if (!n) var n = {};
  return n.onclick = n.onclick || "", n.confirm && (n.onclick = ' var ret_confirm = confirm("' + n.confirm + '"); if(!ret_confirm){ return false;} ', n.confirm = null), n.value = t, n.type = "submit", n.onclick = n.onclick + (e ? this.url_for(e) : "") + "return false;", this.start_tag_for("input", n)
}, EJS.Helpers.prototype.link_to_if = function(t, e, n, r, i, s) {
  return this.link_to_unless(0 == t, e, n, r, i, s)
}, EJS.Helpers.prototype.link_to_unless = function(t, e, n, r, i) {
  return r = r || {}, t ? i && "function" == typeof i ? i(e, n, r, i) : e : this.link_to(e, n, r)
}, EJS.Helpers.prototype.link_to_unless_current = function(t, e, n, r) {
  return n = n || {}, this.link_to_unless(this.is_current_page(e), t, e, n, r)
}, EJS.Helpers.prototype.password_field_tag = function(t, e, n) {
  return this.input_field_tag(t, e, "password", n)
}, EJS.Helpers.prototype.select_tag = function(t, e, n, r) {
  r = r || {}, r.id = r.id || t, r.value = e, r.name = t;
  var i = "";
  i += this.start_tag_for("select", r);
  for (var s = 0; s < n.length; s++) {
      var o = n[s],
          l = {
              value: o.value
          };
      o.value == e && (l.selected = "selected"), i += this.start_tag_for("option", l) + o.text + this.tag_end("option")
  }
  return i += this.tag_end("select")
}, EJS.Helpers.prototype.single_tag_for = function(t, e) {
  return this.tag(t, e, "/>")
}, EJS.Helpers.prototype.start_tag_for = function(t, e) {
  return this.tag(t, e)
}, EJS.Helpers.prototype.submit_tag = function(t, e) {
  return e = e || {}, e.type = e.type || "submit", e.value = t || "Submit", this.single_tag_for("input", e)
}, EJS.Helpers.prototype.tag = function(t, e, n) {
  if (!n) var n = ">";
  var r = " ";
  for (var i in e) {
      if (null != e[i]) var s = e[i].toString();
      else var s = "";
      "Class" == i && (i = "class"), r += s.indexOf("'") != -1 ? i + '="' + s + '" ' : i + "='" + s + "' "
  }
  return "<" + t + r + n
}, EJS.Helpers.prototype.tag_end = function(t) {
  return "</" + t + ">"
}, EJS.Helpers.prototype.text_area_tag = function(t, e, n) {
  return n = n || {}, n.id = n.id || t, n.name = n.name || t, e = e || "", n.size && (n.cols = n.size.split("x")[0], n.rows = n.size.split("x")[1], delete n.size), n.cols = n.cols || 50, n.rows = n.rows || 4, this.start_tag_for("textarea", n) + e + this.tag_end("textarea")
}, EJS.Helpers.prototype.text_tag = EJS.Helpers.prototype.text_area_tag, EJS.Helpers.prototype.text_field_tag = function(t, e, n) {
  return this.input_field_tag(t, e, "text", n)
}, EJS.Helpers.prototype.url_for = function(t) {
  return 'window.location="' + t + '";'
}, EJS.Helpers.prototype.img_tag = function(t, e, n) {
  return n = n || {}, n.src = t, n.alt = e, this.single_tag_for("img", n)
};

function setCookie(e, o, n) {
  var t = new Date;
  t.setDate(t.getDate() + n), cookies = e + "=" + encodeURIComponent(o) + "; path=/ ", "undefined" != typeof n && (cookies += ";expires=" + t.toGMTString() + ";"), document.cookie = cookies
}

function getCookie(e) {
  e += "=";
  var o = document.cookie,
      n = o.indexOf(e),
      t = "";
  if (n != -1) {
      n += e.length;
      var i = o.indexOf(";", n);
      i == -1 && (i = o.length), t = o.substring(n, i)
  }
  return decodeURIComponent(t)
}

function Pagination(t) {
  this.opt = t, 
  this.opt.total_page < 1 || ($(t.selector).append("<div class='page-list'><ul class='pagination' onselectstart='return false;'></ul></div>"), 
  this.target = $(t.selector + ">div.page-list"), 
  this.list = $(this.target).children("ul.pagination"), 
  this.pageChange = $.proxy(this.pageChange, this), 
  $(this.target).delegate("li", "click", this.pageChange), isNaN(t.current_page) && (t.current_page = 1), 
  this.render(t.current_page), 
  this.list.children("li[data-page=" + t.current_page + "]").addClass("active"))
}
Pagination.prototype.defaultPaging = function(t) {
  window.search({
      set: {
          page: t
      }
  })
}, Pagination.prototype.getCurrentPage = function() {
  return $(this.list).children("li.active").data("page")
}, Pagination.prototype.pageChange = function(t) {
  var e = $(t.target).attr("class");
  if (e.search("page") !== -1) {
      if (e.search("active") !== -1 && !this.opt.processActive) return;
      $(t.target).siblings().removeClass("active"), $(t.target).addClass("active"), "function" == typeof this.opt.event ? this.opt.event(this.getCurrentPage()) : this.defaultPaging(this.getCurrentPage())
  } else {
      var a = this.getCurrentPage();
      "prevAll" === e ? a % this.opt.per_page === 0 ? (a -= this.opt.per_page, a < 1 && (a = 1), this.render(a)) : (a = parseInt(a / this.opt.per_page) * this.opt.per_page, a < 1 && (a = 1), this.render(a)) : "prev" === e ? (a--, this.render(a)) : "nextAll" === e ? a % this.opt.per_page === 0 ? (a += this.opt.per_page, a > this.opt.total_page && (a = this.opt.total_page), this.render(a)) : (a = (parseInt(a / this.opt.per_page) + 1) * this.opt.per_page + 1, a > this.opt.total_page && (a = this.opt.total_page), this.render(a)) : "next" === e && (a++, this.render(a)), this.list.children("li[data-page=" + a + "]").trigger("click")
  }
}, Pagination.prototype.render = function(t) {
  if (!(t < 1 || t > this.opt.total_page || t == this.getCurrentPage())) {
      var e = parseInt((t - 1) / this.opt.per_page) * this.opt.per_page + 1;
      this.list.empty(), this.list.append("<li class='prevAll'><<</li>"), this.list.append("<li class='prev'><</li>");
      for (var a = 0; a < this.opt.per_page && !(a + e > this.opt.total_page); a++) {
          var i = "<li class='page' data-page='" + (a + e) + "'>" + (a + e) + "</li>";
          this.list.append(i)
      }
      this.list.append("<li class='next'>></li>"), this.list.append("<li class='nextAll'>>></li>")
  }
};

function post_to_url(t, e, n) {
  n = n || "post";
  var i = document.createElement("form");
  i.setAttribute("method", n), i.setAttribute("action", t);
  for (var r in e) {
      var u = document.createElement("input");
      u.setAttribute("type", "hidden"), 
      u.setAttribute("name", r), 
      u.setAttribute("value", e[r]), 
      i.appendChild(u)
  }
  document.body.appendChild(i), i.submit()
}

function PoingSlider(i) {
  if (arguments.callee.caller != PoingSlider.Create) return console.error("[PoingSlider]", "should be created by only PoingSlider.Create"), null;
  this.option = i, this.isSlide = !1, this.getParent().addClass("PoingSlider_wrap");
  var t = $(this.option.selector);
  t.addClass("PoingSlider");
  for (var e = t.children(), o = 0; o < e.length; o++) o == this.option.startSlice && $(e[o]).addClass("current"), $(e[o]).addClass("slice"), $(e[o]).css("top", "0px"), $(e[o]).css("left", o > this.option.startSlice ? "100%" : o == this.option.startSlice ? "0" : "-100%");
  setTimeout($.proxy(this.option.afterCreate, this), 0), 1 == this.option.autoSlide && (this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration), this.getParent().on("mouseover", $.proxy(function() {
      null != this.option.slideTimer && (clearTimeout(this.option.slideTimer), this.option.slideTimer = null)
  }, this)), this.getParent().on("mouseout", $.proxy(function() {
      this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration)
  }, this)))
}
PoingSlider.Create = function(i) {
  var t = {
          selector: "",
          startSlice: 0,
          animation: "slideToLeft",
          autoSlide: !1,
          slideDuration: 3e3,
          animationDuration: 300,
          afterCreate: function() {},
          afterSlide: function() {}
      },
      e = $.extend({}, t, i);
  return "string" != typeof e.selector ? (console.error("[PoingSlider]", "selector should be string."), null) : $(e.selector).length <= 0 ? (console.error("[PoingSlider]", "selector should be exist."), null) : new PoingSlider(e)
}, PoingSlider.prototype.getParent = function() {
  return $(this.option.selector).parent()
}, PoingSlider.prototype.getSlice = function() {
  return $(this.option.selector).find(".slice")
}, PoingSlider.prototype.getSliceCount = function() {
  return $(this.option.selector).find(".slice").length
}, PoingSlider.prototype.getCurrentSlice = function() {
  return $(this.option.selector).find(".current")
}, PoingSlider.prototype.getCurrentSliceIndex = function() {
  return $(this.option.selector).find(".current").index()
}, PoingSlider.prototype.slideToPrev = function() {
  if (!(this.getSliceCount() <= 1)) {
      1 == this.option.autoSlide && null != this.option.slideTimer && (clearTimeout(this.option.slideTimer), this.option.slideTimer = null);
      var i = $(this.option.selector),
          t = i.find(".current"),
          e = t.prev();
      0 == e.length && (e = i.find(".slice").last()), "slideToLeft" == this.option.animation && this.sliceToRight(t, e), 1 == this.option.autoSlide && (this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration))
  }
}, PoingSlider.prototype.slideToNext = function() {
  if (!(this.getSliceCount() <= 1)) {
      1 == this.option.autoSlide && null != this.option.slideTimer && (clearTimeout(this.option.slideTimer), this.option.slideTimer = null);
      var i = $(this.option.selector),
          t = i.find(".current"),
          e = t.next();
      0 == e.length && (e = i.find(".slice").first()), "slideToLeft" == this.option.animation && this.sliceToLeft(t, e), 1 == this.option.autoSlide && (this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration))
  }
}, PoingSlider.prototype.slideTo = function(i) {
  if (!(this.getSliceCount() <= 1)) {
      var t = $(this.option.selector),
          e = t.find(".current"),
          o = t.children().eq(i);
      0 == o.length && (o = t.find(".slice").first()), "slideToLeft" == this.option.animation && (e.index() < o.index() ? this.sliceToLeft(e, o) : e.index() > o.index() && this.sliceToRight(e, o))
  }
}, PoingSlider.prototype.sliceToLeft = function(i, t) {
  0 == this.isSlide && (this.isSlide = !0, i.css("left", "0px"), i.animate({
      left: "-100%"
  }, this.option.animationDuration), i.removeClass("current"), t.css("left", "100%"), t.animate({
      left: "0"
  }, {
      duration: this.option.animationDuration,
      complete: $.proxy(function() {
          this.isSlide = !1, this.option.afterSlide(), $("body").scrollTo("+=1px").scrollTo("-=1px")
      }, this)
  }), t.addClass("current"))
}, PoingSlider.prototype.sliceToRight = function(i, t) {
  0 == this.isSlide && (this.isSlide = !0, i.css("left", "0px"), i.animate({
      left: "100%"
  }, this.option.animationDuration), i.removeClass("current"), t.css("left", "-100%"), t.animate({
      left: "0"
  }, {
      duration: this.option.animationDuration,
      complete: $.proxy(function() {
          this.isSlide = !1, this.option.afterSlide(), $("body").scrollTo("+=1px").scrollTo("-=1px")
      }, this)
  }), t.addClass("current"))
};

function PoingUploader(e) {
  return arguments.callee.caller != PoingUploader.Create ?
		  (console.error("[PoingUploader]", "should be created by only PoingUploader.Create"), null) :(
			  this.option = e, 
			  this.files = [], 
			  this.uploader = document.createElement("iframe"), 
			  $(this.uploader).attr("src", this.option.iframe_src), 
			  $(this.uploader).attr("style", "display:none;"), 
			  void document.body.appendChild(this.uploader)
		  )
}
PoingUploader.Create = function(e) {
  var t = {
          iframe_src: "/Poing/util/upload.do",
          form_id: "uploader",
          input_id: "file_selector",
          file_id: "uploaded_file",
          afterAddFile: function(e) {}
      },
      o = $.extend({}, t, e);
  return new PoingUploader(o)
}, PoingUploader.addFileToUploader = function() {
  var e = this.uploader.contentDocument || this.uploader.contentWindow.document,
      t = (e.getElementById(this.option.form_id), 
		   e.getElementById(this.option.input_id), 
		   e.getElementById(this.option.file_id));
  null != t ? (this.files.push({
      file_type: $(t).attr("file_type"),
      file_data: $(t).attr("file_data")
  }), this.option.afterAddFile({
      file_type: $(t).attr("file_type"),
      file_data: $(t).attr("file_data")
  }), $(t).remove()) : setTimeout($.proxy(PoingUploader.addFileToUploader, this), 250)
}, PoingUploader.prototype.addFile = function() {
  var e = this,
      t = this.uploader.contentDocument || this.uploader.contentWindow.document,
      o = t.getElementById(this.option.form_id),
      i = t.getElementById(this.option.input_id);
  i.onchange = function() {
      setTimeout($.proxy(PoingUploader.addFileToUploader, e), 250), o.submit()
  }, i.click()
}, PoingUploader.prototype.upload = function() {};

function phone_format(t) {
  if (!(t.search("-") >= 0)) return type.split("-").join("");
  var r = t.length;
  if (8 === r) return t.substr(0, 4) + "-" + t.substr(4, 4);
  if (11 === r) return t.substr(0, 3) + "-" + t.substr(3, 4) + "-" + t.substr(7, 4);
  if (r >= 9 && r <= 10) {
      var n = t.substr(0, 2),
          e = "";
      if ("02" === n) e = "02-" + t.substr(2, r - 6) + "-" + t.substr(r - 5, 4);
      else {
          if (9 == r) return;
          e = t.substr(0, 3) + "-" + t.substr(3, r - 7) + "-" + t.substr(r - 4, 4)
      }
      return e
  }
}

function DateToString(t) {
  var r = String(t.getYear() + 1900),
      n = String(t.getMonth() + 1),
      e = String(t.getDate());
  return 1 == n.length && (n = "0" + n), 1 == e.length && (e = "0" + e), r + n + e
}

function QueryString() {
  for (var t = {}, r = window.location.search.substring(1), n = r.split("&"), e = 0; e < n.length; e++) {
      var i = n[e].split("=");
      if ("undefined" == typeof t[i[0]]) "undefined" == typeof i[1] && (i[1] = "<undefined>"), t[i[0]] = decodeURI(i[1]);
      else if ("string" == typeof t[i[0]]) {
          var s = [t[i[0]], i[1]];
          t[i[0]] = s
      } else t[i[0]].push(i[1])
  }
  return t
}
jQuery(function(t) {
  var r = t.fn.show;
  t.fn.show = function(n, e) {
      return t(this).each(function() {
          var i = t(this),
              s = function() {
                  t.isFunction(e) && e.apply(i), i.trigger("afterShow")
              };
          i.trigger("beforeShow"), r.apply(i, [n, s])
      })
  };
  var n = t.fn.hide;
  t.fn.hide = function(r, e) {
      return t(this).each(function() {
          var i = t(this),
              s = function() {
                  t.isFunction(e) && e.apply(i), i.trigger("afterHide")
              };
          i.trigger("beforeHide"), n.apply(i, [r, s])
      })
  }
});
var ratingText = {};
ratingText[9] = "완벽 그 자체! 환상적이에요.", 
ratingText[8] = "오랫동안 기억에 남을 만한 곳이에요.", 
ratingText[7] = "인상적이네요. 꼭 추천하고 싶어요.", 
ratingText[6] = "평균 이상! 한 번 쯤은 다시 올 것 같아요.", 
ratingText[5] = "보통이에요. 이 정도면 괜찮네요.", 
ratingText[4] = "다 괜찮은데 뭔가 조금 아쉬워요!", 
ratingText[3] = "평균 이하! 이 정도 레스토랑은 어디에나 있죠.", 
ratingText[2] = "맛, 분위기, 서비스...전체적으로 다 별로예요!",
ratingText[1] = "실망이에요. 집에서 먹는게 나을 뻔 했어요.", 
ratingText[0] = "노 코멘트. 두 번 다시 오고 싶지 않아요.";