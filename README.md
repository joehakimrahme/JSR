Joe's Skyrim Roulette
=====================

This is a quick web app written in [Angular](https://angular.io) to help me
enjoy playing [The Elder Scrolls V: Skyrim](https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim),
a game developed and published by Bethesda.


Rationale
---------

The concept of Skyrim Roulette isn't new and has been around forever. The idea
is for players to purposefuly handicap themselves as to add extra challenges and
be forced to find creative solutions to otherwise simple issues.

Several versions of roulettes are available freely online, but I wasn't truly
satisfied with any:

- For starter most of the available ones come as a form of a static image
  requiring you to bring your own random number generator (usually dice). I
  wanted a shiny webapp.

- Most importantly, the majority of Skyrim roulettes I found out there added
  abstract constraints to characters, like moral alignment, political/religious
  views, city of origin and similar things. These constraints are great for
  roleplaying, however they don't give a clear black-or-white success
  conditions. I needed something less subjective and more concrete to define how
  to play.


Quickstart
----------

JSR is an Angular webapp, and as such, it supports all the common hosting
frameworks of Angular. If you're looking for a quick way to run it on your
laptop, here are some simple steps:

	$ git clone https://github.com/joehakimrahme/JSR JSR
	$ cd JSR
	$ ng serve --open


Rules
-----

By clicking the "roll" button, you should generate enough constraints to start
your skyrim roulette playthrough:

- **Race**: Self-explanatory, the race of your character will be chosen for you.
- **Major Skills**: When you start the game, these are **the only** skill trees
  you're allowed to spend perk points on.
- **Minor Skills**: After you reach level 20, you can start spending perk points
  on these skills as well.
- **Quest**: The story quest you're asked to complete.
- **Handicap**p: Zero or more handicaps randomly selected from a list.

The game ends as soon as you finish your assigned quest's mainline. You're free
to do any quest you want to achieve this, as long as it's compatible with the
handicaps you've been assigned.

You're free to play on any level of difficulty you want, but obviously, the
higher the difficulty the more fun you'll have.

Here are the handicaps you might get:

* **Broken Fingers** A childhood accident has damaged both your hands,
  leaving your fingers severely deformed. You lose the ability to hold
  weapons. (Unhanded combat, spells and staves are still fair game)
* **Insomniac** The voices in your head prevent you from falling asleep. The
  loud screams of your own anxiety keep you up and dreading the night. You
  cannot sleep in-game.
* **Stoned** Years of substance abuse have made your body insensitive to natural
  forces. You remain completely apathetic around Standing Stones and refuse to
  accept the sign of their blessing.
* **Pious Mortal** Years of prayers have strenghtened your faith in the
  Divines. You reject the daedras and their cult, you refuse to touch any
  daedric artifact.
* **Disgrace to your Race** Your own culture makes no sense to you, you have no
  natural affinity to your own kin. You cannot use any active racial power you
  may have.
* **Body Odour** Bad breath, poor hygiene, and horrible manners. Nobody
  appreciates your companionship. You have issues making friendships and cannot
  pick up a follower.
* **Dragonfool** You're not the Dragonborn. Never kill the first dragon. Never
  learn to shout. You're just a citizen of Skyrim like everybody else.
* **Agoraphobic** You hate crowds and they hate you. You avoid towns when you
  can. You cannot do any trading in shops within any of the 9 cities.
* **Seasoned Traveler** You've been on the road for as long as you can
  remember. You've crossed lands and seas, braved the elements, and survived all
  weathers. You know how to carefully plan for your trip and how to make it to
  destination alive. You refuse to fast travel.
* **Permadeath** The ultimate challenge: Conquer death itself! Permadeath forces
  you to carefully plan your every move, every action, because any slip up will
  cost you dearly. If you die once, it's game over, throw away the character and
  start new.
