import mongoose, {mongo} from "mongoose";
async function dbConnect() {

    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;

}

export default dbConnect;

//Funções assincronas fazem com o que a requisão no banco de dados seja feita em qualquer momento do código