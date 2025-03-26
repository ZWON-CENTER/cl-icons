import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Search = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0005 13.9995L11.1338 11.1328" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Search;