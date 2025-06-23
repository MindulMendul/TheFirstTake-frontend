import { ColorSet } from '@/styles/color';
import { toneMap } from '@nextcss/color-tools';

type ColorName = keyof ColorSet;
type ShadeName = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

function generateColorSet<T extends string>(name: T, color: string) {
  const src = { ...toneMap(color) };
  const dst: { [key: string]: string } = {};

  for (let [before, after] of Object.entries(src)) dst[`${name}-${before}`] = after;
  return dst;
}

export type ColorType = `${ColorName}-${ShadeName}`;

export const makeColorSet = (colorSet: ColorSet) =>
  Object.entries(colorSet).reduce(
    (acc, [name, color]) => {
      const newSet = generateColorSet(name as ColorType, color);
      return { ...acc, ...newSet };
    },
    // 2. 초기값의 타입을 Record<string, string>으로 더 명확하게 지정해줍니다.
    {} as Record<ColorType, string>,
  );
