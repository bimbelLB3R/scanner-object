import { Inter } from "next/font/google";
import "./globals.css";
import "./typingtext.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sekolah Alam SATT",
  description: "Belajar-Berpetualang-Bermakna",
  icons: {
    icon: ["/logosatt.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
