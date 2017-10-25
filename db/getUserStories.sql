SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
where u.user_id = $1
and s.completed_at IS NOT NULL
order by completed_at desc;