// Importando para upload de arquivos
const multer = require("multer");

// Importa o path para a manipulação de caminhos de arquivos (Windows)
// path para localizar o arquivo na pasta
const path = require("path");

// Configura o armazenamento dos arquivos com Multer 
const storage = multer.diskStorage({
    // Função para definir o diretório dos arquivos (Localização)
    destination: function (req, file, cb){
        cb(null, "uploads/");
    },
    // Função para definir o nome do arquivo
    filename: function (req, file, cb){
        // Define o nome do arquivo com a data e Extensão original do arquivo
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// Configure o middleware de Upload
const upload = multer({ storage });

// Exporta para utilizar em outros arquivos
module.exports = upload;

