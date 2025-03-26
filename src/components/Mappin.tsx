import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const MapPin = (props: IconProps) => {
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
          <Path d="M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default MapPin;
