import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Copy = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2197_5836)"><path d="M11.6667 4.66663H5.83335C5.18901 4.66663 4.66668 5.18896 4.66668 5.83329V11.6666C4.66668 12.311 5.18901 12.8333 5.83335 12.8333H11.6667C12.311 12.8333 12.8333 12.311 12.8333 11.6666V5.83329C12.8333 5.18896 12.311 4.66663 11.6667 4.66663Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.33335 9.33329C1.69168 9.33329 1.16668 8.80829 1.16668 8.16663V2.33329C1.16668 1.69163 1.69168 1.16663 2.33335 1.16663H8.16668C8.80835 1.16663 9.33335 1.69163 9.33335 2.33329" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_2197_5836"><rect width={14} height={14} fill="white" /></clipPath></defs></svg>;
export default Copy;