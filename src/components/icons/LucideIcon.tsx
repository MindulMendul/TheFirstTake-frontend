import { ColorType, makeColorSet } from '@/lib/color';
import { cn } from '@/lib/utils';
import { lightColorSet } from '@/styles/color';
import { icons } from 'lucide-react'; // lucide import
import { HTMLAttributes } from 'react';

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  color?: ColorType;
  size?: number;
}

export default function LucideIcon({ name, color = 'blue-500', size = 16, ...props }: LucideIconProps) {
  const SelectLucideIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? 'cursor-pointer' : '';

  return (
    <SelectLucideIcon
      color={makeColorSet(lightColorSet)[color]}
      size={size}
      className={cn(pointerStyle, props.className)}
      {...props}
    />
  );
}
