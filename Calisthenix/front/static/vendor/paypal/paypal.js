/*! For license information please see output.js.LICENSE.txt */
!(function (n, e) {
  for (var t in e) n[t] = e[t];
})(
  window,
  (function (n) {
    var e = {};
    function t(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = n),
      (t.c = e),
      (t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
      }),
      (t.r = function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (t.t = function (n, e) {
        if ((1 & e && (n = t(n)), 8 & e)) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: n }),
          2 & e && "string" != typeof n)
        )
          for (var o in n)
            t.d(
              r,
              o,
              function (e) {
                return n[e];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function (n) {
        var e =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function (n, e) {
        return {}.hasOwnProperty.call(n, e);
      }),
      (t.p = ""),
      t((t.s = 14))
    );
  })([
    function (n, e, t) {
      "use strict";
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = (function (n, e) {
                var t,
                  r,
                  o = n[1] || "",
                  i = n[3];
                if (!i) return o;
                if (e && "function" == typeof btoa) {
                  var a =
                      ((t = btoa(
                        unescape(encodeURIComponent(JSON.stringify(i)))
                      )),
                      (r =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          t
                        )),
                      "/*# ".concat(r, " */")),
                    u = i.sources.map(function (n) {
                      return "/*# sourceURL="
                        .concat(i.sourceRoot || "")
                        .concat(n, " */");
                    });
                  return [o].concat(u).concat([a]).join("\n");
                }
                return [o].join("\n");
              })(e, n);
              return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
            }).join("");
          }),
          (e.i = function (n, t, r) {
            "string" == typeof n && (n = [[null, n, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0);
              }
            for (var u = 0; u < n.length; u++) {
              var l = [].concat(n[u]);
              (r && o[l[0]]) ||
                (t && (l[2] = l[2] ? "".concat(t, " and ").concat(l[2]) : t),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    function (n, e, t) {
      "use strict";
      var r = {};
      function o(n) {
        n.forEach(function (n) {
          if (--r[n] <= 0) {
            var e = document.getElementById(n);
            e && e.parentNode.removeChild(e);
          }
        });
      }
      n.exports = function (n, e) {
        for (
          var t,
            i = void 0 === e ? {} : e,
            a = i.replace,
            u = void 0 !== a && a,
            l = i.prepend,
            c = void 0 !== l && l,
            s = i.prefix,
            d = void 0 === s ? "s" : s,
            f = [],
            p = 0;
          p < n.length;
          p++
        ) {
          var h = n[p],
            m = h[1],
            g = h[2],
            y = h[3],
            v = "" + d + h[0] + "-" + p;
          if ((f.push(v), !r[v] || u)) {
            r[v] = 1;
            var w = document.getElementById(v),
              C = !1;
            w ||
              ((C = !0),
              (w = document.createElement("style")).setAttribute(
                "type",
                "text/css"
              ),
              (w.id = v),
              g && w.setAttribute("media", g));
            var b = m;
            y &&
              "function" == typeof btoa &&
              ((b +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                ((t = JSON.stringify(y)),
                btoa(
                  encodeURIComponent(t).replace(
                    /%([0-9A-F]{2})/g,
                    function (n, e) {
                      return String.fromCharCode("0x" + e);
                    }
                  )
                ) + "*/")),
              (b += "\n/*# sourceURL=" + y.file + "?" + v + "*/")),
              "textContent" in w
                ? (w.textContent = b)
                : (w.styleSheet.cssText = b),
              C &&
                (c
                  ? document.head.insertBefore(w, document.head.childNodes[0])
                  : document.head.appendChild(w));
          } else r[v]++;
        }
        return o.bind(null, f);
      };
    },
    function (n, e, t) {
      var r = t(9),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(8),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(10),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(11),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(12),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(13),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".placeholder[data-v-169940eb]{display:inline-block;color:transparent;background:#fff;opacity:0.15;border-radius:2px;animation:1s loading-placeholder-data-v-169940eb ease-in-out infinite;position:relative;top:10%;height:80%}.placeholder.color-black[data-v-169940eb]{background:#000}.placeholder.color-white[data-v-169940eb]{background:#fff}@keyframes loading-placeholder-data-v-169940eb{0%{opacity:0.15}50%{opacity:0.3}100%{opacity:0.15}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".wallet-label[data-v-3ab75360]{display:block;height:100%;text-align:center}.wallet-label *[data-v-3ab75360]{display:inline-block;vertical-align:middle;height:100%}.wallet-label .divider[data-v-3ab75360]{margin:0 5px;opacity:0.2}.wallet-label .paypal-wordmark[data-v-3ab75360]{display:none}.wallet-label .card-art[data-v-3ab75360]{border-radius:3px}.wallet-label .label[data-v-3ab75360]{max-width:40%}.wallet-label .label .limit[data-v-3ab75360]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 249px){.wallet-label .paypal-mark[data-v-3ab75360],.wallet-label .paypal-wordmark[data-v-3ab75360]{display:inline-block}.wallet-label .label[data-v-3ab75360],.wallet-label .divider[data-v-3ab75360],.wallet-label .card-art[data-v-3ab75360],.wallet-label .pay-label[data-v-3ab75360],.wallet-label .logo[data-v-3ab75360]{display:none}}.wallet-label-new[data-v-3ab75360]{display:flex;height:100%;width:100%;text-align:left}.wallet-label-new *[data-v-3ab75360]{display:inline-block;vertical-align:top;height:100%}.wallet-label-new .paypal-wordmark[data-v-3ab75360]{display:none}.wallet-label-new .card-art[data-v-3ab75360]{border-radius:3px}.wallet-label-new .logo[data-v-3ab75360]{margin-left:auto}@media only screen and (max-width: 150px){.wallet-label-new[data-v-3ab75360]{text-align:center;display:inline-block}.wallet-label-new .logo[data-v-3ab75360]{display:none}.wallet-label-new .pay-label[data-v-3ab75360]{display:none}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".wallet-label-venmo[data-v-774e65b8]{height:100%;width:100%;text-align:center}.wallet-label-venmo .divider[data-v-774e65b8]{margin:0 5px;opacity:0.2}.wallet-label-venmo *[data-v-774e65b8]{display:inline-block;vertical-align:top;height:100%}.wallet-label-venmo .logo[data-v-774e65b8]{margin-left:auto}.wallet-label-venmo .label[data-v-774e65b8]{max-width:40%}.wallet-label-venmo .label .limit[data-v-774e65b8]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 150px){.wallet-label-venmo[data-v-774e65b8]{text-align:center;display:inline-block}.wallet-label-venmo .logo[data-v-774e65b8]{display:none}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".paypal-mark .paypal-logo-applepay[data-v-c364629e]{height:30px}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([n.i, "", ""]), (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".menu-button[data-v-18055577]{position:relative;display:inline-block;margin-left:2px;cursor:pointer}.menu-button[data-v-18055577]:focus{outline:none;box-shadow:0 0 0 2px rgba(50,50,50,0.9) inset}.menu-button img[data-v-18055577]{height:30%;width:30%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      "use strict";
      t.r(e);
      var r = {};
      t.r(r),
        t.d(r, "FUNDING", function () {
          return ut;
        }),
        t.d(r, "getCorrelationID", function () {
          return pt;
        }),
        t.d(r, "setup", function () {
          return lr;
        });
      var o = {};
      t.r(o),
        t.d(o, "Promise", function () {
          return A;
        }),
        t.d(o, "TYPES", function () {
          return ro;
        }),
        t.d(o, "ProxyWindow", function () {
          return _r;
        }),
        t.d(o, "setup", function () {
          return eo;
        }),
        t.d(o, "destroy", function () {
          return to;
        }),
        t.d(o, "serializeMessage", function () {
          return Xr;
        }),
        t.d(o, "deserializeMessage", function () {
          return $r;
        }),
        t.d(o, "createProxyWindow", function () {
          return Qr;
        }),
        t.d(o, "toProxyWindow", function () {
          return no;
        }),
        t.d(o, "on", function () {
          return Yr;
        }),
        t.d(o, "once", function () {
          return Kr;
        }),
        t.d(o, "send", function () {
          return Jr;
        }),
        t.d(o, "markWindowKnown", function () {
          return br;
        }),
        t.d(o, "cleanUpWindow", function () {
          return oo;
        }),
        t.d(o, "bridge", function () {});
      var i = {};
      t.r(i),
        t.d(i, "Buttons", function () {
          return el;
        }),
        t.d(i, "Checkout", function () {
          return tl;
        }),
        t.d(i, "CardForm", function () {
          return rl;
        }),
        t.d(i, "Menu", function () {
          return ol;
        }),
        t.d(i, "Modal", function () {
          return il;
        }),
        t.d(i, "Installments", function () {
          return al;
        }),
        t.d(i, "QRCode", function () {
          return ul;
        }),
        t.d(i, "ButtonsTemplate", function () {
          return ll;
        }),
        t.d(i, "PopupOpenError", function () {
          return cl;
        }),
        t.d(i, "allowIframe", function () {
          return sl;
        }),
        t.d(i, "forceIframe", function () {
          return dl;
        }),
        t.d(i, "destroyAll", function () {
          return fl;
        }),
        t.d(i, "setup", function () {
          return pl;
        }),
        t.d(i, "destroy", function () {
          return hl;
        });
      var a = {};
      t.r(a),
        t.d(a, "ThreeDomainSecure", function () {
          return gl;
        }),
        t.d(a, "postRobot", function () {
          return yl;
        });
      var u = {};
      function l(n, e) {
        if (null == n) return {};
        var t,
          r,
          o = {},
          i = Object.keys(n);
        for (r = 0; r < i.length; r++)
          e.indexOf((t = i[r])) >= 0 || (o[t] = n[t]);
        return o;
      }
      t.r(u),
        t.d(u, "setup", function () {
          return vl;
        });
      var c = {
        926: {
          device: "iPhone 12 Pro Max",
          textSizeHeights: [752, 748, 744, 738],
          zoomHeight: {
            1.15: [752, 747, 744, 738],
            1.25: [753, 748, 744, 738],
            1.5: [752, 749, 744, 738],
            1.75: [753, 747, 744, 739],
            2: [752, 748, 744],
            2.5: [753, 748],
            3: [753, 744],
          },
          maybeSafari: { 2: [738], 2.5: [745, 738], 3: [747, 738] },
        },
        896: {
          device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
          textSizeHeights: [721, 717, 713, 707],
          zoomHeight: {
            1.15: [721, 716, 713, 707],
            1.25: [721, 718, 713, 708],
            1.5: [722, 717, 713],
            1.75: [721, 718, 712, 707],
            2: [722, 718, 714, 708],
            2.5: [720, 718, 713, 708],
            3: [720, 717, 708],
          },
          maybeSafari: { 1.5: [707], 3: [714] },
        },
        844: {
          device: "iPhone 12, iPhone 12 Pro",
          textSizeHeights: [670, 666, 662, 656],
          zoomHeight: {
            1.15: [670, 666, 662],
            1.25: [670, 666, 663, 656],
            1.5: [671, 666, 662],
            1.75: [670, 667, 662, 656],
            2: [670, 666, 662],
            2.5: [670, 663],
            3: [669, 666, 663, 657],
          },
          maybeSafari: {
            1.15: [656],
            1.5: [656],
            2: [656],
            2.5: [665, 655],
            3: [663],
          },
        },
        812: {
          device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
          textSizeHeights: [641, 637, 633, 627],
          zoomHeight: {
            1.15: [641, 637, 633, 627],
            1.25: [641, 638, 633, 628],
            1.5: [641, 638, 633, 627],
            1.75: [641, 637, 634],
            2: [642, 638, 634, 628],
            2.5: [640, 638, 633, 628],
            3: [642, 633],
          },
          maybeSafari: { 1.75: [627], 3: [636, 627] },
        },
        736: {
          device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
          textSizeHeights: [628, 624, 620, 614],
          zoomHeight: {
            1.15: [628, 624, 620, 614],
            1.25: [628, 624, 620, 614],
            1.5: [629, 624, 620],
            1.75: [628, 625, 620, 614],
            2: [628, 624, 620],
            2.5: [628, 625, 620, 615],
            3: [627, 624, 615],
          },
          maybeSafari: { 1.5: [614], 2: [614], 3: [621] },
        },
        667: {
          device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
          textSizeHeights: [559, 555, 551, 545],
          zoomHeight: {
            1.15: [559, 555, 551, 545],
            1.25: [559, 555, 551, 545],
            1.5: [560, 555, 551],
            1.75: [558, 555, 551],
            2: [560, 556, 552, 546],
            2.5: [560, 555, 550],
            3: [558, 555, 546],
          },
          maybeSafari: { 1.5: [545], 1.75: [544], 2.5: [545], 3: [552] },
        },
      };
      function s() {
        return window.navigator.mockUserAgent || window.navigator.userAgent;
      }
      var d =
        /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i;
      function f(n) {
        return (
          void 0 === n && (n = s()),
          !!n.match(
            /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
          )
        );
      }
      function p(n) {
        return void 0 === n && (n = s()), /Opera Mini/i.test(n);
      }
      function h(n) {
        return void 0 === n && (n = s()), /Android/.test(n);
      }
      function m(n) {
        return void 0 === n && (n = s()), /iPhone|iPod|iPad/.test(n);
      }
      function g(n) {
        return (
          void 0 === n && (n = s()),
          !(
            (function (n) {
              return (
                void 0 === n && (n = s()),
                !!m(n) &&
                  (!!(function (n) {
                    return void 0 === n && (n = s()), /\bGSA\b/.test(n);
                  })(n) ||
                    /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(n))
              );
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = s()),
                !!h(n) && /Version\/[\d.]+/.test(n) && !p(n)
              );
            })(n) ||
            p(n) ||
            (function (n) {
              return void 0 === n && (n = s()), /FxiOS/i.test(n);
            })(n) ||
            (function (n) {
              return void 0 === n && (n = s()), /EdgiOS/i.test(n);
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = s()), /FBAN/.test(n) || /FBAV/.test(n)
              );
            })(n) ||
            (function (n) {
              return void 0 === n && (n = s()), /QQBrowser/.test(n);
            })(n) ||
            ("undefined" != typeof process &&
              process.versions &&
              process.versions.electron) ||
            ((e = s()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) ||
            !0 === window.navigator.standalone ||
            window.matchMedia("(display-mode: standalone)").matches
          )
        );
        var e;
      }
      function y(n) {
        return void 0 === n && (n = s()), /Chrome|Chromium|CriOS/.test(n);
      }
      function v(n) {
        return void 0 === n && (n = s()), /Safari/.test(n) && !y(n);
      }
      function w() {
        try {
          if (
            window.ApplePaySession &&
            window.ApplePaySession.supportsVersion(3) &&
            window.ApplePaySession.canMakePayments()
          )
            return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      function C(n, e) {
        return (C =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function b(n, e) {
        (n.prototype = Object.create(e.prototype)),
          (n.prototype.constructor = n),
          C(n, e);
      }
      function E() {
        return (E =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            }
            return n;
          }).apply(this, arguments);
      }
      function L(n) {
        try {
          if (!n) return !1;
          if ("undefined" != typeof Promise && n instanceof Promise) return !0;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.Window &&
            n instanceof window.Window
          )
            return !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.constructor &&
            n instanceof window.constructor
          )
            return !1;
          var e = {}.toString;
          if (e) {
            var t = e.call(n);
            if (
              "[object Window]" === t ||
              "[object global]" === t ||
              "[object DOMWindow]" === t
            )
              return !1;
          }
          if ("function" == typeof n.then) return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      var x,
        O = [],
        P = [],
        T = 0;
      function N() {
        if (!T && x) {
          var n = x;
          (x = null), n.resolve();
        }
      }
      function S() {
        T += 1;
      }
      function k() {
        (T -= 1), N();
      }
      var A = (function () {
        function n(n) {
          var e = this;
          if (
            ((this.resolved = void 0),
            (this.rejected = void 0),
            (this.errorHandled = void 0),
            (this.value = void 0),
            (this.error = void 0),
            (this.handlers = void 0),
            (this.dispatching = void 0),
            (this.stack = void 0),
            (this.resolved = !1),
            (this.rejected = !1),
            (this.errorHandled = !1),
            (this.handlers = []),
            n)
          ) {
            var t,
              r,
              o = !1,
              i = !1,
              a = !1;
            S();
            try {
              n(
                function (n) {
                  a ? e.resolve(n) : ((o = !0), (t = n));
                },
                function (n) {
                  a ? e.reject(n) : ((i = !0), (r = n));
                }
              );
            } catch (n) {
              return k(), void this.reject(n);
            }
            k(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
          }
        }
        var e = n.prototype;
        return (
          (e.resolve = function (n) {
            if (this.resolved || this.rejected) return this;
            if (L(n))
              throw new Error("Can not resolve promise with another promise");
            return (
              (this.resolved = !0), (this.value = n), this.dispatch(), this
            );
          }),
          (e.reject = function (n) {
            var e = this;
            if (this.resolved || this.rejected) return this;
            if (L(n))
              throw new Error("Can not reject promise with another promise");
            if (!n) {
              var t =
                n && "function" == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
              n = new Error(
                "Expected reject to be called with Error, got " + t
              );
            }
            return (
              (this.rejected = !0),
              (this.error = n),
              this.errorHandled ||
                setTimeout(function () {
                  e.errorHandled ||
                    (function (n, e) {
                      if (-1 === O.indexOf(n)) {
                        O.push(n),
                          setTimeout(function () {
                            throw n;
                          }, 1);
                        for (var t = 0; t < P.length; t++) P[t](n, e);
                      }
                    })(n, e);
                }, 1),
              this.dispatch(),
              this
            );
          }),
          (e.asyncReject = function (n) {
            return (this.errorHandled = !0), this.reject(n), this;
          }),
          (e.dispatch = function () {
            var e = this.resolved,
              t = this.rejected,
              r = this.handlers;
            if (!this.dispatching && (e || t)) {
              (this.dispatching = !0), S();
              for (
                var o = function (n, e) {
                    return n.then(
                      function (n) {
                        e.resolve(n);
                      },
                      function (n) {
                        e.reject(n);
                      }
                    );
                  },
                  i = 0;
                i < r.length;
                i++
              ) {
                var a = r[i],
                  u = a.onSuccess,
                  l = a.onError,
                  c = a.promise,
                  s = void 0;
                if (e)
                  try {
                    s = u ? u(this.value) : this.value;
                  } catch (n) {
                    c.reject(n);
                    continue;
                  }
                else if (t) {
                  if (!l) {
                    c.reject(this.error);
                    continue;
                  }
                  try {
                    s = l(this.error);
                  } catch (n) {
                    c.reject(n);
                    continue;
                  }
                }
                if (s instanceof n && (s.resolved || s.rejected)) {
                  var d = s;
                  d.resolved ? c.resolve(d.value) : c.reject(d.error),
                    (d.errorHandled = !0);
                } else
                  L(s)
                    ? s instanceof n && (s.resolved || s.rejected)
                      ? s.resolved
                        ? c.resolve(s.value)
                        : c.reject(s.error)
                      : o(s, c)
                    : c.resolve(s);
              }
              (r.length = 0), (this.dispatching = !1), k();
            }
          }),
          (e.then = function (e, t) {
            if (e && "function" != typeof e && !e.call)
              throw new Error(
                "Promise.then expected a function for success handler"
              );
            if (t && "function" != typeof t && !t.call)
              throw new Error(
                "Promise.then expected a function for error handler"
              );
            var r = new n();
            return (
              this.handlers.push({ promise: r, onSuccess: e, onError: t }),
              (this.errorHandled = !0),
              this.dispatch(),
              r
            );
          }),
          (e.catch = function (n) {
            return this.then(void 0, n);
          }),
          (e.finally = function (e) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.finally expected a function");
            return this.then(
              function (t) {
                return n.try(e).then(function () {
                  return t;
                });
              },
              function (t) {
                return n.try(e).then(function () {
                  throw t;
                });
              }
            );
          }),
          (e.timeout = function (n, e) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function () {
              t.resolved ||
                t.rejected ||
                t.reject(e || new Error("Promise timed out after " + n + "ms"));
            }, n);
            return this.then(function (n) {
              return clearTimeout(r), n;
            });
          }),
          (e.toPromise = function () {
            if ("undefined" == typeof Promise)
              throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }),
          (e.lazy = function () {
            return (this.errorHandled = !0), this;
          }),
          (n.resolve = function (e) {
            return e instanceof n
              ? e
              : L(e)
              ? new n(function (n, t) {
                  return e.then(n, t);
                })
              : new n().resolve(e);
          }),
          (n.reject = function (e) {
            return new n().reject(e);
          }),
          (n.asyncReject = function (e) {
            return new n().asyncReject(e);
          }),
          (n.all = function (e) {
            var t = new n(),
              r = e.length,
              o = [].slice();
            if (!r) return t.resolve(o), t;
            for (
              var i = function (n, e, i) {
                  return e.then(
                    function (e) {
                      (o[n] = e), 0 == (r -= 1) && t.resolve(o);
                    },
                    function (n) {
                      i.reject(n);
                    }
                  );
                },
                a = 0;
              a < e.length;
              a++
            ) {
              var u = e[a];
              if (u instanceof n) {
                if (u.resolved) {
                  (o[a] = u.value), (r -= 1);
                  continue;
                }
              } else if (!L(u)) {
                (o[a] = u), (r -= 1);
                continue;
              }
              i(a, n.resolve(u), t);
            }
            return 0 === r && t.resolve(o), t;
          }),
          (n.hash = function (e) {
            var t = {},
              r = [],
              o = function (n) {
                if (e.hasOwnProperty(n)) {
                  var o = e[n];
                  L(o)
                    ? r.push(
                        o.then(function (e) {
                          t[n] = e;
                        })
                      )
                    : (t[n] = o);
                }
              };
            for (var i in e) o(i);
            return n.all(r).then(function () {
              return t;
            });
          }),
          (n.map = function (e, t) {
            return n.all(e.map(t));
          }),
          (n.onPossiblyUnhandledException = function (n) {
            return (function (n) {
              return (
                P.push(n),
                {
                  cancel: function () {
                    P.splice(P.indexOf(n), 1);
                  },
                }
              );
            })(n);
          }),
          (n.try = function (e, t, r) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.try expected a function");
            var o;
            S();
            try {
              o = e.apply(t, r || []);
            } catch (e) {
              return k(), n.reject(e);
            }
            return k(), n.resolve(o);
          }),
          (n.delay = function (e) {
            return new n(function (n) {
              setTimeout(n, e);
            });
          }),
          (n.isPromise = function (e) {
            return !!(e && e instanceof n) || L(e);
          }),
          (n.flush = function () {
            return (e = x = x || new n()), N(), e;
            var e;
          }),
          n
        );
      })();
      function _(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      var M = { IFRAME: "iframe", POPUP: "popup" },
        R = "Call was rejected by callee.\r\n";
      function F(n) {
        return void 0 === n && (n = window), n.location.protocol;
      }
      function D(n) {
        if ((void 0 === n && (n = window), n.mockDomain)) {
          var e = n.mockDomain.split("//")[0];
          if (e) return e;
        }
        return F(n);
      }
      function I(n) {
        return void 0 === n && (n = window), "about:" === D(n);
      }
      function j(n) {
        if ((void 0 === n && (n = window), n))
          try {
            if (n.parent && n.parent !== n) return n.parent;
          } catch (n) {}
      }
      function B(n) {
        if ((void 0 === n && (n = window), n && !j(n)))
          try {
            return n.opener;
          } catch (n) {}
      }
      function H(n) {
        try {
          return !0;
        } catch (n) {}
        return !1;
      }
      function W(n) {
        void 0 === n && (n = window);
        var e = n.location;
        if (!e) throw new Error("Can not read window location");
        var t = F(n);
        if (!t) throw new Error("Can not read window protocol");
        if ("file:" === t) return "file://";
        if ("about:" === t) {
          var r = j(n);
          return r && H() ? W(r) : "about://";
        }
        var o = e.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o;
      }
      function Z(n) {
        void 0 === n && (n = window);
        var e = W(n);
        return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
          ? n.mockDomain
          : e;
      }
      function U(n) {
        if (
          !(function (n) {
            try {
              if (n === window) return !0;
            } catch (n) {}
            try {
              var e = Object.getOwnPropertyDescriptor(n, "location");
              if (e && !1 === e.enumerable) return !1;
            } catch (n) {}
            try {
              if (I(n) && H()) return !0;
            } catch (n) {}
            try {
              if (
                (function (n) {
                  return void 0 === n && (n = window), "mock:" === D(n);
                })(n) &&
                H()
              )
                return !0;
            } catch (n) {}
            try {
              if (W(n) === W(window)) return !0;
            } catch (n) {}
            return !1;
          })(n)
        )
          return !1;
        try {
          if (n === window) return !0;
          if (I(n) && H()) return !0;
          if (Z(window) === Z(n)) return !0;
        } catch (n) {}
        return !1;
      }
      function q(n) {
        if (!U(n)) throw new Error("Expected window to be same domain");
        return n;
      }
      function z(n, e) {
        if (!n || !e) return !1;
        var t = j(e);
        return t
          ? t === n
          : -1 !==
              (function (n) {
                var e = [];
                try {
                  for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                } catch (n) {}
                return e;
              })(e).indexOf(n);
      }
      function G(n) {
        var e,
          t,
          r = [];
        try {
          e = n.frames;
        } catch (t) {
          e = n;
        }
        try {
          t = e.length;
        } catch (n) {}
        if (0 === t) return r;
        if (t) {
          for (var o = 0; o < t; o++) {
            var i = void 0;
            try {
              i = e[o];
            } catch (n) {
              continue;
            }
            r.push(i);
          }
          return r;
        }
        for (var a = 0; a < 100; a++) {
          var u = void 0;
          try {
            u = e[a];
          } catch (n) {
            return r;
          }
          if (!u) return r;
          r.push(u);
        }
        return r;
      }
      function V(n) {
        for (var e = [], t = 0, r = G(n); t < r.length; t++) {
          var o = r[t];
          e.push(o);
          for (var i = 0, a = V(o); i < a.length; i++) e.push(a[i]);
        }
        return e;
      }
      function Y(n) {
        void 0 === n && (n = window);
        try {
          if (n.top) return n.top;
        } catch (n) {}
        if (j(n) === n) return n;
        try {
          if (z(window, n) && window.top) return window.top;
        } catch (n) {}
        try {
          if (z(n, window) && window.top) return window.top;
        } catch (n) {}
        for (var e = 0, t = V(n); e < t.length; e++) {
          var r = t[e];
          try {
            if (r.top) return r.top;
          } catch (n) {}
          if (j(r) === r) return r;
        }
      }
      function K(n) {
        var e = Y(n);
        if (!e) throw new Error("Can not determine top window");
        var t = [].concat(V(e), [e]);
        return -1 === t.indexOf(n) && (t = [].concat(t, [n], V(n))), t;
      }
      var J = [],
        X = [];
      function $(n, e) {
        void 0 === e && (e = !0);
        try {
          if (n === window) return !1;
        } catch (n) {
          return !0;
        }
        try {
          if (!n) return !0;
        } catch (n) {
          return !0;
        }
        try {
          if (n.closed) return !0;
        } catch (n) {
          return !n || n.message !== R;
        }
        if (e && U(n))
          try {
            if (n.mockclosed) return !0;
          } catch (n) {}
        try {
          if (!n.parent || !n.top) return !0;
        } catch (n) {}
        var t = (function (n, e) {
          for (var t = 0; t < n.length; t++)
            try {
              if (n[t] === e) return t;
            } catch (n) {}
          return -1;
        })(J, n);
        if (-1 !== t) {
          var r = X[t];
          if (
            r &&
            (function (n) {
              if (!n.contentWindow) return !0;
              if (!n.parentNode) return !0;
              var e = n.ownerDocument;
              if (e && e.documentElement && !e.documentElement.contains(n)) {
                for (var t = n; t.parentNode && t.parentNode !== t; )
                  t = t.parentNode;
                if (!t.host || !e.documentElement.contains(t.host)) return !0;
              }
              return !1;
            })(r)
          )
            return !0;
        }
        return !1;
      }
      function Q(n, e) {
        for (var t = G(n), r = 0; r < t.length; r++) {
          var o = t[r];
          try {
            if (U(o) && o.name === e && -1 !== t.indexOf(o)) return o;
          } catch (n) {}
        }
        try {
          if (-1 !== t.indexOf(n.frames[e])) return n.frames[e];
        } catch (n) {}
        try {
          if (-1 !== t.indexOf(n[e])) return n[e];
        } catch (n) {}
      }
      function nn(n) {
        return (
          void 0 === n && (n = window), B((n = n || window)) || j(n) || void 0
        );
      }
      function en(n, e) {
        for (var t = 0; t < n.length; t++)
          for (var r = n[t], o = 0; o < e.length; o++)
            if (r === e[o]) return !0;
        return !1;
      }
      function tn(n) {
        void 0 === n && (n = window);
        for (var e = 0, t = n; t; ) (t = j(t)) && (e += 1);
        return e;
      }
      function rn(n, e) {
        var t = Y(n) || n,
          r = Y(e) || e;
        try {
          if (t && r) return t === r;
        } catch (n) {}
        var o = K(n),
          i = K(e);
        if (en(o, i)) return !0;
        var a = B(t),
          u = B(r);
        return (a && en(K(a), i)) || (u && en(K(u), o)), !1;
      }
      function on(n, e) {
        if ("string" == typeof n) {
          if ("string" == typeof e) return "*" === n || e === n;
          if (_(e)) return !1;
          if (Array.isArray(e)) return !1;
        }
        return _(n)
          ? _(e)
            ? n.toString() === e.toString()
            : !Array.isArray(e) && Boolean(e.match(n))
          : !!Array.isArray(n) &&
              (Array.isArray(e)
                ? JSON.stringify(n) === JSON.stringify(e)
                : !_(e) &&
                  n.some(function (n) {
                    return on(n, e);
                  }));
      }
      function an(n) {
        return n.match(/^(https?|mock|file):\/\//)
          ? n.split("/").slice(0, 3).join("/")
          : Z();
      }
      function un(n, e, t, r) {
        var o;
        return (
          void 0 === t && (t = 1e3),
          void 0 === r && (r = 1 / 0),
          (function i() {
            if ($(n)) return o && clearTimeout(o), e();
            r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
          })(),
          {
            cancel: function () {
              o && clearTimeout(o);
            },
          }
        );
      }
      function ln(n) {
        try {
          if (n === window) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if ("[object Window]" === {}.toString.call(n)) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (window.Window && n instanceof window.Window) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.self === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.parent === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.top === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (
            n &&
            "__unlikely_value__" === n.__cross_domain_utils_window_check__
          )
            return !1;
        } catch (n) {
          return !0;
        }
        try {
          if ("postMessage" in n && "self" in n && "location" in n) return !0;
        } catch (n) {}
        return !1;
      }
      function cn(n) {
        if (U(n)) return q(n).frameElement;
        for (
          var e = 0, t = document.querySelectorAll("iframe");
          e < t.length;
          e++
        ) {
          var r = t[e];
          if (r && r.contentWindow && r.contentWindow === n) return r;
        }
      }
      function sn(n) {
        if (
          (function (n) {
            return void 0 === n && (n = window), Boolean(j(n));
          })(n)
        ) {
          var e = cn(n);
          if (e && e.parentElement) return void e.parentElement.removeChild(e);
        }
        try {
          n.close();
        } catch (n) {}
      }
      function dn(n, e) {
        for (var t = 0; t < n.length; t++)
          try {
            if (n[t] === e) return t;
          } catch (n) {}
        return -1;
      }
      var fn,
        pn = (function () {
          function n() {
            if (
              ((this.name = void 0),
              (this.weakmap = void 0),
              (this.keys = void 0),
              (this.values = void 0),
              (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
              (function () {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                  var n = new WeakMap(),
                    e = {};
                  return (
                    Object.freeze(e),
                    n.set(e, "__testvalue__"),
                    "__testvalue__" === n.get(e)
                  );
                } catch (n) {
                  return !1;
                }
              })())
            )
              try {
                this.weakmap = new WeakMap();
              } catch (n) {}
            (this.keys = []), (this.values = []);
          }
          var e = n.prototype;
          return (
            (e._cleanupClosedWindows = function () {
              for (
                var n = this.weakmap, e = this.keys, t = 0;
                t < e.length;
                t++
              ) {
                var r = e[t];
                if (ln(r) && $(r)) {
                  if (n)
                    try {
                      n.delete(r);
                    } catch (n) {}
                  e.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                }
              }
            }),
            (e.isSafeToReadWrite = function (n) {
              return !ln(n);
            }),
            (e.set = function (n, e) {
              if (!n) throw new Error("WeakMap expected key");
              var t = this.weakmap;
              if (t)
                try {
                  t.set(n, e);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var r = this.name,
                    o = n[r];
                  return void (o && o[0] === n
                    ? (o[1] = e)
                    : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0,
                      }));
                } catch (n) {}
              this._cleanupClosedWindows();
              var i = this.keys,
                a = this.values,
                u = dn(i, n);
              -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
            }),
            (e.get = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return e.get(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return t && t[0] === n ? t[1] : void 0;
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = dn(this.keys, n);
              if (-1 !== r) return this.values[r];
            }),
            (e.delete = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  e.delete(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  t && t[0] === n && (t[0] = t[1] = void 0);
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = this.keys,
                o = dn(r, n);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }),
            (e.has = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return !0;
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return !(!t || t[0] !== n);
                } catch (n) {}
              return this._cleanupClosedWindows(), -1 !== dn(this.keys, n);
            }),
            (e.getOrSet = function (n, e) {
              if (this.has(n)) return this.get(n);
              var t = e();
              return this.set(n, t), t;
            }),
            n
          );
        })();
      function hn(n) {
        return (hn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function mn() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      }
      function gn(n, e, t) {
        return (gn = mn()
          ? Reflect.construct
          : function (n, e, t) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(n, r))();
              return t && C(o, t.prototype), o;
            }).apply(null, arguments);
      }
      function yn(n) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (yn = function (n) {
          if (
            null === n ||
            -1 === Function.toString.call(n).indexOf("[native code]")
          )
            return n;
          if ("function" != typeof n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(n)) return e.get(n);
            e.set(n, t);
          }
          function t() {
            return gn(n, arguments, hn(this).constructor);
          }
          return (
            (t.prototype = Object.create(n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            C(t, n)
          );
        })(n);
      }
      function vn(n) {
        return n.name || n.__name__ || n.displayName || "anonymous";
      }
      function wn(n, e) {
        try {
          delete n.name, (n.name = e);
        } catch (n) {}
        return (n.__name__ = n.displayName = e), n;
      }
      function Cn(n) {
        if ("function" == typeof btoa)
          return btoa(
            encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
              return String.fromCharCode(parseInt(e, 16));
            })
          ).replace(/[=]/g, "");
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "utf8").toString("base64").replace(/[=]/g, "");
        throw new Error("Can not find window.btoa or Buffer");
      }
      function bn(n) {
        if ("function" == typeof atob)
          return decodeURIComponent(
            [].map
              .call(atob(n), function (n) {
                return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "base64").toString("utf8");
        throw new Error("Can not find window.atob or Buffer");
      }
      function En() {
        var n = "0123456789abcdef";
        return (
          "uid_" +
          "xxxxxxxxxx".replace(/./g, function () {
            return n.charAt(Math.floor(Math.random() * n.length));
          }) +
          "_" +
          Cn(new Date().toISOString().slice(11, 19).replace("T", "."))
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
        );
      }
      function Ln() {
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("No global found");
      }
      function xn(n) {
        try {
          return JSON.stringify([].slice.call(n), function (n, e) {
            return "function" == typeof e
              ? "memoize[" +
                  (function (n) {
                    if (
                      ((fn = fn || new pn()),
                      null == n ||
                        ("object" != typeof n && "function" != typeof n))
                    )
                      throw new Error("Invalid object");
                    var e = fn.get(n);
                    return e || ((e = typeof n + ":" + En()), fn.set(n, e)), e;
                  })(e) +
                  "]"
              : e;
          });
        } catch (n) {
          throw new Error(
            "Arguments not serializable -- can not be used to memoize"
          );
        }
      }
      function On() {
        return {};
      }
      var Pn = 0,
        Tn = 0;
      function Nn(n, e) {
        void 0 === e && (e = {});
        var t,
          r,
          o = e.thisNamespace,
          i = void 0 !== o && o,
          a = e.time,
          u = Pn;
        Pn += 1;
        var l = function () {
          for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
            o[l] = arguments[l];
          var c;
          u < Tn && ((t = null), (r = null), (u = Pn), (Pn += 1)),
            (c = i ? (r = r || new pn()).getOrSet(this, On) : (t = t || {}));
          var s = xn(o),
            d = c[s];
          if (
            (d && a && Date.now() - d.time < a && (delete c[s], (d = null)), d)
          )
            return d.value;
          var f = Date.now(),
            p = n.apply(this, arguments);
          return (c[s] = { time: f, value: p }), p;
        };
        return (
          (l.reset = function () {
            (t = null), (r = null);
          }),
          wn(l, (e.name || vn(n)) + "::memoized")
        );
      }
      function Sn(n) {
        var e = {};
        function t() {
          for (
            var t = arguments,
              r = this,
              o = arguments.length,
              i = new Array(o),
              a = 0;
            a < o;
            a++
          )
            i[a] = arguments[a];
          var u = xn(i);
          return (
            e.hasOwnProperty(u) ||
              (e[u] = A.try(function () {
                return n.apply(r, t);
              }).finally(function () {
                delete e[u];
              })),
            e[u]
          );
        }
        return (
          (t.reset = function () {
            e = {};
          }),
          wn(t, vn(n) + "::promiseMemoized")
        );
      }
      function kn(n, e, t) {
        void 0 === t && (t = []);
        var r = (n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}),
          o = xn(t);
        return r.hasOwnProperty(o) ? r[o] : (r[o] = e.apply(void 0, t));
      }
      function An() {}
      function _n(n) {
        var e = !1;
        return wn(function () {
          if (!e) return (e = !0), n.apply(this, arguments);
        }, vn(n) + "::once");
      }
      function Mn(n, e) {
        if ((void 0 === e && (e = 1), e >= 3))
          return "stringifyError stack overflow";
        try {
          if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
          if ("string" == typeof n) return n;
          if (n instanceof Error) {
            var t = n && n.stack,
              r = n && n.message;
            if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
            if (t) return t;
            if (r) return r;
          }
          return n && n.toString && "function" == typeof n.toString
            ? n.toString()
            : {}.toString.call(n);
        } catch (n) {
          return "Error while stringifying error: " + Mn(n, e + 1);
        }
      }
      function Rn(n) {
        var e = "<unknown error: " + {}.toString.call(n) + ">";
        return n
          ? n instanceof Error
            ? n.message || e
            : ("string" == typeof n.message && n.message) || e
          : e;
      }
      function Fn(n) {
        return "string" == typeof n
          ? n
          : n && n.toString && "function" == typeof n.toString
          ? n.toString()
          : {}.toString.call(n);
      }
      function Dn(n, e) {
        if (!e) return n;
        if (Object.assign) return Object.assign(n, e);
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n;
      }
      function In(n) {
        if (Object.values) return Object.values(n);
        var e = [];
        for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
        return e;
      }
      function jn(n, e) {
        return Math.round((n * e) / 100);
      }
      function Bn() {
        return Math.max.apply(Math, arguments);
      }
      function Hn(n, e) {
        var t = n % e;
        return t ? n - t + e : n;
      }
      function Wn(n) {
        return "data:image/svg+xml;base64," + Cn(n);
      }
      function Zn(n, e) {
        void 0 === e && (e = Boolean);
        var t = {};
        for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
        return t;
      }
      function Un(n) {
        return n;
      }
      function qn(n, e) {
        var t;
        return (
          (function r() {
            t = setTimeout(function () {
              n(), r();
            }, e);
          })(),
          {
            cancel: function () {
              clearTimeout(t);
            },
          }
        );
      }
      function zn() {
        var n = {},
          e = {},
          t = {
            on: function (n, t) {
              var r = (e[n] = e[n] || []);
              r.push(t);
              var o = !1;
              return {
                cancel: function () {
                  o || ((o = !0), r.splice(r.indexOf(t), 1));
                },
              };
            },
            once: function (n, e) {
              var r = t.on(n, function () {
                r.cancel(), e();
              });
              return r;
            },
            trigger: function (n) {
              for (
                var t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                r[o - 1] = arguments[o];
              var i = e[n],
                a = [];
              if (i)
                for (
                  var u = function (n) {
                      var e = i[n];
                      a.push(
                        A.try(function () {
                          return e.apply(void 0, r);
                        })
                      );
                    },
                    l = 0;
                  l < i.length;
                  l++
                )
                  u(l);
              return A.all(a).then(An);
            },
            triggerOnce: function (e) {
              if (n[e]) return A.resolve();
              n[e] = !0;
              for (
                var r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  i = 1;
                i < r;
                i++
              )
                o[i - 1] = arguments[i];
              return t.trigger.apply(t, [e].concat(o));
            },
            reset: function () {
              e = {};
            },
          };
        return t;
      }
      function Gn(n) {
        return n.replace(/-([a-z])/g, function (n) {
          return n[1].toUpperCase();
        });
      }
      function Vn(n) {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      }
      function Yn(n, e, t) {
        if (Array.isArray(n)) {
          if ("number" != typeof e)
            throw new TypeError("Array key must be number");
        } else if ("object" == typeof n && null !== n && "string" != typeof e)
          throw new TypeError("Object key must be string");
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            delete n[e];
            var r = t();
            return (n[e] = r), r;
          },
          set: function (t) {
            delete n[e], (n[e] = t);
          },
        });
      }
      function Kn(n) {
        return [].slice.call(n);
      }
      function Jn(n) {
        return (
          "object" == typeof (e = n) &&
          null !== e &&
          "[object Object]" === {}.toString.call(n)
        );
        var e;
      }
      function Xn(n) {
        if (!Jn(n)) return !1;
        var e = n.constructor;
        if ("function" != typeof e) return !1;
        var t = e.prototype;
        return !!Jn(t) && !!t.hasOwnProperty("isPrototypeOf");
      }
      function $n(n, e, t) {
        if ((void 0 === t && (t = ""), Array.isArray(n))) {
          for (
            var r = n.length,
              o = [],
              i = function (r) {
                Yn(o, r, function () {
                  var o = t ? t + "." + r : "" + r,
                    i = e(n[r], r, o);
                  return (Xn(i) || Array.isArray(i)) && (i = $n(i, e, o)), i;
                });
              },
              a = 0;
            a < r;
            a++
          )
            i(a);
          return o;
        }
        if (Xn(n)) {
          var u = {},
            l = function (r) {
              if (!n.hasOwnProperty(r)) return "continue";
              Yn(u, r, function () {
                var o = t ? t + "." + r : "" + r,
                  i = e(n[r], r, o);
                return (Xn(i) || Array.isArray(i)) && (i = $n(i, e, o)), i;
              });
            };
          for (var c in n) l(c);
          return u;
        }
        throw new Error("Pass an object or array");
      }
      function Qn(n) {
        return null != n;
      }
      function ne(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      function ee(n, e, t) {
        if (n.hasOwnProperty(e)) return n[e];
        var r = t();
        return (n[e] = r), r;
      }
      function te(n) {
        var e,
          t = [],
          r = !1,
          o = {
            set: function (e, t) {
              return (
                r ||
                  ((n[e] = t),
                  o.register(function () {
                    delete n[e];
                  })),
                t
              );
            },
            register: function (n) {
              var o = _n(function () {
                return n(e);
              });
              return (
                r ? n(e) : t.push(o),
                {
                  cancel: function () {
                    var n = t.indexOf(o);
                    -1 !== n && t.splice(n, 1);
                  },
                }
              );
            },
            all: function (n) {
              e = n;
              var o = [];
              for (r = !0; t.length; ) {
                var i = t.shift();
                o.push(i());
              }
              return A.all(o).then(An);
            },
          };
        return o;
      }
      function re(n, e) {
        if (null == e) throw new Error("Expected " + n + " to be present");
        return e;
      }
      (Nn.clear = function () {
        Tn = Pn;
      }),
        Nn(In);
      var oe = (function (n) {
        function e(e) {
          var t;
          return (
            ((t = n.call(this, e) || this).name = t.constructor.name),
            "function" == typeof Error.captureStackTrace
              ? Error.captureStackTrace(
                  (function (n) {
                    if (void 0 === n)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return n;
                  })(t),
                  t.constructor
                )
              : (t.stack = new Error(e).stack),
            t
          );
        }
        return b(e, n), e;
      })(yn(Error));
      function ie() {
        var n = document.body;
        if (!n) throw new Error("Body element not found");
        return n;
      }
      function ae() {
        return Boolean(document.body) && "complete" === document.readyState;
      }
      function ue() {
        return Boolean(document.body) && "interactive" === document.readyState;
      }
      function le(n) {
        return encodeURIComponent(n);
      }
      function ce() {
        return kn(ce, function () {
          return new A(function (n) {
            ae() && n(),
              window.addEventListener("load", function () {
                return n();
              });
          });
        });
      }
      function se(n) {
        return kn(
          se,
          function () {
            var e = {};
            if (!n) return e;
            if (-1 === n.indexOf("=")) return e;
            for (var t = 0, r = n.split("&"); t < r.length; t++) {
              var o = r[t];
              (o = o.split("="))[0] &&
                o[1] &&
                (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            }
            return e;
          },
          [n]
        );
      }
      function de(n, e) {
        return (
          void 0 === e && (e = {}),
          e && Object.keys(e).length
            ? (void 0 === (t = E({}, se(n), e)) && (t = {}),
              Object.keys(t)
                .filter(function (n) {
                  return "string" == typeof t[n] || "boolean" == typeof t[n];
                })
                .map(function (n) {
                  var e = t[n];
                  if ("string" != typeof e && "boolean" != typeof e)
                    throw new TypeError("Invalid type for query");
                  return le(n) + "=" + le(e.toString());
                })
                .join("&"))
            : n
        );
        var t;
      }
      function fe(n, e) {
        var t,
          r,
          o = e.query || {},
          i = e.hash || {},
          a = n.split("#");
        r = a[1];
        var u = (t = a[0]).split("?");
        t = u[0];
        var l = de(u[1], o),
          c = de(r, i);
        return l && (t = t + "?" + l), c && (t = t + "#" + c), t;
      }
      function pe() {
        return kn(pe, function () {
          var n = window.performance;
          if (
            n &&
            n.now &&
            n.timing &&
            n.timing.connectEnd &&
            n.timing.navigationStart &&
            Math.abs(n.now() - Date.now()) > 1e3 &&
            n.now() - (n.timing.connectEnd - n.timing.navigationStart) > 0
          )
            return n;
        });
      }
      function he() {
        return "undefined" != typeof window && void 0 !== window.location;
      }
      function me() {
        return kn(me, function () {
          try {
            if ("undefined" == typeof window) return !1;
            if (window.localStorage) {
              var n = Math.random().toString();
              window.localStorage.setItem("__test__localStorage__", n);
              var e = window.localStorage.getItem("__test__localStorage__");
              if (
                (window.localStorage.removeItem("__test__localStorage__"),
                n === e)
              )
                return !0;
            }
          } catch (n) {}
          return !1;
        });
      }
      function ge() {
        var n = window.navigator,
          e = n.languages ? [].concat(n.languages) : [];
        return (
          n.language && e.push(n.language),
          n.userLanguage && e.push(n.userLanguage),
          e
            .map(function (n) {
              if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var e = n.split(/[-_]/);
                return { country: e[1], lang: e[0] };
              }
              return n && n.match(/^[a-z]{2}$/) ? { lang: n } : null;
            })
            .filter(Boolean)
        );
      }
      function ye(n, e) {
        n.appendChild(e);
      }
      function ve(n) {
        return (
          n instanceof window.Element ||
          (null !== n &&
            "object" == typeof n &&
            1 === n.nodeType &&
            "object" == typeof n.style &&
            "object" == typeof n.ownerDocument)
        );
      }
      function we(n, e) {
        return (
          void 0 === e && (e = document),
          ve(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        );
      }
      function Ce(n, e) {
        void 0 === e && (e = document);
        var t = we(n, e);
        if (t) return t;
        throw new Error("Can not find element: " + Fn(n));
      }
      function be(n) {
        return new A(function (e, t) {
          var r = Fn(n),
            o = we(n);
          if (o) return e(o);
          if (ae())
            return t(
              new Error(
                "Document is ready and element " + r + " does not exist"
              )
            );
          var i = setInterval(function () {
            return (o = we(n))
              ? (e(o), void clearInterval(i))
              : ae()
              ? (clearInterval(i),
                t(
                  new Error(
                    "Document is ready and element " + r + " does not exist"
                  )
                ))
              : void 0;
          }, 10);
        });
      }
      Nn(function () {
        return new A(function (n) {
          if (ae() || ue()) return n();
          var e = setInterval(function () {
            if (ae() || ue()) return clearInterval(e), n();
          }, 10);
        });
      });
      var Ee,
        Le = (function (n) {
          function e() {
            return n.apply(this, arguments) || this;
          }
          return b(e, n), e;
        })(oe);
      function xe(n, e) {
        var t = (e = e || {}).closeOnUnload,
          r = void 0 === t ? 1 : t,
          o = e.name,
          i = void 0 === o ? "" : o,
          a = e.width,
          u = e.height,
          l = 0,
          c = 0;
        a &&
          (window.outerWidth
            ? (c = Math.round((window.outerWidth - a) / 2) + window.screenX)
            : window.screen.width &&
              (c = Math.round((window.screen.width - a) / 2))),
          u &&
            (window.outerHeight
              ? (l = Math.round((window.outerHeight - u) / 2) + window.screenY)
              : window.screen.height &&
                (l = Math.round((window.screen.height - u) / 2))),
          delete e.closeOnUnload,
          delete e.name,
          a &&
            u &&
            (e = E(
              {
                top: l,
                left: c,
                width: a,
                height: u,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1,
              },
              e
            ));
        var s,
          d,
          f = Object.keys(e)
            .map(function (n) {
              if (null != e[n]) return n + "=" + Fn(e[n]);
            })
            .filter(Boolean)
            .join(",");
        try {
          s = window.open(n, i, f);
        } catch (d) {
          throw new Le("Can not open popup window - " + (d.stack || d.message));
        }
        if ($(s)) throw new Le("Can not open popup window - blocked");
        return (
          r &&
            window.addEventListener("unload", function () {
              return s.close();
            }),
          s
        );
      }
      function Oe(n, e) {
        var t = e.tagName.toLowerCase();
        if ("html" !== t)
          throw new Error("Expected element to be html, got " + t);
        for (
          var r = n.document.documentElement, o = 0, i = Kn(r.children);
          o < i.length;
          o++
        )
          r.removeChild(i[o]);
        for (var a = 0, u = Kn(e.children); a < u.length; a++)
          r.appendChild(u[a]);
      }
      function Pe(n) {
        if ((Ee = Ee || new pn()).has(n)) {
          var e = Ee.get(n);
          if (e) return e;
        }
        var t = new A(function (e, t) {
          n.addEventListener("load", function () {
            (function (n) {
              if (
                ((function () {
                  for (var n = 0; n < J.length; n++) {
                    var e = !1;
                    try {
                      e = J[n].closed;
                    } catch (n) {}
                    e && (X.splice(n, 1), J.splice(n, 1));
                  }
                })(),
                n && n.contentWindow)
              )
                try {
                  J.push(n.contentWindow), X.push(n);
                } catch (n) {}
            })(n),
              e(n);
          }),
            n.addEventListener("error", function (r) {
              n.contentWindow ? e(n) : t(r);
            });
        });
        return Ee.set(n, t), t;
      }
      function Te(n) {
        return Pe(n).then(function (n) {
          if (!n.contentWindow)
            throw new Error("Could not find window in iframe");
          return n.contentWindow;
        });
      }
      function Ne(n, e) {
        void 0 === n && (n = {});
        var t = n.style || {},
          r = (function (n, e, t) {
            void 0 === n && (n = "div"),
              void 0 === e && (e = {}),
              (n = n.toLowerCase());
            var r,
              o,
              i,
              a = document.createElement(n);
            if (
              (e.style && Dn(a.style, e.style),
              e.class && (a.className = e.class.join(" ")),
              e.id && a.setAttribute("id", e.id),
              e.attributes)
            )
              for (
                var u = 0, l = Object.keys(e.attributes);
                u < l.length;
                u++
              ) {
                var c = l[u];
                a.setAttribute(c, e.attributes[c]);
              }
            if (
              (e.styleSheet &&
                ((r = a),
                (o = e.styleSheet),
                void 0 === i && (i = window.document),
                r.styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(i.createTextNode(o))),
              e.html)
            ) {
              if ("iframe" === n)
                throw new Error(
                  "Iframe html can not be written unless container provided and iframe in DOM"
                );
              a.innerHTML = e.html;
            }
            return a;
          })("iframe", {
            attributes: E({ allowTransparency: "true" }, n.attributes || {}),
            style: E({ backgroundColor: "transparent", border: "none" }, t),
            html: n.html,
            class: n.class,
          }),
          o = window.navigator.userAgent.match(/MSIE|Edge/i);
        return (
          r.hasAttribute("id") || r.setAttribute("id", En()),
          Pe(r),
          e && Ce(e).appendChild(r),
          (n.url || o) && r.setAttribute("src", n.url || "about:blank"),
          r
        );
      }
      function Se(n, e, t) {
        return (
          n.addEventListener(e, t),
          {
            cancel: function () {
              n.removeEventListener(e, t);
            },
          }
        );
      }
      function ke(n, e, t) {
        t = _n(t);
        for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
        return {
          cancel: _n(function () {
            for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t);
          }),
        };
      }
      var Ae = ["webkit", "moz", "ms", "o"],
        _e = [
          "animationstart",
          "webkitAnimationStart",
          "oAnimationStart",
          "MSAnimationStart",
        ],
        Me = [
          "animationend",
          "webkitAnimationEnd",
          "oAnimationEnd",
          "MSAnimationEnd",
        ];
      function Re(n, e, t, r) {
        return (
          void 0 === r && (r = 1e3),
          new A(function (o, i) {
            var a = Ce(n);
            if (!a) return o();
            var u,
              l,
              c,
              s,
              d = !1;
            function f() {
              clearTimeout(u), clearTimeout(l), c.cancel(), s.cancel();
            }
            (c = ke(a, _e, function (n) {
              n.target === a &&
                n.animationName === e &&
                (clearTimeout(u),
                n.stopPropagation(),
                c.cancel(),
                (d = !0),
                (l = setTimeout(function () {
                  f(), o();
                }, r)));
            })),
              (s = ke(a, Me, function (n) {
                if (n.target === a && n.animationName === e)
                  return (
                    f(),
                    "string" == typeof n.animationName && n.animationName !== e
                      ? i(
                          "Expected animation name to be " +
                            e +
                            ", found " +
                            n.animationName
                        )
                      : o()
                  );
              })),
              (function (n, e, t) {
                n.style[e] = t;
                for (var r = Vn(e), o = 0; o < Ae.length; o++)
                  n.style["" + Ae[o] + r] = t;
              })(a, "animationName", e),
              (u = setTimeout(function () {
                if (!d) return f(), o();
              }, 200)),
              t && t(f);
          })
        );
      }
      function Fe(n) {
        n.style.setProperty("display", "");
      }
      function De(n) {
        n.style.setProperty("display", "none", "important");
      }
      function Ie(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      }
      function je(n) {
        return !(
          n &&
          n.parentNode &&
          n.ownerDocument &&
          n.ownerDocument.documentElement &&
          n.ownerDocument.documentElement.contains(n)
        );
      }
      function Be(n, e, t) {
        var r = void 0 === t ? {} : t,
          o = r.width,
          i = void 0 === o || o,
          a = r.height,
          u = void 0 === a || a,
          l = r.interval,
          c = void 0 === l ? 100 : l,
          s = r.win,
          d = void 0 === s ? window : s,
          f = n.offsetWidth,
          p = n.offsetHeight,
          h = !1;
        e({ width: f, height: p });
        var m,
          g,
          y = function () {
            if (
              !h &&
              (function (n) {
                return Boolean(
                  n.offsetWidth || n.offsetHeight || n.getClientRects().length
                );
              })(n)
            ) {
              var t = n.offsetWidth,
                r = n.offsetHeight;
              ((i && t !== f) || (u && r !== p)) && e({ width: t, height: r }),
                (f = t),
                (p = r);
            }
          };
        return (
          d.addEventListener("resize", y),
          void 0 !== d.ResizeObserver
            ? ((m = new d.ResizeObserver(y)).observe(n), (g = qn(y, 10 * c)))
            : void 0 !== d.MutationObserver
            ? ((m = new d.MutationObserver(y)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1,
              }),
              (g = qn(y, 10 * c)))
            : (g = qn(y, c)),
          {
            cancel: function () {
              (h = !0),
                m.disconnect(),
                window.removeEventListener("resize", y),
                g.cancel();
            },
          }
        );
      }
      function He(n) {
        for (; n.parentNode; ) n = n.parentNode;
        return "[object ShadowRoot]" === n.toString();
      }
      var We = "undefined" != typeof document ? document.currentScript : null,
        Ze = Nn(function () {
          if (We) return We;
          if (
            (We = (function () {
              try {
                var n = (function () {
                    try {
                      throw new Error("_");
                    } catch (n) {
                      return n.stack || "";
                    }
                  })(),
                  e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                  t = e && e[1];
                if (!t) return;
                for (
                  var r = 0,
                    o = [].slice
                      .call(document.getElementsByTagName("script"))
                      .reverse();
                  r < o.length;
                  r++
                ) {
                  var i = o[r];
                  if (i.src && i.src === t) return i;
                }
              } catch (n) {}
            })())
          )
            return We;
          throw new Error("Can not determine current script");
        }),
        Ue = En(),
        qe = Nn(function () {
          var n;
          try {
            n = Ze();
          } catch (n) {
            return Ue;
          }
          var e = n.getAttribute("data-uid");
          if (e && "string" == typeof e) return e;
          if ((e = n.getAttribute("data-uid-auto")) && "string" == typeof e)
            return e;
          if (n.src) {
            var t = (function (n) {
              for (var e = "", t = 0; t < n.length; t++) {
                var r = n[t].charCodeAt(0) * t;
                n[t + 1] && (r += n[t + 1].charCodeAt(0) * (t - 1)),
                  (e += String.fromCharCode(97 + (Math.abs(r) % 26)));
              }
              return e;
            })(JSON.stringify({ src: n.src, dataset: n.dataset }));
            e = "uid_" + t.slice(t.length - 30);
          } else e = En();
          return n.setAttribute("data-uid-auto", e), e;
        });
      function ze(n) {
        var e = n.name,
          t = n.lifetime,
          r = void 0 === t ? 12e5 : t;
        return kn(
          ze,
          function () {
            var n,
              t = "__" + e + "_storage__",
              o = En();
            function i(e) {
              var r,
                i = me();
              if ((n && (r = n), !r && i)) {
                var a = window.localStorage.getItem(t);
                a && (r = JSON.parse(a));
              }
              r || (r = Ln()[t]),
                r || (r = { id: o }),
                r.id || (r.id = o),
                (n = r);
              var u = e(r);
              return (
                i
                  ? window.localStorage.setItem(t, JSON.stringify(r))
                  : (Ln()[t] = r),
                (n = null),
                u
              );
            }
            function a() {
              return i(function (n) {
                return n.id;
              });
            }
            function u(n) {
              return i(function (e) {
                var t = e.__session__,
                  o = Date.now();
                return (
                  t && o - t.created > r && (t = null),
                  t || (t = { guid: En(), created: o }),
                  (e.__session__ = t),
                  n(t)
                );
              });
            }
            return {
              getState: i,
              getID: a,
              isStateFresh: function () {
                return a() === o;
              },
              getSessionState: function (n) {
                return u(function (e) {
                  return (e.state = e.state || {}), n(e.state);
                });
              },
              getSessionID: function () {
                return u(function (n) {
                  return n.guid;
                });
              },
            };
          },
          [{ name: e, lifetime: r }]
        );
      }
      function Ge() {
        return ze({ name: "belter_experiment" });
      }
      function Ve(n) {
        return Ge().getSessionState(function (e) {
          return (
            (e.loggedBeacons = e.loggedBeacons || []),
            -1 === e.loggedBeacons.indexOf(n) && (e.loggedBeacons.push(n), !0)
          );
        });
      }
      function Ye(n) {
        return Math.floor(Math.random() * n);
      }
      var Ke = [];
      function Je(n) {
        var e = n.url,
          t = n.method,
          r = void 0 === t ? "get" : t,
          o = n.headers,
          i = void 0 === o ? {} : o,
          a = n.json,
          u = n.data,
          l = n.body,
          c = n.win,
          s = void 0 === c ? window : c,
          d = n.timeout,
          f = void 0 === d ? 0 : d;
        return new A(function (n, t) {
          if ((a && u) || (a && l) || (u && a))
            throw new Error(
              "Only options.json or options.data or options.body should be passed"
            );
          for (var o = {}, c = 0, d = Object.keys(i); c < d.length; c++) {
            var p = d[c];
            o[p.toLowerCase()] = i[p];
          }
          a
            ? (o["content-type"] = o["content-type"] || "application/json")
            : (u || l) &&
              (o["content-type"] =
                o["content-type"] ||
                "application/x-www-form-urlencoded; charset=utf-8"),
            (o.accept = o.accept || "application/json");
          for (var h = 0; h < Ke.length; h++)
            for (
              var m = (0, Ke[h])(), g = 0, y = Object.keys(m);
              g < y.length;
              g++
            ) {
              var v = y[g];
              o[v.toLowerCase()] = m[v];
            }
          var w = new s.XMLHttpRequest();
          for (var C in (w.addEventListener(
            "load",
            function () {
              var o = (function (n) {
                void 0 === n && (n = "");
                for (
                  var e = {}, t = 0, r = n.trim().split("\n");
                  t < r.length;
                  t++
                ) {
                  var o = r[t].split(":"),
                    i = o[0],
                    a = o.slice(1);
                  e[i.toLowerCase()] = a.join(":").trim();
                }
                return e;
              })(this.getAllResponseHeaders());
              if (!this.status)
                return t(
                  new Error(
                    "Request to " +
                      r.toLowerCase() +
                      " " +
                      e +
                      " failed: no response status code."
                  )
                );
              var i = o["content-type"],
                a =
                  i &&
                  (0 === i.indexOf("application/json") ||
                    0 === i.indexOf("text/json")),
                u = this.responseText;
              try {
                u = JSON.parse(u);
              } catch (n) {
                if (a)
                  return t(
                    new Error("Invalid json: " + this.responseText + ".")
                  );
              }
              return n({ status: this.status, headers: o, body: u });
            },
            !1
          ),
          w.addEventListener(
            "error",
            function (n) {
              t(
                new Error(
                  "Request to " +
                    r.toLowerCase() +
                    " " +
                    e +
                    " failed: " +
                    n.toString() +
                    "."
                )
              );
            },
            !1
          ),
          w.open(r, e, !0),
          o))
            o.hasOwnProperty(C) && w.setRequestHeader(C, o[C]);
          a
            ? (l = JSON.stringify(a))
            : u &&
              (l = Object.keys(u)
                .map(function (n) {
                  return (
                    encodeURIComponent(n) +
                    "=" +
                    (u ? encodeURIComponent(u[n]) : "")
                  );
                })
                .join("&")),
            (w.timeout = f),
            (w.ontimeout = function () {
              t(
                new Error(
                  "Request to " + r.toLowerCase() + " " + e + " has timed out"
                )
              );
            }),
            w.send(l);
        });
      }
      function Xe(n) {
        return "string" == typeof n && /^[0-9]+%$/.test(n);
      }
      function $e(n) {
        if ("number" == typeof n) return n;
        var e = n.match(/^([0-9]+)(px|%)$/);
        if (!e) throw new Error("Could not match css value from " + n);
        return parseInt(e[1], 10);
      }
      function Qe(n) {
        return $e(n) + "px";
      }
      function nt(n) {
        return "number" == typeof n ? Qe(n) : Xe(n) ? n : Qe(n);
      }
      function et(n, e) {
        if ("number" == typeof n) return n;
        if (Xe(n))
          return (function (n, e) {
            return parseInt((n * $e(e)) / 100, 10);
          })(e, n);
        if ("string" == typeof (t = n) && /^[0-9]+px$/.test(t)) return $e(n);
        var t;
        throw new Error("Can not normalize dimension: " + n);
      }
      var tt = {
          AD: "AD",
          AE: "AE",
          AG: "AG",
          AI: "AI",
          AL: "AL",
          AM: "AM",
          AN: "AN",
          AO: "AO",
          AR: "AR",
          AT: "AT",
          AU: "AU",
          AW: "AW",
          AZ: "AZ",
          BA: "BA",
          BB: "BB",
          BE: "BE",
          BF: "BF",
          BG: "BG",
          BH: "BH",
          BI: "BI",
          BJ: "BJ",
          BM: "BM",
          BN: "BN",
          BO: "BO",
          BR: "BR",
          BS: "BS",
          BT: "BT",
          BW: "BW",
          BY: "BY",
          BZ: "BZ",
          CA: "CA",
          CD: "CD",
          CG: "CG",
          CH: "CH",
          CI: "CI",
          CK: "CK",
          CL: "CL",
          CM: "CM",
          CN: "CN",
          CO: "CO",
          CR: "CR",
          CV: "CV",
          CY: "CY",
          CZ: "CZ",
          DE: "DE",
          DJ: "DJ",
          DK: "DK",
          DM: "DM",
          DO: "DO",
          DZ: "DZ",
          EC: "EC",
          EE: "EE",
          EG: "EG",
          ER: "ER",
          ES: "ES",
          ET: "ET",
          FI: "FI",
          FJ: "FJ",
          FK: "FK",
          FM: "FM",
          FO: "FO",
          FR: "FR",
          GA: "GA",
          GB: "GB",
          GD: "GD",
          GE: "GE",
          GF: "GF",
          GI: "GI",
          GL: "GL",
          GM: "GM",
          GN: "GN",
          GP: "GP",
          GR: "GR",
          GT: "GT",
          GW: "GW",
          GY: "GY",
          HK: "HK",
          HN: "HN",
          HR: "HR",
          HU: "HU",
          ID: "ID",
          IE: "IE",
          IL: "IL",
          IN: "IN",
          IS: "IS",
          IT: "IT",
          JM: "JM",
          JO: "JO",
          JP: "JP",
          KE: "KE",
          KG: "KG",
          KH: "KH",
          KI: "KI",
          KM: "KM",
          KN: "KN",
          KR: "KR",
          KW: "KW",
          KY: "KY",
          KZ: "KZ",
          LA: "LA",
          LC: "LC",
          LI: "LI",
          LK: "LK",
          LS: "LS",
          LT: "LT",
          LU: "LU",
          LV: "LV",
          MA: "MA",
          MC: "MC",
          MD: "MD",
          ME: "ME",
          MG: "MG",
          MH: "MH",
          MK: "MK",
          ML: "ML",
          MN: "MN",
          MQ: "MQ",
          MR: "MR",
          MS: "MS",
          MT: "MT",
          MU: "MU",
          MV: "MV",
          MW: "MW",
          MX: "MX",
          MY: "MY",
          MZ: "MZ",
          NA: "NA",
          NC: "NC",
          NE: "NE",
          NF: "NF",
          NG: "NG",
          NI: "NI",
          NL: "NL",
          NO: "NO",
          NP: "NP",
          NR: "NR",
          NU: "NU",
          NZ: "NZ",
          OM: "OM",
          PA: "PA",
          PE: "PE",
          PF: "PF",
          PG: "PG",
          PH: "PH",
          PL: "PL",
          PM: "PM",
          PN: "PN",
          PT: "PT",
          PW: "PW",
          PY: "PY",
          QA: "QA",
          RE: "RE",
          RO: "RO",
          RS: "RS",
          RU: "RU",
          RW: "RW",
          SA: "SA",
          SB: "SB",
          SC: "SC",
          SE: "SE",
          SG: "SG",
          SH: "SH",
          SI: "SI",
          SJ: "SJ",
          SK: "SK",
          SL: "SL",
          SM: "SM",
          SN: "SN",
          SO: "SO",
          SR: "SR",
          ST: "ST",
          SV: "SV",
          SZ: "SZ",
          TC: "TC",
          TD: "TD",
          TG: "TG",
          TH: "TH",
          TJ: "TJ",
          TM: "TM",
          TN: "TN",
          TO: "TO",
          TR: "TR",
          TT: "TT",
          TV: "TV",
          TW: "TW",
          TZ: "TZ",
          UA: "UA",
          UG: "UG",
          US: "US",
          UY: "UY",
          VA: "VA",
          VC: "VC",
          VE: "VE",
          VG: "VG",
          VN: "VN",
          VU: "VU",
          WF: "WF",
          WS: "WS",
          YE: "YE",
          YT: "YT",
          ZA: "ZA",
          ZM: "ZM",
          ZW: "ZW",
        },
        rt = {
          AR: "ar",
          BG: "bg",
          CS: "cs",
          DA: "da",
          DE: "de",
          EL: "el",
          EN: "en",
          ES: "es",
          ET: "et",
          FI: "fi",
          FR: "fr",
          HE: "he",
          HU: "hu",
          ID: "id",
          IT: "it",
          JA: "ja",
          KO: "ko",
          LT: "lt",
          LV: "lv",
          MS: "ms",
          NL: "nl",
          NO: "no",
          PL: "pl",
          PT: "pt",
          RO: "ro",
          RU: "ru",
          SI: "si",
          SK: "sk",
          SL: "sl",
          SQ: "sq",
          SV: "sv",
          TH: "th",
          TL: "tl",
          TR: "tr",
          VI: "vi",
          ZH: "zh",
          ZH_HANT: "zh_Hant",
        },
        ot = {
          AD: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AE: [rt.EN, rt.FR, rt.ES, rt.ZH, rt.AR],
          AG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AI: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AL: [rt.SQ, rt.EN],
          AM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AN: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AO: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AR: [rt.ES, rt.EN],
          AT: [rt.DE, rt.EN],
          AU: [rt.EN],
          AW: [rt.EN, rt.FR, rt.ES, rt.ZH],
          AZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          BA: [rt.EN],
          BB: [rt.EN, rt.FR, rt.ES, rt.ZH],
          BE: [rt.EN, rt.NL, rt.FR],
          BF: [rt.FR, rt.EN, rt.ES, rt.ZH],
          BG: [rt.BG, rt.EN],
          BH: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          BI: [rt.FR, rt.EN, rt.ES, rt.ZH],
          BJ: [rt.FR, rt.EN, rt.ES, rt.ZH],
          BM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          BN: [rt.MS, rt.EN],
          BO: [rt.ES, rt.EN, rt.FR, rt.ZH],
          BR: [rt.PT, rt.EN],
          BS: [rt.EN, rt.FR, rt.ES, rt.ZH],
          BT: [rt.EN],
          BW: [rt.EN, rt.FR, rt.ES, rt.ZH],
          BY: [rt.EN],
          BZ: [rt.EN, rt.ES, rt.FR, rt.ZH],
          CA: [rt.EN, rt.FR],
          CD: [rt.FR, rt.EN, rt.ES, rt.ZH],
          CG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          CH: [rt.DE, rt.FR, rt.EN],
          CI: [rt.FR, rt.EN],
          CK: [rt.EN, rt.FR, rt.ES, rt.ZH],
          CL: [rt.ES, rt.EN, rt.FR, rt.ZH],
          CM: [rt.FR, rt.EN],
          CN: [rt.ZH],
          CO: [rt.ES, rt.EN, rt.FR, rt.ZH],
          CR: [rt.ES, rt.EN, rt.FR, rt.ZH],
          CV: [rt.EN, rt.FR, rt.ES, rt.ZH],
          CY: [rt.EN],
          CZ: [rt.CS, rt.EN],
          DE: [rt.DE, rt.EN],
          DJ: [rt.FR, rt.EN, rt.ES, rt.ZH],
          DK: [rt.DA, rt.EN],
          DM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          DO: [rt.ES, rt.EN, rt.FR, rt.ZH],
          DZ: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          EC: [rt.ES, rt.EN, rt.FR, rt.ZH],
          EE: [rt.ET, rt.EN, rt.RU],
          EG: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          ER: [rt.EN, rt.FR, rt.ES, rt.ZH],
          ES: [rt.ES, rt.EN],
          ET: [rt.EN, rt.FR, rt.ES, rt.ZH],
          FI: [rt.FI, rt.EN],
          FJ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          FK: [rt.EN, rt.FR, rt.ES, rt.ZH],
          FM: [rt.EN],
          FO: [rt.DA, rt.EN, rt.FR, rt.ES, rt.ZH],
          FR: [rt.FR, rt.EN],
          GA: [rt.FR, rt.EN, rt.ES, rt.ZH],
          GB: [rt.EN],
          GD: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GE: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GF: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GI: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GL: [rt.DA, rt.EN, rt.FR, rt.ES, rt.ZH],
          GM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GN: [rt.FR, rt.EN, rt.ES, rt.ZH],
          GP: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GR: [rt.EL, rt.EN],
          GT: [rt.ES, rt.EN, rt.FR, rt.ZH],
          GW: [rt.EN, rt.FR, rt.ES, rt.ZH],
          GY: [rt.EN, rt.FR, rt.ES, rt.ZH],
          HK: [rt.EN, rt.ZH_HANT, rt.ZH],
          HN: [rt.ES, rt.EN, rt.FR, rt.ZH],
          HR: [rt.EN],
          HU: [rt.HU, rt.EN],
          ID: [rt.ID, rt.EN],
          IE: [rt.EN, rt.FR, rt.ES, rt.ZH],
          IL: [rt.HE, rt.EN],
          IN: [rt.EN],
          IS: [rt.EN],
          IT: [rt.IT, rt.EN],
          JM: [rt.EN, rt.ES, rt.FR, rt.ZH],
          JO: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          JP: [rt.JA, rt.EN],
          KE: [rt.EN, rt.FR, rt.ES, rt.ZH],
          KG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          KH: [rt.EN],
          KI: [rt.EN, rt.FR, rt.ES, rt.ZH],
          KM: [rt.FR, rt.EN, rt.ES, rt.ZH],
          KN: [rt.EN, rt.FR, rt.ES, rt.ZH],
          KR: [rt.KO, rt.EN],
          KW: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          KY: [rt.EN, rt.FR, rt.ES, rt.ZH],
          KZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          LA: [rt.EN],
          LC: [rt.EN, rt.FR, rt.ES, rt.ZH],
          LI: [rt.EN, rt.FR, rt.ES, rt.ZH],
          LK: [rt.SI, rt.EN],
          LS: [rt.EN, rt.FR, rt.ES, rt.ZH],
          LT: [rt.LT, rt.EN, rt.RU, rt.ZH],
          LU: [rt.EN, rt.DE, rt.FR, rt.ES, rt.ZH],
          LV: [rt.LV, rt.EN, rt.RU],
          MA: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          MC: [rt.FR, rt.EN],
          MD: [rt.EN],
          ME: [rt.EN],
          MG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MH: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MK: [rt.EN],
          ML: [rt.FR, rt.EN, rt.ES, rt.ZH],
          MN: [rt.EN],
          MQ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MR: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MS: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MT: [rt.EN],
          MU: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MV: [rt.EN],
          MW: [rt.EN, rt.FR, rt.ES, rt.ZH],
          MX: [rt.ES, rt.EN],
          MY: [rt.MS, rt.EN],
          MZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NA: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NC: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NE: [rt.FR, rt.EN, rt.ES, rt.ZH],
          NF: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NG: [rt.EN],
          NI: [rt.ES, rt.EN, rt.FR, rt.ZH],
          NL: [rt.NL, rt.EN],
          NO: [rt.NO, rt.EN],
          NP: [rt.EN],
          NR: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NU: [rt.EN, rt.FR, rt.ES, rt.ZH],
          NZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          OM: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          PA: [rt.ES, rt.EN, rt.FR, rt.ZH],
          PE: [rt.ES, rt.EN, rt.FR, rt.ZH],
          PF: [rt.EN, rt.FR, rt.ES, rt.ZH],
          PG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          PH: [rt.TL, rt.EN],
          PL: [rt.PL, rt.EN],
          PM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          PN: [rt.EN, rt.FR, rt.ES, rt.ZH],
          PT: [rt.PT, rt.EN],
          PW: [rt.EN, rt.FR, rt.ES, rt.ZH],
          PY: [rt.ES, rt.EN],
          QA: [rt.EN, rt.FR, rt.ES, rt.ZH, rt.AR],
          RE: [rt.EN, rt.FR, rt.ES, rt.ZH],
          RO: [rt.RO, rt.EN],
          RS: [rt.EN, rt.FR, rt.ES, rt.ZH],
          RU: [rt.RU, rt.EN],
          RW: [rt.FR, rt.EN, rt.ES, rt.ZH],
          SA: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          SB: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SC: [rt.FR, rt.EN, rt.ES, rt.ZH],
          SE: [rt.SV, rt.EN],
          SG: [rt.EN],
          SH: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SI: [rt.SL, rt.EN],
          SJ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SK: [rt.SK, rt.EN],
          SL: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SN: [rt.FR, rt.EN, rt.ES, rt.ZH],
          SO: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SR: [rt.EN, rt.FR, rt.ES, rt.ZH],
          ST: [rt.EN, rt.FR, rt.ES, rt.ZH],
          SV: [rt.ES, rt.EN, rt.FR, rt.ZH],
          SZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TC: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TD: [rt.FR, rt.EN, rt.ES, rt.ZH],
          TG: [rt.FR, rt.EN, rt.ES, rt.ZH],
          TH: [rt.TH, rt.EN],
          TJ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TN: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          TO: [rt.EN],
          TR: [rt.TR, rt.EN],
          TT: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TV: [rt.EN, rt.FR, rt.ES, rt.ZH],
          TW: [rt.ZH_HANT, rt.ZH, rt.EN],
          TZ: [rt.EN, rt.FR, rt.ES, rt.ZH],
          UA: [rt.EN, rt.RU, rt.FR, rt.ES, rt.ZH],
          UG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          US: [rt.EN, rt.FR, rt.ES, rt.ZH],
          UY: [rt.ES, rt.EN, rt.FR, rt.ZH],
          VA: [rt.EN, rt.FR, rt.ES, rt.ZH],
          VC: [rt.EN, rt.FR, rt.ES, rt.ZH],
          VE: [rt.ES, rt.EN, rt.FR, rt.ZH],
          VG: [rt.EN, rt.FR, rt.ES, rt.ZH],
          VN: [rt.VI, rt.EN],
          VU: [rt.EN, rt.FR, rt.ES, rt.ZH],
          WF: [rt.EN, rt.FR, rt.ES, rt.ZH],
          WS: [rt.EN],
          YE: [rt.AR, rt.EN, rt.FR, rt.ES, rt.ZH],
          YT: [rt.EN, rt.FR, rt.ES, rt.ZH],
          ZA: [rt.EN, rt.FR, rt.ES, rt.ZH],
          ZM: [rt.EN, rt.FR, rt.ES, rt.ZH],
          ZW: [rt.EN],
        },
        it = {
          HOME: "home",
          PRODUCT: "product",
          CART: "cart",
          CHECKOUT: "checkout",
          PRODUCT_LISTING: "product-listing",
          SEARCH_RESULTS: "search-results",
          PRODUCT_DETAILS: "product-details",
          MINI_CART: "mini-cart",
        },
        at = {
          LOCAL: "local",
          STAGE: "stage",
          SANDBOX: "sandbox",
          PRODUCTION: "production",
          TEST: "test",
        },
        ut = {
          PAYPAL: "paypal",
          VENMO: "venmo",
          APPLEPAY: "applepay",
          ITAU: "itau",
          CREDIT: "credit",
          PAYLATER: "paylater",
          CARD: "card",
          IDEAL: "ideal",
          SEPA: "sepa",
          BANCONTACT: "bancontact",
          GIROPAY: "giropay",
          SOFORT: "sofort",
          EPS: "eps",
          MYBANK: "mybank",
          P24: "p24",
          VERKKOPANKKI: "verkkopankki",
          PAYU: "payu",
          BLIK: "blik",
          TRUSTLY: "trustly",
          ZIMPLER: "zimpler",
          MAXIMA: "maxima",
          OXXO: "oxxo",
          BOLETO: "boleto",
          WECHATPAY: "wechatpay",
          MERCADOPAGO: "mercadopago",
        },
        lt = { DESKTOP: "desktop", MOBILE: "mobile" };
      function ct() {
        return "sandbox";
      }
      function st() {}
      function dt() {}
      function ft() {
        return "5.0.271";
      }
      function pt() {
        return "f632825372b16";
      }
      function ht() {
        return !1;
      }
      function mt() {
        return ["buttons"];
      }
      function gt() {
        return Object({
          paypal: Object({ eligible: !0, vaultable: !0 }),
          paylater: Object({
            eligible: !1,
            merchantConfigHash: "d45c6e1f1ce03b33bc512247a2ccc454e48245e5",
            products: Object({
              payIn4: Object({ eligible: !1, variant: null }),
              paylater: Object({ eligible: !1, variant: null }),
            }),
          }),
          card: Object({
            eligible: !0,
            branded: !0,
            installments: !1,
            vendors: Object({
              visa: Object({ eligible: !0, vaultable: !0 }),
              mastercard: Object({ eligible: !0, vaultable: !0 }),
              amex: Object({ eligible: !0, vaultable: !0 }),
              discover: Object({ eligible: !1, vaultable: !0 }),
              hiper: Object({ eligible: !1, vaultable: !1 }),
              elo: Object({ eligible: !1, vaultable: !0 }),
              jcb: Object({ eligible: !1, vaultable: !0 }),
            }),
            guestEnabled: !1,
          }),
          venmo: Object({ eligible: !1 }),
          itau: Object({ eligible: !1 }),
          credit: Object({ eligible: !1 }),
          applepay: Object({ eligible: !1 }),
          sepa: Object({ eligible: !1 }),
          ideal: Object({ eligible: !1 }),
          bancontact: Object({ eligible: !1 }),
          giropay: Object({ eligible: !1 }),
          eps: Object({ eligible: !1 }),
          sofort: Object({ eligible: !1 }),
          mybank: Object({ eligible: !1 }),
          p24: Object({ eligible: !1 }),
          zimpler: Object({ eligible: !1 }),
          wechatpay: Object({ eligible: !1 }),
          payu: Object({ eligible: !1 }),
          blik: Object({ eligible: !1 }),
          trustly: Object({ eligible: !1 }),
          oxxo: Object({ eligible: !1 }),
          maxima: Object({ eligible: !1 }),
          boleto: Object({ eligible: !1 }),
          mercadopago: Object({ eligible: !0 }),
        });
      }
      function yt() {
        return f() ? lt.MOBILE : lt.DESKTOP;
      }
      var vt =
          "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
        wt = { sandbox: vt, sb: vt, test: vt },
        Ct = Nn(function () {
          try {
            return Ze();
          } catch (n) {
            throw new Error(
              'PayPal Payments SDK script not found on page! Expected to find <script src="https://www.sandbox.paypal.com/sdk/js">\n\n' +
                Mn(n)
            );
          }
        }),
        bt = Nn(function () {
          for (var n = {}, e = 0, t = Ct().attributes; e < t.length; e++) {
            var r = t[e];
            0 === r.name.indexOf("data-") && (n[r.name] = r.value);
          }
          return (n["data-uid"] = qe()), n;
        });
      function Et(n, e) {
        return bt()[n] || e;
      }
      var Lt = function (n, e) {
        return se(Ct().src.split("?")[1] || "")[n] || e;
      };
      function xt(n, e) {
        return "true" === Lt(n, e ? e.toString() : "false");
      }
      function Ot() {
        var n = Lt("client-id");
        if (!n) throw new Error("Expected client-id parameter in sdk url");
        return wt[n] ? wt[n] : n;
      }
      function Pt() {
        var n = Lt("merchant-id");
        if ("*" === n) {
          var e = Et("data-merchant-id");
          if (!e)
            throw new Error(
              "Must pass data-merchant-id when merchant-id=* passed in url"
            );
          var t = e.split(",");
          if (t.length <= 1)
            throw new Error(
              "Must pass multiple merchant ids to data-merchant-id. If passing a single id, pass merchant-id=XYZ in url"
            );
          if (
            t.some(function (n, e) {
              return t && t.indexOf(n) !== e;
            })
          )
            throw new Error(
              "Duplicates data-merchant-id. Must pass unique merchant ids to data-merchant-id."
            );
          return t;
        }
        return n ? n.split(",") : [];
      }
      function Tt() {
        return Lt("intent", "capture");
      }
      function Nt() {
        return xt("commit", (Tt(), !0));
      }
      function St() {
        return xt("vault", !1);
      }
      function kt() {
        return Lt("currency", "USD");
      }
      function At() {
        var n = Lt("enable-funding");
        return n ? n.split(",") : [];
      }
      function _t() {
        var n = Lt("disable-funding");
        return n ? n.split(",") : [];
      }
      function Mt() {
        var n = Lt("disable-card");
        return n ? n.split(",") : [];
      }
      function Rt() {
        return Lt("buyer-country");
      }
      function Ft() {
        return Et("data-namespace") || "paypal";
      }
      function Dt() {
        var n = Et("data-amount");
        if (n && !n.match(/^\d+\.\d\d$/))
          throw new Error("Invalid amount: " + n);
        return n;
      }
      function It() {
        return Et("data-user-id-token");
      }
      function jt() {
        var n = Et("data-client-token");
        if (n) return JSON.parse(bn(n)).paypal.accessToken;
      }
      function Bt() {
        return Et("data-partner-attribution-id");
      }
      function Ht() {
        var n = Lt("locale");
        if (n)
          return (function (n) {
            var e = n.split("_"),
              t = e[0],
              r = e[1];
            t = rt[t.toUpperCase()];
            var o = ot[(r = tt[r])];
            return (
              o && o.includes(rt.ZH_HANT) && t === rt.ZH && (t = rt.ZH_HANT),
              { lang: t, country: r }
            );
          })(n);
        for (
          var e = function (n, e) {
              var t = e[n],
                r = t.country,
                o = t.lang;
              if (
                ((r = r && tt[r]),
                (o = o && rt[o.toUpperCase()]),
                r && o && ot[r] && -1 !== ot[r].indexOf(o))
              )
                return { v: { country: r, lang: o } };
              if (o) {
                var i = Object.keys(ot).filter(function (n) {
                  return ot[n].some(function (n) {
                    return n === o;
                  });
                });
                if (1 === i.length) return { v: { country: i[0], lang: o } };
              }
            },
            t = 0,
            r = ge();
          t < r.length;
          t++
        ) {
          var o = e(t, r);
          if ("object" == typeof o) return o.v;
        }
        for (var i = 0, a = ge(); i < a.length; i++) {
          var u = a[i].country;
          if (ot.hasOwnProperty(u)) return { country: u, lang: ot[u][0] };
        }
        return { lang: rt.EN, country: tt.US };
      }
      function Wt() {
        return Et("data-csp-nonce") || "";
      }
      function Zt() {
        return bt().hasOwnProperty("data-enable-3ds");
      }
      function Ut() {
        return Et("data-user-experience-flow");
      }
      function qt(n) {
        var e = (function (n, e) {
          if ("object" != typeof n || null === n) return n;
          var t = n[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(n, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        })(n);
        return "symbol" == typeof e ? e : String(e);
      }
      var zt = ["warn", "error"],
        Gt = ["error", "warn", "info", "debug"],
        Vt = function (n) {
          var e = n.win,
            t = void 0 === e ? window : e,
            r = n.url,
            o = n.data,
            i = n.useBlob,
            a = void 0 === i || i;
          try {
            var u = JSON.stringify(o);
            if (!t.navigator.sendBeacon)
              throw new Error("No sendBeacon available");
            if (a) {
              var l = new Blob([u], { type: "application/json" });
              return t.navigator.sendBeacon(r, l);
            }
            return t.navigator.sendBeacon(r, u);
          } catch (n) {
            return !1;
          }
        },
        Yt = function (n, e) {
          for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        };
      function Kt() {
        return "sandbox" === at.LOCAL
          ? /.*loca.*/
          : /\.paypal\.(com|cn)(:\d+)?$/;
      }
      function Jt() {
        return Boolean(Z().match(Kt()));
      }
      var Xt = Nn(function () {
          return (function (n) {
            var e = n.url,
              t = n.prefix,
              r = n.logLevel,
              o = void 0 === r ? "warn" : r,
              i = n.transport,
              a =
                void 0 === i
                  ? (function (n) {
                      void 0 === n && (n = window);
                      var e = U(n) ? q(n) : window;
                      return function (n) {
                        var t = n.url,
                          r = n.method,
                          o = n.headers,
                          i = n.json,
                          a = n.enableSendBeacon,
                          u = void 0 !== a && a;
                        return A.try(function () {
                          var n = !1;
                          return (
                            (function (n) {
                              var e = n.headers,
                                t = n.enableSendBeacon,
                                r = e && Object.keys(e).length;
                              return !!(
                                window &&
                                window.navigator.sendBeacon &&
                                !r &&
                                t &&
                                window.Blob
                              );
                            })({ headers: o, enableSendBeacon: u }) &&
                              (n = (function (n) {
                                return (
                                  "https://api2.amplitude.com/2/httpapi" === n
                                );
                              })(t)
                                ? Vt({ win: e, url: t, data: i, useBlob: !1 })
                                : Vt({ win: e, url: t, data: i, useBlob: !0 })),
                            n ||
                              Je({
                                win: e,
                                url: t,
                                method: r,
                                headers: o,
                                json: i,
                              })
                          );
                        }).then(An);
                      };
                    })()
                  : i,
              u = n.amplitudeApiKey,
              l = n.flushInterval,
              c = void 0 === l ? 6e4 : l,
              s = n.enableSendBeacon,
              d = void 0 !== s && s,
              f = [],
              p = [],
              h = [],
              m = [],
              g = [],
              y = [];
            function v(n, e, t) {
              if (
                he() &&
                window.console &&
                window.console.log &&
                !(Gt.indexOf(n) > Gt.indexOf(o))
              ) {
                var r = [e];
                r.push(t),
                  (t.error || t.warning) &&
                    r.push("\n\n", t.error || t.warning);
                try {
                  window.console[n] && window.console[n].apply
                    ? window.console[n].apply(window.console, r)
                    : window.console.log &&
                      window.console.log.apply &&
                      window.console.log.apply(window.console, r);
                } catch (n) {}
              }
            }
            function w() {
              return A.try(function () {
                if (
                  he() &&
                  "file:" !== window.location.protocol &&
                  (f.length || p.length)
                ) {
                  for (var n = {}, t = 0; t < m.length; t++)
                    Yt(n, (0, m[t])(n));
                  for (var r, o = {}, i = 0; i < y.length; i++)
                    Yt(o, (0, y[i])(o));
                  return (
                    e &&
                      (r = a({
                        method: "POST",
                        url: e,
                        headers: o,
                        json: { events: f, meta: n, tracking: p },
                        enableSendBeacon: d,
                      }).catch(An)),
                    u &&
                      a({
                        method: "POST",
                        url: "https://api2.amplitude.com/2/httpapi",
                        headers: {},
                        json: {
                          api_key: u,
                          events: p.map(function (n) {
                            return E(
                              {
                                event_type: n.transition_name || "event",
                                event_properties: n,
                              },
                              n
                            );
                          }),
                        },
                        enableSendBeacon: d,
                      }).catch(An),
                    (f = []),
                    (p = []),
                    A.resolve(r).then(An)
                  );
                }
              });
            }
            var C,
              b,
              L,
              x,
              O =
                (void 0 === b && (b = 50),
                wn(function () {
                  x && clearTimeout(x);
                  var n = (L = L || new A());
                  return (
                    (x = setTimeout(function () {
                      (L = null),
                        (x = null),
                        A.try(C).then(
                          function (e) {
                            n.resolve(e);
                          },
                          function (e) {
                            n.reject(e);
                          }
                        );
                    }, b)),
                    n
                  );
                }, vn((C = w)) + "::promiseDebounced"));
            function P(n, e, r) {
              if ((void 0 === r && (r = {}), !he())) return N;
              t && (e = t + "_" + e);
              for (
                var o = E({}, Zn(r), { timestamp: Date.now().toString() }),
                  i = 0;
                i < h.length;
                i++
              )
                Yt(o, (0, h[i])(o));
              return (
                (function (n, e, t) {
                  f.push({ level: n, event: e, payload: t }),
                    -1 !== zt.indexOf(n) && O();
                })(n, e, o),
                v(n, e, o),
                N
              );
            }
            function T(n, e) {
              return n.push(e), N;
            }
            he() && qn(O, c),
              "object" == typeof window &&
                (window.addEventListener("beforeunload", function () {
                  w();
                }),
                window.addEventListener("unload", function () {
                  w();
                }),
                window.addEventListener("pagehide", function () {
                  w();
                }));
            var N = {
              debug: function (n, e) {
                return P("debug", n, e);
              },
              info: function (n, e) {
                return P("info", n, e);
              },
              warn: function (n, e) {
                return P("warn", n, e);
              },
              error: function (n, e) {
                return P("error", n, e);
              },
              track: function (n) {
                if ((void 0 === n && (n = {}), !he())) return N;
                for (var e = Zn(n), t = 0; t < g.length; t++)
                  Yt(e, (0, g[t])(e));
                return v("debug", "track", e), p.push(e), N;
              },
              flush: O,
              immediateFlush: w,
              addPayloadBuilder: function (n) {
                return T(h, n);
              },
              addMetaBuilder: function (n) {
                return T(m, n);
              },
              addTrackingBuilder: function (n) {
                return T(g, n);
              },
              addHeaderBuilder: function (n) {
                return T(y, n);
              },
              setTransport: function (n) {
                return (a = n), N;
              },
              configure: function (n) {
                return (
                  n.url && (e = n.url),
                  n.prefix && (t = n.prefix),
                  n.logLevel && (o = n.logLevel),
                  n.transport && (a = n.transport),
                  n.amplitudeApiKey && (u = n.amplitudeApiKey),
                  n.flushInterval && (c = n.flushInterval),
                  n.enableSendBeacon && (d = n.enableSendBeacon),
                  N
                );
              },
            };
            return N;
          })({
            url:
              ((n = "/xoplatform/logger/api/logger"),
              void 0 === n && (n = ""),
              "https://www.sandbox.paypal.com" + n),
          });
          var n;
        }),
        $t = [
          "data-amount",
          "data-merchant-id",
          "data-partner-attribution-id",
          "data-enable-3ds",
          "data-sdk-integration-source",
          "data-client-metadata-id",
          "data-uid",
          "data-csp-nonce",
        ];
      function Qt() {
        for (
          var n = (function () {
              var n = Ct().getAttribute("src");
              if (!n) throw new Error("Can not find src for sdk script");
              return n;
            })(),
            e = bt(),
            t = {},
            r = 0,
            o = Object.keys(e);
          r < o.length;
          r++
        ) {
          var i = o[r];
          -1 !== $t.indexOf(i) && (t[i] = e[i]);
        }
        return Cn(JSON.stringify({ url: n, attrs: t })).replace(/\=+$/, "");
      }
      function nr(n, e) {
        var t = Xt();
        return (function (n) {
          var e,
            t = n.name,
            r = n.sample,
            o = void 0 === r ? 50 : r,
            i = n.logTreatment,
            a = void 0 === i ? An : i,
            u = n.logCheckpoint,
            l = void 0 === u ? An : u,
            c = n.sticky,
            s =
              void 0 === c || c
                ? (function (n) {
                    return Ge().getState(function (e) {
                      return (
                        (e.throttlePercentiles = e.throttlePercentiles || {}),
                        (e.throttlePercentiles[n] =
                          e.throttlePercentiles[n] || Ye(100)),
                        e.throttlePercentiles[n]
                      );
                    });
                  })(t)
                : Ye(100),
            d =
              t +
              "_" +
              (e =
                s < o
                  ? "test"
                  : o >= 50 || (o <= s && s < 2 * o)
                  ? "control"
                  : "throttle"),
            f = !1,
            p = !1;
          try {
            window.localStorage && window.localStorage.getItem(t) && (p = !0);
          } catch (n) {}
          var h = {
            isEnabled: function () {
              return "test" === e || p;
            },
            isDisabled: function () {
              return "test" !== e && !p;
            },
            getTreatment: function () {
              return d;
            },
            log: function (n, e) {
              return (
                void 0 === e && (e = {}),
                f
                  ? (Ve(d + "_" + JSON.stringify(e)) &&
                      a({ name: t, treatment: d, payload: e, throttle: s }),
                    Ve(d + "_" + n + "_" + JSON.stringify(e)) &&
                      l({
                        name: t,
                        treatment: d,
                        checkpoint: n,
                        payload: e,
                        throttle: s,
                      }),
                    h)
                  : h
              );
            },
            logStart: function (n) {
              return void 0 === n && (n = {}), (f = !0), h.log("start", n);
            },
            logComplete: function (n) {
              return void 0 === n && (n = {}), h.log("complete", n);
            },
          };
          return h;
        })({
          name: n,
          sample: e,
          logTreatment: function (e) {
            var r,
              o = e.treatment,
              i = e.payload,
              a = E(
                (((r = {}).state_name = "PXP_CHECK"),
                (r.transition_name = "process_pxp_check"),
                (r.pxp_exp_id = n),
                (r.pxp_trtmnt_id = o),
                r),
                i
              );
            t.track(a), t.flush();
          },
          logCheckpoint: function (e) {
            t.info(n + "_" + e.treatment + "_" + e.checkpoint, e.payload),
              t.flush();
          },
        });
      }
      function er() {
        return ze({ name: Ft() });
      }
      function tr() {
        return er().getSessionID();
      }
      function rr(n) {
        return er().getState(n);
      }
      function or() {
        return er().getID();
      }
      function ir(n) {
        return er().getSessionState(n);
      }
      function ar() {
        return Et("data-client-metadata-id");
      }
      Nn(function (n) {
        Xt().info("rest_api_create_access_token");
        var e,
          t = Cn(n + ":");
        return Je({
          method: "post",
          url:
            ((e = "/v1/oauth2/token"),
            void 0 === e && (e = ""),
            ("undefined" != typeof window &&
            void 0 !== window.location &&
            "https://www.sandbox.paypal.com" === Z()
              ? "https://www.sandbox.paypal.com"
              : "https://cors.api.sandbox.paypal.com") + e),
          headers: { Authorization: "Basic " + t },
          data: { grant_type: "client_credentials" },
        }).then(function (e) {
          var t = e.body;
          if (t && "invalid_client" === t.error)
            throw new Error(
              "Auth Api invalid client id: " +
                n +
                ":\n\n" +
                JSON.stringify(t, null, 4)
            );
          if (!t || !t.access_token)
            throw new Error(
              "Auth Api response error:\n\n" + JSON.stringify(t, null, 4)
            );
          return t.access_token;
        });
      });
      var ur = Nn(zn);
      function lr() {
        var n;
        Ct(),
          (n = Xt()),
          Date.now(),
          n.addPayloadBuilder(function () {
            return { referer: window.location.host, uid: tr(), env: "sandbox" };
          }),
          n.addTrackingBuilder(function () {
            var n,
              e = Ht(),
              t = e.lang,
              r = e.country,
              o = Pt();
            return (
              ((n = {}).feed_name = "payments_sdk"),
              (n.serverside_data_source = "checkout"),
              (n.client_id = Ot()),
              (n.seller_id = o && o.toString()),
              (n.page_session_id = tr()),
              (n.referer_url = window.location.host),
              (n.locale = t + "_" + r),
              (n.integration_identifier = Ot()),
              (n.bn_code = Bt()),
              (n.pp_placement = (function () {
                var n = Et("data-page-type", "");
                if (-1 === In(it).indexOf(n.toLowerCase()) && n.length)
                  throw new Error("Invalid page type, '" + n + "'");
                return n.toLowerCase();
              })()),
              (n.sdk_name = "payments_sdk"),
              (n.sdk_version = "5.0.271"),
              (n.user_agent = window.navigator && window.navigator.userAgent),
              (n.user_action = Nt() ? "commit" : "continue"),
              (n.context_correlation_id = "f632825372b16"),
              (n.sdk_integration_source = Et("data-sdk-integration-source")),
              n
            );
          }),
          A.onPossiblyUnhandledException(function (e) {
            var t;
            n.track(
              (((t = {}).ext_error_code = "payments_sdk_error"),
              (t.ext_error_desc = Rn(e)),
              t)
            ),
              n.error("unhandled_error", { err: Mn(e) }),
              n.flush().catch(An);
          }),
          ce().then(function () {
            var e,
              t,
              r = Ct(),
              o = (function (n) {
                var e = pe();
                if (e && "function" == typeof e.getEntries)
                  for (var t = e.getEntries(), r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (
                      o &&
                      o.name &&
                      0 === o.name.indexOf(n) &&
                      "number" == typeof o.duration
                    )
                      return Math.floor(o.duration);
                  }
              })(r.src);
            t =
              0 === o
                ? "sdk_client_cache_hit"
                : "number" == typeof o
                ? "sdk_client_cache_miss"
                : "sdk_client_cache_unknown";
            var i = Jt() && window.xprops;
            n
              .info("setup_sandbox")
              .info("setup_sandbox_" + "5.0.271".replace(/\./g, "_"))
              .info(
                "sdk_" +
                  (i ? "paypal" : "non_paypal") +
                  "_domain_script_uid_" +
                  (r.hasAttribute("data-uid") ? "present" : "missing")
              )
              .info(t)
              .track(
                ((e = {}),
                (e.transition_name = "process_js_sdk_init_client"),
                (e.sdk_load_time =
                  "number" == typeof o ? o.toString() : void 0),
                (e.sdk_cache = t),
                e)
              )
              .flush(),
              (function () {
                if (window.document.documentMode)
                  try {
                    var n = window.status;
                    return (
                      (window.status = "testIntranetMode"),
                      "testIntranetMode" === window.status &&
                        ((window.status = n), !0)
                    );
                  } catch (n) {
                    return !1;
                  }
                return !1;
              })() && n.warn("ie_intranet_mode");
          });
      }
      function cr() {
        return "__post_robot_10_0_44___" + qe();
      }
      function sr(n) {
        void 0 === n && (n = window);
        var e = cr();
        return n !== window ? n[e] : (n[e] = n[e] || {});
      }
      var dr = function () {
        return {};
      };
      function fr(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = dr),
          ee(sr(), n, function () {
            var n = e();
            return {
              has: function (e) {
                return n.hasOwnProperty(e);
              },
              get: function (e, t) {
                return n.hasOwnProperty(e) ? n[e] : t;
              },
              set: function (e, t) {
                return (n[e] = t), t;
              },
              del: function (e) {
                delete n[e];
              },
              getOrSet: function (e, t) {
                return ee(n, e, t);
              },
              reset: function () {
                n = e();
              },
              keys: function () {
                return Object.keys(n);
              },
            };
          })
        );
      }
      var pr,
        hr = function () {};
      function mr() {
        var n = sr();
        return (
          (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new hr()), n.WINDOW_WILDCARD
        );
      }
      function gr(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = dr),
          fr("windowStore").getOrSet(n, function () {
            var t = new pn(),
              r = function (n) {
                return t.getOrSet(n, e);
              };
            return {
              has: function (e) {
                return r(e).hasOwnProperty(n);
              },
              get: function (e, t) {
                var o = r(e);
                return o.hasOwnProperty(n) ? o[n] : t;
              },
              set: function (e, t) {
                return (r(e)[n] = t), t;
              },
              del: function (e) {
                delete r(e)[n];
              },
              getOrSet: function (e, t) {
                return ee(r(e), n, t);
              },
            };
          })
        );
      }
      function yr() {
        return fr("instance").getOrSet("instanceID", En);
      }
      function vr(n, e) {
        var t = e.domain,
          r = gr("helloPromises"),
          o = r.get(n);
        o && o.resolve({ domain: t });
        var i = A.resolve({ domain: t });
        return r.set(n, i), i;
      }
      function wr(n, e) {
        return (0, e.send)(
          n,
          "postrobot_hello",
          { instanceID: yr() },
          { domain: "*", timeout: -1 }
        ).then(function (e) {
          var t = e.origin,
            r = e.data.instanceID;
          return vr(n, { domain: t }), { win: n, domain: t, instanceID: r };
        });
      }
      function Cr(n, e) {
        var t = e.send;
        return gr("windowInstanceIDPromises").getOrSet(n, function () {
          return wr(n, { send: t }).then(function (n) {
            return n.instanceID;
          });
        });
      }
      function br(n) {
        gr("knownWindows").set(n, !0);
      }
      function Er(n) {
        return (
          "object" == typeof n && null !== n && "string" == typeof n.__type__
        );
      }
      function Lr(n) {
        return void 0 === n
          ? "undefined"
          : null === n
          ? "null"
          : Array.isArray(n)
          ? "array"
          : "function" == typeof n
          ? "function"
          : "object" == typeof n
          ? n instanceof Error
            ? "error"
            : "function" == typeof n.then
            ? "promise"
            : "[object RegExp]" === {}.toString.call(n)
            ? "regex"
            : "[object Date]" === {}.toString.call(n)
            ? "date"
            : "object"
          : "string" == typeof n
          ? "string"
          : "number" == typeof n
          ? "number"
          : "boolean" == typeof n
          ? "boolean"
          : void 0;
      }
      function xr(n, e) {
        return { __type__: n, __val__: e };
      }
      var Or,
        Pr =
          (((pr = {}).function = function () {}),
          (pr.error = function (n) {
            return xr("error", {
              message: n.message,
              stack: n.stack,
              code: n.code,
              data: n.data,
            });
          }),
          (pr.promise = function () {}),
          (pr.regex = function (n) {
            return xr("regex", n.source);
          }),
          (pr.date = function (n) {
            return xr("date", n.toJSON());
          }),
          (pr.array = function (n) {
            return n;
          }),
          (pr.object = function (n) {
            return n;
          }),
          (pr.string = function (n) {
            return n;
          }),
          (pr.number = function (n) {
            return n;
          }),
          (pr.boolean = function (n) {
            return n;
          }),
          (pr.null = function (n) {
            return n;
          }),
          (pr[void 0] = function (n) {
            return xr("undefined", n);
          }),
          pr),
        Tr = {},
        Nr =
          (((Or = {}).function = function () {
            throw new Error(
              "Function serialization is not implemented; nothing to deserialize"
            );
          }),
          (Or.error = function (n) {
            var e = n.stack,
              t = n.code,
              r = n.data,
              o = new Error(n.message);
            return (
              (o.code = t),
              r && (o.data = r),
              (o.stack = e + "\n\n" + o.stack),
              o
            );
          }),
          (Or.promise = function () {
            throw new Error(
              "Promise serialization is not implemented; nothing to deserialize"
            );
          }),
          (Or.regex = function (n) {
            return new RegExp(n);
          }),
          (Or.date = function (n) {
            return new Date(n);
          }),
          (Or.array = function (n) {
            return n;
          }),
          (Or.object = function (n) {
            return n;
          }),
          (Or.string = function (n) {
            return n;
          }),
          (Or.number = function (n) {
            return n;
          }),
          (Or.boolean = function (n) {
            return n;
          }),
          (Or.null = function (n) {
            return n;
          }),
          (Or[void 0] = function () {}),
          Or),
        Sr = {};
      function kr() {
        for (
          var n = fr("idToProxyWindow"), e = 0, t = n.keys();
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.get(r).shouldClean() && n.del(r);
        }
      }
      function Ar(n, e) {
        var t = e.send,
          r = e.id,
          o = void 0 === r ? En() : r,
          i = n.then(function (n) {
            if (U(n)) return q(n).name;
          }),
          a = n.then(function (n) {
            if ($(n))
              throw new Error("Window is closed, can not determine type");
            return B(n) ? M.POPUP : M.IFRAME;
          });
        i.catch(An), a.catch(An);
        var u = function () {
          return n.then(function (n) {
            if (!$(n)) return U(n) ? q(n).name : i;
          });
        };
        return {
          id: o,
          getType: function () {
            return a;
          },
          getInstanceID: Sn(function () {
            return n.then(function (n) {
              return Cr(n, { send: t });
            });
          }),
          close: function () {
            return n.then(sn);
          },
          getName: u,
          focus: function () {
            return n.then(function (n) {
              n.focus();
            });
          },
          isClosed: function () {
            return n.then(function (n) {
              return $(n);
            });
          },
          setLocation: function (e, t) {
            return (
              void 0 === t && (t = {}),
              n.then(function (n) {
                var r = window.location.protocol + "//" + window.location.host,
                  o = t.method,
                  i = void 0 === o ? "get" : o,
                  a = t.body;
                if (0 === e.indexOf("/")) e = "" + r + e;
                else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(r))
                  throw new Error(
                    "Expected url to be http or https url, or absolute path, got " +
                      JSON.stringify(e)
                  );
                if ("post" === i)
                  return u().then(function (n) {
                    if (!n)
                      throw new Error(
                        "Can not post to window without target name"
                      );
                    !(function (n) {
                      var e = n.url,
                        t = n.target,
                        r = n.body,
                        o = n.method,
                        i = void 0 === o ? "post" : o,
                        a = document.createElement("form");
                      if (
                        (a.setAttribute("target", t),
                        a.setAttribute("method", i),
                        a.setAttribute("action", e),
                        (a.style.display = "none"),
                        r)
                      )
                        for (var u = 0, l = Object.keys(r); u < l.length; u++) {
                          var c,
                            s = l[u],
                            d = document.createElement("input");
                          d.setAttribute("name", s),
                            d.setAttribute(
                              "value",
                              null == (c = r[s]) ? void 0 : c.toString()
                            ),
                            a.appendChild(d);
                        }
                      ie().appendChild(a), a.submit(), ie().removeChild(a);
                    })({ url: e, target: n, method: i, body: a });
                  });
                if ("get" !== i) throw new Error("Unsupported method: " + i);
                if (U(n))
                  try {
                    if (n.location && "function" == typeof n.location.replace)
                      return void n.location.replace(e);
                  } catch (n) {}
                n.location = e;
              })
            );
          },
          setName: function (e) {
            return n.then(function (n) {
              var t = U(n),
                r = cn(n);
              if (!t)
                throw new Error(
                  "Can not set name for cross-domain window: " + e
                );
              (q(n).name = e),
                r && r.setAttribute("name", e),
                (i = A.resolve(e));
            });
          },
        };
      }
      new A(function (n) {
        if (window.document && window.document.body)
          return n(window.document.body);
        var e = setInterval(function () {
          if (window.document && window.document.body)
            return clearInterval(e), n(window.document.body);
        }, 10);
      });
      var _r = (function () {
        function n(n) {
          var e = n.send,
            t = n.win,
            r = n.serializedWindow;
          (this.id = void 0),
            (this.isProxyWindow = !0),
            (this.serializedWindow = void 0),
            (this.actualWindow = void 0),
            (this.actualWindowPromise = void 0),
            (this.send = void 0),
            (this.name = void 0),
            (this.actualWindowPromise = new A()),
            (this.serializedWindow =
              r || Ar(this.actualWindowPromise, { send: e })),
            fr("idToProxyWindow").set(this.getID(), this),
            t && this.setWindow(t, { send: e });
        }
        var e = n.prototype;
        return (
          (e.getID = function () {
            return this.serializedWindow.id;
          }),
          (e.getType = function () {
            return this.serializedWindow.getType();
          }),
          (e.isPopup = function () {
            return this.getType().then(function (n) {
              return n === M.POPUP;
            });
          }),
          (e.setLocation = function (n, e) {
            var t = this;
            return this.serializedWindow.setLocation(n, e).then(function () {
              return t;
            });
          }),
          (e.getName = function () {
            return this.serializedWindow.getName();
          }),
          (e.setName = function (n) {
            var e = this;
            return this.serializedWindow.setName(n).then(function () {
              return e;
            });
          }),
          (e.close = function () {
            var n = this;
            return this.serializedWindow.close().then(function () {
              return n;
            });
          }),
          (e.focus = function () {
            var n = this,
              e = this.isPopup(),
              t = this.getName(),
              r = A.hash({ isPopup: e, name: t }).then(function (n) {
                var e = n.name;
                n.isPopup && e && window.open("", e);
              }),
              o = this.serializedWindow.focus();
            return A.all([r, o]).then(function () {
              return n;
            });
          }),
          (e.isClosed = function () {
            return this.serializedWindow.isClosed();
          }),
          (e.getWindow = function () {
            return this.actualWindow;
          }),
          (e.setWindow = function (n, e) {
            var t = e.send;
            (this.actualWindow = n),
              this.actualWindowPromise.resolve(this.actualWindow),
              (this.serializedWindow = Ar(this.actualWindowPromise, {
                send: t,
                id: this.getID(),
              })),
              gr("winToProxyWindow").set(n, this);
          }),
          (e.awaitWindow = function () {
            return this.actualWindowPromise;
          }),
          (e.matchWindow = function (n, e) {
            var t = this,
              r = e.send;
            return A.try(function () {
              return t.actualWindow
                ? n === t.actualWindow
                : A.hash({
                    proxyInstanceID: t.getInstanceID(),
                    knownWindowInstanceID: Cr(n, { send: r }),
                  }).then(function (e) {
                    var o = e.proxyInstanceID === e.knownWindowInstanceID;
                    return o && t.setWindow(n, { send: r }), o;
                  });
            });
          }),
          (e.unwrap = function () {
            return this.actualWindow || this;
          }),
          (e.getInstanceID = function () {
            return this.serializedWindow.getInstanceID();
          }),
          (e.shouldClean = function () {
            return Boolean(this.actualWindow && $(this.actualWindow));
          }),
          (e.serialize = function () {
            return this.serializedWindow;
          }),
          (n.unwrap = function (e) {
            return n.isProxyWindow(e) ? e.unwrap() : e;
          }),
          (n.serialize = function (e, t) {
            var r = t.send;
            return kr(), n.toProxyWindow(e, { send: r }).serialize();
          }),
          (n.deserialize = function (e, t) {
            var r = t.send;
            return (
              kr(),
              fr("idToProxyWindow").get(e.id) ||
                new n({ serializedWindow: e, send: r })
            );
          }),
          (n.isProxyWindow = function (n) {
            return Boolean(n && !ln(n) && n.isProxyWindow);
          }),
          (n.toProxyWindow = function (e, t) {
            var r = t.send;
            if ((kr(), n.isProxyWindow(e))) return e;
            var o = e;
            return gr("winToProxyWindow").get(o) || new n({ win: o, send: r });
          }),
          n
        );
      })();
      function Mr(n, e, t, r, o) {
        var i = gr("methodStore"),
          a = fr("proxyWindowMethods");
        _r.isProxyWindow(r)
          ? a.set(n, { val: e, name: t, domain: o, source: r })
          : (a.del(n),
            (i.getOrSet(r, function () {
              return {};
            })[n] = { domain: o, name: t, val: e, source: r }));
      }
      function Rr(n, e) {
        var t = gr("methodStore"),
          r = fr("proxyWindowMethods");
        return (
          t.getOrSet(n, function () {
            return {};
          })[e] || r.get(e)
        );
      }
      function Fr(n, e, t, r, o) {
        var i, a, u;
        (a = (i = { on: o.on, send: o.send }).on),
          (u = i.send),
          fr("builtinListeners").getOrSet("functionCalls", function () {
            return a("postrobot_method", { domain: "*" }, function (n) {
              var e = n.source,
                t = n.origin,
                r = n.data,
                o = r.id,
                i = r.name,
                a = Rr(e, o);
              if (!a)
                throw new Error(
                  "Could not find method '" +
                    i +
                    "' with id: " +
                    r.id +
                    " in " +
                    Z(window)
                );
              var l = a.source,
                c = a.domain,
                s = a.val;
              return A.try(function () {
                if (!on(c, t))
                  throw new Error(
                    "Method '" +
                      r.name +
                      "' domain " +
                      JSON.stringify(
                        ne(a.domain) ? a.domain.source : a.domain
                      ) +
                      " does not match origin " +
                      t +
                      " in " +
                      Z(window)
                  );
                if (_r.isProxyWindow(l))
                  return l.matchWindow(e, { send: u }).then(function (n) {
                    if (!n)
                      throw new Error(
                        "Method call '" +
                          r.name +
                          "' failed - proxy window does not match source in " +
                          Z(window)
                      );
                  });
              })
                .then(
                  function () {
                    return s.apply({ source: e, origin: t }, r.args);
                  },
                  function (n) {
                    return A.try(function () {
                      if (s.onError) return s.onError(n);
                    }).then(function () {
                      var e;
                      throw (
                        (n.stack &&
                          (n.stack =
                            "Remote call to " +
                            i +
                            "(" +
                            (void 0 === (e = r.args) && (e = []),
                            Kn(e)
                              .map(function (n) {
                                return "string" == typeof n
                                  ? "'" + n + "'"
                                  : void 0 === n
                                  ? "undefined"
                                  : null === n
                                  ? "null"
                                  : "boolean" == typeof n
                                  ? n.toString()
                                  : Array.isArray(n)
                                  ? "[ ... ]"
                                  : "object" == typeof n
                                  ? "{ ... }"
                                  : "function" == typeof n
                                  ? "() => { ... }"
                                  : "<" + typeof n + ">";
                              })
                              .join(", ") + ") failed\n\n") +
                            n.stack),
                        n)
                      );
                    });
                  }
                )
                .then(function (n) {
                  return { result: n, id: o, name: i };
                });
            });
          });
        var l = t.__id__ || En();
        n = _r.unwrap(n);
        var c = t.__name__ || t.name || r;
        return (
          "string" == typeof c &&
            "function" == typeof c.indexOf &&
            0 === c.indexOf("anonymous::") &&
            (c = c.replace("anonymous::", r + "::")),
          _r.isProxyWindow(n)
            ? (Mr(l, t, c, n, e),
              n.awaitWindow().then(function (n) {
                Mr(l, t, c, n, e);
              }))
            : Mr(l, t, c, n, e),
          xr("cross_domain_function", { id: l, name: c })
        );
      }
      function Dr(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        return (function (n, e) {
          void 0 === e && (e = Tr);
          var t = JSON.stringify(n, function (n) {
            var t = this[n];
            if (Er(this)) return t;
            var r = Lr(t);
            if (!r) return t;
            var o = e[r] || Pr[r];
            return o ? o(t, n) : t;
          });
          return void 0 === t ? "undefined" : t;
        })(
          t,
          (((o = {}).promise = function (t, r) {
            return (function (n, e, t, r, o) {
              return xr("cross_domain_zalgo_promise", {
                then: Fr(
                  n,
                  e,
                  function (n, e) {
                    return t.then(n, e);
                  },
                  r,
                  { on: o.on, send: o.send }
                ),
              });
            })(n, e, t, r, { on: i, send: a });
          }),
          (o.function = function (t, r) {
            return Fr(n, e, t, r, { on: i, send: a });
          }),
          (o.object = function (n) {
            return ln(n) || _r.isProxyWindow(n)
              ? xr("cross_domain_window", _r.serialize(n, { send: a }))
              : n;
          }),
          o)
        );
      }
      function Ir(n, e, t, r) {
        var o,
          i = r.send;
        return (function (n, e) {
          if ((void 0 === e && (e = Sr), "undefined" !== n))
            return JSON.parse(n, function (n, t) {
              if (Er(this)) return t;
              var r, o;
              if (
                (Er(t)
                  ? ((r = t.__type__), (o = t.__val__))
                  : ((r = Lr(t)), (o = t)),
                !r)
              )
                return o;
              var i = e[r] || Nr[r];
              return i ? i(o, n) : o;
            });
        })(
          t,
          (((o = {}).cross_domain_zalgo_promise = function (n) {
            return (function (n, e, t) {
              return new A(t.then);
            })(0, 0, n);
          }),
          (o.cross_domain_function = function (t) {
            return (function (n, e, t, r) {
              var o = t.id,
                i = t.name,
                a = r.send,
                u = function (t) {
                  function r() {
                    var u = arguments;
                    return _r
                      .toProxyWindow(n, { send: a })
                      .awaitWindow()
                      .then(function (n) {
                        var l = Rr(n, o);
                        if (l && l.val !== r)
                          return l.val.apply(
                            { source: window, origin: Z() },
                            u
                          );
                        var c = [].slice.call(u);
                        return t.fireAndForget
                          ? a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: c },
                              { domain: e, fireAndForget: !0 }
                            )
                          : a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: c },
                              { domain: e, fireAndForget: !1 }
                            ).then(function (n) {
                              return n.data.result;
                            });
                      })
                      .catch(function (n) {
                        throw n;
                      });
                  }
                  return (
                    void 0 === t && (t = {}),
                    (r.__name__ = i),
                    (r.__origin__ = e),
                    (r.__source__ = n),
                    (r.__id__ = o),
                    (r.origin = e),
                    r
                  );
                },
                l = u();
              return (l.fireAndForget = u({ fireAndForget: !0 })), l;
            })(n, e, t, { send: i });
          }),
          (o.cross_domain_window = function (n) {
            return _r.deserialize(n, { send: i });
          }),
          o)
        );
      }
      var jr = {};
      function Br(n, e, t, r) {
        var o = r.on,
          i = r.send;
        return A.try(function () {
          var r = gr().getOrSet(n, function () {
            return {};
          });
          return (
            (r.buffer = r.buffer || []),
            r.buffer.push(t),
            (r.flush =
              r.flush ||
              A.flush().then(function () {
                if ($(n)) throw new Error("Window is closed");
                var t,
                  a,
                  u = Dr(
                    n,
                    e,
                    ((t = r.buffer || []), ((a = {})[cr()] = t), a),
                    { on: o, send: i }
                  );
                delete r.buffer;
                for (
                  var l = Object.keys(jr), c = [], s = 0;
                  s < l.length;
                  s++
                ) {
                  var d = l[s];
                  try {
                    jr[d](n, u, e);
                  } catch (n) {
                    c.push(n);
                  }
                }
                if (c.length === l.length)
                  throw new Error(
                    "All post-robot messaging strategies failed:\n\n" +
                      c
                        .map(function (n, e) {
                          return e + ". " + Mn(n);
                        })
                        .join("\n\n")
                  );
              })),
            r.flush.then(function () {
              delete r.flush;
            })
          );
        }).then(An);
      }
      function Hr(n) {
        return fr("responseListeners").get(n);
      }
      function Wr(n) {
        fr("responseListeners").del(n);
      }
      function Zr(n) {
        return fr("erroredResponseListeners").has(n);
      }
      function Ur(n) {
        var e = n.name,
          t = n.win,
          r = n.domain,
          o = gr("requestListeners");
        if (("*" === t && (t = null), "*" === r && (r = null), !e))
          throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, mr()]; i < a.length; i++) {
          var u = a[i];
          if (u) {
            var l = o.get(u);
            if (l) {
              var c = l[e];
              if (c) {
                if (r && "string" == typeof r) {
                  if (c[r]) return c[r];
                  if (c.__domain_regex__)
                    for (var s = 0, d = c.__domain_regex__; s < d.length; s++) {
                      var f = d[s],
                        p = f.listener;
                      if (on(f.regex, r)) return p;
                    }
                }
                if (c["*"]) return c["*"];
              }
            }
          }
        }
      }
      function qr(n, e, t, r) {
        var o = r.on,
          i = r.send,
          a = Ur({ name: t.name, win: n, domain: e }),
          u =
            "postrobot_method" === t.name &&
            t.data &&
            "string" == typeof t.data.name
              ? t.data.name + "()"
              : t.name;
        function l(r, a, l) {
          return A.flush().then(function () {
            if (!t.fireAndForget && !$(n))
              try {
                return Br(
                  n,
                  e,
                  {
                    id: En(),
                    origin: Z(window),
                    type: "postrobot_message_response",
                    hash: t.hash,
                    name: t.name,
                    ack: r,
                    data: a,
                    error: l,
                  },
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send response message failed for " +
                    u +
                    " in " +
                    Z() +
                    "\n\n" +
                    Mn(n)
                );
              }
          });
        }
        return A.all([
          A.flush().then(function () {
            if (!t.fireAndForget && !$(n))
              try {
                return Br(
                  n,
                  e,
                  {
                    id: En(),
                    origin: Z(window),
                    type: "postrobot_message_ack",
                    hash: t.hash,
                    name: t.name,
                  },
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send ack message failed for " +
                    u +
                    " in " +
                    Z() +
                    "\n\n" +
                    Mn(n)
                );
              }
          }),
          A.try(function () {
            if (!a)
              throw new Error(
                "No handler found for post message: " +
                  t.name +
                  " from " +
                  e +
                  " in " +
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname
              );
            if (!on(a.domain, e))
              throw new Error(
                "Request origin " +
                  e +
                  " does not match domain " +
                  a.domain.toString()
              );
            return a.handler({ source: n, origin: e, data: t.data });
          }).then(
            function (n) {
              return l("success", n);
            },
            function (n) {
              return l("error", null, n);
            }
          ),
        ])
          .then(An)
          .catch(function (n) {
            if (a && a.handleError) return a.handleError(n);
            throw n;
          });
      }
      function zr(n, e, t) {
        if (!Zr(t.hash)) {
          var r = Hr(t.hash);
          if (!r)
            throw new Error(
              "No handler found for post message ack for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          try {
            if (!on(r.domain, e))
              throw new Error(
                "Ack origin " +
                  e +
                  " does not match domain " +
                  r.domain.toString()
              );
            if (n !== r.win)
              throw new Error("Ack source does not match registered window");
          } catch (n) {
            r.promise.reject(n);
          }
          r.ack = !0;
        }
      }
      function Gr(n, e, t) {
        if (!Zr(t.hash)) {
          var r,
            o = Hr(t.hash);
          if (!o)
            throw new Error(
              "No handler found for post message response for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          if (!on(o.domain, e))
            throw new Error(
              "Response origin " +
                e +
                " does not match domain " +
                ((r = o.domain),
                Array.isArray(r)
                  ? "(" + r.join(" | ") + ")"
                  : _(r)
                  ? "RegExp(" + r.toString() + ")"
                  : r.toString())
            );
          if (n !== o.win)
            throw new Error("Response source does not match registered window");
          Wr(t.hash),
            "error" === t.ack
              ? o.promise.reject(t.error)
              : "success" === t.ack &&
                o.promise.resolve({ source: n, origin: e, data: t.data });
        }
      }
      function Vr(n, e) {
        var t = e.on,
          r = e.send,
          o = fr("receivedMessages");
        try {
          if (!window || window.closed || !n.source) return;
        } catch (n) {
          return;
        }
        var i = n.source,
          a = n.origin,
          u = (function (n, e, t, r) {
            var o,
              i = r.on,
              a = r.send;
            try {
              o = Ir(e, t, n, { on: i, send: a });
            } catch (n) {
              return;
            }
            if (o && "object" == typeof o && null !== o) {
              var u = o[cr()];
              if (Array.isArray(u)) return u;
            }
          })(n.data, i, a, { on: t, send: r });
        if (u) {
          br(i);
          for (var l = 0; l < u.length; l++) {
            var c = u[l];
            if (o.has(c.id)) return;
            if ((o.set(c.id, !0), $(i) && !c.fireAndForget)) return;
            0 === c.origin.indexOf("file:") && (a = "file://");
            try {
              "postrobot_message_request" === c.type
                ? qr(i, a, c, { on: t, send: r })
                : "postrobot_message_response" === c.type
                ? Gr(i, a, c)
                : "postrobot_message_ack" === c.type && zr(i, a, c);
            } catch (n) {
              setTimeout(function () {
                throw n;
              }, 0);
            }
          }
        }
      }
      function Yr(n, e, t) {
        if (!n) throw new Error("Expected name");
        if (("function" == typeof (e = e || {}) && ((t = e), (e = {})), !t))
          throw new Error("Expected handler");
        ((e = e || {}).name = n), (e.handler = t || e.handler);
        var r = e.window,
          o = e.domain,
          i = (function n(e, t) {
            var r = e.name,
              o = e.win,
              i = e.domain,
              a = gr("requestListeners");
            if (!r || "string" != typeof r)
              throw new Error("Name required to add request listener");
            if (Array.isArray(o)) {
              for (var u = [], l = 0, c = o; l < c.length; l++)
                u.push(n({ name: r, domain: i, win: c[l] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < u.length; n++) u[n].cancel();
                },
              };
            }
            if (Array.isArray(i)) {
              for (var s = [], d = 0, f = i; d < f.length; d++)
                s.push(n({ name: r, win: o, domain: f[d] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < s.length; n++) s[n].cancel();
                },
              };
            }
            var p = Ur({ name: r, win: o, domain: i });
            if (((o && "*" !== o) || (o = mr()), (i = i || "*"), p))
              throw o && i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString() +
                      " for " +
                      (o === mr() ? "wildcard" : "specified") +
                      " window"
                  )
                : o
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " for " +
                      (o === mr() ? "wildcard" : "specified") +
                      " window"
                  )
                : i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString()
                  )
                : new Error("Request listener already exists for " + r);
            var h,
              m,
              g = a.getOrSet(o, function () {
                return {};
              }),
              y = ee(g, r, function () {
                return {};
              }),
              v = i.toString();
            return (
              ne(i)
                ? (h = ee(y, "__domain_regex__", function () {
                    return [];
                  })).push((m = { regex: i, listener: t }))
                : (y[v] = t),
              {
                cancel: function () {
                  delete y[v],
                    m &&
                      (h.splice(h.indexOf(m, 1)),
                      h.length || delete y.__domain_regex__),
                    Object.keys(y).length || delete g[r],
                    o && !Object.keys(g).length && a.del(o);
                },
              }
            );
          })(
            { name: n, win: r, domain: o },
            {
              handler: e.handler,
              handleError:
                e.errorHandler ||
                function (n) {
                  throw n;
                },
              window: r,
              domain: o || "*",
              name: n,
            }
          );
        return {
          cancel: function () {
            i.cancel();
          },
        };
      }
      function Kr(n, e, t) {
        "function" == typeof (e = e || {}) && ((t = e), (e = {}));
        var r,
          o = new A();
        return (
          (e.errorHandler = function (n) {
            r.cancel(), o.reject(n);
          }),
          (r = Yr(n, e, function (n) {
            if ((r.cancel(), o.resolve(n), t)) return t(n);
          })),
          (o.cancel = r.cancel),
          o
        );
      }
      (jr.postrobot_post_message = function (n, e, t) {
        0 === t.indexOf("file:") && (t = "*"), n.postMessage(e, t);
      }),
        (jr.postrobot_global = function (n, e) {
          if (
            !(function (n) {
              return (
                (n = n || window).navigator.mockUserAgent ||
                n.navigator.userAgent
              );
            })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
          )
            throw new Error("Global messaging not needed for browser");
          if (!U(n))
            throw new Error(
              "Post message through global disabled between different domain windows"
            );
          if (!1 !== rn(window, n))
            throw new Error(
              "Can only use global to communicate between two different windows, not between frames"
            );
          var t = sr(n);
          if (!t)
            throw new Error("Can not find postRobot global on foreign window");
          t.receiveMessage({ source: window, origin: Z(), data: e });
        });
      var Jr = function n(e, t, r, o) {
        var i = (o = o || {}).domain || "*",
          a = o.timeout || -1,
          u = o.timeout || 5e3,
          l = o.fireAndForget || !1;
        return A.try(function () {
          if (
            ((function (n, e, t) {
              if (!n) throw new Error("Expected name");
              if (t && "string" != typeof t && !Array.isArray(t) && !ne(t))
                throw new TypeError(
                  "Can not send " +
                    n +
                    ". Expected domain " +
                    JSON.stringify(t) +
                    " to be a string, array, or regex"
                );
              if ($(e))
                throw new Error(
                  "Can not send " + n + ". Target window is closed"
                );
            })(t, e, i),
            (function (n, e) {
              var t = nn(e);
              if (t) return t === n;
              if (e === n) return !1;
              if (Y(e) === e) return !1;
              for (var r = 0, o = G(n); r < o.length; r++)
                if (o[r] === e) return !0;
              return !1;
            })(window, e))
          )
            return (function (n, e, t) {
              void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
              var r = (function (n) {
                return gr("helloPromises").getOrSet(n, function () {
                  return new A();
                });
              })(n);
              return (
                -1 !== e &&
                  (r = r.timeout(
                    e,
                    new Error(t + " did not load after " + e + "ms")
                  )),
                r
              );
            })(e, u);
        })
          .then(function (t) {
            return (function (n, e, t, r) {
              var o = r.send;
              return A.try(function () {
                return "string" == typeof e
                  ? e
                  : A.try(function () {
                      return (
                        t ||
                        wr(n, { send: o }).then(function (n) {
                          return n.domain;
                        })
                      );
                    }).then(function (n) {
                      if (!on(e, e))
                        throw new Error(
                          "Domain " + Fn(e) + " does not match " + Fn(e)
                        );
                      return n;
                    });
              });
            })(e, i, (void 0 === t ? {} : t).domain, { send: n });
          })
          .then(function (o) {
            var i = o,
              u =
                "postrobot_method" === t && r && "string" == typeof r.name
                  ? r.name + "()"
                  : t,
              c = new A(),
              s = t + "_" + En();
            if (!l) {
              var d = { name: t, win: e, domain: i, promise: c };
              !(function (n, e) {
                fr("responseListeners").set(n, e);
              })(s, d);
              var f = gr("requestPromises").getOrSet(e, function () {
                return [];
              });
              f.push(c),
                c.catch(function () {
                  !(function (n) {
                    fr("erroredResponseListeners").set(n, !0);
                  })(s),
                    Wr(s);
                });
              var p = (function (n) {
                  return gr("knownWindows").get(n, !1);
                })(e)
                  ? 1e4
                  : 2e3,
                h = a,
                m = p,
                g = h,
                y = qn(function () {
                  return $(e)
                    ? c.reject(
                        new Error(
                          "Window closed for " +
                            t +
                            " before " +
                            (d.ack ? "response" : "ack")
                        )
                      )
                    : d.cancelled
                    ? c.reject(
                        new Error("Response listener was cancelled for " + t)
                      )
                    : ((m = Math.max(m - 500, 0)),
                      -1 !== g && (g = Math.max(g - 500, 0)),
                      d.ack || 0 !== m
                        ? 0 === g
                          ? c.reject(
                              new Error(
                                "No response for postMessage " +
                                  u +
                                  " in " +
                                  Z() +
                                  " in " +
                                  h +
                                  "ms"
                              )
                            )
                          : void 0
                        : c.reject(
                            new Error(
                              "No ack for postMessage " +
                                u +
                                " in " +
                                Z() +
                                " in " +
                                p +
                                "ms"
                            )
                          ));
                }, 500);
              c.finally(function () {
                y.cancel(), f.splice(f.indexOf(c, 1));
              }).catch(An);
            }
            return Br(
              e,
              i,
              {
                id: En(),
                origin: Z(window),
                type: "postrobot_message_request",
                hash: s,
                name: t,
                data: r,
                fireAndForget: l,
              },
              { on: Yr, send: n }
            ).then(
              function () {
                return l ? c.resolve() : c;
              },
              function (n) {
                throw new Error(
                  "Send request message failed for " +
                    u +
                    " in " +
                    Z() +
                    "\n\n" +
                    Mn(n)
                );
              }
            );
          });
      };
      function Xr(n, e, t) {
        return Dr(n, e, t, { on: Yr, send: Jr });
      }
      function $r(n, e, t) {
        return Ir(n, e, t, { on: Yr, send: Jr });
      }
      function Qr(n) {
        return new _r({ send: Jr, win: n });
      }
      function no(n) {
        return _r.toProxyWindow(n, { send: Jr });
      }
      function eo() {
        var n, e, t;
        sr().initialized ||
          ((sr().initialized = !0),
          (function (n) {
            var e = n.on,
              t = n.send,
              r = sr();
            r.receiveMessage =
              r.receiveMessage ||
              function (n) {
                return Vr(n, { on: e, send: t });
              };
          })({ on: Yr, send: Jr }),
          (e = (n = { on: Yr, send: Jr }).on),
          (t = n.send),
          fr().getOrSet("postMessageListener", function () {
            return Se(window, "message", function (n) {
              !(function (n, e) {
                var t = e.on,
                  r = e.send;
                A.try(function () {
                  var e = n.source || n.sourceElement,
                    o = n.origin || (n.originalEvent && n.originalEvent.origin),
                    i = n.data;
                  if (("null" === o && (o = "file://"), e)) {
                    if (!o)
                      throw new Error(
                        "Post message did not have origin domain"
                      );
                    Vr({ source: e, origin: o, data: i }, { on: t, send: r });
                  }
                });
              })(n, { on: e, send: t });
            });
          }),
          (function (n) {
            var e = n.on,
              t = n.send;
            fr("builtinListeners").getOrSet("helloListener", function () {
              var n = e("postrobot_hello", { domain: "*" }, function (n) {
                  return (
                    vr(n.source, { domain: n.origin }), { instanceID: yr() }
                  );
                }),
                r = nn();
              return r && wr(r, { send: t }).catch(function (n) {}), n;
            });
          })({ on: Yr, send: Jr }));
      }
      function to() {
        var n, e;
        !(function () {
          for (
            var n = fr("responseListeners"), e = 0, t = n.keys();
            e < t.length;
            e++
          ) {
            var r = t[e],
              o = n.get(r);
            o && (o.cancelled = !0), n.del(r);
          }
        })(),
          (n = fr().get("postMessageListener")) && n.cancel(),
          (e = cr()),
          delete window[e];
      }
      var ro = !0;
      function oo(n) {
        for (var e = 0, t = gr("requestPromises").get(n, []); e < t.length; e++)
          t[e]
            .reject(
              new Error(
                "Window " +
                  ($(n) ? "closed" : "cleaned up") +
                  " before response"
              )
            )
            .catch(An);
      }
      function io() {
        return "__zoid_9_0_82___" + qe();
      }
      function ao(n) {
        var e = io();
        if (!U(n))
          throw new Error("Can not get global for window on different domain");
        return n[e] || (n[e] = {}), n[e];
      }
      function uo(n, e) {
        try {
          return e(ao(n));
        } catch (n) {}
      }
      function lo(n) {
        return {
          get: function () {
            var e = this;
            return A.try(function () {
              if (e.source && e.source !== window)
                throw new Error(
                  "Can not call get on proxy object from a remote window"
                );
              return n;
            });
          },
        };
      }
      function co(n) {
        return Cn(JSON.stringify(n));
      }
      function so(n) {
        var e = ao(n);
        return (e.references = e.references || {}), e.references;
      }
      function fo(n) {
        var e,
          t,
          r = n.data,
          o = n.metaData,
          i = n.sender,
          a = n.receiver,
          u = n.passByReference,
          l = void 0 !== u && u,
          c = n.basic,
          s = void 0 !== c && c,
          d = no(a.win),
          f = s ? JSON.stringify(r) : Xr(d, a.domain, r),
          p = l
            ? ((e = f),
              (t = En()),
              (so(window)[t] = e),
              { type: "uid", uid: t })
            : (function (n) {
                return { type: "raw", val: n };
              })(f);
        return {
          serializedData: co({
            sender: { domain: i.domain },
            metaData: o,
            reference: p,
          }),
          cleanReference: function () {
            var n, e;
            (n = window), "uid" === (e = p).type && delete so(n)[e.uid];
          },
        };
      }
      function po(n) {
        var e,
          t,
          r = n.sender,
          o = n.basic,
          i = void 0 !== o && o,
          a = (function (n) {
            return JSON.parse(bn(n));
          })(n.data),
          u = a.reference,
          l = a.metaData;
        (e = "function" == typeof r.win ? r.win({ metaData: l }) : r.win),
          (t =
            "function" == typeof r.domain
              ? r.domain({ metaData: l })
              : "string" == typeof r.domain
              ? r.domain
              : a.sender.domain);
        var c = (function (n, e) {
          if ("raw" === e.type) return e.val;
          if ("uid" === e.type) return so(n)[e.uid];
          throw new Error("Unsupported ref type: " + e.type);
        })(e, u);
        return {
          data: i ? JSON.parse(c) : $r(e, t, c),
          metaData: l,
          sender: { win: e, domain: t },
          reference: u,
        };
      }
      eo();
      var ho = M;
      function mo(n) {
        return "__zoid__" + n.name + "__" + n.serializedPayload + "__";
      }
      function go(n) {
        if (!n) throw new Error("No window name");
        var e = n.split("__"),
          t = e[1],
          r = e[2],
          o = e[3];
        if ("zoid" !== t)
          throw new Error("Window not rendered by zoid - got " + t);
        if (!r) throw new Error("Expected component name");
        if (!o) throw new Error("Expected serialized payload ref");
        return { name: r, serializedInitialPayload: o };
      }
      var yo = Nn(function (n) {
        var e = po({
          data: go(n).serializedInitialPayload,
          sender: {
            win: function (n) {
              return (function (n) {
                if ("opener" === n.type) return re("opener", B(window));
                if ("parent" === n.type && "number" == typeof n.distance)
                  return re(
                    "parent",
                    ((e = window),
                    void 0 === (t = n.distance) && (t = 1),
                    (function (n, e) {
                      void 0 === e && (e = 1);
                      for (var t = n, r = 0; r < e; r++) {
                        if (!t) return;
                        t = j(t);
                      }
                      return t;
                    })(e, tn(e) - t))
                  );
                var e, t;
                if ("global" === n.type && n.uid && "string" == typeof n.uid) {
                  var r = (function () {
                    var e = n.uid,
                      t = nn(window);
                    if (!t) throw new Error("Can not find ancestor window");
                    for (var r = 0, o = K(t); r < o.length; r++) {
                      var i = o[r];
                      if (U(i)) {
                        var a = uo(i, function (n) {
                          return n.windows && n.windows[e];
                        });
                        if (a) return { v: a };
                      }
                    }
                  })();
                  if ("object" == typeof r) return r.v;
                } else if ("name" === n.type) {
                  var o = n.name;
                  return re(
                    "namedWindow",
                    (function (n, e) {
                      return (
                        Q(n, e) ||
                        (function n(e, t) {
                          var r = Q(e, t);
                          if (r) return r;
                          for (var o = 0, i = G(e); o < i.length; o++) {
                            var a = n(i[o], t);
                            if (a) return a;
                          }
                        })(Y(n) || n, e)
                      );
                    })(re("ancestor", nn(window)), o)
                  );
                }
                throw new Error(
                  "Unable to find " + n.type + " parent component window"
                );
              })(n.metaData.windowRef);
            },
          },
        });
        return { parent: e.sender, payload: e.data, reference: e.reference };
      });
      function vo() {
        return yo(window.name);
      }
      function wo(n, e) {
        if ((void 0 === e && (e = window), n === j(e)))
          return { type: "parent", distance: tn(n) };
        if (n === B(e)) return { type: "opener" };
        if (U(n) && (r = n) !== Y(r)) {
          var t = q(n).name;
          if (t) return { type: "name", name: t };
        }
        var r;
      }
      function Co(n, e, t, r, o) {
        if (!n.hasOwnProperty(t)) return r;
        var i = n[t];
        return "function" == typeof i.childDecorate
          ? i.childDecorate({
              value: r,
              uid: o.uid,
              tag: o.tag,
              close: o.close,
              focus: o.focus,
              onError: o.onError,
              onProps: o.onProps,
              resize: o.resize,
              getParent: o.getParent,
              getParentDomain: o.getParentDomain,
              show: o.show,
              hide: o.hide,
              export: o.export,
              getSiblings: o.getSiblings,
            })
          : r;
      }
      function bo() {
        return A.try(function () {
          window.focus();
        });
      }
      function Eo() {
        return A.try(function () {
          window.close();
        });
      }
      var Lo = function () {
          return An;
        },
        xo = function (n) {
          return _n(n.value);
        };
      function Oo(n, e, t) {
        for (var r = 0, o = Object.keys(n); r < o.length; r++) {
          var i = o[r],
            a = e[i];
          a && t(i, a, n[i]);
        }
      }
      function Po(n, e, t) {
        var r = {};
        return A.all(
          (function (n, e, o) {
            var i = [];
            return (
              Oo(n, e, function (n, e, o) {
                var a = (function (n, e, o) {
                  return A.resolve().then(function () {
                    var i, a;
                    if (null != o) {
                      var u = ((i = {}),
                        (i.get = e.queryParam),
                        (i.post = e.bodyParam),
                        i)[t],
                        l = ((a = {}),
                        (a.get = e.queryValue),
                        (a.post = e.bodyValue),
                        a)[t];
                      if (u)
                        return A.hash({
                          finalParam: A.try(function () {
                            return "function" == typeof u
                              ? u({ value: o })
                              : "string" == typeof u
                              ? u
                              : n;
                          }),
                          finalValue: A.try(function () {
                            return "function" == typeof l && Qn(o)
                              ? l({ value: o })
                              : o;
                          }),
                        }).then(function (t) {
                          var o,
                            i = t.finalParam,
                            a = t.finalValue;
                          if ("boolean" == typeof a) o = a.toString();
                          else if ("string" == typeof a) o = a.toString();
                          else if ("object" == typeof a && null !== a) {
                            if ("json" === e.serialization)
                              o = JSON.stringify(a);
                            else if ("base64" === e.serialization)
                              o = Cn(JSON.stringify(a));
                            else if (
                              "dotify" === e.serialization ||
                              !e.serialization
                            ) {
                              o = (function n(e, t, r) {
                                for (var o in (void 0 === t && (t = ""),
                                void 0 === r && (r = {}),
                                (t = t ? t + "." : t),
                                e))
                                  e.hasOwnProperty(o) &&
                                    null != e[o] &&
                                    "function" != typeof e[o] &&
                                    (e[o] &&
                                    Array.isArray(e[o]) &&
                                    e[o].length &&
                                    e[o].every(function (n) {
                                      return "object" != typeof n;
                                    })
                                      ? (r["" + t + o + "[]"] = e[o].join(","))
                                      : e[o] && "object" == typeof e[o]
                                      ? (r = n(e[o], "" + t + o, r))
                                      : (r["" + t + o] = e[o].toString()));
                                return r;
                              })(a, n);
                              for (
                                var u = 0, l = Object.keys(o);
                                u < l.length;
                                u++
                              ) {
                                var c = l[u];
                                r[c] = o[c];
                              }
                              return;
                            }
                          } else "number" == typeof a && (o = a.toString());
                          r[i] = o;
                        });
                    }
                  });
                })(n, e, o);
                i.push(a);
              }),
              i
            );
          })(e, n)
        ).then(function () {
          return r;
        });
      }
      function To(n) {
        var e,
          t,
          r,
          o,
          i = n.uid,
          a = n.options,
          u = n.overrides,
          l = void 0 === u ? {} : u,
          c = n.parentWin,
          s = void 0 === c ? window : c,
          d = a.propsDef,
          f = a.containerTemplate,
          p = a.prerenderTemplate,
          h = a.tag,
          m = a.name,
          g = a.attributes,
          y = a.dimensions,
          v = a.autoResize,
          w = a.url,
          C = a.domain,
          b = a.exports,
          L = new A(),
          x = [],
          O = te(),
          P = {},
          T = { visible: !0 },
          N = l.event ? l.event : zn(),
          S = l.props ? l.props : {},
          k = l.onError,
          _ = l.getProxyContainer,
          M = l.show,
          R = l.hide,
          F = l.close,
          D = l.renderContainer,
          I = l.getProxyWindow,
          j = l.setProxyWin,
          B = l.openFrame,
          H = l.openPrerenderFrame,
          W = l.prerender,
          z = l.open,
          G = l.openPrerender,
          V = l.watchForUnload,
          Y = l.getInternalState,
          K = l.setInternalState,
          J = function () {
            return "function" == typeof y ? y({ props: S }) : y;
          },
          X = function () {
            return A.try(function () {
              return l.resolveInitPromise
                ? l.resolveInitPromise()
                : L.resolve();
            });
          },
          Q = function (n) {
            return A.try(function () {
              return l.rejectInitPromise ? l.rejectInitPromise(n) : L.reject(n);
            });
          },
          en = function (n) {
            for (var e = {}, t = 0, r = Object.keys(S); t < r.length; t++) {
              var o = r[t],
                i = d[o];
              (i && !1 === i.sendToChild) ||
                (i && i.sameDomain && !on(n, Z(window))) ||
                (e[o] = S[o]);
            }
            return A.hash(e);
          },
          ln = function () {
            return A.try(function () {
              return Y ? Y() : T;
            });
          },
          cn = function (n) {
            return A.try(function () {
              return K ? K(n) : (T = E({}, T, n));
            });
          },
          dn = function () {
            return I
              ? I()
              : A.try(function () {
                  var n = S.window;
                  if (n) {
                    var e = no(n);
                    return (
                      O.register(function () {
                        return n.close();
                      }),
                      e
                    );
                  }
                  return new _r({ send: Jr });
                });
          },
          fn = function (n) {
            return _
              ? _(n)
              : A.try(function () {
                  return be(n);
                }).then(function (n) {
                  return (
                    He(n) &&
                      (n = (function n(e) {
                        var t = (function (n) {
                          var e = (function (n) {
                            for (; n.parentNode; ) n = n.parentNode;
                            if (He(n)) return n;
                          })(n);
                          if (e && e.host) return e.host;
                        })(e);
                        if (!t) throw new Error("Element is not in shadow dom");
                        var r = "shadow-slot-" + En(),
                          o = document.createElement("slot");
                        o.setAttribute("name", r), e.appendChild(o);
                        var i = document.createElement("div");
                        return (
                          i.setAttribute("slot", r),
                          t.appendChild(i),
                          He(t) ? n(i) : i
                        );
                      })(n)),
                    lo(n)
                  );
                });
          },
          pn = function (n) {
            return j
              ? j(n)
              : A.try(function () {
                  e = n;
                });
          },
          hn = function () {
            return M
              ? M()
              : A.hash({
                  setState: cn({ visible: !0 }),
                  showElement: t ? t.get().then(Fe) : null,
                }).then(An);
          },
          mn = function () {
            return R
              ? R()
              : A.hash({
                  setState: cn({ visible: !1 }),
                  showElement: t ? t.get().then(De) : null,
                }).then(An);
          },
          gn = function () {
            return "function" == typeof w ? w({ props: S }) : w;
          },
          yn = function () {
            return "function" == typeof g ? g({ props: S }) : g;
          },
          vn = function () {
            return an(gn());
          },
          wn = function (n, e) {
            var t = e.windowName;
            return B
              ? B(n, { windowName: t })
              : A.try(function () {
                  if (n === ho.IFRAME)
                    return lo(
                      Ne({ attributes: E({ name: t, title: m }, yn().iframe) })
                    );
                });
          },
          Cn = function (n) {
            return H
              ? H(n)
              : A.try(function () {
                  if (n === ho.IFRAME)
                    return lo(
                      Ne({
                        attributes: E(
                          {
                            name:
                              "__zoid_prerender_frame__" +
                              m +
                              "_" +
                              En() +
                              "__",
                            title: "prerender__" + m,
                          },
                          yn().iframe
                        ),
                      })
                    );
                });
          },
          bn = function (n, e, t) {
            return G
              ? G(n, e, t)
              : A.try(function () {
                  if (n === ho.IFRAME) {
                    if (!t)
                      throw new Error("Expected proxy frame to be passed");
                    return t.get().then(function (n) {
                      return (
                        O.register(function () {
                          return Ie(n);
                        }),
                        Te(n)
                          .then(function (n) {
                            return q(n);
                          })
                          .then(function (n) {
                            return no(n);
                          })
                      );
                    });
                  }
                  if (n === ho.POPUP) return e;
                  throw new Error("No render context available for " + n);
                });
          },
          Ln = function () {
            return A.try(function () {
              if (e)
                return A.all([N.trigger("zoid-focus"), e.focus()]).then(An);
            });
          },
          xn = function () {
            var n = ao(window);
            return (
              (n.windows = n.windows || {}),
              (n.windows[i] = window),
              O.register(function () {
                delete n.windows[i];
              }),
              i
            );
          },
          On = function (n, e, t, r) {
            if (e === Z(window)) return { type: "global", uid: xn() };
            if (n !== window)
              throw new Error(
                "Can not construct cross-domain window reference for different target window"
              );
            if (S.window) {
              var o = r.getWindow();
              if (!o)
                throw new Error(
                  "Can not construct cross-domain window reference for lazy window prop"
                );
              if (nn(o) !== window)
                throw new Error(
                  "Can not construct cross-domain window reference for window prop with different ancestor"
                );
            }
            if (t === ho.POPUP) return { type: "opener" };
            if (t === ho.IFRAME)
              return { type: "parent", distance: tn(window) };
            throw new Error("Can not construct window reference for child");
          },
          Pn = function (n, e) {
            return A.try(function () {
              (o = n),
                (r = e),
                X(),
                O.register(function () {
                  return e.close.fireAndForget().catch(An);
                });
            });
          },
          Tn = function (n) {
            var e = n.width,
              t = n.height;
            return A.try(function () {
              N.trigger("zoid-resize", { width: e, height: t });
            });
          },
          Sn = function (n) {
            return A.try(function () {
              return N.trigger("zoid-destroy");
            })
              .catch(An)
              .then(function () {
                return O.all(n);
              })
              .then(function () {
                L.asyncReject(n || new Error("Component destroyed"));
              });
          },
          kn = Nn(function (n) {
            return A.try(function () {
              if (F) {
                if ($(F.__source__)) return;
                return F();
              }
              return A.try(function () {
                return N.trigger("zoid-close");
              }).then(function () {
                return Sn(n || new Error("Component closed"));
              });
            });
          }),
          Rn = function (n, e) {
            var t = e.proxyWin,
              r = e.proxyFrame,
              o = e.windowName;
            return z
              ? z(n, { proxyWin: t, proxyFrame: r, windowName: o })
              : A.try(function () {
                  if (n === ho.IFRAME) {
                    if (!r)
                      throw new Error("Expected proxy frame to be passed");
                    return r.get().then(function (n) {
                      return Te(n).then(function (e) {
                        return (
                          O.register(function () {
                            return Ie(n);
                          }),
                          O.register(function () {
                            return oo(e);
                          }),
                          e
                        );
                      });
                    });
                  }
                  if (n === ho.POPUP) {
                    var e = J(),
                      t = e.width,
                      i = void 0 === t ? "300px" : t,
                      a = e.height,
                      u = void 0 === a ? "150px" : a;
                    (i = et(i, window.outerWidth)),
                      (u = et(u, window.outerWidth));
                    var l = xe(
                      "",
                      E({ name: o, width: i, height: u }, yn().popup)
                    );
                    return (
                      O.register(function () {
                        return sn(l);
                      }),
                      O.register(function () {
                        return oo(l);
                      }),
                      l
                    );
                  }
                  throw new Error("No render context available for " + n);
                }).then(function (n) {
                  return (
                    t.setWindow(n, { send: Jr }),
                    t.setName(o).then(function () {
                      return t;
                    })
                  );
                });
          },
          Fn = function () {
            return A.try(function () {
              var n = Se(
                  window,
                  "unload",
                  _n(function () {
                    Sn(new Error("Window navigated away"));
                  })
                ),
                e = un(s, Sn, 3e3);
              if ((O.register(e.cancel), O.register(n.cancel), V)) return V();
            });
          },
          In = function (n) {
            var e = !1;
            return n
              .isClosed()
              .then(function (t) {
                return t
                  ? ((e = !0), kn(new Error("Detected component window close")))
                  : A.delay(200)
                      .then(function () {
                        return n.isClosed();
                      })
                      .then(function (n) {
                        if (n)
                          return (
                            (e = !0),
                            kn(new Error("Detected component window close"))
                          );
                      });
              })
              .then(function () {
                return e;
              });
          },
          jn = function (n) {
            return k
              ? k(n)
              : A.try(function () {
                  if (-1 === x.indexOf(n))
                    return (
                      x.push(n), L.asyncReject(n), N.trigger("zoid-error", n)
                    );
                });
          },
          Bn = new A(),
          Hn = function (n) {
            return A.try(function () {
              Bn.resolve(n);
            });
          };
        Pn.onError = jn;
        var Wn = function (n, e) {
            return n({
              uid: i,
              container: e.container,
              context: e.context,
              doc: e.doc,
              frame: e.frame,
              prerenderFrame: e.prerenderFrame,
              focus: Ln,
              close: kn,
              state: P,
              props: S,
              tag: h,
              dimensions: J(),
              event: N,
            });
          },
          Zn = function (n, e) {
            var t = e.context;
            return W
              ? W(n, { context: t })
              : A.try(function () {
                  if (p) {
                    var e = n.getWindow();
                    if (
                      e &&
                      U(e) &&
                      (function (n) {
                        try {
                          if (!n.location.href) return !0;
                          if ("about:blank" === n.location.href) return !0;
                        } catch (n) {}
                        return !1;
                      })(e)
                    ) {
                      var r = (e = q(e)).document,
                        o = Wn(p, { context: t, doc: r });
                      if (o) {
                        if (o.ownerDocument !== r)
                          throw new Error(
                            "Expected prerender template to have been created with document from child window"
                          );
                        Oe(e, o);
                        var i = v.width,
                          a = void 0 !== i && i,
                          u = v.height,
                          l = void 0 !== u && u,
                          c = v.element,
                          s = void 0 === c ? "body" : c;
                        if ((s = we(s, r)) && (a || l)) {
                          var d = Be(
                            s,
                            function (n) {
                              Tn({
                                width: a ? n.width : void 0,
                                height: l ? n.height : void 0,
                              });
                            },
                            { width: a, height: l, win: e }
                          );
                          N.on("zoid-rendered", d.cancel);
                        }
                      }
                    }
                  }
                });
          },
          Un = function (n, e) {
            var r = e.proxyFrame,
              o = e.proxyPrerenderFrame,
              i = e.context,
              a = e.rerender;
            return D
              ? D(n, {
                  proxyFrame: r,
                  proxyPrerenderFrame: o,
                  context: i,
                  rerender: a,
                })
              : A.hash({
                  container: n.get(),
                  frame: r ? r.get() : null,
                  prerenderFrame: o ? o.get() : null,
                  internalState: ln(),
                }).then(function (n) {
                  var e = n.container,
                    r = n.internalState.visible,
                    o = Wn(f, {
                      context: i,
                      container: e,
                      frame: n.frame,
                      prerenderFrame: n.prerenderFrame,
                      doc: document,
                    });
                  if (o) {
                    r || De(o), ye(e, o);
                    var u = (function (n, e) {
                      e = _n(e);
                      var t,
                        r,
                        o,
                        i = !1,
                        a = [],
                        u = function () {
                          i = !0;
                          for (var n = 0; n < a.length; n++) a[n].disconnect();
                          t && t.cancel(),
                            o && o.removeEventListener("unload", l),
                            r && Ie(r);
                        },
                        l = function () {
                          i || (e(), u());
                        };
                      if (je(n)) return l(), { cancel: u };
                      if (window.MutationObserver)
                        for (var c = n.parentElement; c; ) {
                          var s = new window.MutationObserver(function () {
                            je(n) && l();
                          });
                          s.observe(c, { childList: !0 }),
                            a.push(s),
                            (c = c.parentElement);
                        }
                      return (
                        (r = document.createElement("iframe")).setAttribute(
                          "name",
                          "__detect_close_" + En() + "__"
                        ),
                        (r.style.display = "none"),
                        Te(r).then(function (n) {
                          (o = q(n)).addEventListener("unload", l);
                        }),
                        n.appendChild(r),
                        (t = qn(function () {
                          je(n) && l();
                        }, 1e3)),
                        { cancel: u }
                      );
                    })(o, function () {
                      var n = new Error(
                        "Detected container element removed from DOM"
                      );
                      return A.delay(1).then(function () {
                        if (!je(o)) return O.all(n), a().then(X, Q);
                        kn(n);
                      });
                    });
                    return (
                      O.register(function () {
                        return u.cancel();
                      }),
                      O.register(function () {
                        return Ie(o);
                      }),
                      (t = lo(o))
                    );
                  }
                });
          },
          Gn = function () {
            return {
              state: P,
              event: N,
              close: kn,
              focus: Ln,
              resize: Tn,
              onError: jn,
              updateProps: Yn,
              show: hn,
              hide: mn,
            };
          },
          Vn = function (n, e) {
            void 0 === e && (e = !1);
            var t = Gn();
            !(function (n, e, t, r, o) {
              void 0 === o && (o = !1), Dn(e, (t = t || {}));
              for (
                var i = o ? [] : [].concat(Object.keys(n)),
                  a = 0,
                  u = Object.keys(t);
                a < u.length;
                a++
              ) {
                var l = u[a];
                -1 === i.indexOf(l) && i.push(l);
              }
              for (
                var c = [],
                  s = r.state,
                  d = r.close,
                  f = r.focus,
                  p = r.event,
                  h = r.onError,
                  m = 0;
                m < i.length;
                m++
              ) {
                var g = i[m],
                  y = n[g],
                  v = t[g];
                if (y) {
                  var w = y.alias;
                  if (
                    (w && (!Qn(v) && Qn(t[w]) && (v = t[w]), c.push(w)),
                    y.value &&
                      (v = y.value({
                        props: e,
                        state: s,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h,
                      })),
                    !Qn(v) &&
                      y.default &&
                      (v = y.default({
                        props: e,
                        state: s,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h,
                      })),
                    Qn(v) &&
                      ("array" === y.type
                        ? !Array.isArray(v)
                        : typeof v !== y.type))
                  )
                    throw new TypeError(
                      "Prop is not of type " + y.type + ": " + g
                    );
                  e[g] = v;
                }
              }
              for (var C = 0; C < c.length; C++) delete e[c[C]];
              Oo(e, n, function (n, t, r) {
                if (t && Qn(r) && t.decorate) {
                  var o = t.decorate({
                    value: r,
                    props: e,
                    state: s,
                    close: d,
                    focus: f,
                    event: p,
                    onError: h,
                  });
                  e[n] = o;
                }
              });
              for (var b = 0, E = Object.keys(n); b < E.length; b++) {
                var L = E[b];
                if (!1 !== n[L].required && !Qn(e[L]))
                  throw new Error('Expected prop "' + L + '" to be defined');
              }
            })(d, S, n, t, e);
          },
          Yn = function (n) {
            return (
              Vn(n, !0),
              L.then(function () {
                var n = r,
                  t = e;
                if (n && t && o)
                  return en(o).then(function (e) {
                    return n.updateProps(e).catch(function (n) {
                      return In(t).then(function (e) {
                        if (!e) throw n;
                      });
                    });
                  });
              })
            );
          };
        return {
          init: function () {
            N.on("zoid-render", function () {
              return S.onRender();
            }),
              N.on("zoid-display", function () {
                return S.onDisplay();
              }),
              N.on("zoid-rendered", function () {
                return S.onRendered();
              }),
              N.on("zoid-close", function () {
                return S.onClose();
              }),
              N.on("zoid-destroy", function () {
                return S.onDestroy();
              }),
              N.on("zoid-resize", function () {
                return S.onResize();
              }),
              N.on("zoid-focus", function () {
                return S.onFocus();
              }),
              N.on("zoid-props", function (n) {
                return S.onProps(n);
              }),
              N.on("zoid-error", function (n) {
                return S && S.onError
                  ? S.onError(n)
                  : Q(n).then(function () {
                      setTimeout(function () {
                        throw n;
                      }, 1);
                    });
              }),
              O.register(N.reset);
          },
          render: function (n) {
            var t = n.target,
              r = n.container,
              o = n.context,
              u = n.rerender;
            return A.try(function () {
              var n = vn(),
                l = C || vn();
              !(function (n, e, t) {
                if (n !== window) {
                  if (!rn(window, n))
                    throw new Error("Can only renderTo an adjacent frame");
                  var r = Z();
                  if (!on(e, r) && !U(n))
                    throw new Error(
                      "Can not render remotely to " +
                        e.toString() +
                        " - can only render to " +
                        r
                    );
                  if (t && "string" != typeof t)
                    throw new Error(
                      "Container passed to renderTo must be a string selector, got " +
                        typeof t +
                        " }"
                    );
                }
              })(t, l, r);
              var c = A.try(function () {
                  if (t !== window)
                    return (function (n, e) {
                      for (
                        var t = {}, r = 0, o = Object.keys(S);
                        r < o.length;
                        r++
                      ) {
                        var a = o[r],
                          u = d[a];
                        u && u.allowDelegate && (t[a] = S[a]);
                      }
                      var l = Jr(e, "zoid_delegate_" + m, {
                        uid: i,
                        overrides: {
                          props: t,
                          event: N,
                          close: kn,
                          onError: jn,
                          getInternalState: ln,
                          setInternalState: cn,
                          resolveInitPromise: X,
                          rejectInitPromise: Q,
                        },
                      })
                        .then(function (n) {
                          var t = n.data.parent;
                          return (
                            O.register(function (n) {
                              if (!$(e)) return t.destroy(n);
                            }),
                            t.getDelegateOverrides()
                          );
                        })
                        .catch(function (n) {
                          throw new Error(
                            "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                              Mn(n)
                          );
                        });
                      return (
                        (_ = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.getProxyContainer.apply(n, e);
                          });
                        }),
                        (D = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.renderContainer.apply(n, e);
                          });
                        }),
                        (M = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.show.apply(n, e);
                          });
                        }),
                        (R = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.hide.apply(n, e);
                          });
                        }),
                        (V = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.watchForUnload.apply(n, e);
                          });
                        }),
                        n === ho.IFRAME
                          ? ((I = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.getProxyWindow.apply(n, e);
                              });
                            }),
                            (B = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openFrame.apply(n, e);
                              });
                            }),
                            (H = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openPrerenderFrame.apply(n, e);
                              });
                            }),
                            (W = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.prerender.apply(n, e);
                              });
                            }),
                            (z = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.open.apply(n, e);
                              });
                            }),
                            (G = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openPrerender.apply(n, e);
                              });
                            }))
                          : n === ho.POPUP &&
                            (j = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.setProxyWin.apply(n, e);
                              });
                            }),
                        l
                      );
                    })(o, t);
                }),
                s = S.window,
                f = Fn(),
                p = Po(d, S, "get").then(function (n) {
                  return fe(
                    (function (n) {
                      if (0 !== an(n).indexOf("mock:")) return n;
                      throw new Error(
                        "Mock urls not supported out of test mode"
                      );
                    })(gn()),
                    { query: n }
                  );
                }),
                g = Po(d, S, "post"),
                y = N.trigger("zoid-render"),
                v = fn(r),
                w = dn(),
                b = w.then(function (e) {
                  return (function (n) {
                    var e = void 0 === n ? {} : n,
                      t = e.proxyWin,
                      r = e.initialChildDomain,
                      o = e.childDomainMatch,
                      a = e.target,
                      u = void 0 === a ? window : a,
                      l = e.context;
                    return (function (n) {
                      var e = void 0 === n ? {} : n,
                        t = e.proxyWin,
                        r = e.childDomainMatch,
                        o = e.context;
                      return en(e.initialChildDomain).then(function (n) {
                        return {
                          uid: i,
                          context: o,
                          tag: h,
                          childDomainMatch: r,
                          version: "9_0_82",
                          props: n,
                          exports:
                            ((e = t),
                            {
                              init: function (n) {
                                return Pn(this.origin, n);
                              },
                              close: kn,
                              checkClose: function () {
                                return In(e);
                              },
                              resize: Tn,
                              onError: jn,
                              show: hn,
                              hide: mn,
                              export: Hn,
                            }),
                        };
                        var e;
                      });
                    })({
                      proxyWin: t,
                      initialChildDomain: r,
                      childDomainMatch: o,
                      context: l,
                    }).then(function (n) {
                      var e = fo({
                          data: n,
                          metaData: { windowRef: On(u, r, l, t) },
                          sender: { domain: Z(window) },
                          receiver: { win: t, domain: o },
                          passByReference: r === Z(),
                        }),
                        i = e.serializedData;
                      return O.register(e.cleanReference), i;
                    });
                  })({
                    proxyWin: (r = {
                      proxyWin: e,
                      initialChildDomain: n,
                      childDomainMatch: l,
                      target: t,
                      context: o,
                    }).proxyWin,
                    initialChildDomain: r.initialChildDomain,
                    childDomainMatch: r.childDomainMatch,
                    target: r.target,
                    context: r.context,
                  }).then(function (n) {
                    return mo({ name: m, serializedPayload: n });
                  });
                  var r;
                }),
                E = b.then(function (n) {
                  return wn(o, { windowName: n });
                }),
                x = Cn(o),
                P = A.hash({
                  proxyContainer: v,
                  proxyFrame: E,
                  proxyPrerenderFrame: x,
                })
                  .then(function (n) {
                    return Un(n.proxyContainer, {
                      context: o,
                      proxyFrame: n.proxyFrame,
                      proxyPrerenderFrame: n.proxyPrerenderFrame,
                      rerender: u,
                    });
                  })
                  .then(function (n) {
                    return n;
                  }),
                T = A.hash({ windowName: b, proxyFrame: E, proxyWin: w }).then(
                  function (n) {
                    var e = n.proxyWin;
                    return s
                      ? e
                      : Rn(o, {
                          windowName: n.windowName,
                          proxyWin: e,
                          proxyFrame: n.proxyFrame,
                        });
                  }
                ),
                k = A.hash({ proxyWin: T, proxyPrerenderFrame: x }).then(
                  function (n) {
                    return bn(o, n.proxyWin, n.proxyPrerenderFrame);
                  }
                ),
                F = T.then(function (n) {
                  return (e = n), pn(n);
                }),
                q = A.hash({ proxyPrerenderWin: k, state: F }).then(function (
                  n
                ) {
                  return Zn(n.proxyPrerenderWin, { context: o });
                }),
                Y = A.hash({ proxyWin: T, windowName: b }).then(function (n) {
                  if (s) return n.proxyWin.setName(n.windowName);
                }),
                K = A.hash({ body: g }).then(function (n) {
                  return a.method
                    ? a.method
                    : Object.keys(n.body).length
                    ? "post"
                    : "get";
                }),
                J = A.hash({
                  proxyWin: T,
                  windowUrl: p,
                  body: g,
                  method: K,
                  windowName: Y,
                  prerender: q,
                }).then(function (n) {
                  return n.proxyWin.setLocation(n.windowUrl, {
                    method: n.method,
                    body: n.body,
                  });
                }),
                nn = T.then(function (n) {
                  !(function n(e, t) {
                    var r = !1;
                    return (
                      O.register(function () {
                        r = !0;
                      }),
                      A.delay(2e3)
                        .then(function () {
                          return e.isClosed();
                        })
                        .then(function (o) {
                          if (!r)
                            return o
                              ? kn(new Error("Detected " + t + " close"))
                              : n(e, t);
                        })
                    );
                  })(n, o);
                }),
                tn = A.hash({ container: P, prerender: q }).then(function () {
                  return N.trigger("zoid-display");
                }),
                un = T.then(function (n) {}),
                sn = J.then(function () {
                  return A.try(function () {
                    var n = S.timeout;
                    if (n)
                      return L.timeout(
                        n,
                        new Error(
                          "Loading component timed out after " +
                            n +
                            " milliseconds"
                        )
                      );
                  });
                }),
                yn = L.then(function () {
                  return N.trigger("zoid-rendered");
                });
              return A.hash({
                initPromise: L,
                buildUrlPromise: p,
                onRenderPromise: y,
                getProxyContainerPromise: v,
                openFramePromise: E,
                openPrerenderFramePromise: x,
                renderContainerPromise: P,
                openPromise: T,
                openPrerenderPromise: k,
                setStatePromise: F,
                prerenderPromise: q,
                loadUrlPromise: J,
                buildWindowNamePromise: b,
                setWindowNamePromise: Y,
                watchForClosePromise: nn,
                onDisplayPromise: tn,
                openBridgePromise: un,
                runTimeoutPromise: sn,
                onRenderedPromise: yn,
                delegatePromise: c,
                watchForUnloadPromise: f,
              });
            })
              .catch(function (n) {
                return A.all([jn(n), Sn(n)]).then(
                  function () {
                    throw n;
                  },
                  function () {
                    throw n;
                  }
                );
              })
              .then(An);
          },
          destroy: Sn,
          getProps: function () {
            return S;
          },
          setProps: Vn,
          export: Hn,
          getHelpers: Gn,
          getDelegateOverrides: function () {
            return A.try(function () {
              return {
                getProxyContainer: fn,
                show: hn,
                hide: mn,
                renderContainer: Un,
                getProxyWindow: dn,
                watchForUnload: Fn,
                openFrame: wn,
                openPrerenderFrame: Cn,
                prerender: Zn,
                open: Rn,
                openPrerender: bn,
                setProxyWin: pn,
              };
            });
          },
          getExports: function () {
            return b({
              getExports: function () {
                return Bn;
              },
            });
          },
        };
      }
      var No = {
          register: function (n, e, t, r) {
            var o = r.React,
              i = r.ReactDOM;
            return (function (n) {
              function e() {
                return n.apply(this, arguments) || this;
              }
              b(e, n);
              var r = e.prototype;
              return (
                (r.render = function () {
                  return o.createElement("div", null);
                }),
                (r.componentDidMount = function () {
                  var n = i.findDOMNode(this),
                    e = t(Dn({}, this.props));
                  e.render(n, ho.IFRAME), this.setState({ parent: e });
                }),
                (r.componentDidUpdate = function () {
                  this.state &&
                    this.state.parent &&
                    this.state.parent.updateProps(Dn({}, this.props)).catch(An);
                }),
                e
              );
            })(o.Component);
          },
        },
        So = {
          register: function (n, e, t, r) {
            return r.component(n, {
              render: function (n) {
                return n("div");
              },
              inheritAttrs: !1,
              mounted: function () {
                var n,
                  e = this.$el;
                (this.parent = t(
                  E(
                    {},
                    ((n = this.$attrs),
                    Object.keys(n).reduce(function (e, t) {
                      var r = n[t];
                      return (
                        "style-object" === t || "styleObject" === t
                          ? ((e.style = r), (e.styleObject = r))
                          : t.includes("-")
                          ? (e[Gn(t)] = r)
                          : (e[t] = r),
                        e
                      );
                    }, {}))
                  )
                )),
                  this.parent.render(e, ho.IFRAME);
              },
              watch: {
                $attrs: {
                  handler: function () {
                    this.parent &&
                      this.$attrs &&
                      this.parent.updateProps(E({}, this.$attrs)).catch(An);
                  },
                  deep: !0,
                },
              },
            });
          },
        },
        ko = {
          register: function (n, e, t) {
            return {
              template: "<div></div>",
              inheritAttrs: !1,
              mounted: function () {
                var n,
                  e = this.$el;
                (this.parent = t(
                  E(
                    {},
                    ((n = this.$attrs),
                    Object.keys(n).reduce(function (e, t) {
                      var r = n[t];
                      return (
                        "style-object" === t || "styleObject" === t
                          ? ((e.style = r), (e.styleObject = r))
                          : t.includes("-")
                          ? (e[Gn(t)] = r)
                          : (e[t] = r),
                        e
                      );
                    }, {}))
                  )
                )),
                  this.parent.render(e, ho.IFRAME);
              },
              watch: {
                $attrs: {
                  handler: function () {
                    this.parent &&
                      this.$attrs &&
                      this.parent.updateProps(E({}, this.$attrs)).catch(An);
                  },
                  deep: !0,
                },
              },
            };
          },
        },
        Ao = {
          register: function (n, e, t, r) {
            return r.module(n, []).directive(Gn(n), function () {
              for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++)
                n[o[r]] = "=";
              return (
                (n.props = "="),
                {
                  scope: n,
                  restrict: "E",
                  controller: [
                    "$scope",
                    "$element",
                    function (n, e) {
                      function r() {
                        if (
                          "$apply" !== n.$root.$$phase &&
                          "$digest" !== n.$root.$$phase
                        )
                          try {
                            n.$apply();
                          } catch (n) {}
                      }
                      var o = function () {
                          return $n(n.props, function (n) {
                            return "function" == typeof n
                              ? function () {
                                  var e = n.apply(this, arguments);
                                  return r(), e;
                                }
                              : n;
                          });
                        },
                        i = t(o());
                      i.render(e[0], ho.IFRAME),
                        n.$watch(function () {
                          i.updateProps(o()).catch(An);
                        });
                    },
                  ],
                }
              );
            });
          },
        },
        _o = {
          register: function (n, e, t, r) {
            var o = r.Component,
              i = r.NgModule,
              a = r.ElementRef,
              u = r.NgZone,
              l = r.Inject,
              c = (function () {
                function n(n, e) {
                  (this.elementRef = void 0),
                    (this.internalProps = void 0),
                    (this.parent = void 0),
                    (this.props = void 0),
                    (this.zone = void 0),
                    (this._props = void 0),
                    (this._props = {}),
                    (this.elementRef = n),
                    (this.zone = e);
                }
                var e = n.prototype;
                return (
                  (e.getProps = function () {
                    var n = this;
                    return $n(
                      E({}, this.internalProps, this.props),
                      function (e) {
                        if ("function" == typeof e) {
                          var t = n.zone;
                          return function () {
                            var n = arguments,
                              r = this;
                            return t.run(function () {
                              return e.apply(r, n);
                            });
                          };
                        }
                        return e;
                      }
                    );
                  }),
                  (e.ngOnInit = function () {
                    var n = this.elementRef.nativeElement;
                    (this.parent = t(this.getProps())),
                      this.parent.render(n, ho.IFRAME);
                  }),
                  (e.ngDoCheck = function () {
                    this.parent &&
                      !(function (n, e) {
                        var t = {};
                        for (var r in n)
                          if (
                            n.hasOwnProperty(r) &&
                            ((t[r] = !0), n[r] !== e[r])
                          )
                            return !1;
                        for (var o in e) if (!t[o]) return !1;
                        return !0;
                      })(this._props, this.props) &&
                      ((this._props = E({}, this.props)),
                      this.parent.updateProps(this.getProps()));
                  }),
                  n
                );
              })();
            (c.annotations = void 0),
              (c.parameters = void 0),
              (c.parameters = [[new l(a)], [new l(u)]]),
              (c.annotations = [
                new o({
                  selector: n,
                  template: "<div></div>",
                  inputs: ["props"],
                }),
              ]);
            var s = function () {};
            return (
              (s.annotations = void 0),
              (s.annotations = [new i({ declarations: [c], exports: [c] })]),
              s
            );
          },
        };
      function Mo(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.doc,
          i = n.props,
          a = n.event,
          u = n.dimensions,
          l = u.width,
          c = u.height;
        if (t && r) {
          var s = o.createElement("div");
          s.setAttribute("id", e);
          var d = o.createElement("style");
          return (
            i.cspNonce && d.setAttribute("nonce", i.cspNonce),
            d.appendChild(
              o.createTextNode(
                "\n            #" +
                  e +
                  " {\n                display: inline-block;\n                position: relative;\n                width: " +
                  l +
                  ";\n                height: " +
                  c +
                  ";\n            }\n\n            #" +
                  e +
                  " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
              )
            ),
            s.appendChild(t),
            s.appendChild(r),
            s.appendChild(d),
            r.classList.add("zoid-visible"),
            t.classList.add("zoid-invisible"),
            a.on("zoid-rendered", function () {
              r.classList.remove("zoid-visible"),
                r.classList.add("zoid-invisible"),
                t.classList.remove("zoid-invisible"),
                t.classList.add("zoid-visible"),
                setTimeout(function () {
                  Ie(r);
                }, 1);
            }),
            a.on("zoid-resize", function (n) {
              var e = n.width,
                t = n.height;
              "number" == typeof e && (s.style.width = nt(e)),
                "number" == typeof t && (s.style.height = nt(t));
            }),
            s
          );
        }
      }
      function Ro(n) {
        var e = n.doc,
          t = n.props,
          r = e.createElement("html"),
          o = e.createElement("body"),
          i = e.createElement("style"),
          a = e.createElement("div");
        return (
          a.classList.add("spinner"),
          t.cspNonce && i.setAttribute("nonce", t.cspNonce),
          r.appendChild(o),
          o.appendChild(a),
          o.appendChild(i),
          i.appendChild(
            e.createTextNode(
              "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
            )
          ),
          r
        );
      }
      var Fo = te(),
        Do = te();
      function Io(n) {
        var e,
          t,
          r = (function (n) {
            var e = n.tag,
              t = n.url,
              r = n.domain,
              o = n.bridgeUrl,
              i = n.props,
              a = void 0 === i ? {} : i,
              u = n.dimensions,
              l = void 0 === u ? {} : u,
              c = n.autoResize,
              s = void 0 === c ? {} : c,
              d = n.allowedParentDomains,
              f = void 0 === d ? "*" : d,
              p = n.attributes,
              h = void 0 === p ? {} : p,
              m = n.defaultContext,
              g = void 0 === m ? ho.IFRAME : m,
              y = n.containerTemplate,
              v = void 0 === y ? Mo : y,
              w = n.prerenderTemplate,
              C = void 0 === w ? Ro : w,
              b = n.validate,
              L = n.eligible,
              x =
                void 0 === L
                  ? function () {
                      return { eligible: !0 };
                    }
                  : L,
              O = n.logger,
              P = void 0 === O ? { info: An } : O,
              T = n.exports,
              N = void 0 === T ? An : T,
              S = n.method,
              k = n.children,
              A =
                void 0 === k
                  ? function () {
                      return {};
                    }
                  : k,
              _ = e.replace(/-/g, "_"),
              M = E(
                {},
                {
                  window: {
                    type: "object",
                    sendToChild: !1,
                    required: !1,
                    allowDelegate: !0,
                    validate: function (n) {
                      var e = n.value;
                      if (!ln(e) && !_r.isProxyWindow(e))
                        throw new Error("Expected Window or ProxyWindow");
                      if (ln(e)) {
                        if ($(e)) throw new Error("Window is closed");
                        if (!U(e)) throw new Error("Window is not same domain");
                      }
                    },
                    decorate: function (n) {
                      return no(n.value);
                    },
                  },
                  timeout: { type: "number", required: !1, sendToChild: !1 },
                  cspNonce: { type: "string", required: !1 },
                  onDisplay: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Lo,
                    decorate: xo,
                  },
                  onRendered: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Lo,
                    decorate: xo,
                  },
                  onRender: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Lo,
                    decorate: xo,
                  },
                  onClose: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Lo,
                    decorate: xo,
                  },
                  onDestroy: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Lo,
                    decorate: xo,
                  },
                  onResize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Lo,
                  },
                  onFocus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Lo,
                  },
                  close: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.close;
                    },
                  },
                  focus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.focus;
                    },
                  },
                  resize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.resize;
                    },
                  },
                  uid: {
                    type: "string",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.uid;
                    },
                  },
                  tag: {
                    type: "string",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.tag;
                    },
                  },
                  getParent: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParent;
                    },
                  },
                  getParentDomain: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParentDomain;
                    },
                  },
                  show: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.show;
                    },
                  },
                  hide: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.hide;
                    },
                  },
                  export: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.export;
                    },
                  },
                  onError: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.onError;
                    },
                  },
                  onProps: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.onProps;
                    },
                  },
                  getSiblings: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getSiblings;
                    },
                  },
                },
                a
              );
            if (!v) throw new Error("Container template required");
            return {
              name: _,
              tag: e,
              url: t,
              domain: r,
              bridgeUrl: o,
              method: S,
              propsDef: M,
              dimensions: l,
              autoResize: s,
              allowedParentDomains: f,
              attributes: h,
              defaultContext: g,
              containerTemplate: v,
              prerenderTemplate: C,
              validate: b,
              logger: P,
              eligible: x,
              children: A,
              exports:
                "function" == typeof N
                  ? N
                  : function (n) {
                      for (
                        var e = n.getExports,
                          t = {},
                          r = function (n, r) {
                            var o = r[n],
                              i = N[o].type,
                              a = e().then(function (n) {
                                return n[o];
                              });
                            t[o] =
                              "function" === i
                                ? function () {
                                    for (
                                      var n = arguments.length,
                                        e = new Array(n),
                                        t = 0;
                                      t < n;
                                      t++
                                    )
                                      e[t] = arguments[t];
                                    return a.then(function (n) {
                                      return n.apply(void 0, e);
                                    });
                                  }
                                : a;
                          },
                          o = 0,
                          i = Object.keys(N);
                        o < i.length;
                        o++
                      )
                        r(o, i);
                      return t;
                    },
            };
          })(n),
          o = r.name,
          i = r.tag,
          a = r.defaultContext,
          u = r.propsDef,
          l = r.eligible,
          c = r.children,
          s = ao(window),
          d = {},
          f = [],
          p = function () {
            if (
              (function (n) {
                try {
                  return go(window.name).name === n;
                } catch (n) {}
                return !1;
              })(o)
            ) {
              var n = vo().payload;
              if (n.tag === i && on(n.childDomainMatch, Z())) return !0;
            }
            return !1;
          },
          h = Nn(function () {
            if (p()) {
              if (window.xprops)
                throw (
                  (delete s.components[i],
                  new Error(
                    "Can not register " +
                      o +
                      " as child - child already registered"
                  ))
                );
              var n = (function (n) {
                var e,
                  t = n.tag,
                  r = n.propsDef,
                  o = n.autoResize,
                  i = n.allowedParentDomains,
                  a = [],
                  u = vo(),
                  l = u.parent,
                  c = u.payload,
                  s = l.win,
                  d = l.domain,
                  f = new A(),
                  p = c.version,
                  h = c.uid,
                  m = c.exports,
                  g = c.context,
                  y = c.props;
                if ("9_0_82" !== p)
                  throw new Error(
                    "Parent window has zoid version " +
                      p +
                      ", child window has version 9_0_82"
                  );
                var v = m.show,
                  w = m.hide,
                  C = m.close,
                  b = m.onError,
                  E = m.checkClose,
                  L = m.export,
                  x = m.resize,
                  O = m.init,
                  P = function () {
                    return s;
                  },
                  T = function () {
                    return d;
                  },
                  N = function (n) {
                    a.push(n);
                  },
                  S = function (n) {
                    return x.fireAndForget({
                      width: n.width,
                      height: n.height,
                    });
                  },
                  k = function (n) {
                    return f.resolve(n), L(n);
                  },
                  _ = function (n) {
                    var r = (void 0 === n ? {} : n).anyParent,
                      o = [],
                      i = e.parent;
                    if ((void 0 === r && (r = !i), !r && !i))
                      throw new Error("No parent found for " + t + " child");
                    for (var a = 0, u = K(window); a < u.length; a++) {
                      var l = u[a];
                      if (U(l)) {
                        var c = q(l).xprops;
                        if (c && P() === c.getParent()) {
                          var s = c.parent;
                          if (r || !i || (s && s.uid === i.uid)) {
                            var d = uo(l, function (n) {
                              return n.exports;
                            });
                            o.push({ props: c, exports: d });
                          }
                        }
                      }
                    }
                    return o;
                  },
                  M = function (n, o, i) {
                    void 0 === i && (i = !1);
                    var u = (function (n, e, t, r, o, i) {
                      void 0 === i && (i = !1);
                      for (
                        var a = {}, u = 0, l = Object.keys(t);
                        u < l.length;
                        u++
                      ) {
                        var c = l[u],
                          s = e[c];
                        if (!s || !s.sameDomain || (r === Z(window) && U(n))) {
                          var d = Co(e, 0, c, t[c], o);
                          (a[c] = d),
                            s && s.alias && !a[s.alias] && (a[s.alias] = d);
                        }
                      }
                      if (!i)
                        for (var f = 0, p = Object.keys(e); f < p.length; f++) {
                          var h = p[f];
                          t.hasOwnProperty(h) ||
                            (a[h] = Co(e, 0, h, void 0, o));
                        }
                      return a;
                    })(
                      s,
                      r,
                      n,
                      o,
                      {
                        tag: t,
                        show: v,
                        hide: w,
                        close: C,
                        focus: bo,
                        onError: b,
                        resize: S,
                        getSiblings: _,
                        onProps: N,
                        getParent: P,
                        getParentDomain: T,
                        uid: h,
                        export: k,
                      },
                      i
                    );
                    e ? Dn(e, u) : (e = u);
                    for (var l = 0; l < a.length; l++) (0, a[l])(e);
                  },
                  R = function (n) {
                    return A.try(function () {
                      return M(n, d, !0);
                    });
                  };
                return {
                  init: function () {
                    return A.try(function () {
                      return (
                        U(s) &&
                          (function (n) {
                            var e = n.componentName,
                              t = n.parentComponentWindow,
                              r = po({
                                data: go(window.name).serializedInitialPayload,
                                sender: { win: t },
                                basic: !0,
                              }),
                              o = r.sender;
                            if (
                              "uid" === r.reference.type ||
                              "global" === r.metaData.windowRef.type
                            ) {
                              var i = fo({
                                data: r.data,
                                metaData: { windowRef: wo(t) },
                                sender: { domain: o.domain },
                                receiver: { win: window, domain: Z() },
                                basic: !0,
                              });
                              window.name = mo({
                                name: e,
                                serializedPayload: i.serializedData,
                              });
                            }
                          })({
                            componentName: n.name,
                            parentComponentWindow: s,
                          }),
                        (ao(window).exports = n.exports({
                          getExports: function () {
                            return f;
                          },
                        })),
                        (function (n, e) {
                          if (!on(n, e))
                            throw new Error(
                              "Can not be rendered by domain: " + e
                            );
                        })(i, d),
                        br(s),
                        window.addEventListener("beforeunload", function () {
                          E.fireAndForget();
                        }),
                        window.addEventListener("unload", function () {
                          E.fireAndForget();
                        }),
                        un(s, function () {
                          Eo();
                        }),
                        O({ updateProps: R, close: Eo })
                      );
                    })
                      .then(function () {
                        return ((n = o.width),
                        (e = void 0 !== n && n),
                        (t = o.height),
                        (r = void 0 !== t && t),
                        (i = o.element),
                        be(void 0 === i ? "body" : i)
                          .catch(An)
                          .then(function (n) {
                            return { width: e, height: r, element: n };
                          })).then(function (n) {
                          var e = n.width,
                            t = n.height,
                            r = n.element;
                          r &&
                            (e || t) &&
                            g !== ho.POPUP &&
                            Be(
                              r,
                              function (n) {
                                S({
                                  width: e ? n.width : void 0,
                                  height: t ? n.height : void 0,
                                });
                              },
                              { width: e, height: t }
                            );
                        });
                        var n, e, t, r, i;
                      })
                      .catch(function (n) {
                        b(n);
                      });
                  },
                  getProps: function () {
                    return e || (M(y, d), e);
                  },
                };
              })(r);
              return n.init(), n;
            }
          }),
          m = function n(e) {
            var t,
              u = "zoid-" + i + "-" + En(),
              s = e || {},
              d = l({ props: s }),
              p = d.eligible,
              h = d.reason,
              m = s.onDestroy;
            s.onDestroy = function () {
              if ((t && p && f.splice(f.indexOf(t), 1), m))
                return m.apply(void 0, arguments);
            };
            var g = To({ uid: u, options: r });
            g.init(),
              p ? g.setProps(s) : s.onDestroy && s.onDestroy(),
              Fo.register(function (n) {
                return g.destroy(
                  n || new Error("zoid destroyed all components")
                );
              });
            var y = function (e) {
                var t = (void 0 === e ? {} : e).decorate;
                return n((void 0 === t ? Un : t)(s));
              },
              v = function (n, e, r) {
                return A.try(function () {
                  if (!p) {
                    var e = new Error(h || o + " component is not eligible");
                    return g.destroy(e).then(function () {
                      throw e;
                    });
                  }
                  if (!ln(n)) throw new Error("Must pass window to renderTo");
                  return (function (n, e) {
                    return A.try(function () {
                      if (n.window) return no(n.window).getType();
                      if (e) {
                        if (e !== ho.IFRAME && e !== ho.POPUP)
                          throw new Error("Unrecognized context: " + e);
                        return e;
                      }
                      return a;
                    });
                  })(s, r);
                })
                  .then(function (o) {
                    if (
                      ((e = (function (n, e) {
                        if (e) {
                          if ("string" != typeof e && !ve(e))
                            throw new TypeError(
                              "Expected string or element selector to be passed"
                            );
                          return e;
                        }
                        if (n === ho.POPUP) return "body";
                        throw new Error(
                          "Expected element to be passed to render iframe"
                        );
                      })(o, e)),
                      n !== window && "string" != typeof e)
                    )
                      throw new Error(
                        "Must pass string element when rendering to another window"
                      );
                    return g.render({
                      target: n,
                      container: e,
                      context: o,
                      rerender: function () {
                        var o = y();
                        return Dn(t, o), o.renderTo(n, e, r);
                      },
                    });
                  })
                  .catch(function (n) {
                    return g.destroy(n).then(function () {
                      throw n;
                    });
                  });
              };
            return (
              (t = E(
                {},
                g.getExports(),
                g.getHelpers(),
                (function () {
                  for (
                    var n = c(),
                      e = {},
                      t = function (t, r) {
                        var o = r[t],
                          i = n[o];
                        e[o] = function (n) {
                          var e = g.getProps(),
                            t = E({}, n, {
                              parent: { uid: u, props: e, export: g.export },
                            });
                          return i(t);
                        };
                      },
                      r = 0,
                      o = Object.keys(n);
                    r < o.length;
                    r++
                  )
                    t(r, o);
                  return e;
                })(),
                {
                  isEligible: function () {
                    return p;
                  },
                  clone: y,
                  render: function (n, e) {
                    return v(window, n, e);
                  },
                  renderTo: function (n, e, t) {
                    return v(n, e, t);
                  },
                }
              )),
              p && f.push(t),
              t
            );
          };
        if (
          (h(),
          (e = Yr("zoid_allow_delegate_" + o, function () {
            return !0;
          })),
          (t = Yr("zoid_delegate_" + o, function (n) {
            var e = n.data;
            return {
              parent: To({
                uid: e.uid,
                options: r,
                overrides: e.overrides,
                parentWin: n.source,
              }),
            };
          })),
          Do.register(e.cancel),
          Do.register(t.cancel),
          (s.components = s.components || {}),
          s.components[i])
        )
          throw new Error(
            "Can not register multiple components with the same tag: " + i
          );
        return (
          (s.components[i] = !0),
          {
            init: m,
            instances: f,
            driver: function (n, e) {
              var t = {
                react: No,
                angular: Ao,
                vue: So,
                vue3: ko,
                angular2: _o,
              };
              if (!t[n])
                throw new Error("Could not find driver for framework: " + n);
              return d[n] || (d[n] = t[n].register(i, u, m, e)), d[n];
            },
            isChild: p,
            canRenderTo: function (n) {
              return Jr(n, "zoid_allow_delegate_" + o)
                .then(function (n) {
                  return n.data;
                })
                .catch(function () {
                  return !1;
                });
            },
            registerChild: h,
          }
        );
      }
      var jo = function (n) {
        eo();
        var e = Io(n),
          t = function (n) {
            return e.init(n);
          };
        (t.driver = function (n, t) {
          return e.driver(n, t);
        }),
          (t.isChild = function () {
            return e.isChild();
          }),
          (t.canRenderTo = function (n) {
            return e.canRenderTo(n);
          }),
          (t.instances = e.instances);
        var r = e.registerChild();
        return r && (window.xprops = t.xprops = r.getProps()), t;
      };
      function Bo(n) {
        var e = Fo.all(n);
        return (Fo = te()), e;
      }
      var Ho = Bo,
        Wo = (function (n) {
          function e(e) {
            var t;
            return (
              ((t = n.call(this, e) || this).code = void 0),
              (t.name = "ValidationError"),
              (t.code = "validation_error"),
              t
            );
          }
          return b(e, n), e;
        })(yn(Error));
      function Zo() {
        if (!Jt())
          throw new Error(
            "Can only determine if iframe rendering is allowed on paypal domain"
          );
        if (!g()) return !0;
        var n = window.xprops && window.xprops.getParent();
        return !(!n || !U(n));
      }
      function Uo() {
        return window.xprops && window.xprops.sessionID
          ? window.xprops.sessionID
          : tr();
      }
      var qo = {
          get: function (n) {
            return rr(function (e) {
              return A.resolve(e[n]);
            });
          },
          set: function (n, e) {
            return rr(function (t) {
              return (t[n] = e), A.resolve(e);
            });
          },
        },
        zo = {
          get: function (n) {
            return ir(function (e) {
              return A.resolve(e[n]);
            });
          },
          set: function (n, e) {
            return ir(function (t) {
              return (t[n] = e), A.resolve(e);
            });
          },
        };
      function Go(n, e) {
        for (var t = [], r = 0; r < n.length; r++) {
          var o = n[r].render(e);
          if (o)
            if (Array.isArray(o))
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                a && t.push(a);
              }
            else t.push(o);
        }
        return t;
      }
      var Vo = (function () {
          function n(n, e, t) {
            (this.type = "element"),
              (this.name = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.onRender = void 0),
              (this.name = n),
              (this.props = e || {}),
              (this.children = t);
            var r = this.props.onRender;
            "function" == typeof r && ((this.onRender = r), delete e.onRender);
          }
          var e = n.prototype;
          return (
            (e.render = function (n) {
              var e = n(this);
              return this.onRender && this.onRender(e), e;
            }),
            (e.renderChildren = function (n) {
              return Go(this.children, n);
            }),
            n
          );
        })(),
        Yo = (function () {
          function n(n) {
            (this.type = "fragment"),
              (this.children = void 0),
              (this.children = n);
          }
          return (
            (n.prototype.render = function (n) {
              return Go(this.children, n);
            }),
            n
          );
        })(),
        Ko = (function () {
          function n(n) {
            (this.type = "text"), (this.text = void 0), (this.text = n);
          }
          return (
            (n.prototype.render = function (n) {
              return n(this);
            }),
            n
          );
        })(),
        Jo = (function () {
          function n(n, e, t) {
            (this.type = "component"),
              (this.component = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.component = n),
              (this.props = e || {}),
              (this.children = t),
              (this.props.children = t);
          }
          var e = n.prototype;
          return (
            (e.renderComponent = function (n) {
              var e = (function (n) {
                var e = Xo(Array.isArray(n) ? n : [n]);
                return 1 === e.length
                  ? e[0]
                  : e.length > 1
                  ? new Yo(e)
                  : void 0;
              })(this.component(this.props, this.children));
              if (e) return e.render(n);
            }),
            (e.render = function (n) {
              return n(this);
            }),
            (e.renderChildren = function (n) {
              return Go(this.children, n);
            }),
            n
          );
        })();
      function Xo(n) {
        for (var e = [], t = 0; t < n.length; t++) {
          var r = n[t];
          if (r)
            if ("string" == typeof r || "number" == typeof r)
              e.push(new Ko(r.toString()));
            else {
              if ("boolean" == typeof r) continue;
              if (Array.isArray(r))
                for (var o = 0, i = Xo(r); o < i.length; o++) e.push(i[o]);
              else {
                if (
                  !r ||
                  ("element" !== r.type &&
                    "text" !== r.type &&
                    "component" !== r.type)
                )
                  throw new TypeError("Unrecognized node type: " + typeof r);
                e.push(r);
              }
            }
        }
        return e;
      }
      var $o,
        Qo,
        ni,
        ei = function (n, e) {
          for (
            var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2;
            o < t;
            o++
          )
            r[o - 2] = arguments[o];
          if (((r = Xo(r)), "string" == typeof n)) return new Vo(n, e, r);
          if ("function" == typeof n) return new Jo(n, e, r);
          throw new TypeError(
            "Expected jsx element to be a string or a function"
          );
        },
        ti = function (n, e) {
          return e;
        },
        ri = ((($o = {}).svg = "http://www.w3.org/2000/svg"), $o),
        oi = (((Qo = {})["xlink:href"] = "http://www.w3.org/1999/xlink"), Qo);
      function ii(n, e) {
        return n.createTextNode(e.text);
      }
      function ai(n, e) {
        for (var t = e.props, r = 0, o = Object.keys(t); r < o.length; r++) {
          var i = o[r],
            a = t[i];
          if (null != a && "el" !== i && "innerHTML" !== i)
            if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a)
              n.addEventListener(i.slice(2).toLowerCase(), a);
            else if ("string" == typeof a || "number" == typeof a) {
              var u = oi[i];
              u
                ? n.setAttributeNS(u, i, a.toString())
                : n.setAttribute(i, a.toString());
            } else "boolean" == typeof a && !0 === a && n.setAttribute(i, "");
        }
        "iframe" !== n.tagName.toLowerCase() ||
          t.id ||
          n.setAttribute(
            "id",
            "jsx-iframe-" +
              "xxxxxxxxxx".replace(/./g, function () {
                return "0123456789abcdef".charAt(
                  Math.floor(Math.random() * "0123456789abcdef".length)
                );
              })
          );
      }
      var ui =
        (((ni = {}).iframe = function (n, e) {
          var t = e.children[0];
          if (
            1 !== e.children.length ||
            !t ||
            "element" !== t.type ||
            "html" !== t.name
          )
            throw new Error(
              "Expected only single html element node as child of iframe element"
            );
          n.addEventListener("load", function () {
            var e = n.contentWindow;
            if (!e) throw new Error("Expected frame to have contentWindow");
            for (
              var r = e.document, o = r.documentElement;
              o.children && o.children.length;

            )
              o.removeChild(o.children[0]);
            for (var i = t.render(ci({ doc: r })); i.children.length; )
              o.appendChild(i.children[0]);
          });
        }),
        (ni.script = function (n, e) {
          var t = e.children[0];
          if (1 !== e.children.length || !t || "text" !== t.type)
            throw new Error(
              "Expected only single text node as child of script element"
            );
          n.text = t.text;
        }),
        (ni.default = function (n, e, t) {
          for (var r = 0, o = e.renderChildren(t); r < o.length; r++)
            n.appendChild(o[r]);
        }),
        ni);
      function li(n, e, t, r) {
        if (e.props.hasOwnProperty("innerHTML")) {
          if (e.children.length)
            throw new Error(
              "Expected no children to be passed when innerHTML prop is set"
            );
          var o = e.props.innerHTML;
          if ("string" != typeof o)
            throw new TypeError("innerHTML prop must be string");
          "script" === e.name
            ? (n.text = o)
            : ((n.innerHTML = o),
              (function (n, e) {
                void 0 === e && (e = window.document);
                for (
                  var t = 0, r = n.querySelectorAll("script");
                  t < r.length;
                  t++
                ) {
                  var o = r[t],
                    i = o.parentNode;
                  if (i) {
                    var a = e.createElement("script");
                    (a.text = o.textContent), i.replaceChild(a, o);
                  }
                }
              })(n, t));
        } else (ui[e.name] || ui.default)(n, e, r);
      }
      function ci(n) {
        void 0 === n && (n = {});
        var e = n.doc,
          t = void 0 === e ? document : e;
        return function n(e) {
          if ("component" === e.type) return e.renderComponent(n);
          if ("text" === e.type) return ii(t, e);
          if ("element" === e.type) {
            var r = ri[e.name.toLowerCase()];
            if (r)
              return (function n(e, r) {
                if ("component" === e.type)
                  return e.renderComponent(function (e) {
                    return n(e, r);
                  });
                if ("text" === e.type) return ii(t, e);
                if ("element" === e.type) {
                  var o = (function (n, e, t) {
                    return n.createElementNS(t, e.name);
                  })(t, e, r);
                  return (
                    ai(o, e),
                    li(o, e, t, function (e) {
                      return n(e, r);
                    }),
                    o
                  );
                }
                throw new TypeError("Unhandleable node");
              })(e, r);
            var o = (function (n, e) {
              return e.props.el ? e.props.el : n.createElement(e.name);
            })(t, e);
            return ai(o, e), li(o, e, t, n), o;
          }
          throw new TypeError("Unhandleable node");
        };
      }
      var si = { br: !0 };
      function di(n) {
        return n
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/\//g, "&#x2F;");
      }
      function fi(n) {
        var e = n.css,
          t = n.nonce,
          r = n.children;
        return ei(
          ti,
          null,
          ei("style", {
            innerHTML: "string" == typeof e ? e : e._getCss(),
            nonce: t,
          }),
          r
        );
      }
      var pi,
        hi,
        mi = ["svg"],
        gi = ["render", "name", "logoColor"],
        yi = ["render", "name"];
      function vi(n) {
        var e = n.svg,
          t = l(n, mi);
        if (!e) throw new TypeError("Expected svg prop");
        if (
          "string" !=
          typeof (e = e.render(function n(e) {
            if ("component" === e.type)
              return [].concat(e.renderComponent(n)).join("");
            if ("element" === e.type) {
              var t =
                ((o = e.props),
                (i = Object.keys(o).filter(function (n) {
                  var e = o[n];
                  return (
                    "innerHTML" !== n &&
                    ("string" == typeof e || "number" == typeof e || !0 === e)
                  );
                })).length
                  ? " " +
                    i
                      .map(function (n) {
                        var e = o[n];
                        if (!0 === e) return "" + di(n);
                        if ("string" != typeof e && "number" != typeof e)
                          throw new TypeError(
                            "Unexpected prop type: " + typeof e
                          );
                        return "" === e
                          ? di(n)
                          : di(n) + '="' + di(e.toString()) + '"';
                      })
                      .join(" ")
                  : "");
              if (si[e.name]) return "<" + e.name + t + " />";
              var r =
                "string" == typeof e.props.innerHTML
                  ? e.props.innerHTML
                  : e.renderChildren(n).join("");
              return "<" + e.name + t + ">" + r + "</" + e.name + ">";
            }
            var o, i;
            if ("text" === e.type) return di(e.text);
            throw new TypeError("Unhandleable node: " + e.type);
          }))
        )
          throw new TypeError("Expected svg prop to be a string or jsx node");
        var r = E({ src: Wn(e) }, t);
        return ei("img", r);
      }
      function wi(n) {
        var e = n.render,
          t = n.name,
          r = n.logoColor,
          o = l(n, gi);
        return ei(
          vi,
          E({}, o, {
            svg: e(),
            alt: "",
            class:
              "paypal-logo paypal-logo-" +
              t +
              " " +
              (r ? "paypal-logo-color-" + r : ""),
          })
        );
      }
      function Ci(n) {
      
        var e = n.render,
          t = n.name,
          r = l(n, yi);
        return ei(
          vi,
          E({}, r, {
            svg: e(),
            alt: Vn(t),
            class: "paypal-logo-card paypal-logo-card-" + t,
          })
        );
      }
      function bi(n, e, t) {
        var r;
        if ((t && (r = e[t]), r || (r = e.default), !r))
          throw new Error(
            "No " + (t || "default") + " logo available for " + n
          );
        return r;
      }
      ((pi = {}).default = { primary: "#ffffff", secondary: "#ffffff" }),
        (pi.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (pi.black = { primary: "#000000", secondary: "#000000" }),
        ((hi = {}).default = { primary: "#005498", secondary: "#FFD800" }),
        (hi.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (hi.black = { primary: "#005498", secondary: "#FFD800" });
      var Ei,
        Li = ["logoColor"],
        xi =
          (((Ei = {}).default = { primary: "#333030" }),
          (Ei.white = { primary: "#ffffff" }),
          (Ei.black = { primary: "#333030" }),
          Ei);
      function Oi(n) {
        var e = void 0 === n ? {} : n,
          t = e.logoColor,
          r = l(e, Li),
          o = bi("bank", xi, t).primary;
        return ei(
          wi,
          E({}, r, {
            name: "bank",
            render: function () {
              return ei(
                "svg",
                {
                  width: "19px",
                  height: "18px",
                  viewBox: "0 0 19 18",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei(
                  "g",
                  {
                    transform:
                      "matrix(0.755484, 0, 0, 0.755484, 0.58609, -0.136891)",
                  },
                  ei(
                    "g",
                    { transform: "translate(-3.000000, -3.000000)", fill: o },
                    ei("path", {
                      d: "M7.5,11.25 L4.375,11.25 C3.73824612,11.25 3.50927246,10.4091381 4.05811242,10.0862911 L14.0493373,4.20910003 C14.6361169,3.86393557 15.3638831,3.86393557 15.9506627,4.20910003 L25.9418876,10.0862911 C26.4907275,10.4091381 26.2617539,11.25 25.625,11.25 L22.5,11.25 L22.5,18.1459005 C22.5,18.4910785 22.220178,18.7709005 21.875,18.7709005 C21.529822,18.7709005 21.25,18.4910785 21.25,18.1459005 L21.25,10.625 C21.25,10.279822 21.529822,10 21.875,10 L23.3298073,10 L15.3168875,5.28651779 C15.1212944,5.17146298 14.8787056,5.17146298 14.6831125,5.2865178 L6.67019269,10 L16.875,10 C17.9105339,10 18.75,10.8394661 18.75,11.875 L18.75,18.1459005 C18.75,18.4910785 18.470178,18.7709005 18.125,18.7709005 C17.779822,18.7709005 17.5,18.4910785 17.5,18.1459005 L17.5,11.875 C17.5,11.5298221 17.2201779,11.25 16.875,11.25 L13.7537575,11.25 L13.7537575,20.9375 C13.7537575,21.110089 13.8936685,21.25 14.0662575,21.25 L23.125,21.25 C23.470178,21.25 23.75,21.529822 23.75,21.875 L23.75,22.4947548 L25.625,22.4947548 C25.970178,22.4947548 26.25,22.7745768 26.25,23.1197548 L26.25,25.625 C26.25,25.970178 25.970178,26.25 25.625,26.25 L4.375,26.25 C4.02982203,26.25 3.75,25.970178 3.75,25.625 L3.75,23.1197548 C3.75,22.7745768 4.02982203,22.4947548 4.375,22.4947548 L6.25,22.4947548 L6.25,21.875 C6.25,21.529822 6.52982203,21.25 6.875,21.25 L9.30555555,21.25 C9.65073352,21.25 9.93055555,21.529822 9.93055555,21.875 C9.93055555,22.220178 9.65073352,22.5 9.30555555,22.5 L7.5,22.5 L7.5,23.1197548 C7.5,23.4649327 7.22017797,23.7447548 6.875,23.7447548 L5,23.7447548 L5,25 L25,25 L25,23.7447548 L23.125,23.7447548 C22.779822,23.7447548 22.5,23.4649327 22.5,23.1197548 L22.5,22.5 L14.0662575,22.5 C13.2033125,22.5 12.5037575,21.800445 12.5037575,20.9375 L12.5037575,11.25 L8.75,11.25 L8.75,18.1622438 C8.75,18.5074217 8.47017797,18.7872438 8.125,18.7872438 C7.77982203,18.7872438 7.5,18.5074217 7.5,18.1622438 L7.5,11.25 Z",
                    })
                  )
                )
              );
            },
          })
        );
      }
      function Pi(n) {
        var e = E({}, void 0 === n ? {} : n);
        return ei(
          Ci,
          E({}, e, {
            name: "amex",
            render: function () {
              return ei(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("path", {
                  d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
                  fill: "rgb(20, 119, 190)",
                }),
                ei("path", {
                  d: "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                  fill: "rgb(255, 255, 255)",
                }),
                ei("path", {
                  d: "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      function Ti(n) {
        var e = E({}, void 0 === n ? {} : n);
        return ei(
          Ci,
          E({}, e, {
            name: "mastercard",
            render: function () {
              return ei(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("path", {
                  d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(62, 57, 57)",
                }),
                ei("path", {
                  fill: "rgb(255, 95, 0)",
                  d: "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589",
                }),
                ei("path", {
                  d: "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                  fill: "rgb(235, 0, 27)",
                }),
                ei("path", {
                  d: "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                  fill: "rgb(247, 158, 27)",
                }),
                ei("path", {
                  d: "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      function Ni(n) {
        var e = E({}, void 0 === n ? {} : n);
        return ei(
          Ci,
          E({}, e, {
            name: "visa",
            render: function () {
              return ei(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("path", {
                  d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(33, 86, 154)",
                }),
                ei("path", {
                  d: "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      var Si,
        ki,
        Ai,
        _i,
        Mi,
        Ri,
        Fi,
        Di = ["logoColor"],
        Ii =
          (((Si = {}).default = { primary: "#333030" }),
          (Si.white = { primary: "#ffffff" }),
          (Si.black = { primary: "#333030" }),
          Si);
      function ji(n) {
        var e = void 0 === n ? {} : n,
          t = e.logoColor,
          r = l(e, Di),
          o = bi("card", Ii, t).primary;
        return ei(
          Ci,
          E({}, r, {
            name: "",
            render: function () {
              return ei(
                "svg",
                {
                  width: "24px",
                  height: "18px",
                  viewBox: "0 0 24 18",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei(
                  "g",
                  {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  ei(
                    "g",
                    {
                      transform: "translate(-3.000000, -6.000000)",
                      fill: o,
                      "fill-rule": "nonzero",
                    },
                    ei("path", {
                      d: "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
                      id: "Stroke-1",
                    })
                  )
                )
              );
            },
          })
        );
      }
      function Bi(n) {
        var e = E({}, n);
        return ei(
          wi,
          E({}, e, {
            name: "credit",
            render: function () {
              return ei(
                "svg",
                {
                  width: "48px",
                  height: "30px",
                  viewBox: "0 0 48 30",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei(
                  "defs",
                  null,
                  ei(
                    "radialGradient",
                    {
                      cx: "21.8145957%",
                      cy: "17.9147256%",
                      fx: "21.8145957%",
                      fy: "17.9147256%",
                      r: "154.485751%",
                      gradientTransform:
                        "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                      id: "radialGradient-1",
                    },
                    ei("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                    ei("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                  )
                ),
                ei(
                  "g",
                  {
                    id: "PPC-Card-art",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  ei(
                    "g",
                    {
                      id: "New-PPC-card-art---2",
                      transform: "translate(-49.000000, -452.000000)",
                    },
                    ei(
                      "g",
                      {
                        id: "Cards",
                        transform: "translate(16.000000, 375.000000)",
                      },
                      ei(
                        "g",
                        {
                          id: "PayPal-Credit-Card",
                          transform: "translate(33.000000, 77.000000)",
                        },
                        ei("rect", {
                          id: "Rectangle",
                          stroke: "#EAECED",
                          fill: "url(#radialGradient-1)",
                          x: "0.5",
                          y: "0.5",
                          width: "47",
                          height: "29",
                          rx: "2",
                        }),
                        ei(
                          "g",
                          {
                            id: "Logos/PayPal-Credit/paypal-credit-logo-monotone-transparent",
                            transform: "translate(9.000000, 7.500000)",
                            fill: "#003087",
                            "fill-rule": "nonzero",
                          },
                          ei(
                            "g",
                            {
                              id: "paypal-credit-logo-monotone-transparent",
                              transform: "translate(0.629340, 0.629340)",
                            },
                            ei(
                              "g",
                              {
                                id: "Group",
                                transform: "translate(0.553819, 0.629340)",
                              },
                              ei("path", {
                                d: "M17.8103299,6.32486979 L15.7335069,6.32486979 C15.6391059,6.32486979 15.5447049,6.41927083 15.5132378,6.51367188 L14.6006944,12.3350694 C14.6006944,12.3350694 14.6006944,12.3350694 14.6006944,12.3665365 C14.6006944,12.4294705 14.6636285,12.4924045 14.7265625,12.4924045 L16.8348524,12.4924045 C18.5340712,12.4924045 20.1703559,11.1393229 20.453559,9.40863715 C20.7052951,7.67795139 19.5095486,6.32486979 17.8103299,6.32486979 Z M18.7858073,9.37717014 C18.5970052,10.5729167 17.6844618,11.1078559 16.7404514,11.1078559 L16.3628472,11.1078559 L16.8977865,7.77235243 C16.8977865,7.7094184 16.9607205,7.67795139 17.0236545,7.67795139 L17.2753906,7.67795139 C18.3138021,7.67795139 18.9431424,8.27582465 18.7858073,9.37717014 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M13.0273437,7.67795139 L14.5377604,7.67795139 C14.6321615,7.67795139 14.7265625,7.58355035 14.7580295,7.48914931 L14.9153646,6.48220486 C14.9153646,6.48220486 14.9153646,6.45073785 14.9153646,6.45073785 C14.9153646,6.38780382 14.8524306,6.32486979 14.7894965,6.32486979 L11.6427951,6.32486979 C11.5483941,6.32486979 11.4539931,6.41927083 11.422526,6.51367188 L10.5099826,12.3036024 C10.5099826,12.3036024 10.5099826,12.3036024 10.5099826,12.3350694 C10.5099826,12.3980035 10.5729167,12.4609375 10.6358507,12.4609375 L13.7825521,12.4609375 C13.8769531,12.4609375 13.9713542,12.3665365 14.0028212,12.2721354 L14.1601562,11.265191 C14.1601562,11.265191 14.1601562,11.265191 14.1601562,11.233724 C14.1601562,11.1707899 14.0972222,11.1078559 14.0342882,11.1078559 L12.2721354,11.1078559 L12.3980035,10.2267795 C12.4294705,10.1323785 12.4924045,10.0379774 12.6182726,10.0379774 L14.0342882,10.0379774 C14.1286892,10.0379774 14.2230903,9.94357639 14.2545573,9.84917535 L14.4118924,8.8422309 C14.4118924,8.8422309 14.4118924,8.81076389 14.4118924,8.81076389 C14.4118924,8.74782986 14.3489583,8.68489583 14.2860243,8.68489583 L12.6497396,8.68489583 L12.7756076,7.83528646 C12.8385417,7.74088542 12.9329427,7.67795139 13.0273437,7.67795139 Z",
                                id: "Path",
                              }),
                              ei("path", {
                                d: "M22.8450521,6.32486979 L21.5863715,6.32486979 C21.4919705,6.32486979 21.3975694,6.41927083 21.3661024,6.51367188 L20.453559,12.3036024 C20.453559,12.3036024 20.453559,12.3350694 20.453559,12.3350694 C20.453559,12.3980035 20.5164931,12.4609375 20.5794271,12.4609375 L21.8381076,12.4609375 C21.9325087,12.4609375 22.0583767,12.3665365 22.0583767,12.2721354 L22.9709201,6.45073785 C22.9709201,6.45073785 22.9709201,6.45073785 22.9709201,6.41927083 C22.9709201,6.35633681 22.9394531,6.32486979 22.8450521,6.32486979 Z",
                                id: "Path",
                              }),
                              ei("path", {
                                d: "M8.55902778,6.32486979 L6.32486979,6.32486979 C6.23046875,6.32486979 6.16753472,6.38780382 6.13606771,6.48220486 L5.22352431,12.3350694 C5.22352431,12.3350694 5.22352431,12.3665365 5.22352431,12.3665365 C5.22352431,12.4294705 5.28645833,12.4924045 5.34939236,12.4924045 L6.63953993,12.4924045 C6.73394097,12.4924045 6.796875,12.4294705 6.82834201,12.3350694 L7.17447917,10.1323785 L7.20594618,10.1323785 L8.27582465,12.3980035 C8.30729167,12.4609375 8.37022569,12.4924045 8.43315972,12.4924045 L10.0694444,12.4924045 C10.1009115,12.4924045 10.1009115,12.4924045 10.1323785,12.4609375 C10.1953125,12.4294705 10.2267795,12.3350694 10.1638455,12.2721354 L8.74782986,9.94357639 C9.62890625,9.78624132 10.2267795,9.0625 10.3841146,8.21289062 C10.6043837,6.89127604 9.78624132,6.32486979 8.55902778,6.32486979 Z M8.71636285,8.30729167 C8.62196181,8.96809896 7.99262153,9.0625 7.48914931,9.0625 L7.33181424,9.0625 L7.55208333,7.64648437 C7.55208333,7.58355035 7.61501736,7.52061632 7.67795139,7.52061632 L7.89822049,7.52061632 C8.49609375,7.55208333 8.8422309,7.61501736 8.71636285,8.30729167 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M27.5651042,6.32486979 L23.6631944,6.32486979 C23.5687934,6.32486979 23.4743924,6.41927083 23.4429253,6.51367188 L23.2855903,7.52061632 C23.2855903,7.52061632 23.2855903,7.52061632 23.2855903,7.55208333 C23.2855903,7.61501736 23.3485243,7.67795139 23.4114583,7.67795139 L24.5757378,7.67795139 L23.8519965,12.3350694 C23.8519965,12.3350694 23.8519965,12.3665365 23.8519965,12.3665365 C23.8519965,12.4294705 23.9149306,12.4924045 23.9778646,12.4924045 L25.2365451,12.4924045 C25.3309462,12.4924045 25.4253472,12.3980035 25.4568142,12.3036024 L26.1805556,7.7094184 L27.3133681,7.7094184 C27.4077691,7.7094184 27.5021701,7.61501736 27.5336372,7.52061632 L27.6909722,6.51367188 C27.6909722,6.51367188 27.6909722,6.51367188 27.6909722,6.48220486 C27.6909722,6.35633681 27.6280382,6.32486979 27.5651042,6.32486979 Z",
                                id: "Path",
                              }),
                              ei("path", {
                                d: "M5.31792535,8.05555556 L5.53819444,6.67100694 C5.56966146,6.54513889 5.47526042,6.41927083 5.38085938,6.35633681 C5.00325521,6.23046875 4.59418403,6.13606771 4.18511285,6.13606771 C2.83203125,6.07313368 0.660807292,6.67100694 0.283203125,9.37717014 C0.157335069,10.3526476 0.56640625,12.5868056 3.20963542,12.5868056 C3.65017361,12.5868056 4.02777778,12.4924045 4.53125,12.3350694 C4.62565104,12.3036024 4.68858507,12.2406684 4.68858507,12.1777344 L4.90885417,10.7617188 C4.90885417,10.7302517 4.90885417,10.6987847 4.87738715,10.6673177 C4.84592014,10.6043837 4.7515191,10.6043837 4.68858507,10.6358507 C4.34244792,10.8875868 3.90190972,11.0449219 3.49283854,11.0449219 C2.4858941,11.0449219 1.95095486,10.3526476 2.07682292,9.37717014 C2.23415799,8.43315972 3.02083333,7.67795139 3.96484375,7.67795139 C4.37391493,7.67795139 4.78298611,7.83528646 5.06618924,8.11848958 C5.09765625,8.1499566 5.09765625,8.1499566 5.16059028,8.1499566 C5.22352431,8.18142361 5.28645833,8.11848958 5.31792535,8.05555556 Z",
                                id: "Path",
                              }),
                              ei("path", {
                                d: "M11.233724,3.99631076 C11.233724,3.99631076 11.233724,3.99631076 11.233724,3.99631076 L11.9574653,3.99631076 C12.0203993,3.99631076 12.0833333,3.96484375 12.0833333,3.90190972 L12.2406684,2.89496528 C12.2721354,2.80056424 12.3350694,2.73763021 12.4294705,2.73763021 L12.8700087,2.73763021 C13.7825521,2.73763021 14.3174913,2.29709201 14.4433594,1.41601562 C14.5062934,1.03841146 14.4433594,0.723741319 14.2860243,0.534939236 C14.0972222,0.283203125 13.7510851,0.188802083 13.2790799,0.188802083 L11.8945312,0.188802083 C11.8001302,0.188802083 11.7371962,0.251736111 11.7057292,0.346137153 L11.1393229,3.90190972 C11.1393229,3.93337674 11.1707899,3.99631076 11.233724,3.99631076 Z M12.5553385,1.00694444 C12.5553385,0.944010417 12.6182726,0.912543403 12.6497396,0.912543403 L12.7441406,0.912543403 C12.9958767,0.912543403 13.2161458,0.912543403 13.3420139,1.06987847 C13.4049479,1.16427951 13.4364149,1.29014757 13.4049479,1.44748264 C13.3420139,1.95095486 12.9644097,1.95095486 12.5868056,1.95095486 L12.3665365,1.95095486 L12.5553385,1.00694444 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M1.3530816,3.99631076 C1.3530816,3.99631076 1.3530816,3.99631076 1.3530816,3.99631076 L2.0453559,3.99631076 C2.13975694,3.99631076 2.23415799,3.93337674 2.23415799,3.83897569 L2.39149306,2.89496528 C2.42296007,2.80056424 2.4858941,2.73763021 2.58029514,2.73763021 L3.02083333,2.73763021 C3.93337674,2.73763021 4.46831597,2.29709201 4.59418403,1.41601562 C4.65711806,1.03841146 4.59418403,0.723741319 4.43684896,0.534939236 C4.24804687,0.314670139 3.90190972,0.188802083 3.42990451,0.188802083 L2.0453559,0.188802083 C1.95095486,0.188802083 1.88802083,0.251736111 1.85655382,0.346137153 L1.25868056,3.87044271 C1.25868056,3.93337674 1.29014757,3.99631076 1.3530816,3.99631076 Z M2.67469618,1.00694444 C2.67469618,0.944010417 2.73763021,0.912543403 2.76909722,0.912543403 L2.86349826,0.912543403 C3.11523437,0.912543403 3.33550347,0.912543403 3.46137153,1.06987847 C3.52430556,1.16427951 3.55577257,1.29014757 3.52430556,1.44748264 C3.46137153,1.95095486 3.08376736,1.95095486 2.70616319,1.95095486 L2.51736111,1.95095486 L2.67469618,1.00694444 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M4.65711806,3.71310764 C4.84592014,3.96484375 5.16059028,4.05924479 5.50672743,4.05924479 C5.85286458,4.05924479 6.16753472,3.93337674 6.41927083,3.68164063 L6.38780382,3.87044271 C6.38780382,3.93337674 6.41927083,3.99631076 6.48220486,3.99631076 C6.48220486,3.99631076 6.48220486,3.99631076 6.51367188,3.99631076 L7.11154514,3.99631076 C7.20594618,3.99631076 7.26888021,3.93337674 7.30034722,3.83897569 L7.64648437,1.57335069 C7.64648437,1.51041667 7.61501736,1.44748264 7.55208333,1.44748264 C7.55208333,1.44748264 7.52061632,1.44748264 7.52061632,1.44748264 L6.85980903,1.44748264 C6.796875,1.44748264 6.76540799,1.47894965 6.76540799,1.54188368 L6.73394097,1.73068576 L6.70247396,1.66775174 C6.54513889,1.44748264 6.23046875,1.38454861 5.91579861,1.38454861 C5.19205729,1.38454861 4.56271701,1.95095486 4.43684896,2.70616319 C4.34244792,3.05230035 4.43684896,3.42990451 4.65711806,3.71310764 Z M5.31792535,2.70616319 C5.38085938,2.32855903 5.69552951,2.07682292 6.07313368,2.07682292 C6.23046875,2.07682292 6.38780382,2.13975694 6.51367188,2.265625 C6.60807292,2.39149306 6.67100694,2.58029514 6.60807292,2.73763021 C6.54513889,3.11523437 6.23046875,3.3984375 5.85286458,3.36697049 C5.56966146,3.3984375 5.31792535,3.1781684 5.28645833,2.89496528 C5.28645833,2.83203125 5.28645833,2.76909722 5.31792535,2.70616319 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M14.5377604,3.71310764 C14.7265625,3.96484375 15.0412326,4.05924479 15.3873698,4.05924479 C15.7335069,4.05924479 16.0481771,3.93337674 16.2999132,3.68164062 L16.2684462,3.87044271 C16.2684462,3.93337674 16.2999132,3.99631076 16.3628472,3.99631076 C16.3628472,3.99631076 16.3628472,3.99631076 16.3943142,3.99631076 L16.9921875,3.99631076 C17.0865885,3.99631076 17.1495226,3.93337674 17.1809896,3.83897569 L17.5271267,1.57335069 C17.5271267,1.51041667 17.4956597,1.44748264 17.4327257,1.44748264 C17.4327257,1.44748264 17.4012587,1.44748264 17.4012587,1.44748264 L16.7404514,1.44748264 C16.6775174,1.44748264 16.6460503,1.47894965 16.6460503,1.54188368 L16.6145833,1.73068576 L16.5831163,1.66775174 C16.4257813,1.44748264 16.1111111,1.38454861 15.796441,1.38454861 C15.0726997,1.38454861 14.4433594,1.95095486 14.3174913,2.70616319 C14.2230903,3.05230035 14.3174913,3.42990451 14.5377604,3.71310764 Z M15.1671007,2.70616319 C15.2300347,2.32855903 15.5447049,2.07682292 15.922309,2.07682292 C16.0796441,2.07682292 16.2369792,2.13975694 16.3628472,2.265625 C16.4572483,2.39149306 16.5201823,2.58029514 16.4572483,2.73763021 C16.3943142,3.11523437 16.0796441,3.3984375 15.7020399,3.36697049 C15.5447049,3.36697049 15.3873698,3.30403646 15.2615017,3.1781684 C15.1671007,3.05230035 15.1356337,2.86349826 15.1671007,2.70616319 Z",
                                id: "Shape",
                              }),
                              ei("path", {
                                d: "M8.71636285,3.74457465 L8.02408854,4.72005208 C7.99262153,4.78298611 7.99262153,4.84592014 8.05555556,4.87738715 C8.08702257,4.90885417 8.08702257,4.90885417 8.11848958,4.90885417 L8.77929687,4.90885417 C8.8422309,4.90885417 8.90516493,4.87738715 8.93663194,4.81445312 L11.1393229,1.60481771 C11.1707899,1.54188368 11.1707899,1.47894965 11.1078559,1.44748264 C11.0763889,1.44748264 11.0763889,1.41601562 11.0449219,1.41601562 L10.3841146,1.41601562 C10.3211806,1.41601562 10.2582465,1.44748264 10.2267795,1.51041667 L9.31423611,2.86349826 L8.93663194,1.57335069 C8.90516493,1.47894965 8.8422309,1.44748264 8.74782986,1.44748264 L8.08702257,1.44748264 C8.02408854,1.44748264 7.96115451,1.51041667 7.96115451,1.57335069 C7.96115451,1.57335069 7.96115451,1.60481771 7.96115451,1.60481771 L8.71636285,3.74457465 Z",
                                id: "Path",
                              }),
                              ei("path", {
                                d: "M17.7159288,3.99631076 C17.7159288,3.99631076 17.7159288,3.99631076 17.7159288,3.99631076 L18.3138021,3.99631076 C18.4082031,3.99631076 18.4711372,3.93337674 18.5026042,3.83897569 L19.0690104,0.283203125 C19.0690104,0.220269097 19.0375434,0.157335069 18.9746094,0.157335069 C18.9746094,0.157335069 18.9746094,0.157335069 18.9431424,0.157335069 L18.3138021,0.157335069 C18.2508681,0.157335069 18.219401,0.188802083 18.187934,0.251736111 L17.6215278,3.87044271 C17.5900608,3.93337674 17.6529948,3.99631076 17.7159288,3.99631076 Z",
                                id: "Path",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              );
            },
          })
        );
      }
      ((ki = {}).default = { primary: "#003087" }),
        (ki.blue = { primary: "#003087" }),
        (ki.white = { primary: "#ffffff" }),
        (ki.black = { primary: "#333030" }),
        ((Ai = {}).default = { primary: "#c8036f", secondary: "#71706f" }),
        (Ai.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (Ai.black = { primary: "#71706F", secondary: "#C8036F" }),
        ((_i = {}).default = {
          primary: "#ED1C24",
          secondary: "#ffffff",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        (_i.white = {
          primary: "#FFFFFF",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#FFFFFF",
        }),
        (_i.black = {
          primary: "#ED1C24",
          secondary: "#FFFFFF",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        ((Mi = {}).default = {
          primary: "#000000",
          secondary: "#cd0067",
          tertiary: "#ffffff",
        }),
        (Mi.white = {
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff",
        }),
        (Mi.black = {
          primary: "#000000",
          secondary: "#FFFFFF",
          tertiary: "#CD0067",
        }),
        ((Ri = {}).default = { primary: "#00C0EE", secondary: "#1a4b67" }),
        (Ri.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (Ri.black = { primary: "#1A4B67", secondary: "#00C0EE" }),
        ((Fi = {}).default = { primary: "#d03238", secondary: "#b3b1b1" }),
        (Fi.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (Fi.black = { primary: "#d03238", secondary: "#b3b1b1" });
      var Hi,
        Wi,
        Zi = ["logoColor"],
        Ui = ["logoColor"],
        qi =
          (((Hi = {}).default = { primary: "#003087", secondary: "#009cde" }),
          (Hi.blue = { primary: "#003087", secondary: "#009cde" }),
          (Hi.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (Hi.black = { primary: "#333030", secondary: "#636363" }),
          (Hi.monochrome = { primary: "#000000", secondary: "#000000" }),
          Hi);
      function zi(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          r = l(n, Zi),
          o = bi("paypal", qi, t),
          i = o.primary,
          a = o.secondary;
        return ei(
          wi,
          E({}, r, r, {
            name: "paypal",
            alt: "PayPal",
            "aria-label": "PayPal",
            logoColor: t,
            render: function () {
              return ei(
                "svg",
                {
                  width: "101px",
                  height: "32",
                  viewBox: "0 0 101 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("path", {
                  fill: i,
                  d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z",
                }),
                ei("path", {
                  fill: i,
                  d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z",
                }),
                ei("path", {
                  fill: i,
                  d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z",
                }),
                ei("path", {
                  fill: a,
                  d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z",
                }),
                ei("path", {
                  fill: a,
                  d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z",
                }),
                ei("path", {
                  fill: a,
                  d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z",
                })
              );
            },
          })
        );
      }
      var Gi,
        Vi,
        Yi,
        Ki,
        Ji,
        Xi,
        $i,
        Qi =
          (((Wi = {}).default = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (Wi.blue = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (Wi.white = {
            primary: "#ffffff",
            primaryOpacity: "0.7",
            secondary: "#ffffff",
            secondaryOpacity: "0.7",
            tertiary: "#ffffff",
          }),
          (Wi.black = {
            primary: "#808080",
            secondary: "#000000",
            tertiary: "#1a1a1a",
          }),
          Wi);
      function na(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          r = l(n, Ui),
          o = bi("pp", Qi, t),
          i = o.primary,
          a = o.secondary,
          u = o.tertiary,
          c = o.primaryOpacity,
          s = void 0 === c ? "1" : c,
          d = o.secondaryOpacity,
          f = void 0 === d ? "1" : d,
          p = o.tertiaryOpacity,
          h = void 0 === p ? "1" : p;
        return ei(
          wi,
          E({}, r, r, {
            name: "pp",
            alt: "PP",
            "aria-label": "PP",
            logoColor: t,
            render: function () {
              return ei(
                "svg",
                {
                  width: "24",
                  height: "32",
                  viewBox: "0 0 24 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("path", {
                  fill: i,
                  opacity: s,
                  d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157",
                }),
                ei("path", {
                  fill: a,
                  opacity: f,
                  d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157",
                }),
                ei("path", {
                  fill: u,
                  opacity: h,
                  d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z",
                })
              );
            },
          })
        );
      }
      function ea(n) {
        var e = E({}, n);
        return ei(
          wi,
          E({}, e, {
            name: "pp",
            render: function () {
              return ei(
                "svg",
                {
                  width: "40px",
                  height: "25px",
                  viewBox: "0 0 40 25",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("title", null, "Group 53"),
                ei(
                  "defs",
                  null,
                  ei(
                    "radialGradient",
                    {
                      cx: "21.8145957%",
                      cy: "17.9147256%",
                      fx: "21.8145957%",
                      fy: "17.9147256%",
                      r: "154.485751%",
                      gradientTransform:
                        "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                      id: "radialGradient-1",
                    },
                    ei("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                    ei("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                  )
                ),
                ei(
                  "g",
                  {
                    id: "Page-1",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  ei(
                    "g",
                    {
                      id: "Group-53",
                      transform: "translate(0.410281, 0.000000)",
                    },
                    ei("rect", {
                      id: "Rectangle",
                      stroke: "#EAECED",
                      fill: "url(#radialGradient-1)",
                      x: "0.5",
                      y: "0.5",
                      width: "38",
                      height: "23.375",
                      rx: "2",
                    }),
                    ei(
                      "g",
                      {
                        id: "Group",
                        transform: "translate(10.968750, 4.875000)",
                      },
                      ei(
                        "g",
                        {
                          id: "paypal-mark-color",
                          transform: "translate(1.650391, 0.660156)",
                        },
                        ei("path", {
                          d: "M11.1896484,3.696875 C11.3876953,2.57460938 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054687 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.06972656,14.1273438 C3.03671875,14.3583984 3.20175781,14.5234375 3.39980469,14.5234375 L5.74335937,14.5234375 C6.04042969,14.5234375 6.27148437,14.2923828 6.30449219,14.0613281 L6.3375,13.9623047 L6.76660156,11.1896484 L6.79960938,11.0576172 C6.83261719,10.7935547 7.09667969,10.5955078 7.36074219,10.5955078 L7.72382813,10.5955078 C10.0013672,10.5955078 11.7837891,9.67128906 12.3119141,6.99765625 C12.5429687,5.90839844 12.4109375,4.95117188 11.8498047,4.29101563 C11.6847656,3.99394531 11.4537109,3.82890625 11.1896484,3.696875",
                          id: "Fill-8",
                          fill: "#009CDE",
                        }),
                        ei("path", {
                          d: "M11.1896484,3.696875 C11.3876953,2.57460937 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.9609375,8.48300781 L3.92792969,8.61503906 C3.99394531,8.28496094 4.29101562,8.05390625 4.58808594,8.05390625 L5.90839844,8.05390625 C8.51601562,8.05390625 10.5294922,6.99765625 11.1566406,3.9609375 C11.1566406,3.86191406 11.1896484,3.76289063 11.1896484,3.696875",
                          id: "Fill-9",
                          fill: "#012169",
                        }),
                        ei("path", {
                          d: "M4.753125,3.696875 C4.78613281,3.49882813 4.88515625,3.36679688 5.08320312,3.26777344 C5.14921875,3.23476563 5.21523438,3.20175781 5.34726562,3.20175781 L8.87910156,3.20175781 C9.27519531,3.23476563 9.67128906,3.26777344 10.0673828,3.30078125 C10.1664062,3.30078125 10.2654297,3.33378906 10.3644531,3.36679688 C10.4634766,3.39980469 10.5625,3.39980469 10.6615234,3.4328125 C10.6945312,3.4328125 10.7275391,3.46582031 10.7935547,3.46582031 C10.9916016,3.53183594 11.1236328,3.56484375 11.2556641,3.696875 C11.4537109,2.57460937 11.2556641,1.78242187 10.6285156,1.08925781 C9.96835937,0.330078125 8.74707031,0 7.16269531,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L4.753125,3.696875",
                          id: "Fill-10",
                          fill: "#003087",
                        })
                      )
                    )
                  )
                )
              );
            },
          })
        );
      }
      ((Gi = {}).default = { main: "#005DA0", card: "#AEB1BC" }),
        (Gi.white = { main: "#FFFFFF", card: "#FFFFFF" }),
        (Gi.black = { main: "#333030", card: "#333030" }),
        ((Vi = {}).default = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        (Vi.white = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
        (Vi.black = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        ((Yi = {}).default = { primary: "#3D93CE" }),
        (Yi.blue = { primary: "#3D93CE" }),
        (Yi.white = { primary: "#ffffff" }),
        (Yi.black = { primary: "#333030" }),
        ((Ki = {}).default = { primary: "#ffffff" }),
        (Ki.blue = { primary: "#003087" }),
        (Ki.white = { primary: "#ffffff" }),
        (Ki.black = { primary: "#333030" }),
        ((Ji = {}).default = { primary: "#1AAD19", secondary: "#4D4D4D" }),
        (Ji.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Ji.black = { primary: "#333030", secondary: "#333030" }),
        ((Xi = {}).default = { primary: "#00A599" }),
        (Xi.white = { primary: "#FFFFFF" }),
        (Xi.black = { primary: "#00A599" }),
        (($i = {}).default = {
          primary: "#A6d71c",
          secondary: "#3C932A",
          tertiary: "#6CC62E",
          quaternary: "#278D30",
        }),
        ($i.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#FFFFFF",
        }),
        ($i.black = {
          primary: "#333030",
          secondary: "#333030",
          tertiary: "#ffffff",
          quaternary: "#333030",
        });
      var ta,
        ra,
        oa,
        ia,
        aa,
        ua,
        la = ["logoColor"],
        ca =
          (((ta = {}).default = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482",
          }),
          (ta.white = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482",
          }),
          (ta.black = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF",
            quinary: "#000000",
            senary: "#000000",
          }),
          ta);
      ((ra = {}).default = {
        primary: "#4D4D4F",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#E83E49",
        quinary: "#FF00FF",
        senary: "#FFFFFF",
      }),
        (ra.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#000000",
          quinary: "#000000",
          senary: "#000000",
        }),
        (ra.black = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF",
        }),
        ((oa = {}).default = { primary: "#020202", secondary: "#64CC07" }),
        (oa.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (oa.black = { primary: "#000000", secondary: "#000000" }),
        ((ia = {}).default = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (ia.white = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (ia.black = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        ((aa = {}).default = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (aa.white = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (aa.black = { primary: "#1A1919", secondary: "#FFFFFE" }),
        ((ua = {}).default = { primary: "#004A91", secondary: "#ED1921" }),
        (ua.white = { primary: "#004A91", secondary: "#ED1921" }),
        (ua.black = { primary: "#004A91", secondary: "#ED1921" });
      var sa,
        da = ["logoColor"],
        fa =
          (((sa = {}).default = {
            primary: "#2D3277",
            secondary: "#FFFFFF",
            tertiary: "#009EE3",
            quaternary: "#009EE3",
          }),
          (sa.white = {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#FFFFFF",
            quaternary: "#000000",
          }),
          (sa.black = {
            primary: "#2D3277",
            secondary: "#FFFFFF",
            tertiary: "#009EE3",
            quaternary: "#009EE3",
          }),
          sa);
      function pa(n) {
        var e,
          t = n.context,
          r = n.close,
          o = n.focus,
          i = n.event,
          a = n.frame,
          u = n.prerenderFrame,
          l = n.content,
          c = void 0 === l ? {} : l,
          d = n.autoResize,
          f = n.hideCloseButton,
          p = n.nonce,
          h = "paypal-overlay-" + En(),
          y = function (n) {
            return function (e) {
              i.on("zoid-display", function () {
                return Re(e, "show-" + n, An);
              }),
                i.on("zoid-close", function () {
                  return Re(e, "hide-" + n, An);
                });
            };
          };
        return (
          a &&
            u &&
            (a.classList.add("component-frame"),
            u.classList.add("prerender-frame"),
            u.classList.add("visible"),
            a.classList.add("invisible"),
            i.on("zoid-rendered", function () {
              u.classList.remove("visible"),
                u.classList.add("invisible"),
                a.classList.remove("invisible"),
                a.classList.add("visible"),
                setTimeout(function () {
                  Ie(u);
                }, 1);
            }),
            (e = ei(
              "div",
              {
                class: "outlet",
                onRender: function (n) {
                  y("component")(n),
                    d &&
                      (function (n) {
                        i.on("zoid-resize", function (e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = nt(t)),
                            "number" == typeof r && (n.style.height = nt(r));
                        });
                      })(n);
                },
              },
              ei("node", { el: a }),
              ei("node", { el: u })
            ))),
          ei(
            "div",
            {
              id: h,
              onRender: y("container"),
              class: "paypal-checkout-sandbox",
            },
            ei(
              "style",
              { nonce: p },
              (function (n) {
                var e = n.uid;
                return (
                  "\n        #" +
                  e +
                  ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                  e +
                  ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                );
              })({ uid: h })
            ),
            ei(
              "iframe",
              {
                title: "PayPal Checkout Overlay",
                name: "__paypal_checkout_sandbox_" + h + "__",
                scrolling: "no",
                class: "paypal-checkout-sandbox-iframe",
              },
              ei(
                "html",
                null,
                ei(
                  "body",
                  null,
                  ei(
                    "div",
                    {
                      id: h,
                      onClick: function (n) {
                        var e;
                        n.preventDefault(),
                          n.stopPropagation(),
                          g() &&
                            (m()
                              ? window.alert(
                                  "Please switch tabs to reactivate the PayPal window"
                                )
                              : (void 0 === e && (e = s()),
                                /Firefox/i.test(e)
                                  ? window.alert(
                                      'Don\'t see the popup window?\n\nSelect "Window" in your toolbar to find "Log in to your PayPal account"'
                                    )
                                  : o()));
                      },
                      class:
                        "paypal-overlay-context-" +
                        t +
                        " paypal-checkout-overlay",
                    },
                    !f &&
                      ei("a", {
                        href: "#",
                        class: "paypal-checkout-close",
                        onClick: function (n) {
                          n.preventDefault(), n.stopPropagation(), r();
                        },
                        "aria-label": "close",
                        role: "button",
                      }),
                    ei(
                      "div",
                      { class: "paypal-checkout-modal" },
                      ei(
                        "div",
                        { class: "paypal-checkout-logo" },
                        ei(na, { logoColor: "white" }),
                        ei(zi, { logoColor: "white" })
                      ),
                      c.windowMessage &&
                        ei(
                          "div",
                          { class: "paypal-checkout-message" },
                          c.windowMessage
                        ),
                      c.continueMessage &&
                        ei(
                          "div",
                          { class: "paypal-checkout-continue" },
                          ei("a", { onClick: o, href: "#" }, c.continueMessage)
                        ),
                      ei(
                        "div",
                        { class: "paypal-checkout-loader" },
                        ei("div", { class: "paypal-spinner" })
                      )
                    ),
                    ei("div", { class: "paypal-checkout-iframe-container" }, e),
                    ei(
                      "style",
                      { nonce: p },
                      (function (n) {
                        var e = n.uid;
                        return (
                          "\n        #" +
                          e +
                          " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " a {\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before,\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.POPUP +
                          " {\n            cursor: pointer;\n        }\n\n        #" +
                          e +
                          " a {\n            text-decoration: none;\n        }\n\n        #" +
                          e +
                          ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        @media screen and (max-width: 470px) {\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet > iframe {\n                max-height: 85vh;\n            }\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .paypal-checkout-iframe-container,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          ho.IFRAME +
                          " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                        );
                      })({ uid: h })
                    )
                  )
                )
              )
            )
          )
        );
      }
      function ha() {
        return "https://www.sandbox.paypal.com/webapps/helios";
      }
      function ma() {
        return kn(ma, function () {
          var n = jo({
            tag: "three-domain-secure",
            url: ha,
            attributes: { iframe: { scrolling: "no" } },
            containerTemplate: function (n) {
              var e = n.doc,
                t = n.props;
              return ei(pa, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: t.content,
                nonce: t.nonce,
              }).render(ci({ doc: e }));
            },
            props: {
              action: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "verify";
                },
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "1";
                },
              },
              flow: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "3ds";
                },
              },
              createOrder: {
                type: "function",
                queryParam: "cart_id",
                queryValue: function (n) {
                  return A.try(n.value);
                },
              },
              clientID: { type: "string", value: Ot, queryParam: !0 },
              onSuccess: {
                type: "function",
                alias: "onContingencyResult",
                decorate: function (n) {
                  var e = n.value,
                    t = n.onError;
                  return function (n, r) {
                    return n || (r && !r.success) ? t(n) : e(!0);
                  };
                },
              },
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Qt,
              },
              content: { type: "object", required: !1 },
              userType: { type: "string", required: !1 },
              nonce: { type: "string", default: Wt },
            },
          });
          return (
            n.isChild() && (window.xchild = { props: n.xprops, close: An }), n
          );
        });
      }
      function ga(n) {
        return ei(
          "div",
          { class: "preloader spinner" },
          ei("style", {
            nonce: n.nonce,
            innerHTML:
              "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n",
          }),
          ei(
            "div",
            { class: "spinWrap" },
            ei("p", { class: "spinnerImage" }),
            ei("p", { class: "loader" })
          )
        );
      }
      function ya(n, e) {
        var t = n.nonce;
        return ei(
          "html",
          null,
          ei(
            "head",
            null,
            ei("title", null, "PayPal"),
            ei("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            })
          ),
          ei("body", null, ei(ga, { nonce: t }), e)
        );
      }
      var va = {
        ar: {
          windowMessage:
            "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
          continueMessage: "متابعة",
        },
        bg: {
          windowMessage:
            "Не виждате защитения браузър на PayPal? Ще ви помогнем да отворите отново прозореца, за да завършите покупката си",
          continueMessage: "Щракнете, за да продължите",
        },
        cs: {
          windowMessage:
            "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
          continueMessage: "Pokračovat",
        },
        da: {
          windowMessage:
            "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
          continueMessage: "Fortsæt",
        },
        de: {
          windowMessage:
            "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
          continueMessage: "Weiter",
        },
        el: {
          windowMessage:
            "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
          continueMessage: "Συνέχεια",
        },
        en: {
          windowMessage:
            "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
          continueMessage: "Click to Continue",
        },
        es: {
          windowMessage:
            "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
          continueMessage: "Continuar",
        },
        et: {
          windowMessage:
            "Kas te ei näe turvalist PayPali lehitsejat? Aitame teil ostu lõpuleviimiseks akna uuesti avada.",
          continueMessage: "Jätkamiseks klõpsake",
        },
        fi: {
          windowMessage:
            "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
          continueMessage: "Jatka",
        },
        fr: {
          windowMessage:
            "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
          continueMessage: "Continuer",
        },
        he: {
          windowMessage:
            "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
          continueMessage: "המשך",
        },
        hu: {
          windowMessage:
            "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
          continueMessage: "Folytatás",
        },
        id: {
          windowMessage:
            "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
          continueMessage: "Lanjutkan",
        },
        it: {
          windowMessage:
            "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
          continueMessage: "Continua",
        },
        ja: {
          windowMessage:
            "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
          continueMessage: "続行",
        },
        ko: {
          windowMessage:
            "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
          continueMessage: "계속",
        },
        lt: {
          windowMessage:
            "Nematote saugios „PayPal“ naršyklės? Padėsime iš naujo paleisti langą, kad užbaigtumėte pirkimą",
          continueMessage: "Paspauskite, jei norite tęsti",
        },
        lv: {
          windowMessage:
            "Vai neredzat drošo PayPal pārlūkprogrammu? Mēs palīdzēsim jums atkārtoti palaist logu, lai pabeigtu pirkumu.",
          continueMessage: "Noklikšķiniet, lai turpinātu",
        },
        ms: {
          windowMessage:
            "Tidak melihat pelayar PayPal yang selamat? Kami akan membantu anda melancarkan semula tetingkap untuk melengkapkan pembelian anda",
          continueMessage: "Klik untuk Meneruskan",
        },
        no: {
          windowMessage:
            "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
          continueMessage: "Fortsett",
        },
        nl: {
          windowMessage:
            "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
          continueMessage: "Doorgaan",
        },
        pl: {
          windowMessage:
            "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
          continueMessage: "Kontynuuj",
        },
        pt: {
          windowMessage:
            "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
          continueMessage: "Continuar",
        },
        ro: {
          windowMessage:
            "Nu vezi browser-ul securizat PayPal? Te vom ajuta să lansezi din nou fereastra pentru a finaliza achiziția",
          continueMessage: "Dă clic pentru a continua",
        },
        ru: {
          windowMessage:
            "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
          continueMessage: "Продолжить",
        },
        si: {
          windowMessage:
            "ආරක්ෂිත PayPal බ්‍රව්සරය නොපෙනේ ද? ඔබේ මිල දී ගැනීම සම්පූර්ණ කිරීම සඳහා අපි ඔබට කවුළුව නැවත දියත් කිරීමට උපකාර කරන්නෙමු",
          continueMessage: "ඉදිරියට යාමට ක්ලික් කරන්න",
        },
        sk: {
          windowMessage:
            "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
          continueMessage: "Pokračovať",
        },
        sl: {
          windowMessage:
            "Ne vidite PayPalovega varnega brskalnika? Pomagali vam bomo ponovno zagnati okno za dokončanje nakupa",
          continueMessage: "Kliknite za nadaljevanje",
        },
        sq: {
          windowMessage:
            "Nuk e shikon shfletuesin e sigurt të PayPal? Do të të ndihmojmë të rihapësh dritaren për të përfunduar blerjen",
          continueMessage: "Kliko për të vazhduar",
        },
        sv: {
          windowMessage:
            "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
          continueMessage: "Fortsätt",
        },
        th: {
          windowMessage:
            "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
          continueMessage: "ดำเนินการต่อ",
        },
        tl: {
          windowMessage:
            "Hindi nakikita ang secure na PayPal browser? Tutulungan ka naming i-launch ulit ang window para makumpleto ang pagbili mo.",
          continueMessage: "I-click para Magpatuloy",
        },
        tr: {
          windowMessage:
            "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
          continueMessage: "Devam",
        },
        vi: {
          windowMessage:
            "Bạn không thấy trình duyệt PayPal bảo mật? Chúng tôi sẽ giúp bạn mở lại cửa sổ để hoàn tất giao dịch mua hàng",
          continueMessage: "Nhấp để tiếp tục",
        },
        zh: {
          windowMessage:
            "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
          continueMessage: "继续",
        },
        zh_Hant: {
          windowMessage:
            "看不到安全 PayPal 瀏覽器？我們會協助你重新啟動視窗，以完成購物程序",
          continueMessage: "按一下並繼續",
        },
      };
      function wa() {
        return kn(wa, function () {
          var n = jo({
            tag: "paypal-checkout",
            url: function () {
              return "https://www.sandbox.paypal.com/checkoutnow";
            },
            attributes: { iframe: { scrolling: "yes" } },
            defaultContext: g() ? ho.POPUP : ho.IFRAME,
            domain: Kt(),
            logger: Xt(),
            prerenderTemplate: function (n) {
              var e = n.doc;
              return ei(ya, { nonce: n.props.nonce }).render(ci({ doc: e }));
            },
            containerTemplate: function (n) {
              var e = n.doc,
                t = n.props;
              return ei(pa, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: va[t.locale.lang],
                nonce: t.nonce,
              }).render(ci({ doc: e }));
            },
            props: {
              clientID: {
                type: "string",
                value: function () {
                  return Ot();
                },
                queryParam: !0,
              },
              sessionID: { type: "string", value: Uo, queryParam: !0 },
              buttonSessionID: { type: "string", queryParam: !0, required: !1 },
              stickinessID: { type: "string", queryParam: !0, required: !1 },
              env: { type: "string", queryParam: !0, value: ct },
              sdkMeta: { type: "string", queryParam: !0, value: Qt },
              nonce: {
                type: "string",
                required: !1,
                value: Wt,
                allowDelegate: !0,
              },
              createAuthCode: {
                type: "function",
                queryParam: "code",
                required: !1,
                queryValue: function (n) {
                  return A.try(n.value);
                },
                decorate: function (n) {
                  return Nn(n.value);
                },
              },
              buyerCountry: {
                type: "string",
                queryParam: !0,
                required: !1,
                default: Rt,
              },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function (n) {
                  var e = n.value;
                  return e.lang + "_" + e.country;
                },
                value: Ht,
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function (n) {
                  return A.try(n.value);
                },
                decorate: function (n) {
                  return Nn(n.value);
                },
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "1";
                },
              },
              version: { type: "string", queryParam: !0, value: ft },
              commit: { type: "boolean", queryParam: !0, value: Nt },
              fundingSource: {
                type: "string",
                queryParam: !0,
                default: function () {
                  return ut.PAYPAL;
                },
              },
              standaloneFundingSource: {
                type: "string",
                queryParam: !0,
                required: !1,
              },
              branded: { type: "boolean", queryParam: !0, required: !1 },
              enableFunding: { type: "array", queryParam: !0, required: !1 },
              onApprove: { type: "function", alias: "onAuthorize" },
              onShippingChange: { type: "function", required: !1 },
              clientMetadataID: {
                type: "string",
                required: !1,
                default: ar,
                queryParam: "client-metadata-id",
              },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              accessToken: { type: "string", required: !1 },
              onCancel: { type: "function", required: !1 },
              onFocused: {
                type: "function",
                value: function (n) {
                  var e = n.event;
                  return function (n) {
                    return e.on("zoid-focus", n);
                  };
                },
              },
              test: {
                type: "object",
                default: function () {
                  return window.__test__ || { action: "checkout" };
                },
              },
            },
            dimensions: function (n) {
              var e = n.props;
              return "object" == typeof e.dimensions
                ? {
                    width: e.dimensions.width + "px",
                    height: e.dimensions.height + "px",
                  }
                : f()
                ? { width: "100%", height: "590px" }
                : { width: "500px", height: "590px" };
            },
          });
          return (
            n.isChild() &&
              ((window.xchild = { props: n.xprops, show: An, hide: An }),
              (function () {
                try {
                  if (!window.injector) return;
                  var n = window.injector.get("$util");
                  if (!n || !n.redirect) return;
                  var e = n.redirect;
                  n.redirect = function (n) {
                    try {
                      -1 !== n.indexOf("/ppcreditapply") &&
                        -1 !== n.indexOf("key=") &&
                        -1 === n.indexOf("sdkMeta") &&
                        (n += "&sdkMeta=" + Qt());
                    } catch (n) {}
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    return e.call.apply(e, [this, n].concat(r));
                  };
                } catch (n) {}
              })()),
            n
          );
        });
      }
      var Ca = [
          ut.PAYPAL,
          ut.VENMO,
          ut.ITAU,
          ut.CREDIT,
          ut.PAYLATER,
          ut.APPLEPAY,
          ut.IDEAL,
          ut.SEPA,
          ut.BANCONTACT,
          ut.GIROPAY,
          ut.EPS,
          ut.SOFORT,
          ut.MYBANK,
          ut.BLIK,
          ut.P24,
          ut.ZIMPLER,
          ut.WECHATPAY,
          ut.PAYU,
          ut.VERKKOPANKKI,
          ut.TRUSTLY,
          ut.OXXO,
          ut.BOLETO,
          ut.MAXIMA,
          ut.MERCADOPAGO,
          ut.CARD,
        ],
        ba = [ut.PAYPAL, ut.ITAU],
        Ea = function () {
          return rr(function (n) {
            return (
              (n.funding = n.funding || {}),
              Object.keys(n.funding).filter(function (e) {
                var t = n.funding[e];
                return !(
                  (t.expiry && Date.now() > t.expiry) ||
                  !n.funding[e].remembered
                );
              })
            );
          });
        };
      function La(n) {
        return -1 !== Ea().indexOf(n);
      }
      var xa,
        Oa,
        Pa,
        Ta,
        Na = function () {
          for (var n = gt(), e = 0; e < ba.length; e++) {
            var t,
              r = ba[e];
            if (La(r)) {
              var o = n[r];
              o &&
                (n = E(
                  {},
                  n,
                  (((t = {})[r] = E({}, o, { eligible: !0, recommended: !0 })),
                  t)
                ));
            }
          }
          return n;
        },
        Sa = {
          PAYPAL: "paypal",
          CHECKOUT: "checkout",
          BUYNOW: "buynow",
          PAY: "pay",
          INSTALLMENT: "installment",
          SUBSCRIBE: "subscribe",
          DONATE: "donate",
        },
        ka = {
          TINY: "tiny",
          SMALL: "small",
          MEDIUM: "medium",
          LARGE: "large",
          HUGE: "huge",
          RESPONSIVE: "responsive",
        },
        Aa = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
        _a = {
          CONTAINER: "paypal-button-container",
          BUTTON_ROW: "paypal-button-row",
          BUTTON: "paypal-button",
          BUTTON_LABEL: "paypal-button-label-container",
          LABEL: "paypal-button-label",
          COLOR: "paypal-button-color",
          TEXT_COLOR: "paypal-button-text-color",
          SHAPE: "paypal-button-shape",
          LAYOUT: "paypal-button-layout",
          NUMBER: "paypal-button-number",
          ENV: "paypal-button-env",
          WALLET: "paypal-button-wallet",
          WALLET_MENU: "paypal-button-wallet-menu",
          LOADING: "paypal-button-loading",
          SPINNER: "paypal-button-spinner",
          TAGLINE: "paypal-button-tagline",
          POWERED_BY: "paypal-powered-by",
          TEXT: "paypal-button-text",
          SPACE: "paypal-button-space",
          CARD: "paypal-button-card",
          PERSONALIZATION_TEXT: "paypal-personalization-text",
          VAULT_LABEL: "paypal-vault-label",
          VAULT_HEADER: "paypal-vault-header",
          SEPARATOR: "paypal-separator",
          DOM_READY: "dom-ready",
          HIDDEN: "hidden",
          IMMEDIATE: "immediate",
        },
        Ma = t(3),
        Ra = t.n(Ma),
        Fa = ["optional", "className", "animate"];
      function Da(n, e) {
        var t = n.optional,
          r = n.className,
          o = void 0 === r ? [] : r,
          i = n.animate,
          a = l(n, Fa);
        return ei(
          "span",
          E(
            {
              class: [_a.TEXT]
                .concat(o, [i || _a.IMMEDIATE])
                .filter(Boolean)
                .join(" "),
              optional: t,
            },
            a,
            { "data-v-169940eb": "" }
          ),
          e
        );
      }
      function Ia() {
        return ei(
          "span",
          { class: [_a.SPACE].join(" "), "data-v-169940eb": "" },
          " "
        );
      }
      function ja(n) {
        var e = n.chars,
          t = n.color;
        return ei(
          fi,
          { css: Ra.a, "data-v-169940eb": "" },
          ei(
            "div",
            {
              class: [
                "placeholder",
                "color-" + (void 0 === t ? "white" : t),
              ].join(" "),
              "data-v-169940eb": "",
            },
            new Array(e).fill("x").join("")
          )
        );
      }
      function Ba(n) {
        return n.logo;
      }
      var Ha = {
        enabled: !0,
        automatic: !0,
        layouts: [Aa.VERTICAL],
        platforms: [lt.DESKTOP, lt.MOBILE],
        flows: ["purchase"],
        colors: ["silver", "black", "white"],
        logoColors: ((xa = {}), (xa.black = "white"), xa),
        shapes: ["rect", "pill"],
        textColors:
          ((Oa = {}),
          (Oa.default = "black"),
          (Oa.blue = "white"),
          (Oa.black = "white"),
          (Oa.darkblue = "white"),
          Oa),
        secondaryColors:
          ((Pa = {}),
          (Pa.default = "silver"),
          (Pa.black = "black"),
          (Pa.white = "white"),
          Pa),
        secondaryVaultColors:
          ((Ta = {}),
          (Ta.default = "silver"),
          (Ta.black = "black"),
          (Ta.white = "white"),
          Ta),
        Logo: function () {
          throw new Error("Not implemented");
        },
        Label: Ba,
        showWalletMenu: function () {
          return !0;
        },
      };
      function Wa(n) {
        var e = n.url;
        return ei(
          ti,
          null,
          ei("style", {
            nonce: n.nonce,
            innerHTML:
              "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                ",
          }),
          ei("img", { class: "tracking-beacon", src: e })
        );
      }
      var Za,
        Ua,
        qa,
        za = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n",
        Ga = "\n    max-width: 100%;\n    opacity: 1;\n",
        Va = "\n    position: static;\n    visibility: visible;\n",
        Ya =
          "\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.TEXT +
          " {\n        height: 100%;\n        \n    position: absolute;\n    visibility: hidden;\n\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.TEXT +
          "." +
          _a.IMMEDIATE +
          ":not(." +
          _a.PERSONALIZATION_TEXT +
          "):not(." +
          _a.HIDDEN +
          ") {\n        " +
          Va +
          "\n        " +
          Ga +
          "\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.VAULT_LABEL +
          " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." +
          _a.DOM_READY +
          " ." +
          _a.BUTTON +
          " ." +
          _a.TEXT +
          ":not(." +
          _a.IMMEDIATE +
          "):not(." +
          _a.PERSONALIZATION_TEXT +
          "):not(." +
          _a.HIDDEN +
          ") {\n        " +
          Va +
          "\n        " +
          za +
          "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " +
          za +
          " }\n        100% { " +
          Ga +
          " }\n    }\n",
        Ka = t(2),
        Ja = t.n(Ka);
      function Xa(n) {
        return ei(zi, { logoColor: n.logoColor, "data-v-3ab75360": "" });
      }
      function $a(n) {}
      function Qa(n) {
        return ei(
          ti,
          { "data-v-3ab75360": "" },
          ei(Ba, E({}, n, { "data-v-3ab75360": "" })),
          ei($a, E({}, n, { "data-v-3ab75360": "" }))
        );
      }
      function nu(n) {
        var e = n.buttonAnimationComponent;
        delete n.buttonAnimationComponent;
        var t = ei(Ba, E({}, n, { "data-v-3ab75360": "" })),
          r = ei($a, E({}, n, { "data-v-3ab75360": "" }));
        return ei(ti, { "data-v-3ab75360": "" }, t, e, r);
      }
      function eu(n) {
        var e = n.logoColor,
          t = n.instrument,
          r = n.content,
          o = n.commit,
          i = n.vault,
          a = n.textColor,
          u = n.fundingSource;
        if (!t || t.type) {
          var l, c, s;
          (s =
            t && "boolean" == typeof t.branded
              ? t.branded
              : u === ut.PAYPAL || u === ut.CREDIT || u !== ut.CARD),
            t &&
              ("card" === t.type && t.label
                ? ((l = t.logoUrl
                    ? ei("img", {
                        class: "card-art",
                        src: t.logoUrl,
                        "data-v-3ab75360": "",
                      })
                    : ei(ji, { logoColor: e, "data-v-3ab75360": "" })),
                  (c = t.label.replace("••••", "••")))
                : "bank" === t.type && t.label
                ? ((l = t.logoUrl
                    ? ei("img", {
                        class: "card-art",
                        src: t.logoUrl,
                        "data-v-3ab75360": "",
                      })
                    : ei(Oi, { logoColor: e, "data-v-3ab75360": "" })),
                  (c = t.label.replace("••••", "••")))
                : "credit" === t.type
                ? ((l = ei(Bi, { "data-v-3ab75360": "" })), (c = r && r.credit))
                : "balance" === t.type
                ? ((l = ei(ea, { "data-v-3ab75360": "" })),
                  (c = r && r.balance))
                : t.label && (c = t.label));
          var d = Boolean(t && t.oneClick && o && !i),
            f = {};
          return (
            d && (f["data-pay-now"] = !0),
            ei(
              fi,
              { css: Ja.a, "data-v-3ab75360": "" },
              ei(
                "div",
                E({ class: "wallet-label-new" }, f, { "data-v-3ab75360": "" }),
                s
                  ? ei(
                      "div",
                      { class: "paypal-mark", "data-v-3ab75360": "" },
                      ei(na, { logoColor: e, "data-v-3ab75360": "" }),
                      ei(Ia, { "data-v-3ab75360": "" })
                    )
                  : null,
                ei(
                  "div",
                  { class: "pay-label", optional: 2, "data-v-3ab75360": "" },
                  ei(Ia, { "data-v-3ab75360": "" }),
                  ei(
                    Da,
                    { "data-v-3ab75360": "" },
                    t && r
                      ? d
                        ? r.payNow
                        : r.payWith
                      : ei(ja, { chars: 7, color: a, "data-v-3ab75360": "" })
                  ),
                  ei(Ia, { "data-v-3ab75360": "" })
                ),
                ei(
                  "div",
                  { class: "logo", optional: 1, "data-v-3ab75360": "" },
                  t && l
                    ? l
                    : ei(
                        Da,
                        { "data-v-3ab75360": "" },
                        ei(ja, { chars: 4, color: a, "data-v-3ab75360": "" })
                      )
                ),
                ei(
                  "div",
                  { class: "label", "data-v-3ab75360": "" },
                  ei(Ia, { "data-v-3ab75360": "" }),
                  ei(
                    Da,
                    { "data-v-3ab75360": "" },
                    t && c
                      ? c
                      : ei(ja, { chars: 6, color: a, "data-v-3ab75360": "" })
                  )
                )
              )
            )
          );
        }
      }
      function tu(n) {
        return null;
      }
      function ru() {
        return kn(ru, function () {
          var n, e;
          return (
            ((n = {})[ut.PAYPAL] = E({}, Ha, {
              flows: ["purchase", "billing_setup", "subscription_setup"],
              layouts: [Aa.VERTICAL, Aa.HORIZONTAL],
              colors: ["gold", "blue", "silver", "black", "white"],
              logoColors:
                ((e = {}),
                (e.gold = "blue"),
                (e.silver = "blue"),
                (e.blue = "white"),
                (e.black = "white"),
                (e.white = "blue"),
                e),
              labelText: "PayPal",
              Logo: Xa,
              Label: Qa,
              WalletLabel: eu,
              Tag: tu,
            })),
            (n[ut.VENMO] = null),
            (n[ut.APPLEPAY] = null),
            (n[ut.ITAU] = null),
            (n[ut.CREDIT] = null),
            (n[ut.PAYLATER] = null),
            (n[ut.CARD] = (function () {
              var n,
                e,
                t,
                r,
                o =
                  (((r = {}).visa = { Label: Ni }),
                  (r.amex = { Label: Pi }),
                  (r.mastercard = { Label: Ti }),
                  (r.discover = null),
                  (r.jcb = null),
                  (r.elo = null),
                  (r.hiper = null),
                  r),
                i = (((n = {})[tt.BR] = 5), n);
              return E({}, Ha, {
                eligible: function (n) {
                  var e = n.fundingSource,
                    t = n.wallet,
                    r = n.fundingEligibility.card,
                    o = Boolean(-1 !== n.components.indexOf("hosted-fields")),
                    i = Boolean(r && r.eligible),
                    a = Boolean(r && r.branded),
                    u = Boolean(
                      t &&
                        t.card &&
                        t.card.instruments &&
                        t.card.instruments.length
                    );
                  return !(!i || (!a && !u && e !== ut.CARD && o));
                },
                flows: ["purchase", "billing_setup", "subscription_setup"],
                layouts: [Aa.VERTICAL],
                maxCards: i,
                vendors: o,
                colors: ["black", "white"],
                secondaryColors: E(
                  {},
                  Ha.secondaryColors,
                  ((e = {}), (e.default = "black"), e)
                ),
                logoColors:
                  ((t = {}), (t.white = "black"), (t.default = "white"), t),
                labelText: function (n) {
                  return ut.CARD;
                },
                Logo: function (n) {
                  return ei(ji, { logoColor: n.logoColor });
                },
                Label: function (n) {
                  return ei(ti, null, null, n.logo, null);
                },
                WalletLabel: eu,
                showWalletMenu: function (n) {
                  return !n.instrument.branded;
                },
              });
            })()),
            (n[ut.IDEAL] = null),
            (n[ut.SEPA] = null),
            (n[ut.BANCONTACT] = null),
            (n[ut.GIROPAY] = null),
            (n[ut.SOFORT] = null),
            (n[ut.EPS] = null),
            (n[ut.MYBANK] = null),
            (n[ut.P24] = null),
            (n[ut.PAYU] = null),
            (n[ut.VERKKOPANKKI] =
              void 0 !==
                Object({
                  paypal: Object({ eligible: !0, vaultable: !0 }),
                  paylater: Object({
                    eligible: !1,
                    merchantConfigHash:
                      "d45c6e1f1ce03b33bc512247a2ccc454e48245e5",
                    products: Object({
                      payIn4: Object({ eligible: !1, variant: null }),
                      paylater: Object({ eligible: !1, variant: null }),
                    }),
                  }),
                  card: Object({
                    eligible: !0,
                    branded: !0,
                    installments: !1,
                    vendors: Object({
                      visa: Object({ eligible: !0, vaultable: !0 }),
                      mastercard: Object({ eligible: !0, vaultable: !0 }),
                      amex: Object({ eligible: !0, vaultable: !0 }),
                      discover: Object({ eligible: !1, vaultable: !0 }),
                      hiper: Object({ eligible: !1, vaultable: !1 }),
                      elo: Object({ eligible: !1, vaultable: !0 }),
                      jcb: Object({ eligible: !1, vaultable: !0 }),
                    }),
                    guestEnabled: !1,
                  }),
                  venmo: Object({ eligible: !1 }),
                  itau: Object({ eligible: !1 }),
                  credit: Object({ eligible: !1 }),
                  applepay: Object({ eligible: !1 }),
                  sepa: Object({ eligible: !1 }),
                  ideal: Object({ eligible: !1 }),
                  bancontact: Object({ eligible: !1 }),
                  giropay: Object({ eligible: !1 }),
                  eps: Object({ eligible: !1 }),
                  sofort: Object({ eligible: !1 }),
                  mybank: Object({ eligible: !1 }),
                  p24: Object({ eligible: !1 }),
                  zimpler: Object({ eligible: !1 }),
                  wechatpay: Object({ eligible: !1 }),
                  payu: Object({ eligible: !1 }),
                  blik: Object({ eligible: !1 }),
                  trustly: Object({ eligible: !1 }),
                  oxxo: Object({ eligible: !1 }),
                  maxima: Object({ eligible: !1 }),
                  boleto: Object({ eligible: !1 }),
                  mercadopago: Object({ eligible: !0 }),
                }).verkkopankki &&
              Object({
                paypal: Object({ eligible: !0, vaultable: !0 }),
                paylater: Object({
                  eligible: !1,
                  merchantConfigHash:
                    "d45c6e1f1ce03b33bc512247a2ccc454e48245e5",
                  products: Object({
                    payIn4: Object({ eligible: !1, variant: null }),
                    paylater: Object({ eligible: !1, variant: null }),
                  }),
                }),
                card: Object({
                  eligible: !0,
                  branded: !0,
                  installments: !1,
                  vendors: Object({
                    visa: Object({ eligible: !0, vaultable: !0 }),
                    mastercard: Object({ eligible: !0, vaultable: !0 }),
                    amex: Object({ eligible: !0, vaultable: !0 }),
                    discover: Object({ eligible: !1, vaultable: !0 }),
                    hiper: Object({ eligible: !1, vaultable: !1 }),
                    elo: Object({ eligible: !1, vaultable: !0 }),
                    jcb: Object({ eligible: !1, vaultable: !0 }),
                  }),
                  guestEnabled: !1,
                }),
                venmo: Object({ eligible: !1 }),
                itau: Object({ eligible: !1 }),
                credit: Object({ eligible: !1 }),
                applepay: Object({ eligible: !1 }),
                sepa: Object({ eligible: !1 }),
                ideal: Object({ eligible: !1 }),
                bancontact: Object({ eligible: !1 }),
                giropay: Object({ eligible: !1 }),
                eps: Object({ eligible: !1 }),
                sofort: Object({ eligible: !1 }),
                mybank: Object({ eligible: !1 }),
                p24: Object({ eligible: !1 }),
                zimpler: Object({ eligible: !1 }),
                wechatpay: Object({ eligible: !1 }),
                payu: Object({ eligible: !1 }),
                blik: Object({ eligible: !1 }),
                trustly: Object({ eligible: !1 }),
                oxxo: Object({ eligible: !1 }),
                maxima: Object({ eligible: !1 }),
                boleto: Object({ eligible: !1 }),
                mercadopago: Object({ eligible: !0 }),
              }).verkkopankki.eligible
                ? E({}, Ha, {
                    automatic: !1,
                    layouts: [Aa.VERTICAL],
                    shippingChange: !1,
                    Logo: function (n) {
                      return (function (n) {
                        var e = n.logoColor,
                          t = void 0 === e ? "default" : e,
                          r = l(n, la),
                          o = bi("verkkopankki", ca, t),
                          i = o.primary,
                          a = o.secondary,
                          u = o.tertiary,
                          c = o.quaternary,
                          s = o.quinary,
                          d = o.senary;
                        return ei(
                          wi,
                          E({}, r, {
                            name: "verkkopankki",
                            logoColor: t,
                            render: function () {
                              return ei(
                                "svg",
                                {
                                  width: "83px",
                                  height: "32px",
                                  viewBox: "0 0 83 32",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                ei(
                                  "defs",
                                  null,
                                  ei("path", {
                                    d: "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                    id: "path-1",
                                  }),
                                  ei(
                                    "linearGradient",
                                    {
                                      x1: "80.3415915%",
                                      y1: "2.75555705%",
                                      x2: "19.6584085%",
                                      y2: "97.2445831%",
                                      id: "linearGradient-3",
                                    },
                                    ei("stop", {
                                      "stop-color": i,
                                      offset: "0%",
                                    }),
                                    ei("stop", {
                                      "stop-color": a,
                                      offset: "100%",
                                    })
                                  ),
                                  ei("path", {
                                    d: "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                    id: "path-4",
                                  }),
                                  ei(
                                    "linearGradient",
                                    {
                                      x1: "6.10096128%",
                                      y1: "89.4646408%",
                                      x2: "93.8990386%",
                                      y2: "10.5354941%",
                                      id: "linearGradient-6",
                                    },
                                    ei("stop", {
                                      "stop-color": i,
                                      offset: "0%",
                                    }),
                                    ei("stop", {
                                      "stop-color": a,
                                      offset: "100%",
                                    })
                                  ),
                                  ei("polygon", {
                                    id: "path-7",
                                    points:
                                      "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                  }),
                                  ei(
                                    "linearGradient",
                                    {
                                      x1: "6.26612168%",
                                      y1: "82.243184%",
                                      x2: "78.1338463%",
                                      y2: "17.635184%",
                                      id: "linearGradient-9",
                                    },
                                    ei("stop", {
                                      "stop-color": u,
                                      offset: "0%",
                                    }),
                                    ei("stop", {
                                      "stop-color": c,
                                      offset: "100%",
                                    })
                                  ),
                                  ei("polygon", {
                                    id: "path-10",
                                    points:
                                      "0.106675 0.228266667 3.17249309 0.228266667 3.17249309 6.24822519 0.106675 6.24822519",
                                  }),
                                  ei("polygon", {
                                    id: "path-12",
                                    points:
                                      "0.2434 0.228266667 3.30921809 0.228266667 3.30921809 6.24822519 0.2434 6.24822519",
                                  }),
                                  ei("polygon", {
                                    id: "path-14",
                                    points:
                                      "0.0454 0.228266667 3.11102683 0.228266667 3.11102683 6.24822519 0.0454 6.24822519",
                                  }),
                                  ei("polygon", {
                                    id: "path-16",
                                    points:
                                      "0.181875 0.228266667 3.24775183 0.228266667 3.24775183 6.24822519 0.181875 6.24822519",
                                  }),
                                  ei("polygon", {
                                    id: "path-18",
                                    points:
                                      "0.1455 0.211057778 0.90525 0.211057778 0.90525 1.20969481 0.1455 1.20969481",
                                  }),
                                  ei("polygon", {
                                    id: "path-20",
                                    points:
                                      "0 31.762963 82.90525 31.762963 82.90525 0.228266667 0 0.228266667",
                                  })
                                ),
                                ei(
                                  "g",
                                  {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd",
                                  },
                                  ei(
                                    "g",
                                    {
                                      transform:
                                        "translate(-219.000000, -536.000000)",
                                    },
                                    ei(
                                      "g",
                                      {
                                        transform:
                                          "translate(219.000000, 536.000000)",
                                      },
                                      ei(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.482844)",
                                        },
                                        ei(
                                          "mask",
                                          { fill: i },
                                          ei("use", { href: "#path-1" })
                                        ),
                                        ei("path", {
                                          d: "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                          fill: "url(#linearGradient-3)",
                                          mask: "url(#mask-2)",
                                        })
                                      ),
                                      ei(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)",
                                        },
                                        ei(
                                          "mask",
                                          { fill: i },
                                          ei("use", { href: "#path-4" })
                                        ),
                                        ei("path", {
                                          d: "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                          fill: "url(#linearGradient-6)",
                                          mask: "url(#mask-5)",
                                        })
                                      ),
                                      ei(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)",
                                        },
                                        ei(
                                          "mask",
                                          { id: "mask-8", fill: i },
                                          ei("use", { href: "#path-7" })
                                        ),
                                        ei("polygon", {
                                          id: "Fill-7",
                                          fill: "url(#linearGradient-9)",
                                          mask: "url(#mask-8)",
                                          points:
                                            "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                        })
                                      ),
                                      ei(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.008770)",
                                        },
                                        ei("path", {
                                          d: "M41.86625,0.448142222 L41.4055,0.448142222 C41.353,0.448142222 41.30625,0.480142222 41.2895,0.527312593 L39.593,5.31949037 L37.89675,0.527312593 C37.88,0.480142222 37.83325,0.448142222 37.7805,0.448142222 L37.312,0.448142222 C37.2725,0.448142222 37.2355,0.466157037 37.2125,0.496734815 C37.1895,0.527075556 37.1835,0.566186667 37.196,0.601505185 L39.18525,6.16926815 C39.202,6.21643852 39.24875,6.24820148 39.30125,6.24820148 L39.877,6.24820148 C39.9295,6.24820148 39.97625,6.21643852 39.993,6.16926815 L41.98225,0.601505185 C41.995,0.566186667 41.9887546,0.527075556 41.96575,0.496734815 C41.94275,0.466157037 41.90575,0.448142222 41.86625,0.448142222",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M42.770925,3.87662222 C42.776925,3.51656296 42.812175,3.23591111 42.875675,3.04106667 C42.940925,2.84148148 43.045425,2.7058963 43.194675,2.62648889 C43.352175,2.54305185 43.589175,2.50085926 43.899175,2.50085926 C44.163925,2.50085926 44.371675,2.52764444 44.515675,2.58026667 C44.645425,2.62767407 44.736675,2.70684444 44.795175,2.82228148 C44.858175,2.94625185 44.890175,3.12853333 44.890175,3.3632 C44.890175,3.5634963 44.845925,3.69884444 44.758675,3.76616296 C44.663925,3.83964444 44.498675,3.87662222 44.267925,3.87662222 L42.770925,3.87662222 Z M45.209425,4.16983704 C45.430425,3.99845926 45.542675,3.72681481 45.542675,3.3632 C45.542675,3.01238519 45.483675,2.72865185 45.366925,2.52005926 C45.245425,2.30364444 45.058675,2.14767407 44.811175,2.05641481 C44.578175,1.97084444 44.271425,1.92722963 43.899175,1.92722963 C43.455925,1.92722963 43.099425,1.99312593 42.840175,2.12278519 C42.569425,2.25742222 42.372675,2.48995556 42.255175,2.81374815 C42.143675,3.12047407 42.087175,3.55306667 42.087175,4.09896296 C42.087175,4.64035556 42.140925,5.07105185 42.246925,5.37896296 C42.358175,5.70417778 42.548675,5.94168889 42.813175,6.08462222 C43.068925,6.22305185 43.426425,6.29345185 43.876175,6.29345185 C44.339425,6.29345185 44.832675,6.26500741 45.341925,6.2093037 C45.403675,6.20266667 45.450425,6.15312593 45.450425,6.09386667 L45.450425,5.82838519 C45.450425,5.76438519 45.395425,5.71223704 45.327925,5.71223704 L43.975925,5.71223704 C43.640425,5.71223704 43.385175,5.66767407 43.217675,5.57925926 C43.057675,5.49463704 42.949425,5.36260741 42.886925,5.17511111 C42.826425,4.99377778 42.790425,4.74014815 42.780175,4.41991111 L44.298675,4.41991111 C44.689925,4.41991111 44.996175,4.33576296 45.209425,4.16983704 L45.209425,4.16983704 Z",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M48.8798,1.97755259 C48.7618,1.94413037 48.6158,1.92730074 48.4458,1.92730074 C48.1323,1.92730074 47.8433,2.00196741 47.58705,2.14893037 C47.40355,2.25441185 47.2248,2.39118222 47.0538,2.55734519 L46.97705,2.0716563 C46.96805,2.01476741 46.9163,1.97257481 46.8558,1.97257481 L46.52555,1.97257481 C46.4578,1.97257481 46.40305,2.02472296 46.40305,2.08896 L46.40305,6.1318637 C46.40305,6.19610074 46.4578,6.24824889 46.52555,6.24824889 L46.97105,6.24824889 C47.0388,6.24824889 47.09355,6.19610074 47.09355,6.1318637 L47.09355,3.20730074 C47.32605,2.99610074 47.5388,2.84178963 47.7263,2.74934519 C47.9178,2.65476741 48.1468,2.60712296 48.40705,2.60712296 C48.5178,2.60712296 48.65755,2.62181926 48.82255,2.65073778 C48.85805,2.65713778 48.8953,2.64789333 48.9233,2.62584889 C48.95105,2.60380444 48.96755,2.57109333 48.96755,2.53648593 L48.96755,2.08896 C48.96755,2.03752296 48.9318,1.99224889 48.8798,1.97755259",
                                          fill: s,
                                        }),
                                        ei(
                                          "g",
                                          {
                                            transform:
                                              "translate(49.500000, 0.000000)",
                                          },
                                          ei(
                                            "mask",
                                            { id: "mask-11", fill: i },
                                            ei("use", { href: "#path-10" })
                                          ),
                                          ei("path", {
                                            d: "M1.301675,3.9731437 L3.039925,2.16715852 C3.072675,2.13302519 3.080925,2.08395852 3.061425,2.04200296 C3.041925,2.00004741 2.997925,1.97278815 2.949425,1.97278815 L2.373425,1.97278815 C2.338925,1.97278815 2.306425,1.98629926 2.283175,2.01047704 L0.797175,3.54979556 L0.797175,0.344343704 C0.797175,0.280343704 0.742425,0.228195556 0.674675,0.228195556 L0.229175,0.228195556 C0.161425,0.228195556 0.106675,0.280343704 0.106675,0.344343704 L0.106675,6.13184 C0.106675,6.19607704 0.161425,6.24822519 0.229175,6.24822519 L0.674675,6.24822519 C0.742425,6.24822519 0.797175,6.19607704 0.797175,6.13184 L0.797175,4.41948444 L2.370925,6.20650667 C2.394175,6.23281778 2.428675,6.24822519 2.464925,6.24822519 L3.049925,6.24822519 C3.097675,6.24822519 3.140675,6.22191407 3.160925,6.18090667 C3.181175,6.14037333 3.174425,6.09178074 3.143925,6.05741037 L1.301675,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-11)",
                                          })
                                        ),
                                        ei(
                                          "g",
                                          {
                                            transform:
                                              "translate(53.250000, 0.000000)",
                                          },
                                          ei(
                                            "mask",
                                            { id: "mask-13", fill: i },
                                            ei("use", { href: "#path-12" })
                                          ),
                                          ei("path", {
                                            d: "M1.4384,3.9731437 L3.1764,2.16715852 C3.20915,2.13302519 3.2174,2.08395852 3.1979,2.04200296 C3.1784,2.00004741 3.1344,1.97278815 3.0859,1.97278815 L2.51015,1.97278815 C2.47565,1.97278815 2.44315,1.98629926 2.4199,2.01047704 L0.9339,3.54979556 L0.9339,0.344343704 C0.9339,0.280343704 0.87915,0.228195556 0.8114,0.228195556 L0.3659,0.228195556 C0.29815,0.228195556 0.2434,0.280343704 0.2434,0.344343704 L0.2434,6.13184 C0.2434,6.19607704 0.29815,6.24822519 0.3659,6.24822519 L0.8114,6.24822519 C0.87915,6.24822519 0.9339,6.19607704 0.9339,6.13184 L0.9339,4.41948444 L2.5074,6.20650667 C2.53065,6.23281778 2.56515,6.24822519 2.6014,6.24822519 L3.18665,6.24822519 C3.2344,6.24822519 3.2774,6.22191407 3.29765,6.18090667 C3.3179,6.14037333 3.31115,6.09178074 3.28065,6.05741037 L1.4384,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-13)",
                                          })
                                        ),
                                        ei(
                                          "g",
                                          {
                                            transform:
                                              "translate(74.500000, 0.000000)",
                                          },
                                          ei(
                                            "mask",
                                            { id: "mask-15", fill: i },
                                            ei("use", { href: "#path-14" })
                                          ),
                                          ei("path", {
                                            d: "M1.2404,3.9731437 L2.9784,2.16715852 C3.01115,2.13302519 3.0194,2.08395852 2.9999,2.04200296 C2.9804,2.00004741 2.9364,1.97278815 2.8879,1.97278815 L2.3119,1.97278815 C2.2774,1.97278815 2.2449,1.98629926 2.22165,2.01047704 L0.7359,3.54955852 L0.7359,0.344343704 C0.7359,0.280343704 0.68115,0.228195556 0.6134,0.228195556 L0.1679,0.228195556 C0.10015,0.228195556 0.0454,0.280343704 0.0454,0.344343704 L0.0454,6.13184 C0.0454,6.19607704 0.10015,6.24822519 0.1679,6.24822519 L0.6134,6.24822519 C0.68115,6.24822519 0.7359,6.19607704 0.7359,6.13184 L0.7359,4.41995852 L2.3094,6.20650667 C2.33265,6.23281778 2.36715,6.24822519 2.4034,6.24822519 L2.9884,6.24822519 C3.03615,6.24822519 3.07915,6.22191407 3.09965,6.18090667 C3.11965,6.14037333 3.1129,6.09178074 3.0824,6.05741037 L1.2404,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-15)",
                                          })
                                        ),
                                        ei(
                                          "g",
                                          {
                                            transform:
                                              "translate(78.250000, 0.000000)",
                                          },
                                          ei(
                                            "mask",
                                            { id: "mask-17", fill: i },
                                            ei("use", { href: "#path-16" })
                                          ),
                                          ei("path", {
                                            d: "M1.377125,3.9731437 L3.115125,2.16715852 C3.147875,2.13302519 3.156125,2.08395852 3.136625,2.04200296 C3.117125,2.00004741 3.073125,1.97278815 3.024625,1.97278815 L2.448625,1.97278815 C2.414125,1.97278815 2.381625,1.98629926 2.358375,2.01047704 L0.872375,3.54979556 L0.872375,0.344343704 C0.872375,0.280343704 0.817625,0.228195556 0.749875,0.228195556 L0.304375,0.228195556 C0.236625,0.228195556 0.181875,0.280343704 0.181875,0.344343704 L0.181875,6.13184 C0.181875,6.19607704 0.236625,6.24822519 0.304375,6.24822519 L0.749875,6.24822519 C0.817625,6.24822519 0.872375,6.19607704 0.872375,6.13184 L0.872375,4.41948444 L2.446125,6.20650667 C2.469375,6.23281778 2.503875,6.24822519 2.540125,6.24822519 L3.125125,6.24822519 C3.172875,6.24822519 3.215875,6.22191407 3.236375,6.18090667 C3.256375,6.14037333 3.249625,6.09178074 3.219125,6.05741037 L1.377125,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-17)",
                                          })
                                        ),
                                        ei("path", {
                                          d: "M58.732575,5.68936296 C58.439825,5.68936296 58.209325,5.65238519 58.047825,5.57937778 C57.899325,5.51253333 57.782075,5.37078519 57.699325,5.15863704 C57.610075,4.9298963 57.564825,4.576 57.564825,4.10642963 C57.564825,3.63733333 57.610075,3.28201481 57.699325,3.05042963 C57.781825,2.83685926 57.898825,2.69534815 58.046575,2.63063704 C58.209075,2.55952593 58.439825,2.52373333 58.732575,2.52373333 C59.020325,2.52373333 59.250075,2.55952593 59.415075,2.63063704 C59.565825,2.69582222 59.685075,2.83757037 59.769575,3.05161481 C59.861575,3.28248889 59.907825,3.63733333 59.907825,4.10642963 C59.907825,4.57576296 59.861575,4.92942222 59.769825,5.15768889 C59.685075,5.37007407 59.565075,5.51205926 59.414325,5.57914074 C59.249825,5.65238519 59.020575,5.68936296 58.732575,5.68936296 M59.771825,2.10512593 C59.508075,1.98731852 59.158325,1.92734815 58.732575,1.92734815 C58.306325,1.92734815 57.958325,1.9858963 57.697825,2.1010963 C57.424575,2.22222222 57.215075,2.44835556 57.075325,2.77333333 C56.942075,3.08432593 56.874325,3.5328 56.874325,4.10642963 C56.874325,4.6701037 56.942075,5.11478519 57.075325,5.42814815 C57.214825,5.7554963 57.425075,5.98542222 57.700075,6.11128889 C57.964575,6.23217778 58.311575,6.29357037 58.732575,6.29357037 C59.158575,6.29357037 59.508575,6.23217778 59.772825,6.11128889 C60.048325,5.98518519 60.258325,5.75668148 60.397325,5.43217778 C60.530575,5.12118519 60.598575,4.67508148 60.598575,4.10642963 C60.598575,3.53848889 60.530575,3.09238519 60.397325,2.78068148 C60.258075,2.45617778 60.047825,2.22885926 59.771825,2.10512593",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M64.20645,4.09908148 C64.20645,5.1693037 63.87745,5.68936296 63.19995,5.68936296 C62.8272,5.68936296 62.43195,5.5808 62.0247,5.36651852 L62.0247,2.85771852 C62.2282,2.75958519 62.4192,2.67922963 62.59295,2.61902222 C62.7757,2.5554963 62.97995,2.52373333 63.19995,2.52373333 C63.4832,2.52373333 63.7147,2.64557037 63.90745,2.89682963 C64.10595,3.15591111 64.20645,3.56077037 64.20645,4.09908148 M63.2997,1.92734815 C63.0547,1.92734815 62.78745,1.98115556 62.5057,2.08734815 C62.30445,2.16296296 62.12945,2.24284444 61.9832,2.32533333 L61.92195,2.06364444 C61.9097,2.01031111 61.8597,1.97262222 61.80245,1.97262222 L61.4567,1.97262222 C61.38895,1.97262222 61.3342,2.02477037 61.3342,2.08900741 L61.3342,7.9296 C61.3342,7.99383704 61.38895,8.04574815 61.4567,8.04574815 L61.9022,8.04574815 C61.96995,8.04574815 62.0247,7.99383704 62.0247,7.9296 L62.0247,5.96077037 C62.19345,6.04562963 62.3712,6.11721481 62.55545,6.17386667 C62.8122,6.25327407 63.0627,6.29357037 63.2997,6.29357037 C64.35945,6.29357037 64.8972,5.5552 64.8972,4.09908148 C64.8972,3.49985185 64.77145,2.98808889 64.52345,2.57754074 C64.2632,2.14613333 63.85145,1.92734815 63.2997,1.92734815",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M67.38835,5.62915556 C66.91085,5.75265185 66.61485,5.74459259 66.3756,5.56325926 C66.2516,5.46915556 66.19135,5.31531852 66.19135,5.0925037 L66.19135,4.90311111 C66.19135,4.69973333 66.25035,4.54234074 66.37235,4.42216296 C66.4921,4.30364444 66.6886,4.23917037 66.95685,4.23016296 L68.2581,4.18204444 L68.2581,5.35348148 L67.9846,5.45042963 C67.8086,5.51253333 67.6081,5.5725037 67.38835,5.62915556 M67.4206,1.90435556 C66.95785,1.90435556 66.46885,1.93801481 65.96735,2.00414815 C65.90685,2.01220741 65.86185,2.06127407 65.86185,2.11911111 L65.86185,2.38459259 C65.86185,2.44882963 65.9166,2.50097778 65.98435,2.50097778 L67.26685,2.50097778 C67.6521,2.50097778 67.9166,2.56379259 68.05385,2.68847407 C68.18935,2.8114963 68.2581,3.00562963 68.2581,3.26447407 L68.2581,3.70962963 L66.8831,3.70962963 C66.4486,3.70962963 66.1066,3.81700741 65.86635,4.02915556 C65.62385,4.2432 65.50085,4.53475556 65.50085,4.89528889 L65.50085,5.16859259 C65.50085,5.51324444 65.61035,5.7901037 65.8256,5.99087407 C66.04035,6.19164444 66.3211,6.29357037 66.66035,6.29357037 C66.8921,6.29357037 67.14185,6.2546963 67.40285,6.17813333 C67.65735,6.10394074 67.88985,6.02168889 68.0931,5.93422222 C68.1851,5.89463704 68.2541,5.86405926 68.30635,5.83988148 L68.3676,6.15324444 C68.37835,6.208 68.42885,6.24805926 68.48785,6.24805926 L68.82585,6.24805926 C68.8936,6.24805926 68.94835,6.19614815 68.94835,6.13191111 L68.94835,3.24195556 C68.94835,2.79585185 68.8216,2.45712593 68.5716,2.23573333 C68.32385,2.016 67.93635,1.90435556 67.4206,1.90435556",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M72.05925,1.90440296 C71.77425,1.90440296 71.48575,1.95702519 71.20125,2.0601363 C70.9805,2.14049185 70.7715,2.2393363 70.5785,2.35477333 L70.50425,2.06179556 C70.49125,2.00941037 70.44175,1.97266963 70.38525,1.97266963 L70.055,1.97266963 C69.9875,1.97266963 69.9325,2.02481778 69.9325,2.08881778 L69.9325,6.13195852 C69.9325,6.19595852 69.9875,6.24810667 70.055,6.24810667 L70.5005,6.24810667 C70.568,6.24810667 70.623,6.19595852 70.623,6.13195852 L70.623,2.91536593 C70.86175,2.78926222 71.07525,2.69515852 71.2585,2.63471407 C71.4525,2.57118815 71.6805,2.53895111 71.9365,2.53895111 C72.18875,2.53895111 72.3835,2.61646222 72.53225,2.77646222 C72.68475,2.94049185 72.75875,3.14481778 72.75875,3.40105481 L72.75875,6.13195852 C72.75875,6.19595852 72.81375,6.24810667 72.88125,6.24810667 L73.3265,6.24810667 C73.39425,6.24810667 73.44925,6.19595852 73.44925,6.13195852 L73.44925,3.3555437 C73.44925,2.9561363 73.33025,2.61243259 73.096,2.33462519 C72.855,2.04923259 72.506,1.90440296 72.05925,1.90440296",
                                          fill: s,
                                        }),
                                        ei("path", {
                                          d: "M82.751875,1.97269333 L82.306375,1.97269333 C82.238625,1.97269333 82.183875,2.02484148 82.183875,2.08884148 L82.183875,6.13198222 C82.183875,6.19598222 82.238625,6.24813037 82.306375,6.24813037 L82.751875,6.24813037 C82.819625,6.24813037 82.874375,6.19598222 82.874375,6.13198222 L82.874375,2.08884148 C82.874375,2.02484148 82.819625,1.97269333 82.751875,1.97269333",
                                          fill: s,
                                        }),
                                        ei(
                                          "g",
                                          {
                                            transform:
                                              "translate(82.000000, 0.237037)",
                                          },
                                          ei(
                                            "mask",
                                            { id: "mask-19", fill: i },
                                            ei("use", { href: "#path-18" })
                                          ),
                                          ei("path", {
                                            d: "M0.68275,0.211057778 L0.38325,0.211057778 C0.239,0.211057778 0.1455,0.301368889 0.1455,0.441220741 L0.1455,0.979531852 C0.1455,1.0617837 0.1805,1.11393185 0.21,1.14308741 C0.2405,1.17342815 0.29525,1.20969481 0.38325,1.20969481 L0.68275,1.20969481 C0.78525,1.20969481 0.90525,1.14925037 0.90525,0.979531852 L0.90525,0.441220741 C0.90525,0.271502222 0.78525,0.211057778 0.68275,0.211057778 L0.68275,0.211057778 Z",
                                            fill: s,
                                            mask: "url(#mask-19)",
                                          })
                                        ),
                                        ei("polygon", {
                                          fill: d,
                                          points:
                                            "54.410575 25.6368119 53.503075 25.6368119 51.980825 27.2138193 51.980825 23.8924563 51.290325 23.8924563 51.290325 29.9122489 51.980825 29.9122489 51.980825 28.0835081 53.591325 29.9122489 54.496075 29.9122489 52.485575 27.6371674",
                                        }),
                                        ei("path", {
                                          d: "M38.2935,12.7641126 L40.91225,12.7261867 L40.91225,12.171283 L38.2935,12.133357 L38.2935,10.654957 C38.2935,10.4489719 38.344,10.2948978 38.4435,10.1967644 C38.5435,10.098157 38.68275,10.0505126 38.86975,10.0505126 L41.235,10.0505126 L41.235,9.48233481 L41.1185,9.47688296 C40.2725,9.43658667 39.47975,9.41596444 38.76225,9.41596444 C38.44075,9.41596444 38.16525,9.51149037 37.9435,9.69969778 C37.7175,9.89146074 37.603,10.1948681 37.603,10.6016237 L37.603,15.2160237 L38.2935,15.2160237 L38.2935,12.7641126 Z",
                                          fill: d,
                                        }),
                                        ei("path", {
                                          d: "M42.21085,10.3483733 C42.24135,10.3787141 42.2961,10.4145067 42.3836,10.4145067 L42.68335,10.4145067 C42.78585,10.4145067 42.9056,10.3540622 42.9056,10.1845807 L42.9056,9.64603259 C42.9056,9.47631407 42.78585,9.41586963 42.68335,9.41586963 L42.3836,9.41586963 C42.23935,9.41586963 42.1461,9.50618074 42.1461,9.64603259 L42.1461,10.1845807 C42.1461,10.2665956 42.1811,10.3189807 42.2106,10.3481363 L42.21085,10.3483733 Z",
                                          fill: d,
                                        }),
                                        ei(
                                          "mask",
                                          { id: "mask-21", fill: i },
                                          ei("use", { href: "#path-20" })
                                        ),
                                        ei("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "42.1845 15.2158815 42.875 15.2158815 42.875 10.9404444 42.1845 10.9404444",
                                        }),
                                        ei("path", {
                                          d: "M47.4611,15.2159763 L47.4611,12.3236504 C47.4611,11.9240059 47.3421,11.5805393 47.10785,11.3027319 C46.86635,11.0171022 46.5176,10.8722726 46.07085,10.8722726 C45.78635,10.8722726 45.4976,10.9246578 45.21335,11.0280059 C44.9921,11.1083615 44.7831,11.2072059 44.59035,11.322643 L44.49335,10.9405393 L43.94435,10.9405393 L43.94435,15.2159763 L44.6346,15.2159763 L44.6346,11.8829985 C44.8736,11.7568948 45.08735,11.6627911 45.2701,11.6028207 C45.46435,11.5388207 45.6926,11.5068207 45.9481,11.5068207 C46.20035,11.5068207 46.39535,11.5843319 46.5441,11.7443319 C46.6966,11.9083615 46.7706,12.1126874 46.7706,12.3689244 L46.7706,15.2159763 L47.4611,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M51.33365,15.2159763 L52.02415,15.2159763 L52.02415,12.3236504 C52.02415,11.9240059 51.90515,11.5805393 51.67115,11.3027319 C51.42965,11.0171022 51.0809,10.8722726 50.63415,10.8722726 C50.34915,10.8722726 50.06065,10.9246578 49.7764,11.0280059 C49.5554,11.1083615 49.3464,11.2072059 49.1534,11.322643 L49.05665,10.9405393 L48.50715,10.9405393 L48.50715,15.2159763 L49.1979,15.2159763 L49.1979,11.8829985 C49.4369,11.7568948 49.65065,11.6627911 49.83365,11.6028207 C50.02715,11.5388207 50.2554,11.5068207 50.5114,11.5068207 C50.76365,11.5068207 50.9584,11.5843319 51.10715,11.7443319 C51.25965,11.9083615 51.33365,12.1126874 51.33365,12.3689244 L51.33365,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "53.07025 15.2158815 53.761 15.2158815 53.761 10.9404444 53.07025 10.9404444",
                                        }),
                                        ei("path", {
                                          d: "M53.2697,10.4145778 L53.5692,10.4145778 C53.6717,10.4145778 53.7917,10.3541333 53.7917,10.1844148 L53.7917,9.6461037 C53.7917,9.47638519 53.6717,9.41594074 53.5692,9.41594074 L53.2697,9.41594074 C53.12545,9.41594074 53.03195,9.50625185 53.03195,9.6461037 L53.03195,10.1844148 C53.03195,10.2666667 53.06695,10.3190519 53.0967,10.3482074 C53.1272,10.3785481 53.1817,10.4145778 53.2697,10.4145778",
                                          id: "Fill-52",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M55.15935,13.1527822 C55.3896,13.3137304 55.7216,13.3952711 56.1461,13.3952711 L56.6991,13.3952711 C56.9451,13.3952711 57.12785,13.4412563 57.24285,13.5318044 C57.3526,13.6180859 57.40585,13.7439526 57.40585,13.9165156 L57.40585,14.1137304 C57.40585,14.3467378 57.34735,14.4984415 57.23135,14.5638637 C57.0951,14.6409007 56.87735,14.6800119 56.5836,14.6800119 L54.82535,14.6800119 L54.82535,15.1588267 L54.9261,15.1761304 C55.0501,15.1972267 55.28985,15.2164267 55.65985,15.2346785 C56.0211,15.2522193 56.3111,15.2614637 56.52235,15.2614637 C56.99485,15.2614637 57.36685,15.1813452 57.6286,15.0234785 C57.90835,14.8549452 58.05035,14.5565156 58.05035,14.1362489 L58.05035,13.8785896 C58.05035,13.5313304 57.93135,13.2580267 57.6966,13.0662637 C57.46735,12.8790044 57.15235,12.7837156 56.76035,12.7837156 L56.19985,12.7837156 C55.9266,12.7837156 55.7246,12.7474489 55.59885,12.6751526 C55.49285,12.6147081 55.43935,12.4812563 55.43935,12.2781156 L55.43935,12.1034193 C55.43935,11.8753896 55.4986,11.717997 55.6161,11.6357452 C55.74485,11.54496 55.95435,11.4989748 56.2381,11.4989748 L57.8966,11.4989748 L57.8966,11.0111526 L57.7936,10.9952711 C57.6266,10.9696711 57.3876,10.9473896 57.08285,10.9293748 C56.77935,10.9118341 56.5161,10.9028267 56.29985,10.9028267 C55.78935,10.9028267 55.42085,10.9971674 55.17335,11.1910637 C54.92235,11.3880415 54.79485,11.6950044 54.79485,12.1034193 L54.79485,12.3082193 C54.79485,12.6998044 54.9176,12.9840119 55.15935,13.1527822",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M61.668375,12.3615763 L61.668375,15.2159763 L62.358875,15.2159763 L62.358875,12.3236504 C62.358875,11.9138133 62.238125,11.5672652 62.000375,11.2939615 C61.756875,11.0140207 61.409875,10.8722726 60.968875,10.8722726 C60.683875,10.8722726 60.394125,10.9246578 60.107625,11.0277689 C59.902625,11.1017244 59.709875,11.1910874 59.532625,11.2944356 L59.532625,9.1961837 L58.841875,9.1961837 L58.841875,15.2159763 L59.532625,15.2159763 L59.532625,11.8829985 C59.771625,11.7571319 59.985125,11.6630281 60.167875,11.6028207 C60.361625,11.5388207 60.590125,11.5068207 60.846125,11.5068207 C61.098375,11.5068207 61.293125,11.5843319 61.441625,11.7440948 C61.594125,11.9085985 61.668375,12.1105541 61.668375,12.3615763",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M41.2896,19.6944356 C41.2896,20.3666726 41.2346,20.874643 41.1261,21.2031763 C41.0241,21.5127467 40.8696,21.7208652 40.66735,21.821843 C40.45385,21.9285096 40.13585,21.9825541 39.72235,21.9825541 C39.2936,21.9825541 38.96785,21.9285096 38.7541,21.821843 C38.5526,21.7211022 38.40235,21.515117 38.3076,21.2093393 C38.20635,20.8829393 38.1551,20.3730726 38.1551,19.6944356 C38.1551,19.0020504 38.2151,18.4784356 38.33335,18.1380504 C38.44535,17.815443 38.6046,17.6018726 38.80685,17.5032652 C39.0211,17.3982578 39.3291,17.3453985 39.72235,17.3453985 C40.13585,17.3453985 40.4541,17.3982578 40.6686,17.5032652 C40.86985,17.6013985 41.02385,17.8116504 41.12585,18.1280948 C41.23435,18.4646874 41.2896,18.9916207 41.2896,19.6944356 M41.01035,16.9474133 C40.6946,16.7957096 40.26135,16.7184356 39.72235,16.7184356 C39.19885,16.7184356 38.77185,16.7957096 38.45385,16.9471763 C38.1241,17.1045689 37.87285,17.4070281 37.70635,17.8460207 C37.5461,18.2684207 37.46485,18.8904059 37.46485,19.6944356 C37.46485,20.4982281 37.54485,21.1149985 37.7026,21.527917 C37.86685,21.9579022 38.11535,22.2501689 38.44085,22.3971319 C38.75285,22.5379319 39.18385,22.609517 39.72235,22.609517 C40.2606,22.609517 40.6916,22.5379319 41.00385,22.3971319 C41.3296,22.2499319 41.57785,21.9576652 41.7421,21.527917 C41.89985,21.1149985 41.97985,20.4982281 41.97985,19.6944356 C41.97985,18.8863763 41.90135,18.263443 41.74635,17.8429393 C41.5851,17.406317 41.3376,17.1048059 41.01035,16.9474133",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M45.212575,18.2203733 C44.927325,18.2203733 44.638825,18.2729956 44.354825,18.3761067 C44.133575,18.4564622 43.924825,18.5553067 43.731825,18.6705067 L43.634825,18.28864 L43.085575,18.28864 L43.085575,22.564077 L43.776325,22.564077 L43.776325,19.2313363 C44.015325,19.1049956 44.228825,19.0108919 44.411825,18.9509215 C44.605575,18.8871585 44.833825,18.8549215 45.089825,18.8549215 C45.342325,18.8549215 45.536825,18.9324326 45.685575,19.0924326 C45.838075,19.2566993 45.912325,19.4610252 45.912325,19.7170252 L45.912325,22.564077 L46.602825,22.564077 L46.602825,19.6717511 C46.602825,19.2723437 46.483825,18.928877 46.249075,18.6508326 C46.007825,18.365203 45.658825,18.2203733 45.212575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M50.09245,16.7641126 L49.79295,16.7641126 C49.64845,16.7641126 49.55495,16.8544237 49.55495,16.9942756 L49.55495,17.5325867 C49.55495,17.6143644 49.5897,17.6665126 49.61895,17.6959052 L49.61995,17.6968533 C49.65045,17.726957 49.70545,17.7627496 49.79295,17.7627496 L50.09245,17.7627496 C50.19495,17.7627496 50.31495,17.7023052 50.31495,17.5325867 L50.31495,16.9942756 C50.31495,16.824557 50.19495,16.7641126 50.09245,16.7641126",
                                          id: "Fill-57",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "49.59325 22.5640296 50.284 22.5640296 50.284 18.2885926 49.59325 18.2885926",
                                        }),
                                        ei("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "47.71725 22.5640296 48.408 22.5640296 48.408 16.544 47.71725 16.544",
                                        }),
                                        ei("path", {
                                          d: "M53.753575,18.2203733 C53.468325,18.2203733 53.179825,18.2729956 52.895825,18.3761067 C52.674575,18.4564622 52.465825,18.5553067 52.272825,18.6705067 L52.175825,18.28864 L51.626575,18.28864 L51.626575,22.564077 L52.317325,22.564077 L52.317325,19.2313363 C52.556325,19.1052326 52.769575,19.0111289 52.952575,18.9509215 C53.146325,18.8871585 53.374575,18.8549215 53.630825,18.8549215 C53.883075,18.8549215 54.077575,18.9324326 54.226325,19.0924326 C54.378825,19.2566993 54.453075,19.4610252 54.453075,19.7170252 L54.453075,22.564077 L55.143575,22.564077 L55.143575,19.6717511 C55.143575,19.2723437 55.024575,18.928877 54.790075,18.6508326 C54.548825,18.365203 54.200075,18.2203733 53.753575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M58.651775,19.6791704 C58.651775,19.8792296 58.607525,20.0148148 58.520275,20.0821333 C58.425525,20.1556148 58.260275,20.1925926 58.029275,20.1925926 L56.532025,20.1925926 C56.538275,19.8330074 56.573525,19.5523556 56.637025,19.357037 C56.702275,19.1572148 56.806525,19.0218667 56.956025,18.9426963 C57.114025,18.8590222 57.351025,18.8168296 57.660775,18.8168296 C57.925525,18.8168296 58.133025,18.8436148 58.276775,18.896237 C58.406775,18.9438815 58.498025,19.0230519 58.556275,19.1382519 C58.619775,19.2629333 58.651775,19.4452148 58.651775,19.6791704 M59.103275,22.5252741 L59.211525,22.5134222 L59.211525,22.0282074 L57.737525,22.0282074 C57.401775,22.0282074 57.146525,21.9836444 56.979025,21.8952296 C56.818775,21.8106074 56.710775,21.6785778 56.648275,21.4913185 C56.588025,21.3095111 56.552275,21.0558815 56.541775,20.7361185 L58.060275,20.7361185 C58.451025,20.7361185 58.757525,20.6519704 58.970775,20.4858074 C59.191775,20.3146667 59.303775,20.0430222 59.303775,19.6791704 C59.303775,19.3285926 59.244775,19.0446222 59.128275,18.8360296 C59.007025,18.6196148 58.820275,18.4636444 58.572775,18.3723852 C58.339025,18.2868148 58.032275,18.2432 57.660775,18.2432 C57.217775,18.2432 56.861275,18.3090963 56.601275,18.4387556 C56.330525,18.5741037 56.133775,18.8064 56.016775,19.1294815 C55.905275,19.4359704 55.848525,19.868563 55.848525,20.4149333 C55.848525,20.9563259 55.902275,21.3867852 56.008275,21.6949333 C56.119775,22.0203852 56.310525,22.2578963 56.574525,22.4008296 C56.830275,22.5392593 57.188025,22.6094222 57.637525,22.6094222 C58.101025,22.6094222 58.594025,22.5809778 59.103275,22.5252741",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M38.2935,26.6307793 L38.2935,24.7392237 L39.707,24.7392237 C40.294,24.7392237 40.5675,25.0253274 40.5675,25.6392533 C40.5675,25.94432 40.489,26.1901274 40.334,26.3700385 C40.183,26.545683 39.993,26.6307793 39.753,26.6307793 L38.2935,26.6307793 Z M38.2935,27.2195793 L39.7685,27.2195793 C40.061,27.2195793 40.29575,27.3034904 40.4865,27.4755793 C40.6755,27.646483 40.76725,27.87712 40.76725,28.1805274 C40.76725,28.6060089 40.68275,28.8994607 40.51625,29.0528237 C40.349,29.2071348 40.09725,29.285357 39.7685,29.285357 L38.2935,29.285357 L38.2935,27.2195793 Z M40.63425,26.8919941 C40.76925,26.8064237 40.88875,26.6893274 40.99175,26.5416533 C41.158,26.3034311 41.2425,26.0023941 41.2425,25.6470756 C41.2425,24.6429867 40.71425,24.1124978 39.71475,24.1124978 L37.603,24.1124978 L37.603,29.91232 L39.77625,29.91232 C40.313,29.91232 40.7285,29.7857422 41.0115,29.5361422 C41.29725,29.2844089 41.44225,28.8513422 41.44225,28.2487941 C41.44225,27.8166756 41.327,27.4762904 41.0995,27.2380681 C40.95575,27.0873126 40.80025,26.9714015 40.63425,26.8919941 L40.63425,26.8919941 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M44.049475,29.2935111 C43.567225,29.4170074 43.274725,29.4084741 43.036725,29.2276148 C42.912725,29.1337481 42.852725,28.9801481 42.852725,28.7568593 L42.852725,28.5674667 C42.852725,28.3636148 42.911725,28.2064593 43.033475,28.0862815 C43.152975,27.968 43.349475,27.9035259 43.617975,27.8945185 L44.919225,27.8464 L44.919225,29.017837 L44.645225,29.1145481 C44.471975,29.1759407 44.271725,29.2361481 44.049475,29.2935111 M44.081725,25.5687111 C43.617225,25.5687111 43.128225,25.6023704 42.628475,25.6685037 L42.522975,25.6827259 L42.522975,26.1653333 L43.927975,26.1653333 C44.313225,26.1653333 44.577975,26.2281481 44.714975,26.3528296 C44.850475,26.4758519 44.919225,26.6699852 44.919225,26.9288296 L44.919225,27.3739852 L43.544225,27.3739852 C43.109475,27.3739852 42.767475,27.4816 42.527475,27.6935111 C42.284975,27.9073185 42.161975,28.1988741 42.161975,28.5596444 L42.161975,28.8329481 C42.161975,29.1771259 42.271225,29.4537481 42.486475,29.6549926 C42.701475,29.856 42.982475,29.9579259 43.321475,29.9579259 C43.552225,29.9579259 43.801975,29.9190519 44.063975,29.8424889 C44.318475,29.7682963 44.550975,29.6860444 44.754475,29.5985778 C44.846475,29.5589926 44.915225,29.5281778 44.967475,29.504237 L45.047225,29.9121778 L45.609475,29.9121778 L45.609475,26.9063111 C45.609475,26.4602074 45.482725,26.1214815 45.232725,25.8998519 C44.984975,25.6801185 44.597725,25.5687111 44.081725,25.5687111",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M48.907625,25.5687585 C48.622625,25.5687585 48.334125,25.6213807 48.049875,25.7244919 C47.828875,25.8046104 47.620125,25.9034548 47.426875,26.0191289 L47.329875,25.6370252 L46.780625,25.6370252 L46.780625,29.9122252 L47.471375,29.9122252 L47.471375,26.5797215 C47.709125,26.4538548 47.922875,26.3597511 48.107125,26.2990696 C48.300125,26.2355437 48.528125,26.2033067 48.784875,26.2033067 C49.037125,26.2033067 49.231875,26.2808178 49.380625,26.4408178 C49.533125,26.6046104 49.607125,26.8089363 49.607125,27.0654104 L49.607125,29.9122252 L50.297625,29.9122252 L50.297625,27.0198993 C50.297625,26.6204919 50.178625,26.2772622 49.944375,25.9989807 C49.703375,25.7135881 49.354375,25.5687585 48.907625,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "55.21725 29.9121778 55.908 29.9121778 55.908 25.6369778 55.21725 25.6369778",
                                        }),
                                        ei("path", {
                                          d: "M55.716225,24.1124978 L55.416725,24.1124978 C55.272475,24.1124978 55.178975,24.2028089 55.178975,24.3424237 L55.178975,24.8809719 C55.178975,24.9632237 55.213975,25.0153719 55.243475,25.0445274 C55.273975,25.0751052 55.328475,25.1108978 55.416725,25.1108978 L55.716225,25.1108978 C55.818725,25.1108978 55.938725,25.0506904 55.938725,24.8809719 L55.938725,24.3424237 C55.938725,24.1727052 55.818725,24.1124978 55.716225,24.1124978",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M59.166675,25.5687585 C58.881425,25.5687585 58.592925,25.6213807 58.308925,25.7244919 C58.087675,25.8048474 57.878675,25.9036919 57.685675,26.0191289 L57.588675,25.6370252 L57.039675,25.6370252 L57.039675,29.9122252 L57.730425,29.9122252 L57.730425,26.5797215 C57.967675,26.4540919 58.181175,26.3599881 58.365675,26.2990696 C58.559175,26.2355437 58.787175,26.2033067 59.043925,26.2033067 C59.296175,26.2033067 59.490675,26.2808178 59.639425,26.4408178 C59.791925,26.6046104 59.865925,26.8089363 59.865925,27.0654104 L59.865925,29.9122252 L60.556425,29.9122252 L60.556425,27.0198993 C60.556425,26.6204919 60.437425,26.2767881 60.203175,25.9989807 C59.962175,25.7135881 59.613175,25.5687585 59.166675,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        ei("path", {
                                          d: "M62.08805,30.3800889 C62.08805,30.1537185 62.16505,29.9894519 62.32305,29.8778074 C62.49205,29.7581037 62.6943,29.7000296 62.94105,29.7000296 L64.07005,29.7000296 C64.4113,29.7000296 64.65005,29.7550222 64.7798,29.8640593 C64.90705,29.9707259 64.9688,30.1274074 64.9688,30.342163 L64.9688,30.5166222 C64.9688,30.7420444 64.89005,30.9063111 64.7278,31.0179556 C64.55505,31.1367111 64.3028,31.1969185 63.97805,31.1969185 L62.98705,31.1969185 C62.6868,31.1969185 62.4558,31.1454815 62.30055,31.0433185 C62.1573,30.9489778 62.08805,30.7941926 62.08805,30.5697185 L62.08805,30.3800889 Z M64.54655,27.1184593 C64.54655,27.6655407 64.2463,27.9201185 63.60155,27.9201185 L63.13305,27.9201185 C62.5773,27.9201185 62.31855,27.6463407 62.31855,27.0577778 C62.31855,26.7550815 62.3953,26.5367704 62.5463,26.4087704 C62.7018,26.2772148 62.93555,26.2106074 63.24055,26.2106074 L63.6783,26.2106074 C64.27055,26.2106074 64.54655,26.4990815 64.54655,27.1184593 L64.54655,27.1184593 Z M65.62855,25.6293926 L63.3248,25.6293926 C61.9478,25.6293926 61.6588,26.3978667 61.6588,27.0426074 C61.6588,27.3180444 61.72155,27.5721481 61.8453,27.7980444 C61.9318,27.9552 62.05855,28.0865185 62.22355,28.1912889 C61.8153,28.3617185 61.72005,28.6679704 61.72005,28.9161481 C61.72005,29.0702222 61.76205,29.2079407 61.8443,29.3257481 C61.88505,29.3838222 61.9348,29.4359704 61.9928,29.4814815 C61.85355,29.561363 61.73455,29.6623407 61.6378,29.7825185 C61.4938,29.9614815 61.42055,30.1831111 61.42055,30.4407704 L61.42055,30.6379852 C61.42055,31.0037333 61.56005,31.2874667 61.8348,31.481837 C62.0983,31.6683852 62.45505,31.762963 62.89505,31.762963 L64.01605,31.762963 C64.52405,31.762963 64.92255,31.6532148 65.20005,31.4368 C65.4843,31.2146963 65.62855,30.8977778 65.62855,30.4938667 L65.62855,30.3118222 C65.62855,29.9185778 65.50005,29.6168296 65.24705,29.4153481 C64.99955,29.2183704 64.6218,29.1185778 64.1238,29.1185778 L62.6953,29.1185778 C62.59755,29.1185778 62.51655,29.0958222 62.4473,29.049363 C62.41205,29.0251852 62.36455,28.9796741 62.36455,28.8632889 C62.36455,28.6926222 62.4413,28.6312296 62.49905,28.5997037 C62.61005,28.5394963 62.78455,28.5089185 63.01805,28.5089185 L63.64755,28.5089185 C64.1883,28.5089185 64.58855,28.3761778 64.8368,28.1137778 C65.08205,27.8554074 65.2063,27.5358815 65.2063,27.1642074 C65.2063,26.918163 65.1723,26.7121778 65.1053,26.5521778 C65.03605,26.3872 64.95555,26.2665481 64.85905,26.1833481 C64.8503,26.1755259 64.8413,26.1677037 64.83205,26.1601185 L65.62855,26.1124741 L65.62855,25.6293926 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        })
                                      )
                                    )
                                  )
                                )
                              );
                            },
                          })
                        );
                      })({ logoColor: n.logoColor, optional: n.optional });
                    },
                  })
                : null),
            (n[ut.BLIK] = null),
            (n[ut.TRUSTLY] = null),
            (n[ut.ZIMPLER] = null),
            (n[ut.WECHATPAY] = null),
            (n[ut.OXXO] = null),
            (n[ut.BOLETO] = null),
            (n[ut.MAXIMA] = null),
            (n[ut.MERCADOPAGO] = E({}, Ha, {
              shippingChange: !1,
              layouts: [Aa.VERTICAL],
              Logo: function (n) {
                return (function (n) {
                  var e = n.logoColor,
                    t = void 0 === e ? "default" : e,
                    r = l(n, da),
                    o = bi("mercadopago", fa, t),
                    i = o.primary,
                    a = o.secondary,
                    u = o.tertiary,
                    c = o.quaternary;
                  return ei(
                    wi,
                    E({}, r, {
                      name: "mercadopago",
                      logoColor: t,
                      render: function () {
                        return ei(
                          "svg",
                          {
                            width: "180px",
                            height: "48px",
                            viewBox: "0 0 180 48",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          ei("title", null, "MercadoPago"),
                          ei(
                            "g",
                            {
                              id: "Logo",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                            },
                            ei(
                              "g",
                              { id: "MercadoPago" },
                              ei("path", {
                                d: "M65.881119,22.019212 C65.881119,10.1498687 51.1338846,0.474650362 32.9417221,0.474650362 C14.7505085,0.474650362 0.00374861327,10.1498687 0.00374861327,22.019212 C0.00374861327,22.3257442 -4.74508009e-05,23.1732155 -4.74508009e-05,23.2804543 C-4.74508009e-05,35.8719988 12.8894881,46.0705995 32.9374515,46.0705995 C53.109736,46.0705995 65.881119,35.8748459 65.881119,23.2828268 L65.881119,22.019212 Z",
                                id: "background_border",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M64.6197819,22.0085356 C64.6197819,33.1983835 50.440059,42.2695531 32.9477958,42.2695531 C15.456007,42.2695531 1.2767587,33.1983835 1.2767587,22.0085356 C1.2767587,10.8177387 15.456007,1.74656908 32.9477958,1.74656908 C50.440059,1.74656908 64.6197819,10.8177387 64.6197819,22.0085356",
                                id: "background",
                                fill: c,
                              }),
                              ei("path", {
                                d: "M22.4316544,15.616106 C22.4150466,15.6478981 22.0990243,15.9748341 22.3035372,16.2377115 C22.8036686,16.8759248 24.3472432,17.242245 25.9083746,16.8920581 C26.8379357,16.6832745 28.0294254,15.7356821 29.1834288,14.8198816 C30.4342319,13.8262618 31.6750704,12.8312185 32.9225519,12.4354788 C34.2435822,12.0150648 35.08963,12.1953778 35.6486005,12.3643026 C36.2621393,12.5474627 36.9833915,12.9512691 38.1340734,13.8143991 C40.3011515,15.4438596 49.0150166,23.0497485 50.5206305,24.3650847 C51.733473,23.817028 57.1224604,21.4971583 64.446017,19.8828821 C63.8097018,15.9786302 61.4347892,12.4065339 57.8327989,9.48166649 C52.8129787,11.5903801 46.6780646,12.6902896 40.6788599,9.76020269 C40.6484914,9.74786548 37.401433,8.21140855 34.1989785,8.28685532 C29.4391886,8.39694118 27.3769768,10.457255 25.1947145,12.6380938 L22.4316544,15.616106 Z",
                                id: "righthand",
                                fill: a,
                              }),
                              ei("path", {
                                d: "M50.1667424,25.1920098 C50.0647232,25.1013788 39.920691,16.225232 37.6221742,14.4975483 C36.2926027,13.5001325 35.5528447,13.2457962 34.7760751,13.146624 C34.3717943,13.0944281 33.8132984,13.1694004 33.4227783,13.2766392 C32.3537117,13.5675126 30.9562857,14.5022934 29.7144982,15.4859485 C28.4295305,16.5094623 27.2181116,17.473188 26.0944766,17.7251518 C24.6576663,18.0468682 22.9038847,17.6672618 22.1033897,17.1258482 C21.7793008,16.908049 21.5510624,16.6560852 21.4414511,16.3998509 C21.1458326,15.7141868 21.6910423,15.1661301 21.7807243,15.07455 L24.579847,12.0467144 C24.9053595,11.7216764 25.2332446,11.397113 25.5682472,11.0768201 C24.6652585,11.1944981 23.8301244,11.4251089 23.0172922,11.6514493 C22.002794,11.9366286 21.0276801,12.2080472 20.0407034,12.2075726 C19.6288305,12.2075726 17.4209447,11.845523 17.0019541,11.7316411 C14.4690304,11.0383849 12.2454858,10.36316 8.92440428,8.81246784 C4.94470561,11.7752959 2.2836647,15.4793054 1.51496172,19.5595997 C2.08674387,19.7104933 3.00776392,19.9847589 3.39496245,20.0706449 C12.40065,22.0730687 15.2054668,24.135755 15.7146139,24.5666083 C16.2655177,23.9535439 17.0598441,23.5653964 17.9471741,23.5653964 C18.9436409,23.5668199 19.8414101,24.0674258 20.3870943,24.8413484 C20.9028845,24.433746 21.614172,24.0859316 22.5337685,24.0864062 C22.9513355,24.0864062 23.3845614,24.163751 23.8215832,24.312272 C24.8379794,24.6610354 25.3623107,25.3376838 25.6342038,25.9497991 C25.9753751,25.795584 26.3938911,25.6821766 26.8873795,25.6836001 C27.3723267,25.6836001 27.8767287,25.794635 28.3854013,26.0138577 C30.0457048,26.7265687 30.3043117,28.3574527 30.1534181,29.5873775 C30.2715706,29.5731423 30.3906721,29.5679227 30.5116717,29.5679227 C32.4804054,29.5693462 34.0818699,31.1693872 34.0809209,33.1390699 C34.0809209,33.7483382 33.9248078,34.3215439 33.6538637,34.8249969 C34.1895832,35.1263095 35.5552173,35.8072285 36.7538245,35.6553859 C37.7118562,35.5348609 38.0758038,35.2069759 38.205819,35.0233413 C38.294552,34.8961731 38.3894536,34.7486011 38.3016696,34.6423113 L35.7606792,31.8194632 C35.7606792,31.8194632 35.3421632,31.4237235 35.480245,31.2714064 C35.6240209,31.1143443 35.8821533,31.3392611 36.0648389,31.4920526 C37.3583477,32.5725074 38.9375104,34.2019679 38.9375104,34.2019679 C38.9640828,34.2195247 39.0684746,34.4264102 39.6525939,34.5312764 C40.1550979,34.6209585 41.0443259,34.5687626 41.6607118,34.0624625 C41.8163505,33.9348199 41.9715146,33.7753852 42.1015298,33.6107309 C42.0910906,33.6187975 42.083024,33.6297112 42.0730593,33.6335073 C42.7226608,32.8021693 42.0014086,31.9608666 42.0014086,31.9608666 L39.0347845,28.6293458 C39.0347845,28.6293458 38.6105744,28.2374022 38.7543503,28.079391 C38.883891,27.9427327 39.1567331,28.1491437 39.3422657,28.3038333 C40.2817916,29.0891441 41.6089905,30.4210881 42.8811464,31.6671461 C43.1293141,31.8484082 44.247255,32.5402408 45.72772,31.5679739 C46.6254891,30.978635 46.8062767,30.2550103 46.7806533,29.7088516 C46.7180182,28.9857013 46.1543027,28.4708602 46.1543027,28.4708602 L42.1015298,24.3967344 C42.1015298,24.3967344 41.6739981,24.0313632 41.8248916,23.8463051 C41.9487382,23.6906665 42.2267999,23.9151088 42.4085365,24.0674258 C43.7001473,25.1474061 47.1944242,28.3512841 47.1944242,28.3512841 C47.2442476,28.3863977 48.4518705,29.2462062 49.9437236,28.2962412 C50.4770706,27.9550699 50.8182419,27.4407033 50.8476614,26.8437722 C50.8984338,25.8074467 50.1667424,25.1920098 50.1667424,25.1920098",
                                id: "lefthand",
                                fill: a,
                              }),
                              ei("path", {
                                d: "M30.5112446,30.3568871 C29.882996,30.349295 29.1959084,30.7227328 29.1057519,30.6681644 C29.056403,30.6354233 29.144187,30.3829851 29.203026,30.2373111 C29.2632885,30.0925862 30.0908305,27.6028427 28.073697,26.7382891 C26.5301224,26.0749269 25.5868005,26.821328 25.262237,27.1582286 C25.1773001,27.2460126 25.1393394,27.2393695 25.1293748,27.1264366 C25.0985317,26.6785011 24.8978148,25.4651841 23.5653964,25.0590052 C21.6616702,24.4758349 20.4374396,25.8049318 20.1266368,26.2846594 C19.987606,25.1994596 19.070382,24.3567334 17.946747,24.3562573 C16.7253634,24.3548353 15.7350652,25.3441845 15.7336415,26.5646191 C15.7331672,27.7850537 16.7229909,28.7748774 17.9439,28.7748774 C18.5375095,28.776301 19.0751271,28.539047 19.4718158,28.158017 C19.4846275,28.1698797 19.4893726,28.1907581 19.483204,28.2325148 C19.3902004,28.779148 19.218903,30.7654385 21.2991461,31.5740002 C22.1333312,31.8980892 22.8427207,31.6570391 23.4306361,31.2446916 C23.6057295,31.120845 23.6346745,31.1735154 23.6095256,31.3376952 C23.5345533,31.8487403 23.6294549,32.9424813 25.1630648,33.5645613 C26.3294055,34.0385948 27.0202892,33.5531731 27.4724953,33.1351315 C27.6694161,32.9557675 27.7230355,32.9847125 27.7334747,33.2622997 C27.7889921,34.7403921 29.0170189,35.9143249 30.507923,35.9157497 C32.04438,35.917172 33.289489,34.67491 33.2899647,33.1389276 C33.291387,31.6024707 32.047227,30.3734949 30.5112446,30.3568871",
                                id: "fingers",
                                fill: a,
                              }),
                              ei("path", {
                                d: "M30.5112446,35.7178312 C29.1185636,35.7164077 27.986862,34.6345294 27.9356151,33.2556091 C27.9318191,33.1374566 27.9199564,32.8228578 27.6542319,32.8228578 C27.5446205,32.8228578 27.4497189,32.8888144 27.3401076,32.9875121 C27.0345244,33.2712679 26.6444788,33.5597688 26.0745947,33.5597688 C25.8164624,33.5597688 25.5365026,33.4995062 25.2408841,33.3785067 C23.7703838,32.7829991 23.74998,31.7732461 23.809768,31.3670672 C23.8259013,31.2588794 23.8315954,31.1459465 23.7570976,31.058637 L23.6664666,30.9774962 L23.5748865,30.9774962 C23.5003888,30.9774962 23.423044,31.0078647 23.3191267,31.0814134 C22.893493,31.379879 22.4858906,31.5250784 22.0711706,31.5250784 C21.8424578,31.5250784 21.6085253,31.4790511 21.3741184,31.3888946 C19.4381257,30.6353759 19.5909173,28.8080455 19.6858189,28.2580908 C19.6995796,28.1470559 19.6720581,28.0602209 19.6013564,28.0028055 L19.4646981,27.8903471 L19.336581,28.0127701 C18.9588726,28.3762433 18.4658588,28.5755366 17.946747,28.5755366 C16.8382963,28.5741131 15.9357821,27.6734969 15.9367303,26.5645717 C15.9376801,25.455172 16.8406689,24.5550303 17.9495941,24.5564521 C18.951755,24.5564521 19.8049204,25.309498 19.932563,26.3107099 L20.0018412,26.8507 L20.2984087,26.3937488 C20.3316243,26.3401294 21.143982,25.1116282 22.6372587,25.1130517 C22.921489,25.1130517 23.2147349,25.159079 23.5098789,25.2501845 C24.700894,25.6136576 24.9025599,26.6931634 24.9334029,27.1429969 C24.9547558,27.4049254 25.1412375,27.4177371 25.1777746,27.4177371 C25.2807428,27.4177371 25.3561896,27.352255 25.409809,27.296263 C25.6347258,27.0618561 26.1239435,26.6718105 26.8897995,26.6718105 C27.2399864,26.6727595 27.6134242,26.7557984 27.9982502,26.9214017 C29.8901136,27.7332849 29.0322031,30.137617 29.021764,30.1627659 C28.8594822,30.5613526 28.8528391,30.7373951 29.0056307,30.8389398 L29.0801284,30.8745279 L29.1356459,30.8745279 C29.2205828,30.8745279 29.3268726,30.8375163 29.5019661,30.7782028 C29.7596239,30.6889953 30.148246,30.555184 30.5117191,30.5561331 L30.5126681,30.5561331 C31.9371412,30.5713173 33.0954152,31.7310149 33.0949409,33.1388801 C33.0935172,34.5614552 31.9347686,35.7178312 30.5112446,35.7178312 M50.559208,24.1293966 C47.4345727,21.402399 40.2125608,15.1241836 38.2566388,13.6560558 C37.139647,12.8152276 36.3771126,12.3715626 35.7080563,12.1722693 C35.4076927,12.0811637 34.9915492,11.9781955 34.4558297,11.977721 C33.9590198,11.977721 33.4247238,12.067403 32.8667024,12.244869 C31.602613,12.6448792 30.3432688,13.6456166 29.1252067,14.613613 L29.0625716,14.6634363 C27.928023,15.5650015 26.7555137,16.4983588 25.8681837,16.6967031 C25.4805107,16.7840126 25.0823985,16.8286163 24.6852353,16.8286163 C23.691141,16.8271928 22.7981169,16.54059 22.4635888,16.1140073 C22.4085458,16.0433056 22.4436594,15.9289492 22.5732001,15.7642949 L22.5902824,15.7424675 L25.3391073,12.780114 C27.4919501,10.6272712 29.5256915,8.59447886 34.206713,8.48676555 C34.2835833,8.48439301 34.3628261,8.48296948 34.4401709,8.48296948 C37.3541246,8.48486751 40.2671293,9.78929003 40.5935908,9.94065809 C43.3258079,11.2730766 46.1453345,11.9501995 48.9805198,11.952572 C51.9348067,11.9535211 54.9830462,11.2223042 58.1878732,9.74658431 C57.8300942,9.44527173 57.4576054,9.15250028 57.0742029,8.86494843 C54.2589469,10.085383 51.5765532,10.7022434 48.988112,10.7012944 C46.3451024,10.6989219 43.7039908,10.0645047 41.1397495,8.81322706 C41.0045147,8.74869397 37.7882994,7.23216637 34.4415944,7.23074285 C34.354285,7.23074285 34.2650775,7.23216637 34.177768,7.23358989 C30.2455201,7.32564445 28.0305167,8.72164701 26.5415106,9.94540317 C25.0928376,9.98051676 23.8429835,10.3297547 22.7312113,10.6400829 C21.739015,10.915772 20.8820536,11.1549241 20.0459705,11.1544496 C19.7019521,11.1544496 19.0822447,11.123132 19.0267272,11.121234 C18.065374,11.092289 13.2234943,9.90459548 9.37191279,8.44595786 C8.97854565,8.72449406 8.60036276,9.01204591 8.23214455,9.30481735 C12.255498,10.9542072 17.1524206,12.2306337 18.6978932,12.3302804 C19.1277975,12.3582764 19.5861722,12.4071507 20.0440724,12.4080997 C21.0666372,12.4080997 22.0868294,12.1210224 23.0742806,11.8448587 C23.6574509,11.6811535 24.3008838,11.503213 24.9780067,11.3731978 C24.7972191,11.5506638 24.6169061,11.7305023 24.4361186,11.9117644 L21.6431644,14.9329569 C21.4234672,15.1550266 20.9461121,15.7472126 21.260711,16.4765314 C21.3859811,16.7707264 21.6398429,17.0521096 21.9952494,17.2917362 C22.6605096,17.7396717 23.8524737,18.0428823 24.9595009,18.0438314 C25.378966,18.0443059 25.7761292,18.0020747 26.1419748,17.9199848 C27.3125861,17.6571073 28.5406128,16.6791463 29.8417138,15.6447189 C30.8780393,14.8214475 32.3509121,13.7756318 33.4783432,13.4681506 C33.7934165,13.3827392 34.1801405,13.3291198 34.4914178,13.3291198 C34.5844213,13.3300688 34.6722053,13.3329158 34.7533462,13.3447785 C35.4987983,13.4392056 36.2186269,13.6925929 37.5045436,14.6577422 C39.7968918,16.3797318 49.9423476,25.2549296 50.0415197,25.3427136 C50.0486374,25.3479331 50.6953918,25.9059546 50.6503135,26.8336177 C50.6265881,27.3508315 50.3390363,27.8106297 49.8398538,28.1290246 C49.4071025,28.4037647 48.960116,28.5437446 48.5083844,28.5437446 C47.8303124,28.5423211 47.3633965,28.2248752 47.333028,28.2030478 C47.2955419,28.1726793 43.8197707,24.985409 42.5414462,23.914919 C42.3374077,23.7464686 42.1395379,23.5941515 41.9392955,23.5941515 C41.8320567,23.5932025 41.7376296,23.6392298 41.673571,23.7194217 C41.4723796,23.9671148 41.6977709,24.3106586 41.9634954,24.536999 L46.0233859,28.6177678 C46.02908,28.6220384 46.529686,29.0913268 46.5842544,29.7172029 C46.6160464,30.3938513 46.2929065,30.9599394 45.6205286,31.4002828 C45.1412755,31.7158306 44.6563283,31.8762143 44.1813458,31.8762143 C43.5578423,31.8762143 43.1198714,31.5924585 43.0230718,31.5250784 L42.4408505,30.9509237 C41.3760545,29.9036845 40.2770939,28.8208573 39.4728029,28.1494284 C39.276831,27.9861977 39.066624,27.8357786 38.8673306,27.8357786 C38.768633,27.8357786 38.6799,27.8723158 38.6115708,27.9439665 C38.5199908,28.0459857 38.4559322,28.2296203 38.6846451,28.5333054 C38.7790721,28.6585755 38.8896325,28.7620183 38.8896325,28.7620183 L41.8524605,32.0897429 C41.8771349,32.1196369 42.4631523,32.8162147 41.9193662,33.5099454 L41.8144999,33.6428077 C41.7262414,33.7405563 41.6303908,33.8302383 41.5392852,33.9085321 C41.0339342,34.3232521 40.3587093,34.3673814 40.0910868,34.3673814 C39.9487344,34.3673814 39.8106526,34.3550442 39.6910765,34.3332168 C39.3983051,34.2810209 39.2018588,34.1994055 39.1069572,34.0869471 L39.0713691,34.049461 C38.9090873,33.8824342 37.4158106,32.35784 36.1797173,31.3262596 C36.0174355,31.1896012 35.8143461,31.0178293 35.6036645,31.0178293 C35.5002218,31.0178293 35.4076927,31.058637 35.3365165,31.1374054 C35.0916704,31.4050279 35.4589396,31.8055126 35.6145782,31.9521356 L38.1418079,34.7389212 C38.1389608,34.7635956 38.1071688,34.821011 38.0459573,34.9092695 C37.9553262,35.0345396 37.6487941,35.3410718 36.7320446,35.4559028 C36.6224332,35.4706125 36.5090258,35.4763066 36.3965674,35.4763066 C35.4513475,35.4763066 34.443018,35.0174574 33.9234317,34.7417682 C34.1597367,34.2425858 34.2826343,33.6921565 34.2826343,33.1403037 C34.2835833,31.0605351 32.5948093,29.3684395 30.5150407,29.367016 C30.4704369,29.367016 30.4229861,29.3684395 30.3788569,29.369863 C30.4467115,28.4203725 30.3124257,26.6219871 28.4665896,25.8305078 C27.9356151,25.6008459 27.4055897,25.4836424 26.8907485,25.4836424 C26.4878912,25.4836424 26.1002181,25.5524461 25.735796,25.692426 C25.3533425,24.9493464 24.7184508,24.4079328 23.8899598,24.1256005 C23.4325341,23.9671148 22.9770064,23.886923 22.536663,23.886923 C21.768909,23.886923 21.0614176,24.1132633 20.4303219,24.5621479 C19.8253242,23.8100527 18.9123708,23.3649642 17.9500686,23.3649642 C17.1087659,23.3649642 16.2992552,23.7018649 15.6990026,24.2959489 C14.9127428,23.6952217 11.7923781,21.7127273 3.44103718,19.8165933 C3.03675636,19.7254877 2.10861869,19.4588142 1.53968359,19.2927364 C1.445731,19.7449426 1.37360578,20.2018938 1.32615498,20.6626411 C1.32615498,20.6626411 2.86640798,21.0318083 3.1696186,21.0996629 C11.7007981,22.9948479 14.5198502,24.9650052 14.9962562,25.337494 C14.8349235,25.7246925 14.7509356,26.1432086 14.7499866,26.5645717 C14.7490375,28.3268944 16.1825262,29.7622812 17.946747,29.7637047 C18.1441424,29.7637047 18.3401142,29.7466224 18.5327644,29.7110343 C18.7980144,31.0078647 19.6469092,31.9910453 20.9442141,32.4959218 C21.323346,32.6415958 21.7067485,32.716568 22.0830333,32.716568 C22.3269305,32.7170425 22.5717766,32.6861995 22.8109286,32.624988 C23.0500807,33.2337817 23.5895963,33.9920455 24.7943721,34.4817378 C25.2171587,34.6516117 25.6394709,34.7403447 26.0503948,34.7403447 C26.385872,34.7403447 26.713757,34.6815057 27.0264578,34.5666747 C27.603934,35.9731165 28.9785837,36.9050539 30.5102956,36.9050539 C31.5257427,36.9064737 32.5003822,36.4927028 33.2111952,35.7610114 C33.8204635,36.0993356 35.1049566,36.7114509 36.402736,36.713349 C36.5711864,36.713349 36.728723,36.7010118 36.8862597,36.682506 C38.1750235,36.5192752 38.7752761,36.0153477 39.0509652,35.6234041 C39.1007886,35.5550749 39.1453923,35.4824752 39.183353,35.4070284 C39.4879871,35.4943379 39.8225153,35.5659886 40.2059177,35.5669376 C40.9100876,35.5669376 41.585787,35.3268366 42.268604,34.8290777 C42.9395584,34.3450795 43.4164389,33.6508743 43.4852426,33.0591628 C43.4866661,33.0515707 43.4880896,33.042555 43.4890386,33.0340139 C43.7149045,33.0805157 43.9469389,33.1047156 44.1789733,33.1047156 C44.903547,33.1047156 45.6167326,32.8788498 46.2981261,32.4323377 C47.6120387,31.5706312 47.8407516,30.4455727 47.8189242,29.7086617 C48.0485861,29.7565871 48.2834676,29.7812615 48.5169255,29.7812615 C49.1978445,29.7812615 49.8654773,29.5767485 50.5027415,29.1705697 C51.3174718,28.6500344 51.8076386,27.8528609 51.8816618,26.9251978 C51.9329087,26.2945766 51.776321,25.6582614 51.4436909,25.1111536 C53.6458826,24.1626121 58.67804,22.3267406 64.6041705,20.9914751 C64.5681079,20.5316769 64.5021513,20.0780472 64.4200614,19.6263156 C57.2497709,21.2173409 51.8992186,23.53294 50.559208,24.1293966",
                                id: "handoutline",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M152.355791,37.4166173 C151.780213,38.1829477 150.95362,38.5658757 149.876486,38.5658757 C148.798879,38.5658757 147.96849,38.1829477 147.389115,37.4166173 C146.805471,36.6526594 146.516021,35.5636635 146.516021,34.1529512 C146.516021,32.7427134 146.805471,31.6560901 147.389115,30.8959282 C147.96849,30.1329194 148.798879,29.754262 149.876486,29.754262 C150.95362,29.754262 151.780213,30.1329194 152.355791,30.8959282 C152.934216,31.6560901 153.221293,32.7427134 153.221293,34.1529512 C153.221293,35.5636635 152.934216,36.6526594 152.355791,37.4166173 M155.303909,28.8735751 C154.112894,27.3826709 152.307391,26.6391169 149.885977,26.6391169 C147.468833,26.6391169 145.662855,27.3826709 144.473738,28.8735751 C143.283672,30.3621067 142.689588,32.1211079 142.689588,34.1529512 C142.689588,36.2194336 143.283672,37.9846034 144.473738,39.4551037 C145.662855,40.9194354 147.468833,41.6549228 149.885977,41.6549228 C152.307391,41.6549228 154.112894,40.9194354 155.303909,39.4551037 C156.492077,37.9846034 157.084263,36.2194336 157.084263,34.1529512 C157.084263,32.1211079 156.492077,30.3621067 155.303909,28.8735751",
                                id: "pago_o",
                                fill: u,
                              }),
                              ei("path", {
                                d: "M131.5312,34.2614237 C131.5312,36.733136 132.245809,38.1030406 133.674078,38.3739847 C135.0995,38.6382856 136.153857,38.307079 136.832404,37.3770433 C137.15412,36.9855742 137.384731,36.3653923 137.527558,35.5250386 C137.669436,34.6837359 137.680349,33.8500253 137.555079,33.0262794 C137.432182,32.200161 137.135614,31.4656226 136.671071,30.8207662 C136.208426,30.1773333 135.529405,29.8532443 134.636855,29.8532443 C133.422589,29.8532443 132.603588,30.3030779 132.174158,31.195153 C131.743305,32.0929221 131.5312,33.1135889 131.5312,34.2614237 M137.635746,40.440467 L137.635746,39.5303607 C136.993736,40.5353686 136.126336,41.1579231 135.038289,41.4108359 C133.948344,41.6599526 132.869313,41.5707451 131.800721,41.1398918 C130.728807,40.7118856 129.808262,39.9137631 129.040033,38.750744 C128.274652,37.5825053 127.890775,36.0507934 127.890775,34.1518124 C127.890775,31.9330129 128.399447,30.130357 129.415369,28.7514367 C130.433663,27.3725165 132.067869,26.7433188 134.316088,26.6816328 C136.53204,26.6232683 137.820329,27.1248233 139.081572,28.0800079 C140.460492,29.1267726 141.276186,30.7325077 141.276186,33.238859 L141.276186,40.8200734 C141.281865,43.2324722 139.599734,47.7032866 134.316088,47.3241547 C131.042931,47.0869007 129.226515,45.7440431 128.212491,42.7014977 L132.120539,42.7014977 C132.406193,43.2016291 132.84274,43.5869296 133.434926,43.8536031 C134.020469,44.1259707 134.612655,44.1957234 135.197724,44.0699788 C135.786113,43.9447087 136.322782,43.5940473 136.807255,43.0232141 C137.286508,42.4495339 137.562671,41.5883019 137.635746,40.440467",
                                id: "pago_g",
                                fill: u,
                              }),
                              ei("path", {
                                d: "M122.844524,35.7562663 C122.821273,36.9933087 122.466341,37.842678 121.786846,38.3105429 C121.107825,38.7765098 120.364271,39.0099677 119.558082,39.0099677 C119.047511,39.0099677 118.615709,38.8690389 118.260777,38.5890791 C117.904896,38.3086449 117.726955,37.8512192 117.726955,37.2201235 C117.726955,36.5131066 118.017829,35.9897243 118.60005,35.6518746 C118.946441,35.4540047 119.510157,35.2841309 120.298789,35.1493706 L121.140092,34.9927829 C121.56098,34.9130656 121.890763,34.8290777 122.128966,34.7374976 C122.373812,34.6487646 122.609168,34.5310866 122.844524,34.3820911 L122.844524,35.7562663 Z M124.719306,27.7043399 C123.512632,27.0945971 122.132762,26.7856924 120.581121,26.7856924 C118.191973,26.7856924 116.508893,27.4082469 115.527611,28.6509834 C114.912174,29.4467333 114.564834,30.4621805 114.485117,31.6987483 L118.052942,31.6987483 C118.140252,31.1530641 118.314396,30.7212618 118.578697,30.4023925 C118.946441,29.9705902 119.572317,29.7542145 120.454428,29.7542145 C121.246856,29.7542145 121.842838,29.8628769 122.25044,30.0849466 C122.656619,30.3055928 122.861132,30.7046541 122.861132,31.2840283 C122.861132,31.7594854 122.596357,32.1091978 122.063959,32.3345891 C121.76834,32.4641298 121.277224,32.5718431 120.586815,32.658678 L119.322726,32.8128931 C117.887339,32.9946297 116.796445,33.2987893 116.059534,33.7220505 C114.707661,34.4997691 114.03386,35.7562663 114.03386,37.4929656 C114.03386,38.8315527 114.450952,39.8678782 115.292255,40.5976715 C116.128338,41.3274649 117.194083,41.6354206 118.480474,41.6947341 C126.543314,42.0548856 126.453158,37.4440913 126.526707,36.4855851 L126.526707,31.1791621 C126.526707,29.4771018 125.92503,28.3197768 124.719306,27.7043399 L124.719306,27.7043399 Z",
                                id: "pago_a",
                                fill: u,
                              }),
                              ei("path", {
                                d: "M109.304391,34.2595732 C109.304391,32.8611981 109.032023,31.7864374 108.484916,31.0319697 C107.94018,30.2817725 107.15914,29.9016916 106.14132,29.9016916 C105.160987,29.9016916 104.397029,30.2817725 103.849447,31.0319697 C103.342672,31.7143122 103.089285,32.7928689 103.089285,34.2595732 C103.089285,35.6266307 103.361178,36.6439759 103.906862,37.3263184 C104.450648,38.0807862 105.233112,38.4565965 106.250457,38.4565965 C107.194254,38.4565965 107.94018,38.0807862 108.484916,37.3263184 C109.032023,36.5732742 109.304391,35.5545055 109.304391,34.2595732 L109.304391,34.2595732 Z M103.089285,44.2935195 C103.089285,44.795549 102.907074,45.2264023 102.541703,45.5841813 C102.180128,45.9433839 101.74358,46.1227479 101.233959,46.1227479 L99.3824284,46.1227479 L99.3824284,33.2365339 C99.3824284,30.7306571 100.226578,29.1609846 101.616887,28.1004592 C102.53506,27.3991364 103.904015,26.7300801 106.468257,26.7300801 C108.199736,26.7300801 110.227309,27.4019834 111.322948,28.737249 C112.551924,30.2390668 113.064392,31.9126565 113.064392,34.0982404 C113.064392,36.3592711 112.519183,38.1832799 111.429712,39.5854511 C110.339767,40.9496616 108.93902,41.6286825 107.231265,41.6286825 C106.323057,41.6286825 105.523986,41.4668753 104.833576,41.1465824 C104.104258,40.7869053 103.525832,40.231731 103.089285,39.4777377 L103.089285,44.2935195 Z",
                                id: "pago_p",
                                fill: u,
                              }),
                              ei("path", {
                                d: "M175.174786,16.83711 C174.59731,17.602966 173.772615,17.9858939 172.693584,17.9858939 C171.616925,17.9858939 170.787485,17.602966 170.206213,16.83711 C169.624466,16.0722031 169.334067,14.9827327 169.334067,13.5710714 C169.334067,12.1613081 169.624466,11.0746848 170.206213,10.3135739 C170.787485,9.55198858 171.616925,9.17143315 172.693584,9.17143315 C173.772615,9.17143315 174.59731,9.55198858 175.174786,10.3135739 C175.751313,11.0746848 176.040289,12.1613081 176.040289,13.5710714 C176.040289,14.9827327 175.751313,16.0722031 175.174786,16.83711 M178.121006,8.2916953 C176.931889,6.80174016 175.127335,6.05723709 172.704972,6.05723709 C170.28593,6.05723709 168.480902,6.80174016 167.292734,8.2916953 C166.102667,9.78070144 165.507634,11.5406516 165.507634,13.5710714 C165.507634,15.6380283 166.102667,17.4041471 167.292734,18.8746474 C168.480902,20.3399282 170.28593,21.0754156 172.704972,21.0754156 C175.127335,21.0754156 176.931889,20.3399282 178.121006,18.8746474 C179.311072,17.4041471 179.904207,15.6380283 179.904207,13.5710714 C179.904207,11.5406516 179.311072,9.78070144 178.121006,8.2916953",
                                id: "mercado_o",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M159.95627,16.8677158 C159.414857,17.6440109 158.620056,18.0312094 157.578985,18.0312094 C156.534593,18.0312094 155.757823,17.6402148 155.246304,16.8610727 C154.734784,16.080507 154.479024,14.9440603 154.479024,13.6439084 C154.479024,12.4372345 154.72909,11.427007 155.233492,10.6127512 C155.736471,9.7994445 156.526052,9.39089311 157.604134,9.39089311 C158.311151,9.39089311 158.930384,9.6153354 159.466104,10.0627964 C160.336351,10.8044525 160.771001,12.1340239 160.771001,13.8560135 C160.771001,15.0883108 160.499582,16.0918952 159.95627,16.8677158 L159.95627,16.8677158 Z M164.404783,1.7180986 C164.404783,1.7180986 160.668981,1.31903736 160.668981,4.31982601 L160.666134,8.29240707 C160.252838,7.62857036 159.71522,7.1094586 159.051858,6.73554629 C158.389919,6.36115947 157.63213,6.17230528 156.776592,6.17230528 C154.924113,6.17230528 153.447444,6.86271443 152.338993,8.24021119 C151.230542,9.62008048 150.679164,11.60732 150.679164,14.0107031 C150.679164,16.0956913 151.240982,17.8058181 152.365091,19.1368131 C153.489201,20.4663845 155.694239,21.0500294 157.652534,21.0500294 C164.480704,21.0500294 164.401936,15.1946006 164.401936,15.1946006 L164.404783,1.7180986 Z",
                                id: "mercado_d",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M145.862813,15.0980382 C145.837664,16.333657 145.483681,17.1849244 144.803711,17.6518403 C144.123267,18.1187562 143.380187,18.3526886 142.574472,18.3526886 C142.063902,18.3526886 141.6321,18.2112852 141.276219,17.930851 C140.921287,17.6499423 140.744295,17.1934656 140.744295,16.5623699 C140.744295,15.854404 141.034219,15.3319706 141.615492,14.9941209 C141.961883,14.7962511 142.526547,14.6259027 143.315179,14.4906679 L144.157431,14.3345548 C144.576422,14.2548375 144.906205,14.1699005 145.147255,14.078795 C145.391152,13.990062 145.626508,13.8728585 145.862813,13.723863 L145.862813,15.0980382 Z M147.735696,7.04611178 C146.529971,6.43447096 145.150102,6.12604075 143.597037,6.12604075 C141.210262,6.12604075 139.525759,6.74954427 138.54495,7.99228075 C137.927616,8.7889797 137.582174,9.80395233 137.501507,11.0395712 L141.06791,11.0395712 C141.155694,10.4943615 141.330787,10.0625592 141.594139,9.7432153 C141.961883,9.31141302 142.58681,9.09551187 143.470818,9.09551187 C144.261348,9.09551187 144.85828,9.2036997 145.266831,9.42671846 C145.67301,9.64641567 145.877523,10.0464259 145.877523,10.6243767 C145.877523,11.1007827 145.613696,11.4495461 145.080824,11.6754119 C144.784256,11.8054271 144.292666,11.9131404 143.603206,11.9995009 L142.339117,12.1551395 C140.902781,12.3359271 139.812836,12.6396122 139.074027,13.0638224 C137.724052,13.8420155 137.049301,15.0980382 137.049301,16.8356865 C137.049301,18.1737991 137.467343,19.2101246 138.307696,19.9403924 C139.144729,20.6706602 140.210474,20.9771924 141.496865,21.0369804 C149.561603,21.3966575 149.470972,16.7868122 149.544995,15.8278315 L149.544995,10.5209339 C149.544995,8.81982272 148.940472,7.66012514 147.735696,7.04611178 L147.735696,7.04611178 Z",
                                id: "mercado_a",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M129.345854,9.28716566 C130.267823,9.28716566 130.944471,9.57187046 131.381967,10.1408056 C131.682331,10.5621687 131.869287,11.0371512 131.942836,11.5633806 L135.920162,11.5633806 C135.702363,9.5562117 135.000091,8.15498955 133.81477,7.36113765 C132.624704,6.5706073 131.101059,6.17249508 129.23814,6.17249508 C127.047337,6.17249508 125.326296,6.84582195 124.08356,8.18915412 C122.837027,9.53438433 122.214473,11.4139106 122.214473,13.8305798 C122.214473,15.970611 122.777714,17.7149024 123.90467,19.0591836 C125.032576,20.4025158 126.791577,21.0753681 129.180725,21.0753681 C131.573669,21.0753681 133.380121,20.2696535 134.596759,18.6577498 C135.360717,17.659385 135.788723,16.5988596 135.87888,15.4780717 L131.913891,15.4780717 C131.833224,16.2187787 131.601665,16.8233019 131.217788,17.2883197 C130.835334,17.751914 130.190952,17.9858465 129.278948,17.9858465 C127.994455,17.9858465 127.120885,17.4007781 126.656342,16.2268453 C126.40248,15.6009692 126.273414,14.7720037 126.273414,13.7404233 C126.273414,12.6580706 126.40248,11.7906699 126.656342,11.1353744 C127.139391,9.90450058 128.036211,9.28716566 129.345854,9.28716566",
                                id: "mercado_c",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M121.147636,6.17230528 C112.976134,6.17230528 113.459183,13.4080779 113.459183,13.4080779 L113.459183,20.7577325 L117.167938,20.7577325 L117.167938,13.8640801 C117.167938,12.734751 117.310765,11.8981934 117.593571,11.3544072 C118.102244,10.3906815 119.095864,9.90668331 120.57965,9.90668331 C120.690685,9.90668331 120.838257,9.91285192 121.019045,9.92091855 C121.199358,9.92993421 121.404345,9.94606748 121.64065,9.97358894 L121.64065,6.20030125 C121.475521,6.18891306 121.369232,6.18416798 121.32273,6.17989741 C121.275753,6.17610135 121.216914,6.17230528 121.147636,6.17230528",
                                id: "mercado_r",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M102.540801,10.0128308 C103.06276,9.47711121 103.794926,9.20853968 104.740146,9.20853968 C105.609444,9.20853968 106.336865,9.46050343 106.925255,9.96775249 C107.511273,10.473578 107.839158,11.2166576 107.905114,12.1927205 L101.560468,12.1927205 C101.692855,11.2754966 102.02074,10.5499738 102.540801,10.0128308 L102.540801,10.0128308 Z M107.525982,16.9178713 C107.370344,17.1399411 107.202368,17.3302188 107.018259,17.4782653 C106.494402,17.9100676 105.78264,18.0410318 104.944659,18.0410318 C104.15223,18.0410318 103.532523,17.9209812 102.970705,17.5669983 C102.045889,16.9985377 101.52488,16.0357609 101.469362,14.6231506 L111.730598,14.6231506 C111.744359,13.4069865 111.705449,12.4755273 111.607226,11.8273494 C111.436877,10.7241183 111.061541,9.75137684 110.485963,8.91481922 C109.845852,7.9658032 109.032071,7.27112348 108.050314,6.82935652 C107.069031,6.39186014 105.965325,6.17121391 104.740146,6.17121391 C102.673189,6.17121391 100.995803,6.82271341 99.7022943,8.12381437 C98.4083109,9.42776238 97.7587095,11.2968494 97.7587095,13.7372441 C97.7587095,16.3422931 98.4761656,18.2222938 99.9106033,19.3772463 C101.342668,20.5326733 102.998701,21.1115731 104.872534,21.1115731 C107.143054,21.1115731 108.910597,20.4263835 110.171839,19.0560044 C110.852283,18.3347522 111.278392,17.6210922 111.45823,16.9178713 L107.525982,16.9178713 Z",
                                id: "mercado_e",
                                fill: i,
                              }),
                              ei("path", {
                                d: "M96.2702253,20.7564513 L92.8827126,20.7564513 L92.8827126,12.2266953 C92.8827126,11.4475532 92.6250548,9.59412489 90.3905965,9.59412489 C88.9015904,9.59412489 87.8235082,10.668411 87.8235082,12.2266953 L87.8235082,20.7564513 L84.432674,20.7564513 L84.432674,12.2266953 C84.432674,11.4475532 84.2011141,9.59412489 81.9680794,9.59412489 C80.4525008,9.59412489 79.399093,10.668411 79.399093,12.2266953 L79.399093,20.7564513 L76.0096823,20.7564513 L76.0096823,12.3078362 C76.0096823,8.78603775 78.3461597,6.1230988 81.9680794,6.1230988 C83.7659902,6.1230988 85.2284239,6.87851555 86.1798125,8.08803647 C87.1805499,6.87851555 88.669556,6.1230988 90.3905965,6.1230988 C94.0884375,6.1230988 96.2702253,8.67832443 96.2702253,12.3078362 L96.2702253,20.7564513 Z",
                                id: "mercado_m",
                                fill: i,
                              })
                            )
                          )
                        );
                      },
                    })
                  );
                })({ logoColor: n.logoColor, optional: n.optional });
              },
            })),
            n
          );
        });
      }
      function ou(n, e) {
        var t = e.layout,
          r = e.platform,
          o = e.fundingSource,
          i = e.fundingEligibility,
          a = e.components,
          u = e.onShippingChange,
          l = e.flow,
          c = e.wallet,
          s = e.applePaySupport,
          d = e.supportsPopups,
          f = e.supportedNativeBrowser,
          p = e.experiment;
        if (!i[n] || !i[n].eligible) return !1;
        var h = ru()[n];
        if (!h) return !1;
        if (!h.enabled) return !1;
        if (!h.automatic && n !== o) return !1;
        if (
          h.eligible &&
          !h.eligible({
            components: a,
            experiment: p,
            fundingSource: o,
            fundingEligibility: i,
            layout: t,
            wallet: c,
          })
        )
          return !1;
        if (
          t &&
          h.layouts &&
          -1 === h.layouts.indexOf(t) &&
          (!o || t !== Aa.HORIZONTAL)
        )
          return !1;
        if (h.platforms && -1 === h.platforms.indexOf(r)) return !1;
        if (h.requires) {
          var m = h.requires({ platform: r });
          if (!0 === m.popup && !1 === d) return !1;
          if (!0 === m.applepay && !1 === s) return !1;
          if (!0 === m.native && !1 === f) return !1;
        }
        return !(
          (!1 === h.shippingChange && u) ||
          (h.flows && l && -1 === h.flows.indexOf(l))
        );
      }
      function iu(n) {
        var e = n.fundingSource,
          t = n.layout,
          r = n.platform,
          o = n.fundingEligibility,
          i = n.components,
          a = n.onShippingChange,
          u = n.flow,
          l = n.wallet,
          c = n.applePaySupport,
          s = n.supportsPopups,
          d = n.supportedNativeBrowser,
          f = n.experiment;
        if (e) return [e];
        var p = Ca.filter(function (n) {
          return ou(n, {
            layout: t,
            platform: r,
            fundingSource: e,
            fundingEligibility: o,
            components: i,
            onShippingChange: a,
            flow: u,
            wallet: l,
            applePaySupport: c,
            supportsPopups: s,
            supportedNativeBrowser: d,
            experiment: f,
          });
        });
        return (
          t === Aa.HORIZONTAL
            ? (p = p.slice(0, 2))
            : t === Aa.VERTICAL && (p = p.slice(0, 6)),
          p
        );
      }
      t(4), t(5), t(6);
      var au =
          (((Za = {})[Aa.HORIZONTAL] = ka.SMALL),
          (Za[Aa.VERTICAL] = ka.MEDIUM),
          Za),
        uu =
          (((Ua = {})[Aa.HORIZONTAL] = ka.HUGE),
          (Ua[Aa.VERTICAL] = ka.HUGE),
          Ua),
        lu =
          (((qa = {})[ka.TINY] = {
            defaultWidth: 75,
            defaultHeight: 25,
            minWidth: 75,
            maxWidth: 150,
            minHeight: 25,
            maxHeight: 30,
          }),
          (qa[ka.SMALL] = {
            defaultWidth: 150,
            defaultHeight: 25,
            minWidth: 150,
            maxWidth: 200,
            minHeight: 25,
            maxHeight: 55,
          }),
          (qa[ka.MEDIUM] = {
            defaultWidth: 250,
            defaultHeight: 35,
            minWidth: 200,
            maxWidth: 300,
            minHeight: 35,
            maxHeight: 55,
          }),
          (qa[ka.LARGE] = {
            defaultWidth: 350,
            defaultHeight: 45,
            minWidth: 300,
            maxWidth: 500,
            minHeight: 30,
            maxHeight: 55,
          }),
          (qa[ka.HUGE] = {
            defaultWidth: 500,
            defaultHeight: 55,
            minWidth: 500,
            maxWidth: 750,
            minHeight: 40,
            maxHeight: 55,
          }),
          qa),
        cu = {
          LOCALE: { country: tt.US, lang: rt.EN },
          COMMIT: !0,
          VAULT: !1,
          INTENT: "capture",
          ENV: at.PRODUCTION,
          PLATFORM: lt.DESKTOP,
        };
      function su(n, e) {
        if (!e) throw new Error("Expected props.style to be set");
        var t = (n = n || {}).fundingSource,
          r = ru(),
          o = r[t || ut.PAYPAL] || r[ut.PAYPAL];
        if (!o)
          throw new Error("Expected " + (t || ut.PAYPAL) + " to be eligible");
        var i = e.label,
          a = e.layout,
          u = void 0 === a ? (t ? Aa.HORIZONTAL : o.layouts[0]) : a,
          l = e.shape,
          c = void 0 === l ? o.shapes[0] : l,
          s = e.tagline,
          d = void 0 === s ? u === Aa.HORIZONTAL && !t : s,
          f = e.height,
          p = e.period;
        "false" === d && (d = !1);
        var h = e.color ? e.color : o.colors[0];
        if (-1 === In(Aa).indexOf(u)) throw new Error("Invalid layout: " + u);
        if (i && -1 === In(Sa).indexOf(i))
          throw new Error("Invalid label: " + i);
        if (h && -1 === o.colors.indexOf(h))
          throw new Error(
            "Unexpected style.color for " +
              (t || ut.PAYPAL) +
              " button: " +
              h +
              ", expected " +
              o.colors.join(", ")
          );
        if (c && -1 === o.shapes.indexOf(c))
          throw new Error(
            "Unexpected style.shape for " +
              (t || ut.PAYPAL) +
              " button: " +
              c +
              ", expected " +
              o.shapes.join(", ")
          );
        if (void 0 !== f) {
          if ("number" != typeof f)
            throw new TypeError(
              "Expected style.height to be a number, got: " + f
            );
          var m = [lu[ka.SMALL].minHeight, lu[ka.HUGE].maxHeight],
            g = m[0],
            y = m[1];
          if (f < g || f > y)
            throw new Error(
              "Expected style.height to be between " +
                g +
                "px and " +
                y +
                "px - got " +
                f +
                "px"
            );
        }
        if (u === Aa.VERTICAL && d)
          throw new Error(
            "style.tagline is not allowed for " + Aa.VERTICAL + " layout"
          );
        return {
          label: i,
          layout: u,
          color: h,
          shape: c,
          tagline: d,
          height: f,
          period: p,
        };
      }
      var du = In(tt),
        fu = In(ut),
        pu = In(at),
        hu = In(lt);
      function mu(n) {
        var e,
          t = n.uid,
          r = n.props,
          o = n.tag,
          i = n.context,
          a = n.frame,
          u = n.prerenderFrame,
          l = n.doc,
          c = n.container,
          s = n.event;
        if (a && u) {
          if (c && "button" === c.tagName.toLowerCase())
            throw new Error(
              "Do not render the PayPal button into a button element"
            );
          a.classList.add("component-frame"),
            u.classList.add("prerender-frame"),
            a.classList.add("invisible"),
            u.classList.add("visible"),
            s.on("zoid-rendered", function () {
              u.classList.remove("visible"),
                u.classList.add("invisible"),
                a.classList.remove("invisible"),
                a.classList.add("visible"),
                setTimeout(function () {
                  Ie(u);
                }, 1e3);
            });
          var d = r.style,
            f = r.nonce,
            p = d.label,
            h = d.layout,
            m = d.height,
            g = au[h],
            y = uu[h];
          if (m) {
            var v = In(ka).filter(function (n) {
              return lu[n] && m && lu[n].minHeight <= m && lu[n].maxHeight >= m;
            });
            v.sort(function (n, e) {
              return lu[n].defaultWidth - lu[e].defaultWidth;
            }),
              (g = v[0]);
          }
          var w = ei(
            "div",
            E(
              {
                id: t,
                class:
                  o +
                  " " +
                  o +
                  "-context-" +
                  i +
                  " " +
                  o +
                  "-label-" +
                  (p || "unknown") +
                  " " +
                  o +
                  "-layout-" +
                  h,
              },
              ((e = {}),
              (e["data-paypal-smart-button-version"] = "5.0.271"),
              e),
              {
                onRender: function (n) {
                  s.on("zoid-resize", function (e) {
                    var t = e.width,
                      r = e.height;
                    "number" == typeof t && (n.style.width = nt(t)),
                      "number" == typeof r && (n.style.height = nt(r));
                  });
                },
              }
            ),
            ei(
              "style",
              { nonce: f },
              "\n                    #" +
                t +
                " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: " +
                lu[g].minHeight +
                "px;\n                        min-width: " +
                lu[g].minWidth +
                "px;\n                        max-width: " +
                lu[y].maxWidth +
                "px;\n                        font-size: 0;\n                    }\n\n                    #" +
                t +
                " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                t +
                " > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #" +
                t +
                " > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                t +
                " > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #" +
                t +
                " > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #" +
                t +
                " > .smart-menu {\n                        position: absolute;\n                        z-index: 300;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                    }\n                "
            ),
            ei("node", { el: a }),
            ei("node", { el: u }),
            ei("div", { id: "smart-menu", class: "smart-menu" }),
            ei("div", { id: "installments-modal", class: "installments-modal" })
          ).render(ci({ doc: l }));
          return (
            s.on("zoid-rendered", function () {
              setTimeout(function () {
                w.style.transition = "all 0.2s ease-in-out";
              }, 1e3);
            }),
            w
          );
        }
      }
      function gu() {
        return function () {
          var n = "[optional]";
          function e(n) {
            return [].slice.call(n);
          }
          function t(n) {
            return e(n).filter(function (n) {
              return "style" !== n.tagName.toLowerCase();
            });
          }
          function r(n, e) {
            return t((e = e || document).querySelectorAll(n));
          }
          function o(n) {
            n.classList.remove("hidden");
          }
          function i(n) {
            return parseInt(n.getAttribute("optional") || 0, 10);
          }
          function a(n) {
            return (function (n) {
              for (var e = 0, t = 0; t < n.length; t++) e += n[t];
              return e;
            })(
              n.map(function (n) {
                return n.offsetWidth;
              })
            );
          }
          var u = (function (n) {
            for (var e = [], t = 0; t < n.length; t++) {
              var r = n[t];
              -1 === e.indexOf(r) && e.push(r);
            }
            return e;
          })(
            r(n)
              .map(function (n) {
                return n.parentElement;
              })
              .filter(Boolean)
          ).map(function (o) {
            return {
              optionalParent: o,
              allChildren: t(o.children),
              optionalChildren: e(r(n, o)).sort(function (n, e) {
                return i(n) - i(e);
              }),
            };
          });
          function l() {
            for (var n = 0; n < u.length; n++)
              for (
                var e = u[n],
                  t = e.optionalChildren,
                  r = e.optionalParent.offsetWidth,
                  i = a(e.allChildren) - a(t),
                  l = 0;
                l < t.length;
                l++
              ) {
                var c = t[l];
                (i += c.offsetWidth) > r ? c.classList.add("hidden") : o(c);
              }
          }
          var c,
            s,
            d,
            f = (function (n) {
              var e = !1;
              return function () {
                e || ((e = !0), n.apply(void 0, arguments));
              };
            })(
              ((c = function () {
                window.addEventListener("resize", l),
                  setTimeout(l),
                  document.body && document.body.classList.add("dom-ready");
              }),
              void 0 === s && (s = 50),
              function () {
                for (
                  var n = arguments.length, e = new Array(n), t = 0;
                  t < n;
                  t++
                )
                  e[t] = arguments[t];
                clearTimeout(d),
                  (d = setTimeout(function () {
                    c.apply(void 0, e);
                  }, s));
              })
            ),
            p = function () {
              l(), f();
            };
          l(),
            document.addEventListener("DOMContentLoaded", p),
            window.addEventListener("load", p),
            window.addEventListener("resize", p);
        };
      }
      function yu(n) {
        return ei("script", {
          nonce: n.nonce,
          innerHTML: "(" + gu().toString() + ")()",
        });
      }
      function vu(n) {
        var e = n.nonce,
          t = n.buttonAnimation,
          r =
            "\n        const scriptFns = " +
            gu().toString() +
            ";\n        scriptFns();\n        function onDomLoad(){ " +
            t +
            " };\n        document.addEventListener('DOMContentLoaded', onDomLoad);\n    ";
        return ei("script", {
          nonce: e,
          innerHTML: "(function(){ " + r + "})()",
        });
      }
      var wu =
          "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: left;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    span {\n        display: inline-block;\n    }\n\n    ." +
          _a.HIDDEN +
          " {\n        position: absolute !important;\n        visibility: hidden !important;\n    }\n\n    ." +
          _a.HIDDEN +
          " * {\n        visibility: hidden !important;\n    }\n",
        Cu =
          "\n\n    ." +
          _a.CONTAINER +
          ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' +
          _a.BUTTON +
          " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." +
          _a.BUTTON +
          " * {\n        cursor: pointer;\n    }\n\n    ." +
          _a.CONTAINER +
          "." +
          _a.ENV +
          "-" +
          at.TEST +
          " ." +
          _a.TEXT +
          " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." +
          _a.CARD +
          " {\n        cursor: pointer;\n    }\n\n    .paypal-logo {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." +
          _a.TEXT +
          ", ." +
          _a.SPACE +
          " {\n        display: inline-block;\n        white-space: pre;\n        vertical-align: top;\n    }\n\n    ." +
          _a.BUTTON +
          " > ." +
          _a.BUTTON_LABEL +
          " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." +
          _a.BUTTON +
          " > ." +
          _a.BUTTON_LABEL +
          " * {\n        vertical-align: middle;\n        height: 100%;\n        text-align: left;\n    }\n\n    ." +
          _a.TAGLINE +
          " {\n        max-width: 100%;\n        font-size: initial;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.SPINNER +
          " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " +
          _a.SPINNER +
          "-rotation .7s infinite linear;\n    }\n\n    @keyframes " +
          _a.SPINNER +
          "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.SPINNER +
          " {\n        display: none !important;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.LOADING +
          " * {\n        display: none !important;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.LOADING +
          " ." +
          _a.SPINNER +
          " {\n        display: block !important;\n    }\n\n    ." +
          _a.CONTAINER +
          " ." +
          _a.VAULT_HEADER +
          " {\n        margin-top: 10px;\n    }\n\n    @media only screen and (max-width: 250px) {\n        .menu-button {\n            display: none;\n        }\n        ." +
          _a.CONTAINER +
          " ." +
          _a.BUTTON_ROW +
          "." +
          _a.WALLET +
          "." +
          _a.WALLET_MENU +
          " ." +
          _a.BUTTON +
          "  {\n            border-top-right-radius: 4px;\n            border-bottom-right-radius: 4px;\n            width: 100%;\n        }\n    }\n",
        bu =
          "\n\n\n    ." +
          _a.BUTTON +
          "." +
          _a.TEXT_COLOR +
          "-black {\n        color: #2C2E2F;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.TEXT_COLOR +
          "-white {\n        color: #fff;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.TEXT_COLOR +
          "-black ." +
          _a.SPINNER +
          " {\n        border: 3px solid rgba(100, 100, 100, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.TEXT_COLOR +
          "-white ." +
          _a.SPINNER +
          " {\n        border: 3px solid rgba(200, 200, 200, 0.2);\n        border-top-color: rgba(255, 255, 255, .85);\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-gold,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-gold .menu-button {\n        background: #ffc439;\n    }\n\n    @media (hover:hover) {\n        ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-gold:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-gold:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-gold:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-blue,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-blue .menu-button {\n        background: #0070ba;\n    }\n\n    ." +
          _a.BUTTON +
          "[data-funding-source=" +
          ut.VENMO +
          "]." +
          _a.COLOR +
          "-blue {\n        background: #008CFF;\n    }\n\n    @media (hover:hover) {\n        ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-blue:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-blue:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-blue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #0000a6;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #009cde;\n        pointer-events: none;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-silver,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-silver .menu-button {\n        background: #eee;\n    }\n\n    @media (hover:hover) {\n        ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-silver:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-silver:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-silver:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-darkblue,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-darkblue .menu-button {\n        background: #003087;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-darkblue:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-darkblue:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-darkblue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-black,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-black .menu-button {\n        background: #2C2E2F;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-black:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-black:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-black:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-white,\n    ." +
          _a.BUTTON_ROW +
          "." +
          _a.COLOR +
          "-white .menu-button {\n        background: #fff;\n        border: 1px solid #555;\n    }\n\n    @media (hover:hover) {\n        ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-white:hover {\n            filter: brightness(0.95);\n        }\n    }\n    \n\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-white:focus {\n        outline: none;\n    }\n    ." +
          _a.BUTTON +
          "." +
          _a.COLOR +
          "-white:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.CARD +
          " {\n        position: relative;\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.CARD +
          "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.CARD +
          ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.CARD +
          ":focus {\n        outline: none;\n    }\n\n    ." +
          _a.BUTTON +
          " ." +
          _a.CARD +
          ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
      function Eu(n) {
        var e = n.nonce,
          t = (function (n) {
            return (
              "\n        " +
              wu +
              "\n        " +
              Cu +
              "\n        " +
              bu +
              "\n        " +
              Ya +
              "\n        " +
              (function (n) {
                var e = n.height,
                  t = n.fundingEligibility;
                return Object.keys(lu)
                  .map(function (n) {
                    var r,
                      o,
                      i = lu[n],
                      a = e || i.defaultHeight,
                      u = Math.max(Math.round(2.2 * a * (100 / 60)), 300),
                      l = t.paylater,
                      c =
                        "DE" ===
                        (null == l ||
                        null == (r = l.products) ||
                        null == (o = r.paylater)
                          ? void 0
                          : o.variant),
                      s = c ? 32 : 36,
                      d = Bn(Hn(jn(a, c ? 32 : 35) + 5, 2), 12),
                      f = Bn(Hn(jn(a, 35) + 5, 2), 12);
                    return (
                      "\n            @media only screen and (min-width: " +
                      i.minWidth +
                      "px) {\n\n                ." +
                      _a.CONTAINER +
                      " {\n                    min-width: " +
                      i.minWidth +
                      "px;\n                    max-width: " +
                      i.maxWidth +
                      "px;\n                }\n\n                ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.TEXT +
                      ", ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.SPACE +
                      " {\n                    font-size: " +
                      Bn(jn(a, 36), 10) +
                      "px;\n                    margin-top: -" +
                      jn(Bn(jn(a, 36), 10), 10) +
                      "px;\n                    line-height: " +
                      f +
                      "px;\n                }\n\n                ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.TEXT +
                      " * {\n                    margin-top: " +
                      jn(Bn(jn(a, 36), 10), 10) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      " {\n                    height: " +
                      a +
                      "px;\n                    vertical-align: top;\n                    min-height: " +
                      (e || i.minHeight) +
                      "px;\n                    max-height: " +
                      (e || i.maxHeight) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.VERTICAL +
                      " {\n                    margin-bottom: " +
                      jn(a, 30) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.VERTICAL +
                      ":last-of-type {\n                    margin-bottom: 0;\n                }\n\n                ." +
                      _a.BUTTON +
                      " {\n                    display: inline-block;\n                    text-align: center;\n                    height: 100%;\n                }\n                \n                ." +
                      _a.BUTTON +
                      " ." +
                      _a.SPINNER +
                      " {\n                    height: " +
                      jn(a, 50) +
                      "px;\n                    width: " +
                      jn(a, 50) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      " > ." +
                      _a.BUTTON_LABEL +
                      " {\n                    margin: 0px 4vw;\n                    height: " +
                      f +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.APPLEPAY +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " {\n                    height: " +
                      (jn(a, 80) + 5) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.APPLEPAY +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " ." +
                      _a.TEXT +
                      " {\n                    line-height: " +
                      (jn(a, 80) + 5) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.EPS +
                      "] ." +
                      _a.BUTTON_LABEL +
                      ",\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.MYBANK +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " {\n                    height: " +
                      (jn(a, 50) + 5) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.EPS +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " ." +
                      _a.TEXT +
                      ",\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.EPS +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " ." +
                      _a.SPACE +
                      ",\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.MYBANK +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " ." +
                      _a.TEXT +
                      ",\n                ." +
                      _a.BUTTON +
                      "[data-funding-source=" +
                      ut.MYBANK +
                      "] ." +
                      _a.BUTTON_LABEL +
                      " ." +
                      _a.SPACE +
                      " {\n                    line-height: " +
                      (jn(a, 50) + 5) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "." +
                      _a.SHAPE +
                      "-rect {\n                    border-radius: 4px;\n                }\n\n                ." +
                      _a.BUTTON +
                      "." +
                      _a.SHAPE +
                      "-pill {\n                    border-radius: " +
                      Math.ceil(a / 2) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.SHAPE +
                      "-rect .menu-button {\n                    border-top-right-radius: 4px;\n                    border-bottom-right-radius: 4px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.SHAPE +
                      "-pill .menu-button {\n                    border-top-right-radius: " +
                      Math.ceil(a / 2) +
                      "px;\n                    border-bottom-right-radius: " +
                      Math.ceil(a / 2) +
                      "px;\n                }\n                \n                ." +
                      _a.TAGLINE +
                      " ." +
                      _a.TEXT +
                      " {\n                    height: " +
                      jn(a, 50) +
                      "px;\n                    line-height: " +
                      jn(a, 50) +
                      "px;\n                }\n\n                ." +
                      _a.CARD +
                      " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.WALLET +
                      "." +
                      _a.WALLET_MENU +
                      " ." +
                      _a.BUTTON +
                      " {\n                    width: calc(100% - " +
                      (a + 2) +
                      "px);\n                    border-top-right-radius: 0px;\n                    border-bottom-right-radius: 0px;\n                }\n\n                .menu-button {\n                    height: " +
                      a +
                      "px;\n                    width: " +
                      a +
                      "px;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      i.minWidth +
                      "px) and (max-width: 320px) {\n\n                ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.TEXT +
                      ", ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.SPACE +
                      " {\n                    font-size: " +
                      Bn(jn(a, s), 10) +
                      "px;\n                    margin-top: -" +
                      jn(Bn(jn(a, s), 10), 10) +
                      "px;\n                    line-height: " +
                      d +
                      "px;\n                }\n\n\n                ." +
                      _a.CONTAINER +
                      " ." +
                      _a.BUTTON_ROW +
                      " ." +
                      _a.TEXT +
                      " * {\n                    margin-top: " +
                      jn(Bn(jn(a, s), 10), 10) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON +
                      " > ." +
                      _a.BUTTON_LABEL +
                      " {\n                    margin: 0px 4vw;\n                    height: " +
                      d +
                      "px;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      i.minWidth +
                      "px) and (max-width: " +
                      u +
                      "px) {\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple." +
                      _a.NUMBER +
                      "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple." +
                      _a.NUMBER +
                      "-1 {\n                    display: none;\n                }\n\n                ." +
                      _a.CONTAINER +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple ." +
                      _a.TAGLINE +
                      " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      Bn(i.minWidth, u) +
                      "px) {\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple." +
                      _a.NUMBER +
                      "-0 {\n                    display: inline-block;\n                    width: calc(50% - " +
                      jn(a, 7) +
                      "px);\n                    margin-right: " +
                      2 * jn(a, 7) +
                      "px;\n                }\n\n                ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple." +
                      _a.NUMBER +
                      "-1 {\n                    display: inline-block;\n                    width: calc(50% - " +
                      jn(a, 7) +
                      "px);\n                }\n\n                ." +
                      _a.CONTAINER +
                      "." +
                      _a.WALLET +
                      " ." +
                      _a.BUTTON_ROW +
                      "." +
                      _a.WALLET +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple {\n                    width: calc(60% - " +
                      jn(a, 7) +
                      "px);\n                }\n\n                ." +
                      _a.CONTAINER +
                      "." +
                      _a.WALLET +
                      " ." +
                      _a.BUTTON_ROW +
                      ":not(." +
                      _a.WALLET +
                      ")." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple {\n                    width: calc(40% - " +
                      jn(a, 7) +
                      "px);\n                }\n\n                ." +
                      _a.CONTAINER +
                      "." +
                      _a.LAYOUT +
                      "-" +
                      Aa.HORIZONTAL +
                      "." +
                      _a.NUMBER +
                      "-multiple ." +
                      _a.TAGLINE +
                      " {\n                    display: block;\n                }\n            }\n        \n        "
                    );
                  })
                  .join("\n");
              })({
                height: n.height,
                fundingEligibility: n.fundingEligibility,
              }) +
              "\n    "
            );
          })({
            height: n.style.height,
            fundingEligibility: n.fundingEligibility,
          });
        return ei("style", { nonce: e, innerHTML: t });
      }
      function Lu() {
        return ei("div", { class: _a.SPINNER });
      }
      var xu = ["color"];
      function Ou(n) {
        var e = void 0 === n ? {} : n,
          t = e.color,
          r = void 0 === t ? "#848484" : t,
          o = l(e, xu);
        return ei(
          wi,
          E({}, o, {
            name: "chevron",
            render: function () {
              return ei(
                "svg",
                {
                  width: "256",
                  height: "158.18601989746094",
                  viewBox: "-1.935 0.221 256 158.186",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                ei("polygon", {
                  points:
                    "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407",
                  transform: "matrix(1, 0, 0, 1, 0, 0)",
                  fill: r,
                })
              );
            },
          })
        );
      }
      var Pu = t(7),
        Tu = t.n(Pu);
      function Nu(n) {
        var e,
          t = (void 0 === n ? {} : n).textColor,
          r = void 0 === t ? "black" : t;
        return ei(
          fi,
          { css: Tu.a, "data-v-18055577": "" },
          ei(
            "div",
            E({}, (((e = {})["data-menu"] = !0), e), {
              tabindex: "0",
              class: "menu-button",
              "data-v-18055577": "",
            }),
            ei(Ou, { color: r, "data-v-18055577": "" })
          )
        );
      }
      function Su(n) {
        var e,
          t = n.fundingSource,
          r = n.style,
          o = n.multiple,
          i = n.locale,
          a = n.env,
          u = n.fundingEligibility,
          l = n.i,
          c = n.nonce,
          s = n.flow,
          d = n.vault,
          f = n.userIDToken,
          p = n.personalization,
          h = n.onClick,
          m = void 0 === h ? An : h,
          g = n.content,
          y = n.tagline,
          v = n.commit,
          w = n.experiment,
          C = n.instrument,
          b = ru()[t];
        if (!b) throw new Error("Can not find funding config for " + t);
        var L = b.colors,
          x = b.secondaryColors || {},
          O = r.color,
          P = void 0 === O ? L[0] : O,
          T = r.period,
          N = r.label;
        o &&
          l > 0 &&
          (P =
            x[P] && L.indexOf(-1 !== x[P])
              ? x[P]
              : -1 !== L.indexOf(x.default)
              ? x.default
              : L[0]);
        var S = b.logoColors,
          k = b.textColors,
          A = S[P] || S.default || "default",
          _ = k[P] || k.default || "default",
          M = b.Label,
          R = b.WalletLabel,
          F = b.Logo,
          D = b.showWalletMenu,
          I = function (n, e) {
            n.preventDefault(),
              n.stopPropagation(),
              m(n, E({ fundingSource: t }, e));
          },
          j = function (n, e) {
            (13 !== n.keyCode && 32 !== n.keyCode) || I(n, e);
          },
          B = r.layout,
          H = r.shape,
          W =
            "function" == typeof b.labelText
              ? b.labelText({ content: g })
              : b.labelText || t,
          Z = ei(F, {
            label: N,
            locale: i,
            logoColor: A,
            fundingEligibility: u,
            onClick: I,
            onKeyPress: j,
            nonce: c,
            experiment: w,
            env: a,
          }),
          U = ei(M, {
            i: l,
            logo: Z,
            label: N,
            nonce: c,
            locale: i,
            logoColor: A,
            period: T,
            layout: B,
            multiple: o,
            fundingEligibility: u,
            onClick: I,
            onKeyPress: j,
            personalization: p,
            tagline: y,
            content: g,
          }),
          q = {},
          z = q.buttonAnimationContainerClass,
          G = void 0 === z ? "" : z,
          V = q.buttonAnimationComponent,
          Y = void 0 === V ? null : V;
        Y &&
          (U = ei(nu, {
            i: l,
            logo: Z,
            label: N,
            nonce: c,
            locale: i,
            logoColor: A,
            period: T,
            layout: B,
            multiple: o,
            fundingEligibility: u,
            onClick: I,
            onKeyPress: j,
            personalization: p,
            tagline: y,
            content: g,
            buttonAnimationComponent: Y,
          }));
        var K = !1;
        R &&
          "purchase" === s &&
          (C || (f && (t === ut.PAYPAL || t === ut.VENMO))) &&
          ((U = ei(R, {
            nonce: c,
            logoColor: A,
            instrument: C,
            locale: i,
            content: g,
            commit: v,
            experiment: w,
            vault: d,
            textColor: _,
            fundingSource: t,
          })),
          (K = !0));
        var J = K && C && D({ instrument: C });
        return ei(
          "div",
          {
            class: [
              _a.BUTTON_ROW,
              _a.NUMBER + "-" + l,
              _a.LAYOUT + "-" + B,
              _a.SHAPE + "-" + H,
              _a.NUMBER + "-" + (o ? "multiple" : "single"),
              _a.ENV + "-" + a,
              _a.COLOR + "-" + P,
              _a.TEXT_COLOR + "-" + _,
              "paypal-logo-color-" + A,
              "" + (K ? _a.WALLET : ""),
              "" + (J ? _a.WALLET_MENU : ""),
              "" + G,
            ].join(" "),
          },
          ei(
            "div",
            E(
              { role: "button" },
              (((e = {})["data-button"] = !0),
              (e["data-funding-source"] = t),
              (e["data-payment-method-id"] = C ? C.tokenID : null),
              (e["data-instrument-id"] = C ? C.instrumentID : null),
              (e["data-instrument-type"] = C ? C.type : null),
              e),
              {
                class: [
                  _a.BUTTON,
                  _a.NUMBER + "-" + l,
                  _a.LAYOUT + "-" + B,
                  _a.SHAPE + "-" + H,
                  _a.NUMBER + "-" + (o ? "multiple" : "single"),
                  _a.ENV + "-" + a,
                  _a.COLOR + "-" + P,
                  _a.TEXT_COLOR + "-" + _,
                  "paypal-logo-color-" + A,
                  "" + (K ? _a.WALLET : ""),
                ].join(" "),
                onClick: I,
                onRender: function (n) {
                  he() &&
                    ve(n) &&
                    (function (n) {
                      var e = function e(t) {
                        return (
                          n.removeEventListener("focus", e),
                          t.preventDefault(),
                          n.blur(),
                          !1
                        );
                      };
                      n.addEventListener("mousedown", function () {
                        n.addEventListener("focus", e),
                          setTimeout(function () {
                            n.removeEventListener("focus", e);
                          }, 1);
                      });
                    })(n);
                },
                onKeyPress: j,
                tabindex: "0",
                "aria-label": W,
              }
            ),
            ei("div", { class: _a.BUTTON_LABEL }, U),
            ei(Lu, null)
          ),
          J ? ei(Nu, { textColor: _ }) : null
        );
      }
      function ku(n) {
        var e = n.fundingSource,
          t = n.locale,
          r = n.multiple,
          o = n.nonce,
          i = n.personalization,
          a = ru()[e];
        if (!a) throw new Error("Can not get config for " + e);
        var u = a.Tag;
        if (u) {
          var l = i && i.tagline;
          return ei(
            "div",
            { class: _a.TAGLINE },
            l
              ? ei(
                  ti,
                  null,
                  ei(
                    "span",
                    null,
                    l.Component ? ei(l.Component, null) : l.text
                  ),
                  l.tracking &&
                    l.tracking.impression &&
                    ei(Wa, { url: l.tracking.impression, nonce: o })
                )
              : ei(u, { locale: t, multiple: r })
          );
        }
      }
      var Au,
        _u =
          "\n    ." +
          _a.POWERED_BY +
          ' {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n\n    .' +
          _a.POWERED_BY +
          " > ." +
          _a.TEXT +
          ",\n    ." +
          _a.POWERED_BY +
          " > .paypal-logo {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n        font-size: 11px;\n    }\n";
      function Mu(n) {
        return ei(
          "div",
          { class: _a.POWERED_BY },
          ei("style", { nonce: n.nonce, innerHTML: _u }),
          ei(Da, null)
        );
      }
      function Ru(n) {
        var e = n.wallet;
        if (
          (t = { wallet: e, onShippingChange: n.onShippingChange }).wallet &&
          !t.onShippingChange
        ) {
          var t,
            r = e && e[n.fundingSource.toString()],
            o = r && r.instruments;
          if (o && o.length) return o[0];
        }
      }
      var Fu = (((Au = {})[ut.CREDIT] = "credit"), Au);
      function Du(n) {
        var e = n.onClick,
          t = void 0 === e ? An : e,
          r = (function (n) {
            if (!n) throw new Error("Expected props");
            var e = n.clientID,
              t = n.fundingSource,
              r = n.style,
              o = void 0 === r ? {} : r,
              i = n.remembered,
              a = void 0 === i ? [] : i,
              u = n.locale,
              l = void 0 === u ? cu.LOCALE : u,
              c = n.env,
              s = void 0 === c ? cu.ENV : c,
              d = n.platform,
              f = void 0 === d ? cu.PLATFORM : d,
              p = n.commit,
              h = void 0 === p ? cu.COMMIT : p,
              m = n.fundingEligibility,
              g = n.sessionID,
              y = void 0 === g ? En() : g,
              v = n.buttonSessionID,
              w = void 0 === v ? En() : v,
              C = n.components,
              b = void 0 === C ? ["buttons"] : C,
              E = n.nonce,
              L = n.onShippingChange,
              x = n.personalization,
              O = n.clientAccessToken,
              P = n.content,
              T = n.wallet,
              N = n.flow,
              S = void 0 === N ? "purchase" : N,
              k = n.experiment,
              A = void 0 === k ? {} : k,
              _ = n.vault,
              M = n.userIDToken,
              R = n.applePay,
              F = n.applePaySupport,
              D = void 0 !== F && F,
              I = n.supportsPopups,
              j = void 0 !== I && I,
              B = n.supportedNativeBrowser,
              H = void 0 !== B && B,
              W = l.country,
              Z = l.lang;
            if (!W || -1 === du.indexOf(W))
              throw new Error(
                "Expected valid country, got " + (W || "undefined")
              );
            if (!Z || -1 === ot[W].indexOf(Z))
              throw new Error("Expected valid lang, got " + (Z || "undefined"));
            if (
              a.some(function (n) {
                return -1 === fu.indexOf(n);
              })
            )
              throw new Error(
                "Expected valid funding sources, got " + JSON.stringify(a)
              );
            if (-1 === pu.indexOf(s))
              throw new Error("Expected valid env, got " + (s || "undefined"));
            if (!m) throw new Error("Expected fundingEligibility");
            if (-1 === hu.indexOf(f))
              throw new Error(
                "Expected valid platform, got " + (f || "undefined")
              );
            if (t) {
              if (-1 === Ca.indexOf(t))
                throw new Error("Invalid funding source: " + t);
              if (
                !ou(t, {
                  platform: f,
                  fundingSource: t,
                  fundingEligibility: m,
                  components: b,
                  onShippingChange: L,
                  flow: S,
                  wallet: T,
                  applePaySupport: D,
                  supportsPopups: j,
                  supportedNativeBrowser: H,
                })
              )
                throw new Error("Funding Source not eligible: " + t);
            }
            return {
              clientID: e,
              fundingSource: t,
              style: (o = su(n, o)),
              locale: l,
              remembered: a,
              env: s,
              fundingEligibility: m,
              platform: f,
              clientAccessToken: O,
              buttonSessionID: w,
              commit: h,
              sessionID: y,
              nonce: E,
              components: b,
              onShippingChange: L,
              personalization: x,
              content: P,
              wallet: T,
              flow: S,
              experiment: A,
              vault: _,
              userIDToken: M,
              applePay: R,
              applePaySupport: D,
              supportsPopups: j,
              supportedNativeBrowser: H,
            };
          })(n),
          o = r.wallet,
          i = r.fundingSource,
          a = r.style,
          u = r.locale,
          l = r.env,
          c = r.fundingEligibility,
          s = r.commit,
          d = r.vault,
          f = r.nonce,
          p = r.onShippingChange,
          h = r.personalization,
          m = r.userIDToken,
          g = r.content,
          y = r.flow,
          v = r.experiment,
          w = a.layout,
          C = a.shape,
          b = a.tagline,
          E = iu({
            fundingSource: i,
            layout: w,
            remembered: r.remembered,
            platform: r.platform,
            fundingEligibility: c,
            components: r.components,
            onShippingChange: p,
            flow: y,
            wallet: o,
            applePaySupport: r.applePaySupport,
            supportsPopups: r.supportsPopups,
            supportedNativeBrowser: r.supportedNativeBrowser,
            experiment: v,
          }),
          L = E.length > 1;
        if (!E.length)
          throw new Wo(
            "No eligible funding fundingSources found to render buttons:\n\n" +
              JSON.stringify(c, null, 4)
          );
        -1 !== E.indexOf(ut.CARD) &&
          (E = E.filter(function (n) {
            return n !== ut.CARD;
          }).concat([ut.CARD]));
        var x = (function (n) {
            for (
              var e = n.wallet,
                t = n.layout,
                r = n.fundingSources,
                o = n.onShippingChange,
                i = {},
                a = 0;
              a < r.length;
              a++
            ) {
              var u = r[a],
                l = Ru({ wallet: e, fundingSource: u, onShippingChange: o });
              l && (i[u] = l);
            }
            for (var c = 0, s = Object.keys(i); c < s.length; c++)
              for (
                var d = s[c], f = 0, p = Object.keys(Fu);
                f < p.length;
                f++
              ) {
                var h = p[f];
                d !== h &&
                  -1 !== r.indexOf(h) &&
                  i[d] &&
                  i[d].type === Fu[h] &&
                  delete i[d];
              }
            if (t === Aa.HORIZONTAL)
              for (var m = !1, g = 0; g < r.length; g++) {
                var y = r[g];
                i[y] && (m ? delete i[y] : (m = !0));
              }
            return i;
          })({ wallet: o, fundingSources: E, layout: w, onShippingChange: p }),
          O = "purchase" === y && (m || Object.keys(x).length),
          P = {}.buttonAnimationScript,
          T = void 0 === P ? "" : P;
        return ei(
          "div",
          {
            class: [
              _a.CONTAINER,
              _a.LAYOUT + "-" + w,
              _a.SHAPE + "-" + C,
              _a.NUMBER + "-" + (L ? "multiple" : "single"),
              _a.ENV + "-" + l,
              "" + (O ? _a.WALLET : ""),
            ].join(" "),
          },
          ei(Eu, { nonce: f, style: a, fundingEligibility: c }),
          E.map(function (n, e) {
            return ei(Su, {
              content: g,
              i: e,
              style: a,
              merchantFundingSource: i,
              fundingSource: n,
              multiple: L,
              env: l,
              locale: u,
              nonce: f,
              fundingEligibility: c,
              wallet: o,
              onShippingChange: p,
              onClick: t,
              userIDToken: m,
              personalization: h,
              tagline: b,
              commit: s,
              experiment: v,
              flow: y,
              vault: d,
              instrument: x[n],
            });
          }),
          b && w === Aa.HORIZONTAL && !i
            ? ei(ku, {
                fundingSource: E[0],
                style: a,
                locale: u,
                multiple: L,
                nonce: f,
                personalization: h,
              })
            : null,
          -1 !== E.indexOf(ut.CARD)
            ? ei("div", {
                id: "card-fields-container",
                class: "card-fields-container",
              })
            : null,
          w === Aa.VERTICAL && -1 !== E.indexOf(ut.CARD)
            ? ei(Mu, { locale: u, nonce: f })
            : null,
          T ? ei(vu, { nonce: f, buttonAnimation: T }) : ei(yu, { nonce: f })
        );
      }
      function Iu(n) {
        var e,
          t = n.nonce,
          r = n.onRenderCheckout,
          o = n.props;
        return ei(
          "html",
          null,
          ei(
            "body",
            null,
            ei(
              Du,
              E({}, o, {
                onClick: function (n, i) {
                  var a,
                    u = i.fundingSource,
                    l = i.card;
                  if (
                    (Xt()
                      .info("button_prerender_click")
                      .track(
                        ((a = {}),
                        (a.button_session_id = o.buttonSessionID),
                        (a.context_type = "button_session_id"),
                        (a.context_id = o.buttonSessionID),
                        (a.transition_name = "process_button_prerender_click"),
                        (a.selected_payment_method = u),
                        a)
                      )
                      .flush(),
                    u === ut.VENMO)
                  );
                  else if (g()) {
                    (e && !e.closed) ||
                      (e = q(xe("", { width: 500, height: 590 })));
                    var c = window.document,
                      s = ei(ya, { nonce: t }).render(ci({ doc: c }));
                    Oe(e, s), r({ win: e, fundingSource: u, card: l });
                  } else r({ fundingSource: u, card: l });
                },
              })
            )
          )
        );
      }
      function ju(n) {
        return n.createBillingAgreement
          ? "billing_setup"
          : n.createSubscription
          ? "subscription_setup"
          : "purchase";
      }
      function Bu() {
        return !(
          "undefined" == typeof window ||
          !g() ||
          (function (n) {
            if ((void 0 === n && (n = s()), m(n))) {
              var e = c[window.outerHeight];
              if (!e) return !1;
              var t = window.innerHeight,
                r =
                  Math.round((window.screen.width / window.innerWidth) * 100) /
                  100,
                o = Math.round(t * r);
              return r > 1 && e.zoomHeight[r]
                ? -1 !== e.zoomHeight[r].indexOf(o)
                : -1 !== e.textSizeHeights.indexOf(o);
            }
            return !1;
          })() ||
          (void 0 === n && (n = s()),
          d.test(n) || ((!m() || !v()) && (!h() || !y())))
        );
        var n;
      }
      function Hu() {
        var n = At(),
          e = n && -1 !== n.indexOf(ut.VENMO),
          t = gt(),
          r = t && t[ut.VENMO] && t[ut.VENMO].eligible,
          o = Bu() && !e;
        if (r) {
          if (!f()) return nr("enable_venmo_desktop", 90);
          if (o)
            return m() && v()
              ? nr("enable_venmo_ios", 90)
              : h() && y()
              ? nr("enable_venmo_android", 90)
              : void 0;
        }
      }
      function Wu() {
        var n = Hu(),
          e = At(),
          t = e && -1 !== e.indexOf(ut.VENMO),
          r = Bu(),
          o = n && n.isEnabled();
        return f()
          ? { enableVenmo: Boolean((o || t) && r) }
          : { enableVenmo: Boolean(o) };
      }
      function Zu(n) {
        var e,
          t,
          r,
          o,
          i = _t(),
          a = i && -1 !== i.indexOf(ut.PAYLATER),
          u = At(),
          l = u && -1 !== u.indexOf(ut.PAYLATER),
          c = gt().paylater,
          s =
            "experimentable" ===
              (null == c || null == (e = c.products) || null == (t = e.paylater)
                ? void 0
                : t.variant) ||
            "experimentable" ===
              (null == c || null == (r = c.products) || null == (o = r.payIn4)
                ? void 0
                : o.variant);
        if ((null == c ? void 0 : c.eligible) && s && !a && !l && !n)
          return nr("disable_paylater", 0);
      }
      function Uu(n) {
        var e = Zu(n),
          t = _t(),
          r = t && -1 !== t.indexOf(ut.PAYLATER),
          o = e && e.isEnabled();
        return { disablePaylater: Boolean(o || r) };
      }
      function qu() {
        try {
          if (!window.ApplePaySession) return;
          var n = function (n) {
            return n.errors && n.errors.length
              ? n.errors.map(function (n) {
                  return new window.ApplePayError(
                    n.code,
                    n.contactField,
                    n.message
                  );
                })
              : n;
          };
          return function (e, t) {
            var r = new window.ApplePaySession(e, t),
              o = {};
            return (
              (r.onvalidatemerchant = function (n) {
                o.validatemerchant({ validationURL: n.validationURL });
              }),
              (r.onpaymentmethodselected = function (n) {
                o.paymentmethodselected({ paymentMethod: n.paymentMethod });
              }),
              (r.onshippingmethodselected = function (n) {
                o.shippingmethodselected({ shippingMethod: n.shippingMethod });
              }),
              (r.onshippingcontactselected = function (n) {
                o.shippingcontactselected({
                  shippingContact: n.shippingContact,
                });
              }),
              (r.onpaymentauthorized = function (n) {
                o.paymentauthorized({ payment: n.payment });
              }),
              (r.oncancel = function () {
                o.cancel();
              }),
              {
                addEventListener: function (n, e) {
                  o[n] = e;
                },
                completeMerchantValidation: function (n) {
                  r.completeMerchantValidation(n);
                },
                completePaymentMethodSelection: function (n) {
                  r.completePaymentMethodSelection(n);
                },
                completeShippingMethodSelection: function (n) {
                  r.completeShippingMethodSelection(n);
                },
                completeShippingContactSelection: function (e) {
                  var t = n(e);
                  r.completeShippingContactSelection(t);
                },
                completePayment: function (e) {
                  var t = n(e);
                  r.completePayment(t);
                },
                begin: function () {
                  return r.begin();
                },
              }
            );
          };
        } catch (n) {
          return;
        }
      }
      var zu = Nn(function () {
        var n = [];
        return jo({
          tag: "paypal-buttons",
          url: function () {
            return "https://www.sandbox.paypal.com/smart/buttons";
          },
          domain: Kt(),
          autoResize: { width: !1, height: !0 },
          containerTemplate: mu,
          logger: Xt(),
          prerenderTemplate: function (n) {
            var e = n.state,
              t = n.props,
              r = n.doc;
            return ei(Iu, {
              nonce: t.nonce,
              props: t,
              onRenderCheckout: function (n) {
                e.prerenderDetails = {
                  win: n.win,
                  fundingSource: n.fundingSource,
                  card: n.card,
                };
              },
            }).render(ci({ doc: r }));
          },
          attributes: {
            iframe: {
              allowpaymentrequest: "allowpaymentrequest",
              scrolling: "no",
              title: "PayPal",
            },
          },
          eligible: function (e) {
            var t,
              r = e.props,
              o = r.fundingSource,
              i = r.onShippingChange,
              a = r.style,
              u = void 0 === a ? {} : a,
              l = r.fundingEligibility,
              c = void 0 === l ? Na() : l,
              s = r.supportsPopups,
              d = void 0 === s ? g() : s,
              f = r.supportedNativeBrowser,
              p = void 0 === f ? Bu() : f,
              h = r.experiment,
              m = void 0 === h ? E({}, Wu(), Uu(o)) : h,
              y = ju({
                createBillingAgreement: r.createBillingAgreement,
                createSubscription: r.createSubscription,
              }),
              v =
                !(null == c || null == (t = c.applepay) || !t.eligible) && w();
            return o
              ? (-1 === n.indexOf(o) && n.push(o),
                ou(o, {
                  layout: u.layout,
                  platform: yt(),
                  fundingSource: o,
                  fundingEligibility: c,
                  components: ["buttons"],
                  onShippingChange: i,
                  flow: y,
                  applePaySupport: v,
                  supportsPopups: d,
                  supportedNativeBrowser: p,
                  experiment: m,
                })
                  ? { eligible: !0 }
                  : { eligible: !1, reason: o + " is not eligible" })
              : { eligible: !0 };
          },
          props: {
            fundingSource: {
              type: "string",
              queryParam: !0,
              required: !1,
              validate: function (n) {
                var e = n.props,
                  t = e.fundingSource,
                  r = e.onShippingChange,
                  o = e.style,
                  i = void 0 === o ? {} : o,
                  a = e.fundingEligibility,
                  u = void 0 === a ? Na() : a,
                  l = e.applePaySupport,
                  c = e.supportsPopups,
                  s = e.supportedNativeBrowser,
                  d = ju({
                    createBillingAgreement: e.createBillingAgreement,
                    createSubscription: e.createSubscription,
                  }),
                  f = i.layout,
                  p = yt();
                if (
                  t &&
                  !ou(t, {
                    layout: f,
                    platform: p,
                    fundingSource: t,
                    fundingEligibility: u,
                    components: ["buttons"],
                    onShippingChange: r,
                    flow: d,
                    applePaySupport: l,
                    supportsPopups: c,
                    supportedNativeBrowser: s,
                  })
                )
                  throw new Error(t + " is not eligible");
              },
            },
            style: {
              type: "object",
              queryParam: !0,
              required: !1,
              decorate: function (n) {
                return su(n.props, n.value);
              },
              validate: function (n) {
                var e = n.value;
                su(n.props, void 0 === e ? {} : e);
              },
              default: function () {
                return {};
              },
            },
            storageState: {
              type: "object",
              value: function () {
                return qo;
              },
            },
            sessionState: {
              type: "object",
              value: function () {
                return zo;
              },
            },
            components: { type: "array", queryParam: !0, value: mt },
            locale: { type: "object", queryParam: !0, value: Ht },
            sdkMeta: {
              type: "string",
              queryParam: !0,
              sendToChild: !1,
              value: Qt,
            },
            createOrder: { type: "function", required: !1 },
            createBillingAgreement: { type: "function", required: !1 },
            createSubscription: { type: "function", required: !1 },
            onApprove: { type: "function", required: !1 },
            onShippingChange: {
              type: "function",
              required: !1,
              queryParam: !0,
              queryValue: function (n) {
                return n.value ? "true" : "false";
              },
            },
            onCancel: { type: "function", required: !1 },
            onClick: { type: "function", required: !1 },
            getPrerenderDetails: {
              type: "function",
              value: function (n) {
                var e = n.state;
                return function () {
                  return e.prerenderDetails;
                };
              },
            },
            getPopupBridge: {
              type: "function",
              required: !1,
              value: function () {
                return function () {
                  if (window.popupBridge)
                    return {
                      nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                      start: function (n) {
                        return new A(function (e, t) {
                          (window.popupBridge.onComplete = function (n, r) {
                            var o = r && r.queryItems ? r.queryItems : {};
                            return n ? t(n) : e(o);
                          }),
                            window.popupBridge.open(n);
                        });
                      },
                    };
                };
              },
            },
            onInit: {
              type: "function",
              required: !1,
              default: function () {
                return An;
              },
              decorate: function (n) {
                var e = n.props,
                  t = n.value,
                  r = void 0 === t ? An : t;
                return function () {
                  var n,
                    t = e.fundingSource,
                    o = Hu();
                  o &&
                    o.logStart(
                      (((n = {}).button_session_id = e.buttonSessionID), n)
                    );
                  var i,
                    a = Zu(t);
                  return (
                    a &&
                      a.logStart(
                        (((i = {}).button_session_id = e.buttonSessionID),
                        (i.context_id = e.buttonSessionID),
                        (i.context_type = "button_session_id"),
                        i)
                      ),
                    r.apply(void 0, arguments)
                  );
                };
              },
            },
            getQueriedEligibleFunding: {
              type: "function",
              value: function () {
                return function () {
                  return n;
                };
              },
            },
            clientID: { type: "string", value: Ot, queryParam: !0 },
            clientAccessToken: {
              type: "string",
              required: !1,
              queryParam: !0,
              value: jt,
            },
            partnerAttributionID: { type: "string", required: !1, value: Bt },
            enableThreeDomainSecure: { type: "boolean", value: Zt },
            sdkCorrelationID: {
              type: "string",
              required: !1,
              value: pt,
              queryParam: !0,
            },
            storageID: { type: "string", value: or, queryParam: !0 },
            sessionID: { type: "string", value: Uo, queryParam: !0 },
            buttonSessionID: { type: "string", value: En, queryParam: !0 },
            enableVault: { type: "boolean", required: !1, queryParam: !0 },
            env: { type: "string", queryParam: !0, value: ct },
            amount: { type: "string", required: !1, queryParam: !0, value: Dt },
            stageHost: { type: "string", value: st, required: !1 },
            apiStageHost: { type: "string", value: dt, required: !1 },
            fundingEligibility: {
              type: "object",
              default: Na,
              value: "sandbox" === at.LOCAL ? void 0 : Na,
              queryParam: !0,
              serialization: "base64",
            },
            platform: { type: "string", queryParam: !0, value: yt },
            remembered: { type: "array", queryParam: !0, value: Ea },
            experiment: {
              type: "object",
              queryParam: !0,
              value: function (n) {
                var e = n.props.fundingSource;
                return E({}, Wu(), Uu(e));
              },
            },
            flow: {
              type: "string",
              queryParam: !0,
              value: function (n) {
                var e = n.props;
                return ju({
                  createBillingAgreement: e.createBillingAgreement,
                  createSubscription: e.createSubscription,
                });
              },
            },
            remember: {
              type: "function",
              value: function () {
                return function (n) {
                  return (function (n, e) {
                    void 0 === e && (e = {});
                    var t = In(ut),
                      r = e.cookie,
                      o = void 0 === r || r,
                      i = e.expiry;
                    if (!n || !n.length)
                      throw new Error("Pass array of funding sources");
                    for (var a = 0; a < n.length; a++) {
                      var u = n[a];
                      if (-1 === t.indexOf(u))
                        throw new Error("Invalid funding source: " + u);
                    }
                    o &&
                      !Jt() &&
                      (function (n, e) {
                        var t;
                        void 0 === e && (e = {});
                        var r = e.expiry,
                          o = document.createElement("iframe");
                        (o.style.display = "none"),
                          o.setAttribute("sandbox", "allow-scripts"),
                          o.setAttribute(
                            "src",
                            fe(
                              "https://www.sandbox.paypal.com/smart/funding/remember",
                              {
                                query:
                                  ((t = {}),
                                  (t.domain = Z()),
                                  (t["client-id"] = Ot()),
                                  (t.sdkMeta = Qt()),
                                  (t["funding-sources"] = n.join(",")),
                                  (t.expiry = (r || "").toString()),
                                  t),
                              }
                            )
                          );
                        var i = document.body;
                        if (!i) throw new Error("Can not find body");
                        i.appendChild(o);
                      })(n, { expiry: i }),
                      rr(function (e) {
                        e.funding = e.fundingConfig || {};
                        for (var t = 0; t < n.length; t++) {
                          var r = n[t],
                            o = (e.funding[r] = e.funding[r] || {});
                          (o.remembered = !0),
                            i && (o.expiry = Date.now() + 1e3 * i);
                        }
                      });
                  })(n, { cookie: !1 });
                };
              },
            },
            currency: { type: "string", queryParam: !0, value: kt },
            intent: { type: "string", queryParam: !0, value: Tt },
            buyerCountry: {
              type: "string",
              queryParam: !0,
              required: !1,
              value: Rt,
            },
            commit: { type: "boolean", queryParam: !0, value: Nt },
            vault: { type: "boolean", queryParam: !0, value: St },
            enableFunding: { type: "array", queryParam: !0, value: At },
            disableFunding: { type: "array", queryParam: !0, value: _t },
            disableCard: { type: "array", queryParam: !0, value: Mt },
            merchantID: { type: "array", queryParam: !0, value: Pt },
            renderedButtons: {
              type: "array",
              queryParam: !0,
              value: function (n) {
                return (
                  (t = (e = n.props).fundingSource),
                  (r = e.onShippingChange),
                  (i = void 0 === (o = e.style) ? {} : o),
                  (u = void 0 === (a = e.fundingEligibility) ? Na() : a),
                  (c = void 0 === (l = e.experiment) ? Wu() : l),
                  (s = e.applePaySupport),
                  (f = void 0 === (d = e.supportsPopups) ? g() : d),
                  (h = void 0 === (p = e.supportedNativeBrowser) ? Bu() : p),
                  (m = ju({
                    createBillingAgreement: e.createBillingAgreement,
                    createSubscription: e.createSubscription,
                  })),
                  iu({
                    fundingSource: t,
                    remembered: [],
                    layout: i.layout,
                    platform: yt(),
                    fundingEligibility: u,
                    components: ["buttons"],
                    onShippingChange: r,
                    flow: m,
                    applePaySupport: s,
                    supportsPopups: f,
                    supportedNativeBrowser: h,
                    experiment: c,
                  })
                );
                var e, t, r, o, i, a, u, l, c, s, d, f, p, h, m;
              },
            },
            csp: {
              type: "object",
              required: !1,
              value: function () {
                return { nonce: Wt() };
              },
            },
            nonce: { type: "string", default: Wt },
            getPageUrl: {
              type: "function",
              value: function () {
                return function () {
                  return window.location.href;
                };
              },
            },
            userIDToken: {
              type: "string",
              default: It,
              required: !1,
              queryParam: "sandbox" !== at.LOCAL && "sandbox" !== at.STAGE,
              bodyParam: "sandbox" === at.LOCAL || "sandbox" === at.STAGE,
            },
            clientMetadataID: {
              type: "string",
              required: !1,
              default: ar,
              queryParam: !0,
            },
            debug: { type: "boolean", value: ht, queryParam: !0 },
            test: {
              type: "object",
              default: function () {
                return { action: "checkout" };
              },
            },
            wallet: {
              type: "object",
              required: !1,
              default: function () {
                return window.__TEST_WALLET__;
              },
            },
            paymentMethodNonce: {
              type: "string",
              queryParam: !0,
              required: !1,
            },
            paymentMethodToken: {
              type: "string",
              queryParam: !0,
              required: !1,
            },
            branded: { type: "boolean", queryParam: !0, required: !1 },
            applePaySupport: {
              type: "boolean",
              value: function (n) {
                var e,
                  t,
                  r = n.props;
                return (
                  !(
                    null == r ||
                    null == (e = r.fundingEligibility) ||
                    null == (t = e.applepay) ||
                    !t.eligible
                  ) && w()
                );
              },
              queryParam: !0,
            },
            supportsPopups: {
              type: "boolean",
              value: function () {
                return g();
              },
              queryParam: !0,
            },
            supportedNativeBrowser: {
              type: "boolean",
              value: Bu,
              queryParam: !0,
            },
            userExperienceFlow: { type: "string", required: !1, value: Ut },
            applePay: { type: "function", required: !1, value: qu },
            allowBillingPayments: {
              type: "boolean",
              queryParam: !0,
              required: !1,
              default: function () {
                return !0;
              },
            },
          },
        });
      });
      function Gu() {
        return kn(Gu, function () {
          return jo({
            tag: "paypal-card-form",
            url: function () {
              return "https://www.sandbox.paypal.com/smart/card-fields";
            },
            dimensions: { height: "300px", width: "100%" },
            attributes: {
              iframe: {
                allowpaymentrequest: "allowpaymentrequest",
                scrolling: "no",
              },
            },
            autoResize: { height: !0, width: !1 },
            props: {
              sessionID: {
                type: "string",
                required: !1,
                default: Uo,
                queryParam: !0,
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function (n) {
                  return A.try(n.value);
                },
              },
              buttonSessionID: { type: "string", queryParam: !0 },
              commit: { type: "boolean", queryParam: !0, value: Nt },
              env: { type: "string", queryParam: !0, value: ct },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function (n) {
                  var e = n.value,
                    t = e.lang;
                  return (t = t === rt.ZH_HANT ? rt.ZH : t) + "_" + e.country;
                },
                value: Ht,
              },
              onApprove: { type: "function", alias: "onAuthorize" },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              onCancel: { type: "function", required: !1 },
              sdkMeta: { type: "string", queryParam: !0, value: Qt },
              style: { type: "object", required: !1, queryParam: !0 },
              disableCard: {
                type: "array",
                queryParam: "disable-card",
                allowDelegate: !0,
                queryValue: function (n) {
                  return n.value.join(",");
                },
                value: Mt,
              },
            },
          });
        });
      }
      function Vu() {
        return kn(Vu, function () {
          return jo({
            tag: "paypal-menu",
            url: function () {
              return "https://www.sandbox.paypal.com/smart/menu";
            },
            domain: Kt(),
            autoResize: { width: !1, height: !0 },
            dimensions: { width: "100%", height: "150px" },
            logger: Xt(),
            prerenderTemplate: function () {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Qt,
              },
              clientID: { type: "string", queryParam: !0 },
            },
          });
        });
      }
      function Yu() {
        return kn(Yu, function () {
          return jo({
            tag: "paypal-installments",
            url: function () {
              return "https://www.sandbox.paypal.com/smart/installments";
            },
            domain: Kt(),
            autoResize: { width: !1, height: !0 },
            dimensions: { width: "100%", height: "100%" },
            logger: Xt(),
            prerenderTemplate: function (n) {
              var e = n.doc,
                t = n.props.nonce || Wt();
              return ei(ya, { nonce: t }).render(ci({ doc: e }));
            },
            containerTemplate: function (n) {
              var e = n.doc;
              return ei(pa, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                autoResize: !0,
                hideCloseButton: !0,
                nonce: n.props.nonce,
              }).render(ci({ doc: e }));
            },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Qt,
              },
              clientID: { type: "string", queryParam: !0 },
              locale: { type: "object", queryParam: !0, value: Ht },
              nonce: { type: "string", default: Wt, required: !1 },
            },
          });
        });
      }
      function Ku(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.event,
          i = n.cspNonce;
        if (!t || !r) throw new Error("Expected frame and prerenderframe");
        return (
          t.classList.add("component-frame"),
          r.classList.add("prerender-frame"),
          t.classList.add("invisible"),
          r.classList.add("visible"),
          o.on("zoid-rendered", function () {
            r.classList.remove("visible"),
              r.classList.add("invisible"),
              t.classList.remove("invisible"),
              t.classList.add("visible"),
              setTimeout(function () {
                Ie(r);
              }, 1);
          }),
          ei(
            "div",
            { id: e },
            ei("style", {
              nonce: i,
              innerHTML:
                "\n            * {\n                box-sizing: border-box;\n            }\n\n            #" +
                e +
                " {\n                display: flex;\n                position: fixed;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 20000;\n                align-items: center;\n                justify-content: center;\n                background-color: rgba(0, 0, 0, 0.4); \n            }\n            #" +
                e +
                " iframe {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n            #" +
                e +
                " > iframe.visible {\n                opacity: 1;\n            }\n            #" +
                e +
                " > iframe.invisible {\n                opacity: 0;\n                pointer-events: none;\n            }\n            #qrModal {\n                background: #2F3033;\n                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);\n                border-radius: 16px;                        \n                width: 720px;\n                height: 612px;  \n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                position: relative;\n            }     \n            ",
            }),
            ei(
              "div",
              { id: "qrModal" },
              ei("node", { el: t }),
              ei("node", { el: r })
            )
          )
        );
      }
      function Ju(n) {
        var e = n.frame,
          t = n.prerenderFrame,
          r = n.doc;
        if (e && t)
          return ei(Ku, {
            uid: n.uid,
            cspNonce: n.props.cspNonce,
            event: n.event,
            frame: e,
            prerenderFrame: t,
          }).render(ci({ doc: r }));
      }
      function Xu(n) {
        var e = n.doc,
          t = n.props,
          r = n.close,
          o = [
            ei("style", {
              nonce: t.cspNonce,
              innerHTML:
                "\n    #close {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n        z-index: 100;\n    }\n    #close:hover {\n        opacity: 1;\n    }\n    #close:before, #close:after {\n        position: absolute;\n        left: 8px;\n        content: ' ';\n        height: 20px;\n        width: 2px;\n        background-color: #FFF;\n    }\n    #close:before {\n        transform: rotate(45deg);\n    }\n    #close:after {\n        transform: rotate(-45deg);\n    }  \n    ",
            }),
            ei("a", {
              href: "#",
              id: "close",
              "aria-label": "close",
              role: "button",
              onClick: r,
            }),
          ];
        return new ya({ nonce: t.cspNonce }, o).render(ci({ doc: e }));
      }
      function $u() {
        return kn($u, function () {
          return jo({
            tag: "paypal-qr-modal",
            url: function (n) {
              return (
                "https://www.sandbox.paypal.com/smart/qrcode?" + n.props.qrPath
              );
            },
            domain: Kt(),
            dimensions: { width: "100%", height: "100%" },
            logger: Xt(),
            prerenderTemplate: Xu,
            containerTemplate: Ju,
            autoResize: { width: !0, height: !0 },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              onEscapePath: { type: "function", required: !0 },
              qrPath: { type: "string", queryParam: !0, required: !0 },
              cspNonce: {
                type: "string",
                queryParam: !1,
                required: !1,
                value: Wt,
              },
              debug: {
                type: "boolean",
                value: ht,
                queryParam: !0,
                required: !1,
              },
              state: { type: "string", queryParam: !1, required: !1 },
              errorText: { type: "string", queryParam: !1, required: !1 },
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Qt,
              },
              env: { type: "string", queryParam: !0, required: !1, value: ct },
              sessionID: {
                type: "string",
                queryParam: !0,
                required: !1,
                value: tr,
              },
              locale: {
                type: "object",
                queryParam: !0,
                required: !1,
                value: Ht,
              },
              clientID: {
                type: "string",
                queryParam: !0,
                required: !1,
                value: Ot,
              },
              orderID: { type: "string", queryParam: !0, required: !1 },
              sdkCorrelationID: {
                type: "string",
                required: !1,
                value: pt,
                queryParam: !0,
              },
              buyerCountry: {
                type: "string",
                queryParam: !0,
                required: !1,
                value: Rt,
              },
              buttonSessionID: {
                type: "string",
                queryParam: !0,
                required: !1,
                value: En,
              },
            },
          });
        });
      }
      function Qu() {
        return kn(Qu, function () {
          return jo({
            tag: "paypal-modal",
            url: function () {
              return "https://www.sandbox.paypal.com/smart/modal";
            },
            domain: Kt(),
            dimensions: { width: "100%", height: "100%" },
            logger: Xt(),
            containerTemplate: function (n) {
              var e = n.frame,
                t = n.prerenderFrame,
                r = n.doc,
                o = n.uid,
                i = n.event;
              if (e && t) {
                var a = n.props.cspNonce;
                return (
                  t.classList.add("visible"),
                  e.classList.add("invisible"),
                  i.on("zoid-rendered", function () {
                    t.classList.remove("visible"),
                      t.classList.add("invisible"),
                      e.classList.remove("invisible"),
                      e.classList.add("visible"),
                      setTimeout(function () {
                        Ie(t);
                      }, 1);
                  }),
                  ei(
                    "div",
                    {
                      id: o,
                      onRender: function (n) {
                        i.on("zoid-resize", function (e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = nt(t)),
                            "number" == typeof r && (n.style.height = nt(r));
                        });
                      },
                    },
                    ei("style", {
                      nonce: a,
                      innerHTML:
                        "\n                                #" +
                        o +
                        " {\n                                    display: block;\n                                    position: fixed;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    z-index: 200000;\n                                }\n\n                                #" +
                        o +
                        " > iframe {\n                                    display: inline-block;\n                                    position: absolute;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    transition: opacity .2s ease-in-out;\n                                }\n                                #" +
                        o +
                        " > iframe.invisible {\n                                    opacity: 0;\n                                }\n                                #" +
                        o +
                        " > iframe.visible {\n                                    opacity: 1;\n                                }\n                            ",
                    }),
                    ei("node", { el: e }),
                    ei("node", { el: t })
                  ).render(ci({ doc: r }))
                );
              }
            },
            prerenderTemplate: function () {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Qt,
              },
              clientID: { type: "string", queryParam: !0 },
              orderID: { type: "string", queryParam: !0 },
              customerID: { type: "string", queryParam: !0 },
            },
          });
        });
      }
      function nl(n) {
        if (Jt()) return n;
      }
      var el = {
          __get__: function () {
            return zu();
          },
        },
        tl = {
          __get__: function () {
            return nl(wa());
          },
        },
        rl = {
          __get__: function () {
            return nl(Gu());
          },
        },
        ol = {
          __get__: function () {
            return nl(Vu());
          },
        },
        il = {
          __get__: function () {
            return nl(Qu());
          },
        },
        al = {
          __get__: function () {
            return nl(Yu());
          },
        },
        ul = {
          __get__: function () {
            return nl($u());
          },
        },
        ll = {
          __get__: function () {
            return nl(Du);
          },
        },
        cl = {
          __get__: function () {
            return nl(Le);
          },
        },
        sl = {
          __get__: function () {
            return nl(Zo);
          },
        },
        dl = {
          __get__: function () {
            return nl(Zo);
          },
        },
        fl = {
          __get__: function () {
            return nl(Bo);
          },
        };
      function pl() {
        zu(), wa();
      }
      function hl(n) {
        !(function (n) {
          var e;
          Ho(), (e = io()), delete window[e], to(), Do.all(n);
        })(n);
      }
      function ml(n) {
        if (Jt()) return n;
      }
      var gl = {
          __get__: function () {
            return ml(ma());
          },
        },
        yl = {
          __get__: function () {
            return ml(o);
          },
        };
      function vl() {
        (function (n, e) {
          void 0 === n && (n = "sandbox"), void 0 === e && (e = !1);
          try {
            if (
              !(
                "mock://www.paypal.com" === window.mockDomain ||
                Jt() ||
                (Lt("components") || "")
                  .toLowerCase()
                  .split(",")
                  .indexOf("shopping") >= 0
              )
            ) {
              if (n === at.SANDBOX && !0 !== e) return;
              var t = (function () {
                  var n = Pt();
                  if (n.length && "unknown" !== n[0]) return n[0];
                })(),
                r = Ot(),
                o = window.location.hostname,
                i = document.createElement("script"),
                a = document.querySelector("head"),
                u = (function (n, e, t, r) {
                  var o =
                    "https://www.sandbox.paypal.com/tagmanager/pptm.js?id=" +
                    r +
                    "&t=xo&v=5.0.271&source=payments_sdk";
                  return (
                    e && (o += "&mrid=" + e),
                    t && (o += "&client_id=" + t),
                    Lt("components") &&
                      (o += "&comp=" + String(Lt("components"))),
                    o + "&vault=" + String(St())
                  );
                })(0, t, r, o);
              (i.src = u),
                (i.id = "xo-pptm"),
                (i.async = !0),
                a && a.appendChild(i);
            }
          } catch (n) {
            !(function (n, e) {
              try {
                var t,
                  r = Xt();
                r.track(
                  (((t = {}).ext_error_code = "paypal-muse-components"),
                  (t.ext_error_desc = JSON.stringify({
                    name: n,
                    error: Rn(e),
                  })),
                  t)
                ),
                  r.error(n, { err: Mn(e) }),
                  r.flush().catch(An);
              } catch (e) {
                var o,
                  i = Xt();
                i.track(
                  (((o = {}).ext_error_code = "paypal-muse-components"),
                  (o.ext_error_desc = "Error logging error event for " + n),
                  o)
                ),
                  i.error("logger_error", { err: Mn(e) }),
                  i.flush().catch(An);
              }
            })("insertPPTM", n);
          }
        })("sandbox", !1),
          ur().on("button_render", function () {
            (window.paypalDDL = window.paypalDDL || []),
              0 ===
                window.paypalDDL.filter(function (n) {
                  return "paypalButtonRender" === n.event;
                }).length &&
                window.paypalDDL.push({ event: "paypalButtonRender" });
          });
      }
      !(function (n) {
        var e = Ft(),
          t = window[e];
        if (t) {
          if (!t.__internal_destroy__)
            throw new Error(
              "Attempted to load sdk version 5.0.271 on page, but window." +
                e +
                " at version " +
                (t && t.version) +
                ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"></script>, then use the paypal_sdk namespace in place of paypal in your code.'
            );
          t.__internal_destroy__(
            new Error(
              "New SDK instance loaded, existing instance destroyed (" +
                e +
                " / 5.0.271)"
            )
          ),
            delete window[e];
        }
        (window[e] = window[e] || {}), (window[e].version = "5.0.271");
        for (
          var r = [],
            o = function (t) {
              var o = n[t],
                i = o.name,
                a = o.requirer,
                u = o.setupHandler;
              try {
                var c = a(),
                  s = c[u],
                  d = c.setup,
                  f = c.destroy,
                  p = l(c, [u, "setup", "destroy"].map(qt));
                s ? s() : d && d(), f && r.push(f);
                for (var h = 0, m = Object.keys(p); h < m.length; h++) {
                  var g = m[h],
                    y = p[g];
                  y && y.__get__ && (y = y.__get__()), y && (window[e][g] = y);
                }
              } catch (n) {
                return (
                  setTimeout(function () {
                    throw new Error(
                      "Bootstrap Error for " +
                        i +
                        ":\n\n" +
                        n.message +
                        "\n\n" +
                        n.stack
                    );
                  }, 1),
                  "continue"
                );
              }
            },
            i = 0;
          i < n.length;
          i++
        )
          o(i);
        Object.defineProperty(window[e], "__internal_destroy__", {
          enumerable: !1,
          value: function (n) {
            void 0 === n &&
              (n = new Error("SDK instance destroyed (" + e + " / 5.0.271)")),
              r.forEach(function (e) {
                return e(n);
              }),
              Ie(Ct()),
              delete window[e];
          },
        });
      })([
        {
          name: "__paypal-sdk-client__",
          setupHandler: "setupClient",
          requirer: function () {
            return r;
          },
        },
        {
          name: "buttons",
          setupHandler: "setupButtons",
          requirer: function () {
            return i;
          },
        },
        {
          name: "common",
          setupHandler: null,
          requirer: function () {
            return a;
          },
        },
        {
          name: "muse",
          setupHandler: null,
          requirer: function () {
            return u;
          },
        },
      ]);
    },
  ])
);
