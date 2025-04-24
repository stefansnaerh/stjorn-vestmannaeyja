import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";
import Script from "next/script";
import HeaderContext from "./components/ContextProvider/Provider";

// const eb_garamond = localFont({
//   src: [
//     {
//       path: "../public/fonts/eb-garamond-v27-latin-600.woff2",
//       weight: "600",
//     },
//   ],
//   variable: "--font-headline",
// });
const readexPro = localFont({
  src: [
    {
      path: "../public/fonts/poppins-v22-latin-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/poppins-v22-latin-600.woff2",
      weight: "600",
    },

    {
      path: "../public/fonts/poppins-v22-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/poppins-v22-latin-700.woff2",
      weight: "700",
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
    <html className={` ${readexPro.variable} `} lang="en">
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
        <meta property="og:title" content="Stjórnendafélag Vestfjarða" />
        <meta
          property="og:description"
          content="Stjórnendafélag Norðurlands vestra er stéttarfélag sem þjónustar stjórnendur og einyrkja á Norðurlandi vestra"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/stjornendafelag-vestfjarda/Zx-6K68jQArTz6LW_91FC7BB9-C2B4-4444-910C-D63C102C9269.jpeg?auto=format,compress"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"www.stjornendafelagid.is"} />
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
