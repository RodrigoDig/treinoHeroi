import { Router } from 'express';
import { inserirHeroi } from '../repository/heroiRepository.js';


const server = Router();

server.post('/heroi', async (req, resp) =>{
    
    try{
        const inserir = req.body;
        const heroi = await inserirHeroi(inserir);

        resp.send(inserir);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }    
})

export default server;