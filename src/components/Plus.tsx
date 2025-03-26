import * as React from "react";
import type { SVGProps } from "react";
import { IconProps } from "../types";
const Plus = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.91669 7H11.0834" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 2.91675V11.0834" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Plus;