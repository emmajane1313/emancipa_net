import { PARAGRAFOS } from "@/app/lib/constantes";
import { motion } from "framer-motion";
import { JSX, useContext } from "react";
import Gallery from "./Gallery";
import { ModalContext } from "@/app/providers";
import Image from "next/image";

const Cambio = (): JSX.Element => {
  const context = useContext(ModalContext);
  switch (context?.indice) {
    case 8:
      return (
        <motion.div
          key={context?.indice}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            "relative w-full h-fit justify-between flex flex-col overflow-hidden"
          }
        >
          <Gallery />
          <div
            className="relative w-full h-fit flex cursor-click  font-poster flex-row gap-3 rainbow text-3xl sm:text-7xl uppercase text-red-900 overflow-hidden mb-24 sm:mb-10"
            onClick={() => window.open("https://emancipa.xyz")}
          >
            <div className="relative w-fit h-fit flex whitespace-nowrap">
              PUBLISH TO THE STREET
            </div>
            <div
              className="relative w-fit h-fit flex whitespace-nowrap"
              onClick={() => window.open("https://emancipa.xyz")}
            >
              STREET PUBLISH
            </div>
          </div>
        </motion.div>
      );

    case 7:
      return (
        <motion.div
          key={context?.indice}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            "px-1 sm:px-8 md:px-20 relative flex flex-col w-full items-center justify-center h-screen"
          }
        >
          <motion.div
            className="absolute left-10 md:left-20 top-10 md:top-20 flex w-fit h-fit rotate-8 cursor-click"
            onClick={() => window.open("https://dhawu.com/")}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative flex w-52 h-60 md:w-80 md:h-60">
              <Image
                alt="d/acc | vitalik buterin | emancipa"
                src={"/images/chica1.png"}
                draggable={false}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </motion.div>

          <motion.div
            className="relative w-fit h-fit flex text-white text-center text-xs"
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {`░▐ S!gn⸸l.   No  ∷∷∷∷∷∷∷∷∷∷∷∷∷   perfₒrm⧫nce.   Ju$+   S!gn⸸l ░░▒▒▓▓╳╳══╡`}
          </motion.div>
          <motion.div
            className="relative text-center w-fit h-fit rainbow text-2xl md:text-5xl font-bold py-2 uppercase cursor-click glitch-hover"
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() =>
              window.open(
                "https://vitalik.eth.limo/general/2025/01/05/dacc2.html"
              )
            }
          >
            ( _↑ d/acc.mp4 ↑_ )
          </motion.div>
          <motion.div
            className="relative w-fit h-fit flex text-white text-center text-xs"
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {`░▐ ░▐ ░▐ ░▐ S!gn⸸l.   No   ∷∷∷∷∷∷∷∷∷∷∷∷∷  perfₒrm⧫nce.   Ju$+   S!gn⸸l`}
          </motion.div>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute right-10 md:right-20 bottom-10 sm:bottom-20 flex w-fit h-fit rotate-4 cursor-click"
            onClick={() => window.open("https://dhawu.emancipa.xyz/")}
          >
            <div className="relative flex w-52 h-60 md:w-80 md:h-60">
              <Image
                alt="d/acc | vitalik buterin | emancipa"
                src={"/images/chica2.png"}
                draggable={false}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </motion.div>
        </motion.div>
      );

    default:
      return (
        <motion.h3
          key={context?.indice}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            "text-4xl px-1 sm:px-8 md:px-20 md:text-6xl leading-[1.3] uppercase text-white text-crt glitch-hover text-justify items-center justify-center break-all sm:break-words"
          }
        >
          {PARAGRAFOS[context?.indice!]}
        </motion.h3>
      );
  }
};

export default Cambio;
