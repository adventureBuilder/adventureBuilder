SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
where u.user_name like $1
order by completed_at desc
limit 5;