import {modeloHabitacion} from "../models/modeloHabitacion.js";
export class ServicioHabitacion{
    constructor(){}
       async registrar(datosHabitacion){
            let habitacionNueva= new modeloHabitacion(datosHabitacion)
            return await habitacionNueva.save()
        }
       async buscarTodas(){
            let habitaciones=await modeloHabitacion.find()
            return habitaciones
        }
        async buscarPorId(idHabitacion){
            let habitacion = await modeloHabitacion.findById(idHabitacion)
            return habitacion
        }
       async editar(idHabitacion,datosHabitacion){
            return await modeloHabitacion.findByIdAndUpdate(idHabitacion,datosHabitacion)
        }
    
    

}