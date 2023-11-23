import { Express } from "express-serve-static-core";
import { 
    BearerTokenJWT, 
    Description, 
    ExpressInitializer, 
    SwaggerEndpoint, 
    SwaggerInitializer, 
    Title, 
    Version 
} from  "express-swagger-autoconfigure";
import RegisterUser from "./controllers/registerUser";

@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("Chat feito com Angular + Node JS")
@Title("CHAT")
@Version("2.0")
@BearerTokenJWT(true)

export default class AppInitial{

    @ExpressInitializer
    private app: Express;

    constructor(){
        new RegisterUser();
    }

    public getApp():Express{
        return this.app;
    }
}