import { Component, OnInit } from '@angular/core';
import { Roulette } from '../roulette';
import { RACES, FIGHT_SKILLS, NEUTRAL_SKILLS, TRADE_SKILLS, HANDICAPS, QUESTS, CONDITIONS } from '../fixtures';
import { choice, shuffle} from '../utils';



@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  result: Roulette;
  _skills: Array<string>;
  
  constructor() {
    this.result = {};
  }
  
  ngOnInit() {
  }

  
  isValid() {
    for (let cond in CONDITIONS) {
      if (!CONDITIONS[cond](this.result)) {
	console.log("Reshuffle: " + cond);
	return false;
      }
    }
    return true;
  }

  generateHandicap() {
    // Go over the list of handicaps and run a check to see if it procs.
    // Every time a handicap procs, the odds of subsequent ones is halved.
    var i;
    var odds = 8;
    var result = [];
    for (i=0; i<HANDICAPS.length; i++) {
      if (Math.random() * 100 < odds) {
	result.push(HANDICAPS[i]);
	odds /= 2;
      }
    }
    return result;
  }

  ngOnSelect() {
    this._skills = FIGHT_SKILLS.concat(TRADE_SKILLS);
    this._skills = this._skills.concat(NEUTRAL_SKILLS);
    do {
      shuffle(this._skills);
      this.result = {
	race: choice(RACES),
	major: this._skills.slice(0, 3),
	minor: this._skills.slice(3, 6),
	handicaps: this.generateHandicap(),
	quest: choice(QUESTS),
      };
    } while(!this.isValid());
  }

}
