// Correo al que llegan las preguntas de horarios y sede
const CORREO_CLUB = "unionmetropolitana1@gmail.com";

// Datos de los deportes. Por ahora están aquí;
// cuando tengas la base de datos, reemplaza esta lista por lo que te devuelva tu API.
const deportes = [
  {
    nombre: "Fútbol",
    publico: "Niños, jóvenes y adultos",
    descripcion: "Entrenamientos y partidos amistosos para todos los niveles.",
    lleva: "Lleva ropa deportiva, guayos o tenis y agua.",
    imagen: "imagenes/futbol.jpg"
  },
  {
    nombre: "Baloncesto",
    publico: "Niños, jóvenes y adultos",
    descripcion: "Fundamentos, práctica de tiro y partidos entre los participantes.",
    lleva: "Lleva ropa cómoda, tenis y agua.",
    imagen: "imagenes/baloncesto.jpg"
  },
  {
    nombre: "Patinaje",
    publico: "Todos los niveles",
    descripcion: "Para quienes empiezan y para quienes ya patinan.",
    lleva: "Lleva tus patines y, si puedes, casco y protecciones.",
    imagen: "imagenes/patinaje.jpg"
  },
  {
    nombre: "Voleibol",
    publico: "Niños, jóvenes y adultos",
    descripcion: "Práctica de técnica y partidos recreativos.",
    lleva: "Lleva ropa deportiva, tenis y agua.",
    imagen: "imagenes/voleibol.jpg"
  }
];

// Crea una tarjeta con textContent (así, si mañana los datos vienen de la BD, no se cuela HTML raro)
function crearTarjeta(d) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.style.setProperty("--foto", `url("${d.imagen}")`);

  const titulo = document.createElement("h3");
  titulo.textContent = d.nombre;

  const publico = document.createElement("div");
  publico.className = "publico";
  publico.textContent = d.publico;

  const desc = document.createElement("p");
  desc.textContent = d.descripcion;

  const lleva = document.createElement("div");
  lleva.className = "lleva";
  lleva.textContent = d.lleva;

  const enlace = document.createElement("a");
  enlace.className = "preguntar";
  enlace.textContent = "Preguntar horarios y sede";
  enlace.href = `mailto:${CORREO_CLUB}?subject=${encodeURIComponent("Horarios y sede de " + d.nombre)}`;

  tarjeta.append(titulo, publico, desc, lleva, enlace);
  return tarjeta;
}

function mostrarDeportes(lista) {
  const contenedor = document.getElementById("lista-deportes");
  contenedor.replaceChildren(...lista.map(crearTarjeta));
  armarControles(contenedor, lista.length);
}

// Puntos y flechas del carrusel
function armarControles(contenedor, total) {
  const puntos = document.getElementById("puntos");
  const tarjetas = Array.from(contenedor.children);
  const mover = (i) => contenedor.scrollTo({ left: tarjetas[i].offsetLeft - tarjetas[0].offsetLeft, behavior: "smooth" });

  puntos.replaceChildren(...tarjetas.map((t, i) => {
    const p = document.createElement("button");
    p.type = "button";
    p.className = "punto";
    p.setAttribute("aria-label", "Ir a " + t.querySelector("h3").textContent);
    p.addEventListener("click", () => mover(i));
    return p;
  }));

  const indiceActual = () => {
    const base = tarjetas[0].offsetLeft;
    let mejor = 0, dist = Infinity;
    tarjetas.forEach((t, i) => {
      const d = Math.abs(t.offsetLeft - base - contenedor.scrollLeft);
      if (d < dist) { dist = d; mejor = i; }
    });
    return mejor;
  };

  const marcar = () => {
    const actual = indiceActual();
    Array.from(puntos.children).forEach((p, i) => p.classList.toggle("activo", i === actual));
  };

  document.getElementById("anterior").onclick = () => mover(Math.max(indiceActual() - 1, 0));
  document.getElementById("siguiente").onclick = () => mover(Math.min(indiceActual() + 1, total - 1));
  contenedor.addEventListener("scroll", marcar, { passive: true });
  marcar();
}

mostrarDeportes(deportes);

// Botón de modo claro / oscuro
document.getElementById("tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  const nuevo = raiz.getAttribute("data-theme") === "light" ? "dark" : "light";
  raiz.setAttribute("data-theme", nuevo);
  try { localStorage.setItem("tema", nuevo); } catch (e) {}
});
