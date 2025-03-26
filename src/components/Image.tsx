import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Image = (props: IconProps) => {
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
          <Path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Image;
