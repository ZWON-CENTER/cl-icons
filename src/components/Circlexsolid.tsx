import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const CircleXSolid = (props: IconProps) => {
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
          fill={props.fill || props.color || "#ACB4BD"}
          stroke="none"
          strokeWidth={props.strokeWidth || 1.16667}
          {...props}
        >
          <G  clipPath="url(#clip0_2197_5952)">
          <Path d="M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M9.16249 4.83748C9.3903 5.06529 9.3903 5.43463 9.16249 5.66244L7.82497 6.99996L9.16249 8.33748C9.3903 8.56529 9.3903 8.93463 9.16249 9.16244C8.93469 9.39024 8.56534 9.39024 8.33754 9.16244L7.00001 7.82492L5.66249 9.16244C5.43469 9.39024 5.06534 9.39024 4.83754 9.16244C4.60973 8.93463 4.60973 8.56529 4.83754 8.33748L6.17506 6.99996L4.83754 5.66244C4.60973 5.43463 4.60973 5.06529 4.83754 4.83748C5.06534 4.60967 5.43469 4.60967 5.66249 4.83748L7.00001 6.175L8.33754 4.83748C8.56534 4.60967 8.93469 4.60967 9.16249 4.83748Z"    fill={props.fill || props.color || "white"}/>
          </G>
<defs>
<clipPath id="clip0_2197_5952">
          <Rect  width="14" height="14" fill={props.fill || props.color || "white"}/>
</clipPath>
</defs>
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.fill || props.color || "#ACB4BD"}>
        <g clip-path="url(#clip0_2197_5952)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z" fill="#ACB4BD"/>
<path d="M9.16249 4.83748C9.3903 5.06529 9.3903 5.43463 9.16249 5.66244L7.82497 6.99996L9.16249 8.33748C9.3903 8.56529 9.3903 8.93463 9.16249 9.16244C8.93469 9.39024 8.56534 9.39024 8.33754 9.16244L7.00001 7.82492L5.66249 9.16244C5.43469 9.39024 5.06534 9.39024 4.83754 9.16244C4.60973 8.93463 4.60973 8.56529 4.83754 8.33748L6.17506 6.99996L4.83754 5.66244C4.60973 5.43463 4.60973 5.06529 4.83754 4.83748C5.06534 4.60967 5.43469 4.60967 5.66249 4.83748L7.00001 6.175L8.33754 4.83748C8.56534 4.60967 8.93469 4.60967 9.16249 4.83748Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2197_5952">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
      </g>
    </svg>
  );
};

export default CircleXSolid;
