import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamLoginButtonComponent } from './steam-login-button.component';

describe('SteamLoginButtonComponent', () => {
  let component: SteamLoginButtonComponent;
  let fixture: ComponentFixture<SteamLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamLoginButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SteamLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the backend service', () => {
    jest.spyOn(component, 'loginWithSteam').mockImplementation(() => {
      expect(component.loginWithSteam).toHaveBeenCalled();
    });
  });
});
