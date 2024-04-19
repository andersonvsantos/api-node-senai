import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {

    app.route("/").get((req, res) => res.status(200).send("Curso ed Node.js"));
    //app.route está verificando se a conexão foi bem sucedida em status(200) e req == request.
    app.use(express.json(), livros, autores);
    //app.use recebe os dados das routes em formato json.

};

export default routes;