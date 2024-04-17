import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LocalStorageCheckerService } from './services/local-storage-checker.service';
import { Router } from '@angular/router'; // Import the Router module

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [LocalStorageCheckerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to stats', () => {
    const router: Router = TestBed.inject(Router); // Declare a variable 'router' of type 'Router'
    const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl'); // Create a spy for the 'navigateByUrl' method
    // @ts-ignore
    component.redirectToStats();
    expect(navigateByUrlSpy).toHaveBeenCalledWith('stats'); // Use the spy in the 'toHaveBeenCalledWith' function
  });

  it('should should store the steam id', () => {
    const localStorageService: LocalStorageCheckerService = TestBed.inject(
      LocalStorageCheckerService,
    ); // Declare a variable 'localStorageService' of type 'LocalStorageCheckerService'
    const hasValueSpy = jest.spyOn(localStorageService, 'hasValue'); // Create a spy for the 'hasValue' method
    // @ts-ignore
    component.ngOnInit();
    expect(hasValueSpy).toHaveBeenCalled(); // Use the spy in the 'toHaveBeenCalled' function
    expect(hasValueSpy).toHaveBeenCalledWith('steamid'); // Use the spy in the 'toHaveBeenCalledWith' function to check if 'steamId' is saved in local storage
  });
});
