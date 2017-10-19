UPDATE stories 
SET completed_at = NOW() 
WHERE story_id = $1;