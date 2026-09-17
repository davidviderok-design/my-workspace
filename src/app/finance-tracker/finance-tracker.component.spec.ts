import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { FinanceTrackerComponent } from './finance-tracker.component';

describe('FinanceTrackerComponent', () => {
  let component: FinanceTrackerComponent;
  let fixture: ComponentFixture<FinanceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceTrackerComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
