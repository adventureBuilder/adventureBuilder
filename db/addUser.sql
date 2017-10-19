INSERT INTO users
(
    user_name, 
    email, 
    name, 
    profile_picture, 
    auth_id
) 
values (
    $1, 
    $2, 
    $3,
    $4,
    $5
);