export {};

declare global {
  interface Window {
    __setPreferredTheme: (theme: string) => void;
    __onThemeChange: (theme: string) => void;
    __theme: string | null; // 👈️ turn off type checking
  }
}
