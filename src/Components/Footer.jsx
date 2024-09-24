import React from "react";
import logo from "../Assets/IMGS/logo.png";
import { useTranslation } from "react-i18next";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const { t, i18n } = useTranslation("nav");
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between">
        <img src={logo} alt="Logo del CTP Santo Domingo" className="w-[7%]" />
        <div className=" flex gap-12">
          <a
            href="/"
            className="text-lg lg:hover:text-White lg:hover:bg-Atlantis p-2 rounded-lg lg:hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Home")}
          </a>
          <a
            href="#About-us"
            className="text-lg lg:hover:text-White lg:hover:bg-Atlantis p-2 rounded-lg lg:hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("AU")}
          </a>
          <a
            href="/Posts"
            className="text-lg lg:hover:text-White lg:hover:bg-Atlantis p-2 rounded-lg lg:hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Posts")}
          </a>
          <a
            href="#Contact"
            className="text-lg lg:hover:text-White lg:hover:bg-Atlantis p-2 rounded-lg lg:hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Contact")}
          </a>
          <a
            href="/Events"
            className="text-lg lg:hover:text-White lg:hover:bg-Atlantis p-2 rounded-lg lg:hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Events")}
          </a>
        </div>
      </div>
      <hr className="md:border-Atlantis md:border-2 md:my-4" />
      <p className="hidden md:block md:text-xl md:text-center md:mb-4">
        &copy; {year} CTP Santo Domingo de Heredia
      </p>

      <div className="md:hidden">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="Logo del CTP Santo Domingo" className="w-[15%]" />
          <h1 className="text-2xl md:text-lg w-1/2">
            Colegio Tècnico Profesional de Santo Domingo
          </h1>
        </div>
        <hr className="border-Atlantis border-2 my-4" />
        <p className="text-xl text-center mb-4">
          &copy; {year} CTP Santo Domingo de Heredia
        </p>
      </div>
    </div>
  );
}
