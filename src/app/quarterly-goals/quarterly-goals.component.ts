import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-quarterly-goals',
  imports: [IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent],
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss']
})
export class QuarterlyGoalsComponent {}
