import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const EllipsisVertical = (props: IconProps) => {
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
          <Path d="M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7.00001 3.49992C7.32218 3.49992 7.58335 3.23875 7.58335 2.91659C7.58335 2.59442 7.32218 2.33325 7.00001 2.33325C6.67785 2.33325 6.41668 2.59442 6.41668 2.91659C6.41668 3.23875 6.67785 3.49992 7.00001 3.49992Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M7.00001 11.6667C7.32218 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41668 10.7612 6.41668 11.0833C6.41668 11.4055 6.67785 11.6667 7.00001 11.6667Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00001 3.49992C7.32218 3.49992 7.58335 3.23875 7.58335 2.91659C7.58335 2.59442 7.32218 2.33325 7.00001 2.33325C6.67785 2.33325 6.41668 2.59442 6.41668 2.91659C6.41668 3.23875 6.67785 3.49992 7.00001 3.49992Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00001 11.6667C7.32218 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41668 10.7612 6.41668 11.0833C6.41668 11.4055 6.67785 11.6667 7.00001 11.6667Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default EllipsisVertical;
