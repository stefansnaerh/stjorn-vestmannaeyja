import { useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  name: string;
  title: string;
}

// The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  console.log(currentLanguage);
  // When the component has initialized, we must activate the translation engine the following way.
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (lang: string) => () => {
    // We just need to set the related cookie and reload the page
    const cookiesBeforeDestroy = parseCookies();
    // console.log("Cookies before destroy: ", cookiesBeforeDestroy);
    // "/auto/" prefix is Google's definition as far as a cookie name
    destroyCookie(null, COOKIE_NAME, "/auto/" + lang);

    const cookiesAfterDestroy = parseCookies();
    // console.log("Cookies after destroy:", cookiesAfterDestroy);
    setCookie(null, COOKIE_NAME, "/auto/" + lang, {
      path: "/",
      domain: ".stjornvest.is",
    });
    const cookiesAfterSet = parseCookies();
    // console.log("Cookies after set:", cookiesAfterSet);
    window.location.reload();
  };

  return (
    <div className="text-center notranslate flex flex-col gap-fluid-24">
      {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
        <div key={`l_s_${ld}+${i}`}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld) ? (
            <span className=" text-buttonBlue">{ld.title}</span>
          ) : (
            <button
              className="flex gap-fluid-16 text-backgroundBlue group hover:text-buttonBlue transition-all duration-300 ease-in-out"
              onClick={switchLanguage(ld.name)}
            >
              {ld.title}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
