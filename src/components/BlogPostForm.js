"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";
import { UploadService } from "../services/uploadService";
import { getDefaultHeadersWithAuth } from "../utils";

export default function BlogPostForm({ onPublish }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [audience, setAudience] = useState("public");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const inputRef = useRef(null);
  const editorRef = useRef(null);

  const handleImageUpload = useCallback(async (blobInfo, success, failure) => {
    const file = blobInfo.blob();

    try {
      console.log("📤 Uploading image...", file.name);
      const imageUrl = await UploadService.uploadImage(file);
      console.log("✅ Image uploaded:", imageUrl);
      success(imageUrl);
    } catch (error) {
      console.error("❌ Error uploading image:", error);
      failure(error.message);
    }
  }, []);

  const handleEditorInit = (evt, editor) => {
    editorRef.current = editor;
    setIsEditorReady(true);
    console.log("✅ TinyMCE Editor initialized");
  };

  const handleEditorChange = (content) => {
    setText(content);
  };

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Mostrar preview localmente
    const url = URL.createObjectURL(file);
    setImage({ file, url });

    // Subir imagen al servidor automáticamente
    (async () => {
      try {
        console.log("📤 Uploading image from photo button...", file.name);
        const imageUrl = await UploadService.uploadImage(file);
        console.log("✅ Image uploaded:", imageUrl);

        // Insertar en el editor TinyMCE
        // if (editorRef.current) {
        //   editorRef.current.insertContent(
        //     `<img src="${imageUrl}" alt="uploaded" style="max-width: 100%; height: auto;"/>`
        //   );
        //   console.log("✅ Image inserted into editor");
        // }
      } catch (error) {
        console.error("❌ Error uploading image:", error);
        alert(`Error al subir imagen: ${error.message}`);
      }
    })();
  }

  function removeImage() {
    if (image) URL.revokeObjectURL(image.url);
    setImage(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  function handlePublish() {
    const payload = {
      content: text,
      audience,
      image: image?.file || null,
    };

    if (onPublish) onPublish(payload);

    // reset local state
    setText("");
    removeImage();
    setAudience("public");
  }

  const charLimit = 500;
  const stripHtml = (html = "") =>
    html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
  const remaining = charLimit - stripHtml(text).length;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-4">
      {/* Header */}
      <div className="flex items-start gap-3">
        {/* image preview */}
        {image && (
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={image.url}
              alt="preview"
              width={1080}
              height={400}
              className="rounded-md object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1"
              aria-label="Eliminar imagen"
            >
              ✕
            </button>
          </div>
        )}
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          <div className="form_group">
            <input
              type="text"
              className="form_control"
              placeholder="Titulo del Post*"
              name="title"
              required=""
            />
          </div>
          <div className="form_group">
            <input
              type="text"
              className="form_control"
              placeholder="Subtitulo del Post*"
              name="subtitle"
              required=""
            />
          </div>
        </div>
        <div className="flex-1">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={handleEditorInit}
            onEditorChange={handleEditorChange}
            value={text}
            init={{
              height: 300,
              menubar: false,
              plugins: ["link", "image", "lists"],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat ",
              image_upload_handler: handleImageUpload,
              automatic_uploads: true,
              file_picker_types: "image",
              branding: false,
              promotion: false,
            }}
          />

          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-3">
              {/* image upload */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="px-2 py-1 rounded-md hover:bg-gray-100">
                  🖼️ Foto
                </span>
              </label>

              {/* emoji placeholder */}
              <button
                onClick={() => setText((s) => s + " 😀")}
                className="px-2 py-1 rounded-md hover:bg-gray-100"
                aria-label="Agregar emoji"
              >
                😊 Emoji
              </button>

              {/* audience selector */}
              <div className="relative">
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="border border-gray-200 rounded-md px-2 py-1 bg-white"
                >
                  <option value="public">Público</option>
                  <option value="friends">Amigos</option>
                  <option value="private">Solo yo</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`text-xs ${
                  remaining < 0 ? "text-red-500" : "text-gray-400"
                }`}
              >
                {remaining} caracteres
              </div>
              <button
                onClick={handlePublish}
                disabled={stripHtml(text).trim().length === 0 && !image}
                className={`rounded-full px-4 py-1 font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  stripHtml(text).trim().length === 0 && !image
                    ? "bg-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
