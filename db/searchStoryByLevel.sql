SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
where s.story_level = $1
order by completed_at desc
limit 5;