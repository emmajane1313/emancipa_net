"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Video() {
  const xRef = useRef<HTMLDivElement>(null);
  const yRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getRandomColor = () => {
      const random = () => Math.round(Math.random() * 255);
      return `rgb(${random()},${random()},${random()})`;
    };

    const setNewColor = (el: HTMLElement) => {
      el.style.background = getRandomColor();
    };

    const x = xRef.current;
    const y = yRef.current;

    if (x && y) {
      setNewColor(y);
      x.style.setProperty("--animation-delay-x", `${Math.random() * -10}s`);
      y.style.setProperty("--animation-delay-y", `${Math.random() * -10}s`);

      const handler = () => setNewColor(y);
      x.addEventListener("animationiteration", handler);

      return () => x.removeEventListener("animationiteration", handler);
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden bg-[#210098ea]/10 animate-[turn-on_3s_linear_forwards] opacity-70">
      <div ref={xRef} className="x absolute w-fit h-fit flex">
        <div ref={yRef} className="y w-44 h-36 rounded-sm p-1">
          <div className="relative w-full h-full flex">
            <Image
              src={"/images/emancipate.png"}
              alt="emancipate the net"
              draggable={false}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="screen"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle,#4014e100_55%,rgba(0,0,0,0.2)_100%)]"></div>
      <div className="fixed inset-0 mix-blend-overlay scanlines"></div>
    </div>
  );
}
