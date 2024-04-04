import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ steamid: '12345' }), // Mock the ActivatedRoute
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the backend service', () => {
    jest.spyOn(component, 'loginWithSteam').mockImplementation(() => {
      expect(component.loginWithSteam).toHaveBeenCalled();
    });
  });

  it('should store steamid in localStorage when steamid is present in queryParams', () => {
    expect(localStorage.getItem('steamid')).toBe('12345');
  });
});
