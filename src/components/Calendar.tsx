import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Calendar = (props: IconProps) => {
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
          <Path d="M4.66668 1.16663V3.49996"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33332 1.16663V3.49996"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M11.0833 2.33337H2.91667C2.27233 2.33337 1.75 2.85571 1.75 3.50004V11.6667C1.75 12.311 2.27233 12.8334 2.91667 12.8334H11.0833C11.7277 12.8334 12.25 12.311 12.25 11.6667V3.50004C12.25 2.85571 11.7277 2.33337 11.0833 2.33337Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M1.75 5.83337H12.25"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M4.66668 8.16663H4.67335"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 8.16663H7.00667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33332 8.16663H9.33999"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M4.66668 10.5H4.67335"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 10.5H7.00667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33332 10.5H9.33999"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M4.66668 1.16663V3.49996" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33332 1.16663V3.49996" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0833 2.33337H2.91667C2.27233 2.33337 1.75 2.85571 1.75 3.50004V11.6667C1.75 12.311 2.27233 12.8334 2.91667 12.8334H11.0833C11.7277 12.8334 12.25 12.311 12.25 11.6667V3.50004C12.25 2.85571 11.7277 2.33337 11.0833 2.33337Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 5.83337H12.25" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66668 8.16663H4.67335" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8.16663H7.00667" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33332 8.16663H9.33999" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66668 10.5H4.67335" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10.5H7.00667" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33332 10.5H9.33999" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Calendar;
