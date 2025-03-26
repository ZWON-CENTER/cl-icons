import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Message = (props: IconProps) => {
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
          <Path d="M15.8346 2.5C16.4977 2.5 17.1336 2.76339 17.6024 3.23223C18.0712 3.70107 18.3346 4.33696 18.3346 5V13.3333C18.3346 13.9964 18.0712 14.6323 17.6024 15.1011C17.1336 15.5699 16.4977 15.8333 15.8346 15.8333H6.11214L3.33464 17.9167C2.64797 18.4317 1.66797 17.9417 1.66797 17.0833V5C1.66797 4.33696 1.93136 3.70107 2.4002 3.23223C2.86904 2.76339 3.50493 2.5 4.16797 2.5H15.8346ZM9.16797 10H6.66797C6.44695 10 6.23499 10.0878 6.07871 10.2441C5.92243 10.4004 5.83464 10.6123 5.83464 10.8333C5.83464 11.0543 5.92243 11.2663 6.07871 11.4226C6.23499 11.5789 6.44695 11.6667 6.66797 11.6667H9.16797C9.38898 11.6667 9.60094 11.5789 9.75722 11.4226C9.9135 11.2663 10.0013 11.0543 10.0013 10.8333C10.0013 10.6123 9.9135 10.4004 9.75722 10.2441C9.60094 10.0878 9.38898 10 9.16797 10ZM13.3346 6.66667H6.66797C6.45557 6.6669 6.25128 6.74823 6.09683 6.89404C5.94238 7.03985 5.84944 7.23913 5.83699 7.45116C5.82454 7.6632 5.89353 7.87198 6.02986 8.03486C6.16618 8.19774 6.35956 8.30241 6.57047 8.3275L6.66797 8.33333H13.3346C13.547 8.3331 13.7513 8.25177 13.9058 8.10596C14.0602 7.96015 14.1532 7.76087 14.1656 7.54884C14.1781 7.3368 14.1091 7.12802 13.9727 6.96514C13.8364 6.80226 13.643 6.69759 13.4321 6.6725L13.3346 6.66667Z"  fillRule="evenodd" clipRule="evenodd"   fill={props.fill || props.color || "#ACB4BD"}/>
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
        <path fillRule="evenodd" clipRule="evenodd" d="M15.8346 2.5C16.4977 2.5 17.1336 2.76339 17.6024 3.23223C18.0712 3.70107 18.3346 4.33696 18.3346 5V13.3333C18.3346 13.9964 18.0712 14.6323 17.6024 15.1011C17.1336 15.5699 16.4977 15.8333 15.8346 15.8333H6.11214L3.33464 17.9167C2.64797 18.4317 1.66797 17.9417 1.66797 17.0833V5C1.66797 4.33696 1.93136 3.70107 2.4002 3.23223C2.86904 2.76339 3.50493 2.5 4.16797 2.5H15.8346ZM9.16797 10H6.66797C6.44695 10 6.23499 10.0878 6.07871 10.2441C5.92243 10.4004 5.83464 10.6123 5.83464 10.8333C5.83464 11.0543 5.92243 11.2663 6.07871 11.4226C6.23499 11.5789 6.44695 11.6667 6.66797 11.6667H9.16797C9.38898 11.6667 9.60094 11.5789 9.75722 11.4226C9.9135 11.2663 10.0013 11.0543 10.0013 10.8333C10.0013 10.6123 9.9135 10.4004 9.75722 10.2441C9.60094 10.0878 9.38898 10 9.16797 10ZM13.3346 6.66667H6.66797C6.45557 6.6669 6.25128 6.74823 6.09683 6.89404C5.94238 7.03985 5.84944 7.23913 5.83699 7.45116C5.82454 7.6632 5.89353 7.87198 6.02986 8.03486C6.16618 8.19774 6.35956 8.30241 6.57047 8.3275L6.66797 8.33333H13.3346C13.547 8.3331 13.7513 8.25177 13.9058 8.10596C14.0602 7.96015 14.1532 7.76087 14.1656 7.54884C14.1781 7.3368 14.1091 7.12802 13.9727 6.96514C13.8364 6.80226 13.643 6.69759 13.4321 6.6725L13.3346 6.66667Z" fill="#ACB4BD"/>
      </g>
    </svg>
  );
};

export default Message;
