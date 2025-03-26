import * as React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Reply = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 6.66406L13.3333 9.9974L10 13.3307" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66699 2.66406V7.33073C2.66699 8.03797 2.94794 8.71625 3.44804 9.21635C3.94814 9.71644 4.62641 9.9974 5.33366 9.9974H13.3337" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Reply;