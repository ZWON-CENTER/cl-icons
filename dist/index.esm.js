import * as React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Arrowleft = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M5.542 10.5 2.042 7l3.5-3.5M11.958 7H2.042" })); };

var Arrowright = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M2.042 7h9.916M8.458 3.5l3.5 3.5-3.5 3.5" })); };

var Calendar = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M4.667 1.167V3.5M9.333 1.167V3.5M11.083 2.333H2.917c-.645 0-1.167.523-1.167 1.167v8.167c0 .644.522 1.166 1.167 1.166h8.166c.645 0 1.167-.522 1.167-1.166V3.5c0-.644-.522-1.167-1.167-1.167M1.75 5.833h10.5M4.667 8.167h.006M7 8.167h.007M9.333 8.167h.007M4.667 10.5h.006M7 10.5h.007M9.333 10.5h.007" })); };

var ChartLine = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M1.75 1.75v9.333a1.167 1.167 0 0 0 1.167 1.167h9.333" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M11.083 5.25 8.167 8.167 5.833 5.833l-1.75 1.75" })); };

var ChevronDown = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M3.5 5.25 7 8.75l3.5-3.5" })); };

var ChevronLeft12 = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 8 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M5.75 10.5 2.25 7l3.5-3.5" })); };

var ChevronLeft = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M8.75 10.5 5.25 7l3.5-3.5" })); };

var ChevronRight12 = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 8 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M2.25 10.5 5.75 7l-3.5-3.5" })); };

var ChevronRight = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M5.25 10.5 8.75 7l-3.5-3.5" })); };

var ChevronUp = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M10.5 8.75 7 5.25l-3.5 3.5" })); };

var CircleHelpSolid = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { clipPath: "url(#prefix__a)" },
        React.createElement("path", { fill: "#ACB4BD", fillRule: "evenodd", d: "M.583 7a6.417 6.417 0 1 1 12.834 0A6.417 6.417 0 0 1 .583 7", clipRule: "evenodd" }),
        React.createElement("path", { fill: "#fff", d: "M6.362 4.825A1.167 1.167 0 0 1 8.12 5.833c0 .274-.213.56-.615.828a3.5 3.5 0 0 1-.684.35c-.305.102-.523.451-.421.757.102.305.432.47.738.369l.098-.036q.087-.032.228-.094c.184-.082.434-.206.688-.376.473-.315 1.134-.904 1.135-1.797a2.333 2.333 0 0 0-4.535-.778.583.583 0 1 0 1.1.388c.092-.26.273-.48.51-.619" }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M6.417 9.917c0-.323.26-.584.583-.584s.59.261.59.584A.59.59 0 0 1 7 10.5a.583.583 0 0 1-.583-.583", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CircleHelp = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666" }),
        React.createElement("path", { d: "M5.303 5.25a1.75 1.75 0 0 1 3.4.583c0 1.167-1.75 1.75-1.75 1.75M7 9.917h.007" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CirclePlusSolid = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { clipPath: "url(#prefix__a)" },
        React.createElement("path", { fill: "#ACB4BD", fillRule: "evenodd", d: "M.583 7a6.417 6.417 0 1 1 12.834 0A6.417 6.417 0 0 1 .583 7", clipRule: "evenodd" }),
        React.createElement("path", { fill: "#fff", d: "M4.667 6.417a.583.583 0 1 0 0 1.166h1.75v1.75a.583.583 0 1 0 1.166 0v-1.75h1.75a.583.583 0 1 0 0-1.166h-1.75v-1.75a.583.583 0 1 0-1.166 0v1.75z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CirclePlus = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666M4.667 7h4.666M7 4.667v4.666" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CircleXSolid = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { clipPath: "url(#prefix__a)" },
        React.createElement("path", { fill: "#ACB4BD", fillRule: "evenodd", d: "M.583 7a6.417 6.417 0 1 1 12.834 0A6.417 6.417 0 0 1 .583 7", clipRule: "evenodd" }),
        React.createElement("path", { fill: "#fff", d: "M9.162 4.837a.583.583 0 0 1 0 .825L7.825 7l1.337 1.337a.583.583 0 1 1-.824.825L7 7.825 5.662 9.162a.583.583 0 0 1-.824-.825L6.175 7 4.838 5.662a.583.583 0 1 1 .824-.825L7 6.175l1.338-1.338a.583.583 0 0 1 .824 0" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CircleX = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666M8.75 5.25l-3.5 3.5M5.25 5.25l3.5 3.5" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Clock = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666" }),
        React.createElement("path", { d: "M7 3.5V7h2.625" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Copy = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M11.667 4.667H5.833c-.644 0-1.166.522-1.166 1.166v5.834c0 .644.522 1.166 1.166 1.166h5.834c.644 0 1.166-.522 1.166-1.166V5.833c0-.644-.522-1.166-1.166-1.166" }),
        React.createElement("path", { d: "M2.333 9.333a1.17 1.17 0 0 1-1.166-1.166V2.333a1.17 1.17 0 0 1 1.166-1.166h5.834a1.17 1.17 0 0 1 1.166 1.166" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var CornerDownRight = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "m8.75 5.833 2.917 2.917-2.917 2.917" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M2.333 2.333v4.084A2.333 2.333 0 0 0 4.667 8.75h7" })); };

var Download = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.25 8.75v2.333a1.167 1.167 0 0 1-1.167 1.167H2.917a1.167 1.167 0 0 1-1.167-1.167V8.75M4.083 5.833 7 8.75l2.917-2.917M7 8.75v-7" })); };

var EllipsisVertical = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 7.583a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166M7 3.5a.583.583 0 1 0 0-1.167A.583.583 0 0 0 7 3.5M7 11.667A.583.583 0 1 0 7 10.5a.583.583 0 0 0 0 1.167" })); };

var Ellipsis = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 7.583a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166M11.083 7.583a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166M2.917 7.583a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166" })); };

var FileText = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M8.75 1.167H3.5a1.167 1.167 0 0 0-1.167 1.166v9.334A1.167 1.167 0 0 0 3.5 12.833h7a1.166 1.166 0 0 0 1.167-1.166V4.083z" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M8.167 1.167V3.5a1.167 1.167 0 0 0 1.166 1.167h2.334M5.833 5.25H4.667M9.333 7.583H4.667M9.333 9.917H4.667" })); };

var Folder = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M11.667 11.667a1.167 1.167 0 0 0 1.166-1.167V4.667A1.167 1.167 0 0 0 11.667 3.5H7.058a1.17 1.17 0 0 1-.985-.525l-.473-.7a1.17 1.17 0 0 0-.974-.525H2.333a1.167 1.167 0 0 0-1.166 1.167V10.5a1.167 1.167 0 0 0 1.166 1.167zM1.167 5.833h11.666" })); };

var ImageSolid = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "M11.083 12.25c.645 0 1.167-.522 1.167-1.167V9.042l-1.8-2.092a1.166 1.166 0 0 0-1.65 0l-5.3 5.3z" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "m12.25 9.042-1.8-2.092a1.166 1.166 0 0 0-1.65 0l-5.3 5.3m8.75-3.208V2.917c0-.645-.522-1.167-1.167-1.167H2.917c-.645 0-1.167.522-1.167 1.167v8.166c0 .645.522 1.167 1.167 1.167H3.5m8.75-3.208v2.041c0 .645-.522 1.167-1.167 1.167H3.5" }),
    React.createElement("path", { fill: "#ACB4BD", stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M6.417 5.25a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0" })); };

var Image = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M11.083 1.75H2.917c-.645 0-1.167.522-1.167 1.167v8.166c0 .645.522 1.167 1.167 1.167h8.166c.645 0 1.167-.522 1.167-1.167V2.917c0-.645-.522-1.167-1.167-1.167" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M5.25 6.417a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334M12.25 8.75l-1.8-1.8a1.166 1.166 0 0 0-1.65 0l-5.3 5.3" })); };

var InfoSolid = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { fillRule: "evenodd", clipPath: "url(#prefix__a)", clipRule: "evenodd" },
        React.createElement("path", { fill: "#ACB4BD", d: "M.583 7a6.417 6.417 0 1 1 12.834 0A6.417 6.417 0 0 1 .583 7" }),
        React.createElement("path", { fill: "#fff", d: "M7 6.417c.322 0 .583.26.583.583v2.333a.583.583 0 1 1-1.166 0V7c0-.322.26-.583.583-.583M6.417 4.667c0-.322.26-.584.583-.584s.59.262.59.584A.59.59 0 0 1 7 5.25a.583.583 0 0 1-.583-.583" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Info = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666M7 9.333V7M7 4.667h.007" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var LogIn = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M8.75 1.75h2.333a1.167 1.167 0 0 1 1.167 1.167v8.166a1.167 1.167 0 0 1-1.167 1.167H8.75M5.833 9.917 8.75 7 5.833 4.083M8.75 7h-7" })); };

var LogOut = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M5.25 12.25H2.917a1.167 1.167 0 0 1-1.167-1.167V2.917A1.167 1.167 0 0 1 2.917 1.75H5.25M9.333 9.917 12.25 7 9.333 4.083M12.25 7h-7" })); };

var MapPin = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M11.667 5.833c0 2.913-3.231 5.946-4.316 6.883a.58.58 0 0 1-.702 0c-1.085-.937-4.316-3.97-4.316-6.883a4.667 4.667 0 0 1 9.334 0" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 7.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" })); };

var Paperclip = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { clipPath: "url(#prefix__a)" },
        React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "m12.507 6.446-5.361 5.36a3.502 3.502 0 0 1-4.953-4.952l5-5A2.337 2.337 0 0 1 10.5 5.158l-5.01 4.999a1.167 1.167 0 0 1-1.652-1.651l4.953-4.947" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Pause = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "M5.25 1.75a.583.583 0 0 1 .583.583v9.334a.583.583 0 0 1-.583.583H4.083a.583.583 0 0 1-.583-.583V2.333a.583.583 0 0 1 .583-.583zm4.667 0a.583.583 0 0 1 .583.583v9.334a.583.583 0 0 1-.583.583H8.75a.583.583 0 0 1-.583-.583V2.333a.583.583 0 0 1 .583-.583z" })); };

var PenLine = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 11.667h5.25M9.553 2.113a1.238 1.238 0 1 1 1.75 1.751L4.299 10.87c-.139.14-.31.24-.499.296l-1.675.488a.292.292 0 0 1-.362-.361l.49-1.676c.054-.188.156-.36.294-.498z" })); };

var PencilLine = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 11.667h5.25M9.553 2.113a1.238 1.238 0 1 1 1.75 1.751L4.299 10.87c-.139.14-.31.24-.499.296l-1.675.488a.292.292 0 0 1-.362-.361l.49-1.676c.054-.188.156-.36.294-.498zM8.75 2.917l1.75 1.75" })); };

var Pencil = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, clipPath: "url(#prefix__a)" },
        React.createElement("path", { d: "M12.352 3.974a1.645 1.645 0 0 0-2.326-2.326L2.241 9.435a1.2 1.2 0 0 0-.291.484l-.771 2.539a.292.292 0 0 0 .363.363l2.54-.77c.182-.056.349-.156.484-.29zM8.75 2.917l2.333 2.333" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Phone = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("g", { clipPath: "url(#prefix__a)" },
        React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.833 9.863v1.75a1.165 1.165 0 0 1-1.271 1.167 11.54 11.54 0 0 1-5.035-1.791 11.4 11.4 0 0 1-3.5-3.5 11.54 11.54 0 0 1-1.79-5.058 1.167 1.167 0 0 1 1.16-1.272h1.75a1.17 1.17 0 0 1 1.167 1.004c.074.56.21 1.11.408 1.639a1.17 1.17 0 0 1-.262 1.23l-.74.742a9.33 9.33 0 0 0 3.5 3.5l.74-.741a1.17 1.17 0 0 1 1.23-.263c.53.198 1.08.335 1.64.409a1.166 1.166 0 0 1 1.003 1.184" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "prefix__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))); };

var Play = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", fillRule: "evenodd", d: "M3.307 2.777a.857.857 0 0 1 1.19-.687 36 36 0 0 1 3.77 1.911 37 37 0 0 1 3.54 2.309.857.857 0 0 1 0 1.374c-.533.401-1.757 1.278-3.54 2.308-1.786 1.03-3.158 1.652-3.771 1.913a.856.856 0 0 1-1.19-.686 36 36 0 0 1-.23-4.222c0-2.042.15-3.554.23-4.22", clipRule: "evenodd" })); };

var Plus = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M2.917 7h8.166M7 2.917v8.166" })); };

var PolygonDown = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "M6.624 8.65a.49.49 0 0 0 .752 0L9.83 5.705a.49.49 0 0 0-.376-.804H4.546a.49.49 0 0 0-.376.804z" })); };

var PolygonUp = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "M6.624 5.002a.49.49 0 0 1 .752 0L9.83 7.946a.49.49 0 0 1-.376.804H4.546a.49.49 0 0 1-.376-.804z" })); };

var Replay = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.25 7A5.25 5.25 0 1 1 7 1.75c1.47 0 2.876.583 3.932 1.598l1.318 1.319" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.25 1.75v2.917H9.333" })); };

var Search = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M6.417 11.083a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333M12.25 12.25 9.742 9.742" })); };

var Settings = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7.127 1.167H6.87a1.167 1.167 0 0 0-1.166 1.166c0 .205-.055.51-.157.688s-.25.324-.427.427l-.25.145a1.17 1.17 0 0 1-.584.157c-.205 0-.493-.1-.67-.203a1.167 1.167 0 0 0-1.593.426l-.129.221a1.167 1.167 0 0 0 .426 1.593c.177.102.41.306.513.482.102.176.157.376.158.58v.297c0 .205-.053.408-.155.586s-.338.379-.516.481a1.167 1.167 0 0 0-.426 1.593l.129.222a1.167 1.167 0 0 0 1.592.425c.178-.102.466-.203.671-.203s.406.054.583.157l.251.146c.177.102.325.249.427.426s.156.483.157.688a1.167 1.167 0 0 0 1.166 1.166h.257a1.167 1.167 0 0 0 1.167-1.166c0-.205.054-.51.156-.688s.25-.324.427-.426l.25-.146c.178-.103.38-.157.584-.157.205 0 .494.101.67.203a1.167 1.167 0 0 0 1.593-.425l.129-.228c.154-.268.196-.586.116-.884s-.362-.6-.63-.755a1.17 1.17 0 0 1-.583-1.015v-.292c0-.205.053-.407.155-.586.103-.178.338-.378.516-.481a1.167 1.167 0 0 0 .426-1.593l-.129-.221a1.167 1.167 0 0 0-1.592-.426c-.177.102-.466.203-.67.203-.206 0-.407-.054-.584-.157l-.251-.145a1.17 1.17 0 0 1-.427-.427c-.102-.177-.156-.483-.156-.688a1.167 1.167 0 0 0-1.167-1.166" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 8.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" })); };

var Share = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.25 7.583v3.5a1.167 1.167 0 0 1-1.167 1.167H2.917a1.167 1.167 0 0 1-1.167-1.167V2.917A1.167 1.167 0 0 1 2.917 1.75h3.5M12.25 1.75 7 7M8.75 1.75h3.5v3.5" })); };

var SquarePen = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M7 1.75H2.917A1.167 1.167 0 0 0 1.75 2.917v8.166a1.167 1.167 0 0 0 1.167 1.167h8.166a1.167 1.167 0 0 0 1.167-1.167V7" }),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M10.719 1.531a1.238 1.238 0 0 1 1.75 1.75L7.21 8.54c-.138.139-.31.24-.497.295l-1.676.49a.292.292 0 0 1-.362-.362l.49-1.676c.055-.187.157-.358.295-.497z" })); };

var Trash = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M1.75 3.5h10.5M11.083 3.5v8.167c0 .583-.583 1.166-1.166 1.166H4.083c-.583 0-1.166-.583-1.166-1.166V3.5M4.667 3.5V2.333c0-.583.583-1.166 1.166-1.166h2.334c.583 0 1.166.583 1.166 1.166V3.5M5.833 6.417v3.5M8.167 6.417v3.5" })); };

var Upload = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M12.25 8.75v2.333a1.167 1.167 0 0 1-1.167 1.167H2.917a1.167 1.167 0 0 1-1.167-1.167V8.75M9.917 4.667 7 1.75 4.083 4.667M7 1.75v7" })); };

var VolumeLine = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "M6.417 2.743a.411.411 0 0 0-.702-.29L3.74 4.425a.82.82 0 0 1-.582.24H1.75a.583.583 0 0 0-.583.584v3.5a.583.583 0 0 0 .583.583h1.41a.82.82 0 0 1 .58.241l1.974 1.974a.41.41 0 0 0 .703-.29zM9.333 5.25a2.92 2.92 0 0 1 0 3.5M11.296 10.712a5.25 5.25 0 0 0 0-7.424" })); };

var VolumeOff = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "m2.681 4.667 6.069 6.069v.817a.642.642 0 0 1-1.015.523L3.897 9.333H2.333a1.167 1.167 0 0 1-1.166-1.166V5.833a1.167 1.167 0 0 1 1.166-1.166zm6.069-2.22v5.478l.65.65a.58.58 0 0 1 .076-.653l.052-.052a1.165 1.165 0 0 0 .069-1.673l-.07-.067a.583.583 0 0 1 .779-.869 2.33 2.33 0 0 1 .575 2.692c-.134.3-.33.567-.575.786a.58.58 0 0 1-.66.083l.858.857a.58.58 0 0 1 .19-.505A2.9 2.9 0 0 0 11.667 7c0-.863-.375-1.64-.973-2.174a.582.582 0 1 1 .778-.87A4.08 4.08 0 0 1 12.833 7a4.07 4.07 0 0 1-1.36 3.043.58.58 0 0 1-.46.145l.937.937a.584.584 0 0 1-.825.825L2.05 2.876a.583.583 0 1 1 .825-.825l1.952 1.95 2.909-2.077a.642.642 0 0 1 1.014.522" })); };

var Volume = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { fill: "#ACB4BD", d: "M7.735 1.925a.642.642 0 0 1 1.011.455l.004.066v9.108a.642.642 0 0 1-.958.558l-.056-.037-3.84-2.742H2.334A1.167 1.167 0 0 1 1.17 8.254l-.003-.087V5.833A1.167 1.167 0 0 1 2.246 4.67l.087-.003h1.564zm3.737 2.032A4.07 4.07 0 0 1 12.833 7a4.07 4.07 0 0 1-1.36 3.043.583.583 0 1 1-.779-.869A2.9 2.9 0 0 0 11.667 7c0-.863-.375-1.64-.973-2.174a.584.584 0 1 1 .778-.87M10.306 5.26a2.33 2.33 0 0 1 0 3.478.583.583 0 0 1-.83-.817l.052-.052a1.165 1.165 0 0 0 .069-1.673l-.07-.067a.583.583 0 1 1 .779-.869" })); };

var X = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.167, d: "m10.5 3.5-7 7M3.5 3.5l7 7" })); };

export { Arrowleft, Arrowright, Calendar, ChartLine, ChevronDown, ChevronLeft, ChevronLeft12, ChevronRight, ChevronRight12, ChevronUp, CircleHelp, CircleHelpSolid, CirclePlus, CirclePlusSolid, CircleX, CircleXSolid, Clock, Copy, CornerDownRight, Download, Ellipsis, EllipsisVertical, FileText, Folder, Image, ImageSolid, Info, InfoSolid, LogIn, LogOut, MapPin, Paperclip, Pause, PenLine, Pencil, PencilLine, Phone, Play, Plus, PolygonDown, PolygonUp, Replay, Search, Settings, Share, SquarePen, Trash, Upload, Volume, VolumeLine, VolumeOff, X };
