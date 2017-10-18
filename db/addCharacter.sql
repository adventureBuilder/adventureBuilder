INSERT INTO CHARACTER 
(
    character_name, 
    gender,
    dexterity, 
    strength, 
    charisma, 
    health_points, 
    class_id, 
    user_id
)
VALUES
(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
)
RETURNING * ;