import mongoose from 'mongoose'
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("exito conectandonos a BD")

    }catch(error){
        console.log("fallamos en la conexion a bd"+error)
    }
}