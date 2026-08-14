import type { Metadata } from "next";
import "material-symbols/outlined.css";
import "./globals.css";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "i . n spira",
  description: "Mehr als ein Archiv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />

        {children}
      </body>
    </html>
  );
}