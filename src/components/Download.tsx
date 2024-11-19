import * as React from "react";
import type { SVGProps } from "react";
const Download = (props: SVGProps<SVGSVGElement> & { color?: string }) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.08332 5.83337L6.99999 8.75004L9.91665 5.83337" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 8.75V1.75" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default Download;