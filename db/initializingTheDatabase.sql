-- -----------------------------------------------------
-- database adventure
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS adventure;
-- -----------------------------------------------------
-- Table users
-- -----------------------------------------------------
DROP TABLE IF EXISTS users ;
CREATE TABLE IF NOT EXISTS users (
  user_ID serial primary key,
  user_name VARCHAR(45) NULL,
  email TEXT NULL,
  name VARCHAR(45),
  profile_picture VARCHAR(45),
  auth_id TEXT
  );
-- -----------------------------------------------------
-- Table classes
-- -----------------------------------------------------
DROP TABLE IF EXISTS classes ;
CREATE TABLE IF NOT EXISTS classes (
  class_ID serial primary key,
  class_name VARCHAR(45) NULL,
  base_dexterity INTEGER NULL,
  base_strength INTEGER NULL,
  base_charisma INTEGER NULL,
  male_class_img TEXT NULL,
  female_class_img TEXT NULL,
  start_health_points INTEGER NULL)
;
-- -----------------------------------------------------
-- Table character
-- -----------------------------------------------------
DROP TABLE IF EXISTS character ;
CREATE TABLE IF NOT EXISTS character (
  character_ID serial primary key,
  character_name VARCHAR(45) NULL,
  gender VARCHAR(45) NULL,
  dexterity INTEGER NULL,
  strength INTEGER NULL,
  charisma INTEGER NULL,
  health_points INTEGER NULL,
  alive SMALLINT NULL DEFAULT 1,
  class_ID INTEGER REFERENCES classes,
  user_ID INTEGER REFERENCES users
  );
-- -----------------------------------------------------
-- Table stories
-- -----------------------------------------------------
DROP TABLE IF EXISTS stories ;
CREATE TABLE IF NOT EXISTS stories (
  story_ID SERIAL PRIMARY KEY,
  story_name VARCHAR(45) NULL,
  user_ID INTEGER REFERENCES users,
  story_description TEXT NULL,
  story_level INTEGER NULL DEFAULT 1,
  completed_at TIMESTAMP(0) NULL
  );
-- -----------------------------------------------------
-- Table encounter_background_images
-- -----------------------------------------------------
DROP TABLE IF EXISTS encounter_background_images ;
CREATE TABLE IF NOT EXISTS encounter_background_images (
  encounter_background_images_ID SERIAL PRIMARY KEY,
  image_name VARCHAR(45) NULL,
  image_src TEXT NULL
);
-- -----------------------------------------------------
-- Table encounters
-- -----------------------------------------------------
DROP TABLE IF EXISTS encounters ;
CREATE TABLE IF NOT EXISTS encounters (
  encounter_ID SERIAL PRIMARY KEY,
  encounter_name VARCHAR(45) NULL,
  encounter_description TEXT NULL,
  final_encounter SMALLINT NULL DEFAULT 0,
  story_ID INTEGER REFERENCES stories,
  encounter_background_images_ID INTEGER REFERENCES encounter_background_images
);
-- -----------------------------------------------------
-- Table option_images
-- -----------------------------------------------------
DROP TABLE IF EXISTS option_images ;
CREATE TABLE IF NOT EXISTS option_images (
  option_images_ID SERIAL PRIMARY KEY,
  image_name VARCHAR(45) NULL,
  image_src TEXT NULL
);
-- -----------------------------------------------------
-- Table encounter_options
-- -----------------------------------------------------
DROP TABLE IF EXISTS encounter_options ;
CREATE TABLE IF NOT EXISTS encounter_options (
  encounter_option_ID SERIAL PRIMARY KEY,
  encounter_ID INTEGER REFERENCES encounters,
  option_name VARCHAR(45) NULL,
  option_description TEXT NULL,
  option_odds VARCHAR(45) NULL,
  options_pass_case INTEGER NULL,
  success_text VARCHAR(145) NULL,
  failed_text VARCHAR(145) NULL,
  success_encounter INTEGER REFERENCES encounters,
  failed_encounter INTEGER REFERENCES encounters,
  option_images_ID INTEGER REFERENCES option_images,
  health_consquences INTEGER NULL DEFAULT 0
);
-- -----------------------------------------------------
-- Table story_has_character
-- -----------------------------------------------------
DROP TABLE IF EXISTS story_has_character ;
CREATE TABLE IF NOT EXISTS story_has_character (
  story_ID INTEGER REFERENCES stories,
  character_ID INTEGER REFERENCES character,
  last_encounter_ID INTEGER REFERENCES encounters,
  completed SMALLINT NULL DEFAULT 0
);