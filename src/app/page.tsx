"use client";

import { AnimatePresence } from "framer-motion";
import Cambio from "./components/Common/modules/Cambio";
import useScroll from "./components/Common/hooks/useScroll";
import { BLOQUES } from "./lib/constantes";
import { useContext } from "react";
import { ModalContext } from "./providers";

export default function Home() {
  const { containerRef } = useScroll();
  const context = useContext(ModalContext);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="w-full h-full overflow-y-scroll pt-4 crt-jitter snap-y snap-mandatory"
        ref={containerRef}
      >
        <div className="w-full h-[65vh] md:h-[68vh]">
          <div className="sticky w-full top-60 h-fit z-10 flex flex-col text-center sm:text-right items-center justify-center gap-1 text-crt text-xl bg-transparent px-1 sm:px-8 md:px-20">
            <h2 className="glitch-hover rainbow text-2xl uppercase">
              emancipate.net
            </h2>
            <h1 className="relative w-full h-fit flex flex-row justify-center sm:justify-between flex text-gray-500 text-sm sm:flex-nowrap flex-wrap">
              <div
                className="relative w-fit h-fit glitch-hover cursor-click"
                onClick={() => window.open("https://emmajanemackinnonlee.com/")}
              >
                {" "}
                Maintained by
              </div>
              <div
                className="relative w-fit h-fit glitch-hover cursor-click"
                onClick={() => window.open("https://emmajanemackinnonlee.com/")}
              >
                {" "}
                Emma-Jane MacKinnon-Lee
              </div>
            </h1>
          </div>
        </div>

        <div
          className="w-full relative"
          style={{ height: `${BLOQUES * 150}vh` }}
        >
          <div
            className={`sticky top-0 w-full flex items-center ${
              context?.indice === 0 ? "h-fit" : "h-screen"
            }`}
            style={{ zIndex: context?.indice || 0 + 1 }}
          >
            <AnimatePresence mode="wait">
              <Cambio />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
