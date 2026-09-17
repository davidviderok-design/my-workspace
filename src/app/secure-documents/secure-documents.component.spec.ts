import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent } from 'igniteui-angular';
import { SecureDocumentsComponent } from './secure-documents.component';

describe('SecureDocumentsComponent', () => {
  let component: SecureDocumentsComponent;
  let fixture: ComponentFixture<SecureDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecureDocumentsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
