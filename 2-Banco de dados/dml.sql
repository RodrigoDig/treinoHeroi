-- inserir heroi 
 
insert into tb_heroi( nm_superheroi, ds_poder, bt_voa)
	values ('Deku', 'all for one', false );
    

-- consultar herois

select id_superheroi      id,
		nm_superheroi     nome,
        ds_poder          poder,
        bt_voa            indisponivel
from tb_heroi;
