function fechasZodiaco(signo) {
    const signos = {
        "Capricornio": "22 de diciembre - 19 de enero",
        "Acuario": "20 de enero - 18 de febrero",
        "Piscis": "19 de febrero - 20 de marzo",
        "Aries": "21 de marzo - 19 de abril",
        "Tauro": "20 de abril - 20 de mayo",
        "Géminis": "21 de mayo - 20 de junio",
        "Cáncer": "21 de junio - 22 de julio",
        "Leo": "23 de julio - 22 de agosto",
        "Virgo": "23 de agosto - 22 de septiembre",
        "Libra": "23 de septiembre - 22 de octubre",
        "Escorpio": "23 de octubre - 21 de noviembre",
        "Sagitario": "22 de noviembre - 21 de diciembre"
    };

    return signos[signo] || "Signo no válido";
}

console.log(fechasZodiaco("Leo"));