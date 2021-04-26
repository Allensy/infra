import * as React from "react";

export type BoxProps = {
    text: string
}

export const Box = ({ text }: BoxProps) => <div style={{ background: "red" }}>{text}</div>