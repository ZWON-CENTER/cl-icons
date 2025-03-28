import React from 'react';

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

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$10 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Arrowleft = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$10) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.54167 10.5L2.04167 7L5.54167 3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.9583 7H2.04167", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.54167 10.5L2.04167 7L5.54167 3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.9583 7H2.04167", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$$ = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Arrowright = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$$) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.04167 7L11.9583 7", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.45833 3.5L11.9583 7L8.45833 10.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.04167 7L11.9583 7", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.45833 3.5L11.9583 7L8.45833 10.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$_ = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Calendar = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$_) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M4.66668 1.16663V3.49996", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33332 1.16663V3.49996", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.0833 2.33337H2.91667C2.27233 2.33337 1.75 2.85571 1.75 3.50004V11.6667C1.75 12.311 2.27233 12.8334 2.91667 12.8334H11.0833C11.7277 12.8334 12.25 12.311 12.25 11.6667V3.50004C12.25 2.85571 11.7277 2.33337 11.0833 2.33337Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M1.75 5.83337H12.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M4.66668 8.16663H4.67335", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 8.16663H7.00667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33332 8.16663H9.33999", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M4.66668 10.5H4.67335", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 10.5H7.00667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33332 10.5H9.33999", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M4.66668 1.16663V3.49996", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33332 1.16663V3.49996", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.0833 2.33337H2.91667C2.27233 2.33337 1.75 2.85571 1.75 3.50004V11.6667C1.75 12.311 2.27233 12.8334 2.91667 12.8334H11.0833C11.7277 12.8334 12.25 12.311 12.25 11.6667V3.50004C12.25 2.85571 11.7277 2.33337 11.0833 2.33337Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M1.75 5.83337H12.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M4.66668 8.16663H4.67335", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 8.16663H7.00667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33332 8.16663H9.33999", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M4.66668 10.5H4.67335", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 10.5H7.00667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33332 10.5H9.33999", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$Z = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChartLine = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$Z) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M1.75 1.75V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H12.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.0833 5.25L8.16665 8.16667L5.83331 5.83333L4.08331 7.58333", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1.75 1.75V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H12.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.0833 5.25L8.16665 8.16667L5.83331 5.83333L4.08331 7.58333", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$Y = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Chat = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$Y) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.625 7.99877C2.62527 6.82035 3.0128 5.67468 3.72794 4.73808C4.44309 3.80147 5.44621 3.12584 6.58293 2.81516C7.71966 2.50449 8.92698 2.57598 10.0191 3.01865C11.1112 3.46131 12.0276 4.25062 12.6272 5.26508C13.2268 6.27955 13.4764 7.46295 13.3376 8.63316C13.1988 9.80337 12.6792 10.8955 11.8589 11.7416C11.0386 12.5876 9.96302 13.1406 8.79765 13.3155C7.63228 13.4904 6.44174 13.2774 5.40925 12.7094L3.31945 13.3458C3.22624 13.3742 3.12706 13.3767 3.03253 13.3531C2.93799 13.3295 2.85166 13.2806 2.78275 13.2117C2.71385 13.1428 2.66498 13.0565 2.64136 12.9619C2.61774 12.8674 2.62026 12.7682 2.64865 12.675L3.28505 10.582C2.85157 9.79002 2.62457 8.90161 2.625 7.99877ZM5.85 7.46127C5.85 7.60382 5.90663 7.74054 6.00743 7.84134C6.10823 7.94214 6.24494 7.99877 6.3875 7.99877H9.6125C9.75505 7.99877 9.89177 7.94214 9.99257 7.84134C10.0934 7.74054 10.15 7.60382 10.15 7.46127C10.15 7.31871 10.0934 7.182 9.99257 7.0812C9.89177 6.9804 9.75505 6.92377 9.6125 6.92377H6.3875C6.24494 6.92377 6.10823 6.9804 6.00743 7.0812C5.90663 7.182 5.85 7.31871 5.85 7.46127ZM6.3875 9.07377C6.24494 9.07377 6.10823 9.1304 6.00743 9.2312C5.90663 9.332 5.85 9.46871 5.85 9.61127C5.85 9.75382 5.90663 9.89054 6.00743 9.99134C6.10823 10.0921 6.24494 10.1488 6.3875 10.1488H8.5375C8.68005 10.1488 8.81677 10.0921 8.91757 9.99134C9.01837 9.89054 9.075 9.75382 9.075 9.61127C9.075 9.46871 9.01837 9.332 8.91757 9.2312C8.81677 9.1304 8.68005 9.07377 8.5375 9.07377H6.3875Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.625 7.99877C2.62527 6.82035 3.0128 5.67468 3.72794 4.73808C4.44309 3.80147 5.44621 3.12584 6.58293 2.81516C7.71966 2.50449 8.92698 2.57598 10.0191 3.01865C11.1112 3.46131 12.0276 4.25062 12.6272 5.26508C13.2268 6.27955 13.4764 7.46295 13.3376 8.63316C13.1988 9.80337 12.6792 10.8955 11.8589 11.7416C11.0386 12.5876 9.96302 13.1406 8.79765 13.3155C7.63228 13.4904 6.44174 13.2774 5.40925 12.7094L3.31945 13.3458C3.22624 13.3742 3.12706 13.3767 3.03253 13.3531C2.93799 13.3295 2.85166 13.2806 2.78275 13.2117C2.71385 13.1428 2.66498 13.0565 2.64136 12.9619C2.61774 12.8674 2.62026 12.7682 2.64865 12.675L3.28505 10.582C2.85157 9.79002 2.62457 8.90161 2.625 7.99877ZM5.85 7.46127C5.85 7.60382 5.90663 7.74054 6.00743 7.84134C6.10823 7.94214 6.24494 7.99877 6.3875 7.99877H9.6125C9.75505 7.99877 9.89177 7.94214 9.99257 7.84134C10.0934 7.74054 10.15 7.60382 10.15 7.46127C10.15 7.31871 10.0934 7.182 9.99257 7.0812C9.89177 6.9804 9.75505 6.92377 9.6125 6.92377H6.3875C6.24494 6.92377 6.10823 6.9804 6.00743 7.0812C5.90663 7.182 5.85 7.31871 5.85 7.46127ZM6.3875 9.07377C6.24494 9.07377 6.10823 9.1304 6.00743 9.2312C5.90663 9.332 5.85 9.46871 5.85 9.61127C5.85 9.75382 5.90663 9.89054 6.00743 9.99134C6.10823 10.0921 6.24494 10.1488 6.3875 10.1488H8.5375C8.68005 10.1488 8.81677 10.0921 8.91757 9.99134C9.01837 9.89054 9.075 9.75382 9.075 9.61127C9.075 9.46871 9.01837 9.332 8.91757 9.2312C8.81677 9.1304 8.68005 9.07377 8.5375 9.07377H6.3875Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$X = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronDown = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$X) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$W = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronLeft12 = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$W) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.75 10.5L2.25 7L5.75 3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.75 10.5L2.25 7L5.75 3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$V = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronLeft = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$V) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M8.75 10.5L5.25 7L8.75 3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.75 10.5L5.25 7L8.75 3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$U = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronRight12 = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$U) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.25 10.5L5.75 7L2.25 3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.25 10.5L5.75 7L2.25 3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$T = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronRight = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$T) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.25 10.5L8.75 7L5.25 3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.25 10.5L8.75 7L5.25 3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$S = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ChevronUp = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$S) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M10.5 8.75L7 5.25L3.5 8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M10.5 8.75L7 5.25L3.5 8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$R = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CircleHelpSolid = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$R) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5969)" },
                    React.createElement(Path, { d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" }),
                    React.createElement(Path, { d: "M6.36221 4.82495C6.59975 4.68535 6.87902 4.63432 7.15058 4.6809C7.42213 4.72748 7.66844 4.86866 7.84587 5.07944C8.02331 5.29022 8.12042 5.55786 8.12001 5.83338C8.12001 6.10704 7.90703 6.39234 7.50477 6.66052C7.32139 6.78277 7.13385 6.87696 6.98987 6.94095C6.9187 6.97258 6.86021 6.99594 6.82087 7.01092C6.51563 7.11303 6.29813 7.46242 6.39994 7.76785C6.50182 8.07348 6.83218 8.23866 7.13781 8.13678C7.13781 8.13678 7.20797 8.11191 7.2362 8.10116C7.29257 8.07968 7.3708 8.04835 7.46369 8.00706C7.64783 7.92522 7.8978 7.80066 8.15192 7.63125C8.62456 7.31615 9.28641 6.72662 9.28668 5.83391C9.28742 5.283 9.0932 4.74958 8.7384 4.32811C8.38353 3.90655 7.89092 3.62418 7.34781 3.53103C6.8047 3.43787 6.24615 3.53993 5.77108 3.81913C5.29602 4.09833 4.93509 4.53666 4.75223 5.05647C4.64532 5.36038 4.80502 5.69342 5.10893 5.80033C5.41284 5.90724 5.74588 5.74753 5.85279 5.44362C5.94422 5.18372 6.12468 4.96455 6.36221 4.82495Z", fill: props.fill || props.color || "white" }),
                    React.createElement(Path, { d: "M6.41668 9.91659C6.41668 9.59442 6.67785 9.33325 7.00001 9.33325C7.32218 9.33325 7.58918 9.59442 7.58918 9.91659C7.58918 10.2388 7.32218 10.4999 7.00001 10.4999C6.67785 10.4999 6.41668 10.2388 6.41668 9.91659Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "white" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5969" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("g", { clipPath: "url(#clip0_2197_5969)" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z", fill: "#ACB4BD" }),
                React.createElement("path", { d: "M6.36221 4.82495C6.59975 4.68535 6.87902 4.63432 7.15058 4.6809C7.42213 4.72748 7.66844 4.86866 7.84587 5.07944C8.02331 5.29022 8.12042 5.55786 8.12001 5.83338C8.12001 6.10704 7.90703 6.39234 7.50477 6.66052C7.32139 6.78277 7.13385 6.87696 6.98987 6.94095C6.9187 6.97258 6.86021 6.99594 6.82087 7.01092C6.51563 7.11303 6.29813 7.46242 6.39994 7.76785C6.50182 8.07348 6.83218 8.23866 7.13781 8.13678C7.13781 8.13678 7.20797 8.11191 7.2362 8.10116C7.29257 8.07968 7.3708 8.04835 7.46369 8.00706C7.64783 7.92522 7.8978 7.80066 8.15192 7.63125C8.62456 7.31615 9.28641 6.72662 9.28668 5.83391C9.28742 5.283 9.0932 4.74958 8.7384 4.32811C8.38353 3.90655 7.89092 3.62418 7.34781 3.53103C6.8047 3.43787 6.24615 3.53993 5.77108 3.81913C5.29602 4.09833 4.93509 4.53666 4.75223 5.05647C4.64532 5.36038 4.80502 5.69342 5.10893 5.80033C5.41284 5.90724 5.74588 5.74753 5.85279 5.44362C5.94422 5.18372 6.12468 4.96455 6.36221 4.82495Z", fill: "white" }),
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.41668 9.91659C6.41668 9.59442 6.67785 9.33325 7.00001 9.33325C7.32218 9.33325 7.58918 9.59442 7.58918 9.91659C7.58918 10.2388 7.32218 10.4999 7.00001 10.4999C6.67785 10.4999 6.41668 10.2388 6.41668 9.91659Z", fill: "white" })),
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip0_2197_5969" },
                    React.createElement("rect", { width: "14", height: "14", fill: "white" }))))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$Q = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CircleHelp = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$Q) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5965)" },
                    React.createElement(Path, { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 9.91675H7.00667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5965" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5965)" },
            React.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 9.91675H7.00667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5965" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$P = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CirclePlusSolid = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$P) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5959)" },
                    React.createElement(Path, { d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" }),
                    React.createElement(Path, { d: "M4.66665 6.41671C4.34449 6.41671 4.08332 6.67787 4.08332 7.00004C4.08332 7.32221 4.34449 7.58337 4.66665 7.58337H6.41665V9.33337C6.41665 9.65554 6.67782 9.91671 6.99999 9.91671C7.32215 9.91671 7.58332 9.65554 7.58332 9.33337V7.58337H9.33332C9.65548 7.58337 9.91665 7.32221 9.91665 7.00004C9.91665 6.67787 9.65548 6.41671 9.33332 6.41671H7.58332V4.66671C7.58332 4.34454 7.32215 4.08337 6.99999 4.08337C6.67782 4.08337 6.41665 4.34454 6.41665 4.66671V6.41671H4.66665Z", fill: props.fill || props.color || "white" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5959" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("g", { clipPath: "url(#clip0_2197_5959)" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z", fill: "#ACB4BD" }),
                React.createElement("path", { d: "M4.66665 6.41671C4.34449 6.41671 4.08332 6.67787 4.08332 7.00004C4.08332 7.32221 4.34449 7.58337 4.66665 7.58337H6.41665V9.33337C6.41665 9.65554 6.67782 9.91671 6.99999 9.91671C7.32215 9.91671 7.58332 9.65554 7.58332 9.33337V7.58337H9.33332C9.65548 7.58337 9.91665 7.32221 9.91665 7.00004C9.91665 6.67787 9.65548 6.41671 9.33332 6.41671H7.58332V4.66671C7.58332 4.34454 7.32215 4.08337 6.99999 4.08337C6.67782 4.08337 6.41665 4.34454 6.41665 4.66671V6.41671H4.66665Z", fill: "white" })),
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip0_2197_5959" },
                    React.createElement("rect", { width: "14", height: "14", fill: "white" }))))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$O = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CirclePlus = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$O) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5955)" },
                    React.createElement(Path, { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M4.66669 7H9.33335", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 4.66663V9.33329", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5955" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5955)" },
            React.createElement("path", { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M4.66669 7H9.33335", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 4.66663V9.33329", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5955" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$N = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CircleXSolid = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$N) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5952)" },
                    React.createElement(Path, { d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" }),
                    React.createElement(Path, { d: "M9.16249 4.83748C9.3903 5.06529 9.3903 5.43463 9.16249 5.66244L7.82497 6.99996L9.16249 8.33748C9.3903 8.56529 9.3903 8.93463 9.16249 9.16244C8.93469 9.39024 8.56534 9.39024 8.33754 9.16244L7.00001 7.82492L5.66249 9.16244C5.43469 9.39024 5.06534 9.39024 4.83754 9.16244C4.60973 8.93463 4.60973 8.56529 4.83754 8.33748L6.17506 6.99996L4.83754 5.66244C4.60973 5.43463 4.60973 5.06529 4.83754 4.83748C5.06534 4.60967 5.43469 4.60967 5.66249 4.83748L7.00001 6.175L8.33754 4.83748C8.56534 4.60967 8.93469 4.60967 9.16249 4.83748Z", fill: props.fill || props.color || "white" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5952" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("g", { clipPath: "url(#clip0_2197_5952)" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z", fill: "#ACB4BD" }),
                React.createElement("path", { d: "M9.16249 4.83748C9.3903 5.06529 9.3903 5.43463 9.16249 5.66244L7.82497 6.99996L9.16249 8.33748C9.3903 8.56529 9.3903 8.93463 9.16249 9.16244C8.93469 9.39024 8.56534 9.39024 8.33754 9.16244L7.00001 7.82492L5.66249 9.16244C5.43469 9.39024 5.06534 9.39024 4.83754 9.16244C4.60973 8.93463 4.60973 8.56529 4.83754 8.33748L6.17506 6.99996L4.83754 5.66244C4.60973 5.43463 4.60973 5.06529 4.83754 4.83748C5.06534 4.60967 5.43469 4.60967 5.66249 4.83748L7.00001 6.175L8.33754 4.83748C8.56534 4.60967 8.93469 4.60967 9.16249 4.83748Z", fill: "white" })),
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip0_2197_5952" },
                    React.createElement("rect", { width: "14", height: "14", fill: "white" }))))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$M = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CircleX = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$M) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5948)" },
                    React.createElement(Path, { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M8.75 5.25L5.25 8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M5.25 5.25L8.75 8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5948" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5948)" },
            React.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M8.75 5.25L5.25 8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M5.25 5.25L8.75 8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5948" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$L = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Clock = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$L) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5982)" },
                    React.createElement(Path, { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 3.5V7H9.625", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5982" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5982)" },
            React.createElement("path", { d: "M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 3.5V7H9.625", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5982" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$K = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Copy = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$K) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5836)" },
                    React.createElement(Path, { d: "M11.6667 4.66663H5.83335C5.18901 4.66663 4.66668 5.18896 4.66668 5.83329V11.6666C4.66668 12.311 5.18901 12.8333 5.83335 12.8333H11.6667C12.311 12.8333 12.8333 12.311 12.8333 11.6666V5.83329C12.8333 5.18896 12.311 4.66663 11.6667 4.66663Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M2.33335 9.33329C1.69168 9.33329 1.16668 8.80829 1.16668 8.16663V2.33329C1.16668 1.69163 1.69168 1.16663 2.33335 1.16663H8.16668C8.80835 1.16663 9.33335 1.69163 9.33335 2.33329", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5836" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5836)" },
            React.createElement("path", { d: "M11.6667 4.66663H5.83335C5.18901 4.66663 4.66668 5.18896 4.66668 5.83329V11.6666C4.66668 12.311 5.18901 12.8333 5.83335 12.8333H11.6667C12.311 12.8333 12.8333 12.311 12.8333 11.6666V5.83329C12.8333 5.18896 12.311 4.66663 11.6667 4.66663Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M2.33335 9.33329C1.69168 9.33329 1.16668 8.80829 1.16668 8.16663V2.33329C1.16668 1.69163 1.69168 1.16663 2.33335 1.16663H8.16668C8.80835 1.16663 9.33335 1.69163 9.33335 2.33329", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5836" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$J = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var CornerDownRight = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$J) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M8.75 5.83337L11.6667 8.75004L8.75 11.6667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M2.33332 2.33337V6.41671C2.33332 7.03555 2.57915 7.62904 3.01674 8.06662C3.45432 8.50421 4.04781 8.75004 4.66665 8.75004H11.6667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.75 5.83337L11.6667 8.75004L8.75 11.6667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M2.33332 2.33337V6.41671C2.33332 7.03555 2.57915 7.62904 3.01674 8.06662C3.45432 8.50421 4.04781 8.75004 4.66665 8.75004H11.6667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$I = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Document = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$I) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M3.82429 2.91531C3.19922 3.5898 3.19922 4.67614 3.19922 6.84823V9.15224C3.19922 11.3243 3.19922 12.4107 3.82429 13.0852C4.44935 13.7597 5.45469 13.7602 7.46589 13.7602H8.53255C10.5438 13.7602 11.5496 13.7602 12.1742 13.0852C12.7987 12.4101 12.7992 11.3243 12.7992 9.15224V6.84823C12.7992 4.67614 12.7992 3.5898 12.1742 2.91531C11.5491 2.24081 10.5438 2.24023 8.53255 2.24023H7.46589C5.45469 2.24023 4.44882 2.24023 3.82429 2.91531ZM5.46589 5.69623C5.46589 5.58166 5.50803 5.47178 5.58304 5.39076C5.65806 5.30975 5.7598 5.26423 5.86589 5.26423H10.1326C10.2386 5.26423 10.3404 5.30975 10.4154 5.39076C10.4904 5.47178 10.5326 5.58166 10.5326 5.69623C10.5326 5.81081 10.4904 5.92069 10.4154 6.0017C10.3404 6.08272 10.2386 6.12823 10.1326 6.12823H5.86589C5.7598 6.12823 5.65806 6.08272 5.58304 6.0017C5.50803 5.92069 5.46589 5.81081 5.46589 5.69623ZM5.46589 8.00023C5.46589 7.88566 5.50803 7.77578 5.58304 7.69476C5.65806 7.61375 5.7598 7.56823 5.86589 7.56823H10.1326C10.2386 7.56823 10.3404 7.61375 10.4154 7.69476C10.4904 7.77578 10.5326 7.88566 10.5326 8.00023C10.5326 8.11481 10.4904 8.22469 10.4154 8.3057C10.3404 8.38672 10.2386 8.43223 10.1326 8.43223H5.86589C5.7598 8.43223 5.65806 8.38672 5.58304 8.3057C5.50803 8.22469 5.46589 8.11481 5.46589 8.00023ZM5.86589 9.87223C5.7598 9.87223 5.65806 9.91775 5.58304 9.99876C5.50803 10.0798 5.46589 10.1897 5.46589 10.3042C5.46589 10.4188 5.50803 10.5287 5.58304 10.6097C5.65806 10.6907 5.7598 10.7362 5.86589 10.7362H8.53255C8.63864 10.7362 8.74038 10.6907 8.81539 10.6097C8.89041 10.5287 8.93255 10.4188 8.93255 10.3042C8.93255 10.1897 8.89041 10.0798 8.81539 9.99876C8.74038 9.91775 8.63864 9.87223 8.53255 9.87223H5.86589Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.82429 2.91531C3.19922 3.5898 3.19922 4.67614 3.19922 6.84823V9.15224C3.19922 11.3243 3.19922 12.4107 3.82429 13.0852C4.44935 13.7597 5.45469 13.7602 7.46589 13.7602H8.53255C10.5438 13.7602 11.5496 13.7602 12.1742 13.0852C12.7987 12.4101 12.7992 11.3243 12.7992 9.15224V6.84823C12.7992 4.67614 12.7992 3.5898 12.1742 2.91531C11.5491 2.24081 10.5438 2.24023 8.53255 2.24023H7.46589C5.45469 2.24023 4.44882 2.24023 3.82429 2.91531ZM5.46589 5.69623C5.46589 5.58166 5.50803 5.47178 5.58304 5.39076C5.65806 5.30975 5.7598 5.26423 5.86589 5.26423H10.1326C10.2386 5.26423 10.3404 5.30975 10.4154 5.39076C10.4904 5.47178 10.5326 5.58166 10.5326 5.69623C10.5326 5.81081 10.4904 5.92069 10.4154 6.0017C10.3404 6.08272 10.2386 6.12823 10.1326 6.12823H5.86589C5.7598 6.12823 5.65806 6.08272 5.58304 6.0017C5.50803 5.92069 5.46589 5.81081 5.46589 5.69623ZM5.46589 8.00023C5.46589 7.88566 5.50803 7.77578 5.58304 7.69476C5.65806 7.61375 5.7598 7.56823 5.86589 7.56823H10.1326C10.2386 7.56823 10.3404 7.61375 10.4154 7.69476C10.4904 7.77578 10.5326 7.88566 10.5326 8.00023C10.5326 8.11481 10.4904 8.22469 10.4154 8.3057C10.3404 8.38672 10.2386 8.43223 10.1326 8.43223H5.86589C5.7598 8.43223 5.65806 8.38672 5.58304 8.3057C5.50803 8.22469 5.46589 8.11481 5.46589 8.00023ZM5.86589 9.87223C5.7598 9.87223 5.65806 9.91775 5.58304 9.99876C5.50803 10.0798 5.46589 10.1897 5.46589 10.3042C5.46589 10.4188 5.50803 10.5287 5.58304 10.6097C5.65806 10.6907 5.7598 10.7362 5.86589 10.7362H8.53255C8.63864 10.7362 8.74038 10.6907 8.81539 10.6097C8.89041 10.5287 8.93255 10.4188 8.93255 10.3042C8.93255 10.1897 8.89041 10.0798 8.81539 9.99876C8.74038 9.91775 8.63864 9.87223 8.53255 9.87223H5.86589Z", fill: "#ACB4BD" }))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$H = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Download = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$H) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M4.08332 5.83337L6.99999 8.75004L9.91665 5.83337", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 8.75V1.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M4.08332 5.83337L6.99999 8.75004L9.91665 5.83337", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 8.75V1.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$G = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var EllipsisVertical = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$G) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7.00001 3.49992C7.32218 3.49992 7.58335 3.23875 7.58335 2.91659C7.58335 2.59442 7.32218 2.33325 7.00001 2.33325C6.67785 2.33325 6.41668 2.59442 6.41668 2.91659C6.41668 3.23875 6.67785 3.49992 7.00001 3.49992Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7.00001 11.6667C7.32218 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41668 10.7612 6.41668 11.0833C6.41668 11.4055 6.67785 11.6667 7.00001 11.6667Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7.00001 3.49992C7.32218 3.49992 7.58335 3.23875 7.58335 2.91659C7.58335 2.59442 7.32218 2.33325 7.00001 2.33325C6.67785 2.33325 6.41668 2.59442 6.41668 2.91659C6.41668 3.23875 6.67785 3.49992 7.00001 3.49992Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7.00001 11.6667C7.32218 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41668 10.7612 6.41668 11.0833C6.41668 11.4055 6.67785 11.6667 7.00001 11.6667Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$F = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Ellipsis = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$F) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.0833 7.58341C11.4055 7.58341 11.6667 7.32225 11.6667 7.00008C11.6667 6.67792 11.4055 6.41675 11.0833 6.41675C10.7612 6.41675 10.5 6.67792 10.5 7.00008C10.5 7.32225 10.7612 7.58341 11.0833 7.58341Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M2.91665 7.58341C3.23882 7.58341 3.49999 7.32225 3.49999 7.00008C3.49999 6.67792 3.23882 6.41675 2.91665 6.41675C2.59449 6.41675 2.33332 6.67792 2.33332 7.00008C2.33332 7.32225 2.59449 7.58341 2.91665 7.58341Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.0833 7.58341C11.4055 7.58341 11.6667 7.32225 11.6667 7.00008C11.6667 6.67792 11.4055 6.41675 11.0833 6.41675C10.7612 6.41675 10.5 6.67792 10.5 7.00008C10.5 7.32225 10.7612 7.58341 11.0833 7.58341Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M2.91665 7.58341C3.23882 7.58341 3.49999 7.32225 3.49999 7.00008C3.49999 6.67792 3.23882 6.41675 2.91665 6.41675C2.59449 6.41675 2.33332 6.67792 2.33332 7.00008C2.33332 7.32225 2.59449 7.58341 2.91665 7.58341Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$E = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var FileText = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$E) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M8.74999 1.16663H3.49999C3.19057 1.16663 2.89382 1.28954 2.67503 1.50833C2.45624 1.72713 2.33332 2.02387 2.33332 2.33329V11.6666C2.33332 11.976 2.45624 12.2728 2.67503 12.4916C2.89382 12.7104 3.19057 12.8333 3.49999 12.8333H10.5C10.8094 12.8333 11.1062 12.7104 11.3249 12.4916C11.5437 12.2728 11.6667 11.976 11.6667 11.6666V4.08329L8.74999 1.16663Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.16668 1.16663V3.49996C8.16668 3.80938 8.2896 4.10612 8.50839 4.32492C8.72718 4.54371 9.02393 4.66663 9.33335 4.66663H11.6667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M5.83335 5.25H4.66668", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33335 7.58337H4.66668", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33335 9.91663H4.66668", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.74999 1.16663H3.49999C3.19057 1.16663 2.89382 1.28954 2.67503 1.50833C2.45624 1.72713 2.33332 2.02387 2.33332 2.33329V11.6666C2.33332 11.976 2.45624 12.2728 2.67503 12.4916C2.89382 12.7104 3.19057 12.8333 3.49999 12.8333H10.5C10.8094 12.8333 11.1062 12.7104 11.3249 12.4916C11.5437 12.2728 11.6667 11.976 11.6667 11.6666V4.08329L8.74999 1.16663Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.16668 1.16663V3.49996C8.16668 3.80938 8.2896 4.10612 8.50839 4.32492C8.72718 4.54371 9.02393 4.66663 9.33335 4.66663H11.6667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M5.83335 5.25H4.66668", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33335 7.58337H4.66668", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33335 9.91663H4.66668", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$D = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Filter = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$D) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M1.75 3.5H12.25", stroke: props.stroke || props.color || "#6B747E", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M4.08594 7H9.91927", stroke: props.stroke || props.color || "#6B747E", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M5.83594 10.5H8.16927", stroke: props.stroke || props.color || "#6B747E", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1.75 3.5H12.25", stroke: "#6B747E", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M4.08594 7H9.91927", stroke: "#6B747E", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M5.83594 10.5H8.16927", stroke: "#6B747E", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$C = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Folder = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$C) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M1.16667 5.83337H12.8333", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M1.16667 5.83337H12.8333", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$B = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Home = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$B) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M8.71643 2.78182C8.51977 2.60038 8.26473 2.5 8.00036 2.5C7.73598 2.5 7.48094 2.60038 7.28429 2.78182L3.35571 6.40687C3.24389 6.50996 3.15443 6.63605 3.09314 6.77695C3.03186 6.91786 3.00012 7.07043 3 7.22475V12.3997C3 12.6915 3.11288 12.9714 3.31381 13.1777C3.51475 13.3841 3.78727 13.5 4.07143 13.5H5.5C5.78416 13.5 6.05668 13.3841 6.25761 13.1777C6.45855 12.9714 6.57143 12.6915 6.57143 12.3997V9.46565C6.57143 9.36838 6.60906 9.27509 6.67603 9.20631C6.74301 9.13753 6.83385 9.09889 6.92857 9.09889H9.07143C9.16615 9.09889 9.25699 9.13753 9.32397 9.20631C9.39094 9.27509 9.42857 9.36838 9.42857 9.46565V12.3997C9.42857 12.6915 9.54145 12.9714 9.74239 13.1777C9.94332 13.3841 10.2158 13.5 10.5 13.5H11.9286C12.2127 13.5 12.4853 13.3841 12.6862 13.1777C12.8871 12.9714 13 12.6915 13 12.3997V7.22475C13 7.07048 12.9683 6.91795 12.9072 6.77705C12.846 6.63614 12.7567 6.51003 12.645 6.40687L8.71643 2.78182Z", fill: props.fill || props.color || "white" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.71643 2.78182C8.51977 2.60038 8.26473 2.5 8.00036 2.5C7.73598 2.5 7.48094 2.60038 7.28429 2.78182L3.35571 6.40687C3.24389 6.50996 3.15443 6.63605 3.09314 6.77695C3.03186 6.91786 3.00012 7.07043 3 7.22475V12.3997C3 12.6915 3.11288 12.9714 3.31381 13.1777C3.51475 13.3841 3.78727 13.5 4.07143 13.5H5.5C5.78416 13.5 6.05668 13.3841 6.25761 13.1777C6.45855 12.9714 6.57143 12.6915 6.57143 12.3997V9.46565C6.57143 9.36838 6.60906 9.27509 6.67603 9.20631C6.74301 9.13753 6.83385 9.09889 6.92857 9.09889H9.07143C9.16615 9.09889 9.25699 9.13753 9.32397 9.20631C9.39094 9.27509 9.42857 9.36838 9.42857 9.46565V12.3997C9.42857 12.6915 9.54145 12.9714 9.74239 13.1777C9.94332 13.3841 10.2158 13.5 10.5 13.5H11.9286C12.2127 13.5 12.4853 13.3841 12.6862 13.1777C12.8871 12.9714 13 12.6915 13 12.3997V7.22475C13 7.07048 12.9683 6.91795 12.9072 6.77705C12.846 6.63614 12.7567 6.51003 12.645 6.40687L8.71643 2.78182Z", fill: "white" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$A = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var ImageSolid = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$A) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M11.0833 12.25C11.7277 12.25 12.25 11.7277 12.25 11.0833V9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25H11.0833Z", fill: props.fill || props.color || "#ACB4BD" }),
                React.createElement(Path, { d: "M12.25 9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25M12.25 9.04167V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H3.5M12.25 9.04167V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M6.41667 5.25004C6.41667 5.89437 5.89433 6.41671 5.25 6.41671C4.60567 6.41671 4.08334 5.89437 4.08334 5.25004C4.08334 4.60571 4.60567 4.08337 5.25 4.08337C5.89433 4.08337 6.41667 4.60571 6.41667 5.25004Z", fill: props.fill || props.color || "#ACB4BD", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11.0833 12.25C11.7277 12.25 12.25 11.7277 12.25 11.0833V9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25H11.0833Z", fill: "#ACB4BD" }),
        React.createElement("path", { d: "M12.25 9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25M12.25 9.04167V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H3.5M12.25 9.04167V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M6.41667 5.25004C6.41667 5.89437 5.89433 6.41671 5.25 6.41671C4.60567 6.41671 4.08334 5.89437 4.08334 5.25004C4.08334 4.60571 4.60567 4.08337 5.25 4.08337C5.89433 4.08337 6.41667 4.60571 6.41667 5.25004Z", fill: "#ACB4BD", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$z = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Image = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$z) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$y = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var InfoSolid = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$y) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5938)" },
                    React.createElement(Path, { d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" }),
                    React.createElement(Path, { d: "M7.00001 6.41663C7.32218 6.41663 7.58335 6.67779 7.58335 6.99996V9.33329C7.58335 9.65546 7.32218 9.91663 7.00001 9.91663C6.67785 9.91663 6.41668 9.65546 6.41668 9.33329V6.99996C6.41668 6.67779 6.67785 6.41663 7.00001 6.41663Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "white" }),
                    React.createElement(Path, { d: "M6.41668 4.66671C6.41668 4.34454 6.67785 4.08337 7.00001 4.08337C7.32218 4.08337 7.58918 4.34454 7.58918 4.66671C7.58918 4.98887 7.32218 5.25004 7.00001 5.25004C6.67785 5.25004 6.41668 4.98887 6.41668 4.66671Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "white" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5938" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("g", { clipPath: "url(#clip0_2197_5938)" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z", fill: "#ACB4BD" }),
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.00001 6.41663C7.32218 6.41663 7.58335 6.67779 7.58335 6.99996V9.33329C7.58335 9.65546 7.32218 9.91663 7.00001 9.91663C6.67785 9.91663 6.41668 9.65546 6.41668 9.33329V6.99996C6.41668 6.67779 6.67785 6.41663 7.00001 6.41663Z", fill: "white" }),
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.41668 4.66671C6.41668 4.34454 6.67785 4.08337 7.00001 4.08337C7.32218 4.08337 7.58918 4.34454 7.58918 4.66671C7.58918 4.98887 7.32218 5.25004 7.00001 5.25004C6.67785 5.25004 6.41668 4.98887 6.41668 4.66671Z", fill: "white" })),
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip0_2197_5938" },
                    React.createElement("rect", { width: "14", height: "14", fill: "white" }))))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$x = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Info = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$x) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5934)" },
                    React.createElement(Path, { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 9.33333V7", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 4.66663H7.00667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5934" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5934)" },
            React.createElement("path", { d: "M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 9.33333V7", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 4.66663H7.00667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5934" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$w = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var LogIn = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$w) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M8.75 1.75H11.0833C11.3928 1.75 11.6895 1.87292 11.9083 2.09171C12.1271 2.3105 12.25 2.60725 12.25 2.91667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M5.83332 9.91671L8.74999 7.00004L5.83332 4.08337", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.75 7H1.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.75 1.75H11.0833C11.3928 1.75 11.6895 1.87292 11.9083 2.09171C12.1271 2.3105 12.25 2.60725 12.25 2.91667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M5.83332 9.91671L8.74999 7.00004L5.83332 4.08337", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.75 7H1.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$v = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var LogOut = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$v) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33332 9.91671L12.25 7.00004L9.33332 4.08337", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M12.25 7H5.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33332 9.91671L12.25 7.00004L9.33332 4.08337", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M12.25 7H5.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$u = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var MapPin = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$u) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$t = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Marker = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$t) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2416_38881)" },
                    React.createElement(G, { filter: "url(#filter0_f_2416_38881)" },
                        React.createElement("ellipse", { cx: "11", cy: "25.5", rx: "3.5", ry: "1.5", fill: props.fill || props.color || "black", fillOpacity: "0.7" })),
                    React.createElement(G, { filter: "url(#filter1_d_2416_38881)" },
                        React.createElement(Path, { d: "M20 11C20 15.971 11 26 11 26C11 26 2 15.971 2 11C2 6.029 6.029 2 11 2C15.971 2 20 6.029 20 11Z", fill: props.fill || props.color || "#FF4B33" }),
                        React.createElement(Path, { d: "M19.5 11C19.5 12.1177 18.9855 13.5873 18.1492 15.2121C17.3212 16.8207 16.2118 18.518 15.0941 20.0722C13.9777 21.6245 12.8602 23.0241 12.0213 24.0362C11.6021 24.542 11.2529 24.9503 11.0089 25.2319C11.0059 25.2353 11.0029 25.2387 11 25.2421C10.9971 25.2387 10.9941 25.2353 10.9911 25.2319C10.7471 24.9503 10.3979 24.542 9.97869 24.0362C9.13977 23.0241 8.02231 21.6245 6.90593 20.0722C5.78824 18.518 4.6788 16.8207 3.85082 15.2121C3.01452 13.5873 2.5 12.1177 2.5 11C2.5 6.30514 6.30514 2.5 11 2.5C15.6949 2.5 19.5 6.30514 19.5 11Z", stroke: props.stroke || props.color || "white" })),
                    React.createElement(Path, { d: "M11 14.5C12.933 14.5 14.5 12.933 14.5 11C14.5 9.067 12.933 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.933 9.067 14.5 11 14.5Z", fill: props.fill || props.color || "white" })),
                React.createElement("defs", null,
                    React.createElement("filter", { id: "filter0_f_2416_38881", x: "5.5", y: "22", width: "11", height: "7", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                        React.createElement("feGaussianBlur", { stdDeviation: "1", result: "effect1_foregroundBlur_2416_38881" })),
                    React.createElement("filter", { id: "filter1_d_2416_38881", x: "-4", y: "-4", width: "30", height: "36", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                        React.createElement("feOffset", null),
                        React.createElement("feGaussianBlur", { stdDeviation: "3" }),
                        React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                        React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                        React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_2416_38881" }),
                        React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_2416_38881", result: "shape" })),
                    React.createElement("clipPath", { id: "clip0_2416_38881" },
                        React.createElement(Rect, { width: "22", height: "28", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2416_38881)" },
            React.createElement("g", { filter: "url(#filter0_f_2416_38881)" },
                React.createElement("ellipse", { cx: "11", cy: "25.5", rx: "3.5", ry: "1.5", fill: "black", fillOpacity: "0.7" })),
            React.createElement("g", { filter: "url(#filter1_d_2416_38881)" },
                React.createElement("path", { d: "M20 11C20 15.971 11 26 11 26C11 26 2 15.971 2 11C2 6.029 6.029 2 11 2C15.971 2 20 6.029 20 11Z", fill: "#FF4B33" }),
                React.createElement("path", { d: "M19.5 11C19.5 12.1177 18.9855 13.5873 18.1492 15.2121C17.3212 16.8207 16.2118 18.518 15.0941 20.0722C13.9777 21.6245 12.8602 23.0241 12.0213 24.0362C11.6021 24.542 11.2529 24.9503 11.0089 25.2319C11.0059 25.2353 11.0029 25.2387 11 25.2421C10.9971 25.2387 10.9941 25.2353 10.9911 25.2319C10.7471 24.9503 10.3979 24.542 9.97869 24.0362C9.13977 23.0241 8.02231 21.6245 6.90593 20.0722C5.78824 18.518 4.6788 16.8207 3.85082 15.2121C3.01452 13.5873 2.5 12.1177 2.5 11C2.5 6.30514 6.30514 2.5 11 2.5C15.6949 2.5 19.5 6.30514 19.5 11Z", stroke: "white" })),
            React.createElement("path", { d: "M11 14.5C12.933 14.5 14.5 12.933 14.5 11C14.5 9.067 12.933 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.933 9.067 14.5 11 14.5Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_f_2416_38881", x: "5.5", y: "22", width: "11", height: "7", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React.createElement("feGaussianBlur", { stdDeviation: "1", result: "effect1_foregroundBlur_2416_38881" })),
            React.createElement("filter", { id: "filter1_d_2416_38881", x: "-4", y: "-4", width: "30", height: "36", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", null),
                React.createElement("feGaussianBlur", { stdDeviation: "3" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_2416_38881" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_2416_38881", result: "shape" })),
            React.createElement("clipPath", { id: "clip0_2416_38881" },
                React.createElement("rect", { width: "22", height: "28", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$s = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Message = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$s) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M15.8346 2.5C16.4977 2.5 17.1336 2.76339 17.6024 3.23223C18.0712 3.70107 18.3346 4.33696 18.3346 5V13.3333C18.3346 13.9964 18.0712 14.6323 17.6024 15.1011C17.1336 15.5699 16.4977 15.8333 15.8346 15.8333H6.11214L3.33464 17.9167C2.64797 18.4317 1.66797 17.9417 1.66797 17.0833V5C1.66797 4.33696 1.93136 3.70107 2.4002 3.23223C2.86904 2.76339 3.50493 2.5 4.16797 2.5H15.8346ZM9.16797 10H6.66797C6.44695 10 6.23499 10.0878 6.07871 10.2441C5.92243 10.4004 5.83464 10.6123 5.83464 10.8333C5.83464 11.0543 5.92243 11.2663 6.07871 11.4226C6.23499 11.5789 6.44695 11.6667 6.66797 11.6667H9.16797C9.38898 11.6667 9.60094 11.5789 9.75722 11.4226C9.9135 11.2663 10.0013 11.0543 10.0013 10.8333C10.0013 10.6123 9.9135 10.4004 9.75722 10.2441C9.60094 10.0878 9.38898 10 9.16797 10ZM13.3346 6.66667H6.66797C6.45557 6.6669 6.25128 6.74823 6.09683 6.89404C5.94238 7.03985 5.84944 7.23913 5.83699 7.45116C5.82454 7.6632 5.89353 7.87198 6.02986 8.03486C6.16618 8.19774 6.35956 8.30241 6.57047 8.3275L6.66797 8.33333H13.3346C13.547 8.3331 13.7513 8.25177 13.9058 8.10596C14.0602 7.96015 14.1532 7.76087 14.1656 7.54884C14.1781 7.3368 14.1091 7.12802 13.9727 6.96514C13.8364 6.80226 13.643 6.69759 13.4321 6.6725L13.3346 6.66667Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8346 2.5C16.4977 2.5 17.1336 2.76339 17.6024 3.23223C18.0712 3.70107 18.3346 4.33696 18.3346 5V13.3333C18.3346 13.9964 18.0712 14.6323 17.6024 15.1011C17.1336 15.5699 16.4977 15.8333 15.8346 15.8333H6.11214L3.33464 17.9167C2.64797 18.4317 1.66797 17.9417 1.66797 17.0833V5C1.66797 4.33696 1.93136 3.70107 2.4002 3.23223C2.86904 2.76339 3.50493 2.5 4.16797 2.5H15.8346ZM9.16797 10H6.66797C6.44695 10 6.23499 10.0878 6.07871 10.2441C5.92243 10.4004 5.83464 10.6123 5.83464 10.8333C5.83464 11.0543 5.92243 11.2663 6.07871 11.4226C6.23499 11.5789 6.44695 11.6667 6.66797 11.6667H9.16797C9.38898 11.6667 9.60094 11.5789 9.75722 11.4226C9.9135 11.2663 10.0013 11.0543 10.0013 10.8333C10.0013 10.6123 9.9135 10.4004 9.75722 10.2441C9.60094 10.0878 9.38898 10 9.16797 10ZM13.3346 6.66667H6.66797C6.45557 6.6669 6.25128 6.74823 6.09683 6.89404C5.94238 7.03985 5.84944 7.23913 5.83699 7.45116C5.82454 7.6632 5.89353 7.87198 6.02986 8.03486C6.16618 8.19774 6.35956 8.30241 6.57047 8.3275L6.66797 8.33333H13.3346C13.547 8.3331 13.7513 8.25177 13.9058 8.10596C14.0602 7.96015 14.1532 7.76087 14.1656 7.54884C14.1781 7.3368 14.1091 7.12802 13.9727 6.96514C13.8364 6.80226 13.643 6.69759 13.4321 6.6725L13.3346 6.66667Z", fill: "#ACB4BD" }))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$r = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Minus = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$r) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.91699 7H11.0837", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.33333, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.91699 7H11.0837", stroke: "#ACB4BD", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$q = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Notification = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$q) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M10.0032 1.66406C8.45606 1.66406 6.97233 2.27864 5.87837 3.37261C4.7844 4.46657 4.16982 5.9503 4.16982 7.4974V10.4374C4.16994 10.5667 4.13999 10.6942 4.08232 10.8099L2.65149 13.6707C2.5816 13.8105 2.54859 13.9658 2.55561 14.1219C2.56264 14.278 2.60945 14.4298 2.69161 14.5627C2.77377 14.6956 2.88855 14.8053 3.02505 14.8814C3.16154 14.9575 3.31522 14.9974 3.47149 14.9974H16.5348C16.6911 14.9974 16.8448 14.9575 16.9813 14.8814C17.1178 14.8053 17.2325 14.6956 17.3147 14.5627C17.3969 14.4298 17.4437 14.278 17.4507 14.1219C17.4577 13.9658 17.4247 13.8105 17.3548 13.6707L15.9248 10.8099C15.8669 10.6943 15.8366 10.5667 15.8365 10.4374V7.4974C15.8365 5.9503 15.2219 4.46657 14.1279 3.37261C13.034 2.27864 11.5503 1.66406 10.0032 1.66406ZM10.0032 17.4974C9.48598 17.4975 8.98147 17.3373 8.55911 17.0389C8.13676 16.7404 7.81733 16.3183 7.64482 15.8307H12.3615C12.189 16.3183 11.8696 16.7404 11.4472 17.0389C11.0248 17.3373 10.5203 17.4975 10.0032 17.4974Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M10.0032 1.66406C8.45606 1.66406 6.97233 2.27864 5.87837 3.37261C4.7844 4.46657 4.16982 5.9503 4.16982 7.4974V10.4374C4.16994 10.5667 4.13999 10.6942 4.08232 10.8099L2.65149 13.6707C2.5816 13.8105 2.54859 13.9658 2.55561 14.1219C2.56264 14.278 2.60945 14.4298 2.69161 14.5627C2.77377 14.6956 2.88855 14.8053 3.02505 14.8814C3.16154 14.9575 3.31522 14.9974 3.47149 14.9974H16.5348C16.6911 14.9974 16.8448 14.9575 16.9813 14.8814C17.1178 14.8053 17.2325 14.6956 17.3147 14.5627C17.3969 14.4298 17.4437 14.278 17.4507 14.1219C17.4577 13.9658 17.4247 13.8105 17.3548 13.6707L15.9248 10.8099C15.8669 10.6943 15.8366 10.5667 15.8365 10.4374V7.4974C15.8365 5.9503 15.2219 4.46657 14.1279 3.37261C13.034 2.27864 11.5503 1.66406 10.0032 1.66406ZM10.0032 17.4974C9.48598 17.4975 8.98147 17.3373 8.55911 17.0389C8.13676 16.7404 7.81733 16.3183 7.64482 15.8307H12.3615C12.189 16.3183 11.8696 16.7404 11.4472 17.0389C11.0248 17.3373 10.5203 17.4975 10.0032 17.4974Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$p = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Notification2 = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$p) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M14.5631 3.33625C14.5631 4.24791 13.8241 4.98695 12.9124 4.98695C12.0008 4.98695 11.2617 4.24791 11.2617 3.33625C11.2617 2.42459 12.0008 1.68555 12.9124 1.68555C13.8241 1.68555 14.5631 2.42459 14.5631 3.33625Z", fill: props.fill || props.color || "#ACB4BD" }),
                React.createElement(Path, { d: "M13.7341 5.52708C13.5365 5.5778 13.3293 5.60497 13.1159 5.60497C11.75 5.60497 10.6428 4.49766 10.6428 3.13193C10.6428 2.9185 10.6699 2.71141 10.7207 2.51367H5.0785C3.71263 2.51367 2.60547 3.62098 2.60547 4.98671V11.1693C2.60547 12.535 3.71263 13.6423 5.0785 13.6423H11.2611C12.627 13.6423 13.7341 12.535 13.7341 11.1693V5.52708Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M14.5631 3.33625C14.5631 4.24791 13.8241 4.98695 12.9124 4.98695C12.0008 4.98695 11.2617 4.24791 11.2617 3.33625C11.2617 2.42459 12.0008 1.68555 12.9124 1.68555C13.8241 1.68555 14.5631 2.42459 14.5631 3.33625Z", fill: "#ACB4BD" }),
        React.createElement("path", { d: "M13.7341 5.52708C13.5365 5.5778 13.3293 5.60497 13.1159 5.60497C11.75 5.60497 10.6428 4.49766 10.6428 3.13193C10.6428 2.9185 10.6699 2.71141 10.7207 2.51367H5.0785C3.71263 2.51367 2.60547 3.62098 2.60547 4.98671V11.1693C2.60547 12.535 3.71263 13.6423 5.0785 13.6423H11.2611C12.627 13.6423 13.7341 12.535 13.7341 11.1693V5.52708Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$o = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Paperclip = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$o) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5839)" },
                    React.createElement(Path, { d: "M12.5067 6.44576L7.14582 11.8066C6.48908 12.4633 5.59834 12.8323 4.66957 12.8323C3.74079 12.8323 2.85006 12.4633 2.19332 11.8066C1.53658 11.1499 1.16762 10.2591 1.16762 9.33034C1.16762 8.40157 1.53658 7.51084 2.19332 6.85409L7.19248 1.85493C7.63031 1.41633 8.22444 1.16962 8.84417 1.16907C9.4639 1.16852 10.0585 1.41418 10.4971 1.85201C10.9357 2.28984 11.1824 2.88397 11.1829 3.5037C11.1835 4.12343 10.9378 4.71799 10.5 5.15659L5.48915 10.1558C5.27024 10.3747 4.97333 10.4977 4.66373 10.4977C4.35414 10.4977 4.05723 10.3747 3.83832 10.1558C3.6194 9.93685 3.49642 9.63994 3.49642 9.33034C3.49642 9.02075 3.6194 8.72384 3.83832 8.50493L8.79082 3.55826", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5839" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5839)" },
            React.createElement("path", { d: "M12.5067 6.44576L7.14582 11.8066C6.48908 12.4633 5.59834 12.8323 4.66957 12.8323C3.74079 12.8323 2.85006 12.4633 2.19332 11.8066C1.53658 11.1499 1.16762 10.2591 1.16762 9.33034C1.16762 8.40157 1.53658 7.51084 2.19332 6.85409L7.19248 1.85493C7.63031 1.41633 8.22444 1.16962 8.84417 1.16907C9.4639 1.16852 10.0585 1.41418 10.4971 1.85201C10.9357 2.28984 11.1824 2.88397 11.1829 3.5037C11.1835 4.12343 10.9378 4.71799 10.5 5.15659L5.48915 10.1558C5.27024 10.3747 4.97333 10.4977 4.66373 10.4977C4.35414 10.4977 4.05723 10.3747 3.83832 10.1558C3.6194 9.93685 3.49642 9.63994 3.49642 9.33034C3.49642 9.02075 3.6194 8.72384 3.83832 8.50493L8.79082 3.55826", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5839" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$n = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Pause = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$n) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.25 1.75C5.40471 1.75 5.55308 1.81146 5.66248 1.92085C5.77187 2.03025 5.83333 2.17862 5.83333 2.33333V11.6667C5.83333 11.8214 5.77187 11.9697 5.66248 12.0791C5.55308 12.1885 5.40471 12.25 5.25 12.25H4.08333C3.92862 12.25 3.78025 12.1885 3.67085 12.0791C3.56146 11.9697 3.5 11.8214 3.5 11.6667V2.33333C3.5 2.17862 3.56146 2.03025 3.67085 1.92085C3.78025 1.81146 3.92862 1.75 4.08333 1.75H5.25ZM9.91667 1.75C10.0714 1.75 10.2197 1.81146 10.3291 1.92085C10.4385 2.03025 10.5 2.17862 10.5 2.33333V11.6667C10.5 11.8214 10.4385 11.9697 10.3291 12.0791C10.2197 12.1885 10.0714 12.25 9.91667 12.25H8.75C8.59529 12.25 8.44692 12.1885 8.33752 12.0791C8.22812 11.9697 8.16667 11.8214 8.16667 11.6667V2.33333C8.16667 2.17862 8.22812 2.03025 8.33752 1.92085C8.44692 1.81146 8.59529 1.75 8.75 1.75H9.91667Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.25 1.75C5.40471 1.75 5.55308 1.81146 5.66248 1.92085C5.77187 2.03025 5.83333 2.17862 5.83333 2.33333V11.6667C5.83333 11.8214 5.77187 11.9697 5.66248 12.0791C5.55308 12.1885 5.40471 12.25 5.25 12.25H4.08333C3.92862 12.25 3.78025 12.1885 3.67085 12.0791C3.56146 11.9697 3.5 11.8214 3.5 11.6667V2.33333C3.5 2.17862 3.56146 2.03025 3.67085 1.92085C3.78025 1.81146 3.92862 1.75 4.08333 1.75H5.25ZM9.91667 1.75C10.0714 1.75 10.2197 1.81146 10.3291 1.92085C10.4385 2.03025 10.5 2.17862 10.5 2.33333V11.6667C10.5 11.8214 10.4385 11.9697 10.3291 12.0791C10.2197 12.1885 10.0714 12.25 9.91667 12.25H8.75C8.59529 12.25 8.44692 12.1885 8.33752 12.0791C8.22812 11.9697 8.16667 11.8214 8.16667 11.6667V2.33333C8.16667 2.17862 8.22812 2.03025 8.33752 1.92085C8.44692 1.81146 8.59529 1.75 8.75 1.75H9.91667Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$m = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var PenLine = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$m) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7 11.6666H12.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.55263 2.1128C9.78485 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.15919 11.0092 3.98765 11.1107 3.79922 11.1656L2.12388 11.6544C2.07369 11.669 2.02048 11.6699 1.96983 11.6569C1.91918 11.6439 1.87295 11.6176 1.83598 11.5806C1.799 11.5437 1.77265 11.4974 1.75967 11.4468C1.7467 11.3961 1.74758 11.3429 1.76222 11.2927L2.25105 9.61738C2.30601 9.42916 2.40753 9.25783 2.54622 9.11922L9.55263 2.1128Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7 11.6666H12.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.55263 2.1128C9.78485 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.15919 11.0092 3.98765 11.1107 3.79922 11.1656L2.12388 11.6544C2.07369 11.669 2.02048 11.6699 1.96983 11.6569C1.91918 11.6439 1.87295 11.6176 1.83598 11.5806C1.799 11.5437 1.77265 11.4974 1.75967 11.4468C1.7467 11.3961 1.74758 11.3429 1.76222 11.2927L2.25105 9.61738C2.30601 9.42916 2.40753 9.25783 2.54622 9.11922L9.55263 2.1128Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$l = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var PencilLine = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$l) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7 11.6666H12.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.55264 2.1128C9.78486 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.1592 11.0092 3.98765 11.1107 3.79922 11.1656L2.12389 11.6544C2.0737 11.669 2.02049 11.6699 1.96984 11.6569C1.91919 11.6439 1.87296 11.6176 1.83598 11.5806C1.79901 11.5437 1.77266 11.4974 1.75968 11.4468C1.74671 11.3961 1.74758 11.3429 1.76222 11.2927L2.25106 9.61738C2.30602 9.42916 2.40753 9.25783 2.54622 9.11922L9.55264 2.1128Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.75 2.91663L10.5 4.66663", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7 11.6666H12.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.55264 2.1128C9.78486 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.1592 11.0092 3.98765 11.1107 3.79922 11.1656L2.12389 11.6544C2.0737 11.669 2.02049 11.6699 1.96984 11.6569C1.91919 11.6439 1.87296 11.6176 1.83598 11.5806C1.79901 11.5437 1.77266 11.4974 1.75968 11.4468C1.74671 11.3961 1.74758 11.3429 1.76222 11.2927L2.25106 9.61738C2.30602 9.42916 2.40753 9.25783 2.54622 9.11922L9.55264 2.1128Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.75 2.91663L10.5 4.66663", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$k = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Pencil = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$k) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2197_5880)" },
                    React.createElement(Path, { d: "M12.3515 3.97373C12.6599 3.66539 12.8332 3.24717 12.8333 2.81106C12.8333 2.37495 12.6601 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1891 1.1665C10.753 1.16645 10.3348 1.33964 10.0264 1.64798L2.24119 9.43489C2.10575 9.56993 2.00559 9.7362 1.94952 9.91906L1.17894 12.4577C1.16386 12.5082 1.16272 12.5618 1.17564 12.6128C1.18856 12.6638 1.21506 12.7104 1.25232 12.7476C1.28958 12.7848 1.33622 12.8113 1.38728 12.8241C1.43834 12.8369 1.49193 12.8357 1.54235 12.8206L4.0816 12.0506C4.26429 11.995 4.43054 11.8954 4.56577 11.7606L12.3515 3.97373Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M8.75 2.91663L11.0833 5.24996", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2197_5880" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2197_5880)" },
            React.createElement("path", { d: "M12.3515 3.97373C12.6599 3.66539 12.8332 3.24717 12.8333 2.81106C12.8333 2.37495 12.6601 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1891 1.1665C10.753 1.16645 10.3348 1.33964 10.0264 1.64798L2.24119 9.43489C2.10575 9.56993 2.00559 9.7362 1.94952 9.91906L1.17894 12.4577C1.16386 12.5082 1.16272 12.5618 1.17564 12.6128C1.18856 12.6638 1.21506 12.7104 1.25232 12.7476C1.28958 12.7848 1.33622 12.8113 1.38728 12.8241C1.43834 12.8369 1.49193 12.8357 1.54235 12.8206L4.0816 12.0506C4.26429 11.995 4.43054 11.8954 4.56577 11.7606L12.3515 3.97373Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M8.75 2.91663L11.0833 5.24996", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2197_5880" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$j = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var People = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$j) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M5.66576 7.84347C6.30485 7.84347 6.91776 7.57742 7.36967 7.10384C7.82158 6.63027 8.07545 5.98796 8.07545 5.31822C8.07545 4.64848 7.82158 4.00617 7.36967 3.5326C6.91776 3.05902 6.30485 2.79297 5.66576 2.79297C5.02667 2.79297 4.41375 3.05902 3.96184 3.5326C3.50994 4.00617 3.25606 4.64848 3.25606 5.31822C3.25606 5.98796 3.50994 6.63027 3.96184 7.10384C4.41375 7.57742 5.02667 7.84347 5.66576 7.84347ZM11.0876 7.84347C11.5669 7.84347 12.0266 7.64393 12.3655 7.28875C12.7044 6.93357 12.8948 6.45184 12.8948 5.94953C12.8948 5.44723 12.7044 4.9655 12.3655 4.61032C12.0266 4.25513 11.5669 4.0556 11.0876 4.0556C10.6083 4.0556 10.1486 4.25513 9.80964 4.61032C9.47071 4.9655 9.2803 5.44723 9.2803 5.94953C9.2803 6.45184 9.47071 6.93357 9.80964 7.28875C10.1486 7.64393 10.6083 7.84347 11.0876 7.84347ZM2.87955 8.79044C2.57997 8.79044 2.29267 8.91516 2.08084 9.13714C1.86901 9.35913 1.75 9.66022 1.75 9.97416V10.3687C1.75 10.3687 1.75 13.2096 5.66576 13.2096C9.58151 13.2096 9.58151 10.3687 9.58151 10.3687V9.97416C9.58151 9.66022 9.46251 9.35913 9.25068 9.13714C9.03885 8.91516 8.75154 8.79044 8.45197 8.79044H2.87955ZM9.48332 12.2908C9.89779 12.4669 10.4228 12.5783 11.0873 12.5783C14.25 12.5783 14.25 10.0531 14.25 10.0531V9.97416C14.25 9.66027 14.131 9.35924 13.9193 9.13726C13.7075 8.91528 13.4203 8.79053 13.1208 8.79044H9.76435C10.0352 9.11947 10.1839 9.53965 10.1833 9.97416V10.3829L10.183 10.4009L10.1812 10.4483C10.1796 10.4847 10.1761 10.5299 10.1707 10.584C10.1556 10.725 10.1314 10.8647 10.0984 11.0022C9.98419 11.4731 9.77439 11.9126 9.48332 12.2908Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.66576 7.84347C6.30485 7.84347 6.91776 7.57742 7.36967 7.10384C7.82158 6.63027 8.07545 5.98796 8.07545 5.31822C8.07545 4.64848 7.82158 4.00617 7.36967 3.5326C6.91776 3.05902 6.30485 2.79297 5.66576 2.79297C5.02667 2.79297 4.41375 3.05902 3.96184 3.5326C3.50994 4.00617 3.25606 4.64848 3.25606 5.31822C3.25606 5.98796 3.50994 6.63027 3.96184 7.10384C4.41375 7.57742 5.02667 7.84347 5.66576 7.84347ZM11.0876 7.84347C11.5669 7.84347 12.0266 7.64393 12.3655 7.28875C12.7044 6.93357 12.8948 6.45184 12.8948 5.94953C12.8948 5.44723 12.7044 4.9655 12.3655 4.61032C12.0266 4.25513 11.5669 4.0556 11.0876 4.0556C10.6083 4.0556 10.1486 4.25513 9.80964 4.61032C9.47071 4.9655 9.2803 5.44723 9.2803 5.94953C9.2803 6.45184 9.47071 6.93357 9.80964 7.28875C10.1486 7.64393 10.6083 7.84347 11.0876 7.84347ZM2.87955 8.79044C2.57997 8.79044 2.29267 8.91516 2.08084 9.13714C1.86901 9.35913 1.75 9.66022 1.75 9.97416V10.3687C1.75 10.3687 1.75 13.2096 5.66576 13.2096C9.58151 13.2096 9.58151 10.3687 9.58151 10.3687V9.97416C9.58151 9.66022 9.46251 9.35913 9.25068 9.13714C9.03885 8.91516 8.75154 8.79044 8.45197 8.79044H2.87955ZM9.48332 12.2908C9.89779 12.4669 10.4228 12.5783 11.0873 12.5783C14.25 12.5783 14.25 10.0531 14.25 10.0531V9.97416C14.25 9.66027 14.131 9.35924 13.9193 9.13726C13.7075 8.91528 13.4203 8.79053 13.1208 8.79044H9.76435C10.0352 9.11947 10.1839 9.53965 10.1833 9.97416V10.3829L10.183 10.4009L10.1812 10.4483C10.1796 10.4847 10.1761 10.5299 10.1707 10.584C10.1556 10.725 10.1314 10.8647 10.0984 11.0022C9.98419 11.4731 9.77439 11.9126 9.48332 12.2908Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$i = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Phone = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$i) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_2392_28279)" },
                    React.createElement(Path, { d: "M12.8332 9.86281V11.6128C12.8339 11.7753 12.8006 11.9361 12.7355 12.0849C12.6705 12.2338 12.575 12.3674 12.4553 12.4772C12.3356 12.5871 12.1942 12.6707 12.0403 12.7227C11.8864 12.7748 11.7234 12.7941 11.5616 12.7795C9.76656 12.5844 8.04232 11.9711 6.5274 10.9886C5.11797 10.093 3.92302 8.89808 3.0274 7.48865C2.04156 5.96685 1.42805 4.23423 1.23657 2.43115C1.22199 2.26984 1.24116 2.10726 1.29286 1.95376C1.34456 1.80027 1.42765 1.65922 1.53685 1.53959C1.64605 1.41997 1.77896 1.32439 1.92712 1.25895C2.07527 1.19351 2.23544 1.15963 2.3974 1.15948H4.1474C4.4305 1.15669 4.70495 1.25694 4.9196 1.44154C5.13425 1.62614 5.27445 1.88249 5.31407 2.16281C5.38793 2.72285 5.52492 3.27274 5.7224 3.80198C5.80089 4.01077 5.81787 4.23768 5.77135 4.45583C5.72483 4.67397 5.61674 4.87421 5.4599 5.03281L4.71907 5.77365C5.54948 7.23405 6.75867 8.44324 8.21907 9.27365L8.9599 8.53281C9.11851 8.37598 9.31874 8.26789 9.53689 8.22137C9.75504 8.17484 9.98195 8.19183 10.1907 8.27031C10.72 8.4678 11.2699 8.60478 11.8299 8.67865C12.1133 8.71862 12.3721 8.86135 12.557 9.07969C12.742 9.29802 12.8403 9.57673 12.8332 9.86281Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_2392_28279" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2392_28279)" },
            React.createElement("path", { d: "M12.8332 9.86281V11.6128C12.8339 11.7753 12.8006 11.9361 12.7355 12.0849C12.6705 12.2338 12.575 12.3674 12.4553 12.4772C12.3356 12.5871 12.1942 12.6707 12.0403 12.7227C11.8864 12.7748 11.7234 12.7941 11.5616 12.7795C9.76656 12.5844 8.04232 11.9711 6.5274 10.9886C5.11797 10.093 3.92302 8.89808 3.0274 7.48865C2.04156 5.96685 1.42805 4.23423 1.23657 2.43115C1.22199 2.26984 1.24116 2.10726 1.29286 1.95376C1.34456 1.80027 1.42765 1.65922 1.53685 1.53959C1.64605 1.41997 1.77896 1.32439 1.92712 1.25895C2.07527 1.19351 2.23544 1.15963 2.3974 1.15948H4.1474C4.4305 1.15669 4.70495 1.25694 4.9196 1.44154C5.13425 1.62614 5.27445 1.88249 5.31407 2.16281C5.38793 2.72285 5.52492 3.27274 5.7224 3.80198C5.80089 4.01077 5.81787 4.23768 5.77135 4.45583C5.72483 4.67397 5.61674 4.87421 5.4599 5.03281L4.71907 5.77365C5.54948 7.23405 6.75867 8.44324 8.21907 9.27365L8.9599 8.53281C9.11851 8.37598 9.31874 8.26789 9.53689 8.22137C9.75504 8.17484 9.98195 8.19183 10.1907 8.27031C10.72 8.4678 11.2699 8.60478 11.8299 8.67865C12.1133 8.71862 12.3721 8.86135 12.557 9.07969C12.742 9.29802 12.8403 9.57673 12.8332 9.86281Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2392_28279" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$h = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Play = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$h) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z", fill: "#ACB4BD" }))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$g = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Plus = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$g) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.91669 7H11.0834", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 2.91675V11.0834", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.91669 7H11.0834", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 2.91675V11.0834", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$f = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var PolygonDown = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$f) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$e = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var PolygonUp = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$e) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$d = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Replay = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$d) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M12.25 7C12.25 8.03835 11.9421 9.05339 11.3652 9.91674C10.7883 10.7801 9.9684 11.453 9.00909 11.8504C8.04978 12.2477 6.99418 12.3517 5.97578 12.1491C4.95738 11.9466 4.02192 11.4465 3.28769 10.7123C2.55347 9.97809 2.05345 9.04262 1.85088 8.02422C1.64831 7.00582 1.75227 5.95022 2.14963 4.99091C2.54699 4.0316 3.2199 3.21166 4.08326 2.63478C4.94662 2.05791 5.96165 1.75 7 1.75C8.47 1.75 9.87584 2.33333 10.9317 3.34833L12.25 4.66667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M12.25 1.75V4.66667H9.33332", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.25 7C12.25 8.03835 11.9421 9.05339 11.3652 9.91674C10.7883 10.7801 9.9684 11.453 9.00909 11.8504C8.04978 12.2477 6.99418 12.3517 5.97578 12.1491C4.95738 11.9466 4.02192 11.4465 3.28769 10.7123C2.55347 9.97809 2.05345 9.04262 1.85088 8.02422C1.64831 7.00582 1.75227 5.95022 2.14963 4.99091C2.54699 4.0316 3.2199 3.21166 4.08326 2.63478C4.94662 2.05791 5.96165 1.75 7 1.75C8.47 1.75 9.87584 2.33333 10.9317 3.34833L12.25 4.66667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M12.25 1.75V4.66667H9.33332", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$c = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Reply = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$c) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M10 6.66406L13.3333 9.9974L10 13.3307", stroke: props.stroke || props.color || "white", strokeWidth: props.strokeWidth || 1.33333, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M2.66699 2.66406V7.33073C2.66699 8.03797 2.94794 8.71625 3.44804 9.21635C3.94814 9.71644 4.62641 9.9974 5.33366 9.9974H13.3337", stroke: props.stroke || props.color || "white", strokeWidth: props.strokeWidth || 1.33333, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M10 6.66406L13.3333 9.9974L10 13.3307", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M2.66699 2.66406V7.33073C2.66699 8.03797 2.94794 8.71625 3.44804 9.21635C3.94814 9.71644 4.62641 9.9974 5.33366 9.9974H13.3337", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$b = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Search = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$b) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z", stroke: props.stroke || props.color || "white", strokeWidth: props.strokeWidth || 1.33333, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M14.0005 13.9995L11.1338 11.1328", stroke: props.stroke || props.color || "white", strokeWidth: props.strokeWidth || 1.33333, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M14.0005 13.9995L11.1338 11.1328", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$a = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Setting2 = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$a) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: props.fill || props.color || "#ACB4BD", stroke: "none", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M6.6431 1.87196C6.51031 1.77485 6.35575 1.71174 6.19293 1.68815C6.03012 1.66455 5.864 1.6812 5.7091 1.73663C4.98484 2.00195 4.31218 2.39106 3.7211 2.88663C3.59587 2.99295 3.49856 3.12831 3.43767 3.28089C3.37678 3.43346 3.35415 3.59863 3.37177 3.76196C3.42177 4.26396 3.3331 4.74863 3.09177 5.16596C2.8511 5.58396 2.4751 5.90329 2.0151 6.11063C1.86467 6.17726 1.73284 6.27973 1.63116 6.40908C1.52947 6.53843 1.46101 6.69071 1.43177 6.85263C1.30009 7.6114 1.30009 8.38719 1.43177 9.14596C1.49377 9.50396 1.73844 9.76329 2.0151 9.88863C2.4751 10.0953 2.8511 10.4153 3.09244 10.8326C3.3331 11.2506 3.42177 11.7346 3.37177 12.2366C3.34177 12.538 3.4431 12.8793 3.7211 13.112C4.31217 13.6075 4.98484 13.9967 5.7091 14.262C5.8639 14.3173 6.0299 14.3339 6.1926 14.3104C6.3553 14.2868 6.50974 14.2237 6.64244 14.1266C7.05244 13.832 7.5171 13.666 7.99977 13.666C8.48244 13.666 8.94644 13.832 9.35644 14.1266C9.6031 14.304 9.94977 14.3866 10.2904 14.262C11.0147 13.9966 11.6874 13.6075 12.2784 13.112C12.5564 12.8793 12.6584 12.5386 12.6278 12.2366C12.5778 11.7346 12.6658 11.25 12.9078 10.8326C13.1484 10.4146 13.5244 10.096 13.9844 9.88863C14.2604 9.76396 14.5058 9.50396 14.5678 9.14596C14.6994 8.38718 14.6994 7.6114 14.5678 6.85263C14.5385 6.69071 14.4701 6.53843 14.3684 6.40908C14.2667 6.27973 14.1349 6.17726 13.9844 6.11063C13.5244 5.90329 13.1484 5.58396 12.9071 5.16596C12.6658 4.74863 12.5778 4.26396 12.6278 3.76196C12.6453 3.59863 12.6227 3.43349 12.5618 3.28092C12.5009 3.12835 12.4036 2.99299 12.2784 2.88663C11.6874 2.39106 11.0147 2.00195 10.2904 1.73663C10.1356 1.68131 9.96964 1.66473 9.80695 1.68832C9.64427 1.71191 9.48982 1.77496 9.3571 1.87196C8.94644 2.16596 8.48177 2.33263 7.99977 2.33263C7.51777 2.33263 7.0531 2.16663 6.6431 1.87196ZM5.99977 7.99929C5.99977 7.46886 6.21048 6.96015 6.58556 6.58508C6.96063 6.21001 7.46934 5.99929 7.99977 5.99929C8.5302 5.99929 9.03891 6.21001 9.41398 6.58508C9.78906 6.96015 9.99977 7.46886 9.99977 7.99929C9.99977 8.52973 9.78906 9.03843 9.41398 9.41351C9.03891 9.78858 8.5302 9.99929 7.99977 9.99929C7.46934 9.99929 6.96063 9.78858 6.58556 9.41351C6.21048 9.03843 5.99977 8.52973 5.99977 7.99929Z", fillRule: "evenodd", clipRule: "evenodd", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { fill: props.fill || props.color || "#ACB4BD" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.6431 1.87196C6.51031 1.77485 6.35575 1.71174 6.19293 1.68815C6.03012 1.66455 5.864 1.6812 5.7091 1.73663C4.98484 2.00195 4.31218 2.39106 3.7211 2.88663C3.59587 2.99295 3.49856 3.12831 3.43767 3.28089C3.37678 3.43346 3.35415 3.59863 3.37177 3.76196C3.42177 4.26396 3.3331 4.74863 3.09177 5.16596C2.8511 5.58396 2.4751 5.90329 2.0151 6.11063C1.86467 6.17726 1.73284 6.27973 1.63116 6.40908C1.52947 6.53843 1.46101 6.69071 1.43177 6.85263C1.30009 7.6114 1.30009 8.38719 1.43177 9.14596C1.49377 9.50396 1.73844 9.76329 2.0151 9.88863C2.4751 10.0953 2.8511 10.4153 3.09244 10.8326C3.3331 11.2506 3.42177 11.7346 3.37177 12.2366C3.34177 12.538 3.4431 12.8793 3.7211 13.112C4.31217 13.6075 4.98484 13.9967 5.7091 14.262C5.8639 14.3173 6.0299 14.3339 6.1926 14.3104C6.3553 14.2868 6.50974 14.2237 6.64244 14.1266C7.05244 13.832 7.5171 13.666 7.99977 13.666C8.48244 13.666 8.94644 13.832 9.35644 14.1266C9.6031 14.304 9.94977 14.3866 10.2904 14.262C11.0147 13.9966 11.6874 13.6075 12.2784 13.112C12.5564 12.8793 12.6584 12.5386 12.6278 12.2366C12.5778 11.7346 12.6658 11.25 12.9078 10.8326C13.1484 10.4146 13.5244 10.096 13.9844 9.88863C14.2604 9.76396 14.5058 9.50396 14.5678 9.14596C14.6994 8.38718 14.6994 7.6114 14.5678 6.85263C14.5385 6.69071 14.4701 6.53843 14.3684 6.40908C14.2667 6.27973 14.1349 6.17726 13.9844 6.11063C13.5244 5.90329 13.1484 5.58396 12.9071 5.16596C12.6658 4.74863 12.5778 4.26396 12.6278 3.76196C12.6453 3.59863 12.6227 3.43349 12.5618 3.28092C12.5009 3.12835 12.4036 2.99299 12.2784 2.88663C11.6874 2.39106 11.0147 2.00195 10.2904 1.73663C10.1356 1.68131 9.96964 1.66473 9.80695 1.68832C9.64427 1.71191 9.48982 1.77496 9.3571 1.87196C8.94644 2.16596 8.48177 2.33263 7.99977 2.33263C7.51777 2.33263 7.0531 2.16663 6.6431 1.87196ZM5.99977 7.99929C5.99977 7.46886 6.21048 6.96015 6.58556 6.58508C6.96063 6.21001 7.46934 5.99929 7.99977 5.99929C8.5302 5.99929 9.03891 6.21001 9.41398 6.58508C9.78906 6.96015 9.99977 7.46886 9.99977 7.99929C9.99977 8.52973 9.78906 9.03843 9.41398 9.41351C9.03891 9.78858 8.5302 9.99929 7.99977 9.99929C7.46934 9.99929 6.96063 9.78858 6.58556 9.41351C6.21048 9.03843 5.99977 8.52973 5.99977 7.99929Z", fill: "#ACB4BD" }))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$9 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Settings = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$9) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7.12693 1.16675H6.87026C6.56084 1.16675 6.2641 1.28966 6.04531 1.50846C5.82651 1.72725 5.7036 2.024 5.7036 2.33341C5.70339 2.538 5.64938 2.84394 5.547 3.02107C5.44461 3.1982 5.29744 3.34529 5.12026 3.44758L4.86943 3.59341C4.69208 3.69581 4.49089 3.74972 4.2861 3.74972C4.0813 3.74972 3.79262 3.64914 3.61526 3.54675C3.34755 3.39232 3.0295 3.35042 2.73093 3.43026C2.43236 3.5101 2.17767 3.70514 2.02276 3.97258L1.89443 4.19425C1.74 4.46196 1.69811 4.78001 1.77794 5.07858C1.85778 5.37715 2.05283 5.63184 2.32026 5.78675C2.49659 5.88855 2.73071 6.09305 2.83304 6.26907C2.93538 6.44508 2.98987 6.64482 2.9911 6.84841V7.14591C2.99191 7.35149 2.93839 7.55364 2.83596 7.73188C2.73352 7.91012 2.4983 8.11063 2.32026 8.21341C2.05283 8.36832 1.85778 8.62301 1.77794 8.92158C1.69811 9.22015 1.74 9.5382 1.89443 9.80591L2.02276 10.0276C2.17767 10.295 2.43236 10.4901 2.73093 10.5699C3.0295 10.6497 3.34755 10.6078 3.61526 10.4534C3.79262 10.351 4.0813 10.2504 4.2861 10.2504C4.49089 10.2504 4.69208 10.3044 4.86943 10.4067L5.12026 10.5526C5.29744 10.6549 5.44461 10.802 5.547 10.9791C5.64938 11.1562 5.70339 11.4622 5.7036 11.6667C5.7036 11.9762 5.82651 12.2729 6.04531 12.4917C6.2641 12.7105 6.56084 12.8334 6.87026 12.8334H7.12693C7.43635 12.8334 7.7331 12.7105 7.95189 12.4917C8.17068 12.2729 8.2936 11.9762 8.2936 11.6667C8.29381 11.4622 8.34781 11.1562 8.4502 10.9791C8.55259 10.802 8.69975 10.6549 8.87693 10.5526L9.12776 10.4067C9.30512 10.3044 9.5063 10.2504 9.7111 10.2504C9.91589 10.2504 10.2046 10.351 10.3819 10.4534C10.6496 10.6078 10.9677 10.6497 11.2663 10.5699C11.5648 10.4901 11.8195 10.295 11.9744 10.0276L12.1028 9.80008C12.2572 9.53237 12.2991 9.21432 12.2193 8.91575C12.1394 8.61718 11.8569 8.31582 11.5894 8.16091C11.4114 8.05813 11.2637 7.91012 11.1612 7.73188C11.0588 7.55364 11.0053 7.35149 11.0061 7.14591V6.85425C11.0053 6.64867 11.0588 6.44653 11.1612 6.26828C11.2637 6.09004 11.4989 5.88954 11.6769 5.78675C11.9444 5.63184 12.1394 5.37715 12.2193 5.07858C12.2991 4.78001 12.2572 4.46196 12.1028 4.19425L11.9744 3.97258C11.8195 3.70514 11.5648 3.5101 11.2663 3.43026C10.9677 3.35042 10.6496 3.39232 10.3819 3.54675C10.2046 3.64914 9.91589 3.74972 9.7111 3.74972C9.5063 3.74972 9.30512 3.69581 9.12776 3.59341L8.87693 3.44758C8.69975 3.34529 8.55259 3.1982 8.4502 3.02107C8.34781 2.84394 8.29381 2.538 8.2936 2.33341C8.2936 2.024 8.17068 1.72725 7.95189 1.50846C7.7331 1.28966 7.43635 1.16675 7.12693 1.16675Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.12693 1.16675H6.87026C6.56084 1.16675 6.2641 1.28966 6.04531 1.50846C5.82651 1.72725 5.7036 2.024 5.7036 2.33341C5.70339 2.538 5.64938 2.84394 5.547 3.02107C5.44461 3.1982 5.29744 3.34529 5.12026 3.44758L4.86943 3.59341C4.69208 3.69581 4.49089 3.74972 4.2861 3.74972C4.0813 3.74972 3.79262 3.64914 3.61526 3.54675C3.34755 3.39232 3.0295 3.35042 2.73093 3.43026C2.43236 3.5101 2.17767 3.70514 2.02276 3.97258L1.89443 4.19425C1.74 4.46196 1.69811 4.78001 1.77794 5.07858C1.85778 5.37715 2.05283 5.63184 2.32026 5.78675C2.49659 5.88855 2.73071 6.09305 2.83304 6.26907C2.93538 6.44508 2.98987 6.64482 2.9911 6.84841V7.14591C2.99191 7.35149 2.93839 7.55364 2.83596 7.73188C2.73352 7.91012 2.4983 8.11063 2.32026 8.21341C2.05283 8.36832 1.85778 8.62301 1.77794 8.92158C1.69811 9.22015 1.74 9.5382 1.89443 9.80591L2.02276 10.0276C2.17767 10.295 2.43236 10.4901 2.73093 10.5699C3.0295 10.6497 3.34755 10.6078 3.61526 10.4534C3.79262 10.351 4.0813 10.2504 4.2861 10.2504C4.49089 10.2504 4.69208 10.3044 4.86943 10.4067L5.12026 10.5526C5.29744 10.6549 5.44461 10.802 5.547 10.9791C5.64938 11.1562 5.70339 11.4622 5.7036 11.6667C5.7036 11.9762 5.82651 12.2729 6.04531 12.4917C6.2641 12.7105 6.56084 12.8334 6.87026 12.8334H7.12693C7.43635 12.8334 7.7331 12.7105 7.95189 12.4917C8.17068 12.2729 8.2936 11.9762 8.2936 11.6667C8.29381 11.4622 8.34781 11.1562 8.4502 10.9791C8.55259 10.802 8.69975 10.6549 8.87693 10.5526L9.12776 10.4067C9.30512 10.3044 9.5063 10.2504 9.7111 10.2504C9.91589 10.2504 10.2046 10.351 10.3819 10.4534C10.6496 10.6078 10.9677 10.6497 11.2663 10.5699C11.5648 10.4901 11.8195 10.295 11.9744 10.0276L12.1028 9.80008C12.2572 9.53237 12.2991 9.21432 12.2193 8.91575C12.1394 8.61718 11.8569 8.31582 11.5894 8.16091C11.4114 8.05813 11.2637 7.91012 11.1612 7.73188C11.0588 7.55364 11.0053 7.35149 11.0061 7.14591V6.85425C11.0053 6.64867 11.0588 6.44653 11.1612 6.26828C11.2637 6.09004 11.4989 5.88954 11.6769 5.78675C11.9444 5.63184 12.1394 5.37715 12.2193 5.07858C12.2991 4.78001 12.2572 4.46196 12.1028 4.19425L11.9744 3.97258C11.8195 3.70514 11.5648 3.5101 11.2663 3.43026C10.9677 3.35042 10.6496 3.39232 10.3819 3.54675C10.2046 3.64914 9.91589 3.74972 9.7111 3.74972C9.5063 3.74972 9.30512 3.69581 9.12776 3.59341L8.87693 3.44758C8.69975 3.34529 8.55259 3.1982 8.4502 3.02107C8.34781 2.84394 8.29381 2.538 8.2936 2.33341C8.2936 2.024 8.17068 1.72725 7.95189 1.50846C7.7331 1.28966 7.43635 1.16675 7.12693 1.16675Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$8 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Share = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$8) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M12.25 7.58333V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H6.41667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M12.25 1.75L7 7", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.75 1.75H12.25V5.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.25 7.58333V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H6.41667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M12.25 1.75L7 7", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.75 1.75H12.25V5.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$7 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Siren = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$7) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(G, { clipPath: "url(#clip0_5437_22312)" },
                    React.createElement(Path, { d: "M4.08203 10.4997V6.99967C4.08203 6.22613 4.38932 5.48426 4.9363 4.93728C5.48328 4.3903 6.22515 4.08301 6.9987 4.08301C7.77225 4.08301 8.51411 4.3903 9.06109 4.93728C9.60807 5.48426 9.91536 6.22613 9.91536 6.99967V10.4997", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M2.91797 12.25C2.91797 12.4047 2.97943 12.5531 3.08882 12.6625C3.19822 12.7719 3.34659 12.8333 3.5013 12.8333H10.5013C10.656 12.8333 10.8044 12.7719 10.9138 12.6625C11.0232 12.5531 11.0846 12.4047 11.0846 12.25V11.6667C11.0846 11.3572 10.9617 11.0605 10.7429 10.8417C10.5241 10.6229 10.2274 10.5 9.91797 10.5H4.08464C3.77522 10.5 3.47847 10.6229 3.25968 10.8417C3.04089 11.0605 2.91797 11.3572 2.91797 11.6667V12.25Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M12.25 7H12.8333", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M10.7917 2.625L10.5 2.91667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M1.16797 7H1.7513", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 1.16699V1.75033", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M2.875 2.875L3.28742 3.28742", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement(Path, { d: "M7 7V10.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_5437_22312" },
                        React.createElement(Rect, { width: "14", height: "14", fill: props.fill || props.color || "white" })))));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_5437_22312)" },
            React.createElement("path", { d: "M4.08203 10.4997V6.99967C4.08203 6.22613 4.38932 5.48426 4.9363 4.93728C5.48328 4.3903 6.22515 4.08301 6.9987 4.08301C7.77225 4.08301 8.51411 4.3903 9.06109 4.93728C9.60807 5.48426 9.91536 6.22613 9.91536 6.99967V10.4997", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M2.91797 12.25C2.91797 12.4047 2.97943 12.5531 3.08882 12.6625C3.19822 12.7719 3.34659 12.8333 3.5013 12.8333H10.5013C10.656 12.8333 10.8044 12.7719 10.9138 12.6625C11.0232 12.5531 11.0846 12.4047 11.0846 12.25V11.6667C11.0846 11.3572 10.9617 11.0605 10.7429 10.8417C10.5241 10.6229 10.2274 10.5 9.91797 10.5H4.08464C3.77522 10.5 3.47847 10.6229 3.25968 10.8417C3.04089 11.0605 2.91797 11.3572 2.91797 11.6667V12.25Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M12.25 7H12.8333", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M10.7917 2.625L10.5 2.91667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M1.16797 7H1.7513", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 1.16699V1.75033", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M2.875 2.875L3.28742 3.28742", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("path", { d: "M7 7V10.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_5437_22312" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$6 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var SquarePen = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$6) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21116 8.53943C7.07265 8.67782 6.90153 8.77913 6.71358 8.83401L5.03766 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71278 9.21328 4.68643 9.16705 4.67345 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46116 6.78943L10.7187 1.53126Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21116 8.53943C7.07265 8.67782 6.90153 8.77913 6.71358 8.83401L5.03766 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71278 9.21328 4.68643 9.16705 4.67345 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46116 6.78943L10.7187 1.53126Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$5 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Trash = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$5) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M1.75 3.5H12.25", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.0834 3.5V11.6667C11.0834 12.25 10.5 12.8333 9.91669 12.8333H4.08335C3.50002 12.8333 2.91669 12.25 2.91669 11.6667V3.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M4.66669 3.50008V2.33341C4.66669 1.75008 5.25002 1.16675 5.83335 1.16675H8.16669C8.75002 1.16675 9.33335 1.75008 9.33335 2.33341V3.50008", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M5.83331 6.41675V9.91675", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M8.16668 6.41675V9.91675", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1.75 3.5H12.25", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.0834 3.5V11.6667C11.0834 12.25 10.5 12.8333 9.91669 12.8333H4.08335C3.50002 12.8333 2.91669 12.25 2.91669 11.6667V3.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M4.66669 3.50008V2.33341C4.66669 1.75008 5.25002 1.16675 5.83335 1.16675H8.16669C8.75002 1.16675 9.33335 1.75008 9.33335 2.33341V3.50008", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M5.83331 6.41675V9.91675", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M8.16668 6.41675V9.91675", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$4 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Upload = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$4) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.91665 4.66667L6.99998 1.75L4.08331 4.66667", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M7 1.75V8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.91665 4.66667L6.99998 1.75L4.08331 4.66667", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M7 1.75V8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$3 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var VolumeLine = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$3) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M6.41667 2.74281C6.41655 2.66156 6.39237 2.58216 6.34717 2.51464C6.30197 2.44712 6.23779 2.3945 6.16271 2.36342C6.08764 2.33235 6.00505 2.3242 5.92535 2.34002C5.84565 2.35584 5.77243 2.39491 5.71492 2.45231L3.74092 4.42573C3.66474 4.50236 3.5741 4.56312 3.47427 4.60447C3.37444 4.64583 3.26739 4.66696 3.15933 4.66664H1.75C1.59529 4.66664 1.44692 4.7281 1.33752 4.8375C1.22812 4.94689 1.16667 5.09527 1.16667 5.24998V8.74998C1.16667 8.90468 1.22812 9.05306 1.33752 9.16245C1.44692 9.27185 1.59529 9.33331 1.75 9.33331H3.15933C3.26739 9.33299 3.37444 9.35412 3.47427 9.39548C3.5741 9.43683 3.66474 9.49759 3.74092 9.57423L5.71433 11.5482C5.77185 11.6059 5.84518 11.6451 5.92503 11.661C6.00488 11.6769 6.08766 11.6688 6.16287 11.6376C6.23809 11.6065 6.30236 11.5537 6.34754 11.4859C6.39272 11.4182 6.41678 11.3386 6.41667 11.2571V2.74281Z", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M9.33333 5.25C9.71198 5.75486 9.91667 6.36892 9.91667 7C9.91667 7.63108 9.71198 8.24514 9.33333 8.75", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M11.2957 10.7124C11.7832 10.2249 12.1699 9.64612 12.4337 9.00916C12.6976 8.37219 12.8334 7.6895 12.8334 7.00005C12.8334 6.31061 12.6976 5.62791 12.4337 4.99095C12.1699 4.35399 11.7832 3.77523 11.2957 3.28772", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M6.41667 2.74281C6.41655 2.66156 6.39237 2.58216 6.34717 2.51464C6.30197 2.44712 6.23779 2.3945 6.16271 2.36342C6.08764 2.33235 6.00505 2.3242 5.92535 2.34002C5.84565 2.35584 5.77243 2.39491 5.71492 2.45231L3.74092 4.42573C3.66474 4.50236 3.5741 4.56312 3.47427 4.60447C3.37444 4.64583 3.26739 4.66696 3.15933 4.66664H1.75C1.59529 4.66664 1.44692 4.7281 1.33752 4.8375C1.22812 4.94689 1.16667 5.09527 1.16667 5.24998V8.74998C1.16667 8.90468 1.22812 9.05306 1.33752 9.16245C1.44692 9.27185 1.59529 9.33331 1.75 9.33331H3.15933C3.26739 9.33299 3.37444 9.35412 3.47427 9.39548C3.5741 9.43683 3.66474 9.49759 3.74092 9.57423L5.71433 11.5482C5.77185 11.6059 5.84518 11.6451 5.92503 11.661C6.00488 11.6769 6.08766 11.6688 6.16287 11.6376C6.23809 11.6065 6.30236 11.5537 6.34754 11.4859C6.39272 11.4182 6.41678 11.3386 6.41667 11.2571V2.74281Z", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9.33333 5.25C9.71198 5.75486 9.91667 6.36892 9.91667 7C9.91667 7.63108 9.71198 8.24514 9.33333 8.75", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M11.2957 10.7124C11.7832 10.2249 12.1699 9.64612 12.4337 9.00916C12.6976 8.37219 12.8334 7.6895 12.8334 7.00005C12.8334 6.31061 12.6976 5.62791 12.4337 4.99095C12.1699 4.35399 11.7832 3.77523 11.2957 3.28772", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$2 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var VolumeOff = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$2) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M2.681 4.66665L8.75 10.7356V11.5535C8.75004 11.6714 8.71756 11.7871 8.65614 11.8878C8.59472 11.9885 8.50673 12.0703 8.40184 12.1243C8.29695 12.1782 8.17921 12.2022 8.06157 12.1936C7.94393 12.185 7.83094 12.1442 7.735 12.0756L3.89667 9.33331H2.33333C2.02392 9.33331 1.72717 9.2104 1.50838 8.9916C1.28958 8.77281 1.16667 8.47607 1.16667 8.16665V5.83331C1.16667 5.52389 1.28958 5.22715 1.50838 5.00836C1.72717 4.78956 2.02392 4.66665 2.33333 4.66665H2.681ZM8.75 2.44648V7.92515L9.39925 8.5744C9.345 8.47046 9.32333 8.35258 9.33706 8.23614C9.3508 8.11971 9.3993 8.01011 9.47625 7.92165L9.52758 7.86973C9.76675 7.65506 9.91667 7.34531 9.91667 6.99998C9.91736 6.70126 9.80286 6.41377 9.597 6.19731L9.52758 6.13023C9.41397 6.0266 9.34588 5.88231 9.33811 5.72873C9.33034 5.57515 9.38352 5.42472 9.4861 5.31016C9.58867 5.19559 9.73232 5.12616 9.88582 5.11697C10.0393 5.10777 10.1902 5.15956 10.3058 5.26106C10.5506 5.47975 10.7464 5.74772 10.8804 6.0474C11.0144 6.34708 11.0836 6.6717 11.0833 6.99998C11.0837 7.32828 11.0146 7.65293 10.8806 7.95263C10.7466 8.25233 10.5507 8.52028 10.3058 8.7389C10.2174 8.81813 10.1069 8.86852 9.98911 8.88332C9.87133 8.89812 9.75183 8.87663 9.64658 8.82173L10.5041 9.67923C10.4927 9.58593 10.504 9.49127 10.5372 9.4033C10.5703 9.31534 10.6242 9.23669 10.6943 9.17406C11.0006 8.90084 11.2456 8.56586 11.4132 8.19114C11.5808 7.81643 11.6672 7.41047 11.6667 6.99998C11.6667 6.13665 11.2922 5.36081 10.6943 4.8259C10.6364 4.77503 10.5891 4.7132 10.5553 4.64397C10.5214 4.57475 10.5016 4.4995 10.497 4.42258C10.4924 4.34566 10.5031 4.26859 10.5284 4.19582C10.5538 4.12304 10.5933 4.05602 10.6447 3.99861C10.6961 3.94119 10.7584 3.89454 10.8279 3.86132C10.8974 3.82811 10.9729 3.80901 11.0498 3.80512C11.1268 3.80122 11.2038 3.81262 11.2763 3.83864C11.3488 3.86466 11.4155 3.9048 11.4724 3.95673C11.901 4.33937 12.2438 4.80832 12.4784 5.33281C12.7129 5.85729 12.8339 6.42544 12.8333 6.99998C12.8339 7.57452 12.7129 8.14267 12.4784 8.66716C12.2438 9.19164 11.901 9.66059 11.4724 10.0432C11.4106 10.0988 11.3375 10.1404 11.2583 10.1654C11.179 10.1903 11.0953 10.198 11.0128 10.1879L11.9496 11.1247C12.0558 11.2347 12.1146 11.3821 12.1133 11.535C12.112 11.688 12.0506 11.8343 11.9425 11.9425C11.8343 12.0506 11.688 12.112 11.5351 12.1133C11.3821 12.1146 11.2348 12.0558 11.1248 11.9496L2.05042 2.87581C1.9947 2.822 1.95026 2.75764 1.91969 2.68647C1.88912 2.6153 1.87303 2.53875 1.87236 2.4613C1.87168 2.38384 1.88644 2.30703 1.91577 2.23534C1.9451 2.16365 1.98842 2.09852 2.04319 2.04375C2.09796 1.98898 2.16309 1.94567 2.23478 1.91633C2.30647 1.887 2.38328 1.87224 2.46074 1.87292C2.53819 1.87359 2.61473 1.88968 2.6859 1.92025C2.75707 1.95083 2.82144 1.99527 2.87525 2.05098L4.82708 4.00165L7.73558 1.92381C7.83156 1.85532 7.94455 1.81459 8.06215 1.80611C8.17975 1.79762 8.29742 1.8217 8.40223 1.87571C8.50704 1.92971 8.59495 2.01155 8.6563 2.11224C8.71765 2.21293 8.75007 2.32857 8.75 2.44648Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.681 4.66665L8.75 10.7356V11.5535C8.75004 11.6714 8.71756 11.7871 8.65614 11.8878C8.59472 11.9885 8.50673 12.0703 8.40184 12.1243C8.29695 12.1782 8.17921 12.2022 8.06157 12.1936C7.94393 12.185 7.83094 12.1442 7.735 12.0756L3.89667 9.33331H2.33333C2.02392 9.33331 1.72717 9.2104 1.50838 8.9916C1.28958 8.77281 1.16667 8.47607 1.16667 8.16665V5.83331C1.16667 5.52389 1.28958 5.22715 1.50838 5.00836C1.72717 4.78956 2.02392 4.66665 2.33333 4.66665H2.681ZM8.75 2.44648V7.92515L9.39925 8.5744C9.345 8.47046 9.32333 8.35258 9.33706 8.23614C9.3508 8.11971 9.3993 8.01011 9.47625 7.92165L9.52758 7.86973C9.76675 7.65506 9.91667 7.34531 9.91667 6.99998C9.91736 6.70126 9.80286 6.41377 9.597 6.19731L9.52758 6.13023C9.41397 6.0266 9.34588 5.88231 9.33811 5.72873C9.33034 5.57515 9.38352 5.42472 9.4861 5.31016C9.58867 5.19559 9.73232 5.12616 9.88582 5.11697C10.0393 5.10777 10.1902 5.15956 10.3058 5.26106C10.5506 5.47975 10.7464 5.74772 10.8804 6.0474C11.0144 6.34708 11.0836 6.6717 11.0833 6.99998C11.0837 7.32828 11.0146 7.65293 10.8806 7.95263C10.7466 8.25233 10.5507 8.52028 10.3058 8.7389C10.2174 8.81813 10.1069 8.86852 9.98911 8.88332C9.87133 8.89812 9.75183 8.87663 9.64658 8.82173L10.5041 9.67923C10.4927 9.58593 10.504 9.49127 10.5372 9.4033C10.5703 9.31534 10.6242 9.23669 10.6943 9.17406C11.0006 8.90084 11.2456 8.56586 11.4132 8.19114C11.5808 7.81643 11.6672 7.41047 11.6667 6.99998C11.6667 6.13665 11.2922 5.36081 10.6943 4.8259C10.6364 4.77503 10.5891 4.7132 10.5553 4.64397C10.5214 4.57475 10.5016 4.4995 10.497 4.42258C10.4924 4.34566 10.5031 4.26859 10.5284 4.19582C10.5538 4.12304 10.5933 4.05602 10.6447 3.99861C10.6961 3.94119 10.7584 3.89454 10.8279 3.86132C10.8974 3.82811 10.9729 3.80901 11.0498 3.80512C11.1268 3.80122 11.2038 3.81262 11.2763 3.83864C11.3488 3.86466 11.4155 3.9048 11.4724 3.95673C11.901 4.33937 12.2438 4.80832 12.4784 5.33281C12.7129 5.85729 12.8339 6.42544 12.8333 6.99998C12.8339 7.57452 12.7129 8.14267 12.4784 8.66716C12.2438 9.19164 11.901 9.66059 11.4724 10.0432C11.4106 10.0988 11.3375 10.1404 11.2583 10.1654C11.179 10.1903 11.0953 10.198 11.0128 10.1879L11.9496 11.1247C12.0558 11.2347 12.1146 11.3821 12.1133 11.535C12.112 11.688 12.0506 11.8343 11.9425 11.9425C11.8343 12.0506 11.688 12.112 11.5351 12.1133C11.3821 12.1146 11.2348 12.0558 11.1248 11.9496L2.05042 2.87581C1.9947 2.822 1.95026 2.75764 1.91969 2.68647C1.88912 2.6153 1.87303 2.53875 1.87236 2.4613C1.87168 2.38384 1.88644 2.30703 1.91577 2.23534C1.9451 2.16365 1.98842 2.09852 2.04319 2.04375C2.09796 1.98898 2.16309 1.94567 2.23478 1.91633C2.30647 1.887 2.38328 1.87224 2.46074 1.87292C2.53819 1.87359 2.61473 1.88968 2.6859 1.92025C2.75707 1.95083 2.82144 1.99527 2.87525 2.05098L4.82708 4.00165L7.73558 1.92381C7.83156 1.85532 7.94455 1.81459 8.06215 1.80611C8.17975 1.79762 8.29742 1.8217 8.40223 1.87571C8.50704 1.92971 8.59495 2.01155 8.6563 2.11224C8.71765 2.21293 8.75007 2.32857 8.75 2.44648Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative$1 = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var Volume = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative$1) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M7.735 1.92496C7.82629 1.85965 7.93313 1.81943 8.04483 1.80833C8.15653 1.79722 8.26919 1.81561 8.37156 1.86166C8.47393 1.9077 8.56243 1.9798 8.62822 2.07075C8.69402 2.1617 8.7348 2.26832 8.7465 2.37996L8.75 2.44646V11.5535C8.75003 11.6657 8.72062 11.776 8.6647 11.8733C8.60877 11.9707 8.52829 12.0516 8.43129 12.1081C8.33429 12.1646 8.22417 12.1947 8.11191 12.1953C7.99966 12.196 7.88921 12.1671 7.79158 12.1117L7.73558 12.0755L3.89666 9.33329H2.33333C2.03899 9.33339 1.7555 9.22222 1.53968 9.02209C1.32386 8.82195 1.19166 8.54763 1.16958 8.25413L1.16666 8.16663V5.83329C1.16657 5.53896 1.27773 5.25546 1.47787 5.03964C1.67801 4.82382 1.95232 4.69162 2.24583 4.66954L2.33333 4.66663H3.89666L7.735 1.92496ZM11.4724 3.95671C11.901 4.33935 12.2438 4.8083 12.4783 5.33278C12.7129 5.85727 12.8339 6.42542 12.8333 6.99996C12.8339 7.5745 12.7129 8.14265 12.4783 8.66713C12.2438 9.19162 11.901 9.66057 11.4724 10.0432C11.4155 10.0951 11.3488 10.1353 11.2763 10.1613C11.2038 10.1873 11.1268 10.1987 11.0498 10.1948C10.9729 10.1909 10.8974 10.1718 10.8279 10.1386C10.7584 10.1054 10.6961 10.0587 10.6447 10.0013C10.5933 9.94392 10.5538 9.8769 10.5284 9.80412C10.5031 9.73135 10.4924 9.65428 10.497 9.57736C10.5016 9.50044 10.5214 9.42519 10.5553 9.35597C10.5891 9.28674 10.6364 9.22491 10.6942 9.17404C11.0006 8.90082 11.2456 8.56584 11.4132 8.19112C11.5808 7.8164 11.6672 7.41045 11.6667 6.99996C11.6667 6.13663 11.2922 5.36079 10.6942 4.82588C10.6364 4.77501 10.5891 4.71318 10.5553 4.64395C10.5214 4.57473 10.5016 4.49948 10.497 4.42256C10.4924 4.34564 10.5031 4.26857 10.5284 4.19579C10.5538 4.12302 10.5933 4.056 10.6447 3.99858C10.6961 3.94117 10.7584 3.89451 10.8279 3.8613C10.8974 3.82809 10.9729 3.80899 11.0498 3.8051C11.1268 3.8012 11.2038 3.8126 11.2763 3.83862C11.3488 3.86464 11.4155 3.90478 11.4724 3.95671ZM10.3057 5.26104C10.5505 5.47964 10.7463 5.74751 10.8804 6.04709C11.0144 6.34667 11.0835 6.67119 11.0833 6.99938C11.0837 7.32776 11.0147 7.65252 10.8806 7.95232C10.7466 8.25212 10.5507 8.52017 10.3057 8.73888C10.1951 8.83712 10.0513 8.88966 9.9034 8.88586C9.7555 8.88206 9.61457 8.8222 9.50914 8.71841C9.40371 8.61461 9.34166 8.47462 9.33555 8.3268C9.32944 8.17897 9.37974 8.03435 9.47625 7.92221L9.52758 7.86971C9.76675 7.65504 9.91666 7.34529 9.91666 6.99996C9.91735 6.70124 9.80286 6.41375 9.597 6.19729L9.52758 6.13021C9.46969 6.07934 9.42246 6.01751 9.38861 5.94829C9.35475 5.87906 9.33495 5.80381 9.33034 5.72689C9.32574 5.64997 9.33642 5.5729 9.36176 5.50013C9.38711 5.42736 9.42663 5.36033 9.47803 5.30292C9.52943 5.24551 9.5917 5.19885 9.66123 5.16564C9.73077 5.13243 9.8062 5.11332 9.88316 5.10943C9.96012 5.10554 10.0371 5.11693 10.1096 5.14295C10.1822 5.16898 10.2488 5.20911 10.3057 5.26104Z", fill: props.fill || props.color || "#ACB4BD" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.735 1.92496C7.82629 1.85965 7.93313 1.81943 8.04483 1.80833C8.15653 1.79722 8.26919 1.81561 8.37156 1.86166C8.47393 1.9077 8.56243 1.9798 8.62822 2.07075C8.69402 2.1617 8.7348 2.26832 8.7465 2.37996L8.75 2.44646V11.5535C8.75003 11.6657 8.72062 11.776 8.6647 11.8733C8.60877 11.9707 8.52829 12.0516 8.43129 12.1081C8.33429 12.1646 8.22417 12.1947 8.11191 12.1953C7.99966 12.196 7.88921 12.1671 7.79158 12.1117L7.73558 12.0755L3.89666 9.33329H2.33333C2.03899 9.33339 1.7555 9.22222 1.53968 9.02209C1.32386 8.82195 1.19166 8.54763 1.16958 8.25413L1.16666 8.16663V5.83329C1.16657 5.53896 1.27773 5.25546 1.47787 5.03964C1.67801 4.82382 1.95232 4.69162 2.24583 4.66954L2.33333 4.66663H3.89666L7.735 1.92496ZM11.4724 3.95671C11.901 4.33935 12.2438 4.8083 12.4783 5.33278C12.7129 5.85727 12.8339 6.42542 12.8333 6.99996C12.8339 7.5745 12.7129 8.14265 12.4783 8.66713C12.2438 9.19162 11.901 9.66057 11.4724 10.0432C11.4155 10.0951 11.3488 10.1353 11.2763 10.1613C11.2038 10.1873 11.1268 10.1987 11.0498 10.1948C10.9729 10.1909 10.8974 10.1718 10.8279 10.1386C10.7584 10.1054 10.6961 10.0587 10.6447 10.0013C10.5933 9.94392 10.5538 9.8769 10.5284 9.80412C10.5031 9.73135 10.4924 9.65428 10.497 9.57736C10.5016 9.50044 10.5214 9.42519 10.5553 9.35597C10.5891 9.28674 10.6364 9.22491 10.6942 9.17404C11.0006 8.90082 11.2456 8.56584 11.4132 8.19112C11.5808 7.8164 11.6672 7.41045 11.6667 6.99996C11.6667 6.13663 11.2922 5.36079 10.6942 4.82588C10.6364 4.77501 10.5891 4.71318 10.5553 4.64395C10.5214 4.57473 10.5016 4.49948 10.497 4.42256C10.4924 4.34564 10.5031 4.26857 10.5284 4.19579C10.5538 4.12302 10.5933 4.056 10.6447 3.99858C10.6961 3.94117 10.7584 3.89451 10.8279 3.8613C10.8974 3.82809 10.9729 3.80899 11.0498 3.8051C11.1268 3.8012 11.2038 3.8126 11.2763 3.83862C11.3488 3.86464 11.4155 3.90478 11.4724 3.95671ZM10.3057 5.26104C10.5505 5.47964 10.7463 5.74751 10.8804 6.04709C11.0144 6.34667 11.0835 6.67119 11.0833 6.99938C11.0837 7.32776 11.0147 7.65252 10.8806 7.95232C10.7466 8.25212 10.5507 8.52017 10.3057 8.73888C10.1951 8.83712 10.0513 8.88966 9.9034 8.88586C9.7555 8.88206 9.61457 8.8222 9.50914 8.71841C9.40371 8.61461 9.34166 8.47462 9.33555 8.3268C9.32944 8.17897 9.37974 8.03435 9.47625 7.92221L9.52758 7.86971C9.76675 7.65504 9.91666 7.34529 9.91666 6.99996C9.91735 6.70124 9.80286 6.41375 9.597 6.19729L9.52758 6.13021C9.46969 6.07934 9.42246 6.01751 9.38861 5.94829C9.35475 5.87906 9.33495 5.80381 9.33034 5.72689C9.32574 5.64997 9.33642 5.5729 9.36176 5.50013C9.38711 5.42736 9.42663 5.36033 9.47803 5.30292C9.52943 5.24551 9.5917 5.19885 9.66123 5.16564C9.73077 5.13243 9.8062 5.11332 9.88316 5.10943C9.96012 5.10554 10.0371 5.11693 10.1096 5.14295C10.1822 5.16898 10.2488 5.20911 10.3057 5.26104Z", fill: "#ACB4BD" })));
};

// 플랫폼 확인 (React Native인지 웹인지)
var isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var X = function (props) {
    // React Native 환경에서는 react-native-svg를 사용
    if (isNative) {
        try {
            // 동적으로 react-native-svg 불러오기
            var _a = require('react-native-svg'), Svg = _a.Svg, Path = _a.Path, G = _a.G, Rect = _a.Rect;
            return (React.createElement(Svg, __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", fill: "none", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667 }, props),
                React.createElement(Path, { d: "M10.5 3.5L3.5 10.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement(Path, { d: "M3.5 3.5L10.5 10.5", stroke: props.stroke || props.color || "#ACB4BD", strokeWidth: props.strokeWidth || 1.16667, strokeLinecap: "round", strokeLinejoin: "round" })));
        }
        catch (error) {
            console.error("Error loading react-native-svg:", error);
            return null;
        }
    }
    // 웹 환경용 SVG
    return (React.createElement("svg", __assign({ width: props.width || props.size || 24, height: props.height || props.size || 24, viewBox: "0 0 14 14", stroke: props.stroke || props.color || "#ACB4BD", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M10.5 3.5L3.5 10.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M3.5 3.5L10.5 10.5", stroke: "#ACB4BD", strokeWidth: "1.16667", strokeLinecap: "round", strokeLinejoin: "round" })));
};

export { Arrowleft, Arrowright, Calendar, ChartLine, Chat, ChevronDown, ChevronLeft, ChevronLeft12, ChevronRight, ChevronRight12, ChevronUp, CircleHelp, CircleHelpSolid, CirclePlus, CirclePlusSolid, CircleX, CircleXSolid, Clock, Copy, CornerDownRight, Document, Download, Ellipsis, EllipsisVertical, FileText, Filter, Folder, Home, Image, ImageSolid, Info, InfoSolid, LogIn, LogOut, MapPin, Marker, Message, Minus, Notification, Notification2, Paperclip, Pause, PenLine, Pencil, PencilLine, People, Phone, Play, Plus, PolygonDown, PolygonUp, Replay, Reply, Search, Setting2, Settings, Share, Siren, SquarePen, Trash, Upload, Volume, VolumeLine, VolumeOff, X };
