const axios = require("axios");

async function checkExpiredClients() {
    const notificationCount = document.getElementById("notificationCount");
    const notificationList = document.getElementById("notificationList");

    try {
        // Hacer petición al backend para obtener clientes vencidos
        const response = await axios.get("http://localhost:3000/clients/expired");
        const expiredClients = response.data;

        // Obtener notificaciones actuales de localStorage
        let storedNotifications = JSON.parse(localStorage.getItem("expiredNotifications")) || [];

        // Filtrar solo los nuevos vencimientos
        const newExpiredClients = expiredClients.filter(client => 
            !storedNotifications.some(stored => stored._id === client._id)
        );

        // Si hay nuevos vencimientos, agregarlos
        if (newExpiredClients.length > 0) {
            storedNotifications = [...storedNotifications, ...newExpiredClients];
            localStorage.setItem("expiredNotifications", JSON.stringify(storedNotifications));
        }

        // Actualizar UI con notificaciones almacenadas
        updateNotificationUI(storedNotifications, notificationCount, notificationList);
    } catch (error) {
        console.error("Error al verificar vencimientos:", error);
        notificationList.innerHTML = '<li class="dropdown-item">Error al cargar notificaciones.</li>';
    }
}

// Función para actualizar la UI
function updateNotificationUI(notifications, countElement, listElement) {
    countElement.textContent = notifications.length;

    if (notifications.length > 0) {
        listElement.innerHTML = "";
        notifications.forEach(client => {
            const item = `
                <li class="dropdown-item">
                    El cliente <strong>${client.name}</strong> ha vencido el ${new Date(client.vencimiento).toLocaleDateString("es-ES")}.
                </li>
            `;
            listElement.innerHTML += item;
        });
        // Agregar botón para limpiar notificaciones
        listElement.innerHTML += `
            <li class="dropdown-item text-center">
                <button id="clearNotifications" class="btn btn-sm btn-danger">Limpiar notificaciones</button>
            </li>
        `;
        
        // Evento para limpiar notificaciones
        document.getElementById("clearNotifications").addEventListener("click", () => {
            localStorage.removeItem("expiredNotifications");
            countElement.textContent = "0";
            listElement.innerHTML = '<li class="dropdown-item">No hay vencimientos.</li>';
        });
    } else {
        listElement.innerHTML = '<li class="dropdown-item">No hay vencimientos.</li>';
    }
}

// Verificar vencimientos cada 30 segundos
setInterval(checkExpiredClients, 30000);

// Verificar al cargar la página
checkExpiredClients();

// Mostrar notificaciones al abrir la campana sin limpiarlas
document.getElementById("notificationBell").addEventListener("click", () => {
    const storedNotifications = JSON.parse(localStorage.getItem("expiredNotifications")) || [];
    updateNotificationUI(storedNotifications, document.getElementById("notificationCount"), document.getElementById("notificationList"));
});

module.exports = checkExpiredClients;