import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Siren = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_5437_22312)">
          <Path d="M4.08203 10.4997V6.99967C4.08203 6.22613 4.38932 5.48426 4.9363 4.93728C5.48328 4.3903 6.22515 4.08301 6.9987 4.08301C7.77225 4.08301 8.51411 4.3903 9.06109 4.93728C9.60807 5.48426 9.91536 6.22613 9.91536 6.99967V10.4997"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M2.91797 12.25C2.91797 12.4047 2.97943 12.5531 3.08882 12.6625C3.19822 12.7719 3.34659 12.8333 3.5013 12.8333H10.5013C10.656 12.8333 10.8044 12.7719 10.9138 12.6625C11.0232 12.5531 11.0846 12.4047 11.0846 12.25V11.6667C11.0846 11.3572 10.9617 11.0605 10.7429 10.8417C10.5241 10.6229 10.2274 10.5 9.91797 10.5H4.08464C3.77522 10.5 3.47847 10.6229 3.25968 10.8417C3.04089 11.0605 2.91797 11.3572 2.91797 11.6667V12.25Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M12.25 7H12.8333"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M10.7917 2.625L10.5 2.91667"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M1.16797 7H1.7513"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 1.16699V1.75033"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M2.875 2.875L3.28742 3.28742"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7 7V10.5"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          </G>
<defs>
<clipPath id="clip0_5437_22312">
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
      viewBox="0 0 14 14"
      stroke={props.stroke || props.color || "#ACB4BD"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5437_22312)">
<path d="M4.08203 10.4997V6.99967C4.08203 6.22613 4.38932 5.48426 4.9363 4.93728C5.48328 4.3903 6.22515 4.08301 6.9987 4.08301C7.77225 4.08301 8.51411 4.3903 9.06109 4.93728C9.60807 5.48426 9.91536 6.22613 9.91536 6.99967V10.4997" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.91797 12.25C2.91797 12.4047 2.97943 12.5531 3.08882 12.6625C3.19822 12.7719 3.34659 12.8333 3.5013 12.8333H10.5013C10.656 12.8333 10.8044 12.7719 10.9138 12.6625C11.0232 12.5531 11.0846 12.4047 11.0846 12.25V11.6667C11.0846 11.3572 10.9617 11.0605 10.7429 10.8417C10.5241 10.6229 10.2274 10.5 9.91797 10.5H4.08464C3.77522 10.5 3.47847 10.6229 3.25968 10.8417C3.04089 11.0605 2.91797 11.3572 2.91797 11.6667V12.25Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.25 7H12.8333" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7917 2.625L10.5 2.91667" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.16797 7H1.7513" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 1.16699V1.75033" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.875 2.875L3.28742 3.28742" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7V10.5" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5437_22312">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Siren;
