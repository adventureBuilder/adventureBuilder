-- ----------------
-- -create story---
-- ----------------
insert into stories
(
  story_name,
  user_ID ,
  story_description,
  story_level,
  completed_at
 )
 values
 (
    'Forest Adventure',
    1,
    'Engage on a journey of survival throughout the forest-covered kingdom.',
    1,
    now()
);



INSERT INTO encounters
(
    encounter_name, 
    encounter_description, 
    final_encounter, 
    story_id, 
    encounter_background_images_id
)
values
(
    'Forest',
    'Your eyes scan across a meadow full of tall grass and colorful flowers.  In the near distance to the right you see a thick forest, the trees stand tall and proud and flourish in the summer air, subtly swaying back and forth in the gentle wind.  To your left is a small dirt road paved with sandy brown clay and rubble, curving slightly to the right, leading the way around the treeline.',
    0,
    19,
    1
),
(
    'Wolves',
    'You hear the howling of wolves close by.  There is an urgent hunger in their cries.  The forest leaves rustle around you as the wolves draw closer.  They emerge from the thickness of the trees into plain sight around you, growling and baring their teeth.',
    0,
    19,
    1

),
(
    'Bandits',
    'Springing out from the foliage on the side of the road, you are surprised by a group of sinister looking bandits.  They surround you while unsheathing bladed weapons, drawing closer to you in an intimidating manner.  They demand all of your money, your shoes, and the clothes off your back.',
    0,
    19,
    1

),
(
    'Hideout',
    'You come across a large wooden cabin off the road that seems to be abandoned.  There are wooden cabinets, drawers, and chests that might have something hidden inside of them.  There is a finely crafted bed in the corner that looks very comfortable for catching some much-needed rest.',
    0,
    19,
    1

),
(
    'ThreePaths',
    'You see three roads ahead of you, a long and straight dirt road leading to the left, a wide gray brick road in the center, and an off-beaten path covered in shrubbery leading off to the right up onto a mountain.',
    0,
    19,
    1

),
(
    'Cave',
    'You come upon the mouth of a cave.  All is quiet around you.  The mouth of the cave is large, wide, and imposing.  You wonder what might be inside.',
    0,
    19,
    1

),
(
    'TwoRoads',
    'You come upon a fork in the road.  There is a less traveled winding path to the left, and a far more traveled wide gray brick road to the right.',
    0,
    19,
    1

),
(
    'Wagon',
    'As you are walking along, you see a broken down wagon on the side of the gray brick road.  There is a tall strong looking man with his two children, a son and a daughter, both of whom are attempting to help their father pull the wagon out of the ditch.',
    0,
    19,
    1

),
(
    'Shop',
    'A kind old man approaches you outside of a building with a sign on it, inviting you into his humble shop.',
    0,
    19,
    1

),
(
    'Castle',
    'At the end of the road lies an old castle.  Its stones that were once bright white have darkened with age.  You hear the booming screech of a dragon that has been alerted to your presence.  It stomps its legs on top of the castle, gripping the stone with its talons as it eyes you up menacingly.',
    0,
    19,
    1

),
(
    'Finished',
    'Having overcome the castle dragon, you have become an accomplished hero of legendary status.',
    1,
    19,
    1
),

(
    'Death',
    'Your life has seen its end.  You are now dead.  Thank you for playing.',
    1,
    19,
    1

);

-- -------------------------------------------
-- -Update the start encounter of the story---
-- -------------------------------------------
UPDATE stories 
SET start_encounter_id = 10 
WHERE story_id = 19;

-- ------------------------------------------
-- -create options for the Forest encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    10,
    'Forest',
    'Go into the forest',
    '1d4',
    1,
    'You enter the thick forest in front of you',
    '',
    11, --wolves encount
    10, --forest encounter
    1,
    0
),
(
    10,
    'Road',
    'Follow the road',
    '1d4',
    1,
    'You follow the small dirt road',
    '',
    12, --Bandits encounter
    10, --forest encounter
    1,
    0
);
-- ------------------------------------------
-- -create options for the Wolves encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    11,
    'Fight',
    'Let out a loud and vicious battle cry before charging the wolves and swinging your muscular fists of justice at them in order to pummel them into submission.',
    '1d6+str',
    4,
    'The wolves leap at you and you smash each of them in the jaw with a powerful concussive force, launching them into the ground below yelping and crying in pain.',
    'You are overwhelmed by the sheer number of the wolves, they bite and gnaw on your body from all angles, chewing and devouring your flesh until you fall to the ground a lifeless corpse.',
    14,  --ThreePaths encounter
    21, --death encounter
    1,
    0
),
(
    11,
    'Slip',
    'Use your ninja-like skills to distract the wolves and slip away, vanishing into the woods ',
    '1d6+dex',
    4,
    'You make a powerful dash for a nearby cliffside and make a triumphant leap with no hesitation.  The wolves pile up to the cliffside looking down at you as you descend through the air into a river below, landing with a soft splash.  Your scent is wiped from the wolves noses and you leave no tracks behind you for them to follow.',
    'You pick up a branch to throw at them as a distraction, and as you do, a wolf leaps at you and takes a huge bite out of your arm, deeply wounding you.  The hunger of the wolfpack is enhanced by the smell of blood, and they pounce on top of you one after the other, ripping and tearing away at your body with their teeth until there is almost nothing left but bones wrapped in torn and tattered clothes.',
    14, --ThreePaths encounter
    21, --death encounter
    1,
    0
),
(
    11,
    'Pacify',
    'Calm and pacify the wolves by using your long years of experience with animals, teaching the wolves that they have more to gain from befriending you than by eating you, thereby gaining their trust and long-lasting wolf friendship.',
    '1d6+cha',
    4,
    'The wolves cease the baring their teeth, lingering slowly towards you to begin collectively licking you in a sign of wolfy compassion.  They call-out in howls of sad loneliness as you leave them in pursuit of higher glory.',
    'Holding out your hands in attempt to calm the wolves, that is the first limb of yours that they remove.  The wolves bite off your hands, causing you to scream in shock and fall to the ground covered in blood.  The wolves proceed by removing your legs and eating you until you are nothing but bones.',
    14, --ThreePaths encounter
    21, --death encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the Bandits encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    12,
    'Fight',
    'Decide that there is nothing imposing about these weak scrawny bandits and engage them in a combative bout of life or death.  You plan on disarming the first one with your superior athletic ability before using that weapon to slay anyone that might dare oppose your incredible greatness.',
    '1d6+str',
    4,
    'The bandits attack you in an uncoordinated manner and you grab the first one by his neck, lift him off his feet and toss him aside like a sack of flour, picking up the weapon he dropped and glaring at the rest of them with a deadly stare.  Apparently having never seen anyone of your strength and ability before, they all turn, cower and run away while you laugh condescendingly at their weak display of courage.',
    'The bandits begin swinging at you from all angles and you feel a large sharp piece of metal jab into your side, followed by another, and another.  You have lost track of how many times you have been stabbed, the blood seeping out your wounds, you collapse onto the dirt below you as the bandits loot your body for all your valuables.',
    13, --hideout encounter
    21, --death encounter
    1,
    0
),
(
    12,
    'Slip',
    'Run away.',
    '1d6+dex',
    4,
    'You make a break for it, tripping one of the bandits and pushing him aside, causing him to topple over and knock over two more of them.  With your incredible speed, you sprint down the road at an alarming rate, leaving the bandits following weakly behind until they slow down to a walk, having given up the chase.',
    'You try to make a break for it, but the bandits move too fast, grab you, take all your money, and beat you up.  You are tossed aside onto the side of the road, naked, and badly beaten, forced to start over.',
    13, --hideout encounter
    10, --forest encounter
    1,
    0
),
(
    12,
    'Negotiate',
    'Negotiate with the bandits and explain to them that they stand more to gain by allowing you freedom of passage.',
    '1d6+cha',
    4,
    'With very quick thinking, you begin barking and yelling at the bandits to stand down using a voice of confident authority.  You tell them that you are the leader of another bandit group just over the hill and that you have an agreement of mutual peace with them.  You are so incredibly convincing that they all completely believe you and allow you to pass unscathed.',
    'You try to convince them that you are a friendly face, but none of them are buying it.  You have insulted their intelligence by telling them a flat out lie and they decide they want to kill you.  One of them takes its blade and shoves it in your gut, dropping to the ground feeling a brutal agony on your way to deaths door.',
    13, --hideout encounter
    21, --death encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the Hideout encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    13,
    'Search',
    'Search the log cabin for valuable items.',
    '1d6+dex',
    4,
    'You search around and find...',
    'You look around, search everywhere and everything, and come up completely empty handed.',
    13, --Hideout encounter
    13, --Hideout encounter
    1,
    0
),
(
    13,
    'Proceed',
    'Continue further down along the small dirt road you started out on and see where it goes.',
    '1d4',
    1,
    '',
    '',
    16, --TwoRoads encounter
    16, --TwoRoads encounter
    1,
    0
),
(
    13,
    'Stay',
    'Stay in the hideout overnight, getting some much-needed rest in a comfortable bed.',
    '1d6',
    4,
    'You yawn and close your eyes, enjoying the wonderfully comfortable bed and all it has to offer.  It is one of the best nights of sleep you have gotten in a very long time.',
    'You close your eyes and rest your head, but there are annoying insects making loud and obnoxious sounds all night long.  You do not sleep half as well as you expected to.  Now you feel tired and cranky.',
    13, --Hideout encounter
    13, --Hideout encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the ThreePaths encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
( --long and straight dirt road leading to the left, a
-- wide gray brick road in the center, and an off-beaten path covered in shrubbery
-- leading off to the right up onto a mountain.
    14,
    'Left',
    'Choose to follow the straight dirt road leading to the left',
    '1d4',
    1,
    'You continue your travels down the straight dirt road leading off to the left',
    '',
    14, --TwoRoads encounter
    14, --TwoRoads encounter
    1,
    0
),
(
    14,
    'Middle',
    'Choose to go down the gray brick road in the middle',
    '1d4',
    1,
    'You take the main road, continuing your journey towards wherever it may lead you.',
    '',
    17, --Wagon encounter
    17, --Wagon encounter
    1,
    0
),
(
    14,
    'Right',
    'Choose to take the off-beaten path covered in shrubbery leading off to the right',
    '1d4',
    4,
    'You deviate off of the main paths, pushing away shrubbery and foliage as you take the off-beaten path.',
    '',
    15, --Cave encounter
    15, --Cave encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the Cave encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    15, --cave encounter
    'Go Back',
    'Turn around and go back.',
    '1d4',
    1,
    'Sensing danger, you leave the cave immediately, going back the way you came.',
    '',
    14, --threepaths encounter
    14, --threepaths encounter
    1,
    0
),
(
    15, --cave encounter
    'Search',
    'Search around the cave, looking for food, valuables, or anything of worthy notion.',
    '1d6+dex',
    1,
    'You search around the cave, and find an extremely large bear that is fast asleep.  You are so stealthy and quiet that the bear does not rise from its slumber.  You sneak right past it.',
    'Searching around the cave noisily, you awaken a large and violent bear that charges at you with the element of surprise and begins mauling you.  The bears tears you limb from limb and turns you into a delicious meal.',
    15, --Cave encounter
    21, --death encounter
    1,
    0
);



-- ------------------------------------------
-- -create options for the tworoads---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    16,
    'Left Path',
    'Continue your journey down the winding path to the left, traversing the heavy foliage and shrubbery in search of adventure',
    '1d4',
    1,
    'You walk down the winding path, often taking the time to step around obstructions in the road caused by low maintenance.',
    '',
    18, --shop Encounter
    18, --shop encounter
    1,
    0
),
(
    16,
    'Right Road',
    'Opt for the main stone road leading to the right.',
    '1d4',
    1,
    'You put your feet down, one after the other, walking along the main stone road leading to the right.',
    '',
    19, --Castle Encounter
    19, --Castle Encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the Wagon encounter---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    17, -- wagon encounter
    'Help',
    'Halt your journey, walk off to the side of the road, and lend a helping hand to the family with the stuck wagon.',
    '1d6+str',
    4,
    'You attempt to help the family, and the tall strong man attacks you with a long jagged sword, revealing his trap and his hostile intentions towards you.  You punch him in the skull, knocking him old cold and sending him into a temporary slumber.  His children reach down to help him and nurse him back to health as you walk away and continue down the road.',
    'You offer to help and they gladly accept.  The moment you begin to use your strong arms to help lift the wagon, the tall strong man stabs you in the kidneys with a long jagged blade, sending you to your quick and untimely death.',
    19, --Castle encounter
    21, --Death encounter
    1,
    0
),
(
    14,
    'Continue On',
    'Continue walking, following the road.',
    '1d4',
    1,
    'You continue down the road, ignoring the family in need of help entirely.  You are too busy to deal with such nuisances.',
    '',
    19, --castle encounter
    17, --wagon encounter
    1,
    0
);

-- ------------------------------------------
-- -create options for the shop---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    18,
    'Steal',
    'Rob the kind old man, helping yourself to anything you might want from his shop',
    '1d6+dex',
    4,
    'You use your slight of hand skills to swipe a varying array of valuable items from his shop without anyone seeing.  You stuff your pockets with all sorts of valuables, leave, and continue along the off-beaten path.',
    'The kind old man notices you trying to steal things from his shop, and begins yelling "Thief! Thief!"  Everyone stares at you awkwardly and you decide it is best to make your leave.  You take off and continue down the off-beaten path.',
    19, --Castle Encounter
    19, --castle encounter
    1,
    0
),
(
    18,
    'Beat Up',
    'Show the old man a thing or two about your fists and how they operate when used on other people for fun.',
    '1d6+str',
    4,
    'You smash everything in sight that moves, swinging your fists in a controlled chaos, striking the old man time and time again until he drops to the ground dazed and confused.  Other people stare at you for your violent display, but that is ok, you beat them up too.  That will teach them.',
    'You try to beat up the old man, but unexpectedly, he knows a thing or two about combat.  He sidesteps you and cold-clocks you on the side of the head with a swift strike that stuns you and causes you to balk at furthering your combative bout.  You run away scared and confused down the off-beaten path.',
    19, --castle Encounter
    19, --castle Encounter
    1,
    0
),
(
    18,
    'Charm',
    'Talk to the old man and convince him to give you free stuff, because you are that great at life.',
    '1d6+cha',
    4,
    'The old man is captivated by your speech, and decides you are one of the greatest people he has ever met in life.  He offers you an item of noteworthy value and you gladly accept it.',
    'The old man sees through your attempt to charm him and is disgusted by your pathetic attempt to weasel free stuff off of him.  He glares at you uncomfortably and hopes that you will leave as soon as possible.  You take your leave and continue further along the off-beaten path.',
    19, --19
    19, --19
    1,
    0
);

-- ------------------------------------------
-- -create options for the dragon---
-- ------------------------------------------
insert into encounter_options (
  encounter_ID,
  option_name,
  option_description,
  option_odds,
  options_pass_case,
  success_text,
  failed_text,
  success_encounter,
  failed_encounter,
  option_images_ID,
  health_consquences
)
values
(
    19,
    'Fight',
    'Charge the dragon in a bold attempt to slay it with your superior combative skills.',
    '1d6+str',
    5,
    'The dragon swoops down and tries to bite you with its terrifying jaws, but you use the opportunity to leap onto the back of its neck.  You use your incredible strength to strangle the dragon to death with your bear hands, becoming a legendary dragon slayer in the process.',
    'Attempting to overpower the dragon, you move towards it, but the dragon is incredibly fast, swoops in and bites your torso with its powerful sharp jaws.  The dragon lifts your body up into the air, swings its neck left to right, and your body tears away from the bite, leaving half of your torso in the dragons jaws.',
    20, --finished Encounter
    21, --death encounter
    1,
    0
),
(
    19,
    'Sneak',
    'Sneak past the dragon while remaining perfectly quiet and hidden.',
    '1d6+dex',
    5,
    'Watching the dragon from the perfect hiding spot, you wait for the perfect moment to move past.  Your feet make nearly no sound at all as you dance across the castle walkways made of stone.  The dragon never once even realized you were even there.  Your skills are legendary and now you are a champion of the lands.',
    'You attempt to move past the dragon without alerting it to your presence, but you clog across the ground loudly and clumsily.  The dragon hears you, sees you, inhales strongly, and unleashes a powerful stream of incinerating dragon-fire at you, cooking your entire body to a crisp.  All that is left of you is dust and ash.',
    20, --Finished encounter
    21, -- death encounter
    1,
    0
),
(
    19,
    'Charm',
    'Use your powers of charismatic persuasion to dominate the dragon',
    '1d6+cha',
    5,
    'You challenge the dragon to a test of wits that it cannot refuse.  Then you ask him the most difficult riddle the dragon has ever heard.  The dragon is unable to answer and admits defeat, begging you for the answer in a fit of rage.  You are now a hero of legendary status.',
    'You attempt to persuade the dragon to let you pass by unharmed, and the dragon, after brief momentary contemplation, decides against it.  It drops down on you with its incredible weight from above, smashing you into a bloody mess on the castle stones.',
    20, --finished Encounter
    21, --death encounter
    1,
    0
);
