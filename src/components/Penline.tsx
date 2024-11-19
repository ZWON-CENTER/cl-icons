import * as React from "react";
import type { SVGProps } from "react";
const PenLine = (props: SVGProps<SVGSVGElement>) => <svg width={props.width} height={props.height} stroke={props.color || "#ACB4BD"} fill="none"  viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 11.6666H12.25" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.55263 2.1128C9.78485 1.88058 10.0998 1.75012 10.4282 1.75012C10.7566 1.75012 11.0716 1.88058 11.3038 2.1128C11.536 2.34502 11.6665 2.65998 11.6665 2.98838C11.6665 3.31679 11.536 3.63175 11.3038 3.86397L4.29797 10.8704C4.15919 11.0092 3.98765 11.1107 3.79922 11.1656L2.12388 11.6544C2.07369 11.669 2.02048 11.6699 1.96983 11.6569C1.91918 11.6439 1.87295 11.6176 1.83598 11.5806C1.799 11.5437 1.77265 11.4974 1.75967 11.4468C1.7467 11.3961 1.74758 11.3429 1.76222 11.2927L2.25105 9.61738C2.30601 9.42916 2.40753 9.25783 2.54622 9.11922L9.55263 2.1128Z" strokeWidth={1.16667} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export default PenLine;