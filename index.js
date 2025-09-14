document.querySelectorAll(".Download").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "CV/CVThiagoMaidana.pdf"; // Ruta correcta al archivo de tu CV
    link.download = "CV_Thiago_Maidana.pdf"; // Nombre de descarga
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});