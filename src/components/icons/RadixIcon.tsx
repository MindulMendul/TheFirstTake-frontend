import React from 'react';
import * as icons from '@radix-ui/react-icons'; // Radix Icon 컴포넌트 import
import { IconProps } from '@radix-ui/react-icons/dist/types';
import { cn } from '@/lib/utils';
import colorSet, { ColorType } from '@/styles/color';

export interface RadixIconProps extends IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: ColorType;
}

function RadixIcon({ name, size = 16, color = 'gray9', ...props }: RadixIconProps) {
  const SelectRadixIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? 'cursor-pointer' : '';

  return (
    <SelectRadixIcon
      width={size}
      height={size}
      className={cn(pointerStyle, props.className)}
      {...props}
      color={colorSet[color]}
    />
  );
}

export default RadixIcon;
