import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
    declarations: [
	AppComponent,
	RouletteComponent,
	RulesComponent
    ],
    imports: [
	BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
