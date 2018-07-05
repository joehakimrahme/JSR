import { Component, OnInit } from '@angular/core';
import { Roulette } from '../roulette';
import { RACES, FIGHT_SKILLS, TRADE_SKILLS, HANDICAPS, QUESTS } from '../fixtures';


function choice(stuff) {
    var idx = Math.floor(Math.random() * stuff.length);
    return stuff[idx];
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function isValid(skills) {
    // have either one major trade skill
    var majorTradeCount = 0;
    for (var skill of skills.slice(0, 3)) {
        if (TRADE_SKILLS.indexOf(skill) > -1) {
            majorTradeCount++;
        }
    }
    // or 2 minor skills
    var minorTradeCount = 0;
    for (var skill of skills.slice(3, 6)) {
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
}

function generateHandicap() {
    // Go over the list of handicaps and run a check to see if it procs.
    // Every time a handicap procs, the odds of subsequent ones is halved.
    var i;
    var odds = 8;
    var result = [];
    for (i=0; i<HANDICAPS.length; i++) {
        var h = HANDICAPS[i]
        if (Math.random() * 100 < odds) {
            result.push(h);
            odds /= 2;
        }
    }
    return result;
}

var skills = FIGHT_SKILLS.concat(TRADE_SKILLS);
do {
    shuffle(skills);
} while(!isValid(skills));


@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

    result: Roulette;
    
    constructor() {
	this.result = {
	    race: choice(RACES),
	    major: skills.slice(0, 3),
	    minor: skills.slice(3, 6),
	    handicaps: generateHandicap(),
	    quest: choice(QUESTS),
	};
    }
    
    ngOnInit() {
  }

}
