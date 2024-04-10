import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SteamLoginButtonComponent } from './steam-login-button/steam-login-button.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SteamLoginButtonComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const steamId = params['steamid'];
      if (steamId) {
        // Store SteamID in local storage
        localStorage.setItem('steamid', steamId);
      }
    });
  }
}
