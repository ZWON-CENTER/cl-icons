import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Play = (props: IconProps) => {
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
          fill={props.fill || props.color || "#ACB4BD"}
          stroke="none"
          strokeWidth={props.strokeWidth || 1.16667}
          {...props}
        >
          <Path d="M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.fill || props.color || "#ACB4BD"}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z" fill="#ACB4BD"/>
      </g>
    </svg>
  );
};

export default Play;
