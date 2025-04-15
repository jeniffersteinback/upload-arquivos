// Importa para interagir com o banco de dados
const mongoose = require("mongoose");

// Carrega váriaveis de ambiente do arquivo .Env
require("dotenv").config();

// Configura o mongoose para permitir consulta ( Restritas)
mongoose.set("strictQuery", true);


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Função para conectar ao DB
async function main() {
    await mongoose.connect(
        // Link
        `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.0tvqu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`

    );

    

    
    console.log("Conectou ao banco de dados!");
}

main().catch((err) => console.log(err));

module.exports = main;

