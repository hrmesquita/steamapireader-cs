import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserStatsComponent } from './user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, UserStatsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    expect(component.userInfo).toBeUndefined();
    expect(component.userStats).toBeUndefined();
  });

  it('should check if player Steam ID is present', () => {
    const steamId = component['isPlayerSteamIdPresent']();
    expect(steamId).toBeNull();
  });

  it('should check if player user info is present', () => {
    const userInfo = component['isPlayerUserInfoPresent']();
    expect(userInfo).toBeFalsy();
  });

  it('should check if player user stats are present', () => {
    const userStats = component['isPlayerUserStatsPresent']();
    expect(userStats).toBeFalsy();
  });

  it('should load all player info without calling any other methods', () => {
    jest
      .spyOn(window.localStorage['__proto__'], 'getItem')
      .mockReturnValue('123456');

    // @ts-ignore
    const getUserInfoSpy = jest.spyOn(component, 'getUserInfo');
    // @ts-ignore
    const getUserStatsSpy = jest.spyOn(component, 'getUserStats');
    // @ts-ignore
    const loadAllPlayerInfoSpy = jest.spyOn(component, 'loadAllPlayerInfo');

    component.ngOnInit();

    expect(getUserInfoSpy).not.toHaveBeenCalled();
    expect(getUserStatsSpy).not.toHaveBeenCalled();
    expect(loadAllPlayerInfoSpy).toHaveBeenCalled();
    jest.spyOn(window.localStorage, 'getItem').mockRestore();
  });
});
