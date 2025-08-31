document.querySelectorAll(".Download").forEach(btn => {
    btn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "CI.pdf";                       // ruta al archivo
      link.download = "CV_Thiago_Maidana.pdf";    // nombre al guardar
      document.body.appendChild(link);            // necesario en algunos navegadores
      link.click();
      link.remove();
    });
  });
  