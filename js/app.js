const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=t=>`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(t)}`;
const waSvc=s=>wa(CONFIG.SERVICE_MESSAGE.replace("{servicio}",s.name));
const money=n=>"$"+Number(n).toLocaleString("es-UY");
const sUrl=s=>`./servicio.html?id=${s.id}`;
const ph=(src,alt,label,cls="")=>`<div class="ph ${cls}" data-label="${label}"><img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()"></div>`;
const stars=n=>"★".repeat(n)+"☆".repeat(5-n);
const home=$("body").dataset.page==="home",H=home?"":"./index.html";
const NAV=[["inicio","Inicio"],["servicios","Servicios"],["promociones","Promociones"],["galeria","Galería"],["videos","Videos"],["testimonios","Testimonios"],["faq","Preguntas frecuentes"],["contacto","Contacto"]];

$("#hdr").innerHTML=`<div class="hdr-in"><a href="${H||"#"}${home?"inicio":""}" aria-label="URUSTUDIO inicio"><img src="./assets/images/logo.png" alt="URUSTUDIO" width="86" height="46"></a>
<button class="burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
<nav class="nav" aria-label="Principal">${NAV.map(([i,t])=>`<a href="${H}#${i}">${t}</a>`).join("")}<a class="btn" data-wa href="#" target="_blank" rel="noopener">Reservar turno</a></nav></div>`;
$("#ftr").innerHTML=`<div class="wrap"><div><img src="./assets/images/logo.png" alt="URUSTUDIO" width="120" height="64"><p>Belleza hecha con detalle.</p></div>
<div><a href="${H}#servicios">Servicios</a><a href="${H}#reservas">Reservas</a><a href="${H}#faq">Preguntas frecuentes</a></div>
<div><a data-wa href="#" target="_blank" rel="noopener">WhatsApp</a><a href="${CONFIG.INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram</a></div><div><a href="${H}#contacto">Contacto</a></div>
<p class="copy">© ${new Date().getFullYear()} URUSTUDIO. Todos los derechos reservados.</p></div>`;
$$("[data-wa]").forEach(a=>a.href=wa(CONFIG.DEFAULT_MESSAGE));
$$("[data-wa-consult]").forEach(a=>a.href=wa(CONFIG.DEFAULT_MESSAGE));

const burger=$(".burger"),nav=$(".nav");
burger.onclick=()=>{const o=nav.classList.toggle("on");burger.classList.toggle("on",o);burger.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.closest("a")){nav.classList.remove("on");burger.classList.remove("on")}};
addEventListener("scroll",()=>$("#hdr").classList.toggle("sc",scrollY>20),{passive:true});

function car(el,items){el.innerHTML=`<div class="car"><button class="arr l" aria-label="Anterior">‹</button><div class="track">${items.join("")}</div><button class="arr r" aria-label="Siguiente">›</button></div>`;
 const t=$(".track",el);$(".l",el).onclick=()=>t.scrollBy({left:-t.clientWidth*.8});$(".r",el).onclick=()=>t.scrollBy({left:t.clientWidth*.8})}
const card=s=>`<article class="card rv"><a class="cimg" href="${sUrl(s)}" aria-label="${s.name}">${ph(s.image,s.name,"Foto: "+s.name)}${s.tag?`<span class="tag">${s.tag}</span>`:""}</a>
<div class="cb"><h3>${s.name}</h3><p>${s.short}</p><div class="price">${money(s.price)} <small>UYU</small>${s.priceArs?`<em>ARS ${Number(s.priceArs).toLocaleString("es-AR")}</em>`:""}</div>
<div class="btns"><a class="btn ghost" href="${sUrl(s)}">Ver servicio</a><a class="btn" href="${waSvc(s)}" target="_blank" rel="noopener">Reservar</a></div></div></article>`;
const vid=v=>{let i;const c=v.orientation==="h"?"horiz":"vert";
 if(v.src&&v.type==="mp4")i=`<video src="${v.src}" playsinline preload="none" controls></video>`;
 else if(v.src&&v.type==="youtube")i=`<iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${v.src}" title="${v.title}" allowfullscreen></iframe>`;
 else if(v.src&&v.type==="instagram")i=`<a class="ig-link" href="${v.src}" target="_blank" rel="noopener">Ver en Instagram</a>`;
 else i=`<div class="ph" data-label="Video: ${v.title}"></div>`;return `<div class="vid ${c}">${i}</div>`};
const testi=t=>`<blockquote class="tcard"><span class="stars" aria-label="${t.stars} de 5">${stars(t.stars)}</span><q>${t.text}</q><div class="who">${t.photo?ph(t.photo,t.name,""):`<div class="ph" data-label=""></div>`}<span><b>${t.name}</b><br>${t.service}</span></div></blockquote>`;
const faq=l=>l.map(f=>`<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");

if(home){
 $("#svc-grid").innerHTML=SERVICES.map(card).join("");
 car($("#svc-car"),SERVICES.filter(s=>s.featured).map(card));
 $("#promos").innerHTML=PROMOS.length?PROMOS.map(p=>{const s=SERVICES.find(x=>x.id===p.serviceId)||{name:p.title,id:""};const off=Math.round((1-p.newPrice/p.oldPrice)*100);
  return `<div class="promo rv"><span class="off">-${off}%</span><h3>${p.title}</h3><p>${s.name}</p><p>Antes <span class="old">${money(p.oldPrice)}</span></p><div class="new">Ahora ${money(p.newPrice)}</div><p>Hasta el ${p.deadline}</p><a class="btn dk" href="${wa(`Hola URUSTUDIO, quiero reservar la promoción: ${s.name}.`)}" target="_blank" rel="noopener">Reservar</a></div>`}).join(""):
  `<div class="promo rv"><h3>Próximamente</h3><p>Muy pronto nuevas promociones. Consultanos por WhatsApp.</p><a class="btn dk" data-wa href="${wa(CONFIG.DEFAULT_MESSAGE)}" target="_blank" rel="noopener">Consultar</a></div>`;
 const hs=[1.25,.8,1,1.4,.9,1.1];const n=i=>String(i+1).padStart(2,"0");
 $("#gallery").innerHTML=Array.from({length:GALLERY_COUNT},(_,i)=>`<figure class="rv" data-src="./assets/images/gallery/foto-${n(i)}.jpg"><div class="ph" data-label="Foto ${n(i)}" style="aspect-ratio:4/${4*hs[i%6]}"><img src="./assets/images/gallery/foto-${n(i)}.jpg" alt="Trabajo de URUSTUDIO ${n(i)}" loading="lazy" onerror="this.remove()"></div></figure>`).join("");
 car($("#photo-car"),Array.from({length:Math.min(GALLERY_COUNT,8)},(_,i)=>`<figure data-src="./assets/images/gallery/foto-${n(i)}.jpg" style="cursor:zoom-in">${ph(`./assets/images/gallery/foto-${n(i)}.jpg`,"Fotografía URUSTUDIO","Foto "+n(i)).replace('class="ph "','class="ph" style="aspect-ratio:4/5;border-radius:14px" ')}</figure>`));
 car($("#video-car"),VIDEOS.map(vid));
 car($("#testi-car"),TESTIMONIALS.map(testi));
 $("select[name=servicio]").innerHTML=SERVICES.map(s=>`<option>${s.name}</option>`).join("");
 $("#book").onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
  window.open(wa(`Hola URUSTUDIO. Quiero reservar:\n\nServicio: ${d.servicio}\nFecha: ${d.fecha}\nHorario: ${d.hora}\nNombre: ${d.nombre}\nTeléfono: ${d.tel}${d.msg?"\nMensaje: "+d.msg:""}`),"_blank","noopener")};
 $("#faq-list").innerHTML=faq(FAQS);
 $("#ig-user").textContent="@"+CONFIG.INSTAGRAM_USER;$("#ig-btn").href=CONFIG.INSTAGRAM_URL;
 $("#ig-grid").innerHTML=Array.from({length:6},(_,i)=>`<div class="ph" data-label="Instagram ${i+1}"></div>`).join("");
 $("#c-wa").textContent="+"+CONFIG.WHATSAPP_NUMBER;$("#c-wa").href=wa(CONFIG.DEFAULT_MESSAGE);
 $("#c-ig").textContent="@"+CONFIG.INSTAGRAM_USER;$("#c-ig").href=CONFIG.INSTAGRAM_URL;
 $("#c-addr").textContent=CONFIG.ADDRESS;$("#c-hours").textContent=CONFIG.HOURS;
 if(CONFIG.MAP_EMBED){const m=$("#map");m.removeAttribute("data-label");m.innerHTML=`<iframe src="${CONFIG.MAP_EMBED}" loading="lazy" title="Mapa"></iframe>`}
}else{
 const id=new URLSearchParams(location.search).get("id"),s=SERVICES.find(x=>x.id===id);
 if(!s){$("#svc-page").innerHTML=`<div class="wrap sec"><h1>Servicio no encontrado</h1><a class="btn dk" href="index.html#servicios">Ver servicios</a></div>`}
 else{document.title=`${s.name} | URUSTUDIO`;$('meta[name=description]').content=`${s.name} en URUSTUDIO. ${s.short}`;
  const vs=VIDEOS.filter(v=>v.serviceId===s.id),ts=TESTIMONIALS.filter(t=>t.serviceId===s.id),tl=ts.length?ts:TESTIMONIALS.slice(0,2);
  $("#svc-page").innerHTML=`<div class="wrap"><div class="sp">${ph(s.image,s.name,"Foto: "+s.name)}<div><a class="crumb" href="index.html#servicios">← Todos los servicios</a>${s.tag?`<p class="eye" style="margin-top:1rem">${s.tag}</p>`:""}<h1>${s.name}</h1>
  <p>${s.description}</p><div class="price" style="margin:1.2rem 0">${money(s.price)} <small>UYU</small>${s.priceArs?`<em>ARS ${Number(s.priceArs).toLocaleString("es-AR")}</em>`:""}</div><p><b>Duración:</b> ${s.duration}</p>
  <h3 style="margin-top:1.5rem">Qué incluye</h3><ul>${s.includes.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Beneficios</h3><ul>${s.benefits.map(x=>`<li>${x}</li>`).join("")}</ul>
  <div class="btns"><a class="btn dk" href="${waSvc(s)}" target="_blank" rel="noopener">Reservar por WhatsApp</a><a class="btn ghost" href="${wa(`Hola URUSTUDIO, quiero consultar por ${s.name}.`)}" target="_blank" rel="noopener">Consultar</a></div></div></div>
  <div class="sub"><h2>Galería</h2><div class="thumbs">${s.gallery.map((g,i)=>`<div data-src="${g}">${ph(g,`${s.name} ${i+1}`,"Foto "+(i+1)).replace('class="ph "','class="ph" style="aspect-ratio:1;border-radius:14px;cursor:zoom-in" ')}</div>`).join("")}</div></div>
  <div class="sub"><h2>Videos</h2><div id="v"></div></div><div class="sub"><h2>Testimonios</h2><div id="t"></div></div>
  <div class="sub"><h2>Preguntas frecuentes</h2><div class="faq">${faq(s.faq.concat(FAQS.slice(1,4)))}</div></div>
  <div class="sub" style="text-align:center"><h2>Tu próximo cambio comienza acá</h2><a class="btn dk" href="${waSvc(s)}" target="_blank" rel="noopener">Quiero mi turno</a></div></div>`;
  car($("#v"),(vs.length?vs:VIDEOS.slice(0,2)).map(vid));car($("#t"),tl.map(testi));}
}
/* video: pausar los demás */
document.addEventListener("play",e=>{$$("video").forEach(v=>v!==e.target&&v.pause())},true);
/* lightbox */
const lb=$("#lb");document.addEventListener("click",e=>{const f=e.target.closest("[data-src]");
 if(f){const i=$("img",f);if(!i)return;$("img",lb).src=i.src;$("img",lb).alt=i.alt;lb.hidden=false}
 else if(e.target===lb||e.target.closest(".lb-x"))lb.hidden=true});
addEventListener("keydown",e=>e.key==="Escape"&&(lb.hidden=true));
/* fade-in */
const io=window.IntersectionObserver?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1}):null;
$$(".rv").forEach(el=>io?io.observe(el):el.classList.add("in"));
