import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const VolumeLine = (props: IconProps) => {
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
          <Path d="M6.41667 2.74281C6.41655 2.66156 6.39237 2.58216 6.34717 2.51464C6.30197 2.44712 6.23779 2.3945 6.16271 2.36342C6.08764 2.33235 6.00505 2.3242 5.92535 2.34002C5.84565 2.35584 5.77243 2.39491 5.71492 2.45231L3.74092 4.42573C3.66474 4.50236 3.5741 4.56312 3.47427 4.60447C3.37444 4.64583 3.26739 4.66696 3.15933 4.66664H1.75C1.59529 4.66664 1.44692 4.7281 1.33752 4.8375C1.22812 4.94689 1.16667 5.09527 1.16667 5.24998V8.74998C1.16667 8.90468 1.22812 9.05306 1.33752 9.16245C1.44692 9.27185 1.59529 9.33331 1.75 9.33331H3.15933C3.26739 9.33299 3.37444 9.35412 3.47427 9.39548C3.5741 9.43683 3.66474 9.49759 3.74092 9.57423L5.71433 11.5482C5.77185 11.6059 5.84518 11.6451 5.92503 11.661C6.00488 11.6769 6.08766 11.6688 6.16287 11.6376C6.23809 11.6065 6.30236 11.5537 6.34754 11.4859C6.39272 11.4182 6.41678 11.3386 6.41667 11.2571V2.74281Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.33333 5.25C9.71198 5.75486 9.91667 6.36892 9.91667 7C9.91667 7.63108 9.71198 8.24514 9.33333 8.75"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M11.2957 10.7124C11.7832 10.2249 12.1699 9.64612 12.4337 9.00916C12.6976 8.37219 12.8334 7.6895 12.8334 7.00005C12.8334 6.31061 12.6976 5.62791 12.4337 4.99095C12.1699 4.35399 11.7832 3.77523 11.2957 3.28772"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M6.41667 2.74281C6.41655 2.66156 6.39237 2.58216 6.34717 2.51464C6.30197 2.44712 6.23779 2.3945 6.16271 2.36342C6.08764 2.33235 6.00505 2.3242 5.92535 2.34002C5.84565 2.35584 5.77243 2.39491 5.71492 2.45231L3.74092 4.42573C3.66474 4.50236 3.5741 4.56312 3.47427 4.60447C3.37444 4.64583 3.26739 4.66696 3.15933 4.66664H1.75C1.59529 4.66664 1.44692 4.7281 1.33752 4.8375C1.22812 4.94689 1.16667 5.09527 1.16667 5.24998V8.74998C1.16667 8.90468 1.22812 9.05306 1.33752 9.16245C1.44692 9.27185 1.59529 9.33331 1.75 9.33331H3.15933C3.26739 9.33299 3.37444 9.35412 3.47427 9.39548C3.5741 9.43683 3.66474 9.49759 3.74092 9.57423L5.71433 11.5482C5.77185 11.6059 5.84518 11.6451 5.92503 11.661C6.00488 11.6769 6.08766 11.6688 6.16287 11.6376C6.23809 11.6065 6.30236 11.5537 6.34754 11.4859C6.39272 11.4182 6.41678 11.3386 6.41667 11.2571V2.74281Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 5.25C9.71198 5.75486 9.91667 6.36892 9.91667 7C9.91667 7.63108 9.71198 8.24514 9.33333 8.75" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2957 10.7124C11.7832 10.2249 12.1699 9.64612 12.4337 9.00916C12.6976 8.37219 12.8334 7.6895 12.8334 7.00005C12.8334 6.31061 12.6976 5.62791 12.4337 4.99095C12.1699 4.35399 11.7832 3.77523 11.2957 3.28772" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default VolumeLine;
