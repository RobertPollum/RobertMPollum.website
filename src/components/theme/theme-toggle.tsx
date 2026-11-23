"use client";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from './theme-registry';

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton onClick={toggleMode} sx={{ p: 0, mr: 1 }} color="inherit">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}
