SELECT * FROM 
encounter_options as eo
inner join 
option_images as oi
on eo.option_images_id = oi.option_images_id
where eo.encounter_id IN 
(
    SELECT encounter_id 
    FROM encounters 
    WHERE story_id = $1
);