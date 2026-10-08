# URUSTUDIO – Sitio web

Sitio estático (HTML, CSS, JS), sin backend, listo para GitHub Pages. Todo el contenido se edita en `js/config.js` y `data/`.

Estructura: `index.html` (home) · `servicio.html?id=...` (ficha de cada servicio, una sola plantilla alimentada por `data/services.js`) · `css/styles.css` · `js/app.js` · `data/services.js` · `data/content.js` · `assets/`.

1. **Logo**: reemplazá `assets/images/logo.png` (y `assets/icons/favicon.png`) manteniendo el nombre.
2. **Imágenes**: reemplazá los archivos con el mismo nombre. Servicios: `assets/images/services/servicio-01.jpg` (principal) y `servicio-01-1.jpg`, `-2`, `-3` (galería de la ficha). Hero: `assets/images/hero.jpg`. Galería: `assets/images/gallery/foto-01.jpg`... Si falta un archivo se ve un espacio reservado con su ruta.
3. **Agregar servicio**: copiá una línea en `SERVICES` (`data/services.js`) con `id` único (sin espacios ni tildes), nombre, `short`, `price`, `priceArs`. Sumá su foto `servicio-14.jpg`.
4. **Eliminar servicio**: borrá su línea. Las fotos se asignan por orden: renombrá si cambia la numeración o definí `image:"ruta"`.
5. **Precios**: campos `price` (UYU) y `priceArs`. Etiquetas con `tag`; destacados del carrusel con `featured:true`. Descripción, `duration`, `includes`, `benefits`, `faq` también por servicio.
6. **Promociones**: completá `PROMOS` en `data/content.js` (ejemplo en el comentario). El porcentaje se calcula solo.
7. **Testimonios**: agregá objetos en `TESTIMONIALS`. Con `serviceId` aparecen en la ficha de ese servicio.
8. **Videos**: en `VIDEOS`: `type:"mp4"` + `src:"assets/images/videos/archivo.mp4"`, `type:"youtube"` + ID, o `type:"instagram"` + URL del reel. `orientation:"v"` vertical, `"h"` horizontal.
9. **WhatsApp**: `WHATSAPP_NUMBER` en `js/config.js` (con código de país, sin +; ej. `59899123456`). También los mensajes predefinidos.
10. **Instagram / dirección / horarios / mapa**: `INSTAGRAM_USER`, `INSTAGRAM_URL`, `ADDRESS`, `HOURS`, `MAP_EMBED` en `js/config.js`.
11. **GitHub Pages**: subí el contenido de la carpeta a un repositorio → Settings → Pages → Branch `main`, carpeta `/ (root)` → Save. Queda en `https://usuario.github.io/repositorio/`.

Pendiente: textos definitivos (descripciones, duración, qué incluye, FAQs de pago/cancelación), fotos, videos, testimonios, dirección y número real. Al tener dominio, sumá `sitemap.xml` y URLs absolutas en las etiquetas Open Graph.
