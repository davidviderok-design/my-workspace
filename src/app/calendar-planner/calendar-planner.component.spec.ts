import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CALENDAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent } from 'igniteui-angular';
import { CalendarPlannerComponent } from './calendar-planner.component';

describe('CalendarPlannerComponent', () => {
  let component: CalendarPlannerComponent;
  let fixture: ComponentFixture<CalendarPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarPlannerComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CALENDAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
