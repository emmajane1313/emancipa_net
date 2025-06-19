"use client";

import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import { cleanTitle } from "@/app/lib/helpers/cleanTitle";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("cursor-grabbing");
  };

  const onMouseLeaveOrUp = () => {
    isDragging = false;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDragging || !container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-x-scroll whitespace-nowrap cursor-grabI select-none scrollbar-hide active:cursor-grabbingI overflow-y-hidden"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseLeaveOrUp}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseMove={onMouseMove}
    >
      <div className="flex flex-row items-center justify-start w-fit h-full gap-4 px-4">
        {IMAGE_SET.map((src, i) => {
          return (
            <div key={i} className="relative w-fit h-full flex overflow-hidden">
              <div
                className={`relative glitch-img flex transition-transform duration-300 ease-out grayscale w-60 h-80 hover:grayscale-0 active:grayscale-0 ${
                  i % 2 === 0 ? "translate-y-40" : "translate-y-20"
                } cursor-click`}
                onClick={() =>
                  window.open(
                    `https://emancipa.xyz/poster/${cleanTitle(src?.title)}`
                  )
                }
              >
                <Image
                  src="/images/poster.png"
                  alt="Textura de papel"
                  fill
                  className="pointer-events-none select-none rounded-md shadow-md"
                  objectFit="cover"
                  draggable={false}
                />
                <Image
                  src={`${INFURA_GATEWAY_INTERNAL}${src.imagen}`}
                  alt={src.alt}
                  fill
                  objectFit="cover"
                  className="pointer-events-auto select-none mix-blend-multiply"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
