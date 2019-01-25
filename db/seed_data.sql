drop table if exists products;

create table if not exists products (
    id serial primary key,
    name varchar(50),
    price integer,
    img varchar(50)
);