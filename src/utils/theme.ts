import { Theme } from '../types';

export const toggleTheme = (currentTheme: Theme): Theme => {
  return currentTheme === 'dark' ? 'light' : 'dark';
};

export const getThemeClass = (theme: Theme): string => {
  return theme === 'dark' ? 'dark' : 'light';
};