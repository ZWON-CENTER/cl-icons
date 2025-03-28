import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const CirclePlusSolid = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2197_5959)">
          <Path d="M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M4.66665 6.41671C4.34449 6.41671 4.08332 6.67787 4.08332 7.00004C4.08332 7.32221 4.34449 7.58337 4.66665 7.58337H6.41665V9.33337C6.41665 9.65554 6.67782 9.91671 6.99999 9.91671C7.32215 9.91671 7.58332 9.65554 7.58332 9.33337V7.58337H9.33332C9.65548 7.58337 9.91665 7.32221 9.91665 7.00004C9.91665 6.67787 9.65548 6.41671 9.33332 6.41671H7.58332V4.66671C7.58332 4.34454 7.32215 4.08337 6.99999 4.08337C6.67782 4.08337 6.41665 4.34454 6.41665 4.66671V6.41671H4.66665Z"    fill={props.fill || props.color || "white"}/>
          </G>
<defs>
<clipPath id="clip0_2197_5959">
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
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.fill || props.color || "#ACB4BD"}>
        <g clipPath="url(#clip0_2197_5959)">
<path fillRule="evenodd" clipRule="evenodd" d="M0.583319 7.00004C0.583319 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583319 10.5439 0.583319 7.00004Z" fill="#ACB4BD"/>
<path d="M4.66665 6.41671C4.34449 6.41671 4.08332 6.67787 4.08332 7.00004C4.08332 7.32221 4.34449 7.58337 4.66665 7.58337H6.41665V9.33337C6.41665 9.65554 6.67782 9.91671 6.99999 9.91671C7.32215 9.91671 7.58332 9.65554 7.58332 9.33337V7.58337H9.33332C9.65548 7.58337 9.91665 7.32221 9.91665 7.00004C9.91665 6.67787 9.65548 6.41671 9.33332 6.41671H7.58332V4.66671C7.58332 4.34454 7.32215 4.08337 6.99999 4.08337C6.67782 4.08337 6.41665 4.34454 6.41665 4.66671V6.41671H4.66665Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2197_5959">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
      </g>
    </svg>
  );
};

export default CirclePlusSolid;
