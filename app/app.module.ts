import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { routing } from './app.routing';

@NgModule ({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HeroDetailComponent, 
                  HeroesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})

export class AppModule {}