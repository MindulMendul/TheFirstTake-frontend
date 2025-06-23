import fs from 'fs';
import path from 'path';
import { lightColorSet } from '@/styles/color'; // 1단계 소스 파일은 동일
import { toneMap } from '@nextcss/color-tools';

console.log('🎨 Generating theme for Tailwind CSS v4...');

// --- 1. 전체 색상 팔레트 객체 생성 (이전과 동일) ---
const fullPalette = Object.entries(lightColorSet).reduce<Record<string, Record<string, string>>>(
  (acc, [name, baseColor]) => {
    acc[name] = { ...toneMap(baseColor), DEFAULT: baseColor };
    return acc;
  },
  {},
);

// --- 2. @theme 블록 내용 생성 ---
// CSS 변수를 정의하는 @theme 블록을 문자열로 만듭니다.
let themeBlockContent = '@theme {\n';
for (const [colorName, shades] of Object.entries(fullPalette)) {
  for (const [shadeName, value] of Object.entries(shades)) {
    const key = shadeName === 'DEFAULT' ? '' : `-${shadeName}`;
    themeBlockContent += `  --color-${colorName}${key}: ${value};\n`;
  }
}
themeBlockContent += '}';

// --- 3. globals.css 파일 읽고 내용 교체하기 ---
const cssFilePath = path.join(process.cwd(), 'app', 'globals.css');
try {
  const originalCssContent = fs.readFileSync(cssFilePath, 'utf-8');

  // 마커 사이의 내용을 교체하기 위한 정규식
  const markerRegex = /\/\* @theme-colors-start \*\/[\s\S]*?\/\* @theme-colors-end \*\//;

  // 교체될 전체 블록 (마커 포함)
  const replacementBlock = `/* @theme-colors-start */\n/* 🤖 이 블록은 스크립트에 의해 자동으로 관리됩니다. 직접 수정하지 마세요. */\n${themeBlockContent}\n/* @theme-colors-end */`;

  if (!markerRegex.test(originalCssContent)) {
    throw new Error("CSS markers '/* @theme-colors-start */' and '/* @theme-colors-end */' not found in globals.css.");
  }

  const newCssContent = originalCssContent.replace(markerRegex, replacementBlock);
  fs.writeFileSync(cssFilePath, newCssContent);
  console.log(`✅ Injected @theme block into: ${cssFilePath}`);
} catch (error) {
  console.error(`❌ Error updating globals.css:`, error);
}

// --- 4. TypeScript 파일 생성 (이 부분은 이전과 완전히 동일합니다) ---
const tailwindColors: Record<string, Record<string, string>> = {};
for (const [colorName, shades] of Object.entries(fullPalette)) {
  tailwindColors[colorName] = {};
  for (const shadeName of Object.keys(shades)) {
    const key = shadeName === 'DEFAULT' ? '' : `-${shadeName}`;
    const varName = `var(--color-${colorName}${key})`;
    tailwindColors[colorName][shadeName] = varName;
  }
}
const tsFileContent = `// This file is auto-generated...
export const colorSet = ${JSON.stringify(tailwindColors, null, 2)} as const;
export type ColorType = keyof typeof colorSet;
`;
const tsOutputPath = path.join(process.cwd(), 'src', 'styles', 'generated-colors.ts');
fs.mkdirSync(path.dirname(tsOutputPath), { recursive: true });
fs.writeFileSync(tsOutputPath, tsFileContent);
console.log(`✅ TypeScript types generated at: ${tsOutputPath}`);
