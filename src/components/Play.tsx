import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Play = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24}  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.30691 2.77663C3.32255 2.64412 3.36891 2.5171 3.44231 2.40567C3.51571 2.29425 3.61411 2.2015 3.72968 2.13482C3.84525 2.06814 3.9748 2.02937 4.108 2.0216C4.2412 2.01382 4.37437 2.03726 4.49691 2.09004C5.11641 2.35488 6.50475 2.98429 8.26641 4.00104C10.0287 5.01838 11.2682 5.90679 11.8067 6.30988C12.2663 6.65463 12.2675 7.33829 11.8072 7.68421C11.2741 8.08496 10.0497 8.96171 8.26641 9.99188C6.48141 11.022 5.10941 11.6439 4.49575 11.9052C3.96725 12.131 3.37575 11.7885 3.30691 11.2186C3.22641 10.5525 3.07591 9.03988 3.07591 6.99704C3.07591 4.95538 3.22583 3.44338 3.30691 2.77663Z" /></svg>;
export default Play;