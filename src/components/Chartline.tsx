import * as React from "react";
import type { SVGProps } from "react";
const ChartLine = (props: SVGProps<SVGSVGElement>) => <svg width={props.width || 24} height={props.height || 24} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.75 1.75V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H12.25" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.0833 5.25L8.16665 8.16667L5.83331 5.83333L4.08331 7.58333" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default ChartLine;