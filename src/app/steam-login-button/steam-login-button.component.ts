import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-steam-login-button',
  standalone: true,
  imports: [],
  templateUrl: './steam-login-button.component.html',
  styleUrl: './steam-login-button.component.scss',
})
@Injectable({
  providedIn: 'root',
})
export class SteamLoginButtonComponent {
  loginWithSteam() {
    window.location.href = 'http://localhost:7069/api/auth/steam';
  }
}
