"use strict";

(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 605 ], {
52605(a, e, t) {
t.r(e), t.d(e, {
default: () => ta
});
var i = t(5223), r = t(51091), s = t(46788), l = t(59296), o = t(11495), n = t(98654), h = t(59595), c = t(98152), v = t(94429), u = t(73299), g = t(60123), d = t(97920), m = t(40337), f = t(98949);
function w(a, e) {
var t = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
if (!t) {
if (Array.isArray(a) || (t = function(a, e) {
if (a) {
if ("string" == typeof a) return p(a, e);
var t = {}.toString.call(a).slice(8, -1);
return "Object" === t && a.constructor && (t = a.constructor.name), "Map" === t || "Set" === t ? Array.from(a) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? p(a, e) : void 0;
}
}(a)) || e && a && "number" == typeof a.length) {
t && (a = t);
var i = 0, r = function() {};
return {
s: r,
n: function() {
return i >= a.length ? {
done: !0
} : {
done: !1,
value: a[i++]
};
},
e: function(a) {
throw a;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var s, l = !0, o = !1;
return {
s: function() {
t = t.call(a);
},
n: function() {
var a = t.next();
return l = a.done, a;
},
e: function(a) {
o = !0, s = a;
},
f: function() {
try {
l || null == t.return || t.return();
} finally {
if (o) throw s;
}
}
};
}
function p(a, e) {
(null == e || e > a.length) && (e = a.length);
for (var t = 0, i = Array(e); t < e; t++) i[t] = a[t];
return i;
}
function b(a, e, t) {
return e = (0, l.a)(e), (0, s.a)(a, y() ? Reflect.construct(e, t || [], (0, l.a)(a).constructor) : e.apply(a, t));
}
function y() {
try {
var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (a) {}
return (y = function() {
return !!a;
})();
}
function x() {
var a = this;
function e() {
a.dirtyResize = !0;
}
1 != this.initialized && (this.initialized = !0, this.setCanvas(), this.setRainbowCanvas(), 
this.listenTo(this.stage, "resize", function() {
a.dirtyResize || m.b.once(m.a.UPDATE, e);
})(), this.listenTo(u.a, "antialiasing", function() {
a.initialized && a.setCanvasAntialiasing(Number(u.a.raw.antialiasing.value));
}), this.listenTo(this.stage, "render", function(e) {
return a.render(e);
}));
}
function C() {
this.emit("destroy"), this.initialized, this.unlisten(), this.canvas.parentElement.removeChild(this.canvas);
}
function S(a) {
return a.preventDefault();
}
function k() {
this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d", {
antialias: !1
}), document.querySelector("#app_canvas").appendChild(this.canvas), this.canvas.classList.add("canvas"), 
this.canvas.addEventListener("contextmenu", S);
}
function T() {
var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
this.canvas.style.imageRendering = a ? "" : "pixelated";
}
function A() {
var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
if (void 0 !== (a = Number(a))) switch (this.ctx.imageSmoothingEnabled = !0, a) {
case 0:
this.ctx.imageSmoothingEnabled = !1, this.ctx.imageSmoothingQuality = "low", this.setCanvasSmoothing(!1);
break;

case 1:
this.ctx.imageSmoothingQuality = "low", this.setCanvasSmoothing(!0);
break;

case 2:
this.ctx.imageSmoothingQuality = "medium", this.setCanvasSmoothing(!0);
break;

case 3:
this.ctx.imageSmoothingQuality = "high", this.setCanvasSmoothing(!0);
break;

case 4:
this.ctx.imageSmoothingQuality = "high", this.setCanvasSmoothing(!1);
}
}
function M(a, e, t, i) {
this.canvas.width = a, this.canvas.height = e, this.canvas.style.width = t + "px", 
this.canvas.style.height = i + "px";
}
function z(a, e, t, i) {}
function B(a, e, t, i, r, s) {
if (i >= .1) {
var l = e / i, o = t / i, n = (l / 2 - r) % 50, h = (o / 2 - s) % 50;
for (a.lineWidth = 1, a.globalAlpha = i >= .1 ? 1 * i - .1 : 0, a.strokeStyle = u.b.raw.gridColor.string, 
a.beginPath(); n < l; n += 50) a.moveTo(n * i - .5, 0), a.lineTo(n * i - .5, o * i);
for (;h < o; h += 50) a.moveTo(0, h * i - .5), a.lineTo(l * i, h * i - .5);
a.stroke(), a.globalAlpha = 1;
}
}
function R(a, e, t, i, r, s, l, o) {
a.strokeStyle = l, a.lineWidth = o, a.fillStyle = "white", a.font = "100px sans-serif", 
a.textAlign = "end", a.textBaseline = "hanging", a.beginPath(), a.moveTo(t, i), 
a.lineTo(r, i), a.lineTo(r, s), a.lineTo(t, s), a.closePath(), a.stroke(), a.fillText(e, r, i);
}
function P() {
for (var a = this.stage.waves, e = a.length; e--; ) {
var t = a[e];
if (!(t.delta < 1 || t.alpha <= 0)) {
var i = t.animSize, r = 255 & t.colorInt, s = t.colorInt >>> 8 & 255, l = t.colorInt >>> 16 & 255;
this.ctx.globalAlpha = t.alpha;
var o = this.ctx.createRadialGradient(t.x, t.y, .7 * i, t.x, t.y, i);
o.addColorStop(0, "rgba(".concat(r, ",").concat(s, ",").concat(l, ",0)")), o.addColorStop(1, "rgba(".concat(r, ",").concat(s, ",").concat(l, ",1)")), 
this.ctx.fillStyle = o, this.ctx.beginPath(), this.ctx.arc(t.x, t.y, i, 0, this.pi2, !0), 
this.ctx.closePath(), this.ctx.fill();
}
}
this.ctx.globalAlpha = 1;
}
function _(a, e, t, i, r, s, l, o, n, h, c, v) {
if (e) {
var g = ~~((l - r) / t), d = ~~((o - s) / i), m = 0, f = 0;
if (a.strokeStyle = n, a.fillStyle = h, a.lineWidth = c, v || !v && u.a.raw.showMiniMapGrid.value) {
a.beginPath();
for (var w = 0; w < t + 1; w++) m = r + g * w, a.moveTo(w == t ? l : m, s), a.lineTo(w == t ? l : m, o);
for (var p = 0; p < i + 1; p++) f = s + d * p, a.moveTo(r - c / 2, p == i ? o : f), 
a.lineTo(l + c / 2, p == i ? o : f);
a.stroke();
} else this.drawMapBorders(a, e, r, s, l, o, n, c);
a.font = u.b.raw.sectorsfont.fontWeight + " " + u.b.raw.sectorsfontSize.value + "px " + u.b.raw.sectorsfont.fontFamily, 
a.textAlign = "center", a.textBaseline = "middle";
for (var b = 0; b < i; b++) for (var y = 0; y < t; y++) if (this.stage.boxInDisplay(r + y * g, s + b * d, g, d)) {
var x = u.a.raw.customBgSectorsSymbol.value || String.fromCharCode(65 + b) + (y + 1);
m = ~~(r + g / 2 + y * g), f = ~~(s + d / 2 + b * d), a.fillText(x, m, f);
}
}
}
function I(a, e, t, i, r, s, l, o) {
a.strokeStyle = l, a.lineWidth = o, a.beginPath(), a.moveTo(t, i), a.lineTo(r, i), 
a.lineTo(r, s), a.lineTo(t, s), a.closePath(), a.stroke();
}
function E(a, e) {
if (e && e.length) {
a.beginPath();
for (var t = 0; t < e.length; t++) {
var i = e[t].x, r = e[t].y, s = e[t].size + 820;
a.moveTo(i, r), a.arc(i, r, s, 0, 2 * Math.PI, !1);
}
a.fillStyle = u.b.raw.virusRangeColor.string, a.globalAlpha = .1, a.fill(), a.globalAlpha = 1;
}
}
function W(a, e, t, i, r, s, l, o, n) {
var h = this.app.getActiveTab();
if (h.battleRoyale.state) {
var c = (h.battleRoyale.x + s) * o, v = (h.battleRoyale.y + l) * n, g = h.battleRoyale.radius * o;
this.drawDangerArea(a, c, v, g, e, t, i, r, u.b.raw.dangerAreaColor.string, .25), 
c = ~~((h.battleRoyale.targetX + s) * o), v = ~~((h.battleRoyale.targetY + l) * n), 
g = ~~(h.battleRoyale.targetRadius * o), this.drawSafeArea(a, c, v, g, 20, u.b.raw.safeAreaColor.string);
}
}
function H(a, e, t, i, r, s, l, o, n, h) {
var c = this.app.getActiveTab();
c.battleRoyale.radius == c.battleRoyale.maxRadius || i <= 0 || (a.save(), a.globalAlpha = h, 
a.fillStyle = n, a.fillRect(r, s, l, o), a.globalCompositeOperation = "destination-out", 
a.globalAlpha = 1, a.beginPath(), a.arc(e, t, i, 0, this.pi2, !1), a.fill(), a.restore());
}
function V(a, e, t, i, r, s) {
this.app.getActiveTab().battleRoyale.state > 2 || i <= 0 || this.drawDashedCircle(a, e, t, i, 60, r, s);
}
function F(a, e, t, i, r, s, l) {
var o = this.pi2 / r;
a.lineWidth = s, a.strokeStyle = l;
for (var n = 0; n < r; n += 2) a.beginPath(), a.arc(e, t, i - s / 2, n * o, (n + 1) * o, !1), 
a.stroke();
}
function D(a) {
if (u.a.raw.showGhostCells.value) {
this.ctx.beginPath();
for (var e = 0, t = a.length; e < t; e++) if (!a[e].inView) {
var i = a[e].x, r = a[e].y;
this.stage.isInDisplay(i, r, a[e].size) && (this.ctx.moveTo(i, r), this.ctx.arc(i, r, a[e].size, 0, this.pi2, !1));
}
this.ctx.fillStyle = u.b.raw.ghostCellsColor.string, this.ctx.globalAlpha = u.b.raw.ghostCellsColor.microcolor.vector[3], 
this.ctx.shadowColor = u.b.raw.ghostCellsColor.microcolor.string, this.ctx.shadowBlur = 40, 
this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.fill(), this.ctx.globalAlpha = 1, 
this.ctx.shadowBlur = 0;
for (var s = 0, l = a.length; s < l; s++) if (!a[s].inView) {
var o = a[s].x, n = a[s].y;
if (this.stage.isInDisplay(o, n, a[s].size) && u.a.raw.ghostCellsNames.value) {
var h = g.a.nick(a[s].size, this.stage.scale, u.b.raw.namesScale.value, a[s].name);
if (h) {
var c = h.originW * a[s].size * u.b.raw.namesScale.value, v = h.originH * a[s].size * u.b.raw.namesScale.value;
this.ctx.drawImage(h.canvas, o - (c >> 1), n - (v >> 1), c, v);
}
}
}
}
}
function Y(a, e, t, i) {
var r, s = this.app.unitManager.activeUnit, l = this.ctx, o = a.alpha, h = a.size, c = 0, m = 0, f = 0;
a.strokeColor;
if (this.stage.scale > .44 ? (c = a.type === n.c.Type.food ? a.size + u.b.raw.foodSize.value : a.size, 
f = a.x, m = a.y) : (c = a.type === n.c.Type.food ? a.size + u.b.raw.foodSize.value : ~~a.size, 
m = ~~a.y, f = ~~a.x), l.beginPath(), !a.removed && u.a.raw.jellyPhysics.value && a.points && a.points.length) {
var w = a.points[0];
l.moveTo(w.x, w.y);
for (var p = 0; p < a.points.length; ++p) w = a.points[p], l.lineTo(w.x, w.y);
l.closePath();
} else if (a.type === n.c.Type.virus && (u.a.raw.spikedViruses.value || u.a.raw.jellyPhysics.value)) {
var b = this.pi2 / 100;
l.moveTo(a.x, a.y + a.size + 3);
for (var y = 1; y < 100; y++) {
var x = y * b, C = a.size - 3 + 6 * (y % 2 == 0 ? 1 : 0);
l.lineTo(a.x + C * Math.sin(x), a.y + C * Math.cos(x));
}
l.lineTo(a.x, a.y + a.size + 3), l.closePath();
} else l.arc(f, m, c, 0, this.pi2, !0);
if (a.type === n.c.Type.food) l.fillStyle = a.color, l.globalAlpha = o, l.fill(); else if (a.type === n.c.Type.virus) {
if (u.a.raw.virColors.value && (null == t ? void 0 : t.play) ? (l.fillStyle = this.setVirusColor(a.size, t).toRgb(!0), 
l.strokeStyle = this.setVirusStrokeColor(a.size, t).toRgb()) : a.size <= 147 ? (l.fillStyle = u.b.raw.virusColor.string, 
l.strokeStyle = u.b.raw.virusStrokeColor.string) : (l.fillStyle = u.b.raw.mothercellColor.string, 
l.strokeStyle = u.b.raw.mothercellStrokeColor.string), l.globalAlpha = o, l.fill(), 
l.lineWidth = u.b.raw.virusStrokeSize.value, l.stroke(), 0 === u.a.raw.virMassType.value) ; else if (3 === u.a.raw.virMassType.value && a.size < 148) {
var S = 3 * (a.size - 100);
S > 0 && (l.fillStyle = l.strokeStyle, l.beginPath(), l.arc(a.x, a.y, S, 0, this.pi2, !0), 
l.closePath(), l.fill());
} else {
var k = ~~(a.targetSize * a.targetSize / 100), T = g.a.mass(a.id, a.size, this.stage.scale, u.b.raw.virMassScale.value, 2 === u.a.raw.virMassType.value && k < 200 ? this.calcVirusShots(k) : k, !0);
if (T) {
var A = T.originW * a.size * u.b.raw.virMassScale.value, M = T.originH * a.size * u.b.raw.virMassScale.value;
l.drawImage(T, ~~(a.x - (A >> 1)), ~~(a.y - (M >> 1)), ~~A, ~~M);
}
}
l.globalAlpha = this.startAlpha;
} else {
l.globalAlpha = o;
var z, B = a.isPlayerCell || null !== a.playerOriginUnit, R = a.color;
if (B || (null == t ? void 0 : t.play) && a.oppColor && u.a.raw.oppColors.value && !u.a.raw.oppRings.value && (R = a.oppColor.string), 
v.i.showAnySkins) {
if (u.a.raw.vanillaSkins.value && a.player) {
var P = a.player;
P.hasVanillaNamedSkin ? z = d.a.getVanillaSkin(P.nameSkin) : P.hasVanillaCustomSkin ? z = d.a.getVanillaCustomSkin(P.skin) : P.hasUrlSkin ? z = d.a.getUrlSkin(P.skin) : P.skin && (z = d.a.getVanillaSkin(P.skin));
}
if (u.a.raw.customSkins.value && a.player) {
var _ = d.a.getCustomSkin(a.player.name, a.colorInt);
_ && (z = _, _.move(0));
}
var I = null == z ? void 0 : z.image, E = 1;
I && (E = u.b.raw.skinsAlpha.value, (null == t ? void 0 : t.play) && u.a.raw.oppColors.value && !B && (E = u.b.raw.skinsAlpha.value)), 
(!I || I && E < 1 || I && z.skinAlpha < this.minimumSkinAlpha) && (l.fillStyle = R, 
1 !== u.b.raw.cellsAlpha.value ? l.globalAlpha = o * u.b.raw.cellsAlpha.value : l.globalAlpha = o, 
l.fill(), l.globalAlpha = o), I && z.skinAlpha >= this.minimumSkinAlpha && (l.globalAlpha = o * E, 
u.a.raw.jellyPhysics.value && a.points && a.points.length ? (l.save(), l.clip(), 
l.drawImage(z.image, 0, 0, 512, 512, a.x - h, a.y - h, 2 * h, 2 * h), l.restore()) : l.drawImage(z.image, f - c, m - c, 2 * c, 2 * c), 
l.globalAlpha = o);
} else 1 !== u.b.raw.cellsAlpha.value && (l.globalAlpha = o * u.b.raw.cellsAlpha.value), 
l.fillStyle = R, l.fill();
if (l.globalAlpha = o, u.a.raw.cellStroke.value && a.size > 20 && (u.a.raw.cellStrokePlayer.value && B ? (1 !== u.b.raw.cellsAlpha.value && (l.globalAlpha = o * u.b.raw.cellsAlpha.value), 
l.strokeStyle = z && z.skinAlpha >= this.minimumSkinAlpha ? z.skinColorStrokeString : a.strokeColor, 
l.lineWidth = Math.min(Math.max(~~(a.size / 50), 4), 4), l.stroke(), l.strokeStyle = "#FEB201", 
l.lineWidth = Math.min(Math.max(~~(a.size / 50), 2), 2), l.stroke(), l.strokeStyle = "#FFF906", 
l.lineWidth = Math.min(Math.max(~~(a.size / 50), 1), 1), l.stroke()) : a.removed || (1 !== u.b.raw.cellsAlpha.value && (l.globalAlpha = o * u.b.raw.cellsAlpha.value), 
l.strokeStyle = z && z.skinAlpha >= this.minimumSkinAlpha ? z.skinColorStrokeString : a.strokeColor, 
l.lineWidth = Math.min(Math.max(~~(a.size / 50), 8), 8) / ((null == z ? void 0 : z.image) ? 2 : 1), 
l.stroke())), u.a.raw.teammatesInd.value && !a.isPlayerCell && c <= 200 && a.player && d.a.customSkinMap.has(a.player.name) && this.drawTeammatesInd(l, f, m, ~~c), 
u.a.raw.mbRings.value && B && i && t) {
var W = c / 100 * u.b.raw.mbRingWidth.value;
l.lineWidth = W, l.strokeStyle = s === a.playerOriginUnit ? u.b.raw.mboxActiveCellStroke.string : u.b.raw.mboxUnactiveCellStroke.string, 
l.beginPath(), l.arc(f, m, c - W / 2, 0, this.pi2, !0), l.closePath(), l.stroke();
}
if (u.a.raw.mergeIndicator.value && t === a.playerOriginUnit) {
a.calcMerge();
var H = a.mergeTimeLeft / a.cellMergeFull * 2;
if (H >= 0) {
var V = Math.PI * (2 - H + 1.5), F = 3.5 * Math.PI, D = c / 100 * 15;
l.lineCap = "round", l.lineWidth = D, l.strokeStyle = u.b.raw.mergeIndicatorColor.string, 
l.beginPath(), l.arc(a.x, a.y, c - .5 * D, F, V, !0), l.stroke(), l.closePath(), 
l.lineCap = "square";
}
}
var Y = this.setAutoHideCellInfoNick(c), X = this.setAutoHideCellInfoMass(c);
if (Y && X || c <= 40 || a.type == n.c.Type.virus) ; else {
l.globalAlpha = o;
var O = 0 === u.a.raw.textScaleMode.value ? a.targetSize : c;
if (!Y && u.a.raw.showNames.value && (!B || !u.a.raw.hideMyName.value) && (!z || !u.a.raw.hideTeammatesNames.value)) {
var N = g.a.nick(c, this.stage.scale, u.b.raw.namesScale.value, (null === (r = a.player) || void 0 === r ? void 0 : r.name) || "");
if (N) {
var U = N.originW * O * u.b.raw.namesScale.value, G = N.originH * O * u.b.raw.namesScale.value;
l.drawImage(N.canvas, f - U / 2, m - G / 2, U, G);
}
}
if (!X && u.a.raw.showMass.value && (!B || !u.a.raw.hideMyMass.value) && (!u.a.raw.hideEnemiesMass.value || B)) {
var L = g.a.mass(a.id, a.size, this.stage.scale, u.b.raw.namesScale.value, u.a.raw.shortMass.value ? this.shortMassFormat(O * O / 100) : ~~(O * O / 100), !1);
if (L) {
var q = L.originW * O * u.b.raw.massScale.value / 2, j = L.originH * O * u.b.raw.massScale.value / 2, Q = !u.a.raw.showNames.value || B && u.a.raw.hideMyName.value ? m - j / 2 : c / 4 + m;
l.drawImage(L, f - q / 2, Q, q, j);
}
}
}
l.globalAlpha = this.startAlpha;
}
}
function X(a, e, t) {
if (e.foods.length) {
var i = e.foods, r = ~~(10 + u.b.raw.foodSize.value);
if (a.beginPath(), a.fillStyle = u.b.raw.foodColor.string, a.globalAlpha = 1, this.stage.scale > .16) for (var s = 0, l = i.length; l > s; s++) {
var o = i[s];
this.stage.reverseCheckView(o, t) || (a.moveTo(o.targetX, o.targetY), a.arc(o.targetX, o.targetY, r, 0, this.pi2, !1));
} else for (var n = 0, h = i.length; h > n; n++) {
var c = i[n];
this.stage.reverseCheckView(c, t) || a.rect(~~c.targetX - r, ~~c.targetY - r, r << 1, r << 1);
}
a.closePath(), a.fill();
}
}
function O(a, e, t) {
if (e.foods.length) {
var i = e.foods, r = ~~(10 + u.b.raw.foodSize.value);
if (a.globalAlpha = 1, this.stage.scale > .16) for (var s = 0, l = i.length; l > s; s++) {
var o = i[s];
this.stage.reverseCheckView(o, t) || (a.beginPath(), a.fillStyle = o.color, a.moveTo(o.targetX, o.targetY), 
a.arc(o.targetX, o.targetY, r, 0, this.pi2, !1), a.closePath(), a.fill());
} else for (var n = 0, h = i.length; h > n; n++) {
var c = i[n];
this.stage.reverseCheckView(c, t) || (a.beginPath(), a.fillStyle = c.color, a.rect(~~c.targetX - r, ~~c.targetY - r, r << 1, r << 1), 
a.closePath(), a.fill());
}
}
}
function N(a, e) {
return a.mass > e.mass ? a : e;
}
function U(a, e) {
if (a && u.a.raw.showFood.value && !(u.a.raw.autoHideFoodOnZoom.value && this.stage.scale < .2)) {
if (u.a.raw.autoHideFood.value && a.unitManager.units.length) if (a.unitManager.units.reduce(N).mass > 1e3) return;
if (u.a.raw.rainbowFood.value) {
for (var t = 0, i = a.foods.length; t < i; t++) this.drawCell(a.foods[t], void 0, a.unitManager.activeUnit, !1);
var r, s = w(this.stage.removedPelletsSet);
try {
for (s.s(); !(r = s.n()).done; ) {
var l = r.value;
l.c.TYPE !== h.b.Type.REGION && this.drawCell(l, void 0, a.unitManager.activeUnit, !1);
}
} catch (a) {
s.e(a);
} finally {
s.f();
}
} else this.drawCachedFood(this.ctx, a, e);
}
}
function G(a, e, t) {
for (var i = [ e.biggerHSTECellsCache, e.biggerDSTECellsCache, e.biggerSTECellsCache ], r = 0; r < i.length; r++) this.drawCircles(a, i[r], 760, 4, .4, u.b.raw.bSTEColor.string, 1);
var s = e.cells;
if (s.length) {
var l = t ? s.length - 1 : 0;
a.lineWidth = 6, a.globalAlpha = u.b.raw.darkTheme.value ? .7 : .35, a.strokeStyle = u.b.raw.splitRangeColor.string, 
a.beginPath(), a.arc(s[l].x, s[l].y, s[l].size + 760, 0, this.pi2, !1), a.closePath(), 
a.stroke();
}
a.globalAlpha = 1;
}
function L(a, e, t) {
for (var i = [ e.biggerHSTECellsCache, e.biggerDSTECellsCache ], r = 0; r < i.length; r++) this.drawCircles(a, i[r], 760, 4, .4, u.b.raw.bDSTEColor.string, 2);
var s = e.cells;
if (s.length) {
var l = t ? s.length - 1 : 0;
if (s[l].size * s[l].size / 100 < 666) return;
a.lineWidth = 4, a.globalAlpha = u.b.raw.darkTheme.value ? .7 : .35, a.strokeStyle = u.b.raw.splitRangeColor.string, 
a.beginPath(), a.arc(s[l].x, s[l].y, 2 * s[l].size + 760, 0, this.pi2, !1), a.closePath(), 
a.stroke();
}
a.globalAlpha = 1;
}
function q(a, e) {
this.drawCircles(a, e.biggerHSTECellsCache, 760, 4, .4, u.b.raw.bHSTEColor.string, 3), 
a.globalAlpha = 1;
}
function j(a, e, t) {
for (var i = 14 + 2 / e, r = 12 + 1 / e, s = [ t.biggerHSTECellsCache, u.b.raw.bHSTEColor.string, t.biggerDSTECellsCache, u.b.raw.bDSTEColor.string, t.biggerSTECellsCache, u.b.raw.bSTEColor.string, t.biggerCellsCache, u.b.raw.bColor.string, t.smallerCellsCache, u.b.raw.sColor.string, t.smallerSTECellsCache, u.b.raw.sSTEColor.string, t.smallerDSTECellsCache, u.b.raw.sDSTEColor.string, t.smallerHSTECellsCache, u.b.raw.sHSTEColor.string ], l = 0; l < s.length; l += 2) this.drawCircles(a, s[l], i, r, .75, s[l + 1], 1);
}
function Q(a, e, t, i, r, s, l) {
a.lineWidth = i, a.globalAlpha = r, a.strokeStyle = s;
for (var o = 0; o < e.length; o++) a.beginPath(), a.arc(e[o].x, e[o].y, l * e[o].size + t, 0, this.pi2, !1), 
a.stroke(), a.closePath();
a.globalAlpha = 1;
}
function Z(a, e, t, i, r) {
a.lineWidth = u.b.raw.cursorTrackingSize.value, a.strokeStyle = u.b.raw.cursorTrackingColor.string;
for (var s = 0; s < t.length; s++) {
var l = t[s];
a.globalAlpha = l.canNextSplit ? 1 : .3, a.beginPath(), a.moveTo(i, r), a.lineTo(l.x, l.y), 
a.stroke(), a.closePath();
}
}
function $(a, e, t, i, r, s, l) {
var o = window.devicePixelRatio * u.a.raw.canvasScale.value, n = (i - this.stage.camera.x) * this.stage.scale + s, h = (r - this.stage.camera.y) * this.stage.scale + l, c = (e - this.stage.camera.x) * this.stage.scale + s - n, v = (t - this.stage.camera.y) * this.stage.scale + l - h;
if (!(Math.abs(c) < 50 * o && Math.abs(v) < 50 * o)) {
var g = Math.sqrt(c * c + v * v), d = (Math.min(this.stage.canvasWidth, this.stage.canvasHeight), 
1 / g), m = c * d, f = v * d, w = -f, p = 25 * o, b = .5 * p, y = .5 * p, x = n + m * g, C = h + f * g, S = x + m * b, k = C + f * b, T = x - m * b, A = C - f * b, M = T + w * y, z = A + m * y, B = T - w * y, R = A - m * y;
a.globalAlpha = Math.min(1, this.startAlpha), a.fillStyle = u.b.raw.cursorTrackingColor.string, 
a.beginPath(), a.moveTo(S, k), a.lineTo(M, z), a.lineTo(B, R), a.closePath(), a.fill();
}
}
function J(a) {
var e = this;
this.dirtyResize && (this.dirtyResize = !1, this.resizeCanvas(this.stage.canvasWidth, this.stage.canvasHeight, this.stage.canvasStyleWidth, this.stage.canvasStyleHeight), 
this.setCanvasAntialiasing(Number(u.a.raw.antialiasing.value)));
var t = this.app;
g.a.cleaner(), this.ctx.clearRect(0, 0, this.stage.canvasWidth, this.stage.canvasHeight), 
u.a.raw.showGrid.value && this.drawGrid(this.ctx, this.stage.canvasWidth, this.stage.canvasHeight, this.stage.scale, this.stage.camera.x, this.stage.camera.y), 
this.ctx.save(), this.matrix.reset(), this.matrix.translate(this.stage.canvasCenter.x - this.stage.camera.x * this.stage.scale, this.stage.canvasCenter.y - this.stage.camera.y * this.stage.scale), 
this.matrix.scale(this.stage.scale, this.stage.scale), this.matrix.setContextTransform(this.ctx), 
this.app._server.gameMode === c.b.BTR && this.drawBattleroyaleArea(this.ctx, t._server.mapBounds.minX, t._server.mapBounds.minY, t._server.mapSize.x, t._server.mapSize.y, 0, 0, 1, 1);
var i = d.a.getTexture(u.b.raw.customMapTexture.value);
if (i && i.image) {
(!0 === u.a.raw.showGrid.value || t._server.gameMode === c.b.BTR) && (this.ctx.globalCompositeOperation = "destination-over");
var r = Math.max(i.image.width, i.image.height), s = Math.min(i.image.width, i.image.height);
this.ctx.drawImage(i.image, i.image.width > s ? (r - s) / 2 : 0, i.image.height > s ? (r - s) / 2 : 0, s, s, ~~t._server.mapBounds.minX, ~~t._server.mapBounds.maxY, ~~t._server.mapBounds.maxX - t._server.mapBounds.minX, ~~t._server.mapBounds.minY - t._server.mapBounds.maxY), 
(!0 === u.a.raw.showGrid.value || t._server.gameMode === c.b.BTR) && (this.ctx.globalCompositeOperation = "source-over");
}
this.drawRainbowBorder(), !0 === u.a.raw.showBgSectors.value && this.drawSectors(this.ctx, !0, u.b.raw.sectorsX.value, u.b.raw.sectorsY.value, t._server.mapBounds.minX, t._server.mapBounds.minY, t._server.mapBounds.maxX, t._server.mapBounds.maxY, u.b.raw.gridColor.string, u.b.raw.sectorsColor.string, u.b.raw.sectorsWidth.value, !0);
var l = d.a.getTexture(u.b.raw.customMapLogo.value);
if (l && l.image) {
var o = l.image.width, n = l.image.height, h = 2.6;
if (this.stage.isInDisplay(o, n, o * h)) {
this.ctx.globalAlpha = .2;
var m = o * h >> 1, f = n * h >> 1, p = ~~(o * h), b = ~~(n * h);
this.ctx.drawImage(l.image, -m, -f, p, b), this.ctx.globalAlpha = 1;
}
}
if (!0 === u.a.raw.showMapBorders.value) {
var y = u.b.raw.bordersWidth.value >> 1;
this.drawMapBorders(this.ctx, !0, t._server.mapBounds.minX - y, t._server.mapBounds.minY - y, t._server.mapBounds.maxX + y, t._server.mapBounds.maxY + y, u.b.raw.bordersColor.string, u.b.raw.bordersWidth.value);
}
!0 === u.a.raw.virusesRange.value && this.drawVirusesRange(this.ctx, this.stage.virusesFrame);
for (var x = 0, C = t.clients.player.length; C > x; x++) this.drawFood(t.clients.player[x], x);
this.app.leaderboard.ghostCells.length && this.drawGhostCells(this.app.leaderboard.ghostCells);
for (var S = 0, k = t.unitManager.units.length; k > S; S++) {
var T = t.unitManager.units[S];
if (T.play && (0 == S || u.a.raw.mbMultiSplitRange.value) && u.a.raw.splitRange.value && (this.drawSplitRange(this.ctx, T, v.i.selectBiggestCell), 
u.a.raw.doubleSplitRange.value && this.drawDoubleSplitRange(this.ctx, T, v.i.selectBiggestCell), 
u.a.raw.tripleSplitRange.value && this.drawTripleSplitRange(this.ctx, T)), T.play && 0 == S && u.a.raw.oppRings.value && this.drawOppRings(this.ctx, this.stage.scale, T), 
u.a.raw.cursorTracking.value && (T == this.app.unitManager.activeUnit || u.a.raw.mbMultiCursorTracking.value)) {
var A = 0, M = 0;
T.useAi ? (A = T.target.x, M = T.target.y) : T._cursorContinousMovement ? (A = T.client.targetX, 
M = T.client.targetY) : (A = T.cursor.x, M = T.cursor.y), this.ctx.globalAlpha = 1, 
this.drawCursorTracking(this.ctx, T, T.cells, A, M);
}
}
var z, B = this.app.unitManager.totalPlay > 1, R = w(this.stage.removedCellsSet);
try {
for (R.s(); !(z = R.n()).done; ) {
var P = z.value;
this.drawCell(P, void 0, this.app.unitManager.activeUnit, B);
}
} catch (a) {
R.e(a);
} finally {
R.f();
}
if (this.ctx.closePath(), this.ctx.globalAlpha = 1, u.a.raw.debug.value) {
for (var _ = 0, I = t.clients.render.length; I > _; _++) {
var E = t.clients.render[_];
this.drawViewport(this.ctx, "client " + E.ID + " - render " + E.renderZindex, E.bounds.minX, E.bounds.maxY, E.bounds.maxX, E.bounds.minY, 0 == E.renderZindex ? "rgb(22 0 255 / 70%)" : "rgb(255 0 0 / 70%)", 20);
}
if (this.stage.quadtree) {
var W = function(a) {
if (e.ctx.moveTo(a.x, a.y + a.h), e.ctx.lineTo(a.x + a.w, a.y + a.h), e.ctx.lineTo(a.x + a.w, a.y), 
e.ctx.lineTo(a.x, a.y), a.children) {
var t, i = w(a.children);
try {
for (i.s(); !(t = i.n()).done; ) {
var r = t.value;
W(r);
}
} catch (a) {
i.e(a);
} finally {
i.f();
}
}
};
this.ctx.beginPath(), this.ctx.strokeStyle = "red", this.ctx.lineWidth = 2, this.ctx.globalAlpha = 1, 
W(this.stage.quadtree.root), this.ctx.closePath(), this.ctx.stroke();
}
}
for (var H = 0, V = this.stage.cellsFrame.length; V > H; H++) this.drawCell(this.stage.cellsFrame[H], void 0, this.app.unitManager.activeUnit, B);
this.drawWaves(), this.ctx.restore();
}
function K(a) {
return ~~((200 - a) / 14);
}
function aa(a) {
if ((a = ~~a) < 1e3) return a;
var e = (0 | a / 100) / 10;
return "".concat(e % 1 == 0 ? e + ".0" : e, "k");
}
var ea = function(a) {
function e(a, t) {
var r;
return (0, i.a)(this, e), (r = b(this, e, [ a, t ])).startAlpha = 1, r.pi2 = 2 * Math.PI, 
r.canvas = null, r.ctx = null, r.offscreenBorderCanvas = null, r.offscreenBorderCtx = null, 
r.lastBorderRedraw = 0, r.matrix = new f.a, r.dirtyResize = !0, r.init(), r;
}
return (0, o.a)(e, a), (0, r.a)(e, [ {
key: "init",
value: x
}, {
key: "destroy",
value: C
}, {
key: "setCanvas",
value: k
}, {
key: "setRainbowCanvas",
value: function() {
d.a.texturesMap.set(e.rainbowBorderLocation, e.rainbowBorderLocation), this.offscreenBorderCanvas = document.createElement("canvas"), 
this.offscreenBorderCtx = this.offscreenBorderCanvas.getContext("2d"), this.lastBorderRedraw = 0;
}
}, {
key: "setCanvasSmoothing",
value: T
}, {
key: "setCanvasAntialiasing",
value: A
}, {
key: "resizeCanvas",
value: M
}, {
key: "drawTeammatesInd",
value: z
}, {
key: "drawGrid",
value: B
}, {
key: "drawViewport",
value: R
}, {
key: "drawWaves",
value: P
}, {
key: "drawSectors",
value: _
}, {
key: "drawMapBorders",
value: I
}, {
key: "drawVirusesRange",
value: E
}, {
key: "drawBattleroyaleArea",
value: W
}, {
key: "drawDangerArea",
value: H
}, {
key: "drawSafeArea",
value: V
}, {
key: "drawDashedCircle",
value: F
}, {
key: "drawGhostCells",
value: D
}, {
key: "drawCell",
value: Y
}, {
key: "drawCachedFood",
value: X
}, {
key: "drawRainbowFood",
value: O
}, {
key: "drawFood",
value: U
}, {
key: "drawSplitRange",
value: G
}, {
key: "drawDoubleSplitRange",
value: L
}, {
key: "drawTripleSplitRange",
value: q
}, {
key: "drawOppRings",
value: j
}, {
key: "drawCircles",
value: Q
}, {
key: "drawCursorTracking",
value: Z
}, {
key: "drawTargetArrow",
value: $
}, {
key: "drawRainbowBorder",
value: function() {
if (u.a.raw.rainbowMapBorders.value) {
var a = d.a.getTexture(e.rainbowBorderLocation);
if (null != (null == a ? void 0 : a.image)) {
var t = Date.now(), i = 1 / Math.abs(u.a.raw.rainbowMapBordersSpeed.value) * 5;
if (this.lastBorderRedraw + i < t) {
this.lastBorderRedraw = t;
var r = function(a) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ia, t = a / 180 * Math.PI, i = Math.cos(t), r = Math.sin(t), s = Math.sqrt(1 / 3), l = 1 / 3, o = i + (1 - i) * l, n = l * (1 - i) - s * r, h = l * (1 - i) + s * r, c = l * (1 - i) + s * r, v = i + l * (1 - i), u = l * (1 - i) - s * r, g = l * (1 - i) - s * r, d = l * (1 - i) + s * r, m = i + l * (1 - i);
return e[0] = o, e[1] = n, e[2] = h, e[5] = c, e[6] = v, e[7] = u, e[10] = g, e[11] = d, 
e[12] = m, e;
}(t / 2 * u.a.raw.rainbowMapBordersSpeed.value % 360);
this.offscreenBorderCanvas.width = a.canvas.width, this.offscreenBorderCanvas.height = a.canvas.height, 
function(a, e, t) {
for (var i = a.getContext("2d"), r = t.getContext("2d"), s = i.getImageData(0, 0, a.width, a.height), l = s.data, o = function() {
var a = l[n] / 255, t = l[n + 1] / 255, i = l[n + 2] / 255, r = l[n + 3] / 255, s = a * e[0] + t * e[1] + i * e[2] + r * e[3] + e[4], o = a * e[5] + t * e[6] + i * e[7] + r * e[8] + e[9], h = a * e[10] + t * e[11] + i * e[12] + r * e[13] + e[14], c = a * e[15] + t * e[16] + i * e[17] + r * e[18] + e[19];
l[n] = ra(255 * s, 0, 255), l[n + 1] = ra(255 * o, 0, 255), l[n + 2] = ra(255 * h, 0, 255), 
l[n + 3] = ra(255 * c, 0, 255);
}, n = 0; n < l.length; n += 4) o();
r.putImageData(s, 0, 0);
}(a.canvas, r, this.offscreenBorderCanvas);
}
for (var s = this.matrix.getMatrix(), l = this.stage.app._server, o = 25 / (l.mapSize.y / 14141), n = 25 / (l.mapSize.x / 14141), h = 720, c = this.offscreenBorderCanvas, v = 0; v < 4; v++) {
if (v % 2) {
var g = v % 4 - 1, m = g ? 1 : -1, f = g ? l.mapBounds.maxY : -l.mapBounds.minY;
this.matrix.scale(-m, -m), this.matrix.translate(0, f), this.matrix.scale(l.mapSize.x / (h - o), 14141 / (h - o)), 
this.matrix.rotate(1.5 * -Math.PI);
} else if ((v + 1) % 2) {
var w = v % 4, p = w ? -1 : 1, b = w ? -l.mapBounds.maxX : l.mapBounds.minX;
this.matrix.scale(-p, -p), this.matrix.translate(b, 0), this.matrix.scale(14141 / (h - n), l.mapSize.y / (h - n)), 
this.matrix.rotate(Math.PI * p);
}
this.matrix.setContextTransform(this.ctx), this.ctx.drawImage(c, 0, 0, c.width, c.height, -c.width >> 1, -c.height >> 1, c.width, c.height), 
this.matrix.setMatrix(s), this.matrix.setContextTransform(this.ctx);
}
}
}
}
}, {
key: "render",
value: J
}, {
key: "calcVirusShots",
value: K
}, {
key: "shortMassFormat",
value: aa
} ]);
}(t(77210).a);
ea.rainbowBorderLocation = "./assets/rainbow5.png";
const ta = ea;
var ia = new Float32Array([ 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 1, 0 ]);
function ra(a, e, t) {
return Math.min(Math.max(a, e), t);
}
},
77210(a, e, t) {
t.d(e, {
a: () => k
});
var i = t(5223), r = t(51091), s = t(46788), l = t(59296), o = t(11495), n = t(2411), h = t(94429), c = t(73299), v = t(7542);
function u(a, e, t) {
return e = (0, l.a)(e), (0, s.a)(a, g() ? Reflect.construct(e, t || [], (0, l.a)(a).constructor) : e.apply(a, t));
}
function g() {
try {
var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (a) {}
return (g = function() {
return !!a;
})();
}
function d(a, e) {
return Math.floor(a * a / 100) > 183 ? this.virus_color_danger : c.b.raw.virusColor.microcolor;
}
function m(a, e) {
return e ? Math.floor(a * a / 100) / (h.i.selectBiggestCell ? e.maxMass : e.minMass) > .76 ? this.virus_color_normal : e.cellsLengthCached >= e.client.playerMaxCells ? this.virus_color_eatable : this.virus_color_danger : this.virus_color_normal;
}
function f() {}
function w(a, e, t, i) {}
function p() {}
function b() {
this.emit("destroy"), this.unlisten();
}
function y(a) {
return ~~((200 - a) / 14);
}
function x(a) {
return a <= 40 || this.stage.scale < .5 && a < 17 / this.stage.scale;
}
function C(a) {
return a <= 40 || this.stage.scale < .5 && a < 27 / this.stage.scale;
}
function S(a) {
return !1 === c.a.raw.showFood.value || (!(c.a.raw.showFood.value && !(c.a.raw.autoHideFoodOnZoom.value && this.stage.scale < .2)) || !!(c.a.raw.autoHideFood.value && a && a.mass > 1e3));
}
const k = function(a) {
function e(a, t) {
var r;
return (0, i.a)(this, e), (r = u(this, e)).app = a, r.stage = t, r.virus_color_danger = new v.a(200, 0, 0), 
r.virus_color_normal = new v.a(255, 220, 0), r.virus_color_eatable = new v.a(255, 109, 167), 
r.player_color_yellow = new v.a(255, 249, 6), r.minimumSkinAlpha = 232, r.canvas = null, 
r.initialized = !1, r.listenTo(c.b, "virusColor", function() {
r.virus_color_danger.a = c.b.raw.virusColor.microcolor.a, r.virus_color_danger.updVector(), 
r.virus_color_normal.a = c.b.raw.virusColor.microcolor.a, r.virus_color_normal.updVector(), 
r.virus_color_eatable.a = c.b.raw.virusColor.microcolor.a, r.virus_color_eatable.updVector();
})(), r;
}
return (0, o.a)(e, a), (0, r.a)(e, [ {
key: "setVirusColor",
value: d
}, {
key: "setVirusStrokeColor",
value: m
}, {
key: "setCanvas",
value: f
}, {
key: "resizeCanvas",
value: w
}, {
key: "init",
value: p
}, {
key: "destroy",
value: b
}, {
key: "calcVirusShots",
value: y
}, {
key: "setAutoHideCellInfoNick",
value: x
}, {
key: "setAutoHideCellInfoMass",
value: C
}, {
key: "foodIsHidden",
value: S
} ]);
}(n.Eventify);
}
} ]);
