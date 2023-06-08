import { modeloReseva } from "../models/modeloReserva.js";

export class ServicioReserva{

    constructor(){}

    async crearReserva(datosReserva){
        let reservaNueva=new modeloReseva(datosReserva);
        return await reservaNueva.save();
    }
    async buscarTodas(){
        let reservasConsultadas=await modeloReseva.find()
        return reservasConsultadas;
    }
    async buscarPorId(idReserva){
        let reservaConsultada=await modeloReseva.findById(idReserva)
        return reservaConsultada
    }
    async editarReserva(idReserva,datosReserva){
        return await modeloReseva.findByIdAndUpdate(idReserva,datosReserva)
    }
}