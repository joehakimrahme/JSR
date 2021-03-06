import { Roulette } from './roulette';


export const RACES: string[] = [
    'Altmer (High Elf)',
    'Argonian',
    'Bosmer (Wood Elf)',
    'Breton',
    'Dunmer (Dark Elf)',
    'Imperial',
    'Khajit',
    'Nord',
    'Orsimer (Orc)',
    'Redguard',
];

export const FIGHT_SKILLS: string[] = [
    'Archery',
    'Conjuration',
    'Destruction',
    'Illusion',
    'One-handed',
    'Two-handed',
];

export const TRADE_SKILLS: string[] = [
    'Alchemy',
    'Enchanting',
    'Smithing',
    'Speech',
];

export const NEUTRAL_SKILLS: string[] = [
    'Alteration',
    'Block',
    'Heavy Armor',
    'Light Armor',
    'Lockpicking',
    'Pickpocket',
    'Restoration',
    'Sneak',
];

export const HANDICAPS: string[] = [
    'Broken Fingers',
    'Insomniac',
    'Stoned',
    'Pious Mortal',
    'Disgrace to your Race',
    'Body Odour',
    'Dragonfool',
    'Agoraphobic',
    'Seasoned Traveler',
    'Permadeath',
];


export const QUESTS: string[] = [
    'Alduin',
    'Civil War (Imperials)',
    'Civil War (Stormcloacks)',
    'College of Winterhold',
    'Companions',
    'Thieves Guild',
    'Dark Brotherhood (mainline)',
    'Destroy the Dark Brotherhood',
    'Dragonborn (Solstheim)',
    'Dawnguard (Dawnguard)',
    'Dawnguard (Vampire)',
];

export const CONDITIONS: object = {
    'trade': function (r: Roulette) {
        // have either one major trade skill
        let majorTradeCount = 0;
        for (const mskill of r.major) {
            if (TRADE_SKILLS.indexOf(mskill) > -1) {
                majorTradeCount++;
            }
        }
        // or 2 minor skills
        let minorTradeCount = 0;
        for (const mskill of r.minor) {
            if (TRADE_SKILLS.indexOf(mskill) > -1) {
                minorTradeCount++;
            }
        }
        if (majorTradeCount >= 1) {
            return true;
        } else if (minorTradeCount >= 2) {
            return true;
        } else {
            return false;
        }
    },
    'darkbro-sleep': function (r: Roulette) {
        // sleeping is required for DB questline
        return !(r.handicaps.indexOf('Insomniac') > -1 && r.quest.indexOf('Dark Brotherhood') > -1);
    },
    'unarmed-khajit': function (r: Roulette) {
        // not sure about this one, but I think only khajit should get BF for now
        return !(r.handicaps.indexOf('Broken Fingers') > -1 && r.race !== 'Khajit');
    },
    'no-double-armor': function (r: Roulette) {
        // you don't want to get Light Armor and Heavy Armor as your major/minor skill, it's a waste
        const _skills = r.major.concat(r.minor);
        return !(_skills.indexOf('Light Armor') > -1 && _skills.indexOf('Heavy Armor') > -1);
    },
    'no-one-two-handed': function (r: Roulette) {
        const _skills = r.major.concat(r.minor);
        return !(_skills.indexOf('One-Handed') > -1 && _skills.indexOf('Two-Handed') > -1);
    }
};
