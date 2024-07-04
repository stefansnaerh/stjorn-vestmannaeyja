"use client";

import React, { createContext, useState, ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface BackgroundContextProps {
  greyBackground: string;
  setGreyBackground: React.Dispatch<React.SetStateAction<string>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  showLockLinks: boolean;
  setShowLockLinks: React.Dispatch<React.SetStateAction<boolean>>;
  showLanguages: boolean;
  setShowLanguages: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BackGroundGreyContext = createContext<BackgroundContextProps>({
  greyBackground: "App",
  setGreyBackground: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  currentIndex: -1,
  setCurrentIndex: () => {},
  showNav: false,
  setShowNav: () => {},
  showLockLinks: false,
  setShowLockLinks: () => {},
  showLanguages: false,
  setShowLanguages: () => {},
  showMobileNav: false,
  setShowMobileNav: () => {},
});

interface HeaderContextProps {
  children: ReactNode;
}

const HeaderContext: React.FC<HeaderContextProps> = ({ children }) => {
  const [greyBackground, setGreyBackground] = useState<string>("App");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [showLockLinks, setShowLockLinks] = useState<boolean>(false);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  return (
    <BackGroundGreyContext.Provider
      value={{
        greyBackground,
        setGreyBackground,
        isSearchOpen,
        setIsSearchOpen,
        currentIndex,
        setCurrentIndex,
        showNav,
        setShowNav,
        showLockLinks,
        setShowLockLinks,
        showLanguages,
        setShowLanguages,
        showMobileNav,
        setShowMobileNav,
      }}
    >
      {children}
    </BackGroundGreyContext.Provider>
  );
};

export default HeaderContext;
