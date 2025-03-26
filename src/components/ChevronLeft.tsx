import * as React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";
const ChevronLeft = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.75 10.5L5.25 7L8.75 3.5" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default ChevronLeft;