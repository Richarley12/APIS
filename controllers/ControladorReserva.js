import { ServicioReserva } from "../services/ServicioReserva.js";
import { modeloReseva } from "../models/modeloReserva.js";
import { ServicioHabitacion } from "../services/ServicioControlador.js";

export class ControladorReservas{
    constructor(){}

    async buscandoReserva(req,res){
        let idReserva=req.params.idReserva
        let servicioReserva = new ServicioReserva() 
        
        try{
            res.status(200).json({
                "mensaje":"Exito buscando la reserva..."+idReserva,
                "Reserva":await servicioReserva.buscarPorId(idReserva),
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }


    async buscandoReservas(req,res){
        let servicioReserva=new ServicioReserva();
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes....",
                "reservas":await servicioReserva.buscarTodas()
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }

    async creandoReservas(req,res){
        let modelReser = new modeloReseva();
        modelReser=req.body
        let servicioReserva = new ServicioReserva()
        let objetoHabitacion = new ServicioHabitacion();
        let habitacion = await objetoHabitacion.buscarPorId(modelReser.idHabitacion);
        console.log(modelReser)
        let fechainicioreserva = new Date(modelReser.fechainicioreserva).getTime()
        let fechafinalreserva = new Date(modelReser.fechafinalreserva).getTime()
        let dias = fechafinalreserva-fechainicioreserva
        dias= dias/(1000*60*60*24)
        Math.round(dias)

        try{
            if (fechainicioreserva>fechafinalreserva){
                return res.status(400).json({
                    "mensaje":"la fecha de inicio no puede ser mayor de la fecha final"
                })
            }
            else{
            if ( habitacion === null ) {
                return res.status(400).json({
                    "mensaje":"No se puedo encontrar la habitacion a reservar"
                })
            }else{
               if(habitacion.estado != true){
                return res.status(400).json({
                    "mensaje":"No se puedo reservar, no esta disponible"
                })
               }else if(modelReser.totalpersonas>habitacion.numeropersonas){
                return res.status(400).json({
                    "mensaje":"El número de personas excede la capacidad de la habitación"
                })
            }else{
                await servicioReserva.crearReserva(modelReser)
                habitacion.estado=false
                await objetoHabitacion.editar(modelReser.idHabitacion,habitacion)
                res.status(200).json({
                    "mensaje":"La habitacion se encuentra disponible. Exito agreando reserva..."
                })
               }
            }
        }
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }

    async editandoReserva(req,res){
        let datosReserva=req.body;
        let idReserva=req.params.idReserva;
        console.log(datosReserva);
        console.log(idReserva);

        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.editarReserva(idReserva,datosReserva)
            res.status(200).json({
                "mensaje":"Exito editando las Reservas..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion " + error
            })
        }
    }

}