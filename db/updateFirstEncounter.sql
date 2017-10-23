UPDATE stories 
SET start_encounter_id = $1 
WHERE story_id = $2;