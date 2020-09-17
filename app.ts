import ExpressServer from "./ExpressServer";
import mongoose from "mongoose";


mongoose.connect("mongodb://URI_STRING", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to mongodb');
});


const server = new ExpressServer();

server.start();


