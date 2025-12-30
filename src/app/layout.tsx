"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./18n";
import { ThemeProvider } from "next-themes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-DM-Sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
