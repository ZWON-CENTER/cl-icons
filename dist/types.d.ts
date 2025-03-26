import React from "react";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    opacity?: number;
    width?: number | string;
    height?: number | string;
}
export declare const isNative: boolean;
