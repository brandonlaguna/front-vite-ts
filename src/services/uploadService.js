import { getDefaultHeadersWithAuth } from "../utils";

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API_URL || "";

export const UploadService = {
  /**
   * Carga una imagen al servidor
   * @param {File} file - El archivo a subir
   * @returns {Promise<{url: string}>} URL de la imagen subida
   */
  uploadImage: async (file) => {
    if (!file) {
      throw new Error("No file provided");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const headers = getDefaultHeadersWithAuth().headers;
      // Remover Content-Type para que el navegador lo establezca automáticamente
      delete headers["Content-Type"];

      const response = await fetch(`${API_BASE}/v1/post/uploadImage`, {
        method: "POST",
        body: formData,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Upload failed with status ${response.status}`
        );
      }

      const data = await response.json();

      if (!data.response || !data.response.url) {
        throw new Error("No URL returned from server");
      }

      return data.response.url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  },
};

export default UploadService;
