create database superheroiDB;

use superheroiDB;

create table tb_heroi(
id_superheroi     int primary key auto_increment,
nm_superheroi     varchar(100),
ds_poder          varchar(100),
bt_voa            boolean
);
