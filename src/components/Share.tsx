import * as React from "react";
import type { SVGProps } from "react";
const Share = (props: SVGProps<SVGSVGElement>) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.25 7.58333V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H6.41667" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.25 1.75L7 7" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.75 1.75H12.25V5.25" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Share;