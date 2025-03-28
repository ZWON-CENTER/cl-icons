import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Home = (props: IconProps) => {
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
          <Path d="M8.71643 2.78182C8.51977 2.60038 8.26473 2.5 8.00036 2.5C7.73598 2.5 7.48094 2.60038 7.28429 2.78182L3.35571 6.40687C3.24389 6.50996 3.15443 6.63605 3.09314 6.77695C3.03186 6.91786 3.00012 7.07043 3 7.22475V12.3997C3 12.6915 3.11288 12.9714 3.31381 13.1777C3.51475 13.3841 3.78727 13.5 4.07143 13.5H5.5C5.78416 13.5 6.05668 13.3841 6.25761 13.1777C6.45855 12.9714 6.57143 12.6915 6.57143 12.3997V9.46565C6.57143 9.36838 6.60906 9.27509 6.67603 9.20631C6.74301 9.13753 6.83385 9.09889 6.92857 9.09889H9.07143C9.16615 9.09889 9.25699 9.13753 9.32397 9.20631C9.39094 9.27509 9.42857 9.36838 9.42857 9.46565V12.3997C9.42857 12.6915 9.54145 12.9714 9.74239 13.1777C9.94332 13.3841 10.2158 13.5 10.5 13.5H11.9286C12.2127 13.5 12.4853 13.3841 12.6862 13.1777C12.8871 12.9714 13 12.6915 13 12.3997V7.22475C13 7.07048 12.9683 6.91795 12.9072 6.77705C12.846 6.63614 12.7567 6.51003 12.645 6.40687L8.71643 2.78182Z"    fill={props.fill || props.color || "white"}/>
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
      <path d="M8.71643 2.78182C8.51977 2.60038 8.26473 2.5 8.00036 2.5C7.73598 2.5 7.48094 2.60038 7.28429 2.78182L3.35571 6.40687C3.24389 6.50996 3.15443 6.63605 3.09314 6.77695C3.03186 6.91786 3.00012 7.07043 3 7.22475V12.3997C3 12.6915 3.11288 12.9714 3.31381 13.1777C3.51475 13.3841 3.78727 13.5 4.07143 13.5H5.5C5.78416 13.5 6.05668 13.3841 6.25761 13.1777C6.45855 12.9714 6.57143 12.6915 6.57143 12.3997V9.46565C6.57143 9.36838 6.60906 9.27509 6.67603 9.20631C6.74301 9.13753 6.83385 9.09889 6.92857 9.09889H9.07143C9.16615 9.09889 9.25699 9.13753 9.32397 9.20631C9.39094 9.27509 9.42857 9.36838 9.42857 9.46565V12.3997C9.42857 12.6915 9.54145 12.9714 9.74239 13.1777C9.94332 13.3841 10.2158 13.5 10.5 13.5H11.9286C12.2127 13.5 12.4853 13.3841 12.6862 13.1777C12.8871 12.9714 13 12.6915 13 12.3997V7.22475C13 7.07048 12.9683 6.91795 12.9072 6.77705C12.846 6.63614 12.7567 6.51003 12.645 6.40687L8.71643 2.78182Z" fill="white"/>
    </svg>
  );
};

export default Home;
