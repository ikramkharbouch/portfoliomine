import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="text-2xl dark:text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Mode"
    >
      {theme === 'light' ? (
        <HiOutlineMoon />
      ) : (
        <HiOutlineSun />
      )}
    </button>
  );
};

export default ThemeToggler;