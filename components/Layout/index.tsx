'use client'

import React from "react";
import { NavBar } from "../Navbar";
import { Footer } from "../Footer";
import { GlobalStyled } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/Theme/default'
import { StyledMain } from "./styles";

interface DefaultLayoutProps {
    children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <StyledMain>
                {children}
            </StyledMain>
            <Footer />
            <GlobalStyled />
        </ThemeProvider>
    )
}