import { M_PLUS_1 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./Providers";
import { Navbar } from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { Suspense } from "react";
// import { Suspense } from "react";

const m_plus_1 = M_PLUS_1({
  subsets: ["latin"], weight: ['300', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "IMDb Clone",
  description: "This is a movie app clone",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={m_plus_1.className}>
        <Suspense>
          <Providers>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>

  );
}
