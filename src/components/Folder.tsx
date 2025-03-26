import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Folder = (props: IconProps) => {
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
          <Path d="M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M1.16667 5.83337H12.8333"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.16667 5.83337H12.8333" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Folder;
