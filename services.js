/* SERVICIOS. Precio en UYU (price) y ARS (priceArs). tag: "Más vendido" | "Nuevo" | "Oferta" | "".
   Imagen principal por orden: assets/images/services/servicio-01.jpg ... (o definí image:"..." en el servicio). */
const SERVICES = [
 {id:"extensiones-pestanas-volumen-tech",name:"Extensiones de pestañas volumen tech",short:"Volumen y definición para tu mirada, aplicadas con técnica.",price:1200,priceArs:45000,featured:true},
 {id:"retiro-extensiones",name:"Retiro de extensiones",short:"Retiro cuidadoso de tus extensiones de pestañas.",price:300,priceArs:11350},
 {id:"retoque-extensiones",name:"Retoque de extensiones",short:"Mantenimiento para conservar tu set en buen estado.",price:900,priceArs:34000},
 {id:"laminado-cejas",name:"Laminado de cejas",short:"Cejas ordenadas, definidas y con efecto peinado.",price:700,priceArs:26400,featured:true},
 {id:"perfilado-cejas",name:"Perfilado de cejas",short:"Diseño y depilación con cera para enmarcar tu mirada.",price:500,priceArs:18900},
 {id:"lifting-pestanas",name:"Lifting de pestañas",short:"Curvatura y elevación natural de tus pestañas.",price:800,priceArs:30200,featured:true},
 {id:"depilacion-facial",name:"Depilación facial",short:"Mentón, bozo o cejas, con prolijidad.",price:700,priceArs:26400},
 {id:"higiene-facial",name:"Higiene facial",short:"Limpieza profunda para renovar tu piel.",price:1200,priceArs:45000,featured:true},
 {id:"manicura-tradicional",name:"Manicura tradicional",short:"Cuidado de manos y uñas con esmaltado tradicional.",price:600,priceArs:22700},
 {id:"pedicura-tradicional",name:"Pedicura tradicional",short:"Cuidado de pies y uñas con esmaltado tradicional.",price:700,priceArs:26400},
 {id:"manicura-semipermanente",name:"Manicura + semipermanente",short:"Manicura completa con esmaltado semipermanente.",price:800,priceArs:30200,featured:true},
 {id:"pedicura-semipermanente",name:"Pedicura + semipermanente",short:"Pedicura completa con esmaltado semipermanente.",price:900,priceArs:34000},
 {id:"retiro-esmaltado-semi",name:"Retiro de esmaltado semipermanente",short:"Retiro de semi en manos o pies.",price:200,priceArs:7567}
].map((s,i)=>{const n=String(i+1).padStart(2,"0");return Object.assign({
 tag:"",featured:false,duration:"A confirmar",image:`assets/images/services/servicio-${n}.jpg`,
 gallery:[1,2,3].map(k=>`assets/images/services/servicio-${n}-${k}.jpg`),
 description:`${s.short} Completá en data/services.js una descripción extensa: cómo es la sesión, para quién es y qué esperar.`,
 includes:["Detalle a completar","Detalle a completar"],benefits:["Beneficio a completar","Beneficio a completar"],
 faq:[{q:"¿Cuánto dura el servicio?",a:"Te confirmamos la duración al reservar por WhatsApp."}]},s)});
