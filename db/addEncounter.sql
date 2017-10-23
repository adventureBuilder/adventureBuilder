insert into encounters 
(
    encounter_name,
    encounter_description,
    final_encounter,
    story_id,
    encounter_background_images_id
)
VALUES
(
    $1,
    $2,
    $3,
    $4,
    $5
)
Returning *;