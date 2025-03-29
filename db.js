// Importa para interagir com o banco de dados
const mongoose = require("mongoose");

// Carrega váriaveis de ambiente do arquivo .Env
require("dotenv").config();

// Configura o mongoose para permitir consulta ( Restritas)
mongoose.set("strictQuery", true);

// Função para conectar ao DB
async function main() {
    await mongoose.connect(
        // Link
    );

    
    console.log("Conectou ao banco de dados!");
}

main().catch((err) => console.log(err));

module.exports = main;

