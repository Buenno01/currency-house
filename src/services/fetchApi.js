import Swal from "sweetalert2";

const token = import.meta.env.VITE_TOKEN;

const API_URL = `https://v6.exchangerate-api.com/v6/${token}/latest/`

export const getData = async (baseCode) => {
  try {
    const response = await fetch(API_URL + baseCode);
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Deu ruim!",
        footer: "Verifique se o código da moeda está correto e tente novamente.",
        background: '#282C33',
        color: 'white',
      });
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Deu ruim!",
      footer: "Verifique se o código da moeda está correto e tente novamente.",
      background: '#282C33',
      color: 'white',
    });

    return [];
  }
};