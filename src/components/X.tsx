import * as React from "react";
import type { SVGProps } from "react";
const X = (props: SVGProps<SVGSVGElement> & { color?: string }) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.5 3.5L3.5 10.5" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 3.5L10.5 10.5" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default X;