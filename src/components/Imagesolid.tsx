import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const ImageSolid = (props: IconProps) => {
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
          <Path d="M11.0833 12.25C11.7277 12.25 12.25 11.7277 12.25 11.0833V9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25H11.0833Z"    fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M12.25 9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25M12.25 9.04167V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H3.5M12.25 9.04167V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H3.5"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M6.41667 5.25004C6.41667 5.89437 5.89433 6.41671 5.25 6.41671C4.60567 6.41671 4.08334 5.89437 4.08334 5.25004C4.08334 4.60571 4.60567 4.08337 5.25 4.08337C5.89433 4.08337 6.41667 4.60571 6.41667 5.25004Z"    fill={props.fill || props.color || "#ACB4BD"} stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M11.0833 12.25C11.7277 12.25 12.25 11.7277 12.25 11.0833V9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25H11.0833Z" fill="#ACB4BD"/>
<path d="M12.25 9.04167L10.4498 6.9498C10.2311 6.73108 9.93436 6.60822 9.625 6.60822C9.31564 6.60822 9.01895 6.73108 8.80017 6.9498L3.5 12.25M12.25 9.04167V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H3.5M12.25 9.04167V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H3.5" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.41667 5.25004C6.41667 5.89437 5.89433 6.41671 5.25 6.41671C4.60567 6.41671 4.08334 5.89437 4.08334 5.25004C4.08334 4.60571 4.60567 4.08337 5.25 4.08337C5.89433 4.08337 6.41667 4.60571 6.41667 5.25004Z" fill="#ACB4BD" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ImageSolid;
