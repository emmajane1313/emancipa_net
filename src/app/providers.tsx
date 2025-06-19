"use client";

import { createContext, SetStateAction, useState } from "react";

export const ModalContext = createContext<
  | {
      indice: number;
      setIndice: (e: SetStateAction<number>) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [indice, setIndice] = useState<number>(0);

  return (
    <ModalContext.Provider
      value={{
        indice,
        setIndice,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
