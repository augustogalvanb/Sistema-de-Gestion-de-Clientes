import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    status: {
        type: String,
        enum: ['activo', 'vencido'], // Solo "activo" o "vencido"
        required: true // asegura que el campo no esté vacío
    },
    vencimiento: {
        type: Date, // Fecha de vencimiento
        required: true // También puedes hacer que sea requerido si es necesario
    }
}, { timestamps: true });

clientSchema.index({ name: "text" }); // Índice de texto en "name"
// Opcional: mantener el índice original si lo necesitás para ordenamiento

export const Client = mongoose.model("Client", clientSchema);