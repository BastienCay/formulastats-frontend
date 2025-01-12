import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {DriverComponent} from "./driver/driver.component";
import {TeamComponent} from "./team/team.component";
import {LeftSidebarComponent} from "./left-sidebar/left-sidebar.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    DriverComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppComponent,
    LeftSidebarComponent
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
