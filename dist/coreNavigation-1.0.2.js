// ============================================== //
// Author : Adam Muhammad Nurdin
// Email  : adamnurdin0@gmail.com
// Project  : corenav
// version  : 1.0.2
// Description  : coreNavigation is a multi purpose navigation menu for javascript library based on jquery, come with more style and easy to combination.
// ============================================== //

! function(n) {
    var e = {};

    function o(t) {
        if (e[t]) return e[t].exports;
        var i = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = n, o.c = e, o.d = function(n, e, t) {
        o.o(n, e) || Object.defineProperty(n, e, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }, o.r = function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, o.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return o.d(e, "a", e), e
    }, o.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, o.p = "", o(o.s = 24)
}([function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        i = o(16),
        a = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
        r = i || a || Function("return this")();
    n.exports = r
}, function(n, e, o) {
    "use strict";
    var t = o(0).Symbol;
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    n.exports = function(n) {
        var e = void 0 === n ? "undefined" : t(n);
        return null != n && ("object" == e || "function" == e)
    }
}, function(n, e, o) {
    "use strict";
    var t = o(2),
        i = o(18),
        a = NaN,
        r = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
    n.exports = function(n) {
        if ("number" == typeof n) return n;
        if (i(n)) return a;
        if (t(n)) {
            var e = "function" == typeof n.valueOf ? n.valueOf() : n;
            n = t(e) ? e + "" : e
        }
        if ("string" != typeof n) return 0 === n ? n : +n;
        n = n.replace(r, "");
        var o = c.test(n);
        return o || l.test(n) ? d(n.slice(2), o ? 2 : 8) : s.test(n) ? a : +n
    }
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            $(".core-content").addClass("core-side-icon"), n.addClass("nav-side-icon"), e.toggleHoverSidebar && ($(".core-nav").stop().on("mouseenter", function() {
                $(".core-content").addClass("open-side-icon")
            }), $(".core-nav").stop().on("mouseleave", function() {
                $(".core-content").removeClass("open-side-icon")
            }))
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            var o = this;
            $(".core-content").addClass("core-nav-section"), console.log(n, e), this.setPosition(), $(window).on("resize", function() {
                o.setPosition()
            })
        },
        setPosition: function() {
            var n = $(".core-nav-list"),
                e = n.outerHeight() / 2;
            $(window).width() > 920 ? (n.css("margin-top", -1 * e), n.css("top", .5 * $(window).height())) : (n.css("margin-top", 0), n.css("top", 0))
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            var o = this;
            $(".core-content").addClass("core-sidebar-toggle"), n.addClass("sidebar-toggle"), this.layout(e), $(window).on("resize", function() {
                o.layout(e)
            }), e.menuFullWidth && $(".wrap-core-nav-list").addClass("full-width")
        },
        layout: function(n) {
            var e = $(window).width(),
                o = $(".core-nav-toggle"),
                t = o.height() / 2;
            if (e > 920) {
                if (o.css("margin-top", "-" + t + "px"), n.menuFullWidth) {
                    var i = $(".core-nav-list > li").length,
                        a = (e - $(".sidebar-toggle").width()) / i;
                    console.log(a), $(".core-nav-list > li").css("width", a - .5 + "px")
                }
            } else o.css("margin-top", ""), $(".core-nav-list > li").css("width", "")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            $(".core-content").addClass("core-sidebar"), n.addClass("nav-sidebar")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"), $(".core-nav").addClass("fullscreen"), $(".wrap-core-nav-list .menu").wrap("<div class='nav-container'></div>");
            var o = $(".core-nav-toggle").html();
            $(".wrap-core-nav-list > .nav-container").prepend('<button class="toggle-bar core-nav-toggle">' + o + "</button>"), $(".core-nav-toggle").on("click", function(e) {
                e.preventDefault(), n.toggleClass("open-fullscreen"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open")
            })
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"), $(".core-nav-list").addClass("split-list"), this.devidedMenu(e)
        },
        devidedMenu: function(n) {
            var e = $(".split-list");
            e.each(function() {
                for (var n = new Array, e = $(".split-list > li"), o = Math.floor(e.length / 2), t = e.length - 2 * o, i = 0; i < 2; i++) n[i] = i < t ? o + 1 : o;
                for (i = 0; i < 2; i++) {
                    $(".wrap-core-nav-list").append($("<ul></ul>").addClass("core-nav-list"));
                    for (var a = 0; a < n[i]; a++) {
                        for (var r = 0, s = 0; s < i; s++) r += n[s];
                        $(".wrap-core-nav-list").find(".core-nav-list").last().append(e[a + r])
                    }
                }
            }), e.remove(), $(".core-nav-list").addClass("menu"), $(".core-nav-list").eq(0).addClass("left"), $(".core-nav-list").eq(0).wrap('<div class="col-menu left"></div>'), $(".core-nav-list").eq(1).addClass("right"), $(".core-nav-list").eq(1).wrap('<div class="col-menu right"></div>'), $(".core-nav").addClass("brand-center")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = o(0);
    n.exports = function() {
        return t.Date.now()
    }
}, function(n, e, o) {
    "use strict";
    var t = o(2),
        i = o(10),
        a = o(3),
        r = "Expected a function",
        s = Math.max,
        c = Math.min;
    n.exports = function(n, e, o) {
        var l, d, u, p, v, f, m = 0,
            w = !1,
            $ = !1,
            h = !0;
        if ("function" != typeof n) throw new TypeError(r);

        function y(e) {
            var o = l,
                t = d;
            return l = d = void 0, m = e, p = n.apply(t, o)
        }

        function g(n) {
            var o = n - f;
            return void 0 === f || o >= e || o < 0 || $ && n - m >= u
        }

        function C() {
            var n = i();
            if (g(n)) return b(n);
            v = setTimeout(C, function(n) {
                var o = e - (n - f);
                return $ ? c(o, u - (n - m)) : o
            }(n))
        }

        function b(n) {
            return v = void 0, h && l ? y(n) : (l = d = void 0, p)
        }

        function S() {
            var n = i(),
                o = g(n);
            if (l = arguments, d = this, f = n, o) {
                if (void 0 === v) return function(n) {
                    return m = n, v = setTimeout(C, e), w ? y(n) : p
                }(f);
                if ($) return v = setTimeout(C, e), y(f)
            }
            return void 0 === v && (v = setTimeout(C, e)), p
        }
        return e = a(e) || 0, t(o) && (w = !!o.leading, u = ($ = "maxWait" in o) ? s(a(o.maxWait) || 0, e) : u, h = "trailing" in o ? !!o.trailing : h), S.cancel = function() {
            void 0 !== v && clearTimeout(v), m = 0, l = f = d = v = void 0
        }, S.flush = function() {
            return void 0 === v ? p : b(i())
        }, S
    }
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    n.exports = function(n) {
        return null != n && "object" == (void 0 === n ? "undefined" : t(n))
    }
}, function(n, e, o) {
    "use strict";
    var t = Object.prototype.toString;
    n.exports = function(n) {
        return t.call(n)
    }
}, function(n, e, o) {
    "use strict";
    var t = o(1),
        i = Object.prototype,
        a = i.hasOwnProperty,
        r = i.toString,
        s = t ? t.toStringTag : void 0;
    n.exports = function(n) {
        var e = a.call(n, s),
            o = n[s];
        try {
            n[s] = void 0;
            var t = !0
        } catch (n) {}
        var i = r.call(n);
        return t && (e ? n[s] = o : delete n[s]), i
    }
}, function(n, e, o) {
    "use strict";
    var t, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    t = function() {
        return this
    }();
    try {
        t = t || Function("return this")() || (0, eval)("this")
    } catch (n) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (t = window)
    }
    n.exports = t
}, function(n, e, o) {
    "use strict";
    (function(e) {
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            },
            t = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e;
        n.exports = t
    }).call(this, o(15))
}, function(n, e, o) {
    "use strict";
    var t = o(1),
        i = o(14),
        a = o(13),
        r = "[object Null]",
        s = "[object Undefined]",
        c = t ? t.toStringTag : void 0;
    n.exports = function(n) {
        return null == n ? void 0 === n ? s : r : c && c in Object(n) ? i(n) : a(n)
    }
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        i = o(17),
        a = o(12),
        r = "[object Symbol]";
    n.exports = function(n) {
        return "symbol" == (void 0 === n ? "undefined" : t(n)) || a(n) && i(n) == r
    }
}, function(n, e, o) {
    "use strict";
    var t = o(3),
        i = 1 / 0,
        a = 1.7976931348623157e308;
    n.exports = function(n) {
        return n ? (n = t(n)) === i || n === -i ? (n < 0 ? -1 : 1) * a : n == n ? n : 0 : 0 === n ? n : 0
    }
}, function(n, e, o) {
    "use strict";
    var t = o(19);
    n.exports = function(n) {
        var e = t(n),
            o = e % 1;
        return e == e ? o ? e - o : e : 0
    }
}, function(n, e, o) {
    "use strict";
    var t = o(20),
        i = "Expected a function";
    n.exports = function(n, e) {
        var o;
        if ("function" != typeof e) throw new TypeError(i);
        return n = t(n),
            function() {
                return --n > 0 && (o = e.apply(this, arguments)), n <= 1 && (e = void 0), o
            }
    }
}, function(n, e, o) {
    "use strict";
    var t = o(21);
    n.exports = function(n) {
        return t(2, n)
    }
}, function(n, e, o) {
    "use strict";
    var t = a(o(22)),
        i = a(o(11));

    function a(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    var r = {
        init: function(n, e) {
            var o = this;
            if (n.addClass("core-nav"), $(".core-content").length || $("body").wrapInner('<div class="core-content"></div>'), $(e.menu).addClass("core-nav-list"), $(e.toggleMenu).addClass("core-nav-toggle"), $(e.menu).wrap('<div class="wrap-core-nav-list"></div>'), $(".wrap-core-nav-list, .nav-header").addClass(e.menuPosition), "default" == e.layout) switch (e.menuPosition) {
                case "bottom":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                    break;
                case "bottom center":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container center'></div>"), $(e.header).wrapInner("<div class='nav-container center'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container center'></div>"), $(e.header).wrapInner("<div class='full-container center'></div>"));
                    break;
                case "bottom right":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container right'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container right'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                    break;
                default:
                    e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>")
            }
            e.responsideSlide && $(".core-content").addClass("core-responsive-slide"), o.attributesIcon(e), $(window).on("resize", (0, i.default)(function() {
                o.attributesIcon(e)
            }, 1e3)), o.toggleMenu(n), o.megaMenu(e, ".core-nav-list .megamenu"), o.dropddownMenu(e, ".core-nav-list .dropdown"), $(".dropdown-overlay").on("click", function(n) {
                n.preventDefault(), $(".core-nav .dropdown").removeClass("open"), $(".core-nav .megamenu").removeClass("open"), $(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"), $(".core-nav").removeClass("open-responsive"), $(".core-responsive-slide").removeClass("open"), $.isFunction(e.onCloseDropdown) && e.onCloseDropdown(), $.isFunction(e.onCloseMegaMenu) && e.onCloseMegaMenu()
            }), $(window).on("resize", function() {
                $(".core-nav .dropdown").removeClass("open")
            }), this.setMode(e), this.scrollSpy(e), $.isFunction(e.onInit) && e.onInit()
        },
        setMode: function(n) {
            switch (n.mode) {
                case "fixed":
                    $(".core-nav").addClass("nav-core-fixed");
                    break;
                case "sticky":
                    $(".core-nav").addClass("nav-core-sticky"), $('<div class="stand-sticky"></div>').insertBefore(".core-nav"), $(".stand-sticky").css("height", $(".core-nav").height()), $(".stand-sticky").css("display", "none");
                    var e = $(".nav-core-sticky").offset().top;
                    $(window).on("resize", function() {
                        $(".stand-sticky").css("height", $(".core-nav").height())
                    }), $(window).on("scroll", function() {
                        $(window).scrollTop() > e ? ($(".nav-core-sticky").hasClass("on-scroll") || $.isFunction(n.onStartSticky) && n.onStartSticky(), $(".nav-core-sticky").addClass("on-scroll"), $(".stand-sticky").css("display", "block")) : ($(".nav-core-sticky").hasClass("on-scroll") && $.isFunction(n.onEndSticky) && n.onEndSticky(), $(".nav-core-sticky").removeClass("on-scroll"), $(".stand-sticky").css("display", "none"))
                    })
            }
        },
        topSearch: function(n) {
            var e = $(".wrap-search-top"),
                o = e.html();
            e.length && (e.remove(), $(".core-nav").prepend('<div class="wrap-search-top">' + o + "</div>")), n.container ? $(".wrap-search-top").wrapInner("<div class='nav-container'></div>") : $(".wrap-search-top").wrapInner("<div class='full-container'></div>"), $(".toggle-search-top").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-top").slideToggle()
            }), $(window).on("resize", function() {
                (0, t.default)(function() {
                    $(".toggle-search-top").on("click", function(n) {
                        n.preventDefault(), $(".wrap-search-top").slideToggle()
                    })
                })()
            })
        },
        fullScreenSearch: function() {
            $(".wrap-search-fullscreen").wrapInner("<div class='nav-container'></div>"), $(".toggle-search-fullscreen").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-fullscreen").addClass("open")
            }), $(window).on("resize", function() {
                (0, t.default)(function() {
                    $(".toggle-search-fullscreen").on("click", function(n) {
                        n.preventDefault(), $(".wrap-search-fullscreen").addClass("open")
                    })
                })()
            }), $(".close-search").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-fullscreen").removeClass("open")
            })
        },
        toggleMenu: function(n) {
            $(".core-nav-toggle").on("click", function(e) {
                e.preventDefault(), n.toggleClass("open-responsive"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open"), $(".open-responsive").length ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown"), $(".core-nav .attributes .megamenu").removeClass("open"), $(".core-nav .attributes .dropdown").removeClass("open")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown")), $(".wrap-search-top").slideUp()
            })
        },
        megaMenu: function(n, e) {
            $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                var e = $(this),
                    o = $(this).find("a").eq(0),
                    t = $(this).data("width");
                switch (void 0 != t && ($(this).css("position", "relative"), $(this).find(".megamenu-content").eq(0).css("width", t)), e.removeClass("open"), o.on("click", function(o) {
                    o.preventDefault(), $(window).width() < 920 && (e.hasClass("open") ? (n.animated ? r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function() {
                        setTimeout(function() {
                            e.removeClass("open")
                        }, 500)
                    }) : e.removeClass("open"), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()) : ($(".megamenu").removeClass("open"), n.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())), r.overlayDropdown()
                }), n.dropdownEvent) {
                    case "hover":
                        o.on("mouseenter", function(o) {
                            $(window).width() > 920 && (n.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open")), r.overlayDropdown(), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu()
                        }), e.stop().on("mouseleave", function() {
                            $(window).width() > 920 && (n.animated ? r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function() {
                                setTimeout(function() {
                                    e.removeClass("open")
                                }, 500)
                            }) : e.removeClass("open")), r.overlayDropdown(), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()
                        });
                        break;
                    case "accordion":
                    case "click":
                        o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (n.animated ? r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function() {
                                setTimeout(function() {
                                    e.removeClass("open")
                                }, 500)
                            }) : e.removeClass("open"), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), n.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())), r.overlayDropdown()
                        })
                }
            })
        },
        dropddownMenu: function(n, e) {
            $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                var e = $(this),
                    o = $(this).find("a").eq(0);
                switch (e.removeClass("open"), o.on("click", function(o) {
                    o.preventDefault(), $(window).width() < 920 && (e.hasClass("open") ? (n.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedOut, !1, function() {
                        setTimeout(function() {
                            e.removeClass("open")
                        }, 500)
                    }) : e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()) : (n.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())), r.overlayDropdown()
                }), n.dropdownEvent) {
                    case "hover":
                        o.on("mouseenter", function(o) {
                            $(window).width() > 920 && (n.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown()), r.overlayDropdown()
                        }), e.stop().on("mouseleave", function() {
                            $(window).width() > 920 && (n.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedOut, !1, function() {
                                setTimeout(function() {
                                    e.removeClass("open")
                                }, 500)
                            }) : e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()), r.overlayDropdown()
                        });
                        break;
                    case "click":
                        o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (n.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedOut, !1, function() {
                                setTimeout(function() {
                                    e.removeClass("open")
                                }, 500)
                            }) : e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), n.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())), r.overlayDropdown()
                        });
                        break;
                    case "accordion":
                        $(".wrap-core-nav-list").addClass("dropdown-accordion"), o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (n.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedOut, !1, function() {
                                setTimeout(function() {
                                    e.removeClass("open")
                                }, 500)
                            }) : e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), n.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())), r.overlayDropdown()
                        })
                }
            })
        },
        overlayDropdown: function() {
            var n = $(".dropdown").hasClass("open"),
                e = $(".megamenu").hasClass("open");
            n || e ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"))
        },
        attributesIcon: function(n) {
            var e = $(window).width(),
                o = $(".core-nav .attributes"),
                t = o.length,
                i = o.html();
            t && (e > 992 ? ($(".wrap-core-nav-list").prepend('<ul class="attributes">' + i + "</ul>"), $(".nav-header .attributes").remove()) : ($(".nav-header").prepend('<ul class="attributes">' + i + "</ul>"), $(".wrap-core-nav-list .attributes").remove(), $(".core-nav .attributes").find(".dropdown").each(function() {
                var n = $(this).width(),
                    e = -1 * $(".dropdown-menu", this).width();
                $(".dropdown-menu", this).css("marginLeft", e + n)
            }), $(".core-nav .attributes").find(".megamenu").each(function() {
                var n = $(this).width(),
                    e = -1 * $(".megamenu-content", this).width();
                $(".megamenu-content", this).css("marginLeft", e + n)
            })), o.remove(), this.megaMenu(n, ".attributes .megamenu"), this.dropddownMenu(n, ".attributes .dropdown"), $(".toggle-side-menu").on("click", function(n) {
                n.preventDefault(), $(".core-content").toggleClass("open-side-menu")
            }), $(window).on("resize", function() {
                $(".core-content").removeClass("open-side-menu")
            }), this.topSearch(n), this.fullScreenSearch())
        },
        scrollSpy: function(n) {
            $(".scrollspy").each(function() {
                var e = this,
                    o = $("a", this).attr("href");
                $(o).length && $(window).on("scroll", function() {
                    var t = void 0;
                    t = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top : $(o).offset().top - parseInt($(o).css("padding-top")), $(window).scrollTop() > t - 1 || $(window).scrollTop() > t + 1 ? ($(".scrollspy").removeClass("active"), $(e).addClass("active")) : $(e).removeClass("active")
                }), $("a", this).on("click", function(e) {
                    e.preventDefault();
                    var t = $("html, body"),
                        i = void 0;
                    i = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top + 1 : $(o).offset().top - parseInt($(o).css("padding-top")) / 2, t.stop().animate({
                        scrollTop: i
                    }, 500)
                })
            })
        },
        animateCss: function(n, e, o, t, i) {
            n.removeClass("animated"), t ? n.removeClass(e.animatedOut) : n.removeClass(e.animatedIn), console.log(e, t), n.addClass("animated " + o), "function" == typeof i && i()
        }
    };
    n.exports = r
}, function(n, e, o) {
    "use strict";
    var t, i = u(o(23)),
        a = u(o(9)),
        r = u(o(8)),
        s = u(o(7)),
        c = u(o(6)),
        l = u(o(5)),
        d = u(o(4));

    function u(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }(t = jQuery).fn.coreNavigation = function(n) {
        var e = t.extend({
            layout: "default",
            menu: ".menu",
            menuFullWidth: !1,
            header: ".nav-header",
            menuPosition: "left",
            container: !0,
            toggleMenu: ".toggle-bar",
            toggleHoverSidebar: !1,
            responsideSlide: !1,
            dropdownEvent: "hover",
            mode: "default",
            animated: !1,
            animatedIn: "bounceIn",
            animatedOut: "bounceOut",
            onInit: null,
            onOpenDropdown: null,
            onCloseDropdown: null,
            onOpenMegaMenu: null,
            onCloseMegaMenu: null,
            onStartSticky: null,
            onEndSticky: null,
            scrollspyActiveOn: null
        }, n);
        switch (i.default.init(this, e), e.layout) {
            case "brand-center":
                a.default.init(this, e);
                break;
            case "fullscreen":
                r.default.init(this, e);
                break;
            case "sidebar":
                s.default.init(this, e);
                break;
            case "sidebar-toggle":
                c.default.init(this, e);
                break;
            case "section":
                l.default.init(this, e);
                break;
            case "side-icon":
                d.default.init(this, e)
        }
    }
}]);