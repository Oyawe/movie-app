"use client";

import { ThemeProvider } from "next-themes";

import React from "react";

export const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen transition-colors duration-300 select-none text-neutral-800 dark:text-white dark:bg-neutral-800">
        {children}
      </div>
    </ThemeProvider>
  );
};
