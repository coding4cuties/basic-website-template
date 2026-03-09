import type { Metadata } from "next";
import "./globals.css";
import pageData from "./ui/siteData";

export const metadata: Metadata = {
  title: pageData.websiteTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
