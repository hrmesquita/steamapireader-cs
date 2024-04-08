import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loginWithSteam() {
    window.location.href = 'http://localhost:7069/api/auth/steam';
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

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
