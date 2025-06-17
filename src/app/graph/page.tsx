'use client';

import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';
import { PhotoNode } from '@/components/PhotoNode';
import { GroupNode } from '@/components/GroupNode';
import { useRouter } from 'next/navigation';

const nodeTypes = {
  photo: PhotoNode,
  group: GroupNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'photo',
    position: { x: 250, y: 100 },
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop',
      label: '캐주얼 셔츠',
      tags: ['셔츠', '캐주얼'],
    },
  },
  {
    id: '2',
    type: 'photo',
    position: { x: 400, y: 200 },
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1503341338655-b5b1ad63fa54?w=200&h=200&fit=crop',
      label: '데님 자켓',
      tags: ['자켓', '데님'],
    },
  },
  {
    id: '3',
    type: 'photo',
    position: { x: 100, y: 200 },
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop',
      label: '스니커즈',
      tags: ['신발', '스니커즈'],
    },
  },
  {
    id: '4',
    type: 'photo',
    position: { x: 250, y: 300 },
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=200&h=200&fit=crop',
      label: '청바지',
      tags: ['바지', '데님'],
    },
  },
  {
    id: 'group-1',
    type: 'group',
    position: { x: 50, y: 50 },
    style: {
      width: 400,
      height: 300,
      zIndex: -1,
    },
    data: {
      label: '캐주얼 룩',
      description: '편안하고 활동적인 스타일',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '3',
    target: '4',
    type: 'straight',
    style: { stroke: '#4993FA', strokeWidth: 2 },
    label: '캐주얼한 하반신',
  },
  {
    id: 'e1-4',
    source: '2',
    target: '1',
    type: 'straight',
    style: { stroke: '#4993FA', strokeWidth: 2 },
    label: '아우터 조합',
  },
  {
    id: 'e3-4',
    source: '1',
    target: '4',
    type: 'straight',
    style: { stroke: '#4993FA', strokeWidth: 2 },
    label: '무난한 상하의 조합',
  },
];

export default function GraphPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const router = useRouter();

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'straight',
            style: { stroke: '#4993FA', strokeWidth: 2 },
          },
          eds,
        ),
      ),
    [setEdges],
  );

  const addNewPhotoNode = () => {
    const newNode: Node = {
      id: `photo-${Date.now()}`,
      type: 'photo',
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1506629905607-c75a07f44f14?w=200&h=200&fit=crop',
        label: '새 아이템',
        tags: ['새로운', '아이템'],
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const addNewGroup = () => {
    const newGroup: Node = {
      id: `group-${Date.now()}`,
      type: 'group',
      position: { x: Math.random() * 200 + 500, y: Math.random() * 200 + 100 },
      style: {
        width: 300,
        height: 200,
        zIndex: -1,
      },
      data: {
        label: '새 그룹',
        description: '새로운 스타일 그룹',
      },
    };
    setNodes((nds) => nds.concat(newGroup));
  };

  return (
    <div className=" bg-[#F1FAFB]">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="border-[#4993FA] text-[#4993FA] hover:bg-[#4993FA] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            채팅으로 돌아가기
          </Button>
          <h1 className="text-2xl font-bold text-[#4993FA]">패션 아이템 연결 그래프</h1>
        </div>
        <div className="flex gap-2">
          <Button onClick={addNewPhotoNode} className="bg-[#4993FA] hover:bg-[#3A7BD8] text-white">
            <Plus className="w-4 h-4 mr-2" />
            사진 노드 추가
          </Button>
          <Button
            onClick={addNewGroup}
            variant="outline"
            className="border-[#4993FA] text-[#4993FA] hover:bg-[#4993FA] hover:text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            그룹 추가
          </Button>
        </div>
      </div>

      {/* React Flow */}
      <div className="h-[calc(80vh-80px)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ backgroundColor: '#F1FAFB' }}
        >
          <Controls className="bg-white border border-gray-200" />
          <MiniMap
            nodeColor="#4993FA"
            maskColor="rgba(73, 147, 250, 0.1)"
            className="bg-white border border-gray-200"
          />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#E5E7EB" />
        </ReactFlow>
      </div>
    </div>
  );
}
