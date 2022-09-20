var $ = jQuery.noConflict();;
! function(t) {
    "use strict";
    t.fn.countUp = function(e) {
        var a = t.extend({
            time: 2e3,
            delay: 10
        }, e);
        return this.each(function() {
            var e = t(this),
                n = a,
                u = function() {
                    e.data("counterupTo") || e.data("counterupTo", e.text());
                    var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time,
                        a = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay,
                        u = t / a,
                        r = e.data("counterupTo"),
                        o = [r],
                        c = /[0-9]+,[0-9]+/.test(r);
                    r = r.replace(/,/g, "");
                    for (var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), s = d ? (r.split(".")[1] || []).length : 0, i = u; i >= 1; i--) {
                        var p = parseInt(Math.round(r / u * i));
                        if (d && (p = parseFloat(r / u * i).toFixed(s)), c)
                            for (;
                                /(\d+)(\d{3})/.test(p.toString());) p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        o.unshift(p)
                    }
                    e.data("counterup-nums", o), e.text("0");
                    var f = function() {
                        e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), a) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                    };
                    e.data("counterup-func", f), setTimeout(e.data("counterup-func"), a)
                };
            e.waypoint(u, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);;
/*!
 * GSAP 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function o(t) {
        return "string" == typeof t
    }

    function p(t) {
        return "function" == typeof t
    }

    function q(t) {
        return "number" == typeof t
    }

    function r(t) {
        return void 0 === t
    }

    function s(t) {
        return "object" == typeof t
    }

    function t(t) {
        return !1 !== t
    }

    function u() {
        return "undefined" != typeof window
    }

    function v(t) {
        return p(t) || o(t)
    }

    function M(t) {
        return (h = mt(t, ot)) && ae
    }

    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function O(t, e) {
        return !e && console.warn(t)
    }

    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }

    function Q() {
        return 0
    }

    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i););
            e = pt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Rt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function _(t) {
        return t._gsap || $(Tt(t))[0]._gsap
    }

    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function da(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ea(e, r, i) {
        var n, a = q(e[1]),
            s = (a ? 2 : 1) + (r < 2 ? 0 : 1),
            o = e[s];
        if (a && (o.duration = e[1]), o.parent = i, r) {
            for (n = o; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = t(i.vars.inherit) && i.parent;
            o.immediateRender = t(n.immediateRender), r < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
        }
        return o
    }

    function fa() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ga(t, e, r, i) {
        ht.length && fa(), t.render(e, r, i), ht.length && fa()
    }

    function ha(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }

    function ia(t) {
        return t
    }

    function ja(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ka(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }

    function ma(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function na(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function oa(e) {
        var r = e.parent || F,
            i = e.keyframes ? ka : ja;
        if (t(e.inherit))
            for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }

    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function sa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function wa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function ya(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function za(t) {
        return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0))
    }

    function Aa(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t
    }

    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > j) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -j
        }
    }

    function Ca(t, e, r, i) {
        return e.parent && sa(e), e._start = ca(r + e._delay), e._end = ca(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function _addLinkedListItem(t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Ba(t, e), t
    }

    function Da(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ea(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Pt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Ia(t, e, r, i) {
        var n = t._repeat,
            a = ca(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n) : a, s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t
    }

    function Ja(t) {
        return t instanceof Bt ? ta(t) : Ia(t, t._dur)
    }

    function La(t, e) {
        var r, i, n = t.labels,
            a = t._recent || vt,
            s = t.duration() >= U ? a.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in n) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in n || (n[e] = s), n[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? La(t, e.substr(0, r - 1)) + i : s + i) : null == e ? s : +e
    }

    function Ma(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Oa(t) {
        if ("string" != typeof t) return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }

    function Ra(t, e) {
        return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }

    function Ua(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Va(t) {
        if (p(t)) return t;
        var _ = s(t) ? t : {
                each: t
            },
            m = Et(_.ease),
            g = _.from || 0,
            v = parseFloat(_.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            b = isNaN(g) || e,
            T = _.axis,
            w = g,
            x = g;
        return o(g) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[g] || 0 : !e && b && (w = g[0], x = g[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || _).length,
                    c = y[d];
                if (!c) {
                    if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, U])[1])) {
                        for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f--
                    }
                    for (c = y[d] = [], i = b ? Math.min(f, d) * w - .5 : g % f, n = b ? d * x / f - .5 : g / f | 0, l = U, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === g && Ua(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), c.b = d < 0 ? v - d : v, c.u = Oa(_.amount || _.each) || 0, m = m && d < 0 ? It(m) : m
                }
                return d = (c[t] - c.min) / c.max || 0, ca(c.b + (m ? m(d) : d) * c.v) + c.u
            }
    }

    function Wa(r) {
        var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Oa(t))
        }
    }

    function Xa(u, t) {
        var h, l, e = K(u);
        return !e && s(u) && (h = e = u.radius || U, u.values ? (u = Tt(u.values), (l = !q(u[0])) && (h *= h)) : u = Wa(u.increment)), Ma(t, e ? p(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = U, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Oa(t)
        } : Wa(u))
    }

    function Ya(t, e, r, i) {
        return Ma(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function ab(e, r, t) {
        return Ma(t, function(t) {
            return e[~~r(t)]
        })
    }

    function db(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + Ya(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function gb(t, e, r) {
        var i, n, a, s = t.labels,
            o = U;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function ib(t) {
        return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && xt(t, "onInterrupt"), t
    }

    function nb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ot + .5 | 0
    }

    function ob(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? q(t) ? [t >> 16, t >> 8 & Ot, t & Ot] : 0 : Mt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) c = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & Ot, c & Ot, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ot, t & Ot]
            } else if ("hsl" === t.substr(0, 3))
                if (c = d = t.match(tt), e) {
                    if (~t.indexOf("=")) return c = t.match(et), r && c.length < 4 && (c[3] = 1), c
                } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = nb(s + 1 / 3, i, n), c[1] = nb(s, i, n), c[2] = nb(s - 1 / 3, i, n);
            else c = t.match(tt) || Mt.transparent;
            c = c.map(Number)
        }
        return e && !d && (i = c[0] / Ot, n = c[1] / Ot, a = c[2] / Ot, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c
    }

    function pb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(kt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function qb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(kt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = ob(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = pb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(kt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function tb(t) {
        var e, r = t.join(" ");
        if (kt.lastIndex = 0, kt.test(r)) return e = Ct.test(r), t[1] = qb(t[1], e), t[0] = qb(t[0], e, pb(t[1])), !0
    }

    function Cb(t) {
        var e = (t + "").split("("),
            r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ha)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r
    }

    function Eb(t, e) {
        for (var r, i = t._first; i;) i instanceof Bt ? Eb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Eb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Gb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e]
        }), a
    }

    function Hb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Ib(r, t, e) {
        function Dl(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / X * (Math.asin(1 / i) || 0),
            s = "out" === r ? Dl : "in" === r ? function(t) {
                return 1 - Dl(1 - t)
            } : Hb(Dl);
        return n = X / n, s.config = function(t, e) {
            return Ib(r, t, e)
        }, s
    }

    function Jb(e, r) {
        function Ll(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Ll : "in" === e ? function(t) {
            return 1 - Ll(1 - t)
        } : Hb(Ll);
        return t.config = function(t) {
            return Jb(e, t)
        }, t
    }
    var R, F, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, C, A, D, S, z, I, E, L, Y = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        B = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        U = 1e8,
        j = 1 / U,
        X = 2 * Math.PI,
        V = X / 4,
        G = 0,
        J = Math.sqrt,
        W = Math.cos,
        H = Math.sin,
        Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        ct = 30,
        pt = [],
        _t = "",
        mt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        gt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        vt = {
            _start: 0,
            endTime: Q
        },
        yt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        bt = [].slice,
        Tt = function toArray(t, e) {
            return !o(t) || e || !n && At() ? K(t) ? function _flatten(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    return o(t) && !e || Ra(t, 1) ? r.push.apply(r, Tt(t)) : r.push(t)
                }) || r
            }(t, e) : Ra(t) ? bt.call(t, 0) : t ? [t] : [] : bt.call(a.querySelectorAll(t), 0)
        },
        wt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Ma(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        xt = function _callback(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n)
        },
        Ot = 255,
        Mt = {
            aqua: [0, Ot, Ot],
            lime: [0, Ot, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ot],
            navy: [0, 0, 128],
            white: [Ot, Ot, Ot],
            olive: [128, 128, 0],
            yellow: [Ot, Ot, 0],
            orange: [Ot, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ot, 0, 0],
            pink: [Ot, 192, 203],
            cyan: [0, Ot, Ot],
            transparent: [Ot, Ot, Ot, 0]
        },
        kt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Mt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ct = /hsl[a]?\(/,
        Pt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, b = {
            time: 0,
            frame: 0,
            tick: function tick() {
                zk(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return T / (1e3 / (t || 60))
            },
            wake: function wake() {
                l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function(t) {
                    return setTimeout(t, z - 1e3 * b.time + 1 | 0)
                }, c = 1, zk(2))
            },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                S = 1e3 / (t || 240), z = 1e3 * b.time + S
            },
            add: function add(t) {
                I.indexOf(t) < 0 && I.push(t), At()
            },
            remove: function remove(t) {
                var e;
                ~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w--
            },
            _listeners: I = []
        }),
        At = function _wake() {
            return !c && Pt.wake()
        },
        Dt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        zt = /["']/g,
        It = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Et = function _parseEase(t, e) {
            return t && (p(t) ? t : Dt[t] || Cb(t)) || e
        };

    function zk(t) {
        var e, r, i, n, a = x() - D,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(zk)), r)
            for (w = 0; w < I.length; w++) I[w](i, T, n, t)
    }

    function am(t) {
        return t < L ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Gb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Gb("Elastic", Ib("in"), Ib("out"), Ib()), E = 7.5625, L = 1 / 2.75, Gb("Bounce", function(t) {
        return 1 - am(1 - t)
    }, am), Gb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Gb("Circ", function(t) {
        return -(J(1 - t * t) - 1)
    }), Gb("Sine", function(t) {
        return 1 === t ? 1 : 1 - W(t * V)
    }), Gb("Back", Jb("in"), Jb("out"), Jb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, B.ease = Dt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return _t += t + "," + t + "Params,"
    });
    var Lt, Rt = function GSCache(t, e) {
            this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Wt
        },
        Ft = ((Lt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Lt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Lt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Lt.totalTime = function totalTime(t, e) {
            if (At(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this
        }, Lt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Lt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Lt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Lt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }, Lt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -j ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -j ? 0 : this._rts,
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        }, Lt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= j) && Math.abs(this._zTime) !== j))), this) : this._ps
        }, Lt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this
            }
            return this._start
        }, Lt.endTime = function endTime(e) {
            return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Lt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime
        }, Lt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, Lt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Lt.repeatDelay = function repeatDelay(t) {
            return arguments.length ? (this._rDelay = t, Ja(this)) : this._rDelay
        }, Lt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Lt.seek = function seek(e, r) {
            return this.totalTime(La(this, e), t(r))
        }, Lt.restart = function restart(e, r) {
            return this.play().totalTime(e ? -this._delay : 0, t(r))
        }, Lt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Lt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Lt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Lt.resume = function resume() {
            return this.paused(!1)
        }, Lt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -j : 0)), this) : this._rts < 0
        }, Lt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -j, this
        }, Lt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - j))
        }, Lt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Lt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function sn() {
                    var t = i.then;
                    i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = p(t) ? t : ia;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? sn() : i._prom = sn
            })
        }, Lt.kill = function kill() {
            ib(this)
        }, Animation);

    function Animation(t, e) {
        var r = t.parent || F;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ia(this, +t.duration, 1, 1), this.data = t.data, c || Pt.wake(), r && Ca(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    ja(Ft.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -j,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = n.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), i.parent && Ba(i.parent, _assertThisInitialized(i)), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r, i) {
            return new Vt(t, ea(arguments, 0, this), La(this, q(e) ? i : r)), this
        }, e.from = function from(t, e, r, i) {
            return new Vt(t, ea(arguments, 1, this), La(this, q(e) ? i : r)), this
        }, e.fromTo = function fromTo(t, e, r, i, n) {
            return new Vt(t, ea(arguments, 2, this), La(this, q(e) ? n : i)), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Vt(t, e, La(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ca(this, Vt.delayedCall(0, t, e), La(this, r))
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Vt(t, r, La(this, n)), this
        }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o)
        }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = this !== F && m - j < t && 0 <= t ? m : t < j ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ca(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var b = c && 1 & d,
                            T = b === (c && 1 & s);
                        if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0)), this._lock = 0, !this._ts && !u) return this;
                        Eb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ca(_), ca(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), _ || !i || e || xt(this, "onStart"), _ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -j);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -j : j);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -j)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = La(this, e)), !(t instanceof Ft)) {
                if (K(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (o(t)) return this.addLabel(t, e);
                if (!p(t)) return this;
                t = Vt.delayedCall(0, t)
            }
            return this !== t ? Ca(this, t, e) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ca(Pt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = La(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Vt.delayedCall(0, e || Q, r);
            return i.data = "isPause", this._hasPause = 1, Ca(this, i, La(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = La(this, t); e;) e._start === t && "isPause" === e.data && sa(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) qt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = Tt(t), a = this._first, s = q(e); a;) a instanceof Vt ? da(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this,
                i = La(r, t),
                n = e.startAt,
                a = e.onStart,
                s = e.onStartParams,
                o = e.immediateRender,
                u = Vt.to(r, ja({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || j,
                    onStart: function onStart() {
                        r.pause();
                        var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                        u._dur !== t && Ia(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, s || [])
                    }
                }, e));
            return o ? u.render(0) : u
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ja({
                startAt: {
                    time: La(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), gb(this, La(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), gb(this, La(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + j)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ta(this)
        }, e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return n.prototype.invalidate.call(this)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ia(a, a === F && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (F._ts && (ga(F, ya(t, F)), f = Pt.frame), Pt.frame >= ct) {
                ct += Y.autoSleep || 120;
                var e = F._first;
                if ((!e || !e._ts) && Y.autoSleep && Pt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Pt.sleep()
                }
            }
        }, Timeline
    }(Ft);
    ja(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Qb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
                if (p(t) && (t = Ut(t, n, e, r, i)), !s(t) || t.style && t.nodeType || K(t) || Z(t)) return o(t) ? Ut(t, n, e, r, i) : t;
                var a, u = {};
                for (a in t) u[a] = Ut(t[a], n, e, r, i);
                return u
            }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ie(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }
    var qt, Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
            p(i) && (i = i(n || 0, t, a));
            var l, f = t[e],
                d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
                c = p(f) ? h ? Jt : Qt : Gt;
            if (o(i) && (~i.indexOf("random(") && (i = db(i)), "=" === i.charAt(1) && (i = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Oa(d) || 0))), d !== i) return isNaN(d * i) ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, c, p, _ = new ie(this._pt, t, e, 0, 1, Zt, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = db(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _
            }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ie(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? $t : Ht, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l)
        },
        Nt = function _initTween(e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, m, g = e.vars,
                v = g.ease,
                y = g.startAt,
                b = g.immediateRender,
                T = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                O = g.callbackScope,
                M = g.runBackwards,
                k = g.yoyoEase,
                C = g.keyframes,
                P = g.autoRevert,
                A = e._dur,
                D = e._startAt,
                S = e._targets,
                z = e.parent,
                I = z && "nested" === z.data ? z.parent._targets : S,
                E = "auto" === e._overwrite && !R,
                L = e.timeline;
            if (!L || C && v || (v = "none"), e._ease = Et(v, B.ease), e._yEase = k ? It(Et(!0 === k ? v : k, B.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), !L) {
                if (p = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = na(g, ut), D && D.render(-1, !0).kill(), y)
                    if (sa(e._startAt = Vt.set(S, ja({
                            data: "isStart",
                            overwrite: !1,
                            parent: z,
                            immediateRender: !0,
                            lazy: t(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: x,
                            callbackScope: O,
                            stagger: 0
                        }, y))), b) {
                        if (0 < r) P || (e._startAt = 0);
                        else if (A && !(r < 0 && D)) return void(r && (e._zTime = r))
                    } else !1 === P && (e._startAt = 0);
                else if (M && A)
                    if (D) P || (e._startAt = 0);
                    else if (r && (b = !1), a = ja({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: b && t(T),
                        immediateRender: b,
                        stagger: 0,
                        parent: z
                    }, i), p && (a[l.prop] = p), sa(e._startAt = Vt.set(S, a)), b) {
                    if (!r) return
                } else _initTween(e._startAt, j);
                for (e._pt = 0, T = A && t(T) || T && !A, n = 0; n < S.length; n++) {
                    if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), c = I === S ? n : I.indexOf(o), l && !1 !== (f = new l).init(o, p || i, e, c, I) && (e._pt = s = new ie(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) ft[a] && (f = Qb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (qt = e, F.killTweensOf(o, d, e.globalTime(0)), m = !e.parent, qt = 0), e._pt && T && (lt[h.id] = 1)
                }
                u && re(e), e._onInit && e._onInit(e)
            }
            e._from = !L && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !m
        },
        Ut = function _parseFuncOrString(t, e, r, i, n) {
            return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? db(t) : t
        },
        jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Vt = function(A) {
            function Tween(e, r, i, n) {
                var a;
                "number" == typeof r && (i.duration = r, r = i, i = null);
                var o, u, h, l, f, d, c, p, _ = (a = A.call(this, n ? r : oa(r), i) || this).vars,
                    m = _.duration,
                    g = _.delay,
                    y = _.immediateRender,
                    b = _.stagger,
                    T = _.overwrite,
                    w = _.keyframes,
                    x = _.defaults,
                    M = _.scrollTrigger,
                    k = _.yoyoEase,
                    C = a.parent,
                    P = (K(e) || Z(e) ? q(e[0]) : "length" in r) ? [e] : Tt(e);
                if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
                    if (r = a.vars, (o = a.timeline = new Bt({
                            data: "nested",
                            defaults: x || {}
                        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, w) ja(o.vars.defaults, {
                        ease: "none"
                    }), w.forEach(function(t) {
                        return o.to(P, t, ">")
                    });
                    else {
                        if (l = P.length, c = b ? Va(b) : Q, s(b))
                            for (f in b) ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
                        for (u = 0; u < l; u++) {
                            for (f in h = {}, r) Xt.indexOf(f) < 0 && (h[f] = r[f]);
                            h.stagger = 0, k && (h.yoyoEase = k), p && mt(h, p), d = P[u], h.duration = +Ut(m, _assertThisInitialized(a), u, d, P), h.delay = (+Ut(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, c(u, d, P))
                        }
                        o.duration() ? m = g = 0 : a.timeline = 0
                    }
                    m || a.duration(m = o.duration())
                } else a.timeline = 0;
                return !0 !== T || R || (qt = _assertThisInitialized(a), F.killTweensOf(P), qt = 0), C && Ba(C, _assertThisInitialized(a)), (y || !m && !w && a._start === ca(C._time) && t(y) && function _hasNoPausedAncestors(t) {
                    return !t || t._ts && _hasNoPausedAncestors(t.parent)
                }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -j, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a
            }
            _inheritsLoose(Tween, A);
            var e = Tween.prototype;
            return e.render = function render(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = this._time,
                    c = this._tDur,
                    p = this._dur,
                    _ = c - j < t && 0 <= t ? c : t < j ? 0 : t;
                if (p) {
                    if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = _, l = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                            if (i = ca(_ % s), _ === c ? (a = this._repeat, i = p) : ((a = ~~(_ / s)) && a === _ / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                            a !== o && (l && this._yEase && Eb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ca(s * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(t, e, r)
                        }
                        for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !i && u ? -j : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (xt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio,
                        u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                            var e = t.parent;
                            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                        }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                        h = t._rDelay,
                        l = 0;
                    if (h && t._repeat && (l = yt(0, t._tDur, e), a = gt(l, h), s = gt(t._tTime, h), t._yoyo && 1 & a && (u = 1 - u), a !== s && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === j || !e && t._zTime) {
                        if (!t._initted && Ea(t, e, i, r)) return;
                        for (s = t._zTime, t._zTime = e || (r ? j : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), l && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (xt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, e.targets = function targets() {
                return this._targets
            }, e.invalidate = function invalidate() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this)
            }, e.kill = function kill(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ib(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || ib(this), this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, n, a, s, u, h, l, f = this._targets,
                    d = t ? Tt(t) : f,
                    c = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function _arraysMatch(t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return r < 0
                    }(f, d)) return "all" === e && (this._pt = 0), ib(this);
                for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function(t) {
                        return u[t] = 1
                    }), e = u), e = function _addAliasesToVars(t, e) {
                        var r, i, n, a, s = t[0] ? _(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (i in r = mt({}, e), o)
                            if (i in r)
                                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                        return r
                    }(f, e)), l = f.length; l--;)
                    if (~d.indexOf(f[l]))
                        for (u in n = c[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
                return this._initted && !this._pt && p && ib(this), this
            }, Tween.to = function to(t, e, r) {
                return new Tween(t, e, r)
            }, Tween.from = function from(t, e) {
                return new Tween(t, ea(arguments, 1))
            }, Tween.delayedCall = function delayedCall(t, e, r, i) {
                return new Tween(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, Tween.fromTo = function fromTo(t, e, r) {
                return new Tween(t, ea(arguments, 2))
            }, Tween.set = function set(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
            }, Tween.killTweensOf = function killTweensOf(t, e, r) {
                return F.killTweensOf(t, e, r)
            }, Tween
        }(Ft);
    ja(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Vt[r] = function() {
            var t = new Bt,
                e = bt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function _b(t, e, r) {
        return t.setAttribute(e, r)
    }

    function hc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Gt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Qt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Jt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        Wt = function _getSetter(t, e) {
            return p(t[e]) ? Qt : r(t[e]) && t.setAttribute ? _b : Gt
        },
        Ht = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        $t = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Zt = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        Kt = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        te = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        ee = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        re = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = hc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Bt, F = new Bt({
        sortChildren: !1,
        defaults: B,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Y.stringFilter = tb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = p(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: Q,
                            render: Kt,
                            add: Yt,
                            kill: ee,
                            modifier: te,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Wt,
                            aliases: {},
                            register: 0
                        };
                    if (At(), t !== i) {
                        if (ft[e]) return;
                        ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i), t.register && t.register(ae, i, ie)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Bt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return F.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = Tt(i)[0]);
            var n = _(i || {}).get,
                a = e ? ia : ha;
            return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Tt(r)).length) {
                var n = r.map(function(t) {
                        return ae.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e],
                o = _(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && Kt(1, d)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < F.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Et(t.ease, B.ease)), ma(B, t || {})
        },
        config: function config(t) {
            return ma(Y, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }), dt[i] = function(t, e, r) {
                return n(Tt(t), ja(e || {}, a), r)
            }, r && (Bt.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Dt[t] = Et(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Et(t, e) : Dt
        },
        getById: function getById(t) {
            return F.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new Bt(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming), F.remove(a), a._dp = 0, a._time = a._tTime = F._time, i = F._first; i;) n = i._next, !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;
            return Ca(F, a, 0), a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return K(e) ? ab(e, wrap(0, e.length), t) : Ma(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return K(e) ? ab(e, wrapYoyo(0, e.length - 1), t) : Ma(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Va,
            random: Ya,
            snap: Xa,
            normalize: function normalize(t, e, r) {
                return wt(t, e, 0, 1, r)
            },
            getUnit: Oa,
            clamp: function clamp(e, r, t) {
                return Ma(t, function(t) {
                    return yt(e, r, t)
                })
            },
            splitColor: ob,
            toArray: Tt,
            mapRange: wt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Oa(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!n) {
                    var a, s, u, h, l, f = o(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (K(e) && !K(r)) {
                        for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
                        h--, n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = r
                    } else i || (e = mt(K(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r) Yt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return Kt(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Ma(t, n)
            },
            shuffle: Ua
        },
        install: M,
        effects: dt,
        ticker: Pt,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: F,
        core: {
            PropTween: ie,
            globals: P,
            Tween: Vt,
            Timeline: Bt,
            Animation: Ft,
            getCache: _,
            _removeLinkedListItem: ra,
            suppressOverwrites: function suppressOverwrites(t) {
                return R = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Vt[t]
    }), Pt.add(Bt.updateRoot), d = ne.to({}, {
        duration: 0
    });

    function lc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function nc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {}, ba(i, function(t) {
                            return e[t] = 1
                        }), i = e), n) {
                        for (r in e = {}, i) e[r] = n(i[r]);
                        i = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = lc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, nc("roundProps", Wa), nc("modifiers"), nc("snap", Xa)) || ne;
    Vt.version = Bt.version = ae.version = "3.6.1", l = 1, u() && At();

    function Yc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Zc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function $c(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function _c(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function ad(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function bd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function cd(t, e, r) {
        return t.style[e] = r
    }

    function dd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function ed(t, e, r) {
        return t._gsap[e] = r
    }

    function fd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function gd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function hd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function ld(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t)
    }

    function md(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && md(t, Ue(e) || e, 1) || ""
    }

    function pd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = ld("div") || {
            style: {}
        }, ld("div"), qe = Ue(qe), Ye = qe + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", de = !!Ue("perspective"), he = 1)
    }

    function qd(t) {
        var e, r = ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = qd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e
    }

    function rd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function sd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = qd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === qd || (r = qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +rd(e, ["x", "cx", "x1"]) || 0,
            y: +rd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function td(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !sd(t))
    }

    function ud(t, e) {
        if (e) {
            var r = t.style;
            e in Se && e !== Ye && (e = qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Le, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function vd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? bd : ad);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function xd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = le.style,
            f = Re.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            m = "%" === i;
        return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = xd(t, e, r, "px")), o = t.getCTM && td(t), !m && "%" !== h || !Se[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && m && s.width && f && s.time === Pt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = md(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[c], a.removeChild(le), l.position = "absolute", f && m && ((s = _(a)).time = Pt.time, s.width = a[c]), ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ca(m ? u / n * 100 : u / 100 * n)))
    }

    function yd(t, e, r, i) {
        var n;
        return he || pd(), e in Be && "transform" !== e && ~(e = Be[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? (n = Je(t, i), n = "transformOrigin" !== e ? n[e] : We(md(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || md(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? xd(t, e, n, r) + r : n
    }

    function zd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1),
                a = n && md(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = md(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g, v = new ie(this._pt, t.style, e, 0, 1, Zt),
            y = 0,
            b = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = md(t, e) || i, t.style[e] = r), tb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = xd(t, e, f, _) || 0), v._pt = {
                _next: v._pt,
                p: p || 1 === b ? p : ",",
                s: h,
                c: g ? g * c : c - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? bd : ad;
        return nt.test(i) && (v.e = 0), this._pt = v
    }

    function Bd(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ")
    }

    function Cd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], Se[r] && (i = 1, r = "transformOrigin" === r ? Ye : qe), ud(a, r);
            i && (ud(a, qe), u && (u.svg && a.removeAttribute("transform"), Je(a, 1), u.uncache = 1))
        }
    }

    function Gd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Hd(t) {
        var e = md(t, qe);
        return Gd(e) ? Ge : e.substr(7).match(et).map(ca)
    }

    function Id(t, e) {
        var r, i, n, a, s = t._gsap || _(t),
            o = t.style,
            u = Hd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Hd(t), n ? o.display = n : ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Jd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Id(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            c = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            b = l[5],
            T = e.split(" "),
            w = parseFloat(T[0]) || 0,
            x = parseFloat(T[1]) || 0;
        r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = sd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = c + (y * _ + b * g) - y, h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (vd(a, h, "xOrigin", f, w), vd(a, h, "yOrigin", d, x), vd(a, h, "xOffset", c, h.xOffset), vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Md(t, e, r) {
        var i = Oa(e);
        return ca(parseFloat(e) + parseFloat(xd(t, "x", r + "px", i))) + i
    }

    function Td(t, e, r, i, n, a) {
        var s, u, h = 360,
            l = o(n),
            f = parseFloat(n) * (l && ~n.indexOf("rad") ? ze : 1),
            d = a ? f * a : f - i,
            c = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Zc), u.e = c, u.u = "deg", t._props.push(r), u
    }

    function Ud(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function Vd(t, e, r) {
        var i, n, a, s, o, u, h, l = Ud({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[qe] = e, i = Je(r, 1), ud(r, qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[qe], f[qe] = e, i = Je(r, 1), f[qe] = a), Se)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Oa(a) !== (h = Oa(s)) ? xd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, i, n, o, u - o, Yc), t._pt.u = h || 0, t._props.push(n));
        Ud(i, l)
    }
    var se, oe, ue, he, le, fe, de, ce = Dt.Power0,
        pe = Dt.Power1,
        _e = Dt.Power2,
        me = Dt.Power3,
        ge = Dt.Power4,
        ve = Dt.Linear,
        ye = Dt.Quad,
        be = Dt.Cubic,
        Te = Dt.Quart,
        we = Dt.Quint,
        xe = Dt.Strong,
        Oe = Dt.Elastic,
        Me = Dt.Back,
        ke = Dt.SteppedEase,
        Ce = Dt.Bounce,
        Pe = Dt.Sine,
        Ae = Dt.Expo,
        De = Dt.Circ,
        Se = {},
        ze = 180 / Math.PI,
        Ie = Math.PI / 180,
        Ee = Math.atan2,
        Le = /([A-Z])/g,
        Re = /(?:left|right|width|margin|padding|x)/i,
        Fe = /[\s,\(]\S/,
        Be = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        qe = "transform",
        Ye = qe + "Origin",
        Ne = "O,Moz,ms,Ms,Webkit".split(","),
        Ue = function _checkPropPrefix(t, e, r) {
            var i = (e || le).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ne[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ne[n] : "") + t
        },
        je = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Xe = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ve = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ie(t._pt, e, r, 0, 0, Cd);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        Ge = [1, 0, 0, 1, 0, 0],
        Qe = {},
        Je = function _parseTransform(t, e) {
            var r = t._gsap || new Rt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b, T, w, x, O, M, k, C, P, A, D, S, z, I, E, L = t.style,
                R = r.scaleX < 0,
                F = "deg",
                B = md(t, Ye) || "0";
            return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !td(t)), m = Id(t, r.svg), r.svg && (k = !r.uncache && !e && t.getAttribute("data-svg-origin"), Jd(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Ee(T, b) * ze : 0, (f = w || x ? Ee(w, x) * ze + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * b + _ * w), n -= _ - (p * T + _ * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], I = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(E, S)) * ze, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + D * y, P = E * v + S * y, A = O * -y + A * v, D = M * -y + D * v, S = E * -y + S * v, I = z * -y + I * v, O = k, M = C, E = P), l = (g = Ee(-w, S)) * ze, g && (v = Math.cos(-g), I = x * (y = Math.sin(-g)) + I * v, b = k = b * v - A * y, T = C = T * v - D * y, w = P = w * v - S * y), u = (g = Ee(T, b)) * ze, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Ee(O, M), f = 2e-4 < Math.abs(g) ? g * ze : 0, c = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Gd(md(t, qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + F, r.rotationX = ca(h) + F, r.rotationY = ca(l) + F, r.skewX = f + F, r.skewY = d + F, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[Ye] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? er : de ? tr : He, r.uncache = 0, r
        },
        We = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        He = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, tr(t, e)
        },
        $e = "0deg",
        Ze = "0px",
        Ke = ") ",
        tr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                c = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                b = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== $e || h !== $e)) {
                var T, w = parseFloat(h) * Ie,
                    x = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(l) * Ie, T = Math.cos(w), a = Md(g, a, x * T * -v), s = Md(g, s, -Math.sin(w) * -v), o = Md(g, o, O * T * -v + v)
            }
            _ !== Ze && (y += "perspective(" + _ + Ke), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === Ze && s === Ze && o === Ze || (y += o !== Ze || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke), u !== $e && (y += "rotate(" + u + Ke), h !== $e && (y += "rotateY(" + h + Ke), l !== $e && (y += "rotateX(" + l + Ke), f === $e && d === $e || (y += "skew(" + f + ", " + d + Ke), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Ke), g.style[qe] = y || "translate(0, 0)"
        },
        er = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                c = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                b = o.xOffset,
                T = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= Ie, c *= Ie, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= Ie, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = xd(g, "x", l, "px"), O = xd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[qe] = s)
        };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Ve[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return yd(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var rr, ir, nr, ar = {
        name: "css",
        register: pd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b = this._props,
                T = t.style,
                w = r.vars.startAt;
            for (f in he || pd(), e)
                if ("autoRound" !== f && (s = e[f], !ft[f] || !Qb(f, e, r, i, t, n)))
                    if (h = typeof s, l = Ve[f], "function" === h && (h = typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = db(s)), l) l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", kt.lastIndex = 0, kt.test(a) || (d = Oa(a), c = Oa(s)), c ? d !== c && (a = xd(t, f, a, c) + c) : d && (s += d), this.add(T, "setProperty", a, s, i, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f], f in Y.units && !Oa(a) && (a += Y.units[f]), "=" === (a + "").charAt(1) && (a = yd(t, f))) : a = yd(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Be && ("autoAlpha" === f && (1 === u && "hidden" === yd(t, "visibility") && o && (u = 0), vd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Be[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Se)
                    if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Je(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, T, qe, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), b.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            s = Bd(s), g.svg ? Jd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && vd(this, g, "zOrigin", g.zOrigin, c), vd(this, T, f, We(a), We(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Jd(t, s, 1, v, 0, this);
                            continue
                        }
                        if (f in Qe) {
                            Td(this, g, f, u, s, p);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            vd(this, g, "smooth", g.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            g[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            Vd(this, s, t);
                            continue
                        }
                    }
                else f in T || (f = Ue(f) || f);
                if (_ || (o || 0 === o) && (u || 0 === u) && !Fe.test(s) && f in T) o = o || 0, (d = (a + "").substr((u + "").length)) !== (c = Oa(s) || (f in Y.units ? Y.units[f] : d)) && (u = xd(t, f, a, c)), this._pt = new ie(this._pt, _ ? g : T, f, u, p ? p * o : o - u, _ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? Yc : _c), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = $c);
                else if (f in T) zd.call(this, t, f, a, s);
                else {
                    if (!(f in t)) {
                        N(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, i, n)
                }
                b.push(f)
            }
            y && re(this)
        },
        get: yd,
        aliases: Be,
        getSetter: function getSetter(t, e, i) {
            var n = Be[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Se && e !== Ye && (t._gsap.x || yd(t, "x")) ? i && fe === i ? "scale" === e ? fd : ed : (fe = i || {}) && ("scale" === e ? gd : hd) : t.style && !r(t.style[e]) ? cd : ~e.indexOf("-") ? dd : Wt(t, e)
        },
        core: {
            _removeProperty: ud,
            _getMatrix: Id
        }
    };
    ae.utils.checkPrefix = Ue, nr = ba((rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Se[t] = 1
    }), ba(ir, function(t) {
        Y.units[t] = "deg", Qe[t] = 1
    }), Be[nr[13]] = rr + "," + ir, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Be[e[1]] = nr[e[0]]
    }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px"
    }), ae.registerPlugin(ar);
    var sr = ae.registerPlugin(ar) || ae,
        or = sr.core.Tween;
    e.Back = Me, e.Bounce = Ce, e.CSSPlugin = ar, e.Circ = De, e.Cubic = be, e.Elastic = Oe, e.Expo = Ae, e.Linear = ve, e.Power0 = ce, e.Power1 = pe, e.Power2 = _e, e.Power3 = me, e.Power4 = ge, e.Quad = ye, e.Quart = Te, e.Quint = we, e.Sine = Pe, e.SteppedEase = ke, e.Strong = xe, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Vt, e.TweenMax = or, e.default = sr, e.gsap = sr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * CustomEase 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function m(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        Y = Math.PI / 180,
        k = Math.sin,
        B = Math.cos,
        F = Math.abs,
        J = Math.sqrt;

    function arcToSegment(e, t, n, s, a, r, i, o, h) {
        if (e !== o || t !== h) {
            n = F(n), s = F(s);
            var u = a % 360 * Y,
                f = B(u),
                c = k(u),
                l = Math.PI,
                g = 2 * l,
                x = (e - o) / 2,
                d = (t - h) / 2,
                m = f * x + c * d,
                p = -c * x + f * d,
                y = m * m,
                M = p * p,
                v = y / (n * n) + M / (s * s);
            1 < v && (n = J(v) * n, s = J(v) * s);
            var C = n * n,
                E = s * s,
                b = (C * E - C * M - E * y) / (C * M + E * y);
            b < 0 && (b = 0);
            var w = (r === i ? -1 : 1) * J(b),
                P = n * p / s * w,
                S = -s * m / n * w,
                N = f * P - c * S + (e + o) / 2,
                D = c * P + f * S + (t + h) / 2,
                T = (m - P) / n,
                V = (p - S) / s,
                _ = (-m - P) / n,
                q = (-p - S) / s,
                A = T * T + V * V,
                R = (V < 0 ? -1 : 1) * Math.acos(T / J(A)),
                G = (T * q - V * _ < 0 ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
            isNaN(G) && (G = l), !i && 0 < G ? G -= g : i && G < 0 && (G += g), R %= g, G %= g;
            var L, O = Math.ceil(F(G) / (g / 4)),
                j = [],
                z = G / O,
                I = 4 / 3 * k(z / 2) / (1 + B(z / 2)),
                H = f * n,
                Q = c * n,
                Z = c * -s,
                U = f * s;
            for (L = 0; L < O; L++) m = B(a = R + L * z), p = k(a), T = B(a += z), V = k(a), j.push(m - I * p, p + I * m, T + I * V, V - I * T, T, V);
            for (L = 0; L < j.length; L += 2) m = j[L], p = j[L + 1], j[L] = m * H + p * Z + N, j[L + 1] = m * Q + p * U + D;
            return j[L - 2] = o, j[L - 1] = h, j
        }
    }

    function stringToRawPath(e) {
        function db(e, t, n, s) {
            f = (n - e) / 3, c = (s - t) / 3, o.push(e + f, t + c, n - f, s - c, n, s)
        }
        var t, n, s, a, r, i, o, h, u, f, c, l, g, x, d, m = (e + "").replace(w, function(e) {
                var t = +e;
                return t < 1e-4 && -1e-4 < t ? 0 : t
            }).match(b) || [],
            p = [],
            y = 0,
            M = 0,
            v = m.length,
            C = 0,
            E = "ERROR: malformed path: " + e;
        if (!e || !isNaN(m[0]) || isNaN(m[1])) return console.log(E), p;
        for (t = 0; t < v; t++)
            if (g = r, isNaN(m[t]) ? i = (r = m[t].toUpperCase()) !== m[t] : t--, s = +m[t + 1], a = +m[t + 2], i && (s += y, a += M), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? --p.length : C += o.length), y = h = s, M = u = a, o = [s, a], p.push(o), t += 2, r = "L";
            else if ("C" === r) i || (y = M = 0), (o = o || [0, 0]).push(s, a, y + 1 * m[t + 3], M + 1 * m[t + 4], y += 1 * m[t + 5], M += 1 * m[t + 6]), t += 6;
        else if ("S" === r) f = y, c = M, "C" !== g && "S" !== g || (f += y - o[o.length - 4], c += M - o[o.length - 3]), i || (y = M = 0), o.push(f, c, s, a, y += 1 * m[t + 3], M += 1 * m[t + 4]), t += 4;
        else if ("Q" === r) f = y + 2 / 3 * (s - y), c = M + 2 / 3 * (a - M), i || (y = M = 0), y += 1 * m[t + 3], M += 1 * m[t + 4], o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M), t += 4;
        else if ("T" === r) f = y - o[o.length - 4], c = M - o[o.length - 3], o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a), t += 2;
        else if ("H" === r) db(y, M, y = s, M), t += 1;
        else if ("V" === r) db(y, M, y, M = s + (i ? M - y : 0)), t += 1;
        else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a), "L" === r && (t += 2)), y = s, M = a;
        else if ("A" === r) {
            if (x = m[t + 4], d = m[t + 5], f = m[t + 6], c = m[t + 7], n = 7, 1 < x.length && (x.length < 3 ? (c = f, f = d, n--) : (c = d, f = x.substr(2), n -= 2), d = x.charAt(1), x = x.charAt(0)), l = arcToSegment(y, M, +m[t + 1], +m[t + 2], +m[t + 3], +x, +d, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c), t += n, l)
                for (n = 0; n < l.length; n++) o.push(l[n]);
            y = o[o.length - 2], M = o[o.length - 1]
        } else console.log(E);
        return (t = o.length) < 6 ? (p.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), p.totalPoints = C + t, p
    }

    function p() {
        return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M
    }

    function q() {
        (M = p()) ? (M.registerEase("_CE", n.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    }

    function s(e) {
        return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
    }

    function x(e, t, n, s, a, r, i, o, h, u, f) {
        var c, l = (e + n) / 2,
            g = (t + s) / 2,
            d = (n + a) / 2,
            m = (s + r) / 2,
            p = (a + i) / 2,
            y = (r + o) / 2,
            M = (l + d) / 2,
            v = (g + m) / 2,
            C = (d + p) / 2,
            E = (m + y) / 2,
            b = (M + C) / 2,
            w = (v + E) / 2,
            P = i - e,
            S = o - t,
            N = Math.abs((n - i) * S - (s - o) * P),
            D = Math.abs((a - i) * S - (r - o) * P);
        return u || (u = [{
            x: e,
            y: t
        }, {
            x: i,
            y: o
        }], f = 1), u.splice(f || u.length - 1, 0, {
            x: b,
            y: w
        }), h * (P * P + S * S) < (N + D) * (N + D) && (c = u.length, x(e, t, l, g, M, v, b, w, h, u, f), x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))), u
    }
    var M, a, t, y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        v = /[cLlsSaAhHvVtTqQ]/g,
        n = ((t = CustomEase.prototype).setData = function setData(e, t) {
            t = t || {};
            var n, s, a, r, i, o, h, u, f, c = (e = e || "0,0,1,1").match(y),
                l = 1,
                g = [],
                d = [],
                m = t.precision || 1,
                p = m <= 1;
            if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]), 4 === (n = c.length)) c.unshift(0, 0), c.push(1, 1), n = 8;
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (0 == +c[0] && 1 == +c[n - 2] || function _normalize(e, t, n) {
                    n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                    var s, a = -1 * e[0],
                        r = -n,
                        i = e.length,
                        o = 1 / (+e[i - 2] + a),
                        h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function _findMinimum(e) {
                            var t, n = e.length,
                                s = 1e20;
                            for (t = 1; t < n; t += 6) + e[t] < s && (s = +e[t]);
                            return s
                        }(e) + r : +e[i - 1] + r);
                    for (h = h ? 1 / h : -o, s = 0; s < i; s += 2) e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h
                }(c, t.height, t.originY), this.segment = c, r = 2; r < n; r += 6) s = {
                x: +c[r - 2],
                y: +c[r - 1]
            }, a = {
                x: +c[r + 4],
                y: +c[r + 5]
            }, g.push(s, a), x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);
            for (n = g.length, r = 0; r < n; r++) h = g[r], u = g[r - 1] || h, (h.x > u.x || u.y !== h.y && u.x === h.x || h === u) && h.x <= 1 ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);
            if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
                for (r = 0; r < n; r++) f = r * i, h.nx < f && (h = g[++o]), s = h.y + (f - h.x) / h.cx * h.cy, d[r] = {
                    x: f,
                    cx: i,
                    y: s,
                    cy: 0,
                    nx: 9
                }, r && (d[r - 1].cy = s - d[r - 1].y);
                d[n - 1].cy = g[g.length - 1].y - s
            } else {
                for (r = 0; r < n; r++) h.nx < r * i && (h = g[++o]), d[r] = h;
                o < g.length - 1 && (d[r - 1] = g[g.length - 2])
            }
            return this.ease = function(e) {
                var t = d[e * n | 0] || d[n - 1];
                return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
            }, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this
        }, t.getSVGData = function getSVGData(e) {
            return CustomEase.getSVGData(this, e)
        }, CustomEase.create = function create(e, t, n) {
            return new CustomEase(e, t, n).ease
        }, CustomEase.register = function register(e) {
            M = e, q()
        }, CustomEase.get = function get(e) {
            return M.parseEase(e)
        }, CustomEase.getSVGData = function getSVGData(e, t) {
            var n, a, r, i, o, h, u, f, c, l, g = (t = t || {}).width || 100,
                x = t.height || 100,
                d = t.x || 0,
                p = (t.y || 0) + x,
                y = M.utils.toArray(t.path)[0];
            if (t.invert && (x = -x, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) n = function rawPathToString(e) {
                ! function _isNumber(e) {
                    return "number" == typeof e
                }(e[0]) || (e = [e]);
                var t, n, s, a, r = "",
                    i = e.length;
                for (n = 0; n < i; n++) {
                    for (a = e[n], r += "M" + m(a[0]) + "," + m(a[1]) + " C", t = a.length, s = 2; s < t; s++) r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";
                    a.closed && (r += "z")
                }
                return r
            }(function transformRawPath(e, t, n, s, a, r, i) {
                for (var o, h, u, f, c, l = e.length; - 1 < --l;)
                    for (h = (o = e[l]).length, u = 0; u < h; u += 2) f = o[u], c = o[u + 1], o[u] = f * t + c * s + r, o[u + 1] = f * n + c * a + i;
                return e._dirty = 1, e
            }([e.segment], g, 0, 0, -x, d, p));
            else {
                for (n = [d, p], i = 1 / (u = Math.max(5, 200 * (t.precision || 1))), f = 5 / (u += 2), c = s(d + i * g), a = ((l = s(p + e(i) * -x)) - p) / (c - d), r = 2; r < u; r++) o = s(d + r * i * g), h = s(p + e(r * i) * -x), (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l), a = (h - l) / (o - c)), c = o, l = h;
                n = "M" + n.join(",")
            }
            return y && y.setAttribute("d", n), n
        }, CustomEase);

    function CustomEase(e, t, n) {
        a || q(), this.id = e, this.setData(t, n)
    }
    p() && M.registerPlugin(n), n.version = "3.6.1", e.CustomEase = n, e.default = n;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * ScrollTrigger 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function J(e) {
        return e
    }

    function K(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function L() {
        return "undefined" != typeof window
    }

    function M() {
        return Se || L() && (Se = window.gsap) && Se.registerPlugin && Se
    }

    function N(e) {
        return !!~o.indexOf(e)
    }

    function O(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t]
    }

    function P(t, e) {
        var r = e.s,
            n = e.sc,
            o = h.indexOf(t),
            i = n === ot.sc ? 1 : 2;
        return ~o || (o = h.push(t) - 1), h[o + i] || (h[o + i] = O(t, r) || (N(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }))
    }

    function Q(e) {
        return O(e, "getBoundingClientRect") || (N(e) ? function() {
            return pt.width = Me.innerWidth, pt.height = Me.innerHeight, pt
        } : function() {
            return it(e)
        })
    }

    function T(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return (r = "scroll" + n) && (i = O(e, r)) ? i() - Q(e)()[o] : N(e) ? Math.max(ke[r], Pe[r]) - (Me["inner" + n] || ke["client" + n] || Pe["client" + n]) : e[r] - e["offset" + n]
    }

    function U(e, t) {
        for (var r = 0; r < d.length; r += 3) t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2])
    }

    function V(e) {
        return "string" == typeof e
    }

    function W(e) {
        return "function" == typeof e
    }

    function X(e) {
        return "number" == typeof e
    }

    function Y(e) {
        return "object" == typeof e
    }

    function Z(e) {
        return W(e) && e()
    }

    function $(r, n) {
        return function() {
            var e = Z(r),
                t = Z(n);
            return function() {
                Z(e), Z(t)
            }
        }
    }

    function ta(e) {
        return Me.getComputedStyle(e)
    }

    function va(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function xa(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function ya(e) {
        var t, r = [],
            n = e.labels,
            o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r
    }

    function Ba(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function Ca(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }

    function Da(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function Ha(e, t) {
        if (V(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in w ? w[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Ia(e, t, r, n, o, i, a) {
        var s = o.startColor,
            l = o.endColor,
            c = o.fontSize,
            f = o.indent,
            u = o.fontWeight,
            p = _e.createElement("div"),
            d = N(r) || "fixed" === O(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            h = d ? Pe : r,
            v = -1 !== e.indexOf("start"),
            m = v ? s : l,
            b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (b += (n === ot ? x : y) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p), p._offset = p["offset" + n.op.d2], C(p, 0, n, v), p
    }

    function Ma() {
        return l = l || s(D)
    }

    function Na() {
        l || (l = s(D), Xe || E("scrollStart"), Xe = He())
    }

    function Oa() {
        return !Le && !r && !_e.fullscreenElement && a.restart(!0)
    }

    function Ua(e) {
        var t, r = Se.ticker.frame,
            n = [],
            o = 0;
        if (g !== r || De) {
            for (z(); o < k.length; o += 4)(t = Me.matchMedia(k[o]).matches) !== k[o + 3] && ((k[o + 3] = t) ? n.push(o) : z(1, k[o]) || W(k[o + 2]) && k[o + 2]());
            for (A(), o = 0; o < n.length; o++) t = n[o], Ve = k[t], k[t + 2] = k[t + 1](e);
            Ve = 0, i && B(0, 1), g = r, E("matchMedia")
        }
    }

    function Va() {
        return Da(G, "scrollEnd", Va) || B(!0)
    }

    function fb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var o, i = F.length, a = t.style, s = e.style; i--;) a[o = F[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y] = s[x] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Je] = xa(e, nt) + rt, a[qe] = xa(e, ot) + rt, a[Ge] = s[et] = s.top = s[m] = "0", ut(n), s[Je] = s.maxWidth = r[Je], s[qe] = s.maxHeight = r[qe], s[Ge] = r[Ge], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function ib(e) {
        for (var t = H.length, r = e.style, n = [], o = 0; o < t; o++) n.push(H[o], r[H[o]]);
        return n.t = e, n
    }

    function lb(e, t, r, n, o, i, a, s, l, c, f, u) {
        if (W(e) && (e = e(s)), V(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), r) : 0)), X(e)) a && C(a, r, n, !0);
        else {
            W(t) && (t = t(s));
            var p, d, g, h = Ee(t)[0] || Pe,
                v = it(h) || {},
                m = e.split(" ");
            v && (v.left || v.top) || "none" !== ta(h).display || (g = h.style.display, h.style.display = "block", v = it(h), g ? h.style.display = g : h.style.removeProperty("display")), p = Ha(m[0], v[n.d]), d = Ha(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && C(a, d, n, r - d < 20 || a._isStart && 20 < d), r -= r - d
        }
        if (i) {
            var b = e + r,
                x = i._isStart;
            u = "scroll" + n.d2, C(i, b, n, x && 20 < b || !x && (f ? Math.max(Pe[u], ke[u]) : i.parentNode[u]) <= b + 1), f && (l = it(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + rt))
        }
        return Math.round(e)
    }

    function nb(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Pe) {
                for (o in e._stOrig = a.cssText, i = ta(e)) + o || j.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Se.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function ob(l, e) {
        function Ue(e, t, r, n, o) {
            var i = Ue.tween,
                a = t.onComplete,
                s = {};
            return i && i.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function(e) {
                return (e = K(u())) !== c && e !== f && 2 < Math.abs(e - c) ? (i.kill(), Ue.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, f = c, c = K(e)
            }, t.onComplete = function() {
                Ue.tween = 0, a && a.call(i)
            }, i = Ue.tween = Se.to(l, t)
        }
        var c, f, u = P(l, e),
            p = "_scroll" + e.p2;
        return l[p] = u, l.addEventListener("wheel", function() {
            return Ue.tween && Ue.tween.kill() && (Ue.tween = 0)
        }), Ue
    }
    var Se, i, Me, _e, ke, Pe, o, a, s, l, Ee, Ne, Ie, c, Le, Ae, f, ze, u, p, d, We, Be, r, Re, Ve, g, De = 1,
        Fe = [],
        h = [],
        He = Date.now,
        v = He(),
        Xe = 0,
        Ye = 1,
        Ze = Math.abs,
        t = "scrollLeft",
        n = "scrollTop",
        m = "left",
        x = "right",
        y = "bottom",
        Je = "width",
        qe = "height",
        $e = "Right",
        je = "Left",
        Ke = "Top",
        Qe = "Bottom",
        Ge = "padding",
        et = "margin",
        tt = "Width",
        b = "Height",
        rt = "px",
        nt = {
            s: t,
            p: m,
            p2: je,
            os: x,
            os2: $e,
            d: Je,
            d2: tt,
            a: "x",
            sc: function sc(e) {
                return arguments.length ? Me.scrollTo(e, ot.sc()) : Me.pageXOffset || _e[t] || ke[t] || Pe[t] || 0
            }
        },
        ot = {
            s: n,
            p: "top",
            p2: Ke,
            os: y,
            os2: Qe,
            d: qe,
            d2: b,
            a: "y",
            op: nt,
            sc: function sc(e) {
                return arguments.length ? Me.scrollTo(nt.sc(), e) : Me.pageYOffset || _e[n] || ke[n] || Pe[n] || 0
            }
        },
        it = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ta(e)[f] && Se.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        at = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        st = {
            toggleActions: "play",
            anticipatePin: 0
        },
        w = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        C = function _positionMarker(e, t, r, n) {
            var o = {
                    display: "block"
                },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + tt] = 1, o["border" + a + tt] = 0, o[r.p] = t + "px", Se.set(e, o)
        },
        lt = [],
        ct = {},
        S = {},
        _ = [],
        k = [],
        E = function _dispatch(e) {
            return S[e] && S[e].map(function(e) {
                return e()
            }) || _
        },
        I = [],
        A = function _revertRecorded(e) {
            for (var t = 0; t < I.length; t += 4) e && I[t + 3] !== e || (I[t].style.cssText = I[t + 1], I[t + 2].uncache = 1)
        },
        z = function _revertAll(e, t) {
            var r;
            for (ze = 0; ze < lt.length; ze++) r = lt[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
            A(t), t || E("revert")
        },
        B = function _refreshAll(e, t) {
            if (!Xe || e) {
                var r = E("refreshInit");
                for (We && G.sort(), t || z(), ze = 0; ze < lt.length; ze++) lt[ze].refresh();
                for (r.forEach(function(e) {
                        return e && e.render && e.render(-1)
                    }), ze = lt.length; ze--;) lt[ze].scroll.rec = 0;
                a.pause(), E("refresh")
            } else Ca(G, "scrollEnd", Va)
        },
        R = 0,
        ft = 1,
        D = function _updateAll() {
            var e = lt.length,
                t = He(),
                r = 50 <= t - v,
                n = e && lt[0].scroll();
            if (ft = n < R ? -1 : 1, R = n, r && (Xe && !Ae && 200 < t - Xe && (Xe = 0, E("scrollEnd")), Ie = v, v = t), ft < 0) {
                for (ze = e; 0 < ze--;) lt[ze] && lt[ze].update(0, r);
                ft = 1
            } else
                for (ze = 0; ze < e; ze++) lt[ze] && lt[ze].update(0, r);
            l = 0
        },
        F = [m, "top", y, x, et + Qe, et + $e, et + Ke, et + je, "display", "flexShrink", "float", "zIndex"],
        H = F.concat([Je, qe, "boxSizing", "max" + tt, "max" + b, "position", et, Ge, Ge + Ke, Ge + $e, Ge + Qe, Ge + je]),
        q = /([A-Z])/g,
        ut = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    o = e.length,
                    i = 0;
                for ((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(q, "-$1").toLowerCase())
            }
        },
        pt = {
            left: 0,
            top: 0
        },
        j = /(?:webkit|moz|length|cssText|inset)/i;
    nt.op = ot;
    var G = (ScrollTrigger.prototype.init = function init(w, C) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), Ye) {
            var d, n, u, S, M, _, k, E, I, L, A, z, e, U, B, R, D, F, t, H, g, Z, q, h, $, v, m, r, b, x, j, o, p, y, K, G, ee, te = (w = va(V(w) || X(w) || w.nodeType ? {
                    trigger: w
                } : w, st)).horizontal ? nt : ot,
                re = w.onUpdate,
                ne = w.toggleClass,
                i = w.id,
                oe = w.onToggle,
                ie = w.onRefresh,
                a = w.scrub,
                ae = w.trigger,
                se = w.pin,
                le = w.pinSpacing,
                ce = w.invalidateOnRefresh,
                fe = w.anticipatePin,
                s = w.onScrubComplete,
                ue = w.onSnapComplete,
                pe = w.once,
                de = w.snap,
                ge = w.pinReparent,
                he = !a && 0 !== a,
                ve = Ee(w.scroller || Me)[0],
                l = Se.core.getCache(ve),
                me = N(ve),
                be = "pinType" in w ? "fixed" === w.pinType : me || "fixed" === O(ve, "pinType"),
                xe = [w.onEnter, w.onLeave, w.onEnterBack, w.onLeaveBack],
                ye = he && w.toggleActions.split(" "),
                c = "markers" in w ? w.markers : st.markers,
                we = me ? 0 : parseFloat(ta(ve)["border" + te.p2 + tt]) || 0,
                Ce = this,
                f = w.onRefreshInit && function() {
                    return w.onRefreshInit(Ce)
                },
                Te = function _getSizeFunc(e, t, r) {
                    var n = r.d,
                        o = r.d2,
                        i = r.a;
                    return (i = O(e, "getBoundingClientRect")) ? function() {
                        return i()[n]
                    } : function() {
                        return (t ? Me["inner" + o] : e["client" + o]) || 0
                    }
                }(ve, me, te),
                Oe = function _getOffsetsFunc(e, t) {
                    return !t || ~Fe.indexOf(e) ? Q(e) : function() {
                        return pt
                    }
                }(ve, me);
            Ce.media = Ve, fe *= 45, lt.push(Ce), Ce.scroller = ve, Ce.scroll = P(ve, te), M = Ce.scroll(), Ce.vars = w, C = C || w.animation, "refreshPriority" in w && (We = 1), l.tweenScroll = l.tweenScroll || {
                top: ob(ve, ot),
                left: ob(ve, nt)
            }, Ce.tweenTo = d = l.tweenScroll[te.p], C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== w.immediateRender && C.render(0, !0, !0), Ce.animation = C.pause(), C.scrollTrigger = Ce, (o = X(a) && a) && (j = Se.to(C, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                    return s && s(Ce)
                }
            })), b = 0, i = i || C.vars.id), de && (Y(de) || (de = {
                snapTo: de
            }), "scrollBehavior" in Pe.style && Se.set(me ? [Pe, ke] : ve, {
                scrollBehavior: "auto"
            }), u = W(de.snapTo) ? de.snapTo : "labels" === de.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return Se.utils.snap(ya(t), e)
                }
            }(C) : "labelsDirectional" === de.snapTo ? function _getLabelAtDirection(o) {
                return function(e, t) {
                    var r, n = ya(o);
                    if (n.sort(function(e, t) {
                            return e - t
                        }), 0 < t.direction) {
                        for (e -= 1e-4, r = 0; r < n.length; r++)
                            if (n[r] >= e) return n[r];
                        return n.pop()
                    }
                    for (r = n.length, e += 1e-4; r--;)
                        if (n[r] <= e) return n[r];
                    return n[0]
                }
            }(C) : Se.utils.snap(de.snapTo), p = de.duration || {
                min: .1,
                max: 2
            }, p = Y(p) ? Ne(p.min, p.max) : Ne(p, p), y = Se.delayedCall(de.delay || o / 2 || .1, function() {
                if (Math.abs(Ce.getVelocity()) < 10 && !Ae) {
                    var e = C && !he ? C.totalProgress() : Ce.progress,
                        t = (e - x) / (He() - Ie) * 1e3 || 0,
                        r = Ze(t / 2) * t / .185,
                        n = e + (!1 === de.inertia ? 0 : r),
                        o = Ne(0, 1, u(n, Ce)),
                        i = Ce.scroll(),
                        a = Math.round(k + o * U),
                        s = de.onStart,
                        l = de.onInterrupt,
                        c = de.onComplete,
                        f = d.tween;
                    if (i <= E && k <= i && a !== i) {
                        if (f && !f._initted && f.data <= Math.abs(a - i)) return;
                        d(a, {
                            duration: p(Ze(.185 * Math.max(Ze(n - e), Ze(o - e)) / t / .05 || 0)),
                            ease: de.ease || "power3",
                            data: Math.abs(a - i),
                            onInterrupt: function onInterrupt() {
                                return y.restart(!0) && l && l(Ce)
                            },
                            onComplete: function onComplete() {
                                b = x = C && !he ? C.totalProgress() : Ce.progress, ue && ue(Ce), c && c(Ce)
                            }
                        }, i, r * U, a - i - r * U), s && s(Ce, d.tween)
                    }
                } else Ce.isActive && y.restart(!0)
            }).pause()), i && (ct[i] = Ce), ae = Ce.trigger = Ee(ae || se)[0], se = !0 === se ? ae : Ee(se)[0], V(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === et || (le = !(!le && "flex" === ta(se.parentNode).display) && Ge), Ce.pin = se, !1 !== w.force3D && Se.set(se, {
                force3D: !0
            }), (n = Se.core.getCache(se)).spacer ? B = n.pinState : (n.spacer = F = _e.createElement("div"), F.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = B = ib(se)), Ce.spacer = F = n.spacer, r = ta(se), h = r[le + te.os2], H = Se.getProperty(se), g = Se.quickSetter(se, te.a, rt), fb(se, F, r), D = ib(se)), c && (e = Y(c) ? va(c, at) : at, A = Ia("scroller-start", i, ve, te, e, 0), z = Ia("scroller-end", i, ve, te, e, 0, A), t = A["offset" + te.op.d2], I = Ia("start", i, ve, te, e, t), L = Ia("end", i, ve, te, e, t), be || (function _makePositionable(e) {
                e.style.position = "absolute" === ta(e).position ? "absolute" : "relative"
            }(me ? Pe : ve), Se.set([A, z], {
                force3D: !0
            }), v = Se.quickSetter(A, te.a, rt), m = Se.quickSetter(z, te.a, rt))), Ce.revert = function(e) {
                var t = !1 !== e || !Ce.enabled,
                    r = Le;
                t !== S && (t && (G = Math.max(Ce.scroll(), Ce.scroll.rec || 0), K = Ce.progress, ee = C && C.progress()), I && [I, L, A, z].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }), t && (Le = 1), Ce.update(t), Le = r, se && (t ? function _swapPinOut(e, t, r) {
                    if (ut(r), e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t))
                    }
                }(se, F, B) : ge && Ce.isActive || fb(se, F, ta(se), $)), S = t)
            }, Ce.refresh = function(e, t) {
                if (!Le && Ce.enabled || t)
                    if (se && e && Xe) Ca(ScrollTrigger, "scrollEnd", Va);
                    else {
                        Le = 1, j && j.pause(), ce && C && C.progress(0).invalidate(), S || Ce.revert();
                        for (var r, n, o, i, a, s, l, c, f, u = Te(), p = Oe(), d = T(ve, te), g = 0, h = 0, v = w.end, m = w.endTrigger || ae, b = w.start || (0 !== w.start && ae ? se ? "0 0" : "0 100%" : 0), x = ae && Math.max(0, lt.indexOf(Ce)) || 0, y = x; y--;)(s = lt[y]).end || s.refresh(0, 1) || (Le = 1), !(l = s.pin) || l !== ae && l !== se || s.revert();
                        for (k = lb(b, ae, u, te, Ce.scroll(), I, A, Ce, p, we, be, d) || (se ? -.001 : 0), W(v) && (v = v(Ce)), V(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (V(b) ? b.split(" ")[0] : "") + v : (g = Ha(v.substr(2), u), v = V(b) ? b : k + g, m = ae)), E = Math.max(k, lb(v || (m ? "100% 0" : d), m, u, te, Ce.scroll() + g, L, z, Ce, p, we, be, d)) || -.001, U = E - k || (k -= .01) && .001, g = 0, y = x; y--;)(l = (s = lt[y]).pin) && s.start - s._pinPush < k && (r = s.end - s.start, l === ae && (g += r), l === se && (h += r));
                        if (k += g, E += g, Ce._pinPush = h, I && g && ((r = {})[te.a] = "+=" + g, Se.set([I, L], r)), se) r = ta(se), i = te === ot, o = Ce.scroll(), Z = parseFloat(H(te.a)) + h, !d && 1 < E && ((me ? Pe : ve).style["overflow-" + te.a] = "scroll"), fb(se, F, r), D = ib(se), n = it(se, !0), c = be && P(ve, i ? nt : ot)(), le && (($ = [le + te.os2, U + h + rt]).t = F, (y = le === Ge ? xa(se, te) + U + h : 0) && $.push(te.d, y + rt), ut($), be && Ce.scroll(G)), be && ((a = {
                            top: n.top + (i ? o - k : c) + rt,
                            left: n.left + (i ? c : o - k) + rt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[Je] = a.maxWidth = Math.ceil(n.width) + rt, a[qe] = a.maxHeight = Math.ceil(n.height) + rt, a[et] = a[et + Ke] = a[et + $e] = a[et + Qe] = a[et + je] = "0", a[Ge] = r[Ge], a[Ge + Ke] = r[Ge + Ke], a[Ge + $e] = r[Ge + $e], a[Ge + Qe] = r[Ge + Qe], a[Ge + je] = r[Ge + je], R = function _copyState(e, t, r) {
                            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                            return o.t = e.t, o
                        }(B, a, ge)), C ? (f = C._initted, Be(1), C.progress(1, !0), q = H(te.a) - Z + U + h, U !== q && R.splice(R.length - 2, 2), C.progress(0, !0), f || C.invalidate(), Be(0)) : q = U;
                        else if (ae && Ce.scroll())
                            for (n = ae.parentNode; n && n !== Pe;) n._pinOffset && (k -= n._pinOffset, E -= n._pinOffset), n = n.parentNode;
                        for (y = 0; y < x; y++) !(s = lt[y].pin) || s !== ae && s !== se || lt[y].revert(!1);
                        Ce.start = k, Ce.end = E, (M = _ = Ce.scroll()) < G && Ce.scroll(G), Ce.revert(!1), Le = 0, C && he && C._initted && C.progress(ee, !0).render(C.time(), !0, !0), K !== Ce.progress && (j && C.totalProgress(K, !0), Ce.progress = K, Ce.update()), se && le && (F._pinOffset = Math.round(Ce.progress * q)), ie && ie(Ce)
                    }
            }, Ce.getVelocity = function() {
                return (Ce.scroll() - _) / (He() - Ie) * 1e3 || 0
            }, Ce.update = function(e, t) {
                var r, n, o, i, a, s = Ce.scroll(),
                    l = e ? 0 : (s - k) / U,
                    c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
                    f = Ce.progress;
                if (t && (_ = M, M = s, de && (x = b, b = C && !he ? C.totalProgress() : c)), fe && !c && se && !Le && !De && Xe && k < s + (s - _) / (He() - Ie) * fe && (c = 1e-4), c !== f && Ce.enabled) {
                    if (i = (a = (r = Ce.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, Ce.direction = f < c ? 1 : -1, Ce.progress = c, he || (!j || Le || De ? C && C.totalProgress(c, !!Le) : (j.vars.totalProgress = c, j.invalidate().restart())), se)
                        if (e && le && (F.style[le + te.os2] = h), be) {
                            if (i) {
                                if (o = !e && f < c && s < E + 1 && s + 1 >= T(ve, te), ge)
                                    if (e || !r && !o) nb(se, F);
                                    else {
                                        var u = it(se, !0),
                                            p = s - k;
                                        nb(se, Pe, u.top + (te === ot ? p : 0) + rt, u.left + (te === ot ? 0 : p) + rt)
                                    }
                                ut(r || o ? R : D), q !== U && c < 1 && r || g(Z + (1 !== c || o ? 0 : q))
                            }
                        } else g(Z + q * c);
                    !de || d.tween || Le || De || y.restart(!0), ne && (a || pe && c && (c < 1 || !Re)) && Ee(ne.targets).forEach(function(e) {
                        return e.classList[r || pe ? "add" : "remove"](ne.className)
                    }), !re || he || e || re(Ce), i && !Le ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, he && (o = !a && "none" !== ye[n + 1] && ye[n + 1] || ye[n], C && ("complete" === o || "reset" === o || o in C) && ("complete" === o ? C.pause().totalProgress(1) : "reset" === o ? C.restart(!0).pause() : C[o]()), re && re(Ce)), !a && Re || (oe && a && oe(Ce), xe[n] && xe[n](Ce), pe && (1 === c ? Ce.kill(!1, 1) : xe[n] = 0), a || xe[n = 1 === c ? 1 : 3] && xe[n](Ce))) : he && re && !Le && re(Ce)
                }
                m && (v(s + (A._isFlipped ? 1 : 0)), m(s))
            }, Ce.enable = function() {
                Ce.enabled || (Ce.enabled = !0, Ca(ve, "resize", Oa), Ca(ve, "scroll", Na), f && Ca(ScrollTrigger, "refreshInit", f), C && C.add ? Se.delayedCall(.01, function() {
                    return k || E || Ce.refresh()
                }) && (U = .01) && (k = E = 0) : Ce.refresh())
            }, Ce.disable = function(e, t) {
                if (Ce.enabled && (!1 !== e && Ce.revert(), Ce.enabled = Ce.isActive = !1, t || j && j.pause(), G = 0, n && (n.uncache = 1), f && Da(ScrollTrigger, "refreshInit", f), y && (y.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !me)) {
                    for (var r = lt.length; r--;)
                        if (lt[r].scroller === ve && lt[r] !== Ce) return;
                    Da(ve, "resize", Oa), Da(ve, "scroll", Na)
                }
            }, Ce.kill = function(e, t) {
                Ce.disable(e, t), i && delete ct[i];
                var r = lt.indexOf(Ce);
                lt.splice(r, 1), r === ze && 0 < ft && ze--, C && (C.scrollTrigger = null, e && C.render(-1), t || C.kill()), I && [I, L, A, z].forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }), se && (n && (n.uncache = 1), r = 0, lt.forEach(function(e) {
                    return e.pin === se && r++
                }), r || (n.spacer = 0))
            }, Ce.enable()
        } else this.update = this.refresh = this.kill = J
    }, ScrollTrigger.register = function register(e) {
        if (!i && (Se = e || M(), L() && window.document && (Me = window, _e = document, ke = _e.documentElement, Pe = _e.body), Se && (Ee = Se.utils.toArray, Ne = Se.utils.clamp, Be = Se.core.suppressOverwrites || J, Se.core.globals("ScrollTrigger", ScrollTrigger), Pe))) {
            s = Me.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }, Ca(Me, "wheel", Na), o = [Me, _e, ke, Pe], Ca(_e, "scroll", Na);
            var t, r = Pe.style,
                n = r.borderTop;
            r.borderTop = "1px solid #000", t = it(Pe), ot.m = Math.round(t.top + ot.sc()) || 0, nt.m = Math.round(t.left + nt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(Ma, 200), Se.delayedCall(.5, function() {
                return De = 0
            }), Ca(_e, "touchcancel", J), Ca(Pe, "touchstart", J), Ba(Ca, _e, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1
            }), Ba(Ca, _e, "pointerup,touchend,mouseup", function() {
                return Ae = 0
            }), f = Se.utils.checkPrefix("transform"), H.push(f), i = He(), a = Se.delayedCall(.2, B).pause(), d = [_e, "visibilitychange", function() {
                var e = Me.innerWidth,
                    t = Me.innerHeight;
                _e.hidden ? (u = e, p = t) : u === e && p === t || Oa()
            }, _e, "DOMContentLoaded", B, Me, "load", function() {
                return Xe || B()
            }, Me, "resize", Oa], U(Ca)
        }
        return i
    }, ScrollTrigger.defaults = function defaults(e) {
        for (var t in e) st[t] = e[t]
    }, ScrollTrigger.kill = function kill() {
        Ye = 0, lt.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (Re = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Ma, t), "autoRefreshEvents" in e && (U(Da) || U(Ca, e.autoRefreshEvents || "none"), r = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Ee(e)[0],
            n = h.indexOf(r),
            o = N(r);
        ~n && h.splice(n, o ? 6 : 2), o ? Fe.unshift(Me, t, Pe, t, ke, t) : Fe.unshift(r, t)
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for (r in e) n = k.indexOf(r), o = e[r], "all" === (Ve = r) ? o() : (t = Me.matchMedia(r)) && (t.matches && (i = o()), ~n ? (k[n + 1] = $(k[n + 1], o), k[n + 2] = $(k[n + 2], i)) : (n = k.length, k.push(r, o, i), t.addListener ? t.addListener(Ua) : t.addEventListener("change", Ua)), k[n + 3] = t.matches), Ve = 0;
        return k
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (k.length = 0), 0 <= (e = k.indexOf(e)) && k.splice(e, 4)
    }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        i || ScrollTrigger.register(Se) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    G.version = "3.6.1", G.saveStyles = function(e) {
        return e ? Ee(e).forEach(function(e) {
            if (e && e.style) {
                var t = I.indexOf(e);
                0 <= t && I.splice(t, 4), I.push(e, e.style.cssText, Se.core.getCache(e), Ve)
            }
        }) : I
    }, G.revert = function(e, t) {
        return z(!e, t)
    }, G.create = function(e, t) {
        return new G(e, t)
    }, G.refresh = function(e) {
        return e ? Oa() : B(!0)
    }, G.update = D, G.maxScroll = function(e, t) {
        return T(e, t ? nt : ot)
    }, G.getScrollFunc = function(e, t) {
        return P(Ee(e)[0], t ? nt : ot)
    }, G.getById = function(e) {
        return ct[e]
    }, G.getAll = function() {
        return lt.slice(0)
    }, G.isScrolling = function() {
        return !!Xe
    }, G.addEventListener = function(e, t) {
        var r = S[e] || (S[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, G.removeEventListener = function(e, t) {
        var r = S[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, G.batch = function(e, t) {
        function yi(e, t) {
            var r = [],
                n = [],
                o = Se.delayedCall(i, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }
        var r, n = [],
            o = {},
            i = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && W(t[r]) && "onRefreshInit" !== r ? yi(0, t[r]) : t[r];
        return W(a) && (a = a(), Ca(G, "refresh", function() {
            return a = t.batchMax()
        })), Ee(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push(G.create(t))
        }), n
    }, G.sort = function(e) {
        return lt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, M() && Se.registerPlugin(G), e.ScrollTrigger = G, e.default = G;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * DrawSVGPlugin 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function i() {
        return "undefined" != typeof window
    }

    function j() {
        return a || i() && (a = window.gsap) && a.registerPlugin && a
    }

    function m(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function n(e) {
        return parseFloat(e) || 0
    }

    function o(e, t) {
        var r = n(e);
        return ~e.indexOf("%") ? r / 100 * t : r
    }

    function p(e, t) {
        return n(e.getAttribute(t))
    }

    function r(e, t, r, i, s, o) {
        return P(Math.pow((n(r) - n(e)) * s, 2) + Math.pow((n(i) - n(t)) * o, 2))
    }

    function s(e) {
        return console.warn(e)
    }

    function t(e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect")
    }

    function w(e) {
        if (!(e = v(e)[0])) return 0;
        var n, i, o, a, f, h, d, l = e.tagName.toLowerCase(),
            u = e.style,
            c = 1,
            g = 1;
        t(e) && (g = e.getScreenCTM(), c = P(g.a * g.a + g.b * g.b), g = P(g.d * g.d + g.c * g.c));
        try {
            i = e.getBBox()
        } catch (e) {
            s("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var _ = i || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            y = _.x,
            w = _.y,
            x = _.width,
            m = _.height;
        if (i && (x || m) || !k[l] || (x = p(e, k[l][0]), m = p(e, k[l][1]), "rect" !== l && "line" !== l && (x *= 2, m *= 2), "line" === l && (y = p(e, "x1"), w = p(e, "y1"), x = Math.abs(x - y), m = Math.abs(m - w))), "path" === l) a = u.strokeDasharray, u.strokeDasharray = "none", n = e.getTotalLength() || 0, c !== g && s("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), n *= (c + g) / 2, u.strokeDasharray = a;
        else if ("rect" === l) n = 2 * x * c + 2 * m * g;
        else if ("line" === l) n = r(y, w, y + x, w + m, c, g);
        else if ("polyline" === l || "polygon" === l)
            for (o = e.getAttribute("points").match(b) || [], "polygon" === l && o.push(o[0], o[1]), n = 0, f = 2; f < o.length; f += 2) n += r(o[f - 2], o[f - 1], o[f], o[f + 1], c, g) || 0;
        else "circle" !== l && "ellipse" !== l || (h = x / 2 * c, d = m / 2 * g, n = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d))));
        return n || 0
    }

    function x(e, t) {
        if (!(e = v(e)[0])) return [0, 0];
        t = t || w(e) + 1;
        var r = h.getComputedStyle(e),
            i = r.strokeDasharray || "",
            s = n(r.strokeDashoffset),
            o = i.indexOf(",");
        return o < 0 && (o = i.indexOf(" ")), t < (i = o < 0 ? t : n(i.substr(0, o))) && (i = t), [-s || 0, i - s || 0]
    }

    function y() {
        i() && (h = window, l = a = j(), v = a.utils.toArray, d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var a, v, h, d, l, b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        k = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        P = Math.sqrt,
        f = {
            version: "3.6.1",
            name: "drawSVG",
            register: function register(e) {
                a = e, y()
            },
            init: function init(e, r) {
                if (!e.getBBox) return !1;
                l || y();
                var i, s, a, f = w(e);
                return this._style = e.style, this._target = e, r + "" == "true" ? r = "0 100%" : r ? -1 === (r + "").indexOf(" ") && (r = "0 " + r) : r = "0 0", s = function _parse(e, t, n) {
                    var r, i, s = e.indexOf(" ");
                    return i = s < 0 ? (r = void 0 !== n ? n + "" : e, e) : (r = e.substr(0, s), e.substr(s + 1)), r = o(r, t), (i = o(i, t)) < r ? [i, r] : [r, i]
                }(r, f, (i = x(e, f))[0]), this._length = m(f), this._dash = m(i[1] - i[0]), this._offset = m(-i[0]), this._dashPT = this.add(this, "_dash", this._dash, m(s[1] - s[0])), this._offsetPT = this.add(this, "_offset", this._offset, m(-s[0])), d && (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin && (s = n(a.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", s, s + .01)), this._live = t(e) || ~(r + "").indexOf("live"), this._nowrap = ~(r + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
            },
            render: function render(e, t) {
                var n, r, i, s, o = t._pt,
                    a = t._style;
                if (o) {
                    for (t._live && (n = w(t._target)) !== t._length && (r = n / t._length, t._length = n, t._offsetPT && (t._offsetPT.s *= r, t._offsetPT.c *= r), t._dashPT ? (t._dashPT.s *= r, t._dashPT.c *= r) : t._dash *= r); o;) o.r(e, o.d), o = o._next;
                    i = t._dash || e && 1 !== e && 1e-4 || 0, n = t._length - i + .1, s = t._offset, i && s && i + Math.abs(s % t._length) > t._length - .2 && (s += s < 0 ? .1 : -.1) && (n += .1), a.strokeDashoffset = i ? s : s + .001, a.strokeDasharray = n < .2 ? "none" : i ? i + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                }
            },
            getLength: w,
            getPosition: x
        };
    j() && a.registerPlugin(f), e.DrawSVGPlugin = f, e.default = f;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * MorphSVGPlugin 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function m(t) {
        return "string" == typeof t
    }
    var x = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        b = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        n = /(^[#\.][a-z]|[a-y][a-z])/i,
        B = Math.PI / 180,
        D = Math.sin,
        E = Math.cos,
        k = Math.abs,
        J = Math.sqrt,
        s = function _isNumber(t) {
            return "number" == typeof t
        },
        h = function _round(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        };

    function reverseSegment(t) {
        var e, r = 0;
        for (t.reverse(); r < t.length; r += 2) e = t[r], t[r] = t[r + 1], t[r + 1] = e;
        t.reversed = !t.reversed
    }
    var A = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function convertToPath(t, e) {
        var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, M, x, T = t.tagName.toLowerCase(),
            b = .552284749831;
        return "path" !== T && t.getBBox ? (s = function _createPath(t, e) {
            var r, n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                a = [].slice.call(t.attributes),
                o = a.length;
            for (e = "," + e + ","; - 1 < --o;) r = a[o].nodeName.toLowerCase(), e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, a[o].nodeValue);
            return n
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), x = function _attrToObj(t, e) {
            for (var r = e ? e.split(",") : [], n = {}, a = r.length; - 1 < --a;) n[r[a]] = +t.getAttribute(r[a]) || 0;
            return n
        }(t, A[T]), "rect" === T ? (o = x.rx, i = x.ry || o, n = x.x, a = x.y, c = x.width - 2 * o, p = x.height - 2 * i, r = o || i ? "M" + (P = (d = (f = n + o) + c) + o) + "," + (v = a + i) + " V" + (y = v + p) + " C" + [P, w = y + i * b, _ = d + o * b, M = y + i, d, M, d - (d - f) / 3, M, f + (d - f) / 3, M, f, M, u = n + o * (1 - b), M, n, w, n, y, n, y - (y - v) / 3, n, v + (y - v) / 3, n, v, n, m = a + i * (1 - b), u, a, f, a, f + (d - f) / 3, a, d - (d - f) / 3, a, d, a, _, a, P, m, P, v].join(",") + "z" : "M" + (n + c) + "," + a + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : "circle" === T || "ellipse" === T ? (l = "circle" === T ? (o = i = x.r) * b : (o = x.rx, (i = x.ry) * b), r = "M" + ((n = x.cx) + o) + "," + (a = x.cy) + " C" + [n + o, a + l, n + (h = o * b), a + i, n, a + i, n - h, a + i, n - o, a + l, n - o, a, n - o, a - l, n - h, a - i, n, a - i, n + h, a - i, n + o, a - l, n + o, a].join(",") + "z") : "line" === T ? r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2 : "polyline" !== T && "polygon" !== T || (r = "M" + (n = (g = (t.getAttribute("points") + "").match(N) || []).shift()) + "," + (a = g.shift()) + " L" + g.join(","), "polygon" === T && (r += "," + n + "," + a + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(r))), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t
    }

    function arcToSegment(t, e, r, n, a, o, i, s, h) {
        if (t !== s || e !== h) {
            r = k(r), n = k(n);
            var l = a % 360 * B,
                g = E(l),
                c = D(l),
                p = Math.PI,
                u = 2 * p,
                f = (t - s) / 2,
                d = (e - h) / 2,
                _ = g * f + c * d,
                P = -c * f + g * d,
                m = _ * _,
                v = P * P,
                y = m / (r * r) + v / (n * n);
            1 < y && (r = J(y) * r, n = J(y) * n);
            var w = r * r,
                M = n * n,
                x = (w * M - w * v - M * m) / (w * v + M * m);
            x < 0 && (x = 0);
            var T = (o === i ? -1 : 1) * J(x),
                b = r * P / n * T,
                S = -n * _ / r * T,
                N = g * b - c * S + (t + s) / 2,
                z = c * b + g * S + (e + h) / 2,
                A = (_ - b) / r,
                R = (P - S) / n,
                O = (-_ - b) / r,
                j = (-P - S) / n,
                Y = A * A + R * R,
                C = (R < 0 ? -1 : 1) * Math.acos(A / J(Y)),
                I = (A * j - R * O < 0 ? -1 : 1) * Math.acos((A * O + R * j) / J(Y * (O * O + j * j)));
            isNaN(I) && (I = p), !i && 0 < I ? I -= u : i && I < 0 && (I += u), C %= u, I %= u;
            var V, F = Math.ceil(k(I) / (u / 4)),
                L = [],
                X = I / F,
                U = 4 / 3 * D(X / 2) / (1 + E(X / 2)),
                G = g * r,
                Q = c * r,
                q = c * -n,
                H = g * n;
            for (V = 0; V < F; V++) _ = E(a = C + V * X), P = D(a), A = E(a += X), R = D(a), L.push(_ - U * P, P + U * _, A + U * R, R - U * A, A, R);
            for (V = 0; V < L.length; V += 2) _ = L[V], P = L[V + 1], L[V] = _ * G + P * q + N, L[V + 1] = _ * Q + P * H + z;
            return L[V - 2] = s, L[V - 1] = h, L
        }
    }

    function stringToRawPath(t) {
        function uc(t, e, r, n) {
            g = (r - t) / 3, c = (n - e) / 3, s.push(t + g, e + c, r - g, n - c, r, n)
        }
        var e, r, n, a, o, i, s, h, l, g, c, p, u, f, d, _ = (t + "").replace(b, function(t) {
                var e = +t;
                return e < 1e-4 && -1e-4 < e ? 0 : e
            }).match(x) || [],
            P = [],
            m = 0,
            v = 0,
            y = _.length,
            w = 0,
            M = "ERROR: malformed path: " + t;
        if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(M), P;
        for (e = 0; e < y; e++)
            if (u = o, isNaN(_[e]) ? i = (o = _[e].toUpperCase()) !== _[e] : e--, n = +_[e + 1], a = +_[e + 2], i && (n += m, a += v), e || (h = n, l = a), "M" === o) s && (s.length < 8 ? --P.length : w += s.length), m = h = n, v = l = a, s = [n, a], P.push(s), e += 2, o = "L";
            else if ("C" === o) i || (m = v = 0), (s = s || [0, 0]).push(n, a, m + 1 * _[e + 3], v + 1 * _[e + 4], m += 1 * _[e + 5], v += 1 * _[e + 6]), e += 6;
        else if ("S" === o) g = m, c = v, "C" !== u && "S" !== u || (g += m - s[s.length - 4], c += v - s[s.length - 3]), i || (m = v = 0), s.push(g, c, n, a, m += 1 * _[e + 3], v += 1 * _[e + 4]), e += 4;
        else if ("Q" === o) g = m + 2 / 3 * (n - m), c = v + 2 / 3 * (a - v), i || (m = v = 0), m += 1 * _[e + 3], v += 1 * _[e + 4], s.push(g, c, m + 2 / 3 * (n - m), v + 2 / 3 * (a - v), m, v), e += 4;
        else if ("T" === o) g = m - s[s.length - 4], c = v - s[s.length - 3], s.push(m + g, v + c, n + 2 / 3 * (m + 1.5 * g - n), a + 2 / 3 * (v + 1.5 * c - a), m = n, v = a), e += 2;
        else if ("H" === o) uc(m, v, m = n, v), e += 1;
        else if ("V" === o) uc(m, v, m, v = n + (i ? v - m : 0)), e += 1;
        else if ("L" === o || "Z" === o) "Z" === o && (n = h, a = l, s.closed = !0), ("L" === o || .5 < k(m - n) || .5 < k(v - a)) && (uc(m, v, n, a), "L" === o && (e += 2)), m = n, v = a;
        else if ("A" === o) {
            if (f = _[e + 4], d = _[e + 5], g = _[e + 6], c = _[e + 7], r = 7, 1 < f.length && (f.length < 3 ? (c = g, g = d, r--) : (c = d, g = f.substr(2), r -= 2), d = f.charAt(1), f = f.charAt(0)), p = arcToSegment(m, v, +_[e + 1], +_[e + 2], +_[e + 3], +f, +d, (i ? m : 0) + 1 * g, (i ? v : 0) + 1 * c), e += r, p)
                for (r = 0; r < p.length; r++) s.push(p[r]);
            m = s[s.length - 2], v = s[s.length - 1]
        } else console.log(M);
        return (e = s.length) < 6 ? (P.pop(), e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0), P.totalPoints = w + e, P
    }

    function rawPathToString(t) {
        s(t[0]) && (t = [t]);
        var e, r, n, a, o = "",
            i = t.length;
        for (r = 0; r < i; r++) {
            for (a = t[r], o += "M" + h(a[0]) + "," + h(a[1]) + " C", e = a.length, n = 2; n < e; n++) o += h(a[n++]) + "," + h(a[n++]) + " " + h(a[n++]) + "," + h(a[n++]) + " " + h(a[n++]) + "," + h(a[n]) + " ";
            a.closed && (o += "z")
        }
        return o
    }

    function y() {
        return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
    }

    function z(t) {
        return "function" == typeof t
    }

    function M(t) {
        return console && console.warn(t)
    }

    function O(t) {
        var e, r = t.length,
            n = 0,
            a = 0;
        for (e = 0; e < r; e++) n += t[e++], a += t[e];
        return [n / (r / 2), a / (r / 2)]
    }

    function P(t) {
        var e, r, n, a = t.length,
            o = t[0],
            i = o,
            s = t[1],
            h = s;
        for (n = 6; n < a; n += 6) o < (e = t[n]) ? o = e : e < i && (i = e), s < (r = t[n + 1]) ? s = r : r < h && (h = r);
        return t.centerX = (o + i) / 2, t.centerY = (s + h) / 2, t.size = (o - i) * (s - h)
    }

    function Q(t, e) {
        void 0 === e && (e = 3);
        for (var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _, P, m = t.length, v = t[0][0], y = v, w = t[0][1], M = w, x = 1 / e; - 1 < --m;)
            for (r = (i = t[m]).length, o = 6; o < r; o += 6)
                for (g = i[o], c = i[o + 1], p = i[o + 2] - g, d = i[o + 3] - c, u = i[o + 4] - g, _ = i[o + 5] - c, f = i[o + 6] - g, P = i[o + 7] - c, s = e; - 1 < --s;) v < (n = ((h = x * s) * h * f + 3 * (l = 1 - h) * (h * u + l * p)) * h + g) ? v = n : n < y && (y = n), w < (a = (h * h * P + 3 * l * (h * _ + l * d)) * h + c) ? w = a : a < M && (M = a);
        return t.centerX = (v + y) / 2, t.centerY = (w + M) / 2, t.left = y, t.width = v - y, t.top = M, t.height = w - M, t.size = (v - y) * (w - M)
    }

    function R(t, e) {
        return e.length - t.length
    }

    function S(t, e) {
        var r = t.size || P(t),
            n = e.size || P(e);
        return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r
    }

    function T(t, e) {
        var r, n, a = t.slice(0),
            o = t.length,
            i = o - 2;
        for (e |= 0, r = 0; r < o; r++) n = (r + e) % i, t[r++] = a[n], t[r] = a[1 + n]
    }

    function U(t, e, r, n, a) {
        var o, i, s, h, l = t.length,
            g = 0,
            c = l - 2;
        for (r *= 6, i = 0; i < l; i += 6) h = t[o = (i + r) % c] - (e[i] - n), s = t[1 + o] - (e[i + 1] - a), g += _(s * s + h * h);
        return g
    }

    function V(t, e, r) {
        var n, a, o, i = t.length,
            s = O(t),
            h = O(e),
            l = h[0] - s[0],
            g = h[1] - s[1],
            c = U(t, e, 0, l, g),
            p = 0;
        for (o = 6; o < i; o += 6)(a = U(t, e, o / 6, l, g)) < c && (c = a, p = o);
        if (r)
            for (reverseSegment(n = t.slice(0)), o = 6; o < i; o += 6)(a = U(n, e, o / 6, l, g)) < c && (c = a, p = -o);
        return p / 6
    }

    function W(t, e, r) {
        for (var n, a, o, i, s, h, l = t.length, g = 1e20, c = 0, p = 0; - 1 < --l;)
            for (h = (n = t[l]).length, s = 0; s < h; s += 6) a = n[s] - e, o = n[s + 1] - r, (i = _(a * a + o * o)) < g && (g = i, c = n[s], p = n[s + 1]);
        return [c, p]
    }

    function X(t, e, r, n, a, o) {
        var i, s, h, l, g = e.length,
            c = 0,
            p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
            u = 1e20,
            f = t.centerX + a,
            d = t.centerY + o;
        for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++) s = e[i].centerX - f, h = e[i].centerY - d, (l = _(s * s + h * h)) < u && (c = i, u = l);
        return l = e[c], e.splice(c, 1), l
    }

    function Y(t, e) {
        var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _ = 0,
            P = t.length,
            m = e / ((P - 2) / 6);
        for (f = 2; f < P; f += 6)
            for (_ += m; .999999 < _;) r = t[f - 2], n = t[f - 1], a = t[f], o = t[f + 1], i = t[f + 2], s = t[f + 3], h = t[f + 4], l = t[f + 5], g = r + (a - r) * (d = 1 / ((Math.floor(_) || 1) + 1)), g += ((p = a + (i - a) * d) - g) * d, p += (i + (h - i) * d - p) * d, c = n + (o - n) * d, c += ((u = o + (s - o) * d) - c) * d, u += (s + (l - s) * d - u) * d, t.splice(f, 4, r + (a - r) * d, n + (o - n) * d, g, c, g + (p - g) * d, c + (u - c) * d, p, u, i + (h - i) * d, s + (l - s) * d), f += 6, P += 6, _--;
        return t
    }

    function Z(t, e, r, n, a) {
        var o, i, s, h, l, g, c, p = e.length - t.length,
            u = 0 < p ? e : t,
            f = 0 < p ? t : e,
            d = 0,
            _ = "complexity" === n ? R : S,
            m = "position" === n ? 0 : "number" == typeof n ? n : .8,
            v = f.length,
            y = "object" == typeof r && r.push ? r.slice(0) : [r],
            w = "reverse" === y[0] || y[0] < 0,
            x = "log" === r;
        if (f[0]) {
            if (1 < u.length && (t.sort(_), e.sort(_), u.size || Q(u), f.size || Q(f), g = u.centerX - f.centerX, c = u.centerY - f.centerY, _ === S))
                for (v = 0; v < f.length; v++) u.splice(v, 0, X(f[v], u, v, m, g, c));
            if (p)
                for (p < 0 && (p = -p), u[0].length > f[0].length && Y(f[0], (u[0].length - f[0].length) / 6 | 0), v = f.length; d < p;) u[v].size || P(u[v]), h = (s = W(f, u[v].centerX, u[v].centerY))[0], l = s[1], f[v++] = [h, l, h, l, h, l, h, l], f.totalPoints += 8, d++;
            for (v = 0; v < t.length; v++) o = e[v], i = t[v], (p = o.length - i.length) < 0 ? Y(o, -p / 6 | 0) : 0 < p && Y(i, p / 6 | 0), w && !1 !== a && !i.reversed && reverseSegment(i), (r = y[v] || 0 === y[v] ? y[v] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[v] = r = V(i, o, !v || !1 === a), r < 0 && (w = !0, reverseSegment(i), r = -r), T(i, 6 * r)) : "reverse" !== r && (v && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r))) : !w && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (reverseSegment(i), y[v] = -1, w = !0) : "auto" === r ? y[v] = 0 : "reverse" === r && (y[v] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));
            return x && M("shapeIndex:[" + y.join(",") + "]"), t.shapeIndex = y
        }
    }

    function $(t, e, r, n, a) {
        var o = stringToRawPath(t[0]),
            i = stringToRawPath(t[1]);
        Z(o, i, e || 0 === e ? e : "auto", r, a) && (t[0] = rawPathToString(o), t[1] = rawPathToString(i), "log" !== n && !0 !== n || M('precompile:["' + t[0] + '","' + t[1] + '"]'))
    }

    function aa(t, e) {
        var r, n, a, o, i, s, h, l = 0,
            g = parseFloat(t[0]),
            c = parseFloat(t[1]),
            p = g + "," + c + " ";
        for (r = .5 * e / (.5 * (a = t.length) - 1), n = 0; n < a - 2; n += 2) {
            if (l += r, s = parseFloat(t[n + 2]), h = parseFloat(t[n + 3]), .999999 < l)
                for (i = 1 / (Math.floor(l) + 1), o = 1; .999999 < l;) p += (g + (s - g) * i * o).toFixed(2) + "," + (c + (h - c) * i * o).toFixed(2) + " ", l--, o++;
            p += s + "," + h + " ", g = s, c = h
        }
        return p
    }

    function ba(t) {
        var e = t[0].match(G) || [],
            r = t[1].match(G) || [],
            n = r.length - e.length;
        0 < n ? t[0] = aa(e, n) : t[1] = aa(r, -n)
    }

    function ca(e) {
        return isNaN(e) ? ba : function(t) {
            ba(t), t[1] = function _offsetPoints(t, e) {
                if (!e) return t;
                var r, n, a, o = t.match(G) || [],
                    i = o.length,
                    s = "";
                for (r = "reverse" === e ? (n = i - 1, -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i, 2), a = 0; a < i; a += 2) s += o[n - 1] + "," + o[n] + " ", n = (n + r) % i;
                return s
            }(t[1], parseInt(e, 10))
        }
    }

    function ea(t, e) {
        for (var r, n, a, o, i, s, h, l, g, c, p, u, f = t.length, d = .2 * (e || 1); - 1 < --f;) {
            for (p = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0], u = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, l = n.length - 2, h = 6; h < l; h += 6) a = n[h] - n[h - 2], o = n[h + 1] - n[h - 1], i = n[h + 2] - n[h], s = n[h + 3] - n[h + 1], g = w(o, a), c = w(s, i), (r = Math.abs(g - c) < d) && (u[h - 2] = g, u[h + 2] = c, u[h - 1] = _(a * a + o * o), u[h + 3] = _(i * i + s * s)), p.push(r, r, 0, 0, r, r);
            n[l] === n[0] && n[1 + l] === n[1] && (a = n[0] - n[l - 2], o = n[1] - n[l - 1], i = n[2] - n[0], s = n[3] - n[1], g = w(o, a), c = w(s, i), Math.abs(g - c) < d && (u[l - 2] = g, u[2] = c, u[l - 1] = _(a * a + o * o), u[3] = _(i * i + s * s), p[l - 2] = p[l - 1] = !0))
        }
        return t
    }

    function fa(t) {
        var e = t.trim().split(" ");
        return {
            x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
            y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
        }
    }

    function ia(t, e, r, n) {
        var a, o, i = this._origin,
            s = this._eOrigin,
            h = t[r] - i.x,
            l = t[r + 1] - i.y,
            g = _(h * h + l * l),
            c = w(l, h);
        return h = e[r] - s.x, l = e[r + 1] - s.y, o = function _shortAngle(t) {
            return t !== t % p ? t + (t < 0 ? u : -u) : t
        }(a = w(l, h) - c), !n && I && Math.abs(o + I.ca) < f && (n = I), this._anchorPT = I = {
            _next: this._anchorPT,
            t: t,
            sa: c,
            ca: n && o * n.ca < 0 && Math.abs(o) > d ? a : o,
            sl: g,
            cl: _(h * h + l * l) - g,
            i: r
        }
    }

    function ja(t) {
        r = y(), a = a || r && r.plugins.morphSVG, r && a ? (C = r.utils.toArray, a.prototype._tweenRotation = ia, F = 1) : t && M("Please gsap.registerPlugin(MorphSVGPlugin)")
    }
    var r, C, I, F, a, w = Math.atan2,
        j = Math.cos,
        L = Math.sin,
        _ = Math.sqrt,
        p = Math.PI,
        u = 2 * p,
        f = .3 * p,
        d = .7 * p,
        G = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        q = /(^[#\.][a-z]|[a-y][a-z])/i,
        H = /[achlmqstvz]/i,
        K = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
        tt = {
            version: "3.6.1",
            name: "morphSVG",
            rawVars: 1,
            register: function register(t, e) {
                r = t, a = e, ja()
            },
            init: function init(t, e, r, n, a) {
                if (F || ja(1), !e) return M("invalid shape"), !1;
                var o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, x, T, b, S, N;
                if (z(e) && (e = e.call(r, n, t, a)), "string" == typeof e || e.getBBox || e[0]) e = {
                    shape: e
                };
                else if ("object" == typeof e) {
                    for (i in o = {}, e) o[i] = z(e[i]) && "render" !== i ? e[i].call(r, n, t, a) : e[i];
                    e = o
                }
                var A = t.nodeType ? window.getComputedStyle(t) : {},
                    R = A.fill + "",
                    O = !("none" === R || "0" === (R.match(G) || [])[3] || "evenodd" === A.fillRule),
                    j = (e.origin || "50 50").split(",");
                if (l = "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) || "POLYGON" === o, "PATH" !== o && !l && !e.prop) return M("Cannot morph a <" + o + "> element. " + K), !1;
                if (i = "PATH" === o ? "d" : "points", !e.prop && !z(t.setAttribute)) return !1;
                if (h = function _parseShape(t, e, r) {
                        var n, a;
                        return (!("string" == typeof t) || q.test(t) || (t.match(G) || []).length < 3) && ((n = C(t)[0]) ? (a = (n.nodeName + "").toUpperCase(), e && "PATH" !== a && (n = convertToPath(n, !1), a = "PATH"), t = n.getAttribute("PATH" === a ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (M("WARNING: invalid morph to: " + t), t = !1)), t
                    }(e.shape || e.d || e.points || "", "d" === i, t), l && H.test(h)) return M("A <" + o + "> cannot accept path data. " + K), !1;
                if (g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", c = e.map || tt.defaultMap, this._prop = e.prop, this._render = e.render || tt.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : tt.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, h) {
                    if (this._target = t, w = "object" == typeof e.precompile, f = this._prop ? t[this._prop] : t.getAttribute(i), this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", f), "d" === i || this._prop) {
                        if (f = stringToRawPath(w ? e.precompile[0] : f), d = stringToRawPath(w ? e.precompile[1] : h), !w && !Z(f, d, g, c, O)) return !1;
                        for ("log" !== e.precompile && !0 !== e.precompile || M('precompile:["' + rawPathToString(f) + '","' + rawPathToString(d) + '"]'), (S = "linear" !== (e.type || tt.defaultType)) && (f = ea(f, e.smoothTolerance), d = ea(d, e.smoothTolerance), f.size || Q(f), d.size || Q(d), b = fa(j[0]), this._origin = f.origin = {
                                x: f.left + b.x * f.width,
                                y: f.top + b.y * f.height
                            }, j[1] && (b = fa(j[1])), this._eOrigin = {
                                x: d.left + b.x * d.width,
                                y: d.top + b.y * d.height
                            }), this._rawPath = t._gsRawPath = f, P = f.length; - 1 < --P;)
                            for (v = f[P], y = d[P], p = v.isSmooth || [], u = y.isSmooth || [], m = v.length, _ = I = 0; _ < m; _ += 2) y[_] === v[_] && y[_ + 1] === v[_ + 1] || (S ? p[_] && u[_] ? (x = v.smoothData, T = y.smoothData, N = _ + (_ === m - 4 ? 7 - m : 5), this._controlPT = {
                                _next: this._controlPT,
                                i: _,
                                j: P,
                                l1s: x[_ + 1],
                                l1c: T[_ + 1] - x[_ + 1],
                                l2s: x[N],
                                l2c: T[N] - x[N]
                            }, s = this._tweenRotation(v, y, _ + 2), this._tweenRotation(v, y, _, s), this._tweenRotation(v, y, N - 1, s), _ += 4) : this._tweenRotation(v, y, _) : (s = this.add(v, _, v[_], y[_]), s = this.add(v, _ + 1, v[_ + 1], y[_ + 1]) || s))
                    } else s = this.add(t, "setAttribute", t.getAttribute(i) + "", h + "", n, a, 0, ca(g), i);
                    S && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), s && (this._props.push("morphSVG"), s.end = h, s.endProp = i)
                }
                return 1
            },
            render: function render(t, e) {
                for (var r, n, a, o, i, s, h, l, g, c, p, u, f = e._rawPath, d = e._controlPT, _ = e._anchorPT, P = e._rnd, m = e._target, v = e._pt; v;) v.r(t, v.d), v = v._next;
                if (1 === t && e._apply)
                    for (v = e._pt; v;) v.end && (e._prop ? m[e._prop] = v.end : m.setAttribute(v.endProp, v.end)), v = v._next;
                else if (f) {
                    for (; _;) i = _.sa + t * _.ca, o = _.sl + t * _.cl, _.t[_.i] = e._origin.x + j(i) * o, _.t[_.i + 1] = e._origin.y + L(i) * o, _ = _._next;
                    for (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; d;) u = (s = d.i) + (s === (a = f[d.j]).length - 4 ? 7 - a.length : 5), i = w(a[u] - a[s + 1], a[u - 1] - a[s]), c = L(i), p = j(i), l = a[s + 2], g = a[s + 3], o = d.l1s + n * d.l1c, a[s] = l - p * o, a[s + 1] = g - c * o, o = d.l2s + n * d.l2c, a[u - 1] = l + p * o, a[u] = g + c * o, d = d._next;
                    if (m._gsRawPath = f, e._apply) {
                        for (r = "", h = 0; h < f.length; h++)
                            for (o = (a = f[h]).length, r += "M" + (a[0] * P | 0) / P + " " + (a[1] * P | 0) / P + " C", s = 2; s < o; s++) r += (a[s] * P | 0) / P + " ";
                        e._prop ? m[e._prop] = r : m.setAttribute("d", r)
                    }
                }
                e._render && f && e._render.call(e._tween, f, m)
            },
            kill: function kill() {
                this._pt = this._rawPath = 0
            },
            getRawPath: function getRawPath(t) {
                var e, r = (t = m(t) && n.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
                return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = stringToRawPath(t)) : t ? m(t) ? stringToRawPath(t) : s(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
            },
            stringToRawPath: stringToRawPath,
            rawPathToString: rawPathToString,
            normalizeStrings: function normalizeStrings(t, e, r) {
                var n = r.shapeIndex,
                    a = r.map,
                    o = [t, e];
                return $(o, n, a), o
            },
            pathFilter: $,
            pointsFilter: ba,
            getTotalSize: Q,
            equalizeSegmentQuantity: Z,
            convertToPath: function convertToPath$1(t, e) {
                return C(t).map(function(t) {
                    return convertToPath(t, !1 !== e)
                })
            },
            defaultType: "linear",
            defaultUpdateTarget: !0,
            defaultMap: "size"
        };
    y() && r.registerPlugin(tt), t.MorphSVGPlugin = tt, t.default = tt;
    if (typeof(window) === "undefined" || window !== t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    } else {
        delete t.default
    }
});

;
(function(e) {
    e.fn.customScrollbar = function(i, t) {
        var o = {
            skin: undefined,
            hScroll: true,
            vScroll: true,
            updateOnWindowResize: false,
            animationSpeed: 300,
            onCustomScroll: undefined,
            swipeSpeed: 1,
            wheelSpeed: 40,
            fixedThumbWidth: undefined,
            fixedThumbHeight: undefined
        };
        var s = function(i, t) {
            this.$element = e(i);
            this.options = t;
            this.addScrollableClass();
            this.addSkinClass();
            this.addScrollBarComponents();
            if (this.options.vScroll) this.vScrollbar = new n(this, new r);
            if (this.options.hScroll) this.hScrollbar = new n(this, new l);
            this.$element.data("scrollable", this);
            this.initKeyboardScrolling();
            this.bindEvents()
        };
        s.prototype = {
            addScrollableClass: function() {
                if (!this.$element.hasClass("scrollable")) {
                    this.scrollableAdded = true;
                    this.$element.addClass("scrollable")
                }
            },
            removeScrollableClass: function() {
                if (this.scrollableAdded) this.$element.removeClass("scrollable")
            },
            addSkinClass: function() {
                if (typeof this.options.skin == "string" && !this.$element.hasClass(this.options.skin)) {
                    this.skinClassAdded = true;
                    this.$element.addClass(this.options.skin)
                }
            },
            removeSkinClass: function() {
                if (this.skinClassAdded) this.$element.removeClass(this.options.skin)
            },
            addScrollBarComponents: function() {
                this.assignViewPort();
                if (this.$viewPort.length == 0) {
                    this.$element.wrapInner('<div class="viewport" />');
                    this.assignViewPort();
                    this.viewPortAdded = true
                }
                this.assignOverview();
                if (this.$overview.length == 0) {
                    this.$viewPort.wrapInner('<div class="overview" />');
                    this.assignOverview();
                    this.overviewAdded = true
                }
                this.addScrollBar("vertical", "prepend");
                this.addScrollBar("horizontal", "append")
            },
            removeScrollbarComponents: function() {
                this.removeScrollbar("vertical");
                this.removeScrollbar("horizontal");
                if (this.overviewAdded) this.$element.unwrap();
                if (this.viewPortAdded) this.$element.unwrap()
            },
            removeScrollbar: function(e) {
                if (this[e + "ScrollbarAdded"]) this.$element.find(".scroll-bar." + e).remove()
            },
            assignViewPort: function() {
                this.$viewPort = this.$element.find(".viewport")
            },
            assignOverview: function() {
                this.$overview = this.$viewPort.find(".overview")
            },
            addScrollBar: function(e, i) {
                if (this.$element.find(".scroll-bar." + e).length == 0) {
                    this.$element[i]("<div class='scroll-bar " + e + "'><div class='thumb'></div></div>");
                    this[e + "ScrollbarAdded"] = true
                }
            },
            resize: function(e) {
                if (this.vScrollbar) this.vScrollbar.resize(e);
                if (this.hScrollbar) this.hScrollbar.resize(e)
            },
            scrollTo: function(e) {
                if (this.vScrollbar) this.vScrollbar.scrollToElement(e);
                if (this.hScrollbar) this.hScrollbar.scrollToElement(e)
            },
            scrollToXY: function(e, i) {
                this.scrollToX(e);
                this.scrollToY(i)
            },
            scrollToX: function(e) {
                if (this.hScrollbar) this.hScrollbar.scrollOverviewTo(e, true)
            },
            scrollToY: function(e) {
                if (this.vScrollbar) this.vScrollbar.scrollOverviewTo(e, true)
            },
            remove: function() {
                this.removeScrollableClass();
                this.removeSkinClass();
                this.removeScrollbarComponents();
                this.$element.data("scrollable", null);
                this.removeKeyboardScrolling();
                if (this.vScrollbar) this.vScrollbar.remove();
                if (this.hScrollbar) this.hScrollbar.remove()
            },
            setAnimationSpeed: function(e) {
                this.options.animationSpeed = e
            },
            isInside: function(i, t) {
                var o = e(i);
                var s = e(t);
                var n = o.offset();
                var l = s.offset();
                return n.top >= l.top && n.left >= l.left && n.top + o.height() <= l.top + s.height() && n.left + o.width() <= l.left + s.width()
            },
            initKeyboardScrolling: function() {
                var e = this;
                this.elementKeydown = function(i) {
                    if (document.activeElement === e.$element[0]) {
                        if (e.vScrollbar) e.vScrollbar.keyScroll(i);
                        if (e.hScrollbar) e.hScrollbar.keyScroll(i)
                    }
                };
                this.$element.attr("tabindex", "-1").keydown(this.elementKeydown)
            },
            removeKeyboardScrolling: function() {
                this.$element.removeAttr("tabindex").unbind("keydown", this.elementKeydown)
            },
            bindEvents: function() {
                if (this.options.onCustomScroll) this.$element.on("customScroll", this.options.onCustomScroll)
            }
        };
        var n = function(e, i) {
            this.scrollable = e;
            this.sizing = i;
            this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
            this.$thumb = this.$scrollBar.find(".thumb");
            this.setScrollPosition(0, 0);
            this.resize();
            this.initMouseMoveScrolling();
            this.initMouseWheelScrolling();
            this.initTouchScrolling();
            this.initMouseClickScrolling();
            this.initWindowResize()
        };
        n.prototype = {
            resize: function(e) {
                this.scrollable.$viewPort.height(this.scrollable.$element.height());
                this.sizing.size(this.scrollable.$viewPort, this.sizing.size(this.scrollable.$element));
                this.viewPortSize = this.sizing.size(this.scrollable.$viewPort);
                this.overviewSize = this.sizing.size(this.scrollable.$overview);
                this.ratio = this.viewPortSize / this.overviewSize;
                this.sizing.size(this.$scrollBar, this.viewPortSize);
                this.thumbSize = this.calculateThumbSize();
                this.sizing.size(this.$thumb, this.thumbSize);
                this.maxThumbPosition = this.calculateMaxThumbPosition();
                this.maxOverviewPosition = this.calculateMaxOverviewPosition();
                this.enabled = this.overviewSize > this.viewPortSize;
                if (this.scrollPercent === undefined) this.scrollPercent = 0;
                if (this.enabled) this.rescroll(e);
                else this.setScrollPosition(0, 0);
                this.$scrollBar.toggle(this.enabled)
            },
            calculateThumbSize: function() {
                var e = this.sizing.fixedThumbSize(this.scrollable.options);
                var i;
                if (e) i = e;
                else i = this.ratio * this.viewPortSize;
                return Math.max(i, this.sizing.minSize(this.$thumb))
            },
            initMouseMoveScrolling: function() {
                var i = this;
                this.$thumb.mousedown(function(e) {
                    if (i.enabled) i.startMouseMoveScrolling(e)
                });
                this.documentMouseup = function(e) {
                    i.stopMouseMoveScrolling(e)
                };
                e(document).mouseup(this.documentMouseup);
                this.documentMousemove = function(e) {
                    i.mouseMoveScroll(e)
                };
                e(document).mousemove(this.documentMousemove);
                this.$thumb.click(function(e) {
                    e.stopPropagation()
                })
            },
            removeMouseMoveScrolling: function() {
                this.$thumb.unbind();
                e(document).unbind("mouseup", this.documentMouseup);
                e(document).unbind("mousemove", this.documentMousemove)
            },
            initMouseWheelScrolling: function() {
                var e = this;
                this.scrollable.$element.mousewheel(function(i, t, o, s) {
                    if (e.enabled) {
                        if (e.mouseWheelScroll(o, s)) {
                            i.stopPropagation();
                            i.preventDefault()
                        }
                    }
                })
            },
            removeMouseWheelScrolling: function() {
                this.scrollable.$element.unbind("mousewheel")
            },
            initTouchScrolling: function() {
                if (document.addEventListener) {
                    var e = this;
                    this.elementTouchstart = function(i) {
                        if (e.enabled) e.startTouchScrolling(i)
                    };
                    this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
                    this.documentTouchmove = function(i) {
                        e.touchScroll(i)
                    };
                    document.addEventListener("touchmove", this.documentTouchmove);
                    this.elementTouchend = function(i) {
                        e.stopTouchScrolling(i)
                    };
                    this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend)
                }
            },
            removeTouchScrolling: function() {
                if (document.addEventListener) {
                    this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
                    document.removeEventListener("touchmove", this.documentTouchmove);
                    this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend)
                }
            },
            initMouseClickScrolling: function() {
                var e = this;
                this.scrollBarClick = function(i) {
                    e.mouseClickScroll(i)
                };
                this.$scrollBar.click(this.scrollBarClick)
            },
            removeMouseClickScrolling: function() {
                this.$scrollBar.unbind("click", this.scrollBarClick)
            },
            initWindowResize: function() {
                if (this.scrollable.options.updateOnWindowResize) {
                    var i = this;
                    this.windowResize = function() {
                        i.resize()
                    };
                    e(window).resize(this.windowResize)
                }
            },
            removeWindowResize: function() {
                e(window).unbind("resize", this.windowResize)
            },
            isKeyScrolling: function(e) {
                return this.keyScrollDelta(e) != null
            },
            keyScrollDelta: function(e) {
                for (var i in this.sizing.scrollingKeys)
                    if (i == e) return this.sizing.scrollingKeys[e](this.viewPortSize);
                return null
            },
            startMouseMoveScrolling: function(i) {
                this.mouseMoveScrolling = true;
                e("html").addClass("not-selectable");
                this.setUnselectable(e("html"), "on");
                this.setScrollEvent(i)
            },
            stopMouseMoveScrolling: function(i) {
                this.mouseMoveScrolling = false;
                e("html").removeClass("not-selectable");
                this.setUnselectable(e("html"), null)
            },
            setUnselectable: function(e, i) {
                if (e.attr("unselectable") != i) {
                    e.attr("unselectable", i);
                    e.find(":not(input)").attr("unselectable", i)
                }
            },
            mouseMoveScroll: function(e) {
                if (this.mouseMoveScrolling) {
                    var i = this.sizing.mouseDelta(this.scrollEvent, e);
                    this.scrollThumbBy(i);
                    this.setScrollEvent(e)
                }
            },
            startTouchScrolling: function(e) {
                if (e.touches && e.touches.length == 1) {
                    this.setScrollEvent(e.touches[0]);
                    this.touchScrolling = true;
                    e.stopPropagation()
                }
            },
            touchScroll: function(e) {
                if (this.touchScrolling && e.touches && e.touches.length == 1) {
                    var i = -this.sizing.mouseDelta(this.scrollEvent, e.touches[0]) * this.scrollable.options.swipeSpeed;
                    var t = this.scrollOverviewBy(i);
                    if (t) {
                        e.stopPropagation();
                        e.preventDefault();
                        this.setScrollEvent(e.touches[0])
                    }
                }
            },
            stopTouchScrolling: function(e) {
                this.touchScrolling = false;
                e.stopPropagation()
            },
            mouseWheelScroll: function(e, i) {
                var t = -this.sizing.wheelDelta(e, i) * this.scrollable.options.wheelSpeed;
                if (t != 0) return this.scrollOverviewBy(t)
            },
            mouseClickScroll: function(e) {
                var i = this.viewPortSize - 20;
                if (e["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()]) // mouse click over thumb
                    i = -i;
                this.scrollOverviewBy(i)
            },
            keyScroll: function(e) {
                var i = e.which;
                if (this.enabled && this.isKeyScrolling(i)) {
                    if (this.scrollOverviewBy(this.keyScrollDelta(i))) e.preventDefault()
                }
            },
            scrollThumbBy: function(e) {
                var i = this.thumbPosition();
                i += e;
                i = this.positionOrMax(i, this.maxThumbPosition);
                var t = this.scrollPercent;
                this.scrollPercent = i / this.maxThumbPosition;
                var o = i * this.maxOverviewPosition / this.maxThumbPosition;
                this.setScrollPosition(o, i);
                if (t != this.scrollPercent) {
                    this.triggerCustomScroll(t);
                    return true
                } else return false
            },
            thumbPosition: function() {
                return this.$thumb.position()[this.sizing.offsetComponent()]
            },
            scrollOverviewBy: function(e) {
                var i = this.overviewPosition() + e;
                return this.scrollOverviewTo(i, false)
            },
            overviewPosition: function() {
                return -this.scrollable.$overview.position()[this.sizing.offsetComponent()]
            },
            scrollOverviewTo: function(e, i) {
                e = this.positionOrMax(e, this.maxOverviewPosition);
                var t = this.scrollPercent;
                this.scrollPercent = e / this.maxOverviewPosition;
                var o = this.scrollPercent * this.maxThumbPosition;
                if (i) this.setScrollPositionWithAnimation(e, o);
                else this.setScrollPosition(e, o);
                if (t != this.scrollPercent) {
                    this.triggerCustomScroll(t);
                    return true
                } else return false
            },
            positionOrMax: function(e, i) {
                if (e < 0) return 0;
                else if (e > i) return i;
                else return e
            },
            triggerCustomScroll: function(e) {
                this.scrollable.$element.trigger("customScroll", {
                    scrollAxis: this.sizing.scrollAxis(),
                    direction: this.sizing.scrollDirection(e, this.scrollPercent),
                    scrollPercent: this.scrollPercent * 100
                })
            },
            rescroll: function(e) {
                if (e) {
                    var i = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
                    this.scrollPercent = i / this.maxOverviewPosition;
                    var t = this.scrollPercent * this.maxThumbPosition;
                    this.setScrollPosition(i, t)
                } else {
                    var t = this.scrollPercent * this.maxThumbPosition;
                    var i = this.scrollPercent * this.maxOverviewPosition;
                    this.setScrollPosition(i, t)
                }
            },
            setScrollPosition: function(e, i) {
                this.$thumb.css(this.sizing.offsetComponent(), i + "px");
                this.scrollable.$overview.css(this.sizing.offsetComponent(), -e + "px")
            },
            setScrollPositionWithAnimation: function(e, i) {
                var t = {};
                var o = {};
                t[this.sizing.offsetComponent()] = i + "px";
                this.$thumb.animate(t, this.scrollable.options.animationSpeed);
                o[this.sizing.offsetComponent()] = -e + "px";
                this.scrollable.$overview.animate(o, this.scrollable.options.animationSpeed)
            },
            calculateMaxThumbPosition: function() {
                return this.sizing.size(this.$scrollBar) - this.thumbSize
            },
            calculateMaxOverviewPosition: function() {
                return this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort)
            },
            setScrollEvent: function(e) {
                var i = "page" + this.sizing.scrollAxis();
                if (!this.scrollEvent || this.scrollEvent[i] != e[i]) this.scrollEvent = {
                    pageX: e.pageX,
                    pageY: e.pageY
                }
            },
            scrollToElement: function(i) {
                var t = e(i);
                if (this.sizing.isInside(t, this.scrollable.$overview) && !this.sizing.isInside(t, this.scrollable.$viewPort)) {
                    var o = t.offset();
                    var s = this.scrollable.$overview.offset();
                    var n = this.scrollable.$viewPort.offset();
                    this.scrollOverviewTo(o[this.sizing.offsetComponent()] - s[this.sizing.offsetComponent()], true)
                }
            },
            remove: function() {
                this.removeMouseMoveScrolling();
                this.removeMouseWheelScrolling();
                this.removeTouchScrolling();
                this.removeMouseClickScrolling();
                this.removeWindowResize()
            }
        };
        var l = function() {};
        l.prototype = {
            size: function(e, i) {
                if (i) return e.width(i);
                else return e.width()
            },
            minSize: function(e) {
                return parseInt(e.css("min-width")) || 0
            },
            fixedThumbSize: function(e) {
                return e.fixedThumbWidth
            },
            scrollBar: function(e) {
                return e.find(".scroll-bar.horizontal")
            },
            mouseDelta: function(e, i) {
                return i.pageX - e.pageX
            },
            offsetComponent: function() {
                return "left"
            },
            wheelDelta: function(e, i) {
                return e
            },
            scrollAxis: function() {
                return "X"
            },
            scrollDirection: function(e, i) {
                return e < i ? "right" : "left"
            },
            scrollingKeys: {
                37: function(e) {
                    return -10
                },
                39: function(e) {
                    return 10
                }
            },
            isInside: function(i, t) {
                var o = e(i);
                var s = e(t);
                var n = o.offset();
                var l = s.offset();
                return n.left >= l.left && n.left + o.width() <= l.left + s.width()
            }
        };
        var r = function() {};
        r.prototype = {
            size: function(e, i) {
                if (i) return e.height(i);
                else return e.height()
            },
            minSize: function(e) {
                return parseInt(e.css("min-height")) || 0
            },
            fixedThumbSize: function(e) {
                return e.fixedThumbHeight
            },
            scrollBar: function(e) {
                return e.find(".scroll-bar.vertical")
            },
            mouseDelta: function(e, i) {
                return i.pageY - e.pageY
            },
            offsetComponent: function() {
                return "top"
            },
            wheelDelta: function(e, i) {
                return i
            },
            scrollAxis: function() {
                return "Y"
            },
            scrollDirection: function(e, i) {
                return e < i ? "down" : "up"
            },
            scrollingKeys: {
                38: function(e) {
                    return -10
                },
                40: function(e) {
                    return 10
                },
                33: function(e) {
                    return -(e - 20)
                },
                34: function(e) {
                    return e - 20
                }
            },
            isInside: function(i, t) {
                var o = e(i);
                var s = e(t);
                var n = o.offset();
                var l = s.offset();
                return n.top >= l.top && n.top + o.height() <= l.top + s.height()
            }
        };
        return this.each(function() {
            if (i == undefined) i = o;
            if (typeof i == "string") {
                var n = e(this).data("scrollable");
                if (n) n[i](t)
            } else if (typeof i == "object") {
                i = e.extend(o, i);
                new s(e(this), i)
            } else throw "Invalid type of options"
        })
    }
})(jQuery);
(function(e) {
    var i = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks) {
        for (var t = i.length; t;) {
            e.event.fixHooks[i[--t]] = e.event.mouseHooks
        }
    }
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var e = i.length; e;) {
                    this.addEventListener(i[--e], o, false)
                }
            } else {
                this.onmousewheel = o
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = i.length; e;) {
                    this.removeEventListener(i[--e], o, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    });

    function o(i) {
        var t = i || window.event,
            o = [].slice.call(arguments, 1),
            s = 0,
            n = true,
            l = 0,
            r = 0;
        i = e.event.fix(t);
        i.type = "mousewheel"; // Old school scrollwheel delta
        if (t.wheelDelta) {
            s = t.wheelDelta / 120
        }
        if (t.detail) {
            s = -t.detail / 3
        } // New school multidimensional scroll (touchpads) deltas
        r = s; // Gecko
        if (t.axis !== undefined && t.axis === t.HORIZONTAL_AXIS) {
            r = 0;
            l = s
        } // Webkit
        if (t.wheelDeltaY !== undefined) {
            r = t.wheelDeltaY / 120
        }
        if (t.wheelDeltaX !== undefined) {
            l = t.wheelDeltaX / 120
        } // Add event and delta to the front of the arguments
        o.unshift(i, s, l, r);
        return (e.event.dispatch || e.event.handle).apply(this, o)
    }
})(jQuery);;
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = "transitionend",
        e = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        i = t => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null
        },
        n = t => {
            const i = e(t);
            return i ? document.querySelector(i) : null
        },
        s = e => {
            e.dispatchEvent(new Event(t))
        },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        a = (t, e, i) => {
            Object.keys(i).forEach((n => {
                const s = i[n],
                    r = e[n],
                    a = r && o(r) ? "element" : null == (l = r) ? `${l}` : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                var l;
                if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            }))
        },
        l = t => !(!o(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        c = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        h = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null
        },
        d = () => {},
        u = t => {
            t.offsetHeight
        },
        f = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        g = t => {
            var e;
            e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", (() => {
                p.forEach((t => t()))
            })), p.push(e)) : e()
        },
        _ = t => {
            "function" == typeof t && t()
        },
        b = (e, i, n = !0) => {
            if (!n) return void _(e);
            const o = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(i) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === i && (r = !0, i.removeEventListener(t, a), _(e))
            };
            i.addEventListener(t, a), setTimeout((() => {
                r || s(i)
            }), o)
        },
        v = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
        },
        y = /[^.]*(?=\..*)\.|.*/,
        w = /\..*/,
        E = /::\d+$/,
        A = {};
    let T = 1;
    const O = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = /^(mouseenter|mouseleave)/i,
        k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function L(t, e) {
        return e && `${e}::${T++}` || t.uidEvent || T++
    }

    function x(t) {
        const e = L(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function D(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o
        }
        return null
    }

    function S(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = P(t);
        return k.has(o) || (o = t), [n, s, o]
    }

    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if (i || (i = n, n = null), C.test(e)) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            n ? n = t(n) : i = t(i)
        }
        const [o, r, a] = S(e, i, n), l = x(t), c = l[a] || (l[a] = {}), h = D(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = L(r, e.replace(y, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r) return s.delegateTarget = r, n.oneOff && j.off(t, s.type, e, i), i.apply(r, [s]);
                    return null
                }
            }(t, i, n) : function(t, e) {
                return function i(n) {
                    return n.delegateTarget = t, i.oneOff && j.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function I(t, e, i, n, s) {
        const o = D(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function P(t) {
        return t = t.replace(w, ""), O[t] || t
    }

    const j = {
            on(t, e, i, n) {
                N(t, e, i, n, !1)
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0)
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = S(e, i, n), a = r !== e, l = x(t), c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void I(t, l, r, o, s ? i : null)
                }
                c && Object.keys(l).forEach((i => {
                    ! function(t, e, i, n) {
                        const s = e[i] || {};
                        Object.keys(s).forEach((o => {
                            if (o.includes(n)) {
                                const n = s[o];
                                I(t, e, i, n.originalHandler, n.delegationSelector)
                            }
                        }))
                    }(t, l, i, e.slice(1))
                }));
                const h = l[r] || {};
                Object.keys(h).forEach((i => {
                    const n = i.replace(E, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        I(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                }))
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = f(),
                    s = P(e),
                    o = e !== s,
                    r = k.has(s);
                let a, l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== i && Object.keys(i).forEach((t => {
                    Object.defineProperty(d, t, {
                        get: () => i[t]
                    })
                })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
            }
        },
        M = new Map,
        H = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map);
                const n = M.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (t, e) => M.has(t) && M.get(t).get(e) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t)
            }
        };

    class B {
        constructor(t) {
            (t = r(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                this[t] = null
            }))
        }

        _queueCallback(t, e, i = !0) {
            b(t, e, i)
        }

        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.1.3"
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }

    const R = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        j.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]()
        }))
    };

    class W extends B {
        static get NAME() {
            return "alert"
        }

        close() {
            if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }

        _destroyElement() {
            this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = W.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    R(W, "close"), g(W);
    const $ = '[data-bs-toggle="button"]';

    class z extends B {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = z.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    function q(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function F(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }

    j.on(document, "click.bs.button.data-api", $, (t => {
        t.preventDefault();
        const e = t.target.closest($);
        z.getOrCreateInstance(e).toggle()
    })), g(z);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute(`data-bs-${F(e)}`, i)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute(`data-bs-${F(e)}`)
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i])
                })), e
            },
            getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
        V = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                return this.find(e, t).filter((t => !c(t) && l(t)))
            }
        },
        K = "carousel",
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        Q = "next",
        G = "prev",
        Z = "left",
        J = "right",
        tt = {
            ArrowLeft: J,
            ArrowRight: Z
        },
        et = "slid.bs.carousel",
        it = "active",
        nt = ".active.carousel-item";

    class st extends B {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }

        static get Default() {
            return X
        }

        static get NAME() {
            return K
        }

        next() {
            this._slide(Q)
        }

        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next()
        }

        prev() {
            this._slide(G)
        }

        pause(t) {
            t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }

        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }

        to(t) {
            this._activeElement = V.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void j.one(this._element, et, (() => this.to(t)));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? Q : G;
            this._slide(i, this._items[t])
        }

        _getConfig(t) {
            return t = { ...X,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(K, t, Y), t
        }

        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z)
        }

        _addEventListeners() {
            this._config.keyboard && j.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), j.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                e = e => {
                    t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                },
                i = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                n = e => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                };
            V.find(".carousel-item img", this._element).forEach((t => {
                j.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
            })), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", (t => e(t))), j.on(this._element, "pointerup.bs.carousel", (t => n(t))), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", (t => e(t))), j.on(this._element, "touchmove.bs.carousel", (t => i(t))), j.on(this._element, "touchend.bs.carousel", (t => n(t))))
        }

        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = tt[t.key];
            e && (t.preventDefault(), this._slide(e))
        }

        _getItemIndex(t) {
            return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }

        _getItemByOrder(t, e) {
            const i = t === Q;
            return v(this._items, e, i, this._config.wrap)
        }

        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(V.findOne(nt, this._element));
            return j.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }

        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = V.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(it), i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }

        _updateInterval() {
            const t = this._activeElement || V.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }

        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = V.findOne(nt, this._element),
                s = this._getItemIndex(n),
                o = e || this._getItemByOrder(i, n),
                r = this._getItemIndex(o),
                a = Boolean(this._interval),
                l = i === Q,
                c = l ? "carousel-item-start" : "carousel-item-end",
                h = l ? "carousel-item-next" : "carousel-item-prev",
                d = this._orderToDirection(i);
            if (o && o.classList.contains(it)) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = () => {
                j.trigger(this._element, et, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                })
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), this._isSliding = !1, setTimeout(f, 0)
                };
                this._queueCallback(t, n, !0)
            } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
            a && this.cycle()
        }

        _directionToOrder(t) {
            return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t
        }

        _orderToDirection(t) {
            return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t
        }

        static carouselInterface(t, e) {
            const i = st.getOrCreateInstance(t, e);
            let {
                _config: n
            } = i;
            "object" == typeof e && (n = { ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }

        static jQueryInterface(t) {
            return this.each((function() {
                st.carouselInterface(this, t)
            }))
        }

        static dataApiClickHandler(t) {
            const e = n(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = { ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this)
                },
                s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault()
        }
    }

    j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", (() => {
        const t = V.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++) st.carouselInterface(t[e], st.getInstance(t[e]))
    })), g(st);
    const ot = "collapse",
        rt = {
            toggle: !0,
            parent: null
        },
        at = {
            toggle: "boolean",
            parent: "(null|element)"
        },
        lt = "show",
        ct = "collapse",
        ht = "collapsing",
        dt = "collapsed",
        ut = ":scope .collapse .collapse",
        ft = '[data-bs-toggle="collapse"]';

    class pt extends B {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            const n = V.find(ft);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t],
                    s = i(e),
                    o = V.find(s).filter((t => t === this._element));
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return rt
        }

        static get NAME() {
            return ot
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t, e = [];
            if (this._config.parent) {
                const t = V.find(ut, this._config.parent);
                e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
            }
            const i = V.findOne(this._selector);
            if (e.length) {
                const n = e.find((t => i !== t));
                if (t = n ? pt.getInstance(n) : null, t && t._isTransitioning) return
            }
            if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e.forEach((e => {
                i !== e && pt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t || H.set(e, "bs.collapse", null)
            }));
            const n = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n] = "", j.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[n] = `${this._element[s]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    i = n(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), j.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }

        _isShown(t = this._element) {
            return t.classList.contains(lt)
        }

        _getConfig(t) {
            return (t = { ...rt,
                ...U.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = r(t.parent), a(ot, t, at), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            const t = V.find(ut, this._config.parent);
            V.find(ft, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                const e = n(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }))
        }

        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t => {
                e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e)
            }))
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }

    j.on(document, "click.bs.collapse.data-api", ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this);
        V.find(e).forEach((t => {
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }))
    })), g(pt);
    var mt = "top",
        gt = "bottom",
        _t = "right",
        bt = "left",
        vt = "auto",
        yt = [mt, gt, _t, bt],
        wt = "start",
        Et = "end",
        At = "clippingParents",
        Tt = "viewport",
        Ot = "popper",
        Ct = "reference",
        kt = yt.reduce((function(t, e) {
            return t.concat([e + "-" + wt, e + "-" + Et])
        }), []),
        Lt = [].concat(yt, [vt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + wt, e + "-" + Et])
        }), []),
        xt = "beforeRead",
        Dt = "read",
        St = "afterRead",
        Nt = "beforeMain",
        It = "main",
        Pt = "afterMain",
        jt = "beforeWrite",
        Mt = "write",
        Ht = "afterWrite",
        Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];

    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element
    }

    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement
    }

    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot)
    }

    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function Ut(t) {
        return t.split("-")[0]
    }

    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1
        }
    }

    function Kt(t) {
        var e = Vt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function Yt(t) {
        return Wt(t).getComputedStyle(t)
    }

    function Qt(t) {
        return ["table", "td", "th"].indexOf(Rt(t)) >= 0
    }

    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Zt(t) {
        return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t)
    }

    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null
    }

    function te(t) {
        for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;) i = Jt(i);
        return i && ("html" === Rt(i) || "body" === Rt(i) && "static" === Yt(i).position) ? e : i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
            for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
                var n = Yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function ee(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    var ie = Math.max,
        ne = Math.min,
        se = Math.round;

    function oe(t, e, i) {
        return ie(t, ne(e, i))
    }

    function re(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function ae(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }

    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Ut(i.placement),
                l = ee(a),
                c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                        return re("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : ae(t, yt))
                    }(s.padding, i),
                    d = Kt(o),
                    u = "y" === l ? mt : bt,
                    f = "y" === l ? gt : _t,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = te(o),
                    _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    E = oe(v, w, y),
                    A = l;
                i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e)
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function ce(t) {
        return t.split("-")[1]
    }

    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function de(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = !0 === h ? function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: se(se(e * n) / n) || 0,
                    y: se(se(i * n) / n) || 0
                }
            }(r) : "function" == typeof h ? h(r) : r,
            u = d.x,
            f = void 0 === u ? 0 : u,
            p = d.y,
            m = void 0 === p ? 0 : p,
            g = r.hasOwnProperty("x"),
            _ = r.hasOwnProperty("y"),
            b = bt,
            v = mt,
            y = window;
        if (c) {
            var w = te(i),
                E = "clientHeight",
                A = "clientWidth";
            w === Wt(i) && "static" !== Yt(w = Gt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n.width, f *= l ? 1 : -1)
        }
        var T, O = Object.assign({
            position: a
        }, c && he);
        return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e))
    }

    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Ut(e.placement),
                    variation: ce(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = Wt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                    t.addEventListener("scroll", i.update, fe)
                })), a && l.addEventListener("resize", i.update, fe),
                function() {
                    o && c.forEach((function(t) {
                        t.removeEventListener("scroll", i.update, fe)
                    })), a && l.removeEventListener("resize", i.update, fe)
                }
        },
        data: {}
    };
    var me = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function ge(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return me[t]
        }))
    }

    var _e = {
        start: "end",
        end: "start"
    };

    function be(t) {
        return t.replace(/start|end/g, (function(t) {
            return _e[t]
        }))
    }

    function ve(t) {
        var e = Wt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft
    }

    function we(t) {
        var e = Yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ee(t) {
        return ["html", "body", "#document"].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t))
    }

    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = Wt(n),
            r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)))
    }

    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Oe(t, e) {
        return e === Tt ? Te(function(t) {
            var e = Wt(t),
                i = Gt(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            }
        }(t)) : zt(e) ? function(t) {
            var e = Vt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Te(function(t) {
            var e, i = Gt(t),
                n = ve(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + ye(t),
                l = -n.scrollTop;
            return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Gt(t)))
    }

    function Ce(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Ut(s) : null,
            r = s ? ce(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case mt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case gt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function ke(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? At : o,
            a = i.rootBoundary,
            l = void 0 === a ? Tt : a,
            c = i.elementContext,
            h = void 0 === c ? Ot : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = re("number" != typeof p ? p : ae(p, yt)),
            g = h === Ot ? Ct : Ot,
            _ = t.rects.popper,
            b = t.elements[u ? g : h],
            v = function(t, e, i) {
                var n = "clippingParents" === e ? function(t) {
                        var e = Ae(Zt(t)),
                            i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 && zt(t) ? te(t) : t;
                        return $t(i) ? e.filter((function(t) {
                            return $t(t) && Xt(t, i) && "body" !== Rt(t)
                        })) : []
                    }(t) : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce((function(e, i) {
                        var n = Oe(t, i);
                        return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e
                    }), Oe(t, o));
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
            }($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
            y = Vt(t.elements.reference),
            w = Ce({
                reference: y,
                element: _,
                strategy: "absolute",
                placement: s
            }),
            E = Te(Object.assign({}, _, w)),
            A = h === Ot ? E : y,
            T = {
                top: v.top - A.top + m.top,
                bottom: A.bottom - v.bottom + m.bottom,
                left: v.left - A.left + m.left,
                right: A.right - v.right + m.right
            },
            O = t.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s];
            Object.keys(T).forEach((function(t) {
                var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
                    i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e
            }))
        }
        return T
    }

    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? Lt : l,
            h = ce(n),
            d = h ? a ? kt : kt.filter((function(t) {
                return ce(t) === h
            })) : yt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = ke(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Ut(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }

    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                        if (Ut(t) === vt) return [];
                        var e = ge(t);
                        return [be(t), e, be(e)]
                    }(g) : [ge(g)]), v = [g].concat(b).reduce((function(t, i) {
                        return t.concat(Ut(i) === vt ? Le(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++) {
                    var C = v[O],
                        k = Ut(C),
                        L = ce(C) === wt,
                        x = [mt, gt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = ke(e, {
                            placement: C,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        N = x ? L ? _t : bt : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N),
                        P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every((function(t) {
                            return t
                        }))) {
                        T = C, A = !1;
                        break
                    }
                    E.set(C, P)
                }
                if (A)
                    for (var j = function(t) {
                            var e = v.find((function(e) {
                                var i = E.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function Se(t) {
        return [mt, _t, gt, bt].some((function(e) {
            return t[e] >= 0
        }))
    }

    const Ne = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ke(e, {
                        elementContext: "reference"
                    }),
                    a = ke(e, {
                        altBoundary: !0
                    }),
                    l = De(r, n),
                    c = De(a, s, o),
                    h = Se(l),
                    d = Se(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        Ie = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = Lt.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = Ut(t),
                                s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        Pe = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Ce({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        je = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ke(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = Ut(e.placement),
                    b = ce(e.placement),
                    v = !b,
                    y = ee(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O = "function" == typeof m ? m(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : m,
                    C = {
                        x: 0,
                        y: 0
                    };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? mt : bt,
                            L = "y" === y ? gt : _t,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            N = E[y] - g[L],
                            I = f ? -T[x] / 2 : 0,
                            P = b === wt ? A[x] : T[x],
                            j = b === wt ? -T[x] : -A[x],
                            M = e.elements.arrow,
                            H = f && M ? Kt(M) : {
                                width: 0,
                                height: 0
                            },
                            B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            R = B[k],
                            W = B[L],
                            $ = oe(0, A[x], H[x]),
                            z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
                            q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
                            F = e.elements.arrow && te(e.elements.arrow),
                            U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                            V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                            K = E[y] + z - V - U,
                            X = E[y] + q - V;
                        if (o) {
                            var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                            E[y] = Y, C[y] = Y - D
                        }
                        if (a) {
                            var Q = "x" === y ? mt : bt,
                                G = "x" === y ? gt : _t,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                            E[w] = et, C[w] = et - Z
                        }
                    }
                    e.modifiersData[n] = C
                }
            },
            requiresIfExists: ["offset"]
        };

    function Me(t, e, i) {
        void 0 === i && (i = !1);
        var n = zt(e);
        zt(e) && function(t) {
            var e = t.getBoundingClientRect();
            e.width, t.offsetWidth, e.height, t.offsetHeight
        }(e);
        var s, o, r = Gt(e),
            a = Vt(t),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (n || !n && !i) && (("body" !== Rt(e) || we(r)) && (l = (s = e) !== Wt(s) && zt(s) ? {
            scrollLeft: (o = s).scrollLeft,
            scrollTop: o.scrollTop
        } : ve(s)), zt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ye(r))), {
            x: a.left + l.scrollLeft - c.x,
            y: a.top + l.scrollTop - c.y,
            width: a.width,
            height: a.height
        }
    }

    function He(t) {
        var e = new Map,
            i = new Set,
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }

        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            i.has(t.name) || s(t)
        })), n
    }

    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function We(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Be : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Be, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: $t(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
                            popper: Ae(e)
                        };
                        var r, c, u = function(t) {
                            var e = He(t);
                            return Bt.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(c).map((function(t) {
                            return c[t]
                        }))));
                        return a.orderedModifiers = u.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (Re(e, i)) {
                                a.rects = {
                                    reference: Me(e, te(i), "fixed" === a.options.strategy),
                                    popper: Kt(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!Re(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }

            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }

    var $e = We(),
        ze = We({
            defaultModifiers: [pe, Pe, ue, Ft]
        }),
        qe = We({
            defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne]
        });
    const Fe = Object.freeze({
            __proto__: null,
            popperGenerator: We,
            detectOverflow: ke,
            createPopperBase: $e,
            createPopper: qe,
            createPopperLite: ze,
            top: mt,
            bottom: gt,
            right: _t,
            left: bt,
            auto: vt,
            basePlacements: yt,
            start: wt,
            end: Et,
            clippingParents: At,
            viewport: Tt,
            popper: Ot,
            reference: Ct,
            variationPlacements: kt,
            placements: Lt,
            beforeRead: xt,
            read: Dt,
            afterRead: St,
            beforeMain: Nt,
            main: It,
            afterMain: Pt,
            beforeWrite: jt,
            write: Mt,
            afterWrite: Ht,
            modifierPhases: Bt,
            applyStyles: Ft,
            arrow: le,
            computeStyles: ue,
            eventListeners: pe,
            flip: xe,
            hide: Ne,
            offset: Ie,
            popperOffsets: Pe,
            preventOverflow: je
        }),
        Ue = "dropdown",
        Ve = "Escape",
        Ke = "Space",
        Xe = "ArrowUp",
        Ye = "ArrowDown",
        Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
        Ge = "click.bs.dropdown.data-api",
        Ze = "keydown.bs.dropdown.data-api",
        Je = "show",
        ti = '[data-bs-toggle="dropdown"]',
        ei = ".dropdown-menu",
        ii = m() ? "top-end" : "top-start",
        ni = m() ? "top-start" : "top-end",
        si = m() ? "bottom-end" : "bottom-start",
        oi = m() ? "bottom-start" : "bottom-end",
        ri = m() ? "left-start" : "right-start",
        ai = m() ? "right-start" : "left-start",
        li = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        ci = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };

    class hi extends B {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return li
        }

        static get DefaultType() {
            return ci
        }

        static get NAME() {
            return Ue
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (c(this._element) || this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => j.on(t, "mouseover", d))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t)
        }

        hide() {
            if (c(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => j.off(t, "mouseover", d))), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t))
        }

        _getConfig(t) {
            if (t = { ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t
                }, a(Ue, t, this.constructor.DefaultType), "object" == typeof t.reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }

        _createPopper(t) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : o(this._config.reference) ? e = r(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(),
                n = i.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
            this._popper = qe(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static")
        }

        _isShown(t = this._element) {
            return t.classList.contains(Je)
        }

        _getMenuElement() {
            return V.next(this._element, ei)[0]
        }

        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }

        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
            i.length && v(i, e, t === Ye, !i.includes(e)).focus()
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }

        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e = V.find(ti);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t) {
                    const e = t.composedPath(),
                        i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                n._completeHide(s)
            }
        }

        static getParentFromElement(t) {
            return n(t) || t.parentNode
        }

        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
            const e = this.classList.contains(Je);
            if (!e && t.key === Ve) return;
            if (t.preventDefault(), t.stopPropagation(), c(this)) return;
            const i = this.matches(ti) ? this : V.prev(this, ti)[0],
                n = hi.getOrCreateInstance(i);
            if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void(e && t.key !== Ke || hi.clearMenus());
            n.hide()
        }
    }

    j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, (function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle()
    })), g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top";

    class fi {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(di, "paddingRight", (e => e + t)), this._setElementAttributes(ui, "marginRight", (e => e - t))
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`
            }))
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight")
        }

        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = U.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i)
            }))
        }

        _applyManipulationCallback(t, e) {
            o(t) ? e(t) : V.find(t, this._element).forEach(e)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }
    }

    const pi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        mi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        },
        gi = "show",
        _i = "mousedown.bs.backdrop";

    class bi {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation((() => {
                _(t)
            }))) : _(t)
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation((() => {
                this.dispose(), _(t)
            }))) : _(t)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _getConfig(t) {
            return (t = { ...pi,
                ..."object" == typeof t ? t : {}
            }).rootElement = r(t.rootElement), a("backdrop", t, mi), t
        }

        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, (() => {
                _(this._config.clickCallback)
            })), this._isAppended = !0)
        }

        dispose() {
            this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = !1)
        }

        _emulateAnimation(t) {
            b(t, this._getElement(), this._config.isAnimated)
        }
    }

    const vi = {
            trapElement: null,
            autofocus: !0
        },
        yi = {
            trapElement: "element",
            autofocus: "boolean"
        },
        wi = ".bs.focustrap",
        Ei = "backward";

    class Ai {
        constructor(t) {
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        activate() {
            const {
                trapElement: t,
                autofocus: e
            } = this._config;
            this._isActive || (e && t.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), j.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, j.off(document, wi))
        }

        _handleFocusin(t) {
            const {
                target: e
            } = t, {
                trapElement: i
            } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus()
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward")
        }

        _getConfig(t) {
            return t = { ...vi,
                ..."object" == typeof t ? t : {}
            }, a("focustrap", t, yi), t
        }
    }

    const Ti = "bsModal",
        Oi = "Escape",
        Ci = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        ki = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        Li = "hidden.bs.modal",
        xi = "show.bs.modal",
        Di = "resize.bs.modal",
        Si = "click.dismiss.bs.modal",
        Ni = "keydown.dismiss.bs.modal",
        Ii = "mousedown.dismiss.bs.modal",
        Pi = "modal-open",
        ji = "show",
        Mi = "modal-static";

    class Hi extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi
        }

        static get Default() {
            return Ci
        }

        static get NAME() {
            return Ti
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || j.trigger(this._element, xi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, (() => {
                j.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }))
            })), this._showBackdrop((() => this._showElement(t))))
        }

        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback((() => this._hideModal()), this._element, t)
        }

        dispose() {
            [window, this._dialog].forEach((t => j.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }

        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            })
        }

        _getConfig(t) {
            return t = { ...Ci,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(Ti, t, ki), t
        }

        _showElement(t) {
            const e = this._isAnimated(),
                i = V.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add(ji), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }), this._dialog, e)
        }

        _setEscapeEvent() {
            this._isShown ? j.on(this._element, Ni, (t => {
                this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition()
            })) : j.off(this._element, Ni)
        }

        _setResizeEvent() {
            this._isShown ? j.on(window, Di, (() => this._adjustDialog())) : j.off(window, Di)
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, Li)
            }))
        }

        _showBackdrop(t) {
            j.on(this._element, Si, (t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            })), this._backdrop.show(t)
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: t,
                scrollHeight: e,
                style: i
            } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback((() => {
                t.remove(Mi), n || this._queueCallback((() => {
                    i.overflowY = ""
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }

        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = `${e}px`)
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = Hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }

    j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, xi, (t => {
            t.defaultPrevented || j.one(e, Li, (() => {
                l(this) && this.focus()
            }))
        }));
        const i = V.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this)
    })), R(Hi), g(Hi);
    const Bi = "offcanvas",
        Ri = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Wi = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        $i = "show",
        zi = ".offcanvas.show",
        qi = "hidden.bs.offcanvas";

    class Fi extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get NAME() {
            return Bi
        }

        static get Default() {
            return Ri
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(), j.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }), this._element, !0))
        }

        hide() {
            this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new fi).reset(), j.trigger(this._element, qi)
            }), this._element, !0)))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _getConfig(t) {
            return t = { ...Ri,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(Bi, t, Wi), t
        }

        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }

        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            })
        }

        _addEventListeners() {
            j.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            }))
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
        j.one(e, qi, (() => {
            l(this) && this.focus()
        }));
        const i = V.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this)
    })), j.on(window, "load.bs.offcanvas.data-api", (() => V.find(zi).forEach((t => Fi.getOrCreateInstance(t).show())))), R(Fi), g(Fi);
    const Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Xi = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue));
            const n = e.filter((t => t instanceof RegExp));
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1
        };

    function Yi(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
            s = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t],
                n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue
            }
            const o = [].concat(...i.attributes),
                r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t => {
                Xi(t, r) || i.removeAttribute(t.nodeName)
            }))
        }
        return n.body.innerHTML
    }

    const Qi = "tooltip",
        Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Zi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Ji = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left"
        },
        tn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        en = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        nn = "fade",
        sn = "show",
        on = "show",
        rn = "out",
        an = ".tooltip-inner",
        ln = ".bsModal",
        cn = "hide.bs.modal",
        hn = "hover",
        dn = "focus";

    class un extends B {
        constructor(t, e) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }

        static get Default() {
            return tn
        }

        static get NAME() {
            return Qi
        }

        static get Event() {
            return en
        }

        static get DefaultType() {
            return Zi
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }

        dispose() {
            clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = j.trigger(this._element, this.constructor.Event.SHOW),
                e = h(this._element),
                i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(),
                s = (t => {
                    do {
                        t += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                })(this.constructor.NAME);
            n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const {
                container: a
            } = this._config;
            H.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                j.on(t, "mouseover", d)
            }));
            const c = this.tip.classList.contains(nn);
            this._queueCallback((() => {
                const t = this._hoverState;
                this._hoverState = null, j.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this)
            }), this.tip, c)
        }

        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => j.off(t, "mouseover", d))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(nn);
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._hoverState !== on && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
            }), this.tip, e), this._hoverState = ""
        }

        update() {
            null !== this._popper && this._popper.update()
        }

        isWithContent() {
            return Boolean(this.getTitle())
        }

        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), an)
        }

        _sanitizeAndSetContent(t, e, i) {
            const n = V.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove()
        }

        setElementContent(t, e) {
            if (null !== t) return o(e) ? (e = r(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }

        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }

        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }

        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }

        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }

        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }

        _getAttachment(t) {
            return Ji[t.toUpperCase()]
        }

        _setListeners() {
            this._config.trigger.split(" ").forEach((t => {
                if ("click" === t) j.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = t === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    j.on(this._element, e, this._config.selector, (t => this._enter(t))), j.on(this._element, i, this._config.selector, (t => this._leave(t)))
                }
            })), this._hideModalHandler = () => {
                this._element && this.hide()
            }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }

        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }

        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                e._hoverState === on && e.show()
            }), e._config.delay.show) : e.show())
        }

        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                e._hoverState === rn && e.hide()
            }), e._config.delay.hide) : e.hide())
        }

        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }

        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return Object.keys(e).forEach((t => {
                Gi.has(t) && delete e[t]
            })), (t = { ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }

        _cleanTipClass() {
            const t = this.getTipElement(),
                e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e)))
        }

        _getBasicClassPrefix() {
            return "bs-tooltip"
        }

        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    g(un);
    const fn = {
            ...un.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        pn = { ...un.DefaultType,
            content: "(string|element|function)"
        },
        mn = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };

    class gn extends un {
        static get Default() {
            return fn
        }

        static get NAME() {
            return "popover"
        }

        static get Event() {
            return mn
        }

        static get DefaultType() {
            return pn
        }

        isWithContent() {
            return this.getTitle() || this._getContent()
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        _getBasicClassPrefix() {
            return "bs-popover"
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    g(gn);
    const _n = "scrollspy",
        bn = {
            offset: 10,
            method: "auto",
            target: ""
        },
        vn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        yn = "active",
        wn = ".nav-link, .list-group-item, .dropdown-item",
        En = "position";

    class An extends B {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
        }

        static get Default() {
            return bn
        }

        static get NAME() {
            return _n
        }

        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : En,
                e = "auto" === this._config.method ? t : this._config.method,
                n = e === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map((t => {
                const s = i(t),
                    o = s ? V.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [U[e](o).top + n, s]
                }
                return null
            })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            }))
        }

        dispose() {
            j.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }

        _getConfig(t) {
            return (t = { ...bn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = r(t.target) || document.documentElement, a(_n, t, vn), t
        }

        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }

        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }

        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }

        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }

        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = wn.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                i = V.findOne(e.join(","), this._config.target);
            i.classList.add(yn), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V.parents(i, ".nav, .list-group").forEach((t => {
                V.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(yn))), V.prev(t, ".nav-item").forEach((t => {
                    V.children(t, ".nav-link").forEach((t => t.classList.add(yn)))
                }))
            })), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }

        _clear() {
            V.find(wn, this._config.target).filter((t => t.classList.contains(yn))).forEach((t => t.classList.remove(yn)))
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = An.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    j.on(window, "load.bs.scrollspy.data-api", (() => {
        V.find('[data-bs-spy="scroll"]').forEach((t => new An(t)))
    })), g(An);
    const Tn = "active",
        On = "fade",
        Cn = "show",
        kn = ".active",
        Ln = ":scope > li > .active";

    class xn extends B {
        static get NAME() {
            return "tab"
        }

        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t;
            const e = n(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                t = V.find(e, i), t = t[t.length - 1]
            }
            const s = t ? j.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (j.trigger(this._element, "show.bs.tab", {
                    relatedTarget: t
                }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const o = () => {
                j.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), j.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            };
            e ? this._activate(e, e.parentNode, o) : o()
        }

        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, kn) : V.find(Ln, e))[0],
                s = i && n && n.classList.contains(On),
                o = () => this._transitionComplete(t, n, i);
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o()
        }

        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Tn);
                const t = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Tn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains(On) && t.classList.add(Cn);
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && V.find(".dropdown-toggle", e).forEach((t => t.classList.add(Tn))), t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || xn.getOrCreateInstance(this).show()
    })), g(xn);
    const Dn = "toast",
        Sn = "hide",
        Nn = "show",
        In = "showing",
        Pn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };

    class Mn extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get DefaultType() {
            return Pn
        }

        static get Default() {
            return jn
        }

        static get NAME() {
            return Dn
        }

        show() {
            j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback((() => {
                this._element.classList.remove(In), j.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }

        hide() {
            this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback((() => {
                this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }

        dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose()
        }

        _getConfig(t) {
            return t = { ...jn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, a(Dn, t, this.constructor.DefaultType), t
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }

        _setListeners() {
            j.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), j.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), j.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), j.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(t) {
            return this.each((function() {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    return R(Mn), g(Mn), {
        Alert: W,
        Button: z,
        Carousel: st,
        Collapse: pt,
        Dropdown: hi,
        Modal: Hi,
        Offcanvas: Fi,
        Popover: gn,
        ScrollSpy: An,
        Tab: xn,
        Toast: Mn,
        Tooltip: un
    }
}));

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length) return this._items = b.get().map(function(b) {
            return a(b)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
        }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings,
                        e = c.center && Math.ceil(c.items / 2) || c.items,
                        f = c.center && -1 * e || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                        h = this._core.clones().length,
                        i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }), a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c),
            f = [],
            g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(c) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
                    class: "owl-video-tn " + j,
                    srcType: c
                }) : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")"
                }), b.after(d), b.after(e)
            };
        if (b.wrap(a("<div/>", {
                class: "owl-video-wrapper",
                style: g
            })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }, e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);;
(function($, Drupal) {

    /* Function to change logo, or other images, to local copies */
    /*Drupal.behaviors.imageplaceholder = {
        attach: function (context, settings) {
            var url = window.location.href;
            if(url.indexOf('.local:8093') != -1) {
                $('img').each(function () {
                    if($(this).attr('src').indexOf('/files-encrypted/') != -1){
                        var src = $(this).attr('src').split('/');
                        var filename = src[src.length - 1];
                        $(this).attr('src', '/' + drupalSettings.path.themeUrl + '/local/' + filename);
                    }
                });
                $('source').each(function () {
                    if($(this).attr('srcset').indexOf('/files-encrypted/') != -1){
                        var src = $(this).attr('srcset').split('/');
                        var filename = src[src.length - 1];
                        $(this).attr('srcset', '/' + drupalSettings.path.themeUrl + '/local/' + filename);
                    }
                });
            }
        }
    };*/

})(jQuery, Drupal);


//preloader
var initLoad = '';
var compLoad = '';
var dataLoaded = '';

function initialLoad() {
    initLoad = 'true';
    // alert();
}

// make preloader only fire on first landing
if (document.cookie.indexOf('preloaded') >= 0) {
    $('#preloader').remove();
}

$(document).ready(function() {
    $('html').css({
        'opacity': '1'
    });

    if ($('#preloader').length) {
        // alert();
        setTimeout(function() {
            gsap.to('#preloader .filler-inner', {
                height: '75%',
                duration: 1.25,
                onComplete: initialLoad

            })
            gsap.to('.pre-counter', {
                textContent: 75,
                duration: 1.25,
                snap: {
                    textContent: 1
                },

            })
        }, 500);
    } else {
        initialLoad();
    }
});


$(window).on('load', function() {
    compLoad = 'true';
    completeLoad();
});

function completeLoad() {

    if ($('#preloader').length) {

        if (initLoad === 'true' && compLoad === 'true') {
            // alert('both true')
            console.log('both true');
            gsap.fromTo('#preloader .filler-inner', {
                height: '75%',
            }, {
                height: '100%',
                duration: 1

            })
            gsap.fromTo('.pre-counter', {
                textContent: 75,
                snap: {
                    textContent: 1
                }

            }, {
                textContent: 100,
                duration: 1,
                snap: {
                    textContent: 1
                }
            })

            setTimeout(function() {
                $('#preloader').addClass('loaded');
                dataLoaded = 'true';
                bodyLoad();
            }, 2000)
            setTimeout(function() {
                $('#preloader').remove();

            }, 3500)
        } else {
            // if both conditions are not met call the function again
            setTimeout(completeLoad, 100);

        }
        document.cookie = "preloaded"; // set new cookie*/
    } else {
        // alert();
        dataLoaded = 'true';
        bodyLoad();
    }
}
//end preloader





// add class to body once scrolled
function bodyScrolled() {
    var scrollPos = $(window).scrollTop();
    var offSet = $('header').offset().top;
    var diff = (offSet - scrollPos);

    if (scrollPos >= 1) {
        $('body').addClass('ndm-scrolled');
        // $('.idm-fixed-nav-wrapper').css({ 'margin-top' : - utilHeight });

    } else {
        $('body').removeClass('ndm-scrolled');
        // $('.idm-fixed-nav-wrapper').css({ 'margin-top' : '0' });

    }

}

$(document).ready(bodyScrolled);
$(window).on('scroll', function() {
    bodyScrolled();
});


// mobile nav
$('.ndm-main-nav .navbar-collapse').on('shown.bs.collapse', function() {
    $('header').addClass('nav-opened');
});
$('.ndm-main-nav .navbar-collapse').on('hidden.bs.collapse', function() {
    $('header').removeClass('nav-opened');
});

// $('.counter').each(function(){
//    $(this).countUp();
// });


//video
$('iFrame[src*="youtube"]').each(function() {
    $(this).wrap('<div class="videoWrapper" />');
});

$('iFrame[src*="vimeo"]').each(function() {
    $(this).wrap('<div class="videoWrapper" />');
});

// #videoModal
$('[data-bs-target="#videoModal"]').each(function() {
    $(this).on('click', function(e) {
        // alert();
        e.preventDefault();
        var sRc = $(this).attr('href');
        $('#videoModal').find('iFrame').attr('src', sRc);
    });
});
$('#videoModal').on('hidden.bs.modal', function() {
    $(this).find('iFrame').attr('src', '');
    // $(this).find('.modal-body').html('');
});

$('.bio--item').each(function() {
    $(this).find('a[data-bs-toggle="modal"]').click(function() {
        var bioPic = $(this).find('img').attr('src');
        var bioName = $(this).parents('.bio--item').find('.bio-details .bio-name').html();
        var bioTitle = $(this).parents('.bio--item').find('.bio-details .bio-title').html();
        var bioCopy = $(this).parents('.bio--item').find('.bio-details .bio-copy').html();

        $('.bios-modal .modal-header .modal-bio-pic').attr('src', bioPic);
        $('.bios-modal .modal-bio-body').append(bioCopy);
        $('.bios-modal .modal-header .modal-bio-name').append(bioName);
        $('.bios-modal .modal-header .modal-bio-title').append(bioTitle);
    });
});

//reset modal
$(".bios-modal").on("hidden.bs.modal", function() {
    $(".modal-bio-body").html("");
    $(".modal-bio-name").html("");
    $(".modal-bio-title").html("");
    $(".modal-bio-pic").attr("");
    $(".modal-footer a").attr("");
    $(".modal-footer a").show();
});



;



gsap.config({
    nullTargetWarn: false,
});


/*const counter = new countUp('target');

$('.counter').each(function(){
    counter($(this));
});*/




// Hero Carousel
var heroSlider = $('.idm-hero-carousel');
var slideLength = 8000;
var autoPlaySpeed = 1500;
var paused = '';

function bodyLoad() {
    startHero();
    ScrollTrigger.refresh({
        safe: true
    });
    $('.counter').each(function() {
        $(this).countUp();
    });
}

heroSlider.find('[data-src]').each(function(i) {
    $imgSrc = $(this).attr('data-src');
    $imgAlt = $(this).attr('data-alt');
    console.log($imgSrc);
    $('.idm-hero-carousel-wrapper').prepend('<img src="' + $imgSrc + '" alt="' + $imgAlt + '" class="idm-hero-img idm-hero-img-0' + i + '" />');
});
$('.idm-hero-carousel-wrapper').find('img.idm-hero-img-00').addClass('active');


//homepage hero carousel nav
$('.idm-hero-carousel-wrapper.landing .idm-hero-carousel').find('.item').each(function(i) {
    var title = $(this).attr('data-title');
    var subTitle = $(this).attr('data-sub-title');

    // alert(title + ' ' + subTitle);
    $('.idm-carousel-nav').append('<li><a href="#" class="h-100" aria-label="hero thumb" data-slide-num="' + (i + 1) + '"><div class="slide-nav-num">' + 0 + (i + 1) + '</div><div class="slide-nav-title">' + title + '</div><div class="slide-nav-subtitle">' + $.trim(subTitle).substring(0, 40).trim(this) + "..." + '</div></a></li>');

});

//news hero carousel nav
$('.idm-hero-carousel-wrapper.multi .idm-hero-carousel').find('.item').each(function(i) {
    var title = $(this).attr('data-title');
    var subTitle = $(this).attr('data-sub-title');
    var thumbnail = $(this).attr('data-src');

    // alert(title + ' ' + subTitle);
    $('.idm-carousel-nav').append('<li data-slide="' + (i + 1) + '" class=""><a href="#" data-slide-num="' + (i + 1) + '" class="bg-blur bg-gradient-2-rev"><div class="d-flex align-items-center"><div class="pe-4 me-2"><svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M5.977,20.039H42.624l-8.75,8.75,2.266,2.187,12.5-12.5-12.5-12.5L33.952,8.164l8.671,8.75H5.977Z" transform="translate(-5.977 -5.977)" fill="#eff3f4"></path></svg></div><div class="slide-nav-subtitle">' + title + '</div></div></a><div><img src="' + thumbnail + '" /></div></li>');

});



function progFun(e) {
    // heroSlider.on('initialize.owl.carousel translate.owl.carousel', function (e) {

    var items = $(this).find('.owl-item');
    var numItems = items.length;
    var activeItem = $(this).find('.owl-item.active');
    // var activePos = activeItem.index('.owl-item:not(.cloned)');
    var activePos = items.index(activeItem);

    var nextItem = activePos + 1;
    if (nextItem >= numItems) {
        nextItem = 0;
    }
    // alert(activePos);
    if (activePos == -1) {
        // activePos = 0;
    }
    // console.log('numItems: ' + numItems + ' activePos: ' + activePos);
    var progress = 0;

    $('.carousel-num').text(String(activePos + 1).padStart(2, '0') + ' / ' + String(numItems).padStart(2, '0'));
    // $('.carousel-num').text('0' + (activePos + 1) + ' / 0' + numItems);


    // alert(activePos);
    items.removeClass('idm-translated');
    activeItem.addClass('idm-translated');

    $('.idm-carousel-nav a').removeClass('idm-active').eq(activePos).addClass('idm-active');


    var $activeImgSrc = activeItem.find('.item[data-src]').attr('data-src');
    $('.idm-hero-carousel-wrapper > img[src="' + $activeImgSrc + '"]').addClass('active').siblings('img').removeClass('active');

    console.log('next slide: ' + nextItem);
    console.log('number of slides: ' + numItems);

    $('.idm-carousel-nav li[data-slide]').eq(nextItem).addClass('next-slide').siblings('li').removeClass('next-slide');



};

heroSlider.on('initialized.owl.carousel translated.owl.carousel', progFun);

/*heroSlider.on('initialize.owl.carousel translate.owl.carousel', function () {
    if (paused != 'true') {
        gsap.fromTo('.progress-level',
            {height: '0'},
            {height: '100%', duration: (slideLength + 400) / 1000, delay: .25}
        );

        gsap.fromTo('.progress-indicator',
            {top: '-1rem'},
            {top: '100%', duration: (slideLength + 400) / 1000}
        );
    }
});*/

var progressEase = CustomEase.create("custom", "M0,0 C0.254,0.032 0.494,0.6 1,1 ");

function slideProgress() {
    if (paused != 'true') {
        gsap.fromTo('.progress-level', {
            height: '0'
        }, {
            height: '100%',
            duration: (slideLength) / 1000,
            ease: 'none',
            delay: .25
        });

        gsap.fromTo('.progress-indicator', {
            top: '-1rem'
        }, {
            top: '100%',
            duration: (slideLength) / 1000,
            ease: 'none'
        });
    }
}

heroSlider.on('initialize.owl.carousel translate.owl.carousel', slideProgress);

heroSlider.on('translated.owl.carousel', function(e) {
    heroSlider.trigger('stop.owl.autoplay');
    if (paused != 'true') {
        heroSlider.trigger('play.owl.autoplay');
    }
});

function startHero() {
    if (dataLoaded == 'true') {
        heroSlider.owlCarousel({
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: slideLength,
            items: 1,
            // autoplayHoverPause: true,
            // autoplaySpeed: autoPlaySpeed,
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            animateOut: 'zoomOut',
            animateIn: 'zoomIn',
            rewind: true,
            URLhashListener: true,
            // info: getInfo,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                768: {
                    dots: false
                },
            }
        });
    } else {
        setTimeout(startHero, 100);
    }
}

startHero();

//custom carousel buttons
$('.idm-carousel-nav a').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('idm-active').parent('li').siblings('li').find('a').removeClass('idm-active');
    var pos = $(this).attr('data-slide-num') - 1;
    // alert(pos);
    heroSlider.trigger('to.owl.carousel', pos);

    $('.idm-carousel-nav').addClass('navigated');
    // heroSlider.trigger('start.owl.autoplay');
    // progFun;
});


$('.pause-carousel').on('click', function(e) {
    // alert();
    e.preventDefault();

    if ($(this).hasClass('paused')) {
        heroSlider.trigger('play.owl.autoplay');
        $(this).removeClass('paused').html(
            '<i aria-hidden="true" class="far fa-pause-circle fa-lg"></i><span class="visually-hidden">Pause Carousel</span>'
        );
        paused = '';
        // $('.progress-level').css({'opacity' : '1'});
        // $('.progress-indicator').css({'opacity' : '1'});
        $('.data-carousel-progress').css({
            'opacity': '1'
        });
        slideProgress(100);

    } else {
        // alert();
        heroSlider.trigger('stop.owl.autoplay');
        $(this).addClass('paused').html(
            '<i aria-hidden="true" class="far fa-play-circle fa-lg"></i><span class="visually-hidden">Play Carousel</span>'
        );
        paused = 'true';
        // $('.progress-level').css({'opacity' : '0'});
        // $('.progress-indicator').css({'opacity' : '0'});
        $('.data-carousel-progress').css({
            'opacity': '0'
        });

        /*gsap.to('.progress-level',
            {height: '100%', duration: 0}
        );

        gsap.to('.progress-indicator',
            {top: '100%', duration: 0}
        );*/

        /* gsap.fromTo('.progress-level',
             {height: '0'},
             {height: '100%', duration: (slideLength + 400) / 1000, delay: .25}
         );

         gsap.fromTo('.progress-indicator',
             {top: '-1rem'},
             {top: '100%', duration: (slideLength + 400) / 1000}
         );*/
    }
});

// end Hero Carousel


// set min height on blog text sliding door effect for smoother transition

function blogMins() {
    // alert();
    var tallest = -1;
    var tallestArticle = -1;

    // min height on article data for smoother effect when text reflows on hover
    $('.ndm-blog .blog-data').css({
        'min-height': 'auto'
    });
    $('.ndm-blog .blog-data').each(function() {
        // alert($(this).height());
        tallest = tallest > $(this).height() ? tallest : $(this).height();

    });
    $('.ndm-blog .blog-data').each(function() {
        $(this).css({
            'min-height': tallest + 40 + 'px'
        });
    });

    //max height on blog items to avoid flicker when hovering on the bottom
    $('.ndm-blog article').css({
        'max-height': 'auto'
    });
    $('.ndm-blog article').each(function() {
        tallestArticle = tallestArticle > $(this).height() ? tallestArticle : $(this).height();

    });
    $('.ndm-blog article').each(function() {
        // $(this).css({'min-height': tallestArticle + 'px'});
    });
}

if (Modernizr.touchevents != true) {
    if ($('.ndm-blog').length > -1) {
        $(window).on('load orientationchange', blogMins);
        $(window).resize(blogMins);
    }
}


/*let productItems = gsap.utils.toArray(".product-item");
let productWrapper = document.querySelector(".products-wrapper");*/


// products homepage
if (Modernizr.touchevents != true && $('.products-wrapper').length > -1) {

    function productMins() {
        var tallest = -1;
        $('.product-item').each(function() {
            tallest = tallest > $(this).height() ? tallest : $(this).height();

        });
        $('.product-item').each(function() {
            $(this).css({
                'min-height': tallest + 'px'
            });
        });
    }

    if ($('.products-wrapper').length > -1) {
        $(window).on('load resize orientationchange', productMins);
        $(window).resize(productMins);
    }

    productItems = gsap.utils.toArray(".product-item");
    productWrapper = $(".products-wrapper");
    suppressorHeight = 400;

    $(".products-suppressor").css({
        'max-height': suppressorHeight + 'px'
    });

    function firstActive() {
        // alert();
        $('.product-item:first-child').addClass('active').siblings('.product-item').removeClass('active');
    }

    function setActive() {
        // alert();
        // parentOffset = $('.products-suppressor').offset().top;
        $('.product-item').each(function() {
            if ($(this).position().top <= (suppressorHeight / 2) + 50) {
                $(this).toggleClass('active');
                $(this).siblings('.product-item').removeClass('active')
            } else {

            }
        });
    }

    function lastActive() {
        // alert();
        $('.product-item:last-child').addClass('active').siblings('.product-item').removeClass('active');
    }


    $(window).on('load', firstActive);

    gsap.to(productItems, {
        yPercent: -100 * (productItems.length - 1),
        // yPercent: - (productWrapper.outerHeight() - suppressorHeight),
        // yPercent: -100,
        // yPercent: -100 * (productItems.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".products-trigger",
            // scroller: '.products-suppressor',
            pin: true,
            scrub: true,
            // toggleClass: {targets: productItems, className: "active"},
            // toggleClass: "imActive",
            // snap: 1 / (productItems.length - 1),
            start: "top 20%",
            // anticipatePin: 1,
            // onToggle: setActive,
            onUpdate: setActive,
            onLeave: lastActive,
            onLeaveBack: firstActive,
            // snap: 1/(productItems - 1),
            // endTrigger: '.products-end-trigger',
            // base vertical scrolling on how wide the container is so it feels more natural.
            // end: 'top bottom',
            // markers: true,
        }
    });


    // $(window).on('load resize orientationchange', ScrollTrigger.refresh());

}
// end products homepage


// articles/card carousel
$('.ndm-article-carousel').owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    items: 1,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M48.64,20.039H11.992l8.75,8.75-2.266,2.187-12.5-12.5,12.5-12.5,2.187,2.187-8.671,8.75H48.64Z" transform="translate(-5.977 -5.977)" fill="#eff3f4"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M5.977,20.039H42.624l-8.75,8.75,2.266,2.187,12.5-12.5-12.5-12.5L33.952,8.164l8.671,8.75H5.977Z" transform="translate(-5.977 -5.977)" fill="#eff3f4"/></svg>'],
    URLhashListener: true,
    // info: getInfo,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        768: {
            items: 3,
            dots: true
        },
        1200: {
            items: 3,
            dots: false,
            nav: true
        }
    },
    onInitialized: function() {
        // alert();
        $('button.owl-prev').attr('role', 'button').attr('title', 'Previous');
        $('button.owl-next').attr('role', 'button').attr('title', 'Next');
        /*$('button.owl-prev').attr('aria-label', 'previous slide');
        $('button.owl-next').attr('aria-label', 'next slide');*/

    }
});

$('.ndm-card-carousel').owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    items: 1,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M48.64,20.039H11.992l8.75,8.75-2.266,2.187-12.5-12.5,12.5-12.5,2.187,2.187-8.671,8.75H48.64Z" transform="translate(-5.977 -5.977)" fill="#110E0E"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M5.977,20.039H42.624l-8.75,8.75,2.266,2.187,12.5-12.5-12.5-12.5L33.952,8.164l8.671,8.75H5.977Z" transform="translate(-5.977 -5.977)" fill="#110E0E"/></svg>'],
    URLhashListener: true,
    // info: getInfo,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        768: {
            items: 3,
            dots: true
        },
        1200: {
            items: 3,
            dots: false,
            nav: true
        },
        1400: {
            items: 4,
            dots: false,
            nav: true
        }
    },
    onInitialized: function() {
        // alert();
        $('button.owl-prev').attr('role', 'button').attr('title', 'Previous');
        $('button.owl-next').attr('role', 'button').attr('title', 'Next');
        /*$('button.owl-prev').attr('aria-label', 'previous slide');
        $('button.owl-next').attr('aria-label', 'next slide');*/

    }
});

$('.ndm-testimonial-carousel').owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    items: 1,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M48.64,20.039H11.992l8.75,8.75-2.266,2.187-12.5-12.5,12.5-12.5,2.187,2.187-8.671,8.75H48.64Z" transform="translate(-5.977 -5.977)" fill="#eff3f4"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="42.663" height="25" viewBox="0 0 42.663 25"><path data-name="Icon ionic-md-arrow-forward" d="M5.977,20.039H42.624l-8.75,8.75,2.266,2.187,12.5-12.5-12.5-12.5L33.952,8.164l8.671,8.75H5.977Z" transform="translate(-5.977 -5.977)" fill="#eff3f4"/></svg>'],
    URLhashListener: true,
    // info: getInfo,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        768: {
            items: 1,
            dots: true
        },
        1200: {
            items: 1,
            dots: false,
            nav: true
        }
    },
    onInitialized: function() {
        // alert();
        $('button.owl-prev').attr('role', 'button').attr('title', 'Previous');
        $('button.owl-next').attr('role', 'button').attr('title', 'Next');
        /*$('button.owl-prev').attr('aria-label', 'previous slide');
        $('button.owl-next').attr('aria-label', 'next slide');*/

    }
});






var colorPrim = '#00B4BE'
var colorRed = '#B7094C'
var colorStroke = '#bdbcbc'

function prodIntro() {
    var tl = gsap.timeline();

    tl
        .to('#long-sound line', {
            scaleY: '.55',
            transformOrigin: 'center',
            duration: .375,
            // stagger: .1,
            ease: 'power2',
            repeat: 6,
            yoyo: true
        })
        .to('#short-sound line', {
                scaleY: '.75',
                transformOrigin: 'center',
                duration: .375,
                // stagger: .1,
                ease: 'power2',
                repeat: 6,
                yoyo: true,

            },
            '<.1'
        )


        .to('.circ1, #short-sound line, #long-sound line', {
            scale: '1.25',
            opacity: '0',
            transformOrigin: 'center',
            duration: 1,
            // stagger: .1,
            ease: 'power2'
        })
        .fromTo('#circle-grid', {
                scale: .5,
                transformOrigin: 'center'
            }, {
                scale: 1,
            },
            '<.25'
        )
        .fromTo('#circle-grid circle', {
                scale: .75,
                transformOrigin: 'center',
            }, {
                fill: colorPrim,
                duration: 1
            },
            '<.25'
        )
        .to('#circle-grid circle.pulse-fill', {
                fill: colorRed,
                duration: 1
            },
            '<0'
        )

    return tl;
}


function prodLoop() {
    var productsLoop = gsap.timeline({
        repeat: -1,
        repeatRefresh: true,
        repeatDelay: .5
    });

    productsLoop
        .to('#dot-to-dot polyline', {
            opacity: 0,
            duration: 0,
        })
        .to('.pulse_x002D_1', {
            scaleX: '1.625',
            scaleY: '1.625',
            stroke: colorPrim,
            transformOrigin: 'center',
            duration: .25,
            ease: 'power2'
        })
        .to('.pulse_x002D_1', {
            scaleX: '2',
            scaleY: '2',
            opacity: '0',
            duration: 1,
            ease: 'linear'
        })
        .to('#dot-to-dot polyline', {
                opacity: 1,
                duration: 0,
            },
            '<+0'
        )
        .fromTo('#dot-to-dot polyline', {
                drawSVG: '0% 0%',
                stroke: colorStroke,
            }, {
                opacity: 1,
                drawSVG: '0% 100%',
                duration: 2,
                ease: 'linear',

            },
            '<+0'
        )
        .fromTo('#dot-to-dot polyline', {
            drawSVG: '0% 100%'
        }, {
            drawSVG: '100% 100%',
            stroke: '#fff',
            duration: 2,
            ease: 'linear',
        })

        .to('.pulse_x002D_2', {
                scaleX: '1.625',
                scaleY: '1.625',
                stroke: colorPrim,
                transformOrigin: 'center',
                duration: .25,
                ease: 'power2'
            },
            '<-1.125'
        )
        .to('.pulse_x002D_2', {
                scaleX: 2,
                scaleY: 2,
                opacity: '0',
                duration: 1,
                ease: 'linear'
            },
            '<.25'
        )


        .to('#circle-grid #innerCircles', {
                rotate: '-=90',
                transformOrigin: 'center',
                duration: 2,
                ease: 'power2'
            },
            '>+2'
        )
        .to('#circle-grid #outerCircles', {
                rotate: '-=90',
                transformOrigin: 'center',
                duration: 2,
                ease: 'power2'
            },
            '<.5'
        )
        .to('#dot-to-dot #line-wrapper', {
            rotate: '-=90',
            transformOrigin: 'center',
            duration: 0.005
        })
        .to('.pulse_x002D_1, .pulse_x002D_2', {
            opacity: '1',
            scaleX: '.5',
            scaleY: '.5',
            duration: 0.005
        })

    return productsLoop;
}

var prodTl = gsap.timeline({
    id: 'productsTl',
    scrollTrigger: {
        trigger: '.products-trigger',
        start: "top 20%",
    }
});

prodTl
    .add(prodIntro())
    .add(prodLoop())


function parallaxHero(e) {
    // alert(e);
    $('.idm-hero-img').css({
        'top': e + '%'
    });
}

gsap.to('.jumbotron', {
    scrollTrigger: {
        trigger: '.jumbotron',
        start: 'top top',
        onUpdate: (self) => parallaxHero(self.progress * 50)
        // onUpdate: self => console.log("progress:", self.progress)
    }
})




//hide nav unless scroll direction is up
var position = $(window).scrollTop();

// $(window).scroll(function() {
function interstitial() {
    if ($('.nav-opened').hasClass('nav-opened')) {} else {
        var scroll = $(window).scrollTop();
        hdrHeight = $('.idm-navbar-brand').outerHeight();
        navHeight = $('.ndm-main-nav').outerHeight();
        if (scroll > position && scroll >= 1) {
            console.log('scrollDown');
            $('.ndm-main-nav').css({
                'margin-top': -navHeight
            });
            // $('div').text('Scrolling Down Scripts');
        } else {
            console.log('scrollUp');
            $('.ndm-main-nav').css({
                'margin-top': '0'
            });
            // $('header').css('top', 0);
            // $('div').text('Scrolling Up Scripts');
        }
        if (scroll >= hdrHeight) {
            // $('header').addClass('bg-white');
        } else {
            // $('header').removeClass('bg-white');
        }
        position = scroll;
    }
}

// });


$(window).scroll(interstitial);
$(window).on('load', interstitial);
$(document).ready(interstitial());



var numSectionLinks = $('.ndm-section-nav li').length;
var numDesk = '';
if (numSectionLinks <= 6) {
    numDesk = numSectionLinks;
} else {
    numDesk = 6.5;
}

//    swiper navigation
const swiper = new Swiper('.ndm-section-nav', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.5,
            spaceBetween: 40
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3.5,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 4.5,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: numDesk,
            spaceBetween: 40
        }
    }
})



// GSDevTools.create();

function logoMarquee() {
    $('.marquee-logos').each(function(i) {




        var outerW = $(this)[i].scrollWidth;
        var innerW = $(this).outerWidth();

        var numItems = $(this).find('.marquee-image').length;
        var dur = (numItems * (outerW * .001)) * .2;

        var moveX = (outerW - innerW)

        // console.log('Number of Items: ' + numItems + ' Outer Width: ' + outerW + ' Inner Width: ' + innerW);

        logoTl = gsap.timeline();

        logoTl
            .to($(this), {
                x: -moveX,
                duration: dur,
                ease: 'none',
                repeat: -1,
                yoyo: true
            })

        $(this).on('mouseenter', function() {
            logoTl.pause();
        });
        $(this).on('mouseleave', function() {
            logoTl.play();
        });

    });
}

$(window).on('load, resize, orientationChange', logoMarquee())

if (Modernizr.touchevents != true) {
    scrollerHeight = 200
    $('.ndm-scroll').each(function() {
        if ($(this).outerHeight() > scrollerHeight + 50) {
            $(this).css({
                'height': scrollerHeight + 'px'
            });
            $(this).customScrollbar({
                skin: "default-skin",
                fixedThumbHeight: 14,
                wheelSpeed: 10,
                updateOnWindowResize: true
                // preventDefaultScroll: true
            });
        }
    });
}

//careers image sliders
var numCareersImg = $('.careers-collage img').length;

if (numCareersImg >= 4) {
    var careersImgPerBox = Math.round($('.careers-collage img').length / 4);
} else {
    var careersImgPerBox = numCareersImg / numCareersImg;
}

var imgArray = [];
var imgArrayChunks = [];

$('.careers-collage img').each(function() {
    var image = $(this).attr('src');
    var imageAlt = $(this).attr('alt');
    imgArray.push(
        image
    )
});
// console.log(imgArray)

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        imgArrayChunks.push(myChunk);
    }

    return imgArrayChunks;
}
// Split in group of 3 items
var result = chunkArray(imgArray, careersImgPerBox);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
// console.log(result);
// console.log(imgArrayChunks[0][0]);

for (index = 0; index < imgArrayChunks.length; index++) {
    for (i = 0; i < imgArrayChunks[index].length; i++) {
        console.log(imgArrayChunks[index][i]);
        $('.careers-collage-' + index).append('<div class="square"><img src="' + imgArrayChunks[index][i] + '" /></div>');
    }
}



$('.careers-img-carousel').each(function() {

    $(this).owlCarousel({
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        items: 1,
        // autoplayHoverPause: true,
        // autoplaySpeed: autoPlaySpeed,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        rewind: true,
        URLhashListener: true,
        // info: getInfo,
    });
})


;
// Default Theme JS that will be load ed on all pages.
// Note that this is the format JS should be wrapped in.
//
// See: https://www.drupal.org/node/2269515

// (function ($, Drupal) {
// Drupal.behaviors.myModuleBehavior = {
// attach: function (context, settings) {
// Apply the myCustomBehaviour effect to the elements only once.
// });
// }
// };
// })(jQuery, Drupal);

(function($, Drupal) {

    Drupal.behaviors.irNavActive = {
        attach: function(context, settings) {

            var link = window.location.pathname;

            $('.navbar-nav>li').each(function() {
                var aURL = $(this).find('a').attr('href');

                if (link.indexOf("/cerence-products/") != -1) {
                    if (aURL.indexOf("/cerence-products/core-technologies") != -1) {
                        $(this).addClass('active-trail');
                    }
                }
                if (link.indexOf("/cerence-stories/") != -1) {
                    if (aURL.indexOf("/cerence-stories/latest-stories") != -1) {
                        $(this).addClass('active-trail');
                    }
                }
                if (link.indexOf("/news-releases/news-release-details/") != -1) {
                    if (aURL.indexOf("/cerence-stories/latest-stories") != -1) {
                        $(this).addClass('active-trail');
                    }
                }
                if ((link.indexOf("/investors/") != -1) || (link.indexOf("/event-details/") != -1) || (link.indexOf("/sec-filings/") != -1)) {
                    if (aURL.indexOf("/investors/overview") != -1) {
                        $(this).addClass('active-trail');

                    }
                }
                if (link.indexOf("/about/") != -1) {
                    if (aURL.indexOf("/about/about-us") != -1) {
                        $(this).addClass('active-trail');
                    }
                }
            });

            /* IR Sub */
            $('.swiper .swiper-wrapper li').each(function() {
                var aURL = $(this).find('a').attr('href');

                if (link.indexOf("/event-details/") != -1) {
                    if (aURL.indexOf("/investors/events-and-resources") != -1) {
                        $(this).find('a').addClass('ndm-active');
                    }
                }

                if (link.indexOf("/sec-filings/") != -1) {
                    if (aURL.indexOf("/investors/financial-information") != -1) {
                        $(this).find('a').addClass('ndm-active');
                    }
                }
            });

            /* main sub */
            $('.navbar-nav .dropdown-menu li').each(function() {
                var aURL = $(this).find('a').attr('href');

                if (link != undefined && link != '/') {
                    if (link.indexOf("/management/") != -1) {
                        if (aURL.indexOf("/corporate-governance/executive-officers-and-board-of-directors") != -1) {
                            $(this).find('a').addClass('is-active');
                        }
                    }
                    if (link.indexOf("/board-member/") != -1) {
                        if (aURL.indexOf("/corporate-governance/executive-officers-and-board-of-directors") != -1) {
                            $(this).find('a').addClass('is-active');
                        }
                    }
                    if (link.indexOf("/event-details/") != -1) {
                        if (aURL.indexOf("/investors/events-and-resources") != -1) {
                            $(this).find('a').addClass('is-active');
                        }
                    }
                    if (link.indexOf("/news-release-details/") != -1) {
                        if (aURL.indexOf("/press-releases") != -1) {
                            $(this).find('a').addClass('is-active');
                        }
                    }
                    if (link.indexOf("/sec-filings/") != -1) {
                        if (aURL.indexOf("/investors/financial-information") != -1) {
                            $(this).find('a').addClass('is-active');
                        }
                    }
                    if (aURL.indexOf(link) != -1) {
                        $('> a', this).addClass('is-active');
                    }
                }
            });

            $('#irNav > li').each(function() {
                if ($(this).find('a').hasClass('active')) {
                    $(this).addClass('opened');
                }
            });
        }
    };

    Drupal.behaviors.showHideAll = {
        attach: function(context, settings) {
            $('.show-all').click(function() {
                $(this).toggleClass('hide-all');
            });
        }
    };


    /* Enviroment */
    Drupal.behaviors.Enviroment = {
        attach: function(context, settings) {
            var env = $('#toolbar-administration .secondary-toolbar .environment').text();
            $('body').addClass(env);
        }
    };


    /* CHESEN all - remove search */
    $("#ndq-content select").chosen({
        disable_search: true
    });

    /* CHOSEN Year */
    Drupal.behaviors.chosenYearDD = {
        attach: function(context, settings) {
            $('select[id$=-year-value] option:first').html("All Year");
            $('select[id$=-year-value]').trigger("chosen:updated");

            $('select#edit-field-nir-sec-date-filed-value option:first').html("All Year");
            $('select#edit-field-nir-sec-date-filed-value').trigger("chosen:updated");;
        }
    };

    Drupal.behaviors.chosenNews = {
        attach: function(context, settings) {
            var link = window.location.search;
            var $select = $('[id$=-field-nir-news-category-value]', context);
            var allOption = {
                value: 'all',
                text: 'All Releases'
            };

            $select.each(function() {

                if (link != undefined) {
                    if (link.indexOf("field_nir_news_category") == -1) {
                        allOption.selected = 'selected';
                    }
                }

                if (!$(this).val()) {
                    allOption.selected = 'selected'
                };
                $(this).prepend($('<option/>', allOption));

                $(this).chosen('destroy');
                $(this).removeAttr('multiple');

                $(this).chosen({
                    placeholder_text_single: 'All Releases',
                    disable_search: true
                });

                $(this).closest('form').submit(function(e) {
                    if ($(this).find('[id$=-field-nir-news-category-value]').val() == 'all') {
                        $(this).find('[id$=-field-nir-news-category-value]').remove();
                    }
                });
            });
        }
    };

    /* CHOSEN SEC */
    Drupal.behaviors.chosenSEC = {
        attach: function(context, settings) {

            var $select = $('#edit-field-nir-sec-form-group-target-id', context);
            var allOption = {
                value: 'all',
                text: 'All Filings'
            };

            $select.each(function() {
                $(this).chosen('destroy');
                $(this).removeAttr('multiple');

                if (!$(this).val()) {
                    allOption.selected = 'selected'
                };
                $(this).prepend($('<option/>', allOption));

                $(this).chosen({
                    placeholder_text_single: 'All Filings',
                    disable_search: true
                });

                $(this).closest('form').submit(function(e) {
                    if ($(this).find('#edit-field-nir-sec-form-group-target-id').val() == 'all') {
                        $(this).find('#edit-field-nir-sec-form-group-target-id').remove();
                    }
                });

                $(this).on('change', function() {
                    if ($(this).val() == 'all') {
                        $(this).remove();
                        $(this).closest("form").submit();
                    }
                });
            });

        }
    };


    Drupal.behaviors.modalPopup = {
        attach: function(context, settings) {
            $('#ndq-content.ndq-5841 .view-widget-people .item-list table span.ccbnTxtBold a', context).each(function() {
                var $link = $(this);
                var $bioFull = $(this).parent().next('.node__content').parent().html(); // get a full wrapper of each Bio

                // get clean Bio; If Bio lenght is more than 499 characters trim it
                var $bioDetail = $(this).parent().parent().next('.ccbnPopover').find('.ccbnBgTxt td').html();
                if ($bioDetail.length > 499) {
                    $bioDetail = $.trim($bioDetail).substring(0, 499).split(" ").slice(0, -1).join(" ") + " ...";
                    // replace original Bio with trimmed Bio
                    $($bioFull).find('.field--name-field-nir-person-bio').html($bioDetail);
                }

                //narrow to right DIV with all nessesary info we need to diplay
                var $bio = $($bioFull).find('.field--name-field-nir-person-bio').html($bioDetail).parent().parent();

                var $modalDialog = $('<div/>', {
                    'class': 'modalPopup',
                    'id': 'modalPopup'
                });

                $modalDialog.append($bio);

                $link.mouseover(function(e) {
                    e.preventDefault();
                    $modalDialog.dialog({
                        resizable: false,
                        autoOpen: true,
                        width: 500,
                        position: {
                            my: 'left top',
                            at: 'right',
                            of: $link
                        },
                        modal: false,
                        /* no overlay */
                        closeOnEscape: false,
                        /* remove close button */
                        open: function(event, ui) {
                            $(".ui-dialog-titlebar-close").hide();
                            $('.ui-widget-overlay').on('click', function() {
                                $modalDialog.dialog('destroy');
                            });
                        }
                    });
                }).mouseout(function() {
                    $modalDialog.dialog("close");
                });
            });
        }
    };




    Drupal.behaviors.modalBiosAndCC = {
        attach: function(context, settings) {
            $('#ndq-content .commiteetable tbody td:first-child a, #ndq-content .block-nir-person .bios-grid .item a', context).each(function() {
                var $link = $(this);
                var $url = $link.attr('href');
                var $modalDialog = $('<div/>', {
                    'class': 'modalDialog',
                    'id': 'modalDialog'
                });
                $modalDialog.load($url + ' .node--person--full');
                $link.click(function(e) {
                    e.preventDefault();

                    $modalDialog.appendTo('body')
                        .dialog({
                            resizable: false,
                            autoOpen: true,
                            width: $(window).width() * 50 / 100,
                            modal: true,
                            open: function(event, ui) { //added here
                                $('.ui-widget-overlay').on('click', function() {
                                    $('.modalDialog').dialog('close');
                                });
                            },
                            close: function(event, ui) {
                                $(this).dialog("close");
                                $(this).remove();
                            }
                        });
                });
            });
        }
    };


    Drupal.behaviors.irTabs = {
        attach: function(context, settings) {
            $('#ndq-content ul.ir-tabs li', context).click(function() {
                var $link = $(this);
                var $id = $link.attr('data-tab');

                $('#ndq-content ul.ir-tabs li').removeClass('active');
                $('#ndq-content .ir-tab-content').removeClass('active');

                $link.addClass('active');
                $('#ndq-content').find("#" + $id).addClass('active');
            });
        }
    };

    Drupal.behaviors.targetBlank = {
        attach: function(context, settings) {
            $('#ndq-content a[type*="application/pdf"]', context).each(function() {
                $(this).attr('target', '_blank');
            });

            $('.node--nir-sec-filing--full .field--name-field-nir-sec-form .field__item a').attr('target', '_blank');
            $('.node--nir-sec-filing--full .doc-group .html-link a').attr('target', '_blank');

            $('#bio .nir-widget--person--bio-external a').attr('target', '_blank');

            $('.nir-widget--event--add-to-calendar .add-gcal a').attr('target', '_blank');

            $('.nir-node--7771 .block--doc-slider #cJob .nir-widgets--asset--title a').attr('target', '_blank');
            $('.block--news .ndm-article-row .ndm-icon a').attr('target', '_blank');
            $('.block--nir-assets__widget--7376 .card-body .nir-widget--asset--title--title .field-nir-asset-title a').attr('target', '_blank');
            $('.block--nir-assets__widget--5831 .card-body .nir-widget--asset--title--title .field-nir-asset-title a').attr('target', '_blank');
        }
    };

    Drupal.behaviors.removeH1 = {
        attach: function(context, settings) {
            $('.node--type-nir_landing_page > h1').remove();
            $('.node--nir-system--full h1.field__item').remove();
            $('.node--nir-sec-filing--full h1').remove();
        }
    }

    Drupal.behaviors.mobiSlidingTable = {
        attach: function(context, settings) {
            $('.node--nir-news--full table', context).once('tableFix').wrap('<div id="nir-table-wrapper"></div>');
        }
    };

    Drupal.behaviors.releaseDetail = {
        attach: function(context, settings) {
            $('#ndq-content .wsh-releases .views-field-field-nir-news-title a:nth-child(2)', context).each(function() {
                var $link = $(this);
                var $url = $link.attr('href');
                var $rDetail = $('<div/>', {
                    'class': 'nirReleaseDetail',
                    'id': 'nirReleaseDetail'
                });
                $rDetail.load($url + ' .node--nir-news--full');
                $link.click(function(e) {
                    e.preventDefault();
                    $rDetail.appendTo('body')
                        .dialog({
                            resizable: false,
                            autoOpen: true,
                            width: $(window).width() * 60 / 100,
                            modal: true,
                            close: function(event, ui) {
                                $(this).dialog("close");
                                $(this).remove();
                            }
                        });
                });
            });
        }
    };



    Drupal.behaviors.bSubmitLabel = {
        attach: function(context, settings) {
            /* contact the board */
            $('.ndq-5866').find('.contact-form input.button').attr('value', 'Submit');
            /* lookup*/
            $('.ndq-5921').find('#historical-lookup-form input.button').attr('value', 'Lookup');
            /* calculator*/
            $('.ndq-5926').find('#stock-price-calculator-form input.button').attr('value', 'Calculate');
            /* alerts */
            //$('.ndq-5946').find('#nir-email-alerts-signup-form input.button').attr('value', 'Continue');
            /* search page */
            $('#ndq-content').find('.views-exposed-form input#edit-submit-search').attr('value', 'Search');
        }
    };



    /* Dynamic Stock Chart mobile fix */
    Drupal.behaviors.mobileChartFix = {
        attach: function(context, settings) {
            if ($('body').hasClass('nir-node--5916')) {
                window.onorientationchange = function() {
                    window.location.reload();
                };
            }
        }
    };


    /* Toolbar */
    Drupal.behaviors.toolbarClickFunctions = {
        attach: function(context, settings) {
            $(".ndq-tools a.ndqicon-print").click(function(e) {
                e.preventDefault();
                window.print();
            });
            $(".ndq-tools a.ndqicon-mail").click(function(e) {
                e.preventDefault();
                window.location.href = "mailto:?body=" + window.location + "&subject=" + document.title;
            });
        }
    };



    Drupal.behaviors.aboutLocations = {
        attach: function(context, settings) {
            $('.c-locations select', context).on('change', function() {
                var id = $(this).val();

                $('.c-locations').find('.c-loc').addClass('d-none');
                $('.c-locations').find('#' + id).removeClass('d-none');
            });
        }
    };



    Drupal.behaviors.jumpToSection = {
        attach: function(context, settings) {
            var link = window.location.search;

            if (link.indexOf("views-exposed-form-widget-sec-filings-table") != -1) {
                $('html, body').animate({
                    scrollTop: $('#tabSEC').offset().top - 120
                }, 1000);
            }

            if (link.indexOf("24d1c0c8-da60-43c0-9eac-16560ab3945f") != -1) {
                $('html, body').animate({
                    scrollTop: $('.block--market-data-block__historical-price-lookup').offset().top - 120
                }, 1000);
            }

            if (link.indexOf("a59bc28a-017e-4206-a405-598bfefa63c0") != -1) {
                $('html, body').animate({
                    scrollTop: $('.block--market-data-block__stock-price-calculator').offset().top - 120
                }, 1000);
            }

            if (link.indexOf("a6fe092f_year") != -1) {
                $('html, body').animate({
                    scrollTop: $('.block--events-cards').offset().top - 120
                }, 1000);
            }

        }
    };


    /*
    Drupal.behaviors.clickablebannerItem = {
        attach: function (context, settings) {
          	var clickableBannerlink = $('.block--hero.block--nir-faq__widget .clickableBanner').find('a').attr('href');
    	$('.block--hero.block--nir-faq__widget .clickableBanner').attr('onclick', 'location.href="'+ clickableBannerlink +'";');
        }
      };
    */






    /*Drupal.behaviors.youTubeSlider = {
      attach: function (context, settings) {
        jQuery(document, context).ajaxStop(function() {
          $('.stream li, context').each(function() {
            // alert();
            var vidId = $(this).find('.section-thumb a').attr('href').split('v=')[1].split('&')[0];
            // alert(vidUrl);
            var title = $(this, context).find('.section-title').html();
            var meta = $(this, context).find('.section-intro').html();
            $(this, context).addClass('card bg-gray h-100');
            $(this, context).wrapInner('<div class="card-body d-flex flex-wrap"></div>');
            $(this, context).prepend('<div class="videoWrapper"><iframe title="youtube video" width="560" height="315" src="https://www.youtube.com/embed/' + vidId + '?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>');
            $(this, context).find('.card-body', context).prepend('<div class="align-self-start w-100"><h5 class="card-title">' + title + '</h5></div>');
            $(this, context).find('.section-intro', context).wrap('<div class="align-self-end w-100 mt-5"></div>');
            $(this, context).find('.inner').detach();
            $(this, context).addClass('idm-show-yt-slides');
          });
          $('.stream.owl-carousel').owlCarousel({
            margin: 24,
            nav:false,
            dots:true,
            // loop: true,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
                nav: true,
                stagePadding: 0,
                // dots: false,
              }
            }
          });
        });
      }
    };*/




    /* Function to change logo, or other images, to local copies */
    /*Drupal.behaviors.imageplaceholder = {
      attach: function (context, settings) {
        var url = window.location.href;
        if(url.indexOf('.local:8093') != -1) {
          $('img').each(function () {
            if($(this).attr('src').indexOf('/files-encrypted/') != -1){
              var src = $(this).attr('src').split('/');
              var filename = src[src.length - 1];
              $(this).attr('src', '/' + drupalSettings.path.themeUrl + '/local/' + filename);
            }
          });
          $('source').each(function () {
            if($(this).attr('srcset').indexOf('/files-encrypted/') != -1){
              var src = $(this).attr('srcset').split('/');
              var filename = src[src.length - 1];
              $(this).attr('srcset', '/' + drupalSettings.path.themeUrl + '/local/' + filename);
            }
          });
        }
      }
    };*/




})(jQuery, Drupal);




Drupal.behaviors.youTubeSlider = {
    attach: function(context, settings) {
        jQuery(document, context).ajaxStop(function() {
            $('.stream.uTube li, context').each(function() {
                var vidId = $(this).find('.section-thumb a', context).attr('href').split('v=')[1].split('&')[0];
                var vidThumb = $(this).find('.section-thumb img', context).attr('src');
                var title = $(this, context).find('.section-title').html();
                var meta = $(this, context).find('.section-intro').html();
                $(this, context).addClass('card bg-gray h-100');
                $(this, context).wrapInner('<div class="card-body d-flex flex-wrap"></div>');

                $(this, context).prepend('<a class="yt-button p-0 position-relative" data-src="https://www.youtube.com/embed/' + vidId + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0&rel=0" data-target="#modalVidFeed" data-toggle="bsModal"><img src="' + vidThumb + '" /><div class="video-btn yt-feed-play bg-black position-absolute"><i aria-hidden="true" class="fa fa-play fa-2x">&nbsp;</i></div></a>');

                /*$(this, context).prepend('<div class="videoWrapper"><iframe title="youtube video" width="560" height="315" src="https://www.youtube.com/embed/' + vidId + '?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>');*/


                $(this, context).find('.card-body', context).prepend('<div class="align-self-start w-100"><h5 class="card-title">' + title + '</h5></div>');
                $(this, context).find('.section-intro', context).wrap('<div class="align-self-end w-100 mt-5"></div>');
                $(this, context).find('.inner').detach();
                $(this, context).addClass('idm-show-yt-slides');

                $('.yt-button', context).on('click', function() {
                    var src = $(this).attr('data-src');
                    $('#modalVidFeed').modal('show');
                    $('#modalVidFeed iframe').attr('src', src);
                });

                /*$('#modalVidFeed button', context).click(function () {
                  $('#modalVidFeed iframe').removeAttr('src');
                });*/

                $('#modalVidFeed').on('hide.bs.modal', function(e) {
                    // a poor man's stop video
                    $("#videoFeed").attr('src', '');
                });

            });

            // $('.nir-node--5811 .card-body .align-self-start .card-title a:contains("Cerence In Motion Special Live Event: Advancing Connected Mobility")').closest('.align-self-start').addClass('noblogevent');
            // $('.nir-node--5811 .noblogevent p.category').text('Cerence Event');  

            $('.stream.owl-carousel').owlCarousel({
                margin: 24,
                nav: false,
                dots: true,
                // loop: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        stagePadding: 0,
                        // dots: false,
                    }
                }
            });
        });

    }
};




/*Drupal.behaviors.storiesSliderFAQFix = {
  attach: function (context, settings) {
    $('body:not(.toolbar-tray-open) .hero-ford-cerence-blog').html('<video autoplay="" id="bg-video" loop="" muted="" playsinline=""><source src="//media.corporate-ir.net/media_files/IROL/Ford&Cerence/Hero_Ford&Cerence_Blog.mp4" type="video/mp4" /></video>');
  }
};*/

/*Drupal.behaviors.youTubeSlider = {
  attach: function (context, settings) {
    jQuery(document, context).ajaxStop(function() {
      $('.stream.uTube li, context').each(function() {
        var vidId = $(this).find('.section-thumb a', context).attr('href').split('v=')[1].split('&')[0];
        var title = $(this, context).find('.section-title').html();
        var meta = $(this, context).find('.section-intro').html();
        $(this, context).addClass('card bg-gray h-100');
        $(this, context).wrapInner('<div class="card-body d-flex flex-wrap"></div>');
        $(this, context).prepend('<div class="videoWrapper"><iframe title="youtube video" width="560" height="315" src="https://www.youtube.com/embed/' + vidId + '?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>');
        $(this, context).find('.card-body', context).prepend('<div class="align-self-start w-100"><h5 class="card-title">' + title + '</h5></div>');
        $(this, context).find('.section-intro', context).wrap('<div class="align-self-end w-100 mt-5"></div>');
        $(this, context).find('.inner').detach();
        $(this, context).addClass('idm-show-yt-slides');
      });
      $('.stream.owl-carousel').owlCarousel({
        margin: 24,
        nav:false,
        dots:true,
        // loop: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
            nav: true,
            stagePadding: 0,
            // dots: false,
          }
        }
      });
    });
  }
};*/


/*

  Drupal.behaviors.newsViewMore = {
    attach: function (context, settings) {
      $size_itmes  = $('#ndq-content #view-more-news > div').length;
      x=9;

      $('#ndq-content  #view-more-news > div:lt('+x+')').show();

  $size_itmes_visibale  = $('#ndq-content #view-more-news > div:visible').length;
  if ($size_itmes_visibale == $size_itmes) {
    $('a#aMoreNews').hide();
  }

  $('a#aMoreNews').click(function () {
    $('#ndq-content  #view-more-news > div:lt('+x+')').attr('name', '');
    x = (x+9 <= $size_itmes) ? x+9 : $size_itmes;
    $('#ndq-content  #view-more-news > div:lt('+x+')').attr('name', 'view-next-news');
    $('#ndq-content  #view-more-news > div:lt('+x+')').show();

    $size_itmes_visibale  = $('#ndq-content #view-more-news > div:visible').length;
    if ($size_itmes_visibale == $size_itmes) {
      $('a#aMoreNews').hide();
    }
  });
}
};


Drupal.behaviors.qrViewMore = {
    attach: function (context, settings) {

      var latestY = $('#ndq-content .view-grouping #QRs tbody tr').attr('class');
      var nextY = 0;
      var lastY = 0;
      var sizeItems = 0;

      $('.ndq-5806 .view-grouping #QRs tbody tr', context).each(function() {
        lastY  = $(this).attr('class');
        nextY = latestY-2;
        var trClass = $(this).attr('class');

        if (trClass >= latestY-1) {
          $(this).show();
        }
      });

      $('.ndq-5806 .view-grouping a.showMore', context).click(function(e) {
        e.preventDefault();

        if (nextY >= lastY ) {
          $('.ndq-5806 .view-grouping #QRs tbody tr.' + nextY).show();
          if (nextY == lastY ) {
            $(this).addClass('disable');
          }
          nextY = nextY - 1;
        }
        $(this).next('.showLess').removeClass('disable');

      });
      $('.ndq-5806 .view-grouping a.showLess', context).click(function(e) {
        e.preventDefault();

        $(this).prev('.showMore').removeClass('disable');
        if (nextY < latestY-2 ) {
          nextY = nextY + 1;
          $('.ndq-5806 .view-grouping #QRs tbody tr.' + nextY).hide();
          if (nextY == latestY-2 ) {
            $(this).addClass('disable');
          }
        }
      });


   Drupal.behaviors.alertsAutoFill = {
      attach: function (context, settings) {
        $("body.nir-node--5946").each(function(){
          var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;

            for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');

              if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
              }
            }
          };

          var getEmailValue = getUrlParameter('name');

          if(typeof getEmailValue != 'undefined'){
            $("input#edit-nir-email-alerts-signup-email").val(getEmailValue)
          }else{
            console.log("no var")
          };
        });
      }
    };

    // viacomCBS
    Drupal.behaviors.secCIKs = {
    attach: function (context, settings) {
      var link = window.location.pathname;
      $("#sec-company-name, #news-archive-status, #presentations-archive-status").each(function() {
        $("option[value='" + link +"']", this).attr("selected", true).trigger("chosen:updated");;
      });
      $("#sec-company-name, #news-archive-status, #presentations-archive-status").on('change',function(){
        window.location.href = $(this).val();
      });
    }
  };

     Drupal.behaviors.allSECFilings = {
       attach: function (context, settings) {
         $(".ndq-5876 form.views-exposed-form select#edit-field-nir-sec-form-group-target-id option", context).each(function (index, elem) {
           var $ddOption = $(elem);

           $ddOption.parent().on('change', function () {
             if ($ddOption.is(':selected') && $ddOption.text() == "All Filings") {
               var url = '/financial-information/sec-filings';
               window.location = url; // redirect
             }
           });
         });
       }
     };

      Drupal.behaviors.searchOnFocus = {
      attach: function (context, settings) {
        $('#ndq-tools-search input[type="text"]').focus(function() {
          if (this.value === 'Search Investors') {
            $(this).val('');
          }
        });
        $('#ndq-tools-search input[type="text"]').blur(function() {
          if (this.value === '') {
            $(this).val('Search Investors');
          }
        });
      }
    };


    Drupal.behaviors.mlSinglePage = {
      attach: function (context, settings) {
        $('html[lang="en"] #lang-tabs a[rel="swe"]', context).each(function(index, elem) {
          var enUrl = $(this).attr('href');
          if (link != undefined) {
            $(this).attr('href', '/sv' + enUrl);
          }
        });

        $('html[lang="sv"] #lang-tabs a:not([rel="swe"]), html[lang="sv"] .menu a, html[lang="sv"] .tools a', context).each(function(index, elem) {
          var link = $(this).attr('href');

          if (link != undefined) {
            if (link.indexOf("/sv/") != -1 ) {
              $(this).attr('href', link.replace('/sv/', '/'));
            }
          }
        });
      }
    };


  Drupal.behaviors.modalQRs = {
    attach: function (context, settings) {
      $('#ndq-content .view-widget-bundled-content .btn-modal', context).each(function() {
        var $link = $(this);
        var $urlID = $link.attr('href');
        var $modalDialog = $('<div/>', {
          'class': 'modalDialog',
          'id': 'modalDialog'
        }).html($($urlID).html());

        $modalDialog.load();
        $link.click(function(e) {
          e.preventDefault();

          $modalDialog.appendTo('body')
            .dialog({
              resizable: false,
              autoOpen: true,
              width: $(window).width() * 120 /600,
              modal: true,
              close: function(event, ui) {
                $(this).dialog("close");
                $(this).remove();
              }
            });
        });
      });
    }
  };

   Drupal.behaviors.modalLeaveSite = {
    attach: function (context, settings) {
      $('.leaveSite', context).each(function() {
        var $link = $(this);
        var $url = $(this).attr('href');
        var $id = $link.attr('class').split(" ");
        $id  = $id[0];
        var $modalContent = $('#ndq-content').find('#'+$id).html();

        var $modalDialog = $('<div/>', {
          'class': 'modalPopup',
          'id': 'modalPopup'
        });

        $modalDialog.append($modalContent);

        $link.click(function(e) {
          e.preventDefault();
          $modalDialog.dialog({
            resizable: true,
            autoOpen: true,
            width: 500,
            modal: true,
            closeOnEscape: true,
            open: function(event, ui) {
              $(".ui-dialog-titlebar-close", ui.dialog | ui).show();
            },
            close: function (event, ui) {
              $modalDialog.dialog('destroy');
            },
            buttons: [{
              text: "Continue",
              icon: "ui-icon-heart",
              class: "modal-btn",
              click: function() {
                window.location = $url;
                //window.open($url, '_blank');
              }
            }]
          });
        });

      });
    }
  };


  Drupal.behaviors.pplGrid2 = {
    attach: function (context, settings) {
      $('#ppl-grid-2 #ppl-grid-2-bio a', context).click(function (e) {
        e.preventDefault();
        var $link = $(this).attr('href');
        $(this).parents('#ppl-grid-2-bio').next('.full-width-bio').load($link +" .node--person--full").addClass('active');
      });
    }
  };


  Drupal.behaviors.domainRedirect = {
      attach: function (context, settings) {
		if(window.location.hostname == 'ir.axonicsmodulation.com') {
			var urlCurrent = window.location.href;
			urlCurrent = urlCurrent.toString();
			urlFinal = urlCurrent.replace(/ir\.axonicsmodulation\.com/,"ir.axonics.com")
			window.location = urlFinal;
		}
      }
  	};


  */

;
// Default Theme JS that will be loaded on all pages.
// Note that this is the format JS should be wrapped in.
//
// See: https://www.drupal.org/node/2269515

(function($, Drupal) {


    Drupal.behaviors.ChosenAccessibilityFix = {
        attach: function(context, settings) {

            $('#ndq-content form', context).each(function(index, element) {
                $(this).find('.js-form-item', context).each(function(index, element) {
                    var lbl = $(this).find('label').text();
                    $(this).find('input').attr('aria-label', lbl);
                    $(this).find('select').attr('aria-label', lbl);
                    $(this).find('.chosen-container .chosen-search').attr('aria-hidden', 'true');
                });
            });
            $('#ndq-content .c-locations', context).each(function(index, element) {
                var lbl = $(this).find('label').text();
                $(this).find('input').attr('aria-label', lbl);
                $(this).find('select').attr('aria-label', lbl);
                $(this).find('.chosen-container .chosen-search').attr('aria-hidden', 'true');
            });

            $('#block-widgetstockchart img, .block--nir-stock-chart img', context).each(function(index, element) {
                $(this).attr('alt', 'Stock Chart');
            });

            $('.node--nir-news--full img', context).each(function(index, element) {
                $(this).attr('alt', 'News Release image');
            });
            $('.block-nir-news', context).each(function(index, element) {
                $(this).find('.nir-widgets-file-link a').attr('aria-label', 'News Release link').append("<span class='sr-only'>News Release link</span>");
                $(this).find('.nir-widget--news--read-more a').attr('aria-label', 'News Release link').append("<span class='sr-only'>News Release link</span>");
            });
            $('.careers-img-carousel .square img', context).each(function(index, element) {
                $(this).attr('alt', 'careers image');
            });




            $("form.stock-price-calculator-form .js-form-wrapper").each(function(index, element) {
                $(this).find('div[id*="date_month_chosen"] .chosen-search input').attr('aria-label', 'Investment Month');
                $(this).find('div[id*="date_day_chosen"] .chosen-search input').attr('aria-label', 'Investment Day');
                $(this).find('div[id*="date_year_chosen"] .chosen-search input').attr('aria-label', 'Investment Year');
                $(this).find('div[id*="investment_type_chosen"] .chosen-search input').attr('aria-label', 'Units');
                $(this).find('input[id*="edit-url"]').attr('aria-label', 'Edit Url');
            });

            $("form.historical-price-lookup-form .js-form-wrapper").each(function(index, element) {
                $(this).find('div[id*="date_month_chosen"] .chosen-search input').attr('aria-label', 'Lookup Month');
                $(this).find('div[id*="date_day_chosen"] .chosen-search input').attr('aria-label', 'Lookup Day');
                $(this).find('div[id*="date_year_chosen"] .chosen-search input').attr('aria-label', 'Lookup Year');
                $(this).find('input[id*="edit-url"]').attr('aria-label', 'Edit Url');
            });

            $("form.contact-message-nir-document-request-form").each(function(index, element) {
                $(this).find('.js-form-wrapper div[id*="address_country_code"] .chosen-search input').attr('aria-label', 'Country');
                $(this).find('.js-form-wrapper div[id*="investor_type"] .chosen-search input').attr('aria-label', 'Investor Type');
                $(this).find('input[id*="edit-url"]').attr('aria-label', 'Edit Url');
                //captcha still has textarea no label
            });

            $("form.market-data-filter-form .js-form-wrapper").each(function(index, element) {
                $(this).find('div[id*="timeframe_display_chosen"] .chosen-search input').attr('aria-label', 'Timeframe');
                $(this).find('input[id*="edit-url"]').attr('aria-label', 'Edit Url');
            });
            $("table.income-statment th:first-child, table.cash-flow th:first-child, table.balance-sheet th:first-child").each(function(index, element) {
                var regEx = /&nbsp;/gm;
                if (regEx.test($(this).html())) {
                    $(this).replaceWith("<td />");
                }
            });

            $(".block--market-data-block__estimates__all table th").each(function(index, element) {
                if ($(this).html() === '') {
                    $(this).replaceWith("<td style='background-color:#003E74'></td>");
                }
            });

            $(".block--market-data-block__estimates__all .js-form-item").each(function(index, element) {
                $(this).find('div[id*="measure_selector"] .chosen-search input').attr('aria-label', 'Available Measures');
            });

            $("form#views-exposed-form-widget-sec-filings-table").each(function(index, element) {
                $(this).find('.keyword-box #edit_field_nir_sec_form_group_target_id_chosen input').attr('aria-label', 'Form Group');
                $(this).find('.keyword-box #edit_field_nir_sec_date_filed_value_chosen input').attr('aria-label', 'Filing Year');
                //Markup customized
            });

            $("form#views-exposed-form-widget-assets-widget-assets-ul").each(function(index, element) {
                $(this).find('div#edit_items_per_page_chosen .chosen-search input').attr('aria-label', 'Items Per Page');

            });
            $("form.contact-message-nir-contact-us-form, form.nir-email-alerts-signup-form").each(function(index, element) {
                $(this).find('input[id*="edit-url"]').attr('aria-label', 'Edit Url');
            });
        }
    };

})(jQuery, Drupal);;
(function($, Drupal) {
    'use strict';
    Drupal.behaviors.nirWebsiteNotices = {
        attach: function(context, settings) {

            $('.notification-modal').each(function(index) {
                var cookieLength = $(this).data('cookie-length');
                if (cookieLength === 0) {
                    cookieLength = '';
                }
                var cookieId = $(this).data('id');
                var notificationType = $(this).data('notification-type');

                if (!Cookies.get('nir_notice_' + cookieId)) {
                    var buttonText = 'Accept';
                    if (notificationType === 'notification') {
                        buttonText = 'OK';
                    }
                    $(this).dialog({
                        modal: true,
                        width: 500,
                        closeOnEscape: false,
                        close: function() {
                            $(this).dialog('close');
                            Cookies.set(
                                'nir_notice_' + cookieId,
                                'true', {
                                    expires: cookieLength
                                });
                        },
                        buttons: [{
                            text: buttonText,
                            dialogClass: notificationType,
                            click: function() {
                                $(this).dialog('close');
                                Cookies.set(
                                    'nir_notice_' + cookieId,
                                    'true', {
                                        expires: cookieLength
                                    });
                            }
                        }]
                    });
                    if (notificationType === 'disclaimer') {
                        $('.ui-dialog-titlebar-close').hide();
                    }
                }

            });
        }
    };
})(jQuery, Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal, debounce) {
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return this[0] && callback ? callback(this[0]).trim() : '';
    };

    $.fn.drupalSetSummary = function(callback) {
        var self = this;

        if (typeof callback !== 'function') {
            var val = callback;

            callback = function callback() {
                return val;
            };
        }

        return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function() {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated');
    };

    Drupal.behaviors.formSingleSubmit = {
        attach: function attach() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                var formValues = $form.serialize();
                var previousValues = $form.attr('data-drupal-form-submit-last');

                if (previousValues === formValues) {
                    e.preventDefault();
                } else {
                    $form.attr('data-drupal-form-submit-last', formValues);
                }
            }

            $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
        }
    };

    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }

    function fieldsList(form) {
        var $fieldList = $(form).find('[name]').map(function(index, element) {
            return element.getAttribute('id');
        });
        return $.makeArray($fieldList);
    }

    Drupal.behaviors.formUpdated = {
        attach: function attach(context) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
            var formFields;

            if ($forms.length) {
                $.makeArray($forms).forEach(function(form) {
                    var events = 'change.formUpdated input.formUpdated ';
                    var eventHandler = debounce(function(event) {
                        triggerFormUpdated(event.target);
                    }, 300);
                    formFields = fieldsList(form).join(',');
                    form.setAttribute('data-drupal-form-fields', formFields);
                    $(form).on(events, eventHandler);
                });
            }

            if (contextIsForm) {
                formFields = fieldsList(context).join(',');
                var currentFields = $(context).attr('data-drupal-form-fields');

                if (formFields !== currentFields) {
                    triggerFormUpdated(context);
                }
            }
        },
        detach: function detach(context, settings, trigger) {
            var $context = $(context);
            var contextIsForm = $context.is('form');

            if (trigger === 'unload') {
                once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function(form) {
                    form.removeAttribute('data-drupal-form-fields');
                    $(form).off('.formUpdated');
                });
            }
        }
    };
    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach: function attach(context, settings) {
            var userInfo = ['name', 'mail', 'homepage'];
            var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));

            if ($forms.length) {
                userInfo.forEach(function(info) {
                    var $element = $forms.find("[name=".concat(info, "]"));
                    var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
                    var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();

                    if ($element.length && emptyOrDefault && browserData) {
                        $element.val(browserData);
                    }
                });
            }

            $forms.on('submit', function() {
                userInfo.forEach(function(info) {
                    var $element = $forms.find("[name=".concat(info, "]"));

                    if ($element.length) {
                        localStorage.setItem("Drupal.visitor.".concat(info), $element.val());
                    }
                });
            });
        }
    };

    var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
        var url;

        if (e.type === 'click') {
            url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
        } else {
            url = window.location;
        }

        var hash = url.hash.substr(1);

        if (hash) {
            var $target = $("#".concat(hash));
            $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
            setTimeout(function() {
                return $target.trigger('focus');
            }, 300);
        }
    };

    var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
(function($, Drupal, drupalSettings) {

    'use strict';

    /**
     * Display the preview for date format entered.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attach behavior for removing FAQ field.
     */
    Drupal.behaviors.nirFaqAccordion = {
        attach: function(context) {
            var $open_class = 'nir-faq--open';
            var $closed_class = 'nir-faq--closed';
            // Hide all by default that are closed.
            $('.nir-faq--item-wrapper.nir-faq--closed .nir-faq--answer').css('display', 'none');
            // If some are open, set the block display so slide is nice and pretty..
            $('.nir-faq--item-wrapper.nir-faq--open .nir-faq--answer').css('display', 'block');

            // "Show/Hide All" functionality.
            $('.nir-faq--wrapper > a').off('click').on('click', function(e) {
                e.preventDefault();
                var $parent = $(this).closest('.nir-faq--wrapper');
                if ($(this).hasClass($open_class)) {
                    $(this).text($(this).data('open'));
                    $parent.find('.nir-faq--item-wrapper > .nir-faq--answer').slideUp();
                    $parent.find('.nir-faq--item-wrapper').removeClass($open_class).removeClass($closed_class).addClass($closed_class);
                } else {
                    $(this).text($(this).data('closed'));
                    $parent.find('.nir-faq--item-wrapper > .nir-faq--answer').slideDown();
                    $parent.find('.nir-faq--item-wrapper').removeClass($open_class).removeClass($closed_class).addClass($open_class);
                }
                $(this).toggleClass($open_class);
                $(this).toggleClass($closed_class);
            });

            // Clicking on question functionality.
            $('.nir-faq--question').off('click').on('click', function(e) {
                var $parent = $(this).closest('.nir-faq--item-wrapper');
                if ($parent.hasClass($open_class)) {
                    $(this).next('.nir-faq--answer').slideUp();
                } else {
                    $(this).next('.nir-faq--answer').slideDown();
                }
                $parent.toggleClass($open_class);
                $parent.toggleClass($closed_class);
            });
        }
    };

})(jQuery, Drupal, drupalSettings);;
(function($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.adobelaunch = {
        attach: function(context, settings) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "event": "Page Loaded",
                "reportSuite": {
                    "name": " "
                },
                "page": {
                    "pageInfo": {
                        "pageName": " ",
                        "pageURL": " ",
                        "siteDomains": " "
                    }
                },
                // "category":{
                //   "siteSection": " ",
                //   "siteSubSection1": " ",
                //   "siteSubSection2": " ",
                //   "siteSubSection3": " ",
                //   "siteSubSection4": " "
                // }
            });

        }
    };

})(jQuery, Drupal, drupalSettings);;