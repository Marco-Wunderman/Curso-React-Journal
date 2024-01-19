export const fileUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningún archivo a subir");

  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dzr68t8sl/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal-curso");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir la imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
