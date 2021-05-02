import * as React from "react";
import styled, { css, ThemeProvider } from 'styled-components';

const defaultTheme = {
    mainBackground: "palevioletred",
    mainFontColor: "#343",
};

const darkTheme = {
    mainBackground: "#333",
    mainFontColor: "palevioletred",
}


export type HeaderProps = {
    title?: string,
    dark?: boolean,
    fontSize?: string
}

export const Header = ({ title, dark = false, fontSize = '14px' }: HeaderProps) => {

    const StyledHeader = styled.div<{ fontSize: string }>`
    width: 100%;
    padding: 20px 0;
    background-color: ${props => props.theme.mainBackground};
    color: ${props => props.theme.mainFontColor};
    transition: 0.2s background-color ease-in-out;
    display: flex;
    justify-content: center;
    font-size: ${props => props.fontSize};
    `;

    return (
        <ThemeProvider theme={dark ? darkTheme : defaultTheme}>
            <StyledHeader fontSize={fontSize}> {title}</StyledHeader>
        </ThemeProvider>
    )
}