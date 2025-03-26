import * as React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Filter = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.75 3.5H12.25" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.08594 7H9.91927" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.83594 10.5H8.16927" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Filter;