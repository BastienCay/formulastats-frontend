import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {DriverComponent} from "./driver/driver.component";
import {TeamComponent} from "./team/team.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Route par défaut
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '/dashboard' } // Route 404 - redirige vers dashboard
];
