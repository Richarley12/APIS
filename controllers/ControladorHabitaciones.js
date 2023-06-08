import { ServicioHabitacion } from "../services/ServicioControlador.js"
export class ControladorHabitaciones{
    constructor(){}
   async registrandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion= new ServicioHabitacion()
        try{
            let datosHabitacion=peticion.body
            await objetoservicioHabitacion.registrar(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos",
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    async buscandoHabitacion(peticion,respuesta){
        let objetoservicioHabitacion= new ServicioHabitacion()
        try{
            let idHabitacion=peticion.params.idhabitacion
            respuesta.status(200).json({
                "mensaje":"exito buscando la habitacion",
                "habitacion": await objetoservicioHabitacion.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
   async buscandoHabitaciones(peticion,respuesta){
        let objetoservicioHabitacion= new ServicioHabitacion()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando habitaciones",
                "habitaciones": await objetoservicioHabitacion.buscarTodas()
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        let objetoservicioHabitacion= new ServicioHabitacion()
        
        try{
            await objetoservicioHabitacion.editar(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
            "mensaje":"exito editando habitacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
}