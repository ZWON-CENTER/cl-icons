import * as React from "react";
import type { SVGProps } from "react";
const CircleX = (props: SVGProps<SVGSVGElement>) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2197_5948)"><path d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2216 12.8333 6.99996C12.8333 3.7783 10.2217 1.16663 7.00001 1.16663C3.77835 1.16663 1.16668 3.7783 1.16668 6.99996C1.16668 10.2216 3.77835 12.8333 7.00001 12.8333Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.75 5.25L5.25 8.75" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 5.25L8.75 8.75" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_2197_5948"><rect /></clipPath></defs></svg>;
export default CircleX;