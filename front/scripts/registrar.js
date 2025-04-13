const axios = require('axios')
const checkExpiredClients = require("./notifications.js");

document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Capturar los valores del formulario y establecer status como "activo"
    const clientData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim() || undefined, // Opcional
        status: "activo", // Valor por defecto
        vencimiento: document.getElementById("vencimiento").value
    };

    try {
        // Enviar la petición POST al backend
        const response = await axios.post("http://localhost:3000/clients/register", clientData);
        
        // Mostrar mensaje de éxito
        alert("Cliente registrado exitosamente: " + response.data);
        
        // Limpiar el formulario
        document.getElementById("registerForm").reset();
    } catch (error) {
        console.error("Error al registrar cliente:", error);
        alert("Hubo un error al registrar el cliente: " + (error.response?.data?.error || error.message));
    }
});

// Iniciar notificaciones
checkExpiredClients();