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
    if (!this.isBrowser) {
      return;
    }

    if (!this.isPlayerSteamIdPresent()) {
      window.location.href = '';
      return;
    }

    if (!this.isPlayerUserInfoPresent()) {
      this.getUserInfo();
      return;
    }

    if (!this.isPlayerUserStatsPresent()) {
      this.getUserStats();
      return;
    }

    this.loadAllPlayerInfo();
  }

  /**
   * Checks if the player's Steam ID is present in the local storage.
   * @returns {string | null} The player's Steam ID if present, otherwise null.
   */
  private isPlayerSteamIdPresent() {
    return localStorage.getItem('steamid');
  }

  /**
   * Checks if the player's user info is present in the local storage.
   * @returns {string | null} The player's user info if present, otherwise null.
   */
  private isPlayerUserInfoPresent() {
    return localStorage.getItem('userInfo');
  }

  /**
   * Checks if the player user stats are present in the local storage.
   * @returns {string | null} The user stats stored in the local storage, or null if not present.
   */
  private isPlayerUserStatsPresent() {
    return localStorage.getItem('userStats');
  }

  /**
   * Loads all player information from local storage.
   */
  private loadAllPlayerInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
    this.userStats = JSON.parse(localStorage.getItem('userStats') as string);
  }

  /**
   * Loads the user statistics from the API and stores them in the local storage.
   */
  private getUserInfo(): void {
    this.http
      .get<UserInfo[]>(
        'http://localhost:7069/api/steamid/' + localStorage.getItem('steamid'),
      )
      .subscribe((response) => {
        this.userInfo = response[0] as UserInfo;
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        console.log('Successfully loaded user info');
      });
  }

  /**
   * Loads the user statistics by making an HTTP GET request to the API.
   * The user statistics are then stored in the component's state and in the local storage.
   */
  private getUserStats(): void {
    this.http
      .get<UserStats>(
        'http://localhost:7069/api/cs/' + localStorage.getItem('steamid'),
      )
      .subscribe((response) => {
        this.userStats = response as UserStats;
        localStorage.setItem('userStats', JSON.stringify(this.userStats));
        console.log('Successfully loaded user stats');
      });
  }

  hasTotalKills(key: any): boolean {
    return key.name.includes('map');
  }
}
