SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
where s.story_name like $1
and s.completed_at NOT NULL
order by completed_at desc
limit 5;