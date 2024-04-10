import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
  public userInfo!: UserStats;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      if (!localStorage.getItem('steamid')) {
        window.location.href = '';
      } else {
        this.loadUserStats();
      }
    }
  }

  loadUserStats(): void {
    this.http
      .get<UserStats[]>(
        'http://localhost:7069/api/steamid/' + localStorage.getItem('steamid'),
      )
      .subscribe((response) => {
        this.userInfo = response[0] as UserStats;
        console.log(this.userInfo.personaname);
        localStorage.setItem('userStats', JSON.stringify(this.userInfo));
      });
  }
}
