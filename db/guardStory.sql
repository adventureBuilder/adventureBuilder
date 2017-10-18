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
-- -make start encounter---
---------------------------
