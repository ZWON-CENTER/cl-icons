import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Replay = (props: IconProps) => {
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
          <Path d="M12.25 7C12.25 8.03835 11.9421 9.05339 11.3652 9.91674C10.7883 10.7801 9.9684 11.453 9.00909 11.8504C8.04978 12.2477 6.99418 12.3517 5.97578 12.1491C4.95738 11.9466 4.02192 11.4465 3.28769 10.7123C2.55347 9.97809 2.05345 9.04262 1.85088 8.02422C1.64831 7.00582 1.75227 5.95022 2.14963 4.99091C2.54699 4.0316 3.2199 3.21166 4.08326 2.63478C4.94662 2.05791 5.96165 1.75 7 1.75C8.47 1.75 9.87584 2.33333 10.9317 3.34833L12.25 4.66667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M12.25 1.75V4.66667H9.33332"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M12.25 7C12.25 8.03835 11.9421 9.05339 11.3652 9.91674C10.7883 10.7801 9.9684 11.453 9.00909 11.8504C8.04978 12.2477 6.99418 12.3517 5.97578 12.1491C4.95738 11.9466 4.02192 11.4465 3.28769 10.7123C2.55347 9.97809 2.05345 9.04262 1.85088 8.02422C1.64831 7.00582 1.75227 5.95022 2.14963 4.99091C2.54699 4.0316 3.2199 3.21166 4.08326 2.63478C4.94662 2.05791 5.96165 1.75 7 1.75C8.47 1.75 9.87584 2.33333 10.9317 3.34833L12.25 4.66667" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 1.75V4.66667H9.33332" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Replay;
