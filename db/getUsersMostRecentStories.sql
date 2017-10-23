SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
where lower(u.user_name) like $1 /*the like clause is the issue*/
and s.completed_at IS NOT NULL
order by completed_at desc
limit 5;
