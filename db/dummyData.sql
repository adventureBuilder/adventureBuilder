----------------------
--- create a class ---
----------------------

INSERT INTO classes 
(
    class_name, 
    base_charisma, 
    base_dexterity, 
    base_strength, 
    male_class_img, 
    female_class_img, 
    start_health_points
) 
values (
    'test', 
    5, 
    0, 
    0, 
    'http://placekitten.com/234/232', 
    'http://placekitten.com/234/232',
    18
);

-------------------
--- create user ---
-------------------

INSERT INTO users
(
    user_name, 
    email, 
    name, 
    profile_picture
) 
values (
    'adventureBuilder', 
    'adventureBuilder2049@gmail.com', 
    'adventurer',
    'http://placekitten.com/234/250'
);

----------------------
---create character---
----------------------
