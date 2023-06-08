import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Usuario= new Schema({
    usuario:{
        type:String,
        required:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    contraseña:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
    },
    palabraReservada:{
        type:String,
        required:true
    }
})
export const modeloUsuario= mongoose.model('usuarios',Usuario);