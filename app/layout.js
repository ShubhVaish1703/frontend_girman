import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '900', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Girman technologies Assignment",
  description: "Girman technologies Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
