"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ 
  children, 
  attribute = "class", 
  defaultTheme = "dark", 
  enableSystem = false, 
  disableTransitionOnChange = false 
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  return (
    <NextThemesProvider 
      attribute={attribute as "class" | "data-theme"}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      forcedTheme="dark"
    >
      {children}
    </NextThemesProvider>
  )
}
