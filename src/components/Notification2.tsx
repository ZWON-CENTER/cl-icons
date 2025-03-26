import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Notification2 = (props: IconProps) => {
  // React Native 환경에서는 react-native-svg를 사용
  if (isNative) {
    try {
      // 동적으로 react-native-svg 불러오기
      const { Svg, Path, G, Rect } = require('react-native-svg');
      return (
        <Svg
          width={props.width || props.size || 24}
          height={props.height || props.size || 24}
          viewBox="0 0 14 14"
          fill="none"
          stroke={props.stroke || props.color || "#ACB4BD"}
          strokeWidth={props.strokeWidth || 1.16667}
          {...props}
        >
          <Path d="M14.5631 3.33625C14.5631 4.24791 13.8241 4.98695 12.9124 4.98695C12.0008 4.98695 11.2617 4.24791 11.2617 3.33625C11.2617 2.42459 12.0008 1.68555 12.9124 1.68555C13.8241 1.68555 14.5631 2.42459 14.5631 3.33625Z"    fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M13.7341 5.52708C13.5365 5.5778 13.3293 5.60497 13.1159 5.60497C11.75 5.60497 10.6428 4.49766 10.6428 3.13193C10.6428 2.9185 10.6699 2.71141 10.7207 2.51367H5.0785C3.71263 2.51367 2.60547 3.62098 2.60547 4.98671V11.1693C2.60547 12.535 3.71263 13.6423 5.0785 13.6423H11.2611C12.627 13.6423 13.7341 12.535 13.7341 11.1693V5.52708Z"    fill={props.fill || props.color || "#ACB4BD"}/>
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
      viewBox="0 0 14 14"
      stroke={props.stroke || props.color || "#ACB4BD"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.5631 3.33625C14.5631 4.24791 13.8241 4.98695 12.9124 4.98695C12.0008 4.98695 11.2617 4.24791 11.2617 3.33625C11.2617 2.42459 12.0008 1.68555 12.9124 1.68555C13.8241 1.68555 14.5631 2.42459 14.5631 3.33625Z" fill="#ACB4BD"/>
<path d="M13.7341 5.52708C13.5365 5.5778 13.3293 5.60497 13.1159 5.60497C11.75 5.60497 10.6428 4.49766 10.6428 3.13193C10.6428 2.9185 10.6699 2.71141 10.7207 2.51367H5.0785C3.71263 2.51367 2.60547 3.62098 2.60547 4.98671V11.1693C2.60547 12.535 3.71263 13.6423 5.0785 13.6423H11.2611C12.627 13.6423 13.7341 12.535 13.7341 11.1693V5.52708Z" fill="#ACB4BD"/>
    </svg>
  );
};

export default Notification2;
