function stick() {
    if ($(".nav-sticky").length) {
        var a = $(".nav-sticky").offset().top;
        $(window).scrollTop();
        a > 70 ? $(".nav-sticky").addClass("sticky") : $(".nav-sticky").removeClass("sticky")
    }
}

function alignVertical() {
    $(".fullscreen").height($(window).height()), $(".align-vertical").each(function() {
        var a = $(this);
        height = a.height(), parentHeight = a.parent().height(), padAmount = parentHeight / 2 - height / 2, a.css("padding-top", padAmount)
    })
}

function heightCenter() {
    height = $(window).height(), padAmount = height / 2.5, $(".col-height-center").css("padding-top", padAmount)
}

function initializeMap(a) {
    var b = $(a).data("lat"),
        c = $(a).data("long"),
        d = $(a).data("title"),
        e = $(a).data("subtitle"),
        f = {
            zoom: 14,
            scrollwheel: !1,
            panControl: !1,
            zoomControl: !0,
            scaleControl: !1,
            disableDefaultUI: !0,
            center: new google.maps.LatLng(b, c)
        },
        g = new google.maps.Map(document.querySelector(a), f);
    g.set("styles", [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#e9e9e9"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 29
        }, {
            weight: .2
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#dedede"
        }, {
            lightness: 21
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#333333"
        }, {
            lightness: 40
        }]
    }, {
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#f2f2f2"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }]);
    var h = "build/img/map-marker.png",
        i = new google.maps.LatLng(b, c),
        j = new google.maps.Marker({
            position: i,
            map: g,
            icon: h
        });
    infowindow = new google.maps.InfoWindow({
        content: "<b>" + d + "</b><br/>" + e
    }), j.addListener("click", function() {
        infowindow.open(g, j)
    })
}
if (window.Modernizr = function(a, b, c) {
        function d(a) {
            s.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && s[e] !== c) return "pfx" != b || e
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.7.1",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = ({}.toString, "Webkit Moz O ms"),
            u = t.split(" "),
            v = t.toLowerCase().split(" "),
            w = {},
            x = [],
            y = x.slice,
            z = {}.hasOwnProperty;
        l = e(z, "undefined") || e(z.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return z.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = y.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(y.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(y.call(arguments)))
                };
            return d
        }), w.csstransitions = function() {
            return i("transition")
        };
        for (var A in w) l(w, A) && (k = A.toLowerCase(), n[k] = w[A](), x.push((n[k] ? "" : "no-") + k));
        return n.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && n.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), n[a] !== c) return n;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
                }
                return n
            }, d(""), r = j = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = r[a[p]];
                    return b || (b = {}, q++, a[p] = q, r[q] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var s = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: l,
                    shivCSS: m.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: m.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), n._version = m, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function(a) {
                return g([a])
            }, n.testAllProps = i, n.prefixed = function(a, b, c) {
                return b ? i(a, b, c) : i(a, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + x.join(" ") : ""), n
    }(this, this.document), function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; c < g; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; c < e; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = _.type(a);
            return "function" !== c && !_.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
        }

        function d(a, b, c) {
            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return _.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a)
            }
            return _.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = oa[a] = {};
            return _.each(a.match(na) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = _.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c)
                    } catch (e) {}
                    sa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ka.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = Oa[a];
            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Ya = void 0
            }), Ya = _.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], $a.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || _.style(a, d)
                } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                    _(a).hide()
                }), l.done(function() {
                    var b;
                    ra.remove(a, "fxshow");
                    for (b in m) _.style(a, b, m[b])
                });
                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: _.extend({}, b),
                    opts: _.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Ya || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(na) || [];
                if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === tb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = _.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if (_.isArray(b)) _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) {
                return new _.fn.init(a, b)
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) {
                return b.toUpperCase()
            };
        _.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = _.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return _.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(_.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, _.extend = _.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, _.extend({
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === _.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" === _.type(a) && !a.nodeType && !_.isWindow(a) && !(a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ba, "ms-").replace(ca, da)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(aa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
            },
            now: Date.now,
            support: Y
        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var ea = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                        a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
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
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
            }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), _.fn.extend({
            has: function(a) {
                var b = _(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? _.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), _.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return _.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return _.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return _.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return _.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return _.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return _.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return _.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return _.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || _.merge([], a.childNodes)
            }
        }, function(a, b) {
            _.fn[a] = function(c, d) {
                var e = _.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function f(b) {
                                _.each(b, function(b, c) {
                                    var d = _.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && _.each(arguments, function(a, b) {
                            for (var c;
                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, _.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return _.Deferred(function(c) {
                                _.each(b, function(b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? _.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, _.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var pa;
        _.fn.ready = function(a) {
            return _.ready.promise().done(a), this
        }, _.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? _.readyWait++ : _.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
            }
        }), _.ready.promise = function(b) {
            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
        }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === _.type(c)) {
                e = !0;
                for (h in c) _.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(_(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        _.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, _.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({
            hasData: function(a) {
                return sa.hasData(a) || ra.hasData(a)
            },
            data: function(a, b, c) {
                return sa.access(a, b, c)
            },
            removeData: function(a, b) {
                sa.remove(a, b)
            },
            _data: function(a, b, c) {
                return ra.access(a, b, c)
            },
            _removeData: function(a, b) {
                ra.remove(a, b)
            }
        }), _.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    sa.set(this, a)
                }) : qa(this, function(b) {
                    var c, d = _.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = sa.get(f, a), void 0 !== c) return c;
                        if (c = sa.get(f, d), void 0 !== c) return c;
                        if (c = i(f, d, void 0), void 0 !== c) return c
                    } else this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    sa.remove(this, a)
                })
            }
        }), _.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() {
                        _.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
            }
        }), _.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    _.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) {
                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !_.isWindow(d)) {
                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = _.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = _.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[_.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return _.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = _.extend(new _.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, _.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, _.Event = function(a, b) {
            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
        }, _.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            _.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || _.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
            _.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                }
            }
        }), _.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return _().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                    _.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                    _.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    _.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                        if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e]
                    }
                    delete sa.cache[c[sa.expando]]
                }
            }
        }), _.fn.extend({
            text: function(a) {
                return qa(this, function(a) {
                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function() {
                    return _.clone(this, a, b)
                })
            },
            html: function(a) {
                return qa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ea, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                }
                return this
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            _.fn[a] = function(a) {
                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), _.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Wa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
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
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = _.camelCase(b),
                        i = a.style;
                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = _.camelCase(b);
                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
            }
        }), _.each(["height", "width"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                        return A(a, b, d)
                    }) : A(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            return b ? _.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"]) : void 0
        }), _.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            _.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
        }), _.fn.extend({
            css: function(a, b) {
                return qa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (_.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    xa(this) ? _(this).show() : _(this).hide()
                })
            }
        }), _.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, _.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        _.Animation = _.extend(I, {
                tweener: function(a, b) {
                    _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? bb.unshift(a) : bb.push(a)
                }
            }), _.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? _.extend({}, a) : {
                    complete: c || !c && b || _.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !_.isFunction(b) && b
                };
                return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
                }, d
            }, _.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(xa).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = _.isEmptyObject(a),
                        f = _.speed(b, c, d),
                        g = function() {
                            var b = I(this, _.extend({}, a), f);
                            (e || ra.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = _.timers,
                            g = ra.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && _.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ra.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = _.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), _.each(["toggle", "show", "hide"], function(a, b) {
                var c = _.fn[b];
                _.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                }
            }), _.each({
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                _.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), _.timers = [], _.fx.tick = function() {
                var a, b = 0,
                    c = _.timers;
                for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || _.fx.stop(), Ya = void 0
            }, _.fx.timer = function(a) {
                _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
            }, _.fx.interval = 13, _.fx.start = function() {
                Za || (Za = setInterval(_.fx.tick, _.fx.interval))
            }, _.fx.stop = function() {
                clearInterval(Za), Za = null
            }, _.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, _.fn.delay = function(a, b) {
                return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({
            attr: function(a, b) {
                return qa(this, _.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(na);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), eb = {
            set: function(a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) {
                var e, f;
                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
            }
        });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function(a, b) {
                return qa(this, _.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _.propFix[this.toLowerCase()] = this
        });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var ib = /\r/g;
        _.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                                if (b = _(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function() {
            _.valHooks[this] = {
                set: function(a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            _.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, _.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vb,
                type: "GET",
                isLocal: ob.test(wb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
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
                    "text json": _.parseJSON,
                    "text xml": _.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[k](l[k]);
                if (d = K(tb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function(a, b) {
            _[b] = function(a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _._evalUrl = function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, _.fn.extend({
            wrapAll: function(a) {
                var b;
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return this.each(_.isFunction(a) ? function(b) {
                    _(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = _.isFunction(a);
                return this.each(function(c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function(a) {
            return !_.expr.filters.hidden(a)
        };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+")
        }, _.fn.extend({
            serialize: function() {
                return _.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                }).map(function(a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(zb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(zb, "\r\n")
                    }
                }).get()
            }
        }), _.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var Cb = 0,
            Db = {},
            Eb = {
                0: 200,
                1223: 204
            },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Db) Db[a]()
        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
            var b;
            return Y.cors || Fb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Cb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b) throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Gb.pop() || _.expando + "_" + jb++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = ga.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            _.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), _.expr.filters.animated = function(a) {
            return _.grep(_.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Jb = a.document.documentElement;
        _.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e) : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                    return a || Jb
                })
            }
        }), _.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function(e) {
                return qa(this, function(b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            _.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                _.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qa(this, function(b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function() {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return _
        });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) {
            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        }, typeof b === za && (a.jQuery = a.$ = _), _
    }), function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b, d) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
        }

        function c(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }

        function d(a) {
            for (var b, c; a.length && a[0] !== document;) {
                if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
                a = a.parent()
            }
            return 0
        }

        function e() {
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
            }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = f(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function f(b) {
            var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return b.delegate(c, "mouseout", function() {
                a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate(c, "mouseover", g)
        }

        function g() {
            a.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
        }

        function h(b, c) {
            a.extend(b, c);
            for (var d in c) null == c[d] && (b[d] = c[d]);
            return b
        }

        function i(a) {
            return function() {
                var b = this.element.val();
                a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change")
            }
        }
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.11.2",
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
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            scrollParent: function(b) {
                var c = this.css("position"),
                    d = "absolute" === c,
                    e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    f = this.parents().filter(function() {
                        var b = a(this);
                        return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var a = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++a)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(c) {
                return b(c, !isNaN(a.attr(c, "tabindex")))
            },
            tabbable: function(c) {
                var d = a.attr(c, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && b(c, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
            function d(b, c, d, f) {
                return a.each(e, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                f = c.toLowerCase(),
                g = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + c] = function(b) {
                return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                    a(this).css(f, d(this, b) + "px")
                })
            }, a.fn["outer" + c] = function(b, e) {
                return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                    a(this).css(f, d(this, b, !0, e) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" == typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            disableSelection: function() {
                var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(a + ".ui-disableSelection", function(a) {
                        a.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(b) {
                if (void 0 !== b) return this.css("zIndex", b);
                if (this.length)
                    for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                        if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                        e = e.parent()
                    }
                return 0
            }
        }), a.ui.plugin = {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c, d) {
                var e, f = a.plugins[b];
                if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
            }
        };
        var j = 0,
            k = Array.prototype.slice;
        a.cleanData = function(b) {
            return function(c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++) try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {}
                b(c)
            }
        }(a.cleanData), a.widget = function(b, c, d) {
            var e, f, g, h, i = {},
                j = b.split(".")[0];
            return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
                return a.isFunction(d) ? void(i[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        e = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix || b : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
        }, a.widget.extend = function(b) {
            for (var c, d, e = k.call(arguments, 1), f = 0, g = e.length; g > f; f++)
                for (c in e[f]) d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
            return b
        }, a.widget.bridge = function(b, c) {
            var d = c.prototype.widgetFullName || b;
            a.fn[b] = function(e) {
                var f = "string" == typeof e,
                    g = k.call(arguments, 1),
                    h = this;
                return e = !f && g.length ? a.widget.extend.apply(null, [e].concat(g)) : e, f ? this.each(function() {
                    var c, f = a.data(this, d);
                    return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'")
                }) : this.each(function() {
                    var b = a.data(this, d);
                    b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this))
                }), h
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, c) {
                c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = j++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === c && this.destroy()
                    }
                }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var d, e, f, g = b;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof b)
                    if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                        for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                        if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                        e[b] = c
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                        g[b] = c
                    }
                return this._setOptions(g), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^([\w:-]*)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function(b, c) {
                c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.widget;
        var l = !1;
        a(document).mouseup(function() {
                l = !1
            }), a.widget("ui.mouse", {
                version: "1.11.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var b = this;
                    this.element.bind("mousedown." + this.widgetName, function(a) {
                        return b._mouseDown(a)
                    }).bind("click." + this.widgetName, function(c) {
                        return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(b) {
                    if (!l) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                        var c = this,
                            d = 1 === b.which,
                            e = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length;
                        return !(d && !e && this._mouseCapture(b)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            c.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                            return c._mouseMove(a)
                        }, this._mouseUpDelegate = function(a) {
                            return c._mouseUp(a)
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), l = !0, !0))
                    }
                },
                _mouseMove: function(b) {
                    if (this._mouseMoved) {
                        if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
                        if (!b.which) return this._mouseUp(b)
                    }
                    return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
                },
                _mouseUp: function(b) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), l = !1, !1
                },
                _mouseDistanceMet: function(a) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
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
            }),
            function() {
                function b(a, b, c) {
                    return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
                }

                function c(b, c) {
                    return parseInt(a.css(b, c), 10) || 0
                }

                function d(b) {
                    var c = b[0];
                    return 9 === c.nodeType ? {
                        width: b.width(),
                        height: b.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : a.isWindow(c) ? {
                        width: b.width(),
                        height: b.height(),
                        offset: {
                            top: b.scrollTop(),
                            left: b.scrollLeft()
                        }
                    } : c.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: c.pageY,
                            left: c.pageX
                        }
                    } : {
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        offset: b.offset()
                    }
                }
                a.ui = a.ui || {};
                var e, f, g = Math.max,
                    h = Math.abs,
                    i = Math.round,
                    j = /left|center|right/,
                    k = /top|center|bottom/,
                    l = /[\+\-]\d+(\.[\d]+)?%?/,
                    m = /^\w+/,
                    n = /%$/,
                    o = a.fn.position;
                a.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== e) return e;
                            var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                f = d.children()[0];
                            return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
                        },
                        getScrollInfo: function(b) {
                            var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                                d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                                e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                                f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                            return {
                                width: f ? a.position.scrollbarWidth() : 0,
                                height: e ? a.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(b) {
                            var c = a(b || window),
                                d = a.isWindow(c[0]),
                                e = !!c[0] && 9 === c[0].nodeType;
                            return {
                                element: c,
                                isWindow: d,
                                isDocument: e,
                                offset: c.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: c.scrollLeft(),
                                scrollTop: c.scrollTop(),
                                width: d || e ? c.width() : c.outerWidth(),
                                height: d || e ? c.height() : c.outerHeight()
                            }
                        }
                    }, a.fn.position = function(e) {
                        if (!e || !e.of) return o.apply(this, arguments);
                        e = a.extend({}, e);
                        var n, p, q, r, s, t, u = a(e.of),
                            v = a.position.getWithinInfo(e.within),
                            w = a.position.getScrollInfo(v),
                            x = (e.collision || "flip").split(" "),
                            y = {};
                        return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
                            var a, b, c = (e[this] || "").split(" ");
                            1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
                        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
                            var d, j, k = a(this),
                                l = k.outerWidth(),
                                m = k.outerHeight(),
                                o = c(this, "marginLeft"),
                                t = c(this, "marginTop"),
                                z = l + o + c(this, "marginRight") + w.width,
                                A = m + t + c(this, "marginBottom") + w.height,
                                B = a.extend({}, s),
                                C = b(y.my, k.outerWidth(), k.outerHeight());
                            "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
                                marginLeft: o,
                                marginTop: t
                            }, a.each(["left", "top"], function(b, c) {
                                a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
                                    targetWidth: p,
                                    targetHeight: q,
                                    elemWidth: l,
                                    elemHeight: m,
                                    collisionPosition: d,
                                    collisionWidth: z,
                                    collisionHeight: A,
                                    offset: [n[0] + C[0], n[1] + C[1]],
                                    my: e.my,
                                    at: e.at,
                                    within: v,
                                    elem: k
                                })
                            }), e.using && (j = function(a) {
                                var b = r.left - B.left,
                                    c = b + p - l,
                                    d = r.top - B.top,
                                    f = d + q - m,
                                    i = {
                                        target: {
                                            element: u,
                                            left: r.left,
                                            top: r.top,
                                            width: p,
                                            height: q
                                        },
                                        element: {
                                            element: k,
                                            left: B.left,
                                            top: B.top,
                                            width: l,
                                            height: m
                                        },
                                        horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                                        vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
                                    };
                                l > p && p > h(b + c) && (i.horizontal = "center"), m > q && q > h(d + f) && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i)
                            }), k.offset(a.extend(B, {
                                using: j
                            }))
                        })
                    }, a.ui.position = {
                        fit: {
                            left: function(a, b) {
                                var c, d = b.within,
                                    e = d.isWindow ? d.scrollLeft : d.offset.left,
                                    f = d.width,
                                    h = a.left - b.collisionPosition.marginLeft,
                                    i = e - h,
                                    j = h + b.collisionWidth - f - e;
                                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                            },
                            top: function(a, b) {
                                var c, d = b.within,
                                    e = d.isWindow ? d.scrollTop : d.offset.top,
                                    f = b.within.height,
                                    h = a.top - b.collisionPosition.marginTop,
                                    i = e - h,
                                    j = h + b.collisionHeight - f - e;
                                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                            }
                        },
                        flip: {
                            left: function(a, b) {
                                var c, d, e = b.within,
                                    f = e.offset.left + e.scrollLeft,
                                    g = e.width,
                                    i = e.isWindow ? e.scrollLeft : e.offset.left,
                                    j = a.left - b.collisionPosition.marginLeft,
                                    k = j - i,
                                    l = j + b.collisionWidth - g - i,
                                    m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                                    n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                                    o = -2 * b.offset[0];
                                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
                            },
                            top: function(a, b) {
                                var c, d, e = b.within,
                                    f = e.offset.top + e.scrollTop,
                                    g = e.height,
                                    i = e.isWindow ? e.scrollTop : e.offset.top,
                                    j = a.top - b.collisionPosition.marginTop,
                                    k = j - i,
                                    l = j + b.collisionHeight - g - i,
                                    m = "top" === b.my[1],
                                    n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                                    o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                                    p = -2 * b.offset[1];
                                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
                            }
                        },
                        flipfit: {
                            left: function() {
                                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var b, c, d, e, g, h = document.getElementsByTagName("body")[0],
                            i = document.createElement("div");
                        b = document.createElement(h ? "div" : "body"), d = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, h && a.extend(d, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (g in d) b.style[g] = d[g];
                        b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
                    }()
            }(), a.ui.position, a.widget("ui.accordion", {
                version: "1.11.2",
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
                hideProps: {
                    borderTopWidth: "hide",
                    borderBottomWidth: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide",
                    height: "hide"
                },
                showProps: {
                    borderTopWidth: "show",
                    borderBottomWidth: "show",
                    paddingTop: "show",
                    paddingBottom: "show",
                    height: "show"
                },
                _create: function() {
                    var b = this.options;
                    this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), 0 > b.active && (b.active += this.headers.length), this._refresh()
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : a()
                    }
                },
                _createIcons: function() {
                    var b = this.options.icons;
                    b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var a;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && a.css("height", "")
                },
                _setOption: function(a, b) {
                    return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))))
                },
                _keydown: function(b) {
                    if (!b.altKey && !b.ctrlKey) {
                        var c = a.ui.keyCode,
                            d = this.headers.length,
                            e = this.headers.index(b.target),
                            f = !1;
                        switch (b.keyCode) {
                            case c.RIGHT:
                            case c.DOWN:
                                f = this.headers[(e + 1) % d];
                                break;
                            case c.LEFT:
                            case c.UP:
                                f = this.headers[(e - 1 + d) % d];
                                break;
                            case c.SPACE:
                            case c.ENTER:
                                this._eventHandler(b);
                                break;
                            case c.HOME:
                                f = this.headers[0];
                                break;
                            case c.END:
                                f = this.headers[d - 1]
                        }
                        f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
                    }
                },
                _panelKeyDown: function(b) {
                    b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
                },
                refresh: function() {
                    var b = this.options;
                    this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                },
                _processPanels: function() {
                    var a = this.headers,
                        b = this.panels;
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
                },
                _refresh: function() {
                    var b, c = this.options,
                        d = c.heightStyle,
                        e = this.element.parent();
                    this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                        var b = a(this),
                            c = b.uniqueId().attr("id"),
                            d = b.next(),
                            e = d.uniqueId().attr("id");
                        b.attr("aria-controls", e), d.attr("aria-labelledby", c)
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
                    }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
                        var c = a(this),
                            d = c.css("position");
                        "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
                    }), this.headers.each(function() {
                        b -= a(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                    }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
                        b = Math.max(b, a(this).css("height", "").height())
                    }).height(b))
                },
                _activate: function(b) {
                    var c = this._findActive(b)[0];
                    c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                        target: c,
                        currentTarget: c,
                        preventDefault: a.noop
                    }))
                },
                _findActive: function(b) {
                    return "number" == typeof b ? this.headers.eq(b) : a()
                },
                _setupEvents: function(b) {
                    var c = {
                        keydown: "_keydown"
                    };
                    b && a.each(b.split(" "), function(a, b) {
                        c[b] = "_eventHandler"
                    }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    }), this._hoverable(this.headers), this._focusable(this.headers)
                },
                _eventHandler: function(b) {
                    var c = this.options,
                        d = this.active,
                        e = a(b.currentTarget),
                        f = e[0] === d[0],
                        g = f && c.collapsible,
                        h = g ? a() : e.next(),
                        i = d.next(),
                        j = {
                            oldHeader: d,
                            oldPanel: i,
                            newHeader: g ? a() : e,
                            newPanel: h
                        };
                    b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = !g && this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(b) {
                    var c = b.newPanel,
                        d = this.prevShow.length ? this.prevShow : b.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                        "aria-hidden": "true"
                    }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr({
                        tabIndex: -1,
                        "aria-expanded": "false"
                    }) : c.length && this.headers.filter(function() {
                        return 0 === a(this).attr("tabIndex")
                    }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
                        "aria-selected": "true",
                        tabIndex: 0,
                        "aria-expanded": "true"
                    })
                },
                _animate: function(a, b, c) {
                    var d, e, f, g = this,
                        h = 0,
                        i = a.length && (!b.length || a.index() < b.index()),
                        j = this.options.animate || {},
                        k = i && j.down || j,
                        l = function() {
                            g._toggleComplete(c)
                        };
                    return "number" == typeof k && (f = k), "string" == typeof k && (e = k), e = e || k.easing || j.easing, f = f || k.duration || j.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {
                        duration: f,
                        easing: e,
                        step: function(a, b) {
                            b.now = Math.round(a)
                        }
                    }), void a.hide().animate(this.showProps, {
                        duration: f,
                        easing: e,
                        complete: l,
                        step: function(a, c) {
                            c.now = Math.round(a), "height" !== c.prop ? h += c.now : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), h = 0)
                        }
                    })) : b.animate(this.hideProps, f, e, l) : a.animate(this.showProps, f, e, l)
                },
                _toggleComplete: function(a) {
                    var b = a.oldPanel;
                    b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
                }
            }), a.widget("ui.menu", {
                version: "1.11.2",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left-1 top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                        "mousedown .ui-menu-item": function(a) {
                            a.preventDefault()
                        },
                        "click .ui-menu-item": function(b) {
                            var c = a(b.target);
                            !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(b) {
                            if (!this.previousFilter) {
                                var c = a(b.currentTarget);
                                c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(a, b) {
                            var c = this.active || this.element.find(this.options.items).eq(0);
                            b || this.focus(a, c)
                        },
                        blur: function(b) {
                            this._delay(function() {
                                a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(a) {
                            this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var b = a(this);
                        b.data("ui-menu-submenu-carat") && b.remove()
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(b) {
                    var c, d, e, f, g = !0;
                    switch (b.keyCode) {
                        case a.ui.keyCode.PAGE_UP:
                            this.previousPage(b);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            this.nextPage(b);
                            break;
                        case a.ui.keyCode.HOME:
                            this._move("first", "first", b);
                            break;
                        case a.ui.keyCode.END:
                            this._move("last", "last", b);
                            break;
                        case a.ui.keyCode.UP:
                            this.previous(b);
                            break;
                        case a.ui.keyCode.DOWN:
                            this.next(b);
                            break;
                        case a.ui.keyCode.LEFT:
                            this.collapse(b);
                            break;
                        case a.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                            break;
                        case a.ui.keyCode.ENTER:
                        case a.ui.keyCode.SPACE:
                            this._activate(b);
                            break;
                        case a.ui.keyCode.ESCAPE:
                            this.collapse(b);
                            break;
                        default:
                            g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    g && b.preventDefault()
                },
                _activate: function(a) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
                },
                refresh: function() {
                    var b, c, d = this,
                        e = this.options.icons.submenu,
                        f = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var b = a(this),
                            c = b.parent(),
                            d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
                        c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
                    }), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                        var b = a(this);
                        d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
                    }), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(a, b) {
                    "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
                },
                focus: function(a, b) {
                    var c, d;
                    this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                        item: b
                    })
                },
                _scrollIntoView: function(b) {
                    var c, d, e, f, g, h;
                    this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
                },
                blur: function(a, b) {
                    b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                        item: this.active
                    }))
                },
                _startOpening: function(a) {
                    clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(a)
                    }, this.delay))
                },
                _open: function(b) {
                    var c = a.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
                },
                collapseAll: function(b, c) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                        d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
                    }, this.delay)
                },
                _close: function(a) {
                    a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                },
                _closeOnDocumentClick: function(b) {
                    return !a(b.target).closest(".ui-menu").length
                },
                _isDivider: function(a) {
                    return !/[^\-\u2014\u2013\s]/.test(a.text())
                },
                collapse: function(a) {
                    var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    b && b.length && (this._close(), this.focus(a, b))
                },
                expand: function(a) {
                    var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    b && b.length && (this._open(b.parent()), this._delay(function() {
                        this.focus(a, b)
                    }))
                },
                next: function(a) {
                    this._move("next", "first", a)
                },
                previous: function(a) {
                    this._move("prev", "last", a)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(a, b, c) {
                    var d;
                    this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
                },
                nextPage: function(b) {
                    var c, d, e;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return c = a(this), 0 > c.offset().top - d - e
                    }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
                },
                previousPage: function(b) {
                    var c, d, e;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return c = a(this), c.offset().top - d + e > 0
                    }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(b) {
                    this.active = this.active || a(b.target).closest(".ui-menu-item");
                    var c = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
                },
                _filterMenuItems: function(b) {
                    var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        d = RegExp("^" + c, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return d.test(a.trim(a(this).text()))
                    })
                }
            }), a.widget("ui.autocomplete", {
                version: "1.11.2",
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
                    var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                        f = "textarea" === e,
                        g = "input" === e;
                    this.isMultiLine = !!f || !g && this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                        keydown: function(e) {
                            if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
                            b = !1, d = !1, c = !1;
                            var f = a.ui.keyCode;
                            switch (e.keyCode) {
                                case f.PAGE_UP:
                                    b = !0, this._move("previousPage", e);
                                    break;
                                case f.PAGE_DOWN:
                                    b = !0, this._move("nextPage", e);
                                    break;
                                case f.UP:
                                    b = !0, this._keyEvent("previous", e);
                                    break;
                                case f.DOWN:
                                    b = !0, this._keyEvent("next", e);
                                    break;
                                case f.ENTER:
                                    this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                    break;
                                case f.TAB:
                                    this.menu.active && this.menu.select(e);
                                    break;
                                case f.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                    break;
                                default:
                                    c = !0, this._searchTimeout(e)
                            }
                        },
                        keypress: function(d) {
                            if (b) return b = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                            if (!c) {
                                var e = a.ui.keyCode;
                                switch (d.keyCode) {
                                    case e.PAGE_UP:
                                        this._move("previousPage", d);
                                        break;
                                    case e.PAGE_DOWN:
                                        this._move("nextPage", d);
                                        break;
                                    case e.UP:
                                        this._keyEvent("previous", d);
                                        break;
                                    case e.DOWN:
                                        this._keyEvent("next", d)
                                }
                            }
                        },
                        input: function(a) {
                            return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                        },
                        focus: function() {
                            this.selectedItem = null, this.previous = this._value()
                        },
                        blur: function(a) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                        }
                    }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().menu("instance"), this._on(this.menu.element, {
                        mousedown: function(b) {
                            b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                delete this.cancelBlur
                            });
                            var c = this.menu.element[0];
                            a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                                var b = this;
                                this.document.one("mousedown", function(d) {
                                    d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                                })
                            })
                        },
                        menufocus: function(b, c) {
                            var d, e;
                            return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                                a(b.target).trigger(b.originalEvent)
                            })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                                item: e
                            }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
                        },
                        menuselect: function(a, b) {
                            var c = b.item.data("ui-autocomplete-item"),
                                d = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                                this.previous = d, this.selectedItem = c
                            })), !1 !== this._trigger("select", a, {
                                item: c
                            }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                        }
                    }), this.liveRegion = a("<span>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                },
                _setOption: function(a, b) {
                    this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
                },
                _appendTo: function() {
                    var b = this.options.appendTo;
                    return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
                },
                _initSource: function() {
                    var b, c, d = this;
                    a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                        d(a.ui.autocomplete.filter(b, c.term))
                    }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                        d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                            url: c,
                            data: b,
                            dataType: "json",
                            success: function(a) {
                                e(a)
                            },
                            error: function() {
                                e([])
                            }
                        })
                    }) : this.source = this.options.source
                },
                _searchTimeout: function(a) {
                    clearTimeout(this.searching), this.searching = this._delay(function() {
                        var b = this.term === this._value(),
                            c = this.menu.element.is(":visible"),
                            d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                        (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a))
                    }, this.options.delay)
                },
                search: function(a, b) {
                    return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
                },
                _search: function(a) {
                    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                        term: a
                    }, this._response())
                },
                _response: function() {
                    var b = ++this.requestIndex;
                    return a.proxy(function(a) {
                        b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                    }, this)
                },
                __response: function(a) {
                    a && (a = this._normalize(a)), this._trigger("response", null, {
                        content: a
                    }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
                },
                close: function(a) {
                    this.cancelSearch = !0, this._close(a)
                },
                _close: function(a) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
                },
                _change: function(a) {
                    this.previous !== this._value() && this._trigger("change", a, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(b) {
                    return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                        return "string" == typeof b ? {
                            label: b,
                            value: b
                        } : a.extend({}, b, {
                            label: b.label || b.value,
                            value: b.value || b.label
                        })
                    })
                },
                _suggest: function(b) {
                    var c = this.menu.element.empty();
                    this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                        of: this.element
                    }, this.options.position)), this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var a = this.menu.element;
                    a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(b, c) {
                    var d = this;
                    a.each(c, function(a, c) {
                        d._renderItemData(b, c)
                    })
                },
                _renderItemData: function(a, b) {
                    return this._renderItem(a, b).data("ui-autocomplete-item", b)
                },
                _renderItem: function(b, c) {
                    return a("<li>").text(c.label).appendTo(b)
                },
                _move: function(a, b) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(a, b) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
                }
            }), a.extend(a.ui.autocomplete, {
                escapeRegex: function(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(b, c) {
                    var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                    return a.grep(b, function(a) {
                        return d.test(a.label || a.value || a)
                    })
                }
            }), a.widget("ui.autocomplete", a.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(a) {
                            return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(b) {
                    var c;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
                }
            }), a.ui.autocomplete;
        var m, n = "ui-button ui-widget ui-state-default ui-corner-all",
            o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            p = function() {
                var b = a(this);
                setTimeout(function() {
                    b.find(":ui-button").button("refresh")
                }, 1)
            },
            q = function(b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "'][type=radio]") : a("[name='" + c + "'][type=radio]", b.ownerDocument).filter(function() {
                    return !this.form
                })), e
            };
        a.widget("ui.button", {
            version: "1.11.2",
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
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, p), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var b = this,
                    c = this.options,
                    d = "checkbox" === this.type || "radio" === this.type,
                    e = d ? "" : "ui-state-active";
                null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(n).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    c.disabled || this === m && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    c.disabled || a(this).removeClass(e)
                }).bind("click" + this.eventNamespace, function(a) {
                    c.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), d && this.element.bind("change" + this.eventNamespace, function() {
                    b.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return !c.disabled && void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (c.disabled) return !1;
                    a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                    var d = b.element[0];
                    q(d).not(d).map(function() {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return !c.disabled && (a(this).addClass("ui-state-active"), m = this, void b.document.one("mouseup", function() {
                        m = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return !c.disabled && void a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(b) {
                    return !c.disabled && void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", c.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var a, b, c;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(n + " ui-state-active " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                return this._super(a, b), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), void(b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? q(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var b = this.buttonElement.removeClass(o),
                    c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                    d = this.options.icons,
                    e = d.primary && d.secondary,
                    f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }), a.widget("ui.buttonset", {
            version: "1.11.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
            },
            refresh: function() {
                var b = "rtl" === this.element.css("direction"),
                    c = this.element.find(this.options.items),
                    d = c.filter(":ui-button");
                c.not(":ui-button").button(), d.button("refresh"), this.buttons = c.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        }), a.ui.button, a.extend(a.ui, {
            datepicker: {
                version: "1.11.2"
            }
        });
        var r;
        a.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                return h(this._defaults, a || {}), this
            },
            _attachDatepicker: function(b, c) {
                var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
            },
            _newInst: function(b, c) {
                var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: d,
                    input: b,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: c,
                    dpDiv: c ? f(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(b, c) {
                var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function(b, c) {
                var d, e, f, g = this._get(c, "appendText"),
                    h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: e,
                    title: e
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                    src: f,
                    alt: e,
                    title: e
                }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                    return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
                }))
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, e, f = new Date(2009, 11, 20),
                        g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function(a) {
                        for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
                        return d
                    }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
                }
            },
            _inlineDatepicker: function(b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(b, c, d, e, f) {
                var g, i, j, k, l, m = this._dialogInst;
                return m || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), h(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
            },
            _destroyDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, "datepicker");
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }))
            },
            _disableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }), this._disabledInputs[this._disabledInputs.length] = b)
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; this._disabledInputs.length > b; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1
            },
            _getInst: function(b) {
                try {
                    return a.data(b, "datepicker")
                } catch (c) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(b, c, d) {
                var e, f, g, i, j = this._getInst(b);
                return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), h(j.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, g)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), this._updateDatepicker(j))))
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function(b) {
                var c, d, e, f = a.datepicker._getInst(b.target),
                    g = !0,
                    h = f.dpDiv.is(".ui-datepicker-rtl");
                if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1;
                        break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        g = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function(b) {
                var c, d, e = a.datepicker._getInst(b.target);
                return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
            },
            _doKeyUp: function(b) {
                var c, d = a.datepicker._getInst(b.target);
                if (d.input.val() !== d.lastVal) try {
                    c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
                } catch (e) {}
                return !0
            },
            _showDatepicker: function(b) {
                if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                    var c, e, f, g, i, j, k;
                    c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(c, "beforeShow"), f = e ? e.apply(b, [b, c]) : {}, f !== !1 && (h(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                            return g |= "fixed" === a(this).css("position"), !g
                        }), i = {
                            left: a.datepicker._pos[0],
                            top: a.datepicker._pos[1]
                        }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), a.datepicker._updateDatepicker(c), i = a.datepicker._checkOffset(c, i, g),
                        c.dpDiv.css({
                            position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                            display: "none",
                            left: i.left + "px",
                            top: i.top + "px"
                        }), c.inline || (j = a.datepicker._get(c, "showAnim"), k = a.datepicker._get(c, "duration"), c.dpDiv.css("z-index", d(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? c.dpDiv.show(j, a.datepicker._get(c, "showOptions"), k) : c.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
                }
            },
            _updateDatepicker: function(b) {
                this.maxRows = 4, r = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
                var c, d = this._getNumberOfMonths(b),
                    e = d[1],
                    f = 17,
                    h = b.dpDiv.find("." + this._dayOverClass + " a");
                h.length > 0 && g.apply(h.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(a) {
                return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
            },
            _checkOffset: function(b, c, d) {
                var e = b.dpDiv.outerWidth(),
                    f = b.dpDiv.outerHeight(),
                    g = b.input ? b.input.outerWidth() : 0,
                    h = b.input ? b.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
            },
            _findPos: function(b) {
                for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
                return c = a(b).offset(), [c.left, c.top]
            },
            _hideDatepicker: function(b) {
                var c, d, e, f, g = this._curInst;
                !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
                    a.datepicker._tidyDialog(g)
                }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(b) {
                if (a.datepicker._curInst) {
                    var c = a(b.target),
                        d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
            },
            _gotoToday: function(b) {
                var c, d = a(b),
                    e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
            },
            _selectMonthYear: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
            },
            _selectDay: function(b, c, d, e) {
                var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(b) {
                var c = a(b);
                this._selectDate(c, "")
            },
            _selectDate: function(b, c) {
                var d, e = a(b),
                    f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(b) {
                var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                    a(this).val(e)
                }))
            },
            noWeekends: function(a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function(a) {
                var b, c = new Date(a.getTime());
                return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
            },
            parseDate: function(b, c, d) {
                if (null == b || null == c) throw "Invalid arguments";
                if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null;
                var e, f, g, h, i = 0,
                    j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                    l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                    m = (d ? d.dayNames : null) || this._defaults.dayNames,
                    n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (d ? d.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    q = -1,
                    r = -1,
                    s = -1,
                    t = !1,
                    u = function(a) {
                        var c = b.length > e + 1 && b.charAt(e + 1) === a;
                        return c && e++, c
                    },
                    v = function(a) {
                        var b = u(a),
                            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                            e = "y" === a ? d : 1,
                            f = RegExp("^\\d{" + e + "," + d + "}"),
                            g = c.substring(i).match(f);
                        if (!g) throw "Missing number at position " + i;
                        return i += g[0].length, parseInt(g[0], 10)
                    },
                    w = function(b, d, e) {
                        var f = -1,
                            g = a.map(u(b) ? e : d, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            });
                        if (a.each(g, function(a, b) {
                                var d = b[1];
                                return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
                            }), -1 !== f) return f + 1;
                        throw "Unknown name at position " + i
                    },
                    x = function() {
                        if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                        i++
                    };
                for (e = 0; b.length > e; e++)
                    if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                    else switch (b.charAt(e)) {
                        case "d":
                            r = v("d");
                            break;
                        case "D":
                            w("D", l, m);
                            break;
                        case "o":
                            s = v("o");
                            break;
                        case "m":
                            q = v("m");
                            break;
                        case "M":
                            q = w("M", n, o);
                            break;
                        case "y":
                            p = v("y");
                            break;
                        case "@":
                            h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                            break;
                        case "!":
                            h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                            break;
                        case "'":
                            u("'") ? x() : t = !0;
                            break;
                        default:
                            x()
                    }
                    if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
                if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                    for (q = 1, r = s; f = this._getDaysInMonth(p, q - 1), !(f >= r);) q++, r -= f;
                if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
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
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = function(b) {
                        var c = a.length > d + 1 && a.charAt(d + 1) === b;
                        return c && d++, c
                    },
                    j = function(a, b, c) {
                        var d = "" + b;
                        if (i(a))
                            for (; c > d.length;) d = "0" + d;
                        return d
                    },
                    k = function(a, b, c, d) {
                        return i(a) ? d[b] : c[b]
                    },
                    l = "",
                    m = !1;
                if (b)
                    for (d = 0; a.length > d; d++)
                        if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                        else switch (a.charAt(d)) {
                            case "d":
                                l += j("d", b.getDate(), 2);
                                break;
                            case "D":
                                l += k("D", b.getDay(), e, f);
                                break;
                            case "o":
                                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                l += j("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += k("M", b.getMonth(), g, h);
                                break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                l += b.getTime();
                                break;
                            case "!":
                                l += 1e4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                i("'") ? l += "'" : m = !0;
                                break;
                            default:
                                l += a.charAt(d)
                        }
                        return l
            },
            _possibleChars: function(a) {
                var b, c = "",
                    d = !1,
                    e = function(c) {
                        var d = a.length > b + 1 && a.charAt(b + 1) === c;
                        return d && b++, d
                    };
                for (b = 0; a.length > b; b++)
                    if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += a.charAt(b)
                    }
                    return c
            },
            _get: function(a, b) {
                return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function(a, b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        f = e,
                        g = this._getFormatConfig(a);
                    try {
                        f = this.parseDate(c, d, g) || e
                    } catch (h) {
                        d = b ? "" : d
                    }
                    a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(b, c, d) {
                var e = function(a) {
                        var b = new Date;
                        return b.setDate(b.getDate() + a), b
                    },
                    f = function(c) {
                        try {
                            return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                        } catch (d) {}
                        for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                            switch (j[2] || "d") {
                                case "d":
                                case "D":
                                    h += parseInt(j[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    h += 7 * parseInt(j[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                            }
                            j = i.exec(c)
                        }
                        return new Date(f, g, h)
                    },
                    g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
                return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
            },
            _daylightSavingAdjust: function(a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b
            },
            _attachHandlers: function(b) {
                var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() {
                    var b = {
                        prev: function() {
                            a.datepicker._adjustDate(d, -c, "M")
                        },
                        next: function() {
                            a.datepicker._adjustDate(d, +c, "M")
                        },
                        hide: function() {
                            a.datepicker._hideDatepicker()
                        },
                        today: function() {
                            a.datepicker._gotoToday(d)
                        },
                        selectDay: function() {
                            return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return a.datepicker._selectMonthYear(d, this, "M"), !1
                        },
                        selectYear: function() {
                            return a.datepicker._selectMonthYear(d, this, "Y"), !1
                        }
                    };
                    a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                    P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                    Q = this._get(a, "isRTL"),
                    R = this._get(a, "showButtonPanel"),
                    S = this._get(a, "hideIfNoPrevNext"),
                    T = this._get(a, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(a),
                    V = this._get(a, "showCurrentAtPos"),
                    W = this._get(a, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(a, "min"),
                    $ = this._getMinMaxDate(a, "max"),
                    _ = a.drawMonth - V,
                    aa = a.drawYear;
                if (0 > _ && (_ += 12, aa--), $)
                    for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--);
                for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                    for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                        if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                            if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                    break;
                                default:
                                    B += " ui-datepicker-group-middle", A = ""
                            }
                            B += "'>"
                        }
                        for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                        for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>"
                        }
                        _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                    }
                    u += x
                }
                return u += j, a._keyEvent = !1, u
            },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                    r = this._get(a, "changeYear"),
                    s = this._get(a, "showMonthAfterYear"),
                    t = "<div class='ui-datepicker-title'>",
                    u = "";
                if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                else {
                    for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>"
                }
                if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else {
                        for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                                var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                                return isNaN(b) ? m : b
                            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                        a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                    }
                return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0),
                    e = a.drawMonth + ("M" === c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b;
                return d && e > d ? d : e
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function(a, b) {
                var c, d, e = this._getMinMaxDate(a, "min"),
                    f = this._getMinMaxDate(a, "max"),
                    g = null,
                    h = null,
                    i = this._get(a, "yearRange");
                return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), a.fn.datepicker = function(b) {
            if (!this.length) return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
        }, a.datepicker = new e, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.2", a.datepicker, a.widget("ui.draggable", a.ui.mouse, {
            version: "1.11.2",
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
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(a, b) {
                this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(b) {
                var c = this.options;
                return this._blurActiveElement(b), !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0))
            },
            _blockFrames: function(b) {
                this.iframeBlocks = this.document.find(b).map(function() {
                    var b = a(this);
                    return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(b) {
                var c = this.document[0];
                if (this.handleElement.is(b.target)) try {
                    c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
                } catch (d) {}
            },
            _mouseStart: function(b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === a(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _refreshOffsets: function(a) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                }
            },
            _mouseDrag: function(b, c) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function(b) {
                var c = this,
                    d = !1;
                return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    c._trigger("stop", b) !== !1 && c._clear()
                }) : this._trigger("stop", b) !== !1 && this._clear(), !1
            },
            _mouseUp: function(b) {
                return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(b) {
                return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper),
                    e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _isRootNode: function(a) {
                return /(html|body)/i.test(a.tagName) || a === this.document[0]
            },
            _getParentOffset: function() {
                var b = this.offsetParent.offset(),
                    c = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var a = this.element.position(),
                    b = this._isRootNode(this.scrollParent[0]);
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
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
                var b, c, d, e = this.options,
                    f = this.document[0];
                return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
            },
            _convertPositionTo: function(a, b) {
                b || (b = this.position);
                var c = "absolute" === a ? 1 : -1,
                    d = this._isRootNode(this.scrollParent[0]);
                return {
                    top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                    left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
                }
            },
            _generatePosition: function(a, b) {
                var c, d, e, f, g = this.options,
                    h = this._isRootNode(this.scrollParent[0]),
                    i = a.pageX,
                    j = a.pageY;
                return h && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left),
                    a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
                    top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                    left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
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
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, c, d) {
                var e = a.extend({}, c, {
                    item: d.element
                });
                d.sortables = [], a(d.options.connectToSortable).each(function() {
                    var c = a(this).sortable("instance");
                    c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
                })
            },
            stop: function(b, c, d) {
                var e = a.extend({}, c, {
                    item: d.element
                });
                d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                    var a = this;
                    a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
                        position: a.placeholder.css("position"),
                        top: a.placeholder.css("top"),
                        left: a.placeholder.css("left")
                    }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
                })
            },
            drag: function(b, c, d) {
                a.each(d.sortables, function() {
                    var e = !1,
                        f = this;
                    f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                        return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                    })), e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                        return c.helper[0]
                    }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                        this.refreshPositions()
                    }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function(b, c, d) {
                var e = a("body"),
                    f = d.options;
                e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._cursor && a("body").css("cursor", e._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function(b, c, d) {
                var e = a(c.helper),
                    f = d.options;
                e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._opacity && a(c.helper).css("opacity", e._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function(a, b, c) {
                c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
            },
            drag: function(b, c, d) {
                var e = d.options,
                    f = !1,
                    g = d.scrollParentNotHidden[0],
                    h = d.document[0];
                g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function(b, c, d) {
                var e = d.options;
                d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                    var b = a(this),
                        c = b.offset();
                    this !== d.element[0] && d.snapElements.push({
                        item: this,
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        top: c.top,
                        left: c.left
                    })
                })
            },
            drag: function(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n, o = d.options,
                    p = o.snapTolerance,
                    q = c.offset.left,
                    r = q + d.helperProportions.width,
                    s = c.offset.top,
                    t = s + d.helperProportions.height;
                for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", {
                    top: k - d.helperProportions.height,
                    left: 0
                }).top), f && (c.position.top = d._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top), g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i - d.helperProportions.width
                }).left), h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j
                }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top), f && (c.position.top = d._convertPositionTo("relative", {
                    top: l - d.helperProportions.height,
                    left: 0
                }).top), g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left), h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j - d.helperProportions.width
                }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })), d.snapElements[m].snapping = e || f || g || h || n)
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function(b, c, d) {
                var e, f = d.options,
                    g = a.makeArray(a(f.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                    a(this).css("zIndex", e + b)
                }), this.css("zIndex", e + g.length))
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function(b, c, d) {
                var e = a(c.helper),
                    f = d.options;
                e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._zIndex && a(c.helper).css("zIndex", e._zIndex)
            }
        }), a.ui.draggable, a.widget("ui.resizable", a.ui.mouse, {
            version: "1.11.2",
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
            _num: function(a) {
                return parseInt(a, 10) || 0
            },
            _isNumber: function(a) {
                return !isNaN(parseInt(a, 10))
            },
            _hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            },
            _create: function() {
                var b, c, d, e, f, g = this,
                    h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
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
                    }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: h.zIndex
                    }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function(b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = this.element.children(this.handles[c]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function() {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function(b) {
                var c, d, e = !1;
                for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function(b) {
                var c, d, e, f = this.options,
                    g = this.element;
                return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: c,
                    top: d
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.originalSize = this._helper ? {
                    width: g.outerWidth(),
                    height: g.outerHeight()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.sizeDiff = {
                    width: g.outerWidth() - g.width(),
                    height: g.outerHeight() - g.height()
                }, this.originalPosition = {
                    left: c,
                    top: d
                }, this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
            },
            _mouseDrag: function(b) {
                var c, d, e = this.originalMousePosition,
                    f = this.axis,
                    g = b.pageX - e.left || 0,
                    h = b.pageY - e.top || 0,
                    i = this._change[f];
                return this._updatePrevProperties(), !!i && (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options,
                    k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var a = {};
                return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
            },
            _updateVirtualBoundaries: function(a) {
                var b, c, d, e, f, g = this.options;
                f = {
                    minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                    maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                    minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                    maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), this._vBoundaries = f
            },
            _updateCache: function(a) {
                this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var b = this.position,
                    c = this.size,
                    d = this.axis;
                return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
            },
            _respectSize: function(a) {
                var b = this._vBoundaries,
                    c = this.axis,
                    d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                    e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                    f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                    g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                    h = this.originalPosition.left + this.originalSize.width,
                    i = this.position.top + this.size.height,
                    j = /sw|nw|w/.test(c),
                    k = /nw|ne|n/.test(c);
                return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
            },
            _getPaddingPlusBorderDimensions: function(a) {
                for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
                return {
                    height: c[0] + c[2],
                    width: c[1] + c[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                        height: c.height() - this.outerDimensions.height || 0,
                        width: c.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, b) {
                    return {
                        width: this.originalSize.width + b
                    }
                },
                w: function(a, b) {
                    var c = this.originalSize,
                        d = this.originalPosition;
                    return {
                        left: d.left + b,
                        width: c.width - b
                    }
                },
                n: function(a, b, c) {
                    var d = this.originalSize,
                        e = this.originalPosition;
                    return {
                        top: e.top + c,
                        height: d.height - c
                    }
                },
                s: function(a, b, c) {
                    return {
                        height: this.originalSize.height + c
                    }
                },
                se: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                sw: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                },
                ne: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                nw: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
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
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).resizable("instance"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = {
                        width: c.size.width - h,
                        height: c.size.height - g
                    },
                    j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {
                    top: k,
                    left: j
                } : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function() {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
                    j = i.options,
                    k = i.element,
                    l = j.containment,
                    m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
                m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                    left: 0,
                    top: 0
                }, i.containerPosition = {
                    left: 0,
                    top: 0
                }, i.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
                    c[a] = i._num(b.css("padding" + d))
                }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                    height: b.innerHeight() - c[3],
                    width: b.innerWidth() - c[1]
                }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
                    element: m,
                    left: d.left,
                    top: d.top,
                    width: g,
                    height: h
                }))
            },
            resize: function(b) {
                var c, d, e, f, g = a(this).resizable("instance"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    m = g.containerElement,
                    n = !0;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
            },
            stop: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                    d(a)
                })
            },
            resize: function(b, c) {
                var d = a(this).resizable("instance"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = {
                        height: d.size.height - f.height || 0,
                        width: d.size.width - f.width || 0,
                        top: d.position.top - g.top || 0,
                        left: d.position.left - g.left || 0
                    },
                    i = function(b, d) {
                        a(b).each(function() {
                            var b = a(this),
                                e = a(this).data("ui-resizable-alsoresize"),
                                f = {},
                                g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(g, function(a, b) {
                                var c = (e[b] || 0) + (h[b] || 0);
                                c && c >= 0 && (f[b] = c || null)
                            }), b.css(f)
                        })
                    };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                    i(a, b)
                })
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).resizable("instance");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).resizable("instance");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b, c = a(this).resizable("instance"),
                    d = c.options,
                    e = c.size,
                    f = c.originalSize,
                    g = c.originalPosition,
                    h = c.axis,
                    i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                    j = i[0] || 1,
                    k = i[1] || 1,
                    l = Math.round((e.width - f.width) / j) * j,
                    m = Math.round((e.height - f.height) / k) * k,
                    n = f.width + l,
                    o = f.height + m,
                    p = d.maxWidth && n > d.maxWidth,
                    q = d.maxHeight && o > d.maxHeight,
                    r = d.minWidth && d.minWidth > n,
                    s = d.minHeight && d.minHeight > o;
                d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = k - b.height, c.size.width = n, c.position.left = g.left + f.width - n))
            }
        }), a.ui.resizable, a.widget("ui.dialog", {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
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
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
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
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
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
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function() {
                var a, b = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function(b) {
                var c, d = this;
                if (this._isOpen && this._trigger("beforeClose", b) !== !1) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                        c = this.document[0].activeElement, c && "body" !== c.nodeName.toLowerCase() && a(c).blur()
                    } catch (e) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        d._trigger("close", b)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(b, c) {
                var d = !1,
                    e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +a(this).css("z-index")
                    }).get(),
                    f = Math.max.apply(null, e);
                return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0), d && !c && this._trigger("focus", b), d
            },
            open: function() {
                var b = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    b._focusTabbable(), b._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var a = this._focusedElement;
                a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
            },
            _keepFocus: function(b) {
                function c() {
                    var b = this.document[0].activeElement,
                        c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                    c || this._focusTabbable()
                }
                b.preventDefault(), c.call(this), this._delay(c)
            },
            _createWrapper: function() {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
                        if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
                            var c = this.uiDialog.find(":tabbable"),
                                d = c.filter(":first"),
                                e = c.filter(":last");
                            b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
                                e.focus()
                            }), b.preventDefault()) : (this._delay(function() {
                                d.focus()
                            }), b.preventDefault())
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
                    this._on(this.uiDialogTitlebar, {
                        mousedown: function(b) {
                            a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                        label: this.options.closeText,
                        icons: {
                            primary: "ui-icon-closethick"
                        },
                        text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                        click: function(a) {
                            a.preventDefault(), this.close(a)
                        }
                    }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({
                        "aria-labelledby": b.attr("id")
                    })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;"), a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var b = this,
                    c = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c, d) {
                    var e, f;
                    d = a.isFunction(d) ? {
                        click: d,
                        text: c
                    } : d, d = a.extend({
                        type: "button"
                    }, d), e = d.click, d.click = function() {
                        e.apply(b.element[0], arguments)
                    }, f = {
                        icons: d.icons,
                        text: d.showText
                    }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c = this,
                    d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                    },
                    drag: function(a, d) {
                        c._trigger("drag", a, b(d))
                    },
                    stop: function(e, f) {
                        var g = f.offset.left - c.document.scrollLeft(),
                            h = f.offset.top - c.document.scrollTop();
                        d.position = {
                            my: "left top",
                            at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
                            of: c.window
                        }, a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                    }
                })
            },
            _makeResizable: function() {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var c = this,
                    d = this.options,
                    e = d.resizable,
                    f = this.uiDialog.css("position"),
                    g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: d.maxWidth,
                    maxHeight: d.maxHeight,
                    minWidth: d.minWidth,
                    minHeight: this._minHeight(),
                    handles: g,
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                    },
                    resize: function(a, d) {
                        c._trigger("resize", a, b(d))
                    },
                    stop: function(e, f) {
                        var g = c.uiDialog.offset(),
                            h = g.left - c.document.scrollLeft(),
                            i = g.top - c.document.scrollTop();
                        d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
                            my: "left top",
                            at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
                            of: c.window
                        }, a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                    }
                }).css("position", f)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(b) {
                        this._makeFocusTarget(), this._focusedElement = a(b.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var b = this._trackingInstances(),
                    c = a.inArray(this, b); - 1 !== c && b.splice(c, 1)
            },
            _trackingInstances: function() {
                var a = this.document.data("ui-dialog-instances");
                return a || (a = [], this.document.data("ui-dialog-instances", a)), a
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
            },
            _setOptions: function(b) {
                var c = this,
                    d = !1,
                    e = {};
                a.each(b, function(a, b) {
                    c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b)
                }), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
            },
            _setOption: function(a, b) {
                var c, d, e = this.uiDialog;
                "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                    label: "" + b
                }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, b, c, d = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                    height: "auto",
                    width: d.width
                }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                    minHeight: b,
                    maxHeight: c,
                    height: "auto"
                }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var b = a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(b) {
                return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var b = !0;
                    this._delay(function() {
                        b = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(a) {
                            b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var a = this.document.data("ui-dialog-overlays") - 1;
                    a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                }
            }
        }), a.widget("ui.droppable", {
            version: "1.11.2",
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
                var b, c = this.options,
                    d = c.accept;
                this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                    return a.is(d)
                }, this.proportions = function() {
                    return arguments.length ? void(b = arguments[0]) : b ? b : b = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(b) {
                a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this)
            },
            _splice: function(a) {
                for (var b = 0; a.length > b; b++) a[b] === this && a.splice(b, 1)
            },
            _destroy: function() {
                var b = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(b, c) {
                if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                };
                else if ("scope" === b) {
                    var d = a.ui.ddmanager.droppables[this.options.scope];
                    this._splice(d), this._addToManager(c)
                }
                this._super(b, c)
            },
            _activate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
            },
            _deactivate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
            },
            _over: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
            },
            _out: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
            },
            _drop: function(b, c) {
                var d = c || a.ui.ddmanager.current,
                    e = !1;
                return !(!d || (d.currentItem || d.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var c = a(this).droppable("instance");
                    return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {
                        offset: c.element.offset()
                    }), c.options.tolerance, b) ? (e = !0, !1) : void 0
                }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element)))
            },
            ui: function(a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        }), a.ui.intersect = function() {
            function a(a, b, c) {
                return a >= b && b + c > a
            }
            return function(b, c, d, e) {
                if (!c.offset) return !1;
                var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                    g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                    h = f + b.helperProportions.width,
                    i = g + b.helperProportions.height,
                    j = c.offset.left,
                    k = c.offset.top,
                    l = j + c.proportions().width,
                    m = k + c.proportions().height;
                switch (d) {
                    case "fit":
                        return f >= j && l >= h && g >= k && m >= i;
                    case "intersect":
                        return f + b.helperProportions.width / 2 > j && l > h - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > k && m > i - b.helperProportions.height / 2;
                    case "pointer":
                        return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                    case "touch":
                        return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                    default:
                        return !1
                }
            }
        }(), a.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(b, c) {
                var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                    g = c ? c.type : null,
                    h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                a: for (d = 0; f.length > d; d++)
                    if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                        for (e = 0; h.length > e; e++)
                            if (h[e] === f[d].element[0]) {
                                f[d].proportions().height = 0;
                                continue a
                            }
                        f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
                            width: f[d].element[0].offsetWidth,
                            height: f[d].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(b, c) {
                var d = !1;
                return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
                }), d
            },
            dragStart: function(b, c) {
                b.element.parentsUntil("body").bind("scroll.droppable", function() {
                    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                })
            },
            drag: function(b, c) {
                b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c),
                            h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return a(this).droppable("instance").options.scope === e
                        }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                    }
                })
            },
            dragStop: function(b, c) {
                b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            }
        }, a.ui.droppable;
        var s = "ui-effects-",
            t = a;
        a.effects = {
                effect: {}
            },
            function(a, b) {
                function c(a, b, c) {
                    var d = l[b.type] || {};
                    return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
                }

                function d(c) {
                    var d = j(),
                        e = d._rgba = [];
                    return c = c.toLowerCase(), o(i, function(a, f) {
                        var g, h = f.re.exec(c),
                            i = h && f.parse(h),
                            j = f.space || "rgba";
                        return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b
                    }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
                }

                function e(a, b, c) {
                    return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
                }
                var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    h = /^([\-+])=\s*(\d+\.?\d*)/,
                    i = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [a[1], a[2], a[3], a[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(a) {
                            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(a) {
                            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(a) {
                            return [a[1], a[2] / 100, a[3] / 100, a[4]]
                        }
                    }],
                    j = a.Color = function(b, c, d, e) {
                        return new a.Color.fn.parse(b, c, d, e)
                    },
                    k = {
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
                    l = {
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
                    m = j.support = {},
                    n = a("<p>")[0],
                    o = a.each;
                n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                    b.cache = "_" + a, b.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), j.fn = a.extend(j.prototype, {
                    parse: function(e, g, h, i) {
                        if (e === b) return this._rgba = [null, null, null, null], this;
                        (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                        var l = this,
                            m = a.type(e),
                            n = this._rgba = [];
                        return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                            n[b.idx] = c(e[b.idx], b)
                        }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                            e[b.cache] && (l[b.cache] = e[b.cache].slice())
                        }) : o(k, function(b, d) {
                            var f = d.cache;
                            o(d.props, function(a, b) {
                                if (!l[f] && d.to) {
                                    if ("alpha" === a || null == e[a]) return;
                                    l[f] = d.to(l._rgba)
                                }
                                l[f][b.idx] = c(e[a], b, !0)
                            }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                        }), this) : b
                    },
                    is: function(a) {
                        var c = j(a),
                            d = !0,
                            e = this;
                        return o(k, function(a, f) {
                            var g, h = c[f.cache];
                            return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function(a, c) {
                                return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
                            })), d
                        }), d
                    },
                    _space: function() {
                        var a = [],
                            b = this;
                        return o(k, function(c, d) {
                            b[d.cache] && a.push(c)
                        }), a.pop()
                    },
                    transition: function(a, b) {
                        var d = j(a),
                            e = d._space(),
                            f = k[e],
                            g = 0 === this.alpha() ? j("transparent") : this,
                            h = g[f.cache] || f.to(g._rgba),
                            i = h.slice();
                        return d = d[f.cache], o(f.props, function(a, e) {
                            var f = e.idx,
                                g = h[f],
                                j = d[f],
                                k = l[e.type] || {};
                            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                        }), this[e](i)
                    },
                    blend: function(b) {
                        if (1 === this._rgba[3]) return this;
                        var c = this._rgba.slice(),
                            d = c.pop(),
                            e = j(b)._rgba;
                        return j(a.map(c, function(a, b) {
                            return (1 - d) * e[b] + d * a
                        }))
                    },
                    toRgbaString: function() {
                        var b = "rgba(",
                            c = a.map(this._rgba, function(a, b) {
                                return null == a ? b > 2 ? 1 : 0 : a
                            });
                        return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                    },
                    toHslaString: function() {
                        var b = "hsla(",
                            c = a.map(this.hsla(), function(a, b) {
                                return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                            });
                        return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                    },
                    toHexString: function(b) {
                        var c = this._rgba.slice(),
                            d = c.pop();
                        return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b, c, d = a[0] / 255,
                        e = a[1] / 255,
                        f = a[2] / 255,
                        g = a[3],
                        h = Math.max(d, e, f),
                        i = Math.min(d, e, f),
                        j = h - i,
                        k = h + i,
                        l = .5 * k;
                    return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
                }, k.hsla.from = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b = a[0] / 360,
                        c = a[1],
                        d = a[2],
                        f = a[3],
                        g = .5 >= d ? d * (1 + c) : d + c - d * c,
                        h = 2 * d - g;
                    return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
                }, o(k, function(d, e) {
                    var f = e.props,
                        g = e.cache,
                        i = e.to,
                        k = e.from;
                    j.fn[d] = function(d) {
                        if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                        var e, h = a.type(d),
                            l = "array" === h || "object" === h ? d : arguments,
                            m = this[g].slice();
                        return o(f, function(a, b) {
                            var d = l["object" === h ? a : b.idx];
                            null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                        }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                    }, o(f, function(b, c) {
                        j.fn[b] || (j.fn[b] = function(e) {
                            var f, g = a.type(e),
                                i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                                j = this[i](),
                                k = j[c.idx];
                            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                        })
                    })
                }), j.hook = function(b) {
                    var c = b.split(" ");
                    o(c, function(b, c) {
                        a.cssHooks[c] = {
                            set: function(b, e) {
                                var f, g, h = "";
                                if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                    if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                        for (g = "backgroundColor" === c ? b.parentNode : b;
                                            ("" === h || "transparent" === h) && g && g.style;) try {
                                            h = a.css(g, "backgroundColor"), g = g.parentNode
                                        } catch (i) {}
                                        e = e.blend(h && "transparent" !== h ? h : "_default")
                                    }
                                    e = e.toRgbaString()
                                }
                                try {
                                    b.style[c] = e
                                } catch (i) {}
                            }
                        }, a.fx.step[c] = function(b) {
                            b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                        }
                    })
                }, j.hook(g), a.cssHooks.borderColor = {
                    expand: function(a) {
                        var b = {};
                        return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                            b["border" + d + "Color"] = a
                        }), b
                    }
                }, f = a.Color.names = {
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
            }(t),
            function() {
                function b(b) {
                    var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                        f = {};
                    if (e && e.length && e[0] && e[e[0]])
                        for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                    else
                        for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                    return f
                }

                function c(b, c) {
                    var d, f, g = {};
                    for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f));
                    return g
                }
                var d = ["add", "remove", "toggle"],
                    e = {
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
                a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                    a.fx.step[c] = function(a) {
                        ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (t.style(a.elem, c, a.end), a.setAttr = !0)
                    }
                }), a.fn.addBack || (a.fn.addBack = function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }), a.effects.animateClass = function(e, f, g, h) {
                    var i = a.speed(f, g, h);
                    return this.queue(function() {
                        var f, g = a(this),
                            h = g.attr("class") || "",
                            j = i.children ? g.find("*").addBack() : g;
                        j = j.map(function() {
                            var c = a(this);
                            return {
                                el: c,
                                start: b(this)
                            }
                        }), f = function() {
                            a.each(d, function(a, b) {
                                e[b] && g[b + "Class"](e[b])
                            })
                        }, f(), j = j.map(function() {
                            return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this
                        }), g.attr("class", h), j = j.map(function() {
                            var b = this,
                                c = a.Deferred(),
                                d = a.extend({}, i, {
                                    queue: !1,
                                    complete: function() {
                                        c.resolve(b)
                                    }
                                });
                            return this.el.animate(this.diff, d), c.promise()
                        }), a.when.apply(a, j.get()).done(function() {
                            f(), a.each(arguments, function() {
                                var b = this.el;
                                a.each(this.diff, function(a) {
                                    b.css(a, "")
                                })
                            }), i.complete.call(g[0])
                        })
                    })
                }, a.fn.extend({
                    addClass: function(b) {
                        return function(c, d, e, f) {
                            return d ? a.effects.animateClass.call(this, {
                                add: c
                            }, d, e, f) : b.apply(this, arguments)
                        }
                    }(a.fn.addClass),
                    removeClass: function(b) {
                        return function(c, d, e, f) {
                            return arguments.length > 1 ? a.effects.animateClass.call(this, {
                                remove: c
                            }, d, e, f) : b.apply(this, arguments)
                        }
                    }(a.fn.removeClass),
                    toggleClass: function(b) {
                        return function(c, d, e, f, g) {
                            return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                                add: c
                            } : {
                                remove: c
                            }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                                toggle: c
                            }, d, e, f)
                        }
                    }(a.fn.toggleClass),
                    switchClass: function(b, c, d, e, f) {
                        return a.effects.animateClass.call(this, {
                            add: c,
                            remove: b
                        }, d, e, f)
                    }
                })
            }(),
            function() {
                function b(b, c, d, e) {
                    return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                        effect: b
                    }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                }

                function c(b) {
                    return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect))
                }
                a.extend(a.effects, {
                    version: "1.11.2",
                    save: function(a, b) {
                        for (var c = 0; b.length > c; c++) null !== b[c] && a.data(s + b[c], a[0].style[b[c]])
                    },
                    restore: function(a, b) {
                        var c, d;
                        for (d = 0; b.length > d; d++) null !== b[d] && (c = a.data(s + b[d]), void 0 === c && (c = ""), a.css(b[d], c))
                    },
                    setMode: function(a, b) {
                        return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                    },
                    getBaseline: function(a, b) {
                        var c, d;
                        switch (a[0]) {
                            case "top":
                                c = 0;
                                break;
                            case "middle":
                                c = .5;
                                break;
                            case "bottom":
                                c = 1;
                                break;
                            default:
                                c = a[0] / b.height
                        }
                        switch (a[1]) {
                            case "left":
                                d = 0;
                                break;
                            case "center":
                                d = .5;
                                break;
                            case "right":
                                d = 1;
                                break;
                            default:
                                d = a[1] / b.width
                        }
                        return {
                            x: d,
                            y: c
                        }
                    },
                    createWrapper: function(b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                        var c = {
                                width: b.outerWidth(!0),
                                height: b.outerHeight(!0),
                                "float": b.css("float")
                            },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            e = {
                                width: b.width(),
                                height: b.height()
                            },
                            f = document.activeElement;
                        try {
                            f.id
                        } catch (g) {
                            f = document.body
                        }
                        return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                            position: "relative"
                        }), b.css({
                            position: "relative"
                        })) : (a.extend(c, {
                            position: b.css("position"),
                            zIndex: b.css("z-index")
                        }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                            c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                        }), b.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), b.css(e), d.css(c).show()
                    },
                    removeWrapper: function(b) {
                        var c = document.activeElement;
                        return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                    },
                    setTransition: function(b, c, d, e) {
                        return e = e || {}, a.each(c, function(a, c) {
                            var f = b.cssUnit(c);
                            f[0] > 0 && (e[c] = f[0] * d + f[1])
                        }), e
                    }
                }), a.fn.extend({
                    effect: function() {
                        function c(b) {
                            function c() {
                                a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                            }
                            var e = a(this),
                                f = d.complete,
                                h = d.mode;
                            (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
                        }
                        var d = b.apply(this, arguments),
                            e = d.mode,
                            f = d.queue,
                            g = a.effects.effect[d.effect];
                        return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
                            d.complete && d.complete.call(this)
                        }) : f === !1 ? this.each(c) : this.queue(f || "fx", c)
                    },
                    show: function(a) {
                        return function(d) {
                            if (c(d)) return a.apply(this, arguments);
                            var e = b.apply(this, arguments);
                            return e.mode = "show", this.effect.call(this, e)
                        }
                    }(a.fn.show),
                    hide: function(a) {
                        return function(d) {
                            if (c(d)) return a.apply(this, arguments);
                            var e = b.apply(this, arguments);
                            return e.mode = "hide", this.effect.call(this, e)
                        }
                    }(a.fn.hide),
                    toggle: function(a) {
                        return function(d) {
                            if (c(d) || "boolean" == typeof d) return a.apply(this, arguments);
                            var e = b.apply(this, arguments);
                            return e.mode = "toggle", this.effect.call(this, e)
                        }
                    }(a.fn.toggle),
                    cssUnit: function(b) {
                        var c = this.css(b),
                            d = [];
                        return a.each(["em", "px", "%", "pt"], function(a, b) {
                            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                        }), d
                    }
                })
            }(),
            function() {
                var b = {};
                a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                    b[c] = function(b) {
                        return Math.pow(b, a + 2)
                    }
                }), a.extend(b, {
                    Sine: function(a) {
                        return 1 - Math.cos(a * Math.PI / 2)
                    },
                    Circ: function(a) {
                        return 1 - Math.sqrt(1 - a * a)
                    },
                    Elastic: function(a) {
                        return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(a) {
                        return a * a * (3 * a - 2)
                    },
                    Bounce: function(a) {
                        for (var b, c = 4;
                            ((b = Math.pow(2, --c)) - 1) / 11 > a;);
                        return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                    }
                }), a.each(b, function(b, c) {
                    a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                        return 1 - c(1 - a)
                    }, a.easing["easeInOut" + b] = function(a) {
                        return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                    }
                })
            }(), a.effects, a.effects.effect.blind = function(b, c) {
                var d, e, f, g = a(this),
                    h = /up|down|vertical/,
                    i = /up|left|vertical|horizontal/,
                    j = ["position", "top", "bottom", "left", "right", "height", "width"],
                    k = a.effects.setMode(g, b.mode || "hide"),
                    l = b.direction || "up",
                    m = h.test(l),
                    n = m ? "height" : "width",
                    o = m ? "top" : "left",
                    p = i.test(l),
                    q = {},
                    r = "show" === k;
                g.parent().is(".ui-effects-wrapper") ? a.effects.save(g.parent(), j) : a.effects.save(g, j), g.show(), d = a.effects.createWrapper(g).css({
                    overflow: "hidden"
                }), e = d[n](), f = parseFloat(d.css(o)) || 0, q[n] = r ? e : 0, p || (g.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
                    position: "absolute"
                }), q[o] = r ? f : e + f), r && (d.css(n, 0), p || d.css(o, f + e)), d.animate(q, {
                    duration: b.duration,
                    easing: b.easing,
                    queue: !1,
                    complete: function() {
                        "hide" === k && g.hide(), a.effects.restore(g, j), a.effects.removeWrapper(g), c()
                    }
                })
            }, a.effects.effect.bounce = function(b, c) {
                var d, e, f, g = a(this),
                    h = ["position", "top", "bottom", "left", "right", "height", "width"],
                    i = a.effects.setMode(g, b.mode || "effect"),
                    j = "hide" === i,
                    k = "show" === i,
                    l = b.direction || "up",
                    m = b.distance,
                    n = b.times || 5,
                    o = 2 * n + (k || j ? 1 : 0),
                    p = b.duration / o,
                    q = b.easing,
                    r = "up" === l || "down" === l ? "top" : "left",
                    s = "up" === l || "left" === l,
                    t = g.queue(),
                    u = t.length;
                for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
                        opacity: 1
                    }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
                j && (e = {
                    opacity: 0
                }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
                    j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
                }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
            }, a.effects.effect.clip = function(b, c) {
                var d, e, f, g = a(this),
                    h = ["position", "top", "bottom", "left", "right", "height", "width"],
                    i = a.effects.setMode(g, b.mode || "hide"),
                    j = "show" === i,
                    k = b.direction || "vertical",
                    l = "vertical" === k,
                    m = l ? "height" : "width",
                    n = l ? "top" : "left",
                    o = {};
                a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
                    overflow: "hidden"
                }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
                    }
                })
            }, a.effects.effect.drop = function(b, c) {
                var d, e = a(this),
                    f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                    g = a.effects.setMode(e, b.mode || "hide"),
                    h = "show" === g,
                    i = b.direction || "left",
                    j = "up" === i || "down" === i ? "top" : "left",
                    k = "up" === i || "left" === i ? "pos" : "neg",
                    l = {
                        opacity: h ? 1 : 0
                    };
                a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                    }
                })
            }, a.effects.effect.explode = function(b, c) {
                function d() {
                    t.push(this), t.length === l * m && e()
                }

                function e() {
                    n.css({
                        visibility: "visible"
                    }), a(t).remove(), p || n.hide(), c()
                }
                var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
                    m = l,
                    n = a(this),
                    o = a.effects.setMode(n, b.mode || "hide"),
                    p = "show" === o,
                    q = n.show().css("visibility", "hidden").offset(),
                    r = Math.ceil(n.outerWidth() / m),
                    s = Math.ceil(n.outerHeight() / l),
                    t = [];
                for (f = 0; l > f; f++)
                    for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -g * r,
                        top: -f * s
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: r,
                        height: s,
                        left: h + (p ? j * r : 0),
                        top: i + (p ? k * s : 0),
                        opacity: p ? 0 : 1
                    }).animate({
                        left: h + (p ? 0 : j * r),
                        top: i + (p ? 0 : k * s),
                        opacity: p ? 1 : 0
                    }, b.duration || 500, b.easing, d)
            }, a.effects.effect.fade = function(b, c) {
                var d = a(this),
                    e = a.effects.setMode(d, b.mode || "toggle");
                d.animate({
                    opacity: e
                }, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: c
                })
            }, a.effects.effect.fold = function(b, c) {
                var d, e, f = a(this),
                    g = ["position", "top", "bottom", "left", "right", "height", "width"],
                    h = a.effects.setMode(f, b.mode || "hide"),
                    i = "show" === h,
                    j = "hide" === h,
                    k = b.size || 15,
                    l = /([0-9]+)%/.exec(k),
                    m = !!b.horizFirst,
                    n = i !== m,
                    o = n ? ["width", "height"] : ["height", "width"],
                    p = b.duration / 2,
                    q = {},
                    r = {};
                a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
                    overflow: "hidden"
                }), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
                    height: 0,
                    width: k
                } : {
                    height: k,
                    width: 0
                }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
                    j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
                })
            }, a.effects.effect.highlight = function(b, c) {
                var d = a(this),
                    e = ["backgroundImage", "backgroundColor", "opacity"],
                    f = a.effects.setMode(d, b.mode || "show"),
                    g = {
                        backgroundColor: d.css("backgroundColor")
                    };
                "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
                    backgroundImage: "none",
                    backgroundColor: b.color || "#ffff99"
                }).animate(g, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        "hide" === f && d.hide(), a.effects.restore(d, e), c()
                    }
                })
            }, a.effects.effect.size = function(b, c) {
                var d, e, f, g = a(this),
                    h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    j = ["width", "height", "overflow"],
                    k = ["fontSize"],
                    l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    n = a.effects.setMode(g, b.mode || "effect"),
                    o = b.restore || "effect" !== n,
                    p = b.scale || "both",
                    q = b.origin || ["middle", "center"],
                    r = g.css("position"),
                    s = o ? h : i,
                    t = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                "show" === n && g.show(), d = {
                    height: g.height(),
                    width: g.width(),
                    outerHeight: g.outerHeight(),
                    outerWidth: g.outerWidth()
                }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
                    from: {
                        y: g.from.height / d.height,
                        x: g.from.width / d.width
                    },
                    to: {
                        y: g.to.height / d.height,
                        x: g.to.width / d.width
                    }
                }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y,
                    g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
                    var c = a(this),
                        d = {
                            height: c.height(),
                            width: c.width(),
                            outerHeight: c.outerHeight(),
                            outerWidth: c.outerWidth()
                        };
                    o && a.effects.save(c, j), c.from = {
                        height: d.height * f.from.y,
                        width: d.width * f.from.x,
                        outerHeight: d.outerHeight * f.from.y,
                        outerWidth: d.outerWidth * f.from.x
                    }, c.to = {
                        height: d.height * f.to.y,
                        width: d.width * f.to.x,
                        outerHeight: d.height * f.to.y,
                        outerWidth: d.width * f.to.x
                    }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
                        o && a.effects.restore(c, j)
                    })
                })), g.animate(g.to, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                            position: "relative",
                            top: g.to.top,
                            left: g.to.left
                        }) : a.each(["top", "left"], function(a, b) {
                            g.css(b, function(b, c) {
                                var d = parseInt(c, 10),
                                    e = a ? g.to.left : g.to.top;
                                return "auto" === c ? e + "px" : d + e + "px"
                            })
                        })), a.effects.removeWrapper(g), c()
                    }
                })
            }, a.effects.effect.scale = function(b, c) {
                var d = a(this),
                    e = a.extend(!0, {}, b),
                    f = a.effects.setMode(d, b.mode || "effect"),
                    g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                    h = b.direction || "both",
                    i = b.origin,
                    j = {
                        height: d.height(),
                        width: d.width(),
                        outerHeight: d.outerHeight(),
                        outerWidth: d.outerWidth()
                    },
                    k = {
                        y: "horizontal" !== h ? g / 100 : 1,
                        x: "vertical" !== h ? g / 100 : 1
                    };
                e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : j), e.to = {
                    height: j.height * k.y,
                    width: j.width * k.x,
                    outerHeight: j.outerHeight * k.y,
                    outerWidth: j.outerWidth * k.x
                }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
            }, a.effects.effect.puff = function(b, c) {
                var d = a(this),
                    e = a.effects.setMode(d, b.mode || "hide"),
                    f = "hide" === e,
                    g = parseInt(b.percent, 10) || 150,
                    h = g / 100,
                    i = {
                        height: d.height(),
                        width: d.width(),
                        outerHeight: d.outerHeight(),
                        outerWidth: d.outerWidth()
                    };
                a.extend(b, {
                    effect: "scale",
                    queue: !1,
                    fade: !0,
                    mode: e,
                    complete: c,
                    percent: f ? g : 100,
                    from: f ? i : {
                        height: i.height * h,
                        width: i.width * h,
                        outerHeight: i.outerHeight * h,
                        outerWidth: i.outerWidth * h
                    }
                }), d.effect(b)
            }, a.effects.effect.pulsate = function(b, c) {
                var d, e = a(this),
                    f = a.effects.setMode(e, b.mode || "show"),
                    g = "show" === f,
                    h = "hide" === f,
                    i = g || "hide" === f,
                    j = 2 * (b.times || 5) + (i ? 1 : 0),
                    k = b.duration / j,
                    l = 0,
                    m = e.queue(),
                    n = m.length;
                for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
                    opacity: l
                }, k, b.easing), l = 1 - l;
                e.animate({
                    opacity: l
                }, k, b.easing), e.queue(function() {
                    h && e.hide(), c()
                }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
            }, a.effects.effect.shake = function(b, c) {
                var d, e = a(this),
                    f = ["position", "top", "bottom", "left", "right", "height", "width"],
                    g = a.effects.setMode(e, b.mode || "effect"),
                    h = b.direction || "left",
                    i = b.distance || 20,
                    j = b.times || 3,
                    k = 2 * j + 1,
                    l = Math.round(b.duration / k),
                    m = "up" === h || "down" === h ? "top" : "left",
                    n = "up" === h || "left" === h,
                    o = {},
                    p = {},
                    q = {},
                    r = e.queue(),
                    s = r.length;
                for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
                e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
            }, a.effects.effect.slide = function(b, c) {
                var d, e = a(this),
                    f = ["position", "top", "bottom", "left", "right", "width", "height"],
                    g = a.effects.setMode(e, b.mode || "show"),
                    h = "show" === g,
                    i = b.direction || "left",
                    j = "up" === i || "down" === i ? "top" : "left",
                    k = "up" === i || "left" === i,
                    l = {};
                a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
                    overflow: "hidden"
                }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                    }
                })
            }, a.effects.effect.transfer = function(b, c) {
                var d = a(this),
                    e = a(b.to),
                    f = "fixed" === e.css("position"),
                    g = a("body"),
                    h = f ? g.scrollTop() : 0,
                    i = f ? g.scrollLeft() : 0,
                    j = e.offset(),
                    k = {
                        top: j.top - h,
                        left: j.left - i,
                        height: e.innerHeight(),
                        width: e.innerWidth()
                    },
                    l = d.offset(),
                    m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
                        top: l.top - h,
                        left: l.left - i,
                        height: d.innerHeight(),
                        width: d.innerWidth(),
                        position: f ? "fixed" : "absolute"
                    }).animate(k, b.duration, b.easing, function() {
                        m.remove(), c()
                    })
            }, a.widget("ui.progressbar", {
                version: "1.11.2",
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
                    }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                },
                value: function(a) {
                    return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), void this._refreshValue())
                },
                _constrainedValue: function(a) {
                    return void 0 === a && (a = this.options.value), this.indeterminate = a === !1, "number" != typeof a && (a = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, a))
                },
                _setOptions: function(a) {
                    var b = a.value;
                    delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue()
                },
                _setOption: function(a, b) {
                    "max" === a && (b = Math.max(this.min, b)), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var b = this.options.value,
                        c = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": b
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete")
                }
            }), a.widget("ui.selectable", a.ui.mouse, {
                version: "1.11.2",
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
                    var b, c = this;
                    this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                        b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                            var b = a(this),
                                c = b.offset();
                            a.data(this, "selectable-item", {
                                element: this,
                                $element: b,
                                left: c.left,
                                top: c.top,
                                right: c.left + b.outerWidth(),
                                bottom: c.top + b.outerHeight(),
                                startselected: !1,
                                selected: b.hasClass("ui-selected"),
                                selecting: b.hasClass("ui-selecting"),
                                unselecting: b.hasClass("ui-unselecting")
                            })
                        })
                    }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                },
                _mouseStart: function(b) {
                    var c = this,
                        d = this.options;
                    this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                        left: b.pageX,
                        top: b.pageY,
                        width: 0,
                        height: 0
                    }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var d = a.data(this, "selectable-item");
                        d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                            unselecting: d.element
                        }))
                    }), a(b.target).parents().addBack().each(function() {
                        var d, e = a.data(this, "selectable-item");
                        return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                            selecting: e.element
                        }) : c._trigger("unselecting", b, {
                            unselecting: e.element
                        }), !1) : void 0
                    }))
                },
                _mouseDrag: function(b) {
                    if (this.dragged = !0, !this.options.disabled) {
                        var c, d = this,
                            e = this.options,
                            f = this.opos[0],
                            g = this.opos[1],
                            h = b.pageX,
                            i = b.pageY;
                        return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                            left: f,
                            top: g,
                            width: h - f,
                            height: i - g
                        }), this.selectees.each(function() {
                            var c = a.data(this, "selectable-item"),
                                j = !1;
                            c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || f > c.right || c.top > i || g > c.bottom) : "fit" === e.tolerance && (j = c.left > f && h > c.right && c.top > g && i > c.bottom), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                                selecting: c.element
                            }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
                                unselecting: c.element
                            }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                                unselecting: c.element
                            })))))
                        }), !1
                    }
                },
                _mouseStop: function(b) {
                    var c = this;
                    return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                        var d = a.data(this, "selectable-item");
                        d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                            unselected: d.element
                        })
                    }), a(".ui-selecting", this.element[0]).each(function() {
                        var d = a.data(this, "selectable-item");
                        d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                            selected: d.element
                        })
                    }), this._trigger("stop", b), this.helper.remove(), !1
                }
            }), a.widget("ui.selectmenu", {
                version: "1.11.2",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    disabled: null,
                    icons: {
                        button: "ui-icon-triangle-1-s"
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    width: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null
                },
                _create: function() {
                    var a = this.element.uniqueId().attr("id");
                    this.ids = {
                        element: a,
                        button: a + "-button",
                        menu: a + "-menu"
                    }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                },
                _drawButton: function() {
                    var b = this,
                        c = this.element.attr("tabindex");
                    this.label = a("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                        click: function(a) {
                            this.button.focus(), a.preventDefault()
                        }
                    }), this.element.hide(), this.button = a("<span>", {
                        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                        tabindex: c || this.options.disabled ? -1 : 0,
                        id: this.ids.button,
                        role: "combobox",
                        "aria-expanded": "false",
                        "aria-autocomplete": "list",
                        "aria-owns": this.ids.menu,
                        "aria-haspopup": "true"
                    }).insertAfter(this.element), a("<span>", {
                        "class": "ui-icon " + this.options.icons.button
                    }).prependTo(this.button), this.buttonText = a("<span>", {
                        "class": "ui-selectmenu-text"
                    }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                        b.menuItems || b._refreshMenu()
                    }), this._hoverable(this.button), this._focusable(this.button)
                },
                _drawMenu: function() {
                    var b = this;
                    this.menu = a("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu
                    }), this.menuWrap = a("<div>", {
                        "class": "ui-selectmenu-menu ui-front"
                    }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                        role: "listbox",
                        select: function(a, c) {
                            a.preventDefault(), b._setSelection(), b._select(c.item.data("ui-selectmenu-item"), a)
                        },
                        focus: function(a, c) {
                            var d = c.item.data("ui-selectmenu-item");
                            null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {
                                item: d
                            }), b.isOpen || b._select(d, a)), b.focusIndex = d.index, b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"))
                        }
                    }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                        return !1
                    }, this.menuInstance._isDivider = function() {
                        return !1
                    }
                },
                refresh: function() {
                    this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
                },
                _refreshMenu: function() {
                    this.menu.empty();
                    var a, b = this.element.find("option");
                    b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function(a) {
                    this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a))
                },
                _position: function() {
                    this.menuWrap.position(a.extend({
                        of: this.button
                    }, this.options.position))
                },
                close: function(a) {
                    this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a))
                },
                widget: function() {
                    return this.button
                },
                menuWidget: function() {
                    return this.menu
                },
                _renderMenu: function(b, c) {
                    var d = this,
                        e = "";
                    a.each(c, function(c, f) {
                        f.optgroup !== e && (a("<li>", {
                            "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                            text: f.optgroup
                        }).appendTo(b), e = f.optgroup), d._renderItemData(b, f)
                    })
                },
                _renderItemData: function(a, b) {
                    return this._renderItem(a, b).data("ui-selectmenu-item", b)
                },
                _renderItem: function(b, c) {
                    var d = a("<li>");
                    return c.disabled && d.addClass("ui-state-disabled"), this._setText(d, c.label), d.appendTo(b)
                },
                _setText: function(a, b) {
                    b ? a.text(b) : a.html("&#160;")
                },
                _move: function(a, b) {
                    var c, d, e = ".ui-menu-item";
                    this.isOpen ? c = this.menuItems.eq(this.focusIndex) : (c = this.menuItems.eq(this.element[0].selectedIndex), e += ":not(.ui-state-disabled)"), d = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](e).eq(-1) : c[a + "All"](e).eq(0), d.length && this.menuInstance.focus(b, d)
                },
                _getSelectedItem: function() {
                    return this.menuItems.eq(this.element[0].selectedIndex)
                },
                _toggle: function(a) {
                    this[this.isOpen ? "close" : "open"](a)
                },
                _setSelection: function() {
                    var a;
                    this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
                },
                _documentClick: {
                    mousedown: function(b) {
                        this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(b))
                    }
                },
                _buttonEvents: {
                    mousedown: function() {
                        var a;
                        window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange()
                    },
                    click: function(a) {
                        this._setSelection(), this._toggle(a)
                    },
                    keydown: function(b) {
                        var c = !0;
                        switch (b.keyCode) {
                            case a.ui.keyCode.TAB:
                            case a.ui.keyCode.ESCAPE:
                                this.close(b), c = !1;
                                break;
                            case a.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(b);
                                break;
                            case a.ui.keyCode.UP:
                                b.altKey ? this._toggle(b) : this._move("prev", b);
                                break;
                            case a.ui.keyCode.DOWN:
                                b.altKey ? this._toggle(b) : this._move("next", b);
                                break;
                            case a.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
                                break;
                            case a.ui.keyCode.LEFT:
                                this._move("prev", b);
                                break;
                            case a.ui.keyCode.RIGHT:
                                this._move("next", b);
                                break;
                            case a.ui.keyCode.HOME:
                            case a.ui.keyCode.PAGE_UP:
                                this._move("first", b);
                                break;
                            case a.ui.keyCode.END:
                            case a.ui.keyCode.PAGE_DOWN:
                                this._move("last", b);
                                break;
                            default:
                                this.menu.trigger(b), c = !1
                        }
                        c && b.preventDefault()
                    }
                },
                _selectFocusedItem: function(a) {
                    var b = this.menuItems.eq(this.focusIndex);
                    b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a)
                },
                _select: function(a, b) {
                    var c = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = a.index, this._setText(this.buttonText, a.label), this._setAria(a), this._trigger("select", b, {
                        item: a
                    }), a.index !== c && this._trigger("change", b, {
                        item: a
                    }), this.close(b)
                },
                _setAria: function(a) {
                    var b = this.menuItems.eq(a.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": b,
                        "aria-activedescendant": b
                    }), this.menu.attr("aria-activedescendant", b)
                },
                _setOption: function(a, b) {
                    "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button), this._super(a, b), "appendTo" === a && this.menuWrap.appendTo(this._appendTo()), "disabled" === a && (this.menuInstance.option("disabled", b), this.button.toggleClass("ui-state-disabled", b).attr("aria-disabled", b), this.element.prop("disabled", b), b ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === a && this._resizeButton()
                },
                _appendTo: function() {
                    var b = this.options.appendTo;
                    return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
                },
                _toggleAttr: function() {
                    this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                },
                _resizeButton: function() {
                    var a = this.options.width;
                    a || (a = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(a)
                },
                _resizeMenu: function() {
                    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                },
                _getCreateOptions: function() {
                    return {
                        disabled: this.element.prop("disabled")
                    }
                },
                _parseOptions: function(b) {
                    var c = [];
                    b.each(function(b, d) {
                        var e = a(d),
                            f = e.parent("optgroup");
                        c.push({
                            element: e,
                            index: b,
                            value: e.attr("value"),
                            label: e.text(),
                            optgroup: f.attr("label") || "",
                            disabled: f.prop("disabled") || e.prop("disabled")
                        })
                    }), this.items = c
                },
                _destroy: function() {
                    this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
                }
            }), a.widget("ui.slider", a.ui.mouse, {
                version: "1.11.2",
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
                numPages: 5,
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                },
                _createHandles: function() {
                    var b, c, d = this.options,
                        e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        f = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                        g = [];
                    for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
                    this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(b) {
                        a(this).data("ui-slider-handle-index", b)
                    })
                },
                _createRange: function() {
                    var b = this.options,
                        c = "";
                    b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                },
                _mouseCapture: function(b) {
                    var c, d, e, f, g, h, i, j, k = this,
                        l = this.options;
                    return !l.disabled && (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), c = {
                        x: b.pageX,
                        y: b.pageY
                    }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
                        var c = Math.abs(d - k.values(b));
                        (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
                    }), h = this._start(b, g), h !== !1 && (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
                        left: 0,
                        top: 0
                    } : {
                        left: b.pageX - i.left - f.width() / 2,
                        top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(a) {
                    var b = {
                            x: a.pageX,
                            y: a.pageY
                        },
                        c = this._normValueFromMouse(b);
                    return this._slide(a, this._handleIndex, c), !1
                },
                _mouseStop: function(a) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(a) {
                    var b, c, d, e, f;
                    return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
                },
                _start: function(a, b) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
                },
                _slide: function(a, b, c) {
                    var d, e, f;
                    this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                        handle: this.handles[b],
                        value: c,
                        values: e
                    }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
                        handle: this.handles[b],
                        value: c
                    }), f !== !1 && this.value(c))
                },
                _stop: function(a, b) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
                },
                _change: function(a, b) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var c = {
                            handle: this.handles[b],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
                    }
                },
                value: function(a) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(b, c) {
                    var d, e, f;
                    if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
                    if (!arguments.length) return this._values();
                    if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
                    for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                    this._refreshValue()
                },
                _setOption: function(b, c) {
                    var d, e = 0;
                    switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), b) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === c ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _value: function() {
                    var a = this.options.value;
                    return a = this._trimAlignValue(a)
                },
                _values: function(a) {
                    var b, c, d;
                    if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
                    if (this.options.values && this.options.values.length) {
                        for (c = this.options.values.slice(), d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                        return c
                    }
                    return []
                },
                _trimAlignValue: function(a) {
                    if (this._valueMin() >= a) return this._valueMin();
                    if (a >= this._valueMax()) return this._valueMax();
                    var b = this.options.step > 0 ? this.options.step : 1,
                        c = (a - this._valueMin()) % b,
                        d = a - c;
                    return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
                },
                _calculateNewMax: function() {
                    var a = (this.options.max - this._valueMin()) % this.options.step;
                    this.max = this.options.max - a
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshValue: function() {
                    var b, c, d, e, f, g = this.options.range,
                        h = this.options,
                        i = this,
                        j = !this._animateOff && h.animate,
                        k = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(d) {
                        c = 100 * ((i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin())), k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                            left: c + "%"
                        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                            width: c - b + "%"
                        }, {
                            queue: !1,
                            duration: h.animate
                        })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                            bottom: c + "%"
                        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                            height: c - b + "%"
                        }, {
                            queue: !1,
                            duration: h.animate
                        }))), b = c
                    }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? 100 * ((d - e) / (f - e)) : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                        width: c + "%"
                    }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                        width: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                        height: c + "%"
                    }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                        height: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(b) {
                        var c, d, e, f, g = a(b.target).data("ui-slider-handle-index");
                        switch (b.keyCode) {
                            case a.ui.keyCode.HOME:
                            case a.ui.keyCode.END:
                            case a.ui.keyCode.PAGE_UP:
                            case a.ui.keyCode.PAGE_DOWN:
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), c = this._start(b, g), c === !1)) return
                        }
                        switch (f = this.options.step, d = e = this.options.values && this.options.values.length ? this.values(g) : this.value(), b.keyCode) {
                            case a.ui.keyCode.HOME:
                                e = this._valueMin();
                                break;
                            case a.ui.keyCode.END:
                                e = this._valueMax();
                                break;
                            case a.ui.keyCode.PAGE_UP:
                                e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case a.ui.keyCode.PAGE_DOWN:
                                e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                                if (d === this._valueMax()) return;
                                e = this._trimAlignValue(d + f);
                                break;
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (d === this._valueMin()) return;
                                e = this._trimAlignValue(d - f)
                        }
                        this._slide(b, g, e)
                    },
                    keyup: function(b) {
                        var c = a(b.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                    }
                }
            }), a.widget("ui.sortable", a.ui.mouse, {
                version: "1.11.2",
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
                _isOverAxis: function(a, b, c) {
                    return a >= b && b + c > a
                },
                _isFloating: function(a) {
                    return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
                },
                _create: function() {
                    var a = this.options;
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === a.axis || this._isFloating(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                },
                _setOption: function(a, b) {
                    this._super(a, b), "handle" === a && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                    for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(b, c) {
                    var d = null,
                        e = !1,
                        f = this;
                    return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), a(b.target).parents().each(function() {
                        return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
                    }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !!d && (!(this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
                        this === b.target && (e = !0)
                    }), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0))))
                },
                _mouseStart: function(b, c, d) {
                    var e, f, g = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, a.extend(this.offset, {
                            click: {
                                left: b.pageX - this.offset.left,
                                top: b.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                        for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
                    return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
                },
                _mouseDrag: function(b) {
                    var c, d, e, f, g = this.options,
                        h = !1;
                    for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                        if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" !== this.options.type || !a.contains(this.element[0], e))) {
                            if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                            this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                            break
                        }
                    return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(b, c) {
                    if (b) {
                        if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                            var d = this,
                                e = this.placeholder.offset(),
                                f = this.options.axis,
                                g = {};
                            f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                                d._clear(b)
                            })
                        } else this._clear(b, c);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(b) {
                    var c = this._getItemsAsjQuery(b && b.connected),
                        d = [];
                    return b = b || {}, a(c).each(function() {
                        var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                        c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                    }), !d.length && b.key && d.push(b.key + "="), d.join("&")
                },
                toArray: function(b) {
                    var c = this._getItemsAsjQuery(b && b.connected),
                        d = [];
                    return b = b || {}, c.each(function() {
                        d.push(a(b.item || this).attr(b.attribute || "id") || "")
                    }), d
                },
                _intersectsWith: function(a) {
                    var b = this.positionAbs.left,
                        c = b + this.helperProportions.width,
                        d = this.positionAbs.top,
                        e = d + this.helperProportions.height,
                        f = a.left,
                        g = f + a.width,
                        h = a.top,
                        i = h + a.height,
                        j = this.offset.click.top,
                        k = this.offset.click.left,
                        l = "x" === this.options.axis || d + j > h && i > d + j,
                        m = "y" === this.options.axis || b + k > f && g > b + k,
                        n = l && m;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2
                },
                _intersectsWithPointer: function(a) {
                    var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                        c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                        d = b && c,
                        e = this._getDragVerticalDirection(),
                        f = this._getDragHorizontalDirection();
                    return !!d && (this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
                },
                _intersectsWithSides: function(a) {
                    var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                        c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                        d = this._getDragVerticalDirection(),
                        e = this._getDragHorizontalDirection();
                    return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
                },
                _getDragVerticalDirection: function() {
                    var a = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== a && (a > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var a = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== a && (a > 0 ? "right" : "left")
                },
                refresh: function(a) {
                    return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var a = this.options;
                    return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
                },
                _getItemsAsjQuery: function(b) {
                    function c() {
                        h.push(this)
                    }
                    var d, e, f, g, h = [],
                        i = [],
                        j = this._connectWith();
                    if (j && b)
                        for (d = j.length - 1; d >= 0; d--)
                            for (f = a(j[d]), e = f.length - 1; e >= 0; e--) g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
                    for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) i[d][0].each(c);
                    return a(h)
                },
                _removeCurrentsFromItems: function() {
                    var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = a.grep(this.items, function(a) {
                        for (var c = 0; b.length > c; c++)
                            if (b[c] === a.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(b) {
                    this.items = [], this.containers = [this];
                    var c, d, e, f, g, h, i, j, k = this.items,
                        l = [
                            [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                                item: this.currentItem
                            }) : a(this.options.items, this.element), this]
                        ],
                        m = this._connectWith();
                    if (m && this.ready)
                        for (c = m.length - 1; c >= 0; c--)
                            for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                                item: this.currentItem
                            }) : a(f.options.items, f.element), f]), this.containers.push(f));
                    for (c = l.length - 1; c >= 0; c--)
                        for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                            item: i,
                            instance: g,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                },
                refreshPositions: function(b) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var c, d, e, f;
                    for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(b) {
                    b = b || this;
                    var c, d = b.options;
                    d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                        element: function() {
                            var d = b.currentItem[0].nodeName.toLowerCase(),
                                e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return "tr" === d ? b.currentItem.children().each(function() {
                                a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
                            }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                        },
                        update: function(a, e) {
                            (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
                },
                _contactContainers: function(b) {
                    var c, d, e, f, g, h, i, j, k, l, m = null,
                        n = null;
                    for (c = this.containers.length - 1; c >= 0; c--)
                        if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                            if (this._intersectsWith(this.containers[c].containerCache)) {
                                if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                                m = this.containers[c], n = c
                            } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
                    if (m)
                        if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                        else {
                            for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), e > Math.abs(b[l] - i) && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
                            if (!f && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[n]) return void(this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                            f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
                        }
                },
                _createHelper: function(b) {
                    var c = this.options,
                        d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
                    return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
                },
                _adjustOffsetFromHelper: function(b) {
                    "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                        left: +b[0],
                        top: +b[1] || 0
                    }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var b = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                        top: 0,
                        left: 0
                    }), {
                        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var a = this.currentItem.position();
                        return {
                            top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
                    var b, c, d, e = this.options;
                    "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(b, c) {
                    c || (c = this.position);
                    var d = "absolute" === b ? 1 : -1,
                        e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        f = /(html|body)/i.test(e[0].tagName);
                    return {
                        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                    }
                },
                _generatePosition: function(b) {
                    var c, d, e = this.options,
                        f = b.pageX,
                        g = b.pageY,
                        h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        i = /(html|body)/i.test(h[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                    }
                },
                _rearrange: function(a, b, c, d) {
                    c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var e = this.counter;
                    this._delay(function() {
                        e === this.counter && this.refreshPositions(!d)
                    })
                },
                _clear: function(a, b) {
                    function c(a, b, c) {
                        return function(d) {
                            c._trigger(a, d, b._uiHash(b))
                        }
                    }
                    this.reverting = !1;
                    var d, e = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !b && e.push(function(a) {
                            this._trigger("receive", a, this._uiHash(this.fromOutside))
                        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                            this._trigger("update", a, this._uiHash())
                        }), this !== this.currentContainer && (b || (e.push(function(a) {
                            this._trigger("remove", a, this._uiHash())
                        }), e.push(function(a) {
                            return function(b) {
                                a._trigger("receive", b, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)), e.push(function(a) {
                            return function(b) {
                                a._trigger("update", b, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
                        for (d = 0; e.length > d; d++) e[d].call(this, a);
                        this._trigger("stop", a, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() {
                    a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(b) {
                    var c = b || this;
                    return {
                        helper: c.helper,
                        placeholder: c.placeholder || a([]),
                        position: c.position,
                        originalPosition: c.originalPosition,
                        offset: c.positionAbs,
                        item: c.currentItem,
                        sender: b ? b.element : null
                    }
                }
            }), a.widget("ui.spinner", {
                version: "1.11.2",
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
                    var b = {},
                        c = this.element;
                    return a.each(["min", "max", "step"], function(a, d) {
                        var e = c.attr(d);
                        void 0 !== e && e.length && (b[d] = e)
                    }), b
                },
                _events: {
                    keydown: function(a) {
                        this._start(a) && this._keydown(a) && a.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function() {
                        this.previous = this.element.val()
                    },
                    blur: function(a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", a)))
                    },
                    mousewheel: function(a, b) {
                        if (b) {
                            if (!this.spinning && !this._start(a)) return !1;
                            this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                this.spinning && this._stop(a)
                            }, 100), a.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(b) {
                        function c() {
                            var a = this.element[0] === this.document[0].activeElement;
                            a || (this.element.focus(), this.previous = d, this._delay(function() {
                                this.previous = d
                            }))
                        }
                        var d;
                        d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, c.call(this)
                        }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(b) {
                        return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) !== !1 && void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), this.options.disabled && this.disable()
                },
                _keydown: function(b) {
                    var c = this.options,
                        d = a.ui.keyCode;
                    switch (b.keyCode) {
                        case d.UP:
                            return this._repeat(null, 1, b), !0;
                        case d.DOWN:
                            return this._repeat(null, -1, b), !0;
                        case d.PAGE_UP:
                            return this._repeat(null, c.page, b), !0;
                        case d.PAGE_DOWN:
                            return this._repeat(null, -c.page, b), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                },
                _start: function(a) {
                    return !(!this.spinning && this._trigger("start", a) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
                },
                _repeat: function(a, b, c) {
                    a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                        this._repeat(40, b, c)
                    }, a), this._spin(b * this.options.step, c)
                },
                _spin: function(a, b) {
                    var c = this.value() || 0;
                    this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && this._trigger("spin", b, {
                        value: c
                    }) === !1 || (this._value(c), this.counter++)
                },
                _increment: function(b) {
                    var c = this.options.incremental;
                    return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
                },
                _precision: function() {
                    var a = this._precisionOf(this.options.step);
                    return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
                },
                _precisionOf: function(a) {
                    var b = "" + a,
                        c = b.indexOf(".");
                    return -1 === c ? 0 : b.length - c - 1
                },
                _adjustValue: function(a) {
                    var b, c, d = this.options;
                    return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && d.min > a ? d.min : a
                },
                _stop: function(a) {
                    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
                },
                _setOption: function(a, b) {
                    if ("culture" === a || "numberFormat" === a) {
                        var c = this._parse(this.element.val());
                        return this.options[a] = b, void this.element.val(this._format(c))
                    }("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), this._super(a, b), "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), this.buttons.button(b ? "disable" : "enable"))
                },
                _setOptions: i(function(a) {
                    this._super(a)
                }),
                _parse: function(a) {
                    return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
                },
                _format: function(a) {
                    return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
                },
                _refresh: function() {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                isValid: function() {
                    var a = this.value();
                    return null !== a && a === this._adjustValue(a)
                },
                _value: function(a, b) {
                    var c;
                    "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c))), this.element.val(a), this._refresh()
                },
                _destroy: function() {
                    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                },
                stepUp: i(function(a) {
                    this._stepUp(a)
                }),
                _stepUp: function(a) {
                    this._start() && (this._spin((a || 1) * this.options.step), this._stop())
                },
                stepDown: i(function(a) {
                    this._stepDown(a)
                }),
                _stepDown: function(a) {
                    this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
                },
                pageUp: i(function(a) {
                    this._stepUp((a || 1) * this.options.page)
                }),
                pageDown: i(function(a) {
                    this._stepDown((a || 1) * this.options.page)
                }),
                value: function(a) {
                    return arguments.length ? void i(this._value).call(this, a) : this._parse(this.element.val())
                },
                widget: function() {
                    return this.uiSpinner
                }
            }), a.widget("ui.tabs", {
                version: "1.11.2",
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
                _isLocal: function() {
                    var a = /#.*$/;
                    return function(b) {
                        var c, d;
                        b = b.cloneNode(!1), c = b.href.replace(a, ""), d = location.href.replace(a, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (e) {}
                        try {
                            d = decodeURIComponent(d)
                        } catch (e) {}
                        return b.hash.length > 1 && c === d
                    }
                }(),
                _create: function() {
                    var b = this,
                        c = this.options;
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                        return b.tabs.index(a)
                    }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
                },
                _initialActive: function() {
                    var b = this.options.active,
                        c = this.options.collapsible,
                        d = location.hash.substring(1);
                    return null === b && (d && this.tabs.each(function(c, e) {
                        return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
                    }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = !!this.tabs.length && 0)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = !c && 0)), !c && b === !1 && this.anchors.length && (b = 0), b
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : a()
                    }
                },
                _tabKeydown: function(b) {
                    var c = a(this.document[0].activeElement).closest("li"),
                        d = this.tabs.index(c),
                        e = !0;
                    if (!this._handlePageNav(b)) {
                        switch (b.keyCode) {
                            case a.ui.keyCode.RIGHT:
                            case a.ui.keyCode.DOWN:
                                d++;
                                break;
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.LEFT:
                                e = !1, d--;
                                break;
                            case a.ui.keyCode.END:
                                d = this.anchors.length - 1;
                                break;
                            case a.ui.keyCode.HOME:
                                d = 0;
                                break;
                            case a.ui.keyCode.SPACE:
                                return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                            case a.ui.keyCode.ENTER:
                                return b.preventDefault(), clearTimeout(this.activating), void this._activate(d !== this.options.active && d);
                            default:
                                return
                        }
                        b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                            this.option("active", d)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(b) {
                    this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(b) {
                    return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(b, c) {
                    function d() {
                        return b > e && (b = 0), 0 > b && (b = e), b
                    }
                    for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                    return b
                },
                _focusNextTab: function(a, b) {
                    return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
                },
                _setOption: function(a, b) {
                    return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
                },
                _sanitizeSelector: function(a) {
                    return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var b = this.options,
                        c = this.tablist.children(":has(a[href])");
                    b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                        return c.index(a)
                    }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1,
                        this.active = a()), this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var b = this,
                        c = this.tabs,
                        d = this.anchors,
                        e = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
                        a(this).is(".ui-state-disabled") && b.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        a(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }), this.anchors = this.tabs.map(function() {
                        return a("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = a(), this.anchors.each(function(c, d) {
                        var e, f, g, h = a(d).uniqueId().attr("id"),
                            i = a(d).closest("li"),
                            j = i.attr("aria-controls");
                        b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), i.attr({
                            "aria-controls": g,
                            "aria-labelledby": h
                        }), f.attr("aria-labelledby", h)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(b) {
                    return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(b) {
                    a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                    for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = b
                },
                _setupEvents: function(b) {
                    var c = {};
                    b && a.each(b.split(" "), function(a, b) {
                        c[b] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function(a) {
                            a.preventDefault()
                        }
                    }), this._on(this.anchors, c), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(b) {
                    var c, d = this.element.parent();
                    "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var b = a(this),
                            d = b.css("position");
                        "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        c -= a(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                    }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                        c = Math.max(c, a(this).height("").height())
                    }).height(c))
                },
                _eventHandler: function(b) {
                    var c = this.options,
                        d = this.active,
                        e = a(b.currentTarget),
                        f = e.closest("li"),
                        g = f[0] === d[0],
                        h = g && c.collapsible,
                        i = h ? a() : this._getPanelForTab(f),
                        j = d.length ? this._getPanelForTab(d) : a(),
                        k = {
                            oldTab: d,
                            oldPanel: j,
                            newTab: h ? a() : f,
                            newPanel: i
                        };
                    b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = !h && this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
                },
                _toggle: function(b, c) {
                    function d() {
                        f.running = !1, f._trigger("activate", b, c)
                    }

                    function e() {
                        c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                    }
                    var f = this,
                        g = c.newPanel,
                        h = c.oldPanel;
                    this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                        c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                    }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                        return 0 === a(this).attr("tabIndex")
                    }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(b) {
                    var c, d = this._findActive(b);
                    d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: c,
                        currentTarget: c,
                        preventDefault: a.noop
                    }))
                },
                _findActive: function(b) {
                    return b === !1 ? a() : this.tabs.eq(b)
                },
                _getIndex: function(a) {
                    return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                        a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    }), this.tabs.each(function() {
                        var b = a(this),
                            c = b.data("ui-tabs-aria-controls");
                        c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(b) {
                    var c = this.options.disabled;
                    c !== !1 && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                        return a !== b ? a : null
                    }) : a.map(this.tabs, function(a, c) {
                        return c !== b ? c : null
                    })), this._setupDisabled(c))
                },
                disable: function(b) {
                    var c = this.options.disabled;
                    if (c !== !0) {
                        if (void 0 === b) c = !0;
                        else {
                            if (b = this._getIndex(b), -1 !== a.inArray(b, c)) return;
                            c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                        }
                        this._setupDisabled(c)
                    }
                },
                load: function(b, c) {
                    b = this._getIndex(b);
                    var d = this,
                        e = this.tabs.eq(b),
                        f = e.find(".ui-tabs-anchor"),
                        g = this._getPanelForTab(e),
                        h = {
                            tab: e,
                            panel: g
                        };
                    this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.success(function(a) {
                        setTimeout(function() {
                            g.html(a), d._trigger("load", c, h)
                        }, 1)
                    }).complete(function(a, b) {
                        setTimeout(function() {
                            "abort" === b && d.panels.stop(!1, !0), e.removeClass("ui-tabs-loading"), g.removeAttr("aria-busy"), a === d.xhr && delete d.xhr
                        }, 1)
                    })))
                },
                _ajaxSettings: function(b, c, d) {
                    var e = this;
                    return {
                        url: b.attr("href"),
                        beforeSend: function(b, f) {
                            return e._trigger("beforeLoad", c, a.extend({
                                jqXHR: b,
                                ajaxSettings: f
                            }, d))
                        }
                    }
                },
                _getPanelForTab: function(b) {
                    var c = a(b).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + c))
                }
            }), a.widget("ui.tooltip", {
                version: "1.11.2",
                options: {
                    content: function() {
                        var b = a(this).attr("title") || "";
                        return a("<a>").text(b).html()
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
                _addDescribedBy: function(b, c) {
                    var d = (b.attr("aria-describedby") || "").split(/\s+/);
                    d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
                },
                _removeDescribedBy: function(b) {
                    var c = b.data("ui-tooltip-id"),
                        d = (b.attr("aria-describedby") || "").split(/\s+/),
                        e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = a("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                },
                _setOption: function(b, c) {
                    var d = this;
                    return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function(a, b) {
                        d._updateContent(b.element)
                    })))
                },
                _disable: function() {
                    var b = this;
                    a.each(this.tooltips, function(c, d) {
                        var e = a.Event("blur");
                        e.target = e.currentTarget = d.element[0], b.close(e, !0)
                    }), this.element.find(this.options.items).addBack().each(function() {
                        var b = a(this);
                        b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var b = a(this);
                        b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                    })
                },
                open: function(b) {
                    var c = this,
                        d = a(b ? b.target : this.element).closest(this.options.items);
                    d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                        var b, d = a(this);
                        d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                            element: this,
                            title: d.attr("title")
                        }, d.attr("title", ""))
                    }), this._updateContent(d, b))
                },
                _updateContent: function(a, b) {
                    var c, d = this.options.content,
                        e = this,
                        f = b ? b.type : null;
                    return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
                        a.data("ui-tooltip-open") && e._delay(function() {
                            b && (b.type = f), this._open(b, a, c)
                        })
                    }), void(c && this._open(b, a, c)))
                },
                _open: function(b, c, d) {
                    function e(a) {
                        k.of = a, g.is(":hidden") || g.position(k)
                    }
                    var f, g, h, i, j, k = a.extend({}, this.options.position);
                    if (d) {
                        if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
                        c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), d.clone ? (j = d.clone(), j.removeAttr("id").find("[id]").removeAttr("id")) : j = d, a("<div>").html(j).appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
                            mousemove: e
                        }), e(b)) : g.position(a.extend({
                            of: c
                        }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function() {
                            g.is(":visible") && (e(k.of), clearInterval(i))
                        }, a.fx.interval)), this._trigger("open", b, {
                            tooltip: g
                        }), h = {
                            keyup: function(b) {
                                if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                    var d = a.Event(b);
                                    d.currentTarget = c[0], this.close(d, !0)
                                }
                            }
                        }, c[0] !== this.element[0] && (h.remove = function() {
                            this._removeTooltip(g)
                        }), b && "mouseover" !== b.type || (h.mouseleave = "close"), b && "focusin" !== b.type || (h.focusout = "close"), this._on(!0, c, h)
                    }
                },
                close: function(b) {
                    var c, d = this,
                        e = a(b ? b.currentTarget : this.element),
                        f = this._find(e);
                    f && (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
                        d._removeTooltip(a(this))
                    }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                        a(c.element).attr("title", c.title), delete d.parents[b]
                    }), f.closing = !0, this._trigger("close", b, {
                        tooltip: c
                    }), f.hiding || (f.closing = !1)))
                },
                _tooltip: function(b) {
                    var c = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        d = c.uniqueId().attr("id");
                    return a("<div>").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), this.tooltips[d] = {
                        element: b,
                        tooltip: c
                    }
                },
                _find: function(a) {
                    var b = a.data("ui-tooltip-id");
                    return b ? this.tooltips[b] : null
                },
                _removeTooltip: function(a) {
                    a.remove(), delete this.tooltips[a.attr("id")]
                },
                _destroy: function() {
                    var b = this;
                    a.each(this.tooltips, function(c, d) {
                        var e = a.Event("blur"),
                            f = d.element;
                        e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            })
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }

    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList" in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }, e = function(a, b) {
        a.classList.add(b)
    }, f = function(a, b) {
        a.classList.remove(b)
    }) : (d = function(a, c) {
        return b(c).test(a.className)
    }, e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }, f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    "function" == typeof define && define.amd ? define(g) : a.classie = g
}(window),
function(a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}(this, function() {
    function a() {}
    var b = a.prototype;
    return b.on = function(a, b) {
        if (a && b) {
            var c = this._events = this._events || {},
                d = c[a] = c[a] || [];
            return d.indexOf(b) == -1 && d.push(b), this
        }
    }, b.once = function(a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {},
                d = c[a] = c[a] || [];
            return d[b] = !0, this
        }
    }, b.off = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return d != -1 && c.splice(d, 1), this
        }
    }, b.emitEvent = function(a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0,
                e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, a
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
}(window, function(a, b) {
    function c(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function d(a) {
        var b = [];
        if (Array.isArray(a)) b = a;
        else if ("number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a);
        return b
    }

    function e(a, b, f) {
        return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new e(a, b, f)
    }

    function f(a) {
        this.img = a
    }

    function g(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }
    var h = a.jQuery,
        i = a.console;
    e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, e.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && j[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var j = {
        1: !0,
        9: !0,
        11: !0
    };
    return e.prototype.addElementBackgroundImages = function(a) {
        var b = getComputedStyle(a);
        if (b)
            for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[2];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
    }, e.prototype.addImage = function(a) {
        var b = new f(a);
        this.images.push(b)
    }, e.prototype.addBackground = function(a, b) {
        var c = new g(a, b);
        this.images.push(c)
    }, e.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }
        var b = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) {
            b.once("progress", a), b.check()
        }) : void this.complete()
    }, e.prototype.progress = function(a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
    }, e.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, f.prototype = Object.create(b.prototype), f.prototype.check = function() {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, f.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, f.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
    }, f.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, f.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, f.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, f.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype = Object.create(f.prototype), g.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, g.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
    }, e.makeJQueryPlugin = function(b) {
        b = b || a.jQuery, b && (h = b, h.fn.imagesLoaded = function(a, b) {
            var c = new e(this, a, b);
            return c.jqDeferred.promise(h(this))
        })
    }, e.makeJQueryPlugin(), e
}), ! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    }),
    function(a, b, c, d) {
        "use strict";
        var e = c("html"),
            f = c(a),
            g = c(b),
            h = c.fancybox = function() {
                h.open.apply(this, arguments)
            },
            i = navigator.userAgent.match(/msie/i),
            j = null,
            k = b.createTouch !== d,
            l = function(a) {
                return a && a.hasOwnProperty && a instanceof c
            },
            m = function(a) {
                return a && "string" === c.type(a)
            },
            n = function(a) {
                return m(a) && a.indexOf("%") > 0
            },
            o = function(a) {
                return a && !(a.style.overflow && "hidden" === a.style.overflow) && (a.clientWidth && a.scrollWidth > a.clientWidth || a.clientHeight && a.scrollHeight > a.clientHeight)
            },
            p = function(a, b) {
                var c = parseInt(a, 10) || 0;
                return b && n(a) && (c = h.getViewport()[b] / 100 * c), Math.ceil(c)
            },
            q = function(a, b) {
                return p(a, b) + "px"
            };
        c.extend(h, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !k,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                    loading: '<div id="fancybox-loading"><div></div></div>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: c.noop,
                beforeLoad: c.noop,
                afterLoad: c.noop,
                beforeShow: c.noop,
                afterShow: c.noop,
                beforeChange: c.noop,
                beforeClose: c.noop,
                afterClose: c.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(a, b) {
                if (a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0))) return c.isArray(a) || (a = l(a) ? c(a).get() : [a]), c.each(a, function(e, f) {
                    var g, i, j, k, n, o, p, q = {};
                    "object" === c.type(f) && (f.nodeType && (f = c(f)), l(f) ? (q = {
                        href: f.data("fancybox-href") || f.attr("href"),
                        title: c("<div/>").text(f.data("fancybox-title") || f.attr("title") || "").html(),
                        isDom: !0,
                        element: f
                    }, c.metadata && c.extend(!0, q, f.metadata())) : q = f), g = b.href || q.href || (m(f) ? f : null), i = b.title !== d ? b.title : q.title || "", j = b.content || q.content, k = j ? "html" : b.type || q.type, !k && q.isDom && (k = f.data("fancybox-type"), k || (n = f.prop("class").match(/fancybox\.(\w+)/), k = n ? n[1] : null)), m(g) && (k || (h.isImage(g) ? k = "image" : h.isSWF(g) ? k = "swf" : "#" === g.charAt(0) ? k = "inline" : m(f) && (k = "html", j = f)), "ajax" === k && (o = g.split(/\s+/, 2), g = o.shift(), p = o.shift())), j || ("inline" === k ? g ? j = c(m(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : q.isDom && (j = f) : "html" === k ? j = g : k || g || !q.isDom || (k = "inline", j = f)), c.extend(q, {
                        href: g,
                        type: k,
                        content: j,
                        title: i,
                        selector: p
                    }), a[e] = q
                }), h.opts = c.extend(!0, {}, h.defaults, b), b.keys !== d && (h.opts.keys = !!b.keys && c.extend({}, h.defaults.keys, b.keys)), h.group = a, h._start(h.opts.index)
            },
            cancel: function() {
                var a = h.coming;
                a && !1 === h.trigger("onCancel") || (h.hideLoading(), a && (h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a)))
            },
            close: function(a) {
                h.cancel(), !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && a !== !0 ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut())))
            },
            play: function(a) {
                var b = function() {
                        clearTimeout(h.player.timer)
                    },
                    c = function() {
                        b(), h.current && h.player.isActive && (h.player.timer = setTimeout(h.next, h.current.playSpeed))
                    },
                    d = function() {
                        b(), g.unbind(".player"), h.player.isActive = !1, h.trigger("onPlayEnd")
                    },
                    e = function() {
                        h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, g.bind({
                            "onCancel.player beforeClose.player": d,
                            "onUpdate.player": c,
                            "beforeLoad.player": b
                        }), c(), h.trigger("onPlayStart"))
                    };
                a === !0 || !h.player.isActive && a !== !1 ? e() : d()
            },
            next: function(a) {
                var b = h.current;
                b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
            },
            prev: function(a) {
                var b = h.current;
                b && (m(a) || (a = b.direction.prev), h.jumpto(b.index - 1, a, "prev"))
            },
            jumpto: function(a, b, c) {
                var e = h.current;
                e && (a = p(a), h.direction = b || e.direction[a >= e.index ? "next" : "prev"], h.router = c || "jumpto", e.loop && (a < 0 && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (h.cancel(), h._start(a)))
            },
            reposition: function(a, b) {
                var d, e = h.current,
                    f = e ? e.wrap : null;
                f && (d = h._getPosition(b), a && "scroll" === a.type ? (delete d.position, f.stop(!0, !0).animate(d, 200)) : (f.css(d), e.pos = c.extend({}, e.dim, d)))
            },
            update: function(a) {
                var b = a && a.originalEvent && a.originalEvent.type,
                    c = !b || "orientationchange" === b;
                c && (clearTimeout(j), j = null), h.isOpen && !j && (j = setTimeout(function() {
                    var d = h.current;
                    d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), j = null)
                }, c && !k ? 0 : 300))
            },
            toggle: function(a) {
                h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a : !h.current.fitToView, k && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update())
            },
            hideLoading: function() {
                g.unbind(".loading"), c("#fancybox-loading").remove()
            },
            showLoading: function() {
                var a, b;
                h.hideLoading(), a = c(h.opts.tpl.loading).click(h.cancel).appendTo("body"), g.bind("keydown.loading", function(a) {
                    27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel())
                }), h.defaults.fixed || (b = h.getViewport(), a.css({
                    position: "absolute",
                    top: .5 * b.h + b.y,
                    left: .5 * b.w + b.x
                })), h.trigger("onLoading")
            },
            getViewport: function() {
                var b = h.current && h.current.locked || !1,
                    c = {
                        x: f.scrollLeft(),
                        y: f.scrollTop()
                    };
                return b && b.length ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = k && a.innerWidth ? a.innerWidth : f.width(), c.h = k && a.innerHeight ? a.innerHeight : f.height()), c
            },
            unbindEvents: function() {
                h.wrap && l(h.wrap) && h.wrap.unbind(".fb"), g.unbind(".fb"), f.unbind(".fb")
            },
            bindEvents: function() {
                var a, b = h.current;
                b && (f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), h.update), a = b.keys, a && g.bind("keydown.fb", function(e) {
                    var f = e.which || e.keyCode,
                        g = e.target || e.srcElement;
                    return (27 !== f || !h.coming) && void(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || g && (g.type || c(g).is("[contenteditable]")) || c.each(a, function(a, g) {
                        return b.group.length > 1 && g[f] !== d ? (h[a](g[f]), e.preventDefault(), !1) : c.inArray(f, g) > -1 ? (h[a](), e.preventDefault(), !1) : void 0
                    }))
                }), c.fn.mousewheel && b.mouseWheel && h.wrap.bind("mousewheel.fb", function(a, d, e, f) {
                    for (var g = a.target || null, i = c(g), j = !1; i.length && !(j || i.is(".fancybox-skin") || i.is(".fancybox-wrap"));) j = o(i[0]), i = c(i).parent();
                    0 === d || j || h.group.length > 1 && !b.canShrink && (f > 0 || e > 0 ? h.prev(f > 0 ? "down" : "left") : (f < 0 || e < 0) && h.next(f < 0 ? "up" : "right"), a.preventDefault())
                }))
            },
            trigger: function(a, b) {
                var d, e = b || h.coming || h.current;
                if (e) {
                    if (c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), d === !1) return !1;
                    e.helpers && c.each(e.helpers, function(b, d) {
                        d && h.helpers[b] && c.isFunction(h.helpers[b][a]) && h.helpers[b][a](c.extend(!0, {}, h.helpers[b].defaults, d), e)
                    })
                }
                g.trigger(a)
            },
            isImage: function(a) {
                return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(a) {
                return m(a) && a.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(a) {
                var b, d, e, f, g, i = {};
                if (a = p(a), b = h.group[a] || null, !b) return !1;
                if (i = c.extend(!0, {}, h.opts, b), f = i.margin, g = i.padding, "number" === c.type(f) && (i.margin = [f, f, f, f]), "number" === c.type(g) && (i.padding = [g, g, g, g]), i.modal && c.extend(!0, i, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), i.autoSize && (i.autoWidth = i.autoHeight = !0), "auto" === i.width && (i.autoWidth = !0), "auto" === i.height && (i.autoHeight = !0), i.group = h.group, i.index = a, h.coming = i, !1 === h.trigger("beforeLoad")) return void(h.coming = null);
                if (e = i.type, d = i.href, !e) return h.coming = null, !(!h.current || !h.router || "jumpto" === h.router) && (h.current.index = a, h[h.router](h.direction));
                if (h.isActive = !0, "image" !== e && "swf" !== e || (i.autoHeight = i.autoWidth = !1, i.scrolling = "visible"), "image" === e && (i.aspectRatio = !0), "iframe" === e && k && (i.scrolling = "scroll"), i.wrap = c(i.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body"), c.extend(i, {
                        skin: c(".fancybox-skin", i.wrap),
                        outer: c(".fancybox-outer", i.wrap),
                        inner: c(".fancybox-inner", i.wrap)
                    }), c.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                        i.skin.css("padding" + b, q(i.padding[a]))
                    }), h.trigger("onReady"), "inline" === e || "html" === e) {
                    if (!i.content || !i.content.length) return h._error("content")
                } else if (!d) return h._error("href");
                "image" === e ? h._loadImage() : "ajax" === e ? h._loadAjax() : "iframe" === e ? h._loadIframe() : h._afterLoad()
            },
            _error: function(a) {
                c.extend(h.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: a,
                    content: h.coming.tpl.error
                }), h._afterLoad()
            },
            _loadImage: function() {
                var a = h.imgPreload = new Image;
                a.onload = function() {
                    this.onload = this.onerror = null, h.coming.width = this.width / h.opts.pixelRatio, h.coming.height = this.height / h.opts.pixelRatio, h._afterLoad()
                }, a.onerror = function() {
                    this.onload = this.onerror = null, h._error("image")
                }, a.src = h.coming.href, a.complete !== !0 && h.showLoading()
            },
            _loadAjax: function() {
                var a = h.coming;
                h.showLoading(), h.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                    url: a.href,
                    error: function(a, b) {
                        h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading()
                    },
                    success: function(b, c) {
                        "success" === c && (a.content = b, h._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var a = h.coming,
                    b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", k ? "auto" : a.iframe.scrolling).attr("src", a.href);
                c(a.wrap).bind("onReset", function() {
                    try {
                        c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (a) {}
                }), a.iframe.preload && (h.showLoading(), b.one("load", function() {
                    c(this).data("ready", 1), k || c(this).bind("load.fb", h.update), c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), h._afterLoad()
                })), a.content = b.appendTo(a.inner), a.iframe.preload || h._afterLoad()
            },
            _preloadImages: function() {
                var a, b, c = h.group,
                    d = h.current,
                    e = c.length,
                    f = d.preload ? Math.min(d.preload, e - 1) : 0;
                for (b = 1; b <= f; b += 1) a = c[(d.index + b) % e], "image" === a.type && a.href && ((new Image).src = a.href)
            },
            _afterLoad: function() {
                var a, b, d, e, f, g, i = h.coming,
                    j = h.current,
                    k = "fancybox-placeholder";
                if (h.hideLoading(), i && h.isActive !== !1) {
                    if (!1 === h.trigger("afterLoad", i, j)) return i.wrap.stop(!0).trigger("onReset").remove(), void(h.coming = null);
                    switch (j && (h.trigger("beforeChange", j), j.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), h.unbindEvents(), a = i, b = i.content, d = i.type, e = i.scrolling, c.extend(h, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: j
                    }), f = a.href, d) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? b = c("<div>").html(b).find(a.selector) : l(b) && (b.data(k) || b.data(k, c('<div class="' + k + '"></div>').insertAfter(b).hide()), b = b.show().detach(), a.wrap.bind("onReset", function() {
                                c(this).find(b).length && b.hide().replaceAll(b.data(k)).data(k, !1)
                            }));
                            break;
                        case "image":
                            b = a.tpl.image.replace(/\{href\}/g, f);
                            break;
                        case "swf":
                            b = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + f + '"></param>', g = "", c.each(a.swf, function(a, c) {
                                b += '<param name="' + a + '" value="' + c + '"></param>', g += " " + a + '="' + c + '"'
                            }), b += '<embed src="' + f + '" type="application/x-shockwave-flash" width="100%" height="100%"' + g + "></embed></object>"
                    }
                    l(b) && b.parent().is(a.inner) || a.inner.append(b), h.trigger("beforeShow"), a.inner.css("overflow", "yes" === e ? "scroll" : "no" === e ? "hidden" : e), h._setDimension(), h.reposition(), h.isOpen = !1, h.coming = null, h.bindEvents(), h.isOpened ? j.prevMethod && h.transitions[j.prevMethod]() : c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), h.transitions[h.isOpened ? a.nextMethod : a.openMethod](), h._preloadImages()
                }
            },
            _setDimension: function() {
                var a, b, d, e, f, g, i, j, k, l, m, o, r, s, t, u = h.getViewport(),
                    v = 0,
                    w = !1,
                    x = !1,
                    y = h.wrap,
                    z = h.skin,
                    A = h.inner,
                    B = h.current,
                    C = B.width,
                    D = B.height,
                    E = B.minWidth,
                    F = B.minHeight,
                    G = B.maxWidth,
                    H = B.maxHeight,
                    I = B.scrolling,
                    J = B.scrollOutside ? B.scrollbarWidth : 0,
                    K = B.margin,
                    L = p(K[1] + K[3]),
                    M = p(K[0] + K[2]);
                if (y.add(z).add(A).width("auto").height("auto").removeClass("fancybox-tmp"), a = p(z.outerWidth(!0) - z.width()), b = p(z.outerHeight(!0) - z.height()), d = L + a, e = M + b, f = n(C) ? (u.w - d) * p(C) / 100 : C, g = n(D) ? (u.h - e) * p(D) / 100 : D, "iframe" === B.type) {
                    if (s = B.content, B.autoHeight && 1 === s.data("ready")) try {
                        s[0].contentWindow.document.location && (A.width(f).height(9999), t = s.contents().find("body"), J && t.css("overflow-x", "hidden"), g = t.outerHeight(!0))
                    } catch (N) {}
                } else(B.autoWidth || B.autoHeight) && (A.addClass("fancybox-tmp"), B.autoWidth || A.width(f), B.autoHeight || A.height(g), B.autoWidth && (f = A.width()), B.autoHeight && (g = A.height()), A.removeClass("fancybox-tmp"));
                if (C = p(f), D = p(g), k = f / g, E = p(n(E) ? p(E, "w") - d : E), G = p(n(G) ? p(G, "w") - d : G), F = p(n(F) ? p(F, "h") - e : F), H = p(n(H) ? p(H, "h") - e : H), i = G, j = H, B.fitToView && (G = Math.min(u.w - d, G), H = Math.min(u.h - e, H)), o = u.w - L, r = u.h - M, B.aspectRatio ? (C > G && (C = G, D = p(C / k)), D > H && (D = H, C = p(D * k)), C < E && (C = E, D = p(C / k)), D < F && (D = F, C = p(D * k))) : (C = Math.max(E, Math.min(C, G)), B.autoHeight && "iframe" !== B.type && (A.width(C), D = A.height()), D = Math.max(F, Math.min(D, H))), B.fitToView)
                    if (A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height(), B.aspectRatio)
                        for (;
                            (l > o || m > r) && C > E && D > F && !(v++ > 19);) D = Math.max(F, Math.min(H, D - 10)), C = p(D * k), C < E && (C = E, D = p(C / k)), C > G && (C = G, D = p(C / k)), A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height();
                    else C = Math.max(E, Math.min(C, C - (l - o))), D = Math.max(F, Math.min(D, D - (m - r)));
                J && "auto" === I && D < g && C + a + J < o && (C += J), A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height(), w = (l > o || m > r) && C > E && D > F, x = B.aspectRatio ? C < i && D < j && C < f && D < g : (C < i || D < j) && (C < f || D < g), c.extend(B, {
                    dim: {
                        width: q(l),
                        height: q(m)
                    },
                    origWidth: f,
                    origHeight: g,
                    canShrink: w,
                    canExpand: x,
                    wPadding: a,
                    hPadding: b,
                    wrapSpace: m - z.outerHeight(!0),
                    skinSpace: z.height() - D
                }), !s && B.autoHeight && D > F && D < H && !x && A.height("auto")
            },
            _getPosition: function(a) {
                var b = h.current,
                    c = h.getViewport(),
                    d = b.margin,
                    e = h.wrap.width() + d[1] + d[3],
                    f = h.wrap.height() + d[0] + d[2],
                    g = {
                        position: "absolute",
                        top: d[0],
                        left: d[3]
                    };
                return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? g.position = "fixed" : b.locked || (g.top += c.y, g.left += c.x), g.top = q(Math.max(g.top, g.top + (c.h - f) * b.topRatio)), g.left = q(Math.max(g.left, g.left + (c.w - e) * b.leftRatio)), g
            },
            _afterZoomIn: function() {
                var a = h.current;
                a && (h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), h.update(), (a.closeClick || a.nextClick && h.group.length > 1) && h.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                    c(b.target).is("a") || c(b.target).parent().is("a") || (b.preventDefault(), h[a.closeClick ? "close" : "next"]())
                }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) {
                    a.preventDefault(), h.close()
                }), a.arrows && h.group.length > 1 && ((a.loop || a.index > 0) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)), h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play(!0)) : h.play(!1))
            },
            _afterZoomOut: function(a) {
                a = a || h.current, c(".fancybox-wrap").trigger("onReset").remove(), c.extend(h, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), h.trigger("afterClose", a)
            }
        }), h.transitions = {
            getOrigPosition: function() {
                var a = h.current,
                    b = a.element,
                    c = a.orig,
                    d = {},
                    e = 50,
                    f = 50,
                    g = a.hPadding,
                    i = a.wPadding,
                    j = h.getViewport();
                return !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)), l(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = j.y + (j.h - f) * a.topRatio, d.left = j.x + (j.w - e) * a.leftRatio), ("fixed" === h.wrap.css("position") || a.locked) && (d.top -= j.y, d.left -= j.x), d = {
                    top: q(d.top - g * a.topRatio),
                    left: q(d.left - i * a.leftRatio),
                    width: q(e + i),
                    height: q(f + g)
                }
            },
            step: function(a, b) {
                var c, d, e, f = b.prop,
                    g = h.current,
                    i = g.wrapSpace,
                    j = g.skinSpace;
                "width" !== f && "height" !== f || (c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), h.isClosing && (c = 1 - c), d = "width" === f ? g.wPadding : g.hPadding, e = a - d, h.skin[f](p("width" === f ? e : e - i * c)), h.inner[f](p("width" === f ? e : e - i * c - j * c)))
            },
            zoomIn: function() {
                var a = h.current,
                    b = a.pos,
                    d = a.openEffect,
                    e = "elastic" === d,
                    f = c.extend({
                        opacity: 1
                    }, b);
                delete f.position, e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1), h.wrap.css(b).animate(f, {
                    duration: "none" === d ? 0 : a.openSpeed,
                    easing: a.openEasing,
                    step: e ? this.step : null,
                    complete: h._afterZoomIn
                })
            },
            zoomOut: function() {
                var a = h.current,
                    b = a.closeEffect,
                    c = "elastic" === b,
                    d = {
                        opacity: .1
                    };
                c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)), h.wrap.animate(d, {
                    duration: "none" === b ? 0 : a.closeSpeed,
                    easing: a.closeEasing,
                    step: c ? this.step : null,
                    complete: h._afterZoomOut
                })
            },
            changeIn: function() {
                var a, b = h.current,
                    c = b.nextEffect,
                    d = b.pos,
                    e = {
                        opacity: 1
                    },
                    f = h.direction,
                    g = 200;
                d.opacity = .1, "elastic" === c && (a = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (d[a] = q(p(d[a]) - g), e[a] = "+=" + g + "px") : (d[a] = q(p(d[a]) + g), e[a] = "-=" + g + "px")), "none" === c ? h._afterZoomIn() : h.wrap.css(d).animate(e, {
                    duration: b.nextSpeed,
                    easing: b.nextEasing,
                    complete: h._afterZoomIn
                })
            },
            changeOut: function() {
                var a = h.previous,
                    b = a.prevEffect,
                    d = {
                        opacity: .1
                    },
                    e = h.direction,
                    f = 200;
                "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=" + f + "px"), a.wrap.animate(d, {
                    duration: "none" === b ? 0 : a.prevSpeed,
                    easing: a.prevEasing,
                    complete: function() {
                        c(this).trigger("onReset").remove()
                    }
                })
            }
        }, h.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !k,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: c("html"),
            create: function(a) {
                var b;
                a = c.extend({}, this.defaults, a), this.overlay && this.close(), b = h.coming ? h.coming.parent : a.parent, this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(b && b.length ? b : "body"), this.fixed = !1, a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(a) {
                var b = this;
                a = c.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), this.fixed || (f.bind("resize.overlay", c.proxy(this.update, this)), this.update()), a.closeClick && this.overlay.bind("click.overlay", function(a) {
                    if (c(a.target).hasClass("fancybox-overlay")) return h.isActive ? h.close() : b.close(), !1
                }), this.overlay.css(a.css).show()
            },
            close: function() {
                f.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), f.scrollTop(this.scrollV).scrollLeft(this.scrollH)), c(".fancybox-overlay").remove().hide(), c.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var a, c = "100%";
                this.overlay.width(c).height("100%"), i ? (a = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), g.width() > a && (c = g.width())) : g.width() > f.width() && (c = g.width()), this.overlay.width(c).height(g.height())
            },
            onReady: function(a, b) {
                var d = this.overlay;
                c(".fancybox-overlay").stop(!0, !0), d || this.create(a), a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1), a.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(a, b) {
                b.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && c("*:not(object)").filter(function() {
                    return "fixed" === c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = f.scrollTop(), this.scrollH = f.scrollLeft(), this.el.addClass("fancybox-lock"), f.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(a)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(a) {
                this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
            }
        }, h.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(a) {
                var b, d, e = h.current,
                    f = e.title,
                    g = a.type;
                if (c.isFunction(f) && (f = f.call(e.element, e)), m(f) && "" !== c.trim(f)) {
                    switch (b = c('<div class="fancybox-title fancybox-title-' + g + '-wrap">' + f + "</div>"), g) {
                        case "inside":
                            d = h.skin;
                            break;
                        case "outside":
                            d = h.wrap;
                            break;
                        case "over":
                            d = h.inner;
                            break;
                        default:
                            d = h.skin, b.appendTo("body"), i && b.width(b.width()), b.wrapInner('<span class="child"></span>'), h.current.margin[2] += Math.abs(p(b.css("margin-bottom")))
                    }
                    b["top" === a.position ? "prependTo" : "appendTo"](d)
                }
            }
        }, c.fn.fancybox = function(a) {
            var b, d = c(this),
                e = this.selector || "",
                f = function(f) {
                    var g, i, j = c(this).blur(),
                        k = b;
                    f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || j.is(".fancybox-wrap") || (g = a.groupAttr || "data-fancybox-group", i = j.attr(g), i || (g = "rel", i = j.get(0)[g]), i && "" !== i && "nofollow" !== i && (j = e.length ? c(e) : d, j = j.filter("[" + g + '="' + i + '"]'), k = j.index(this)), a.index = k, h.open(j, a) !== !1 && f.preventDefault())
                };
            return a = a || {}, b = a.index || 0, e && a.live !== !1 ? g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f) : d.unbind("click.fb-start").bind("click.fb-start", f), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, g.ready(function() {
            var b, f;
            c.scrollbarWidth === d && (c.scrollbarWidth = function() {
                var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    b = a.children(),
                    d = b.innerWidth() - b.height(99).innerWidth();
                return a.remove(), d
            }), c.support.fixedPosition === d && (c.support.fixedPosition = function() {
                var a = c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
                return a.remove(), b
            }()), c.extend(h.defaults, {
                scrollbarWidth: c.scrollbarWidth(),
                fixed: c.support.fixedPosition,
                parent: c("body")
            }), b = c(a).width(), e.addClass("fancybox-lock-test"), f = c(a).width(), e.removeClass("fancybox-lock-test"), c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery),
    function(a) {
        a.fn.extend({
            slimScroll: function(b) {
                var c = a.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, b);
                return this.each(function() {
                    function d(b) {
                        if (i) {
                            b = b || window.event;
                            var d = 0;
                            b.wheelDelta && (d = -b.wheelDelta / 120), b.detail && (d = b.detail / 3), a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(r.parent()) && e(d, !0), b.preventDefault && !q && b.preventDefault(), q || (b.returnValue = !1)
                        }
                    }

                    function e(a, b, d) {
                        q = !1;
                        var e = a,
                            f = r.outerHeight() - u.outerHeight();
                        b && (e = parseInt(u.css("top")) + a * parseInt(c.wheelStep) / 100 * u.outerHeight(), e = Math.min(Math.max(e, 0), f), e = 0 < a ? Math.ceil(e) : Math.floor(e), u.css({
                            top: e + "px"
                        })), o = parseInt(u.css("top")) / (r.outerHeight() - u.outerHeight()), e = o * (r[0].scrollHeight - r.outerHeight()), d && (e = a, a = e / r[0].scrollHeight * r.outerHeight(), a = Math.min(Math.max(a, 0), f), u.css({
                            top: a + "px"
                        })), r.scrollTop(e), r.trigger("slimscrolling", ~~e), g(), h()
                    }

                    function f() {
                        n = Math.max(r.outerHeight() / r[0].scrollHeight * r.outerHeight(), 30), u.css({
                            height: n + "px"
                        });
                        var a = n == r.outerHeight() ? "none" : "block";
                        u.css({
                            display: a
                        })
                    }

                    function g() {
                        f(), clearTimeout(l), o == ~~o ? (q = c.allowPageScroll, p != o && r.trigger("slimscroll", 0 == ~~o ? "top" : "bottom")) : q = !1, p = o, n >= r.outerHeight() ? q = !0 : (u.stop(!0, !0).fadeIn("fast"), c.railVisible && v.stop(!0, !0).fadeIn("fast"))
                    }

                    function h() {
                        c.alwaysVisible || (l = setTimeout(function() {
                            c.disableFadeOut && i || j || k || (u.fadeOut("slow"), v.fadeOut("slow"))
                        }, 1e3))
                    }
                    var i, j, k, l, m, n, o, p, q = !1,
                        r = a(this);
                    if (r.parent().hasClass(c.wrapperClass)) {
                        var s = r.scrollTop(),
                            u = r.closest("." + c.barClass),
                            v = r.closest("." + c.railClass);
                        if (f(), a.isPlainObject(b)) {
                            if ("height" in b && "auto" == b.height) {
                                r.parent().css("height", "auto"), r.css("height", "auto");
                                var w = r.parent().parent().height();
                                r.parent().css("height", w), r.css("height", w)
                            }
                            if ("scrollTo" in b) s = parseInt(c.scrollTo);
                            else if ("scrollBy" in b) s += parseInt(c.scrollBy);
                            else if ("destroy" in b) return u.remove(), v.remove(), void r.unwrap();
                            e(s, !1, !0)
                        }
                    } else if (!(a.isPlainObject(b) && "destroy" in b)) {
                        c.height = "auto" == c.height ? r.parent().height() : c.height, s = a("<div></div>").addClass(c.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: c.width,
                            height: c.height
                        }), r.css({
                            overflow: "hidden",
                            width: c.width,
                            height: c.height
                        });
                        var v = a("<div></div>").addClass(c.railClass).css({
                                width: c.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: c.alwaysVisible && c.railVisible ? "block" : "none",
                                "border-radius": c.railBorderRadius,
                                background: c.railColor,
                                opacity: c.railOpacity,
                                zIndex: 90
                            }),
                            u = a("<div></div>").addClass(c.barClass).css({
                                background: c.color,
                                width: c.size,
                                position: "absolute",
                                top: 0,
                                opacity: c.opacity,
                                display: c.alwaysVisible ? "block" : "none",
                                "border-radius": c.borderRadius,
                                BorderRadius: c.borderRadius,
                                MozBorderRadius: c.borderRadius,
                                WebkitBorderRadius: c.borderRadius,
                                zIndex: 99
                            }),
                            w = "right" == c.position ? {
                                right: c.distance
                            } : {
                                left: c.distance
                            };
                        v.css(w), u.css(w), r.wrap(s), r.parent().append(u), r.parent().append(v), c.railDraggable && u.bind("mousedown", function(b) {
                            var c = a(document);
                            return k = !0, t = parseFloat(u.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
                                currTop = t + a.pageY - pageY, u.css("top", currTop), e(0, u.position().top, !1)
                            }), c.bind("mouseup.slimscroll", function(a) {
                                k = !1, h(), c.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function(a) {
                            return a.stopPropagation(), a.preventDefault(), !1
                        }), v.hover(function() {
                            g()
                        }, function() {
                            h()
                        }), u.hover(function() {
                            j = !0
                        }, function() {
                            j = !1
                        }), r.hover(function() {
                            i = !0, g(), h()
                        }, function() {
                            i = !1, h()
                        }), r.bind("touchstart", function(a, b) {
                            a.originalEvent.touches.length && (m = a.originalEvent.touches[0].pageY)
                        }), r.bind("touchmove", function(a) {
                            q || a.originalEvent.preventDefault(), a.originalEvent.touches.length && (e((m - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), m = a.originalEvent.touches[0].pageY)
                        }), f(), "bottom" === c.start ? (u.css({
                            top: r.outerHeight() - u.outerHeight()
                        }), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || u.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
                    }
                }), this
            }
        }), a.fn.extend({
            slimscroll: a.fn.slimScroll
        })
    }(jQuery),
    function() {
        function a() {
            if (classie.has(c, "open")) {
                classie.remove(c, "open"), classie.add(c, "close");
                var a = function(b) {
                    if (support.transitions) {
                        if ("visibility" !== b.propertyName) return;
                        this.removeEventListener(transEndEventName, a)
                    }
                    classie.remove(c, "close")
                };
                support.transitions ? c.addEventListener(transEndEventName, a) : a()
            } else classie.has(c, "close") || classie.add(c, "open");
            $("#searchform input").focus()
        }
        var b = document.getElementById("trigger-overlay"),
            c = document.querySelector("div.overlay"),
            d = c.querySelector(".overlay-close");
        transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        }, transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], support = {
            transitions: Modernizr.csstransitions
        }, b.addEventListener("click", a), d.addEventListener("click", a), $(document).keyup(function(b) {
            classie.has(c, "open") && 27 == b.which && a()
        })
    }(), ! function(a, b, c, d) {
        function e(b, c) {
            this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
            }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function f(a) {
            if (a.touches !== d) return {
                x: a.touches[0].pageX,
                y: a.touches[0].pageY
            };
            if (a.touches === d) {
                if (a.pageX !== d) return {
                    x: a.pageX,
                    y: a.pageY
                };
                if (a.pageX === d) return {
                    x: a.clientX,
                    y: a.clientY
                }
            }
        }

        function g(a) {
            var b, d, e = c.createElement("div"),
                f = a;
            for (b in f)
                if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
            return [!1]
        }

        function h() {
            return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
        }

        function i() {
            return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
        }

        function j() {
            return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
        }

        function k() {
            return "ontouchstart" in b || !!navigator.msMaxTouchPoints
        }

        function l() {
            return b.navigator.msPointerEnabled
        }
        var m, n, o;
        m = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, n = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, o = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
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
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, e.Plugins = {}, e.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var a = this._clones,
                    b = this.$stage.children(".cloned");
                (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var a, b, c = this._clones,
                    d = this._items,
                    e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
                for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")));
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a, b, c, d = this.settings.rtl ? 1 : -1,
                    e = (this.width() / this.settings.items).toFixed(3),
                    f = 0;
                for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var b, c, d = (this.width() / this.settings.items).toFixed(3),
                    e = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(e), e = {
                        width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                    }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                        return a > 1
                    }).length > 0)
                    for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
                else this.$stage.children().css(e)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current && this.reset(this.$stage.children().index(a.current))
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
                for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], e.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
                var b, c, e;
                if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
            }
            this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                b >= a && a > d && (d = Number(a))
            }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
                return b.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, e.prototype.optionsLogic = function() {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
                content: c.data
            }), c.data
        }, e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {}
        }, e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, e.prototype.refresh = function() {
            return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
        }, e.prototype.eventsCall = function() {
            this.e._onDragStart = a.proxy(function(a) {
                this.onDragStart(a)
            }, this), this.e._onDragMove = a.proxy(function(a) {
                this.onDragMove(a)
            }, this), this.e._onDragEnd = a.proxy(function(a) {
                this.onDragEnd(a)
            }, this), this.e._onResize = a.proxy(function(a) {
                this.onResize(a)
            }, this), this.e._transitionEnd = a.proxy(function(a) {
                this.transitionEnd(a)
            }, this), this.e._preventClick = a.proxy(function(a) {
                this.preventClick(a)
            }, this)
        }, e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
        }, e.prototype.eventsRouter = function(a) {
            var b = a.type;
            "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
        }, e.prototype.internalEvents = function() {
            var c = (k(), l());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
                this.eventsRouter(a)
            }, this)), this.$stage.on("dragstart", function() {
                return !1
            }), this.$stage.get(0).onselectstart = function() {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
                this.eventsRouter(a)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
        }, e.prototype.onDragStart = function(d) {
            var e, g, h, i;
            if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
            if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
                this.eventsRouter(a)
            }, this))
        }, e.prototype.onDragMove = function(a) {
            var c, e, g, h, i, j;
            this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, e.prototype.onDragEnd = function(b) {
            var d, e, f;
            if (this.state.isTouch) {
                if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
            }
        }, e.prototype.removeClick = function(c) {
            this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
                a(c).off("click.preventClick")
            }, 300)
        }, e.prototype.preventClick = function(b) {
            b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
        }, e.prototype.getTransformProperty = function() {
            var a, c;
            return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
        }, e.prototype.closest = function(b) {
            var c = -1,
                d = 30,
                e = this.width(),
                f = this.coordinates();
            return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
                return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
            }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
        }, e.prototype.animate = function(b) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: b + "px"
            }) : this.$stage.animate({
                left: b
            }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
                this.state.inMotion && this.transitionEnd()
            }, this))
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
        }, e.prototype.invalidate = function(a) {
            this._invalidated[a] = !0
        }, e.prototype.reset = function(a) {
            a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
        }, e.prototype.normalize = function(b, c) {
            var e = c ? this._items.length : this._items.length + this._clones.length;
            return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
        }, e.prototype.relative = function(a) {
            return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
        }, e.prototype.maximum = function(a) {
            var b, c, d, e = 0,
                f = this.settings;
            if (a) return this._items.length - 1;
            if (!f.loop && f.center) b = this._items.length - 1;
            else if (f.loop || f.center)
                if (f.loop || f.center) b = this._items.length + f.items;
                else {
                    if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                    for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                        (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
                } else b = this._items.length - f.items;
            return b
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
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }, e.prototype.speed = function(a) {
            return a !== d && (this._speed = a), this._speed
        }, e.prototype.coordinates = function(b) {
            var c = null;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
        }, e.prototype.duration = function(a, b, c) {
            return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }, e.prototype.to = function(c, d) {
            if (this.settings.loop) {
                var e = c - this.relative(this.current()),
                    f = this.current(),
                    g = this.current(),
                    h = this.current() + e,
                    i = 0 > g - h,
                    j = this._clones.length + this._items.length;
                h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                    this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
        }, e.prototype.next = function(a) {
            a = a || !1, this.to(this.relative(this.current()) + 1, a)
        }, e.prototype.prev = function(a) {
            a = a || !1, this.to(this.relative(this.current()) - 1, a)
        }, e.prototype.transitionEnd = function(a) {
            return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
        }, e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }, e.prototype.replace = function(b) {
            this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, e.prototype.add = function(a, b) {
            b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
                content: a,
                position: b
            }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: a,
                position: b
            })
        }, e.prototype.remove = function(a) {
            a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: a
            }))
        }, e.prototype.addTriggerableEvents = function() {
            var b = a.proxy(function(b, c) {
                return a.proxy(function(a) {
                    a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, this)
            }, this);
            a.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, a.proxy(function(a, c) {
                this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
            }, this))
        }, e.prototype.watchVisibility = function() {
            function c(a) {
                return a.offsetWidth > 0 && a.offsetHeight > 0
            }

            function d() {
                c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
            }
            c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            var c, d, e, f;
            c = 0, d = this, b.each(function(g, h) {
                e = a(h), f = new Image, f.onload = function() {
                    c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
                }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
            })
        }, e.prototype.destroy = function() {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var d in this._plugins) this._plugins[d].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a
            }
        }, e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, e.prototype.trigger = function(b, c, d) {
            var e = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                f = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, e, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(g)
            }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
        }, e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }, e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }, e.prototype.browserSupport = function() {
            if (this.support3d = j(), this.support3d) {
                this.transformVendor = i();
                var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = b.orientation
        }, a.fn.owlCarousel = function(b) {
            return this.each(function() {
                a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
            })
        }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
        var c = function(b) {
            this._core = b, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                                this.load(b)
                            }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
                }, this)
            }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        c.Defaults = {
            lazyLoad: !1
        }, c.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                    f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this), e.src = g)
            }, this)), this._loaded.push(d.get(0)))
        }, c.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
    }(window.Zepto || window.jQuery, window, document),
    function(a) {
        var b = function(c) {
            this._core = c, this._handlers = {
                "initialized.owl.carousel": a.proxy(function() {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        b.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, b.prototype.update = function() {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, b.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
        var d = function(b) {
            this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": a.proxy(function(a) {
                    this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }, this)
            }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        d.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, d.prototype.fetch = function(a, b) {
            var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g) throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
            else {
                if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                c = "vimeo"
            }
            d = d[6], this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
        }, d.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function(a) {
                    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                };
            return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }))
        }, d.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, d.prototype.play = function(b) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var c, d, e = a(b.target || b.srcElement),
                f = e.closest("." + this._core.settings.itemClass),
                g = this._videos[f.attr("data-video")],
                h = g.width || "100%",
                i = g.height || this._core.$stage.height();
            "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
        }, d.prototype.isInFullScreen = function() {
            var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(d && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === b.orientation || (this._core.state.orientation = b.orientation, !1))
        }, d.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Video = d
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    this.swapping = "translated" == a.type
                }, this),
                "translate.owl.carousel": a.proxy(function() {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
        var d = function(b) {
            this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function() {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        d.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, d.prototype.autoplay = function() {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
        }, d.prototype.play = function() {
            return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
        }, d.prototype.stop = function() {
            b.clearInterval(this.interval)
        }, d.prototype.pause = function() {
            b.clearInterval(this.interval)
        }, d.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this.interval);
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
    }(window.Zepto || window.jQuery, window, document),
    function(a) {
        "use strict";
        var b = function(c) {
            this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": a.proxy(function(b) {
                    this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                    this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "change.owl.carousel": a.proxy(function(a) {
                    if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var b = this._core.current(),
                            c = this._core.maximum(),
                            d = this._core.minimum();
                        a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    "position" == a.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": a.proxy(function() {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        b.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, b.prototype.initialize = function() {
            var b, c, d = this._core.settings;
            d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
                var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(c, d.dotsSpeed)
            }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
                this.prev(d.navSpeed)
            }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
                this.next(d.navSpeed)
            }, this));
            for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
        }, b.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
            for (b in this._controls) this._controls[b].remove();
            for (d in this.overides) this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, b.prototype.update = function() {
            var a, b, c, d = this._core.settings,
                e = this._core.clones().length / 2,
                f = e + this._core.items().length,
                g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
            if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
                for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                    start: a - e,
                    end: a - e + g - 1
                }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
        }, b.prototype.draw = function() {
            var b, c, d = "",
                e = this._core.settings,
                f = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
                if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                    for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                    this._controls.$indicators.html(d)
                } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(e.dots)
        }, b.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
            }
        }, b.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, function(a) {
                return a.start <= b && a.end >= b
            }).pop()
        }, b.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
        }, b.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }, b.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }, b.prototype.to = function(b, c, d) {
            var e;
            d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
        "use strict";
        var c = function(d) {
            this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": a.proxy(function() {
                    "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[c] = b.content
                }, this)
            }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
                var a = b.location.hash.substring(1),
                    c = this._core.$stage.children(),
                    d = this._hashes[a] && c.index(this._hashes[a]) || 0;
                return !!a && void this._core.to(d, !1, !0)
            }, this))
        };
        c.Defaults = {
            URLhashListener: !1
        }, c.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
    }(window.Zepto || window.jQuery, window, document),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
            Y = {}.hasOwnProperty,
            Z = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) Y.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            $ = [].indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        for (u = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, C = function() {
                var a;
                return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
            }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
                return setTimeout(a, 50)
            }, t = function(a) {
                return clearTimeout(a)
            }), G = function(a) {
                var b, c;
                return b = C(), (c = function() {
                    var d;
                    return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                        return E(c)
                    })) : setTimeout(c, 33 - d)
                })()
            }, F = function() {
                var a, b, c;
                return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
            }, v = function() {
                var a, b, c, d, e, f, g;
                for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; f < g; f++)
                    if (c = d[f])
                        for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
                return b
            }, q = function(a) {
                var b, c, d, e, f;
                for (c = b = 0, e = 0, f = a.length; e < f; e++) d = a[e], c += Math.abs(d), b++;
                return c / b
            }, x = function(a, b) {
                var c, d, e;
                if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                    if (c = e.getAttribute("data-pace-" + a), !b) return c;
                    try {
                        return JSON.parse(c)
                    } catch (f) {
                        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                    }
                }
            }, g = function() {
                function a() {}
                return a.prototype.on = function(a, b, c, d) {
                    var e;
                    return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                        handler: b,
                        ctx: c,
                        once: d
                    })
                }, a.prototype.once = function(a, b, c) {
                    return this.on(a, b, c, !0)
                }, a.prototype.off = function(a, b) {
                    var c, d, e;
                    if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                        if (null == b) return delete this.bindings[a];
                        for (c = 0, e = []; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++);
                        return e
                    }
                }, a.prototype.trigger = function() {
                    var a, b, c, d, e, f, g, h, i;
                    if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                        for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
                        return i
                    }
                }, a
            }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; Q < S; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
        i = function(a) {
            function b() {
                return V = b.__super__.constructor.apply(this, arguments)
            }
            return Z(b, a), b
        }(Error), b = function() {
            function a() {
                this.progress = 0
            }
            return a.prototype.getElement = function() {
                var a;
                if (null == this.el) {
                    if (a = document.querySelector(D.target), !a) throw new i;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
                }
                return this.el
            }, a.prototype.finish = function() {
                var a;
                return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, a.prototype.update = function(a) {
                return this.progress = a, this.render()
            }, a.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (a) {
                    i = a
                }
                return this.el = void 0
            }, a.prototype.render = function() {
                var a, b, c, d, e, f, g;
                if (null == document.querySelector(D.target)) return !1;
                for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; e < f; e++) b = g[e], a.children[0].style[b] = d;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
            }, a.prototype.done = function() {
                return this.progress >= 100
            }, a
        }(), h = function() {
            function a() {
                this.bindings = {}
            }
            return a.prototype.trigger = function(a, b) {
                var c, d, e, f, g;
                if (null != this.bindings[a]) {
                    for (f = this.bindings[a], g = [], d = 0, e = f.length; d < e; d++) c = f[d], g.push(c.call(this, b));
                    return g
                }
            }, a.prototype.on = function(a, b) {
                var c;
                return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
            }, a
        }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
            var c, d, e;
            e = [];
            for (d in b.prototype) try {
                null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, {
                    get: function() {
                        return b.prototype[d]
                    },
                    configurable: !0,
                    enumerable: !0
                })) : e.push(a[d] = b.prototype[d]) : e.push(void 0)
            } catch (f) {
                c = f
            }
            return e
        }, A = [], j.ignore = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
        }, j.track = function() {
            var a, b, c;
            return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
        }, J = function(a) {
            var b;
            if (null == a && (a = "GET"), "track" === A[0]) return "force";
            if (!A.length && D.ajax) {
                if ("socket" === a && D.ajax.trackWebSockets) return !0;
                if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
            }
            return !1
        }, k = function(a) {
            function b() {
                var a, c = this;
                b.__super__.constructor.apply(this, arguments), a = function(a) {
                    var b;
                    return b = a.open, a.open = function(d, e, f) {
                        return J(d) && c.trigger("request", {
                            type: d,
                            url: e,
                            request: a
                        }), b.apply(a, arguments)
                    }
                }, window.XMLHttpRequest = function(b) {
                    var c;
                    return c = new P(b), a(c), c
                };
                try {
                    w(window.XMLHttpRequest, P)
                } catch (d) {}
                if (null != O) {
                    window.XDomainRequest = function() {
                        var b;
                        return b = new O, a(b), b
                    };
                    try {
                        w(window.XDomainRequest, O)
                    } catch (d) {}
                }
                if (null != N && D.ajax.trackWebSockets) {
                    window.WebSocket = function(a, b) {
                        var d;
                        return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                            type: "socket",
                            url: a,
                            protocols: b,
                            request: d
                        }), d
                    };
                    try {
                        w(window.WebSocket, N)
                    } catch (d) {}
                }
            }
            return Z(b, a), b
        }(h), R = null, y = function() {
            return null == R && (R = new k), R
        }, I = function(a) {
            var b, c, d, e;
            for (e = D.ajax.ignoreURLs, c = 0, d = e.length; c < d; c++)
                if (b = e[c], "string" == typeof b) {
                    if (a.indexOf(b) !== -1) return !0
                } else if (b.test(a)) return !0;
            return !1
        }, y().on("request", function(b) {
            var c, d, e, f, g;
            if (f = b.type, e = b.request, g = b.url, !I(g)) return j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
                var b, c, g, h, i, k;
                if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && h < 4) {
                    for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; c < g; c++) {
                        if (K = i[c], K instanceof a) {
                            K.watch.apply(K, d);
                            break
                        }
                        k.push(void 0)
                    }
                    return k
                }
            }, c))
        }), a = function() {
            function a() {
                var a = this;
                this.elements = [], y().on("request", function() {
                    return a.watch.apply(a, arguments)
                })
            }
            return a.prototype.watch = function(a) {
                var b, c, d, e;
                if (d = a.type, b = a.request, e = a.url, !I(e)) return c = "socket" === d ? new n(b) : new o(b), this.elements.push(c)
            }, a
        }(), o = function() {
            function a(a) {
                var b, c, d, e, f, g, h = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (c = null, a.addEventListener("progress", function(a) {
                            return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2
                        }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; d < e; d++) b = g[d], a.addEventListener(b, function() {
                        return h.progress = 100
                    }, !1);
                else f = a.onreadystatechange, a.onreadystatechange = function() {
                    var b;
                    return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
                }
            }
            return a
        }(), n = function() {
            function a(a) {
                var b, c, d, e, f = this;
                for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; c < d; c++) b = e[c], a.addEventListener(b, function() {
                    return f.progress = 100
                }, !1)
            }
            return a
        }(), d = function() {
            function a(a) {
                var b, c, d, f;
                for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; c < d; c++) b = f[c], this.elements.push(new e(b))
            }
            return a
        }(), e = function() {
            function a(a) {
                this.selector = a, this.progress = 0, this.check()
            }
            return a.prototype.check = function() {
                var a = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return a.check()
                }, D.elements.checkInterval)
            }, a.prototype.done = function() {
                return this.progress = 100
            }, a
        }(), c = function() {
            function a() {
                var a, b, c = this;
                this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
                }
            }
            return a.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, a
        }(), f = function() {
            function a() {
                var a, b, c, d, e, f = this;
                this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                    var g;
                    return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
                }, 50)
            }
            return a
        }(), m = function() {
            function a(a) {
                this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
            }
            return a.prototype.tick = function(a, b) {
                var c;
                return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, a
        }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
            if (D.restartOnPushState) return j.restart()
        }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
            return z(), T.apply(window.history, arguments)
        }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
            return z(), W.apply(window.history, arguments)
        }), l = {
            ajax: a,
            elements: d,
            document: c,
            eventLag: f
        }, (B = function() {
            var a, c, d, e, f, g, h, i;
            for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; c < e; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
            for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; d < f; d++) K = i[d], L.push(new K(D));
            return j.bar = r = new b, H = [], M = new m
        })(), j.stop = function() {
            return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
        }, j.restart = function() {
            return j.trigger("restart"), j.stop(), j.start()
        }, j.go = function() {
            var a;
            return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
                var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
                for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; q < u; i = ++q)
                    for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; t < v; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
                return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                    return r.finish(), j.running = !1, j.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
            })
        }, j.start = function(a) {
            v(D, a), j.running = !0;
            try {
                r.render()
            } catch (b) {
                i = b
            }
            return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
    }.call(this);
var slice = [].slice;
! function(a, b) {
    var c;
    return b.Starrr = c = function() {
        function b(b, c) {
            this.options = a.extend({}, this.defaults, c), this.$el = b, this.createStars(), this.syncRating(), this.options.readOnly || (this.$el.on("mouseover.starrr", "i", function(a) {
                return function(b) {
                    return a.syncRating(a.getStars().index(b.currentTarget) + 1)
                }
            }(this)), this.$el.on("mouseout.starrr", function(a) {
                return function() {
                    return a.syncRating()
                }
            }(this)), this.$el.on("click.starrr", "i", function(a) {
                return function(b) {
                    return a.setRating(a.getStars().index(b.currentTarget) + 1)
                }
            }(this)), this.$el.on("starrr:change", this.options.change))
        }
        return b.prototype.defaults = {
            rating: void 0,
            max: 5,
            readOnly: !1,
            emptyClass: "fa fa-star-o",
            fullClass: "fa fa-star",
            change: function(a, b) {}
        }, b.prototype.getStars = function() {
            return this.$el.find("i")
        }, b.prototype.createStars = function() {
            var a, b, c;
            for (c = [], a = 1, b = this.options.max; 1 <= b ? a <= b : a >= b; 1 <= b ? a++ : a--) c.push(this.$el.append("<i />"));
            return c
        }, b.prototype.setRating = function(a) {
            return this.options.rating === a && (a = void 0), this.options.rating = a, this.syncRating(), this.$el.trigger("starrr:change", a)
        }, b.prototype.getRating = function() {
            return this.options.rating
        }, b.prototype.syncRating = function(a) {
            var b, c, d, e, f;
            for (a || (a = this.options.rating), b = this.getStars(), f = [], c = d = 1, e = this.options.max; 1 <= e ? d <= e : d >= e; c = 1 <= e ? ++d : --d) f.push(b.eq(c - 1).removeClass(a >= c ? this.options.emptyClass : this.options.fullClass).addClass(a >= c ? this.options.fullClass : this.options.emptyClass));
            return f
        }, b
    }(), a.fn.extend({
        starrr: function() {
            var b, d;
            return d = arguments[0], b = 2 <= arguments.length ? slice.call(arguments, 1) : [], this.each(function() {
                var e;
                if (e = a(this).data("starrr"), e || a(this).data("starrr", e = new c(a(this), d)), "string" == typeof d) return e[d].apply(e, b)
            })
        }
    })
}(window.jQuery, window),
function() {
    "use strict";

    function a(a) {
        a.fn.swiper = function(b) {
            var d;
            return a(this).each(function() {
                var a = new c(this, b);
                d || (d = a)
            }), d
        }
    }
    var b, c = function(a, d) {
        function e(a) {
            return Math.floor(a)
        }

        function f() {
            t.autoplayTimeoutId = setTimeout(function() {
                t.params.loop ? (t.fixLoop(), t._slideNext(), t.emit("onAutoplay", t)) : t.isEnd ? d.autoplayStopOnLast ? t.stopAutoplay() : (t._slideTo(0), t.emit("onAutoplay", t)) : (t._slideNext(), t.emit("onAutoplay", t))
            }, t.params.autoplay)
        }

        function g(a, c) {
            var d = b(a.target);
            if (!d.is(c))
                if ("string" == typeof c) d = d.parents(c);
                else if (c.nodeType) {
                var e;
                return d.parents().each(function(a, b) {
                    b === c && (e = c)
                }), e ? c : void 0
            }
            if (0 !== d.length) return d[0]
        }

        function h(a, b) {
            b = b || {};
            var c = window.MutationObserver || window.WebkitMutationObserver,
                d = new c(function(a) {
                    a.forEach(function(a) {
                        t.onResize(!0), t.emit("onObserverUpdate", t, a)
                    })
                });
            d.observe(a, {
                attributes: "undefined" == typeof b.attributes || b.attributes,
                childList: "undefined" == typeof b.childList || b.childList,
                characterData: "undefined" == typeof b.characterData || b.characterData
            }), t.observers.push(d)
        }

        function i(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.keyCode || a.charCode;
            if (!t.params.allowSwipeToNext && (t.isHorizontal() && 39 === b || !t.isHorizontal() && 40 === b)) return !1;
            if (!t.params.allowSwipeToPrev && (t.isHorizontal() && 37 === b || !t.isHorizontal() && 38 === b)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === b || 39 === b || 38 === b || 40 === b) {
                    var c = !1;
                    if (t.container.parents(".swiper-slide").length > 0 && 0 === t.container.parents(".swiper-slide-active").length) return;
                    var d = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        e = window.innerWidth,
                        f = window.innerHeight,
                        g = t.container.offset();
                    t.rtl && (g.left = g.left - t.container[0].scrollLeft);
                    for (var h = [
                            [g.left, g.top],
                            [g.left + t.width, g.top],
                            [g.left, g.top + t.height],
                            [g.left + t.width, g.top + t.height]
                        ], i = 0; i < h.length; i++) {
                        var j = h[i];
                        j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0)
                    }
                    if (!c) return
                }
                t.isHorizontal() ? (37 !== b && 39 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !t.rtl || 37 === b && t.rtl) && t.slideNext(), (37 === b && !t.rtl || 39 === b && t.rtl) && t.slidePrev()) : (38 !== b && 40 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && t.slideNext(), 38 === b && t.slidePrev())
            }
        }

        function j(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = t.mousewheel.event,
                c = 0,
                d = t.rtl ? -1 : 1;
            if ("mousewheel" === b)
                if (t.params.mousewheelForceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                        c = a.wheelDeltaX * d
                    } else {
                        if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                        c = a.wheelDeltaY
                    } else c = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? -a.wheelDeltaX * d : -a.wheelDeltaY;
            else if ("DOMMouseScroll" === b) c = -a.detail;
            else if ("wheel" === b)
                if (t.params.mousewheelForceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                        c = -a.deltaX * d
                    } else {
                        if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                        c = -a.deltaY
                    } else c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX * d : -a.deltaY;
            if (0 !== c) {
                if (t.params.mousewheelInvert && (c = -c), t.params.freeMode) {
                    var e = t.getWrapperTranslate() + c * t.params.mousewheelSensitivity,
                        f = t.isBeginning,
                        g = t.isEnd;
                    if (e >= t.minTranslate() && (e = t.minTranslate()), e <= t.maxTranslate() && (e = t.maxTranslate()), t.setWrapperTransition(0), t.setWrapperTranslate(e), t.updateProgress(), t.updateActiveIndex(), (!f && t.isBeginning || !g && t.isEnd) && t.updateClasses(), t.params.freeModeSticky ? (clearTimeout(t.mousewheel.timeout), t.mousewheel.timeout = setTimeout(function() {
                            t.slideReset()
                        }, 300)) : t.params.lazyLoading && t.lazy && t.lazy.load(), 0 === e || e === t.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - t.mousewheel.lastScrollTime > 60)
                        if (c < 0)
                            if (t.isEnd && !t.params.loop || t.animating) {
                                if (t.params.mousewheelReleaseOnEdges) return !0
                            } else t.slideNext();
                    else if (t.isBeginning && !t.params.loop || t.animating) {
                        if (t.params.mousewheelReleaseOnEdges) return !0
                    } else t.slidePrev();
                    t.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return t.params.autoplay && t.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
            }
        }

        function k(a, c) {
            a = b(a);
            var d, e, f, g = t.rtl ? -1 : 1;
            d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : t.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)")
        }

        function l(a) {
            return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
        }
        if (!(this instanceof c)) return new c(a, d);
        var m = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            n = d && d.virtualTranslate;
        d = d || {};
        var o = {};
        for (var p in d)
            if ("object" != typeof d[p] || null === d[p] || (d[p].nodeType || d[p] === window || d[p] === document || "undefined" != typeof Dom7 && d[p] instanceof Dom7 || "undefined" != typeof jQuery && d[p] instanceof jQuery)) o[p] = d[p];
            else {
                o[p] = {};
                for (var q in d[p]) o[p][q] = d[p][q]
            }
        for (var r in m)
            if ("undefined" == typeof d[r]) d[r] = m[r];
            else if ("object" == typeof d[r])
            for (var s in m[r]) "undefined" == typeof d[r][s] && (d[r][s] = m[r][s]);
        var t = this;
        if (t.params = d, t.originalParams = o, t.classNames = [], "undefined" != typeof b && "undefined" != typeof Dom7 && (b = Dom7), ("undefined" != typeof b || (b = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (t.$ = b, t.currentBreakpoint = void 0, t.getActiveBreakpoint = function() {
                if (!t.params.breakpoints) return !1;
                var a, b = !1,
                    c = [];
                for (a in t.params.breakpoints) t.params.breakpoints.hasOwnProperty(a) && c.push(a);
                c.sort(function(a, b) {
                    return parseInt(a, 10) > parseInt(b, 10)
                });
                for (var d = 0; d < c.length; d++) a = c[d], a >= window.innerWidth && !b && (b = a);
                return b || "max"
            }, t.setBreakpoint = function() {
                var a = t.getActiveBreakpoint();
                if (a && t.currentBreakpoint !== a) {
                    var b = a in t.params.breakpoints ? t.params.breakpoints[a] : t.originalParams,
                        c = t.params.loop && b.slidesPerView !== t.params.slidesPerView;
                    for (var d in b) t.params[d] = b[d];
                    t.currentBreakpoint = a, c && t.destroyLoop && t.reLoop(!0)
                }
            }, t.params.breakpoints && t.setBreakpoint(), t.container = b(a), 0 !== t.container.length)) {
            if (t.container.length > 1) {
                var u = [];
                return t.container.each(function() {
                    u.push(new c(this, d))
                }), u
            }
            t.container[0].swiper = t, t.container.data("swiper", t), t.classNames.push("swiper-container-" + t.params.direction), t.params.freeMode && t.classNames.push("swiper-container-free-mode"), t.support.flexbox || (t.classNames.push("swiper-container-no-flexbox"), t.params.slidesPerColumn = 1), t.params.autoHeight && t.classNames.push("swiper-container-autoheight"), (t.params.parallax || t.params.watchSlidesVisibility) && (t.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(t.params.effect) >= 0 && (t.support.transforms3d ? (t.params.watchSlidesProgress = !0, t.classNames.push("swiper-container-3d")) : t.params.effect = "slide"), "slide" !== t.params.effect && t.classNames.push("swiper-container-" + t.params.effect), "cube" === t.params.effect && (t.params.resistanceRatio = 0, t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.centeredSlides = !1, t.params.spaceBetween = 0, t.params.virtualTranslate = !0, t.params.setWrapperSize = !1), "fade" !== t.params.effect && "flip" !== t.params.effect || (t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.watchSlidesProgress = !0, t.params.spaceBetween = 0, t.params.setWrapperSize = !1, "undefined" == typeof n && (t.params.virtualTranslate = !0)), t.params.grabCursor && t.support.touch && (t.params.grabCursor = !1), t.wrapper = t.container.children("." + t.params.wrapperClass), t.params.pagination && (t.paginationContainer = b(t.params.pagination), t.params.uniqueNavElements && "string" == typeof t.params.pagination && t.paginationContainer.length > 1 && 1 === t.container.find(t.params.pagination).length && (t.paginationContainer = t.container.find(t.params.pagination)), "bullets" === t.params.paginationType && t.params.paginationClickable ? t.paginationContainer.addClass("swiper-pagination-clickable") : t.params.paginationClickable = !1, t.paginationContainer.addClass("swiper-pagination-" + t.params.paginationType)), (t.params.nextButton || t.params.prevButton) && (t.params.nextButton && (t.nextButton = b(t.params.nextButton), t.params.uniqueNavElements && "string" == typeof t.params.nextButton && t.nextButton.length > 1 && 1 === t.container.find(t.params.nextButton).length && (t.nextButton = t.container.find(t.params.nextButton))), t.params.prevButton && (t.prevButton = b(t.params.prevButton), t.params.uniqueNavElements && "string" == typeof t.params.prevButton && t.prevButton.length > 1 && 1 === t.container.find(t.params.prevButton).length && (t.prevButton = t.container.find(t.params.prevButton)))), t.isHorizontal = function() {
                    return "horizontal" === t.params.direction
                }, t.rtl = t.isHorizontal() && ("rtl" === t.container[0].dir.toLowerCase() || "rtl" === t.container.css("direction")), t.rtl && t.classNames.push("swiper-container-rtl"), t.rtl && (t.wrongRTL = "-webkit-box" === t.wrapper.css("display")), t.params.slidesPerColumn > 1 && t.classNames.push("swiper-container-multirow"), t.device.android && t.classNames.push("swiper-container-android"), t.container.addClass(t.classNames.join(" ")), t.translate = 0, t.progress = 0, t.velocity = 0, t.lockSwipeToNext = function() {
                    t.params.allowSwipeToNext = !1
                }, t.lockSwipeToPrev = function() {
                    t.params.allowSwipeToPrev = !1
                }, t.lockSwipes = function() {
                    t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !1
                }, t.unlockSwipeToNext = function() {
                    t.params.allowSwipeToNext = !0
                }, t.unlockSwipeToPrev = function() {
                    t.params.allowSwipeToPrev = !0
                }, t.unlockSwipes = function() {
                    t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !0
                }, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab"),
                t.imagesToLoad = [], t.imagesLoaded = 0, t.loadImage = function(a, b, c, d, e) {
                    function f() {
                        e && e()
                    }
                    var g;
                    a.complete && d ? f() : b ? (g = new window.Image, g.onload = f, g.onerror = f, c && (g.srcset = c), b && (g.src = b)) : f()
                }, t.preloadImages = function() {
                    function a() {
                        "undefined" != typeof t && null !== t && (void 0 !== t.imagesLoaded && t.imagesLoaded++, t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("onImagesReady", t)))
                    }
                    t.imagesToLoad = t.container.find("img");
                    for (var b = 0; b < t.imagesToLoad.length; b++) t.loadImage(t.imagesToLoad[b], t.imagesToLoad[b].currentSrc || t.imagesToLoad[b].getAttribute("src"), t.imagesToLoad[b].srcset || t.imagesToLoad[b].getAttribute("srcset"), !0, a)
                }, t.autoplayTimeoutId = void 0, t.autoplaying = !1, t.autoplayPaused = !1, t.startAutoplay = function() {
                    return "undefined" == typeof t.autoplayTimeoutId && (!!t.params.autoplay && (!t.autoplaying && (t.autoplaying = !0, t.emit("onAutoplayStart", t), void f())))
                }, t.stopAutoplay = function(a) {
                    t.autoplayTimeoutId && (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplaying = !1, t.autoplayTimeoutId = void 0, t.emit("onAutoplayStop", t))
                }, t.pauseAutoplay = function(a) {
                    t.autoplayPaused || (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplayPaused = !0, 0 === a ? (t.autoplayPaused = !1, f()) : t.wrapper.transitionEnd(function() {
                        t && (t.autoplayPaused = !1, t.autoplaying ? f() : t.stopAutoplay())
                    }))
                }, t.minTranslate = function() {
                    return -t.snapGrid[0]
                }, t.maxTranslate = function() {
                    return -t.snapGrid[t.snapGrid.length - 1]
                }, t.updateAutoHeight = function() {
                    var a = t.slides.eq(t.activeIndex)[0];
                    if ("undefined" != typeof a) {
                        var b = a.offsetHeight;
                        b && t.wrapper.css("height", b + "px")
                    }
                }, t.updateContainerSize = function() {
                    var a, b;
                    a = "undefined" != typeof t.params.width ? t.params.width : t.container[0].clientWidth, b = "undefined" != typeof t.params.height ? t.params.height : t.container[0].clientHeight, 0 === a && t.isHorizontal() || 0 === b && !t.isHorizontal() || (a = a - parseInt(t.container.css("padding-left"), 10) - parseInt(t.container.css("padding-right"), 10), b = b - parseInt(t.container.css("padding-top"), 10) - parseInt(t.container.css("padding-bottom"), 10), t.width = a, t.height = b, t.size = t.isHorizontal() ? t.width : t.height)
                }, t.updateSlidesSize = function() {
                    t.slides = t.wrapper.children("." + t.params.slideClass), t.snapGrid = [], t.slidesGrid = [], t.slidesSizesGrid = [];
                    var a, b = t.params.spaceBetween,
                        c = -t.params.slidesOffsetBefore,
                        d = 0,
                        f = 0;
                    if ("undefined" != typeof t.size) {
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * t.size), t.virtualSize = -b, t.rtl ? t.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : t.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var g;
                        t.params.slidesPerColumn > 1 && (g = Math.floor(t.slides.length / t.params.slidesPerColumn) === t.slides.length / t.params.slidesPerColumn ? t.slides.length : Math.ceil(t.slides.length / t.params.slidesPerColumn) * t.params.slidesPerColumn, "auto" !== t.params.slidesPerView && "row" === t.params.slidesPerColumnFill && (g = Math.max(g, t.params.slidesPerView * t.params.slidesPerColumn)));
                        var h, i = t.params.slidesPerColumn,
                            j = g / i,
                            k = j - (t.params.slidesPerColumn * j - t.slides.length);
                        for (a = 0; a < t.slides.length; a++) {
                            h = 0;
                            var l = t.slides.eq(a);
                            if (t.params.slidesPerColumn > 1) {
                                var m, n, o;
                                "column" === t.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({
                                    "-webkit-box-ordinal-group": m,
                                    "-moz-box-ordinal-group": m,
                                    "-ms-flex-order": m,
                                    "-webkit-order": m,
                                    order: m
                                })) : (o = Math.floor(a / j), n = a - o * j), l.css({
                                    "margin-top": 0 !== o && t.params.spaceBetween && t.params.spaceBetween + "px"
                                }).attr("data-swiper-column", n).attr("data-swiper-row", o)
                            }
                            "none" !== l.css("display") && ("auto" === t.params.slidesPerView ? (h = t.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), t.params.roundLengths && (h = e(h))) : (h = (t.size - (t.params.slidesPerView - 1) * b) / t.params.slidesPerView, t.params.roundLengths && (h = e(h)), t.isHorizontal() ? t.slides[a].style.width = h + "px" : t.slides[a].style.height = h + "px"), t.slides[a].swiperSlideSize = h, t.slidesSizesGrid.push(h), t.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === a && (c = c - t.size / 2 - b), Math.abs(c) < .001 && (c = 0), f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c)) : (f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c), c = c + h + b), t.virtualSize += h + b, d = h, f++)
                        }
                        t.virtualSize = Math.max(t.virtualSize, t.size) + t.params.slidesOffsetAfter;
                        var p;
                        if (t.rtl && t.wrongRTL && ("slide" === t.params.effect || "coverflow" === t.params.effect) && t.wrapper.css({
                                width: t.virtualSize + t.params.spaceBetween + "px"
                            }), t.support.flexbox && !t.params.setWrapperSize || (t.isHorizontal() ? t.wrapper.css({
                                width: t.virtualSize + t.params.spaceBetween + "px"
                            }) : t.wrapper.css({
                                height: t.virtualSize + t.params.spaceBetween + "px"
                            })), t.params.slidesPerColumn > 1 && (t.virtualSize = (h + t.params.spaceBetween) * g, t.virtualSize = Math.ceil(t.virtualSize / t.params.slidesPerColumn) - t.params.spaceBetween, t.wrapper.css({
                                width: t.virtualSize + t.params.spaceBetween + "px"
                            }), t.params.centeredSlides)) {
                            for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] < t.virtualSize + t.snapGrid[0] && p.push(t.snapGrid[a]);
                            t.snapGrid = p
                        }
                        if (!t.params.centeredSlides) {
                            for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] <= t.virtualSize - t.size && p.push(t.snapGrid[a]);
                            t.snapGrid = p, Math.floor(t.virtualSize - t.size) - Math.floor(t.snapGrid[t.snapGrid.length - 1]) > 1 && t.snapGrid.push(t.virtualSize - t.size)
                        }
                        0 === t.snapGrid.length && (t.snapGrid = [0]), 0 !== t.params.spaceBetween && (t.isHorizontal() ? t.rtl ? t.slides.css({
                            marginLeft: b + "px"
                        }) : t.slides.css({
                            marginRight: b + "px"
                        }) : t.slides.css({
                            marginBottom: b + "px"
                        })), t.params.watchSlidesProgress && t.updateSlidesOffset()
                    }
                }, t.updateSlidesOffset = function() {
                    for (var a = 0; a < t.slides.length; a++) t.slides[a].swiperSlideOffset = t.isHorizontal() ? t.slides[a].offsetLeft : t.slides[a].offsetTop
                }, t.updateSlidesProgress = function(a) {
                    if ("undefined" == typeof a && (a = t.translate || 0), 0 !== t.slides.length) {
                        "undefined" == typeof t.slides[0].swiperSlideOffset && t.updateSlidesOffset();
                        var b = -a;
                        t.rtl && (b = a), t.slides.removeClass(t.params.slideVisibleClass);
                        for (var c = 0; c < t.slides.length; c++) {
                            var d = t.slides[c],
                                e = (b - d.swiperSlideOffset) / (d.swiperSlideSize + t.params.spaceBetween);
                            if (t.params.watchSlidesVisibility) {
                                var f = -(b - d.swiperSlideOffset),
                                    g = f + t.slidesSizesGrid[c],
                                    h = f >= 0 && f < t.size || g > 0 && g <= t.size || f <= 0 && g >= t.size;
                                h && t.slides.eq(c).addClass(t.params.slideVisibleClass)
                            }
                            d.progress = t.rtl ? -e : e
                        }
                    }
                }, t.updateProgress = function(a) {
                    "undefined" == typeof a && (a = t.translate || 0);
                    var b = t.maxTranslate() - t.minTranslate(),
                        c = t.isBeginning,
                        d = t.isEnd;
                    0 === b ? (t.progress = 0, t.isBeginning = t.isEnd = !0) : (t.progress = (a - t.minTranslate()) / b, t.isBeginning = t.progress <= 0, t.isEnd = t.progress >= 1), t.isBeginning && !c && t.emit("onReachBeginning", t), t.isEnd && !d && t.emit("onReachEnd", t), t.params.watchSlidesProgress && t.updateSlidesProgress(a), t.emit("onProgress", t, t.progress)
                }, t.updateActiveIndex = function() {
                    var a, b, c, d = t.rtl ? t.translate : -t.translate;
                    for (b = 0; b < t.slidesGrid.length; b++) "undefined" != typeof t.slidesGrid[b + 1] ? d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] - (t.slidesGrid[b + 1] - t.slidesGrid[b]) / 2 ? a = b : d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] && (a = b + 1) : d >= t.slidesGrid[b] && (a = b);
                    (a < 0 || "undefined" == typeof a) && (a = 0), c = Math.floor(a / t.params.slidesPerGroup), c >= t.snapGrid.length && (c = t.snapGrid.length - 1), a !== t.activeIndex && (t.snapIndex = c, t.previousIndex = t.activeIndex, t.activeIndex = a, t.updateClasses())
                }, t.updateClasses = function() {
                    t.slides.removeClass(t.params.slideActiveClass + " " + t.params.slideNextClass + " " + t.params.slidePrevClass);
                    var a = t.slides.eq(t.activeIndex);
                    a.addClass(t.params.slideActiveClass);
                    var c = a.next("." + t.params.slideClass).addClass(t.params.slideNextClass);
                    t.params.loop && 0 === c.length && t.slides.eq(0).addClass(t.params.slideNextClass);
                    var d = a.prev("." + t.params.slideClass).addClass(t.params.slidePrevClass);
                    if (t.params.loop && 0 === d.length && t.slides.eq(-1).addClass(t.params.slidePrevClass), t.paginationContainer && t.paginationContainer.length > 0) {
                        var e, f = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? (e = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), e > t.slides.length - 1 - 2 * t.loopedSlides && (e -= t.slides.length - 2 * t.loopedSlides), e > f - 1 && (e -= f), e < 0 && "bullets" !== t.params.paginationType && (e = f + e)) : e = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === t.params.paginationType && t.bullets && t.bullets.length > 0 && (t.bullets.removeClass(t.params.bulletActiveClass), t.paginationContainer.length > 1 ? t.bullets.each(function() {
                                b(this).index() === e && b(this).addClass(t.params.bulletActiveClass)
                            }) : t.bullets.eq(e).addClass(t.params.bulletActiveClass)), "fraction" === t.params.paginationType && (t.paginationContainer.find("." + t.params.paginationCurrentClass).text(e + 1), t.paginationContainer.find("." + t.params.paginationTotalClass).text(f)), "progress" === t.params.paginationType) {
                            var g = (e + 1) / f,
                                h = g,
                                i = 1;
                            t.isHorizontal() || (i = g, h = 1), t.paginationContainer.find("." + t.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + i + ")").transition(t.params.speed)
                        }
                        "custom" === t.params.paginationType && t.params.paginationCustomRender && (t.paginationContainer.html(t.params.paginationCustomRender(t, e + 1, f)), t.emit("onPaginationRendered", t, t.paginationContainer[0]))
                    }
                    t.params.loop || (t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.isBeginning ? (t.prevButton.addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(t.prevButton)) : (t.prevButton.removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(t.prevButton))), t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.isEnd ? (t.nextButton.addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(t.nextButton)) : (t.nextButton.removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(t.nextButton))))
                }, t.updatePagination = function() {
                    if (t.params.pagination && t.paginationContainer && t.paginationContainer.length > 0) {
                        var a = "";
                        if ("bullets" === t.params.paginationType) {
                            for (var b = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, c = 0; c < b; c++) a += t.params.paginationBulletRender ? t.params.paginationBulletRender(c, t.params.bulletClass) : "<" + t.params.paginationElement + ' class="' + t.params.bulletClass + '"></' + t.params.paginationElement + ">";
                            t.paginationContainer.html(a), t.bullets = t.paginationContainer.find("." + t.params.bulletClass), t.params.paginationClickable && t.params.a11y && t.a11y && t.a11y.initPagination()
                        }
                        "fraction" === t.params.paginationType && (a = t.params.paginationFractionRender ? t.params.paginationFractionRender(t, t.params.paginationCurrentClass, t.params.paginationTotalClass) : '<span class="' + t.params.paginationCurrentClass + '"></span> / <span class="' + t.params.paginationTotalClass + '"></span>', t.paginationContainer.html(a)), "progress" === t.params.paginationType && (a = t.params.paginationProgressRender ? t.params.paginationProgressRender(t, t.params.paginationProgressbarClass) : '<span class="' + t.params.paginationProgressbarClass + '"></span>', t.paginationContainer.html(a)), "custom" !== t.params.paginationType && t.emit("onPaginationRendered", t, t.paginationContainer[0])
                    }
                }, t.update = function(a) {
                    function b() {
                        d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setWrapperTranslate(d), t.updateActiveIndex(), t.updateClasses()
                    }
                    if (t.updateContainerSize(), t.updateSlidesSize(), t.updateProgress(), t.updatePagination(), t.updateClasses(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), a) {
                        var c, d;
                        t.controller && t.controller.spline && (t.controller.spline = void 0), t.params.freeMode ? (b(), t.params.autoHeight && t.updateAutoHeight()) : (c = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), c || b())
                    } else t.params.autoHeight && t.updateAutoHeight()
                }, t.onResize = function(a) {
                    t.params.breakpoints && t.setBreakpoint();
                    var b = t.params.allowSwipeToPrev,
                        c = t.params.allowSwipeToNext;
                    t.params.allowSwipeToPrev = t.params.allowSwipeToNext = !0, t.updateContainerSize(), t.updateSlidesSize(), ("auto" === t.params.slidesPerView || t.params.freeMode || a) && t.updatePagination(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), t.controller && t.controller.spline && (t.controller.spline = void 0);
                    var d = !1;
                    if (t.params.freeMode) {
                        var e = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
                        t.setWrapperTranslate(e), t.updateActiveIndex(), t.updateClasses(), t.params.autoHeight && t.updateAutoHeight()
                    } else t.updateClasses(), d = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
                    t.params.lazyLoading && !d && t.lazy && t.lazy.load(), t.params.allowSwipeToPrev = b, t.params.allowSwipeToNext = c
                };
            var v = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? v = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), t.touchEvents = {
                start: t.support.touch || !t.params.simulateTouch ? "touchstart" : v[0],
                move: t.support.touch || !t.params.simulateTouch ? "touchmove" : v[1],
                end: t.support.touch || !t.params.simulateTouch ? "touchend" : v[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === t.params.touchEventsTarget ? t.container : t.wrapper).addClass("swiper-wp8-" + t.params.direction), t.initEvents = function(a) {
                var b = a ? "off" : "on",
                    c = a ? "removeEventListener" : "addEventListener",
                    e = "container" === t.params.touchEventsTarget ? t.container[0] : t.wrapper[0],
                    f = t.support.touch ? e : document,
                    g = !!t.params.nested;
                t.browser.ie ? (e[c](t.touchEvents.start, t.onTouchStart, !1), f[c](t.touchEvents.move, t.onTouchMove, g), f[c](t.touchEvents.end, t.onTouchEnd, !1)) : (t.support.touch && (e[c](t.touchEvents.start, t.onTouchStart, !1), e[c](t.touchEvents.move, t.onTouchMove, g), e[c](t.touchEvents.end, t.onTouchEnd, !1)), !d.simulateTouch || t.device.ios || t.device.android || (e[c]("mousedown", t.onTouchStart, !1), document[c]("mousemove", t.onTouchMove, g), document[c]("mouseup", t.onTouchEnd, !1))), window[c]("resize", t.onResize), t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.nextButton[b]("click", t.onClickNext), t.params.a11y && t.a11y && t.nextButton[b]("keydown", t.a11y.onEnterKey)), t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.prevButton[b]("click", t.onClickPrev), t.params.a11y && t.a11y && t.prevButton[b]("keydown", t.a11y.onEnterKey)), t.params.pagination && t.params.paginationClickable && (t.paginationContainer[b]("click", "." + t.params.bulletClass, t.onClickIndex), t.params.a11y && t.a11y && t.paginationContainer[b]("keydown", "." + t.params.bulletClass, t.a11y.onEnterKey)), (t.params.preventClicks || t.params.preventClicksPropagation) && e[c]("click", t.preventClicks, !0)
            }, t.attachEvents = function() {
                t.initEvents()
            }, t.detachEvents = function() {
                t.initEvents(!0)
            }, t.allowClick = !0, t.preventClicks = function(a) {
                t.allowClick || (t.params.preventClicks && a.preventDefault(), t.params.preventClicksPropagation && t.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }, t.onClickNext = function(a) {
                a.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
            }, t.onClickPrev = function(a) {
                a.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
            }, t.onClickIndex = function(a) {
                a.preventDefault();
                var c = b(this).index() * t.params.slidesPerGroup;
                t.params.loop && (c += t.loopedSlides), t.slideTo(c)
            }, t.updateClickedSlide = function(a) {
                var c = g(a, "." + t.params.slideClass),
                    d = !1;
                if (c)
                    for (var e = 0; e < t.slides.length; e++) t.slides[e] === c && (d = !0);
                if (!c || !d) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                if (t.clickedSlide = c, t.clickedIndex = b(c).index(), t.params.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex) {
                    var f, h = t.clickedIndex;
                    if (t.params.loop) {
                        if (t.animating) return;
                        f = b(t.clickedSlide).attr("data-swiper-slide-index"), t.params.centeredSlides ? h < t.loopedSlides - t.params.slidesPerView / 2 || h > t.slides.length - t.loopedSlides + t.params.slidesPerView / 2 ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            t.slideTo(h)
                        }, 0)) : t.slideTo(h) : h > t.slides.length - t.params.slidesPerView ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            t.slideTo(h)
                        }, 0)) : t.slideTo(h)
                    } else t.slideTo(h)
                }
            };
            var w, x, y, z, A, B, C, D, E, F, G = "input, select, textarea, button",
                H = Date.now(),
                I = [];
            t.animating = !1, t.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var J, K;
            if (t.onTouchStart = function(a) {
                    if (a.originalEvent && (a = a.originalEvent), J = "touchstart" === a.type, J || !("which" in a) || 3 !== a.which) {
                        if (t.params.noSwiping && g(a, "." + t.params.noSwipingClass)) return void(t.allowClick = !0);
                        if (!t.params.swipeHandler || g(a, t.params.swipeHandler)) {
                            var c = t.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                d = t.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                            if (!(t.device.ios && t.params.iOSEdgeSwipeDetection && c <= t.params.iOSEdgeSwipeThreshold)) {
                                if (w = !0, x = !1, y = !0, A = void 0, K = void 0, t.touches.startX = c, t.touches.startY = d, z = Date.now(), t.allowClick = !0, t.updateContainerSize(), t.swipeDirection = void 0, t.params.threshold > 0 && (D = !1), "touchstart" !== a.type) {
                                    var e = !0;
                                    b(a.target).is(G) && (e = !1), document.activeElement && b(document.activeElement).is(G) && document.activeElement.blur(), e && a.preventDefault()
                                }
                                t.emit("onTouchStart", t, a)
                            }
                        }
                    }
                }, t.onTouchMove = function(a) {
                    if (a.originalEvent && (a = a.originalEvent), !J || "mousemove" !== a.type) {
                        if (a.preventedByNestedSwiper) return t.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(t.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                        if (t.params.onlyExternal) return t.allowClick = !1, void(w && (t.touches.startX = t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.startY = t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, z = Date.now()));
                        if (J && document.activeElement && a.target === document.activeElement && b(a.target).is(G)) return x = !0, void(t.allowClick = !1);
                        if (y && t.emit("onTouchMove", t, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                            if (t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, "undefined" == typeof A) {
                                var c = 180 * Math.atan2(Math.abs(t.touches.currentY - t.touches.startY), Math.abs(t.touches.currentX - t.touches.startX)) / Math.PI;
                                A = t.isHorizontal() ? c > t.params.touchAngle : 90 - c > t.params.touchAngle
                            }
                            if (A && t.emit("onTouchMoveOpposite", t, a), "undefined" == typeof K && t.browser.ieTouch && (t.touches.currentX === t.touches.startX && t.touches.currentY === t.touches.startY || (K = !0)), w) {
                                if (A) return void(w = !1);
                                if (K || !t.browser.ieTouch) {
                                    t.allowClick = !1, t.emit("onSliderMove", t, a), a.preventDefault(), t.params.touchMoveStopPropagation && !t.params.nested && a.stopPropagation(), x || (d.loop && t.fixLoop(), C = t.getWrapperTranslate(), t.setWrapperTransition(0), t.animating && t.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), t.params.autoplay && t.autoplaying && (t.params.autoplayDisableOnInteraction ? t.stopAutoplay() : t.pauseAutoplay()), F = !1, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grabbing", t.container[0].style.cursor = "-moz-grabbin", t.container[0].style.cursor = "grabbing")), x = !0;
                                    var e = t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY;
                                    e *= t.params.touchRatio, t.rtl && (e = -e), t.swipeDirection = e > 0 ? "prev" : "next", B = e + C;
                                    var f = !0;
                                    if (e > 0 && B > t.minTranslate() ? (f = !1, t.params.resistance && (B = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + C + e, t.params.resistanceRatio))) : e < 0 && B < t.maxTranslate() && (f = !1, t.params.resistance && (B = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - C - e, t.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !t.params.allowSwipeToNext && "next" === t.swipeDirection && B < C && (B = C), !t.params.allowSwipeToPrev && "prev" === t.swipeDirection && B > C && (B = C), t.params.followFinger) {
                                        if (t.params.threshold > 0) {
                                            if (!(Math.abs(e) > t.params.threshold || D)) return void(B = C);
                                            if (!D) return D = !0, t.touches.startX = t.touches.currentX, t.touches.startY = t.touches.currentY, B = C, void(t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY)
                                        }(t.params.freeMode || t.params.watchSlidesProgress) && t.updateActiveIndex(), t.params.freeMode && (0 === I.length && I.push({
                                            position: t.touches[t.isHorizontal() ? "startX" : "startY"],
                                            time: z
                                        }), I.push({
                                            position: t.touches[t.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), t.updateProgress(B), t.setWrapperTranslate(B)
                                    }
                                }
                            }
                        }
                    }
                }, t.onTouchEnd = function(a) {
                    if (a.originalEvent && (a = a.originalEvent), y && t.emit("onTouchEnd", t, a), y = !1, w) {
                        t.params.grabCursor && x && w && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab");
                        var c = Date.now(),
                            d = c - z;
                        if (t.allowClick && (t.updateClickedSlide(a), t.emit("onTap", t, a), d < 300 && c - H > 300 && (E && clearTimeout(E), E = setTimeout(function() {
                                t && (t.params.paginationHide && t.paginationContainer.length > 0 && !b(a.target).hasClass(t.params.bulletClass) && t.paginationContainer.toggleClass(t.params.paginationHiddenClass), t.emit("onClick", t, a))
                            }, 300)), d < 300 && c - H < 300 && (E && clearTimeout(E), t.emit("onDoubleTap", t, a))), H = Date.now(), setTimeout(function() {
                                t && (t.allowClick = !0)
                            }, 0), !w || !x || !t.swipeDirection || 0 === t.touches.diff || B === C) return void(w = x = !1);
                        w = x = !1;
                        var e;
                        if (e = t.params.followFinger ? t.rtl ? t.translate : -t.translate : -B, t.params.freeMode) {
                            if (e < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (e > -t.maxTranslate()) return void(t.slides.length < t.snapGrid.length ? t.slideTo(t.snapGrid.length - 1) : t.slideTo(t.slides.length - 1));
                            if (t.params.freeModeMomentum) {
                                if (I.length > 1) {
                                    var f = I.pop(),
                                        g = I.pop(),
                                        h = f.position - g.position,
                                        i = f.time - g.time;
                                    t.velocity = h / i, t.velocity = t.velocity / 2, Math.abs(t.velocity) < t.params.freeModeMinimumVelocity && (t.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                I.length = 0;
                                var j = 1e3 * t.params.freeModeMomentumRatio,
                                    k = t.velocity * j,
                                    l = t.translate + k;
                                t.rtl && (l = -l);
                                var m, n = !1,
                                    o = 20 * Math.abs(t.velocity) * t.params.freeModeMomentumBounceRatio;
                                if (l < t.maxTranslate()) t.params.freeModeMomentumBounce ? (l + t.maxTranslate() < -o && (l = t.maxTranslate() - o), m = t.maxTranslate(), n = !0, F = !0) : l = t.maxTranslate();
                                else if (l > t.minTranslate()) t.params.freeModeMomentumBounce ? (l - t.minTranslate() > o && (l = t.minTranslate() + o), m = t.minTranslate(), n = !0, F = !0) : l = t.minTranslate();
                                else if (t.params.freeModeSticky) {
                                    var p, q = 0;
                                    for (q = 0; q < t.snapGrid.length; q += 1)
                                        if (t.snapGrid[q] > -l) {
                                            p = q;
                                            break
                                        }
                                    l = Math.abs(t.snapGrid[p] - l) < Math.abs(t.snapGrid[p - 1] - l) || "next" === t.swipeDirection ? t.snapGrid[p] : t.snapGrid[p - 1], t.rtl || (l = -l)
                                }
                                if (0 !== t.velocity) j = t.rtl ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity);
                                else if (t.params.freeModeSticky) return void t.slideReset();
                                t.params.freeModeMomentumBounce && n ? (t.updateProgress(m), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating = !0, t.wrapper.transitionEnd(function() {
                                    t && F && (t.emit("onMomentumBounce", t), t.setWrapperTransition(t.params.speed), t.setWrapperTranslate(m), t.wrapper.transitionEnd(function() {
                                        t && t.onTransitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(l), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() {
                                    t && t.onTransitionEnd()
                                }))) : t.updateProgress(l), t.updateActiveIndex()
                            }
                            return void((!t.params.freeModeMomentum || d >= t.params.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex()))
                        }
                        var r, s = 0,
                            u = t.slidesSizesGrid[0];
                        for (r = 0; r < t.slidesGrid.length; r += t.params.slidesPerGroup) "undefined" != typeof t.slidesGrid[r + t.params.slidesPerGroup] ? e >= t.slidesGrid[r] && e < t.slidesGrid[r + t.params.slidesPerGroup] && (s = r, u = t.slidesGrid[r + t.params.slidesPerGroup] - t.slidesGrid[r]) : e >= t.slidesGrid[r] && (s = r, u = t.slidesGrid[t.slidesGrid.length - 1] - t.slidesGrid[t.slidesGrid.length - 2]);
                        var v = (e - t.slidesGrid[s]) / u;
                        if (d > t.params.longSwipesMs) {
                            if (!t.params.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (v >= t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s)), "prev" === t.swipeDirection && (v > 1 - t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s))
                        } else {
                            if (!t.params.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(s + t.params.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(s)
                        }
                    }
                }, t._slideTo = function(a, b) {
                    return t.slideTo(a, b, !0, !0)
                }, t.slideTo = function(a, b, c, d) {
                    "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), a < 0 && (a = 0), t.snapIndex = Math.floor(a / t.params.slidesPerGroup), t.snapIndex >= t.snapGrid.length && (t.snapIndex = t.snapGrid.length - 1);
                    var e = -t.snapGrid[t.snapIndex];
                    t.params.autoplay && t.autoplaying && (d || !t.params.autoplayDisableOnInteraction ? t.pauseAutoplay(b) : t.stopAutoplay()), t.updateProgress(e);
                    for (var f = 0; f < t.slidesGrid.length; f++) - Math.floor(100 * e) >= Math.floor(100 * t.slidesGrid[f]) && (a = f);
                    return !(!t.params.allowSwipeToNext && e < t.translate && e < t.minTranslate()) && (!(!t.params.allowSwipeToPrev && e > t.translate && e > t.maxTranslate() && (t.activeIndex || 0) !== a) && ("undefined" == typeof b && (b = t.params.speed), t.previousIndex = t.activeIndex || 0, t.activeIndex = a, t.rtl && -e === t.translate || !t.rtl && e === t.translate ? (t.params.autoHeight && t.updateAutoHeight(), t.updateClasses(), "slide" !== t.params.effect && t.setWrapperTranslate(e), !1) : (t.updateClasses(), t.onTransitionStart(c), 0 === b ? (t.setWrapperTranslate(e), t.setWrapperTransition(0), t.onTransitionEnd(c)) : (t.setWrapperTranslate(e), t.setWrapperTransition(b), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() {
                        t && t.onTransitionEnd(c)
                    }))), !0)))
                }, t.onTransitionStart = function(a) {
                    "undefined" == typeof a && (a = !0), t.params.autoHeight && t.updateAutoHeight(), t.lazy && t.lazy.onTransitionStart(), a && (t.emit("onTransitionStart", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeStart", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextStart", t) : t.emit("onSlidePrevStart", t)))
                }, t.onTransitionEnd = function(a) {
                    t.animating = !1, t.setWrapperTransition(0), "undefined" == typeof a && (a = !0), t.lazy && t.lazy.onTransitionEnd(), a && (t.emit("onTransitionEnd", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeEnd", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextEnd", t) : t.emit("onSlidePrevEnd", t))), t.params.hashnav && t.hashnav && t.hashnav.setHash()
                }, t.slideNext = function(a, b, c) {
                    if (t.params.loop) {
                        if (t.animating) return !1;
                        t.fixLoop();
                        t.container[0].clientLeft;
                        return t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c)
                    }
                    return t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c)
                }, t._slideNext = function(a) {
                    return t.slideNext(!0, a, !0)
                }, t.slidePrev = function(a, b, c) {
                    if (t.params.loop) {
                        if (t.animating) return !1;
                        t.fixLoop();
                        t.container[0].clientLeft;
                        return t.slideTo(t.activeIndex - 1, b, a, c)
                    }
                    return t.slideTo(t.activeIndex - 1, b, a, c)
                }, t._slidePrev = function(a) {
                    return t.slidePrev(!0, a, !0)
                }, t.slideReset = function(a, b, c) {
                    return t.slideTo(t.activeIndex, b, a)
                }, t.setWrapperTransition = function(a, b) {
                    t.wrapper.transition(a), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTransition(a), t.params.parallax && t.parallax && t.parallax.setTransition(a), t.params.scrollbar && t.scrollbar && t.scrollbar.setTransition(a), t.params.control && t.controller && t.controller.setTransition(a, b), t.emit("onSetTransition", t, a)
                }, t.setWrapperTranslate = function(a, b, c) {
                    var d = 0,
                        f = 0,
                        g = 0;
                    t.isHorizontal() ? d = t.rtl ? -a : a : f = a, t.params.roundLengths && (d = e(d), f = e(f)), t.params.virtualTranslate || (t.support.transforms3d ? t.wrapper.transform("translate3d(" + d + "px, " + f + "px, " + g + "px)") : t.wrapper.transform("translate(" + d + "px, " + f + "px)")), t.translate = t.isHorizontal() ? d : f;
                    var h, i = t.maxTranslate() - t.minTranslate();
                    h = 0 === i ? 0 : (a - t.minTranslate()) / i, h !== t.progress && t.updateProgress(a), b && t.updateActiveIndex(), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTranslate(t.translate), t.params.parallax && t.parallax && t.parallax.setTranslate(t.translate), t.params.scrollbar && t.scrollbar && t.scrollbar.setTranslate(t.translate), t.params.control && t.controller && t.controller.setTranslate(t.translate, c), t.emit("onSetTranslate", t, t.translate)
                }, t.getTranslate = function(a, b) {
                    var c, d, e, f;
                    return "undefined" == typeof b && (b = "x"), t.params.virtualTranslate ? t.rtl ? -t.translate : t.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) {
                        return a.replace(",", ".")
                    }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), t.rtl && d && (d = -d), d || 0)
                }, t.getWrapperTranslate = function(a) {
                    return "undefined" == typeof a && (a = t.isHorizontal() ? "x" : "y"), t.getTranslate(t.wrapper[0], a)
                }, t.observers = [], t.initObservers = function() {
                    if (t.params.observeParents)
                        for (var a = t.container.parents(), b = 0; b < a.length; b++) h(a[b]);
                    h(t.container[0], {
                        childList: !1
                    }), h(t.wrapper[0], {
                        attributes: !1
                    })
                }, t.disconnectObservers = function() {
                    for (var a = 0; a < t.observers.length; a++) t.observers[a].disconnect();
                    t.observers = []
                }, t.createLoop = function() {
                    t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove();
                    var a = t.wrapper.children("." + t.params.slideClass);
                    "auto" !== t.params.slidesPerView || t.params.loopedSlides || (t.params.loopedSlides = a.length), t.loopedSlides = parseInt(t.params.loopedSlides || t.params.slidesPerView, 10), t.loopedSlides = t.loopedSlides + t.params.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                    var c, d = [],
                        e = [];
                    for (a.each(function(c, f) {
                            var g = b(this);
                            c < t.loopedSlides && e.push(f), c < a.length && c >= a.length - t.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c)
                        }), c = 0; c < e.length; c++) t.wrapper.append(b(e[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass));
                    for (c = d.length - 1; c >= 0; c--) t.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass))
                }, t.destroyLoop = function() {
                    t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove(), t.slides.removeAttr("data-swiper-slide-index")
                }, t.reLoop = function(a) {
                    var b = t.activeIndex - t.loopedSlides;
                    t.destroyLoop(), t.createLoop(), t.updateSlidesSize(), a && t.slideTo(b + t.loopedSlides, 0, !1)
                }, t.fixLoop = function() {
                    var a;
                    t.activeIndex < t.loopedSlides ? (a = t.slides.length - 3 * t.loopedSlides + t.activeIndex, a += t.loopedSlides, t.slideTo(a, 0, !1, !0)) : ("auto" === t.params.slidesPerView && t.activeIndex >= 2 * t.loopedSlides || t.activeIndex > t.slides.length - 2 * t.params.slidesPerView) && (a = -t.slides.length + t.activeIndex + t.loopedSlides, a += t.loopedSlides, t.slideTo(a, 0, !1, !0))
                }, t.appendSlide = function(a) {
                    if (t.params.loop && t.destroyLoop(), "object" == typeof a && a.length)
                        for (var b = 0; b < a.length; b++) a[b] && t.wrapper.append(a[b]);
                    else t.wrapper.append(a);
                    t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0)
                }, t.prependSlide = function(a) {
                    t.params.loop && t.destroyLoop();
                    var b = t.activeIndex + 1;
                    if ("object" == typeof a && a.length) {
                        for (var c = 0; c < a.length; c++) a[c] && t.wrapper.prepend(a[c]);
                        b = t.activeIndex + a.length
                    } else t.wrapper.prepend(a);
                    t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.slideTo(b, 0, !1)
                }, t.removeSlide = function(a) {
                    t.params.loop && (t.destroyLoop(), t.slides = t.wrapper.children("." + t.params.slideClass));
                    var b, c = t.activeIndex;
                    if ("object" == typeof a && a.length) {
                        for (var d = 0; d < a.length; d++) b = a[d], t.slides[b] && t.slides.eq(b).remove(), b < c && c--;
                        c = Math.max(c, 0)
                    } else b = a, t.slides[b] && t.slides.eq(b).remove(), b < c && c--, c = Math.max(c, 0);
                    t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.params.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
                }, t.removeAllSlides = function() {
                    for (var a = [], b = 0; b < t.slides.length; b++) a.push(b);
                    t.removeSlide(a)
                }, t.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var a = 0; a < t.slides.length; a++) {
                                var b = t.slides.eq(a),
                                    c = b[0].swiperSlideOffset,
                                    d = -c;
                                t.params.virtualTranslate || (d -= t.translate);
                                var e = 0;
                                t.isHorizontal() || (e = d, d = 0);
                                var f = t.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                                b.css({
                                    opacity: f
                                }).transform("translate3d(" + d + "px, " + e + "px, 0px)")
                            }
                        },
                        setTransition: function(a) {
                            if (t.slides.transition(a), t.params.virtualTranslate && 0 !== a) {
                                var b = !1;
                                t.slides.transitionEnd(function() {
                                    if (!b && t) {
                                        b = !0, t.animating = !1;
                                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++) t.wrapper.trigger(a[c])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var a = 0; a < t.slides.length; a++) {
                                var c = t.slides.eq(a),
                                    d = c[0].progress;
                                t.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                                var e = c[0].swiperSlideOffset,
                                    f = -180 * d,
                                    g = f,
                                    h = 0,
                                    i = -e,
                                    j = 0;
                                if (t.isHorizontal() ? t.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + t.slides.length, t.params.flip.slideShadows) {
                                    var k = t.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                                        l = t.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                    0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0))
                                }
                                c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)")
                            }
                        },
                        setTransition: function(a) {
                            if (t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.virtualTranslate && 0 !== a) {
                                var c = !1;
                                t.slides.eq(t.activeIndex).transitionEnd(function() {
                                    if (!c && t && b(this).hasClass(t.params.slideActiveClass)) {
                                        c = !0, t.animating = !1;
                                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < a.length; d++) t.wrapper.trigger(a[d])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var a, c = 0;
                            t.params.cube.shadow && (t.isHorizontal() ? (a = t.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.wrapper.append(a)), a.css({
                                height: t.width + "px"
                            })) : (a = t.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.container.append(a))));
                            for (var d = 0; d < t.slides.length; d++) {
                                var e = t.slides.eq(d),
                                    f = 90 * d,
                                    g = Math.floor(f / 360);
                                t.rtl && (f = -f, g = Math.floor(-f / 360));
                                var h = Math.max(Math.min(e[0].progress, 1), -1),
                                    i = 0,
                                    j = 0,
                                    k = 0;
                                d % 4 === 0 ? (i = 4 * -g * t.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * t.size) : (d - 2) % 4 === 0 ? (i = t.size + 4 * g * t.size, k = t.size) : (d - 3) % 4 === 0 && (i = -t.size, k = 3 * t.size + 4 * t.size * g), t.rtl && (i = -i), t.isHorizontal() || (j = i, i = 0);
                                var l = "rotateX(" + (t.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (t.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                                if (h <= 1 && h > -1 && (c = 90 * d + 90 * h, t.rtl && (c = 90 * -d - 90 * h)), e.transform(l), t.params.cube.slideShadows) {
                                    var m = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                        n = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0))
                                }
                            }
                            if (t.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + t.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + t.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + t.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + t.size / 2 + "px"
                                }), t.params.cube.shadow)
                                if (t.isHorizontal()) a.transform("translate3d(0px, " + (t.width / 2 + t.params.cube.shadowOffset) + "px, " + -t.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + t.params.cube.shadowScale + ")");
                                else {
                                    var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                                        p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2),
                                        q = t.params.cube.shadowScale,
                                        r = t.params.cube.shadowScale / p,
                                        s = t.params.cube.shadowOffset;
                                    a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (t.height / 2 + s) + "px, " + -t.height / 2 / r + "px) rotateX(-90deg)")
                                }
                            var u = t.isSafari || t.isUiWebView ? -t.size / 2 : 0;
                            t.wrapper.transform("translate3d(0px,0," + u + "px) rotateX(" + (t.isHorizontal() ? 0 : c) + "deg) rotateY(" + (t.isHorizontal() ? -c : 0) + "deg)")
                        },
                        setTransition: function(a) {
                            t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.cube.shadow && !t.isHorizontal() && t.container.find(".swiper-cube-shadow").transition(a)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var a = t.translate, c = t.isHorizontal() ? -a + t.width / 2 : -a + t.height / 2, d = t.isHorizontal() ? t.params.coverflow.rotate : -t.params.coverflow.rotate, e = t.params.coverflow.depth, f = 0, g = t.slides.length; f < g; f++) {
                                var h = t.slides.eq(f),
                                    i = t.slidesSizesGrid[f],
                                    j = h[0].swiperSlideOffset,
                                    k = (c - j - i / 2) / i * t.params.coverflow.modifier,
                                    l = t.isHorizontal() ? d * k : 0,
                                    m = t.isHorizontal() ? 0 : d * k,
                                    n = -e * Math.abs(k),
                                    o = t.isHorizontal() ? 0 : t.params.coverflow.stretch * k,
                                    p = t.isHorizontal() ? t.params.coverflow.stretch * k : 0;
                                Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                                var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                                if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, t.params.coverflow.slideShadows) {
                                    var r = t.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                        s = t.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                    0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0)
                                }
                            }
                            if (t.browser.ie) {
                                var u = t.wrapper[0].style;
                                u.perspectiveOrigin = c + "px 50%"
                            }
                        },
                        setTransition: function(a) {
                            t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                        }
                    }
                }, t.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(a, c) {
                        if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== t.slides.length)) {
                            var d = t.slides.eq(a),
                                e = d.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !d.hasClass("swiper-lazy") || d.hasClass("swiper-lazy-loaded") || d.hasClass("swiper-lazy-loading") || (e = e.add(d[0])), 0 !== e.length && e.each(function() {
                                var a = b(this);
                                a.addClass("swiper-lazy-loading");
                                var e = a.attr("data-background"),
                                    f = a.attr("data-src"),
                                    g = a.attr("data-srcset");
                                t.loadImage(a[0], f || e, g, !1, function() {
                                    if (e ? (a.css("background-image", 'url("' + e + '")'), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), a.removeAttr("data-srcset")), f && (a.attr("src", f), a.removeAttr("data-src"))), a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), d.find(".swiper-lazy-preloader, .preloader").remove(), t.params.loop && c) {
                                        var b = d.attr("data-swiper-slide-index");
                                        if (d.hasClass(t.params.slideDuplicateClass)) {
                                            var h = t.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + t.params.slideDuplicateClass + ")");
                                            t.lazy.loadImageInSlide(h.index(), !1)
                                        } else {
                                            var i = t.wrapper.children("." + t.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                                            t.lazy.loadImageInSlide(i.index(), !1)
                                        }
                                    }
                                    t.emit("onLazyImageReady", t, d[0], a[0])
                                }), t.emit("onLazyImageLoad", t, d[0], a[0])
                            })
                        }
                    },
                    load: function() {
                        var a;
                        if (t.params.watchSlidesVisibility) t.wrapper.children("." + t.params.slideVisibleClass).each(function() {
                            t.lazy.loadImageInSlide(b(this).index())
                        });
                        else if (t.params.slidesPerView > 1)
                            for (a = t.activeIndex; a < t.activeIndex + t.params.slidesPerView; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                        else t.lazy.loadImageInSlide(t.activeIndex);
                        if (t.params.lazyLoadingInPrevNext)
                            if (t.params.slidesPerView > 1 || t.params.lazyLoadingInPrevNextAmount && t.params.lazyLoadingInPrevNextAmount > 1) {
                                var c = t.params.lazyLoadingInPrevNextAmount,
                                    d = t.params.slidesPerView,
                                    e = Math.min(t.activeIndex + d + Math.max(c, d), t.slides.length),
                                    f = Math.max(t.activeIndex - Math.max(d, c), 0);
                                for (a = t.activeIndex + t.params.slidesPerView; a < e; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                                for (a = f; a < t.activeIndex; a++) t.slides[a] && t.lazy.loadImageInSlide(a)
                            } else {
                                var g = t.wrapper.children("." + t.params.slideNextClass);
                                g.length > 0 && t.lazy.loadImageInSlide(g.index());
                                var h = t.wrapper.children("." + t.params.slidePrevClass);
                                h.length > 0 && t.lazy.loadImageInSlide(h.index())
                            }
                    },
                    onTransitionStart: function() {
                        t.params.lazyLoading && (t.params.lazyLoadingOnTransitionStart || !t.params.lazyLoadingOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load()
                    },
                    onTransitionEnd: function() {
                        t.params.lazyLoading && !t.params.lazyLoadingOnTransitionStart && t.lazy.load()
                    }
                }, t.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(a) {
                        var b = t.scrollbar,
                            c = t.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY,
                            d = c - b.track.offset()[t.isHorizontal() ? "left" : "top"] - b.dragSize / 2,
                            e = -t.minTranslate() * b.moveDivider,
                            f = -t.maxTranslate() * b.moveDivider;
                        d < e ? d = e : d > f && (d = f), d = -d / b.moveDivider, t.updateProgress(d), t.setWrapperTranslate(d, !0)
                    },
                    dragStart: function(a) {
                        var b = t.scrollbar;
                        b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), t.params.scrollbarHide && b.track.css("opacity", 1), t.wrapper.transition(100), b.drag.transition(100), t.emit("onScrollbarDragStart", t)
                    },
                    dragMove: function(a) {
                        var b = t.scrollbar;
                        b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), t.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), t.emit("onScrollbarDragMove", t))
                    },
                    dragEnd: function(a) {
                        var b = t.scrollbar;
                        b.isTouched && (b.isTouched = !1, t.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function() {
                            b.track.css("opacity", 0), b.track.transition(400)
                        }, 1e3)), t.emit("onScrollbarDragEnd", t), t.params.scrollbarSnapOnRelease && t.slideReset())
                    },
                    enableDraggable: function() {
                        var a = t.scrollbar,
                            c = t.support.touch ? a.track : document;
                        b(a.track).on(t.touchEvents.start, a.dragStart), b(c).on(t.touchEvents.move, a.dragMove), b(c).on(t.touchEvents.end, a.dragEnd)
                    },
                    disableDraggable: function() {
                        var a = t.scrollbar,
                            c = t.support.touch ? a.track : document;
                        b(a.track).off(t.touchEvents.start, a.dragStart), b(c).off(t.touchEvents.move, a.dragMove), b(c).off(t.touchEvents.end, a.dragEnd)
                    },
                    set: function() {
                        if (t.params.scrollbar) {
                            var a = t.scrollbar;
                            a.track = b(t.params.scrollbar), t.params.uniqueNavElements && "string" == typeof t.params.scrollbar && a.track.length > 1 && 1 === t.container.find(t.params.scrollbar).length && (a.track = t.container.find(t.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = t.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = t.size / t.virtualSize, a.moveDivider = a.divider * (a.trackSize / t.size), a.dragSize = a.trackSize * a.divider, t.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", t.params.scrollbarHide && (a.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (t.params.scrollbar) {
                            var a, b = t.scrollbar,
                                c = (t.translate || 0, b.dragSize);
                            a = (b.trackSize - b.dragSize) * t.progress, t.rtl && t.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : a < 0 ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), t.isHorizontal() ? (t.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (t.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), t.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
                                b.track[0].style.opacity = 0, b.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(a) {
                        t.params.scrollbar && t.scrollbar.drag.transition(a)
                    }
                }, t.controller = {
                    LinearSpline: function(a, b) {
                        this.x = a, this.y = b, this.lastIndex = a.length - 1;
                        var c, d;
                        this.x.length;
                        this.interpolate = function(a) {
                            return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0
                        };
                        var e = function() {
                            var a, b, c;
                            return function(d, e) {
                                for (b = -1, a = d.length; a - b > 1;) d[c = a + b >> 1] <= e ? b = c : a = c;
                                return a
                            }
                        }()
                    },
                    getInterpolateFunction: function(a) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new t.controller.LinearSpline(t.slidesGrid, a.slidesGrid) : new t.controller.LinearSpline(t.snapGrid, a.snapGrid))
                    },
                    setTranslate: function(a, b) {
                        function d(b) {
                            a = b.rtl && "horizontal" === b.params.direction ? -t.translate : t.translate, "slide" === t.params.controlBy && (t.controller.getInterpolateFunction(b), f = -t.controller.spline.interpolate(-a)), f && "container" !== t.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (t.maxTranslate() - t.minTranslate()), f = (a - t.minTranslate()) * e + b.minTranslate()), t.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, t), b.updateActiveIndex()
                        }
                        var e, f, g = t.params.control;
                        if (t.isArray(g))
                            for (var h = 0; h < g.length; h++) g[h] !== b && g[h] instanceof c && d(g[h]);
                        else g instanceof c && b !== g && d(g)
                    },
                    setTransition: function(a, b) {
                        function d(b) {
                            b.setWrapperTransition(a, t), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() {
                                f && (b.params.loop && "slide" === t.params.controlBy && b.fixLoop(), b.onTransitionEnd())
                            }))
                        }
                        var e, f = t.params.control;
                        if (t.isArray(f))
                            for (e = 0; e < f.length; e++) f[e] !== b && f[e] instanceof c && d(f[e]);
                        else f instanceof c && b !== f && d(f)
                    }
                }, t.hashnav = {
                    init: function() {
                        if (t.params.hashnav) {
                            t.hashnav.initialized = !0;
                            var a = document.location.hash.replace("#", "");
                            if (a)
                                for (var b = 0, c = 0, d = t.slides.length; c < d; c++) {
                                    var e = t.slides.eq(c),
                                        f = e.attr("data-hash");
                                    if (f === a && !e.hasClass(t.params.slideDuplicateClass)) {
                                        var g = e.index();
                                        t.slideTo(g, b, t.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        t.hashnav.initialized && t.params.hashnav && (document.location.hash = t.slides.eq(t.activeIndex).attr("data-hash") || "")
                    }
                }, t.disableKeyboardControl = function() {
                    t.params.keyboardControl = !1, b(document).off("keydown", i)
                }, t.enableKeyboardControl = function() {
                    t.params.keyboardControl = !0, b(document).on("keydown", i)
                }, t.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, t.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), t.mousewheel.event = "wheel"
                } catch (L) {
                    (window.WheelEvent || t.container[0] && "wheel" in t.container[0]) && (t.mousewheel.event = "wheel")
                }!t.mousewheel.event && window.WheelEvent, t.mousewheel.event || void 0 === document.onmousewheel || (t.mousewheel.event = "mousewheel"), t.mousewheel.event || (t.mousewheel.event = "DOMMouseScroll")
            }
            t.disableMousewheelControl = function() {
                return !!t.mousewheel.event && (t.container.off(t.mousewheel.event, j), !0)
            }, t.enableMousewheelControl = function() {
                return !!t.mousewheel.event && (t.container.on(t.mousewheel.event, j), !0)
            }, t.parallax = {
                setTranslate: function() {
                    t.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        k(this, t.progress)
                    }), t.slides.each(function() {
                        var a = b(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var b = Math.min(Math.max(a[0].progress, -1), 1);
                            k(this, b)
                        })
                    })
                },
                setTransition: function(a) {
                    "undefined" == typeof a && (a = t.params.speed), t.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var c = b(this),
                            d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (d = 0), c.transition(d)
                    })
                }
            }, t._plugins = [];
            for (var M in t.plugins) {
                var N = t.plugins[M](t, t.params[M]);
                N && t._plugins.push(N)
            }
            return t.callPlugins = function(a) {
                for (var b = 0; b < t._plugins.length; b++) a in t._plugins[b] && t._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, t.emitterEventListeners = {}, t.emit = function(a) {
                t.params[a] && t.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var b;
                if (t.emitterEventListeners[a])
                    for (b = 0; b < t.emitterEventListeners[a].length; b++) t.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                t.callPlugins && t.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, t.on = function(a, b) {
                return a = l(a), t.emitterEventListeners[a] || (t.emitterEventListeners[a] = []), t.emitterEventListeners[a].push(b), t
            }, t.off = function(a, b) {
                var c;
                if (a = l(a), "undefined" == typeof b) return t.emitterEventListeners[a] = [], t;
                if (t.emitterEventListeners[a] && 0 !== t.emitterEventListeners[a].length) {
                    for (c = 0; c < t.emitterEventListeners[a].length; c++) t.emitterEventListeners[a][c] === b && t.emitterEventListeners[a].splice(c, 1);
                    return t
                }
            }, t.once = function(a, b) {
                a = l(a);
                var c = function() {
                    b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), t.off(a, c)
                };
                return t.on(a, c), t
            }, t.a11y = {
                makeFocusable: function(a) {
                    return a.attr("tabIndex", "0"), a
                },
                addRole: function(a, b) {
                    return a.attr("role", b), a
                },
                addLabel: function(a, b) {
                    return a.attr("aria-label", b), a
                },
                disable: function(a) {
                    return a.attr("aria-disabled", !0), a
                },
                enable: function(a) {
                    return a.attr("aria-disabled", !1), a
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (b(a.target).is(t.params.nextButton) ? (t.onClickNext(a), t.isEnd ? t.a11y.notify(t.params.lastSlideMessage) : t.a11y.notify(t.params.nextSlideMessage)) : b(a.target).is(t.params.prevButton) && (t.onClickPrev(a), t.isBeginning ? t.a11y.notify(t.params.firstSlideMessage) : t.a11y.notify(t.params.prevSlideMessage)), b(a.target).is("." + t.params.bulletClass) && b(a.target)[0].click())
                },
                liveRegion: b('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(a) {
                    var b = t.a11y.liveRegion;
                    0 !== b.length && (b.html(""), b.html(a))
                },
                init: function() {
                    t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.a11y.makeFocusable(t.nextButton), t.a11y.addRole(t.nextButton, "button"), t.a11y.addLabel(t.nextButton, t.params.nextSlideMessage)), t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.a11y.makeFocusable(t.prevButton), t.a11y.addRole(t.prevButton, "button"), t.a11y.addLabel(t.prevButton, t.params.prevSlideMessage)), b(t.container).append(t.a11y.liveRegion)
                },
                initPagination: function() {
                    t.params.pagination && t.params.paginationClickable && t.bullets && t.bullets.length && t.bullets.each(function() {
                        var a = b(this);
                        t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function() {
                    t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove()
                }
            }, t.init = function() {
                t.params.loop && t.createLoop(), t.updateContainerSize(), t.updateSlidesSize(), t.updatePagination(), t.params.scrollbar && t.scrollbar && (t.scrollbar.set(), t.params.scrollbarDraggable && t.scrollbar.enableDraggable()), "slide" !== t.params.effect && t.effects[t.params.effect] && (t.params.loop || t.updateProgress(), t.effects[t.params.effect].setTranslate()), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : (t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), 0 === t.params.initialSlide && (t.parallax && t.params.parallax && t.parallax.setTranslate(), t.lazy && t.params.lazyLoading && (t.lazy.load(), t.lazy.initialImageLoaded = !0))), t.attachEvents(), t.params.observer && t.support.observer && t.initObservers(), t.params.preloadImages && !t.params.lazyLoading && t.preloadImages(), t.params.autoplay && t.startAutoplay(), t.params.keyboardControl && t.enableKeyboardControl && t.enableKeyboardControl(), t.params.mousewheelControl && t.enableMousewheelControl && t.enableMousewheelControl(), t.params.hashnav && t.hashnav && t.hashnav.init(), t.params.a11y && t.a11y && t.a11y.init(), t.emit("onInit", t)
            }, t.cleanupStyles = function() {
                t.container.removeClass(t.classNames.join(" ")).removeAttr("style"), t.wrapper.removeAttr("style"), t.slides && t.slides.length && t.slides.removeClass([t.params.slideVisibleClass, t.params.slideActiveClass, t.params.slideNextClass, t.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), t.paginationContainer && t.paginationContainer.length && t.paginationContainer.removeClass(t.params.paginationHiddenClass), t.bullets && t.bullets.length && t.bullets.removeClass(t.params.bulletActiveClass), t.params.prevButton && b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), t.params.nextButton && b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), t.params.scrollbar && t.scrollbar && (t.scrollbar.track && t.scrollbar.track.length && t.scrollbar.track.removeAttr("style"), t.scrollbar.drag && t.scrollbar.drag.length && t.scrollbar.drag.removeAttr("style"))
            }, t.destroy = function(a, b) {
                t.detachEvents(), t.stopAutoplay(), t.params.scrollbar && t.scrollbar && t.params.scrollbarDraggable && t.scrollbar.disableDraggable(), t.params.loop && t.destroyLoop(), b && t.cleanupStyles(), t.disconnectObservers(), t.params.keyboardControl && t.disableKeyboardControl && t.disableKeyboardControl(), t.params.mousewheelControl && t.disableMousewheelControl && t.disableMousewheelControl(), t.params.a11y && t.a11y && t.a11y.destroy(), t.emit("onDestroy"), a !== !1 && (t = null)
            }, t.init(), t
        }
    };
    c.prototype = {
        isSafari: function() {
            var a = navigator.userAgent.toLowerCase();
            return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var a = navigator.userAgent,
                b = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = a.match(/(iPad).*OS\s([\d_]+)/),
                d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                e = !c && a.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: c || e || d,
                android: b
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var a = document.createElement("div").style;
                return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
            }(),
            flexbox: function() {
                for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)
                    if (b[c] in a) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var d = ["jQuery", "Zepto", "Dom7"], e = 0; e < d.length; e++) window[d[e]] && a(window[d[e]]);
    var f;
    f = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, f && ("transitionEnd" in f.fn || (f.fn.transitionEnd = function(a) {
        function b(f) {
            if (f.target === this)
                for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
        }
        var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            e = this;
        if (a)
            for (c = 0; c < d.length; c++) e.on(d[c], b);
        return this
    }), "transform" in f.fn || (f.fn.transform = function(a) {
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
        }
        return this
    }), "transition" in f.fn || (f.fn.transition = function(a) {
        "string" != typeof a && (a += "ms");
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
        }
        return this
    })), window.Swiper = c
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    b.prototype = {
        constructor: b,
        init: function() {
            var a = this;
            a.timeout = setTimeout(function() {
                for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
                a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
            }, a.startDelay)
        },
        build: function() {
            var b = this;
            if (this.showCursor === !0 && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                b.strings = [], this.stringsElement.hide();
                var c = this.stringsElement.find("p");
                a.each(c, function(c, d) {
                    b.strings.push(a(d).html())
                })
            }
            this.init()
        },
        typewrite: function(a, b) {
            if (this.stop !== !0) {
                var c = Math.round(70 * Math.random()) + this.typeSpeed,
                    d = this;
                d.timeout = setTimeout(function() {
                    var c = 0,
                        e = a.substr(b);
                    if ("^" === e.charAt(0)) {
                        var f = 1;
                        /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
                    }
                    if ("html" === d.contentType) {
                        var g = a.substr(b).charAt(0);
                        if ("<" === g || "&" === g) {
                            var h = "",
                                i = "";
                            for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !== i;) h += a.substr(b).charAt(0), b++;
                            b++, h += i
                        }
                    }
                    d.timeout = setTimeout(function() {
                        if (b === a.length) {
                            if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, d.loop === !1 || d.curLoop === d.loopCount)) return;
                            d.timeout = setTimeout(function() {
                                d.backspace(a, b)
                            }, d.backDelay)
                        } else {
                            0 === b && d.options.preStringTyped(d.arrayPos);
                            var c = a.substr(0, b + 1);
                            d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(c) : "html" === d.contentType ? d.el.html(c) : d.el.text(c), b++, d.typewrite(a, b)
                        }
                    }, c)
                }, c)
            }
        },
        backspace: function(a, b) {
            if (this.stop !== !0) {
                var c = Math.round(70 * Math.random()) + this.backSpeed,
                    d = this;
                d.timeout = setTimeout(function() {
                    if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
                        for (var c = "";
                            "<" !== a.substr(b).charAt(0);) c -= a.substr(b).charAt(0), b--;
                        b--, c += "<"
                    }
                    var e = a.substr(0, b);
                    d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) : "html" === d.contentType ? d.el.html(e) : d.el.text(e), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)), d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
                }, c)
            }
        },
        shuffleArray: function(a) {
            var b, c, d = a.length;
            if (d)
                for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
            return a
        },
        reset: function() {
            var a = this;
            clearInterval(a.timeout);
            var b = this.el.attr("id");
            this.el.after('<span id="' + b + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), a.options.resetCallback()
        }
    }, a.fn.typed = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("typed"),
                f = "object" == typeof c && c;
            e || d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery), jQuery(document).ready(function() {
    function a(a) {
        $cart = $(".shopping-cart"), productId = a.attr("product-id"), product_title = a.find(".product-title").text(), product_price = a.find(".product-price").text(), product_link = a.find(".view-details").attr("href"), product_img = a.find(".product-thumbnail img").attr("src");
        var b = "<li>";
        b += '<a href="' + product_link + '"><img src="' + product_img + '" class="img-responsive product-img"></a>', b += '<div class="product-details">', b += '<p class="product-title clearfix"><a href="' + product_link + '">' + product_title + "</a></p>", b += '<div class="product-price clearfix">' + product_price + "</div>", b += "</div>", b += "</li>", $cart.find(".dropdown-wrap").prepend(b), badge = $cart.find(".badge"), badge.text(parseInt(badge.text()) + 1)
    }

    function b(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    alignVertical(), heightCenter(), stick(), $(".shopping-cart .dropdown-menu a").click(function() {
        window.location = $(this).attr("href")
    }), $(".shopping-cart .dropdown-menu").click(function() {
        return !1
    }), $('[data-toggle="tooltip"]').tooltip(), $("#logos").length && $("#logos").owlCarousel({
        items: 7,
        loop: !1,
        nav: !1,
        margin: 40,
        dots: !1,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1e3: {
                items: 7
            }
        }
    }), $(".product-images-carousel").owlCarousel({
        items: 3,
        loop: !1,
        nav: !1,
        margin: 20,
        dots: !1,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    }), $("#related-products").owlCarousel({
        items: 3,
        loop: !1,
        nav: !0,
        margin: 20,
        dots: !1,
        navText: ['<i class="lil-navigate_before"></i>', '<i class="lil-navigate_next"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), $("[slim-scroll]").slimScroll({
        size: "5px"
    }), $(".rating-stars").length && (rating = $(".rating-stars").data("rating"), readOnly = $(".rating-stars").attr("readonly"), $(".rating-stars").starrr({
        readOnly: readOnly,
        rating: rating,
        fullClass: "lil-star",
        emptyClass: "lil-star_outline"
    }), $(".rating-stars").on("starrr:change", function(a, b) {
        $(a.target).attr("data-rating", b), $('input[name="rating"]').val(b)
    })), $(".fancybox").length && $(".fancybox").fancybox({
        padding: 0,
        openEffect: "elastic"
    }), $(".add-to-cart:not(.added)").on("click", function() {
        if (!$(this).hasClass("added")) {
            var b = $(".shopping-cart"),
                c = $(this).parents(".product"),
                d = c.find("img").eq(0);
            if (d) {
                var e = d.clone().offset({
                    top: d.offset().top + 150,
                    left: d.offset().left + 150
                }).css({
                    opacity: ".9",
                    position: "absolute",
                    height: "50px",
                    width: "50px",
                    "z-index": "999999",
                    "border-radius": "50%"
                }).appendTo($("body")).animate({
                    top: b.offset().top + 12,
                    left: b.offset().left + 12,
                    width: 75,
                    height: 75
                }, 1e3, "easeInOutExpo");
                setTimeout(function() {
                    b.effect("shake", {
                        times: 2
                    }, 400, a(c))
                }, 1500), e.animate({
                    width: 0,
                    height: 0
                }, function() {
                    $(this).detach()
                })
            }
            $(this).addClass("added"), $(this).parent().attr("data-original-title", "Added")
        }
    }), $('.quantity input[type="button"]').on("click", function() {
        qty = $(this).parent().find("input.qty"), qtyVal = parseInt(qty.val()), min = qty.attr("min") ? parseInt(qty.attr("min")) : 1, max = qty.attr("max") ? parseInt(qty.attr("max")) : null, step = qty.attr("step") ? parseInt(qty.attr("step")) : 1, $(this).hasClass("plus") && (null == max || qtyVal < max) ? qty.val(qtyVal + step) : $(this).hasClass("minus") && qtyVal > min && qty.val(qtyVal - step)
    });
    var c = $(".masonry").imagesLoaded(function() {
        c.isotope({
            isInitLayout: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            layoutMode: "masonry",
            itemSelector: ".product"
        }), alignVertical(), heightCenter()
    });
    $(".products-filter a").click(function(a) {
        a.preventDefault();
        var b = $(this).attr("data-filter");
        $(".products-filter li").removeClass("active"), $(this).parent().addClass("active"), $(".masonry").isotope({
            filter: b
        })
    }), $(".go-to-top").click(function(a) {
        a.preventDefault(), $("html,body").animate({
            scrollTop: 0
        }, 350)
    }), $("#map").length && google.maps.event.addDomListener(window, "load", initializeMap("#map")), $(".autotype").length && $(".autotype").typed({
        strings: ["Hello", "Merhaba", "Ħello", "Salü", "Hallo", "Halito", "مرحبا", "Hallå"],
        typeSpeed: 20,
        loop: !0
    }), $("#filter-slider").length && (values = $("#filter-slider").data("values").split(","), max = $("#filter-slider").data("max"), min = $("#filter-slider").data("min"), $("#filter-slider").slider({
        min: min,
        max: max,
        orientation: "horizontal",
        range: !0,
        values: [values[0], values[1]],
        slide: function(a, b) {
            $("#amount-slider > span").html("$" + b.values[0] + " — $" + b.values[1]), $("input#price").val(b.values[0] + "," + b.values[1])
        }
    })), $("[data-slide-toggle]").on("click", function(a) {
        a.preventDefault(), $target = $($(this).data("slide-toggle")), parent = $(this).attr("data-parent"),
            parent && $(this).parents(parent).find("[data-slide-toggle]").each(function(a, b) {
                $($(b).data("slide-toggle")).slideUp()
            }), $target.slideToggle()
    }), $(".checkbox[data-slide-toggle], .radio[data-slide-toggle]").on("click", function(a) {
        query = $(this).hasClass("checkbox") ? "checkbox" : "radio", $input = $(this).parent().find('>input[type="' + query + '"]'), "radio" == query && $('[name="' + $input.attr("name") + '"]').attr("checked", !1).prop("checked", !1), $input.attr("checked") ? $input.attr("checked", !1).prop("checked", !1) : $input.attr("checked", !0).prop("checked", !0)
    });
    new Swiper(".swiper-container", {
        loop: !0,
        effect: "fade",
        parallax: !0,
        autoplay: 3e3,
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    });
    $(".list-select .inner-select").hover(function() {
        $(this).addClass("hover"), $(this).children().eq(0).addClass("hover"), $(this).find("ul").stop().slideToggle(100)
    }, function() {
        $(this).removeClass("hover"), $(this).children().eq(0).removeClass("hover"), $(this).find("ul").stop().slideToggle(100)
    }), $(".list-select ul a").on("click", function() {
        $(this).parents("ul").find("a").removeClass("active"), $(this).addClass("active"), $lang = $(this).html(), $(this).parents(".list-select").find(".selected").html($lang)
    }), $('.navbar [data-toggle="dropdown"]:not(.li-icon)').hover(function(a) {
        a.preventDefault(), "none" == $(".navbar-toggle").css("display") && ($(this).parents(".nav").find(".open").removeClass("open"), $(this).parent().addClass("open"))
    });
    var d = $(".instagram ul>li").length;
    d && setInterval(function() {
        var a = b(1, d);
        $(".instagram ul>li").removeClass("active"), $(".instagram ul>li:eq(" + a + ")").addClass("active")
    }, 1e3)
}), $(window).scroll(function() {
    stick(), $(this).scrollTop() > 300 ? $(".go-to-top").addClass("visible") : $(".go-to-top").removeClass("visible")
}), $(window).resize(function() {
    alignVertical(), heightCenter()
});