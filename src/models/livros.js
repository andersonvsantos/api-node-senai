import mongoose from "mongoose";
import {autorSchema} from  "./autores.js";

const livroSchema = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editor: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema

}, {

    versionKey: false

});

const livro = mongoose.model("livros", livroSchema);

export default livro;

//Forma do objeto livro.