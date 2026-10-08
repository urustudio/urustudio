/* PROMOCIONES. Vacío = se muestra un aviso. Ejemplo:
 {serviceId:"laminado-cejas",title:"Oferta especial",oldPrice:700,newPrice:560,deadline:"31/12/2026"} */
const PROMOS = [];
/* TESTIMONIOS (reemplazá los de ejemplo). stars 1-5. photo opcional. serviceId opcional (aparece en esa ficha). */
const TESTIMONIALS = [
 {name:"Nombre de clienta",text:"Testimonio de ejemplo: reemplazalo por el comentario real.",stars:5,service:"Servicio",serviceId:"",photo:""},
 {name:"Nombre de clienta",text:"Testimonio de ejemplo: reemplazalo por el comentario real.",stars:5,service:"Servicio",serviceId:"",photo:""},
 {name:"Nombre de clienta",text:"Testimonio de ejemplo: reemplazalo por el comentario real.",stars:5,service:"Servicio",serviceId:"",photo:""}
];
/* VIDEOS: type "mp4" (src: ruta local), "youtube" (src: ID) o "instagram" (src: URL). orientation "v" vertical | "h" horizontal */
const VIDEOS = [
 {title:"Video 1",type:"mp4",src:"",orientation:"v",serviceId:""},
 {title:"Video 2",type:"mp4",src:"",orientation:"v",serviceId:""},
 {title:"Video 3",type:"youtube",src:"",orientation:"h",serviceId:""},
 {title:"Video 4",type:"instagram",src:"",orientation:"v",serviceId:""}
];
/* GALERÍA: cantidad de fotos. Archivos: assets/images/gallery/foto-01.jpg ... */
const GALLERY_COUNT = 12;
const FAQS = [
 {q:"¿Cuánto dura el servicio?",a:"Depende del servicio. Cada ficha indica la duración y te la confirmamos al reservar."},
 {q:"¿Cómo puedo reservar?",a:"Completá el formulario de reserva o escribinos por WhatsApp. Te confirmamos el horario por ahí."},
 {q:"¿Qué métodos de pago aceptan?",a:"A completar."},
 {q:"¿Qué debo hacer antes de mi turno?",a:"A completar según el servicio."},
 {q:"¿Puedo cancelar o cambiar mi turno?",a:"Sí, avisanos por WhatsApp con anticipación. Política a completar."},
 {q:"¿Dónde están ubicados?",a:"Consultá la sección de contacto."}
];
