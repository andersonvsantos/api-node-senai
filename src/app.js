import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();
connection.on("error", (erro) => {

    console.error("Erro ao tentar conectar-se ao banco de dados: ", erro);

});

connection.once("open", () => {

    console.log("Conexao com o banco de dados realizada com sucesso!");

});

const app = express();
routes(app);
export default app;

//O app.js é arquivo responsável por dar um feedback se a conexão com o DB foi bem sucedida, e informar os outros arquivos.
//O express é responsável por facilitar a conexão com o DB, evitando a necessidade de criar do 0 as funções de conexão HTTP.