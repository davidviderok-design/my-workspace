import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { SmartNotesComponent } from './smart-notes.component';

describe('SmartNotesComponent', () => {
  let component: SmartNotesComponent;
  let fixture: ComponentFixture<SmartNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartNotesComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
