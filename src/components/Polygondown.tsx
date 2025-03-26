import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const PolygonDown = (props: IconProps) => {
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
          <Path d="M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z"    fill={props.fill || props.color || "#ACB4BD"}/>
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
      <path d="M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z" fill="#ACB4BD"/>
    </svg>
  );
};

export default PolygonDown;
