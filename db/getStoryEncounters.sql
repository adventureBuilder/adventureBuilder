select * from
encounters as e
inner join 
encounter_background_images as ebi
on e.encounter_background_images_id = ebi.encounter_background_images_id
where e.story_id = $1;