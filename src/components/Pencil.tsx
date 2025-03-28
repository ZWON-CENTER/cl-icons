import React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";

// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const Pencil = (props: IconProps) => {
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
          <G  clipPath="url(#clip0_2197_5880)">
          <Path d="M12.3515 3.97373C12.6599 3.66539 12.8332 3.24717 12.8333 2.81106C12.8333 2.37495 12.6601 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1891 1.1665C10.753 1.16645 10.3348 1.33964 10.0264 1.64798L2.24119 9.43489C2.10575 9.56993 2.00559 9.7362 1.94952 9.91906L1.17894 12.4577C1.16386 12.5082 1.16272 12.5618 1.17564 12.6128C1.18856 12.6638 1.21506 12.7104 1.25232 12.7476C1.28958 12.7848 1.33622 12.8113 1.38728 12.8241C1.43834 12.8369 1.49193 12.8357 1.54235 12.8206L4.0816 12.0506C4.26429 11.995 4.43054 11.8954 4.56577 11.7606L12.3515 3.97373Z"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          <Path d="M8.75 2.91663L11.0833 5.24996"    stroke={props.stroke || props.color || "#ACB4BD"} strokeWidth={props.strokeWidth || 1.16667} strokeLinecap="round" strokeLinejoin="round"/>
          </G>
<defs>
<clipPath id="clip0_2197_5880">
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
      <g clipPath="url(#clip0_2197_5880)">
<path d="M12.3515 3.97373C12.6599 3.66539 12.8332 3.24717 12.8333 2.81106C12.8333 2.37495 12.6601 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1891 1.1665C10.753 1.16645 10.3348 1.33964 10.0264 1.64798L2.24119 9.43489C2.10575 9.56993 2.00559 9.7362 1.94952 9.91906L1.17894 12.4577C1.16386 12.5082 1.16272 12.5618 1.17564 12.6128C1.18856 12.6638 1.21506 12.7104 1.25232 12.7476C1.28958 12.7848 1.33622 12.8113 1.38728 12.8241C1.43834 12.8369 1.49193 12.8357 1.54235 12.8206L4.0816 12.0506C4.26429 11.995 4.43054 11.8954 4.56577 11.7606L12.3515 3.97373Z" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75 2.91663L11.0833 5.24996" stroke="#ACB4BD" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2197_5880">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Pencil;
