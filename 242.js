(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 242 ], { 85: (t, e, n) => { "use strict"; n.d(e, { a: () => S, b: () => U, c: () => x, d: () => C }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(91266), c = n(78396), u = n(9036), l = new TextDecoder("utf-8"), f = new TextEncoder, h = new u.Reader(new DataView(new ArrayBuffer(1))), v = new u.Writer, d = { bool: { offset: 1, get: function(t, e) { return 0 !== t.root.U8[t.pointer + e]; }, set: function(t, e, n) { return t.root.U8[t.pointer + e] = n ? 1 : 0, n; } }, u8: { offset: 1, get: function(t, e) { return t.root.U8[t.pointer + e]; }, set: function(t, e, n) { return t.root.U8[t.pointer + e] = n; } }, i8: { offset: 1, get: function(t, e) { return t.root.I8[t.pointer + e]; }, set: function(t, e, n) { return t.root.I8[t.pointer + e] = n; } }, f32: { offset: 4, get: function(t, e) { return t.root.view.getFloat32(t.pointer + e, !0); }, set: function(t, e, n) { return t.root.view.setFloat32(t.pointer + e, n, !0), n; } }, u32: { offset: 4, get: function(t, e) { return t.root.U32[t.pointer + e >> 2]; }, set: function(t, e, n) { return t.root.U32[t.pointer + e >> 2] = n; } }, f64: { offset: 8, get: function(t, e) { return t.root.view.getFloat64(t.pointer + e, !0); }, set: function(t, e, n) { return t.root.view.setFloat64(t.pointer + e, n, !0), n; } }, usize: { offset: 4, get: function(t, e) { return d.u32.get(t, e); }, set: function(t, e, n) { return d.u32.set(t, e, n); } }, i32: { offset: 4, get: function(t, e) { return t.root.I32[t.pointer + e >> 2]; }, set: function(t, e, n) { return t.root.I32[t.pointer + e >> 2] = n; } }, u16: { offset: 2, get: function(t, e) { return t.root.U16[t.pointer + e >> 1]; }, set: function(t, e, n) { return t.root.U16[t.pointer + e >> 1] = n; } }, i16: { offset: 2, get: function(t, e) { return t.root.I16[t.pointer + e >> 1]; }, set: function(t, e, n) { return t.root.I16[t.pointer + e >> 1] = n; } }, string: { offset: 4, get: function(t, e) { t.root.checkView(); var n = t.root.U32[t.pointer + e >> 2], r = t.root.U32[n - 4 >> 2]; return h.setView(t.root.view, n), h.readUTF16String(r >> 1); }, set: function(t, e, n) { t.root.checkView(); var r = t.root.wasm.__new(n.length << 1, 1); return t.root.checkView(), v.setView(t.root.view, r), v.writeUTF16String(n), t.root.view.setUint32(t.pointer + e, r, !0), n; } }, utf8: { offset: 4, get: function(t, e) { t.root.checkView(); var n = t.root.U32[t.pointer + e >> 2], r = t.root.U32[n - 4 >> 2]; h.setView(t.root.view, n); var i = h.readUTF16String(r >> 1); return l.decode(Uint8Array.from({ length: r >> 1 }, function(t, e) { return i.charCodeAt(e); })); }, set: function(t, e, n) { n = String.fromCharCode.apply(String, f.encode(n)); var r = t.root.wasm.__new(n.length << 1, 1); return t.root.checkView(), v.setView(t.root.view, r), v.writeUTF16String(n), t.root.view.setUint32(t.pointer + e, r, !0), n; } }, utf16: { offset: 4, get: function(t, e) { t.root.checkView(); var n = t.root.U32[t.pointer + e >> 2], r = t.root.U32[n - 4 >> 2]; return h.setView(t.root.view, n), h.readUTF16String(r >> 1); }, set: function(t, e, n) { var r = t.root.wasm.__new(n.length << 1, 2); return t.root.checkView(), v.setView(t.root.view, r), v.writeUTF16String(n), t.root.view.setUint32(t.pointer + e, r, !0), n; } } }; const p = d; function y(t, e, n) { return e = (0, a.a)(e), (0, o.a)(t, g() ? Reflect.construct(e, n || [], (0, a.a)(t).constructor) : e.apply(t, n)); } function g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (g = function() { return !!t; })(); } function w(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (t) { if ("string" == typeof t) return m(t, e); var n = {}.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function m(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function b(t, e, n) { var r = (null == n ? void 0 : n.prototype) || {}, i = function() { var n = t[o].t, i = t[o].o, a = function(t, e) { if (!p[t]) throw Error('Not found type "'.concat(t, '" for "').concat(e, '"')); return p[t]; }(n, o), s = a.get, c = a.set, u = function(t) { return function() { return this.root.checkView(), s(this, t); }; }(i), l = function(t) { return function(e) { return this.root.checkView(), c(this, t, e); }; }(i); e && (u = u.bind(e), l = l.bind(e)), Object.defineProperty(r, o, { get: u, set: l, enumerable: !0, configurable: !0 }); }; for (var o in t) i(); return n; } function k(t, e) { var n = e.contexts; return function() { var e = n.get(arguments[0]); if (!e) throw new Error("AscBridge: Not found context for pointer ".concat(arguments[0], ', method "').concat(t, '"')); var r = e[t], i = arguments.length; if (!r) throw new Error('AscBridge: Not found method "'.concat(t, '" for pointer ').concat(arguments[0])); if (0 === i) throw new Error("No context provided"); return 1 === i ? r.call(e) : 2 === i ? r.call(e, arguments[1]) : 3 === i ? r.call(e, arguments[1], arguments[2]) : 4 === i ? r.call(e, arguments[1], arguments[2], arguments[3]) : 5 === i ? r.call(e, arguments[1], arguments[2], arguments[3], arguments[4]) : 6 === i ? r.call(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : (arguments[0] = e, r.call.apply(r, arguments)); }; } function _() { return this._pointer; } function I(t, e) { var n = this.prototype.__idToMethod.get(t); void 0 !== n ? this.prototypen : console.error("AscClass: Not found method for id", t); } function S(t) { var e; function n(t) { return this._cfg_use_contexts && (0 !== this._pointer && o.contexts.delete(this._pointer), 0 !== t && o.contexts.set(t, this)), this._pointer = t, this; } var o = (e = function(t) { function e(t, n, i) { var o; return (0, r.a)(this, e), o = y(this, e), (0, c.a)(o, "_pointer", 0), (0, c.a)(o, "_cfg_use_contexts", !0), (0, c.a)(o, "root", void 0), (0, c.a)(o, "test", void 0), (0, c.a)(o, "proxy", void 0), o.root = t, o.proxy = b(n, o, new Function).prototype, o.setPointer(i), o; } return (0, s.a)(e, t), (0, i.a)(e, [ { key: "pointer", get: _ }, { key: "setPointer", value: n } ], [ { key: "onPointer", value: I } ]); }(t), (0, c.a)(e, "contexts", new Map), (0, c.a)(e, "saveOwnPointer", function(t, n) { e.contexts.delete(t), e.contexts.set(t, n); }), e.onPointer = e.onPointer.bind(e), e); return o; } const U = function(t) { function e() { return (0, r.a)(this, e), y(this, e, arguments); } return (0, s.a)(e, t), (0, i.a)(e); }(S((0, i.a)(function t() { (0, r.a)(this, t); }))); function x(t) { var e = 0, n = Object.keys(t).map(function(n) { var r = t[n].t, i = p[r].offset; if (void 0 === i) throw Error('Not found type "'.concat(r, '" for "').concat(n.toString(), '"')); var o = e += e % i > 0 ? i - e % i : 0; return e += i, [ n, { t: r, o } ]; }); return { size: e, fields: Object.fromEntries(n) }; } function C(t, e, n) { var r = function(t, e) { var n = e.prototype, r = new Map, i = 0; function o(t, e) { return function r(i) { if (void 0 === i) { var o = this.constructor.name || "<unknown>", a = 'Method "'.concat(t, ":").concat(e, '" not linked to "').concat(o, '" class'); console.error(a, this); } else if (n[t] !== r) { var s = this.constructor.name || "<unknown>", c = 'Method "'.concat(t, ":").concat(e, '" already linked to "').concat(s, '" class'); console.error(c, this); } else Object.defineProperty(n, t, { value: function() { var t = this.root.wasm.table.get(i), e = arguments.length; return 0 === e ? t(this.pointer) : 1 === e ? t(this.pointer, arguments[0]) : 2 === e ? t(this.pointer, arguments[0], arguments[1]) : 3 === e ? t(this.pointer, arguments[0], arguments[1], arguments[2]) : 4 === e ? t(this.pointer, arguments[0], arguments[1], arguments[2], arguments[3]) : t.apply(void 0, [ this.pointer ].concat(Array.prototype.slice.call(arguments))); }, writable: !0, enumerable: !1, configurable: !1 }); }; } for (var a in t) { var s = i++; r.set(s, a), Object.defineProperty(n, a, { value: o(a, s), writable: !0, enumerable: !1, configurable: !1 }); } return Object.defineProperty(n, "__idToMethod", { value: r, writable: !1, enumerable: !1, configurable: !1 }), Object.defineProperty(n, "_asc_methods", { value: t, writable: !1, enumerable: !1, configurable: !1 }), e; }(e || {}, b(t, void 0, new Function)), i = S(r); return function(t, e) { var n, r = w(e); try { for (r.s(); !(n = r.n()).done; ) { var i = n.value; Object.defineProperty(t, i, { value: k(i, t), writable: !0, enumerable: !1, configurable: !1 }); } } catch (t) { r.e(t); } finally { r.f(); } }(i, n || []), i; } }, 9911: (t, e, n) => { "use strict"; n.d(e, { a: () => d }); var r, i, o, a, s = n(89260), c = n(7794), u = n(85174), l = f; function f(t, e) { var n = h(); return (f = function(t, e) { return n[t -= 269]; })(t, e); } function h() { var t = [ "1712VXyfhg", "3870270zIZSUL", "Message", "Dzxwx", "encode", "RjeQE", "encodeSign", "JtGlS", "lastmessag", "11460Ejumof", "NIdyv", "3|4|0|1|6|", "set", "codes", "sYbtZ", "zJkGA", "NeemL", "parse", "byteLength", "oinnK", "lLiSQ", "vfwHk", "IVqqC", "KUddP", "SVUCi", "isUpgraded", "dbkZr", "RgTcY", "KPoga", "decodeSign", "2|5", "3|2|1|0|4", "WanBB", "descriptio", "split", "decode", "IEIrt", "4|2|0|5|1|", "length", "waitForEnd", "pddsM", "7DdHTbo", "486VZkpRz", "199908wtbCyO", "2358keLkav", "xetrD", "UBzpu", "MhzLX", "DVVNd", "DJWUt", "UIMeH", "TuxgY", "mJIoz", "lbEmg", "3049884Cjbzpg", "18716510hvCbVX", "PhoqF", "wSvZG", "slice", "stringify", "ryVAX", "nndxh", "xCOJL", "6454264qMwLgk", "pkupd", "AiZFB", "2|3|1|0|4" ]; return (h = function() { return t; })(); } function v(t) { for (var e = f, n = { vfwHk: e(289) + "3", pddsM: function(t, e) { return t !== e; }, wSvZG: function(t, e) { return t(e); }, WanBB: function(t, e) { return t(e); } }, r = n[e(273)]e(286), i = 0; ;) { switch (r[i++]) { case "0": for (a = s; n[e(292)](t[a], 0); t[a++]) ; continue;case "1": var o = JSONe(269); continue;case "2": var a = s; continue;case "3": return o;case "4": var s = 1; continue;case "5": var c = (new TextDecoder)[e(287)](n[e(309)](y, n[e(284)](p, t[e(310)](s, a)))); continue; } break; } } !function(t) { for (var e = f, n = t(); ;) try { if (511966 === -parseInt(e(296)) / 1 * (-parseInt(e(294)) / 2) + -parseInt(e(295)) / 3 + parseInt(e(319)) / 4 * (-parseInt(e(328)) / 5) + -parseInt(e(306)) / 6 * (parseInt(e(293)) / 7) + -parseInt(e(315)) / 8 + parseInt(e(320)) / 9 + parseInt(e(307)) / 10) break; n.push(n.shift()); } catch (t) { n.push(n.shift()); } }(h), i = r || (r = {}), a = { dbkZr: (o = f)(277), xetrD: o(285) + "n", DVVNd: o(327) + "e" }, i[i[a[o(278)]] = 200] = a[o(278)], i[i[a[o(297)]] = 201] = a[o(297)], i[i[a[o(300)]] = 202] = a[o(300)]; var d = function() { var t = f, e = { KPoga: function(t, e, n) { return t(e, n); }, IVqqC: function(t, e, n, r) { return t(e, n, r); }, PhoqF: t(291) + t(321), lLiSQ: t(330) + t(282), TuxgY: function(t, e) { return t(e); }, oinnK: function(t, e) { return t + e; }, RjeQE: function(t, e) { return t + e; }, SVUCi: t(325) + "al", IEIrt: t(281) + "al" }; function n() { var r = t; e[r(280)](s.a, this, n), e[r(274)](u.a, this, e[r(308)], !1); } return e[t(274)](c.a, n, null, [ { key: e[t(276)], value: function(r) { for (var i = t, o = e[i(272)]i(286), a = 0; ;) { switch (o[a++]) { case "0": e[i(303)](p, e[i(303)](y, u)); continue;case "1": var s = new Uint8Array(e[i(271)](e[i(324)](c[i(290)], u[i(270)]), 1)); continue;case "2": s[i(331)](u, c[i(290)]); continue;case "3": var c = [ n[i(332)][i(285) + "n"] ]; continue;case "4": var u = (new TextEncoder)i(323); continue;case "5": return s;case "6": s[i(331)](c, 0); continue; } break; } } }, { key: e[t(288)], value: v } ]); }(); function p(t) { for (var e = l, n = { NIdyv: e(283), KUddP: function(t, e) { return t < e; }, RgTcY: function(t, e) { return t > e; }, UBzpu: function(t, e) { return t - e; }, JtGlS: function(t, e) { return t > e; }, lbEmg: function(t, e) { return t !== e; }, NeemL: function(t, e) { return t !== e; } }, r = n[e(329)]e(286), i = 0; ;) { switch (r[i++]) { case "0": for (var o = s; n[e(275)](o, a); o++) t[o] ^= 128; continue;case "1": n[e(279)](n[e(298)](a, s), t[e(290)]) && (a = n[e(298)](t[e(290)], s)); continue;case "2": var a = n[e(326)](arguments[e(290)], 2) && n[e(305)](arguments[2], void 0) ? arguments[2] : t[e(290)]; continue;case "3": var s = n[e(326)](arguments[e(290)], 1) && n[e(335)](arguments[1], void 0) ? arguments[1] : 0; continue;case "4": return t; } break; } } function y(t) { for (var e = l, n = { xCOJL: e(318), Dzxwx: function(t, e) { return t < e; }, nndxh: function(t, e) { return t(e); }, UIMeH: function(t, e) { return t > e; }, AiZFB: function(t, e) { return t - e; }, sYbtZ: function(t, e) { return t > e; }, DJWUt: function(t, e) { return t !== e; }, ryVAX: function(t, e) { return t > e; } }, r = n[e(314)]e(286), i = 0; ;) { switch (r[i++]) { case "0": for (var o = a; n[e(322)](o, s); o++) t[o] = n[e(313)](g, t[o]); continue;case "1": n[e(302)](n[e(317)](s, a), t[e(290)]) && (s = n[e(317)](t[e(290)], a)); continue;case "2": var a = n[e(333)](arguments[e(290)], 1) && n[e(301)](arguments[1], void 0) ? arguments[1] : 0; continue;case "3": var s = n[e(312)](arguments[e(290)], 2) && n[e(301)](arguments[2], void 0) ? arguments[2] : t[e(290)]; continue;case "4": return t; } break; } } (0, u.a)(d, l(332), r); var g = function(t) { var e = l, n = { zJkGA: function(t, e) { return t & e; }, MhzLX: function(t, e) { return t | e; }, mJIoz: function(t, e) { return t << e; }, pkupd: function(t, e) { return t >> e; } }; return n[e(334)](n[e(299)](n[e(304)](t, 4), n[e(316)](t, 4)), 255); }; }, 10341: (t, e, n) => { "use strict"; n.d(e, { a: () => r }); var r = 32; }, 14098: () => {}, 15697: (t, e, n) => { "use strict"; n.d(e, { a: () => m, b: () => h }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(91266), c = n(78396), u = n(85), l = n(95413); function f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (f = function() { return !!t; })(); } var h = (0, u.c)({ id: { t: "u16" }, mouseX: { t: "f32" }, mouseY: { t: "f32" }, view_rect_x: { t: "f32" }, view_rect_y: { t: "f32" }, view_rect_w: { t: "f32" }, view_rect_h: { t: "f32" }, view_scale: { t: "f32" }, view_w: { t: "f32" }, view_h: { t: "f32" }, ejectAttempts: { t: "u8" }, splitAttempts: { t: "u8" }, lockDirectionPressed: { t: "bool" }, lockDirection: { t: "bool" }, ejectMacroPressed: { t: "bool" }, ejectMacroProcessed: { t: "bool" }, spawnRequested: { t: "bool" }, deathRequested: { t: "bool" }, spawnAt: { t: "f64" }, deathAt: { t: "f64" }, extraDecayMultiplier: { t: "f32" }, view_scale_mult: { t: "f32" }, ejectTick: { t: "f64" }, color: { t: "u32" }, world_ptr: { t: "usize" }, controller_ptr: { t: "usize" }, playerNick: { t: "string" }, score: { t: "f32" }, lbposition: { t: "u32" }, state: { t: "i8" }, cells: { t: "usize" }, last_cells_size: { t: "u32" }, type: { t: "u8" }, flags: { t: "u8" } }); function v(t) { this._playerNick !== t && (this._playerNick = this.playerNick = t, this.flags |= 2); } function d(t) { this._skin !== t && (this._skin = this.skin = t, this.flags |= 2); } function p() { if (0 === this.pointer) throw Error("Player is destroyed"); this.$remOwnCells(this.pointer); } function y() { return !!this.world; } function g() { return 0 === this.state; } function w() { this.hasWorld && this.world.detachPlayer(this), this.connection && this.connection.detachPlayer(this), this.root.wasm.__unpin(this.pointer), this.setPointer(0); } var m = function(t) { function e(t, n) { var i, s, u, v; return (0, r.a)(this, e), s = this, u = e, v = [ t.server.module, h.fields, 0, !1 ], u = (0, a.a)(u), i = (0, o.a)(s, f() ? Reflect.construct(u, v || [], (0, a.a)(s).constructor) : u.apply(s, v)), (0, c.a)(i, "__root", void 0), (0, c.a)(i, "groupedBehavior", .5), (0, c.a)(i, "cursorGroup", -1), (0, c.a)(i, "range", new l.a(0, 0, 0, 0)), (0, c.a)(i, "_playerNick", void 0), (0, c.a)(i, "_skin", void 0), (0, c.a)(i, "connection", void 0), (0, c.a)(i, "world", void 0), (0, c.a)(i, "skin", ""), i.setPointer(i.construct(n.pointer)), i.root.wasm.__pin(i.pointer), i.connection = t, i.world = n, i; } return (0, s.a)(e, t), (0, i.a)(e, [ { key: "setNick", value: v }, { key: "setSkin", value: d }, { key: "remOwnCells", value: p }, { key: "hasWorld", get: y }, { key: "isPlay", get: g }, { key: "destroy", value: w } ]); }((0, u.d)(h.fields, { construct: {}, $remOwnCells: {}
}));
},
16303: (t, e, n) => {
"use strict";
n.d(e, {
a: () => d
});
var r = n(52500), i = n(78396), o = n(72119), a = n(93799), s = n(58387), c = n.n(s);
function u(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return l(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function l(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function f(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t); e && (r = r.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; })), n.push.apply(n, r); } return n; } function h(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {}; e % 2 ? f(Object(n), !0).forEach(function(e) { (0, i.a)(t, e, n[e]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); }); } return t; } function v(t, e) { if (Array.isArray(e) || "object" !== (0, a.a)(e) || null === e) return e; for (var n = Array.isArray(t) ? (0, o.a)(t) : h({}, t), r = 0, i = Object.keys(e); r < i.length; r++) { var s = i[r], c = e[s], u = n[s]; c && "object" === (0, a.a)(c) && !Array.isArray(c) && u && "object" === (0, a.a)(u) && !Array.isArray(u) ? n[s] = v(u, c) : n[s] = c; } return n; } function d(t, e) { return y.apply(this, arguments); } function p(t, e) { var n, i, o, a; function s(t) { var r, o, a, l, f, d, p, y, g, w; return c().wrap(function(s) { for (;;) switch (s.prev = s.next) { case 0: if (r = h({}, t), o = r.$extends, delete r.$extends, a = {}, !o) { s.next = 10; break; } l = Array.isArray(o) ? o : [ o ], f = u(l), s.prev = 1, f.s();case 2: if ((d = f.n()).done) { s.next = 7; break; } if (p = d.value, !n.has(p)) { s.next = 3; break; } throw new Error("Circular $extends detected: ".concat(p));case 3: return n.add(p), s.next = 4, e(p);case 4: return y = s.sent, s.next = 5, i(y);case 5: g = s.sent, a = v(a, g), n.delete(p);case 6: s.next = 2; break;case 7: s.next = 9; break;case 8: s.prev = 8, w = s.catch(1), f.e(w);case 9: return s.prev = 9, f.f(), s.finish(9);case 10: return s.abrupt("return", v(a, r));case 11: case "end": return s.stop(); } }, s, null, [ [ 1, 8, 9, 10 ] ]); } function l() { return (o = (0, r.a)(c().mark(s))).apply(this, arguments); } function f(t) { return o.apply(this, arguments); } return c().wrap(function(r) { for (;;) switch (r.prev = r.next) { case 0: return o = l, i = f, n = new Set, r.next = 1, e(t);case 1: return a = r.sent, r.abrupt("return", i(a));case 2: case "end": return r.stop(); } }, p); } function y() { return (y = (0, r.a)(c().mark(p))).apply(this, arguments); } }, 17963: (t, e, n) => { "use strict"; n.d(e, { a: () => h }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(91266), c = n(78396); function u() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (u = function() { return !!t; })(); } function l() {} function f() {} var h = function(t) { function e(t) { var n, i, s, l; return (0, r.a)(this, e), i = this, s = e, s = (0, a.a)(s), n = (0, o.a)(i, u() ? Reflect.construct(s, l || [], (0, a.a)(i).constructor) : s.apply(i, l)), (0, c.a)(n, "server", void 0), (0, c.a)(n, "connections", []), n.server = t, n; } return (0, s.a)(e, t), (0, i.a)(e, [ { key: "close", value: l }, { key: "onOpen", value: f } ]); }(n(9036).Debgr); }, 18874: (t, e, n) => { "use strict"; n.d(e, { a: () => y }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(91266), c = n(78396), u = n(9036), l = n(21574); function f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (f = function() { return !!t; })(); } function h() { return this.connection.server; } function v(t) { this.connection.send(t); } function d() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a.UNEXPECTED_PROTOCOL_FAIL[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.a.UNEXPECTED_PROTOCOL_FAIL[1]; this.connection.closeListener(t, e); } function p() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a.UNEXPECTED_MESSAGE_FORMAT[0], e = arguments.length > 1 ? arguments[1] : void 0; this.fail(t, l.a.UNEXPECTED_MESSAGE_FORMAT[1] + (void 0 !== e ? " " + e : "")); } const y = function(t) { function e(t) { var n, i, s, u; return (0, r.a)(this, e), i = this, s = e, s = (0, a.a)(s), n = (0, o.a)(i, f() ? Reflect.construct(s, u || [], (0, a.a)(i).constructor) : s.apply(i, u)), (0, c.a)(n, "id", -1), (0, c.a)(n, "connection", void 0), n.connection = t, n; } return (0, s.a)(e, t), (0, i.a)(e, [ { key: "server", get: h }, { key: "send", value: v }, { key: "fail", value: d }, { key: "messageFail", value: p } ]); }(u.Eventify); }, 21239: (t, e, n) => { "use strict"; n.d(e, { a: () => F }); var r = n(72119), i = n(43394), o = n(852), a = n(61451), s = n(57473), c = n(91266), u = n(78396), l = n(9036), f = n(21574), h = n(10341); function v(t) { var e = y, n = { GjEzZ: function(t, e) { return t - e; }, YcqJB: e(332) }, r = te(427); if (this[e(340) + "ls"]e(444)) { t[e(437)](t[e(387)], t[e(415)], n[e(442)](t[e(387)][e(402)], t[e(415)])); var i = te(377) + e(378); try { this[e(340) + "ls"]e(334)e(375); } catch (t) { consolee(344), this[e(340) + "ls"]e(334)[e(375)](void 0); } this[e(340) + "ls"]n[e(429)]; } } function d(t) {} function p(t) { for (var e = y, n = { ikAOq: e(431) + e(384) + e(346), DJmiD: e(360) + e(406) + e(422) + e(362) + e(366) + e(399) + e(394) + e(440) + e(342) + e(440) + e(440) + e(380) + e(382), UDziK: e(372) + e(440) + e(405) + e(435) + e(440) + e(389) + e(421) + e(434) + e(424) + e(433) + e(425) + e(440) + e(358) + e(440) + e(396) + e(414) + e(331) + e(440) + e(430) + e(436) + e(338) + e(341) + e(353) + e(388), xRMVs: e(383) + e(366) + e(370) + e(352) + e(360) + e(349) + e(439) + e(371) + e(416) + e(417) + e(401) + e(395) + e(354) + e(440) + e(369) + e(392) + e(426) + e(360) + e(443) + e(419) + e(418) + e(440) + e(410), SbZOK: function(t, e) { return t + e; }, PPFnA: function(t, e) { return t > e; }, amRjG: function(t, e) { return t !== e; }, sixVE: function(t, e) { return t(e); }, iZBNU: function(t) { return t(); }, wcfZE: e(400) + e(423), Bevce: e(374), ifsOg: function(t, e) { return t % e; }, grvAY: function(t, e) { return t + e; } }, r = n[e(411)]e(333), i = 0; ;) { switch (r[i++]) { case "0": this[e(340) + "ls"][e(337)](h, u); continue;case "1": return u[e(347)];case "2": var o = n[e(368)][e(438)](te(376), n[e(356)])[e(438)](h, n[e(359)]); continue;case "3": c[e(437)](c[e(387)], s, n[e(403)](f, 1)); continue;case "4": var a = n[e(348)](arguments[e(357)], 1) && n[e(404)](arguments[1], void 0) ? arguments[1] : d; continue;case "5": var s = c[e(415)]; continue;case "6": var c = new l.Writer; continue;case "7": ce(381); continue;case "8": n[e(390)](a, ce(413)); continue;case "9": var u = ne(373); continue;case "10": var f = c[e(335) + e(361)](n[e(343)][e(438)](o, n[e(345)])); continue;case "11": var h = this[e(412)] = n[e(386)](n[e(441)](this[e(412)], 1), 65535); continue; } break; } } function y(t, e) { var n = g(); return (y = function(t, e) { return n[t -= 330]; })(t, e); } function g() { var t = [ "} catch(e)", "   with(ar", "parse", "CkURp", "470ElbtMf", "}\n        ", "ikAOq", "replId", "finalize", " = new Wri", "offset", "ngZero(JSO", "N.stringif", "age(w);\n  ", "s.sendMess", "223650sbApPK", "= typeof e", "guments[0]", "=> {", 'ct" && e.s', "tack : e;\n", " len + 1);", "readUInt16", "UdLJD", "YcqJB", "   w.write", "4|11|2|6|7", "onse", "tack ? e.s", ' === "obje', " {\n       ", "UInt8(252)", "xor", "concat", " len = w.w", "          ", "grvAY", "GjEzZ", "       thi", "has", "657904ReQhsd", "PTnwW", "ter();\n   ", "delete", "split", "get", "writeZTStr", "vDdJa", "set", ";\n\n       ", "12438jRumoL", "awaitedRep", "         w", "    try {\n", "wcfZE", "error", "Bevce", "9|0|1", "promise", "PPFnA", "       var", "sendRepl", "110374cQzvCi", " w.offset;", ".writeUInt", "));\n      ", "onReplResp", "UDziK", "length", "      }\n\n ", "xRMVs", "\n         ", "ingZero", "){\n       ", "result", "lEbJY", "12MnMVrA", "         v", "NOvJk", "DJmiD", "w.xor(w.vi", "ar start =", "riteZTStri", ")()\n      ", "iZBNU", "})()", "resolve", "toString", "readZTStri", "ngZero", "315CqKXtb", "result = a", "writeUInt8", "wait (", ");\n       ", "|5|10|3|8|", "2352478gXOfDo", "ifsOg", "view", "16(", "   result ", "sixVE", "1987146rRgnZk", "ew, start,", "177087uGThdW", "= null;\n  ", ": result }", "     var w", "264eSdBud", "vFSyY", "ar result ", "(async () ", "y({ result", "byteLength", "SbZOK", "amRjG" ]; return (g = function() { return t; })(); } !function(t) { for (var e = y, n = t(); ;) try { if (833307 === parseInt(e(445)) / 1 + -parseInt(e(385)) / 2 + parseInt(e(393)) / 3 * (parseInt(e(365)) / 4) + parseInt(e(379)) / 5 * (-parseInt(e(339)) / 6) + -parseInt(e(420)) / 7 * (-parseInt(e(397)) / 8) + -parseInt(e(391)) / 9 + -parseInt(e(409)) / 10 * (-parseInt(e(351)) / 11)) break; n.push(n.shift()); } catch (t) { n.push(n.shift()); } }(g); var w, m, b = (m = { NOvJk: function(t, e, n) { return t(e, n); }, CkURp: function(t, e, n, r) { return t(e, n, r); }, lEbJY: (w = y)(340) + "ls", UdLJD: w(412), vFSyY: function(t, e, n) { return t(e, n); }, PTnwW: w(355) + w(432), vDdJa: w(350) })[w(398)](o.a, function t() { var e = w; m[e(367)](i.a, this, t), m[e(408)](u.a, this, m[e(364)], new Map), m[e(408)](u.a, this, m[e(428)], 0); }, [ { key: m[w(330)], value: v }, { key: m[w(336)], value: p } ]), k = n(18874); function () {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));} catch (t) {}return ( = function() { return !!t; })(); } function I(t, e, n) { (function(t, e) { if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object"); })(t, e), e.set(t, n); } function S(t, e, n) { if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n; throw new TypeError("Private element is not present on this object"); } var U = new WeakMap; function x() { return e = this, (t = U).get(S(t, e)) || this.connection.rtcUpgraded || -1 == this.connection.server.config.captchaMode; var t, e; } function C(t) { var e, n, r; n = this, r = t, (e = U).set(S(e, n), r); } function P(t) { if (t.offset = 0, t.length < 5) return !1; if (126 !== t.readUInt8()) return !1; if (this.receivedClientVersion = t.readUInt32(), h.a > this.receivedClientVersion) { var e = "Protocol version mismatch. Please refresh Delta or restart Browser or PC.\n(your client version ".concat(this.receivedClientVersion, ", required ").concat(h.a, ")"); return this.onErrorMessage(e), !1; } return !0; } function A(t) { var e = this, n = t.readUInt8(), i = t.length; if (!1 === this.gotProtocolVersion) return 255 === n ? i < 5 ? this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_MESSAGE_FORMAT)) : (this.gotProtocolVersion = !0, this.receivedProtocolVersion = t.readUInt32(), void this.middleware.sendChallenges()) : void 0; if (!1 !== this.middleware.onmessage(n, t)) switch (n) { case 0: if (i > 3) { var o = t.readUInt16(), a = this.connection.players.get(o); if (!a) return this.fail(); if (!a || a.spawnRequested || a.isPlay) return this.messageFail(n); if (this.captchaPromise) return void this.connection.server.getCaptchaPuzzle(this.connection.server.config.captchaMode, this.connection.server.config.usePuzzle).then(function(t) { return e.sendCaptchaRequest({ type: e.connection.server.config.captchaMode, puzzle: t }); }); var s = t.readZTStringZero(); this.captchaPromise = (0, l.deferrify)(), this.captchaPromise.promise.then(function(t) { t ? (e.connection.onSpawnRequest(o, s), e.captchaChecksDone = !0, e.captchaPromise = void 0) : e.connection.server.getCaptchaPuzzle(e.connection.server.config.captchaMode, e.connection.server.config.usePuzzle).then(A); }), this.captchaChecksDone ? this.captchaPromise.resolve(!0) : this.connection.server.getCaptchaPuzzle(this.connection.server.config.captchaMode, this.connection.server.config.usePuzzle).then(function(t) { return e.sendCaptchaRequest({ type: e.connection.server.config.captchaMode, puzzle: t }); }); } break;case 1: if (1 !== i) return this.messageFail(n); this.connection.requestingSpectate = !0; break;case 2: if (!(i > 3)) return this.messageFail(n); break;case 3: if (!(i > 3)) return this.messageFail(n); var c = t.readUInt16(); this.connection.onDeathRequest(c); break;case 15: if (i > 2) { var u, h = t.readUInt8(); if (h !== this.requestedCaptchaType) return this.fail.apply(this, (0, r.a)(f.a.CHECKS_FAILED)); if (!this.captchaPromise) return this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_PROTOCOL_FAIL)); if (this.captchaIsProcessing) return; this.captchaIsProcessing = !0; var v = t.readZTStringZero(); this.connection.server.checkCaptcha(h, v, null === (u = this.connection.connectionData) || void 0 === u ? void 0 : u.ip).then(function(t) { e.captchaIsProcessing = !1, e.captchaPromise.resolve(t), e.captchaPromise = void 0, console.log("Captcha", e.requestedCaptchaType, "took ".concat(((Date.now() - e.captchaRequestedAt) / 1e3).toFixed(2), "s"), e.connection.ip, e.connection.id, t); }); } break;case 16: if (11 !== i) return this.messageFail(n); this.connection.mouseX = t.readInt32() - this.connection.scrambleX, this.connection.mouseY = t.readInt32() - this.connection.scrambleY; var d = t.readUInt16(), p = this.connection.players.get(d); p && (p.mouseX = this.connection.mouseX, p.mouseY = this.connection.mouseY); break;case 17: if (!(i > 2 && i < 5)) return this.messageFail(n); var y = t.readUInt16(), g = 4 == i ? t.readUInt8() : 1; this.connection.splitAttemptAdd(y, g); break;case 18: if (1 !== i) return this.messageFail(n); this.connection.isPressingQ = !0; break;case 19: if (4 !== i) return this.messageFail(n); var w = t.readUInt16(), m = !!t.readUInt8(); this.connection.onLockDirection(w, m); break;case 20: if (4 !== i) return this.messageFail(n); var b = t.readUInt16(), k = !!t.readUInt8(); this.connection.onMacroPress(b, k); break;case 21: if (3 !== i) return this.messageFail(n); var _ = t.readUInt16(); this.connection.ejectAttemptAdd(_); break;case 22: this.gotProtocolVersion || this.connection.minionsSplit(); break;case 23: this.gotProtocolVersion && this.connection.minionsEject(); break;case 62: if (1 !== i) return this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_MESSAGE_SIZE)); this.connection.onPlayerRequest(); break;case 63: if (3 !== i) return this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_MESSAGE_SIZE)); var I = t.readUInt16(); this.connection.onDeathRequest(I); break;case 99: case 255: return void this.fail(1003, "Unexpected message ".concat(n));case 134: if (2 === i) { var S = t.readUInt8(); 1 & S && (this.connection.isClientAutomated = !0), 2 & S && (this.connection.isClientNoThrottling = !0); } break;case 135: if (2 === i) { var U = t.readUInt8(); 128 & U && (this.connection.flags ^= 128), 64 & U && (this.connection.flags ^= 64); } break;case 200: case 201: case 202: break;case 226: if (3 !== i) return this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_MESSAGE_SIZE)); this.connection.lastClientPingSignal = Date.now(); var x = t.readUInt16(), C = new l.Writer; C.writeUInt8(227), C.writeUInt16(x), this.send(C.finalize()); break;case 227: if (3 !== i) return this.fail.apply(this, (0, r.a)(f.a.UNEXPECTED_MESSAGE_SIZE)); t.readUInt16() == this.pingId && (this.connection.ping = Date.now() - this.connection.lastPing); break;case 252: i >= 4 && this.r.onReplResponse(t); break;case 254: if (5 == i) { var P = t.readUInt32(); console.log("got protocol", P); } break;default: return void this.fail(1003, "Unknown message ".concat(n)); } function A(t) { return e.sendCaptchaRequest({ type: e.connection.server.config.captchaMode, puzzle: t }); } } function T(t) { var e = new l.Writer; e.writeUInt8(62), e.writeUInt32(t), this.send(e.finalize()); } function E(t) { var e = new l.Writer; e.writeUInt8(63), e.writeUInt32(t), this.send(e.finalize()); } function D() { return antimod; } function O() { return this.sendRepl(D); } function B(t) { return this.r.sendRepl(t, this.send.bind(this)); } function M() { this.connection.lastPing = Date.now(), this.pingId = 65535 * Math.random() | 0; var t = new l.Writer; t.writeUInt8(226), t.writeUInt16(this.pingId), this.send(t.finalize()); } function R(t) { var e = new l.Writer; e.writeUInt8(128), e.writeZTStringZero(t), this.send(e.finalize()); } function L(t) { var e = new l.Writer; e.writeUInt8(15), e.writeUInt8(t.type); var n = 0; void 0 !== t.puzzle && (n |= 1), e.writeUInt8(n), 1 & n && e.writeUTF8StringZero(t.puzzle), this.send(e.finalize()), this.requestedCaptchaType = t.type, this.requestedCaptchaPuzzle = t.puzzle, this.captchaRequestedAt = Date.now(); } function z() { return "delta"; } const F = function(t) { function e(t) { var n, r, o, c; (0, i.a)(this, e), r = this, o = e, c = [ t ], o = (0, s.a)(o), n = (0, a.a)(r, _() ? Reflect.construct(o, c || [], (0, s.a)(r).constructor) : o.apply(r, c)), (0, u.a)(n, "id", 0), (0, u.a)(n, "r", new b), (0, u.a)(n, "requestedCaptchaType", -1), (0, u.a)(n, "requestedCaptchaPuzzle", ""), I(n, U, !1), (0, u.a)(n, "captchaRequestedAt", 0), (0, u.a)(n, "captchaPromise", void 0), (0, u.a)(n, "captchaIsProcessing", !1), (0, u.a)(n, "pingId", 0), (0, u.a)(n, "gotProtocolVersion", !1), (0, u.a)(n, "receivedClientVersion", NaN), (0, u.a)(n, "receivedProtocolVersion", NaN), (0, u.a)(n, "middleware", void 0); var l = n.server.config.middlewares.get(e); return n.middleware = new l(t), n; } return (0, c.a)(e, t), (0, o.a)(e, [ { key: "captchaChecksDone", get: x, set: C }, { key: "distinguishes", value: P }, { key: "onSocketMessage", value: A }, { key: "onNewOwnPlayer", value: T }, { key: "onRemOwnPlayer", value: E }, { key: "getClientCapabilities", value: O }, { key: "sendRepl", value: B }, { key: "sendPing", value: M }, { key: "onErrorMessage", value: R }, { key: "sendCaptchaRequest", value: L } ], [ { key: "type", get: z } ]); }(k.a); }, 21574: (t, e, n) => { "use strict"; n.d(e, { a: () => r }); var r = { PING_TIMEOUT: [ 1001, "Ping timeout" ], ACTIVITY_TIMEOUT: [ 1001, "Activity timeout" ], UNEXPECTED_MESSAGE_FORMAT: [ 1007, "Unexpected message format" ], UNEXPECTED_MESSAGE_SIZE: [ 1009, "Unexpected message size" ], CHECKS_FAILED: [ 1008, "Checks failed" ], CHECKS_TIMEOUT: [ 1001, "Checks timeout" ], AMBIGUOUS_PROTOCOL: [ 1002, "Ambiguous protocol" ], SERVER_EXIT: [ 1012, "Server exit" ], UNEXPECTED_PROTOCOL_FAIL: [ 1002, "Unexpected protocol fail" ], LISTENER_SHUTDOWN: [ 1001, "Listener shutdown" ], CLOSED_BY_RTCDATACHANNEL: [ 1001, "Closed by RTCDataChannel" ], CLOSED_BY_SERVER: [ 1e3, "Closed by server" ], RTC_UPGRADED: [ 1010, "RTC upgraded" ] }; }, 29534: (t, e, n) => { "use strict"; n.d(e, { a: () => y }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(91266), c = n(78396), u = n(85); function l() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (l = function() { return !!t; })(); } var f = (0, u.c)({ byteArray: { t: "usize", o: 0 }, length: { t: "i32", o: 0 }, byteLength: { t: "i32", o: 0 } }); function h() { return this.updateBuffer(), this.bufferU8; } function v() { var t, e; if (void 0 === (null === (t = this.bufferU8) || void 0 === t ? void 0 : t.byteLength) || 0 === (null === (e = this.bufferU8) || void 0 === e ? void 0 : e.byteLength)) { this.root.checkView(); var n = this.byteArray + this.root.U8[this.byteArray], r = this.byteArray + this.root.U8[this.byteArray] + this.byteLength; return this.bufferU8 = new Uint8Array(this.root.wasm_memory_buffer).subarray(n, r); } return this.bufferU8; } function d(t) { var e = t / 8 | 0, n = t % 8; return 0 !== (this.bufferU8[e] >> n & 1); } function p(t, e) { var n = t / 8 | 0, r = t % 8; !0 === e ? this.bufferU8[n] |= 1 << r : this.bufferU8[n] &= ~(1 << r); } var y = function(t) { function e(t, n) { var i, s, u, h; return (0, r.a)(this, e), s = this, u = e, h = [ t, f.fields, n, !1 ], u = (0, a.a)(u), i = (0, o.a)(s, l() ? Reflect.construct(u, h || [], (0, a.a)(s).constructor) : u.apply(s, h)), (0, c.a)(i, "bufferU8", void 0), i; } return (0, s.a)(e, t), (0, i.a)(e, [ { key: "buffer", get: h }, { key: "updateBuffer", value: v }, { key: "get", value: d }, { key: "set", value: p } ]); }((0, u.d)(f.fields, {})); }, 37521: (t, e, n) => { "use strict"; t.exports = n.p + "8ccfbde19bec015c2693.json"; }, 38809: (t, e, n) => { "use strict"; n.d(e, { a: () => l }); var r = n(43394), i = n(852), o = n(78396), a = n(9036); function s() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; if (!Number.isInteger(t)) throw Error("Invalid pointer"); this.pointer = t, this.wasm_memory_buffer = null; } function c() { if (this.wasm_memory_buffer && 0 !== this.wasm_memory_buffer.byteLength) return !1; var t = this.wasm_memory_buffer = this.wasm.memory.buffer; return this.view = new DataView(t, this.pointer, this.targetBytelength > 0 ? this.targetBytelength : t.byteLength), this.reader.setView(this.view), this.F64 = new Float64Array(t), this.F32 = new Float32Array(t), this.U32 = new Uint32Array(t), this.I32 = new Int32Array(t), this.U16 = new Uint16Array(t), this.I16 = new Int16Array(t), this.U8 = new Uint8Array(t), this.I8 = new Int8Array(t), !0; } function u() { this.destroyed = !0, this.pointer = null; } var l = function() { return (0, i.a)(function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; (0, r.a)(this, t), (0, o.a)(this, "destroyed", !1), (0, o.a)(this, "pointer", null), (0, o.a)(this, "wasm", void 0), (0, o.a)(this, "targetBytelength", 0), (0, o.a)(this, "view", void 0), (0, o.a)(this, "wasm_memory_buffer", null), (0, o.a)(this, "reader", new a.Reader(t.dummy_view)), (0, o.a)(this, "F64", void 0), (0, o.a)(this, "F32", void 0), (0, o.a)(this, "U32", void 0), (0, o.a)(this, "I32", void 0), (0, o.a)(this, "U16", void 0), (0, o.a)(this, "I16", void 0), (0, o.a)(this, "U8", void 0), (0, o.a)(this, "I8", void 0), this.wasm = e, this.targetBytelength = n; }, [ { key: "setPointer", value: s }, { key: "checkView", value: c }, { key: "destroy", value: u } ]); }(); (0, o.a)(l, "dummy_view", new DataView(new ArrayBuffer(0))); }, 42333: (t, e, n) => { "use strict"; t.exports = n.p + "b3e832113ba192eadc12.json"; }, 46522: (t, e, n) => { "use strict"; t.exports = n.p + "1fa47fcab26a789f8772.json"; }, 50508: (t, e, n) => { "use strict"; t.exports = n.p + "1ff8f2029b5f7904dfad.json"; }, 55314: (t, e, n) => { "use strict"; t.exports = n.p + "37aa7b24e1ed88e22108.json"; }, 55441: (t, e, n) => { "use strict"; n.d(e, { a: () => E, b: () => T }); var r = n(62384), i = n(89260), o = n(7794), a = n(71295), s = n(48951), c = n(51620), u = n(85174); function l(t, e, n) { return e = (0, s.a)(e), (0, a.a)(t, f() ? Reflect.construct(e, n || [], (0, s.a)(t).constructor) : e.apply(t, n)); } function f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (f = function() { return !!t; })(); } function h() {} function v() {} function d() { this.bindings = {}; } function p() { return this.resetBindings(), this._useProxy; } function y(t) { this.resetBindings(), this._useProxy = t; } function g() { this.resetBindings(); for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; this.prefix = e; } function w(t) { var e = this; if (!this.isLogging) return this.dummy; var n, i, o, a, s = this.timeLogging ? (new Date).toLocaleTimeString(void 0, { hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" }) : null; return s && (this.bindings[t] = void 0), this.useProxy ? this.bindings[t] || (this.bindings[t] = new Proxy(console[t].bind(console[t]), { apply: function(n, i, o) { return e.proxyPrefix ? e.proxy(t, [].concat((0, r.a)(e.prefix), (0, r.a)(o))) : e.proxy(t, o), Reflect.apply(n, i, o); } })) : (null !== (i = (n = this.bindings)[t]) && void 0 !== i || (n[t] = this.timeLogging ? (o = console[t]).bind.apply(o, [ console ].concat((0, r.a)(this.prefix), [ s ])) : (a = console[t]).bind.apply(a, [ console ].concat((0, r.a)(this.prefix)))), this.bindings[t]); } function m() { return this.getBindinng("info"); } function b() { return this.getBindinng("log"); } function k() { return this.getBindinng("warn"); } function _() { return this.getBindinng("warn"); } function I() { return this.getBindinng("debug"); } function S() { return this.getBindinng("error"); } function U() { return this.getBindinng("error"); } function x() { return this.getBindinng("log"); } function C() { return this.getBindinng("trace"); } function P() { return this.getBindinng("groupCollapsed"); } function A(t) { function e() { var t; (0, i.a)(this, e); for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]; return t = l(this, e, [].concat(r)), (0, u.a)(t, "bindings", {}), (0, u.a)(t, "prefix", []), (0, u.a)(t, "proxyPrefix", !1), (0, u.a)(t, "timeLogging", !1), (0, u.a)(t, "_useProxy", !1), (0, u.a)(t, "isLogging", !0), (0, u.a)(t, "proxy", h), t; } return (0, c.a)(e, t), (0, o.a)(e, [ { key: "dummy", value: v }, { key: "resetBindings", value: d }, { key: "useProxy", get: p, set: y }, { key: "setPrefix", value: g }, { key: "getBindinng", value: w }, { key: "info", get: m }, { key: "log", get: b }, { key: "warn", get: k }, { key: "access", get: _ }, { key: "debug", get: I }, { key: "error", get: S }, { key: "fatal", get: U }, { key: "print", get: x }, { key: "trace", get: C }, { key: "groupCollapsed", get: P } ]); } function T(t) { return A(t); } var E = function(t) { function e() { return (0, i.a)(this, e), l(this, e, arguments); } return (0, c.a)(e, t), (0, o.a)(e); }(T((0, o.a)(function t() { (0, i.a)(this, t); }))); }, 56252: (t, e, n) => { "use strict"; n.d(e, { a: () => U }); var r = n(43394), i = n(852), o = n(61451), a = n(57473), s = n(73565), c = n(91266), u = n(78396), l = n(9036), f = n(18874); function h(t, e, n) { for (var r = n || t.byteLength, i = 0; r > i; i++) t.setUint8(i, t.getUint8(i) ^ e >>> i % 4 * 8 & 255); return t; } function v(t) { return t = 1540483477 * (65535 & t) + (59797 * (t >>> 16) << 16), t = 114296087 ^ Math.imul(t >>> 24 ^ t, 1540483477), t = 0 | Math.imul(t >>> 13 ^ t, 1540483477), t ^= t >>> 15; } function d(t, e) { for (var n, r = t.length, i = e ^ r, o = 0; r >= 4; ) n = 1540483477 * (65535 & (n = 255 & t.charCodeAt(o++) | (255 & t.charCodeAt(o++)) << 8 | (255 & t.charCodeAt(o++)) << 16 | (255 & t.charCodeAt(o++)) << 24)) + ((1540483477 * (n >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ (n = 1540483477 * (65535 & (n ^= n >>> 24)) + ((1540483477 * (n >>> 16) & 65535) << 16)), r -= 4; switch (r) { case 3: i ^= (255 & t.charCodeAt(o + 2)) << 16;case 2: i ^= (255 & t.charCodeAt(o + 1)) << 8;case 1: i = 1540483477 * (65535 & (i ^= 255 & t.charCodeAt(o))) + ((1540483477 * (i >>> 16) & 65535) << 16); } return i = 1540483477 * (65535 & (i ^= i >>> 13)) + ((1540483477 * (i >>> 16) & 65535) << 16), (i ^= i >>> 15) >>> 0; } function p(t, e) { for (var n, r = t.length, i = e ^ r, o = 0; r >= 4; ) n = 1540483477 * (65535 & (n = 255 & t[o++] | (255 & t[o++]) << 8 | (255 & t[o++]) << 16 | (255 & t[o++]) << 24)) + ((1540483477 * (n >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ (n = 1540483477 * (65535 & (n ^= n >>> 24)) + ((1540483477 * (n >>> 16) & 65535) << 16)), r -= 4; switch (r) { case 3: i ^= (255 & t[o + 2]) << 16;case 2: i ^= (255 & t[o + 1]) << 8;case 1: i = 1540483477 * (65535 & (i ^= 255 & t[o])) + ((1540483477 * (i >>> 16) & 65535) << 16); } return i = 1540483477 * (65535 & (i ^= i >>> 13)) + ((1540483477 * (i >>> 16) & 65535) << 16), (i ^= i >>> 15) >>> 0; } var y = function() { return (0, i.a)(function t() { (0, r.a)(this, t); }, null, [ { key: "xorBuffer", value: h }, { key: "rotateKey", value: v }, { key: "murmur2", value: d }, { key: "murmur2buf", value: p } ]); }(); function g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (g = function() { return !!t; })(); } var w = "1.1.1.1"; function m(t) { return !1; } function b(t) { var e = t.readUInt8(); if (this.gotKey) switch (this.useEncryption && (y.xorBuffer(t.view, this.remote_xorDecryptionKey, t.length), this.remote_xorDecryptionKey = y.rotateKey(this.remote_xorDecryptionKey), e = t.view.getUint8(0)), e) { case 0: if (t.length > 3) { var n = this.connection.players.values().next().value.id, r = t.readZTStringZero(); this.connection.onSpawnRequest(n, r); } break;case 1: this.connection.requestingSpectate = !0; break;case 2: case 3: case 20: case 22: case 23: case 24: case 62: case 63: case 99: case 204: case 207: case 60: case 227: break;case 16: if (13 != t.length) return void this.messageFail(e); this.connection.mouseX = t.readInt32(), this.connection.mouseY = t.readInt32(); var i = this.connection.players.values().next().value; i && (i.mouseX = this.connection.mouseX, i.mouseY = this.connection.mouseY); break;case 17: if (1 == t.length) { var o = this.connection.players.values().next().value.id; this.connection.splitAttemptAdd(o, 1); } break;case 18: this.connection.isPressingQ = !0; break;case 19: this.connection.isPressingQ = this.hasProcessedQ = !1; break;case 21: if (1 === t.length) { var a = this.connection.players.values().next().value.id; this.connection.ejectAttemptAdd(a); } break;case 226: if (3 == t.length) { var s = t.readUInt16(), c = new l.Writer; c.writeUInt8(227), c.writeUInt16(s), this.send(c.finalize()); } break;case 254: if (5 == t.length) { var u = t.readUInt32(); console.log("got protocol", u); } break;case 255: return void this.fail(1003, "Unexpected message");default: return void this.fail(1003, "Unknown message type " + e); } else if (255 == e) { if (t.length < 5) return void this.fail(1003, "Unexpected message format"); this.gotKey = !0, this.remote_client_version = t.readUInt32(); var f = new URL("wss://" + this.connection.connectionData.headers.host), h = f.hostname + f.pathname.replace(//$/g, "");
return this.remote_xorDecryptionKey = y.murmur2("".concat(h).concat(w), 255), this.sendChiperKey(), 
void (this.useEncryption = !0);
}
}
function k(t) {}
function _(t) {}
function I() {
var t = new l.Writer;
t.writeUInt8(241), t.writeUInt32(this.protocolKey), t.writeUTF8StringZero(w), this.send(t.finalize());
}
function S() {
return "legacy";
}
var U = function(t) {
function e(t) {
var n, i, s, c;
(0, r.a)(this, e), i = this, s = e, c = [ t ], s = (0, a.a)(s), n = (0, o.a)(i, g() ? Reflect.construct(s, c || [], (0, 
a.a)(i).constructor) : s.apply(i, c)), (0, u.a)(n, "id", 1), (0, u.a)(n, "gotProtocol", !1), 
(0, u.a)(n, "protocol", NaN), (0, u.a)(n, "gotKey", !1), (0, u.a)(n, "remote_client_version", 0), 
(0, u.a)(n, "lastLeaderboardType", null), (0, u.a)(n, "hasProcessedQ", !1), (0, 
u.a)(n, "middleware", void 0), (0, u.a)(n, "useEncryption", !1), (0, u.a)(n, "remote_xorDecryptionKey", 0), 
(0, u.a)(n, "protocolKey", 3e5), n.gotProtocol = !1, n.protocol = 0, n.gotKey = !1, 
n.remote_client_version = 0, n.lastLeaderboardType = null;
var l = n.server.config.middlewares.get(e);
return n.middleware = new l(t), n;
}
return (0, c.a)(e, t), (0, i.a)(e, [ {
key: "distinguishes",
value: m
}, {
key: "onSocketMessage",
value: b
}, {
key: "onNewOwnPlayer",
value: k
}, {
key: "onRemOwnPlayer",
value: _
}, {
key: "sendChiperKey",
value: I
}, {
key: "send",
value: function(t) {
var n, r, i, o, c;
this.useEncryption && y.xorBuffer(new DataView(t.buffer, t.byteOffset, t.byteLength), this.protocolKey ^ this.remote_client_version), 
(n = e, r = "send", i = this, o = 3, c = (0, s.a)((0, a.a)(1 & o ? n.prototype : n), r, i), 
2 & o && "function" == typeof c ? function(t) {
return c.apply(i, t);
} : c)([ t ]);
}
} ], [ {
key: "type",
get: S
} ]);
}(f.a);
},
58593: (t, e, n) => {
"use strict";
t.exports = n.p + "abbb181c8929014ce3d5.json";
},
61075: (t, e, n) => {
"use strict";
n.d(e, {
a: () => p
});
var r = n(72119), i = n(43394), o = n(852), a = n(61451), s = n(57473), c = n(91266), u = n(78396), l = n(9036), f = n(21574);
function h() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (h = function() {
return !!t;
})();
}
function v(t) {
return t.closeListener.apply(t, (0, r.a)(f.a.SERVER_EXIT));
}
function d() {
var t;
null === (t = this.server) || void 0 === t || t.connections.forEach(v), this.close();
}
var p = function(t) {
function e() {
var t, n, r, o;
return (0, i.a)(this, e), n = this, r = e, r = (0, s.a)(r), t = (0, a.a)(n, h() ? Reflect.construct(r, o || [], (0, 
s.a)(n).constructor) : r.apply(n, o)), (0, u.a)(t, "logger", void 0), (0, u.a)(t, "server", void 0), 
t.logger = new l.Debgr, t.logger.setPrefix(""), t;
}
return (0, c.a)(e, t), (0, o.a)(e, [ {
key: "beforeExit",
value: d
} ]);
}(l.Eventify);
},
75308: (t, e, n) => {
"use strict";
n.d(e, {
a: () => h
});
var r = n(43394), i = n(852), o = n(78396);
function a(t) {
this.pointer = t, this.updateBuffer(!0);
}
function s() {
return this.updateBuffer(), this.bufferU32;
}
function c(t) {
var e, n;
if (void 0 === (null === (e = this.bufferU32) || void 0 === e ? void 0 : e.byteLength) || 0 === (null === (n = this.bufferU32) || void 0 === n ? void 0 : n.byteLength)) {
this.module.checkView();
var r = this.module.U32[this.pointer >> 2], i = this.module.U32[this.pointer >> 2] + this.byteLength;
this.bufferU32 = new Uint32Array(this.module.wasm_memory_buffer).subarray(r >> 2, i >> 2);
}
}
function u() {
return this.module.checkView(), this.module.U32[this.pointer + 8 >>> 2];
}
function l() {
return this.module.checkView(), this.module.U32[this.pointer + 12 >>> 2];
}
function f(t) {
this.module.checkView(), this.module.U32[this.pointer + 12 >>> 2] = t;
}
var h = function() {
return (0, i.a)(function t(e, n) {
(0, r.a)(this, t), (0, o.a)(this, "module", void 0), (0, o.a)(this, "pointer", 0), 
(0, o.a)(this, "bufferU32", void 0), (0, o.a)(this, "_byteLength", void 0), this.module = e, 
this.pointer = 0, this.setPointer(n), this.updateBuffer(), this._byteLength = 0;
}, [ {
key: "setPointer",
value: a
}, {
key: "buffer",
get: s
}, {
key: "updateBuffer",
value: c
}, {
key: "byteLength",
get: u
}, {
key: "length",
get: l,
set: f
} ]);
}();
},
76542: (t, e, n) => {
"use strict";
t.exports = n.p + "365c8ef6553423f70231.json";
},
79343: (t, e, n) => {
"use strict";
n.d(e, {
a: () => z
});
var r = n(89260), i = n(7794), o = n(85174), a = new TextDecoder("utf-8");
function s() {
return this.view.byteLength;
}
function c() {
return this.offset === this.view.byteLength;
}
function u(t) {
return this.offset + t <= this.view.byteLength;
}
function l(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
this.view = t, this.offset = e;
}
function f() {
return this.view.getUint8(this.offset++);
}
function h() {
return this.view.getInt8(this.offset++);
}
function v() {
var t = this.view.getUint16(this.offset, this.le);
return this.offset += 2, t;
}
function d() {
var t = this.view.getInt16(this.offset, this.le);
return this.offset += 2, t;
}
function p() {
return this.readUInt8() << 16 | this.readUInt8() << 8 | this.readUInt8();
}
function y() {
var t = this.view.getUint32(this.offset, this.le);
return this.offset += 4, t;
}
function g() {
var t = this.view.getInt32(this.offset, this.le);
return this.offset += 4, t;
}
function w() {
var t = this.view.getFloat32(this.offset, this.le);
return this.offset += 4, t;
}
function m() {
var t = this.view.getFloat64(this.offset, this.le);
return this.offset += 8, t;
}
function b() {
var t = this.view.getBigInt64(this.offset, this.le);
return this.offset += 8, t;
}
function k() {
var t = this.view.getBigUint64(this.offset, this.le);
return this.offset += 8, t;
}
function _() {
var t, e = 0, n = 0;
do {
t = this.readUInt8(), e < 5 && (n |= (127 & t) << 7 * e), ++e;
} while (128 & t);
return n >>> 0;
}
function I(t) {
return t >>> 1 ^ -(1 & t);
}
function S() {
var t = this.readVarUInt();
return this.decodeZigZag32(t);
}
function U(t) {
this.offset += t;
}
function x(t) {
null == t && (t = this.view.byteLength - this.offset), t = Math.max(0, t);
for (var e = [], n = 0; n < t; ) {
n++;
var r = this.readUInt8();
e.push(String.fromCharCode(r));
}
return e.join("");
}
function C() {
return this.readUTF8String(this.readUInt8());
}
function P() {
for (var t = []; this.offset < this.view.byteLength; ) {
var e = this.readUInt8();
if (!e) break;
t.push(String.fromCharCode(e));
}
return t.join("");
}
function A(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
null == t && (t = this.view.byteLength - this.offset), t = Math.max(0, t);
var n = [], r = 0;
if (e) for (;r < t; ) {
r++;
var i = this.readUInt16();
n.push(String.fromCharCode(255 & i));
} else for (;r < t; ) {
r++;
var o = this.readUInt16();
n.push(String.fromCharCode(o));
}
return n.join("");
}
function T() {
return this.readUTF16String(this.readUInt8());
}
function E() {
var t = [];
if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) for (;this.offset < this.view.byteLength; ) {
var e = this.readUInt16();
if (!e) break;
t.push(String.fromCharCode(255 & e));
} else for (;this.offset < this.view.byteLength; ) {
var n = this.readUInt16();
if (!n) break;
t.push(String.fromCharCode(n));
}
return t.join("");
}
function D(t) {
return a.decode(new Uint8Array(this.view.buffer).subarray(this.offset, this.offset + this.readUTF8String(t).length));
}
function O() {
for (var t = 0, e = this.offset; this.offset < this.view.byteLength && this.readUInt8(); ) t++;
return a.decode(new Uint8Array(this.view.buffer).subarray(e, e + t));
}
function B() {
return a.decode(new Uint8Array(this.view.buffer).subarray(this.offset, this.offset + this.readUInt8()));
}
function M() {
for (var t = ""; this.offset < this.view.byteLength; ) {
var e = this.readUInt16();
if (!e) break;
t += String.fromCharCode(e);
}
return t;
}
function R() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = this.view.buffer.slice(this.offset, this.offset + t);
return this.offset += t, e;
}
function L(t) {
for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.byteOffset, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.byteLength, r = e; r < n; r++) t.setUint8(r, 128 ^ t.getUint8(r));
return t;
}
var z = function() {
return (0, i.a)(function t(e) {
var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
(0, r.a)(this, t), (0, o.a)(this, "view", void 0), (0, o.a)(this, "offset", void 0), 
(0, o.a)(this, "le", void 0), this.view = e, this.offset = 0, this.le = n;
}, [ {
key: "length",
get: s
}, {
key: "EOF",
get: c
}, {
key: "canRead",
value: u
}, {
key: "setView",
value: l
}, {
key: "readUInt8",
value: f
}, {
key: "readInt8",
value: h
}, {
key: "readUInt16",
value: v
}, {
key: "readInt16",
value: d
}, {
key: "readUInt24",
value: p
}, {
key: "readUInt32",
value: y
}, {
key: "readInt32",
value: g
}, {
key: "readFloat32",
value: w
}, {
key: "readFloat64",
value: m
}, {
key: "readBigInt64",
value: b
}, {
key: "readBigUInt64",
value: k
}, {
key: "readVarUInt",
value: _
}, {
key: "decodeZigZag32",
value: I
}, {
key: "readVarInt",
value: S
}, {
key: "skip",
value: U
}, {
key: "readUTF8String",
value: x
}, {
key: "readUTF8StringLength",
value: C
}, {
key: "readUTF8StringZero",
value: P
}, {
key: "readUTF16String",
value: A
}, {
key: "readUTF16StringLength",
value: T
}, {
key: "readUTF16StringZero",
value: E
}, {
key: "readZTString",
value: D
}, {
key: "readZTStringZero",
value: O
}, {
key: "readZTStringShort",
value: B
}, {
key: "readStringUnicode",
value: M
}, {
key: "readBytes",
value: R
}, {
key: "xor",
value: L
} ]);
}();
},
80182: (t, e, n) => {
"use strict";
n.d(e, {
a: () => P
});
var r = n(61451), i = n(57473), o = n(91266), a = n(43394), s = n(852), c = n(78396), u = n(9036);
function l() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (l = function() {
return !!t;
})();
}
function f(t, e, n) {
(function(t, e) {
if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
})(t, e), e.set(t, n);
}
function h(t, e, n) {
if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
throw new TypeError("Private element is not present on this object");
}
var v = function(t, e) {
return (t % e + e) % e;
}, d = new WeakMap;
function p() {
return e = this, (t = d).get(h(t, e));
var t, e;
}
function y(t) {
if (t < 0) throw new Error("Size must be greater than 0");
if (t > this.capacity) throw new Error("Size must be less than capacity");
var e, n, r;
n = this, r = t, (e = d).set(h(e, n), r);
}
function g() {
this.size = Math.min(this.size + 1, this.capacity);
}
function w() {
this.index = v(this.index + 1, this.capacity);
}
function m(t) {
if (t >= this.tracks) throw new Error("Track ".concat(t, " is out of range"));
}
function b(t, e) {
this.checkTrackIndex(t);
var n = v(e, this.size);
return this.data[n * this.tracks + t];
}
function k(t, e, n) {
this.checkTrackIndex(t);
var r = v(e, this.size);
this.data[r * this.tracks + t] = n;
}
var _ = function() {
return (0, s.a)(function t(e, n) {
if ((0, a.a)(this, t), f(this, d, 0), (0, c.a)(this, "tracks", void 0), (0, c.a)(this, "capacity", void 0), 
(0, c.a)(this, "data", void 0), (0, c.a)(this, "index", void 0), e < 1) throw new Error("Tracks count must be greater than 0");
if (n < 1) throw new Error("Capacity must be greater than 0");
this.tracks = e, this.capacity = n, this.data = new Uint32Array(e * n), this.index = 0;
}, [ {
key: "size",
get: p,
set: y
}, {
key: "growSize",
value: g
}, {
key: "moveIndex",
value: w
}, {
key: "checkTrackIndex",
value: m
}, {
key: "getDataByTrack",
value: b
}, {
key: "setDataByTrack",
value: k
} ]);
}();
function I(t) {
this._totals.setDataByTrack(1, 0, this._totals.getDataByTrack(1, 0) + t);
}
function S(t) {
this._totals.setDataByTrack(2, 0, this._totals.getDataByTrack(2, 0) + t);
}
function U() {
this._data.growSize(), this._data.setDataByTrack(0, this._data.index, Date.now() / 1e3);
for (var t = 1; this.tracks > t; t++) {
var e = this._totals.getDataByTrack(t, 0) - this._totals.getDataByTrack(t, 1);
this._data.setDataByTrack(t, this._data.index, e), this._totals.setDataByTrack(t, 1, this._totals.getDataByTrack(t, 0));
}
var n = this._data.data.subarray(this._data.index * this._data.tracks, this._data.index * this._data.tracks + this._data.tracks);
this.emit("update", n), this._data.moveIndex();
}
function x() {
var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.min(this._data.capacity, this._data.size);
if (n = Math.min(n, this._data.capacity, this._data.size), 0 == e) {
for (var r = new Uint32Array(n * this._data.tracks), i = n; i--; ) for (var o = 0; this._data.tracks > o; o++) r[i * this._data.tracks + o] = this._data.getDataByTrack(o, this._data.index - i - 1);
return r;
}
if (1 == e) {
for (var a = [], s = function() {
var e = v(t._data.index - c - 1, t._data.capacity), n = Array.from({
length: t._data.tracks
}, function(n, r) {
return t._data.getDataByTrack(r, e);
});
a.push(n);
}, c = n; c--; ) s();
return a;
}
return [];
}
function C() {
clearInterval(this.intervalId), this.unlisten();
}
var P = function(t) {
function e(t) {
var n, o, s, u, f = t.interval, h = void 0 === f ? 6e4 : f, v = t.capacity, d = void 0 === v ? 1440 : v;
return (0, a.a)(this, e), o = this, s = e, s = (0, i.a)(s), n = (0, r.a)(o, l() ? Reflect.construct(s, u || [], (0, 
i.a)(o).constructor) : s.apply(o, u)), (0, c.a)(n, "struct", void 0), (0, c.a)(n, "tracks", void 0), 
(0, c.a)(n, "interval", void 0), (0, c.a)(n, "intervalId", void 0), (0, c.a)(n, "_totals", void 0), 
(0, c.a)(n, "_data", void 0), n.struct = [ 0, 1, 2 ], n.tracks = n.struct.length, 
n.interval = h, n.intervalId = null, n.interval > 0 && (n.intervalId = setInterval(n.putData.bind(n), n.interval)), 
n._totals = new _(n.tracks, 2), n._totals.size = 2, n._data = new _(n.tracks, d), 
n;
}
return (0, o.a)(e, t), (0, s.a)(e, [ {
key: "incrementRecv",
value: I
}, {
key: "incrementSend",
value: S
}, {
key: "putData",
value: U
}, {
key: "getData",
value: x
}, {
key: "destroy",
value: C
} ]);
}(u.Eventify);
},
81101: (t, e, n) => {
"use strict";
t.exports = n.p + "81feb5477b3a46d7c8a2.json";
},
82385: (t, e, n) => {
"use strict";
n.d(e, {
a: () => Se
});
var r = {};
n.r(r), n.d(r, {
instantiate: () => g
});
var i = n(75837), o = n(72119), a = n(52500), s = n(78396), c = n(43394), u = n(852), l = n(61451), f = n(57473), h = n(91266), v = n(58387), d = n.n(v), p = n(9036), y = n(13600);
async function g(t, e = {}) {
const n = e.World, r = e.Controller, i = e.Player, o = e.index, a = {
env: Object.setPrototypeOf({
abort(t, e, n, r) {
t = l(t >>> 0), e = l(e >>> 0), n >>>= 0, r >>>= 0, (() => {
throw Error(`${t} in ${e}:${n}:${r}`);
})();
},
trace(t, e, n, r, i, o, a) {
t = l(t >>> 0), console.log(t, ...[ n, r, i, o, a ].slice(0, e));
},
seed: () => Date.now() * Math.random()
}, Object.assign(Object.create(globalThis), e.env || {})),
World: Object.setPrototypeOf({
onPlayerRemoved(t, e) {
t >>>= 0, e >>>= 0, n.onPlayerRemoved(t, e);
},
onControllerAdded(t, e) {
t >>>= 0, e >>>= 0, n.onControllerAdded(t, e);
},
onPlayerAdded(t, e) {
t >>>= 0, e >>>= 0, n.onPlayerAdded(t, e);
},
onControllerRemoved(t, e) {
t >>>= 0, e >>>= 0, n.onControllerRemoved(t, e);
},
onMapUpdate(t) {
t >>>= 0, n.onMapUpdate(t);
}
}, n),
Controller: Object.setPrototypeOf({
emitBuffer(t, e, n, i) {
t >>>= 0, n >>>= 0, r.emitBuffer(t, e, n, i);
},
saveOwnPointer(t, e) {
t >>>= 0, r.saveOwnPointer(t, e);
}
}, r),
Player: i,
index: o
}, {exports: s} = await WebAssembly.instantiate(t, a), c = s.memory || e.env.memory, u = Object.setPrototypeOf({
ticked: {
valueOf() {
return this.value;
},
get value() {
return s.ticked.value >>> 0;
},
set value(t) {
s.ticked.value = t;
}
},
debugLevel: {
valueOf() {
return this.value;
},
get value() {
return s.debugLevel.value >>> 0;
}
},
DeltaProtocolPointer: {
valueOf() {
return this.value;
},
get value() {
return s.DeltaProtocolPointer.value >>> 0;
}
},
LegacyProtocolPointer: {
valueOf() {
return this.value;
},
get value() {
return s.LegacyProtocolPointer.value >>> 0;
}
},
mm: {
valueOf() {
return this.value;
},
get value() {
return function(t) {
if (!t) return null;
const e = new f(function(t) {
if (t) {
const e = v.get(t);
e ? v.set(t, e + 1) : v.set(s.__pin(t), 1);
}
return t;
}(t));
return h.register(e, t), e;
}(s.mm.value >>> 0);
}
},
get_settings_pointer: () => s.get_settings_pointer() >>> 0
}, s);
function l(t) {
if (!t) return null;
const e = t + new Uint32Array(c.buffer)[t - 4 >>> 2] >>> 1, n = new Uint16Array(c.buffer);
let r = t >>> 1, i = "";
for (;e - r > 1024; ) i += String.fromCharCode(...n.subarray(r, r += 1024));
return i + String.fromCharCode(...n.subarray(r, e));
}
class f extends Number {}
const h = new FinalizationRegistry(function(t) {
if (t) {
const e = v.get(t);
if (1 === e) s.__unpin(t), v.delete(t); else {
if (!e) throw Error(`invalid refcount '${e}' for reference '${t}'`);
v.set(t, e - 1);
}
}
});
const v = new Map;
return u;
}
var w = n(38809), m = n(85), b = n(98488), k = n(15697);
function _() {
this._start || (this._start = this._lap = performance.now());
}
function I() {
var t = performance.now() - (this._lap || 0);
return this._lap = performance.now(), t;
}
function S() {
return performance.now() - (this._start || 0);
}
function U() {
this._start = this._lap = void 0;
}
function x() {
this._start = this._lap = performance.now();
}
var C = function() {
return (0, u.a)(function t() {
(0, c.a)(this, t), (0, s.a)(this, "_start", void 0), (0, s.a)(this, "_lap", void 0);
}, [ {
key: "begin",
value: _
}, {
key: "lap",
value: I
}, {
key: "elapsed",
value: S
}, {
key: "stop",
value: U
}, {
key: "reset",
value: x
} ]);
}(), P = n(21988);
function A(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return T(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function T(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function E(t) { function e(e, n) { return t.apply(this, arguments); } return e.toString = function() { return t.toString(); }, e; } function D(t, e) { return setTimeout(t, e); } function O(t) { function e(e) { return t.apply(this, arguments); } return e.toString = function() { return t.toString(); }, e; } function B(t) { return clearTimeout(t); } function M(t) { if (!(t instanceof Function)) throw new TypeError("given object isn't a function"); return this.callbacks.push(t), this; } function R(t) { if (!(t instanceof Function)) throw new TypeError("given object isn't a function"); var e = this.callbacks.indexOf(t); if (-1 === e) throw new Error("given function wasn't added"); return this.callbacks.splice(e, 1), this; } function L() { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25; if (this.running) throw new Error("Ticker уже запущен"); this.running = !0, e && (this.msPerUpdate = 1e3 / e, this.dt = this.msPerUpdate / 1e3); var n = Date.now(); return 0 === this.time && (this.timeInfo.start = n), this.timeInfo.lastUpdate = n, this.delta = 0, this._timeoutId = this.setTimeout(function() { return t.tick(); }, this.msPerUpdate), this; } function z() { if (!this.running) throw new Error("Ticker не запущен"); return this.clearTimeout(this._timeoutId), this._timeoutId = null, this.running = !1, this; } function F() { if (!this.running && 0 === this.time) throw new Error("Ticker не запущен"); return this.running && this.pause(), this.time = 0, this.prev_time = 0, this.timeInfo.start = 0, this.timeInfo.lastUpdate = 0, this; } var j = function() { return (0, u.a)(function t(e) { var n = this; function r() { return n.tick(); } (0, c.a)(this, t), (0, s.a)(this, "setTimeout", void 0), (0, s.a)(this, "clearTimeout", void 0), (0, s.a)(this, "running", void 0), (0, s.a)(this, "callbacks", void 0), (0, s.a)(this, "timeInfo", void 0), (0, s.a)(this, "prev_time", void 0), (0, s.a)(this, "time", void 0), (0, s.a)(this, "msPerUpdate", void 0), (0, s.a)(this, "dt", void 0), (0, s.a)(this, "delta", void 0), (0, s.a)(this, "_timeoutId", void 0), (0, s.a)(this, "tick", (0, a.a)(d().mark(function t() { var e, i, o, a, s, c, u, l, f; return d().wrap(function(t) { for (;;) switch (t.prev = t.next) { case 0: if (n.running) { t.next = 1; break; } return t.abrupt("return");case 1: e = Date.now(), i = e - n.timeInfo.lastUpdate, n.timeInfo.lastUpdate = e, n.prev_time = n.time, n.time += i, o = Math.min(i, n.msPerUpdate), a = i / 1e3, s = o / 1e3, c = A(n.callbacks); try { for (c.s(); !(u = c.n()).done; ) (0, u.value)(s, a); } catch (t) { c.e(t); } finally { c.f(); } l = Date.now() - e, f = Math.max(0, n.msPerUpdate - l), n._timeoutId = n.setTimeout(r, f);case 2: case "end": return t.stop(); } }, t); }))), "undefined" != typeof window ? Object.assign(this, { setTimeout: P.b, clearTimeout: P.a }) : Object.assign(this, { setTimeout: E(D), clearTimeout: O(B) }), this.running = !1, this.callbacks = [], this.timeInfo = { start: 0, lastUpdate: 0 }, this.prev_time = 0, this.time = 0, this.msPerUpdate = 1e3 / e, this.dt = this.msPerUpdate / 1e3, this.delta = 0, this._timeoutId = null; }, [ { key: "add", value: M }, { key: "remove", value: R }, { key: "start", value: L }, { key: "pause", value: z }, { key: "stop", value: F } ]); }(); const N = j; var V = n(21239), Z = n(56252), W = n(18874), q = n(17963), G = n(21574); function Y() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (Y = function() { return !!t; })(); } var X, K = (0, m.c)({ WORLD_SIZE_SCALE_ENABLED: { t: "bool" }, WORLD_SIZE_SCALE_STEP: { t: "f32" }, WORLD_SIZE_SCALE_MIN: { t: "f32" }, WORLD_SIZE_SCALE_MAX: { t: "f32" }, WORLD_SIZE_SCALE_MASS_DENSITY_HIGH: { t: "f32" }, WORLD_SIZE_SCALE_MASS_DENSITY_LOW: { t: "f32" }, worldCriticalMassRemoval: { t: "bool" }, worldMapX: { t: "f32" }, worldMapY: { t: "f32" }, worldMapW: { t: "f32" }, worldMapH: { t: "f32" }, worldFinderMaxLevel: { t: "i8" }, worldFinderMaxItems: { t: "i8" }, worldSafeSpawnTries: { t: "f32" }, worldSafeSpawnFromEjectedChance: { t: "f32" }, worldScramblingEnabled: { t: "bool" }, worldPlayerDisposeDelay: { t: "u16" }, worldTimeScale: { t: "f32" }, worldDeltaClamping: { t: "bool" }, worldEatMult: { t: "f32" }, worldEatOverlapDiv: { t: "f32" }, worldPlayerBotsPerWorld: { t: "i32" }, worldMinionsPerPlayer: { t: "i32" }, worldMaxControllers: { t: "i32" }, worldPlayersPerController: { t: "u8" }, worldMinCount: { t: "u32" }, worldMaxCount: { t: "u32" }, matchmakerNeedsQueuing: { t: "bool" }, matchmakerBulkSize: { t: "u32" }, minionName: { t: "utf8" }, minionSpawnSize: { t: "f32" }, minionEnableERTPControls: { t: "bool" }, minionEnableQBasedControl: { t: "bool" }, boosterCount: { t: "u32" }, boosterSize: { t: "f32" }, boosterSizeGiven: { t: "f32" }, boostingResolveEnabled: { t: "bool" }, pelletMinSize: { t: "u16" }, pelletMaxSize: { t: "u16" }, pelletGrowTicks: { t: "f32" }, pelletCount: { t: "u32" }, pelletSafeSpawnTries: { t: "f32" }, pelletSafeDistanceScale: { t: "f32" }, pelletSpawnPerTick: { t: "i32" }, pelletSpawnUseGradient: { t: "bool" }, cellsBoostDuration: { t: "f32" }, virusMinCount: { t: "u32" }, virusMaxCount: { t: "u32" }, virusSize: { t: "f32" }, virusFeedTimes: { t: "f32" }, virusFeedSpawnProtectionMs: { t: "f32" }, virusPushing: { t: "bool" }, virusSplitBoost: { t: "f32" }, virusPushBoost: { t: "f32" }, virusMonotonePops: { t: "bool" }, ejectedMaxAge: { t: "f32" }, ejectedNoCollideDelay: { t: "f32" }, ejectedRigidEnabled: { t: "bool" }, ejectedSize: { t: "f32" }, ejectingLoss: { t: "f32" }, ejectDispersion: { t: "f32" }, ejectedCellBoost: { t: "f32" }, mothercellSize: { t: "f32" }, mothercellCount: { t: "u32" }, mothercellPassiveSpawnChance: { t: "f32" }, mothercellActiveSpawnSpeed: { t: "f32" }, mothercellPelletBoost: { t: "f32" }, mothercellMaxPellets: { t: "u32" }, mothercellMaxSize: { t: "f32" }, playerRoamSpeed: { t: "f32" }, playerRoamViewScale: { t: "f32" }, playerViewScaleMult: { t: "f32" }, playerMinViewScale: { t: "f32" }, playerCenterweightView: { t: "bool" }, playerMaxNameLength: { t: "u32" }, playerAllowSkinInName: { t: "bool" }, playerLockDirectionEnabled: { t: "bool" }, playerBotSpawnSize: { t: "f32" }, playerCellsCheapRemoving: { t: "bool" }, playerMinSize: { t: "f32" }, playerSpawnSize: { t: "f32" }, playerSpawnMultiAtCursor: { t: "bool" }, playerSpawnMultiAtCursorDistance: { t: "f32" }, playerSpawnMultiNear: { t: "bool" }, playerSpawnSpectAtCursor: { t: "bool" }, playerAutosplitAtCursor: { t: "bool" }, playerAutosplitDelay: { t: "f32" }, playerBoostByEjected: { t: "bool" }, playerMaxSize: { t: "f32" }, playerMinSplitSize: { t: "f32" }, playerMinEjectSize: { t: "f32" }, playerSplitCap: { t: "i32" }, playerEjectDelay: { t: "u8" }, playerMaxCells: { t: "u32" }, playerNormalizeTreshMass: { t: "f32" }, playerExtraDecayEnabled: { t: "bool" }, playerExtraDecayBase: { t: "f32" }, playerExtraDecayCompensation: { t: "f32" }, playerExtraDecayEjectLoss: { t: "f32" }, playerExtraDecaySplitLoss: { t: "f32" }, playerExtraDecayVirusPopLoss: { t: "f32" }, playerMoveMult: { t: "f32" }, playerSortCells: { t: "bool" }, playerSplitSizeDiv: { t: "f32" }, playerSplitDistance: { t: "f32" }, playerSplitBoost: { t: "f32" }, playerNoCollideDelay: { t: "f32" }, playerNoMergeDelay: { t: "f32" }, playerNewMergeVersion: { t: "bool" }, playerMergeTime: { t: "f32" }, playerMergeTimeIncrease: { t: "f32" }, playerDecayMult: { t: "f32" }, decayFn: { t: "bool" }, _compensateRigidBoostA: { t: "bool" }, _compensateRigidBoostB: { t: "bool" } }), $ = function(t) {
function e(t, n) {
var r, i, o, a;
return (0, c.a)(this, e), i = this, o = e, a = [ t, K.fields, n ], o = (0, f.a)(o), 
(r = (0, l.a)(i, Y() ? Reflect.construct(o, a || [], (0, f.a)(i).constructor) : o.apply(i, a))).test, 
r;
}
return (0, h.a)(e, t), (0, u.a)(e);
}((0, m.a)((0, u.a)(function t() {
(0, c.a)(this, t);
})));
!function(t) {
t.IP = "ip", t.FP = "fp";
}(X || (X = {}));
var J = n(75308), H = {
name: "Server",
isServer: !0,
color: 4145088
};
function Q() {
return this.listener.server.settings;
}
function tt(t) {
this.connections.push(t);
}
function et(t) {
var e = this.connections.indexOf(t);
-1 !== e && this.connections.splice(e, 1);
}
function nt(t) {
return !1;
}
function rt(t, e) {
if (!this.shouldFilter(e)) for (var n = null == t ? H : {
isServer: !1,
name: "Random Nick",
color: 4145088
}, r = 0, i = this.connections.length; r < i; r++) this.connections[r].protocol.onChatMessage(n, e);
}
function it(t, e, n) {
if (!this.shouldFilter(n)) {
var r = null == t ? H : {
isServer: !1,
name: "Random Nick",
color: 4145088
};
e.protocol.onChatMessage(r, n);
}
}
var ot = function() {
return (0, u.a)(function t(e) {
(0, c.a)(this, t), (0, s.a)(this, "listener", void 0), (0, s.a)(this, "connections", void 0), 
this.listener = e, this.connections = [];
}, [ {
key: "settings",
get: Q
}, {
key: "add",
value: tt
}, {
key: "remove",
value: et
}, {
key: "shouldFilter",
value: nt
}, {
key: "broadcast",
value: rt
}, {
key: "directMessage",
value: it
} ]);
}(), at = n(95413);
function st(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return ct(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ct(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function ct(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function ut() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (ut = function() { return !!t; })(); } var lt = (0, m.c)({ id: { t: "u8" }, border_x: { t: "f32" }, border_y: { t: "f32" }, border_w: { t: "f32" }, border_h: { t: "f32" }, leaderboard_ptr: { t: "usize" } }), ft = (0, m.d)(lt.fields, { $mergePlayerCells: {}, $logPlayers: {}, $addController: {}, $remController: {}, $addPlayer: {}, $remPlayer: {}, $resizeMapDebug: {},
update: {},
construct: {}
}, [ "onControllerRemoved", "onControllerAdded", "onPlayerAdded", "onPlayerRemoved", "onMapUpdate" ]);
function ht() {
this.cursorQT = new at.b(new at.a(this.border_x, this.border_y, this.border_w, this.border_h), 16, 16);
}
function vt() {
var t, e = this, n = st(this.players);
try {
for (n.s(); !(t = n.n()).done; ) {
var r = (0, i.a)(t.value, 2), o = (r[0], r[1]);
0 == o.state && (o.range.x = o.mouseX, o.range.y = o.mouseY, o.range.w = 20, o.range.h = 20, 
this.cursorQT.insert(o));
}
} catch (t) {
n.e(t);
} finally {
n.f();
}
var a, s = new Map, c = function(t) {
if (0 != t.state) return 1;
-1 == t.cursorGroup && (t.cursorGroup = 1e3 * Math.random() | 0, s.has(t.cursorGroup) || s.set(t.cursorGroup, [ t ])), 
e.cursorQT.search({
x: t.mouseX,
y: t.mouseY,
w: 200,
h: 200
}, function(e) {
e !== t && -1 == e.cursorGroup && e.connection != t.connection && (e.cursorGroup = t.cursorGroup, 
s.get(t.cursorGroup).push(e));
});
}, u = st(this.players);
try {
for (u.s(); !(a = u.n()).done; ) {
c((0, i.a)(a.value, 2)[1]);
}
} catch (t) {
u.e(t);
} finally {
u.f();
}
var l, f = st(this.players);
try {
for (f.s(); !(l = f.n()).done; ) {
(0, i.a)(l.value, 2)[1].cursorGroup = -1;
}
} catch (t) {
f.e(t);
} finally {
f.f();
}
var h, v = function() {
var t = p.length;
p.forEach(function(e) {
t > 5 ? e.groupedBehavior += .1 : e.groupedBehavior -= .1, e.groupedBehavior = Math.min(1, Math.max(0, e.groupedBehavior));
});
}, d = st(s);
try {
for (d.s(); !(h = d.n()).done; ) {
var p = (0, i.a)(h.value, 2)[1];
v();
}
} catch (t) {
d.e(t);
} finally {
d.f();
}
this.cursorQT.destroy();
var y, g = st(this.players);
try {
for (g.s(); !(y = g.n()).done; ) {
var w = (0, i.a)(y.value, 2)[1];
w.groupedBehavior >= 1 && this.server.banByPlayer(w.connection, 6e5, "Group cursor detected");
}
} catch (t) {
g.e(t);
} finally {
g.f();
}
}
function dt() {
this.server.module.wasm.__unpin(this.pointer);
}
function pt(t) {
this.$remPlayer(t.pointer), this.players.delete(t.pointer); } function yt(t) { this.players.delete(t.pointer); } function gt(t) { if (!this.pointer) throw new Error("World is destroyed"); this.$addPlayer(t.pointer), this.players.set(t.pointer, t);
}
function wt(t) {
t.world = this, this.$addController(t.pointer), this.controllers.set(t.pointer, t); } function mt(t) { t.remPlayers(), this.$remController(t.pointer), this.controllers.delete(t.pointer);
}
function bt() {
this.$resizeMapDebug(); } function kt() { this.updBotDetectionTool(); } function _t(t) {} function It(t) {} function St(t) {} function Ut(t) {} function xt() { var t = this; this.players.forEach(function(e) { t.$mergePlayerCells(e.pointer); }); } var Ct = function(t) { function e(t) { var n, r, i, o; (0, c.a)(this, e), r = this, i = e, o = [ t.module, lt.fields, 0 ], i = (0, f.a)(i), n = (0, l.a)(r, ut() ? Reflect.construct(i, o || [], (0, f.a)(r).constructor) : i.apply(r, o)), (0, s.a)(n, "cursorQT", void 0), (0, s.a)(n, "players", new Map), (0, s.a)(n, "controllers", new Map), (0, s.a)(n, "server", void 0), (0, s.a)(n, "leaderboard", void 0), (0, s.a)(n, "chatChannel", void 0), n.server = t; var a = n.construct(); return n.server.module.wasm.__pin(a), n.setPointer(a), n.leaderboard = new J.a(t.module, n.leaderboard_ptr), n.chatChannel = new ot(n), n.updBotDetectionTool(), n; } return (0, h.a)(e, t), (0, u.a)(e, [ { key: "updBotDetectionTool", value: ht }, { key: "calcBotDetection", value: vt }, { key: "destroy", value: dt }, { key: "remPlayer", value: pt }, { key: "detachPlayer", value: yt }, { key: "addPlayer", value: gt }, { key: "addController", value: wt }, { key: "remController", value: mt }, { key: "resizeMapDebug", value: bt }, { key: "onMapUpdate", value: kt }, { key: "onControllerAdded", value: _t }, { key: "onControllerRemoved", value: It }, { key: "onPlayerAdded", value: St }, { key: "onPlayerRemoved", value: Ut }, { key: "mergeAllPlayerCells", value: xt } ]); }((0, p.EventMixin)(ft)); function Pt(t, e) { var n = At(); return (Pt = function(t, e) { return n[t -= 420]; })(t, e); } function At() { var t = [ "8355277WlULmp", "2844370CPyalo", "OWgZk", "kaYnY", "4887OqtrOM", "4331100yBKrOs", "880340PecUfs", "22xZiAQq", "5HQutCK", "6iidNgi", "VPAvr", "136lxnisd", "624450larSsC", "nges", "connection", "sendChalle", "XWTCB", "fqkDf", "4747488boYouU", "onmessage" ]; return (At = function() { return t; })(); } function Tt() {} function Et(t, e) { return !0; } !function(t) { for (var e = Pt, n = t(); ;) try { if (859224 === parseInt(e(438)) / 1 + -parseInt(e(427)) / 2 + parseInt(e(424)) / 3 + parseInt(e(431)) / 4 * (parseInt(e(434)) / 5) + parseInt(e(435)) / 6 * (-parseInt(e(426)) / 7) + parseInt(e(437)) / 8 * (parseInt(e(430)) / 9) + -parseInt(e(432)) / 10 * (-parseInt(e(433)) / 11)) break; n.push(n.shift()); } catch (t) { n.push(n.shift()); } }(At); var Dt, Ot, Bt = (Ot = { XWTCB: function(t, e, n) { return t(e, n); }, VPAvr: function(t, e, n, r) { return t(e, n, r); }, OWgZk: (Dt = Pt)(420), fqkDf: Dt(421) + Dt(439), kaYnY: Dt(425) })[Dt(422)](u.a, function t(e) { var n = Dt; Ot[n(422)](c.a, this, t), Ot[n(436)](s.a, this, Ot[n(428)], void 0), this[n(420)] = e; }, [ { key: Ot[Dt(423)], value: Tt }, { key: Ot[Dt(429)], value: Et } ]), Mt = n(80182), Rt = n(33171).Buffer; function Lt(t, e, n) { return e = (0, f.a)(e), (0, l.a)(t, zt() ? Reflect.construct(e, n || [], (0, f.a)(t).constructor) : e.apply(t, n)); } function zt() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (zt = function() { return !!t; })(); } globalThis.module = { hot: null, id: "delta-server" }; var Ft = (0, m.c)({}); function jt() { this.root.wasm.__unpin(this.pointer), this.setPointer(0); } var Nt = function(t) { function e(t) { var n; return (0, c.a)(this, e), (n = Lt(this, e, [ t, Ft.fields, 0 ])).setPointer(n.construct()), t.wasm.__pin(n.pointer), n; } return (0, h.a)(e, t), (0, u.a)(e, [ { key: "destroy", value: jt } ]); }((0, m.d)(Ft.fields, { addWorld: {}, remWorld: {}, tick: {}, construct: {} })); function Vt(t, e) { return 1; } function Zt(t) { for (;;) switch (t.prev = t.next) { case 0: return t.abrupt("return", !0);case 1: case "end": return t.stop(); } } function Wt() { return d().wrap(Zt, Wt); } function qt(t) { for (;;) switch (t.prev = t.next) { case 0: return t.abrupt("return", void 0);case 1: case "end": return t.stop(); } } function Gt() { return d().wrap(qt, Gt); } function Yt(t) { for (;;) switch (t.prev = t.next) { case 0: if (!this.wasm) { t.next = 1; break; } throw Error("Already initialized");case 1: return this.log("Module Initialization ..."), t.next = 2, this.loadAssembly();case 2: this.wasm = t.sent, this.module = new w.a(this.wasm), Object.assign(globalThis, { wasm: this.wasm, srv: this }), this.runTicker(), this.serverHandle = new Nt(this.module), this.world = new Ct(this), this.serverHandle.addWorld(this.world.pointer), this.settings = new $(this.module, this.wasm.get_settings_pointer()), this.PlayerClass = new m.b(this.module, k.b.fields, 0), this.PlayerClass._cfg_use_contexts = !1, this.log("Done.");case 3: case "end": return t.stop(); } } function Xt() { return d().wrap(Yt, Xt, this); } function Kt(t) { return t.default; } function $t(t) {
return t.arrayBuffer();
}
function Jt(t) {
var e = (0, i.a)(t, 2), n = e[0], r = e[1], o = n.SetSourceMapURL(new Uint8Array(r), "".toString());
return WebAssembly.compile(o);
}
function Ht() {}
function Qt(t, e) {
var n;
return (n = console).log.apply(n, [ "getter" ].concat(Array.prototype.slice.call(arguments))), 
t[e];
}
function te(t, e, n) {
var r;
(r = console).log.apply(r, [ "setter" ].concat(Array.prototype.slice.call(arguments))), 
t[e] = n;
}
function ee(t, e, n) {
var r;
(r = console).log.apply(r, [ "setter" ].concat(Array.prototype.slice.call(arguments))), 
t[e] = n;
}
function ne(t, e, n) {
var r;
(r = console).log.apply(r, [ "setter" ].concat(Array.prototype.slice.call(arguments))), 
t[e] = n;
}
function re(t) {
return new Function(t)();
}
function ie(t, e) {
return console.log("call", t), t(e);
}
function oe(t) {
for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
return t.apply(void 0, n);
}
function ae(t, e, n) {
var r;
return (r = console).log.apply(r, [ "reflect_apply" ].concat(Array.prototype.slice.call(arguments))), 
Reflect.apply(t, e, n);
}
function se(t, e) {
return Reflect.construct(t, e);
}
function ce() {
return performance.now();
}
function ue() {
var t, e, i, s, c, u, l, f, h, v = arguments, p = this;
function y(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", Promise.all([ n.e(477).then(n.bind(n, 31477)).then(Kt), fetch(e.toString()).then($t) ]).then(Jt));case 1: case "end": return t.stop(); } } function g() { return d().wrap(y, g); } function w() { return (u = (0, a.a)(d().mark(g))).apply(this, arguments); } function m() { return u.apply(this, arguments); } function _() { var t, r, i, o, s, c; function u() { var t, e, n; return d().wrap(function(i) { for (;;) switch (i.prev = i.next) { case 0: return i.next = 1, o.readFile(c);case 1: return t = i.sent, e = Rt.from(t).toString("base64"), n = r.SetSourceMapURL(s, "data:application/json;base64," + e), i.abrupt("return", globalThis.WebAssembly.compile(n));case 2: case "end": return i.stop(); } }, u); } function l() { return console.log("Fixme: Cant read source map file", c, e.toString()), globalThis.WebAssembly.compile(s); } return d().wrap(function(f) { for (;;) switch (f.prev = f.next) { case 0: return f.next = 1, n.e(477).then(n.bind(n, 31477));case 1: return r = f.sent.default, i = (null === (t = e.pathname.match(/:(.+)/)) || void 0 === t ? void 0 : t[1]) || e.pathname, f.next = 2, import("fs/".concat("promises"));case 2: return o = f.sent, f.next = 3, o.readFile(i);case 3: return s = f.sent, c = (e.toString() + ".map").replace(/file:///, "").replace(//.:/, ""), f.abrupt("return", o.access(c).then((0, a.a)(d().mark(u))).catch(l));case 4: case "end": return f.stop(); } }, );}function I() {return (s = (0, a.a)(d().mark())).apply(this, arguments); } function S() { return s.apply(this, arguments); } function U() { var t; return (t = console).log.apply(t, [ "funcref" ].concat((0, o.a)(v))), Ht; } function x(t, e) { return p.emit("onStatsPointer", t, e); } function C() { return "undefined" != typeof process && null != process.versions && null != process.versions.node ? i.call(p) : c(); } return d().wrap(function(o) { for (;;) switch (o.prev = o.next) { case 0: return u = w, c = m, s = I, i = S, t = { host: { window: globalThis, anyref: !0, anyfunc: U, getter: Qt, setter: te, setter_str: ee, setter_num: ne, eval: re, call: ie, call_str: oe, reflect_apply: ae, reflect_construct: se }, glob: { now: ce, onStatsPointer: x } }, e = new URL(n(92198), n.b), l = C, h = r, o.next = 1, l();case 1: return o.next = 2, h.instantiate.call(h, o.sent, { env: {}, external: t, Controller: b.a, World: Ct, Player: k.a, index: Nt });case 2: return f = o.sent, o.abrupt("return", f);case 3: case "end": return o.stop(); } }, ue); } function le() { this.ticker.start(25), this.ticker.add(this.onTick); } function fe() { this.ticker.stop(), this.ticker.remove(this.onTick), clearInterval(this.interval); } function he(t) { var e = this; if (!this.wasm) throw Error("Not initialized"); if (!(this.world.controllers.size >= this.settings.proxy.worldMaxControllers)) { var n = new b.a(this, t); this.connections.push(n), n.onProtocolDecided = function() { n.wasm_new_controller(), e.world.addController(n), n.initPlayers(), clearTimeout(r); }; var r = setTimeout(function() { n.listenerClosed || n.closeListener.apply(n, (0, o.a)(G.a.CHECKS_TIMEOUT)); }, 3e3); return n; } } function ve(t) { var e; return d().wrap(function(n) { for (;;) switch (n.prev = n.next) { case 0: t.leaveWorld(), (e = this.connections.indexOf(t)) > -1 && this.connections.splice(e, 1), t.destroy();case 1: case "end": return n.stop(); } }, ve, this); } function de(t, e, n) { this.on_disconnect(t); } function pe() { var t, e, n, r, i, o; function a() { return t.new_connection(this), Promise.resolve(); } function s(t) { function e() { return (0, c.a)(this, e), Lt(this, e, arguments); } return (0, h.a)(e, t), (0, u.a)(e, [ { key: "open", value: a } ]); } return d().wrap(function(a) { for (;;) switch (a.prev = a.next) { case 0: for (t = this, e = [], n = 300; n--; ) r = new b.a(this, new (s(q.a))(this)), e.push(r), r.wasm_new_controller(), this.world.addController(r), r.initPlayers(); for (i = e.length; i--; ) o = e.pop(), this.on_disconnect(o);case 1: case "end": return a.stop(); } }, pe, this); } function ye(t, e, n) { t[e] = n; } function ge(t) { if (t) { var e = this.settings.proxy; for (var n in e) Object.getOwnPropertyDescriptor(e, n) && t.hasOwnProperty(n) && ye(e, n, t[n]); } } function we(t, e) { return !this.checkIsBanned(t) && !this.checkIsBanned(e); } function me(t) { var e = this.ban_cache.get(t); if (e && void 0 !== e.time) { if (e.time < Date.now() && this.pardon(t), e.time > Date.now()) return !0; if (-1 === e.time) return !0; } return !1; } function be(t, e, n) { var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; this.banByString(X.IP, t.ip, e, n), this.banByString(X.FP, t.fp, e, n), r && t.closeListener.apply(t, (0, o.a)(G.a.CHECKS_FAILED)); } function ke(t, e, n, r) { var i = void 0 !== n ? Date.now() + n : void 0; this.ban_cache.set(e, { type: t, target: e, time: i, reason: r }); } function _e() { this.ban_cache.clear(); } function Ie(t) { this.ban_cache.delete(t); } var Se = function(t) { function e() { var t; (0, c.a)(this, e), t = Lt(this, e), (0, s.a)(t, "config", { fatalPingDelay: 1e4, fatalLastActivityDelay: 6e4, captchaMode: -1, usePuzzle: !0, middlewares: new Map }), (0, s.a)(t, "time", Date.now()), (0, s.a)(t, "updateInterval", null), (0, s.a)(t, "buffer_events", new p.Eventify), (0, s.a)(t, "interval", null), (0, s.a)(t, "ticker", new N(25)), (0, s.a)(t, "connections", []), (0, s.a)(t, "world", void 0), (0, s.a)(t, "averageTickTime", 0), (0, s.a)(t, "ban_cache", new y.a({ max: 500, maxSize: 5e3, sizeCalculation: Vt, ttl: 6e5, allowStale: !1, updateAgeOnGet: !1, updateAgeOnHas: !1 })), (0, s.a)(t, "pingCheckerInterval", void 0), (0, s.a)(t, "botDetectionTimeout", void 0), (0, s.a)(t, "trafficCollector", new Mt.a({ interval: 5e3, capacity: 36e3 })), (0, s.a)(t, "stopwatch", new C), (0, s.a)(t, "initPromise", void 0), (0, s.a)(t, "wasm", void 0), (0, s.a)(t, "module", void 0), (0, s.a)(t, "PlayerClass", void 0), (0, s.a)(t, "serverHandle", void 0), (0, s.a)(t, "settings", void 0), (0, s.a)(t, "checkCaptcha", (0, a.a)(d().mark(Wt))), (0, s.a)(t, "getCaptchaPuzzle", (0, a.a)(d().mark(Gt))), (0, s.a)(t, "onTick", function(e, n) { t.time = Date.now(), t.stopwatch.begin(); var r = 1e3 * (t.settings.proxy.worldDeltaClamping ? e : n) * t.settings.proxy.worldTimeScale; t.serverHandle.tick(t.ticker.time, t.ticker.prev_time, r), t.world.update(), t.averageTickTime = t.stopwatch.elapsed(), t.stopwatch.stop(); }), t.setPrefix("[[95mDeltArena[39m]:"), t.config.middlewares.set(V.a, Bt), t.config.middlewares.set(Z.a, Bt), t.config.middlewares.set(W.a, Bt), t.initPromise = t.init(); t.pingCheckerInterval = setInterval(function() { var e = Date.now(); t.connections.forEach(function(n) { n.protocol instanceof V.a && !1 === n.listenerClosed && (n.isActivityTimeout(e, t.config.fatalLastActivityDelay) && n.closeListener.apply(n, (0, o.a)(G.a.ACTIVITY_TIMEOUT)), n.isPingTimeout(e, t.config.fatalPingDelay) && (t.banByPlayer(n, 6e4, G.a.PING_TIMEOUT[1]), n.closeListener.apply(n, (0, o.a)(G.a.PING_TIMEOUT)))); }); }, 3e3); var n = function() { var e; null === (e = t.world) || void 0 === e || e.calcBotDetection(), clearTimeout(t.botDetectionTimeout), t.botDetectionTimeout = setTimeout(n, 1e3); }; return n(), t; } return (0, h.a)(e, t), (0, u.a)(e, [ { key: "init", value: (l = (0, a.a)(d().mark(Xt)), function() { return l.apply(this, arguments); }) }, { key: "loadAssembly", value: (i = (0, a.a)(d().mark(ue)), function() { return i.apply(this, arguments); }) }, { key: "runTicker", value: le }, { key: "stop", value: fe }, { key: "new_connection", value: he }, { key: "on_disconnect", value: (r = (0, a.a)(d().mark(ve)), function(t) { return r.apply(this, arguments); }) }, { key: "onCloseConnection", value: de }, { key: "tests", value: (n = (0, a.a)(d().mark(pe)), function() { return n.apply(this, arguments); }) }, { key: "importSettings", value: ge }, { key: "verifyConnection", value: we }, { key: "checkIsBanned", value: me }, { key: "banByPlayer", value: be }, { key: "banByString", value: ke }, { key: "pardonAll", value: _e }, { key: "pardon", value: Ie } ]); var n, r, i, l; }((0, p.DebuggerMixin)(p.Eventify)); }, 82790: (t, e, n) => { "use strict"; n.d(e, { a: () => U }); var r = n(52500), i = n(72119), o = n(43394), a = n(852), s = n(61451), c = n(57473), u = n(91266), l = n(78396), f = n(58387), h = n.n(f), v = n(9036), d = n(21574); function p(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (t) { if ("string" == typeof t) return y(t, e); var n = {}.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function y(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (g = function() { return !!t; })(); } function w() { var t = this; return new Promise(function(e) { e(void 0), t.onOpen(); }); } function m() { var t, e = p(this.connections); try { for (e.s(); !(t = e.n()).done; ) { var n = t.value; n.closeListener.apply(n, (0, i.a)(d.a.LISTENER_SHUTDOWN)); } } catch (t) { e.e(t); } finally { e.f(); } console.log("js listener closed"); } function b() {} function k(t) { var e, n, r, i; function o() { i._send = b; } function a(t) { e({ data: t.buffer.slice(t.byteOffset, t.byteLength) }); } return h().wrap(function(s) { for (;;) switch (s.prev = s.next) { case 0: if (e = t.onmessage, n = t.onclose, r = t.fingerprint, i = this.server.new_connection(this)) { s.next = 1; break; } throw Error("Unknown Js Listener error");case 1: return this.connections.push(i), i.ip = "127.0.0.1", i.fp = r, i._close = n, i.once("close", this.onDisconnection), i.once("close", n), i.once("close", o), i._send = a, s.abrupt("return", i);case 2: case "end": return s.stop(); } }, k, this); } function (t) {for (;;) switch (t.prev = t.next) {case 0:case "end":return t.stop();}}function I(t, e, n) {return h().wrap(, I); } function S() {} var U = function(t) { function e(t) { var n, r, i, a; return (0, o.a)(this, e), r = this, i = e, a = [ t ], i = (0, c.a)(i), n = (0, s.a)(r, g() ? Reflect.construct(i, a || [], (0, c.a)(r).constructor) : i.apply(r, a)), (0, l.a)(n, "listenerSocket", new v.Eventify), (0, l.a)(n, "onDisconnection", function(t, e, r) { t.afterCloseFunction(e, r), n.log("close", socketData.ip, e, r), n.info("DISCONNECTION FROM (".concat(e, " '").concat(r, "')")), n.connections.splice(n.connections.indexOf(t), 1); }), n; } return (0, u.a)(e, t), (0, a.a)(e, [ { key: "open", value: w }, { key: "close", value: m }, { key: "onConnectRequest", value: (i = (0, r.a)(h().mark(k)), function(t) { return i.apply(this, arguments); }) }, { key: "verifyClient", value: (n = (0, r.a)(h().mark(I)), function(t, e, r) { return n.apply(this, arguments); }) }, { key: "onOpen", value: S } ]); var n, i; }(n(17963).a); }, 89116: (t, e, n) => { "use strict"; t.exports = n.p + "809ce700e5e7ce156b25.json"; }, 89699: (t, e, n) => { "use strict"; n.d(e, { a: () => z }); var r = n(89260), i = n(7794), o = n(85174), a = new ArrayBuffer(524288), s = new Uint8Array(a), c = new DataView(a), u = new TextEncoder; function l(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; this.view = t, this.offset = e; } function f(t) { this.view.setUint8(this.offset++, t); } function h(t) { for (var e = 0, n = t.length; e < n; e++) this.writeUInt8(t[e]); } function v(t) { this.view.setInt8(this.offset++, t); } function d(t) { this.view.setUint16(this.offset, t, this.le), this.offset += 2; } function p(t) { this.view.setInt16(this.offset, t, this.le), this.offset += 2; } function y(t) { this.writeUInt8((16711680 & t) >>> 16), this.writeUInt8((65280 & t) >>> 8), this.writeUInt8((255 & t) >>> 0); } function g(t) { this.view.setUint32(this.offset, t, this.le), this.offset += 4; } function w(t) { this.view.setInt32(this.offset, t, this.le), this.offset += 4; } function m(t) { this.view.setFloat32(this.offset, t, this.le), this.offset += 4; } function b(t) { this.view.setFloat64(this.offset, t, this.le), this.offset += 8; } function k(t) { for (;t > 127; ) this.writeUInt8(127 & t | 128), t >>>= 7; this.writeUInt8(t); } function _(t) { return (t << 1 ^ t >> 31) >>> 0; } function I(t) { var e = this.encodeZigZag32(t); this.writeVarUInt(e); } function S(t) { for (var e = 0; e < t.length; e++) this.writeUInt8(t.charCodeAt(e)); } function U(t) { this.writeUTF8String(t), this.writeUInt8(0); } function x(t) { t.length > 255 && (t = t.substring(0, 255)), this.writeUInt8(t.length), this.writeUTF8String(t); } function C(t) { for (var e = 0; e < t.length; e++) this.writeUInt16(t.charCodeAt(e)); } function P(t) { this.writeUTF16String(t), this.writeUInt16(0); } function A(t) { t.length > 255 && (t = t.substring(0, 255)), this.writeUInt8(t.length), this.writeUTF16String(t); } function T(t) { var e = u.encode(t); s.set(e, this.offset), this.offset += e.byteLength; } function E(t) { var e = u.encodeInto(t, s.subarray(this.offset)); return this.offset += e.written, this.writeUInt8(0), e.written; } function D(t) { t.length > 255 && (t = t.substring(0, 255)); var e = u.encode(t); e.byteLength > 255 && (e = e.subarray(0, 255)), this.writeUInt8(e.byteLength), s.set(e, this.offset), this.offset += e.byteLength; } function O() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; this.offset += t; } function B() { return new Uint8Array(this.view.buffer.slice(0, this.offset)); } function M() { return s.subarray(0, this.offset); } function R() { return s.subarray(0, this.offset); } function L(t) { for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.byteOffset, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.byteLength, r = e; r < n; r++) t.setUint8(r, 128 ^ t.getUint8(r)); return t; } var z = function() { return (0, i.a)(function t() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; (0, r.a)(this, t), (0, o.a)(this, "view", void 0), (0, o.a)(this, "offset", 0), (0, o.a)(this, "le", !0), this.offset = 0, this.le = e, this.view = c; }, [ { key: "setView", value: l }, { key: "writeUInt8", value: f }, { key: "writeBytes", value: h }, { key: "writeInt8", value: v }, { key: "writeUInt16", value: d }, { key: "writeInt16", value: p }, { key: "writeUInt24", value: y }, { key: "writeUInt32", value: g }, { key: "writeInt32", value: w }, { key: "writeFloat32", value: m }, { key: "writeFloat64", value: b }, { key: "writeVarUInt", value: k }, { key: "encodeZigZag32", value: _ }, { key: "writeVarInt", value: I }, { key: "writeUTF8String", value: S }, { key: "writeUTF8StringZero", value: U }, { key: "writeUTF8StringLength", value: x }, { key: "writeUTF16String", value: C }, { key: "writeUTF16StringZero", value: P }, { key: "writeUTF16StringLength", value: A }, { key: "writeZTString", value: T }, { key: "writeZTStringZero", value: E }, { key: "writeZTStringShort", value: D }, { key: "skip", value: O }, { key: "slice", value: B }, { key: "finalize", value: M }, { key: "toBuffer", value: R }, { key: "xor", value: L } ]); }(); }, 92198: (t, e, n) => { "use strict"; t.exports = n.p + "256ed3745832af283f2c.wasm"; }, 95413: (t, e, n) => { "use strict"; n.d(e, { a: () => s, b: () => I }); var r = n(43394), i = n(852), o = n(78396); function a(t, e) { this.x = t, this.y = e; } var s = function() { return (0, i.a)(function t(e, n, i, a) { (0, r.a)(this, t), (0, o.a)(this, "x", 0), (0, o.a)(this, "y", 0), (0, o.a)(this, "w", 0), (0, o.a)(this, "h", 0), this.x = e, this.y = n, this.w = i, this.h = a; }, [ { key: "setPosition", value: a } ]); }(), c = function(t, e) { return t.x - t.w <= e.x + e.w && t.x + t.w >= e.x - e.w && t.y - t.h <= e.y + e.h && t.y + t.h >= e.y - e.h; }, u = function(t, e) { return t.x - t.w >= e.x + e.w && t.x + t.w <= e.x - e.w && t.y - t.h >= e.y + e.h && t.y + t.h <= e.y - e.h; }, l = function(t, e) { return { t: t.y - t.h < e.y || t.y + t.h < e.y, b: t.y - t.h > e.y || t.y + t.h > e.y, l: t.x - t.w < e.x || t.x + t.w < e.x, r: t.x - t.w > e.x || t.x + t.w > e.x }; }, f = function(t, e) { return { t: t.y - t.h < e.y && t.y + t.h < e.y, b: t.y - t.h > e.y && t.y + t.h > e.y, l: t.x - t.w < e.x && t.x + t.w < e.x, r: t.x - t.w > e.x && t.x + t.w > e.x }; }; function h() { for (var t = 0, e = this.items.length; t < e; t++) delete this.items[t].__root; if (this.items.length = 0, this.hasSplit) for (var n = 0; n < 4; n++) this.branches[n].destroy(); } function v(t) { for (var e = this; e.hasSplit; ) { var n = e.getQuadrant(t.range); if (-1 === n) break; e = e.branches[n]; } t.__root = e, e.items.push(t), e.split(); } function d(t) { for (var e = t.__root, n = t.__root; n.root && (n = n.root, !u(n.range, t.range)); ) ; for (;n.hasSplit; ) { var r = n.getQuadrant(t.range); if (-1 === r) break; n = n.branches[r]; } e !== n && (e.items.splice(e.items.indexOf(t), 1), n.items.push(t), t.__root = n, e.merge(), n.split()); } function p(t) { var e = t.__root; e.items.splice(e.items.indexOf(t), 1), delete t.__root, e.merge(); } function y() { for (var t = this; null != t; ) if (t.hasSplit) { for (var e, n = 0; n < 4; n++) if ((e = t.branches[n]).hasSplit || e.items.length > 0) return; t.hasSplit = !1, delete t.branches; } else t = t.root; } function g(t, e) { for (var n, r = 0, i = this.items.length; r < i; r++) c(t, (n = this.items[r]).range) && e(n); if (this.hasSplit) { var o = l(t, this.range); o.t && (o.l && this.branches[0].search(t, e), o.r && this.branches[1].search(t, e)), o.b && (o.l && this.branches[2].search(t, e), o.r && this.branches[3].search(t, e)); } } function w(t, e) { for (var n, r = 0, i = this.items.length; r < i; r++) if (c(t, (n = this.items[r]).range) && (!e || e(n))) return !0; if (!this.hasSplit) return !1; var o = l(t, this.range); if (o.t) { if (o.l && this.branches[0].containsAny(t, e)) return !0; if (o.r && this.branches[1].containsAny(t, e)) return !0; } if (o.b) { if (o.l && this.branches[2].containsAny(t, e)) return !0; if (o.r && this.branches[3].containsAny(t, e)) return !0; } return !1; } function m() { return this.hasSplit ? this.items.length + this.branches[0].getItemCount() + this.branches[1].getItemCount() + this.branches[2].getItemCount() + this.branches[3].getItemCount() : this.items.length; } function b() { return this.hasSplit ? 1 + this.branches[0].getBranchCount() + this.branches[1].getBranchCount() + this.branches[2].getBranchCount() + this.branches[3].getBranchCount() : 1; } function k() { var t = "items ".concat(this.items.length, "/").concat(this.maxItems, "/").concat(this.getItemCount(), " level ").concat(this.level, " x ").concat(this.range.x, " y ").concat(this.range.y, " w ").concat(this.range.w, " h ").concat(this.range.h, "\n"); return this.hasSplit && (t += new Array(1 + 2 * this.level).join(" ") + this.branches[0].debugStr(), t += new Array(1 + 2 * this.level).join(" ") + this.branches[1].debugStr(), t += new Array(1 + 2 * this.level).join(" ") + this.branches[2].debugStr(), t += new Array(1 + 2 * this.level).join(" ") + this.branches[3].debugStr()), t; } function _(t) { var e = f(t, this.range); if (e.t) { if (e.l) return 0; if (e.r) return 1; } if (e.b) { if (e.l) return 2; if (e.r) return 3; } return -1; } const I = function() { function t(e, n, i, a) { (0, r.a)(this, t), (0, o.a)(this, "root", void 0), (0, o.a)(this, "level", void 0), (0, o.a)(this, "maxLevel", void 0), (0, o.a)(this, "maxItems", void 0), (0, o.a)(this, "range", void 0), (0, o.a)(this, "items", void 0), (0, o.a)(this, "hasSplit", void 0), (0, o.a)(this, "branches", void 0), a && (this.root = a), this.level = a ? a.level + 1 : 1, this.maxLevel = n, this.maxItems = i, this.range = e, this.items = [], this.hasSplit = !1; } return (0, i.a)(t, [ { key: "destroy", value: h }, { key: "insert", value: v }, { key: "update", value: d }, { key: "remove", value: p }, { key: "split", value: function() { if (!(this.hasSplit || this.level > this.maxLevel || this.items.length < this.maxItems)) { this.hasSplit = !0; var e = this.range.x, n = this.range.y, r = this.range.w / 2, i = this.range.h / 2; this.branches = [ new t({ x: e - r, y: n - i, w: r, h: i }, this.maxLevel, this.maxItems, this), new t({ x: e + r, y: n - i, w: r, h: i }, this.maxLevel, this.maxItems, this), new t({ x: e - r, y: n + i, w: r, h: i }, this.maxLevel, this.maxItems, this), new t({ x: e + r, y: n + i, w: r, h: i }, this.maxLevel, this.maxItems, this) ]; for (var o, a = 0, s = this.items.length; a < s; a++) -1 !== (o = this.getQuadrant(this.items[a].range)) && (delete this.items[a].__root, this.branches[o].insert(this.items[a]), this.items.splice(a, 1), a--, s--); } } }, { key: "merge", value: y }, { key: "search", value: g }, { key: "containsAny", value: w }, { key: "getItemCount", value: m }, { key: "getBranchCount", value: b }, { key: "debugStr", value: k }, { key: "getQuadrant", value: _ } ]); }(); }, 95438: (t, e, n) => { "use strict"; n.d(e, { a: () => T }); var r = n(72119), i = n(52500), o = n(43394), a = n(852), s = n(61451), c = n(57473), u = n(91266), l = n(78396), f = n(58387), h = n.n(f), v = n(9036), d = n(95846), p = n.n(d), y = n(21574), g = n(17963); function w(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (t) { if ("string" == typeof t) return m(t, e); var n = {}.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0; } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function() {}; return { s: i, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function(t) { throw t; }, f: i }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a Symbol.iterator method."); } var o, a = !0, s = !1; return { s: function() { n = n.call(t); }, n: function() { var t = n.next(); return a = t.done, t; }, e: function(t) { s = !0, o = t; }, f: function() { try { a || null == n.return || n.return(); } finally { if (s) throw o; } } }; } function m(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]; return r; } function b() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); } catch (t) {} return (b = function() { return !!t; })(); } Object.assign(globalThis, { SimplePeer: p() }); var k = new v.WebTorrent("wss://tracker.webtorrent.dev"); function _() {} function I() { var t = this, e = new v.MicroPeer({ info_hash: this.info_hash }, k); function n(e, n, r) { t.onDisconnection(e, n, r); } function o(e) { var i; function a() { i.afterCloseFunction.apply(i, (0, r.a)(y.a.CLOSED_BY_RTCDATACHANNEL)), t.onDisconnection.apply(t, [ i ].concat((0, r.a)(y.a.CLOSED_BY_RTCDATACHANNEL))); } function s() { i._send = _, e.destroy(); } function c(t) { if ("open" === e._channel.readyState) { var n = new Uint8Array(t, 0, t.byteLength); e.send(n); } } return h().wrap(function(r) { for (;;) switch (r.prev = r.next) { case 0: if (i = t.server.new_connection(t)) { r.next = 1; break; } return r.abrupt("return", console.log("Server is full"));case 1: t.connections.push(i), e.on("data", i.onSocketMessage.bind(i)), e.once("close", a), i._close = s, i._send = c, i.once("close", n);case 2: case "end": return r.stop(); } }, o); } return this.micropeer = e, this.log("Rtc opened", "hash://" + this.info_hash), e.on("connect", function() { var t = (0, i.a)(h().mark(o)); return function(e) { return t.apply(this, arguments); }; }()), e.announce({}), e.socket.once("open", function() { t.log("Webtorrent relay opened"), e.announce({ event: "started", downloaded: 705581, numwant: 0, uploaded: 0, left: void 0 }); }), e.on("announceinterval", function() { e.announce({ event: "started", downloaded: 705581, numwant: 0, uploaded: 0, left: void 0 }); }), new Promise(function(e) { t.onOpen(), e(); }); } function S() { var t, e = w(this.connections); try { for (e.s(); !(t = e.n()).done; ) { var n = t.value; n.closeListener.apply(n, (0, r.a)(y.a.LISTENER_SHUTDOWN)); } } catch (t) { e.e(t); } finally { e.f(); } this.micropeer = null, this.log("Closed"); } function U() {} function x(t) { var e, n, r; function i() { r._send = U; } function o(t) { e({ data: t.buffer.slice(t.byteOffset, t.byteLength) }); } return h().wrap(function(a) { for (;;) switch (a.prev = a.next) { case 0: if (e = t.onmessage, n = t.onclose, r = this.server.new_connection(this)) { a.next = 1; break; } return a.abrupt("return", this.log("Server is full"));case 1: return this.connections.push(r), r.once("close", this.onDisconnection), r.once("close", n), r.once("close", i), r._send = o, a.abrupt("return", r);case 2: case "end": return a.stop(); } }, x, this); } function C(t) { for (;;) switch (t.prev = t.next) { case 0: case "end": return t.stop(); } } function P() { return h().wrap(C, P); } function A() { this.log("Opened"); } var T = function(t) { function e(t) { var n, r, i, a, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0e923e47688b443cbc58"; return (0, o.a)(this, e), r = this, i = e, a = [ t ], i = (0, c.a)(i), n = (0, s.a)(r, b() ? Reflect.construct(i, a || [], (0, c.a)(r).constructor) : i.apply(r, a)), (0, l.a)(n, "info_hash", void 0), (0, l.a)(n, "listenerSocket", new v.Eventify), (0, l.a)(n, "micropeer", null), (0, l.a)(n, "onDisconnection", function(t, e, r) { n.log("DISCONNECTION FROM (".concat(e, " '").concat(r, "')")), n.connections.splice(n.connections.indexOf(t), 1); }), n.info_hash = u, n.setPrefix("[[33mRTC Listener[39m]:"), n; } return (0, u.a)(e, t), (0, a.a)(e, [ { key: "open", value: I }, { key: "close", value: S }, { key: "onConnectRequest", value: (r = (0, i.a)(h().mark(x)), function(t) { return r.apply(this, arguments); }) }, { key: "verifyClient", value: (n = (0, i.a)(h().mark(P)), function() { return n.apply(this, arguments); }) }, { key: "onOpen", value: A } ]); var n, r; }(g.a); }, 95974: (t, e, n) => { "use strict"; t.exports = n.p + "9b330cb3f615a5d15556.json"; }, 98408: () => {} } ]);
