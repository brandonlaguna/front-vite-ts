"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Cargando editor...</p>,
});

export default function Editor({ value, onChange }) {
  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline"],
        ["link", "image"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
      ],
      handlers: {
        image: () => handleImageUpload(),
      },
    },
  };

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // Enviar imagen al backend
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const imageUrl = data.url; // <- URL pública devuelta por el backend

      // Insertar imagen en el editor
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);

      editor.insertEmbed(range.index, "image", imageUrl);
    };
  };

  return (
    <>
      <p>{value}</p>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
      />
    </>
  );
}
