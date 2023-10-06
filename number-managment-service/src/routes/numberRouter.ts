import axios from "axios";
import { Request, Response, Router } from "express";

const numberRouter = Router();

numberRouter.get('/numbers',async (req:Request,res:Response)=>{
    const queryUri:Array<string> = req.query.url;
    // console.log(req.query);
    let numbers:Array<number> = [];
    await Promise.all(queryUri.map(async (val:string)=>{
            await axios.get(val)
            .then(async (val)=>{
                let arr = [...numbers, ...val.data.numbers];
                numbers = [...new Set(arr)];
                console.log(numbers);
            })
            .catch(err => console.log(err));
    }))
    await Promise.all(numbers.sort());
    res.status(200);
    res.json({
        numbers
    })
})

export default numberRouter;