import {API} from './API.js'
import * as dotenv from 'dotenv' 
dotenv.config()


let servidorhotel=new API()
servidorhotel.levantarServidor()