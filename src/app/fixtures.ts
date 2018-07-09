import { Roulette } from './roulette';


export const RACES: string[] = [
  "Altmer",
  "Argonian",
  "Bosmer",
  "Breton",
  "Dunmer",
  "Imperial",
  "Khajit",
  "Nord",
  "Orsimer",
  "Redguard",
]

export const FIGHT_SKILLS: string[] = [
  "Alteration",
  "Archery",
  "Block",
  "Conjuration",
  "Destruction",
  "Heavy Armor",
  "Illusion",
  "Light Armor",
  "One-handed",
  "Restoration",
  "Sneak",
  "Two-handed",
]

export const TRADE_SKILLS: string[] = [
  "Alchemy",
  "Enchanting",
  "Lockpicking",
  "Pickpocket",
  "Smithing",
  "Speech",
]

export const HANDICAPS: string[] = [
  "Insomniac",
  "Stoned",
  "Pious Mortal",
  "Disgrace to your Race",
  "Body Odour",
  "Dragonfool",
  "Agoraphobic",
  "Traveler",
  "Permadeath",
]


export const QUESTS: string[] = [
  "Alduin",
  "Civil War (Imperials)",
  "Civil War (Stormcloacks)",
  "College of Winterhold",
  "Companions",
  "Thieves Guild",
  "Dark Brotherhood",
]

export const CONDITIONS: object = {
  "trade": function (r: Roulette) {
    // have either one major trade skill
    var majorTradeCount = 0;
    for (var skill of r.major) {
      if (TRADE_SKILLS.indexOf(skill) > -1) {
	majorTradeCount++;
      }
    }

    // or 2 minor skills
    var minorTradeCount = 0;
    for (var skill of r.minor) {
      if (TRADE_SKILLS.indexOf(skill) > -1) {
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
  "darkbro-sleep": function (r: Roulette) {
    return !(r.handicaps.indexOf("Insomniac") > -1 && r.quest === "Dark Brotherhood");
  }

  // "no-elves": function (r: Roulette) {
  // 	    if (r.race.includes("mer")) { // It's an elf!
  // 	        return false;
  // 	    }
  // 	    return true;
  // }
}
