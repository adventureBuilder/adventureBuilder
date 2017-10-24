UPDATE character
SET alive = 0
WHERE character_id = $1
RETURNING *;