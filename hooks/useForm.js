import { useState } from "react";
import { FormService } from "../src/services/formService";

const useForm = (initial = { email: "", phone: "" }) => {
  const [formData, setFormData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const reset = () => {
    setFormData(initial);
    setLoading(false);
    setMessage(null);
    setError(null);
  };

  const subscribe = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const payload = {
        email: formData.email,
        phone: formData.phone,
      };
      const res = await FormService.subscribeNewsLetter(payload);
      // Flexible success detection depending on backend shape
      if (res && (res.success === true || res.status === 200 || res.ok)) {
        setMessage("Gracias. Te has suscrito correctamente.");
        setFormData(initial);
      } else if (res && res.message) {
        setMessage(res.message);
      } else {
        setMessage("Gracias. Tu solicitud ha sido enviada.");
      }
    } catch (err) {
      setError(err?.message || "Error al suscribirse. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    subscribe,
    reset,
    loading,
    message,
    error,
  };
};

export default useForm;
