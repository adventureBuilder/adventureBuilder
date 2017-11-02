var dextester = '1d4+dex';
var chatester = '1d6+cha';
var strtester = '1d10+str';
var twentyDex = '1d20+dex';
var twentyStr = '1d20+str';
var twentyCha = '1d20+cha';
var twelvetester = '1d12';
var twentytester = '1d20';
var hundredtester = '1d100';
var sixtester = '1d6';
var fourtester = '1d4';
var eighttester = '1d8';
var billy = { strength: 2, dexterity: 1, charisma: 1 }

function rollDice(odds, character) {

    let tempArr = odds.split('+');
    let diceArr = String(tempArr.splice(0, 1)).split('d');
    let num = 0;
    for (let i = 0; i < diceArr[0]; i++) {
        num += Math.floor(Math.random() * parseInt(diceArr[1])) + 1;
    }

    for (let i = 0; i < tempArr.length; i++) {
        switch (tempArr[i]) {
            case 'dex':
                num += character.dexterity;
                break;
            case 'str':
                num += character.strength;
                break;
            case 'cha':
                num += character.charisma;
                break;
        }
    }

    return num;
}
// The five tests that Paul wrote
test('testing dice roller', () => {
    expect(rollDice(dextester, billy) < 6).toBe(true);
    expect(rollDice(dextester, billy) > 1).toBe(true);
});

test('testing 100 rolls', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(dextester, billy) < 6).toBe(true);
    }
});

test('testing twelve sider', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(twelvetester, billy) < 13).toBe(true);
    }
});

test('testing twenty sider', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(twentytester, billy) < 21).toBe(true);
    }
});

test('testing hundred sider', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(hundredtester, billy) < 101).toBe(true);
    }
});

// The five tests that Seth wrote

test('testing d6 is 6 or under', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(sixtester, billy) <= 6).toBe(true);
    }
});

test('testing d6 is 1 or more', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(sixtester, billy) >= 1).toBe(true);
    }
});

test('testing d4 is 4 or under', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) <= 4).toBe(true);
    }
});

test('testing d4 is 1 or more', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) >= 1).toBe(true);
    }
});

test('testing that d8 is 8 or under', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(eighttester, billy) <= 8).toBe(true);
    }
});

// The five tests that Victoria wrote

test('testing to see if four sided dye can get more than 4', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) > 4).toBe(false);
    }
});

test('testing to see if 100 sided dye can get more than 100', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(hundredtester, billy) > 100).toBe(false);
    }
});

test('testing to see if 8 sided dye can get more than 8', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(eighttester, billy) > 8).toBe(false);
    }
});

test('testing to see if 20 sided dye can get more than 20', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) > 20).toBe(false);
    }
});

test('testing to see if 6 sided dye can get less than 0', () => {
    for (let i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) < 0).toBe(false);
    }
});

// The five tests that blake made
describe('Blake Tests 1d20s', function () {

    test('testing 1d20 cant get more than 20', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentytester, billy) > 20).toBe(false);
        }
    });

    test('testing 1d20 cant get less than 1', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentytester, billy) < 1).toBe(false);
        }
    });

    test('testing 1d20 + billy charisma cant get more than 21', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyCha, billy) > 21).toBe(false);
        }
    });

    test('testing 1d20 + billy charisma cant get less than 2', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyCha, billy) < 2).toBe(false);
        }
    });

    test('testing 1d20 + billy strength cant get more than 23', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyStr, billy) > 23).toBe(false);
        }
    });

    test('testing 1d20 + billy strength cant get less than 3', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyStr, billy) < 3).toBe(false);
        }
    });

    test('testing 1d20 + billy dexterity cant get more than 21', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyDex, billy) > 21).toBe(false);
        }
    });

    test('testing 1d20 + billy dexterity cant get less than 2', () => {
        for (let i = 0; i < 100; i++) {
            expect(rollDice(twentyDex, billy) < 2).toBe(false);
        }
    });

});



/////////////////////////////////
///Testing the story validator///
/////////////////////////////////
function isValid(story) {
    let finalEncounter = false;
    let hasOptions = true;
    let startEncounter = false;

    if (story.encounters) {
        if (story.start_encounter_id) {
            startEncounter = true;
        }
        story.encounters.forEach(encounter => {
            if (parseInt(encounter.final_encounter) === 1) {
                finalEncounter = true;
            } else if (encounter.options.length < 1) {
                hasOptions = false;
            }
        });
    }
    if (startEncounter && finalEncounter && hasOptions) {
        return true;
    }
    return false;
}

let invalidStory1 = {
    "story_id": 1,
    "story_name": "Harrison Ford Punches Ryan Gosling",
    "user_id": 1,
    "story_description": "it actually happened",
    "story_level": 1,
    "completed_at": "2017-10-24T04:13:00.000Z",
    "start_encounter_id": 1,
    "encounters": [
        {
            "encounter_id": 35,
            "encounter_name": "2",
            "encounter_description": "2",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 34,
            "encounter_name": "1",
            "encounter_description": "1",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 33,
            "encounter_name": "SDFGSDFG",
            "encounter_description": "SDFGDFS`",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 32,
            "encounter_name": "SDFGSD",
            "encounter_description": "GWGDSGSD",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 31,
            "encounter_name": "asdfasd",
            "encounter_description": "SDAFASDFA",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 1,
            "encounter_name": "Giant Cat attack",
            "encounter_description": "you are attacked by a giant cat with fangs",
            "final_encounter": 0,
            "story_id": 1,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 1,
                    "encounter_id": 1,
                    "option_name": "sneak",
                    "option_description": "try to sneak past the evil cat",
                    "option_odds": "1d4+dex",
                    "options_pass_case": 3,
                    "success_text": "you snooked away",
                    "failed_text": "the cat bite you",
                    "success_encounter": 1,
                    "failed_encounter": 1,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 2,
                    "encounter_id": 1,
                    "option_name": "flirt",
                    "option_description": "try to make the cat fall in love with your devilish charm",
                    "option_odds": "1d4+cha",
                    "options_pass_case": 3,
                    "success_text": "you seduced the cat and now you have a have cat have person baby",
                    "failed_text": "the cat bite you",
                    "success_encounter": 1,
                    "failed_encounter": 1,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 3,
                    "encounter_id": 1,
                    "option_name": "fight",
                    "option_description": "kinda rude tho?",
                    "option_odds": "1d4+str",
                    "options_pass_case": 3,
                    "success_text": "you killed away the cat",
                    "failed_text": "the cat bite you",
                    "success_encounter": 1,
                    "failed_encounter": 1,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        }
    ]
}
let invalidStory2 = {
    "story_id": 45,
    "story_name": "Harrison Ford Punches Ryan Gosling",
    "user_id": 3,
    "story_description": "The title is kinda self explanatory. ",
    "story_level": 1,
    "completed_at": null,
    "start_encounter_id": 50,
    "encounters": [
        {
            "encounter_id": 50,
            "encounter_name": "Harrison Ford",
            "encounter_description": "You are in downtown LA and you see Harrison Ford and Ryan Gosling. Suddenly Harrison Ford punches Ryan Gosling.",
            "final_encounter": 0,
            "story_id": 45,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 44,
                    "encounter_id": 50,
                    "option_name": "Walk",
                    "option_description": "You walk away because you can't handle this today.",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You successfully walked away and are stress free! Thank god.",
                    "failed_text": "jk lol",
                    "success_encounter": 51,
                    "failed_encounter": 51,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 51,
            "encounter_name": "Beach",
            "encounter_description": "You decided to walk away and find yourself at the beach. Near the water you see Ryan Gosling, recently punched, crying about it to Ryan Reynolds.",
            "final_encounter": 0,
            "story_id": 45,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        }
    ]
}

let validStory1 = {
    "story_id": 19,
    "story_name": "Forest Adventure",
    "user_id": 1,
    "story_description": "Engage on a journey of survival throughout the forest-covered kingdom.",
    "story_level": 1,
    "completed_at": "2017-10-21T04:02:41.000Z",
    "start_encounter_id": 10,
    "encounters": [
        {
            "encounter_id": 10,
            "encounter_name": "Forest",
            "encounter_description": "Your eyes scan across a meadow full of tall grass and colorful flowers.  In the near distance to the right you see a thick forest, the trees stand tall and proud and flourish in the summer air, subtly swaying back and forth in the gentle wind.  To your left is a small dirt road paved with sandy brown clay and rubble, curving slightly to the right, leading the way around the treeline.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 9,
                    "encounter_id": 10,
                    "option_name": "Forest",
                    "option_description": "Go into the forest",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You enter the thick forest in front of you",
                    "failed_text": "You fail.",
                    "success_encounter": 11,
                    "failed_encounter": 10,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 10,
                    "encounter_id": 10,
                    "option_name": "Road",
                    "option_description": "Follow the road",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You follow the small dirt road",
                    "failed_text": "You fail.",
                    "success_encounter": 12,
                    "failed_encounter": 10,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 11,
            "encounter_name": "Wolves",
            "encounter_description": "You hear the howling of wolves close by.  There is an urgent hunger in their cries.  The forest leaves rustle around you as the wolves draw closer.  They emerge from the thickness of the trees into plain sight around you, growling and baring their teeth.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 11,
                    "encounter_id": 11,
                    "option_name": "Fight",
                    "option_description": "Let out a loud and vicious battle cry before charging the wolves and swinging your muscular fists of justice at them in order to pummel them into submission.",
                    "option_odds": "1d6+str",
                    "options_pass_case": 4,
                    "success_text": "The wolves leap at you and you smash each of them in the jaw with a powerful concussive force, launching them into the ground below yelping and crying in pain.",
                    "failed_text": "You are overwhelmed by the sheer number of the wolves, they bite and gnaw on your body from all angles, chewing and devouring your flesh until you fall to the ground a lifeless corpse.",
                    "success_encounter": 14,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 12,
                    "encounter_id": 11,
                    "option_name": "Slip",
                    "option_description": "Use your ninja-like skills to distract the wolves and slip away, vanishing into the woods ",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 4,
                    "success_text": "You make a powerful dash for a nearby cliffside and make a triumphant leap with no hesitation.  The wolves pile up to the cliffside looking down at you as you descend through the air into a river below, landing with a soft splash.  Your scent is wiped from the wolves noses and you leave no tracks behind you for them to follow.",
                    "failed_text": "You pick up a branch to throw at them as a distraction, and as you do, a wolf leaps at you and takes a huge bite out of your arm, deeply wounding you.  The hunger of the wolfpack is enhanced by the smell of blood, and they pounce on top of you one after the other, ripping and tearing away at your body with their teeth until there is almost nothing left but bones wrapped in torn and tattered clothes.",
                    "success_encounter": 14,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 13,
                    "encounter_id": 11,
                    "option_name": "Pacify",
                    "option_description": "Calm and pacify the wolves by using your long years of experience with animals, teaching the wolves that they have more to gain from befriending you than by eating you, thereby gaining their trust and long-lasting wolf friendship.",
                    "option_odds": "1d6+cha",
                    "options_pass_case": 4,
                    "success_text": "The wolves cease the baring their teeth, lingering slowly towards you to begin collectively licking you in a sign of wolfy compassion.  They call-out in howls of sad loneliness as you leave them in pursuit of higher glory.",
                    "failed_text": "Holding out your hands in attempt to calm the wolves, that is the first limb of yours that they remove.  The wolves bite off your hands, causing you to scream in shock and fall to the ground covered in blood.  The wolves proceed by removing your legs and eating you until you are nothing but bones.",
                    "success_encounter": 14,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 12,
            "encounter_name": "Bandits",
            "encounter_description": "Springing out from the foliage on the side of the road, you are surprised by a group of sinister looking bandits.  They surround you while unsheathing bladed weapons, drawing closer to you in an intimidating manner.  They demand all of your money, your shoes, and the clothes off your back.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 14,
                    "encounter_id": 12,
                    "option_name": "Fight",
                    "option_description": "Decide that there is nothing imposing about these weak scrawny bandits and engage them in a combative bout of life or death.  You plan on disarming the first one with your superior athletic ability before using that weapon to slay anyone that might dare oppose your incredible greatness.",
                    "option_odds": "1d6+str",
                    "options_pass_case": 4,
                    "success_text": "The bandits attack you in an uncoordinated manner and you grab the first one by his neck, lift him off his feet and toss him aside like a sack of flour, picking up the weapon he dropped and glaring at the rest of them with a deadly stare.  Apparently having never seen anyone of your strength and ability before, they all turn, cower and run away while you laugh condescendingly at their weak display of courage.",
                    "failed_text": "The bandits begin swinging at you from all angles and you feel a large sharp piece of metal jab into your side, followed by another, and another.  You have lost track of how many times you have been stabbed, the blood seeping out your wounds, you collapse onto the dirt below you as the bandits loot your body for all your valuables.",
                    "success_encounter": 13,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 15,
                    "encounter_id": 12,
                    "option_name": "Slip",
                    "option_description": "Run away.",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 4,
                    "success_text": "You make a break for it, tripping one of the bandits and pushing him aside, causing him to topple over and knock over two more of them.  With your incredible speed, you sprint down the road at an alarming rate, leaving the bandits following weakly behind until they slow down to a walk, having given up the chase.",
                    "failed_text": "You try to make a break for it, but the bandits move too fast, grab you, take all your money, and beat you up.  You are tossed aside onto the side of the road, naked, and badly beaten, forced to start over.",
                    "success_encounter": 13,
                    "failed_encounter": 10,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 16,
                    "encounter_id": 12,
                    "option_name": "Negotiate",
                    "option_description": "Negotiate with the bandits and explain to them that they stand more to gain by allowing you freedom of passage.",
                    "option_odds": "1d6+cha",
                    "options_pass_case": 4,
                    "success_text": "With very quick thinking, you begin barking and yelling at the bandits to stand down using a voice of confident authority.  You tell them that you are the leader of another bandit group just over the hill and that you have an agreement of mutual peace with them.  You are so incredibly convincing that they all completely believe you and allow you to pass unscathed.",
                    "failed_text": "You try to convince them that you are a friendly face, but none of them are buying it.  You have insulted their intelligence by telling them a flat out lie and they decide they want to kill you.  One of them takes its blade and shoves it in your gut, dropping to the ground feeling a brutal agony on your way to deaths door.",
                    "success_encounter": 13,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 13,
            "encounter_name": "Hideout",
            "encounter_description": "You come across a large wooden cabin off the road that seems to be abandoned.  There are wooden cabinets, drawers, and chests that might have something hidden inside of them.  There is a finely crafted bed in the corner that looks very comfortable for catching some much-needed rest.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 19,
                    "encounter_id": 13,
                    "option_name": "Stay",
                    "option_description": "Stay in the hideout overnight, getting some much-needed rest in a comfortable bed.",
                    "option_odds": "1d6",
                    "options_pass_case": 4,
                    "success_text": "You yawn and close your eyes, enjoying the wonderfully comfortable bed and all it has to offer.  It is one of the best nights of sleep you have gotten in a very long time.",
                    "failed_text": "You close your eyes and rest your head, but there are annoying insects making loud and obnoxious sounds all night long.  You do not sleep half as well as you expected to.  Now you feel tired and cranky.",
                    "success_encounter": 13,
                    "failed_encounter": 13,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 18,
                    "encounter_id": 13,
                    "option_name": "Proceed",
                    "option_description": "Continue further down along the small dirt road you started out on and see where it goes.",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You continue further down along the small dirt road you started out on and see where it goes.",
                    "failed_text": "You fail.",
                    "success_encounter": 16,
                    "failed_encounter": 16,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 17,
                    "encounter_id": 13,
                    "option_name": "Search",
                    "option_description": "Search the log cabin for valuable items.",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 4,
                    "success_text": "You search around and you come across a very valuable amulet.  It seems to be worth quite a lot.",
                    "failed_text": "You search around, but all you find is some long underwear.",
                    "success_encounter": 13,
                    "failed_encounter": 13,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 14,
            "encounter_name": "ThreePaths",
            "encounter_description": "You see three roads ahead of you, a long and straight dirt road leading to the left, a wide gray brick road in the center, and an off-beaten path covered in shrubbery leading off to the right up onto a mountain.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 22,
                    "encounter_id": 14,
                    "option_name": "Path to the right",
                    "option_description": "Choose to take the off-beaten path covered in shrubbery leading off to the right",
                    "option_odds": "1d4",
                    "options_pass_case": 4,
                    "success_text": "You deviate off of the main paths, pushing away shrubbery and foliage as you take the off-beaten path.",
                    "failed_text": "You fail.",
                    "success_encounter": 15,
                    "failed_encounter": 15,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 20,
                    "encounter_id": 14,
                    "option_name": "Road to the left",
                    "option_description": "Choose to follow the straight dirt road leading to the left",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You continue your travels down the straight dirt road leading off to the left",
                    "failed_text": "You fail.",
                    "success_encounter": 14,
                    "failed_encounter": 14,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 21,
                    "encounter_id": 14,
                    "option_name": "Road in the middle",
                    "option_description": "Choose to go down the gray brick road in the middle",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You take the main road, continuing your journey towards wherever it may lead you.",
                    "failed_text": "You fail.",
                    "success_encounter": 17,
                    "failed_encounter": 17,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 15,
            "encounter_name": "Cave",
            "encounter_description": "You come upon the mouth of a cave.  All is quiet around you.  The mouth of the cave is large, wide, and imposing.  You wonder what might be inside.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 24,
                    "encounter_id": 15,
                    "option_name": "Search inside",
                    "option_description": "Search around the cave, looking for food, valuables, or anything of worthy notion.",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 1,
                    "success_text": "You search around the cave, and find an extremely large bear that is fast asleep.  You are so stealthy and quiet that the bear does not rise from its slumber.  You sneak right past it.",
                    "failed_text": "Searching around the cave noisily, you awaken a large and violent bear that charges at you with the element of surprise and begins mauling you.  The bears tears you limb from limb and turns you into a delicious meal.",
                    "success_encounter": 15,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 23,
                    "encounter_id": 15,
                    "option_name": "Go back",
                    "option_description": "Turn around and go back.",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "Sensing danger, you leave the cave immediately, going back the way you came.",
                    "failed_text": "You fail.",
                    "success_encounter": 14,
                    "failed_encounter": 14,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 16,
            "encounter_name": "TwoRoads",
            "encounter_description": "You come upon a fork in the road.  There is a less traveled winding path to the left, and a far more traveled wide gray brick road to the right.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 25,
                    "encounter_id": 16,
                    "option_name": "Path to the left",
                    "option_description": "Continue your journey down the winding path to the left, traversing the heavy foliage and shrubbery in search of adventure",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You walk down the winding path, often taking the time to step around obstructions in the road caused by low maintenance.",
                    "failed_text": "You fail.",
                    "success_encounter": 18,
                    "failed_encounter": 18,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 26,
                    "encounter_id": 16,
                    "option_name": "Stone road to the right",
                    "option_description": "Opt for the main stone road leading to the right.",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You put your feet down, one after the other, walking along the main stone road leading to the right.",
                    "failed_text": "You fail.",
                    "success_encounter": 19,
                    "failed_encounter": 19,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 17,
            "encounter_name": "Wagon",
            "encounter_description": "As you are walking along, you see a broken down wagon on the side of the gray brick road.  There is a tall strong looking man with his two children, a son and a daughter, both of whom are attempting to help their father pull the wagon out of the ditch.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 27,
                    "encounter_id": 17,
                    "option_name": "Help the family with the broken wagon",
                    "option_description": "Halt your journey, walk off to the side of the road, and lend a helping hand to the family with the stuck wagon.",
                    "option_odds": "1d6+str",
                    "options_pass_case": 4,
                    "success_text": "You attempt to help the family, and the tall strong man attacks you with a long jagged sword, revealing his trap and his hostile intentions towards you.  You punch him in the skull, knocking him old cold and sending him into a temporary slumber.  His children reach down to help him and nurse him back to health as you walk away and continue down the road.",
                    "failed_text": "You offer to help and they gladly accept.  The moment you begin to use your strong arms to help lift the wagon, the tall strong man stabs you in the kidneys with a long jagged blade, sending you to your quick and untimely death.",
                    "success_encounter": 19,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 28,
                    "encounter_id": 17,
                    "option_name": "Continue along the road",
                    "option_description": "Continue walking, following the road.",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "You continue down the road, ignoring the family in need of help entirely.  You are too busy to deal with such nuisances.",
                    "failed_text": "You fail.",
                    "success_encounter": 19,
                    "failed_encounter": 17,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 18,
            "encounter_name": "Shop",
            "encounter_description": "A kind old man approaches you outside of a building with a sign on it, inviting you into his humble shop.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 29,
                    "encounter_id": 18,
                    "option_name": "Steal",
                    "option_description": "Rob the kind old man, helping yourself to anything you might want from his shop",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 4,
                    "success_text": "You use your slight of hand skills to swipe a varying array of valuable items from his shop without anyone seeing.  You stuff your pockets with all sorts of valuables, leave, and continue along the off-beaten path.",
                    "failed_text": "You fail.",
                    "success_encounter": 19,
                    "failed_encounter": 19,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 30,
                    "encounter_id": 18,
                    "option_name": "Beat him up",
                    "option_description": "Show the old man a thing or two about your fists and how they operate when used on other people for fun.",
                    "option_odds": "1d6+str",
                    "options_pass_case": 4,
                    "success_text": "You smash everything in sight that moves, swinging your fists in a controlled chaos, striking the old man time and time again until he drops to the ground dazed and confused.  Other people stare at you for your violent display, but that is ok, you beat them up too.  That will teach them.",
                    "failed_text": "You fail.",
                    "success_encounter": 19,
                    "failed_encounter": 19,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 31,
                    "encounter_id": 18,
                    "option_name": "Use your personal charm",
                    "option_description": "Talk to the old man and convince him to give you free stuff, because you are that great at life.",
                    "option_odds": "1d6+cha",
                    "options_pass_case": 4,
                    "success_text": "The old man is captivated by your speech, and decides you are one of the greatest people he has ever met in life.  He offers you an item of noteworthy value and you gladly accept it.",
                    "failed_text": "You fail.",
                    "success_encounter": 19,
                    "failed_encounter": 19,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 19,
            "encounter_name": "Castle",
            "encounter_description": "At the end of the road lies an old castle.  Its stones that were once bright white have darkened with age.  You hear the booming screech of a dragon that has been alerted to your presence.  It stomps its legs on top of the castle, gripping the stone with its talons as it eyes you up menacingly.",
            "final_encounter": 0,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 32,
                    "encounter_id": 19,
                    "option_name": "Fight the dragon",
                    "option_description": "Charge the dragon in a bold attempt to slay it with your superior combative skills.",
                    "option_odds": "1d6+str",
                    "options_pass_case": 5,
                    "success_text": "The dragon swoops down and tries to bite you with its terrifying jaws, but you use the opportunity to leap onto the back of its neck.  You use your incredible strength to strangle the dragon to death with your bear hands, becoming a legendary dragon slayer in the process.",
                    "failed_text": "Attempting to overpower the dragon, you move towards it, but the dragon is incredibly fast, swoops in and bites your torso with its powerful sharp jaws.  The dragon lifts your body up into the air, swings its neck left to right, and your body tears away from the bite, leaving half of your torso in the dragons jaws.",
                    "success_encounter": 20,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 33,
                    "encounter_id": 19,
                    "option_name": "Sneak past the dragon",
                    "option_description": "Sneak past the dragon while remaining perfectly quiet and hidden.",
                    "option_odds": "1d6+dex",
                    "options_pass_case": 5,
                    "success_text": "Watching the dragon from the perfect hiding spot, you wait for the perfect moment to move past.  Your feet make nearly no sound at all as you dance across the castle walkways made of stone.  The dragon never once even realized you were even there.  Your skills are legendary and now you are a champion of the lands.",
                    "failed_text": "You attempt to move past the dragon without alerting it to your presence, but you clog across the ground loudly and clumsily.  The dragon hears you, sees you, inhales strongly, and unleashes a powerful stream of incinerating dragon-fire at you, cooking your entire body to a crisp.  All that is left of you is dust and ash.",
                    "success_encounter": 20,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 34,
                    "encounter_id": 19,
                    "option_name": "Charm the dragon",
                    "option_description": "Use your powers of charismatic persuasion to dominate the dragon",
                    "option_odds": "1d6+cha",
                    "options_pass_case": 5,
                    "success_text": "You challenge the dragon to a test of wits that it cannot refuse.  Then you ask him the most difficult riddle the dragon has ever heard.  The dragon is unable to answer and admits defeat, begging you for the answer in a fit of rage.  You are now a hero of legendary status.",
                    "failed_text": "You attempt to persuade the dragon to let you pass by unharmed, and the dragon, after brief momentary contemplation, decides against it.  It drops down on you with its incredible weight from above, smashing you into a bloody mess on the castle stones.",
                    "success_encounter": 20,
                    "failed_encounter": 21,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 20,
            "encounter_name": "Finished",
            "encounter_description": "Having overcome the castle dragon, you have become an accomplished hero of legendary status.",
            "final_encounter": 1,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 21,
            "encounter_name": "Death",
            "encounter_description": "Your life has seen its end.  You are now dead.  Thank you for playing.",
            "final_encounter": 1,
            "story_id": 19,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        }
    ]
}

let validStory2 = {
    "story_id": 2,
    "story_name": "Sample Story",
    "user_id": 1,
    "story_description": "You are confronted by a guard in front of a gate",
    "story_level": 1,
    "completed_at": "2017-10-18T21:55:07.000Z",
    "start_encounter_id": 2,
    "encounters": [
        {
            "encounter_id": 4,
            "encounter_name": "You win",
            "encounter_description": "You got passed the guard you are a real champion!",
            "final_encounter": 1,
            "story_id": 2,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 3,
            "encounter_name": "Jail",
            "encounter_description": "You are in a jail! wow look at whats happend to you",
            "final_encounter": 0,
            "story_id": 2,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 5,
                    "encounter_id": 3,
                    "option_name": "break out",
                    "option_description": "you have a lock pick, do you want to try to pick the lock?",
                    "option_odds": "1d4+str",
                    "options_pass_case": 4,
                    "success_text": "you sneaked the sneak out of there",
                    "failed_text": "you could not sneak out",
                    "success_encounter": 2,
                    "failed_encounter": 3,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 4,
                    "encounter_id": 3,
                    "option_name": "wait",
                    "option_description": "Just serve your time and keep your head down",
                    "option_odds": "1d4",
                    "options_pass_case": 1,
                    "success_text": "you got out early for good behavior",
                    "failed_text": "You fail.",
                    "success_encounter": 4,
                    "failed_encounter": 3,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 35,
                    "encounter_id": 3,
                    "option_name": "Do Nothing",
                    "option_description": "do Absolutly Nothing",
                    "option_odds": "1d20",
                    "options_pass_case": 2,
                    "success_text": "You did nothing.",
                    "failed_text": "You accidentally fell or slippeed through a crack in the wall and escaped",
                    "success_encounter": 3,
                    "failed_encounter": 4,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 2,
            "encounter_name": "Guard at a gate",
            "encounter_description": "An overly aggressive gaurd is standing at the gate",
            "final_encounter": 0,
            "story_id": 2,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 6,
                    "encounter_id": 2,
                    "option_name": "sneak",
                    "option_description": "try to sneak past the guard",
                    "option_odds": "1d4+dex",
                    "options_pass_case": 3,
                    "success_text": "you snooked away",
                    "failed_text": "the guard saw you and put you under arrest for not being sneaky enough",
                    "success_encounter": 4,
                    "failed_encounter": 3,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 7,
                    "encounter_id": 2,
                    "option_name": "befriend",
                    "option_description": "try to befriend the guard so he will let you past the gate",
                    "option_odds": "1d4+cha",
                    "options_pass_case": 3,
                    "success_text": "He was actually a super nice guy and now is your best friend.",
                    "failed_text": "He was having a bad day and so he threw you in jail.",
                    "success_encounter": 4,
                    "failed_encounter": 3,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 8,
                    "encounter_id": 2,
                    "option_name": "fight that guard",
                    "option_description": "",
                    "option_odds": "1d4+str",
                    "options_pass_case": 4,
                    "success_text": "you kicked him in the face and he took a nap",
                    "failed_text": "He was way stronger than you, and threw you in jail",
                    "success_encounter": 4,
                    "failed_encounter": 3,
                    "option_images_id": 1,
                    "health_consequences": 3,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        }
    ]
}

let validStory3 = {
    "story_id": 22,
    "story_name": "Journey Through the Arctic Tundra",
    "user_id": 1,
    "story_description": "A trial of wits and survival in the brutally cold snowy tundra ",
    "story_level": 3,
    "completed_at": "2017-10-26T01:47:31.000Z",
    "start_encounter_id": 22,
    "encounters": [
        {
            "encounter_id": 25,
            "encounter_name": "You died",
            "encounter_description": "you stupid dead person",
            "final_encounter": 1,
            "story_id": 22,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": []
        },
        {
            "encounter_id": 24,
            "encounter_name": "The Lake",
            "encounter_description": "You approach the frozen lake.  The water is frozen solid a full body-length down.  The light reflects brightly off of the ice and into your eyes, causing you to squint with the glare.  You can run across the lake, or walk slowly and carefully to make sure you don't slip.",
            "final_encounter": 0,
            "story_id": 22,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 39,
                    "encounter_id": 24,
                    "option_name": "swim ",
                    "option_description": "swim across the lake",
                    "option_odds": "1d20",
                    "options_pass_case": 10,
                    "success_text": "you swam across the lake, but got dysentery and died",
                    "failed_text": "you don't know how to swim so you died. why would you try to swim you stupid idiot.",
                    "success_encounter": 25,
                    "failed_encounter": 25,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 23,
            "encounter_name": "The Mountains",
            "encounter_description": "You scale the mountains, occasionally losing your footing, feeling your heart skip in fear as you stare down a great distance below.  Feeling the harsh wind batter your body, you shiver with the intense cold of the higher altitude.  You continue your journey forward, following a mountain pass to whatever may lie on the other end.  The path splits in two ways, right and left.",
            "final_encounter": 0,
            "story_id": 22,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 38,
                    "encounter_id": 23,
                    "option_name": "give up",
                    "option_description": "you give up and go to the lake",
                    "option_odds": "1d4",
                    "options_pass_case": 3,
                    "success_text": "you made it back to the field",
                    "failed_text": "you slipped, your foot got stuck, then it became night  and you died",
                    "success_encounter": 22,
                    "failed_encounter": 25,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        },
        {
            "encounter_id": 22,
            "encounter_name": "The Open Fields",
            "encounter_description": "Your feet compress into the thick snow beneath you, making an audible crunching noise.  The wind blows against your face with a biting sting as you press through the open terrain.  There is a frozen lake to the right that is completely iced over.  To your left are mountains that rise high into the horizon.",
            "final_encounter": 0,
            "story_id": 22,
            "encounter_background_images_id": 1,
            "image_name": "Giant Cat attack",
            "image_src": "http://placekitten.com/300/250",
            "options": [
                {
                    "encounter_option_id": 36,
                    "encounter_id": 22,
                    "option_name": "go to the mountains",
                    "option_description": "walk towards the mountains",
                    "option_odds": "1d6+str",
                    "options_pass_case": 2,
                    "success_text": "you walk towards the mountain",
                    "failed_text": "you tripped and died",
                    "success_encounter": 23,
                    "failed_encounter": 25,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                },
                {
                    "encounter_option_id": 37,
                    "encounter_id": 22,
                    "option_name": "go to the lake",
                    "option_description": "you walk to the lake",
                    "option_odds": "1d12",
                    "options_pass_case": 2,
                    "success_text": "you walked to the lake",
                    "failed_text": "you fell onto a rusty sword and died",
                    "success_encounter": 24,
                    "failed_encounter": 25,
                    "option_images_id": 1,
                    "health_consequences": 0,
                    "image_name": "sneak cat",
                    "image_src": "http://placekitten.com/400/441"
                }
            ]
        }
    ]
}


// The five tests that Dan made
describe(`Dan's Tests is valid`, function () {

    test('test invalid story1', () => {

        expect(isValid(invalidStory1)).toBe(false);
    });

    test('test invalid story2', () => {
        expect(isValid(invalidStory2)).toBe(false);

    });

    test('test valid story1', () => {
        expect(isValid(validStory1)).toBe(true);

    });

    test('test valid story2', () => {
        expect(isValid(validStory2)).toBe(true);

    });

    test('test valid story3', () => {
        expect(isValid(validStory3)).toBe(true);

    });

}); 