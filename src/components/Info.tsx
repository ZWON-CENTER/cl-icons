import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Info = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2197_5934)"><path d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 9.33333V7" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 4.66663H7.00667" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_2197_5934"><rect width={14} height={14} fill="white" /></clipPath></defs></svg>;
export default Info;