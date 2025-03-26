import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  opacity?: number;
  width?: number | string;
  height?: number | string;
}

// 플랫폼 감지를 위한 타입 추가
export const isNative = typeof navigator !== 'undefined' &&
  navigator.product === 'ReactNative';
