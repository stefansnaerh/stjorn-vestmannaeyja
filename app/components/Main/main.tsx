"use client";
import { useContext } from "react";
import { BackGroundGreyContext } from "../ContextProvider/Provider";
export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { greyBackground, setGreyBackground } = useContext(
    BackGroundGreyContext
  );
  return (
    <main className={`${greyBackground} self-center pt-80 xs:pt-[90px] w-fill`}>
      {children}
    </main>
  );
}
