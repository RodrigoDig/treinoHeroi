import { con } from './connection.js'

export async function inserirHeroi(heroi){
    const comando = 
        `insert into tb_heroi( nm_superheroi, ds_poder, bt_voa)
        values ( ?, ?, ? ) `

    const [resposta] = await (comando, [heroi.nome, heroi.poder, heroi.voa]);
    return resposta [0]
}