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

  ngOnInit(): void {
    if (this.localStorageService.hasValue('steamid')) {
      this.router.navigateByUrl('stats');
    } else {
      this.route.queryParams.subscribe((params) => {
        const steamId = params['steamid'];
        if (steamId) {
          localStorage.setItem('steamid', steamId);
          this.router.navigateByUrl('stats');
        }
      });
    }
  }
}
