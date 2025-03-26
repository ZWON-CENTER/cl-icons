import * as React from "react";
// React Native 지원 추가
// TypeScript Workaround: 필요한 경우 react-native-svg를 다이나믹하게 가져옴
// RN 환경에서는 IconProps를 통해 전달된 사이즈, 색상 등이 올바르게 적용됨
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Chat = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.625 7.99877C2.62527 6.82035 3.0128 5.67468 3.72794 4.73808C4.44309 3.80147 5.44621 3.12584 6.58293 2.81516C7.71966 2.50449 8.92698 2.57598 10.0191 3.01865C11.1112 3.46131 12.0276 4.25062 12.6272 5.26508C13.2268 6.27955 13.4764 7.46295 13.3376 8.63316C13.1988 9.80337 12.6792 10.8955 11.8589 11.7416C11.0386 12.5876 9.96302 13.1406 8.79765 13.3155C7.63228 13.4904 6.44174 13.2774 5.40925 12.7094L3.31945 13.3458C3.22624 13.3742 3.12706 13.3767 3.03253 13.3531C2.93799 13.3295 2.85166 13.2806 2.78275 13.2117C2.71385 13.1428 2.66498 13.0565 2.64136 12.9619C2.61774 12.8674 2.62026 12.7682 2.64865 12.675L3.28505 10.582C2.85157 9.79002 2.62457 8.90161 2.625 7.99877ZM5.85 7.46127C5.85 7.60382 5.90663 7.74054 6.00743 7.84134C6.10823 7.94214 6.24494 7.99877 6.3875 7.99877H9.6125C9.75505 7.99877 9.89177 7.94214 9.99257 7.84134C10.0934 7.74054 10.15 7.60382 10.15 7.46127C10.15 7.31871 10.0934 7.182 9.99257 7.0812C9.89177 6.9804 9.75505 6.92377 9.6125 6.92377H6.3875C6.24494 6.92377 6.10823 6.9804 6.00743 7.0812C5.90663 7.182 5.85 7.31871 5.85 7.46127ZM6.3875 9.07377C6.24494 9.07377 6.10823 9.1304 6.00743 9.2312C5.90663 9.332 5.85 9.46871 5.85 9.61127C5.85 9.75382 5.90663 9.89054 6.00743 9.99134C6.10823 10.0921 6.24494 10.1488 6.3875 10.1488H8.5375C8.68005 10.1488 8.81677 10.0921 8.91757 9.99134C9.01837 9.89054 9.075 9.75382 9.075 9.61127C9.075 9.46871 9.01837 9.332 8.91757 9.2312C8.81677 9.1304 8.68005 9.07377 8.5375 9.07377H6.3875Z" /></svg>;
export default Chat;