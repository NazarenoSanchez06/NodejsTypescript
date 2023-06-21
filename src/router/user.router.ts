import { BaseRouter } from "./router";
import { userControllers } from '../controllers/user.controllers';

export class userRouter extends BaseRouter<userControllers>{
    constructor(){
        super(userControllers);
    }

    routes(): void {
        this.router.get('/user',(req,res)=>this.controllers.getUser(req,res))
    }
}