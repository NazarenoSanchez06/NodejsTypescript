import { Router } from "express";


export class BaseRouter<T>{
    public router:Router;
    public controllers:T;


    constructor(TControllers:{new ():T}){
        this.router=Router();
        this.controllers= new TControllers();
        this.routes();

    }
    routes(){

    }
}