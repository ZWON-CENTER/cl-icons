import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const PolygonDown = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.62357 8.64965C6.81947 8.88473 7.18053 8.88473 7.37643 8.64965L9.83026 5.70506C10.0962 5.38591 9.86927 4.90137 9.45383 4.90137H4.54617C4.13073 4.90137 3.90378 5.38591 4.16974 5.70506L6.62357 8.64965Z" /></svg>;
export default PolygonDown;