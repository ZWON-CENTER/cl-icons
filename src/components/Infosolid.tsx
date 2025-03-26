import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const InfoSolid = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2197_5938)">
          <Path d="M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M7.00001 6.41663C7.32218 6.41663 7.58335 6.67779 7.58335 6.99996V9.33329C7.58335 9.65546 7.32218 9.91663 7.00001 9.91663C6.67785 9.91663 6.41668 9.65546 6.41668 9.33329V6.99996C6.41668 6.67779 6.67785 6.41663 7.00001 6.41663Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "white"}/>
          <Path d="M6.41668 4.66671C6.41668 4.34454 6.67785 4.08337 7.00001 4.08337C7.32218 4.08337 7.58918 4.34454 7.58918 4.66671C7.58918 4.98887 7.32218 5.25004 7.00001 5.25004C6.67785 5.25004 6.41668 4.98887 6.41668 4.66671Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "white"}/>
          </G>
<defs>
<clipPath id="clip0_2197_5938">
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
        <g clip-path="url(#clip0_2197_5938)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z" fill="#ACB4BD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 6.41663C7.32218 6.41663 7.58335 6.67779 7.58335 6.99996V9.33329C7.58335 9.65546 7.32218 9.91663 7.00001 9.91663C6.67785 9.91663 6.41668 9.65546 6.41668 9.33329V6.99996C6.41668 6.67779 6.67785 6.41663 7.00001 6.41663Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41668 4.66671C6.41668 4.34454 6.67785 4.08337 7.00001 4.08337C7.32218 4.08337 7.58918 4.34454 7.58918 4.66671C7.58918 4.98887 7.32218 5.25004 7.00001 5.25004C6.67785 5.25004 6.41668 4.98887 6.41668 4.66671Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2197_5938">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
      </g>
    </svg>
  );
};

export default InfoSolid;
