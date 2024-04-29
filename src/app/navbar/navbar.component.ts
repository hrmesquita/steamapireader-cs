import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../model/user-info.model';
import { LocalStorageCheckerService } from '../services/local-storage-checker.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userInfo!: UserInfo;

  constructor(private localStorageCheckerService: LocalStorageCheckerService) {}

  ngOnInit(): void {
    if (this.localStorageCheckerService.isBrowser)
      if (window.localStorage.getItem('userInfo')) {
          this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
      }
  }

  hasUserInfo(): boolean {
    return !!this.userInfo;
  }
}
