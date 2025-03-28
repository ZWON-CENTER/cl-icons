import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const SquarePen = (props: IconProps) => {
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
          <Path d="M7 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21116 8.53943C7.07265 8.67782 6.90153 8.77913 6.71358 8.83401L5.03766 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71278 9.21328 4.68643 9.16705 4.67345 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46116 6.78943L10.7187 1.53126Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M7 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21116 8.53943C7.07265 8.67782 6.90153 8.77913 6.71358 8.83401L5.03766 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71278 9.21328 4.68643 9.16705 4.67345 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46116 6.78943L10.7187 1.53126Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SquarePen;
