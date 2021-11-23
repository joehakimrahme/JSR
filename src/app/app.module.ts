import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { RulesComponent } from './rules/rules.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        RouletteComponent,
        RulesComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule
         ,AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
