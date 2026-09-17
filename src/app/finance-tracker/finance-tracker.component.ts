import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-finance-tracker',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent],
  templateUrl: './finance-tracker.component.html',
  styleUrls: ['./finance-tracker.component.scss']
})
export class FinanceTrackerComponent {
  public subsListSelectedItem?: string;
}
