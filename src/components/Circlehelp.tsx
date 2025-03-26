import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const CircleHelp = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2197_5965)">
          <Path d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 9.91675H7.00667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          </G>
<defs>
<clipPath id="clip0_2197_5965">
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
      stroke={props.stroke || props.color || "#ACB4BD"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2197_5965)">
<path d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.91675H7.00667" stroke="#ACB4BD" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2197_5965">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default CircleHelp;
