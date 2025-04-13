const path = require("path");

// module.exports = {
//     entry: "./scripts/registrar.js",
//     output: {
//         filename: "registrar.bundle.js",
//         path: path.resolve(__dirname, "dist")
//     },
//     mode: "development",
//     devServer: {
//         static: path.resolve(__dirname, "src"),
//         port: 8080
//     }
// };

module.exports = {
    entry: {
        main: "./scripts/index.js",
        registrar: "./scripts/registrar.js",
        clientes: "./scripts/clientes.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devServer: {
        static: path.resolve(__dirname),
        port: 8080
    }
};