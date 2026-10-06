# Club Unión Metropolitana Santander

Página web del Club Deportivo Social de Piedecuesta (Santander). Presenta los cuatro deportes del club (fútbol, baloncesto, patinaje y voleibol) y los datos de contacto.

Está hecha con HTML, CSS y JavaScript puro, sin librerías ni frameworks. Se diseñó primero para celular y se adapta a tablet y computador.

## Características

- Diseño pensado primero para celular y totalmente responsivo.
- Carrusel de deportes que se desliza hacia los lados, con puntos de navegación y flechas en pantallas grandes.
- Modo claro y modo oscuro con botón. Recuerda la elección y, la primera vez, usa el modo del dispositivo.
- Botón "Preguntar horarios y sede" en cada deporte, que abre un correo con el deporte ya en el asunto.
- Contacto con iconos: WhatsApp, correo, Instagram y Facebook.

## Estructura

```
club-ums/
├── index.html      Estructura de la página
├── estilos.css     Estilos, colores y modo claro/oscuro
├── main.js         Carrusel, lista de deportes y cambio de tema
└── imagenes/       Fotos y logo (se agregan aparte)
    ├── logo.png
    ├── portada.jpg
    ├── futbol.jpg
    ├── baloncesto.jpg
    ├── patinaje.jpg
    └── voleibol.jpg
```

Los nombres de las imágenes deben ser exactamente esos. Si falta alguna, la tarjeta o la portada se muestra con un fondo oscuro de color naranja.

## Cómo usarla

No necesita instalación ni servidor. Abre `index.html` en el navegador.

## Qué personalizar

| Qué | Dónde |
| --- | --- |
| Colores | Variables al inicio de `estilos.css` (`--dorado`, `--naranja`, `--fondo`, etc.). El modo claro está en el bloque `:root[data-theme="light"]` |
| Deportes (nombre, público, descripción, qué llevar, imagen) | Lista `deportes` en `main.js` |
| Correo del club | Constante `CORREO_CLUB` en `main.js` y el enlace de correo en `index.html` |
| WhatsApp | Enlace `https://wa.me/57XXXXXXXXXX` en `index.html` (número con el 57 y sin espacios ni +) |
| Instagram y Facebook | Reemplazar los `#` en la sección de contacto de `index.html` |

## Pendiente

- Agregar las imágenes en la carpeta `imagenes/`.
- Poner el número real de WhatsApp y los enlaces de Instagram y Facebook.
- Conectar la base de datos: reemplazar la lista `deportes` de `main.js` por los datos que devuelva la API y llamar `mostrarDeportes(datos)`. El HTML y el CSS no cambian.

## Tecnologías

HTML5, CSS3 y JavaScript. Tipografías de Google Fonts: Big Shoulders Display y Hanken Grotesk.

## Derechos

© Club Unión Metropolitana Santander. Todos los derechos reservados.
