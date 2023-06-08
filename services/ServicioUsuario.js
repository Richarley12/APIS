import { modeloUsuario } from "../models/modeloUsuario.js";

export class ServicioUsuario{

    constructor(){}

    async crearUsuario(datosUsuario){
        let usuarioNuevo= new modeloUsuario(datosUsuario);
        return await usuarioNuevo.save();
    }

    async buscarTodo(){
        let usuariosConsultados= await modeloUsuario.find()
        return usuariosConsultados;
    }

    async recuperar(idUsuario,datosUsuario) {
        return await modeloUsuario.findByIdAndUpdate(idUsuario,datosUsuario)
    }

}