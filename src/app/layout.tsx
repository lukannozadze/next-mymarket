import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import GeneralStateProvider from "@/context/GeneralStateProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GeneralStateProvider>
          {children}
          <Toaster />
        </GeneralStateProvider>
      </body>
    </html>
  );
}
