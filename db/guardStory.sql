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
    'Sample Story',
    1,
    'You are confronted by a guard in front of a gate',
    1,
    now()
);

---------------------------
-- -make the encounters----
---------------------------
INSERT INTO encounters
(
    encounter_name, 
    encounter_description, 
    final_encounter, 
    story_id, 
    encounter_background_images_id
)
values
(
    'Guard at a gate', 
    'An overly aggressive gaurd is standing at the gate', 
    0, 
    2, 
    1
),
(
    'Jail', 
    'You are in a jail! wow look at whats happend to you', 
    0, 
    2, 
    1
),
(
    'You win', 
    'You got passed the guard you are a real champion!', 
    1, 
    2, 
    1
);
-- -------------------------------------------
-- -Update the start encounter of the story---
-- -------------------------------------------
UPDATE stories 
SET start_encounter_id = 2 
WHERE story_id = 2;

-- ------------------------------------------
-- -create options for the guard encounter---
-- ------------------------------------------
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
    2,
    'sneak',
    'try to sneak past the guard',
    '1d4+dex',
    3,
    'you snooked away',
    'the guard saw you and put you under arrest for not being sneaky enough',
    4,
    3,
    1,
    3
),
(
    2,
    'befriend',
    'try to befriend the guard so he will let you past the gate',
    '1d4+cha',
    3,
    'He was actually a super nice guy and now is your best friend.',
    'He was having a bad day and so he threw you in jail.',
    4,
    3,
    1,
    3
),
(
    2,
    'fight that guard',
    '',
    '1d4+str',
    4,
    'you kicked him in the face and he took a nap',
    'He was way stronger than you, and threw you in jail',
    4,
    3,
    1,
    3
);
-- ------------------------------------------
-- -create options for the jail encounter---
-- ------------------------------------------
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
    3,
    'wait',
    'Just serve your time and keep your head down',
    '1d4',
    1,
    'you got out early for good behavior',
    '',
    4,
    3,
    1,
    0
),
(
    3,
    'break out',
    'you have a lock pick, do you want to try to pick the lock?',
    '1d4+str',
    4,
    'you sneaked the sneak out of there',
    'you could not sneak out',
    2,
    3,
    1,
    0
);
