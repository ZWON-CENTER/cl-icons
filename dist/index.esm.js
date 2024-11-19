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

var ChevronDown = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.333, d: "m4 6 4 4 4-4" })); };

var ChevronLeft = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.333, d: "M10 12 6 8l4-4" })); };

var ChevronRight = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.333, d: "m6 12 4-4-4-4" })); };

var ChevronUp = function (props) { return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" }, props),
    React.createElement("path", { stroke: "#ACB4BD", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.333, d: "M12 10 8 6l-4 4" })); };

export { ChevronDown, ChevronLeft, ChevronRight, ChevronUp };
