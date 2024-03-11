import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appscrip assignment",
  description: "Welcome to Appscrip Assignment, a revolutionary application developed as part of a compelling assignment with Appscrip.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
