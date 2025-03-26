import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Notification = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.0032 1.66406C8.45606 1.66406 6.97233 2.27864 5.87837 3.37261C4.7844 4.46657 4.16982 5.9503 4.16982 7.4974V10.4374C4.16994 10.5667 4.13999 10.6942 4.08232 10.8099L2.65149 13.6707C2.5816 13.8105 2.54859 13.9658 2.55561 14.1219C2.56264 14.278 2.60945 14.4298 2.69161 14.5627C2.77377 14.6956 2.88855 14.8053 3.02505 14.8814C3.16154 14.9575 3.31522 14.9974 3.47149 14.9974H16.5348C16.6911 14.9974 16.8448 14.9575 16.9813 14.8814C17.1178 14.8053 17.2325 14.6956 17.3147 14.5627C17.3969 14.4298 17.4437 14.278 17.4507 14.1219C17.4577 13.9658 17.4247 13.8105 17.3548 13.6707L15.9248 10.8099C15.8669 10.6943 15.8366 10.5667 15.8365 10.4374V7.4974C15.8365 5.9503 15.2219 4.46657 14.1279 3.37261C13.034 2.27864 11.5503 1.66406 10.0032 1.66406ZM10.0032 17.4974C9.48598 17.4975 8.98147 17.3373 8.55911 17.0389C8.13676 16.7404 7.81733 16.3183 7.64482 15.8307H12.3615C12.189 16.3183 11.8696 16.7404 11.4472 17.0389C11.0248 17.3373 10.5203 17.4975 10.0032 17.4974Z" /></svg>;
export default Notification;