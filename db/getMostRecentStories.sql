SELECT * FROM 
stories as s 
inner join 
users as u
on s.user_id = u.user_id
order by completed_at desc
limit 5;