import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const CircleHelpSolid = (props: IconProps) => {
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
          fill={props.fill || props.color || "#ACB4BD"}
          stroke="none"
          strokeWidth={props.strokeWidth || 1.16667}
          {...props}
        >
          <G  clipPath="url(#clip0_2197_5969)">
          <Path d="M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
          <Path d="M6.36221 4.82495C6.59975 4.68535 6.87902 4.63432 7.15058 4.6809C7.42213 4.72748 7.66844 4.86866 7.84587 5.07944C8.02331 5.29022 8.12042 5.55786 8.12001 5.83338C8.12001 6.10704 7.90703 6.39234 7.50477 6.66052C7.32139 6.78277 7.13385 6.87696 6.98987 6.94095C6.9187 6.97258 6.86021 6.99594 6.82087 7.01092C6.51563 7.11303 6.29813 7.46242 6.39994 7.76785C6.50182 8.07348 6.83218 8.23866 7.13781 8.13678C7.13781 8.13678 7.20797 8.11191 7.2362 8.10116C7.29257 8.07968 7.3708 8.04835 7.46369 8.00706C7.64783 7.92522 7.8978 7.80066 8.15192 7.63125C8.62456 7.31615 9.28641 6.72662 9.28668 5.83391C9.28742 5.283 9.0932 4.74958 8.7384 4.32811C8.38353 3.90655 7.89092 3.62418 7.34781 3.53103C6.8047 3.43787 6.24615 3.53993 5.77108 3.81913C5.29602 4.09833 4.93509 4.53666 4.75223 5.05647C4.64532 5.36038 4.80502 5.69342 5.10893 5.80033C5.41284 5.90724 5.74588 5.74753 5.85279 5.44362C5.94422 5.18372 6.12468 4.96455 6.36221 4.82495Z"    fill={props.fill || props.color || "white"}/>
          <Path d="M6.41668 9.91659C6.41668 9.59442 6.67785 9.33325 7.00001 9.33325C7.32218 9.33325 7.58918 9.59442 7.58918 9.91659C7.58918 10.2388 7.32218 10.4999 7.00001 10.4999C6.67785 10.4999 6.41668 10.2388 6.41668 9.91659Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "white"}/>
          </G>
<defs>
<clipPath id="clip0_2197_5969">
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.fill || props.color || "#ACB4BD"}>
        <g clipPath="url(#clip0_2197_5969)">
<path fillRule="evenodd" clipRule="evenodd" d="M0.583321 7.00004C0.583321 3.45621 3.45616 0.583374 6.99999 0.583374C10.5438 0.583374 13.4167 3.45621 13.4167 7.00004C13.4167 10.5439 10.5438 13.4167 6.99999 13.4167C3.45616 13.4167 0.583321 10.5439 0.583321 7.00004Z" fill="#ACB4BD"/>
<path d="M6.36221 4.82495C6.59975 4.68535 6.87902 4.63432 7.15058 4.6809C7.42213 4.72748 7.66844 4.86866 7.84587 5.07944C8.02331 5.29022 8.12042 5.55786 8.12001 5.83338C8.12001 6.10704 7.90703 6.39234 7.50477 6.66052C7.32139 6.78277 7.13385 6.87696 6.98987 6.94095C6.9187 6.97258 6.86021 6.99594 6.82087 7.01092C6.51563 7.11303 6.29813 7.46242 6.39994 7.76785C6.50182 8.07348 6.83218 8.23866 7.13781 8.13678C7.13781 8.13678 7.20797 8.11191 7.2362 8.10116C7.29257 8.07968 7.3708 8.04835 7.46369 8.00706C7.64783 7.92522 7.8978 7.80066 8.15192 7.63125C8.62456 7.31615 9.28641 6.72662 9.28668 5.83391C9.28742 5.283 9.0932 4.74958 8.7384 4.32811C8.38353 3.90655 7.89092 3.62418 7.34781 3.53103C6.8047 3.43787 6.24615 3.53993 5.77108 3.81913C5.29602 4.09833 4.93509 4.53666 4.75223 5.05647C4.64532 5.36038 4.80502 5.69342 5.10893 5.80033C5.41284 5.90724 5.74588 5.74753 5.85279 5.44362C5.94422 5.18372 6.12468 4.96455 6.36221 4.82495Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.41668 9.91659C6.41668 9.59442 6.67785 9.33325 7.00001 9.33325C7.32218 9.33325 7.58918 9.59442 7.58918 9.91659C7.58918 10.2388 7.32218 10.4999 7.00001 10.4999C6.67785 10.4999 6.41668 10.2388 6.41668 9.91659Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2197_5969">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
      </g>
    </svg>
  );
};

export default CircleHelpSolid;
