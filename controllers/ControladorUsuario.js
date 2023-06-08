import { ServicioUsuario } from "../services/ServicioUsuario.js";
export class ControladorUsuarios {
    constructor() { }

    async resgistrarUsuario(peticion, respuesta) {
        let objetoUsuario = new ServicioUsuario();
        try {
            let datosUsuario = peticion.body
            await objetoUsuario.crearUsuario(datosUsuario)
            respuesta.status(200).json({
                "mensaje": "Exito al resgistrar el usuario",
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Error al resgistrar el usuario" + error,
            })
        }
    }

    async buscarUsuarios(peticion,respuesta){
        let objetoUsuario = new ServicioUsuario();
        try {
            respuesta.status(200).json({
                "mensaje": "Exito al buscar los usuarios",
                "usuarios": await objetoUsuario.buscarTodo()
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+ error
            })
        }
    }
    async recuperarcontraseña(peticion, respuesta) {
        let idUsuario=peticion.params.idusuario
        let objetoUsuario=peticion.body
        let objetoServicioUsuario= new ServicioUsuario()

        try {
            await objetoServicioUsuario.recuperar(idUsuario,objetoUsuario)
            respuesta.status(200).json({
                "mensaje": "Exito al modificar los datos",
            })

        } catch (error) {
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }

    }
}