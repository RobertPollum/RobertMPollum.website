"use client";
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeModeContext = React.createContext<ThemeModeContextValue>({
  mode: 'light',
  toggleMode: () => {},
});

export function useThemeMode() {
  return React.useContext(ThemeModeContext);
}

function getInitialMode(): ThemeMode {
  if (typeof document === 'undefined') return 'light';
  const attr = document.documentElement.dataset.theme;
  if (attr === 'dark' || attr === 'light') return attr;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<ThemeMode>('light');

  React.useEffect(() => {
    setMode(getInitialMode());
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem('theme', mode);
    } catch {}
  }, [mode]);

  const toggleMode = React.useCallback(() => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#90caf9' : '#1976d2',
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
