if (window.innerWidth <= 768) {
  // 1. Interceptamos y matamos el clic en los enlaces que envuelven las fotos
  document.querySelectorAll('a').forEach(enlace => {
    if (enlace.querySelector('img') || enlace.classList.contains('zoom-imagen')) {
      enlace.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
      }, { capture: true });
    }
  });

  // 2. Interceptamos el toque del dedo directamente sobre todas las fotos
  document.querySelectorAll('img').forEach(foto => {
    foto.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, { capture: true });

    foto.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  });
}
