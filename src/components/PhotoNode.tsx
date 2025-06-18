'use client';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface PhotoNodeProps {
  data: {
    imageUrl: string;
    label: string;
    tags: string[];
  };
}

export const PhotoNode = memo(({ data }: PhotoNodeProps) => {
  return (
    <div className="bg-white rounded-lg border-2 border-[#4993FA] shadow-lg overflow-hidden min-w-[150px]">
      <Handle type="target" position={Position.Top} className="bg-[#4993FA]" />

      <div className="p-2">
        <img src={data.imageUrl} alt={data.label} className="w-full h-24 object-cover rounded" />

        <div className="mt-2">
          <h3 className="font-medium text-sm text-gray-800 truncate">{data.label}</h3>

          <div className="flex flex-wrap gap-1 mt-1">
            {data.tags.map((tag) => (
              <span key={tag} className="bg-[#4993FA] text-white text-xs px-1 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="bg-[#4993FA]" />
    </div>
  );
});
