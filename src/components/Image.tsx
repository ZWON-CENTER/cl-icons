import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Image = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.24998 6.41671C5.89431 6.41671 6.41665 5.89437 6.41665 5.25004C6.41665 4.60571 5.89431 4.08337 5.24998 4.08337C4.60565 4.08337 4.08331 4.60571 4.08331 5.25004C4.08331 5.89437 4.60565 6.41671 5.24998 6.41671Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.25 8.7499L10.4498 6.94974C10.2311 6.73102 9.93436 6.60815 9.625 6.60815C9.31564 6.60815 9.01895 6.73102 8.80017 6.94974L3.5 12.2499" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Image;