import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Reserva =  new Schema({
    nombrecliente:{
        type:String,
        required:true
    },
    apellidocliente:{
        type:String,
        required:true
    },
    telefonocliente:{
        type:String,
        required:true
    },
    fechainicioreserva:{
        type:Date,
        required:true
    },
    fechafinalreserva:{
        type:Date,
        required:true
    },
    numeroadultos:{
        type:Number,
        required:true
    },
    numeroniños:{
        type:Number,
        required:true
    },
    totalpersonas:{
        type:Number,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    }
})

export const modeloReseva = mongoose.model('reservas',Reserva);