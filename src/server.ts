import  express  from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { userRouter } from './router/user.router';

class initialServer{
    public app:express.Application=express(); 
    private port:number=8000;

    constructor(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use("/api",this.routers());
        this.listen();
    }

    routers():Array<express.Router>{
    return[new userRouter().router];
    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log('Server listening on port ->'+this.port);
        });
    }
}
new initialServer(); 