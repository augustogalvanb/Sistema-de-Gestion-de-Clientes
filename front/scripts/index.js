const axios = require('axios')
const checkExpiredClients = require("./notifications.js");

document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const clientName = document.getElementById("clientName").value.trim();
    const clientResult = document.getElementById("clientResult");

    try {
        const response = await axios.post("http://localhost:3000/clients/search", { name: clientName });
        const clients = response.data;

        if (clients && clients.length > 0) {
            clientResult.innerHTML = '<h2 class="h4">Resultados</h2>';
            clients.forEach(client => {
                const card = `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${client.name}</h5>
                            <p class="card-text">Email: ${client.email}</p>
                            <p class="card-text">Teléfono: ${client.phone}</p>
                            <p class="card-text">Dirección: ${client.address || "No especificada"}</p>
                            <p class="card-text">Estado: ${client.status}</p>
                            <p class="card-text">Vencimiento: ${new Date(client.vencimiento).toLocaleDateString("es-ES")}</p>
                        </div>
                    </div>
                `;
                clientResult.innerHTML += card;
            });
        } else {
            clientResult.innerHTML = '<h2 class="h4">Resultados</h2><p>No se encontraron clientes.</p>';
        }
    } catch (error) {
        console.error("Error al buscar cliente:", error);
        clientResult.innerHTML = '<h2 class="h4">Resultados</h2><p>No se encontraron clientes.</p>';
    }
});

// Iniciar notificaciones
checkExpiredClients();