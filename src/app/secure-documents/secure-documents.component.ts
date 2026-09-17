import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-secure-documents',
  imports: [IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxBadgeComponent],
  templateUrl: './secure-documents.component.html',
  styleUrls: ['./secure-documents.component.scss']
})
export class SecureDocumentsComponent {}
