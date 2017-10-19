-- --------------------
-- - create a class ---
-- --------------------

INSERT INTO classes 
(
    class_name, 
    base_charisma, 
    base_dexterity, 
    base_strength, 
    male_class_img, 
    female_class_img, 
    start_health_points
) 
values (
    'test', 
    5, 
    0, 
    0, 
    'http://placekitten.com/234/232', 
    'http://placekitten.com/234/232',
    18
);

-- -----------------
-- - create user ---
-- -----------------

INSERT INTO users
(
    user_name, 
    email, 
    name, 
    profile_picture, 
    auth_id
) 
values (
    'adventureBuilder', 
    'adventureBuilder2049@gmail.com', 
    'adventurer',
    'http://placekitten.com/234/250',
    'sadfasdfasdf'
);

-- --------------------
-- -create character---
-- --------------------
INSERT INTO character
(
    character_name, 
    gender, 
    dexterity,
    strength,
    charisma,
    health_points,
    alive,
    class_ID,
    user_id
) 
values (
    'HarrisonFord', 
    'female', 
    1,
    2,
    6,
    19,
    1,
    1,
    1
);

-- ----------------
-- -create story---
-- ----------------
insert into stories
(
  story_name,
  user_ID ,
  story_description,
  story_level,
  completed_at
 )
 values
 (
    'harrison for punches ryan gosling',
    1,
    'it actually happened',
    1,
    now()
);
-- -------------------------------------
-- -create encounter bacground image ---
-- -------------------------------------

insert into encounter_background_images (
  image_name,
  image_src
)
values
(
    'Giant Cat attack',
    'http://placekitten.com/300/250'
);

-- ----------------------
-- - create encounter ---
-- ----------------------

insert into encounters (
  encounter_name,
  encounter_description,
  story_ID,
  encounter_background_images_ID 
)
values (
    'Giant Cat attack',
    'you are attacked by a giant cat with fangs',
    1,
    1
);

-- -------------------------
-- - create option image ---
-- -------------------------

insert into option_images (
  image_name,
  image_src 
)
values (
    'sneak cat',
    'http://placekitten.com/400/441'
);

-- ---------------------
-- create 3 options ---
-- ---------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    1,
    'sneak',
    'try to sneak past the evil cat',
    '1d4+dex',
    3,
    'you snooked away',
    'the cat bite you',
    1,
    1,
    1,
    3
),
(
    1,
    'flirt',
    'try to make the cat fall in love with your devilish charm',
    '1d4+cha',
    3,
    'you seduced the cat and now you have a have cat have person baby',
    'the cat bite you',
    1,
    1,
    1,
    3
),
(
    1,
    'fight',
    'kinda rude tho?',
    '1d4+str',
    3,
    'you killed away the cat',
    'the cat bite you',
    1,
    1,
    1,
    3
);

---------------------------------------------------------------
-- -create relation between character and story and encounter--
---------------------------------------------------------------

insert into story_has_character (
  story_ID,
  character_ID,
  last_encounter_ID
)
values (
    1,
    1,
    1
);