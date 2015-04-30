! function(d, g, c, f) {
    var b = {
        init: function(h) {
            d.fbAsyncInit = this.getFbAsyncInit(h);
            f.FACEBOOK_PERMS = h.scope;
            this.loadSdk(h.sdkUrl)
        },
        loadSdk: function(h) {
            g(d).on("load", function() {
                LazyLoad.js(h)
            })
        },
        getFbAsyncInit: function(h) {
            return function() {
                if (!d.FB) {
                    return
                }
                FB.init({
                    appId: h.appId,
                    status: true,
                    cookie: true,
                    xfbml: true,
                    oauth: true,
                    version: "v2.0"
                });
                FB.getLoginStatus(function(i) {
                    var k = i && i.status !== "unknown" ? i.status : null,
                        j;
                    JSCookie.cookie("fbs", k, {
                        path: "/"
                    });
                    f.mediator.emit("fbLoginStatus");
                    if (JSCookie.cookie("fb_logout")) {
                        FB.logout();
                        j = f.getCookieHost();
                        JSCookie.cookie("fb_logout", null, {
                            domain: j,
                            path: "/"
                        })
                    } else {
                        if (/fb_action_ids=/.test(document.location.search)) {
                            g.post("/users/detect_fb_session")
                        }
                        if (f.userAttributes && !f.Utils.isUserLoggedIn && (i.status === "connected") && a()) {
                            g.post("/users/facebook_auto_login", function(l) {
                                if (l.success) {
                                    f.SignInUp.broadcastLogin()
                                } else {
                                    a(false)
                                }
                            }, "json")
                        }
                    }
                    f.mediator.emit("fbInit")
                })
            }
        },
    };

    function a(h) {
        return !c.store("nofbautologin", h)
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = b
    } else {
        provide("airbnb.facebook", b)
    }
}(window, jQuery, amplify, Airbnb);
(function() {
    this.JST || (this.JST = {});
    this.JST["header/user_profile_image"] = (function() {
        this.JST || (this.JST = {});
        this.JST["header/user_profile_image"] = Handlebars.template(function(c, j, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, d = "function",
                g = this.escapeExpression;
            f += '<img width="28" height="28" src="';
            if (a = b.src) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.src;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + '" alt="">\n';
            return f
        });
        return this.JST["header/user_profile_image"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["header/faq_item"] = (function() {
        this.JST || (this.JST = {});
        this.JST["header/faq_item"] = Handlebars.template(function(c, j, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, d = "function",
                g = this.escapeExpression;
            f += '<li class="header-dropdown-list-item faqs-ajaxed-in">\n  <a href="';
            if (a = b.link) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.link;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + '" class="link-reset menu-item">\n    ';
            if (a = b.title) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.title;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + "\n  </a>\n</li>\n";
            return f
        });
        return this.JST["header/faq_item"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["header/faq_item_for_new_header"] = (function() {
        this.JST || (this.JST = {});
        this.JST["header/faq_item_for_new_header"] = Handlebars.template(function(c, j, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, d = "function",
                g = this.escapeExpression;
            f += '<a href="';
            if (a = b.link) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.link;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + '" class="link-reset menu-item faqs-ajaxed-in">\n  ';
            if (a = b.title) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.title;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + "\n</a>\n";
            return f
        });
        return this.JST["header/faq_item_for_new_header"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["header/nav"] = (function() {
        this.JST || (this.JST = {});
        this.JST["header/nav"] = Handlebars.template(function(k, y, w, p, E) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            w = w || k.helpers;
            E = E || {};
            var x = "",
                m, g, c = "function",
                b = this.escapeExpression,
                t = this,
                a = w.blockHelperMissing;

            function r(G, F) {
                return " logged-in"
            }

            function q(I, H) {
                var F = "",
                    G;
                F += '\n              <img width="28" height="28" src="';
                if (G = w.avatar) {
                    G = G.call(I, {
                        hash: {},
                        data: H
                    })
                } else {
                    G = I.avatar;
                    G = typeof G === c ? G.apply(I) : G
                }
                F += b(G) + '" alt="Avatar">\n            ';
                return F
            }

            function o(G, F) {
                return "home"
            }

            function n(G, F) {
                return "download_the_app"
            }

            function j(G, F) {
                return "sign_up"
            }

            function D(G, F) {
                return "log_in"
            }

            function C(G, F) {
                return "alerts"
            }

            function B(G, F) {
                return "inbox"
            }

            function A(G, F) {
                return " in"
            }

            function z(G, F) {
                return "your_trips"
            }

            function l(G, F) {
                return "discover"
            }

            function i(G, F) {
                return "search"
            }

            function h(G, F) {
                return "how_it_works"
            }

            function f(J, I) {
                var F = "",
                    H, G;
                F += '\n        <ul class="menu-group list-unstyled row-space-3">\n          <li>\n            <a href="/photography/accept" rel="nofollow" class="link-reset menu-item">\n              ';
                G = {
                    hash: {},
                    inverse: t.noop,
                    fn: t.program(28, d, I),
                    data: I
                };
                if (H = w.t) {
                    H = H.call(J, G)
                } else {
                    H = J.t;
                    H = typeof H === c ? H.apply(J) : H
                } if (!w.t) {
                    H = a.call(J, H, G)
                }
                if (H || H === 0) {
                    F += H
                }
                F += "\n            </a>\n          </li>\n        </ul>\n        ";
                return F
            }

            function d(G, F) {
                return "photography"
            }

            function v(G, F) {
                return "help"
            }

            function u(G, F) {
                return "invite_friends"
            }

            function s(G, F) {
                return "logout"
            }
            x += '<div class="nav-mask--sm"></div>\n<div class="nav-content--sm panel text-white';
            m = w["if"].call(y, y.logged_in, {
                hash: {},
                inverse: t.noop,
                fn: t.program(1, r, E),
                data: E
            });
            if (m || m === 0) {
                x += m
            }
            x += '">\n  <div class="nav-header items-logged-in">\n    <div class="nav-profile clearfix">\n      <div class="user-item pull-left">\n        <a class="link-reset user-profile-link" href="/users/show/';
            if (m = w.user_id) {
                m = m.call(y, {
                    hash: {},
                    data: E
                })
            } else {
                m = y.user_id;
                m = typeof m === c ? m.apply(y) : m
            }
            x += b(m) + '">\n          <div class="media-photo media-round user-profile-image">\n            ';
            m = w["if"].call(y, y.logged_in, {
                hash: {},
                inverse: t.noop,
                fn: t.program(3, q, E),
                data: E
            });
            if (m || m === 0) {
                x += m
            }
            x += "\n          </div>\n          ";
            if (m = w.name) {
                m = m.call(y, {
                    hash: {},
                    data: E
                })
            } else {
                m = y.name;
                m = typeof m === c ? m.apply(y) : m
            }
            x += b(m) + '\n        </a>\n      </div>\n      <a href="/users/edit" class="link-reset pull-right hide">\n        <i class="icon icon-cog icon-size-2"></i>\n      </a>\n    </div>\n    <hr>\n  </div>\n  <div class="nav-menu-wrapper">\n    <div class="va-container va-container-v va-container-h">\n      <div class="va-middle nav-menu panel-body">\n        <ul class="menu-group list-unstyled row-space-3">\n          <li>\n            <a href="/" class="link-reset menu-item" rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(5, o, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li>\n            <a class="link-reset menu-item download-our-app"\n               href="';
            if (m = w.app_url) {
                m = m.call(y, {
                    hash: {},
                    data: E
                })
            } else {
                m = y.app_url;
                m = typeof m === c ? m.apply(y) : m
            }
            x += b(m) + '"\n               target="_blank"\n               rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(7, n, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-out">\n            <a data-signup-modal href="/signup_login"\n               class="link-reset menu-item" rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(9, j, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-out">\n            <a data-login-modal href="/login"\n               class="link-reset menu-item" rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(11, D, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-in">\n            <a href="/alerts" rel="nofollow"\n               class="link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(13, C, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-in">\n            <a href="/inbox" rel="nofollow"\n               class="link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(15, B, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n              <i class="alert-count unread-count--sm fade text-center';
            m = w["if"].call(y, y.has_msg, {
                hash: {},
                inverse: t.noop,
                fn: t.program(17, A, E),
                data: E
            });
            if (m || m === 0) {
                x += m
            }
            x += '">\n                ';
            if (m = w.num_msg) {
                m = m.call(y, {
                    hash: {},
                    data: E
                })
            } else {
                m = y.num_msg;
                m = typeof m === c ? m.apply(y) : m
            }
            x += b(m) + '\n              </i>\n            </a>\n          </li>\n          <li class="items-logged-in">\n            <a href="/trips/current" rel="nofollow"\n               class="link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(19, z, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li>\n            <a href="/#discovery-container"\n               class="link-reset menu-item" rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(21, l, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li>\n            <a href="#" rel="nofollow" data-prevent-default\n               class="search-modal-trigger link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(23, i, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-out">\n            <a href="/how-it-works" class="link-reset menu-item" rel="nofollow">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(25, h, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += "\n            </a>\n          </li>\n        </ul>\n        ";
            m = w["if"].call(y, y.show_photography, {
                hash: {},
                inverse: t.noop,
                fn: t.program(27, f, E),
                data: E
            });
            if (m || m === 0) {
                x += m
            }
            x += '\n        <ul class="menu-group list-unstyled row-space-3">\n          <li>\n            <a href="/help" rel="nofollow" class="link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(30, v, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-in">\n            <a href="/invite" rel="nofollow" class="link-reset menu-item">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(32, u, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += '\n            </a>\n          </li>\n          <li class="items-logged-in">\n            <a href="/logout" rel="nofollow"\n               class="link-reset menu-item logout">\n              ';
            g = {
                hash: {},
                inverse: t.noop,
                fn: t.program(34, s, E),
                data: E
            };
            if (m = w.t) {
                m = m.call(y, g)
            } else {
                m = y.t;
                m = typeof m === c ? m.apply(y) : m
            } if (!w.t) {
                m = a.call(y, m, g)
            }
            if (m || m === 0) {
                x += m
            }
            x += "\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";
            return x
        });
        return this.JST["header/nav"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["header/search_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["header/search_modal"] = Handlebars.template(function(f, p, n, j, t) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            n = n || f.helpers;
            t = t || {};
            var o = "",
                g, c, m = this,
                b = "function",
                a = n.blockHelperMissing;

            function l(v, u) {
                return "search"
            }

            function k(v, u) {
                return "where_are_you_going"
            }

            function i(v, u) {
                return "checkin"
            }

            function h(v, u) {
                return "checkout"
            }

            function d(v, u) {
                return "room_type_0"
            }

            function s(v, u) {
                return "room_type_1"
            }

            function r(v, u) {
                return "room_type_2"
            }

            function q(v, u) {
                return "find_a_place"
            }
            o += '<div class="modal"\n     role="dialog"\n     aria-hidden="true"\n     id="search-modal--sm">\n  <div class="modal-table">\n    <div class="modal-cell">\n      <div class="modal-content">\n        <div class="panel-header modal-header">\n          <a href="#" class="modal-close" data-behavior="modal-close"></a>\n          ';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(1, l, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '\n        </div>\n        <div class="panel-body">\n          <div class="modal-search-wrapper--sm">\n            <form action="/s" id="search-form--sm" class="search-form">\n              <input type="hidden" name="source" value="mob"/>\n              <div class="row">\n                <div class="col-sm-12">\n                  <label for="header-location--sm">\n                    <input type="text"\n                           placeholder="';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(3, k, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '"\n                           autocomplete="off"\n                           name="location"\n                           id="header-location--sm"\n                           class="input-large">\n                  </label>\n                </div>\n              </div>\n              <div class="row row-condensed">\n                <div class="col-sm-6">\n                  <label class="checkin">\n                    <input type="text"\n                           name="checkin"\n                           class="checkin input-large"\n                           placeholder="';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(5, i, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '"/>\n                  </label>\n                </div>\n                <div class="col-sm-6">\n                  <label class="checkout">\n                    <input type="text"\n                           name="checkout"\n                           class="checkout input-large"\n                           placeholder="';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(7, h, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '"/>\n                  </label>\n                </div>\n              </div>\n              <div class="row">\n                <label class="col-sm-12">\n                  <div class="select select-block select-large">\n                    <select id="header-search-guests" name="guests">\n                      ';
            if (g = n.localized_guest_options) {
                g = g.call(p, {
                    hash: {},
                    data: t
                })
            } else {
                g = p.localized_guest_options;
                g = typeof g === b ? g.apply(p) : g
            } if (g || g === 0) {
                o += g
            }
            o += '\n                    </select>\n                  </div>\n                </label>\n              </div>\n              <div class="panel room-type-filter--sm row-space-top-1">\n                <div class="panel-body">\n                  <div class="row text-center">\n                    <input type="checkbox"\n                           id="room-type-0--sm"\n                           name="room_types[]"\n                           value="Entire home/apt"/>\n                    <label class="col-sm-4 modal-filter needsclick" for="room-type-0--sm">\n                      <i class="icon icon-entire-place icon-size-2 needsclick"></i>\n                      <br>';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(9, d, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '\n                    </label>\n                    <input type="checkbox"\n                           id="room-type-1--sm"\n                           name="room_types[]"\n                           value="Private room"/>\n                    <label class="col-sm-4 modal-filter needsclick" for="room-type-1--sm">\n                      <i class="icon icon-private-room icon-size-2 needsclick"></i>\n                      <br>';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(11, s, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '\n                    </label>\n                    <input type="checkbox"\n                           id="room-type-2--sm"\n                           name="room_types[]"\n                           value="Shared room"/>\n                    <label class="col-sm-4 modal-filter needsclick" for="room-type-2--sm">\n                      <i class="icon icon-shared-room icon-size-2 needsclick"></i>\n                      <br>';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(13, r, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += '\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class="row row-space-top-2">\n                <div class="col-sm-12">\n                  <button type="submit" class="btn btn-primary btn-large btn-block">\n                    <i class="icon icon-search"></i>\n                    ';
            c = {
                hash: {},
                inverse: m.noop,
                fn: m.program(15, q, t),
                data: t
            };
            if (g = n.t) {
                g = g.call(p, c)
            } else {
                g = p.t;
                g = typeof g === b ? g.apply(p) : g
            } if (!n.t) {
                g = a.call(p, g, c)
            }
            if (g || g === 0) {
                o += g
            }
            o += "\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
            return o
        });
        return this.JST["header/search_modal"]
    }).call(this)
}).call(this);
!(function(c, b) {
    var a = Backbone.View.extend({
        template: "header/nav",
        events: {
            "click .search-modal-trigger": "openSearchModal",
            "click .nav-mask--sm, .menu-item": "toggle",
            "click .logout": "logout"
        },
        isOpen: false,
        isRendered: false,
        isUnderSM: false,
        initialize: function() {
            if (!c.isO20) {
                var d = require("o2").matchMedia;
                d.on("sm", this.handleResizing.bind(this))
            }
        },
        render: function() {
            this.$el.html(JST[this.template](this.data()));
            this.isRendered = true;
            if (!this.getProfileImg()) {
                c.Utils.fetchProfileImg().done(this.updateProfileImg.bind(this))
            }
            return this
        },
        handleResizing: function(d) {
            if (d.matches) {
                if (!this.isRendered) {
                    this.render();
                    this.registerEvents()
                }
                this.isUnderSM = true
            } else {
                this.close();
                this.isUnderSM = false
            }
        },
        openSearchModal: function() {
            c.mediator.emit("search-modal:open")
        },
        registerEvents: function() {
            c.mediator.on("login", this.render.bind(this));
            c.mediator.on("logout", this.render.bind(this));
            c.mediator.on("flyout:open", this.open.bind(this));
            c.mediator.on("flyout:close", this.close.bind(this));
            c.mediator.on("flyout:toggle", this.toggle.bind(this))
        },
        data: function() {
            var f = c.userAttributes;
            var d = c.Utils;
            return {
                app_url: this.getAppUrl(),
                name: f.name || I18n.t("name"),
                user_id: f.id || 0,
                num_msg: f.num_msg || 0,
                logged_in: d.isUserLoggedIn,
                has_msg: typeof f.num_msg !== "undefined" && f.num_msg !== 0,
                avatar: this.getProfileImg(),
                show_photography: d.canAccessPhotography()
            }
        },
        getProfileImg: function() {
            return amplify.store("header_userpic_url")
        },
        updateProfileImg: function(d) {
            this.$(".user-profile-image img").attr("src", d)
        },
        getAppUrl: function() {
            var f = I18n.language();
            var d = a.APP_URLS.ios;
            if (c.Utils.isAndroid()) {
                if (I18n.country === "CN") {
                    d = a.APP_URLS.android_cn
                } else {
                    d = a.APP_URLS.android
                }
            }
            d = d.replace(/LANGUAGE/g, f);
            return d
        },
        logout: function(d) {
            d.preventDefault();
            c.SignInUp.doLogout()
        },
        open: function() {
            if (this.isUnderSM && !this.isOpen) {
                b(document.body).addClass("slideout");
                this.isOpen = true
            }
        },
        close: function() {
            if (this.isUnderSM && this.isOpen) {
                b(document.body).removeClass("slideout");
                this.isOpen = false
            }
        },
        toggle: function() {
            if (this.isOpen) {
                this.close()
            } else {
                this.open()
            }
        }
    }, {
        APP_URLS: {
            ios: "http://r.airbnb.com/l.c.hsjx?l=LANGUAGE",
            android: "http://r.airbnb.com/l.c.hsjz?hl=LANGUAGE",
            androidCn: "http://r.airbnb.com/l.c.hsjB?hl=LANGUAGE"
        }
    });
    provide("views/flyout_view", a)
})(window.Airbnb, jQuery);
!(function(c, b) {
    var a = Backbone.View.extend({
        template: "header/search_modal",
        _modal: null,
        isUnderSM: false,
        isAutocompleteReady: false,
        initialize: function() {
            if (!c.isO20) {
                var d = require("o2").matchMedia;
                d.on("sm", this.handleResizing.bind(this))
            }
        },
        render: function() {
            this.$el.html(JST[this.template](this.data()));
            if (!c.isO20 && !this._modal) {
                var d = require("o2").Modal;
                this._modal = d.bind(this.$el)[0]
            }
            return this
        },
        handleResizing: function(d) {
            if (d.matches) {
                if (!this.isRendered) {
                    this.render();
                    this.setup()
                }
                this.isUnderSM = true
            } else {
                this.close();
                this.isUnderSM = false
            }
        },
        setup: function() {
            this.registerEvents();
            this.setupForm()
        },
        registerEvents: function() {
            var d = this;
            c.mediator.on("search-modal:open", this.open.bind(this));
            c.mediator.on("search-modal:close", this.close.bind(this));
            c.mediator.on("search-modal:update", function(i) {
                if (!i) {
                    return
                }
                var g = i.checkin;
                var f = i.checkout;
                var j = i.guests;
                var h = i.room_types;
                g = g || "";
                f = f || "";
                j = j || 1;
                h = h || [];
                d.$('input[name="checkin"]').val(g);
                d.$('input[name="checkout"]').val(f);
                d.$('select[name="guests"]').val(j);
                d.$('input[name="room_types[]"]').attr("checked", false);
                h.forEach(function(k) {
                    d.$('input[name="room_types[]"][value="' + k + '"]').attr("checked", true)
                })
            });
            c.mediator.on("search-modal:update_location", function(f) {
                f = f || "";
                d.$('input[name="location"]').val(f)
            })
        },
        data: function() {
            return {
                localized_guest_options: a.getGuestOptionHtml()
            }
        },
        open: function() {
            if (!this._modal || !this.isUnderSM) {
                return
            }
            this._modal.open();
            _.defer((function() {
                this.initGPlaces();
                this.$("#header-location--sm").focus()
            }).bind(this))
        },
        close: function() {
            if (!this._modal || !this.isUnderSM) {
                return
            }
            this._modal.close()
        },
        initGPlaces: function() {
            c.Utils.loadGooglePlaces();
            c.Utils.withGooglePlaces(this.setupAutocomplete.bind(this))
        },
        setupAutocomplete: function() {
            if (this.isAutocompleteReady) {
                return
            }
            this.autoComplete = new google.maps.places.Autocomplete(this.$("#header-location--sm").get(0), {
                types: ["geocode"]
            });
            google.maps.event.addListener(this.autoComplete, "place_changed", (function() {
                c.mediator.emit("place_changed", this.serializeData(this.$searchForm))
            }).bind(this));
            this.isAutocompleteReady = true
        },
        setupForm: function() {
            this.$searchForm = this.$("#search-form--sm");
            this.$searchForm.airbnbInputDateSpan();
            this.$searchForm.on("submit", (function(d) {
                c.mediator.emit("submit", this.serializeData(this.$searchForm, d));
                if (!d.isDefaultPrevented()) {
                    d.preventDefault();
                    c.SearchUtils.handleFormSubmit(d.currentTarget)
                }
            }).bind(this))
        },
        serializeData: function(d, f) {
            return {
                data: d.serializeObject(),
                event: f
            }
        }
    }, {
        getGuestOptionHtml: function() {
            var d = [],
                f;
            for (f = 1; f <= 16; f++) {
                d.push(f)
            }
            return d.map(function(g) {
                var h = I18n.t("shared.x guests", {
                    smart_count: g
                });
                return '<option value="' + g + '">' + h + "</option>"
            }).join("")
        }
    });
    provide("views/search_modal_view", a)
})(window.Airbnb, jQuery);
!(function(i, h, g) {
    var b = g.require("views/search_modal_view");
    var f = g.require("views/flyout_view");
    var d;
    var c;
    if (!i.isO20) {
        d = g.require("o2");
        c = d.matchMedia
    }
    var a = Backbone.View.extend({
        events: {
            "click .search-modal-trigger": "openSearchModal",
            "click .burger--sm": "toggleFlyout"
        },
        initialize: function() {
            if (c) {
                c.on("sm", (function(j) {
                    if (j.matches && !this.initialized) {
                        this.render();
                        this.initialized = true
                    }
                }).bind(this))
            }
        },
        render: function() {
            this.$action = this.$(".action--sm");
            this.$search = this.$(".search-btn--sm");
            this.$modalContainer = this.$(".search-modal-container");
            this.$flyoutContainer = this.$(".nav--sm");
            this.initModal();
            this.initFlyout();
            this.registerEvents();
            return this
        },
        registerEvents: function() {
            i.mediator.on("header:render_action", this.renderAction.bind(this));
            i.mediator.on("header:render_search", this.renderSearch.bind(this))
        },
        initModal: function() {
            new b({
                el: this.$modalContainer
            })
        },
        initFlyout: function() {
            new f({
                el: this.$flyoutContainer
            })
        },
        toggleFlyout: function() {
            i.mediator.emit("flyout:toggle")
        },
        openSearchModal: function() {
            i.mediator.emit("search-modal:open")
        },
        renderAction: function(j) {
            this.$action.empty().append(j)
        },
        renderSearch: function(j) {
            this.$search.empty().append(j)
        }
    });
    provide("views/small_header_view", a)
})(window.Airbnb, jQuery, window);
! function(k, h) {
    if (!k.Airbnb) {
        k.Airbnb = {}
    }
    var q = k.Airbnb;
    var j = require("std::emitter");
    var z = require("o2-flash");
    var c = require("airbnb.facebook");
    var n = require("views/small_header_view");
    var g = false;
    provide("airbnb", q);
    h.extend(q, {
        defaultOptions: {
            isUserLoggedIn: false,
            locale: null
        },
        initHooks: [m, t, C, f, d, B, l, x, w, b, p, y, s, u, a],
        addInitHook: function(D) {
            if (g) {
                D()
            } else {
                q.initHooks.push(D)
            }
        },
        init: function() {
            var D = BootstrapData.get("layout-init");
            q.mediator = new j();
            q.setOptions(D);
            if (q.userAttributes.name) {
                q.setOptions({
                    isUserLoggedIn: true
                })
            }
            h(document).trigger("userattributeschange.airbnb", q.userAttributes);
            _.each(q.initHooks, function(E) {
                E()
            });
            g = true;
            h(k).load(v)
        },
        getCookieHost: r,
        doConversions: v,
        getCSRFToken: o,
        onLogin: function(D) {
            if (q.userAttributes.hasOwnProperty("id")) {
                D()
            } else {
                q.SignInUp.addLoginCallback(D)
            }
        },
        setOptions: function(D) {
            if (D && D.isUserLoggedIn != null) {
                q.Utils.isUserLoggedIn = D.isUserLoggedIn
            }
            q.options = h.extend({}, q.defaultOptions, q.options, D)
        },
        StringValidator: {
            Regexes: {
                url: /(https?)|(webcal):\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?/,
                email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                date: /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
                phone: /((.*)?\d(.*?)){10,15}/
            },
            validate: function(D, E) {
                if (D === undefined || E === undefined || typeof E != "string") {
                    return false
                }
                return (E.match(q.StringValidator.Regexes[D]) !== null)
            }
        }
    });

    function r() {
        var F, G, D, E;
        E = document.location.hostname.split(".");
        D = E.length;
        G = _.indexOf(E, "airbnb");
        F = "." + E.slice(G, D).join(".");
        return F
    }

    function v() {
        var F;
        if (JSCookie.cookie("conversion_account_created")) {
            dataLayer.push({
                event: "user_sign_up"
            });
            ga("send", "event", "Users", "Signup", JSCookie.cookie("affiliate") + "_" + q.userAttributes.id);
            F = r();
            JSCookie.cookie("conversion_account_created", null, {
                domain: F,
                path: "/"
            })
        }
        if (JSCookie.cookie("reservation_accepted")) {
            var D = JSCookie.cookie("reservation_accepted").split("_");
            dataLayer.push({
                event: "new_reservation",
                reservation_code: D[0],
                total_price: D[1],
                num_of_nights: D[2]
            });
            F = r();
            JSCookie.cookie("reservation_accepted", null, {
                domain: F,
                path: "/"
            })
        }
        if (JSCookie.cookie("raw_listing_created")) {
            var E = JSCookie.cookie("raw_listing_created");
            dataLayer.push({
                event: "raw_listing_created",
                hosting_id: E
            });
            F = r();
            JSCookie.cookie("raw_listing_created", null, {
                domain: F,
                path: "/"
            })
        }
    }

    function p() {
        if (!h.fn.placeholder.input || !h.fn.placeholder.textarea) {
            h("input[placeholder], textarea[placeholder]").placeholder()
        }
    }

    function o() {
        return JSCookie.cookie("_csrf_token")
    }

    function u() {
        function I(N) {
            return N ? 1 : 0
        }
        if (typeof dataLayer === "undefined") {
            return
        }
        var M = q.options;
        var K = q.userAttributes;
        var J = I(M.isUserLoggedIn);
        var H = I(K.is_active_host);
        var G = k.location.hostname;
        var D = JSCookie.cookie("bev");
        var E = I(q.Utils.hashCode(D) % 2 == 0);
        var F = {
            l: M.language,
            d: G,
            au: J,
            ah: H,
            ra: E
        };
        dataLayer.push({
            google_tag_params: F,
            l: M.language,
            d: G,
            au: J,
            ah: H,
            ra: E
        })
    }

    function y() {
        if (q.userAttributes.update_cached) {
            h(k).load(A)
        }
    }

    function A() {
        h.get("/home/update_cached", function(E) {
            for (var D in E) {
                h("#" + D).after(E[D])
            }
        })
    }

    function s() {
        if (q.userAttributes.erf_override) {
            h(k).load(i)
        }
    }

    function i() {
        h.get("/home/erf_override", function(E) {
            for (var D in E) {
                h("#" + D).after(E[D])
            }
        })
    }

    function m() {
        var E = BootstrapData.get("i18n-init");
        var D = BootstrapData.get("phrases");
        I18n.init(E.data);
        I18n.extend(D);
        k.moment.locale(k.getMomentLocale(I18n.language(), I18n.locale()))
    }

    function t() {
        q.LangCurrPicker.init();
        q.header = new q.Header();
        new n({
            el: h(".header--sm")
        });
        var D = new q.SmartBanner();
        D.renderIfShouldShow()
    }

    function C() {
        var D = BootstrapData.get("facebook-init");
        if (D.enabled) {
            c.init(D)
        }
    }

    function f() {
        k.___gcfg = {
            lang: q.options.locale,
            parsetags: "onload"
        }
    }

    function d() {
        var F = q.userAttributes.id || null;
        var H = amplify.store("hash_user_id");
        var G = h(".airbnb-mystique");
        var D = BootstrapData.get("search_geo_info");
        q.Tracking.init();
        q.Tracking.addDefaultContext();
        q.Tracking.addContext(_.extend(q.options.tracking_context, {
            dimensions: q.Utils.getScreenDimensions(),
            hash_user_id: H,
            rendered_on: G.toArray().reduce(function(J, I) {
                return h(I).data("mystique-render") || J
            }, G.length ? "mystique" : "monorail"),
            user_id: F,
            viewport: q.Utils.getScreenSize(),
            canonical_url: q.Utils.getEnglishCanonicalUrl()
        }));
        var E = {
            source: "monorail"
        };
        if (D) {
            _.extend(E, D)
        }
        q.Tracking.logEvent({
            event_name: "impression",
            event_data: E
        });
        q.Utils.watchBreakpointForTracking()
    }

    function B() {
        var D = h.query.keys.alsm;
        if (!q.options.isUserLoggedIn && D) {
            var E = {
                urlParams: "alsm=" + D
            };
            q.SignupLoginModal.launchSignup(E)
        }
    }

    function l() {
        q.Api.configure(q.options.api_config)
    }

    function x() {
        var D = q.options.deep_link;
        if (D) {
            I18n.extend(D.phrases);
            new q.DeepLink(D.data).start()
        }
    }

    function w() {
        if (!q.options.no_flash_alerts) {
            z.display()
        }
    }

    function b() {
        if (q.Utils.isAdmin()) {
            var D = BootstrapData.get("translation_feedback");
            if (D) {
                D.userType = q.Utils.isAdmin() ? "Employee" : "User";
                D.userEmail = q.userAttributes.id || "";
                h.oneskyFeedbackBootstrap(D)
            }
        }
    }

    function a() {
        if ("ontouchstart" in document.documentElement) {
            try {
                FastClick.attach(document.body)
            } catch (D) {}
        }
    }
}(window, jQuery);
window.Airbnb = window.Airbnb || {};
(function(f, d) {
    function g() {
        Tracking.rum.mark("start_map_library_loading")
    }

    function b() {
        Tracking.rum.mark("end_map_library_loading");
        Tracking.rum.measure("map_library_loading", "start_map_library_loading", "end_map_library_loading")
    }

    function a(k, i, j) {
        var h = null;
        try {
            var m = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
            h = Math.round(m.now());
            d.Tracking.logEvent({
                event_name: "resource_timing",
                event_data: {
                    page: k,
                    payload: [{
                        type: "mapbox_resources",
                        name: i,
                        duration: j < 0 ? 0 : h - j,
                        start_time: j < 0 ? h : j
                    }]
                }
            })
        } catch (l) {}
        return h
    }
    var c = !d.isO20 && require("o2").matchMedia;
    d.Utils = {
        isUserLoggedIn: false,
        promises: {},
        fb_status: function() {
            return JSCookie.cookie("fbs")
        },
        fbInitHasPublishAction: function() {
            if (d.Utils.fb_status() !== "not_connected") {
                FB.api({
                    method: "fql.query",
                    query: "SELECT publish_actions FROM permissions WHERE uid = me()"
                }, function(h) {
                    d.Utils.fbHasPublishAction = h && h[0] && h[0].publish_actions === "1"
                })
            }
        },
        isDev: function() {
            if (typeof d.Utils._isDev === "undefined") {
                d.Utils._isDev = f("body").hasClass("development")
            }
            return d.Utils._isDev
        },
        isTest: function() {
            if (typeof d.Utils._isTest === "undefined") {
                d.Utils._isTest = f("body").hasClass("test")
            }
            return d.Utils._isTest
        },
        isAdmin: function() {
            return !!(d.userAttributes && d.userAttributes.is_admin)
        },
        canAccessPhotography: function() {
            return !!(d.userAttributes && d.userAttributes.can_access_photography)
        },
        isAndroid: function() {
            return /Android/i.test(navigator.userAgent)
        },
        isIos: function() {
            return /iPhone|iPad|iPod/g.test(navigator.userAgent)
        },
        isIphone: function() {
            return /iPhone|iPod/g.test(navigator.userAgent)
        },
        getEnglishCanonicalUrl: function() {
            var i = f("link[rel=alternate][hreflang=en]").attr("href") || window.location.pathname + window.location.search;
            var h = /\/\/[^\/]+(\/.*)/;
            if (h.test(i)) {
                i = h.exec(i)[1]
            }
            return i
        },
        getCanonicalUrl: function() {
            return f("link[rel=canonical]").attr("href") || window.location.protocol + "//" + d.options.canonical_host + window.location.pathname + window.location.search
        },
        changeLocale: function(h) {
            var i = window.location.pathname + "?" + f.param(f.query.load(window.location.href).set("locale", h).keys) + window.location.hash;
            window.location.replace(i)
        },
        changeCurrency: function(h, i) {
            f.post("/users/change_currency", {
                new_currency: h
            }, i)
        },
        followRedirectIfPresent: function(j) {
            try {
                var h = f.parseJSON(j.responseText);
                if (typeof h.redirect !== "undefined") {
                    window.location = h.redirect
                }
            } catch (i) {}
        },
        decode: function(h) {
            return f("<div/>").html(h).text()
        },
        log: function() {
            var h = window.console;
            if (h && h.log && d.Utils.isDev()) {
                var i;
                if (typeof h.log === "object") {
                    i = function() {
                        for (var k = 0, j = arguments.length; k < j; k++) {
                            h.log(arguments[k])
                        }
                    }
                } else {
                    i = h.log
                }
                i.apply(h, arguments)
            }
        },
        resetUser: function() {
            d.initUserAttributes();
            d.setOptions({
                isUserLoggedIn: d.userAttributes.name != null
            })
        },
        fbButtonClickHandlerFactory: function(i, k, j) {
            function h(l) {
                ga("send", "event", "Authenticate", l, i)
            }
            return function(m) {
                var l = f(m.currentTarget);
                m.preventDefault();
                h("FacebookClick");
                FB.login(function(o) {
                    var n;
                    if (o.authResponse) {
                        h("FacebookLogin");
                        if (d.Utils.isUserLoggedIn && (l.data("ajax_populate") || l.data("populate_uri"))) {
                            n = l.data("populate_uri") || "/users/populate_from_facebook";
                            d.Reauth.submit({
                                type: "POST",
                                url: n,
                                dataType: "JSON"
                            }).then(k).fail(j)
                        } else {
                            k()
                        }
                    } else {
                        h("FacebookDeny");
                        j && j()
                    }
                }, {
                    scope: d.FACEBOOK_PERMS
                })
            }
        },
        sanitizeFilename: function(h) {
            if (typeof h !== "string") {
                return ""
            }
            return h.replace(/[^\w.-]/g, "")
        },
        getGoogleMapsUrl: function(j) {
            var i = BootstrapData.get("layout-init").google_maps_url;
            var h = f.param(j || {});
            if (h) {
                i += "&" + h
            }
            return i
        },
        getOpenStreetMapUrl: function() {
            return BootstrapData.get("layout-init").open_street_map_url
        },
        loadGooglePlaces: function() {
            if (typeof google === "undefined" || !google.maps || !google.maps.places) {
                if (typeof window.onGoogleMapsPlacesLoad === "undefined") {
                    window.onGoogleMapsPlacesLoad = function() {
                        b();
                        d.mediator.emit("google.maps.places.load");
                        window.onGoogleMapsPlacesLoad = undefined
                    };
                    g();
                    LazyLoad.js(this.getGoogleMapsUrl({
                        callback: "onGoogleMapsPlacesLoad"
                    }))
                }
            }
        },
        withGooglePlaces: function(h) {
            if (typeof google === "undefined" || !google.maps || !google.maps.places) {
                d.mediator.on("google.maps.places.load", h)
            } else {
                h()
            }
        },
        loadOpenStreetMap: function(k) {
            if (typeof L === "undefined" || !L.mapbox) {
                var l = function() {
                    L.mapbox.accessToken = "pk.eyJ1IjoiZmVuZ21pbmciLCJhIjoibWhFbDJBRSJ9.MBwq-31G5_deqCtWgXpRDQ";
                    b();
                    d.mediator.emit("openstreetmap.load")
                };
                var j = f.Deferred(),
                    i = f.Deferred();
                g();
                var h = a(k, "loading_start", -1);
                LazyLoad.js(this.getOpenStreetMapUrl(), function() {
                    j.resolve();
                    a(k, "js_loaded", h)
                });
                LazyLoad.css("https://api.tiles.mapbox.com/mapbox.js/v2.1.3/mapbox.css", function() {
                    i.resolve();
                    a(k, "css_loaded", h)
                });
                f.when(j, i).done(l)
            }
        },
        withOpenStreetMap: function(h) {
            if (typeof L === "undefined" || !L.mapbox) {
                d.mediator.on("openstreetmap.load", h)
            } else {
                h()
            }
        },
        hashCode: function(m) {
            var l = 0,
                j, k, h;
            if (!m) {
                return l
            }
            for (j = 0, h = m.length; j < h; j++) {
                k = m.charCodeAt(j);
                l = (l << 5) - l + k;
                l = l & l
            }
            return l
        },
        preload: function(k) {
            var h = k.length,
                l = document,
                j = ("fileSize" in l),
                m;
            while (h--) {
                if (j) {
                    new Image().src = k[h];
                    continue
                }
                m = l.createElement("object");
                m.data = k[h];
                m.width = m.height = 0;
                m.style.position = "absolute";
                l.body.appendChild(m)
            }
        },
        preloadGoogleMapsCommon: function() {
            d.Utils.loadGooglePlaces();
            d.Utils.withGooglePlaces(function() {
                var i = new google.maps.Map(f("#gmap-preload")[0]),
                    h = new google.maps.OverlayView();
                h.setMap(i);
                new google.maps.Geocoder();
                new google.maps.Marker()
            })
        },
        readCookie: function(i) {
            var h = new RegExp("(" + i + ")=([^;]*)").exec(document.cookie);
            if (!h) {
                return ""
            }
            return decodeURIComponent(h[2]).replace(/\+/g, " ")
        },
        getScreenDimensions: function() {
            var j = f(window);
            var i = j.width();
            var h = j.height();
            return {
                width: i,
                height: h
            }
        },
        getScreenSize: function() {
            if (!c) {
                return "unknown"
            }
            if (c.is("lg")) {
                return "lg"
            } else {
                if (c.is("md")) {
                    return "md"
                }
            }
            return "sm"
        },
        watchBreakpointForTracking: function() {
            if (!c) {
                return
            }["sm", "md", "lg"].forEach(function(h) {
                c.on(h, function(i) {
                    if (i.matches) {
                        d.Tracking.addContext({
                            viewport: h
                        })
                    }
                })
            })
        },
        setUserPreference: function(j, i, h) {
            h = h || {};
            h.data = JSON.stringify([{
                op: "replace",
                path: j,
                value: i
            }]);
            d.Api.patch("/v2/users/" + d.userAttributes.id, h)
        },
        saveMemory: function(h, i) {
            if (h == null) {
                throw new TypeError("Memory type " + h + " not found.")
            }
            return d.Api.post("/v2/memories", {
                data: {
                    memory_type: h,
                    reference_id: i
                }
            })
        },
        generatePerfData: function(l, k, h) {
            var i = l.duration;
            var j = l.duration >= 0 ? 1 : 0;
            if (i < 0) {
                i = h - l.startTime
            }
            return {
                type: k,
                name: l.name,
                duration: Math.round(i),
                start_time: Math.round(l.startTime),
                completed: j
            }
        },
        selectResourcesForPattern: function(n, m) {
            var k = [];
            try {
                var p = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
                if (typeof p.getEntriesByType === "function") {
                    var j = p.now();
                    var h = p.getEntriesByType("resource");
                    for (var l = 0; l < h.length;
                        ++l) {
                        if (n.test(h[l].name)) {
                            k.push(d.Utils.generatePerfData(h[l], m, j))
                        }
                    }
                }
            } catch (o) {}
            return k
        },
        selectJavascriptResources: function() {
            return d.Utils.selectResourcesForPattern(/.*\.js$/, "js")
        },
        selectCSSResources: function() {
            return d.Utils.selectResourcesForPattern(/.*\.css$/, "css")
        },
        selectImagesForPattern: function(h) {
            return d.Utils.selectResourcesForPattern(h, "image")
        },
        computeAggregatesForResources: function(v) {
            var m = "not_supported";
            try {
                var u = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
                if (typeof u.getEntriesByType == "function") {
                    var l = u.now();
                    var p = 0;
                    var h = 0,
                        s = 0,
                        k = 0,
                        n = 0;
                    var r = u.getEntriesByType("resource");
                    for (var o = 0; o < r.length;
                        ++o) {
                        if (v.test(r[o].name)) {
                            ++p;
                            var t = r[o].startTime;
                            var j = r[o].duration;
                            if (j < 0) {
                                j = l - t
                            }
                            h += t;
                            k += j;
                            if (t > s) {
                                s = t
                            }
                            if (j > n) {
                                n = j
                            }
                        }
                    }
                    if (p != 0) {
                        m = {
                            averageDuration: Math.round(k / p),
                            averageStartTime: Math.round(h / p),
                            maxDuration: Math.round(n),
                            maxStartTime: Math.round(s)
                        }
                    } else {
                        m = "no_resources"
                    }
                }
            } catch (q) {}
            return m
        },
        computeAggregatesPayload: function(i, l, h) {
            var k = [];
            if (i === "no_resources") {
                try {
                    var m = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
                    k = [{
                        type: h,
                        name: i,
                        duration: m.now(),
                        start_time: 0
                    }]
                } catch (j) {}
            } else {
                if (typeof i === "object") {
                    k = [{
                        type: l,
                        name: "average",
                        duration: i.averageDuration,
                        start_time: i.averageStartTime
                    }, {
                        type: l,
                        name: "max",
                        duration: i.maxDuration,
                        start_time: i.maxStartTime
                    }]
                }
            }
            return k
        },
        trackEvent: function(j, m, i, l, h) {
            var k = {
                sub_event: m,
                operation: i
            };
            k = f.extend(k, h);
            d.Tracking.logEvent({
                queue: l,
                event_name: j,
                event_data: k
            })
        },
        trackRegularEvent: function(j, k, i, h) {
            d.Utils.trackEvent(j, k, i, false, h)
        },
        trackQueuedEvent: function(j, k, i, h) {
            d.Utils.trackEvent(j, k, i, true, h)
        },
        fetchProfileImg: function() {
            var j = this.promises.profileImg;
            var i;
            if (!j) {
                i = f.Deferred();
                if (this.isUserLoggedIn) {
                    var h = amplify.store("header_userpic_url");
                    if (typeof h === "undefined") {
                        f.getJSON("/users/header_userpic.json", function(k) {
                            if (k) {
                                amplify.store("header_userpic_url", k.url, {
                                    expires: 63072000000
                                });
                                i.resolve(k.url)
                            }
                        })
                    } else {
                        setTimeout(function() {
                            return i.resolve(h)
                        }, 0)
                    }
                } else {
                    setTimeout(function() {
                        return i.resolve(null)
                    }, 0)
                }
                j = i.promise();
                this.promises.profileImg = j
            }
            return j
        }
    }
})(jQuery, window.Airbnb || {});
(function() {
    var a, b;
    b = /^\/v2\//;
    a = (function() {
        function c(d) {
            if (d) {
                this.configure(d)
            }
        }
        c.prototype.key = function() {
            return this.config.key
        };
        c.prototype.configure = function(d) {
            this.config = d
        };
        c.prototype.locale = function() {
            var d;
            return this.config.locale || ((d = Airbnb.options) != null ? d.locale : void 0)
        };
        c.prototype.params = function(d) {
            return _.extend({}, d, {
                key: this.key(),
                currency: Airbnb.userAttributes.curr,
                locale: this.locale()
            })
        };
        c.prototype.getUrl = function(f, g) {
            var d;
            if (g == null) {
                g = {}
            }
            if (!(this.config.baseUrl && this.key())) {
                throw "Missing API config info"
            }
            d = ~f.indexOf("?") ? "&" : "?";
            return "" + this.config.baseUrl + f + d + ($.param(this.params(g)))
        };
        c.prototype.request = function(g, f, d) {
            if (d == null) {
                d = {}
            }
            d.url = this.getUrl(f);
            d.type = g;
            d.dataType = "json";
            if (b.test(f)) {
                d.contentType = "application/json";
                if ((g === "PUT" || g === "POST") && _.isObject(d.data)) {
                    d.data = JSON.stringify(d.data)
                }
            }
            return $.ajax(d)
        };
        c.prototype.get = function(f, d) {
            return this.request("GET", f, d)
        };
        c.prototype.post = function(f, d) {
            return this.request("POST", f, d)
        };
        c.prototype.put = function(f, d) {
            return this.request("PUT", f, d)
        };
        c.prototype.patch = function(g, f) {
            var d;
            d = {
                headers: {
                    "X-HTTP-METHOD-OVERRIDE": "PATCH"
                }
            };
            f = _.extend({}, f, d);
            return this.post(g, f)
        };
        return c
    })();
    this.Airbnb.Api = new a
}).call(this);
! function() {
    $(document).ajaxError(function(f, g, d) {
        if (a(d.url)) {
            b(g.status)
        }
    });
    var c = /(:\/\/api\.[\w\.]*airbnb.com)|(:\/\/[\w\.]*airbnb\.[\w+\.]*\/api\/)/;

    function a(d) {
        return c.test(d)
    }

    function b(d) {
        var g = "debug.api.error." + d,
            f = {
                method: "increment",
                bucket: g
            };
        $.post("/ajax_statsd", f, "json")
    }
}();
(function() {
    function a(h, f, i) {
        var b = a.resolve(h);
        if (null == b) {
            i = i || h;
            f = f || "root";
            var g = new Error('Failed to require "' + i + '" from "' + f + '"');
            g.path = i;
            g.parent = f;
            g.require = true;
            throw g
        }
        var d = a.modules[b];
        if (!d._resolving && !d.exports) {
            var c = {};
            c.exports = {};
            c.client = c.component = true;
            d._resolving = true;
            d.call(this, c.exports, a.relative(b), c);
            delete d._resolving;
            d.exports = c.exports
        }
        return d.exports
    }
    a.modules = {};
    a.aliases = {};
    a.resolve = function(c) {
        if (c.charAt(0) === "/") {
            c = c.slice(1)
        }
        var d = [c, c + ".js", c + ".json", c + "/index.js", c + "/index.json"];
        for (var b = 0; b < d.length; b++) {
            var c = d[b];
            if (a.modules.hasOwnProperty(c)) {
                return c
            }
            if (a.aliases.hasOwnProperty(c)) {
                return a.aliases[c]
            }
        }
    };
    a.normalize = function(f, d) {
        var b = [];
        if ("." != d.charAt(0)) {
            return d
        }
        f = f.split("/");
        d = d.split("/");
        for (var c = 0; c < d.length;
            ++c) {
            if (".." == d[c]) {
                f.pop()
            } else {
                if ("." != d[c] && "" != d[c]) {
                    b.push(d[c])
                }
            }
        }
        return f.concat(b).join("/")
    };
    a.register = function(c, b) {
        a.modules[c] = b
    };
    a.alias = function(c, b) {
        if (!a.modules.hasOwnProperty(c)) {
            throw new Error('Failed to alias "' + c + '", it does not exist')
        }
        a.aliases[b] = c
    };
    a.relative = function(c) {
        var f = a.normalize(c, "..");

        function b(g, j) {
            var h = g.length;
            while (h--) {
                if (g[h] === j) {
                    return h
                }
            }
            return -1
        }

        function d(h) {
            var g = d.resolve(h);
            return a(g, c, h)
        }
        d.resolve = function(j) {
            var k = j.charAt(0);
            if ("/" == k) {
                return j.slice(1)
            }
            if ("." == k) {
                return a.normalize(f, j)
            }
            var g = c.split("/");
            var h = b(g, "deps") + 1;
            if (!h) {
                h = 0
            }
            j = g.slice(0, h + 1).join("/") + "/deps/" + j;
            return j
        };
        d.exists = function(g) {
            return a.modules.hasOwnProperty(d.resolve(g))
        };
        return d
    };
    a.register("component-trim/index.js", function(c, d, f) {
        c = f.exports = b;

        function b(g) {
            if (g.trim) {
                return g.trim()
            }
            return g.replace(/^\s*|\s*$/g, "")
        }
        c.left = function(g) {
            if (g.trimLeft) {
                return g.trimLeft()
            }
            return g.replace(/^\s*/, "")
        };
        c.right = function(g) {
            if (g.trimRight) {
                return g.trimRight()
            }
            return g.replace(/\s*$/, "")
        }
    });
    a.register("component-querystring/index.js", function(c, d, f) {
        var b = d("trim");
        c.parse = function(l) {
            if ("string" != typeof l) {
                return {}
            }
            l = b(l);
            if ("" == l) {
                return {}
            }
            var k = {};
            var h = l.split("&");
            for (var g = 0; g < h.length; g++) {
                var j = h[g].split("=");
                k[j[0]] = null == j[1] ? "" : decodeURIComponent(j[1])
            }
            return k
        };
        c.stringify = function(i) {
            if (!i) {
                return ""
            }
            var h = [];
            for (var g in i) {
                h.push(encodeURIComponent(g) + "=" + encodeURIComponent(i[g]))
            }
            return h.join("&")
        }
    });
    a.register("tracking-js/index.js", function(b, c, d) {
        d.exports = c("./lib")
    });
    a.register("tracking-js/lib/index.js", function(b, c, d) {
        !(function(m, p, g, k, h) {
            var l = [],
                i = false,
                j, o = c("querystring");

            function f() {}
            f.prototype = {
                init: function(r) {
                    this.options = r || {};
                    p.defaults(this.options, {
                        rum: true
                    });
                    var q = 0;
                    for (q = 0; q < l.length; q++) {
                        l[q]()
                    }
                    i = true;
                    l = []
                },
                addInitHook: function(q) {
                    if (!i) {
                        l.push(q)
                    } else {
                        q()
                    }
                },
                setUiRef: function(q, r) {
                    h.store("uiReferrer", q);
                    if (r) {
                        window.location.href = k(r).attr("href")
                    }
                },
                getUiRef: function() {
                    var q = h.store("uiReferrer");
                    if (q) {
                        h.store("uiReferrer", null)
                    }
                    return q
                },
            };
            d.exports = b = m.Tracking = j = new f;
            c("./logEvent")(h, window.Airbnb)(j);
            c("./scrollDepth")(j, jQuery, p);

            function n() {
                var q = o.parse(window.location.search.slice(1));
                if (q.euid) {
                    j.logEvent({
                        event_name: "email_referred_page_load",
                        event_data: {
                            channel: "email",
                            rookery_uuid: q.euid,
                            url: window.location.href
                        }
                    })
                }
            }
            n();
            j.addInitHook(function() {
                if (j.options.rum === true) {
                    j.rum = c("./rum")(j)
                }
            })
        }(Airbnb, _, JSCookie, jQuery, amplify))
    });
    a.register("tracking-js/lib/rum.js", function(b, c, d) {
        d.exports = function(m) {
            var l = {}, i = jQuery;
            var h = c("./episodes");
            l.done = function() {
                h.done();
                f();
                return true
            };
            l.print = function() {
                var n;
                if (b.console && b.console.log && b._) {
                    _.each(h.getMeasures(), function(p, o) {
                        n = o + ": " + p + "ms";
                        switch (o) {
                            case "backend":
                                n += " (firstbyte - starttime)";
                                break;
                            case "render":
                                n += " (domready - firstbyte)";
                                break;
                            case "total_ready_time":
                                n += " (domready - starttime)";
                                break;
                            case "frontend":
                                n += " (onload - firstbyte)";
                                break;
                            case "page_load_time":
                                n += " (onload - starttime)";
                                break;
                            case "total_load_time":
                                n += " (done - starttime)"
                        }
                        console.log(n)
                    })
                }
            };
            l.measures = function() {
                return h.getMeasures()
            };
            l.mark = function(n, o) {
                return h.mark(n, o)
            };
            l.measure = function(o, n, p) {
                return h.measure(o, n, p)
            };

            function g() {
                return window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}
            }

            function f(o) {
                var o = l.measures(),
                    r, q, n;
                try {
                    r = g();
                    _.defaults(o, {
                        cookie_size: document.cookie.length
                    });
                    if (r.getEntriesByType) {
                        q = r.getEntriesByType("resource");
                        n = _.reduce(q, function(s, t) {
                            return t.duration < 30 ? s + 1 : s
                        }, 0);
                        _.defaults(o, {
                            cached_resources: n,
                            total_resources: q.length
                        })
                    }
                } catch (p) {}
                m.logEvent({
                    event_name: "pageload",
                    event_data: o
                })
            }

            function k(p, o, n) {
                var s, q;
                try {
                    s = g();
                    q = s.timing || {};
                    if (typeof(q[o]) === "number" && typeof(q[n]) === "number" && q[o] > 0 && q[n] >= q[o]) {
                        h.measure(p, q[o], q[n])
                    }
                } catch (r) {}
            }
            if (window.sherlock_firstbyte == null) {
                var j = "WARNING: Missing sherlock_firstbyte. Bailing from RUM tracking.";
                window.console && console.warn && console.warn(j);
                return
            }
            h.mark("firstbyte", window.sherlock_firstbyte);
            h.measure("backend", "starttime", "firstbyte");
            h.addEventListener("load", function() {
                h.mark("load");
                h.measure("frontend", "firstbyte", "load");
                f()
            }, false);
            i(function() {
                h.mark("domready");
                h.measure("render", "firstbyte", "domready");
                h.measure("total_ready_time", "starttime", "domready")
            });
            k("redirect_time", "redirectStart", "redirectEnd");
            k("dns_lookup", "domainLookupStart", "domainLookupEnd");
            k("tcp_connect", "connectStart", "connectEnd");
            k("ssl_negotiation", "secureConnectionStart", "connectEnd");
            k("server_response_time", "requestStart", "responseStart");
            k("content_download", "responseStart", "responseEnd");
            return l
        }
    });
    a.register("tracking-js/lib/episodes.js", function(b, c, d) {
        ! function(f) {
            var g = g || {};
            g.q = g.q || [];
            g.version = "0.2";
            g.targetOrigin = document.location.protocol + "//" + document.location.host;
            g.bPostMessage = ("undefined" != typeof(window.postMessage));
            g.autorun = ("undefined" != typeof(g.autorun) ? g.autorun : true);
            g.init = function() {
                g.bDone = false;
                g.marks = {};
                g.measures = {};
                g.starts = {};
                g.findStartTime();
                g.addEventListener("beforeunload", g.beforeUnload, false);
                g.addEventListener("load", g.onload, false);
                g.processQ()
            };
            g.processQ = function() {
                var h = g.q.length;
                for (var j = 0; j < h; j++) {
                    var l = g.q[j];
                    var k = l[0];
                    if ("mark" === k) {
                        g.mark(l[1], l[2])
                    } else {
                        if ("measure" === k) {
                            g.measure(l[1], l[2], l[3])
                        } else {
                            if ("done" === k) {
                                g.done(l[1])
                            }
                        }
                    }
                }
            };
            g.mark = function(h, i) {
                g.dprint("EPISODES.mark: " + h + ", " + i);
                if (!h) {
                    g.dprint("Error: markName is undefined in EPISODES.mark.");
                    return
                }
                g.marks[h] = parseInt(i || new Date().getTime());
                if (g.bPostMessage) {
                    window.postMessage("EPISODES:mark:" + h + ":" + i, g.targetOrigin)
                }
                if ("firstbyte" === h) {
                    g.measure("backend", "starttime", "firstbyte")
                } else {
                    if ("onload" === h) {
                        g.measure("frontend", "firstbyte", "onload");
                        g.measure("page_load_time", "starttime", "onload")
                    } else {
                        if ("done" === h) {
                            g.measure("total_load_time", "starttime", "done")
                        }
                    }
                }
            };
            g.measure = function(j, i, l) {
                g.dprint("EPISODES.measure: " + j + ", " + i + ", " + l);
                if (!j) {
                    g.dprint("Error: episodeName is undefined in EPISODES.measure.");
                    return
                }
                var h;
                if ("undefined" === typeof(i)) {
                    if ("number" === typeof(g.marks[j])) {
                        h = g.marks[j]
                    } else {
                        h = new Date().getTime()
                    }
                } else {
                    if ("number" === typeof(g.marks[i])) {
                        h = g.marks[i]
                    } else {
                        if ("number" === typeof(i)) {
                            h = i
                        } else {
                            g.dprint("Error: unexpected startNameOrTime in EPISODES.measure: " + i);
                            return
                        }
                    }
                }
                var k;
                if ("undefined" === typeof(l)) {
                    k = new Date().getTime()
                } else {
                    if ("number" === typeof(g.marks[l])) {
                        k = g.marks[l]
                    } else {
                        if ("number" === typeof(l)) {
                            k = l
                        } else {
                            g.dprint("Error: unexpected endNameOrTime in EPISODES.measure: " + l);
                            return
                        }
                    }
                }
                g.starts[j] = parseInt(h);
                g.measures[j] = parseInt(k - h);
                if (g.bPostMessage) {
                    window.postMessage("EPISODES:measure:" + j + ":" + h + ":" + k, g.targetOrigin)
                }
            };
            g.done = function(h) {
                g.bDone = true;
                g.mark("done");
                if (g.bPostMessage) {
                    window.postMessage("EPISODES:done", g.targetOrigin)
                }
                if ("function" === typeof(h)) {
                    h()
                }
            };
            g.getMarks = function() {
                return g.marks
            };
            g.getMeasures = function() {
                return g.measures
            };
            g.getStarts = function() {
                return g.starts
            };
            g.findStartTime = function() {
                var h = g.findStartWebTiming() || g.findStartGToolbar() || g.findStartCookie();
                if (h) {
                    g.mark("starttime", h)
                }
            };
            g.findStartWebTiming = function() {
                var h, j;
                try {
                    j = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance;
                    if ("undefined" != typeof(j) && "undefined" != typeof(j.timing) && "undefined" != typeof(j.timing.navigationStart)) {
                        h = j.timing.navigationStart;
                        g.dprint("EPISODES.findStartWebTiming: startTime = " + h)
                    }
                } catch (i) {}
                return h
            };
            g.findStartGToolbar = function() {
                var h = undefined;
                if ("object" === typeof(window.external) && "number" === typeof(window.external.pageT)) {
                    h = (new Date().getTime()) - window.external.pageT
                } else {
                    if ("object" === typeof(window.gtbExternal) && "function" === typeof(window.gtbExternal.pageT)) {
                        h = (new Date().getTime()) - window.gtbExternal.pageT()
                    } else {
                        if ("object" === typeof(window.chrome) && "function" === typeof(window.chrome.csi)) {
                            h = (new Date().getTime()) - window.chrome.csi().pageT
                        }
                    }
                } if (h) {
                    g.dprint("EPISODES.findStartGToolbar: startTime = " + h)
                }
                return h
            };
            g.findStartCookie = function() {
                var p = document.cookie.split(" ");
                for (var m = 0; m < p.length; m++) {
                    if (0 === p[m].indexOf("EPISODES=")) {
                        var h = p[m].substring("EPISODES=".length).split("&");
                        var n, o;
                        for (var k = 0; k < h.length; k++) {
                            if (0 === h[k].indexOf("s=")) {
                                n = h[k].substring(2)
                            } else {
                                if (0 === h[k].indexOf("r=")) {
                                    var l = h[k].substring(2);
                                    o = (encodeURIComponent(document.referrer) == l)
                                }
                            }
                        }
                        if (o && n) {
                            g.dprint("EPISODES.findStartCookie: startTime = " + n);
                            return n
                        }
                    }
                }
                return undefined
            };
            g.beforeUnload = function(h) {
                document.cookie = "EPISODES=s=" + Number(new Date()) + "&r=" + encodeURIComponent(document.location) + "; path=/"
            };
            g.onload = function(h) {
                g.mark("onload");
                if (g.autorun) {
                    g.done()
                }
            };
            g.addEventListener = function(j, i, h) {
                if ("undefined" != typeof(window.attachEvent)) {
                    return window.attachEvent("on" + j, i)
                } else {
                    if (window.addEventListener) {
                        return window.addEventListener(j, i, h)
                    }
                }
            };
            g.dprint = function(h) {};
            g.init();
            f.exports = g
        }(d)
    });
    a.register("tracking-js/lib/logEvent.js", function(b, c, d) {
        d.exports = function(f, g) {
            return function(m) {
                var v = "0.2";
                var t = {};
                var s = "tracking_event_queue";

                function y(B) {
                    t = {}
                }

                function o(B) {
                    q(t, B)
                }

                function x() {
                    var C = n();
                    o({
                        page_uri: document.location.pathname,
                        page_referrer: document.referrer,
                    });
                    r(C, "affiliate");
                    r(C, "campaign");
                    r(C, "bev");
                    if (typeof I18n !== "undefined" && I18n.locale) {
                        var B = I18n.locale();
                        if (typeof B === "string") {
                            o({
                                locale: B,
                                language: B.split("-")[0]
                            })
                        }
                    }
                }

                function z(B) {
                    if (B.queue) {
                        this.queueEvent(B);
                        return
                    }
                    j(B);
                    var C = m._formatEventData(B);
                    m._sendTrackingRequest(C, B.callback)
                }

                function k(C) {
                    j(C);
                    var D = m._formatEventData(C);
                    try {
                        var B = f.store(s) || [];
                        B.push(D);
                        f.store(s, B, {
                            expires: 60000
                        })
                    } catch (E) {
                        w("Could not add event to queue: " + E)
                    }
                }

                function i() {
                    try {
                        var B = f.store(s) || [];
                        if (typeof B === "string") {
                            B = JSON.parse(B)
                        }
                        B.forEach(function(D) {
                            D.event_data = m._addContextToQueuedEvent(D.event_data);
                            m._sendTrackingRequest(D, null)
                        });
                        f.store(s, null)
                    } catch (C) {
                        w("Could not flush event queue: " + C)
                    }
                }

                function j(B) {
                    if (!B.event_name) {
                        throw new Error("event_name is a required key for logEvent")
                    }
                }

                function h(B) {
                    return {
                        event_name: B.event_name,
                        event_data: l(l(t, {
                            timestamp: new Date().getTime()
                        }), B.event_data),
                        trackingjs_logging_version: v
                    }
                }

                function u(B) {
                    return l(B, {
                        trackingjs_queued: true,
                        trackingjs_queued_context: t
                    })
                }

                function A(C, D) {
                    var B = new XMLHttpRequest();
                    B.open("POST", "/tracking/events");
                    B.setRequestHeader("Content-type", "application/json");
                    B.onload = function() {
                        if ((200 <= B.status && B.status <= 204) || B.status === 1223) {
                            if (D) {
                                D(true)
                            }
                        } else {
                            p(C);
                            if (D) {
                                D(false)
                            }
                        }
                    };
                    B.onerror = function() {
                        p(C);
                        if (D) {
                            D(false)
                        }
                    };
                    B.send(JSON.stringify(C));
                    if (g.Utils.isDev() && f.store("log-in-dev")) {
                        g.Utils.log("--- Airbnb.Tracking.logEvent ---");
                        g.Utils.log(C)
                    }
                }

                function p(B) {
                    w("Failed to log event (event=" + B.event_name + ")")
                }

                function w(B) {
                    if (typeof console !== "undefined" && console.warn) {
                        console.warn("[tracking] " + B)
                    }
                }

                function l(C, B) {
                    var D = {};
                    q(D, C);
                    q(D, B);
                    return D
                }

                function q(B, C) {
                    var D;
                    for (D in C) {
                        B[D] = C[D]
                    }
                }

                function n() {
                    var J = {}, I = document.cookie;
                    if (I === "") {
                        return J
                    }
                    var F = I.split("; ");
                    for (var E = 0; E < F.length; E++) {
                        var D = F[E],
                            C = D.indexOf("="),
                            B = D.substring(0, C),
                            H = D.substring(C + 1);
                        try {
                            H = decodeURIComponent(H)
                        } catch (G) {
                            z({
                                event_name: "cookie_decode_failed",
                                event_data: {
                                    cookie: D
                                }
                            });
                            H = ""
                        }
                        J[B] = H
                    }
                    return J
                }

                function r(D, C) {
                    if (D[C] != null) {
                        var B = {};
                        B[C] = D[C];
                        o(B)
                    }
                }
                m.clearContext = y;
                m.addContext = o;
                m.addDefaultContext = x;
                m.logEvent = z;
                m.queueEvent = k;
                m._formatEventData = h;
                m._sendTrackingRequest = A;
                m._flushEventQueue = i;
                m._addContextToQueuedEvent = u;
                m.addInitHook(i)
            }
        }
    });
    a.register("tracking-js/lib/scrollDepth.js", function(b, c, d) {
        d.exports = function(i, g, f) {
            var h = false;
            i.registerScrollDepthTracking = function(m, j, l) {
                if (h) {
                    return
                }
                var k = g(m || window);
                var o = g(j || document);
                var n = 0;
                l = l || 500;
                k.on("scroll", f.throttle(function() {
                    var p = k.scrollTop();
                    if (p > n) {
                        n += l;
                        i.logEvent({
                            event_name: "scrolling",
                            event_data: {
                                increments: l,
                                scrollPosition: p,
                                documentHeight: o.height()
                            }
                        })
                    }
                }));
                h = true
            }
        }
    });
    a.alias("component-querystring/index.js", "tracking-js/deps/querystring/index.js");
    a.alias("component-querystring/index.js", "querystring/index.js");
    a.alias("component-trim/index.js", "component-querystring/deps/trim/index.js");
    a.alias("tracking-js/index.js", "tracking-js/index.js");
    if (typeof exports == "object") {
        module.exports = a("tracking-js")
    } else {
        if (typeof define == "function" && define.amd) {
            define([], function() {
                return a("tracking-js")
            })
        } else {
            this["Tracking"] = a("tracking-js")
        }
    }
})();
(function(d, f, b) {
    function a(g) {
        d.Handlebars && Handlebars.registerHelper("t", function(i, h) {
            if (typeof i == "string") {
                return new Handlebars.SafeString(g.t(i, h.hash))
            } else {
                var j = i.fn(this);
                return new Handlebars.SafeString(g.t(j))
            }
        })
    }
    var c = function() {
        this.phrases = {};
        this.options = {};
        this.warnings = []
    };
    c.prototype.init = function(g) {
        this.options = g
    };
    c.prototype.locale = function() {
        return (f.options && f.options.locale) || "en"
    };
    c.prototype.language = function() {
        return (f.options && f.options.language) || "en"
    };
    c.prototype.country = function() {
        return this.options.country
    };
    c.prototype.tld_country = function() {
        return this.options.tld_country
    };
    c.prototype.currency = function() {
        return f.userAttributes.curr || "USD"
    };
    c.prototype.symbolForCurrency = function(g) {
        var i, h;
        g = g || this.currency();
        h = this.currencyOptions(g);
        if (h) {
            i = h.symbol
        } else {
            i = g
        }
        return i
    };
    c.prototype.currencyOptions = function(g) {
        var h;
        g = g || this.currency();
        if (this.options.currencies && (h = this.options.currencies[g])) {
            return h
        } else {
            this.warn('Missing currency data for "' + g + '".')
        }
    };
    c.prototype.currencies = function() {
        var g = [];
        var h = this.options.currencies;
        for (var i in h) {
            if (h.hasOwnProperty(i)) {
                g.push(i)
            }
        }
        return g
    };
    c.prototype.current_locale_name = function() {
        return this.options.current_locale_name || "English"
    };
    c.prototype.languages = function() {
        return this.options.languages
    };
    c.prototype.featured_languages = function() {
        if (this.options.featured_languages) {
            return this.options.featured_languages
        }
        this.options.featured_languages = this.options.languages.slice(0, 11);
        return this.options.featured_languages
    };
    c.prototype.overflow_languages = function() {
        if (this.options.overflow_languages) {
            return this.options.overflow_languages
        }
        this.options.overflow_languages = this.options.languages.slice(11);
        return this.options.overflow_languages
    };
    c.prototype.priceString = function(h, m, o) {
        o = o || {};
        m = m || this.currency();
        var j, g, l, i, n, k;
        j = this.currencyOptions(m);
        g = this.symbolForCurrency(m);
        n = this.locale();
        if (o.thousandsDelimiter) {
            h = h.toLocaleString(this.locale())
        }
        i = j && j.options && j.options.position;
        if (i === "after") {
            k = false
        } else {
            if (i === "special") {
                if (m === "EUR") {
                    if (b.include(["fr", "de", "it", "es"], n)) {
                        k = false
                    } else {
                        k = true
                    }
                }
            } else {
                k = true
            }
        } if (o.span) {
            if (k) {
                l = ['<span class="currency_symbol symbol before">', g, "</span>", h].join("")
            } else {
                l = [h, '<span class="currency_symbol symbol after">', g, "</span>"].join("")
            }
        } else {
            if (k) {
                l = [g, h].join("")
            } else {
                l = [h, g].join("")
            }
        } if (o.code === true || (o.code !== false && j && j.code_required)) {
            if (o.span) {
                l += [' <span class="currency_symbol code after">', m, "</span>"].join("")
            } else {
                l += [" ", m].join("")
            }
        }
        return l
    };
    c.prototype.guestConvertFromUsd = function(k, j) {
        j = b.defaults(j || {}, {
            format: false
        });
        var g, l, h, i;
        g = f.userAttributes.guest_exchange;
        l = Math.round(parseInt(k, 10) * g);
        if (j.format) {
            i = b.clone(j);
            delete i.format;
            h = this.priceString(l, null, i)
        } else {
            h = l
        }
        return h
    };
    c.prototype.warn = function(g) {
        d.console && d.console.warn && d.console.warn("WARNING: " + g);
        this.warnings.push(g)
    };
    c.prototype.extend = function(g) {
        for (var h in g) {
            if (g.hasOwnProperty(h)) {
                this.phrases[h] = g[h]
            }
        }
    };
    c.prototype.t = function(j, i) {
        var h;
        if (!i) {
            i = {}
        } else {
            if (typeof i === "string") {
                i = {
                    "default": i
                }
            }
        }
        var g = this.phrases[j] || i["default"] || "";
        if (g === "") {
            this.warn('Missing translation for key: "' + j + '"');
            h = j
        } else {
            h = g;
            if (i.smart_count != null && i.smart_count.length != null) {
                i.smart_count = i.smart_count.length
            }
            if (this.smartCountChoose) {
                h = this.smartCountChoose(h, this.locale(), i.smart_count)
            }
            h = this.interpolate(h, i)
        }
        return h
    };
    c.prototype.get = function() {
        return this.t.apply(this, arguments)
    };
    c.prototype.interpolate = function(h, i) {
        for (var g in i) {
            if (g !== "default" && i.hasOwnProperty(g)) {
                h = h.split("%{" + g + "}").join(i[g])
            }
        }
        return h
    };
    c.prototype.pluralize = function(g, i) {
        if (i != null && typeof i.length !== "undefined") {
            i = i.length
        }
        var h;
        if (i === 0) {
            h = "pluralize." + g + ".zero"
        } else {
            if (i === 1) {
                h = "pluralize." + g + ".one"
            } else {
                h = "pluralize." + g + ".many"
            }
        }
        return this.t(h, {
            count: i
        })
    };
    d.I18n = new c();
    f.Translations = d.I18n;
    if (typeof d.t == "undefined") {
        d.t = function() {
            return d.I18n.t.apply(d.I18n, arguments)
        }
    }
    provide("i18n", d.I18n);
    a(d.I18n)
})(window, Airbnb, _);
(function(h, k) {
    var j = "||||";
    var c = {
        chinese_like: function(m) {
            return 0
        },
        german_like: function(m) {
            return m !== 1 ? 1 : 0
        },
        french_like: function(m) {
            return m > 1 ? 1 : 0
        },
        russian_like: function(m) {
            return m % 10 === 1 && m % 100 !== 11 ? 0 : m % 10 >= 2 && m % 10 <= 4 && (m % 100 < 10 || m % 100 >= 20) ? 1 : 2
        },
        czech_like: function(m) {
            return (m === 1) ? 0 : (m >= 2 && m <= 4) ? 1 : 2
        },
        polish_like: function(m) {
            return (m === 1 ? 0 : m % 10 >= 2 && m % 10 <= 4 && (m % 100 < 10 || m % 100 >= 20) ? 1 : 2)
        },
        icelandic_like: function(m) {
            return (m % 10 !== 1 || m % 100 === 11) ? 1 : 0
        }
    };
    var l = {
        chinese_like: ["id", "ja", "ko", "ms", "th", "tr", "zh"],
        german_like: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
        french_like: ["fr", "tl"],
        russian_like: ["hr", "ru"],
        czech_like: ["cs"],
        polish_like: ["pl"],
        icelandic_like: ["is"],
    };
    var a = k.inject(l, function(p, o, n) {
        for (var m in o) {
            p[o[m]] = n
        }
        return p
    }, {});
    var f = /^\s+|\s+$/g;

    function d(m) {
        return m.replace(f, "")
    }

    function b(r, m, p) {
        var n, q, o;
        if (p != null && r) {
            q = r.split(j);
            o = q[g(m, p)] || q[0];
            n = d(o)
        } else {
            n = r
        }
        return n
    }

    function i(m) {
        return a[h.locale()] || a.en
    }

    function g(m, n) {
        return c[i(m)](n)
    }
    h.smartCountChoose = b
})(I18n, _);
! function(a, g, h, n) {
    function m(q) {
        h(".regular-header .user-profile-image").html(JST["header/user_profile_image"]({
            src: q
        }))
    }
    var o = a._,
        j = a.Airbnb,
        p = a.require("std::emitter"),
        b = BootstrapData.get("javascript_paths"),
        l, d, k, c, f, i;
    if (!j.isO20) {
        c = a.require("o2");
        f = c.matchMedia;
        i = c.Tooltip
    }
    l = o.inherit(p, function(q) {
        p.call(this);
        this.$el = h("#header");
        if (h("body").hasClass("with-new-header")) {
            this.isNewHeader = true
        }
        this.personalizeHeader();
        this.trackLysButton();
        j.renderHeaderComponents()
    });
    l.prototype.renderAction = function(q) {
        this.$smAction.empty().append(q)
    };
    l.prototype.renderSearch = function(q) {
        this.$smSearch.empty().append(q)
    };
    l.prototype.trackLysButton = function() {
        h(".list-your-space-btn").on("click", function(q) {
            j.Tracking.setUiRef("header_" + window.location.pathname)
        })
    };
    l.prototype.hideDropdowns = function() {
        this.$el.find(".tooltip.show").removeClass("show").attr("aria-hidden", "true").reflow()
    };
    l.prototype.personalizeHeader = function() {
        var q = this;
        this.userAttributes = j.userAttributes;
        if (this.userAttributes) {
            h.each(this.userAttributes, function(r, s) {
                if (typeof q[r] === "function") {
                    q[r](s)
                }
            })
        }
        this.$el.toggleClass("logged_in", j.Utils.isUserLoggedIn);
        this.$el.toggleClass("is_host", j.userAttributes.has_been_host);
        this.$el.find("#list-your-space").toggleClass("hide", j.userAttributes.is_vr_platform_powered_host);
        this.initHeader()
    };
    l.prototype.enableUncrawlableLinks = function() {
        h("a.no-crawl").each(function(r, s) {
            var q = h(s);
            q.attr("href", q.data("href"))
        })
    };
    l.prototype.setThumbnailUrl = function(q) {
        amplify.store("header_userpic_url", q);
        this.personalizeHeader()
    };
    l.prototype.clearThumbnailUrl = function() {
        amplify.store("header_userpic_url", null)
    };
    l.prototype.name = function(q) {
        this.$el.find(".value_name").text(q)
    };
    l.prototype.num_h = function(q) {
        q = parseInt(q, 10);
        var r = this.$el.find(".header-dropdown .listings");
        if (q === 0) {
            r.hide()
        } else {
            if (q === 1) {
                r.find("span.singular").show();
                r.find("span.plural").hide()
            }
            this.$el.find(".header-dropdown .reservations").show()
        }
    };
    l.prototype.updateAvatarLink = function(s) {
        var r = this.$el.find(".header-avatar-trigger");
        var q = s ? r.data("href-host") : r.data("href");
        r.attr("href", q)
    };
    l.prototype.can_see_groups = function(r) {
        if (r) {
            var q = this.$el.find(".groups");
            q.removeClass("hide")
        }
    };
    l.prototype.unread_message_count = function(q) {
        if (q > 0) {
            this.$el.find(".unread_count, .alert-count, .unread-count--sm").addClass("in").text(q)
        }
    };
    l.prototype.initHelpPanel = function() {
        LazyLoad.js(b["packages/field_guide.bundle.js"])
    };
    l.prototype.initCustomFaqs = function() {
        var u = h(".help-toggle"),
            s = h(".help-dropdown"),
            r = s.find(".loading"),
            t = h(".search-form--search"),
            q = "";
        if (t.length) {
            t.submit(function() {
                j.Tracking.queueEvent({
                    event_name: "help_dropdown_search",
                    event_data: {
                        is_host: j.userAttributes.is_active_host,
                        query: t.find('name=["q"]').val(),
                        source: "help_center"
                    }
                })
            })
        }
        u.one("mouseover", function() {
            h(".faqs-ajaxed-in").remove();
            h.ajax({
                type: "GET",
                url: "/old_help/populate_help_dropdown",
                dataType: "json",
                data: {
                    window_location: window.location.href
                },
                success: function(A) {
                    var C = A.faqs;
                    var B = A.should_show_search;
                    var v = A.help_features;
                    var y = h.query.get("hde") === "add_search";
                    var w = this.isNewHeader ? JST["header/faq_item_for_new_header"] : JST["header/faq_item"];
                    var x = C.map(function(D) {
                        return w(D)
                    });
                    if (B || y) {
                        s.find(".search-bar--help").removeClass("hide");
                        s.find(".form-submit--help").on("click", this.submitHelpSearch.bind(this))
                    }
                    r.before(x);
                    r.addClass("hide");
                    s.find(".visit-helpcenter-cta").removeClass("hide");
                    var z = s.find("a.menu-item").toArray().map(function(D) {
                        return h(D).attr("href").split("?")[0]
                    });
                    s.on("click", "a.menu-item", function(G) {
                        var E = h(G.currentTarget);
                        var F = E.attr("href");
                        var D = E.parent().index();
                        j.Tracking.queueEvent({
                            event_name: "help_dropdown_menu_item",
                            event_data: {
                                is_host: j.userAttributes.is_active_host,
                                help_features: v,
                                url_list: z,
                                click_index: D,
                                target_url: F.split("?")[0],
                                source: "help_center"
                            }
                        })
                    })
                }.bind(this),
                complete: function(x, v, w) {
                    s.find(".all_faqs, .visit-helpcenter-cta").removeClass("hide")
                }
            })
        }.bind(this))
    };
    l.prototype.submitHelpSearch = function() {
        h(".search-form--help").submit()
    };
    l.prototype.trackHoverEvent = function(q, s) {
        var r = h(q);
        r.mouseenter(function() {
            var t = setTimeout(function() {
                j.Utils.trackRegularEvent("header_nav", s, "hover")
            }, 200);
            r.mouseleave(function() {
                clearTimeout(t)
            })
        })
    };
    l.prototype.trackClickEvent = function(q, r) {
        h(q).click(function() {
            j.Utils.trackQueuedEvent("header_nav", r, "click")
        })
    };
    l.prototype.trackSearchBoxClickEvent = function(r, s, q) {
        this.$el.find(r).click(function() {
            j.Utils.trackRegularEvent("header_nav", s, "click", q)
        })
    };
    l.prototype.trackForLoggedInUsers = function() {
        this.trackHoverEvent(".user-item", "user_drop_down");
        this.trackHoverEvent(".help-menu-container", "help_center");
        this.trackClickEvent(".item-dashboard", "dashboard");
        this.trackClickEvent(".item-listing", "your_listing");
        this.trackClickEvent(".item-reservation", "your_reservations");
        this.trackClickEvent(".item-trips", "your_trips");
        this.trackClickEvent(".item-wishlists", "wish_lists");
        this.trackClickEvent(".item-groups", "groups");
        this.trackClickEvent(".item-invite-friends", "invite_friends");
        this.trackClickEvent(".item-user-edit", "edit_profile");
        this.trackClickEvent(".item-account", "account");
        this.trackClickEvent(".inbox-item", "messages");
        this.trackClickEvent(".list-your-space", "list_your_space")
    };
    l.prototype.trackForAllUsers = function() {
        this.trackClickEvent(".header-belo", "airbnb_logo");
        this.trackHoverEvent(".header-browse-trigger", "browse");
        this.trackClickEvent(".header-browse-popular", "popular");
        this.trackClickEvent(".header-browse-friends", "friends");
        this.trackClickEvent(".header-browse-neighborhoods", "neighborhoods");
        this.trackClickEvent(".header-browse-groups", "groups");
        this.trackSearchBoxClickEvent('.search-form [name="location"]', "search", {
            target: "search_box"
        })
    };
    l.prototype.initHeader = function() {
        var q = a.amplify,
            s = q.store("user_first_name"),
            r = this;
        this.unread_message_count(this.userAttributes.num_msg);
        if (j.Utils.isUserLoggedIn) {
            this.enableUncrawlableLinks();
            q.store("user_first_name", this.userAttributes.name, {
                expires: 63072000000
            });
            q.store("hash_user_id", this.userAttributes.hash_user_id, {
                expires: 63072000000
            });
            h(".header-logout").click(function(t) {
                j.SignInUp.doLogout();
                t.preventDefault()
            });
            j.Utils.fetchProfileImg().done(m)
        }
        if (this.isNewHeader) {
            this.updateAvatarLink(j.Utils.isUserLoggedIn && j.userAttributes.has_been_host)
        }
        if (f && f.is("lg")) {
            j.ERF.deliverExperiment("field_guide", {
                show_guide: this.initHelpPanel.bind(this),
                baseline: this.initCustomFaqs.bind(this),
                treatment_unknown: this.initCustomFaqs.bind(this),
                not_in_experiment: this.initCustomFaqs.bind(this)
            })
        } else {
            this.initCustomFaqs()
        } if (j.Utils.isUserLoggedIn) {
            this.trackForLoggedInUsers()
        }
        this.trackForAllUsers()
    };
    g.Header = l
}(this, Airbnb, jQuery, Airbnb.Utils);
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
        function(d, f, b) {
            var c = d("react");
            var g = window.jQuery;
            var h = d("./components/SearchBar.jsx");

            function a(j) {
                var k = j.find('[name="location"]');
                var i = {
                    location: k.val(),
                    p2: k.data("p2"),
                    datePlaceholder: k.data("date-placeholder")
                };
                j.empty();
                c.render(c.createElement(h, i), j.get(0))
            }
            Airbnb.renderHeaderComponents = function() {
                if (!c) {
                    return
                }
                var i = g(".airbnb-header");
                var j = i.find(".search-bar-wrapper");
                if (j.length !== 0) {
                    a(j)
                }
            }
        }, {
            "./components/SearchBar.jsx": 2,
            react: "react"
        }
    ],
    2: [
        function(c, d, a) {
            var b = c("react");
            var f = c("./SearchSettings.jsx");
            var g = window.jQuery;
            var h = b.createClass({
                displayName: "SearchBar",
                getInitialState: function() {
                    return {
                        hideSettings: true
                    }
                },
                componentDidMount: function() {
                    this.$form = g(this.refs.searchForm.getDOMNode());
                    this.$body = g("body")
                },
                handleFocus: function(i) {
                    if (this.googleInited) {
                        return
                    }
                    Airbnb.Utils.loadGooglePlaces();
                    Airbnb.Utils.withGooglePlaces(this.setupAutocomplete);
                    this.googleInited = true
                },
                serializeData: function(i, j) {
                    return {
                        data: i.serializeObject(),
                        event: j || null
                    }
                },
                setupAutocomplete: function() {
                    var i = this;
                    this.autocomplete = new google.maps.places.Autocomplete(this.refs.location.getDOMNode(), {
                        types: ["geocode"]
                    });
                    google.maps.event.addListener(this.autocomplete, "place_changed", function() {
                        i.emitSearchEvent();
                        if (!i.props.p2) {
                            i.openSettings()
                        }
                    })
                },
                handleSubmit: function(i) {
                    this.emitSearchEvent(i);
                    i.preventDefault();
                    Airbnb.SearchUtils.handleFormSubmit(this.$form)
                },
                emitSearchEvent: function(i) {
                    Airbnb.mediator.emit("header:search", this.serializeData(this.$form, i))
                },
                logClick: function() {
                    Airbnb.Utils.trackRegularEvent("header_nav", "search", "click", {
                        target: "search_box"
                    })
                },
                openSettings: function() {
                    this.setState({
                        hideSettings: false
                    });
                    this.listenToClicks()
                },
                listenToClicks: function() {
                    this.$body.on("click.search-settings", this.closeIfOutside.bind(this))
                },
                closeIfOutside: function(j) {
                    var i = g(j.target);
                    if (i.closest(".search-settings").length === 0 & i.closest(".ui-datepicker").length === 0 && !i.hasClass(".ui-datepicker-backdrop")) {
                        this.setState({
                            hideSettings: true
                        });
                        this.$body.off("click.search-settings")
                    }
                },
                render: function() {
                    return b.createElement("form", {
                        action: "/s",
                        className: "search-form",
                        onSubmit: this.handleSubmit,
                        ref: "searchForm"
                    }, b.createElement("div", {
                        className: "search-bar"
                    }, b.createElement("i", {
                        className: "icon icon-search icon-gray h4"
                    }), b.createElement("input", {
                        type: "text",
                        placeholder: I18n.t("where_are_you_going"),
                        autoComplete: "off",
                        name: "location",
                        onFocus: this.handleFocus,
                        onClick: this.logClick,
                        ref: "location",
                        defaultValue: this.props.location,
                        className: "location"
                    }), b.createElement("input", {
                        type: "hidden",
                        name: "source",
                        value: "hdr"
                    })), b.createElement(f, {
                        hide: this.state.hideSettings,
                        datePlaceholder: this.props.datePlaceholder
                    }))
                }
            });
            d.exports = h
        }, {
            "./SearchSettings.jsx": 3,
            react: "react"
        }
    ],
    3: [
        function(c, d, a) {
            var b = c("react");
            var g = window.jQuery;
            var f = b.createClass({
                displayName: "SearchSettings",
                componentDidUpdate: function() {
                    var h = this;
                    if (!this.props.hide) {
                        g(this.getDOMNode()).airbnbInputDateSpan();
                        setTimeout(function() {
                            return h.refs.checkin.getDOMNode().focus()
                        }, 0)
                    }
                },
                generateGuestOptions: function() {
                    var j = [];
                    for (var h = 1; h <= 16; h++) {
                        j.push(h)
                    }
                    return j.map(function(i) {
                        return b.createElement("option", {
                            value: i,
                            key: i
                        }, i)
                    })
                },
                logChange: function(h) {
                    var i = g(h.currentTarget).data("field-name");
                    Airbnb.Utils.trackRegularEvent("header_nav", "search", "change", {
                        target: i
                    })
                },
                logRoomTypeChange: function(i) {
                    var h = g(i.currentTarget).data("room-type");
                    Airbnb.Utils.trackRegularEvent("header_nav", "search", "change", {
                        target: "room_type",
                        room_type: h
                    })
                },
                logFAPClick: function() {
                    Airbnb.Utils.trackQueuedEvent("header_nav", "search", "click", {
                        target: "find_a_place"
                    })
                },
                render: function() {
                    var h = "panel search-settings header-menu";
                    if (!this.props.hide) {
                        h += " shown"
                    }
                    return b.createElement("div", {
                        id: "header-search-settings",
                        className: h
                    }, b.createElement("div", {
                        className: "panel-body clearfix basic-settings"
                    }, b.createElement("div", {
                        className: "setting checkin"
                    }, b.createElement("label", {
                        htmlFor: "header-search-checkin",
                        className: "field-label"
                    }, b.createElement("strong", null, I18n.t("checkin"))), b.createElement("input", {
                        type: "text",
                        id: "header-search-checkin",
                        "data-field-name": "check_in_dates",
                        onChange: this.logChange,
                        name: "checkin",
                        ref: "checkin",
                        className: "checkin ui-datepicker-target",
                        placeholder: this.props.datePlaceholder
                    })), b.createElement("div", {
                        className: "setting checkout"
                    }, b.createElement("label", {
                        htmlFor: "header-search-checkout",
                        className: "field-label"
                    }, b.createElement("strong", null, I18n.t("checkout"))), b.createElement("input", {
                        type: "text",
                        id: "header-search-checkout",
                        "data-field-name": "check_out_dates",
                        onChange: this.logChange,
                        className: "checkout ui-datepicker-target",
                        name: "checkout",
                        placeholder: this.props.datePlaceholder
                    })), b.createElement("div", {
                        className: "setting guests"
                    }, b.createElement("label", {
                        htmlFor: "header-search-guests",
                        className: "field-label"
                    }, b.createElement("strong", null, I18n.t("guests"))), b.createElement("div", {
                        className: "select select-block"
                    }, b.createElement("select", {
                        id: "header-search-guests",
                        "data-field-name": "number_of_guests",
                        onChange: this.logChange,
                        name: "guests"
                    }, this.generateGuestOptions())))), b.createElement("div", {
                        className: "panel-header menu-header normal-line-height"
                    }, b.createElement("small", null, b.createElement("strong", null, I18n.t("room_type")))), b.createElement("div", {
                        className: "panel-body"
                    }, b.createElement("div", {
                        className: "row-space-4"
                    }, b.createElement("label", {
                        className: "checkbox menu-item",
                        htmlFor: "room_type_0"
                    }, b.createElement("input", {
                        type: "checkbox",
                        id: "room_type_0",
                        "data-room-type": "entire_home",
                        name: "room_types[]",
                        onChange: this.logRoomTypeChange,
                        defaultValue: "Entire home/apt"
                    }), b.createElement("i", {
                        className: "icon icon-entire-place horizontal-margin-medium"
                    }), I18n.t("room_type_0")), b.createElement("label", {
                        className: "checkbox menu-item",
                        htmlFor: "room_type_1"
                    }, b.createElement("input", {
                        type: "checkbox",
                        id: "room_type_1",
                        "data-room-type": "private_home",
                        name: "room_types[]",
                        onChange: this.logRoomTypeChange,
                        defaultValue: "Private room"
                    }), b.createElement("i", {
                        className: "icon icon-private-room horizontal-margin-medium"
                    }), I18n.t("room_type_1")), b.createElement("label", {
                        className: "checkbox menu-item",
                        htmlFor: "room_type_2"
                    }, b.createElement("input", {
                        type: "checkbox",
                        id: "room_type_2",
                        "data-room-type": "shared_room",
                        name: "room_types[]",
                        onChange: this.logRoomTypeChange,
                        defaultValue: "Shared room"
                    }), b.createElement("i", {
                        className: "icon icon-shared-room horizontal-margin-medium"
                    }), I18n.t("room_type_2"))), b.createElement("button", {
                        type: "submit",
                        onClick: this.logFAPClick,
                        className: "btn btn-primary btn-block"
                    }, b.createElement("i", {
                        className: "icon icon-search"
                    }), I18n.t("find_a_place"))))
                }
            });
            d.exports = f
        }, {
            react: "react"
        }
    ],
    4: [
        function(b, c, a) {
            b("./app.jsx")
        }, {
            "./app.jsx": 1
        }
    ]
}, {}, [4]);
LazyLoad = function(l) {
    function c(k, i) {
        var j = l.createElement(k),
            h;
        for (h in i) {
            i.hasOwnProperty(h) && j.setAttribute(h, i[h])
        }
        return j
    }

    function f(k) {
        var i = g[k],
            h, j;
        if (i) {
            h = i.callback, j = i.urls, j.shift(), q = 0, j.length || (h && h.call(i.context, i.obj), g[k] = null, d[k].length && o(k))
        }
    }

    function w() {
        if (!v) {
            var b = navigator.userAgent;
            v = {
                async: l.createElement("script").async === !0
            };
            (v.webkit = /AppleWebKit\//.test(b)) || (v.ie = /MSIE/.test(b)) || (v.opera = /Opera/.test(b)) || (v.gecko = /Gecko\//.test(b)) || (v.unknown = !0)
        }
    }

    function o(u, z, p, s, n) {
        var m = function() {
            f(u)
        }, j = u === "css",
            r, k, t, b;
        w();
        if (z) {
            if (z = typeof z === "string" ? [z] : z.concat(), j || v.async || v.gecko || v.opera) {
                d[u].push({
                    urls: z,
                    callback: p,
                    obj: s,
                    context: n
                })
            } else {
                r = 0;
                for (k = z.length; r < k;
                    ++r) {
                    d[u].push({
                        urls: [z[r]],
                        callback: r === k - 1 ? p : null,
                        obj: s,
                        context: n
                    })
                }
            }
        }
        if (!g[u] && (b = g[u] = d[u].shift())) {
            a || (a = l.head || l.getElementsByTagName("head")[0]);
            z = b.urls;
            r = 0;
            for (k = z.length; r < k;
                ++r) {
                p = z[r], j ? t = v.gecko ? c("style") : c("link", {
                    href: p,
                    rel: "stylesheet"
                }) : (t = c("script", {
                    src: p
                }), t.async = !1), t.className = "lazyload", t.setAttribute("charset", "utf-8"), v.ie && !j ? t.onreadystatechange = function() {
                    if (/loaded|complete/.test(t.readyState)) {
                        t.onreadystatechange = null, m()
                    }
                } : j && (v.gecko || v.webkit) ? v.webkit ? (b.urls[r] = t.href, y()) : (t.innerHTML = '@import "' + p + '";', f("css")) : t.onload = t.onerror = m, a.appendChild(t)
            }
        }
    }

    function y() {
        var h = g.css,
            b;
        if (h) {
            for (b = x.length;
                --b >= 0;
            ) {
                if (x[b].href === h.urls[0]) {
                    f("css");
                    break
                }
            }
            q += 1;
            h && (q < 200 ? setTimeout(y, 50) : f("css"))
        }
    }
    var v, a, g = {}, q = 0,
        d = {
            css: [],
            js: []
        }, x = l.styleSheets;
    return {
        css: function(k, i, h, j) {
            o("css", k, i, h, j)
        },
        js: function(k, i, h, j) {
            o("js", k, i, h, j)
        }
    }
}(this.document);
(function(a, b, d, c) {
    c.Pellet = {
        drop: function(i) {
            var h = new Date().getTime() + "_" + c.userAttributes.id;
            var f = c.userAttributes.id;
            d(a.body).append(b.JST["shared/pellet"]({
                org_id: i,
                session_id: h
            }));
            var g = {
                url: "/ajax_ldp",
                xhrFields: {
                    withCredentials: true
                },
                type: "post",
                data: {
                    session_id: h,
                    authenticity_token: d('meta[name="csrf-token"]').attr("content")
                }
            };
            setTimeout(function() {
                d.ajax(g)
            }, c.userAttributes.pellet_to)
        }
    }
})(document, window, $, Airbnb);
(function() {
    this.JST || (this.JST = {});
    this.JST["shared/pellet"] = (function() {
        this.JST || (this.JST = {});
        this.JST["shared/pellet"] = Handlebars.template(function(c, j, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, d = "function",
                g = this.escapeExpression;
            f += '<iframe \nstyle="color:rgb(0,0,0);float:left;position:absolute;top:-200px;left:-200px;border:0px" \nsrc="https://ldp.airbnb.com/tags?org_id=';
            if (a = b.org_id) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.org_id;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + "&session_id=";
            if (a = b.session_id) {
                a = a.call(j, {
                    hash: {},
                    data: h
                })
            } else {
                a = j.session_id;
                a = typeof a === d ? a.apply(j) : a
            }
            f += g(a) + '"\nheight=99 width=100>\n</iframe>\n';
            return f
        });
        return this.JST["shared/pellet"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST.currency_picker = (function() {
        this.JST || (this.JST = {});
        this.JST.currency_picker = Handlebars.template(function(f, l, d, k, j) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            d = d || f.helpers;
            j = j || {};
            var h = "",
                a, o, g = "function",
                i = this.escapeExpression,
                n = this,
                m = d.blockHelperMissing;

            function c(t, s) {
                var p = "",
                    r, q;
                p += '\n      <option value="';
                if (r = d.code) {
                    r = r.call(t, {
                        hash: {},
                        data: s
                    })
                } else {
                    r = t.code;
                    r = typeof r === g ? r.apply(t) : r
                }
                p += i(r) + '"';
                q = {
                    hash: {},
                    inverse: n.noop,
                    fn: n.program(2, b, s),
                    data: s
                };
                if (r = d.selected) {
                    r = r.call(t, q)
                } else {
                    r = t.selected;
                    r = typeof r === g ? r.apply(t) : r
                } if (!d.selected) {
                    r = m.call(t, r, q)
                }
                if (r || r === 0) {
                    p += r
                }
                p += ">";
                if (r = d.code) {
                    r = r.call(t, {
                        hash: {},
                        data: s
                    })
                } else {
                    r = t.code;
                    r = typeof r === g ? r.apply(t) : r
                }
                p += i(r) + "</option>\n    ";
                return p
            }

            function b(q, p) {
                return " selected"
            }
            h += '\n<div class="select select-large select-block row-space-2">\n  <select class="currency-selector">\n    ';
            o = {
                hash: {},
                inverse: n.noop,
                fn: n.program(1, c, j),
                data: j
            };
            if (a = d.currencies) {
                a = a.call(l, o)
            } else {
                a = l.currencies;
                a = typeof a === g ? a.apply(l) : a
            } if (!d.currencies) {
                a = m.call(l, a, o)
            }
            if (a || a === 0) {
                h += a
            }
            h += "\n  </select>\n</div>\n";
            return h
        });
        return this.JST.currency_picker
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST.language_picker = (function() {
        this.JST || (this.JST = {});
        this.JST.language_picker = Handlebars.template(function(f, l, d, k, j) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            d = d || f.helpers;
            j = j || {};
            var h = "",
                a, o, g = "function",
                i = this.escapeExpression,
                n = this,
                m = d.blockHelperMissing;

            function c(t, s) {
                var p = "",
                    r, q;
                p += '\n      <option value="';
                if (r = d.code) {
                    r = r.call(t, {
                        hash: {},
                        data: s
                    })
                } else {
                    r = t.code;
                    r = typeof r === g ? r.apply(t) : r
                }
                p += i(r) + '"';
                q = {
                    hash: {},
                    inverse: n.noop,
                    fn: n.program(2, b, s),
                    data: s
                };
                if (r = d.selected) {
                    r = r.call(t, q)
                } else {
                    r = t.selected;
                    r = typeof r === g ? r.apply(t) : r
                } if (!d.selected) {
                    r = m.call(t, r, q)
                }
                if (r || r === 0) {
                    p += r
                }
                p += ">";
                if (r = d.name) {
                    r = r.call(t, {
                        hash: {},
                        data: s
                    })
                } else {
                    r = t.name;
                    r = typeof r === g ? r.apply(t) : r
                }
                p += i(r) + "</option>\n    ";
                return p
            }

            function b(q, p) {
                return " selected"
            }
            h += '<div class="select select-large select-block row-space-2">\n  <select class="language-selector">\n    ';
            o = {
                hash: {},
                inverse: n.noop,
                fn: n.program(1, c, j),
                data: j
            };
            if (a = d.languages) {
                a = a.call(l, o)
            } else {
                a = l.languages;
                a = typeof a === g ? a.apply(l) : a
            } if (!d.languages) {
                a = m.call(l, a, o)
            }
            if (a || a === 0) {
                h += a
            }
            h += "\n  </select>\n</div>\n";
            return h
        });
        return this.JST.language_picker
    }).call(this)
}).call(this);
(function(a, c, b) {
    b.LangCurrPicker = {
        init: function() {
            var f = [],
                h = [],
                g = I18n.currency(),
                d = I18n.locale();
            c.each(I18n.currencies(), function(k, j) {
                f.push({
                    code: j,
                    selected: j === g
                })
            });
            c.each(I18n.languages(), function(j, k) {
                h.push({
                    code: k.locale,
                    name: k.locale_name,
                    selected: k.locale === d
                })
            });
            c(".language-picker").replaceWith(JST.language_picker({
                languages: h
            }));
            c(".currency-picker").replaceWith(JST.currency_picker({
                currencies: f
            }));
            c(".language-selector").on("change", function(j) {
                j.preventDefault();
                var i = c(this);
                b.Utils.changeLocale(i.val())
            });
            c(".currency-selector").on("change", function(j) {
                j.preventDefault();
                var i = c(this);
                b.Utils.changeCurrency(i.val(), function() {
                    a.location.reload()
                })
            })
        }
    }
}(this, jQuery, Airbnb));
(function() {
    var a, d = function(f, g) {
            return function() {
                return f.apply(g, arguments)
            }
        }, c = function(i, g) {
            for (var f in g) {
                if (b.call(g, f)) {
                    i[f] = g[f]
                }
            }

            function h() {
                this.constructor = i
            }
            h.prototype = g.prototype;
            i.prototype = new h();
            i.__super__ = g.prototype;
            return i
        }, b = {}.hasOwnProperty;
    this.AIR || (this.AIR = {});
    a = this.AIR;
    a.Views || (a.Views = {});
    a.Views.BaseView = (function(g) {
        c(f, g);

        function f() {
            this.render = d(this.render, this);
            this.initialize = d(this.initialize, this);
            return f.__super__.constructor.apply(this, arguments)
        }
        f.prototype.template = null;
        f.prototype._hasRendered = false;
        f.prototype.initialize = function(h) {
            this.options = h;
            this._bindViewEvents();
            this.bindings();
            return this._postInitialize()
        };
        f.prototype._bindViewEvents = function() {
            if (this.viewEvents == null) {
                return
            }
            return _.each(this.viewEvents, (function(h) {
                return function(j, i) {
                    if (_.isString(j)) {
                        j = h[j]
                    }
                    return h.on(i, j, h)
                }
            })(this))
        };
        f.prototype._postInitialize = function() {
            this.postInitialize();
            return this.trigger("initialize")
        };
        f.prototype.postInitialize = function() {};
        f.prototype._preRender = function() {
            this.preRender();
            return this.trigger("render:pre")
        };
        f.prototype.preRender = function() {};
        f.prototype.getRenderData = function() {
            if (this.model) {
                return this.model.toJSON()
            } else {
                return {}
            }
        };
        f.prototype.getTemplate = function() {
            if (_.isFunction(this.template)) {
                return this.template
            }
            if (this.template && JST[this.template]) {
                return JST[this.template]
            } else {
                return null
            }
        };
        f.prototype.getHtml = function() {
            var h;
            h = this.getTemplate();
            if (h) {
                return h(this.getRenderData(), {
                    partials: JST
                })
            } else {
                return ""
            }
        };
        f.prototype.getAttributes = function() {
            return {}
        };
        f.prototype.render = function(h) {
            if (h == null) {
                h = {}
            }
            this._preRender();
            if (h.html !== false) {
                this.$el.html(this.getHtml())
            }
            this.$el.attr(this.getAttributes());
            this.trigger("render");
            this._bindUIElements();
            this._postRender();
            this._hasRendered = true;
            return this
        };
        f.prototype._postRender = function() {
            this.postRender();
            return this.trigger("render:post")
        };
        f.prototype._bindUIElements = function() {
            var i, k, j, h;
            if (!this.ui) {
                return
            }
            if (!this.uiBindings) {
                this.uiBindings = _.result(this, "ui")
            }
            this.ui = {};
            k = this.uiBindings;
            j = [];
            for (i in k) {
                h = k[i];
                j.push(this.ui[i] = this.$(h))
            }
            return j
        };
        f.prototype.postRender = function() {};
        f.prototype.bindings = function() {};
        f.prototype.cleanup = function() {
            this.trigger("cleanup");
            this.dispose();
            return this.remove()
        };
        f.prototype.dispose = function() {
            return;
            this.undelegateEvents();
            if (this.model) {
                this.model.off(null, null, this)
            }
            if (this.collection) {
                this.collection.off(null, null, this)
            }
            return this
        };
        f.prototype.$get = function(i, h) {
            if (h == null) {
                h = false
            }
            this._$getEls || (this._$getEls = {});
            if (h || !this._$getEls[i]) {
                this._$getEls[i] = this.$("[data-" + i + "]")
            }
            return this._$getEls[i]
        };
        return f
    })(Backbone.View);
    if (typeof module !== "undefined" && module !== null) {
        module.exports = a.Views.BaseView
    }
}).call(this);
! function(a, c) {
    var b = a.Airbnb || {};
    b.SurveyModal = function(i, g) {
        var h = require("o2"),
            d = h.Modal,
            k = (g.shuffle) ? true : false,
            f = (g.inputElementTag) || "input:checkbox:checked";
        this.generateModal = function() {
            var l = JST[i]();
            $modalEl = c(l);
            modal = new d($modalEl);
            if (k) {
                j()
            }
            return modal
        };
        this.getUserSelections = function() {
            var l = c(".survey-form " + f);
            return l.toArray().map(function(m) {
                return c(m).val()
            })
        };
        this.logSubmitSurvey = function(l, m) {
            c(".submit-survey").on("click", function() {
                m = m || {};
                var n = {
                    selection: this.getUserSelections().map(function(o) {
                        return parseInt(o)
                    }),
                    user_id: b.userAttributes.id
                };
                b.Tracking.logEvent({
                    event_name: l,
                    event_data: c.extend({}, n, m)
                })
            }.bind(this))
        };

        function j() {
            var l = c(".shuffle");
            c(".survey-form").prepend(_.shuffle(l))
        }
    }
}(window, $);
! function(c, d, g) {
    var b, a = "/remember_browser_modal";

    function f() {
        b = require("o2").Modal;
        this.modal = null;
        this.deferred = d.Deferred()
    }
    f.prototype.getHTML = function() {
        return d.get(a).then(d.trim)
    };
    f.prototype.perform = function() {
        this.getHTML().done(this.display.bind(this));
        return this.deferred.promise()
    };
    f.prototype.display = function(h) {
        this.modal = new b(h, {
            sticky: true
        });
        this.modal.open();
        this.modal.$element.on("submit", "form", this.submit.bind(this))
    };
    f.prototype.submit = function(k) {
        k.preventDefault();
        this.modal.$element.find(".modal-content").addClass("loading");
        var h = d(k.target),
            i = h.attr("action"),
            j = h.serialize(),
            l;
        l = d.ajax({
            type: "POST",
            url: i,
            data: j,
            dataType: "json"
        });
        l.always(function(m, n) {
            this.modal.close();
            this.deferred.resolve()
        }.bind(this));
        return l
    };
    provide("RememberBrowserModal", f)
}(window, jQuery);
! function(d, f) {
    var c, a = "/underage_user_modal";

    function b() {
        c = require("o2").Modal;
        this.modal = null
    }
    b.prototype.getHTML = function() {
        return f.get(a).then(f.trim)
    };
    b.prototype.perform = function() {
        this.getHTML().done(this.display.bind(this))
    };
    b.prototype.display = function(g) {
        this.modal = new c(g);
        this.modal.open()
    };
    provide("UnderageUserModal", b)
}(window, jQuery);
(function() {
    this.JST || (this.JST = {});
    this.JST["email_verification/change_verification_email_panel"] = (function() {
        this.JST || (this.JST = {});
        this.JST["email_verification/change_verification_email_panel"] = Handlebars.template(function(c, k, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, m, l, j = b.helperMissing,
                g = this.escapeExpression,
                d = "function";
            f += "<div class='change-email-errors-container alert hide'></div>\n\n<div class='panel-body text-center'>\n  <h3>";
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "email_verification_modal_verify_email_pane_lets_try_that_again", l) : j.call(k, "t", "email_verification_modal_verify_email_pane_lets_try_that_again", l))) + "</h3>\n\n  <div class='verify-email-icon verify-email-panel-icon'></div>\n\n  <div class='row'>\n    <div class='col-6 col-center'>\n      <div class='row'>\n        <form class='update-resend-verification-email-form'>\n          <fieldset>\n            <div class='row row-space-1'>\n              <input class='decorative-input col-12 change-verification-email-field' type='email' name='email' value='";
            if (m = b.email) {
                m = m.call(k, {
                    hash: {},
                    data: h
                })
            } else {
                m = k.email;
                m = typeof m === d ? m.apply(k) : m
            }
            f += g(m) + "'></input>\n            </div>\n            <div class='row'>\n              <input type='submit' value=\"";
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "email_verification_modal_verify_email_pane_update_and_resend_email", l) : j.call(k, "t", "email_verification_modal_verify_email_pane_update_and_resend_email", l))) + "\" class='col-12 btn btn-primary'/>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
            return f
        });
        return this.JST["email_verification/change_verification_email_panel"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["email_verification/email_verification_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["email_verification/email_verification_modal"] = Handlebars.template(function(h, i, f, c, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            f = f || h.helpers;
            c = c || h.partials;
            g = g || {};
            var a = "",
                d, b = this;
            a += '<div id=\'email-verification\' class="modal" role="dialog" aria-hidden="true">\n  <div class="modal-table">\n    <div class="modal-cell">\n      <div class="modal-content panel">\n        ';
            d = b.invokePartial(c["email_verification/verify_email_panel"], "email_verification/verify_email_panel", i, f, c, g);
            if (d || d === 0) {
                a += d
            }
            a += "\n      </div>\n    </div>\n  </div>\n</div>\n";
            return a
        });
        return this.JST["email_verification/email_verification_modal"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["email_verification/email_verified_panel"] = (function() {
        this.JST || (this.JST = {});
        this.JST["email_verification/email_verified_panel"] = Handlebars.template(function(c, j, b, h, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            g = g || {};
            var d = "",
                a, k, i = b.helperMissing,
                f = this.escapeExpression;
            d += '<div class="panel-body text-center">\n  <h3>';
            k = {
                hash: {
                    first_name: (j.first_name)
                },
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_good_to_meet_you", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_good_to_meet_you", k))) + "</h3>\n  <div class='verify-email-icon email-verified-panel-icon'></div>\n  <div class='row'>\n    <div class='col-10 col-center'>\n      <p>";
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_welcome_to_our_community", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_welcome_to_our_community", k))) + "</p>\n      <button class='btn btn-primary email-verification-completed'>";
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_get_started", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_get_started", k))) + "</button>\n    </div>\n  </div>\n</div>\n";
            return d
        });
        return this.JST["email_verification/email_verified_panel"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["email_verification/retry_email_verification_panel"] = (function() {
        this.JST || (this.JST = {});
        this.JST["email_verification/retry_email_verification_panel"] = Handlebars.template(function(c, j, b, h, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            g = g || {};
            var d = "",
                a, k, i = b.helperMissing,
                f = this.escapeExpression;
            d += '<div class="panel-body text-center">\n  <h3>';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_lets_try_that_again", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_lets_try_that_again", k))) + "</h3>\n\n  <div class='verify-email-icon verify-email-panel-icon'></div>\n\n  <div class='row'>\n    <div class='col-10 col-center'>\n      <p>\n        ";
            k = {
                hash: {
                    email: (j.email)
                },
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_we_sent_your_activation_email_to", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_we_sent_your_activation_email_to", k))) + "\n        <br/>\n        <a href='#' class='resend-verification-email'>";
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_resend_email", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_resend_email", k))) + "</a>\n      </p>\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-10 col-center'>\n      <p>\n        ";
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_enter_the_wrong_email_address", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_enter_the_wrong_email_address", k))) + "\n        <br/>\n        <a href='#' class='change-verification-email'>";
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "email_verification_modal_verify_email_pane_change_email_address", k) : i.call(j, "t", "email_verification_modal_verify_email_pane_change_email_address", k))) + "</a>\n      </p>\n    </div>\n  </div>\n</div>\n";
            return d
        });
        return this.JST["email_verification/retry_email_verification_panel"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["email_verification/verify_email_panel"] = (function() {
        this.JST || (this.JST = {});
        this.JST["email_verification/verify_email_panel"] = Handlebars.template(function(f, l, d, j, i) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            d = d || f.helpers;
            i = i || {};
            var g = "",
                b, o, n, k = d.helperMissing,
                h = this.escapeExpression,
                m = this;

            function c(q, p) {
                return "\n    <div class='verify-email-icon verify-business-email-panel-icon'></div>\n  "
            }

            function a(q, p) {
                return "\n    <div class='verify-email-icon verify-email-panel-icon'></div>\n  "
            }
            g += "<div class='verify-email-panel panel-body text-center'>\n  <div class='row'><a href='#' class='modal-close' data-behavior='modal-close'></a></div>\n  <h3>";
            n = {
                hash: {},
                data: i
            };
            g += h(((b = d.t), b ? b.call(l, "email_verification_modal_verify_email_pane_check_your_email_header", n) : k.call(l, "t", "email_verification_modal_verify_email_pane_check_your_email_header", n))) + "</h3>\n\n  ";
            o = d["if"].call(l, l.isBusinessTravel, {
                hash: {},
                inverse: m.program(3, a, i),
                fn: m.program(1, c, i),
                data: i
            });
            if (o || o === 0) {
                g += o
            }
            g += "\n\n  <div class='row'>\n    <div class='col-10 col-center'>\n      <p>\n        ";
            n = {
                hash: {
                    email: (l.email)
                },
                data: i
            };
            g += h(((b = d.t), b ? b.call(l, "email_verification_modal_verify_email_pane_verify_your_email_directions", n) : k.call(l, "t", "email_verification_modal_verify_email_pane_verify_your_email_directions", n))) + "\n      </p>\n      <p>\n        ";
            n = {
                hash: {},
                data: i
            };
            g += h(((b = d.t), b ? b.call(l, "email_verification_modal_verify_email_we_will_wait", n) : k.call(l, "t", "email_verification_modal_verify_email_we_will_wait", n))) + "\n        <br/>\n        <a href='#' class='verification-email-not-received'>";
            n = {
                hash: {},
                data: i
            };
            g += h(((b = d.t), b ? b.call(l, "email_verification_modal_verify_email_didnt_receive_our_email", n) : k.call(l, "t", "email_verification_modal_verify_email_didnt_receive_our_email", n))) + "</a>\n      </p>\n    </div>\n  </div>\n</div>\n";
            return g
        });
        return this.JST["email_verification/verify_email_panel"]
    }).call(this)
}).call(this);
! function(b, c, a) {
    var d = a.Views.BaseView.extend({
        template: JST["email_verification/email_verification_modal"],
        postInitialize: function() {
            this.isBusinessTravelContext = this.options.isBusinessTravel;
            if (!this.isBusinessTravelContext) {
                this.pollEmailVerificationStatus()
            }
            this.render()
        },
        render: function() {
            if (this.options.isModal && !b.location.pathname.match(/\/users\/verify_email/)) {
                var f = require("o2").Modal;
                this.modal = new f(this.template(this.options, {
                    partials: JST
                }), {
                    sticky: false
                });
                this.$el = this.modal.$element;
                this.$contentArea = this.$el.find(".modal-content");
                this.modal.open();
                this.delegateEvents()
            } else {
                this.$el = c("#email-verification");
                this.$contentArea = this.$el;
                this.$el.html(JST["email_verification/verify_email_panel"](this.options));
                this.delegateEvents()
            }
            return this
        },
        events: {
            "click .verification-email-not-received": "retryEmailVerification",
            "click .resend-verification-email": "resendVerificationEmail",
            "click .change-verification-email": "changeVerificationEmail",
            "submit .update-resend-verification-email-form": "updateResendVerificationEmail",
            "click .email-verification-completed": "emailVerificationCompleted"
        },
        pollEmailVerificationStatus: function() {
            var f = "/users/email_confirmed";
            this.emailVerificationInterval = b.setInterval(function() {
                c.getJSON(f).done(function(g) {
                    if (g.confirmed) {
                        this.options = _.extend(this.options, g);
                        this.showEmailVerified();
                        b.clearInterval(this.emailVerificationInterval)
                    }
                }.bind(this))
            }.bind(this), 5000)
        },
        retryEmailVerification: function(g) {
            var f = JST["email_verification/retry_email_verification_panel"];
            this.$contentArea.html(f(this.options))
        },
        resendVerificationEmail: function(g) {
            var f = (this.isBusinessTravelContext ? "/user_emails/request_new_business_verification_email" : "/users/request_new_confirm_email");
            g.preventDefault();
            this.$contentArea.addClass("loading");
            c.getJSON(f).done(function() {
                this.showVerifyEmail();
                this.$contentArea.removeClass("loading")
            }.bind(this))
        },
        changeVerificationEmail: function(g) {
            g.preventDefault();
            var f = JST["email_verification/change_verification_email_panel"];
            this.$contentArea.html(f(this.options))
        },
        updateResendVerificationEmail: function(h) {
            h.preventDefault();
            var g = this.$el.find(".change-verification-email-field").val();
            var f = (this.isBusinessTravelContext ? "/user_emails/update_business_email_and_send_verification" : "/users/update_and_resend_confirmation_email");
            this.$contentArea.addClass("loading");
            c.ajax({
                type: "POST",
                url: f,
                data: {
                    email: g
                },
                dataType: "JSON"
            }).then(function() {
                this.options = _.extend(this.options, {
                    email: g
                });
                this.showVerifyEmail();
                this.$contentArea.removeClass("loading")
            }.bind(this)).fail(function(l) {
                var i = l.responseJSON;
                var k = i.errors.email;
                var j = "";
                _.map(k, function(m) {
                    j += "Email " + m + ". "
                });
                this.$el.find(".change-email-errors-container").html(j).removeClass("hide");
                this.$contentArea.removeClass("loading")
            }.bind(this))
        },
        showVerifyEmail: function() {
            var f = JST["email_verification/verify_email_panel"];
            this.$contentArea.html(f(this.options))
        },
        showEmailVerified: function() {
            if (this.isBusinessTravelContext) {
                return
            }
            this.$contentArea.addClass("loading");
            var f = JST["email_verification/email_verified_panel"];
            this.$contentArea.html(f(this.options));
            b.setTimeout(function() {
                this.$contentArea.removeClass("loading")
            }.bind(this), 1000)
        },
        emailVerificationCompleted: function() {
            Airbnb.mediator.emit("login", null);
            Airbnb.SignInUp.broadcastLoggedInStatusToOtherTabs(true);
            if (this.options.isModal) {
                this.modal.close();
                for (var g in this.options.callbacks) {
                    var f = this.options.callbacks[g];
                    if (f) {
                        f()
                    }
                }
            } else {
                b.location = this.options.redirectUrl
            }
        }
    });
    provide("email_verification", d)
}(window, jQuery, AIR);
(function() {
    this.JST || (this.JST = {});
    this.JST["surveys/how_learned_about_airbnb"] = (function() {
        this.JST || (this.JST = {});
        this.JST["surveys/how_learned_about_airbnb"] = Handlebars.template(function(c, j, b, h, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            g = g || {};
            var d = "",
                a, k, i = b.helperMissing,
                f = this.escapeExpression;
            d += '<div class="modal" role="dialog" aria-hidden="true">\n  <div class="modal-table">\n    <div class="modal-cell">\n      <div class="modal-content">\n        <div class="panel-header">\n          ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.header_title", k) : i.call(j, "t", "signup_survey.header_title", k))) + '\n        </div>\n        <div class="panel-body">\n          <form action="" method="post" class="survey-form">\n            <label class="shuffle">\n              <input type="checkbox" value="1">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.friend_family", k) : i.call(j, "t", "signup_survey.friend_family", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="2">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.event", k) : i.call(j, "t", "signup_survey.event", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="3">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.internet_search", k) : i.call(j, "t", "signup_survey.internet_search", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="4">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.news_article", k) : i.call(j, "t", "signup_survey.news_article", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="5">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.print_ad", k) : i.call(j, "t", "signup_survey.print_ad", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="6">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.tv", k) : i.call(j, "t", "signup_survey.tv", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="7">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.online_ad", k) : i.call(j, "t", "signup_survey.online_ad", k))) + '\n            </label>\n            <label class="shuffle">\n              <input type="checkbox" value="8">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.social_media", k) : i.call(j, "t", "signup_survey.social_media", k))) + '\n            </label>\n            <label>\n              <input type="checkbox" value="9">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.other", k) : i.call(j, "t", "signup_survey.other", k))) + '\n            </label>\n            <label>\n              <input type="checkbox" value="10">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "signup_survey.dont_remember", k) : i.call(j, "t", "signup_survey.dont_remember", k))) + '\n            </label>\n          </form>\n        </div>\n        <div class="panel-footer">\n          <button class="btn btn-primary submit-survey" data-behavior="modal-close">\n            ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "shared.Submit", k) : i.call(j, "t", "shared.Submit", k))) + '\n          </button>\n          <button class="btn" data-behavior="modal-close">';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "shared.Skip", k) : i.call(j, "t", "shared.Skip", k))) + "</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
            return d
        });
        return this.JST["surveys/how_learned_about_airbnb"]
    }).call(this)
}).call(this);
(function(a, f) {
    var c = function() {}, d = require("o2-modal"),
        b = false;
    c.prototype = {
        loginCallbacks: [],
        init: function(h) {
            var g = this;
            if (h) {
                g.page = h.page;
                g.inModal = !! h.inModal
            }
            f("#signin_email").on("change", function() {
                var j = f(this);
                j.val(f.trim(j.val()))
            });
            if (f("#otp").length > 0) {
                return
            }
            var i = f(".signup.modal-content").length > 0;
            this.initValidation(i);
            this.initFacebookEvents();
            this.initForgotPassword(i);
            this.initFacebookSignup();
            f(".create-using-email").one("click", function(j) {
                Airbnb.Utils.trackRegularEvent("signup_login_flow", "signup_email", "click");
                f(this).addClass("hide");
                f(".social-buttons").addClass("hide");
                f(".signup-form-fields").removeClass("hide");
                f(".social-links").removeClass("hide");
                f("#tos_outside").addClass("hide");
                j.preventDefault()
            });
            g.trackInternalLinks(g.page);
            Airbnb.mediator.on("guestOnboarding::upsellAssetsLoaded", function() {
                b = true
            });
            Airbnb.header.clearThumbnailUrl()
        },
        validationRules: {
            login: {
                email: {
                    required: true,
                    email: true,
                    maxlength: 255
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            signup: {
                first_name: "required",
                last_name: "required",
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                },
                password_confirmation: {
                    required: true,
                    minlength: 5,
                    equalTo: "#user_password"
                },
                birthday_year: {
                    required: true
                },
                birthday_month: {
                    required: true
                },
                birthday_day: {
                    required: true
                }
            }
        },
        validationGroups: {
            signup: {
                birthday: "user[birthday_year] user[birthday_month] user[birthday_day]"
            }
        },
        initValidation: function(h) {
            var g = this;
            this.validationOptions = {
                submitHandler: function(i) {
                    Airbnb.Utils.trackQueuedEvent("signup_login_flow", g.page + "_attempt_email", "click", {
                        status: "valid",
                        remember_me: f("#remember_me2:checked").length > 0
                    });
                    g.disableSubmit(i);
                    if (h) {
                        g.ajaxSubmitFunction(i)
                    } else {
                        i.submit()
                    }
                },
                invalidHandler: function(j, i) {
                    if (i.numberOfInvalids() > 0) {
                        Airbnb.Utils.trackRegularEvent("signup_login_flow", g.page + "_attempt_email", "click", {
                            status: "invalid",
                            reason: i.invalid,
                            remember_me: f("#remember_me2:checked").length > 0
                        })
                    }
                },
                errorClass: "invalid",
                onkeyup: false,
                focusInvalid: false,
                onfocusout: false,
                errorPlacement: function(i, j) {
                    if (j.attr("name") == "user[birthday_day]" || j.attr("name") == "user[birthday_month]" || j.attr("name") == "user[birthday_year]") {
                        var k = f("#inputBirthday")
                    } else {
                        var k = j.parents(".control-group")
                    }
                    k.addClass("invalid");
                    i.prependTo(k);
                    j.one("focus", function() {
                        g.clearError(k)
                    })
                }
            };
            f(".login-form").validate(f.extend({}, this.validationOptions, {
                rules: this.validationRules.login
            }, {
                messages: this.localizedMessages()
            }));
            f(".signup-form").validate(f.extend({}, this.validationOptions, {
                groups: this.validationGroups.signup
            }, {
                rules: this.fixSignupKeys(this.validationRules.signup)
            }, {
                messages: this.fixSignupKeys(this.localizedMessages())
            }))
        },
        fixSignupKeys: function(i) {
            var h = {};
            for (var g in i) {
                if (i.hasOwnProperty(g)) {
                    h["user[" + g + "]"] = i[g]
                }
            }
            return h
        },
        trackFacebookEvent: function(j, i, g) {
            var h = Airbnb.userAttributes,
                k = this;
            Airbnb.Utils.trackEvent("signup_login_flow", k.page + "_attempt_facebook", "third_party_backend", j, {
                step: i,
                in_modal: g,
                fb_logged_in: JSCookie.cookie("fbs"),
                fb_connected: h.facebook_connected,
                fb_publish_permission: h.og_publish,
                fb_perms: Airbnb.FACEBOOK_PERMS,
                status: status
            })
        },
        initFacebookEvents: function() {
            var m = this,
                l = window.ga,
                j = f("#facebook_form"),
                h = j.hasClass("in_modal"),
                i = JSCookie.cookie("fbs"),
                k;
            var g = function(n) {
                var o = window.location.pathname === "/signup_login" || window.location.pathname === "/login";
                Airbnb.Utils.trackEvent("signup_login_flow", m.page + "_attempt_facebook", "click", o);
                if (h && i === "not_authorized") {
                    m.trackFacebookEvent(o, "start_perm_flow", true)
                } else {
                    if (i === "not_authorized") {
                        m.trackFacebookEvent(o, "start_perm_flow_fb_cookie", false)
                    }
                    m.trackFacebookEvent(o, "start_perm_flow", false)
                }
                l("send", "event", "Authenticate", "FacebookClick", "Signup/Login");
                k = function(p) {
                    if (p.authResponse) {
                        l("send", "event", "Authenticate", "FacebookLogin", "Signup/Login");
                        if (h && JSCookie.cookie("fbs")) {
                            m.trackFacebookEvent(false, "finished_perm_flow", true)
                        } else {
                            m.trackFacebookEvent(false, "finished_perm_flow", false)
                        }
                        j.submit();
                        m.disableSubmit()
                    } else {
                        l("send", "event", "Authenticate", "FacebookDeny", "Signup/Login");
                        m.trackFacebookEvent(false, "cancelled_perm_flow", false)
                    }
                };
                FB.login(k, {
                    scope: Airbnb.FACEBOOK_PERMS
                });
                n.preventDefault()
            };
            f(".fb-button").click(g);
            f(".facebook-link-in-signup").click(g)
        },
        initForgotPassword: function(g) {
            if (!g) {
                f("#forgot_password_container").find("input").placeholder();
                return
            }
            f(".forgot-password").on("click", function(j) {
                j.preventDefault();
                Airbnb.Utils.trackRegularEvent("signup_login_flow", "nav_forgot_password", "click");
                var i = f("input[name=email]").val(),
                    h = f(this).attr("href");
                if (i.length) {
                    h = h.split("?")[0] + "?email=" + i
                }
                f.get(h, function(m) {
                    var l = f(".signup");
                    l.html(f.trim(m));
                    var k = l.find("form");
                    k.find("input").placeholder();
                    k.on("submit", function(n) {
                        n.preventDefault();
                        Airbnb.Utils.trackQueuedEvent("signup_login_flow", "nav_forgot_password_submit", "click");
                        f.post(k.attr("action"), k.serialize(), function(o) {
                            window.location.reload()
                        }, "json")
                    })
                })
            })
        },
        localizedMessages: function() {
            return {
                password: {
                    required: I18n.t("validation.failure.password_required"),
                    minlength: I18n.t("validation.failure.password_too_short")
                },
                email: {
                    required: I18n.t("validation.failure.email_required"),
                    email: I18n.t("validation.failure.email_invalid")
                },
                password_confirmation: {
                    required: I18n.t("validation.failure.password_confirmation_required"),
                    minlength: I18n.t("validation.failure.password_confirmation_too_short"),
                    equalTo: I18n.t("validation.failure.password_confirmation_doesnt_match")
                },
                first_name: {
                    required: I18n.t("validation.failure.first_name_required")
                },
                last_name: {
                    required: I18n.t("validation.failure.last_name_required")
                },
                birthday_day: {
                    required: I18n.t("validation.failure.birthday_required")
                },
                birthday_month: {
                    required: I18n.t("validation.failure.birthday_required")
                },
                birthday_year: {
                    required: I18n.t("validation.failure.birthday_required")
                },
                success: I18n.t("validation.success")
            }
        },
        disableSubmit: function(g) {
            f("input:submit", g).addClass("disabled")
        },
        showUnderageUserModal: function() {
            var h = require("UnderageUserModal"),
                g = new h();
            return g.perform()
        },
        showEmailVerificationModal: function(g) {
            var h = require("email_verification");
            g.isModal = true;
            new h(g)
        },
        showRememberBrowserModal: function() {
            var h = require("RememberBrowserModal"),
                g = new h();
            return g.perform()
        },
        afterAjaxSuccess: function() {
            this.broadcastLogin();
            amplify.store("previously_logged_in", true);
            for (var h in this.loginCallbacks) {
                var g = this.loginCallbacks[h];
                if (g) {
                    g()
                }
            }
        },
        ajaxSubmitFunction: function(i) {
            var h = this,
                g = f(i);
            callbacks = this.loginCallbacks;
            f.post(g.attr("action"), g.serialize(), function(k) {
                if (k.data && k.data.redirect) {
                    window.location.replace(k.data.redirect)
                } else {
                    if (k.data && k.data.otp) {
                        f.get("/otp_modal", function(m) {
                            d.close();
                            f(document).one("modalTransitionEnd", ".signup", function(n) {
                                m = f.trim(m);
                                d(m);
                                d.open()
                            })
                        })
                    } else {
                        if (k.data && k.data.suspended_state_redirect) {
                            window.location.replace(k.data.suspended_state_redirect)
                        } else {
                            if (k.data && k.data.needs_email_verification) {
                                var l = g.serializeObject();
                                l.email = k.data.email;
                                l.callbacks = callbacks;
                                d.close();
                                h.showEmailVerificationModal(l)
                            } else {
                                if (k.data && k.data.needs_account_recovery) {
                                    window.location.replace("/users/security_check?format=html")
                                } else {
                                    if (k.data && k.data.underage_user) {
                                        d.close();
                                        h.showUnderageUserModal()
                                    } else {
                                        if (k.success) {
                                            d.close();
                                            if (k.signup_survey) {
                                                var j = new Airbnb.SurveyModal("surveys/how_learned_about_airbnb", {
                                                    shuffle: true
                                                });
                                                j.generateModal().open();
                                                j.logSubmitSurvey("signup_survey")
                                            } else {
                                                if (k.signup_profile_pic_upsell) {
                                                    if (b) {
                                                        h.initProfilePicUpsellModal()
                                                    } else {
                                                        Airbnb.Tracking.logEvent({
                                                            event_name: "signup_profile_pic_upsell_modal",
                                                            event_data: {
                                                                section: "header_view",
                                                                action: "error"
                                                            }
                                                        })
                                                    }
                                                }
                                            } if (k.show_remember_browser) {
                                                h.showRememberBrowserModal().done(function() {
                                                    h.afterAjaxSuccess()
                                                });
                                                return
                                            }
                                            h.afterAjaxSuccess()
                                        } else {
                                            f("#notice").html('<i class="icon icon-alert-alt alert-icon"></i>' + k.message).show()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                h.enableSubmit(g)
            }, "json")
        },
        initFacebookSignup: function() {
            var g = this;
            var h = f("#facebook_form.in_modal");
            h.submit(function(i) {
                i.preventDefault();
                g.ajaxSubmitFunction(h)
            })
        },
        initProfilePicUpsellModal: function() {
            var h = f("#social-media-data");
            var i = require("profile_pic_upsell/upsell_modal");
            var g = new i({
                tracking_event_name: "signup_profile_pic_upsell_modal",
                flow: "signup_profile_pic_upsell",
                showWeiboButton: h.data("showWeiboButton"),
                showFacebookButton: h.data("showFacebookButton"),
                showGoogleButton: h.data("showGoogleButton"),
                didUploadTextBelow: [I18n.t("profile_pic_upsell.glad_youre_here"), I18n.t("profile_pic_upsell.start_by_completing_profile")].join(" "),
                didNotUploadTextBelow: [I18n.t("profile_pic_upsell.help_community_get_to_know_you"), I18n.t("profile_pic_upsell.easier_to_book")].join(" ")
            });
            g.render()
        },
        clearError: function(g) {
            g.removeClass("invalid");
            g.find("label.invalid").remove()
        },
        enableSubmit: function(g) {
            f("input:submit", g).removeClass("disabled")
        },
        addLoginCallback: function(g) {
            if (!_.include(this.loginCallbacks, g)) {
                this.loginCallbacks.push(g)
            }
        },
        addFlow: function(g) {
            this.flow = g
        },
        initSignInOutListeners: function() {
            Airbnb.mediator.on("login", this.onLogin);
            Airbnb.mediator.on("logout", this.onLogout);
            f(window).on("storage", function(g) {
                if (g.originalEvent.key === "logged_in_event") {
                    if (g.originalEvent.newValue === "true") {
                        Airbnb.mediator.emit("login")
                    } else {
                        Airbnb.mediator.emit("logout")
                    }
                }
            })
        },
        doLogout: function() {
            Airbnb.Utils.trackQueuedEvent("signup_login_flow", "logout", "impression");
            var g = f("<form></form>");
            g.hide().attr({
                method: "POST",
                action: "/logout"
            });
            f(document.body).append(g);
            g.submit();
            Airbnb.header.clearThumbnailUrl();
            amplify.store("user_first_name", null);
            amplify.store("hash_user_id", null);
            amplify.store("modal_userpic_url", null);
            amplify.store("previously_logged_in", true);
            this.broadcastLoggedInStatusToOtherTabs(false)
        },
        broadcastLogin: function(g) {
            Airbnb.mediator.emit("login", g);
            Airbnb.SignInUp.broadcastLoggedInStatusToOtherTabs(true)
        },
        onLogin: function() {
            Airbnb.Utils.resetUser();
            Airbnb.header.personalizeHeader()
        },
        onLogout: function() {
            Airbnb.setOptions({
                isUserLoggedIn: false
            });
            Airbnb.header.personalizeHeader();
            Airbnb.SignupLoginModal.launchSignedOut()
        },
        broadcastLoggedInStatusToOtherTabs: function(g) {
            if (window.localStorage) {
                window.localStorage.setItem("logged_in_event", g)
            }
        },
        trackInternalLinks: function(g) {
            if (g === "login") {
                f(".link-to-signup-in-login").on("click", function(h) {
                    Airbnb.Utils.trackRegularEvent("signup_login_flow", "nav_signup", "click", {
                        origin: "login-modal"
                    })
                })
            } else {
                if (g === "signup") {
                    f(".link-to-login-in-signup").on("click", function(h) {
                        Airbnb.Utils.trackRegularEvent("signup_login_flow", "nav_login", "click", {
                            origin: "signup-modal"
                        })
                    })
                }
            }
        }
    };
    a.Airbnb = a.Airbnb || {};
    a.Airbnb.SignInUp = new c();
    Airbnb.addInitHook(Airbnb.SignInUp.initSignInOutListeners.bind(Airbnb.SignInUp))
})(window, jQuery, undefined);
! function(a, d) {
    var c, b;
    b = require("o2-modal");
    c = {
        inProgress: false,
        launchSignup: function(f) {
            f = f || {};
            var h = function() {
                Airbnb.doConversions();
                if (f.callback) {
                    f.callback()
                }
            }, g = d.extend({}, f, {
                    callback: h
                });
            this.setupSignupLogin("signup", g)
        },
        launchLogin: function(f) {
            this.setupSignupLogin("login", f)
        },
        launchSignedOut: function(f) {
            this.setupSignupLogin("signedout", f)
        },
        setupSignupLogin: function(j, i) {
            if (this.inProgress) {
                return
            } else {
                this.inProgress = true
            }
            var k = j;
            if (j == "signedout") {
                k = "logout"
            }
            Airbnb.Utils.trackRegularEvent("signup_login_flow", k, "impression");
            i = i || {};
            var m = i.callback,
                g = i.urlParams,
                f = i.flow,
                h = this.getModalUrl(j, g),
                l = this;
            d(document).on("modalTransitionEnd", ".modal", function(n) {
                d(".modal.signup:not(.in)").remove();
                d(".signup").parents('.modal[aria-hidden="true"]').remove();
                l.inProgress = false
            });
            this.setLoading(j, true);
            d.get(h, function(o) {
                b(d.trim(o));
                b.open();
                if (!Airbnb.isO20) {
                    var n = require("o2").Tooltip;
                    n.bind(b.current())
                }
                l.setLoading(j, false);
                d("input[placeholder], textarea[placeholder]").placeholder();
                d(".modal").on("click", ".modal-link", function(q) {
                    q.preventDefault();
                    var p = d(q.target).closest(".signup");
                    d.get(d(this).attr("data-modal-href"), function(r) {
                        r = d.trim(r);
                        p.html(d(r).children())
                    })
                });
                b.current().closest(".modal").data("o2-modal").on("close", function() {
                    Airbnb.Utils.trackRegularEvent("signup_login_flow", "nav_click_away", "impression", {
                        modal: k
                    })
                });
                if (j == "signedout") {
                    l.listenForLogin()
                }
            });
            if (m) {
                Airbnb.SignInUp.addLoginCallback(m)
            }
            if (f) {
                Airbnb.SignInUp.addFlow(f)
            }
            Airbnb.mediator.emit("guestOnboarding::profilePicUpsell", function() {
                Airbnb.mediator.emit("guestOnboarding::upsellAssetsLoaded")
            })
        },
        setLoading: function(i, g) {
            var f = d(".airbnb-header [data-" + i + "-modal]");
            var h = "link-disabled";
            if (g) {
                f.addClass(h);
                f.attr("disabled", true)
            } else {
                f.removeClass(h);
                f.removeAttr("disabled")
            }
        },
        getModalUrl: function(h, f) {
            var g;
            switch (h) {
                case "login":
                    g = "/login_modal";
                    break;
                case "signup":
                    g = "/signup_modal";
                    break;
                case "signedout":
                    g = "/signed_out_modal";
                    break;
                default:
                    break
            }
            if (f) {
                g = g + "?" + f
            }
            return g
        },
        initClickEvents: function() {
            if (window.location.protocol !== "https:" && !Airbnb.Utils.isDev() && !Airbnb.Utils.isTest()) {
                d(document).on("click", "[data-login-modal]", function(g) {
                    g.preventDefault();
                    document.location.href = "/login?" + d(this).data("redirect")
                });
                d(document).on("click", "[data-signup-modal]", function(g) {
                    g.preventDefault();
                    document.location.href = "/signup_login?" + d(this).data("redirect")
                });
                return
            }
            if (["/login", "/signup_login"].indexOf(window.location.pathname) !== -1) {
                return
            }
            var f = this;
            d(document).on("click", "[data-login-modal]", function(g) {
                g.preventDefault();
                f.launchLogin()
            });
            d(document).on("click", "[data-signup-modal]", function(h) {
                var i = d(this).data("headerView"),
                    g = i ? "is_in_header_view=" + d(this).data("headerView") : "";
                h.preventDefault();
                f.launchSignup({
                    urlParams: g
                })
            })
        },
        listenForLogin: function() {
            Airbnb.mediator.once("login", function(f) {
                if (!f || f.refresh !== false) {
                    window.location.reload()
                }
            })
        }
    };
    a.SignupLoginModal = c;
    c.initClickEvents()
}(Airbnb, jQuery);
! function(h, c, g) {
    function f() {
        Airbnb.mediator.on("guestOnboarding::profilePicUpsell", b);
        if (window.location.hash.indexOf("welcome") >= 0) {
            b(i)
        }
    }

    function i() {
        var j = window.location.hash;
        if (j === "#signup_welcome") {
            a()
        } else {
            if (j === "#contact_host_welcome") {
                d()
            }
        } if (history.pushState) {
            history.replaceState("", document.title, window.location.pathname + window.location.search)
        } else {
            location.hash = ""
        }
    }

    function b(l) {
        var j = new h.Deferred();
        var k = new h.Deferred();
        Airbnb.Api.get("/v1/phrases/profile_pic_upsell").done(function(m) {
            I18n.extend(m.phrases);
            j.resolve()
        });
        LazyLoad.js("https://a0.muscache.com/airbnb/static/packages/profile_pic_upsell-94a10d07519e19c4888794e33c475d3e.js", function() {
            k.resolve()
        });
        h.when(j, k).done(l)
    }

    function a() {
        var k = c("profile_pic_upsell/welcome_modal");
        var j = new k({
            tracking_event_name: "signup_profile_pic_upsell_modal",
            flow: "signup_profile_pic_upsell",
            didUploadTextBelow: [I18n.t("profile_pic_upsell.glad_youre_here"), I18n.t("profile_pic_upsell.start_by_completing_profile")].join(" "),
            didNotUploadTextBelow: [I18n.t("profile_pic_upsell.help_community_get_to_know_you"), I18n.t("profile_pic_upsell.easier_to_book")].join(" ")
        })
    }

    function d() {
        var k = c("profile_pic_upsell/welcome_modal");
        var j = new k({
            tracking_event_name: "contact_host_profile_pic_upsell",
            flow: "contact_host_profile_pic_upsell",
            didUploadTextBelow: [I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"), I18n.t("profile_pic_upsell.easier_to_book")].join(" "),
            didNotUploadTextBelow: [I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"), I18n.t("profile_pic_upsell.easier_to_book")].join(" ")
        })
    }
    Airbnb.addInitHook(f)
}($, require, provide);
! function(b) {
    function a(g, f, c, h) {
        function d(j, i) {
            h.logEvent({
                event_name: "experiment_assignment",
                event_data: {
                    experiment: j,
                    treatment: i,
                    user_id: f.id || null,
                    visitor_id: c.cookie("bev")
                }
            })
        }
        g.logTreatment = function(j, i) {
            d(j, i)
        };
        if (g.eventQueue.length) {
            g.eventQueue.forEach(function(i) {
                d(i.experiment, i.treatment)
            });
            g.eventQueue = []
        }
        return g
    }
    if (b.Airbnb && b.Airbnb.ERF) {
        b.Airbnb.ERF = a(b.Airbnb.ERF, b.Airbnb.userAttributes, b.JSCookie, Airbnb.Tracking)
    } else {
        module.exports = a
    }
}(this);
(function(f) {
    function g(h) {
        h = h || {};
        h.dateOffset = h.dateOffset || "+0";
        return function(i, j) {
            var l = f(i);
            var k = l.val();
            l.trigger("beforeShow.datepicker", {
                el: i
            });
            if (typeof j !== "undefined") {
                l.datepicker("option", "minDate", h.dateOffset)
            }
        }
    }

    function b(i, j) {
        var h = f(i);
        try {
            var m = f.datepicker.parseDate(h.val());
            var l = new Date();
            l.setFullYear(l.getFullYear() + 3);
            if (j) {
                l += j
            }
            if (m > l) {
                h.val(f.datepicker.formatDate(l))
            }
        } catch (k) {}
        return h.val()
    }

    function d() {}

    function c(i) {
        var h = new f.Deferred;
        var j = new Date(i);
        j.setDate(i.getDate() + 1);
        setTimeout(function() {
            h.resolve(j)
        }, 0);
        return h
    }

    function a(l, j) {
        var h = {
            minDate: 0,
            maxDate: "+3Y",
            nextText: "",
            prevText: "",
            numberOfMonths: 1,
            showButtonPanel: true,
            closeText: I18n.t("clear_dates", "Clear Dates")
        };
        var k = f(l);
        j = j || {};
        var n = {
            checkinDatePicker: f(j.checkin),
            checkoutDatePicker: f(j.checkout),
            onSuccessCallback: j.onSuccess || d,
            onReset: j.onReset || d,
            onCheckinClose: j.onCheckinClose || d,
            onCheckoutClose: j.onCheckoutClose || d,
            getNextDate: j.getNextDate || c
        };
        if (!j.defaultsCheckin) {
            j.defaultsCheckin = h
        }
        if (!j.defaultsCheckout) {
            j.defaultsCheckout = h
        }
        if (!j.checkin) {
            n.checkinDatePicker = k.find("input.checkin")
        }
        if (!j.checkout) {
            n.checkoutDatePicker = k.find("input.checkout")
        }
        k.data("airbnb-datepickeroptions", n);
        var i = f.extend(f.extend(true, {}, j.defaultsCheckin), {
            beforeShow: g(),
            onClose: function(s, r) {
                var q = k.data("airbnb-datepickeroptions");
                if (s) {
                    s = b(this);
                    var p = f.datepicker.parseDate(s);
                    q.getNextDate(p).then(function(w) {
                        var t = q.checkoutDatePicker;
                        try {
                            var u = f.datepicker.parseDate(t.val());
                            t.datepicker("option", "minDate", w);
                            if (w > u) {
                                t.val(f.datepicker.formatDate(w));
                                t.change();
                                t.focus()
                            } else {
                                q.onSuccessCallback(w, t.val())
                            }
                        } catch (v) {
                            t.datepicker("option", "minDate", w);
                            t.val(f.datepicker.formatDate(w));
                            t.focus()
                        }
                    })
                }
                q.onCheckinClose()
            },
            onReset: function() {
                var p = k.data("airbnb-datepickeroptions");
                p.checkoutDatePicker.datepicker("reset", true);
                p.onReset()
            }
        });
        var o = f.extend(f.extend(true, {}, j.defaultsCheckout), {
            beforeShow: g({
                dateOffset: "+1"
            }),
            onClose: function(t, r) {
                var q = k.data("airbnb-datepickeroptions");
                if (t) {
                    t = b(this, 1000 * 60 * 60 * 24);
                    var v = f.datepicker.parseDate(t);
                    v = new Date(v.setDate(v.getDate() - 1));
                    var u = q.checkinDatePicker;
                    try {
                        var p = f.datepicker.parseDate(u.val());
                        if (v < p) {
                            u.val(f.datepicker.formatDate(v));
                            u.focus()
                        } else {
                            q.onSuccessCallback(u.val(), t)
                        }
                    } catch (s) {
                        u.val(f.datepicker.formatDate(v));
                        u.focus()
                    }
                }
                q.onCheckoutClose()
            },
            onReset: function() {
                var p = k.data("airbnb-datepickeroptions");
                p.checkinDatePicker.datepicker("reset", true);
                p.onReset()
            }
        });
        var m = j.defaults;
        if (m) {
            i = _.extend(i, m);
            o = _.extend(o, m)
        }
        n.checkinDatePicker.datepicker(i);
        n.checkoutDatePicker.datepicker(o);
        i.beforeShow(n.checkinDatePicker);
        o.beforeShow(n.checkoutDatePicker)
    }
    f.fn.airbnbInputDateSpan = function(h) {
        return this.each(function() {
            if (typeof h === "string") {} else {
                a(this, h)
            }
        })
    }
})(jQuery);
(function(b, d, c) {
    var a = require("o2-modal");
    b.Facebook = {
        track: function(f, g) {
            c.Tracking.logEvent({
                event_name: "open_graph",
                event_data: {
                    sub_event: f,
                    action_type: g,
                    fb_logged_in: JSCookie.cookie("fbs") === "connected",
                    fb_publish_permission: c.userAttributes.og_publish,
                }
            })
        },
        setupFacebookModal: (function() {
            var f = function(g, h) {
                if (c.userAttributes.og_publish) {
                    c.mediator.on("fbLoginStatus", c.Utils.fbInitHasPublishAction)
                }
                c.OpenGraph.init(function(i) {
                    params = {
                        access_token: FB.getAccessToken(),
                        action_type: g
                    };
                    d.extend(params, h);
                    d.post("/open_graph_actions", params, function(j) {
                        if (j && j.error_type) {
                            if (j.error_type === "needs publish permission") {
                                c.mediator.emit("needFBPermissions")
                            }
                        } else {
                            Facebook.track("publish", g)
                        }
                    })
                }, "yo")
            };
            return function(g, h) {
                c.mediator.on("fbInit", function() {
                    f(g, h)
                });
                if (typeof FB !== "undefined") {
                    f(g, h)
                }
            }
        })(),
        showFacebookModal: (function() {
            var f = function() {
                a("#open-graph-publish");
                a.open(function() {
                    var g = d("#open-graph-publish-image-container");
                    g.find("img").remove();
                    g.append('<img src="' + g.attr("data-url") + '" width="' + g.attr("data-width") + '" height="' + g.attr("data-height") + '" />')
                });
                Facebook.track("sharing_modal_impression", d("#open-graph-publish").attr("data-action-type"))
            };
            return function() {
                c.mediator.on("fbInit", function() {
                    f()
                });
                if (typeof FB !== "undefined") {
                    f()
                }
            }
        })()
    };
    c.OpenGraph = (function() {
        var f = {};
        f.init = function(h, g) {
            d(document).on("click", "#open-graph-button-yes, .open-graph-wishlist", function() {
                a.close();
                if (c.userAttributes.og_publish !== true) {
                    c.userAttributes.og_publish = true;
                    d.post("/open_graph_actions/open_graph_setting", {
                        allow: "true"
                    })
                }
                c.OpenGraph.doWithPublishPermission(function() {
                    h(g)
                })
            });
            d("#open-graph-button-no, .open-graph-wishlist-no").click(function() {
                a.close();
                c.userAttributes.og_publish = false;
                d.post("/open_graph_actions/open_graph_setting", {
                    allow: "false"
                });
                return false
            })
        };
        f.sendActionToFacebook = function(h, g, i) {
            d.post("/open_graph_actions", d.merge({}, {
                access_token: FB.getAccessToken(),
                action_type: g
            }, h), i || function() {})
        };
        f.deleteActionFromFacebook = function(h, g, i) {
            d.ajax({
                type: "POST",
                data: d.merge({}, {
                    access_token: FB.getAccessToken(),
                    action_type: g
                }, h),
                url: "/open_graph_actions/" + h.hosting_id,
                dataType: "json",
                success: i || function() {}
            })
        };
        f.track = function(g) {
            var h = c.userAttributes;
            c.Tracking.logEvent({
                event_name: "open_graph",
                event_data: {
                    sub_event: g,
                    fb_logged_in: JSCookie.cookie("fbs") === "connected",
                    fb_publish_permission: h.og_publish,
                }
            })
        };
        f.sendFavoriteToFacebook = function(g) {
            f.sendActionToFacebook({
                hosting_id: g
            }, "favorite", function(h) {
                d('<span id="" style="font-size: 10px; color: gray; position: absolute;margin: -17px 0 0 27px; width:200px">Added to your Facebook Timeline!</span>').hide().appendTo("#star_" + g).fadeIn(100).delay(3000).fadeOut(1000)
            })
        };
        f.sendWishlistToFacebook = function(h) {
            var g = {
                access_token: FB.getAccessToken(),
                fb_uid: FB.getUserID(),
                action_type: "wishlist",
                note: window.wishlistNote,
                hosting_id: h || window.hostingId,
                wishlist_id: window.wishlistId
            };
            c.OpenGraph.track("share_wishlist_to_facebook.attempt");
            d.post("/open_graph_actions", g, function(i) {
                if (i && i.error_type) {
                    if (i.error_type == "needs publish permission") {
                        c.mediator.emit("needFBPermissions")
                    }
                } else {
                    c.OpenGraph.track("share_wishlist_to_facebook.success")
                }
            }, "json")
        };
        f.deleteFavoriteFromFacebook = function(g) {
            d('<span id="" style="font-size: 10px; color: gray; position: absolute;margin: -17px 0 0 27px; width:200px">Deleted from your Facebook Timeline.</span>').hide().appendTo("#star_" + g).fadeIn(100).delay(3000).fadeOut(1000);
            d.ajax({
                type: "POST",
                data: {
                    access_token: FB.getAccessToken(),
                    action_type: "favorite",
                    _method: "delete"
                },
                url: "/open_graph_actions/" + g,
                dataType: "json",
                success: function(h) {}
            })
        };
        f.doWithPublishPermission = function(j, h, g) {
            var i = function() {
                var k = {};
                k.scope = "publish_actions";
                c.OpenGraph.track("permission_flow.start");
                FB.login(function() {
                    FB.api({
                        method: "fql.query",
                        query: "SELECT publish_actions FROM permissions WHERE uid = me()"
                    }, function(l) {
                        c.Utils.fbHasPublishAction = (l !== undefined && l[0] && l[0].publish_actions === "1");
                        if (c.Utils.fbHasPublishAction) {
                            j(h);
                            c.userAttributes.og_publish = true;
                            c.OpenGraph.track("permission_flow.success");
                            d.post("/open_graph_actions/open_graph_setting", {
                                allow: "true"
                            })
                        } else {
                            c.userAttributes.og_publish = false;
                            d.post("/open_graph_actions/open_graph_setting", {
                                allow: "false"
                            })
                        }
                    })
                }, k)
            };
            if (g && (c.Utils.fbHasPublishAction || c.userAttributes.og_publish)) {
                c.mediator.once("needFBPermissions", function() {
                    i()
                });
                j(h)
            } else {
                i()
            }
        };
        return f
    })()
})(window, jQuery, window.Airbnb || {});
! function(a, b) {
    a.SearchUtils = {
        get_location_from_pathname: function(d) {
            var c = d.pathname.split("/");
            if (c.length >= 3) {
                return this.location_from_url_parameter(decodeURIComponent(c[2].replace(/\+/g, " ")))
            } else {
                return null
            }
        },
        location_to_url_parameter: function(c) {
            return (c || "").replace("/", " ").replace(")", "").replace("(", "").replace("]", "").replace("[", "").replace(/\s+/g, " ").replace(/-/g, "~").replace(/, ?/g, "--").replace(/ /g, "-").replace(/\./g, "%252E")
        },
        location_from_url_parameter: function(c) {
            return (c || "").replace(/-/g, " ").replace(/~/g, "-").replace(/ {2}/g, ", ").replace(/%2E/g, ".")
        },
        getFormParams: function(f) {
            var c, g, h, d;
            c = b(f);
            g = c.serializeArray();
            d = /\[\]$/;
            h = _.reduce(_.filter(g, function(i) {
                return !!i.value
            }), function(i, j) {
                if (j.name.match(d)) {
                    i[j.name] = i[j.name] || [];
                    i[j.name].push(j.value)
                } else {
                    i[j.name] = j.value
                }
                return i
            }, {});
            return h
        },
        handleFormSubmit: function(f) {
            var h, d, c, g;
            h = this.getFormParams(f);
            d = h.location;
            delete h.location;
            if (h.guests === "1") {
                delete h.guests
            }
            c = b.param(h);
            g = "/s";
            if (d) {
                g += "/" + this.location_to_url_parameter(d)
            }
            if (c) {
                g += "?" + c
            }
            window.location.href = g
        }
    }
}(Airbnb, jQuery);
(function() {
    this.JST || (this.JST = {});
    this.JST["shared/wishlist_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["shared/wishlist_modal"] = Handlebars.template(function(f, m, d, k, j) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            d = d || f.helpers;
            j = j || {};
            var h = "",
                b, p, o, l = d.helperMissing,
                i = this.escapeExpression,
                g = "function",
                n = this;

            function c(u, t) {
                var q = "",
                    s, r;
                q += '\n            <div class="col-6 col-sm-6 share_fb_checkbox">\n              <label>';
                r = {
                    hash: {},
                    data: t
                };
                q += i(((s = d.t), s ? s.call(u, "wl_modal.add_to_timeline", r) : l.call(u, "t", "wl_modal.add_to_timeline", r))) + ':</label>\n              <i class="icon icon-facebook fb_icon" data-behavior="tooltip" title=\'';
                r = {
                    hash: {},
                    data: t
                };
                q += i(((s = d.t), s ? s.call(u, "wl_modal.change_sharing", r) : l.call(u, "t", "wl_modal.change_sharing", r))) + '\'></i>\n              <input checked="checked" id="fb_share" name="fb_share" type="checkbox" value="true">\n            </div>\n          ';
                return q
            }

            function a(t, s) {
                var q = "",
                    r;
                q += '\n            <div class="col-6 col-sm-6">\n                <a class="text-share-button weibo-share-button"\n                   href=';
                if (r = d.weibo_share_url) {
                    r = r.call(t, {
                        hash: {},
                        data: s
                    })
                } else {
                    r = t.weibo_share_url;
                    r = typeof r === g ? r.apply(t) : r
                }
                q += i(r) + '\n                   rel="nofollow"\n                   target="_blank">\n                  <div>\n                    <div class="logo"></div>\n                    <div title="分享到微博" class="text">分享到微博</div>\n                  </div>\n                </a>\n            </div>\n          ';
                return q
            }
            h += '<div class="new-modal modal wishlist-modal">\n  <div class="panel-header">\n    <span class="no_fb">';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "save_to_wish_list", o) : l.call(m, "t", "save_to_wish_list", o))) + '</span>\n    <span class="fb">';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "save_to_wish_list_and_fb", o) : l.call(m, "t", "save_to_wish_list_and_fb", o))) + '</span>\n    <a href="#" data-behavior="modal-close" class="panel-close">&times;</a>\n  </div>\n\n  <div class="panel-body">\n    <div class="row">\n      <div class="col-2 col-sm-2">\n        <div class="media-photo media-photo-block dynamic-listing-photo-container">\n          <div class="media-cover text-center">\n            <img src="" class="dynamic-listing-photo img-responsive-height">\n          </div>\n        </div>\n      </div>\n\n      <div class=\'wishlist col-10 col-sm-10\'>\n        <div class="hosting_name text-lead"></div>\n\n        <p class="hosting_address"></p>\n        <p class="hosting_description hide"></p>\n\n        <div class="row row-space-2">\n          <div class="col-12 col-sm-12">\n            <div class=\'selectContainer select select-block\'>\n              <div class=\'selectWidget hide\'>\n\n                <ul class=\'selectList list-unstyled\'></ul>\n\n                <div class=\'newWLContainer\'>\n                  <div class=\'doneContainer\'>\n                    <a class=\'btn create\' href="#" data-prevent-default>';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.create_new", o) : l.call(m, "t", "wl_modal.create_new", o))) + "</a>\n                    <button class='btn done btn-primary'>";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.done", o) : l.call(m, "t", "wl_modal.done", o))) + "</button>\n                  </div>\n                  <form action='/wishlists' method='post'>\n                    ";
            if (p = d.csrf_token_input) {
                p = p.call(m, {
                    hash: {},
                    data: j
                })
            } else {
                p = m.csrf_token_input;
                p = typeof p === g ? p.apply(m) : p
            }
            h += i(p) + "\n                    <div class=\"row\">\n                      <div class=\"col-6 col-sm-6\">\n                        <input size='26' type='text' placeholder='";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.make_a_new", o) : l.call(m, "t", "wl_modal.make_a_new", o))) + '\'/>\n                      </div>\n                      <div class="col-6 col-sm-6">\n                        <div class="select">\n                          <select name="private" class="wishlist-create-privacy">\n                            <option value="0" selected>\n                              ';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.everyone", o) : l.call(m, "t", "priv.everyone", o))) + '\n                            </option>\n                            <option value="1">\n                              ';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.only_me", o) : l.call(m, "t", "priv.only_me", o))) + '\n                            </option>\n                          </select>\n                        </div>\n                        <i class="icon icon-gray icon-question"\n                           id="privacy-tooltip-trigger"></i>\n                        <div class="tooltip tooltip-bottom-left"\n                             id="privacy-tooltip"\n                             role="tooltip"\n                             data-trigger="#privacy-tooltip-trigger">\n                          <div class="panel-body">\n                            <h5>';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.everyone", o) : l.call(m, "t", "priv.everyone", o))) + "</h5>\n                            <p>";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.everyone_description", o) : l.call(m, "t", "priv.everyone_description", o))) + '</p>\n                          </div>\n                          <div class="panel-body">\n                            <h5>';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.only_me", o) : l.call(m, "t", "priv.only_me", o))) + "</h5>\n                            <p>";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "priv.only_me_description", o) : l.call(m, "t", "priv.only_me_description", o))) + "</p>\n                          </div>\n                        </div>\n                        <button class='btn btn-primary pull-right createWishlist' type='submit'>";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.create", o) : l.call(m, "t", "wl_modal.create", o))) + '</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <span id="selected"><span></span><i></i></span>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="noteContainer col-6 col-sm-6">\n            <label>';
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.add_note", o) : l.call(m, "t", "wl_modal.add_note", o))) + '</label>\n            <textarea name="note" class="wishlist-note"></textarea>\n          </div>\n\n\n          ';
            p = d["if"].call(m, m.show_fb_box, {
                hash: {},
                inverse: n.program(3, a, j),
                fn: n.program(1, c, j),
                data: j
            });
            if (p || p === 0) {
                h += p
            }
            h += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel-footer\">\n    <button type='submit' class='btn-primary save btn'>";
            o = {
                hash: {},
                data: j
            };
            h += i(((b = d.t), b ? b.call(m, "wl_modal.save", o) : l.call(m, "t", "wl_modal.save", o))) + "</button>\n  </div>\n</div>\n";
            return h
        });
        return this.JST["shared/wishlist_modal"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["shared/wishlist_select_list"] = (function() {
        this.JST || (this.JST = {});
        this.JST["shared/wishlist_select_list"] = Handlebars.template(function(f, l, d, k, j) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            d = d || f.helpers;
            j = j || {};
            var h = "",
                b, g = "function",
                i = this.escapeExpression,
                m = this;

            function c(o, n) {
                return "checked"
            }

            function a(o, n) {
                return '<i class="icon icon-lock pull-right"></i>'
            }
            h += '<li data-wishlist-id="';
            if (b = d.id) {
                b = b.call(l, {
                    hash: {},
                    data: j
                })
            } else {
                b = l.id;
                b = typeof b === g ? b.apply(l) : b
            }
            h += i(b) + '" class="';
            if (b = d.classNames) {
                b = b.call(l, {
                    hash: {},
                    data: j
                })
            } else {
                b = l.classNames;
                b = typeof b === g ? b.apply(l) : b
            }
            h += i(b) + '">\n  <label class="checkbox text-truncate">\n    <input type="checkbox" ';
            b = d["if"].call(l, l.checked, {
                hash: {},
                inverse: m.noop,
                fn: m.program(1, c, j),
                data: j
            });
            if (b || b === 0) {
                h += b
            }
            h += ' value="';
            if (b = d.id) {
                b = b.call(l, {
                    hash: {},
                    data: j
                })
            } else {
                b = l.id;
                b = typeof b === g ? b.apply(l) : b
            }
            h += i(b) + '">\n    <span>';
            if (b = d.name) {
                b = b.call(l, {
                    hash: {},
                    data: j
                })
            } else {
                b = l.name;
                b = typeof b === g ? b.apply(l) : b
            }
            h += i(b) + "</span>";
            b = d["if"].call(l, l.isPrivate, {
                hash: {},
                inverse: m.noop,
                fn: m.program(3, a, j),
                data: j
            });
            if (b || b === 0) {
                h += b
            }
            h += "\n  </label>\n</li>\n";
            return h
        });
        return this.JST["shared/wishlist_select_list"]
    }).call(this)
}).call(this);
! function(a) {
    var b = Backbone.View.extend({
        events: {
            "submit form": "formSubmit",
            "change :checkbox": "checkboxChange",
            "focus :text": "focusText",
            "click a.create": "showCreate",
            "click .done": "clickDone",
        },
        initialize: function() {
            this.wishListButton = this.options.wishListButton;
            this.hostingId = this.wishListButton.hostingId;
            this.bindings()
        },
        render: function() {
            this.$selected = $("#selected");
            this.$name = this.$("input[type='text']");
            this.$privacy = this.$(".wishlist-create-privacy");
            this.$newWLContainer = $(".newWLContainer");
            this.initSelection();
            this.renderList();
            this.updateText()
        },
        renderList: function() {
            this.$list = this.$list || this.$(".selectList");
            this.$list.html(this.template());
            if (window.localStorage === undefined) {
                this.$list.append(this.renderRefreshLink())
            }
        },
        itemTemplate: function(c) {
            var i, h, f, d;
            i = c.get("private");
            f = c.get("selected");
            h = [];
            if (i) {
                h.push("private")
            }
            if (f) {
                h.push("checked")
            }
            d = "shared/wishlist_select_list";
            var g = {
                id: c.get("id"),
                name: c.get("name"),
                classNames: h.join(" "),
                checked: f,
                isPrivate: i,
            };
            return JST[d](g)
        },
        template: function() {
            var c = this,
                d = "";
            Airbnb.Wishlists.each(function(f) {
                d += c.itemTemplate(f)
            });
            return d
        },
        renderRefreshLink: function() {
            var d, f, c = this;
            f = "<li id='refresh-container' class='clearfix'><a id='refresh-select-list' class='btn gray'>" + window.I18n.t("refresh_list") + "</a></li>";
            d = $(f);
            d.on("click", function() {
                $(this).find("a").html("<span class='spinner'></span>");
                Airbnb.Wishlists.fetch().then(function() {
                    c.renderList();
                    c.$list.scrollTop(0)
                })
            });
            return d
        },
        initSelection: function() {
            var c;
            this.firstSelected = undefined;
            Airbnb.Wishlists.clearSelection();
            c = Airbnb.Wishlists.forListing(this.hostingId);
            if (c.length === 0) {
                c = [Airbnb.Wishlists.first()];
                this.firstSelected = true
            }
            _.each(c, function(d) {
                if (typeof d !== "undefined") {
                    d.set({
                        selected: true
                    })
                }
            });
            Airbnb.Wishlists.moveSelectedToFront()
        },
        hide: function(d) {
            var c = $(".wishlist").find(".save");
            this.$el.toggleClass("hide", d);
            if (d) {
                this.hideCreate();
                this.trigger("listSelected");
                if (c.length) {
                    c.removeClass("disabled")
                }
            } else {
                if (c.length) {
                    c.addClass("disabled")
                }
            }
        },
        updateText: function() {
            var f, c, d;
            c = Airbnb.Wishlists.selected();
            if (c.length === 1) {
                f = c[0].get("name")
            } else {
                f = c.length + " Wish Lists"
            }
            d = c.length && _.all(c, function(g) {
                return g.get("private")
            });
            this.$selected.children("span").text(f);
            this.$selected.toggleClass("private", d)
        },
        formSubmit: function(f) {
            f.preventDefault();
            var d, g, c;
            c = this;
            d = {
                name: this.$name.val(),
                "private": this.$privacy.val()
            };
            if (d.name.trim() == "") {
                this.$name.addClass("error")
            } else {
                c.setLoading(true);
                Airbnb.Wishlists.create(d, function(h, k) {
                    c.setLoading(false);
                    if (h) {
                        h.set({
                            selected: true
                        });
                        c.$name.val("");
                        c.hideCreate();
                        c.wishListButton.track("create");
                        c.hide(true);
                        c.wishListButton.modal.$el.addClass("create")
                    } else {
                        var j;
                        try {
                            var i = JSON.parse(k.responseText);
                            j = i.error_message
                        } catch (l) {
                            j = "There was an error creating your Wish List"
                        }
                        alert(j)
                    }
                })
            }
        },
        checkboxChange: function(h) {
            h.stopPropagation();
            var g = $(h.target),
                f, d, c;
            f = g.prop("checked");
            g.parent().parent().toggleClass("checked", f);
            d = +g.val();
            c = Airbnb.Wishlists.get(d);
            if (c) {
                c.set("selected", f)
            }
        },
        focusText: function(c) {
            this.$name.removeClass("error")
        },
        showCreate: function() {
            var c = require("o2").Tooltip;
            this.$newWLContainer.addClass("create");
            this.$newWLContainer.find("input[type='text']").focus();
            c.bind(this.$newWLContainer)
        },
        hideCreate: function() {
            this.$newWLContainer.removeClass("create")
        },
        clickDone: function(c) {
            this.hide(true)
        },
        bindings: function() {
            var c = this;
            Airbnb.Wishlists.on("change:selected", function(d, f) {
                c.updateText();
                c.$('[data-wishlist-id="' + d.id + '"]').toggleClass("checked", f).find(":checkbox").prop("checked", f)
            });
            Airbnb.Wishlists.on("add", function(d) {
                c.renderList();
                c.updateText()
            })
        },
        setLoading: function(c) {
            this.$createButton = this.$createButton || this.$(".createWishlist");
            this.$el.toggleClass("loading", c);
            this.$createButton.toggle(!c)
        }
    });
    a.WishListSelectList = b
}(Airbnb);
! function(b) {
    var a = function(d) {
        this.wishListButton = d;
        this.hostingId = this.wishListButton.hostingId
    };
    var c = require("o2-modal");
    a.prototype = {
        init: function() {
            var g, d;
            this.$el = $(".wishlist-modal");
            this.genericSetup();
            this.trackEvent("show");
            this.list = new b.WishListSelectList({
                wishListButton: this.wishListButton,
                el: this.$el.find(".selectWidget")
            });
            this.list.render();
            this.initFbPublish();
            this.setFBCheckbox();
            this.delegateEvents();
            var f = this;
            this.$el.on("modalClose", function() {
                f.cleanup()
            });
            if (this.$el.hasClass("show_share_fb_checkbox")) {
                this.trackEvent("show_share_fb_checkbox");
                this.showFbCheckbox = true
            } else {
                if (this.$el.hasClass("has_fb_publish_action")) {
                    this.showFbCheckbox = false;
                    this.trackEvent("hide_fb_checkbox_to_autoshare")
                }
            }
        },
        trackEvent: function(d) {
            var f = Airbnb.userAttributes;
            Airbnb.Tracking.logEvent({
                event_name: "wishlist_modal",
                event_data: {
                    sub_event: d,
                    fb_logged_in: JSCookie.cookie("fbs"),
                    fb_connected: f.facebook_connected,
                    fb_publish_permission: f.og_publish,
                    wishlisting_from: this.wishListButton.getSource(),
                    show_fb_checkbox: this.showFbCheckbox,
                    precheck_fb_checkbox: this.fbPrecheck
                }
            })
        },
        initFbPublish: function() {
            var d;
            d = Airbnb.Wishlists.detect(function(f) {
                return f.get("selected") && !f.get("private")
            });
            if (Airbnb.userAttributes.og_publish && d) {
                this.$el.addClass("has_fb_publish_action")
            } else {
                if (d) {
                    this.$el.addClass("show_share_fb_checkbox")
                } else {
                    this.$el.removeClass("show_share_fb_checkbox");
                    this.$el.removeClass("has_fb_publish_action")
                }
            }
        },
        genericSetup: function() {
            var f = this.wishListButton.$el.data();
            $(".hosting_name").append(f.name);
            $(".hosting_address").append(f.address);
            $(".dynamic-listing-photo").attr("src", f.img);
            var d = $(".wl-description-" + this.hostingId).text();
            if (d) {
                $(".hosting_description").removeClass("hide").append(d)
            }
        },
        setFBCheckbox: function() {
            var d = false;
            var f = $("input[type=checkbox]#fb_share");
            f.prop("checked", d);
            if (this.$el.hasClass("show_share_fb_checkbox")) {
                this.trackEvent("dont_precheck_fb_checkbox");
                this.fbPrecheck = false
            }
        },
        getHtml: function() {
            function d(n) {
                var m = n.split("/"),
                    l = m.length,
                    k, o = [];
                for (var j = 0; j < l; j++) {
                    o.unshift(m.pop());
                    k = window.JST[o.join("/")];
                    if (k !== undefined) {
                        return k
                    }
                }
            }
            var g = "shared/wishlist_modal";
            var i = {
                show_fb_box: I18n.locale() !== "zh"
            };
            if (!i.show_fb_box) {
                var h = this.wishListButton.$el.data();
                var f = "http://service.weibo.com/share/share.php?url=https://zh.airbnb.com/rooms/" + h.hosting_id + "&title=" + encodeURIComponent(h.name) + "&pic=" + encodeURIComponent("http:" + h.img) + "&language=" + I18n.language() + "&ralateUid=3787942764&searchPic=true&appkey=1437815036";
                i = $.extend(i, {
                    weibo_share_url: f
                })
            }
            return d(g)(i)
        },
        show: function() {
            var d = this;
            b.Wishlists.resetFromLocalStorage();
            c(this.getHtml());
            c.open(function() {
                d.init()
            })
        },
        cleanup: function() {
            this.list.$el.undelegate();
            this.$el.remove()
        },
        update: function() {
            var i = this,
                f, j, g, m, d, n, h, l, k, o;
            m = Airbnb.Wishlists.forListing(this.hostingId);
            g = Airbnb.Wishlists.selected();
            d = _.difference(m, g);
            n = _.difference(g, m);
            h = _.first(_.filter(g, function(p) {
                return !p.get("private")
            }));
            if (h) {
                this.shareViaFacebook(h);
                this.trackEvent("saving_to_public_wishlist")
            } else {
                this.trackEvent("saving_to_private_wishlist")
            }
            l = this.$el.find("textarea").val();
            j = this.$el.find('input[name="private"]');
            if (j.length) {
                o = !! (+j.val())
            }
            _.each(n, function(p) {
                f = {
                    note: l,
                    source: i.wishListButton.getSource()
                };
                if (o != null) {
                    f["private"] = o
                }
                p.addListing(i.hostingId, f);
                i.wishListButton.track("save")
            });
            _.each(d, function(p) {
                k = _.map(g, function(q) {
                    return q.id
                });
                p.removeListing(i.hostingId, k);
                i.wishListButton.track("unsave")
            });
            this.wishListButton.initSavedState()
        },
        shareViaFacebook: function(d) {
            window.wishlistId = d.id;
            window.wishlistNote = this.$el.find("textarea").val();
            var h = this,
                f = Airbnb.userAttributes;
            if (!f.show_wishlist_fb_modal && !f.og_publish) {
                var g = $("input[type=checkbox]#fb_share").is(":checked");
                if (g) {
                    Airbnb.OpenGraph.doWithPublishPermission(function() {
                        Airbnb.OpenGraph.sendWishlistToFacebook(h.hostingId)
                    });
                    this.trackEvent("saved_with_fb_checked");
                    this.wishListButton.track("publish_to_facebook")
                } else {
                    if (f.og_publish) {
                        f.og_publish = false;
                        $.post("/open_graph_actions/open_graph_setting", {
                            allow: "false"
                        });
                        this.trackEvent("saved_with_fb_unchecked_and_set_preference")
                    } else {
                        this.trackEvent("saved_with_fb_unchecked")
                    }
                }
            } else {
                if (f.og_publish) {
                    Airbnb.OpenGraph.doWithPublishPermission(function() {
                        Airbnb.OpenGraph.sendWishlistToFacebook(h.hostingId)
                    }, {}, true);
                    this.trackEvent("saved_with_auto_share")
                }
            }
        },
        delegateEvents: function() {
            var j, g, f;
            j = this;
            f = j.$el;
            var d = _.bind(j.list.hide, j.list);
            var i = function() {
                if (j.list.mouseleave === true && j.list.mouseenter === false) {
                    d.call(j, true)
                }
            };
            var h = _.debounce(i, 400);
            f.off("click").on("click", function(k) {
                j.list.hide(true);
                j.list.$el.off("mouseleave")
            });
            this.list.off("listSelected");
            this.list.on("listSelected", function() {
                j.initFbPublish()
            });
            f.undelegate(".selectContainer", "click").delegate(".selectContainer", "click", function(k) {
                if (!$(k.target).is("button.done")) {
                    k.stopPropagation();
                    j.list.hide(false);
                    j.list.$el.on("mouseenter", function() {
                        j.list.mouseenter = true
                    });
                    j.list.$el.on("mouseleave", function() {
                        j.list.mouseleave = true;
                        j.list.mouseenter = false;
                        h()
                    })
                }
            });
            f.undelegate("#selected", "click").delegate("#selected", "click", function(k) {
                if (j.list.firstSelected && !j.$el.hasClass("create")) {
                    Airbnb.Wishlists.clearSelection()
                }
            });
            f.undelegate(".save", "click").delegate(".save", "click", function(l) {
                l.preventDefault();
                l.stopPropagation();
                if ($(this).hasClass("disabled")) {
                    return false
                }
                j.update();
                var k = Airbnb.userAttributes.show_wishlist_fb_modal;
                if (k && !Airbnb.userAttributes.og_publish) {} else {
                    c.close()
                }
            })
        }
    };
    b.WishListModal = a
}(Airbnb);
(function(j, k, m, o) {
    var b = false,
        i = false,
        d = {}, p = "modal_wishlists",
        q = 100 * 1024;
    var c = Backbone.Model.extend({
        initialize: function() {
            this.on("addListing removeListing", function() {
                this.collection.updateInLocalStorage()
            });
            this.on("removeListing", function(v) {
                var t = m.WishlistsApp,
                    r = t && t.get("currentWishlist");
                if (r && t.isOwner(r)) {
                    var s = r.get("listings");
                    var u = s.get(v);
                    s.remove(u)
                }
            })
        },
        hasListing: function(r) {
            return !!~this.listingIndex(r)
        },
        listingIndex: function(r) {
            return _.indexOf(this.get("listing_ids") || [], r)
        },
        addListing: function(t, s) {
            var r = this.get("listing_ids");
            r.push(t);
            this.set("listing_ids", r);
            this.collection.listingIds[t] = true;
            this.trigger("addListing", t);
            Airbnb.mediator.emit("addListing.wishlists", {
                id: t
            });
            s = {
                collection: s || {}
            };
            s.collection_ids = {};
            s.collection_ids[this.id] = true;
            Airbnb.Api.post("/v1/listings/" + t + "/update", {
                data: s,
                error: n("addListing")
            })
        },
        removeListing: function(v, s) {
            var t, r, u;
            r = this.get("listing_ids");
            t = this.listingIndex(v);
            if (~t) {
                r.splice(t, 1);
                this.set("listing_ids", r);
                this.collection.cacheListingIds();
                this.trigger("removeListing", v);
                Airbnb.mediator.emit("removeListing.wishlists", {
                    id: v,
                    selectedIds: s
                });
                u = {
                    collection_ids: {}
                };
                u.collection_ids[this.id] = false;
                Airbnb.Api.post("/v1/listings/" + v + "/update", {
                    data: u,
                    error: n("removeListing")
                })
            }
        }
    });
    var h = Backbone.Collection.extend({
        model: c,
        initialize: function() {
            this.listingIds = {};
            this.on("reset", this.cacheListingIds, this);
            this.on("add", this.afterAdd, this);
            this.on("add reset remove", this.updateInLocalStorage, this)
        },
        parse: function(r) {
            if (!_.isArray(r)) {
                r = r.wishlists
            }
            return _.map(r, function(s) {
                return s.wishlist || s
            })
        },
        afterAdd: function(s) {
            var r = s.get("listing_ids");
            for (var t in r) {
                if (_.isNumber(r[t])) {
                    this.listingIds[r[t]] = true
                }
            }
        },
        moveSelectedToFront: function() {
            var r, s = this;
            this.selected(true).each(function(t) {
                r = s.indexOf(t);
                if (r > 1) {
                    s.models.splice(r, 1);
                    s.models.unshift(t)
                }
            })
        },
        clearSelection: function() {
            this.selected(true).each(function(r) {
                r.set({
                    selected: false
                })
            })
        },
        add: function() {
            var r = arguments[0];
            if (!_.isArray(r)) {
                r = [r]
            }
            arguments[0] = this.parse(r);
            Backbone.Collection.prototype.add.apply(this, arguments)
        },
        addByAttributes: function(s) {
            var r = {
                id: s.id,
                name: s.name,
                "private": s.isPrivate,
                listing_ids: [],
                "new": true
            };
            this.add(r, {
                at: 0
            });
            return this.first()
        },
        cacheListingIds: function() {
            var r, s;
            this.listingIds = {};
            r = _.flatten(this.pluck("listing_ids"));
            for (s in r) {
                if (_.isNumber(r[s])) {
                    this.listingIds[r[s]] = true
                }
            }
        },
        hasListing: function(r) {
            return !!this.listingIds[r]
        },
        selected: function(r) {
            var s = r ? this.chain() : this;
            return s.select(function(t) {
                return t.get("selected")
            })
        },
        forListing: function(r) {
            return this.select(function(s) {
                return s.hasListing(r)
            })
        },
        create: function(s, t) {
            var r = this;
            Airbnb.Api.post("/v1/collections/create", {
                data: s,
                success: function(v) {
                    var w = v.collection.collection;
                    var u = r.addByAttributes({
                        id: w.id,
                        name: w.name,
                        isPrivate: w["private"]
                    });
                    t && t(u)
                },
                error: n("create", function(u) {
                    t && t(null, u)
                })
            })
        },
        resetFromLocalStorage: function() {
            var t, u, s, r;
            t = m.localStorage && m.localStorage.getItem(p);
            s = this.userId();
            if (t && s) {
                u = JSON.parse(t);
                r = u[s];
                if (r) {
                    this.reset(r, {
                        silent: true
                    });
                    this.cacheListingIds()
                }
            }
        },
        updateInLocalStorage: function() {
            var s, t, r;
            if (m.localStorage) {
                s = this.userId();
                t = {};
                t[s] = this.toJSON();
                r = JSON.stringify(t);
                if (r.length <= q) {
                    m.localStorage.setItem(p, r)
                }
            }
        },
        userId: function() {
            return j.userAttributes.id
        },
        fetch: function(r) {
            r = r || {};
            r.url = "/wishlists/personalize";
            return Backbone.Collection.prototype.fetch.call(this, r)
        },
        initializeData: function(t) {
            var s = this;

            function r() {
                t();
                Airbnb.mediator.emit("initialize.wishlists", {
                    wishlists: s
                })
            }
            if (this.userId() != null) {
                this.resetFromLocalStorage();
                this.fetch().then(r)
            } else {
                r()
            }
        },
        destroy: function(s) {
            var r = this.get(+s);
            this.remove(r)
        }
    });
    j.Wishlists = new h();
    var f = function(s, r) {
        this.$el = k(s);
        this.options = a(r);
        this.hostingId = this.$el.data("hosting_id");
        this.initSavedState();
        this.modal = new j.WishListModal(this)
    };
    f.prototype = {
        trackEvent: function(r) {
            var s = Airbnb.userAttributes;
            Airbnb.Tracking.logEvent({
                event_name: "signup_login_flow",
                event_data: {
                    sub_event: r,
                    fb_logged_in: JSCookie.cookie("fbs"),
                    fb_connected: s.facebook_connected,
                    fb_publish_permission: s.og_publish,
                    wishlisting_from: this.getSource(),
                }
            })
        },
        clickHandler: function(r) {
            r.preventDefault();
            if (Airbnb.Utils.isUserLoggedIn) {
                this.modal.show();
                this.track("modal_show")
            } else {
                this.showSignupModal()
            }
        },
        showSignupModal: function() {
            var r = this;
            Airbnb.SignupLoginModal.launchSignup({
                callback: function() {
                    r.trackEvent("wl.signup_modal.signed_up");
                    Airbnb.Wishlists.fetch().then(function() {
                        r.modal.show()
                    })
                },
                flow: "wishlist"
            })
        },
        isSaved: function() {
            return j.Wishlists.hasListing(this.hostingId)
        },
        getSource: function() {
            return this.options.placement
        },
        initSavedState: function() {
            var r = this.isSaved(),
                s = this.$el.find("input");
            this.$el.toggleClass("saved", r).toggleClass("not_saved", !r);
            if (s.length) {
                s.prop("checked", r)
            }
        },
        track: function() {
            var r = Airbnb.Utils.isUserLoggedIn ? 1 : 0;
            ga("send", "event", "WishList", arguments[0], this.options.placement, r)
        }
    };

    function g(t) {
        var s = "click.wlb",
            r = ".wish_list_button";
        k(o).off(s, r).on(s, r, function(v) {
            var u = new f(k(this), t);
            u.clickHandler(v)
        })
    }

    function a(r) {
        return _.defaults(r || {}, {
            events: true
        })
    }
    f.init = function(r) {
        r = a(r);
        b = false;
        d = r;
        if (r.events) {
            g(r)
        }
        if (!i) {
            j.Wishlists.initializeData(f.update);
            i = true
        }
    };
    f.update = function() {
        k(".wish_list_button").each(function() {
            new f(k(this), d)
        })
    };

    function l(t, r) {
        var s = _.extend({}, r, {
            url: o.URL,
            userId: Airbnb.userAttributes.id,
            action: t
        });
        Airbnb.Tracking.logEvent({
            event_name: "wishlist_error",
            event_data: s
        })
    }

    function n(r, s) {
        return function(t) {
            l(r, {
                statusCode: t.status
            });
            s && s(t)
        }
    }
    j.Wishlists.bind("reset", f.update);
    j.WishListButton = f
})(Airbnb, jQuery, window, document);
(function(a) {
    a.oneskyFeedbackBootstrap = function(b) {
        var f = !! window.HTMLCanvasElement;
        if (!f) {
            return
        }
        var b = a.extend({
            texts: {}
        }, b);
        var d = a.extend({
            tab_title: "Translation Feedback"
        }, b.texts);
        var c = false;
        a("head").append('<style type="text/css">.feedback-btn { position: fixed; bottom: -3px; right: 60px; width: auto; z-index: 40000; }</style>');
        a("body").append('<button class="btn btn-small feedback-btn"><i class="icon icon-globe"></i> ' + d.tab_title + "</button>");
        a(document).on("click", "button.feedback-btn", function() {
            var g = a(this);
            if (c) {
                g.hide();
                a.oneskyFeedback(b)
            } else {
                a.getScript(b.oneskyFeedbackURL, function() {
                    c = true;
                    g.hide();
                    a.oneskyFeedback(b)
                })
            }
        })
    }
}(jQuery));
(function(b, a) {
    b(window).on("load.pellet", function() {
        if (a.should_drop_pellet) {
            Airbnb.Pellet.drop("kfgn8s24")
        }
    });
    if (a.should_drop_sift_pellet) {
        b(window).on("load", function() {
            window._sift = window._sift || [];
            _sift.push(["_setAccount", "5d704de7e8"]);
            _sift.push(["_setUserId", a.eid || ""]);
            _sift.push(["_setSessionId", Airbnb.Utils.readCookie("esid")]);
            _sift.push(["_trackPageview"]);
            LazyLoad.js("https://cdn.siftscience.com/s.js")
        })
    }
})(jQuery, Airbnb.userAttributes);
(function(f, a, g) {
    function b() {
        if (I18n.language() === "ru") {
            (a[g] = a[g] || []).push(function() {
                try {
                    a.yaCounter22125998 = new Ya.Metrika({
                        id: 22125998,
                        webvisor: true,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        trackHash: true
                    })
                } catch (c) {}
            });
            LazyLoad.js("https://mc.yandex.ru/metrika/watch.js")
        }
    }
    $(a).on("load", function() {
        b()
    })
})(document, window, "yandex_metrika_callbacks");
! function(a) {
    $(a).on("load", function() {
        if (I18n.language() === "ko") {
            LazyLoad.js("https://wcs.naver.net/wcslog.js", function() {
                if (!a.wcs_add) {
                    a.wcs_add = {}
                }
                a.wcs_add.wa = "s_1422b6eddf0f";
                if (!a._nasa) {
                    a._nasa = {}
                }
                a.wcs.inflow();
                a.wcs_do(a._nasa)
            })
        }
    })
}(window);
! function(a) {
    $(a).on("load", function() {
        if (I18n.language() === "zh" && I18n.tld_country() === "US") {
            a._agt = a._agt || [];
            a._agt.push(["_atscu", "AG_706286_JQXY"]);
            a._agt.push(["_atsdomain", "airbnb.com"]);
            LazyLoad.js("https://t.agrantsem.com/js/ag.js")
        }
    })
}(window);
! function(a) {
    var b = {
        mapping: [
            [/^\/s\/(\.*)/, "/d/search?query=$"],
            [/^\/s/, "/d/search"],
            [/^\/z\/q\/(\d+)/, "/d/inbox?id=$"],
            [/^\/inbox/, "/d/inbox"],
            [/^\/trips\/current/, "/d/trips"],
            [/^\/my_reservations/, "/d/hosthome"],
            [/^\/my_reservations\/(\w+)/, "/d/reservation?id=$"],
            [/^\/users\/shows\/(\d+)/, "/d/user?id=$"],
            [/^\/rooms\/(\d+)/, "/d/listing?id=$"]
        ],
        match: function(f) {
            var c, g, d;
            for (c = 0; c < this.mapping.length; c++) {
                g = this.mapping[c];
                d = f.match(g[0]);
                if (d) {
                    return g[1].replace("$", d[1])
                }
            }
            return ""
        }
    };
    a.iosUrlMap = b
}(Airbnb);
! function(b, c) {
    var a = Backbone.View.extend({
        events: {
            "click .banner-close": "close",
            "click .action-link": "btnClick"
        },
        render: function() {
            this.setElement(c(".smart-banner"));
            this.personalize();
            this.show()
        },
        renderIfShouldShow: function() {
            if (this.shouldShowSmartBanner()) {
                this.render()
            }
        },
        shouldShowSmartBanner: function() {
            var d = window.Airbnb.Utils;
            return c(".smart-banner").length !== 0 && (d.isIos() || d.isAndroid()) && !JSCookie.cookie("sbc")
        },
        personalize: function() {
            if (Airbnb.Utils.isAndroid()) {
                this.$el.addClass("android");
                this.$(".open-in-app-button").remove();
                this.$(".banner-button.btn-primary").removeClass("btn-small");
                this.$(".ios-item").addClass("hide");
                this.$(".android-item").removeClass("hide");
                this.$(".install-link").data("href", this.androidInstallLink())
            }
            var d = this.pixel();
            if (d) {
                c("<img>").addClass("hide").attr("src", d).appendTo(this.$el)
            }
        },
        androidInstallLink: function() {
            if (I18n.country() === "CN") {
                return "http://r.airbnb.com/l.c.hsjr"
            }
            return "https://play.google.com/store/apps/details?id=com.airbnb.android&referrer=utm_source%3Dairbnb%26utm_medium%3Dmoweb%26utm_campaign%3Dsmartbanner"
        },
        pixel: function() {
            if (Airbnb.Utils.isAndroid()) {
                if (I18n.country() === "CN") {
                    return "https://impression.yozio.com/l.c.hsjr"
                } else {
                    return false
                }
            }
            return "https://impression.yozio.com/l.c.v"
        },
        show: function() {
            c("body").addClass("has-smart-banner")
        },
        close: function(d) {
            d.preventDefault();
            c("body").removeClass("has-smart-banner");
            this.$el.remove();
            JSCookie.cookie("sbc", "1", {
                expires: 14,
                path: "/"
            })
        },
        btnClick: function(h) {
            h.preventDefault();
            var d = c(h.currentTarget);
            var f = d.data("href");
            var l = this.buildQueryString(h.currentTarget);
            var k, j;
            if (f === "airbnb://") {
                k = this.getCurrentDeepLink();
                if (k) {
                    f = "airbnb:/" + k
                }
                if (this.isInTreatment()) {
                    j = d.data("backup-href-alt")
                } else {
                    j = d.data("backup-href")
                }
                document.location = this.appendQueryString(f, l);
                var g = function() {
                    document.location = this.appendQueryString(j, l)
                }.bind(this);
                window.setTimeout(g, 100)
            } else {
                if (/play\.google\.com.*\?.*&referrer=/.test(f)) {
                    var i = this.getNewParameters();
                    if (i.length) {
                        f += encodeURIComponent("&" + i.join("&"))
                    }
                    document.location = f
                } else {
                    if (this.isInTreatment()) {
                        f = d.data("href-alt")
                    }
                    document.location = this.appendQueryString(f, l)
                }
            }
        },
        buildQueryString: function(d) {
            var h = d.search.slice(1);
            var g = this.getNewParameters();
            if (g.length) {
                var f = g.join("&");
                if (h.length) {
                    h += "&"
                }
                h += f
            }
            return h
        },
        getCurrentDeepLink: function() {
            return Airbnb.iosUrlMap.match(document.location.pathname)
        },
        getNewParameters: function() {
            var d = [];
            if (JSCookie.cookie("affiliate")) {
                d.push("af=" + encodeURIComponent(JSCookie.cookie("affiliate")))
            }
            if (JSCookie.cookie("campaign")) {
                d.push("c=" + encodeURIComponent(JSCookie.cookie("campaign")))
            }
            if (JSCookie.cookie("bev")) {
                d.push("bev=" + encodeURIComponent(JSCookie.cookie("bev")))
            }
            d.push("pageUrl=" + encodeURIComponent(document.URL));
            return d
        },
        appendQueryString: function(d, g) {
            var f = d.indexOf("?") !== -1 ? "&" : "?";
            return d + f + g
        },
        isInTreatment: function() {
            var d = I18n.tld_country();
            return ["AU", "NL", "IT", "RU", "FR", "TW", "JP", "SG"].indexOf(d) !== -1
        }
    });
    b.SmartBanner = a
}(Airbnb, jQuery);
!(function(c) {
    var d = /\/\/[\.\w]+airbnb.+[:\d]?\//;
    var b = /^\/\w/;

    function a(f) {
        return d.test(f) || b.test(f)
    }
    c.ajaxSetup({
        beforeSend: function(g, f) {
            if (f.type === "POST") {
                g.setRequestHeader("Cache-Control", "no-cache")
            }
            if (a(f.url)) {
                Airbnb.initUserAttributes();
                g.setRequestHeader("X-CSRF-Token", Airbnb.getCSRFToken())
            }
        }
    })
})(jQuery);
$(document).on("click", "[data-prevent-default]", function(a) {
    a.preventDefault()
});
(function() {
    var a = !! navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    var b = !! navigator.userAgent.match(/MSIE 10.0/);
    if (a) {
        $("html").addClass("ie11")
    }
    if (b) {
        $("html").addClass("ie10")
    }
})();
(function() {
    this.JST || (this.JST = {});
    this.JST["manage_listing/delete_listing_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["manage_listing/delete_listing_modal"] = Handlebars.template(function(c, k, b, i, h) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            h = h || {};
            var f = "",
                a, l, j = b.helperMissing,
                g = this.escapeExpression,
                d = "function";
            f += '<div class="modal" role="dialog" id="delete-listing-modal">\n  <div class="modal-table">\n    <div class="modal-cell">\n      <div class="modal-content">\n\n        \n        <div class="panel-header">\n          <a href="#" class="modal-close" data-behavior="modal-close"></a>\n          ';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "ml.section.listing.deactivate listing", l) : j.call(k, "t", "ml.section.listing.deactivate listing", l))) + '\n        </div>\n\n        \n        <div class="panel-body">\n          <p>\n            ';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "ml.section.listing.are you sure you want to deactivate", l) : j.call(k, "t", "ml.section.listing.are you sure you want to deactivate", l))) + '\n          </p>\n\n          <form accept-charset="UTF-8" action="/hosting/delete" id="delete_listing" method=\n          "post">\n\n            \n            <div style="margin:0;padding:0;display:inline">\n              <input name="utf8" type="hidden" value="&#10003;" />\n              <input name="_method" type="hidden" value="delete" />\n              <input name="hosting_id" type="hidden" value="' + g(((a = ((a = k.listing), a == null || a === false ? a : a.id)), typeof a === d ? a.apply(k) : a)) + '" />\n            </div>\n\n            \n            <label for="reason">';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "ml.section.listing.why deactivate", l) : j.call(k, "t", "ml.section.listing.why deactivate", l))) + '\n              <span class="lighter">(';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "optional", l) : j.call(k, "t", "optional", l))) + ')</span>:\n            </label>\n            <textarea id="reason" name="reason" class="row-space-2"></textarea>\n\n            \n            <label class="row-space-2" style="color:red;" >\n              <input type="checkbox" name="i_understand" id="i_understand">\n              ';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "ml.section.listing.I understand", l) : j.call(k, "t", "ml.section.listing.I understand", l))) + '\n            </label>\n\n            \n            <input class="btn btn-primary js-delete-listing-submit" disabled="disabled" name="commit" type="submit" value="';
            l = {
                hash: {},
                data: h
            };
            f += g(((a = b.t), a ? a.call(k, "ml.section.listing.deactivate listing", l) : j.call(k, "t", "ml.section.listing.deactivate listing", l))) + '" />\n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
            return f
        });
        return this.JST["manage_listing/delete_listing_modal"]
    }).call(this)
}).call(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["reauth/password_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["reauth/password_modal"] = Handlebars.template(function(c, j, b, h, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            g = g || {};
            var d = "",
                a, k, i = b.helperMissing,
                f = this.escapeExpression;
            d += '<div class="modal reauth-password-modal">\n  <div class="modal-header panel-header">\n    ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "users.Confirm_Password_to_Continue", k) : i.call(j, "t", "users.Confirm_Password_to_Continue", k))) + '\n  </div>\n  <form class="form-horizontal">\n    <div class="modal-body panel-body">\n      <p class="panel-header alert alert-header alert-warning hide">\n      </p>\n      <div class="text-center reauth_with_facebook hide">\n        <h1>\n          <a class="btn btn-small btn-facebook facebook_reauthenticate fb-blue" href="#">\n            <span class="icon-container">\n              <i class="icon icon-facebook"></i>\n            </span>\n            <span class="text-container">\n              ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "users.Confirm_Facebook_Password", k) : i.call(j, "t", "users.Confirm_Facebook_Password", k))) + '\n            </span>\n          </a>\n        </h1>\n      </div>\n      <div class="control-group reauth_with_password_component">\n        <input type="password" name="password" class="decorative-input" placeholder="';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "Password", k) : i.call(j, "t", "Password", k))) + '">\n        <div style="padding-top:10px;">\n        ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "users.Please_enter_your_Airbnb_password_to_continue.", k) : i.call(j, "t", "users.Please_enter_your_Airbnb_password_to_continue.", k))) + '\n        <a href="/users/forgot_password">';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "user.signup.forgot_password", k) : i.call(j, "t", "user.signup.forgot_password", k))) + '</a>\n        </div>\n      </div>\n    </div>\n    <div class="modal-footer panel-footer">\n      <button class="btn gray cancel">';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "users.Cancel", k) : i.call(j, "t", "users.Cancel", k))) + '</button>\n      <button class="btn btn-submit btn-primary reauth_with_password_component">\n        ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "users.Confirm_Password", k) : i.call(j, "t", "users.Confirm_Password", k))) + "\n      </button>\n    </div>\n  </form>\n</div>\n";
            return d
        });
        return this.JST["reauth/password_modal"]
    }).call(this)
}).call(this);
! function(b) {
    function a(f, c) {
        function d(g) {
            this.ajaxOptions = g;
            this.deferred = new f.Deferred
        }
        d.prototype.submit = function(h) {
            var g = c.extend({}, this.ajaxOptions, h, {
                success: this.resolve.bind(this),
                error: function(j, k, i) {
                    if (j.status === 419) {
                        this.launchPasswordModal(j)
                    } else {
                        this.reject(j, k, i)
                    }
                }.bind(this)
            });
            f.ajax(g);
            return this.deferred
        };
        d.prototype.resolve = function(g, i, h) {
            this.deferred.resolve(g, i, h);
            if (this.ajaxOptions.success) {
                this.ajaxOptions.success(g, i, h)
            }
        };
        d.prototype.reject = function(h, i, g) {
            this.deferred.reject(h, i, g);
            if (this.ajaxOptions.error) {
                this.ajaxOptions.error(h, i, g)
            }
        };
        d.prototype.submitPasswordModal = function(g) {
            var h = c.extend({}, this.ajaxOptions.headers, {
                "X-Airbnb-Password": g
            });
            this.submit({
                headers: h
            })
        };
        d.prototype.launchPasswordModal = function(j) {
            var h = JST["reauth/password_modal"]({}).trim();
            var i = require("o2-modal");
            i(h);
            i.open();
            var g = i.current();
            if (j.responseJSON.message) {
                g.find(".alert.alert-header").text(j.responseJSON.message).show().removeClass("hide")
            }
            if (j.responseJSON.logged_in_via_facebook) {
                g.find(".reauth_with_password_component").hide();
                g.find(".reauth_with_facebook").show().removeClass("hide")
            }
            g.on("submit", "form", function(l) {
                l.preventDefault();
                var k = g.find('[name="password"]').val();
                i.close();
                f(".reauth-password-modal").remove();
                setTimeout(function() {
                    this.submitPasswordModal(k)
                }.bind(this), 300)
            }.bind(this));
            g.on("click", ".cancel", function(k) {
                k.preventDefault();
                i.close();
                Airbnb.mediator.emit("reauth.cancel")
            });
            g.on("click", ".facebook_reauthenticate", function(k) {
                k.preventDefault();
                i.close();
                FB.login(function(l) {
                    if (l.authResponse) {
                        var m = c.extend({}, this.ajaxOptions.headers, {
                            "X-Airbnb-Facebook-Reauth-Access-Token": l.authResponse.accessToken,
                            "X-Airbnb-Facebook-User-ID": l.authResponse.userID
                        });
                        this.submit({
                            headers: m
                        })
                    } else {
                        i.close()
                    }
                }.bind(this), {
                    auth_type: "reauthenticate"
                })
            }.bind(this))
        };
        d.submit = function(g) {
            return new d(g).submit()
        };
        return d
    }
    if (b.Airbnb) {
        b.Airbnb.Reauth = a(b.$, b._)
    } else {
        module.exports = a
    }
}(this);
(function() {
    this.JST || (this.JST = {});
    this.JST["deep_link/ask_modal"] = (function() {
        this.JST || (this.JST = {});
        this.JST["deep_link/ask_modal"] = Handlebars.template(function(c, j, b, h, g) {
            this.compilerInfo = [2, ">= 1.0.0-rc.3"];
            b = b || c.helpers;
            g = g || {};
            var d = "",
                a, k, i = b.helperMissing,
                f = this.escapeExpression;
            d += '<div class="modal dl-ask-modal text-center" role="dialog" aria-hidden="true">\n  <div class="modal-table">\n    <div class="modal-cell">\n      <div class="modal-content">\n        <div class="panel-header">\n          ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "dl.heading", k) : i.call(j, "t", "dl.heading", k))) + '\n        </div>\n        <div class="panel-body">\n          <button class="dl-open-in-app btn btn-primary btn-large btn-block">\n            ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "dl.open_in_app", k) : i.call(j, "t", "dl.open_in_app", k))) + '\n          </button>\n          <button class="dl-no-thanks btn btn-large btn-block"\n            data-behavior="modal-close"\n            data-modal-close="true">\n            ';
            k = {
                hash: {},
                data: g
            };
            d += f(((a = b.t), a ? a.call(j, "dl.no_thanks", k) : i.call(j, "t", "dl.no_thanks", k))) + "\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
            return d
        });
        return this.JST["deep_link/ask_modal"]
    }).call(this)
}).call(this);
! function(b) {
    function a(q, n, t, r, p) {
        var d = 100,
            u = "dlpref",
            l = "deep-link-modal-open",
            h = /iphone|ipod/i;

        function A(B) {
            this.deepLinkUrl = B.deep_link_url;
            this.force = B.force;
            this.hasShownAskModal = false
        }
        A.prototype.start = function i() {
            if (!this.isIOSPhone()) {
                return
            }
            if (this.force) {
                this.launchApp()
            } else {
                var B = this.getRememberedPreference();
                if (B == null) {
                    this.showAskModal()
                } else {
                    if (B === true) {
                        this.launchApp()
                    } else {
                        if (B === false) {}
                    }
                }
            }
        };
        A.prototype.isIOSPhone = function z() {
            return h.test(q.navigator.userAgent)
        };
        A.prototype.launchApp = function k() {
            q.location.href = this.deepLinkUrl;
            setTimeout(this.onMissingApp.bind(this), d)
        };
        A.prototype.getRememberedPreference = function w() {
            var B = t.cookie(u),
                C = null;
            if (B === "1") {
                C = true
            } else {
                if (B === "0") {
                    C = false
                }
            }
            return C
        };
        A.prototype.createModal = function() {
            var D = r["deep_link/ask_modal"]();
            var C = n(D.trim());
            var B = require("o2").Modal;
            var E = new B(C);
            E.open();
            C.on("click", ".dl-open-in-app", this.onClickOpen.bind(this));
            E.on("close", this.onModalClose.bind(this))
        };
        A.prototype.showAskModal = function j() {
            n("body").addClass(l);
            this.setMobileViewport();
            this.createModal();
            this.hasShownAskModal = true;
            this.track("showAskModal")
        };
        A.prototype.onClickOpen = function v(B) {
            this.launchApp();
            this.savePreference(true)
        };
        A.prototype.onModalClose = function o() {
            n("body").removeClass(l);
            this.restoreViewport();
            this.savePreference(false);
            this.track("noThanks")
        };
        A.prototype.savePreference = function m(B) {
            t.cookie(u, B ? "1" : "0", {
                expires: 14
            })
        };
        A.prototype.setMobileViewport = function y() {
            this.oldViewport = this._viewport();
            this._viewport("width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no")
        };
        A.prototype.restoreViewport = function c() {
            this._viewport(this.oldViewport)
        };
        A.prototype._viewport = function g(C) {
            var B = n('meta[name="viewport"]');
            if (C) {
                B.attr("content", C)
            } else {
                return B.attr("content")
            }
        };
        A.prototype.onMissingApp = function s() {
            this.track("onMissingApp");
            if (this.force && this.hasShownAskModal === false) {
                this.showAskModal()
            } else {
                setTimeout(function() {
                    this.redirectToAppStore()
                }.bind(this), 300)
            }
        };
        A.prototype.redirectToAppStore = function f() {
            q.location.href = "http://r.airbnb.com/l.c.hsjc"
        };
        A.prototype.track = function x(B) {
            p.logEvent({
                event_name: "deep_link",
                event_data: {
                    deep_link_action: B,
                    deep_link_url: this.deepLinkUrl,
                    force: this.force,
                    has_shown_ask_modal: this.hasShownAskModal
                }
            })
        };
        return A
    }
    if (b.Airbnb) {
        b.Airbnb.DeepLink = a(b, b.$, b.JSCookie, b.JST, Airbnb.Tracking)
    } else {
        module.exports = a
    }
}(this);
