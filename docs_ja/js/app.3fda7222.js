!(function (e) {
  function t(t) {
    for (
      var r, i, c = t[0], u = t[1], l = t[2], s = 0, p = [];
      s < c.length;
      s++
    )
      (i = c[s]), o[i] && p.push(o[i][0]), (o[i] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (f && f(t); p.length; ) p.shift()();
    return a.push.apply(a, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        var u = n[c];
        0 !== o[u] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 0: 0 },
    a = [];
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    u = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var f = u;
  a.push([176, 1]), n();
})({
  117: function (e, t, n) {
    "use strict";
    (function (e) {
      n(9), n(12), n(8), n(14), n(15), n(74), n(76);
      var r = n(0),
        o = n.n(r),
        a = n(22),
        i = n(2),
        c = n(118),
        u = n(32),
        l = n(86),
        f = n(48),
        s = n(33),
        p = n(123),
        d = n(34),
        m = n(17),
        b = n(124),
        h = n(62);
      function y(e) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t) {
        return !t || ("object" !== y(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var x = i.default.div.withConfig({ componentId: "jvfbmb-0" })(
        ["display:", ";width:8%;button{width:100%;}"],
        function (e) {
          return e.isVisible ? "block" : "none";
        }
      );
      function j() {
        return o.a.createElement(
          b.a,
          null,
          "Please check if your data is valid json, csv, geojson or topojson."
        );
      }
      var E = (function (t) {
        function n() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            v(this, w(n).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && O(e, t);
          })(n, r["PureComponent"]),
          (function (e, t, n) {
            t && g(e.prototype, t), n && g(e, n);
          })(n, [
            {
              key: "renderCsvOptions",
              value: function (e) {
                var t = this;
                return o.a.createElement(h.a, {
                  style: { marginTop: "8px" },
                  checked: this.props["".concat(e, "FirstRowHeader")],
                  onChange: function () {
                    return t.props.toggleFirstRowHeader(e);
                  },
                  label: "最初の行はヘッダーです",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  n = this.props,
                  r = n.baseData,
                  a = n.baseFileName,
                  i = n.baseDataError,
                  u = n.baseFileType,
                  b = n.mergeData,
                  h = n.mergeFileName,
                  y = n.mergeDataError,
                  g = n.mergeFileType,
                  v = !!r.length,
                  w = !!b.length;
                return o.a.createElement(
                  s.a,
                  {
                    step: 0,
                    title: e.sections[0].title,
                    subtitle: e.sections[0].subtitle,
                  },
                  o.a.createElement(
                    d.a,
                    null,
                    o.a.createElement(
                      m.a,
                      null,
                      o.a.createElement(l.a, {
                        onChange: this.props.setBaseData,
                        onError: function () {
                          return t.props.setError("base");
                        },
                        fileName: a,
                        dropText:
                          "地物ファイルをここへドラッグ&ドロップしてください",
                        textareaPlaceholder:
                          "地物データをここへペーストしてください...",
                      }),
                      i && j()
                    ),
                    o.a.createElement(
                      m.a,
                      null,
                      o.a.createElement(l.a, {
                        onChange: this.props.setMergeData,
                        onError: function () {
                          return t.props.setError("merge");
                        },
                        fileName: h,
                        dropText:
                          "テーマファイルをここへドラッグ&ドロップしてください",
                        textareaPlaceholder:
                          "テーマデータをここへペーストしてください...",
                        isActive: v,
                      }),
                      y && j()
                    )
                  ),
                  o.a.createElement(
                    d.a,
                    null,
                    o.a.createElement(
                      m.a,
                      { style: { textAlign: "center" } },
                      "File 1"
                    ),
                    o.a.createElement(
                      x,
                      { isVisible: v && w },
                      o.a.createElement(
                        p.a,
                        { onClick: this.props.swapData },
                        o.a.createElement(c.a, { height: 16 })
                      )
                    ),
                    o.a.createElement(
                      m.a,
                      { style: { textAlign: "center" } },
                      "File 2"
                    )
                  ),
                  o.a.createElement(
                    d.a,
                    { isVisible: v || w },
                    o.a.createElement(
                      m.a,
                      { isVisible: v },
                      o.a.createElement(f.a, { data: this.props.baseData }),
                      u.includes("csv") && this.renderCsvOptions("base")
                    ),
                    o.a.createElement(
                      m.a,
                      { isVisible: w, style: { marginLeft: "auto" } },
                      o.a.createElement(f.a, { data: this.props.mergeData }),
                      g.includes("csv") && this.renderCsvOptions("merge")
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })();
      t.a = Object(a.connect)(function (e) {
        return {
          baseData: e.baseData,
          baseFileName: e.baseFileName,
          baseFileType: e.baseFileType,
          baseDataError: e.baseDataError,
          baseFirstRowHeader: e.baseFirstRowHeader,
          mergeData: e.mergeData,
          mergeFileName: e.mergeFileName,
          mergeDataError: e.mergeDataError,
          mergeFileType: e.mergeFileType,
          mergeFirstRowHeader: e.mergeFirstRowHeader,
        };
      }, u.a)(E);
    }).call(this, n(40));
  },
  118: function (e, t, n) {
    "use strict";
    n(41), n(19);
    var r = n(0),
      o = n.n(r);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    t.a = function (e) {
      var t = e.styles,
        n = void 0 === t ? {} : t,
        r = (function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        })(e, ["styles"]);
      return o.a.createElement(
        "svg",
        a(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className:
              (n.feather || "feather") +
              " " +
              (n["feather-repeat"] || "feather-repeat"),
          },
          r
        ),
        o.a.createElement("path", { d: "M17 1l4 4-4 4" }),
        o.a.createElement("path", {
          d: "M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4",
        }),
        o.a.createElement("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" })
      );
    };
  },
  123: function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(61);
    t.a = Object(r.default)(o.a).withConfig({ componentId: "ou7ikl-0" })([
      "background:white;",
    ]);
  },
  124: function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n.n(r),
      a = n(2),
      i = a.default.div.withConfig({ componentId: "sc-1g6uzc4-0" })(
        [
          "background:",
          ";padding:12px;color:white;border-radius:4px;margin-top:8px;display:flex",
        ],
        function (e) {
          return e.theme.colors.warning;
        }
      ),
      c = a.default.div.withConfig({ componentId: "sc-1g6uzc4-1" })([
        "margin-left:10px;",
      ]),
      u = a.default.div.withConfig({ componentId: "sc-1g6uzc4-2" })([
        "font-weight:700;margin-bottom:5px;",
      ]);
    t.a = function (e) {
      return o.a.createElement(
        i,
        null,
        o.a.createElement(
          c,
          null,
          o.a.createElement(u, null, "An Error occured."),
          e.children
        )
      );
    };
  },
  125: function (e, t, n) {
    "use strict";
    (function (e) {
      n(9), n(12), n(8), n(14), n(15);
      var r = n(0),
        o = n.n(r),
        a = n(22),
        i = n(84),
        c = n.n(i),
        u = n(2),
        l = n(32),
        f = n(49),
        s = n(33),
        p = n(34),
        d = n(17),
        m = n(48),
        b = n(35);
      function h(e) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function g(e, t) {
        return !t || ("object" !== h(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var O = u.default.div.withConfig({ componentId: "sc-1ndj8ay-0" })(
          ["display:flex;justify-content:center;background:", ";padding:16px;"],
          function (e) {
            return e.theme.colors.section;
          }
        ),
        x = (function (t) {
          function n() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              g(this, v(n).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && w(e, t);
            })(n, r["PureComponent"]),
            (function (e, t, n) {
              t && y(e.prototype, t), n && y(e, n);
            })(n, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.baseData,
                    r = t.mergeData,
                    a = t.baseKey,
                    i = t.mergeKey,
                    u = t.resultData,
                    l = t.excludeFields,
                    b =
                      c()(n, function (e) {
                        return e.columns;
                      }) || [],
                    h =
                      c()(r, function (e) {
                        return e.columns;
                      }) || [],
                    y = n.length > 0;
                  return o.a.createElement(
                    s.a,
                    {
                      step: 1,
                      title: e.sections[1].title,
                      subtitle: e.sections[1].subtitle,
                      isActive: y,
                    },
                    o.a.createElement(
                      p.a,
                      null,
                      o.a.createElement(
                        d.a,
                        null,
                        o.a.createElement(
                          O,
                          null,
                          o.a.createElement(f.a, {
                            options: b,
                            onChange: this.props.setBaseKey,
                            placeholder: "Select key...",
                            disabled: !y,
                            value: a || "default",
                          })
                        )
                      ),
                      o.a.createElement(
                        d.a,
                        null,
                        o.a.createElement(
                          O,
                          null,
                          o.a.createElement(f.a, {
                            options: h,
                            onChange: this.props.setMergeKey,
                            placeholder: "Select key...",
                            disabled: 0 === r.length,
                            value: i || "default",
                          })
                        )
                      )
                    ),
                    y && o.a.createElement(m.a, { data: u, excludeFields: l })
                  );
                },
              },
            ]),
            n
          );
        })();
      t.a = Object(a.connect)(function (e) {
        return {
          baseData: e.baseData,
          mergeData: e.mergeData,
          baseKey: e.baseKey,
          mergeKey: e.mergeKey,
          resultData: Object(b.b)(e),
          excludeFields: e.excludeFields,
        };
      }, l.a)(x);
    }).call(this, n(40));
  },
  126: function (e, t, n) {
    "use strict";
    (function (e) {
      n(9), n(12), n(8), n(14), n(15), n(74), n(76), n(46), n(19), n(31);
      var r = n(0),
        o = n.n(r),
        a = n(2),
        i = n(22),
        c = n(35),
        u = n(20),
        l = n(32),
        f = n(33),
        s = n(49),
        p = n(61),
        d = n(62),
        m = n(127);
      function b(e) {
        return (b =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return !t || ("object" !== b(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var w = a.default.div.withConfig({ componentId: "sc-1bfo6l4-0" })([
          "display:flex;flex-direction:column;",
        ]),
        O = Object(a.default)(p.a).withConfig({ componentId: "sc-1bfo6l4-1" })([
          "width:200px;",
        ]),
        x = a.default.div.withConfig({ componentId: "sc-1bfo6l4-2" })(
          [
            "background:",
            ";padding:16px;margin-top:16px;display:flex;justify-content:center;",
          ],
          function (e) {
            return e.theme.colors.section;
          }
        ),
        j = a.default.div.withConfig({ componentId: "sc-1bfo6l4-3" })(
          [
            "background:",
            ";padding:16px;display:flex;flex-wrap:wrap;margin-bottom:16px;",
          ],
          function (e) {
            return e.theme.colors.section;
          }
        ),
        E = Object(a.default)(f.a).withConfig({ componentId: "sc-1bfo6l4-4" })([
          "margin-bottom:0;",
        ]),
        _ = (function (t) {
          function n() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              y(this, g(n).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && v(e, t);
            })(n, r["PureComponent"]),
            (function (e, t, n) {
              t && h(e.prototype, t), n && h(e, n);
            })(n, [
              {
                key: "renderCheckboxes",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    j,
                    null,
                    this.props.mergedData.columns.map(function (t) {
                      return o.a.createElement(d.a, {
                        key: "FieldSelect__".concat(t),
                        checked: -1 === e.props.excludeFields.indexOf(t),
                        onChange: function () {
                          return e.props.toggleExcludeField(t);
                        },
                        label: t,
                      });
                    })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.baseData,
                    r = t.setDownloadFormat,
                    a = t.mergedData,
                    i = t.downloadFormat,
                    c = t.excludeFields,
                    l = t.baseIsGeo,
                    f = t.outputFileName,
                    p = !!this.props.mergedData.length,
                    d = n.length > 0,
                    b = l
                      ? e.downloadFormats
                      : e.downloadFormats.filter(function (e) {
                          return !["geojson", "topojson"].includes(e);
                        });
                  return o.a.createElement(
                    E,
                    {
                      step: 2,
                      title: e.sections[2].title,
                      subtitle: e.sections[2].subtitle,
                      isActive: d,
                    },
                    p ? this.renderCheckboxes() : null,
                    o.a.createElement(
                      w,
                      null,
                      o.a.createElement(s.a, {
                        options: d ? b : [],
                        placeholder: "Select format...",
                        onChange: r,
                        disabled: !d,
                        value: i || "default",
                      }),
                      o.a.createElement(m.a, {
                        data: a,
                        isActive: d,
                        filetype: i,
                        excludeFields: c,
                      }),
                      o.a.createElement(
                        x,
                        null,
                        o.a.createElement(
                          O,
                          {
                            disabled: !a || !a.length,
                            onClick: function () {
                              return Object(u.a)(a, i, c, f);
                            },
                          },
                          "ファイルとして保存する"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })();
      t.a = Object(i.connect)(function (e) {
        return {
          baseData: e.baseData,
          mergedData: Object(c.b)(e),
          downloadFormat: e.downloadFormat,
          excludeFields: e.excludeFields,
          baseIsGeo: Object(c.a)(e),
          outputFileName: Object(c.c)(e),
        };
      }, l.a)(_);
    }).call(this, n(40));
  },
  127: function (e, t, n) {
    "use strict";
    n(9), n(12), n(8), n(14), n(15);
    var r = n(0),
      o = n.n(r),
      a = n(2),
      i = n(20);
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function l(e, t) {
      return !t || ("object" !== c(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function f(e) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var p = a.default.div.withConfig({ componentId: "sc-1qsx74v-0" })([
        "padding:16px 0;",
      ]),
      d = a.default.textarea.withConfig({ componentId: "sc-1qsx74v-1" })(
        [
          "border:1px solid ",
          ";padding:16px;resize:vertical;width:100%;min-height:200px;font-size:14px;font-family:",
          ";color:",
          ";",
        ],
        function (e) {
          return e.theme.colors.section;
        },
        function (e) {
          return e.theme.fonts.mono;
        },
        function (e) {
          return e.theme.colors.black;
        }
      ),
      m = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            l(this, f(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && s(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                if (!this.props.isActive) return null;
                var e = this.props,
                  t = e.data,
                  n = e.filetype,
                  r = e.excludeFields,
                  a = Object(i.c)(t, n, r);
                return o.a.createElement(
                  p,
                  null,
                  o.a.createElement(d, { value: a.data, readOnly: !0 })
                );
              },
            },
          ]),
          t
        );
      })();
    t.a = m;
  },
  128: function (e, t, n) {
    "use strict";
    (function (e) {
      n(9), n(12), n(8), n(14), n(15);
      var r = n(0),
        o = n.n(r),
        a = n(129),
        i = n(130),
        c = n(131),
        u = n(132),
        l = n.n(u);
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return !t || ("object" !== f(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var b = encodeURIComponent(
        "https://funkeinteraktiv.github.io/geo-data-merger/"
      );
      var h = (function (t) {
        function n() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            p(this, d(n).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(n, r["PureComponent"]),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(n, [
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  a.a,
                  null,
                  o.a.createElement(
                    "footer",
                    { className: "footer" },
                    o.a.createElement("hr", null),
                    o.a.createElement(
                      "div",
                      { className: "footer__top" },
                      o.a.createElement(
                        "div",
                        { className: "footer__source" },
                        "The Geo Data Merger is a desktop ",
                        o.a.createElement(
                          "a",
                          {
                            target: "_blank",
                            href: "https://github.com/funkeinteraktiv/geo-data-merger",
                            rel: "noopener noreferrer",
                          },
                          "open source tool"
                        ),
                        " for merging data from csv, json, geo- and topojson files.",
                        o.a.createElement("br", null)
                      ),
                      o.a.createElement(
                        "div",
                        { className: "footer__sharing" },
                        o.a.createElement(
                          "div",
                          { className: "footer__sharing-cta" },
                          "Share this tool:"
                        ),
                        o.a.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-facebook btn-social",
                            href: "https://www.facebook.com/sharer/sharer.php?u="
                              .concat(b, "&t=")
                              .concat(encodeURIComponent(e.social.facebook)),
                          },
                          o.a.createElement(i.a, null)
                        ),
                        o.a.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-twitter btn-social",
                            href: "https://twitter.com/intent/tweet?source="
                              .concat(b, "&text=")
                              .concat(encodeURIComponent(e.social.twitter), " ")
                              .concat(b),
                          },
                          o.a.createElement(c.a, null)
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "footer__bot" },
                      o.a.createElement(
                        "div",
                        { className: "footer__interaktiv" },
                        o.a.createElement(
                          "div",
                          { className: "footer__interaktiv-logo" },
                          o.a.createElement("img", {
                            src: l.a,
                            alt: "Funke Interaktiv logo",
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "footer__interaktiv-title" },
                          "A project by ",
                          o.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href: "https://twitter.com/funkeinteraktiv",
                              rel: "noopener noreferrer",
                            },
                            "Funke Interaktiv"
                          ),
                          " and ",
                          o.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href: "https://webkid.io/",
                              rel: "noopener noreferrer",
                            },
                            "webkid"
                          ),
                          "."
                        ),
                        o.a.createElement(
                          "div",
                          { className: "footer__interaktiv-body" },
                          "Further projects of the team can be found in our ",
                          o.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href: "https://interaktiv.morgenpost/portfolio/",
                              rel: "noopener noreferrer",
                            },
                            "portfolio."
                          ),
                          " Do you want to leave any feedback or report a bug? We're looking forward to your ",
                          o.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href: "mailto:interaktiv@funkemedien.de",
                              rel: "noopener noreferrer",
                            },
                            "email."
                          )
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "footer__imprint" },
                        "Geo Data Merger, 18.12.2018",
                        o.a.createElement("br", null),
                        o.a.createElement(
                          "a",
                          {
                            href: "https://funkeinteraktiv.github.io/impressum-datenschutz/imprint.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Imprint"
                        ),
                        " / ",
                        o.a.createElement(
                          "a",
                          {
                            href: "https://funkeinteraktiv.github.io/impressum-datenschutz/privacy.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Privacy"
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })();
      t.a = h;
    }).call(this, n(40));
  },
  129: function (e, t, n) {
    "use strict";
    var r = n(2);
    t.a = r.default.div.withConfig({ componentId: "wwj685-0" })([
      ".footer{margin-top:20px;padding:0 16px 20px 16px;text-align:center;line-height:1.35;max-width:960px;margin:0 auto;font-size:13px;a{color:#222;text-decoration:none;&:hover{text-decoration:underline;}}hr{margin:2em auto;width:100%;max-width:50%;height:1px;border:none;background-color:#ddd;}&__top,&__bot{max-width 640px;padding:0 15px;margin:auto;color:#9a9a9a;& > *{margin:1em auto:}}&__top{font-family:sans-serif;}&__sharing{margin:2em auto;display:flex;flex-wrap:wrap;justify-content:center;&-cta{width:100%;margin-bottom:1em;}.btn-social{width:2em;height:2em;font-size:1.2em;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;margin:0 .25em;fill:white;&.btn-facebook{background-color:#4864bb;}&.btn-twitter{background-color:#5eaade;}&:hover{border:none;opacity .9;}}}&__interaktiv{margin:2em auto;padding:1em;border:1px solid #ddd;border-radius:4px;text-align:left;&-logo{float:left;margin:0 1em .25em 0;img{width:30px;height:30px;}}&-title{font-weight:bold;}}&__imprint{color:#9a9a9a;}}@media screen and (min-width:375px){.footer{.footer__top,.footer__bot{padding:0 7%;}}}@media screen and (min-width:400px){.footer{.footer__top{font-size:1.1em;}}}@media screen and (min-width:640px){.footer{margin-top:40px;padding-bottom:40px;font-size:14px;hr{margin:3em auto;max-width 300px;}&__interaktiv{position:relative;&-logo{float:none;position:absolute;left:1em;top:1em;img{width:2.3em;height:2.3em;}}&-title,&-body{margin-left:3.3em;}}}}@media screen and (min-width:768px){.footer{margin-top:60px;padding-bottom:60px;}}@media screen and (min-width:960px){.footer{margin-top:80px;padding-bottom:80px;.footer__top,.footer__bot{padding:0 60px;}}}",
    ]);
  },
  130: function (e, t, n) {
    "use strict";
    n(41), n(19);
    var r = n(0),
      o = n.n(r);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    t.a = function (e) {
      e.styles;
      var t = (function (e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      })(e, ["styles"]);
      return o.a.createElement(
        "svg",
        a(
          {
            width: "8",
            height: "16",
            viewBox: "0 0 8 16",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t
        ),
        o.a.createElement("path", {
          d: "M4.72 16l.001-8 2.566-.001.275-2.757H4.719l.004-1.38c0-.719.046-1.104 1.018-1.104h1.796V0H4.962c-2.495 0-3.07 1.369-3.07 3.618l.003 1.624L0 5.243V8h1.895v8h2.824z",
        })
      );
    };
  },
  131: function (e, t, n) {
    "use strict";
    n(41), n(19);
    var r = n(0),
      o = n.n(r);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    t.a = function (e) {
      e.styles;
      var t = (function (e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      })(e, ["styles"]);
      return o.a.createElement(
        "svg",
        a(
          {
            width: "19",
            height: "16",
            viewBox: "0 0 19 16",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t
        ),
        o.a.createElement("path", {
          d: "M15.625 1.276C14.93.49 13.941 0 12.847 0 10.744 0 9.04 1.81 9.04 4.04c0 .316.034.625.098.92C5.975 4.791 3.17 3.183 1.293.738A4.2 4.2 0 0 0 .778 2.77c0 1.402.673 2.639 1.693 3.363a3.641 3.641 0 0 1-1.724-.507v.05c0 1.957 1.312 3.59 3.053 3.962a3.6 3.6 0 0 1-1.72.069c.485 1.605 1.89 2.773 3.555 2.806A7.364 7.364 0 0 1 0 14.185 10.33 10.33 0 0 0 5.835 16c7.001 0 10.83-6.156 10.83-11.495 0-.175-.003-.35-.011-.523a7.948 7.948 0 0 0 1.901-2.09 7.261 7.261 0 0 1-2.186.637A4.019 4.019 0 0 0 18.043.295a7.384 7.384 0 0 1-2.418.981z",
        })
      );
    };
  },
  132: function (e, t, n) {
    e.exports = n.p + "public/images/fi-signet-color.png";
  },
  133: function (e, t, n) {
    e.exports = n.p + "public/images/fi-logo.png";
  },
  17: function (e, t, n) {
    "use strict";
    var r = n(2).default.div.withConfig({ componentId: "hyeutz-0" })(
      ["display:", ";width:46%;"],
      function (e) {
        return e.isVisible ? "block" : "none";
      }
    );
    (r.defaultProps = { isVisible: !0 }), (t.a = r);
  },
  176: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      a = n(59),
      i = n.n(a),
      c = n(22),
      u = n(2),
      l = n(115),
      f = Object(l.a)({
        baseData: [],
        mergeData: [],
        baseKey: null,
        mergeKey: null,
        baseDataError: null,
        mergeDataError: null,
        baseFileType: "",
        baseFileName: "",
        mergeFileType: "",
        mergeFileName: "",
        baseFirstRowHeader: !0,
        mergeFirstRowHeader: !0,
        downloadFormat: null,
        excludeFields: [],
      });
    n(9), n(12), n(8), n(14), n(15), n(97), n(98);
    function s(e) {
      return function () {
        return Object(u.css)(
          ["@media (min-width:", "px){", "}"],
          e,
          u.css.apply(void 0, arguments)
        );
      };
    }
    var p = { s: 460, m: 768, l: 1024 },
      d = { s: s(p.s), m: s(p.m), l: s(p.l) };
    function m() {
      var e = (function (e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(["\n    font-size: 60px;\n  "]);
      return (
        (m = function () {
          return e;
        }),
        e
      );
    }
    var b = u.default.div.withConfig({ componentId: "zzna5o-0" })([
        "text-align:center;margin-bottom:50px;",
      ]),
      h = u.default.h1.withConfig({ componentId: "zzna5o-1" })(
        ["margin:0;font-weight:400;font-size:40px;", ""],
        d.m(m())
      ),
      y = u.default.span.withConfig({ componentId: "zzna5o-2" })([
        "font-weight:900;",
      ]),
      g = u.default.div.withConfig({ componentId: "zzna5o-3" })(
        ["margin:10px 0 20px 0;font-family:", ";"],
        function (e) {
          return e.theme.fonts.mono;
        }
      ),
      v = function () {
        return o.a.createElement(
          r.Fragment,
          null,
          o.a.createElement(
            b,
            null,
            o.a.createElement(
              h,
              null,
              "(Geo) ",
              o.a.createElement(y, null, "DataMerger")
            ),
            o.a.createElement(
              g,
              null,
              "地物ファイルとテーマファイルを結合するツール"
            )
          )
        );
      },
      w = n(117),
      O = n(125),
      x = n(126),
      j = n(128),
      E = n(133),
      _ = n.n(E);
    function k(e) {
      return (k =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function C(e, t) {
      return !t || ("object" !== k(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function F(e) {
      return (F = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function S(e, t) {
      return (S =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var D = u.default.header.withConfig({ componentId: "sc-1mg0km1-0" })(
        [
          "padding:8px 16px;a{display:flex;align-items:center;text-decoration:none;color:",
          " font-weight:300;}a:hover,a:visited,a:active{color:inherit;}span{margin-left:1em;}}",
        ],
        function (e) {
          return e.theme.colors.black;
        }
      ),
      T = u.default.img.withConfig({ componentId: "sc-1mg0km1-1" })([
        "max-height:38px;@media screen and (min-width:640px){max-height:48px;}",
      ]),
      I = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            C(this, F(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && S(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && P(e.prototype, t), n && P(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          t
        );
      })();
    function R(e) {
      return (R =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function N(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function A(e, t) {
      return !t || ("object" !== R(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function z(e) {
      return (z = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function M(e, t) {
      return (M =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var K = u.default.div.withConfig({ componentId: "o8kzri-0" })([
        "display:flex;flex-direction:column;min-height:100%;",
      ]),
      H = u.default.div.withConfig({ componentId: "o8kzri-1" })([
        "margin:0 auto;max-width:960px;padding:32px 16px;flex-grow:1;width:100%;",
      ]),
      V = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            A(this, z(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && M(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && N(e.prototype, t), n && N(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  K,
                  null,
                  o.a.createElement(I, null),
                  o.a.createElement(
                    H,
                    null,
                    o.a.createElement(v, null),
                    o.a.createElement(w.a, null),
                    o.a.createElement(O.a, null),
                    o.a.createElement(x.a, null)
                  ),
                  o.a.createElement(j.a, null)
                );
              },
            },
          ]),
          t
        );
      })(),
      B = n(134),
      q = n.n(B);
    function G() {
      var e = (function (e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "\n  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700,900');\n\n  ",
        "\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    position: relative;\n    font-family: 'Roboto', sans-serif;\n    background: ",
        ";\n    color: ",
        ";\n  }\n\n  body, html {\n    height: 100%;\n  }\n\n  #root {\n    height: 100%;\n  }\n",
      ]);
      return (
        (G = function () {
          return e;
        }),
        e
      );
    }
    var L = Object(u.createGlobalStyle)(
        G(),
        q.a,
        function (e) {
          return e.theme.colors.background;
        },
        function (e) {
          return e.theme.colors.darkBackground;
        }
      ),
      J = document.createElement("div");
    (J.id = "root"),
      i.a.render(
        o.a.createElement(
          c.Provider,
          { store: f },
          o.a.createElement(
            u.ThemeProvider,
            {
              theme: {
                colors: {
                  black: "#222",
                  background: "#FFFFFF",
                  section: "#EEEEEE",
                  interaction: "#5AFF78",
                  interactionInactive: "#ddd",
                  darkgray: "#888",
                  darkBackground: "#3D3D3D",
                  warning: "#dd8080",
                },
                fonts: {
                  sans: "Roboto, sans-serif",
                  mono: "Roboto Mono, monospace",
                },
              },
            },
            o.a.createElement(
              r.Fragment,
              null,
              o.a.createElement(L, null),
              o.a.createElement(V, null)
            )
          )
        ),
        J
      ),
      document.body.appendChild(J);
  },
  20: function (e, t, n) {
    "use strict";
    var r = n(47),
      o = (n(114), n(31), n(19), n(43), n(30), n(45), n(112), n(122)),
      a = n(60),
      i = n(63),
      c = n(64);
    function u(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return Object.keys(e).reduce(function (n, r) {
        return -1 === t.indexOf(r) && (n[r] = e[r]), n;
      }, {});
    }
    function l(e) {
      return JSON.stringify(e);
    }
    function f(e) {
      var t = e.map(function (e) {
        var t = e.__geometry,
          n = { id: e.__id },
          r = u(e, ["__geometry", "__id"]);
        return Object(a.feature)(t, r, n);
      });
      return Object(a.featureCollection)(t);
    }
    function s(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "output",
        o = (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e;
          return (
            t.excludeFields &&
              (n = n.map(function (e) {
                return u(e, t.excludeFields);
              })),
            n
          );
        })(e, { excludeFields: n }),
        a = null;
      return (
        "geojson" === t &&
          (a = {
            data: (function (e) {
              return l(f(e));
            })(o),
            type: "text/json;charset=utf-8",
            name: "".concat(r, ".geojson"),
          }),
        "topojson" === t &&
          (a = {
            data: (function (e) {
              var t = f(e);
              return l(Object(i.b)({ data: t }));
            })(o),
            type: "text/json;charset=utf-8",
            name: "".concat(r, ".topo.json"),
          }),
        "json" === t &&
          (a = {
            data: (function (e) {
              return l(
                e.map(function (e) {
                  return u(e, ["__geometry", "__id"]);
                })
              );
            })(o),
            type: "text/json;charset=utf-8",
            name: "".concat(r, ".json"),
          }),
        "csv" === t &&
          (a = {
            data: (function (e) {
              var t = e.map(function (e) {
                return u(e, ["__geometry", "__id"]);
              });
              return Object(c.a)(t);
            })(o),
            type: "text/csv;charset=utf-8",
            name: "".concat(r, ".csv"),
          }),
        a
      );
    }
    function p(e, t) {
      var n = s(
        e,
        t,
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        arguments.length > 3 ? arguments[3] : void 0
      );
      if (n) {
        var r = new Blob([n.data], { type: n.type });
        Object(o.saveAs)(r, n.name);
      }
    }
    n.d(t, "b", function () {
      return r.a;
    }),
      n.d(t, "d", function () {
        return r.c;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return p;
      });
  },
  32: function (e, t, n) {
    "use strict";
    n(77), n(43), n(30), n(45), n(8), n(46), n(19);
    var r = n(47);
    function o(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var a = function (e) {
        return function (t, n) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  o(e, t, n[t]);
                });
            }
            return e;
          })({}, i("base", e, n), {
            downloadFormat: null === n ? null : n.data.type,
          });
        };
      },
      i = function (e, t, n) {
        var r,
          a = null === n;
        return (!a && n.data && n.data.type) || a
          ? (o((r = {}), "".concat(e, "RawData"), a ? [] : n.rawData),
            o(r, "".concat(e, "Data"), a ? [] : n.data),
            o(r, "".concat(e, "Key"), a ? "" : n.data.columns[0]),
            o(r, "".concat(e, "FileName"), a ? "" : n.fileName),
            o(r, "".concat(e, "FileType"), a ? "" : n.type),
            r)
          : c(t)(t.getState(), e);
      },
      c = function (e) {
        return function (t, n) {
          return (
            window.setTimeout(function () {
              e.setState(o({}, "".concat(n, "DataError"), null));
            }, 4500),
            o({}, "".concat(n, "DataError"), !0)
          );
        };
      },
      u = function (e, t) {
        return { baseKey: t };
      },
      l = function (e, t) {
        return { mergeKey: t };
      },
      f = function (e, t) {
        return { downloadFormat: t };
      },
      s = function (e) {
        return {
          mergeData: e.baseData,
          baseData: e.mergeData,
          mergeRawData: e.baseRawData,
          baseRawData: e.mergeRawData,
          mergeKey: e.baseKey,
          baseKey: e.mergeKey,
          mergeFileName: e.baseFileName,
          baseFileName: e.mergeFileName,
          mergeFileType: e.baseFileType,
          baseFileType: e.mergeFileType,
        };
      },
      p = function (e, t) {
        var n = e.excludeFields.indexOf(t);
        return -1 === n
          ? { excludeFields: e.excludeFields.concat([t]) }
          : {
              excludeFields: e.excludeFields.filter(function (e, t) {
                return t !== n;
              }),
            };
      },
      d = function (e, t) {
        var n,
          a = !e["".concat(t, "FirstRowHeader")],
          i = Object(r.b)(e["".concat(t, "RawData")], a);
        return (
          (i.columns = Object(r.a)(i)),
          o((n = {}), "".concat(t, "Data"), i),
          o(n, "".concat(t, "FirstRowHeader"), a),
          n
        );
      };
    t.a = function (e) {
      return {
        setBaseData: a(e),
        setMergeData: (function (e) {
          return function (t, n) {
            return i("merge", e, n);
          };
        })(e),
        setError: c(e),
        setBaseKey: u,
        setMergeKey: l,
        setDownloadFormat: f,
        swapData: s,
        toggleExcludeField: p,
        toggleFirstRowHeader: d,
      };
    };
  },
  33: function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n.n(r),
      a = n(2),
      i = a.default.div.withConfig({ componentId: "gvbjqh-0" })(
        ["margin:32px 0 16px 0;padding:15px 0;border-top:3px solid ", ";"],
        function (e) {
          return e.isActive
            ? e.theme.colors.darkBackground
            : e.theme.colors.interactionInactive;
        }
      ),
      c = a.default.div.withConfig({ componentId: "gvbjqh-1" })(
        ["display:flex;align-items:center;margin-bottom:10px;opacity:", ";"],
        function (e) {
          return e.isActive ? 1 : 0.5;
        }
      ),
      u = a.default.div.withConfig({ componentId: "gvbjqh-2" })(
        [
          "background:",
          ";display:flex;align-items:center;justify-content:center;width:24px;height:24px;line-height:1;margin-right:16px;border-radius:50%;font-weight:700;",
        ],
        function (e) {
          return e.isActive
            ? e.theme.colors.interaction
            : e.theme.colors.interactionInactive;
        }
      ),
      l = a.default.h2.withConfig({ componentId: "gvbjqh-3" })([
        "margin:0;font-size:20px;",
      ]),
      f = a.default.div.withConfig({ componentId: "gvbjqh-4" })(
        ["margin:0 0 16px 0;color:", ";font-size:15px;line-height:1.3;"],
        function (e) {
          return e.isActive ? e.theme.colors.black : e.theme.colors.darkgray;
        }
      );
    t.a = function (e) {
      var t = e.title,
        n = e.subtitle,
        r = e.step,
        a = e.children,
        s = e.isActive,
        p = void 0 === s || s,
        d = e.className;
      return o.a.createElement(
        i,
        { isActive: p, className: d },
        o.a.createElement(
          c,
          { isActive: p },
          o.a.createElement(u, { isActive: p }, r + 1),
          o.a.createElement(l, { isActive: p }, t)
        ),
        o.a.createElement(f, {
          isActive: p,
          dangerouslySetInnerHTML: { __html: n },
        }),
        a
      );
    };
  },
  34: function (e, t, n) {
    "use strict";
    var r = n(2).default.div.withConfig({ componentId: "dlm364-0" })(
      ["display:", ";justify-content:space-between;padding:10px 0;"],
      function (e) {
        return e.isVisible ? "flex" : "none";
      }
    );
    (r.defaultProps = { isVisible: !0 }), (t.a = r);
  },
  35: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return f;
      });
    n(74), n(76), n(41), n(31);
    var r = n(50),
      o = n(85),
      a = n(20),
      i = function (e) {
        return e.baseData;
      },
      c = Object(r.a)(
        [
          function (e) {
            return e.mergeData;
          },
          function (e) {
            return e.mergeKey;
          },
        ],
        function (e, t) {
          return e && t
            ? Object(o.a)(e, function (e) {
                return e[t];
              })
            : Object(o.a)([], function (e) {
                return e;
              });
        }
      ),
      u = Object(r.a)(
        [
          i,
          function (e) {
            return e.baseKey;
          },
          c,
        ],
        function (e, t, n) {
          var r = [];
          return (
            e &&
              (r = e.map(function (e) {
                var r = e[t],
                  o = n.get(r);
                return Object.assign({}, e, o);
              })),
            (r.columns = Object(a.b)(r)),
            r
          );
        }
      ),
      l = Object(r.a)([i], function (e) {
        return ["geojson", "topojson"].includes(e.type);
      }),
      f = Object(r.a)(
        [
          function (e) {
            return e.baseFileName;
          },
          function (e) {
            return e.mergeFileName;
          },
        ],
        function (e, t) {
          return e || t
            ? "merge__"
                .concat(e.substring(0, 10), "__")
                .concat(t.substring(0, 10))
            : "output";
        }
      );
  },
  40: function (e) {
    e.exports = {
      meta: {
        title: "Geo Data Merger",
        description:
          "json、csv、geojson、topojsonファイルのデータ・マージ・ツールです。",
        viewport: "width=device-width, initial-scale=1",
        robots: "index, follow",
      },
      defaultDelimiters: [",", ";", "\t"],
      downloadFormats: ["csv", "json", "geojson", "topojson"],
      sections: [
        {
          title: "ファイルを指定してください",
          subtitle:
            "json、csv、geojson、topojsonファイルが利用可能です。<br /><strong>データをサーバ環境へアップロードしません。</strong> すべてはローカル環境で実行されます。",
        },
        {
          title: "結合するキーを選択",
          subtitle: "データを結合するキーとなる列を選択します。",
        },
        { title: "保存", subtitle: "最終結果に含める列を選択します。" },
      ],
      social: {
        twitter:
          "Geo Data Merger - A tool for merging data sets by @funkeinteraktiv",
        facebook: "Geo Data Merger - A tool for merging data sets",
      },
    };
  },
  47: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return d;
        });
      n(158),
        n(161),
        n(163),
        n(9),
        n(12),
        n(164),
        n(77),
        n(8),
        n(19),
        n(165),
        n(167),
        n(46),
        n(43),
        n(30),
        n(45),
        n(41),
        n(31),
        n(112),
        n(113),
        n(171),
        n(172);
      var r = n(64),
        o = n(63),
        a = n(83);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(t) {
        return (
          e.defaultDelimiters.find(function (e) {
            return (function (e) {
              var t = "^[^\\n\\r]+".concat(
                (function (e) {
                  return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                })(e)
              );
              return new RegExp(t);
            })(e).test(t);
          }) || ","
        );
      }
      function l(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = !1;
        try {
          var o = u(e),
            a = r.b(o);
          n = t
            ? a.parse(e)
            : a.parseRows(e, function (e) {
                return e.reduce(function (e, t, n) {
                  return (e["column_".concat(n + 1)] = t), e;
                }, {});
              });
        } catch (e) {
          n = !1;
        }
        return n;
      }
      function f(e) {
        return e.features.map(function (e) {
          return Object.assign(
            {},
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  r.forEach(function (t) {
                    c(e, t, n[t]);
                  });
              }
              return e;
            })({}, e.properties, { __geometry: e.geometry, __id: e.id })
          );
        });
      }
      function s(e) {
        return e
          .reduce(function (e, t) {
            return i(new Set(e.concat(Object.keys(t))));
          }, [])
          .filter(function (e) {
            return 0 !== e.indexOf("__");
          });
      }
      function p(e) {
        var t = [],
          n = "";
        return (
          !(function (e) {
            return "FeatureCollection" === Object(a.getType)(e);
          })(e)
            ? !(function (e) {
                return "Topology" === Object(a.getType)(e);
              })(e)
              ? e.length && e.columns
                ? ((n = "csv"), (t = e))
                : e.length && ((n = "json"), (t = e))
              : ((t = (function (e) {
                  var t = Object.keys(e.objects)[0];
                  return f(o.a(e, e.objects[t]));
                })(e)),
                (n = "topojson"))
            : ((t = f(e)), (n = "geojson")),
          (t.columns = s(t)),
          (t.type = n),
          t
        );
      }
      function d(e) {
        var t =
          (function (e) {
            var t = !1;
            try {
              t = JSON.parse(e);
            } catch (e) {
              t = !1;
            }
            return t;
          })(e) || l(e);
        return !!t && { data: p(t), rawData: e };
      }
    }).call(this, n(40));
  },
  48: function (e, t, n) {
    "use strict";
    n(9), n(12), n(8), n(14), n(15), n(113), n(19), n(46), n(31);
    var r = n(0),
      o = n.n(r),
      a = n(135),
      i = n(1),
      c = n.n(i),
      u = n(2);
    n(175);
    function l(e) {
      return (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function s(e, t) {
      return !t || ("object" !== l(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function p(e) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function d(e, t) {
      return (d =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function m(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var b = u.default.div.withConfig({ componentId: "sc-17hikk4-0" })(
        [
          "position:relative;background:transparent;.ReactTable{font-family:",
          ";height:200px;}.ReactTable .rt-tbody{overflow:unset;}.ReactTable .rt-thead .rt-th,.ReactTable .rt-thead .rt-td,.ReactTable .rt-thead.-header{box-shadow:none;border-bottom:1px solid #eee;font-family:",
          ";font-weight:700;}.ReactTable .rt-noData{font-family:",
          ";text-align:center;color:",
          ";background:transparent;font-weight:700;}",
        ],
        function (e) {
          return e.theme.fonts.mono;
        },
        function (e) {
          return e.theme.fonts.sans;
        },
        function (e) {
          return e.theme.fonts.sans;
        },
        function (e) {
          return e.theme.colors.black;
        }
      ),
      h = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            s(this, p(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && f(e.prototype, t), n && f(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.data,
                  n = e.excludeFields,
                  r = (t.columns || [])
                    .filter(function (e) {
                      return (
                        e.indexOf(!0) &&
                        !n.find(function (t) {
                          return t === e;
                        })
                      );
                    })
                    .map(function (e) {
                      return {
                        Header: e,
                        accessor: e,
                        Cell: function (e) {
                          return JSON.stringify(e.value);
                        },
                      };
                    });
                return o.a.createElement(
                  b,
                  null,
                  o.a.createElement(a.a, {
                    className: "-striped",
                    data: t,
                    columns: r,
                    showPagination: !1,
                    sortable: !1,
                    minRows: 0,
                    noDataText: "↑ Please drop a file to see the result.",
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    m(h, "propTypes", {
      data: c.a.arrayOf(c.a.object),
      excludeFields: c.a.arrayOf(c.a.string),
    }),
      m(h, "defaultProps", { data: [], excludeFields: [] }),
      (t.a = h);
  },
  49: function (e, t, n) {
    "use strict";
    n(9), n(12), n(8), n(14), n(15), n(31);
    var r = n(0),
      o = n.n(r),
      a = n(1),
      i = n.n(a);
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function l(e, t) {
      return !t || ("object" !== c(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function f(e) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var d = n(2).default.select.withConfig({ componentId: "sc-1sbd6oq-0" })([
        "cursor:pointer;width:200px;padding:0 .571em;font-size:14px;background:#fff;border:1px solid #ccc;border-bottom-color:#a3a3a3;border-radius:4px;height:35px;&:disabled{background:#eee;color:#777;}",
      ]),
      m = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            l(this, f(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && s(e, t);
          })(t, r["Component"]),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "onChange",
              value: function (e) {
                this.props.onChange(e.target.value);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return o.a.createElement(
                  d,
                  {
                    onChange: function (t) {
                      return e.onChange(t);
                    },
                    disabled: this.props.disabled,
                    value: this.props.value,
                  },
                  0 === this.props.options.length &&
                    o.a.createElement(
                      "option",
                      { value: "default", disabled: !0 },
                      this.props.placeholder
                    ),
                  this.props.options.map(function (e) {
                    return o.a.createElement(
                      "option",
                      { value: e, key: "Select__Option__".concat(e) },
                      e
                    );
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    p(m, "propTypes", {
      options: i.a.arrayOf(i.a.string),
      onChange: i.a.func,
      placeholder: i.a.string,
    }),
      p(m, "defaultProps", {
        options: [],
        onChange: function () {},
        placeholder: "Select...",
      }),
      (t.a = m);
  },
  61: function (e, t, n) {
    "use strict";
    var r = n(2);
    t.a = r.default.button.withConfig({ componentId: "sc-1qxq8yb-0" })(
      [
        "background:",
        ";padding:8px 16px;font-weight:700;border:none;cursor:pointer;border-radius:4px;border:1px solid #ccc;border-bottom-color:#a3a3a3;&:hover{opacity:0.9;}",
      ],
      function (e) {
        return e.disabled
          ? e.theme.colors.interactionInactive
          : e.theme.colors.interaction;
      }
    );
  },
  62: function (e, t, n) {
    "use strict";
    n(19), n(43), n(30), n(45);
    var r = n(0),
      o = n.n(r),
      a = n(2);
    function i(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var c = a.default.div.withConfig({ componentId: "d7fmn2-0" })(
        [
          "margin-bottom:8px;margin-right:16px;font-weight:700;font-family:",
          ";display:flex;align-items:center;line-height:1;input{margin-right:8px;display:block:}",
        ],
        function (e) {
          return e.theme.fonts.sans;
        }
      ),
      u = a.default.label.withConfig({ componentId: "d7fmn2-1" })([
        "display:block;",
      ]);
    t.a = function (e) {
      var t = e.checked,
        n = e.onChange,
        r = e.label,
        a = i(e, ["checked", "onChange", "label"]);
      return o.a.createElement(
        c,
        a,
        o.a.createElement("input", {
          type: "checkbox",
          checked: t,
          onChange: n,
        }),
        o.a.createElement(u, null, r)
      );
    };
  },
  86: function (e, t, n) {
    "use strict";
    n(9), n(12), n(77), n(46), n(43), n(30), n(45), n(8), n(14), n(15), n(114);
    var r = n(0),
      o = n.n(r),
      a = n(1),
      i = n.n(a),
      c = n(2),
      u = n(24),
      l = n(136),
      f = n(120),
      s = n.n(f),
      p = n(121),
      d = n.n(p),
      m = n(20);
    function b(e) {
      return (b =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function y(e, t) {
      return !t || ("object" !== b(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function v(e, t) {
      return (v =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var w = c.default.textarea.withConfig({ componentId: "oum9dr-0" })([
        "width:100%;resize:none;padding:16px;border:1px solid #eee;resize:vertical;min-height:150px;height:100%;",
      ]),
      O = c.default.div.withConfig({ componentId: "oum9dr-1" })(
        ["background:", ";padding:16px;height:200px;"],
        function (e) {
          return e.theme.colors.section;
        }
      ),
      x = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            y(this, g(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && v(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && h(e.prototype, t), n && h(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  O,
                  null,
                  o.a.createElement(w, {
                    placeholder: this.props.placeholder,
                    onChange: this.props.onChange,
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    function j(e) {
      return (j =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function E(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function (t) {
            F(e, t, n[t]);
          });
      }
      return e;
    }
    function _(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function k(e, t) {
      return !t || ("object" !== j(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function P(e) {
      return (P = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function C(e, t) {
      return (C =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function F(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var S = Object(c.default)(u.d).withConfig({ componentId: "sc-1rdr527-0" })(
        ["opacity:", ";pointer-events:", ";"],
        function (e) {
          return e.isActive ? 1 : 0.25;
        },
        function (e) {
          return e.isActive ? "all" : "none";
        }
      ),
      D = Object(c.default)(u.b).withConfig({ componentId: "sc-1rdr527-1" })(
        [
          "list-style:none;margin:0;padding:0;display:flex;> .react-tabs__tab{padding:8px 16px;background:transparent;cursor:pointer;font-weight:700;&:hover,&--selected{background:",
          ";}}",
        ],
        function (e) {
          return e.theme.colors.section;
        }
      ),
      T = Object(c.default)(l.a).withConfig({ componentId: "sc-1rdr527-2" })(
        [
          "width:100%;height:200px;border-radius:5px;background:",
          ";padding:16px;display:flex;align-items:center;justify-content:center;font-weight:700;overflow:hidden;",
        ],
        function (e) {
          return e.theme.colors.section;
        }
      ),
      I = c.default.div.withConfig({ componentId: "sc-1rdr527-3" })([
        "display:flex;flex-direction:column;align-items:center;background:white;padding:16px;width:200px;border:1px solid #ccc;border-bottom-color:#a3a3a3;border-radius:4px;position:relative;",
      ]),
      R = c.default.div.withConfig({ componentId: "sc-1rdr527-4" })(
        [
          "position:absolute;right:-10px;top:-10px;background:",
          ";border-radius:50%;padding:5px;display:flex;jusitfy-content:center;align-items:center;cursor:pointer;&:hover{opacity:0.8;}",
        ],
        function (e) {
          return e.theme.colors.interaction;
        }
      ),
      N = c.default.div.withConfig({ componentId: "sc-1rdr527-5" })([
        "font-size:14px;margin-top:10px;",
      ]),
      A = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            k(this, P(t).apply(this, arguments))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && C(e, t);
          })(t, r["PureComponent"]),
          (function (e, t, n) {
            t && _(e.prototype, t), n && _(e, n);
          })(t, [
            {
              key: "onDrop",
              value: function (e) {
                if (!e.length) return this.props.onError();
                this.readFile(e[0]);
              },
            },
            {
              key: "onPaste",
              value: function (e) {
                var t = e.target.value,
                  n = Object(m.d)(t);
                n &&
                  this.props.onChange(
                    E({}, n, { fileName: "", type: "copy-paste" })
                  );
              },
            },
            {
              key: "onDeleteFile",
              value: function (e) {
                e.preventDefault(), this.props.onChange(null);
              },
            },
            {
              key: "readFile",
              value: function (e) {
                var t = this,
                  n = new FileReader();
                (n.onload = function () {
                  var r = n.result,
                    o = Object(m.d)(r);
                  o &&
                    t.props.onChange(
                      E({}, o, { fileName: e.name, type: e.type })
                    );
                }),
                  n.readAsText(e);
              },
            },
            {
              key: "renderFile",
              value: function () {
                var e = this;
                return this.props.fileName
                  ? o.a.createElement(
                      I,
                      null,
                      o.a.createElement(
                        R,
                        {
                          onClick: function (t) {
                            return e.onDeleteFile(t);
                          },
                        },
                        o.a.createElement(d.a, { size: 20 })
                      ),
                      o.a.createElement(s.a, { size: 48 }),
                      o.a.createElement(N, null, this.props.fileName)
                    )
                  : this.props.dropText;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return o.a.createElement(
                  S,
                  { isActive: this.props.isActive },
                  o.a.createElement(
                    D,
                    null,
                    o.a.createElement(u.a, null, "File"),
                    o.a.createElement(u.a, null, "コピー & ペースト")
                  ),
                  o.a.createElement(
                    u.c,
                    null,
                    o.a.createElement(
                      T,
                      {
                        accept: [".geojson", ".csv", ".json", ".topojson"],
                        onDrop: function (t) {
                          return e.onDrop(t);
                        },
                        multiple: !1,
                      },
                      this.renderFile()
                    )
                  ),
                  o.a.createElement(
                    u.c,
                    null,
                    o.a.createElement(x, {
                      onChange: function (t) {
                        return e.onPaste(t);
                      },
                      placeholder: this.props.textareaPlaceholder,
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })();
    F(A, "propTypes", {
      onChange: i.a.func,
      onError: i.a.func,
      isActive: i.a.bool,
      dropText: i.a.string,
      textareaPlaceholder: i.a.string,
    }),
      F(A, "defaultProps", {
        onChange: function () {},
        onError: function () {},
        isActive: !0,
        dropText: "Drop file here",
        textareaPlaceholder: "Paste data here",
      });
    t.a = A;
  },
});
//# sourceMappingURL=app.3fda7222.js.map
