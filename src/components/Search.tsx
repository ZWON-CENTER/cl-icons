import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Search = (props: IconProps) => {
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
          <Path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"    stroke={props.stroke || props.color || "white"} strokeWidth={props.strokeWidth || 1.33333} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M14.0005 13.9995L11.1338 11.1328"    stroke={props.stroke || props.color || "white"} strokeWidth={props.strokeWidth || 1.33333} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0005 13.9995L11.1338 11.1328" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Search;
