import * as React from "react";
import type { SVGProps } from "react";
const Clock = (props: SVGProps<SVGSVGElement> & { color?: string }) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2197_5982)"><path d="M7.00002 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00002 1.16663C3.77836 1.16663 1.16669 3.7783 1.16669 6.99996C1.16669 10.2216 3.77836 12.8333 7.00002 12.8333Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M7 3.5V7H9.625" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_2197_5982"><rect width={14} height={14} /></clipPath></defs></svg>;
export default Clock;