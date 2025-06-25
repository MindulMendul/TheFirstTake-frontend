import { ColorSet } from '@/styles/color';
import { colorSet } from '@/lib/generated-palette';

type ColorName = keyof ColorSet;
type ShadeName = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type ColorShadeFormat = `${ColorName}-${ShadeName}`;

export const parseColorSet = (
  colorShade: ColorShadeFormat,
  isDark: boolean = false,
  defaultColor: string = '#27548a',
): string => {
  const parts = colorShade.split('-');
  if (parts.length !== 2) return defaultColor;
  const [color, shade] = parts;
  const colorSetTheme = colorSet[isDark ? 'dark' : 'light'];
  if (Object.keys(colorSetTheme).includes(color as any) && Object.keys(colorSetTheme[color]).includes(shade as any)) {
    return colorSetTheme[color][shade];
  }
  return defaultColor;
};
