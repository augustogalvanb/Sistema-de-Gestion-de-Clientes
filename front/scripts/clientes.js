const axios = require('axios')
const checkExpiredClients = require("./notifications.js");

document.addEventListener("DOMContentLoaded", async () => {
    const clientsTableBody = document.getElementById("clientsTableBody");

    try {
        // Hacer la petición GET al backend para obtener todos los clientes
        const response = await axios.get("http://localhost:3000/clients");
        const clients = response.data;

        if (clients && clients.length > 0) {
            // Limpiar la tabla
            clientsTableBody.innerHTML = "";

            // Llenar la tabla con los datos
            clients.forEach(client => {
                const row = `
                    <tr>
                        <td>${client.name}</td>
                        <td>${client.email}</td>
                        <td>${client.phone}</td>
                        <td>${client.address || "No especificada"}</td>
                        <td>${client.status}</td>
                        <td>${new Date(client.vencimiento).toLocaleDateString("es-ES")}</td>
                    </tr>
                `;
                clientsTableBody.innerHTML += row;
            });
        } else {
            clientsTableBody.innerHTML = "<tr><td colspan='6'>No hay clientes registrados.</td></tr>";
        }
    } catch (error) {
        console.error("Error al cargar clientes:", error);
        clientsTableBody.innerHTML = "<tr><td colspan='6'>Error al cargar los clientes.</td></tr>";
    }
});

// Iniciar notificaciones
checkExpiredClients();