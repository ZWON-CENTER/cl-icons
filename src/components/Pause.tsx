import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Pause = (props: IconProps) => {
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
          <Path d="M5.25 1.75C5.40471 1.75 5.55308 1.81146 5.66248 1.92085C5.77187 2.03025 5.83333 2.17862 5.83333 2.33333V11.6667C5.83333 11.8214 5.77187 11.9697 5.66248 12.0791C5.55308 12.1885 5.40471 12.25 5.25 12.25H4.08333C3.92862 12.25 3.78025 12.1885 3.67085 12.0791C3.56146 11.9697 3.5 11.8214 3.5 11.6667V2.33333C3.5 2.17862 3.56146 2.03025 3.67085 1.92085C3.78025 1.81146 3.92862 1.75 4.08333 1.75H5.25ZM9.91667 1.75C10.0714 1.75 10.2197 1.81146 10.3291 1.92085C10.4385 2.03025 10.5 2.17862 10.5 2.33333V11.6667C10.5 11.8214 10.4385 11.9697 10.3291 12.0791C10.2197 12.1885 10.0714 12.25 9.91667 12.25H8.75C8.59529 12.25 8.44692 12.1885 8.33752 12.0791C8.22812 11.9697 8.16667 11.8214 8.16667 11.6667V2.33333C8.16667 2.17862 8.22812 2.03025 8.33752 1.92085C8.44692 1.81146 8.59529 1.75 8.75 1.75H9.91667Z"    fill={props.fill || props.color || "#ACB4BD"}/>
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
      <path d="M5.25 1.75C5.40471 1.75 5.55308 1.81146 5.66248 1.92085C5.77187 2.03025 5.83333 2.17862 5.83333 2.33333V11.6667C5.83333 11.8214 5.77187 11.9697 5.66248 12.0791C5.55308 12.1885 5.40471 12.25 5.25 12.25H4.08333C3.92862 12.25 3.78025 12.1885 3.67085 12.0791C3.56146 11.9697 3.5 11.8214 3.5 11.6667V2.33333C3.5 2.17862 3.56146 2.03025 3.67085 1.92085C3.78025 1.81146 3.92862 1.75 4.08333 1.75H5.25ZM9.91667 1.75C10.0714 1.75 10.2197 1.81146 10.3291 1.92085C10.4385 2.03025 10.5 2.17862 10.5 2.33333V11.6667C10.5 11.8214 10.4385 11.9697 10.3291 12.0791C10.2197 12.1885 10.0714 12.25 9.91667 12.25H8.75C8.59529 12.25 8.44692 12.1885 8.33752 12.0791C8.22812 11.9697 8.16667 11.8214 8.16667 11.6667V2.33333C8.16667 2.17862 8.22812 2.03025 8.33752 1.92085C8.44692 1.81146 8.59529 1.75 8.75 1.75H9.91667Z" fill="#ACB4BD"/>
    </svg>
  );
};

export default Pause;
