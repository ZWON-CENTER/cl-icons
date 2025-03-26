import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const PolygonUp = (props: IconProps) => {
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
          <Path d="M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z"    fill={props.fill || props.color || "#ACB4BD"}/>
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
      <path d="M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z" fill="#ACB4BD"/>
    </svg>
  );
};

export default PolygonUp;
