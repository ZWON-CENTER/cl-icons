import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Ellipsis = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.00001 7.58341C7.32218 7.58341 7.58335 7.32225 7.58335 7.00008C7.58335 6.67792 7.32218 6.41675 7.00001 6.41675C6.67785 6.41675 6.41668 6.67792 6.41668 7.00008C6.41668 7.32225 6.67785 7.58341 7.00001 7.58341Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.0833 7.58341C11.4055 7.58341 11.6667 7.32225 11.6667 7.00008C11.6667 6.67792 11.4055 6.41675 11.0833 6.41675C10.7612 6.41675 10.5 6.67792 10.5 7.00008C10.5 7.32225 10.7612 7.58341 11.0833 7.58341Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.91665 7.58341C3.23882 7.58341 3.49999 7.32225 3.49999 7.00008C3.49999 6.67792 3.23882 6.41675 2.91665 6.41675C2.59449 6.41675 2.33332 6.67792 2.33332 7.00008C2.33332 7.32225 2.59449 7.58341 2.91665 7.58341Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Ellipsis;