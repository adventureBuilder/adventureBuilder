UPDATE users
SET user_name = $1
WHERE user_id = $2
RETURNING *;