import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const PolygonUp = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.62357 5.00171C6.81947 4.76663 7.18053 4.76663 7.37643 5.00171L9.83026 7.94631C10.0962 8.26546 9.86927 8.75 9.45383 8.75H4.54617C4.13073 8.75 3.90378 8.26546 4.16974 7.94631L6.62357 5.00171Z" /></svg>;
export default PolygonUp;