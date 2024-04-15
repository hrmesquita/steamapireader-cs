import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LocalStorageCheckerService } from './services/local-storage-checker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageCheckerService,
  ) {}

  /**
   * Initializes the component.
   * If a 'steamid' value is present in the local storage, navigates to the 'stats' route.
   * If not, checks the query parameters and if a 'steamid' parameter is present,
   * stores it in the local storage and navigates to the 'stats' route.
   */
  ngOnInit(): void {
    if (this.localStorageService.hasValue('steamid')) {
      this.router.navigateByUrl('stats');
    } else {
      this.route.queryParams.subscribe((params) => {
        const steamId = params['steamid'];
        if (steamId) {
          localStorage.setItem('steamid', steamId);
          this.redirectToStats();
        }
      });
    }
  }

  /**
   * Redirects the user to the 'stats' route.
   */
  private redirectToStats() {
    this.router.navigateByUrl('stats');
  }
}
