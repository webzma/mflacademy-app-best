import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: "MFLAcademy - Portal de pagos",
  description:
    "App para llevar el control de pagos de los alumnos de la academia MFLAcademy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex items-center justify-center min-h-screen bg-[#ebf5fb]">
          {children}
        </div>
      </body>
    </html>
  );
}
