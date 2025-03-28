import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const PencilLine = (props: IconProps) => {
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
          <Path d="M7 11.6666H12.25"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M9.55264 2.1128C9.78486 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.1592 11.0092 3.98765 11.1107 3.79922 11.1656L2.12389 11.6544C2.0737 11.669 2.02049 11.6699 1.96984 11.6569C1.91919 11.6439 1.87296 11.6176 1.83598 11.5806C1.79901 11.5437 1.77266 11.4974 1.75968 11.4468C1.74671 11.3961 1.74758 11.3429 1.76222 11.2927L2.25106 9.61738C2.30602 9.42916 2.40753 9.25783 2.54622 9.11922L9.55264 2.1128Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M8.75 2.91663L10.5 4.66663"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M7 11.6666H12.25" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.55264 2.1128C9.78486 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.1592 11.0092 3.98765 11.1107 3.79922 11.1656L2.12389 11.6544C2.0737 11.669 2.02049 11.6699 1.96984 11.6569C1.91919 11.6439 1.87296 11.6176 1.83598 11.5806C1.79901 11.5437 1.77266 11.4974 1.75968 11.4468C1.74671 11.3961 1.74758 11.3429 1.76222 11.2927L2.25106 9.61738C2.30602 9.42916 2.40753 9.25783 2.54622 9.11922L9.55264 2.1128Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75 2.91663L10.5 4.66663" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default PencilLine;
