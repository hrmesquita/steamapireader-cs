import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserInfo } from '../model/user-info.model';
import { UserStats } from '../model/user-stats.model';

@Component({
  selector: 'app-user-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.scss',
})
export class UserStatsComponent implements OnInit {
  isBrowser: boolean;
  userInfo!: UserInfo;
  userStats!: UserStats;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Initializes the component.
   * If running in a browser, checks if the 'steamid' is stored in the local storage.
   * If not, redirects to a specific URL.
   * If 'userStats' is not stored in the local storage, loads the user stats.
   * Otherwise, retrieves the user stats from the local storage.
   */
  ngOnInit(): void {
    if (this.isBrowser) {
      if (!this.isPlayerSteamIdPresent()) {
        window.location.href = '';
      } else {
        if (!this.isPlayerUserInfoPresent()) {
          this.loadUserInfo();
        } else {
          this.loadUserStats();
          this.userInfo = JSON.parse(
            localStorage.getItem('userInfo') as string,
          );
        }
      }
    }
  }

  private isPlayerUserInfoPresent() {
    return localStorage.getItem('userInfo');
  }

  private isPlayerSteamIdPresent() {
    return localStorage.getItem('steamid');
  }

  /**
   * Loads the user statistics from the API and stores them in the local storage.
   */
  loadUserInfo(): void {
    this.http
      .get<UserInfo[]>(
        'http://localhost:7069/api/steamid/' + localStorage.getItem('steamid'),
      )
      .subscribe((response) => {
        this.userInfo = response[0] as UserInfo;
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      });
  }

  loadUserStats(): void {
    this.http
      .get<UserStats>(
        'http://localhost:7069/api/cs/' + localStorage.getItem('steamid'),
      )
      .subscribe((response) => {
        this.userStats = response as UserStats;
        localStorage.setItem('userStats', JSON.stringify(this.userStats));
        console.log(this.userStats);
      });
  }

  hasTotalKills(key: any): boolean {
    return key.name.includes('ak47');
  }
}
