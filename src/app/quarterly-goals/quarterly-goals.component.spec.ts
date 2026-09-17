import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular';
import { QuarterlyGoalsComponent } from './quarterly-goals.component';

describe('QuarterlyGoalsComponent', () => {
  let component: QuarterlyGoalsComponent;
  let fixture: ComponentFixture<QuarterlyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyGoalsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
