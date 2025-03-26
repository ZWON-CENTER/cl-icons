import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Paperclip = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2197_5839)">
          <Path d="M12.5067 6.44576L7.14582 11.8066C6.48908 12.4633 5.59834 12.8323 4.66957 12.8323C3.74079 12.8323 2.85006 12.4633 2.19332 11.8066C1.53658 11.1499 1.16762 10.2591 1.16762 9.33034C1.16762 8.40157 1.53658 7.51084 2.19332 6.85409L7.19248 1.85493C7.63031 1.41633 8.22444 1.16962 8.84417 1.16907C9.4639 1.16852 10.0585 1.41418 10.4971 1.85201C10.9357 2.28984 11.1824 2.88397 11.1829 3.5037C11.1835 4.12343 10.9378 4.71799 10.5 5.15659L5.48915 10.1558C5.27024 10.3747 4.97333 10.4977 4.66373 10.4977C4.35414 10.4977 4.05723 10.3747 3.83832 10.1558C3.6194 9.93685 3.49642 9.63994 3.49642 9.33034C3.49642 9.02075 3.6194 8.72384 3.83832 8.50493L8.79082 3.55826"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          </G>
<defs>
<clipPath id="clip0_2197_5839">
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
      <g clipPath="url(#clip0_2197_5839)">
<path d="M12.5067 6.44576L7.14582 11.8066C6.48908 12.4633 5.59834 12.8323 4.66957 12.8323C3.74079 12.8323 2.85006 12.4633 2.19332 11.8066C1.53658 11.1499 1.16762 10.2591 1.16762 9.33034C1.16762 8.40157 1.53658 7.51084 2.19332 6.85409L7.19248 1.85493C7.63031 1.41633 8.22444 1.16962 8.84417 1.16907C9.4639 1.16852 10.0585 1.41418 10.4971 1.85201C10.9357 2.28984 11.1824 2.88397 11.1829 3.5037C11.1835 4.12343 10.9378 4.71799 10.5 5.15659L5.48915 10.1558C5.27024 10.3747 4.97333 10.4977 4.66373 10.4977C4.35414 10.4977 4.05723 10.3747 3.83832 10.1558C3.6194 9.93685 3.49642 9.63994 3.49642 9.33034C3.49642 9.02075 3.6194 8.72384 3.83832 8.50493L8.79082 3.55826" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2197_5839">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Paperclip;
