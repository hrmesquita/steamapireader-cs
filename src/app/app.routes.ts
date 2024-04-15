import { Routes } from '@angular/router';
import { SteamLoginButtonComponent } from './steam-login-button/steam-login-button.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

export const routes: Routes = [
  { path: '', component: SteamLoginButtonComponent },
  { path: 'stats', component: UserStatsComponent },
];
