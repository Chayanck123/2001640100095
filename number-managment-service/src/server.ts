import express, { Request, Response } from 'express';
import numberRouter from './routes/numberRouter';

const server = express();
const port = process.env.PORT ?? 3000;

server.get('/', (req:Request,res:Response):void=>{
    res.send("This server is working");
})

server.use('/',numberRouter);

server.listen(port,()=>{
    console.log(`[server] : Server running on http://localhost:${port}`);
})