import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Folder = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.6667 11.6667C11.9761 11.6667 12.2728 11.5438 12.4916 11.325C12.7104 11.1062 12.8333 10.8094 12.8333 10.5V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5H7.05833C6.86322 3.50191 6.67074 3.45486 6.49851 3.36314C6.32628 3.27142 6.17981 3.13797 6.0725 2.975L5.6 2.275C5.49377 2.11369 5.34915 1.98128 5.17912 1.88965C5.0091 1.79802 4.81898 1.75003 4.62583 1.75H2.33333C2.02391 1.75 1.72717 1.87292 1.50838 2.09171C1.28958 2.3105 1.16667 2.60725 1.16667 2.91667V10.5C1.16667 10.8094 1.28958 11.1062 1.50838 11.325C1.72717 11.5438 2.02391 11.6667 2.33333 11.6667H11.6667Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M1.16667 5.83337H12.8333" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Folder;