function calcularImpacto() {

    let plastico = Number(document.getElementById("plastico").value);
    let latas = Number(document.getElementById("latas").value);
    let papel = Number(document.getElementById("papel").value);

    let total = plastico + latas + papel;

    let nivel = "";

    if (total < 20) {
        nivel = "🥉 Principiante";
    }
    else if (total < 50) {
        nivel = "🥈 Intermedio";
    }
    else {
        nivel = "🥇 Avanzado";
    }

    const datos = [
        "♻️ Una botella de plástico puede tardar hasta 450 años en degradarse.",
        "🌳 Reciclar papel ayuda a reducir la tala de árboles.",
        "🥤 Una lata de aluminio puede reciclarse muchas veces sin perder calidad.",
        "💧 Reciclar ayuda a ahorrar agua y energía.",
        "🌎 Separar los residuos correctamente facilita el reciclaje.",
        "🚮 Reducir el uso de plásticos de un solo uso ayuda al planeta.",
        "📦 El cartón reciclado puede convertirse en nuevos productos de papel.",
        "🌱 Pequeñas acciones diarias pueden generar un gran impacto ambiental."
    ];

    let dato = datos[Math.floor(Math.random() * datos.length)];

    document.getElementById("resultado").innerHTML =
    `
    <h3>🌱 Resultado</h3>

    Has reciclado <strong>${total}</strong> materiales.

    <br><br>

    Nivel: <strong>${nivel}</strong>

    <br><br>

    💡 <strong>Dato curioso:</strong><br>
    ${dato}

    <br><br>

    ¡Gracias por contribuir al cuidado del medio ambiente! 💚
    `;
}