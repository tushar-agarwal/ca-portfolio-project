import API from "./api";

export const submitContactForm = async (formData) => {
  const response = await API.post("/contact", formData);
  return response.data;
};