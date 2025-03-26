import * as React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Arrowright = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.04167 7L11.9583 7" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.45833 3.5L11.9583 7L8.45833 10.5" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Arrowright;