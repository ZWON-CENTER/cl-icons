import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const CornerDownRight = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.75 5.83337L11.6667 8.75004L8.75 11.6667" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.33332 2.33337V6.41671C2.33332 7.03555 2.57915 7.62904 3.01674 8.06662C3.45432 8.50421 4.04781 8.75004 4.66665 8.75004H11.6667" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default CornerDownRight;