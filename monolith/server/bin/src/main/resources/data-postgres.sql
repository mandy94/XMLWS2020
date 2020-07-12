-- Lozinke su hesovane pomocu BCrypt algoritma https://www.dailycred.com/article/bcrypt-calculator
-- Lozinka za oba user-a je 123


 --DROP TABLE USERS ;--IF EXISTS(SELECT * FROM  USERS);

INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, status) VALUES ('agnt', '$2a$04$ojOHchifXeLAevDCPwfyX.p0b2MbjyDed5CPk/1IyMBVT1Gl3lZBK', 'Marko', 'Markovic', 'user@example.com', true, '2017-10-01 21:58:58.508-07', 'BLOK');
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, status) VALUES ('admin', '$2a$04$ojOHchifXeLAevDCPwfyX.p0b2MbjyDed5CPk/1IyMBVT1Gl3lZBK', 'Nikola', 'Nikolic', 'admin@example.com', true, '2017-10-01 18:57:58.508-07', 'ACTIVE');
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, status) VALUES ('user', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Maja', 'Savic', 'kupac@example.com', true, '2017-10-01 18:57:58.508-07', 'ACTIVE');
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, status) VALUES ('peraSaKlise', '$2a$04$WswSnQIAkowjNIN/ZDk8w.LD5PwqdnTJLrRtgxP80uTokxC8LF1xa', 'Pera', 'Peric', 'prea@gmail.com', true, '2017-10-01 18:57:58.508-07', 'ACTIVE');
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, status) VALUES ('maraSmara' ,'$2a$04$WFggkfJRG7dQKQELGDNXbemRQgSFG6GobpF94XJJ0p/oOu0Ms1.gi', 'Mara', 'Maric', 'merry@gmail.com', true, '2017-10-01 18:57:58.508-07' , 'ACTIVE');



INSERT INTO AUTHORITY (name) VALUES ('ROLE_USER');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_AGENCY');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (1, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (4, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (5, 1);


INSERT INTO MODEL (title) VALUES  ('C1');
INSERT INTO MODEL (title) VALUES  ('C2');
INSERT INTO MODEL (title) VALUES  ('C3'); -- 3
INSERT INTO MODEL (title) VALUES  ('A1');  --4 
INSERT INTO MODEL (title) VALUES  ('208'); --5 
INSERT INTO MODEL (title) VALUES  ('Fabia');--6

INSERT INTO MANUFACTURER ( title) VALUES ('Peugeot');
INSERT INTO MANUFACTURER ( title) VALUES ('Citroen');
INSERT INTO MANUFACTURER ( title) VALUES ('Skoda');
INSERT INTO MANUFACTURER ( title) VALUES ('Audi');  -- 4
INSERT INTO MANUFACTURER ( title) VALUES ('Shevrolet');  -- 5
INSERT INTO MANUFACTURER ( title) VALUES ('Volkswagen');  -- 6
INSERT INTO MANUFACTURER ( title) VALUES ('Zastava');  -- 6

INSERT INTO CITY (id, title, code) VALUES (1, 'Novi Sad', 21000);
INSERT INTO CITY (id, title, code) VALUES (2, 'Beograd', 11000);
INSERT INTO CITY (id, title, code) VALUES (3, 'Nis', 21000);
INSERT INTO CITY (id, title, code) VALUES (4, 'Cacak', 21000);
INSERT INTO CITY (id, title, code) VALUES (5, 'Subotica', 21000);

INSERT INTO GEAR(title) VALUES ('Manuelni');
INSERT INTO GEAR(title) VALUES ('Automatski');
INSERT INTO GEAR(title) VALUES ('Polu-automatski');

INSERT INTO CARCLASS (title) VALUES ('SUV');
INSERT INTO ADVERT (user_id, imgMain,  title, cdwprotection, kids_seat, milage , number_of_kids_seat,manufacturer_id, model, gear_id, cclass_id) VALUES (1,'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/spark/colorizer/01-images/2020-spark-2lt-gg2-colorizer.jpg?imwidth=960', 'Chevrolet SPARK', true, true, 10000, 2, 5, 'SPARK', 2,1);
INSERT INTO ADVERT (user_id, imgMain,  title, cdwprotection, kids_seat, milage , number_of_kids_seat,manufacturer_id, model ,gear_id, cclass_id) VALUES (1,'../../assets/image/paugeot208.jpg', 'Peugeot 208', true, true, 10000, 2, 1, '208', 1 ,1);
INSERT INTO ADVERT (user_id, imgMain,  title, cdwprotection, kids_seat, milage , number_of_kids_seat,manufacturer_id, model , gear_id, cclass_id) VALUES (1,'../../assets/image/volkswagen_tiguan.png', 'Volkswagen TIGUAN', true, true, 10000, 2, 6,'TIGUAN', 1 ,1);
INSERT INTO ADVERT (user_id, imgMain,  title, cdwprotection, kids_seat, milage , number_of_kids_seat,manufacturer_id, model, gear_id, cclass_id) VALUES (4,'../../assets/image/yugo.jpg', 'Yugo', true, true, 10000, 2, 7,'128', 1 ,1);
INSERT INTO ADVERT (user_id, imgMain,  title, cdwprotection, kids_seat, milage , number_of_kids_seat,manufacturer_id, model, gear_id, cclass_id) VALUES (5,'../../assets/image/audio_a5.png', 'Audio A5', true, true, 10000, 2, 4,'A5', 1 ,1);
