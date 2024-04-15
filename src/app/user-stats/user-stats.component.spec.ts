import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatsComponent } from './user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule, UserStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {});

  it('should check if player user info is present', () => {
    // TODO: Write test case
  });

  it('should check if player steam id is present', () => {
    // TODO: Write test case
  });

  it('should load user info', () => {
    // TODO: Write test case
  });

  it('should load user stats', () => {
    // TODO: Write test case
  });

  it('should check if total kills exist', () => {
    // TODO: Write test case
  });
});
