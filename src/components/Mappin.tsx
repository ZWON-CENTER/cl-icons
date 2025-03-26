import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const MapPin = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.6666 5.83341C11.6666 8.746 8.43556 11.7793 7.35056 12.7162C7.24949 12.7922 7.12645 12.8333 6.99998 12.8333C6.87351 12.8333 6.75047 12.7922 6.6494 12.7162C5.5644 11.7793 2.33331 8.746 2.33331 5.83341C2.33331 4.59574 2.82498 3.40875 3.70015 2.53358C4.57532 1.65841 5.7623 1.16675 6.99998 1.16675C8.23766 1.16675 9.42464 1.65841 10.2998 2.53358C11.175 3.40875 11.6666 4.59574 11.6666 5.83341Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7.58325C7.9665 7.58325 8.75 6.79975 8.75 5.83325C8.75 4.86675 7.9665 4.08325 7 4.08325C6.0335 4.08325 5.25 4.86675 5.25 5.83325C5.25 6.79975 6.0335 7.58325 7 7.58325Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default MapPin;