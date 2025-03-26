import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Marker = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2416_38881)">
          <G  filter="url(#filter0_f_2416_38881)">
<ellipse cx="11" cy="25.5" rx="3.5" ry="1.5" fill={props.fill || props.color || "black"} fillOpacity="0.7"/>
          </G>
          <G  filter="url(#filter1_d_2416_38881)">
          <Path d="M20 11C20 15.971 11 26 11 26C11 26 2 15.971 2 11C2 6.029 6.029 2 11 2C15.971 2 20 6.029 20 11Z"    fill={props.fill || props.color || "#FF4B33"}/>
          <Path d="M19.5 11C19.5 12.1177 18.9855 13.5873 18.1492 15.2121C17.3212 16.8207 16.2118 18.518 15.0941 20.0722C13.9777 21.6245 12.8602 23.0241 12.0213 24.0362C11.6021 24.542 11.2529 24.9503 11.0089 25.2319C11.0059 25.2353 11.0029 25.2387 11 25.2421C10.9971 25.2387 10.9941 25.2353 10.9911 25.2319C10.7471 24.9503 10.3979 24.542 9.97869 24.0362C9.13977 23.0241 8.02231 21.6245 6.90593 20.0722C5.78824 18.518 4.6788 16.8207 3.85082 15.2121C3.01452 13.5873 2.5 12.1177 2.5 11C2.5 6.30514 6.30514 2.5 11 2.5C15.6949 2.5 19.5 6.30514 19.5 11Z"    stroke={props.stroke || props.color || "white"}/>
          </G>
          <Path d="M11 14.5C12.933 14.5 14.5 12.933 14.5 11C14.5 9.067 12.933 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.933 9.067 14.5 11 14.5Z"    fill={props.fill || props.color || "white"}/>
          </G>
<defs>
<filter id="filter0_f_2416_38881" x="5.5" y="22" width="11" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2416_38881"/>
</filter>
<filter id="filter1_d_2416_38881" x="-4" y="-4" width="30" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2416_38881"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2416_38881" result="shape"/>
</filter>
<clipPath id="clip0_2416_38881">
          <Rect  width="22" height="28" fill={props.fill || props.color || "white"}/>
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
      <g clipPath="url(#clip0_2416_38881)">
<g filter="url(#filter0_f_2416_38881)">
<ellipse cx="11" cy="25.5" rx="3.5" ry="1.5" fill="black" fillOpacity="0.7"/>
</g>
<g filter="url(#filter1_d_2416_38881)">
<path d="M20 11C20 15.971 11 26 11 26C11 26 2 15.971 2 11C2 6.029 6.029 2 11 2C15.971 2 20 6.029 20 11Z" fill="#FF4B33"/>
<path d="M19.5 11C19.5 12.1177 18.9855 13.5873 18.1492 15.2121C17.3212 16.8207 16.2118 18.518 15.0941 20.0722C13.9777 21.6245 12.8602 23.0241 12.0213 24.0362C11.6021 24.542 11.2529 24.9503 11.0089 25.2319C11.0059 25.2353 11.0029 25.2387 11 25.2421C10.9971 25.2387 10.9941 25.2353 10.9911 25.2319C10.7471 24.9503 10.3979 24.542 9.97869 24.0362C9.13977 23.0241 8.02231 21.6245 6.90593 20.0722C5.78824 18.518 4.6788 16.8207 3.85082 15.2121C3.01452 13.5873 2.5 12.1177 2.5 11C2.5 6.30514 6.30514 2.5 11 2.5C15.6949 2.5 19.5 6.30514 19.5 11Z" stroke="white"/>
</g>
<path d="M11 14.5C12.933 14.5 14.5 12.933 14.5 11C14.5 9.067 12.933 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.933 9.067 14.5 11 14.5Z" fill="white"/>
</g>
<defs>
<filter id="filter0_f_2416_38881" x="5.5" y="22" width="11" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2416_38881"/>
</filter>
<filter id="filter1_d_2416_38881" x="-4" y="-4" width="30" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2416_38881"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2416_38881" result="shape"/>
</filter>
<clipPath id="clip0_2416_38881">
<rect width="22" height="28" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Marker;
