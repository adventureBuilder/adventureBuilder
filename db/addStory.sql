INSERT INTO stories 
(
    story_name,
    user_id,
    story_description,
    story_level
)
VALUES
(
    $1,
    $2,
    $3,
    $4
);