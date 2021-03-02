CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(250),
    extendedProps VARCHAR(150),
    start date,
    time time without time zone
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(250) NOT NULL
);