"use client";

import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Emoji from "@tiptap/extension-emoji";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function RichCommentEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (content: string) => void;
}) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        listItem: false,
      }),
      BulletList,
      ListItem,
      Emoji,
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="relative border rounded-xl p-2 w-full overflow-visible">
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="px-2 py-1 border rounded text-sm"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded text-sm italic"
        >
          I
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 border rounded text-sm"
        >
          • Lista
        </button>
        <button
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="px-2 py-1 border rounded text-sm"
        >
          😊
        </button>
      </div>

      {showEmojiPicker && (
        <div className="absolute z-50 top-16 left-0">
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => {
              editor?.chain().focus().insertContent(emoji.native).run();
              setShowEmojiPicker(false);
            }}
          />
        </div>
      )}

      <EditorContent editor={editor} className="min-h-[50px] relative" />
    </div>
  );
}
