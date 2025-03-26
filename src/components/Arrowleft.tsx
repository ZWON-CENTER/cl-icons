import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Arrowleft = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.54167 10.5L2.04167 7L5.54167 3.5" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9583 7H2.04167" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Arrowleft;