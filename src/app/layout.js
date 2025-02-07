import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hotel Sarfaranga Skardu",
  description: "Hotel Sarfaranga Skardu is a cozy and comfortable retreat nestled in the scenic beauty of Skardu, offering stunning views of the surrounding mountains. With warm hospitality, modern amenities, and a peaceful atmosphere, it’s the perfect place for travelers looking to explore the natural wonders of the region while enjoying a relaxing stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
<head>
        {/* Link to the favicon */}
        <link rel="icon" href="favicon.png" />
        <meta name="description" content="Your description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
