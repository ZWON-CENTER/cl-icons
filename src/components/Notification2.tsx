import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Notification2 = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5631 3.33625C14.5631 4.24791 13.8241 4.98695 12.9124 4.98695C12.0008 4.98695 11.2617 4.24791 11.2617 3.33625C11.2617 2.42459 12.0008 1.68555 12.9124 1.68555C13.8241 1.68555 14.5631 2.42459 14.5631 3.33625Z" /><path d="M13.7341 5.52708C13.5365 5.5778 13.3293 5.60497 13.1159 5.60497C11.75 5.60497 10.6428 4.49766 10.6428 3.13193C10.6428 2.9185 10.6699 2.71141 10.7207 2.51367H5.0785C3.71263 2.51367 2.60547 3.62098 2.60547 4.98671V11.1693C2.60547 12.535 3.71263 13.6423 5.0785 13.6423H11.2611C12.627 13.6423 13.7341 12.535 13.7341 11.1693V5.52708Z" /></svg>;
export default Notification2;