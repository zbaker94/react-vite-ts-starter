import { createContext } from "react";

import { ThemeProviderState } from "@/types/theme-provider-state";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
