import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de">

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}