import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const CircleHelp = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2197_5965)"><path d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.30251 5.25009C5.43965 4.86023 5.71035 4.53148 6.06665 4.32208C6.42295 4.11268 6.84186 4.03614 7.2492 4.106C7.65653 4.17587 8.02599 4.38764 8.29214 4.70381C8.55829 5.01998 8.70396 5.42014 8.70334 5.83342C8.70334 7.00009 6.95334 7.58342 6.95334 7.58342" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 9.91675H7.00667" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_2197_5965"><rect width={14} height={14} fill="white" /></clipPath></defs></svg>;
export default CircleHelp;