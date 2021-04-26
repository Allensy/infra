import * as React from "react";

type HeaderProps = {
    text: string
}

export const Header = ({ text }: HeaderProps) => <div style={{color: "red"}}>{text}</div>