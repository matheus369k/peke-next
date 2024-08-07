'use client'

import { defaultTheme } from "@/styles/Theme/default";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </ThemeProvider>
    )
}