import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";
import Script from "next/script";
import HeaderContext from "./components/ContextProvider/Provider";

const eb_garamond = localFont({
  src: [
    {
      path: "../public/fonts/eb-garamond-v27-latin-600.woff2",
      weight: "600",
    },
  ],
  variable: "--font-headline",
});
const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-v15-latin-600.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/manrope-v15-latin-500.woff2",
      weight: "500",
    },

    {
      path: "../public/fonts/manrope-v15-latin-regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${eb_garamond.variable} ${manrope.variable} `} lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/DGKz38y/DEF2-EA73-1-BBF-4-FBA-BAEF-BCF3-C5298-EB1.jpg"
        />
      </head>
      <body className={` flex flex-col justify-center`}>
        <HeaderContext>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </HeaderContext>
      </body>
    </html>
  );
}
