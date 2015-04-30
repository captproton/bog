(function e(b, g, d) {
    function c(m, j) {
        if (!g[m]) {
            if (!b[m]) {
                var i = typeof require == "function" && require;
                if (!j && i) {
                    return i(m, !0)
                }
                if (a) {
                    return a(m, !0)
                }
                var k = new Error("Cannot find module '" + m + "'");
                throw k.code = "MODULE_NOT_FOUND", k
            }
            var h = g[m] = {
                exports: {}
            };
            b[m][0].call(h.exports, function(l) {
                var o = b[m][1][l];
                return c(o ? o : l)
            }, h, h.exports, e, b, g, d)
        }
        return g[m].exports
    }
    var a = typeof require == "function" && require;
    for (var f = 0; f < d.length; f++) {
        c(d[f])
    }
    return c
})({
    1: [
        function(c, g, a) {
            var b = c("react");
            var h = BootstrapData.get("captcha_data").captchaPublicKey;
            var f = "https://www.google.com/recaptcha/api.js";
            var d = b.createClass({
                displayName: "NoCaptcha",
                render: function() {
                    return b.createElement("div", {
                        className: "g-recaptcha",
                        "data-sitekey": h
                    })
                },
                componentDidMount: function() {
                    var i = {
                        hl: Airbnb.options.language
                    };
                    $.getScript(f + "?" + $.param(i))
                }
            });
            g.exports = d
        }, {
            react: "react"
        }
    ],
    2: [
        function(c, d, b) {
            var a, g = function(k, i) {
                    for (var h in i) {
                        if (f.call(i, h)) {
                            k[h] = i[h]
                        }
                    }

                    function j() {
                        this.constructor = k
                    }
                    j.prototype = i.prototype;
                    k.prototype = new j();
                    k.__super__ = i.prototype;
                    return k
                }, f = {}.hasOwnProperty;
            a = (function(i) {
                g(h, i);

                function h() {
                    return h.__super__.constructor.apply(this, arguments)
                }
                h.prototype.template = "page3/o2.1/preview_bar";
                h.prototype.postInitialize = function() {
                    return this.render()
                };
                h.prototype.getRenderData = function() {
                    return _.extend(this.model.toJSON(), {
                        editUrl: this.editUrl(),
                        headline: this.headline(),
                        showEditLink: this.showEditLink()
                    })
                };
                h.prototype.headline = function() {
                    if (this.cameFromMLFinishModal()) {
                        return t("ml.preview.your_space_is_listed_edit_calendar", {
                            link_start: "<a href='/manage-listing/" + this.model.id + "/calendar'>",
                            link_end: "</a>"
                        })
                    } else {
                        if (this.isListed()) {
                            return t("ml.preview.this_is_a_preview_of_your_listing")
                        } else {
                            return t("ml.preview.your_space_is_unlisted")
                        }
                    }
                };
                h.prototype.editUrl = function() {
                    return "/manage-listing/" + (this.model.get("id"))
                };
                h.prototype.isListed = function() {
                    return this.model.get("has_availability")
                };
                h.prototype.cameFromMLFinishModal = function() {
                    return window.location.search.indexOf("preview-finish-modal") !== -1
                };
                h.prototype.cameFromML = function() {
                    return window.location.search.match(/preview/)
                };
                h.prototype.isVRPlatformPoweredHost = function() {
                    return Airbnb.userAttributes.is_vr_platform_powered_host
                };
                h.prototype.showEditLink = function() {
                    return !this.cameFromML() && !this.isVRPlatformPoweredHost()
                };
                return h
            })(AIR.Views.BaseView);
            d.exports = a
        }, {}
    ],
    3: [
        function(c, d, b) {
            var g = c("jquery");
            var a = [];
            if (typeof window !== "undefined") {
                window.__insp = a;
                a.push(["wid", 965988720])
            }
            var f = function(i) {
                g(window).on("load", function h() {
                    var k = document.createElement("script");
                    k.async = true;
                    k.id = "inspsync";
                    k.src = "https://cdn.inspectlet.com/inspectlet.js";
                    var j = document.getElementsByTagName("script")[0];
                    j.parentNode.insertBefore(k, j)
                });
                f.push(["tagSession", i])
            };
            f.push = function(h) {
                return a.push(h)
            };
            d.exports = f
        }, {
            jquery: "jquery"
        }
    ],
    4: [
        function(b, c, a) {
            !(function(i) {
                var h = 1.5;

                function g(m) {
                    var l = i(m),
                        n, k;
                    n = l.clone().css({
                        position: "absolute",
                        visibility: "hidden",
                        height: "auto",
                        "z-index": "-1"
                    }).appendTo(l.parent());
                    k = n.height();
                    n.remove();
                    return k
                }

                function f(k) {
                    var m = i(document),
                        l = m.find(".expandable");
                    k = k || {};
                    l.find(".expandable-content").each(function() {
                        var o = i(this),
                            n;
                        n = g(o);
                        if (n <= o.height() * h) {
                            o.closest(".expandable").addClass("expanded")
                        } else {
                            o.closest(".expandable").data("fullHeight", n)
                        }
                    });
                    l.find(".expandable-content-full").each(function() {
                        var o = i(this),
                            n = o.closest(".expandable");
                        n.data("fullHeight", g(o));
                        o.css("height", n.find(".expandable-content-summary").height())
                    });
                    m.on("click", ".expandable-trigger-more", function(o) {
                        var n = i(this).closest(".expandable");
                        if (n.hasClass("expanded")) {
                            return
                        }
                        n.addClass("expanded").find(".expandable-content, .expandable-content-full").css("height", n.data("fullHeight")).afterTransition(function() {
                            i(this).css({
                                transition: "none",
                                height: ""
                            });
                            d(i(this));
                            if (k.callback) {
                                k.callback()
                            }
                        }, 200);
                        o.preventDefault()
                    })
                }

                function d(k) {
                    var l = k.closest(".row");
                    if (l.hasClass("amenities")) {
                        j("amenities")
                    } else {
                        if (l.hasClass("description")) {
                            j("description")
                        }
                    }
                }

                function j(k) {
                    Airbnb.Tracking.logEvent({
                        event_name: "listing_view",
                        event_data: {
                            operation: "click",
                            page: "p3",
                            section: k,
                            listing_id: AirbnbRooms.hostingId,
                            expanded: true
                        }
                    })
                }
                if (typeof c !== "undefined") {
                    c.exports = f
                } else {
                    provide("expandable", f)
                }
            })(window.jQuery)
        }, {}
    ],
    5: [
        function(c, d, b) {
            var a = 16;
            d.exports = f;

            function f(g) {
                this.id = 0;
                this.$el = g
            }
            f.prototype.start = function() {
                var g = this;
                clearTimeout(this.id);
                this.id = setTimeout(function() {
                    g.$el.datepicker("option", "loading", true)
                }, a)
            };
            f.prototype.stop = function() {
                var g = this;
                clearTimeout(this.id);
                this.id = setTimeout(function() {
                    g.$el.datepicker("option", "loading", false)
                }, a)
            }
        }, {}
    ],
    6: [
        function(g, b, i) {
            var q = function(x, w) {
                if (Array.isArray(x)) {
                    return x
                } else {
                    if (Symbol.iterator in Object(x)) {
                        var A = [];
                        var s = true;
                        var z = false;
                        var y = undefined;
                        try {
                            for (var v = x[Symbol.iterator](), B; !(s = (B = v.next()).done); s = true) {
                                A.push(B.value);
                                if (w && A.length === w) {
                                    break
                                }
                            }
                        } catch (u) {
                            z = true;
                            y = u
                        } finally {
                            try {
                                if (!s && v["return"]) {
                                    v["return"]()
                                }
                            } finally {
                                if (z) {
                                    throw y
                                }
                            }
                        }
                        return A
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }
            };
            var p = g("underscore");
            var j = g("./util");
            var r = "/v2/calendar_months";
            var a = 3;
            var m = {};
            b.exports = {
                getDataForMonth: function(s, u) {
                    return f(s, u)
                },
                clearCache: function() {
                    m = {}
                }
            };

            function f(v, A) {
                var s = new $.Deferred();
                var z = v.getMonth() + 1;
                var w = v.getFullYear();
                var y = l(z, w);
                if (y) {
                    return s.resolve(y)
                }
                var x = d(z, w);
                var u = q(x, 2);
                z = u[0];
                w = u[1];
                n(A, z, w).then(function(B) {
                    B.calendar_months.forEach(h);
                    s.resolve(l(z, w))
                }).fail(function() {
                    return s.reject()
                });
                return s
            }

            function h(s) {
                m["" + s.year + "-" + s.month] = c(s)
            }

            function l(u, s) {
                return m["" + s + "-" + u]
            }

            function c(s) {
                s = p.clone(s);
                s.condition_range_map = o(s.condition_ranges || []);
                return s
            }

            function o(s) {
                return s.reduce(function(A, w) {
                    var B = new Date(w.start_date);
                    var u = new Date(w.end_date);
                    for (var y = B.getUTCDate(); y <= u.getUTCDate(); y++) {
                        var v = k(y);
                        var z = k(B.getUTCMonth() + 1);
                        var x = "" + B.getUTCFullYear() + "-" + z + "-" + v;
                        A[x] = w.conditions
                    }
                    return A
                }, {})
            }

            function k(s) {
                var u = s.toString();
                if (s < 10) {
                    u = "0" + u
                }
                return u
            }

            function d(w, u) {
                var v = new Date(u, w, 1);
                var y = new Date(u, w - 2, 1);
                var z = new Date(u, w - a, 1);
                var s = l(v.getMonth() + 1, v.getFullYear());
                var x = l(y.getMonth() + 1, y.getFullYear());
                if (s != null && x == null) {
                    return [z.getMonth() + 1, z.getFullYear()]
                }
                return [w, u]
            }

            function n(w, u, s) {
                var v = {
                    listing_id: w,
                    month: u,
                    year: s,
                    count: a,
                    _format: "with_conditions"
                };
                return Airbnb.Api.get(r, {
                    data: v
                })
            }
        }, {
            "./util": 12,
            underscore: "underscore"
        }
    ],
    7: [
        function(d, b, J) {
            d("./modernizr-touch");
            var Q = d("underscore");
            var w = d("./async-spinner");
            var v = d("./tooltip-manager");
            var k = d("./util");
            var O = d("./data");
            var G = d("moment");
            var p = fakeQuery.ui.locale.data().firstDay;
            var P = G.localeData().firstDayOfWeek();
            var H = P - p;
            var A = "ui-busy-date";
            var K = "ui-condition-not-met";
            $.fn.calendarDateSpan = function C(Z, S, Y) {
                var aa = this.is("form") ? this : this.find("form:first");
                if (Z === "option") {
                    return n(aa, S, Y)
                }
                var T;
                var W = Z.checkin || ".checkin";
                var U = Z.checkout || ".checkout";
                var V = aa.find(W);
                var R = aa.find(U);
                var X = Z.listingId;
                M(aa, "checkin", V);
                M(aa, "checkout", R);
                M(aa, "options", Z);
                I(V);
                T = aa.airbnbInputDateSpan(Q.extend({}, Z, {
                    getNextDate: E(X),
                    defaults: Q.extend(Z.defaults || {}, {
                        showButtonPanel: true,
                        additionalInfo: u(aa, Z)
                    })
                }));
                m(V, X);
                f(R, X);
                return T
            };

            function n(T, U, V) {
                var R = N(T, "checkin");
                var S = N(T, "checkout");
                R.datepicker("option", U, V);
                S.datepicker("option", U, V);
                if (U === "fixed") {
                    F(R, V);
                    F(S, V)
                }
            }

            function E(S) {
                return function R(V) {
                    var U = new $.Deferred();
                    var W = new Date(V);
                    var T = k.isoDate(V);
                    O.getDataForMonth(V, S).then(function(Y) {
                        var X = Y.condition_range_map[T];
                        W.setDate(V.getDate() + X.min_nights);
                        U.resolve(W)
                    });
                    return U
                }
            }

            function F(R, T) {
                var S = R.data("tooltip-manager");
                if (!S) {
                    return
                }
                if (T) {
                    S.fix()
                } else {
                    S.unfix()
                }
            }

            function I(R) {
                var S = $.datepicker.parseDate(R.val());
                M(R, "month", S.getMonth() + 1);
                M(R, "year", S.getFullYear())
            }

            function u(T, S) {
                var W = null;
                var R = k.cleanDate(new Date());
                var V = [];
                var U = N(T, "year");
                var X = N(T, "month");
                if (S.lastUpdated) {
                    W = k.fromIsoDate(S.lastUpdated)
                }
                V.push(q(S.minNights, S.condition_ranges, U, X));
                V.push(k.lastUpdated(R, W));
                return V.join("<br>")
            }

            function q(V, U, R, S) {
                var T;
                if (U == null) {
                    T = I18n.t("datepicker_min_nights", {
                        smart_count: V
                    })
                } else {
                    if (U.length === 1) {
                        if (U[0].conditions.min_nights === V) {
                            T = I18n.t("datepicker_min_nights", {
                                smart_count: V
                            })
                        } else {
                            T = I18n.t("datepicker_min_nights_this_month", {
                                smart_count: V
                            })
                        }
                    } else {
                        T = I18n.t("datepicker_min_nights_varies")
                    }
                }
                return T
            }

            function h(R) {
                return R.closest("form")
            }

            function N(S, R) {
                return h(S).data("cds-" + R)
            }

            function M(S, R, T) {
                return h(S).data("cds-" + R, T)
            }

            function l(R, S) {
                return N(R, S).data("fqUIDatepicker")
            }

            function i(R) {
                var S = l(R, "checkin");
                return $.datepicker.parseDate(S.$target.val())
            }
            $.calendarDateSpan = {
                reset: function() {
                    O.clearCache()
                }
            };

            function m(R, S) {
                y(R, S, "checkin", x(R))
            }

            function f(R, S) {
                y(R, S, "checkout", B(R))
            }

            function y(S, W, U, T) {
                var R = 0,
                    V = new w(S);
                c(S, "beforeShow", function() {
                    var X = k.cleanDate($.datepicker.parseDate(S.val())),
                        Y = ++R;
                    V.start();
                    O.getDataForMonth(X, W).then(function(Z) {
                        if (R === Y) {
                            T(Z)
                        }
                    }).always(function() {
                        return V.stop()
                    })
                });
                c(S, "onChangeMonthYear", function(Y, Z) {
                    var X = k.cleanDate(new Date()),
                        aa = ++R;
                    X.setDate(1);
                    X.setYear(Y);
                    X.setMonth(Z - 1);
                    M(S, "year", Y);
                    M(S, "month", Z);
                    V.start();
                    O.getDataForMonth(X, W).then(function(ab) {
                        if (R === aa) {
                            T(ab)
                        }
                    }).always(function() {
                        return V.stop()
                    })
                });
                if (!Modernizr.touch) {
                    r(S, W, U)
                }
            }

            function r(S, V, U) {
                var R = 0,
                    T = new v();
                S.data("tooltip-manager", T);
                c(S, "onDateMouseEnter", function(W, Y) {
                    var X = ++R;
                    O.getDataForMonth(W, V).then(function(ad) {
                        if (X !== R) {
                            return
                        }
                        var Z;
                        var ab = k.isoDate(W);
                        var aa = Q.find(ad.days, function(ae) {
                            return ae.date === ab
                        });
                        var ac;
                        if (aa.price) {
                            Z = I18n.priceString(aa.price.local_price, aa.price.local_currency);
                            ac = T.add(ab, Z, Y);
                            ac.appendTo($("body"))
                        }
                    })
                });
                c(S, "onDisabledDateMouseEnter", function(X, Z) {
                    var Y = ++R;
                    var W = N(S, "options");
                    O.getDataForMonth(X, V).then(function(ac) {
                        if (Y !== R) {
                            return
                        }
                        var aa = k.isoDate(X);
                        var ah = k.isoDate(new Date());
                        var af = Q.find(ac.days, function(al) {
                            return al.date === aa
                        });
                        var ag = ac.condition_range_map[aa];
                        var ak = i(S);
                        var ab = aa === k.isoDate(ak);
                        var aj = aa < ah;
                        var ae;
                        var ai;
                        var ad;
                        if (af.available && !aj) {
                            if (U === "checkin") {
                                if (!z(ag, aa)) {
                                    ad = D(ag.start_day_of_week);
                                    ae = I18n.t("calendar.host_requires_start_day_of_week", {
                                        host_name: W.hostFirstName,
                                        day_of_week_plural: ad,
                                        line_break: "<br>"
                                    })
                                }
                            } else {
                                if (U === "checkout") {
                                    if (ab) {
                                        ae = I18n.t("checkin_noun")
                                    } else {
                                        if (!o(ag, aa, ak)) {
                                            ae = I18n.t("calendar.host_requires_minimum_nights", {
                                                host_name: W.hostFirstName,
                                                smart_count: ag.min_nights,
                                                line_break: "<br>"
                                            })
                                        }
                                    }
                                }
                            }
                        }
                        if (ae) {
                            ai = T.add(aa, ae, Z);
                            ai.appendTo($("body"))
                        }
                    })
                });
                c(S, "onDateMouseLeave", function(W) {
                    R++;
                    T.clear()
                });
                c(S, "onDisabledDateMouseLeave", function(W) {
                    R++;
                    T.clear()
                });
                c(S, "onClose", function() {
                    R++;
                    T.clear()
                })
            }

            function x(R) {
                return function(S) {
                    a(R, S, "checkin");
                    s(R, S)
                }
            }

            function B(R) {
                return function(S) {
                    a(R, g(S), "checkout");
                    s(R, S)
                }
            }

            function c(T, R, U) {
                var S = T.datepicker("option", R);
                T.datepicker("option", R, function() {
                    if (typeof S === "function") {
                        S.apply(this, arguments)
                    }
                    U.apply(this, arguments)
                })
            }

            function j(S) {
                var R = false;
                return S.map(function(T) {
                    var U = Q.clone(T);
                    if (U.available) {
                        R = true
                    } else {
                        if (R) {
                            U.available = true;
                            R = false
                        }
                    }
                    return U
                })
            }

            function g(R) {
                var R = Q.clone(R);
                R.days = j(R.days);
                return R
            }

            function o(V, S, R) {
                if (V == null) {
                    return true
                }
                var X = V.min_nights;
                if (X) {
                    var W = G(S);
                    var T = G(k.cleanDate(R));
                    var U = T.clone().add(X - 1, "days");
                    return W.isBefore(T) || W.isAfter(U)
                }
                return true
            }

            function z(U, R) {
                if (U == null) {
                    return true
                }
                var T = U.start_day_of_week;
                if (T) {
                    var V = G(R);
                    var S = V.weekday() + p + H;
                    return S === T
                }
                return true
            }

            function a(U, W, V) {
                var X = {};
                var R = {};
                var T = W.condition_range_map;
                var S = i(U);
                W.days.forEach(function(Z) {
                    var ab = T[Z.date];
                    var Y = !Z.available;
                    var aa;
                    if (V === "checkin") {
                        aa = z(ab, Z.date)
                    } else {
                        if (V === "checkout") {
                            aa = o(ab, Z.date, S)
                        }
                    } if (Y) {
                        X[Z.date] = [A]
                    } else {
                        if (!aa) {
                            X[Z.date] = [K]
                        }
                    } if (Y || !aa) {
                        R[Z.date] = true
                    }
                });
                U.datepicker("option", "dateClasses", X);
                U.datepicker("option", "blockedDates", R)
            }

            function s(S, T) {
                var R = Q.extend({
                    condition_ranges: T.condition_ranges
                }, N(S, "options"));
                S.datepicker("option", "additionalInfo", u(S, R))
            }

            function D(S) {
                var R;
                switch (S) {
                    case 0:
                        R = I18n.t("Sundays");
                        break;
                    case 1:
                        R = I18n.t("Mondays");
                        break;
                    case 2:
                        R = I18n.t("Tuesdays");
                        break;
                    case 3:
                        R = I18n.t("Wednesdays");
                        break;
                    case 4:
                        R = I18n.t("Thursdays");
                        break;
                    case 5:
                        R = I18n.t("Fridays");
                        break;
                    case 6:
                        R = I18n.t("Saturdays");
                        break
                }
                return R
            }
        }, {
            "./async-spinner": 5,
            "./data": 6,
            "./modernizr-touch": 9,
            "./tooltip-manager": 10,
            "./util": 12,
            moment: "moment",
            underscore: "underscore"
        }
    ],
    8: [
        function(b, c, a) {
            c.exports = b("./date-span")
        }, {
            "./date-span": 7
        }
    ],
    9: [
        function(b, c, a) {
            window.Modernizr = (function(Y, X, W) {
                function E(d) {
                    Q.cssText = d
                }

                function D(f, d) {
                    return E(prefixes.join(f + ";") + (d || ""))
                }

                function C(f, d) {
                    return typeof f === d
                }

                function B(f, d) {
                    return !!~("" + f).indexOf(d)
                }

                function A(h, g, k) {
                    for (var j in h) {
                        var i = g[h[j]];
                        if (i !== W) {
                            return k === !1 ? h[j] : C(i, "function") ? i.bind(k || g) : i
                        }
                    }
                    return !1
                }
                var V = "2.8.3",
                    U = {}, T = X.documentElement,
                    S = "modernizr",
                    R = X.createElement(S),
                    Q = R.style,
                    P, O = ({}).toString,
                    N = {}, M = {}, K = {}, J = [],
                    I = J.slice,
                    H, G = ({}).hasOwnProperty,
                    F;
                !C(G, "undefined") && !C(G.call, "undefined") ? F = function(f, d) {
                    return G.call(f, d)
                } : F = function(f, d) {
                    return d in f && C(f.constructor.prototype[d], "undefined")
                }, Function.prototype.bind || (Function.prototype.bind = function(f) {
                    var i = this;
                    if (typeof i != "function") {
                        throw new TypeError()
                    }
                    var h = I.call(arguments, 1),
                        g = function() {
                            if (this instanceof g) {
                                var d = function() {};
                                d.prototype = i.prototype;
                                var k = new d(),
                                    j = i.apply(k, h.concat(I.call(arguments)));
                                return Object(j) === j ? j : k
                            }
                            return i.apply(f, h.concat(I.call(arguments)))
                        };
                    return g
                });
                for (var z in N) {
                    F(N, z) && (H = z.toLowerCase(), U[H] = N[z](), J.push((U[H] ? "" : "no-") + H))
                }
                return (U.addTest = function(g, f) {
                    if (typeof g == "object") {
                        for (var h in g) {
                            F(g, h) && U.addTest(h, g[h])
                        }
                    } else {
                        g = g.toLowerCase();
                        if (U[g] !== W) {
                            return U
                        }
                        f = typeof f == "function" ? f() : f, typeof enableClasses != "undefined" && enableClasses && (T.className += " " + (f ? "" : "no-") + g), U[g] = f
                    }
                    return U
                }, E(""), R = P = null, U._version = V, U)
            })(window, window.document)
        }, {}
    ],
    10: [
        function(c, d, a) {
            var f = c("./tooltip");
            var b = 0;
            d.exports = g;

            function g() {
                this.tooltips = {};
                this.fixed = false;
                this.id = b++
            }
            g.prototype.add = function(i, k, h) {
                var j = new f(h, k, this.id);
                this.tooltips[i] = j;
                if (this.fixed) {
                    j.fix()
                }
                return j
            };
            g.prototype.remove = function(h) {
                var i = this.tooltips[h];
                delete this.tooltips[h];
                i.remove();
                return i
            };
            g.prototype.fix = function() {
                this.fixed = true;
                _.each(this.tooltips, function(h) {
                    h.fix()
                })
            };
            g.prototype.unfix = function() {
                this.fixed = false;
                _.each(this.tooltips, function(h) {
                    h.unfix()
                })
            };
            g.prototype.clear = function() {
                for (var h in this.tooltips) {
                    if (this.tooltips.hasOwnProperty(h)) {
                        this.remove(h)
                    }
                }
                $(".datepicker-tooltip-" + this.id).remove()
            }
        }, {
            "./tooltip": 11
        }
    ],
    11: [
        function(c, d, b) {
            var h = c("o2");
            var g = Handlebars.compile(['<div class="tooltip {{position}} datepicker-tooltip datepicker-tooltip-{{managerId}}" aria-hidden="false">', '<p class="panel-body text-center">{{{text}}}</p>', "</div>"].join(""));
            d.exports = f;

            function f(i, j, k) {
                this.$target = i;
                this.removed = false;
                this.$el = $(g({
                    position: "tooltip-bottom-middle",
                    text: j,
                    managerId: k
                }))
            }
            f.prototype.appendTo = function(i) {
                if (this.removed) {
                    return
                }
                i.append(this.$el);
                a(this)
            };
            f.prototype.fix = function() {
                if (!this._fixed) {
                    this._fixed = true;
                    a(this)
                }
            };
            f.prototype.unfix = function() {
                if (this._fixed) {
                    this._fixed = false;
                    a(this)
                }
            };
            f.prototype.remove = function() {
                this.removed = true;
                this.$el.remove()
            };

            function a(l) {
                var j = l.$target,
                    k = l.$el,
                    n = j.offset(),
                    i = "absolute",
                    m = n.top - (k.height() + 11);
                l.fix();
                if (l._fixed) {
                    m -= $(window).scrollTop();
                    i = "fixed"
                }
                k.css({
                    position: i,
                    top: m,
                    left: n.left - k.outerWidth() / 2 + j.width() / 2
                })
            }
        }, {
            o2: "o2"
        }
    ],
    12: [
        function(c, d, b) {
            var f = c("moment");
            var a = {
                isoDate: function(g) {
                    return $.datepicker.formatDate("yy-mm-dd", g)
                },
                fromIsoDate: function(g) {
                    return $.datepicker.parseDate("yy-mm-dd", g)
                },
                cleanDate: function(g) {
                    return a.fromIsoDate(a.isoDate(g))
                },
                lastUpdated: function(l, k) {
                    if (!k) {
                        return I18n.t("datepicker_never_updated")
                    }
                    var g = f(l),
                        h = g.diff(k, "days"),
                        i = g.diff(k, "months"),
                        j = g.diff(k, "years");
                    if (j > 0) {
                        return I18n.t("datepicker_updated_years_ago", {
                            smart_count: j
                        })
                    }
                    if (i > 0) {
                        return I18n.t("datepicker_updated_months_ago", {
                            smart_count: i
                        })
                    }
                    if (h > 0) {
                        return I18n.t("datepicker_updated_days_ago", {
                            smart_count: h
                        })
                    }
                    return I18n.t("datepicker_updated_today")
                }
            };
            d.exports = a
        }, {
            moment: "moment"
        }
    ],
    13: [
        function(d, a, g) {
            var j = function(m, k, l) {
                if (m === l) {
                    throw new ReferenceError(k + " is not defined - temporal dead zone")
                }
                return true
            };
            var c = {};
            var h = function(k, l) {
                if (!(k instanceof l)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            };
            var f = (function() {
                function k(o, m) {
                    for (var l = 0; l < m.length; l++) {
                        var n = m[l];
                        n.enumerable = n.enumerable || false;
                        n.configurable = true;
                        if ("value" in n) {
                            n.writable = true
                        }
                        Object.defineProperty(o, n.key, n)
                    }
                }
                return function(n, l, m) {
                    if (l) {
                        k(n.prototype, l)
                    }
                    if (m) {
                        k(n, m)
                    }
                    return n
                }
            })();
            var b = c;
            var i = d("../pausable_timer");
            b = (function() {
                function o(r) {
                    h(this, j(o, "PageImpressionLogger", c) && o);
                    this.timestamp = new Date().toISOString();
                    this.localTime = new Date().toLocaleString();
                    this.airEventData = r.airEventData;
                    this.timeIntervals = r.timeIntervals;
                    this.logInitialImpression();
                    this.initTimers();
                    this.initVisiblityChangeEvent()
                }
                f(j(o, "PageImpressionLogger", c) && o, [{
                    key: "logInitialImpression",
                    value: function l() {
                        $.extend(this.airEventData.event_data, {
                            duration_uuid: this.timestamp,
                            local_time: this.localTime,
                            is_new_tab_or_window: this.isNewTab()
                        });
                        Airbnb.Tracking.logEvent(this.airEventData)
                    }
                }, {
                    key: "initTimers",
                    value: function n() {
                        var r = this;
                        this.timers = this.timeIntervals.map(function(s) {
                            return new i(s * 1000, function() {
                                Airbnb.Tracking.logEvent({
                                    event_name: r.airEventData.event_name,
                                    event_data: {
                                        operation: "duration",
                                        page: r.airEventData.event_data.page,
                                        duration_uuid: r.timestamp,
                                        page_view_duration: s
                                    }
                                })
                            })
                        });
                        this.timers.forEach(function(s) {
                            return s.start()
                        })
                    }
                }, {
                    key: "initVisiblityChangeEvent",
                    value: function q() {
                        $(window).on("blur", this.onHide.bind(this));
                        $(window).on("focus", this.onShow.bind(this))
                    }
                }, {
                    key: "onShow",
                    value: function p() {
                        this.timers.forEach(function(r) {
                            return r.resume()
                        })
                    }
                }, {
                    key: "onHide",
                    value: function k() {
                        this.timers.forEach(function(r) {
                            return r.pause()
                        })
                    }
                }, {
                    key: "isNewTab",
                    value: function m() {
                        if (!document.referrer) {
                            return false
                        }
                        if (window.history.length === 0) {
                            return true
                        }
                        return window.history.length === 1 && !$("html").hasClass("ie")
                    }
                }]);
                return j(o, "PageImpressionLogger", c) && o
            })();
            j(b, "PageImpressionLogger", c), a.exports = b
        }, {
            "../pausable_timer": 38
        }
    ],
    14: [
        function(c, d, a) {
            var g = c("backbone"),
                b = "/locations/api/neighborhood_tiles.json?",
                f = g.Model.extend({
                    parse: function(h) {
                        return this.id ? h[this.id] : h
                    },
                    url: function() {
                        var h = b;
                        return [h, "ids[]=", this.id].join("")
                    },
                    hasThumbnails: function() {
                        return this.get("thumbnails") && this.get("thumbnails").length > 0
                    }
                });
            d.exports = f
        }, {
            backbone: "backbone"
        }
    ],
    15: [
        function(b, c, a) {
            function d(i) {
                if (!Airbnb.Utils.isAdmin()) {
                    return
                }
                var h = $('<div id="admin-placeholder"></div>'),
                    g = false;
                $("#room").after(h);
                $(document).one("keypress", function(j) {
                    if (j.target.type === "textarea" || j.target.type === "password" || j.target.type === "text") {
                        return
                    }
                    if (g) {
                        return
                    }
                    switch (j.which) {
                        case 49:
                        case 50:
                        case 51:
                            $("body").animate({
                                scrollTop: $("#admin-placeholder").offset().top
                            });
                            break
                    }
                });
                var f = function() {
                    $.get("/rooms/ajax_admin_footer", {
                        hosting_id: i
                    }, function(k, j) {
                        if (j === "success") {
                            h.fadeOut(200, function() {
                                h.replaceWith(k.footer);
                                $("#admin_area").hide().slideToggle(500);
                                g = true
                            })
                        }
                    })
                };
                window._.defer(f)
            }
            c.exports = {
                init: d
            }
        }, {}
    ],
    16: [
        function(d, b, f) {
            var a, h, j, c, g, i = d("underscore");
            g = {
                init: function() {
                    this.hasPushState = typeof window.history.pushState === "function";
                    if (this.hasPushState) {
                        window.addEventListener("popstate", function(k) {
                            if (k.state) {
                                window.location = window.location
                            }
                        });
                        window.history.replaceState({}, null, window.location)
                    }
                    Airbnb.mediator.on("p3::updateSubtotal", this.refresh.bind(this));
                    return this.refresh
                },
                firstTimeSubtotalDisplay: true,
                refresh: function(v) {
                    var n = $("#subtotal_area"),
                        w = $("#checkin").val(),
                        o = $("#checkout").val(),
                        u = $("#number_of_guests").val(),
                        r = $.query.load(window.location.href).keys,
                        p = {}, l;
                    if (a === w && h === o && j === u) {
                        if (!v) {
                            return
                        }
                        if (c) {
                            window.setTimeout(function() {
                                v(null, c)
                            }, 0)
                        } else {
                            v("no data")
                        }
                        return
                    }
                    a = w;
                    h = o;
                    j = u;

                    function s(x) {
                        Airbnb.mediator.emit("p3::refreshSubtotal", x);
                        AirbnbRooms.updateAirEvent({
                            avg_price: x.price_per_night_usd,
                            native_avg_price: x.price_per_night_native,
                            total_price: x.total_price_usd,
                            native_total_price: x.total_price_native,
                            service_fee: x.service_fee_usd,
                            include_service_fee: x.include_service_fee,
                            tax_amount: x.tax_amount,
                            tax_descriptions: x.tax_descriptions,
                            available: x.available,
                            instant_book_possible: x.can_instant_book,
                            instant_book_reasons: x.instant_book_reasons,
                            instant_book_experiments: x.instant_book_experiments,
                            currency: x.currency,
                            checkin_date: $.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate(w)),
                            checkout_date: $.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate(o)),
                            nights: x.nights,
                            guests: u
                        });
                        AirbnbRooms.sendAirEvent();
                        i.extend(AirbnbRooms.ibData, {
                            is_instant_bookable: x.can_instant_book,
                            instant_book_reasons: x.instant_book_reasons,
                            instant_book_experiments: x.instant_book_experiments
                        });
                        $("#view_other_listings_button").data("reasonCode", x.unavailable_reason_code);
                        c = x;
                        if (v) {
                            v(null, x)
                        }
                    }
                    if (w && o) {
                        p.checkin = w;
                        p.checkout = o
                    }
                    if (u && u !== "1") {
                        p.guests = u
                    }
                    if (r.s) {
                        p.s = r.s
                    }
                    l = window.location.pathname;
                    if (!$.isEmptyObject(p)) {
                        l += "?" + $.param(p)
                    }
                    if (r.guests !== p.guests || r.checkin !== p.checkin || r.checkout !== p.checkout) {
                        if (g.hasPushState) {
                            window.history.pushState({}, null, l)
                        }
                    }
                    Airbnb.mediator.emit("p3::dateGuestChange", p);
                    if (w && o) {
                        $("#book_it_button").removeAttr("disabled");
                        $("#book_it_status").addClass("loading");
                        var m = $("#book_it_form").serializeArray();
                        if (this.firstTimeSubtotalDisplay && r.s && r.checkin && r.checkout) {
                            var q = $.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate(r.checkin));
                            var k = $.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate(r.checkout));
                            m.push({
                                name: "from_search_checkin",
                                value: q
                            });
                            m.push({
                                name: "from_search_checkout",
                                value: k
                            })
                        }
                        this.firstTimeSubtotalDisplay = false;
                        $.getJSON("/rooms/ajax_refresh_subtotal", m, s)
                    } else {
                        Airbnb.mediator.emit("p3::refreshSubtotal")
                    }
                }
            };
            b.exports = g
        }, {
            underscore: "underscore"
        }
    ],
    17: [
        function(b, c, a) {
            (function(f, j, d) {
                var i, h, g;
                if (typeof c !== "undefined") {
                    i = b("../../simple_iterator")
                } else {
                    i = enderRequire("simple_iterator")
                }
                h = function(k, l, m) {
                    this._viewport = k;
                    this._panel = l;
                    this._panelWidth = this._panel.children().length * m.thumbnailWidth;
                    this._options = f.extend({}, this._options, m)
                };
                f.extend(h.prototype, {
                    _viewport: null,
                    _panel: null,
                    _currentLeft: 0,
                    _options: {
                        extraSpacing: {
                            left: 0,
                            right: 0
                        }
                    },
                    showInViewport: function(p) {
                        var k = p.position(),
                            q = this._options.thumbnailWidth || p.width(),
                            m = this._viewport.width(),
                            o = k.left + (q - m) / 2 + 10,
                            l = 0,
                            n = this._panelWidth - m;
                        if (m >= this._panelWidth) {
                            return
                        }
                        if (o >= 0 && o <= n) {
                            this._currentLeft = o
                        } else {
                            if (o < 0) {
                                this._currentLeft = 0
                            } else {
                                this._currentLeft = n
                            }
                        }
                        this._panel.css("left", -this._currentLeft)
                    }
                });
                g = function(q, s) {
                    var l, n, p, m, o, k, r = this;
                    this._options = f.extend({}, this._options, s);
                    this._$slideshow = q;
                    this._$thumbnails = q.find(".slideshow-thumbnails");
                    l = q.find(".slideshow-images");
                    n = q.find(".slideshow-caption");
                    p = q.find(".slideshow-preload");
                    m = JST[this._options.template];
                    o = JST[this._options.preloadTemplate];
                    this._slidingPanel = new h(q.find(".thumbnails-viewport"), q.find(".thumbnails-slide-panel"), {
                        thumbnailWidth: this._options.thumbnailWidth
                    });
                    k = j.makeArray(this._$thumbnails.find("li a").map(function(u) {
                        var v = j(this);
                        return {
                            url: v.attr("href"),
                            caption: v.attr("title"),
                            index: u
                        }
                    }));
                    this._list = new i(k, {
                        onChange: function(y, A, B) {
                            var C = l.find(".active"),
                                w = r._$thumbnails.find(".active"),
                                D, x = r._$slideshow.data("preload-size") || 1,
                                z, v, u = [];
                            l.find("li:not(.active)").html(m(f.extend({}, y, r._options.size))).addClass("active").insertBefore(C);
                            C.removeClass("active");
                            w.removeClass("active");
                            D = r._$thumbnails.find("li").eq(A);
                            D.find("a").addClass("active");
                            r._slidingPanel.showInViewport(D);
                            n.toggleClass("hidden", !y.caption).text(y.caption || "");
                            if (p.length && o) {
                                for (z = 0; z < x;
                                    ++z) {
                                    v = (A + z + 1) % k.length;
                                    if (!j("#slideshow-preload-" + v).length) {
                                        u.push(this.peek(v))
                                    }
                                }
                                if (u.length) {
                                    p.append(o({
                                        images: u
                                    }))
                                }
                            }
                            if (r._options.onChange) {
                                r._options.onChange(y, A, B)
                            }
                        }
                    });
                    this.toIndex(0);
                    this._attachClickHandlers();
                    this._attachKeyboardHandlers()
                };
                f.extend(g.prototype, {
                    _$slideshow: null,
                    _$thumbnails: null,
                    _list: null,
                    _slidingPanel: null,
                    _options: {
                        size: {},
                        template: "page3/o2.1/slideshow_image",
                        preloadTemplate: "page3/o2.1/slideshow_image_preload"
                    },
                    _attachClickHandlers: function() {
                        var k = this;
                        this._$thumbnails.on("click", "li a", function(m) {
                            m.preventDefault();
                            var l = k._$thumbnails.find("li").index(j(this).parent());
                            k.toIndex(l, this)
                        });
                        this._$slideshow.on("click", "[data-slideshow-prev]", function(l) {
                            l.preventDefault();
                            k.previous(this)
                        });
                        this._$slideshow.on("click", "[data-slideshow-next]", function(l) {
                            l.preventDefault();
                            k.next(this)
                        })
                    },
                    _attachTouchHandlers: function() {},
                    _attachKeyboardHandlers: function() {
                        var l = this,
                            k = function(m) {
                                switch (m.which) {
                                    case 37:
                                        l.previous("keyboardLeft");
                                        break;
                                    case 39:
                                        l.next("keyboardRight");
                                        break
                                }
                            };
                        j(document).on("keydown", k)
                    },
                    next: function(k) {
                        this._list.next(k)
                    },
                    previous: function(k) {
                        this._list.previous(k)
                    },
                    toIndex: function(k, l) {
                        this._list.toIndex(k, l)
                    }
                });
                if (typeof c !== "undefined") {
                    c.exports = g
                } else {
                    provide("slideshow", g)
                }
            })(_, jQuery, window)
        }, {
            "../../simple_iterator": 41
        }
    ],
    18: [
        function(b, c, a) {
            c.exports = d;

            function d() {
                this.deliverExperiment()
            }
            d.prototype.deliverExperiment = function() {
                var f = this.getTreatment();
                if (f === "hide_contact_me") {
                    this.hideContactHost()
                }
                this.logImpression(f)
            };
            d.prototype.getTreatment = function() {
                return Airbnb.ERF.deliverExperiment("hca_contact_me", {
                    control: f("control"),
                    hide_contact_me: f("hide_contact_me"),
                    treatment_unknown: f("treatment_unknown")
                });

                function f(g) {
                    return function() {
                        return g
                    }
                }
            };
            d.prototype.logImpression = function(f) {
                Airbnb.Tracking.logEvent({
                    event_name: "listing_view",
                    event_data: {
                        page: "p3",
                        operation: "impression",
                        section: "hca_contact_me_experiment",
                        hca_contact_me_treatment: f
                    }
                })
            };
            d.prototype.hideContactHost = function() {
                $("#contact-host-link").addClass("invisible")
            }
        }, {}
    ],
    19: [
        function(c, d, a) {
            var b = c("underscore");
            var f = {
                staggered: false,
                init: function(o) {
                    var k = this;
                    var n = c("./admin"),
                        h = $.query.load(window.location.href).keys,
                        i = $("#room").data("contactHostSignupModalOrderLaunched");
                    this.$book_it_form = $("#book_it_form");
                    this.$book_it_btn_container = $(".book-it-btn-container");
                    n.init(o.hostingId);
                    this.options = o = o || {};
                    this.airEventData = o.airEventData || {};
                    f.hostingId = o.hostingId;
                    f.staggered = o.staggered;
                    var m = [];
                    $("#reviews").find(".review-text").each(function(q, p) {
                        m.push($(p).data("review-id"))
                    });
                    $.getJSON("/rooms/" + o.hostingId + "/personalization.json", {
                        review_ids: m
                    }, function(p) {
                        $.extend(p, h);
                        b.extend(k.ibData, {
                            is_instant_bookable: p.is_instant_bookable,
                            instant_book_reasons: p.instant_book_reasons,
                            instant_book_experiments: p.instant_book_experiments
                        });
                        k.setInstantBookable(p.is_instant_bookable && (!p.checkin || !p.checkout));
                        if (!p.checkin || !p.checkout) {
                            f.sendAirEvent()
                        }
                        enderRequire("o2-flash").display();
                        Airbnb.mediator.emit("p3::personalize", p)
                    });
                    this.initWLButton();

                    function j() {
                        if (window.FB && FB.Event && FB.Event.subscribe) {
                            FB.Event.subscribe("edge.create", function(p) {
                                ga("send", "social", "Facebook", "Like", p)
                            });
                            FB.Event.subscribe("edge.remove", function(p) {
                                ga("send", "social", "Facebook", "Unlike", p)
                            })
                        }
                    }
                    if (window.FB) {
                        j()
                    } else {
                        Airbnb.mediator.on("fbInit", j)
                    }
                    var l = [
                        [".photos > a", "p3_photos_click"],
                        [".maps > a", "p3_maps_click"],
                        [".calendar > a", "p3_calendar_click"],
                        ["#description_link", "p3_description_click"],
                        ["#amenity_link", "p3_amenity_click"],
                        ["#house_rules_link", "p3_house_rules_click"]
                    ];
                    l.map(function(p) {
                        $(p[0]).on("click", function() {
                            Airbnb.Tracking.logEvent({
                                event_name: p[1],
                                event_data: {
                                    action: "click",
                                    hosting_id: AirbnbRooms.hostingId
                                }
                            })
                        })
                    });
                    this.$book_it_form.on("submit", f.bookItFormSubmitHandler);
                    if (document.location.hash) {
                        $("a[href='" + encodeURIComponent(document.location.hash) + "']").parent().click()
                    }
                    var g = c("../lib/airbnb/expandable");
                    f.initOpenGraphWishlist();
                    f.initTranslateButton(o.locale)
                },
                initWLButton: function() {
                    Airbnb.WishListButton.init({
                        placement: "page3",
                        tooltipOptions: {
                            showLimit: 2
                        }
                    })
                },
                isInstantBookable: function() {
                    return this._instantBookable
                },
                setInstantBookable: function(g) {
                    this._instantBookable = g;
                    if (g) {
                        this.showInstantBookButton()
                    } else {
                        this.showBookItButton()
                    }
                },
                initOpenGraphWishlist: function() {
                    Airbnb.OpenGraph.init(Airbnb.OpenGraph.sendWishlistToFacebook, AirbnbRooms.hostingId);
                    if (Airbnb.userAttributes.og_publish) {
                        Airbnb.mediator.on("fbLoginStatus", Airbnb.Utils.fbInitHasPublishAction)
                    }
                },
                initTranslateButton: function(h) {
                    var k = $("#new_translate_button_wrapper");
                    if (k) {
                        var j = $("#description_text_wrapper"),
                            g = k.find(".translate_button_label"),
                            i = k.find(".gBrandingText"),
                            m = j.html(),
                            l = false;
                        k.click(function() {
                            if (l) {
                                l = false;
                                g.html(I18n.t("translate_this_description"));
                                i.removeClass("translated");
                                j.html(m);
                                $("#disclaimer_text").html("")
                            } else {
                                l = true;
                                window.P3.Utils.translate(h)
                            }
                        })
                    }
                },
                bookItFormSubmitHandler: function(j) {
                    var h = $(this),
                        i = h.find("button"),
                        g;
                    if (!window.P3.Utils.check_inputs()) {
                        j.preventDefault()
                    } else {
                        i.attr("disabled", "disabled");
                        i.css("cursor", "progress");
                        $("#instant_book_arrow").addClass("gray_arrow");
                        g = f.getP3ClickEventData(f.isInstantBookable() ? "INSTANT_BOOK" : "BOOK_IT");
                        Airbnb.Tracking.queueEvent(g)
                    }
                },
                showInstantBookButton: function() {
                    this.$book_it_btn_container.addClass("instant-book")
                },
                showBookItButton: function() {
                    this.$book_it_btn_container.removeClass("instant-book")
                },
                sendAirEvent: function() {
                    if (this.airEventData.status) {
                        this.airEventData.status = "update";
                        this.airEventData.operation = "update";
                        Airbnb.Tracking.logEvent({
                            event_name: "listing_view",
                            event_data: this.airEventData
                        })
                    } else {
                        this.airEventData.status = "initial";
                        this.airEventData.operation = "impression";
                        Airbnb.mediator.emit("pageImpression::initialData", {
                            event_name: "listing_view",
                            event_data: this.airEventData
                        })
                    }
                },
                updateAirEvent: function(g) {
                    $.extend(this.airEventData, g)
                },
                getP3ClickEventData: function(g) {
                    return {
                        event_name: "P3",
                        event_data: {
                            page: "LISTING_PAGE",
                            section: g,
                            action: "CLICK",
                            listing_id: f.hostingId,
                            is_instant_bookable: this.ibData.is_instant_bookable,
                            instant_book_reasons: this.ibData.instant_book_reasons,
                            instant_book_experiments: this.ibData.instant_book_experiments
                        }
                    }
                },
                ibData: {}
            };
            d.exports = f
        }, {
            "../lib/airbnb/expandable": 4,
            "./admin": 15,
            underscore: "underscore"
        }
    ],
    20: [
        function(k, c, v) {
            var u = k("underscore");
            var a = k("backbone");
            var b = k("o2").matchMedia;
            var h = k("./views/photos");
            var n = k("./views/similar_listings");
            var i = k("./views/book_it");
            var g = k("./views/location");
            var l = k("./views/details");
            var r = k("./views/host_profile");
            var m = k("./views/reviews");
            var o = k("../apps/manage_listing/views/preview_bar");
            var p = k("../lib/airbnb/expandable");
            var d = k("../views/shared/social/social_share_widget");
            var w = k("./hca_contact_me");
            var j = k("../logging/page_impression_logger");
            var q = k("./views/book_it_urgency_commitment");
            var s = k("./utils");

            function f(x) {
                var z = this;

                function y(A) {
                    A.preventDefault();
                    Airbnb.mediator.emit("p3::viewCalendar")
                }
                this.initialize = function(A) {
                    u.extend(this, a.Events);
                    if (window.navigator.userAgent.indexOf("iPad") >= 0) {
                        $(".webkit-render-fix").removeClass("webkit-render-fix")
                    }
                    this.options = A;
                    Airbnb.mediator.on("pageImpression::initialData", this.setUpTimeSpentOnPage);
                    this.photosView = new h({
                        el: $("#photos"),
                        photoData: A.photoData
                    });
                    this.bookItView = new i({
                        el: $("#book_it_form"),
                        hostingId: A.hostingId,
                        minNights: A.minNights,
                        calendarLastUpdated: A.calendarLastUpdated,
                        nightly_price: A.nightly_price,
                        staggered_price: A.staggered_price,
                        isMonthly: A.isMonthly,
                        pfPicUploaderJSPath: A.pfPicUploaderJSPath,
                        hostFirstName: A.hostFirstName
                    });
                    this.similarListingsView = new n({
                        el: $("#similar-listings"),
                        hostingId: A.hostingId
                    });
                    this.locationView = new g({
                        el: $("#neighborhood")
                    });
                    this.detailsView = new l({
                        el: $("#details")
                    });
                    this.hostProfileView = new r({
                        el: $("#host-profile")
                    });
                    this.reviewsView = new m({
                        el: $("#reviews"),
                        locale: A.locale
                    });
                    this.bookItUrgencyCommitmentView = new q({
                        el: $("#book-it-urgency-commitment")
                    });
                    if (b.is("md")) {
                        var B = this;
                        Airbnb.ERF.deliverExperiment("p3_sticky_book_it_button_on_medium", {
                            sticky: function() {
                                $(".subnav.book-it").addClass("show-md").removeClass("hide");
                                $(".subnav.section-titles").addClass("hide-md");
                                $("#sticky-md-book-it-btn").on("click", function(C) {
                                    y(C);
                                    Airbnb.Tracking.logEvent(B.getP3ContactHostEventData("sticky_md_book_it_btn", "click"))
                                })
                            },
                            control: function() {},
                            treatment_unknown: function() {}
                        })
                    }
                    this.setupBindings();
                    this.initLazyLoadSections();
                    Airbnb.WishListButton.init({
                        placement: "p3"
                    });
                    new d({
                        el: $(".social-share-widget"),
                        page: "P3"
                    });
                    new w()
                };
                this.setupBindings = function() {
                    var A = this;
                    $("#view-calendar").on("click", y);
                    $("#view_other_listings_button").on("click", s.viewOtherListings.bind(s));
                    p({
                        callback: function() {
                            Airbnb.mediator.emit("p3::updateStickyCalculations")
                        }
                    });
                    Airbnb.mediator.on("p3::personalize", this.doPersonalization.bind(this));
                    Airbnb.mediator.on("p3::contactHostLogging", this.contactHostLogging.bind(this));
                    $("#host-profile-contact-btn, #contact-host-link").on("click", function(C) {
                        var B = $(A).is("#contact-host-link") ? "CONTACT_HOST_LINK" : "CONTACT_HOST";
                        if (!Airbnb.Utils.isUserLoggedIn) {
                            A.contactHostLogging({
                                section: B,
                                step: "clicked_contact",
                                action: "click"
                            });
                            Airbnb.mediator.emit("p3::contactHostLogging", {
                                section: "signup_login_modal",
                                step: "signup_login_launched",
                                action: "impression"
                            });
                            A.launchSignupOrLoginModal("signup", B, C);
                            C.preventDefault()
                        } else {
                            A.contactHostHandler(B, C)
                        }
                    });
                    $(window).on("load", function() {
                        $("img.lazy").lazyload()
                    });
                    Airbnb.WishListButton.init({
                        placement: "p3"
                    });
                    $(window).on("load", s.trackResourceTiming)
                };
                this.launchSignupOrLoginModal = function(A, C, B) {
                    var D = function() {
                        z.contactHostLogging({
                            section: "signup_login_modal",
                            step: "logged_in",
                            action: "submit"
                        });
                        z.contactHostHandler(C, B)
                    };
                    if (A === "login") {
                        Airbnb.SignupLoginModal.launchLogin({
                            callback: D,
                            flow: "contact-host"
                        })
                    } else {
                        if (A === "signup") {
                            Airbnb.SignupLoginModal.launchSignup({
                                callback: D,
                                flow: "contact-host"
                            })
                        }
                    }
                };
                this.doPersonalization = function(D) {
                    var A;
                    var B;
                    var C;
                    var F;
                    if (D.is_owned_by_user) {
                        $(".superhost-tooltip-other, .superhost-tooltip-self").toggleClass("hide");
                        $(".response-details").toggleClass("hide")
                    } else {
                        if (Airbnb.Utils.isUserLoggedIn) {
                            var E = $("#flag-modal-container");
                            new UserFlag(D.flag_info, E)
                        }
                    } if (D.listing_attributes) {
                        $("#list-your-space").hide();
                        I18n.extend(D.preview_bar_phrases);
                        A = D.listing_attributes.listing;
                        B = new a.Model(A);
                        C = new o({
                            model: B
                        });
                        C.$el.insertAfter("#header");
                        F = $("#edit-summary a");
                        F.attr("href", F.data("href"));
                        $("#edit-summary").removeClass("hide");
                        Airbnb.mediator.emit("p3::updateStickyCalculations")
                    }
                    this.initPreviouslyMessaged(D.interaction)
                };
                this.initPreviouslyMessaged = function(A) {
                    var B;
                    if (A) {
                        A.message = A.replied_last ? t("interactionContacted", {
                            date: A.date
                        }) : t("interactionReceived", {
                            date: A.date
                        });
                        A.viewMessage = I18n.t("interactionViewMessage");
                        A.completeBooking = I18n.t("completeBooking");
                        A.hasOffer = !! A.offer_url;
                        B = $(JST["page3/o2.1/interaction"](A));
                        $("#details-column").prepend(B);
                        if (A.hasOffer) {
                            $("#book_it_button").removeClass("btn-primary")
                        }
                    }
                };
                this.contactHostHandler = function(B, A) {
                    this.loadContactHostModal();
                    Airbnb.Tracking.logEvent(AirbnbRooms.getP3ClickEventData(B));
                    if (A) {
                        A.preventDefault()
                    }
                };
                this.contactHostLogging = function(B) {
                    var A = this.getP3ContactHostEventData(B.section, B.action);
                    if (B.step) {
                        $.extend(A.event_data, {
                            step: B.step
                        })
                    }
                    Airbnb.Tracking.logEvent(A)
                };
                this.loadContactHostModal = function() {
                    var A = k("./views/contact_host_modal");
                    if (!this.contactHostModal) {
                        this.contactHostModal = new A({
                            url: this.options.ajaxLwlbContact,
                            listing: this.options,
                            el: $("#contact-modal")
                        })
                    }
                    this.contactHostModal.open()
                };
                this.initLazyLoadSections = function() {
                    var A = $("#details");
                    var B = A.position().top + A.height() / 2;
                    var D;
                    var C = "scroll load";
                    D = u.debounce(function() {
                        if ($(window).scrollTop() >= B) {
                            Airbnb.mediator.emit("p3::lazyLoadSections");
                            $(window).off(C, D)
                        }
                    }, 200, false);
                    $(window).on(C, D)
                };
                this.getP3ContactHostEventData = function(B, A) {
                    return {
                        event_name: "booking_flow",
                        event_data: {
                            page: "p3",
                            section: B,
                            action: A,
                            listing_id: z.options.hostingId,
                            is_instant_bookable: AirbnbRooms.ibData.is_instant_bookable,
                            instant_book_reasons: AirbnbRooms.ibData.instant_book_reasons,
                            instant_book_experiments: AirbnbRooms.ibData.instant_book_experiments
                        }
                    }
                };
                this.setUpTimeSpentOnPage = function(A) {
                    var B = new j({
                        airEventData: A,
                        timeIntervals: [1, 5, 10, 30, 60, 120, 240, 300, 600, 1800, 3600]
                    })
                };
                this.initialize(x)
            }
            c.exports = f
        }, {
            "../apps/manage_listing/views/preview_bar": 2,
            "../lib/airbnb/expandable": 4,
            "../logging/page_impression_logger": 13,
            "../views/shared/social/social_share_widget": 47,
            "./hca_contact_me": 18,
            "./utils": 24,
            "./views/book_it": 25,
            "./views/book_it_urgency_commitment": 28,
            "./views/contact_host_modal": 29,
            "./views/details": 30,
            "./views/host_profile": 31,
            "./views/location": 32,
            "./views/photos": 34,
            "./views/reviews": 35,
            "./views/similar_listings": 36,
            backbone: "backbone",
            o2: "o2",
            underscore: "underscore"
        }
    ],
    21: [
        function(c, d, a) {
            var b = c("underscore");

            function f(g) {
                this.options = g || {};
                this.addTrackingContext();
                this.logEvent({
                    action: "IMPRESSION"
                });
                this.bindings()
            }
            f.prototype.bindings = function() {
                $(".js-submit-book-it").on("click", this.onClickBookIt.bind(this))
            };
            f.prototype.onClickBookIt = function(g) {
                $("#book_it_form").submit()
            };
            f.prototype.addTrackingContext = function() {
                var g = b.extend({
                    listing_id: AirbnbRooms.options.hostingId
                }, this.options.tracking_context);
                Airbnb.Tracking.addContext(g)
            };
            f.prototype.logEvent = function(g) {
                Airbnb.Tracking.logEvent({
                    event_name: "P3",
                    event_data: b.extend({
                        page: "LISTING_PAGE",
                        section: "CONTACT_ME_UPSELL",
                        instant_book: this.isInstantBookable(),
                        reservation_treatment: this.shouldShowReservationTreatment(),
                        ib_treatment: this.shouldShowIBTreatment()
                    }, g)
                })
            };
            f.prototype.shouldShowReservationTreatment = function() {
                return this.options.upsell_type === "reservation_upsell"
            };
            f.prototype.shouldShowIBTreatment = function() {
                return this.options.upsell_type === "ib_upsell"
            };
            f.prototype.isInstantBookable = function() {
                return AirbnbRooms.isInstantBookable()
            };
            d.exports = f
        }, {
            underscore: "underscore"
        }
    ],
    22: [
        function(f, h, c) {
            var b = "p3/question_saver/question",
                g = 2000,
                d = f("underscore");

            function a() {}
            a.prototype.onChangeQuestion = d.debounce(function(i) {
                this.saveQuestion(i.currentTarget.value)
            }, 100);
            a.prototype.saveQuestion = function(i) {
                if (i.length > g) {
                    i = i.slice(0, g)
                }
                amplify.store(b, i)
            };
            a.prototype.clearSavedQuestion = function() {
                amplify.store(b, null)
            };
            a.prototype.getSavedQuestion = function() {
                return amplify.store(b)
            };
            h.exports = a
        }, {
            underscore: "underscore"
        }
    ],
    23: [
        function(d, b, j) {
            var c = d("o2");

            function f(u) {
                var s = 0,
                    p = 0,
                    w = 0,
                    r = "",
                    v, q;
                for (s = 0; s < u.length;
                    ++s) {
                    v = u[s][0];
                    q = u[s][1];
                    r += i(p, w, v, q);
                    p = v;
                    w = q
                }
                r += i(p, w, u[0][0], u[0][1]);
                return r
            }

            function i(s, u, x, y) {
                var p = Math.round(x * 100000),
                    r = Math.round(s * 100000),
                    z = Math.round(y * 100000),
                    q = Math.round(u * 100000),
                    w = z - q,
                    v = p - r;
                return l(v) + l(w)
            }

            function l(p) {
                var q = p << 1;
                if (p < 0) {
                    q = ~q
                }
                return n(q)
            }

            function n(q) {
                var p = "";
                while (q >= 32) {
                    p += String.fromCharCode((32 | q & 31) + 63);
                    q >>= 5
                }
                p += String.fromCharCode(q + 63);
                return p
            }

            function h(p) {
                return p * Math.PI / 180
            }

            function o(p) {
                return p * 180 / Math.PI
            }

            function a(p, q, y) {
                var w = y / 6371,
                    x = h(q),
                    s = h(p.lat),
                    v = h(p.lng),
                    r = Math.asin(Math.sin(s) * Math.cos(w) + Math.cos(s) * Math.sin(w) * Math.cos(x)),
                    u = v + Math.atan2(Math.sin(x) * Math.sin(w) * Math.cos(s), Math.cos(w) - Math.sin(s) * Math.sin(r));
                if (isNaN(r) || isNaN(u)) {
                    return null
                }
                return {
                    lat: o(r),
                    lng: o(u)
                }
            }

            function g(p) {
                return p.lat + "," + p.lng
            }

            function k(u) {
                var s = [],
                    q = u.length,
                    r, p;
                for (p = 0; p < q; p++) {
                    r = u[p];
                    s.push([r.lat, r.lng])
                }
                return s
            }

            function m() {
                return {
                    createCircleAroundPoint: function(p, q) {
                        var r = [],
                            s;
                        for (s = 0; s <= 360; s += 5) {
                            r.push(a(p, s, q))
                        }
                        return r
                    },
                    createEncodedPath: function(u, w) {
                        var v = "|",
                            q = [],
                            s = k(u),
                            p = f(s),
                            r;
                        for (r in w) {
                            q.push(r + ":" + w[r])
                        }
                        q.push("enc:" + p);
                        return "&path=" + q.join(v)
                    },
                    getOffsetCenterParams: function(r, q) {
                        var p;
                        if (c.matchMedia.is("sm")) {
                            p = r
                        } else {
                            p = a(r, 270, q * 3)
                        }
                        return "&center=" + g(p)
                    }
                }
            }
            b.exports = m
        }, {
            o2: "o2"
        }
    ],
    24: [
        function(b, c, a) {
            var d = {
                translate: function(g) {
                    var j = $("#description_text_wrapper"),
                        i = j.attr("data-machine-translation"),
                        l = $("#new_translate_button_wrapper"),
                        f = l.find(".translate_button_label"),
                        h = l.find(".gBrandingText"),
                        m = j.attr("data-display-lang");
                    Airbnb.Tracking.logEvent({
                        event_name: "google_translate_hosting_description_click",
                        event_data: {
                            user_lang: g,
                            display_lang: m,
                            hosting_id: AirbnbRooms.hostingId,
                            new_translation_created: i == null,
                            shown_review_translate_opt: $("#review-translate-button-wrapper") != null
                        }
                    });
                    if (i) {
                        j.html(i);
                        f.html(I18n.t("show_original_description"));
                        h.addClass("translated")
                    } else {
                        var k = l.find("#new_translate_button");
                        k.attr("disabled", true);
                        f.html(I18n.t("translating"));
                        $(".trans").each(function(n, p) {
                            var o = $(p);
                            $.getJSON("/rooms/ajax_google_translate_description", {
                                target_lang: g,
                                hosting_id: AirbnbRooms.hostingId,
                                purpose: "rooms.js"
                            }, function(q) {
                                if (q && q.translated_text) {
                                    o.html(q.translated_text);
                                    k.attr("disabled", false);
                                    f.html(I18n.t("show_original_description"));
                                    h.addClass("translated")
                                }
                            })
                        })
                    }
                    $("#disclaimer_text").html(I18n.t("translate_disclaimer"))
                },
                translate_reviews: function(g, k) {
                    var j = $("#review-translate-button-wrapper"),
                        f = j.find(".review_translate_button_label"),
                        h = j.find(".gBrandingText");
                    var i = j.find("#review-translate-button");
                    i.attr("disabled", true);
                    f.html(I18n.t("translating"));
                    f.data("translate-review-text", f.innerHTML);
                    Airbnb.Tracking.logEvent({
                        event_name: "google_translate_reviews_click",
                        event_data: {
                            user_lang: g,
                            hosting_id: AirbnbRooms.hostingId
                        }
                    });
                    $.getJSON("/rooms/ajax_google_translate_reviews", {
                        target_lang: g,
                        hosting_id: AirbnbRooms.hostingId,
                        purpose: "rooms.js",
                        review_ids: k
                    }, function(l) {
                        if (l) {
                            $(".review-text").each(function(m, p) {
                                var n = $(p);
                                var o = n.data("review-id");
                                n.data("original-text", p.innerHTML);
                                if (l[o] && l[o].comments) {
                                    n.html(l[o].comments.text)
                                }
                            });
                            $(".review-translation-language").each(function(m, p) {
                                var n = $(p);
                                var o = n.data("review-id");
                                if (l[o] && l[o].comments && l[o].comments.language_code != g) {
                                    n.html(l[o].comments.disclaimer)
                                }
                            });
                            $(".review-response-text").each(function(m, p) {
                                var n = $(p);
                                var o = n.data("review-id");
                                n.data("original-text", p.innerHTML);
                                if (l[o] && l[o].response) {
                                    n.html(l[o].response.text)
                                }
                            });
                            $(".review-response-language").each(function(m, p) {
                                var n = $(p);
                                var o = n.data("review-id");
                                if (l[o] && l[o].response && l[o].response.language_code != g) {
                                    n.html(l[o].response.disclaimer)
                                }
                            });
                            i.attr("disabled", false);
                            f.html(I18n.t("show_original_reviews"));
                            h.addClass("translated")
                        }
                    })
                },
                redo_search: function(g) {
                    var i = ["/s/"],
                        h = $("#display-address"),
                        f;
                    if (h.length) {
                        f = Airbnb.SearchUtils.location_to_url_parameter(h.data("location"));
                        if (f) {
                            i.push(f)
                        }
                    }
                    i.push("?", $.param({
                        checkin: $("#checkin").val(),
                        checkout: $("#checkout").val(),
                        guests: $("#number_of_guests").val()
                    }));
                    window.location = i.join("")
                },
                check_inputs: function(g, h, f) {
                    g = typeof g != "undefined" ? g : true;
                    h = typeof h != "undefined" ? h : "checkin";
                    f = typeof f != "undefined" ? f : "checkout";
                    if (this.calendar_is_not_set_date(h)) {
                        if (g) {
                            this.calendar_show_cal(h)
                        }
                        return false
                    }
                    if (this.calendar_is_not_set_date(f)) {
                        if (g) {
                            this.calendar_show_cal(f)
                        }
                        return false
                    }
                    return true
                },
                viewOtherListings: function(g) {
                    var f = this.formatDate($("#checkin").val()),
                        i = this.formatDate($("#checkout").val()),
                        j = $("#view_other_listings_button").data("reasonCode"),
                        h = {
                            event_name: "listing_view",
                            event_data: {
                                operation: "click",
                                page: "p3",
                                section: "view_other_listings",
                                hosting_id: AirbnbRooms.hostingId,
                                reason_code: j,
                                checkin_date: f,
                                checkout_date: i
                            }
                        };
                    if (this.check_inputs()) {
                        Airbnb.Tracking.queueEvent(h);
                        this.redo_search()
                    } else {
                        Airbnb.Tracking.logEvent(h)
                    }
                    g.preventDefault()
                },
                formatDate: function(f) {
                    if (!f) {
                        return null
                    }
                    return $.datepicker.formatDate($.datepicker.parseDate(f))
                },
                calendar_is_not_set_date: function(g) {
                    var f, h;
                    if (typeof g === "string") {
                        f = $("#" + g)
                    } else {
                        f = $(g)
                    }
                    h = f.val();
                    return $.trim(h) === "" || f.hasClass("placeholder") && h === f.attr("placeholder")
                },
                calendar_show_cal: function(i, f, h) {
                    if (arguments.length < 3) {
                        h = "checkout"
                    }
                    f = typeof f != "undefined" ? f : "absolute";
                    var g = 0;
                    if (h != "one_calendar_override") {
                        if (this.calendar_is_not_set_date(i)) {
                            if (typeof i === "string") {
                                $("#" + i).datepicker("show")
                            } else {
                                $(i).datepicker("show")
                            }
                        } else {
                            if (this.calendar_is_not_set_date(h)) {
                                $("#" + h).datepicker("show")
                            }
                        }
                    }
                },
                trackResourceTiming: function() {
                    try {
                        var g = [];
                        var i = Airbnb.Utils.selectJavascriptResources();
                        var m = Airbnb.Utils.selectCSSResources();
                        var h = Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/.*pictures.*_original.jpg/);
                        var f = Airbnb.Utils.computeAggregatesPayload(h, "listing_image_stats", "listing_image_failure");
                        var j = Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/.*pictures.*small.jpg/);
                        var l = Airbnb.Utils.computeAggregatesPayload(h, "small_image_stats", "small_image_failure");
                        g = g.concat(i, m, f, l);
                        if (g.length > 0) {
                            Airbnb.Tracking.logEvent({
                                event_name: "resource_timing",
                                event_data: {
                                    page: "p3",
                                    payload: g
                                }
                            })
                        }
                    } catch (k) {}
                }
            };
            c.exports = d
        }, {}
    ],
    25: [
        function(g, c, k) {
            var n = g("backbone"),
                h = g("o2-flash"),
                o = g("underscore"),
                d = g("o2"),
                m = g("./book_it/price_refresher"),
                b = g("./book_it/profile_pic_helpers"),
                f = g("../globals/refresh_subtotal"),
                l, a, p, i = [];
            l = {
                initialize: function(q) {
                    d.matchMedia.on("lg", (function(r) {
                        if (r.matches && !this.stickyCTAInitialized) {
                            this.setupStickyCTA();
                            this.stickyCTAInitialized = true
                        }
                    }).bind(this));
                    this.setupMediaQueryListeners();
                    this._calendarFixed = false;
                    Airbnb.mediator.on("p3::refreshSubtotal", this.onSubtotalRefresh.bind(this));
                    Airbnb.mediator.on("p3::refreshSubtotal", this.setupProfilePicWidget.bind(this));
                    Airbnb.mediator.on("p3::personalize", this.onPersonalization.bind(this));
                    Airbnb.mediator.on("p3::viewCalendar", function() {
                        if (d.matchMedia.is("sm")) {
                            $("#book-it-sm-trigger").click()
                        } else {
                            document.getElementById("book_it_form").scrollIntoView();
                            $("#checkin").focus()
                        }
                    });
                    this.subtotalRefresher = f;
                    this.subtotalRefresher.init();
                    this.initParams();
                    this.initDatepicker(q.hostingId, q.minNights, q.calendarLastUpdated, q.hostFirstName);
                    this.isMonthly = q.isMonthly;
                    this.defaultNightlyPrice = q.nightly_price;
                    this.defaultStaggeredPrice = q.staggered_price;
                    this.setPriceFromData(q);
                    this.pfPicUploaderJSPath = q.pfPicUploaderJSPath;
                    this.initResponsiveBookit()
                },
                initResponsiveBookit: function() {
                    var q = this.$el;
                    var u = this.$el.parent();
                    var s = new d.Modal("#book-it-sm-modal", {
                        trigger: "#book-it-sm-trigger"
                    });
                    var v = $(".mobile-bookit-btn-container").removeClass("hide");
                    var r = s.$element.find(".modal-content");
                    d.matchMedia.on("sm", function(w) {
                        if (w.matches) {
                            q.show().appendTo(r)
                        } else {
                            q.appendTo(u);
                            s.close()
                        }
                    })
                },
                onPersonalization: function(u) {
                    var q = $.query.load(window.location.href).keys,
                        s = q.checkin,
                        r = q.checkout;
                    if (s && r) {
                        this.refreshSubtotal()
                    }
                    this.defaultNightlyPrice = u.nightly_price;
                    this.defaultStaggeredPrice = u.staggered_price;
                    this.setPriceFromData(u);
                    if (u.should_hide_action_buttons) {
                        $("#book_it_status").addClass("hide");
                        h.notice(t("not_licensed_to_provide_booking_service"), {
                            no_fade_out: true
                        })
                    }
                },
                events: {
                    "change #number_of_guests": "refreshSubtotal"
                },
                initParams: function() {
                    var s = $.query.load(window.location.href).keys,
                        v = s.checkin,
                        u = s.checkout,
                        x = s.guests,
                        w;
                    if (v) {
                        var q = $("#checkin").val(v).blur();
                        this.withDatepicker(function() {
                            q.datepicker("minDate", "+0d")
                        })
                    }
                    if (u) {
                        w = $.datepicker.parseDate(v);
                        w = fakeQuery.ui.date.relative(w, "+1d");
                        var r = $("#checkout").val(u).blur();
                        this.withDatepicker(function() {
                            r.datepicker("minDate", w)
                        })
                    }
                    this.updateFormAction(s);
                    if (x) {
                        $("#number_of_guests").val(x)
                    }
                },
                updateFormAction: function(q) {
                    var r = $("#book_it_form").attr("action");
                    if (q.s) {
                        r += "&s=" + q.s
                    }
                    $("#book_it_form").attr("action", r)
                },
                withDatepicker: function(q) {
                    i.push(q)
                },
                setupStickyCTA: function() {
                    var K = this.$el,
                        M = $("#summary"),
                        N = $("#host-profile"),
                        E = $(window),
                        I = $("#book_it"),
                        G = $("#pricing"),
                        O = $("#checkin"),
                        x = $("#checkout"),
                        J = this.$(".other-actions"),
                        B = $(".flag-trigger"),
                        s = 40,
                        C, y, w, u, F = false,
                        r = false,
                        q = false,
                        v, D, A, z;
                    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                    Airbnb.mediator.on("p3::updateStickyCalculations", function() {
                        C = M.position().top;
                        y = C - s;
                        w = N.position().top + N.height();
                        u = I.height();
                        if (window.requestAnimationFrame && !q) {
                            q = true;
                            window.requestAnimationFrame(z)
                        }
                    });
                    v = (function() {
                        D = E.scrollTop();
                        if (window.requestAnimationFrame && !q) {
                            q = true;
                            window.requestAnimationFrame(z)
                        } else {
                            z()
                        }
                        this.hidePFPicTooltip()
                    }).bind(this);

                    function H() {
                        J.addClass("hide-visually")
                    }
                    z = (function() {
                        var P = D - C,
                            R = D + s + u,
                            Q = false;
                        if (P >= s * -1) {
                            G.addClass("fixed");
                            if (R > w) {
                                if (!I.hasClass("bottom")) {
                                    I.addClass("bottom").removeClass("fixed").css("top", w - C - u);
                                    O.blur();
                                    x.blur()
                                }
                            } else {
                                if (!I.hasClass("fixed")) {
                                    I.addClass("fixed").removeClass("bottom").css("top", s);
                                    if (!B.hasClass("hide")) {
                                        B.hide()
                                    }
                                }
                            }
                            Airbnb.mediator.emit("p3::updateStickyCalculations")
                        } else {
                            if (I.hasClass("fixed") || I.hasClass("bottom")) {
                                j(I, G, B)
                            }
                        }
                        Q = I.hasClass("fixed");
                        if (Q && !this._calendarFixed) {
                            K.calendarDateSpan("option", "fixed", true);
                            K.calendarDateSpan("option", "fixed", true);
                            this._calendarFixed = true
                        } else {
                            if (!Q && this._calendarFixed) {
                                K.calendarDateSpan("option", "fixed", false);
                                K.calendarDateSpan("option", "fixed", false);
                                this._calendarFixed = false
                            }
                        }
                        q = false
                    }).bind(this);
                    A = function() {
                        if (r) {
                            return
                        }
                        r = true;
                        if (E.width() <= 1045) {
                            if (F) {
                                E.off("scroll.airbnb", v);
                                j(I, G, B)
                            }
                            F = false
                        } else {
                            if (!F) {
                                Airbnb.mediator.emit("p3::updateStickyCalculations");
                                E.on("scroll.airbnb", v);
                                v()
                            }
                            F = true
                        }
                        window.setTimeout(function() {
                            r = false
                        }, 200)
                    };
                    $(document).ready(A);
                    E.on("load", Airbnb.mediator.emit.bind(Airbnb.mediator, "p3::updateStickyCalculations"));
                    E.resize(A)
                },
                setupMediaQueryListeners: function() {
                    function q() {
                        window.setTimeout(function() {
                            Airbnb.mediator.emit("p3::updateStickyCalculations")
                        }, 500)
                    }
                    if (window.matchMedia) {
                        window.matchMedia("(min-height: 700px)").addListener(q);
                        window.matchMedia("(min-height: 850px)").addListener(q);
                        window.matchMedia("(min-height: 1000px)").addListener(q)
                    }
                },
                initDatepicker: function(s, v, r, u) {
                    var q = this.subtotalRefresher.refresh.bind(this.subtotalRefresher);
                    $("#book_it_form").calendarDateSpan({
                        listingId: s,
                        minNights: v,
                        lastUpdated: r,
                        hostFirstName: u,
                        onCheckinClose: q,
                        onCheckoutClose: q
                    });
                    i.forEach(function(w) {
                        return w()
                    })
                }
            };
            a = o.extend({}, m, b, l), p = n.View.extend(a);

            function j(s, q, r) {
                s.removeClass("fixed bottom").css("top", 0);
                q.removeClass("fixed");
                if (!r.hasClass("hide")) {
                    r.show()
                }
                Airbnb.mediator.emit("p3::updateStickyCalculations")
            }
            c.exports = p
        }, {
            "../globals/refresh_subtotal": 16,
            "./book_it/price_refresher": 26,
            "./book_it/profile_pic_helpers": 27,
            backbone: "backbone",
            o2: "o2",
            "o2-flash": "o2-flash",
            underscore: "underscore"
        }
    ],
    26: [
        function(b, d, a) {
            var f = b("o2"),
                c = {
                    refreshSubtotal: function() {
                        this.subtotalRefresher.refresh()
                    },
                    setPrice: function(h, i) {
                        $(".price-amount").html(h);
                        $("#subtotal_area").toggleClass("hide", !i);
                        $(".per-night").toggleClass("hide", !i);
                        $(".per-month").toggleClass("hide", i)
                    },
                    setPriceFromData: function(j) {
                        var h = $("#price_amount"),
                            i, k;
                        if (j.staggered || this.isMonthly) {
                            i = j.staggered_price;
                            k = false
                        } else {
                            i = j.price_per_night || j.nightly_price;
                            k = true
                        }
                        this.setPrice(i, k);
                        $("#per_month .icon").toggleClass("hide", k || !j.available)
                    },
                    resetPrice: function() {
                        var h = this.isMonthly ? this.defaultStaggeredPrice : this.defaultNightlyPrice;
                        this.setPrice(h, !this.isMonthly)
                    },
                    onSubtotalRefresh: function(k) {
                        var m = $("#tax-descriptions-tip"),
                            h = !$("#checkin").val() || !$("#checkout").val(),
                            j = k && !! k.available,
                            l = k && k.tax_amount_native > 0,
                            i = $("#book_it_status");
                        $("#book_it_disabled").toggleClass("hide", h || j);
                        $("#book_it_enabled").toggleClass("hide", !(h || j));
                        if (h) {
                            this.resetPrice();
                            $("#subtotal_area").addClass("hide");
                            $("#price-info-tooltip").addClass("hide");
                            $("#highlight-cancellation-container").addClass("hide");
                            i.removeClass("loading");
                            return
                        }
                        if (k.available) {
                            this.setPriceFromData(k);
                            if (k.staggered) {
                                $("#subtotal_area").addClass("hide");
                                $("#monthly-breakdown").html(JST["p4/partials/monthly_billing_breakdown"]({
                                    tax_descriptions: k.tax_descriptions,
                                    subtotal: k.accommodations,
                                    guest_pays_vat: k.guest_pays_vat,
                                    service_fee: k.service_fee,
                                    taxes: I18n.priceString(k.tax_amount_native),
                                    show_tax_data: l
                                }))
                            } else {
                                i.removeClass("panel-body");
                                g(k);
                                if (l) {
                                    m.html(JST["p4/partials/tax_descriptions"]({
                                        tax_descriptions: k.tax_descriptions
                                    }))
                                }
                            }
                            AirbnbRooms.setInstantBookable(k.can_instant_book)
                        } else {
                            this.resetPrice();
                            $("#book_it_disabled_message").html(k.reason_message)
                        }
                        i.removeClass("loading");
                        $("#book_it").toggleClass("display-subtotal", !! k.available && !k.staggered);
                        $("#highlight-cancellation-container").toggleClass("hide", !k.available || !k.has_highlight_cancellation_experiment);
                        $("#summary .page-container > .row").toggleClass("row-space-6", !k.available && !! k.reason_message);
                        Airbnb.mediator.emit("p3::updateStickyCalculations")
                    }
                };

            function g(j) {
                var k = $("#tax-descriptions-tip"),
                    h = $("#service-fee-tip"),
                    i;
                i = [{
                    description: I18n.t("Price per night x nights", {
                        basePricePerNight: j.price_per_night,
                        smart_count: j.nights
                    }),
                    value: j.subtotal
                }];
                if (j.extras_price) {
                    i.push({
                        description: I18n.t("Cleaning fee"),
                        value: j.extras_price
                    })
                }
                if (j.service_fee) {
                    if (j.guest_pays_vat) {
                        $(".fee-no-vat-tooltip").addClass("hide");
                        $(".fee-vat-tooltip").removeClass("hide")
                    }
                    i.push({
                        description: I18n.t("Service fee"),
                        tooltip: {
                            id: "service-fee-tooltip"
                        },
                        value: j.service_fee
                    });
                    if (h && h.data()) {
                        h.data()["o2-tooltip"] = undefined
                    }
                }
                if (j.tax_amount_native > 0) {
                    i.push({
                        description: I18n.t("occupancy_taxes"),
                        tooltip: {
                            id: "tax-descriptions-tooltip"
                        },
                        value: I18n.priceString(j.tax_amount_native)
                    });
                    if (k && k.data()) {
                        k.data()["o2-tooltip"] = undefined
                    }
                }
                $("#subtotal_area").addClass("panel-padding-fit").removeClass("hide").html(JST["page3/o2.1/subtotal"]({
                    components: i,
                    total: {
                        description: I18n.t("Total"),
                        value: j.total_price_with_fees
                    }
                }));
                f.Tooltip.bind()
            }
            d.exports = c
        }, {
            o2: "o2"
        }
    ],
    27: [
        function(b, c, a) {
            var f = b("../../../profile_pic_uploader/tooltip"),
                d;
            d = {
                setupProfilePicWidget: function(g) {
                    if (g && g.can_upload_photo_to_instant_book && !g.can_instant_book) {
                        this.initProfilePicWidget();
                        this.setProfilePicWidgetLink({
                            display: true
                        })
                    } else {
                        this.setProfilePicWidgetLink({
                            display: false
                        })
                    }
                },
                initProfilePicWidget: function() {
                    if (this._pf_pic_uploader) {
                        return
                    }
                    $.when($.getScript(this.pfPicUploaderJSPath)).done((function() {
                        this._pf_pic_uploader = new f({
                            trigger: ".profile-pic-upsell-launcher",
                            success: this.$el.submit.bind(this.$el),
                            tracking_event_name: "profile_pic_upsell",
                            tracking_additional_info: {
                                id_listing: AirbnbRooms.hostingId,
                                page: "p3k"
                            }
                        })
                    }).bind(this))
                },
                setProfilePicWidgetLink: function(g) {
                    $("#pf-pic-prompt-container").toggleClass("hide", !g.display);
                    Airbnb.Tracking.logEvent({
                        event_name: "profile_pic_upsell",
                        event_data: {
                            section: "ib_upsell",
                            page: "p3k",
                            operation: g.display ? "impression" : "non_impression",
                            id_listing: AirbnbRooms.hostingId
                        }
                    })
                },
                hidePFPicTooltip: function() {
                    if (this._pf_pic_uploader) {
                        this._pf_pic_uploader.hideTooltip()
                    }
                }
            };
            c.exports = d
        }, {
            "../../../profile_pic_uploader/tooltip": 40
        }
    ],
    28: [
        function(b, c, a) {
            var f = b("backbone");
            var d = f.View.extend({
                initialize: function(g) {
                    Airbnb.mediator.on("p3::personalize", this.onPersonalization.bind(this))
                },
                onPersonalization: function(h) {
                    if (!h || !h.listing_activity_data) {
                        return
                    }
                    var g = I18n.t("shared.pluralize.person", {
                        smart_count: h.listing_activity_data.week.unique_views
                    });
                    this.$el.find('[data-hook="urgency-tooltip-content"]').html(I18n.t("view_count", {
                        number_of_people: g,
                        user: this.$el.data("host-name")
                    }));
                    this.$el.find('[data-hook="urgency-tooltip"]').removeClass("hide")
                }
            });
            c.exports = d
        }, {
            backbone: "backbone"
        }
    ],
    29: [
        function(l, b, E) {
            var x = l("o2"),
                c = x.Tabs,
                a = x.Modal,
                D = l("../utils"),
                r = l("../shared/p3_upsell"),
                A = l("../shared/question_saver"),
                s = l("react"),
                o = s.createFactory(l("../../NoCaptcha.jsx"));
            l("../../verification_flow.js");

            function i(F) {
                this.url = F.url;
                this.listing = F.listing;
                this.$el = F.el;
                this.$content = this.$el.find(".modal-content");
                this.modal = this.initializeModal();
                this.questionSaver = new A();
                this.bindings()
            }
            i.prototype.bindings = function() {
                this.$el.on("submit", "form", w);
                this.$el.on("submit", "form", k.bind(this));
                this.$el.on("keyup", "#question", this.onChangeQuestion.bind(this));
                this.$el.on("change", "select", y);
                this.$el.on("submit", "form", y)
            };
            i.prototype.initializeModal = function() {
                var F = "#contact-modal",
                    G = $(F).data("o2-modal");
                if (G === undefined) {
                    G = new a(F)
                }
                G.on("close", d);
                return G
            };
            i.prototype.open = function() {
                this.modal.open();
                this.loadContent().then(this.insertContent.bind(this))
            };
            i.prototype.close = function() {
                this.modal.close()
            };
            i.prototype.loadContent = function() {
                this.setLoading(true);
                return $.get(this.url).always(this.setLoading.bind(this, false))
            };
            i.prototype.insertContent = function(F) {
                this.$content.html(F);
                this.$content.find("[placeholder]").placeholder();
                this.initSavedQuestion();
                this.initDateFields();
                this.initCaptcha();
                if ($("#contact-host-panel").hasClass("new")) {
                    $("#contact-modal").addClass("new")
                }
            };
            i.prototype.initCaptcha = function() {
                var F = this.$content.find("#captcha");
                if (F.length) {
                    s.render(o(), F[0])
                }
                x.Tooltip.bind(this.$content)
            };
            i.prototype.initDateFields = function() {
                var F = {
                    minDate: 0,
                    maxDate: "+3Y",
                    nextText: "",
                    prevText: "",
                    numberOfMonths: 1,
                    showButtonPanel: true,
                    closeText: I18n.t("clear_dates", "Clear Dates"),
                    fixed: true
                };
                this.$content.calendarDateSpan({
                    listingId: this.listing.hostingId,
                    minNights: this.listing.minNights,
                    lastUpdated: this.listing.calendarLastUpdated,
                    onCheckinClose: y,
                    onCheckoutClose: y,
                    defaultsCheckin: F,
                    defaultsCheckout: F
                });
                z()
            };
            i.prototype.setLoading = function(F) {
                this.$content.toggleClass("loading", F)
            };
            i.prototype.initSavedQuestion = function() {
                var F = this.questionSaver.getSavedQuestion();
                if (F) {
                    $("#question").val(F)
                }
            };
            i.prototype.onChangeQuestion = function(F) {
                this.questionSaver.onChangeQuestion(F)
            };

            function f(F) {
                alert(F)
            }

            function w() {
                Airbnb.mediator.emit("p3::contactHostLogging", {
                    section: "contact_host_modal",
                    step: "clicked_send",
                    action: "click"
                })
            }

            function k(N) {
                if (N) {
                    N.preventDefault()
                }
                var G, K, H;
                var F = $.datepicker._defaults.dateFormat;
                var J = $.trim($("#message_checkin").val());
                var I = $.trim($("#message_checkout").val());
                if (J === F || J === "" || I === F || I === "") {
                    f(t("complete_dates"));
                    return
                }
                if ($("#question").is(":disabled")) {
                    f(t("cannot_message_unavailable_dates"));
                    return
                }
                G = $.datepicker.parseDate(J);
                if (!h(G) || yesterday > G) {
                    f(t("please_enter_valid_start_date"));
                    return
                }
                K = $.datepicker.parseDate(I);
                if (K.getTime() - G.getTime() > 32000000000) {
                    f(t("please_enter_valid_date_range"));
                    return
                }
                H = $.trim($("#question").val());
                if (H === "") {
                    f(t("enter_message"));
                    return
                }
                if (Airbnb.Utils.isUserLoggedIn) {
                    if (!AirbnbRooms.needsVerifications) {
                        B(this)
                    } else {
                        var M = this;
                        C("#contact_requirements");
                        $(".verification-flow-container").verificationFlow({
                            onComplete: function() {
                                B(M)
                            },
                            metaData: {
                                page: "page3_contact_me"
                            }
                        })
                    }
                } else {
                    this.modal.off("close", d);
                    this.modal.close();
                    Airbnb.SignupLoginModal.launchLogin();
                    Airbnb.mediator.emit("p3::contactHostLogging", {
                        section: "signup_login_modal",
                        step: "signup_login_launched",
                        action: "impression"
                    });
                    Airbnb.SignInUp.addLoginCallback((function() {
                        this.modal.open();
                        Airbnb.mediator.emit("p3::contactHostLogging", {
                            section: "signup_login_modal",
                            step: "logged_in",
                            action: "submit"
                        });
                        k.call(this)
                    }).bind(this))
                }
            }

            function q() {
                $("#question").attr("disabled", "disabled");
                $("#message_button").attr("disabled", "disabled");
                $("#question_holder").css("opacity", "0.5")
            }

            function u(F) {
                if (F) {
                    p(F);
                    $("#messaging-errors").addClass("other").removeClass("not-available")
                } else {
                    $("#messaging-errors").addClass("not-available").removeClass("other")
                }
            }

            function n() {
                var F = $("#question").removeAttr("disabled");
                $("#message_button").removeAttr("disabled");
                if (F.val().length === 0) {
                    F.val(" ");
                    F.val("")
                }
                $("#question_holder").css("opacity", "1.0");
                $("#messaging-errors").removeClass("not-available").removeClass("other")
            }

            function y() {
                var F = $.datepicker._defaults.dateFormat,
                    H = $("#message_checkin").val(),
                    G = $("#message_checkout").val(),
                    J = $("#message_number_of_guests").val(),
                    I;
                Flash.clear();
                j();
                if (H === F || G === F) {
                    return false
                }
                I = {
                    checkin: H,
                    checkout: G,
                    number_of_guests: J
                };
                Airbnb.mediator.emit("p3::updateSubtotal");
                $.getJSON(check_dates_url, I, function(K) {
                    q();
                    if (K.available) {
                        n()
                    } else {
                        u(K.error_message)
                    }
                })
            }

            function h(F) {
                if (Object.prototype.toString.call(F) !== "[object Date]") {
                    return false
                }
                return !isNaN(F.getTime())
            }

            function j() {
                $("#checkin").val($("#message_checkin").val());
                $("#checkout").val($("#message_checkout").val());
                $("#number_of_guests").val($("#message_number_of_guests").val())
            }

            function z() {
                if (D.check_inputs(false)) {
                    $("#message_checkin").val($("#checkin").val());
                    $("#message_checkout").val($("#checkout").val());
                    $("#message_number_of_guests").val($("#number_of_guests").val());
                    y()
                }
            }

            function p(G, F) {
                $("#dates_other_error").html("<strong>" + G + "</strong> " + (F || ""))
            }

            function B(I) {
                var K = $("#message_form");
                var J = K.attr("action");
                var H = $("#question").val(),
                    G = $("#message_checkin").val(),
                    F = $("#message_checkout").val();
                I.setLoading(true);
                $.post(J, K.serialize(), function(N) {
                    var M = new r(N.upsell_presenter);
                    if (N.is_logged_in) {
                        Airbnb.SignInUp.broadcastLogin({
                            refresh: false
                        })
                    }
                    if (N.message === "") {
                        Airbnb.doConversions();
                        I.questionSaver.clearSavedQuestion();
                        m();
                        if (N.show_verified_id_upsell) {
                            C("#verified-id-container")
                        } else {
                            if (N.show_profile_pic_upsell) {
                                I.close();
                                v(N)
                            } else {
                                if (M.shouldShowIBTreatment()) {
                                    C("#p3-upsell-treatment")
                                } else {
                                    if (M.shouldShowReservationTreatment()) {
                                        C("#p3-reservation-upsell-treatment")
                                    } else {
                                        Airbnb.ERF.deliverExperiment("referral_post_contact_modal", {
                                            treatment_unknown: function() {
                                                C("#multi-messaging")
                                            },
                                            control: function() {
                                                C("#multi-messaging")
                                            },
                                            referral_modal: function() {
                                                if (N.has_contacted_host) {
                                                    C("#invite-friends")
                                                } else {
                                                    C("#multi-messaging")
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        }
                        Airbnb.mediator.emit("p3::contactHostLogging", {
                            section: "contact_host",
                            step: "delivered_message",
                            action: "sent"
                        })
                    } else {
                        g(N.frictions, N.message)
                    }
                }, "json").always(function() {
                    I.setLoading(false)
                });
                return false
            }

            function g(F, G) {
                if ($.inArray("captcha", F) == 0) {
                    $("#messaging-errors").addClass("friction-error-captcha")
                } else {
                    $("#messaging-errors").addClass("friction-error-generic");
                    $("#friction_error_generic").text(G)
                }
            }

            function m() {
                $("#messaging-errors").removeClass("friction-error-generic friction-error-captcha");
                $("#friction_error_generic").empty()
            }

            function C(F) {
                $(".contact-host-panel").addClass("hide").filter(F).removeClass("hide")
            }

            function v(F) {
                Airbnb.mediator.emit("guestOnboarding::profilePicUpsell", function() {
                    var H = enderRequire("profile_pic_upsell/upsell_modal");
                    var G = new H({
                        tracking_event_name: "contact_host_profile_pic_upsell_modal",
                        flow: "contact_host_profile_pic_upsell",
                        isNewbie: F.is_newbie,
                        showWeiboButton: F.show_weibo_button,
                        showFacebookButton: F.show_facebook_button,
                        showGoogleButton: F.show_google_button,
                        didUploadTextBelow: [I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"), I18n.t("profile_pic_upsell.easier_to_book")].join(" "),
                        didNotUploadTextBelow: [I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"), I18n.t("profile_pic_upsell.easier_to_book")].join(" ")
                    });
                    G.render()
                })
            }

            function d() {
                Airbnb.mediator.emit("p3::contactHostLogging", {
                    section: "contact_host_modal",
                    action: "close"
                })
            }
            b.exports = i
        }, {
            "../../NoCaptcha.jsx": 1,
            "../../verification_flow.js": 44,
            "../shared/p3_upsell": 21,
            "../shared/question_saver": 22,
            "../utils": 24,
            o2: "o2",
            react: "react"
        }
    ],
    30: [
        function(b, d, a) {
            var g = ["extras_price", "localized_people_pricing_description", "monthly_price", "security_deposit", "weekly_price"];
            var f = b("backbone"),
                c;
            c = f.View.extend({
                initialize: function() {
                    Airbnb.mediator.on("p3::personalize", this.onPersonalization.bind(this))
                },
                onPersonalization: function(h) {
                    if (h.should_hide_action_buttons) {
                        $("#contact-host-link").addClass("hide")
                    }
                    $.each(g, (function(k, l) {
                        var j;
                        if (h[l]) {
                            j = this.$el.find("#" + l + "_string");
                            if (j.length) {
                                j.html(h[l])
                            }
                        }
                    }).bind(this))
                }
            });
            d.exports = c
        }, {
            backbone: "backbone"
        }
    ],
    31: [
        function(b, c, a) {
            var f = b("backbone");
            var d = f.View.extend({
                initialize: function() {
                    var g = this;
                    Airbnb.mediator.on("p3::personalize", function(h) {
                        g.initSocialConnections(h.social_connections, h.show_fb_cta);
                        if (h.should_hide_action_buttons) {
                            $("#contact_wrapper").addClass("hide")
                        }
                    })
                },
                initSocialConnections: function(m, k) {
                    var g = 2,
                        q = m.relationships,
                        h = q && q.length,
                        l = m.connected,
                        p = this.$(".social-connections-section"),
                        n, o, r, j;
                    if (!l && k) {
                        p.find(".facebook-button-wrapper").addBack().removeClass("hide");
                        p.find(".fb-button").click(function(i) {
                            var s = $(this);
                            ga("send", "event", "Authenticate", "FacebookClick", "Page3SocialConnections");
                            FB.login(function(u) {
                                if (u.authResponse) {
                                    ga("send", "event", "Authenticate", "FacebookLogin", "Page3SocialConnections");
                                    window.location.href = s.data("redirect_uri")
                                } else {
                                    ga("send", "event", "Authenticate", "FacebookDeny", "Page3SocialConnections")
                                }
                            }, {
                                scope: Airbnb.FACEBOOK_PERMS
                            });
                            i.preventDefault()
                        })
                    }
                    if (h) {
                        o = p.find(".social-connections-list");
                        for (n = 0; n < Math.min(g, h); n++) {
                            o.append(JST["page3/o2.1/social_connection"](q[n]))
                        }
                        if (h > g) {
                            r = p.find(".more-connections-link").removeClass("hide");
                            j = p.find("#more-count").html(h - g);
                            r.one("click", function(i) {
                                for (n = g; n < h; n++) {
                                    o.append(JST["page3/o2.1/social_connection"](q[n]))
                                }
                                r.remove();
                                i.preventDefault()
                            })
                        }
                        p.find(".social-connections").addBack().removeClass("hide")
                    }
                }
            });
            c.exports = d
        }, {
            backbone: "backbone"
        }
    ],
    32: [
        function(c, a, g) {
            var b = c("o2"),
                k = c("underscore"),
                j = c("backbone"),
                d = c("../../views/shared/sliding_carousel"),
                f = c("../../neighborhoods/neighborhoods_popover"),
                h = c("../shared/static_map_helpers"),
                i = c("./location/map"),
                l;
            l = j.View.extend({
                initialize: function() {
                    k.bindAll(this, "handleItemChange", "initNeighborhood");
                    Airbnb.mediator.on("p3::lazyLoadSections", (function() {
                        var n = this;
                        var m = Airbnb.Utils;
                        this.$map = $("#map");
                        this.$neighborhoodElem = this.$("[data-neighborhood-id]");
                        this.containsNeighborhood = this.$neighborhoodElem.length;
                        this.mapProvider = $("#map").data("provider");
                        this.isOpenStreetMap = this.mapProvider === "Mapbox";
                        this.isAlternateMapProvider = this.isOpenStreetMap;
                        this.isTabletOrPhone = b.matchMedia.is("sm") || b.matchMedia.is("md");
                        this.mapDeferred = $.Deferred();
                        this.neighborhoodDeferred = $.Deferred();
                        if (this.isTabletOrPhone && !this.isAlternateMapProvider) {
                            this.initStaticMap()
                        } else {
                            this.initInteractiveMap()
                        }
                        this.initNeighborhood();
                        $.when(this.mapDeferred, this.neighborhoodDeferred).then(function() {
                            n.addNeighborhoodPolygonToMap();
                            if (n.isTabletOrPhone && !n.isAlternateMapProvider) {
                                $(window).on("resize", k.debounce(n.addNeighborhoodPolygonToMap.bind(n), 500))
                            }
                        }, function() {
                            n.mapDeferred.done(function() {
                                if (n.isTabletOrPhone && !n.isAlternateMapProvider) {
                                    n.addStaticGoogleMap();
                                    $(window).on("resize", k.debounce(n.addStaticGoogleMap.bind(n), 500))
                                }
                            })
                        })
                    }).bind(this))
                },
                handleItemChange: function(m) {
                    var n = this.$(".dot");
                    n.removeClass("dot-ebisu");
                    n.eq(m.index).addClass("dot-ebisu")
                },
                initInteractiveMap: function() {
                    var m;
                    if (this.isOpenStreetMap) {
                        Airbnb.Utils.withOpenStreetMap((function() {
                            i.initOpenStreetMap();
                            this.mapDeferred.resolve()
                        }).bind(this));
                        m = Airbnb.Utils.loadOpenStreetMap.bind(Airbnb.Utils, "p3")
                    } else {
                        Airbnb.Utils.withGooglePlaces((function() {
                            i.initGoogleMap();
                            this.mapDeferred.resolve()
                        }).bind(this));
                        m = Airbnb.Utils.loadGooglePlaces.bind(Airbnb.Utils)
                    } if (document.readyState === "complete") {
                        m()
                    } else {
                        $(window).on("load", m)
                    }
                },
                generateStaticMapUrl: function() {
                    var m = this.$map.height();
                    var o = this.$map.width();
                    var n = this.$map.data("staticMapUrl");
                    n = n.replace("size=", "size=" + o + "x" + m);
                    n += this.getHostingEncodedPolyline();
                    return n
                },
                initStaticMap: function() {
                    this.staticMapHelpers = new h();
                    this.staticMapUrl = this.generateStaticMapUrl();
                    this.mapDeferred.resolve()
                },
                initNeighborhood: function() {
                    if (this.containsNeighborhood) {
                        this.model = new f({
                            id: this.$neighborhoodElem.data("neighborhood-id")
                        });
                        this.model.fetch({
                            success: (function(m) {
                                this.$neighborhoodElem.attr("href", m.get("url"));
                                this.neighborhoodDeferred.resolve();
                                this.render()
                            }).bind(this),
                            error: (function() {
                                this.neighborhoodDeferred.reject()
                            }).bind(this)
                        })
                    } else {
                        this.neighborhoodDeferred.reject()
                    }
                },
                render: function() {
                    var p = JST["page3/o2.1/location_card"],
                        o = " &middot; ",
                        m = [],
                        n = this.model;
                    if (n.hasThumbnails()) {
                        $.each(this.model.get("tags"), function(r, s) {
                            m.push(s.name)
                        });
                        $("#neighborhood-seo-link").remove();
                        $("#hover-card").prepend(p({
                            tags: m.join(o),
                            name: n.get("name"),
                            topline: n.get("topline"),
                            url: n.get("url"),
                            thumbnails: n.get("thumbnails"),
                            launched: n.get("launched")
                        }));
                        var q = new d({
                            el: this.$(".neighborhood-sliding-carousel"),
                            shouldLoop: true
                        });
                        this.listenTo(q, "change:item", this.handleItemChange)
                    } else {
                        if (!n.get("launched")) {
                            $("#neighborhood-seo-link").addClass("not-launched")
                        }
                    }
                    return this
                },
                addNeighborhoodPolygonToMap: function() {
                    if (this.isOpenStreetMap) {
                        Airbnb.Utils.withOpenStreetMap((function() {
                            this.addNeighborhoodPolygonToOpenStreetMap()
                        }).bind(this))
                    } else {
                        if (!this.isTabletOrPhone) {
                            Airbnb.Utils.withGooglePlaces((function() {
                                this.renderInteractiveNeighborhoodGoogle()
                            }).bind(this))
                        } else {
                            this.staticMapUrl += this.getNeighborhoodEncodedPolyline();
                            this.addStaticGoogleMap({
                                includeNeighborhoodPolygon: true
                            })
                        }
                    }
                },
                getNeighborhoodPolygonToGoogle: function() {
                    var n = this.model.get("bounds"),
                        o = [],
                        m = {};
                    if (n && n.coordinates && n.coordinates[0] && n.coordinates[0][0]) {
                        k.each(n.coordinates[0][0], function(q, p) {
                            o.push({
                                lat: q[1],
                                lng: q[0]
                            })
                        });
                        m = {
                            paths: o,
                            strokeColor: "#FFAA91",
                            strokeWeight: 2,
                            fillColor: "#FFAA91",
                            fillOpacity: 0.2
                        }
                    }
                    return m
                },
                renderInteractiveNeighborhoodGoogle: function() {
                    var p = [],
                        o, n, m;
                    n = this.getNeighborhoodPolygonToGoogle();
                    k.each(n.coords, function(q) {
                        p.push(new google.maps.LatLng(latlng.lat, latlng.lng))
                    });
                    o = new google.maps.Polygon(n);
                    m = this.$map.airbnbGoogleMap().map;
                    o.setMap(m)
                },
                getNeighborhoodEncodedPolyline: function() {
                    var n = this.getNeighborhoodPolygonToGoogle();
                    var s = {
                        color: n.strokeColor.replace("#", "0x"),
                        fillcolor: n.fillColor.replace("#", "0x") + "33",
                        weight: n.strokeWeight
                    }, r = this.staticMapHelpers.createEncodedPath(n.paths, s),
                        q = encodeURIComponent(this.staticMapUrl).length + encodeURIComponent(r).length,
                        o = 2048,
                        p = 30,
                        m = 54;
                    if (q + m + p < o) {
                        return r
                    }
                    return ""
                },
                getHostingEncodedPolyline: function() {
                    var r = {
                        lat: this.$map.data("lat"),
                        lng: this.$map.data("lng")
                    }, n = AirbnbConstants.MapCircleSizes[14] / 1000,
                        m = this.staticMapHelpers.getOffsetCenterParams(r, n),
                        p = [],
                        q = this.staticMapHelpers.createCircleAroundPoint(r, n),
                        s = {
                            color: AirbnbConstants.GoogleMapCircleStyles.strokeColor.replace("#", "0x"),
                            fillcolor: "0x00D1C133",
                            weight: AirbnbConstants.GoogleMapCircleStyles.strokeWeight
                        }, o = this.staticMapHelpers.createEncodedPath(q, s);
                    return m + o
                },
                addStaticGoogleMap: function(m) {
                    var o = this;
                    if (this.isRequestingStaticMap) {
                        return
                    }
                    this.isRequestingStaticMap = true;
                    var n = this.generateStaticMapUrl();
                    if (m && m.includeNeighborhoodPolygon) {
                        n += this.getNeighborhoodEncodedPolyline()
                    }
                    $.ajax({
                        url: "/rooms/ajax_signed_image_url",
                        data: {
                            unsigned_url: n
                        },
                        dataType: "json",
                        success: function(p) {
                            o.$map.remove("img").prepend('<img src="' + p.signed_url + "\" alt='" + I18n.t("location_map") + "' />")
                        }
                    }).always(function() {
                        o.isRequestingStaticMap = false
                    })
                },
                addNeighborhoodPolygonToOpenStreetMap: function() {
                    var o = [],
                        n = this.model.get("bounds"),
                        m;
                    if (n && n.coordinates && n.coordinates[0] && n.coordinates[0][0]) {
                        k.each(n.coordinates[0][0], function(q, p) {
                            o.push(L.latLng(q[1], q[0]))
                        });
                        m = L.polygon(o, {
                            color: "#FFAA91",
                            weight: 2,
                            fillColor: "#FFAA91",
                            opacity: 0.2
                        });
                        m.addTo($("#map").airbnbOpenStreetMap().map)
                    }
                }
            });
            a.exports = l
        }, {
            "../../neighborhoods/neighborhoods_popover": 14,
            "../../views/shared/sliding_carousel": 46,
            "../shared/static_map_helpers": 23,
            "./location/map": 33,
            backbone: "backbone",
            o2: "o2",
            underscore: "underscore"
        }
    ],
    33: [
        function(b, c, a) {
            var d = {
                initGoogleMap: function() {
                    var w = 14,
                        r = 11,
                        m = {
                            cafe: "cup",
                            wifi: "wifi",
                            other: "flag",
                            kid: "group-alt",
                            store: "shopping-bag",
                            bar: "wine-glasses",
                            restaurant: "meal",
                            groceries: "meal",
                            art: "balloons"
                        };
                    var u = [],
                        j = [],
                        h = $("#map"),
                        n = new google.maps.LatLng(h.data("lat"), h.data("lng")),
                        y, s, p;
                    h.airbnbGoogleMap({
                        position: n,
                        isFuzzy: true,
                        accuracy: 8,
                        showSmallControls: true
                    });
                    var g = h.airbnbGoogleMap(),
                        q = g.map,
                        f = 350,
                        k = new InfoBox({
                            closeBoxURL: "",
                            pane: "floatPane",
                            alignBottom: true,
                            infoBoxClearance: new google.maps.Size(15, 50),
                            enableEventPropagation: true,
                            pixelOffset: new google.maps.Size(-1 * (f / 2 - 40), -50),
                            zIndex: 2,
                            boxStyle: {
                                width: f + "px"
                            }
                        });
                    google.maps.event.addListener(q, "click", function() {
                        k.close()
                    });
                    h.on("click", function(z) {
                        if ($(z.target).hasClass("close-box")) {
                            k.close()
                        }
                    });
                    var x = false,
                        o = $("#guidebook-recommendations li.user-image a"),
                        l = o.find("img"),
                        v = {
                            profileUrl: o.attr("href"),
                            name: l.attr("alt"),
                            profileImgUrl: l.attr("src")
                        };
                    var i = new google.maps.LatLngBounds();
                    $("#guidebook-recommendations li.recommendation").each(function(B, F) {
                        x = true;
                        var A = $(F),
                            D = $("span.location", A).html(),
                            z = new google.maps.LatLng(A.data("lat"), A.data("lng")),
                            E = JST["page3/o2.1/location_infobox"],
                            C = new google.maps.Marker({
                                clickable: true,
                                position: z,
                                map: q,
                                icon: new google.maps.MarkerImage(A.data("img"), null, null, new google.maps.Point(11, 37))
                            });
                        google.maps.event.addListener(C, "click", function() {
                            var G = $("div.description", A);
                            G.children().css("margin-bottom", "0");
                            k.setContent(E({
                                title: $("h2 a", A).html(),
                                titleLink: $("h2 a", A).attr("href"),
                                hasLocation: D !== "",
                                location: D,
                                type: A.data("type"),
                                desc: G.html().trim(),
                                icon: m[A.data("type")],
                                user: v,
                                hideCloseBox: false,
                                hostRecommendation: I18n.t("host_recommendation")
                            }));
                            k.open(q, C)
                        });
                        u.push(C);
                        i.extend(z)
                    });
                    if (x) {
                        p = g.marker.getBounds();
                        i.extend(p.getNorthEast());
                        i.extend(p.getSouthWest());
                        q.fitBounds(i);
                        google.maps.event.addListenerOnce(q, "bounds_changed", function() {
                            if (this.getZoom() > 14) {
                                this.setZoom(14)
                            }
                        })
                    }
                    if (n.lng() <= i.getCenter().lng()) {
                        q.panBy(-200, 0)
                    }
                    google.maps.event.addListenerOnce(q, "idle", this.logGoogleMapBoundsChanged.bind(this))
                },
                logGoogleMapBoundsChanged: function() {
                    var g = $("#map").airbnbGoogleMap().map;
                    var f = this;
                    google.maps.event.addListener(g, "dragend", function() {
                        f.logGoogleMapEventData(this, "drag")
                    });
                    google.maps.event.addListener(g, "zoom_changed", function() {
                        f.logGoogleMapEventData(this, "zoom")
                    })
                },
                logGoogleMapEventData: function(k, i) {
                    var j = k.getBounds();
                    var h = j.getNorthEast();
                    var g = j.getSouthWest();
                    var f = j.getCenter();
                    Airbnb.Tracking.logEvent({
                        event_name: "listing_view",
                        event_data: {
                            operation: "move",
                            page: "p3",
                            section: "location",
                            ne_lat: h.lat(),
                            ne_lng: h.lng(),
                            sw_lat: g.lat(),
                            sw_lng: g.lng(),
                            center_lat: f.lat(),
                            center_lng: f.lng(),
                            zoom: k.getZoom(),
                            map_provider: "google",
                            map_event: i
                        }
                    })
                },
                initBingMap: function() {
                    var w = 14,
                        i = 11,
                        j = {
                            cafe: "cup",
                            wifi: "wifi",
                            other: "flag",
                            kid: "group-alt",
                            store: "shopping-bag",
                            bar: "wine-glasses",
                            restaurant: "meal",
                            groceries: "meal",
                            art: "balloons"
                        };
                    var f, s, u = [],
                        m = [],
                        p = $("#map"),
                        n = new Microsoft.Maps.Location(p.data("lat"), p.data("lng"));
                    p.airbnbBingMap({
                        position: n,
                        isFuzzy: true,
                        accuracy: 8,
                        streetViewControl: false,
                        showSmallControls: true
                    });
                    var o = p.airbnbBingMap().map,
                        h = 350,
                        q = new Microsoft.Maps.Infobox(n, {
                            offset: new Microsoft.Maps.Point(-1 * h / 2 - 30, 30),
                            typeName: Microsoft.Maps.InfoboxType.mini,
                            showPointer: false,
                            showCloseButton: true,
                            zIndex: 2,
                            width: h + "px",
                            visible: false
                        });
                    o.entities.push(q);
                    Microsoft.Maps.Events.addHandler(o, "click", function() {
                        q.setOptions({
                            visible: false
                        })
                    });
                    Microsoft.Maps.Events.addHandler(q, "click", function(x) {
                        if ($(x.originalEvent.target).hasClass("close-box")) {
                            q.setOptions({
                                visible: false
                            })
                        }
                    });
                    var l = false,
                        k = $("#guidebook-recommendations li.user-image a"),
                        g = k.find("img"),
                        v = {
                            profileUrl: k.attr("href"),
                            name: g.attr("alt"),
                            profileImgUrl: g.attr("src")
                        }, r = [n];
                    $("#guidebook-recommendations li.recommendation").each(function(z, C) {
                        l = true;
                        var y = $(C),
                            x = new Microsoft.Maps.Location(y.data("lat"), y.data("lng")),
                            B = JST["page3/o2.1/location_infobox"],
                            A = new Microsoft.Maps.Pushpin(x, {
                                icon: y.data("img")
                            });
                        Microsoft.Maps.Events.addHandler(A, "click", function() {
                            var D = $("div.description", y);
                            D.children().css("margin-bottom", "0");
                            q.setLocation(x);
                            q.setHtmlContent(B({
                                title: $("h2 a", y).html(),
                                titleLink: $("h2 a", y).attr("href"),
                                location: $("span.location", y).html(),
                                type: y.data("type"),
                                desc: D.html().trim(),
                                icon: j[y.data("type")],
                                user: v,
                                hideCloseBox: false,
                                mapProvider: "bing",
                                hostRecommendation: I18n.t("host_recommendation")
                            }));
                            q.setOptions({
                                pushpin: A,
                                visible: true
                            });
                            A.setOptions({
                                infobox: q
                            })
                        });
                        Microsoft.Maps.Events.addHandler(A, "mouseover", function(D) {
                            o.getRootElement().style.cursor = "pointer"
                        });
                        Microsoft.Maps.Events.addHandler(A, "mouseout", function(D) {
                            o.getRootElement().style.cursor = "default"
                        });
                        o.entities.push(A);
                        r.push(x)
                    });
                    if (l) {
                        o.setView({
                            bounds: Microsoft.Maps.LocationRect.fromLocations(r)
                        });
                        Microsoft.Maps.Events.addHandler(o, "viewchangeend", function(x) {
                            if (o.getZoom() > 16) {
                                o.setView({
                                    zoom: 16
                                })
                            }
                        })
                    }
                },
                initOpenStreetMap: function() {
                    var y = new $.Deferred();
                    var v = 14,
                        p = 11,
                        m = {
                            cafe: "cup",
                            wifi: "wifi",
                            other: "flag",
                            kid: "group-alt",
                            store: "shopping-bag",
                            bar: "wine-glasses",
                            restaurant: "meal",
                            groceries: "meal",
                            art: "balloons"
                        };
                    var x, r, s = [],
                        i = [],
                        h = $("#map"),
                        n = L.latLng(h.data("lat"), h.data("lng"));
                    h.airbnbOpenStreetMap({
                        position: n,
                        isFuzzy: true,
                        accuracy: 8,
                        showSmallControls: true
                    });
                    var q = h.airbnbOpenStreetMap(),
                        g = q.map,
                        f = 350,
                        k = L.popup({
                            offset: L.point(15, 8),
                            closeButton: false,
                            maxWidth: f
                        });
                    h.on("click", function(z) {
                        if ($(z.target).hasClass("close-box")) {
                            g.closePopup(k)
                        }
                    });
                    var w = false,
                        l = L.latLngBounds([]),
                        o = $("#guidebook-recommendations li.user-image a"),
                        j = o.find("img"),
                        u = {
                            profileUrl: o.attr("href"),
                            name: j.attr("alt"),
                            profileImgUrl: j.attr("src")
                        };
                    $("#guidebook-recommendations li.recommendation").each(function(B, F) {
                        w = true;
                        var A = $(F),
                            D = $("span.location", A).html(),
                            z = L.latLng(A.data("lat"), A.data("lng")),
                            E = JST["page3/o2.1/location_infobox"],
                            C = L.marker(z, {
                                clickable: true,
                                icon: L.icon({
                                    iconUrl: A.data("img")
                                })
                            });
                        C.addTo(g);
                        C.on("click", function() {
                            var G = $("div.description", A);
                            G.children().css("margin-bottom", "0");
                            k.setLatLng(C.getLatLng()).setContent(E({
                                title: $("h2 a", A).html(),
                                titleLink: $("h2 a", A).attr("href"),
                                hasLocation: D !== "",
                                location: D,
                                type: A.data("type"),
                                desc: G.html().trim(),
                                icon: m[A.data("type")],
                                user: u,
                                hideCloseBox: false,
                                hostRecommendation: I18n.t("host_recommendation")
                            })).openOn(g)
                        });
                        s.push(C);
                        l.extend(z)
                    });
                    if (w) {
                        hostingCircleBounds = q.marker.getBounds();
                        l.extend(hostingCircleBounds.getNorthEast());
                        l.extend(hostingCircleBounds.getSouthWest());
                        g.fitBounds(l);
                        g.addOneTimeEventListener("load", (function() {
                            if (g.getZoom() > 14) {
                                g.setZoom(14)
                            }
                        }).bind(this))
                    }
                    if (l.isValid() && n.lng <= l.getCenter().lng) {
                        g.panBy(L.point(-200, 0))
                    }
                    g.addOneTimeEventListener("focus", this.logOpenStreetMapBoundsChanged.bind(this))
                },
                logOpenStreetMapBoundsChanged: function() {
                    var g = $("#map").airbnbOpenStreetMap().map;
                    var f = this;
                    g.on("dragend", function() {
                        f.logOpenStreetMapEventData(this, "drag")
                    });
                    g.on("zoomend", function() {
                        f.logOpenStreetMapEventData(this, "zoom")
                    })
                },
                logOpenStreetMapEventData: function(k, i) {
                    var j = k.getBounds();
                    var h = j.getNorthEast();
                    var g = j.getSouthWest();
                    var f = j.getCenter();
                    Airbnb.Tracking.logEvent({
                        event_name: "listing_view",
                        event_data: {
                            operation: "move",
                            page: "p3",
                            section: "location",
                            ne_lat: h.lat,
                            ne_lng: h.lng,
                            sw_lat: g.lat,
                            sw_lng: g.lng,
                            center_lat: f.lat,
                            center_lng: f.lng,
                            zoom: k.getZoom(),
                            map_provider: "mapbox",
                            map_event: i
                        }
                    })
                }
            };
            c.exports = d
        }, {}
    ],
    34: [
        function(c, f, b) {
            var a = c("o2").Modal,
                h = c("backbone"),
                d = c("../globals/slideshow"),
                g;
            g = h.View.extend({
                resizeCooldown: 200,
                cooldownActive: false,
                slideshowLoaded: false,
                initialize: function(l) {
                    this.options = l || {};
                    var o = this;
                    var i = function() {
                        o.$(".photo-chevron").removeClass("hide");
                        $(".inline-photo").removeClass("show-sm");
                        o.photoGridPlacement = "control"
                    };
                    this.options.photoData.forEach(function(r, q, p) {
                        r.index = q
                    });
                    Airbnb.ERF.deliverExperiment("p3_photo_grid", {
                        control: i,
                        treatment_unknown: i,
                        show_grid_above: function() {
                            var p = o.constructPhotoGrid();
                            if (p) {
                                $("#photo-grid-top").append(p).removeClass("hide")
                            }
                            o.photoGridPlacement = "top"
                        },
                        show_grid_below: function() {
                            var p = o.constructPhotoGrid();
                            if (p) {
                                $("#photo-grid-bottom").append(p).removeClass("hide")
                            }
                            o.photoGridPlacement = "bottom"
                        }
                    });
                    if (this.options.photoData.length > 1) {
                        this.initModal();
                        $(window).on("load", this.initSlideshow.bind(this))
                    }
                    if (!window.matchMedia && this.$el.hasClass("with-photos")) {
                        $(window).on("resize", this.handleWindowResize.bind(this));
                        this.handleWindowResize()
                    }
                    var k = $('[data-hook="cover-img-container"]');
                    var j = k.find('[data-hook="img-sm"]');
                    var n = k.find('[data-hook="img-lg"]').css("background-image");
                    try {
                        n = n.replace(/^url\(["']?/, "").replace(/["']?\)$/, "")
                    } catch (m) {
                        n = null
                    }
                    if (n) {
                        $('<img style="display:none;">').on("load", function() {
                            j.css("background-image", 'url("' + n + '")')
                        }).attr("src", n)
                    }
                },
                constructPhotoGrid: function() {
                    var m = this.options.photoData.length;
                    var l = 6;
                    var k;
                    var j;
                    if (m <= 1) {
                        return null
                    }
                    k = {
                        showSeeMoreLabel: m > l,
                        seeAllPhotosStr: I18n.t("see_all_n_photos", {
                            num_photos: m
                        })
                    };
                    for (j = 1; j < l;
                        ++j) {
                        k["photo" + j] = m > j && this.options.photoData[j]
                    }
                    return $(JST["page3/o2.1/photo_grid"](k, {
                        partials: JST
                    }))
                },
                initModal: function() {
                    this.photoModal = new a("#photo-modal");
                    $(".photo-trigger").on("click", (function(j) {
                        var i = $(j.currentTarget);
                        var k = i.data("index");
                        var l = i.hasClass("photo-grid-photo") ? "PHOTO_GRID" : "INLINE_IMAGE";
                        j.preventDefault();
                        this.slideshow.toIndex(k);
                        this.photoModal.open();
                        this.logEvent({
                            action: "CLICK",
                            target: l,
                            index: k,
                            grid_placement: this.photoGridPlacement
                        })
                    }).bind(this));
                    this.photoModal.on("open", (function() {
                        if (this.photoGridPlacement === "control") {
                            this.$(".photo-chevron").addClass("hide")
                        }
                    }).bind(this));
                    this.photoModal.on("close", (function() {
                        if (this.photoGridPlacement === "control") {
                            this.$(".photo-chevron").removeClass("hide")
                        }
                        this.$(".slideshow-caption-container").removeClass("collapsed");
                        this.logEvent({
                            action: "CLICK",
                            target: "SLIDESHOW_CLOSE"
                        })
                    }).bind(this));
                    this.$(".slideshow-media-caption").hover(this.onThumbnailsMouseover.bind(this), this.collapseThumbnailViewport.bind(this, true))
                },
                initSlideshow: function() {
                    var j, i = {
                            photoData: this.options.photoData
                        }, k = this;
                    if (this.slideshowLoaded) {
                        return
                    }
                    this.slideshowLoaded = true;
                    j = this.$(".slideshow-thumbnails");
                    j.html(JST["page3/o2.1/slideshow_thumbnails"](i));
                    j.find("li:nth-child(2) img").on("load", function() {
                        k.slideshow = new d($("#photo-modal"), {
                            thumbnailWidth: j.find("li:nth-child(2)").width() + 10,
                            onChange: function(n, m, o) {
                                var l = {
                                    index: m
                                };
                                k.addVerifiedLabel(n, m);
                                if (typeof o === "string") {
                                    l.action = "KEYPRESS";
                                    if (o === "keyboardLeft") {
                                        l.target = "KEYBOARD_LEFT"
                                    } else {
                                        l.target = "KEYBOARD_RIGHT"
                                    }
                                } else {
                                    l.action = "CLICK";
                                    o = $(o);
                                    if (o.attr("data-slideshow-prev")) {
                                        l.target = "PREV_BUTTON"
                                    } else {
                                        if (o.attr("data-slideshow-next")) {
                                            l.target = "NEXT_BUTTON"
                                        } else {
                                            if (o.hasClass("slideshow-images")) {
                                                l.target = "SLIDESHOW_IMAGE"
                                            } else {
                                                if (o.hasClass("media-slideshow")) {
                                                    l.target = "THUMBNAIL"
                                                }
                                            }
                                        }
                                    }
                                }
                                k.logEvent(l)
                            }
                        })
                    })
                },
                events: {
                    "click .cover-img": "openCarousel",
                    "click .photo-chevron": "openCarousel",
                    "click .slideshow-images": "onSlideshowClick",
                    "click .slideshow-images img": "carouselPhotoClick"
                },
                logEvent: function(i) {
                    Airbnb.Tracking.logEvent({
                        event_name: "P3",
                        event_data: $.extend({
                            page: "LISTING_PAGE",
                            section: "PHOTO_SLIDESHOW"
                        }, i || {})
                    })
                },
                openCarousel: function() {
                    if (!this.slideshowLoaded) {
                        this.initSlideshow();
                        this.slideshowLoaded = true
                    }
                    if (this.photoModal) {
                        this.photoModal.open();
                        this.collapseThumbnailTimeout = window.setTimeout(this.collapseThumbnailViewport.bind(this, true), 2000);
                        this.logEvent({
                            action: "CLICK",
                            target: "HEADER_IMAGE"
                        })
                    }
                },
                onSlideshowClick: function(i) {
                    if (this.photoModal && !$(i.target).is("img")) {
                        this.photoModal.close();
                        this.logEvent({
                            action: "CLICK",
                            target: "CAROUSEL_OVERLAY"
                        })
                    }
                },
                addVerifiedLabel: function(k, i) {
                    var j = $(".slideshow-thumbnails li").eq(i),
                        l = j.find("a").data("professional");
                    this.$(".slideshow-professional").toggleClass("hide", !l)
                },
                carouselPhotoClick: function(i) {
                    this.slideshow.next(i.currentTarget)
                },
                handleWindowResize: function(i) {
                    var l, k, j = "";
                    if (this.cooldownActive) {
                        return
                    }
                    this.cooldownActive = true;
                    l = $(window);
                    k = l.height();
                    this.$el.removeClass("medium large xlarge");
                    if (k >= 1000) {
                        j = "xlarge"
                    } else {
                        if (k >= 850) {
                            j = "large"
                        } else {
                            if (l.height() >= 700) {
                                j = "medium"
                            }
                        }
                    }
                    this.$el.addClass(j);
                    window.setTimeout((function() {
                        this.cooldownActive = false
                    }).bind(this), this.resizeCooldown)
                },
                onThumbnailsMouseover: function() {
                    if (this.collapseThumbnailTimeout) {
                        window.clearTimeout(this.collapseThumbnailTimeout);
                        this.collapseThumbnailTimeout = null
                    }
                    this.collapseThumbnailViewport(false)
                },
                collapseThumbnailViewport: function(i) {
                    this.$(".slideshow-caption-container").toggleClass("collapsed", i)
                }
            });
            f.exports = g
        }, {
            "../globals/slideshow": 17,
            backbone: "backbone",
            o2: "o2"
        }
    ],
    35: [
        function(d, f, b) {
            var h = d("backbone");
            var a = d("../../lib/airbnb/expandable");
            var g = d("../utils");
            var c = h.View.extend({
                initialize: function(i) {
                    Airbnb.mediator.on("p3::personalize", this.doPersonalization);
                    this.initReviewTranslateButton(i.locale)
                },
                events: {
                    "click .pagination a": "handlePagination"
                },
                handlePagination: function(j) {
                    var i = $(j.currentTarget),
                        k = $(".review-content");
                    k.addClass("loading");
                    $.ajax({
                        url: i.data("href"),
                        success: function(l) {
                            k.removeClass("loading");
                            i.closest(".review-content").html(l).find("img.lazy").lazyload();
                            $("html, body").animate({
                                scrollTop: k.offset().top - 40
                            }, "fast");
                            a()
                        }
                    });
                    return false
                },
                doPersonalization: function(i) {
                    if (i.should_show_review_translations) {
                        $("#review-translate-button-wrapper").removeClass("hide").addClass("show")
                    } else {
                        $("#review-translate-button-wrapper").removeClass("show").addClass("hide")
                    }
                },
                initReviewTranslateButton: function(j) {
                    var m = $("#review-translate-button-wrapper"),
                        l = $("#review-translate-button");
                    if (m.length) {
                        var i = m.find(".review_translate_button_label"),
                            k = m.find(".gBrandingText");
                        i.html(I18n.t("translate_reviews"));
                        $(document).on("click", "#review-translate-button", function() {
                            if ($("#review-translate-button-wrapper").data("is-translated")) {
                                $("#review-translate-button-wrapper").data("is-translated", false);
                                i.html(I18n.t("translate_reviews"));
                                k.removeClass("translated");
                                $(".review-text").each(function(o, q) {
                                    var p = $(q);
                                    p.html(p.data("original-text"))
                                });
                                $(".review-translation-language").each(function(o, q) {
                                    var p = $(q);
                                    p.html("")
                                });
                                $(".review-response-text").each(function(o, q) {
                                    var p = $(q);
                                    p.html(p.data("original-text"))
                                });
                                $(".review-response-language").each(function(o, q) {
                                    var p = $(q);
                                    p.html("")
                                })
                            } else {
                                $("#review-translate-button-wrapper").data("is-translated", true);
                                var n = [];
                                $(".review-text").each(function(o, p) {
                                    n.push($(p).data("review-id"))
                                });
                                g.translate_reviews(j, n)
                            }
                        })
                    }
                }
            });
            f.exports = c
        }, {
            "../../lib/airbnb/expandable": 4,
            "../utils": 24,
            backbone: "backbone"
        }
    ],
    36: [
        function(d, f, b) {
            var c = d("underscore"),
                h = d("o2"),
                i = d("backbone"),
                a = d("../../views/shared/sliding_carousel"),
                g;
            g = i.View.extend({
                initialize: function(j) {
                    this.options = j;
                    Airbnb.mediator.on("p3::dateGuestChange", this.update.bind(this));
                    Airbnb.mediator.on("p3::lazyLoadSections", this.lazyInitialize.bind(this))
                },
                lazyInitialize: function() {
                    var j = $.query.load(window.location.href).keys;
                    this.loggedImpression = false;
                    this.scrollIndex = 0;
                    if (!j.checkin || !j.checkout) {
                        this.update(j)
                    }
                    this.pageScrollTracker()
                },
                events: {
                    "click .carousel-chevron": "scroll",
                    "click .listing": "logClick"
                },
                update: function(j) {
                    this.params = c.defaults(j, {
                        checkin: "",
                        checkout: "",
                        guests: ""
                    });
                    if (h.matchMedia.is("sm")) {
                        this.params.num_results = 3
                    }
                    $.getJSON("/rooms/" + this.options.hostingId + "/similar_listings", this.params, this.handleResults.bind(this))
                },
                logClick: function(m) {
                    var j = $(m.target),
                        k = $(m.currentTarget);
                    if (j.hasClass("icon-heart-alt") || j.hasClass("wish_list_button")) {
                        var l = "similar_listings_wishlist"
                    } else {
                        if (!j.hasClass("host-img")) {
                            var l = "similar_listings_listing"
                        }
                    }
                    this.eventLogger(l, "click", k.attr("data-id"))
                },
                scroll: function(l) {
                    var k = $(l.currentTarget);
                    if (k.hasClass("left")) {
                        var j = "similar_listings_scroll_left"
                    } else {
                        var j = "similar_listings_scroll_right"
                    }
                    this.eventLogger(j, "click", null)
                },
                pageScrollTracker: function() {
                    var k = this;
                    var j = false;
                    $(window).scroll(function() {
                        if (!j) {
                            k.logImpression();
                            j = true;
                            window.setTimeout(function() {
                                j = false
                            }, 500)
                        }
                    });
                    Airbnb.mediator.on("p3::refreshSubtotal", function(l) {
                        k.loggedImpression = false
                    })
                },
                logImpression: function() {
                    var l = this;
                    var j = 200,
                        k = $(document).height() - $("#footer").height() - $(window).height();
                    if ($(window).scrollTop() >= k - j && this.loggedImpression == false) {
                        this.$el.find(".carousel-item:first .listing").each(function(m, o) {
                            var n = o.getAttribute("data-id");
                            l.eventLogger("similar_listings_impression", "impression", n)
                        })
                    }
                },
                eventLogger: function(m, j, k) {
                    var l = {
                        event_name: "similar listings",
                        event_data: {
                            page: "p3",
                            section: m,
                            operation: j,
                            hosting_id: AirbnbRooms.hostingId,
                            recommendation_id: k,
                            checkin: this.params.checkin,
                            checkout: this.params.checkout,
                            guests: this.params.guests
                        }
                    };
                    Airbnb.Tracking.logEvent(l);
                    this.loggedImpression = true
                },
                handleResults: function(o) {
                    var p = o && o.properties,
                        j = o && o.debug,
                        u = {
                            groups: []
                        }, q, l, k, m, n, s;
                    if (!p || !p.length) {
                        this.$el.addClass("hide");
                        return
                    }
                    this.$el.removeClass("hide");
                    n = 0;
                    s = p.length;
                    while (n < s) {
                        q = {
                            index: n / 3,
                            cards: p.slice(n, n + 3)
                        };
                        u.groups.push(q);
                        n += 3
                    }
                    if (this.carousel) {
                        this.carousel.undelegateEvents()
                    }
                    l = JST["p3/similar_listings"]({
                        cardGroups: u
                    }, {
                        partials: JST
                    });
                    this.$el.find(".similar-listings-results").html(l);
                    if (j) {
                        m = JSON.stringify(j, null, 2);
                        k = [];
                        k.push('<div class="page-container-responsive">');
                        k.push("<pre>");
                        k.push(m);
                        k.push("</pre>");
                        k.push("</div>");
                        this.$el.append(k.join(""))
                    }
                    this.carousel = new a({
                        el: this.$el.find(".sliding-carousel")
                    });
                    var r = this;
                    this.listenTo(this.carousel, "change:item", function(w) {
                        var v = w.idx;
                        var x = $(w.item);
                        x.find(".listing").each(function(y, z) {
                            var A = z.getAttribute("data-id");
                            r.eventLogger("similar_listings_impression", "impression", A)
                        })
                    });
                    Airbnb.WishListButton.update()
                }
            });
            f.exports = g
        }, {
            "../../views/shared/sliding_carousel": 46,
            backbone: "backbone",
            o2: "o2",
            underscore: "underscore"
        }
    ],
    37: [
        function(c, d, b) {
            c("../lib/calendar-date-span");
            c("../views/shared/user_flag");
            c("../views/shared/social/social_share_widget");
            c("../vendor/infobox_packed");
            c("../vendor/embedly");
            var a = BootstrapData.get("room_options");
            window.P3 = {
                Room: c("../p3/room"),
                Utils: c("../p3/utils")
            };
            window.AirbnbRooms = c("../p3/legacy_room");
            window.AirbnbRooms.init(a);
            window.roomObj = new window.P3.Room(a);
            var g = c("../inspectlet");
            Airbnb.ERF.deliverExperiment("inspectlet_on_p3", {
                inspectlet_active: function() {
                    g({
                        user_id: Airbnb.userAttributes.id
                    })
                },
                control: function() {},
                treatment_unknown: function() {}
            });
            var f = c("o2");
            if (!f.matchMedia.is("sm")) {
                Airbnb.Tracking.registerScrollDepthTracking()
            }
        }, {
            "../inspectlet": 3,
            "../lib/calendar-date-span": 8,
            "../p3/legacy_room": 19,
            "../p3/room": 20,
            "../p3/utils": 24,
            "../vendor/embedly": 42,
            "../vendor/infobox_packed": 43,
            "../views/shared/social/social_share_widget": 47,
            "../views/shared/user_flag": 48,
            o2: "o2"
        }
    ],
    38: [
        function(c, f, b) {
            var i = function(l, j, k) {
                if (l === k) {
                    throw new ReferenceError(j + " is not defined - temporal dead zone")
                }
                return true
            };
            var h = {};
            var g = function(j, k) {
                if (!(j instanceof k)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            };
            var d = (function() {
                function j(n, l) {
                    for (var k = 0; k < l.length; k++) {
                        var m = l[k];
                        m.enumerable = m.enumerable || false;
                        m.configurable = true;
                        if ("value" in m) {
                            m.writable = true
                        }
                        Object.defineProperty(n, m.key, m)
                    }
                }
                return function(m, k, l) {
                    if (k) {
                        j(m.prototype, k)
                    }
                    if (l) {
                        j(m, l)
                    }
                    return m
                }
            })();
            var a = h;
            a = (function() {
                function j(p, r) {
                    var q = this;
                    g(this, i(j, "PausableTimer", h) && j);
                    this.callback = r;
                    this.targetTime = p;
                    this.spentWaiting = 0;
                    this.startedAt = NaN;
                    this.finished = false;
                    this.timeoutId = null;
                    this.done = function() {
                        q.stop();
                        q.finished = true;
                        q.callback()
                    }
                }
                d(i(j, "PausableTimer", h) && j, [{
                    key: "start",
                    value: function o() {
                        if (this.finished) {
                            throw new Error("Timer finished! Reset to run again")
                        }
                        if (this.timeoutId) {
                            throw new Error("Timer has already started!")
                        }
                        this.startedAt = Date.now();
                        this.timeoutId = setTimeout(this.done, this.targetTime - this.spentWaiting)
                    }
                }, {
                    key: "pause",
                    value: function n() {
                        if (this.finished) {
                            return false
                        }
                        if (!this.timeoutId) {
                            return false
                        }
                        this.stop();
                        return true
                    }
                }, {
                    key: "resume",
                    value: function m() {
                        if (this.finished) {
                            return false
                        }
                        if (this.timeoutId) {
                            return false
                        }
                        this.start();
                        return true
                    }
                }, {
                    key: "stop",
                    value: function k() {
                        if (!this.timeoutId) {
                            throw new Error("Timer has not started")
                        }
                        clearTimeout(this.timeoutId);
                        this.timeoutId = null;
                        this.spentWaiting += Date.now() - this.startedAt;
                        this.startedAt = NaN
                    }
                }, {
                    key: "reset",
                    value: function l() {
                        if (this.timeoutId) {
                            this.stop()
                        }
                        this.spentWaiting = 0;
                        this.finished = false
                    }
                }]);
                return i(j, "PausableTimer", h) && j
            })();
            i(a, "PausableTimer", h), f.exports = a
        }, {}
    ],
    39: [
        function(d, f, c) {
            var b = d("o2").Modal;
            var a = {
                output_format: "jpg",
                image_size: "640x480",
                snapper_size: "tiny",
                camera_security_type: "remember",
                jpg_quality: 80,
                hide_321_btn: 0,
                hide_effect_btn: 1,
                license_domain: "airbnb.com",
                license_key: "4OHNxa1NRZmZGTUFWYjB5VGZrUFZOK0oxZHo3Vk5CdmwrUkc1ajBZQmszbmgzMG96bXZtVUF4TWd5TzE1WVl6RGpSdnNmQzBhYkRjZy8zRWlUTGJWTVU9PQ=="
            };
            var g = AIR.Views.BaseView.extend({
                template: "profile_pic_uploader/templates/confirmation_modal",
                events: {
                    "click .confirmation": "onConfirmation",
                    "click .redo": "onRedo"
                },
                initialize: function() {
                    this.trackingEventName = this.options.tracking_event_name;
                    this.trackingAdditionalInfo = this.options.tracking_additional_info;
                    this.method = this.options.method || ""
                },
                postRender: function() {
                    if (this.method === "take_a_photo") {
                        this.initWebcam();
                        this.toggleInterface();
                        this.openModal()
                    } else {
                        this.fetchPicture().always((function(h) {
                            if (h.id === 0) {
                                this.$(".panel-header, .panel-body, .alert-danger, .confirmation").toggleClass("hide");
                                Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                                    method: this.method,
                                    error_type: "profile_pic_upload_failure"
                                }))
                            }
                            this.openModal()
                        }).bind(this))
                    }
                },
                setUserPic: function(h) {
                    this.modalUserPicUrl = h.large_url;
                    Airbnb.header.setThumbnailUrl(h.large_url)
                },
                fetchPicture: function() {
                    return $.getJSON("/users/profile_pic", (function(i) {
                        var j, h;
                        if (i.id !== 0) {
                            Airbnb.mediator.emit("upsell::updateProfilePic", i.large_url);
                            this.picture_id = i.id;
                            h = this.$(".guest-picture-container");
                            h.addClass("loading");
                            j = this.$(".guest-picture");
                            j.on("load", function() {
                                h.removeClass("loading")
                            });
                            j.attr("src", i.large_url);
                            this.setUserPic(i);
                            Airbnb.Tracking.logEvent({
                                event_name: "edit_profile",
                                event_data: {
                                    operation: "add",
                                    page: "media",
                                    section: "profile_photo",
                                    picture_id: i.id
                                }
                            })
                        }
                    }).bind(this))
                },
                onRedo: function() {
                    this.deletePicture().done(function() {
                        Airbnb.header.setThumbnailUrl(null);
                        Airbnb.mediator.emit("upsell::updateProfilePic", null)
                    })
                },
                deletePicture: function() {
                    return $.ajax({
                        url: "/pictures/delete",
                        data: {
                            picture_id: this.picture_id,
                            picturable_type: "User",
                            picturable_id: Airbnb.userAttributes.id
                        },
                        type: "POST",
                        dataType: "json"
                    })
                },
                openModal: function() {
                    this.modal = new b(this.$el.find(".modal"));
                    this.setElement($(".modal.ib-upsell"));
                    this.delegateEvents();
                    this.modal.open();
                    this.modal.on("close", (function() {
                        this.trigger("modal-closed")
                    }).bind(this));
                    this.$("[data-behavior=modal-close]").on("click", (function() {
                        Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                            section: "ib_upsell_upload_redo",
                            operation: "click",
                            method: this.method
                        }))
                    }).bind(this))
                },
                initWebcam: function() {
                    Snapper.configure(a);
                    Snapper.embed({
                        target: "webcam-container",
                        complete: this.webcamComplete.bind(this)
                    })
                },
                webcamComplete: function(h) {
                    this.fetchPicture().always((function(i) {
                        this.toggleInterface()
                    }).bind(this))
                },
                toggleInterface: function() {
                    var h = this.$(".modal-content");
                    var i = h.css("max-width") == "360px" ? 350 : 360;
                    h.css("max-width", i);
                    this.$(".confirmation-interface, .webcam-interface").toggleClass("hide")
                },
                onConfirmation: function() {
                    this.modal.close();
                    if (this.options.success) {
                        this.options.success()
                    }
                    this.trigger("photo-confirmed");
                    var h = this.extendTrackingInfo({
                        section: "ib_upsell_upload_accept",
                        operation: "click",
                        method: this.method
                    });
                    h.queue = true;
                    Airbnb.Tracking.logEvent(h)
                },
                extendTrackingInfo: function(h) {
                    return {
                        event_name: this.trackingEventName,
                        event_data: $.extend(h, this.trackingAdditionalInfo)
                    }
                }
            });
            if (typeof f !== "undefined" && f.exports) {
                f.exports = g
            } else {
                provide("profile_pic_uploader/confirm_modal", g)
            }
        }, {
            o2: "o2"
        }
    ],
    40: [
        function(b, c, a) {
            var d = b("o2").Tooltip,
                f;
            if (typeof c != "undefined") {
                f = b("./modal.js")
            } else {
                f = enderRequire("profile_pic_uploader/confirm_modal")
            }
            var g = AIR.Views.BaseView.extend({
                template: "profile_pic_uploader/templates/uploader_tooltip",
                className: "tooltip tooltip-top-middle",
                events: {
                    "click .upload-with-facebook": "fbButtonHandler",
                    "click .upload-photo": "uploadHandler",
                    "click .upload-using-webcam": "webcamHandler"
                },
                initialize: function() {
                    this.tooltip = new d(this.el, this.options.trigger, {
                        event: "click"
                    });
                    this.trackingEventName = this.options.tracking_event_name || "pf_pic_uploader";
                    this.trackingAdditionalInfo = this.options.tracking_additional_info || {};
                    this.tooltipOpen = false;
                    this.tooltip.on("show", (function() {
                        this.tooltipOpen = true;
                        Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                            section: "ib_upsell_open_dropdown",
                            operation: "click"
                        }))
                    }).bind(this));
                    this.tooltip.on("hide", (function() {
                        this.tooltipOpen = false;
                        Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                            section: "ib_upsell_close_dropdown",
                            operation: "click"
                        }))
                    }).bind(this));
                    this.isObseleteBrowser = $.browser.msie && parseInt($.browser.version, 10) < 9;
                    this.render()
                },
                getRenderData: function() {
                    var h = true;
                    if (Airbnb.Utils.isAndroid() || Airbnb.Utils.isIos()) {
                        Airbnb.ERF.deliverExperiment("disable_flash_profile_photo_uploading", {
                            control: function() {
                                return h = true
                            },
                            without_flash: function() {
                                return h = false
                            },
                            treatment_unknown: function() {
                                return h = true
                            }
                        })
                    }
                    return {
                        supportsFlash: h
                    }
                },
                postRender: function() {
                    this.containerDiv = this.$(".upload-container")
                },
                hideTooltip: function() {
                    if (this.tooltipOpen) {
                        this.tooltip.hide()
                    }
                },
                webcamHandler: function(h) {
                    Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                        section: "ib_upsell_select_method",
                        operation: "click",
                        method: "take_a_photo"
                    }));
                    this.openConfirmationModal({
                        uploadMethod: "take_a_photo"
                    })
                },
                fbButtonHandler: function(h) {
                    Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                        section: "ib_upsell_select_method",
                        operation: "click",
                        method: "connect_with_facebook"
                    }));
                    this.hideTooltip();
                    Airbnb.Utils.fbButtonClickHandlerFactory("p3 profile pic", this.onFacebookSave.bind(this))(h)
                },
                onFacebookSave: function() {
                    this.tooltip.show();
                    this.openConfirmationModal({
                        uploadMethod: "connect_with_facebook"
                    })
                },
                uploadHandler: function(h) {
                    Airbnb.Tracking.logEvent(this.extendTrackingInfo({
                        section: "ib_upsell_select_method",
                        operation: "click",
                        method: "upload_from_computer"
                    }));
                    this.initIFrame()
                },
                initIFrame: function() {
                    this.iframeContext = this.$("#upload_form_frame")[0].contentWindow;
                    this.iframeContext.ProfilePicWidget = this;
                    this.clearCurrentImg();
                    this.iframeContext.jQuery("#user_profile_pic").on("change", this.uploadFileStart.bind(this));
                    if (this.isObseleteBrowser) {
                        this.$(".upload-photo-button").addClass("hide");
                        this.$("#upload_form_frame").removeClass("hide")
                    } else {
                        var h = this.iframeContext.jQuery("#user_profile_pic");
                        h.trigger("click")
                    }
                },
                clearCurrentImg: function() {
                    this.iframeContext.$('input[type="file"]').val(null)
                },
                uploadFileStart: function(i) {
                    var h = $(i.currentTarget).val();
                    this.containerDiv.addClass("loading");
                    if (this.isValidFile(h)) {
                        this.getUploadForm().submit()
                    } else {
                        this.getUploadForm()[0].reset()
                    }
                },
                isValidFile: function(h) {
                    return h !== "" && h.match(/([^\\]+)\.(jpeg|jpg|png)$/i)
                },
                getUploadForm: function() {
                    return this.iframeContext.jQuery("#ajax_upload_form")
                },
                uploadFileCallback: function() {
                    this.openConfirmationModal({
                        uploadMethod: "upload_from_computer"
                    })
                },
                openConfirmationModal: function(h) {
                    this.containerDiv.removeClass("loading");
                    this.confirmationModalView = new f({
                        success: this.options.success,
                        method: h.uploadMethod || "",
                        tracking_event_name: this.trackingEventName,
                        tracking_additional_info: this.trackingAdditionalInfo
                    });
                    if (this.isObseleteBrowser) {
                        this.containerDiv.addClass("hide")
                    } else {
                        this.$el.parent().append(this.confirmationModalView.el)
                    }
                    this.confirmationModalView.render();
                    this.hideTooltip();
                    this.listenTo(this.confirmationModalView, "modal-closed", this.cleanUpModal);
                    this.listenTo(this.confirmationModalView, "photo-confirmed", function() {
                        this.trigger("upload-finished")
                    })
                },
                cleanUpModal: function() {
                    this.confirmationModalView.cleanup();
                    this.confirmationModalView = null;
                    this.containerDiv.removeClass("hide")
                },
                extendTrackingInfo: function(h) {
                    return {
                        event_name: this.trackingEventName,
                        event_data: $.extend(h, this.trackingAdditionalInfo)
                    }
                }
            });
            if (typeof c != "undefined" && c.exports) {
                c.exports = g
            } else {
                provide("profile_pic_uploader/tooltip", g)
            }
        }, {
            "./modal.js": 39,
            o2: "o2"
        }
    ],
    41: [
        function(c, d, a) {
            var b = c("underscore");

            function f(h, g) {
                this._collection = h;
                this._options = b.extend({}, this._options, g)
            }
            b.extend(f.prototype, {
                _index: 0,
                _collection: null,
                _options: {
                    onChange: false,
                    shouldLoop: true
                },
                _nextIndex: function() {
                    var g = this._index + 1;
                    return this._options.shouldLoop ? g % this._collection.length : g
                },
                _prevIndex: function() {
                    var h = this._index - 1,
                        g = this._collection.length;
                    return this._options.shouldLoop ? (h + g) % g : h
                },
                peek: function(g) {
                    g = typeof g !== "undefined" ? g : this._nextIndex();
                    return this._collection[g]
                },
                hasNext: function() {
                    return this._options.shouldLoop || this._index + 1 < this._collection.length
                },
                hasPrevious: function() {
                    return this._options.shouldLoop || this._index > 0
                },
                next: function(g) {
                    return this.toIndex(this._nextIndex(), g)
                },
                previous: function(g) {
                    return this.toIndex(this._prevIndex(), g)
                },
                curr: function() {
                    return this._collection[this._index]
                },
                toIndex: function(g, h) {
                    if (!this._collection || this._collection.length === 0) {
                        return null
                    }
                    if (!this._options.shouldLoop && (g < 0 || g >= this._collection.length)) {
                        throw "Index out of bounds."
                    }
                    this._index = g;
                    if (typeof this._options.onChange === "function") {
                        this._options.onChange.call(this, this._collection[this._index], this._index, h)
                    }
                    return this.curr()
                }
            });
            if (typeof d !== "undefined") {
                d.exports = f
            } else {
                if (provide) {
                    provide("simple_iterator", f)
                }
            }
        }, {
            underscore: "underscore"
        }
    ],
    42: [
        function(b, c, a) {
            !(function(d) {
                $(window).on("load", function() {
                    LazyLoad.js("https://cdn.embedly.com/widgets/platform.js", function() {
                        var f = $("a.embedly-btn");
                        f.on("click", function(g) {
                            embedly.modal({
                                lang: f.data("embedly-locale")
                            });
                            g.preventDefault()
                        })
                    })
                })
            })()
        }, {}
    ],
    43: [
        function(require, module, exports) {
            Airbnb.Utils.withGooglePlaces(function() {
                eval((function(p, a, c, k, e, r) {
                    e = function(c) {
                        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
                    };
                    if (!"".replace(/^/, String)) {
                        while (c--) {
                            r[e(c)] = k[c] || e(c)
                        }
                        k = [
                            function(e) {
                                return r[e]
                            }
                        ];
                        e = function() {
                            return "\\w+"
                        };
                        c = 1
                    }
                    while (c--) {
                        if (k[c]) {
                            p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c])
                        }
                    }
                    return p
                })('6 8(a){a=a||{};r.s.1P.2j(2,36);2.M=a.1y||"";2.1z=a.1q||J;2.U=a.1H||0;2.G=a.1B||1g r.s.1Y(0,0);2.E=a.Y||1g r.s.2B(0,0);2.X=a.V||t;2.1p=a.1s||"2g";2.1m=a.F||{};2.1G=a.1E||"39";2.N=a.1j||"34://31.r.2W/2Q/2O/2K/1u.2I";3(a.1j===""){2.N=""}2.19=a.1A||1g r.s.1Y(1,1);3(p a.A==="q"){3(p a.18==="q"){a.A=L}v{a.A=!a.18}}2.w=!a.A;2.17=a.1n||J;2.1I=a.2f||"2d";2.15=a.1l||J;2.4=t;2.z=t;2.14=t;2.T=t;2.B=t;2.R=t}8.9=1g r.s.1P();8.9.24=6(){5 i;5 f;5 a;5 d=2;5 c=6(e){e.20=L;3(e.1i){e.1i()}};5 b=6(e){e.2T=J;3(e.1Z){e.1Z()}3(!d.15){c(e)}};3(!2.4){2.4=16.2N("2M");2.1d();3(p 2.M.1v==="q"){2.4.Q=2.I()+2.M}v{2.4.Q=2.I();2.4.1e(2.M)}2.2F()[2.1I].1e(2.4);2.1t();3(2.4.7.C){2.R=L}v{3(2.U!==0&&2.4.Z>2.U){2.4.7.C=2.U;2.4.7.2A="2x";2.R=L}v{a=2.22();2.4.7.C=(2.4.Z-a.13-a.12)+"11";2.R=J}}2.1r(2.1z);3(!2.15){2.B=[];f=["2q","1N","2p","2o","1M","2n","2m","2l","2k"];1o(i=0;i<f.1L;i++){2.B.1K(r.s.u.1c(2.4,f[i],c))}2.B.1K(r.s.u.1c(2.4,"1N",6(e){2.7.1J="2i"}))}2.T=r.s.u.1c(2.4,"2h",b);r.s.u.S(2,"2e")}};8.9.I=6(){5 a="";3(2.N!==""){a="<2c";a+=" 2b=\'"+2.N+"\'";a+=" 2a=12";a+=" 7=\'";a+=" Y: 29;";a+=" 1J: 28;";a+=" 27: "+2.1G+";";a+="\'>"}K a};8.9.1t=6(){5 a;3(2.N!==""){a=2.4.3f;2.z=r.s.u.1c(a,"1M",2.26())}v{2.z=t}};8.9.26=6(){5 a=2;K 6(e){e.20=L;3(e.1i){e.1i()}r.s.u.S(a,"3e");a.1u()}};8.9.1r=6(d){5 m;5 n;5 e=0,H=0;3(!d){m=2.1F();3(m 3d r.s.3c){3(!m.25().3a(2.E)){m.38(2.E)}n=m.25();5 a=m.37();5 h=a.Z;5 f=a.23;5 k=2.G.C;5 l=2.G.1k;5 g=2.4.Z;5 b=2.4.23;5 i=2.19.C;5 j=2.19.1k;5 o=2.21().35(2.E);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.17){3(o.y<(-l+j+b)){H=o.y+l-j-b}v 3((o.y+l+j)>f){H=o.y+l+j-f}}v{3(o.y<(-l+j)){H=o.y+l-j}v 3((o.y+b+l+j)>f){H=o.y+b+l+j-f}}3(!(e===0&&H===0)){5 c=m.33();m.32(e,H)}}}};8.9.1d=6(){5 i,F;3(2.4){2.4.30=2.1p;2.4.7.2Z="";F=2.1m;1o(i 2Y F){3(F.2X(i)){2.4.7[i]=F[i]}}3(p 2.4.7.1f!=="q"&&2.4.7.1f!==""){2.4.7.2V="2S(1f="+(2.4.7.1f*2R)+")"}2.4.7.Y="2P";2.4.7.P=\'1b\';3(2.X!==t){2.4.7.V=2.X}}};8.9.22=6(){5 c;5 a={1a:0,1h:0,13:0,12:0};5 b=2.4;3(16.1w&&16.1w.1X){c=b.2L.1w.1X(b,"");3(c){a.1a=D(c.1W,10)||0;a.1h=D(c.1V,10)||0;a.13=D(c.1U,10)||0;a.12=D(c.1T,10)||0}}v 3(16.2J.O){3(b.O){a.1a=D(b.O.1W,10)||0;a.1h=D(b.O.1V,10)||0;a.13=D(b.O.1U,10)||0;a.12=D(b.O.1T,10)||0}}K a};8.9.2H=6(){3(2.4){2.4.2G.2U(2.4);2.4=t}};8.9.1x=6(){2.24();5 a=2.21().2E(2.E);2.4.7.13=(a.x+2.G.C)+"11";3(2.17){2.4.7.1h=-(a.y+2.G.1k)+"11"}v{2.4.7.1a=(a.y+2.G.1k)+"11"}3(2.w){2.4.7.P=\'1b\'}v{2.4.7.P="A"}};8.9.2D=6(a){3(p a.1s!=="q"){2.1p=a.1s;2.1d()}3(p a.F!=="q"){2.1m=a.F;2.1d()}3(p a.1y!=="q"){2.1S(a.1y)}3(p a.1q!=="q"){2.1z=a.1q}3(p a.1H!=="q"){2.U=a.1H}3(p a.1B!=="q"){2.G=a.1B}3(p a.1n!=="q"){2.17=a.1n}3(p a.Y!=="q"){2.1D(a.Y)}3(p a.V!=="q"){2.1R(a.V)}3(p a.1E!=="q"){2.1G=a.1E}3(p a.1j!=="q"){2.N=a.1j}3(p a.1A!=="q"){2.19=a.1A}3(p a.18!=="q"){2.w=a.18}3(p a.A!=="q"){2.w=!a.A}3(p a.1l!=="q"){2.15=a.1l}3(2.4){2.1x()}};8.9.1S=6(a){2.M=a;3(2.4){3(2.z){r.s.u.W(2.z);2.z=t}3(!2.R){2.4.7.C=""}3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}3(!2.R){2.4.7.C=2.4.Z+"11";3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}}2.1t()}r.s.u.S(2,"2C")};8.9.1D=6(a){2.E=a;3(2.4){2.1x()}r.s.u.S(2,"1Q")};8.9.1R=6(a){2.X=a;3(2.4){2.4.7.V=a}r.s.u.S(2,"2z")};8.9.2y=6(a){2.w=!a;3(2.4){2.4.7.P=(2.w?"1b":"A")}};8.9.2w=6(){K 2.M};8.9.1C=6(){K 2.E};8.9.2v=6(){K 2.X};8.9.2u=6(){5 a;3((p 2.1F()==="q")||(2.1F()===t)){a=J}v{a=!2.w}K a};8.9.2t=6(){2.w=J;3(2.4){2.4.7.P="A"}};8.9.3b=6(){2.w=L;3(2.4){2.4.7.P="1b"}};8.9.2s=6(c,b){5 a=2;3(b){2.E=b.1C();2.14=r.s.u.2r(b,"1Q",6(){a.1D(2.1C())})}2.1O(c);3(2.4){2.1r()}};8.9.1u=6(){5 i;3(2.z){r.s.u.W(2.z);2.z=t}3(2.B){1o(i=0;i<2.B.1L;i++){r.s.u.W(2.B[i])}2.B=t}3(2.14){r.s.u.W(2.14);2.14=t}3(2.T){r.s.u.W(2.T);2.T=t}2.1O(t)};', 62, 202, "||this|if|div_|var|function|style|InfoBox|prototype||||||||||||||||typeof|undefined|google|maps|null|event|else|isHidden_|||closeListener_|visible|eventListeners_|width|parseInt|position_|boxStyle|pixelOffset_|yOffset|getCloseBoxImg_|false|return|true|content_|closeBoxURL_|currentStyle|visibility|innerHTML|fixedWidthSet_|trigger|contextListener_|maxWidth_|zIndex|removeListener|zIndex_|position|offsetWidth||px|right|left|moveListener_|enableEventPropagation_|document|alignBottom_|isHidden|infoBoxClearance_|top|hidden|addDomListener|setBoxStyle_|appendChild|opacity|new|bottom|stopPropagation|closeBoxURL|height|enableEventPropagation|boxStyle_|alignBottom|for|boxClass_|disableAutoPan|panBox_|boxClass|addClickHandler_|close|nodeType|defaultView|draw|content|disableAutoPan_|infoBoxClearance|pixelOffset|getPosition|setPosition|closeBoxMargin|getMap|closeBoxMargin_|maxWidth|pane_|cursor|push|length|click|mouseover|setMap|OverlayView|position_changed|setZIndex|setContent|borderRightWidth|borderLeftWidth|borderBottomWidth|borderTopWidth|getComputedStyle|Size|preventDefault|cancelBubble|getProjection|getBoxWidths_|offsetHeight|createInfoBoxDiv_|getBounds|getCloseClickHandler_|margin|pointer|relative|align|src|img|floatPane|domready|pane|infoBox|contextmenu|default|apply|touchmove|touchend|touchstart|dblclick|mouseup|mouseout|mousedown|addListener|open|show|getVisible|getZIndex|getContent|auto|setVisible|zindex_changed|overflow|LatLng|content_changed|setOptions|fromLatLngToDivPixel|getPanes|parentNode|onRemove|gif|documentElement|mapfiles|ownerDocument|div|createElement|en_us|absolute|intl|100|alpha|returnValue|removeChild|filter|com|hasOwnProperty|in|cssText|className|www|panBy|getCenter|http|fromLatLngToContainerPixel|arguments|getDiv|setCenter|2px|contains|hide|Map|instanceof|closeclick|firstChild".split("|"), 0, {}));
                window.InfoBox = InfoBox
            })
        }, {}
    ],
    44: [
        function(b, c, a) {
            (function(g, i, h) {
                var f = g._,
                    d;
                d = h.VerificationFlow = function(j) {
                    this.options = i.extend({
                        element: null,
                        showIntro: false,
                        onComplete: function() {},
                        metaData: {}
                    }, j);
                    this.init()
                };
                d.prototype = {
                    states: {
                        basic_profile: 1,
                        profile_photo: 2,
                        phone_verification: 3,
                        real_name: 4,
                        full_profile: 5,
                        confirmed_email: 6
                    },
                    eventPrefix: "verification_flow.",
                    statesFlipped: {},
                    numStates: 0,
                    currentState: 0,
                    init: function() {
                        var j = this,
                            l, n, k, m;
                        this.element = i(this.options.element);
                        this.$continue = i(".button-bar a.continue");
                        this.steps = [];
                        this.$(".verification-flow-panel").each(function() {
                            j.steps.push(i(this).data("step"))
                        });
                        if (this.element.length === 0 || this.steps.length === 0) {
                            return
                        }
                        i.each(this.states, function(p, o) {
                            j.statesFlipped[o] = p;
                            j.numStates++
                        });
                        this.sm = new g.SimpleStateMachine(this.states, {
                            context: this
                        });
                        i.each(this.transitionHandlers, function(o, p) {
                            var q = j.states[o];
                            j.sm.addTransitionHandler(q, p)
                        });
                        for (l = this.currentState; l <= this.numStates; l++) {
                            if (this.$panel(this.statesFlipped[this.currentState]).length) {
                                break
                            }
                            this.currentState++
                        }
                        if (this.currentState === this.numStates + 1) {
                            this.finish();
                            return
                        }
                        this.sm.transitionTo(this.currentState);
                        this.$continue.click(function() {
                            j.nextState()
                        });
                        if (this.options.showIntro) {
                            n = this.element.next(".content-row");
                            k = this.$(".verification-flow-intro").show();
                            m = this.$(".verification-flow-panels").hide();
                            this.$("a.start").click(function() {
                                k.hide();
                                m.show();
                                j.start();
                                n.show()
                            });
                            j.trackEvent("show_intro", {
                                numSteps: j.steps.length,
                                steps: j.steps
                            });
                            n.hide()
                        } else {
                            j.start()
                        } if (this.steps.length > 1) {
                            this.$(".verification-flow-step span:eq(1)").text(this.steps.length)
                        } else {
                            this.$(".verification-flow-step").hide()
                        }
                    },
                    start: function() {
                        var j = this;
                        this.trackEvent("start", {
                            numSteps: j.steps.length,
                            steps: j.steps
                        });
                        this.updateStep()
                    },
                    transitionHandlers: {
                        basic_profile: function() {
                            this.$(".verification-flow-panel").hide();
                            this.$panel("basic_profile").show();
                            this.$continue.show()
                        },
                        phone_verification: function() {
                            var j = this;
                            this.$(".verification-flow-panel").hide();
                            this.$panel("phone_verification").show();
                            this.$continue.hide();
                            i.phoneNumberWidget({
                                showAddNumberInitially: true,
                                onVerifyComplete: function() {
                                    j.hasVerifiedPhoneNumber = true;
                                    j.nextState();
                                    return false
                                },
                                resoCode: this.options.resoCode
                            })
                        },
                        profile_photo: function() {
                            this.$(".verification-flow-panel").hide();
                            this.$panel("profile_photo").show();
                            if (this.options.profilePhotoOptions) {
                                ProfilePicWidget.init(this.options.profilePhotoOptions)
                            }
                            this.$continue.show()
                        },
                        real_name: function() {
                            this.$(".verification-flow-panel").hide();
                            this.$panel("real_name").show();
                            this.$(".button-bar").hide();
                            this.$continue.show()
                        },
                        full_profile: function() {
                            this.$(".verification-flow-panel").hide();
                            this.$panel("full_profile").show();
                            this.$continue.show()
                        },
                        confirmed_email: function() {
                            var k = this;
                            this.trackEvent("confirm_email.start");
                            this.$(".verification-flow-panel").hide();
                            var o = this.$panel("confirmed_email");
                            o.show();

                            function j() {
                                i.getJSON("/users/request_new_confirm_email?dead_end=true");
                                k.trackEvent("confirm_email.request_new_email")
                            }
                            j();
                            var n = setInterval(function() {
                                i.getJSON("/verification/has_confirmed_email", function(p) {
                                    if (p.has_confirmed_email) {
                                        l()
                                    }
                                })
                            }, 5000);

                            function l() {
                                k.trackEvent("confirm_email.email_confirmed");
                                clearInterval(n);
                                o.off(".confirmed_email");
                                k.nextState()
                            }
                            this.$continue.hide();
                            var m = o.find(".not-there");
                            o.on("click.confirmed_email", ".resend-link", function(p) {
                                p.preventDefault();
                                i(this).hide();
                                m.show()
                            });
                            o.on("click.confirmed_email", ".sendEmail", function(p) {
                                p.preventDefault();
                                j();
                                m.hide();
                                o.find(".did-resend").show()
                            })
                        }
                    },
                    submitHandlers: {
                        basic_profile: function(l) {
                            if (i.trim(i("#user_profile_info_about").val()) === "") {
                                this.showError("You need to enter a profile description!");
                                h.mediator.emit("track:additional_desc_continue_click_error", {});
                                h.mediator.emit("track:additional_desc_continue_click_error_type", {
                                    label: "You need to enter a profile description!"
                                })
                            } else {
                                var k = this.$panel("basic_profile").find("textarea"),
                                    j = {};
                                j[k.attr("name")] = k.val();
                                j.authenticity_token = i("#authenticity-token").data("authenticity-token");
                                i.ajax({
                                    type: "POST",
                                    url: k.attr("data-url"),
                                    data: j,
                                    error: function(m) {
                                        h.mediator.emit("track:additional_desc_continue_click_error", {});
                                        h.Utils.followRedirectIfPresent(m);
                                        window.location = ""
                                    },
                                    dataType: "JSON"
                                });
                                h.mediator.emit("track:additional_desc_continue_click_success", {});
                                l.call(this)
                            }
                        },
                        phone_verification: function(j) {
                            if (!this.hasVerifiedPhoneNumber) {
                                this.showError("You need to verify your phone number before continuing.")
                            } else {
                                j.call(this)
                            }
                        },
                        profile_photo: function(k) {
                            var j = this;
                            j.setLoading(true);
                            i.getJSON("/users/has_profile_pic", function(l) {
                                j.setLoading(false);
                                if (l.has_profile_pic) {
                                    h.mediator.emit("track:additional_photo_continue_click_success", {});
                                    k.call(j)
                                } else {
                                    h.mediator.emit("track:additional_photo_continue_click_error", {});
                                    h.mediator.emit("track:additional_photo_continue_click_error_type", {
                                        label: "You need to add a profile photo before continuing."
                                    });
                                    j.showError("You need to add a profile photo before continuing.")
                                }
                            })
                        },
                        real_name: function(j) {
                            if (!this.hasCompletedRealName) {
                                this.showError("You need to confirm your real name before continuing.")
                            } else {
                                j.call(this)
                            }
                        },
                        full_profile: function(o) {
                            var m = i('select[name="user[sex]"]');
                            var l = m.val();
                            var j = i.trim(i("#user_profile_info_current_city").val());
                            if (l === "") {
                                this.showError("You need to tell us your gender before continuing.")
                            } else {
                                if (j === "") {
                                    this.showError("You need to tell us your location before continuing.")
                                } else {
                                    var n = {
                                        "user[sex]": l,
                                        "user_profile_info[current_city]": j
                                    };
                                    i("#user-birthdate-container select").each(function(q, r) {
                                        var p = i(r);
                                        n[p.attr("name")] = p.val()
                                    });
                                    var k = i(".verification-flow-panel.full_profile").data("url");
                                    i.post(k, n);
                                    o.call(this)
                                }
                            }
                        },
                        confirmed_email: function(j) {
                            j.call(this)
                        }
                    },
                    showError: function(j) {
                        alert(j)
                    },
                    setLoading: function(j) {
                        if (j) {
                            this.element.addClass("loading");
                            this.$continue.attr("disabled", "disabled")
                        } else {
                            this.element.removeClass("loading");
                            this.$continue.removeAttr("disabled")
                        }
                    },
                    nextState: function() {
                        var j = this,
                            m = this.statesFlipped[this.currentState],
                            n = this.submitHandlers[m],
                            l;
                        for (var k = this.currentState; k <= this.numStates; k++) {
                            l = k + 1;
                            if (this.$panel(this.statesFlipped[l]).length) {
                                break
                            }
                        }
                        if (this.$panel(m).length) {
                            n.call(this, o)
                        } else {
                            o()
                        }

                        function o() {
                            j.trackEvent("step_completed." + m);
                            if (l === j.numStates + 1) {
                                j.finish()
                            } else {
                                j.currentState = l;
                                j.sm.transitionTo(j.currentState);
                                j.updateStep()
                            }
                        }
                    },
                    updateStep: function() {
                        var l = this.$(".verification-flow-panel:visible"),
                            k = l.index() === -1 ? 1 : l.index() + 1,
                            j = this.statesFlipped[this.currentState];
                        this.$(".verification-flow-step span:first").text(k);
                        if (k === this.$(".verification-flow-panel").length) {
                            this.$continue.text(d.translations.finish)
                        }
                        this.trackEvent("step_start." + j)
                    },
                    $: function(j) {
                        return this.element.find(j)
                    },
                    $panel: function(j) {
                        return this.$(".verification-flow-panel." + j)
                    },
                    finish: function() {
                        this.element.addClass("complete");
                        if (this.options.showIntro) {
                            this.$(".verification-flow-panels").hide();
                            this.$(".verification-flow-complete").show()
                        }
                        this.options.onComplete.call(this);
                        this.trackEvent("completed")
                    },
                    trackEvent: function(m, l) {
                        var k = this.eventPrefix + m,
                            j = i.extend({}, this.options.metaData, l, {
                                action: m
                            });
                        h.Tracking.logEvent({
                            event_name: "verification_flow",
                            event_data: j
                        });
                        this.element.trigger(k)
                    },
                    bind: function(k, l) {
                        var j = this.eventPrefix + k;
                        this.element.bind(j, l)
                    }
                };
                d.translations = {
                    finish: "Finish"
                };
                d.addTranslations = function(j) {
                    i.extend(d.translations, j)
                };
                i.fn.verificationFlow = function(k) {
                    k = i.extend({}, k || {}, {
                        element: this
                    });
                    var j = new h.VerificationFlow(k);
                    i(this).data("verificationFlow", j);
                    return this
                }
            })(this, jQuery, Airbnb)
        }, {}
    ],
    45: [
        function(b, c, a) {
            !(function(f) {
                var d = Backbone.View.extend({
                    initialize: function() {
                        _.bindAll(this, "onSubmit", "itemClick");
                        this.$form = this.$("form");
                        this.$modal = this.$(".flag-modal");
                        this.$modalContent = this.$modal.find(".modal-content");
                        if (typeof this.options.afterFlagging === "function") {
                            this.afterFlagging = this.options.afterFlagging
                        }
                        f(this.el).removeClass("hide");
                        f(this.options.triggerEl).removeClass("hide")
                    },
                    events: {
                        "submit form": "onSubmit",
                        "click .flag-modal .flag-thank-you .btn": "afterThankYou",
                        "click .flag-modal .flag-form .btn": "itemClick"
                    },
                    onSubmit: function(j) {
                        var g;
                        j.preventDefault();
                        if (this.$form.find('input[name="user_flag[name]"]').val() === "Other") {
                            g = this.$form.find('[name="user_flag[other_note]"]').val();
                            if (typeof g === "undefined" || g.trim() === "") {
                                return
                            }
                        }
                        this.$modalContent.addClass("loading");
                        f.post(this.$form.attr("action"), this.$form.serialize(), (function(l) {
                            if (l.flag_id != undefined) {
                                this.$form.find("#user_flag_id").val(l.flag_id)
                            }
                            this.afterFlagging && this.afterFlagging()
                        }).bind(this));
                        window.setTimeout((function() {
                            this.$modalContent.removeClass("loading");
                            this.$modal.find(".other-container").addClass("hide").end().find(".panel-footer").addClass("hide").end().find(".panel-body.flag-form").addClass("hide")
                        }).bind(this), 400);
                        var i = this.$modal.find(".flag-thank-you");
                        var h = this.$modal.find(".panel-header.main-header");
                        var k = this.$modal.find(".panel-header.thanks-header");
                        h.addClass("hide");
                        k.removeClass("hide");
                        i.removeClass("hide")
                    },
                    afterThankYou: function(g) {
                        g.preventDefault();
                        this.$modal.data("o2-modal").close()
                    },
                    itemClick: function(j) {
                        var h = f(j.currentTarget),
                            i = h.parent(),
                            g;
                        this.$form.find('input[name="user_flag[name]"]').val(h.data("reason-id"));
                        if (i.hasClass("other")) {
                            g = i.find("textarea");
                            g.val("");
                            i.addClass("clicked");
                            i.find(".other-container").removeClass("hide");
                            this.$modal.find(".panel-footer").removeClass("hide")
                        } else {
                            i.find("textarea").val("");
                            this.$form.submit()
                        }
                        j.preventDefault()
                    }
                });
                if (typeof c !== "undefined") {
                    c.exports = d
                } else {
                    provide("views/shared/flag_widget", d)
                }
            })(jQuery)
        }, {}
    ],
    46: [
        function(d, f, b) {
            var c = d("underscore"),
                h = d("backbone"),
                g, a;
            if (typeof f !== "undefined") {
                g = d("../../simple_iterator")
            } else {
                g = enderRequire("simple_iterator")
            }
            a = h.View.extend({
                initialize: function(i) {
                    var k = this.$el.find(".carousel-item");
                    var j = k.first().outerWidth() * k.length;
                    c.bindAll(this, "onChange");
                    this.iterator = new g(k, {
                        onChange: this.onChange,
                        shouldLoop: this.options.shouldLoop || false
                    });
                    this.$itemList = this.$el.find(".carousel-item-list");
                    this.options = i;
                    this.itemWidth = k.first().outerWidth();
                    this.$el.find(".carousel-item-list").width(j);
                    if (!this.iterator.hasNext()) {
                        this.$el.find(".carousel-chevron.right").addClass("hide")
                    }
                    if (this.options.advanceOnItemClick) {
                        this.$el.on("click", ".carousel-item", this.doScroll.bind(this))
                    }
                },
                events: {
                    "click .carousel-chevron": "doScroll"
                },
                onChange: function(j, i) {
                    this.$itemList.css("left", i * this.itemWidth * -1);
                    this.$el.find(".carousel-chevron.left").toggleClass("hide", !this.iterator.hasPrevious());
                    this.$el.find(".carousel-chevron.right").toggleClass("hide", !this.iterator.hasNext());
                    this.trigger("change:item", {
                        index: i,
                        item: j
                    })
                },
                doScroll: function(i) {
                    i.preventDefault();
                    if ($(i.currentTarget).hasClass("left")) {
                        if (this.iterator.hasPrevious()) {
                            this.iterator.previous()
                        }
                    } else {
                        if (this.iterator.hasNext()) {
                            this.iterator.next()
                        }
                    }
                }
            });
            if (typeof f !== "undefined") {
                f.exports = a
            } else {
                provide("shared/sliding_carousel", a)
            }
        }, {
            "../../simple_iterator": 41,
            backbone: "backbone",
            underscore: "underscore"
        }
    ],
    47: [
        function(b, c, a) {
            !(function(f) {
                var d = Backbone.View.extend({
                    networks: {
                        twitter: ["Twitter", "Tweet"],
                        vkontakte: ["VK"],
                        qzone: ["Qzone"],
                        weibo: ["Sina Weibo"],
                        pinterest: ["Pinterest", "Pin"],
                        facebook: ["Facebook"],
                        googlePlus: ["Google"],
                        email: ["Email"],
                        embedly: ["Embedly"]
                    },
                    newWin: null,
                    sharedViaEmail: false,
                    events: {
                        "click .share-btn": "btnClick"
                    },
                    initialize: function() {
                        this.page = this.options.page;
                        this.truncateOptions()
                    },
                    truncateOptions: function(j) {
                        var g = f(".share-btn"),
                            h = g.length,
                            i = "#social-share-tooltip",
                            k = 4;
                        if (h > k + 1) {
                            f.each(g.slice(k, h), function(m, n) {
                                var o = f(n),
                                    l = o.removeAttr("data-behavior").html(o.attr("title"));
                                f(i).append(f("<li>").append(l))
                            });
                            f(".more-btn").removeClass("hide");
                            f(i + " a").on("click", this.btnClick.bind(this))
                        }
                    },
                    btnClick: function(i) {
                        i.preventDefault();
                        var h = f(i.currentTarget),
                            j = h.attr("href"),
                            g = h.data("network");
                        if (g === "email") {
                            i.preventDefault();
                            this.shareViaEmail(h.data("email-share-link"))
                        } else {
                            if (g !== "embedly") {
                                this.popup(j, 335, 500)
                            }
                        }
                        this.socialTracking(g)
                    },
                    socialTracking: function(g) {
                        var j = "social",
                            i = this.networks[g],
                            h = i[0],
                            l = i[1] || "Share",
                            k = this.page ? this.page : location.pathname;
                        ga("send", j, h, l, k);
                        Airbnb.Tracking.logEvent({
                            event_name: j,
                            event_data: {
                                category: h,
                                action: l,
                                page: k
                            }
                        })
                    },
                    popup: function(j, g, i) {
                        var h = "resizable,location,height=" + g + ",width=" + i;
                        if (this.newWin && !this.newWin.closed) {
                            this.newWin.close()
                        }
                        this.newWin = window.open(j, "newSocialShare", h);
                        this.newWin.focus()
                    },
                    shareViaEmail: function(g) {
                        if (Airbnb.Utils.isUserLoggedIn) {
                            this.showEmailShareModal(g)
                        } else {
                            Airbnb.SignupLoginModal.launchSignup();
                            Airbnb.mediator.on("login", (function() {
                                this.showEmailShareModal(g)
                            }).bind(this))
                        }
                    },
                    showEmailShareModal: function(g) {
                        if (g) {
                            f.get(g, (function(k) {
                                var j = f("<div>").html(k),
                                    h = b("o2").Modal.bind(j),
                                    i = f("#share-via-email").data("o2-modal");
                                i.open();
                                if (!this.sharedViaEmail) {
                                    this.handleEmailShareSubmit(i);
                                    this.sharedViaEmail = true
                                }
                            }).bind(this))
                        }
                    },
                    handleEmailShareSubmit: function(h) {
                        var g = f("#share-via-email form"),
                            i = f(".share-error");
                        g.on("submit", function(j) {
                            j.preventDefault();
                            j.stopPropagation();
                            f.post(g.attr("action"), g.serialize(), function(k) {
                                var l = k.email_share_error;
                                if (l) {
                                    i.html(l)
                                } else {
                                    i.html("");
                                    h.close();
                                    f("#send_to").val("")
                                }
                            }, "json")
                        })
                    }
                });
                if (typeof c !== "undefined") {
                    c.exports = d
                } else {
                    provide("views/shared/social/social_share_widget", d)
                }
            })(jQuery)
        }, {
            o2: "o2"
        }
    ],
    48: [
        function(b, c, a) {
            !(function(f) {
                var d;
                if (typeof c !== "undefined") {
                    d = b("./flag_widget")
                } else {
                    d = enderRequire("views/shared/flag_widget")
                }
                UserFlag = function(g, h) {
                    this.init(g, h)
                };
                f.extend(UserFlag.prototype, {
                    init: function(g, i) {
                        var j = i.parent(),
                            h = this;
                        this.flagLink = j.find(".flag-trigger");
                        this.mainHeader = j.find(".panel-header.main-header");
                        this.thanksHeader = j.find(".panel-header.thanks-header");
                        this.formBody = j.find(".panel-body.flag-form");
                        this.formThanks = j.find(".panel-body.flag-thank-you");
                        this.submitButton = j.find("#user_flag_submit");
                        this.afterFlagged = j.find(".already-flagged");
                        this.message = j.find(".message-text");
                        this.hasMessage = this.message.length > 0;
                        this.flagIdHolder = j.find("#user_flag_id");
                        this.showMessage = this.afterFlagged.find(".show-message");
                        this.hideMessage = this.afterFlagged.find(".hide-message");
                        new d({
                            el: i,
                            triggerEl: this.flagLink,
                            afterFlagging: function() {
                                h.markAsFlagged()
                            }
                        });
                        this.bindLinks();
                        if (g.id != undefined) {
                            this.flagIdHolder.val(g.id);
                            if (!g.redacted) {
                                this.markAsFlagged()
                            }
                        }
                    },
                    undoFlag: function(g) {
                        g.preventDefault();
                        f.ajax({
                            type: "POST",
                            url: "/user_flags/undo",
                            data: {
                                id: this.flagIdHolder.val()
                            },
                            success: (function(h) {
                                this.flagLink.removeClass("hide")
                            }).bind(this)
                        });
                        this.afterFlagged.addClass("hide");
                        if (this.hasMessage) {
                            this.message.removeClass("hide").removeClass("row-space-top-2")
                        }
                    },
                    resetModal: function(g) {
                        this.formBody.removeClass("hide");
                        this.formThanks.addClass("hide");
                        this.thanksHeader.addClass("hide");
                        this.mainHeader.removeClass("hide");
                        this.submitButton.removeAttr("disabled")
                    },
                    markAsFlagged: function() {
                        if (this.hasMessage) {
                            this.message.addClass("hide");
                            this.afterFlagged.removeClass("hide");
                            this.hideMessage.addClass("hide");
                            this.showMessage.removeClass("hide")
                        } else {
                            this.afterFlagged.removeClass("hide")
                        }
                        this.flagLink.addClass("hide")
                    },
                    toggleMessageStatus: function(g) {
                        g.preventDefault();
                        this.showMessage.toggleClass("hide");
                        this.hideMessage.toggleClass("hide");
                        this.message.toggleClass("hide").toggleClass("row-space-top-2")
                    },
                    bindLinks: function() {
                        if (this.hasMessage) {
                            this.showMessage.on("click", this.toggleMessageStatus.bind(this));
                            this.hideMessage.on("click", this.toggleMessageStatus.bind(this))
                        }
                        this.flagLink.on("click", this.resetModal.bind(this));
                        this.afterFlagged.find(".undo_flag").on("click", this.undoFlag.bind(this))
                    }
                })
            })(jQuery)
        }, {
            "./flag_widget": 45
        }
    ]
}, {}, [37]);
