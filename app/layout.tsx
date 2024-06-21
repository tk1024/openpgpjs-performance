import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, CssBaseline } from "@mui/material"
import { NoSsr } from '@mui/base';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Container>
          <NoSsr>
            {children}
          </NoSsr>
        </Container>
      </body>
    </html>
  );
}
