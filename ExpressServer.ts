import { Server } from "@overnightjs/core";
import * as controllers from './controllers';
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
const cors = require('cors');

class ExpressServer extends Server {

    private readonly START_MSG = 'Server started on port: ';


    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
        this.setupControllers();
    }

    private setupControllers(): void {
        const controllerInstances = [];
        for (const name of Object.keys(controllers)) {
            const controller = (controllers as any)[name];
            if (typeof controller === 'function') {
                controllerInstances.push(new controller());
            }
        }
        super.addControllers(controllerInstances);
    }

    public start(port?: number): void {
        port = port || 3000;
        this.app.get('*', (req: Request, res: Response) => {
            res.send(this.START_MSG + port);
        });
        this.app.listen(port, () => {
            console.log(this.START_MSG + port);
        });
    }

}

export default ExpressServer;