-- table content

CREATE TABLE products (
    product_id serial primary key,
    name varchar(25),
    price integer,
    image_url text 
)