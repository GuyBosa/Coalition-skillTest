import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SecondScheduleComponent } from './second-schedule/second-schedule.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBannerComponent,
    NavComponent,
    HistoryComponent,
    SecondNavComponent,
    ScheduleComponent,
    SecondScheduleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
