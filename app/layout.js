import { Inter } from "next/font/google";
import "./globals.css";
import "./typingtext.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sekolah Alam SATT",
  description: "Belajar-Berpetualang-Bermakna",
  openGraph: {
    images: [
      {
        url: "/image/gurusatt.jpeg",
        width: 500, // Sesuaikan dengan lebar gambar
        height: 500, // Sesuaikan dengan tinggi gambar
        alt: "satt", // Gantilah dengan deskripsi yang sesuai
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
