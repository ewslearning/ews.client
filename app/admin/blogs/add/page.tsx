"use client";


import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import Sidebar from "./components/sidebar/sidebar";
import Editor from "./components/editor/editor";

export default function Add() {
  return (
    <div>
    <BlogEditor  />
  </div>
  );
}



 function BlogEditor() {
  const [blocks, setBlocks] = useState<any[]>([]);

  // Handle adding components from sidebar
  const addBlock = (type: string) => {
    setBlocks([...blocks, { id: Date.now(), type, content: "" }]);
  };

  // Handle content updates
  const updateBlock = (id: number, content: string) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, content } : block));
  };

  // Handle drag-and-drop sorting
  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = blocks.findIndex(b => b.id === active.id);
      const newIndex = blocks.findIndex(b => b.id === over.id);
      setBlocks(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar addBlock={addBlock} />

    {/* Editor Area */}
    <Editor blocks={blocks} updateBlock={updateBlock}/>
  </div>
);
};





// Preview Component
// function Preview({ blocks }: { blocks: any[] }) {
//   return (
//     <div className="w-1/4 bg-gray-50 p-4">
//       <h2 className="text-lg font-bold">Preview</h2>
//       {blocks.map(block => (
//         <div key={block.id} className="mb-2 p-2 border">
//           <strong>{block.type}:</strong> {block.content}
//         </div>
//       ))}
//     </div>
//   );
// }
