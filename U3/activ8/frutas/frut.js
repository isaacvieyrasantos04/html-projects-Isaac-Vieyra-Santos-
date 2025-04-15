const frutas = {
    amarillo: {
      nombre: "mango",
      descripcion: `
        <p>el amngo es una fruta dulce, acida y jugosa. A diferencia de otras, esta solo tiene una semilla dentro, comunmente conocida como hueso</p>
        <p>es muy rica en vitaminas y crece en ambientes y climas humedos y tropicales</p>
        <p>Es una fuente rápida de energía, ideal para deportistas y personas que realizan actividades físicas.</p>`,
      imagen: "mango.PNG"
    },
    verde: {
      nombre: "limon",
      descripcion: `
        <p>el limon es muy acido, es un citrico y se usa en la mayoria de aspectos en cuanto a la cocina ya que es tan versatil que puede acompanna tanto playillos dulces como salados.</p>`,
      imagen: "limon.PNG"
    },
    naranja: {
      nombre: "Naranja",
      descripcion: `
        <p>La naranja es una fruta cítrica de forma esférica, con pulpa jugosa y sabor agridulce. Su color varía entre el anaranjado y el amarillo, aunque a veces también es verde.</p>
        <p>Es una fuente rica de vitamina C, lo que ayuda a fortalecer el sistema inmunológico y a mejorar la salud de la piel. Las naranjas también contienen antioxidantes, que son beneficiosos para la salud general.</p>
        <p>Al ser refrescantes y jugosas, las naranjas son una excelente opción para el desayuno o como un snack saludable durante el día.</p>`,
      imagen: "naranja.PNG"
    },
    morado: {
      nombre: "berenjena",
      descripcion: `
        <p>En realidad es un vegetal, y es bastante rara de ver en platillos tipicos mexicanos ya que no suele cocecharse en tantas regiones de nuestro pais.</p>`,
      imagen: "ber.jpg"
    }
  };
  
  function mostrarFruta(color) {
    const fruta = frutas[color];
  
    // Cambiar contenido textual
    document.getElementById("nombreFruta").textContent = fruta.nombre;
    document.getElementById("descripcionFruta").innerHTML = fruta.descripcion; // Usar innerHTML para permitir HTML
  
    // Mostrar imagen
    const imagen = document.getElementById("imagenFruta");
    imagen.src = fruta.imagen;
    imagen.alt = fruta.nombre;
    imagen.style.display = "block";
  }