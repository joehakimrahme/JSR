import { Roulette } from './roulette';


export const RACES: string[] = [
  "Altmer (High Elf)",
  "Argonian",
  "Bosmer (Wood Elf)",
  "Breton",
  "Dunmer (Dark Elf)",
  "Imperial",
  "Khajit",
  "Nord",
  "Orsimer (Orc)",
  "Redguard",
]

export const FIGHT_SKILLS: string[] = [
  "Archery",
  "Conjuration",
  "Destruction",
  "Illusion",
  "One-handed",
  "Two-handed",
]

export const TRADE_SKILLS: string[] = [
  "Alchemy",
  "Enchanting",
  "Smithing",
  "Speech",
]

export const NEUTRAL_SKILLS: string[] = [
  "Alteration",
  "Block",
  "Heavy Armor",
  "Light Armor",
  "Lockpicking",
  "Pickpocket",
  "Restoration",
  "Sneak",
]

export const HANDICAPS: string[] = [
  "Insomniac",
  "Stoned",
  "Pious Mortal",
  "Disgrace to your Race",
  "Body Odour",
  "Dragonfool",
  "Agoraphobic",
  "Seasoned Traveler",
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
  "Dragonborn (Solstheim)",
  "Dawnstar (Dawnstar)",
  "Dawnstar (Vampire)",
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
