import { Routes } from '@angular/router';
import { SteamLoginButtonComponent } from './steam-login-button/steam-login-button.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: SteamLoginButtonComponent },
  { path: 'stats', component: UserStatsComponent },
  { path: 'about', component: AboutComponent }
];
