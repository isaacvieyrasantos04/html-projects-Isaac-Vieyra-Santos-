const actores = {
    actor1: {
      nombre: "Mikasa",
      descripcion: `
        <p>Mikasa Ackerman es un personaje de la serie de manga y anime Shingeki no Kyojin. Mikasa es presentada como una joven pueblerina que vive con la familia Yeager tras ser adoptada debido a la muerte de sus padres.</p>`,
      imagen: "m.PNG"
    },
    actor2: {
      nombre: "Armin",
      descripcion: `
        <p>Armin era muy tímido cuando era niño, y junto al hecho de que era físicamente débil, a menudo terminaba como un blanco fácil para los matones locales.</p>`,
      imagen: "a.PNG"
    },
    actor3: {
      nombre: "Eren",
      descripcion: `
        <p>Eren Yeager es un personaje ficticio y protagonista del manga Shingeki no Kyojin, creado por Hajime Isayama. Eren desde niño hasta su adolescencia jura vengarse de las enormes y monstruosas criaturas conocidas como titanes porque uno de ellos devoro a su madre y destruyeron su ciudad en la Muralla María.</p>`,
      imagen: "e.PNG"
    },
    actor4: {
      nombre: "Levi",
      descripcion: `
        <p>Levi Ackerman es un personaje ficticio del manga Shingeki no Kyojin, creado por Hajime Isayama. Es el capitán del Escuadrón de Operaciones Especiales del Cuerpo de Exploración, también conocido como el «Escuadrón de Levi», un equipo de cuatro soldados de élite con impresionantes historiales de combate elegidos por él.</p>`,
      imagen: "l.PNG"
    }
  };
  
  function mostrarActor(actor) {
    const datosActor = actores[actor];
  
    // Cambiar contenido textual
    document.getElementById("nombreActor").textContent = datosActor.nombre;
    document.getElementById("descripcionActor").innerHTML = datosActor.descripcion; // Usar innerHTML para permitir HTML
  
    // Mostrar imagen
    const imagen = document.getElementById("imagenActor");
    imagen.src = datosActor.imagen;
    imagen.alt = datosActor.nombre;
    imagen.style.display = "block";
  }