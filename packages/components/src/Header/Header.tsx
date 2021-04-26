import * as React from "react";
import styled from 'styled-components'


export type HeaderProps = {
    title?: string
}

export const Header = ({ title }: HeaderProps) => {
    const StyledHeader = styled.div`
    width: 100%;
    background: yellow;
    display: flex;
    justify-content: center;
    font-size: 20px;
    `
    return(
        <StyledHeader>{title}</StyledHeader>
    )
}