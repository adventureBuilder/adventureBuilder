SELECT * FROM 
character as a 
inner join classes as b 
on (b.class_id = a.class_id) 
where a.character_id = $1;