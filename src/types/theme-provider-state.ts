import { Theme } from "@/types/theme"

export type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
  }