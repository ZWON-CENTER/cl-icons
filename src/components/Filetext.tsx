import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const FileText = (props: IconProps) => {
  // React Native 환경에서는 react-native-svg를 사용
  if (isNative) {
    try {
      // 동적으로 react-native-svg 불러오기
      const { Svg, Path, G, Rect } = require('react-native-svg');
      return (
        <Svg
          width={props.width || props.size || 24}
          height={props.height || props.size || 24}
          viewBox="0 0 24 24"
          fill="none"
          stroke={props.stroke || props.color || "#ACB4BD"}
          strokeWidth={props.strokeWidth || 1.16667}
          {...props}
        >
          <Path d="M8.74999 1.16663H3.49999C3.19057 1.16663 2.89382 1.28954 2.67503 1.50833C2.45624 1.72713 2.33332 2.02387 2.33332 2.33329V11.6666C2.33332 11.976 2.45624 12.2728 2.67503 12.4916C2.89382 12.7104 3.19057 12.8333 3.49999 12.8333H10.5C10.8094 12.8333 11.1062 12.7104 11.3249 12.4916C11.5437 12.2728 11.6667 11.976 11.6667 11.6666V4.08329L8.74999 1.16663Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M8.16668 1.16663V3.49996C8.16668 3.80938 8.2896 4.10612 8.50839 4.32492C8.72718 4.54371 9.02393 4.66663 9.33335 4.66663H11.6667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M5.83335 5.25H4.66668"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33335 7.58337H4.66668"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33335 9.91663H4.66668"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
      );
    } catch (error) {
      console.error("Error loading react-native-svg:", error);
      return null;
    }
  }

  // 웹 환경용 SVG
  return (
    <svg
      width={props.width || props.size || 24}
      height={props.height || props.size || 24}
      viewBox="0 0 24 24"
      stroke={props.stroke || props.color || "#ACB4BD"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.74999 1.16663H3.49999C3.19057 1.16663 2.89382 1.28954 2.67503 1.50833C2.45624 1.72713 2.33332 2.02387 2.33332 2.33329V11.6666C2.33332 11.976 2.45624 12.2728 2.67503 12.4916C2.89382 12.7104 3.19057 12.8333 3.49999 12.8333H10.5C10.8094 12.8333 11.1062 12.7104 11.3249 12.4916C11.5437 12.2728 11.6667 11.976 11.6667 11.6666V4.08329L8.74999 1.16663Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16668 1.16663V3.49996C8.16668 3.80938 8.2896 4.10612 8.50839 4.32492C8.72718 4.54371 9.02393 4.66663 9.33335 4.66663H11.6667" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83335 5.25H4.66668" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33335 7.58337H4.66668" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33335 9.91663H4.66668" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default FileText;
