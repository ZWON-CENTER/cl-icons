import * as React from "react";
import type { SVGProps } from "react";
<<<<<<< HEAD
import { IconProps } from "../types";
const Search = (props: IconProps) => <svg width={props.width || props.size || 24} height={props.height || props.size || 24} stroke={props.stroke || props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0005 13.9995L11.1338 11.1328" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /></svg>;
=======
const Search = (props: SVGProps<SVGSVGElement>) => <svg width={props.width || 24} height={props.height || 24} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0005 13.9995L11.1338 11.1328" strokeWidth={1.33333} strokeLinecap="round" strokeLinejoin="round" /></svg>;
>>>>>>> 22988c52b3abdb6bff9a833ded2c3d7ce3ede85f
export default Search;