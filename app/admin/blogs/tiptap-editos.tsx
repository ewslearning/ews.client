"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "@tiptap/extension-font-size";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder"; // ✅ Added Placeholder Extension
import { useEffect } from "react";

const TiptapEditor = ({ initialContent = "", onChange }: { initialContent?: string; onChange: (content: string) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Link,
      Image,
      Underline,
      TextAlign.configure({ types: ["paragraph"] }),
      FontSize.configure({ types: ["textStyle"] }),
      FontFamily.configure({ types: ["textStyle"] }),
      Highlight,
      Placeholder.configure({ placeholder: "Start typing here..." }), // ✅ Proper way to add a placeholder
    ],
    content: initialContent,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose focus:outline-none min-h-[150px] px-3 py-2",
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  if (!editor) return null;

  return (
    <div className="border border-gray-300 rounded-md p-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-2 border-b pb-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded">B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded">I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="px-2 py-1 border rounded">U</button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className="px-2 py-1 border rounded">S</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="px-2 py-1 border rounded">H1</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="px-2 py-1 border rounded">• Bullet</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="px-2 py-1 border rounded">1. Numbered</button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className="px-2 py-1 border rounded">❝ Quote</button>
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className="px-2 py-1 border rounded">Left</button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className="px-2 py-1 border rounded">Center</button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className="px-2 py-1 border rounded">Right</button>
        <button onClick={() => editor.chain().focus().setFontSize("20px").run()} className="px-2 py-1 border rounded">Font Size</button>
        <button onClick={() => editor.chain().focus().setHighlight({ color: "#ffeb3b" }).run()} className="px-2 py-1 border rounded">Highlight</button>
        <button onClick={() => editor.chain().focus().undo().run()} className="px-2 py-1 border rounded">↺ Undo</button>
        <button onClick={() => editor.chain().focus().redo().run()} className="px-2 py-1 border rounded">↻ Redo</button>

        <input type="color" onChange={(e) => editor.chain().focus().setColor(e.target.value).run()} className="w-8 h-8" />
      </div>

      {/* Editor Wrapper - Always visible border */}
      <div className="border border-gray-300 rounded-md min-h-[150px] p-2 focus-within:border-black">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
