import * as React from "react";
import type { SVGProps } from "react";
const ChevronUp = (props: SVGProps<SVGSVGElement>) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.5 8.75L7 5.25L3.5 8.75" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default ChevronUp;