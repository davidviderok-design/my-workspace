import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent } from 'igniteui-angular';
import { HabitStreaksComponent } from './habit-streaks.component';

describe('HabitStreaksComponent', () => {
  let component: HabitStreaksComponent;
  let fixture: ComponentFixture<HabitStreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitStreaksComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitStreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
