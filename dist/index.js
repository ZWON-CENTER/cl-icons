'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

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

var Arrowleft = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M5.54167 10.5L2.04167 7L5.54167 3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.9583 7H2.04167", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Arrowright = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M2.04167 7L11.9583 7", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.45833 3.5L11.9583 7L8.45833 10.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Calendar = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M4.66668 1.16663V3.49996", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33332 1.16663V3.49996", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.0833 2.33337H2.91667C2.27233 2.33337 1.75 2.85571 1.75 3.50004V11.6667C1.75 12.311 2.27233 12.8334 2.91667 12.8334H11.0833C11.7277 12.8334 12.25 12.311 12.25 11.6667V3.50004C12.25 2.85571 11.7277 2.33337 11.0833 2.33337Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M1.75 5.83337H12.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M4.66668 8.16663H4.67335", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 8.16663H7.00667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33332 8.16663H9.33999", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M4.66668 10.5H4.67335", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 10.5H7.00667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33332 10.5H9.33999", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChartLine = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M1.75 1.75V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H12.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.0833 5.25L8.16665 8.16667L5.83331 5.83333L4.08331 7.58333", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronDown = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronLeft12 = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M5.75 10.5L2.25 7L5.75 3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronLeft = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M8.75 10.5L5.25 7L8.75 3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronRight12 = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M2.25 10.5L5.75 7L2.25 3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronRight = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M5.25 10.5L8.75 7L5.25 3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ChevronUp = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M10.5 8.75L7 5.25L3.5 8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var CircleHelpSolid = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5969)" },
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z" }),
        React__namespace.createElement("path", { d: "M6.36221 4.82495C6.59975 4.68535 6.87902 4.63432 7.15058 4.6809C7.42213 4.72748 7.66844 4.86866 7.84587 5.07944C8.02331 5.29022 8.12042 5.55786 8.12001 5.83338C8.12001 6.10704 7.90703 6.39234 7.50477 6.66052C7.32139 6.78277 7.13385 6.87696 6.98987 6.94095C6.9187 6.97258 6.86021 6.99594 6.82087 7.01092C6.51563 7.11303 6.29813 7.46242 6.39994 7.76785C6.50182 8.07348 6.83218 8.23866 7.13781 8.13678C7.13781 8.13678 7.20797 8.11191 7.2362 8.10116C7.29257 8.07968 7.3708 8.04835 7.46369 8.00706C7.64783 7.92522 7.8978 7.80066 8.15192 7.63125C8.62456 7.31615 9.28641 6.72662 9.28668 5.83391C9.28742 5.283 9.0932 4.74958 8.7384 4.32811C8.38353 3.90655 7.89092 3.62418 7.34781 3.53103C6.8047 3.43787 6.24615 3.53993 5.77108 3.81913C5.29602 4.09833 4.93509 4.53666 4.75223 5.05647C4.64532 5.36038 4.80502 5.69342 5.10893 5.80033C5.41284 5.90724 5.74588 5.74753 5.85279 5.44362C5.94422 5.18372 6.12468 4.96455 6.36221 4.82495Z" }),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.41668 9.91659C6.41668 9.59442 6.67785 9.33325 7.00001 9.33325C7.32218 9.33325 7.58918 9.59442 7.58918 9.91659C7.58918 10.2388 7.32218 10.4999 7.00001 10.4999C6.67785 10.4999 6.41668 10.2388 6.41668 9.91659Z" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5969" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CircleHelp = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5965)" },
        React__namespace.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7 9.91675H7.00667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5965" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CirclePlusSolid = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5959)" },
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z" }),
        React__namespace.createElement("path", { d: "M4.66665 6.41671C4.34449 6.41671 4.08332 6.67787 4.08332 7.00004C4.08332 7.32221 4.34449 7.58337 4.66665 7.58337H6.41665V9.33337C6.41665 9.65554 6.67782 9.91671 6.99999 9.91671C7.32215 9.91671 7.58332 9.65554 7.58332 9.33337V7.58337H9.33332C9.65548 7.58337 9.91665 7.32221 9.91665 7.00004C9.91665 6.67787 9.65548 6.41671 9.33332 6.41671H7.58332V4.66671C7.58332 4.34454 7.32215 4.08337 6.99999 4.08337C6.67782 4.08337 6.41665 4.34454 6.41665 4.66671V6.41671H4.66665Z" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5959" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CirclePlus = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5955)" },
        React__namespace.createElement("path", { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M4.66669 7H9.33335", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7 4.66663V9.33329", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5955" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CircleXSolid = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5952)" },
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z" }),
        React__namespace.createElement("path", { d: "M9.16249 4.83748C9.3903 5.06529 9.3903 5.43463 9.16249 5.66244L7.82497 6.99996L9.16249 8.33748C9.3903 8.56529 9.3903 8.93463 9.16249 9.16244C8.93469 9.39024 8.56534 9.39024 8.33754 9.16244L7.00001 7.82492L5.66249 9.16244C5.43469 9.39024 5.06534 9.39024 4.83754 9.16244C4.60973 8.93463 4.60973 8.56529 4.83754 8.33748L6.17506 6.99996L4.83754 5.66244C4.60973 5.43463 4.60973 5.06529 4.83754 4.83748C5.06534 4.60967 5.43469 4.60967 5.66249 4.83748L7.00001 6.175L8.33754 4.83748C8.56534 4.60967 8.93469 4.60967 9.16249 4.83748Z" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5952" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CircleX = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5948)" },
        React__namespace.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M8.75 5.25L5.25 8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M5.25 5.25L8.75 8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5948" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Clock = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5982)" },
        React__namespace.createElement("path", { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7 3.5V7H9.625", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5982" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Copy = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5836)" },
        React__namespace.createElement("path", { d: "M11.6667 4.66663H5.83335C5.18901 4.66663 4.66668 5.18896 4.66668 5.83329V11.6666C4.66668 12.311 5.18901 12.8333 5.83335 12.8333H11.6667C12.311 12.8333 12.8333 12.311 12.8333 11.6666V5.83329C12.8333 5.18896 12.311 4.66663 11.6667 4.66663Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M2.33335 9.33329C1.69168 9.33329 1.16668 8.80829 1.16668 8.16663V2.33329C1.16668 1.69163 1.69168 1.16663 2.33335 1.16663H8.16668C8.80835 1.16663 9.33335 1.69163 9.33335 2.33329", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5836" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var CornerDownRight = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M8.75 5.83337L11.6667 8.75004L8.75 11.6667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M2.33332 2.33337V6.41671C2.33332 7.03555 2.57915 7.62904 3.01674 8.06662C3.45432 8.50421 4.04781 8.75004 4.66665 8.75004H11.6667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Download = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M4.08332 5.83337L6.99999 8.75004L9.91665 5.83337", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 8.75V1.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var EllipsisVertical = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7.00001 3.49992C7.32218 3.49992 7.58335 3.23875 7.58335 2.91659C7.58335 2.59442 7.32218 2.33325 7.00001 2.33325C6.67785 2.33325 6.41668 2.59442 6.41668 2.91659C6.41668 3.23875 6.67785 3.49992 7.00001 3.49992Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7.00001 11.6667C7.32218 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41668 10.7612 6.41668 11.0833C6.41668 11.4055 6.67785 11.6667 7.00001 11.6667Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Ellipsis = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.0833 7.58341C11.4055 7.58341 11.6667 7.32225 11.6667 7.00008C11.6667 6.67792 11.4055 6.41675 11.0833 6.41675C10.7612 6.41675 10.5 6.67792 10.5 7.00008C10.5 7.32225 10.7612 7.58341 11.0833 7.58341Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M2.91665 7.58341C3.23882 7.58341 3.49999 7.32225 3.49999 7.00008C3.49999 6.67792 3.23882 6.41675 2.91665 6.41675C2.59449 6.41675 2.33332 6.67792 2.33332 7.00008C2.33332 7.32225 2.59449 7.58341 2.91665 7.58341Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var FileText = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M8.74999 1.16663H3.49999C3.19057 1.16663 2.89382 1.28954 2.67503 1.50833C2.45624 1.72713 2.33332 2.02387 2.33332 2.33329V11.6666C2.33332 11.976 2.45624 12.2728 2.67503 12.4916C2.89382 12.7104 3.19057 12.8333 3.49999 12.8333H10.5C10.8094 12.8333 11.1062 12.7104 11.3249 12.4916C11.5437 12.2728 11.6667 11.976 11.6667 11.6666V4.08329L8.74999 1.16663Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.16668 1.16663V3.49996C8.16668 3.80938 8.2896 4.10612 8.50839 4.32492C8.72718 4.54371 9.02393 4.66663 9.33335 4.66663H11.6667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M5.83335 5.25H4.66668", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33335 7.58337H4.66668", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33335 9.91663H4.66668", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Folder = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M1.16667 5.83337H12.8333", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var ImageSolid = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M11.0833 12.25C11.7277 12.25 12.25 11.7277 12.25 11.0833V9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25H11.0833Z" }),
    React__namespace.createElement("path", { d: "M12.25 9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25M12.25 9.04167V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H3.5M12.25 9.04167V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M6.41667 5.25004C6.41667 5.89437 5.89433 6.41671 5.25 6.41671C4.60567 6.41671 4.08334 5.89437 4.08334 5.25004C4.08334 4.60571 4.60567 4.08337 5.25 4.08337C5.89433 4.08337 6.41667 4.60571 6.41667 5.25004Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Image = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var InfoSolid = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5938)" },
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z" }),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.00001 6.41663C7.32218 6.41663 7.58335 6.67779 7.58335 6.99996V9.33329C7.58335 9.65546 7.32218 9.91663 7.00001 9.91663C6.67785 9.91663 6.41668 9.65546 6.41668 9.33329V6.99996C6.41668 6.67779 6.67785 6.41663 7.00001 6.41663Z" }),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.41668 4.66671C6.41668 4.34454 6.67785 4.08337 7.00001 4.08337C7.32218 4.08337 7.58918 4.34454 7.58918 4.66671C7.58918 4.98887 7.32218 5.25004 7.00001 5.25004C6.67785 5.25004 6.41668 4.98887 6.41668 4.66671Z" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5938" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Info = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5934)" },
        React__namespace.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7 9.33333V7", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7 4.66663H7.00667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5934" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var LogIn = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M8.75 1.75H11.0833C11.3928 1.75 11.6895 1.87292 11.9083 2.09171C12.1271 2.3105 12.25 2.60725 12.25 2.91667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M5.83332 9.91671L8.74999 7.00004L5.83332 4.08337", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.75 7H1.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var LogOut = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33332 9.91671L12.25 7.00004L9.33332 4.08337", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M12.25 7H5.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var MapPin = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Paperclip = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5839)" },
        React__namespace.createElement("path", { d: "M12.5067 6.44576L7.14582 11.8066C6.48908 12.4633 5.59834 12.8323 4.66957 12.8323C3.74079 12.8323 2.85006 12.4633 2.19332 11.8066C1.53658 11.1499 1.16762 10.2591 1.16762 9.33034C1.16762 8.40157 1.53658 7.51084 2.19332 6.85409L7.19248 1.85493C7.63031 1.41633 8.22444 1.16962 8.84417 1.16907C9.4639 1.16852 10.0585 1.41418 10.4971 1.85201C10.9357 2.28984 11.1824 2.88397 11.1829 3.5037C11.1835 4.12343 10.9378 4.71799 10.5 5.15659L5.48915 10.1558C5.27024 10.3747 4.97333 10.4977 4.66373 10.4977C4.35414 10.4977 4.05723 10.3747 3.83832 10.1558C3.6194 9.93685 3.49642 9.63994 3.49642 9.33034C3.49642 9.02075 3.6194 8.72384 3.83832 8.50493L8.79082 3.55826", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5839" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Pause = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M5.25 1.75C5.40471 1.75 5.55308 1.81146 5.66248 1.92085C5.77187 2.03025 5.83333 2.17862 5.83333 2.33333V11.6667C5.83333 11.8214 5.77187 11.9697 5.66248 12.0791C5.55308 12.1885 5.40471 12.25 5.25 12.25H4.08333C3.92862 12.25 3.78025 12.1885 3.67085 12.0791C3.56146 11.9697 3.5 11.8214 3.5 11.6667V2.33333C3.5 2.17862 3.56146 2.03025 3.67085 1.92085C3.78025 1.81146 3.92862 1.75 4.08333 1.75H5.25ZM9.91667 1.75C10.0714 1.75 10.2197 1.81146 10.3291 1.92085C10.4385 2.03025 10.5 2.17862 10.5 2.33333V11.6667C10.5 11.8214 10.4385 11.9697 10.3291 12.0791C10.2197 12.1885 10.0714 12.25 9.91667 12.25H8.75C8.59529 12.25 8.44692 12.1885 8.33752 12.0791C8.22812 11.9697 8.16667 11.8214 8.16667 11.6667V2.33333C8.16667 2.17862 8.22812 2.03025 8.33752 1.92085C8.44692 1.81146 8.59529 1.75 8.75 1.75H9.91667Z" })); };

var PenLine = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7 11.6666H12.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.55263 2.1128C9.78485 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.15919 11.0092 3.98765 11.1107 3.79922 11.1656L2.12388 11.6544C2.07369 11.669 2.02048 11.6699 1.96983 11.6569C1.91918 11.6439 1.87295 11.6176 1.83598 11.5806C1.799 11.5437 1.77265 11.4974 1.75967 11.4468C1.7467 11.3961 1.74758 11.3429 1.76222 11.2927L2.25105 9.61738C2.30601 9.42916 2.40753 9.25783 2.54622 9.11922L9.55263 2.1128Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var PencilLine = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7 11.6666H12.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.55264 2.1128C9.78486 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.1592 11.0092 3.98765 11.1107 3.79922 11.1656L2.12389 11.6544C2.0737 11.669 2.02049 11.6699 1.96984 11.6569C1.91919 11.6439 1.87296 11.6176 1.83598 11.5806C1.79901 11.5437 1.77266 11.4974 1.75968 11.4468C1.74671 11.3961 1.74758 11.3429 1.76222 11.2927L2.25106 9.61738C2.30602 9.42916 2.40753 9.25783 2.54622 9.11922L9.55264 2.1128Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.75 2.91663L10.5 4.66663", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Pencil = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2197_5880)" },
        React__namespace.createElement("path", { d: "M12.3515 3.97373C12.6599 3.66539 12.8332 3.24717 12.8333 2.81106C12.8333 2.37495 12.6601 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1891 1.1665C10.753 1.16645 10.3348 1.33964 10.0264 1.64798L2.24119 9.43489C2.10575 9.56993 2.00559 9.7362 1.94952 9.91906L1.17894 12.4577C1.16386 12.5082 1.16272 12.5618 1.17564 12.6128C1.18856 12.6638 1.21506 12.7104 1.25232 12.7476C1.28958 12.7848 1.33622 12.8113 1.38728 12.8241C1.43834 12.8369 1.49193 12.8357 1.54235 12.8206L4.0816 12.0506C4.26429 11.995 4.43054 11.8954 4.56577 11.7606L12.3515 3.97373Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M8.75 2.91663L11.0833 5.24996", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2197_5880" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Phone = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("g", { clipPath: "url(#clip0_2392_28279)" },
        React__namespace.createElement("path", { d: "M12.8332 9.86281V11.6128C12.8339 11.7753 12.8006 11.9361 12.7355 12.0849C12.6705 12.2338 12.575 12.3674 12.4553 12.4772C12.3356 12.5871 12.1942 12.6707 12.0403 12.7227C11.8864 12.7748 11.7234 12.7941 11.5616 12.7795C9.76656 12.5844 8.04232 11.9711 6.5274 10.9886C5.11797 10.093 3.92302 8.89808 3.0274 7.48865C2.04156 5.96685 1.42805 4.23423 1.23657 2.43115C1.22199 2.26984 1.24116 2.10726 1.29286 1.95376C1.34456 1.80027 1.42765 1.65922 1.53685 1.53959C1.64605 1.41997 1.77896 1.32439 1.92712 1.25895C2.07527 1.19351 2.23544 1.15963 2.3974 1.15948H4.1474C4.4305 1.15669 4.70495 1.25694 4.9196 1.44154C5.13425 1.62614 5.27445 1.88249 5.31407 2.16281C5.38793 2.72285 5.52492 3.27274 5.7224 3.80198C5.80089 4.01077 5.81787 4.23768 5.77135 4.45583C5.72483 4.67397 5.61674 4.87421 5.4599 5.03281L4.71907 5.77365C5.54948 7.23405 6.75867 8.44324 8.21907 9.27365L8.9599 8.53281C9.11851 8.37598 9.31874 8.26789 9.53689 8.22137C9.75504 8.17484 9.98195 8.19183 10.1907 8.27031C10.72 8.4678 11.2699 8.60478 11.8299 8.67865C12.1133 8.71862 12.3721 8.86135 12.557 9.07969C12.742 9.29802 12.8403 9.57673 12.8332 9.86281Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("clipPath", { id: "clip0_2392_28279" },
            React__namespace.createElement("rect", { width: 14, height: 14 })))); };

var Play = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z" })); };

var Plus = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M2.91669 7H11.0834", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 2.91675V11.0834", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var PolygonDown = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z" })); };

var PolygonUp = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z" })); };

var Replay = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M12.25 7C12.25 8.03835 11.9421 9.05339 11.3652 9.91674C10.7883 10.7801 9.9684 11.453 9.00909 11.8504C8.04978 12.2477 6.99418 12.3517 5.97578 12.1491C4.95738 11.9466 4.02192 11.4465 3.28769 10.7123C2.55347 9.97809 2.05345 9.04262 1.85088 8.02422C1.64831 7.00582 1.75227 5.95022 2.14963 4.99091C2.54699 4.0316 3.2199 3.21166 4.08326 2.63478C4.94662 2.05791 5.96165 1.75 7 1.75C8.47 1.75 9.87584 2.33333 10.9317 3.34833L12.25 4.66667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M12.25 1.75V4.66667H9.33332", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Search = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M12.25 12.2499L9.74168 9.74158", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Settings = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7.12693 1.16675H6.87026C6.56084 1.16675 6.2641 1.28966 6.04531 1.50846C5.82651 1.72725 5.7036 2.024 5.7036 2.33341C5.70339 2.538 5.64938 2.84394 5.547 3.02107C5.44461 3.1982 5.29744 3.34529 5.12026 3.44758L4.86943 3.59341C4.69208 3.69581 4.49089 3.74972 4.2861 3.74972C4.0813 3.74972 3.79262 3.64914 3.61526 3.54675C3.34755 3.39232 3.0295 3.35042 2.73093 3.43026C2.43236 3.5101 2.17767 3.70514 2.02276 3.97258L1.89443 4.19425C1.74 4.46196 1.69811 4.78001 1.77794 5.07858C1.85778 5.37715 2.05283 5.63184 2.32026 5.78675C2.49659 5.88855 2.73071 6.09305 2.83304 6.26907C2.93538 6.44508 2.98987 6.64482 2.9911 6.84841V7.14591C2.99191 7.35149 2.93839 7.55364 2.83596 7.73188C2.73352 7.91012 2.4983 8.11063 2.32026 8.21341C2.05283 8.36832 1.85778 8.62301 1.77794 8.92158C1.69811 9.22015 1.74 9.5382 1.89443 9.80591L2.02276 10.0276C2.17767 10.295 2.43236 10.4901 2.73093 10.5699C3.0295 10.6497 3.34755 10.6078 3.61526 10.4534C3.79262 10.351 4.0813 10.2504 4.2861 10.2504C4.49089 10.2504 4.69208 10.3044 4.86943 10.4067L5.12026 10.5526C5.29744 10.6549 5.44461 10.802 5.547 10.9791C5.64938 11.1562 5.70339 11.4622 5.7036 11.6667C5.7036 11.9762 5.82651 12.2729 6.04531 12.4917C6.2641 12.7105 6.56084 12.8334 6.87026 12.8334H7.12693C7.43635 12.8334 7.7331 12.7105 7.95189 12.4917C8.17068 12.2729 8.2936 11.9762 8.2936 11.6667C8.29381 11.4622 8.34781 11.1562 8.4502 10.9791C8.55259 10.802 8.69975 10.6549 8.87693 10.5526L9.12776 10.4067C9.30512 10.3044 9.5063 10.2504 9.7111 10.2504C9.91589 10.2504 10.2046 10.351 10.3819 10.4534C10.6496 10.6078 10.9677 10.6497 11.2663 10.5699C11.5648 10.4901 11.8195 10.295 11.9744 10.0276L12.1028 9.80008C12.2572 9.53237 12.2991 9.21432 12.2193 8.91575C12.1394 8.61718 11.8569 8.31582 11.5894 8.16091C11.4114 8.05813 11.2637 7.91012 11.1612 7.73188C11.0588 7.55364 11.0053 7.35149 11.0061 7.14591V6.85425C11.0053 6.64867 11.0588 6.44653 11.1612 6.26828C11.2637 6.09004 11.4989 5.88954 11.6769 5.78675C11.9444 5.63184 12.1394 5.37715 12.2193 5.07858C12.2991 4.78001 12.2572 4.46196 12.1028 4.19425L11.9744 3.97258C11.8195 3.70514 11.5648 3.5101 11.2663 3.43026C10.9677 3.35042 10.6496 3.39232 10.3819 3.54675C10.2046 3.64914 9.91589 3.74972 9.7111 3.74972C9.5063 3.74972 9.30512 3.69581 9.12776 3.59341L8.87693 3.44758C8.69975 3.34529 8.55259 3.1982 8.4502 3.02107C8.34781 2.84394 8.29381 2.538 8.2936 2.33341C8.2936 2.024 8.17068 1.72725 7.95189 1.50846C7.7331 1.28966 7.43635 1.16675 7.12693 1.16675Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Share = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M12.25 7.58333V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H6.41667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M12.25 1.75L7 7", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.75 1.75H12.25V5.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var SquarePen = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21116 8.53943C7.07265 8.67782 6.90153 8.77913 6.71358 8.83401L5.03766 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71278 9.21328 4.68643 9.16705 4.67345 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46116 6.78943L10.7187 1.53126Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Trash = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M1.75 3.5H12.25", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.0834 3.5V11.6667C11.0834 12.25 10.5 12.8333 9.91669 12.8333H4.08335C3.50002 12.8333 2.91669 12.25 2.91669 11.6667V3.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M4.66669 3.50008V2.33341C4.66669 1.75008 5.25002 1.16675 5.83335 1.16675H8.16669C8.75002 1.16675 9.33335 1.75008 9.33335 2.33341V3.50008", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M5.83331 6.41675V9.91675", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M8.16668 6.41675V9.91675", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var Upload = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.91665 4.66667L6.99998 1.75L4.08331 4.66667", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M7 1.75V8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var VolumeLine = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M6.41667 2.74281C6.41655 2.66156 6.39237 2.58216 6.34717 2.51464C6.30197 2.44712 6.23779 2.3945 6.16271 2.36342C6.08764 2.33235 6.00505 2.3242 5.92535 2.34002C5.84565 2.35584 5.77243 2.39491 5.71492 2.45231L3.74092 4.42573C3.66474 4.50236 3.5741 4.56312 3.47427 4.60447C3.37444 4.64583 3.26739 4.66696 3.15933 4.66664H1.75C1.59529 4.66664 1.44692 4.7281 1.33752 4.8375C1.22812 4.94689 1.16667 5.09527 1.16667 5.24998V8.74998C1.16667 8.90468 1.22812 9.05306 1.33752 9.16245C1.44692 9.27185 1.59529 9.33331 1.75 9.33331H3.15933C3.26739 9.33299 3.37444 9.35412 3.47427 9.39548C3.5741 9.43683 3.66474 9.49759 3.74092 9.57423L5.71433 11.5482C5.77185 11.6059 5.84518 11.6451 5.92503 11.661C6.00488 11.6769 6.08766 11.6688 6.16287 11.6376C6.23809 11.6065 6.30236 11.5537 6.34754 11.4859C6.39272 11.4182 6.41678 11.3386 6.41667 11.2571V2.74281Z", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M9.33333 5.25C9.71198 5.75486 9.91667 6.36892 9.91667 7C9.91667 7.63108 9.71198 8.24514 9.33333 8.75", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M11.2957 10.7124C11.7832 10.2249 12.1699 9.64612 12.4337 9.00916C12.6976 8.37219 12.8334 7.6895 12.8334 7.00005C12.8334 6.31061 12.6976 5.62791 12.4337 4.99095C12.1699 4.35399 11.7832 3.77523 11.2957 3.28772", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

var VolumeOff = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M2.681 4.66665L8.75 10.7356V11.5535C8.75004 11.6714 8.71756 11.7871 8.65614 11.8878C8.59472 11.9885 8.50673 12.0703 8.40184 12.1243C8.29695 12.1782 8.17921 12.2022 8.06157 12.1936C7.94393 12.185 7.83094 12.1442 7.735 12.0756L3.89667 9.33331H2.33333C2.02392 9.33331 1.72717 9.2104 1.50838 8.9916C1.28958 8.77281 1.16667 8.47607 1.16667 8.16665V5.83331C1.16667 5.52389 1.28958 5.22715 1.50838 5.00836C1.72717 4.78956 2.02392 4.66665 2.33333 4.66665H2.681ZM8.75 2.44648V7.92515L9.39925 8.5744C9.345 8.47046 9.32333 8.35258 9.33706 8.23614C9.3508 8.11971 9.3993 8.01011 9.47625 7.92165L9.52758 7.86973C9.76675 7.65506 9.91667 7.34531 9.91667 6.99998C9.91736 6.70126 9.80286 6.41377 9.597 6.19731L9.52758 6.13023C9.41397 6.0266 9.34588 5.88231 9.33811 5.72873C9.33034 5.57515 9.38352 5.42472 9.4861 5.31016C9.58867 5.19559 9.73232 5.12616 9.88582 5.11697C10.0393 5.10777 10.1902 5.15956 10.3058 5.26106C10.5506 5.47975 10.7464 5.74772 10.8804 6.0474C11.0144 6.34708 11.0836 6.6717 11.0833 6.99998C11.0837 7.32828 11.0146 7.65293 10.8806 7.95263C10.7466 8.25233 10.5507 8.52028 10.3058 8.7389C10.2174 8.81813 10.1069 8.86852 9.98911 8.88332C9.87133 8.89812 9.75183 8.87663 9.64658 8.82173L10.5041 9.67923C10.4927 9.58593 10.504 9.49127 10.5372 9.4033C10.5703 9.31534 10.6242 9.23669 10.6943 9.17406C11.0006 8.90084 11.2456 8.56586 11.4132 8.19114C11.5808 7.81643 11.6672 7.41047 11.6667 6.99998C11.6667 6.13665 11.2922 5.36081 10.6943 4.8259C10.6364 4.77503 10.5891 4.7132 10.5553 4.64397C10.5214 4.57475 10.5016 4.4995 10.497 4.42258C10.4924 4.34566 10.5031 4.26859 10.5284 4.19582C10.5538 4.12304 10.5933 4.05602 10.6447 3.99861C10.6961 3.94119 10.7584 3.89454 10.8279 3.86132C10.8974 3.82811 10.9729 3.80901 11.0498 3.80512C11.1268 3.80122 11.2038 3.81262 11.2763 3.83864C11.3488 3.86466 11.4155 3.9048 11.4724 3.95673C11.901 4.33937 12.2438 4.80832 12.4784 5.33281C12.7129 5.85729 12.8339 6.42544 12.8333 6.99998C12.8339 7.57452 12.7129 8.14267 12.4784 8.66716C12.2438 9.19164 11.901 9.66059 11.4724 10.0432C11.4106 10.0988 11.3375 10.1404 11.2583 10.1654C11.179 10.1903 11.0953 10.198 11.0128 10.1879L11.9496 11.1247C12.0558 11.2347 12.1146 11.3821 12.1133 11.535C12.112 11.688 12.0506 11.8343 11.9425 11.9425C11.8343 12.0506 11.688 12.112 11.5351 12.1133C11.3821 12.1146 11.2348 12.0558 11.1248 11.9496L2.05042 2.87581C1.9947 2.822 1.95026 2.75764 1.91969 2.68647C1.88912 2.6153 1.87303 2.53875 1.87236 2.4613C1.87168 2.38384 1.88644 2.30703 1.91577 2.23534C1.9451 2.16365 1.98842 2.09852 2.04319 2.04375C2.09796 1.98898 2.16309 1.94567 2.23478 1.91633C2.30647 1.887 2.38328 1.87224 2.46074 1.87292C2.53819 1.87359 2.61473 1.88968 2.6859 1.92025C2.75707 1.95083 2.82144 1.99527 2.87525 2.05098L4.82708 4.00165L7.73558 1.92381C7.83156 1.85532 7.94455 1.81459 8.06215 1.80611C8.17975 1.79762 8.29742 1.8217 8.40223 1.87571C8.50704 1.92971 8.59495 2.01155 8.6563 2.11224C8.71765 2.21293 8.75007 2.32857 8.75 2.44648Z" })); };

var Volume = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M7.735 1.92496C7.82629 1.85965 7.93313 1.81943 8.04483 1.80833C8.15653 1.79722 8.26919 1.81561 8.37156 1.86166C8.47393 1.9077 8.56243 1.9798 8.62822 2.07075C8.69402 2.1617 8.7348 2.26832 8.7465 2.37996L8.75 2.44646V11.5535C8.75003 11.6657 8.72062 11.776 8.6647 11.8733C8.60877 11.9707 8.52829 12.0516 8.43129 12.1081C8.33429 12.1646 8.22417 12.1947 8.11191 12.1953C7.99966 12.196 7.88921 12.1671 7.79158 12.1117L7.73558 12.0755L3.89666 9.33329H2.33333C2.03899 9.33339 1.7555 9.22222 1.53968 9.02209C1.32386 8.82195 1.19166 8.54763 1.16958 8.25413L1.16666 8.16663V5.83329C1.16657 5.53896 1.27773 5.25546 1.47787 5.03964C1.67801 4.82382 1.95232 4.69162 2.24583 4.66954L2.33333 4.66663H3.89666L7.735 1.92496ZM11.4724 3.95671C11.901 4.33935 12.2438 4.8083 12.4783 5.33278C12.7129 5.85727 12.8339 6.42542 12.8333 6.99996C12.8339 7.5745 12.7129 8.14265 12.4783 8.66713C12.2438 9.19162 11.901 9.66057 11.4724 10.0432C11.4155 10.0951 11.3488 10.1353 11.2763 10.1613C11.2038 10.1873 11.1268 10.1987 11.0498 10.1948C10.9729 10.1909 10.8974 10.1718 10.8279 10.1386C10.7584 10.1054 10.6961 10.0587 10.6447 10.0013C10.5933 9.94392 10.5538 9.8769 10.5284 9.80412C10.5031 9.73135 10.4924 9.65428 10.497 9.57736C10.5016 9.50044 10.5214 9.42519 10.5553 9.35597C10.5891 9.28674 10.6364 9.22491 10.6942 9.17404C11.0006 8.90082 11.2456 8.56584 11.4132 8.19112C11.5808 7.8164 11.6672 7.41045 11.6667 6.99996C11.6667 6.13663 11.2922 5.36079 10.6942 4.82588C10.6364 4.77501 10.5891 4.71318 10.5553 4.64395C10.5214 4.57473 10.5016 4.49948 10.497 4.42256C10.4924 4.34564 10.5031 4.26857 10.5284 4.19579C10.5538 4.12302 10.5933 4.056 10.6447 3.99858C10.6961 3.94117 10.7584 3.89451 10.8279 3.8613C10.8974 3.82809 10.9729 3.80899 11.0498 3.8051C11.1268 3.8012 11.2038 3.8126 11.2763 3.83862C11.3488 3.86464 11.4155 3.90478 11.4724 3.95671ZM10.3057 5.26104C10.5505 5.47964 10.7463 5.74751 10.8804 6.04709C11.0144 6.34667 11.0835 6.67119 11.0833 6.99938C11.0837 7.32776 11.0147 7.65252 10.8806 7.95232C10.7466 8.25212 10.5507 8.52017 10.3057 8.73888C10.1951 8.83712 10.0513 8.88966 9.9034 8.88586C9.7555 8.88206 9.61457 8.8222 9.50914 8.71841C9.40371 8.61461 9.34166 8.47462 9.33555 8.3268C9.32944 8.17897 9.37974 8.03435 9.47625 7.92221L9.52758 7.86971C9.76675 7.65504 9.91666 7.34529 9.91666 6.99996C9.91735 6.70124 9.80286 6.41375 9.597 6.19729L9.52758 6.13021C9.46969 6.07934 9.42246 6.01751 9.38861 5.94829C9.35475 5.87906 9.33495 5.80381 9.33034 5.72689C9.32574 5.64997 9.33642 5.5729 9.36176 5.50013C9.38711 5.42736 9.42663 5.36033 9.47803 5.30292C9.52943 5.24551 9.5917 5.19885 9.66123 5.16564C9.73077 5.13243 9.8062 5.11332 9.88316 5.10943C9.96012 5.10554 10.0371 5.11693 10.1096 5.14295C10.1822 5.16898 10.2488 5.20911 10.3057 5.26104Z" })); };

var X = function (props) { return React__namespace.createElement("svg", __assign({ fill: color, stroke: color, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    React__namespace.createElement("path", { d: "M10.5 3.5L3.5 10.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
    React__namespace.createElement("path", { d: "M3.5 3.5L10.5 10.5", strokeWidth: 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })); };

exports.Arrowleft = Arrowleft;
exports.Arrowright = Arrowright;
exports.Calendar = Calendar;
exports.ChartLine = ChartLine;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronLeft12 = ChevronLeft12;
exports.ChevronRight = ChevronRight;
exports.ChevronRight12 = ChevronRight12;
exports.ChevronUp = ChevronUp;
exports.CircleHelp = CircleHelp;
exports.CircleHelpSolid = CircleHelpSolid;
exports.CirclePlus = CirclePlus;
exports.CirclePlusSolid = CirclePlusSolid;
exports.CircleX = CircleX;
exports.CircleXSolid = CircleXSolid;
exports.Clock = Clock;
exports.Copy = Copy;
exports.CornerDownRight = CornerDownRight;
exports.Download = Download;
exports.Ellipsis = Ellipsis;
exports.EllipsisVertical = EllipsisVertical;
exports.FileText = FileText;
exports.Folder = Folder;
exports.Image = Image;
exports.ImageSolid = ImageSolid;
exports.Info = Info;
exports.InfoSolid = InfoSolid;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.MapPin = MapPin;
exports.Paperclip = Paperclip;
exports.Pause = Pause;
exports.PenLine = PenLine;
exports.Pencil = Pencil;
exports.PencilLine = PencilLine;
exports.Phone = Phone;
exports.Play = Play;
exports.Plus = Plus;
exports.PolygonDown = PolygonDown;
exports.PolygonUp = PolygonUp;
exports.Replay = Replay;
exports.Search = Search;
exports.Settings = Settings;
exports.Share = Share;
exports.SquarePen = SquarePen;
exports.Trash = Trash;
exports.Upload = Upload;
exports.Volume = Volume;
exports.VolumeLine = VolumeLine;
exports.VolumeOff = VolumeOff;
exports.X = X;
