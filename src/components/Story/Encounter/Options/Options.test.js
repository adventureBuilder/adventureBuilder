var dextester = '1d4+dex';
var chatester = '1d6+cha';
var strtester = '1d10+str';
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
    for (i = 0; i < 100; i++) {
        expect(rollDice(dextester, billy) < 6).toBe(true);
    }
});

test('testing twelve sider', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(twelvetester, billy) < 13).toBe(true);
    }
});

test('testing twenty sider', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(twentytester, billy) < 21).toBe(true);
    }
});

test('testing hundred sider', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(hundredtester, billy) < 101).toBe(true);
    }
});

// The five tests that Seth wrote

test('testing d6 is 6 or under', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(sixtester, billy) <= 6).toBe(true);
    }
});

test('testing d6 is 1 or more', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(sixtester, billy) >= 1).toBe(true);
    }
});

test('testing d4 is 4 or under', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(fourtester, billy) <= 4).toBe(true);
    }
});

test('testing d4 is 1 or more', () => {
    for (i = 0; i < 100; i++) {
    expect(rollDice(fourtester, billy) >= 1).toBe(true);
    }
});

test('testing that d8 is 8 or under', () => {
    for (i = 0; i < 100; i++) {
        expect(rollDice(eighttester, billy) <= 8).toBe(true);
    }
});

// The five tests that Victoria wrote

test('testing to see if four sided dye can get more than 4',()=>{
    for(i=0; i < 100; i++){
        expect(rollDice(fourtester, billy) > 4).toBe(false);
    }
});

test('testing to see if 100 sided dye can get more than 100',()=>{
    for(i=0; i < 100; i++){
        expect(rollDice(hundredtester, billy) > 100).toBe(false);
    }
});

test('testing to see if 8 sided dye can get more than 8',()=>{
    for(i=0; i < 100; i++){
        expect(rollDice(eighttester, billy) > 8).toBe(false);
    }
});

test('testing to see if 20 sided dye can get more than 20',()=>{
    for(i=0; i < 100; i++){
        expect(rollDice(fourtester, billy) > 20).toBe(false);
    }
});

test('testing to see if 6 sided dye can get less than 0',()=>{
    for(i=0; i < 100; i++){
        expect(rollDice(fourtester, billy) < 0).toBe(false);
    }
});

// The five tests that blake made