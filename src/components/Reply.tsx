import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Reply = (props: IconProps) => {
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
          <Path d="M10 6.66406L13.3333 9.9974L10 13.3307"    stroke={props.stroke || props.color || "white"} strokeWidth={props.strokeWidth || 1.33333} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M2.66699 2.66406V7.33073C2.66699 8.03797 2.94794 8.71625 3.44804 9.21635C3.94814 9.71644 4.62641 9.9974 5.33366 9.9974H13.3337"    stroke={props.stroke || props.color || "white"} strokeWidth={props.strokeWidth || 1.33333} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M10 6.66406L13.3333 9.9974L10 13.3307" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.66699 2.66406V7.33073C2.66699 8.03797 2.94794 8.71625 3.44804 9.21635C3.94814 9.71644 4.62641 9.9974 5.33366 9.9974H13.3337" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Reply;
