UPDATE character
SET health_points = $1
WHERE character_id = $2
RETURNING *;

